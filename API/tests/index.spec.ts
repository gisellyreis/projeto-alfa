import { getRepository } from "typeorm";
import { VacancyInfo } from "../src/controller/VacanciesController";
import { Vacancy } from "../src/entity/Vacancies";

const {
  getVacancies,
  createVacancy,
  updateVacancy,
  deleteVacancy,
} = require("../src/controller/VacanciesController");
const { mockRequest } = require("./utils/interceptor");

describe("Controller: Vacancies", () => {
  test("Should create new vacancy", async () => {
    const req: VacancyInfo = mockRequest();

    await createVacancy(req);

    const vacancy = await getRepository(Vacancy).find({
      where: { title: req.title },
    });

    expect(vacancy).toBeDefined();
  });

  test("Should update vacancy", async () => {
    const req: VacancyInfo = mockRequest();
    req.title = "Dev frontend";

    await updateVacancy(req);

    const vacancy = await getRepository(Vacancy).find({
      where: { title: req.title },
    });

    expect(vacancy).toBeDefined();
  });

  test("Should get all vacancies", async () => {
    const req: VacancyInfo = mockRequest();
    req.title = "Dev frontend";

    const vacancies = await getVacancies(req);

    expect(vacancies).toBeDefined();
  });

  test("Should delete vacancy", async () => {
    let req = mockRequest();
    console.log(req);

    const vacancies = await getVacancies();

    await deleteVacancy(vacancies[0]);

    const vacancy = await getRepository(vacancies).findOne(vacancies[0].id);

    expect(vacancy).not.toBeDefined();
  });
});
