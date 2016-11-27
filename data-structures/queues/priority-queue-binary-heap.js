/**
 * Binary Heap Priority Queue
 *
 * A priority queue built w/ a binary heap data structure
 */
const BinaryHeap = require('../trees/binary-heap')
const { swap } = require('../../utils')

function PQDelMax () {
  let heap = new BinaryHeap()

  function insert (x) {
    heap.insert(x)
    return heap.heap
  }

  function delMax () {
    let n = heap.size
    // Swap the max key with the smallest key
    heap.heap = swap(heap.heap, 1, n)
    // Delete the max key which is now in the last position
    heap.heap.splice(n, 1)
    // Sink the swapped small key down into position
    heap.sink(1)
    return heap.heap
  }

  return {
    delMax, insert
  }
}


var bh = new PQDelMax(6)
console.log(bh.insert(1))
console.log(bh.insert(2))
console.log(bh.insert(6))
console.log(bh.insert(4))
bh.insert(1)
console.log(bh.insert(9))
console.log(bh.delMax())
console.log(bh.insert(9))
console.log(bh.insert(3))
bh.delMax()
bh.delMax()
bh.delMax()
