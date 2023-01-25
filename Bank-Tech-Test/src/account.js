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
    // need to return an error message otherwise
  }

  withdraw(transaction) {

    if (this.validate(transaction) === true && this.balance >= transaction.credit){
      this.balance -= transaction.credit;
      this.logTransaction;
    }
  }

  addBalance(transaction){
    transaction.balance = this.balance;
    return transaction;
  }

  logTransaction(log = this.log, transaction) {
    log.add(transaction);
  }

  printStatement(statement = new PrintStatement(this.log),) {
    let printLog = this.log.returnLog;
    statement.print(printLog);
  }

 
}

module.exports = Account;