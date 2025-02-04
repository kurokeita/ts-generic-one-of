type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type ExcludeFromTuple<T extends any[], U> = T extends [infer F, ...infer R]
  ? F extends U
    ? ExcludeFromTuple<R, U>
    : [F, ...ExcludeFromTuple<R, U>]
  : [];

type OneOfVariant<T, U extends any[]> = T & {
  [K in keyof UnionToIntersection<U[number]>]?: K extends keyof T
    ? T[K]
    : never;
};

export type OneOf<T extends any[]> = {
  [K in keyof T]: OneOfVariant<T[K], ExcludeFromTuple<T, T[K]>>;
}[number];

// Example usage:
// interface TypeA { a: number, b: number }
// interface TypeB { b: string }
// interface TypeC { c: boolean }
//
// type ExclusiveType = OneOf<[TypeA, TypeB, TypeC]>;
//
// Valid:
//   { a: 1, b: 1 } or
//   { b: 'text' } or
//   { c: true }
// Invalid:
//   { a: 1, b: 'text' } or
//   { b: 'text', c: true } or
//   { a: 1, c: true }
