// booking.js
import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

document.getElementById("bookingForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    date: form.date.value,
    time: form.time.value,
    message: form.message.value,
    createdAt: serverTimestamp()
  };

  try {
    await addDoc(collection(db, "appointments"), data);
    alert("Booking submitted successfully!");
    form.reset();
  } catch (error) {
    alert("There was an error. Please try again.");
    console.error(error);
  }
});

