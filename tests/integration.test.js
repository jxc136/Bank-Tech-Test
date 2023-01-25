/* eslint-disable no-undef */
const Account = require('../src/Account');

describe ('integration', () => {
  
  test('successfully logs and prints a number of transactions', () => {
    const account = new Account;
    account.deposit({date: '01/01/2022', credit: 0.00, debit: 500.00});
    account.withdraw({date: '02/01/2022', credit: 50.00, debit: 0.00});
    account.deposit({date: '03/01/2022', credit: 0.00, debit: 100.50});
    account.withdraw({date: '04/01/2022', credit: 200.50, debit: 0.00});
    account.deposit({date: '05/01/2022', credit: 0.00, debit: 10.00}); 
    expect(account.printStatement()).toBe('date || credit || debit || balance\n01/01/2022 || 0.00 || 500.00 || 500.00\n02/01/2022 || 50.00 || 0.00 || 450.00\n03/01/2022 || 0.00 || 100.50 || 550.50\n04/01/2022 || 200.50 || 0.00 || 350.00\n05/01/2022 || 0.00 || 10.00 || 360.00\n');
  });
  
});