class HolbertonClass {
	constructor(size, location) {
		if (typeof size !== 'number') {
			throw new TypeError('must be number');
		}
		if (typeof location !== 'string') {
			throw new TypeError('must be string');
		}
		this._size = size;
		this._location = location;
	}
	valueOf() {
		return this._size;
	}
	toString () {
		return this._location;
	}
}
export default HolbertonClass;
