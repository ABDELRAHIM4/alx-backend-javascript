class Currency {
	constructor(code, name) {
		if (typeof code !== 'string') {
			throw new TypeError('must be string');
		}
		if (typeof name !== 'string') {
			throw new TypeError('must be String');
		}
		this._name = name;
		this._code = code;
		}
	get name() {
		return this._name;
	}
	set name(value) {
		if (typeof value !== 'string') {
                        throw new TypeError('must be String');
                }
		this._name = value;
	}
	get code() {
		return this._code;
	}
	set code(value) {
		if (typeof value !== 'string') {
                        throw new TypeError('must be String');
                }
                this._code = value;
        }
	displayFullCurrency() {
		return `${this._name} (${this._code})`;
	}
}
export default Currency;
