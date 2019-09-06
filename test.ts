
import remaining from "./index";

test(() => {
  expect(remaining(["a", "b", "c"])).toEqual(["b", "c"]);
});

test(() => {
  expect(remaining("abc")).toEqual("bc");
});
