/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
/**
 * 注意点：使用中序遍历，从最底下的左节点开始
 */
var isValidBST = function (root) {
  // 记录上一个节点
  let pre = null;
  function inOrder(root) {
    if (root === null) return true;
    let left = inOrder(root.left);
    if (pre !== null && pre >= root.val) return false;
    pre = root;
    let right = inOrder(root.right);
    return left && right;
  }
  return inOrder(root);
};
// @lc code=end
