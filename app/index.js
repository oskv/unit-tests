const express = require('express')
const app = express();
const DepositeCalc = require('./deposite-calc.js');
const Bank = require('./bank');

app.get('/:amount/:period', function (req, res) {
    const bank = new Bank();
    const deposite = new DepositeCalc(bank);
    res.send(`You will receive ${deposite.calculate(parseFloat(req.params.amount), parseInt(req.params.period))}$ after ${req.params.period} days`)
})

app.listen(8080, function () {
  console.log('App listening on port 8080!')
})