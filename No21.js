
//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let ans_list = new ListNode;
    let head_list = ans_list;
    
    while(list1 !== null || list2 !== null)
    {
        if(list1 !== null && list2 !== null)
        {
            if(list1.val < list2.val)
            {
                ans_list.next = list1;
                ans_list = ans_list.next;
                list1 = list1.next;
            }
            else
            {
                ans_list.next = list2;
                ans_list = ans_list.next;
                list2 = list2.next;
            }
        }
        else if(list1 === null)
        {
            ans_list.next = list2;
            ans_list = ans_list.next;
            list2 = list2.next;
        }
        else if(list2 === null)
        {
            ans_list.next = list1;
            ans_list = ans_list.next;
            list1 = list1.next;
        }
        console.log(ans_list.val);
    }
    return head_list.next;
};


//debug
let l1 = new ListNode(1);
let tl1 = l1;
l1.next = new ListNode(2);
l1 = l1.next;
l1.next = new ListNode(4);

let l2 = new ListNode(1);
let tl2 = l2;
l2.next = new ListNode(3);
l2 = l2.next;
l2.next = new ListNode(4);

console.log("start");
console.log(mergeTwoLists(tl1, tl2));
console.log("end");
