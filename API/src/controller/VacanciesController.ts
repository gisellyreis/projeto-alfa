import { Request, Response } from "express";
import { validate } from "isemail";
import { getRepository } from "typeorm";
import { Vacancy } from "../entity/Vacancies";
import { validateVacancyInfo } from "../helpers/validations";

export interface VacancyInfo {
  title: string;
  description: string;
  requirements: string[];
  contact_email: string;
  provider: string;
}

export const createVacancy = async (request: Request, response: Response) => {
  const { title, description, requirements, contact_email, provider } =
    request.body;

  validateVacancyInfo({
    title,
    description,
    requirements,
    contact_email,
    provider,
  });

  await getRepository(Vacancy).save({
    title,
    description,
    requirements,
    contact_email,
    provider,
  });
};

export const getVacancies = async (request: Request, response: Response) => {
  const vacancies = await getRepository(Vacancy).find();
  return response.json(vacancies);
};

export const updateVacancy = async (request: Request, response: Response) => {
  const { id, title, description, requirements, contact_email, provider } =
    request.body;

  validateVacancyInfo({
    title,
    description,
    requirements,
    contact_email,
    provider,
  });

  const isUpdated = await getRepository(Vacancy).update(id, {
    title,
    description,
    requirements,
    contact_email,
    provider,
  });

  if (!isUpdated.affected) {
    throw new Error(`Tivemos um erro inesperado, por favor tente novamente.`);
  }
};

export const deleteVacancy = async (request: Request, response: Response) => {
  const { id } = request.body;

  const isDeleted = await getRepository(Vacancy).delete(id);

  if (!isDeleted.affected) {
    throw new Error(`Tivemos um erro inesperado, por favor tente novamente.`);
  }
};
