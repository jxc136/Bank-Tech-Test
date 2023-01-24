const Validator = require ('./Validator');

class Account {
  constructor(validator) {
    this.balance = 0;
    this.validator = validator;
  }
  

  validate(transaction) {
    this.validator.validate(transaction);
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

 
}

module.exports = Account;