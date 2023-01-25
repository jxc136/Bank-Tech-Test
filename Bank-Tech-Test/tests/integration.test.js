/* eslint-disable no-undef */
const Account = require('../src/Account');
require('../src/LogTransaction');
require('../src/Validator');
require('../src/PrintStatement');

describe ('integration', () => {
  
  test('Programme initalizes', () => {
    const account = new Account;
    expect(account.balance).toBe(0);
    expect(() => {
      (account.printStatement());
    }).toThrow('No transactions to print');
  });
  //Test 1 - On initialize 
  // Starts with 0 balance 
  // Starts with 0 transactions
  // Statement has no transactions to print
  
  // Test 2 - Depositing

  // Test 3 - Withdrawing 

  // Test 4 - Printing Statment 

  //
});