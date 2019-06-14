'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _isPlaceholder (a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true
}

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1 (fn) {
  return function f1 (a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1
    } else {
      return fn.apply(this, arguments)
    }
  }
}

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry2 (fn) {
  return function f2 (a, b) {
    switch (arguments.length) {
      case 0:
        return f2
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b)
        })
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b)
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b)
        }) : fn(a, b)
    }
  }
}

function _arity (n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments)
      }
    case 1:
      return function (a0) {
        return fn.apply(this, arguments)
      }
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments)
      }
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments)
      }
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments)
      }
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments)
      }
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments)
      }
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments)
      }
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments)
      }
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments)
      }
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments)
      }
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten')
  }
}

/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curryN (length, received, fn) {
  return function () {
    var combined = []
    var argsIdx = 0
    var left = length
    var combinedIdx = 0
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result
      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx]
      } else {
        result = arguments[argsIdx]
        argsIdx += 1
      }
      combined[combinedIdx] = result
      if (!_isPlaceholder(result)) {
        left -= 1
      }
      combinedIdx += 1
    }
    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn))
  }
}

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */
var curryN = /* #__PURE__ */_curry2(function curryN (length, fn) {
  if (length === 1) {
    return _curry1(fn)
  }
  return _arity(length, _curryN(length, [], fn))
})

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry3 (fn) {
  return function f3 (a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3
      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c)
        })
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c)
        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c)
        }) : _curry1(function (_c) {
          return fn(a, b, _c)
        })
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
          return fn(_a, _b, c)
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c)
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c)
        }) : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b, c)
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b, c)
        }) : _isPlaceholder(c) ? _curry1(function (_c) {
          return fn(a, b, _c)
        }) : fn(a, b, c)
    }
  }
}

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
var _isArray = Array.isArray || function _isArray (val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]'
}

function _isTransformer (obj) {
  return obj != null && typeof obj['@@transducer/step'] === 'function'
}

/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
function _dispatchable (methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn()
    }
    var args = Array.prototype.slice.call(arguments, 0)
    var obj = args.pop()
    if (!_isArray(obj)) {
      var idx = 0
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args)
        }
        idx += 1
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args)
        return transducer(obj)
      }
    }
    return fn.apply(this, arguments)
  }
}

var _xfBase = {
  init: function () {
    return this.xf['@@transducer/init']()
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result)
  }
}

function _map (fn, functor) {
  var idx = 0
  var len = functor.length
  var result = Array(len)
  while (idx < len) {
    result[idx] = fn(functor[idx])
    idx += 1
  }
  return result
}

function _isString (x) {
  return Object.prototype.toString.call(x) === '[object String]'
}

/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
var _isArrayLike = /* #__PURE__ */_curry1(function isArrayLike (x) {
  if (_isArray(x)) {
    return true
  }
  if (!x) {
    return false
  }
  if (typeof x !== 'object') {
    return false
  }
  if (_isString(x)) {
    return false
  }
  if (x.nodeType === 1) {
    return !!x.length
  }
  if (x.length === 0) {
    return true
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1)
  }
  return false
})

var XWrap = /* #__PURE__ */(function () {
  function XWrap (fn) {
    this.f = fn
  }
  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap')
  }
  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc
  }
  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x)
  }

  return XWrap
}())

function _xwrap (fn) {
  return new XWrap(fn)
}

/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
var bind = /* #__PURE__ */_curry2(function bind (fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments)
  })
})

function _arrayReduce (xf, acc, list) {
  var idx = 0
  var len = list.length
  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx])
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value']
      break
    }
    idx += 1
  }
  return xf['@@transducer/result'](acc)
}

function _iterableReduce (xf, acc, iter) {
  var step = iter.next()
  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value)
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value']
      break
    }
    step = iter.next()
  }
  return xf['@@transducer/result'](acc)
}

function _methodReduce (xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc))
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator'

function _reduce (fn, acc, list) {
  if (typeof fn === 'function') {
    fn = _xwrap(fn)
  }
  if (_isArrayLike(list)) {
    return _arrayReduce(fn, acc, list)
  }
  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce')
  }
  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]())
  }
  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list)
  }
  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce')
  }

  throw new TypeError('reduce: list must be array or iterable')
}

function _has (prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}

var toString = Object.prototype.toString
var _isArguments = /* #__PURE__ */(function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments (x) {
    return toString.call(x) === '[object Arguments]'
  } : function _isArguments (x) {
    return _has('callee', x)
  }
}())

// cover IE < 9 keys issues
var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString')
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']
// Safari bug
var hasArgsEnumBug = /* #__PURE__ */(function () {
  return arguments.propertyIsEnumerable('length')
}())

var contains = function contains (list, item) {
  var idx = 0
  while (idx < list.length) {
    if (list[idx] === item) {
      return true
    }
    idx += 1
  }
  return false
}

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? /* #__PURE__ */_curry1(function keys (obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj)
}) : /* #__PURE__ */_curry1(function keys (obj) {
  if (Object(obj) !== obj) {
    return []
  }
  var prop, nIdx
  var ks = []
  var checkArgsLength = hasArgsEnumBug && _isArguments(obj)
  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx]
      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop
      }
      nIdx -= 1
    }
  }
  return ks
})

/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
var reduce = /* #__PURE__ */_curry3(_reduce)

function _isFunction (x) {
  return Object.prototype.toString.call(x) === '[object Function]'
}

/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */
var type = /* #__PURE__ */_curry1(function type (val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1)
})

function _pipe (f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments))
  }
}

/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
function _checkForMethod (methodname, fn) {
  return function () {
    var length = arguments.length
    if (length === 0) {
      return fn()
    }
    var obj = arguments[length - 1]
    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1))
  }
}

/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
var slice = /* #__PURE__ */_curry3(/* #__PURE__ */_checkForMethod('slice', function slice (fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex)
}))

/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
var tail = /* #__PURE__ */_curry1(/* #__PURE__ */_checkForMethod('tail', /* #__PURE__ */slice(1, Infinity)))

/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      const f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
function pipe () {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument')
  }
  return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)))
}

/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
var reverse = /* #__PURE__ */_curry1(function reverse (list) {
  return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse()
})

/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      const yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
function compose () {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument')
  }
  return pipe.apply(this, reverse(arguments))
}

function _identity (x) {
  return x
}

/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      const obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
var identity = /* #__PURE__ */_curry1(_identity)

function _arrayFromIterator (iter) {
  var list = []
  var next
  while (!(next = iter.next()).done) {
    list.push(next.value)
  }
  return list
}

function _includesWith (pred, x, list) {
  var idx = 0
  var len = list.length

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true
    }
    idx += 1
  }
  return false
}

function _functionName (f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/)
  return match == null ? '' : match[1]
}

// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs (a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b
  }
}

var _objectIs$1 = typeof Object.is === 'function' ? Object.is : _objectIs

/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals (aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator)
  var b = _arrayFromIterator(bIterator)

  function eq (_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice())
  }

  // if *a* array contains any element that is not included in *b*
  return !_includesWith(function (b, aItem) {
    return !_includesWith(eq, aItem, b)
  }, b, a)
}

function _equals (a, b, stackA, stackB) {
  if (_objectIs$1(a, b)) {
    return true
  }

  var typeA = type(a)

  if (typeA !== type(b)) {
    return false
  }

  if (a == null || b == null) {
    return false
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a)
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a)
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
        return a === b
      }
      break
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && _objectIs$1(a.valueOf(), b.valueOf()))) {
        return false
      }
      break
    case 'Date':
      if (!_objectIs$1(a.valueOf(), b.valueOf())) {
        return false
      }
      break
    case 'Error':
      return a.name === b.name && a.message === b.message
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false
      }
      break
  }

  var idx = stackA.length - 1
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b
    }
    idx -= 1
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]))
    case 'Set':
      if (a.size !== b.size) {
        return false
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]))
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break
    default:
      // Values of other types are only equal if identical.
      return false
  }

  var keysA = keys(a)
  if (keysA.length !== keys(b).length) {
    return false
  }

  var extendedStackA = stackA.concat([a])
  var extendedStackB = stackB.concat([b])

  idx = keysA.length - 1
  while (idx >= 0) {
    var key = keysA[idx]
    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false
    }
    idx -= 1
  }
  return true
}

/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
var equals = /* #__PURE__ */_curry2(function equals (a, b) {
  return _equals(a, b, [], [])
})

function _indexOf (list, a, idx) {
  var inf, item
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a
          while (idx < list.length) {
            item = list[idx]
            if (item === 0 && 1 / item === inf) {
              return idx
            }
            idx += 1
          }
          return -1
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx]
            if (typeof item === 'number' && item !== item) {
              return idx
            }
            idx += 1
          }
          return -1
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx)

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx)

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx)
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx
    }
    idx += 1
  }
  return -1
}

function _includes (a, list) {
  return _indexOf(list, a, 0) >= 0
}

function _quote (s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0')

  return '"' + escaped.replace(/"/g, '\\"') + '"'
}

/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad = function pad (n) {
  return (n < 10 ? '0' : '') + n
}

var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString (d) {
  return d.toISOString()
} : function _toISOString (d) {
  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z'
}

function _complement (f) {
  return function () {
    return !f.apply(this, arguments)
  }
}

function _filter (fn, list) {
  var idx = 0
  var len = list.length
  var result = []

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx]
    }
    idx += 1
  }
  return result
}

function _isObject (x) {
  return Object.prototype.toString.call(x) === '[object Object]'
}

var XFilter = /* #__PURE__ */(function () {
  function XFilter (f, xf) {
    this.xf = xf
    this.f = f
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init
  XFilter.prototype['@@transducer/result'] = _xfBase.result
  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result
  }

  return XFilter
}())

var _xfilter = /* #__PURE__ */_curry2(function _xfilter (f, xf) {
  return new XFilter(f, xf)
})

/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var filter = /* #__PURE__ */_curry2(/* #__PURE__ */_dispatchable(['filter'], _xfilter, function (pred, filterable) {
  return _isObject(filterable) ? _reduce(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key]
    }
    return acc
  }, {}, keys(filterable))
  // else
    : _filter(pred, filterable)
}))

/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      const isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var reject = /* #__PURE__ */_curry2(function reject (pred, filterable) {
  return filter(_complement(pred), filterable)
})

function _toString (x, seen) {
  var recur = function recur (y) {
    var xs = seen.concat([x])
    return _includes(y, xs) ? '<Circular>' : _toString(y, xs)
  }

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function (obj, keys) {
    return _map(function (k) {
      return _quote(k) + ': ' + recur(obj[k])
    }, keys.slice().sort())
  }

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))'
    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
        return (/^\d+$/.test(k)
        )
      }, keys(x)))).join(', ') + ']'
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString()
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')'
    case '[object Null]':
      return 'null'
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10)
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x)
    case '[object Undefined]':
      return 'undefined'
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString()
        if (repr !== '[object Object]') {
          return repr
        }
      }
      return '{' + mapPairs(x, keys(x)).join(', ') + '}'
  }
}

/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
var toString$1 = /* #__PURE__ */_curry1(function toString (val) {
  return _toString(val, [])
})

/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *
 *      const sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      const sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
var invoker = /* #__PURE__ */_curry2(function invoker (arity, method) {
  return curryN(arity + 1, function () {
    var target = arguments[arity]
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity))
    }
    throw new TypeError(toString$1(target) + ' does not have a method named "' + method + '"')
  })
})

/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * The first two parameters correspond to the parameters of the
 * `String.prototype.replace()` function, so the second parameter can also be a
 * function.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */
var replace = /* #__PURE__ */_curry3(function replace (regex, replacement, str) {
  return str.replace(regex, replacement)
})

/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @see R.join
 * @example
 *
 *      const pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
var split = /* #__PURE__ */invoker(1, 'split')

var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF'
var zeroWidth = '\u200b'
var hasProtoTrim = typeof String.prototype.trim === 'function'
/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
var trim = !hasProtoTrim || /* #__PURE__ */ws.trim() || !zeroWidth.trim() ? /* #__PURE__ */_curry1(function trim (str) {
  var beginRx = new RegExp('^[' + ws + '][' + ws + ']*')
  var endRx = new RegExp('[' + ws + '][' + ws + ']*$')
  return str.replace(beginRx, '').replace(endRx, '')
}) : /* #__PURE__ */_curry1(function trim (str) {
  return str.trim()
})

/**
 * @func
 * @param {Array} array
 * @return {Number}
 * */

const randomIndex = array => Math.floor(Math.random() * array.length)

/**
 * Return random index value from an array
 * @func
 * @param {array} list
 * @return {*}
 * */

const pick = array => array[randomIndex(array)]

/**
 * @func
 * @param {String[]} - array
 * @return {String} - sentence
 * */

const getRandomSentence = compose(
  replace(/(\\|\[|\])/g, ''),
  pick
)

/**
 * @func
 * @param {String[]} sentences
 * @param {Number} maxWordLength - minimum lenght of words per paragraph
 * @return {String}
 * */

function getParagraph (sentences, maxWordLength) {
  let paragraph = ''
  let first = true

  while (paragraph.length < maxWordLength) {
    if (first) {
      paragraph = getRandomSentence(sentences)
      first = false
    } else {
      paragraph += ` ${getRandomSentence(sentences)}`
    }
  }

  return paragraph
}

var sentences = [
  'Where am I?',
  'In the Village.',
  'What do you want?',
  'Information.',
  'Whose side are you on?',
  'That would be telling. We want information… information… information.',
  "You won't get it.",
  'By hook or by crook, we will.',
  'Who are you?',
  'The new Number Two.',
  'Who is Number One?',
  'You are Number Six.',
  'I am not a number! I am a free man!',
  '[laughs]',
  "I will not make any deals with you.  I've resigned.  I will not be pushed, filed, stamped, indexed, briefed, debriefed, or numbered! My life is my own!",
  "Quite a beautiful place, really, isn't it? Almost like a world on its own.",
  "I shall miss it when I'm gone.",
  'Oh, it will grow on you.',
  'A game of chess, my dear.',
  "I don't play.",
  "You should learn. We're all pawns, my dear.",
  'Questions are a burden to others; answers a prison for oneself.',
  'I am not a number. I am a person.',
  'Six of one, half dozen of another.',
  'Elections? In this place?',
  'Of course--we make our choice every 12 months. Every citizen has a choice. Are you going to run?',
  'Like blazes, the first chance I get.',
  'I meant run for office.',
  'Whose?',
  'Mine, for instance.',
  'You have a very delicate sense of humor.',
  'Naturally. Humor is the very essence of a democratic society.',
  'What physically happens if I win?!',
  "You're the boss.",
  "Number One's the boss.",
  "Join me. [They enter Number Six's house] If you win Number One will no longer be a mystery to you, if you know what I mean. Anyway, I'll introduce you properly and see how you feel after assessing the madding crowd.",
  "Gave up sugar four years and three months ago on medical advice. That shows you're afraid.",
  'What?',
  "You're afraid of death.",
  "I'm afraid of nothing.",
  "You're afraid of yourself. You are aware of that? Good, you are honest. That is of use here. Honesty attracts confidence and confidences are the core of our business.",
  'How will you handle your campaign?',
  'No comment.',
  'Intends to fight for freedom at all costs.',
  'Smile',
  'How about your internal policy?',
  'No comment.',
  'Will tighten up on Village security.',
  'Smile!',
  'What about your external policy?',
  'No comment.',
  'Our exports will operate in every corner of the globe. How do you feel about life and death?',
  'Mind your own business.',
  'No comment.',
  'There are those who come in here and deny that we can supply every conceivable civilised amenity within our boundaries. You can enjoy yourselves and you will. You can partake of the most hazardous sports and you will. The price is cheap. All you have to do in exchange is give us information. You are then eligible for promotion to other and perhaps more attractive spheres. Where do you desire to go? What has been your dream? I can supply it. Winter, spring, summer or fall--they can all be yours at any time. Apply to me and it will be easier and better.',
  'I have a choice?',
  'Of course. You can do as you want.',
  "As long as it's what you want.",
  "As long as it is what the majority wants. We're democratic. In some ways.",
  "I'm sad, Number Six. I thought you were beginning to...",
  'Give in?',
  'Be happy. Everything you want is here.',
  "Everything's elsewhere.",
  'What were you looking at?',
  'A light.',
  'A star.',
  'A boat.',
  'An insect.',
  'A plane.',
  'A flying fish.',
  'Somebody who belongs to my world.',
  'This is your world. I am your world. If you insist on living a dream you may be taken for mad.',
  'I like my dream.',
  'Then you are mad.',
  'Our legal system is unusual.',
  'No jury.',
  'Three judges decide here.',
  'As in the French Revolution.',
  "They cut through the dead wood, didn't they?",
  "It's the rules. Of the people, by the people, for the people.",
  'It takes on a new meaning.',
  "You're a wicked man.",
  'Wicked?',
  'You have no values.',
  'Different values.',
  "You won't be helped.",
  'Destroyed.',
  'You want to spoil things.',
  "I won't be a goldfish in a bowl.",
  '[referring to the chess game] Why do you use people?',
  'Some psychiatrists say it satisfies the desire for power. The only opportunity one gets here.',
  "That depends what side you're on.",
  "I'm on my side.",
  "Aren't we all?",
  'You must be new here. In time, most of us join the enemy... against ourselves.',
  "Oh, that was a good move, wasn't it?",
  'I know a better one.',
  'Oh?',
  'Away from this place.',
  "That's impossible.",
  'For chessmen, not for me.',
  "Don't tell me you care?",
  'Well, of course. We want you to be happy.',
  'Fine. Just, umm... give me a one-way ticket home.',
  "Won't you ever give up?",
  'What do you think?',
  '[about Number Six] Is he in for treatment?',
  'Not yet.',
  'Pity... interesting subject. I should like to know his breaking point.',
  "Well, you could make that your life's ambition.",
  '[crying] How can you doubt me?',
  "It's easy and I'm waterproof; a little drizzle won't wash away my doubt. So don't try.",
  'I only want to be near you.',
  "Everybody's near in this place. Far too near.",
  "Do you think they'll ever release us?",
  "Let me know. I shan't be around.",
  '[about Number Six] He can make even the act of putting on his dressing gown appear as a gesture of defiance.',
  "Number Two's Assistant",
  " There are methods we haven't used yet, of course.",
  'I want him with a whole heart, body and soul.',
  "Number Two's Assistant",
  " He'll crack.",
  "Perhaps--one tiny piece at a time. I don't want a man of fragments. Fascinating.",
  "Number Two's Assistant",
  " He doesn't even bend a little.",
  "That's why he'll break. He only needs one small thing. If he will answer one simple question, the rest will follow",
  ' why did he resign?',
  '[offering coffee] I can never remember. One lump or two?',
  "It's in the file.",
  'Yes, as a matter of fact, yes. But it would save time if you just answered.',
  'Why? Running out of time?',
  'Does not take sugar. Frightened of putting on weight?',
  'No. Nor of being reduced.',
  "Oh, that's excellent. I am glad you are here. You really are a model.",
  "But I don't run on clockwork.",
  'You will, my dear chap. You will.',
  'Do you still think you can escape, Number Six?',
  "I'm going to do better than that.",
  'Oh?',
  'Going to escape, come back.',
  'Come back?',
  'Escape, come back, wipe this place off the face of the Earth, obliterate it and you with it.',
  '[Number Two shouts to Number Six as he walks out of his office]',
  "Don't worry, Number Six.  You'll be cured.  I'll see to it. No more nightmares.  If you have so much as a bad dream, you will come… whimpering… to tell it to me!",
  '[The door closes behind Number Six as he leaves]',
  ' Whimpering!',
  'Has it ever occurred to you that you are just as much a prisoner as I am?',
  "Oh my dear chap, of course--I know too much. We're both lifers. Number Two",
  " I am definitely an optimist. That's why it doesn't matter who Number One is. It doesn't matter which side runs the Village.",
  "It's run by one side or the other.",
  "Oh certainly, but both sides are becoming identical. What in fact has been created is an international community--perfect blueprint for world order. When the sides facing each other suddenly realize that they're looking into a mirror, they will see that this is the pattern for the future.",
  'The whole Earth as the Village?',
  "That is my hope. What's yours?",
  "I'd like to be the first man on the moon.",
  "[viewing Number Six's thoughts] Extraordinary. How very single-minded.",
  "He's not conventional.",
  "I sometimes think he's not human.",
  'News of old friends travels quickly.',
  'In a few hours.',
  'To you and to me, news is like air. We breathe it deeply. We draw it from far and wide.',
  "If it's interesting.",
  'What are you going to do with your freedom?',
  'Go fishing.',
  "Perhaps you're fishing now.",
  "What's that Number Six doing? Always walking. Irritating man. Doesn't he ever get tired?!",
  "And remember.. you're mine.",
  'Really?',
  'Be horrible to other women.',
  'I promise.',
  'Oh, thank you.',
  "You don't believe it. A university-level degree in three minutes.",
  "It's improbable.",
  'But not impossible.',
  "Nothing's impossible in this place.",
  "You'll find the Professor most interesting.",
  'Would I?',
  'With an extraordinary range of knowledge.',
  "The only subject I'm interested in is getting away from this place.",
  'Exactly.',
  'Who are you?',
  'A cog in the machine.',
  "I'll fix it, Number Six, so that you become aware that deliberate destruction of official property is a most serious offense. I must recommend the the full penalty.",
  'Which is?',
  'It could be imprisonment, could be a fine.',
  "I'll take the fine.",
  'Yes, I thought you might.',
  "Allow me to introduce .. The General. All the professor's own work; he gave birth to it and loves it with a passionate love, probably hates it even more. That mass of circuits, my dear fellow, is as revolutionary as nuclear fission. No more wastage in schools",
  " there's no more tedious learning by rote. A brilliantly devised course, delivered by a leading teacher, subliminally learned, checked, and corrected by an infallible authority. And what have we got?",
  'A row of cabbages!',
  'Indeed - knowledgeable cabbages.',
  '[after Number Six stumped the machine, causing it to self destruct] What was the question?',
  "It's insoluble, to man or machine.",
  'What was it?',
  'W - H - Y - Question mark.',
  'Why?',
  'Why?',
  'The trouble with science is that it can be perverted.',
  "You know what, why don't we settle this like gentlemen?",
  "You're claiming to be a gentleman too?",
  'Oh very good, very good indeed. That line is very worthy of me.',
  "[to Number Six] I take it I'm supposed to go all fuzzy round the edges and run off into the distance screaming Who am I?",
  "By the time we finish with him, he won't know whether he's Number Six or the cube root of infinity.",
  '[to Alison; about Number Twelve] I am the original, he is the economy pack.',
  "You're a stubborn fellow, Number Six.",
  "James, you call me that once again and you're liable for a bout in hospital.",
  '[to Number Six] You resign. You disappear. You return. You spin a yarn that Hans Christian Andersen would reject as a fairy tale.',
  "And they're all... numbers? No names. No names at all?",
  'Just numbers.',
  'I see.',
  "Numbers in a village that is a complete unit of our own society. A place to put people who can't be kept around. People who know too much or too little. A place with many means of breaking a man.",
  '[about Number Six] Interesting fellow.',
  "He's an old, old, old friend. Who never gives up.",
  'Who are you?',
  "Watchmaker's Daughter",
  " I'm a number, just like you. Does it matter which?",
  "How'd you get in?",
  "Watchmaker's Daughter",
  ' The door was open.',
  "Always is... to them, isn't it?",
  "Watchmaker's Daughter",
  " But I'm not one of them.",
  'No. What do you want?',
  "Watchmaker's Daughter",
  ' Help.',
  "Go to the Town Hall. The Citizens' Council promises help and advice for everyone.",
  "Watchmaker's Daughter",
  " Their Citizen's Council.",
  "As far as I'm concerned, what's theirs is yours.",
  "Watchmaker's Daughter",
  ' I am not one of them.',
  'No... no one is.',
  "Good morning--I've brought you the activities prognosis you ordered.",
  'Oh, good--how accurate are these? What is the percentage of right and wrong?',
  "I'm afraid we don't know that.",
  'Why not?',
  'Well, twice we programmed our machines for a percentile appraisal of their own efficiencies. Each time they refused to give back the requested information.',
  'Refused? How?',
  'Simply by not returning the data to us.',
  "They'll be wanting their own trade union next.",
  "You refuse to understand. What I'm doing is for a principle. We are in this prison for life, all of us, but I have met no one here who has committed a crime. I protest in a manner they cannot ignore.",
  'Some other way, then--not by an act of murder.',
  'Assassination.',
  'Call it what you like--the important matter is that the entire Village will be punished.',
  'Maybe it is what they need to wake them up, to shake them out of their lethargy. To make them angry enough...',
  "That's assuming they survive the punishment!",
  "Tomorrow, after I've handed over office, I'm to be assassinated..",
  'For assassinated, substitute executed.',
  "Since it's arranged by my own people, you mean.",
  "You don't mind?",
  "Of course I mind. It's just that... well, I never thought it would happen to me.",
  'It never does--to anybody. But it can be prevented.',
  'Preventing is only postponing. You never understood us, Number Six. We never fail!',
  'The Seal is the ceremony.',
  "It's hollowed out, it's packed with explosives.",
  'And before I hand it over to my successor...',
  'It will be detonated by radio.',
  'I can think of better ways to die.',
  'And better causes to die for.',
  'It is the duty of this Committee to deal with complaints.',
  'Complaints?',
  'Your complaints.',
  'Well done. I have several.',
  'Do carry on.',
  'No time for tea?',
  'No. Only your future.',
  "All right, say you're a poet and you were composing, and you failed to hear Number Ten's greeting.",
  'Neglect of social principle.',
  'Poetry has a social value.',
  "He's trying to divide us.",
  'His intentions are obvious. To stop us from helping this unfortunate girl.',
  "You're trying to undermine my rehabilitation. Disrupt my social progress!",
  'Strange talk for a poet.',
  'Reactionary!',
  'Rebel!',
  'Disharmonious!',
  'There is a saying, The slowest mule is nearest to the whip.',
  'And another. He who digs a pit will one day lie in it. Or is Number Two above investigation?',
  'You still have a choice. You can still salvage your right to be individuals. Your rights to truth and free thought. Reject this false world of Number Two. Reject it. Now!',
  'We have things to discuss.',
  'About the girl you murdered?',
  'Oh, never mind the girl. I want to talk about you.',
  "You're wasting your time. Others have tried.",
  'Amateurs.',
  "You're professional. A professional sadist?",
  "You are too strong. We'll see. Du musst amboss oder hammer sein.",
  'You must be anvil or hammer.',
  'I see you know your Goethe.',
  'And you see me as the anvil?',
  'Precisely. I am going to hammer you.',
  'Music makes for a quiet mind.',
  'Music begins where words leave off.',
  'You destroyed me.',
  'No.. you destroyed yourself. You destroyed yourself. A character flaw. You were afraid of your masters. A weak link in the chain of command waiting to be broken.',
  "Don't tell them... don't report me.",
  "I don't intend to. You are going to report yourself.",
  '[taking the phone] I have to report a breakdown.. in control. Number Two needs to be replaced. Yes, this is Number Two reporting.',
  '[watching as Number Six paces his flat] What sort of opinion would you form of that fellow?',
  'Anybody who spends his time doing that must be rather stupid.',
  "You couldn't be more wrong. Because he's our most interesting citizen from every point of view... particularly yours.",
  "You're still as pompous as ever... Danvers.",
  'Where did you get my name?',
  "Jonathan Peregrine Danvers. Born in Bootle. Took elocution lessons. Came to London, joined the civil service in 1948 as a junior clerk, but moved to this department sometime later. Mainly at the request of the typing pool. Am I going to see Sir Charles? Well? Or would you prefer me to go on. I'm sure these gentlemen would be most intrigued to hear of your little jaunt to Paris in March 1958. Let me see now, what was her name...",
  'If you really are who you say you are, you would not have expected me to keep it, would you?',
  "No. It's a hopeless situation.",
  'If I had kept it, I would have been very stupid. Silly.',
  "You've made your point. I accept it.",
  'But you overlooked one thing. Sentimental people are sometimes stupid. Very stupid.',
  'I will do it... on certain conditions.',
  "I'm sure they will be reasonable.",
  'For once, I am dictating.',
  'Heil.',
  'Harmony? Never heard of it.',
  "Not many people have, señor. it's sort of… exclusive.",
  'So am I.',
  'You turned in your badge.',
  'And my gun.',
  'What were your reasons?',
  'My reasons.',
  "You've already taken a job. With who?",
  '[correcting] Whom with.',
  'Number Twenty-Two',
  ' [to Number Six; her last words] I wish it had been real.',
  '[to Mr. X] You are a born survivor. I am a born killer. We were made for each other, but I fear this is where it must end. Your reflexes cannot save you now.',
  "[to Mr. X] I love you madly. I love the way the hair curls on the back of your neck. You'll make a beautiful corpse. I'm going to do you the honour of letting you die superbly.",
  'Mountaineering rope. It would hold an elephant.',
  'Mr. X',
  ' I must remember that next time I go climbing with one.',
  "You see, when the rocket reaches London, you will be the first to know! Won't that be exciting?!?",
  'Mr. X',
  " I'll just go to pieces.",
  "[about Number Six] That one wouldn't drop his guard with his own grandmother!",
  '[on the phone] Why do you care?',
  'I know your voice.',
  'I have been here before. Why do you care?',
  "You'll never know.",
  'How?',
  "Don't do that.",
  'What?',
  'Inquire.',
  "What's your number? Your number--what is it?",
  'Be careful.',
  'One two, three, four, five, six seven?',
  'Quiet!',
  'Eight, nine ten, 11, 12, 13, 14, 15, 16?',
  'You know who it was?',
  'Yes, sir.',
  'Who was it? [Six says nothing.] That is cowardice!',
  "That's honour, sir.",
  "We don't talk about such things.",
  'You should teach it, sir.',
  "You're a fool!",
  'Yes, sir. Not a rat.',
  'A rat?',
  'Rat.',
  "[turns to face Six] I'm a rat?!?",
  "No, sir. I'm a fool. Not a rat.",
  'Society...',
  'Yes, sir?',
  'Society is a place where people exist together.',
  'Yes, sir.',
  'That is civilization.',
  'Yes, sir.',
  'The lone wolf belongs in the wilderness.',
  'Yes, sir.',
  'You must not grow up to be a lone wolf.',
  'No, sir.',
  'You must conform.',
  'Yes, sir.',
  'It is my sworn duty to see that you do conform.',
  'Yes, sir.',
  'You will take six.',
  'Six, sir?',
  'Of the best.',
  "I'm not guilty, sir.",
  'Ten!',
  'Twelve.',
  'What?',
  'Twelve, sir, so that I can remember.',
  '[Number Six begins to violently come out of his hypnotic trance and attack Number Two. The Butler knocks him unconscious, and he and Number Two begin to re-hypnotize Six.]',
  "I'm beginning to like him.",
  'I am a man, not a unit of society.',
  'We understand he survived the ultimate test. Then he must no longer be referred to as Number Six or a number of any kind. He has gloriously vindicated the right of the individual to be individual. And this Assembly rises to you... Sir.',
  'Give it to me baby! Confess!',
  "Oh Dad, I'm your baby Dad, do you owe your baby something Daddy?",
  'Confess!',
  'The bones is yours Dad! They came from you my Daddy.',
  'Confess! Now you hep?',
  'Hip, Dad, hip.',
  'Confess!',
  'And a hip bone.',
  'Confess!',
  'And a thigh bone.',
  'Confess!',
  'Shin bone, knee bone.',
  'Confess!',
  'Back bone. All yours Dad.',
  'Youth, with its enthusiasms which rebels against any accepted norm must because it must--and we sympathize--it may wear flowers in its hair, bells on toes, But when the common good is threatened, when the function of society is endangered, such revolts must cease. They are non-productive and must be abolished.',
  'New allegiances. Such is the price of fame.... and failure. Dear me, how sad. My Lords, Ladies and Gentleman, a most extraordinary thing happened to me on my way here. It has been my lot in the past to wield a not inconsiderable power. Nay, I have had the ear of statesmen, kings and princes of many lands. Governments have been swayed, policies defined and revolutions nipped in the bud at a word from me in the right place, and at a propitious time. Not surprising therefore, that this community should find a use for me. Not altogether by accident that one day I should be abducted, and wake up here amongst you. What is deplorable is that I resisted for so short a time. A fine tribute to your methods.',
  'We are honoured to have with us a revolutionary of a different calibre. He has revolted. Resisted. Fought. Held fast. Maintained. Destroyed resistance. Overcome coercion. The right to be a Person, Someone, or Individual. We applaud his private war and concede that despite materialistic efforts he has survived intact and secure. All that remains is recognition of a Man.'
]

/**
 * @func
 * @param {Number} [minParaLength=1] - Minimum number of paragraphs
 * @param {Number} [maxWordLength=250] - Maximim number of words per paragraph
 * */

function getAllParagraphs (minParaLength = 1, maxWordLength = 250) {
  return Array.from(new Array(minParaLength)).reduce((ipsum, current) => {
    ipsum = ipsum + getParagraph(sentences, maxWordLength) + '\n'
    return ipsum
  }, '')
}

var titles = [
  'Arrival',
  'The Chimes of Big Ben',
  'A. B. and C.',
  'Free for All',
  'The Schizoid Man',
  'The General',
  'Many Happy Returns',
  'Dance of the Dead',
  'Checkmate',
  'Hammer into Anvil',
  "It's Your Funeral",
  'A Change of Mind',
  'Do Not Forsake Me Oh My Darling',
  'Living in Harmony',
  'The Girl Who Was Death',
  'Once Upon a Time',
  'Fall Out'
]

/**
 * @func
 * @param {String[]} - array
 * @return {String} - sentence
 * */

const getRandomTitle = titles => () => replace(/(\\|\[|\])/g, '', pick(titles))

var getTitle = getRandomTitle(titles)

/**
 * @func
 * @param {string} text - single string made up of several paragraphs
 * @return {string}
 * */
const makeHtml = compose(
  replace(/\s/g, ''),
  reduce((a, c) => a.concat(`<p>${c}</p>`), ''),
  filter(identity),
  split('\n'),
  trim
)

/**
 * @typedef {Object} Api
 * @property {string} text
 * @property {string} html
 * @property {string} title
 * */

/**
 * @func
 * @param {Number} [minParaLength=1] - Minimum number of paragraphs
 * @param {Number} [maxWordLength=250] - Maximim number of words per paragraph
 * @return {Api}
 * */
var makeJson = (...args) => {
  const text = getAllParagraphs(...args)
  return {
    text,
    html: makeHtml(text),
    title: getTitle()
  }
}

const html = (...args) => makeHtml(getAllParagraphs(...args))
const json = makeJson
const ipsum = getAllParagraphs
const title = getTitle

exports.html = html
exports.ipsum = ipsum
exports.json = json
exports.title = title
