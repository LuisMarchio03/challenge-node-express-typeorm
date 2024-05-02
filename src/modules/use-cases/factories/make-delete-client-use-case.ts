import { DeleteClientUseCase } from '../clients/delete-client'
import { ClientRepository } from '../../infra/typeorm/repositories/typeorm-client-repository'

export function makeDeleteClientUseCase() {
  const repository = new ClientRepository()
  const useCase = new DeleteClientUseCase(repository)
  return useCase
}
