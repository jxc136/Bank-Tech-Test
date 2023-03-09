/* eslint-disable quotes */
/* eslint-disable no-undef */
// eslint-disable-next-line quotes
const Account = require("../src/account");

describe("integration", () => {
  test("successfully logs and prints a number of transactions", () => {
    const account = new Account();
    account.deposit({ date: "01/01/2022", credit: 0.0, debit: 500.0 });
    account.withdraw({ date: "02/01/2022", credit: 50.0, debit: 0.0 });
    account.deposit({ date: "03/01/2022", credit: 0.0, debit: 100.5 });
    account.withdraw({ date: "04/01/2022", credit: 200.5, debit: 0.0 });
    account.deposit({ date: "05/01/2022", credit: 0.0, debit: 10.0 });
    expect(account.printStatement()).toBe(
      "date || credit || debit || balance\n05/01/2022 ||  || 10.00 || 360.00\n04/01/2022 || 200.50 ||  || 350.00\n03/01/2022 ||  || 100.50 || 550.50\n02/01/2022 || 50.00 ||  || 450.00\n01/01/2022 ||  || 500.00 || 500.00\n"
    );
  });
});
