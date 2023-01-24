const LogTransaction = require('../src/LogTransaction')

require ('../src/LogTransaction')

describe ('LogTransaction', () => {

  // Test 1 - No transactions 

  test ('Logs no transactions', () => {
    log = new LogTransaction
    expect(log.returnLog).toThrow('No transactions recorded')
  })

  // Test 2 - One Transaction 

  // Test 3 - Two Transactions

  // Test 4 - Three Transactions 

  // Test 5 - Different Date Formats 


})