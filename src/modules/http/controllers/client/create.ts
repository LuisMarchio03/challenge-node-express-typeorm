import { Request, Response } from 'express'
import z from 'zod'

import { makeCreateClientUseCase } from '../../../use-cases/factories/make-create-client-use-case' 
import { CustomRequest } from 'utils/types'


export class CreateController {
  async handler(req: CustomRequest, res: Response) {
    try {
      const createBodySchema = z.object({
        tecl_nome: z.string(),
        tecl_endereco:z.string(),
        tecl_cidade:z.string(),
        tecl_uf: z.string(),
        tecl_telefone: z.string(),
      })
    
      const { 
        tecl_cidade,
        tecl_endereco,
        tecl_nome,
        tecl_telefone,
        tecl_uf
      } = createBodySchema.parse(req.body)
    
      const createClientUseCase = makeCreateClientUseCase()
    
      await createClientUseCase.execute({
        tecl_cidade,
        tecl_endereco,
        tecl_nome,
        tecl_telefone,
        tecl_uf
      })
    
      return res.status(201).json({
        success: true,
        message: "Adicionado com sucesso!",
        data: {
          tecl_nome,
          tecl_cidade,
          tecl_endereco,
          tecl_telefone,
          tecl_uf
        },
        error: null,
        token: req.token
      })
    } catch (err: any) {
      return res.status(400).json({ 
          success: false,
          message: err.message,
          data: null,
          error: true,
          token: req.token
       })
    }
  }

}
