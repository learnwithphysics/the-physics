// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAE58pZSsV2R2KAAhhXEMNiGQvoi60TWFE",
  authDomain: "the-physics-cb63b.firebaseapp.com",
  projectId: "the-physics-cb63b",
  storageBucket: "the-physics-cb63b.firebasestorage.app",
  messagingSenderId: "201088094118",
  appId: "1:201088094118:web:b5e40ca3ba7a359d6e8967",
  databaseURL: "https://the-physics-cb63b-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);