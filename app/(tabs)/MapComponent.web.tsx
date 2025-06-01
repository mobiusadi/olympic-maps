// app/(tabs)/MapComponent.web.tsx - REWRITTEN FOR WEB USING @react-google-maps/api

import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; // Keep React Native imports for web styling/Views/Text
// Import types from the shared types file
import { MapComponentProps } from '../types'; // Adjust path if types.ts is elsewhere

// Import Google Maps components and hooks
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

// Define the Libraries needed for Google Maps JS API (geometry, places, etc.)
// For this simple case, we might not need any, but 'geometry' is common.
const libraries: (keyof google.maps.ControlPosition | keyof google.maps.Data.DrawingMode | keyof google.maps.MapTypeId | keyof google.maps.DrawingMode | keyof google.maps.OverlayView)[] = []; // Add libraries like 'geometry' if needed later

// API Key - REPLACE WITH YOUR ACTUAL GOOGLE MAPS API KEY
// IMPORTANT: For production, use environment variables!
// For testing, you can put it here temporarily, but DO NOT commit your actual key to Git!
const googleMapsApiKey = 'AIzaSyDRZbGauJmIfVHV3R9Y8GoS9rp2Jlbvtyg'; // <---'YOUR_Maps_API_KEY'

// Default map center and zoom (can be overwritten by initialRegion prop)
const defaultMapOptions = {
    zoom: 5, // Default zoom level
    center: { // Default center (e.g., Ireland)
        lat: 53.4237,
        lng: -7.9383,
    },
    // Add other options like mapTypeId, disableDefaultUI, gestures etc.
};


// This component contains the web rendering logic using Google Maps.
// It receives props and ref directly because the parent (MapComponent.tsx) uses forwardRef.
// Use MapComponentProps interface imported from types.ts for props
export default ({ locationsData, selectedIncidentId, handleMarkerPress, mapRef, initialRegion }: MapComponentProps) => { // Receive props directly

    // Hook to load the Google Maps script asynchronously
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: googleMapsApiKey,
        libraries: libraries,
        // Add other options like language, region if needed
    });

    // Map style using React Native StyleSheet (react-native-web handles this)
    const mapStyle = StyleSheet.create({
        map: {
          width: '100%',
          height: '50%', // Height takes up 50% of the parent container (flex: 2 in index.tsx)
        },
    });

    // Handle loading and error states
    if (loadError) {
        return <View style={mapStyle.map}><Text>Error loading map</Text></View>;
    }
    if (!isLoaded) {
         return <View style={mapStyle.map}><Text>Loading map...</Text></View>;
    }

    // Map options, prioritizing the initialRegion prop if provided
    const mapOptions = initialRegion ? {
        center: { lat: initialRegion.latitude, lng: initialRegion.longitude },
        zoom: initialRegion.latitudeDelta ? Math.round(Math.log(360 / initialRegion.latitudeDelta) / Math.LN2) : defaultMapOptions.zoom, // Rough conversion from delta to zoom
        // Note: Google Maps JS API uses lat/lng for center, not { latitude, longitude }
        // Zoom level is different scale than delta. Need conversion or just use a fixed zoom for web.
    } : defaultMapOptions;


    // --- Handle map imperative methods (like animateToRegion) ---
    // You will need to implement this logic using the Google Maps API instance
    // when the ref attaches. This is more complex than react-native-maps.
    // For now, the ref will just attach to the GoogleMap div.
    // Implementing panTo or setCenter based on handleCardPress needs effect hooks.

    // Example of how you might pan to a location on card press (requires ref to GoogleMap instance)
    // This is simplified; a full implementation needs state management and useEffect.
    // If selectedIncidentId changes, find the incident and call map.panTo({lat, lng})


    return (
        <View style={mapStyle.map}>
            {/* The GoogleMap component is where the map renders */}
            {/* Attach the ref to the GoogleMap component's container div */}
             <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }} // Google Maps requires size here
                options={mapOptions}
                onLoad={(mapInstance) => { // Callback when map loads
                    if (mapRef) {
                        // Attach the map instance to the ref
                        // You might need to provide wrapper methods (like animateToRegion)
                        // on an object attached to the ref for consistency with native
                        mapRef.current = mapInstance; // Or an object wrapping mapInstance + methods
                    }
                    console.log("Google Map loaded", mapInstance);
                }}
                onUnmount={(mapInstance) => { // Callback when map unmounts
                    if (mapRef) {
                        mapRef.current = null;
                    }
                    console.log("Google Map unmounted", mapInstance);
                }}
                // Add other event handlers like onClick, onZoomChanged etc.
             >
                {/* Render markers using MarkerF component from the library */}
                {locationsData.map((location) => (
                    <MarkerF
                        key={location.id.toString()}
                        position={{ lat: location.coordinates.latitude, lng: location.coordinates.longitude }} // Google Maps uses { lat, lng }
                        title={`${location.location_name}, <span class="math-inline">\{location\.country\} \(</span>{location.year})`}
                        onClick={() => handleMarkerPress(location)} // Use onClick event
                        // You can add options for icons, labels etc.
                    />
                ))}
             </GoogleMap>
        </View>
    );
  }
// Ensure the React.forwardRef(...) wrapper is REMOVED from around this function
// Ensure the original export default MapComponent; line is REMOVED