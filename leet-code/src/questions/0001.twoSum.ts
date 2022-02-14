/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标
 * @param nums
 * @param target
 */
export default function twoSum(nums: number[], target: number): number[] {
  let diffMap = new Map();

  for (const [index, item] of nums.entries()) {
    let diff = target - item;
    if (diffMap.has(diff)) {
      return [diffMap.get(diff), index];
    }
    diffMap.set(item, index);
  }

  return [];
}
