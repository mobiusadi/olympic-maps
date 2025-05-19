// app/(tabs)/MapComponent.native.tsx - CORRECTED CODE (Removed forwardRef wrapper)

import React from 'react';
import { StyleSheet } from 'react-native';
// This import is only processed for native platforms
import MapView, { Marker } from 'react-native-maps';
// Attempt to import the type definition from index.tsx
import { MapComponentProps } from '../index'; // Import type from index.tsx and MapComponentProps from MapComponent.tsx


// This component contains the native rendering logic for iOS and Android.
// It is exported directly, NOT wrapped in forwardRef.
// It receives props and ref directly because the parent (MapComponent.tsx) uses forwardRef.
export default ({ locationsData, selectedIncidentId, handleMarkerPress, mapRef, initialRegion }: MapComponentProps) => { // Receive props directly, using the interface from MapComponent.tsx
    const mapStyle = StyleSheet.create({
        map: {
          width: '100%',
          height: '50%', // Height takes up 50% of the parent container (which is flex: 2 in index.tsx)
        },
      });

    return (
      // Use the ref and props received
      <MapView style={mapStyle.map} ref={mapRef as any} initialRegion={initialRegion}>
        {locationsData.map((location) => (
          <Marker
            key={location.id.toString()}
            coordinate={location.coordinates}
            // CORRECTED LINE BELOW - Removed extra markup
            title={`${location.location_name}, ${location.country} (${location.year})`}
            description={location.description}
            onPress={() => handleMarkerPress(location)}
            pinColor={selectedIncidentId === location.id ? 'blue' : 'red'}
          />
        ))}
      </MapView>
    );
  }
// REMOVE the React.forwardRef(...) wrapper that was previously here
// REMOVE the original export default MapComponent; line