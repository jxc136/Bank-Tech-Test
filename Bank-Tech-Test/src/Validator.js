class Validator {

  validate(transaction){
    if (typeof((transaction.debit)) === 'number' && 
    typeof((transaction.credit)) === 'number' &&
    transaction.date && transaction.debit <= 1000
    && transaction.credit <= 1000 ) {
      return true;
    }
    else {return false;}
  }
}
module.exports = Validator;