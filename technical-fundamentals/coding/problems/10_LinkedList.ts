// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;

  constructor(head?: Node<T>) {
    this.head = head;
  }

  push(value: T) {
    const node: Node<T> = { value, next: undefined };
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    } else {
      if (this.tail) {
        this.tail.next = node;
        this.tail = node;
      }
      this.length++;
    }
  }
  filter(fn: (node: Node<T>) => boolean) {
    let dummy: Node<T> = { value: undefined as T, next: this.head };
    let p = dummy;
    while (p && p.next) {
      if (!fn(p.next)) {
        p.next = p.next.next;
      } else {
        p = p.next;
      }
    }
    this.head = dummy.next;
    return this.head;
  }
  visit() {}
  remove(value: T) {
    let dummy: Node<T> = { value: undefined as T, next: this.head };
    let pointer = dummy;

    while (pointer && pointer.next) {
      if (pointer.next.value === value) {
        pointer.next = pointer.next.next;
        break;
      } else {
        pointer = pointer.next;
      }
    }
    this.head = dummy.next;
    return this.head;
  }
  merge() {}
  print(value: T) {
    let p = this.head;

    while (p) {
      if (p.value === value) {
        console.log(value);
      }
      p = p.next;
    }
    return this.head;
  }
  // extra

  //find(): Node<T> {}
  //get(index: number): Node<T> {}
  //iterator(): LinkedListIterator {}
  length: number;
}

const list = new LinkedList();
