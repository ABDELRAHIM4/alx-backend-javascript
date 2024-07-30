function getStudentsByLocation(students, city) {
	const same = students.filter(student => student.location == city);
	return (same);
}
export default getStudentsByLocation;
