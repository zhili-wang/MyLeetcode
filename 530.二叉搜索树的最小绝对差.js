/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
 * 思路
 * 二叉搜索树是有序的，把它想象成一个you'xu1递增数组，在每两个节点之间求最小绝对差就行
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let min = Infinity,
    pre = null;
  (function getMinNumber(node) {
    if (!node) return;
    // 中序遍历 先递归到最底层左叶子节点
    getMinNumber(node?.left);
    if (pre) min = Math.min(min, node.val - pre.val);
    // 记录前一个节点
    pre = node;
    getMinNumber(node?.right);
  })(root);
  return min;
};
// @lc code=end
