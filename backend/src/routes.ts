import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomersController } from "./controllers/ListCustomersController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  })

  fastify.post("/customer", async (resquest: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerController().handle(resquest,reply)
  })


  fastify.get("/customers", async (resquest: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomersController().handle(resquest,reply)
    
  })

  fastify.delete("/customer", async (resquest: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerController().handle(resquest,reply)
})
}
