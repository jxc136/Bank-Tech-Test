/* eslint-disable no-undef */
const Validator = require ('../src/Validator');

describe ('Validator', () => {

  test('valid deposit object', () => {
    const validator = new Validator;
    const balance = 0;
    const deposit = {date: '11/12/2021', credit: 0, debit: 10.00};
    expect(validator.validate(balance,deposit)).toEqual(true);
  });

  test('deposit is not a number', () => {
    const validator = new Validator;
    const balance = 0;
    const deposit = {date:'02/03/2022', credit: 0, debit: 'string'};
    expect(validator.validate(balance,deposit)).toEqual(false);
  });

  test('no date', () => {
    const validator = new Validator;
    const balance = 0;
    const deposit = {credit: 0, debit: 10.00};
    expect(validator.validate(balance,deposit)).toEqual(false);
  });

  test('valid deposit amount', () => {
    const validator = new Validator;
    const balance = 0;
    const deposit = {date: 22/12/2020, credit: 0, debit: 37.22};
    expect(validator.validate(balance,deposit)).toEqual(true);
  });

  test('invalidates deposit exceeding 1000', () => {
    const validator = new Validator;
    const balance = 0;
    const deposit = {date: '03/11/2019', credit: 0, debit: 1001.01};
    expect(validator.validate(balance,deposit)).toEqual(false);
  });

  test('validates deposit below 1000', () => {
    const validator = new Validator;
    const balance = 0;
    const deposit = {date: '05/10/2018', credit: 0, debit: 1000.00};
    expect(validator.validate(balance,deposit)).toEqual(true);
  });

  test('withdraw below 1000', () => {
    const validator = new Validator;
    const balance = 1000;
    const withdraw = {date: '05/10/2018', credit: 999.00, debit: 0};
    expect(validator.validate(balance,withdraw)).toEqual(true);
  });

  test('withdraw object is not a number', () => {
    const validator = new Validator;
    const balance = 1000;
    const withdraw = {date: '04/11/2018', credit: 'NAN', debit: 0};
    expect(validator.validate(balance,withdraw)).toEqual(false);
  });

  test('valid withdraw below 1000', () => {
    const validator = new Validator; 
    const balance = 1000;
    const withdraw = {date: '05/10/2018', credit: 999.00, debit: 0};
    expect(validator.validate(balance,withdraw)).toEqual(true);
  });

  test('invalidates withdraw amounts over 1000', () => {
    const validator = new Validator;
    const balance = 0;
    const withdraw = {date: '04/04/2022', credit: 1001.11, debit: 0};
    expect(validator.validate(balance,withdraw)).toEqual(false);
  });
    

});