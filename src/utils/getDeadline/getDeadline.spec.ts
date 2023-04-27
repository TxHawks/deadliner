import getDeadline from "./getDeadline";

test("return correct before deadline within same month", () => {
  const startDate = new Date("2023-06-08");
  const result = getDeadline({ startDate, before: 1 });
  const expected = new Date("2023-06-07");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("return correct before deadline in a different month", () => {
  const startDate = new Date("2023-06-08");
  const result = getDeadline({ startDate, before: 9 });
  const expected = new Date("2023-05-30");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("correctly adjust a before deadline when it falls on an off day and then a weekend", () => {
  const startDate = new Date("2023-04-13");
  const result = getDeadline({ startDate, before: 4 });
  const expected = new Date("2023-04-02");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("correctly adjust a before deadline when it falls on an off day", () => {
  const startDate = new Date("2023-10-08");
  const result = getDeadline({ startDate, before: 4 });
  const expected = new Date("2023-09-25");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("return correct after deadline within same month", () => {
  const startDate = new Date("2023-06-10");
  const result = getDeadline({ startDate, after: 1 });
  const expected = new Date("2023-06-11");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("return correct after deadline in a different month", () => {
  const startDate = new Date("2023-06-28");
  const result = getDeadline({ startDate, after: 8 });
  const expected = new Date("2023-07-06");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("return correct after deadline when it falls on a weekend", () => {
  const startDate = new Date("2023-06-08");
  const result = getDeadline({ startDate, after: 1 });
  const expected = new Date("2023-06-11");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("correctly adjust an after deadline when it falls on an off day", () => {
  const startDate = new Date("2023-04-04");
  const result = getDeadline({ startDate, after: 5 });
  const expected = new Date("2023-04-17");

  expect(result.toDateString()).toBe(expected.toDateString());
});
