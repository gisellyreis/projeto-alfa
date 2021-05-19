import { getRepository } from "typeorm";
import { Tasks } from "../entity/Tasks";
import { Request, Response } from "express";

export const getTasks = async (request: Request, response: Response) => {
  const tasks = await getRepository(Tasks).find();
  return response.json(tasks);
};

export const createTask = async (request: Request, response: Response) => {
  const { title, description } = request.body;

  const task = await getRepository(Tasks).save({ title, description });

  return response.json({ message: "task criada no banco", task });
};

export const deleteTask = async (request: Request, response: Response) => {
  const { id } = request.body;

  // const task = await getRepository(Tasks).findOne(id);

  const task = await getRepository(Tasks).delete(id);

  if (task.affected) {
    return response.json({ message: "task deletada", task });
  } else {
    return response.json({ message: "erro" });
  }
};

export const updateTask = async (request: Request, response: Response) => {
  const { id, title, description, finished } = request.body;

  const update = await getRepository(Tasks).update(id, {
    title,
    description,
    finished,
  });
  const task = await getRepository(Tasks).findOne(id);

  if (update.affected) {
    return response.json({ message: "task atualizada", task });
  } else {
    return response.json({ message: "erro" });
  }
};
