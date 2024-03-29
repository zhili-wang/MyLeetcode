/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
 * 找最大深度那层的最左边节点（前序遍历），最右边就根右左
 * 思路是前序遍历，根→左→右，一层一层遍历
 * 到下一层的第一个叶子节点的时候，更新最大深度和第一个节点的值
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let maxDepth = 0,
    val = null;
  function find(node, curDepth) {
    // 判断叶子节点
    if (node?.left === null && node?.right === null) {
      // 判断是否最大深度, 更新当前最深一层的最左边叶子节点
      if (curDepth > maxDepth) {
        maxDepth = curDepth;
        val = node?.val;
        return;
      }
    }
    node?.left && find(node?.left, curDepth + 1);
    node?.right && find(node?.right, curDepth + 1);
  }
  find(root, 1);
  return val;
};
// @lc code=end
