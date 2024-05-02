import { CreateClientUseCase } from '../clients/create-client'
import { ClientRepository } from '../../infra/typeorm/repositories/typeorm-client-repository'

export function makeCreateClientUseCase() {
  const repository = new ClientRepository()
  const useCase = new CreateClientUseCase(repository)
  return useCase
}
