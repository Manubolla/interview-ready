// 1. *Three in One*: Describe how you could use a single array to implement three stacks.

export default class ThreeStacks<T> {
  private array: (T | undefined)[];
  stackCapacity: number;

  constructor(arrayLength: number) {
    this.array = new Array(arrayLength);
    this.stackCapacity = Math.floor(arrayLength / 3); // 1
  }

  push(stackNum: number, value: T): void {
    const maxIndex = this.stackCapacity * (stackNum + 1) - 1;
    const minIndex = maxIndex - this.stackCapacity + 1;
    for (let i = minIndex; i <= maxIndex; i++) {
      if (this.array[i] === undefined) {
        this.array[i] = value;
        return;
      }
    }
  }

  pop(stackNum: number): T | undefined {
    const maxIndex = this.stackCapacity * (stackNum + 1) - 1;
    const minIndex = maxIndex - this.stackCapacity + 1;

    for (let i = maxIndex; i >= minIndex; i--) {
      const el = this.array[i];

      if (el === undefined) continue;
      else {
        this.array[i] = undefined;
        return el;
      }
    }
    return;
  }

  peek(stackNum: number): T | undefined {
    const maxIndex = this.stackCapacity * (stackNum + 1) - 1;
    const minIndex = maxIndex - this.stackCapacity + 1;

    for (let i = maxIndex; i >= minIndex; i--) {
      const el = this.array[i];

      if (el === undefined) continue;
      else {
        return el;
      }
    }
    return;
  }
}
