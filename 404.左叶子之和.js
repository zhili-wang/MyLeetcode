/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
// /**
//  * 递归法
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var sumOfLeftLeaves = function (root) {
//   if (root === null) return 0;
//   let thisVal = 0;
//   // 确定叶子节点
//   if (root.left && root.left.left === null && root.left.right === null) {
//     thisVal = root.left.val;
//   }
//   // 递归
//   return thisVal + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
// };
/**
 * 迭代法
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (root === null) return 0;
  let sum = 0;
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (node.left) {
      queue.push(node.left);
      if (node.left.left === null && node.left.right === null) {
        sum += node.left.val;
      }
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return sum;
};
// @lc code=end
