import { getRepository } from "typeorm";
import { Tasks } from "../entity/Tasks";
import { Request, Response } from "express";

export const getTasks = async (request: Request, response: Response) => {
  const tasks = await getRepository(Tasks).find();
  return response.json(tasks);
};
