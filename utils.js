function swap (list, i, j) {
  let tmp = list[i]
  list[i] = list[j]
  list[j] = tmp
  return list
}

module.exports = {
  swap
}