/* eslint-disable no-undef */
const Account = require('../src/Account');

describe ('integration', () => {
  
  test('balance is logged and appended to a transaction', () => {
    const account = new Account;
    account.deposit({date: '01/01/2022', credit: 0.00, debit: 500.00});
    account.withdraw({date: '02/01/2022', credit: 50.00, debit: 0.00});
    account.deposit({date: '03/01/2022', credit: 0.00, debit: 100.50});
    account.withdraw({date: '04/01/2022', credit: 200.50, debit: 0.00});
    account.deposit({date: '05/01/2022', credit: 0.00, debit: 10.00}); 
    expect(account.printStatement()).toBe('date || credit || debit || balance\n01/01/2022 || 0 || 500 || 500\n02/01/2022 || 50 || 0 || 450\n03/01/2022 || 0 || 100.5 || 550.5\n04/01/2022 || 200.5 || 0 || 350\n05/01/2022 || 0 || 10 || 360\n');
  });
  
  // test('Programme initalizes', () => {
  //   const account = new Account;
  //   expect(account.balance).toBe(0);
  //   expect(() => {
  //     (account.printStatement());
  //   }).toThrow('No transactions to print');
  // });

  // Test 2 - Depositing

  // Test 3 - Withdrawing 

  // Test 4 - Printing Statment 

  //
});