/*
 * Linked list variation of a stack
 *  - Every operation takes constant time in the worst case.
 *  - Uses extra time and space to deal with the links.
 * Last in, first out LIFO
 */

function LinkedListStack () {
  // Keep track of head of list. Return the head on `pop`
  var head

  function Node (x) {
    this.item = x
    this.next
  }

  this.push = x => {
    var oldHead = head
    var newNode = new Node(x)
    newNode.next = oldHead
    head = newNode
  }

  this.pop = () => {
    var x = head.item
    head = head.next
    return x
  }
}

module.exports = LinkedListStack
