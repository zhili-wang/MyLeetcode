/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root, res = []) {
  // 递归法
  // (function traversal(root) {
  //   if (root === null) return;
  //   res.push(root.val);
  //   traversal(root.left);
  //   traversal(root.right);
  // })(root);

  // 迭代法
  // 入栈 右 -> 左
  // 出栈 中 -> 左 -> 右
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
