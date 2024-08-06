import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

// Instanciar e testar métodos aqui.

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Velcides', 10);
console.log(peopleAccount);

// Testando setName e getName
peopleAccount.setName('Velcides Mezzomo');
console.log(peopleAccount.getName()); // Deve imprimir 'Natalia'

// Testando deposit
peopleAccount.deposit(100);
peopleAccount.getBalance(); // Deve imprimir 100

// Testando withdraw
peopleAccount.withdraw(50);
peopleAccount.getBalance(); // Deve imprimir 50

// Testando withdraw com saldo insuficiente
peopleAccount.withdraw(100); // Deve imprimir 'Saque não realizado. Verifique o saldo ou o status da conta.'

// Testando getBalance
peopleAccount.getBalance(); // Deve imprimir 50

const companyAccount: CompanyAccount = new CompanyAccount('CID', 20);
console.log(companyAccount);

// Testando setName e getName
companyAccount.setName('CID Inc.');
console.log(companyAccount.getName()); // Deve imprimir 'CID Inc.'

// Testando deposit
companyAccount.deposit(200);
companyAccount.getBalance(); // Deve imprimir 200

// Testando withdraw
companyAccount.withdraw(100);
companyAccount.getBalance(); // Deve imprimir 100

// Testando withdraw com saldo insuficiente
companyAccount.withdraw(150); // Deve imprimir 'Saque não realizado. Verifique o saldo ou o status da conta.'

// Testando getLoan
companyAccount.getLoan(300);
companyAccount.getBalance(); // Deve imprimir 400

// Testando getBalance
companyAccount.getBalance(); // Deve imprimir 400
