/**
 * Shuffle Sort - Knuth
 */
function shuffle (arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let random = Math.floor(Math.random() * (i + 1))
    let tmp = arr[i]
    arr[i] = arr[random]
    arr[random] = tmp
  }
  return arr
}

module.exports = shuffle
