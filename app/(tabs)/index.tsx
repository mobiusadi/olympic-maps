// app/(tabs)/index.tsx - CLEAN AND CORRECTED VERSION

import React, { useRef, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LocationData } from '../types'; // Adjust path if types.ts is elsewhere
import MapComponent from './MapComponent';

// --- This correctly imports your data from the JSON file ---
import incidentsData from '../data/incidents_data.json';

// --- This correctly uses the imported data ---
const locationsData: LocationData[] = incidentsData as LocationData[];

const ITEM_HEIGHT = 140;

export default function TabScreen() {
  const [selectedIncidentId, setSelectedIncidentId] = useState<number | null>(null);
  const mapRef = useRef<any>(null);
  const listRef = useRef<FlatList<LocationData>>(null);

  const handleMarkerPress = (incident: LocationData) => {
    setSelectedIncidentId(incident.id);
    const index = locationsData.findIndex(item => item.id === incident.id);
    if (index !== -1 && listRef.current) {
      listRef.current.scrollToIndex({ index: index, animated: true, viewPosition: 0.5 });
    }
  };

  const handleCardPress = (incident: LocationData) => {
    setSelectedIncidentId(incident.id);
    if (mapRef.current && incident.coordinates) {
      // For web, the ref has panTo and setZoom methods
      if (typeof mapRef.current.panTo === 'function') {
        mapRef.current.panTo({
          lat: incident.coordinates.latitude,
          lng: incident.coordinates.longitude,
        });
        // Optionally set zoom on card press for web
        // mapRef.current.setZoom(12); 
      } 
      // For native, the ref has animateToRegion
      else if (typeof mapRef.current.animateToRegion === 'function') {
        mapRef.current.animateToRegion({
          latitude: incident.coordinates.latitude,
          longitude: incident.coordinates.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }, 300);
      }
    }
  };

  const renderLocationItem = ({ item }: { item: LocationData }) => (
    <TouchableOpacity
      style={[styles.card, selectedIncidentId === item.id && styles.selectedCard]}
      onPress={() => handleCardPress(item)}
      activeOpacity={0.8}
    >
      {item.image_url ? (
        <Image
          source={{ uri: item.image_url }}
          style={styles.cardImage}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.cardImagePlaceholder}>
          <Text style={styles.cardImagePlaceholderText}>No Image</Text>
        </View>
      )}
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle}>{item.location_name}, {item.country}</Text>
        <Text style={styles.cardYear}>Year: {item.year} ({item.event_date ? new Date(item.event_date).toLocaleDateString() : 'N/A'})</Text>
        {item.root_cause && item.root_cause !== 'Unknown Cause' && (
          <Text style={styles.cardDetailText}>Root Cause: {item.root_cause}</Text>
        )}
        {item.failed_element && item.failed_element !== 'Unknown Element' && (
           <Text style={styles.cardDetailText}>Failed Element: {item.failed_element}</Text>
        )}
        {item.description && item.description !== 'No description' && item.description.trim() && (
          <Text style={styles.cardDescription} numberOfLines={3}>{item.description.trim()}</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  const getItemLayout = (data: LocationData[] | null | undefined, index: number) => (
    { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
  );

  return (
    <View style={styles.container}>
      {/* This now includes the style={styles.map} prop */}
      <MapComponent
        style={styles.map}
        ref={mapRef}
        locationsData={locationsData}
        selectedIncidentId={selectedIncidentId}
        handleMarkerPress={handleMarkerPress}
        initialRegion={{ latitude: 53.4237, longitude: -7.9383, latitudeDelta: 12, longitudeDelta: 12 }}
      />
      <FlatList
        ref={listRef}
        data={locationsData}
        renderItem={renderLocationItem}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        getItemLayout={getItemLayout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 2, // Map takes 2/3 of the space
    width: '100%',
  },
  list: {
    flex: 1, // List takes 1/3 of the space
    width: '100%',
  },
  listContent: {
    paddingBottom: 16,
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    minHeight: ITEM_HEIGHT - 12,
  },
  selectedCard: {
    borderColor: '#007AFF', // A standard blue for selection
    borderWidth: 2,
  },
  cardImage: {
    width: 70,
    height: 100,
    borderRadius: 4,
    marginRight: 16,
    backgroundColor: '#eee',
  },
  cardImagePlaceholder: {
    width: 70,
    height: 100,
    borderRadius: 4,
    marginRight: 16,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImagePlaceholderText: {
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
  },
  cardDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16, // Adjusted for better fit
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardYear: {
    fontSize: 14,
    color: '#666',
  },
  cardDetailText: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
  cardDescription: {
    fontSize: 12,
    color: '#333',
    marginTop: 4,
  },
});