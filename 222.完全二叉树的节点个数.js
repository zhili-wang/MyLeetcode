/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * 递归法
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes1 = function (root) {
  if (!root) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
};
/**
 * 迭代法
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes2 = function (root) {
  if (!root) return 0;
  let queue = [root];
  let count = 0;
  while (queue.length) {
    let size = queue.length;
    count += size;
    while (size--) {
      let node = queue.shift();
      node?.left && queue.push(node.left);
      node?.right && queue.push(node.right);
    }
  }
  return count;
};

/**
 * 计算满二叉树节点数
 * @param {*} root
 * @returns
 */
var countNodes = function(root) {
  //利用完全二叉树的特点
  if(root === null) {
      return 0;
  }
  let left = root.left;
  let right = root.right;
  let leftDepth = 0, rightDepth = 0;
  while(left) {
      left = left.left;
      leftDepth++;
  }
  while(right) {
      right = right.right;
      rightDepth++;
  }
  if(leftDepth == rightDepth) {
      return Math.pow(2, leftDepth+1) - 1;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
};
// @lc code=end
