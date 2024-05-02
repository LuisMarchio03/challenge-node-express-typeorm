import { describe, it, expect, beforeEach } from 'vitest'
import { CreateClientUseCase } from './create-cients'
import { InMemoryClientRepository } from '../../repositories/in-memory/in-memory-clients-repository'
import { IClientsRepository } from '../../repositories/client-repository'
    
let sut: CreateClientUseCase
let clientRepository: IClientsRepository

describe("Create client use-case", () => {
    beforeEach(() => {
        clientRepository = new InMemoryClientRepository()
        sut = new CreateClientUseCase(clientRepository)
    })

    it('should be able to create client', async () => {
        const { tecl_nome, tecl_id } = await sut.execute({
            tecl_id: 1,
            tecl_cidade: "Any city",
            tecl_endereco: "Any address",
            tecl_nome: "Any name",
            tecl_telefone: "00999999999",
            tecl_uf: "Any UF"
        })

        expect(tecl_nome).toEqual(expect.any(String))
        expect(tecl_id).toEqual(expect.any(Number))
    })

    it('should be able to not create Associate if it already exists', async () => {
        const client = await sut.execute({
            tecl_id: 1,
            tecl_cidade: "Any city",
            tecl_endereco: "Any address",
            tecl_nome: "Any name",
            tecl_telefone: "00999999999",
            tecl_uf: "Any UF"
        })

        expect(client).toBeTruthy()
    })
})
