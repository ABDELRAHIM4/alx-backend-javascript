interface Student {
    firstName : string;
    lastName : string;
    age : number;
    location :string;
    }
const student1 : Student = {
    firstName : "ABDELRAHIM",
    lastName : "AHMED",
    age : 20,
    location : "America",
    }
const student2 : Student = {
    firstName : "MOHAMMED",
    lastName : "NASSER",
    age : 50,
    location :"Sudan",
    }
const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach((student) => {
const row = table.insertRow();
const first = row.insertCell();
const location = row.insertCell();
first.innerHTML = student.firstName;
location.innerHTML = student.location;
});
