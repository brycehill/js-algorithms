let binaryHeap = require('../../data-structures/binary-heap')
/**
 * Priority Queue
 *
 * Insert and delete items, deleting the largest (or smallest) item.
 */
function MaxQueue (capacity) {
  let pq = new Array(capacity)
  let n = 0

  const isEmpty = () => n === 0
  const insert = x => {
    pq[n++] = x
    return pq
  }

  // Naive implementation
  // Find the max value and put it at the end, then pop it off.
  function naiveDelete () {
    let max = 0
    for (let i = 1; i < n; i++) {
      if (pq[max] < pq[i]) max = i
    }
    let tmp = pq[max]
    pq[max] = pq[n - 1]
    pq[n - 1] = tmp
    pq.pop()
    return pq
  }

  // Use a binary tree to make this consistently efficient
  function delete () {

  }

  return {
    delete, isEmpty, insert, naiveDelete
  }
}

function MinQueue () {

}

module.exports = {
  MaxQueue,
  MinQueue
}


let pq = new MaxQueue()
pq.insert(1)
pq.insert(3)
console.log(pq.insert(2))
console.log(pq.naiveDelete())