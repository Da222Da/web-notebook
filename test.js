// Node 类有两个属性：data 表示结点所保存的数据，next_node 表示指向下一结点的链
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// LinkedList 的作用就是一个指针，它指向链表的第一个结点。
class LinkedList {
  constructor(head) {
    this.head = head;
  }
  read(index) {
    let current_node = this.head;
    let current_index = 0;

    while (current_index < index) {
      current_node = current_node.next;
      current_index += 1;

      if (!current_node) {
        return null;
      }
    }

    return current_node.data;
  }
}

// 创建 4 个节点
let node_1 = new Node(1);

let node_2 = new Node(2);
node_1.next = node_2;

let node_3 = new Node("a");
node_2.next = node_3;

let node_4 = new Node(false);
node_3.next = node_4;

// 指定链表的起始位置
let linked_list = new LinkedList(node_1);
console.log("linked_list.read(3)::: ", linked_list.read(3)); // 输出: false
