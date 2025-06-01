import React, { useEffect, useState } from 'react';
import { Platform, Text } from 'react-native';
import { MapComponentProps } from '../types';
import WebMapComponentImplementation from './MapComponent.web';

const MapComponent = React.forwardRef<any, MapComponentProps>(
  (props, ref) => {
    const [NativeMapComponent, setNativeMapComponent] = useState<React.ComponentType<MapComponentProps> | null>(null);

    useEffect(() => {
      if (Platform.OS === 'ios' || Platform.OS === 'android') {
        import('./MapComponent.native')
          .then((module) => setNativeMapComponent(module.default))
          .catch((err) => console.error('Failed to load native map:', err));
      }
    }, []);

    const PlatformSpecificMap = Platform.select({
      ios: NativeMapComponent,
      android: NativeMapComponent,
      web: WebMapComponentImplementation,
      default: WebMapComponentImplementation,
    });

    if (Platform.OS !== 'web' && !NativeMapComponent) {
      return <Text>Loading map...</Text>; // Or some other loading indicator
    }

    const ComponentToRender = PlatformSpecificMap;

    if (!ComponentToRender) {
      return <Text>Error: Map component not found for this platform.</Text>;
    }

    return <ComponentToRender {...props} ref={ref} />;
  }
);

export default MapComponent;