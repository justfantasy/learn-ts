/**
 * 给你两个非空 的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
 *
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 *
 * 你可以假设除了数字 0 之外，这两个数都不会以 0开头。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/add-two-numbers
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null) {
    this.val = val;
    this.next = next;
  }
}

export default function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  // 定义首节点
  let emptyNode = new ListNode(0, null);
  let list1 = new ListNode(0, l1);
  let list2 = new ListNode(0, l2);
  let ret = new ListNode(0, null);
  let tmp = ret;   // 中转值，这样ret的内存地址并不会改变，go语言也是这么实现的，后面修改tmp，一直修改的是tmp的内存地址，ret的内存地址并没有修改
  let carry = 0;

  while (list1.next !== null || list2.next !== null || carry > 0) {
    list1 = list1.next === null ? emptyNode : list1.next;
    list2 = list2.next === null ? emptyNode : list2.next;

    let sum = list1.val + list2.val + carry;
    carry = Math.floor(sum / 10);
    tmp.next = new ListNode(sum%10, null);
    tmp = tmp.next;
  }

  return ret.next;
};
