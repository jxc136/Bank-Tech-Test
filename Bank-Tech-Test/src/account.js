class Account {
  constructor() {
    this.balance = 0;
  }
  

  validate(transaction) {
    
  };
  
  deposit(transaction) {
    console.log(transaction.credit)
    console.log(this.balance)
    this.validate(transaction);
    this.balance += transaction.credit
  };

 
}

module.exports = Account;