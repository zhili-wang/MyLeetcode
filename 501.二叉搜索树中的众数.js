/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let res = [],
    pre = null,
    count = 0,
    maxCount = 1;
  function recursion(node) {
    if (!node) return;
    recursion(node.left);
    if (node.val === pre?.val) {
      count++; // 出现次数+1
    } else {
      count = 1; // 出现新节点，重置为1
    }
    pre = node;
    if (count === maxCount) {
      res.push(node.val);
    }
    // 当前次数大于最大出现次数，更新最大次数和结果
    if (count > maxCount) {
      maxCount = count;
      res = [node.val];
    }
    recursion(node.right);
  }
  recursion(root);
  return res;
};
// @lc code=end
