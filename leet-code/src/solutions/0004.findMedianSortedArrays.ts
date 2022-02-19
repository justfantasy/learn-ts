/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组nums1 和nums2。请你找出并返回这两个正序数组的 中位数 。
 *
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 *
 *
 * 示例 1：
 *
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 * 示例 2：
 *
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 *
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param nums1
 * @param nums2
 */
export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // 合并排序
  const arr = [...nums1, ...nums2].sort((v1, v2) => v1 - v2);

  if (arr.length === 0) {
    return 0;
  }

  // 偶数个，取中间两个值的平均值
  if (arr.length % 2 == 0) {
    const mid = arr.length / 2;
    return (arr[mid - 1]  + arr[mid]) / 2;
  }

  // 奇数个取中间值
  return arr[(arr.length - 1) / 2];
};