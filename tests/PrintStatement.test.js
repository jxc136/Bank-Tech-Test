/* eslint-disable no-undef */
const PrintStatement = require('../src/PrintStatement');

require('../src/PrintStatement');

describe('PrintStatment', () => {

  test ('format and print a single transaction', () => {
    const log = [{date: '30/11/2022', credit: '', debit: 333.33, balance: 333.33 }];
    const statement = new PrintStatement(log);
    const expectedStatement =
    'date || credit || debit || balance\n30/11/2022 ||  || 333.33 || 333.33\n';
    expect(statement.print()).toBe(expectedStatement);
      
  });

  test ('format and print 3 transaction', () => {
    const log = [{date: '30/11/2022', credit: '', debit: 333.33, balance: 333.33 },
      {date: '05/06/2022', credit: 111.11, debit: '', balance: 222.22 },
      {date: '07/07/2022', credit: '', debit: 222.22, balance: 444.44 }];
    const statement = new PrintStatement(log);
    const expectedStatement =
    'date || credit || debit || balance\n30/11/2022 ||  || 333.33 || 333.33\n05/06/2022 || 111.11 ||  || 222.22\n07/07/2022 ||  || 222.22 || 444.44\n';
    statement.format();
    expect(statement.print()).toBe(expectedStatement);
      
  });

  test ('no transactions to print', () => {
    const log = [];
    const statement = new PrintStatement(log);
    expect(() => {
      (statement.print());
    }).toThrow('No transactions to print');
  });

  test ('formats a statement before printng', () => {
    const statement = new PrintStatement([{date: '30/11/2022', credit: '', debit: 333.33, balance: 333.33} ]);
    const expectedStatement =
    'date || credit || debit || balance\n30/11/2022 ||  || 333.33 || 333.33\n';
    expect(statement.print()).toBe(expectedStatement);  
  });

});