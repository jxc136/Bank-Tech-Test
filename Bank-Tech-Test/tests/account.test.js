const Account = require ('../src/account')

describe ('Account', () => {
  
  describe ('deposit', () => {

    // Unit tests 

    // test 1 - it calls the validate method

    test ('calls the validate method on a deposit', () => {
      const account = new Account()
      // Create a spy for the validate method
      const spy = jest.spyOn(account, 'validate');
      account.deposit({date: "01/01/2022", credit: 500.00, debit: 0});
      expect(spy).toHaveBeenCalled();
    })

    // Test 2 - it updates the balance with a small deposit value 
    
    test ('updates the balance with a small deposit', () => {
      const account = new Account()
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      account.deposit({date: "01/01/2022", credit: 0, debit: 500.00});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(500.00)
    })

    // Test 3 - it updates the balance with a valid large deposit value
    
    test ('Updates balance with two deposits ', () => {
      const account = new Account()
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      account.deposit({date: "01/01/2022", credit: 0, debit: 50.00});
      account.deposit({date: "05/01/2022", credit: 0, debit: 430.00});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(480.00)
    })

    // Test 4 - it updates the balance when two valid deposits are called

    test ('calls the validate method on a large valid deposit', () => {
      const account = new Account()
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      account.deposit({date: "01/01/2022", credit: 0, debit: 999.00});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(999.00)
    })

    // Test 5 - it does not update the balance with an invalid deposit objecy

      test ('Invalid deposit isnt added to balance', () => {
        const account = new Account()
        // Create a mock validate function
        const mockValidate = jest.fn().mockReturnValue(false);
        account.validate = mockValidate;
        account.deposit({date: "01/01/2022", credit: 5000, debit: 0});
        expect(account.validate).toHaveBeenCalled();
        expect(account.balance).toEqual(0)
      })

    // Test 6 - a valid deposit will be accepted when proceeded by an invalid deposit
    test ('Invalid deposit followed by valid deposit', () => {
      const account = new Account()
      // Create a mock validate function
      const mockValidateFalse = jest.fn().mockReturnValue(false);
      account.validate = mockValidateFalse;
      account.deposit({date: "01/01/2022", credit: 0, debit: 5000});
      // reset mock
      mockValidateTrue = jest.fn().mockReturnValue(true);
      account.validate = mockValidateTrue;
      account.deposit({date: "27/01/2022", credit: 0, debit: 30.00});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(30.00)
    })
  })

  describe ('withdraw', () => {

    // Test 1 - it attempts to validate an entry

    test ('calls the validate method on a deposit', () => {
      const account = new Account()
      // Create a spy for the validate method
      const spy = jest.spyOn(account, 'validate');
      account.withdraw({date: "01/01/2022", credit: 0, debit: 76.00});
      expect(spy).toHaveBeenCalled();
    })

    // Test 2 - it updates the balance with a valid small withdraw value 

    test ('updates the balance with a small deposit', () => {
      const account = new Account()
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      // add funds to be deducted
      account.balance = 100.00
      account.withdraw({date: "06/07/2022", credit: 47.00, debit: 0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(53.00)
    })

    // Test 3 - it updates the balance with a valid large withdraw value 

    test ('updates the balance with a large withdrawl', () => {
      const account = new Account()
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      // add funds to be deducted
      account.balance = 5000.00
      account.withdraw({date: "09/12/2022", credit: 999.00, debit: 0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(4001.00)
    })

    // Test 4 - it updates the balance when two valid Withdrawals are called

    test ('updates the balance with two withdrawls', () => {
      const account = new Account()
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      // add funds to be deducted
      account.balance = 4000.00
      account.withdraw({date: "03/18/2022", credit: 456.00, debit: 0 });
      account.withdraw({date: "04/18/2022", credit: 789.00, debit: 0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(2755.00)
    })

    // Test 5 - it does not update the balance with an invalid withdraw object

    test ('Invalid withdrawl isnt taken to balance', () => {
      const account = new Account()
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(false);
      account.validate = mockValidate;
       // add funds to be deducted
       account.balance = 5000.00
      account.withdraw({date: "01/02/2023", credit: 5000.00, debit: 0});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(5000.00)
    })

    // Test 6 - it wont update the balance with a valid withdrawal value that exceeds balance 

    test ('valid withdraw object that exceeds account funds', () => {
      const account = new Account()
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
       // add funds to be deducted
      account.balance = 10.00
      account.withdraw({date: "03/01/2023", credit: 20.00, debit: 0});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(10.00)
    })

    // Test 7 - a valid withdraw will be accepted when proceeded by an invalid withdraw

    test ('valid withdraw object that exceeds account funds', () => {
      const account = new Account()
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(false);
      account.validate = mockValidate;
       // add funds to be deducted
      account.balance = 99.00
      account.withdraw({date: "11/12/2021", credit: 50000.00, debit: 0});
      // reset the mock 
      // reset mock
      mockValidateTrue = jest.fn().mockReturnValue(true);
      account.validate = mockValidateTrue;
      account.withdraw({date: "11/12/2021", credit: 5.00, debit: 0});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(94.00)
    })

  })

  describe ('validateTransaction', () => {

    // Test 1 - Valid deposit object

    test('valid deposit object', () => {
      const account = new Account;
      const deposit = {date: "11/12/2021", credit: 0, debit: 10.00}
      expect(account.validate(deposit)).toEqual(true)
    })

    // Test 2 - Invalid deposit object

    test('deposit is not a number', () => {
      const account = new Account
      const deposit = {date:'02/03/2022', credit: 0, debit: 'string'}
      expect(account.validate(deposit)).toEqual(false)
    })

    test('no date', () => {
      const account = new Account
      const deposit = {credit: 0, debit: 10.00}
      expect(account.validate(deposit)).toEqual(false)
    })


    // Test 3 - Valid deposit amount

    test('valid deposit amount', () => {
      const account = new Account
      const deposit = {date: 22/12/2020, credit: 0, debit: 37.22}
      expect(account.validate(deposit)).toEqual(true)
    })

    // Test 4 - Invalid deposit amount

    test('deposit exceeds 1000', () => {
      const account = new Account 
      const deposit = {date: '03/11/2019', credit: 0, debit: 1001.01}
      expect(account.validate(deposit)).toEqual(false)
    })

    // Test 5 - Valid deposit object

    test('deposit below 1000', () => {
      const account = new Account 
      const deposit = {date: '05/10/2018', credit: 0, debit: 1000.00}
      expect(account.validate(deposit)).toEqual(true)
    })

    // Test 6 - Invalid deposit object

    // Test 7 - Valid Withdraw amount

    // Test 8 - Invalid Withdraw amount
    
  })

  describe ('logTransaction', () => {
    
  })

  describe ('printStatement', () => {
    
  })

})