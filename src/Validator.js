/* eslint-disable quotes */
class Validator {
  validate(balance, transaction) {
    const validDebit = typeof transaction.debit === "number";
    const validCredit = typeof transaction.credit === "number";
    const hasDate = !!transaction?.date;
    const validDebitAmount =
      transaction.debit <= 1000 && transaction.debit >= 0;
    const validCreditAmount =
      transaction.credit <= 1000 &&
      transaction.credit >= 0 &&
      transaction.credit <= balance;

    return (
      validDebit &&
      validCredit &&
      hasDate &&
      validDebitAmount &&
      validCreditAmount
    );
  }
}
module.exports = Validator;
