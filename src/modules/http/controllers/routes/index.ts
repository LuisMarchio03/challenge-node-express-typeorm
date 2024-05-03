import { Router } from "express";
import { authMiddleware } from "../../../../middleware/auth.middleware";

import { CreateController } from "../client/create"
import { DeleteController } from "../client/delete"
import { ListController } from "../client/list-client"
import { ListAllController } from "../client/list-clients"
import { UpdateController } from "../client/update"
import { GenerateToken } from "../client/generate-token";


const clientRoutes = Router();

const generateToken = new GenerateToken();

const createController = new CreateController();
const listController = new ListController();
const listAllController = new ListAllController();
const updateController = new UpdateController();
const deleteController = new DeleteController();

clientRoutes.post("/api/v1/generate/token", generateToken.handler)

clientRoutes.post("/api/v1/teste/cliente", authMiddleware, createController.handler);
clientRoutes.get("/api/v1/teste/clientes", authMiddleware, listAllController.handler);
clientRoutes.get("/api/v1/teste/cliente/:id", authMiddleware, listController.handler);
clientRoutes.put("/api/v1/teste/cliente", authMiddleware, updateController.handler);
clientRoutes.delete("/api/v1/teste/cliente/:id", authMiddleware, deleteController.handler);

export { clientRoutes };
