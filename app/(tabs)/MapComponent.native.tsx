// app/(tabs)/MapComponent.native.tsx - REVERTED TO ORIGINAL CORRECTED CODE (Uses react-native-maps, no forwardRef wrapper)

import React from 'react';
import { StyleSheet } from 'react-native';
// This import is only processed for native platforms
import MapView, { Marker } from 'react-native-maps';
// Import types from the new shared types file
import { MapComponentProps } from '../types'; // Adjust path if types.ts is elsewhere

// This component contains the native rendering logic for iOS and Android.
// It is exported directly, NOT wrapped in forwardRef.
// It receives props and ref directly because the parent (MapComponent.tsx) uses forwardRef.
// Use MapComponentProps interface imported from types.ts for props
export default ({ locationsData, selectedIncidentId, handleMarkerPress, mapRef, initialRegion }: MapComponentProps) => { // Receive props directly
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
            // This line should now be correct
            title={`${location.location_name}, <span class="math-inline">\{location\.country\} \(</span>{location.year})`}
            description={location.description}
            onPress={() => handleMarkerPress(location)}
            pinColor={selectedIncidentId === location.id ? 'blue' : 'red'}
          />
        ))}
      </MapView>
    );
  }
// Ensure the React.forwardRef(...) wrapper is REMOVED from around this function
// Ensure the original export default MapComponent; line is REMOVED