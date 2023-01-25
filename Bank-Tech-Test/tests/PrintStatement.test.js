/* eslint-disable no-undef */
const PrintStatement = require('../src/PrintStatement');

require('../src/PrintStatement');

describe('PrintStatment', () => {
  // 1 - It prints a statment with a single transaction

  test('print a single transaction', () => {
    const log = 'date: "11/30/2022", credit: 0, debit: 500.55, balance: 500.55';
    const statement = new PrintStatement(log);
    statement.statement = log;
    expect(statement.print()).toBe('date: "11/30/2022", credit: 0, debit: 500.55, balance: 500.55');
  });

  // 2 - formats a single transaction

  test('format and print a single transaction', () => {
    const log = [{date: '30/11/2022', credit: 0, debit: 333.33, balance: 333.33 }];
    const statement = new PrintStatement(log);
    const expectedStatement =
    'date || credit || debit || balance\n30/11/2022 || 0 || 333.33 || 333.33\n';
    statement.format();
    expect(statement.print()).toBe(expectedStatement);
      
  });


  // 3 - It prints a statment with multiple transactions 

  test('format and print 3 transaction', () => {
    const log = [{date: '30/11/2022', credit: 0, debit: 333.33, balance: 333.33 },
      {date: '05/06/2022', credit: 111.11, debit: 0, balance: 222.22 },
      {date: '07/07/2022', credit: 0, debit: 222.22, balance: 444.44 }];
    const statement = new PrintStatement(log);
    const expectedStatement =
    'date || credit || debit || balance\n30/11/2022 || 0 || 333.33 || 333.33\n05/06/2022 || 111.11 || 0 || 222.22\n07/07/2022 || 0 || 222.22 || 444.44\n';
    statement.format();
    expect(statement.print()).toBe(expectedStatement);
      
  });

  // 3 - It prints an error message if no transactions 
  test ('no transactions to print', () => {
    const statement = new PrintStatement([]);
    statement.format();
    expect(() => {
      (statement.print());
    }).toThrow('No transactions to print');
  });
  
});