/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param s
 */
export default function lengthOfLongestSubstring(s: string): number {
  let arr: string[] = [], max = 0;

  [...s].forEach((item: string) => {
    if (arr.includes(item)) {
      arr = arr.slice(arr.findIndex((val) => val === item) + 1);
    }
    arr = [...arr, item];
    max = arr.length > max ? arr.length : max;
  });

  return max;
};