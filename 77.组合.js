/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];
  if (k <= 0 || n <= 0) return res;
  let track = [];
  backtrack(n, k, 1, track, res);
  return res;
};

var backtrack = function(n, k, start, track, res) {
  // 到达树的底部
  if (k === track.length) {
      res.push([...track]);
      return;
  }
  // 注意 i 从 start 开始递增
  for (let i = start; i <= n; i++) {
      // 做选择
      track.push(i);
      backtrack(n, k, i + 1, track, res);
      // 撤销选择
      track.pop();
  }
};
// @lc code=end
