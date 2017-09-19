var twoSum = require("./solution") 
var assert = require('assert');

describe("twoSum", function() {
	it("should return [2,3]", function() {
		assert.deepEqual(twoSum([1,2,3], 5), [2,3])
	})
	it("should return [5,11]", function() {
		assert.deepEqual(twoSum([99,12,32,11,1,4,11], 16), [12,4])
	})
	it("should return 'no solution'", function() {
		assert.deepEqual(twoSum([12], 3), "no solution" )
	})
}) 