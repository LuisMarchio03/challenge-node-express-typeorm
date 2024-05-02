import { Request, Response } from 'express'
import z from 'zod'

import { makeUpdateClientUseCase } from '../../../use-cases/factories/make-update-client-use-case' 

export class UpdateController {
  async handler(req: Request, res: Response) {
    try {
      const updateBodySchema = z.object({
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
      } = updateBodySchema.parse(req.body)
    
      const updateClientUseCase = makeUpdateClientUseCase()
    
      await updateClientUseCase.execute({
        tecl_cidade,
        tecl_endereco,
        tecl_id,
        tecl_nome,
        tecl_telefone,
        tecl_uf
      })
    
      return res.status(200).send()
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

}
