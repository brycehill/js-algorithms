/**
 * Quick Sort - n lg n
 *
 * Sir Charles Antony Richard Hoare
 *
 * Shuffle the array
 * Partition
 * Sort each piece recursively
 *
 * Sorts in place!
 *
 * [ 5, 2, 7, 24, 10, 4, 8 ] <- Starting
 * [ 7, 2, 24, 8, 5, 10, 4 ] <- Shuffled
 * [ 5, 2, 4, 7, 8, 10, 24 ] <- Partitioned on 4
 * [ 4, 2, 5, 7, 8, 10, 24 ] <- Partitioned on 2
 * [ 2, 4, 5, 7, 8, 10, 24 ]
 * [ 2, 4, 5, 7, 8, 10, 24 ] <- Already sorted from partition
 *
 */
var shuffle = require('./shuffle-sort')

function quickSort (array) {
  array = shuffle(array)
  ;(function sort (a, low, high) {
    if (high <= low) return
    let mid = partition(a, low, high)
    sort(a, low, mid - 1)
    sort(a, mid + 1, high)
  })(array, 0, array.length - 1)
}

/**
 * Partion an array into 2 halves of higher and lower numbers
 *
 * [ 5, 2, 24, 7, 10, 4, 7, 3, 9 ]
 *  lo  i->i                j<-j   swap 24 and 3
 * [ 5, 2, 3, 7, 10, 4, 7, 24, 9 ]
 *         i->i      j<-j<-j       swap 7 and 4
 * [ 5, 2, 3, 4, 10, 7, 7, 24, 9 ]
 *            i->i
 *            j<-j<-j              swap 4 and 5
 * [ 4, 2, 3, 5, 10, 7, 7, 24, 9 ]
 */
function partition (array, low, high) {
  let i = low
  let j = high + 1
  let tmp
  while (true) {
    // Scan from left to right until i is less than the low pointer
    while (array[++i] < array[low]) {
      // Break when we get to the end of the array
      if (high === i) break
    }
    // Scan from right to left until j is greater than the low pointer
    while (array[--j] > array[low]) {
      // Break when we get to the left side
      if (low === j) break
    }
    // Break if i crosses paths with j
    if (i >= j) break

    // Now that we have found
    // Swap i with j
    tmp = array[j]
    array[j] = array[i]
    array[i] = tmp
  }
  // Swap low with j after the pointers cross
  tmp = array[j]
  array[j] = array[low]
  array[low] = tmp
  return j
}

module.exports = quickSort
