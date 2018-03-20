class Bank {
    constructor(){}

    getDepositeRate(period) {
        if(period >= 365 ) {
            return 0.2;
        }
        return 0.15;
    }
}

module.exports = Bank;