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
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.size) {
      return "index invalid : out of scope";
    }

    let currentNode = this.head;
    let count = 0;

    while (count < index) {
      currentNode = currentNode.nextNode;
      count++;
    }
    return currentNode;
  }

  pop() {
    if (this.head === null) {
      console.log("Error : Linked list is already empty");
      return;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }

    const secondLastNode = this.at(this.size - 2);
    if (secondLastNode) {
      secondLastNode.nextNode = null;
      this.tail = secondLastNode;
      this.size--;
    }
    return;
  }

  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let current = this.head;
    let resultString = "";

    while (current !== null) {
      resultString += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    resultString += "null";

    return resultString;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.append("tiger");

console.log(list.toString());
console.log(list.contains("bird"));

list.prepend("bird");

console.log(list.toString());
console.log(list.contains("bird"));
console.log(list.find("crocodile"));
