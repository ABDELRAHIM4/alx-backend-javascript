import Building from './5-building.js';
class SkyHighBuilding extends Building {
	constructor(sqft, floors) {
		super(sqft);
		if (typeof floors !== 'number') {
			throw new TypeError('must be number');
		}
		this._floors = floors;
	}
	get floors() {
		return this._floors;
	}
	set floors(value) {
		if (typeof value !== 'number') {
			throw new TypeError('must be number');
		}
		this._floors = value;
	}
	evacuationWarningMessage(){
		return `Evacuate slowly the ${this._floors} floors.`;
	}
}
export default SkyHighBuilding;
