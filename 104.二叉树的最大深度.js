/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * 递归法
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth1 = function (root) {
  if (root == null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
/**
 * 层级遍历法
 * @param {TreeNode} root
 * @returns {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let count = 0;
  let queue = [root];
  while (queue.length) {
    let size = queue.length;
    count++;
    while (size--) {
      let node = queue.shift();
      node?.left && queue.push(node.left);
      node?.right && queue.push(node.right);
    }
  }
  return count;
};
// @lc code=end
