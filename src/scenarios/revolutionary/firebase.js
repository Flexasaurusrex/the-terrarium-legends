import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBXxh8v9YNn4QF0xJ5Kz8Y9wZ6vQ7_xA8Q",
  authDomain: "the-terrarium-c2070.firebaseapp.com",
  databaseURL: "https://the-terrarium-c2070-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "the-terrarium-c2070",
  storageBucket: "the-terrarium-c2070.firebasestorage.app",
  messagingSenderId: "108744412559225050272",
  appId: "1:108744412559225050272:web:abcdef1234567890"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
