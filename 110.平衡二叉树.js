/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  /**
   * 获取二叉树的深度
   * 改造一下，左右子节点高度相差超过1，返回-1，即非平衡二叉树
   * @param {*} node
   * @returns
   */
  function getDepth(node) {
    if (!node) return 0;
    let leftDepth = getDepth(node?.left);
    if (leftDepth === -1) return -1;
    let rightDepth = getDepth(node?.right);
    if (rightDepth === -1) return -1;
    // 左右子树高度相差
    if (Math.abs(leftDepth - rightDepth) > 1) return -1;
    return 1 + Math.max(leftDepth, rightDepth);
  }
  return getDepth(root) !== -1;
};
// @lc code=end
