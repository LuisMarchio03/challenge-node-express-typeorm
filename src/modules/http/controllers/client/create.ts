import { Request, Response } from 'express'
import z from 'zod'

import { makeCreateClientUseCase } from '../../../use-cases/factories/make-create-client-use-case' 

export class CreateController {
  async handler(req: Request, res: Response) {
    try {
      const createBodySchema = z.object({
        tecl_id: z.number(),
        tecl_nome: z.string(),
        tecl_endereco:z.string(),
        tecl_cidade:z.string(),
        tecl_uf: z.string(),
        tecl_telefone: z.string(),
      })
    
      const { 
        tecl_cidade,
        tecl_endereco,
        tecl_id,
        tecl_nome,
        tecl_telefone,
        tecl_uf
      } = createBodySchema.parse(req.body)
    
      const createClientUseCase = makeCreateClientUseCase()
    
      await createClientUseCase.execute({
        tecl_cidade,
        tecl_endereco,
        tecl_id,
        tecl_nome,
        tecl_telefone,
        tecl_uf
      })
    
      return res.status(201).send()
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

}
