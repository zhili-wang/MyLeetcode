/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * BST 二叉搜索树
 * 二叉搜索树是一个有序树：
 * 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
 * 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
 * 它的左、右子树也分别为二叉搜索树
 */
/**
 * 迭代法
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  while (root !== null) {
    if (root.val === val) return root;
    if (root?.val > val) root = root?.left;
    if (root?.val < val) root = root?.right;
  }
  return null;
};
// var searchBST = function (root, val) {
//   if (!root) return null;
//   const queue = [root];
//   while (queue?.length) {
//     const node = queue.shift();
//     if (node?.val === val) return node;
//     if (node?.val > val && node.left) queue.push(node.left);
//     if (node?.val < val && node.right) queue.push(node.right);
//   }
//   return null;
// };
/**
 * 递归
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// var searchBST = function (root, val) {
//   if (!root || root.val === val) return root;
//   if (root.val > val) {
//     return searchBST(root?.left, val);
//   }
//   if (root.val < val) {
//     return searchBST(root?.right, val);
//   }
//   return null;
// };
// @lc code=end
