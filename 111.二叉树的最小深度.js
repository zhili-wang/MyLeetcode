/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * 递归法 求最小深度其实就是求最小高度 用自底向上的方法
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth1 = function (root) {
  if (!root) return 0;
  // 子节点
  if (!root?.left && !root?.right) return 1;
  // 没有左孩子或者右孩子
  if (!root?.left) return 1 + minDepth(root.right);
  if (!root?.right) return 1 + minDepth(root.left);
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
/**
 * 迭代法 求最小深度比较简单 找到第一个叶子结点 直接返回当前深度即可
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  const queue = [root]
  let depth = 0
  while(true) {
    depth++
    // 获取当前层的节点个数
    let size = queue.length
    while(size--) {
      // 取出队列中第一个节点
      const node = queue.shift();
      // 遇到第一个叶子节点 当前节点的深度就是最小深度
      if(!node?.left && !node?.right) return depth;
      if(node?.left) queue.push(node.left)
      if(node?.right) queue.push(node.right)
    }
  }
};
// @lc code=end
