// 5. *Sort Stack*:

// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.

export default class SortStack<T> {
  private main: Array<T>;
  private temp: Array<T>;
  constructor() {
    this.main = new Array();
    this.temp = new Array();
  }

  push(value: T): void {
    while (this.main.length && this.main[this.main.length - 1] > value) {
      this.temp.push(this.main.pop() as T);
    }

    this.main.push(value);

    while (this.temp.length) {
      this.main.push(this.temp.pop() as T);
    }
  }

  pop(): T | undefined {
    return this.main.shift();
  }

  peek(): T | undefined {
    return this.main[0];
  }

  isEmpty(): boolean {
    return this.main.length === 0;
  }
}
