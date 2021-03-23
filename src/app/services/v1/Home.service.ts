import { HomeRepository } from "../../repository";

export class HomeService{

  repository: HomeRepository = new HomeRepository()

  home = (body: any) => {
    console.log(body)
    return null
  }

  create = async (body: any) => {
    const data: any = await this.repository.create(body)
    return body
  }

  constructor(){

  }
}