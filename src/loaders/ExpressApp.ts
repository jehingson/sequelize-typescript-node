import express, {Request, Response, NextFunction} from 'express'
import cors from "cors";
import Boom from '@hapi/boom'
import apiRouter from '../api/routes'

export class ExpressApp{
  app = express()

  setAppSettings = (): void => {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: true}))

    //Static Router
   // this.app.use(express.static('./public'))
  }

  setAppRouter = (): void => {
    this.app.use(
      '/api/v1', this.getAppRouter(), (
          error: Error,
        _request: Request,
        _response: Response,
        errorHandler: NextFunction
      ): void => {

        //response.status(400).json({success: false, error: error.message})
        errorHandler(Boom.badRequest(error.message))
      }
    )
  }
  getAppRouter = () => {
    return apiRouter;
  };

  constructor(){
    console.log('Start Express')
    this.setAppSettings()
    this.setAppRouter()
  }
}
