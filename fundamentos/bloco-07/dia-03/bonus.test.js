const searchEmployee = require("./bonus.js");

describe("Testa a função searchEmployee", () => {
  it(`Testa se searchEmployee é uma função`, () => {
    expect(typeof searchEmployee).toBe("function");
  });
  it(`Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da ID pesquisada`, () => {
    expect(searchEmployee("8579-6", "firstName")).toBe("Ana");
  });
  it(`Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da ID pesquisada`, () => {
    expect(searchEmployee("8579-6", "lastName")).toBe("Gates");
  });
  it(`Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades da ID pesquisada`, () => {
    expect(searchEmployee("8579-6", "specialities")).toContain("UX", "Design");
  });
  it(`Testa a mensagem do erro para ID inexistente`, () => {
    expect(() => {searchEmployee("1256-8", "specialities");}).toThrowError(new Error("ID não identificada"));
  });
  it(`Testa a mensagem do erro para informação inexistente`, () => {
    expect(() => {searchEmployee("4678-2", "shift");}).toThrowError(new Error("Indisponível"));
  });
});
