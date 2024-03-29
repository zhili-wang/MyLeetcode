/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 递归法
  if(!root) return 0;
  let depth = 0;
  for (let node of root.children) {
    depth = Math.max(maxDepth(node), depth);
  }
  return depth + 1;
  // 迭代法
  // if (!root) return 0;
  // let count = 0;
  // let queue = [root];
  // while (queue.length) {
  //   let size = queue.length;
  //   count++;
  //   while (size--) {
  //     let node = queue.shift();
  //     for(let child of node.children) {
  //         queue.push(child)
  //     }
  //   }
  // }
  // return count;
};
// @lc code=end

