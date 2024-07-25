class Building {
	constructor (sqft) {
		if (typeof sqft !== 'number') {
			throw new TypeError('must be number');
		}
		this._sqft = sqft;
	}
	get sqft() {
		return this._sqft;
	}
	set sqft(value) {
		if (typeof value !== 'number') {
			throw new TypeError('must be number');
		}
	}
	evacuationWarningMessage () {
		throw new Error('Class extending Building must override evacuationWarningMessage');
	}
}
export default Building;
