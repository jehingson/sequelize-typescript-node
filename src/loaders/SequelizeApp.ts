import {Sequelize} from 'sequelize'
import sequelize from '../config/sequelize.typescripts'

export class SequelizeApp {
  databaseConnection = ():Promise<void> => {
    console.info('Start Sequelize')
    return this.sequelizeAuthenticate()
  }
  databaseSyncConnection = ():Promise<Sequelize> => {
    return this.sequelizeAuthenticate().then(this.sequilizeSync)
  }

  sequilizeSync = (): Promise<Sequelize> => {
    return sequelize.sync({force: false})
  }

  sequelizeAuthenticate = (): Promise<void> => {
    return sequelize.authenticate();
  }

  getSequelize(){
    return sequelize
  }
}