/**
 * Two Sum
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */
//bruteforce
const nums = [2, 7, 11, 15];
const target = 9;
function TwoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let sum = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === sum) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}
const value = TwoSum(nums, target);
//optimized

const twoSum = (nums, target) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const secondElement = target - nums[i];
    if (secondElement in map) {
      return [map[secondElement], i];
    }
    map[nums[i]] = i;
  }
  return [-1, -1];
};
