function add (x, y) {
  return x + y;
}

function curriedAdd (x) {
  return function (y) {
    return x + y
  }
}
