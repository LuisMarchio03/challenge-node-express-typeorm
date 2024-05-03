import { Repository } from 'typeorm';
import { appDataSource } from '../../../../database';

import { IClientsRepository } from '../../../repositories/client-repository';
import { IClientCreateDto } from 'modules/dtos/client-create-dto';
import { IClientUpdateDto } from 'modules/dtos/client-update-dto';

import { Client } from '../entities/client';

export class ClientRepository implements IClientsRepository {
  private readonly repository: Repository<Client>;

  constructor() {
    this.repository = appDataSource.getRepository(Client);
  }

  async create(data: IClientCreateDto): Promise<Client> {
    const newClient = this.mapDtoToClient(data);
    await this.repository.save(newClient);
    return newClient;
  }

  async listClients(): Promise<Client[]> {
    return await this.repository.find();
  }

  async listClient(id: number): Promise<Client | null> {
    return await this.repository.findOneBy({ TECL_ID: id });
  }

  async findByName(name: string): Promise<Client | null> {
    return await this.repository.findOneBy({ TECL_NOME: name });
  }

  async update(id: number, data: IClientUpdateDto): Promise<void> {
    const clientToUpdate = await this.repository.findOneByOrFail({ TECL_ID: id });
    const update = this.mapDtoToClient(data);
    Object.assign(clientToUpdate, data);
    await this.repository.save(update);
  }

  async delete(id: number): Promise<void> {
    const clientToDelete = await this.repository.findOneByOrFail({ TECL_ID: id });
    await this.repository.remove(clientToDelete);
  }

  private mapDtoToClient(data: IClientCreateDto | IClientUpdateDto): Client {
    const newClient = new Client();
    newClient.TECL_NOME = data.tecl_nome;
    newClient.TECL_ENDERECO = data.tecl_endereco;
    newClient.TECL_CIDADE = data.tecl_cidade;
    newClient.TECL_UF = data.tecl_uf;
    newClient.TECL_TELEFONE = data.tecl_telefone;
    return newClient;
  }
}
