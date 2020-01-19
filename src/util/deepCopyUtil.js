function deepCopy (param) {
  if (param === null || typeof param !== 'object') {
    return param
  }
  const copyObj = Array.isArray(param) ? [] : {};
  return copyObj

}
