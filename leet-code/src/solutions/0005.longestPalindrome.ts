/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * “回文串”是一个正读和反读都一样的字符串，比如“level”或者“noon”等等就是回文串。
 *
 *
 * 示例 1：
 *
 * 输入：s = "babadaaaddcb"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 示例 2：
 *
 * 输入：s = "cebbed"
 * 输出："bb"
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/longest-palindromic-substring
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param s
 */
export default function longestPalindrome(s: string): string {
  let maxFrom = 0, maxTo = 0;
  for (let i = 0; i < s.length; i++) {
    // 单字符作为中心点
    for (let j = 0; j < s.length; j++) {
      let from = i - j;
      let to = i + j;
      if (s[from] !== s[to]) {
        break;
      }
      if (to - from > maxTo - maxFrom) {
        maxFrom = from;
        maxTo = to;
      }
    }
    // 双字符作为中心点
    if (s[i] === s[i + 1]) {
      for (let j = 0; j < s.length; j++) {
        let from = i - j;
        let to = i + 1 + j;
        if (s[from] !== s[to]) {
          break;
        }
        if (to - from > maxTo - maxFrom) {
          maxFrom = from;
          maxTo = to;
        }
      }
    }
  }
  return s.substring(maxFrom, maxTo + 1);
};
