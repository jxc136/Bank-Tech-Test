const PrintStatement = require('../src/PrintStatement')

require('../src/PrintStatement')

describe('PrintStatment', () => {
  // 1 - It prints a statment with a single transaction

  test('print a single transaction', () => {
    const log = 'date: "11/30/2022", credit: 0, debit: 500.55, balance: 500.55'
    const statement = new PrintStatement(log)
    statement.statement = log
    expect(statement.print()).toBe('date: "11/30/2022", credit: 0, debit: 500.55, balance: 500.55')
  })

  // 2 - formats a single transaction

  test('format and print a single transaction', () => {
    const log = [{date: "30/11/2022", credit: 0, debit: 333.33, balance: 333.33 }]
    const statement = new PrintStatement(log)
    const expectedStatement =
    `date || credit || debit || balance\n30/11/2022 || 0 || 333.33 || 333.33\n`;
    statement.format();
    expect(statement.print()).toBe(expectedStatement)
      
  })


  // 2 - It prints a statment with multiple transactions 

  // 3 - It prints a message if no transactions 
})