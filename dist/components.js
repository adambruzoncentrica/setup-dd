
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':51591/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

!function (global) {
  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1;
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = (typeof module === "undefined" ? "undefined" : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      module.exports = runtime;
    }
    return;
  }
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }
  runtime.wrap = wrap;
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }
  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };
  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };
  runtime.awrap = function (arg) {
    return {
      __await: arg
    };
  };
  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return Promise.resolve(value).then(function (unwrapped) {
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise =
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }
    this._invoke = enqueue;
  }
  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      context.delegate = null;
      if (context.method === "throw") {
        if (delegate.iterator["return"]) {
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);
          if (context.method === "throw") {
            return ContinueSentinel;
          }
        }
        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      context[delegate.resultName] = info.value;
      context.next = delegate.nextLoc;
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }
    } else {
      return info;
    }
    context.delegate = null;
    return ContinueSentinel;
  }
  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator";
  Gp[iteratorSymbol] = function () {
    return this;
  };
  Gp.toString = function () {
    return "[object Generator]";
  };
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }
          next.value = undefined$1;
          next.done = true;
          return next;
        };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  runtime.values = values;
  function doneResult() {
    return {
      value: undefined$1,
      done: true
    };
  }
  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined$1;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          context.method = "next";
          context.arg = undefined$1;
        }
        return !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        this.arg = undefined$1;
      }
      return ContinueSentinel;
    }
  };
}(
function () {
  return this || (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" && self;
}() || Function("return this")());

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var directives = new WeakMap();
var isDirective = function isDirective(o) {
  return typeof o === 'function' && directives.has(o);
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
var reparentNodes = function reparentNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  while (start !== end) {
    var n = start.nextSibling;
    container.insertBefore(start, before);
    start = n;
  }
};
var removeNodes = function removeNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  while (start !== end) {
    var n = start.nextSibling;
    container.removeChild(start);
    start = n;
  }
};

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var noChange = {};
var nothing = {};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
var nodeMarker = "<!--".concat(marker, "-->");
var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
var boundAttributeSuffix = '$lit$';
var Template = function Template(result, element) {
  _classCallCheck(this, Template);
  this.parts = [];
  this.element = element;
  var nodesToRemove = [];
  var stack = [];
  var walker = document.createTreeWalker(element.content, 133
  , null, false);
  var lastPartIndex = 0;
  var index = -1;
  var partIndex = 0;
  var strings = result.strings,
      length = result.values.length;
  while (partIndex < length) {
    var node = walker.nextNode();
    if (node === null) {
      walker.currentNode = stack.pop();
      continue;
    }
    index++;
    if (node.nodeType === 1
    ) {
        if (node.hasAttributes()) {
          var attributes = node.attributes;
          var _length = attributes.length;
          var count = 0;
          for (var i = 0; i < _length; i++) {
            if (endsWith(attributes[i].name, boundAttributeSuffix)) {
              count++;
            }
          }
          while (count-- > 0) {
            var stringForPart = strings[partIndex];
            var name = lastAttributeNameRegex.exec(stringForPart)[2];
            var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
            var attributeValue = node.getAttribute(attributeLookupName);
            node.removeAttribute(attributeLookupName);
            var statics = attributeValue.split(markerRegex);
            this.parts.push({
              type: 'attribute',
              index: index,
              name: name,
              strings: statics
            });
            partIndex += statics.length - 1;
          }
        }
        if (node.tagName === 'TEMPLATE') {
          stack.push(node);
          walker.currentNode = node.content;
        }
      } else if (node.nodeType === 3
    ) {
        var data = node.data;
        if (data.indexOf(marker) >= 0) {
          var parent = node.parentNode;
          var _strings = data.split(markerRegex);
          var lastIndex = _strings.length - 1;
          for (var _i = 0; _i < lastIndex; _i++) {
            var insert = void 0;
            var s = _strings[_i];
            if (s === '') {
              insert = createMarker();
            } else {
              var match = lastAttributeNameRegex.exec(s);
              if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
              }
              insert = document.createTextNode(s);
            }
            parent.insertBefore(insert, node);
            this.parts.push({
              type: 'node',
              index: ++index
            });
          }
          if (_strings[lastIndex] === '') {
            parent.insertBefore(createMarker(), node);
            nodesToRemove.push(node);
          } else {
            node.data = _strings[lastIndex];
          }
          partIndex += lastIndex;
        }
      } else if (node.nodeType === 8
    ) {
        if (node.data === marker) {
          var _parent = node.parentNode;
          if (node.previousSibling === null || index === lastPartIndex) {
            index++;
            _parent.insertBefore(createMarker(), node);
          }
          lastPartIndex = index;
          this.parts.push({
            type: 'node',
            index: index
          });
          if (node.nextSibling === null) {
            node.data = '';
          } else {
            nodesToRemove.push(node);
            index--;
          }
          partIndex++;
        } else {
          var _i2 = -1;
          while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
            this.parts.push({
              type: 'node',
              index: -1
            });
            partIndex++;
          }
        }
      }
  }
  for (var _i3 = 0, _nodesToRemove = nodesToRemove; _i3 < _nodesToRemove.length; _i3++) {
    var n = _nodesToRemove[_i3];
    n.parentNode.removeChild(n);
  }
};
var endsWith = function endsWith(str, suffix) {
  var index = str.length - suffix.length;
  return index >= 0 && str.slice(index) === suffix;
};
var isTemplatePartActive = function isTemplatePartActive(part) {
  return part.index !== -1;
};
var createMarker = function createMarker() {
  return document.createComment('');
};
var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

var TemplateInstance =
function () {
  function TemplateInstance(template, processor, options) {
    _classCallCheck(this, TemplateInstance);
    this.__parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }
  _createClass(TemplateInstance, [{
    key: "update",
    value: function update(values) {
      var i = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;
      try {
        for (var _iterator = this.__parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var part = _step.value;
          if (part !== undefined) {
            part.setValue(values[i]);
          }
          i++;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;
      try {
        for (var _iterator2 = this.__parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _part = _step2.value;
          if (_part !== undefined) {
            _part.commit();
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "_clone",
    value: function _clone() {
      var fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
      var stack = [];
      var parts = this.template.parts;
      var walker = document.createTreeWalker(fragment, 133
      , null, false);
      var partIndex = 0;
      var nodeIndex = 0;
      var part;
      var node = walker.nextNode();
      while (partIndex < parts.length) {
        part = parts[partIndex];
        if (!isTemplatePartActive(part)) {
          this.__parts.push(undefined);
          partIndex++;
          continue;
        }
        while (nodeIndex < part.index) {
          nodeIndex++;
          if (node.nodeName === 'TEMPLATE') {
            stack.push(node);
            walker.currentNode = node.content;
          }
          if ((node = walker.nextNode()) === null) {
            walker.currentNode = stack.pop();
            node = walker.nextNode();
          }
        }
        if (part.type === 'node') {
          var _part2 = this.processor.handleTextExpression(this.options);
          _part2.insertAfterNode(node.previousSibling);
          this.__parts.push(_part2);
        } else {
          var _this$__parts;
          (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options)));
        }
        partIndex++;
      }
      if (isCEPolyfill) {
        document.adoptNode(fragment);
        customElements.upgrade(fragment);
      }
      return fragment;
    }
  }]);
  return TemplateInstance;
}();

var commentMarker = " ".concat(marker, " ");
var TemplateResult =
function () {
  function TemplateResult(strings, values, type, processor) {
    _classCallCheck(this, TemplateResult);
    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  _createClass(TemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      var l = this.strings.length - 1;
      var html = '';
      var isCommentBinding = false;
      for (var i = 0; i < l; i++) {
        var s = this.strings[i];
        var commentOpen = s.lastIndexOf('<!--');
        isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1;
        var attributeMatch = lastAttributeNameRegex.exec(s);
        if (attributeMatch === null) {
          html += s + (isCommentBinding ? commentMarker : nodeMarker);
        } else {
          html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
        }
      }
      html += this.strings[l];
      return html;
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = document.createElement('template');
      template.innerHTML = this.getHTML();
      return template;
    }
  }]);
  return TemplateResult;
}();
var SVGTemplateResult =
function (_TemplateResult) {
  _inherits(SVGTemplateResult, _TemplateResult);
  function SVGTemplateResult() {
    _classCallCheck(this, SVGTemplateResult);
    return _possibleConstructorReturn(this, _getPrototypeOf(SVGTemplateResult).apply(this, arguments));
  }
  _createClass(SVGTemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      return "<svg>".concat(_get(_getPrototypeOf(SVGTemplateResult.prototype), "getHTML", this).call(this), "</svg>");
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = _get(_getPrototypeOf(SVGTemplateResult.prototype), "getTemplateElement", this).call(this);
      var content = template.content;
      var svgElement = content.firstChild;
      content.removeChild(svgElement);
      reparentNodes(content, svgElement.firstChild);
      return template;
    }
  }]);
  return SVGTemplateResult;
}(TemplateResult);

var isPrimitive = function isPrimitive(value) {
  return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
};
var isIterable = function isIterable(value) {
  return Array.isArray(value) ||
  !!(value && value[Symbol.iterator]);
};
var AttributeCommitter =
function () {
  function AttributeCommitter(element, name, strings) {
    _classCallCheck(this, AttributeCommitter);
    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];
    for (var i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  _createClass(AttributeCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new AttributePart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      var strings = this.strings;
      var l = strings.length - 1;
      var text = '';
      for (var i = 0; i < l; i++) {
        text += strings[i];
        var part = this.parts[i];
        if (part !== undefined) {
          var v = part.value;
          if (isPrimitive(v) || !isIterable(v)) {
            text += typeof v === 'string' ? v : String(v);
          } else {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
            try {
              for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var t = _step.value;
                text += typeof t === 'string' ? t : String(t);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }
      }
      text += strings[l];
      return text;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element.setAttribute(this.name, this._getValue());
      }
    }
  }]);
  return AttributeCommitter;
}();
var AttributePart =
function () {
  function AttributePart(committer) {
    _classCallCheck(this, AttributePart);
    this.value = undefined;
    this.committer = committer;
  }
  _createClass(AttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
        this.value = value;
        if (!isDirective(value)) {
          this.committer.dirty = true;
        }
      }
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this.value)) {
        var directive = this.value;
        this.value = noChange;
        directive(this);
      }
      if (this.value === noChange) {
        return;
      }
      this.committer.commit();
    }
  }]);
  return AttributePart;
}();
var NodePart =
function () {
  function NodePart(options) {
    _classCallCheck(this, NodePart);
    this.value = undefined;
    this.__pendingValue = undefined;
    this.options = options;
  }
  _createClass(NodePart, [{
    key: "appendInto",
    value: function appendInto(container) {
      this.startNode = container.appendChild(createMarker());
      this.endNode = container.appendChild(createMarker());
    }
  }, {
    key: "insertAfterNode",
    value: function insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
    }
  }, {
    key: "appendIntoPart",
    value: function appendIntoPart(part) {
      part.__insert(this.startNode = createMarker());
      part.__insert(this.endNode = createMarker());
    }
  }, {
    key: "insertAfterPart",
    value: function insertAfterPart(ref) {
      ref.__insert(this.startNode = createMarker());
      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = noChange;
        directive(this);
      }
      var value = this.__pendingValue;
      if (value === noChange) {
        return;
      }
      if (isPrimitive(value)) {
        if (value !== this.value) {
          this.__commitText(value);
        }
      } else if (value instanceof TemplateResult) {
        this.__commitTemplateResult(value);
      } else if (value instanceof Node) {
        this.__commitNode(value);
      } else if (isIterable(value)) {
        this.__commitIterable(value);
      } else if (value === nothing) {
        this.value = nothing;
        this.clear();
      } else {
        this.__commitText(value);
      }
    }
  }, {
    key: "__insert",
    value: function __insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
  }, {
    key: "__commitNode",
    value: function __commitNode(value) {
      if (this.value === value) {
        return;
      }
      this.clear();
      this.__insert(value);
      this.value = value;
    }
  }, {
    key: "__commitText",
    value: function __commitText(value) {
      var node = this.startNode.nextSibling;
      value = value == null ? '' : value;
      var valueAsString = typeof value === 'string' ? value : String(value);
      if (node === this.endNode.previousSibling && node.nodeType === 3
      ) {
          node.data = valueAsString;
        } else {
        this.__commitNode(document.createTextNode(valueAsString));
      }
      this.value = value;
    }
  }, {
    key: "__commitTemplateResult",
    value: function __commitTemplateResult(value) {
      var template = this.options.templateFactory(value);
      if (this.value instanceof TemplateInstance && this.value.template === template) {
        this.value.update(value.values);
      } else {
        var instance = new TemplateInstance(template, value.processor, this.options);
        var fragment = instance._clone();
        instance.update(value.values);
        this.__commitNode(fragment);
        this.value = instance;
      }
    }
  }, {
    key: "__commitIterable",
    value: function __commitIterable(value) {
      if (!Array.isArray(this.value)) {
        this.value = [];
        this.clear();
      }
      var itemParts = this.value;
      var partIndex = 0;
      var itemPart;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;
      try {
        for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          itemPart = itemParts[partIndex];
          if (itemPart === undefined) {
            itemPart = new NodePart(this.options);
            itemParts.push(itemPart);
            if (partIndex === 0) {
              itemPart.appendIntoPart(this);
            } else {
              itemPart.insertAfterPart(itemParts[partIndex - 1]);
            }
          }
          itemPart.setValue(item);
          itemPart.commit();
          partIndex++;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
      if (partIndex < itemParts.length) {
        itemParts.length = partIndex;
        this.clear(itemPart && itemPart.endNode);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
      removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
  }]);
  return NodePart;
}();
var BooleanAttributePart =
function () {
  function BooleanAttributePart(element, name, strings) {
    _classCallCheck(this, BooleanAttributePart);
    this.value = undefined;
    this.__pendingValue = undefined;
    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }
    this.element = element;
    this.name = name;
    this.strings = strings;
  }
  _createClass(BooleanAttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = noChange;
        directive(this);
      }
      if (this.__pendingValue === noChange) {
        return;
      }
      var value = !!this.__pendingValue;
      if (this.value !== value) {
        if (value) {
          this.element.setAttribute(this.name, '');
        } else {
          this.element.removeAttribute(this.name);
        }
        this.value = value;
      }
      this.__pendingValue = noChange;
    }
  }]);
  return BooleanAttributePart;
}();
var PropertyCommitter =
function (_AttributeCommitter) {
  _inherits(PropertyCommitter, _AttributeCommitter);
  function PropertyCommitter(element, name, strings) {
    var _this;
    _classCallCheck(this, PropertyCommitter);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyCommitter).call(this, element, name, strings));
    _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
    return _this;
  }
  _createClass(PropertyCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new PropertyPart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      if (this.single) {
        return this.parts[0].value;
      }
      return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element[this.name] = this._getValue();
      }
    }
  }]);
  return PropertyCommitter;
}(AttributeCommitter);
var PropertyPart =
function (_AttributePart) {
  _inherits(PropertyPart, _AttributePart);
  function PropertyPart() {
    _classCallCheck(this, PropertyPart);
    return _possibleConstructorReturn(this, _getPrototypeOf(PropertyPart).apply(this, arguments));
  }
  return PropertyPart;
}(AttributePart);
var eventOptionsSupported = false;
try {
  var options = {
    get capture() {
      eventOptionsSupported = true;
      return false;
    }
  };
  window.addEventListener('test', options, options);
  window.removeEventListener('test', options, options);
} catch (_e) {}
var EventPart =
function () {
  function EventPart(element, eventName, eventContext) {
    var _this2 = this;
    _classCallCheck(this, EventPart);
    this.value = undefined;
    this.__pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;
    this.__boundHandleEvent = function (e) {
      return _this2.handleEvent(e);
    };
  }
  _createClass(EventPart, [{
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = noChange;
        directive(this);
      }
      if (this.__pendingValue === noChange) {
        return;
      }
      var newListener = this.__pendingValue;
      var oldListener = this.value;
      var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
      var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
      if (shouldRemoveListener) {
        this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }
      if (shouldAddListener) {
        this.__options = getOptions(newListener);
        this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }
      this.value = newListener;
      this.__pendingValue = noChange;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (typeof this.value === 'function') {
        this.value.call(this.eventContext || this.element, event);
      } else {
        this.value.handleEvent(event);
      }
    }
  }]);
  return EventPart;
}();
var getOptions = function getOptions(o) {
  return o && (eventOptionsSupported ? {
    capture: o.capture,
    passive: o.passive,
    once: o.once
  } : o.capture);
};

var DefaultTemplateProcessor =
function () {
  function DefaultTemplateProcessor() {
    _classCallCheck(this, DefaultTemplateProcessor);
  }
  _createClass(DefaultTemplateProcessor, [{
    key: "handleAttributeExpressions",
    value: function handleAttributeExpressions(element, name, strings, options) {
      var prefix = name[0];
      if (prefix === '.') {
        var _committer = new PropertyCommitter(element, name.slice(1), strings);
        return _committer.parts;
      }
      if (prefix === '@') {
        return [new EventPart(element, name.slice(1), options.eventContext)];
      }
      if (prefix === '?') {
        return [new BooleanAttributePart(element, name.slice(1), strings)];
      }
      var committer = new AttributeCommitter(element, name, strings);
      return committer.parts;
    }
  }, {
    key: "handleTextExpression",
    value: function handleTextExpression(options) {
      return new NodePart(options);
    }
  }]);
  return DefaultTemplateProcessor;
}();
var defaultTemplateProcessor = new DefaultTemplateProcessor();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function templateFactory(result) {
  var templateCache = templateCaches.get(result.type);
  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }
  var template = templateCache.stringsArray.get(result.strings);
  if (template !== undefined) {
    return template;
  }
  var key = result.strings.join(marker);
  template = templateCache.keyString.get(key);
  if (template === undefined) {
    template = new Template(result, result.getTemplateElement());
    templateCache.keyString.set(key, template);
  }
  templateCache.stringsArray.set(result.strings, template);
  return template;
}
var templateCaches = new Map();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var parts = new WeakMap();
var render = function render(result, container, options) {
  var part = parts.get(container);
  if (part === undefined) {
    removeNodes(container, container.firstChild);
    parts.set(container, part = new NodePart(Object.assign({
      templateFactory: templateFactory
    }, options)));
    part.appendInto(container);
  }
  part.setValue(result);
  part.commit();
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.1.2');
var html = function html(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }
  return new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var walkerNodeFilter = 133
;
function removeNodesFromTemplate(template, nodesToRemove) {
  var content = template.element.content,
      parts = template.parts;
  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var part = parts[partIndex];
  var nodeIndex = -1;
  var removeCount = 0;
  var nodesToRemoveInTemplate = [];
  var currentRemovingNode = null;
  while (walker.nextNode()) {
    nodeIndex++;
    var node = walker.currentNode;
    if (node.previousSibling === currentRemovingNode) {
      currentRemovingNode = null;
    }
    if (nodesToRemove.has(node)) {
      nodesToRemoveInTemplate.push(node);
      if (currentRemovingNode === null) {
        currentRemovingNode = node;
      }
    }
    if (currentRemovingNode !== null) {
      removeCount++;
    }
    while (part !== undefined && part.index === nodeIndex) {
      part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      part = parts[partIndex];
    }
  }
  nodesToRemoveInTemplate.forEach(function (n) {
    return n.parentNode.removeChild(n);
  });
}
var countNodes = function countNodes(node) {
  var count = node.nodeType === 11
  ? 0 : 1;
  var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
  while (walker.nextNode()) {
    count++;
  }
  return count;
};
var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  for (var i = startIndex + 1; i < parts.length; i++) {
    var part = parts[i];
    if (isTemplatePartActive(part)) {
      return i;
    }
  }
  return -1;
};
function insertNodeIntoTemplate(template, node) {
  var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var content = template.element.content,
      parts = template.parts;
  if (refNode === null || refNode === undefined) {
    content.appendChild(node);
    return;
  }
  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var insertCount = 0;
  var walkerIndex = -1;
  while (walker.nextNode()) {
    walkerIndex++;
    var walkerNode = walker.currentNode;
    if (walkerNode === refNode) {
      insertCount = countNodes(node);
      refNode.parentNode.insertBefore(node, refNode);
    }
    while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
      if (insertCount > 0) {
        while (partIndex !== -1) {
          parts[partIndex].index += insertCount;
          partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }
        return;
      }
      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
    }
  }
}

var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
  return "".concat(type, "--").concat(scopeName);
};
var compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === 'undefined') {
  compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
  console.warn("Incompatible ShadyCSS version detected. " + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and " + "@webcomponents/shadycss@1.3.1.");
  compatibleShadyCSSVersion = false;
}
var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
  return function (result) {
    var cacheKey = getTemplateCacheKey(result.type, scopeName);
    var templateCache = templateCaches.get(cacheKey);
    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      templateCaches.set(cacheKey, templateCache);
    }
    var template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
      return template;
    }
    var key = result.strings.join(marker);
    template = templateCache.keyString.get(key);
    if (template === undefined) {
      var element = result.getTemplateElement();
      if (compatibleShadyCSSVersion) {
        window.ShadyCSS.prepareTemplateDom(element, scopeName);
      }
      template = new Template(result, element);
      templateCache.keyString.set(key, template);
    }
    templateCache.stringsArray.set(result.strings, template);
    return template;
  };
};
var TEMPLATE_TYPES = ['html', 'svg'];
var removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
  TEMPLATE_TYPES.forEach(function (type) {
    var templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
    if (templates !== undefined) {
      templates.keyString.forEach(function (template) {
        var content = template.element.content;
        var styles = new Set();
        Array.from(content.querySelectorAll('style')).forEach(function (s) {
          styles.add(s);
        });
        removeNodesFromTemplate(template, styles);
      });
    }
  });
};
var shadyRenderSet = new Set();
var prepareTemplateStyles = function prepareTemplateStyles(scopeName, renderedDOM, template) {
  shadyRenderSet.add(scopeName);
  var templateElement = !!template ? template.element : document.createElement('template');
  var styles = renderedDOM.querySelectorAll('style');
  var length = styles.length;
  if (length === 0) {
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    return;
  }
  var condensedStyle = document.createElement('style');
  for (var i = 0; i < length; i++) {
    var _style = styles[i];
    _style.parentNode.removeChild(_style);
    condensedStyle.textContent += _style.textContent;
  }
  removeStylesFromLitTemplates(scopeName);
  var content = templateElement.content;
  if (!!template) {
    insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
  } else {
    content.insertBefore(condensedStyle, content.firstChild);
  }
  window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
  var style = content.querySelector('style');
  if (window.ShadyCSS.nativeShadow && style !== null) {
    renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
  } else if (!!template) {
    content.insertBefore(condensedStyle, content.firstChild);
    var removes = new Set();
    removes.add(condensedStyle);
    removeNodesFromTemplate(template, removes);
  }
};
var render$1 = function render$1(result, container, options) {
  if (!options || _typeof(options) !== 'object' || !options.scopeName) {
    throw new Error('The `scopeName` option is required.');
  }
  var scopeName = options.scopeName;
  var hasRendered = parts.has(container);
  var needsScoping = compatibleShadyCSSVersion && container.nodeType === 11
  && !!container.host;
  var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
  var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
  render(result, renderContainer, Object.assign({
    templateFactory: shadyTemplateFactory(scopeName)
  }, options));
  if (firstScopeRender) {
    var part = parts.get(renderContainer);
    parts["delete"](renderContainer);
    var template = part.value instanceof TemplateInstance ? part.value.template : undefined;
    prepareTemplateStyles(scopeName, renderContainer, template);
    removeNodes(container, container.firstChild);
    container.appendChild(renderContainer);
    parts.set(container, part);
  }
  if (!hasRendered && needsScoping) {
    window.ShadyCSS.styleElement(container.host);
  }
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var _a;
window.JSCompiler_renameProperty = function (prop, _obj) {
  return prop;
};
var defaultConverter = {
  toAttribute: function toAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value ? '' : null;
      case Object:
      case Array:
        return value == null ? value : JSON.stringify(value);
    }
    return value;
  },
  fromAttribute: function fromAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value !== null;
      case Number:
        return value === null ? null : Number(value);
      case Object:
      case Array:
        return JSON.parse(value);
    }
    return value;
  }
};
var notEqual = function notEqual(value, old) {
  return old !== value && (old === old || value === value);
};
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
var microtaskPromise = Promise.resolve(true);
var STATE_HAS_UPDATED = 1;
var STATE_UPDATE_REQUESTED = 1 << 2;
var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
var STATE_HAS_CONNECTED = 1 << 5;
var finalized = 'finalized';
var UpdatingElement =
function (_HTMLElement) {
  _inherits(UpdatingElement, _HTMLElement);
  function UpdatingElement() {
    var _this;
    _classCallCheck(this, UpdatingElement);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(UpdatingElement).call(this));
    _this._updateState = 0;
    _this._instanceProperties = undefined;
    _this._updatePromise = microtaskPromise;
    _this._hasConnectedResolver = undefined;
    _this._changedProperties = new Map();
    _this._reflectingProperties = undefined;
    _this.initialize();
    return _this;
  }
  _createClass(UpdatingElement, [{
    key: "initialize",
    value: function initialize() {
      this._saveInstanceProperties();
      this._requestUpdate();
    }
  }, {
    key: "_saveInstanceProperties",
    value: function _saveInstanceProperties() {
      var _this2 = this;
      this.constructor._classProperties.forEach(function (_v, p) {
        if (_this2.hasOwnProperty(p)) {
          var value = _this2[p];
          delete _this2[p];
          if (!_this2._instanceProperties) {
            _this2._instanceProperties = new Map();
          }
          _this2._instanceProperties.set(p, value);
        }
      });
    }
  }, {
    key: "_applyInstanceProperties",
    value: function _applyInstanceProperties() {
      var _this3 = this;
      this._instanceProperties.forEach(function (v, p) {
        return _this3[p] = v;
      });
      this._instanceProperties = undefined;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this._updateState = this._updateState | STATE_HAS_CONNECTED;
      if (this._hasConnectedResolver) {
        this._hasConnectedResolver();
        this._hasConnectedResolver = undefined;
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, old, value) {
      if (old !== value) {
        this._attributeToProperty(name, value);
      }
    }
  }, {
    key: "_propertyToAttribute",
    value: function _propertyToAttribute(name, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPropertyDeclaration;
      var ctor = this.constructor;
      var attr = ctor._attributeNameForProperty(name, options);
      if (attr !== undefined) {
        var attrValue = ctor._propertyValueToAttribute(value, options);
        if (attrValue === undefined) {
          return;
        }
        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
        if (attrValue == null) {
          this.removeAttribute(attr);
        } else {
          this.setAttribute(attr, attrValue);
        }
        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
      }
    }
  }, {
    key: "_attributeToProperty",
    value: function _attributeToProperty(name, value) {
      if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
        return;
      }
      var ctor = this.constructor;
      var propName = ctor._attributeToPropertyMap.get(name);
      if (propName !== undefined) {
        var options = ctor._classProperties.get(propName) || defaultPropertyDeclaration;
        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
        this[propName] =
        ctor._propertyValueFromAttribute(value, options);
        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
      }
    }
  }, {
    key: "_requestUpdate",
    value: function _requestUpdate(name, oldValue) {
      var shouldRequestUpdate = true;
      if (name !== undefined) {
        var ctor = this.constructor;
        var options = ctor._classProperties.get(name) || defaultPropertyDeclaration;
        if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
          if (!this._changedProperties.has(name)) {
            this._changedProperties.set(name, oldValue);
          }
          if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
            if (this._reflectingProperties === undefined) {
              this._reflectingProperties = new Map();
            }
            this._reflectingProperties.set(name, options);
          }
        } else {
          shouldRequestUpdate = false;
        }
      }
      if (!this._hasRequestedUpdate && shouldRequestUpdate) {
        this._enqueueUpdate();
      }
    }
  }, {
    key: "requestUpdate",
    value: function requestUpdate(name, oldValue) {
      this._requestUpdate(name, oldValue);
      return this.updateComplete;
    }
  }, {
    key: "_enqueueUpdate",
    value: function () {
      var _enqueueUpdate2 = _asyncToGenerator(
      regeneratorRuntime.mark(function _callee() {
        var _this4 = this;
        var resolve, reject, previousUpdatePromise, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                previousUpdatePromise = this._updatePromise;
                this._updatePromise = new Promise(function (res, rej) {
                  resolve = res;
                  reject = rej;
                });
                _context.prev = 3;
                _context.next = 6;
                return previousUpdatePromise;
              case 6:
                _context.next = 10;
                break;
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](3);
              case 10:
                if (this._hasConnected) {
                  _context.next = 13;
                  break;
                }
                _context.next = 13;
                return new Promise(function (res) {
                  return _this4._hasConnectedResolver = res;
                });
              case 13:
                _context.prev = 13;
                result = this.performUpdate();
                if (!(result != null)) {
                  _context.next = 18;
                  break;
                }
                _context.next = 18;
                return result;
              case 18:
                _context.next = 23;
                break;
              case 20:
                _context.prev = 20;
                _context.t1 = _context["catch"](13);
                reject(_context.t1);
              case 23:
                resolve(!this._hasRequestedUpdate);
              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 8], [13, 20]]);
      }));
      function _enqueueUpdate() {
        return _enqueueUpdate2.apply(this, arguments);
      }
      return _enqueueUpdate;
    }()
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      if (this._instanceProperties) {
        this._applyInstanceProperties();
      }
      var shouldUpdate = false;
      var changedProperties = this._changedProperties;
      try {
        shouldUpdate = this.shouldUpdate(changedProperties);
        if (shouldUpdate) {
          this.update(changedProperties);
        }
      } catch (e) {
        shouldUpdate = false;
        throw e;
      } finally {
        this._markUpdated();
      }
      if (shouldUpdate) {
        if (!(this._updateState & STATE_HAS_UPDATED)) {
          this._updateState = this._updateState | STATE_HAS_UPDATED;
          this.firstUpdated(changedProperties);
        }
        this.updated(changedProperties);
      }
    }
  }, {
    key: "_markUpdated",
    value: function _markUpdated() {
      this._changedProperties = new Map();
      this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
  }, {
    key: "_getUpdateComplete",
    value: function _getUpdateComplete() {
      return this._updatePromise;
    }
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(_changedProperties) {
      return true;
    }
  }, {
    key: "update",
    value: function update(_changedProperties) {
      var _this5 = this;
      if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
        this._reflectingProperties.forEach(function (v, k) {
          return _this5._propertyToAttribute(k, _this5[k], v);
        });
        this._reflectingProperties = undefined;
      }
    }
  }, {
    key: "updated",
    value: function updated(_changedProperties) {}
  }, {
    key: "firstUpdated",
    value: function firstUpdated(_changedProperties) {}
  }, {
    key: "_hasConnected",
    get: function get() {
      return this._updateState & STATE_HAS_CONNECTED;
    }
  }, {
    key: "_hasRequestedUpdate",
    get: function get() {
      return this._updateState & STATE_UPDATE_REQUESTED;
    }
  }, {
    key: "hasUpdated",
    get: function get() {
      return this._updateState & STATE_HAS_UPDATED;
    }
  }, {
    key: "updateComplete",
    get: function get() {
      return this._getUpdateComplete();
    }
  }], [{
    key: "_ensureClassProperties",
    value: function _ensureClassProperties() {
      var _this6 = this;
      if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
        this._classProperties = new Map();
        var superProperties = Object.getPrototypeOf(this)._classProperties;
        if (superProperties !== undefined) {
          superProperties.forEach(function (v, k) {
            return _this6._classProperties.set(k, v);
          });
        }
      }
    }
  }, {
    key: "createProperty",
    value: function createProperty(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropertyDeclaration;
      this._ensureClassProperties();
      this._classProperties.set(name, options);
      if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
        return;
      }
      var key = _typeof(name) === 'symbol' ? Symbol() : "__".concat(name);
      Object.defineProperty(this.prototype, name, {
        get: function get() {
          return this[key];
        },
        set: function set(value) {
          var oldValue = this[name];
          this[key] = value;
          this._requestUpdate(name, oldValue);
        },
        configurable: true,
        enumerable: true
      });
    }
  }, {
    key: "finalize",
    value: function finalize() {
      var superCtor = Object.getPrototypeOf(this);
      if (!superCtor.hasOwnProperty(finalized)) {
        superCtor.finalize();
      }
      this[finalized] = true;
      this._ensureClassProperties();
      this._attributeToPropertyMap = new Map();
      if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
        var props = this.properties;
        var propKeys = [].concat(_toConsumableArray(Object.getOwnPropertyNames(props)), _toConsumableArray(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : []));
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
          for (var _iterator = propKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var p = _step.value;
            this.createProperty(p, props[p]);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: "_attributeNameForProperty",
    value: function _attributeNameForProperty(name, options) {
      var attribute = options.attribute;
      return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
    }
  }, {
    key: "_valueHasChanged",
    value: function _valueHasChanged(value, old) {
      var hasChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notEqual;
      return hasChanged(value, old);
    }
  }, {
    key: "_propertyValueFromAttribute",
    value: function _propertyValueFromAttribute(value, options) {
      var type = options.type;
      var converter = options.converter || defaultConverter;
      var fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
      return fromAttribute ? fromAttribute(value, type) : value;
    }
  }, {
    key: "_propertyValueToAttribute",
    value: function _propertyValueToAttribute(value, options) {
      if (options.reflect === undefined) {
        return;
      }
      var type = options.type;
      var converter = options.converter;
      var toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
      return toAttribute(value, type);
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      var _this7 = this;
      this.finalize();
      var attributes = [];
      this._classProperties.forEach(function (v, p) {
        var attr = _this7._attributeNameForProperty(p, v);
        if (attr !== undefined) {
          _this7._attributeToPropertyMap.set(attr, p);
          attributes.push(attr);
        }
      });
      return attributes;
    }
  }]);
  return UpdatingElement;
}(_wrapNativeSuper(HTMLElement));
_a = finalized;
UpdatingElement[_a] = true;

/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var supportsAdoptingStyleSheets = 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
var constructionToken = Symbol();
var CSSResult =
function () {
  function CSSResult(cssText, safeToken) {
    _classCallCheck(this, CSSResult);
    if (safeToken !== constructionToken) {
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }
    this.cssText = cssText;
  }
  _createClass(CSSResult, [{
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }, {
    key: "styleSheet",
    get: function get() {
      if (this._styleSheet === undefined) {
        if (supportsAdoptingStyleSheets) {
          this._styleSheet = new CSSStyleSheet();
          this._styleSheet.replaceSync(this.cssText);
        } else {
          this._styleSheet = null;
        }
      }
      return this._styleSheet;
    }
  }]);
  return CSSResult;
}();
var textFromCSSResult = function textFromCSSResult(value) {
  if (value instanceof CSSResult) {
    return value.cssText;
  } else if (typeof value === 'number') {
    return value;
  } else {
    throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
  }
};
var css = function css(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }
  var cssText = values.reduce(function (acc, v, idx) {
    return acc + textFromCSSResult(v) + strings[idx + 1];
  }, strings[0]);
  return new CSSResult(cssText, constructionToken);
};

(window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.2.1');
function arrayFlat(styles) {
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  for (var i = 0, length = styles.length; i < length; i++) {
    var value = styles[i];
    if (Array.isArray(value)) {
      arrayFlat(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
}
var flattenStyles = function flattenStyles(styles) {
  return styles.flat ? styles.flat(Infinity) : arrayFlat(styles);
};
var LitElement =
function (_UpdatingElement) {
  _inherits(LitElement, _UpdatingElement);
  function LitElement() {
    _classCallCheck(this, LitElement);
    return _possibleConstructorReturn(this, _getPrototypeOf(LitElement).apply(this, arguments));
  }
  _createClass(LitElement, [{
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf(LitElement.prototype), "initialize", this).call(this);
      this.renderRoot = this.createRenderRoot();
      if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
        this.adoptStyles();
      }
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this.attachShadow({
        mode: 'open'
      });
    }
  }, {
    key: "adoptStyles",
    value: function adoptStyles() {
      var styles = this.constructor._styles;
      if (styles.length === 0) {
        return;
      }
      if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
        window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
          return s.cssText;
        }), this.localName);
      } else if (supportsAdoptingStyleSheets) {
        this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
          return s.styleSheet;
        });
      } else {
        this._needsShimAdoptedStyleSheets = true;
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this);
      if (this.hasUpdated && window.ShadyCSS !== undefined) {
        window.ShadyCSS.styleElement(this);
      }
    }
  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this = this;
      _get(_getPrototypeOf(LitElement.prototype), "update", this).call(this, changedProperties);
      var templateResult = this.render();
      if (templateResult instanceof TemplateResult) {
        this.constructor.render(templateResult, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this
        });
      }
      if (this._needsShimAdoptedStyleSheets) {
        this._needsShimAdoptedStyleSheets = false;
        this.constructor._styles.forEach(function (s) {
          var style = document.createElement('style');
          style.textContent = s.cssText;
          _this.renderRoot.appendChild(style);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {}
  }], [{
    key: "finalize",
    value: function finalize() {
      _get(_getPrototypeOf(LitElement), "finalize", this).call(this);
      this._styles = this.hasOwnProperty(JSCompiler_renameProperty('styles', this)) ? this._getUniqueStyles() : this._styles || [];
    }
  }, {
    key: "_getUniqueStyles",
    value: function _getUniqueStyles() {
      var userStyles = this.styles;
      var styles = [];
      if (Array.isArray(userStyles)) {
        var flatStyles = flattenStyles(userStyles);
        var styleSet = flatStyles.reduceRight(function (set, s) {
          set.add(s);
          return set;
        }, new Set());
        styleSet.forEach(function (v) {
          return styles.unshift(v);
        });
      } else if (userStyles) {
        styles.push(userStyles);
      }
      return styles;
    }
  }]);
  return LitElement;
}(UpdatingElement);
LitElement['finalized'] = true;
LitElement.render = render$1;

var styles = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .heading ::slotted(*){font-family:\"BG Flame Light\",sans-serif;margin-bottom:.4em}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature,:host .heading ::slotted(*){font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature,:host .heading ::slotted(*){font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature,:host .heading ::slotted(*){font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{display:block!important}:host .expand-holder{width:100%;border-bottom:1px solid #c8c9c7}";

var nsAccordion =
function (_LitElement) {
  _inherits(nsAccordion, _LitElement);
  function nsAccordion() {
    _classCallCheck(this, nsAccordion);
    return _possibleConstructorReturn(this, _getPrototypeOf(nsAccordion).apply(this, arguments));
  }
  _createClass(nsAccordion, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      this.setAttribute('role', 'tablist');
    }
  }, {
    key: "render",
    value: function render() {
      return html(["\n      <div class=\"heading\">\n        <slot name=\"heading\"></slot>\n      </div>\n      <div class=\"expand-holder\">\n        <slot></slot>\n      </div>\n    "]);
    }
  }], [{
    key: "styles",
    get: function get() {
      return css(["".concat(styles)]);
    }
  }]);
  return nsAccordion;
}(LitElement);
customElements.define('ns-accordion', nsAccordion);

var styles$1 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .card.flat .content .heading-holder ::slotted(*),:host .card.highlighter .content .heading-holder ::slotted(*),:host .card.nav .content .heading-holder ::slotted(*),:host .card.section .heading-holder ::slotted(*),:host .card.support .content .heading-holder ::slotted(*),:host [class*=basic-lockbox] .content .heading-holder ::slotted(*),:host [class*=basic-lockjaw] .content .heading-holder ::slotted(*){font-family:\"BG Flame Bold\",sans-serif;display:block;margin:inherit;padding:0}:host .card .content .paragraph-holder ::slotted(*),:host .card.flat .content .paragraph-holder ::slotted(*),:host .card.nav .content .paragraph-holder ::slotted(*),:host .card.section .paragraph-holder ::slotted(*),:host .card.support .content .paragraph-holder ::slotted(*),:host .card[class*=basic-lock] .content .paragraph-holder ::slotted(*),:host [class*=basic-lockjaw] .content .paragraph-holder ::slotted(*){font-family:\"BG Flame Light\",sans-serif;margin-bottom:.4em}:host .card.highlighter .content .paragraph-holder ::slotted(*),:host .card.nav .content .paragraph-holder ::slotted(*){font-family:\"BG Flame Regular\",sans-serif}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),:host [class*=basic-lockbox] .content .heading-holder ::slotted(*),:host [class*=basic-lockjaw] .content .heading-holder ::slotted(*),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),:host [class*=basic-lockbox] .content .heading-holder ::slotted(*),:host [class*=basic-lockjaw] .content .heading-holder ::slotted(*),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),:host [class*=basic-lockbox] .content .heading-holder ::slotted(*),:host [class*=basic-lockjaw] .content .heading-holder ::slotted(*),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),:host .card.section .heading-holder ::slotted(*),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),:host .card.section .heading-holder ::slotted(*),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),:host .card.section .heading-holder ::slotted(*),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),:host .card.flat .content .heading-holder ::slotted(*),:host .card.nav .content .heading-holder ::slotted(*),:host .card.support .content .heading-holder ::slotted(*),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),:host .card.flat .content .heading-holder ::slotted(*),:host .card.nav .content .heading-holder ::slotted(*),:host .card.support .content .heading-holder ::slotted(*),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),:host .card.flat .content .heading-holder ::slotted(*),:host .card.nav .content .heading-holder ::slotted(*),:host .card.support .content .heading-holder ::slotted(*),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),:host .card.highlighter .content .heading-holder ::slotted(*),:host .card.nav .content .heading-holder ::slotted(*),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),:host .card.highlighter .content .heading-holder ::slotted(*),:host .card.nav .content .heading-holder ::slotted(*),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),:host .card.highlighter .content .heading-holder ::slotted(*),:host .card.nav .content .heading-holder ::slotted(*),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal,:host .card .content .paragraph-holder ::slotted(*),:host .card.flat .content .paragraph-holder ::slotted(*),:host .card.nav .content .paragraph-holder ::slotted(*),:host .card.section .paragraph-holder ::slotted(*),:host .card.support .content .paragraph-holder ::slotted(*),:host .card[class*=basic-lock] .content .paragraph-holder ::slotted(*),:host [class*=basic-lockjaw] .content .paragraph-holder ::slotted(*){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal,:host .card .content .paragraph-holder ::slotted(*),:host .card.flat .content .paragraph-holder ::slotted(*),:host .card.nav .content .paragraph-holder ::slotted(*),:host .card.section .paragraph-holder ::slotted(*),:host .card.support .content .paragraph-holder ::slotted(*),:host .card[class*=basic-lock] .content .paragraph-holder ::slotted(*),:host [class*=basic-lockjaw] .content .paragraph-holder ::slotted(*){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal,:host .card .content .paragraph-holder ::slotted(*),:host .card.flat .content .paragraph-holder ::slotted(*),:host .card.nav .content .paragraph-holder ::slotted(*),:host .card.section .paragraph-holder ::slotted(*),:host .card.support .content .paragraph-holder ::slotted(*),:host .card[class*=basic-lock] .content .paragraph-holder ::slotted(*),:host [class*=basic-lockjaw] .content .paragraph-holder ::slotted(*){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small,:host .card.highlighter .content .paragraph-holder ::slotted(*),:host .card.nav .content .paragraph-holder ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small,:host .card.highlighter .content .paragraph-holder ::slotted(*),:host .card.nav .content .paragraph-holder ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small,:host .card.highlighter .content .paragraph-holder ::slotted(*),:host .card.nav .content .paragraph-holder ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{width:100%;display:-ms-grid;display:grid}:host([decoration=info]) .highlighter{color:#209cee}:host([decoration=success]) .highlighter{color:#23d160}:host([decoration=warning]) .highlighter{color:#e3660e}:host([decoration=error]) .highlighter{color:#eb002f}:host .card{background-color:#fff;color:#333f48}:host .card .illustration-holder ns-illustration{display:block}:host .card[class*=basic-] .content .heading-holder ::slotted(*){font-size:1em}:host .card[class*=basic-lock] .content .heading-holder ::slotted(*){max-width:none}:host .card.highlighter{position:relative;border-radius:0 0 1em;background-clip:padding-box;-webkit-box-shadow:0 .5em 1.5em 0 rgba(51,63,72,.15);box-shadow:0 .5em 1.5em 0 rgba(51,63,72,.15);padding:1em 1em 1em 1.5em}:host .card.highlighter::before{background-color:currentColor;position:absolute;content:\"\";width:.5em;left:0;top:0;bottom:0;z-index:1}:host .card.highlighter .icon-holder{float:right;width:2.0736em;height:2.0736em}:host .card.highlighter .content{color:#333f48}:host .card.highlighter .content .paragraph-holder ::slotted(:last-child){margin-bottom:0!important}@media only screen and (min-width:480px){:host .card.highlighter{padding-left:1em;display:-ms-grid;display:grid;-ms-grid-columns:-webkit-min-content 1fr;-ms-grid-columns:min-content 1fr;grid-template-columns:-webkit-min-content 1fr;grid-template-columns:min-content 1fr;grid-template-areas:\"a b\" \". c\"}:host .card.highlighter .icon-holder{margin-top:-.25em;margin-right:0;margin-left:.71191406em;float:none;-webkit-transform:none;transform:none;grid-area:a}:host .card.highlighter .content{padding-left:.71191406em;grid-area:b}}@media only screen and (min-width:720px){:host .card.highlighter{width:66%;padding:1em}:host .card.highlighter .icon-holder{margin-top:-.16666667em;width:2.0736em;height:2.0736em}:host .card.highlighter .content{padding-left:.864em}}@media only screen and (min-width:1620px){:host .card.highlighter{padding:1.74692811em 1.74692811em 1.74692811em 1em}:host .card.highlighter .icon-holder{width:2.44140625em;height:2.44140625em}}:host .card.section{margin-top:1.42382813em;border-radius:0 0 1em;background-clip:padding-box;-webkit-box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);padding:1em 1em 1em 5.3%}:host .card.section .illustration-holder{float:right;-webkit-transform:translateX(33.3%);transform:translateX(33.3%);margin-top:-2.84765625em;margin-right:-.71191406em;width:5.6953125em;height:5.6953125em}@media only screen and (min-width:480px){:host .card.section{padding:1em;display:-ms-grid;display:grid;-ms-grid-columns:-webkit-min-content 1fr;-ms-grid-columns:min-content 1fr;grid-template-columns:-webkit-min-content 1fr;grid-template-columns:min-content 1fr;grid-template-areas:\"a b\" \". c\"}:host .card.section .illustration-holder{margin-right:0;margin-left:-.71191406em;float:none;-webkit-transform:none;transform:none;grid-area:a}:host .card.section .content{padding-left:.71191406em;grid-area:b}:host .card.section>.icon-holder{-ms-grid-row:1;-ms-grid-column:1}:host .card.highlighter .icon-holder{-ms-grid-row:1;-ms-grid-column:1}:host .card.highlighter .content{-ms-grid-row:1;-ms-grid-column:2}:host .card.section .illustration-holder{-ms-grid-row:1;-ms-grid-column:1}:host .card.section>.illustration-holder{-ms-grid-row:1;-ms-grid-column:1}:host .card.section .content{-ms-grid-row:1;-ms-grid-column:2}:host .card.section>.content{-ms-grid-row:1;-ms-grid-column:2}:host .card.section .cta-holder{grid-area:c;-ms-grid-row-align:end;align-self:end;margin-bottom:-2em;padding-left:.71191406em;-ms-grid-row:2;-ms-grid-column:2}:host .card.section>.cta-holder{-ms-grid-row:2;-ms-grid-column:2}}@media only screen and (min-width:720px){:host .card.section{margin-top:1.728em;padding:1.31453414em;border-radius:0 1em 1em;background-clip:padding-box}:host .card.section .illustration-holder{margin-top:-3.456em;margin-right:.864em;margin-left:-.864em;width:6.912em;height:6.912em}:host .card.section .content{padding-left:0;padding-bottom:.864em}:host .card.section .cta-holder{padding-left:0;margin-bottom:-2.62906828em}}@media only screen and (min-width:1080px) and (max-width:1619px){:host .card.section{display:block;position:relative;border-radius:0 .5em .5em;background-clip:padding-box}:host .card.section .illustration-holder{float:right;margin:-3.456em -1.728em .65726707em .65726707em}:host .card.section .cta-holder{position:absolute;bottom:0;margin-bottom:-1.728em}}@media only screen and (min-width:1620px){:host .card.section{margin-top:1.953125em;padding:1.74692811em 1.74692811em 1.74692811em 0}:host .card.section .illustration-holder{margin-top:-3.90625em;margin-right:.9765625em;margin-left:.9765625em;width:7.8125em;height:7.8125em}:host .card.section .cta-holder{margin-bottom:-3.49385621em}}:host .card.support{-webkit-box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);box-shadow:0 .75em 3em 0 rgba(51,63,72,.15)}:host .card.support .image-holder .img{display:block;width:100%}@media only screen and (min-width:0){:host .card.support{border-radius:0 0 1em;background-clip:padding-box}:host .card.support .content{padding:1em}}@media only screen and (min-width:480px){:host .card.support{border-radius:0 0 .5em;background-clip:padding-box}}@media only screen and (min-width:1080px){:host .card.highlighter{width:50%}:host .card.support.has-image{-ms-grid-rows:auto 1fr;grid-template-rows:auto 1fr}:host .card.support .content{padding:1.74692811em}:host .card.flat,:host .card.nav,:host .card.support{-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-rows:1fr;grid-template-rows:1fr}}@media only screen and (min-width:720px) and (max-width:1079px){:host .card.support.has-image{background-color:transparent;-ms-grid-columns:50% 1fr;grid-template-columns:50% 1fr;-webkit-box-shadow:unset;box-shadow:unset}:host .card.support.has-image .content{-webkit-box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);background-color:#fff}:host .card.support .content{padding:1.31453414em;border-radius:0 0 .5em;background-clip:padding-box}}:host .card.support .cta-holder{-ms-flex-item-align:end;-ms-grid-row-align:end;align-self:end}:host .card.flat,:host .card.nav,:host .card.support{display:-ms-grid;display:grid;-ms-grid-rows:1fr;grid-template-rows:1fr}:host .card.flat .content,:host .card.nav .content,:host .card.support .content{display:-ms-grid;display:grid;-ms-grid-rows:auto auto 1fr;grid-template-rows:auto auto 1fr;-webkit-box-align:start;-ms-flex-align:start;align-items:start}:host .card.flat,:host .card.nav{background:0 0;color:inherit}:host .card.flat .content,:host .card.nav .content{background:0 0;-webkit-box-shadow:none;box-shadow:none}:host .basic-landmark{display:-ms-grid;display:grid;-webkit-box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);border-radius:0 0 1.5em;background-clip:padding-box;padding:1.42382813em 5%}:host .basic-landmark .content .cta-holder{margin-top:1.42382813em}@media only screen and (max-width:720px){:host .basic-landmark{padding-top:calc(1.42382813em + 2.5%)}}@media only screen and (min-width:720px){:host .basic-landmark{border-radius:0 1.5em 0 0;background-clip:padding-box;padding:1.728em 1.728em 1.728em 8%}:host .basic-landmark .content{padding-top:0}}@media only screen and (min-width:1080px){:host .basic-landmark{padding:1.953125em;border-radius:1.5em 1.5em 1.5em 0;background-clip:padding-box}}@media only screen and (min-width:1620px){:host .basic-landmark{padding:3.81469727em}}:host .section-landmark{display:-ms-grid;display:grid;padding:1.42382813em;-webkit-box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);border-radius:0 1em 1em;background-clip:padding-box}@media only screen and (min-width:720px){:host .section-landmark{padding:1.728em;border-radius:0 1.5em 1.5em;background-clip:padding-box}:host .section-landmark .content{padding-top:0}}@media only screen and (min-width:1080px){:host .section-landmark{padding:1.953125em}}@media only screen and (min-width:1620px){:host .section-landmark{padding:3.81469727em}}:host [class*=basic-lockjaw]{display:-ms-grid;display:grid;background-color:transparent;color:inherit}:host [class*=basic-lockjaw] .content .cta-holder{margin-top:1.42382813em}:host [class*=basic-lockjaw] .image-holder{display:none}@media only screen and (min-width:720px){:host [class*=basic-lockjaw] .content .cta-holder{margin-top:1.728em}}@media only screen and (min-width:1080px){:host [class*=basic-lockjaw] .content .cta-holder{margin-top:1.953125em}}:host [class*=basic-locknut]{background-color:transparent;color:inherit}:host [class*=basic-locknut] .content .cta-holder{margin-top:1.42382813em}@media only screen and (min-width:720px){:host [class*=basic-locknut] .content .cta-holder{margin-top:1.728em}}@media only screen and (min-width:1080px){:host [class*=basic-locknut] .content .cta-holder{margin-top:1.953125em}}:host [class*=basic-lockbox]{margin-top:-25%;padding-top:calc(25% + 1.42382813em);padding-right:5%;padding-bottom:1.42382813em;padding-left:5%;-webkit-box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);box-shadow:0 .75em 3em 0 rgba(51,63,72,.15);border-radius:0 0 1.5em;background-clip:padding-box}:host [class*=basic-lockbox] .content .cta-holder{margin-top:1.42382813em}@media only screen and (min-width:720px){:host [class*=basic-lockbox]{padding-top:calc(25% + 2.985984em);padding-right:12.5%;padding-bottom:2.985984em;padding-left:12.5%;border-radius:1.5em 1.5em 0;background-clip:padding-box}:host [class*=basic-lockbox] .content .cta-holder{margin-top:1.728em}:host .basic-lockbox-reverse{border-radius:1.5em 1.5em 1.5em 0;background-clip:padding-box}}@media only screen and (min-width:1080px){:host [class*=basic-lockbox]{margin-top:0;padding:3.81469727em}:host [class*=basic-lockbox] .content .cta-holder{margin-top:1.953125em}}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .highlighter{width:100%!important}:host .flat.has-image .image-holder,:host .nav.has-image .image-holder,:host .support.has-image .image-holder,:host [class*=basic-].has-image .image-holder{-ms-grid-row:1}:host .flat.has-image .content,:host .nav.has-image .content,:host .support.has-image .content,:host [class*=basic-].has-image .content{-ms-grid-row:2}:host .flat .content,:host .nav .content,:host .support .content,:host [class*=basic-] .content{-ms-grid-row:1;padding-bottom:1.42382813em}:host .flat .content .heading-holder,:host .nav .content .heading-holder,:host .support .content .heading-holder,:host [class*=basic-] .content .heading-holder{-ms-grid-row:1}:host .flat .content .paragraph-holder,:host .nav .content .paragraph-holder,:host .support .content .paragraph-holder,:host [class*=basic-] .content .paragraph-holder{-ms-grid-row:2}:host .flat .content .cta-holder,:host .nav .content .cta-holder,:host .support .content .cta-holder,:host [class*=basic-] .content .cta-holder{-ms-grid-row:3}:host .flat-landmark .heading-holder{margin-bottom:1.42382813em}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host .highlighter{width:100%!important}:host .flat.has-image .image-holder,:host .nav.has-image .image-holder,:host .support.has-image .image-holder,:host [class*=basic-].has-image .image-holder{-ms-grid-row:1}:host .flat.has-image .content,:host .nav.has-image .content,:host .support.has-image .content,:host [class*=basic-].has-image .content{-ms-grid-row:2}:host .flat .content,:host .nav .content,:host .support .content,:host [class*=basic-] .content{-ms-grid-row:1;padding-bottom:1.42382813em}:host .flat .content .heading-holder,:host .nav .content .heading-holder,:host .support .content .heading-holder,:host [class*=basic-] .content .heading-holder{-ms-grid-row:1}:host .flat .content .paragraph-holder,:host .nav .content .paragraph-holder,:host .support .content .paragraph-holder,:host [class*=basic-] .content .paragraph-holder{-ms-grid-row:2}:host .flat .content .cta-holder,:host .nav .content .cta-holder,:host .support .content .cta-holder,:host [class*=basic-] .content .cta-holder{-ms-grid-row:3}:host .flat-landmark .heading-holder{margin-bottom:1.42382813em}}@supports (-ms-ime-align:auto){:host .flat-landmark .heading-holder{margin-bottom:1.42382813em}}@media only screen and (min-width:0) and (max-width:1079px) and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .section .illustration-holder{-ms-grid-column:1}:host .section .content{padding-bottom:1.728em;-ms-grid-column:2}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){@media only screen and (min-width:0) and (max-width:1079px){:host .section .illustration-holder{-ms-grid-column:1}:host .section .content{padding-bottom:1.728em;-ms-grid-column:2}}}@media only screen and (min-width:720px) and (max-width:1079px){:host .support.has-image .image-holder{-ms-grid-column:1}:host .support.has-image .content{padding-bottom:1.953125em;-ms-grid-column:2;-ms-grid-row:1!important}}";

var nsCard =
function (_LitElement) {
  _inherits(nsCard, _LitElement);
  _createClass(nsCard, null, [{
    key: "properties",
    get: function get() {
      return {
        type: {
          type: String
        },
        decoration: {
          type: String
        },
        image: {
          type: String
        },
        alt: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$1)]);
    }
  }]);
  function nsCard() {
    var _this;
    _classCallCheck(this, nsCard);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsCard).call(this));
    _this.type = 'section';
    _this.alt = '';
    return _this;
  }
  _createClass(nsCard, [{
    key: "addHeading",
    value: function addHeading() {
      return "<div class=\"heading-holder\">\n              <slot name=\"heading\"></slot>\n            </div>";
    }
  }, {
    key: "addImage",
    value: function addImage() {
      if (this.image && this.type === 'support') {
        return "<div class=\"image-holder\">\n                <ns-image ratio=\"4x3\" src=\"".concat(this.image, "\" alt=\"").concat(this.alt, "\"></ns-image>\n              </div>");
      }
      return '';
    }
  }, {
    key: "addIllustration",
    value: function addIllustration() {
      if (this.type === 'section' && this.decoration !== 'undefined') {
        return "<div class=\"illustration-holder\">\n                <ns-illustration type=\"".concat(this.decoration, "\"></ns-illustration>\n              </div>");
      }
      return '';
    }
  }, {
    key: "addCTA",
    value: function addCTA() {
      var regex = /support|basic-|section-|section|flat/g;
      var canHave = this.type.search(regex);
      if (canHave !== -1) {
        return "<div class=\"cta-holder\">\n                <slot name=\"cta\"></slot>\n              </div>";
      }
      return "<ns-icon size=\"2\" type='arrow-right'></ns-icon>";
    }
  }, {
    key: "outSideCTA",
    value: function outSideCTA() {
      if (this.type === 'section') {
        return "".concat(this.addCTA());
      }
      return '';
    }
  }, {
    key: "addContent",
    value: function addContent() {
      var regex = /support|basic-|section|flat|nav|highlighter/g;
      var ctaRegex = /support|basic-|section-|flat/g;
      var canHave = this.type.search(regex);
      var ctaCanHave = this.type.search(ctaRegex);
      var ctaHasSlot = this.querySelectorAll('[slot="cta"]').length > 0;
      if (canHave !== -1) {
        return "\n        <div class=\"paragraph-holder\">\n          <slot name=\"paragraph\"></slot>\n        </div>\n        ".concat(ctaHasSlot && ctaCanHave !== -1 ? this.addCTA() : '', "\n      ");
      }
      return '';
    }
  }, {
    key: "updated",
    value: function updated() {
      var _this2 = this;
      var slots = Array.from(this.shadowRoot.querySelectorAll('slot'));
      slots.forEach(function (slot) {
        slot.assignedNodes().forEach(function (el) {
          var slotType = el.getAttribute && el.getAttribute('slot') || '';
          if (slotType === 'heading' && _this2.type !== 'basic') {
            el.setAttribute('role', 'heading');
            el.setAttribute('aria-level', '3');
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var hasImage = this.image && this.image.length > 0;
      return html(["\n      <div class=\"card ".concat(this.type, " ").concat(hasImage ? 'has-image' : '', "\">\n        ").concat(this.addImage(), "\n        ").concat(this.addIllustration(), "\n        ").concat(this.addIcon, "\n        <div class=\"content\">\n          ").concat(this.addHeading(), "\n          ").concat(this.addContent(), "\n        </div>\n        ").concat(this.outSideCTA(), "\n      </div>\n    ")]);
    }
  }, {
    key: "addIcon",
    get: function get() {
      if (this.type === 'highlighter' && this.decoration !== 'undefined') {
        return "<div class=\"icon-holder\">\n                <ns-icon type=\"".concat(this.decoration, "\">\n                </ns-icon>\n              </div>");
      }
      return '';
    }
  }]);
  return nsCard;
}(LitElement);
customElements.define('ns-card', nsCard);

var styles$2 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host ns-panel.alert .heading-holder ::slotted(*),:host ns-panel.alert slot h2{font-family:\"BG Flame Bold\",sans-serif;display:block;margin:inherit;padding:0}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),:host ns-panel.alert .heading-holder ::slotted(*),:host ns-panel.alert slot h2,h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),:host ns-panel.alert .heading-holder ::slotted(*),:host ns-panel.alert slot h2,h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),:host ns-panel.alert .heading-holder ::slotted(*),:host ns-panel.alert slot h2,h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),:host ns-panel.standard .heading-holder ::slotted(*),:host ns-panel.standard slot h2,h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),:host ns-panel.standard .heading-holder ::slotted(*),:host ns-panel.standard slot h2,h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),:host ns-panel.standard .heading-holder ::slotted(*),:host ns-panel.standard slot h2,h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small,:host ns-panel.alert .caveat-holder ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small,:host ns-panel.alert .caveat-holder ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small,:host ns-panel.alert .caveat-holder ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{display:block}:host ns-panel{background:#f7f7f7;color:#333f48}:host ns-panel .message{display:-ms-grid;display:grid}:host ns-panel.standard .heading-holder ::slotted(*),:host ns-panel.standard slot h2{font-family:\"BG Flame Regular\",sans-serif;margin-bottom:0}:host ns-panel.alert .message{grid-row-gap:unset}:host ns-panel.alert .caveat-holder ::slotted(*){font-family:\"BG Flame Regular\",sans-serif;max-width:none}@media only screen and (min-width:1080px){:host .message{padding-left:12.5%;padding-right:12.5%}}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .alert .caveat-holder,:host .alert .heading-holder,:host .standard .caveat-holder,:host .standard .heading-holder{padding-left:10%;padding-right:10%}:host .alert .heading-holder,:host .standard .heading-holder{-ms-grid-row:1;margin-bottom:2em}:host .alert .caveat-holder,:host .standard .caveat-holder{-ms-grid-row:2}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host .alert .caveat-holder,:host .alert .heading-holder,:host .standard .caveat-holder,:host .standard .heading-holder{padding-left:10%;padding-right:10%}:host .alert .heading-holder,:host .standard .heading-holder{-ms-grid-row:1;margin-bottom:2em}:host .alert .caveat-holder,:host .standard .caveat-holder{-ms-grid-row:2}@media only screen and (min-width:0) and (max-width:1079px){:host .alert .caveat-holder,:host .alert .heading-holder,:host .standard .caveat-holder,:host .standard .heading-holder{padding-left:0;padding-right:0}}}@media only screen and (min-width:0) and (max-width:1079px) and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .alert .caveat-holder,:host .alert .heading-holder,:host .standard .caveat-holder,:host .standard .heading-holder{padding-left:0;padding-right:0}}";

var nsCaveat =
function (_LitElement) {
  _inherits(nsCaveat, _LitElement);
  _createClass(nsCaveat, null, [{
    key: "properties",
    get: function get() {
      return {
        type: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$2)]);
    }
  }]);
  function nsCaveat() {
    var _this;
    _classCallCheck(this, nsCaveat);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsCaveat).call(this));
    _this.type = 'standard';
    return _this;
  }
  _createClass(nsCaveat, [{
    key: "addHeading",
    value: function addHeading() {
      return "<div class=\"heading-holder\">\n              <slot name=\"heading\"><h2>Information</h2></slot>\n            </div>";
    }
  }, {
    key: "addCaveat",
    value: function addCaveat() {
      return "<div class=\"caveat-holder\">\n              <slot name=\"caveat\"></slot>\n            </div>";
    }
  }, {
    key: "updated",
    value: function updated() {
      if (this.type === 'standard') {
        this.setAttribute('id', 'caveat');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return html(["\n      <ns-panel class=\"".concat(this.type, "\">\n        <div class=\"splish message\">\n          ").concat(this.addHeading(), "\n          ").concat(this.addCaveat(), "\n        </div>\n      </ns-panel>\n      ")]);
    }
  }]);
  return nsCaveat;
}(LitElement);
customElements.define('ns-caveat', nsCaveat);

var styles$3 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.sr-only{clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;width:1px;margin:-1px;overflow:hidden;padding:0;position:absolute}:host([disabled]){cursor:auto;pointer-events:none}:host{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .nds-cta{position:relative;background-color:transparent;text-align:left;cursor:pointer;font-size:.8em;text-decoration:none}:host .nds-cta::-moz-focus-inner{border:0}:host .nds-cta .label-holder{font-family:\"BG Flame Bold\",sans-serif;font-size:1.25em}:host .nds-cta .icon{position:absolute;text-indent:0}:host .nds-cta .icon svg{position:absolute;top:0;right:0;bottom:0;left:0;fill:currentColor}:host .nds-cta .icon [icon=loading] svg{-webkit-animation:2s linear infinite spinner;animation:2s linear infinite spinner}:host .nds-cta:active .icon [icon=arrow-right] svg,:host .nds-cta:focus .icon [icon=arrow-right] svg,:host .nds-cta:hover .icon [icon=arrow-right] svg{-webkit-transform:translateX(.25em);transform:translateX(.25em)}:host .nds-cta:active .icon [icon=download] svg path:nth-child(1),:host .nds-cta:focus .icon [icon=download] svg path:nth-child(1),:host .nds-cta:hover .icon [icon=download] svg path:nth-child(1){-webkit-transform:translateY(.15em);transform:translateY(.15em)}:host .nds-cta.direct{display:inline-block;background:-webkit-gradient(linear,left top,left bottom,color-stop(-75%,#09f),to(#005eb8));background:linear-gradient(#09f -75%,#005eb8 100%);color:#fff;border-top-right-radius:.5em;border-bottom-right-radius:.5em;border-bottom-left-radius:.5em;-webkit-box-shadow:0 .75em 1.5em 0 rgba(51,63,72,.15);box-shadow:0 .75em 1.5em 0 rgba(51,63,72,.15);min-width:15em;padding:.8125em 3.5em .8125em 2em}:host .nds-cta.direct:active,:host .nds-cta.direct:focus,:host .nds-cta.direct:hover{color:#fff;-webkit-box-shadow:0 .5em 1em 0 rgba(51,63,72,.15);box-shadow:0 .5em 1em 0 rgba(51,63,72,.15)}:host .nds-cta.direct:focus,:host .nds-cta.direct:hover{background:-webkit-gradient(linear,left top,left bottom,color-stop(-125%,#09f),color-stop(75%,#005eb8));background:linear-gradient(#09f -125%,#005eb8 75%)}:host .nds-cta.direct:focus{outline:0;-webkit-box-shadow:0 0 0 .1875em #ffdd57;box-shadow:0 0 0 .1875em #ffdd57}:host .nds-cta.direct:active{background:#005eb8;-webkit-box-shadow:none;box-shadow:none}:host .nds-cta.direct .icon{right:1em;bottom:.75em;width:2em;height:2em}:host .nds-cta.direct .cta{display:block;min-height:1.875em}:host .nds-cta.text{outline:0;display:inline-block;padding-right:.5em;padding-left:1.5em;text-indent:-1.5em;color:#005eb8}:host .nds-cta.text .icon{position:relative;display:inline-block;top:.25em;width:1.25em;height:1.25em}:host .nds-cta.text:focus,:host .nds-cta.text:hover{color:#333f48;text-decoration:underline;-webkit-text-decoration-color:rgba(51,63,72,.25);text-decoration-color:rgba(51,63,72,.25)}:host .nds-cta.text:focus{text-decoration:underline;-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto;-webkit-text-decoration-color:rgba(0,60,113,.5);text-decoration-color:rgba(0,60,113,.5)}:host .nds-cta.text:focus .cta{background-color:#ffdd57;-webkit-box-shadow:0 0 0 .35em #ffdd57;box-shadow:0 0 0 .35em #ffdd57;border-top-right-radius:.035em;border-bottom-right-radius:.035em;border-bottom-left-radius:.035em}:host .nds-cta[disabled]{pointer-events:none}:host .nds-cta[disabled].direct{background:#005eb8;-webkit-box-shadow:none;box-shadow:none}@media only screen and (min-width:320px) and (max-width:479px){:host{display:block}:host .nds-cta{width:100%}}@media only screen and (min-width:720px){:host .nds-cta{font-size:.9em}}@media only screen and (min-width:1080px){:host .nds-cta{font-size:1em}}";

var nsCta =
function (_LitElement) {
  _inherits(nsCta, _LitElement);
  _createClass(nsCta, null, [{
    key: "properties",
    get: function get() {
      return {
        type: {
          type: String
        },
        loading: {
          type: String
        },
        loadingMessage: {
          type: String
        },
        icon: {
          type: String
        },
        href: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$3)]);
    }
  }]);
  function nsCta() {
    var _this;
    _classCallCheck(this, nsCta);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsCta).call(this));
    _this.type = 'direct';
    _this.loading = 'false';
    _this.loadingMessage = 'Loading...';
    _this.icon = 'arrow-right';
    return _this;
  }
  _createClass(nsCta, [{
    key: "addIcon",
    value: function addIcon(icon, position) {
      return "\n    <span class=\"icon icon-".concat(position, "\">\n      <ns-icon type=\"").concat(icon, "\"></ns-icon>\n    </span>\n    ");
    }
  }, {
    key: "render",
    value: function render() {
      var isLoading = this.loading === 'true';
      var icon = this.loading === 'true' ? 'loading' : this.icon;
      var iconPosition = this.type === 'text' ? 'left' : 'right';
      var iconRight = iconPosition === 'right' ? this.addIcon(icon, 'right') : '';
      var iconLeft = iconPosition === 'left' ? this.addIcon(icon, 'left') : '';
      var text = this.textContent;
      var isInLink = this.parentElement && this.parentElement.nodeName === 'A' && this.parentElement.hasAttribute('href');
      var tabIndex = isInLink ? -1 : 0;
      var element = 'button';
      if (this.href && this.href.length > 0 && this.href !== 'undefined') {
        element = 'a';
      } else if (!this.cta) {
        element = 'button';
      }
      var isHref = element === 'a' ? "href=\"".concat(this.href, "\"") : '';
      if (isLoading) {
        this.setAttribute('disabled', 'true');
      } else {
        this.removeAttribute('disabled');
      }
      return html(["\n      ".concat(isLoading ? "<span role=\"alert\" aria-live=\"assertive\" class=\"sr-only\">".concat(this.loadingMessage, "</span>") : "", "\n      <").concat(element, " ").concat('tabindex=' + tabIndex, " ").concat(isHref, " ").concat(isLoading ? 'disabled' : '', " class=\"nds-cta ").concat(this.type, " animated\" aria-label=\"").concat(text, "\">\n          <span class=\"cta\">\n            ").concat(iconLeft, "\n            <span class=\"label-holder\">\n              ").concat(isLoading ? this.loadingMessage : "<slot></slot>", "\n            </span>\n            ").concat(iconRight, "\n          </span>\n      </").concat(element, ">\n    ")]);
    }
  }]);
  return nsCta;
}(LitElement);
customElements.define('ns-cta', nsCta);

var styles$4 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{display:block}:host [name=heading]{font-size:1em;max-width:none}:host ns-image{width:60%;margin-bottom:1.19324269em;border-radius:1em 1em 1em 0;background-clip:padding-box}@media only screen and (max-width:719px){:host .splosh{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;row-gap:normal}:host .splosh [name=heading]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}:host .splosh ns-image{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}:host .splosh .column{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}}@media only screen and (min-width:480px){:host ns-image{width:45%}}@media only screen and (min-width:720px){:host ns-image{margin-left:2.985984em;margin-bottom:1.31453414em;float:right;width:40%}}@media only screen and (min-width:1080px){:host ns-image{margin-left:3.81469727em;margin-bottom:1.39754249em}:host:host([reverse]) ns-image{margin-left:0;border-radius:1em 1em 0;background-clip:padding-box;float:left}:host:host([reverse]) .column,:host:host([reverse]) [name=heading]{margin-left:calc(40% + 3.81469727em)}}";

var nsEditorial =
function (_LitElement) {
  _inherits(nsEditorial, _LitElement);
  _createClass(nsEditorial, null, [{
    key: "properties",
    get: function get() {
      return {
        image: {
          type: String
        },
        reverse: {
          type: Boolean
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$4)]);
    }
  }]);
  function nsEditorial() {
    _classCallCheck(this, nsEditorial);
    return _possibleConstructorReturn(this, _getPrototypeOf(nsEditorial).call(this));
  }
  _createClass(nsEditorial, [{
    key: "render",
    value: function render() {
      var imageMarkup = this.image ? "<ns-image src=\"".concat(this.image, "\" ratio=\"4x3\" alt=\"\" backgroundsize=\"\"></ns-image>") : "";
      return html(["\n      <ns-panel>\n        <div class=\"splosh\">\n          ".concat(imageMarkup, "\n          <slot name=\"heading\"></slot>\n          <div class=\"column\">\n            <slot></slot>\n          </div>\n        </div>\n      </ns-panel>\n    ")]);
    }
  }]);
  return nsEditorial;
}(LitElement);
customElements.define('ns-editorial', nsEditorial);

var styles$5 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .standard .heading .heading-title ::slotted(*){font-family:\"BG Flame Bold\",sans-serif;display:block;margin:inherit;padding:0}:host .panel ::slotted(*),:host .skyline .heading .heading-title ::slotted(*){font-family:\"BG Flame Regular\",sans-serif}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),:host .standard .heading .heading-title ::slotted(*),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),:host .standard .heading .heading-title ::slotted(*),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),:host .standard .heading .heading-title ::slotted(*),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small,:host .panel ::slotted(*),:host .skyline .heading .heading-title ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small,:host .panel ::slotted(*),:host .skyline .heading .heading-title ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small,:host .panel ::slotted(*),:host .skyline .heading .heading-title ::slotted(*){font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{display:block;width:100%}:host .heading{cursor:pointer;width:100%}:host .heading:focus{outline-offset:0;border-top-color:transparent;outline:#ffdd57 solid .1875em}:host .heading .heading-title{pointer-events:none;padding:1em;display:block}:host .heading .heading-title ::slotted(*){margin-bottom:0!important}:host .heading .open-close-icon{float:right;pointer-events:none;width:2em;height:2em;margin:.75em 1em auto auto}:host .panel{overflow:hidden;padding:1em}:host .panel[hidden]{padding:0;max-height:0}:host .has-icon .heading{display:-webkit-box;display:-ms-flexbox;display:flex}:host .has-icon .heading-main{width:100%}:host .has-icon .icon{width:2em;height:2em;margin-top:.75em;margin-bottom:auto;-webkit-box-flex:0;-ms-flex:none;flex:none;pointer-events:none}:host .has-icon .panel{padding-left:3em}:host .standard{border-top:1px solid #c8c9c7;background:#fff;color:#333f48}:host .standard.expanded,:host .standard:active,:host .standard:focus,:host .standard:hover{background:#f7f7f7;color:#333f48}:host .standard .panel{background:#fff;color:#333f48}:host .skyline{background:#333f48;color:#fff}:host .skyline .heading .heading-title ::slotted(*){font-family:\"BG Flame Bold\",sans-serif;max-width:64em!important}:host .skyline .panel ::slotted(*){max-width:64em!important}";

var randomId = (function () {
  return "nsid-".concat(Math.random().toString(36).substring(2, 15));
});

var nsExpander =
function (_LitElement) {
  _inherits(nsExpander, _LitElement);
  _createClass(nsExpander, [{
    key: "openToggle",
    value: function openToggle() {
      this.open = this.open === 'true' ? 'false' : 'true';
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        icon: {
          type: String
        },
        open: {
          type: String
        },
        type: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$5)]);
    }
  }]);
  function nsExpander() {
    var _this;
    _classCallCheck(this, nsExpander);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsExpander).call(this));
    _this.icon = '';
    _this.open = 'false';
    _this.type = 'standard';
    _this.tabID = "".concat(randomId(), "-tab");
    _this.panelID = "".concat(randomId(), "-panel");
    return _this;
  }
  _createClass(nsExpander, [{
    key: "getHeading",
    value: function getHeading() {
      return "\n      <div class=\"heading-title\">\n        <slot name=\"heading\"></slot>\n      </div>\n    ";
    }
  }, {
    key: "getIcon",
    value: function getIcon() {
      if (this.icon !== '') {
        return "\n        <div class=\"icon\">\n          <ns-icon type=\"".concat(this.icon, "\"></ns-icon>\n        </div>\n      ");
      }
      return '';
    }
  }, {
    key: "getOpenCloseIcon",
    value: function getOpenCloseIcon(isHidden) {
      var openCloseIcon = isHidden ? 'chevron-down' : 'chevron-up';
      return "\n    <div class=\"open-close-icon\">\n      <ns-icon type=\"".concat(openCloseIcon, "\"></ns-icon>\n    </div>\n    ");
    }
  }, {
    key: "addPanelAnimation",
    value: function addPanelAnimation() {
      var panel = this.shadowRoot.getElementById(this.panelID);
      if (this.open === 'true') {
        var panelHeight = panel.scrollHeight;
        panel.style.height = "".concat(panelHeight, "px");
      } else {
        panel.style.height = '0';
      }
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      this.setAttribute('role', 'tab');
    }
  }, {
    key: "updated",
    value: function updated(props) {
      var _this2 = this;
      var heading = this.shadowRoot.getElementById(this.tabID);
      props.forEach(function (oldValue, propName) {
        if (propName === 'open' && oldValue === 'false') {
          heading.focus();
        }
      });
      heading.addEventListener('click', function () {
        _this2.openToggle();
      });
      heading.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
          _this2.openToggle();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isHidden = this.open === 'false';
      var hasIconClass = this.icon !== '' ? 'has-icon' : '';
      return html(["\n      <div class=\"".concat(this.type, " ").concat(hasIconClass, "\">\n        <div tabindex=\"0\" aria-expanded=\"").concat(!isHidden, "\" aria-controls=\"").concat(this.panelID, "\" id=\"").concat(this.tabID, "\" class=\"heading ").concat(!isHidden ? 'expanded' : '', "\">\n          ").concat(this.getIcon(), "\n          <div class=\"heading-main\">\n            ").concat(this.getOpenCloseIcon(isHidden), "\n            ").concat(this.getHeading(), "\n          </div>\n        </div>\n\n        <div role=\"tabpanel\" aria-labelledby=\"").concat(this.tabID, "\" id=\"").concat(this.panelID, "\" class=\"panel\" ").concat(isHidden ? 'hidden' : '', ">\n          <slot></slot>\n        </div>\n      </div>\n    ")]);
    }
  }]);
  return nsExpander;
}(LitElement);
customElements.define('ns-expander', nsExpander);

var styles$6 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.h1,.h2,.h3,.h4,.h5,h1:not([slot]),h2:not([slot]),h3:not([slot]),h4:not([slot]),h5:not([slot]){font-family:\"BG Flame Bold\",sans-serif;display:block;margin:inherit;padding:0}.h6,.p-caption,h6:not([slot]){font-family:\"BG Flame Regular\",sans-serif}:not([slot]) .enlighten{font-family:\"BG Flame Light\",sans-serif}:not([slot]) .enlighten .embolden:not([slot]),:not([slot]) .enlighten b:not([slot]),:not([slot]) .enlighten em:not([slot]),:not([slot]) .enlighten i:not([slot]),:not([slot]) .enlighten strong:not([slot]){font-family:\"BG Flame Bold\",sans-serif}.p-feature,.p-large,.p-normal{font-family:\"BG Flame Light\",sans-serif}.p-caption,.p-small{font-family:\"BG Flame Regular\",sans-serif}p{margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}p b:not([slot]),p strong:not([slot]){font-family:\"BG Flame Bold\",sans-serif}p+:not(p):not([slot]){margin-top:3rem!important}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}ns-panel .splash:last-child,ns-panel .splish:last-child{margin-bottom:0!important}a{font-family:\"BG Flame Bold\",sans-serif;font-weight:400;color:#005eb8;text-decoration:underline;-webkit-text-decoration-color:#005eb8;text-decoration-color:#005eb8;-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}a:focus{outline-offset:0;background-color:#ffdd57;-webkit-text-decoration-color:transparent;text-decoration-color:transparent;outline:#ffdd57 solid .1875em}a:active,a:hover{color:#003c71;-webkit-text-decoration-color:rgba(0,60,113,.25);text-decoration-color:rgba(0,60,113,.25)}a:visited,a:visited:focus{color:#333f48;-webkit-text-decoration-color:#333f48;text-decoration-color:#333f48}a:visited:hover{color:#333f48;-webkit-text-decoration-color:rgba(51,63,72,.25);text-decoration-color:rgba(51,63,72,.25)}a[slot=cta]{display:inline-block}@media only screen and (min-width:320px) and (max-width:479px){a[slot=cta]{display:block}}a[slot=cta]:focus{outline-offset:.1875em;outline-width:.25em;background-color:transparent}a[href=\"#caveat\"]{position:relative;display:inline-block;font-size:.8em;line-height:1.2;background-color:#005eb8;color:#fff;text-decoration:none;border-radius:.1875em;top:-.15em;padding-left:.3em;padding-right:.3em;font-family:\"BG Flame Bold\",sans-serif}a[href=\"#caveat\"]::after{position:absolute;content:'';top:-.75em;right:-.75em;bottom:-.75em;left:-.75em}a[href=\"#caveat\"]:focus{outline-offset:.1875em;outline-width:.25em}a[href=\"#caveat\"]:active,a[href=\"#caveat\"]:hover,a[href=\"#caveat\"]:visited,a[href=\"#caveat\"]:visited:focus,a[href=\"#caveat\"]:visited:hover{color:#fff}:host{display:block}:host ul{list-style-type:none;margin:0;padding:0}:host .nav-footer ul{padding-top:1em;padding-bottom:1em}:host .nav-footer ul a{color:#f7f7f7!important;-webkit-text-decoration-color:#f7f7f7!important;text-decoration-color:#f7f7f7!important}:host .nav-footer ul a:focus{outline-offset:-1em;background-color:unset;-webkit-text-decoration-color:transparent;text-decoration-color:transparent}:host .nav-footer ul a:active,:host .nav-footer ul a:hover{color:#fff;-webkit-text-decoration-color:rgba(247,247,247,.5);text-decoration-color:rgba(247,247,247,.5)}:host .nav-footer ul .more a{position:relative;padding-right:3em}:host .nav-footer ul .more a::after{pointer-events:none;position:absolute;content:\"\";top:50%;right:1.5em;width:.875em;height:.875em;-webkit-transform:translateY(-75%) rotate(45deg);transform:translateY(-75%) rotate(45deg);border-right:.125em solid #fff;border-bottom:.125em solid #fff}:host .nav-footer ul .last{margin-left:auto;padding:1em 0}:host .nav-footer ul .last span{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}:host .nav-footer ul .last img{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;width:3em;margin-left:1em}@media only screen and (min-width:1080px){:host .nav-footer nav{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}:host .nav-footer nav ul{padding-top:0;padding-bottom:0;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}:host .nav-footer nav ul a{display:block;padding:1em 1.25em}}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host ul{margin-bottom:0!important;padding-left:0!important;max-width:inherit!important;max-width:unset!important}:host ul li{margin-top:0!important;margin-bottom:0!important}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host ul{margin-bottom:0!important;padding-left:0!important;max-width:inherit!important;max-width:unset!important}:host ul li{margin-top:0!important;margin-bottom:0!important}}@supports (-ms-ime-align:auto){:host ul{margin-bottom:0!important;padding-left:0!important;max-width:inherit!important;max-width:unset!important}:host ul li{margin-top:0!important;margin-bottom:0!important}}";

var nsFooter =
function (_LitElement) {
  _inherits(nsFooter, _LitElement);
  _createClass(nsFooter, null, [{
    key: "properties",
    get: function get() {
      return {
        collapsed: {
          type: Boolean
        },
        cookie: {
          type: String
        },
        terms: {
          type: String
        },
        privacy: {
          type: String
        },
        company: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$6)]);
    }
  }]);
  function nsFooter() {
    var _this;
    _classCallCheck(this, nsFooter);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsFooter).call(this));
    _this.collapsed = false;
    _this.cookie = '/global-maintenance/cookies-policy.html';
    _this.terms = '/terms-and-conditions.html';
    _this.privacy = '/privacy-policy.html';
    _this.company = 'British Gas';
    return _this;
  }
  _createClass(nsFooter, [{
    key: "render",
    value: function render() {
      return html(["\n      <footer>\n        <div class=\"nav-footer\">\n          <ns-panel type=\"nav\" decoration=\"invert-bridge-blue\">\n            <nav aria-label=\"Main footer\" class=\"splash\">\n              <ul>\n                <li><a href=\"".concat(this.terms, "\">Terms &amp; conditions</a></li>\n                <li><a href=\"").concat(this.privacy, "\">Privacy policy</a></li>\n                <li><a href=\"").concat(this.cookie, "\">Cookie policy</a></li>\n              </ul>\n              <ul>\n                <li class=\"last\">\n                  <span>&copy; ").concat(this.company, " ").concat(this.year, "</span>\n                </li>\n              </ul>\n            </nav>\n          </ns-panel>\n        </div>\n        <div class=\"nav-sections\" ").concat(this.collapsed ? 'hidden' : '', ">\n          <ns-panel decoration=\"invert-bridge-grey-light\">\n            <nav aria-label=\"Secondary footer\" class=\"splash triple\">\n              <slot name=\"section\"></slot>\n            </nav>\n          </ns-panel>\n        </div>\n      </footer>\n    ")]);
    }
  }, {
    key: "year",
    get: function get() {
      var date = new Date();
      return date.getFullYear();
    }
  }]);
  return nsFooter;
}(LitElement);
customElements.define('ns-footer', nsFooter);

var styles$7 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host{display:block}@supports (display:grid){:host form{display:-ms-grid;display:grid;grid-gap:1.42382813em}@media only screen and (min-width:720px){:host form{grid-gap:1.728em}}@media only screen and (min-width:1080px){:host form{grid-gap:1.953125em}}}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host form>::slotted(*){margin-bottom:1.42382813em}}@media only screen and (-ms-high-contrast:none) and only screen and (min-width:720px),(-ms-high-contrast:active) and only screen and (min-width:720px){:host form>::slotted(*){margin-bottom:1.728em}}@media only screen and (-ms-high-contrast:none) and only screen and (min-width:1080px),(-ms-high-contrast:active) and only screen and (min-width:1080px){:host form>::slotted(*){margin-bottom:1.953125em}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host form>::slotted(*){margin-bottom:1.42382813em}@media only screen and (min-width:720px){:host form>::slotted(*){margin-bottom:1.728em}}@media only screen and (min-width:1080px){:host form>::slotted(*){margin-bottom:1.953125em}}}";

var nsScroll = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      element = _ref.element,
      _ref$focusOn = _ref.focusOn,
      focusOn = _ref$focusOn === void 0 ? element : _ref$focusOn;
  var motionQuery = window.matchMedia('(prefers-reduced-motion)');
  setTimeout(function () {
    if (!motionQuery.matches) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, 0);
  focusOn.focus({
    preventScroll: !motionQuery.matches
  });
  if (focusOn !== document.activeElement) {
    focusOn.setAttribute('tabindex', '-1');
    focusOn.focus({
      preventScroll: !motionQuery.matches
    });
  }
});

var nsForm =
function (_LitElement) {
  _inherits(nsForm, _LitElement);
  _createClass(nsForm, [{
    key: "isValid",
    get: function get() {
      return this.validate().isValid;
    }
  }], [{
    key: "properties",
    get: function get() {
      return {};
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$7)]);
    }
  }]);
  function nsForm() {
    _classCallCheck(this, nsForm);
    return _possibleConstructorReturn(this, _getPrototypeOf(nsForm).call(this));
  }
  _createClass(nsForm, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var form = this.shadowRoot.querySelector('form');
      form.addEventListener('submit', function (event) {
        event.preventDefault();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return html(["\n      <div class=\"form-holder\">\n        <form>\n          <slot></slot>\n        </form>\n      </div>\n    "]);
    }
  }, {
    key: "validate",
    value: function validate() {
      var inputs = this.querySelectorAll('*');
      var fields = [];
      var fieldsByName = {};
      var invalidInputs = [];
      var isValid = true;
      Array.from(inputs).filter(function (input) {
        return input.nodeName.includes('-') && input.attributes && input.attributes.name && input.attributes.name.value && input;
      }).forEach(function (input) {
        input.execute = true;
        var field = {
          name: input.attributes.name.value,
          isValid: input.validity.valid,
          value: input.value,
          error: input.error,
          input: input
        };
        fields.push(field);
        fieldsByName[field.name] = field;
        if (!input.validity.valid) {
          isValid = false;
          invalidInputs.push(input);
        }
      });
      if (!isValid) {
        nsScroll({
          element: invalidInputs[0],
          focusOn: invalidInputs[0].querySelectorAll('input, select, textarea')[0]
        });
      }
      var validation = {
        isValid: isValid,
        fields: fields,
        fieldsByName: fieldsByName
      };
      var event = new CustomEvent('validated', {
        bubbles: true,
        composed: true,
        detail: {
          validation: validation
        }
      });
      this.dispatchEvent(event);
      return validation;
    }
  }]);
  return nsForm;
}(LitElement);
customElements.define('ns-form', nsForm);

var toJSON = function toJSON(node) {
  if (node.tagName === 'UL') {
    return Array.from(node.children).map(function (n) {
      return toJSON(n);
    });
  }
  if (node.tagName === 'LI') {
    return Array.from(node.children).map(function (n) {
      return toJSON(n);
    });
  }
  var attrs = node.attributes;
  var obj = {};
  if (attrs) {
    var arr = obj.attributes = new Array(attrs.length);
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      arr[i] = _defineProperty({}, attr.nodeName, attr.nodeValue);
    }
  }
  if (!node.children || node.children.length < 1) {
    obj.text = node.textContent;
  } else {
    return Array.from(node.children).map(function (n) {
      return toJSON(n);
    });
  }
  return _objectSpread2({
    tagName: node.tagName.toLowerCase()
  }, obj);
};
var toJSON$1 = (function (node) {
  return toJSON(node);
});

var styles$8 = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.h1,.h2,.h3,.h4,.h5,h1:not([slot]),h2:not([slot]),h3:not([slot]),h4:not([slot]),h5:not([slot]){font-family:\"BG Flame Bold\",sans-serif;display:block;margin:inherit;padding:0}.h6,.p-caption,h6:not([slot]){font-family:\"BG Flame Regular\",sans-serif}:not([slot]) .enlighten{font-family:\"BG Flame Light\",sans-serif}:not([slot]) .enlighten .embolden:not([slot]),:not([slot]) .enlighten b:not([slot]),:not([slot]) .enlighten em:not([slot]),:not([slot]) .enlighten i:not([slot]),:not([slot]) .enlighten strong:not([slot]){font-family:\"BG Flame Bold\",sans-serif}.p-feature,.p-large,.p-normal{font-family:\"BG Flame Light\",sans-serif}.p-caption,.p-small{font-family:\"BG Flame Regular\",sans-serif}p{margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}p b:not([slot]),p strong:not([slot]){font-family:\"BG Flame Bold\",sans-serif}p+:not(p):not([slot]){margin-top:3rem!important}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}ns-panel .splash:last-child,ns-panel .splish:last-child{margin-bottom:0!important}a{font-family:\"BG Flame Bold\",sans-serif;font-weight:400;color:#005eb8;text-decoration:underline;-webkit-text-decoration-color:#005eb8;text-decoration-color:#005eb8;-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}a:focus{outline-offset:0;background-color:#ffdd57;-webkit-text-decoration-color:transparent;text-decoration-color:transparent;outline:#ffdd57 solid .1875em}a:active,a:hover{color:#003c71;-webkit-text-decoration-color:rgba(0,60,113,.25);text-decoration-color:rgba(0,60,113,.25)}a:visited,a:visited:focus{color:#333f48;-webkit-text-decoration-color:#333f48;text-decoration-color:#333f48}a:visited:hover{color:#333f48;-webkit-text-decoration-color:rgba(51,63,72,.25);text-decoration-color:rgba(51,63,72,.25)}a[slot=cta]{display:inline-block}@media only screen and (min-width:320px) and (max-width:479px){a[slot=cta]{display:block}}a[slot=cta]:focus{outline-offset:.1875em;outline-width:.25em;background-color:transparent}a[href=\"#caveat\"]{position:relative;display:inline-block;font-size:.8em;line-height:1.2;background-color:#005eb8;color:#fff;text-decoration:none;border-radius:.1875em;top:-.15em;padding-left:.3em;padding-right:.3em;font-family:\"BG Flame Bold\",sans-serif}a[href=\"#caveat\"]::after{position:absolute;content:'';top:-.75em;right:-.75em;bottom:-.75em;left:-.75em}a[href=\"#caveat\"]:focus{outline-offset:.1875em;outline-width:.25em}a[href=\"#caveat\"]:active,a[href=\"#caveat\"]:hover,a[href=\"#caveat\"]:visited,a[href=\"#caveat\"]:visited:focus,a[href=\"#caveat\"]:visited:hover{color:#fff}:host{display:block;font-size:1.25em}:host ul{list-style-type:none;padding:0;margin:0}:host .cookie-message{font-size:.8em;border-bottom:1px solid #c8c9c7;margin-bottom:.25em}:host .cookie-message .message{max-width:inherit;margin-top:.5em;margin-bottom:.5em}:host .cookie-message .message::before{content:\"\";float:right;width:2em;height:2em}:host .cookie-message .splash{position:relative}:host .cookie-message .cookie-close{position:absolute;cursor:pointer;right:0;top:.25em;width:2em;height:2em}:host .cookie-message .cookie-close:focus{outline-offset:-.25em;outline:#ffdd57 solid .25em}:host .cookie-message .cookie-close::before{position:absolute;content:\"\";top:-.5em;right:-.5em;bottom:-.5em;left:-.5em}:host .cookie-message .cookie-close ns-icon{display:block}:host header{font-size:.8em;height:4.5em;position:relative;z-index:3;background-color:#fff}:host header .logo-holder{display:block;height:3.5em;margin-top:.5em;margin-bottom:.5em;outline:unset}:host header .logo-holder :first-child{width:100%;height:100%;display:block}:host header .logo-holder:focus{background-color:transparent}:host header .logo-holder:focus :first-child{outline-offset:.25em;outline:#ffdd57 solid .25em}:host header .nav-skip{display:-ms-grid;display:grid;-ms-grid-columns:5% 25% 1fr 5%;grid-template-columns:5% 25% 1fr 5%;font-size:.8em}:host header .nav-skip ul{-ms-grid-column:3;grid-column-start:3;position:relative}:host header .nav-skip ul a{position:absolute;top:-200em;text-decoration:none;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;padding:.25em .5em}:host header .nav-skip ul a:focus{background-color:transparent;display:block;top:0;outline-offset:-.25em;outline:#ffdd57 solid .25em}:host header .nav-desktop{border-bottom:1px solid #c8c9c7;position:relative}:host header .nav-desktop .nav-top{display:-ms-grid;display:grid;-ms-grid-columns:5% minmax(12em,.2fr) 1fr 5%;grid-template-columns:5% minmax(12em,.2fr) 1fr 5%;height:4.5em;width:100%;max-width:1600px;margin-left:auto;margin-right:auto}:host header .nav-desktop .nav-top .logo-holder{-ms-grid-column:2;grid-column-start:2}:host header .nav-desktop li{position:inherit}:host header .nav-desktop li .nav-flyout{background-color:#f7f7f7;border-top:1px solid #c8c9c7;border-bottom:1px solid #c8c9c7;font-size:.8em;position:absolute;left:0;width:100vw}:host header .nav-desktop li .nav-flyout[aria-expanded=false]{display:none}:host header .nav-desktop .side-headers{font-size:.8em;position:absolute;top:0;right:0;left:0;display:-ms-grid;display:grid;-ms-grid-columns:5% 16% 1fr 5%;grid-template-columns:5% 16% 1fr 5%;max-width:1600px;margin-left:auto;margin-right:auto;-ms-grid-column:3;grid-column-start:3}:host header .nav-desktop .side-headers ul{-ms-grid-column:3;grid-column-start:3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-right:-.5em}:host header .nav-desktop .side-headers ul li a{text-decoration:none;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;display:block;padding:.25em .5em}:host header .nav-desktop .side-headers ul li a:focus{background-color:transparent;outline-offset:-.25em;outline:#ffdd57 solid .25em}:host header .nav-desktop .side-headers ul li a:hover{text-decoration:underline;-webkit-text-decoration-color:rgba(51,63,72,.25);text-decoration-color:rgba(51,63,72,.25)}:host header .nav-desktop .menu-headers{height:4.5em;-ms-grid-column:3;grid-column-start:3;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-right:-1em}:host header .nav-desktop .menu-headers>li{margin-top:auto;-ms-flex-item-align:end;align-self:flex-end}:host header .nav-desktop .menu-headers>li .button-link{font-family:\"BG Flame Bold\",sans-serif;cursor:pointer;padding:.5em 1em}:host header .nav-desktop .menu-headers>li .button-link:focus{outline-offset:-.25em;outline:#ffdd57 solid .25em}:host header .nav-desktop .menu-headers>li .button-link:hover{text-decoration:underline;-webkit-text-decoration-color:rgba(51,63,72,.25);text-decoration-color:rgba(51,63,72,.25)}:host header .nav-mobile{border-bottom:1px solid #c8c9c7;display:-ms-grid;display:grid;-ms-grid-columns:5% 1fr 5%;grid-template-columns:5% 1fr 5%;-ms-grid-rows:4.5em 1fr;grid-template-rows:4.5em 1fr}:host header .nav-mobile .nav-top{display:-ms-grid;display:grid;-ms-grid-columns:minmax(10em,.6fr) 1fr 3em;grid-template-columns:minmax(10em,.6fr) 1fr 3em;-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:-4;grid-column-end:-2;position:relative;-ms-grid-row:1;grid-row-start:1}:host header .nav-mobile .nav-top .nav-toggle{z-index:1;position:relative;-ms-grid-column:3;grid-column-start:3;background-color:transparent;display:block;width:3em;cursor:pointer}:host header .nav-mobile .nav-top .nav-toggle ns-icon{z-index:1;position:absolute;top:0;right:0;width:3em;height:3em}:host header .nav-mobile .nav-top .nav-toggle .nav-label{position:absolute;bottom:0;right:0;left:0;text-align:center}:host header .nav-mobile .nav-top .nav-toggle::before{position:absolute;content:\"\";top:0;right:-1em;bottom:0;left:-1em}:host header .nav-mobile .nav-heading{display:-ms-grid;display:grid;-ms-grid-columns:3em 1fr 3em;grid-template-columns:3em 1fr 3em;position:relative;-ms-grid-row:1;grid-row-start:1;-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:-4;grid-column-end:-2;background-color:#fff;border-bottom:1px solid #c8c9c7}:host header .nav-mobile .nav-heading .nav-back{display:block;position:absolute;top:0;left:0;width:3em;height:4.5em;cursor:pointer}:host header .nav-mobile .nav-heading .nav-back ns-icon{position:absolute;top:0;right:0;width:3em;height:3em}:host header .nav-mobile .nav-heading .nav-back .nav-label{position:absolute;bottom:0;right:0;left:0;text-align:center}:host header .nav-mobile .nav-heading .nav-back::before{position:absolute;content:\"\";top:0;right:-1em;bottom:0;left:-2.5em}:host header .nav-mobile .nav-heading .heading-text{font-size:1.25em;-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;font-family:\"BG Flame Bold\",sans-serif;line-height:1.2;margin-bottom:0;padding:.5em;display:-webkit-box;display:-ms-flexbox;display:flex;vertical-align:middle;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host header .nav-panel{height:calc(100vh - 4.5em);height:calc((var(--vh,1vh) * 100) - 4.5em);background:#f7f7f7;position:absolute;left:0;right:0;overflow-y:auto;-webkit-overflow-scrolling:touch}:host header .nav-panel .button-link{display:block;border-bottom:1px solid #c8c9c7;padding:1em .5em 1em 5%}:host header .nav-panel .button-link .label-holder{font-family:\"BG Flame Bold\",sans-serif;font-size:1.25em;line-height:1.2;pointer-events:none}:host header .nav-panel .button-link .icon{display:block;float:right;pointer-events:none;width:2em;height:2em;margin-left:.5em;margin-top:-.25em}:host header .nav-panel .button-link.link{background:#fff;text-decoration:none;color:#003c71}:host header .nav-panel .button-link.link:visited{color:#003c71}:host header .nav-panel .button-link.link .icon{float:left;width:1.5625em;height:1.5625em;margin-top:0;margin-right:.5em;margin-left:-.5em}:host header .nav-panel .side-headers{margin-top:2em}:host header .nav-panel .headers-link{margin-top:2em}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host ul{padding-left:0!important;margin-bottom:0!important;margin-top:0!important;max-width:inherit!important;max-width:unset!important}:host ul li{margin-top:0!important;margin-bottom:0!important}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host ul{padding-left:0!important;margin-bottom:0!important;margin-top:0!important;max-width:inherit!important;max-width:unset!important}:host ul li{margin-top:0!important;margin-bottom:0!important}}@supports (-ms-ime-align:auto){:host ul{padding-left:0!important;margin-bottom:0!important;margin-top:0!important;max-width:inherit!important;max-width:unset!important}:host ul li{margin-top:0!important;margin-bottom:0!important}}";

var timeout = null;
var nsHeader =
function (_LitElement) {
  _inherits(nsHeader, _LitElement);
  _createClass(nsHeader, [{
    key: "setVerticalHeight",
    value: function setVerticalHeight() {
      var height = navigator.userAgent.indexOf('Chrome') !== -1 ? window.innerHeight : document.documentElement.clientHeight;
      var vh = height * 0.01;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    }
  }], [{
    key: "properties",
    get: function get() {
      return _defineProperty({
        type: {
          type: String
        },
        logo: {
          type: String
        },
        alt: {
          type: String
        },
        help: {
          type: String
        },
        business: {
          type: String
        },
        account: {
          type: String
        }
      }, 'hide-links', {
        type: Boolean
      });
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$8)]);
    }
  }]);
  function nsHeader() {
    var _this;
    _classCallCheck(this, nsHeader);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsHeader).call(this));
    _this.type = 'header';
    _this.logo = 'https://www.britishgas.co.uk/nucleus/images/logo.svg';
    _this.alt = 'British Gas';
    _this.help = '';
    _this.business = '';
    _this.account = '';
    _this['hide-links'] = false;
    _this.heading = undefined;
    _this.viewport = undefined;
    _this.content = _this.list;
    _this.mobileOpen = false;
    _this.viewType = 'header';
    _this.viewId = undefined;
    _this.previousViewIds = [];
    _this.previousHeadings = [];
    _this.setVerticalHeight();
    return _this;
  }
  _createClass(nsHeader, [{
    key: "createLinkContent",
    value: function createLinkContent(text, icon) {
      var addIcon = function addIcon() {
        if (icon) {
          return "\n        <span class=\"icon\">\n          <ns-icon type=\"".concat(icon, "\">\n        </span>");
        }
        return '';
      };
      return "\n    ".concat(addIcon(), "\n    <span class=\"label-holder\">\n      ").concat(text, "\n    </span>\n    ");
    }
  }, {
    key: "closeMenuPanels",
    value: function closeMenuPanels() {
      var flyouts = Array.from(this.shadowRoot.querySelectorAll('.nav-flyout'));
      clearTimeout(timeout);
      setTimeout(function () {
        flyouts.forEach(function (flyout) {
          flyout.setAttribute('aria-expanded', 'false');
          flyout.querySelector('.menu-panel').setAttribute('hidden', 'true');
        });
      }, 250);
    }
  }, {
    key: "openMenuPanel",
    value: function openMenuPanel(id) {
      var _this2 = this;
      timeout = setTimeout(function () {
        var flyouts = Array.from(_this2.shadowRoot.querySelectorAll('.nav-flyout'));
        flyouts.forEach(function (flyout, index) {
          if (index === parseInt(id)) {
            flyout.setAttribute('aria-expanded', 'true');
            flyout.querySelector('.menu-panel').removeAttribute('hidden');
          } else {
            flyout.setAttribute('aria-expanded', 'false');
            flyout.querySelector('.menu-panel').setAttribute('hidden', 'true');
          }
        });
      }, 250);
    }
  }, {
    key: "toggleMobileBodyStyles",
    value: function toggleMobileBodyStyles() {
      if (this.mobileOpen) {
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
      } else {
        document.body.style.overflow = 'auto';
        document.body.style.position = 'inherit';
      }
    }
  }, {
    key: "resetMobileView",
    value: function resetMobileView() {
      this.viewType = 'header';
      this.viewId = undefined;
      this.previousViewIds = [];
      this.previousHeadings = [];
    }
  }, {
    key: "mobileToggle",
    value: function mobileToggle() {
      if (this.mobileOpen) {
        this.resetMobileView();
      }
      this.mobileOpen = !this.mobileOpen;
      this.toggleMobileBodyStyles();
      this.requestUpdate();
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this3 = this;
      this.viewport = this.viewportType;
      window.addEventListener('resize', function () {
        _this3.setVerticalHeight();
        if (_this3.viewport !== _this3.viewportType) {
          _this3.viewport = _this3.viewportType;
          _this3.requestUpdate();
        }
      });
    }
  }, {
    key: "updated",
    value: function updated() {
      var _this4 = this;
      Array.from(this.shadowRoot.querySelectorAll('.button-link-list')).forEach(function (li) {
        li.addEventListener('focusout', function () {
          if (_this4.viewportType === 'desktop') {
            setTimeout(function () {
              var node = document.getSelection().anchorNode;
              var isNavButton = node.classList && node.classList.contains('button-link') || false;
              if (isNavButton) {
                _this4.closeMenuPanels();
              }
            }, 0);
          }
        });
        li.addEventListener('mouseleave', function () {
          if (_this4.viewportType === 'desktop') {
            _this4.closeMenuPanels();
          }
        });
      });
      Array.from(this.shadowRoot.querySelectorAll('.button-link')).forEach(function (link) {
        var types = {
          header: 'subheader',
          subheader: 'links',
          link: undefined
        };
        var type = link.getAttribute('data-type');
        var headingText = link.textContent.trim();
        var key = link.getAttribute('data-key');
        link.addEventListener('click', function () {
          if (_this4.viewportType === 'mobile') {
            var location = types[type];
            if (location) {
              _this4.previousViewIds.push(_this4.viewId);
              _this4.viewType = location;
              _this4.viewId = key;
              _this4.headingText = headingText;
              _this4.previousHeadings.push(_this4.headingText);
            } else {
              _this4.mobileToggle();
            }
            _this4.requestUpdate();
          }
          if (_this4.viewportType === 'desktop') {
            _this4.openMenuPanel(key);
          }
        });
        link.addEventListener('mouseenter', function () {
          if (_this4.viewportType === 'desktop') {
            _this4.openMenuPanel(key);
          }
        });
        link.addEventListener('keypress', function (e) {
          var keyCode = e.which || e.keyCode;
          if (_this4.viewportType === 'desktop' && keyCode === 13) {
            _this4.openMenuPanel(key);
          }
        });
      });
      if (this.shadowRoot.querySelector('.nav-back')) {
        this.shadowRoot.querySelector('.nav-back').addEventListener('click', function () {
          var types = {
            links: 'subheader',
            subheader: 'header'
          };
          var headingText = _this4.previousHeadings[_this4.previousHeadings.length - 2];
          var previousId = _this4.previousViewIds[_this4.previousViewIds.length - 1];
          _this4.previousHeadings.pop();
          _this4.previousViewIds.pop();
          _this4.headingText = headingText;
          _this4.viewType = types[_this4.viewType];
          _this4.viewId = previousId;
          _this4.requestUpdate();
        });
      }
      if (this.shadowRoot.querySelector('.nav-toggle')) {
        this.shadowRoot.querySelector('.nav-toggle').addEventListener('click', function () {
          _this4.mobileToggle();
        });
      }
      this.setVerticalHeight();
    }
  }, {
    key: "render",
    value: function render() {
      return html(["\n      <header>\n        ".concat(this.skipLinks, "\n        ").concat(this.desktopView, "\n        ").concat(this.mobileView, "\n      </header>\n    ")]);
    }
  }, {
    key: "viewportType",
    get: function get() {
      var width = window.innerWidth;
      return width >= 720 ? 'desktop' : 'mobile';
    }
  }, {
    key: "list",
    get: function get() {
      if (this.children && this.children.length > 0) {
        var content = toJSON$1(this.children[0]);
        var headers = [];
        var headerLinks = [];
        var subheaders = [];
        var links = [];
        content.forEach(function (list) {
          if (list[0] && list[0][0] && list[0][0].tagName === 'a' && list[0][0].text) {
            headers.push(list[0][0].text);
            headerLinks.push(list[0][0].attributes[0].href);
          }
          var subs = [];
          if (list[1]) {
            list[1].forEach(function (sub, key) {
              if (sub[0] && sub[0].tagName === 'h3' && sub[0].text) {
                subs.push(sub[0].text);
              }
              var sublinks = [];
              if (sub[1]) {
                sub[1].forEach(function (link) {
                  if (link[0] && link[0].tagName === 'a' && link[0].text) {
                    sublinks.push({
                      text: link[0].text,
                      href: link[0].attributes[0].href,
                      sub: key
                    });
                  }
                });
              }
              links.push(sublinks);
            });
          }
          subheaders.push(subs);
        });
        return {
          headers: headers,
          subheaders: subheaders,
          headerLinks: headerLinks,
          links: links
        };
      }
      return '';
    }
  }, {
    key: "links",
    get: function get() {
      var _this5 = this;
      var list = this.content && this.content.links;
      var viewport = this.viewportType;
      return list && list.map(function (links, key) {
        var isShown = _this5.viewType === 'links' && parseInt(_this5.viewId) === key;
        var allLinks = links.map(function (link, key) {
          var icon = viewport === 'mobile' ? 'arrow-right' : undefined;
          var content = _this5.createLinkContent(link.text, icon);
          return "\n          <li>\n            <a data-type=\"link\" href=\"".concat(link.href, "\" class=\"link button-link\" data-key=").concat(key, " role=\"button\">\n              ").concat(content, "\n            </a>\n          </li>");
        }).join('');
        return "\n        <ul class=\"menu-links\" data-key=".concat(key, " ").concat(isShown ? '' : 'hidden', ">\n          ").concat(allLinks, "\n        </ul>\n      ");
      }).filter(function (node) {
        return node;
      }).join('') || '';
    }
  }, {
    key: "subHeaders",
    get: function get() {
      var _this6 = this;
      var list = this.content && this.content.subheaders;
      var viewport = this.viewportType;
      var key = 0;
      return list && list.map(function (subheaders, num) {
        var isShown = _this6.viewType === 'subheader' && parseInt(_this6.viewId) === num;
        var headerLinkContent = _this6.headerLinks[num];
        var headerLink = "<li class=\"headers-link\">\n        <a data-type=\"link\" href=\"".concat(headerLinkContent.link, "\" class=\"link button-link\">\n          ").concat(_this6.createLinkContent(headerLinkContent.text, 'arrow-right'), "\n        </a>\n      </li>");
        var subhead = subheaders.map(function (sub) {
          var icon = viewport === 'mobile' ? 'chevron-right' : undefined;
          var content = _this6.createLinkContent(sub, icon);
          var li = "\n          <li>\n            <div data-type=\"subheader\" class=\"subheader button-link\" data-key=".concat(key, " role=\"button\">\n              ").concat(content, "\n            </div>\n          </li>");
          key += 1;
          return li;
        }).join('');
        return "\n        <ul class=\"menu-subheaders\" data-key=\"".concat(num, "\" ").concat(isShown ? '' : 'hidden', ">\n          ").concat(subhead, "\n          ").concat(viewport === 'mobile' ? "".concat(headerLink) : '', "\n        </ul>\n      ");
      }).filter(function (node) {
        return node;
      }).join('') || '';
    }
  }, {
    key: "headers",
    get: function get() {
      var _this7 = this;
      var headers = this.content && this.content.headers;
      var viewport = this.viewportType;
      var isShown = this.viewType === 'header';
      var panels = this.menuPanels;
      var headerList = headers && headers.map(function (header, key) {
        var icon = viewport === 'mobile' ? 'chevron-right' : undefined;
        var content = _this7.createLinkContent(header, icon);
        var desktopAria = "aria-haspopup=\"true\" aria-controls=\"menu-panel-".concat(key, "\"");
        return "\n        <li class=\"button-link-list\">\n          <div data-type=\"header\" ".concat(viewport === 'desktop' ? desktopAria : '', " class=\"button-link\" data-key=").concat(key, " role=\"button\" tabindex=\"0\">\n            ").concat(content, "\n          </div>\n          ").concat(viewport === 'desktop' ? panels[key] : '', "\n        </li>");
      }).join('') || '';
      return "\n    <ul class=\"menu-headers\" ".concat(isShown ? '' : 'hidden', ">\n      ").concat(headerList, "\n    </ul>\n    ");
    }
  }, {
    key: "secondaryHeaders",
    get: function get() {
      var _this8 = this;
      var viewport = this.viewportType;
      var icon = viewport === 'mobile' ? 'arrow-right' : undefined;
      var secondaryLink = function secondaryLink(link, text) {
        return "\n      <li>\n        <a data-type=\"link\" class=\"link button-link\" href=\"".concat(link, "\">").concat(_this8.createLinkContent(text, icon), "</a>\n      </li>");
      };
      return "\n      ".concat(this.help || this.business || this.account ? '<nav aria-label="Secondary header" class="side-headers"><ul>' : '', "\n        ").concat(this.help ? secondaryLink(this.help, 'Help &amp; Support') : '', "\n        ").concat(this.business ? secondaryLink(this.business, 'My Business') : '', "\n        ").concat(this.account ? secondaryLink(this.account, 'Manage Account') : '', "\n      ").concat(this.help || this.business || this.account ? '</ul></nav>' : '', "\n    ");
    }
  }, {
    key: "headerLinks",
    get: function get() {
      var headerLinks = this.content.headerLinks;
      var headers = this.content.headers;
      return headers.map(function (header, key) {
        var headerLink = headerLinks[key];
        return {
          link: headerLink,
          text: "Find out more about ".concat(header.toLowerCase())
        };
      });
    }
  }, {
    key: "menuPanels",
    get: function get() {
      var _this9 = this;
      var list = this.content && this.content.subheaders;
      var links = this.content && this.content.links;
      var viewport = this.viewportType;
      var i = 0;
      var panels = list && list.map(function (panel, key) {
        var headerLink = _this9.headerLinks[key];
        var panelContent = panel.map(function (subheadings) {
          var linkList = links[i].map(function (link) {
            return "<li><a href=\"".concat(link.href, "\">").concat(link.text, "</a></li>");
          }).join('');
          i += 1;
          return "\n        <ns-card type=\"nav\">\n          <h2 slot=\"heading\">".concat(subheadings, "</h2>\n          <ul slot=\"paragraph\">\n            ").concat(linkList, "\n          </ul>\n        </ns-card>");
        }).join('');
        return "\n      <div id=\"menu-panel-".concat(key, "\" class=\"nav-flyout\" aria-expanded=\"false\">\n        <ns-panel class=\"menu-panel\" hidden>\n          <div class=\"splash triple\">\n            ").concat(panelContent, "\n          </div>\n          <div class=\"splash\">\n            <ns-cta href=\"").concat(headerLink.link, "\" type=\"text\">").concat(headerLink.text, "</ns-cta>\n          </div>\n        </ns-panel>\n      </div>");
      }) || '';
      return viewport === 'desktop' ? panels : '';
    }
  }, {
    key: "logoHolder",
    get: function get() {
      return "\n      <a class=\"logo-holder\" href=\"/\"><img src=\"".concat(this.logo, "\" alt=\"").concat(this.alt, "\" /></a>\n    ");
    }
  }, {
    key: "heading",
    get: function get() {
      if (this.mobileOpen && this.headingText && this.headingText.length > 0) {
        return "\n      <div class=\"nav-heading\">\n        <div class=\"nav-back\">\n          <ns-icon type=\"chevron-left\"></ns-icon>\n          <div class=\"nav-label\">Back</div>\n        </div>\n        <h2 class=\"heading-text\">".concat(this.headingText, "</h2>\n      </div>\n      ");
      }
      this.headingText = undefined;
      return '';
    }
  }, {
    key: "mobileToggleButton",
    get: function get() {
      if (this['hide-links']) {
        return '';
      }
      var iconType = this.mobileOpen ? 'cross' : 'menu';
      var message = this.mobileOpen ? 'Close' : 'Menu';
      return "\n    <button class=\"nav-toggle\">\n      <ns-icon type=\"".concat(iconType, "\"></ns-icon>\n      <div class=\"nav-label\">").concat(message, "</div>\n    </button>\n    ");
    }
  }, {
    key: "desktopView",
    get: function get() {
      if (this.viewportType !== 'desktop') {
        return '';
      }
      if (this.mobileOpen) {
        this.mobileOpen = false;
        this.resetMobileView();
        this.toggleMobileBodyStyles();
      }
      return "\n      <nav aria-label=\"Main header\" class=\"nav-desktop\">\n        <div class=\"nav-top\">\n          ".concat(this.logoHolder, "\n          ").concat(this['hide-links'] ? '' : this.secondaryHeaders, "\n          ").concat(this['hide-links'] ? '' : this.headers, "\n        </div>\n      </nav>\n    ");
    }
  }, {
    key: "mobileView",
    get: function get() {
      if (this.viewportType !== 'mobile') {
        return '';
      }
      return "\n      <div class=\"nav-mobile\">\n        <div class=\"nav-top\">\n          ".concat(this.logoHolder, "\n          ").concat(this.mobileToggleButton, "\n        </div>\n        ").concat(this.heading, "\n      </div>\n\n      <nav aria-label=\"Header menu\" class=\"nav-panel\" ").concat(!this['hide-links'] && this.mobileOpen ? '' : 'hidden', ">\n        ").concat(this['hide-links'] ? '' : this.headers, "\n        ").concat(this['hide-links'] ? '' : this.subHeaders, "\n        ").concat(this['hide-links'] ? '' : this.links, "\n        ").concat(this['hide-links'] ? '' : this.secondaryHeaders, "\n      </nav>\n    ");
    }
  }, {
    key: "skipLinks",
    get: function get() {
      return "\n      <nav aria-label=\"Skip links\" class=\"nav-skip\">\n        <ul>\n          <li><a href=\"#content\">Skip to content</a></li>\n          <li><a href=\"#footer\">Skip to footer</a></li>\n        </ul>\n      </nav>\n    ";
    }
  }]);
  return nsHeader;
}(LitElement);
customElements.define('ns-header', nsHeader);

var styles$9 = ".sr-only{clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;width:1px;margin:-1px;overflow:hidden;padding:0;position:absolute}:host{display:block}:host([hidden]){display:none}";

var nsHighlighter =
function (_LitElement) {
  _inherits(nsHighlighter, _LitElement);
  _createClass(nsHighlighter, null, [{
    key: "properties",
    get: function get() {
      return {
        type: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$9)]);
    }
  }]);
  function nsHighlighter() {
    var _this;
    _classCallCheck(this, nsHighlighter);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsHighlighter).call(this));
    _this.type = 'error';
    return _this;
  }
  _createClass(nsHighlighter, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var host = this.shadowRoot.host;
      var slots = Array.from(this.shadowRoot.querySelectorAll('slot'));
      host.setAttribute('role', 'alert');
      slots.forEach(function (slot) {
        slot.assignedNodes().forEach(function (el) {
          var slotType = el.getAttribute && el.getAttribute('slot') || '';
          if (slotType === 'heading') {
            el.setAttribute('role', 'heading');
            el.setAttribute('aria-level', '2');
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return html(["\n    <div class=\"card-holder\">\n      <span class=\"sr-only\">".concat(this.getType, "</span>\n      <ns-card type=\"highlighter\" decoration=\"").concat(this.getType, "\">\n        <slot slot=\"heading\" name=\"heading\"></slot>\n        <slot slot=\"paragraph\"></slot>\n      </ns-card>\n    </div>\n    ")]);
    }
  }, {
    key: "getType",
    get: function get() {
      var type = this.type;
      var allowedTypes = ['error', 'warning', 'info', 'success'];
      if (allowedTypes.includes(type)) {
        return type;
      }
      return '';
    }
  }]);
  return nsHighlighter;
}(LitElement);
customElements.define('ns-highlighter', nsHighlighter);

var downToUp = "transform=\"translate(0, 30)  scale(1, -1)\"";
var rightToLeft = "transform=\"translate(30, 0) scale(-1, 1)\"";
var icons = {
  plus: ['M17 6 15 6 15 15 6 15 6 17 15 17 15 26 17 26 17 17 26 17 26 15 17 15 17 6z'],
  minus: ['M6,15H26V17H6Z'],
  cross: ['M24 6.59 16 14.59 8 6.59 6.59 8 14.59 16 6.59 24 8 25.41 16 17.41 24 25.41 25.41 24 17.41 16 25.41 8 24 6.59z'],
  arrow: ['M16.15 6.59 14.73 8.01 21.73 15.01 7.15 15.01 7.15 17.01 21.73 17.01 14.73 24.01 16.15 25.42 25.56 16.01 16.15 6.59z'],
  chevron: ['M11.74 8 19.74 16 11.74 24 13.15 25.41 22.56 16 13.15 6.59 11.74 8z'],
  chevronDown: ['M16 19.59 8 11.59 6.59 13.01 16 22.42 25.41 13.01 24 11.59 16 19.59z'],
  download: ['M24 13.41 22.59 12 17 17.59 17 5 15 5 15 17.59 9.41 12 8 13.41 16 21.41 24 13.41z', 'M26,20v4a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V20H4v4a3,3,0,0,0,3,3H25a3,3,0,0,0,3-3V20Z'],
  tick: ['M13 24.41 6.59 18 8 16.59 13 21.59 25 9.59 26.41 11 13 24.41z'],
  hive: ['M25.41,15.16a5,5,0,0,0,.9-.19.75.75,0,0,0,.55-.73.74.74,0,0,0-.55-.73,2.48,2.48,0,0,0-.9,0L17,14.36a11,11,0,0,1-2.15,0l-8.39-.84a2.48,2.48,0,0,0-.9,0,.75.75,0,0,0-.55.73.76.76,0,0,0,.55.73,5.17,5.17,0,0,0,.9.19l8,1.29a9.21,9.21,0,0,0,2.87,0Z', 'M23.94,11.3a5.27,5.27,0,0,0,.9-.11.76.76,0,0,0,.55-.73.77.77,0,0,0-.55-.74,3.82,3.82,0,0,0-.9-.06H8a3.91,3.91,0,0,0-.91.06.77.77,0,0,0-.55.74.76.76,0,0,0,.55.73A5.39,5.39,0,0,0,8,11.3l7.1.5a13.07,13.07,0,0,0,1.77,0Z', 'M18.45,5.14a22.09,22.09,0,0,0-5,0l-2.5.29a5.27,5.27,0,0,0-.9.12.78.78,0,0,0-.55.74A.75.75,0,0,0,10,7a3.86,3.86,0,0,0,.9.07H21a3.91,3.91,0,0,0,.9-.07.76.76,0,0,0,.55-.73.79.79,0,0,0-.55-.74,5.41,5.41,0,0,0-.9-.12Z', 'M14.29,21.07a6.86,6.86,0,0,0,3.31,0l7.29-1.79c.46-.11.64-.15.9-.23a.77.77,0,0,0,.55-.74.78.78,0,0,0-.55-.74,2.3,2.3,0,0,0-.9.08L17,19.05a5.81,5.81,0,0,1-2.12,0L7,17.65a2.32,2.32,0,0,0-.9-.08.78.78,0,0,0-.55.74.77.77,0,0,0,.55.74c.26.08.44.12.9.23Z', 'M22.72,24a7.5,7.5,0,0,0,.9-.34.78.78,0,0,0,.55-.74.77.77,0,0,0-.55-.74,1.83,1.83,0,0,0-.9.11l-4.93,1.33a7.1,7.1,0,0,1-3.69,0L9.18,22.29a1.83,1.83,0,0,0-.9-.11.77.77,0,0,0-.55.74.78.78,0,0,0,.55.74,7.5,7.5,0,0,0,.9.34l4.67,1.63a6.4,6.4,0,0,0,4.19,0Z'],
  settings: ['M17.27,28H14.68a2.85,2.85,0,0,1-2.53-2.66,1.08,1.08,0,0,0-.45-.51l-1.27-.78a.61.61,0,0,0-.48,0,2.76,2.76,0,0,1-3.39-1.12c0-.07-1.07-2.1-1.3-2.53l0-.1a2.92,2.92,0,0,1,1.06-3.5.75.75,0,0,0,.28-.54v-.59a.68.68,0,0,0-.3-.47,2.93,2.93,0,0,1-1-3.49l0-.09L6.52,9.16A2.78,2.78,0,0,1,10,8a.6.6,0,0,0,.52,0l1.25-.77a1,1,0,0,0,.43-.52A2.82,2.82,0,0,1,14.68,4h2.64a2.85,2.85,0,0,1,2.53,2.66,1.08,1.08,0,0,0,.45.51L21.57,8a.61.61,0,0,0,.48,0,2.76,2.76,0,0,1,3.39,1.12l1.3,2.54.05.09a2.92,2.92,0,0,1-1.06,3.5.75.75,0,0,0-.28.54v.6a.72.72,0,0,0,.29.46,2.93,2.93,0,0,1,1,3.49l-.05.1c-.23.43-1.26,2.46-1.26,2.46A2.78,2.78,0,0,1,22,24.05a.63.63,0,0,0-.52,0l-1.25.77a1,1,0,0,0-.43.52A2.82,2.82,0,0,1,17.32,28Zm-2.43-2h2.32a.86.86,0,0,0,.69-.8,3,3,0,0,1,1.34-2l1.33-.82a2.68,2.68,0,0,1,2.27-.16.76.76,0,0,0,.95-.31S24.67,20,25,19.52a.9.9,0,0,0-.34-1.06l0,0a2.76,2.76,0,0,1-1.13-2v-.76a2.78,2.78,0,0,1,1.13-2.1A.91.91,0,0,0,25,12.5L23.7,10.06a.75.75,0,0,0-.9-.25,2.61,2.61,0,0,1-2.22-.12l-1.36-.83a3,3,0,0,1-1.37-2A.86.86,0,0,0,17.16,6H14.84a.84.84,0,0,0-.69.79,3,3,0,0,1-1.34,2l-1.33.82a2.68,2.68,0,0,1-2.27.16.75.75,0,0,0-1,.32S7.33,12,7.05,12.5a.91.91,0,0,0,.34,1.06,2.76,2.76,0,0,1,1.15,2v.77a2.78,2.78,0,0,1-1.13,2.09.92.92,0,0,0-.36,1.08C7.33,20.05,8.3,22,8.3,22a.76.76,0,0,0,.9.25,2.61,2.61,0,0,1,2.22.12l1.36.83a3,3,0,0,1,1.37,2A.87.87,0,0,0,14.84,26Z', 'M16,21c-3.41,0-5-1.59-5-5s1.59-5,5-5,5,1.63,5,5S19.36,21,16,21Zm0-8c-2.33,0-3,.67-3,3s.67,3,3,3,3-.73,3-3S18.27,13,16,13Z'],
  loading: ['M25,7v3.6A10.5,10.5,0,0,0,5.5,16h2a8.49,8.49,0,0,1,16-4H20v2h7V7Z', 'M24.5,16a8.49,8.49,0,0,1-16,4H12V18H5v7H7v-3.6A10.5,10.5,0,0,0,26.5,16Z'],
  menu: ['M5 7h22v2H5z', 'M5 15h22v2H5z', 'M5 23h22v2H5z']
};
var duplicateIcons = {
  chevronRight: icons.chevron,
  arrowRight: icons.arrow,
  arrowLeft: icons.arrow,
  chevronLeft: icons.chevron,
  chevronUp: icons.chevronDown
};
var transforms = {
  arrowLeft: rightToLeft,
  chevronLeft: rightToLeft,
  chevronUp: downToUp
};
var solid = {
  appliance: ['M26,1H6A3,3,0,0,0,3,4V31H26a3,3,0,0,0,3-3V4A3,3,0,0,0,26,1ZM8.12,8c0-1,.4-1.44,1.44-1.44S11,7,11,8s-.44,1.44-1.44,1.44S8.12,9,8.12,8ZM9.5,19.5c0-4.64,1.81-6.5,6.5-6.5,2.9,0,4.75.77,5.71,2.56C20,20.57,13.52,21,9.56,20.83,9.52,20.41,9.5,20,9.5,19.5ZM16,26c-3.33,0-5.2-.94-6-3.15l1,0c5.34,0,9.31-1.59,11.41-4.48,0,.35.05.71.05,1.1C22.5,24.14,20.51,26,16,26ZM23,8.88H17a1,1,0,1,1,0-2h6a1,1,0,1,1,0,2Z'],
  bill: ['M23.21,7h4.63L22.05,1.15V5.81A1.16,1.16,0,0,0,23.21,7Z', 'M23.21,9a3.17,3.17,0,0,1-3.16-3.16V1H9A3,3,0,0,0,6,4V31H25a3,3,0,0,0,3-3V9ZM18.4,26H11V20h0a1,1,0,0,1,0-2h0V14.89a3.61,3.61,0,0,1,1-2.72A3.75,3.75,0,0,1,14.71,11a3.85,3.85,0,0,1,3.82,3.89,1,1,0,0,1-1,1,1,1,0,0,1-1-1,1.88,1.88,0,0,0-1.82-2A1.71,1.71,0,0,0,13,14.83V18h3.1a1,1,0,0,1,0,2H13v4H18.4a1,1,0,0,1,0,2Z'],
  boiler: ['M9.66,23A42.33,42.33,0,0,1,5,22.74V31H24a3,3,0,0,0,3-3V15.56C24,20.37,17.9,23,9.66,23Zm8,4.76c-1,0-1.39-.4-1.39-1.39S16.62,25,17.62,25,19,25.4,19,26.38,18.58,27.77,17.62,27.77Zm4.76,0c-1,0-1.38-.4-1.38-1.39S21.39,25,22.38,25s1.39.4,1.39,1.38S23.35,27.77,22.38,27.77Z', 'M24,1H8A3,3,0,0,0,5,4V20.76s.07,0,.11,0C22.92,22.69,26.35,13.87,27,9.91V4A3,3,0,0,0,24,1ZM20,8H12a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z'],
  electricity: ['M27,12.11a11,11,0,1,0-22,0,11.17,11.17,0,0,0,2.92,7.55,38.91,38.91,0,0,1,2.62,3.41,10.26,10.26,0,0,1,1.79,4.25v.87A2.79,2.79,0,0,0,15.08,31h1.84a2.79,2.79,0,0,0,2.75-2.81v-.87c0-1.2.92-2.6,1.75-3.95l.19-.3c.84-1.37,2.45-3.39,2.45-3.39h0A11.17,11.17,0,0,0,27,12.11Zm-15.54.14a.92.92,0,1,1-1.83,0A6.45,6.45,0,0,1,16,5.74a.94.94,0,0,1,0,1.87A4.6,4.6,0,0,0,11.46,12.25Zm6.37,15.94a.92.92,0,0,1-.91.93H15.08a.92.92,0,0,1-.91-.93V26.31h3.66Z'],
  energy: ['M30.15,14.83a1,1,0,0,0-1-.72H17.05l10-11.46A1,1,0,0,0,26.33,1H12.45a1,1,0,0,0-.88.52L1.93,19.18a1,1,0,0,0,.88,1.47h7.33L5.29,29.53A1,1,0,0,0,6.17,31a1,1,0,0,0,.54-.16l23-14.9A1,1,0,0,0,30.15,14.83ZM15.48,6l-4.21,7.72a.87.87,0,0,1-.77.45.83.83,0,0,1-.42-.11.87.87,0,0,1-.34-1.18L14,5.16A.87.87,0,0,1,15.48,6Z'],
  error: ['M30.12,13.88l-12-12c-1.17-1.17-3.08-1.17-4.24,0l-12,12c-1.17,1.17-1.17,3.08,0,4.24l12,12c1.17,1.17,3.08,1.17,4.24,0 l12-12C31.29,16.95,31.29,15.05,30.12,13.88z M15.45,8h2l-0.13,10h-2.54l-0.14-9.26C14.64,8.19,14.88,8,15.45,8z M16.01,24 c-1.21,0-1.66-0.46-1.66-1.59s0.48-1.58,1.66-1.58c1.21,0,1.67,0.47,1.67,1.58C17.68,23.52,17.22,24,16.01,24z'],
  gas: ['M24.83,13.32a22.24,22.24,0,0,0-1.5-1.87A18,18,0,0,1,21.48,9a7.88,7.88,0,0,1-1.06-6.47L21,1l-1.63.29a11.86,11.86,0,0,0-6.63,4.14C10,9,10.74,13.94,11.34,16.55a8,8,0,0,1-2.15-3.46l-.6-1.64L7.53,12.83A11.64,11.64,0,0,0,5,19.93a11,11,0,1,0,19.83-6.61Zm-9.1,12.89a1,1,0,0,1,0-1.92,4.58,4.58,0,0,0,4.57-4.58,1,1,0,0,1,1.92,0A6.5,6.5,0,0,1,15.73,26.21Z'],
  home: ['M28.31,11.08,18.24,1.88a3.43,3.43,0,0,0-4.62,0L3.81,11.09A5.43,5.43,0,0,0,2.08,15V27.76A3.3,3.3,0,0,0,5.43,31H13V22.42c0-2.15.83-3,3-3s3,.85,3,3V31h7.74a3.3,3.3,0,0,0,3.34-3.24V15.06A5.4,5.4,0,0,0,28.31,11.08Z'],
  info: ['M15.95,1c-8.28,0-15,6.72-15,15c0,8.28,6.72,15,15,15c8.28,0,15-6.72,15-15C30.95,7.72,24.23,1,15.95,1z M17.44,25h-3 V14.85c0-0.31,0.07-0.54,0.2-0.66C14.77,14.07,14.99,14,15.3,14h2.14V25z M17.23,10.63c-0.27,0.26-0.7,0.39-1.29,0.39 c-0.59,0-1.02-0.13-1.28-0.39c-0.26-0.26-0.39-0.67-0.39-1.23c0-0.58,0.13-1,0.39-1.25c0.26-0.26,0.68-0.39,1.28-0.39 c0.59,0,1.02,0.13,1.29,0.39c0.27,0.26,0.4,0.68,0.4,1.25C17.63,9.96,17.5,10.37,17.23,10.63z'],
  meter: ['M28,5H4A3,3,0,0,0,1,8V25H28a3,3,0,0,0,3-3V8A3,3,0,0,0,28,5Zm0,13a1,1,0,0,1-1,1H24.93a.53.53,0,0,0,0-.12V17a1,1,0,0,0-2,0v1.88S23,19,23,19H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1h8.07a.53.53,0,0,0,0,.12V13a1,1,0,0,0,2,0V11.12S15,11,15,11H27a1,1,0,0,1,1,1Z', 'M9.08,13.12a1,1,0,0,0-1,1V16a1,1,0,0,0,2,0V14.12A1,1,0,0,0,9.08,13.12Z', 'M19,12.94a1,1,0,0,0-1,1v1.87a1,1,0,1,0,2,0V13.94A1,1,0,0,0,19,12.94Z'],
  protect: ['M16.76,1.11a2.7,2.7,0,0,0-2.05,0l-11,4.46V6.2c0,.33,0,8,1.14,12.6s4.3,8.12,10.39,11.82l.47.29.48-.29c6.08-3.7,9.29-7.35,10.39-11.82S27.73,6.53,27.73,6.2V5.57Zm3.11,19.38a1,1,0,0,1-1,.94H16.65V19.57a.92.92,0,1,0-1.83,0v1.86H12.63a1,1,0,0,1-1-.94V16.72a.91.91,0,0,1,.31-.68L15,13.31a1.11,1.11,0,0,1,1.43,0l.73.63L19.55,16a.93.93,0,0,1,.32.68Zm1.23-9.74a.9.9,0,0,1-.66.28.89.89,0,0,1-.64-.26,5.68,5.68,0,0,0-7.91,0,.9.9,0,0,1-1.29,0,.93.93,0,0,1,0-1.32,7.5,7.5,0,0,1,10.46,0A1,1,0,0,1,21.1,10.75Z'],
  rewards: ['M18,10.78V31h7.63a2.49,2.49,0,0,0,2.49-2.49V15.45h.94A2.49,2.49,0,0,0,31.55,13V11.71a2.49,2.49,0,0,0-2.48-2.49H23a4.68,4.68,0,0,0,2.42-4.08A4.28,4.28,0,0,0,21.55,1C18.4.83,16.79,4.16,16,6.88,15.24,4.23,13.69,1,10.7,1h-.25A4.28,4.28,0,0,0,6.58,5.14,4.68,4.68,0,0,0,9,9.22H2.93A2.49,2.49,0,0,0,.45,11.71V13a2.49,2.49,0,0,0,2.48,2.49h.94V28.51A2.49,2.49,0,0,0,6.36,31H14V10.78ZM10.56,2.87c1.41-.07,3.15,1.49,4,6h-.41c-2.82-.33-5.8-1.48-5.73-3.71A2.4,2.4,0,0,1,10.56,2.87Zm10.88,0A2.4,2.4,0,0,1,23.55,5.2c.07,2.23-2.91,3.38-5.73,3.71h-.41C18.29,4.36,20,2.8,21.44,2.87Z'],
  success: ['M15.89,1C7.61,1.06,0.94,7.82,1,16.11S7.82,31.06,16.11,31c8.28-0.06,14.95-6.82,14.89-15.11S24.18,0.94,15.89,1z M13.53,24.07L6.45,17l2.12-2.12l4.95,4.95l9.9-9.9l2.12,2.12L13.53,24.07z'],
  warning: ['M30.6,24.5l-12-20.7C18,2.8,17,2.3,16,2.3s-2,0.5-2.6,1.5l-12,20.7C0.3,26.5,1.7,29,4,29h24C30.3,29,31.8,26.5,30.6,24.5z M15.42,10h2l-0.13,9h-2.54l-0.14-8.26C14.61,10.19,14.85,10,15.42,10z M15.99,25c-1.21,0-1.66-0.46-1.66-1.59s0.48-1.58,1.66-1.58 c1.21,0,1.67,0.47,1.67,1.58S17.2,25,15.99,25z']
};
var outline = {
  appliance: ['M23,8.88H17a1,1,0,1,1,0-2h6a1,1,0,1,1,0,2Z', 'M9.56,6.5600000000000005A1.44,1.44,0,0,1,9.56,9.44A1.44,1.44,0,0,1,9.56,6.5600000000000005Z', 'M26,31H3V4A3,3,0,0,1,6,1H26a3,3,0,0,1,3,3V28A3,3,0,0,1,26,31ZM5,29H26a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1H6A1,1,0,0,0,5,4Z', 'M16,12c-4.71,0-7,2.29-7,7s2.29,7,7,7,7-2.36,7-7S20.64,12,16,12Zm0,2c1.89,0,3.19.45,4,1.41-.78,4.28-5.94,4.62-8.94,4.45A7.81,7.81,0,0,1,11,19C11,15.43,12.39,14,16,14Zm0,10c-2.4,0-3.8-.65-4.48-2.12l.71,0c4.13,0,7.18-1.27,8.73-3.59,0,.23,0,.44,0,.69C21,22.57,19.47,24,16,24Z'],
  bill: ['M18.4,24H13V20H16.1a1,1,0,0,0,0-2H13V14.83A1.71,1.71,0,0,1,14.71,13a1.88,1.88,0,0,1,1.82,2,1,1,0,0,0,1,1,1,1,0,0,0,1-1A3.85,3.85,0,0,0,14.71,11,3.75,3.75,0,0,0,12,12.17a3.59,3.59,0,0,0-1,2.72V18h0a1,1,0,0,0,0,2h0v6H18.4a1,1,0,0,0,0-2Z', 'M21.41,1H9A3,3,0,0,0,6,4V31H25a3,3,0,0,0,3-3V7.59ZM21,3.41,25.59,8H22a1,1,0,0,1-1-1ZM25,29H8V4A1,1,0,0,1,9,3H19V7a3,3,0,0,0,3,3h4V28A1,1,0,0,1,25,29Z'],
  boiler: ['M21.62,24A1.38,1.38,0,0,1,21.62,26.759999999999998A1.38,1.38,0,0,1,21.62,24Z', 'M17.62,24A1.38,1.38,0,0,1,17.62,26.759999999999998A1.38,1.38,0,0,1,17.62,24Z', 'M20,8H12a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z', 'M24,1H8A3,3,0,0,0,5,4V31H24a3,3,0,0,0,3-3V4A3,3,0,0,0,24,1ZM8,3H24a1,1,0,0,1,1,1v6.9c-1.55,9.54-12.47,9.87-18,9.4V4A1,1,0,0,1,8,3ZM24,29H7V22.3c1.05.08,2.07.14,3.05.14,7,0,12.21-2.19,15-6.19V28A1,1,0,0,1,24,29Z'],
  electricity: ['M16,5.74a6.45,6.45,0,0,0-6.37,6.51.92.92,0,1,0,1.83,0A4.6,4.6,0,0,1,16,7.61a.94.94,0,0,0,0-1.87Z', 'M27,12.11a11,11,0,1,0-22,0,11.17,11.17,0,0,0,2.92,7.55,38.91,38.91,0,0,1,2.62,3.41,10.26,10.26,0,0,1,1.79,4.25v.87A2.79,2.79,0,0,0,15.08,31h1.84a2.79,2.79,0,0,0,2.75-2.81v-.87c0-1.2.92-2.6,1.75-3.95l.19-.3c.84-1.37,2.45-3.39,2.45-3.39h0A11.17,11.17,0,0,0,27,12.11ZM17.83,28.19a.92.92,0,0,1-.91.93H15.08a.92.92,0,0,1-.91-.93V26.31h3.66Zm2.23-6.12-.19.3c-.4.65-.83,1.35-1.19,2.07H13.39a22.8,22.8,0,0,0-1.3-2.37A44.15,44.15,0,0,0,9.3,18.42l0,0a9.2,9.2,0,1,1,15.9-6.28,9.29,9.29,0,0,1-2.49,6.33A44.11,44.11,0,0,0,20.06,22.07Z'],
  energy: ['M24.69,2.74,15.74,13a1.74,1.74,0,0,0-.28,1.86,1.75,1.75,0,0,0,1.59,1h9.62L8.23,27.78l3.44-6.3a1.74,1.74,0,0,0-1.53-2.57H4.06L12.89,2.74h11.8M26.33,1H12.45a1,1,0,0,0-.88.52L1.93,19.18a1,1,0,0,0,.88,1.47h7.33L5.29,29.53a1,1,0,0,0,.2,1.2,1,1,0,0,0,.68.27,1,1,0,0,0,.54-.16l23-14.9a1,1,0,0,0,.42-1.11,1,1,0,0,0-1-.72H17.05l10-11.46A1,1,0,0,0,26.33,1Z', 'M10.5,14.16a.83.83,0,0,1-.42-.11.87.87,0,0,1-.34-1.18L14,5.16A.87.87,0,0,1,15.48,6l-4.21,7.72A.87.87,0,0,1,10.5,14.16Z'],
  error: ['m30.12 13.88-12-12c-.58-.59-1.35-.88-2.12-.88s-1.54.29-2.12.88l-12 12c-1.17 1.17-1.17 3.08 0 4.24l12 12c.58.59 1.35.88 2.12.88s1.54-.29 2.12-.88l12-12c1.17-1.17 1.17-3.07 0-4.24zm-1.41 2.83-12 12c-.25.25-.55.29-.71.29s-.46-.04-.71-.29l-12-12c-.25-.25-.29-.55-.29-.71s.04-.46.29-.71l12-12c.25-.25.55-.29.71-.29s.46.04.71.29l12 12c.38.39.38 1.03 0 1.42z', 'm15.45 8h2l-.13 10h-2.54l-.14-9.26c0-.55.24-.74.81-.74z', 'm16.01 24c-1.21 0-1.66-.46-1.66-1.59s.48-1.58 1.66-1.58c1.21 0 1.67.47 1.67 1.58s-.46 1.59-1.67 1.59z'],
  gas: ['M16,31A11,11,0,0,1,5,19.93a11.61,11.61,0,0,1,2.53-7.1l1.06-1.38.6,1.64a8,8,0,0,0,2.15,3.46C10.74,13.94,10,9,12.72,5.43a11.86,11.86,0,0,1,6.63-4.14L21,1l-.56,1.56A7.88,7.88,0,0,0,21.48,9a18,18,0,0,0,1.85,2.42,22.24,22.24,0,0,1,1.5,1.87A11.09,11.09,0,0,1,16,31ZM8.12,15.41a9.29,9.29,0,0,0-1.21,4.52,9.09,9.09,0,1,0,18.18,0,9.24,9.24,0,0,0-.94-4.06h0a13.83,13.83,0,0,0-.86-1.43,8.67,8.67,0,0,0-.62-.74l0,0q-.4-.49-.81-1a18.69,18.69,0,0,1-2-2.67,10.3,10.3,0,0,1-1.62-6.39,9.78,9.78,0,0,0-4,3C11.6,10,13,15.2,13.46,17.17c.2.74.27,1,.09,1.39a1.09,1.09,0,0,1-1.13.59C11.5,19.1,9.59,18.22,8.12,15.41Z', 'M15.73,26.21a1,1,0,0,1,0-1.92A4.59,4.59,0,0,0,20.3,19.7a1,1,0,0,1,1.92,0A6.51,6.51,0,0,1,15.73,26.21Z'],
  home: ['M26.66,31H18V23.11c0-1.64-.45-2.11-2-2.11s-2,.43-2,2.11V31H5.34A3.29,3.29,0,0,1,2,27.79V15.06a5.43,5.43,0,0,1,1.73-3.94l9.81-9.18a3.42,3.42,0,0,1,4.61,0l10.07,9.2a5.41,5.41,0,0,1,1.78,4V27.79A3.29,3.29,0,0,1,26.66,31ZM20,29h6.64A1.3,1.3,0,0,0,28,27.79V15.1a3.4,3.4,0,0,0-1.13-2.51L16.8,3.39a1.42,1.42,0,0,0-1.89,0L5.09,12.58A3.44,3.44,0,0,0,4,15.06V27.79A1.3,1.3,0,0,0,5.34,29H12V23.11C12,20.34,13.29,19,16,19s4,1.38,4,4.11Z'],
  info: ['M15.95,1c-8.28,0-15,6.72-15,15c0,8.28,6.72,15,15,15c8.28,0,15-6.72,15-15C30.95,7.72,24.23,1,15.95,1z M15.95,29 c-7.17,0-13-5.83-13-13c0-7.17,5.83-13,13-13s13,5.83,13,13C28.95,23.17,23.12,29,15.95,29z', 'M15.94,7.75c-0.59,0-1.02,0.13-1.28,0.39c-0.26,0.26-0.39,0.68-0.39,1.25c0,0.56,0.13,0.97,0.39,1.23 c0.26,0.26,0.68,0.39,1.28,0.39c0.59,0,1.02-0.13,1.29-0.39c0.27-0.26,0.4-0.67,0.4-1.23c0-0.58-0.13-1-0.4-1.25 C16.96,7.88,16.53,7.75,15.94,7.75z', 'M14.64,14.19c-0.13,0.12-0.2,0.35-0.2,0.66V25h3V14H15.3C14.99,14,14.77,14.07,14.64,14.19z'],
  meter: ['M28,26H1V9A3,3,0,0,1,4,6H28a3,3,0,0,1,3,3V23A3,3,0,0,1,28,26ZM3,24H28a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H4A1,1,0,0,0,3,9Z', 'M10,17.81a1,1,0,0,1-1-1V14.94a1,1,0,1,1,2,0v1.87A1,1,0,0,1,10,17.81Z', 'M18,17.81a1,1,0,0,1-1-1V14.94a1,1,0,1,1,2,0v1.87A1,1,0,0,1,18,17.81Z', 'M26,10.69H6a1,1,0,0,0-1,1V20a1,1,0,0,0,1,1H26a1,1,0,0,0,1-1V11.69A1,1,0,0,0,26,10.69ZM25,19H23a1.06,1.06,0,0,0,0-.19V16.94a1,1,0,1,0-2,0v1.87A1.06,1.06,0,0,0,21,19H7V12.69h6.05a1,1,0,0,0-.05.25v1.87a1,1,0,1,0,2,0V12.94a1,1,0,0,0-.05-.25H25Z'],
  protect: ['M16,31l-.47-.29C9.44,27,6.24,23.36,5.14,18.89S4,6.62,4,6.29V5.66L15,1.2a2.67,2.67,0,0,1,2,0L28,5.66v.63c0,.33,0,8-1.14,12.6S22.56,27,16.47,30.71ZM5.84,6.92A63,63,0,0,0,6.92,18.44c1,3.89,3.68,7,9.08,10.38,5.4-3.36,8.12-6.49,9.08-10.38A63,63,0,0,0,26.16,6.92l-9.82-4a.89.89,0,0,0-.68,0Z', 'M20.71,11.12a.89.89,0,0,1-.64-.26,5.68,5.68,0,0,0-7.91,0,.91.91,0,0,1-1.3,0,.94.94,0,0,1,0-1.32,7.49,7.49,0,0,1,10.45,0,.94.94,0,0,1,0,1.32A.9.9,0,0,1,20.71,11.12Z', 'M20.41,15.47l-3.14-2.71a2,2,0,0,0-2.64,0l-3.06,2.71A1.85,1.85,0,0,0,11,16.85v3.74a1.91,1.91,0,0,0,2,1.86h6.2a1.91,1.91,0,0,0,1.95-1.86V16.86A1.83,1.83,0,0,0,20.41,15.47ZM19.1,20.59H16.92v-2a.92.92,0,1,0-1.84,0v2H12.9a.41.41,0,0,1-.1,0h0v-3.7l3.06-2.7a.21.21,0,0,1,.24,0l3.13,2.68v3.69S19.18,20.59,19.1,20.59Z'],
  rewards: ['M29.07,9.22H23a4.68,4.68,0,0,0,2.42-4.08A4.28,4.28,0,0,0,21.55,1C18.4.83,16.79,4.16,16,6.88,15.24,4.23,13.69,1,10.7,1h-.25A4.28,4.28,0,0,0,6.58,5.14,4.68,4.68,0,0,0,9,9.22H2.93A2.49,2.49,0,0,0,.45,11.71V13a2.49,2.49,0,0,0,2.48,2.49h.94V28.51A2.49,2.49,0,0,0,6.36,31h8.4V10.78h2.48V31h8.4a2.49,2.49,0,0,0,2.49-2.49V15.45h.94A2.49,2.49,0,0,0,31.55,13V11.71A2.49,2.49,0,0,0,29.07,9.22ZM10.56,2.87c1.41-.07,3.15,1.49,4,6h-.41c-2.82-.33-5.8-1.48-5.73-3.71A2.4,2.4,0,0,1,10.56,2.87Zm2.33,26.26H6.36a.63.63,0,0,1-.63-.62V15.45h7.16Zm-9-15.55H2.93A.62.62,0,0,1,2.31,13V11.71a.62.62,0,0,1,.62-.62h10v2.49ZM21.44,2.87A2.4,2.4,0,0,1,23.55,5.2c.07,2.23-2.91,3.38-5.73,3.71h-.41C18.29,4.36,20,2.8,21.44,2.87Zm4.83,25.64a.63.63,0,0,1-.63.62H19.11V15.45h7.16ZM29.69,13a.62.62,0,0,1-.62.62h-10V11.09h10a.62.62,0,0,1,.62.62Z'],
  success: ['m16 3c7.17 0 13 5.83 13 13s-5.83 13-13 13-13-5.83-13-13 5.83-13 13-13m0-2c-8.28 0-15 6.72-15 15s6.72 15 15 15 15-6.72 15-15-6.72-15-15-15z', 'm13.53 24.07-7.08-7.07 2.13-2.12 4.95 4.95 9.89-9.9 2.13 2.12z'],
  warning: ['M15.99,21.83c1.21,0,1.67,0.47,1.67,1.58S17.2,25,15.99,25s-1.66-0.46-1.66-1.59S14.81,21.83,15.99,21.83z M14.61,10.74 c0-0.55,0.24-0.74,0.81-0.74h2l-0.13,9h-2.54L14.61,10.74z', 'M16,4.3c0.21,0,0.61,0.07,0.87,0.5l12.02,20.73c0.24,0.41,0.11,0.77,0.01,0.95C28.81,26.63,28.54,27,28,27H4 c-0.48,0-0.72-0.3-0.83-0.48c-0.09-0.16-0.28-0.58-0.04-1.02L15.11,4.83C15.39,4.37,15.79,4.3,16,4.3 M16,2.3c-1,0-2,0.5-2.6,1.5 l-12,20.7C0.3,26.5,1.7,29,4,29h24c2.3,0,3.8-2.5,2.6-4.5l-12-20.7C18,2.8,17,2.3,16,2.3L16,2.3z']
};
Object.keys(solid).forEach(function (icon) {
  icons[icon] = solid[icon];
  icons["".concat(icon, "Solid")] = solid[icon];
});
Object.keys(duplicateIcons).forEach(function (icon) {
  icons["".concat(icon)] = duplicateIcons[icon];
});
Object.keys(outline).forEach(function (icon) {
  icons["".concat(icon, "Outline")] = outline[icon];
});
var generateSVG = function generateSVG() {
  var icon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'arrowRight';
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '100%';
  var paths = icons[icon];
  var inner = paths.map(function (path) {
    return "<path d=\"".concat(path, "\"/>");
  }).join('');
  var transform = transforms[icon] || '';
  return "\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" width=\"".concat(size, "\" height=\"").concat(size, "\" preserveAspectRatio=\"xMidYMid meet\">\n  <g ").concat(transform, ">\n    ").concat(inner, "\n  </g>\n</svg>\n  ");
};

var styles$a = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host-context(.animated:hover) .arrow svg,:host-context(.animated:hover) .arrow-right svg{-webkit-transform:translateX(.25em);transform:translateX(.25em);-webkit-transition:.3s ease-in;transition:.3s ease-in}:host-context(.animated:hover) .download svg path:nth-child(1){-webkit-transform:translateY(.15em);transform:translateY(.15em);-webkit-transition:.3s ease-in;transition:.3s ease-in}:host{display:inline-block}:host svg{display:block;fill:currentColor}:host .loading svg{-webkit-animation:1.5s linear infinite spinner;animation:1.5s linear infinite spinner}";

var nsIcon =
function (_LitElement) {
  _inherits(nsIcon, _LitElement);
  _createClass(nsIcon, [{
    key: "sizes",
    value: function sizes(size) {
      size -= 1;
      var sizes = [16, 32, 48, 64, 72];
      return sizes[size] || '100%';
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        type: {
          type: String
        },
        size: {
          type: Number
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$a)]);
    }
  }]);
  function nsIcon() {
    var _this;
    _classCallCheck(this, nsIcon);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsIcon).call(this));
    _this.type = 'arrow';
    return _this;
  }
  _createClass(nsIcon, [{
    key: "camelCase",
    value: function camelCase(string) {
      return string.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
      });
    }
  }, {
    key: "updated",
    value: function updated() {
      this.setAttribute('aria-hidden', 'true');
    }
  }, {
    key: "render",
    value: function render() {
      var computedSize = this.sizes(this.size);
      var size = computedSize === '100%' ? computedSize : "".concat(computedSize, "px");
      return html(["\n      <style>\n        :host, :host .icon {\n          max-width: ".concat(size, ";\n          height: ").concat(size, ";\n        }\n      </style>\n      <div class=\"icon ").concat(this.type, "\">\n        ").concat(generateSVG(this.camelCase(this.type), computedSize), "\n      </div>\n    ")]);
    }
  }]);
  return nsIcon;
}(LitElement);
customElements.define('ns-icon', nsIcon);

var illustrations = {};
illustrations.appliance = "<defs><linearGradient id=\"appliance-linear-gradient\" x1=\"32.97\" y1=\"1070.49\" x2=\"62.77\" y2=\"1005.77\" gradientTransform=\"translate(0 -982)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#003c71\"/><stop offset=\"1\" stop-color=\"#005eb8\"/></linearGradient><linearGradient id=\"appliance-linear-gradient-2\" x1=\"46.32\" y1=\"1059.65\" x2=\"-3.09\" y2=\"999.23\" xlink:href=\"#appliance-linear-gradient\"/><linearGradient id=\"appliance-linear-gradient-3\" x1=\"44.5\" y1=\"1061.12\" x2=\"50.38\" y2=\"1032.77\" gradientTransform=\"translate(0 -982)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#083f6f\"/><stop offset=\"0.2\" stop-color=\"#084178\"/><stop offset=\"0.53\" stop-color=\"#084692\"/><stop offset=\"0.94\" stop-color=\"#094fbb\"/><stop offset=\"1\" stop-color=\"#0950c1\"/></linearGradient><linearGradient id=\"appliance-linear-gradient-4\" x1=\"66.44\" y1=\"968.92\" x2=\"41.8\" y2=\"1009.91\" gradientTransform=\"translate(0 -982)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#8ed8f8\"/><stop offset=\"1\" stop-color=\"#12a1fe\"/></linearGradient><linearGradient id=\"appliance-linear-gradient-5\" x1=\"10.19\" y1=\"974.04\" x2=\"34.81\" y2=\"1007.16\" xlink:href=\"#appliance-linear-gradient-4\"/></defs><path d=\"M10,84.1a9,9,0,0,0,9,9H77a9,9,0,0,0,9-9V25.6H10Z\" style=\"fill:url(#appliance-linear-gradient)\"/><path d=\"M10,25.6V84.1a9,9,0,0,0,9,9H48V25.6Z\" style=\"fill:url(#appliance-linear-gradient-2)\"/><circle cx=\"48\" cy=\"59\" r=\"24\" style=\"fill:#4db8ff\"/><path d=\"M59.1,61.2a14.32,14.32,0,0,1-11.8.6c-1.7-.7-3.2-1.7-4.8-2.3a14.23,14.23,0,0,0-12.4.9c.2,6.1,1.4,10.3,3.7,12.7l.1.1c2.6,2.5,7.2,3.8,14.2,3.8,6.8,0,11.4-1.3,14-3.8s4-7.3,4-14.2c0-1.5-.1-3.1-.2-4.6A16.5,16.5,0,0,1,59.1,61.2Z\" style=\"fill:url(#appliance-linear-gradient-3)\"/><path d=\"M86,25.6H10V12.1a9,9,0,0,1,9-9H77a9,9,0,0,1,9,9Z\" style=\"fill:url(#appliance-linear-gradient-4)\"/><path d=\"M48,25.6H10V12.1a9,9,0,0,1,9-9H39a9,9,0,0,1,9,9Z\" style=\"fill:url(#appliance-linear-gradient-5)\"/><path d=\"M71.3,12.6h-12c-2.7,0-3.8,1.1-3.8,3.8s1,3.8,3.8,3.8h12c2.6,0,3.8-1.1,3.8-3.8S73.9,12.6,71.3,12.6Z\" style=\"fill:#003c71;opacity:0.30000001192092896;isolation:isolate\"/><circle cx=\"22.2\" cy=\"16.3\" r=\"3.8\" style=\"fill:#003c71;opacity:0.30000001192092896;isolation:isolate\"/><circle cx=\"23.6\" cy=\"14.3\" r=\"3.8\" style=\"fill:#fff\"/><circle cx=\"35.5\" cy=\"16.3\" r=\"3.8\" style=\"fill:#003c71;opacity:0.30000001192092896;isolation:isolate\"/><circle cx=\"36.9\" cy=\"14.3\" r=\"3.8\" style=\"fill:#fff\"/><path d=\"M72.7,10.6h-12c-2.7,0-3.7,1.1-3.7,3.8s1,3.8,3.8,3.8h12c2.6,0,3.8-1.1,3.8-3.8S75.3,10.6,72.7,10.6Z\" style=\"fill:#fff\"/><path d=\"M44.9,43.7c7,0,11.8,1.3,14.6,4.1s4.2,7.6,4.2,14.7-1.4,11.9-4.2,14.7S52,81.3,44.9,81.3s-12.1-1.3-14.8-4c-1-1-4-4-4-14.7s3-13.7,4-14.7c2.7-2.9,7.5-4.1,14.8-4.2m.9-6.4c-17.3,0-20.3,6.5-20.3,23.7s6.8,20.3,20.3,20.3c16.6,0,24-2.9,24-20s-7.4-24-24-24Z\" style=\"fill:#003c71;opacity:0.30000001192092896;isolation:isolate\"/><path d=\"M48,41c6.8,0,11.4,1.3,14,3.8S66,52,66,59s-1.3,11.5-4,14.1S54.8,77,48,77c-7,0-11.7-1.2-14.2-3.8S30,66,30,59s1.2-11.7,3.8-14.2S41,41,48,41m0-6c-17.3,0-24,6.9-24,24s6.7,24,24,24c16.7,0,24-6.9,24-24S64.7,35,48,35Z\" style=\"fill:#fff\"/>";
illustrations.oven = "<defs><linearGradient id=\"oven-linear-gradient\" x1=\"28.4\" y1=\"83.92\" x2=\"32.68\" y2=\"92.32\" gradientTransform=\"matrix(1, 0, 0, -1, 0, 98)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#003c71\"/><stop offset=\"1\" stop-color=\"#005eb8\"/></linearGradient><linearGradient id=\"oven-linear-gradient-2\" x1=\"61.4\" y1=\"83.92\" x2=\"65.68\" y2=\"92.32\" xlink:href=\"#oven-linear-gradient\"/><linearGradient id=\"oven-linear-gradient-3\" x1=\"19.85\" y1=\"-8.22\" x2=\"58.7\" y2=\"68.03\" xlink:href=\"#oven-linear-gradient\"/><linearGradient id=\"oven-linear-gradient-4\" x1=\"62.64\" y1=\"8.54\" x2=\"19.65\" y2=\"61.64\" xlink:href=\"#oven-linear-gradient\"/><linearGradient id=\"oven-linear-gradient-5\" x1=\"6.5\" y1=\"81\" x2=\"63.8\" y2=\"81\" gradientTransform=\"matrix(1, 0, 0, -1, 0, 98)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#8ed8f8\"/><stop offset=\"1\" stop-color=\"#12a1fe\"/></linearGradient></defs><rect x=\"21.5\" y=\"7\" width=\"20\" height=\"2\" style=\"fill:url(#oven-linear-gradient)\"/><rect x=\"54.5\" y=\"7\" width=\"20\" height=\"2\" style=\"fill:url(#oven-linear-gradient-2)\"/><path d=\"M72,93H24a9,9,0,0,1-9-9V18a9,9,0,0,1,9-9H72a9,9,0,0,1,9,9V84A9.09,9.09,0,0,1,72,93Z\" style=\"fill:url(#oven-linear-gradient-3)\"/><path d=\"M39,93H24a9,9,0,0,1-9-9V18a9,9,0,0,1,9-9H39a9,9,0,0,1,9,9V84A9,9,0,0,1,39,93Z\" style=\"fill:url(#oven-linear-gradient-4)\"/><rect x=\"15\" y=\"9\" width=\"66\" height=\"16\" style=\"fill:url(#oven-linear-gradient-5)\"/><circle cx=\"68\" cy=\"19.1\" r=\"3.8\" style=\"fill:#003c71;opacity:0.30000001192092896;isolation:isolate\"/><circle cx=\"70\" cy=\"17.1\" r=\"3.8\" style=\"fill:#fff\"/><circle cx=\"24\" cy=\"19.1\" r=\"3.8\" style=\"fill:#003c71;opacity:0.30000001192092896;isolation:isolate\"/><circle cx=\"26\" cy=\"17.1\" r=\"3.8\" style=\"fill:#fff\"/><circle cx=\"38.7\" cy=\"19.1\" r=\"3.8\" style=\"fill:#003c71;opacity:0.30000001192092896;isolation:isolate\"/><circle cx=\"40.7\" cy=\"17.1\" r=\"3.8\" style=\"fill:#fff\"/><circle cx=\"53.3\" cy=\"19.1\" r=\"3.8\" style=\"fill:#003c71;opacity:0.30000001192092896;isolation:isolate\"/><circle cx=\"55.3\" cy=\"17.1\" r=\"3.8\" style=\"fill:#fff\"/><path d=\"M64.1,34H31.9A10.93,10.93,0,0,0,21,44.9V67.3c0,7.3,4.9,13.2,10.9,13.2H64.1c6,0,10.9-5.9,10.9-13.2V45A11,11,0,0,0,64.1,34Z\" style=\"fill:#4db8ff\"/><path d=\"M31.9,34A10.93,10.93,0,0,0,21,44.9V69.7A10.93,10.93,0,0,0,31.9,80.6H48V34Z\" style=\"fill:#003c71;opacity:0.15000000596046448;isolation:isolate\"/><rect x=\"16\" y=\"46\" width=\"60\" height=\"4\" style=\"fill:#003c71;opacity:0.30000001192092896;isolation:isolate\"/><rect x=\"18\" y=\"44\" width=\"60\" height=\"4\" style=\"fill:#fff\"/>";
illustrations.boiler = "<defs><linearGradient id=\"boiler-linear-gradient\" x1=\"69.41\" y1=\"1956.81\" x2=\"31.67\" y2=\"2050.11\" gradientTransform=\"translate(0 -1964)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#5dbc64\"/><stop offset=\"1\" stop-color=\"#00493b\"/></linearGradient><linearGradient id=\"boiler-linear-gradient-2\" x1=\"44.63\" y1=\"999.69\" x2=\"44.92\" y2=\"999.04\" gradientTransform=\"translate(0 -982)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#003c71\"/><stop offset=\"1\" stop-color=\"#005eb8\"/></linearGradient></defs><path d=\"M25.7,93H66.2a4.49,4.49,0,0,0,4.5-4.46v0h-45Z\" style=\"fill:#c0e300\"/><g style=\"opacity:0.20000000298023224\"><rect x=\"25.7\" y=\"88.5\" width=\"22.5\" height=\"4.5\" style=\"fill:#42505a\"/></g><path d=\"M72,88.5H24a9,9,0,0,1-9-9V12a9,9,0,0,1,9-9H72a9,9,0,0,1,9,9V79.5A9,9,0,0,1,72,88.5Z\" style=\"fill:url(#boiler-linear-gradient)\"/><rect x=\"15\" y=\"66.8\" width=\"66\" height=\"4.5\" style=\"fill:#c0e300\"/><rect x=\"15\" y=\"66.8\" width=\"33\" height=\"4.5\" style=\"fill:#42505a;opacity:0.20000000298023224;isolation:isolate\"/><path d=\"M72,3H24a9,9,0,0,0-9,9V59.3h.3C68.8,65.1,79.1,38.6,81,26.7V12A9,9,0,0,0,72,3Z\" style=\"opacity:0.15;isolation:isolate\"/><circle cx=\"66.1\" cy=\"81.4\" r=\"3.8\" style=\"opacity:0.25;isolation:isolate\"/><circle cx=\"67.6\" cy=\"79.4\" r=\"3.8\" style=\"fill:#fff\"/><circle cx=\"53.1\" cy=\"81.4\" r=\"3.8\" style=\"opacity:0.25;isolation:isolate\"/><circle cx=\"54.5\" cy=\"79.4\" r=\"3.8\" style=\"fill:#fff\"/><path d=\"M44.66,17.52a2.7,2.7,0,0,0,.35-.59A2.7,2.7,0,0,1,44.66,17.52Z\" style=\"fill:url(#boiler-linear-gradient-2)\"/><path d=\"M56.38,28.89c-.11-.2-.23-.4-.35-.6L56,28.16l-.49-.72h0a20.13,20.13,0,0,0-1.61-2.07,17.57,17.57,0,0,1-2-2.6,8.35,8.35,0,0,1-1.15-6.95l.63-1.67h0l-.19,0h0l-1.54.27a12.87,12.87,0,0,0-7.16,4.46c-2.61,3.32-2.94,8.55-1.4,12.22a7,7,0,0,0,.71,1.28h0A11.09,11.09,0,0,1,39,28.57a6.76,6.76,0,0,1-.36-1.24l0-.19v0a8,8,0,0,1-.13-2.18,4.4,4.4,0,0,0-.5.46l0,.05a16.56,16.56,0,0,0-1.61,2.11,11.68,11.68,0,0,0-.66,1.06,12.3,12.3,0,0,0-1.57,5.9,11.88,11.88,0,1,0,22.31-5.62Z\" style=\"opacity:0.25;isolation:isolate\"/><path d=\"M58.38,26.89c-.11-.2-.23-.4-.35-.6L58,26.16l-.49-.72h0a20.13,20.13,0,0,0-1.61-2.07,17.57,17.57,0,0,1-2-2.6,8.35,8.35,0,0,1-1.15-6.95l.63-1.67h0l-.19,0h0l-1.54.27a12.87,12.87,0,0,0-7.16,4.46c-2.61,3.32-2.94,8.55-1.4,12.22a7,7,0,0,0,.71,1.28h0A11.09,11.09,0,0,1,41,26.57a6.76,6.76,0,0,1-.36-1.24l0-.19v0a8,8,0,0,1-.13-2.18,4.4,4.4,0,0,0-.5.46l0,.05a16.56,16.56,0,0,0-1.61,2.11,11.68,11.68,0,0,0-.66,1.06,12.3,12.3,0,0,0-1.57,5.9,11.88,11.88,0,1,0,22.31-5.62Z\" style=\"fill:#c0e300\"/><path d=\"M47.07,44.34l.45,0,.27-.14c5.05-2.63,5.05-7.71,3.16-11.89-1.32-2.92-3-3.83-4.41-7.77s1-10.4,6.54-12.37l-1.54.27a12.87,12.87,0,0,0-7.16,4.46c-2.61,3.32-2.94,8.55-1.4,12.22,1.47,3.51,6,5.38,6.44,9.55C49.71,41.72,48.51,43.44,47.07,44.34Z\" style=\"fill:#fff\"/>";
illustrations.bulb = "<defs><linearGradient id=\"bulb-linear-gradient\" x1=\"25.64\" y1=\"1053.76\" x2=\"78.02\" y2=\"970.51\" gradientTransform=\"translate(0 -982)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ff7a00\"/><stop offset=\"1\" stop-color=\"#ffe500\"/></linearGradient><linearGradient id=\"bulb-linear-gradient-2\" x1=\"39.45\" y1=\"1070.12\" x2=\"54.09\" y2=\"1049.6\" gradientTransform=\"translate(0 -982)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#8b0304\"/><stop offset=\"1\" stop-color=\"#ee3124\"/></linearGradient></defs><path d=\"M48.78,93H47.26a4.48,4.48,0,0,1-4.47-4.48H53.25A4.48,4.48,0,0,1,48.78,93Z\" style=\"fill:#ffa800\"/><path d=\"M48,3A32.93,32.93,0,0,0,15,35.79a32.53,32.53,0,0,0,8.83,22.32h0s4.82,6,7.35,10l.56.9c2.5,4,5.09,8.11,5.26,11.64V81H59v-.37c.19-3.91,2.88-8.52,5.39-12.54A126.75,126.75,0,0,1,72.19,58,32.51,32.51,0,0,0,81,35.79,32.93,32.93,0,0,0,48,3Z\" style=\"fill:url(#bulb-linear-gradient)\"/><path d=\"M81,35.79A33,33,0,0,0,31.58,7.34a32.51,32.51,0,0,0,42.3,48.73A32.57,32.57,0,0,0,81,35.79Z\" style=\"fill:#ffc600;opacity:0.7\"/><path d=\"M33.75,72.32c1.7,2.9,3.09,5.76,3.21,8.31v-.38c0,4.58,1.26,8.3,5.8,8.3h10.5c4.55,0,5.7-3.72,5.7-8.3v.38c.12-2.59,1.35-5.48,2.88-8.31Z\" style=\"fill:url(#bulb-linear-gradient-2)\"/><path d=\"M33.75,72.32c1.7,2.9,3.09,5.76,3.21,8.31v-.38c0,4.58,1.26,8.3,5.8,8.3h10.5c4.55,0,5.7-3.72,5.7-8.3v.38c.12-2.59,1.35-5.48,2.88-8.31Z\" style=\"fill:url(#bulb-linear-gradient-2)\"/><path d=\"M49.39,19.46a2.82,2.82,0,0,1,0-5.63A19.34,19.34,0,0,1,68.5,33.37a2.75,2.75,0,1,1-5.5,0h0A13.78,13.78,0,0,0,49.39,19.46Z\" style=\"fill:#fff\"/><rect width=\"96\" height=\"96\" style=\"fill:none\"/><path d=\"M48,88.52H42.79A4.48,4.48,0,0,0,47.26,93H48Z\" style=\"fill:#ff7a00;opacity:0.5\"/><path d=\"M33.75,72.32c1.7,2.9,3.09,5.76,3.21,8.31v-.38c0,4.58,1.26,8.3,5.8,8.3H48V72.32Z\" style=\"opacity:0.12\"/>";
illustrations.clock = "<defs><linearGradient id=\"clock-linear-gradient\" x1=\"73.74\" y1=\"956.39\" x2=\"35.66\" y2=\"1064.89\" gradientTransform=\"translate(0 -982)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#5dbc64\"/><stop offset=\"1\" stop-color=\"#00493b\"/></linearGradient></defs><path d=\"M88,48c0,28.56-12.23,40-40,40C19.12,88,8,76.56,8,48S19.12,8,48,8C75.77,8,88,19.44,88,48Z\" style=\"fill:url(#clock-linear-gradient)\"/><path d=\"M48,8h.16V88H48C19.12,88,8,76.56,8,48S19.12,8,48,8Z\" style=\"fill:#00493b;opacity:0.3\"/><path d=\"M39.84,53.23c-1-2.06-.5-3.29,1.47-4.22L63.45,38.3c2-1,3.23-.51,4.2,1.55s.57,3.26-1.48,4.22L44,54.78C42.06,55.71,40.81,55.29,39.84,53.23Z\" style=\"opacity:0.25;isolation:isolate\"/><path d=\"M40.69,51.53c-1-2.06-.5-3.29,1.47-4.22L64.3,36.6c2-1,3.23-.51,4.2,1.55s.57,3.26-1.48,4.22L44.88,53.08C42.91,54,41.66,53.59,40.69,51.53Z\" style=\"fill:#c0e300\"/><path d=\"M53.13,54.68c-1.66,1.56-3,1.49-4.47-.1L24.88,29.78c-1.55-1.65-1.48-2.91.17-4.47s2.92-1.55,4.48.1L53.3,50.21C54.79,51.8,54.79,53.12,53.13,54.68Z\" style=\"opacity:0.25;isolation:isolate\"/><path d=\"M54,53c-1.66,1.56-3,1.49-4.47-.1L25.73,28.08c-1.55-1.65-1.48-2.91.17-4.47s2.92-1.55,4.48.1l23.77,24.8C55.64,50.1,55.64,51.42,54,53Z\" style=\"fill:#fff\"/><path d=\"M46.93,13.85c2.17,0,3.13.9,3.13,3.13s-1,3.13-3.13,3.13S43.8,19.21,43.8,17,44.67,13.85,46.93,13.85Z\" style=\"opacity:0.25;isolation:isolate\"/><path d=\"M48,12.81c2.18,0,3.13.9,3.13,3.13s-1,3.13-3.13,3.13-3.12-.9-3.12-3.13S45.72,12.81,48,12.81Z\" style=\"fill:#fff\"/><path d=\"M79.46,45.82c2.18,0,3.13.9,3.13,3.13s-1,3.13-3.13,3.13-3.12-.9-3.12-3.13S77.21,45.82,79.46,45.82Z\" style=\"opacity:0.25;isolation:isolate\"/><path d=\"M80.51,44.78c2.17,0,3.12.89,3.12,3.13S82.68,51,80.51,51s-3.13-.89-3.13-3.12S78.25,44.78,80.51,44.78Z\" style=\"fill:#fff\"/><path d=\"M46.93,78.13c2.17,0,3.13.89,3.13,3.13s-1,3.12-3.13,3.12-3.13-.89-3.13-3.12S44.67,78.13,46.93,78.13Z\" style=\"opacity:0.25;isolation:isolate\"/><path d=\"M48,77.09c2.18,0,3.13.89,3.13,3.12s-1,3.13-3.13,3.13-3.12-.89-3.12-3.13S45.72,77.09,48,77.09Z\" style=\"fill:#fff\"/><path d=\"M14.4,45.82c2.17,0,3.13.9,3.13,3.13s-1,3.13-3.13,3.13-3.13-.9-3.13-3.13S12.14,45.82,14.4,45.82Z\" style=\"opacity:0.25;isolation:isolate\"/><path d=\"M15.44,44.78c2.17,0,3.13.89,3.13,3.13S17.61,51,15.44,51s-3.13-.89-3.13-3.12S13.18,44.78,15.44,44.78Z\" style=\"fill:#fff\"/><path d=\"M48,3C15.51,3,3,15.87,3,48S15.51,93,48,93c31.24,0,45-12.87,45-45S79.24,3,48,3Zm0,85C19.12,88,8,76.56,8,48S19.12,8,48,8C75.77,8,88,19.44,88,48S75.77,88,48,88Z\" style=\"fill:#c0e300\"/><rect width=\"96\" height=\"96\" style=\"fill:none\"/>";
illustrations.gas = "<defs><linearGradient id=\"gas-linear-gradient\" x1=\"24.96\" y1=\"109.7\" x2=\"68.74\" y2=\"13.99\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#003c71\"/><stop offset=\"0.21\" stop-color=\"#003f77\"/><stop offset=\"0.49\" stop-color=\"#004788\"/><stop offset=\"0.8\" stop-color=\"#0054a3\"/><stop offset=\"1\" stop-color=\"#005eb8\"/></linearGradient><linearGradient id=\"gas-linear-gradient-2\" x1=\"63.09\" y1=\"-25.08\" x2=\"39.32\" y2=\"81.68\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#8ed8f8\"/><stop offset=\"1\" stop-color=\"#12a1fe\"/></linearGradient></defs><path d=\"M77.13,43.51c-.31-.57-.63-1.13-1-1.68l-.23-.37c-.43-.68-.89-1.35-1.37-2h0A52.53,52.53,0,0,0,70,33.68a52.84,52.84,0,0,1-5.64-7.26A23.39,23.39,0,0,1,61.2,7L63,2.33h0l-.54.09-.08,0L58,3.2A35.9,35.9,0,0,0,38,15.65c-7.3,9.28-8.22,23.88-3.91,34.15a20.36,20.36,0,0,0,2,3.57h0A31.14,31.14,0,0,1,28.5,42.62a22.17,22.17,0,0,1-1-3.47l-.09-.53v-.08a23,23,0,0,1-.36-6.09,10.62,10.62,0,0,0-1.39,1.29l-.1.12a44.5,44.5,0,0,0-4.5,5.91,34.55,34.55,0,0,0-6.24,19.42A33.18,33.18,0,1,0,77.13,43.51Z\" style=\"fill:url(#gas-linear-gradient)\"/><path d=\"M45.55,92.24l1.25.06.75-.39c14.1-7.35,14.1-21.54,8.83-33.22C52.7,50.53,48.13,48,44.07,37S46.72,7.94,62.32,2.44L58,3.2A35.9,35.9,0,0,0,38,15.65c-7.3,9.28-8.22,23.88-3.91,34.15,4.11,9.79,16.83,15,18,26.66C52.93,84.91,49.58,89.73,45.55,92.24Z\" style=\"fill:url(#gas-linear-gradient-2)\"/>";
illustrations.home = "<defs><linearGradient id=\"home-linear-gradient\" x1=\"39.94\" y1=\"1070.8\" x2=\"65.01\" y2=\"990.8\" gradientTransform=\"translate(0 -982)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ff7a00\"/><stop offset=\"0.85\" stop-color=\"#ffd500\"/><stop offset=\"1\" stop-color=\"#ffe500\"/></linearGradient><linearGradient id=\"home-linear-gradient-2\" x1=\"27.72\" y1=\"1096.89\" x2=\"65.82\" y2=\"1023.74\" gradientTransform=\"translate(0 -982)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#8b0304\"/><stop offset=\"1\" stop-color=\"#ee3124\"/></linearGradient></defs><path d=\"M72.55,93H23.48a9.2,9.2,0,0,1-9.2-9.2V40.87L48,13.27l33.74,27.6V83.8A9.2,9.2,0,0,1,72.55,93Z\" style=\"fill:url(#home-linear-gradient)\"/><path d=\"M48,13.27,14.28,40.87V83.8a9.2,9.2,0,0,0,9.2,9.2H48Z\" style=\"fill:#ff7a00;opacity:0.35\"/><path d=\"M63.46,64.26C63.43,53.39,58.74,49,48.13,49c-11,0-15.3,4.37-15.33,15.24h0V93H63.46Z\" style=\"fill:url(#home-linear-gradient-2)\"/><path d=\"M63.46,64.26C63.43,53.39,58.74,49,48.13,49,41.46,49,37.28,50.63,35,54.29c2.4-1.5,5.69-2.2,10.06-2.2,10.62,0,15.31,3.34,15.34,14.22V93h3.06Z\" style=\"opacity:0.12\"/><g style=\"opacity:0.20000000298023224\"><circle cx=\"54.79\" cy=\"72.23\" r=\"3.07\"/></g><circle cx=\"55.82\" cy=\"71.21\" r=\"3.07\" style=\"fill:#fff\"/><path d=\"M87.53,50.07a6.43,6.43,0,0,1-4.13-1.5L48,19.08,12.63,48.57a6.44,6.44,0,0,1-9.07-.81l-.06-.07a6.57,6.57,0,0,1,.87-9.2L43.88,5.57a6.44,6.44,0,0,1,8.26,0L91.66,38.49a6.57,6.57,0,0,1,.87,9.2A6.42,6.42,0,0,1,87.53,50.07Z\" style=\"fill:#d7261d\"/><rect width=\"96\" height=\"96\" style=\"fill:none\"/><path d=\"M48,4.07a6.4,6.4,0,0,0-4.12,1.5L4.37,38.49a6.57,6.57,0,0,0-.87,9.2l.06.07a6.44,6.44,0,0,0,9.07.81L48,19.08Z\" style=\"opacity:0.12\"/>";
illustrations.protect = "<defs><linearGradient id=\"protect-linear-gradient\" x1=\"20.71\" y1=\"-979.23\" x2=\"60.7\" y2=\"-889.04\" gradientTransform=\"matrix(1, 0, 0, -1, 0, -884)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#8b0304\"/><stop offset=\"1\" stop-color=\"#ee3124\"/></linearGradient><linearGradient id=\"protect-linear-gradient-2\" x1=\"49.01\" y1=\"-969.36\" x2=\"11.06\" y2=\"-849.39\" xlink:href=\"#protect-linear-gradient\"/><linearGradient id=\"protect-linear-gradient-3\" x1=\"29.08\" y1=\"50.62\" x2=\"62.92\" y2=\"50.62\" gradientTransform=\"matrix(1, 0, 0, -1, 0, 98)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#8b0304\"/><stop offset=\"1\" stop-color=\"#8b0304\" stop-opacity=\"0.5\"/></linearGradient><linearGradient id=\"protect-linear-gradient-4\" x1=\"31.32\" y1=\"-941.86\" x2=\"68.87\" y2=\"-907.65\" gradientTransform=\"matrix(1, 0, 0, -1, 0, -884)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#ff7a00\"/><stop offset=\"0.85\" stop-color=\"#ffd500\"/><stop offset=\"1\" stop-color=\"#ffe500\"/></linearGradient></defs><path d=\"M51.1,3.6a8.31,8.31,0,0,0-6.2,0L11.5,17.1V19c0,1,0,24.1,3.5,37.8S28,81,46.6,92.1L48,93l1.4-.9C67.9,80.9,77.7,70.1,81,56.6s3.5-36.8,3.5-37.8V17Z\" style=\"fill:url(#protect-linear-gradient)\"/><path d=\"M48,3a8.15,8.15,0,0,0-3.1.6L11.5,17.1V19c0,1,0,24.1,3.5,37.8S28,81,46.6,92.1L48,93h0Z\" style=\"fill:url(#protect-linear-gradient-2)\"/><path d=\"M62.9,60.4a4.2,4.2,0,0,1-4.4,3.8H49.6V56.7a3.8,3.8,0,1,0-7.6,0h0v7.5H33.1a4.08,4.08,0,0,1-4.2-3.8V45.3a4,4,0,0,1,1.2-2.7l12.6-11a4.67,4.67,0,0,1,5.9,0l2.9,2.5,9.9,8.5a3.51,3.51,0,0,1,1.3,2.7V60.4Z\" style=\"fill:url(#protect-linear-gradient-3)\"/><path d=\"M64.9,58.4a4.2,4.2,0,0,1-4.4,3.8H51.6V54.7a3.8,3.8,0,1,0-7.6,0h0v7.5H35.1a4.08,4.08,0,0,1-4.2-3.8V43.3a4,4,0,0,1,1.2-2.7l12.6-11a4.67,4.67,0,0,1,5.9,0l2.9,2.5,9.9,8.5a3.51,3.51,0,0,1,1.3,2.7V58.4Z\" style=\"fill:#fff\"/><path d=\"M67.8,45.8a3.77,3.77,0,0,1-2.1-.7L48.1,30.3,30.4,45.1a3.17,3.17,0,0,1-4.5-.4h0a3.4,3.4,0,0,1,.4-4.6L46,23.6a3.18,3.18,0,0,1,4.1,0L69.9,40a3.21,3.21,0,0,1,.4,4.6A3,3,0,0,1,67.8,45.8Z\" style=\"fill:url(#protect-linear-gradient-4)\"/>";
illustrations.tap = "<defs><linearGradient id=\"tap-linear-gradient\" x1=\"28.43%\" x2=\"100%\" y1=\"56.37%\" y2=\"46.88%\"><stop offset=\"0%\" stop-color=\"#09F\"/><stop offset=\"100%\" stop-color=\"#09F\"/></linearGradient><linearGradient id=\"tap-linear-gradient-2\" x1=\"28.43%\" x2=\"100%\" y1=\"51.59%\" y2=\"49.22%\"><stop offset=\"0%\" stop-color=\"#09F\"/><stop offset=\"100%\" stop-color=\"#8ED8F8\"/></linearGradient><linearGradient id=\"tap-linear-gradient-3\" x1=\"36.19%\" x2=\"82%\" y1=\"151.96%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#09F\"/><stop offset=\"100%\" stop-color=\"#8ED8F8\"/></linearGradient></defs><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#005EB8\" d=\"M44 20h8v5h-8z\"/><path fill=\"url(#tap-linear-gradient)\" d=\"M28 22h8v2h-8z\" transform=\"translate(16 3)\"/><path fill=\"#005EB8\" d=\"M40 27h16a8 8 0 0 1 8 8v11H32V35a8 8 0 0 1 8-8z\"/><path fill=\"#333F48\" d=\"M40 27h8v19H32V35a8 8 0 0 1 8-8z\" opacity=\".24\"/><path fill=\"url(#tap-linear-gradient-2)\" d=\"M16 43h32l4 5H12z\" transform=\"translate(16 3)\"/><path fill=\"#333F48\" d=\"M32 46h16v5H28z\" opacity=\".24\"/><path fill=\"#005EB8\" d=\"M28 55.5V51h40v4.5c0 1.38-8.95 2.5-20 2.5s-20-1.12-20-2.5z\"/><path fill=\"#333F48\" d=\"M28 55.5V51h20v7c-11.05 0-20-1.12-20-2.5z\" opacity=\".24\"/><path fill=\"url(#tap-linear-gradient-3)\" d=\"M32 90c-6.63 0-12-5.32-12-11.88C20 71.57 31.99 60 31.99 60S44 71.57 44 78.12C44 84.68 38.63 90 32 90z\" transform=\"translate(16 3)\"/><path fill=\"#333F48\" d=\"M48.05 63.06C44.5 66.94 39 73.68 39 78.12 39 84.68 44.37 90 51 90c2.57 0 4.94-.8 6.9-2.15A12.02 12.02 0 0 1 48 93c-6.63 0-12-5.32-12-11.88C36 74.57 47.99 63 47.99 63l.06.06zM44 20h4v7h-4z\" opacity=\".24\"/><path fill=\"#333F48\" d=\"M44 20h8l-8 5z\" opacity=\".5\"/><path fill=\"#005EB8\" d=\"M25.14 21.29a9.14 9.14 0 1 1 7.7-14.08 4.57 4.57 0 0 0 7.46 0 9.14 9.14 0 0 1 15.4 0 4.57 4.57 0 0 0 7.46 0 9.14 9.14 0 1 1 0 9.86 4.57 4.57 0 0 0-7.46 0 9.14 9.14 0 0 1-15.4 0 4.57 4.57 0 0 0-7.46 0 9.14 9.14 0 0 1-7.7 4.22z\"/><path fill=\"#333F48\" d=\"M25.14 21.29a9.14 9.14 0 1 1 7.7-14.08 4.57 4.57 0 0 0 7.46 0A9.14 9.14 0 0 1 48 3v18.29a9.14 9.14 0 0 1-7.7-4.22 4.57 4.57 0 0 0-7.46 0 9.14 9.14 0 0 1-7.7 4.22z\" opacity=\".24\"/></g>";
var generateSVG$1 = function generateSVG() {
  var illustration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'gas';
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '100%';
  var inner = illustrations[illustration];
  return "\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg id=\"illustration-".concat(illustration, "\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 96 96\" width=\"").concat(size, "\" height=\"").concat(size, "\" preserveAspectRatio=\"xMidYMid meet\">\n").concat(inner, "\n</svg>\n  ");
};

var styles$b = ":host{display:inline-block}:host .illustration{line-height:0}:host .grey{-webkit-filter:grayscale(1);filter:grayscale(1)}";

var nsIllustration =
function (_LitElement) {
  _inherits(nsIllustration, _LitElement);
  _createClass(nsIllustration, [{
    key: "sizes",
    value: function sizes(size) {
      size -= 1;
      var sizes = [64, 96, 128, 144, 256];
      return sizes[size] || '100%';
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        type: {
          type: String
        },
        size: {
          type: Number
        },
        inactive: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$b)]);
    }
  }]);
  function nsIllustration() {
    var _this;
    _classCallCheck(this, nsIllustration);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsIllustration).call(this));
    _this.type = 'gas';
    _this.inactive = 'false';
    return _this;
  }
  _createClass(nsIllustration, [{
    key: "camelCase",
    value: function camelCase(string) {
      return string.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
      });
    }
  }, {
    key: "updated",
    value: function updated() {
      this.setAttribute('aria-hidden', 'true');
    }
  }, {
    key: "render",
    value: function render() {
      var isGrey = this.inactive === 'true';
      return html(["\n      <div class=\"illustration ".concat(isGrey ? "grey" : '', "\">\n        ").concat(generateSVG$1(this.camelCase(this.type), this.sizes(this.size)), "\n      </div>\n    ")]);
    }
  }]);
  return nsIllustration;
}(LitElement);
customElements.define('ns-illustration', nsIllustration);

(function (window, document) {
  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
        get: function get() {
          return this.intersectionRatio > 0;
        }
      });
    }
    return;
  }
  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = entry.rootBounds;
    this.boundingClientRect = entry.boundingClientRect;
    this.intersectionRect = entry.intersectionRect || getEmptyRect();
    this.isIntersecting = !!entry.intersectionRect;
    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height;
    if (targetArea) {
      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
    } else {
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }
  function IntersectionObserver(callback, opt_options) {
    var options = opt_options || {};
    if (typeof callback != 'function') {
      throw new Error('callback must be a function');
    }
    if (options.root && options.root.nodeType != 1) {
      throw new Error('root must be an Element');
    }
    this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);
    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options.rootMargin);
    this.thresholds = this._initThresholds(options.threshold);
    this.root = options.root || null;
    this.rootMargin = this._rootMarginValues.map(function (margin) {
      return margin.value + margin.unit;
    }).join(' ');
  }
  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
  IntersectionObserver.prototype.POLL_INTERVAL = null;
  IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
  IntersectionObserver.prototype.observe = function (target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function (item) {
      return item.element == target;
    });
    if (isTargetAlreadyObserved) {
      return;
    }
    if (!(target && target.nodeType == 1)) {
      throw new Error('target must be an Element');
    }
    this._registerInstance();
    this._observationTargets.push({
      element: target,
      entry: null
    });
    this._monitorIntersections();
    this._checkForIntersections();
  };
  IntersectionObserver.prototype.unobserve = function (target) {
    this._observationTargets = this._observationTargets.filter(function (item) {
      return item.element != target;
    });
    if (!this._observationTargets.length) {
      this._unmonitorIntersections();
      this._unregisterInstance();
    }
  };
  IntersectionObserver.prototype.disconnect = function () {
    this._observationTargets = [];
    this._unmonitorIntersections();
    this._unregisterInstance();
  };
  IntersectionObserver.prototype.takeRecords = function () {
    var records = this._queuedEntries.slice();
    this._queuedEntries = [];
    return records;
  };
  IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold)) threshold = [threshold];
    return threshold.sort().filter(function (t, i, a) {
      if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
        throw new Error('threshold must be a number between 0 and 1 inclusively');
      }
      return t !== a[i - 1];
    });
  };
  IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
    var marginString = opt_rootMargin || '0px';
    var margins = marginString.split(/\s+/).map(function (margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
      if (!parts) {
        throw new Error('rootMargin must be specified in pixels or percent');
      }
      return {
        value: parseFloat(parts[1]),
        unit: parts[2]
      };
    });
    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];
    return margins;
  };
  IntersectionObserver.prototype._monitorIntersections = function () {
    if (!this._monitoringIntersections) {
      this._monitoringIntersections = true;
      if (this.POLL_INTERVAL) {
        this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);
      } else {
        addEvent(window, 'resize', this._checkForIntersections, true);
        addEvent(document, 'scroll', this._checkForIntersections, true);
        if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
          this._domObserver = new MutationObserver(this._checkForIntersections);
          this._domObserver.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        }
      }
    }
  };
  IntersectionObserver.prototype._unmonitorIntersections = function () {
    if (this._monitoringIntersections) {
      this._monitoringIntersections = false;
      clearInterval(this._monitoringInterval);
      this._monitoringInterval = null;
      removeEvent(window, 'resize', this._checkForIntersections, true);
      removeEvent(document, 'scroll', this._checkForIntersections, true);
      if (this._domObserver) {
        this._domObserver.disconnect();
        this._domObserver = null;
      }
    }
  };
  IntersectionObserver.prototype._checkForIntersections = function () {
    var rootIsInDom = this._rootIsInDom();
    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
    this._observationTargets.forEach(function (item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);
      var rootContainsTarget = this._rootContainsTarget(target);
      var oldEntry = item.entry;
      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);
      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now(),
        target: target,
        boundingClientRect: targetRect,
        rootBounds: rootRect,
        intersectionRect: intersectionRect
      });
      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);
    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };
  IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, rootRect) {
    if (window.getComputedStyle(target).display == 'none') return;
    var targetRect = getBoundingClientRect(target);
    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;
    while (!atRoot) {
      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};
      if (parentComputedStyle.display == 'none') return;
      if (parent == this.root || parent == document) {
        atRoot = true;
        parentRect = rootRect;
      } else {
        if (parent != document.body && parent != document.documentElement && parentComputedStyle.overflow != 'visible') {
          parentRect = getBoundingClientRect(parent);
        }
      }
      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
        if (!intersectionRect) break;
      }
      parent = getParentNode(parent);
    }
    return intersectionRect;
  };
  IntersectionObserver.prototype._getRootRect = function () {
    var rootRect;
    if (this.root) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      var html = document.documentElement;
      var body = document.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      };
    }
    return this._expandRectByRootMargin(rootRect);
  };
  IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
    var margins = this._rootMarginValues.map(function (margin, i) {
      return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });
    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;
    return newRect;
  };
  IntersectionObserver.prototype._hasCrossedThreshold = function (oldEntry, newEntry) {
    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
    if (oldRatio === newRatio) return;
    for (var i = 0; i < this.thresholds.length; i++) {
      var threshold = this.thresholds[i];
      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };
  IntersectionObserver.prototype._rootIsInDom = function () {
    return !this.root || containsDeep(document, this.root);
  };
  IntersectionObserver.prototype._rootContainsTarget = function (target) {
    return containsDeep(this.root || document, target);
  };
  IntersectionObserver.prototype._registerInstance = function () {
  };
  IntersectionObserver.prototype._unregisterInstance = function () {
  };
  function now() {
    return window.performance && performance.now && performance.now();
  }
  function throttle(fn, timeout) {
    var timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(function () {
          fn();
          timer = null;
        }, timeout);
      }
    };
  }
  function addEvent(node, event, fn, opt_useCapture) {
    if (typeof node.addEventListener == 'function') {
      node.addEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.attachEvent == 'function') {
      node.attachEvent('on' + event, fn);
    }
  }
  function removeEvent(node, event, fn, opt_useCapture) {
    if (typeof node.removeEventListener == 'function') {
      node.removeEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.detatchEvent == 'function') {
      node.detatchEvent('on' + event, fn);
    }
  }
  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;
    return width >= 0 && height >= 0 && {
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: width,
      height: height
    };
  }
  function getBoundingClientRect(el) {
    var rect;
    try {
      rect = el.getBoundingClientRect();
    } catch (err) {
    }
    if (!rect) return getEmptyRect();
    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }
    return rect;
  }
  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  function containsDeep(parent, child) {
    var node = child;
    while (node) {
      if (node == parent) return true;
      node = getParentNode(node);
    }
    return false;
  }
  function getParentNode(node) {
    var parent = node.parentNode;
    if (parent && parent.nodeType == 11 && parent.host) {
      return parent.host;
    }
    return parent;
  }
  window.IntersectionObserver = IntersectionObserver;
  window.IntersectionObserverEntry = IntersectionObserverEntry;
})(window, document);

var styles$c = ":host{display:block}:host,:host .image .image-holder,:host .image .image-lazy{display:block;width:100%;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}:host .image{-webkit-transition:.5s;transition:.5s;position:relative}:host .image::before{pointer-events:none;position:absolute;top:0;bottom:0;left:0;right:0;content:''}:host .image.ar16x9 .image-holder,:host .image.ar16x9::before{padding-bottom:56.25%}:host .image.ar1x1 .image-holder,:host .image.ar1x1::before{padding-bottom:100%}:host .image.ar4x3 .image-holder,:host .image.ar4x3::before{padding-bottom:75%}:host .image.blur{-webkit-filter:blur(.7em);filter:blur(.7em);-webkit-transform:scale(1.03);transform:scale(1.03);-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}:host .image .image-holder{background-repeat:no-repeat;background-position:center center}";

var nsImage =
function (_LitElement) {
  _inherits(nsImage, _LitElement);
  _createClass(nsImage, null, [{
    key: "properties",
    get: function get() {
      return {
        background: {
          type: Boolean
        },
        backgroundsize: {
          type: String
        },
        src: {
          type: String,
          reflect: true
        },
        alt: {
          type: String
        },
        ratio: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$c)]);
    }
  }]);
  function nsImage() {
    var _this;
    _classCallCheck(this, nsImage);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsImage).call(this));
    _this.background = false;
    _this.backgroundsize = 'cover';
    _this.ratio = '16x9';
    return _this;
  }
  _createClass(nsImage, [{
    key: "updated",
    value: function updated() {
      var _this2 = this;
      var options = {
        threshold: 0.01,
        rootMargin: '150px'
      };
      var src = this.src;
      if (src) {
        var fetchImage = function fetchImage(url) {
          return new Promise(function (resolve, reject) {
            var image = new Image();
            image.src = url;
            image.onload = resolve;
            image.onerror = reject;
          });
        };
        var elementView = function elementView(target, image) {
          target.style.backgroundImage = "url(".concat(image, ")");
          target.style.backgroundSize = "".concat(_this2.backgroundsize);
        };
        var imgView = function imgView(target, image) {
          target.src = image;
          target.alt = _this2.alt || '';
        };
        var switchImage = function switchImage(target, image, io) {
          if (_this2.background) {
            elementView(target, image);
          } else {
            imgView(target, image);
          }
          var blurElem = _this2.shadowRoot.querySelector('.blur');
          if (io && target) {
            io.unobserve(target);
          }
          if (blurElem) {
            blurElem.classList.remove('blur');
          }
        };
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0) {
              var target = entry.target;
              fetchImage(src).then(function () {
                switchImage(target, src, io);
              })["catch"](function () {
                fetchImage(src).then(function () {
                  switchImage(target, src, io);
                })["catch"](function (e) {
                  console.info(e);
                });
              });
            }
          });
        }, options);
        var targetElements = this.shadowRoot.querySelectorAll('.image-lazy, .image-holder');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
          for (var _iterator = targetElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var element = _step.value;
            io.observe(element);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: "backgroundStyles",
    value: function backgroundStyles() {
      var preImg = "".concat(this.src, ".thumb.48.48.png");
      return "\n    <style>\n    :host .image .image-holder {\n      background-image: url(".concat(preImg, ");\n      background-size: ").concat(this.backgroundsize, ";\n    }\n    </style>\n    ");
    }
  }, {
    key: "render",
    value: function render() {
      var isBackground = this.background;
      if (this.src && this.src.length > 0) {
        var preImg = "".concat(this.src, ".thumb.48.48.png");
        return html(["\n        ".concat(isBackground ? this.backgroundStyles() : '', "\n        <div class=\"image blur ar").concat(this.ratio, "\">\n          ").concat(isBackground ? "<div class=\"image-holder\"></div>" : "<img class=\"image-lazy\" src=\"".concat(preImg, "\" alt=\"\" />"), "\n        </div>\n      ")]);
      } else {
        return html(["<div></div>"]);
      }
    }
  }]);
  return nsImage;
}(LitElement);
customElements.define('ns-image', nsImage);

var getValidationFunction = (function (validation) {
  var params = [];
  var arr = validation.split('(');
  var functionName = arr[0];
  var paramString = arr.length > 1 && arr[1].split(')')[0];
  if (paramString) {
    params = paramString.split(',').map(function (value) {
      return parseInt(value, 10);
    });
  }
  return {
    functionName: functionName,
    params: params
  };
});

var styles$d = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .inputter-container #input-heading{margin:inherit;padding:0;display:block;font-family:\"BG Flame Bold\",sans-serif}:host .inputter-container .helper-message .message,:host .inputter-container .validation-message .message{font-family:\"BG Flame Regular\",sans-serif}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),:host .inputter-container #input-heading,h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),:host .inputter-container #input-heading,h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),:host .inputter-container #input-heading,h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small,:host .inputter-container .helper-message .message,:host .inputter-container .validation-message .message{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small,:host .inputter-container .helper-message .message,:host .inputter-container .validation-message .message{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small,:host .inputter-container .helper-message .message,:host .inputter-container .validation-message .message{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host(.triple) .inputter-container .slotted-content{display:-ms-grid;display:grid;-ms-grid-rows:1fr;grid-template-rows:1fr;grid-column-gap:1.42382813em;grid-row-gap:1.42382813em}:host(.invalid) .inputter-container{outline-offset:.4em;outline:#eb002f solid .25em}:host{display:block}:host .select-arrow{font-size:1em!important;display:inline-block;position:relative}:host .select-arrow::after{pointer-events:none;position:absolute;content:\"\";top:50%;right:1em;width:.75em;height:.75em;-webkit-transform:translateY(-75%) rotate(45deg);transform:translateY(-75%) rotate(45deg);border-right:.125em solid #005eb8;border-bottom:.125em solid #005eb8}:host .select-arrow:hover::after{border-color:#333f48}:host .inputter-container.is-single ::slotted(label){font-family:\"BG Flame Bold\",sans-serif;font-weight:400!important;display:block!important;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:100%;margin-bottom:.5em!important;font-size:1em!important}:host .inputter-container .slotted-content.has-mask{position:relative}:host .inputter-container .slotted-content.has-mask .input-guide,:host .inputter-container .slotted-content.has-mask ::slotted(input){font-family:monospace!important;letter-spacing:.33em!important;padding-right:0!important;min-height:2.8em!important}:host .inputter-container .slotted-content.has-mask .input-guide{pointer-events:none;color:#c8c9c7;position:absolute;left:0;background-color:#fff;-webkit-box-shadow:unset;box-shadow:unset;outline:unset;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;z-index:-1;max-width:32em;max-width:calc(var(--maxlength) + 1em);padding:.4em .8em;border:.15em solid transparent;border-radius:0 .5em .5em}:host .inputter-container .slotted-content.has-mask ::slotted(input){background:0 0}:host .inputter-container .slotted-content .input-guide,:host .inputter-container .slotted-content ::slotted(input),:host .inputter-container .slotted-content ::slotted(label){font-family:\"BG Flame Bold\",sans-serif;font-weight:400!important;font-size:1em!important;margin-bottom:0!important}:host .inputter-container .helper-content{margin-bottom:1em;font-family:\"BG Flame Bold\",sans-serif}:host .inputter-container ::slotted([type=date]),:host .inputter-container ::slotted([type=email]),:host .inputter-container ::slotted([type=number]),:host .inputter-container ::slotted([type=password]),:host .inputter-container ::slotted([type=tel]),:host .inputter-container ::slotted([type=text]),:host .inputter-container ::slotted(select),:host .inputter-container ::slotted(textarea){min-height:2.8em;background-color:#fff}:host .inputter-container details{display:inline-block}:host .inputter-container details summary{cursor:pointer}:host .inputter-container details summary:active .message,:host .inputter-container details summary:hover .message{text-decoration:underline;-webkit-text-decoration-color:rgba(51,63,72,.25);text-decoration-color:rgba(51,63,72,.25)}:host .inputter-container details summary::before{content:\"\";position:absolute}:host .inputter-container details:not([open])>:not(summary){display:none}:host .inputter-container details[open]>summary::before{content:\"\";position:absolute}:host .inputter-container details[open] .helper-message .icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host .inputter-container details slot .helper-message{padding-left:1.5em;padding-right:.5em;cursor:pointer;position:relative}:host .inputter-container details slot .helper-message .icon{display:block}:host .inputter-container details .helper-message::-webkit-details-marker{display:none}:host .inputter-container .helper-message,:host .inputter-container .validation-message{display:block;position:relative}:host .inputter-container .helper-message .message,:host .inputter-container .validation-message .message{position:relative;display:block;max-width:32em;margin-bottom:0;padding-right:1.5em}:host .inputter-container .helper-message .icon,:host .inputter-container .validation-message .icon{position:absolute;top:0;width:1.5em;height:1.5em}:host .inputter-container .helper-message:focus{outline-offset:0;outline:#ffdd57 solid .2em}:host .inputter-container .helper-message .icon{pointer-events:none;right:0;color:#005eb8}:host .inputter-container .validation-message{color:#eb002f;padding-left:1.5em;margin-top:.5em}:host .inputter-container .validation-message .icon{left:0}:host .inputter-container .validation-hidden{display:none}@media only screen and (min-width:720px){:host(.triple) .inputter-container .slotted-content{grid-column-gap:1.728em;grid-row-gap:1.728em}:host .select-arrow{font-size:1.125em!important}:host .inputter-container.is-single .input-guide,:host .inputter-container.is-single ::slotted(label){font-size:1.125em!important}:host .inputter-container .slotted-content ::slotted(input),:host .inputter-container .slotted-content ::slotted(label){font-size:1.125em!important}:host .inputter-container ::slotted([type=email]),:host .inputter-container ::slotted([type=text]){font-size:1.125em!important}}@media only screen and (min-width:1080px){:host(.triple) .inputter-container .slotted-content{-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr)}:host(.triple) .inputter-container .slotted-content ::slotted(*)>:not(style){margin-left:.9765625em;margin-right:.9765625em}:host(.triple) .inputter-container .slotted-content ::slotted(*):nth-child(1){-ms-grid-row:1;-ms-grid-column:1}:host(.triple) .inputter-container .slotted-content ::slotted(*):nth-child(2){-ms-grid-row:1;-ms-grid-column:2}:host(.triple) .inputter-container .slotted-content ::slotted(*):nth-child(3){-ms-grid-row:1;-ms-grid-column:3}:host(.triple) .inputter-container .slotted-content ::slotted(*):nth-child(4){margin-top:1.953125em;-ms-grid-row:2;-ms-grid-column:1}:host(.triple) .inputter-container .slotted-content ::slotted(*):nth-child(5){margin-top:1.953125em;-ms-grid-row:2;-ms-grid-column:2}:host(.triple) .inputter-container .slotted-content ::slotted(*):nth-child(6){margin-top:1.953125em;-ms-grid-row:2;-ms-grid-column:3}:host .select-arrow{font-size:1.25em!important}:host .inputter-container.is-single .input-guide,:host .inputter-container.is-single ::slotted(label){font-size:1.25em!important}:host .inputter-container .slotted-content ::slotted(input),:host .inputter-container .slotted-content ::slotted(label){font-size:1.25em!important}:host ::slotted([type=email]),:host ::slotted([type=text]){font-size:1.25em!important}}";

var regularExpressions = {
  email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  phone: /^([\+]?1\s*[-\/\.]?\s*)?(\((\d{3})\)|(\d{3}))\s*[-\/\.]?\s*(\d{3})\s*[-\/\.]?\s*(\d{4})\s*(([xX]|[eE][xX][tT]?[\.]?|extension)\s*([#*\d]+))*$/,
  url: /(?:([A-Za-z]+):)?(\/{0,3})[a-zA-Z0-9][a-zA-Z-0-9]*(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-{}]*[\w@?^=%&amp;\/~+#-{}])??/
};
var isRequired = function isRequired(value) {
  return (value === undefined || value.length === 0) && 'This field is required';
};
var isNumber = function isNumber(value) {
  var val = Number(value);
  var isNum = typeof val === 'number' && !isNaN(val);
  return value.length > 0 && !isNum && 'Needs to be a number';
};
var isInteger = function isInteger(value) {
  var val = Number(value);
  var isInt = typeof val === 'number' && isFinite(val) && Math.floor(val) === val;
  return value.length > 0 && !isInt && 'Needs to be a whole number';
};
var isPostcode = function isPostcode(value) {
  var checkPostcode = function checkPostcode(str) {
    var postcodeRegexp = new RegExp(['^((([A-PR-UWYZ][0-9])', '([A-PR-UWYZ][0-9][0-9])', '([A-PR-UWYZ][A-HK-Y][0-9])', '([A-PR-UWYZ][A-HK-Y][0-9][0-9])', '([A-PR-UWYZ][0-9][A-HJKSTUW])', '([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\\s?([0-9][ABD-HJLNP-UW-Z]{2})', '(GIR)\\s?(0AA))\\ ?$'].join('|'), 'i');
    return postcodeRegexp.test(str);
  };
  return value.length > 0 && !checkPostcode(value) && 'Not a valid postcode';
};
var isFirstName = function isFirstName(value) {
  var isName = /^[a-z\-\s]{1,24}$/i.test(value);
  return value.length > 0 && !isName && 'Your First Name does not look right';
};
var isLastName = function isLastName(value) {
  var isName = /^[a-z\-\s']{1,32}$/i.test(value);
  return value.length > 0 && !isName && 'Your Last Name does not look right';
};
var isTitle = function isTitle(value) {
  var title = ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Sir', 'Reverend', 'Dame', 'Lady', 'Professor', 'Lord'];
  return value.length > 0 && !title.includes(value) && 'Your title does not look right';
};
var isEmail = function isEmail(value) {
  var emailRegexp = new RegExp(regularExpressions.email, 'i');
  return value.length > 0 && !emailRegexp.test(value) && 'Your email does not look right';
};
var phoneValidation = function phoneValidation(value, isMobile) {
  var isCorrectlyFormatted = function isCorrectlyFormatted(number) {
    var regexPhoneFormat = /^0[0-9]{10}$/;
    return regexPhoneFormat.test(number);
  };
  var isNotReserved = function isNotReserved(number) {
    var dramaRegexes = [/^(0113|0114|0115|0116|0117|0118|0121|0131|0141|0151|0161)(4960)[0-9]{3}$/, /^02079460[0-9]{3}$/, /^01914980[0-9]{3}$/, /^02890180[0-9]{3}$/, /^02920180[0-9]{3}$/, /^01632960[0-9]{3}$/, /^07700900[0-9]{3}$/, /^08081570[0-9]{3}$/, /^09098790[0-9]{3}$/, /^03069990[0-9]{3}$/];
    for (var i = 0; i < dramaRegexes.length; i += 1) {
      if (dramaRegexes[i].test(number)) {
        return false;
      }
    }
    return true;
  };
  var isValidlyPrefixed = function isValidlyPrefixed(num) {
    if (isMobile) {
      return /^0(70|71|72|73|74|75|7624|77|78|79)/.test(num);
    }
    var regexValidPrefix = /^0(1|2|3|5|70|71|72|73|74|75|7624|77|78|79)/;
    return regexValidPrefix.test(num);
  };
  var isValidNumber = function isValidNumber(number) {
    return isCorrectlyFormatted(number) && isValidlyPrefixed(number) && isNotReserved(number);
  };
  return value.length > 0 && !isValidNumber(value) && 'Your number does not look right';
};
var minLength = function minLength(value, min) {
  return value.length < min ? "Length must be at least ".concat(min, " characters") : "";
};
var maxLength = function maxLength(value, max) {
  return value.length > max ? "Length must be no longer than ".concat(max, " characters") : "";
};
var isBetween = function isBetween(value, min, max) {
  return value.length < min || value.length > max ? "Length must be between ".concat(min, " and ").concat(max, " characters") : "";
};
var isPhoneNumber = function isPhoneNumber(value) {
  return phoneValidation(value);
};
var isMobileNumber = function isMobileNumber(value) {
  return phoneValidation(value, true);
};
var isDateOfBirth = function isDateOfBirth(value) {
  var DATEISO_REGEX = /(\d{4})-(\d{2})-(\d{2})$/;
  var isDate = DATEISO_REGEX.test(value);
  return value.length > 0 && !isDate && 'Your date of birth does not look right';
};

var validations = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isRequired: isRequired,
  isNumber: isNumber,
  isInteger: isInteger,
  isPostcode: isPostcode,
  isFirstName: isFirstName,
  isLastName: isLastName,
  isTitle: isTitle,
  isEmail: isEmail,
  isPhoneNumber: isPhoneNumber,
  isMobileNumber: isMobileNumber,
  isDateOfBirth: isDateOfBirth,
  minLength: minLength,
  maxLength: maxLength,
  isBetween: isBetween
});

var regexr = function regexr(pattern, change, value) {
  var regex = new RegExp(pattern, 'g');
  return value ? value.replace(regex, change) : value;
};
var isDeleting = function isDeleting(value, event) {
  if (event.inputType) {
    return event.inputType === 'deleteContentBackward' || event.inputType === 'deleteContentForward';
  }
  return value.length > event.target.value.length;
};
var guide = function guide() {
  if (this.separator) {
    return regexr("[^".concat(this.separator, ".]"), ' ', this.mask);
  }
  return this.mask;
};
var separatorCount = function separatorCount() {
  if (this.mask && this.separator) {
    var count = 0;
    for (var position = 0; position < this.mask.length; position++) {
      if (this.mask.charAt(position) === this.separator) {
        count += 1;
      }
    }
    return count;
  }
  return 0;
};
var deleteContentAndSeparator = function deleteContentAndSeparator(event) {
  var cursor = event.target.selectionStart;
  var cursorMinus = (!event.inputType || event.inputType === 'deleteContentBackward') && this.value[cursor] === this.separator ? cursor - 1 : cursor;
  if (this.separator && this.value[cursor] === this.separator && isDeleting(this.value, event)) {
    var newValue = '';
    for (var i = 0; i < event.target.value.length; i++) {
      if (i !== cursorMinus) {
        newValue += event.target.value[i];
      }
    }
    event.target.value = newValue;
  }
  if (isDeleting(this.value, event)) {
    setTimeout(function () {
      event.target.setSelectionRange(cursorMinus, cursorMinus);
    }, 0);
  }
};
var maskValue = function maskValue(value) {
  if (this.inputType === 'single' && this.mask && this.mask.length > 0) {
    var length = value.length;
    var str = '';
    for (var i = 0; i < length; i++) {
      if (this.separator && guide.bind(this)().charAt(i) === this.separator) {
        str += "".concat(this.separator);
      } else {
        str += ' ';
      }
    }
    str += this.mask.slice(length);
    return str;
  }
  return '';
};
var formatInput = function formatInput(value, isDeleting) {
  if (this.inputType === 'single' && this.mask && this.mask.length > 0) {
    var input = this.separator ? regexr(this.separator, '', value) : value;
    var _format = this.mask.split(this.separator).map(function (part) {
      return part.length;
    });
    var output = '';
    var idx = 0;
    for (var i = 0; i < _format.length && idx < input.length; i++) {
      var check = isDeleting ? idx + _format[i] < input.length : idx + _format[i] <= input.length;
      output += input.substr(idx, _format[i]);
      if (this.separator && check && guide.bind(this)().length > output.length) {
        output += this.separator;
      }
      idx += _format[i];
    }
    output += input.substring(0, separatorCount.bind(this)()).substr(idx);
    return output;
  }
  return value;
};
var format = function format(event) {
  var value = event.target.value;
  if (this.inputType === 'single' && this.mask && this.mask.length > 0 && event.target.nodeName !== 'TEXTAREA') {
    var cursor = event.target.selectionStart;
    var output = formatInput.bind(this)(value, isDeleting(this.value, event));
    if (value !== output && !isDeleting(this.value, event)) {
      var newCursor = cursor;
      if (value.substring(0, cursor + 1) !== output.substring(0, cursor + 1)) {
        newCursor = cursor + 1;
      }
      setTimeout(function () {
        event.target.setSelectionRange(newCursor, newCursor);
      }, 0);
    }
    this.refocus(event.target);
    return output;
  }
  return value;
};
var formatInitialValue = function formatInitialValue() {
  if (this.mask && this.inputType === 'single') {
    var slots = this.getSlotInputs();
    var input = slots[0];
    if (input.nodeName !== 'TEXTAREA') {
      input.setAttribute('maxlength', this.mask.length);
      input.setAttribute('style', '--maxlength:' + this.mask.length + 'em');
      this.value = this.value.length > 0 ? formatInput.bind(this)(this.value, false) : this.value;
    }
  }
};

var helperID = "helper-".concat(randomId());
var nsInputter =
function (_LitElement) {
  _inherits(nsInputter, _LitElement);
  _createClass(nsInputter, [{
    key: "dirty",
    get: function get() {
      return !this.pristine;
    }
  }, {
    key: "value",
    set: function set(value) {
      this.updateAttribute(value);
      var uiValue = this.getValueFromUI();
      if (uiValue !== value) {
        this.updateLightDOM(value);
      }
      if (!this.pristine) {
        this.validate();
      }
      this.dispatchEvent(new CustomEvent('change'));
    },
    get: function get() {
      return this.getValueFromUI();
    }
  }, {
    key: "error",
    get: function get() {
      this.validate();
      return this._error;
    }
  }, {
    key: "execute",
    set: function set(value) {
      if (value) {
        this.validate(null, true);
      }
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        value: {
          type: String,
          reflect: true
        },
        validation: {
          type: Array
        },
        heading: {
          type: String
        },
        helper: {
          type: String
        },
        labelID: {
          type: String
        },
        mask: {
          type: String
        },
        separator: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$d)]);
    }
  }]);
  function nsInputter() {
    var _this;
    _classCallCheck(this, nsInputter);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsInputter).call(this));
    _this.inputID = "".concat(randomId(), "-input");
    _this.labelID = '';
    _this.heading = '';
    _this.pristine = true;
    _this._error = undefined;
    _this.maskInputValue = _this.mask;
    return _this;
  }
  _createClass(nsInputter, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this2 = this;
      var inputs = this.querySelectorAll('input, select, textarea');
      inputs.forEach(function (input) {
        var eventType = _this2.inputType === 'multiple' || _this2.inputType === 'select' ? 'change' : 'input';
        input.addEventListener(eventType, _this2.uiChangeHandler.bind(_this2));
      });
    }
  }, {
    key: "getValueFromUI",
    value: function getValueFromUI() {
      var slotInputs = this.getSlotInputs();
      var input = slotInputs[0];
      var select = this.querySelector('select');
      if (select) {
        return select.value;
      }
      if (input.type === 'radio' || input.type === 'checkbox') {
        return this.checkboxValue();
      } else {
        return input.value;
      }
    }
  }, {
    key: "uiChangeHandler",
    value: function uiChangeHandler(event) {
      var input = event.target;
      if (input.type === 'radio' || input.type === 'checkbox') {
        this.value = this.checkboxValue();
        if (input.type === 'radio') {
          var slots = this.getSlotInputs();
          slots.forEach(function (selectorInput) {
            if (selectorInput.parentElement.checked !== undefined) {
              selectorInput.parentElement.checked = selectorInput === input;
            }
          });
        }
        if (input.parentElement.checked !== undefined) {
          input.parentElement.checked = input.checked;
        }
      } else {
        this.value = input.value;
      }
      if (this.mask && this.inputType === 'single' && event.target.nodeName !== 'TEXTAREA') {
        var cursor = event.target.selectionStart;
        deleteContentAndSeparator.bind(this)(event);
        var formatValue = format.bind(this)(event);
        this.value = formatValue;
        event.target.value = formatValue;
        this.maskInputValue = maskValue.bind(this)(event.target.value);
        if (isDeleting(this.value, event) || !event.inputType) {
          event.target.setSelectionRange(cursor, cursor);
        }
        event.target.setAttribute('maxlength', this.mask.length);
      }
      this.pristine = false;
      this.updateAttribute(this.value);
      this.validate(input);
      this.refocus(input);
      this.requestUpdate();
    }
  }, {
    key: "refocus",
    value: function refocus(target) {
      target.focus();
      setTimeout(function () {
        return target.focus();
      }, 0);
    }
  }, {
    key: "updateAttribute",
    value: function updateAttribute(value) {
      if (this.getAttribute('value') !== value) {
        this.setAttribute('value', value);
      }
    }
  }, {
    key: "updateLightDOM",
    value: function updateLightDOM(value) {
      var inputs = this.querySelectorAll('input, select, textarea');
      inputs.forEach(function (input) {
        if (input.type === 'checkbox' || input.type === 'radio') {
          input.checked = value && value.includes(input.value);
        } else {
          input.value = value;
        }
      });
    }
  }, {
    key: "getSlotInputs",
    value: function getSlotInputs() {
      var slot = this.querySelectorAll('input, textarea, select');
      return Array.from(slot);
    }
  }, {
    key: "getSlotInputTypes",
    value: function getSlotInputTypes() {
      return Array.from(this.getSlotInputs()).map(function (node) {
        return node.getAttribute('type');
      }) || [];
    }
  }, {
    key: "checkboxValue",
    value: function checkboxValue() {
      var slotInputs = this.getSlotInputs();
      var value = Array.from(this.getSlotInputs()).map(function (input) {
        if (input.checked) {
          return input.getAttribute('value');
        }
        return '';
      }).filter(function (input) {
        return input;
      }) || [];
      if (slotInputs[0].type === 'radio') {
        value = value.length > 0 ? value[0] : '';
      }
      return value.toString();
    }
  }, {
    key: "setIDFor",
    value: function setIDFor() {
      if (this.inputType === 'single' || this.inputType === 'select') {
        try {
          this.inputID = this.inputLike && this.inputLike.getAttribute('id') || this.inputID;
          this.shadowRoot.querySelector('.inputter-container').classList.add('is-single');
          var input = this.inputLike || this.querySelector('select');
          input.setAttribute('id', this.inputID);
          this.querySelector('label').setAttribute('for', this.inputID);
        } catch (e) {
          throw new Error("Missing label: ".concat(e));
        }
      }
    }
  }, {
    key: "autoName",
    value: function autoName() {
      if (!this.getAttribute('name')) {
        var label = this.querySelector('label') && this.querySelector('label').textContent || this.inputLike && this.inputLike.name;
        var name = label.split(' ').join('-').toLowerCase();
        this.setAttribute('name', name);
      }
    }
  }, {
    key: "addGroupLabel",
    value: function addGroupLabel() {
      var _this3 = this;
      var isGroup = this.inputType === 'multiple';
      if (isGroup) {
        var container = this.shadowRoot.querySelector('.inputter-container');
        var labelby = this.labelID.length > 0 ? this.labelID : 'input-heading';
        container.setAttribute('role', 'group');
        container.setAttribute('aria-labelledby', labelby);
      } else if (this.labelID.length > 0) {
        this.getSlotInputs().forEach(function (slot) {
          slot.setAttribute('aria-labelledby', _this3.labelID);
        });
      }
    }
  }, {
    key: "detailsListener",
    value: function detailsListener() {
      if (this.helper && this.shadowRoot.querySelector('details')) {
        this.shadowRoot.querySelector('details').addEventListener('click', function (e) {
          e.preventDefault();
          var targetClicked = e.target;
          var targetElement = targetClicked;
          if (targetClicked.nodeName !== 'DETAILS') {
            targetElement = targetClicked.parentElement.nodeName === 'DETAILS' ? targetClicked.parentElement : targetClicked.parentElement.parentElement;
          }
          if (targetElement.hasAttribute('open')) {
            targetElement.removeAttribute('open');
          } else {
            targetElement.setAttribute('open', '');
          }
        });
      }
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      this.inputID = "".concat(randomId(), "-input");
      this.autoName();
      this.detailsListener();
      this.addGroupLabel();
      this.validate();
      if (!this.value) {
        var input = this.getSlotInputs()[0];
        if (input.type === 'radio' || input.type === 'checkbox') {
          this.value = this.checkboxValue();
        } else {
          this.value = input.value;
        }
      }
      formatInitialValue.bind(this)();
      this.updateLightDOM(this.value);
      this.updateAttribute(this.value);
      this.addEventListeners();
    }
  }, {
    key: "updated",
    value: function updated() {
      this.setIDFor();
    }
  }, {
    key: "checkInputValidation",
    value: function checkInputValidation() {
      var slotInputs = this.getSlotInputs();
      var error;
      slotInputs.forEach(function (input) {
        if (!input.validity.valid) {
          error = input.validationMessage;
        }
      });
      return error;
    }
  }, {
    key: "updateAllValidity",
    value: function updateAllValidity(error) {
      var inputs = this.querySelectorAll('input, select, textarea, ns-selector');
      inputs.forEach(function (input) {
        if (input.setCustomValidity) {
          input.setCustomValidity(error);
        }
      });
    }
  }, {
    key: "validate",
    value: function validate(target, forceUpdate) {
      var _this4 = this;
      var oldError = this._error;
      this._error = undefined;
      this.updateAllValidity('');
      if (target) {
        this.validity = target.validity;
      }
      if (this.validation) {
        var validation = this.validation;
        var message = validation.map(function (val) {
          var vf = getValidationFunction(val);
          var functionName = vf.functionName;
          var params = [_this4.value].concat(vf.params);
          return validations[functionName].apply(_this4, params);
        }).filter(function (val) {
          return val;
        }).map(function (message, index) {
          return (index > 0 ? ' ' : '') + message;
        }).toString() || '';
        this._error = message.length > 0 ? message : undefined;
      }
      var arr = this._error ? [this._error] : [];
      var inputError = this.checkInputValidation();
      if (inputError) {
        arr.push(inputError);
      }
      if (arr.length === 0) {
        this._error = undefined;
      } else {
        this._error = arr.join(', ');
        this.updateAllValidity(this._error);
      }
      if (!this.validity) {
        this.validity = this.querySelector('input, select, textarea').validity;
      }
      if (forceUpdate) {
        this.pristine = false;
      }
      if (oldError !== this._error || forceUpdate) {
        this.requestUpdate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      this.childNodes.forEach(function (node) {
        if (node.slot === 'tip-details') {
          _this5.details = true;
        }
      });
      var slottedClass = this.inputType === 'select' ? 'slotted-content select-arrow' : 'slotted-content';
      var hasError = this._error && !this.inputType === 'select' ? 'invalid' : '';
      var maskClass = typeof this.mask !== 'undefined' && this.mask.length > 0 ? 'has-mask' : '';
      return html(["\n      <div class=\"inputter-container ".concat(this.pristine ? 'is-pristine' : 'is-dirty', "\" ").concat(hasError, " ").concat(this.helper ? "aria-describedby=\"".concat(helperID, "\"") : '', ">\n        ").concat(this.showLabel, "\n        ").concat(this.helperContent, "\n        <div class=\"").concat(slottedClass, " ").concat(maskClass, "\">\n          <slot></slot>\n          ").concat(this.maskInput, "\n        </div>\n        ").concat(this.showErrorMessage, "\n      </div>\n    ")]);
    }
  }, {
    key: "inputLike",
    get: function get() {
      return this.querySelector('ns-selector') || this.querySelector('input') || this.querySelector('textarea');
    }
  }, {
    key: "inputType",
    get: function get() {
      if (this.querySelector('select')) {
        return 'select';
      }
      return this.getSlotInputTypes().indexOf('ns-selector') !== -1 || this.getSlotInputTypes().indexOf('radio') !== -1 || this.getSlotInputTypes().indexOf('checkbox') !== -1 ? 'multiple' : 'single';
    }
  }, {
    key: "showLabel",
    get: function get() {
      if (this.labelID.length === 0) {
        return this.heading.length > 0 && this.inputType === 'multiple' ? "<span id=\"input-heading\">".concat(this.heading, "</span>") : "<slot name=\"label\"></slot>";
      }
      return '';
    }
  }, {
    key: "helperContent",
    get: function get() {
      if (this.helper) {
        if (this.details) {
          return "\n        <div class=\"helper-content\" id=\"".concat(helperID, "\">\n          <details>\n            <summary class=\"helper-message\">\n              <span class=\"message\">\n                ").concat(this.helper, "\n              </span>\n              <span class=\"icon\">\n                <ns-icon type=\"chevron-down\"></ns-icon>\n              </span>\n            </summary>\n            <slot name=\"tip-details\"></slot>\n          </details>\n        </div>\n        ");
        } else {
          return "\n        <div class=\"helper-content\" id=\"".concat(helperID, "\">\n          <div class=\"helper-message\">\n            <span class=\"message\">").concat(this.helper, "</span>\n          </div>\n        </div>\n        ");
        }
      }
      return '';
    }
  }, {
    key: "showErrorMessage",
    get: function get() {
      var showError = this._error && !this.pristine;
      return "\n    <div class=\"".concat(showError ? 'validation-message' : 'validation-hidden', "\">\n      <span class=\"icon\">\n        <ns-icon type=\"warning\"></ns-icon>\n      </span>\n      <span class=\"message\">\n        ").concat(this._error, "\n      </span>\n    </div>");
    }
  }, {
    key: "maskInput",
    get: function get() {
      var slots = this.getSlotInputs();
      var input = slots[0];
      if (this.mask && this.inputType === 'single' && input.nodeName !== 'TEXTAREA') {
        if (!this.maskInputValue) {
          this.maskInputValue = maskValue.bind(this)(this.value);
        }
        return "<input readonly tabindex=\"-1\" aria-hidden=\"true\" maxlength=\"".concat(this.mask.length, "\" style=\"--maxlength:").concat(this.mask.length, "em;\" class=\"input-guide\" type=\"text\" value=\"").concat(this.maskInputValue, "\"/>");
      }
      return '';
    }
  }]);
  return nsInputter;
}(LitElement);
customElements.define('ns-inputter', nsInputter);

var styles$e = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .card-holder [type=flat-landmark] [slot=paragraph]::slotted(*),:host .card-holder [type=section-landmark] [slot=paragraph]::slotted(*),:host .landmark .layout.summit .card-holder [slot=paragraph]::slotted(*){font-family:\"BG Flame Light\",sans-serif;margin-bottom:.4em}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature,:host .card-holder [type=flat-landmark] [slot=paragraph]::slotted(*),:host .card-holder [type=section-landmark] [slot=paragraph]::slotted(*),:host .landmark .layout.summit .card-holder [slot=paragraph]::slotted(*){font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature,:host .card-holder [type=flat-landmark] [slot=paragraph]::slotted(*),:host .card-holder [type=section-landmark] [slot=paragraph]::slotted(*),:host .landmark .layout.summit .card-holder [slot=paragraph]::slotted(*){font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature,:host .card-holder [type=flat-landmark] [slot=paragraph]::slotted(*),:host .card-holder [type=section-landmark] [slot=paragraph]::slotted(*),:host .landmark .layout.summit .card-holder [slot=paragraph]::slotted(*){font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{display:block}:host .card-holder{display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr)}:host .card-holder ns-card{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:-2;grid-column-end:-1}:host .landmark{display:-ms-grid;display:grid}:host .landmark .landmark-container{position:relative;display:-ms-grid;display:grid}:host .landmark .landmark-container .image-holder{max-height:50vh;overflow:hidden}:host .landmark .landmark-container .image-holder ns-image{width:100vw;position:relative;top:33.3%;-webkit-transform:translateY(-33.3%);transform:translateY(-33.3%)}:host .landmark .landmark-container .decoration{position:absolute;right:0;left:0;bottom:0;z-index:2;padding-bottom:19.8%;background-repeat:no-repeat;background-size:cover;background-position:bottom;-webkit-transform:translateY(12%);transform:translateY(12%)}@media only screen and (min-width:480px){:host .landmark .landmark-container .decoration{background-image:url(https://www.britishgas.co.uk/nucleus/images/fp-superflame.png)}}@media only screen and (max-width:480px){:host .landmark .landmark-container .decoration{background-image:url(https://www.britishgas.co.uk/nucleus/images/fp-superflame-mobile.png)}}:host .landmark .layout{position:relative;z-index:1}:host .landmark .layout.summit .card-holder [slot=heading]::slotted(*){font-size:1em;margin-top:0;margin-bottom:0}@media only screen and (min-width:720px){:host .landmark .landmark-container{-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:0;grid-row-end:1;-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:-2;grid-column-end:-1;-ms-grid-row-align:start;align-self:start;margin-bottom:2.5%}:host .landmark .landmark-container .decoration{z-index:1}:host .landmark .layout.summit{-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:0;grid-row-end:1;-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:0;grid-column-end:1;display:-ms-grid;display:grid;-ms-grid-columns:5% minmax(auto,1600px) 5%;grid-template-columns:5% minmax(auto,1600px) 5%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1;margin-top:2.985984em}:host .landmark .layout.summit .card-holder{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:2;grid-column-end:3;display:-ms-grid;display:grid;-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr);-ms-grid-row-align:start;align-self:start}:host .landmark .layout.summit .card-holder ns-card{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:2;grid-column-end:3}}@media only screen and (min-width:1080px){:host .card-holder ns-card{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:2;grid-column-end:3}:host .landmark .layout.summit{margin-top:3.81469727em}:host .landmark .layout.summit .card-holder{-ms-grid-column:2;grid-column-start:2;-ms-grid-columns:(1fr)[2];grid-template-columns:repeat(2,1fr)}:host .landmark .layout.summit .card-holder ns-card{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2}}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .landmark .landmark-container{display:block}:host .landmark .landmark-container .image-holder ns-image{-webkit-transform:none;transform:none}}@media only screen and (min-width:0) and (max-width:719px) and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .card-holder ns-card{-ms-grid-column-span:3}:host .landmark .landmark-container{-ms-grid-row:1}:host .landmark .layout{-ms-grid-row:2}}@media only screen and (min-width:720px) and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .card-holder ns-card{-ms-grid-column-span:3}:host .landmark .layout.summit{margin-left:5%;margin-right:5%}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host .landmark .landmark-container{display:block}:host .landmark .landmark-container .image-holder ns-image{-webkit-transform:none;transform:none}@media only screen and (min-width:0) and (max-width:719px){:host .card-holder ns-card{-ms-grid-column-span:3}:host .landmark .landmark-container{-ms-grid-row:1}:host .landmark .layout{-ms-grid-row:2}}@media only screen and (min-width:720px){:host .card-holder ns-card{-ms-grid-column-span:3}:host .landmark .layout.summit{margin-left:5%;margin-right:5%}}@media only screen and (min-width:1080px){:host .card-holder ns-card{-ms-grid-column-span:2}}}@media only screen and (min-width:1080px) and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .card-holder ns-card{-ms-grid-column-span:2}}";

var nsLandmark =
function (_LitElement) {
  _inherits(nsLandmark, _LitElement);
  _createClass(nsLandmark, null, [{
    key: "properties",
    get: function get() {
      return {
        type: {
          type: String
        },
        image: {
          type: String
        },
        gradient: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$e)]);
    }
  }]);
  function nsLandmark() {
    var _this;
    _classCallCheck(this, nsLandmark);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsLandmark).call(this));
    _this.type = 'summit';
    _this.gradient = 'invert-ramp-cyan';
    return _this;
  }
  _createClass(nsLandmark, [{
    key: "addCard",
    value: function addCard(hasCTA, type) {
      return "\n    <ns-card type=\"".concat(type, "-landmark\">\n       <slot slot=\"heading\" name=\"heading\"></slot>\n       <slot slot=\"paragraph\" name=\"paragraph\"></slot>\n       ").concat(hasCTA ? '<slot slot="cta" name="cta"></slot>' : '', "\n     </ns-card>");
    }
  }, {
    key: "render",
    value: function render() {
      return html(["\n        ".concat(this.summit, "\n        ").concat(this.hillside, "\n        ").concat(this.lakeside, "\n    ")]);
    }
  }, {
    key: "summit",
    get: function get() {
      if (this.type === 'summit') {
        return "<div class=\"landmark\">\n      <div class=\"landmark-container\">\n        <div class=\"image-holder\">\n          <ns-image background src=\"".concat(this.image, "\"></ns-image>\n        </div>\n        <div class=\"decoration\"></div>\n      </div>\n      <div class=\"layout ").concat(this.type, "\">\n        <div class=\"card-holder\">\n          ").concat(this.addCard(true, 'basic'), "\n        </div>\n      </div>\n    </div>");
      }
      return '';
    }
  }, {
    key: "hillside",
    get: function get() {
      if (this.type === 'hillside') {
        return "\n        <ns-panel decoration=\"".concat(this.gradient, "\">\n            <div class=\"card-holder\">\n              ").concat(this.addCard(false, 'section'), "\n            </div>\n        </ns-panel>\n        <div class=\"decoration\"></div>\n      ");
      }
      return '';
    }
  }, {
    key: "lakeside",
    get: function get() {
      if (this.type === 'lakeside') {
        return "\n        <ns-panel>\n            <div class=\"card-holder\">\n              ".concat(this.addCard(true, 'flat'), "\n            </div>\n        </ns-panel>\n      ");
      }
      return '';
    }
  }]);
  return nsLandmark;
}(LitElement);
customElements.define('ns-landmark', nsLandmark);

var styles$f = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .lockup .card-holder [slot=paragraph]::slotted(*){font-family:\"BG Flame Light\",sans-serif;margin-bottom:.4em}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature,:host .lockup .card-holder [slot=paragraph]::slotted(*){font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature,:host .lockup .card-holder [slot=paragraph]::slotted(*){font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature,:host .lockup .card-holder [slot=paragraph]::slotted(*){font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host([type=lockjaw]){-ms-grid-column:1!important;grid-column-start:1!important;-ms-grid-column-span:-2!important;grid-column-end:-1!important}@media only screen and (min-width:720px){:host([type=lockjaw]){-ms-grid-column:2!important;grid-column-start:2!important;-ms-grid-column-span:-4!important;grid-column-end:-2!important}}@media only screen and (min-width:1080px) and (max-width:1619px){:host([type=lockjaw]){-ms-grid-column-span:-1!important;grid-column-end:-1!important}:host([type=lockjaw]):host([reverse]){-ms-grid-column:1!important;grid-column-start:1!important;-ms-grid-column-span:-3!important;grid-column-end:-2!important}}@media only screen and (max-width:720px){:host([type=lockbox]){-ms-grid-column:1!important;grid-column-start:1!important;-ms-grid-column-span:-2!important;grid-column-end:-1!important}}:host{display:block;width:100%}:host .lockup{display:-ms-grid;display:grid;grid-template-areas:\"b b\" \"a a\";-ms-grid-columns:(auto)[2];grid-template-columns:repeat(2,auto);-ms-grid-rows:(auto)[2];grid-template-rows:repeat(2,auto)}:host .lockup .card-holder{-ms-grid-row:2;-ms-grid-column:1;-ms-grid-column-span:2;display:-ms-grid;display:grid;grid-area:a}:host .lockup .card-holder [slot=heading]::slotted(*){font-size:1em;max-width:initial}:host .lockup .image-holder{-ms-grid-row:1;-ms-grid-column:1;-ms-grid-column-span:2;position:relative;grid-area:b}:host .lockup .image-holder [name=image]{display:block;overflow:hidden}:host .lockup .image-holder .illustration-holder{z-index:1;position:absolute;width:5.6953125em;height:5.6953125em}:host .lockup .image-holder .illustration-holder ns-illustration{display:block}@media only screen and (min-width:720px){:host .lockup .image-holder{margin-right:12.5%;margin-left:12.5%}:host .lockup .image-holder .illustration-holder{width:6.912em;height:6.912em}:host .lockup .card-holder{margin-right:12.5%;margin-left:12.5%}}@media only screen and (min-width:1080px){:host .lockup{grid-template-areas:\"a b\" \"a b\"}:host .lockup.reverse{grid-template-areas:\"b a\" \"b a\"}:host .lockup .image-holder .illustration-holder{width:7.8125em;height:7.8125em}:host .lockup .card-holder{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:1}:host .lockup.reverse>.card-holder{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:2;-ms-grid-column-span:1}:host .lockup .image-holder{margin-left:0;margin-right:0;-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:2;-ms-grid-column-span:1}:host .lockup.reverse>.image-holder{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:1}}:host .lockjaw .image-holder{margin-left:5%;-ms-flex-item-align:start;-ms-grid-row-align:start;align-self:start}:host .lockjaw .image-holder [name=image]{border-radius:1.5em 0 0;background-clip:padding-box}:host .lockjaw .image-holder .illustration-holder{right:2.84765625em;bottom:-1.42382812em}:host .lockjaw .card-holder{padding-top:1.42382813em;margin-right:5%;padding-bottom:1.42382813em;margin-left:5%}@media only screen and (min-width:720px){:host .lockjaw .image-holder{margin-left:12.5%;margin-right:12.5%}:host .lockjaw .image-holder [name=image]{border-radius:1.5em 0 0;background-clip:padding-box}:host .lockjaw .image-holder .illustration-holder{right:3.456em;bottom:-1.728em}:host .lockjaw.reverse .image-holder [name=image]{border-radius:0 1.5em 0 0;background-clip:padding-box}:host .lockjaw .card-holder{margin-left:12.5%;margin-right:12.5%;padding-top:2.985984em;padding-bottom:2.985984em}}@media only screen and (min-width:1080px){:host .lockjaw{-ms-grid-columns:50% 50%;grid-template-columns:50% 50%}:host .lockjaw .image-holder{margin-right:0;margin-left:0}:host .lockjaw .image-holder .illustration-holder{left:-2.9296875em;bottom:3.90625em}:host .lockjaw .card-holder{margin-left:0;margin-right:3.81469727em}:host .lockjaw.reverse .image-holder .illustration-holder{left:unset;right:-2.9296875em}:host .lockjaw.reverse .card-holder{margin-right:0;margin-left:3.81469727em}}:host .locknut .image-holder .illustration-holder{left:0;bottom:1.42382813em}:host .locknut .card-holder{padding-top:1.42382813em;padding-bottom:1.42382813em}@media only screen and (min-width:720px){:host .locknut .image-holder .illustration-holder{bottom:1.728em}:host .locknut .card-holder{padding-top:2.985984em;padding-bottom:2.985984em}}@media only screen and (min-width:1080px){:host .locknut{grid-template-areas:\"a b\" \"a b\";-ms-grid-columns:50% 50%;grid-template-columns:50% 50%}:host .locknut .image-holder .illustration-holder{bottom:1.953125em}:host .locknut .card-holder{padding-top:3.81469727em;margin-right:3.81469727em;padding-bottom:3.81469727em;margin-left:0}:host .locknut.reverse{grid-template-areas:\"b a\" \"b a\"}:host .locknut.reverse .image-holder .illustration-holder{left:unset;right:0}:host .locknut.reverse .card-holder{margin-left:3.81469727em;margin-right:0}:host .locknut>.card-holder{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:1}:host .locknut.reverse>.card-holder{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:2;-ms-grid-column-span:1}:host .locknut>.image-holder{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:2;-ms-grid-column-span:1}:host .locknut.reverse>.image-holder{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:1}}:host .lockbox .image-holder{margin-right:5%}:host .lockbox .image-holder [name=image]{border-radius:0 1.5em 0 0;background-clip:padding-box}@media only screen and (min-width:320px){:host :host-context(.fq-tools) .lockup{background-color:rgba(255,165,0,.25)}}@media only screen and (min-width:480px){:host :host-context(.fq-tools) .lockup{background-color:rgba(0,128,0,.25)}}@media only screen and (min-width:720px){:host .lockbox .image-holder{margin-right:12.5%}:host .lockbox .image-holder [name=image]{border-radius:0 1.5em 0 0;background-clip:padding-box}:host .lockbox .card-holder{margin-right:0;margin-left:0}:host .lockbox.reverse .image-holder [name=image]{border-radius:1.5em 0 0;background-clip:padding-box}:host :host-context(.fq-tools) .lockup{background-color:rgba(0,0,255,.25)}}@media only screen and (min-width:1080px){:host .lockbox{-ms-grid-columns:60% 40%;grid-template-columns:60% 40%}:host .lockbox .image-holder{margin-right:0;-ms-flex-item-align:end;-ms-grid-row-align:end;align-self:end;margin-top:5em}:host .lockbox .card-holder{margin-right:0;margin-left:0}:host .lockbox.reverse{-ms-grid-columns:40% 60%;grid-template-columns:40% 60%}:host :host-context(.fq-tools) .lockup{background-color:rgba(255,0,0,.25)}}@media only screen and (min-width:1620px){:host([type=locknut]){padding-left:9.31322575em;padding-right:9.31322575em}:host .lockjaw{padding-left:9.31322575em}:host .lockjaw.reverse{padding-left:0;padding-right:9.31322575em}:host :host-context(.fq-tools) .lockup{background-color:rgba(0,128,128,.25)}}@media only screen and (min-width:2430px){:host :host-context(.fq-tools) .lockup{background-color:rgba(255,255,0,.25)}}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .lockjaw.reverse .image-holder .illustration-holder{left:auto!important;right:-2.9296875em!important}:host .locknut.reverse .image-holder .illustration-holder{left:auto!important;right:0!important}}@media only screen and (min-width:0) and (max-width:720px) and (-ms-high-contrast:none),(-ms-high-contrast:active){:host([type=lockjaw]){-ms-grid-column:2!important}:host([type=lockbox]){-ms-grid-column:2!important}}@media only screen and (min-width:0) and (max-width:1079px) and (-ms-high-contrast:none),(-ms-high-contrast:active){:host([type=lockjaw]){-ms-grid-column:2!important}:host([type=lockjaw]) .lockjaw.reverse .image-holder .illustration-holder{right:0!important}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host .lockjaw.reverse .image-holder .illustration-holder{left:auto!important;right:-2.9296875em!important}:host .locknut.reverse .image-holder .illustration-holder{left:auto!important;right:0!important}@media only screen and (min-width:0) and (max-width:720px){:host([type=lockjaw]){-ms-grid-column:2!important}:host([type=lockbox]){-ms-grid-column:2!important}}@media only screen and (min-width:0) and (max-width:1079px){:host([type=lockjaw]){-ms-grid-column:2!important}:host([type=lockjaw]) .lockjaw.reverse .image-holder .illustration-holder{right:0!important}}}";

var nsLockup =
function (_LitElement) {
  _inherits(nsLockup, _LitElement);
  _createClass(nsLockup, null, [{
    key: "properties",
    get: function get() {
      return {
        type: {
          type: String
        },
        decoration: {
          type: String
        },
        ratio: {
          type: String
        },
        reverse: {
          type: Boolean
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$f)]);
    }
  }]);
  function nsLockup() {
    var _this;
    _classCallCheck(this, nsLockup);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsLockup).call(this));
    _this.ratio = '4x3';
    _this.type = 'lockbox';
    _this.layered = false;
    _this.reverse = false;
    return _this;
  }
  _createClass(nsLockup, [{
    key: "addIllustration",
    value: function addIllustration() {
      if (this.decoration && this.type !== 'lockbox') {
        return "<div class=\"illustration-holder\">\n        <ns-illustration type=\"".concat(this.decoration, "\"></ns-illustration>\n      </div>");
      }
      return '';
    }
  }, {
    key: "cardLayout",
    value: function cardLayout() {
      var suffix = this.reverse ? "".concat(this.type, "-reverse") : this.type;
      var type = "basic-".concat(suffix);
      return "\n      <div class=\"card-holder\">\n        <ns-card type=\"".concat(type, "\">\n          <slot slot=\"heading\" name=\"heading\"></slot>\n          <slot slot=\"paragraph\" name=\"paragraph\"></slot>\n          <slot slot=\"cta\" name=\"cta\"></slot>\n        </ns-card>\n      </div>\n    ");
    }
  }, {
    key: "imageLayout",
    value: function imageLayout() {
      return "\n      <div class=\"image-holder ar".concat(this.ratio, "\">\n        ").concat(this.addIllustration(), "\n        <slot name=\"image\"></slot>\n      </div>\n    ");
    }
  }, {
    key: "render",
    value: function render() {
      return html(["\n      <div class=\"lockup ".concat(this.reverse ? 'reverse' : '', " lockup").concat(this.ratio, " ").concat(this.type, "\">\n        ").concat(this.cardLayout(), "\n        ").concat(this.imageLayout(), "\n      </div>\n    ")]);
    }
  }]);
  return nsLockup;
}(LitElement);
customElements.define('ns-lockup', nsLockup);

var decorations = {
  invertConcave: ['163', 'm1620.00005,162.97225c-49.44304,-14.91199 -548.27817,-161.94442 -994.9824,-161.94442c-308.39748,0 -517.51274,55.72275 -625.01765,94.12936l0.00005,-95.12936l1620,0l0,162.94442z'],
  invertConvex: ['51', 'm1620,48.08336l0,2.91664l-1620,0l0,-3.06237c249.95348,-27.44039 526.27345,-47.93763 794.02262,-47.93763c345.2406,0 622.02663,22.39195 825.97738,48.08336z'],
  invertRamp: ['163', 'm1620.00005,0.34961c-49.44304,14.8875 -548.27817,161.67842 -994.9824,161.67842c-308.39748,0 -517.51274,-55.63122 -625.01765,-93.97475l0.00005,94.97311l1620,0l0,-162.67678z'],
  invertBridge: ['51', 'M0,47.9C250,20.5,526.3,0,794,0H0V47.9z', 'M794,0c345.2,0,622,22.4,826,48.1V0H794z'],
  circleYellow: 'orange',
  circleGreen: 'green-light'
};
var generateInvert = function generateInvert(decoration) {
  var paths = Object.assign(decorations[decoration]);
  var viewSize = paths[0];
  var inner = paths.slice(1).map(function (path) {
    return "<path d=\"".concat(path, "\"/>");
  }).join('');
  return {
    viewBox: "0 0 1620 ".concat(viewSize),
    inner: inner
  };
};
var generateCircle = function generateCircle(decoration) {
  var primaryColour = decoration.replace('circle', '').toLowerCase();
  var secondaryColour = decorations[decoration];
  var inner = "<defs>\n    <linearGradient id=\"".concat(primaryColour, "-colour\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" class=\"").concat(primaryColour, "\" />\n      <stop offset=\"100%\" class=\"").concat(secondaryColour, "\" />\n    </linearGradient>\n  </defs>\n  <circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"url(#").concat(primaryColour, "-colour)\" />");
  return {
    viewBox: "0 0 100 100",
    inner: inner
  };
};
var generateSVG$2 = function generateSVG() {
  var decoration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'invert-concave';
  var blocks = {};
  if (decoration.indexOf('invert') > -1) {
    blocks = generateInvert(decoration);
  } else if (decoration.indexOf('circle') > -1) {
    blocks = generateCircle(decoration);
  }
  return "\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"".concat(blocks.viewBox, "\" preserveAspectRatio=\"xMinYMin\">\n  ").concat(blocks.inner, "\n</svg>\n  ");
};

var styles$g = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.decoration-holder,.decoration-holder svg{display:block}.decoration-holder svg path{fill:currentColor}.decoration-holder .yellow{stop-color:#ffc72c;stop-opacity:1}.decoration-holder .orange{stop-color:#ff7a00;stop-opacity:1}.decoration-holder .green{stop-color:#009639;stop-opacity:1}.decoration-holder .green-light{stop-color:#b4e100;stop-opacity:1}.decoration-holder.position-bottom,.decoration-holder.position-top{position:absolute;right:0;left:0}.decoration-holder.position-bottom svg,.decoration-holder.position-top svg{margin-left:-1em;margin-right:-1em}.decoration-holder.position-top{top:-1px}.decoration-holder.position-bottom{bottom:-1px}.decoration-holder.position-left,.decoration-holder.position-right{position:absolute;z-index:-1;top:15%;width:85%}@media only screen and (min-width:480px){.decoration-holder.position-left,.decoration-holder.position-right{top:25%;width:80%}}@media only screen and (min-width:720px){.decoration-holder.position-left,.decoration-holder.position-right{top:25%;width:70%}}@media only screen and (min-width:1080px){.decoration-holder.position-left,.decoration-holder.position-right{top:50%;width:50%}}@media only screen and (min-width:1620px){.decoration-holder.position-left,.decoration-holder.position-right{width:45%}}.decoration-holder.position-left{left:-5%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}@media only screen and (min-width:2430px){.decoration-holder.position-left{left:5%}}.decoration-holder.position-right{right:-5%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}@media only screen and (max-width:719px){.decoration-holder.position-right{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);left:-5%}}@media only screen and (min-width:2430px){.decoration-holder.position-right{right:5%}}.decoration-holder.type-invert{overflow:hidden}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){.decoration-holder{display:none}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){.decoration-holder{display:none}}@supports (-ms-ime-align:auto){.decoration-holder.position-bottom svg,.decoration-holder.position-top svg{margin-left:0;margin-right:0}}";

var camelCase = function camelCase(string) {
  return string.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
};
var nsDecoration = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'invert-concave' : _ref$type,
      position = _ref.position,
      _ref$cssClass = _ref.cssClass,
      cssClass = _ref$cssClass === void 0 ? '' : _ref$cssClass;
  var invertClass = type.indexOf('invert') > -1 ? 'type-invert' : '';
  return "\n    <style>\n      ".concat(styles$g, "\n    </style>\n    <div class=\"decoration-holder position-").concat(position, " ").concat(cssClass, " ").concat(invertClass, "\">\n      ").concat(generateSVG$2(camelCase(type)), "\n    </div>");
});

var styles$h = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.white-decoration{background-image:linear-gradient(205deg,#fff,#f7f7f7 150%);color:#333f48}.yellow-decoration{background-image:linear-gradient(205deg,#ffc72c,#ff7a00 150%);color:#333f48}.cyan-decoration{background-image:linear-gradient(205deg,#09f,#005eb8 150%);color:#fff}.green-light-decoration{background-image:linear-gradient(205deg,#b4e100,#009639 150%);color:#333f48}.grey-light-decoration{background-image:linear-gradient(205deg,#f7f7f7,#fff 150%);color:#333f48}.blue-decoration{background-image:linear-gradient(205deg,#005eb8,#003c71 150%);color:#fff}.white{color:#fff}.white-background{background:#fff;color:#333f48}.slate{color:#333f48}.slate-background{background:#333f48;color:#fff}.cyan{color:#09f}.cyan-background{background:#09f;color:#333f48}.red{color:#d50032}.red-background{background:#d50032;color:#fff}.red-dark{color:#862633}.red-dark-background{background:#862633;color:#fff}.orange{color:#ff7a00}.orange-background{background:#ff7a00;color:#333f48}.yellow{color:#ffc72c}.yellow-background{background:#ffc72c;color:#333f48}.green-light{color:#b4e100}.green-light-background{background:#b4e100;color:#333f48}.green{color:#009639}.green-background{background:#009639;color:#fff}.green-dark{color:#006f44}.green-dark-background{background:#006f44;color:#fff}.blue{color:#005eb8}.blue-background{background:#005eb8;color:#fff}.blue-dark{color:#003c71}.blue-dark-background{background:#003c71;color:#fff}.grey-light{color:#f7f7f7}.grey-light-background{background:#f7f7f7;color:#333f48}.grey{color:#c8c9c7}.grey-background{background:#c8c9c7;color:#333f48}.grey-dark{color:#888b8d}.grey-dark-background{background:#888b8d;color:#fff}.info{color:#209cee}.info-background{background:#209cee;color:#333f48}.success{color:#23d160}.success-background{background:#23d160;color:#333f48}.warning{color:#e3660e}.warning-background{background:#e3660e;color:#fff}.danger{color:#eb002f}.danger-background{background:#eb002f;color:#fff}.focus{color:#ffdd57}.focus-background{background:#ffdd57;color:#333f48}:host{display:block}:host .panel{display:-ms-grid;display:grid;position:relative}:host .panel .layout{display:-ms-grid;display:grid;-ms-grid-columns:5% 1fr 5%;grid-template-columns:5% 1fr 5%;position:relative}:host .panel .layout.type-panel{margin-top:2.02728653em;margin-bottom:2.02728653em}:host .panel .layout.type-nav{margin-top:0;margin-bottom:0}:host .panel .layout .decorate{position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:-4;grid-column-end:-2;width:100%;max-width:1600px;margin-left:auto;margin-right:auto}:host .panel .layout ::slotted(*){display:-ms-grid;display:grid;width:100%;-ms-grid-column-align:center;justify-self:center;max-width:1600px;-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:-4;grid-column-end:-2;grid-column-gap:1.42382813em;grid-row-gap:1.42382813em}:host .panel .layout ::slotted(.splash),:host .panel .layout ::slotted(.splish){display:block;margin-bottom:1.42382813em}:host .panel .layout ::slotted(.splash.triple),:host .panel .layout ::slotted(.splish.triple){display:-ms-grid;display:grid}:host .panel .layout ::slotted(.splish.triple){-ms-grid-column:1;grid-column-start:1}:host .panel .layout ::slotted(.splosh){display:block}@media only screen and (min-width:720px){:host .panel .layout.type-panel{margin-top:2.985984em;margin-bottom:2.985984em}:host .panel .layout ::slotted(*){grid-column-gap:1.728em;grid-row-gap:1.728em}:host .panel .layout ::slotted(.splash),:host .panel .layout ::slotted(.splish){margin-bottom:1.728em}:host .panel .layout ::slotted(.splish){padding-left:12.5%;padding-right:12.5%}:host .panel .layout ::slotted(.splish.triple){-ms-grid-column:2;grid-column-start:2}:host .panel .layout ::slotted(.splosh){padding-left:12.5%;padding-right:12.5%}}@media only screen and (min-width:1080px){:host .panel .layout.type-panel{margin-top:3.81469727em;margin-bottom:3.81469727em}:host .panel .layout ::slotted(*){grid-column-gap:1.953125em;grid-row-gap:1.953125em}:host .panel .layout ::slotted(.splash),:host .panel .layout ::slotted(.splish){margin-bottom:1.953125em}:host .panel .layout ::slotted(.splish){padding-left:inherit;padding-right:inherit}:host .panel .layout ::slotted(.triple){-ms-grid-columns:(1fr)[3];grid-template-columns:repeat(3,1fr)}}@media only screen and (min-width:1620px){:host .panel .layout ::slotted(.splash){padding-left:9.31322575em;padding-right:9.31322575em}:host .panel .layout ::slotted(.splosh){padding-left:11.5em;padding-right:11.5em}}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host .panel .layout{width:100vw}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host .panel .layout{width:100vw}}:host([hidden]){display:none}";

var nsPanel =
function (_LitElement) {
  _inherits(nsPanel, _LitElement);
  _createClass(nsPanel, [{
    key: "checkSiblings",
    value: function checkSiblings() {
      if (this.previousElementSibling && this.previousElementSibling.tagName === 'NS-LANDMARK' || !this.previousElementSibling) {
        this.hasPrevious = true;
        this.hideTop = true;
      } else {
        this.hasPrevious = false;
        this.hideTop = false;
      }
      if (this.nextElementSibling && (this.nextElementSibling.tagName === 'FOOTER' || this.nextElementSibling.tagName === 'NS-CAVEAT') || !this.nextElementSibling) {
        this.hasNext = true;
        this.hideBottom = true;
      } else {
        this.hasNext = false;
        this.hideBottom = false;
      }
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        type: {
          type: String
        },
        decoration: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$h)]);
    }
  }]);
  function nsPanel() {
    var _this;
    _classCallCheck(this, nsPanel);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsPanel).call(this));
    _this.type = 'panel';
    var callback = function callback() {
      var previousElement = _this.previousElementSibling !== null;
      var nextElement = _this.nextElementSibling !== null;
      if (previousElement === _this.hasPrevious || nextElement === _this.hasNext) {
        _this.checkSiblings();
        _this.requestUpdate();
      }
    };
    var observer = new MutationObserver(callback);
    observer.observe(document, {
      childList: true,
      subtree: true
    });
    _this.checkSiblings();
    return _this;
  }
  _createClass(nsPanel, [{
    key: "decorationType",
    value: function decorationType() {
      return this.decoration && this.decoration.split('-')[0];
    }
  }, {
    key: "decorationSuffix",
    value: function decorationSuffix(looking) {
      var parts = this.decoration && this.decoration.split('-');
      if (looking) {
        return parts && parts[parts.length - 1] === looking;
      }
      return parts && parts[parts.length - 1];
    }
  }, {
    key: "invertType",
    value: function invertType(position, name) {
      var pos = position === 'top' ? 0 : 1;
      var type = {
        concave: ['concave', 'convex'],
        bridge: ['bridge', 'convex'],
        ramp: ['concave', 'ramp']
      };
      return type[name] && type[name][pos] || '';
    }
  }, {
    key: "backgroundColour",
    value: function backgroundColour() {
      if (this.decorationType() === 'invert') {
        var parts = this.decoration && this.decoration.split('-');
        return parts && this.decoration.replace("".concat(parts[0], "-"), '').replace("".concat(parts[1], "-"), '');
      }
      return '';
    }
  }, {
    key: "addDecoration",
    value: function addDecoration(where) {
      var position;
      var type;
      switch (where) {
        case 'left':
          if (this.decorationSuffix('left') && this.decorationType() === 'circle') {
            position = 'left';
            type = this.decoration.replace('-left', '');
          }
          break;
        case 'right':
          if (this.decorationSuffix('right') && this.decorationType() === 'circle') {
            position = 'right';
            type = this.decoration.replace('-right', '');
          }
          break;
        case 'top':
          if (this.decorationType() === 'invert') {
            position = 'top';
            var name = this.decoration.replace("-".concat(this.backgroundColour()), '').replace("invert-", '');
            var suffixType = this.invertType(position, name);
            type = "invert-".concat(suffixType);
          }
          break;
        case 'bottom':
          if (this.decorationType() === 'invert') {
            position = 'bottom';
            var _name = this.decoration.replace("-".concat(this.backgroundColour()), '').replace("invert-", '');
            var _suffixType = this.invertType(position, _name);
            type = "invert-".concat(_suffixType);
          }
          break;
      }
      if (position && type) {
        var prefix = '';
        var suffix = '';
        if (position === 'left' || position === 'right') {
          prefix = '<div class="decorate">';
          suffix = '</div>';
        }
        return "".concat(prefix, "\n              ").concat(nsDecoration({
          type: type,
          cssClass: 'white',
          position: position
        }), "\n              ").concat(suffix);
      }
      return '';
    }
  }, {
    key: "render",
    value: function render() {
      var background = this.backgroundColour() ? "".concat(this.backgroundColour(), "-decoration") : '';
      return html(["\n      <div class=\"panel ".concat(background, "\">\n        ").concat(!this.hideTop ? this.addDecoration('top') : '', "\n        ").concat(!this.hideBottom ? this.addDecoration('bottom') : '', "\n        <div class=\"layout type-").concat(this.type, "\">\n          <slot></slot>\n          ").concat(this.addDecoration('left'), "\n          ").concat(this.addDecoration('right'), "\n        </div>\n      </div>\n    ")]);
    }
  }]);
  return nsPanel;
}(LitElement);
customElements.define('ns-panel', nsPanel);

var styles$i = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{width:100%;display:-ms-grid;display:grid}:host .selector{background-color:#fff;color:#333f48;border:.2em solid #c8c9c7;border-radius:0 .5em .5em}:host .selector.checked{border-radius:0;border-color:#005eb8;outline:#005eb8 solid .1em}:host .selector .illustration-holder{position:relative;z-index:1;float:right;margin-top:-1em;margin-right:-1.5em;width:4.27148438em;height:4.27148438em}:host .selector .illustration-holder ns-illustration{display:block}:host .selector .image-holder{overflow:hidden;border-top-right-radius:.275em;width:66%;margin-top:1em;margin-right:1em;margin-left:1em}:host .selector .content{padding:.75em 1em}:host .selector .content .description-holder ::slotted(*){margin-top:1em;padding-bottom:.75em}:host .selector .content ::slotted(label){font-family:\"BG Flame Bold\",sans-serif;font-size:1em!important}@media only screen and (min-width:480px){:host .selector .illustration-holder{margin-top:.5em;margin-right:.5em}:host .selector .image-holder{float:right;margin-top:0;margin-right:0;margin-left:.5em;width:50%}}@media only screen and (min-width:720px){:host .selector{width:66%}:host .selector .image-holder{margin-left:.5em;width:50%}:host .selector .content ::slotted(label){font-size:1.125em!important}}@media only screen and (min-width:1080px){:host .selector{width:100%}:host .selector .illustration-holder{margin-top:-1em;margin-right:-1.5em}:host .selector .image-holder{float:none;margin:0;width:100%}:host .selector .content .description-holder{margin-left:3.125em}:host .selector .content ::slotted(label){font-size:1.25em!important}}";

var nsSelector =
function (_LitElement) {
  _inherits(nsSelector, _LitElement);
  _createClass(nsSelector, [{
    key: "checked",
    set: function set(value) {
      this.isChecked = value;
      if (value) {
        this.shadowRoot.querySelector('.selector').classList.add('checked');
      } else {
        this.shadowRoot.querySelector('.selector').classList.remove('checked');
      }
    },
    get: function get() {
      return this.isChecked;
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        selectedvalue: {
          type: String
        },
        validation: {
          type: String
        },
        decoration: {
          type: String
        },
        image: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$i)]);
    }
  }]);
  function nsSelector() {
    var _this;
    _classCallCheck(this, nsSelector);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsSelector).call(this));
    _this.value = null;
    _this.validity = {
      valid: false
    };
    _this.validation = '';
    _this.validationMessage = '';
    _this.isChecked = false;
    return _this;
  }
  _createClass(nsSelector, [{
    key: "renderImage",
    value: function renderImage() {
      if (this.image) {
        return "<div class=\"image-holder\">\n                <ns-image src=\"".concat(this.image, "\" ratio=\"16x9\"></ns-image>\n              </div>");
      }
      return '';
    }
  }, {
    key: "renderIllustration",
    value: function renderIllustration() {
      if (this.decoration && !this.image) {
        return "<div class=\"illustration-holder\">\n                <ns-illustration type=\"".concat(this.decoration, "\"></ns-illustration>\n              </div>");
      }
      return '';
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var descriptionSlot = this.querySelector('[slot="description"]');
      var inputSlot = this.querySelector('input');
      var id = descriptionSlot.getAttribute('id') || "selector-".concat(randomId());
      descriptionSlot.setAttribute('id', id);
      inputSlot.setAttribute('aria-describedby', id);
      this.isChecked = inputSlot.checked;
      this.requestUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return html(["\n      <div class=\"selector ".concat(this.isChecked ? 'checked' : '', "\">\n        ").concat(this.renderImage(), "\n        ").concat(this.renderIllustration(), "\n        <div class=\"content\">\n          <slot></slot>\n          <div class=\"description-holder\">\n            <slot name=\"description\"></slot>\n          </div>\n        </div>\n      </div>\n    ")]);
    }
  }]);
  return nsSelector;
}(LitElement);
customElements.define('ns-selector', nsSelector);

var styles$j = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host{display:block;width:100%;background:#333f48;color:#fff}:host .expand-holder{margin-bottom:0}";

var nsSkyline =
function (_LitElement) {
  _inherits(nsSkyline, _LitElement);
  function nsSkyline() {
    _classCallCheck(this, nsSkyline);
    return _possibleConstructorReturn(this, _getPrototypeOf(nsSkyline).apply(this, arguments));
  }
  _createClass(nsSkyline, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      this.setAttribute('role', 'tablist');
      this.allExpanders.forEach(function (expander) {
        expander.setAttribute('type', 'skyline');
      });
    }
  }, {
    key: "render",
    value: function render() {
      return html(["\n      <ns-panel type=\"nav\">\n        <div class=\"splash expand-holder\">\n          <slot></slot>\n        </div>\n      </ns-panel>\n    "]);
    }
  }, {
    key: "allExpanders",
    get: function get() {
      return Array.from(this.querySelectorAll('ns-expander'));
    }
  }], [{
    key: "styles",
    get: function get() {
      return css(["".concat(styles$j)]);
    }
  }]);
  return nsSkyline;
}(LitElement);
customElements.define('ns-skyline', nsSkyline);

var styles$k = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{display:inline-block}:host button{position:relative;text-align:left;background-color:#fff;cursor:pointer;outline:unset;margin-top:.2em;margin-right:.2em;margin-left:.2em;-webkit-box-shadow:inset 0 -.15em 0 0 #c8c9c7;box-shadow:inset 0 -.15em 0 0 #c8c9c7;padding:.8125em 1.8em}:host button:focus,:host button[selected]{margin-top:0;margin-right:0;margin-left:0;border-color:#c8c9c7;border-width:.2em;border-top-right-radius:.5em;-webkit-box-shadow:unset;box-shadow:unset;border-style:solid solid none}:host button:focus,:host button:focus .label-holder,:host button[selected],:host button[selected] .label-holder{color:#005eb8}:host button:focus{border-color:#005eb8;-webkit-box-shadow:inset 0 .1em 0 #005eb8,inset -.1em 0 0 #005eb8,inset .1em 0 0 #005eb8,inset 0 -.1em 0 0 #fff;box-shadow:inset 0 .1em 0 #005eb8,inset -.1em 0 0 #005eb8,inset .1em 0 0 #005eb8,inset 0 -.1em 0 0 #fff}:host button:active{color:inherit}:host button:hover{text-decoration:underline;-webkit-text-decoration-color:rgba(51,63,72,.25);text-decoration-color:rgba(51,63,72,.25)}:host button::-moz-focus-inner{border:0}:host button .label-holder{font-family:\"BG Flame Bold\",sans-serif;font-size:1.25em;width:-webkit-min-content;width:-moz-min-content;width:min-content}:host button.has-icon{padding-left:4em}:host button .icon{position:absolute;left:1em;bottom:.75em;width:2em;height:2em;text-indent:0}:host button .icon svg{position:absolute;top:0;right:0;bottom:0;left:0;fill:currentColor}";

var nsTab =
function (_LitElement) {
  _inherits(nsTab, _LitElement);
  _createClass(nsTab, null, [{
    key: "properties",
    get: function get() {
      return {
        selected: {
          type: Boolean
        },
        icon: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$k)]);
    }
  }]);
  function nsTab() {
    var _this;
    _classCallCheck(this, nsTab);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsTab).call(this));
    _this.selected = false;
    _this.icon = '';
    return _this;
  }
  _createClass(nsTab, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var host = this.shadowRoot.host;
      host.setAttribute('role', 'tab');
    }
  }, {
    key: "updated",
    value: function updated(changedProperties) {
      var host = this.shadowRoot.host;
      var selected = this.selected;
      var prevSelected = changedProperties.selected;
      if (!prevSelected && selected) {
        this.dispatchSelectedEvent();
      }
      if (selected) {
        host.setAttribute('aria-selected', 'true');
      } else {
        host.removeAttribute('aria-selected');
      }
    }
  }, {
    key: "dispatchSelectedEvent",
    value: function dispatchSelectedEvent() {
      var event = new CustomEvent('tabselected', {
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "addIcon",
    value: function addIcon() {
      if (this.icon && this.icon.length > 0) {
        return "<span class=\"icon\">\n        <ns-icon type=\"".concat(this.icon, "\" aria-hidden=\"true\"></ns-icon>\n      </span>");
      }
      return '';
    }
  }, {
    key: "render",
    value: function render() {
      var selected = this.selected;
      var isSelected = selected ? 'selected' : '';
      var tabIndexAttr = selected ? '' : 'tabindex="-1"';
      var hasIcon = this.icon && this.icon.length > 0;
      return html(["\n      <button ".concat(isSelected, " ").concat(tabIndexAttr, " class=\"").concat(hasIcon ? 'has-icon' : '', "\">\n        ").concat(this.addIcon(), "\n        <span class=\"label-holder\">\n          <slot></slot>\n        </span>\n      </button>\n    ")]);
    }
  }]);
  return nsTab;
}(LitElement);
customElements.define('ns-tab', nsTab);

var styles$l = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host .table-caption{font-family:\"BG Flame Bold\",sans-serif;display:block;margin:inherit;padding:0}ns-panel .h1:last-child,ns-panel h1:not([slot]):last-child{margin-bottom:0}.h1,.h1:not([slot]),h1:not([slot]){font-size:2.02728653em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h1,.h1:not([slot]),h1:not([slot]){font-size:2.985984em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h1,.h1:not([slot]),h1:not([slot]){font-size:3.81469727em;margin-top:0;letter-spacing:-.01625em;line-height:1.15;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h2:last-child,ns-panel h2:not([slot]):last-child{margin-bottom:0}.h2,.h2:not([slot]),h2:not([slot]){font-size:1.69897251em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.27151499em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h2,.h2:not([slot]),h2:not([slot]){font-size:2.72957517em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h3:last-child,ns-panel h3:not([slot]):last-child{margin-bottom:0}.h3,.h3:not([slot]),h3:not([slot]){font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h3,.h3:not([slot]),h3:not([slot]){font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.25;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h4:last-child,ns-panel h4:not([slot]):last-child{margin-bottom:0}.h4,.h4:not([slot]),:host .table-caption,h4:not([slot]){font-size:1.34239803em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h4,.h4:not([slot]),:host .table-caption,h4:not([slot]){font-size:1.57744097em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h4,.h4:not([slot]),:host .table-caption,h4:not([slot]){font-size:1.74692811em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h5:last-child,ns-panel h5:not([slot]):last-child{margin-bottom:0}.h5,.h5:not([slot]),h5:not([slot]){font-size:1.19324269em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.31453414em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h5,.h5:not([slot]),h5:not([slot]){font-size:1.39754249em;margin-top:0;letter-spacing:-.01625em;line-height:1.35;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}}ns-panel .h6:last-child,ns-panel h6:not([slot]):last-child{margin-bottom:0}.h6,.h6:not([slot]),h6:not([slot]){font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.h6,.h6:not([slot]),h6:not([slot]){font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:1em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-large:last-child{margin-bottom:0}.p-large{font-size:1.42382813em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-large{font-size:1.728em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-large{font-size:1.953125em;margin-top:0;letter-spacing:-.01625em;line-height:1.2;margin-bottom:.5em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-feature:last-child{margin-bottom:0}.p-feature{font-size:1.265625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-feature{font-size:1.44em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-feature{font-size:1.5625em;margin-top:0;letter-spacing:-.01625em;line-height:1.3;margin-bottom:.6em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-normal:last-child{margin-bottom:0}.p-normal{font-size:1.125em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-normal{font-size:1.2em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}}@media only screen and (min-width:1620px){.p-normal{font-size:1.25em;margin-top:0;letter-spacing:-.01625em;line-height:1.4;margin-bottom:.7em;max-width:32em;font-weight:400;color:inherit}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-small:last-child{margin-bottom:0}.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}@media only screen and (min-width:720px){.p-small{font-size:1em;margin-top:0;letter-spacing:-.01625em;line-height:1.5;margin-bottom:.8em;max-width:32em;font-weight:400;color:inherit}}ns-panel .p-caption:last-child{margin-bottom:0}.p-caption{font-size:.88888889em;margin-top:0;letter-spacing:-.01625em;line-height:1.6;margin-bottom:.9em;max-width:32em;font-weight:400;color:inherit}:host{font-size:1em;margin-bottom:1.42382813em}:host .scroll-holder{display:-ms-grid;display:grid;position:relative}:host .scroll-holder .table-holder{overflow-x:auto}:host .scroll-holder.is-scrolling .table-holder::before{pointer-events:none;position:absolute;content:\"\";top:0;left:0;bottom:0;width:1em;-webkit-box-shadow:inset 0 1.75em 1em -1em #fff,inset .5em 0 1em -1em #333f48;box-shadow:inset 0 1.75em 1em -1em #fff,inset .5em 0 1em -1em #333f48}:host .scroll-holder.is-scrolling .table-holder::after{pointer-events:none;position:absolute;content:\"\";top:0;right:0;bottom:0;width:1em;-webkit-box-shadow:inset 0 1.75em 1em -1em #fff,inset -.5em 0 1em -1em #333f48;box-shadow:inset 0 1.75em 1em -1em #fff,inset -.5em 0 1em -1em #333f48}:host .scroll-holder.is-scrolling .table-holder:focus{outline-offset:.25em;outline:#ffdd57 solid .1875em}@media only screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host{display:block;overflow-x:auto}}@supports (-ms-ime-align:auto) and (not (-webkit-text-stroke:initial)){:host{display:block;overflow-x:auto}}@supports (-ms-ime-align:auto){:host .table-holder::after{right:-1px}}";

var nsTable =
function (_LitElement) {
  _inherits(nsTable, _LitElement);
  _createClass(nsTable, null, [{
    key: "styles",
    get: function get() {
      return css(["".concat(styles$l)]);
    }
  }]);
  function nsTable() {
    var _this;
    _classCallCheck(this, nsTable);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsTable).call(this));
    _this.showScroll = _this.querySelectorAll('tr').length > 6 || false;
    return _this;
  }
  _createClass(nsTable, [{
    key: "addScopeAttribute",
    value: function addScopeAttribute() {
      var head = this.querySelector('thead');
      var body = this.querySelector('tbody');
      var caption = this.querySelector('caption');
      var hasRow = false;
      if (caption) {
        caption.setAttribute('hidden', '');
      }
      if (body) {
        Array.from(body.querySelectorAll('th')).forEach(function (header) {
          header.setAttribute('scope', 'row');
          hasRow = true;
        });
      }
      if (head) {
        Array.from(head.querySelectorAll('th')).forEach(function (header, key) {
          if (key === 0 && hasRow) {
            header.setAttribute('scope', 'row');
          } else {
            header.setAttribute('scope', 'col');
          }
        });
      }
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var tableHolder = this.shadowRoot.querySelector('.table-holder');
      var hasScroll = this.showScroll;
      if (tableHolder) {
        this.showScroll = tableHolder.scrollWidth > tableHolder.clientWidth;
        if (hasScroll !== this.showScroll) {
          this.requestUpdate();
        }
      }
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this2 = this;
      this.shadowRoot.addEventListener('slotchange', function () {
        _this2.addScopeAttribute();
      });
      window.addEventListener('resize', function () {
        _this2.checkScroll();
      });
      var options = {
        threshold: 0.01
      };
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio > 0) {
            _this2.checkScroll();
          }
        });
      }, options);
      io.observe(this.shadowRoot.querySelector('.scroll-holder'));
      this.checkScroll();
      this.addScopeAttribute();
    }
  }, {
    key: "render",
    value: function render() {
      return html(["\n      ".concat(this.slottedCaption, "\n      <p class=\"p-caption\" ").concat(this.showScroll ? '' : 'hidden', ">(scroll for more information)</p>\n      ").concat(this.slottedTable, "\n    ")]);
    }
  }, {
    key: "slottedTable",
    get: function get() {
      var table = this.querySelector('table');
      return table ? "\n    <div class=\"scroll-holder ".concat(this.showScroll ? 'is-scrolling' : '', "\">\n      <div class=\"table-holder\" ").concat(this.showScroll ? 'tabindex="0" role="group" aria-labelledby="caption"' : '', "><slot></slot></div>\n    </div>\n    ") : '';
    }
  }, {
    key: "slottedCaption",
    get: function get() {
      var caption = this.querySelector('caption');
      return caption ? "\n    <div id=\"caption\" class=\"table-caption\">".concat(caption.outerHTML, "</div>") : '';
    }
  }]);
  return nsTable;
}(LitElement);
customElements.define('ns-table', nsTable);

var styles$m = "*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:\"BG Flame Regular\",sans-serif;color:#333f48;font-size:16px;background:#fff;overflow-x:hidden;line-height:1.5;min-height:100vh}button,input,optgroup,select,textarea{font-size:100%;line-height:1.5;font-family:inherit;margin:0;padding:0;border:0}button,input{overflow:visible}button,select{text-transform:none}[type=submit],button,html [type=button]{-webkit-appearance:button}fieldset{padding:0;border:0;margin:0}legend{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:normal;max-width:100%;display:table;color:inherit;padding:0}progress{vertical-align:baseline}b,strong{font-weight:400}@font-face{font-family:'BG Flame Light';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Light.woff) format('woff')}@font-face{font-family:'BG Flame Regular';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Regular.woff) format('woff')}@font-face{font-family:'BG Flame Bold';font-display:fallback;src:url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff2) format('woff2'),url(https://www.britishgas.co.uk/nucleus/fonts/BGFlameWeb-Bold.woff) format('woff')}@-webkit-keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}:host{display:block}:host .layout{display:-ms-grid;display:grid;-ms-grid-columns:5% 1fr 5%;grid-template-columns:5% 1fr 5%;margin-top:2.02728653em;white-space:nowrap;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch}:host .layout .tabs-holder{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:-4;grid-column-end:-2;width:100%;max-width:1600px;margin-left:auto;margin-right:auto}:host .layout .tabs{position:relative;background-color:#fff;font-size:.8em;-webkit-box-shadow:inset 0 -.15em 0 0 #c8c9c7;box-shadow:inset 0 -.15em 0 0 #c8c9c7}:host .layout .tabs::after{position:absolute;content:\"\";right:0;bottom:0;left:0;border-bottom:.2em solid transparent}@media only screen and (min-width:720px){:host .layout{margin-top:2.985984em}:host .layout .tabs{font-size:.9em}}@media only screen and (min-width:1080px){:host .layout{margin-top:3.81469727em}:host .layout .tabs{font-size:1em}}@media only screen and (min-width:1620px){:host .layout .tabs-holder{padding-left:9.31322575em;padding-right:9.31322575em}}";

var _direction;
var keys = {
  ARROW_DOWN: 40,
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39,
  ARROW_UP: 38,
  END: 35,
  HOME: 36
};
var direction = (_direction = {}, _defineProperty(_direction, keys.ARROW_DOWN, 1), _defineProperty(_direction, keys.ARROW_LEFT, -1), _defineProperty(_direction, keys.ARROW_RIGHT, 1), _defineProperty(_direction, keys.ARROW_UP, -1), _direction);
var assignId = function assignId(element) {
  if (!element.id) {
    element.id = randomId();
  }
  return element.id;
};
var modulo = function modulo(a, b) {
  return (a % b + b) % b;
};
var nsTabs =
function (_LitElement) {
  _inherits(nsTabs, _LitElement);
  _createClass(nsTabs, [{
    key: "panels",
    get: function get() {
      return Array.from(this.querySelectorAll('[slot="panel"]'));
    }
  }, {
    key: "tabs",
    get: function get() {
      return Array.from(this.querySelectorAll('[slot="tab"]'));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        open: {
          type: Number
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$m)]);
    }
  }]);
  function nsTabs() {
    var _this;
    _classCallCheck(this, nsTabs);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsTabs).call(this));
    _this.open = 0;
    return _this;
  }
  _createClass(nsTabs, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this2 = this;
      this.addEventListener('click', this.handleClick);
      this.addEventListener('keydown', this.handleKeyDown);
      this.shadowRoot.addEventListener('slotchange', function () {
        _this2.initSlotElements();
        _this2.updateTabsAndPanels();
      });
    }
  }, {
    key: "updated",
    value: function updated() {
      this.updateTabsAndPanels();
    }
  }, {
    key: "dispatchChangeEvent",
    value: function dispatchChangeEvent(targetTab) {
      var event = new CustomEvent('tabchange', {
        bubbles: true,
        composed: true
      });
      targetTab.dispatchEvent(event);
    }
  }, {
    key: "focusTab",
    value: function focusTab(tabElement) {
      this.updateComplete.then(function () {
        tabElement.shadowRoot.firstElementChild.focus();
      });
    }
  }, {
    key: "getTabElement",
    value: function getTabElement(index) {
      return this.tabs[index];
    }
  }, {
    key: "getTabPosition",
    value: function getTabPosition(tab) {
      return this.tabs.indexOf(tab);
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var target = event.target;
      var tabPos = this.getTabPosition(target);
      if (tabPos > -1) {
        this.open = tabPos;
        this.focusTab(target);
        this.dispatchChangeEvent(target);
      }
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      var nextOpen = null;
      var keyCode = event.keyCode;
      var tabCount = this.tabs.length;
      var offset = direction[keyCode];
      if (!tabCount) {
        return;
      }
      switch (keyCode) {
        case keys.HOME:
          nextOpen = 0;
          break;
        case keys.END:
          nextOpen = tabCount - 1;
          break;
        default:
          if (offset) {
            nextOpen = modulo(this.open + offset, tabCount);
          }
      }
      if (nextOpen !== null) {
        event.preventDefault();
        this.open = nextOpen;
        var nextTab = this.getTabElement(nextOpen);
        this.focusTab(nextTab);
        this.dispatchChangeEvent(nextTab);
      }
    }
  }, {
    key: "initSlotElements",
    value: function initSlotElements() {
      var tabs = this.tabs,
          panels = this.panels;
      panels.forEach(function (panel, index) {
        var tab = tabs[index];
        panel.setAttribute('role', 'tabpanel');
        if (tab) {
          var panelId = assignId(panel);
          var tabId = assignId(tab);
          if (!tab.hasAttribute('aria-controls')) {
            tab.setAttribute('aria-controls', panelId);
          }
          if (!panel.hasAttribute('aria-labelledby')) {
            panel.setAttribute('aria-labelledby', tabId);
          }
        }
      });
    }
  }, {
    key: "updatePanels",
    value: function updatePanels() {
      var _this3 = this;
      this.panels.forEach(function (panel, index) {
        if (index === _this3.open) {
          panel.removeAttribute('hidden');
        } else {
          panel.setAttribute('hidden', '');
        }
      });
    }
  }, {
    key: "updateTabs",
    value: function updateTabs() {
      var _this4 = this;
      this.tabs.forEach(function (tab, index) {
        if (index === _this4.open) {
          tab.setAttribute('selected', 'true');
        } else {
          tab.removeAttribute('selected');
        }
      });
    }
  }, {
    key: "updateTabsAndPanels",
    value: function updateTabsAndPanels() {
      this.updateTabs();
      this.updatePanels();
    }
  }, {
    key: "render",
    value: function render() {
      return html(["\n      <div class=\"layout\">\n        <div role=\"tablist\" class=\"tabs-holder\">\n          <div class=\"tabs\">\n            <slot name=\"tab\"></slot>\n          </div>\n        </div>\n      </div>\n      <slot name=\"panel\"></slot>\n    "]);
    }
  }]);
  return nsTabs;
}(LitElement);
customElements.define('ns-tabs', nsTabs);

var styles$n = ":host{display:block}:host .video-container{display:block;width:100%}";

var nsVideo =
function (_LitElement) {
  _inherits(nsVideo, _LitElement);
  _createClass(nsVideo, null, [{
    key: "properties",
    get: function get() {
      return {
        id: {
          type: String
        },
        ratio: {
          type: String
        },
        title: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return css(["".concat(styles$n)]);
    }
  }]);
  function nsVideo() {
    var _this;
    _classCallCheck(this, nsVideo);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(nsVideo).call(this));
    _this.id = '';
    _this.ratio = '16x9';
    _this.title = 'YouTube video';
    return _this;
  }
  _createClass(nsVideo, [{
    key: "checkRatio",
    value: function checkRatio() {
      var exceptedRatios = ['16x9', '4x3', '1x1'];
      if (!exceptedRatios.includes(this.ratio)) {
        this.ratio = '16x9';
      }
    }
  }, {
    key: "setHeight",
    value: function setHeight() {
      var width = this.clientWidth;
      var parts = this.ratio.split('x');
      var height = width / parts[0] * parts[1];
      var container = this.shadowRoot.querySelector('.video-container');
      container.style.height = "".concat(height, "px");
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this2 = this;
      this.shadowRoot.querySelector('iframe').addEventListener('load', function () {
        _this2.setHeight();
      });
      window.addEventListener('resize', function () {
        _this2.setHeight();
      });
    }
  }, {
    key: "updated",
    value: function updated() {
      this.setHeight();
    }
  }, {
    key: "render",
    value: function render() {
      this.checkRatio();
      return html(["\n      <div class=\"video-container\">\n        <iframe\n          title=\"".concat(this.title, "\"\n          width=\"100%\"\n          height=\"100%\"\n          src=\"https://www.youtube-nocookie.com/embed/").concat(this.id, "?rel=0\"\n          frameborder=\"0\"\n          allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\n        >\n        </iframe>\n      </div>\n    ")]);
    }
  }]);
  return nsVideo;
}(LitElement);
customElements.define('ns-video', nsVideo);
