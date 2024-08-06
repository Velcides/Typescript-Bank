// Importa a classe DioAccount do arquivo DioAccount.ts
import { DioAccount } from "./DioAccount"

// Declaração da classe CompanyAccount que extende a classe DioAccount
export class CompanyAccount extends DioAccount {

    // Construtor da classe CompanyAccount que recebe dois parâmetros: name e accountNumber
    constructor(name: string, accountNumber: number) {
        // Chama o construtor da classe pai (DioAccount) com os parâmetros recebidos
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