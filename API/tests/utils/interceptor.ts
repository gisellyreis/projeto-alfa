interface Vacancy {
  title: string;
  description: string;
  requirements: string;
  contact_email: string;
  provider: string;
}

// util/interceptor.js
export const mockRequest = () => {
  const req = {
    body: {
      title: "backend dev",
      description: "trabalhar com backend",
      requirements: "nodejs, express, banco de dados",
      contact_email: "alguma_pessoa@hotmail.com",
      provider: "empresa",
    },
  };
  return req;
};

export const mockResponse = () => {
  const res = {};

  return res;
};
// mockNext: () => jest.fn()
