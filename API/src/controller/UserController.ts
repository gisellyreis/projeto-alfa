import { getRepository } from "typeorm";
import {User, user_types} from "../entity/User"
import { Request, Response } from "express";

export const getUsers = async (request: Request, response: Response) => {
  const users = await getRepository(User).find();
  return response.json(users);
};

export const createUser = async (request: Request, response: Response) => {
  let {type} = request.body;
  type = Number(type);
  switch (type) {
    case user_types.candidate:
      const {primary_email, secondary_email, password,
             legal_name, registration_number, legal_id,
             address, area, city, state, CEP, mobile_phone} = request.body;
      // TODO validar email com package isemail
      // TODO validar email secundario com package isemail
      // TODO validar password de acordo com as regras que estabelecermos
      // TODO validar nome????
      // TODO validar numero de matricula
      // TODO validar CPF
      // TODO validar estado
      // TODO validar CEP
      // TODO validar celular
      const user = await getRepository(User).save({type,primary_email, secondary_email, password,
             legal_name, registration_number, legal_id,
             address, area, city, state, CEP, mobile_phone});
      return response.json({message: "user created in database", user});
      break;
    case user_types.company:
      const {} = request.body;
      break;
    case user_types.professor:
      const {} = request.body;
      break;  
    default:
      // ERRO
      break;
  }
};

export const deleteUser = async (request: Request, response: Response) => {
  const { id } = request.body;

  const user = await getRepository(User).delete(id);

  if(user.affected) {
    return response.json({ message: "user deleted", user });
  } else {
    return response.json({ message: "error" });
  }
}