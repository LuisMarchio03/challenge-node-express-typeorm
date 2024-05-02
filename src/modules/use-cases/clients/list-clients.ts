import { Client } from '../../infra/typeorm/entities/client'
import { IClientsRepository } from '../../repositories/client-repository'

export class ListClientsUseCase {
  constructor(private ClientsRepository: IClientsRepository) {}
  
  async execute(): Promise<Client[]> {
    return await this.ClientsRepository.listClients()
  }
}
