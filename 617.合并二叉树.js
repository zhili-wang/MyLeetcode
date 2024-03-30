/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;
  const root = new TreeNode((root1?.val ?? 0) + (root2?.val ?? 0));
  // 注意点，这里传参要判空，否则会报错，但是用可选链就没问题
  root.left = root1?.left || root2?.left ? mergeTrees(root1?.left, root2?.left) : null;
  root.right = root1?.right || root2?.right ? mergeTrees(root1?.right, root2?.right) : null;
  return root;
};
// @lc code=end
