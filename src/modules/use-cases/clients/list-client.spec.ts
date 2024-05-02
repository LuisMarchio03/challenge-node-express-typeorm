import { describe, it, expect, beforeEach } from 'vitest'

import { InMemoryClientRepository } from '../../repositories/in-memory/in-memory-clients-repository'
import { ListClientUseCase } from './list-client'
import { ListClientsUseCase } from './list-clients'
    
let sut: ListClientUseCase
let listClientsUseCase: ListClientsUseCase
let clientsRepository: InMemoryClientRepository

describe('List Client Use Case', () => {
  beforeEach(() => {
    clientsRepository = new InMemoryClientRepository()
    sut = new ListClientUseCase(clientsRepository)
    listClientsUseCase = new ListClientsUseCase(clientsRepository)
  })

  it('should be able to List one Client', async () => {
    const clients = await listClientsUseCase.execute()
    clients.find(async client => {
      expect(await sut.execute(client.TECL_ID)).toEqual(expect.any(Object))
    })
  })
})
