import {NextFunction, Request, Response} from 'express'
import { HomeService } from "../../services";
export class HomeController{
  service = new HomeService();
  home = (
    request: Request,
    response: Response,
    nextOrError: NextFunction
  ) => {
    console.log('Estamos llegando')
    response.json({message: 'Hola mundo'})
  }

  create = async (
    request: Request,
    response: Response,
    nextOrError: NextFunction
  ) => {
    const body: any = request.body
    const content: any = await this.service.create(body)
    response.json(content)
  }


  constructor(){
    
    
  }
}