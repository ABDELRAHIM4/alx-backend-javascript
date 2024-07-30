function updateStudentGradeByCity(students, city, newGrades) {
	const people = students.filter((student) => student.location == city);
	return people.map((student) => {
	const map2 = newGrades.find((grade) => grade.studentId == student.id);
	return { ...student, grade: map2 ? map2.grade : 'N/A'};
	});
}
export default updateStudentGradeByCity;
