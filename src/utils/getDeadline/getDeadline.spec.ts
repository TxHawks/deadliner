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
test("correctly adjust a before deadline when it falls within a recess and then a sabatical", () => {
  const startDate = new Date("2023-04-13");
  const result = getDeadline({ startDate, before: 4 });
  const expected = new Date("2023-04-02");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("correctly adjust a before deadline when it falls within a recess", () => {
  const startDate = new Date("2023-04-13");
  const result = getDeadline({ startDate, before: 4 });
  const expected = new Date("2023-04-02");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("add days when passing over a recess in a before deadline", () => {
  const startDate = new Date("2023-04-13");
  const result = getDeadline({ startDate, before: 10 });
  const expected = new Date("2023-03-26");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("add days when passing over two recesses in a before deadline", () => {
  const startDate = new Date("2023-10-08");
  const result = getDeadline({ startDate, before: 90 });
  const expected = new Date("2023-05-15");

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
test("return correct after deadline when it falls on a sabatical", () => {
  const startDate = new Date("2023-06-08");
  const result = getDeadline({ startDate, after: 1 });
  const expected = new Date("2023-06-11");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("add days when passing over a recess in a after deadline", () => {
  const startDate = new Date("2023-09-28");
  const result = getDeadline({ startDate, after: 1 });
  const expected = new Date("2023-10-08");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("add days when passing over two recesses in a after deadline", () => {
  const startDate = new Date("2023-07-21");
  const result = getDeadline({ startDate, after: 90 });
  const expected = new Date("2023-12-14");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("correctly adjust an after deadline when it falls within a recess", () => {
  const startDate = new Date("2023-04-04");
  const result = getDeadline({ startDate, after: 5 });
  const expected = new Date("2023-04-17");

  expect(result.toDateString()).toBe(expected.toDateString());
});
