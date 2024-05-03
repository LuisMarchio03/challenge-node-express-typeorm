import { Request, Response } from 'express'
import z from 'zod'

import { makeCreateClientUseCase } from '../../../use-cases/factories/make-create-client-use-case' 
import { generateToken } from '../../../../utils/token-generator';

export class GenerateToken {
  async handler(req: Request, res: Response) {
    try {
      const token = generateToken();
      return res.status(201).json({
        success: true,
        message: null,
        data: null,
        error: null,
        token: token
      })
    } catch (err: any) {
      return res.status(400).json({ 
          success: false,
          message: err.message,
          data: null,
          error: true,
          token: null
       })
    }
  }


  // try {
  //   const token = generateToken();
  //   return res.status(200).json({ token });
  // } catch (error) {
  //   return res.status(500).json({ error: 'Erro ao gerar o token' });
  // }

}
