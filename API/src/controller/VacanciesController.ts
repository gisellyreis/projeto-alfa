import { Request, Response } from "express";
import { validate } from "isemail";
import { getRepository } from "typeorm";
import { Vacancy } from "../entity/Vacancies";
import { validateVacancyInfo } from "../helpers/validations";

export const createVacancy = async (request: Request, response: Response) => {
  const { title, description, requirements, contact_email, provider } =
    request.body;
  try{
      validateVacancyInfo({
    title,
    description,
    requirements,
    contact_email,
    provider,
  });

  let vacancy = await getRepository(Vacancy).save({
    title,
    description,
    requirements,
    contact_email,
    provider,
  });
  return response.json({ message: "vacancy created in database", vacancy });
  }catch(error){
    response.statusCode = 400;
    return response.json({error:{"message":error.message}});
  }

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
