// app/(tabs)/MapComponent.tsx - COMPLETE CORRECTED CODE (Conditional Require Pattern)

import React from 'react';
import { Platform } from 'react-native';
// Import the types from the shared types file
import { MapComponentProps } from '../types'; // Adjust path if types.ts is elsewhere

// We will NOT import the platform-specific implementations at the top level.
// Instead, we'll use 'require' conditionally inside the component.
// import NativeMapComponentImplementation from './MapComponent.native'; // REMOVE or comment out this line
// import WebMapComponentImplementation from './MapComponent.web'; // REMOVE or comment out this line


// Define props the component will accept (imported from types.ts)
// interface MapComponentProps { ... } // REMOVE this definition if it's still here


// This is the main MapComponent that index.tsx imports.
// It uses Platform.select and conditional 'require' to choose which platform-specific implementation to render.
// We use forwardRef here to pass the ref from index.tsx down to the chosen implementation.
const MapComponent = React.forwardRef<any, MapComponentProps>(
  (props, ref) => { // Receive all props and the ref passed from the parent (index.tsx)

    // Select the correct component implementation based on the platform using conditional require
    const PlatformSpecificMapImplementation = Platform.select({
      ios: () => require('./MapComponent.native').default, // Use a function returning require
      android: () => require('./MapComponent.native').default, // Use a function returning require
      web: () => require('./MapComponent.web').default, // Use a function returning require
      default: () => require('./MapComponent.web').default, // Fallback - Use a function returning require
    });

    // Call the function returned by Platform.select to get the component, then render it
    const ComponentToRender = PlatformSpecificMapImplementation?.(); // Call the selected function

    if (!ComponentToRender) {
        // You could render a fallback here if Platform.select returned undefined (shouldn't happen with default)
        return <Text>Loading map...</Text>; // Or null, or a simple View
    }


    // Render the selected platform-specific implementation component,
    // passing down all received props and the ref.
    return <ComponentToRender {...props} ref={ref} />;
  }
);

export default MapComponent;