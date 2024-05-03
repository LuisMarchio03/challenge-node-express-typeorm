import { Client } from '../../infra/typeorm/entities/client';
import { IClientsRepository } from '../../repositories/client-repository';

export class ListClientsUseCase {
  constructor(private clientsRepository: IClientsRepository) {}
  
  async execute(search?: string): Promise<Client[]> {
    if (search) {
      // Se houver um critério de pesquisa (nome), filtre os clientes por nome
      const filteredClients = await this.clientsRepository.findByName(search);
      return [filteredClients];
    } else {
      // Caso contrário, liste todos os clientes
      const allClients = await this.clientsRepository.listClients();
      return allClients;
    }
  }
}
