const assert = require('chai').assert;
const middle   = require('../middle');


describe("#middle", () => {
  it("returns [] for [1, 2]", () => {
    assert.strictEqual(middle([1, 2]), []);
  });
});