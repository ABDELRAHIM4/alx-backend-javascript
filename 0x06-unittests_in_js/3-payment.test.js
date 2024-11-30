const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');  // Import the Utils module
const  sendPaymentRequestToApi = require('./3-payment');  // Import the function to test

describe('sendPaymentRequestToApi', function() {
    it('should call Utils.calculateNumber with correct arguments and return the correct sum', function() {
        const spy = sinon.spy(Utils, 'calculateNumber');  // Create a spy for Utils.calculateNumber
        const totalAmount = 100;
        const totalShipping = 20;

        // Call the function
        sendPaymentRequestToApi(totalAmount, totalShipping);  

        // Validate that the spy was called with the correct arguments
        expect(spy.calledOnce).to.be.true;  // Check that it was called once
        expect(spy.calledWith('SUM', totalAmount, totalShipping)).to.be.true;  // Check the arguments

        // Validate the result of the calculation
        const expectedResult = Utils.calculateNumber('SUM', totalAmount, totalShipping);
        expect(spy.returned(expectedResult)).to.be.true;  // Check that the result matches

        spy.restore();  // Restore the original function
    });
});
