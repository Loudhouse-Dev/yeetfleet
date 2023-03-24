// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDD1QaSOJQytwpqY66KKgz0YYYeNGq_hVs',
  authDomain: 'yeetfleet-2c8fa.firebaseapp.com',
  projectId: 'yeetfleet-2c8fa',
  storageBucket: 'yeetfleet-2c8fa.appspot.com',
  messagingSenderId: '820463547552',
  appId: '1:820463547552:web:546729db32aa5faa4d45c5',
  measurementId: 'G-E248F2RFBC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export default app;
