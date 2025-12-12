// 3. *Stack of Plates*:

// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave
// identically to a single stack (that is, pop() should return the same values as it would if
// there were just a single stack).

// FOLLOW UP: Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

export default class StackOfPlates<T> {
  private array: Array<Array<T>>;
  maxLength: number;

  constructor(capacity: number) {
    this.array = new Array();
    this.maxLength = capacity;
  }

  push(value: T): void {
    if (!this.array.length) {
      this.array.push([value]);
    } else {
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i].length >= this.maxLength) continue;
        else {
          this.array[i].push(value);
          return;
        }
      }
      this.array.push([value]);
    }
  }

  pop(): T | undefined {
    if (!this.array.length) return;

    const lastStack = this.array[this.array.length - 1] as Array<T>;
    const lastElement = lastStack[lastStack.length - 1];

    if (lastStack.length === 1) {
      this.array.length--;
    } else {
      lastStack.length--;
    }

    return lastElement;
  }
}
