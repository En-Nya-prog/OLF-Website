// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Replace this with your actual Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyAykS3jBK83_qlqaGLoRq0dg5TKrioiHZw",
  authDomain: "church-website-a1902.firebaseapp.com",
  projectId: "church-website-a1902",
  storageBucket: "church-website-a1902.appspot.com",
  messagingSenderId: "4472511827",
  appId: "1:4472511827:web:f2d6b43d0948a501d295a6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
