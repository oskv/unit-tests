const chai = require('chai');
const expect = chai.expect;
const Bank = require('./../app/bank');

describe('Bank', function() {
    it('getDepositeRate() should return 0.2 if period=365', function() {
        const bank = new Bank();
        expect(bank.getDepositeRate(365)).to.equal(0.2);
    });

    it('getDepositeRate() should return 0.15 if period=100', function() {
        const bank = new Bank();
        expect(bank.getDepositeRate(100)).to.equal(0.15);
    });

    it('getDepositeRate() should not return 0.15 if period=1000', function() {
        const bank = new Bank();
        expect(bank.getDepositeRate(1000)).to.not.equal(0.15);
    });
});