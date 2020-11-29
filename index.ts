/* eslint-disable no-magic-numbers */
import dropFirst from "@unction/dropfirst";

export default function remaining<A> (orderedEnumerable: OrderedArray<A> | Set<A> | RecordType<unknown, A> | string): OrderedArray<A> | Set<A> | RecordType<unknown, A> | string {
  return dropFirst(1)(orderedEnumerable);
}
