import Currency from './3-currency.js';
class Pricing {
	constructor(amount, currency) {
		if (typeof amount !== 'number') {
			throw new TypeError('must be number');
		}
		if (typeof currency !== 'Currency') {
			throw new TypeError('must be Currency');
		}
		this._name = name;
		thi9s._currency = currency;
	}
