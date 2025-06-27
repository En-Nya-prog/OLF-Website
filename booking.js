// booking.js
import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

document.getElementById("appointment-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form listener is working");

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    date: form.date.value,
    time: form.time.value,
    message: form.message.value,
    createdAt: serverTimestamp()
  };
 console.log("Booking data:", data);
  try {
    await addDoc(collection(db, "appointments"), data);
    console.log("Booking submitted successfully:", data);
    alert("Booking submitted successfully!");
    form.reset();
  } catch (err) {
    alert("Something went wrong. Please try again.");
    console.error(err);
  }
});
