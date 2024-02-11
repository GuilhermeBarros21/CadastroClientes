import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerServices } from "../services/CreateCustomerServices"

class CreateCustomerController {
  async handle(request: FastifyRequest, replay: FastifyReply){

    const{ name, email} = request.body as { name: string, email: string};
    console.log(name);
    console.log(email);

    const customerService = new CreateCustomerServices()
    const customer = await customerService.execute({name, email});

    replay.send(customer)
  }
}

export { CreateCustomerController}