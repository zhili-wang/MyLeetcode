/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (!root) return null;
  // 大于最大边界，返回左子树递归
  if (root.val > high) {
    return trimBST(root.left, low, high);
  }
  // 小于最小边界，返回右子树递归
  if (root.val < low) {
    return trimBST(root.right, low, high);
  }
  // 当前节点在边界范围内，递归校验左右子树
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};
// @lc code=end
