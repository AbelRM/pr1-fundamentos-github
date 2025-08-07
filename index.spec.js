const dice = require("./index");
test("Retorna un numero random de 1 al 6", () => {
  const rollResult = dice.roll();
  console.log(`result was ${rollResult}`);
  expect(rollResult).toBeGreaterThanOrEqual(1);
  expect(rollResult).toBeLessThanOrEqual(6);
})