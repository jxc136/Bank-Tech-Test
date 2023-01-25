const Validator = require ('./Validator');
const LogTransaction = require ('./LogTransaction');
const PrintStatement = require('./PrintStatement');

class Account {
  constructor() {
    this.balance = 0;
    this.log = new LogTransaction;
  }
  

  validate(transaction, validator = new Validator()) {
    return validator.validate(transaction);
  }
  
  deposit(transaction) {
    
    if (this.validate(transaction) === true){
      this.balance += transaction.debit;
    }
    this.addBalance(transaction);
    this.logTransaction(transaction);
    // need to return an error message otherwise
  }

  withdraw(transaction) {

    if (this.validate(transaction) === true && this.balance >= transaction.credit){
      this.balance -= transaction.credit;
      this.addBalance(transaction);
      this.logTransaction(transaction);
    }
  }

  addBalance(transaction){
    transaction.balance = this.balance;
    return transaction;
  }

  logTransaction(transaction) {
    this.log.add(transaction);
  }

  printStatement(statement = new PrintStatement(this.log.returnLog()),) {
    const printLog = this.log.returnLog();
    console.log(printLog);
    console.log(statement.print());
    return statement.print();
  }

 
}

module.exports = Account;