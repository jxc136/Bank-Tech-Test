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
      account.deposit({date: "01/01/2022", credit: 5000, debit: 0});
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

    // test ('updates the balance with a small deposit', () => {
    //   const account = new Account()
    //   // Create a mock validate function
    //   const mockValidate = jest.fn().mockReturnValue(true);
    //   account.validate = mockValidate;
    //   account.withdraw({date: "01/01/2022", credit: 47.00, debit: });
    //   expect(account.validate).toHaveBeenCalled();
    //   expect(account.balance).toEqual(500)
    // })

    // Test 3 - it updates the balance with a valid large withdraw value 

    // Test 4 - it updates the balance when two valid Withdrawals are called

    // Test 5 - it does not update the balance with an invalid deposit object

    // Test 6 - it wont update the balance with a valid withdrawal value that exceeds balance 

    // Test 7 - It does not update the balance with a withdrawal that exceeds withdrawal restrictions

    // Test 8 - a valid withdrawwl will be accepted when proceeded by an invalid deposit

  })

  describe ('validateTransaction', () => {
    
  })

  describe ('logTransaction', () => {
    
  })

  describe ('printStatement', () => {
    
  })

})