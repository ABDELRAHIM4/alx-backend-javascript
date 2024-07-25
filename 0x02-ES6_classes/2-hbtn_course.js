class HolbertonCourse {
	constructor(name, length, students) {
		if (typeof name !== 'string') {
			throw new TypeError("name must be string");
		}
		if (typeof length !== 'number') {
			throw new TypeError('length must be number');
		}
		if(!Array.isArray(students) || students.some(student => typeof student !== 'string')) {
			throw new TypeError('students must be array of strings');
		}
		this._name = name;
		this._length = length;
		this._students = students;
	}
	get name() {
		return this._name;
	}
	set name (value) {
		if (typeof value !== 'string') {
			throw new TypeError('must be string');
		}
		this._name = value;
	}
	get length() {
		return this._length;
	}
	set length(value) {
		if (typeof value !== 'number') {
			throw new TypeError('must be number');
		}
		this._length = value;
	}
	get students() {
		return this._students;
	}
	set students(value) {
		if (!Array.isArray(value) || value.some(student => typeof student !== 'string')) {
			throw new TypeError("must be array of strings");
		}
		this._students = value;
	}
}
export default HolbertonCourse;
