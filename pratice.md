# Complete Data Structures Guide

## Core JavaScript Concepts

### Classes, Constructors, and `this`
- **Class**: Blueprint for creating objects
  ```javascript
  class Example {
    constructor(data) {     // Sets up new object
      this.data = data;     // 'this' refers to current object
    }
  }
  ```

### Basic Data Types
```javascript
const names = ["Alice", "Bob", "Carol"];  // Array for examples
```

## 1. Array
```javascript
// Why: Ordered data with fast access by position
const arr = [];
arr.push("Alice");    // Add to end - Why: Maintains order
arr.pop();           // Remove from end - Why: LIFO pattern
console.log(arr[0]); // Direct access - Why: O(1) speed
```

## 2. Linked List
```javascript
class Node {
  // Why separate Node class: Encapsulates data + pointer
  constructor(data) {
    this.data = data;    // Store value
    this.next = null;    // Why null: New nodes aren't connected
  }
}

class LinkedList {
  constructor() {
    this.head = null;    // Why track head: Entry point to list
  }

  add(data) {
    const node = new Node(data);
    // Why this order: Maintain list integrity
    node.next = this.head;   // Connect new node
    this.head = node;        // Update head
  }
}

/* Why use LinkedList:
- Dynamic size
- Fast insertion/deletion
- No shifting elements
*/
```

## 3. Tree
```javascript
class TreeNode {
  constructor(value) {
    this.value = value;      // Current node's data
    this.children = [];      // Why array: Multiple children
  }
  
  addChild(value) {
    // Why new TreeNode: Maintain tree structure
    this.children.push(new TreeNode(value));
  }
}

/* Why use Tree:
- Hierarchical data
- Natural parent-child relationships
- Efficient searching with structure
*/
```

## 4. Binary Search Tree
```javascript
class BST {
  constructor(value) {
    this.value = value;
    // Why separate left/right: Binary property
    this.left = null;      // For smaller values
    this.right = null;     // For larger values
  }

  insert(value) {
    // Why compare: Maintains BST property
    if (value < this.value) {
      if (!this.left) this.left = new BST(value);
      else this.left.insert(value);  // Why recursive: Tree nature
    } else {
      if (!this.right) this.right = new BST(value);
      else this.right.insert(value);
    }
  }
}

/* Why use BST:
- O(log n) search
- Maintains sorted order
- Efficient insertion/deletion
*/
```

## 5. Heap (Min-Heap)
```javascript
class MinHeap {
  constructor() {
    // Why array: Complete binary tree property
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      // Why this formula: Tree level calculation
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[parent] <= this.heap[index]) break;
      // Why swap: Maintain heap property
      [this.heap[parent], this.heap[index]] = 
        [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }
}

/* Why use Heap:
- Priority queues
- Guaranteed O(1) access to min/max
- O(log n) insertions
*/
```

## 6. Hash Table
```javascript
// Why Map: Built-in hash table implementation
const hashTable = new Map();

// Why key-value: Direct access pattern
hashTable.set("key", "value");    
console.log(hashTable.get("key")); 

/* Why use Hash Table:
- O(1) lookups
- Key-value associations
- Duplicate prevention
*/
```

## 7. Stack
```javascript
// Why array: Already has LIFO methods
const stack = [];
stack.push("item");    // Add to top
stack.pop();          // Remove from top

/* Why use Stack:
- Function calls
- Undo/redo
- Expression evaluation
*/
```

## 8. Queue
```javascript
// Why array: Has required FIFO methods
const queue = [];
queue.push("item");   // Why end: FIFO order
queue.shift();        // Why front: FIFO order

/* Why use Queue:
- Task scheduling
- Resource pools
- Breadth-first search
*/
```

## 9. Graph

```

## Implementation Best Practices

1. **Initialization**
   - Always initialize in constructor
   - Set default values
   - Handle edge cases

2. **Error Handling**
   - Check for null/undefined
   - Validate inputs
   - Handle edge cases

3. **Method Organization**
   - Group related operations
   - Follow single responsibility
   - Use clear naming

4. **Performance Considerations**
   - Choose right data structure
   - Consider time complexity
   - Monitor space usage

## Common Operations Complexity

Structure | Access | Search | Insert | Delete
----------|---------|---------|---------|--------
Array | O(1) | O(n) | O(1)* | O(1)*
Linked List | O(n) | O(n) | O(1) | O(1)
BST | O(log n) | O(log n) | O(log n) | O(log n)
Heap | O(1) | O(n) | O(log n) | O(log n)
Hash Table | O(1) | O(1) | O(1) | O(1)

*At end. O(n) if not at end.