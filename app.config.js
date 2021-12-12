require('dotenv').config()

export default {
  expo: {
    name: 'Flashcards',
    slug: 'flashcards',
    version: '1.0.0',
    extra: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
  },
}