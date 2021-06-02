import { Router, Request, Response } from "express";
import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from "./controller/UserController";
import {
  getVacancies,
  createVacancy,
  deleteVacancy,
  updateVacancy,
} from "./controller/VacanciesController";

const routes = Router();

routes.get("/tasks", getUsers);
routes.delete("/tasks", deleteUser);
routes.post("/tasks", createUser);
routes.put("/tasks", updateUser);

routes.get("/vacancy", getVacancies);
routes.delete("/vacancy", deleteVacancy);
routes.post("/vacancy", createVacancy);
routes.put("/vacancy", updateVacancy);

routes.get("/", (request: Request, response: Response) => {
  response.json({ message: "ola mundo!" });
});

export default routes;
