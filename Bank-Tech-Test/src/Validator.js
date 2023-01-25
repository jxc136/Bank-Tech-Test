class Validator {

  validate(balance,transaction) {
    const validDebit = typeof(transaction.debit) === 'number';
    const validCredit = typeof(transaction.credit) === 'number';
    const hasDate = transaction.date;
    const validDebitAmount = transaction.debit <= 1000;
    const validCreditAmount = transaction.credit <= 1000 && transaction.credit <= balance;
    

    if (validDebit && validCredit && hasDate && validDebitAmount && validCreditAmount) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Validator;