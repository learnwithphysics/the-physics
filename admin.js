import { database } from "./firebase.js";

import {
ref,
onValue
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

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