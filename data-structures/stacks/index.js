const Stack = require('./array-dynamic-size-stack')
const strings = 'to be or not to - be - - that - - - is to be or not to - be - - that is'.split(' ')

const s = new Stack()
strings.forEach(str => {
  if (str === '-') {
    console.log(s.pop())
  } else {
    s.push(str)
  }
})
