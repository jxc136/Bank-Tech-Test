class Account {

  validate(transaction) {
    console.log(transaction)
  };
  
  deposit(transaction) {
    this.validate(transaction);
    console.log(transaction)
  };

 
}

module.exports = Account;