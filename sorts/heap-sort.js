const { swap } = require('../utils')
/**
 * Heap Sort
 *
 * 1. Start w/ an array of keys
 * 2. Build a max heap
 * 3. Sort the result in place
 */
function heapSort (list) {
  let size = list.length
  // Build list into a heap
  for (let k = Math.floor(size / 2); k >= 0; k--) {
    list = sinkNode(list, k, size)
  }

  function sinkNode (list, idx, size) {
    // When 0-indexed, children nodes can be found at 2x+1 AND 2x+2
    const leftIdx = 2 * idx + 1
    const rightIdx = 2 * idx + 2
    let larger = idx
    // Find the larger of the two child nodes
    if (leftIdx < size && list[leftIdx] > list[larger]) {
      larger = leftIdx
    }

    if (rightIdx < size && list[rightIdx] > list[larger]) {
      larger = rightIdx
    }
    if (larger === idx) return list

    list = swap(list, idx, larger)
    return sinkNode(list, larger, size)
  }

  for (let n = list.length - 1; n > 0; n--) {
    // Swap max root with last
    list = swap(list, 0, n)
    // No need to touch the end of the array since it's already been ordered,
    // so decrement `size`
    list = sinkNode(list, 0, --size)
  }
  return list
}
module.exports = heapSort


let list = [1,4,2,9,7,87,10,4,32]
console.log('before', list)
console.log('after', heapSort(list))
