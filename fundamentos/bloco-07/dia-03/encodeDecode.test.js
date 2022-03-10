const { encode, decode } = require("./encodeDecode.js");

describe(`Testa a função encode:`, () => {
  it(`a função encode é definida`, () => {
    expect(encode).toBeDefined();
  });
  it(`encode é uma função`, () => {
    expect(typeof encode).toEqual("function");
  });
  it(`converte "baam" para "b11m"`, () => {
    expect(encode("baam")).toEqual("b11m");
  });
  it(`converte "hoaquim" para "h41q53m"`, () => {
    expect(encode("hoaquim")).toEqual("h41q53m");
  });
  it(`converte "aguero" para "1g52r4"`, () => {
    expect(encode("aguero")).toEqual("1g52r4");
  });
  it(`checa se o retorno da função tem o mesmo número de caracteres`, () => {
    expect(encode("manhwa").length).toEqual(6);
  });
});

describe(`Testa a função decode:`, () => {
  it(`a função decode é definida`, () => {
    expect(decode).toBeDefined();
  });
  it(`decode é uma função`, () => {
    expect(typeof decode).toEqual("function");
  });
  it(`converte "b11m" para "baam"`, () => {
    expect(decode("b11m")).toEqual("baam");
  });
  it(`converte "h41q53m" para "hoaquim"`, () => {
    expect(decode("h41q53m")).toEqual("hoaquim");
  });
  it(`converte "1g52r4" para "aguero"`, () => {
    expect(decode("1g52r4")).toEqual("aguero");
  });
  it(`checa se o retorno da função tem o mesmo número de caracteres`, () => {
    expect(decode("m1nhw1").length).toEqual(6);
  });
});
