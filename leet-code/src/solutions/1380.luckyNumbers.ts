/**
 * 给你一个 m * n 的矩阵，矩阵中的数字 各不相同 。请你按 任意 顺序返回矩阵中的所有幸运数。
 *
 * 幸运数是指矩阵中满足同时下列两个条件的元素：
 *
 * 在同一行的所有元素中最小
 * 在同一列的所有元素中最大
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param matrix
 */
export default function luckyNumbers(matrix: number[][]): number[] {
  let luckyNumbers: number[] = [];
  let length = matrix.length;
  let exist: number[] = [];
  for (let i = 0; i < length; i++) {
    // 获取当前行的最小值
    let min = Math.min(...matrix[i]);

    // 最小值所在的列
    let minInx = matrix[i].findIndex((ele) => {
      return ele === min;
    });

    // 如果当前列已存在
    if (exist.includes(minInx)) {
      continue;
    }

    // 是否是当前列中的最大值
    if (!matrix.some((ele) => ele[minInx] > min)) {
      luckyNumbers = [min, ...luckyNumbers];
      exist = [minInx, ...exist];
    }
  }
  return luckyNumbers;
}
