import Currency from './3-currency.js';
class Pricing {
	constructor(amount, currency) {
		if (typeof amount !== 'number') {
			throw new TypeError('must be number');
		}
		if (typeof currency !== 'Currency') {
			throw new TypeError('must be Currency');
		}
		this._amount = amount;
		this._currency = currency;
	}
	get amount() {
		return this._amount;
	}
	set amount(value) {
		if (typeof value !== 'number') {
			throw new TypeError('must be number');
		}
		this._amount = value;
	}
	get currency() {
		return this._currency;
	}
	set currency (value) {
		if (typeof value !== 'Currency') {
			throw new TypeError('must be Currency');
		}
		this._currency = value;
	}
	displayFullPrice() {
		return `${this._amount} ${this.currency.displayFullCurrency()}`;
	}
}
export default Pricing;
