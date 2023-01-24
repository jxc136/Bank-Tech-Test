const LogTransaction = require('../src/LogTransaction')

require ('../src/LogTransaction')

describe ('LogTransaction', () => {

  // Test 1 - No transactions 

  test ('Logs no transactions', () => {
    log = new LogTransaction
    
    expect(() => {
      (log.returnLog());
    }).toThrow('No transactions recorded')
  })

  // Test 2 - One Transaction 

  test ('One valid transaction added', () => {
    log = new LogTransaction
    const transaction = {date: "04/18/2022", credit: 0, debit: 372.00, balance: 372.00 }
    log.add(transaction);
    expect(log.returnLog()).toEqual([transaction])
  })

  // Test 3 - Two Transactions

  // Test 4 - Three Transactions 

  // Test 5 - Different Date Formats 


})