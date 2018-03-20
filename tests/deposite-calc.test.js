const chai = require('chai');
const expect = chai.expect;
const DepositeCalc = require('./../app/deposite-calc');
const fakeRateProvider = {
    getDepositeRate: () => {
        return 0.2;
    }
};

describe('Deposite calculator', function() {
    it('calculate() should return 1200 if amount=1000 and period=100', function() {
        const deposite = new DepositeCalc(fakeRateProvider);
        expect(deposite.calculate(1000, 100)).to.equal(1200);
    });

    it('calculate() should return 2400 if amount=2000 and period=100', function() {
        const deposite = new DepositeCalc(fakeRateProvider);
        expect(deposite.calculate(2000, 100)).to.equal(2400);
    });

    it('calculate() should return 3600 if amount=3000 and period=100', function() {
        const deposite = new DepositeCalc(fakeRateProvider);
        expect(deposite.calculate(3000, 100)).to.equal(3600);
    });

    it('calculate() should throw error if amount and period are not set', function() {
        const deposite = new DepositeCalc(fakeRateProvider);
        expect(() => deposite.calculate()).to.throw();
    });
});