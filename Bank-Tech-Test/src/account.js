const Validator = require ('./Validator');

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
    }
  }

  printStatement() {
    throw Error ('No transactions to print');
  }

 
}

module.exports = Account;