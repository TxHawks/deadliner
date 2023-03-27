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
test("correctly adjust a before deadline when it falls on an off day", () => {
  const startDate = new Date("2023-09-06");
  const result = getDeadline({ startDate, before: 1 });
  const expected = new Date("2023-07-20");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("return correct after deadline within same month", () => {
  const startDate = new Date("2023-06-08");
  const result = getDeadline({ startDate, after: 1 });
  const expected = new Date("2023-06-09");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("return correct after deadline in a different month", () => {
  const startDate = new Date("2023-06-28");
  const result = getDeadline({ startDate, after: 9 });
  const expected = new Date("2023-07-07");

  expect(result.toDateString()).toBe(expected.toDateString());
});
test("correctly adjust an after deadline when it falls on an off day", () => {
  const startDate = new Date("2023-07-20");
  const result = getDeadline({ startDate, after: 1 });
  const expected = new Date("2023-09-06");

  expect(result.toDateString()).toBe(expected.toDateString());
});
// test("correctly go forward when an after deadline falls on a Jewish holiday", () => {
//   const startDate = new Date("2023-04-24");
//   const result = getDeadline({ startDate, after: 1 });
//   const expected = new Date("2023-04-27");
//
//   expect(result.toDateString()).toBe(expected.toDateString());
// });
// test("correctly go forward when a before deadline falls on a Jewish holiday", () => {
//   const startDate = new Date("2023-04-26");
//   const result = getDeadline({ startDate, before: 1 });
//   const expected = new Date("2023-04-27");
//
//   expect(result.toDateString()).toBe(expected.toDateString());
// });
