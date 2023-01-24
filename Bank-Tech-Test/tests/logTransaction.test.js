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

  test ( 'Two valid transactions added', () => {
    log = new LogTransaction
    const transaction1 = {date: "11/30/2022", credit: 0, debit: 500.55, balance: 500.55 }
    const transaction2 = {date: "11/30/2022", credit: 150.50, debit: 0, balance: 350.05 }
    log.add(transaction1)
    log.add(transaction2)
    expect(log.returnLog()).toEqual(expect.arrayContaining([transaction1, transaction2]))
  })

  // Test 4 - Three Transactions 

  test ( 'Two valid transactions added', () => {
    log = new LogTransaction
    const transaction1 = {date: "22/04/2019", credit: 0, debit: 500.55, balance: 500.55 }
    const transaction2 = {date: "25/05/2019", credit: 150.50, debit: 0, balance: 350.05 }
    const transaction3 = {date: "25/05/2019", credit: 40.00, debit: 0, balance: 310.05 }
    log.add(transaction1)
    log.add(transaction2)
    log.add(transaction3)
    expect(log.returnLog()).toEqual(expect.arrayContaining([transaction1, transaction2, transaction3]))
  })

  // Test 5 - Different Date Formats 


})