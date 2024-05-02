import { ListClientsUseCase } from '../clients/list-clients'
import { ClientRepository } from '../../infra/typeorm/repositories/typeorm-client-repository'

export function makeListClientsUseCase() {
  const repository = new ClientRepository()
  const useCase = new ListClientsUseCase(repository)
  return useCase
}
