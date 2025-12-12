// 2. *Stack Min*: How would you design a stack which,
// in addition to push and pop,
// has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.
//

type ArrayValue<T> = { value: T; minSoFar: T };
export default class StackMin<T> {
  private array: Array<ArrayValue<T> | undefined>;

  constructor() {
    this.array = new Array();
  }

  push(value: T): void {
    if (!this.array.length) {
      this.array[this.array.length] = { value, minSoFar: value };
    } else {
      const minValue = (this.array[this.array.length - 1] as ArrayValue<T>)
        .minSoFar;
      const newMin = minValue < value ? minValue : value;
      this.array[this.array.length] = { value, minSoFar: newMin };
    }
  }

  pop(): T | undefined {
    if (this.array.length) {
      const lastElement = this.array[this.array.length - 1] as ArrayValue<T>;
      this.array[this.array.length - 1] = undefined;
      this.array.length--;
      return lastElement.value;
    }
    return;
  }

  min(): T | undefined {
    if (this.array.length) {
      return this.array[this.array.length - 1]?.minSoFar;
    }
    return;
  }
}
