/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length) return null;
  // 根节点为后序遍历数组最后一项
  const rootVal = postorder?.pop();
  // 查找根节点在中序数组的下标
  const rootIndex = inorder.indexOf(rootVal);
  // 创建当前节点
  const root = new TreeNode(rootVal);
  /**
   * 注意点：
   * 1.中序不能包含根节点
   * 2.用slice，不会改变原数组
   * 3.左节点传中序和后序的左孩子部分，右节点传中序和后序的右孩子部分
   */
  root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex));
  root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex));
  return root;
};
// @lc code=end
