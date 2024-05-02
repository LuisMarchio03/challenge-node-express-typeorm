import { UpdateClientUseCase } from '../clients/update-client'
import { ClientRepository } from '../../infra/typeorm/repositories/typeorm-client-repository'

export function makeUpdateClientUseCase() {
  const repository = new ClientRepository()
  const useCase = new UpdateClientUseCase(repository)
  return useCase
}
