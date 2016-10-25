const Q = require('./linked-list-queue')
const strings = 'to be or not to - be - - that - - - is to be or not to - be - - that is'.split(' ')

const q = new Q()
strings.forEach(str => {
  if (str === '-') {
    console.log(q.dequeue())
  } else {
    q.enqueue(str)
  }
})
