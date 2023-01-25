class LogTransaction {

  constructor() {
    this.log = [];
  }

  add(transaction){
    this.log.push(transaction);

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