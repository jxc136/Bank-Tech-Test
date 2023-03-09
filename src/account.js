/* eslint-disable quotes */
const Validator = require("./validator");
const LogTransaction = require("./logTransaction");
const PrintStatement = require("./printStatement");

class Account {
  constructor() {
    this.balance = 0;
    this.log = new LogTransaction();
  }

  validate(transaction, validator = new Validator()) {
    const validate = validator.validate(this.balance, transaction);
    if (validate === true) {
      return validate;
    } else {
      throw Error("Invalid Transaction");
    }
  }

  deposit(transaction) {
    if (this.validate(transaction) === true) {
      this.balance += transaction.debit;
      this.addBalance(transaction);
      this.logTransaction(transaction);
    }
  }

  withdraw(transaction) {
    if (
      this.validate(transaction) === true &&
      this.balance >= transaction.credit
    ) {
      this.balance -= transaction.credit;
      this.addBalance(transaction);
      this.logTransaction(transaction);
    }
  }

  addBalance(transaction) {
    transaction.balance = this.balance;
    return transaction;
  }

  logTransaction(transaction) {
    this.log.add(transaction);
  }

  printStatement(statement = new PrintStatement(this.log.returnLog())) {
    return statement.print();
  }
}
module.exports = Account;
