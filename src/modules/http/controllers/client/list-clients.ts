import { Request, Response } from 'express'
import { makeListClientsUseCase } from '../../../use-cases/factories/make-list-clients-use-case' 
import { CustomRequest } from 'utils/types'

export class ListAllController {
  async handler(req: CustomRequest, res: Response) {
    try {
      const listClientsUseCase = makeListClientsUseCase()
      const clients = await listClientsUseCase.execute()
    
      return res.status(200).json({
        success: true,
        message: null,
        data: clients,
        error: null,
        token: req.token
      })
    } catch (err: any) {
      return res.status(400).json({ 
        success: false,
        message: err.message ,
        data: null,
        error: true,
        token: req.token
      })
    }
  }

}
