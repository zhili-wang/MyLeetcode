/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root, res = []) {
  // 递归法
  // (function traversal(root) {
  //   if (root === null) return;
  //   traversal(root.left)
  //   res.push(root.val)
  //   traversal(root.right)
  // })(root)
  // 迭代法
  // 入栈 左 -> 右
  // 出栈 左 -> 中 -> 右
  if (!root) return res;
  const stack = [root];
  while (stack.length) {
    const cur = stack.pop();
    res.push(cur.val);
    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);
  }
  return res;
};
// @lc code=end
