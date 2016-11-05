/**
 * Merge Sort - N lg N
 *
 * John von Neumann
 *
 * Split an array in half
 * Recursively split and sort each half
 * Merge the two halves
 *
 *
 * [ 10, 7, 5, 3, 13, 8, 4, 3, 9, 2, 5, 49, 32, 2, 11 ]  <-- sort first 2 (7, 10)
 * [ 7, 10, 5, 3, 13, 8, 4, 3, 9, 2, 5, 49, 32, 2, 11 ]
 * [ 7, 10, 3, 5, 13, 8, 4, 3, 9, 2, 5, 49, 32, 2, 11 ]
 * [ 3, 5, 7, 10, 13, 8, 4, 3, 9, 2, 5, 49, 32, 2, 11 ]  <-- sort first 4 (7, 10)
 * [ 3, 5, 7, 10, 8, 13, 4, 3, 9, 2, 5, 49, 32, 2, 11 ]  <-- sort a[5]..a[6]
 * [ 3, 5, 7, 10, 8, 13, 3, 4, 9, 2, 5, 49, 32, 2, 11 ]  <-- sort a[7]..a[8]
 * [ 3, 5, 7, 10, 3, 4, 8, 13, 9, 2, 5, 49, 32, 2, 11 ]  <-- sort a[5]..a[8]
 * [ 3, 3, 4, 5, 7, 8, 10, 13, 9, 2, 5, 49, 32, 2, 11 ]  <-- sort a[0]..a[8]
 * [ 3, 3, 4, 5, 7, 8, 10, 13, 2, 9, 5, 49, 32, 2, 11 ]  <-- sorting of second half
 * [ 3, 3, 4, 5, 7, 8, 10, 13, 2, 9, 5, 49, 32, 2, 11 ]
 * [ 3, 3, 4, 5, 7, 8, 10, 13, 2, 5, 9, 49, 32, 2, 11 ]
 * [ 3, 3, 4, 5, 7, 8, 10, 13, 2, 5, 9, 49, 2, 32, 11 ]
 * [ 3, 3, 4, 5, 7, 8, 10, 13, 2, 5, 9, 49, 2, 11, 32 ]
 * [ 3, 3, 4, 5, 7, 8, 10, 13, 2, 2, 5, 9, 11, 32, 49 ]
 * [ 2, 2, 3, 3, 4, 5, 5, 7, 8, 9, 10, 11, 13, 32, 49 ]  <-- sort a[0]..a[16]
 *
 */

function mergeSort (list) {
  // Create a new auxillary array and then sort
  const aux = new Array(list.length)
  return sort(list, aux, 0, list.length - 1)
}

function merge (list, aux, low, mid, high) {
  aux = list.slice()
  let i = low
  let j = mid + 1
  for (let k = low; k <= high; k++) {
    if (i > mid) {
      list[k] = aux[j++]
    } else if (j > high) {
      list[k] = aux[i++]
    } else if (aux[j] < aux[i]) {
      list[k] = aux[j++]
    } else {
      list[k] = aux[i++]
    }
  }
  return list
}

function sort (list, aux, low, high) {
  if (high <= low) return
  // Calculate the new midpoint and sort the new halves
  let mid = Math.floor(low + (high - low) / 2)
  sort(list, aux, low, mid)
  sort(list, aux, mid + 1, high)
  // Once both halves are sorted, merge them
  console.log('sort::list', list)
  return merge(list, aux, low, mid, high)
}

module.exports = mergeSort
