import { Router, Request, Response } from "express";
import { getTasks } from "./controller/TasksController";

const routes = Router();

routes.get("/tasks", getTasks);

routes.get("/", (request: Request, response: Response) => {
  response.json({ message: "ola mundo!" });
});

export default routes;
