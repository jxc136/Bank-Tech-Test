/* eslint-disable no-undef */
const Validator = require ('../src/Validator');

describe ('Validator', () => {
    
  // Test 1 - Valid deposit object

  test('valid deposit object', () => {
    const validator = new Validator;
    const deposit = {date: '11/12/2021', credit: 0, debit: 10.00};
    expect(validator.validate(deposit)).toEqual(true);
  });

  // Test 2 - Invalid deposit object

  test('deposit is not a number', () => {
    const validator = new Validator;
    const deposit = {date:'02/03/2022', credit: 0, debit: 'string'};
    expect(validator.validate(deposit)).toEqual(false);
  });

  test('no date', () => {
    const validator = new Validator;
    const deposit = {credit: 0, debit: 10.00};
    expect(validator.validate(deposit)).toEqual(false);
  });


  //  Test 3 - Valid deposit amount

  test('valid deposit amount', () => {
    const validator = new Validator;
    const deposit = {date: 22/12/2020, credit: 0, debit: 37.22};
    expect(validator.validate(deposit)).toEqual(true);
  });

  // Test 4 - Invalid deposit amount

  test('deposit exceeds 1000', () => {
    const validator = new Validator;
    const deposit = {date: '03/11/2019', credit: 0, debit: 1001.01};
    expect(validator.validate(deposit)).toEqual(false);
  });

  // // Test 5 - Valid deposit amount

  test('deposit below 1000', () => {
    const validator = new Validator;
    const deposit = {date: '05/10/2018', credit: 0, debit: 1000.00};
    expect(validator.validate(deposit)).toEqual(true);
  });

  // Test 6 - valid withdraw object

  test('withdraw below 1000', () => {
    const validator = new Validator;
    const withdraw = {date: '05/10/2018', credit: 999.00, debit: 0};
    expect(validator.validate(withdraw)).toEqual(true);
  });

  // Test 7 - Invalid Withdraw object

  test('withdraw object is not a number', () => {
    const validator = new Validator;
    const withdraw = {date: '04/11/2018', credit: 'NAN', debit: 0};
    expect(validator.validate(withdraw)).toEqual(false);
  });

  // Test 7 - Valid Withdraw amount

  test('withdraw below 1000', () => {
    const validator = new Validator; 
    const withdraw = {date: '05/10/2018', credit: 999.00, debit: 0};
    expect(validator.validate(withdraw)).toEqual(true);
  });

  // Test 8 - Invalid Withdraw amount

  test('invalid withdraw amount', () => {
    const validator = new Validator;
    const withdraw = {date: '04/04/2022', credit: 1001.11, debit: 0};
    expect(validator.validate(withdraw)).toEqual(false);
  });
    

});