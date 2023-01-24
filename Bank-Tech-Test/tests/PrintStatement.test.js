const PrintStatement = require('../src/PrintStatement')

require('../src/PrintStatement')

describe('PrintStatment', () => {
  // 1 - It prints a statment with a single transaction

  test('print a single transaction', () => {
    const log = [{date: "11/30/2022", credit: 0, debit: 500.55, balance: 500.55 }]
    const statement = new PrintStatement(log)
    expect(statement.print()).toBe('date: "11/30/2022", credit: 0, debit: 500.55, balance: 500.55')
  })

  // 2 - formats a single transaction

  // test('print a single transaction', () => {
  //   const log = [{date: "11/30/2022", credit: 0, debit: 333.33, balance: 333.33 }]

  //   const statement = new PrintStatement(log)
  // })

  // 2 - It prints a statment with multiple transactions 

  // 3 - It prints a message if no transactions 
})