import inquirer from 'inquirer';

// Define a class for Bank Account
class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    // Method to deposit money
    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount} successfully.`);
        this.displayBalance();
    }

    // Method to withdraw money
    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} successfully.`);
            this.displayBalance();
        }
    }

    // Method to display balance
    displayBalance(): void {
        console.log(`Current Balance: ${this.balance}`);
    }
}

// Function to start the banking application
async function startBankApp() {
    const account = new BankAccount(0);

    while (true) {
        const { choice } = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: 'Choose an action:',
            choices: ['Deposit', 'Withdraw', 'Display Balance', 'Exit']
        });

        switch (choice) {
            case 'Deposit':
                const { depositAmount } = await inquirer.prompt({
                    type: 'number',
                    name: 'depositAmount',
                    message: 'Enter the deposit amount:'
                });
                account.deposit(depositAmount);
                break;
            case 'Withdraw':
                const { withdrawAmount } = await inquirer.prompt({
                    type: 'number',
                    name: 'withdrawAmount',
                    message: 'Enter the withdrawal amount:'
                });
                account.withdraw(withdrawAmount);
                break;
            case 'Display Balance':
                account.displayBalance();
                break;
            case 'Exit':
                console.log('Exiting the application.');
                return;
        }
    }
}

// Start the banking application
startBankApp();
