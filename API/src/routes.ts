import { Router, Request, Response } from "express";
import { createUser, getUsers } from "./controller/UserController";

import { createVacancy, getVacancies } from "./controller/VacanciesController";

const routes = Router();

routes.get("/users", getUsers);
routes.post("/users", createUser);

routes.get("/vagas", getVacancies);
routes.post("/vagas", createVacancy);
/* routes.delete("/tasks", deleteTask);
routes.post("/tasks", createTask);
routes.put("/tasks", updateTask);
 */
routes.get("/", (request: Request, response: Response) => {
  response.json({ message: "ola mundo!" });
});

export default routes;
