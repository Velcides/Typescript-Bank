// Declaração da classe abstrata DioAccount
export abstract class DioAccount {
    // Propriedades privadas e públicas da classe
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    // Construtor da classe que inicializa as propriedades name e accountNumber
    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    // Método público para alterar o nome
    setName = (name: string): void => {
        this.name = name
        console.log('Nome alterado com sucesso!')
    }

    // Método público para obter o nome
    getName = (): string => {
        return this.name
    }

    // Método de depósito
    deposit = (amount: number): void => {
        if (this.validateStatus()) {
            this.balance += amount;
            console.log(`Você depositou ${amount}. Saldo atual: ${this.balance}`);
        }
    };

    // Método de saque
    withdraw = (amount: number): void => {
        if (this.validateStatus() && this.balance >= amount) {
            this.balance -= amount;
            console.log(`Você sacou ${amount}. Saldo atual: ${this.balance}`);
        } else {
            console.log('Saque não realizado. Verifique o saldo ou o status da conta.');
        }
    };

    // Método público para obter o saldo
    getBalance = (): void => {
        console.log(this.balance)
    }

    // Método getStatus para verificar o status da conta
    getStatus = (): boolean => {
        return this.status;
    };

    // Método para validar o status da conta
    validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta inválida')
    }
}
