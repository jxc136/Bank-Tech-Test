/* eslint-disable quotes */
class PrintStatement {
  constructor(log) {
    this.log = log;
    this.statement = "";
  }
  format() {
    let statement = "date || credit || debit || balance\n";
    this.log.reverse().forEach((transaction) => {
      statement +=
        `${transaction.date} || ` +
        `${transaction.credit} || ` +
        `${transaction.debit} || ` +
        `${transaction.balance}\n`;
    });
    this.statement = statement;
  }

  print() {
    this.format();
    if (this.statement === "date || credit || debit || balance\n") {
      throw Error("No transactions to print");
    }
    return this.statement;
  }
}

module.exports = PrintStatement;
