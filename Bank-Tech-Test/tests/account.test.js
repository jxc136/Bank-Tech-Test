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
      account.deposit({date: "01/01/2022", credit: 500, debit: 0});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(500)
    })

    // Test 3 - it updates the balance with a valid large deposit value
    
    test ('Updates balance with two deposits ', () => {
      const account = new Account()
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      account.deposit({date: "01/01/2022", credit: 50, debit: 0});
      account.deposit({date: "05/01/2022", credit: 430, debit: 0});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(480)
    })

    // Test 4 - it updates the balance when two valid deposits are called

    test ('calls the validate method on a large valid deposit', () => {
      const account = new Account()
      // Create a mock validate function
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      account.deposit({date: "01/01/2022", credit: 999, debit: 0});
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(999)
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



    // Test 8 - a valid deposit will be accepted when proceeded by an invalid deposit

  })

  describe ('withdraw', () => {

    // Test 1 - it updates the balance with a valid small withdraw value 

    // Test 2 - it updates the balance with a valid large withdraw value 

    // Test 3 - it updates the balance when two valid Withdrawals are called

    // Test 4 - it does not update the balance with an invalid deposit object

    // Test 5 - it wont update the balance with a valid withdrawal value that exceeds balance 

    // Test 6 - It does not update the balance with a withdrawal that exceeds withdrawal restrictions

    // Test 7 - a valid withdrawwl will be accepted when proceeded by an invalid deposit

  })

  describe ('validateTransaction', () => {
    
  })

  describe ('logTransaction', () => {
    
  })

  describe ('printStatement', () => {
    
  })

})