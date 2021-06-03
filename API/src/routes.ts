import { Router, Request, Response } from "express";
<<<<<<< HEAD
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
=======

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
>>>>>>> 1904256f96095953dd88ba73aa1db288f36a648b

routes.get("/", (request: Request, response: Response) => {
  response.json({ message: "ola mundo!" });
});

export default routes;
