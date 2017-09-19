const twoSum = function(nums, target) {
    for (let i=0; i < nums.length; i++) {
        for (let j=0; j < nums.length; j++) {
            if (j !== i) {
                if (nums[i] + nums[j] === target) {
                    return [nums[i], nums[j]]
                }
            }
        }
    }
    return "no solution"
};

module.exports = twoSum