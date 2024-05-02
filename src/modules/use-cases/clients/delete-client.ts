import { IClientsRepository } from '../../repositories/client-repository'

export class DeleteClientUseCase {
  constructor(private ClientRepository: IClientsRepository) {}
  
  async execute(id: number): Promise<void> {
    const client = await this.ClientRepository.listClient(id)

    if (!client) {
      throw new Error('Client not found')
    }

    await this.ClientRepository.delete(id)
  }
}
