/* eslint-disable quotes */
/* eslint-disable no-undef */
const Account = require("../src/Account");

describe("Account", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("deposit", () => {
    test("Programme initalizes", () => {
      const account = new Account();
      expect(account.balance).toBe(0);
    });

    test("calls the validate method on a deposit", () => {
      const account = new Account();
      account.validate = jest.fn();
      account.deposit({ date: "01/01/2022", credit: 500.0, debit: 0 });
      expect(account.validate).toHaveBeenCalled();
    });

    test("updates the balance with a small deposit", () => {
      const account = new Account();
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      account.deposit({ date: "01/01/2022", credit: 0, debit: 500.0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(500.0);
    });

    test("Updates balance with two deposits ", () => {
      const account = new Account();
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      account.deposit({ date: "01/01/2022", credit: 0, debit: 50.0 });
      account.deposit({ date: "05/01/2022", credit: 0, debit: 430.0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(480.0);
    });

    test("calls the validate method on a large valid deposit", () => {
      const account = new Account();
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      account.deposit({ date: "01/01/2022", credit: 0, debit: 999.0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(999.0);
    });

    test("Invalid deposit isnt added to balance", () => {
      const account = new Account();
      const mockValidate = jest.fn().mockReturnValue(false);
      account.validate = mockValidate;
      account.deposit({ date: "01/01/2022", credit: 5000, debit: 0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(0);
    });

    test("Invalid deposit followed by valid deposit", () => {
      const account = new Account();
      const mockValidateFalse = jest.fn().mockReturnValue(false);
      account.validate = mockValidateFalse;
      account.deposit({ date: "01/01/2022", credit: 0, debit: 5000 });
      mockValidateTrue = jest.fn().mockReturnValue(true);
      account.validate = mockValidateTrue;
      account.deposit({ date: "27/01/2022", credit: 0, debit: 30.0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(30.0);
    });
  });

  describe("withdraw", () => {
    test("calls the validate method on a deposit", () => {
      const account = new Account();
      // Create a mock for the validate method
      account.validate = jest.fn();
      account.withdraw({ date: "01/01/2022", credit: 0, debit: 76.0 });
      expect(account.validate).toHaveBeenCalled();
    });

    test("updates the balance with a small deposit", () => {
      const account = new Account();
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      account.balance = 100.0;
      account.withdraw({ date: "06/07/2022", credit: 47.0, debit: 0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(53.0);
    });

    test("updates the balance with a large withdrawl", () => {
      const account = new Account();
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      account.balance = 5000.0;
      account.withdraw({ date: "09/12/2022", credit: 999.0, debit: 0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(4001.0);
    });

    test("updates the balance with two withdrawls", () => {
      const account = new Account();
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      account.balance = 4000.0;
      account.withdraw({ date: "03/18/2022", credit: 456.0, debit: 0 });
      account.withdraw({ date: "04/18/2022", credit: 789.0, debit: 0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(2755.0);
    });

    test("Invalid withdrawl isnt taken to balance", () => {
      const account = new Account();
      const mockValidate = jest.fn().mockReturnValue(false);
      account.validate = mockValidate;
      account.balance = 5000.0;
      account.withdraw({ date: "01/02/2023", credit: 5000.0, debit: 0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(5000.0);
    });

    test("valid withdraw object that exceeds account funds", () => {
      const account = new Account();
      const mockValidate = jest.fn().mockReturnValue(true);
      account.validate = mockValidate;
      account.balance = 10.0;
      account.withdraw({ date: "03/01/2023", credit: 20.0, debit: 0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(10.0);
    });

    test("valid withdraw object that exceeds account funds", () => {
      const account = new Account();
      const mockValidate = jest.fn().mockReturnValue(false);
      account.validate = mockValidate;
      account.balance = 99.0;
      account.withdraw({ date: "11/12/2021", credit: 50000.0, debit: 0 });
      mockValidateTrue = jest.fn().mockReturnValue(true);
      account.validate = mockValidateTrue;
      account.withdraw({ date: "11/12/2021", credit: 5.0, debit: 0 });
      expect(account.validate).toHaveBeenCalled();
      expect(account.balance).toEqual(94.0);
    });
  });

  describe("validateTransaction", () => {
    test("validator class method used", () => {
      const validator = {
        validate: jest.fn().mockReturnValue(true),
      };
      const account = new Account();
      const transaction = { date: "11/12/2021", credit: 5.0, debit: 0 };
      account.validate(transaction, validator);
      expect(validator.validate).toHaveBeenCalled();
    });

    test("raise error for invalid transaction", () => {
      const validator = {
        validate: jest.fn().mockReturnValue(false),
      };
      const account = new Account();
      const transaction = { date: "11/12/2021", credit: 5.0, debit: 0 };

      expect(() => {
        account.validate(transaction, validator);
      }).toThrow("Invalid Transaction");
    });
  });

  describe("addBalance", () => {
    test("the current balance is added to a transaction", () => {
      const account = new Account();
      account.balance = 500.0;
      const transaction = { date: "02/12/2021", credit: 5.0, debit: 0 };
      const formattedTransaction = {
        date: "02/12/2021",
        credit: 5.0,
        debit: 0,
        balance: 500.0,
      };
      expect(account.addBalance(transaction)).toStrictEqual(
        formattedTransaction
      );
    });
  });

  describe("logTransaction", () => {
    test("logTransaction class method used", () => {
      const account = new Account();
      account.log = logTransaction = {
        add: jest.fn(),
      };
      const transaction = {
        date: "11/12/2021",
        credit: 5.0,
        debit: 0,
        balance: 5.0,
      };
      account.logTransaction(transaction);
      expect(logTransaction.add).toHaveBeenCalled();
    });
  });

  describe("printStatement", () => {
    test("printStatement class method used", () => {
      const account = new Account();
      const printStatement = {
        print: jest.fn().mockReturnValue("success"),
      };

      account.log = {
        returnLog: jest
          .fn()
          .mockReturnValue([
            { date: "11/12/2021", credit: 5.0, debit: 0, balance: 5.0 },
          ]),
      };

      account.printStatement(printStatement);
      expect(printStatement.print).toHaveBeenCalled();
    });
  });
});
