import { IClientCreateDto } from "modules/dtos/client-create-dto";
import { IClientUpdateDto } from "modules/dtos/client-update-dto";

import { Client } from "../infra/typeorm/entities/client";

export interface IClientsRepository {
  create(data: IClientCreateDto): Promise<Client>
  listClients(): Promise<Client[]>
  listClient(id: number): Promise<Client>
  findByName(name: string): Promise<Client>
  update(id: number, data: IClientUpdateDto): Promise<void> 
  delete(id: number): Promise<void>
}
