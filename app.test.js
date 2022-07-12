const request = require("supertest");
const app = require("./app");

describe("Test the / path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .expect(200);    
    });
  });

describe("Test the /api/users path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/api/users")
        .expect(200);    
    });
  });

describe("Test the /api/companies path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/api/companies")
        .expect(200);    
    });
  });
 
