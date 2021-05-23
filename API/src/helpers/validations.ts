import { validate } from "isemail";

interface VacancyInfo {
  title: string;
  description: string;
  requirements: string[];
  contact_email: string;
  provider: string;
}

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
