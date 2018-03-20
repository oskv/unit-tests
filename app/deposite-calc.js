class DepositeCalc {
    constructor(rateProvider){
        this.rateProvider = rateProvider;
    }

    calculate(amount, period){
        if(amount === undefined || period === undefined) {
            throw new Error('Invalid params');
        }
        return amount + amount * this.rateProvider.getDepositeRate(period);
    }
}

module.exports = DepositeCalc;