// app/(tabs)/MapComponent.web.tsx - REWRITTEN FOR WEB USING @react-google-maps/api

import Constants from 'expo-constants'; // this line was added to solve API issue
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'; // Keep React Native imports for web styling/Views/Text
// Import types from the shared types file
import { MapComponentProps } from '../types'; // Adjust path if types.ts is elsewhere

// Import Google Maps components and hooks
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

const libraries: (keyof google.maps.ControlPosition | keyof google.maps.Data.DrawingMode | keyof google.maps.MapTypeId | keyof google.maps.DrawingMode | keyof google.maps.OverlayView)[] = [];

// --- START API TROUBLESHOOTING REBUILD MARKER (Delete later if desired) ---
const googleMapsApiKey = Constants.expoConfig.extra.googleMapsApiKey;
// --- END API TROUBLESHOOTING REBUILD MARKER ---




const defaultMapOptions = {
    zoom: 5,
    center: { lat: 53.4237, lng: -7.9383 },
};

export default ({ locationsData, selectedIncidentId, handleMarkerPress, mapRef, initialRegion }: MapComponentProps) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: googleMapsApiKey,
        libraries: libraries,
    });

    const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);

    const mapStyle = StyleSheet.create({
        map: {
            width: '100%',
            height: '50%',
        },
    });

    const onLoad = useCallback((map) => {
        setMapInstance(map);
        if (mapRef) {
            mapRef.current = {
                panTo: (latLng: { lat: number; lng: number }) => {
                    map.panTo(latLng);
                },
                setZoom: (zoom: number) => {
                    map.setZoom(zoom);
                },
                // You can add a more consistent 'animateToRegion' if needed
            };
        }
    }, [mapRef]);

    useEffect(() => {
        if (mapInstance && selectedIncidentId !== null) {
            const selectedLocation = locationsData.find(loc => loc.id === selectedIncidentId);
            if (selectedLocation && selectedLocation.coordinates) {
                mapInstance.panTo({ lat: selectedLocation.coordinates.latitude, lng: selectedLocation.coordinates.longitude });
                mapInstance.setZoom(10); // Adjust zoom level as needed
            } else {
                // Optionally, handle the case where the selected ID doesn't match any location
            }
        }
    }, [mapInstance, selectedIncidentId, locationsData]);

    if (loadError) return <View style={mapStyle.map}><Text>Error loading map</Text></View>;
    if (!isLoaded) return <View style={mapStyle.map}><Text>Loading map...</Text></View>;

    const mapOptions = initialRegion ? {
        center: { lat: initialRegion.latitude, lng: initialRegion.longitude },
        zoom: initialRegion.latitudeDelta ? Math.round(Math.log(360 / initialRegion.latitudeDelta) / Math.LN2) : defaultMapOptions.zoom,
    } : defaultMapOptions;

    return (
        <View style={mapStyle.map}>
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={mapOptions}
                onLoad={onLoad}
                onUnmount={() => setMapInstance(null)}
            >
                {locationsData.map((location) => (
                    <MarkerF
                        key={location.id.toString()}
                        position={{ lat: location.coordinates.latitude, lng: location.coordinates.longitude }}
                        title={`${location.location_name}, ${location.country} (${location.year})`}
                        onClick={() => handleMarkerPress(location)}
                    />
                ))}
            </GoogleMap>
        </View>
    );
};