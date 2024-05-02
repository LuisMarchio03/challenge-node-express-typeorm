import { Request, Response } from 'express'
import { makeListClientUseCase } from '../../../use-cases/factories/make-list-client-use-case' 

export class ListController {
  async handler(req: Request, res: Response) {
    try {
      const listClientUseCase = makeListClientUseCase()
      const client = await listClientUseCase.execute(parseInt(req?.params?.tecl_id))
    
      return res.status(200).json(client)
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

}
