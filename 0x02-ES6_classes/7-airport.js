class Airport {
	constructor(name, code) {
		if (typeof name !== 'string') {
			throw new TypeError('must be string');
		}
		if (typeof code !== 'string') {
			throw new TypeError('must be string');
		}
		this._name = name;
		this._code = code;
	}
	toString() {
		return `[object ${this._code}]`;
	}
}
export default Airport;
