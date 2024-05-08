import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// import { addAdmin } from './addAdmin.js';

const firebaseConfig = {
  apiKey: "AIzaSyAzX9xDi2_dAbNQijuHqZ8MEm-V_-HhYgA",
  authDomain: "sports-day-db.firebaseapp.com",
  projectId: "sports-day-db",
  storageBucket: "sports-day-db.appspot.com",
  messagingSenderId: "828947112094",
  appId: "1:828947112094:web:b3bfe118938080a758db8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
