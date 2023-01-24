class Account {
  constructor() {
    this.balance = 0;
  }
  

  validate(transaction) {
    
  };
  
  deposit(transaction) {
    
    if (this.validate(transaction) === true){
      this.balance += transaction.credit
    }
    // need to return an error message otherwise
  };

  withdraw(transaction) {

    this.validate(transaction)

  }

 
}

module.exports = Account;