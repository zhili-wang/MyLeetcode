/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let count = 0; // 记录平衡字符串的数量
  let lCount = 0; // 记录当前子字符串中'L'的数量
  let rCount = 0; // 记录当前子字符串中'R'的数量
  for (let i = 0; i < s.length; i++) {
      if (s[i] === 'L') {
          lCount++;
      } else if (s[i] === 'R') {
          rCount++;
      }
      if (lCount === rCount) {
          count++;
          lCount = 0;
          rCount = 0;
      }
  }
  return count;
};
// @lc code=end

