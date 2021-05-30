import { Router, Request, Response } from "express";


const routes = Router();

// routes.get("/tasks", getTasks);
// routes.delete("/tasks", deleteTask);
// routes.post("/tasks", createTask);
// routes.put("/tasks", updateTask);

routes.get("/", (request: Request, response: Response) => {
  response.json({ message: "ola mundo!" });
});

export default routes;
