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
const onlineStudents = document.getElementById("onlineStudents");
const todayLogins = document.getElementById("todayLogins");
const studentTable = document.getElementById("studentTable");

const studentsRef = ref(database, "students");

onValue(studentsRef, (snapshot) => {

    studentTable.innerHTML = "";

    if (!snapshot.exists()) {

        totalStudents.innerHTML = "0";

        return;

    }

    const students = snapshot.val();
    let total = 0;

if (students) {
    total = Object.keys(students).length;
}

totalStudents.innerHTML = total;
onlineStudents.innerHTML = total;
todayLogins.innerHTML = total;

   

    Object.values(students).forEach(student => {

        studentTable.innerHTML += `

        <tr>

            <td>${student.name || "-"}</td>

            <td>${student.email || "-"}</td>

            <td>${student.progress || 0}%</td>

        </tr>

        `;

    });

});