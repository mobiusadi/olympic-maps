// app/types.ts - NEW FILE FOR SHARED TYPES

import { ForwardedRef } from 'react';

// Define the shape of your incident data objects for TypeScript
export interface LocationData {
  id: number;
  latitude: number;
  longitude: number;
  coordinates: { latitude: number; longitude: number };
  location_name: string;
  country: string;
  year: number;
  event_date: string | null;
  description: string | null;
  root_cause: string | null;
  failed_element: string | null;
  image_url: string | null;
  // Add other fields here if they are in your JSON and you want to use them
  capacity_mwh?: number | null; // Example: use '?' for optional fields
}

// Define props for the MapComponent
export interface MapComponentProps {
  locationsData: LocationData[];
  selectedIncidentId: number | null;
  handleMarkerPress: (location: LocationData) => void;
  // Note: mapRef type is 'any' here because it could point to a native MapView or a web View
  mapRef: ForwardedRef<any>;
  // Add initialRegion prop here if you're using it
  initialRegion?: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}

// You can add other shared interfaces or types here in the future