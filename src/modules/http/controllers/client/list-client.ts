import { Request, Response } from 'express'
import { makeListClientUseCase } from '../../../use-cases/factories/make-list-client-use-case' 

interface CustomRequest extends Request {
  token?: string; 
}

export class ListController {
  async handler(req: CustomRequest, res: Response) {
    try {
      console.log(req?.params?.tecl_id)
      const listClientUseCase = makeListClientUseCase()
      const client = await listClientUseCase.execute(parseInt(req?.params?.id))
    
      return res.status(200).json({
        success: true,
        message: null,
        data: client,
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
