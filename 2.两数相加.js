/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p1 = l1,
    p2 = l2;
  let headNode = new ListNode(-1);
  let p = headNode;
  let carry = 0;
  while (p1 !== null || p2 !== null || carry > 0) {
    if (p1 !== null) {
        carry += p1.val;
      p1 = p1.next;
    }
    if (p2 !== null) {
        carry += p2.val;
      p2 = p2.next;
    }
    p.next = new ListNode(carry % 10);
    p = p.next;
    carry = Math.floor(carry / 10);
  }
  return headNode.next;
};
// @lc code=end
