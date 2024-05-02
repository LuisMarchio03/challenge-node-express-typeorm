import { Request, Response } from 'express'
import { makeDeleteClientUseCase } from '../../../use-cases/factories/make-delete-client-use-case' 

export class DeleteController {
  async handler(req: Request, res: Response) {
    try {
      const deleteClientUseCase = makeDeleteClientUseCase()
      await deleteClientUseCase.execute(parseInt(req?.params?.tecl_id))
    
      return res.status(200).send()
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

}
