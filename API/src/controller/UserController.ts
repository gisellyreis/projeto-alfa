import { getRepository } from "typeorm";
import { Request, Response } from "express";

export const createUser = async (request: Request, response: Response) => {
  // const {name, age, propriedades do usuário} = request.body;
  // cada validação
  // cpf ...
  // email ... expressão regular
  // nome ?? precisa ter dois nomes?
  // validar tudo
  //se alguma coisa nao validar -> throw error
  // ex:
  // cpf ta incorreto
  // throw new Error('por favor envie um cpf válido')
  // await getRepository(User).save({ propriedades })
  // return response.json
};
