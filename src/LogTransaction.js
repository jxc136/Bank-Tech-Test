class LogTransaction {

  constructor() {
    this.log = [];
  }

  add(transaction){
    const formattedEntry = this.formatNumbers(transaction);
    this.log.push(formattedEntry);
  }

  formatNumbers(transaction){
    if (transaction.credit === 0) {
      transaction.credit = '';
    } else {transaction.credit = transaction.credit.toFixed(2);
    }
    if (transaction.debit === 0) {
      transaction.debit = '';
    } else {transaction.debit = transaction.debit.toFixed(2);
    }
    transaction.balance = transaction.balance.toFixed(2);
    return transaction;
  }

  returnLog(){
    if (this.log.length === 0 ) {
      throw ('No transactions recorded');
    } else {
      return this.log;
    }
  }
}

module.exports = LogTransaction;