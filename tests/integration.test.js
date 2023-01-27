/* eslint-disable no-undef */
const Account = require('../src/account');

describe ('integration', () => {
  
  test('successfully logs and prints a number of transactions', () => {
    const account = new Account;
    account.deposit({date: '01/01/2022', credit: 0.00, debit: 500.00});
    account.withdraw({date: '02/01/2022', credit: 50.00, debit: 0.00});
    account.deposit({date: '03/01/2022', credit: 0.00, debit: 100.50});
    account.withdraw({date: '04/01/2022', credit: 200.50, debit: 0.00});
    account.deposit({date: '05/01/2022', credit: 0.00, debit: 10.00}); 
    expect(account.printStatement()).toBe('date || credit || debit || balance\n05/01/2022 ||  || 10.00 || 360.00\n04/01/2022 || 200.50 ||  || 350.00\n03/01/2022 ||  || 100.50 || 550.50\n02/01/2022 || 50.00 ||  || 450.00\n01/01/2022 ||  || 500.00 || 500.00\n');
  });
  
});