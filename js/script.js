// Node class - represents a single node in the linked list
class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

// LinkedList class - represents the full linked list
class LinkedList {
  constructor() {
    this.head = null;
  }
}

// Export the classes if using modules
// export { LinkedList, Node };
