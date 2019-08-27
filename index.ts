/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import dropFirst from "@unction/dropfirst";
export default function remaining (orderedList) {
  return dropFirst(1)(orderedList);
}
