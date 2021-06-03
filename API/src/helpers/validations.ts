import { validate } from "isemail";
import { VacancyInfo } from "../controller/VacanciesController";

export const validateVacancyInfo = (vacancy: VacancyInfo) => {
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

export const ESTADOS = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
  "",
];
export const validateGenericUser = (
  primary_email,
  password,
  legal_name,
  CEP,
  mobile_phone,
  state
) => {
  let validations = 0;
  if (!validate(primary_email, { minDomainAtoms: 2 }))
    throw new Error(`Email inválido.`);
  if (password.length < 8)
    throw new Error(`Senha inválida, necessita ter mais de 8 caracteres.`);
  if (legal_name.length < 2) throw new Error(`Nome inválido: muito curto.`);
  if ((CEP != "" && CEP.length != 8) || Number.isNaN(Number(CEP)))
    throw new Error(`CEP inválido.`);
  if (!ESTADOS.includes(state)) throw new Error(`Estado inválido.`);
  if (mobile_phone.length != 11 && mobile_phone.length != 0)
    throw new Error(`Celular inválido.`);
<<<<<<< HEAD
};
=======
}

export const validateCandidateUser = (type,
        primary_email,
        password,
        legal_name,
        registration_number,
        legal_id,
        address,
        area,
        city,
        state,
        CEP,
        mobile_phone) => {
  validateGenericUser(primary_email, password,
                     legal_name, CEP, mobile_phone,state);
  // TODO: validar se email é ufba
  // TODO: validar se numero de matricula tem 9 chars e é numero
  // TODO: validar CPF
}


export const validateProfessorUser = (type,
        primary_email,
        password,
        legal_name,
        legal_id,
        address,
        area,
        city,
        state,
        CEP,
        mobile_phone) => {
  validateGenericUser(primary_email, password,
                     legal_name, CEP, mobile_phone,state);
  // TODO: validar se email é ufba
  // TODO: validar CPF
}
export const validateCompanyUser = (type,
        primary_email,
        password,
        legal_name,
        legal_id,
        address,
        area,
        city,
        state,
        CEP,
        mobile_phone) => {
  validateGenericUser(primary_email, password,
                     legal_name, CEP, mobile_phone,state);
  // TODO: validar CNPJ
}
>>>>>>> 1904256f96095953dd88ba73aa1db288f36a648b
