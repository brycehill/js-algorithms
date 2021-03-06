/*
 * Array variation of a stack
 *  - Every operation takes constant amortized time.
 * Last in, first out LIFO
 */

// Basically a non-native version of native arrays...
// Don't make the client care about the size of the array
function ArrayStaticStack () {
  var list = []
  var idx = 0

  // Repeated Doubling:
  // If array is full, create a new array of twice the size, and copy items.
  function resize (size) {
    console.log('resizing from', list.length, 'to', size)
    var newList = new Array(size)
    for (var i = 0; i < size; i++) {
      newList[i] = list[i]
    }
    list = newList
  }

  this.push = x => {
    if (idx === list.length) {
      resize(list.length * 2)
    }
    list[idx++] = x
  }

  // If array is 1/4 full, resize to half the size
  this.pop = () => {
    if (idx === list.length / 4) {
      resize(list.length / 2)
    }
    return list[--idx] // dec idx and return last item
  }
}

module.exports = ArrayStaticStack
