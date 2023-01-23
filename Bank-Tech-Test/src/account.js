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
  };

 
}

module.exports = Account;