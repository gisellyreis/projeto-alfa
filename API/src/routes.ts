import { Router, Request, Response } from "express";

import { createUser, deleteUser, getUsers, updateUser } from "./controller/UserController";
import { createVacancy, deleteVacancy, getVacancies, updateVacancy } from "./controller/VacanciesController";

const routes = Router();

routes.get("/users", getUsers);
routes.post("/users", createUser);
routes.put("/users", updateUser);
routes.delete("/users", deleteUser);

routes.get("/vagas", getVacancies);
routes.post("/vagas", createVacancy);
routes.put("/vagas", updateVacancy);
routes.delete("/vagas", deleteVacancy);

routes.get("/", (request: Request, response: Response) => {
  response.json({ message: "ola mundo!" });
});

export default routes;
