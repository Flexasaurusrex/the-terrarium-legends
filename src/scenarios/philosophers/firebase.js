import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: Create separate Firebase project for Philosophers
// For now, using same DB as Legends (will work when backend switches to philosophers mode)
const firebaseConfig = {
  apiKey: "AIzaSyDfi77oB5bLi5pJDS7yDpuW9KGnPdgjdDU",
  authDomain: "terrarium-legends.firebaseapp.com",
  databaseURL: "https://terrarium-legends-default-rtdb.firebaseio.com",
  projectId: "terrarium-legends",
  storageBucket: "terrarium-legends.firebasestorage.app",
  messagingSenderId: "206582853246",
  appId: "1:206582853246:web:dfc6dce35f3f4d81926e6d"
};

const app = initializeApp(firebaseConfig, 'philosophers');
export const database = getDatabase(app);
