import { Request, Response } from 'express'
import { makeDeleteClientUseCase } from '../../../use-cases/factories/make-delete-client-use-case' 

interface CustomRequest extends Request {
  token?: string; 
}
export class DeleteController {
  async handler(req: CustomRequest, res: Response) {
    try {
      const deleteClientUseCase = makeDeleteClientUseCase()
      await deleteClientUseCase.execute(parseInt(req?.params?.id))
    
      return res.status(200).json({
        success: true,
        message: "Apagado com sucesso!",
        data: null,
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
