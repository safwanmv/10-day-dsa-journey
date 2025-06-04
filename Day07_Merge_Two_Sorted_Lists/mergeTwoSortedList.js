var mergeTwoLists = function(list1, list2) {
    let prehead = new ListNode(-1);
    let current = prehead;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next
        }

        current = current.next;
    }

    current.next = list1 !== null ? list1 : list2;
    return prehead.next;;
};