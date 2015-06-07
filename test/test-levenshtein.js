distance = require("../data/levenshtein.js")

var assert = require("assert")

describe("distance", function () {
  it("returns 0 for equal strings", function () {
    assert(0 == distance.levenshtein("hello", "hello"));
  });

  it("returns not zero for not equal strins", function () {
  	assert(0 < distance.levenshtein("hello", "world"));
  })

  it("knows about transpositions", function () {
  	assert(1 == distance.levenshtein("hello", "helol"));
  })

  it("basic cases", function () {
  	assert(1 == distance.levenshtein("hello", "helo"));
  	assert(2 == distance.levenshtein("hello", "hel"));
  	assert(1 == distance.levenshtein("ello", "hello"));
  	assert(1 == distance.levenshtein("hello", "hellu"));
  })
});