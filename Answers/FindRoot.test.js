const findRoot = require("../2. Many Return Types/FindRoot").findRoot;

describe("findRoot Testing Answers", () => {
  const e = 0.0001;
  const f = x => x * x - 4;
  it("Test Basic", () => {
    const x = findRoot(f, 0, 10, e);
    expect(x.root).toBeGreaterThanOrEqual(2 - e);
    expect(x.root).toBeLessThanOrEqual(2 + e);
  });
  it("Test No Root Found", () => {
    const y = findRoot(f, 4, 4, e);
    expect(y.root).toBeUndefined();
    expect(y.iterations).toBe(0);
  });
  it("Test f is not a function", () => {
    expect(() => findRoot(2, 2, 2, 2)).toThrow("f must be a function");
  });
});
