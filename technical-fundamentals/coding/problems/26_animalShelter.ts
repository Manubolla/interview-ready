// 6. *Animal Shelter*:

import { LinkedList, Node } from "./10_LinkedList";

// An animal shelter, which holds only dogs and cats, operates on a strictly
// "first in, first out" basis. People must adopt either the "oldest"
// (based on arrival time) of all animals at the shelter,
// or they can select whether they would prefer a dog or a cat
// (and will receive the oldest animal of that type).
// They cannot select which specific animal they would like.
// Create the data structures to maintain this system and implement operations
// such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
// You may use the built-in LinkedList data structure.

export type AnimalType = "dog" | "cat";

export class Animal {
  type: AnimalType;
  constructor(type: AnimalType) {
    this.type = type;
  }
}

export default class AnimalShelter {
  private stack: LinkedList<Animal>;

  constructor() {
    this.stack = new LinkedList();
  }

  enqueue(type: AnimalType): void {
    const animal = new Animal(type);
    this.stack.push(animal);
  }

  dequeueAny(): Animal | undefined {
    if (!this.stack.head) return;
    let cur = this.stack.head;
    this.stack.head = this.stack.head.next;
    return cur.value;
  }

  dequeueDog(): Animal | undefined {
    if (!this.stack.head) return;

    const dummy: Node<Animal> = {
      value: undefined as any,
      next: this.stack.head,
    };

    let pointer = dummy;

    while (pointer.next) {
      const nextNode = pointer.next;

      if (nextNode.value.type === "dog") {
        if (pointer === dummy) {
          this.stack.head = nextNode.next;
        } else {
          pointer.next = nextNode.next;
        }
        return nextNode.value;
      }

      pointer = pointer.next;
    }

    return;
  }

  dequeueCat(): Animal | undefined {
    if (!this.stack.head) return;

    const dummy: Node<Animal> = {
      value: undefined as any,
      next: this.stack.head,
    };

    let pointer = dummy;

    while (pointer.next) {
      const nextNode = pointer.next;

      if (nextNode.value.type === "cat") {
        if (pointer === dummy) {
          this.stack.head = nextNode.next;
        } else {
          pointer.next = nextNode.next;
        }
        return nextNode.value;
      }

      pointer = pointer.next;
    }

    return;
  }
}
