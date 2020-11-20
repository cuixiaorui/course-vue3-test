// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    // cy
    cy.visit("/");
    // login
    cy.login("cui_xiaorui@126.com", "123");
    cy.contains("h1", "Welcome to Your Vue.js App");

    // 测试原则
    // happy path
    // 用户的操作
    // e2e 的测试，颗粒度是很粗的
  });
});
