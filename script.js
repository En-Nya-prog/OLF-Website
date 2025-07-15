console.log("✅ formHandler.js loaded!");

// 📺 Load Homilies
const homilies = [
  {
    title: "Faith in Times of Trouble",
    speaker: "Fr. Andrew Nketiah",
    videoUrl: "https://www.youtube.com/embed/sample-video"
  },
  {
    title: "Hope and Redemption",
    speaker: "Fr Francis Boanu",
    videoUrl: "https://www.youtube.com/embed/sample-video2"
  }
];

function loadHomilies() {
  const homilyList = document.getElementById('homily-list');
  if (!homilyList) {
    console.warn("⚠️ No element with ID 'homily-list' found. Skipping homily rendering.");
    return;
  }

  homilies.forEach(homily => {
    const article = document.createElement('article');
    article.innerHTML = `
      <h2>${homily.title}</h2>
      <p>Speaker: ${homily.speaker}</p>
      <iframe width="560" height="315" src="${homily.videoUrl}" allowfullscreen></iframe>
    `;
    homilyList.appendChild(article);
  });
}

document.addEventListener('DOMContentLoaded', loadHomilies);

// ✅ Firebase v10+ Modular Setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

// Your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAykS3jBK83_qlqaGLoRq0dg5TKrioiHZw",
  authDomain: "church-website-a1902.firebaseapp.com",
  projectId: "church-website-a1902",
  storageBucket: "church-website-a1902.appspot.com",
  messagingSenderId: "4472511827",
  appId: "1:4472511827:web:f2d6b43d0948a501d295a6"
};

 export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 📬 Handle Contact Form Submission
const form = document.getElementById("contactForm");
const status = document.getElementById("form-status");


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const title = document.getElementById("title").value.trim();
  const email = document.getElementById("email").value.trim();
  status.textContent = "Sending...";
  status.style.color = "#555";

  try {
    await addDoc(collection(db, "contact_reports"), {
      name,
      email,
      title,
      createdAt: serverTimestamp()
    });

    status.textContent = "✅ Message saved successfully!";
    status.style.color = "green";
    form.reset();
  } catch (error) {
    console.error("🔥 Firestore Error:", error);
    status.textContent = "❌ Failed to save message.";
    status.style.color = "red";
  }
});
const heroImages = [
  'url("images/R.jpg")',
  'url("images/b1.jpg")',
  'url("images/b2.jpg")'
];
let currentIndex = 0;
const heroSection = document.querySelector('.hero');

// Set initial background
heroSection.style.backgroundImage = heroImages[currentIndex];

// Change background every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % heroImages.length;
  heroSection.style.backgroundImage = heroImages[currentIndex];
}, 5000);



