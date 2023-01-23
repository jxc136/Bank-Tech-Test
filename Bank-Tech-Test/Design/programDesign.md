# Bank Tech Test Design 


## Outlining the Challenge

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Designing the class system


## Designing the class interface 

### Account 

```Javascript

class Account {

  constructor(balance) {
  // stores the balance of the account on initalisation
  // stores an instance of the transaction log 
  }

  deposit(transaction){
    // Calls validator class with transaction
      // transaction expected to be an object containing values for {credit, debit, amount and date}
      // If invalid - return error
      // if valid:
        // add to balance
        // call log method

  }
  withdraw(transaction) {
    // Calls validator class with transaction
      // transaction expected to be an object containing values for {credit, debit, amount and date}
      // If invalid - return error
      // if valid:
        // remove from balance
        // call log method
  }

  withdraw(transaction) {
    // Calls validator method with transaction
      // transaction expected to be an object containing values for {credit, debit, amount and date}
      // If invalid - return error
      // if valid:
        // remove from balance
        // call log method
  }

  validateTransaction(transaction) {
    // calls an instance of the validator class and:
      // checks funds, if credit > 0 checksdeposit. if debit > 0, checks withdrawal
  }

  logTransaction(transaction) {

    // calls the TransactionLog class and stores the transaction
  }

  printStatement(transactionLog) {
    // calls the printStatement class, with the transaction log class as the argument
  }
}


```