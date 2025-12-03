// 2.  *Return Kth to Last*:

// Implement an algorithm to find the kth to last element of a singly linked list.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function kthToLast<T>(
  head: Node<T>,
  k: number
): Node<T> | undefined {
  // Lo primero que hice fue recorrer la lista para obtener la longitud
  // Luego contar hasta que de k para devolver el nodo.
  // Elimine getLen, pero lo que hacia era recorred toda la lista y
  // devolver la cantidad de nodos que conto.

  // let p = new LinkedList(head);
  // let listLen = p.getLen();
  // let dummy = p.head;
  // if (k < 1 || listLen < k) return;
  // let count = 0;

  // while (dummy) {
  //   if (listLen - count === k) {
  //     return dummy;
  //   }
  //   count++;
  //   dummy = dummy.next;
  // }
  // return undefined;

  // Un poco de ayuda
  let p = new LinkedList(head);
  let slow = p.head;
  let fast = p.head;

  while (k > 0) {
    if (!fast) return;
    fast = fast.next;
    k--;
  }

  while (fast) {
    fast = fast?.next;
    slow = slow?.next;
  }

  return slow;
}
