const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const res = calculadora.somar(2, 2);
  expect(res).toBe(4);
});
