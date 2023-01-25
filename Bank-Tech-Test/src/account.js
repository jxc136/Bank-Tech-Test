const Validator = require ('./Validator');
const LogTransaction = require ('./LogTransaction');

class Account {
  constructor() {
    this.balance = 0;
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

  logTransaction(log = new LogTransaction, transaction) {
    log.add(transaction);
  }

  printStatement() {
    throw Error ('No transactions to print');
  }

 
}

module.exports = Account;