import { ListClientUseCase } from '../clients/list-client'
import { ClientRepository } from '../../infra/typeorm/repositories/typeorm-client-repository'

export function makeListClientUseCase() {
  const repository = new ClientRepository()
  const useCase = new ListClientUseCase(repository)
  return useCase
}
