function debounce (fn, wait) {
  let timeout = null
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(fn, wait)
  }
}

function throttle (func, delay) {
  let prev = Date.now()
  return function () {
    let context = this
    let args = arguments
    let now = Date.now()
    if (now - prev >= delay) {
      func.apply(context, args)
      prev = Date.now()
    }
  }
}

function throttle2 (func, delay) {
  let timer = null
  return function () {
    let context = this
    let args = arguments
    if (!timer) {
      timer = setTimeout(function () {
        func.apply(context, args)
        timer = null
      }, delay)
    }
  }
}

