const fs = require('fs');
function countStudents(path) {
	let data;
	try {
		data =  fs.readFileSync(path, 'utf-8');
	}
	catch(error) {
		throw new Error('Cannot load the database');
	}
	const lines = data.trim().split('\n');
	const students = {};
	let num = 0;
	for (const line of lines) {
		const [first, field] = line.split(',')
		if (first && field) {
			if (!students[field]) {
				students[field] = [];
			}
			students[field].push(first);
			num++;
		}
	}
	console.log(`Number of students: ${num}`);
	for (const [field, names] of Object.entries(students)) {
		console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
	}
}
module.exports = countStudents;
