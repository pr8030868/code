//You are given two none-empty linked lists representing two non-negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.
//You may assume the two numbers do not contain any leading zero,except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    function getAllValue(node) {
        let value = node.val + '';
        if(node.next != null) {
            return value += getAllValue(node.next)
        }else {
            return value
        }
    }
    function reverseStr(str) {
        let arr = str.split('');
        arr.reverse();
        return arr.join('')
    }
    
    function add_string(add1, add2) {
        if(add1.length > 16 || add2.length > 16) {
              let add1_arr = add1.split('').reverse();
        let add2_arr = add2.split('').reverse();
        let all = 0
        let limit = 0;
        if(add1_arr.length >= add2_arr.length) {
            all = add1_arr.length;
            limit = add2_arr.length
        }else {
            all = add2_arr.length;
            limit = add1_arr.length
        }
        let result_arr = [];
        for(let i = 0; i < all; i++) {
            let anouce_ = 0;
            if(result_arr[i] == undefined) {
                result_arr[i] = 0;
            }else {
                anouce_ = result_arr[i]
            }

            if(result_arr[i+1] ==undefined && i < limit) {
                result_arr[i+1] = 0;
            }
            if(add1_arr[i] == undefined) {
                add1_arr[i] = 0;
            }
            if(add2_arr[i] == undefined) {
                add2_arr[i] = 0;
            }
      
            let res = +add1_arr[i] + +add2_arr[i] + anouce_;
            if(res >= 10) {
                console.log('--->', result_arr[i])
                result_arr[i] = res - 10;//计算结果
                result_arr[i+1] = 1;
            }else {
                result_arr[i] = res;
            }
        }
        return result_arr.reverse().join('');
        }else {
            return +add1 + +add2
        }
    }
    
    
    let add_1 = reverseStr(getAllValue(l1));
    let add_2 = reverseStr(getAllValue(l2));
    let result = add_string(add_1, add_2);
    result += '';
    let result_arr = result.split('').reverse();
    let node_res = new ListNode(+result_arr[0]);
    
    function makeNode(node, result_arr, i) {
        node.next = new ListNode(+result_arr[i]);
        i++;
        if(i <= result_arr.length) {
            
            return makeNode(node.next, result_arr, i);
        }else {
            node.next = null
            return ''
        }
    }
    makeNode(node_res, result_arr, 1)
    return node_res
};