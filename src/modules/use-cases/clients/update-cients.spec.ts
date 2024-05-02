import { describe, it, expect, beforeEach } from 'vitest'

import { UpdateClientUseCase } from './update-cients'
import { InMemoryClientRepository } from '../../repositories/in-memory/in-memory-clients-repository'
    
let sut: UpdateClientUseCase
let clientRepository: InMemoryClientRepository

describe('Update Client Use Case', () => {
  beforeEach(() => {
    clientRepository = new InMemoryClientRepository()
    sut = new UpdateClientUseCase(clientRepository)
  })

  it('should be able to update Client', async () => {
    const created = await clientRepository.create({
        tecl_id: 1,
        tecl_cidade: "Any city",
        tecl_endereco: "Any address",
        tecl_nome: "Any name",
        tecl_telefone: "00999999999",
        tecl_uf: "Any UF"
    })

    await sut.execute({
        tecl_id: created.TECL_ID,
        tecl_cidade: "Any city Update",
        tecl_endereco: "Any address Update",
        tecl_nome: "Any name Update",
        tecl_telefone: "00999999999",
        tecl_uf: "Any UF"
    })

    const client = await clientRepository.listClient(created.TECL_ID)

    expect(client.TECL_NOME).toEqual('Any name Update')
    expect(client.TECL_ENDERECO).toEqual("Any address Update")
    expect(client.TECL_CIDADE).toEqual('Any city Update')
  })
})
