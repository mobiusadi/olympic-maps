// app/(tabs)/MapComponent.web.tsx - COMPLETE CORRECTED CODE (Removed forwardRef wrapper, imported types)

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// No react-native-maps import in this file
// Import types from the new shared types file
import { MapComponentProps } from '../types'; // Adjust path if types.ts is elsewhere


// This component contains the web rendering logic (placeholder for now).
// It is exported directly, NOT wrapped in forwardRef.
// It receives props and ref directly because the parent (MapComponent.tsx) uses forwardRef.
// Use MapComponentProps interface imported from types.ts for props
export default ({ locationsData, selectedIncidentId, handleMarkerPress, mapRef, initialRegion }: MapComponentProps) => { // Receive props directly
    const mapStyle = StyleSheet.create({
        map: {
          width: '100%',
          height: '50%', // Height takes up 50% of the parent container (which is flex: 2 in index.tsx)
          backgroundColor: '#ccc', // Grey placeholder background
          justifyContent: 'center',
          alignItems: 'center',
        },
      });

    return (
      // Use the ref and props received
      // Note: ref will be for a View element on web
      <View style={mapStyle.map} ref={mapRef as any}> {/* Cast ref for View */}
        <Text>Map not available on web yet</Text>
        {/* We will put the actual web map component here later */}
      </View>
    );
  }
// Ensure the React.forwardRef(...) wrapper is REMOVED from around this function
// Ensure the original export default MapComponent; line is REMOVED