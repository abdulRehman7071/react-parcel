import { sum } from "../sum";

test("sum of two number", () => {
  const results = sum(2, 4);
  expect(results).toBe(6);
});
