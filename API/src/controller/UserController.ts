import { getRepository } from "typeorm";
import { validate } from "isemail";
import { User, user_types } from "../entity/User";
import { Request, Response } from "express";
import { genSalt, hash } from "bcrypt";
import { validate as isValid } from "gerador-validador-cpf";
import { validateVacancyInfo } from "../helpers/validations";

export const getUsers = async (request: Request, response: Response) => {
  const users = await getRepository(User).find();
  return response.json(users);
};

export const createUser = async (request: Request, response: Response) => {
  let { type } = request.body;
  type = Number(type);
  const {
    primary_email,
    password,
    legal_name,
    legal_id,
    address,
    area,
    city,
    state,
    CEP,
    mobile_phone,
  } = request.body;

  const password_hash = hash(password, 10);
  let user: User;
  switch (type) {
    case user_types.candidate:
      const { registration_number } = request.body;
      // TODO validar numero de matricula
      // TODO validar CPF
      // TODO: USAR BCRYPT AQUI
      user = await getRepository(User).save({
        type,
        primary_email,
        secondary_email,
        legal_name,
        registration_number,
        legal_id,
        address,
        area,
        city,
        state,
        CEP,
        mobile_phone,
      });
      return response.json({ message: "user created in database", user });
      break;
    case user_types.company:
      const { alternative_name, employee_name } = request.body;
      user = await getRepository(User).save({
        type,
        primary_email,
        secondary_email,
        password,
        legal_name,
        legal_id,
        address,
        area,
        city,
        state,
        CEP,
        mobile_phone,
      });
      return response.json({ message: "user created in database", user });
      break;
    case user_types.professor:
      legal_id.valida("123.456.789-00");
      user = await getRepository(User).save({
        type,
        primary_email,
        secondary_email,
        password,
        legal_name,
        legal_id,
        address,
        area,
        city,
        state,
        CEP,
        mobile_phone,
      });
      return response.json({ message: "user created in database", user });
      break;
    default:
      return response.json({ message: "erro" });
      break;
  }
};

export const deleteUser = async (request: Request, response: Response) => {
  const { id } = request.params;

  const user = await getRepository(User).delete(id);

  if (!user.affected)
    throw new Error(`Ocorreu algum erro, por favor tente novamente`);
};

export const updateUser = async (request: Request, response: Response) => {
  let { type } = request.body;
  type = Number(type);
  const {
    id,
    primary_email,
    secondary_email,
    legal_name,
    legal_id,
    address,
    area,
    city,
    state,
    CEP,
    mobile_phone,
  } = request.body;
  // TODO validar email com package isemail
  // TODO validar email secundario com package isemail
  // TODO validar password de acordo com as regras que estabelecermos
  // TODO validar nome????
  // TODO validar estado
  // TODO validar CEP
  // TODO validar celular
  let update: any;
  switch (type) {
    case user_types.candidate:
      const { registration_number } = request.body;
      update = await getRepository(User).update(id, {
        primary_email,
        secondary_email,
        legal_name,
        legal_id,
        address,
        area,
        city,
        state,
        CEP,
        mobile_phone,
        registration_number,
      });
      break;
    case user_types.company:
      const { alternative_name, employee_name } = request.body;
      update = await getRepository(User).update(id, {
        primary_email,
        secondary_email,
        legal_name,
        legal_id,
        address,
        area,
        city,
        state,
        CEP,
        mobile_phone,
        alternative_name,
        employee_name,
      });
      break;
    case user_types.professor:
      update = await getRepository(User).update(id, {
        primary_email,
        secondary_email,
        legal_name,
        legal_id,
        address,
        area,
        city,
        state,
        CEP,
        mobile_phone,
      });
      break;
    default:
      return response.json({ message: "erro: tipo invalido" });
  }

  const user = await getRepository(User).findOne(id);
  if (!update.affected) {
    throw new Error(`Ocorreu algum erro, favor tentar novamente`);
  }
};
