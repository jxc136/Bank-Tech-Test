class LogTransaction {

  constructor() {
    this.log = [];
  }

  add(){
    this.log.push({date: "04/18/2022", credit: 0, debit: 372.00, balance: 372.00 })

  }

  returnLog(){
    if (this.log.length === 0 ) {
      throw ('No transactions recorded')
    } else {
      return this.log;
    }
  }
}

module.exports = LogTransaction;