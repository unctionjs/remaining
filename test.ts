
import remaining from "./index";

test("works", () => {
  expect(remaining(["a", "b", "c"])).toEqual(["b", "c"]);
});

test("works", () => {
  expect(remaining("abc")).toEqual("bc");
});
