/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * 加法递归
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// var hasPathSum = function (root, targetSum) {
//   if (root === null) return false;
//   let isEquality = false;
//   function recursion(root, sum = 0) {
//     let newSum = sum + root.val;
//     // 判断叶子节点
//     if (root.left === null && root?.right === null) {
//       if (newSum === targetSum) {
//         isEquality = true;
//       }
//     }
//     root.left && recursion(root.left, newSum);
//     root.right && recursion(root.right, newSum);
//   }
//   recursion(root)
//   return isEquality
// };
/**
 * 减法
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false;
  function traversal(node, num) {
    // 减掉当前节点值
    num -= node.val;
    if (!node.left && !node?.right) {
      // 等于0代表存在该路径
      return num === 0 ? true : false;
    }
    // 前序遍历 根左右
    if (node.left && traversal(node.left, num)) return true;
    if (node.right && traversal(node.right, num)) return true;
    // 前面的都没返回代表没有该路径
    return false;
  }
  return traversal(root, targetSum);
};
// @lc code=end
