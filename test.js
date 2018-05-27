/* eslint-disable flowtype/require-return-type */
import {test} from "tap"

import remaining from "./index"

test(({same, end}) => {
  same(
    remaining(["a", "b", "c"]),
    ["b", "c"]
  )

  end()
})

test(({same, end}) => {
  same(
    remaining("abc"),
    "bc"
  )

  end()
})
