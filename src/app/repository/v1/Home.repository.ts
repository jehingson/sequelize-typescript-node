import { Users } from "../../models/User";

export class HomeRepository{
  create = async (body: any) => {
    console.log(body)
    const {fullname, email, phone, uImage }: any = body
    const response: any = await Users.create({
      fullname: fullname,
      email: email,
      phone: phone,
      uImage: uImage
    })
    return response
  }
}