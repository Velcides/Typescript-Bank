// Importa a classe DioAccount do arquivo DioAccount.ts
import { DioAccount } from "./DioAccount"

// Declaração da classe PeopleAccount que estende a classe DioAccount
export class PeopleAccount extends DioAccount {
  // Propriedade pública doc_id
  doc_id: number

  // Construtor da classe PeopleAccount que recebe três parâmetros: doc_id, name, e accountNumber
  constructor(doc_id: number, name: string, accountNumber: number) {
    // Chama o construtor da classe pai (DioAccount) com os parâmetros name e accountNumber
    super(name, accountNumber)
    // Inicializa a propriedade doc_id com o valor passado
    this.doc_id = doc_id
  }
}