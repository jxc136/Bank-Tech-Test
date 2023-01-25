/* eslint-disable no-undef */
const Account = require ('../src/Account');

describe ('Account', () => {

  beforeEach(() => {
    jest.resetAllMocks();
  });
  
  describe ('deposit', () => {

    test('Programme initalizes', () => {
      const account = new Account;
      expect(account.balance).toBe(0);
    });

    // Test 1 - it calls the validate method

    test ('calls the validate method on a deposit', () => {
      const account = new Account();
      // Create a mock for the validate method
      account.validate = jest.fn();
      account.deposit({date: '01/01/2022', credit: 500.00, debit: 0});
      expect(account.validate).toHaveBeenCalled();
    });

    // Test 2 - it updates the balance with a small deposit value 
    
    test ('updates the balance with a small deposit', () => {
      const account = new Account();
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      account.deposit({date: '01/01/2022', credit: 0, debit: 500.00});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(500.00);
    });

    // Test 3 - it updates the balance with a valid large deposit value
    
    test ('Updates balance with two deposits ', () => {
      const account = new Account();
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      account.deposit({date: '01/01/2022', credit: 0, debit: 50.00});
      account.deposit({date: '05/01/2022', credit: 0, debit: 430.00});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(480.00);
    });

    // Test 4 - it updates the balance when two valid deposits are called

    test ('calls the validate method on a large valid deposit', () => {
      const account = new Account();
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      account.deposit({date: '01/01/2022', credit: 0, debit: 999.00});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(999.00);
    });

    // Test 5 - it does not update the balance with an invalid deposit objecy

    test ('Invalid deposit isnt added to balance', () => {
      const account = new Account();
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(false);
      account.validate = mockValidate;
      account.deposit({date: '01/01/2022', credit: 5000, debit: 0});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(0);
    });

    // Test 6 - a valid deposit will be accepted when proceeded by an invalid deposit
    test ('Invalid deposit followed by valid deposit', () => {
      const account = new Account();
      // Create a mock validate function
      const mockValidateFalse = jest.fn().mockReturnValue(false);
      account.validate = mockValidateFalse;
      account.deposit({date: '01/01/2022', credit: 0, debit: 5000});
      // reset mock
      mockValidateTrue = jest.fn().mockReturnValue(true);
      account.validate = mockValidateTrue;
      account.deposit({date: '27/01/2022', credit: 0, debit: 30.00});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(30.00);
    });
  });

  describe ('withdraw', () => {

    // Test 1 - it attempts to validate an entry

    test ('calls the validate method on a deposit', () => {
      const account = new Account();
      // Create a mock for the validate method
      account.validate = jest.fn();
      account.withdraw({date: '01/01/2022', credit: 0, debit: 76.00});
      expect(account.validate).toHaveBeenCalled();
    });

    // Test 2 - it updates the balance with a valid small withdraw value 

    test ('updates the balance with a small deposit', () => {
      const account = new Account();
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      // add funds to be deducted
      account.balance = 100.00;
      account.withdraw({date: '06/07/2022', credit: 47.00, debit: 0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(53.00);
    });

    // Test 3 - it updates the balance with a valid large withdraw value 

    test ('updates the balance with a large withdrawl', () => {
      const account = new Account();
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      // add funds to be deducted
      account.balance = 5000.00;
      account.withdraw({date: '09/12/2022', credit: 999.00, debit: 0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(4001.00);
    });

    // Test 4 - it updates the balance when two valid Withdrawals are called

    test ('updates the balance with two withdrawls', () => {
      const account = new Account();
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      // add funds to be deducted
      account.balance = 4000.00;
      account.withdraw({date: '03/18/2022', credit: 456.00, debit: 0 });
      account.withdraw({date: '04/18/2022', credit: 789.00, debit: 0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(2755.00);
    });

    // Test 5 - it does not update the balance with an invalid withdraw object

    test ('Invalid withdrawl isnt taken to balance', () => {
      const account = new Account();
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(false);
      account.validate = mockValidate;
      // add funds to be deducted
      account.balance = 5000.00;
      account.withdraw({date: '01/02/2023', credit: 5000.00, debit: 0});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(5000.00);
    });

    // Test 6 - it wont update the balance with a valid withdrawal value that exceeds balance 

    test ('valid withdraw object that exceeds account funds', () => {
      const account = new Account();
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      // add funds to be deducted
      account.balance = 10.00;
      account.withdraw({date: '03/01/2023', credit: 20.00, debit: 0});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(10.00);
    });

    // Test 7 - a valid withdraw will be accepted when proceeded by an invalid withdraw

    test ('valid withdraw object that exceeds account funds', () => {
      const account = new Account();
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(false);
      account.validate = mockValidate;
      // add funds to be deducted
      account.balance = 99.00;
      account.withdraw({date: '11/12/2021', credit: 50000.00, debit: 0});
      // reset the mock 
      // reset mock
      mockValidateTrue = jest.fn().mockReturnValue(true);
      account.validate = mockValidateTrue;
      account.withdraw({date: '11/12/2021', credit: 5.00, debit: 0});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(94.00);
    });

  });

  describe ('validateTransaction', () => {

    test('validator class method used', () => {
      // Create a mock validator class 
      const validator = {
        validate: jest.fn().mockReturnValue(true)
      };
      const account = new Account();
      const transaction = {date: '11/12/2021', credit: 5.00, debit: 0};
      account.validate(transaction, validator);
      expect(validator.validate).toHaveBeenCalled();
    });
  });

  describe ('addBalance', () => {

    test('the current balance is added to a transaction', () => {
      const account = new Account;
      account.balance = 500.00;
      const transaction = {date: '02/12/2021', credit: 5.00, debit: 0};
      const formattedTransaction = {date: '02/12/2021', credit: 5.00, debit: 0, balance: 500.00};
      expect(account.addBalance(transaction)).toStrictEqual(formattedTransaction);
    });
    
  });
 

  describe ('logTransaction', () => {

    test('logTransaction class method used', () => {
      const account = new Account;
      account.log = logTransaction = {
        add: jest.fn()
      };
      const transaction = {date: '11/12/2021', credit: 5.00, debit: 0, balance: 5.00};
      account.logTransaction(transaction);
      expect(logTransaction.add).toHaveBeenCalled();
    });
    
  });

  describe ('printStatement', () => {
    test('printStatement class method used', () => {
      const account = new Account;
      const printStatement = {
        print: jest.fn().mockReturnValue('success')
      };
      
      account.log = {
        returnLog: jest.fn().mockReturnValue([{date: '11/12/2021', credit: 5.00, debit: 0, balance: 5.00}])
      };
        
      account.printStatement(printStatement);
      expect(printStatement.print).toHaveBeenCalled();
    });
  });

});