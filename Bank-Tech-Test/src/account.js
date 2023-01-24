class Account {
  constructor() {
    this.balance = 0;
  }
  

  validate(transaction) {
    return true
  };
  
  deposit(transaction) {
    
    if (this.validate(transaction) === true){
      this.balance += transaction.debit
    }
    // need to return an error message otherwise
  };

  withdraw(transaction) {

    if (this.validate(transaction) === true && this.balance >= transaction.credit){
      this.balance -= transaction.credit
    }
  };

 
}

module.exports = Account;