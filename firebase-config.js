// Firebase Configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAE58pZSsV2R2KAAhhXEMNiGQvoi60TWFE",
  authDomain: "the-physics-cb63b.firebaseapp.com",
  projectId: "the-physics-cb63b",
  storageBucket: "the-physics-cb63b.firebasestorage.app",
  messagingSenderId: "201088094118",
  appId: "1:201088094118:web:b5e40ca3ba7a359d6e8967"
};

const app = initializeApp(firebaseConfig);

export default app;