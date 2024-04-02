/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  let insertNode = new TreeNode(val);
  if (!root) return insertNode;
  let parent = new TreeNode(0);
  function recursion(node) {
    if (!node) {
      if (parent?.val > val) {
        parent.left = insertNode;
      } else {
        parent.right = insertNode;
      }
      return;
    }
    parent = node;
    recursion(node?.val > val ? node.left : node.right);
  }
  recursion(root);
  return root;
};
// @lc code=end
