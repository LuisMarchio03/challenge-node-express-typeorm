import { describe, it, expect, beforeEach } from 'vitest'

import { InMemoryClientRepository } from '../../repositories/in-memory/in-memory-clients-repository'
import { DeleteClientUseCase } from './delete-client'
    
let sut: DeleteClientUseCase
let clientRepository: InMemoryClientRepository

describe('Delete Client Use Case', () => {
  beforeEach(() => {
    clientRepository = new InMemoryClientRepository()
    sut = new DeleteClientUseCase(clientRepository)
  })

  it('should be able to Delete one Client', async () => {
    const client = await clientRepository.listClients()
    client.find(async client => {
      expect(await sut.execute(client.TECL_ID)).toBeUndefined()
    })
  })

  it('should not be able to Delete one Client with invalid id', async () => {
    expect(async () => {
      await sut.execute(23323 as any)
    }).rejects.toThrow()
  })

  it ('should not be able to Delete one Client with client not exists', async () => {
    expect(async () => {
      await sut.execute(234532)
    }).rejects.toThrow()
  })
})
