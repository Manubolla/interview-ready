// 4. *Queue via Stacks*:

// Implement a MyQueue class which implements a queue using two stacks.

export default class MyQueue<T> {
  private stackIn: Array<T>;
  private stackOut: Array<T>;
  constructor() {
    this.stackIn = new Array();
    this.stackOut = new Array();
  }

  enqueue(value: T): void {
    this.stackIn.push(value);
  }

  dequeue(): T | undefined {
    if (!this.stackOut.length) {
      while (this.stackIn.length > 0) {
        const lastInElement = this.stackIn.pop();
        if (lastInElement) this.stackOut.push(lastInElement);
      }
    }
    return this.stackOut.pop();
  }
  peek(): T | undefined {
    if (!this.stackOut.length) {
      while (this.stackIn.length > 0) {
        const lastInElement = this.stackIn.pop();
        if (lastInElement) this.stackOut.push(lastInElement);
      }
    }
    return this.stackOut[this.stackOut.length - 1];
  }

  isEmpty(): boolean {
    return this.stackIn.length === 0 && this.stackOut.length === 0;
  }
}
