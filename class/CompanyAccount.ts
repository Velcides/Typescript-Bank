// Importa a classe CidAccount do arquivo CidAccount.ts
import { CidAccount } from "./CidAccount"

// Declaração da classe CompanyAccount que extende a classe CidAccount
export class CompanyAccount extends CidAccount {

    // Construtor da classe CompanyAccount que recebe dois parâmetros: name e accountNumber
    constructor(name: string, accountNumber: number) {
        // Chama o construtor da classe pai (CidAccount) com os parâmetros recebidos
        super(name, accountNumber)
    }

    // Método getLoan para adicionar o valor do empréstimo ao saldo
    getLoan = (amount: number): void => {
        if (this.validateStatus()) {
            this.balance += amount;
            console.log(`Você pegou um empréstimo de ${amount}. Saldo atual: ${this.balance}`);
        } else {
            console.log('Empréstimo não realizado. Conta inválida.');
        }
    };
}