
import { describe, it,expect } from "vitest";
import counter from "./helloFunctions";




describe("Counter function should return number + 1", () => {
  it("Should take in a number and return a number + 1", () => {
    expect(counter(1)).toBe(2)
  })
})

