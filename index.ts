/* eslint-disable no-magic-numbers */
import dropFirst from "@unction/dropfirst";

export default function remaining<A> (orderedEnumerable: OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string {
  return dropFirst(1)(orderedEnumerable);
}
