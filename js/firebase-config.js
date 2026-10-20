// Firebase Web SDK config for shop-ca90f.
// Web config is public by design; protect data with Firestore Security Rules.
export const firebaseConfig = {
  apiKey: 'AIzaSyAQ39-Y6gwc7Ef6R-CCXnn1BWYSMNvmNUM',
  authDomain: 'shop-ca90f.firebaseapp.com',
  projectId: 'shop-ca90f',
  storageBucket: 'shop-ca90f.firebasestorage.app',
  messagingSenderId: '956897595595',
  appId: '1:956897595595:web:b84afd6a6828e0c5290b4e',
  measurementId: 'G-XW9K233X7D'
};
export const isFirebaseConfigured = Object.values(firebaseConfig).every(Boolean);
