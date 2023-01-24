class PrintStatement {
  constructor(log){
    this.log = log
    this.statement = ''
  }
  format(){    
      let statement = "date || credit || debit || balance\n";
      this.log.forEach(transaction => {
        statement += `${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}\n`;
      });
      this.statement = statement;
  }
  
  print(){
    return this.statement
  }

}

module.exports = PrintStatement;