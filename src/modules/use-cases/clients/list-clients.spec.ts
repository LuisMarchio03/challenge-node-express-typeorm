import { describe, it, expect, beforeEach } from 'vitest'

import { ListClientsUseCase } from './list-clients'
import { InMemoryClientRepository } from '../../repositories/in-memory/in-memory-clients-repository'
    
let sut: ListClientsUseCase
let clientRepository: InMemoryClientRepository

describe('List Clients Use Case', () => {
  beforeEach(() => {
    clientRepository = new InMemoryClientRepository()
    sut = new ListClientsUseCase(clientRepository)
  })

  it('should be able to List Client', async () => {
    expect(await sut.execute()).toEqual(expect.any(Array))
  })
})
