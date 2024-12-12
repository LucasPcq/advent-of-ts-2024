type FormatNames<T extends string[][]> = {
  [K in keyof T]: {
    name: T[K][0];
    count: T[K][2] extends `${infer C extends number}` ? C : never;
    rating: T[K][0] extends "Liam" | "Aala" ? "naughty" : "nice";
  };
};

/**
 * Test
 */

export type Names = [
  ["Liam", "M", "20802"],
  ["Noah", "M", "18995"],
  ["Oliver", "M", "14741"],
  ["Emma", "F", "13527"],
  ["Charlotte", "F", "12596"],
  ["Amelia", "F", "12311"],
  ["Sophia", "F", "11944"]
];

import type { Expect, Equal } from "type-testing";

type t0_actual = FormatNames<Names>["length"]; // =>
type t0_expected = 7; // =>
type t0 = Expect<Equal<t0_actual, t0_expected>>;

type t1_actual = FormatNames<Names>[0]; // =>
type t1_expected = {
  // =>
  name: "Liam";
  count: 20802;
  rating: "naughty";
};
type t1 = Expect<Equal<t1_actual, t1_expected>>;

type t2_actual = FormatNames<Names>[1]; // =>
type t2_expected = {
  // =>
  name: "Noah";
  count: 18995;
  rating: "nice";
};
type t2 = Expect<Equal<t2_actual, t2_expected>>;
