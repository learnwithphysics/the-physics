import { auth } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

import {
GoogleAuthProvider,
signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

// Signup
document.getElementById("signup").addEventListener("click", () => {

createUserWithEmailAndPassword(auth, email.value, password.value)

.then(() => {

msg.style.color = "green";
msg.innerHTML = "Account Created Successfully";

})

.catch((error) => {

msg.style.color = "red";
msg.innerHTML = error.message;

});

});

// Login
document.getElementById("login").addEventListener("click", () => {

signInWithEmailAndPassword(auth, email.value, password.value)

.then(() => {

msg.style.color = "green";
msg.innerHTML = "Login Successful";

window.location.href = "dashboard.html";

})

.catch((error) => {

msg.style.color = "red";
msg.innerHTML = error.message;

});

});
const provider = new GoogleAuthProvider();

document.getElementById("googleLogin").addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
    window.location.href = "dashboard.html";
  } catch (error) {
    msg.style.color = "red";
    msg.innerHTML = error.message;
  }
});