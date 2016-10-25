/*
 * Linked list variation of a queue
 * First in, first out FIFO
 */

function LinkedListStack () {
  // Keep track of head AND tail of list. Return the tail on `dequeue`
  var head
  var tail

  function Node (x) {
    this.item = x
    this.next
  }

  const isEmpty = () => head == null

  // Insert at end of linked list
  this.enqueue = x => {
    var oldTail = tail
    var newNode = new Node(x)
    tail = newNode
    if (isEmpty()) {
      head = tail
    } else {
      oldTail.next = tail
    }
  }

  // Remove from front of linked list
  this.dequeue = () => {
    var x = head.item
    head = head.next
    if (isEmpty()) {
      tail = null
    }
    return x
  }
}

module.exports = LinkedListStack
