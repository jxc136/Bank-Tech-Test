const Account = require ('../src/account')

describe ('Account', () => {
  
  describe ('deposit', () => {

    // Unit tests 

    // test 1 - it calls the validate method

    test ('calls the validate method on a deposit', () => {
      const account = new Account()
      const spy = jest.spyOn(account, 'validate');
      account.deposit();
      expect(spy).toHaveBeenCalled();

    })

    // Test 1 - it updates the balance with a small deposit value 

    // test ('balance updates with a small deposit', () => {
    //   const account = new Account()
    //   account.deposit({date: "01/01/2022", credit: 500.00, debit: 0,})
    //   // Expect 

    // })

    // Test 2 - it updates the balance with a valid large deposit value 

    // Test 3 - it updates the balance when two valid deposits are called

    // Test 4 - it does not update the balance with an invalid deposit objecy

    // Test 5 - It does not update the balance with a deposit that is too large

    // Test 6 - a valid deposit will be accepted when proceeded by an invalid deposit

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