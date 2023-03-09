/* eslint-disable quotes */
/* eslint-disable no-undef */
const LogTransaction = require("../src/logTransaction");

require("../src/logTransaction");

describe("LogTransaction", () => {
  test("Logs no transactions", () => {
    log = new LogTransaction();

    expect(() => {
      log.returnLog();
    }).toThrow("No transactions recorded");
  });

  test("One valid transaction added", () => {
    log = new LogTransaction();
    const transaction = {
      date: "04/18/2022",
      credit: 0,
      debit: 372.0,
      balance: 372.0,
    };
    log.add(transaction);
    expect(log.returnLog()).toEqual([transaction]);
  });

  test("Two valid transactions added", () => {
    log = new LogTransaction();
    const transaction1 = {
      date: "11/30/2022",
      credit: 0,
      debit: 500.55,
      balance: 500.55,
    };
    const transaction2 = {
      date: "11/30/2022",
      credit: 150.5,
      debit: 0,
      balance: 350.05,
    };
    log.add(transaction1);
    log.add(transaction2);
    const newTransaction1 = {
      date: "11/30/2022",
      credit: "",
      debit: "500.55",
      balance: "500.55",
    };
    const newTransaction2 = {
      date: "11/30/2022",
      credit: "150.50",
      debit: "",
      balance: "350.05",
    };
    expect(log.returnLog()).toEqual(
      expect.arrayContaining([newTransaction1, newTransaction2])
    );
  });

  test("Two valid transactions added", () => {
    log = new LogTransaction();
    const transaction1 = {
      date: "22/04/2019",
      credit: 0,
      debit: 500.55,
      balance: 500.55,
    };
    const transaction2 = {
      date: "25/05/2019",
      credit: 150.5,
      debit: 0,
      balance: 350.05,
    };
    const transaction3 = {
      date: "25/05/2019",
      credit: 40.0,
      debit: 0,
      balance: 310.05,
    };
    log.add(transaction1);
    log.add(transaction2);
    log.add(transaction3);
    expect(log.returnLog()).toEqual(
      expect.arrayContaining([transaction1, transaction2, transaction3])
    );
  });

  test("toDecimal", () => {
    log = new LogTransaction();
    const transaction = {
      date: "04/18/2022",
      credit: 0,
      debit: 372.0,
      balance: 372.0,
    };
    expect(log.formatNumbers(transaction)).toEqual({
      date: "04/18/2022",
      credit: "",
      debit: "372.00",
      balance: "372.00",
    });
  });
});
