# Typescript-Bank
Um projeto simples de um sistema bancário implementado em Typescript, utilizando conceitos de POO.

O **CID Management System** é um projeto em TypeScript que implementa um sistema de gerenciamento de contas. O projeto inclui duas classes principais de contas, `PeopleAccount` e `CompanyAccount`, que herdam da classe abstrata `CidAccount`. O sistema permite operações básicas como depósito, saque e empréstimo (apenas para contas de empresa).
## Classes e Métodos

### CidAccount

Classe abstrata base para todas as contas.

#### Propriedades

- `name: string` - Nome do titular da conta.
- `accountNumber: number` - Número da conta (somente leitura).
- `balance: number` - Saldo da conta.
- `status: boolean` - Status da conta (ativo/inativo).

#### Métodos

- `setName(name: string): void` - Altera o nome do titular da conta.
- `getName(): string` - Retorna o nome do titular da conta.
- `deposit(amount: number): void` - Realiza um depósito na conta.
- `withdraw(amount: number): void` - Realiza um saque da conta.
- `getBalance(): void` - Exibe o saldo atual da conta.
- `getStatus(): boolean` - Retorna o status da conta.
- `validateStatus(): boolean` - Valida o status da conta (privado).

### PeopleAccount

Classe que representa uma conta pessoal, herda de `CidAccount`.

#### Propriedades

- `doc_id: number` - Identificador do documento da pessoa.

#### Métodos

Herda todos os métodos de `CidAccount`.

### CompanyAccount

Classe que representa uma conta de empresa, herda de `CidAccount`.

#### Métodos

- `getLoan(amount: number): void` - Realiza um empréstimo, adicionando o valor ao saldo da conta.

