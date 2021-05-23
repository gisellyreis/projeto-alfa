import { Request, Response } from "express";
import { validate } from "isemail";
import { getRepository } from "typeorm";
import { Vacancy } from "../entity/Vacancies";

interface VacancyInfo {
  title: string;
  description: string;
  requirements: string[];
  contact_email: string;
  provider: string;
}

const validateVacancyInfo = (vacancy: VacancyInfo) => {
  const { title, description, requirements, contact_email, provider } = vacancy;
  if (!title.length) {
    throw new Error(`Por favor, escreva um título`);
  }
  if (!description.length) {
    throw new Error(`É necessário ter uma descrição válida`);
  }
  if (!validate(contact_email)) {
    throw new Error(`Email não é válido`);
  }
  if (!provider.length) {
    throw new Error(`Quem está oferecendo esta vaga?`);
  }
};

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
  const slots = await getRepository(Vacancy).find();
  return response.json(slots);
};

export const updateVacancy = async (request: Request, response: Response) => {
  const { title, description, requirements, contact_email, provider } =
    request.body;
  const { id } = request.params;

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
  const { id } = request.params;

  const isDeleted = await getRepository(Vacancy).delete(id);

  if (!isDeleted.affected) {
    throw new Error(`Tivemos um erro inesperado, por favor tente novamente.`);
  }
};
