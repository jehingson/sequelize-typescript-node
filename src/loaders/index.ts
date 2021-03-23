import Http from 'http'
import { ExpressApp } from "./ExpressApp";
import { SequelizeApp } from "./SequelizeApp"

export class Server {
  expressApp = new ExpressApp();
  httpServer: Http.Server;
  sequelizeApp = new SequelizeApp()

  runServer = (): Promise<void | Http.Server > => {
  return this.sequelizeApp.databaseConnection().then(this.serverListen).catch(this.serverErrorHandler)
  }

  serverListen = (): Http.Server => {
    const HOST = 'localhost'
    const PORT = '3000'
    console.log(`Server listener: http://${HOST}:${PORT}/`)
    return this.httpServer.listen(PORT, ():void => {})
  }

  serverErrorHandler = (error: Error): void =>{
    console.error('Server run error. ', error.message)
  }

  constructor(){
    const expressApp = this.expressApp;
    this.httpServer = new Http.Server(expressApp.app)
  }
}
