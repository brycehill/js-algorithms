/**
 * Binary Heap Priority Queue
 *
 * An array representation of a heap-ordered complete binary tree
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


function BinaryHeap (capacity) {
  let heap = new Array(capacity + 1)
  let n = 0

  // Check that a node's parent is bigger. If it is smaller, exchange the two
  // and continue checking up the tree
  function swim (k) {
    // You can easily find a node's parent w/ `k / 2'
    while (k > 1 && heap[Math.ceil(k / 2)] < heap[k]) {
      let parentKey = Math.ceil(k / 2)
      let tmp = heap[k]
      heap[k] = heap[parentKey]
      heap[parentKey] = tmp
      k = parentKey
    }
  }

  // Check that a parent's children are smaller. If parent is smaller than child
  // exchange and continue down the tree
  function sink (k) {
    // Children nodes can be found at 2k AND 2k+1
    while (2 * k <= n) {
      let j = 2 * k
      // Find the larger of the two child nodes
      if (j < n && heap[j] < heap[j + 1]) {
        j++
      }
      // Parent is greater, no need to keep checking
      if (heap[k] > heap[j]) break
      // Swap
      let tmp = heap[k]
      heap[k] = heap[j]
      heap[j] = tmp
      k = j
    }
  }

  function insert (x) {
    heap[++n] = x
    swim(n)
    return heap
  }

  function delMax () {
    let max = heap[1]
    heap[1] = heap[n]
    heap[n] = max
    sink(1)
    heap[n] = null
    return max
  }

  return {
    delMax, insert
  }
}


var bh = new BinaryHeap(6)
console.log(bh.insert(1))
console.log(bh.insert(2))
console.log(bh.insert(6))
console.log(bh.insert(4))
bh.insert(1)
console.log(bh.insert(9))
bh.delMax()
bh.delMax()
bh.delMax()
bh.insert(9)
bh.insert(3)
console.log(bh.insert(5))
bh.delMax()
