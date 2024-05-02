import { Request, Response } from 'express'
import { makeListClientsUseCase } from '../../../use-cases/factories/make-list-clients-use-case' 

export class ListController {
  async handler(req: Request, res: Response) {
    try {
      const listClientsUseCase = makeListClientsUseCase()
      const clients = await listClientsUseCase.execute()
    
      return res.status(200).json(clients)
    } catch (err: any) {
      return res.status(400).json({ error: err.message })
    }
  }

}
