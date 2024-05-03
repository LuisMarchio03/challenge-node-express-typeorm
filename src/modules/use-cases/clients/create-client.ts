import { IClientsRepository } from "../../repositories/client-repository"

interface CreateClientUseCaseRequest {
    tecl_nome: string;
    tecl_endereco: string;
    tecl_cidade: string;
    tecl_uf: string;
    tecl_telefone: string
}

interface CreateClientUseCaseResponse {
    tecl_id: number;
    tecl_nome: string;
    tecl_endereco: string;
    tecl_cidade: string;
    tecl_uf: string;
    tecl_telefone: string
}

export class CreateClientUseCase {
  constructor(private clientRepository: IClientsRepository) {}
  
  async execute({
    tecl_cidade,
    tecl_endereco,
    tecl_nome,
    tecl_telefone,
    tecl_uf
  }: CreateClientUseCaseRequest): Promise<CreateClientUseCaseResponse> {
    const clientsAlreadyExists = await this.clientRepository.findByName(tecl_nome)

    if (clientsAlreadyExists) {
      throw new Error('Client already exists')
    }

    const client = await this.clientRepository.create({
        tecl_cidade,
        tecl_endereco,
        tecl_nome,
        tecl_telefone,
        tecl_uf
    })
    
    return {
        tecl_id: client.TECL_ID,
        tecl_nome: client.TECL_NOME,
        tecl_endereco: client.TECL_ENDERECO,
        tecl_cidade: client.TECL_CIDADE,
        tecl_uf: client.TECL_UF,
        tecl_telefone: client.TECL_TELEFONE,
    }
  }
}
