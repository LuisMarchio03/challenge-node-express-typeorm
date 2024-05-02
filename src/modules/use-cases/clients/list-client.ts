import { Client } from '../../infra/typeorm/entities/client'
import { IClientsRepository } from '../../repositories/client-repository'

export class ListClientUseCase {
  constructor(private ClientsRepository: IClientsRepository) {}
  
  async execute(id: number): Promise<Client> {
    return await this.ClientsRepository.listClient(id)
  }
}
