import { auth, database } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

import { ref, set, update } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";


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

.then(async (credential) => {

const user = credential.user;

await update(ref(database, "students/" + user.uid), {

loginTime: new Date().toLocaleString(),

online: true

});

msg.style.color = "green";

msg.innerHTML = "Login Successful";

if(user.email === "vishallucky58@gmail.com"){

window.location.href = "admin.html";

}else{

window.location.href = "student.html";

}

})

.catch((error) => {

msg.style.color = "red";
msg.innerHTML = error.message;

});

});
const provider = new GoogleAuthProvider();

document.getElementById("googleLogin").addEventListener("click", async () => {

    try {

        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        await set(ref(database, "students/" + user.uid), {

    name: user.displayName || "Student",

    email: user.email,

    uid: user.uid,

    photo: user.photoURL,

    loginTime: new Date().toLocaleString(),

    online: true,

    progress: 0,

    completedLessons: 0

});

        if (user.email === "vishallucky58@gmail.com") {

    window.location.href = "admin.html";

} else {

    window.location.href = "student.html";

}

    } catch (error) {

        msg.style.color = "red";
        msg.innerHTML = error.message;

    }

});