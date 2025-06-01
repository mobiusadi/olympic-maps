module.exports = {
  name: "olympic-maps", // Or whatever your app name is
  slug: "olympic-maps", // Or whatever your app slug is
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF"
    }
  },
  web: {
    bundler: 'metro',
    build: {
      babel: {
        plugins: [],
      },
      webpack: (config, { env }) => {
        config.resolve.alias['react-native-maps'] = require.resolve('./web-maps-placeholder.js');
        return config;
      },
    },
    output: 'static', // Or any other web output config you might need
  },
};