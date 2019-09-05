/* eslint-disable no-magic-numbers */
import dropFirst from "@unction/dropfirst";
import {OrderedEnumerableType} from "./types";

export default function remaining<A> (orderedEnumerable: OrderedEnumerableType<A>): OrderedEnumerableType<A> {
  return dropFirst(1)(orderedEnumerable);
}
