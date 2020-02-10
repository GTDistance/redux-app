/**
 * 在字符串中找出出现最多的字符
 * @param str
 * @returns {{maxValue: null, maxNum: number}}
 */
function findMaxString (str) {
  const strArr = [...str]
  const storeObj = {}
  const maxObj = {
    maxNum: 0,
    maxValue: null
  }
  strArr.forEach((item) => {
    storeObj[item] = storeObj[item] === undefined ? 1 : storeObj[item] + 1
    if (storeObj[item] > maxObj.maxNum) {
      maxObj.maxNum = storeObj[item]
      maxObj.maxValue = item
    }
  })
  return maxObj
}

function unique (arr) {
  const storeObj = {}
  arr.forEach((item) => {
    storeObj[item] = 0
  })
  return Object.keys(storeObj)
}

const unique1 = arr => {
  return arr.filter((ele, index, array) => {
    return index === array.indexOf(ele)
  })
}

const unique2 = arr => {
  return [...new Set(arr)]
}

// const unique3 = arr.reduce((map, item) => {
//   map[item] = 0
//   return map
// }, {})

const reverseString = (str) => {
  return [...str].reverse().join('')
}

export {
  findMaxString,
  unique,
  reverseString
}
