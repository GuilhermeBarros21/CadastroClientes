import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/ListCustomersServices";

class ListCustomersController{
  async handle(request: FastifyRequest,replay: FastifyReply){
    const ListCustomerService = new ListCustomersService();

    const customers = await ListCustomerService.execute();

    replay.send(customers)
  }
}

export { ListCustomersController}