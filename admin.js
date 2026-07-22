import { auth, database } from "./firebase.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

import {
ref,
onValue
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
onAuthStateChanged(auth, (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    if (user.email !== "vishallucky58@gmail.com") {
        alert("Access Denied!");
        window.location.href = "student.html";
        return;
    }

});
const totalStudents = document.getElementById("totalStudents");
const studentTable = document.getElementById("studentTable");

const studentsRef = ref(database, "students");

onValue(studentsRef, (snapshot) => {

    studentTable.innerHTML = "";

    if (!snapshot.exists()) {

        totalStudents.innerHTML = "0";

        return;

    }

    const students = snapshot.val();

    totalStudents.innerHTML = Object.keys(students).length;

    Object.values(students).forEach(student => {

        studentTable.innerHTML += `

        <tr>

            <td>${student.name || "-"}</td>

            <td>${student.email || "-"}</td>

            <td>${student.loginTime || "-"}</td>

        </tr>

        `;

    });

});