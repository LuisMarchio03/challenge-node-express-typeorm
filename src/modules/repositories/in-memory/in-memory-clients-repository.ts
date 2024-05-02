import { randomInt } from 'node:crypto'

import { IClientsRepository } from '../client-repository'
import { IClientCreateDto } from '../../dtos/client-create-dto'
import { IClientUpdateDto } from '../../dtos/client-update-dto'

import { Client } from '../../infra/typeorm/entities/client'

export class InMemoryClientRepository implements IClientsRepository {
 
  public items: Client[] = []

  async create({
    tecl_cidade,
    tecl_endereco,
    tecl_id,
    tecl_nome,
    tecl_telefone,
    tecl_uf
  }: IClientCreateDto): Promise<Client> {
    const client = new Client();
    client.TECL_CIDADE = tecl_cidade;
    client.TECL_ENDERECO = tecl_endereco;
    client.TECL_ID = randomInt(100000, 999999);
    client.TECL_NOME = tecl_nome;
    client.TECL_TELEFONE = tecl_telefone;
    client.TECL_UF = tecl_uf;

    await this.items.push(client);
    return client
  }

  async listClients(): Promise<Client[]> {
    return this.items;
  }

   async listClient(id: number): Promise<Client> {
    const client = this.items.find((client) => client.TECL_ID === id);
    return client;
  }

  async findByName(name: string): Promise<Client> {
    const client = this.items.find((client) => client.TECL_NOME === name);
    return client;
  }

  async update(id: number, data: IClientUpdateDto): Promise<void> {
    const client = this.items.find((client) => client.TECL_ID === id)
    client.TECL_NOME = data.tecl_nome
    client.TECL_CIDADE = data.tecl_cidade
    client.TECL_ENDERECO = data.tecl_endereco
    client.TECL_UF = data.tecl_uf
  }

  async delete(id: number): Promise<void> {
    this.items = this.items.filter((client) => client.TECL_ID !== id)
  }
}
