# @unction/remaining

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string => OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string

Returns all but the first item in an ordered list

``` javascript
remaining([1, 2, 3]) // [2, 3]
remaining("abc") // "bc"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/remaining.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/remaining.svg?maxAge=2592000&style=flat-square
