class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    const current = this.head;
    const newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  unShift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.head = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    let counter = 0;
    const current = this.head;

    while (counter !== index) {
      counter++;
      current = current.next;
    }

    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return foundNode;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      return !!this.unShift(val);
    }

    if (index === this.length) {
      return !!this.push(val);
    }

    const prevNode = this.get(index - 1);
    const newNode = new Node(val);

    const temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }
    const prevNode = this.get(index -1);
    const removed = prevNode.next;
    prevNode.next = removed.next;

    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}



const list = new SinglyLinkedList()

