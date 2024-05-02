import { IClientsRepository } from "../../repositories/client-repository"

interface UpdateClientUseCaseRequest {
    tecl_id: number;
    tecl_nome: string;
    tecl_endereco: string;
    tecl_cidade: string;
    tecl_uf: string;
    tecl_telefone: string
}

export class UpdateClientUseCase {
  constructor(private clientRepository: IClientsRepository) {}
  
  async execute({
    tecl_cidade,
    tecl_endereco,
    tecl_id,
    tecl_nome,
    tecl_telefone,
    tecl_uf
  }: UpdateClientUseCaseRequest): Promise<void> {
    const clientsAlreadyExists = await this.clientRepository.listClient(tecl_id)

    if (clientsAlreadyExists) {
      throw new Error('Client already exists')
    }

    await this.clientRepository.update(tecl_id, {
        tecl_cidade,
        tecl_endereco,
        tecl_nome,
        tecl_telefone,
        tecl_uf
    })
  }
}
