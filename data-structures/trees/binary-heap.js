var { swap } = require('../../utils')
/**
 * Binary Heap
 *
 * An array representation (TODO: Use a real tree) of a heap-ordered complete binary tree
 *
 * Heap Ordered:
 *   - Keys in Nodes
 *   - Parent's key no smaller then children's keys
 *
 * 1-indexed
 *
 * 1  2  3  4  5  6  7
 * T  S  R  P  N  O  A
 *
 *        T
 *      /  \
 *     S    R
 *    /\    /\
 *   P N   O  A
 *
 */
function BinaryHeap () {
  // Start at index 1
  this.heap = new Array(1)
}

BinaryHeap.prototype = {

  insert: function (x) {
    this.heap.push(x)
    this.swim(this.size)
    return this.heap
  },

  get size () {
    return this.heap.length - 1
  },

  /**
   * Check that a node's parent is bigger. If it is smaller, exchange the two
   * and continue checking up the tree
   */
  swim: function (k) {
    // You can easily find a node's parent w/ `k / 2'
    while (k > 1 && this.heap[Math.floor(k / 2)] < this.heap[k]) {
      let parentKey = Math.floor(k / 2)
      this.heap = swap(this.heap, k, parentKey)
      k = parentKey
    }
  },

  /**
   * Check that a parent's children are smaller. If parent is smaller than child
   * exchange and continue down the tree
   */
  sink: function (k) {
    let n = this.size
    // Children nodes can be found at 2k AND 2k+1
    while (2 * k <= n) {
      let j = 2 * k
      // Find the larger of the two child nodes
      if (j < n && this.heap[j] < this.heap[j + 1]) j++
      // Parent is greater, no need to keep checking
      if (this.heap[k] > this.heap[j]) break
      this.heap = swap(this.heap, k, j)
      k = j
    }
  }
}

module.exports = BinaryHeap
