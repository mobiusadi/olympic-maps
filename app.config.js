// app.config.js

// No need for fs, path, or manual dotenv.parse() here.
// process.env will be populated by your local environment (from .env file)
// and by Vercel during deployment (from Vercel's Environment Variables settings).

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
      // This is the correct, standard way for process.env
      "googleMapsApiKey": process.env.EXPO_PUBLIC_Maps_API_KEY
    }
  }
};