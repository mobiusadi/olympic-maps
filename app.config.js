// app.config.js
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Manually read and parse the .env file
let env = {};
try {
  const envPath = path.resolve(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    env = dotenv.parse(fs.readFileSync(envPath));
  }
} catch (e) {
  console.warn("Failed to load .env file:", e);
}

// Now 'env' object contains your variables (e.g., env.NEXT_PUBLIC_Maps_API_KEY)
// The rest of your app.config.js code will then use this 'env' object.

module.exports = {
  expo: {
    "name": "olympic-maps",
    "slug": "olympic-maps",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "olympicmaps",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true,
      "package": "com.mobiuscode.olympicmaps"
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "router": {},
      "eas": {
        "projectId": "2ac048e0-74e8-4087-b415-133d0c715a2e"
      },
      // THIS IS THE CORRECTED LINE:
      "googleMapsApiKey": process.env.NEXT_PUBLIC_Maps_API_KEY
    }
  }
};