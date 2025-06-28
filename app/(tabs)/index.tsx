// app/(tabs)/index.tsx - COMPLETE CORRECTED CODE

// Import necessary React hooks and components
import React, { useRef, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// Import the main MapComponent - RN will pick .native or .web automatically
//import MapComponent from './MapComponent';

// Import types from the new shared types file
import { LocationData } from '../types'; // Adjust path if types.ts is elsewhere

import MapComponent from './MapComponent';

// --- Import your incident data from the JSON file ---
// !!! IMPORTANT: Ensure this path is correct relative to app/(tabs)/index.tsx !!!
// If your incidents_data.json is in olympic-maps/app/data/, this path '../data/incidents_data.json' is correct.
// If it's elsewhere, you MUST adjust this line.
import incidentsData from '../data/incidents_data.json';

// --- Use the imported data ---
const locationsData: LocationData[] = incidentsData as LocationData[]; // Add type assertion

// Define a fixed height for list items for FlatList performance (getItemLayout)
const ITEM_HEIGHT = 140; // Adjust this value if your card layout changes significantly

// This is the main functional component for the tab screen
export default function TabScreen() {
  // State variable to hold the ID of the currently selected incident (null if none selected)
  const [selectedIncidentId, setSelectedIncidentId] = useState<number | null>(null);

  // Refs to get direct access to the MapView/MapComponent and FlatList components
  // Use 'any' for the mapRef type since the underlying component will be different on web vs native
  const mapRef = useRef<any>(null);
  const listRef = useRef<FlatList<LocationData>>(null); // Add type annotation for FlatList ref

  // --- Handlers for User Interaction ---

  // Function called when a Map Marker is pressed
  const handleMarkerPress = (incident: LocationData) => { // Add type annotation
    // Set the state to the ID of the pressed incident
    setSelectedIncidentId(incident.id);
    console.log('Marker pressed - Selected ID:', incident.id);

    // Find the index of this incident in our data array
    const index = locationsData.findIndex(item => item.id === incident.id);
    if (index !== -1 && listRef.current) {
      // Scroll the FlatList to bring the corresponding card into view
      listRef.current.scrollToIndex({ index: index, animated: true, viewPosition: 0.5 });
    }
    // The marker color will change automatically because the state (selectedIncidentId) updated
  };

    // Function called when a Card in the FlatList is pressed
  const handleCardPress = (incident: LocationData) => { // Add type annotation
    // Set the state to the ID of the pressed incident
    setSelectedIncidentId(incident.id);

    // Animate the map to center on the coordinates of the selected incident's marker
    // This logic will need adjustment for the web map library later
    // Safely check if animateToRegion exists on the ref before calling it
    if (mapRef.current && incident.coordinates && typeof mapRef.current.animateToRegion === 'function') {
      mapRef.current.animateToRegion({
        latitude: incident.coordinates.latitude,
        longitude: incident.coordinates.longitude,
        latitudeDelta: 0.05, // Adjust zoom level (smaller value = more zoom)
        longitudeDelta: 0.05, // Adjust zoom level
      }, 300); // Animation duration in milliseconds

      // The is where I am debugging two way action now working...
    } else if (mapRef.current && incident.coordinates) {
      console.log("Card pressed:", incident.location_name, incident.coordinates);
      mapRef.current.panTo({
        lat: incident.coordinates.latitude,
        lng: incident.coordinates.longitude,
      });
      // You might also want to adjust the zoom level using mapRef.current.setZoom(someValue);
    }
  };

  // --- Render function for each item in the FlatList ---
  const renderLocationItem = ({ item, index }: { item: LocationData; index: number }) => ( // Add type annotation
    // TouchableOpacity makes the card tappable and provides visual feedback
    <TouchableOpacity
      // Apply the base card style, and add the 'selectedCard' style if this item is currently selected
      style={[styles.card, selectedIncidentId === item.id && styles.selectedCard]}
      onPress={() => handleCardPress(item)} // Call our handler when the card is pressed
      activeOpacity={0.8} // How transparent the card becomes when pressed
    >
      {/* Image component - conditionally rendered if item.image_url exists */}
      {item.image_url && (
        <Image
          source={{ uri: item.image_url }} // Load image from the URL
          style={styles.cardImage} // Apply styling
          resizeMode="cover" // How the image should be scaled
          onError={(e) => console.warn('Image failed to load:', item.image_url, e.nativeEvent.error)} // Basic error handling
        />
      )}
      {/* Placeholder View if no image_url or image fails to load */}
        {!item.image_url && ( // Check if image_url is falsy
          <View style={styles.cardImagePlaceholder}>
            <Text style={styles.cardImagePlaceholderText}>No Image</Text>
          </View>
        )}

      {/* View to hold the text details, placed next to the image */}
      <View style={styles.cardDetails}>
        {/* Display Location Name and Country */}
        <Text style={styles.cardTitle}>{item.location_name}, {item.country}</Text>
        {/* Display Year and part of the Event Date */}
        {/* Safely access event_date and split only if it exists */}
        <Text style={styles.cardYear}>Year: {item.year} ({item.event_date ? new Date(item.event_date).toLocaleDateString() : 'N/A'})</Text>

        {/* --- Additional Details from JSON --- */}
        {/* Conditionally render Root Cause if it's available and not the default placeholder */}
        {item.root_cause && item.root_cause !== 'Unknown Cause' && (
            <Text style={styles.cardDetailText}>Root Cause: {item.root_cause}</Text>
        )}
          {/* Conditionally render Failed Element if available and not the default placeholder */}
        {item.failed_element && item.failed_element !== 'Unknown Element' && (
            <Text style={styles.cardDetailText}>Failed Element: {item.failed_element}</Text>
        )}
        {/* Conditionally render Description if available, not the default placeholder, and not just whitespace */}
        {item.description && item.description !== 'No description' && item.description.trim() && (
            // Limit description to 3 lines to keep cards consistent
            <Text style={styles.cardDescription} numberOfLines={3}>{item.description.trim()}</Text>
        )}
        {/* Add more Text elements here for other fields like Capacity, Integrator, etc.
            Remember to add corresponding styles in the StyleSheet below if needed.
        {item.capacity_mwh != null && <Text style={styles.cardDetailText}>Capacity (MWh): {item.capacity_mwh}</Text>}
        */}
      </View>
    </TouchableOpacity>
  );

  // Helper function for FlatList performance when using scrollToIndex
  const getItemLayout = (data: LocationData[] | null | undefined, index: number) => ( // Add type annotation
    { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
  );

  // --- Main Render Function ---
  return (
    // The main container View that stacks the Map and the List vertically
    <View style={styles.container}>
      {/* Map Component (will be native or web version based on platform) */}
      {/* Pass the ref and other necessary props */}
      <MapComponent
        style={styles.map} // <-- ADD THIS LINE
        ref={mapRef} // Pass the ref
        locationsData={locationsData} // Pass the data
        selectedIncidentId={selectedIncidentId} // Pass the selected ID
        handleMarkerPress={handleMarkerPress} // Pass the press handler
        // Add an initialRegion prop here if you want to center the map on data
        initialRegion={{ latitude: 53.4237, longitude: -7.9383, latitudeDelta: 6, longitudeDelta: 6 }} // Example Ireland region
      />

      {/* FlatList Component to display the list of incident cards */}
      {/* Attach the listRef to be able to call its methods */}
      <FlatList
        ref={listRef} // Attach the listRef
        data={locationsData} // The data source for the list
        renderItem={renderLocationItem} // Use the function above to render each item as a card
        keyExtractor={item => item.id.toString()} // Unique key for each list item (convert id to string)
        style={styles.list} // Styles for the FlatList container
        contentContainerStyle={styles.listContent} // Styles for the content *inside* the list (like padding)
        getItemLayout={getItemLayout} // Required for efficient scrollToIndex performance
      />
    </View>
  );
}

// --- StyleSheet for component styling ---
const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the main container fill the screen
    // flexDirection: 'column' is default, so children (map and list) stack vertically
  },
  map: {
    flex: 2, // Map takes up 2 parts of the available vertical space (e.g., 2/3 of the screen)
    width: '100%', // Make map fill the width
  },
  list: {
    flex: 1, // List takes up 1 part of the available vertical space (e.g., 1/3 of the screen)
    width: '100%', // Make list fill the width
    paddingHorizontal: 8, // Add some padding on the left and right of the list items
    // backgroundColor: '#f8f8f8', // Optional: add a light background color to the list area
  },
    listContent: {
    paddingBottom: 16, // Add space at the very bottom of the scrollable content
    paddingTop: 8, // Add space at the very top of the scrollable content (above the first card)
  },
  card: { // Base style for each individual incident card
    flexDirection: 'row', // Arrange children (image and details) horizontally
    backgroundColor: '#fff', // White background for the card
    borderRadius: 8, // Rounded corners
    padding: 12, // Inner space (padding) within the card
    marginVertical: 6, // Vertical space (margin) between cards
    // Optional: add shadow for depth (looks good on both iOS and Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
    alignItems: 'center', // Vertically align items (image and text block) in the center of the card row
    minHeight: ITEM_HEIGHT - 12, // Give card a minimum height based on ITEM_HEIGHT and vertical margin
  },
    selectedCard: { // Additional style applied ONLY to the selected card
      borderColor: 'blue', // Example: Add a blue border
      borderWidth: 2,
      // backgroundColor: '#e0f7fa', // Example: light blue background
  },
  cardImage: { // Style for the image component within the card
    width: 70, // Fixed width for the image
    height: 100, // Fixed height for the image (adjust if your images have a different aspect ratio you want to maintain)
    borderRadius: 4, // Rounded corners for the image
    marginRight: 16, // Space between the image and the text details
    resizeMode: 'cover', // How the image scales within its dimensions (covers the area, may crop)
    backgroundColor: '#eee', // Light grey background shown while loading or if URL is bad
  },
    cardImagePlaceholder: { // Style for the "No Image" fallback View
    width: 70,
    height: 100,
    borderRadius: 4,
    marginRight: 16,
    backgroundColor: '#eee',
    justifyContent: 'center', // Center the text horizontally inside this box
    alignItems: 'center', // Center the text vertically inside this box
  },
    cardImagePlaceholderText: { // Style for the "No Image" text
      fontSize: 10,
      textAlign: 'center',
      color: '#666', // Muted color
  },
  cardDetails: { // Style for the View containing the text details
    flex: 1, // Make this View take up the remaining horizontal space next to the image
    justifyContent: 'center', // Vertically center the text lines within this view
  },
  cardTitle: { // Style for the main title (Location, Country)
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4, // Space below the title
  },
  cardYear: { // Style for the Year and Date line
    fontSize: 14,
    color: '#666', // Muted color
  },
    cardDetailText: { // Style for lines like Root Cause, Failed Element, Capacity, etc.
      fontSize: 12,
      color: '#555', // Slightly darker than year, but still muted
      marginTop: 2, // Space between these detail lines
  },
    cardDescription: { // Style for the Description text
    fontSize: 12,
    color: '#333', // Darker color for main description text
    marginTop: 4, // Space above the description
  },
});