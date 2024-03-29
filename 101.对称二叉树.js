/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  if (root == null) return true;
  function compare(left, right) {
    if (left == null && right == null) return true;
    else if (left?.val != right?.val) return false;
    const outside = compare(left?.left, right?.right);
    const inside = compare(left?.right, right?.left);
    return outside && inside;
  }
  return compare(root?.left, root?.right);
};
// @lc code=end
