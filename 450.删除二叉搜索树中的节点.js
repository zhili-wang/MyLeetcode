/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // 1: 该节点是叶子节点，即左右孩子为空
    if (!root.left && !root.right) {
      return null;
    }
    // 2: 只有一个孩子节点
    if (!root.left || !root.right) {
      return root.left ?? root.right;
    }
    // 3: 左右孩子节点都存在
    const minNode = getMinNode(root.right)
    minNode.left = root.left
    root = root.right;
  }
  return root;
};
function getMinNode(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}
// @lc code=end
