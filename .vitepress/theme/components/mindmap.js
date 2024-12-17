function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(t.prototype ), o, e);
  return "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

// 常量
var CONSTANTS = {
  CHANGE_THEME: 'changeTheme',
  CHANGE_LAYOUT: 'changeLayout',
  SET_DATA: 'setData',
  TRANSFORM_TO_NORMAL_NODE: 'transformAllNodesToNormalNode',
  MODE: {
    READONLY: 'readonly',
    EDIT: 'edit'
  },
  LAYOUT: {
    LOGICAL_STRUCTURE: 'logicalStructure',
    LOGICAL_STRUCTURE_LEFT: 'logicalStructureLeft',
    MIND_MAP: 'mindMap',
    ORGANIZATION_STRUCTURE: 'organizationStructure',
    CATALOG_ORGANIZATION: 'catalogOrganization',
    TIMELINE: 'timeline',
    TIMELINE2: 'timeline2',
    FISHBONE: 'fishbone',
    VERTICAL_TIMELINE: 'verticalTimeline'
  },
  DIR: {
    UP: 'up',
    LEFT: 'left',
    DOWN: 'down',
    RIGHT: 'right'
  },
  KEY_DIR: {
    LEFT: 'Left',
    UP: 'Up',
    RIGHT: 'Right',
    DOWN: 'Down'
  },
  SHAPE: {
    RECTANGLE: 'rectangle',
    DIAMOND: 'diamond',
    PARALLELOGRAM: 'parallelogram',
    ROUNDED_RECTANGLE: 'roundedRectangle',
    OCTAGONAL_RECTANGLE: 'octagonalRectangle',
    OUTER_TRIANGULAR_RECTANGLE: 'outerTriangularRectangle',
    INNER_TRIANGULAR_RECTANGLE: 'innerTriangularRectangle',
    ELLIPSE: 'ellipse',
    CIRCLE: 'circle'
  },
  MOUSE_WHEEL_ACTION: {
    ZOOM: 'zoom',
    MOVE: 'move'
  },
  INIT_ROOT_NODE_POSITION: {
    LEFT: 'left',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    CENTER: 'center'
  },
  LAYOUT_GROW_DIR: {
    LEFT: 'left',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom'
  },
  PASTE_TYPE: {
    CLIP_BOARD: 'clipBoard',
    CANVAS: 'canvas'
  },
  SCROLL_BAR_DIR: {
    VERTICAL: 'vertical',
    HORIZONTAL: 'horizontal'
  },
  CREATE_NEW_NODE_BEHAVIOR: {
    DEFAULT: 'default',
    NOT_ACTIVE: 'notActive',
    ACTIVE_ONLY: 'activeOnly'
  },
  TAG_POSITION: {
    RIGHT: 'right',
    BOTTOM: 'bottom'
  },
  EDIT_NODE_CLASS: {
    SMM_NODE_EDIT_WRAP: 'smm-node-edit-wrap',
    RICH_TEXT_EDIT_WRAP: 'ql-editor',
    ASSOCIATIVE_LINE_TEXT_EDIT_WRAP: 'associative-line-text-edit-warp'
  }
};
var initRootNodePositionMap = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CONSTANTS.INIT_ROOT_NODE_POSITION.LEFT, 0), CONSTANTS.INIT_ROOT_NODE_POSITION.TOP, 0), CONSTANTS.INIT_ROOT_NODE_POSITION.RIGHT, 1), CONSTANTS.INIT_ROOT_NODE_POSITION.BOTTOM, 1), CONSTANTS.INIT_ROOT_NODE_POSITION.CENTER, 0.5);
var layoutValueList = [CONSTANTS.LAYOUT.LOGICAL_STRUCTURE, CONSTANTS.LAYOUT.LOGICAL_STRUCTURE_LEFT, CONSTANTS.LAYOUT.MIND_MAP, CONSTANTS.LAYOUT.CATALOG_ORGANIZATION, CONSTANTS.LAYOUT.ORGANIZATION_STRUCTURE, CONSTANTS.LAYOUT.TIMELINE, CONSTANTS.LAYOUT.TIMELINE2, CONSTANTS.LAYOUT.VERTICAL_TIMELINE, CONSTANTS.LAYOUT.FISHBONE];

// 节点数据中非样式的字段
var nodeDataNoStylePropList = ['text', 'image', 'imageTitle', 'imageSize', 'icon', 'tag', 'hyperlink', 'hyperlinkTitle', 'note', 'expand', 'isActive', 'generalization', 'richText', 'resetRichText', 'uid', 'activeStyle', 'associativeLineTargets', 'associativeLineTargetControlOffsets', 'associativeLinePoint', 'associativeLineText', 'attachmentUrl', 'attachmentName', 'notation', 'outerFrame', 'number', 'range', 'customLeft', 'customTop', 'customTextWidth', 'checkbox', 'dir'];

// 错误类型
var ERROR_TYPES = {
  READ_CLIPBOARD_ERROR: 'read_clipboard_error',
  PARSE_PASTE_DATA_ERROR: 'parse_paste_data_error',
  CUSTOM_HANDLE_CLIPBOARD_TEXT_ERROR: 'custom_handle_clipboard_text_error',
  LOAD_CLIPBOARD_IMAGE_ERROR: 'load_clipboard_image_error',
  BEFORE_TEXT_EDIT_ERROR: 'before_text_edit_error',
  EXPORT_ERROR: 'export_error',
  EXPORT_LOAD_IMAGE_ERROR: 'export_load_image_error',
  DATA_CHANGE_DETAIL_EVENT_ERROR: 'data_change_detail_event_error'
};

// css
var cssContent = "\n  /* \u9F20\u6807hover\u548C\u6FC0\u6D3B\u65F6\u6E32\u67D3\u7684\u77E9\u5F62 */\n  .smm-hover-node{\n    display: none;\n    opacity: 0.6;\n    stroke-width: 1;\n  }\n\n  .smm-node:not(.smm-node-dragging):hover .smm-hover-node{\n    display: block;\n  }\n\n  .smm-node.active .smm-hover-node, .smm-node-highlight .smm-hover-node{\n    display: block;\n    opacity: 1;\n    stroke-width: 2;\n  }\n\n  .smm-text-node-wrap {\n    user-select: none;\n  }\n";

// 非富文本模式下的节点文本行高
var noneRichTextNodeLineHeight = 1.2;

//  视图操作类
var View = /*#__PURE__*/function () {
  //  构造函数
  function View() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, View);
    this.opt = opt;
    this.mindMap = this.opt.mindMap;
    this.scale = 1;
    this.sx = 0;
    this.sy = 0;
    this.x = 0;
    this.y = 0;
    this.firstDrag = true;
    this.setTransformData(this.mindMap.opt.viewData);
    this.bind();
  }

  //  绑定
  return _createClass(View, [{
    key: "bind",
    value: function bind() {
      var _this = this;
      // 快捷键
      this.mindMap.keyCommand.addShortcut('Control+=', function () {
        _this.enlarge();
      });
      this.mindMap.keyCommand.addShortcut('Control+-', function () {
        _this.narrow();
      });
      this.mindMap.keyCommand.addShortcut('Control+i', function () {
        _this.fit();
      });
      // 拖动视图
      this.mindMap.event.on('mousedown', function (e) {
        var _this$mindMap$opt = _this.mindMap.opt,
          isDisableDrag = _this$mindMap$opt.isDisableDrag,
          mousedownEventPreventDefault = _this$mindMap$opt.mousedownEventPreventDefault;
        if (isDisableDrag) return;
        if (mousedownEventPreventDefault) {
          e.preventDefault();
        }
        _this.sx = _this.x;
        _this.sy = _this.y;
      });
      this.mindMap.event.on('drag', function (e, event) {
        // 按住ctrl键拖动为多选
        // 禁用拖拽
        if (e.ctrlKey || e.metaKey || _this.mindMap.opt.isDisableDrag) {
          return;
        }
        if (_this.firstDrag) {
          _this.firstDrag = false;
          // 清除激活节点
          if (_this.mindMap.renderer.activeNodeList.length > 0) {
            _this.mindMap.execCommand('CLEAR_ACTIVE_NODE');
          }
        }
        _this.x = _this.sx + event.mousemoveOffset.x;
        _this.y = _this.sy + event.mousemoveOffset.y;
        _this.transform();
      });
      this.mindMap.event.on('mouseup', function () {
        _this.firstDrag = true;
      });
      // 放大缩小视图
      this.mindMap.event.on('mousewheel', function (e, dirs, event, isTouchPad) {
        var _this$mindMap$opt2 = _this.mindMap.opt,
          customHandleMousewheel = _this$mindMap$opt2.customHandleMousewheel,
          mousewheelAction = _this$mindMap$opt2.mousewheelAction,
          mouseScaleCenterUseMousePosition = _this$mindMap$opt2.mouseScaleCenterUseMousePosition,
          mousewheelMoveStep = _this$mindMap$opt2.mousewheelMoveStep,
          mousewheelZoomActionReverse = _this$mindMap$opt2.mousewheelZoomActionReverse,
          disableMouseWheelZoom = _this$mindMap$opt2.disableMouseWheelZoom,
          translateRatio = _this$mindMap$opt2.translateRatio;
        // 是否自定义鼠标滚轮事件
        if (customHandleMousewheel && typeof customHandleMousewheel === 'function') {
          return customHandleMousewheel(e);
        }
        // 1.鼠标滚轮事件控制缩放
        if (mousewheelAction === CONSTANTS.MOUSE_WHEEL_ACTION.ZOOM || e.ctrlKey || e.metaKey) {
          if (disableMouseWheelZoom) return;
          var _this$mindMap$toPos = _this.mindMap.toPos(e.clientX, e.clientY),
            clientX = _this$mindMap$toPos.x,
            clientY = _this$mindMap$toPos.y;
          var cx = mouseScaleCenterUseMousePosition ? clientX : undefined;
          var cy = mouseScaleCenterUseMousePosition ? clientY : undefined;
          // 如果来自触控板，那么过滤掉左右的移动
          if (isTouchPad && (dirs.includes(CONSTANTS.DIR.LEFT) || dirs.includes(CONSTANTS.DIR.RIGHT))) {
            dirs = dirs.filter(function (dir) {
              return ![CONSTANTS.DIR.LEFT, CONSTANTS.DIR.RIGHT].includes(dir);
            });
          }
          switch (true) {
            // 鼠标滚轮，向上和向左，都是缩小
            case dirs.includes(CONSTANTS.DIR.UP):
              mousewheelZoomActionReverse ? _this.enlarge(cx, cy, isTouchPad) : _this.narrow(cx, cy, isTouchPad);
              break;
            // 鼠标滚轮，向下和向右，都是放大
            case dirs.includes(CONSTANTS.DIR.DOWN):
              mousewheelZoomActionReverse ? _this.narrow(cx, cy, isTouchPad) : _this.enlarge(cx, cy, isTouchPad);
              break;
          }
        } else {
          // 2.鼠标滚轮事件控制画布移动
          var stepX = 0;
          var stepY = 0;
          if (isTouchPad) {
            // 如果是触控板，那么直接使用触控板滑动距离
            stepX = Math.abs(e.wheelDeltaX);
            stepY = Math.abs(e.wheelDeltaY);
          } else {
            stepX = stepY = mousewheelMoveStep;
          }
          var mx = 0;
          var my = 0;
          // 上移
          if (dirs.includes(CONSTANTS.DIR.DOWN)) {
            my = -stepY;
          }
          // 下移
          if (dirs.includes(CONSTANTS.DIR.UP)) {
            my = stepY;
          }
          // 右移
          if (dirs.includes(CONSTANTS.DIR.LEFT)) {
            mx = stepX;
          }
          // 左移
          if (dirs.includes(CONSTANTS.DIR.RIGHT)) {
            mx = -stepX;
          }
          _this.translateXY(mx * translateRatio, my * translateRatio);
        }
      });
      this.mindMap.on('resize', function () {
        if (!_this.checkNeedMindMapInCanvas()) return;
        _this.transform();
      });
    }

    //  获取当前变换状态数据
  }, {
    key: "getTransformData",
    value: function getTransformData() {
      return {
        transform: this.mindMap.draw.transform(),
        state: {
          scale: this.scale,
          x: this.x,
          y: this.y,
          sx: this.sx,
          sy: this.sy
        }
      };
    }

    //  动态设置变换状态数据
  }, {
    key: "setTransformData",
    value: function setTransformData(viewData) {
      var _this2 = this;
      if (viewData) {
        Object.keys(viewData.state).forEach(function (prop) {
          _this2[prop] = viewData.state[prop];
        });
        this.mindMap.draw.transform(_objectSpread2({}, viewData.transform));
        this.mindMap.emit('view_data_change', this.getTransformData());
        this.emitEvent('scale');
        this.emitEvent('translate');
      }
    }

    //  平移x,y方向
  }, {
    key: "translateXY",
    value: function translateXY(x, y) {
      if (x === 0 && y === 0) return;
      this.x += x;
      this.y += y;
      this.transform();
      this.emitEvent('translate');
    }

    //  平移x方向
  }, {
    key: "translateX",
    value: function translateX(step) {
      if (step === 0) return;
      this.x += step;
      this.transform();
      this.emitEvent('translate');
    }

    //  平移x方式到
  }, {
    key: "translateXTo",
    value: function translateXTo(x) {
      this.x = x;
      this.transform();
      this.emitEvent('translate');
    }

    //  平移y方向
  }, {
    key: "translateY",
    value: function translateY(step) {
      if (step === 0) return;
      this.y += step;
      this.transform();
      this.emitEvent('translate');
    }

    //  平移y方向到
  }, {
    key: "translateYTo",
    value: function translateYTo(y) {
      this.y = y;
      this.transform();
      this.emitEvent('translate');
    }

    //   应用变换
  }, {
    key: "transform",
    value: function transform() {
      try {
        this.limitMindMapInCanvas();
      } catch (error) {}
      this.mindMap.draw.transform({
        origin: [0, 0],
        scale: this.scale,
        translate: [this.x, this.y]
      });
      this.mindMap.emit('view_data_change', this.getTransformData());
    }

    //  恢复
  }, {
    key: "reset",
    value: function reset() {
      var scaleChange = this.scale !== 1;
      var translateChange = this.x !== 0 || this.y !== 0;
      this.scale = 1;
      this.x = 0;
      this.y = 0;
      this.transform();
      if (scaleChange) {
        this.emitEvent('scale');
      }
      if (translateChange) {
        this.emitEvent('translate');
      }
    }

    //  缩小
  }, {
    key: "narrow",
    value: function narrow(cx, cy, isTouchPad) {
      var _this$mindMap$opt3 = this.mindMap.opt,
        scaleRatio = _this$mindMap$opt3.scaleRatio,
        minZoomRatio = _this$mindMap$opt3.minZoomRatio;
      scaleRatio = scaleRatio / (isTouchPad ? 5 : 1);
      var scale = Math.max(this.scale - scaleRatio, minZoomRatio / 100);
      this.scaleInCenter(scale, cx, cy);
      this.transform();
      this.emitEvent('scale');
    }

    //  放大
  }, {
    key: "enlarge",
    value: function enlarge(cx, cy, isTouchPad) {
      var _this$mindMap$opt4 = this.mindMap.opt,
        scaleRatio = _this$mindMap$opt4.scaleRatio,
        maxZoomRatio = _this$mindMap$opt4.maxZoomRatio;
      scaleRatio = scaleRatio / (isTouchPad ? 5 : 1);
      var scale = 0;
      if (maxZoomRatio === -1) {
        scale = this.scale + scaleRatio;
      } else {
        scale = Math.min(this.scale + scaleRatio, maxZoomRatio / 100);
      }
      this.scaleInCenter(scale, cx, cy);
      this.transform();
      this.emitEvent('scale');
    }

    // 基于指定中心进行缩放，cx，cy 可不指定，此时会使用画布中心点
  }, {
    key: "scaleInCenter",
    value: function scaleInCenter(scale, cx, cy) {
      if (cx === undefined || cy === undefined) {
        cx = this.mindMap.width / 2;
        cy = this.mindMap.height / 2;
      }
      var prevScale = this.scale;
      var ratio = 1 - scale / prevScale;
      var dx = (cx - this.x) * ratio;
      var dy = (cy - this.y) * ratio;
      this.x += dx;
      this.y += dy;
      this.scale = scale;
    }

    //  设置缩放
  }, {
    key: "setScale",
    value: function setScale(scale, cx, cy) {
      if (cx !== undefined && cy !== undefined) {
        this.scaleInCenter(scale, cx, cy);
      } else {
        this.scale = scale;
      }
      this.transform();
      this.emitEvent('scale');
    }

    // 适应画布大小
  }, {
    key: "fit",
    value: function fit() {
      var getRbox = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      var enlarge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var fitPadding = arguments.length > 2 ? arguments[2] : undefined;
      fitPadding = fitPadding === undefined ? this.mindMap.opt.fitPadding : fitPadding;
      var draw = this.mindMap.draw;
      var origTransform = draw.transform();
      var rect = getRbox() || draw.rbox();
      var drawWidth = rect.width / origTransform.scaleX;
      var drawHeight = rect.height / origTransform.scaleY;
      var drawRatio = drawWidth / drawHeight;
      var _this$mindMap$elRect = this.mindMap.elRect,
        elWidth = _this$mindMap$elRect.width,
        elHeight = _this$mindMap$elRect.height;
      elWidth = elWidth - fitPadding * 2;
      elHeight = elHeight - fitPadding * 2;
      var elRatio = elWidth / elHeight;
      var newScale = 0;
      var flag = '';
      if (drawWidth <= elWidth && drawHeight <= elHeight && !enlarge) {
        newScale = 1;
        flag = 1;
      } else {
        var newWidth = 0;
        if (drawRatio > elRatio) {
          newWidth = elWidth;
          flag = 2;
        } else {
          newWidth = elHeight * drawRatio;
          flag = 3;
        }
        newScale = newWidth / drawWidth;
      }
      this.setScale(newScale);
      var newRect = getRbox() || draw.rbox();
      // 需要考虑画布容器距浏览器窗口左上角的距离
      newRect.x -= this.mindMap.elRect.left;
      newRect.y -= this.mindMap.elRect.top;
      var newX = 0;
      var newY = 0;
      if (flag === 1) {
        newX = -newRect.x + fitPadding + (elWidth - newRect.width) / 2;
        newY = -newRect.y + fitPadding + (elHeight - newRect.height) / 2;
      } else if (flag === 2) {
        newX = -newRect.x + fitPadding;
        newY = -newRect.y + fitPadding + (elHeight - newRect.height) / 2;
      } else if (flag === 3) {
        newX = -newRect.x + fitPadding + (elWidth - newRect.width) / 2;
        newY = -newRect.y + fitPadding;
      }
      this.translateXY(newX, newY);
    }

    // 判断是否需要将思维导图限制在画布内
  }, {
    key: "checkNeedMindMapInCanvas",
    value: function checkNeedMindMapInCanvas() {
      // 如果当前在演示模式，那么不需要限制
      if (this.mindMap.demonstrate && this.mindMap.demonstrate.isInDemonstrate) {
        return false;
      }
      var _this$mindMap$opt5 = this.mindMap.opt,
        isLimitMindMapInCanvasWhenHasScrollbar = _this$mindMap$opt5.isLimitMindMapInCanvasWhenHasScrollbar,
        isLimitMindMapInCanvas = _this$mindMap$opt5.isLimitMindMapInCanvas;
      // 如果注册了滚动条插件，那么使用isLimitMindMapInCanvasWhenHasScrollbar配置
      if (this.mindMap.scrollbar) {
        return isLimitMindMapInCanvasWhenHasScrollbar;
      } else {
        // 否则使用isLimitMindMapInCanvas配置
        return isLimitMindMapInCanvas;
      }
    }

    // 将思维导图限制在画布内
  }, {
    key: "limitMindMapInCanvas",
    value: function limitMindMapInCanvas() {
      if (!this.checkNeedMindMapInCanvas()) return;
      var _this$getPositionLimi = this.getPositionLimit(),
        scale = _this$getPositionLimi.scale,
        left = _this$getPositionLimi.left,
        top = _this$getPositionLimi.top,
        right = _this$getPositionLimi.right,
        bottom = _this$getPositionLimi.bottom;

      // 画布宽高改变了，但是思维导图元素变换的中心点依旧是原有位置，所以需要加上中心点变化量
      var centerXChange = (this.mindMap.width - this.mindMap.initWidth) / 2 * scale;
      var centerYChange = (this.mindMap.height - this.mindMap.initHeight) / 2 * scale;

      // 如果缩放值改变了
      var scaleRatio = this.scale / scale;
      left *= scaleRatio;
      right *= scaleRatio;
      top *= scaleRatio;
      bottom *= scaleRatio;

      // 加上画布中心点距离
      var centerX = this.mindMap.width / 2;
      var centerY = this.mindMap.height / 2;
      var scaleOffset = this.scale - 1;
      left -= scaleOffset * centerX - centerXChange;
      right -= scaleOffset * centerX - centerXChange;
      top -= scaleOffset * centerY - centerYChange;
      bottom -= scaleOffset * centerY - centerYChange;

      // 判断是否超出边界
      if (this.x > left) {
        this.x = left;
      }
      if (this.x < right) {
        this.x = right;
      }
      if (this.y > top) {
        this.y = top;
      }
      if (this.y < bottom) {
        this.y = bottom;
      }
    }

    // 计算图形四个方向的位置边界值
  }, {
    key: "getPositionLimit",
    value: function getPositionLimit() {
      var _this$mindMap$draw$tr = this.mindMap.draw.transform(),
        scaleX = _this$mindMap$draw$tr.scaleX,
        scaleY = _this$mindMap$draw$tr.scaleY;
      var drawRect = this.mindMap.draw.rbox();
      var rootRect = this.mindMap.renderer.root.group.rbox();
      var rootCenterOffset = this.mindMap.renderer.layout.getRootCenterOffset(rootRect.width, rootRect.height);
      var left = rootRect.x - drawRect.x - rootCenterOffset.x * scaleX;
      var right = rootRect.x - drawRect.x2 - rootCenterOffset.x * scaleX;
      var top = rootRect.y - drawRect.y - rootCenterOffset.y * scaleY;
      var bottom = rootRect.y - drawRect.y2 - rootCenterOffset.y * scaleY;
      return {
        scale: scaleX,
        left: left,
        right: right,
        top: top,
        bottom: bottom
      };
    }

    // 派发事件
  }, {
    key: "emitEvent",
    value: function emitEvent(type) {
      switch (type) {
        case 'scale':
          this.mindMap.emit('scale', this.scale);
        case 'translate':
          this.mindMap.emit('translate', this.x, this.y);
      }
    }
  }]);
}();

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var eventemitter3 = {exports: {}};

var hasRequiredEventemitter3;
function requireEventemitter3() {
  if (hasRequiredEventemitter3) return eventemitter3.exports;
  hasRequiredEventemitter3 = 1;
  (function (module) {

    var has = Object.prototype.hasOwnProperty,
      prefix = '~';

    /**
     * Constructor to create a storage for our `EE` objects.
     * An `Events` instance is a plain object whose properties are event names.
     *
     * @constructor
     * @private
     */
    function Events() {}

    //
    // We try to not inherit from `Object.prototype`. In some engines creating an
    // instance in this way is faster than calling `Object.create(null)` directly.
    // If `Object.create(null)` is not supported we prefix the event names with a
    // character to make sure that the built-in object properties are not
    // overridden or used as an attack vector.
    //
    if (Object.create) {
      Events.prototype = Object.create(null);

      //
      // This hack is needed because the `__proto__` property is still inherited in
      // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
      //
      if (!new Events().__proto__) prefix = false;
    }

    /**
     * Representation of a single event listener.
     *
     * @param {Function} fn The listener function.
     * @param {*} context The context to invoke the listener with.
     * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
     * @constructor
     * @private
     */
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }

    /**
     * Add a listener for a given event.
     *
     * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} context The context to invoke the listener with.
     * @param {Boolean} once Specify if the listener is a one-time listener.
     * @returns {EventEmitter}
     * @private
     */
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function');
      }
      var listener = new EE(fn, context || emitter, once),
        evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }

    /**
     * Clear event by name.
     *
     * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
     * @param {(String|Symbol)} evt The Event name.
     * @private
     */
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();else delete emitter._events[evt];
    }

    /**
     * Minimal `EventEmitter` interface that is molded against the Node.js
     * `EventEmitter` interface.
     *
     * @constructor
     * @public
     */
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }

    /**
     * Return an array listing the events for which the emitter has registered
     * listeners.
     *
     * @returns {Array}
     * @public
     */
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [],
        events,
        name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };

    /**
     * Return the listeners registered for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Array} The registered listeners.
     * @public
     */
    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event,
        handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };

    /**
     * Return the number of listeners listening to a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Number} The number of listeners.
     * @public
     */
    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event,
        listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };

    /**
     * Calls each of the listeners registered for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @returns {Boolean} `true` if the event had listeners, else `false`.
     * @public
     */
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt],
        len = arguments.length,
        args,
        i;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length,
          j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };

    /**
     * Add a listener for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };

    /**
     * Add a one-time listener for a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn The listener function.
     * @param {*} [context=this] The context to invoke the listener with.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };

    /**
     * Remove the listeners of a given event.
     *
     * @param {(String|Symbol)} event The event name.
     * @param {Function} fn Only remove the listeners that match this function.
     * @param {*} context Only remove the listeners that have this context.
     * @param {Boolean} once Only remove one-time listeners.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }

        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else clearEvent(this, evt);
      }
      return this;
    };

    /**
     * Remove all listeners, or those of the specified event.
     *
     * @param {(String|Symbol)} [event] The event name.
     * @returns {EventEmitter} `this`.
     * @public
     */
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };

    //
    // Alias methods names because people roll like that.
    //
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;

    //
    // Expose the prefix.
    //
    EventEmitter.prefixed = prefix;

    //
    // Allow `EventEmitter` to be imported as module namespace.
    //
    EventEmitter.EventEmitter = EventEmitter;

    //
    // Expose the module.
    //
    {
      module.exports = EventEmitter;
    }
  })(eventemitter3);
  return eventemitter3.exports;
}

var eventemitter3Exports = requireEventemitter3();
var EventEmitter = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

//  事件类
var Event = /*#__PURE__*/function (_EventEmitter) {
  //  构造函数
  function Event() {
    var _this;
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Event);
    _this = _callSuper(this, Event);
    _this.opt = opt;
    _this.mindMap = opt.mindMap;
    _this.isLeftMousedown = false;
    _this.isRightMousedown = false;
    _this.isMiddleMousedown = false;
    _this.mousedownPos = {
      x: 0,
      y: 0
    };
    _this.mousemovePos = {
      x: 0,
      y: 0
    };
    _this.mousemoveOffset = {
      x: 0,
      y: 0
    };
    _this.bindFn();
    _this.bind();
    return _this;
  }

  //  绑定函数上下文
  _inherits(Event, _EventEmitter);
  return _createClass(Event, [{
    key: "bindFn",
    value: function bindFn() {
      this.onBodyMousedown = this.onBodyMousedown.bind(this);
      this.onBodyClick = this.onBodyClick.bind(this);
      this.onDrawClick = this.onDrawClick.bind(this);
      this.onMousedown = this.onMousedown.bind(this);
      this.onMousemove = this.onMousemove.bind(this);
      this.onMouseup = this.onMouseup.bind(this);
      this.onNodeMouseup = this.onNodeMouseup.bind(this);
      this.onMousewheel = this.onMousewheel.bind(this);
      this.onContextmenu = this.onContextmenu.bind(this);
      this.onSvgMousedown = this.onSvgMousedown.bind(this);
      this.onKeyup = this.onKeyup.bind(this);
      this.onMouseenter = this.onMouseenter.bind(this);
      this.onMouseleave = this.onMouseleave.bind(this);
    }

    //  绑定事件
  }, {
    key: "bind",
    value: function bind() {
      document.body.addEventListener('mousedown', this.onBodyMousedown);
      document.body.addEventListener('click', this.onBodyClick);
      this.mindMap.svg.on('click', this.onDrawClick);
      this.mindMap.el.addEventListener('mousedown', this.onMousedown);
      this.mindMap.svg.on('mousedown', this.onSvgMousedown);
      window.addEventListener('mousemove', this.onMousemove);
      window.addEventListener('mouseup', this.onMouseup);
      this.on('node_mouseup', this.onNodeMouseup);
      this.mindMap.el.addEventListener('wheel', this.onMousewheel);
      this.mindMap.svg.on('contextmenu', this.onContextmenu);
      this.mindMap.svg.on('mouseenter', this.onMouseenter);
      this.mindMap.svg.on('mouseleave', this.onMouseleave);
      window.addEventListener('keyup', this.onKeyup);
    }

    //  解绑事件
  }, {
    key: "unbind",
    value: function unbind() {
      document.body.removeEventListener('mousedown', this.onBodyMousedown);
      document.body.removeEventListener('click', this.onBodyClick);
      this.mindMap.svg.off('click', this.onDrawClick);
      this.mindMap.el.removeEventListener('mousedown', this.onMousedown);
      window.removeEventListener('mousemove', this.onMousemove);
      window.removeEventListener('mouseup', this.onMouseup);
      this.off('node_mouseup', this.onNodeMouseup);
      this.mindMap.el.removeEventListener('wheel', this.onMousewheel);
      this.mindMap.svg.off('contextmenu', this.onContextmenu);
      this.mindMap.svg.off('mouseenter', this.onMouseenter);
      this.mindMap.svg.off('mouseleave', this.onMouseleave);
      window.removeEventListener('keyup', this.onKeyup);
    }

    //   画布的单击事件
  }, {
    key: "onDrawClick",
    value: function onDrawClick(e) {
      this.emit('draw_click', e);
    }

    // 页面的鼠标按下事件
  }, {
    key: "onBodyMousedown",
    value: function onBodyMousedown(e) {
      this.emit('body_mousedown', e);
    }

    // 页面的单击事件
  }, {
    key: "onBodyClick",
    value: function onBodyClick(e) {
      this.emit('body_click', e);
    }

    //   svg画布的鼠标按下事件
  }, {
    key: "onSvgMousedown",
    value: function onSvgMousedown(e) {
      this.emit('svg_mousedown', e);
    }

    //  鼠标按下事件
  }, {
    key: "onMousedown",
    value: function onMousedown(e) {
      // 鼠标左键
      if (e.which === 1) {
        this.isLeftMousedown = true;
      } else if (e.which === 3) {
        this.isRightMousedown = true;
      } else if (e.which === 2) {
        this.isMiddleMousedown = true;
      }
      this.mousedownPos.x = e.clientX;
      this.mousedownPos.y = e.clientY;
      this.emit('mousedown', e, this);
    }

    //  鼠标移动事件
  }, {
    key: "onMousemove",
    value: function onMousemove(e) {
      var useLeftKeySelectionRightKeyDrag = this.mindMap.opt.useLeftKeySelectionRightKeyDrag;
      this.mousemovePos.x = e.clientX;
      this.mousemovePos.y = e.clientY;
      this.mousemoveOffset.x = e.clientX - this.mousedownPos.x;
      this.mousemoveOffset.y = e.clientY - this.mousedownPos.y;
      this.emit('mousemove', e, this);
      if (this.isMiddleMousedown || (useLeftKeySelectionRightKeyDrag ? this.isRightMousedown : this.isLeftMousedown)) {
        e.preventDefault();
        this.emit('drag', e, this);
      }
    }

    //  鼠标松开事件
  }, {
    key: "onMouseup",
    value: function onMouseup(e) {
      this.onNodeMouseup();
      this.emit('mouseup', e, this);
    }

    // 节点鼠标松开事件
  }, {
    key: "onNodeMouseup",
    value: function onNodeMouseup() {
      this.isLeftMousedown = false;
      this.isRightMousedown = false;
      this.isMiddleMousedown = false;
    }

    //  鼠标滚动/触控板滑动
  }, {
    key: "onMousewheel",
    value: function onMousewheel(e) {
      e.stopPropagation();
      e.preventDefault();
      var dirs = [];
      if (e.deltaY < 0) dirs.push(CONSTANTS.DIR.UP);
      if (e.deltaY > 0) dirs.push(CONSTANTS.DIR.DOWN);
      if (e.deltaX < 0) dirs.push(CONSTANTS.DIR.LEFT);
      if (e.deltaX > 0) dirs.push(CONSTANTS.DIR.RIGHT);
      // 判断是否是触控板
      var isTouchPad = false;
      // mac、windows
      // if (e.wheelDeltaY === e.deltaY * -3 || Math.abs(e.wheelDeltaY) <= 10) {
      //   isTouchPad = true
      // }
      var customCheckIsTouchPad = this.mindMap.opt.customCheckIsTouchPad;
      if (typeof customCheckIsTouchPad === 'function') {
        isTouchPad = customCheckIsTouchPad(e);
      } else {
        isTouchPad = Math.abs(e.deltaY) <= 10;
      }
      this.emit('mousewheel', e, dirs, this, isTouchPad);
    }

    //  鼠标右键菜单事件
  }, {
    key: "onContextmenu",
    value: function onContextmenu(e) {
      e.preventDefault();
      // Mac上按住ctrl键点击鼠标左键不知为何触发的是contextmenu事件
      if (e.ctrlKey) return;
      this.emit('contextmenu', e);
    }

    //  按键松开事件
  }, {
    key: "onKeyup",
    value: function onKeyup(e) {
      this.emit('keyup', e);
    }

    // 进入
  }, {
    key: "onMouseenter",
    value: function onMouseenter(e) {
      this.emit('svg_mouseenter', e);
    }

    // 离开
  }, {
    key: "onMouseleave",
    value: function onMouseleave(e) {
      this.emit('svg_mouseleave', e);
    }
  }]);
}(EventEmitter);

var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && _typeof(value) === 'object';
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneIfNecessary(value, optionsArgument) {
  var clone = optionsArgument && optionsArgument.clone === true;
  return clone && isMergeableObject(value) ? deepmerge(emptyTarget(value), value, optionsArgument) : value;
}
function defaultArrayMerge(target, source, optionsArgument) {
  var destination = target.slice();
  source.forEach(function (e, i) {
    if (typeof destination[i] === 'undefined') {
      destination[i] = cloneIfNecessary(e, optionsArgument);
    } else if (isMergeableObject(e)) {
      destination[i] = deepmerge(target[i], e, optionsArgument);
    } else if (target.indexOf(e) === -1) {
      destination.push(cloneIfNecessary(e, optionsArgument));
    }
  });
  return destination;
}
function mergeObject(target, source, optionsArgument) {
  var destination = {};
  if (isMergeableObject(target)) {
    Object.keys(target).forEach(function (key) {
      destination[key] = cloneIfNecessary(target[key], optionsArgument);
    });
  }
  Object.keys(source).forEach(function (key) {
    if (!isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneIfNecessary(source[key], optionsArgument);
    } else {
      destination[key] = deepmerge(target[key], source[key], optionsArgument);
    }
  });
  return destination;
}
function deepmerge(target, source, optionsArgument) {
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var options = optionsArgument || {
    arrayMerge: defaultArrayMerge
  };
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneIfNecessary(source, optionsArgument);
  } else if (sourceIsArray) {
    var arrayMerge = options.arrayMerge || defaultArrayMerge;
    return arrayMerge(target, source, optionsArgument);
  } else {
    return mergeObject(target, source, optionsArgument);
  }
}
deepmerge.all = function deepmergeAll(array, optionsArgument) {
  if (!Array.isArray(array) || array.length < 2) {
    throw new Error('first argument should be an array with at least two elements');
  }

  // we are sure there are at least 2 values, so it is safe to have no initial value
  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, optionsArgument);
  });
};
var deepmerge_1 = deepmerge;

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];
for (var i$2 = 0; i$2 < 256; ++i$2) {
  byteToHex.push((i$2 + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID: randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
  return unsafeStringify(rnds);
}

/**
 * @description 为了保证相同的内容每次生成的随机数都是一样的，我们可以使用一个伪随机数生成器（PRNG），并使用内容的哈希值作为种子。以下是一个使用Mersenne Twister算法的PRNG的实现：
 *
 * @param {*} seed
 */

function MersenneTwister(seed) {
  this.N = 624;
  this.M = 397;
  this.MATRIX_A = 0x9908b0df;
  this.UPPER_MASK = 0x80000000;
  this.LOWER_MASK = 0x7fffffff;
  this.mt = new Array(this.N);
  this.mti = this.N + 1;
  this.init_genrand(seed);
}
MersenneTwister.prototype.init_genrand = function (s) {
  this.mt[0] = s >>> 0;
  for (this.mti = 1; this.mti < this.N; this.mti++) {
    s = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
    this.mt[this.mti] = (((s & 0xffff0000) >>> 16) * 1812433253 << 16) + (s & 0x0000ffff) * 1812433253 + this.mti;
    this.mt[this.mti] >>>= 0;
  }
};
MersenneTwister.prototype.genrand_int32 = function () {
  var y;
  var mag01 = new Array(0x0, this.MATRIX_A);
  if (this.mti >= this.N) {
    var kk;
    if (this.mti == this.N + 1) this.init_genrand(5489);
    for (kk = 0; kk < this.N - this.M; kk++) {
      y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
      this.mt[kk] = this.mt[kk + this.M] ^ y >>> 1 ^ mag01[y & 0x1];
    }
    for (; kk < this.N - 1; kk++) {
      y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
      this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ y >>> 1 ^ mag01[y & 0x1];
    }
    y = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK;
    this.mt[this.N - 1] = this.mt[this.M - 1] ^ y >>> 1 ^ mag01[y & 0x1];
    this.mti = 0;
  }
  y = this.mt[this.mti++];
  y ^= y >>> 11;
  y ^= y << 7 & 0x9d2c5680;
  y ^= y << 15 & 0xefc60000;
  y ^= y >>> 18;
  return y >>> 0;
};

var methods$1 = {};
var names = [];
function registerMethods(name, m) {
  if (Array.isArray(name)) {
    var _iterator = _createForOfIteratorHelper(name),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _name = _step.value;
        registerMethods(_name, m);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return;
  }
  if (_typeof(name) === 'object') {
    for (var _name2 in name) {
      registerMethods(_name2, name[_name2]);
    }
    return;
  }
  addMethodNames(Object.getOwnPropertyNames(m));
  methods$1[name] = Object.assign(methods$1[name] || {}, m);
}
function getMethodsFor(name) {
  return methods$1[name] || {};
}
function getMethodNames() {
  return _toConsumableArray(new Set(names));
}
function addMethodNames(_names) {
  names.push.apply(names, _toConsumableArray(_names));
}

// Map function
function map$1(array, block) {
  var i;
  var il = array.length;
  var result = [];
  for (i = 0; i < il; i++) {
    result.push(block(array[i]));
  }
  return result;
}

// Filter function
function filter(array, block) {
  var i;
  var il = array.length;
  var result = [];
  for (i = 0; i < il; i++) {
    if (block(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

// Degrees to radians
function radians(d) {
  return d % 360 * Math.PI / 180;
}

// Convert dash-separated-string to camelCase
function camelCase(s) {
  return s.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  });
}

// Convert camel cased string to dash separated
function unCamelCase(s) {
  return s.replace(/([A-Z])/g, function (m, g) {
    return '-' + g.toLowerCase();
  });
}

// Capitalize first letter of a string
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Calculate proportional width and height values when necessary
function proportionalSize(element, width, height, box) {
  if (width == null || height == null) {
    box = box || element.bbox();
    if (width == null) {
      width = box.width / box.height * height;
    } else if (height == null) {
      height = box.height / box.width * width;
    }
  }
  return {
    width: width,
    height: height
  };
}

/**
 * This function adds support for string origins.
 * It searches for an origin in o.origin o.ox and o.originX.
 * This way, origin: {x: 'center', y: 50} can be passed as well as ox: 'center', oy: 50
**/
function getOrigin(o, element) {
  var origin = o.origin;
  // First check if origin is in ox or originX
  var ox = o.ox != null ? o.ox : o.originX != null ? o.originX : 'center';
  var oy = o.oy != null ? o.oy : o.originY != null ? o.originY : 'center';

  // Then check if origin was used and overwrite in that case
  if (origin != null) {
    var _ref = Array.isArray(origin) ? origin : _typeof(origin) === 'object' ? [origin.x, origin.y] : [origin, origin];
    var _ref2 = _slicedToArray(_ref, 2);
    ox = _ref2[0];
    oy = _ref2[1];
  }

  // Make sure to only call bbox when actually needed
  var condX = typeof ox === 'string';
  var condY = typeof oy === 'string';
  if (condX || condY) {
    var _element$bbox = element.bbox(),
      height = _element$bbox.height,
      width = _element$bbox.width,
      x = _element$bbox.x,
      y = _element$bbox.y;

    // And only overwrite if string was passed for this specific axis
    if (condX) {
      ox = ox.includes('left') ? x : ox.includes('right') ? x + width : x + width / 2;
    }
    if (condY) {
      oy = oy.includes('top') ? y : oy.includes('bottom') ? y + height : y + height / 2;
    }
  }

  // Return the origin as it is if it wasn't a string
  return [ox, oy];
}

// Default namespaces
var svg = 'http://www.w3.org/2000/svg';
var html = 'http://www.w3.org/1999/xhtml';
var xmlns = 'http://www.w3.org/2000/xmlns/';
var xlink = 'http://www.w3.org/1999/xlink';
var svgjs = 'http://svgjs.dev/svgjs';

var globals = {
  window: typeof window === 'undefined' ? null : window,
  document: typeof document === 'undefined' ? null : document
};

var Base$1 = /*#__PURE__*/_createClass(function Base() {
  _classCallCheck(this, Base);
});

var elements = {};
var root = '___SYMBOL___ROOT___';

// Method for element creation
function create(name) {
  var ns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : svg;
  // create element
  return globals.document.createElementNS(ns, name);
}
function makeInstance(element) {
  var isHTML = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (element instanceof Base$1) return element;
  if (_typeof(element) === 'object') {
    return adopter(element);
  }
  if (element == null) {
    return new elements[root]();
  }
  if (typeof element === 'string' && element.charAt(0) !== '<') {
    return adopter(globals.document.querySelector(element));
  }

  // Make sure, that HTML elements are created with the correct namespace
  var wrapper = isHTML ? globals.document.createElement('div') : create('svg');
  wrapper.innerHTML = element;

  // We can use firstChild here because we know,
  // that the first char is < and thus an element
  element = adopter(wrapper.firstChild);

  // make sure, that element doesn't have its wrapper attached
  wrapper.removeChild(wrapper.firstChild);
  return element;
}
function nodeOrNew(name, node) {
  return node && node.ownerDocument && node instanceof node.ownerDocument.defaultView.Node ? node : create(name);
}

// Adopt existing svg elements
function adopt(node) {
  // check for presence of node
  if (!node) return null;

  // make sure a node isn't already adopted
  if (node.instance instanceof Base$1) return node.instance;
  if (node.nodeName === '#document-fragment') {
    return new elements.Fragment(node);
  }

  // initialize variables
  var className = capitalize(node.nodeName || 'Dom');

  // Make sure that gradients are adopted correctly
  if (className === 'LinearGradient' || className === 'RadialGradient') {
    className = 'Gradient';

    // Fallback to Dom if element is not known
  } else if (!elements[className]) {
    className = 'Dom';
  }
  return new elements[className](node);
}
var adopter = adopt;
function register(element) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : element.name;
  var asRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  elements[name] = element;
  if (asRoot) elements[root] = element;
  addMethodNames(Object.getOwnPropertyNames(element.prototype));
  return element;
}
function getClass(name) {
  return elements[name];
}

// Element id sequence
var did = 1000;

// Get next named element id
function eid(name) {
  return 'Svgjs' + capitalize(name) + did++;
}

// Deep new id assignment
function assignNewId(node) {
  // do the same for SVG child nodes as well
  for (var i = node.children.length - 1; i >= 0; i--) {
    assignNewId(node.children[i]);
  }
  if (node.id) {
    node.id = eid(node.nodeName);
    return node;
  }
  return node;
}

// Method for extending objects
function extend(modules, methods) {
  var key, i;
  modules = Array.isArray(modules) ? modules : [modules];
  for (i = modules.length - 1; i >= 0; i--) {
    for (key in methods) {
      modules[i].prototype[key] = methods[key];
    }
  }
}
function wrapWithAttrCheck(fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var o = args[args.length - 1];
    if (o && o.constructor === Object && !(o instanceof Array)) {
      return fn.apply(this, args.slice(0, -1)).attr(o);
    } else {
      return fn.apply(this, args);
    }
  };
}

// Get all siblings, including myself
function siblings() {
  return this.parent().children();
}

// Get the current position siblings
function position() {
  return this.parent().index(this);
}

// Get the next element (will return null if there is none)
function next() {
  return this.siblings()[this.position() + 1];
}

// Get the next element (will return null if there is none)
function prev() {
  return this.siblings()[this.position() - 1];
}

// Send given element one step forward
function forward() {
  var i = this.position();
  var p = this.parent();

  // move node one step forward
  p.add(this.remove(), i + 1);
  return this;
}

// Send given element one step backward
function backward() {
  var i = this.position();
  var p = this.parent();
  p.add(this.remove(), i ? i - 1 : 0);
  return this;
}

// Send given element all the way to the front
function front() {
  var p = this.parent();

  // Move node forward
  p.add(this.remove());
  return this;
}

// Send given element all the way to the back
function back() {
  var p = this.parent();

  // Move node back
  p.add(this.remove(), 0);
  return this;
}

// Inserts a given element before the targeted element
function before(element) {
  element = makeInstance(element);
  element.remove();
  var i = this.position();
  this.parent().add(element, i);
  return this;
}

// Inserts a given element after the targeted element
function after(element) {
  element = makeInstance(element);
  element.remove();
  var i = this.position();
  this.parent().add(element, i + 1);
  return this;
}
function insertBefore(element) {
  element = makeInstance(element);
  element.before(this);
  return this;
}
function insertAfter(element) {
  element = makeInstance(element);
  element.after(this);
  return this;
}
registerMethods('Dom', {
  siblings: siblings,
  position: position,
  next: next,
  prev: prev,
  forward: forward,
  backward: backward,
  front: front,
  back: back,
  before: before,
  after: after,
  insertBefore: insertBefore,
  insertAfter: insertAfter
});

// Parse unit value
var numberAndUnit = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i;

// Parse hex value
var hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

// Parse rgb value
var rgb = /rgb\((\d+),(\d+),(\d+)\)/;

// Parse reference id
var reference = /(#[a-z_][a-z0-9\-_]*)/i;

// splits a transformation chain
var transforms = /\)\s*,?\s*/;

// Whitespace
var whitespace = /\s/g;

// Test hex value
var isHex = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i;

// Test rgb value
var isRgb = /^rgb\(/;

// Test for blank string
var isBlank = /^(\s+)?$/;

// Test for numeric string
var isNumber = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

// Test for image url
var isImage = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i;

// split at whitespace and comma
var delimiter = /[\s,]+/;

// Test for path letter
var isPathLetter = /[MLHVCSQTAZ]/i;

// Return array of classes on the node
function classes() {
  var attr = this.attr('class');
  return attr == null ? [] : attr.trim().split(delimiter);
}

// Return true if class exists on the node, false otherwise
function hasClass(name) {
  return this.classes().indexOf(name) !== -1;
}

// Add class to the node
function addClass(name) {
  if (!this.hasClass(name)) {
    var array = this.classes();
    array.push(name);
    this.attr('class', array.join(' '));
  }
  return this;
}

// Remove class from the node
function removeClass(name) {
  if (this.hasClass(name)) {
    this.attr('class', this.classes().filter(function (c) {
      return c !== name;
    }).join(' '));
  }
  return this;
}

// Toggle the presence of a class on the node
function toggleClass(name) {
  return this.hasClass(name) ? this.removeClass(name) : this.addClass(name);
}
registerMethods('Dom', {
  classes: classes,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass
});

// Dynamic style generator
function css(style, val) {
  var ret = {};
  if (arguments.length === 0) {
    // get full style as object
    this.node.style.cssText.split(/\s*;\s*/).filter(function (el) {
      return !!el.length;
    }).forEach(function (el) {
      var t = el.split(/\s*:\s*/);
      ret[t[0]] = t[1];
    });
    return ret;
  }
  if (arguments.length < 2) {
    // get style properties as array
    if (Array.isArray(style)) {
      var _iterator = _createForOfIteratorHelper(style),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var name = _step.value;
          var cased = camelCase(name);
          ret[name] = this.node.style[cased];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return ret;
    }

    // get style for property
    if (typeof style === 'string') {
      return this.node.style[camelCase(style)];
    }

    // set styles in object
    if (_typeof(style) === 'object') {
      for (var _name in style) {
        // set empty string if null/undefined/'' was given
        this.node.style[camelCase(_name)] = style[_name] == null || isBlank.test(style[_name]) ? '' : style[_name];
      }
    }
  }

  // set style for property
  if (arguments.length === 2) {
    this.node.style[camelCase(style)] = val == null || isBlank.test(val) ? '' : val;
  }
  return this;
}

// Show element
function show() {
  return this.css('display', '');
}

// Hide element
function hide() {
  return this.css('display', 'none');
}

// Is element visible?
function visible() {
  return this.css('display') !== 'none';
}
registerMethods('Dom', {
  css: css,
  show: show,
  hide: hide,
  visible: visible
});

// Store data values on svg nodes
function data(a, v, r) {
  if (a == null) {
    // get an object of attributes
    return this.data(map$1(filter(this.node.attributes, function (el) {
      return el.nodeName.indexOf('data-') === 0;
    }), function (el) {
      return el.nodeName.slice(5);
    }));
  } else if (a instanceof Array) {
    var _data = {};
    var _iterator = _createForOfIteratorHelper(a),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        _data[key] = this.data(key);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return _data;
  } else if (_typeof(a) === 'object') {
    for (v in a) {
      this.data(v, a[v]);
    }
  } else if (arguments.length < 2) {
    try {
      return JSON.parse(this.attr('data-' + a));
    } catch (e) {
      return this.attr('data-' + a);
    }
  } else {
    this.attr('data-' + a, v === null ? null : r === true || typeof v === 'string' || typeof v === 'number' ? v : JSON.stringify(v));
  }
  return this;
}
registerMethods('Dom', {
  data: data
});

// Remember arbitrary data
function remember(k, v) {
  // remember every item in an object individually
  if (_typeof(arguments[0]) === 'object') {
    for (var key in k) {
      this.remember(key, k[key]);
    }
  } else if (arguments.length === 1) {
    // retrieve memory
    return this.memory()[k];
  } else {
    // store memory
    this.memory()[k] = v;
  }
  return this;
}

// Erase a given memory
function forget() {
  if (arguments.length === 0) {
    this._memory = {};
  } else {
    for (var i = arguments.length - 1; i >= 0; i--) {
      delete this.memory()[arguments[i]];
    }
  }
  return this;
}

// This triggers creation of a new hidden class which is not performant
// However, this function is not rarely used so it will not happen frequently
// Return local memory object
function memory() {
  return this._memory = this._memory || {};
}
registerMethods('Dom', {
  remember: remember,
  forget: forget,
  memory: memory
});

function sixDigitHex(hex) {
  return hex.length === 4 ? ['#', hex.substring(1, 2), hex.substring(1, 2), hex.substring(2, 3), hex.substring(2, 3), hex.substring(3, 4), hex.substring(3, 4)].join('') : hex;
}
function componentHex(component) {
  var integer = Math.round(component);
  var bounded = Math.max(0, Math.min(255, integer));
  var hex = bounded.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}
function is(object, space) {
  for (var i = space.length; i--;) {
    if (object[space[i]] == null) {
      return false;
    }
  }
  return true;
}
function getParameters(a, b) {
  var params = is(a, 'rgb') ? {
    _a: a.r,
    _b: a.g,
    _c: a.b,
    _d: 0,
    space: 'rgb'
  } : is(a, 'xyz') ? {
    _a: a.x,
    _b: a.y,
    _c: a.z,
    _d: 0,
    space: 'xyz'
  } : is(a, 'hsl') ? {
    _a: a.h,
    _b: a.s,
    _c: a.l,
    _d: 0,
    space: 'hsl'
  } : is(a, 'lab') ? {
    _a: a.l,
    _b: a.a,
    _c: a.b,
    _d: 0,
    space: 'lab'
  } : is(a, 'lch') ? {
    _a: a.l,
    _b: a.c,
    _c: a.h,
    _d: 0,
    space: 'lch'
  } : is(a, 'cmyk') ? {
    _a: a.c,
    _b: a.m,
    _c: a.y,
    _d: a.k,
    space: 'cmyk'
  } : {
    _a: 0,
    _b: 0,
    _c: 0,
    space: 'rgb'
  };
  params.space = b || params.space;
  return params;
}
function cieSpace(space) {
  if (space === 'lab' || space === 'xyz' || space === 'lch') {
    return true;
  } else {
    return false;
  }
}
function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
var Color = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
    this.init.apply(this, arguments);
  }

  // Test if given value is a color
  return _createClass(Color, [{
    key: "cmyk",
    value: function cmyk() {
      // Get the rgb values for the current color
      var _this$rgb = this.rgb(),
        _a = _this$rgb._a,
        _b = _this$rgb._b,
        _c = _this$rgb._c;
      var _map = [_a, _b, _c].map(function (v) {
          return v / 255;
        }),
        _map2 = _slicedToArray(_map, 3),
        r = _map2[0],
        g = _map2[1],
        b = _map2[2];

      // Get the cmyk values in an unbounded format
      var k = Math.min(1 - r, 1 - g, 1 - b);
      if (k === 1) {
        // Catch the black case
        return new Color(0, 0, 0, 1, 'cmyk');
      }
      var c = (1 - r - k) / (1 - k);
      var m = (1 - g - k) / (1 - k);
      var y = (1 - b - k) / (1 - k);

      // Construct the new color
      var color = new Color(c, m, y, k, 'cmyk');
      return color;
    }
  }, {
    key: "hsl",
    value: function hsl() {
      // Get the rgb values
      var _this$rgb2 = this.rgb(),
        _a = _this$rgb2._a,
        _b = _this$rgb2._b,
        _c = _this$rgb2._c;
      var _map3 = [_a, _b, _c].map(function (v) {
          return v / 255;
        }),
        _map4 = _slicedToArray(_map3, 3),
        r = _map4[0],
        g = _map4[1],
        b = _map4[2];

      // Find the maximum and minimum values to get the lightness
      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var l = (max + min) / 2;

      // If the r, g, v values are identical then we are grey
      var isGrey = max === min;

      // Calculate the hue and saturation
      var delta = max - min;
      var s = isGrey ? 0 : l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
      var h = isGrey ? 0 : max === r ? ((g - b) / delta + (g < b ? 6 : 0)) / 6 : max === g ? ((b - r) / delta + 2) / 6 : max === b ? ((r - g) / delta + 4) / 6 : 0;

      // Construct and return the new color
      var color = new Color(360 * h, 100 * s, 100 * l, 'hsl');
      return color;
    }
  }, {
    key: "init",
    value: function init() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var space = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'rgb';
      // This catches the case when a falsy value is passed like ''
      a = !a ? 0 : a;

      // Reset all values in case the init function is rerun with new color space
      if (this.space) {
        for (var component in this.space) {
          delete this[this.space[component]];
        }
      }
      if (typeof a === 'number') {
        // Allow for the case that we don't need d...
        space = typeof d === 'string' ? d : space;
        d = typeof d === 'string' ? 0 : d;

        // Assign the values straight to the color
        Object.assign(this, {
          _a: a,
          _b: b,
          _c: c,
          _d: d,
          space: space
        });
        // If the user gave us an array, make the color from it
      } else if (a instanceof Array) {
        this.space = b || (typeof a[3] === 'string' ? a[3] : a[4]) || 'rgb';
        Object.assign(this, {
          _a: a[0],
          _b: a[1],
          _c: a[2],
          _d: a[3] || 0
        });
      } else if (a instanceof Object) {
        // Set the object up and assign its values directly
        var values = getParameters(a, b);
        Object.assign(this, values);
      } else if (typeof a === 'string') {
        if (isRgb.test(a)) {
          var noWhitespace = a.replace(whitespace, '');
          var _rgb$exec$slice$map = rgb.exec(noWhitespace).slice(1, 4).map(function (v) {
              return parseInt(v);
            }),
            _rgb$exec$slice$map2 = _slicedToArray(_rgb$exec$slice$map, 3),
            _a2 = _rgb$exec$slice$map2[0],
            _b2 = _rgb$exec$slice$map2[1],
            _c2 = _rgb$exec$slice$map2[2];
          Object.assign(this, {
            _a: _a2,
            _b: _b2,
            _c: _c2,
            _d: 0,
            space: 'rgb'
          });
        } else if (isHex.test(a)) {
          var hexParse = function hexParse(v) {
            return parseInt(v, 16);
          };
          var _hex$exec$map = hex.exec(sixDigitHex(a)).map(hexParse),
            _hex$exec$map2 = _slicedToArray(_hex$exec$map, 4),
            _a3 = _hex$exec$map2[1],
            _b3 = _hex$exec$map2[2],
            _c3 = _hex$exec$map2[3];
          Object.assign(this, {
            _a: _a3,
            _b: _b3,
            _c: _c3,
            _d: 0,
            space: 'rgb'
          });
        } else throw Error('Unsupported string format, can\'t construct Color');
      }

      // Now add the components as a convenience
      var _a = this._a,
        _b = this._b,
        _c = this._c,
        _d = this._d;
      var components = this.space === 'rgb' ? {
        r: _a,
        g: _b,
        b: _c
      } : this.space === 'xyz' ? {
        x: _a,
        y: _b,
        z: _c
      } : this.space === 'hsl' ? {
        h: _a,
        s: _b,
        l: _c
      } : this.space === 'lab' ? {
        l: _a,
        a: _b,
        b: _c
      } : this.space === 'lch' ? {
        l: _a,
        c: _b,
        h: _c
      } : this.space === 'cmyk' ? {
        c: _a,
        m: _b,
        y: _c,
        k: _d
      } : {};
      Object.assign(this, components);
    }
  }, {
    key: "lab",
    value: function lab() {
      // Get the xyz color
      var _this$xyz = this.xyz(),
        x = _this$xyz.x,
        y = _this$xyz.y,
        z = _this$xyz.z;

      // Get the lab components
      var l = 116 * y - 16;
      var a = 500 * (x - y);
      var b = 200 * (y - z);

      // Construct and return a new color
      var color = new Color(l, a, b, 'lab');
      return color;
    }
  }, {
    key: "lch",
    value: function lch() {
      // Get the lab color directly
      var _this$lab = this.lab(),
        l = _this$lab.l,
        a = _this$lab.a,
        b = _this$lab.b;

      // Get the chromaticity and the hue using polar coordinates
      var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      var h = 180 * Math.atan2(b, a) / Math.PI;
      if (h < 0) {
        h *= -1;
        h = 360 - h;
      }

      // Make a new color and return it
      var color = new Color(l, c, h, 'lch');
      return color;
    }
    /*
    Conversion Methods
    */
  }, {
    key: "rgb",
    value: function rgb() {
      if (this.space === 'rgb') {
        return this;
      } else if (cieSpace(this.space)) {
        // Convert to the xyz color space
        var x = this.x,
          y = this.y,
          z = this.z;
        if (this.space === 'lab' || this.space === 'lch') {
          // Get the values in the lab space
          var l = this.l,
            a = this.a,
            _b4 = this.b;
          if (this.space === 'lch') {
            var c = this.c,
              h = this.h;
            var dToR = Math.PI / 180;
            a = c * Math.cos(dToR * h);
            _b4 = c * Math.sin(dToR * h);
          }

          // Undo the nonlinear function
          var yL = (l + 16) / 116;
          var xL = a / 500 + yL;
          var zL = yL - _b4 / 200;

          // Get the xyz values
          var ct = 16 / 116;
          var mx = 0.008856;
          var nm = 7.787;
          x = 0.95047 * (Math.pow(xL, 3) > mx ? Math.pow(xL, 3) : (xL - ct) / nm);
          y = 1.00000 * (Math.pow(yL, 3) > mx ? Math.pow(yL, 3) : (yL - ct) / nm);
          z = 1.08883 * (Math.pow(zL, 3) > mx ? Math.pow(zL, 3) : (zL - ct) / nm);
        }

        // Convert xyz to unbounded rgb values
        var rU = x * 3.2406 + y * -1.5372 + z * -0.4986;
        var gU = x * -0.9689 + y * 1.8758 + z * 0.0415;
        var bU = x * 0.0557 + y * -0.2040 + z * 1.0570;

        // Convert the values to true rgb values
        var pow = Math.pow;
        var bd = 0.0031308;
        var r = rU > bd ? 1.055 * pow(rU, 1 / 2.4) - 0.055 : 12.92 * rU;
        var g = gU > bd ? 1.055 * pow(gU, 1 / 2.4) - 0.055 : 12.92 * gU;
        var b = bU > bd ? 1.055 * pow(bU, 1 / 2.4) - 0.055 : 12.92 * bU;

        // Make and return the color
        var color = new Color(255 * r, 255 * g, 255 * b);
        return color;
      } else if (this.space === 'hsl') {
        // https://bgrins.github.io/TinyColor/docs/tinycolor.html
        // Get the current hsl values
        var _h = this.h,
          s = this.s,
          _l = this.l;
        _h /= 360;
        s /= 100;
        _l /= 100;

        // If we are grey, then just make the color directly
        if (s === 0) {
          _l *= 255;
          var _color = new Color(_l, _l, _l);
          return _color;
        }

        // TODO I have no idea what this does :D If you figure it out, tell me!
        var q = _l < 0.5 ? _l * (1 + s) : _l + s - _l * s;
        var p = 2 * _l - q;

        // Get the rgb values
        var _r = 255 * hueToRgb(p, q, _h + 1 / 3);
        var _g = 255 * hueToRgb(p, q, _h);
        var _b5 = 255 * hueToRgb(p, q, _h - 1 / 3);

        // Make a new color
        var _color2 = new Color(_r, _g, _b5);
        return _color2;
      } else if (this.space === 'cmyk') {
        // https://gist.github.com/felipesabino/5066336
        // Get the normalised cmyk values
        var _c4 = this.c,
          m = this.m,
          _y = this.y,
          k = this.k;

        // Get the rgb values
        var _r2 = 255 * (1 - Math.min(1, _c4 * (1 - k) + k));
        var _g2 = 255 * (1 - Math.min(1, m * (1 - k) + k));
        var _b6 = 255 * (1 - Math.min(1, _y * (1 - k) + k));

        // Form the color and return it
        var _color3 = new Color(_r2, _g2, _b6);
        return _color3;
      } else {
        return this;
      }
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var _a = this._a,
        _b = this._b,
        _c = this._c,
        _d = this._d,
        space = this.space;
      return [_a, _b, _c, _d, space];
    }
  }, {
    key: "toHex",
    value: function toHex() {
      var _this$_clamped$map = this._clamped().map(componentHex),
        _this$_clamped$map2 = _slicedToArray(_this$_clamped$map, 3),
        r = _this$_clamped$map2[0],
        g = _this$_clamped$map2[1],
        b = _this$_clamped$map2[2];
      return "#".concat(r).concat(g).concat(b);
    }
  }, {
    key: "toRgb",
    value: function toRgb() {
      var _this$_clamped = this._clamped(),
        _this$_clamped2 = _slicedToArray(_this$_clamped, 3),
        rV = _this$_clamped2[0],
        gV = _this$_clamped2[1],
        bV = _this$_clamped2[2];
      var string = "rgb(".concat(rV, ",").concat(gV, ",").concat(bV, ")");
      return string;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.toHex();
    }
  }, {
    key: "xyz",
    value: function xyz() {
      // Normalise the red, green and blue values
      var _this$rgb3 = this.rgb(),
        r255 = _this$rgb3._a,
        g255 = _this$rgb3._b,
        b255 = _this$rgb3._c;
      var _map5 = [r255, g255, b255].map(function (v) {
          return v / 255;
        }),
        _map6 = _slicedToArray(_map5, 3),
        r = _map6[0],
        g = _map6[1],
        b = _map6[2];

      // Convert to the lab rgb space
      var rL = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      var gL = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      var bL = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

      // Convert to the xyz color space without bounding the values
      var xU = (rL * 0.4124 + gL * 0.3576 + bL * 0.1805) / 0.95047;
      var yU = (rL * 0.2126 + gL * 0.7152 + bL * 0.0722) / 1.00000;
      var zU = (rL * 0.0193 + gL * 0.1192 + bL * 0.9505) / 1.08883;

      // Get the proper xyz values by applying the bounding
      var x = xU > 0.008856 ? Math.pow(xU, 1 / 3) : 7.787 * xU + 16 / 116;
      var y = yU > 0.008856 ? Math.pow(yU, 1 / 3) : 7.787 * yU + 16 / 116;
      var z = zU > 0.008856 ? Math.pow(zU, 1 / 3) : 7.787 * zU + 16 / 116;

      // Make and return the color
      var color = new Color(x, y, z, 'xyz');
      return color;
    }

    /*
    Input and Output methods
    */
  }, {
    key: "_clamped",
    value: function _clamped() {
      var _this$rgb4 = this.rgb(),
        _a = _this$rgb4._a,
        _b = _this$rgb4._b,
        _c = _this$rgb4._c;
      var max = Math.max,
        min = Math.min,
        round = Math.round;
      var format = function format(v) {
        return max(0, min(round(v), 255));
      };
      return [_a, _b, _c].map(format);
    }

    /*
    Constructing colors
    */
  }], [{
    key: "isColor",
    value: function isColor(color) {
      return color && (color instanceof Color || this.isRgb(color) || this.test(color));
    }

    // Test if given value is an rgb object
  }, {
    key: "isRgb",
    value: function isRgb(color) {
      return color && typeof color.r === 'number' && typeof color.g === 'number' && typeof color.b === 'number';
    }

    /*
    Generating random colors
    */
  }, {
    key: "random",
    value: function random() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'vibrant';
      var t = arguments.length > 1 ? arguments[1] : undefined;
      // Get the math modules
      var random = Math.random,
        round = Math.round,
        sin = Math.sin,
        pi = Math.PI;

      // Run the correct generator
      if (mode === 'vibrant') {
        var l = (81 - 57) * random() + 57;
        var c = (83 - 45) * random() + 45;
        var h = 360 * random();
        var color = new Color(l, c, h, 'lch');
        return color;
      } else if (mode === 'sine') {
        t = t == null ? random() : t;
        var r = round(80 * sin(2 * pi * t / 0.5 + 0.01) + 150);
        var g = round(50 * sin(2 * pi * t / 0.5 + 4.6) + 200);
        var b = round(100 * sin(2 * pi * t / 0.5 + 2.3) + 150);
        var _color4 = new Color(r, g, b);
        return _color4;
      } else if (mode === 'pastel') {
        var _l2 = (94 - 86) * random() + 86;
        var _c5 = (26 - 9) * random() + 9;
        var _h2 = 360 * random();
        var _color5 = new Color(_l2, _c5, _h2, 'lch');
        return _color5;
      } else if (mode === 'dark') {
        var _l3 = 10 + 10 * random();
        var _c6 = (125 - 75) * random() + 86;
        var _h3 = 360 * random();
        var _color6 = new Color(_l3, _c6, _h3, 'lch');
        return _color6;
      } else if (mode === 'rgb') {
        var _r3 = 255 * random();
        var _g3 = 255 * random();
        var _b7 = 255 * random();
        var _color7 = new Color(_r3, _g3, _b7);
        return _color7;
      } else if (mode === 'lab') {
        var _l4 = 100 * random();
        var a = 256 * random() - 128;
        var _b8 = 256 * random() - 128;
        var _color8 = new Color(_l4, a, _b8, 'lab');
        return _color8;
      } else if (mode === 'grey') {
        var grey = 255 * random();
        var _color9 = new Color(grey, grey, grey);
        return _color9;
      } else {
        throw new Error('Unsupported random color mode');
      }
    }

    // Test if given value is a color string
  }, {
    key: "test",
    value: function test(color) {
      return typeof color === 'string' && (isHex.test(color) || isRgb.test(color));
    }
  }]);
}();

var Point = /*#__PURE__*/function () {
  // Initialize
  function Point() {
    _classCallCheck(this, Point);
    this.init.apply(this, arguments);
  }

  // Clone point
  return _createClass(Point, [{
    key: "clone",
    value: function clone() {
      return new Point(this);
    }
  }, {
    key: "init",
    value: function init(x, y) {
      var base = {
        x: 0,
        y: 0
      };

      // ensure source as object
      var source = Array.isArray(x) ? {
        x: x[0],
        y: x[1]
      } : _typeof(x) === 'object' ? {
        x: x.x,
        y: x.y
      } : {
        x: x,
        y: y
      };

      // merge source
      this.x = source.x == null ? base.x : source.x;
      this.y = source.y == null ? base.y : source.y;
      return this;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y];
    }
  }, {
    key: "transform",
    value: function transform(m) {
      return this.clone().transformO(m);
    }

    // Transform point with matrix
  }, {
    key: "transformO",
    value: function transformO(m) {
      if (!Matrix.isMatrixLike(m)) {
        m = new Matrix(m);
      }
      var x = this.x,
        y = this.y;

      // Perform the matrix multiplication
      this.x = m.a * x + m.c * y + m.e;
      this.y = m.b * x + m.d * y + m.f;
      return this;
    }
  }]);
}();
function point(x, y) {
  return new Point(x, y).transformO(this.screenCTM().inverseO());
}

function closeEnough(a, b, threshold) {
  return Math.abs(b - a) < (1e-6);
}
var Matrix = /*#__PURE__*/function () {
  function Matrix() {
    _classCallCheck(this, Matrix);
    this.init.apply(this, arguments);
  }
  return _createClass(Matrix, [{
    key: "around",
    value: function around(cx, cy, matrix) {
      return this.clone().aroundO(cx, cy, matrix);
    }

    // Transform around a center point
  }, {
    key: "aroundO",
    value: function aroundO(cx, cy, matrix) {
      var dx = cx || 0;
      var dy = cy || 0;
      return this.translateO(-dx, -dy).lmultiplyO(matrix).translateO(dx, dy);
    }

    // Clones this matrix
  }, {
    key: "clone",
    value: function clone() {
      return new Matrix(this);
    }

    // Decomposes this matrix into its affine parameters
  }, {
    key: "decompose",
    value: function decompose() {
      var cx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var cy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      // Get the parameters from the matrix
      var a = this.a;
      var b = this.b;
      var c = this.c;
      var d = this.d;
      var e = this.e;
      var f = this.f;

      // Figure out if the winding direction is clockwise or counterclockwise
      var determinant = a * d - b * c;
      var ccw = determinant > 0 ? 1 : -1;

      // Since we only shear in x, we can use the x basis to get the x scale
      // and the rotation of the resulting matrix
      var sx = ccw * Math.sqrt(a * a + b * b);
      var thetaRad = Math.atan2(ccw * b, ccw * a);
      var theta = 180 / Math.PI * thetaRad;
      var ct = Math.cos(thetaRad);
      var st = Math.sin(thetaRad);

      // We can then solve the y basis vector simultaneously to get the other
      // two affine parameters directly from these parameters
      var lam = (a * c + b * d) / determinant;
      var sy = c * sx / (lam * a - b) || d * sx / (lam * b + a);

      // Use the translations
      var tx = e - cx + cx * ct * sx + cy * (lam * ct * sx - st * sy);
      var ty = f - cy + cx * st * sx + cy * (lam * st * sx + ct * sy);

      // Construct the decomposition and return it
      return {
        // Return the affine parameters
        scaleX: sx,
        scaleY: sy,
        shear: lam,
        rotate: theta,
        translateX: tx,
        translateY: ty,
        originX: cx,
        originY: cy,
        // Return the matrix parameters
        a: this.a,
        b: this.b,
        c: this.c,
        d: this.d,
        e: this.e,
        f: this.f
      };
    }

    // Check if two matrices are equal
  }, {
    key: "equals",
    value: function equals(other) {
      if (other === this) return true;
      var comp = new Matrix(other);
      return closeEnough(this.a, comp.a) && closeEnough(this.b, comp.b) && closeEnough(this.c, comp.c) && closeEnough(this.d, comp.d) && closeEnough(this.e, comp.e) && closeEnough(this.f, comp.f);
    }

    // Flip matrix on x or y, at a given offset
  }, {
    key: "flip",
    value: function flip(axis, around) {
      return this.clone().flipO(axis, around);
    }
  }, {
    key: "flipO",
    value: function flipO(axis, around) {
      return axis === 'x' ? this.scaleO(-1, 1, around, 0) : axis === 'y' ? this.scaleO(1, -1, 0, around) : this.scaleO(-1, -1, axis, around || axis); // Define an x, y flip point
    }

    // Initialize
  }, {
    key: "init",
    value: function init(source) {
      var base = Matrix.fromArray([1, 0, 0, 1, 0, 0]);

      // ensure source as object
      source = source instanceof Element ? source.matrixify() : typeof source === 'string' ? Matrix.fromArray(source.split(delimiter).map(parseFloat)) : Array.isArray(source) ? Matrix.fromArray(source) : _typeof(source) === 'object' && Matrix.isMatrixLike(source) ? source : _typeof(source) === 'object' ? new Matrix().transform(source) : arguments.length === 6 ? Matrix.fromArray([].slice.call(arguments)) : base;

      // Merge the source matrix with the base matrix
      this.a = source.a != null ? source.a : base.a;
      this.b = source.b != null ? source.b : base.b;
      this.c = source.c != null ? source.c : base.c;
      this.d = source.d != null ? source.d : base.d;
      this.e = source.e != null ? source.e : base.e;
      this.f = source.f != null ? source.f : base.f;
      return this;
    }
  }, {
    key: "inverse",
    value: function inverse() {
      return this.clone().inverseO();
    }

    // Inverses matrix
  }, {
    key: "inverseO",
    value: function inverseO() {
      // Get the current parameters out of the matrix
      var a = this.a;
      var b = this.b;
      var c = this.c;
      var d = this.d;
      var e = this.e;
      var f = this.f;

      // Invert the 2x2 matrix in the top left
      var det = a * d - b * c;
      if (!det) throw new Error('Cannot invert ' + this);

      // Calculate the top 2x2 matrix
      var na = d / det;
      var nb = -b / det;
      var nc = -c / det;
      var nd = a / det;

      // Apply the inverted matrix to the top right
      var ne = -(na * e + nc * f);
      var nf = -(nb * e + nd * f);

      // Construct the inverted matrix
      this.a = na;
      this.b = nb;
      this.c = nc;
      this.d = nd;
      this.e = ne;
      this.f = nf;
      return this;
    }
  }, {
    key: "lmultiply",
    value: function lmultiply(matrix) {
      return this.clone().lmultiplyO(matrix);
    }
  }, {
    key: "lmultiplyO",
    value: function lmultiplyO(matrix) {
      var r = this;
      var l = matrix instanceof Matrix ? matrix : new Matrix(matrix);
      return Matrix.matrixMultiply(l, r, this);
    }

    // Left multiplies by the given matrix
  }, {
    key: "multiply",
    value: function multiply(matrix) {
      return this.clone().multiplyO(matrix);
    }
  }, {
    key: "multiplyO",
    value: function multiplyO(matrix) {
      // Get the matrices
      var l = this;
      var r = matrix instanceof Matrix ? matrix : new Matrix(matrix);
      return Matrix.matrixMultiply(l, r, this);
    }

    // Rotate matrix
  }, {
    key: "rotate",
    value: function rotate(r, cx, cy) {
      return this.clone().rotateO(r, cx, cy);
    }
  }, {
    key: "rotateO",
    value: function rotateO(r) {
      var cx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var cy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      // Convert degrees to radians
      r = radians(r);
      var cos = Math.cos(r);
      var sin = Math.sin(r);
      var a = this.a,
        b = this.b,
        c = this.c,
        d = this.d,
        e = this.e,
        f = this.f;
      this.a = a * cos - b * sin;
      this.b = b * cos + a * sin;
      this.c = c * cos - d * sin;
      this.d = d * cos + c * sin;
      this.e = e * cos - f * sin + cy * sin - cx * cos + cx;
      this.f = f * cos + e * sin - cx * sin - cy * cos + cy;
      return this;
    }

    // Scale matrix
  }, {
    key: "scale",
    value: function scale(x, y, cx, cy) {
      var _this$clone;
      return (_this$clone = this.clone()).scaleO.apply(_this$clone, arguments);
    }
  }, {
    key: "scaleO",
    value: function scaleO(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var cx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var cy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      // Support uniform scaling
      if (arguments.length === 3) {
        cy = cx;
        cx = y;
        y = x;
      }
      var a = this.a,
        b = this.b,
        c = this.c,
        d = this.d,
        e = this.e,
        f = this.f;
      this.a = a * x;
      this.b = b * y;
      this.c = c * x;
      this.d = d * y;
      this.e = e * x - cx * x + cx;
      this.f = f * y - cy * y + cy;
      return this;
    }

    // Shear matrix
  }, {
    key: "shear",
    value: function shear(a, cx, cy) {
      return this.clone().shearO(a, cx, cy);
    }
  }, {
    key: "shearO",
    value: function shearO(lx) {
      var cy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var a = this.a,
        b = this.b,
        c = this.c,
        d = this.d,
        e = this.e,
        f = this.f;
      this.a = a + b * lx;
      this.c = c + d * lx;
      this.e = e + f * lx - cy * lx;
      return this;
    }

    // Skew Matrix
  }, {
    key: "skew",
    value: function skew(x, y, cx, cy) {
      var _this$clone2;
      return (_this$clone2 = this.clone()).skewO.apply(_this$clone2, arguments);
    }
  }, {
    key: "skewO",
    value: function skewO(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var cx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var cy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      // support uniformal skew
      if (arguments.length === 3) {
        cy = cx;
        cx = y;
        y = x;
      }

      // Convert degrees to radians
      x = radians(x);
      y = radians(y);
      var lx = Math.tan(x);
      var ly = Math.tan(y);
      var a = this.a,
        b = this.b,
        c = this.c,
        d = this.d,
        e = this.e,
        f = this.f;
      this.a = a + b * lx;
      this.b = b + a * ly;
      this.c = c + d * lx;
      this.d = d + c * ly;
      this.e = e + f * lx - cy * lx;
      this.f = f + e * ly - cx * ly;
      return this;
    }

    // SkewX
  }, {
    key: "skewX",
    value: function skewX(x, cx, cy) {
      return this.skew(x, 0, cx, cy);
    }

    // SkewY
  }, {
    key: "skewY",
    value: function skewY(y, cx, cy) {
      return this.skew(0, y, cx, cy);
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.a, this.b, this.c, this.d, this.e, this.f];
    }

    // Convert matrix to string
  }, {
    key: "toString",
    value: function toString() {
      return 'matrix(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ')';
    }

    // Transform a matrix into another matrix by manipulating the space
  }, {
    key: "transform",
    value: function transform(o) {
      // Check if o is a matrix and then left multiply it directly
      if (Matrix.isMatrixLike(o)) {
        var matrix = new Matrix(o);
        return matrix.multiplyO(this);
      }

      // Get the proposed transformations and the current transformations
      var t = Matrix.formatTransforms(o);
      var current = this;
      var _Point$transform = new Point(t.ox, t.oy).transform(current),
        ox = _Point$transform.x,
        oy = _Point$transform.y;

      // Construct the resulting matrix
      var transformer = new Matrix().translateO(t.rx, t.ry).lmultiplyO(current).translateO(-ox, -oy).scaleO(t.scaleX, t.scaleY).skewO(t.skewX, t.skewY).shearO(t.shear).rotateO(t.theta).translateO(ox, oy);

      // If we want the origin at a particular place, we force it there
      if (isFinite(t.px) || isFinite(t.py)) {
        var origin = new Point(ox, oy).transform(transformer);
        // TODO: Replace t.px with isFinite(t.px)
        // Doesn't work because t.px is also 0 if it wasn't passed
        var dx = isFinite(t.px) ? t.px - origin.x : 0;
        var dy = isFinite(t.py) ? t.py - origin.y : 0;
        transformer.translateO(dx, dy);
      }

      // Translate now after positioning
      transformer.translateO(t.tx, t.ty);
      return transformer;
    }

    // Translate matrix
  }, {
    key: "translate",
    value: function translate(x, y) {
      return this.clone().translateO(x, y);
    }
  }, {
    key: "translateO",
    value: function translateO(x, y) {
      this.e += x || 0;
      this.f += y || 0;
      return this;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return {
        a: this.a,
        b: this.b,
        c: this.c,
        d: this.d,
        e: this.e,
        f: this.f
      };
    }
  }], [{
    key: "formatTransforms",
    value: function formatTransforms(o) {
      // Get all of the parameters required to form the matrix
      var flipBoth = o.flip === 'both' || o.flip === true;
      var flipX = o.flip && (flipBoth || o.flip === 'x') ? -1 : 1;
      var flipY = o.flip && (flipBoth || o.flip === 'y') ? -1 : 1;
      var skewX = o.skew && o.skew.length ? o.skew[0] : isFinite(o.skew) ? o.skew : isFinite(o.skewX) ? o.skewX : 0;
      var skewY = o.skew && o.skew.length ? o.skew[1] : isFinite(o.skew) ? o.skew : isFinite(o.skewY) ? o.skewY : 0;
      var scaleX = o.scale && o.scale.length ? o.scale[0] * flipX : isFinite(o.scale) ? o.scale * flipX : isFinite(o.scaleX) ? o.scaleX * flipX : flipX;
      var scaleY = o.scale && o.scale.length ? o.scale[1] * flipY : isFinite(o.scale) ? o.scale * flipY : isFinite(o.scaleY) ? o.scaleY * flipY : flipY;
      var shear = o.shear || 0;
      var theta = o.rotate || o.theta || 0;
      var origin = new Point(o.origin || o.around || o.ox || o.originX, o.oy || o.originY);
      var ox = origin.x;
      var oy = origin.y;
      // We need Point to be invalid if nothing was passed because we cannot default to 0 here. That is why NaN
      var position = new Point(o.position || o.px || o.positionX || NaN, o.py || o.positionY || NaN);
      var px = position.x;
      var py = position.y;
      var translate = new Point(o.translate || o.tx || o.translateX, o.ty || o.translateY);
      var tx = translate.x;
      var ty = translate.y;
      var relative = new Point(o.relative || o.rx || o.relativeX, o.ry || o.relativeY);
      var rx = relative.x;
      var ry = relative.y;

      // Populate all of the values
      return {
        scaleX: scaleX,
        scaleY: scaleY,
        skewX: skewX,
        skewY: skewY,
        shear: shear,
        theta: theta,
        rx: rx,
        ry: ry,
        tx: tx,
        ty: ty,
        ox: ox,
        oy: oy,
        px: px,
        py: py
      };
    }
  }, {
    key: "fromArray",
    value: function fromArray(a) {
      return {
        a: a[0],
        b: a[1],
        c: a[2],
        d: a[3],
        e: a[4],
        f: a[5]
      };
    }
  }, {
    key: "isMatrixLike",
    value: function isMatrixLike(o) {
      return o.a != null || o.b != null || o.c != null || o.d != null || o.e != null || o.f != null;
    }

    // left matrix, right matrix, target matrix which is overwritten
  }, {
    key: "matrixMultiply",
    value: function matrixMultiply(l, r, o) {
      // Work out the product directly
      var a = l.a * r.a + l.c * r.b;
      var b = l.b * r.a + l.d * r.b;
      var c = l.a * r.c + l.c * r.d;
      var d = l.b * r.c + l.d * r.d;
      var e = l.e + l.a * r.e + l.c * r.f;
      var f = l.f + l.b * r.e + l.d * r.f;

      // make sure to use local variables because l/r and o could be the same
      o.a = a;
      o.b = b;
      o.c = c;
      o.d = d;
      o.e = e;
      o.f = f;
      return o;
    }
  }]);
}();
function ctm() {
  return new Matrix(this.node.getCTM());
}
function screenCTM() {
  /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
     This is needed because FF does not return the transformation matrix
     for the inner coordinate system when getScreenCTM() is called on nested svgs.
     However all other Browsers do that */
  if (typeof this.isRoot === 'function' && !this.isRoot()) {
    var rect = this.rect(1, 1);
    var m = rect.node.getScreenCTM();
    rect.remove();
    return new Matrix(m);
  }
  return new Matrix(this.node.getScreenCTM());
}
register(Matrix, 'Matrix');

function parser() {
  // Reuse cached element if possible
  if (!parser.nodes) {
    var svg = makeInstance().size(2, 0);
    svg.node.style.cssText = ['opacity: 0', 'position: absolute', 'left: -100%', 'top: -100%', 'overflow: hidden'].join(';');
    svg.attr('focusable', 'false');
    svg.attr('aria-hidden', 'true');
    var path = svg.path().node;
    parser.nodes = {
      svg: svg,
      path: path
    };
  }
  if (!parser.nodes.svg.node.parentNode) {
    var b = globals.document.body || globals.document.documentElement;
    parser.nodes.svg.addTo(b);
  }
  return parser.nodes;
}

function isNulledBox(box) {
  return !box.width && !box.height && !box.x && !box.y;
}
function domContains(node) {
  return node === globals.document || (globals.document.documentElement.contains || function (node) {
    // This is IE - it does not support contains() for top-level SVGs
    while (node.parentNode) {
      node = node.parentNode;
    }
    return node === globals.document;
  }).call(globals.document.documentElement, node);
}
var Box = /*#__PURE__*/function () {
  function Box() {
    _classCallCheck(this, Box);
    this.init.apply(this, arguments);
  }
  return _createClass(Box, [{
    key: "addOffset",
    value: function addOffset() {
      // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
      this.x += globals.window.pageXOffset;
      this.y += globals.window.pageYOffset;
      return new Box(this);
    }
  }, {
    key: "init",
    value: function init(source) {
      var base = [0, 0, 0, 0];
      source = typeof source === 'string' ? source.split(delimiter).map(parseFloat) : Array.isArray(source) ? source : _typeof(source) === 'object' ? [source.left != null ? source.left : source.x, source.top != null ? source.top : source.y, source.width, source.height] : arguments.length === 4 ? [].slice.call(arguments) : base;
      this.x = source[0] || 0;
      this.y = source[1] || 0;
      this.width = this.w = source[2] || 0;
      this.height = this.h = source[3] || 0;

      // Add more bounding box properties
      this.x2 = this.x + this.w;
      this.y2 = this.y + this.h;
      this.cx = this.x + this.w / 2;
      this.cy = this.y + this.h / 2;
      return this;
    }
  }, {
    key: "isNulled",
    value: function isNulled() {
      return isNulledBox(this);
    }

    // Merge rect box with another, return a new instance
  }, {
    key: "merge",
    value: function merge(box) {
      var x = Math.min(this.x, box.x);
      var y = Math.min(this.y, box.y);
      var width = Math.max(this.x + this.width, box.x + box.width) - x;
      var height = Math.max(this.y + this.height, box.y + box.height) - y;
      return new Box(x, y, width, height);
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y, this.width, this.height];
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height;
    }
  }, {
    key: "transform",
    value: function transform(m) {
      if (!(m instanceof Matrix)) {
        m = new Matrix(m);
      }
      var xMin = Infinity;
      var xMax = -Infinity;
      var yMin = Infinity;
      var yMax = -Infinity;
      var pts = [new Point(this.x, this.y), new Point(this.x2, this.y), new Point(this.x, this.y2), new Point(this.x2, this.y2)];
      pts.forEach(function (p) {
        p = p.transform(m);
        xMin = Math.min(xMin, p.x);
        xMax = Math.max(xMax, p.x);
        yMin = Math.min(yMin, p.y);
        yMax = Math.max(yMax, p.y);
      });
      return new Box(xMin, yMin, xMax - xMin, yMax - yMin);
    }
  }]);
}();
function getBox(el, getBBoxFn, retry) {
  var box;
  try {
    // Try to get the box with the provided function
    box = getBBoxFn(el.node);

    // If the box is worthless and not even in the dom, retry
    // by throwing an error here...
    if (isNulledBox(box) && !domContains(el.node)) {
      throw new Error('Element not in the dom');
    }
  } catch (e) {
    // ... and calling the retry handler here
    box = retry(el);
  }
  return box;
}
function bbox() {
  // Function to get bbox is getBBox()
  var getBBox = function getBBox(node) {
    return node.getBBox();
  };

  // Take all measures so that a stupid browser renders the element
  // so we can get the bbox from it when we try again
  var retry = function retry(el) {
    try {
      var clone = el.clone().addTo(parser().svg).show();
      var _box = clone.node.getBBox();
      clone.remove();
      return _box;
    } catch (e) {
      // We give up...
      throw new Error("Getting bbox of element \"".concat(el.node.nodeName, "\" is not possible: ").concat(e.toString()));
    }
  };
  var box = getBox(this, getBBox, retry);
  var bbox = new Box(box);
  return bbox;
}
function rbox(el) {
  var getRBox = function getRBox(node) {
    return node.getBoundingClientRect();
  };
  var retry = function retry(el) {
    // There is no point in trying tricks here because if we insert the element into the dom ourselves
    // it obviously will be at the wrong position
    throw new Error("Getting rbox of element \"".concat(el.node.nodeName, "\" is not possible"));
  };
  var box = getBox(this, getRBox, retry);
  var rbox = new Box(box);

  // If an element was passed, we want the bbox in the coordinate system of that element
  if (el) {
    return rbox.transform(el.screenCTM().inverseO());
  }

  // Else we want it in absolute screen coordinates
  // Therefore we need to add the scrollOffset
  return rbox.addOffset();
}

// Checks whether the given point is inside the bounding box
function inside(x, y) {
  var box = this.bbox();
  return x > box.x && y > box.y && x < box.x + box.width && y < box.y + box.height;
}
registerMethods({
  viewbox: {
    viewbox: function viewbox(x, y, width, height) {
      // act as getter
      if (x == null) return new Box(this.attr('viewBox'));

      // act as setter
      return this.attr('viewBox', new Box(x, y, width, height));
    },
    zoom: function zoom(level, point) {
      // Its best to rely on the attributes here and here is why:
      // clientXYZ: Doesn't work on non-root svgs because they dont have a CSSBox (silly!)
      // getBoundingClientRect: Doesn't work because Chrome just ignores width and height of nested svgs completely
      //                        that means, their clientRect is always as big as the content.
      //                        Furthermore this size is incorrect if the element is further transformed by its parents
      // computedStyle: Only returns meaningful values if css was used with px. We dont go this route here!
      // getBBox: returns the bounding box of its content - that doesn't help!
      var _this$attr = this.attr(['width', 'height']),
        width = _this$attr.width,
        height = _this$attr.height;

      // Width and height is a string when a number with a unit is present which we can't use
      // So we try clientXYZ
      if (!width && !height || typeof width === 'string' || typeof height === 'string') {
        width = this.node.clientWidth;
        height = this.node.clientHeight;
      }

      // Giving up...
      if (!width || !height) {
        throw new Error('Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element');
      }
      var v = this.viewbox();
      var zoomX = width / v.width;
      var zoomY = height / v.height;
      var zoom = Math.min(zoomX, zoomY);
      if (level == null) {
        return zoom;
      }
      var zoomAmount = zoom / level;

      // Set the zoomAmount to the highest value which is safe to process and recover from
      // The * 100 is a bit of wiggle room for the matrix transformation
      if (zoomAmount === Infinity) zoomAmount = Number.MAX_SAFE_INTEGER / 100;
      point = point || new Point(width / 2 / zoomX + v.x, height / 2 / zoomY + v.y);
      var box = new Box(v).transform(new Matrix({
        scale: zoomAmount,
        origin: point
      }));
      return this.viewbox(box);
    }
  }
});
register(Box, 'Box');

// import { subClassArray } from './ArrayPolyfill.js'
var List = /*#__PURE__*/function (_Array) {
  function List() {
    var _this2;
    var _this;
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    _classCallCheck(this, List);
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    _this = _callSuper(this, List, [arr].concat(args));
    if (typeof arr === 'number') return _possibleConstructorReturn(_this, _this);
    _this.length = 0;
    (_this2 = _this).push.apply(_this2, _toConsumableArray(arr));
    return _this;
  }
  _inherits(List, _Array);
  return _createClass(List);
}(/*#__PURE__*/_wrapNativeSuper(Array));
extend([List], {
  each: function each(fnOrMethodName) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    if (typeof fnOrMethodName === 'function') {
      return this.map(function (el, i, arr) {
        return fnOrMethodName.call(el, el, i, arr);
      });
    } else {
      return this.map(function (el) {
        return el[fnOrMethodName].apply(el, args);
      });
    }
  },
  toArray: function toArray() {
    return Array.prototype.concat.apply([], this);
  }
});
var reserved = ['toArray', 'constructor', 'each'];
List.extend = function (methods) {
  methods = methods.reduce(function (obj, name) {
    // Don't overwrite own methods
    if (reserved.includes(name)) return obj;

    // Don't add private methods
    if (name[0] === '_') return obj;

    // Relay every call to each()
    obj[name] = function () {
      for (var _len3 = arguments.length, attrs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        attrs[_key3] = arguments[_key3];
      }
      return this.each.apply(this, [name].concat(attrs));
    };
    return obj;
  }, {});
  extend([List], methods);
};

function baseFind(query, parent) {
  return new List(map$1((parent || globals.document).querySelectorAll(query), function (node) {
    return adopt(node);
  }));
}

// Scoped find method
function find(query) {
  return baseFind(query, this.node);
}
function findOne(query) {
  return adopt(this.node.querySelector(query));
}

var listenerId = 0;
var windowEvents = {};
function getEvents(instance) {
  var n = instance.getEventHolder();

  // We dont want to save events in global space
  if (n === globals.window) n = windowEvents;
  if (!n.events) n.events = {};
  return n.events;
}
function getEventTarget(instance) {
  return instance.getEventTarget();
}
function clearEvents(instance) {
  var n = instance.getEventHolder();
  if (n === globals.window) n = windowEvents;
  if (n.events) n.events = {};
}

// Add event binder in the SVG namespace
function on(node, events, listener, binding, options) {
  var l = listener.bind(binding || node);
  var instance = makeInstance(node);
  var bag = getEvents(instance);
  var n = getEventTarget(instance);

  // events can be an array of events or a string of events
  events = Array.isArray(events) ? events : events.split(delimiter);

  // add id to listener
  if (!listener._svgjsListenerId) {
    listener._svgjsListenerId = ++listenerId;
  }
  events.forEach(function (event) {
    var ev = event.split('.')[0];
    var ns = event.split('.')[1] || '*';

    // ensure valid object
    bag[ev] = bag[ev] || {};
    bag[ev][ns] = bag[ev][ns] || {};

    // reference listener
    bag[ev][ns][listener._svgjsListenerId] = l;

    // add listener
    n.addEventListener(ev, l, options || false);
  });
}

// Add event unbinder in the SVG namespace
function off(node, events, listener, options) {
  var instance = makeInstance(node);
  var bag = getEvents(instance);
  var n = getEventTarget(instance);

  // listener can be a function or a number
  if (typeof listener === 'function') {
    listener = listener._svgjsListenerId;
    if (!listener) return;
  }

  // events can be an array of events or a string or undefined
  events = Array.isArray(events) ? events : (events || '').split(delimiter);
  events.forEach(function (event) {
    var ev = event && event.split('.')[0];
    var ns = event && event.split('.')[1];
    var namespace, l;
    if (listener) {
      // remove listener reference
      if (bag[ev] && bag[ev][ns || '*']) {
        // removeListener
        n.removeEventListener(ev, bag[ev][ns || '*'][listener], options || false);
        delete bag[ev][ns || '*'][listener];
      }
    } else if (ev && ns) {
      // remove all listeners for a namespaced event
      if (bag[ev] && bag[ev][ns]) {
        for (l in bag[ev][ns]) {
          off(n, [ev, ns].join('.'), l);
        }
        delete bag[ev][ns];
      }
    } else if (ns) {
      // remove all listeners for a specific namespace
      for (event in bag) {
        for (namespace in bag[event]) {
          if (ns === namespace) {
            off(n, [event, ns].join('.'));
          }
        }
      }
    } else if (ev) {
      // remove all listeners for the event
      if (bag[ev]) {
        for (namespace in bag[ev]) {
          off(n, [ev, namespace].join('.'));
        }
        delete bag[ev];
      }
    } else {
      // remove all listeners on a given node
      for (event in bag) {
        off(n, event);
      }
      clearEvents(instance);
    }
  });
}
function dispatch(node, event, data, options) {
  var n = getEventTarget(node);

  // Dispatch event
  if (event instanceof globals.window.Event) {
    n.dispatchEvent(event);
  } else {
    event = new globals.window.CustomEvent(event, _objectSpread2({
      detail: data,
      cancelable: true
    }, options));
    n.dispatchEvent(event);
  }
  return event;
}

var EventTarget = /*#__PURE__*/function (_Base) {
  function EventTarget() {
    _classCallCheck(this, EventTarget);
    return _callSuper(this, EventTarget, arguments);
  }
  _inherits(EventTarget, _Base);
  return _createClass(EventTarget, [{
    key: "addEventListener",
    value: function addEventListener() {}
  }, {
    key: "dispatch",
    value: function dispatch$1(event, data, options) {
      return dispatch(this, event, data, options);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var bag = this.getEventHolder().events;
      if (!bag) return true;
      var events = bag[event.type];
      for (var i in events) {
        for (var j in events[i]) {
          events[i][j](event);
        }
      }
      return !event.defaultPrevented;
    }

    // Fire given event
  }, {
    key: "fire",
    value: function fire(event, data, options) {
      this.dispatch(event, data, options);
      return this;
    }
  }, {
    key: "getEventHolder",
    value: function getEventHolder() {
      return this;
    }
  }, {
    key: "getEventTarget",
    value: function getEventTarget() {
      return this;
    }

    // Unbind event from listener
  }, {
    key: "off",
    value: function off$1(event, listener, options) {
      off(this, event, listener, options);
      return this;
    }

    // Bind given event to listener
  }, {
    key: "on",
    value: function on$1(event, listener, binding, options) {
      on(this, event, listener, binding, options);
      return this;
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {}
  }]);
}(Base$1);
register(EventTarget, 'EventTarget');

function noop() {}

// Default animation values
var timeline = {
  duration: 400,
  ease: '>',
  delay: 0
};

// Default attribute values
var attrs = {
  // fill and stroke
  'fill-opacity': 1,
  'stroke-opacity': 1,
  'stroke-width': 0,
  'stroke-linejoin': 'miter',
  'stroke-linecap': 'butt',
  fill: '#000000',
  stroke: '#000000',
  opacity: 1,
  // position
  x: 0,
  y: 0,
  cx: 0,
  cy: 0,
  // size
  width: 0,
  height: 0,
  // radius
  r: 0,
  rx: 0,
  ry: 0,
  // gradient
  offset: 0,
  'stop-opacity': 1,
  'stop-color': '#000000',
  // text
  'text-anchor': 'start'
};

var SVGArray = /*#__PURE__*/function (_Array) {
  function SVGArray() {
    var _this2;
    var _this;
    _classCallCheck(this, SVGArray);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, SVGArray, [].concat(args));
    (_this2 = _this).init.apply(_this2, args);
    return _this;
  }
  _inherits(SVGArray, _Array);
  return _createClass(SVGArray, [{
    key: "clone",
    value: function clone() {
      return new this.constructor(this);
    }
  }, {
    key: "init",
    value: function init(arr) {
      // This catches the case, that native map tries to create an array with new Array(1)
      if (typeof arr === 'number') return this;
      this.length = 0;
      this.push.apply(this, _toConsumableArray(this.parse(arr)));
      return this;
    }

    // Parse whitespace separated string
  }, {
    key: "parse",
    value: function parse() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      // If already is an array, no need to parse it
      if (array instanceof Array) return array;
      return array.trim().split(delimiter).map(parseFloat);
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return Array.prototype.concat.apply([], this);
    }
  }, {
    key: "toSet",
    value: function toSet() {
      return new Set(this);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.join(' ');
    }

    // Flattens the array if needed
  }, {
    key: "valueOf",
    value: function valueOf() {
      var ret = [];
      ret.push.apply(ret, _toConsumableArray(this));
      return ret;
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(Array));

// Module for unit conversions
var SVGNumber = /*#__PURE__*/function () {
  // Initialize
  function SVGNumber() {
    _classCallCheck(this, SVGNumber);
    this.init.apply(this, arguments);
  }
  return _createClass(SVGNumber, [{
    key: "convert",
    value: function convert(unit) {
      return new SVGNumber(this.value, unit);
    }

    // Divide number
  }, {
    key: "divide",
    value: function divide(number) {
      number = new SVGNumber(number);
      return new SVGNumber(this / number, this.unit || number.unit);
    }
  }, {
    key: "init",
    value: function init(value, unit) {
      unit = Array.isArray(value) ? value[1] : unit;
      value = Array.isArray(value) ? value[0] : value;

      // initialize defaults
      this.value = 0;
      this.unit = unit || '';

      // parse value
      if (typeof value === 'number') {
        // ensure a valid numeric value
        this.value = isNaN(value) ? 0 : !isFinite(value) ? value < 0 ? -3.4e+38 : +3.4e+38 : value;
      } else if (typeof value === 'string') {
        unit = value.match(numberAndUnit);
        if (unit) {
          // make value numeric
          this.value = parseFloat(unit[1]);

          // normalize
          if (unit[5] === '%') {
            this.value /= 100;
          } else if (unit[5] === 's') {
            this.value *= 1000;
          }

          // store unit
          this.unit = unit[5];
        }
      } else {
        if (value instanceof SVGNumber) {
          this.value = value.valueOf();
          this.unit = value.unit;
        }
      }
      return this;
    }

    // Subtract number
  }, {
    key: "minus",
    value: function minus(number) {
      number = new SVGNumber(number);
      return new SVGNumber(this - number, this.unit || number.unit);
    }

    // Add number
  }, {
    key: "plus",
    value: function plus(number) {
      number = new SVGNumber(number);
      return new SVGNumber(this + number, this.unit || number.unit);
    }

    // Multiply number
  }, {
    key: "times",
    value: function times(number) {
      number = new SVGNumber(number);
      return new SVGNumber(this * number, this.unit || number.unit);
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.value, this.unit];
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  }, {
    key: "toString",
    value: function toString() {
      return (this.unit === '%' ? ~~(this.value * 1e8) / 1e6 : this.unit === 's' ? this.value / 1e3 : this.value) + this.unit;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
  }]);
}();

var hooks = [];
function registerAttrHook(fn) {
  hooks.push(fn);
}

// Set svg element attribute
function attr(attr, val, ns) {
  var _this = this;
  // act as full getter
  if (attr == null) {
    // get an object of attributes
    attr = {};
    val = this.node.attributes;
    var _iterator = _createForOfIteratorHelper(val),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var node = _step.value;
        attr[node.nodeName] = isNumber.test(node.nodeValue) ? parseFloat(node.nodeValue) : node.nodeValue;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return attr;
  } else if (attr instanceof Array) {
    // loop through array and get all values
    return attr.reduce(function (last, curr) {
      last[curr] = _this.attr(curr);
      return last;
    }, {});
  } else if (_typeof(attr) === 'object' && attr.constructor === Object) {
    // apply every attribute individually if an object is passed
    for (val in attr) this.attr(val, attr[val]);
  } else if (val === null) {
    // remove value
    this.node.removeAttribute(attr);
  } else if (val == null) {
    // act as a getter if the first and only argument is not an object
    val = this.node.getAttribute(attr);
    return val == null ? attrs[attr] : isNumber.test(val) ? parseFloat(val) : val;
  } else {
    // Loop through hooks and execute them to convert value
    val = hooks.reduce(function (_val, hook) {
      return hook(attr, _val, _this);
    }, val);

    // ensure correct numeric values (also accepts NaN and Infinity)
    if (typeof val === 'number') {
      val = new SVGNumber(val);
    } else if (Color.isColor(val)) {
      // ensure full hex color
      val = new Color(val);
    } else if (val.constructor === Array) {
      // Check for plain arrays and parse array values
      val = new SVGArray(val);
    }

    // if the passed attribute is leading...
    if (attr === 'leading') {
      // ... call the leading method instead
      if (this.leading) {
        this.leading(val);
      }
    } else {
      // set given attribute on node
      typeof ns === 'string' ? this.node.setAttributeNS(ns, attr, val.toString()) : this.node.setAttribute(attr, val.toString());
    }

    // rebuild if required
    if (this.rebuild && (attr === 'font-size' || attr === 'x')) {
      this.rebuild();
    }
  }
  return this;
}

var Dom = /*#__PURE__*/function (_EventTarget) {
  function Dom(node, attrs) {
    var _this2;
    _classCallCheck(this, Dom);
    _this2 = _callSuper(this, Dom);
    _this2.node = node;
    _this2.type = node.nodeName;
    if (attrs && node !== attrs) {
      _this2.attr(attrs);
    }
    return _this2;
  }

  // Add given element at a position
  _inherits(Dom, _EventTarget);
  return _createClass(Dom, [{
    key: "add",
    value: function add(element, i) {
      element = makeInstance(element);

      // If non-root svg nodes are added we have to remove their namespaces
      if (element.removeNamespace && this.node instanceof globals.window.SVGElement) {
        element.removeNamespace();
      }
      if (i == null) {
        this.node.appendChild(element.node);
      } else if (element.node !== this.node.childNodes[i]) {
        this.node.insertBefore(element.node, this.node.childNodes[i]);
      }
      return this;
    }

    // Add element to given container and return self
  }, {
    key: "addTo",
    value: function addTo(parent, i) {
      return makeInstance(parent).put(this, i);
    }

    // Returns all child elements
  }, {
    key: "children",
    value: function children() {
      return new List(map$1(this.node.children, function (node) {
        return adopt(node);
      }));
    }

    // Remove all elements in this container
  }, {
    key: "clear",
    value: function clear() {
      // remove children
      while (this.node.hasChildNodes()) {
        this.node.removeChild(this.node.lastChild);
      }
      return this;
    }

    // Clone element
  }, {
    key: "clone",
    value: function clone() {
      var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var assignNewIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      // write dom data to the dom so the clone can pickup the data
      this.writeDataToDom();

      // clone element
      var nodeClone = this.node.cloneNode(deep);
      if (assignNewIds) {
        // assign new id
        nodeClone = assignNewId(nodeClone);
      }
      return new this.constructor(nodeClone);
    }

    // Iterates over all children and invokes a given block
  }, {
    key: "each",
    value: function each(block, deep) {
      var children = this.children();
      var i, il;
      for (i = 0, il = children.length; i < il; i++) {
        block.apply(children[i], [i, children]);
        if (deep) {
          children[i].each(block, deep);
        }
      }
      return this;
    }
  }, {
    key: "element",
    value: function element(nodeName, attrs) {
      return this.put(new Dom(create(nodeName), attrs));
    }

    // Get first child
  }, {
    key: "first",
    value: function first() {
      return adopt(this.node.firstChild);
    }

    // Get a element at the given index
  }, {
    key: "get",
    value: function get(i) {
      return adopt(this.node.childNodes[i]);
    }
  }, {
    key: "getEventHolder",
    value: function getEventHolder() {
      return this.node;
    }
  }, {
    key: "getEventTarget",
    value: function getEventTarget() {
      return this.node;
    }

    // Checks if the given element is a child
  }, {
    key: "has",
    value: function has(element) {
      return this.index(element) >= 0;
    }
  }, {
    key: "html",
    value: function html$1(htmlOrFn, outerHTML) {
      return this.xml(htmlOrFn, outerHTML, html);
    }

    // Get / set id
  }, {
    key: "id",
    value: function id(_id) {
      // generate new id if no id set
      if (typeof _id === 'undefined' && !this.node.id) {
        this.node.id = eid(this.type);
      }

      // don't set directly with this.node.id to make `null` work correctly
      return this.attr('id', _id);
    }

    // Gets index of given element
  }, {
    key: "index",
    value: function index(element) {
      return [].slice.call(this.node.childNodes).indexOf(element.node);
    }

    // Get the last child
  }, {
    key: "last",
    value: function last() {
      return adopt(this.node.lastChild);
    }

    // matches the element vs a css selector
  }, {
    key: "matches",
    value: function matches(selector) {
      var el = this.node;
      var matcher = el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector || null;
      return matcher && matcher.call(el, selector);
    }

    // Returns the parent element instance
  }, {
    key: "parent",
    value: function parent(type) {
      var parent = this;

      // check for parent
      if (!parent.node.parentNode) return null;

      // get parent element
      parent = adopt(parent.node.parentNode);
      if (!type) return parent;

      // loop through ancestors if type is given
      do {
        if (typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent;
      } while (parent = adopt(parent.node.parentNode));
      return parent;
    }

    // Basically does the same as `add()` but returns the added element instead
  }, {
    key: "put",
    value: function put(element, i) {
      element = makeInstance(element);
      this.add(element, i);
      return element;
    }

    // Add element to given container and return container
  }, {
    key: "putIn",
    value: function putIn(parent, i) {
      return makeInstance(parent).add(this, i);
    }

    // Remove element
  }, {
    key: "remove",
    value: function remove() {
      if (this.parent()) {
        this.parent().removeElement(this);
      }
      return this;
    }

    // Remove a given child
  }, {
    key: "removeElement",
    value: function removeElement(element) {
      this.node.removeChild(element.node);
      return this;
    }

    // Replace this with element
  }, {
    key: "replace",
    value: function replace(element) {
      element = makeInstance(element);
      if (this.node.parentNode) {
        this.node.parentNode.replaceChild(element.node, this.node);
      }
      return element;
    }
  }, {
    key: "round",
    value: function round() {
      var precision = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var factor = Math.pow(10, precision);
      var attrs = this.attr(map);
      for (var i in attrs) {
        if (typeof attrs[i] === 'number') {
          attrs[i] = Math.round(attrs[i] * factor) / factor;
        }
      }
      this.attr(attrs);
      return this;
    }

    // Import / Export raw svg
  }, {
    key: "svg",
    value: function svg$1(svgOrFn, outerSVG) {
      return this.xml(svgOrFn, outerSVG, svg);
    }

    // Return id on string conversion
  }, {
    key: "toString",
    value: function toString() {
      return this.id();
    }
  }, {
    key: "words",
    value: function words(text) {
      // This is faster than removing all children and adding a new one
      this.node.textContent = text;
      return this;
    }
  }, {
    key: "wrap",
    value: function wrap(node) {
      var parent = this.parent();
      if (!parent) {
        return this.addTo(node);
      }
      var position = parent.index(this);
      return parent.put(node, position).put(this);
    }

    // write svgjs data to the dom
  }, {
    key: "writeDataToDom",
    value: function writeDataToDom() {
      // dump variables recursively
      this.each(function () {
        this.writeDataToDom();
      });
      return this;
    }

    // Import / Export raw svg
  }, {
    key: "xml",
    value: function xml(xmlOrFn, outerXML, ns) {
      if (typeof xmlOrFn === 'boolean') {
        ns = outerXML;
        outerXML = xmlOrFn;
        xmlOrFn = null;
      }

      // act as getter if no svg string is given
      if (xmlOrFn == null || typeof xmlOrFn === 'function') {
        // The default for exports is, that the outerNode is included
        outerXML = outerXML == null ? true : outerXML;

        // write svgjs data to the dom
        this.writeDataToDom();
        var current = this;

        // An export modifier was passed
        if (xmlOrFn != null) {
          current = adopt(current.node.cloneNode(true));

          // If the user wants outerHTML we need to process this node, too
          if (outerXML) {
            var result = xmlOrFn(current);
            current = result || current;

            // The user does not want this node? Well, then he gets nothing
            if (result === false) return '';
          }

          // Deep loop through all children and apply modifier
          current.each(function () {
            var result = xmlOrFn(this);
            var _this = result || this;

            // If modifier returns false, discard node
            if (result === false) {
              this.remove();

              // If modifier returns new node, use it
            } else if (result && this !== _this) {
              this.replace(_this);
            }
          }, true);
        }

        // Return outer or inner content
        return outerXML ? current.node.outerHTML : current.node.innerHTML;
      }

      // Act as setter if we got a string

      // The default for import is, that the current node is not replaced
      outerXML = outerXML == null ? false : outerXML;

      // Create temporary holder
      var well = create('wrapper', ns);
      var fragment = globals.document.createDocumentFragment();

      // Dump raw svg
      well.innerHTML = xmlOrFn;

      // Transplant nodes into the fragment
      for (var len = well.children.length; len--;) {
        fragment.appendChild(well.firstElementChild);
      }
      var parent = this.parent();

      // Add the whole fragment at once
      return outerXML ? this.replace(fragment) && parent : this.add(fragment);
    }
  }]);
}(EventTarget);
extend(Dom, {
  attr: attr,
  find: find,
  findOne: findOne
});
register(Dom, 'Dom');

var Element = /*#__PURE__*/function (_Dom) {
  function Element(node, attrs) {
    var _this;
    _classCallCheck(this, Element);
    _this = _callSuper(this, Element, [node, attrs]);

    // initialize data object
    _this.dom = {};

    // create circular reference
    _this.node.instance = _this;
    if (node.hasAttribute('svgjs:data')) {
      // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
      _this.setData(JSON.parse(node.getAttribute('svgjs:data')) || {});
    }
    return _this;
  }

  // Move element by its center
  _inherits(Element, _Dom);
  return _createClass(Element, [{
    key: "center",
    value: function center(x, y) {
      return this.cx(x).cy(y);
    }

    // Move by center over x-axis
  }, {
    key: "cx",
    value: function cx(x) {
      return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2);
    }

    // Move by center over y-axis
  }, {
    key: "cy",
    value: function cy(y) {
      return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2);
    }

    // Get defs
  }, {
    key: "defs",
    value: function defs() {
      var root = this.root();
      return root && root.defs();
    }

    // Relative move over x and y axes
  }, {
    key: "dmove",
    value: function dmove(x, y) {
      return this.dx(x).dy(y);
    }

    // Relative move over x axis
  }, {
    key: "dx",
    value: function dx() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.x(new SVGNumber(x).plus(this.x()));
    }

    // Relative move over y axis
  }, {
    key: "dy",
    value: function dy() {
      var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.y(new SVGNumber(y).plus(this.y()));
    }
  }, {
    key: "getEventHolder",
    value: function getEventHolder() {
      return this;
    }

    // Set height of element
  }, {
    key: "height",
    value: function height(_height) {
      return this.attr('height', _height);
    }

    // Move element to given x and y values
  }, {
    key: "move",
    value: function move(x, y) {
      return this.x(x).y(y);
    }

    // return array of all ancestors of given type up to the root svg
  }, {
    key: "parents",
    value: function parents() {
      var until = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root();
      var isSelector = typeof until === 'string';
      if (!isSelector) {
        until = makeInstance(until);
      }
      var parents = new List();
      var parent = this;
      while ((parent = parent.parent()) && parent.node !== globals.document && parent.nodeName !== '#document-fragment') {
        parents.push(parent);
        if (!isSelector && parent.node === until.node) {
          break;
        }
        if (isSelector && parent.matches(until)) {
          break;
        }
        if (parent.node === this.root().node) {
          // We worked our way to the root and didn't match `until`
          return null;
        }
      }
      return parents;
    }

    // Get referenced element form attribute value
  }, {
    key: "reference",
    value: function reference$1(attr) {
      attr = this.attr(attr);
      if (!attr) return null;
      var m = (attr + '').match(reference);
      return m ? makeInstance(m[1]) : null;
    }

    // Get parent document
  }, {
    key: "root",
    value: function root$1() {
      var p = this.parent(getClass(root));
      return p && p.root();
    }

    // set given data to the elements data property
  }, {
    key: "setData",
    value: function setData(o) {
      this.dom = o;
      return this;
    }

    // Set element size to given width and height
  }, {
    key: "size",
    value: function size(width, height) {
      var p = proportionalSize(this, width, height);
      return this.width(new SVGNumber(p.width)).height(new SVGNumber(p.height));
    }

    // Set width of element
  }, {
    key: "width",
    value: function width(_width) {
      return this.attr('width', _width);
    }

    // write svgjs data to the dom
  }, {
    key: "writeDataToDom",
    value: function writeDataToDom() {
      // remove previously set data
      this.node.removeAttribute('svgjs:data');
      if (Object.keys(this.dom).length) {
        this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)); // see #428
      }
      return _superPropGet(Element, "writeDataToDom", this)([]);
    }

    // Move over x-axis
  }, {
    key: "x",
    value: function x(_x) {
      return this.attr('x', _x);
    }

    // Move over y-axis
  }, {
    key: "y",
    value: function y(_y) {
      return this.attr('y', _y);
    }
  }]);
}(Dom);
extend(Element, {
  bbox: bbox,
  rbox: rbox,
  inside: inside,
  point: point,
  ctm: ctm,
  screenCTM: screenCTM
});
register(Element, 'Element');

// Define list of available attributes for stroke and fill
var sugar = {
  stroke: ['color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset'],
  fill: ['color', 'opacity', 'rule'],
  prefix: function prefix(t, a) {
    return a === 'color' ? t : t + '-' + a;
  }
}

// Add sugar for fill and stroke
;
['fill', 'stroke'].forEach(function (m) {
  var extension = {};
  var i;
  extension[m] = function (o) {
    if (typeof o === 'undefined') {
      return this.attr(m);
    }
    if (typeof o === 'string' || o instanceof Color || Color.isRgb(o) || o instanceof Element) {
      this.attr(m, o);
    } else {
      // set all attributes from sugar.fill and sugar.stroke list
      for (i = sugar[m].length - 1; i >= 0; i--) {
        if (o[sugar[m][i]] != null) {
          this.attr(sugar.prefix(m, sugar[m][i]), o[sugar[m][i]]);
        }
      }
    }
    return this;
  };
  registerMethods(['Element', 'Runner'], extension);
});
registerMethods(['Element', 'Runner'], {
  // Let the user set the matrix directly
  matrix: function matrix(mat, b, c, d, e, f) {
    // Act as a getter
    if (mat == null) {
      return new Matrix(this);
    }

    // Act as a setter, the user can pass a matrix or a set of numbers
    return this.attr('transform', new Matrix(mat, b, c, d, e, f));
  },
  // Map rotation to transform
  rotate: function rotate(angle, cx, cy) {
    return this.transform({
      rotate: angle,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map skew to transform
  skew: function skew(x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      skew: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      skew: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  shear: function shear(lam, cx, cy) {
    return this.transform({
      shear: lam,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map scale to transform
  scale: function scale(x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      scale: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      scale: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  // Map translate to transform
  translate: function translate(x, y) {
    return this.transform({
      translate: [x, y]
    }, true);
  },
  // Map relative translations to transform
  relative: function relative(x, y) {
    return this.transform({
      relative: [x, y]
    }, true);
  },
  // Map flip to transform
  flip: function flip() {
    var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'both';
    var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'center';
    if ('xybothtrue'.indexOf(direction) === -1) {
      origin = direction;
      direction = 'both';
    }
    return this.transform({
      flip: direction,
      origin: origin
    }, true);
  },
  // Opacity
  opacity: function opacity(value) {
    return this.attr('opacity', value);
  }
});
registerMethods('radius', {
  // Add x and y radius
  radius: function radius(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
    var type = (this._element || this).type;
    return type === 'radialGradient' ? this.attr('r', new SVGNumber(x)) : this.rx(x).ry(y);
  }
});
registerMethods('Path', {
  // Get path length
  length: function length() {
    return this.node.getTotalLength();
  },
  // Get point at length
  pointAt: function pointAt(length) {
    return new Point(this.node.getPointAtLength(length));
  }
});
registerMethods(['Element', 'Runner'], {
  // Set font
  font: function font(a, v) {
    if (_typeof(a) === 'object') {
      for (v in a) this.font(v, a[v]);
      return this;
    }
    return a === 'leading' ? this.leading(v) : a === 'anchor' ? this.attr('text-anchor', v) : a === 'size' || a === 'family' || a === 'weight' || a === 'stretch' || a === 'variant' || a === 'style' ? this.attr('font-' + a, v) : this.attr(a, v);
  }
});

// Add events to elements
var methods = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mouseleave', 'touchstart', 'touchmove', 'touchleave', 'touchend', 'touchcancel'].reduce(function (last, event) {
  // add event to Element
  var fn = function fn(f) {
    if (f === null) {
      this.off(event);
    } else {
      this.on(event, f);
    }
    return this;
  };
  last[event] = fn;
  return last;
}, {});
registerMethods('Element', methods);

// Reset all transformations
function untransform() {
  return this.attr('transform', null);
}

// merge the whole transformation chain into one matrix and returns it
function matrixify() {
  var matrix = (this.attr('transform') || ''
  // split transformations
  ).split(transforms).slice(0, -1).map(function (str) {
    // generate key => value pairs
    var kv = str.trim().split('(');
    return [kv[0], kv[1].split(delimiter).map(function (str) {
      return parseFloat(str);
    })];
  }).reverse()
  // merge every transformation into one matrix
  .reduce(function (matrix, transform) {
    if (transform[0] === 'matrix') {
      return matrix.lmultiply(Matrix.fromArray(transform[1]));
    }
    return matrix[transform[0]].apply(matrix, transform[1]);
  }, new Matrix());
  return matrix;
}

// add an element to another parent without changing the visual representation on the screen
function toParent(parent, i) {
  if (this === parent) return this;
  var ctm = this.screenCTM();
  var pCtm = parent.screenCTM().inverse();
  this.addTo(parent, i).untransform().transform(pCtm.multiply(ctm));
  return this;
}

// same as above with parent equals root-svg
function toRoot(i) {
  return this.toParent(this.root(), i);
}

// Add transformations
function transform(o, relative) {
  // Act as a getter if no object was passed
  if (o == null || typeof o === 'string') {
    var decomposed = new Matrix(this).decompose();
    return o == null ? decomposed : decomposed[o];
  }
  if (!Matrix.isMatrixLike(o)) {
    // Set the origin according to the defined transform
    o = _objectSpread2(_objectSpread2({}, o), {}, {
      origin: getOrigin(o, this)
    });
  }

  // The user can pass a boolean, an Element or an Matrix or nothing
  var cleanRelative = relative === true ? this : relative || false;
  var result = new Matrix(cleanRelative).transform(o);
  return this.attr('transform', result);
}
registerMethods('Element', {
  untransform: untransform,
  matrixify: matrixify,
  toParent: toParent,
  toRoot: toRoot,
  transform: transform
});

var Container = /*#__PURE__*/function (_Element) {
  function Container() {
    _classCallCheck(this, Container);
    return _callSuper(this, Container, arguments);
  }
  _inherits(Container, _Element);
  return _createClass(Container, [{
    key: "flatten",
    value: function flatten() {
      this.each(function () {
        if (this instanceof Container) {
          return this.flatten().ungroup();
        }
      });
      return this;
    }
  }, {
    key: "ungroup",
    value: function ungroup() {
      var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parent();
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : parent.index(this);
      // when parent != this, we want append all elements to the end
      index = index === -1 ? parent.children().length : index;
      this.each(function (i, children) {
        // reverse each
        return children[children.length - i - 1].toParent(parent, index);
      });
      return this.remove();
    }
  }]);
}(Element);
register(Container, 'Container');

var Defs = /*#__PURE__*/function (_Container) {
  function Defs(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Defs);
    return _callSuper(this, Defs, [nodeOrNew('defs', node), attrs]);
  }
  _inherits(Defs, _Container);
  return _createClass(Defs, [{
    key: "flatten",
    value: function flatten() {
      return this;
    }
  }, {
    key: "ungroup",
    value: function ungroup() {
      return this;
    }
  }]);
}(Container);
register(Defs, 'Defs');

var Shape$1 = /*#__PURE__*/function (_Element) {
  function Shape() {
    _classCallCheck(this, Shape);
    return _callSuper(this, Shape, arguments);
  }
  _inherits(Shape, _Element);
  return _createClass(Shape);
}(Element);
register(Shape$1, 'Shape');

// Radius x value
function rx(rx) {
  return this.attr('rx', rx);
}

// Radius y value
function ry(ry) {
  return this.attr('ry', ry);
}

// Move over x-axis
function x$3(x) {
  return x == null ? this.cx() - this.rx() : this.cx(x + this.rx());
}

// Move over y-axis
function y$3(y) {
  return y == null ? this.cy() - this.ry() : this.cy(y + this.ry());
}

// Move by center over x-axis
function cx$1(x) {
  return this.attr('cx', x);
}

// Move by center over y-axis
function cy$1(y) {
  return this.attr('cy', y);
}

// Set width of element
function width$2(width) {
  return width == null ? this.rx() * 2 : this.rx(new SVGNumber(width).divide(2));
}

// Set height of element
function height$2(height) {
  return height == null ? this.ry() * 2 : this.ry(new SVGNumber(height).divide(2));
}

var circled = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cx: cx$1,
  cy: cy$1,
  height: height$2,
  rx: rx,
  ry: ry,
  width: width$2,
  x: x$3,
  y: y$3
});

var Ellipse = /*#__PURE__*/function (_Shape) {
  function Ellipse(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Ellipse);
    return _callSuper(this, Ellipse, [nodeOrNew('ellipse', node), attrs]);
  }
  _inherits(Ellipse, _Shape);
  return _createClass(Ellipse, [{
    key: "size",
    value: function size(width, height) {
      var p = proportionalSize(this, width, height);
      return this.rx(new SVGNumber(p.width).divide(2)).ry(new SVGNumber(p.height).divide(2));
    }
  }]);
}(Shape$1);
extend(Ellipse, circled);
registerMethods('Container', {
  // Create an ellipse
  ellipse: wrapWithAttrCheck(function () {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
    return this.put(new Ellipse()).size(width, height).move(0, 0);
  })
});
register(Ellipse, 'Ellipse');

var Fragment = /*#__PURE__*/function (_Dom) {
  function Fragment() {
    var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : globals.document.createDocumentFragment();
    _classCallCheck(this, Fragment);
    return _callSuper(this, Fragment, [node]);
  }

  // Import / Export raw xml
  _inherits(Fragment, _Dom);
  return _createClass(Fragment, [{
    key: "xml",
    value: function xml(xmlOrFn, outerXML, ns) {
      if (typeof xmlOrFn === 'boolean') {
        ns = outerXML;
        outerXML = xmlOrFn;
        xmlOrFn = null;
      }

      // because this is a fragment we have to put all elements into a wrapper first
      // before we can get the innerXML from it
      if (xmlOrFn == null || typeof xmlOrFn === 'function') {
        var wrapper = new Dom(create('wrapper', ns));
        wrapper.add(this.node.cloneNode(true));
        return wrapper.xml(false, ns);
      }

      // Act as setter if we got a string
      return _superPropGet(Fragment, "xml", this)([xmlOrFn, false, ns]);
    }
  }]);
}(Dom);
register(Fragment, 'Fragment');

function from(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    fx: new SVGNumber(x),
    fy: new SVGNumber(y)
  }) : this.attr({
    x1: new SVGNumber(x),
    y1: new SVGNumber(y)
  });
}
function to(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    cx: new SVGNumber(x),
    cy: new SVGNumber(y)
  }) : this.attr({
    x2: new SVGNumber(x),
    y2: new SVGNumber(y)
  });
}

var gradiented = /*#__PURE__*/Object.freeze({
  __proto__: null,
  from: from,
  to: to
});

var Gradient = /*#__PURE__*/function (_Container) {
  function Gradient(type, attrs) {
    _classCallCheck(this, Gradient);
    return _callSuper(this, Gradient, [nodeOrNew(type + 'Gradient', typeof type === 'string' ? null : type), attrs]);
  }

  // custom attr to handle transform
  _inherits(Gradient, _Container);
  return _createClass(Gradient, [{
    key: "attr",
    value: function attr(a, b, c) {
      if (a === 'transform') a = 'gradientTransform';
      return _superPropGet(Gradient, "attr", this)([a, b, c]);
    }
  }, {
    key: "bbox",
    value: function bbox() {
      return new Box();
    }
  }, {
    key: "targets",
    value: function targets() {
      return baseFind('svg [fill*=' + this.id() + ']');
    }

    // Alias string conversion to fill
  }, {
    key: "toString",
    value: function toString() {
      return this.url();
    }

    // Update gradient
  }, {
    key: "update",
    value: function update(block) {
      // remove all stops
      this.clear();

      // invoke passed block
      if (typeof block === 'function') {
        block.call(this, this);
      }
      return this;
    }

    // Return the fill id
  }, {
    key: "url",
    value: function url() {
      return 'url(#' + this.id() + ')';
    }
  }]);
}(Container);
extend(Gradient, gradiented);
registerMethods({
  Container: {
    // Create gradient element in defs
    gradient: function gradient() {
      var _this$defs;
      return (_this$defs = this.defs()).gradient.apply(_this$defs, arguments);
    }
  },
  // define gradient
  Defs: {
    gradient: wrapWithAttrCheck(function (type, block) {
      return this.put(new Gradient(type)).update(block);
    })
  }
});
register(Gradient, 'Gradient');

var Pattern = /*#__PURE__*/function (_Container) {
  // Initialize node
  function Pattern(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Pattern);
    return _callSuper(this, Pattern, [nodeOrNew('pattern', node), attrs]);
  }

  // custom attr to handle transform
  _inherits(Pattern, _Container);
  return _createClass(Pattern, [{
    key: "attr",
    value: function attr(a, b, c) {
      if (a === 'transform') a = 'patternTransform';
      return _superPropGet(Pattern, "attr", this)([a, b, c]);
    }
  }, {
    key: "bbox",
    value: function bbox() {
      return new Box();
    }
  }, {
    key: "targets",
    value: function targets() {
      return baseFind('svg [fill*=' + this.id() + ']');
    }

    // Alias string conversion to fill
  }, {
    key: "toString",
    value: function toString() {
      return this.url();
    }

    // Update pattern by rebuilding
  }, {
    key: "update",
    value: function update(block) {
      // remove content
      this.clear();

      // invoke passed block
      if (typeof block === 'function') {
        block.call(this, this);
      }
      return this;
    }

    // Return the fill id
  }, {
    key: "url",
    value: function url() {
      return 'url(#' + this.id() + ')';
    }
  }]);
}(Container);
registerMethods({
  Container: {
    // Create pattern element in defs
    pattern: function pattern() {
      var _this$defs;
      return (_this$defs = this.defs()).pattern.apply(_this$defs, arguments);
    }
  },
  Defs: {
    pattern: wrapWithAttrCheck(function (width, height, block) {
      return this.put(new Pattern()).update(block).attr({
        x: 0,
        y: 0,
        width: width,
        height: height,
        patternUnits: 'userSpaceOnUse'
      });
    })
  }
});
register(Pattern, 'Pattern');

var Image$1 = /*#__PURE__*/function (_Shape) {
  function Image(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Image);
    return _callSuper(this, Image, [nodeOrNew('image', node), attrs]);
  }

  // (re)load image
  _inherits(Image, _Shape);
  return _createClass(Image, [{
    key: "load",
    value: function load(url, callback) {
      if (!url) return this;
      var img = new globals.window.Image();
      on(img, 'load', function (e) {
        var p = this.parent(Pattern);

        // ensure image size
        if (this.width() === 0 && this.height() === 0) {
          this.size(img.width, img.height);
        }
        if (p instanceof Pattern) {
          // ensure pattern size if not set
          if (p.width() === 0 && p.height() === 0) {
            p.size(this.width(), this.height());
          }
        }
        if (typeof callback === 'function') {
          callback.call(this, e);
        }
      }, this);
      on(img, 'load error', function () {
        // dont forget to unbind memory leaking events
        off(img);
      });
      return this.attr('href', img.src = url, xlink);
    }
  }]);
}(Shape$1);
registerAttrHook(function (attr, val, _this) {
  // convert image fill and stroke to patterns
  if (attr === 'fill' || attr === 'stroke') {
    if (isImage.test(val)) {
      val = _this.root().defs().image(val);
    }
  }
  if (val instanceof Image$1) {
    val = _this.root().defs().pattern(0, 0, function (pattern) {
      pattern.add(val);
    });
  }
  return val;
});
registerMethods({
  Container: {
    // create image element, load image and set its size
    image: wrapWithAttrCheck(function (source, callback) {
      return this.put(new Image$1()).size(0, 0).load(source, callback);
    })
  }
});
register(Image$1, 'Image');

var PointArray = /*#__PURE__*/function (_SVGArray) {
  function PointArray() {
    _classCallCheck(this, PointArray);
    return _callSuper(this, PointArray, arguments);
  }
  _inherits(PointArray, _SVGArray);
  return _createClass(PointArray, [{
    key: "bbox",
    value:
    // Get bounding box of points
    function bbox() {
      var maxX = -Infinity;
      var maxY = -Infinity;
      var minX = Infinity;
      var minY = Infinity;
      this.forEach(function (el) {
        maxX = Math.max(el[0], maxX);
        maxY = Math.max(el[1], maxY);
        minX = Math.min(el[0], minX);
        minY = Math.min(el[1], minY);
      });
      return new Box(minX, minY, maxX - minX, maxY - minY);
    }

    // Move point string
  }, {
    key: "move",
    value: function move(x, y) {
      var box = this.bbox();

      // get relative offset
      x -= box.x;
      y -= box.y;

      // move every point
      if (!isNaN(x) && !isNaN(y)) {
        for (var i = this.length - 1; i >= 0; i--) {
          this[i] = [this[i][0] + x, this[i][1] + y];
        }
      }
      return this;
    }

    // Parse point string and flat array
  }, {
    key: "parse",
    value: function parse() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];
      var points = [];

      // if it is an array, we flatten it and therefore clone it to 1 depths
      if (array instanceof Array) {
        array = Array.prototype.concat.apply([], array);
      } else {
        // Else, it is considered as a string
        // parse points
        array = array.trim().split(delimiter).map(parseFloat);
      }

      // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
      // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.
      if (array.length % 2 !== 0) array.pop();

      // wrap points in two-tuples
      for (var i = 0, len = array.length; i < len; i = i + 2) {
        points.push([array[i], array[i + 1]]);
      }
      return points;
    }

    // Resize poly string
  }, {
    key: "size",
    value: function size(width, height) {
      var i;
      var box = this.bbox();

      // recalculate position of all points according to new size
      for (i = this.length - 1; i >= 0; i--) {
        if (box.width) this[i][0] = (this[i][0] - box.x) * width / box.width + box.x;
        if (box.height) this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
      }
      return this;
    }

    // Convert array to line object
  }, {
    key: "toLine",
    value: function toLine() {
      return {
        x1: this[0][0],
        y1: this[0][1],
        x2: this[1][0],
        y2: this[1][1]
      };
    }

    // Convert array to string
  }, {
    key: "toString",
    value: function toString() {
      var array = [];
      // convert to a poly point string
      for (var i = 0, il = this.length; i < il; i++) {
        array.push(this[i].join(','));
      }
      return array.join(' ');
    }
  }, {
    key: "transform",
    value: function transform(m) {
      return this.clone().transformO(m);
    }

    // transform points with matrix (similar to Point.transform)
  }, {
    key: "transformO",
    value: function transformO(m) {
      if (!Matrix.isMatrixLike(m)) {
        m = new Matrix(m);
      }
      for (var i = this.length; i--;) {
        // Perform the matrix multiplication
        var _this$i = _slicedToArray(this[i], 2),
          x = _this$i[0],
          y = _this$i[1];
        this[i][0] = m.a * x + m.c * y + m.e;
        this[i][1] = m.b * x + m.d * y + m.f;
      }
      return this;
    }
  }]);
}(SVGArray);

var MorphArray = PointArray;

// Move by left top corner over x-axis
function x$2(x) {
  return x == null ? this.bbox().x : this.move(x, this.bbox().y);
}

// Move by left top corner over y-axis
function y$2(y) {
  return y == null ? this.bbox().y : this.move(this.bbox().x, y);
}

// Set width of element
function width$1(width) {
  var b = this.bbox();
  return width == null ? b.width : this.size(width, b.height);
}

// Set height of element
function height$1(height) {
  var b = this.bbox();
  return height == null ? b.height : this.size(b.width, height);
}

var pointed = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MorphArray: MorphArray,
  height: height$1,
  width: width$1,
  x: x$2,
  y: y$2
});

var Line = /*#__PURE__*/function (_Shape) {
  // Initialize node
  function Line(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Line);
    return _callSuper(this, Line, [nodeOrNew('line', node), attrs]);
  }

  // Get array
  _inherits(Line, _Shape);
  return _createClass(Line, [{
    key: "array",
    value: function array() {
      return new PointArray([[this.attr('x1'), this.attr('y1')], [this.attr('x2'), this.attr('y2')]]);
    }

    // Move by left top corner
  }, {
    key: "move",
    value: function move(x, y) {
      return this.attr(this.array().move(x, y).toLine());
    }

    // Overwrite native plot() method
  }, {
    key: "plot",
    value: function plot(x1, y1, x2, y2) {
      if (x1 == null) {
        return this.array();
      } else if (typeof y1 !== 'undefined') {
        x1 = {
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2
        };
      } else {
        x1 = new PointArray(x1).toLine();
      }
      return this.attr(x1);
    }

    // Set element size to given width and height
  }, {
    key: "size",
    value: function size(width, height) {
      var p = proportionalSize(this, width, height);
      return this.attr(this.array().size(p.width, p.height).toLine());
    }
  }]);
}(Shape$1);
extend(Line, pointed);
registerMethods({
  Container: {
    // Create a line element
    line: wrapWithAttrCheck(function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      // make sure plot is called as a setter
      // x1 is not necessarily a number, it can also be an array, a string and a PointArray
      return Line.prototype.plot.apply(this.put(new Line()), args[0] != null ? args : [0, 0, 0, 0]);
    })
  }
});
register(Line, 'Line');

var Marker = /*#__PURE__*/function (_Container) {
  // Initialize node
  function Marker(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Marker);
    return _callSuper(this, Marker, [nodeOrNew('marker', node), attrs]);
  }

  // Set height of element
  _inherits(Marker, _Container);
  return _createClass(Marker, [{
    key: "height",
    value: function height(_height) {
      return this.attr('markerHeight', _height);
    }
  }, {
    key: "orient",
    value: function orient(_orient) {
      return this.attr('orient', _orient);
    }

    // Set marker refX and refY
  }, {
    key: "ref",
    value: function ref(x, y) {
      return this.attr('refX', x).attr('refY', y);
    }

    // Return the fill id
  }, {
    key: "toString",
    value: function toString() {
      return 'url(#' + this.id() + ')';
    }

    // Update marker
  }, {
    key: "update",
    value: function update(block) {
      // remove all content
      this.clear();

      // invoke passed block
      if (typeof block === 'function') {
        block.call(this, this);
      }
      return this;
    }

    // Set width of element
  }, {
    key: "width",
    value: function width(_width) {
      return this.attr('markerWidth', _width);
    }
  }]);
}(Container);
registerMethods({
  Container: {
    marker: function marker() {
      var _this$defs;
      // Create marker element in defs
      return (_this$defs = this.defs()).marker.apply(_this$defs, arguments);
    }
  },
  Defs: {
    // Create marker
    marker: wrapWithAttrCheck(function (width, height, block) {
      // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
      return this.put(new Marker()).size(width, height).ref(width / 2, height / 2).viewbox(0, 0, width, height).attr('orient', 'auto').update(block);
    })
  },
  marker: {
    // Create and attach markers
    marker: function marker(_marker, width, height, block) {
      var attr = ['marker'];

      // Build attribute name
      if (_marker !== 'all') attr.push(_marker);
      attr = attr.join('-');

      // Set marker attribute
      _marker = arguments[1] instanceof Marker ? arguments[1] : this.defs().marker(width, height, block);
      return this.attr(attr, _marker);
    }
  }
});
register(Marker, 'Marker');

/***
Base Class
==========
The base stepper class that will be
***/

function makeSetterGetter(k, f) {
  return function (v) {
    if (v == null) return this[k];
    this[k] = v;
    if (f) f.call(this);
    return this;
  };
}
var easing = {
  '-': function _(pos) {
    return pos;
  },
  '<>': function _(pos) {
    return -Math.cos(pos * Math.PI) / 2 + 0.5;
  },
  '>': function _(pos) {
    return Math.sin(pos * Math.PI / 2);
  },
  '<': function _(pos) {
    return -Math.cos(pos * Math.PI / 2) + 1;
  },
  bezier: function bezier(x1, y1, x2, y2) {
    // see https://www.w3.org/TR/css-easing-1/#cubic-bezier-algo
    return function (t) {
      if (t < 0) {
        if (x1 > 0) {
          return y1 / x1 * t;
        } else if (x2 > 0) {
          return y2 / x2 * t;
        } else {
          return 0;
        }
      } else if (t > 1) {
        if (x2 < 1) {
          return (1 - y2) / (1 - x2) * t + (y2 - x2) / (1 - x2);
        } else if (x1 < 1) {
          return (1 - y1) / (1 - x1) * t + (y1 - x1) / (1 - x1);
        } else {
          return 1;
        }
      } else {
        return 3 * t * Math.pow(1 - t, 2) * y1 + 3 * Math.pow(t, 2) * (1 - t) * y2 + Math.pow(t, 3);
      }
    };
  },
  // see https://www.w3.org/TR/css-easing-1/#step-timing-function-algo
  steps: function steps(_steps) {
    var stepPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'end';
    // deal with "jump-" prefix
    stepPosition = stepPosition.split('-').reverse()[0];
    var jumps = _steps;
    if (stepPosition === 'none') {
      --jumps;
    } else if (stepPosition === 'both') {
      ++jumps;
    }

    // The beforeFlag is essentially useless
    return function (t) {
      var beforeFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // Step is called currentStep in referenced url
      var step = Math.floor(t * _steps);
      var jumping = t * step % 1 === 0;
      if (stepPosition === 'start' || stepPosition === 'both') {
        ++step;
      }
      if (beforeFlag && jumping) {
        --step;
      }
      if (t >= 0 && step < 0) {
        step = 0;
      }
      if (t <= 1 && step > jumps) {
        step = jumps;
      }
      return step / jumps;
    };
  }
};
var Stepper = /*#__PURE__*/function () {
  function Stepper() {
    _classCallCheck(this, Stepper);
  }
  return _createClass(Stepper, [{
    key: "done",
    value: function done() {
      return false;
    }
  }]);
}();

/***
Easing Functions
================
***/

var Ease = /*#__PURE__*/function (_Stepper) {
  function Ease() {
    var _this;
    var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : timeline.ease;
    _classCallCheck(this, Ease);
    _this = _callSuper(this, Ease);
    _this.ease = easing[fn] || fn;
    return _this;
  }
  _inherits(Ease, _Stepper);
  return _createClass(Ease, [{
    key: "step",
    value: function step(from, to, pos) {
      if (typeof from !== 'number') {
        return pos < 1 ? from : to;
      }
      return from + (to - from) * this.ease(pos);
    }
  }]);
}(Stepper);

/***
Controller Types
================
***/

var Controller = /*#__PURE__*/function (_Stepper2) {
  function Controller(fn) {
    var _this2;
    _classCallCheck(this, Controller);
    _this2 = _callSuper(this, Controller);
    _this2.stepper = fn;
    return _this2;
  }
  _inherits(Controller, _Stepper2);
  return _createClass(Controller, [{
    key: "done",
    value: function done(c) {
      return c.done;
    }
  }, {
    key: "step",
    value: function step(current, target, dt, c) {
      return this.stepper(current, target, dt, c);
    }
  }]);
}(Stepper);
function recalculate() {
  // Apply the default parameters
  var duration = (this._duration || 500) / 1000;
  var overshoot = this._overshoot || 0;

  // Calculate the PID natural response
  var eps = 1e-10;
  var pi = Math.PI;
  var os = Math.log(overshoot / 100 + eps);
  var zeta = -os / Math.sqrt(pi * pi + os * os);
  var wn = 3.9 / (zeta * duration);

  // Calculate the Spring values
  this.d = 2 * zeta * wn;
  this.k = wn * wn;
}
var Spring = /*#__PURE__*/function (_Controller) {
  function Spring() {
    var _this3;
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
    var overshoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    _classCallCheck(this, Spring);
    _this3 = _callSuper(this, Spring);
    _this3.duration(duration).overshoot(overshoot);
    return _this3;
  }
  _inherits(Spring, _Controller);
  return _createClass(Spring, [{
    key: "step",
    value: function step(current, target, dt, c) {
      if (typeof current === 'string') return current;
      c.done = dt === Infinity;
      if (dt === Infinity) return target;
      if (dt === 0) return current;
      if (dt > 100) dt = 16;
      dt /= 1000;

      // Get the previous velocity
      var velocity = c.velocity || 0;

      // Apply the control to get the new position and store it
      var acceleration = -this.d * velocity - this.k * (current - target);
      var newPosition = current + velocity * dt + acceleration * dt * dt / 2;

      // Store the velocity
      c.velocity = velocity + acceleration * dt;

      // Figure out if we have converged, and if so, pass the value
      c.done = Math.abs(target - newPosition) + Math.abs(velocity) < 0.002;
      return c.done ? target : newPosition;
    }
  }]);
}(Controller);
extend(Spring, {
  duration: makeSetterGetter('_duration', recalculate),
  overshoot: makeSetterGetter('_overshoot', recalculate)
});
var PID = /*#__PURE__*/function (_Controller2) {
  function PID() {
    var _this4;
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.1;
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.01;
    var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var windup = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;
    _classCallCheck(this, PID);
    _this4 = _callSuper(this, PID);
    _this4.p(p).i(i).d(d).windup(windup);
    return _this4;
  }
  _inherits(PID, _Controller2);
  return _createClass(PID, [{
    key: "step",
    value: function step(current, target, dt, c) {
      if (typeof current === 'string') return current;
      c.done = dt === Infinity;
      if (dt === Infinity) return target;
      if (dt === 0) return current;
      var p = target - current;
      var i = (c.integral || 0) + p * dt;
      var d = (p - (c.error || 0)) / dt;
      var windup = this._windup;

      // antiwindup
      if (windup !== false) {
        i = Math.max(-windup, Math.min(i, windup));
      }
      c.error = p;
      c.integral = i;
      c.done = Math.abs(p) < 0.001;
      return c.done ? target : current + (this.P * p + this.I * i + this.D * d);
    }
  }]);
}(Controller);
extend(PID, {
  windup: makeSetterGetter('_windup'),
  p: makeSetterGetter('P'),
  i: makeSetterGetter('I'),
  d: makeSetterGetter('D')
});

var segmentParameters = {
  M: 2,
  L: 2,
  H: 1,
  V: 1,
  C: 6,
  S: 4,
  Q: 4,
  T: 2,
  A: 7,
  Z: 0
};
var pathHandlers = {
  M: function M(c, p, p0) {
    p.x = p0.x = c[0];
    p.y = p0.y = c[1];
    return ['M', p.x, p.y];
  },
  L: function L(c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['L', c[0], c[1]];
  },
  H: function H(c, p) {
    p.x = c[0];
    return ['H', c[0]];
  },
  V: function V(c, p) {
    p.y = c[0];
    return ['V', c[0]];
  },
  C: function C(c, p) {
    p.x = c[4];
    p.y = c[5];
    return ['C', c[0], c[1], c[2], c[3], c[4], c[5]];
  },
  S: function S(c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['S', c[0], c[1], c[2], c[3]];
  },
  Q: function Q(c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['Q', c[0], c[1], c[2], c[3]];
  },
  T: function T(c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['T', c[0], c[1]];
  },
  Z: function Z(c, p, p0) {
    p.x = p0.x;
    p.y = p0.y;
    return ['Z'];
  },
  A: function A(c, p) {
    p.x = c[5];
    p.y = c[6];
    return ['A', c[0], c[1], c[2], c[3], c[4], c[5], c[6]];
  }
};
var mlhvqtcsaz = 'mlhvqtcsaz'.split('');
for (var i$1 = 0, il = mlhvqtcsaz.length; i$1 < il; ++i$1) {
  pathHandlers[mlhvqtcsaz[i$1]] = function (i) {
    return function (c, p, p0) {
      if (i === 'H') c[0] = c[0] + p.x;else if (i === 'V') c[0] = c[0] + p.y;else if (i === 'A') {
        c[5] = c[5] + p.x;
        c[6] = c[6] + p.y;
      } else {
        for (var j = 0, jl = c.length; j < jl; ++j) {
          c[j] = c[j] + (j % 2 ? p.y : p.x);
        }
      }
      return pathHandlers[i](c, p, p0);
    };
  }(mlhvqtcsaz[i$1].toUpperCase());
}
function makeAbsolut(parser) {
  var command = parser.segment[0];
  return pathHandlers[command](parser.segment.slice(1), parser.p, parser.p0);
}
function segmentComplete(parser) {
  return parser.segment.length && parser.segment.length - 1 === segmentParameters[parser.segment[0].toUpperCase()];
}
function startNewSegment(parser, token) {
  parser.inNumber && finalizeNumber(parser, false);
  var pathLetter = isPathLetter.test(token);
  if (pathLetter) {
    parser.segment = [token];
  } else {
    var lastCommand = parser.lastCommand;
    var small = lastCommand.toLowerCase();
    var isSmall = lastCommand === small;
    parser.segment = [small === 'm' ? isSmall ? 'l' : 'L' : lastCommand];
  }
  parser.inSegment = true;
  parser.lastCommand = parser.segment[0];
  return pathLetter;
}
function finalizeNumber(parser, inNumber) {
  if (!parser.inNumber) throw new Error('Parser Error');
  parser.number && parser.segment.push(parseFloat(parser.number));
  parser.inNumber = inNumber;
  parser.number = '';
  parser.pointSeen = false;
  parser.hasExponent = false;
  if (segmentComplete(parser)) {
    finalizeSegment(parser);
  }
}
function finalizeSegment(parser) {
  parser.inSegment = false;
  if (parser.absolute) {
    parser.segment = makeAbsolut(parser);
  }
  parser.segments.push(parser.segment);
}
function isArcFlag(parser) {
  if (!parser.segment.length) return false;
  var isArc = parser.segment[0].toUpperCase() === 'A';
  var length = parser.segment.length;
  return isArc && (length === 4 || length === 5);
}
function isExponential(parser) {
  return parser.lastToken.toUpperCase() === 'E';
}
function pathParser(d) {
  var toAbsolute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var index = 0;
  var token = '';
  var parser = {
    segment: [],
    inNumber: false,
    number: '',
    lastToken: '',
    inSegment: false,
    segments: [],
    pointSeen: false,
    hasExponent: false,
    absolute: toAbsolute,
    p0: new Point(),
    p: new Point()
  };
  while (parser.lastToken = token, token = d.charAt(index++)) {
    if (!parser.inSegment) {
      if (startNewSegment(parser, token)) {
        continue;
      }
    }
    if (token === '.') {
      if (parser.pointSeen || parser.hasExponent) {
        finalizeNumber(parser, false);
        --index;
        continue;
      }
      parser.inNumber = true;
      parser.pointSeen = true;
      parser.number += token;
      continue;
    }
    if (!isNaN(parseInt(token))) {
      if (parser.number === '0' || isArcFlag(parser)) {
        parser.inNumber = true;
        parser.number = token;
        finalizeNumber(parser, true);
        continue;
      }
      parser.inNumber = true;
      parser.number += token;
      continue;
    }
    if (token === ' ' || token === ',') {
      if (parser.inNumber) {
        finalizeNumber(parser, false);
      }
      continue;
    }
    if (token === '-') {
      if (parser.inNumber && !isExponential(parser)) {
        finalizeNumber(parser, false);
        --index;
        continue;
      }
      parser.number += token;
      parser.inNumber = true;
      continue;
    }
    if (token.toUpperCase() === 'E') {
      parser.number += token;
      parser.hasExponent = true;
      continue;
    }
    if (isPathLetter.test(token)) {
      if (parser.inNumber) {
        finalizeNumber(parser, false);
      } else if (!segmentComplete(parser)) {
        throw new Error('parser Error');
      } else {
        finalizeSegment(parser);
      }
      --index;
    }
  }
  if (parser.inNumber) {
    finalizeNumber(parser, false);
  }
  if (parser.inSegment && segmentComplete(parser)) {
    finalizeSegment(parser);
  }
  return parser.segments;
}

function arrayToString(a) {
  var s = '';
  for (var i = 0, il = a.length; i < il; i++) {
    s += a[i][0];
    if (a[i][1] != null) {
      s += a[i][1];
      if (a[i][2] != null) {
        s += ' ';
        s += a[i][2];
        if (a[i][3] != null) {
          s += ' ';
          s += a[i][3];
          s += ' ';
          s += a[i][4];
          if (a[i][5] != null) {
            s += ' ';
            s += a[i][5];
            s += ' ';
            s += a[i][6];
            if (a[i][7] != null) {
              s += ' ';
              s += a[i][7];
            }
          }
        }
      }
    }
  }
  return s + ' ';
}
var PathArray = /*#__PURE__*/function (_SVGArray) {
  function PathArray() {
    _classCallCheck(this, PathArray);
    return _callSuper(this, PathArray, arguments);
  }
  _inherits(PathArray, _SVGArray);
  return _createClass(PathArray, [{
    key: "bbox",
    value:
    // Get bounding box of path
    function bbox() {
      parser().path.setAttribute('d', this.toString());
      return new Box(parser.nodes.path.getBBox());
    }

    // Move path string
  }, {
    key: "move",
    value: function move(x, y) {
      // get bounding box of current situation
      var box = this.bbox();

      // get relative offset
      x -= box.x;
      y -= box.y;
      if (!isNaN(x) && !isNaN(y)) {
        // move every point
        for (var l, i = this.length - 1; i >= 0; i--) {
          l = this[i][0];
          if (l === 'M' || l === 'L' || l === 'T') {
            this[i][1] += x;
            this[i][2] += y;
          } else if (l === 'H') {
            this[i][1] += x;
          } else if (l === 'V') {
            this[i][1] += y;
          } else if (l === 'C' || l === 'S' || l === 'Q') {
            this[i][1] += x;
            this[i][2] += y;
            this[i][3] += x;
            this[i][4] += y;
            if (l === 'C') {
              this[i][5] += x;
              this[i][6] += y;
            }
          } else if (l === 'A') {
            this[i][6] += x;
            this[i][7] += y;
          }
        }
      }
      return this;
    }

    // Absolutize and parse path to array
  }, {
    key: "parse",
    value: function parse() {
      var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'M0 0';
      if (Array.isArray(d)) {
        d = Array.prototype.concat.apply([], d).toString();
      }
      return pathParser(d);
    }

    // Resize path string
  }, {
    key: "size",
    value: function size(width, height) {
      // get bounding box of current situation
      var box = this.bbox();
      var i, l;

      // If the box width or height is 0 then we ignore
      // transformations on the respective axis
      box.width = box.width === 0 ? 1 : box.width;
      box.height = box.height === 0 ? 1 : box.height;

      // recalculate position of all points according to new size
      for (i = this.length - 1; i >= 0; i--) {
        l = this[i][0];
        if (l === 'M' || l === 'L' || l === 'T') {
          this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
          this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
        } else if (l === 'H') {
          this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
        } else if (l === 'V') {
          this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
        } else if (l === 'C' || l === 'S' || l === 'Q') {
          this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
          this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
          this[i][3] = (this[i][3] - box.x) * width / box.width + box.x;
          this[i][4] = (this[i][4] - box.y) * height / box.height + box.y;
          if (l === 'C') {
            this[i][5] = (this[i][5] - box.x) * width / box.width + box.x;
            this[i][6] = (this[i][6] - box.y) * height / box.height + box.y;
          }
        } else if (l === 'A') {
          // resize radii
          this[i][1] = this[i][1] * width / box.width;
          this[i][2] = this[i][2] * height / box.height;

          // move position values
          this[i][6] = (this[i][6] - box.x) * width / box.width + box.x;
          this[i][7] = (this[i][7] - box.y) * height / box.height + box.y;
        }
      }
      return this;
    }

    // Convert array to string
  }, {
    key: "toString",
    value: function toString() {
      return arrayToString(this);
    }
  }]);
}(SVGArray);

var getClassForType = function getClassForType(value) {
  var type = _typeof(value);
  if (type === 'number') {
    return SVGNumber;
  } else if (type === 'string') {
    if (Color.isColor(value)) {
      return Color;
    } else if (delimiter.test(value)) {
      return isPathLetter.test(value) ? PathArray : SVGArray;
    } else if (numberAndUnit.test(value)) {
      return SVGNumber;
    } else {
      return NonMorphable;
    }
  } else if (morphableTypes.indexOf(value.constructor) > -1) {
    return value.constructor;
  } else if (Array.isArray(value)) {
    return SVGArray;
  } else if (type === 'object') {
    return ObjectBag;
  } else {
    return NonMorphable;
  }
};
var Morphable = /*#__PURE__*/function () {
  function Morphable(stepper) {
    _classCallCheck(this, Morphable);
    this._stepper = stepper || new Ease('-');
    this._from = null;
    this._to = null;
    this._type = null;
    this._context = null;
    this._morphObj = null;
  }
  return _createClass(Morphable, [{
    key: "at",
    value: function at(pos) {
      return this._morphObj.morph(this._from, this._to, pos, this._stepper, this._context);
    }
  }, {
    key: "done",
    value: function done() {
      var complete = this._context.map(this._stepper.done).reduce(function (last, curr) {
        return last && curr;
      }, true);
      return complete;
    }
  }, {
    key: "from",
    value: function from(val) {
      if (val == null) {
        return this._from;
      }
      this._from = this._set(val);
      return this;
    }
  }, {
    key: "stepper",
    value: function stepper(_stepper) {
      if (_stepper == null) return this._stepper;
      this._stepper = _stepper;
      return this;
    }
  }, {
    key: "to",
    value: function to(val) {
      if (val == null) {
        return this._to;
      }
      this._to = this._set(val);
      return this;
    }
  }, {
    key: "type",
    value: function type(_type) {
      // getter
      if (_type == null) {
        return this._type;
      }

      // setter
      this._type = _type;
      return this;
    }
  }, {
    key: "_set",
    value: function _set(value) {
      if (!this._type) {
        this.type(getClassForType(value));
      }
      var result = new this._type(value);
      if (this._type === Color) {
        result = this._to ? result[this._to[4]]() : this._from ? result[this._from[4]]() : result;
      }
      if (this._type === ObjectBag) {
        result = this._to ? result.align(this._to) : this._from ? result.align(this._from) : result;
      }
      result = result.toConsumable();
      this._morphObj = this._morphObj || new this._type();
      this._context = this._context || Array.apply(null, Array(result.length)).map(Object).map(function (o) {
        o.done = true;
        return o;
      });
      return result;
    }
  }]);
}();
var NonMorphable = /*#__PURE__*/function () {
  function NonMorphable() {
    _classCallCheck(this, NonMorphable);
    this.init.apply(this, arguments);
  }
  return _createClass(NonMorphable, [{
    key: "init",
    value: function init(val) {
      val = Array.isArray(val) ? val[0] : val;
      this.value = val;
      return this;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.value];
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
  }]);
}();
var TransformBag = /*#__PURE__*/function () {
  function TransformBag() {
    _classCallCheck(this, TransformBag);
    this.init.apply(this, arguments);
  }
  return _createClass(TransformBag, [{
    key: "init",
    value: function init(obj) {
      if (Array.isArray(obj)) {
        obj = {
          scaleX: obj[0],
          scaleY: obj[1],
          shear: obj[2],
          rotate: obj[3],
          translateX: obj[4],
          translateY: obj[5],
          originX: obj[6],
          originY: obj[7]
        };
      }
      Object.assign(this, TransformBag.defaults, obj);
      return this;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var v = this;
      return [v.scaleX, v.scaleY, v.shear, v.rotate, v.translateX, v.translateY, v.originX, v.originY];
    }
  }]);
}();
TransformBag.defaults = {
  scaleX: 1,
  scaleY: 1,
  shear: 0,
  rotate: 0,
  translateX: 0,
  translateY: 0,
  originX: 0,
  originY: 0
};
var sortByKey = function sortByKey(a, b) {
  return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
};
var ObjectBag = /*#__PURE__*/function () {
  function ObjectBag() {
    _classCallCheck(this, ObjectBag);
    this.init.apply(this, arguments);
  }
  return _createClass(ObjectBag, [{
    key: "align",
    value: function align(other) {
      var values = this.values;
      for (var i = 0, il = values.length; i < il; ++i) {
        // If the type is the same we only need to check if the color is in the correct format
        if (values[i + 1] === other[i + 1]) {
          if (values[i + 1] === Color && other[i + 7] !== values[i + 7]) {
            var _this$values;
            var space = other[i + 7];
            var color = new Color(this.values.splice(i + 3, 5))[space]().toArray();
            (_this$values = this.values).splice.apply(_this$values, [i + 3, 0].concat(_toConsumableArray(color)));
          }
          i += values[i + 2] + 2;
          continue;
        }
        if (!other[i + 1]) {
          return this;
        }

        // The types differ, so we overwrite the new type with the old one
        // And initialize it with the types default (e.g. black for color or 0 for number)
        var defaultObject = new other[i + 1]().toArray();

        // Than we fix the values array
        var toDelete = values[i + 2] + 3;
        values.splice.apply(values, [i, toDelete, other[i], other[i + 1], other[i + 2]].concat(_toConsumableArray(defaultObject)));
        i += values[i + 2] + 2;
      }
      return this;
    }
  }, {
    key: "init",
    value: function init(objOrArr) {
      this.values = [];
      if (Array.isArray(objOrArr)) {
        this.values = objOrArr.slice();
        return;
      }
      objOrArr = objOrArr || {};
      var entries = [];
      for (var i in objOrArr) {
        var Type = getClassForType(objOrArr[i]);
        var val = new Type(objOrArr[i]).toArray();
        entries.push([i, Type, val.length].concat(_toConsumableArray(val)));
      }
      entries.sort(sortByKey);
      this.values = entries.reduce(function (last, curr) {
        return last.concat(curr);
      }, []);
      return this;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return this.values;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      var obj = {};
      var arr = this.values;

      // for (var i = 0, len = arr.length; i < len; i += 2) {
      while (arr.length) {
        var key = arr.shift();
        var Type = arr.shift();
        var num = arr.shift();
        var values = arr.splice(0, num);
        obj[key] = new Type(values); // .valueOf()
      }
      return obj;
    }
  }]);
}();
var morphableTypes = [NonMorphable, TransformBag, ObjectBag];
function registerMorphableType() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  morphableTypes.push.apply(morphableTypes, _toConsumableArray([].concat(type)));
}
function makeMorphable() {
  extend(morphableTypes, {
    to: function to(val) {
      return new Morphable().type(this.constructor).from(this.toArray()) // this.valueOf())
      .to(val);
    },
    fromArray: function fromArray(arr) {
      this.init(arr);
      return this;
    },
    toConsumable: function toConsumable() {
      return this.toArray();
    },
    morph: function morph(from, to, pos, stepper, context) {
      var mapper = function mapper(i, index) {
        return stepper.step(i, to[index], pos, context[index], context);
      };
      return this.fromArray(from.map(mapper));
    }
  });
}

var Path = /*#__PURE__*/function (_Shape) {
  // Initialize node
  function Path(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Path);
    return _callSuper(this, Path, [nodeOrNew('path', node), attrs]);
  }

  // Get array
  _inherits(Path, _Shape);
  return _createClass(Path, [{
    key: "array",
    value: function array() {
      return this._array || (this._array = new PathArray(this.attr('d')));
    }

    // Clear array cache
  }, {
    key: "clear",
    value: function clear() {
      delete this._array;
      return this;
    }

    // Set height of element
  }, {
    key: "height",
    value: function height(_height) {
      return _height == null ? this.bbox().height : this.size(this.bbox().width, _height);
    }

    // Move by left top corner
  }, {
    key: "move",
    value: function move(x, y) {
      return this.attr('d', this.array().move(x, y));
    }

    // Plot new path
  }, {
    key: "plot",
    value: function plot(d) {
      return d == null ? this.array() : this.clear().attr('d', typeof d === 'string' ? d : this._array = new PathArray(d));
    }

    // Set element size to given width and height
  }, {
    key: "size",
    value: function size(width, height) {
      var p = proportionalSize(this, width, height);
      return this.attr('d', this.array().size(p.width, p.height));
    }

    // Set width of element
  }, {
    key: "width",
    value: function width(_width) {
      return _width == null ? this.bbox().width : this.size(_width, this.bbox().height);
    }

    // Move by left top corner over x-axis
  }, {
    key: "x",
    value: function x(_x) {
      return _x == null ? this.bbox().x : this.move(_x, this.bbox().y);
    }

    // Move by left top corner over y-axis
  }, {
    key: "y",
    value: function y(_y) {
      return _y == null ? this.bbox().y : this.move(this.bbox().x, _y);
    }
  }]);
}(Shape$1); // Define morphable array
Path.prototype.MorphArray = PathArray;

// Add parent method
registerMethods({
  Container: {
    // Create a wrapped path element
    path: wrapWithAttrCheck(function (d) {
      // make sure plot is called as a setter
      return this.put(new Path()).plot(d || new PathArray());
    })
  }
});
register(Path, 'Path');

// Get array
function array() {
  return this._array || (this._array = new PointArray(this.attr('points')));
}

// Clear array cache
function clear() {
  delete this._array;
  return this;
}

// Move by left top corner
function move$2(x, y) {
  return this.attr('points', this.array().move(x, y));
}

// Plot new path
function plot(p) {
  return p == null ? this.array() : this.clear().attr('points', typeof p === 'string' ? p : this._array = new PointArray(p));
}

// Set element size to given width and height
function size$1(width, height) {
  var p = proportionalSize(this, width, height);
  return this.attr('points', this.array().size(p.width, p.height));
}

var poly = /*#__PURE__*/Object.freeze({
  __proto__: null,
  array: array,
  clear: clear,
  move: move$2,
  plot: plot,
  size: size$1
});

var Polygon = /*#__PURE__*/function (_Shape) {
  // Initialize node
  function Polygon(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Polygon);
    return _callSuper(this, Polygon, [nodeOrNew('polygon', node), attrs]);
  }
  _inherits(Polygon, _Shape);
  return _createClass(Polygon);
}(Shape$1);
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polygon: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polygon()).plot(p || new PointArray());
    })
  }
});
extend(Polygon, pointed);
extend(Polygon, poly);
register(Polygon, 'Polygon');

var Polyline = /*#__PURE__*/function (_Shape) {
  // Initialize node
  function Polyline(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Polyline);
    return _callSuper(this, Polyline, [nodeOrNew('polyline', node), attrs]);
  }
  _inherits(Polyline, _Shape);
  return _createClass(Polyline);
}(Shape$1);
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polyline: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polyline()).plot(p || new PointArray());
    })
  }
});
extend(Polyline, pointed);
extend(Polyline, poly);
register(Polyline, 'Polyline');

var Rect = /*#__PURE__*/function (_Shape) {
  // Initialize node
  function Rect(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Rect);
    return _callSuper(this, Rect, [nodeOrNew('rect', node), attrs]);
  }
  _inherits(Rect, _Shape);
  return _createClass(Rect);
}(Shape$1);
extend(Rect, {
  rx: rx,
  ry: ry
});
registerMethods({
  Container: {
    // Create a rect element
    rect: wrapWithAttrCheck(function (width, height) {
      return this.put(new Rect()).size(width, height);
    })
  }
});
register(Rect, 'Rect');

var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);
    this._first = null;
    this._last = null;
  }

  // Shows us the first item in the list
  return _createClass(Queue, [{
    key: "first",
    value: function first() {
      return this._first && this._first.value;
    }

    // Shows us the last item in the list
  }, {
    key: "last",
    value: function last() {
      return this._last && this._last.value;
    }
  }, {
    key: "push",
    value: function push(value) {
      // An item stores an id and the provided value
      var item = typeof value.next !== 'undefined' ? value : {
        value: value,
        next: null,
        prev: null
      };

      // Deal with the queue being empty or populated
      if (this._last) {
        item.prev = this._last;
        this._last.next = item;
        this._last = item;
      } else {
        this._last = item;
        this._first = item;
      }

      // Return the current item
      return item;
    }

    // Removes the item that was returned from the push
  }, {
    key: "remove",
    value: function remove(item) {
      // Relink the previous item
      if (item.prev) item.prev.next = item.next;
      if (item.next) item.next.prev = item.prev;
      if (item === this._last) this._last = item.prev;
      if (item === this._first) this._first = item.next;

      // Invalidate item
      item.prev = null;
      item.next = null;
    }
  }, {
    key: "shift",
    value: function shift() {
      // Check if we have a value
      var remove = this._first;
      if (!remove) return null;

      // If we do, remove it and relink things
      this._first = remove.next;
      if (this._first) this._first.prev = null;
      this._last = this._first ? this._last : null;
      return remove.value;
    }
  }]);
}();

var Animator = {
  nextDraw: null,
  frames: new Queue(),
  timeouts: new Queue(),
  immediates: new Queue(),
  timer: function timer() {
    return globals.window.performance || globals.window.Date;
  },
  transforms: [],
  frame: function frame(fn) {
    // Store the node
    var node = Animator.frames.push({
      run: fn
    });

    // Request an animation frame if we don't have one
    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    // Return the node so we can remove it easily
    return node;
  },
  timeout: function timeout(fn, delay) {
    delay = delay || 0;

    // Work out when the event should fire
    var time = Animator.timer().now() + delay;

    // Add the timeout to the end of the queue
    var node = Animator.timeouts.push({
      run: fn,
      time: time
    });

    // Request another animation frame if we need one
    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }
    return node;
  },
  immediate: function immediate(fn) {
    // Add the immediate fn to the end of the queue
    var node = Animator.immediates.push(fn);
    // Request another animation frame if we need one
    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }
    return node;
  },
  cancelFrame: function cancelFrame(node) {
    node != null && Animator.frames.remove(node);
  },
  clearTimeout: function clearTimeout(node) {
    node != null && Animator.timeouts.remove(node);
  },
  cancelImmediate: function cancelImmediate(node) {
    node != null && Animator.immediates.remove(node);
  },
  _draw: function _draw(now) {
    // Run all the timeouts we can run, if they are not ready yet, add them
    // to the end of the queue immediately! (bad timeouts!!! [sarcasm])
    var nextTimeout = null;
    var lastTimeout = Animator.timeouts.last();
    while (nextTimeout = Animator.timeouts.shift()) {
      // Run the timeout if its time, or push it to the end
      if (now >= nextTimeout.time) {
        nextTimeout.run();
      } else {
        Animator.timeouts.push(nextTimeout);
      }

      // If we hit the last item, we should stop shifting out more items
      if (nextTimeout === lastTimeout) break;
    }

    // Run all of the animation frames
    var nextFrame = null;
    var lastFrame = Animator.frames.last();
    while (nextFrame !== lastFrame && (nextFrame = Animator.frames.shift())) {
      nextFrame.run(now);
    }
    var nextImmediate = null;
    while (nextImmediate = Animator.immediates.shift()) {
      nextImmediate();
    }

    // If we have remaining timeouts or frames, draw until we don't anymore
    Animator.nextDraw = Animator.timeouts.first() || Animator.frames.first() ? globals.window.requestAnimationFrame(Animator._draw) : null;
  }
};

var makeSchedule = function makeSchedule(runnerInfo) {
  var start = runnerInfo.start;
  var duration = runnerInfo.runner.duration();
  var end = start + duration;
  return {
    start: start,
    duration: duration,
    end: end,
    runner: runnerInfo.runner
  };
};
var defaultSource = function defaultSource() {
  var w = globals.window;
  return (w.performance || w.Date).now();
};
var Timeline$1 = /*#__PURE__*/function (_EventTarget) {
  // Construct a new timeline on the given element
  function Timeline() {
    var _this;
    var timeSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSource;
    _classCallCheck(this, Timeline);
    _this = _callSuper(this, Timeline);
    _this._timeSource = timeSource;

    // Store the timing variables
    _this._startTime = 0;
    _this._speed = 1.0;

    // Determines how long a runner is hold in memory. Can be a dt or true/false
    _this._persist = 0;

    // Keep track of the running animations and their starting parameters
    _this._nextFrame = null;
    _this._paused = true;
    _this._runners = [];
    _this._runnerIds = [];
    _this._lastRunnerId = -1;
    _this._time = 0;
    _this._lastSourceTime = 0;
    _this._lastStepTime = 0;

    // Make sure that step is always called in class context
    _this._step = _this._stepFn.bind(_this, false);
    _this._stepImmediate = _this._stepFn.bind(_this, true);
    return _this;
  }
  _inherits(Timeline, _EventTarget);
  return _createClass(Timeline, [{
    key: "active",
    value: function active() {
      return !!this._nextFrame;
    }
  }, {
    key: "finish",
    value: function finish() {
      // Go to end and pause
      this.time(this.getEndTimeOfTimeline() + 1);
      return this.pause();
    }

    // Calculates the end of the timeline
  }, {
    key: "getEndTime",
    value: function getEndTime() {
      var lastRunnerInfo = this.getLastRunnerInfo();
      var lastDuration = lastRunnerInfo ? lastRunnerInfo.runner.duration() : 0;
      var lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
      return lastStartTime + lastDuration;
    }
  }, {
    key: "getEndTimeOfTimeline",
    value: function getEndTimeOfTimeline() {
      var endTimes = this._runners.map(function (i) {
        return i.start + i.runner.duration();
      });
      return Math.max.apply(Math, [0].concat(_toConsumableArray(endTimes)));
    }
  }, {
    key: "getLastRunnerInfo",
    value: function getLastRunnerInfo() {
      return this.getRunnerInfoById(this._lastRunnerId);
    }
  }, {
    key: "getRunnerInfoById",
    value: function getRunnerInfoById(id) {
      return this._runners[this._runnerIds.indexOf(id)] || null;
    }
  }, {
    key: "pause",
    value: function pause() {
      this._paused = true;
      return this._continue();
    }
  }, {
    key: "persist",
    value: function persist(dtOrForever) {
      if (dtOrForever == null) return this._persist;
      this._persist = dtOrForever;
      return this;
    }
  }, {
    key: "play",
    value: function play() {
      // Now make sure we are not paused and continue the animation
      this._paused = false;
      return this.updateTime()._continue();
    }
  }, {
    key: "reverse",
    value: function reverse(yes) {
      var currentSpeed = this.speed();
      if (yes == null) return this.speed(-currentSpeed);
      var positive = Math.abs(currentSpeed);
      return this.speed(yes ? -positive : positive);
    }

    // schedules a runner on the timeline
  }, {
    key: "schedule",
    value: function schedule(runner, delay, when) {
      if (runner == null) {
        return this._runners.map(makeSchedule);
      }

      // The start time for the next animation can either be given explicitly,
      // derived from the current timeline time or it can be relative to the
      // last start time to chain animations directly

      var absoluteStartTime = 0;
      var endTime = this.getEndTime();
      delay = delay || 0;

      // Work out when to start the animation
      if (when == null || when === 'last' || when === 'after') {
        // Take the last time and increment
        absoluteStartTime = endTime;
      } else if (when === 'absolute' || when === 'start') {
        absoluteStartTime = delay;
        delay = 0;
      } else if (when === 'now') {
        absoluteStartTime = this._time;
      } else if (when === 'relative') {
        var _runnerInfo = this.getRunnerInfoById(runner.id);
        if (_runnerInfo) {
          absoluteStartTime = _runnerInfo.start + delay;
          delay = 0;
        }
      } else if (when === 'with-last') {
        var lastRunnerInfo = this.getLastRunnerInfo();
        var lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
        absoluteStartTime = lastStartTime;
      } else {
        throw new Error('Invalid value for the "when" parameter');
      }

      // Manage runner
      runner.unschedule();
      runner.timeline(this);
      var persist = runner.persist();
      var runnerInfo = {
        persist: persist === null ? this._persist : persist,
        start: absoluteStartTime + delay,
        runner: runner
      };
      this._lastRunnerId = runner.id;
      this._runners.push(runnerInfo);
      this._runners.sort(function (a, b) {
        return a.start - b.start;
      });
      this._runnerIds = this._runners.map(function (info) {
        return info.runner.id;
      });
      this.updateTime()._continue();
      return this;
    }
  }, {
    key: "seek",
    value: function seek(dt) {
      return this.time(this._time + dt);
    }
  }, {
    key: "source",
    value: function source(fn) {
      if (fn == null) return this._timeSource;
      this._timeSource = fn;
      return this;
    }
  }, {
    key: "speed",
    value: function speed(_speed) {
      if (_speed == null) return this._speed;
      this._speed = _speed;
      return this;
    }
  }, {
    key: "stop",
    value: function stop() {
      // Go to start and pause
      this.time(0);
      return this.pause();
    }
  }, {
    key: "time",
    value: function time(_time) {
      if (_time == null) return this._time;
      this._time = _time;
      return this._continue(true);
    }

    // Remove the runner from this timeline
  }, {
    key: "unschedule",
    value: function unschedule(runner) {
      var index = this._runnerIds.indexOf(runner.id);
      if (index < 0) return this;
      this._runners.splice(index, 1);
      this._runnerIds.splice(index, 1);
      runner.timeline(null);
      return this;
    }

    // Makes sure, that after pausing the time doesn't jump
  }, {
    key: "updateTime",
    value: function updateTime() {
      if (!this.active()) {
        this._lastSourceTime = this._timeSource();
      }
      return this;
    }

    // Checks if we are running and continues the animation
  }, {
    key: "_continue",
    value: function _continue() {
      var immediateStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      Animator.cancelFrame(this._nextFrame);
      this._nextFrame = null;
      if (immediateStep) return this._stepImmediate();
      if (this._paused) return this;
      this._nextFrame = Animator.frame(this._step);
      return this;
    }
  }, {
    key: "_stepFn",
    value: function _stepFn() {
      var immediateStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // Get the time delta from the last time and update the time
      var time = this._timeSource();
      var dtSource = time - this._lastSourceTime;
      if (immediateStep) dtSource = 0;
      var dtTime = this._speed * dtSource + (this._time - this._lastStepTime);
      this._lastSourceTime = time;

      // Only update the time if we use the timeSource.
      // Otherwise use the current time
      if (!immediateStep) {
        // Update the time
        this._time += dtTime;
        this._time = this._time < 0 ? 0 : this._time;
      }
      this._lastStepTime = this._time;
      this.fire('time', this._time);

      // This is for the case that the timeline was seeked so that the time
      // is now before the startTime of the runner. That is why we need to set
      // the runner to position 0

      // FIXME:
      // However, resetting in insertion order leads to bugs. Considering the case,
      // where 2 runners change the same attribute but in different times,
      // resetting both of them will lead to the case where the later defined
      // runner always wins the reset even if the other runner started earlier
      // and therefore should win the attribute battle
      // this can be solved by resetting them backwards
      for (var k = this._runners.length; k--;) {
        // Get and run the current runner and ignore it if its inactive
        var runnerInfo = this._runners[k];
        var runner = runnerInfo.runner;

        // Make sure that we give the actual difference
        // between runner start time and now
        var dtToStart = this._time - runnerInfo.start;

        // Dont run runner if not started yet
        // and try to reset it
        if (dtToStart <= 0) {
          runner.reset();
        }
      }

      // Run all of the runners directly
      var runnersLeft = false;
      for (var i = 0, len = this._runners.length; i < len; i++) {
        // Get and run the current runner and ignore it if its inactive
        var _runnerInfo2 = this._runners[i];
        var _runner = _runnerInfo2.runner;
        var dt = dtTime;

        // Make sure that we give the actual difference
        // between runner start time and now
        var _dtToStart = this._time - _runnerInfo2.start;

        // Dont run runner if not started yet
        if (_dtToStart <= 0) {
          runnersLeft = true;
          continue;
        } else if (_dtToStart < dt) {
          // Adjust dt to make sure that animation is on point
          dt = _dtToStart;
        }
        if (!_runner.active()) continue;

        // If this runner is still going, signal that we need another animation
        // frame, otherwise, remove the completed runner
        var finished = _runner.step(dt).done;
        if (!finished) {
          runnersLeft = true;
          // continue
        } else if (_runnerInfo2.persist !== true) {
          // runner is finished. And runner might get removed
          var endTime = _runner.duration() - _runner.time() + this._time;
          if (endTime + _runnerInfo2.persist < this._time) {
            // Delete runner and correct index
            _runner.unschedule();
            --i;
            --len;
          }
        }
      }

      // Basically: we continue when there are runners right from us in time
      // when -->, and when runners are left from us when <--
      if (runnersLeft && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0) {
        this._continue();
      } else {
        this.pause();
        this.fire('finished');
      }
      return this;
    }
  }]);
}(EventTarget);
registerMethods({
  Element: {
    timeline: function timeline(_timeline) {
      if (_timeline == null) {
        this._timeline = this._timeline || new Timeline$1();
        return this._timeline;
      } else {
        this._timeline = _timeline;
        return this;
      }
    }
  }
});

var Runner = /*#__PURE__*/function (_EventTarget) {
  function Runner(options) {
    var _this;
    _classCallCheck(this, Runner);
    _this = _callSuper(this, Runner);

    // Store a unique id on the runner, so that we can identify it later
    _this.id = Runner.id++;

    // Ensure a default value
    options = options == null ? timeline.duration : options;

    // Ensure that we get a controller
    options = typeof options === 'function' ? new Controller(options) : options;

    // Declare all of the variables
    _this._element = null;
    _this._timeline = null;
    _this.done = false;
    _this._queue = [];

    // Work out the stepper and the duration
    _this._duration = typeof options === 'number' && options;
    _this._isDeclarative = options instanceof Controller;
    _this._stepper = _this._isDeclarative ? options : new Ease();

    // We copy the current values from the timeline because they can change
    _this._history = {};

    // Store the state of the runner
    _this.enabled = true;
    _this._time = 0;
    _this._lastTime = 0;

    // At creation, the runner is in reset state
    _this._reseted = true;

    // Save transforms applied to this runner
    _this.transforms = new Matrix();
    _this.transformId = 1;

    // Looping variables
    _this._haveReversed = false;
    _this._reverse = false;
    _this._loopsDone = 0;
    _this._swing = false;
    _this._wait = 0;
    _this._times = 1;
    _this._frameId = null;

    // Stores how long a runner is stored after being done
    _this._persist = _this._isDeclarative ? true : null;
    return _this;
  }
  _inherits(Runner, _EventTarget);
  return _createClass(Runner, [{
    key: "active",
    value: function active(enabled) {
      if (enabled == null) return this.enabled;
      this.enabled = enabled;
      return this;
    }

    /*
    Private Methods
    ===============
    Methods that shouldn't be used externally
    */
  }, {
    key: "addTransform",
    value: function addTransform(transform, index) {
      this.transforms.lmultiplyO(transform);
      return this;
    }
  }, {
    key: "after",
    value: function after(fn) {
      return this.on('finished', fn);
    }
  }, {
    key: "animate",
    value: function animate(duration, delay, when) {
      var o = Runner.sanitise(duration, delay, when);
      var runner = new Runner(o.duration);
      if (this._timeline) runner.timeline(this._timeline);
      if (this._element) runner.element(this._element);
      return runner.loop(o).schedule(o.delay, o.when);
    }
  }, {
    key: "clearTransform",
    value: function clearTransform() {
      this.transforms = new Matrix();
      return this;
    }

    // TODO: Keep track of all transformations so that deletion is faster
  }, {
    key: "clearTransformsFromQueue",
    value: function clearTransformsFromQueue() {
      if (!this.done || !this._timeline || !this._timeline._runnerIds.includes(this.id)) {
        this._queue = this._queue.filter(function (item) {
          return !item.isTransform;
        });
      }
    }
  }, {
    key: "delay",
    value: function delay(_delay) {
      return this.animate(0, _delay);
    }
  }, {
    key: "duration",
    value: function duration() {
      return this._times * (this._wait + this._duration) - this._wait;
    }
  }, {
    key: "during",
    value: function during(fn) {
      return this.queue(null, fn);
    }
  }, {
    key: "ease",
    value: function ease(fn) {
      this._stepper = new Ease(fn);
      return this;
    }
    /*
    Runner Definitions
    ==================
    These methods help us define the runtime behaviour of the Runner or they
    help us make new runners from the current runner
    */
  }, {
    key: "element",
    value: function element(_element) {
      if (_element == null) return this._element;
      this._element = _element;
      _element._prepareRunner();
      return this;
    }
  }, {
    key: "finish",
    value: function finish() {
      return this.step(Infinity);
    }
  }, {
    key: "loop",
    value: function loop(times, swing, wait) {
      // Deal with the user passing in an object
      if (_typeof(times) === 'object') {
        swing = times.swing;
        wait = times.wait;
        times = times.times;
      }

      // Sanitise the values and store them
      this._times = times || Infinity;
      this._swing = swing || false;
      this._wait = wait || 0;

      // Allow true to be passed
      if (this._times === true) {
        this._times = Infinity;
      }
      return this;
    }
  }, {
    key: "loops",
    value: function loops(p) {
      var loopDuration = this._duration + this._wait;
      if (p == null) {
        var loopsDone = Math.floor(this._time / loopDuration);
        var relativeTime = this._time - loopsDone * loopDuration;
        var position = relativeTime / this._duration;
        return Math.min(loopsDone + position, this._times);
      }
      var whole = Math.floor(p);
      var partial = p % 1;
      var time = loopDuration * whole + this._duration * partial;
      return this.time(time);
    }
  }, {
    key: "persist",
    value: function persist(dtOrForever) {
      if (dtOrForever == null) return this._persist;
      this._persist = dtOrForever;
      return this;
    }
  }, {
    key: "position",
    value: function position(p) {
      // Get all of the variables we need
      var x = this._time;
      var d = this._duration;
      var w = this._wait;
      var t = this._times;
      var s = this._swing;
      var r = this._reverse;
      var position;
      if (p == null) {
        /*
        This function converts a time to a position in the range [0, 1]
        The full explanation can be found in this desmos demonstration
          https://www.desmos.com/calculator/u4fbavgche
        The logic is slightly simplified here because we can use booleans
        */

        // Figure out the value without thinking about the start or end time
        var f = function f(x) {
          var swinging = s * Math.floor(x % (2 * (w + d)) / (w + d));
          var backwards = swinging && !r || !swinging && r;
          var uncliped = Math.pow(-1, backwards) * (x % (w + d)) / d + backwards;
          var clipped = Math.max(Math.min(uncliped, 1), 0);
          return clipped;
        };

        // Figure out the value by incorporating the start time
        var endTime = t * (w + d) - w;
        position = x <= 0 ? Math.round(f(1e-5)) : x < endTime ? f(x) : Math.round(f(endTime - 1e-5));
        return position;
      }

      // Work out the loops done and add the position to the loops done
      var loopsDone = Math.floor(this.loops());
      var swingForward = s && loopsDone % 2 === 0;
      var forwards = swingForward && !r || r && swingForward;
      position = loopsDone + (forwards ? p : 1 - p);
      return this.loops(position);
    }
  }, {
    key: "progress",
    value: function progress(p) {
      if (p == null) {
        return Math.min(1, this._time / this.duration());
      }
      return this.time(p * this.duration());
    }

    /*
    Basic Functionality
    ===================
    These methods allow us to attach basic functions to the runner directly
    */
  }, {
    key: "queue",
    value: function queue(initFn, runFn, retargetFn, isTransform) {
      this._queue.push({
        initialiser: initFn || noop,
        runner: runFn || noop,
        retarget: retargetFn,
        isTransform: isTransform,
        initialised: false,
        finished: false
      });
      var timeline = this.timeline();
      timeline && this.timeline()._continue();
      return this;
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this._reseted) return this;
      this.time(0);
      this._reseted = true;
      return this;
    }
  }, {
    key: "reverse",
    value: function reverse(_reverse) {
      this._reverse = _reverse == null ? !this._reverse : _reverse;
      return this;
    }
  }, {
    key: "schedule",
    value: function schedule(timeline, delay, when) {
      // The user doesn't need to pass a timeline if we already have one
      if (!(timeline instanceof Timeline$1)) {
        when = delay;
        delay = timeline;
        timeline = this.timeline();
      }

      // If there is no timeline, yell at the user...
      if (!timeline) {
        throw Error('Runner cannot be scheduled without timeline');
      }

      // Schedule the runner on the timeline provided
      timeline.schedule(this, delay, when);
      return this;
    }
  }, {
    key: "step",
    value: function step(dt) {
      // If we are inactive, this stepper just gets skipped
      if (!this.enabled) return this;

      // Update the time and get the new position
      dt = dt == null ? 16 : dt;
      this._time += dt;
      var position = this.position();

      // Figure out if we need to run the stepper in this frame
      var running = this._lastPosition !== position && this._time >= 0;
      this._lastPosition = position;

      // Figure out if we just started
      var duration = this.duration();
      var justStarted = this._lastTime <= 0 && this._time > 0;
      var justFinished = this._lastTime < duration && this._time >= duration;
      this._lastTime = this._time;
      if (justStarted) {
        this.fire('start', this);
      }

      // Work out if the runner is finished set the done flag here so animations
      // know, that they are running in the last step (this is good for
      // transformations which can be merged)
      var declarative = this._isDeclarative;
      this.done = !declarative && !justFinished && this._time >= duration;

      // Runner is running. So its not in reset state anymore
      this._reseted = false;
      var converged = false;
      // Call initialise and the run function
      if (running || declarative) {
        this._initialise(running);

        // clear the transforms on this runner so they dont get added again and again
        this.transforms = new Matrix();
        converged = this._run(declarative ? dt : position);
        this.fire('step', this);
      }
      // correct the done flag here
      // declarative animations itself know when they converged
      this.done = this.done || converged && declarative;
      if (justFinished) {
        this.fire('finished', this);
      }
      return this;
    }

    /*
    Runner animation methods
    ========================
    Control how the animation plays
    */
  }, {
    key: "time",
    value: function time(_time) {
      if (_time == null) {
        return this._time;
      }
      var dt = _time - this._time;
      this.step(dt);
      return this;
    }
  }, {
    key: "timeline",
    value: function timeline(_timeline) {
      // check explicitly for undefined so we can set the timeline to null
      if (typeof _timeline === 'undefined') return this._timeline;
      this._timeline = _timeline;
      return this;
    }
  }, {
    key: "unschedule",
    value: function unschedule() {
      var timeline = this.timeline();
      timeline && timeline.unschedule(this);
      return this;
    }

    // Run each initialise function in the runner if required
  }, {
    key: "_initialise",
    value: function _initialise(running) {
      // If we aren't running, we shouldn't initialise when not declarative
      if (!running && !this._isDeclarative) return;

      // Loop through all of the initialisers
      for (var i = 0, len = this._queue.length; i < len; ++i) {
        // Get the current initialiser
        var current = this._queue[i];

        // Determine whether we need to initialise
        var needsIt = this._isDeclarative || !current.initialised && running;
        running = !current.finished;

        // Call the initialiser if we need to
        if (needsIt && running) {
          current.initialiser.call(this);
          current.initialised = true;
        }
      }
    }

    // Save a morpher to the morpher list so that we can retarget it later
  }, {
    key: "_rememberMorpher",
    value: function _rememberMorpher(method, morpher) {
      this._history[method] = {
        morpher: morpher,
        caller: this._queue[this._queue.length - 1]
      };

      // We have to resume the timeline in case a controller
      // is already done without being ever run
      // This can happen when e.g. this is done:
      //    anim = el.animate(new SVG.Spring)
      // and later
      //    anim.move(...)
      if (this._isDeclarative) {
        var _timeline2 = this.timeline();
        _timeline2 && _timeline2.play();
      }
    }

    // Try to set the target for a morpher if the morpher exists, otherwise
    // Run each run function for the position or dt given
  }, {
    key: "_run",
    value: function _run(positionOrDt) {
      // Run all of the _queue directly
      var allfinished = true;
      for (var i = 0, len = this._queue.length; i < len; ++i) {
        // Get the current function to run
        var current = this._queue[i];

        // Run the function if its not finished, we keep track of the finished
        // flag for the sake of declarative _queue
        var converged = current.runner.call(this, positionOrDt);
        current.finished = current.finished || converged === true;
        allfinished = allfinished && current.finished;
      }

      // We report when all of the constructors are finished
      return allfinished;
    }

    // do nothing and return false
  }, {
    key: "_tryRetarget",
    value: function _tryRetarget(method, target, extra) {
      if (this._history[method]) {
        // if the last method wasn't even initialised, throw it away
        if (!this._history[method].caller.initialised) {
          var index = this._queue.indexOf(this._history[method].caller);
          this._queue.splice(index, 1);
          return false;
        }

        // for the case of transformations, we use the special retarget function
        // which has access to the outer scope
        if (this._history[method].caller.retarget) {
          this._history[method].caller.retarget.call(this, target, extra);
          // for everything else a simple morpher change is sufficient
        } else {
          this._history[method].morpher.to(target);
        }
        this._history[method].caller.finished = false;
        var _timeline3 = this.timeline();
        _timeline3 && _timeline3.play();
        return true;
      }
      return false;
    }
  }], [{
    key: "sanitise",
    value: function sanitise(duration, delay, when) {
      // Initialise the default parameters
      var times = 1;
      var swing = false;
      var wait = 0;
      duration = duration || timeline.duration;
      delay = delay || timeline.delay;
      when = when || 'last';

      // If we have an object, unpack the values
      if (_typeof(duration) === 'object' && !(duration instanceof Stepper)) {
        delay = duration.delay || delay;
        when = duration.when || when;
        swing = duration.swing || swing;
        times = duration.times || times;
        wait = duration.wait || wait;
        duration = duration.duration || timeline.duration;
      }
      return {
        duration: duration,
        delay: delay,
        swing: swing,
        times: times,
        wait: wait,
        when: when
      };
    }
  }]);
}(EventTarget);
Runner.id = 0;
var FakeRunner = /*#__PURE__*/function () {
  function FakeRunner() {
    var transforms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Matrix();
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
    var done = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    _classCallCheck(this, FakeRunner);
    this.transforms = transforms;
    this.id = id;
    this.done = done;
  }
  return _createClass(FakeRunner, [{
    key: "clearTransformsFromQueue",
    value: function clearTransformsFromQueue() {}
  }]);
}();
extend([Runner, FakeRunner], {
  mergeWith: function mergeWith(runner) {
    return new FakeRunner(runner.transforms.lmultiply(this.transforms), runner.id);
  }
});

// FakeRunner.emptyRunner = new FakeRunner()

var lmultiply = function lmultiply(last, curr) {
  return last.lmultiplyO(curr);
};
var getRunnerTransform = function getRunnerTransform(runner) {
  return runner.transforms;
};
function mergeTransforms() {
  // Find the matrix to apply to the element and apply it
  var runners = this._transformationRunners.runners;
  var netTransform = runners.map(getRunnerTransform).reduce(lmultiply, new Matrix());
  this.transform(netTransform);
  this._transformationRunners.merge();
  if (this._transformationRunners.length() === 1) {
    this._frameId = null;
  }
}
var RunnerArray = /*#__PURE__*/function () {
  function RunnerArray() {
    _classCallCheck(this, RunnerArray);
    this.runners = [];
    this.ids = [];
  }
  return _createClass(RunnerArray, [{
    key: "add",
    value: function add(runner) {
      if (this.runners.includes(runner)) return;
      var id = runner.id + 1;
      this.runners.push(runner);
      this.ids.push(id);
      return this;
    }
  }, {
    key: "clearBefore",
    value: function clearBefore(id) {
      var deleteCnt = this.ids.indexOf(id + 1) || 1;
      this.ids.splice(0, deleteCnt, 0);
      this.runners.splice(0, deleteCnt, new FakeRunner()).forEach(function (r) {
        return r.clearTransformsFromQueue();
      });
      return this;
    }
  }, {
    key: "edit",
    value: function edit(id, newRunner) {
      var index = this.ids.indexOf(id + 1);
      this.ids.splice(index, 1, id + 1);
      this.runners.splice(index, 1, newRunner);
      return this;
    }
  }, {
    key: "getByID",
    value: function getByID(id) {
      return this.runners[this.ids.indexOf(id + 1)];
    }
  }, {
    key: "length",
    value: function length() {
      return this.ids.length;
    }
  }, {
    key: "merge",
    value: function merge() {
      var lastRunner = null;
      for (var i = 0; i < this.runners.length; ++i) {
        var runner = this.runners[i];
        var condition = lastRunner && runner.done && lastRunner.done
        // don't merge runner when persisted on timeline
        && (!runner._timeline || !runner._timeline._runnerIds.includes(runner.id)) && (!lastRunner._timeline || !lastRunner._timeline._runnerIds.includes(lastRunner.id));
        if (condition) {
          // the +1 happens in the function
          this.remove(runner.id);
          var newRunner = runner.mergeWith(lastRunner);
          this.edit(lastRunner.id, newRunner);
          lastRunner = newRunner;
          --i;
        } else {
          lastRunner = runner;
        }
      }
      return this;
    }
  }, {
    key: "remove",
    value: function remove(id) {
      var index = this.ids.indexOf(id + 1);
      this.ids.splice(index, 1);
      this.runners.splice(index, 1);
      return this;
    }
  }]);
}();
registerMethods({
  Element: {
    animate: function animate(duration, delay, when) {
      var o = Runner.sanitise(duration, delay, when);
      var timeline = this.timeline();
      return new Runner(o.duration).loop(o).element(this).timeline(timeline.play()).schedule(o.delay, o.when);
    },
    delay: function delay(by, when) {
      return this.animate(0, by, when);
    },
    // this function searches for all runners on the element and deletes the ones
    // which run before the current one. This is because absolute transformations
    // overwrite anything anyway so there is no need to waste time computing
    // other runners
    _clearTransformRunnersBefore: function _clearTransformRunnersBefore(currentRunner) {
      this._transformationRunners.clearBefore(currentRunner.id);
    },
    _currentTransform: function _currentTransform(current) {
      return this._transformationRunners.runners
      // we need the equal sign here to make sure, that also transformations
      // on the same runner which execute before the current transformation are
      // taken into account
      .filter(function (runner) {
        return runner.id <= current.id;
      }).map(getRunnerTransform).reduce(lmultiply, new Matrix());
    },
    _addRunner: function _addRunner(runner) {
      this._transformationRunners.add(runner);

      // Make sure that the runner merge is executed at the very end of
      // all Animator functions. That is why we use immediate here to execute
      // the merge right after all frames are run
      Animator.cancelImmediate(this._frameId);
      this._frameId = Animator.immediate(mergeTransforms.bind(this));
    },
    _prepareRunner: function _prepareRunner() {
      if (this._frameId == null) {
        this._transformationRunners = new RunnerArray().add(new FakeRunner(new Matrix(this)));
      }
    }
  }
});

// Will output the elements from array A that are not in the array B
var difference = function difference(a, b) {
  return a.filter(function (x) {
    return !b.includes(x);
  });
};
extend(Runner, {
  attr: function attr(a, v) {
    return this.styleAttr('attr', a, v);
  },
  // Add animatable styles
  css: function css(s, v) {
    return this.styleAttr('css', s, v);
  },
  styleAttr: function styleAttr(type, nameOrAttrs, val) {
    if (typeof nameOrAttrs === 'string') {
      return this.styleAttr(type, _defineProperty({}, nameOrAttrs, val));
    }
    var attrs = nameOrAttrs;
    if (this._tryRetarget(type, attrs)) return this;
    var morpher = new Morphable(this._stepper).to(attrs);
    var keys = Object.keys(attrs);
    this.queue(function () {
      morpher = morpher.from(this.element()[type](keys));
    }, function (pos) {
      this.element()[type](morpher.at(pos).valueOf());
      return morpher.done();
    }, function (newToAttrs) {
      // Check if any new keys were added
      var newKeys = Object.keys(newToAttrs);
      var differences = difference(newKeys, keys);

      // If their are new keys, initialize them and add them to morpher
      if (differences.length) {
        // Get the values
        var addedFromAttrs = this.element()[type](differences);

        // Get the already initialized values
        var oldFromAttrs = new ObjectBag(morpher.from()).valueOf();

        // Merge old and new
        Object.assign(oldFromAttrs, addedFromAttrs);
        morpher.from(oldFromAttrs);
      }

      // Get the object from the morpher
      var oldToAttrs = new ObjectBag(morpher.to()).valueOf();

      // Merge in new attributes
      Object.assign(oldToAttrs, newToAttrs);

      // Change morpher target
      morpher.to(oldToAttrs);

      // Make sure that we save the work we did so we don't need it to do again
      keys = newKeys;
      attrs = newToAttrs;
    });
    this._rememberMorpher(type, morpher);
    return this;
  },
  zoom: function zoom(level, point) {
    if (this._tryRetarget('zoom', level, point)) return this;
    var morpher = new Morphable(this._stepper).to(new SVGNumber(level));
    this.queue(function () {
      morpher = morpher.from(this.element().zoom());
    }, function (pos) {
      this.element().zoom(morpher.at(pos), point);
      return morpher.done();
    }, function (newLevel, newPoint) {
      point = newPoint;
      morpher.to(newLevel);
    });
    this._rememberMorpher('zoom', morpher);
    return this;
  },
  /**
   ** absolute transformations
   **/
  //
  // M v -----|-----(D M v = F v)------|----->  T v
  //
  // 1. define the final state (T) and decompose it (once)
  //    t = [tx, ty, the, lam, sy, sx]
  // 2. on every frame: pull the current state of all previous transforms
  //    (M - m can change)
  //   and then write this as m = [tx0, ty0, the0, lam0, sy0, sx0]
  // 3. Find the interpolated matrix F(pos) = m + pos * (t - m)
  //   - Note F(0) = M
  //   - Note F(1) = T
  // 4. Now you get the delta matrix as a result: D = F * inv(M)
  transform: function transform(transforms, relative, affine) {
    // If we have a declarative function, we should retarget it if possible
    relative = transforms.relative || relative;
    if (this._isDeclarative && !relative && this._tryRetarget('transform', transforms)) {
      return this;
    }

    // Parse the parameters
    var isMatrix = Matrix.isMatrixLike(transforms);
    affine = transforms.affine != null ? transforms.affine : affine != null ? affine : !isMatrix;

    // Create a morpher and set its type
    var morpher = new Morphable(this._stepper).type(affine ? TransformBag : Matrix);
    var origin;
    var element;
    var current;
    var currentAngle;
    var startTransform;
    function setup() {
      // make sure element and origin is defined
      element = element || this.element();
      origin = origin || getOrigin(transforms, element);
      startTransform = new Matrix(relative ? undefined : element);

      // add the runner to the element so it can merge transformations
      element._addRunner(this);

      // Deactivate all transforms that have run so far if we are absolute
      if (!relative) {
        element._clearTransformRunnersBefore(this);
      }
    }
    function run(pos) {
      // clear all other transforms before this in case something is saved
      // on this runner. We are absolute. We dont need these!
      if (!relative) this.clearTransform();
      var _Point$transform = new Point(origin).transform(element._currentTransform(this)),
        x = _Point$transform.x,
        y = _Point$transform.y;
      var target = new Matrix(_objectSpread2(_objectSpread2({}, transforms), {}, {
        origin: [x, y]
      }));
      var start = this._isDeclarative && current ? current : startTransform;
      if (affine) {
        target = target.decompose(x, y);
        start = start.decompose(x, y);

        // Get the current and target angle as it was set
        var rTarget = target.rotate;
        var rCurrent = start.rotate;

        // Figure out the shortest path to rotate directly
        var possibilities = [rTarget - 360, rTarget, rTarget + 360];
        var distances = possibilities.map(function (a) {
          return Math.abs(a - rCurrent);
        });
        var shortest = Math.min.apply(Math, _toConsumableArray(distances));
        var index = distances.indexOf(shortest);
        target.rotate = possibilities[index];
      }
      if (relative) {
        // we have to be careful here not to overwrite the rotation
        // with the rotate method of Matrix
        if (!isMatrix) {
          target.rotate = transforms.rotate || 0;
        }
        if (this._isDeclarative && currentAngle) {
          start.rotate = currentAngle;
        }
      }
      morpher.from(start);
      morpher.to(target);
      var affineParameters = morpher.at(pos);
      currentAngle = affineParameters.rotate;
      current = new Matrix(affineParameters);
      this.addTransform(current);
      element._addRunner(this);
      return morpher.done();
    }
    function retarget(newTransforms) {
      // only get a new origin if it changed since the last call
      if ((newTransforms.origin || 'center').toString() !== (transforms.origin || 'center').toString()) {
        origin = getOrigin(newTransforms, element);
      }

      // overwrite the old transformations with the new ones
      transforms = _objectSpread2(_objectSpread2({}, newTransforms), {}, {
        origin: origin
      });
    }
    this.queue(setup, run, retarget, true);
    this._isDeclarative && this._rememberMorpher('transform', morpher);
    return this;
  },
  // Animatable x-axis
  x: function x(_x, relative) {
    return this._queueNumber('x', _x);
  },
  // Animatable y-axis
  y: function y(_y) {
    return this._queueNumber('y', _y);
  },
  dx: function dx() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return this._queueNumberDelta('x', x);
  },
  dy: function dy() {
    var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return this._queueNumberDelta('y', y);
  },
  dmove: function dmove(x, y) {
    return this.dx(x).dy(y);
  },
  _queueNumberDelta: function _queueNumberDelta(method, to) {
    to = new SVGNumber(to);

    // Try to change the target if we have this method already registered
    if (this._tryRetarget(method, to)) return this;

    // Make a morpher and queue the animation
    var morpher = new Morphable(this._stepper).to(to);
    var from = null;
    this.queue(function () {
      from = this.element()[method]();
      morpher.from(from);
      morpher.to(from + to);
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }, function (newTo) {
      morpher.to(from + new SVGNumber(newTo));
    });

    // Register the morpher so that if it is changed again, we can retarget it
    this._rememberMorpher(method, morpher);
    return this;
  },
  _queueObject: function _queueObject(method, to) {
    // Try to change the target if we have this method already registered
    if (this._tryRetarget(method, to)) return this;

    // Make a morpher and queue the animation
    var morpher = new Morphable(this._stepper).to(to);
    this.queue(function () {
      morpher.from(this.element()[method]());
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    });

    // Register the morpher so that if it is changed again, we can retarget it
    this._rememberMorpher(method, morpher);
    return this;
  },
  _queueNumber: function _queueNumber(method, value) {
    return this._queueObject(method, new SVGNumber(value));
  },
  // Animatable center x-axis
  cx: function cx(x) {
    return this._queueNumber('cx', x);
  },
  // Animatable center y-axis
  cy: function cy(y) {
    return this._queueNumber('cy', y);
  },
  // Add animatable move
  move: function move(x, y) {
    return this.x(x).y(y);
  },
  // Add animatable center
  center: function center(x, y) {
    return this.cx(x).cy(y);
  },
  // Add animatable size
  size: function size(width, height) {
    // animate bbox based size for all other elements
    var box;
    if (!width || !height) {
      box = this._element.bbox();
    }
    if (!width) {
      width = box.width / box.height * height;
    }
    if (!height) {
      height = box.height / box.width * width;
    }
    return this.width(width).height(height);
  },
  // Add animatable width
  width: function width(_width) {
    return this._queueNumber('width', _width);
  },
  // Add animatable height
  height: function height(_height) {
    return this._queueNumber('height', _height);
  },
  // Add animatable plot
  plot: function plot(a, b, c, d) {
    // Lines can be plotted with 4 arguments
    if (arguments.length === 4) {
      return this.plot([a, b, c, d]);
    }
    if (this._tryRetarget('plot', a)) return this;
    var morpher = new Morphable(this._stepper).type(this._element.MorphArray).to(a);
    this.queue(function () {
      morpher.from(this._element.array());
    }, function (pos) {
      this._element.plot(morpher.at(pos));
      return morpher.done();
    });
    this._rememberMorpher('plot', morpher);
    return this;
  },
  // Add leading method
  leading: function leading(value) {
    return this._queueNumber('leading', value);
  },
  // Add animatable viewbox
  viewbox: function viewbox(x, y, width, height) {
    return this._queueObject('viewbox', new Box(x, y, width, height));
  },
  update: function update(o) {
    if (_typeof(o) !== 'object') {
      return this.update({
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      });
    }
    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
    if (o.color != null) this.attr('stop-color', o.color);
    if (o.offset != null) this.attr('offset', o.offset);
    return this;
  }
});
extend(Runner, {
  rx: rx,
  ry: ry,
  from: from,
  to: to
});
register(Runner, 'Runner');

var Svg = /*#__PURE__*/function (_Container) {
  function Svg(node) {
    var _this;
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Svg);
    _this = _callSuper(this, Svg, [nodeOrNew('svg', node), attrs]);
    _this.namespace();
    return _this;
  }

  // Creates and returns defs element
  _inherits(Svg, _Container);
  return _createClass(Svg, [{
    key: "defs",
    value: function defs() {
      if (!this.isRoot()) return this.root().defs();
      return adopt(this.node.querySelector('defs')) || this.put(new Defs());
    }
  }, {
    key: "isRoot",
    value: function isRoot() {
      return !this.node.parentNode || !(this.node.parentNode instanceof globals.window.SVGElement) && this.node.parentNode.nodeName !== '#document-fragment';
    }

    // Add namespaces
  }, {
    key: "namespace",
    value: function namespace() {
      if (!this.isRoot()) return this.root().namespace();
      return this.attr({
        xmlns: svg,
        version: '1.1'
      }).attr('xmlns:xlink', xlink, xmlns).attr('xmlns:svgjs', svgjs, xmlns);
    }
  }, {
    key: "removeNamespace",
    value: function removeNamespace() {
      return this.attr({
        xmlns: null,
        version: null
      }).attr('xmlns:xlink', null, xmlns).attr('xmlns:svgjs', null, xmlns);
    }

    // Check if this is a root svg
    // If not, call root() from this element
  }, {
    key: "root",
    value: function root() {
      if (this.isRoot()) return this;
      return _superPropGet(Svg, "root", this)([]);
    }
  }]);
}(Container);
registerMethods({
  Container: {
    // Create nested svg document
    nested: wrapWithAttrCheck(function () {
      return this.put(new Svg());
    })
  }
});
register(Svg, 'Svg', true);

var _Symbol = /*#__PURE__*/function (_Container) {
  // Initialize node
  function _Symbol(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, _Symbol);
    return _callSuper(this, _Symbol, [nodeOrNew('symbol', node), attrs]);
  }
  _inherits(_Symbol, _Container);
  return _createClass(_Symbol);
}(Container);
registerMethods({
  Container: {
    symbol: wrapWithAttrCheck(function () {
      return this.put(new _Symbol());
    })
  }
});
register(_Symbol, 'Symbol');

// Create plain text node
function plain(text) {
  // clear if build mode is disabled
  if (this._build === false) {
    this.clear();
  }

  // create text node
  this.node.appendChild(globals.document.createTextNode(text));
  return this;
}

// Get length of text element
function length() {
  return this.node.getComputedTextLength();
}

// Move over x-axis
// Text is moved by its bounding box
// text-anchor does NOT matter
function x$1(x) {
  var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
  if (x == null) {
    return box.x;
  }
  return this.attr('x', this.attr('x') + x - box.x);
}

// Move over y-axis
function y$1(y) {
  var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
  if (y == null) {
    return box.y;
  }
  return this.attr('y', this.attr('y') + y - box.y);
}
function move$1(x, y) {
  var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
  return this.x(x, box).y(y, box);
}

// Move center over x-axis
function cx(x) {
  var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
  if (x == null) {
    return box.cx;
  }
  return this.attr('x', this.attr('x') + x - box.cx);
}

// Move center over y-axis
function cy(y) {
  var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
  if (y == null) {
    return box.cy;
  }
  return this.attr('y', this.attr('y') + y - box.cy);
}
function center(x, y) {
  var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
  return this.cx(x, box).cy(y, box);
}
function ax(x) {
  return this.attr('x', x);
}
function ay(y) {
  return this.attr('y', y);
}
function amove(x, y) {
  return this.ax(x).ay(y);
}

// Enable / disable build mode
function build(build) {
  this._build = !!build;
  return this;
}

var textable = /*#__PURE__*/Object.freeze({
  __proto__: null,
  amove: amove,
  ax: ax,
  ay: ay,
  build: build,
  center: center,
  cx: cx,
  cy: cy,
  length: length,
  move: move$1,
  plain: plain,
  x: x$1,
  y: y$1
});

var Text = /*#__PURE__*/function (_Shape) {
  // Initialize node
  function Text(node) {
    var _this;
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Text);
    _this = _callSuper(this, Text, [nodeOrNew('text', node), attrs]);
    _this.dom.leading = new SVGNumber(1.3); // store leading value for rebuilding
    _this._rebuild = true; // enable automatic updating of dy values
    _this._build = false; // disable build mode for adding multiple lines
    return _this;
  }

  // Set / get leading
  _inherits(Text, _Shape);
  return _createClass(Text, [{
    key: "leading",
    value: function leading(value) {
      // act as getter
      if (value == null) {
        return this.dom.leading;
      }

      // act as setter
      this.dom.leading = new SVGNumber(value);
      return this.rebuild();
    }

    // Rebuild appearance type
  }, {
    key: "rebuild",
    value: function rebuild(_rebuild) {
      // store new rebuild flag if given
      if (typeof _rebuild === 'boolean') {
        this._rebuild = _rebuild;
      }

      // define position of all lines
      if (this._rebuild) {
        var self = this;
        var blankLineOffset = 0;
        var leading = this.dom.leading;
        this.each(function (i) {
          var fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
          var dy = leading * new SVGNumber(fontSize);
          if (this.dom.newLined) {
            this.attr('x', self.attr('x'));
            if (this.text() === '\n') {
              blankLineOffset += dy;
            } else {
              this.attr('dy', i ? dy + blankLineOffset : 0);
              blankLineOffset = 0;
            }
          }
        });
        this.fire('rebuild');
      }
      return this;
    }

    // overwrite method from parent to set data properly
  }, {
    key: "setData",
    value: function setData(o) {
      this.dom = o;
      this.dom.leading = new SVGNumber(o.leading || 1.3);
      return this;
    }

    // Set the text content
  }, {
    key: "text",
    value: function text(_text) {
      // act as getter
      if (_text === undefined) {
        var children = this.node.childNodes;
        var firstLine = 0;
        _text = '';
        for (var i = 0, len = children.length; i < len; ++i) {
          // skip textPaths - they are no lines
          if (children[i].nodeName === 'textPath') {
            if (i === 0) firstLine = 1;
            continue;
          }

          // add newline if its not the first child and newLined is set to true
          if (i !== firstLine && children[i].nodeType !== 3 && adopt(children[i]).dom.newLined === true) {
            _text += '\n';
          }

          // add content of this node
          _text += children[i].textContent;
        }
        return _text;
      }

      // remove existing content
      this.clear().build(true);
      if (typeof _text === 'function') {
        // call block
        _text.call(this, this);
      } else {
        // store text and make sure text is not blank
        _text = (_text + '').split('\n');

        // build new lines
        for (var j = 0, jl = _text.length; j < jl; j++) {
          this.newLine(_text[j]);
        }
      }

      // disable build mode and rebuild lines
      return this.build(false).rebuild();
    }
  }]);
}(Shape$1);
extend(Text, textable);
registerMethods({
  Container: {
    // Create text element
    text: wrapWithAttrCheck(function () {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this.put(new Text()).text(text);
    }),
    // Create plain text element
    plain: wrapWithAttrCheck(function () {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this.put(new Text()).plain(text);
    })
  }
});
register(Text, 'Text');

var Tspan = /*#__PURE__*/function (_Shape) {
  // Initialize node
  function Tspan(node) {
    var _this;
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Tspan);
    _this = _callSuper(this, Tspan, [nodeOrNew('tspan', node), attrs]);
    _this._build = false; // disable build mode for adding multiple lines
    return _this;
  }

  // Shortcut dx
  _inherits(Tspan, _Shape);
  return _createClass(Tspan, [{
    key: "dx",
    value: function dx(_dx) {
      return this.attr('dx', _dx);
    }

    // Shortcut dy
  }, {
    key: "dy",
    value: function dy(_dy) {
      return this.attr('dy', _dy);
    }

    // Create new line
  }, {
    key: "newLine",
    value: function newLine() {
      // mark new line
      this.dom.newLined = true;

      // fetch parent
      var text = this.parent();

      // early return in case we are not in a text element
      if (!(text instanceof Text)) {
        return this;
      }
      var i = text.index(this);
      var fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
      var dy = text.dom.leading * new SVGNumber(fontSize);

      // apply new position
      return this.dy(i ? dy : 0).attr('x', text.x());
    }

    // Set text content
  }, {
    key: "text",
    value: function text(_text) {
      if (_text == null) return this.node.textContent + (this.dom.newLined ? '\n' : '');
      if (typeof _text === 'function') {
        this.clear().build(true);
        _text.call(this, this);
        this.build(false);
      } else {
        this.plain(_text);
      }
      return this;
    }
  }]);
}(Shape$1);
extend(Tspan, textable);
registerMethods({
  Tspan: {
    tspan: wrapWithAttrCheck(function () {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var tspan = new Tspan();

      // clear if build mode is disabled
      if (!this._build) {
        this.clear();
      }

      // add new tspan
      return this.put(tspan).text(text);
    })
  },
  Text: {
    newLine: function newLine() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this.tspan(text).newLine();
    }
  }
});
register(Tspan, 'Tspan');

var Circle = /*#__PURE__*/function (_Shape) {
  function Circle(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Circle);
    return _callSuper(this, Circle, [nodeOrNew('circle', node), attrs]);
  }
  _inherits(Circle, _Shape);
  return _createClass(Circle, [{
    key: "radius",
    value: function radius(r) {
      return this.attr('r', r);
    }

    // Radius x value
  }, {
    key: "rx",
    value: function rx(_rx) {
      return this.attr('r', _rx);
    }

    // Alias radius x value
  }, {
    key: "ry",
    value: function ry(_ry) {
      return this.rx(_ry);
    }
  }, {
    key: "size",
    value: function size(_size) {
      return this.radius(new SVGNumber(_size).divide(2));
    }
  }]);
}(Shape$1);
extend(Circle, {
  x: x$3,
  y: y$3,
  cx: cx$1,
  cy: cy$1,
  width: width$2,
  height: height$2
});
registerMethods({
  Container: {
    // Create circle element
    circle: wrapWithAttrCheck(function () {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.put(new Circle()).size(size).move(0, 0);
    })
  }
});
register(Circle, 'Circle');

var ClipPath = /*#__PURE__*/function (_Container) {
  function ClipPath(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, ClipPath);
    return _callSuper(this, ClipPath, [nodeOrNew('clipPath', node), attrs]);
  }

  // Unclip all clipped elements and remove itself
  _inherits(ClipPath, _Container);
  return _createClass(ClipPath, [{
    key: "remove",
    value: function remove() {
      // unclip all targets
      this.targets().forEach(function (el) {
        el.unclip();
      });

      // remove clipPath from parent
      return _superPropGet(ClipPath, "remove", this)([]);
    }
  }, {
    key: "targets",
    value: function targets() {
      return baseFind('svg [clip-path*=' + this.id() + ']');
    }
  }]);
}(Container);
registerMethods({
  Container: {
    // Create clipping element
    clip: wrapWithAttrCheck(function () {
      return this.defs().put(new ClipPath());
    })
  },
  Element: {
    // Distribute clipPath to svg element
    clipper: function clipper() {
      return this.reference('clip-path');
    },
    clipWith: function clipWith(element) {
      // use given clip or create a new one
      var clipper = element instanceof ClipPath ? element : this.parent().clip().add(element);

      // apply mask
      return this.attr('clip-path', 'url(#' + clipper.id() + ')');
    },
    // Unclip element
    unclip: function unclip() {
      return this.attr('clip-path', null);
    }
  }
});
register(ClipPath, 'ClipPath');

var ForeignObject = /*#__PURE__*/function (_Element) {
  function ForeignObject(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, ForeignObject);
    return _callSuper(this, ForeignObject, [nodeOrNew('foreignObject', node), attrs]);
  }
  _inherits(ForeignObject, _Element);
  return _createClass(ForeignObject);
}(Element);
registerMethods({
  Container: {
    foreignObject: wrapWithAttrCheck(function (width, height) {
      return this.put(new ForeignObject()).size(width, height);
    })
  }
});
register(ForeignObject, 'ForeignObject');

function dmove(dx, dy) {
  this.children().forEach(function (child, i) {
    var bbox;

    // We have to wrap this for elements that dont have a bbox
    // e.g. title and other descriptive elements
    try {
      // Get the childs bbox
      bbox = child.bbox();
    } catch (e) {
      return;
    }

    // Get childs matrix
    var m = new Matrix(child);
    // Translate childs matrix by amount and
    // transform it back into parents space
    var matrix = m.translate(dx, dy).transform(m.inverse());
    // Calculate new x and y from old box
    var p = new Point(bbox.x, bbox.y).transform(matrix);
    // Move element
    child.move(p.x, p.y);
  });
  return this;
}
function dx(dx) {
  return this.dmove(dx, 0);
}
function dy(dy) {
  return this.dmove(0, dy);
}
function height(height) {
  var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
  if (height == null) return box.height;
  return this.size(box.width, height, box);
}
function move() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
  var dx = x - box.x;
  var dy = y - box.y;
  return this.dmove(dx, dy);
}
function size(width, height) {
  var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
  var p = proportionalSize(this, width, height, box);
  var scaleX = p.width / box.width;
  var scaleY = p.height / box.height;
  this.children().forEach(function (child, i) {
    var o = new Point(box).transform(new Matrix(child).inverse());
    child.scale(scaleX, scaleY, o.x, o.y);
  });
  return this;
}
function width(width) {
  var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
  if (width == null) return box.width;
  return this.size(width, box.height, box);
}
function x(x) {
  var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
  if (x == null) return box.x;
  return this.move(x, box.y, box);
}
function y(y) {
  var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
  if (y == null) return box.y;
  return this.move(box.x, y, box);
}

var containerGeometry = /*#__PURE__*/Object.freeze({
  __proto__: null,
  dmove: dmove,
  dx: dx,
  dy: dy,
  height: height,
  move: move,
  size: size,
  width: width,
  x: x,
  y: y
});

var G = /*#__PURE__*/function (_Container) {
  function G(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, G);
    return _callSuper(this, G, [nodeOrNew('g', node), attrs]);
  }
  _inherits(G, _Container);
  return _createClass(G);
}(Container);
extend(G, containerGeometry);
registerMethods({
  Container: {
    // Create a group element
    group: wrapWithAttrCheck(function () {
      return this.put(new G());
    })
  }
});
register(G, 'G');

var A = /*#__PURE__*/function (_Container) {
  function A(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, A);
    return _callSuper(this, A, [nodeOrNew('a', node), attrs]);
  }

  // Link target attribute
  _inherits(A, _Container);
  return _createClass(A, [{
    key: "target",
    value: function target(_target) {
      return this.attr('target', _target);
    }

    // Link url
  }, {
    key: "to",
    value: function to(url) {
      return this.attr('href', url, xlink);
    }
  }]);
}(Container);
extend(A, containerGeometry);
registerMethods({
  Container: {
    // Create a hyperlink element
    link: wrapWithAttrCheck(function (url) {
      return this.put(new A()).to(url);
    })
  },
  Element: {
    unlink: function unlink() {
      var link = this.linker();
      if (!link) return this;
      var parent = link.parent();
      if (!parent) {
        return this.remove();
      }
      var index = parent.index(link);
      parent.add(this, index);
      link.remove();
      return this;
    },
    linkTo: function linkTo(url) {
      // reuse old link if possible
      var link = this.linker();
      if (!link) {
        link = new A();
        this.wrap(link);
      }
      if (typeof url === 'function') {
        url.call(link, link);
      } else {
        link.to(url);
      }
      return this;
    },
    linker: function linker() {
      var link = this.parent();
      if (link && link.node.nodeName.toLowerCase() === 'a') {
        return link;
      }
      return null;
    }
  }
});
register(A, 'A');

var Mask = /*#__PURE__*/function (_Container) {
  // Initialize node
  function Mask(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Mask);
    return _callSuper(this, Mask, [nodeOrNew('mask', node), attrs]);
  }

  // Unmask all masked elements and remove itself
  _inherits(Mask, _Container);
  return _createClass(Mask, [{
    key: "remove",
    value: function remove() {
      // unmask all targets
      this.targets().forEach(function (el) {
        el.unmask();
      });

      // remove mask from parent
      return _superPropGet(Mask, "remove", this)([]);
    }
  }, {
    key: "targets",
    value: function targets() {
      return baseFind('svg [mask*=' + this.id() + ']');
    }
  }]);
}(Container);
registerMethods({
  Container: {
    mask: wrapWithAttrCheck(function () {
      return this.defs().put(new Mask());
    })
  },
  Element: {
    // Distribute mask to svg element
    masker: function masker() {
      return this.reference('mask');
    },
    maskWith: function maskWith(element) {
      // use given mask or create a new one
      var masker = element instanceof Mask ? element : this.parent().mask().add(element);

      // apply mask
      return this.attr('mask', 'url(#' + masker.id() + ')');
    },
    // Unmask element
    unmask: function unmask() {
      return this.attr('mask', null);
    }
  }
});
register(Mask, 'Mask');

var Stop = /*#__PURE__*/function (_Element) {
  function Stop(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Stop);
    return _callSuper(this, Stop, [nodeOrNew('stop', node), attrs]);
  }

  // add color stops
  _inherits(Stop, _Element);
  return _createClass(Stop, [{
    key: "update",
    value: function update(o) {
      if (typeof o === 'number' || o instanceof SVGNumber) {
        o = {
          offset: arguments[0],
          color: arguments[1],
          opacity: arguments[2]
        };
      }

      // set attributes
      if (o.opacity != null) this.attr('stop-opacity', o.opacity);
      if (o.color != null) this.attr('stop-color', o.color);
      if (o.offset != null) this.attr('offset', new SVGNumber(o.offset));
      return this;
    }
  }]);
}(Element);
registerMethods({
  Gradient: {
    // Add a color stop
    stop: function stop(offset, color, opacity) {
      return this.put(new Stop()).update(offset, color, opacity);
    }
  }
});
register(Stop, 'Stop');

function cssRule(selector, rule) {
  if (!selector) return '';
  if (!rule) return selector;
  var ret = selector + '{';
  for (var i in rule) {
    ret += unCamelCase(i) + ':' + rule[i] + ';';
  }
  ret += '}';
  return ret;
}
var Style$1 = /*#__PURE__*/function (_Element) {
  function Style(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Style);
    return _callSuper(this, Style, [nodeOrNew('style', node), attrs]);
  }
  _inherits(Style, _Element);
  return _createClass(Style, [{
    key: "addText",
    value: function addText() {
      var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.node.textContent += w;
      return this;
    }
  }, {
    key: "font",
    value: function font(name, src) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.rule('@font-face', _objectSpread2({
        fontFamily: name,
        src: src
      }, params));
    }
  }, {
    key: "rule",
    value: function rule(selector, obj) {
      return this.addText(cssRule(selector, obj));
    }
  }]);
}(Element);
registerMethods('Dom', {
  style: function style(selector, obj) {
    return this.put(new Style$1()).rule(selector, obj);
  },
  fontface: function fontface(name, src, params) {
    return this.put(new Style$1()).font(name, src, params);
  }
});
register(Style$1, 'Style');

var TextPath = /*#__PURE__*/function (_Text) {
  // Initialize node
  function TextPath(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, TextPath);
    return _callSuper(this, TextPath, [nodeOrNew('textPath', node), attrs]);
  }

  // return the array of the path track element
  _inherits(TextPath, _Text);
  return _createClass(TextPath, [{
    key: "array",
    value: function array() {
      var track = this.track();
      return track ? track.array() : null;
    }

    // Plot path if any
  }, {
    key: "plot",
    value: function plot(d) {
      var track = this.track();
      var pathArray = null;
      if (track) {
        pathArray = track.plot(d);
      }
      return d == null ? pathArray : this;
    }

    // Get the path element
  }, {
    key: "track",
    value: function track() {
      return this.reference('href');
    }
  }]);
}(Text);
registerMethods({
  Container: {
    textPath: wrapWithAttrCheck(function (text, path) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = this.text(text);
      }
      return text.path(path);
    })
  },
  Text: {
    // Create path for text to run on
    path: wrapWithAttrCheck(function (track) {
      var importNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var textPath = new TextPath();

      // if track is a path, reuse it
      if (!(track instanceof Path)) {
        // create path element
        track = this.defs().path(track);
      }

      // link textPath to path and add content
      textPath.attr('href', '#' + track, xlink);

      // Transplant all nodes from text to textPath
      var node;
      if (importNodes) {
        while (node = this.node.firstChild) {
          textPath.node.appendChild(node);
        }
      }

      // add textPath element as child node and return textPath
      return this.put(textPath);
    }),
    // Get the textPath children
    textPath: function textPath() {
      return this.findOne('textPath');
    }
  },
  Path: {
    // creates a textPath from this path
    text: wrapWithAttrCheck(function (text) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = new Text().addTo(this.parent()).text(text);
      }

      // Create textPath from text and path and return
      return text.path(this);
    }),
    targets: function targets() {
      var _this = this;
      return baseFind('svg textPath').filter(function (node) {
        return (node.attr('href') || '').includes(_this.id());
      });

      // Does not work in IE11. Use when IE support is dropped
      // return baseFind('svg textPath[*|href*=' + this.id() + ']')
    }
  }
});
TextPath.prototype.MorphArray = PathArray;
register(TextPath, 'TextPath');

var Use = /*#__PURE__*/function (_Shape) {
  function Use(node) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : node;
    _classCallCheck(this, Use);
    return _callSuper(this, Use, [nodeOrNew('use', node), attrs]);
  }

  // Use element as a reference
  _inherits(Use, _Shape);
  return _createClass(Use, [{
    key: "use",
    value: function use(element, file) {
      // Set lined element
      return this.attr('href', (file || '') + '#' + element, xlink);
    }
  }]);
}(Shape$1);
registerMethods({
  Container: {
    // Create a use element
    use: wrapWithAttrCheck(function (element, file) {
      return this.put(new Use()).use(element, file);
    })
  }
});
register(Use, 'Use');

/* Optional Modules */
var SVG = makeInstance;
extend([Svg, _Symbol, Image$1, Pattern, Marker], getMethodsFor('viewbox'));
extend([Line, Polyline, Polygon, Path], getMethodsFor('marker'));
extend(Text, getMethodsFor('Text'));
extend(Path, getMethodsFor('Path'));
extend(Defs, getMethodsFor('Defs'));
extend([Text, Tspan], getMethodsFor('Tspan'));
extend([Rect, Ellipse, Gradient, Runner], getMethodsFor('radius'));
extend(EventTarget, getMethodsFor('EventTarget'));
extend(Dom, getMethodsFor('Dom'));
extend(Element, getMethodsFor('Element'));
extend(Shape$1, getMethodsFor('Shape'));
extend([Container, Fragment], getMethodsFor('Container'));
extend(Gradient, getMethodsFor('Gradient'));
extend(Runner, getMethodsFor('Runner'));
List.extend(getMethodNames());
registerMorphableType([SVGNumber, Color, Box, Matrix, SVGArray, PointArray, PathArray, Point]);
makeMorphable();

//  默认主题
var defaultTheme = {
  // 节点内边距
  paddingX: 15,
  paddingY: 5,
  // 图片显示的最大宽度
  imgMaxWidth: 200,
  // 图片显示的最大高度
  imgMaxHeight: 100,
  // icon的大小
  iconSize: 20,
  // 连线的粗细
  lineWidth: 1,
  // 连线的颜色
  lineColor: '#549688',
  // 连线样式
  lineDasharray: 'none',
  // 连线是否开启流动效果，仅在虚线时有效（需要注册LineFlow插件）
  lineFlow: false,
  // 流动效果一个周期的时间，单位：s
  lineFlowDuration: 1,
  // 流动方向是否是从父节点到子节点
  lineFlowForward: true,
  // 连线风格
  lineStyle: 'straight',
  // 曲线（curve）【仅支持logicalStructure、mindMap、verticalTimeline三种结构】、直线（straight）、直连（direct）【仅支持logicalStructure、mindMap、organizationStructure、verticalTimeline四种结构】
  // 曲线连接时，根节点和其他节点的连接线样式保持统一，默认根节点为 ( 型，其他节点为 { 型，设为true后，都为 { 型。仅支持logicalStructure、mindMap两种结构
  rootLineKeepSameInCurve: true,
  // 曲线连接时，根节点和其他节点的连线起始位置保持统一，默认根节点的连线起始位置在节点中心，其他节点在节点右侧（或左侧），如果该配置设为true，那么根节点的连线起始位置也会在节点右侧（或左侧）
  rootLineStartPositionKeepSameInCurve: false,
  // 直线连接(straight)时，连线的圆角大小，设置为0代表没有圆角，仅支持logicalStructure、mindMap、verticalTimeline三种结构
  lineRadius: 5,
  // 连线是否显示标记，目前只支持箭头
  showLineMarker: false,
  // 概要连线的粗细
  generalizationLineWidth: 1,
  // 概要连线的颜色
  generalizationLineColor: '#549688',
  // 概要曲线距节点的距离
  generalizationLineMargin: 0,
  // 概要节点距节点的距离
  generalizationNodeMargin: 20,
  // 关联线默认状态的粗细
  associativeLineWidth: 2,
  // 关联线默认状态的颜色
  associativeLineColor: 'rgb(51, 51, 51)',
  // 关联线激活状态的粗细
  associativeLineActiveWidth: 8,
  // 关联线激活状态的颜色
  associativeLineActiveColor: 'rgba(2, 167, 240, 1)',
  // 关联线样式
  associativeLineDasharray: [6, 4],
  // 关联线文字颜色
  associativeLineTextColor: 'rgb(51, 51, 51)',
  // 关联线文字大小
  associativeLineTextFontSize: 14,
  // 关联线文字行高
  associativeLineTextLineHeight: 1.2,
  // 关联线文字字体
  associativeLineTextFontFamily: '微软雅黑, Microsoft YaHei',
  // 背景颜色
  backgroundColor: '#fafafa',
  // 背景图片
  backgroundImage: 'none',
  // 背景重复
  backgroundRepeat: 'no-repeat',
  // 设置背景图像的起始位置
  backgroundPosition: 'center center',
  // 设置背景图片大小
  backgroundSize: 'cover',
  // 节点使用只有底边横线的样式，仅支持logicalStructure、mindMap、catalogOrganization、organizationStructure四种结构
  nodeUseLineStyle: false,
  // 根节点样式
  root: {
    shape: 'rectangle',
    fillColor: '#549688',
    fontFamily: '微软雅黑, Microsoft YaHei',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    borderColor: 'transparent',
    borderWidth: 0,
    borderDasharray: 'none',
    borderRadius: 5,
    textDecoration: 'none',
    gradientStyle: false,
    startColor: '#549688',
    endColor: '#fff',
    startDir: [0, 0],
    endDir: [1, 0],
    // 连线标记的位置，start（头部）、end（尾部），该配置在showLineMarker配置为true时生效
    lineMarkerDir: 'end',
    // 节点鼠标hover和激活时显示的矩形边框的颜色，主题里不设置，默认会取hoverRectColor实例化选项的值
    hoverRectColor: '',
    // 点鼠标hover和激活时显示的矩形边框的圆角大小
    hoverRectRadius: 5
    // 下列样式也支持给节点设置，用于覆盖最外层的设置
    // paddingX,
    // paddingY,
    // lineWidth,
    // lineColor,
    // lineDasharray,
    // lineFlow,
    // lineFlowDuration,
    // lineFlowForward
    // 关联线的所有样式
  },
  // 二级节点样式
  second: {
    shape: 'rectangle',
    marginX: 100,
    marginY: 40,
    fillColor: '#fff',
    fontFamily: '微软雅黑, Microsoft YaHei',
    color: '#565656',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    borderColor: '#549688',
    borderWidth: 1,
    borderDasharray: 'none',
    borderRadius: 5,
    textDecoration: 'none',
    gradientStyle: false,
    startColor: '#549688',
    endColor: '#fff',
    startDir: [0, 0],
    endDir: [1, 0],
    lineMarkerDir: 'end',
    hoverRectColor: '',
    hoverRectRadius: 5
  },
  // 三级及以下节点样式
  node: {
    shape: 'rectangle',
    marginX: 50,
    marginY: 0,
    fillColor: 'transparent',
    fontFamily: '微软雅黑, Microsoft YaHei',
    color: '#6a6d6c',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
    borderDasharray: 'none',
    textDecoration: 'none',
    gradientStyle: false,
    startColor: '#549688',
    endColor: '#fff',
    startDir: [0, 0],
    endDir: [1, 0],
    lineMarkerDir: 'end',
    hoverRectColor: '',
    hoverRectRadius: 5
  },
  // 概要节点样式
  generalization: {
    shape: 'rectangle',
    marginX: 100,
    marginY: 40,
    fillColor: '#fff',
    fontFamily: '微软雅黑, Microsoft YaHei',
    color: '#565656',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    borderColor: '#549688',
    borderWidth: 1,
    borderDasharray: 'none',
    borderRadius: 5,
    textDecoration: 'none',
    gradientStyle: false,
    startColor: '#549688',
    endColor: '#fff',
    startDir: [0, 0],
    endDir: [1, 0],
    hoverRectColor: '',
    hoverRectRadius: 5
  }
};

// 检测主题配置是否是节点大小无关的
var nodeSizeIndependenceList = ['lineWidth', 'lineColor', 'lineDasharray', 'lineStyle', 'generalizationLineWidth', 'generalizationLineColor', 'associativeLineWidth', 'associativeLineColor', 'associativeLineActiveWidth', 'associativeLineActiveColor', 'associativeLineTextColor', 'associativeLineTextFontSize', 'associativeLineTextLineHeight', 'associativeLineTextFontFamily', 'backgroundColor', 'backgroundImage', 'backgroundRepeat', 'backgroundPosition', 'backgroundSize', 'rootLineKeepSameInCurve', 'rootLineStartPositionKeepSameInCurve', 'showLineMarker', 'lineRadius', 'hoverRectColor', 'hoverRectRadius', 'lineFlow', 'lineFlowDuration', 'lineFlowForward'];
var checkIsNodeSizeIndependenceConfig = function checkIsNodeSizeIndependenceConfig(config) {
  var keys = Object.keys(config);
  var _loop = function _loop(i) {
      if (!nodeSizeIndependenceList.find(function (item) {
        return item === keys[i];
      })) {
        return {
          v: false
        };
      }
    },
    _ret;
  for (var i = 0; i < keys.length; i++) {
    _ret = _loop(i);
    if (_ret) return _ret.v;
  }
  return true;
};

// 连线的样式
var lineStyleProps = ['lineColor', 'lineDasharray', 'lineWidth', 'lineMarkerDir', 'lineFlow', 'lineFlowDuration', 'lineFlowForward'];

//  深度优先遍历树
var _walk = function walk(root, parent, beforeCallback, afterCallback, isRoot) {
  var layerIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var index = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var ancestors = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [];
  var stop = false;
  if (beforeCallback) {
    stop = beforeCallback(root, parent, isRoot, layerIndex, index, ancestors);
  }
  if (!stop && root.children && root.children.length > 0) {
    var _layerIndex = layerIndex + 1;
    root.children.forEach(function (node, nodeIndex) {
      _walk(node, root, beforeCallback, afterCallback, false, _layerIndex, nodeIndex, [].concat(_toConsumableArray(ancestors), [root]));
    });
  }
  afterCallback && afterCallback(root, parent, isRoot, layerIndex, index, ancestors);
};
var bfsWalk = function bfsWalk(root, callback) {
  var stack = [root];
  var isStop = false;
  if (callback(root, null) === 'stop') {
    isStop = true;
  }
  var _loop = function _loop() {
    if (isStop) {
      return 1; // break
    }
    var cur = stack.shift();
    if (cur.children && cur.children.length) {
      cur.children.forEach(function (item) {
        if (isStop) return;
        stack.push(item);
        if (callback(item, cur) === 'stop') {
          isStop = true;
        }
      });
    }
  };
  while (stack.length) {
    if (_loop()) break;
  }
};

//  缩放图片尺寸
var resizeImgSize = function resizeImgSize(width, height, maxWidth, maxHeight) {
  var nRatio = width / height;
  var arr = [];
  if (maxWidth && maxHeight) {
    if (width <= maxWidth && height <= maxHeight) {
      arr = [width, height];
    } else {
      var mRatio = maxWidth / maxHeight;
      if (nRatio > mRatio) {
        // 固定宽度
        arr = [maxWidth, maxWidth / nRatio];
      } else {
        // 固定高度
        arr = [nRatio * maxHeight, maxHeight];
      }
    }
  } else if (maxWidth) {
    if (width <= maxWidth) {
      arr = [width, height];
    } else {
      arr = [maxWidth, maxWidth / nRatio];
    }
  } else if (maxHeight) {
    if (height <= maxHeight) {
      arr = [width, height];
    } else {
      arr = [nRatio * maxHeight, maxHeight];
    }
  }
  return arr;
};

//  从头html结构字符串里获取带换行符的字符串
var getStrWithBrFromHtml = function getStrWithBrFromHtml(str) {
  str = str.replace(/<br>/gim, '\n');
  var el = document.createElement('div');
  el.innerHTML = str;
  str = el.textContent;
  return str;
};

//  极简的深拷贝
var simpleDeepClone = function simpleDeepClone(data) {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return null;
  }
};

//  复制渲染树数据
var _copyRenderTree = function copyRenderTree(tree, root) {
  var removeActiveState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  tree.data = simpleDeepClone(root.data);
  if (removeActiveState) {
    tree.data.isActive = false;
    var generalizationList = formatGetNodeGeneralization(tree.data);
    generalizationList.forEach(function (item) {
      item.isActive = false;
    });
  }
  tree.children = [];
  if (root.children && root.children.length > 0) {
    root.children.forEach(function (item, index) {
      tree.children[index] = _copyRenderTree({}, item, removeActiveState);
    });
  }
  return tree;
};
var _copyNodeTree = function copyNodeTree(tree, root) {
  var removeActiveState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var removeId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  tree.data = simpleDeepClone(root.nodeData ? root.nodeData.data : root.data);
  // 移除节点uid
  if (removeId) {
    delete tree.data.uid;
  } else if (!tree.data.uid) {
    // 否则保留或生成
    tree.data.uid = createUid();
  }
  if (removeActiveState) {
    tree.data.isActive = false;
  }
  tree.children = [];
  if (root.children && root.children.length > 0) {
    root.children.forEach(function (item, index) {
      tree.children[index] = _copyNodeTree({}, item, removeActiveState, removeId);
    });
  } else if (root.nodeData && root.nodeData.children && root.nodeData.children.length > 0) {
    root.nodeData.children.forEach(function (item, index) {
      tree.children[index] = _copyNodeTree({}, item, removeActiveState, removeId);
    });
  }
  return tree;
};

//  节流函数
var throttle = function throttle(fn) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var ctx = arguments.length > 2 ? arguments[2] : undefined;
  var timer = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timer) {
      return;
    }
    timer = setTimeout(function () {
      fn.call.apply(fn, [ctx].concat(args));
      timer = null;
    }, time);
  };
};

//  异步执行任务队列
var asyncRun = function asyncRun(taskList) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  var index = 0;
  var len = taskList.length;
  if (len <= 0) {
    return callback();
  }
  var _loop2 = function loop() {
    if (index >= len) {
      callback();
      return;
    }
    taskList[index]();
    setTimeout(function () {
      index++;
      _loop2();
    }, 0);
  };
  _loop2();
};

// 角度转弧度
var degToRad = function degToRad(deg) {
  return deg * (Math.PI / 180);
};

//  在下一个事件循环里执行任务
var nextTick = function nextTick(fn, ctx) {
  var pending = false;
  var timerFunc = null;
  var handle = function handle() {
    pending = false;
    ctx ? fn.call(ctx) : fn();
  };
  // 支持MutationObserver接口的话使用MutationObserver
  if (typeof MutationObserver !== 'undefined') {
    var counter = 1;
    var observer = new MutationObserver(handle);
    var textNode = document.createTextNode(counter);
    observer.observe(textNode, {
      characterData: true // 设为 true 表示监视指定目标节点或子节点树中节点所包含的字符数据的变化
    });
    timerFunc = function timerFunc() {
      counter = (counter + 1) % 2; // counter会在0和1两者循环变化
      textNode.data = counter; // 节点变化会触发回调handle，
    };
  } else {
    // 否则使用定时器
    timerFunc = setTimeout;
  }
  return function () {
    if (pending) return;
    pending = true;
    timerFunc(handle, 0);
  };
};

// 检查节点是否超出画布
var checkNodeOuter = function checkNodeOuter(mindMap, node) {
  var elRect = mindMap.elRect;
  var _mindMap$draw$transfo = mindMap.draw.transform(),
    scaleX = _mindMap$draw$transfo.scaleX,
    scaleY = _mindMap$draw$transfo.scaleY,
    translateX = _mindMap$draw$transfo.translateX,
    translateY = _mindMap$draw$transfo.translateY;
  var left = node.left,
    top = node.top,
    width = node.width,
    height = node.height;
  var right = (left + width) * scaleX + translateX;
  var bottom = (top + height) * scaleY + translateY;
  left = left * scaleX + translateX;
  top = top * scaleY + translateY;
  var offsetLeft = 0;
  var offsetTop = 0;
  if (left < 0) {
    offsetLeft = -left;
  }
  if (right > elRect.width) {
    offsetLeft = -(right - elRect.width);
  }
  if (top < 0) {
    offsetTop = -top;
  }
  if (bottom > elRect.height) {
    offsetTop = -(bottom - elRect.height);
  }
  return {
    isOuter: offsetLeft !== 0 || offsetTop !== 0,
    offsetLeft: offsetLeft,
    offsetTop: offsetTop
  };
};

// 提取html字符串里的纯文本
var getTextFromHtmlEl = null;
var getTextFromHtml = function getTextFromHtml(html) {
  if (!getTextFromHtmlEl) {
    getTextFromHtmlEl = document.createElement('div');
  }
  getTextFromHtmlEl.innerHTML = html;
  return getTextFromHtmlEl.textContent;
};

// 获取图片大小
var getImageSize = function getImageSize(src) {
  return new Promise(function (resolve) {
    var img = new Image();
    img.src = src;
    img.onload = function () {
      resolve({
        width: img.width,
        height: img.height
      });
    };
    img.onerror = function () {
      resolve({
        width: 0,
        height: 0
      });
    };
  });
};

// 创建节点唯一的id
var createUid = function createUid() {
  return v4();
};

// 加载图片文件
var loadImage = function loadImage(imgFile) {
  return new Promise(function (resolve, reject) {
    var fr = new FileReader();
    fr.readAsDataURL(imgFile);
    fr.onload = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
        var url, size;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = e.target.result;
              _context.next = 3;
              return getImageSize(url);
            case 3:
              size = _context.sent;
              resolve({
                url: url,
                size: size
              });
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }();
    fr.onerror = function (error) {
      reject(error);
    };
  });
};

// 获取一个数据的类型
var getType = function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
};

// 判断一个数据是否是null和undefined和空字符串
var isUndef = function isUndef(data) {
  return data === null || data === undefined || data === '';
};

// 移除html字符串中节点的内联样式
var removeHtmlStyle = function removeHtmlStyle(html) {
  return html.replaceAll(/(<[^\s]+)\s+style=["'][^'"]+["']\s*(>)/g, '$1$2');
};

// 给html标签中指定的标签添加内联样式
var addHtmlStyleEl = null;
var addHtmlStyle = function addHtmlStyle(html, tag, style) {
  if (!addHtmlStyleEl) {
    addHtmlStyleEl = document.createElement('div');
  }
  var tags = Array.isArray(tag) ? tag : [tag];
  addHtmlStyleEl.innerHTML = html;
  var _walk2 = function walk(root) {
    var childNodes = root.childNodes;
    childNodes.forEach(function (node) {
      if (node.nodeType === 1) {
        // 元素节点
        if (tags.includes(node.tagName.toLowerCase())) {
          node.style.cssText = style;
        } else {
          _walk2(node);
        }
      }
    });
  };
  _walk2(addHtmlStyleEl);
  return addHtmlStyleEl.innerHTML;
};

// 检查一个字符串是否是富文本字符
var checkIsRichTextEl = null;
var checkIsRichText = function checkIsRichText(str) {
  if (!checkIsRichTextEl) {
    checkIsRichTextEl = document.createElement('div');
  }
  checkIsRichTextEl.innerHTML = str;
  for (var c = checkIsRichTextEl.childNodes, i = c.length; i--;) {
    if (c[i].nodeType == 1) return true;
  }
  return false;
};

// 判断一个颜色是否是白色
var isWhite = function isWhite(color) {
  color = String(color).replaceAll(/\s+/g, '');
  return ['#fff', '#ffffff', '#FFF', '#FFFFFF', 'rgb(255,255,255)'].includes(color) || /rgba\(255,255,255,[^)]+\)/.test(color);
};

// 判断一个颜色是否是透明
var isTransparent = function isTransparent(color) {
  color = String(color).replaceAll(/\s+/g, '');
  return ['', 'transparent'].includes(color) || /rgba\(\d+,\d+,\d+,0\)/.test(color);
};

// 从当前主题里获取一个非透明非白色的颜色
var getVisibleColorFromTheme = function getVisibleColorFromTheme(themeConfig) {
  var lineColor = themeConfig.lineColor,
    root = themeConfig.root,
    second = themeConfig.second,
    node = themeConfig.node;
  var list = [lineColor, root.fillColor, root.color, second.fillColor, second.color, node.fillColor, node.color, root.borderColor, second.borderColor, node.borderColor];
  for (var i = 0; i < list.length; i++) {
    var color = list[i];
    if (!isTransparent(color) && !isWhite(color)) {
      return color;
    }
  }
};

// 去除富文本内容的样式，包括样式标签，比如strong、em、s等
// 但要保留数学公式内容
var removeRichTextStyesEl = null;
var removeRichTextStyes = function removeRichTextStyes(html) {
  if (!removeRichTextStyesEl) {
    removeRichTextStyesEl = document.createElement('div');
  }
  removeRichTextStyesEl.innerHTML = html;
  // 首先用占位文本替换掉所有的公式
  var formulaList = removeRichTextStyesEl.querySelectorAll('.ql-formula');
  Array.from(formulaList).forEach(function (el) {
    var placeholder = document.createTextNode('$smmformula$');
    el.parentNode.replaceChild(placeholder, el);
  });
  // 然后遍历每行节点，去掉内部的所有标签，转为文本
  var childNodes = removeRichTextStyesEl.childNodes;
  var list = [];
  for (var i = 0; i < childNodes.length; i++) {
    var node = childNodes[i];
    if (node.nodeType === 1) {
      // 元素节点
      list.push(node.textContent);
    } else if (node.nodeType === 3) {
      // 文本节点
      list.push(node.nodeValue);
    }
  }
  // 拼接文本
  html = list.map(function (item) {
    return "<p><span>".concat(htmlEscape(item), "</span></p>");
  }).join('');
  // 将公式添加回去
  if (formulaList.length > 0) {
    html = html.replace(/\$smmformula\$/g, '<span class="smmformula"></span>');
    removeRichTextStyesEl.innerHTML = html;
    var els = removeRichTextStyesEl.querySelectorAll('.smmformula');
    Array.from(els).forEach(function (el, index) {
      el.parentNode.replaceChild(formulaList[index], el);
    });
    html = removeRichTextStyesEl.innerHTML;
  }
  return html;
};

// 获取对象改变了的的属性
var getObjectChangedProps = function getObjectChangedProps(oldObject, newObject) {
  var res = {};
  Object.keys(newObject).forEach(function (prop) {
    var oldVal = oldObject[prop];
    var newVal = newObject[prop];
    if (getType(oldVal) !== getType(newVal)) {
      res[prop] = newVal;
      return;
    }
    if (getType(oldVal) === 'Object') {
      if (JSON.stringify(oldVal) !== JSON.stringify(newVal)) {
        res[prop] = newVal;
        return;
      }
    } else {
      if (oldVal !== newVal) {
        res[prop] = newVal;
        return;
      }
    }
  });
  return res;
};

// 判断一个字段是否是节点数据中的样式字段
var checkIsNodeStyleDataKey = function checkIsNodeStyleDataKey(key) {
  // 用户自定义字段
  if (/^_/.test(key)) return false;
  // 不在节点非样式字段列表里，那么就是样式字段
  if (!nodeDataNoStylePropList.includes(key)) {
    return true;
  }
  return false;
};

// 判断一个对象是否不需要触发节点重新创建
var isNodeNotNeedRenderData = function isNodeNotNeedRenderData(config) {
  var list = _toConsumableArray(lineStyleProps); // 节点连线样式
  var keys = Object.keys(config);
  for (var i = 0; i < keys.length; i++) {
    if (!list.includes(keys[i])) {
      return false;
    }
  }
  return true;
};

// 合并图标数组
// const data = [
//   { type: 'priority', name: '优先级图标', list: [{ name: '1', icon: 'a' }, { name: 2, icon: 'b' }] },
//   { type: 'priority', name: '优先级图标', list: [{ name: '2', icon: 'c' }, { name: 3, icon: 'd' }] },
// ];

// mergerIconList(data) 结果

// [
//   { type: 'priority', name: '优先级图标', list: [{ name: '1', icon: 'a' }, { name: 2, icon: 'c' }, { name: 3, icon: 'd' }] },
// ]
var mergerIconList = function mergerIconList(list) {
  return list.reduce(function (result, item) {
    var existingItem = result.find(function (x) {
      return x.type === item.type;
    });
    if (existingItem) {
      item.list.forEach(function (newObj) {
        var existingObj = existingItem.list.find(function (x) {
          return x.name === newObj.name;
        });
        if (existingObj) {
          existingObj.icon = newObj.icon;
        } else {
          existingItem.list.push(newObj);
        }
      });
    } else {
      result.push(_objectSpread2({}, item));
    }
    return result;
  }, []);
};

// 从节点实例列表里找出顶层的节点
var getTopAncestorsFomNodeList = function getTopAncestorsFomNodeList(list) {
  var res = [];
  list.forEach(function (node) {
    if (!list.find(function (item) {
      return item.uid !== node.uid && item.isAncestor(node);
    })) {
      res.push(node);
    }
  });
  return res;
};

// 解析要添加概要的节点实例列表
var parseAddGeneralizationNodeList = function parseAddGeneralizationNodeList(list) {
  var cache = {};
  var uidToParent = {};
  list.forEach(function (node) {
    var parent = node.parent;
    if (parent) {
      var pUid = parent.uid;
      uidToParent[pUid] = parent;
      var index = node.getIndexInBrothers();
      var data = {
        node: node,
        index: index
      };
      if (cache[pUid]) {
        if (!cache[pUid].find(function (item) {
          return item.index === data.index;
        })) {
          cache[pUid].push(data);
        }
      } else {
        cache[pUid] = [data];
      }
    }
  });
  var res = [];
  Object.keys(cache).forEach(function (uid) {
    if (cache[uid].length > 1) {
      var rangeList = cache[uid].map(function (item) {
        return item.index;
      }).sort(function (a, b) {
        return a - b;
      });
      res.push({
        node: uidToParent[uid],
        range: [rangeList[0], rangeList[rangeList.length - 1]]
      });
    } else {
      res.push({
        node: cache[uid][0].node
      });
    }
  });
  return res;
};

// 聚焦指定输入框
var focusInput = function focusInput(el) {
  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(el);
  range.collapse();
  selection.removeAllRanges();
  selection.addRange(range);
};

// 聚焦全选指定输入框
var selectAllInput = function selectAllInput(el) {
  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(el);
  selection.removeAllRanges();
  selection.addRange(range);
};

// 给指定的节点列表树数据添加附加数据，会修改原数据
var addDataToAppointNodes = function addDataToAppointNodes(appointNodes) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _walk5 = function walk(list) {
    list.forEach(function (node) {
      node.data = _objectSpread2(_objectSpread2({}, node.data), data);
      if (node.children && node.children.length > 0) {
        _walk5(node.children);
      }
    });
  };
  _walk5(appointNodes);
  return appointNodes;
};

// 给指定的节点列表树数据添加uid，会修改原数据
// createNewId默认为false，即如果节点不存在uid的话，会创建新的uid。如果传true，那么无论节点数据原来是否存在uid，都会创建新的uid
var createUidForAppointNodes = function createUidForAppointNodes(appointNodes) {
  var createNewId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var handle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var _walk6 = function walk(list) {
    list.forEach(function (node) {
      if (!node.data) {
        node.data = {};
      }
      if (createNewId || isUndef(node.data.uid)) {
        node.data.uid = createUid();
      }
      handle && handle(node);
      if (node.children && node.children.length > 0) {
        _walk6(node.children);
      }
    });
  };
  _walk6(appointNodes);
  return appointNodes;
};

// 传入一个数据，如果该数据是数组，那么返回该数组，否则返回一个以该数据为成员的数组
var formatDataToArray = function formatDataToArray(data) {
  if (!data) return [];
  return Array.isArray(data) ? data : [data];
};

//  获取节点在同级里的位置索引
var getNodeDataIndex = function getNodeDataIndex(node) {
  return node.parent ? node.parent.nodeData.children.findIndex(function (item) {
    return item.data.uid === node.uid;
  }) : 0;
};

// 从一个节点列表里找出某个节点的索引
var getNodeIndexInNodeList = function getNodeIndexInNodeList(node, nodeList) {
  return nodeList.findIndex(function (item) {
    return item.uid === node.uid;
  });
};

// 根据内容生成颜色
var generateColorByContent = function generateColorByContent(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  // 这里使用伪随机数的原因是因为
  // 1. 如果字符串的内容差不多，根据hash生产的颜色就比较相近，不好区分，比如v1.1 v1.2，所以需要加入随机数来使得颜色能够区分开
  // 2. 普通的随机数每次数值不一样，就会导致每次新增标签原来的标签颜色就会发生改变，所以加入了这个方法，使得内容不变随机数也不变
  var rng = new MersenneTwister(hash);
  var h = rng.genrand_int32() % 360;
  return 'hsla(' + h + ', 50%, 50%, 1)';
};

//  html转义
var htmlEscape = function htmlEscape(str) {
  [['&', '&amp;'], ['<', '&lt;'], ['>', '&gt;']].forEach(function (item) {
    str = str.replace(new RegExp(item[0], 'g'), item[1]);
  });
  return str;
};

// 判断两个对象是否相同，只处理对象或数组
var _isSameObject = function isSameObject(a, b) {
  var type = getType(a);
  // a、b类型不一致，那么肯定不相同
  if (type !== getType(b)) return false;
  // 如果都是对象
  if (type === 'Object') {
    var keysa = Object.keys(a);
    var keysb = Object.keys(b);
    // 对象字段数量不一样，肯定不相同
    if (keysa.length !== keysb.length) return false;
    // 字段数量一样，那么需要遍历字段进行判断
    for (var i = 0; i < keysa.length; i++) {
      var key = keysa[i];
      // b没有a的一个字段，那么肯定不相同
      if (!keysb.includes(key)) return false;
      // 字段名称一样，那么需要递归判断它们的值
      var isSame = _isSameObject(a[key], b[key]);
      if (!isSame) {
        return false;
      }
    }
    return true;
  } else if (type === 'Array') {
    // 如果都是数组
    // 数组长度不一样，肯定不相同
    if (a.length !== b.length) return false;
    // 长度一样，那么需要遍历进行判断
    for (var _i = 0; _i < a.length; _i++) {
      var itema = a[_i];
      var itemb = b[_i];
      var typea = getType(itema);
      var typeb = getType(itemb);
      if (typea !== typeb) return false;
      var _isSame = _isSameObject(itema, itemb);
      if (!_isSame) {
        return false;
      }
    }
    return true;
  } else {
    // 其他类型，直接全等判断
    return a === b;
  }
};
var checkClipboardReadEnable = function checkClipboardReadEnable() {
  return navigator.clipboard && typeof navigator.clipboard.read === 'function';
};

// 将数据设置到用户剪切板中
var setDataToClipboard = function setDataToClipboard(data) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(JSON.stringify(data));
  }
};

// 从用户剪贴板中读取文字和图片
var getDataFromClipboard = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var text, img, items, _iterator, _step, clipboardItem, _iterator2, _step2, type, blob;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          text = null;
          img = null;
          if (!checkClipboardReadEnable()) {
            _context2.next = 50;
            break;
          }
          _context2.next = 5;
          return navigator.clipboard.read();
        case 5:
          items = _context2.sent;
          if (!(items && items.length > 0)) {
            _context2.next = 50;
            break;
          }
          _iterator = _createForOfIteratorHelper(items);
          _context2.prev = 8;
          _iterator.s();
        case 10:
          if ((_step = _iterator.n()).done) {
            _context2.next = 42;
            break;
          }
          clipboardItem = _step.value;
          _iterator2 = _createForOfIteratorHelper(clipboardItem.types);
          _context2.prev = 13;
          _iterator2.s();
        case 15:
          if ((_step2 = _iterator2.n()).done) {
            _context2.next = 32;
            break;
          }
          type = _step2.value;
          if (!/^image\//.test(type)) {
            _context2.next = 23;
            break;
          }
          _context2.next = 20;
          return clipboardItem.getType(type);
        case 20:
          img = _context2.sent;
          _context2.next = 30;
          break;
        case 23:
          if (!(type === 'text/plain')) {
            _context2.next = 30;
            break;
          }
          _context2.next = 26;
          return clipboardItem.getType(type);
        case 26:
          blob = _context2.sent;
          _context2.next = 29;
          return blob.text();
        case 29:
          text = _context2.sent;
        case 30:
          _context2.next = 15;
          break;
        case 32:
          _context2.next = 37;
          break;
        case 34:
          _context2.prev = 34;
          _context2.t0 = _context2["catch"](13);
          _iterator2.e(_context2.t0);
        case 37:
          _context2.prev = 37;
          _iterator2.f();
          return _context2.finish(37);
        case 40:
          _context2.next = 10;
          break;
        case 42:
          _context2.next = 47;
          break;
        case 44:
          _context2.prev = 44;
          _context2.t1 = _context2["catch"](8);
          _iterator.e(_context2.t1);
        case 47:
          _context2.prev = 47;
          _iterator.f();
          return _context2.finish(47);
        case 50:
          return _context2.abrupt("return", {
            text: text,
            img: img
          });
        case 51:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[8, 44, 47, 50], [13, 34, 37, 40]]);
  }));
  return function getDataFromClipboard() {
    return _ref4.apply(this, arguments);
  };
}();

// 从节点的父节点的nodeData.children列表中移除该节点的数据
var removeFromParentNodeData = function removeFromParentNodeData(node) {
  if (!node || !node.parent) return;
  var index = getNodeDataIndex(node);
  if (index === -1) return;
  node.parent.nodeData.children.splice(index, 1);
};

// 检查两个节点列表是否包含的节点是一样的
var checkNodeListIsEqual = function checkNodeListIsEqual(list1, list2) {
  if (list1.length !== list2.length) return false;
  var _loop4 = function _loop4(i) {
      if (!list2.find(function (item) {
        return item.uid === list1[i].uid;
      })) {
        return {
          v: false
        };
      }
    },
    _ret2;
  for (var i = 0; i < list1.length; i++) {
    _ret2 = _loop4(i);
    if (_ret2) return _ret2.v;
  }
  return true;
};

// 创建smm粘贴的粘贴数据
var createSmmFormatData = function createSmmFormatData(data) {
  return {
    simpleMindMap: true,
    data: data
  };
};

// 检查是否是smm粘贴格式的数据
var checkSmmFormatData = function checkSmmFormatData(data) {
  var smmData = null;
  // 如果是字符串，则尝试解析为对象
  if (typeof data === 'string') {
    try {
      var parsedData = JSON.parse(data);
      // 判断是否是对象，且存在属性标志
      if (_typeof(parsedData) === 'object' && parsedData.simpleMindMap) {
        smmData = parsedData.data;
      }
    } catch (error) {}
  } else if (_typeof(data) === 'object' && data.simpleMindMap) {
    // 否则如果是对象，则检查属性标志
    smmData = data.data;
  }
  var isSmm = !!smmData;
  return {
    isSmm: isSmm,
    data: isSmm ? smmData : String(data)
  };
};

// 处理输入框的粘贴事件，会去除文本的html格式、换行
var handleInputPasteText = function handleInputPasteText(e, text) {
  e.preventDefault();
  var selection = window.getSelection();
  if (!selection.rangeCount) return;
  selection.deleteFromDocument();
  text = text || e.clipboardData.getData('text');
  // 去除格式
  text = getTextFromHtml(text);
  // 去除换行
  // text = text.replaceAll(/\n/g, '')
  var textArr = text.split(/\n/g);
  var fragment = document.createDocumentFragment();
  textArr.forEach(function (item, index) {
    var node = document.createTextNode(item);
    fragment.appendChild(node);
    if (index < textArr.length - 1) {
      var br = document.createElement('br');
      fragment.appendChild(br);
    }
  });
  selection.getRangeAt(0).insertNode(fragment);
  selection.collapseToEnd();
};

// 将思维导图树结构转平级对象
/*
    {
        data: {
            uid: 'xxx'
        },
        children: [
            {
                data: {
                    uid: 'xxx'
                },
                children: []
            }
        ]
    }
    转为：
    {
        uid: {
            children: [uid1, uid2],
            data: {}
        }
    }
  */
var transformTreeDataToObject = function transformTreeDataToObject(data) {
  var res = {};
  var _walk7 = function walk(root, parent) {
    var uid = root.data.uid;
    if (parent) {
      parent.children.push(uid);
    }
    res[uid] = {
      isRoot: !parent,
      data: _objectSpread2({}, root.data),
      children: []
    };
    if (root.children && root.children.length > 0) {
      root.children.forEach(function (item) {
        _walk7(item, res[uid]);
      });
    }
  };
  _walk7(data, null);
  return res;
};

// 处理获取svg内容时添加额外内容
var handleGetSvgDataExtraContent = function handleGetSvgDataExtraContent(_ref5) {
  var addContentToHeader = _ref5.addContentToHeader,
    addContentToFooter = _ref5.addContentToFooter;
  // 追加内容
  var cssTextList = [];
  var header = null;
  var headerHeight = 0;
  var footer = null;
  var footerHeight = 0;
  var handle = function handle(fn, callback) {
    if (typeof fn === 'function') {
      var res = fn();
      if (!res) return;
      var el = res.el,
        cssText = res.cssText,
        height = res.height;
      if (el instanceof HTMLElement) {
        addXmlns(el);
        var foreignObject = createForeignObjectNode({
          el: el,
          height: height
        });
        callback(foreignObject, height);
      }
      if (cssText) {
        cssTextList.push(cssText);
      }
    }
  };
  handle(addContentToHeader, function (foreignObject, height) {
    header = foreignObject;
    headerHeight = height;
  });
  handle(addContentToFooter, function (foreignObject, height) {
    footer = foreignObject;
    footerHeight = height;
  });
  return {
    cssTextList: cssTextList,
    header: header,
    headerHeight: headerHeight,
    footer: footer,
    footerHeight: footerHeight
  };
};

// 获取指定节点的包围框信息
var getNodeTreeBoundingRect = function getNodeTreeBoundingRect(node) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var paddingX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var paddingY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var excludeSelf = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var excludeGeneralization = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var minX = Infinity;
  var maxX = -Infinity;
  var minY = Infinity;
  var maxY = -Infinity;
  var _walk8 = function walk(root, isRoot) {
    if (!(isRoot && excludeSelf) && root.group) {
      try {
        var _root$group$findOne$r = root.group.findOne('.smm-node-shape').rbox(),
          _x2 = _root$group$findOne$r.x,
          _y = _root$group$findOne$r.y,
          width = _root$group$findOne$r.width,
          height = _root$group$findOne$r.height;
        if (_x2 < minX) {
          minX = _x2;
        }
        if (_x2 + width > maxX) {
          maxX = _x2 + width;
        }
        if (_y < minY) {
          minY = _y;
        }
        if (_y + height > maxY) {
          maxY = _y + height;
        }
      } catch (e) {}
    }
    if (!excludeGeneralization && root._generalizationList.length > 0) {
      root._generalizationList.forEach(function (item) {
        _walk8(item.generalizationNode);
      });
    }
    if (root.children) {
      root.children.forEach(function (item) {
        _walk8(item);
      });
    }
  };
  _walk8(node, true);
  minX = minX - x + paddingX;
  minY = minY - y + paddingY;
  maxX = maxX - x + paddingX;
  maxY = maxY - y + paddingY;
  return {
    left: minX,
    top: minY,
    width: maxX - minX,
    height: maxY - minY
  };
};

// 全屏事件检测
var getOnfullscreEnevt = function getOnfullscreEnevt() {
  if (document.documentElement.requestFullScreen) {
    return 'fullscreenchange';
  } else if (document.documentElement.webkitRequestFullScreen) {
    return 'webkitfullscreenchange';
  } else if (document.documentElement.mozRequestFullScreen) {
    return 'mozfullscreenchange';
  } else if (document.documentElement.msRequestFullscreen) {
    return 'msfullscreenchange';
  }
};
getOnfullscreEnevt();

// 创建foreignObject节点
var createForeignObjectNode = function createForeignObjectNode(_ref6) {
  var el = _ref6.el,
    width = _ref6.width,
    height = _ref6.height;
  var foreignObject = new ForeignObject();
  if (width !== undefined) {
    foreignObject.width(width);
  }
  if (height !== undefined) {
    foreignObject.height(height);
  }
  foreignObject.add(el);
  return foreignObject;
};

// 格式化获取节点的概要数据
var formatGetNodeGeneralization = function formatGetNodeGeneralization(data) {
  var generalization = data.generalization;
  if (generalization) {
    return Array.isArray(generalization) ? generalization : [generalization];
  } else {
    return [];
  }
};

// 给节点添加命名空间
var addXmlns = function addXmlns(el) {
  el.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
};

// 给一组节点实例升序排序，依据其sortIndex值
var sortNodeList = function sortNodeList(nodeList) {
  nodeList = _toConsumableArray(nodeList);
  nodeList.sort(function (a, b) {
    return a.sortIndex - b.sortIndex;
  });
  return nodeList;
};

// 合并主题配置
var mergeTheme = function mergeTheme(dest, source) {
  return deepmerge_1(dest, source, {
    arrayMerge: function arrayMerge(destinationArray, sourceArray) {
      return sourceArray;
    }
  });
};

var backgroundStyleProps = ['backgroundColor', 'backgroundImage', 'backgroundRepeat', 'backgroundPosition', 'backgroundSize'];

//  样式类
var Style = /*#__PURE__*/function () {
  //  构造函数
  function Style(ctx) {
    _classCallCheck(this, Style);
    this.ctx = ctx;
    // 箭头图标
    this._markerPath = null;
    this._marker = null;
    // 渐变背景
    this._gradient = null;
  }

  //  合并样式
  return _createClass(Style, [{
    key: "merge",
    value: function merge(prop, root) {
      var themeConfig = this.ctx.mindMap.themeConfig;
      var defaultConfig = null;
      var useRoot = false;
      if (root) {
        // 使用最外层样式
        useRoot = true;
        defaultConfig = themeConfig;
      } else if (this.ctx.isGeneralization) {
        // 概要节点
        defaultConfig = themeConfig.generalization;
      } else if (this.ctx.layerIndex === 0) {
        // 根节点
        defaultConfig = themeConfig.root;
      } else if (this.ctx.layerIndex === 1) {
        // 二级节点
        defaultConfig = themeConfig.second;
      } else {
        // 三级及以下节点
        defaultConfig = themeConfig.node;
      }
      var value = '';
      // 优先使用节点本身的样式
      if (this.getSelfStyle(prop) !== undefined) {
        value = this.getSelfStyle(prop);
      } else if (defaultConfig[prop] !== undefined) {
        // 否则使用对应层级的样式
        value = defaultConfig[prop];
      } else {
        // 否则使用最外层样式
        value = themeConfig[prop];
      }
      if (!useRoot) {
        this.addToEffectiveStyles(_defineProperty({}, prop, value));
      }
      return value;
    }

    //  获取某个样式值
  }, {
    key: "getStyle",
    value: function getStyle(prop, root) {
      return this.merge(prop, root);
    }

    //  获取自身自定义样式
  }, {
    key: "getSelfStyle",
    value: function getSelfStyle(prop) {
      return this.ctx.getData(prop);
    }

    // 更新当前节点生效的样式数据
  }, {
    key: "addToEffectiveStyles",
    value: function addToEffectiveStyles(styles) {
      this.ctx.effectiveStyles = _objectSpread2(_objectSpread2({}, this.ctx.effectiveStyles), styles);
    }

    //  矩形
  }, {
    key: "rect",
    value: function rect(node) {
      this.shape(node);
      node.radius(this.merge('borderRadius'));
    }

    // 形状
  }, {
    key: "shape",
    value: function shape(node) {
      var styles = {
        gradientStyle: this.merge('gradientStyle'),
        startColor: this.merge('startColor'),
        endColor: this.merge('endColor'),
        startDir: this.merge('startDir'),
        endDir: this.merge('endDir'),
        fillColor: this.merge('fillColor'),
        borderColor: this.merge('borderColor'),
        borderWidth: this.merge('borderWidth'),
        borderDasharray: this.merge('borderDasharray')
      };
      if (styles.gradientStyle) {
        var _this$_gradient$from, _this$_gradient;
        if (!this._gradient) {
          this._gradient = this.ctx.nodeDraw.gradient('linear');
        }
        this._gradient.update(function (add) {
          add.stop(0, styles.startColor);
          add.stop(1, styles.endColor);
        });
        (_this$_gradient$from = (_this$_gradient = this._gradient).from.apply(_this$_gradient, _toConsumableArray(styles.startDir))).to.apply(_this$_gradient$from, _toConsumableArray(styles.endDir));
        node.fill(this._gradient);
      } else {
        node.fill({
          color: styles.fillColor
        });
      }
      // 节点使用横线样式，不需要渲染非激活状态的边框样式
      // if (
      //   !this.ctx.isRoot &&
      //   !this.ctx.isGeneralization &&
      //   this.ctx.mindMap.themeConfig.nodeUseLineStyle &&
      //   !this.ctx.getData('isActive')
      // ) {
      //   return
      // }
      node.stroke({
        color: styles.borderColor,
        width: styles.borderWidth,
        dasharray: styles.borderDasharray
      });
    }

    //  文字
  }, {
    key: "text",
    value: function text(node) {
      var styles = {
        color: this.merge('color'),
        fontFamily: this.merge('fontFamily'),
        fontSize: this.merge('fontSize'),
        fontWeight: this.merge('fontWeight'),
        fontStyle: this.merge('fontStyle'),
        textDecoration: this.merge('textDecoration')
      };
      node.fill({
        color: styles.color
      }).css({
        'font-family': styles.fontFamily,
        'font-size': styles.fontSize + 'px',
        'font-weight': styles.fontWeight,
        'font-style': styles.fontStyle,
        'text-decoration': styles.textDecoration
      });
    }

    // 生成内联样式
  }, {
    key: "createStyleText",
    value: function createStyleText() {
      var customStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var styles = _objectSpread2({
        color: this.merge('color'),
        fontFamily: this.merge('fontFamily'),
        fontSize: this.merge('fontSize'),
        fontWeight: this.merge('fontWeight'),
        fontStyle: this.merge('fontStyle'),
        textDecoration: this.merge('textDecoration')
      }, customStyle);
      return "\n      color: ".concat(styles.color, ";\n      font-family: ").concat(styles.fontFamily, ";\n      font-size: ").concat(styles.fontSize + 'px', ";\n      font-weight: ").concat(styles.fontWeight, ";\n      font-style: ").concat(styles.fontStyle, ";\n      text-decoration: ").concat(styles.textDecoration, "\n    ");
    }

    // 获取文本样式
  }, {
    key: "getTextFontStyle",
    value: function getTextFontStyle() {
      var styles = {
        color: this.merge('color'),
        fontFamily: this.merge('fontFamily'),
        fontSize: this.merge('fontSize'),
        fontWeight: this.merge('fontWeight'),
        fontStyle: this.merge('fontStyle'),
        textDecoration: this.merge('textDecoration')
      };
      return {
        italic: styles.fontStyle === 'italic',
        bold: styles.fontWeight,
        fontSize: styles.fontSize,
        fontFamily: styles.fontFamily
      };
    }

    //  html文字节点
  }, {
    key: "domText",
    value: function domText(node) {
      var fontSizeScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var styles = {
        color: this.merge('color'),
        fontFamily: this.merge('fontFamily'),
        fontSize: this.merge('fontSize'),
        fontWeight: this.merge('fontWeight'),
        fontStyle: this.merge('fontStyle'),
        textDecoration: this.merge('textDecoration')
      };
      node.style.color = styles.color;
      node.style.textDecoration = styles.textDecoration;
      node.style.fontFamily = styles.fontFamily;
      node.style.fontSize = styles.fontSize * fontSizeScale + 'px';
      node.style.fontWeight = styles.fontWeight || 'normal';
      node.style.fontStyle = styles.fontStyle;
    }

    //  标签文字
  }, {
    key: "tagText",
    value: function tagText(node, style) {
      node.fill({
        color: '#fff'
      }).css({
        'font-size': style.fontSize + 'px'
      });
    }

    //  标签矩形
  }, {
    key: "tagRect",
    value: function tagRect(node, style) {
      node.fill({
        color: style.fill
      });
      if (style.radius) {
        node.radius(style.radius);
      }
    }

    //  内置图标
  }, {
    key: "iconNode",
    value: function iconNode(node) {
      node.attr({
        fill: this.merge('color')
      });
    }

    //  连线
  }, {
    key: "line",
    value: function line(_line) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        width = _ref.width,
        color = _ref.color,
        dasharray = _ref.dasharray;
      var enableMarker = arguments.length > 2 ? arguments[2] : undefined;
      var childNode = arguments.length > 3 ? arguments[3] : undefined;
      var customHandleLine = this.ctx.mindMap.opt.customHandleLine;
      if (typeof customHandleLine === 'function') {
        customHandleLine(this.ctx, _line, {
          width: width,
          color: color,
          dasharray: dasharray
        });
      }
      _line.stroke({
        color: color,
        dasharray: dasharray,
        width: width
      }).fill({
        color: 'none'
      });
      // 可以显示箭头
      if (enableMarker) {
        var showMarker = this.merge('showLineMarker', true);
        var childNodeStyle = childNode.style;
        // 显示箭头
        if (showMarker) {
          // 创建子节点箭头标记
          childNodeStyle._marker = childNodeStyle._marker || childNodeStyle.createMarker();
          // 设置样式
          childNodeStyle._markerPath.stroke({
            color: color
          }).fill({
            color: color
          });
          // 箭头位置可能会发生改变，所以需要先删除
          _line.attr('marker-start', '');
          _line.attr('marker-end', '');
          var dir = childNodeStyle.merge('lineMarkerDir');
          _line.marker(dir, childNodeStyle._marker);
        } else if (childNodeStyle._marker) {
          // 不显示箭头，则删除该子节点的箭头标记
          _line.attr('marker-start', '');
          _line.attr('marker-end', '');
          childNodeStyle._marker.remove();
          childNodeStyle._marker = null;
        }
      }
    }

    // 创建箭头
  }, {
    key: "createMarker",
    value: function createMarker() {
      var _this = this;
      return this.ctx.lineDraw.marker(20, 20, function (add) {
        add.ref(8, 5);
        add.size(20, 20);
        add.attr('markerUnits', 'userSpaceOnUse');
        add.attr('orient', 'auto-start-reverse');
        _this._markerPath = add.path('M0,0 L2,5 L0,10 L10,5 Z');
      });
    }

    //  概要连线
  }, {
    key: "generalizationLine",
    value: function generalizationLine(node) {
      node.stroke({
        width: this.merge('generalizationLineWidth', true),
        color: this.merge('generalizationLineColor', true)
      }).fill({
        color: 'none'
      });
    }

    //  展开收起按钮
  }, {
    key: "iconBtn",
    value: function iconBtn(node, node2, fillNode) {
      var _ref2 = this.ctx.mindMap.opt.expandBtnStyle || {
          color: '#808080',
          fill: '#fff',
          fontSize: 12,
          strokeColor: '#333333',
          fontColor: '#333333'
        },
        color = _ref2.color,
        fill = _ref2.fill,
        fontSize = _ref2.fontSize,
        fontColor = _ref2.fontColor;
      node.fill({
        color: color
      });
      node2.fill({
        color: color
      });
      fillNode.fill({
        color: fill
      });
      if (this.ctx.mindMap.opt.isShowExpandNum) {
        node.attr({
          'font-size': fontSize + 'px',
          'font-color': fontColor
        });
      }
    }

    // 是否设置了自定义的样式
  }, {
    key: "hasCustomStyle",
    value: function hasCustomStyle() {
      var res = false;
      Object.keys(this.ctx.getData()).forEach(function (item) {
        if (checkIsNodeStyleDataKey(item)) {
          res = true;
        }
      });
      return res;
    }

    // 获取自定义的样式
  }, {
    key: "getCustomStyle",
    value: function getCustomStyle() {
      var _this2 = this;
      var customStyle = {};
      Object.keys(this.ctx.getData()).forEach(function (item) {
        if (checkIsNodeStyleDataKey(item)) {
          customStyle[item] = _this2.ctx.getData(item);
        }
      });
      return customStyle;
    }

    // hover和激活节点
  }, {
    key: "hoverNode",
    value: function hoverNode(node) {
      var hoverRectColor = this.merge('hoverRectColor') || this.ctx.mindMap.opt.hoverRectColor;
      var hoverRectRadius = this.merge('hoverRectRadius');
      node.radius(hoverRectRadius).fill('none').stroke({
        color: hoverRectColor
      });
    }

    // 所属节点被删除时的操作
  }, {
    key: "onRemove",
    value: function onRemove() {
      if (this._marker) {
        this._marker.remove();
        this._marker = null;
      }
      if (this._markerPath) {
        this._markerPath.remove();
        this._markerPath = null;
      }
      if (this._gradient) {
        this._gradient.remove();
        this._gradient = null;
      }
    }
  }], [{
    key: "setBackgroundStyle",
    value:
    //   设置背景样式
    function setBackgroundStyle(el, themeConfig) {
      if (!el) return;
      // 缓存容器元素原本的样式
      if (!Style.cacheStyle) {
        Style.cacheStyle = {};
        var style = window.getComputedStyle(el);
        backgroundStyleProps.forEach(function (prop) {
          Style.cacheStyle[prop] = style[prop];
        });
      }
      // 设置新样式
      var backgroundColor = themeConfig.backgroundColor,
        backgroundImage = themeConfig.backgroundImage,
        backgroundRepeat = themeConfig.backgroundRepeat,
        backgroundPosition = themeConfig.backgroundPosition,
        backgroundSize = themeConfig.backgroundSize;
      el.style.backgroundColor = backgroundColor;
      if (backgroundImage && backgroundImage !== 'none') {
        el.style.backgroundImage = "url(".concat(backgroundImage, ")");
        el.style.backgroundRepeat = backgroundRepeat;
        el.style.backgroundPosition = backgroundPosition;
        el.style.backgroundSize = backgroundSize;
      } else {
        el.style.backgroundImage = 'none';
      }
    }

    // 移除背景样式
  }, {
    key: "removeBackgroundStyle",
    value: function removeBackgroundStyle(el) {
      if (!Style.cacheStyle) return;
      backgroundStyleProps.forEach(function (prop) {
        el.style[prop] = Style.cacheStyle[prop];
      });
      Style.cacheStyle = null;
    }
  }]);
}();
Style.cacheStyle = null;

//  节点形状类
var Shape = /*#__PURE__*/function () {
  function Shape(node) {
    _classCallCheck(this, Shape);
    this.node = node;
    this.mindMap = node.mindMap;
  }

  //  形状需要的padding
  return _createClass(Shape, [{
    key: "getShapePadding",
    value: function getShapePadding(width, height, paddingX, paddingY) {
      var shape = this.node.getShape();
      var defaultPaddingX = 15;
      var defaultPaddingY = 5;
      var actWidth = width + paddingX * 2;
      var actHeight = height + paddingY * 2;
      var actOffset = Math.abs(actWidth - actHeight);
      switch (shape) {
        case CONSTANTS.SHAPE.ROUNDED_RECTANGLE:
          return {
            paddingX: height > width ? (height - width) / 2 : 0,
            paddingY: 0
          };
        case CONSTANTS.SHAPE.DIAMOND:
          return {
            paddingX: width / 2,
            paddingY: height / 2
          };
        case CONSTANTS.SHAPE.PARALLELOGRAM:
          return {
            paddingX: paddingX <= 0 ? defaultPaddingX : 0,
            paddingY: 0
          };
        case CONSTANTS.SHAPE.OUTER_TRIANGULAR_RECTANGLE:
          return {
            paddingX: paddingX <= 0 ? defaultPaddingX : 0,
            paddingY: 0
          };
        case CONSTANTS.SHAPE.INNER_TRIANGULAR_RECTANGLE:
          return {
            paddingX: paddingX <= 0 ? defaultPaddingX : 0,
            paddingY: 0
          };
        case CONSTANTS.SHAPE.ELLIPSE:
          return {
            paddingX: paddingX <= 0 ? defaultPaddingX : 0,
            paddingY: paddingY <= 0 ? defaultPaddingY : 0
          };
        case CONSTANTS.SHAPE.CIRCLE:
          return {
            paddingX: actHeight > actWidth ? actOffset / 2 : 0,
            paddingY: actHeight < actWidth ? actOffset / 2 : 0
          };
        default:
          return {
            paddingX: 0,
            paddingY: 0
          };
      }
    }

    //  创建形状节点
  }, {
    key: "createShape",
    value: function createShape() {
      var shape = this.node.getShape();
      var node = null;
      // 矩形
      if (shape === CONSTANTS.SHAPE.RECTANGLE) {
        node = this.createRect();
      } else if (shape === CONSTANTS.SHAPE.DIAMOND) {
        // 菱形
        node = this.createDiamond();
      } else if (shape === CONSTANTS.SHAPE.PARALLELOGRAM) {
        // 平行四边形
        node = this.createParallelogram();
      } else if (shape === CONSTANTS.SHAPE.ROUNDED_RECTANGLE) {
        // 圆角矩形
        node = this.createRoundedRectangle();
      } else if (shape === CONSTANTS.SHAPE.OCTAGONAL_RECTANGLE) {
        // 八角矩形
        node = this.createOctagonalRectangle();
      } else if (shape === CONSTANTS.SHAPE.OUTER_TRIANGULAR_RECTANGLE) {
        // 外三角矩形
        node = this.createOuterTriangularRectangle();
      } else if (shape === CONSTANTS.SHAPE.INNER_TRIANGULAR_RECTANGLE) {
        // 内三角矩形
        node = this.createInnerTriangularRectangle();
      } else if (shape === CONSTANTS.SHAPE.ELLIPSE) {
        // 椭圆
        node = this.createEllipse();
      } else if (shape === CONSTANTS.SHAPE.CIRCLE) {
        // 圆
        node = this.createCircle();
      }
      return node;
    }

    // 获取节点减去节点边框宽度、hover节点边框宽度后的尺寸
  }, {
    key: "getNodeSize",
    value: function getNodeSize() {
      var borderWidth = this.node.getBorderWidth();
      var _this$node = this.node,
        width = _this$node.width,
        height = _this$node.height;
      width -= borderWidth;
      height -= borderWidth;
      return {
        width: width,
        height: height
      };
    }

    // 创建路径节点
  }, {
    key: "createPath",
    value: function createPath(pathStr) {
      var customCreateNodePath = this.mindMap.opt.customCreateNodePath;
      if (customCreateNodePath) {
        return SVG(customCreateNodePath(pathStr));
      }
      return new Path().plot(pathStr);
    }

    // 创建多边形节点
  }, {
    key: "createPolygon",
    value: function createPolygon(points) {
      var customCreateNodePolygon = this.mindMap.opt.customCreateNodePolygon;
      if (customCreateNodePolygon) {
        return SVG(customCreateNodePolygon(points));
      }
      return new Polygon().plot(points);
    }

    // 创建矩形
  }, {
    key: "createRect",
    value: function createRect() {
      var _this$getNodeSize = this.getNodeSize(),
        width = _this$getNodeSize.width,
        height = _this$getNodeSize.height;
      var borderRadius = this.node.style.merge('borderRadius');
      var pathStr = "\n      M".concat(borderRadius, ",0\n      L").concat(width - borderRadius, ",0\n      C").concat(width - borderRadius, ",0 ").concat(width, ",", 0, " ").concat(width, ",").concat(borderRadius, "\n      L").concat(width, ",").concat(height - borderRadius, "\n      C").concat(width, ",").concat(height - borderRadius, " ").concat(width, ",").concat(height, " ").concat(width - borderRadius, ",").concat(height, "\n      L").concat(borderRadius, ",").concat(height, "\n      C").concat(borderRadius, ",").concat(height, " ", 0, ",").concat(height, " ", 0, ",").concat(height - borderRadius, "\n      L", 0, ",").concat(borderRadius, "\n      C", 0, ",").concat(borderRadius, " ", 0, ",", 0, " ").concat(borderRadius, ",", 0, "\n      Z\n    ");
      return this.createPath(pathStr);
    }

    //  创建菱形
  }, {
    key: "createDiamond",
    value: function createDiamond() {
      var _this$getNodeSize2 = this.getNodeSize(),
        width = _this$getNodeSize2.width,
        height = _this$getNodeSize2.height;
      var halfWidth = width / 2;
      var halfHeight = height / 2;
      var topX = halfWidth;
      var topY = 0;
      var rightX = width;
      var rightY = halfHeight;
      var bottomX = halfWidth;
      var bottomY = height;
      var leftX = 0;
      var leftY = halfHeight;
      var points = [[topX, topY], [rightX, rightY], [bottomX, bottomY], [leftX, leftY]];
      return this.createPolygon(points);
    }

    //  创建平行四边形
  }, {
    key: "createParallelogram",
    value: function createParallelogram() {
      var _this$node$getPadding = this.node.getPaddingVale(),
        paddingX = _this$node$getPadding.paddingX;
      paddingX = paddingX || this.node.shapePadding.paddingX;
      var _this$getNodeSize3 = this.getNodeSize(),
        width = _this$getNodeSize3.width,
        height = _this$getNodeSize3.height;
      var points = [[paddingX, 0], [width, 0], [width - paddingX, height], [0, height]];
      return this.createPolygon(points);
    }

    //  创建圆角矩形
  }, {
    key: "createRoundedRectangle",
    value: function createRoundedRectangle() {
      var _this$getNodeSize4 = this.getNodeSize(),
        width = _this$getNodeSize4.width,
        height = _this$getNodeSize4.height;
      var halfHeight = height / 2;
      var pathStr = "\n      M".concat(halfHeight, ",0\n      L").concat(width - halfHeight, ",0\n      A").concat(height / 2, ",").concat(height / 2, " 0 0,1 ").concat(width - halfHeight, ",").concat(height, " \n      L").concat(halfHeight, ",").concat(height, "\n      A").concat(height / 2, ",").concat(height / 2, " 0 0,1 ").concat(halfHeight, ",", 0, "\n    ");
      return this.createPath(pathStr);
    }

    //  创建八角矩形
  }, {
    key: "createOctagonalRectangle",
    value: function createOctagonalRectangle() {
      var w = 5;
      var _this$getNodeSize5 = this.getNodeSize(),
        width = _this$getNodeSize5.width,
        height = _this$getNodeSize5.height;
      var points = [[0, w], [w, 0], [width - w, 0], [width, w], [width, height - w], [width - w, height], [w, height], [0, height - w]];
      return this.createPolygon(points);
    }

    //  创建外三角矩形
  }, {
    key: "createOuterTriangularRectangle",
    value: function createOuterTriangularRectangle() {
      var _this$node$getPadding2 = this.node.getPaddingVale(),
        paddingX = _this$node$getPadding2.paddingX;
      paddingX = paddingX || this.node.shapePadding.paddingX;
      var _this$getNodeSize6 = this.getNodeSize(),
        width = _this$getNodeSize6.width,
        height = _this$getNodeSize6.height;
      var points = [[paddingX, 0], [width - paddingX, 0], [width, height / 2], [width - paddingX, height], [paddingX, height], [0, height / 2]];
      return this.createPolygon(points);
    }

    //  创建内三角矩形
  }, {
    key: "createInnerTriangularRectangle",
    value: function createInnerTriangularRectangle() {
      var _this$node$getPadding3 = this.node.getPaddingVale(),
        paddingX = _this$node$getPadding3.paddingX;
      paddingX = paddingX || this.node.shapePadding.paddingX;
      var _this$getNodeSize7 = this.getNodeSize(),
        width = _this$getNodeSize7.width,
        height = _this$getNodeSize7.height;
      var points = [[0, 0], [width, 0], [width - paddingX / 2, height / 2], [width, height], [0, height], [paddingX / 2, height / 2]];
      return this.createPolygon(points);
    }

    //  创建椭圆
  }, {
    key: "createEllipse",
    value: function createEllipse() {
      var _this$getNodeSize8 = this.getNodeSize(),
        width = _this$getNodeSize8.width,
        height = _this$getNodeSize8.height;
      var halfWidth = width / 2;
      var halfHeight = height / 2;
      var pathStr = "\n      M".concat(halfWidth, ",0\n      A").concat(halfWidth, ",").concat(halfHeight, " 0 0,1 ").concat(halfWidth, ",").concat(height, " \n      M").concat(halfWidth, ",").concat(height, " \n      A").concat(halfWidth, ",").concat(halfHeight, " 0 0,1 ").concat(halfWidth, ",", 0, " \n    ");
      return this.createPath(pathStr);
    }

    //  创建圆
  }, {
    key: "createCircle",
    value: function createCircle() {
      var _this$getNodeSize9 = this.getNodeSize(),
        width = _this$getNodeSize9.width,
        height = _this$getNodeSize9.height;
      var halfWidth = width / 2;
      var halfHeight = height / 2;
      var pathStr = "\n      M".concat(halfWidth, ",0\n      A").concat(halfWidth, ",").concat(halfHeight, " 0 0,1 ").concat(halfWidth, ",").concat(height, " \n      M").concat(halfWidth, ",").concat(height, " \n      A").concat(halfWidth, ",").concat(halfHeight, " 0 0,1 ").concat(halfWidth, ",", 0, " \n    ");
      return this.createPath(pathStr);
    }
  }]);
}(); // 形状列表
var shapeList = [CONSTANTS.SHAPE.RECTANGLE, CONSTANTS.SHAPE.DIAMOND, CONSTANTS.SHAPE.PARALLELOGRAM, CONSTANTS.SHAPE.ROUNDED_RECTANGLE, CONSTANTS.SHAPE.OCTAGONAL_RECTANGLE, CONSTANTS.SHAPE.OUTER_TRIANGULAR_RECTANGLE, CONSTANTS.SHAPE.INNER_TRIANGULAR_RECTANGLE, CONSTANTS.SHAPE.ELLIPSE, CONSTANTS.SHAPE.CIRCLE];

// 获取节点概要数据
function formatGetGeneralization() {
  var data = this.getData('generalization');
  return Array.isArray(data) ? data : data ? [data] : [];
}

//  检查是否存在概要
function checkHasGeneralization() {
  return this.formatGetGeneralization().length > 0;
}

//  检查是否存在自身的概要，非子节点区间
function checkHasSelfGeneralization() {
  var list = this.formatGetGeneralization();
  return !!list.find(function (item) {
    return !item.range || item.range.length <= 0;
  });
}

// 获取概要节点所在的概要列表里的索引
function getGeneralizationNodeIndex(node) {
  return this._generalizationList.findIndex(function (item) {
    return item.generalizationNode.uid === node.uid;
  });
}

//  创建概要节点
function createGeneralizationNode() {
  var _this = this;
  if (this.isGeneralization || !this.checkHasGeneralization()) {
    return;
  }
  var maxWidth = 0;
  var maxHeight = 0;
  var list = this.formatGetGeneralization();
  list.forEach(function (item, index) {
    var cur = _this._generalizationList[index];
    if (!cur) {
      cur = _this._generalizationList[index] = {};
    }
    // 所属节点
    cur.node = _this;
    // 区间范围
    cur.range = item.range;
    // 线和节点
    if (!cur.generalizationLine) {
      cur.generalizationLine = _this.lineDraw.path();
    }
    if (!cur.generalizationNode) {
      cur.generalizationNode = new MindMapNode({
        data: {
          inserting: item.inserting,
          data: item
        },
        uid: createUid(),
        renderer: _this.renderer,
        mindMap: _this.mindMap,
        isGeneralization: true
      });
    }
    delete item.inserting;
    // 关联所属节点
    cur.generalizationNode.generalizationBelongNode = _this;
    // 大小
    if (cur.generalizationNode.width > maxWidth) maxWidth = cur.generalizationNode.width;
    if (cur.generalizationNode.height > maxHeight) maxHeight = cur.generalizationNode.height;
    // 如果该概要为激活状态，那么加入激活节点列表
    if (item.isActive) {
      _this.renderer.addNodeToActiveList(cur.generalizationNode);
    }
  });
  this._generalizationNodeWidth = maxWidth;
  this._generalizationNodeHeight = maxHeight;
}

//  更新概要节点
function updateGeneralization() {
  if (this.isGeneralization) return;
  this.removeGeneralization();
  this.createGeneralizationNode();
}

//  渲染概要节点
function renderGeneralization(forceRender) {
  var _this2 = this;
  if (this.isGeneralization) return;
  this.updateGeneralizationData();
  var list = this.formatGetGeneralization();
  if (list.length <= 0 || this.getData('expand') === false) {
    this.removeGeneralization();
    return;
  }
  if (list.length !== this._generalizationList.length) {
    this.removeGeneralization();
  }
  this.createGeneralizationNode();
  this.renderer.layout.renderGeneralization(this._generalizationList);
  this._generalizationList.forEach(function (item) {
    _this2.style.generalizationLine(item.generalizationLine);
    item.generalizationNode.render(function () {}, forceRender);
  });
}

// 更新节点概要数据
function updateGeneralizationData() {
  var childrenLength = this.nodeData.children.length;
  var list = this.formatGetGeneralization();
  var newList = [];
  list.forEach(function (item) {
    if (!item.range) {
      newList.push(item);
      return;
    }
    if (item.range.length > 0 && item.range[0] <= childrenLength - 1 && item.range[1] <= childrenLength - 1) {
      newList.push(item);
    }
  });
  if (newList.length !== list.length) {
    this.setData({
      generalization: newList
    });
  }
}

//  删除概要节点
function removeGeneralization() {
  var _this3 = this;
  if (this.isGeneralization) return;
  this._generalizationList.forEach(function (item) {
    item.generalizationNode.style.onRemove();
    if (item.generalizationLine) {
      item.generalizationLine.remove();
      item.generalizationLine = null;
    }
    if (item.generalizationNode) {
      // 删除概要节点时要同步从激活节点里删除
      _this3.renderer.removeNodeFromActiveList(item.generalizationNode);
      item.generalizationNode.remove();
      item.generalizationNode = null;
    }
  });
  this._generalizationList = [];
  // hack修复当激活一个节点时创建概要，然后立即激活创建的概要节点后会重复创建概要节点并且无法删除的问题
  if (this.generalizationBelongNode) {
    this.nodeDraw.find('.generalization_' + this.generalizationBelongNode.uid).remove();
  }
}

//  隐藏概要节点
function hideGeneralization() {
  if (this.isGeneralization) return;
  this._generalizationList.forEach(function (item) {
    if (item.generalizationLine) item.generalizationLine.hide();
    if (item.generalizationNode) item.generalizationNode.hide();
  });
}

//  显示概要节点
function showGeneralization() {
  if (this.isGeneralization) return;
  this._generalizationList.forEach(function (item) {
    if (item.generalizationLine) item.generalizationLine.show();
    if (item.generalizationNode) item.generalizationNode.show();
  });
}

// 设置概要节点的透明度
function setGeneralizationOpacity(val) {
  this._generalizationList.forEach(function (item) {
    item.generalizationLine.opacity(val);
    item.generalizationNode.group.opacity(val);
  });
}

// 处理概要节点鼠标移入事件
function handleGeneralizationMouseenter() {
  var belongNode = this.generalizationBelongNode;
  var list = belongNode.formatGetGeneralization();
  var index = belongNode.getGeneralizationNodeIndex(this);
  var generalizationData = list[index];
  // 如果主题中设置了hoverRectColor颜色，那么使用该颜色
  // 否则使用hoverRectColor实例化选项的颜色
  // 兜底使用highlightNode方法的默认颜色
  var hoverRectColor = this.getStyle('hoverRectColor');
  var color = hoverRectColor || this.mindMap.opt.hoverRectColor;
  var style = color ? {
    stroke: color
  } : null;
  // 区间概要，框子节点
  if (Array.isArray(generalizationData.range) && generalizationData.range.length > 0) {
    this.mindMap.renderer.highlightNode(belongNode, generalizationData.range, style);
  } else {
    // 否则框自己
    this.mindMap.renderer.highlightNode(belongNode, null, style);
  }
}

// 处理概要节点鼠标移出事件
function handleGeneralizationMouseleave() {
  this.mindMap.renderer.closeHighlightNode();
}
var nodeGeneralizationMethods = {
  formatGetGeneralization: formatGetGeneralization,
  checkHasGeneralization: checkHasGeneralization,
  checkHasSelfGeneralization: checkHasSelfGeneralization,
  getGeneralizationNodeIndex: getGeneralizationNodeIndex,
  createGeneralizationNode: createGeneralizationNode,
  updateGeneralization: updateGeneralization,
  updateGeneralizationData: updateGeneralizationData,
  renderGeneralization: renderGeneralization,
  removeGeneralization: removeGeneralization,
  hideGeneralization: hideGeneralization,
  showGeneralization: showGeneralization,
  setGeneralizationOpacity: setGeneralizationOpacity,
  handleGeneralizationMouseenter: handleGeneralizationMouseenter,
  handleGeneralizationMouseleave: handleGeneralizationMouseleave
};

//  展开按钮
var open = "<svg t=\"1618141562310\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"13476\" width=\"200\" height=\"200\"><path d=\"M475.136 327.168v147.968h-147.968v74.24h147.968v147.968h74.24v-147.968h147.968v-74.24h-147.968v-147.968h-74.24z m36.864-222.208c225.28 0 407.04 181.76 407.04 407.04s-181.76 407.04-407.04 407.04-407.04-181.76-407.04-407.04 181.76-407.04 407.04-407.04z m0-74.24c-265.216 0-480.768 215.552-480.768 480.768s215.552 480.768 480.768 480.768 480.768-215.552 480.768-480.768-215.552-480.768-480.768-480.768z\" p-id=\"13477\"></path></svg>";

//  收缩按钮
var close = "<svg t=\"1618141589243\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"13611\" width=\"200\" height=\"200\"><path d=\"M512 105.472c225.28 0 407.04 181.76 407.04 407.04s-181.76 407.04-407.04 407.04-407.04-181.76-407.04-407.04 181.76-407.04 407.04-407.04z m0-74.24c-265.216 0-480.768 215.552-480.768 480.768s215.552 480.768 480.768 480.768 480.768-215.552 480.768-480.768-215.552-480.768-480.768-480.768z\" p-id=\"13612\"></path><path d=\"M252.928 474.624h518.144v74.24h-518.144z\" p-id=\"13613\"></path></svg>";

// 删除按钮
var remove = "<svg width=\"14px\" height=\"14px\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"13611\" width=\"200\" height=\"200\"><path fill=\"#ffffff\" d=\"M512 105.472c225.28 0 407.04 181.76 407.04 407.04s-181.76 407.04-407.04 407.04-407.04-181.76-407.04-407.04 181.76-407.04 407.04-407.04z m0-74.24c-265.216 0-480.768 215.552-480.768 480.768s215.552 480.768 480.768 480.768 480.768-215.552 480.768-480.768-215.552-480.768-480.768-480.768z\" p-id=\"13612\"></path><path fill=\"#ffffff\" d=\"M252.928 474.624h518.144v74.24h-518.144z\" p-id=\"13613\"></path></svg>";

// 图片调整按钮
var imgAdjust = "<svg width=\"12px\" height=\"12px\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#ffffff\" d=\"M1008.128 614.4a25.6 25.6 0 0 0-27.648 5.632l-142.848 142.848L259.072 186.88 401.92 43.52A25.6 25.6 0 0 0 384 0h-358.4a25.6 25.6 0 0 0-25.6 25.6v358.4a25.6 25.6 0 0 0 43.52 17.92l143.36-142.848 578.048 578.048-142.848 142.848a25.6 25.6 0 0 0 17.92 43.52h358.4a25.6 25.6 0 0 0 25.6-25.6v-358.4a25.6 25.6 0 0 0-15.872-25.088z\"  /></svg>";
var btnsSvg = {
  open: open,
  close: close,
  remove: remove,
  imgAdjust: imgAdjust
};

// 创建展开收起按钮的内容节点
function createExpandNodeContent() {
  if (this._openExpandNode) {
    return;
  }
  var _ref = this.mindMap.opt.expandBtnIcon || {},
    close = _ref.close,
    open = _ref.open;
  // 根据配置判断是否显示数量按钮
  if (this.mindMap.opt.isShowExpandNum) {
    // 展开的节点
    this._openExpandNode = new Text();
    // 文本垂直居中
    this._openExpandNode.attr({
      'text-anchor': 'middle',
      'dominant-baseline': 'middle',
      x: this.expandBtnSize / 2,
      y: 2
    });
  } else {
    this._openExpandNode = SVG(open || btnsSvg.open).size(this.expandBtnSize, this.expandBtnSize);
    this._openExpandNode.x(0).y(-this.expandBtnSize / 2);
  }
  // 收起的节点
  this._closeExpandNode = SVG(close || btnsSvg.close).size(this.expandBtnSize, this.expandBtnSize);
  this._closeExpandNode.x(0).y(-this.expandBtnSize / 2);
  // 填充节点
  this._fillExpandNode = new Circle().size(this.expandBtnSize);
  this._fillExpandNode.x(0).y(-this.expandBtnSize / 2);

  // 设置样式
  this.style.iconBtn(this._openExpandNode, this._closeExpandNode, this._fillExpandNode);
}
function sumNode() {
  var _this = this;
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return data.reduce(function (total, cur) {
    return total + _this.sumNode(cur.children || []);
  }, data.length);
}
//  创建或更新展开收缩按钮内容
function updateExpandBtnNode() {
  var _this$getData = this.getData(),
    expand = _this$getData.expand;
  // 如果本次和上次的展开状态一样则返回
  if (expand === this._lastExpandBtnType) return;
  if (this._expandBtn) {
    this._expandBtn.clear();
  }
  this.createExpandNodeContent();
  var node;
  if (expand === false) {
    node = this._openExpandNode;
    this._lastExpandBtnType = false;
  } else {
    node = this._closeExpandNode;
    this._lastExpandBtnType = true;
  }
  if (this._expandBtn) {
    // 如果是收起按钮加上边框
    var _this$mindMap$opt = this.mindMap.opt,
      isShowExpandNum = _this$mindMap$opt.isShowExpandNum,
      expandBtnStyle = _this$mindMap$opt.expandBtnStyle,
      expandBtnNumHandler = _this$mindMap$opt.expandBtnNumHandler;
    if (isShowExpandNum) {
      if (!expand) {
        // 数字按钮添加边框
        this._fillExpandNode.stroke({
          color: expandBtnStyle.strokeColor
        });
        // 计算子节点数量
        var count = this.sumNode(this.nodeData.children);
        if (typeof expandBtnNumHandler === 'function') {
          var res = expandBtnNumHandler(count, this);
          if (!isUndef(res)) {
            count = res;
          }
        }
        node.text(String(count));
      } else {
        this._fillExpandNode.stroke('none');
      }
    }
    this._expandBtn.add(this._fillExpandNode).add(node);
  }
}

//  更新展开收缩按钮位置
function updateExpandBtnPos() {
  if (!this._expandBtn) {
    return;
  }
  this.renderer.layout.renderExpandBtn(this, this._expandBtn);
}

//  创建展开收缩按钮
function renderExpandBtn() {
  var _this2 = this;
  if (!this.nodeData.children || this.nodeData.children.length <= 0 || this.isRoot) {
    return;
  }
  if (this._expandBtn) {
    this.group.add(this._expandBtn);
  } else {
    this._expandBtn = new G();
    this._expandBtn.on('mouseover', function (e) {
      e.stopPropagation();
      _this2._expandBtn.css({
        cursor: 'pointer'
      });
    });
    this._expandBtn.on('mouseout', function (e) {
      e.stopPropagation();
      _this2._expandBtn.css({
        cursor: 'auto'
      });
    });
    this._expandBtn.on('click', function (e) {
      e.stopPropagation();
      // 展开收缩
      _this2.mindMap.execCommand('SET_NODE_EXPAND', _this2, !_this2.getData('expand'));
      _this2.mindMap.emit('expand_btn_click', _this2);
    });
    this._expandBtn.on('dblclick', function (e) {
      e.stopPropagation();
    });
    this._expandBtn.addClass('smm-expand-btn');
    this.group.add(this._expandBtn);
  }
  this._showExpandBtn = true;
  this.updateExpandBtnNode();
  this.updateExpandBtnPos();
}

//  移除展开收缩按钮
function removeExpandBtn() {
  if (this._expandBtn && this._showExpandBtn) {
    this._expandBtn.remove();
    this._showExpandBtn = false;
  }
}

// 显示展开收起按钮
function showExpandBtn() {
  var _this3 = this;
  var _this$mindMap$opt2 = this.mindMap.opt,
    alwaysShowExpandBtn = _this$mindMap$opt2.alwaysShowExpandBtn,
    notShowExpandBtn = _this$mindMap$opt2.notShowExpandBtn;
  if (alwaysShowExpandBtn || notShowExpandBtn) return;
  setTimeout(function () {
    _this3.renderExpandBtn();
  }, 0);
}

// 隐藏展开收起按钮
function hideExpandBtn() {
  var _this4 = this;
  var _this$mindMap$opt3 = this.mindMap.opt,
    alwaysShowExpandBtn = _this$mindMap$opt3.alwaysShowExpandBtn,
    notShowExpandBtn = _this$mindMap$opt3.notShowExpandBtn;
  if (alwaysShowExpandBtn || this._isMouseenter || notShowExpandBtn) return;
  // 非激活状态且展开状态鼠标移出才隐藏按钮
  var _this$getData2 = this.getData(),
    isActive = _this$getData2.isActive,
    expand = _this$getData2.expand;
  if (!isActive && expand) {
    setTimeout(function () {
      _this4.removeExpandBtn();
    }, 0);
  }
}
var nodeExpandBtnMethods = {
  createExpandNodeContent: createExpandNodeContent,
  updateExpandBtnNode: updateExpandBtnNode,
  updateExpandBtnPos: updateExpandBtnPos,
  renderExpandBtn: renderExpandBtn,
  removeExpandBtn: removeExpandBtn,
  showExpandBtn: showExpandBtn,
  hideExpandBtn: hideExpandBtn,
  sumNode: sumNode
};

//  设置数据
function setData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  this.mindMap.execCommand('SET_NODE_DATA', this, data);
}

//  设置文本
function setText(text, richText, resetRichText) {
  this.mindMap.execCommand('SET_NODE_TEXT', this, text, richText, resetRichText);
}

//  设置图片
function setImage(imgData) {
  this.mindMap.execCommand('SET_NODE_IMAGE', this, imgData);
}

//  设置图标
function setIcon(icons) {
  this.mindMap.execCommand('SET_NODE_ICON', this, icons);
}

//  设置超链接
function setHyperlink(link, title) {
  this.mindMap.execCommand('SET_NODE_HYPERLINK', this, link, title);
}

//  设置备注
function setNote(note) {
  this.mindMap.execCommand('SET_NODE_NOTE', this, note);
}

//  设置附件
function setAttachment(url, name) {
  this.mindMap.execCommand('SET_NODE_ATTACHMENT', this, url, name);
}

//  设置标签
function setTag(tag) {
  this.mindMap.execCommand('SET_NODE_TAG', this, tag);
}

//  设置形状
function setShape(shape) {
  this.mindMap.execCommand('SET_NODE_SHAPE', this, shape);
}

//  修改某个样式
function setStyle(prop, value) {
  this.mindMap.execCommand('SET_NODE_STYLE', this, prop, value);
}

//  修改多个样式
function setStyles(style) {
  this.mindMap.execCommand('SET_NODE_STYLES', this, style);
}
var nodeCommandWrapsMethods = {
  setData: setData,
  setText: setText,
  setImage: setImage,
  setIcon: setIcon,
  setHyperlink: setHyperlink,
  setNote: setNote,
  setAttachment: setAttachment,
  setTag: setTag,
  setShape: setShape,
  setStyle: setStyle,
  setStyles: setStyles
};

// 超链接图标
var hyperlink = '<svg t="1624174958075" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7982" ><path d="M435.484444 251.733333v68.892445L295.822222 320.682667a168.504889 168.504889 0 0 0-2.844444 336.952889h142.506666v68.892444H295.822222a237.397333 237.397333 0 0 1 0-474.794667h139.662222z m248.945778 0a237.397333 237.397333 0 0 1 0 474.851556H544.654222v-69.006222l139.776 0.056889a168.504889 168.504889 0 0 0 2.844445-336.952889H544.597333V251.676444h139.776z m-25.827555 203.946667a34.474667 34.474667 0 0 1 0 68.892444H321.649778a34.474667 34.474667 0 0 1 0-68.892444h336.952889z" p-id="7983"></path></svg>';

// 备注图标
var note = '<svg t="1624195132675" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8792" ><path d="M152.768 985.984 152.768 49.856l434.56 0 66.816 0 234.048 267.392 0 66.816 0 601.92L152.768 985.984 152.768 985.984zM654.144 193.088l0 124.16 108.736 0L654.144 193.088 654.144 193.088zM821.312 384.064l-167.168 0L587.328 384.064 587.328 317.312 587.328 116.736 219.584 116.736 219.584 919.04l601.728 0L821.312 384.064 821.312 384.064zM386.688 517.888 319.808 517.888 319.808 450.944l66.816 0L386.624 517.888 386.688 517.888zM386.688 651.584 319.808 651.584 319.808 584.704l66.816 0L386.624 651.584 386.688 651.584zM386.688 785.344 319.808 785.344l0-66.88 66.816 0L386.624 785.344 386.688 785.344zM721.024 517.888 453.632 517.888 453.632 450.944l267.392 0L721.024 517.888 721.024 517.888zM654.144 651.584 453.632 651.584 453.632 584.704l200.512 0L654.144 651.584 654.144 651.584zM620.672 785.344l-167.04 0 0-66.88 167.04 0L620.672 785.344 620.672 785.344z" p-id="8793"></path></svg>';

// 附件图标
var attachment = '<svg t="1711935375590" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3864" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128"><path d="M516.373333 375.978667l136.576-136.576a147.797333 147.797333 0 0 1 208.853334-0.021334 147.690667 147.690667 0 0 1-0.042667 208.832l-204.8 204.778667v0.021333l-153.621333 153.6c-85.973333 85.973333-225.28 85.973333-311.253334 0.021334-85.994667-85.973333-85.973333-225.216 0.149334-311.36L431.146667 256.362667a21.333333 21.333333 0 0 0-30.165334-30.165334L162.069333 465.066667c-102.805333 102.826667-102.826667 269.056-0.149333 371.733333 102.613333 102.613333 268.970667 102.613333 371.584 0l153.6-153.642667h0.021333l0.021334-0.021333 204.778666-204.778667c74.325333-74.325333 74.346667-194.858667 0.021334-269.184-74.24-74.24-194.88-74.24-269.162667 0.042667l-136.576 136.554667-187.626667 187.626666a117.845333 117.845333 0 0 0-0.106666 166.826667 118.037333 118.037333 0 0 0 166.826666-0.106667l255.850667-255.829333a21.333333 21.333333 0 0 0-30.165333-30.165333L435.136 669.973333a75.370667 75.370667 0 0 1-106.496 0.106667 75.178667 75.178667 0 0 1 0.128-106.496l187.605333-187.605333z" p-id="3865"></path></svg>';

// 节点icon
var nodeIconList = [{
  name: '优先级图标',
  type: 'priority',
  list: [{
    name: '1',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512.042667 1024C229.248 1024 0 794.794667 0 511.957333 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 511.957333 1024 794.794667 794.752 1024 512.042667 1024z\" fill=\"#E93B30\"></path><path d=\"M580.309333 256h-75.52c-10.666667 29.824-30.165333 55.765333-58.709333 78.165333-28.416 22.314667-54.869333 37.418667-79.146667 45.397334v84.608a320 320 0 0 0 120.234667-70.698667v352.085333H580.266667V256z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '2',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M511.957333 1024C229.248 1024 0 794.752 0 512S229.248 0 511.957333 0C794.752 0 1024 229.248 1024 512s-229.248 512-512.042667 512z\" fill=\"#FA8D2E\"></path><path d=\"M667.946667 658.602667h-185.301334c4.864-8.533333 11.178667-17.066667 19.072-25.984 7.808-8.874667 26.453333-26.837333 55.936-53.888 29.525333-27.008 49.877333-47.786667 61.226667-62.165334 16.981333-21.717333 29.44-42.453333 37.290667-62.293333 7.808-19.84 11.776-40.746667 11.776-62.677333 0-38.570667-13.738667-70.741333-41.088-96.725334C599.466667 268.928 561.706667 256 513.834667 256c-43.690667 0-80.128 11.136-109.354667 33.578667-29.098667 22.4-46.506667 59.306667-52.010667 110.805333l93.184 9.301333c1.792-27.349333 8.405333-46.890667 19.754667-58.624 11.434667-11.776 26.837333-17.664 46.165333-17.664 19.541333 0 34.858667 5.589333 45.909334 16.768 11.136 11.264 16.682667 27.221333 16.682666 48.042667 0 18.858667-6.4 37.930667-19.242666 57.258667-9.472 14.037333-35.157333 40.533333-77.098667 79.872-52.096 48.554667-87.04 87.509333-104.704 116.821333A226.688 226.688 0 0 0 341.333333 745.429333h326.613334v-86.826666z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '3',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z\" fill=\"#2E66FA\"></path><path d=\"M627.754667 731.733333c-29.354667 25.088-66.901333 37.632-112.725334 37.632-44.928 0-81.792-11.52-110.592-34.773333-33.066667-26.538667-49.877333-64.469333-50.304-114.133333h92.16c0.426667 21.76 7.552 38.314667 21.333334 49.664 12.288 10.88 28.117333 16.341333 47.402666 16.341333 20.309333 0 36.778667-6.101333 49.322667-18.432 12.544-12.330667 18.773333-29.568 18.773333-51.797333 0-21.290667-6.229333-38.186667-18.773333-50.773334-12.544-12.501333-29.866667-18.773333-52.138667-18.773333h-13.525333v-80.042667H512c42.112 0 63.274667-21.034667 63.274667-63.146666 0-20.309333-5.888-36.096-17.706667-47.445334a60.757333 60.757333 0 0 0-43.818667-17.066666c-17.493333 0-32 5.504-43.434666 16.298666-11.562667 10.88-17.792 25.728-18.773334 44.714667H359.68c0.981333-43.946667 16.042667-78.976 45.397333-104.96 29.354667-25.941333 65.706667-39.04 109.226667-39.04 44.928 0 81.792 13.525333 110.592 40.490667 28.8 26.922667 43.306667 61.610667 43.306667 104.149333 0 48.213333-19.413333 82.688-58.154667 103.552 43.52 23.125333 65.28 61.44 65.28 114.858667 0 48.128-15.957333 85.76-47.573333 112.682666z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '4',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512.042667 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 512.042667 1024 794.794667 794.752 1024 512.042667 1024z\" fill=\"#6D768D\"></path><path d=\"M600.96 256v309.802667h60.117333v81.536h-60.16v98.218666h-90.154666v-98.218666H311.466667v-81.237334L522.666667 256h78.293333zM510.72 399.104l-112.042667 166.698667h112.042667V399.104z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '5',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512.042667 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 512.042667 1024 794.794667 794.752 1024 512.042667 1024z\" fill=\"#6D768D\"></path><path d=\"M470.912 343.552h175.786667V256H400.256l-47.786667 253.952 75.434667 10.837333c21.205333-23.552 45.269333-35.413333 72.021333-35.413333 21.546667 0 38.997333 7.509333 52.437334 22.4 13.312 15.018667 20.053333 37.418667 20.053333 67.328 0 31.872-6.741333 55.765333-20.181333 71.552-13.397333 15.872-29.866667 23.765333-49.237334 23.765333-17.066667 0-32.085333-6.186667-45.013333-18.432-13.013333-12.373333-20.821333-29.013333-23.466667-50.133333L341.333333 611.498667c5.546667 40.874667 22.485333 73.429333 50.730667 97.621333 28.330667 24.32 64.938667 36.437333 109.866667 36.437333 56.149333 0 100.053333-21.546667 131.754666-64.554666a176.64 176.64 0 0 0 34.816-107.52c0-48.042667-14.378667-87.210667-43.221333-117.333334-28.8-30.208-63.957333-45.312-105.514667-45.312-21.674667 0-42.922667 5.248-63.829333 15.616l14.976-82.901333z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '6',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512 0c282.88 0 512 229.205333 512 512.042667C1024 794.794667 794.88 1024 512 1024z\" fill=\"#6D768D\"></path><path d=\"M519.210667 256c36.992 0 67.626667 10.368 91.776 31.189333 24.192 20.821333 39.68 51.029333 46.293333 90.709334l-90.197333 9.984c-2.176-18.56-7.978667-32.298667-17.28-41.173334-9.258667-8.874667-21.418667-13.226667-36.224-13.226666-19.754667 0-36.437333 8.789333-50.048 26.453333-13.696 17.664-22.314667 54.613333-25.856 110.549333 23.296-27.52 52.138667-41.258667 86.656-41.258666 38.997333 0 72.362667 14.805333 100.181333 44.544 27.733333 29.696 41.685333 68.010667 41.685333 114.858666 0 49.877333-14.634667 89.856-43.818666 119.936-29.226667 30.208-66.730667 45.226667-112.554667 45.226667-49.066667 0-89.429333-19.072-121.130667-57.344C357.12 658.218667 341.333333 595.541333 341.333333 508.416c0-89.344 16.469333-153.813333 49.493334-193.194667C423.722667 275.754667 466.56 256 519.168 256z m-9.472 241.834667c-17.962667 0-33.066667 6.997333-45.525334 21.12-12.330667 14.037333-18.56 34.858667-18.56 62.293333 0 30.421333 6.912 53.76 20.906667 70.4 13.952 16.469333 29.866667 24.746667 47.786667 24.746667 17.28 0 31.701333-6.826667 43.178666-20.309334 11.52-13.525333 17.237333-35.669333 17.237334-66.56 0-31.658667-6.186667-54.869333-18.517334-69.546666a58.197333 58.197333 0 0 0-46.506666-22.144z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '7',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512.042667 1024C229.248 1024 0 794.752 0 512S229.248 0 512.042667 0C794.752 0 1024 229.248 1024 512s-229.248 512-511.957333 512z\" fill=\"#6D768D\"></path><path d=\"M673.024 273.066667H354.133333v86.869333h212.224a691.2 691.2 0 0 0-104.746666 187.989333c-26.026667 70.101333-39.978667 138.88-41.429334 206.293334h89.6c-0.298667-42.922667 6.698667-91.776 21.034667-146.474667a654.72 654.72 0 0 1 62.08-154.965333c27.136-48.554667 53.888-85.76 80.128-111.701334V273.066667z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '8',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z\" fill=\"#6D768D\"></path><path d=\"M512.426667 256c46.208 0 82.048 11.861333 107.605333 35.541333 25.6 23.68 38.314667 53.674667 38.314667 89.898667 0 22.613333-5.802667 42.666667-17.578667 60.330667a111.445333 111.445333 0 0 1-49.450667 40.277333c26.965333 10.837333 47.36 26.752 61.312 47.658667 13.994667 20.906667 21.034667 45.013333 21.034667 72.362666 0 45.098667-14.336 81.834667-42.965333 109.952-28.586667 28.245333-66.602667 42.368-114.090667 42.368-44.245333 0-81.066667-11.648-110.464-34.986666-34.645333-27.52-52.010667-65.28-52.010667-113.365334 0-26.368 6.528-50.645333 19.626667-72.746666 13.056-22.144 33.578667-39.210667 61.696-51.242667-24.064-10.154667-41.557333-24.192-52.48-41.941333a109.824 109.824 0 0 1-16.512-58.666667c0-36.224 12.757333-66.218667 37.973333-89.898667 25.386667-23.68 61.354667-35.541333 108.032-35.541333z m1.28 265.429333c-22.784 0-39.722667 7.978667-50.901334 23.893334-11.136 15.786667-16.64 33.066667-16.64 51.498666 0 25.984 6.485333 46.208 19.712 60.714667 13.098667 14.506667 29.525333 21.802667 49.152 21.802667 19.242667 0 35.157333-6.997333 47.786667-20.992 12.629333-13.909333 18.858667-34.048 18.858667-60.416 0-23.082667-6.314667-41.557333-19.2-55.466667a63.274667 63.274667 0 0 0-48.725334-21.034667z m-0.341334-191.488c-17.792 0-32 5.333333-42.581333 16-10.538667 10.666667-15.872 24.746667-15.872 42.325334 0 18.645333 5.248 33.152 15.701333 43.648 10.453333 10.453333 24.362667 15.658667 41.770667 15.658666 17.664 0 31.658667-5.290667 42.24-15.872 10.538667-10.581333 15.872-25.173333 15.872-43.818666 0-17.493333-5.248-31.573333-15.701333-42.154667s-24.277333-15.786667-41.429334-15.786667z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '9',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 1024C229.248 1024 0 794.794667 0 512.042667 0 229.333333 229.248 0 512 0c282.88 0 512 229.333333 512 512.042667C1024 794.794667 794.88 1024 512 1024z\" fill=\"#6D768D\"></path><path d=\"M497.28 256c49.365333 0 89.856 19.157333 121.429333 57.429333 31.701333 38.229333 47.488 101.205333 47.488 188.842667 0 89.173333-16.384 153.386667-49.365333 192.853333-32.853333 39.594667-75.605333 59.264-128.426667 59.264-37.888 0-68.608-10.154667-91.989333-30.506666s-38.4-50.816-45.013333-91.306667l90.112-9.984c2.261333 18.474667 8.021333 32.085333 17.28 41.088 9.173333 8.874667 21.418667 13.312 36.608 13.312 19.2 0 35.541333-8.874667 48.981333-26.752 13.44-17.749333 22.016-54.613333 25.770667-110.549333-23.466667 27.264-52.821333 40.874667-88.064 40.874666-38.314667 0-71.253333-14.72-99.114667-44.330666C355.242667 506.709333 341.333333 468.224 341.333333 420.864c0-49.493333 14.592-89.258667 43.946667-119.466667C414.549333 271.104 451.925333 256 497.237333 256z m-4.352 77.482667c-17.237333 0-31.658667 6.826667-43.008 20.437333-11.477333 13.653333-17.194667 35.84-17.194667 66.816 0 31.402667 6.229333 54.485333 18.645334 69.205333 12.458667 14.72 27.946667 22.101333 46.592 22.101334 18.005333 0 33.066667-7.082667 45.44-21.205334 12.330667-14.208 18.432-35.029333 18.432-62.506666 0-29.994667-6.912-53.376-20.821334-69.973334-13.824-16.597333-29.866667-24.874667-48.085333-24.874666z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '10',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512.042667 1024C229.248 1024 0 794.794667 0 511.957333 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 511.957333 1024 794.794667 794.752 1024 512.042667 1024z\" fill=\"#6D768D\"></path><path d=\"M619.946667 273.066667c46.976 0 83.754667 16.042667 110.250666 48.042666 31.573333 37.973333 47.36 100.864 47.36 188.672 0 87.722667-15.829333 150.698667-47.658666 189.056-26.325333 31.616-62.976 47.36-109.952 47.36-47.274667 0-85.418667-17.237333-114.346667-51.968-28.885333-34.602667-43.392-96.426667-43.392-185.386666 0-87.168 15.872-150.016 47.701333-188.416 26.282667-31.488 62.933333-47.36 110.037334-47.36z m-207.488 12.8v452.266666H325.504V411.690667A299.904 299.904 0 0 1 213.333333 476.373333V398.933333c22.656-7.296 47.36-21.12 73.856-41.514666 26.624-20.522667 44.842667-44.288 54.784-71.552h70.485334z m207.488 60.842666c-11.306667 0-21.461333 3.413333-30.336 10.24-8.874667 6.826667-15.786667 19.157333-20.693334 36.864-6.4 22.997333-9.642667 61.653333-9.642666 115.968 0 54.442667 2.944 91.733333 8.661333 112.128 5.802667 20.352 13.098667 33.877333 21.845333 40.618667 8.789333 6.741333 18.858667 10.154667 30.165334 10.154667 11.349333 0 21.376-3.498667 30.250666-10.325334 8.874667-6.826667 15.786667-19.157333 20.693334-36.778666 6.4-22.826667 9.642667-61.354667 9.642666-115.797334 0-54.314667-2.858667-91.648-8.661333-112.042666-5.802667-20.352-13.013333-33.962667-21.76-40.789334a47.616 47.616 0 0 0-30.165333-10.24z\" fill=\"#FFFFFF\"></path></svg>"
  }]
}, {
  name: '进度图标',
  type: 'progress',
  list: [{
    name: '1',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z\" fill=\"#12BB37\"></path><path d=\"M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512l294.144-294.144A414.72 414.72 0 0 1 928 512c0 229.76-186.24 416-416 416z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '2',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z\" fill=\"#12BB37\"></path><path d=\"M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512h416c0 229.76-186.24 416-416 416z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '3',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z\" fill=\"#12BB37\"></path><path d=\"M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512l294.144 294.144A414.72 414.72 0 0 1 512 928z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '4',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z\" fill=\"#12BB37\"></path><path d=\"M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96v832z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '5',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z\" fill=\"#12BB37\"></path><path d=\"M512 512l-294.144 294.144A414.72 414.72 0 0 1 96 512c0-229.76 186.24-416 416-416V512z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '6',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z\" fill=\"#12BB37\"></path><path d=\"M512 512H96c0-229.76 186.24-416 416-416V512z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '7',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z\" fill=\"#12BB37\"></path><path d=\"M512 512L217.856 217.856A414.72 414.72 0 0 1 512 96V512z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '8',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M0 512c0 282.752 229.248 512 512 512s512-229.248 512-512S794.752 0 512 0 0 229.248 0 512z\" fill=\"#12BB37\"></path><path d=\"M716.629333 341.333333h-51.328a35.072 35.072 0 0 0-28.330666 14.293334l-171.989334 233.984-77.909333-106.026667a35.2 35.2 0 0 0-28.330667-14.293333H307.413333c-7.082667 0-11.264 7.936-7.082666 13.653333l136.32 185.472a35.2 35.2 0 0 0 56.533333 0l230.4-313.429333a8.533333 8.533333 0 0 0-6.954667-13.653334z\" fill=\"#FFFFFF\"></path></svg>"
  }]
}, {
  name: '表情图标',
  type: 'expression',
  list: [{
    name: '1',
    icon: "<svg t=\"1624457751393\" class=\"icon\" viewBox=\"0 0 1026 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"12255\"><path d=\"M1.097856 1.097642h1021.804717v1021.804716H1.097856z\" fill=\"#F09495\" p-id=\"12256\"></path><path d=\"M1024.000214 1024H0.000214V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.195498v1019.609432z\" fill=\"#FFFFFF\" p-id=\"12257\"></path><path d=\"M234.695985 335.179887m-27.341259 0a27.341259 27.341259 0 1 0 54.682518 0 27.341259 27.341259 0 1 0-54.682518 0Z\" fill=\"#040000\" p-id=\"12258\"></path><path d=\"M234.695985 363.519002c-15.666342 0-28.339115-12.772559-28.339115-28.339115 0-15.666342 12.772559-28.339115 28.339115-28.339115s28.339115 12.772559 28.339115 28.339115c0.099786 15.666342-12.672773 28.339115-28.339115 28.339115z m0-54.582732c-14.468914 0-26.243617 11.774703-26.243617 26.243617s11.774703 26.243617 26.243617 26.243617 26.243617-11.774703 26.243617-26.243617-11.774703-26.243617-26.243617-26.243617z\" fill=\"#FFFFFF\" p-id=\"12259\"></path><path d=\"M776.232528 335.179887m-27.341259 0a27.341259 27.341259 0 1 0 54.682518 0 27.341259 27.341259 0 1 0-54.682518 0Z\" fill=\"#040000\" p-id=\"12260\"></path><path d=\"M776.232528 363.519002c-15.666342 0-28.339115-12.772559-28.339115-28.339115 0-15.666342 12.772559-28.339115 28.339115-28.339115 15.666342 0 28.339115 12.772559 28.339115 28.339115 0 15.666342-12.772559 28.339115-28.339115 28.339115z m0-54.582732c-14.468914 0-26.243617 11.774703-26.243617 26.243617s11.774703 26.243617 26.243617 26.243617 26.243617-11.774703 26.243617-26.243617c-0.099786-14.468914-11.874488-26.243617-26.243617-26.243617z\" fill=\"#FFFFFF\" p-id=\"12261\"></path><path d=\"M512.000214 671.656987c-52.58702 0-105.872539-17.961411-105.872539-52.387449S459.413194 566.882089 512.000214 566.882089s105.872539 17.961411 105.87254 52.387449S564.587234 671.656987 512.000214 671.656987z m0-74.240499c-21.952836 0-43.207172 3.592282-58.2748 9.77899-13.870201 5.68778-17.06334 11.275775-17.06334 12.07406s3.19314 6.386279 17.06334 12.07406c15.067628 6.186708 36.321965 9.77899 58.2748 9.77899s43.207172-3.592282 58.274801-9.77899c13.870201-5.68778 17.06334-11.275775 17.06334-12.07406s-3.19314-6.386279-17.06334-12.07406c-15.067628-6.286494-36.321965-9.77899-58.274801-9.77899z\" fill=\"#040000\" p-id=\"12262\"></path></svg>"
  }, {
    name: '2',
    icon: "<svg t=\"1624457767572\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1048\"><path d=\"M0 0h1024v1024H0z\" fill=\"#E6A6C9\" p-id=\"1049\"></path><path d=\"M315.1 368.1c-23.9 0-43.3-19.4-43.3-43.3s19.4-43.3 43.3-43.3 43.3 19.4 43.3 43.3-19.4 43.3-43.3 43.3z m0-74.7c-17.3 0-31.3 14.1-31.3 31.3 0 17.3 14.1 31.3 31.3 31.3 17.3 0 31.3-14.1 31.3-31.3 0-17.2-14-31.3-31.3-31.3zM738.7 368.1c-23.9 0-43.3-19.4-43.3-43.3s19.4-43.3 43.3-43.3 43.3 19.4 43.3 43.3-19.4 43.3-43.3 43.3z m0-74.7c-17.3 0-31.3 14.1-31.3 31.3 0 17.3 14.1 31.3 31.3 31.3 17.3 0 31.3-14.1 31.3-31.3 0-17.2-14-31.3-31.3-31.3zM293.5 698.8l-14.5-1.3c0.1-0.6 1.5-14.6 15.1-27.9 17.2-16.7 45-24.8 82.7-24 4.9-0.1 10.9-10.5 16.1-19.6 8.4-14.7 19-33.1 37.9-34.3 19.4-1.2 42.2 16.4 71.5 55.4 9.9 5.2 16.5 11.2 21.8 16.1 8.4 7.7 13.1 11.9 25.1 10.8 14.9-1.4 38.9-11.1 77.5-31.4 26.8-28.4 56.4-41.4 83.5-36.6 27.9 4.9 50.6 27.6 67.5 67.5l-13.4 5.7c-14.7-34.5-34.3-54.9-56.7-58.8-22.3-3.9-47.6 7.8-71.2 33.1l-0.8 0.9-1.1 0.6c-85.6 45.1-99.4 38-120.2 19.1-5.5-5-11.2-10.2-20.1-14.7l-1.5-0.8-1-1.4c-32.2-43.2-50.4-51.6-60-51-11.1 0.7-18.8 14-26.2 27-7.6 13.2-15.4 26.9-28.8 26.9h-0.2c-78.4-1.6-83 38.3-83 38.7z\" fill=\"#040000\" p-id=\"1050\"></path></svg>"
  }, {
    name: '3',
    icon: "<svg t=\"1624457776082\" class=\"icon\" viewBox=\"0 0 1026 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1204\" ><path d=\"M1.1 1.097642h1021.804716v1021.804716H1.1z\" fill=\"#F7E983\" p-id=\"1205\"></path><path d=\"M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z\" fill=\"#FFFFFF\" p-id=\"1206\"></path><path d=\"M329.174412 344.491728a38.118106 10.277919 57.6 1 0 17.355867-11.014369 38.118106 10.277919 57.6 1 0-17.355867 11.014369Z\" fill=\"#040000\" p-id=\"1207\"></path><path d=\"M644.769475 355.956059a11.175989 36.321965 30 1 0 36.321965-62.911488 11.175989 36.321965 30 1 0-36.321965 62.911488Z\" fill=\"#040000\" p-id=\"1208\"></path><path d=\"M569.678445 671.158059c-26.343403 0-51.190021-5.288638-70.049503-14.967843-20.755408-10.577275-32.230754-25.445332-32.230755-41.710388 0-16.265056 11.475346-31.133112 32.230755-41.710387 18.859482-9.579419 43.805886-14.967843 70.049503-14.967843s51.190021 5.288638 70.049503 14.967843c20.755408 10.577275 32.230754 25.445332 32.230754 41.710387 0 16.265056-11.475346 31.133112-32.230754 41.710388-18.859482 9.679205-43.805886 14.967843-70.049503 14.967843z m0-95.095693c-49.693237 0-84.318846 20.356266-84.318846 38.517248s34.625609 38.517248 84.318846 38.517248 84.318846-20.356266 84.318846-38.517248-34.725395-38.517248-84.318846-38.517248z\" fill=\"#040000\" p-id=\"1209\"></path></svg>"
  }, {
    name: '4',
    icon: "<svg t=\"1624457781889\" class=\"icon\" viewBox=\"0 0 1026 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1363\" ><path d=\"M1.1 1.097642h1021.804716v1021.804716H1.1z\" fill=\"#A6D9E2\" p-id=\"1364\"></path><path d=\"M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z\" fill=\"#FFFFFF\" p-id=\"1365\"></path><path d=\"M376.194134 348.950302m-23.44962 0a23.44962 23.44962 0 1 0 46.89924 0 23.44962 23.44962 0 1 0-46.89924 0Z\" fill=\"#040000\" p-id=\"1366\"></path><path d=\"M629.150672 348.950302m-24.647047 0a24.647047 24.647047 0 1 0 49.294095 0 24.647047 24.647047 0 1 0-49.294095 0Z\" fill=\"#040000\" p-id=\"1367\"></path><path d=\"M397.847613 603.503411c13.471058 8.282206 28.738258 14.468914 43.7061 19.458195 29.835899 9.978562 62.266225 14.169558 93.299551 7.483921 21.054765-4.490353 40.213604-14.369129 56.778016-28.039758 6.785422-5.587995-2.893783-15.167414-9.579419-9.579419-46.999026 38.916391-112.258819 31.033327-163.847983 6.086922-4.590138-2.195284-9.080491-4.490353-13.371272-7.184564-7.583707-4.590138-14.468914 7.184564-6.984993 11.774703z\" fill=\"#040000\" p-id=\"1368\"></path><path d=\"M627.753674 534.052621c-31.033327 24.048334-58.474371 68.253362-37.419607 106.970182 10.577275 19.35841 29.835899 32.629897 48.795167 42.708244 7.982849 4.190996 15.067628-7.883064 7.084779-12.07406-25.245761-13.271487-53.485091-35.324108-49.094524-66.557006 2.793997-20.156695 15.766127-37.319821 29.736114-51.190022 3.392711-3.392711 6.984993-6.785422 10.776847-9.77899 2.993569-2.295069 2.394855-7.483921 0-9.878776-2.893783-3.19314-6.885208-2.49464-9.878776-0.199572z\" fill=\"#040000\" p-id=\"1369\"></path></svg>"
  }, {
    name: '5',
    icon: "<svg t=\"1624457787809\" class=\"icon\" viewBox=\"0 0 1026 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1523\" ><path d=\"M1.1 1.097642h1021.804716v1021.804716H1.1z\" fill=\"#AD6F59\" p-id=\"1524\"></path><path d=\"M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z\" fill=\"#FFFFFF\" p-id=\"1525\"></path><path d=\"M411.829832 330.730879a38.118106 10.277919 57.6 1 0 17.355867-11.014368 38.118106 10.277919 57.6 1 0-17.355867 11.014368Z\" fill=\"#040000\" p-id=\"1526\"></path><path d=\"M480.669675 609.989476c11.774703-25.844475 27.740401-51.788735 44.60417-73.342429 13.770415-17.462483 29.237186-33.92711 47.897096-44.803742 17.262912-10.078347 35.324108-13.67063 54.283376-6.58585 11.974274 4.390567 23.948548 14.468914 33.128825 24.547261 14.369129 15.865913 25.145975 34.625609 34.725394 53.684662 4.290782 8.581563 17.262912 0.997856 12.972131-7.583707-15.167414-30.334828-35.224323-63.763009-66.157864-80.327421-21.054765-11.37556-44.504385-11.475346-66.157864-1.895927-21.054765 9.280062-38.617034 25.644904-53.485091 42.907815-14.468914 16.863769-27.041902 35.324108-38.217891 54.582733-5.887351 10.178133-11.674917 20.555837-16.464627 31.232898-1.696355 3.692068-0.997856 7.982849 2.694212 10.277918 3.19314 1.895927 8.581563 0.898071 10.178133-2.694211z\" fill=\"#040000\" p-id=\"1527\"></path><path d=\"M663.863649 338.091735a14.468914 33.727538 30 1 0 33.727538-58.417811 14.468914 33.727538 30 1 0-33.727538 58.417811Z\" fill=\"#040000\" p-id=\"1528\"></path></svg>"
  }, {
    name: '6',
    icon: "<svg t=\"1624457794933\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1680\" ><path d=\"M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z\" fill=\"#83CEE3\" p-id=\"1681\"></path><path d=\"M369 375.8m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z\" fill=\"#040000\" p-id=\"1682\"></path><path d=\"M369 411.7c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.1 36-36 36z m0-69.1c-18.3 0-33.2 14.9-33.2 33.2S350.7 409 369 409s33.2-14.9 33.2-33.2-14.9-33.2-33.2-33.2z\" fill=\"#FFFFFF\" p-id=\"1683\"></path><path d=\"M672.2 333.6c-15.1 7.6-30.2 15.6-44.3 25-5.9 3.9-17 10.4-14.6 19.1 1.8 6.5 12 11.2 17.3 14.3 15.7 9.3 32.1 17.6 48.3 25.9 8.6 4.4 16.2-8.5 7.6-13-14.1-7.3-28.3-14.5-42.1-22.3-3.9-2.2-7.9-4.5-11.7-6.9-1.2-0.8-2.4-1.5-3.5-2.4-0.6-0.4-1.1-0.8-1.6-1.2 2.2 1.7-0.3-0.3-0.3-0.3-0.9 0.1-1.5-3.2-0.2 0.5 0.9 2.4 1.1 3.8 0.3 5.8 0.6-1.5-0.9 0.8-0.1 0 0.5-0.5 1-1.1 1.6-1.6 0.5-0.5 1-0.9 1.6-1.3 0.6-0.5 0 0 1.2-0.9 1.7-1.3 3.5-2.5 5.3-3.6 8.4-5.5 17.2-10.4 26-15.2 5.6-3 11.2-6 16.8-8.9 8.6-4.4 1-17.3-7.6-13zM578.2 720.9c-12.5-96.7-33.3-154.7-55.6-155.6-8.8 3.9-22.3 17.5-37.7 60.1-10.8 29.8-18.4 62.2-23 81.6-1.2 5.1-2.1 9.1-2.9 11.8l-9.3-2.4c0.7-2.6 1.6-6.6 2.8-11.6 14.9-63 36-136.8 67.5-148.8l0.8-0.3h0.8c18.2-0.4 33.2 19.5 45.8 60.8 10.2 33.3 16.7 74.6 20.5 103.3l-9.7 1.1z\" fill=\"#040000\" p-id=\"1684\"></path></svg>"
  }, {
    name: '7',
    icon: "<svg t=\"1624457802025\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1838\" ><path d=\"M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z\" fill=\"#8CC66D\" p-id=\"1839\"></path><path d=\"M375.778679 404.47473a14.5 33.8 30 1 0 33.8-58.543317 14.5 33.8 30 1 0-33.8 58.543317Z\" fill=\"#040000\" p-id=\"1840\"></path><path d=\"M627.220263 374.211388a43.1 11.6 57.6 1 0 19.588408-12.431182 43.1 11.6 57.6 1 0-19.588408 12.431182Z\" fill=\"#040000\" p-id=\"1841\"></path><path d=\"M451.1 548.5c17.6-9.3 63.9-30 105.3-16.2 17 20.3 32.7 98.8 28.8 138.1-27.5 10.2-82.5 10.2-106.1 5.8-8.3-10.5-32.7-81.8-35.3-114.6-0.4-5.5 2.5-10.6 7.3-13.1z\" fill=\"#040000\" p-id=\"1842\"></path></svg>"
  }, {
    name: '8',
    icon: "<svg t=\"1624457816632\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1996\" ><path d=\"M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z\" fill=\"#5A74B8\" p-id=\"1997\"></path><path d=\"M357.7 400m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z\" fill=\"#040000\" p-id=\"1998\"></path><path d=\"M357.7 436c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.2 36-36 36z m0-69.2c-18.3 0-33.2 14.9-33.2 33.2s14.9 33.2 33.2 33.2 33.2-14.9 33.2-33.2-14.9-33.2-33.2-33.2z\" fill=\"#FFFFFF\" p-id=\"1999\"></path><path d=\"M676 400m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z\" fill=\"#040000\" p-id=\"2000\"></path><path d=\"M676 436c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.2 36-36 36z m0-69.2c-18.3 0-33.2 14.9-33.2 33.2s14.9 33.2 33.2 33.2c18.3 0 33.2-14.9 33.2-33.2s-14.9-33.2-33.2-33.2z\" fill=\"#FFFFFF\" p-id=\"2001\"></path><path d=\"M347.6 684.1c0.3-0.9 0.6-1.7 0.9-2.6 0.2-0.5 1.4-3.2 0.3-0.8 0.6-1.4 1.3-2.9 2-4.3 3.2-6.3 6-10.7 10.9-15.3 4.3-4 10.8-7.5 17.1-6.1 3.9 0.9 7.9 4.9 11.1 7.2 3.1 2.2 6.3 4.5 9.7 6.2 7.5 3.8 15.3 4.4 23.4 1.9 4.7-1.5 9.2-3.6 13.6-5.9 5-2.6 10.7-5 14.2-9.5 4.5-5.7 6.1-8.5 11.4-14.1 1-1 2-2 3.1-3 0.2-0.2 2.2-1.7 0.6-0.5 0.6-0.4 1.2-0.9 1.8-1.3 1-0.6 2.1-1.3 3.2-1.7-2 0.8 0.2 0 0.6-0.1 2.3-0.7-0.3-0.2 1.2-0.3 2.8-0.1 3.6 0 5.5 1 3.8 1.9 6.6 4.7 9.5 7.8 4.5 5 7.5 11.1 11.7 16.2 1.8 2.2 3.7 4.3 5.4 6.5 8.1 10.3 17.7 22.2 32.2 22 8.8-0.1 16.6-5.2 22.6-11.2 4.2-4.1 7.7-8.9 11-13.7 2.9-4.2 4.6-9.9 6.2-13.5 3.2-7.1 7.2-13.1 13-18.1 4.8-4.2 11.1-6.5 16.7-5.3 10.5 2.4 17.2 12.1 23.1 20.2 4.7 6.5 9.8 13 16 18.2 7.8 6.4 17.1 11.4 27.5 11.1 14.1-0.4 25.5-9.5 34.2-19.9 3-3.6 3.6-8.8 0-12.4-3.1-3.1-9.4-3.7-12.4 0-6.3 7.6-14.7 15.9-24.9 14.7-2.2-0.3-5.3-1.5-7.9-3.1-3.5-2.1-6.1-4.4-9.1-7.5-4.9-5.1-6.8-8.1-10.9-13.8-7.3-10.1-16.1-19.6-28.2-23.7-18.5-6.3-35.7 5.6-46 20.1-2.4 3.3-4.4 6.9-6.1 10.6-1.8 3.9-2.7 8.5-5.2 11.9-3.1 4.4-6.2 8.8-10.2 12.5-3 2.8-5.7 4.4-8.6 5.1-0.4 0.1-1.7 0.1 0.1 0h-2.2c2.1 0.1 0 0-0.5-0.1-0.7-0.2-1.4-0.4-2-0.6 1.8 0.7-1.8-1.1-2.4-1.5l-1.2-0.9c1.5 1.2-0.9-0.9-1.2-1.1-4.7-4.3-8.4-9.5-12.3-14.4-10.9-13.6-20.9-34-41-34.9-14.2-0.6-24.5 10.6-32.4 20.8-1.2 1.6-2.5 3.2-3.7 4.8-1.5 1.9 1.1-1.4-0.4 0.5-0.4 0.5-0.8 1.2-1.3 1.6-1.7 1.4-4.6 2.6-6.6 3.6-2.9 1.6-5.9 3.2-9 4.5-1.6 0.7-3.4 1.2-5.1 1.7-2.2 0.6-0.7 0.5-2.8 0.4-2.8 0-3.9-0.4-6.6-1.9-3.9-2.2-7.5-4.9-11.1-7.5-5.6-4-10-6.9-17-7.5-10.5-0.9-20.3 3.2-28.2 9.9-9.4 8.1-16.4 20.2-20.1 32-3.6 11.2 13.3 15.8 16.8 5.1z\" fill=\"#040000\" p-id=\"2002\"></path></svg>"
  }, {
    name: '9',
    icon: "<svg t=\"1624457826949\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2156\" ><path d=\"M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z\" fill=\"#F0884F\" p-id=\"2157\"></path><path d=\"M287.2 382c6.4 2.3 11.6-3.7 15.4-7.9 5.1-5.5 10.2-11 16-15.9 0.8-0.7 1.7-1.4 2.5-2.1 1.2-0.9-1.7 1.3 0.2-0.2l1.2-0.9c2.1-1.5 4.3-2.9 6.5-4.3 2-1.2 4-2.2 6.1-3.2 0.6-0.3 1.2-0.6 1.9-0.9-0.3 0.2-1.5 0.6 0.2-0.1 1.3-0.5 2.6-1 4-1.5 11.2-3.7 21.8-4 33.4-1.1 19.5 4.9 36.4 17 51.2 30.2 8.6 7.7 21.4-5 12.7-12.7-25.2-22.6-57.1-42.1-92.2-36.2-20.4 3.4-37.7 16.1-51.6 30.9-2.3 2.4-4.5 5-6.8 7.4-0.7 0.7-1.9 1.5-2.4 2.4-0.5 0.8 2.3-1.5 0.8-0.7 1.3-0.7 3.9-1.4 5.8-0.7-11.1-3.7-15.8 13.7-4.9 17.5zM598 382c6.4 2.3 11.6-3.7 15.4-7.9 5.1-5.5 10.2-11 16-15.9 0.8-0.7 1.7-1.4 2.5-2.1 1.2-0.9-1.7 1.3 0.2-0.2l1.2-0.9c2.1-1.5 4.3-2.9 6.5-4.3 2-1.2 4-2.2 6.1-3.2 0.6-0.3 1.2-0.6 1.9-0.9-0.3 0.2-1.5 0.6 0.2-0.1 1.3-0.5 2.6-1 4-1.5 11.2-3.7 21.8-4 33.4-1.1 19.5 4.9 36.4 17 51.2 30.2 8.6 7.7 21.4-5 12.7-12.7-25.2-22.6-57.1-42.1-92.2-36.2-20.4 3.4-37.7 16.1-51.6 30.9-2.3 2.4-4.5 5-6.8 7.4-0.7 0.7-1.9 1.5-2.4 2.4-0.5 0.8 2.3-1.5 0.8-0.7 1.3-0.7 3.9-1.4 5.8-0.7-11.1-3.7-15.8 13.7-4.9 17.5zM505.9 527.1c3.4 0.7 6.8 1.7 10.2 2.8 6.7 2.2 10.4 3.5 16.6 7.7 1.6 1.1-0.5-0.5 0.6 0.5 0.6 0.5 1.1 1.1 1.7 1.6 1.5 1.4-0.1-0.4 0.5 0.6 0.4 0.6 0.7 1.2 1 1.8-1-2 0.1 0 0 0.5 0.1-2-0.1 0-0.1 0-0.1 0.8 0 0.7 0.1-0.5-0.1 0.4-0.1 0.7-0.3 1.1-0.6 1 0.7-0.9-0.4 1-1.6 2.5-4.6 5.4-8.1 7.8-6.8 4.6-14.4 8.2-22 11.4-7 3-7.4 11.9 0 14.8 7.4 2.8 15 5.3 22.4 8.1 3.1 1.1 4.2 1.5 6.9 2.9 1.1 0.6 2.1 1.2 3.2 1.8 1.2 0.8-0.7-0.5 0.1 0 0.4 0.3 0.8 0.7 1.1 1.1 0.6 0.8-1.1-1.2-0.2-0.2 0.8 0.9-0.3-1.4-0.1-0.2 0.1 0.9 0.2-1.9 0-0.9-0.1 0.5-0.8 1.8 0 0.2-0.2 0.5-0.5 1-0.8 1.4-0.3 0.3-0.9 1.3-0.3 0.5-0.5 0.7-1.1 1.3-1.7 1.9-6.9 7.3-15.9 12.8-24.4 18.1-8.3 5.3-0.6 18.5 7.7 13.2 9.9-6.3 20.9-12.8 28.6-21.8 4.8-5.5 8.1-12.9 4.2-19.9-3.4-6-10.5-8.9-16.6-11.4-8.6-3.5-17.5-6.2-26.2-9.5v14.8c14.4-6.1 47.2-18.8 41.2-40.3-3.5-12.9-19.4-18.9-30.8-22.6-3.4-1.1-6.9-2.1-10.5-2.9-9.1-2.2-13.3 12.5-3.6 14.6z\" fill=\"#040000\" p-id=\"2158\"></path></svg>"
  }, {
    name: '10',
    icon: "<svg t=\"1624457835383\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2312\" ><path d=\"M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z\" fill=\"#F6F180\" p-id=\"2313\"></path><path d=\"M342.9 400.6m-29.5 0a29.5 29.5 0 1 0 59 0 29.5 29.5 0 1 0-59 0Z\" fill=\"#040000\" p-id=\"2314\"></path><path d=\"M342.9 431.3c-16.9 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7 30.7 13.8 30.7 30.7-13.7 30.7-30.7 30.7z m0-59c-15.6 0-28.3 12.7-28.3 28.3s12.7 28.3 28.3 28.3 28.3-12.7 28.3-28.3-12.6-28.3-28.3-28.3z\" fill=\"#FFFFFF\" p-id=\"2315\"></path><path d=\"M702 400.6m-29.5 0a29.5 29.5 0 1 0 59 0 29.5 29.5 0 1 0-59 0Z\" fill=\"#040000\" p-id=\"2316\"></path><path d=\"M702 431.3c-16.9 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7 30.7 13.8 30.7 30.7-13.8 30.7-30.7 30.7z m0-59c-15.6 0-28.3 12.7-28.3 28.3s12.7 28.3 28.3 28.3 28.3-12.7 28.3-28.3-12.7-28.3-28.3-28.3z\" fill=\"#FFFFFF\" p-id=\"2317\"></path><path d=\"M358.7 519.9c20 22 45.5 40.4 71.3 54.8 51.2 28.5 111.7 39.9 168 19.5 44.3-16.1 80.7-47.8 110.2-83.9 3-3.7 3.6-8.9 0-12.5-3.1-3.1-9.5-3.7-12.5 0-25.5 31.4-56.2 59.7-93.7 76-27.1 11.7-56.6 15.7-85.8 12.2-24.7-2.9-49.5-11.8-71.5-23.4-18.7-9.8-36.6-22.2-51.1-34.3-7.8-6.5-15.5-13.3-22.4-20.9-7.7-8.5-20.1 4.1-12.5 12.5z\" p-id=\"2318\"></path></svg>"
  }, {
    name: '11',
    icon: "<svg t=\"1624457841751\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2472\" ><path d=\"M48.2 844.9c-68.5-210.6 186-782.1 409.1-795.4 6.3-0.4 12.5 0.2 18.6 1.6C665.1 94.6 985.4 515 987.1 821.3c0.1 20-12.9 37.9-22.4 43.1-162.7 89.8-605.8 179.7-884.4 30.9-15-7.9-24.2-26.1-32.1-50.4z\" fill=\"#F0884F\" p-id=\"2473\"></path><path d=\"M401 352.1m-52.4 0a52.4 52.4 0 1 0 104.8 0 52.4 52.4 0 1 0-104.8 0Z\" fill=\"#FFFFFF\" p-id=\"2474\"></path><path d=\"M408.7 329m-29.3 0a29.3 29.3 0 1 0 58.6 0 29.3 29.3 0 1 0-58.6 0Z\" fill=\"#040000\" p-id=\"2475\"></path><path d=\"M527.5 352.1m-52.4 0a52.4 52.4 0 1 0 104.8 0 52.4 52.4 0 1 0-104.8 0Z\" fill=\"#FFFFFF\" p-id=\"2476\"></path><path d=\"M527.5 329m-29.3 0a29.3 29.3 0 1 0 58.6 0 29.3 29.3 0 1 0-58.6 0Z\" fill=\"#040000\" p-id=\"2477\"></path><path d=\"M450.7 517c1.1-8.2 3.2-16.4 6.1-24.1 0.1-0.3 1-2.5 0.5-1.4s0.3-0.7 0.5-1c0.7-1.4 1.4-2.8 2.2-4.1 0.4-0.8 2.8-3.9 1.3-2.1 0.8-1 1.7-1.9 2.6-2.8 1-1-1.5 1 0.1 0 0.5-0.3 1-0.6 1.5-0.8-1.3 0.7-1.2 0.3 0 0.1 1.9-0.3-1.8 0.3 0.1 0 1.2-0.2 1.5 0.3 0-0.1 0.6 0.2 1.3 0.3 1.9 0.5 0.3 0.1-1.3-0.7 0.2 0.1 0.8 0.5 1.6 0.9 2.4 1.4 1.4 1 0-0.1 1.4 1.1 0.9 0.8 1.8 1.7 2.6 2.6 1.8 1.9 3.5 3.9 5 6.1 5.1 7.1 9.3 14.8 13.2 22.6 3.5 6.9 13.7 4.7 15.8-2.1 2.6-8.7 4.8-17.4 7.4-26.1 0.9-3.2 1.9-6.4 3.2-9.4-0.7 1.6 0.8-1.6 1.2-2.2l0.9-1.5c0.7-1.2-1.4 0.7 0.1-0.1 1.7-0.9-1.2 0.3-0.3 0.1 0.8-0.2 1-1.2 0.3-0.3-0.6 0.8 0.6 0-0.5 0.2-2 0.3 2.4 0.5-1.1 0 0.5 0.1 1.2 0.2 1.6 0.4-1.1-0.8-0.8-0.4 0.2 0.2 0.7 0.4 3.4 2.3 2.7 1.8 8.9 7.1 15.9 16.9 22.5 26 2.8 3.8 7.5 5.6 11.8 3.1 3.7-2.2 5.9-8 3.1-11.8-8.2-11.1-16.6-23-27.7-31.4-6.3-4.7-14.5-7.6-21.7-3-6.7 4.2-9.6 12.5-11.9 19.6-3.2 9.9-5.5 20-8.6 29.9 5.3-0.7 10.5-1.4 15.8-2.1-7.8-15.5-24.8-50.1-48-41.7-14.1 5.1-19.7 23-22.9 36.2-0.9 3.8-1.8 7.7-2.3 11.6-0.6 4.6 1.1 9.3 6 10.6 4.2 1 10.2-1.5 10.8-6.1z\" fill=\"#040000\" p-id=\"2478\"></path></svg>"
  }, {
    name: '12',
    icon: "<svg t=\"1624457847424\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2632\" ><path d=\"M485.538528 993.072489a362.00362 481.804818 3.149 1 0 52.933731-962.15464 362.00362 481.804818 3.149 1 0-52.933731 962.15464Z\" fill=\"#AADCF0\" p-id=\"2633\"></path><path d=\"M688.2 334.1c-15.1 7.6-30.2 15.6-44.3 25-5.9 3.9-17 10.4-14.6 19.1 1.8 6.5 12 11.2 17.3 14.3 15.7 9.3 32.1 17.6 48.3 25.9 8.6 4.4 16.2-8.5 7.6-13-14.1-7.3-28.3-14.5-42.1-22.3-3.9-2.2-7.9-4.5-11.7-6.9-1.2-0.8-2.4-1.5-3.5-2.4-0.6-0.4-1.1-0.8-1.6-1.2 2.2 1.7-0.3-0.3-0.3-0.3-0.9 0.1-1.5-3.2-0.2 0.5 0.9 2.4 1.1 3.8 0.3 5.8 0.6-1.5-0.9 0.8-0.1 0 0.5-0.5 1-1.1 1.6-1.6 0.5-0.5 1-0.9 1.6-1.3 0.6-0.5 0 0 1.2-0.9 1.7-1.3 3.5-2.5 5.3-3.6 8.4-5.5 17.2-10.4 26-15.2 5.6-3 11.2-6 16.8-8.9 8.6-4.4 1-17.4-7.6-13zM375.8 347c13.4 6.8 26.7 14 39.5 21.9 1.8 1.2 3.7 2.3 5.5 3.5 0.9 0.6 1.7 1.2 2.6 1.8 0.9 0.6 1.9 1.4 1.6 1.1 1.1 0.9 2.1 1.9 3.1 2.8 1.2 1 0-0.3 0.1 0 0-0.2-0.8-2.4-0.3-4.1 1.5-5.5 2.3-2.7 0.8-2-0.4 0.2-0.9 0.8-1.3 1.1 1.7-1.4-1.6 1.1-2.3 1.6-3.4 2.3-6.9 4.4-10.4 6.4-14.9 8.6-30.3 16.4-45.6 24.3-8.6 4.4-1 17.4 7.6 13 15-7.7 30.1-15.4 44.8-23.8 6.2-3.6 13.8-7.3 18.7-12.7 7.6-8.3-3.8-16.6-9.9-20.9-8.7-6.1-18-11.3-27.3-16.4-6.5-3.6-13-7.1-19.6-10.4-8.6-4.5-16.3 8.5-7.6 12.8zM412.8 570.9c13.5 7.7 28.5 13.3 43.3 17.9 29.8 9.2 61.7 13.1 92.6 7.3 20.6-3.9 40-12.5 56.6-25.2 2.8-2.2 4.3-5.6 2.3-9-1.6-2.8-6.2-4.5-9-2.3-48.3 36.9-113.3 30-165.6 6.7-4.6-2.1-9.2-4.2-13.7-6.7-7.3-4.2-13.9 7.2-6.5 11.3z\" fill=\"#040000\" p-id=\"2634\"></path><path d=\"M644.6 505.2c-30.1 21.5-60.6 62.5-39.1 99.8 10.7 18.6 30.3 30.9 49.1 40.1 7.8 3.8 14.6-7.9 6.8-11.7-23.6-11.5-53.7-31.4-49.4-60.9 2.8-18.9 15.8-34.6 29.5-47.2 2.5-2.3 5.1-4.6 7.8-6.7 0.5-0.4 0.9-0.7 1.4-1.1-0.4 0.3-1.2 0.9-0.1 0.1l0.9-0.6c6.9-5.1 0.2-16.8-6.9-11.8z\" fill=\"#040000\" p-id=\"2635\"></path></svg>"
  }, {
    name: '13',
    icon: "<svg t=\"1624457855182\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2789\" ><path d=\"M235.1 76.9c75.6-26.5 297.3-90.1 514.2-16.6 16.3 5.5 29.8 17.4 37.1 33 57.5 122.4 127.1 602.1 62.1 785.6a62.58 62.58 0 0 1-32.5 35.8c-109.5 51.8-428.1 136.7-609.3 37.2-14.4-7.9-25-21.3-29.7-37.1-41.9-140.6-37-627.7 19.1-798 6.1-18.7 20.5-33.4 39-39.9z\" fill=\"#F9DABD\" p-id=\"2790\"></path><path d=\"M392.2 360.2m-35.2 0a35.2 35.2 0 1 0 70.4 0 35.2 35.2 0 1 0-70.4 0Z\" fill=\"#040000\" p-id=\"2791\"></path><path d=\"M618.6 360.2m-35.2 0a35.2 35.2 0 1 0 70.4 0 35.2 35.2 0 1 0-70.4 0Z\" fill=\"#040000\" p-id=\"2792\"></path><path d=\"M512 562.6c-36 0-65.3-29.3-65.3-65.3S476 432 512 432s65.3 29.3 65.3 65.3-29.3 65.3-65.3 65.3z m0-122.9c-31.7 0-57.6 25.8-57.6 57.6s25.8 57.6 57.6 57.6c31.7 0 57.6-25.8 57.6-57.6s-25.9-57.6-57.6-57.6z\" fill=\"#040000\" p-id=\"2793\"></path></svg>"
  }, {
    name: '14',
    icon: "<svg t=\"1624457863444\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2947\" ><path d=\"M178.1 971.5c38.1 15.9 98.7 26.6 171.3-12.3 3.7-2 8.4-1.6 11.6 1.1 43.3 35.9 123.3 80.8 236 10.9 3.8-2.4 8.7-2.4 12.6-0.2 41.8 23.9 191.6 58.2 246.6 14.2 4.4-3.5 9.1-6.6 14.5-8.5C1065 909.5 678.2-652 194.3 351c-37.5 77.8-38.4 94.1-71.9 211.3-27.6 96.3-29.1 231.3 1.4 348.1 7.2 27.3 27.3 49.9 54.3 61.1z\" fill=\"#ABAAAA\" p-id=\"2948\"></path><path d=\"M468.9 349H418c-6.1 0-11.1-5-11.1-11.1V336c0-6.1 5-11.1 11.1-11.1h50.9c6.1 0 11.1 5 11.1 11.1v1.9c0 6.1-5 11.1-11.1 11.1zM643 471.9H390c-6.6 0-12-5.4-12-12s5.4-12 12-12h253c6.6 0 12 5.4 12 12s-5.4 12-12 12zM609 349h-61.2c-6 0-11-4.9-11-11v-2.1c0-6 4.9-11 11-11H609c6 0 11 4.9 11 11v2.1c0 6.1-4.9 11-11 11z\" fill=\"#040000\" p-id=\"2949\"></path></svg>"
  }, {
    name: '15',
    icon: "<svg t=\"1624457870536\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3103\" ><path d=\"M673.1 318.7c3.7-17.5 5.6-35.7 5.6-54.4 0-137.9-105.5-249.7-235.6-249.7S207.4 126.4 207.4 264.3c0 55.4 17.1 106.7 45.9 148.1-55.2 63.3-88.6 145.9-88.6 236.3 0 199.2 162.1 360.6 362.1 360.6 200 0 362.1-161.5 362.1-360.6 0.1-147.3-88.7-274-215.8-330z\" fill=\"#4F8A54\" p-id=\"3104\"></path><path d=\"M392 246.2m-47.1 0a47.1 47.1 0 1 0 94.2 0 47.1 47.1 0 1 0-94.2 0Z\" fill=\"#FFFFFF\" p-id=\"3105\"></path><path d=\"M386 252.8m-26.4 0a26.4 26.4 0 1 0 52.8 0 26.4 26.4 0 1 0-52.8 0Z\" fill=\"#040000\" p-id=\"3106\"></path><path d=\"M505.6 246.2m-47.1 0a47.1 47.1 0 1 0 94.2 0 47.1 47.1 0 1 0-94.2 0Z\" fill=\"#FFFFFF\" p-id=\"3107\"></path><path d=\"M501.4 252.8m-26.4 0a26.4 26.4 0 1 0 52.8 0 26.4 26.4 0 1 0-52.8 0Z\" fill=\"#040000\" p-id=\"3108\"></path><path d=\"M474.3 364.8h-50.9c-6.1 0-11.1-5-11.1-11.1v-1.9c0-6.1 5-11.1 11.1-11.1h50.9c6.1 0 11.1 5 11.1 11.1v1.9c0 6.2-5 11.1-11.1 11.1z\" fill=\"#040000\" p-id=\"3109\"></path></svg>"
  }, {
    name: '16',
    icon: "<svg t=\"1624457876371\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3263\" ><path d=\"M246.4 227.6c-166.9 101.1-461.9 344 87 564.1 1.5 0.6 2.9 1.1 4.4 1.6 80.7 27.7 392.8 165.4 641-198.1 40-58.6 38.5-136.2-3.7-193.3C892 289.5 727 201.1 429.1 182.7c-64.1-4-127.8 11.6-182.7 44.9z\" fill=\"#CF92BE\" p-id=\"3264\"></path><path d=\"M617.1 393.4c-17.4 8.8-34.9 18.1-51.2 28.9-6.9 4.6-20.3 12.3-17.4 22.6 1.2 4.3 5.6 7 9 9.5 3.7 2.7 7.6 5 11.5 7.3 18.2 10.8 37.1 20.3 55.9 30 10 5.1 18.9-10 8.8-15.1-16.4-8.4-32.9-16.9-49-26-4.5-2.6-9.1-5.2-13.5-8l-4.5-3c-0.7-0.5-1.3-1-2-1.5 1.6 1.2 0.7 0.4-0.2-0.2-1.3-0.9-0.3-0.9-0.5-0.3 0.2 0.2 0.4 0.5 0.6 0.7 1 1.9 1.3 3.7 0.8 5.7 0.1-0.6 0.7-1.4-0.6 1.3 0.7-1.5-0.1 0-0.2 0.1 0.6-0.6 1.2-1.3 1.9-1.9l1.8-1.5c1.8-1.6-0.6 0.3 1.2-0.9 2-1.5 4.1-2.9 6.2-4.3 10-6.5 20.4-12.4 30.9-18 6.5-3.5 13.1-7 19.7-10.4 9.6-5 0.8-20.1-9.2-15zM323.1 408.5c15.9 8.1 31.7 16.5 46.8 26 2.2 1.4 4.3 2.8 6.5 4.2 1 0.7 1.9 1.3 2.8 2 0.5 0.3 1 0.7 1.4 1.1-1.1-0.9-0.3-0.3 0.3 0.3 1.1 1 2.2 2.2 3.3 3.1 1.4 1.1-1-1.7-0.1-0.1-0.6-1.1-0.9-4.1 0.3-6.7 2.2-4.8 0.7 0.1 0-0.5 0 0-1.1 0.9-1.3 1 2.3-1.9 0 0-0.5 0.4-0.8 0.5-1.5 1.1-2.3 1.6-4 2.7-8.1 5.1-12.3 7.5-17.3 10-35.1 19.1-52.8 28.2-10 5.1-1.2 20.2 8.8 15.1 17.5-9 35-17.9 52-27.7 7.3-4.2 15.9-8.6 21.8-14.7 9.3-9.7-4.3-19.7-11.5-24.7-10.1-7.1-20.9-13.1-31.7-19-7.6-4.2-15.2-8.2-22.9-12.1-9.7-5.2-18.6 9.9-8.6 15zM513 592.1c-12.2 0-24.6-1.4-36.3-4.3-8-2-13.9-8.2-15.4-16.2s1.7-15.8 8.4-20.5c23.2-16.3 60.5-31.9 106.2-13 6.4 2.6 11 8.3 12.3 15.1 1.3 6.7-0.8 13.6-5.7 18.3-13.5 13.1-40.9 20.6-69.5 20.6z m-37.4-32.5c-3.4 2.4-4.9 6.2-4.2 10.2 0.8 4.1 3.6 7.1 7.7 8.1 39.1 9.7 81.2 0.7 96.1-13.7 2.4-2.3 3.4-5.6 2.7-8.9-0.7-3.4-2.9-6.2-6.1-7.5-41.2-17.2-75.1-3.1-96.2 11.8z\" fill=\"#040000\" p-id=\"3265\"></path></svg>"
  }, {
    name: '17',
    icon: "<svg t=\"1624457881793\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3419\" ><path d=\"M1008.6 465.7c0-124.9-95.5-226.2-213.4-226.2-12 0-23.8 1.1-35.2 3.1v-3.1c0-124.9-95.5-226.2-213.4-226.2S333.4 114.6 333.4 239.5c0 2.4 0 4.8 0.1 7.2-17.1-4.7-35-7.2-53.4-7.2-117.8 0-213.4 101.3-213.4 226.2 0 92.1 51.9 171.3 126.3 206.6-13.7 29.9-21.4 63.4-21.4 98.8 0 124.9 95.5 226.2 213.4 226.2 68.8 0 130-34.5 169-88.1 39 53.6 100.2 88.1 169 88.1 117.8 0 213.4-101.3 213.4-226.2 0-41.2-10.4-79.9-28.6-113.1 60.5-39.9 100.8-111.1 100.8-192.3z\" fill=\"#8CC66D\" p-id=\"3420\"></path><path d=\"M437.8 400.7m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z\" fill=\"#040000\" p-id=\"3421\"></path><path d=\"M649.7 400.7m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z\" fill=\"#040000\" p-id=\"3422\"></path><path d=\"M527.3 625.9c6.3-14.2 13.1-28.3 17.9-43 6.2-19 8.3-38.6 10.5-58.3l2.1-19.2c0.7-6.2-9-6.1-9.7 0-1.7 16.3-2.8 32.8-5.7 48.9-4.2 23.7-13.8 45-23.5 66.7-2.5 5.6 5.9 10.5 8.4 4.9z\" fill=\"#252525\" p-id=\"3423\"></path><path d=\"M447.7 522.3c20.3-0.1 40.6-0.2 61-0.4l96.6-0.6c7.5 0 14.9-0.1 22.4-0.1 16.6-0.1 16.7-25.9 0-25.8-20.3 0.1-40.6 0.2-61 0.4l-96.6 0.6c-7.5 0-14.9 0.1-22.4 0.1-16.6 0.1-16.7 25.9 0 25.8z\" fill=\"#040000\" p-id=\"3424\"></path><path d=\"M495.4 508.2c-10.3 3.8-9.2 20.9-9.2 29.5 0.1 16 2.1 32.3 6.1 47.8 3.5 13.7 8.7 29.9 20.6 38.7 12.9 9.5 27.6 2.1 37.6-7.9 10.2-10.3 17.8-23 24.7-35.6 11.6-21.3 20.9-43.8 29.7-66.4 3-7.8-9.5-11.1-12.5-3.4-7.4 19.1-15.3 38.1-24.7 56.4-5.9 11.5-12.2 23-20.3 33.1-2.8 3.5-5.8 6.9-9.2 9.8-1.9 1.7-1.4 1.3-3.3 2.5-1.3 0.8-2.6 1.6-3.9 2.2-0.7 0.3 1-0.2-0.8 0.3-0.6 0.2-1.2 0.3-1.8 0.5-1.1 0.3-1.2 0.2-0.5 0.1-0.6 0-1.3 0-1.9 0.1-2.2 0.1 0.6 0.5-1.8-0.2l-1.8-0.6c1.5 0.5 0.2 0.1-0.5-0.3-0.8-0.5-2.9-2.1-1.7-1.1-1-0.9-2-1.7-2.8-2.7-0.4-0.5-0.9-1-1.3-1.5 0.4 0.5 0.1 0.2-0.5-0.7-0.8-1.3-1.7-2.5-2.4-3.9-0.7-1.3-1.4-2.5-2-3.8-0.4-0.8-0.8-1.6-1.1-2.4-0.1-0.2-0.5-1.1 0 0l-0.6-1.5a86.8 86.8 0 0 1-3.3-9.8c-4.4-14.9-6.2-27.9-6.8-42.8-0.3-6.6-0.3-13.1 0.4-19.7 0.2-1.5-0.3 1.5 0.1-0.5l0.3-1.8c0.2-0.9 0.5-1.8 0.7-2.8 0.4-1.9-0.7 1.1 0.3-0.7 0.5-1-1.3 1.2-0.3 0.5-0.3 0.3-1.1 0.8-2 1.1 7.7-2.9 4.3-15.4-3.5-12.5z\" fill=\"#040000\" p-id=\"3425\"></path></svg>"
  }, {
    name: '18',
    icon: "<svg t=\"1624457899440\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3579\" ><path d=\"M75.4 739.8c-78.7-134.4-194-455.7 401.4-579.6 9.8-2 19.2-6.2 29.2-7.5C656.8 133 947.3 205 1000.1 578.4c42.6 223.8 29.7 392.1-822 233.6-43.1-8-80.6-34.4-102.7-72.2z\" fill=\"#F09495\" p-id=\"3580\"></path><path d=\"M704.6 875.4c-129 0-301.8-20.5-526.6-62.3-43.5-8.1-81.2-34.6-103.5-72.7-19.3-32.9-44.8-84.3-57.1-142.5-13.9-65.1-8.8-125.3 15.1-179.2 54.3-122.3 203.7-209.6 444-259.6 4.1-0.9 8.3-2.1 12.3-3.4 5.5-1.7 11.1-3.4 16.9-4.2 29-3.8 75.7-5.9 133.8 5.7 54.5 10.9 105.3 31 150.8 59.9C843.7 251 888.2 296 922.7 351c39.7 63.1 66.1 139.6 78.5 227.3 8.1 42.4 15.2 87.3 12.5 127.9-2.8 42.6-16.4 75.5-41.5 100.7-42.5 42.7-120.3 65-237.8 68.1-9.6 0.2-19.6 0.4-29.8 0.4zM76.3 739.3c22 37.6 59.2 63.7 102.1 71.7 242.5 45.1 424.4 65.3 556.1 61.9 116.9-3.1 194.1-25.2 236.3-67.5 55.4-55.6 44.4-142.5 28.3-226.7C976 415.8 903.4 291.5 789.2 219c-124-78.7-248.1-69.9-283.2-65.3-5.6 0.7-11.2 2.4-16.6 4.1-4.1 1.2-8.3 2.5-12.5 3.4C237.3 211.1 88.5 298 34.5 419.6c-54.6 122.8 2.8 253 41.8 319.7z\" fill=\"#FFFFFF\" p-id=\"3581\"></path><path d=\"M424.1 442.5m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z\" fill=\"#040000\" p-id=\"3582\"></path><path d=\"M635.9 442.5m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z\" fill=\"#040000\" p-id=\"3583\"></path><path d=\"M426.2 543.3c17.1 7.9 36.6 26 25.5 46.1-6.9 12.5-19.8 21.2-31.7 28.4-4.5 2.7-0.4 9.8 4.1 7.1 17.4-10.5 41.6-27.6 39-51.1-1.6-14-12.4-24.8-23.5-32.3-3-2-6.1-3.9-9.3-5.4-4.8-2.1-8.9 5-4.1 7.2zM629.5 535.4c-21.8 11.7-40.6 37-25.7 61.3 8.2 13.4 22.2 22.7 35.7 30.3 4.7 2.7 8.9-4.6 4.2-7.2-15.5-8.7-39.9-23.9-36.9-45.2 1.6-11.4 10.7-20.7 19.6-27.2 2.4-1.7 4.8-3.4 7.4-4.8 4.7-2.5 0.4-9.8-4.3-7.2z\" fill=\"#040000\" p-id=\"3584\"></path><path d=\"M457.2 584.6c25.6 25.6 66.7 41 101.8 28.3 18.2-6.6 33.2-19.1 45.5-33.8 4.2-5.1-3-12.4-7.3-7.3-18.5 22-43.3 38.1-73 35-18.6-1.9-36.2-10.8-50.9-22-2.9-2.2-6.1-4.8-8.8-7.5-4.7-4.7-12 2.6-7.3 7.3z\" fill=\"#040000\" p-id=\"3585\"></path></svg>"
  }, {
    name: '19',
    icon: "<svg t=\"1624457904464\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3739\" ><path d=\"M915.9 510.5c8.4-19 13.1-39.8 13.1-61.7 0-90-78.9-162.9-176.2-162.9-3.2 0-6.3 0.1-9.5 0.2v-0.2c0-94.8-116.2-171.6-259.6-171.6S224 191.2 224 286v2c-96.2 0-174.1 72-174.1 160.9 0 38 14.3 73 38.2 100.5-41.8 29.4-68.8 75.9-68.8 128.2 0 88.9 78 160.9 174.1 160.9 17.1 0 33.6-2.3 49.3-6.5 28.9 46.1 88.7 77.7 157.6 77.7 49.4 0 94-16.2 126-42.3 32 26.1 76.6 42.3 126 42.3 77.3 0 143-39.7 166.7-95 3.1 0.2 6.3 0.2 9.5 0.2 97.3 0 176.2-72.9 176.2-162.9 0-60.6-35.7-113.4-88.8-141.5z\" fill=\"#5A74B8\" p-id=\"3740\"></path><path d=\"M357.6 449.5a46.6 73.2 0 1 0 93.2 0 46.6 73.2 0 1 0-93.2 0Z\" fill=\"#FEFEFD\" p-id=\"3741\"></path><path d=\"M357.5 449.5a25.1 39.4 0 1 0 50.2 0 25.1 39.4 0 1 0-50.2 0Z\" fill=\"#040000\" p-id=\"3742\"></path><path d=\"M531.3 449.5a46.6 73.2 0 1 0 93.2 0 46.6 73.2 0 1 0-93.2 0Z\" fill=\"#FEFEFD\" p-id=\"3743\"></path><path d=\"M531.2 449.5a25.1 39.4 0 1 0 50.2 0 25.1 39.4 0 1 0-50.2 0Z\" fill=\"#040000\" p-id=\"3744\"></path><path d=\"M426.7 574.6c20.9 29.9 59.7 52.2 96.2 38.6 19.2-7.2 34.7-21.2 47.6-36.9 2.8-3.5 3.4-8.3 0-11.7-2.9-2.9-8.9-3.5-11.7 0-16.5 20.2-40.9 40.9-68.1 35.5-17.3-3.4-31-13.2-42.9-25.9-2-2.2-3.9-4.4-5.8-6.7-1.6-1.9 1.1 1.5-0.4-0.6-0.2-0.2-0.3-0.5-0.5-0.7-6.2-8.7-20.6-0.4-14.4 8.4z\" fill=\"#040000\" p-id=\"3745\"></path></svg>"
  }, {
    name: '20',
    icon: "<svg t=\"1624457910321\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3899\" ><path d=\"M792.8 301.4c-8.2 0-16.2 0.4-24.2 1.3-12.3-81.8-129.2-145.9-271.8-145.9-137.1 0-250.5 59.3-269.9 136.6C105.3 295.5 7.4 391.2 7.4 508.9c0 119.1 100.2 215.6 223.7 215.6 5.3 0 10.6-0.2 15.8-0.5 14.4 80.5 130.4 143.2 271.3 143.2 135.9 0 248.6-58.3 269.4-134.6 1.7 0 3.4 0.1 5.1 0.1 123.6 0 223.7-96.5 223.7-215.6s-100-215.7-223.6-215.7z\" fill=\"#F6CD50\" p-id=\"3900\"></path><path d=\"M435.9 431.5m-52.2 0a52.2 52.2 0 1 0 104.4 0 52.2 52.2 0 1 0-104.4 0Z\" fill=\"#FAFAFA\" p-id=\"3901\"></path><path d=\"M588.1 431.5m-52.2 0a52.2 52.2 0 1 0 104.4 0 52.2 52.2 0 1 0-104.4 0Z\" fill=\"#FAFAFA\" p-id=\"3902\"></path><path d=\"M435.9 431.5m-27.8 0a27.8 27.8 0 1 0 55.6 0 27.8 27.8 0 1 0-55.6 0Z\" fill=\"#040000\" p-id=\"3903\"></path><path d=\"M601.9 407.4c-5.7 2.9-11.3 5.9-16.9 9-6.8 3.8-15.3 7.8-20.5 13.8-5.6 6.5 1.6 11.1 6.7 14.4 11.2 7.1 23.3 13 35.1 19 5.7 2.9 10.8-5.7 5.1-8.6-10.9-5.6-21.9-11.1-32.4-17.4-2.4-1.4-4.6-3.1-7-4.6 1 0.6-0.4-0.4-0.4-0.4-1.9-0.3-0.5 4.2 0.5 4.1-0.1 0-0.6 0.3 0.3-0.3 0.5-0.3 1-0.9 1.5-1.3 9.7-7.9 21.9-13.5 33.1-19.2 5.7-2.7 0.6-11.4-5.1-8.5zM406.6 547.6c11.5 14.4 27 26.7 42.7 36.3 32.2 19.8 71.2 27.2 107.6 15.4 29.5-9.6 54.6-29.1 75.5-51.6 10.8-11.6-6.6-29.1-17.5-17.5-9.4 10.1-19.5 19.7-30.8 27.7-4.6 3.2-9.3 6.2-14.2 8.9-5 2.8-9.9 5.1-14.1 6.7-4.6 1.7-9.3 3.2-14.1 4.4-2.2 0.5-4.4 1-6.6 1.4-1 0.2-2 0.3-2.9 0.5 2.6-0.4-2.1 0.2-2.5 0.3-4.1 0.4-8.3 0.5-12.5 0.4-2.2-0.1-4.4-0.2-6.6-0.4-1.1-0.1-2.2-0.2-3.2-0.3-1.5-0.2-1.4-0.2 0.1 0l-2.1-0.3c-7.8-1.3-15.4-3.4-22.8-6.2-0.9-0.4-1.8-0.7-2.8-1.1-3.1-1.2 2.3 1.1-0.7-0.3-1.5-0.7-2.9-1.3-4.4-2-3.7-1.8-7.2-3.7-10.8-5.8-5.7-3.4-11.1-7.1-16.4-11.1 3 2.3-1.1-0.9-1.8-1.5-1.1-0.9-2.1-1.7-3.1-2.6-2.1-1.8-4.2-3.7-6.3-5.6-4.4-4.1-8.7-8.4-12.4-13.1-4.2-5.2-13.1-4.3-17.5 0-5 5.1-4 12.2 0.2 17.4z\" fill=\"#040000\" p-id=\"3904\"></path></svg>"
  }]
}, {
  name: '标记图标',
  type: 'sign',
  list: [{
    name: '1',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M809.728 429.696a18.901333 18.901333 0 0 0-15.274667-12.885333l-183.466666-26.624-81.92-166.272a18.901333 18.901333 0 0 0-34.005334 0l-81.92 166.272-183.594666 26.624a19.029333 19.029333 0 0 0-10.496 32.298666l132.693333 129.536-31.274667 182.741334a18.816 18.816 0 0 0 27.477334 19.84l164.138666-86.186667 164.096 86.058667a18.773333 18.773333 0 1 0 27.434667-19.84l-31.36-182.741334 132.693333-129.408a18.901333 18.901333 0 0 0 4.778667-19.413333z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '2',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M644.565333 306.901333c32.128 0 65.834667-5.76 101.077334-17.237333a17.066667 17.066667 0 0 1 22.357333 16.213333v328.32c-1.109333 0.768 10.325333 27.093333-99.370667 19.84-109.653333-7.210667-181.76-45.098667-246.869333-45.098666-65.152 0-49.322667 2.688-74.154667 8.405333v168.064a24.746667 24.746667 0 0 1-24.490666 25.258667 22.528 22.528 0 0 1-17.28-7.253334 24.149333 24.149333 0 0 1-7.168-18.005333V281.258667C299.776 280.490667 328.106667 256 421.76 256s164.437333 50.901333 222.805333 50.901333z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '3',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M524.074667 225.408l274.517333 274.517333a17.066667 17.066667 0 0 1 0 24.149334l-274.517333 274.517333a17.066667 17.066667 0 0 1-24.149334 0l-274.517333-274.517333a17.066667 17.066667 0 0 1 0-24.149334l274.517333-274.517333a17.066667 17.066667 0 0 1 24.149334 0z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '4',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M317.866667 300.8h388.266666c9.386667 0 17.066667 7.68 17.066667 17.066667v388.266666a17.066667 17.066667 0 0 1-17.066667 17.066667h-388.266666a17.066667 17.066667 0 0 1-17.066667-17.066667v-388.266666c0-9.386667 7.68-17.066667 17.066667-17.066667z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '5',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M498.346667 279.082667L248.789333 701.44a15.829333 15.829333 0 0 0 13.653334 23.893333h499.114666a15.829333 15.829333 0 0 0 13.653334-23.893333l-249.6-422.357333a15.829333 15.829333 0 0 0-27.264 0z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '6',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M497.749333 798.549333l-31.445333-28.501333C313.941333 631.722667 213.333333 540.501333 213.333333 428.8a160.981333 160.981333 0 0 1 162.730667-162.730667c51.498667 0 100.906667 23.978667 133.12 61.696a177.536 177.536 0 0 1 133.162667-61.696 160.981333 160.981333 0 0 1 162.730666 162.730667c0 111.701333-100.608 202.965333-252.970666 341.333333l-31.445334 28.458667a17.066667 17.066667 0 0 1-22.912 0z\" fill=\"#FFFFFF\"></path><path d=\"M634.538667 487.808L555.050667 426.24 507.306667 256a201.002667 201.002667 0 0 0-23.594667 20.394667l-0.256-0.256L525.653333 426.666667l-133.290666 59.946666a14.08 14.08 0 0 0-8.021334 15.957334l28.757334 126.378666a14.208 14.208 0 0 0 27.733333-6.229333l-26.24-115.114667 126.037333-56.704 76.416 59.136a14.250667 14.250667 0 0 0 19.968-2.474666 14.08 14.08 0 0 0-2.474666-19.797334z\" fill=\"#6D768D\"></path></svg>"
  }, {
    name: '7',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M497.749333 798.549333l-31.445333-28.501333C313.941333 631.722667 213.333333 540.501333 213.333333 428.8a160.981333 160.981333 0 0 1 162.730667-162.730667c51.498667 0 100.906667 23.978667 133.12 61.696a177.536 177.536 0 0 1 133.162667-61.696 160.981333 160.981333 0 0 1 162.730666 162.730667c0 111.701333-100.608 202.965333-252.970666 341.333333l-31.445334 28.458667a17.066667 17.066667 0 0 1-22.912 0z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '8',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M374.656 273.194667c5.973333 4.48 12.117333 9.6 18.346667 15.36 6.272 5.717333 11.904 12.373333 16.896 19.84 2.517333 4.010667 5.504 8.490667 9.002666 13.482666a529.493333 529.493333 0 0 1 20.266667 32.213334h155.221333a169.813333 169.813333 0 0 0 9.770667-15.744c2.474667-4.48 5.248-8.96 8.234667-13.482667a460.842667 460.842667 0 0 1 23.253333-31.829333c4.992-6.229333 12.245333-12.373333 21.76-18.346667a34.261333 34.261333 0 0 0 10.112-9.728 31.274667 31.274667 0 0 0 5.248-11.989333 18.56 18.56 0 0 0-1.536-11.605334 17.664 17.664 0 0 0-10.112-8.618666c-4.48-1.493333-8.362667-2.005333-11.605333-1.493334a46.933333 46.933333 0 0 0-9.770667 2.602667c-3.242667 1.28-6.613333 2.645333-10.112 4.138667a32.426667 32.426667 0 0 1-12.757333 2.261333 26.026667 26.026667 0 0 1-12.373334-2.645333 45.653333 45.653333 0 0 1-8.96-6.357334l-8.661333-7.850666a30.336 30.336 0 0 0-11.989333-6.4c-9.984-3.968-18.005333-4.693333-24.021334-2.218667-5.973333 2.474667-11.946667 6.485333-17.962666 11.946667a88.618667 88.618667 0 0 1-11.989334 10.496 7.338667 7.338667 0 0 1-3.754666 1.493333 46.165333 46.165333 0 0 1-8.277334-5.205333 71.808 71.808 0 0 1-7.125333-4.906667 37.973333 37.973333 0 0 1-6.4-6.357333c-3.968-3.968-9.941333-6.613333-17.92-7.850667a31.061333 31.061333 0 0 0-21.76 4.138667c-8.533333 5.461333-14.506667 10.069333-18.048 13.824a29.354667 29.354667 0 0 1-15.744 7.893333 23.978667 23.978667 0 0 1-13.098667-0.768 987.733333 987.733333 0 0 0-14.634666-4.48 80.725333 80.725333 0 0 0-14.250667-2.986667 16.768 16.768 0 0 0-11.989333 2.986667c-6.997333 5.461333-9.258667 12.074667-6.741334 19.84a34.56 34.56 0 0 0 13.482667 18.346667z\" fill=\"#FFFFFF\"></path><path d=\"M780.757333 545.152a219.306667 219.306667 0 0 0-19.882666-65.536 224.981333 224.981333 0 0 0-33.365334-49.792 430.336 430.336 0 0 0-37.12-37.12c-14.506667-11.946667-27.264-23.296-38.272-34.048a544.512 544.512 0 0 1-27.733333-28.842667 305.28 305.28 0 0 1-22.485333-26.197333h-168.746667c-6.485333 8.490667-13.994667 17.493333-22.485333 26.965333a360.96 360.96 0 0 1-26.24 28.074667c-10.538667 10.24-22.272 21.12-35.285334 32.597333a305.493333 305.493333 0 0 0-41.6 44.16 250.026667 250.026667 0 0 0-49.493333 117.589334 216.106667 216.106667 0 0 0 1.877333 70.4 220.586667 220.586667 0 0 0 75.349334 126.549333c21.248 18.005333 47.146667 32.597333 77.653333 43.818667 30.464 11.264 65.493333 16.853333 104.96 16.853333 38.528 0 72.874667-4.864 103.125333-14.592a265.045333 265.045333 0 0 0 78.378667-39.338667c21.973333-16.469333 39.594667-35.797333 52.864-58.026666 13.226667-22.186667 22.101333-45.824 26.624-70.784 4.992-30.421333 5.632-58.026667 1.877333-82.773334z\" fill=\"#FFFFFF\"></path><path d=\"M593.322667 647.509333a20.48 20.48 0 0 1-11.861334 3.2h-50.133333v14.165334c0 4.266667-1.792 8.362667-5.376 12.373333a15.914667 15.914667 0 0 1-13.952 5.333333 24.917333 24.917333 0 0 1-14.336-3.882666c-3.84-2.602667-5.973333-7.210667-6.4-13.824v-14.165334h-48.725333a17.792 17.792 0 0 1-11.818667-3.882666 10.24 10.24 0 0 1-3.968-9.6c0-4.266667 1.578667-7.68 4.693333-10.24a16.768 16.768 0 0 1 11.093334-3.925334h48.682666v-24.789333h-48.682666a15.573333 15.573333 0 0 1-11.52-4.266667 13.525333 13.525333 0 0 1-4.266667-9.941333 15.36 15.36 0 0 1 4.693333-10.624 14.72 14.72 0 0 1 11.093334-4.949333h48.682666l0.725334-14.890667a1053.568 1053.568 0 0 1-40.832-42.538667l-10.752-9.898666a41.216 41.216 0 0 1-6.442667-11.690667c-1.92-4.992-0.938667-10.069333 2.858667-15.274667a13.653333 13.653333 0 0 1 15.786666-3.84c6.186667 2.090667 11.221333 4.821333 15.018667 8.106667 1.92 2.389333 5.248 5.888 10.026667 10.666667l15.061333 14.848 19.328 19.157333 22.186667-20.565333a987.605333 987.605333 0 0 1 29.397333-25.514667 21.162667 21.162667 0 0 1 14.293333-5.674667c5.290667 0 9.557333 2.133333 12.928 6.4 6.186667 7.082667 3.84 15.36-7.168 24.789334a179.072 179.072 0 0 0-12.885333 12.373333c-5.76 5.973333-11.52 11.733333-17.194667 17.408-6.698667 7.082667-14.08 14.378667-22.186666 21.973333v13.44h46.506666c6.698667 0 11.605333 1.536 14.72 4.608a14.165333 14.165333 0 0 1 4.650667 10.282667c0 4.266667-1.450667 7.936-4.309333 11.008-2.858667 3.029333-7.637333 4.352-14.336 3.84l-46.506667 0.768-0.768 24.064h45.866667c13.354667 0 20.053333 4.992 20.053333 14.933333 0.469333 4.693333-0.853333 8.106667-3.925333 10.24z\" fill=\"#6D768D\"></path></svg>"
  }, {
    name: '9',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M512 213.333333l234.666667 341.333334h-128v213.333333h-213.333334v-213.333333h-128L512 213.333333z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '10',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M533.333333 810.666667L298.666667 469.333333h128V256h213.333333v213.333333h128l-234.666667 341.333334z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '11',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M213.333333 533.333333L554.666667 298.666667v128h213.333333v213.333333h-213.333333v128l-341.333334-234.666667z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '12',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M810.666667 533.333333L469.333333 768v-128H256v-213.333333h213.333333V298.666667l341.333334 234.666666z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '13',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M0 512c0 282.752 229.248 512 512 512s512-229.248 512-512S794.752 0 512 0 0 229.248 0 512z\" fill=\"#6D768D\"></path><path d=\"M571.349333 508.586667l162.389334-162.346667a44.330667 44.330667 0 1 0-62.72-62.72l-162.389334 162.389333-162.517333-162.389333a44.330667 44.330667 0 1 0-62.72 62.72l162.389333 162.389333-162.389333 162.474667a44.330667 44.330667 0 1 0 62.72 62.72l162.389333-162.346667 162.389334 162.389334a44.330667 44.330667 0 1 0 62.72-62.72l-162.261334-162.56z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '14',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 0C233.386667 0 0 225.877333 0 512s225.877333 512 512 512 512-225.877333 512-512S790.613333 0 512 0z\" fill=\"#6D768D\"></path><path d=\"M726.144 311.210667l-277.333333 305.066666-124.8-124.8c-13.866667-13.866667-41.6-13.866667-55.466667 0-13.866667 13.866667-13.866667 41.6 0 55.466667l159.445333 152.533333c13.866667 13.866667 41.6 13.866667 55.466667 0l305.066667-332.8c13.866667-13.866667 13.866667-41.6 0-55.466666-20.778667-13.866667-48.512-13.866667-62.378667 0z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '15',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M541.952 755.626667a40.618667 40.618667 0 0 1-29.824 12.373333 41.344 41.344 0 0 1-30.122667-12.373333 40.106667 40.106667 0 0 1-12.672-30.122667c0-11.605333 4.096-21.845333 12.672-30.122667a40.405333 40.405333 0 0 1 30.122667-12.714666c11.605333 0 21.546667 4.138667 29.824 12.714666a40.32 40.32 0 0 1 12.714667 30.122667c0 11.861333-4.096 21.76-12.714667 30.122667zM450.986667 241.28A77.866667 77.866667 0 0 1 512.256 213.333333c24.874667 0 45.354667 8.917333 61.354667 27.946667 15.488 18.432 23.722667 41.685333 23.722666 69.674667 0 23.765333-33.152 200.533333-44.672 329.045333h-80.128C463.146667 511.402667 426.666667 334.677333 426.666667 310.954667c0-27.392 8.277333-50.645333 24.32-69.674667z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '16',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.794667 0 512 0z\" fill=\"#6D768D\"></path><path d=\"M490.666667 682.666667a64 64 0 1 1 0 128 64 64 0 0 1 0-128z m13.994666-490.752c61.397333 0 112.341333 14.634667 153.002667 43.946666 40.533333 29.269333 60.885333 72.618667 60.885333 130.133334 0 35.242667-12.373333 64.938667-29.952 89.045333-10.282667 14.677333-33.664 33.408-62.890666 56.192l-32.426667 22.357333c-15.701333 12.202667-29.696 26.453333-34.858667 42.666667-1.706667 5.546667-3.072 14.677333-3.968 24.533333-0.426667 4.949333-4.864 15.018667-15.232 15.018667h-83.328c-13.568 0-15.957333-10.581333-15.744-15.786667 1.493333-34.005333 4.608-64.213333 18.474667-80.469333 28.074667-32.896 91.904-73.813333 91.904-73.813333a104.106667 104.106667 0 0 0 23.552-24.021334c10.837333-14.933333 19.797333-31.317333 19.797333-49.237333 0-20.565333-6.016-39.338667-18.090666-56.32-12.032-16.938667-34.090667-25.386667-66.005334-25.386667-31.445333 0-53.76 10.410667-66.901333 31.274667-9.685333 15.445333-15.786667 29.610667-18.346667 45.013333-0.853333 5.461333-4.394667 16.981333-16.042666 16.981334H327.210667c-17.322667 0-21.12-11.221333-20.650667-16.64 6.272-68.138667 32.896-114.688 80-144.597334 32-20.565333 71.381333-30.890667 118.101333-30.890666z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '17',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M336.256 410.026667H253.312a40.021333 40.021333 0 0 0-39.850667 43.264l23.296 278.101333c1.706667 20.693333 19.072 36.608 39.850667 36.608h59.648c11.050667 0 20.010667-8.96 20.010667-19.968v-318.037333a19.968 19.968 0 0 0-20.010667-19.968z m434.432 0h-178.944C653.312 182.314667 548.949333 170.666667 548.949333 170.666667c-44.288 0-35.114667 34.986667-38.442666 40.832 0 84.48-68.010667 155.093333-101.034667 184.362666a39.552 39.552 0 0 0-13.226667 29.653334v322.56c0 11.008 8.96 19.925333 20.010667 19.925333h233.728c30.378667 0 58.154667-17.152 71.68-44.373333 18.176-36.736 40.448-90.112 54.656-133.973334 13.781333-42.410667 26.24-94.976 33.578667-131.968a39.850667 39.850667 0 0 0-39.253334-47.658666z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '18',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M796.16 413.909333c-31.146667-0.298667-115.626667-0.085333-146.858667-0.085333h-158.464c8.533333-7.68 15.914667-14.506667 23.594667-20.906667 29.781333-24.874667 25.813333-71.082667-14.208-88.874666-22.954667-10.24-44.970667-5.632-64 11.52-34.944 31.274667-69.632 62.677333-104.277333 93.994666a15.488 15.488 0 0 1-11.178667 4.437334c-11.221333-0.085333-26.88-0.128-46.933333-0.170667a17.066667 17.066667 0 0 0-17.109334 17.066667L256 719.701333a17.066667 17.066667 0 0 0 17.066667 17.152l49.578666-0.085333c3.968 0 7.466667 0.768 10.88 2.602667 15.829333 8.832 31.701333 17.493333 47.616 26.24a18.133333 18.133333 0 0 0 9.301334 2.346666h168.405333c6.186667 0 11.946667-0.981333 17.834667-2.56 29.44-7.253333 40.021333-30.293333 38.528-52.565333-0.768-9.728-4.266667-18.346667-9.984-26.24 19.626667-5.76 35.114667-16.213333 42.112-36.096 7.125333-20.394667 1.621333-38.4-12.672-53.333333 28.16-19.754667 34.858667-44.672 18.645333-75.648h140.458667c6.570667 0 13.013333-0.597333 19.370666-2.645334 31.957333-9.813333 48.810667-42.88 35.626667-71.552-10.154667-22.186667-28.629333-33.152-52.608-33.450666z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '19',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M270.506667 413.909333c31.146667-0.298667 115.626667-0.085333 146.858666-0.085333h158.464c-8.533333-7.68-15.914667-14.506667-23.594666-20.906667-29.781333-24.874667-25.813333-71.082667 14.208-88.874666 22.954667-10.24 44.970667-5.632 64 11.52 34.944 31.274667 69.632 62.677333 104.277333 93.994666 3.413333 2.986667 6.528 4.437333 11.178667 4.437334 11.221333-0.085333 26.88-0.128 46.933333-0.170667a17.066667 17.066667 0 0 1 17.109333 17.066667l0.682667 288.853333a17.066667 17.066667 0 0 1-17.066667 17.152l-49.578666-0.085333a22.101333 22.101333 0 0 0-10.88 2.602666c-15.829333 8.832-31.701333 17.493333-47.616 26.24a18.133333 18.133333 0 0 1-9.301334 2.346667h-168.405333a68.693333 68.693333 0 0 1-17.834667-2.56c-29.44-7.253333-40.021333-30.293333-38.528-52.565333 0.768-9.728 4.266667-18.346667 9.984-26.24-19.626667-5.76-35.114667-16.213333-42.112-36.096-7.125333-20.394667-1.621333-38.4 12.672-53.333334-28.16-19.754667-34.858667-44.672-18.645333-75.648H272.853333c-6.570667 0-13.013333-0.597333-19.370666-2.645333-31.957333-9.813333-48.810667-42.88-35.626667-71.552 10.154667-22.186667 28.629333-33.152 52.608-33.450667z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '20',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M667.733333 480.128H400v-111.36a97.706667 97.706667 0 0 1 97.621333-97.621333 97.706667 97.706667 0 0 1 97.578667 97.621333 28.885333 28.885333 0 0 0 57.813333 0A155.605333 155.605333 0 0 0 497.621333 213.333333a155.605333 155.605333 0 0 0-155.392 155.434667v111.36h-14.677333A28.885333 28.885333 0 0 0 298.666667 509.013333v292.010667a28.885333 28.885333 0 0 0 28.885333 28.885333h340.138667a28.885333 28.885333 0 0 0 28.928-28.885333V509.013333a28.885333 28.885333 0 0 0-28.928-28.885333z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '21',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M400.042667 437.461333v-111.36a97.706667 97.706667 0 0 1 97.621333-97.621333 97.706667 97.706667 0 0 1 97.578667 97.621333 28.885333 28.885333 0 0 0 57.813333 0A155.605333 155.605333 0 0 0 497.621333 170.666667a155.605333 155.605333 0 0 0-155.392 155.434666v111.36h-14.677333A28.885333 28.885333 0 0 0 298.666667 466.346667v292.010666a28.885333 28.885333 0 0 0 28.885333 28.885334h340.138667a28.885333 28.885333 0 0 0 28.928-28.885334V466.346667a28.885333 28.885333 0 0 0-28.928-28.885334H400.042667z\" fill=\"#FFFFFF\"></path><path d=\"M595.242667 437.461333v-111.36a97.706667 97.706667 0 0 0-97.621334-97.621333 97.706667 97.706667 0 0 0-97.578666 97.621333 28.885333 28.885333 0 0 1-57.813334 0A155.605333 155.605333 0 0 1 497.621333 170.666667a155.605333 155.605333 0 0 1 155.434667 155.434666v111.36h14.634667c16 0 28.928 12.928 28.928 28.885334v292.010666a28.885333 28.885333 0 0 1-28.928 28.885334H327.552A28.885333 28.885333 0 0 1 298.666667 758.357333V466.346667c0-15.957333 12.928-28.885333 28.885333-28.885334h267.690667z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '22',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M511.999787 512.000213m-511.999787 0a511.999787 511.999787 0 1 0 1023.999573 0 511.999787 511.999787 0 1 0-1023.999573 0Z\" fill=\"#6D768D\"></path><path d=\"M381.354508 364.586941c0 54.015977 29.013321 103.935957 75.946635 130.986613a152.53327 152.53327 0 0 0 151.935936 0 151.12527 151.12527 0 0 0 75.946636-130.986613A151.594604 151.594604 0 0 0 533.333111 213.333671a151.594604 151.594604 0 0 0-151.89327 151.25327zM660.479725 498.901552a185.258589 185.258589 0 0 1-127.146614 50.346646c-49.066646 0-93.866628-19.199992-127.06128-50.346646C317.141201 544.853533 255.999893 637.440161 255.999893 744.106783c0 13.183995 10.709329 23.850657 23.978657 23.850657h506.709122a23.893323 23.893323 0 0 0 23.978657-23.893323c0-106.538622-61.098641-199.25325-150.186604-245.205232z\" fill=\"#FFFFFF\"></path></svg>"
  }, {
    name: '23',
    icon: "<svg viewBox=\"0 0 1024 1024\"><path d=\"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z\" fill=\"#6D768D\"></path><path d=\"M445.610667 401.578667a129.322667 129.322667 0 1 0 258.645333 0 129.322667 129.322667 0 0 0-258.645333 0z m237.568 114.901333a157.354667 157.354667 0 0 1-216.362667 0 236.373333 236.373333 0 0 0-127.957333 209.706667c0 11.264 9.130667 20.394667 20.394666 20.394666h431.402667a20.394667 20.394667 0 0 0 20.394667-20.394666 236.373333 236.373333 0 0 0-127.872-209.706667zM409.813333 401.578667c0-40.362667 14.592-77.397333 38.698667-106.112a112.725333 112.725333 0 0 0-29.013333-3.925334 112.64 112.64 0 0 0-112.426667 112.469334 112.64 112.64 0 0 0 144.853333 107.648 164.693333 164.693333 0 0 1-42.112-110.08z m-18.602666 136.704a136.533333 136.533333 0 0 1-65.706667-34.474667 205.44 205.44 0 0 0-111.232 182.4c0 9.813333 7.936 17.706667 17.706667 17.706667H303.36a273.621333 273.621333 0 0 1 87.893333-165.632z\" fill=\"#FFFFFF\"></path></svg>"
  }]
}];

//  获取nodeIconList icon内容
var getNodeIconListIcon = function getNodeIconListIcon(name) {
  var extendIconList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var arr = name.split('_');
  var iconList = mergerIconList([].concat(nodeIconList, _toConsumableArray(extendIconList)));
  var typeData = iconList.find(function (item) {
    return item.type === arr[0];
  });
  if (typeData) {
    var typeName = typeData.list.find(function (item) {
      return item.name === arr[1];
    });
    if (typeName) {
      return typeName.icon;
    }
    return '';
  } else {
    return '';
  }
};
var iconsSvg = {
  hyperlink: hyperlink,
  note: note,
  attachment: attachment,
  nodeIconList: nodeIconList,
  getNodeIconListIcon: getNodeIconListIcon
};

// 测量svg文本宽高
var measureText = function measureText(text, style) {
  var g = new G();
  var node = new Text().text(text);
  style.text(node);
  g.add(node);
  return g.bbox();
};

// 标签默认的样式
var defaultTagStyle = {
  radius: 3,
  // 标签矩形的圆角大小
  fontSize: 12,
  // 字号，建议文字高度不要大于height
  fill: '',
  // 标签矩形的背景颜色
  height: 20,
  // 标签矩形的高度
  paddingX: 8 // 水平内边距，如果设置了width，将忽略该配置
  //width: 30 // 标签矩形的宽度，如果不设置，默认以文字的宽度+paddingX*2为宽度
};

//  创建图片节点
function createImgNode() {
  var _SVGImage$load,
    _this = this;
  var img = this.getData('image');
  if (!img) {
    return;
  }
  var imgSize = this.getImgShowSize();
  var node = (_SVGImage$load = new Image$1().load(img)).size.apply(_SVGImage$load, _toConsumableArray(imgSize));
  // 如果指定了加载失败显示的图片，那么加载一下图片检测是否失败
  var defaultNodeImage = this.mindMap.opt.defaultNodeImage;
  if (defaultNodeImage) {
    var imgEl = new Image();
    imgEl.onerror = function () {
      node.load(defaultNodeImage);
    };
    imgEl.src = img;
  }
  if (this.getData('imageTitle')) {
    node.attr('title', this.getData('imageTitle'));
  }
  node.on('dblclick', function (e) {
    _this.mindMap.emit('node_img_dblclick', _this, e);
  });
  node.on('mouseenter', function (e) {
    _this.mindMap.emit('node_img_mouseenter', _this, node, e);
  });
  node.on('mouseleave', function (e) {
    _this.mindMap.emit('node_img_mouseleave', _this, node, e);
  });
  node.on('mousemove', function (e) {
    _this.mindMap.emit('node_img_mousemove', _this, node, e);
  });
  return {
    node: node,
    width: imgSize[0],
    height: imgSize[1]
  };
}

//  获取图片显示宽高
function getImgShowSize() {
  var _this$getData = this.getData('imageSize'),
    custom = _this$getData.custom,
    width = _this$getData.width,
    height = _this$getData.height;
  // 如果是自定义了图片的宽高，那么不受最大宽高限制
  if (custom) return [width, height];
  return resizeImgSize(width, height, this.mindMap.themeConfig.imgMaxWidth, this.mindMap.themeConfig.imgMaxHeight);
}

//  创建icon节点
function createIconNode() {
  var _this2 = this;
  var _data = this.getData();
  if (!_data.icon || _data.icon.length <= 0) {
    return [];
  }
  var iconSize = this.mindMap.themeConfig.iconSize;
  return _data.icon.map(function (item) {
    var src = iconsSvg.getNodeIconListIcon(item, _this2.mindMap.opt.iconList || []);
    var node = null;
    // svg图标
    if (/^<svg/.test(src)) {
      node = SVG(src);
    } else {
      // 图片图标
      node = new Image$1().load(src);
    }
    node.size(iconSize, iconSize);
    node.on('click', function (e) {
      _this2.mindMap.emit('node_icon_click', _this2, item, e, node);
    });
    node.on('mouseenter', function (e) {
      _this2.mindMap.emit('node_icon_mouseenter', _this2, item, e, node);
    });
    node.on('mouseleave', function (e) {
      _this2.mindMap.emit('node_icon_mouseleave', _this2, item, e, node);
    });
    return {
      node: node,
      width: iconSize,
      height: iconSize
    };
  });
}

// 尝试给html指定标签添加内联样式
function tryAddHtmlStyle(text, style) {
  var tagList = ['span', 'strong', 's', 'em', 'u'];
  // let _text = text
  // for (let i = 0; i < tagList.length; i++) {
  //   text = addHtmlStyle(text, tagList[i], style)
  //   if (text !== _text) {
  //     break
  //   }
  // }
  // return text
  return addHtmlStyle(text, tagList, style);
}

// 创建富文本节点
function createRichTextNode(specifyText) {
  var hasCustomWidth = this.hasCustomWidth();
  var text = typeof specifyText === 'string' ? specifyText : this.getData('text');
  var _this$mindMap$opt = this.mindMap.opt,
    textAutoWrapWidth = _this$mindMap$opt.textAutoWrapWidth,
    emptyTextMeasureHeightText = _this$mindMap$opt.emptyTextMeasureHeightText;
  textAutoWrapWidth = hasCustomWidth ? this.customTextWidth : textAutoWrapWidth;
  var g = new G();
  // 重新设置富文本节点内容
  var recoverText = false;
  if (this.getData('resetRichText')) {
    delete this.nodeData.data.resetRichText;
    recoverText = true;
  }
  if ([CONSTANTS.CHANGE_THEME].includes(this.mindMap.renderer.renderSource)) {
    // 如果自定义过样式则不允许覆盖
    // if (!this.hasCustomStyle() ) {
    recoverText = true;
    // }
  }
  if (recoverText && !isUndef(text)) {
    // 判断节点内容是否是富文本
    var isRichText = checkIsRichText(text);
    // 获取自定义样式
    var customStyle = this.style.getCustomStyle();
    // 样式字符串
    var style = this.style.createStyleText(customStyle);
    if (isRichText) {
      // 如果是富文本那么线移除内联样式
      text = removeHtmlStyle(text);
      // 再添加新的内联样式
      text = this.tryAddHtmlStyle(text, style);
    } else {
      // 非富文本
      text = "<p><span style=\"".concat(style, "\">").concat(text, "</span></p>");
    }
    this.setData({
      text: text
    });
  }
  var html = "<div>".concat(text, "</div>");
  if (!this.mindMap.commonCaches.measureRichtextNodeTextSizeEl) {
    this.mindMap.commonCaches.measureRichtextNodeTextSizeEl = document.createElement('div');
    this.mindMap.commonCaches.measureRichtextNodeTextSizeEl.style.position = 'fixed';
    this.mindMap.commonCaches.measureRichtextNodeTextSizeEl.style.left = '-999999px';
    this.mindMap.el.appendChild(this.mindMap.commonCaches.measureRichtextNodeTextSizeEl);
  }
  var div = this.mindMap.commonCaches.measureRichtextNodeTextSizeEl;
  div.innerHTML = html;
  var el = div.children[0];
  el.classList.add('smm-richtext-node-wrap');
  addXmlns(el);
  el.style.maxWidth = textAutoWrapWidth + 'px';
  if (hasCustomWidth) {
    el.style.width = this.customTextWidth + 'px';
  } else {
    el.style.width = '';
  }
  var _el$getBoundingClient = el.getBoundingClientRect(),
    width = _el$getBoundingClient.width,
    height = _el$getBoundingClient.height;
  // 如果文本为空，那么需要计算一个默认高度
  if (height <= 0) {
    div.innerHTML = "<p>".concat(emptyTextMeasureHeightText, "</p>");
    var elTmp = div.children[0];
    elTmp.classList.add('smm-richtext-node-wrap');
    height = elTmp.getBoundingClientRect().height;
    div.innerHTML = html;
  }
  width = Math.min(Math.ceil(width) + 1, textAutoWrapWidth); // 修复getBoundingClientRect方法对实际宽度是小数的元素获取到的值是整数，导致宽度不够文本发生换行的问题
  height = Math.ceil(height);
  g.attr('data-width', width);
  g.attr('data-height', height);
  var foreignObject = createForeignObjectNode({
    el: div.children[0],
    width: width,
    height: height
  });
  g.add(foreignObject);
  return {
    node: g,
    nodeContent: foreignObject,
    width: width,
    height: height
  };
}

//  创建文本节点
function createTextNode(specifyText) {
  var _this3 = this;
  if (this.getData('richText')) {
    return this.createRichTextNode(specifyText);
  }
  var text = typeof specifyText === 'string' ? specifyText : this.getData('text');
  if (this.getData('resetRichText')) {
    delete this.nodeData.data.resetRichText;
  }
  var g = new G();
  var fontSize = this.getStyle('fontSize', false);
  // 文本超长自动换行
  var textArr = [];
  if (!isUndef(text)) {
    textArr = String(text).split(/\n/gim);
  }
  var _this$mindMap$opt2 = this.mindMap.opt,
    maxWidth = _this$mindMap$opt2.textAutoWrapWidth,
    emptyTextMeasureHeightText = _this$mindMap$opt2.emptyTextMeasureHeightText;
  var isMultiLine = textArr.length > 1;
  textArr.forEach(function (item, index) {
    var arr = item.split('');
    var lines = [];
    var line = [];
    while (arr.length) {
      var str = arr.shift();
      var _text = [].concat(_toConsumableArray(line), [str]).join('');
      if (measureText(_text, _this3.style).width <= maxWidth) {
        line.push(str);
      } else {
        lines.push(line.join(''));
        line = [str];
      }
    }
    if (line.length > 0) {
      lines.push(line.join(''));
    }
    if (lines.length > 1) {
      isMultiLine = true;
    }
    textArr[index] = lines.join('\n');
  });
  textArr = textArr.join('\n').replace(/\n$/g, '').split(/\n/gim);
  textArr.forEach(function (item, index) {
    // 避免尾部的空行不占宽度
    // 同时解决该问题：https://github.com/wanglin2/mind-map/issues/1037
    if (item === '') {
      item = '﻿';
    }
    var node = new Text().text(item);
    node.addClass('smm-text-node-wrap');
    _this3.style.text(node);
    node.y(fontSize * noneRichTextNodeLineHeight * index + (noneRichTextNodeLineHeight - 1) * fontSize / 2);
    g.add(node);
  });
  var _g$bbox = g.bbox(),
    width = _g$bbox.width,
    height = _g$bbox.height;
  // 如果文本为空，那么需要计算一个默认高度
  if (height <= 0) {
    var tmpNode = new Text().text(emptyTextMeasureHeightText);
    this.style.text(tmpNode);
    var tmpBbox = tmpNode.bbox();
    height = tmpBbox.height;
  }
  width = Math.min(Math.ceil(width), maxWidth);
  height = Math.ceil(height);
  g.attr('data-width', width);
  g.attr('data-height', height);
  g.attr('data-ismultiLine', isMultiLine || textArr.length > 1);
  return {
    node: g,
    width: width,
    height: height
  };
}

//  创建超链接节点
function createHyperlinkNode() {
  var _this4 = this;
  var _this$getData2 = this.getData(),
    hyperlink = _this$getData2.hyperlink,
    hyperlinkTitle = _this$getData2.hyperlinkTitle;
  if (!hyperlink) {
    return;
  }
  var customHyperlinkJump = this.mindMap.opt.customHyperlinkJump;
  var iconSize = this.mindMap.themeConfig.iconSize;
  var node = new SVG().size(iconSize, iconSize);
  // 超链接节点
  var a = new A().to(hyperlink).target('_blank');
  a.node.addEventListener('click', function (e) {
    if (typeof customHyperlinkJump === 'function') {
      e.preventDefault();
      customHyperlinkJump(hyperlink, _this4);
    }
  });
  if (hyperlinkTitle) {
    node.add(SVG("<title>".concat(hyperlinkTitle, "</title>")));
  }
  // 添加一个透明的层，作为鼠标区域
  a.rect(iconSize, iconSize).fill({
    color: 'transparent'
  });
  // 超链接图标
  var iconNode = SVG(iconsSvg.hyperlink).size(iconSize, iconSize);
  this.style.iconNode(iconNode);
  a.add(iconNode);
  node.add(a);
  return {
    node: node,
    width: iconSize,
    height: iconSize
  };
}

//  创建标签节点
function createTagNode() {
  var _this5 = this;
  var tagData = this.getData('tag');
  if (!tagData || tagData.length <= 0) {
    return [];
  }
  var _this$mindMap$opt3 = this.mindMap.opt,
    maxTag = _this$mindMap$opt3.maxTag,
    tagsColorMap = _this$mindMap$opt3.tagsColorMap;
  tagsColorMap = tagsColorMap || {};
  var nodes = [];
  tagData.slice(0, maxTag).forEach(function (item, index) {
    var str = '';
    var style = _objectSpread2({}, defaultTagStyle);
    // 旧版只支持字符串类型
    if (typeof item === 'string') {
      str = item;
    } else {
      // v0.10.3+版本支持对象类型
      str = item.text;
      style = _objectSpread2(_objectSpread2({}, defaultTagStyle), item.style);
    }
    // 是否手动设置了标签宽度
    var hasCustomWidth = typeof style.width !== 'undefined';
    // 创建容器节点
    var tag = new G();
    tag.on('click', function () {
      _this5.mindMap.emit('node_tag_click', _this5, item, index, tag);
    });
    // 标签文本
    var text = new Text().text(str);
    _this5.style.tagText(text, style);
    // 获取文本宽高
    var _text$bbox = text.bbox(),
      textWidth = _text$bbox.width,
      textHeight = _text$bbox.height;
    // 矩形宽度
    var rectWidth = hasCustomWidth ? style.width : textWidth + style.paddingX * 2;
    // 取文本和矩形最大宽高作为标签宽高
    var maxWidth = hasCustomWidth ? Math.max(rectWidth, textWidth) : rectWidth;
    var maxHeight = Math.max(style.height, textHeight);
    // 文本居中
    if (hasCustomWidth) {
      text.x((maxWidth - textWidth) / 2);
    } else {
      text.x(hasCustomWidth ? 0 : style.paddingX);
    }
    text.cy(-maxHeight / 2);
    // 标签矩形
    var rect = new Rect().size(rectWidth, style.height).cy(-maxHeight / 2);
    if (hasCustomWidth) {
      rect.x((maxWidth - rectWidth) / 2);
    }
    _this5.style.tagRect(rect, _objectSpread2(_objectSpread2({}, style), {}, {
      fill: style.fill ||
      // 优先节点自身配置
      tagsColorMap[text.node.textContent] ||
      // 否则尝试从实例化选项tagsColorMap映射中获取颜色
      generateColorByContent(text.node.textContent) // 否则按照标签内容生成
    }));
    tag.add(rect).add(text);
    nodes.push({
      node: tag,
      width: maxWidth,
      height: maxHeight
    });
  });
  return nodes;
}

//  创建备注节点
function createNoteNode() {
  var _this6 = this;
  if (!this.getData('note')) {
    return null;
  }
  var iconSize = this.mindMap.themeConfig.iconSize;
  var node = new SVG().attr('cursor', 'pointer').addClass('smm-node-note').size(iconSize, iconSize);
  // 透明的层，用来作为鼠标区域
  node.add(new Rect().size(iconSize, iconSize).fill({
    color: 'transparent'
  }));
  // 备注图标
  var iconNode = SVG(iconsSvg.note).size(iconSize, iconSize);
  this.style.iconNode(iconNode);
  node.add(iconNode);
  // 备注tooltip
  if (!this.mindMap.opt.customNoteContentShow) {
    if (!this.noteEl) {
      this.noteEl = document.createElement('div');
      this.noteEl.style.cssText = "\n          position: fixed;\n          padding: 10px;\n          border-radius: 5px;\n          box-shadow: 0 2px 5px rgb(0 0 0 / 10%);\n          display: none;\n          background-color: #fff;\n          z-index: ".concat(this.mindMap.opt.nodeNoteTooltipZIndex, "\n      ");
      var targetNode = this.mindMap.opt.customInnerElsAppendTo || document.body;
      targetNode.appendChild(this.noteEl);
    }
    this.noteEl.innerText = this.getData('note');
  }
  node.on('mouseover', function () {
    var _this6$getNoteContent = _this6.getNoteContentPosition(),
      left = _this6$getNoteContent.left,
      top = _this6$getNoteContent.top;
    if (!_this6.mindMap.opt.customNoteContentShow) {
      _this6.noteEl.style.left = left + 'px';
      _this6.noteEl.style.top = top + 'px';
      _this6.noteEl.style.display = 'block';
    } else {
      _this6.mindMap.opt.customNoteContentShow.show(_this6.getData('note'), left, top, _this6);
    }
  });
  node.on('mouseout', function () {
    if (!_this6.mindMap.opt.customNoteContentShow) {
      _this6.noteEl.style.display = 'none';
    } else {
      _this6.mindMap.opt.customNoteContentShow.hide();
    }
  });
  node.on('click', function (e) {
    _this6.mindMap.emit('node_note_click', _this6, e, node);
  });
  node.on('dblclick', function (e) {
    _this6.mindMap.emit('node_note_dblclick', _this6, e, node);
  });
  return {
    node: node,
    width: iconSize,
    height: iconSize
  };
}

//  创建附件节点
function createAttachmentNode() {
  var _this7 = this;
  var _this$getData3 = this.getData(),
    attachmentUrl = _this$getData3.attachmentUrl,
    attachmentName = _this$getData3.attachmentName;
  if (!attachmentUrl) {
    return;
  }
  var iconSize = this.mindMap.themeConfig.iconSize;
  var node = new SVG().attr('cursor', 'pointer').size(iconSize, iconSize);
  if (attachmentName) {
    node.add(SVG("<title>".concat(attachmentName, "</title>")));
  }
  // 透明的层，用来作为鼠标区域
  node.add(new Rect().size(iconSize, iconSize).fill({
    color: 'transparent'
  }));
  // 备注图标
  var iconNode = SVG(iconsSvg.attachment).size(iconSize, iconSize);
  this.style.iconNode(iconNode);
  node.add(iconNode);
  node.on('click', function (e) {
    _this7.mindMap.emit('node_attachmentClick', _this7, e, node);
  });
  node.on('contextmenu', function (e) {
    _this7.mindMap.emit('node_attachmentContextmenu', _this7, e, node);
  });
  return {
    node: node,
    width: iconSize,
    height: iconSize
  };
}

// 获取节点备注显示位置
function getNoteContentPosition() {
  var iconSize = this.mindMap.themeConfig.iconSize;
  var scaleY = this.mindMap.view.getTransformData().transform.scaleY;
  var iconSizeAddScale = iconSize * scaleY;
  var _this$_noteData$node$ = this._noteData.node.node.getBoundingClientRect(),
    left = _this$_noteData$node$.left,
    top = _this$_noteData$node$.top;
  top += iconSizeAddScale;
  return {
    left: left,
    top: top
  };
}

// 测量自定义节点内容元素的宽高
function measureCustomNodeContentSize(content) {
  if (!this.mindMap.commonCaches.measureCustomNodeContentSizeEl) {
    this.mindMap.commonCaches.measureCustomNodeContentSizeEl = document.createElement('div');
    this.mindMap.commonCaches.measureCustomNodeContentSizeEl.style.cssText = "\n      position: fixed;\n      left: -99999px;\n      top: -99999px;\n    ";
    this.mindMap.el.appendChild(this.mindMap.commonCaches.measureCustomNodeContentSizeEl);
  }
  this.mindMap.commonCaches.measureCustomNodeContentSizeEl.innerHTML = '';
  this.mindMap.commonCaches.measureCustomNodeContentSizeEl.appendChild(content);
  var rect = this.mindMap.commonCaches.measureCustomNodeContentSizeEl.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height
  };
}

// 是否使用的是自定义节点内容
function isUseCustomNodeContent() {
  return !!this._customNodeContent;
}
var nodeCreateContentsMethods = {
  createImgNode: createImgNode,
  getImgShowSize: getImgShowSize,
  createIconNode: createIconNode,
  tryAddHtmlStyle: tryAddHtmlStyle,
  createRichTextNode: createRichTextNode,
  createTextNode: createTextNode,
  createHyperlinkNode: createHyperlinkNode,
  createTagNode: createTagNode,
  createNoteNode: createNoteNode,
  createAttachmentNode: createAttachmentNode,
  getNoteContentPosition: getNoteContentPosition,
  measureCustomNodeContentSize: measureCustomNodeContentSize,
  isUseCustomNodeContent: isUseCustomNodeContent
};

// 渲染展开收起按钮的隐藏占位元素
function renderExpandBtnPlaceholderRect() {
  // 根节点或没有子节点不需要渲染
  if (!this.nodeData.children || this.nodeData.children.length <= 0 || this.isRoot) {
    return;
  }
  // 默认显示展开按钮的情况下或不显示展开收起按钮的情况下不需要渲染
  var _this$mindMap$opt = this.mindMap.opt,
    alwaysShowExpandBtn = _this$mindMap$opt.alwaysShowExpandBtn,
    notShowExpandBtn = _this$mindMap$opt.notShowExpandBtn;
  if (!alwaysShowExpandBtn && !notShowExpandBtn) {
    var width = this.width,
      height = this.height;
    if (!this._unVisibleRectRegionNode) {
      this._unVisibleRectRegionNode = new Rect();
      this._unVisibleRectRegionNode.fill({
        color: 'transparent'
      });
    }
    this.group.add(this._unVisibleRectRegionNode);
    this.renderer.layout.renderExpandBtnRect(this._unVisibleRectRegionNode, this.expandBtnSize, width, height, this);
  }
}

// 删除展开收起按钮的隐藏占位元素
function clearExpandBtnPlaceholderRect() {
  if (!this._unVisibleRectRegionNode) {
    return;
  }
  this._unVisibleRectRegionNode.remove();
  this._unVisibleRectRegionNode = null;
}

// 更新展开收起按钮的隐藏占位元素
function updateExpandBtnPlaceholderRect() {
  // 布局改变需要重新渲染
  if (this.needRerenderExpandBtnPlaceholderRect) {
    this.needRerenderExpandBtnPlaceholderRect = false;
    this.renderExpandBtnPlaceholderRect();
  }
  // 没有子节点到有子节点需要渲染
  if (this.nodeData.children && this.nodeData.children.length > 0) {
    if (!this._unVisibleRectRegionNode) {
      this.renderExpandBtnPlaceholderRect();
    }
  } else {
    // 有子节点到没子节点，需要删除
    if (this._unVisibleRectRegionNode) {
      this.clearExpandBtnPlaceholderRect();
    }
  }
}
var nodeExpandBtnPlaceholderRectMethods = {
  renderExpandBtnPlaceholderRect: renderExpandBtnPlaceholderRect,
  clearExpandBtnPlaceholderRect: clearExpandBtnPlaceholderRect,
  updateExpandBtnPlaceholderRect: updateExpandBtnPlaceholderRect
};

// 初始化拖拽
function initDragHandle() {
  if (!this.checkEnableDragModifyNodeWidth()) {
    return;
  }
  // 拖拽手柄元素
  this._dragHandleNodes = null;
  // 手柄元素的宽度
  this.dragHandleWidth = 4;
  // 鼠标按下时的x坐标
  this.dragHandleMousedownX = 0;
  // 鼠标是否处于按下状态
  this.isDragHandleMousedown = false;
  // 当前拖拽的手柄序号
  this.dragHandleIndex = 0;
  // 鼠标按下时记录当前的customTextWidth值
  this.dragHandleMousedownCustomTextWidth = 0;
  // 鼠标按下时记录当前的手型样式
  this.dragHandleMousedownBodyCursor = '';
  // 鼠标按下时记录当前节点的left值
  this.dragHandleMousedownLeft = 0;
  this.onDragMousemoveHandle = this.onDragMousemoveHandle.bind(this);
  window.addEventListener('mousemove', this.onDragMousemoveHandle);
  this.onDragMouseupHandle = this.onDragMouseupHandle.bind(this);
  window.addEventListener('mouseup', this.onDragMouseupHandle);
  this.mindMap.on('node_mouseup', this.onDragMouseupHandle);
}

// 鼠标移动事件
function onDragMousemoveHandle(e) {
  if (!this.isDragHandleMousedown) return;
  e.stopPropagation();
  e.preventDefault();
  var _this$mindMap$opt = this.mindMap.opt,
    minNodeTextModifyWidth = _this$mindMap$opt.minNodeTextModifyWidth,
    maxNodeTextModifyWidth = _this$mindMap$opt.maxNodeTextModifyWidth,
    isUseCustomNodeContent = _this$mindMap$opt.isUseCustomNodeContent,
    customCreateNodeContent = _this$mindMap$opt.customCreateNodeContent;
  var useCustomContent = isUseCustomNodeContent && customCreateNodeContent && this._customNodeContent;
  document.body.style.cursor = 'ew-resize';
  this.group.css({
    cursor: 'ew-resize'
  });
  var _this$mindMap$draw$tr = this.mindMap.draw.transform(),
    scaleX = _this$mindMap$draw$tr.scaleX;
  var ox = e.clientX - this.dragHandleMousedownX;
  var newWidth = this.dragHandleMousedownCustomTextWidth + (this.dragHandleIndex === 0 ? -ox : ox) / scaleX;
  newWidth = Math.max(newWidth, minNodeTextModifyWidth);
  if (maxNodeTextModifyWidth !== -1) {
    newWidth = Math.min(newWidth, maxNodeTextModifyWidth);
  }
  // 如果存在图片，那么最小值需要考虑图片宽度
  if (!useCustomContent && this.getData('image')) {
    var imgSize = this.getImgShowSize();
    if (this._rectInfo.textContentWidth - this.customTextWidth + newWidth <= imgSize[0]) {
      newWidth = imgSize[0] + this.customTextWidth - this._rectInfo.textContentWidth;
    }
  }
  this.customTextWidth = newWidth;
  if (this.dragHandleIndex === 0) {
    this.left = this.dragHandleMousedownLeft + ox / scaleX;
  }
  // 自定义内容不重新渲染，交给开发者
  this.reRender(useCustomContent ? [] : ['text'], {
    ignoreUpdateCustomTextWidth: true
  });
}

// 鼠标松开事件
function onDragMouseupHandle() {
  if (!this.isDragHandleMousedown) return;
  document.body.style.cursor = this.dragHandleMousedownBodyCursor;
  this.group.css({
    cursor: 'default'
  });
  this.isDragHandleMousedown = false;
  this.dragHandleMousedownX = 0;
  this.dragHandleIndex = 0;
  this.dragHandleMousedownCustomTextWidth = 0;
  this.setData({
    customTextWidth: this.customTextWidth
  });
  this.mindMap.render();
  this.mindMap.emit('dragModifyNodeWidthEnd', this);
}

// 插件拖拽手柄元素
function createDragHandleNode() {
  var _this = this;
  var list = [new Rect(), new Rect()];
  list.forEach(function (node, index) {
    node.size(_this.dragHandleWidth, _this.height).fill({
      color: 'transparent'
    }).css({
      cursor: 'ew-resize'
    });
    node.on('mousedown', function (e) {
      e.stopPropagation();
      e.preventDefault();
      _this.dragHandleMousedownX = e.clientX;
      _this.dragHandleIndex = index;
      _this.dragHandleMousedownCustomTextWidth = _this.customTextWidth === undefined ? _this._textData ? _this._textData.width : _this.width : _this.customTextWidth;
      _this.dragHandleMousedownBodyCursor = document.body.style.cursor;
      _this.dragHandleMousedownLeft = _this.left;
      _this.isDragHandleMousedown = true;
    });
  });
  return list;
}

// 更新拖拽按钮的显隐和位置尺寸
function updateDragHandle() {
  var _this2 = this;
  if (!this.checkEnableDragModifyNodeWidth()) return;
  if (!this._dragHandleNodes) {
    this._dragHandleNodes = this.createDragHandleNode();
  }
  if (this.getData('isActive')) {
    this._dragHandleNodes.forEach(function (node) {
      node.height(_this2.height);
      _this2.group.add(node);
    });
    this._dragHandleNodes[1].x(this.width - this.dragHandleWidth);
  } else {
    this._dragHandleNodes.forEach(function (node) {
      node.remove();
    });
  }
}
var nodeModifyWidthMethods = {
  initDragHandle: initDragHandle,
  onDragMousemoveHandle: onDragMousemoveHandle,
  onDragMouseupHandle: onDragMouseupHandle,
  createDragHandleNode: createDragHandleNode,
  updateDragHandle: updateDragHandle
};

// 协同相关功能

// 创建容器
function createUserListNode() {
  // 如果没有注册协作插件，那么需要创建
  if (!this.mindMap.cooperate) return;
  this._userListGroup = new G();
  this.group.add(this._userListGroup);
}

// 创建文本头像
function createTextAvatar(item) {
  var _this$mindMap$opt$coo = this.mindMap.opt.cooperateStyle,
    avatarSize = _this$mindMap$opt$coo.avatarSize,
    fontSize = _this$mindMap$opt$coo.fontSize;
  var g = new G();
  var str = item.isMore ? item.name : String(item.name)[0];
  // 圆
  var circle = new Circle().size(avatarSize, avatarSize);
  circle.fill({
    color: item.color || generateColorByContent(str)
  });
  // 文本
  var text = new Text().text(str).fill({
    color: '#fff'
  }).css({
    'font-size': fontSize + 'px'
  }).dx(-fontSize / 2).dy((avatarSize - fontSize) / 2);
  g.add(circle).add(text);
  return g;
}

// 创建图片头像
function createImageAvatar(item) {
  var avatarSize = this.mindMap.opt.cooperateStyle.avatarSize;
  return new Image$1().load(item.avatar).size(avatarSize, avatarSize);
}

// 更新渲染
function updateUserListNode() {
  var _this = this;
  if (!this._userListGroup) return;
  var avatarSize = this.mindMap.opt.cooperateStyle.avatarSize;
  this._userListGroup.clear();
  // 根据当前节点长度计算最多能显示几个
  var length = this.userList.length;
  var maxShowCount = Math.floor(this.width / avatarSize);
  var list = [];
  if (length > maxShowCount) {
    // 如果当前用户数量比最多能显示的多，最后需要显示一个提示信息
    list.push.apply(list, _toConsumableArray(this.userList.slice(0, maxShowCount - 1)).concat([{
      isMore: true,
      name: '+' + (length - maxShowCount + 1)
    }]));
  } else {
    list.push.apply(list, _toConsumableArray(this.userList));
  }
  list.forEach(function (item, index) {
    var node = null;
    if (item.avatar) {
      node = _this.createImageAvatar(item);
    } else {
      node = _this.createTextAvatar(item);
    }
    node.on('click', function (e) {
      _this.mindMap.emit('node_cooperate_avatar_click', item, _this, node, e);
    });
    node.on('mouseenter', function (e) {
      _this.mindMap.emit('node_cooperate_avatar_mouseenter', item, _this, node, e);
    });
    node.on('mouseleave', function (e) {
      _this.mindMap.emit('node_cooperate_avatar_mouseleave', item, _this, node, e);
    });
    node.x(index * avatarSize).cy(-avatarSize / 2);
    _this._userListGroup.add(node);
  });
}

// 添加用户
function addUser(userInfo) {
  if (this.userList.find(function (item) {
    return item.id == userInfo.id;
  })) return;
  this.userList.push(userInfo);
  this.updateUserListNode();
}

// 移除用户
function removeUser(userInfo) {
  var index = this.userList.findIndex(function (item) {
    return item.id == userInfo.id;
  });
  if (index === -1) return;
  this.userList.splice(index, 1);
  this.updateUserListNode();
}

// 清空用户
function emptyUser() {
  this.userList = [];
  this.updateUserListNode();
}
var nodeCooperateMethods = {
  createUserListNode: createUserListNode,
  updateUserListNode: updateUserListNode,
  createTextAvatar: createTextAvatar,
  createImageAvatar: createImageAvatar,
  addUser: addUser,
  removeUser: removeUser,
  emptyUser: emptyUser
};

//  节点类
var MindMapNode = /*#__PURE__*/function () {
  //  构造函数
  function MindMapNode() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, MindMapNode);
    this.opt = opt;
    // 节点数据
    this.nodeData = this.handleData(opt.data || {});
    // 保存本次更新时的节点数据快照
    this.nodeDataSnapshot = '';
    // uid
    this.uid = opt.uid;
    // 控制实例
    this.mindMap = opt.mindMap;
    // 渲染实例
    this.renderer = opt.renderer;
    // 渲染器
    this.draw = this.mindMap.draw;
    this.nodeDraw = this.mindMap.nodeDraw;
    this.lineDraw = this.mindMap.lineDraw;
    // 样式实例
    this.style = new Style(this);
    // 节点当前生效的全部样式
    this.effectiveStyles = {};
    // 形状实例
    this.shapeInstance = new Shape(this);
    this.shapePadding = {
      paddingX: 0,
      paddingY: 0
    };
    // 是否是根节点
    this.isRoot = opt.isRoot === undefined ? false : opt.isRoot;
    // 是否是概要节点
    this.isGeneralization = opt.isGeneralization === undefined ? false : opt.isGeneralization;
    this.generalizationBelongNode = null;
    // 节点层级
    this.layerIndex = opt.layerIndex === undefined ? 0 : opt.layerIndex;
    // 节点宽
    this.width = opt.width || 0;
    // 节点高
    this.height = opt.height || 0;
    // 自定义文本的宽度
    this.customTextWidth = opt.data.data.customTextWidth || undefined;
    // left
    this._left = opt.left || 0;
    // top
    this._top = opt.top || 0;
    // 自定义位置
    this.customLeft = opt.data.data.customLeft || undefined;
    this.customTop = opt.data.data.customTop || undefined;
    // 是否正在拖拽中
    this.isDrag = false;
    // 父节点
    this.parent = opt.parent || null;
    // 子节点
    this.children = opt.children || [];
    // 当前同时操作该节点的用户列表
    this.userList = [];
    // 节点内容的容器
    this.group = null;
    this.shapeNode = null; // 节点形状节点
    this.hoverNode = null; // 节点hover和激活的节点
    // 节点内容对象
    this._customNodeContent = null;
    this._imgData = null;
    this._iconData = null;
    this._textData = null;
    this._hyperlinkData = null;
    this._tagData = null;
    this._noteData = null;
    this.noteEl = null;
    this.noteContentIsShow = false;
    this._attachmentData = null;
    this._prefixData = null;
    this._postfixData = null;
    this._expandBtn = null;
    this._lastExpandBtnType = null;
    this._showExpandBtn = false;
    this._openExpandNode = null;
    this._closeExpandNode = null;
    this._fillExpandNode = null;
    this._userListGroup = null;
    this._lines = [];
    this._generalizationList = [];
    this._unVisibleRectRegionNode = null;
    this._isMouseenter = false;
    // 尺寸信息
    this._rectInfo = {
      imgContentWidth: 0,
      imgContentHeight: 0,
      textContentWidth: 0,
      textContentHeight: 0
    };
    // 概要节点的宽高
    this._generalizationNodeWidth = 0;
    this._generalizationNodeHeight = 0;
    // 各种文字信息的间距
    this.textContentItemMargin = this.mindMap.opt.textContentMargin;
    // 图片和文字节点的间距
    this.blockContentMargin = this.mindMap.opt.imgTextMargin;
    // 展开收缩按钮尺寸
    this.expandBtnSize = this.mindMap.opt.expandBtnSize;
    // 是否是多选节点
    this.isMultipleChoice = false;
    // 是否需要重新layout
    this.needLayout = false;
    // 当前是否是隐藏状态
    this.isHide = false;
    var proto = Object.getPrototypeOf(this);
    if (!proto.bindEvent) {
      // 概要相关方法
      Object.keys(nodeGeneralizationMethods).forEach(function (item) {
        proto[item] = nodeGeneralizationMethods[item];
      });
      // 展开收起按钮相关方法
      Object.keys(nodeExpandBtnMethods).forEach(function (item) {
        proto[item] = nodeExpandBtnMethods[item];
      });
      // 展开收起按钮占位元素相关方法
      Object.keys(nodeExpandBtnPlaceholderRectMethods).forEach(function (item) {
        proto[item] = nodeExpandBtnPlaceholderRectMethods[item];
      });
      // 命令的相关方法
      Object.keys(nodeCommandWrapsMethods).forEach(function (item) {
        proto[item] = nodeCommandWrapsMethods[item];
      });
      // 创建节点内容的相关方法
      Object.keys(nodeCreateContentsMethods).forEach(function (item) {
        proto[item] = nodeCreateContentsMethods[item];
      });
      // 协同相关
      if (this.mindMap.cooperate) {
        Object.keys(nodeCooperateMethods).forEach(function (item) {
          proto[item] = nodeCooperateMethods[item];
        });
      }
      // 拖拽调整节点宽度
      Object.keys(nodeModifyWidthMethods).forEach(function (item) {
        proto[item] = nodeModifyWidthMethods[item];
      });
      proto.bindEvent = true;
    }
    // 初始化
    this.getSize();
    this.initDragHandle();
  }

  // 支持自定义位置
  return _createClass(MindMapNode, [{
    key: "left",
    get: function get() {
      return this.customLeft || this._left;
    },
    set: function set(val) {
      this._left = val;
    }
  }, {
    key: "top",
    get: function get() {
      return this.customTop || this._top;
    },
    set: function set(val) {
      this._top = val;
    }

    //  复位部分布局时会重新设置的数据
  }, {
    key: "reset",
    value: function reset() {
      this.children = [];
      this.parent = null;
      this.isRoot = false;
      this.layerIndex = 0;
      this.left = 0;
      this.top = 0;
    }

    // 节点被删除时需要复位的数据
  }, {
    key: "resetWhenDelete",
    value: function resetWhenDelete() {
      this._isMouseenter = false;
    }

    //  处理数据
  }, {
    key: "handleData",
    value: function handleData(data) {
      data.data.expand = data.data.expand === false ? false : true;
      data.data.isActive = data.data.isActive === true ? true : false;
      data.children = data.children || [];
      return data;
    }

    //  创建节点的各个内容对象数据
    // recreateTypes：[] custom、image、icon、text、hyperlink、tag、note、attachment、numbers、prefix、postfix、checkbox
  }, {
    key: "createNodeData",
    value: function createNodeData(recreateTypes) {
      var _this = this;
      // 自定义节点内容
      var _this$mindMap$opt = this.mindMap.opt,
        isUseCustomNodeContent = _this$mindMap$opt.isUseCustomNodeContent,
        customCreateNodeContent = _this$mindMap$opt.customCreateNodeContent,
        createNodePrefixContent = _this$mindMap$opt.createNodePrefixContent,
        createNodePostfixContent = _this$mindMap$opt.createNodePostfixContent;
      // 需要创建的内容类型
      var typeList = ['custom', 'image', 'icon', 'text', 'hyperlink', 'tag', 'note', 'attachment', 'prefix', 'postfix'].concat(_toConsumableArray(this.mindMap.nodeInnerPrefixList.map(function (item) {
        return item.name;
      })));
      var createTypes = {};
      if (Array.isArray(recreateTypes)) {
        // 重新创建指定的内容类型
        typeList.forEach(function (item) {
          if (recreateTypes.includes(item)) {
            createTypes[item] = true;
          }
        });
      } else {
        // 创建所有类型
        typeList.forEach(function (item) {
          createTypes[item] = true;
        });
      }
      if (isUseCustomNodeContent && customCreateNodeContent && createTypes.custom) {
        this._customNodeContent = customCreateNodeContent(this);
      }
      // 如果没有返回内容，那么还是使用内置的节点内容
      if (this._customNodeContent) {
        addXmlns(this._customNodeContent);
        return;
      }
      if (createTypes.image) this._imgData = this.createImgNode();
      if (createTypes.icon) this._iconData = this.createIconNode();
      if (createTypes.text) this._textData = this.createTextNode();
      if (createTypes.hyperlink) this._hyperlinkData = this.createHyperlinkNode();
      if (createTypes.tag) this._tagData = this.createTagNode();
      if (createTypes.note) this._noteData = this.createNoteNode();
      if (createTypes.attachment) this._attachmentData = this.createAttachmentNode();
      this.mindMap.nodeInnerPrefixList.forEach(function (item) {
        if (createTypes[item.name]) {
          _this["_".concat(item.name, "Data")] = item.createContent(_this);
        }
      });
      if (createTypes.prefix) {
        this._prefixData = createNodePrefixContent ? createNodePrefixContent(this) : null;
        if (this._prefixData && this._prefixData.el) {
          addXmlns(this._prefixData.el);
        }
      }
      if (createTypes.postfix) {
        this._postfixData = createNodePostfixContent ? createNodePostfixContent(this) : null;
        if (this._postfixData && this._postfixData.el) {
          addXmlns(this._postfixData.el);
        }
      }
    }

    //  计算节点的宽高
  }, {
    key: "getSize",
    value: function getSize(recreateTypes) {
      var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ignoreUpdateCustomTextWidth = opt.ignoreUpdateCustomTextWidth || false;
      if (!ignoreUpdateCustomTextWidth) {
        this.customTextWidth = this.getData('customTextWidth') || undefined;
      }
      this.customLeft = this.getData('customLeft') || undefined;
      this.customTop = this.getData('customTop') || undefined;
      // 这里不要更新概要，不然即使概要没修改，每次也会重新渲染
      // this.updateGeneralization()
      this.createNodeData(recreateTypes);
      var _this$getNodeRect = this.getNodeRect(),
        width = _this$getNodeRect.width,
        height = _this$getNodeRect.height;
      // 判断节点尺寸是否有变化
      var changed = this.width !== width || this.height !== height;
      this.width = width;
      this.height = height;
      return changed;
    }

    //  计算节点尺寸信息
  }, {
    key: "getNodeRect",
    value: function getNodeRect() {
      var _this2 = this;
      // 自定义节点内容
      if (this.isUseCustomNodeContent()) {
        var rect = this.measureCustomNodeContentSize(this._customNodeContent);
        return {
          width: this.hasCustomWidth() ? this.customTextWidth : rect.width,
          height: rect.height
        };
      }
      var tagPosition = this.mindMap.opt.tagPosition;
      var tagIsBottom = tagPosition === CONSTANTS.TAG_POSITION.BOTTOM;
      // 宽高
      var imgContentWidth = 0;
      var imgContentHeight = 0;
      var textContentWidth = 0;
      var textContentHeight = 0;
      var tagContentWidth = 0;
      var tagContentHeight = 0;
      // 存在图片
      if (this._imgData) {
        this._rectInfo.imgContentWidth = imgContentWidth = this._imgData.width;
        this._rectInfo.imgContentHeight = imgContentHeight = this._imgData.height;
      }
      // 库前置内容
      this.mindMap.nodeInnerPrefixList.forEach(function (item) {
        var itemData = _this2["_".concat(item.name, "Data")];
        if (itemData) {
          textContentWidth += itemData.width;
          textContentHeight = Math.max(textContentHeight, itemData.height);
        }
      });
      // 自定义前置内容
      if (this._prefixData) {
        textContentWidth += this._prefixData.width;
        textContentHeight = Math.max(textContentHeight, this._prefixData.height);
      }
      // 图标
      if (this._iconData.length > 0) {
        textContentWidth += this._iconData.reduce(function (sum, cur) {
          textContentHeight = Math.max(textContentHeight, cur.height);
          return sum += cur.width + _this2.textContentItemMargin;
        }, 0);
      }
      // 文字
      if (this._textData) {
        textContentWidth += this._textData.width;
        textContentHeight = Math.max(textContentHeight, this._textData.height);
      }
      // 超链接
      if (this._hyperlinkData) {
        textContentWidth += this._hyperlinkData.width;
        textContentHeight = Math.max(textContentHeight, this._hyperlinkData.height);
      }
      // 标签
      if (this._tagData.length > 0) {
        var maxTagHeight = 0;
        var totalTagWidth = this._tagData.reduce(function (sum, cur) {
          maxTagHeight = Math.max(maxTagHeight, cur.height);
          return sum += cur.width + _this2.textContentItemMargin;
        }, 0);
        if (tagIsBottom) {
          // 文字下方
          tagContentWidth = totalTagWidth;
          tagContentHeight = maxTagHeight;
        } else {
          // 否则在右侧
          textContentWidth += totalTagWidth;
          textContentHeight = Math.max(textContentHeight, maxTagHeight);
        }
      }
      // 备注
      if (this._noteData) {
        textContentWidth += this._noteData.width;
        textContentHeight = Math.max(textContentHeight, this._noteData.height);
      }
      // 附件
      if (this._attachmentData) {
        textContentWidth += this._attachmentData.width;
        textContentHeight = Math.max(textContentHeight, this._attachmentData.height);
      }
      // 自定义后置内容
      if (this._postfixData) {
        textContentWidth += this._postfixData.width;
        textContentHeight = Math.max(textContentHeight, this._postfixData.height);
      }
      // 文字内容部分的尺寸
      this._rectInfo.textContentWidth = textContentWidth;
      this._rectInfo.textContentHeight = textContentHeight;
      // 间距
      var margin = imgContentHeight > 0 && textContentHeight > 0 ? this.blockContentMargin : 0;
      var _this$getPaddingVale = this.getPaddingVale(),
        paddingX = _this$getPaddingVale.paddingX,
        paddingY = _this$getPaddingVale.paddingY;
      // 纯内容宽高
      var _width = Math.max(imgContentWidth, textContentWidth);
      var _height = imgContentHeight + textContentHeight;
      // 如果标签在文字下方
      if (tagIsBottom && tagContentHeight > 0 && textContentHeight > 0) {
        // 那么文字和标签之间也需要间距
        margin += this.blockContentMargin;
        // 整体高度要考虑标签宽度
        _width = Math.max(_width, tagContentWidth);
        // 整体高度要加上标签的高度
        _height += tagContentHeight;
      }
      // 计算节点形状需要的附加内边距
      var _this$shapeInstance$g = this.shapeInstance.getShapePadding(_width, _height, paddingX, paddingY),
        shapePaddingX = _this$shapeInstance$g.paddingX,
        shapePaddingY = _this$shapeInstance$g.paddingY;
      this.shapePadding.paddingX = shapePaddingX;
      this.shapePadding.paddingY = shapePaddingY;
      // 边框宽度，因为边框是以中线向两端发散，所以边框会超出节点
      var borderWidth = this.getBorderWidth();
      return {
        width: _width + paddingX * 2 + shapePaddingX * 2 + borderWidth,
        height: _height + paddingY * 2 + margin + shapePaddingY * 2 + borderWidth
      };
    }

    //  定位节点内容
  }, {
    key: "layout",
    value: function layout() {
      var _this3 = this;
      if (!this.group) return;
      // 清除之前的内容
      this.group.clear();
      var _this$mindMap$opt2 = this.mindMap.opt,
        hoverRectPadding = _this$mindMap$opt2.hoverRectPadding,
        tagPosition = _this$mindMap$opt2.tagPosition,
        openRealtimeRenderOnNodeTextEdit = _this$mindMap$opt2.openRealtimeRenderOnNodeTextEdit;
      var width = this.width,
        height = this.height,
        textContentItemMargin = this.textContentItemMargin;
      var _this$getPaddingVale2 = this.getPaddingVale(),
        paddingY = _this$getPaddingVale2.paddingY;
      var halfBorderWidth = this.getBorderWidth() / 2;
      paddingY += this.shapePadding.paddingY + halfBorderWidth;
      // 节点形状
      this.shapeNode = this.shapeInstance.createShape();
      this.shapeNode.addClass('smm-node-shape');
      this.shapeNode.translate(halfBorderWidth, halfBorderWidth);
      this.style.shape(this.shapeNode);
      this.group.add(this.shapeNode);
      // 渲染一个隐藏的矩形区域，用来触发展开收起按钮的显示
      this.renderExpandBtnPlaceholderRect();
      // 创建协同头像节点
      if (this.createUserListNode) this.createUserListNode();
      // 概要节点添加一个带所属节点id的类名
      if (this.isGeneralization && this.generalizationBelongNode) {
        this.group.addClass('generalization_' + this.generalizationBelongNode.uid);
      }
      // 激活hover和激活边框
      var addHoverNode = function addHoverNode() {
        _this3.hoverNode = new Rect().size(width + hoverRectPadding * 2, height + hoverRectPadding * 2).x(-hoverRectPadding).y(-hoverRectPadding);
        _this3.hoverNode.addClass('smm-hover-node');
        _this3.style.hoverNode(_this3.hoverNode, width, height);
        _this3.group.add(_this3.hoverNode);
      };
      // 如果存在自定义节点内容，那么使用自定义节点内容
      if (this.isUseCustomNodeContent()) {
        var foreignObject = createForeignObjectNode({
          el: this._customNodeContent,
          width: width,
          height: height
        });
        this.group.add(foreignObject);
        addHoverNode();
        return;
      }
      var tagIsBottom = tagPosition === CONSTANTS.TAG_POSITION.BOTTOM;
      var textContentHeight = this._rectInfo.textContentHeight;
      // 图片节点
      var imgHeight = 0;
      if (this._imgData) {
        imgHeight = this._imgData.height;
        this.group.add(this._imgData.node);
        this._imgData.node.cx(width / 2).y(paddingY);
      }
      // 内容节点
      var textContentNested = new G();
      var textContentOffsetX = 0;
      // 库前置内容
      this.mindMap.nodeInnerPrefixList.forEach(function (item) {
        var itemData = _this3["_".concat(item.name, "Data")];
        if (itemData) {
          itemData.node.x(textContentOffsetX).y((textContentHeight - itemData.height) / 2);
          textContentNested.add(itemData.node);
          textContentOffsetX += itemData.width + textContentItemMargin;
        }
      });
      // 自定义前置内容
      if (this._prefixData) {
        var _foreignObject = createForeignObjectNode({
          el: this._prefixData.el,
          width: this._prefixData.width,
          height: this._prefixData.height
        });
        _foreignObject.x(textContentOffsetX).y((textContentHeight - this._prefixData.height) / 2);
        textContentNested.add(_foreignObject);
        textContentOffsetX += this._prefixData.width + textContentItemMargin;
      }
      // icon
      var iconNested = new G();
      if (this._iconData && this._iconData.length > 0) {
        var iconLeft = 0;
        this._iconData.forEach(function (item) {
          item.node.x(textContentOffsetX + iconLeft).y((textContentHeight - item.height) / 2);
          iconNested.add(item.node);
          iconLeft += item.width + textContentItemMargin;
        });
        textContentNested.add(iconNested);
        textContentOffsetX += iconLeft;
      }
      // 文字
      if (this._textData) {
        var oldX = this._textData.node.attr('data-offsetx') || 0;
        this._textData.node.attr('data-offsetx', textContentOffsetX)
        // 修复safari浏览器节点存在图标时文字位置不正确的问题
        ;
        (this._textData.nodeContent || this._textData.node).x(-oldX) // 修复非富文本模式下同时存在图标和换行的文本时，被收起和展开时图标与文字距离会逐渐拉大的问题
        .x(textContentOffsetX).y((textContentHeight - this._textData.height) / 2);
        // 如果开启了文本编辑实时渲染，需要判断当前渲染的节点是否是正在编辑的节点，是的话将透明度设置为0不显示
        if (openRealtimeRenderOnNodeTextEdit) {
          this._textData.node.opacity(this.mindMap.renderer.textEdit.getCurrentEditNode() === this ? 0 : 1);
        }
        textContentNested.add(this._textData.node);
        textContentOffsetX += this._textData.width + textContentItemMargin;
      }
      // 超链接
      if (this._hyperlinkData) {
        this._hyperlinkData.node.x(textContentOffsetX).y((textContentHeight - this._hyperlinkData.height) / 2);
        textContentNested.add(this._hyperlinkData.node);
        textContentOffsetX += this._hyperlinkData.width + textContentItemMargin;
      }
      // 标签
      var tagNested = new G();
      if (this._tagData && this._tagData.length > 0) {
        if (tagIsBottom) {
          // 标签显示在文字下方
          var tagLeft = 0;
          this._tagData.forEach(function (item) {
            item.node.x(tagLeft).y(0);
            tagNested.add(item.node);
            tagLeft += item.width + textContentItemMargin;
          });
          tagNested.cx(width / 2).y(paddingY +
          // 内边距
          imgHeight +
          // 图片高度
          textContentHeight + (
          // 文本区域高度
          imgHeight > 0 && textContentHeight > 0 ? this.blockContentMargin : 0) +
          // 图片和文本之间的间距
          this.blockContentMargin // 标签和文本之间的间距
          );
          this.group.add(tagNested);
        } else {
          // 标签显示在文字右侧
          var _tagLeft = 0;
          this._tagData.forEach(function (item) {
            item.node.x(textContentOffsetX + _tagLeft).y((textContentHeight - item.height) / 2);
            tagNested.add(item.node);
            _tagLeft += item.width + textContentItemMargin;
          });
          textContentNested.add(tagNested);
          textContentOffsetX += _tagLeft;
        }
      }
      // 备注
      if (this._noteData) {
        this._noteData.node.x(textContentOffsetX).y((textContentHeight - this._noteData.height) / 2);
        textContentNested.add(this._noteData.node);
        textContentOffsetX += this._noteData.width;
      }
      // 附件
      if (this._attachmentData) {
        this._attachmentData.node.x(textContentOffsetX).y((textContentHeight - this._attachmentData.height) / 2);
        textContentNested.add(this._attachmentData.node);
        textContentOffsetX += this._attachmentData.width;
      }
      // 自定义后置内容
      if (this._postfixData) {
        var _foreignObject2 = createForeignObjectNode({
          el: this._postfixData.el,
          width: this._postfixData.width,
          height: this._postfixData.height
        });
        _foreignObject2.x(textContentOffsetX).y((textContentHeight - this._postfixData.height) / 2);
        textContentNested.add(_foreignObject2);
        textContentOffsetX += this._postfixData.width;
      }
      this.group.add(textContentNested);
      // 文字内容整体
      textContentNested.translate(width / 2 - textContentNested.bbox().width / 2, paddingY +
      // 内边距
      imgHeight + (
      // 图片高度
      imgHeight > 0 && textContentHeight > 0 ? this.blockContentMargin : 0) // 和图片的间距
      );
      addHoverNode();
      this.mindMap.emit('node_layout_end', this);
    }

    // 给节点绑定事件
  }, {
    key: "bindGroupEvent",
    value: function bindGroupEvent() {
      var _this4 = this;
      // 单击事件，选中节点
      this.group.on('click', function (e) {
        _this4.mindMap.emit('node_click', _this4, e);
        if (_this4.isMultipleChoice) {
          e.stopPropagation();
          _this4.isMultipleChoice = false;
          return;
        }
        if (_this4.mindMap.opt.onlyOneEnableActiveNodeOnCooperate && _this4.userList.length > 0) {
          return;
        }
        _this4.active(e);
      });
      this.group.on('mousedown', function (e) {
        var _this4$mindMap$opt = _this4.mindMap.opt,
          readonly = _this4$mindMap$opt.readonly,
          enableCtrlKeyNodeSelection = _this4$mindMap$opt.enableCtrlKeyNodeSelection,
          useLeftKeySelectionRightKeyDrag = _this4$mindMap$opt.useLeftKeySelectionRightKeyDrag,
          mousedownEventPreventDefault = _this4$mindMap$opt.mousedownEventPreventDefault;
        if (mousedownEventPreventDefault) {
          e.preventDefault();
        }
        // 只读模式不需要阻止冒泡
        if (!readonly) {
          if (_this4.isRoot) {
            // 根节点，右键拖拽画布模式下不需要阻止冒泡
            if (e.which === 3 && !useLeftKeySelectionRightKeyDrag) {
              e.stopPropagation();
            }
          } else {
            // 非根节点，且按下的是非鼠标中键，需要阻止事件冒泡
            if (e.which !== 2) {
              e.stopPropagation();
            }
          }
        }
        // 多选和取消多选
        if (!readonly && (e.ctrlKey || e.metaKey) && enableCtrlKeyNodeSelection) {
          _this4.isMultipleChoice = true;
          var isActive = _this4.getData('isActive');
          if (!isActive) _this4.mindMap.emit('before_node_active', _this4, _this4.renderer.activeNodeList);
          _this4.mindMap.renderer[isActive ? 'removeNodeFromActiveList' : 'addNodeToActiveList'](_this4, true);
          _this4.renderer.emitNodeActiveEvent(isActive ? null : _this4);
        }
        _this4.mindMap.emit('node_mousedown', _this4, e);
      });
      this.group.on('mouseup', function (e) {
        if (!_this4.isRoot && e.which !== 2 && !_this4.mindMap.opt.readonly) {
          e.stopPropagation();
        }
        _this4.mindMap.emit('node_mouseup', _this4, e);
      });
      this.group.on('mouseenter', function (e) {
        if (_this4.isDrag) return;
        _this4._isMouseenter = true;
        // 显示展开收起按钮
        _this4.showExpandBtn();
        if (_this4.isGeneralization) {
          _this4.handleGeneralizationMouseenter();
        }
        _this4.mindMap.emit('node_mouseenter', _this4, e);
      });
      this.group.on('mouseleave', function (e) {
        if (!_this4._isMouseenter) return;
        _this4._isMouseenter = false;
        _this4.hideExpandBtn();
        if (_this4.isGeneralization) {
          _this4.handleGeneralizationMouseleave();
        }
        _this4.mindMap.emit('node_mouseleave', _this4, e);
      });
      // 双击事件
      this.group.on('dblclick', function (e) {
        var _this4$mindMap$opt2 = _this4.mindMap.opt,
          readonly = _this4$mindMap$opt2.readonly,
          onlyOneEnableActiveNodeOnCooperate = _this4$mindMap$opt2.onlyOneEnableActiveNodeOnCooperate;
        if (readonly || e.ctrlKey || e.metaKey) {
          return;
        }
        e.stopPropagation();
        if (onlyOneEnableActiveNodeOnCooperate && _this4.userList.length > 0) {
          return;
        }
        _this4.mindMap.emit('node_dblclick', _this4, e);
      });
      // 右键菜单事件
      this.group.on('contextmenu', function (e) {
        var _this4$mindMap$opt3 = _this4.mindMap.opt,
          readonly = _this4$mindMap$opt3.readonly,
          useLeftKeySelectionRightKeyDrag = _this4$mindMap$opt3.useLeftKeySelectionRightKeyDrag;
        // Mac上按住ctrl键点击鼠标左键不知为何触发的是contextmenu事件
        if (readonly || e.ctrlKey) {
          return;
        }
        e.stopPropagation();
        e.preventDefault();
        // 如果是多选节点结束，那么不要触发右键菜单事件
        if (_this4.mindMap.select && !useLeftKeySelectionRightKeyDrag && _this4.mindMap.select.hasSelectRange()) {
          return;
        }
        // 如果有且只有当前节点激活了，那么不需要重新激活
        if (!(_this4.getData('isActive') && _this4.renderer.activeNodeList.length === 1)) {
          _this4.renderer.clearActiveNodeList();
          _this4.active(e);
        }
        _this4.mindMap.emit('node_contextmenu', e, _this4);
      });
    }

    //  激活节点
  }, {
    key: "active",
    value: function active(e) {
      if (this.mindMap.opt.readonly) {
        return;
      }
      e && e.stopPropagation();
      if (this.getData('isActive')) {
        return;
      }
      this.mindMap.emit('before_node_active', this, this.renderer.activeNodeList);
      this.renderer.clearActiveNodeList();
      this.renderer.addNodeToActiveList(this, true);
      this.renderer.emitNodeActiveEvent(this);
    }

    // 取消激活该节点
  }, {
    key: "deactivate",
    value: function deactivate() {
      this.mindMap.renderer.removeNodeFromActiveList(this);
      this.mindMap.renderer.emitNodeActiveEvent();
    }

    //  更新节点
  }, {
    key: "update",
    value: function update(forceRender) {
      if (!this.group) {
        return;
      }
      this.updateNodeActiveClass();
      var _this$mindMap$opt3 = this.mindMap.opt,
        alwaysShowExpandBtn = _this$mindMap$opt3.alwaysShowExpandBtn,
        notShowExpandBtn = _this$mindMap$opt3.notShowExpandBtn;
      // 不显示展开收起按钮则不需要处理
      if (!notShowExpandBtn) {
        var childrenLength = this.nodeData.children.length;
        if (alwaysShowExpandBtn) {
          // 需要移除展开收缩按钮
          if (this._expandBtn && childrenLength <= 0) {
            this.removeExpandBtn();
          } else {
            // 更新展开收起按钮
            this.renderExpandBtn();
          }
        } else {
          var _this$getData = this.getData(),
            isActive = _this$getData.isActive,
            expand = _this$getData.expand;
          // 展开状态且非激活状态，且当前鼠标不在它上面，才隐藏
          if (childrenLength <= 0) {
            this.removeExpandBtn();
          } else if (expand && !isActive && !this._isMouseenter) {
            this.hideExpandBtn();
          } else {
            this.showExpandBtn();
          }
        }
      }
      // 更新拖拽手柄的显示与否
      this.updateDragHandle();
      // 更新概要
      this.renderGeneralization(forceRender);
      // 更新协同头像
      if (this.updateUserListNode) this.updateUserListNode();
      // 更新节点位置
      var t = this.group.transform();
      // 保存一份当前节点数据快照
      this.nodeDataSnapshot = JSON.stringify(this.getData());
      // 节点位置变化才更新，因为即使值没有变化属性设置操作也是耗时的
      if (this.left !== t.translateX || this.top !== t.translateY) {
        this.group.translate(this.left - t.translateX, this.top - t.translateY);
      }
    }

    // 获取节点相当于画布的位置
  }, {
    key: "getNodePosInClient",
    value: function getNodePosInClient(_left, _top) {
      var drawTransform = this.mindMap.draw.transform();
      var scaleX = drawTransform.scaleX,
        scaleY = drawTransform.scaleY,
        translateX = drawTransform.translateX,
        translateY = drawTransform.translateY;
      var left = _left * scaleX + translateX;
      var top = _top * scaleY + translateY;
      return {
        left: left,
        top: top
      };
    }

    // 判断节点是否可见
  }, {
    key: "checkIsInClient",
    value: function checkIsInClient() {
      var padding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _this$getNodePosInCli = this.getNodePosInClient(this.left, this.top),
        nx = _this$getNodePosInCli.left,
        ny = _this$getNodePosInCli.top;
      return nx + this.width > 0 - padding && ny + this.height > 0 - padding && nx < this.mindMap.width + padding && ny < this.mindMap.height + padding;
    }

    // 重新渲染节点，即重新创建节点内容、计算节点大小、计算节点内容布局、更新展开收起按钮，概要及位置
  }, {
    key: "reRender",
    value: function reRender(recreateTypes, opt) {
      var sizeChange = this.getSize(recreateTypes, opt);
      this.layout();
      this.update();
      return sizeChange;
    }

    // 更新节点激活状态
  }, {
    key: "updateNodeActiveClass",
    value: function updateNodeActiveClass() {
      if (!this.group) return;
      var isActive = this.getData('isActive');
      this.group[isActive ? 'addClass' : 'removeClass']('active');
    }

    // 根据是否激活更新节点
  }, {
    key: "updateNodeByActive",
    value: function updateNodeByActive(active) {
      if (this.group) {
        // 切换激活状态，需要切换展开收起按钮的显隐
        if (active) {
          this.showExpandBtn();
        } else {
          this.hideExpandBtn();
        }
        this.updateNodeActiveClass();
        this.updateDragHandle();
      }
    }

    // 递归渲染
    // forceRender：强制渲染，无论是否处于画布可视区域
    // async：异步渲染
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      var forceRender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var async = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // 节点
      // 重新渲染连线
      this.renderLine();
      var _this$mindMap$opt4 = this.mindMap.opt,
        openPerformance = _this$mindMap$opt4.openPerformance,
        performanceConfig = _this$mindMap$opt4.performanceConfig;
      // 强制渲染、或没有开启性能模式、或不在画布可视区域内不渲染节点内容
      // 根节点不进行懒加载，始终渲染，因为滚动条插件依赖根节点进行计算
      if (forceRender || !openPerformance || this.checkIsInClient(performanceConfig.padding) || this.isRoot) {
        if (!this.group) {
          // 创建组
          this.group = new G();
          this.group.addClass('smm-node');
          this.group.css({
            cursor: 'default'
          });
          this.bindGroupEvent();
          this.nodeDraw.add(this.group);
          this.layout();
          this.update(forceRender);
        } else {
          if (!this.nodeDraw.has(this.group)) {
            this.nodeDraw.add(this.group);
          }
          if (this.needLayout) {
            this.needLayout = false;
            this.layout();
          }
          this.updateExpandBtnPlaceholderRect();
          this.update(forceRender);
        }
      } else if (openPerformance && performanceConfig.removeNodeWhenOutCanvas) {
        this.removeSelf();
      }
      // 子节点
      if (this.children && this.children.length && this.getData('expand') !== false) {
        var index = 0;
        this.children.forEach(function (item) {
          var renderChild = function renderChild() {
            item.render(function () {
              index++;
              if (index >= _this5.children.length) {
                callback();
              }
            }, forceRender, async);
          };
          if (async) {
            setTimeout(renderChild, 0);
          } else {
            renderChild();
          }
        });
      } else {
        callback();
      }
      // 手动插入的节点立即获得焦点并且开启编辑模式
      if (this.nodeData.inserting) {
        delete this.nodeData.inserting;
        this.active();
        // setTimeout(() => {
        this.mindMap.emit('node_dblclick', this, null, true);
        // }, 0)
      }
    }

    // 删除自身，只是从画布删除，节点容器还在，后续还可以重新插回画布
  }, {
    key: "removeSelf",
    value: function removeSelf() {
      if (!this.group) return;
      this.group.remove();
      this.removeGeneralization();
    }

    //  递归删除，只是从画布删除，节点容器还在，后续还可以重新插回画布
  }, {
    key: "remove",
    value: function remove() {
      if (!this.group) return;
      this.group.remove();
      this.removeGeneralization();
      this.removeLine();
      // 子节点
      if (this.children && this.children.length) {
        this.children.forEach(function (item) {
          item.remove();
        });
      }
    }

    // 销毁节点，不但会从画布删除，而且原节点直接置空，后续无法再插回画布
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeLine();
      if (this.parent) {
        this.parent.removeLine();
      }
      if (!this.group) return;
      if (this.emptyUser) {
        this.emptyUser();
      }
      this.resetWhenDelete();
      this.group.remove();
      this.removeGeneralization();
      this.group = null;
      this.style.onRemove();
    }

    //  隐藏节点
  }, {
    key: "hide",
    value: function hide() {
      if (this.group) this.group.hide();
      this.hideGeneralization();
      if (this.parent) {
        var index = this.parent.children.indexOf(this);
        this.parent._lines[index] && this.parent._lines[index].hide();
        this._lines.forEach(function (item) {
          item.hide();
        });
      }
      // 子节点
      if (this.children && this.children.length) {
        this.children.forEach(function (item) {
          item.hide();
        });
      }
    }

    //  显示节点
  }, {
    key: "show",
    value: function show() {
      if (!this.group) {
        return;
      }
      this.group.show();
      this.showGeneralization();
      if (this.parent) {
        var index = this.parent.children.indexOf(this);
        this.parent._lines[index] && this.parent._lines[index].show();
        this._lines.forEach(function (item) {
          item.show();
        });
      }
      // 子节点
      if (this.children && this.children.length) {
        this.children.forEach(function (item) {
          item.show();
        });
      }
    }

    // 设置节点透明度
    // 包括连接线和下级节点
  }, {
    key: "setOpacity",
    value: function setOpacity(val) {
      // 自身及连线
      if (this.group) this.group.opacity(val);
      this._lines.forEach(function (line) {
        line.opacity(val);
      });
      // 子节点
      this.children.forEach(function (item) {
        item.setOpacity(val);
      });
      // 概要节点
      this.setGeneralizationOpacity(val);
    }

    // 隐藏子节点
  }, {
    key: "hideChildren",
    value: function hideChildren() {
      this._lines.forEach(function (item) {
        item.hide();
      });
      if (this.children && this.children.length) {
        this.children.forEach(function (item) {
          item.hide();
        });
      }
    }

    // 显示子节点
  }, {
    key: "showChildren",
    value: function showChildren() {
      this._lines.forEach(function (item) {
        item.show();
      });
      if (this.children && this.children.length) {
        this.children.forEach(function (item) {
          item.show();
        });
      }
    }

    // 被拖拽中
  }, {
    key: "startDrag",
    value: function startDrag() {
      this.isDrag = true;
      if (this.group) this.group.addClass('smm-node-dragging');
    }

    // 拖拽结束
  }, {
    key: "endDrag",
    value: function endDrag() {
      this.isDrag = false;
      if (this.group) this.group.removeClass('smm-node-dragging');
    }

    //  连线
  }, {
    key: "renderLine",
    value: function renderLine() {
      var _this6 = this;
      var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.getData('expand') === false) {
        return;
      }
      var childrenLen = this.nodeData.children.length;
      // 切换为鱼骨结构时，清空根节点和二级节点的连线
      if (this.mindMap.opt.layout === CONSTANTS.LAYOUT.FISHBONE && (this.isRoot || this.layerIndex === 1)) {
        childrenLen = 0;
      }
      if (childrenLen > this._lines.length) {
        // 创建缺少的线
        new Array(childrenLen - this._lines.length).fill(0).forEach(function () {
          _this6._lines.push(_this6.lineDraw.path());
        });
      } else if (childrenLen < this._lines.length) {
        // 删除多余的线
        this._lines.slice(childrenLen).forEach(function (line) {
          line.remove();
        });
        this._lines = this._lines.slice(0, childrenLen);
      }
      // 画线
      this.renderer.layout.renderLine(this, this._lines, function () {
        // 添加样式
        _this6.styleLine.apply(_this6, arguments);
      }, this.style.getStyle('lineStyle', true));
      // 子级的连线也需要更新
      if (deep && this.children && this.children.length > 0) {
        this.children.forEach(function (item) {
          item.renderLine(deep);
        });
      }
    }

    //  获取节点形状
  }, {
    key: "getShape",
    value: function getShape() {
      // 节点使用功能横线风格的话不支持设置形状，直接使用默认的矩形
      return this.mindMap.themeConfig.nodeUseLineStyle ? CONSTANTS.SHAPE.RECTANGLE : this.style.getStyle('shape', false, false);
    }

    //  检查节点是否存在自定义数据
  }, {
    key: "hasCustomPosition",
    value: function hasCustomPosition() {
      return this.customLeft !== undefined && this.customTop !== undefined;
    }

    //  检查节点是否存在自定义位置的祖先节点，包含自身
  }, {
    key: "ancestorHasCustomPosition",
    value: function ancestorHasCustomPosition() {
      var node = this;
      while (node) {
        if (node.hasCustomPosition()) {
          return true;
        }
        node = node.parent;
      }
      return false;
    }

    //  检查是否存在有概要的祖先节点
  }, {
    key: "ancestorHasGeneralization",
    value: function ancestorHasGeneralization() {
      var node = this.parent;
      while (node) {
        if (node.checkHasGeneralization()) {
          return true;
        }
        node = node.parent;
      }
      return false;
    }

    //  添加子节点
  }, {
    key: "addChildren",
    value: function addChildren(node) {
      this.children.push(node);
    }

    //  设置连线样式
  }, {
    key: "styleLine",
    value: function styleLine(line, childNode, enableMarker) {
      var width = childNode.getSelfInhertStyle('lineWidth') || childNode.getStyle('lineWidth', true);
      var color = childNode.getSelfInhertStyle('lineColor') || this.getRainbowLineColor(childNode) || childNode.getStyle('lineColor', true);
      var dasharray = childNode.getSelfInhertStyle('lineDasharray') || childNode.getStyle('lineDasharray', true);
      this.style.line(line, {
        width: width,
        color: color,
        dasharray: dasharray
      }, enableMarker, childNode);
    }

    // 获取彩虹线条颜色
  }, {
    key: "getRainbowLineColor",
    value: function getRainbowLineColor(node) {
      return this.mindMap.rainbowLines ? this.mindMap.rainbowLines.getNodeColor(node) : '';
    }

    //  移除连线
  }, {
    key: "removeLine",
    value: function removeLine() {
      this._lines.forEach(function (line) {
        line.remove();
      });
      this._lines = [];
    }

    //  检测当前节点是否是某个节点的祖先节点
  }, {
    key: "isAncestor",
    value: function isAncestor(node) {
      if (this.uid === node.uid) {
        return false;
      }
      var parent = node.parent;
      while (parent) {
        if (this.uid === parent.uid) {
          return true;
        }
        parent = parent.parent;
      }
      return false;
    }

    // 检查当前节点是否是某个节点的父节点
  }, {
    key: "isParent",
    value: function isParent(node) {
      if (this.uid === node.uid) {
        return false;
      }
      var parent = node.parent;
      if (parent && this.uid === parent.uid) {
        return true;
      }
      return false;
    }

    //  检测当前节点是否是某个节点的兄弟节点
  }, {
    key: "isBrother",
    value: function isBrother(node) {
      if (!this.parent || this.uid === node.uid) {
        return false;
      }
      return this.parent.children.find(function (item) {
        return item.uid === node.uid;
      });
    }

    // 获取该节点在兄弟节点列表中的索引
  }, {
    key: "getIndexInBrothers",
    value: function getIndexInBrothers() {
      var _this7 = this;
      return this.parent && this.parent.children ? this.parent.children.findIndex(function (item) {
        return item.uid === _this7.uid;
      }) : -1;
    }

    //  获取padding值
  }, {
    key: "getPaddingVale",
    value: function getPaddingVale() {
      return {
        paddingX: this.getStyle('paddingX'),
        paddingY: this.getStyle('paddingY')
      };
    }

    //  获取某个样式
  }, {
    key: "getStyle",
    value: function getStyle(prop, root) {
      var v = this.style.merge(prop, root);
      return v === undefined ? '' : v;
    }

    //  获取自定义样式
  }, {
    key: "getSelfStyle",
    value: function getSelfStyle(prop) {
      return this.style.getSelfStyle(prop);
    }

    //   获取最近一个存在自身自定义样式的祖先节点的自定义样式
  }, {
    key: "getParentSelfStyle",
    value: function getParentSelfStyle(prop) {
      if (this.parent) {
        return this.parent.getSelfStyle(prop) || this.parent.getParentSelfStyle(prop);
      }
      return null;
    }

    //  获取自身可继承的自定义样式
  }, {
    key: "getSelfInhertStyle",
    value: function getSelfInhertStyle(prop) {
      return this.getSelfStyle(prop) ||
      // 自身
      this.getParentSelfStyle(prop); // 父级
    }

    // 获取节点非节点状态的边框大小
  }, {
    key: "getBorderWidth",
    value: function getBorderWidth() {
      return this.style.merge('borderWidth', false) || 0;
    }

    //  获取数据
  }, {
    key: "getData",
    value: function getData(key) {
      return key ? this.nodeData.data[key] : this.nodeData.data;
    }

    // 获取该节点的纯数据，即不包含对节点实例的引用
  }, {
    key: "getPureData",
    value: function getPureData() {
      var removeActiveState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var removeId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return _copyNodeTree({}, this, removeActiveState, removeId);
    }

    // 获取祖先节点列表
  }, {
    key: "getAncestorNodes",
    value: function getAncestorNodes() {
      var list = [];
      var parent = this.parent;
      while (parent) {
        list.unshift(parent);
        parent = parent.parent;
      }
      return list;
    }

    // 是否存在自定义样式
  }, {
    key: "hasCustomStyle",
    value: function hasCustomStyle() {
      return this.style.hasCustomStyle();
    }

    // 获取节点的尺寸和位置信息，宽高是应用了缩放效果后的实际宽高，位置是相对于浏览器窗口左上角的位置
  }, {
    key: "getRect",
    value: function getRect() {
      return this.group ? this.group.rbox() : null;
    }

    // 获取节点的尺寸和位置信息，宽高是应用了缩放效果后的实际宽高，位置信息相对于画布
  }, {
    key: "getRectInSvg",
    value: function getRectInSvg() {
      var _this$mindMap$draw$tr = this.mindMap.draw.transform(),
        scaleX = _this$mindMap$draw$tr.scaleX,
        scaleY = _this$mindMap$draw$tr.scaleY,
        translateX = _this$mindMap$draw$tr.translateX,
        translateY = _this$mindMap$draw$tr.translateY;
      var left = this.left,
        top = this.top,
        width = this.width,
        height = this.height;
      var right = (left + width) * scaleX + translateX;
      var bottom = (top + height) * scaleY + translateY;
      left = left * scaleX + translateX;
      top = top * scaleY + translateY;
      return {
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        width: width * scaleX,
        height: height * scaleY
      };
    }

    // 高亮节点
  }, {
    key: "highlight",
    value: function highlight() {
      if (this.group) this.group.addClass('smm-node-highlight');
    }

    // 取消高亮节点
  }, {
    key: "closeHighlight",
    value: function closeHighlight() {
      if (this.group) this.group.removeClass('smm-node-highlight');
    }

    // 伪克隆节点
    // 克隆出的节点并不能真正当做一个节点使用
  }, {
    key: "fakeClone",
    value: function fakeClone() {
      var _this8 = this;
      var newNode = new MindMapNode(_objectSpread2(_objectSpread2({}, this.opt), {}, {
        uid: createUid()
      }));
      Object.keys(this).forEach(function (item) {
        newNode[item] = _this8[item];
      });
      return newNode;
    }

    // 创建SVG文本节点
  }, {
    key: "createSvgTextNode",
    value: function createSvgTextNode() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return new Text().text(text);
    }

    // 获取SVG.js库的一些对象
  }, {
    key: "getSvgObjects",
    value: function getSvgObjects() {
      return {
        SVG: SVG,
        G: G,
        Rect: Rect
      };
    }

    // 检查是否支持拖拽调整宽度
    // 1.富文本模式
    // 2.自定义节点内容
  }, {
    key: "checkEnableDragModifyNodeWidth",
    value: function checkEnableDragModifyNodeWidth() {
      var _this$mindMap$opt5 = this.mindMap.opt,
        enableDragModifyNodeWidth = _this$mindMap$opt5.enableDragModifyNodeWidth,
        isUseCustomNodeContent = _this$mindMap$opt5.isUseCustomNodeContent,
        customCreateNodeContent = _this$mindMap$opt5.customCreateNodeContent;
      return enableDragModifyNodeWidth && (this.mindMap.richText || isUseCustomNodeContent && customCreateNodeContent);
    }

    // 是否存在自定义宽度
  }, {
    key: "hasCustomWidth",
    value: function hasCustomWidth() {
      return this.checkEnableDragModifyNodeWidth() && this.customTextWidth !== undefined;
    }
  }]);
}();

// LRU缓存类
var Lru = /*#__PURE__*/function () {
  function Lru(max) {
    _classCallCheck(this, Lru);
    this.max = max || 1000;
    this.size = 0;
    this.pool = new Map();
  }
  return _createClass(Lru, [{
    key: "add",
    value: function add(key, value) {
      var isExist = this.has(key);
      // 如果该key之前不存在，并且现在数量已经超出最大值，则不再继续添加
      if (!isExist && this.size >= this.max) {
        return false;
      }
      // 已经存在则可以更新，因为不影响数量
      // 如果该key是否已经存在，则先删除
      this.delete(key);
      // 添加
      this.pool.set(key, value);
      this.size++;
      // 删除最早的没啥意义，详见：https://github.com/wanglin2/mind-map/issues/467
      // if (this.size > this.max) {
      //   let keys = this.pool.keys()
      //   let last = keys.next()
      //   this.delete(last.value)
      // }
      return true;
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      if (this.pool.has(key)) {
        this.pool.delete(key);
        this.size--;
      }
    }
  }, {
    key: "has",
    value: function has(key) {
      return this.pool.has(key);
    }
  }, {
    key: "get",
    value: function get(key) {
      if (this.pool.has(key)) {
        return this.pool.get(key);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.size = 0;
      this.pool = new Map();
    }
  }]);
}();

//  布局基类
var Base = /*#__PURE__*/function () {
  //  构造函数
  function Base(renderer) {
    _classCallCheck(this, Base);
    // 渲染实例
    this.renderer = renderer;
    // 控制实例
    this.mindMap = renderer.mindMap;
    // 绘图对象
    this.draw = this.mindMap.draw;
    this.lineDraw = this.mindMap.lineDraw;
    // 根节点
    this.root = null;
    this.lru = new Lru(this.mindMap.opt.maxNodeCacheCount);
    // 当initRootNodePosition不为默认的值时，根节点的位置距默认的配置时根节点距离的差值
    this.rootNodeCenterOffset = null;
  }

  //  计算节点位置
  return _createClass(Base, [{
    key: "doLayout",
    value: function doLayout() {
      throw new Error('【computed】方法为必要方法，需要子类进行重写！');
    }

    //  连线
  }, {
    key: "renderLine",
    value: function renderLine() {
      throw new Error('【renderLine】方法为必要方法，需要子类进行重写！');
    }

    //  定位展开收缩按钮
  }, {
    key: "renderExpandBtn",
    value: function renderExpandBtn() {
      throw new Error('【renderExpandBtn】方法为必要方法，需要子类进行重写！');
    }

    //  概要节点
  }, {
    key: "renderGeneralization",
    value: function renderGeneralization() {}

    // 通过uid缓存节点
  }, {
    key: "cacheNode",
    value: function cacheNode(uid, node) {
      // 记录本次渲染时的节点
      this.renderer.nodeCache[uid] = node;
      // 缓存所有渲染过的节点
      this.lru.add(uid, node);
    }

    // 检查当前来源是否需要重新计算节点大小
  }, {
    key: "checkIsNeedResizeSources",
    value: function checkIsNeedResizeSources() {
      return [CONSTANTS.CHANGE_THEME, CONSTANTS.TRANSFORM_TO_NORMAL_NODE].includes(this.renderer.renderSource);
    }

    // 层级类型改变
  }, {
    key: "checkIsLayerTypeChange",
    value: function checkIsLayerTypeChange(oldIndex, newIndex) {
      if (oldIndex >= 2 && newIndex >= 2) return false;
      if (oldIndex >= 2 && newIndex < 2) return true;
      if (oldIndex < 2 && newIndex >= 2) return true;
    }

    // 检查是否是结构布局改变重新渲染展开收起按钮占位元素
  }, {
    key: "checkIsLayoutChangeRerenderExpandBtnPlaceholderRect",
    value: function checkIsLayoutChangeRerenderExpandBtnPlaceholderRect(node) {
      if (this.renderer.renderSource === CONSTANTS.CHANGE_LAYOUT) {
        node.needRerenderExpandBtnPlaceholderRect = true;
      }
    }

    // 节点节点数据是否发生了改变
  }, {
    key: "checkIsNodeDataChange",
    value: function checkIsNodeDataChange(lastData, curData) {
      if (lastData) {
        // 对比忽略激活状态和展开收起状态
        lastData = typeof lastData === 'string' ? JSON.parse(lastData) : lastData;
        lastData.isActive = curData.isActive;
        lastData.expand = curData.expand;
        lastData = JSON.stringify(lastData);
      }
      return lastData !== JSON.stringify(curData);
    }

    //  创建节点实例
  }, {
    key: "createNode",
    value: function createNode(data, parent, isRoot, layerIndex, index, ancestors) {
      // 创建节点
      // 库前置内容数据
      var nodeInnerPrefixData = {};
      this.mindMap.nodeInnerPrefixList.forEach(function (item) {
        if (item.createNodeData) {
          var _item$createNodeData = item.createNodeData({
              data: data,
              parent: parent,
              ancestors: ancestors,
              layerIndex: layerIndex,
              index: index
            }),
            _item$createNodeData2 = _slicedToArray(_item$createNodeData, 2),
            key = _item$createNodeData2[0],
            value = _item$createNodeData2[1];
          nodeInnerPrefixData[key] = value;
        }
      });
      var uid = data.data.uid;
      var newNode = null;
      // 数据上保存了节点引用，那么直接复用节点
      if (data && data._node && !this.renderer.reRender) {
        newNode = data._node;
        // 节点层级改变了
        var isLayerTypeChange = this.checkIsLayerTypeChange(newNode.layerIndex, layerIndex);
        newNode.reset();
        newNode.layerIndex = layerIndex;
        if (isRoot) {
          newNode.isRoot = true;
        } else {
          newNode.parent = parent._node;
        }
        this.cacheNode(data._node.uid, newNode);
        this.checkIsLayoutChangeRerenderExpandBtnPlaceholderRect(newNode);
        // 库前置内容是否改变了
        var isNodeInnerPrefixChange = false;
        this.mindMap.nodeInnerPrefixList.forEach(function (item) {
          if (item.updateNodeData) {
            var isChange = item.updateNodeData(newNode, nodeInnerPrefixData);
            if (isChange) {
              isNodeInnerPrefixChange = isChange;
            }
          }
        });
        // 主题或主题配置改变了
        var isResizeSource = this.checkIsNeedResizeSources();
        // 节点数据改变了
        var isNodeDataChange = this.checkIsNodeDataChange(data._node.nodeDataSnapshot, data.data);
        // 重新计算节点大小和布局
        if (isResizeSource || isNodeDataChange || isLayerTypeChange || newNode.getData('resetRichText') || isNodeInnerPrefixChange) {
          newNode.getSize();
          newNode.needLayout = true;
        }
        this.checkGetGeneralizationChange(newNode, isResizeSource);
      } else if ((this.lru.has(uid) || this.renderer.lastNodeCache[uid]) && !this.renderer.reRender) {
        // 节点数据上没有节点实例
        // 但是通过uid在节点缓存池中找到了缓存的节点
        // 或者在上一次渲染缓存对象中找到了节点
        // 也可以直接复用
        newNode = this.lru.get(uid) || this.renderer.lastNodeCache[uid];
        // 保存该节点上一次的数据
        var lastData = JSON.stringify(newNode.getData());
        // 节点层级改变了
        var _isLayerTypeChange = this.checkIsLayerTypeChange(newNode.layerIndex, layerIndex);
        newNode.reset();
        newNode.nodeData = newNode.handleData(data || {});
        newNode.layerIndex = layerIndex;
        if (isRoot) {
          newNode.isRoot = true;
        } else {
          newNode.parent = parent._node;
        }
        this.cacheNode(uid, newNode);
        this.checkIsLayoutChangeRerenderExpandBtnPlaceholderRect(newNode);
        data._node = newNode;
        // 主题或主题配置改变了需要重新计算节点大小和布局
        var _isResizeSource = this.checkIsNeedResizeSources();
        // 点数据改变了
        var _isNodeDataChange = this.checkIsNodeDataChange(lastData, data.data);
        // 库前置内容是否改变了
        var _isNodeInnerPrefixChange = false;
        this.mindMap.nodeInnerPrefixList.forEach(function (item) {
          if (item.updateNodeData) {
            var isChange = item.updateNodeData(newNode, nodeInnerPrefixData);
            if (isChange) {
              _isNodeInnerPrefixChange = isChange;
            }
          }
        });
        // 重新计算节点大小和布局
        if (_isResizeSource || _isNodeDataChange || _isLayerTypeChange || newNode.getData('resetRichText') || _isNodeInnerPrefixChange) {
          newNode.getSize();
          newNode.needLayout = true;
        }
        this.checkGetGeneralizationChange(newNode, _isResizeSource);
      } else {
        // 创建新节点
        var newUid = uid || createUid();
        newNode = new MindMapNode(_objectSpread2({
          data: data,
          uid: newUid,
          renderer: this.renderer,
          mindMap: this.mindMap,
          draw: this.draw,
          layerIndex: layerIndex,
          isRoot: isRoot,
          parent: !isRoot ? parent._node : null
        }, nodeInnerPrefixData));
        // uid保存到数据上，为了节点复用
        data.data.uid = newUid;
        this.cacheNode(newUid, newNode);
        // 数据关联实际节点
        data._node = newNode;
      }
      // 如果该节点数据是已激活状态，那么添加到激活节点列表里
      if (data.data.isActive) {
        this.renderer.addNodeToActiveList(newNode);
      }
      // 如果当前节点在激活节点列表里，那么添加上激活的状态
      if (this.mindMap.renderer.findActiveNodeIndex(newNode) !== -1) {
        newNode.setData({
          isActive: true
        });
      }
      // 根节点
      if (isRoot) {
        this.root = newNode;
      } else {
        // 互相收集
        parent._node.addChildren(newNode);
      }
      return newNode;
    }

    // 检查概要节点是否需要更新
  }, {
    key: "checkGetGeneralizationChange",
    value: function checkGetGeneralizationChange(node, isResizeSource) {
      var generalizationList = node.getData('generalization');
      if (generalizationList && node._generalizationList && node._generalizationList.length > 0) {
        node._generalizationList.forEach(function (item, index) {
          var gNode = item.generalizationNode;
          var oldData = gNode.getData();
          var newData = generalizationList[index];
          if (isResizeSource || newData && JSON.stringify(oldData) !== JSON.stringify(newData)) {
            if (newData) {
              gNode.nodeData.data = newData;
            }
            gNode.getSize();
            gNode.needLayout = true;
          }
        });
      }
    }

    // 格式化节点位置
  }, {
    key: "formatPosition",
    value: function formatPosition(value, size, nodeSize) {
      if (typeof value === 'number') {
        return value;
      } else if (initRootNodePositionMap[value] !== undefined) {
        return size * initRootNodePositionMap[value];
      } else if (/^\d\d*%$/.test(value)) {
        return Number.parseFloat(value) / 100 * size;
      } else {
        return (size - nodeSize) / 2;
      }
    }

    // 规范initRootNodePosition配置
  }, {
    key: "formatInitRootNodePosition",
    value: function formatInitRootNodePosition(pos) {
      var CENTER = CONSTANTS.INIT_ROOT_NODE_POSITION.CENTER;
      if (!pos || !Array.isArray(pos) || pos.length < 2) {
        pos = [CENTER, CENTER];
      }
      return pos;
    }

    //  定位节点到画布中间
  }, {
    key: "setNodeCenter",
    value: function setNodeCenter(node, position) {
      var initRootNodePosition = this.mindMap.opt.initRootNodePosition;
      initRootNodePosition = this.formatInitRootNodePosition(position || initRootNodePosition);
      node.left = this.formatPosition(initRootNodePosition[0], this.mindMap.width, node.width);
      node.top = this.formatPosition(initRootNodePosition[1], this.mindMap.height, node.height);
    }

    // 当initRootNodePosition配置不为默认的['center','center']时，计算当前配置和默认配置情况下，根节点位置的差值
  }, {
    key: "getRootCenterOffset",
    value: function getRootCenterOffset(width, height) {
      // 因为根节点的大小不会影响这个差值，所以计算一次就足够了
      if (this.rootNodeCenterOffset) return this.rootNodeCenterOffset;
      var initRootNodePosition = this.mindMap.opt.initRootNodePosition;
      var CENTER = CONSTANTS.INIT_ROOT_NODE_POSITION.CENTER;
      initRootNodePosition = this.formatInitRootNodePosition(initRootNodePosition);
      if (initRootNodePosition[0] === CENTER && initRootNodePosition[1] === CENTER) {
        // 如果initRootNodePosition是默认的，那么不需要计算
        this.rootNodeCenterOffset = {
          x: 0,
          y: 0
        };
      } else {
        // 否则需要计算当前配置和默认配置的差值
        var tmpNode = {
          width: width,
          height: height
        };
        var tmpNode2 = {
          width: width,
          height: height
        };
        this.setNodeCenter(tmpNode, [CENTER, CENTER]);
        this.setNodeCenter(tmpNode2);
        this.rootNodeCenterOffset = {
          x: tmpNode2.left - tmpNode.left,
          y: tmpNode2.top - tmpNode.top
        };
      }
      return this.rootNodeCenterOffset;
    }

    //  更新子节点属性
  }, {
    key: "updateChildren",
    value: function updateChildren(children, prop, offset) {
      var _this = this;
      children.forEach(function (item) {
        item[prop] += offset;
        if (item.children && item.children.length && !item.hasCustomPosition()) {
          // 适配自定义位置
          _this.updateChildren(item.children, prop, offset);
        }
      });
    }

    //  更新子节点多个属性
  }, {
    key: "updateChildrenPro",
    value: function updateChildrenPro(children, props) {
      var _this2 = this;
      children.forEach(function (item) {
        Object.keys(props).forEach(function (prop) {
          item[prop] += props[prop];
        });
        if (item.children && item.children.length && !item.hasCustomPosition()) {
          // 适配自定义位置
          _this2.updateChildrenPro(item.children, props);
        }
      });
    }

    //  递归计算节点的宽度
  }, {
    key: "getNodeAreaWidth",
    value: function getNodeAreaWidth(node) {
      var withGeneralization = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var widthArr = [];
      var totalGeneralizationNodeWidth = 0;
      var _loop = function loop(node, width) {
        if (withGeneralization && node.checkHasGeneralization()) {
          totalGeneralizationNodeWidth += node._generalizationNodeWidth;
        }
        if (node.children.length) {
          width += node.width / 2;
          node.children.forEach(function (item) {
            _loop(item, width);
          });
        } else {
          width += node.width;
          widthArr.push(width);
        }
      };
      _loop(node, 0);
      return Math.max.apply(Math, widthArr) + totalGeneralizationNodeWidth;
    }

    //  二次贝塞尔曲线
  }, {
    key: "quadraticCurvePath",
    value: function quadraticCurvePath(x1, y1, x2, y2) {
      var v = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cx, cy;
      if (v) {
        cx = x1 + (x2 - x1) * 0.8;
        cy = y1 + (y2 - y1) * 0.2;
      } else {
        cx = x1 + (x2 - x1) * 0.2;
        cy = y1 + (y2 - y1) * 0.8;
      }
      return "M ".concat(x1, ",").concat(y1, " Q ").concat(cx, ",").concat(cy, " ").concat(x2, ",").concat(y2);
    }

    //  三次贝塞尔曲线
  }, {
    key: "cubicBezierPath",
    value: function cubicBezierPath(x1, y1, x2, y2) {
      var v = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cx1, cy1, cx2, cy2;
      if (v) {
        cx1 = x1;
        cy1 = y1 + (y2 - y1) / 2;
        cx2 = x2;
        cy2 = cy1;
      } else {
        cx1 = x1 + (x2 - x1) / 2;
        cy1 = y1;
        cx2 = cx1;
        cy2 = y2;
      }
      return "M ".concat(x1, ",").concat(y1, " C ").concat(cx1, ",").concat(cy1, " ").concat(cx2, ",").concat(cy2, " ").concat(x2, ",").concat(y2);
    }

    // 根据a,b两个点的位置，计算去除圆角大小后的新的b点
  }, {
    key: "computeNewPoint",
    value: function computeNewPoint(a, b) {
      var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      // x坐标相同
      if (a[0] === b[0]) {
        // b在a下方
        if (b[1] > a[1]) {
          return [b[0], b[1] - radius];
        } else {
          // b在a上方
          return [b[0], b[1] + radius];
        }
      } else if (a[1] === b[1]) {
        // y坐标相同
        // b在a右边
        if (b[0] > a[0]) {
          return [b[0] - radius, b[1]];
        } else {
          return [b[0] + radius, b[1]];
        }
      }
    }

    // 创建一段折线路径
    // 最后一个拐角支持圆角
  }, {
    key: "createFoldLine",
    value: function createFoldLine(list) {
      var lineRadius = this.mindMap.themeConfig.lineRadius;
      var len = list.length;
      var path = '';
      var radiusPath = '';
      if (len >= 3 && lineRadius > 0) {
        var start = list[len - 3];
        var center = list[len - 2];
        var end = list[len - 1];
        // 如果三点在一条直线，那么不用处理
        var isOneLine = start[0].toFixed(0) === center[0].toFixed(0) && center[0].toFixed(0) === end[0].toFixed(0) || start[1].toFixed(0) === center[1].toFixed(0) && center[1].toFixed(0) === end[1].toFixed(0);
        if (!isOneLine) {
          var cStart = this.computeNewPoint(start, center, lineRadius);
          var cEnd = this.computeNewPoint(end, center, lineRadius);
          radiusPath = "Q ".concat(center[0], ",").concat(center[1], " ").concat(cEnd[0], ",").concat(cEnd[1]);
          list.splice(len - 2, 1, cStart, radiusPath);
        }
      }
      list.forEach(function (item, index) {
        if (typeof item === 'string') {
          path += item;
        } else {
          var _item = _slicedToArray(item, 2),
            x = _item[0],
            y = _item[1];
          if (index === 0) {
            path += "M ".concat(x, ",").concat(y);
          } else {
            path += "L ".concat(x, ",").concat(y);
          }
        }
      });
      return path;
    }

    //   获取节点的marginX
  }, {
    key: "getMarginX",
    value: function getMarginX(layerIndex) {
      var _this$mindMap = this.mindMap,
        themeConfig = _this$mindMap.themeConfig,
        opt = _this$mindMap.opt;
      var second = themeConfig.second,
        node = themeConfig.node;
      var hoverRectPadding = opt.hoverRectPadding * 2;
      return layerIndex === 1 ? second.marginX + hoverRectPadding : node.marginX + hoverRectPadding;
    }

    //  获取节点的marginY
  }, {
    key: "getMarginY",
    value: function getMarginY(layerIndex) {
      var _this$mindMap2 = this.mindMap,
        themeConfig = _this$mindMap2.themeConfig,
        opt = _this$mindMap2.opt;
      var second = themeConfig.second,
        node = themeConfig.node;
      var hoverRectPadding = opt.hoverRectPadding * 2;
      return layerIndex === 1 ? second.marginY + hoverRectPadding : node.marginY + hoverRectPadding;
    }

    //  获取节点包括概要在内的宽度
  }, {
    key: "getNodeWidthWithGeneralization",
    value: function getNodeWidthWithGeneralization(node) {
      return Math.max(node.width, node.checkHasGeneralization() ? node._generalizationNodeWidth : 0);
    }

    //  获取节点包括概要在内的高度
  }, {
    key: "getNodeHeightWithGeneralization",
    value: function getNodeHeightWithGeneralization(node) {
      return Math.max(node.height, node.checkHasGeneralization() ? node._generalizationNodeHeight : 0);
    }

    //  获取节点的边界值
    /**
     * dir：生长方向，h（水平）、v（垂直）
     * isLeft：是否向左生长
     */
  }, {
    key: "getNodeBoundaries",
    value: function getNodeBoundaries(node, dir) {
      var _this$mindMap$themeCo = this.mindMap.themeConfig,
        generalizationLineMargin = _this$mindMap$themeCo.generalizationLineMargin,
        generalizationNodeMargin = _this$mindMap$themeCo.generalizationNodeMargin;
      var _walk2 = function walk(root) {
        var _left = Infinity;
        var _right = -Infinity;
        var _top = Infinity;
        var _bottom = -Infinity;
        if (root.children && root.children.length > 0) {
          root.children.forEach(function (child) {
            var _walk = _walk2(child),
              left = _walk.left,
              right = _walk.right,
              top = _walk.top,
              bottom = _walk.bottom;
            // 概要内容的宽度
            var generalizationWidth = child.checkHasGeneralization() && child.getData('expand') ? child._generalizationNodeWidth + generalizationNodeMargin : 0;
            // 概要内容的高度
            var generalizationHeight = child.checkHasGeneralization() && child.getData('expand') ? child._generalizationNodeHeight + generalizationNodeMargin : 0;
            if (left - (dir === 'h' ? generalizationWidth : 0) < _left) {
              _left = left - (dir === 'h' ? generalizationWidth : 0);
            }
            if (right + (dir === 'h' ? generalizationWidth : 0) > _right) {
              _right = right + (dir === 'h' ? generalizationWidth : 0);
            }
            if (top < _top) {
              _top = top;
            }
            if (bottom + (dir === 'v' ? generalizationHeight : 0) > _bottom) {
              _bottom = bottom + (dir === 'v' ? generalizationHeight : 0);
            }
          });
        }
        var cur = {
          left: root.left,
          right: root.left + root.width,
          top: root.top,
          bottom: root.top + root.height
        };
        return {
          left: cur.left < _left ? cur.left : _left,
          right: cur.right > _right ? cur.right : _right,
          top: cur.top < _top ? cur.top : _top,
          bottom: cur.bottom > _bottom ? cur.bottom : _bottom
        };
      };
      var _walk3 = _walk2(node),
        left = _walk3.left,
        right = _walk3.right,
        top = _walk3.top,
        bottom = _walk3.bottom;
      return {
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        generalizationLineMargin: generalizationLineMargin,
        generalizationNodeMargin: generalizationNodeMargin
      };
    }

    // 获取指定索引区间的子节点的边界范围
  }, {
    key: "getChildrenBoundaries",
    value: function getChildrenBoundaries(node, dir) {
      var _this3 = this;
      var startIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var endIndex = arguments.length > 3 ? arguments[3] : undefined;
      var _this$mindMap$themeCo2 = this.mindMap.themeConfig,
        generalizationLineMargin = _this$mindMap$themeCo2.generalizationLineMargin,
        generalizationNodeMargin = _this$mindMap$themeCo2.generalizationNodeMargin;
      var children = node.children.slice(startIndex, endIndex + 1);
      var left = Infinity;
      var right = -Infinity;
      var top = Infinity;
      var bottom = -Infinity;
      children.forEach(function (item) {
        var cur = _this3.getNodeBoundaries(item, dir);
        left = cur.left < left ? cur.left : left;
        right = cur.right > right ? cur.right : right;
        top = cur.top < top ? cur.top : top;
        bottom = cur.bottom > bottom ? cur.bottom : bottom;
      });
      return {
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        generalizationLineMargin: generalizationLineMargin,
        generalizationNodeMargin: generalizationNodeMargin
      };
    }

    // 获取节点概要的渲染边界
  }, {
    key: "getNodeGeneralizationRenderBoundaries",
    value: function getNodeGeneralizationRenderBoundaries(item, dir) {
      var res = null;
      // 区间
      if (item.range) {
        res = this.getChildrenBoundaries(item.node, dir, item.range[0], item.range[1]);
      } else {
        // 整体概要
        res = this.getNodeBoundaries(item.node, dir);
      }
      return res;
    }

    // 获取节点实际存在几个子节点
  }, {
    key: "getNodeActChildrenLength",
    value: function getNodeActChildrenLength(node) {
      return node.nodeData.children && node.nodeData.children.length;
    }

    // 设置连线样式
  }, {
    key: "setLineStyle",
    value: function setLineStyle(style, line, path, childNode) {
      line.plot(this.transformPath(path));
      style && style(line, childNode, true);
    }

    // 转换路径，可以转换成特殊风格的线条样式
  }, {
    key: "transformPath",
    value: function transformPath(path) {
      var customTransformNodeLinePath = this.mindMap.opt.customTransformNodeLinePath;
      if (customTransformNodeLinePath) {
        return customTransformNodeLinePath(path);
      } else {
        return path;
      }
    }
  }]);
}();

//  逻辑结构图
var LogicalStructure = /*#__PURE__*/function (_Base) {
  //  构造函数
  function LogicalStructure() {
    var _this;
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var layout = arguments.length > 1 ? arguments[1] : undefined;
    _classCallCheck(this, LogicalStructure);
    _this = _callSuper(this, LogicalStructure, [opt]);
    _this.isUseLeft = layout === CONSTANTS.LAYOUT.LOGICAL_STRUCTURE_LEFT;
    return _this;
  }

  //  布局
  _inherits(LogicalStructure, _Base);
  return _createClass(LogicalStructure, [{
    key: "doLayout",
    value: function doLayout(callback) {
      var _this2 = this;
      var task = [function () {
        _this2.computedBaseValue();
      }, function () {
        _this2.computedTopValue();
      }, function () {
        _this2.adjustTopValue();
      }, function () {
        callback(_this2.root);
      }];
      asyncRun(task);
    }

    //  遍历数据计算节点的left、width、height
  }, {
    key: "computedBaseValue",
    value: function computedBaseValue() {
      var _this3 = this;
      var sortIndex = 0;
      _walk(this.renderer.renderTree, null, function (cur, parent, isRoot, layerIndex, index, ancestors) {
        var newNode = _this3.createNode(cur, parent, isRoot, layerIndex, index, ancestors);
        newNode.sortIndex = sortIndex;
        sortIndex++;
        // 根节点定位在画布中心位置
        if (isRoot) {
          _this3.setNodeCenter(newNode);
        } else {
          // 非根节点
          // 定位到父节点右侧
          if (_this3.isUseLeft) {
            newNode.left = parent._node.left - newNode.width - _this3.getMarginX(layerIndex);
          } else {
            newNode.left = parent._node.left + parent._node.width + _this3.getMarginX(layerIndex);
          }
        }
        if (!cur.data.expand) {
          return true;
        }
      }, function (cur, parent, isRoot, layerIndex) {
        // 返回时计算节点的areaHeight，也就是子节点所占的高度之和，包括外边距
        var len = cur.data.expand === false ? 0 : cur._node.children.length;
        cur._node.childrenAreaHeight = len ? cur._node.children.reduce(function (h, item) {
          return h + item.height;
        }, 0) + (len + 1) * _this3.getMarginY(layerIndex + 1) : 0;
        // 如果存在概要，则和概要的高度取最大值
        var generalizationNodeHeight = cur._node.checkHasGeneralization() ? cur._node._generalizationNodeHeight + _this3.getMarginY(layerIndex + 1) : 0;
        cur._node.childrenAreaHeight2 = Math.max(cur._node.childrenAreaHeight, generalizationNodeHeight);
      }, true, 0);
    }

    //  遍历节点树计算节点的top
  }, {
    key: "computedTopValue",
    value: function computedTopValue() {
      var _this4 = this;
      _walk(this.root, null, function (node, parent, isRoot, layerIndex) {
        if (node.getData('expand') && node.children && node.children.length) {
          var marginY = _this4.getMarginY(layerIndex + 1);
          // 第一个子节点的top值 = 该节点中心的top值 - 子节点的高度之和的一半
          var top = node.top + node.height / 2 - node.childrenAreaHeight / 2;
          var totalTop = top + marginY;
          node.children.forEach(function (cur) {
            cur.top = totalTop;
            totalTop += cur.height + marginY;
          });
        }
      }, null, true);
    }

    //  调整节点top
  }, {
    key: "adjustTopValue",
    value: function adjustTopValue() {
      var _this5 = this;
      _walk(this.root, null, function (node, parent, isRoot, layerIndex) {
        if (!node.getData('expand')) {
          return;
        }
        // 判断子节点所占的高度之和是否大于该节点自身，大于则需要调整位置
        var difference = node.childrenAreaHeight2 - _this5.getMarginY(layerIndex + 1) * 2 - node.height;
        if (difference > 0) {
          _this5.updateBrothers(node, difference / 2);
        }
      }, null, true);
    }

    //  更新兄弟节点的top
  }, {
    key: "updateBrothers",
    value: function updateBrothers(node, addHeight) {
      var _this6 = this;
      if (node.parent) {
        var childrenList = node.parent.children;
        var index = getNodeIndexInNodeList(node, childrenList);
        childrenList.forEach(function (item, _index) {
          if (item.uid === node.uid || item.hasCustomPosition()) {
            // 适配自定义位置
            return;
          }
          var _offset = 0;
          // 上面的节点往上移
          if (_index < index) {
            _offset = -addHeight;
          } else if (_index > index) {
            // 下面的节点往下移
            _offset = addHeight;
          }
          item.top += _offset;
          // 同步更新子节点的位置
          if (item.children && item.children.length) {
            _this6.updateChildren(item.children, 'top', _offset);
          }
        });
        // 更新父节点的位置
        this.updateBrothers(node.parent, addHeight);
      }
    }

    //  绘制连线，连接该节点到其子节点
  }, {
    key: "renderLine",
    value: function renderLine(node, lines, style, lineStyle) {
      if (lineStyle === 'curve') {
        this.renderLineCurve(node, lines, style);
      } else if (lineStyle === 'direct') {
        this.renderLineDirect(node, lines, style);
      } else {
        this.renderLineStraight(node, lines, style);
      }
    }

    //  直线风格连线
  }, {
    key: "renderLineStraight",
    value: function renderLineStraight(node, lines, style) {
      var _this7 = this;
      if (node.children.length <= 0) {
        return [];
      }
      var left = node.left,
        top = node.top,
        width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize;
      var _this$mindMap$opt = this.mindMap.opt,
        alwaysShowExpandBtn = _this$mindMap$opt.alwaysShowExpandBtn,
        notShowExpandBtn = _this$mindMap$opt.notShowExpandBtn;
      if (!alwaysShowExpandBtn || notShowExpandBtn) {
        expandBtnSize = 0;
      }
      var marginX = this.getMarginX(node.layerIndex + 1);
      var s1 = (marginX - expandBtnSize) * 0.6;
      if (this.isUseLeft) {
        s1 *= -1;
      }
      var nodeUseLineStyle = this.mindMap.themeConfig.nodeUseLineStyle;
      node.children.forEach(function (item, index) {
        var x1;
        if (_this7.isUseLeft) {
          x1 = node.layerIndex === 0 ? left : left - expandBtnSize;
        } else {
          x1 = node.layerIndex === 0 ? left + width : left + width + expandBtnSize;
        }
        var y1 = top + height / 2;
        var x2 = _this7.isUseLeft ? item.left + item.width : item.left;
        var y2 = item.top + item.height / 2;
        // 节点使用横线风格，需要额外渲染横线
        var nodeUseLineStyleOffset = nodeUseLineStyle ? item.width * (_this7.isUseLeft ? -1 : 1) : 0;
        y1 = nodeUseLineStyle && !node.isRoot ? y1 + height / 2 : y1;
        y2 = nodeUseLineStyle ? y2 + item.height / 2 : y2;
        var path = _this7.createFoldLine([[x1, y1], [x1 + s1, y1], [x1 + s1, y2], [x2 + nodeUseLineStyleOffset, y2]]);
        _this7.setLineStyle(style, lines[index], path, item);
      });
    }

    //  直连风格
  }, {
    key: "renderLineDirect",
    value: function renderLineDirect(node, lines, style) {
      var _this8 = this;
      if (node.children.length <= 0) {
        return [];
      }
      var left = node.left,
        top = node.top,
        width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize;
      var _this$mindMap$opt2 = this.mindMap.opt,
        alwaysShowExpandBtn = _this$mindMap$opt2.alwaysShowExpandBtn,
        notShowExpandBtn = _this$mindMap$opt2.notShowExpandBtn;
      if (!alwaysShowExpandBtn || notShowExpandBtn) {
        expandBtnSize = 0;
      }
      var nodeUseLineStyle = this.mindMap.themeConfig.nodeUseLineStyle;
      node.children.forEach(function (item, index) {
        if (node.layerIndex === 0) {
          expandBtnSize = 0;
        }
        var x1 = _this8.isUseLeft ? left - expandBtnSize : left + width + expandBtnSize;
        var y1 = top + height / 2;
        var x2 = _this8.isUseLeft ? item.left + item.width : item.left;
        var y2 = item.top + item.height / 2;
        y1 = nodeUseLineStyle && !node.isRoot ? y1 + height / 2 : y1;
        y2 = nodeUseLineStyle ? y2 + item.height / 2 : y2;
        // 节点使用横线风格，需要额外渲染横线
        var nodeUseLineStylePath = nodeUseLineStyle ? " L ".concat(_this8.isUseLeft ? item.left : item.left + item.width, ",").concat(y2) : '';
        var path = "M ".concat(x1, ",").concat(y1, " L ").concat(x2, ",").concat(y2) + nodeUseLineStylePath;
        _this8.setLineStyle(style, lines[index], path, item);
      });
    }

    //  曲线风格连线
  }, {
    key: "renderLineCurve",
    value: function renderLineCurve(node, lines, style) {
      var _this9 = this;
      if (node.children.length <= 0) {
        return [];
      }
      var left = node.left,
        top = node.top,
        width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize;
      var _this$mindMap$opt3 = this.mindMap.opt,
        alwaysShowExpandBtn = _this$mindMap$opt3.alwaysShowExpandBtn,
        notShowExpandBtn = _this$mindMap$opt3.notShowExpandBtn;
      if (!alwaysShowExpandBtn || notShowExpandBtn) {
        expandBtnSize = 0;
      }
      var _this$mindMap$themeCo = this.mindMap.themeConfig,
        nodeUseLineStyle = _this$mindMap$themeCo.nodeUseLineStyle,
        rootLineStartPositionKeepSameInCurve = _this$mindMap$themeCo.rootLineStartPositionKeepSameInCurve,
        rootLineKeepSameInCurve = _this$mindMap$themeCo.rootLineKeepSameInCurve;
      node.children.forEach(function (item, index) {
        if (node.layerIndex === 0) {
          expandBtnSize = 0;
        }
        var x1;
        if (_this9.isUseLeft) {
          x1 = node.layerIndex === 0 && !rootLineStartPositionKeepSameInCurve ? left + width / 2 : left - expandBtnSize;
        } else {
          x1 = node.layerIndex === 0 && !rootLineStartPositionKeepSameInCurve ? left + width / 2 : left + width + expandBtnSize;
        }
        var y1 = top + height / 2;
        var x2 = _this9.isUseLeft ? item.left + item.width : item.left;
        var y2 = item.top + item.height / 2;
        var path = '';
        y1 = nodeUseLineStyle && !node.isRoot ? y1 + height / 2 : y1;
        y2 = nodeUseLineStyle ? y2 + item.height / 2 : y2;
        // 节点使用横线风格，需要额外渲染横线
        var nodeUseLineStylePath;
        if (_this9.isUseLeft) {
          nodeUseLineStylePath = nodeUseLineStyle ? " L ".concat(item.left, ",").concat(y2) : '';
        } else {
          nodeUseLineStylePath = nodeUseLineStyle ? " L ".concat(item.left + item.width, ",").concat(y2) : '';
        }
        if (node.isRoot && !rootLineKeepSameInCurve) {
          path = _this9.quadraticCurvePath(x1, y1, x2, y2) + nodeUseLineStylePath;
        } else {
          path = _this9.cubicBezierPath(x1, y1, x2, y2) + nodeUseLineStylePath;
        }
        _this9.setLineStyle(style, lines[index], path, item);
      });
    }

    //  渲染按钮
  }, {
    key: "renderExpandBtn",
    value: function renderExpandBtn(node, btn) {
      var width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize,
        layerIndex = node.layerIndex;
      if (layerIndex === 0) {
        expandBtnSize = 0;
      }
      var _btn$transform = btn.transform(),
        translateX = _btn$transform.translateX,
        translateY = _btn$transform.translateY;
      // 节点使用横线风格，需要调整展开收起按钮位置
      var nodeUseLineStyleOffset = this.mindMap.themeConfig.nodeUseLineStyle ? height / 2 : 0;
      // 位置没有变化则返回
      var _x = this.isUseLeft ? 0 - expandBtnSize : width;
      var _y = height / 2 + nodeUseLineStyleOffset;
      if (_x === translateX && _y === translateY) {
        return;
      }
      btn.translate(_x - translateX, _y - translateY);
    }

    //  创建概要节点
  }, {
    key: "renderGeneralization",
    value: function renderGeneralization(list) {
      var _this10 = this;
      list.forEach(function (item) {
        var _this10$getNodeGenera = _this10.getNodeGeneralizationRenderBoundaries(item, 'h'),
          left = _this10$getNodeGenera.left,
          top = _this10$getNodeGenera.top,
          bottom = _this10$getNodeGenera.bottom,
          right = _this10$getNodeGenera.right,
          generalizationLineMargin = _this10$getNodeGenera.generalizationLineMargin,
          generalizationNodeMargin = _this10$getNodeGenera.generalizationNodeMargin;
        var x = _this10.isUseLeft ? left - generalizationLineMargin : right + generalizationLineMargin;
        var x1 = x;
        var y1 = top;
        var x2 = x;
        var y2 = bottom;
        var cx = x1 + (_this10.isUseLeft ? -20 : 20);
        var cy = y1 + (y2 - y1) / 2;
        var path = "M ".concat(x1, ",").concat(y1, " Q ").concat(cx, ",").concat(cy, " ").concat(x2, ",").concat(y2);
        item.generalizationLine.plot(path);
        item.generalizationNode.left = x + (_this10.isUseLeft ? -generalizationNodeMargin : generalizationNodeMargin) - (_this10.isUseLeft ? item.generalizationNode.width : 0);
        item.generalizationNode.top = top + (bottom - top - item.generalizationNode.height) / 2;
      });
    }

    // 渲染展开收起按钮的隐藏占位元素
  }, {
    key: "renderExpandBtnRect",
    value: function renderExpandBtnRect(rect, expandBtnSize, width, height) {
      if (this.isUseLeft) {
        rect.size(expandBtnSize, height).x(-expandBtnSize).y(0);
      } else {
        rect.size(expandBtnSize, height).x(width).y(0);
      }
    }
  }]);
}(Base);

//  思维导图
var MindMap$1 = /*#__PURE__*/function (_Base) {
  //  构造函数
  // 在逻辑结构图的基础上增加一个变量来记录生长方向，向左还是向右，同时在计算left的时候根据方向来计算、调整top时只考虑同方向的节点即可
  function MindMap() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, MindMap);
    return _callSuper(this, MindMap, [opt]);
  }

  //  布局
  _inherits(MindMap, _Base);
  return _createClass(MindMap, [{
    key: "doLayout",
    value: function doLayout(callback) {
      var _this = this;
      var task = [function () {
        _this.computedBaseValue();
      }, function () {
        _this.computedTopValue();
      }, function () {
        _this.adjustTopValue();
      }, function () {
        callback(_this.root);
      }];
      asyncRun(task);
    }

    //  遍历数据计算节点的left、width、height
  }, {
    key: "computedBaseValue",
    value: function computedBaseValue() {
      var _this2 = this;
      _walk(this.renderer.renderTree, null, function (cur, parent, isRoot, layerIndex, index, ancestors) {
        var newNode = _this2.createNode(cur, parent, isRoot, layerIndex, index, ancestors);
        // 根节点定位在画布中心位置
        if (isRoot) {
          _this2.setNodeCenter(newNode);
        } else {
          // 非根节点
          // 三级及以下节点以上级为准
          if (parent._node.dir) {
            newNode.dir = parent._node.dir;
          } else {
            // 节点生长方向
            newNode.dir = newNode.getData('dir') || (index % 2 === 0 ? CONSTANTS.LAYOUT_GROW_DIR.RIGHT : CONSTANTS.LAYOUT_GROW_DIR.LEFT);
          }
          // 根据生长方向定位到父节点的左侧或右侧
          newNode.left = newNode.dir === CONSTANTS.LAYOUT_GROW_DIR.RIGHT ? parent._node.left + parent._node.width + _this2.getMarginX(layerIndex) : parent._node.left - _this2.getMarginX(layerIndex) - newNode.width;
        }
        if (!cur.data.expand) {
          return true;
        }
      }, function (cur, parent, isRoot, layerIndex) {
        // 返回时计算节点的leftChildrenAreaHeight和rightChildrenAreaHeight，也就是左侧和右侧子节点所占的高度之和，包括外边距
        if (!cur.data.expand) {
          cur._node.leftChildrenAreaHeight = 0;
          cur._node.rightChildrenAreaHeight = 0;
          return;
        }
        // 理论上只有根节点是存在两个方向的子节点的，其他节点的子节点一定全都是同方向，但是为了逻辑统一，就不按特殊处理的方式来写了
        var leftLen = 0;
        var rightLen = 0;
        var leftChildrenAreaHeight = 0;
        var rightChildrenAreaHeight = 0;
        cur._node.children.forEach(function (item) {
          if (item.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT) {
            leftLen++;
            leftChildrenAreaHeight += item.height;
          } else {
            rightLen++;
            rightChildrenAreaHeight += item.height;
          }
        });
        cur._node.leftChildrenAreaHeight = leftChildrenAreaHeight + (leftLen + 1) * _this2.getMarginY(layerIndex + 1);
        cur._node.rightChildrenAreaHeight = rightChildrenAreaHeight + (rightLen + 1) * _this2.getMarginY(layerIndex + 1);

        // 如果存在概要，则和概要的高度取最大值
        var generalizationNodeHeight = cur._node.checkHasGeneralization() ? cur._node._generalizationNodeHeight + _this2.getMarginY(layerIndex + 1) : 0;
        cur._node.leftChildrenAreaHeight2 = Math.max(cur._node.leftChildrenAreaHeight, generalizationNodeHeight);
        cur._node.rightChildrenAreaHeight2 = Math.max(cur._node.rightChildrenAreaHeight, generalizationNodeHeight);
      }, true, 0);
    }

    //  遍历节点树计算节点的top
  }, {
    key: "computedTopValue",
    value: function computedTopValue() {
      var _this3 = this;
      _walk(this.root, null, function (node, parent, isRoot, layerIndex) {
        if (node.getData('expand') && node.children && node.children.length) {
          var marginY = _this3.getMarginY(layerIndex + 1);
          var baseTop = node.top + node.height / 2 + marginY;
          // 第一个子节点的top值 = 该节点中心的top值 - 子节点的高度之和的一半
          var leftTotalTop = baseTop - node.leftChildrenAreaHeight / 2;
          var rightTotalTop = baseTop - node.rightChildrenAreaHeight / 2;
          node.children.forEach(function (cur) {
            if (cur.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT) {
              cur.top = leftTotalTop;
              leftTotalTop += cur.height + marginY;
            } else {
              cur.top = rightTotalTop;
              rightTotalTop += cur.height + marginY;
            }
          });
        }
      }, null, true);
    }

    //  调整节点top
  }, {
    key: "adjustTopValue",
    value: function adjustTopValue() {
      var _this4 = this;
      _walk(this.root, null, function (node, parent, isRoot, layerIndex) {
        if (!node.getData('expand')) {
          return;
        }
        // 判断子节点所占的高度之和是否大于该节点自身，大于则需要调整位置
        var base = _this4.getMarginY(layerIndex + 1) * 2 + node.height;
        var leftDifference = node.leftChildrenAreaHeight2 - base;
        var rightDifference = node.rightChildrenAreaHeight2 - base;
        if (leftDifference > 0 || rightDifference > 0) {
          _this4.updateBrothers(node, leftDifference / 2, rightDifference / 2);
        }
      }, null, true);
    }

    //  更新兄弟节点的top
  }, {
    key: "updateBrothers",
    value: function updateBrothers(node, leftAddHeight, rightAddHeight) {
      var _this5 = this;
      if (node.parent) {
        // 过滤出和自己同方向的节点
        var childrenList = node.parent.children.filter(function (item) {
          return item.dir === node.dir;
        });
        var index = getNodeIndexInNodeList(node, childrenList);
        childrenList.forEach(function (item, _index) {
          if (item.hasCustomPosition()) {
            // 适配自定义位置
            return;
          }
          var _offset = 0;
          var addHeight = item.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT ? leftAddHeight : rightAddHeight;
          // 上面的节点往上移
          if (_index < index) {
            _offset = -addHeight;
          } else if (_index > index) {
            // 下面的节点往下移
            _offset = addHeight;
          }
          item.top += _offset;
          // 同步更新子节点的位置
          if (item.children && item.children.length) {
            _this5.updateChildren(item.children, 'top', _offset);
          }
        });
        // 更新父节点的位置
        this.updateBrothers(node.parent, leftAddHeight, rightAddHeight);
      }
    }

    //  绘制连线，连接该节点到其子节点
  }, {
    key: "renderLine",
    value: function renderLine(node, lines, style, lineStyle) {
      if (lineStyle === 'curve') {
        this.renderLineCurve(node, lines, style);
      } else if (lineStyle === 'direct') {
        this.renderLineDirect(node, lines, style);
      } else {
        this.renderLineStraight(node, lines, style);
      }
    }

    //  直线风格连线
  }, {
    key: "renderLineStraight",
    value: function renderLineStraight(node, lines, style) {
      var _this6 = this;
      if (node.children.length <= 0) {
        return [];
      }
      var left = node.left,
        top = node.top,
        width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize;
      var _this$mindMap$opt = this.mindMap.opt,
        alwaysShowExpandBtn = _this$mindMap$opt.alwaysShowExpandBtn,
        notShowExpandBtn = _this$mindMap$opt.notShowExpandBtn;
      if (!alwaysShowExpandBtn || notShowExpandBtn) {
        expandBtnSize = 0;
      }
      var marginX = this.getMarginX(node.layerIndex + 1);
      var s1 = (marginX - expandBtnSize) * 0.6;
      var nodeUseLineStyle = this.mindMap.themeConfig.nodeUseLineStyle;
      node.children.forEach(function (item, index) {
        var x1 = 0;
        var _s = 0;
        // 节点使用横线风格，需要额外渲染横线
        var nodeUseLineStyleOffset = nodeUseLineStyle ? item.width : 0;
        if (item.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT) {
          _s = -s1;
          x1 = node.layerIndex === 0 ? left : left - expandBtnSize;
          nodeUseLineStyleOffset = -nodeUseLineStyleOffset;
        } else {
          _s = s1;
          x1 = node.layerIndex === 0 ? left + width : left + width + expandBtnSize;
        }
        var y1 = top + height / 2;
        var x2 = item.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT ? item.left + item.width : item.left;
        var y2 = item.top + item.height / 2;
        y1 = nodeUseLineStyle && !node.isRoot ? y1 + height / 2 : y1;
        y2 = nodeUseLineStyle ? y2 + item.height / 2 : y2;
        var path = _this6.createFoldLine([[x1, y1], [x1 + _s, y1], [x1 + _s, y2], [x2 + nodeUseLineStyleOffset, y2]]);
        _this6.setLineStyle(style, lines[index], path, item);
      });
    }

    //  直连风格
  }, {
    key: "renderLineDirect",
    value: function renderLineDirect(node, lines, style) {
      var _this7 = this;
      if (node.children.length <= 0) {
        return [];
      }
      var left = node.left,
        top = node.top,
        width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize;
      var _this$mindMap$opt2 = this.mindMap.opt,
        alwaysShowExpandBtn = _this$mindMap$opt2.alwaysShowExpandBtn,
        notShowExpandBtn = _this$mindMap$opt2.notShowExpandBtn;
      if (!alwaysShowExpandBtn || notShowExpandBtn) {
        expandBtnSize = 0;
      }
      var nodeUseLineStyle = this.mindMap.themeConfig.nodeUseLineStyle;
      node.children.forEach(function (item, index) {
        if (node.layerIndex === 0) {
          expandBtnSize = 0;
        }
        var x1 = item.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT ? left - expandBtnSize : left + width + expandBtnSize;
        var y1 = top + height / 2;
        var x2 = item.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT ? item.left + item.width : item.left;
        var y2 = item.top + item.height / 2;
        y1 = nodeUseLineStyle && !node.isRoot ? y1 + height / 2 : y1;
        y2 = nodeUseLineStyle ? y2 + item.height / 2 : y2;
        // 节点使用横线风格，需要额外渲染横线
        var nodeUseLineStylePath = '';
        if (nodeUseLineStyle) {
          if (item.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT) {
            nodeUseLineStylePath = " L ".concat(item.left, ",").concat(y2);
          } else {
            nodeUseLineStylePath = " L ".concat(item.left + item.width, ",").concat(y2);
          }
        }
        var path = "M ".concat(x1, ",").concat(y1, " L ").concat(x2, ",").concat(y2) + nodeUseLineStylePath;
        _this7.setLineStyle(style, lines[index], path, item);
      });
    }

    //  曲线风格连线
  }, {
    key: "renderLineCurve",
    value: function renderLineCurve(node, lines, style) {
      var _this8 = this;
      if (node.children.length <= 0) {
        return [];
      }
      var left = node.left,
        top = node.top,
        width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize;
      var _this$mindMap$opt3 = this.mindMap.opt,
        alwaysShowExpandBtn = _this$mindMap$opt3.alwaysShowExpandBtn,
        notShowExpandBtn = _this$mindMap$opt3.notShowExpandBtn;
      if (!alwaysShowExpandBtn || notShowExpandBtn) {
        expandBtnSize = 0;
      }
      var _this$mindMap$themeCo = this.mindMap.themeConfig,
        nodeUseLineStyle = _this$mindMap$themeCo.nodeUseLineStyle,
        rootLineKeepSameInCurve = _this$mindMap$themeCo.rootLineKeepSameInCurve,
        rootLineStartPositionKeepSameInCurve = _this$mindMap$themeCo.rootLineStartPositionKeepSameInCurve;
      node.children.forEach(function (item, index) {
        if (node.layerIndex === 0) {
          expandBtnSize = 0;
        }
        var x1 = node.layerIndex === 0 && !rootLineStartPositionKeepSameInCurve ? left + width / 2 : item.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT ? left - expandBtnSize : left + width + expandBtnSize;
        var y1 = top + height / 2;
        var x2 = item.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT ? item.left + item.width : item.left;
        var y2 = item.top + item.height / 2;
        var path = '';
        y1 = nodeUseLineStyle && !node.isRoot ? y1 + height / 2 : y1;
        y2 = nodeUseLineStyle ? y2 + item.height / 2 : y2;
        // 节点使用横线风格，需要额外渲染横线
        var nodeUseLineStylePath = '';
        if (nodeUseLineStyle) {
          if (item.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT) {
            nodeUseLineStylePath = " L ".concat(item.left, ",").concat(y2);
          } else {
            nodeUseLineStylePath = " L ".concat(item.left + item.width, ",").concat(y2);
          }
        }
        if (node.isRoot && !rootLineKeepSameInCurve) {
          path = _this8.quadraticCurvePath(x1, y1, x2, y2) + nodeUseLineStylePath;
        } else {
          path = _this8.cubicBezierPath(x1, y1, x2, y2) + nodeUseLineStylePath;
        }
        _this8.setLineStyle(style, lines[index], path, item);
      });
    }

    //  渲染按钮
  }, {
    key: "renderExpandBtn",
    value: function renderExpandBtn(node, btn) {
      var width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize;
      var _btn$transform = btn.transform(),
        translateX = _btn$transform.translateX,
        translateY = _btn$transform.translateY;
      // 节点使用横线风格，需要调整展开收起按钮位置
      var nodeUseLineStyleOffset = this.mindMap.themeConfig.nodeUseLineStyle ? height / 2 : 0;
      // 位置没有变化则返回
      var _x = node.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT ? 0 - expandBtnSize : width;
      var _y = height / 2 + nodeUseLineStyleOffset;
      if (_x === translateX && _y === translateY) {
        return;
      }
      var x = _x - translateX;
      var y = _y - translateY;
      btn.translate(x, y);
    }

    //  创建概要节点
  }, {
    key: "renderGeneralization",
    value: function renderGeneralization(list) {
      var _this9 = this;
      list.forEach(function (item) {
        var isLeft = item.node.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT;
        var _this9$getNodeGeneral = _this9.getNodeGeneralizationRenderBoundaries(item, 'h'),
          top = _this9$getNodeGeneral.top,
          bottom = _this9$getNodeGeneral.bottom,
          left = _this9$getNodeGeneral.left,
          right = _this9$getNodeGeneral.right,
          generalizationLineMargin = _this9$getNodeGeneral.generalizationLineMargin,
          generalizationNodeMargin = _this9$getNodeGeneral.generalizationNodeMargin;
        var x = isLeft ? left - generalizationLineMargin : right + generalizationLineMargin;
        var x1 = x;
        var y1 = top;
        var x2 = x;
        var y2 = bottom;
        var cx = x1 + (isLeft ? -20 : 20);
        var cy = y1 + (y2 - y1) / 2;
        var path = "M ".concat(x1, ",").concat(y1, " Q ").concat(cx, ",").concat(cy, " ").concat(x2, ",").concat(y2);
        item.generalizationLine.plot(path);
        item.generalizationNode.left = x + (isLeft ? -generalizationNodeMargin : generalizationNodeMargin) - (isLeft ? item.generalizationNode.width : 0);
        item.generalizationNode.top = top + (bottom - top - item.generalizationNode.height) / 2;
      });
    }

    // 渲染展开收起按钮的隐藏占位元素
  }, {
    key: "renderExpandBtnRect",
    value: function renderExpandBtnRect(rect, expandBtnSize, width, height, node) {
      if (node.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT) {
        rect.size(expandBtnSize, height).x(-expandBtnSize).y(0);
      } else {
        rect.size(expandBtnSize, height).x(width).y(0);
      }
    }
  }]);
}(Base);

//  目录组织图
var CatalogOrganization = /*#__PURE__*/function (_Base) {
  //  构造函数
  function CatalogOrganization() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, CatalogOrganization);
    return _callSuper(this, CatalogOrganization, [opt]);
  }

  //  布局
  _inherits(CatalogOrganization, _Base);
  return _createClass(CatalogOrganization, [{
    key: "doLayout",
    value: function doLayout(callback) {
      var _this = this;
      var task = [function () {
        _this.computedBaseValue();
      }, function () {
        _this.computedLeftTopValue();
      }, function () {
        _this.adjustLeftTopValue();
      }, function () {
        callback(_this.root);
      }];
      asyncRun(task);
    }

    //  遍历数据计算节点的left、width、height
  }, {
    key: "computedBaseValue",
    value: function computedBaseValue() {
      var _this2 = this;
      _walk(this.renderer.renderTree, null, function (cur, parent, isRoot, layerIndex, index, ancestors) {
        var newNode = _this2.createNode(cur, parent, isRoot, layerIndex, index, ancestors);
        // 根节点定位在画布中心位置
        if (isRoot) {
          _this2.setNodeCenter(newNode);
        } else {
          // 非根节点
          if (parent._node.isRoot) {
            newNode.top = parent._node.top + parent._node.height + _this2.getMarginX(layerIndex);
          }
        }
        if (!cur.data.expand) {
          return true;
        }
      }, function (cur, parent, isRoot, layerIndex) {
        if (isRoot) {
          var len = cur.data.expand === false ? 0 : cur._node.children.length;
          cur._node.childrenAreaWidth = len ? cur._node.children.reduce(function (h, item) {
            return h + item.width;
          }, 0) + (len + 1) * _this2.getMarginX(layerIndex + 1) : 0;
        }
      }, true, 0);
    }

    //  遍历节点树计算节点的left、top
  }, {
    key: "computedLeftTopValue",
    value: function computedLeftTopValue() {
      var _this3 = this;
      _walk(this.root, null, function (node, parent, isRoot, layerIndex) {
        if (node.getData('expand') && node.children && node.children.length) {
          var marginX = _this3.getMarginX(layerIndex + 1);
          var marginY = _this3.getMarginY(layerIndex + 1);
          if (isRoot) {
            var left = node.left + node.width / 2 - node.childrenAreaWidth / 2;
            var totalLeft = left + marginX;
            node.children.forEach(function (cur) {
              cur.left = totalLeft;
              totalLeft += cur.width + marginX;
            });
          } else {
            var totalTop = node.top + _this3.getNodeHeightWithGeneralization(node) + marginY + (_this3.getNodeActChildrenLength(node) > 0 ? node.expandBtnSize : 0);
            node.children.forEach(function (cur) {
              cur.left = node.left + node.width * 0.5;
              cur.top = totalTop;
              totalTop += _this3.getNodeHeightWithGeneralization(cur) + marginY + (_this3.getNodeActChildrenLength(cur) > 0 ? cur.expandBtnSize : 0);
            });
          }
        }
      }, null, true);
    }

    //  调整节点left、top
  }, {
    key: "adjustLeftTopValue",
    value: function adjustLeftTopValue() {
      var _this4 = this;
      _walk(this.root, null, function (node, parent, isRoot, layerIndex) {
        if (!node.getData('expand')) {
          return;
        }
        // 调整left
        if (parent && parent.isRoot) {
          var areaWidth = _this4.getNodeAreaWidth(node, true);
          var difference = areaWidth - node.width;
          if (difference > 0) {
            _this4.updateBrothersLeft(node, difference);
          }
        }
        // 调整top
        var len = node.children.length;
        if (parent && !parent.isRoot && len > 0) {
          var marginY = _this4.getMarginY(layerIndex + 1);
          var totalHeight = node.children.reduce(function (h, item) {
            return h + _this4.getNodeHeightWithGeneralization(item) + (_this4.getNodeActChildrenLength(item) > 0 ? item.expandBtnSize : 0);
          }, 0) + len * marginY;
          _this4.updateBrothersTop(node, totalHeight);
        }
      }, function (node, parent, isRoot) {
        if (isRoot) {
          var _this4$getNodeBoundar = _this4.getNodeBoundaries(node, 'h'),
            right = _this4$getNodeBoundar.right,
            left = _this4$getNodeBoundar.left;
          var childrenWidth = right - left;
          var offset = node.left - left - (childrenWidth - node.width) / 2;
          _this4.updateChildren(node.children, 'left', offset);
        }
      }, true);
    }

    //  调整兄弟节点的left
  }, {
    key: "updateBrothersLeft",
    value: function updateBrothersLeft(node, addWidth) {
      var _this5 = this;
      if (node.parent) {
        var childrenList = node.parent.children;
        var index = getNodeIndexInNodeList(node, childrenList);
        childrenList.forEach(function (item, _index) {
          if (item.hasCustomPosition() || _index <= index) {
            // 适配自定义位置
            return;
          }
          item.left += addWidth;
          // 同步更新子节点的位置
          if (item.children && item.children.length) {
            _this5.updateChildren(item.children, 'left', addWidth);
          }
        });
        // 更新父节点的位置
        this.updateBrothersLeft(node.parent, addWidth);
      }
    }

    //  调整兄弟节点的top
  }, {
    key: "updateBrothersTop",
    value: function updateBrothersTop(node, addHeight) {
      var _this6 = this;
      if (node.parent && !node.parent.isRoot) {
        var childrenList = node.parent.children;
        var index = getNodeIndexInNodeList(node, childrenList);
        childrenList.forEach(function (item, _index) {
          if (item.hasCustomPosition()) {
            // 适配自定义位置
            return;
          }
          var _offset = 0;
          // 下面的节点往下移
          if (_index > index) {
            _offset = addHeight;
          }
          item.top += _offset;
          // 同步更新子节点的位置
          if (item.children && item.children.length) {
            _this6.updateChildren(item.children, 'top', _offset);
          }
        });
        // 更新父节点的位置
        this.updateBrothersTop(node.parent, addHeight);
      }
    }

    //  绘制连线，连接该节点到其子节点
  }, {
    key: "renderLine",
    value: function renderLine(node, lines, style) {
      var _this7 = this;
      if (node.children.length <= 0) {
        return [];
      }
      var left = node.left,
        top = node.top,
        width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize;
      var _this$mindMap$opt = this.mindMap.opt,
        alwaysShowExpandBtn = _this$mindMap$opt.alwaysShowExpandBtn,
        notShowExpandBtn = _this$mindMap$opt.notShowExpandBtn;
      if (!alwaysShowExpandBtn || notShowExpandBtn) {
        expandBtnSize = 0;
      }
      var len = node.children.length;
      var marginX = this.getMarginX(node.layerIndex + 1);
      if (node.isRoot) {
        // 根节点
        var x1 = left + width / 2;
        var y1 = top + height;
        var s1 = marginX * 0.7;
        var minx = Infinity;
        var maxx = -Infinity;
        node.children.forEach(function (item, index) {
          var x2 = item.left + item.width / 2;
          var y2 = item.top;
          if (x2 < minx) {
            minx = x2;
          }
          if (x2 > maxx) {
            maxx = x2;
          }
          // 节点使用横线风格，需要额外渲染横线
          var nodeUseLineStylePath = _this7.mindMap.themeConfig.nodeUseLineStyle ? " L ".concat(item.left, ",").concat(y2, " L ").concat(item.left + item.width, ",").concat(y2) : '';
          var path = "M ".concat(x2, ",").concat(y1 + s1, " L ").concat(x2, ",").concat(y1 + s1 > y2 ? y2 + item.height : y2) + nodeUseLineStylePath;
          // 竖线
          _this7.setLineStyle(style, lines[index], path, item);
        });
        minx = Math.min(minx, x1);
        maxx = Math.max(maxx, x1);
        // 父节点的竖线
        var line1 = this.lineDraw.path();
        node.style.line(line1);
        line1.plot(this.transformPath("M ".concat(x1, ",").concat(y1, " L ").concat(x1, ",").concat(y1 + s1)));
        node._lines.push(line1);
        style && style(line1, node);
        // 水平线
        if (len > 0) {
          var lin2 = this.lineDraw.path();
          node.style.line(lin2);
          lin2.plot(this.transformPath("M ".concat(minx, ",").concat(y1 + s1, " L ").concat(maxx, ",").concat(y1 + s1)));
          node._lines.push(lin2);
          style && style(lin2, node);
        }
      } else {
        // 非根节点
        var _y = top + height;
        var maxy = -Infinity;
        var x2 = node.left + node.width * 0.3;
        node.children.forEach(function (item, index) {
          // 为了适配自定义位置，下面做了各种位置的兼容
          var y2 = item.top + item.height / 2;
          if (y2 > maxy) {
            maxy = y2;
          }
          // 水平线
          var path = '';
          var _left = item.left;
          var _isLeft = item.left + item.width < x2;
          var _isXCenter = false;
          if (_isLeft) {
            // 水平位置在父节点左边
            _left = item.left + item.width;
          } else if (item.left < x2 && item.left + item.width > x2) {
            // 水平位置在父节点之间
            _isXCenter = true;
            y2 = item.top;
            maxy = y2;
          }
          if (y2 > top && y2 < _y) {
            // 自定义位置的情况：垂直位置节点在父节点之间
            path = "M ".concat(_isLeft ? node.left : node.left + node.width, ",").concat(y2, " L ").concat(_left, ",").concat(y2);
          } else if (y2 < _y) {
            // 自定义位置的情况：垂直位置节点在父节点上面
            if (_isXCenter) {
              y2 = item.top + item.height;
              _left = x2;
            }
            path = "M ".concat(x2, ",").concat(top, " L ").concat(x2, ",").concat(y2, " L ").concat(_left, ",").concat(y2);
          } else {
            if (_isXCenter) {
              _left = x2;
            }
            path = "M ".concat(x2, ",").concat(y2, " L ").concat(_left, ",").concat(y2);
          }
          // 节点使用横线风格，需要额外渲染横线
          var nodeUseLineStylePath = _this7.mindMap.themeConfig.nodeUseLineStyle ? " L ".concat(_left, ",").concat(y2 - item.height / 2, " L ").concat(_left, ",").concat(y2 + item.height / 2) : '';
          path += nodeUseLineStylePath;
          _this7.setLineStyle(style, lines[index], path, item);
        });
        // 竖线
        if (len > 0) {
          var _lin = this.lineDraw.path();
          expandBtnSize = len > 0 ? expandBtnSize : 0;
          node.style.line(_lin);
          if (maxy < _y + expandBtnSize) {
            _lin.hide();
          } else {
            _lin.plot(this.transformPath("M ".concat(x2, ",").concat(_y + expandBtnSize, " L ").concat(x2, ",").concat(maxy)));
            _lin.show();
          }
          node._lines.push(_lin);
          style && style(_lin, node);
        }
      }
    }

    //  渲染按钮
  }, {
    key: "renderExpandBtn",
    value: function renderExpandBtn(node, btn) {
      var width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize,
        isRoot = node.isRoot;
      if (!isRoot) {
        var _btn$transform = btn.transform(),
          translateX = _btn$transform.translateX,
          translateY = _btn$transform.translateY;
        btn.translate(width * 0.3 - expandBtnSize / 2 - translateX, height + expandBtnSize / 2 - translateY);
      }
    }

    //  创建概要节点
  }, {
    key: "renderGeneralization",
    value: function renderGeneralization(list) {
      var _this8 = this;
      list.forEach(function (item) {
        var _this8$getNodeGeneral = _this8.getNodeGeneralizationRenderBoundaries(item, 'h'),
          top = _this8$getNodeGeneral.top,
          bottom = _this8$getNodeGeneral.bottom,
          right = _this8$getNodeGeneral.right,
          generalizationLineMargin = _this8$getNodeGeneral.generalizationLineMargin,
          generalizationNodeMargin = _this8$getNodeGeneral.generalizationNodeMargin;
        var x1 = right + generalizationLineMargin;
        var y1 = top;
        var x2 = right + generalizationLineMargin;
        var y2 = bottom;
        var cx = x1 + 20;
        var cy = y1 + (y2 - y1) / 2;
        var path = "M ".concat(x1, ",").concat(y1, " Q ").concat(cx, ",").concat(cy, " ").concat(x2, ",").concat(y2);
        item.generalizationLine.plot(_this8.transformPath(path));
        item.generalizationNode.left = right + generalizationNodeMargin;
        item.generalizationNode.top = top + (bottom - top - item.generalizationNode.height) / 2;
      });
    }

    // 渲染展开收起按钮的隐藏占位元素
  }, {
    key: "renderExpandBtnRect",
    value: function renderExpandBtnRect(rect, expandBtnSize, width, height, node) {
      rect.size(width, expandBtnSize).x(0).y(height);
    }
  }]);
}(Base);

//  组织结构图
// 和逻辑结构图基本一样，只是方向变成向下生长，所以先计算节点的top，后计算节点的left、最后调整节点的left即可
var OrganizationStructure = /*#__PURE__*/function (_Base) {
  //  构造函数
  function OrganizationStructure() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, OrganizationStructure);
    return _callSuper(this, OrganizationStructure, [opt]);
  }

  //  布局
  _inherits(OrganizationStructure, _Base);
  return _createClass(OrganizationStructure, [{
    key: "doLayout",
    value: function doLayout(callback) {
      var _this = this;
      var task = [function () {
        _this.computedBaseValue();
      }, function () {
        _this.computedLeftValue();
      }, function () {
        _this.adjustLeftValue();
      }, function () {
        callback(_this.root);
      }];
      asyncRun(task);
    }

    //  遍历数据计算节点的left、width、height
  }, {
    key: "computedBaseValue",
    value: function computedBaseValue() {
      var _this2 = this;
      _walk(this.renderer.renderTree, null, function (cur, parent, isRoot, layerIndex, index, ancestors) {
        var newNode = _this2.createNode(cur, parent, isRoot, layerIndex, index, ancestors);
        // 根节点定位在画布中心位置
        if (isRoot) {
          _this2.setNodeCenter(newNode);
        } else {
          // 非根节点
          // 定位到父节点下方
          newNode.top = parent._node.top + parent._node.height + _this2.getMarginX(layerIndex);
        }
        if (!cur.data.expand) {
          return true;
        }
      }, function (cur, parent, isRoot, layerIndex) {
        // 返回时计算节点的areaWidth，也就是子节点所占的宽度之和，包括外边距
        var len = cur.data.expand === false ? 0 : cur._node.children.length;
        cur._node.childrenAreaWidth = len ? cur._node.children.reduce(function (h, item) {
          return h + item.width;
        }, 0) + (len + 1) * _this2.getMarginY(layerIndex + 1) : 0;

        // 如果存在概要，则和概要的高度取最大值
        var generalizationNodeWidth = cur._node.checkHasGeneralization() ? cur._node._generalizationNodeWidth + _this2.getMarginY(layerIndex + 1) : 0;
        cur._node.childrenAreaWidth2 = Math.max(cur._node.childrenAreaWidth, generalizationNodeWidth);
      }, true, 0);
    }

    //  遍历节点树计算节点的left
  }, {
    key: "computedLeftValue",
    value: function computedLeftValue() {
      var _this3 = this;
      _walk(this.root, null, function (node, parent, isRoot, layerIndex) {
        if (node.getData('expand') && node.children && node.children.length) {
          var marginX = _this3.getMarginY(layerIndex + 1);
          // 第一个子节点的left值 = 该节点中心的left值 - 子节点的宽度之和的一半
          var left = node.left + node.width / 2 - node.childrenAreaWidth / 2;
          var totalLeft = left + marginX;
          node.children.forEach(function (cur) {
            cur.left = totalLeft;
            totalLeft += cur.width + marginX;
          });
        }
      }, null, true);
    }

    //  调整节点left
  }, {
    key: "adjustLeftValue",
    value: function adjustLeftValue() {
      var _this4 = this;
      _walk(this.root, null, function (node, parent, isRoot, layerIndex) {
        if (!node.getData('expand')) {
          return;
        }
        // 判断子节点所占的宽度之和是否大于该节点自身，大于则需要调整位置
        var difference = node.childrenAreaWidth2 - _this4.getMarginY(layerIndex + 1) * 2 - node.width;
        if (difference > 0) {
          _this4.updateBrothers(node, difference / 2);
        }
      }, null, true);
    }

    //  更新兄弟节点的left
  }, {
    key: "updateBrothers",
    value: function updateBrothers(node, addWidth) {
      var _this5 = this;
      if (node.parent) {
        var childrenList = node.parent.children;
        var index = getNodeIndexInNodeList(node, childrenList);
        childrenList.forEach(function (item, _index) {
          if (item.hasCustomPosition()) {
            // 适配自定义位置
            return;
          }
          var _offset = 0;
          // 上面的节点往上移
          if (_index < index) {
            _offset = -addWidth;
          } else if (_index > index) {
            // 下面的节点往下移
            _offset = addWidth;
          }
          item.left += _offset;
          // 同步更新子节点的位置
          if (item.children && item.children.length) {
            _this5.updateChildren(item.children, 'left', _offset);
          }
        });
        // 更新父节点的位置
        this.updateBrothers(node.parent, addWidth);
      }
    }

    //  绘制连线，连接该节点到其子节点
  }, {
    key: "renderLine",
    value: function renderLine(node, lines, style, lineStyle) {
      if (lineStyle === 'curve') {
        this.renderLineCurve(node, lines, style);
      } else if (lineStyle === 'direct') {
        this.renderLineDirect(node, lines, style);
      } else {
        this.renderLineStraight(node, lines, style);
      }
    }

    //  曲线风格连线
  }, {
    key: "renderLineCurve",
    value: function renderLineCurve(node, lines, style) {
      var _this6 = this;
      if (node.children.length <= 0) {
        return [];
      }
      var left = node.left,
        top = node.top,
        width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize;
      var _this$mindMap$opt = this.mindMap.opt,
        alwaysShowExpandBtn = _this$mindMap$opt.alwaysShowExpandBtn,
        notShowExpandBtn = _this$mindMap$opt.notShowExpandBtn;
      if (!alwaysShowExpandBtn || notShowExpandBtn) {
        expandBtnSize = 0;
      }
      var _this$mindMap$themeCo = this.mindMap.themeConfig,
        nodeUseLineStyle = _this$mindMap$themeCo.nodeUseLineStyle,
        rootLineStartPositionKeepSameInCurve = _this$mindMap$themeCo.rootLineStartPositionKeepSameInCurve,
        rootLineKeepSameInCurve = _this$mindMap$themeCo.rootLineKeepSameInCurve;
      node.children.forEach(function (item, index) {
        if (node.layerIndex === 0) {
          expandBtnSize = 0;
        }
        var x1 = left + width / 2;
        var y1 = node.layerIndex === 0 && !rootLineStartPositionKeepSameInCurve ? top + height / 2 : top + height + expandBtnSize;
        var x2 = item.left + item.width / 2;
        var y2 = item.top;
        var path = '';
        // 节点使用横线风格，需要额外渲染横线
        var nodeUseLineStylePath = nodeUseLineStyle ? " L ".concat(item.left, ",").concat(y2, " L ").concat(item.left + item.width, ",").concat(y2) : '';
        if (node.isRoot && !rootLineKeepSameInCurve) {
          path = _this6.quadraticCurvePath(x1, y1, x2, y2, true) + nodeUseLineStylePath;
        } else {
          path = _this6.cubicBezierPath(x1, y1, x2, y2, true) + nodeUseLineStylePath;
        }
        _this6.setLineStyle(style, lines[index], path, item);
      });
    }

    //  直连风格
  }, {
    key: "renderLineDirect",
    value: function renderLineDirect(node, lines, style) {
      var _this7 = this;
      if (node.children.length <= 0) {
        return [];
      }
      var left = node.left,
        top = node.top,
        width = node.width,
        height = node.height;
      var nodeUseLineStyle = this.mindMap.themeConfig.nodeUseLineStyle;
      var x1 = left + width / 2;
      var y1 = top + height;
      node.children.forEach(function (item, index) {
        var x2 = item.left + item.width / 2;
        var y2 = item.top;
        // 节点使用横线风格，需要额外渲染横线
        var nodeUseLineStylePath = nodeUseLineStyle ? " L ".concat(item.left, ",").concat(y2, " L ").concat(item.left + item.width, ",").concat(y2) : '';
        var path = "M ".concat(x1, ",").concat(y1, " L ").concat(x2, ",").concat(y2) + nodeUseLineStylePath;
        _this7.setLineStyle(style, lines[index], path, item);
      });
    }

    //  直线风格连线
  }, {
    key: "renderLineStraight",
    value: function renderLineStraight(node, lines, style) {
      var _this8 = this;
      if (node.children.length <= 0) {
        return [];
      }
      var left = node.left,
        top = node.top,
        width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize,
        isRoot = node.isRoot;
      var _this$mindMap$opt2 = this.mindMap.opt,
        alwaysShowExpandBtn = _this$mindMap$opt2.alwaysShowExpandBtn,
        notShowExpandBtn = _this$mindMap$opt2.notShowExpandBtn;
      if (!alwaysShowExpandBtn || notShowExpandBtn) {
        expandBtnSize = 0;
      }
      var x1 = left + width / 2;
      var y1 = top + height;
      var marginX = this.getMarginX(node.layerIndex + 1);
      var s1 = marginX * 0.7;
      var minx = Infinity;
      var maxx = -Infinity;
      var len = node.children.length;
      node.children.forEach(function (item, index) {
        var x2 = item.left + item.width / 2;
        var y2 = y1 + s1 > item.top ? item.top + item.height : item.top;
        if (x2 < minx) {
          minx = x2;
        }
        if (x2 > maxx) {
          maxx = x2;
        }
        // 节点使用横线风格，需要额外渲染横线
        var nodeUseLineStylePath = _this8.mindMap.themeConfig.nodeUseLineStyle ? " L ".concat(item.left, ",").concat(y2, " L ").concat(item.left + item.width, ",").concat(y2) : '';
        var path = "M ".concat(x2, ",").concat(y1 + s1, " L ").concat(x2, ",").concat(y2) + nodeUseLineStylePath;
        _this8.setLineStyle(style, lines[index], path, item);
      });
      minx = Math.min(x1, minx);
      maxx = Math.max(x1, maxx);
      // 父节点的竖线
      var line1 = this.lineDraw.path();
      node.style.line(line1);
      expandBtnSize = len > 0 && !isRoot ? expandBtnSize : 0;
      line1.plot(this.transformPath("M ".concat(x1, ",").concat(y1 + expandBtnSize, " L ").concat(x1, ",").concat(y1 + s1)));
      node._lines.push(line1);
      style && style(line1, node);
      // 水平线
      if (len > 0) {
        var lin2 = this.lineDraw.path();
        node.style.line(lin2);
        lin2.plot(this.transformPath("M ".concat(minx, ",").concat(y1 + s1, " L ").concat(maxx, ",").concat(y1 + s1)));
        node._lines.push(lin2);
        style && style(lin2, node);
      }
    }

    //  渲染按钮
  }, {
    key: "renderExpandBtn",
    value: function renderExpandBtn(node, btn) {
      var width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize;
      var _btn$transform = btn.transform(),
        translateX = _btn$transform.translateX,
        translateY = _btn$transform.translateY;
      btn.translate(width / 2 - expandBtnSize / 2 - translateX, height + expandBtnSize / 2 - translateY);
    }

    //  创建概要节点
  }, {
    key: "renderGeneralization",
    value: function renderGeneralization(list) {
      var _this9 = this;
      list.forEach(function (item) {
        var _this9$getNodeGeneral = _this9.getNodeGeneralizationRenderBoundaries(item, 'v'),
          bottom = _this9$getNodeGeneral.bottom,
          left = _this9$getNodeGeneral.left,
          right = _this9$getNodeGeneral.right,
          generalizationLineMargin = _this9$getNodeGeneral.generalizationLineMargin,
          generalizationNodeMargin = _this9$getNodeGeneral.generalizationNodeMargin;
        var x1 = left;
        var y1 = bottom + generalizationLineMargin;
        var x2 = right;
        var y2 = bottom + generalizationLineMargin;
        var cx = x1 + (x2 - x1) / 2;
        var cy = y1 + 20;
        var path = "M ".concat(x1, ",").concat(y1, " Q ").concat(cx, ",").concat(cy, " ").concat(x2, ",").concat(y2);
        item.generalizationLine.plot(_this9.transformPath(path));
        item.generalizationNode.top = bottom + generalizationNodeMargin;
        item.generalizationNode.left = left + (right - left - item.generalizationNode.width) / 2;
      });
    }

    // 渲染展开收起按钮的隐藏占位元素
  }, {
    key: "renderExpandBtnRect",
    value: function renderExpandBtnRect(rect, expandBtnSize, width, height, node) {
      rect.size(width, expandBtnSize).x(0).y(height);
    }
  }]);
}(Base);

//  时间轴
var Timeline = /*#__PURE__*/function (_Base) {
  //  构造函数
  function Timeline() {
    var _this;
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var layout = arguments.length > 1 ? arguments[1] : undefined;
    _classCallCheck(this, Timeline);
    _this = _callSuper(this, Timeline, [opt]);
    _this.layout = layout;
    return _this;
  }

  //  布局
  _inherits(Timeline, _Base);
  return _createClass(Timeline, [{
    key: "doLayout",
    value: function doLayout(callback) {
      var _this2 = this;
      var task = [function () {
        _this2.computedBaseValue();
      }, function () {
        _this2.computedLeftTopValue();
      }, function () {
        _this2.adjustLeftTopValue();
      }, function () {
        callback(_this2.root);
      }];
      asyncRun(task);
    }

    //  遍历数据创建节点、计算根节点的位置，计算根节点的子节点的top值
  }, {
    key: "computedBaseValue",
    value: function computedBaseValue() {
      var _this3 = this;
      _walk(this.renderer.renderTree, null, function (cur, parent, isRoot, layerIndex, index, ancestors) {
        var newNode = _this3.createNode(cur, parent, isRoot, layerIndex, index, ancestors);
        // 根节点定位在画布中心位置
        if (isRoot) {
          _this3.setNodeCenter(newNode);
        } else {
          // 非根节点
          // 时间轴2类型需要交替显示
          if (_this3.layout === CONSTANTS.LAYOUT.TIMELINE2) {
            // 三级及以下节点以上级为准
            if (parent._node.dir) {
              newNode.dir = parent._node.dir;
            } else {
              // 节点生长方向
              newNode.dir = index % 2 === 0 ? CONSTANTS.LAYOUT_GROW_DIR.BOTTOM : CONSTANTS.LAYOUT_GROW_DIR.TOP;
            }
          } else {
            newNode.dir = '';
          }
          if (parent._node.isRoot) {
            newNode.top = parent._node.top + (cur._node.height > parent._node.height ? -(cur._node.height - parent._node.height) / 2 : (parent._node.height - cur._node.height) / 2);
          }
        }
        if (!cur.data.expand) {
          return true;
        }
      }, null, true, 0);
    }

    //  遍历节点树计算节点的left、top
  }, {
    key: "computedLeftTopValue",
    value: function computedLeftTopValue() {
      var _this4 = this;
      _walk(this.root, null, function (node, parent, isRoot, layerIndex, index) {
        if (node.getData('expand') && node.children && node.children.length) {
          var marginX = _this4.getMarginX(layerIndex + 1);
          var marginY = _this4.getMarginY(layerIndex + 1);
          if (isRoot) {
            var left = node.left + node.width;
            var totalLeft = left + marginX;
            node.children.forEach(function (cur) {
              cur.left = totalLeft;
              totalLeft += cur.width + marginX;
            });
          } else {
            var totalTop = node.top + node.height + marginY + (_this4.getNodeActChildrenLength(node) > 0 ? node.expandBtnSize : 0);
            node.children.forEach(function (cur) {
              cur.left = node.left + node.width * 0.5;
              cur.top = totalTop;
              totalTop += cur.height + marginY + (_this4.getNodeActChildrenLength(cur) > 0 ? cur.expandBtnSize : 0);
            });
          }
        }
      }, null, true);
    }

    //  调整节点left、top
  }, {
    key: "adjustLeftTopValue",
    value: function adjustLeftTopValue() {
      var _this5 = this;
      _walk(this.root, null, function (node, parent, isRoot, layerIndex) {
        if (!node.getData('expand')) {
          return;
        }
        // 调整left
        if (node.isRoot) {
          _this5.updateBrothersLeft(node);
        }
        // 调整top
        var len = node.children.length;
        if (parent && !parent.isRoot && len > 0) {
          var marginY = _this5.getMarginY(layerIndex + 1);
          var totalHeight = node.children.reduce(function (h, item) {
            return h + item.height + (_this5.getNodeActChildrenLength(item) > 0 ? item.expandBtnSize : 0);
          }, 0) + len * marginY;
          _this5.updateBrothersTop(node, totalHeight);
        }
      }, function (node, parent, isRoot, layerIndex) {
        if (parent && parent.isRoot && node.dir === CONSTANTS.LAYOUT_GROW_DIR.TOP) {
          // 遍历二级节点的子节点
          node.children.forEach(function (item) {
            var totalHeight = _this5.getNodeAreaHeight(item);
            var _top = item.top;
            item.top = node.top - (item.top - node.top) - totalHeight + node.height;
            _this5.updateChildren(item.children, 'top', item.top - _top);
          });
        }
      }, true);
    }

    //  递归计算节点的宽度
  }, {
    key: "getNodeAreaHeight",
    value: function getNodeAreaHeight(node) {
      var _this6 = this;
      var totalHeight = 0;
      var _loop = function loop(node) {
        totalHeight += node.height + (_this6.getNodeActChildrenLength(node) > 0 ? node.expandBtnSize : 0) + _this6.getMarginY(node.layerIndex);
        if (node.children.length) {
          node.children.forEach(function (item) {
            _loop(item);
          });
        }
      };
      _loop(node);
      return totalHeight;
    }

    //  调整兄弟节点的left
  }, {
    key: "updateBrothersLeft",
    value: function updateBrothersLeft(node) {
      var _this7 = this;
      var childrenList = node.children;
      var totalAddWidth = 0;
      childrenList.forEach(function (item) {
        item.left += totalAddWidth;
        if (item.children && item.children.length) {
          _this7.updateChildren(item.children, 'left', totalAddWidth);
        }
        // let areaWidth = this.getNodeAreaWidth(item)
        var _this7$getNodeBoundar = _this7.getNodeBoundaries(item, 'h'),
          left = _this7$getNodeBoundar.left,
          right = _this7$getNodeBoundar.right;
        var areaWidth = right - left;
        var difference = areaWidth - item.width;
        if (difference > 0) {
          totalAddWidth += difference;
        }
      });
    }

    //  调整兄弟节点的top
  }, {
    key: "updateBrothersTop",
    value: function updateBrothersTop(node, addHeight) {
      var _this8 = this;
      if (node.parent && !node.parent.isRoot) {
        var childrenList = node.parent.children;
        var index = getNodeIndexInNodeList(node, childrenList);
        childrenList.forEach(function (item, _index) {
          if (item.hasCustomPosition()) {
            // 适配自定义位置
            return;
          }
          var _offset = 0;
          // 下面的节点往下移
          if (_index > index) {
            _offset = addHeight;
          }
          item.top += _offset;
          // 同步更新子节点的位置
          if (item.children && item.children.length) {
            _this8.updateChildren(item.children, 'top', _offset);
          }
        });
        // 更新父节点的位置
        this.updateBrothersTop(node.parent, addHeight);
      }
    }

    //  绘制连线，连接该节点到其子节点
  }, {
    key: "renderLine",
    value: function renderLine(node, lines, style) {
      var _this9 = this;
      if (node.children.length <= 0) {
        return [];
      }
      node.left;
        var top = node.top;
        node.width;
        var height = node.height,
        expandBtnSize = node.expandBtnSize;
      var _this$mindMap$opt = this.mindMap.opt,
        alwaysShowExpandBtn = _this$mindMap$opt.alwaysShowExpandBtn,
        notShowExpandBtn = _this$mindMap$opt.notShowExpandBtn;
      if (!alwaysShowExpandBtn || notShowExpandBtn) {
        expandBtnSize = 0;
      }
      var len = node.children.length;
      if (node.isRoot) {
        // 当前节点是根节点
        var prevBother = node;
        // 根节点的子节点是和根节点同一水平线排列
        node.children.forEach(function (item, index) {
          var x1 = prevBother.left + prevBother.width;
          var x2 = item.left;
          var y = node.top + node.height / 2;
          var path = "M ".concat(x1, ",").concat(y, " L ").concat(x2, ",").concat(y);
          _this9.setLineStyle(style, lines[index], path, item);
          prevBother = item;
        });
      } else {
        // 当前节点为非根节点
        var maxy = -Infinity;
        var miny = Infinity;
        var x = node.left + node.width * 0.3;
        node.children.forEach(function (item, index) {
          var y = item.top + item.height / 2;
          if (y > maxy) {
            maxy = y;
          }
          if (y < miny) {
            miny = y;
          }
          // 水平线
          var path = "M ".concat(x, ",").concat(y, " L ").concat(item.left, ",").concat(y);
          _this9.setLineStyle(style, lines[index], path, item);
        });
        // 竖线
        if (len > 0) {
          var line = this.lineDraw.path();
          expandBtnSize = len > 0 ? expandBtnSize : 0;
          if (node.parent && node.parent.isRoot && node.dir === CONSTANTS.LAYOUT_GROW_DIR.TOP) {
            line.plot(this.transformPath("M ".concat(x, ",").concat(top, " L ").concat(x, ",").concat(miny)));
          } else {
            line.plot(this.transformPath("M ".concat(x, ",").concat(top + height + expandBtnSize, " L ").concat(x, ",").concat(maxy)));
          }
          node.style.line(line);
          node._lines.push(line);
          style && style(line, node);
        }
      }
    }

    //  渲染按钮
  }, {
    key: "renderExpandBtn",
    value: function renderExpandBtn(node, btn) {
      var width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize,
        isRoot = node.isRoot;
      if (!isRoot) {
        var _btn$transform = btn.transform(),
          translateX = _btn$transform.translateX,
          translateY = _btn$transform.translateY;
        if (node.parent && node.parent.isRoot && node.dir === CONSTANTS.LAYOUT_GROW_DIR.TOP) {
          btn.translate(width * 0.3 - expandBtnSize / 2 - translateX, -expandBtnSize / 2 - translateY);
        } else {
          btn.translate(width * 0.3 - expandBtnSize / 2 - translateX, height + expandBtnSize / 2 - translateY);
        }
      }
    }

    //  创建概要节点
  }, {
    key: "renderGeneralization",
    value: function renderGeneralization(list) {
      var _this10 = this;
      list.forEach(function (item) {
        var _this10$getNodeGenera = _this10.getNodeGeneralizationRenderBoundaries(item, 'h'),
          top = _this10$getNodeGenera.top,
          bottom = _this10$getNodeGenera.bottom,
          right = _this10$getNodeGenera.right,
          generalizationLineMargin = _this10$getNodeGenera.generalizationLineMargin,
          generalizationNodeMargin = _this10$getNodeGenera.generalizationNodeMargin;
        var x1 = right + generalizationLineMargin;
        var y1 = top;
        var x2 = right + generalizationLineMargin;
        var y2 = bottom;
        var cx = x1 + 20;
        var cy = y1 + (y2 - y1) / 2;
        var path = "M ".concat(x1, ",").concat(y1, " Q ").concat(cx, ",").concat(cy, " ").concat(x2, ",").concat(y2);
        item.generalizationLine.plot(_this10.transformPath(path));
        item.generalizationNode.left = right + generalizationNodeMargin;
        item.generalizationNode.top = top + (bottom - top - item.generalizationNode.height) / 2;
      });
    }

    // 渲染展开收起按钮的隐藏占位元素
  }, {
    key: "renderExpandBtnRect",
    value: function renderExpandBtnRect(rect, expandBtnSize, width, height, node) {
      if (this.layout === CONSTANTS.LAYOUT.TIMELINE) {
        rect.size(width, expandBtnSize).x(0).y(height);
      } else {
        var dir = '';
        if (node.dir === CONSTANTS.LAYOUT_GROW_DIR.TOP) {
          dir = node.layerIndex === 1 ? CONSTANTS.LAYOUT_GROW_DIR.TOP : CONSTANTS.LAYOUT_GROW_DIR.BOTTOM;
        } else {
          dir = CONSTANTS.LAYOUT_GROW_DIR.BOTTOM;
        }
        if (dir === CONSTANTS.LAYOUT_GROW_DIR.TOP) {
          rect.size(width, expandBtnSize).x(0).y(-expandBtnSize);
        } else {
          rect.size(width, expandBtnSize).x(0).y(height);
        }
      }
    }
  }]);
}(Base);

//  竖向时间轴
var VerticalTimeline = /*#__PURE__*/function (_Base) {
  //  构造函数
  function VerticalTimeline() {
    var _this;
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var layout = arguments.length > 1 ? arguments[1] : undefined;
    _classCallCheck(this, VerticalTimeline);
    _this = _callSuper(this, VerticalTimeline, [opt]);
    _this.layout = layout;
    return _this;
  }

  //  布局
  _inherits(VerticalTimeline, _Base);
  return _createClass(VerticalTimeline, [{
    key: "doLayout",
    value: function doLayout(callback) {
      var _this2 = this;
      var task = [function () {
        _this2.computedBaseValue();
      }, function () {
        _this2.computedTopValue();
      }, function () {
        _this2.adjustLeftTopValue();
      }, function () {
        callback(_this2.root);
      }];
      asyncRun(task);
    }

    //  遍历数据创建节点、计算根节点的位置，计算根节点的子节点的top值
  }, {
    key: "computedBaseValue",
    value: function computedBaseValue() {
      var _this3 = this;
      _walk(this.renderer.renderTree, null, function (cur, parent, isRoot, layerIndex, index, ancestors) {
        var newNode = _this3.createNode(cur, parent, isRoot, layerIndex, index, ancestors);
        // 根节点定位在画布中心位置
        if (isRoot) {
          _this3.setNodeCenter(newNode);
        } else {
          // 非根节点
          // 节点生长方向
          // 三级及以下节点以上级为准
          if (parent._node.dir) {
            newNode.dir = parent._node.dir;
          } else {
            newNode.dir = index % 2 === 0 ? CONSTANTS.LAYOUT_GROW_DIR.RIGHT : CONSTANTS.LAYOUT_GROW_DIR.LEFT;
          }
          // 定位二级节点的left
          if (parent._node.isRoot) {
            newNode.left = parent._node.left + (cur._node.width > parent._node.width ? -(cur._node.width - parent._node.width) / 2 : (parent._node.width - cur._node.width) / 2);
          } else {
            newNode.left = newNode.dir === CONSTANTS.LAYOUT_GROW_DIR.RIGHT ? parent._node.left + parent._node.width + _this3.getMarginX(layerIndex) : parent._node.left - _this3.getMarginX(layerIndex) - newNode.width;
          }
        }
        if (!cur.data.expand) {
          return true;
        }
      }, function (cur, parent, isRoot, layerIndex) {
        // 返回时计算节点的areaHeight，也就是子节点所占的高度之和，包括外边距
        if (isRoot) {
          return;
        }
        var len = cur.data.expand === false ? 0 : cur._node.children.length;
        cur._node.childrenAreaHeight = len ? cur._node.children.reduce(function (h, item) {
          return h + item.height;
        }, 0) + (len + 1) * _this3.getMarginY(layerIndex + 1) : 0;
      }, true, 0);
    }

    //  遍历节点树计算节点的top
  }, {
    key: "computedTopValue",
    value: function computedTopValue() {
      var _this4 = this;
      _walk(this.root, null, function (node, parent, isRoot, layerIndex, index) {
        if (node.getData('expand') && node.children && node.children.length) {
          var marginY = _this4.getMarginY(layerIndex + 1);
          // 定位二级节点的top
          if (isRoot) {
            var top = node.top + node.height;
            var totalTop = top + marginY;
            node.children.forEach(function (cur) {
              cur.top = totalTop;
              totalTop += cur.height + marginY;
            });
          } else {
            // 定位三级及以下节点的top
            var _marginY = _this4.getMarginY(layerIndex + 1);
            var baseTop = node.top + node.height / 2 + _marginY;
            // 第一个子节点的top值 = 该节点中心的top值 - 子节点的高度之和的一半
            var _totalTop = baseTop - node.childrenAreaHeight / 2;
            node.children.forEach(function (cur) {
              cur.top = _totalTop;
              _totalTop += cur.height + _marginY;
            });
          }
        }
      }, null, true);
    }

    //  调整节点left、top
  }, {
    key: "adjustLeftTopValue",
    value: function adjustLeftTopValue() {
      var _this5 = this;
      _walk(this.root, null, function (node, parent, isRoot, layerIndex) {
        if (!node.getData('expand')) {
          return;
        }
        if (isRoot) return;
        // 判断子节点所占的高度之和是否大于该节点自身，大于则需要调整位置
        var base = _this5.getMarginY(layerIndex + 1) * 2 + node.height;
        var difference = node.childrenAreaHeight - base;
        if (difference > 0) {
          _this5.updateBrothers(node, difference / 2);
        }
      }, null, true);
    }

    //  更新兄弟节点的top
  }, {
    key: "updateBrothers",
    value: function updateBrothers(node, addHeight) {
      var _this6 = this;
      if (node.parent) {
        var childrenList = node.parent.children;
        var index = getNodeIndexInNodeList(node, childrenList);
        childrenList.forEach(function (item, _index) {
          // 自定义节点位置
          if (item.hasCustomPosition()) return;
          // 三级或三级以下节点自身位置不需要动
          if (!node.parent.isRoot && item.uid === node.uid) return;
          var _offset = 0;
          // 二级节点上面的兄弟节点不需要移动，自身需要往下移动
          if (node.parent.isRoot) {
            // 上面的节点不用移
            if (_index < index) {
              _offset = 0;
            } else if (_index > index) {
              // 下面的节点往下移
              _offset = addHeight * 2;
            } else {
              // 自身也要移动
              _offset = addHeight;
            }
          } else {
            // 三级或三级以下节点两侧的兄弟节点向两侧移动
            // 上面的节点往上移
            if (_index < index) {
              _offset = -addHeight;
            } else if (_index > index) {
              // 下面的节点往下移
              _offset = addHeight;
            }
          }
          item.top += _offset;
          // 同步更新子节点的位置
          if (item.children && item.children.length) {
            _this6.updateChildren(item.children, 'top', _offset);
          }
        });
        // 更新父节点的位置
        this.updateBrothers(node.parent, addHeight);
      }
    }

    //  调整兄弟节点的top
  }, {
    key: "updateBrothersTop",
    value: function updateBrothersTop(node, addHeight) {
      var _this7 = this;
      if (node.parent && !node.parent.isRoot) {
        var childrenList = node.parent.children;
        var index = getNodeIndexInNodeList(node, childrenList);
        childrenList.forEach(function (item, _index) {
          if (item.hasCustomPosition()) {
            // 适配自定义位置
            return;
          }
          var _offset = 0;
          // 下面的节点往下移
          if (_index > index) {
            _offset = addHeight;
          }
          item.top += _offset;
          // 同步更新子节点的位置
          if (item.children && item.children.length) {
            _this7.updateChildren(item.children, 'top', _offset);
          }
        });
        // 更新父节点的位置
        this.updateBrothersTop(node.parent, addHeight);
      }
    }

    //  绘制连线，连接该节点到其子节点
  }, {
    key: "renderLine",
    value: function renderLine(node, lines, style, lineStyle) {
      if (lineStyle === 'curve') {
        this.renderLineCurve(node, lines, style);
      } else if (lineStyle === 'direct') {
        this.renderLineDirect(node, lines, style);
      } else {
        this.renderLineStraight(node, lines, style);
      }
    }

    // 直线连接
  }, {
    key: "renderLineStraight",
    value: function renderLineStraight(node, lines, style) {
      var _this8 = this;
      if (node.children.length <= 0) {
        return [];
      }
      var expandBtnSize = node.expandBtnSize;
      var _this$mindMap$opt = this.mindMap.opt,
        alwaysShowExpandBtn = _this$mindMap$opt.alwaysShowExpandBtn,
        notShowExpandBtn = _this$mindMap$opt.notShowExpandBtn;
      if (!alwaysShowExpandBtn || notShowExpandBtn) {
        expandBtnSize = 0;
      }
      if (node.isRoot) {
        // 当前节点是根节点
        var prevBother = node;
        // 根节点的子节点是和根节点同一水平线排列
        node.children.forEach(function (item, index) {
          var y1 = prevBother.top + prevBother.height;
          var y2 = item.top;
          var x = node.left + node.width / 2;
          var path = "M ".concat(x, ",").concat(y1, " L ").concat(x, ",").concat(y2);
          _this8.setLineStyle(style, lines[index], path, item);
          prevBother = item;
        });
      } else {
        // 当前节点为非根节点
        if (node.dir === CONSTANTS.LAYOUT_GROW_DIR.RIGHT) {
          var nodeRight = node.left + node.width;
          var nodeYCenter = node.top + node.height / 2;
          var marginX = this.getMarginX(node.layerIndex + 1);
          var offset = (marginX - expandBtnSize) * 0.6;
          node.children.forEach(function (item, index) {
            var itemLeft = item.left;
            var itemYCenter = item.top + item.height / 2;
            var path = _this8.createFoldLine([[nodeRight, nodeYCenter], [nodeRight + offset, nodeYCenter], [nodeRight + offset, itemYCenter], [itemLeft, itemYCenter]]);
            _this8.setLineStyle(style, lines[index], path, item);
          });
        } else {
          var nodeLeft = node.left;
          var _nodeYCenter = node.top + node.height / 2;
          var _marginX = this.getMarginX(node.layerIndex + 1);
          var _offset2 = (_marginX - expandBtnSize) * 0.6;
          node.children.forEach(function (item, index) {
            var itemRight = item.left + item.width;
            var itemYCenter = item.top + item.height / 2;
            var path = _this8.createFoldLine([[nodeLeft, _nodeYCenter], [nodeLeft - _offset2, _nodeYCenter], [nodeLeft - _offset2, itemYCenter], [itemRight, itemYCenter]]);
            _this8.setLineStyle(style, lines[index], path, item);
          });
        }
      }
    }

    // 直连
  }, {
    key: "renderLineDirect",
    value: function renderLineDirect(node, lines, style) {
      var _this9 = this;
      if (node.children.length <= 0) {
        return [];
      }
      var left = node.left,
        top = node.top,
        width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize;
      var _this$mindMap$opt2 = this.mindMap.opt,
        alwaysShowExpandBtn = _this$mindMap$opt2.alwaysShowExpandBtn,
        notShowExpandBtn = _this$mindMap$opt2.notShowExpandBtn;
      if (!alwaysShowExpandBtn || notShowExpandBtn) {
        expandBtnSize = 0;
      }
      node.children.forEach(function (item, index) {
        if (node.isRoot) {
          var prevBother = node;
          // 根节点的子节点是和根节点同一水平线排列
          node.children.forEach(function (item, index) {
            var y1 = prevBother.top + prevBother.height;
            var y2 = item.top;
            var x = node.left + node.width / 2;
            var path = "M ".concat(x, ",").concat(y1, " L ").concat(x, ",").concat(y2);
            _this9.setLineStyle(style, lines[index], path, item);
            prevBother = item;
          });
        } else {
          var x1 = item.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT ? left - expandBtnSize : left + width + expandBtnSize;
          var y1 = top + height / 2;
          var x2 = item.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT ? item.left + item.width : item.left;
          var y2 = item.top + item.height / 2;
          var path = "M ".concat(x1, ",").concat(y1, " L ").concat(x2, ",").concat(y2);
          _this9.setLineStyle(style, lines[index], path, item);
        }
      });
    }

    //  曲线风格连线
  }, {
    key: "renderLineCurve",
    value: function renderLineCurve(node, lines, style) {
      var _this10 = this;
      if (node.children.length <= 0) {
        return [];
      }
      var left = node.left,
        top = node.top,
        width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize;
      var _this$mindMap$opt3 = this.mindMap.opt,
        alwaysShowExpandBtn = _this$mindMap$opt3.alwaysShowExpandBtn,
        notShowExpandBtn = _this$mindMap$opt3.notShowExpandBtn;
      if (!alwaysShowExpandBtn || notShowExpandBtn) {
        expandBtnSize = 0;
      }
      node.children.forEach(function (item, index) {
        if (node.isRoot) {
          var prevBother = node;
          // 根节点的子节点是和根节点同一水平线排列
          node.children.forEach(function (item, index) {
            var y1 = prevBother.top + prevBother.height;
            var y2 = item.top;
            var x = node.left + node.width / 2;
            var path = "M ".concat(x, ",").concat(y1, " L ").concat(x, ",").concat(y2);
            _this10.setLineStyle(style, lines[index], path, item);
            prevBother = item;
          });
        } else {
          var x1 = item.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT ? left - expandBtnSize : left + width + expandBtnSize;
          var y1 = top + height / 2;
          var x2 = item.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT ? item.left + item.width : item.left;
          var y2 = item.top + item.height / 2;
          var path = _this10.cubicBezierPath(x1, y1, x2, y2);
          _this10.setLineStyle(style, lines[index], path, item);
        }
      });
    }

    //  渲染按钮
  }, {
    key: "renderExpandBtn",
    value: function renderExpandBtn(node, btn) {
      var width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize,
        isRoot = node.isRoot;
      if (!isRoot) {
        var _btn$transform = btn.transform(),
          translateX = _btn$transform.translateX,
          translateY = _btn$transform.translateY;
        if (node.dir === CONSTANTS.LAYOUT_GROW_DIR.RIGHT) {
          btn.translate(width - translateX, height / 2 - translateY);
        } else {
          btn.translate(-expandBtnSize - translateX, height / 2 - translateY);
        }
      }
    }

    //  创建概要节点
  }, {
    key: "renderGeneralization",
    value: function renderGeneralization(list) {
      var _this11 = this;
      list.forEach(function (item) {
        var isLeft = item.node.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT;
        var _this11$getNodeGenera = _this11.getNodeGeneralizationRenderBoundaries(item, 'h'),
          top = _this11$getNodeGenera.top,
          bottom = _this11$getNodeGenera.bottom,
          left = _this11$getNodeGenera.left,
          right = _this11$getNodeGenera.right,
          generalizationLineMargin = _this11$getNodeGenera.generalizationLineMargin,
          generalizationNodeMargin = _this11$getNodeGenera.generalizationNodeMargin;
        var x = isLeft ? left - generalizationLineMargin : right + generalizationLineMargin;
        var x1 = x;
        var y1 = top;
        var x2 = x;
        var y2 = bottom;
        var cx = x1 + (isLeft ? -20 : 20);
        var cy = y1 + (y2 - y1) / 2;
        var path = "M ".concat(x1, ",").concat(y1, " Q ").concat(cx, ",").concat(cy, " ").concat(x2, ",").concat(y2);
        item.generalizationLine.plot(_this11.transformPath(path));
        item.generalizationNode.left = x + (isLeft ? -generalizationNodeMargin : generalizationNodeMargin) - (isLeft ? item.generalizationNode.width : 0);
        item.generalizationNode.top = top + (bottom - top - item.generalizationNode.height) / 2;
      });
    }

    // 渲染展开收起按钮的隐藏占位元素
  }, {
    key: "renderExpandBtnRect",
    value: function renderExpandBtnRect(rect, expandBtnSize, width, height, node) {
      if (node.dir === CONSTANTS.LAYOUT_GROW_DIR.LEFT) {
        rect.size(expandBtnSize, height).x(-expandBtnSize).y(0);
      } else {
        rect.size(expandBtnSize, height).x(width).y(0);
      }
    }
  }]);
}(Base);

var utils = {
  top: {
    renderExpandBtn: function renderExpandBtn(_ref) {
      var node = _ref.node,
        btn = _ref.btn,
        expandBtnSize = _ref.expandBtnSize,
        translateX = _ref.translateX,
        translateY = _ref.translateY,
        width = _ref.width,
        height = _ref.height;
      if (node.parent && node.parent.isRoot) {
        btn.translate(width * 0.3 - expandBtnSize / 2 - translateX, -expandBtnSize / 2 - translateY);
      } else {
        btn.translate(width * 0.3 - expandBtnSize / 2 - translateX, height + expandBtnSize / 2 - translateY);
      }
    },
    renderLine: function renderLine(_ref2) {
      var node = _ref2.node,
        line = _ref2.line,
        top = _ref2.top,
        x = _ref2.x,
        lineLength = _ref2.lineLength,
        height = _ref2.height,
        expandBtnSize = _ref2.expandBtnSize,
        maxy = _ref2.maxy,
        ctx = _ref2.ctx;
      if (node.parent && node.parent.isRoot) {
        line.plot(ctx.transformPath("M ".concat(x, ",").concat(top, " L ").concat(x + lineLength, ",").concat(top - Math.tan(degToRad(ctx.mindMap.opt.fishboneDeg)) * lineLength)));
      } else {
        line.plot(ctx.transformPath("M ".concat(x, ",").concat(top + height + expandBtnSize, " L ").concat(x, ",").concat(maxy)));
      }
    },
    computedLeftTopValue: function computedLeftTopValue(_ref3) {
      var layerIndex = _ref3.layerIndex,
        node = _ref3.node,
        ctx = _ref3.ctx;
      if (layerIndex >= 1 && node.children) {
        // 遍历三级及以下节点的子节点
        var marginY = ctx.getMarginY(layerIndex + 1);
        var startLeft = node.left + node.width * ctx.childIndent;
        var totalTop = node.top + node.height + (ctx.getNodeActChildrenLength(node) > 0 ? node.expandBtnSize : 0) + marginY;
        node.children.forEach(function (item) {
          item.left = startLeft;
          item.top += totalTop;
          totalTop += item.height + (ctx.getNodeActChildrenLength(item) > 0 ? item.expandBtnSize : 0) + marginY;
        });
      }
    },
    adjustLeftTopValueBefore: function adjustLeftTopValueBefore(_ref4) {
      var node = _ref4.node,
        parent = _ref4.parent,
        ctx = _ref4.ctx,
        layerIndex = _ref4.layerIndex;
      // 调整top
      var len = node.children.length;
      var marginY = ctx.getMarginY(layerIndex + 1);
      // 调整三级及以下节点的top
      if (parent && !parent.isRoot && len > 0) {
        var totalHeight = node.children.reduce(function (h, item) {
          return h + item.height + (ctx.getNodeActChildrenLength(item) > 0 ? item.expandBtnSize : 0) + marginY;
        }, 0);
        ctx.updateBrothersTop(node, totalHeight);
      }
    },
    adjustLeftTopValueAfter: function adjustLeftTopValueAfter(_ref5) {
      var parent = _ref5.parent,
        node = _ref5.node,
        ctx = _ref5.ctx;
      // 将二级节点的子节点移到上方
      if (parent && parent.isRoot) {
        // 遍历二级节点的子节点
        var marginY = ctx.getMarginY(node.layerIndex + 1);
        var totalHeight = node.expandBtnSize + marginY;
        node.children.forEach(function (item) {
          // 调整top
          var nodeTotalHeight = ctx.getNodeAreaHeight(item);
          var _top = item.top;
          var _left = item.left;
          item.top = node.top - (item.top - node.top) - nodeTotalHeight + node.height;
          // 调整left
          item.left = node.left + node.width * ctx.indent + (nodeTotalHeight + totalHeight) / Math.tan(degToRad(ctx.mindMap.opt.fishboneDeg));
          totalHeight += nodeTotalHeight;
          // 同步更新后代节点
          ctx.updateChildrenPro(item.children, {
            top: item.top - _top,
            left: item.left - _left
          });
        });
      }
    }
  },
  bottom: {
    renderExpandBtn: function renderExpandBtn(_ref6) {
      var node = _ref6.node,
        btn = _ref6.btn,
        expandBtnSize = _ref6.expandBtnSize,
        translateX = _ref6.translateX,
        translateY = _ref6.translateY,
        width = _ref6.width,
        height = _ref6.height;
      if (node.parent && node.parent.isRoot) {
        btn.translate(width * 0.3 - expandBtnSize / 2 - translateX, height + expandBtnSize / 2 - translateY);
      } else {
        btn.translate(width * 0.3 - expandBtnSize / 2 - translateX, -expandBtnSize / 2 - translateY);
      }
    },
    renderLine: function renderLine(_ref7) {
      var node = _ref7.node,
        line = _ref7.line,
        top = _ref7.top,
        x = _ref7.x,
        lineLength = _ref7.lineLength,
        height = _ref7.height,
        miny = _ref7.miny,
        ctx = _ref7.ctx;
      if (node.parent && node.parent.isRoot) {
        line.plot(ctx.transformPath("M ".concat(x, ",").concat(top + height, " L ").concat(x + lineLength, ",").concat(top + height + Math.tan(degToRad(ctx.mindMap.opt.fishboneDeg)) * lineLength)));
      } else {
        line.plot(ctx.transformPath("M ".concat(x, ",").concat(top, " L ").concat(x, ",").concat(miny)));
      }
    },
    computedLeftTopValue: function computedLeftTopValue(_ref8) {
      var layerIndex = _ref8.layerIndex,
        node = _ref8.node,
        ctx = _ref8.ctx;
      var marginY = ctx.getMarginY(layerIndex + 1);
      if (layerIndex === 1 && node.children) {
        // 遍历二级节点的子节点
        var startLeft = node.left + node.width * ctx.childIndent;
        var totalTop = node.top + node.height + (ctx.getNodeActChildrenLength(node) > 0 ? node.expandBtnSize : 0) + marginY;
        node.children.forEach(function (item) {
          item.left = startLeft;
          item.top = totalTop + (ctx.getNodeActChildrenLength(item) > 0 ? item.expandBtnSize : 0);
          totalTop += item.height + (ctx.getNodeActChildrenLength(item) > 0 ? item.expandBtnSize : 0) + marginY;
        });
      }
      if (layerIndex > 1 && node.children) {
        // 遍历三级及以下节点的子节点
        var _startLeft = node.left + node.width * ctx.childIndent;
        var _totalTop = node.top - (ctx.getNodeActChildrenLength(node) > 0 ? node.expandBtnSize : 0) - marginY;
        node.children.forEach(function (item) {
          item.left = _startLeft;
          item.top = _totalTop - item.height;
          _totalTop -= item.height + (ctx.getNodeActChildrenLength(item) > 0 ? item.expandBtnSize : 0) + marginY;
        });
      }
    },
    adjustLeftTopValueBefore: function adjustLeftTopValueBefore(_ref9) {
      var node = _ref9.node,
        ctx = _ref9.ctx,
        layerIndex = _ref9.layerIndex;
      // 调整top
      var marginY = ctx.getMarginY(layerIndex + 1);
      var len = node.children.length;
      if (layerIndex > 2 && len > 0) {
        var totalHeight = node.children.reduce(function (h, item) {
          return h + item.height + (ctx.getNodeActChildrenLength(item) > 0 ? item.expandBtnSize : 0) + marginY;
        }, 0);
        ctx.updateBrothersTop(node, -totalHeight);
      }
    },
    adjustLeftTopValueAfter: function adjustLeftTopValueAfter(_ref10) {
      var parent = _ref10.parent,
        node = _ref10.node,
        ctx = _ref10.ctx;
      // 将二级节点的子节点移到上方
      if (parent && parent.isRoot) {
        // 遍历二级节点的子节点
        var marginY = ctx.getMarginY(node.layerIndex + 1);
        var totalHeight = 0;
        var totalHeight2 = node.expandBtnSize;
        node.children.forEach(function (item) {
          // 调整top
          var hasChildren = ctx.getNodeActChildrenLength(item) > 0;
          var nodeTotalHeight = ctx.getNodeAreaHeight(item);
          var offset = hasChildren ? nodeTotalHeight - item.height - (hasChildren ? item.expandBtnSize : 0) : 0;
          offset -= hasChildren ? marginY : 0;
          var _top = totalHeight + offset;
          var _left = item.left;
          item.top += _top;
          // 调整left
          item.left = node.left + node.width * ctx.indent + (nodeTotalHeight + totalHeight2) / Math.tan(degToRad(ctx.mindMap.opt.fishboneDeg));
          totalHeight += offset;
          totalHeight2 += nodeTotalHeight;
          // 同步更新后代节点
          ctx.updateChildrenPro(item.children, {
            top: _top,
            left: item.left - _left
          });
        });
      }
    }
  }
};

//  鱼骨图
var Fishbone = /*#__PURE__*/function (_Base) {
  //  构造函数
  function Fishbone() {
    var _this;
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Fishbone);
    _this = _callSuper(this, Fishbone, [opt]);
    _this.indent = 0.3;
    _this.childIndent = 0.5;
    return _this;
  }

  //  布局
  _inherits(Fishbone, _Base);
  return _createClass(Fishbone, [{
    key: "doLayout",
    value: function doLayout(callback) {
      var _this2 = this;
      var task = [function () {
        _this2.computedBaseValue();
      }, function () {
        _this2.computedLeftTopValue();
      }, function () {
        _this2.adjustLeftTopValue();
      }, function () {
        callback(_this2.root);
      }];
      asyncRun(task);
    }

    //  遍历数据创建节点、计算根节点的位置，计算根节点的子节点的top值
  }, {
    key: "computedBaseValue",
    value: function computedBaseValue() {
      var _this3 = this;
      _walk(this.renderer.renderTree, null, function (node, parent, isRoot, layerIndex, index, ancestors) {
        // 创建节点
        var newNode = _this3.createNode(node, parent, isRoot, layerIndex, index, ancestors);
        // 根节点定位在画布中心位置
        if (isRoot) {
          _this3.setNodeCenter(newNode);
        } else {
          // 非根节点
          // 三级及以下节点以上级方向为准
          if (parent._node.dir) {
            newNode.dir = parent._node.dir;
          } else {
            // 节点生长方向
            newNode.dir = index % 2 === 0 ? CONSTANTS.LAYOUT_GROW_DIR.TOP : CONSTANTS.LAYOUT_GROW_DIR.BOTTOM;
          }
          // 计算二级节点的top值
          if (parent._node.isRoot) {
            var marginY = _this3.getMarginY(layerIndex);
            if (_this3.checkIsTop(newNode)) {
              newNode.top = parent._node.top - newNode.height - marginY;
            } else {
              newNode.top = parent._node.top + parent._node.height + marginY;
            }
          }
        }
        if (!node.data.expand) {
          return true;
        }
      }, null, true, 0);
    }

    //  遍历节点树计算节点的left、top
  }, {
    key: "computedLeftTopValue",
    value: function computedLeftTopValue() {
      var _this4 = this;
      _walk(this.root, null, function (node, parent, isRoot, layerIndex) {
        if (node.isRoot) {
          var marginX = _this4.getMarginX(layerIndex + 1);
          var topTotalLeft = node.left + node.width + node.height + marginX;
          var bottomTotalLeft = node.left + node.width + node.height + marginX;
          node.children.forEach(function (item) {
            if (_this4.checkIsTop(item)) {
              item.left = topTotalLeft;
              topTotalLeft += item.width + marginX;
            } else {
              item.left = bottomTotalLeft + 20;
              bottomTotalLeft += item.width + marginX;
            }
          });
        }
        var params = {
          layerIndex: layerIndex,
          node: node,
          ctx: _this4
        };
        if (_this4.checkIsTop(node)) {
          utils.top.computedLeftTopValue(params);
        } else {
          utils.bottom.computedLeftTopValue(params);
        }
      }, null, true);
    }

    //  调整节点left、top
  }, {
    key: "adjustLeftTopValue",
    value: function adjustLeftTopValue() {
      var _this5 = this;
      _walk(this.root, null, function (node, parent, isRoot, layerIndex) {
        if (!node.getData('expand')) {
          return;
        }
        var params = {
          node: node,
          parent: parent,
          layerIndex: layerIndex,
          ctx: _this5
        };
        if (_this5.checkIsTop(node)) {
          utils.top.adjustLeftTopValueBefore(params);
        } else {
          utils.bottom.adjustLeftTopValueBefore(params);
        }
      }, function (node, parent) {
        var params = {
          parent: parent,
          node: node,
          ctx: _this5
        };
        if (_this5.checkIsTop(node)) {
          utils.top.adjustLeftTopValueAfter(params);
        } else {
          utils.bottom.adjustLeftTopValueAfter(params);
        }
        // 调整二级节点的子节点的left值
        if (node.isRoot) {
          var topTotalLeft = 0;
          var bottomTotalLeft = 0;
          node.children.forEach(function (item) {
            if (_this5.checkIsTop(item)) {
              item.left += topTotalLeft;
              _this5.updateChildren(item.children, 'left', topTotalLeft);
              var _this5$getNodeBoundar = _this5.getNodeBoundaries(item, 'h'),
                left = _this5$getNodeBoundar.left,
                right = _this5$getNodeBoundar.right;
              topTotalLeft += right - left;
            } else {
              item.left += bottomTotalLeft;
              _this5.updateChildren(item.children, 'left', bottomTotalLeft);
              var _this5$getNodeBoundar2 = _this5.getNodeBoundaries(item, 'h'),
                _left = _this5$getNodeBoundar2.left,
                _right = _this5$getNodeBoundar2.right;
              bottomTotalLeft += _right - _left;
            }
          });
        }
      }, true);
    }

    //  递归计算节点的宽度
  }, {
    key: "getNodeAreaHeight",
    value: function getNodeAreaHeight(node) {
      var _this6 = this;
      var totalHeight = 0;
      var _loop = function loop(node) {
        var marginY = _this6.getMarginY(node.layerIndex);
        totalHeight += node.height + (_this6.getNodeActChildrenLength(node) > 0 ? node.expandBtnSize : 0) + marginY;
        if (node.children.length) {
          node.children.forEach(function (item) {
            _loop(item);
          });
        }
      };
      _loop(node);
      return totalHeight;
    }

    //  调整兄弟节点的left
  }, {
    key: "updateBrothersLeft",
    value: function updateBrothersLeft(node) {
      var _this7 = this;
      var childrenList = node.children;
      var totalAddWidth = 0;
      childrenList.forEach(function (item) {
        item.left += totalAddWidth;
        if (item.children && item.children.length) {
          _this7.updateChildren(item.children, 'left', totalAddWidth);
        }
        var _this7$getNodeBoundar = _this7.getNodeBoundaries(item, 'h'),
          left = _this7$getNodeBoundar.left,
          right = _this7$getNodeBoundar.right;
        var areaWidth = right - left;
        var difference = areaWidth - item.width;
        if (difference > 0) {
          totalAddWidth += difference;
        }
      });
    }

    //  调整兄弟节点的top
  }, {
    key: "updateBrothersTop",
    value: function updateBrothersTop(node, addHeight) {
      var _this8 = this;
      if (node.parent && !node.parent.isRoot) {
        var childrenList = node.parent.children;
        var index = getNodeIndexInNodeList(node, childrenList);
        childrenList.forEach(function (item, _index) {
          if (item.hasCustomPosition()) {
            // 适配自定义位置
            return;
          }
          var _offset = 0;
          // 下面的节点往下移
          if (_index > index) {
            _offset = addHeight;
          }
          item.top += _offset;
          // 同步更新子节点的位置
          if (item.children && item.children.length) {
            _this8.updateChildren(item.children, 'top', _offset);
          }
        });
        // 更新父节点的位置
        if (this.checkIsTop(node)) {
          this.updateBrothersTop(node.parent, addHeight);
        } else {
          this.updateBrothersTop(node.parent, node.layerIndex === 3 ? 0 : addHeight);
        }
      }
    }

    // 检查节点是否是上方节点
  }, {
    key: "checkIsTop",
    value: function checkIsTop(node) {
      return node.dir === CONSTANTS.LAYOUT_GROW_DIR.TOP;
    }

    //  绘制连线，连接该节点到其子节点
  }, {
    key: "renderLine",
    value: function renderLine(node, lines, style) {
      var _this9 = this;
      if (node.layerIndex !== 1 && node.children.length <= 0) {
        return [];
      }
      var top = node.top,
        height = node.height,
        expandBtnSize = node.expandBtnSize;
      var _this$mindMap$opt = this.mindMap.opt,
        alwaysShowExpandBtn = _this$mindMap$opt.alwaysShowExpandBtn,
        notShowExpandBtn = _this$mindMap$opt.notShowExpandBtn;
      if (!alwaysShowExpandBtn || notShowExpandBtn) {
        expandBtnSize = 0;
      }
      var len = node.children.length;
      if (node.isRoot) {
        // 当前节点是根节点
        // 根节点的子节点是和根节点同一水平线排列
        var maxx = -Infinity;
        node.children.forEach(function (item) {
          if (item.left > maxx) {
            maxx = item.left;
          }
          // 水平线段到二级节点的连线
          var marginY = _this9.getMarginY(item.layerIndex);
          var nodeLineX = item.left;
          var offset = node.height / 2 + marginY;
          var offsetX = offset / Math.tan(degToRad(_this9.mindMap.opt.fishboneDeg));
          var line = _this9.lineDraw.path();
          if (_this9.checkIsTop(item)) {
            line.plot(_this9.transformPath("M ".concat(nodeLineX - offsetX, ",").concat(item.top + item.height + offset, " L ").concat(item.left, ",").concat(item.top + item.height)));
          } else {
            line.plot(_this9.transformPath("M ".concat(nodeLineX - offsetX, ",").concat(item.top - offset, " L ").concat(nodeLineX, ",").concat(item.top)));
          }
          node.style.line(line);
          node._lines.push(line);
          style && style(line, node);
        });
        // 从根节点出发的水平线
        var nodeHalfTop = node.top + node.height / 2;
        var offset = node.height / 2 + this.getMarginY(node.layerIndex + 1);
        var line = this.lineDraw.path();
        line.plot(this.transformPath("M ".concat(node.left + node.width, ",").concat(nodeHalfTop, " L ").concat(maxx - offset / Math.tan(degToRad(this.mindMap.opt.fishboneDeg)), ",").concat(nodeHalfTop)));
        node.style.line(line);
        node._lines.push(line);
        style && style(line, node);
      } else {
        // 当前节点为非根节点
        var maxy = -Infinity;
        var miny = Infinity;
        var _maxx = -Infinity;
        var x = node.left + node.width * this.indent;
        node.children.forEach(function (item, index) {
          if (item.left > _maxx) {
            _maxx = item.left;
          }
          var y = item.top + item.height / 2;
          if (y > maxy) {
            maxy = y;
          }
          if (y < miny) {
            miny = y;
          }
          // 水平线
          if (node.layerIndex > 1) {
            var path = "M ".concat(x, ",").concat(y, " L ").concat(item.left, ",").concat(y);
            _this9.setLineStyle(style, lines[index], path, item);
          }
        });
        // 斜线
        if (len >= 0) {
          var _line = this.lineDraw.path();
          expandBtnSize = len > 0 ? expandBtnSize : 0;
          var lineLength = _maxx - node.left - node.width * this.indent;
          lineLength = Math.max(lineLength, 0);
          var params = {
            node: node,
            line: _line,
            top: top,
            x: x,
            lineLength: lineLength,
            height: height,
            expandBtnSize: expandBtnSize,
            maxy: maxy,
            miny: miny,
            ctx: this
          };
          if (this.checkIsTop(node)) {
            utils.top.renderLine(params);
          } else {
            utils.bottom.renderLine(params);
          }
          node.style.line(_line);
          node._lines.push(_line);
          style && style(_line, node);
        }
      }
    }

    //  渲染按钮
  }, {
    key: "renderExpandBtn",
    value: function renderExpandBtn(node, btn) {
      var width = node.width,
        height = node.height,
        expandBtnSize = node.expandBtnSize,
        isRoot = node.isRoot;
      if (!isRoot) {
        var _btn$transform = btn.transform(),
          translateX = _btn$transform.translateX,
          translateY = _btn$transform.translateY;
        var params = {
          node: node,
          btn: btn,
          expandBtnSize: expandBtnSize,
          translateX: translateX,
          translateY: translateY,
          width: width,
          height: height
        };
        if (this.checkIsTop(node)) {
          utils.top.renderExpandBtn(params);
        } else {
          utils.bottom.renderExpandBtn(params);
        }
      }
    }

    //  创建概要节点
  }, {
    key: "renderGeneralization",
    value: function renderGeneralization(list) {
      var _this10 = this;
      list.forEach(function (item) {
        var _this10$getNodeGenera = _this10.getNodeGeneralizationRenderBoundaries(item, 'h'),
          top = _this10$getNodeGenera.top,
          bottom = _this10$getNodeGenera.bottom,
          right = _this10$getNodeGenera.right,
          generalizationLineMargin = _this10$getNodeGenera.generalizationLineMargin,
          generalizationNodeMargin = _this10$getNodeGenera.generalizationNodeMargin;
        var x1 = right + generalizationLineMargin;
        var y1 = top;
        var x2 = right + generalizationLineMargin;
        var y2 = bottom;
        var cx = x1 + 20;
        var cy = y1 + (y2 - y1) / 2;
        var path = "M ".concat(x1, ",").concat(y1, " Q ").concat(cx, ",").concat(cy, " ").concat(x2, ",").concat(y2);
        item.generalizationLine.plot(_this10.transformPath(path));
        item.generalizationNode.left = right + generalizationNodeMargin;
        item.generalizationNode.top = top + (bottom - top - item.generalizationNode.height) / 2;
      });
    }

    // 渲染展开收起按钮的隐藏占位元素
  }, {
    key: "renderExpandBtnRect",
    value: function renderExpandBtnRect(rect, expandBtnSize, width, height, node) {
      var dir = '';
      if (node.dir === CONSTANTS.LAYOUT_GROW_DIR.TOP) {
        dir = node.layerIndex === 1 ? CONSTANTS.LAYOUT_GROW_DIR.TOP : CONSTANTS.LAYOUT_GROW_DIR.BOTTOM;
      } else {
        dir = node.layerIndex === 1 ? CONSTANTS.LAYOUT_GROW_DIR.BOTTOM : CONSTANTS.LAYOUT_GROW_DIR.TOP;
      }
      if (dir === CONSTANTS.LAYOUT_GROW_DIR.TOP) {
        rect.size(width, expandBtnSize).x(0).y(-expandBtnSize);
      } else {
        rect.size(width, expandBtnSize).x(0).y(height);
      }
    }
  }]);
}(Base);

//  节点文字编辑类
var TextEdit = /*#__PURE__*/function () {
  //  构造函数
  function TextEdit(renderer) {
    _classCallCheck(this, TextEdit);
    this.renderer = renderer;
    this.mindMap = renderer.mindMap;
    // 当前编辑的节点
    this.currentNode = null;
    // 文本编辑框
    this.textEditNode = null;
    // 文本编辑框是否显示
    this.showTextEdit = false;
    // 如果编辑过程中缩放画布了，那么缓存当前编辑的内容
    this.cacheEditingText = '';
    this.hasBodyMousedown = false;
    this.textNodePaddingX = 5;
    this.textNodePaddingY = 3;
    this.bindEvent();
  }

  //  事件
  return _createClass(TextEdit, [{
    key: "bindEvent",
    value: function bindEvent() {
      var _this = this;
      this.show = this.show.bind(this);
      this.onScale = this.onScale.bind(this);
      this.onKeydown = this.onKeydown.bind(this);
      // 节点双击事件
      this.mindMap.on('node_dblclick', function (node, e, isInserting) {
        _this.show({
          node: node,
          e: e,
          isInserting: isInserting
        });
      });
      // 点击事件
      this.mindMap.on('draw_click', function () {
        // 隐藏文本编辑框
        _this.hideEditTextBox();
      });
      this.mindMap.on('body_mousedown', function () {
        _this.hasBodyMousedown = true;
      });
      this.mindMap.on('body_click', function () {
        if (!_this.hasBodyMousedown) return;
        _this.hasBodyMousedown = false;
        // 隐藏文本编辑框
        if (_this.mindMap.opt.isEndNodeTextEditOnClickOuter) {
          _this.hideEditTextBox();
        }
      });
      this.mindMap.on('svg_mousedown', function () {
        // 隐藏文本编辑框
        _this.hideEditTextBox();
      });
      // 展开收缩按钮点击事件
      this.mindMap.on('expand_btn_click', function () {
        _this.hideEditTextBox();
      });
      // 节点激活前事件
      this.mindMap.on('before_node_active', function () {
        _this.hideEditTextBox();
      });
      // 鼠标滚动事件
      this.mindMap.on('mousewheel', function () {
        if (_this.mindMap.opt.mousewheelAction === CONSTANTS.MOUSE_WHEEL_ACTION.MOVE) {
          _this.hideEditTextBox();
        }
      });
      // 注册编辑快捷键
      this.mindMap.keyCommand.addShortcut('F2', function () {
        if (_this.renderer.activeNodeList.length <= 0) {
          return;
        }
        _this.show({
          node: _this.renderer.activeNodeList[0]
        });
      });
      this.mindMap.on('scale', this.onScale);
      // // 监听按键事件，判断是否自动进入文本编辑模式
      if (this.mindMap.opt.enableAutoEnterTextEditWhenKeydown) {
        window.addEventListener('keydown', this.onKeydown);
      }
      this.mindMap.on('beforeDestroy', function () {
        _this.unBindEvent();
      });
      this.mindMap.on('after_update_config', function (opt, lastOpt) {
        if (opt.openRealtimeRenderOnNodeTextEdit !== lastOpt.openRealtimeRenderOnNodeTextEdit) {
          if (_this.mindMap.richText) {
            _this.mindMap.richText.onOpenRealtimeRenderOnNodeTextEditConfigUpdate(opt.openRealtimeRenderOnNodeTextEdit);
          } else {
            _this.onOpenRealtimeRenderOnNodeTextEditConfigUpdate(opt.openRealtimeRenderOnNodeTextEdit);
          }
        }
        if (opt.enableAutoEnterTextEditWhenKeydown !== lastOpt.enableAutoEnterTextEditWhenKeydown) {
          window[opt.enableAutoEnterTextEditWhenKeydown ? 'addEventListener' : 'removeEventListener']('keydown', _this.onKeydown);
        }
      });
    }

    // 解绑事件
  }, {
    key: "unBindEvent",
    value: function unBindEvent() {
      window.removeEventListener('keydown', this.onKeydown);
    }

    // 按键事件
  }, {
    key: "onKeydown",
    value: function onKeydown(e) {
      if (e.target !== document.body) return;
      var activeNodeList = this.mindMap.renderer.activeNodeList;
      if (activeNodeList.length <= 0 || activeNodeList.length > 1) return;
      var node = activeNodeList[0];
      // 当正在输入中文或英文或数字时，如果没有按下组合键，那么自动进入文本编辑模式
      if (node && this.checkIsAutoEnterTextEditKey(e)) {
        this.show({
          node: node,
          e: e,
          isInserting: false,
          isFromKeyDown: true
        });
      }
    }

    // 判断是否是自动进入文本编模式的按钮
  }, {
    key: "checkIsAutoEnterTextEditKey",
    value: function checkIsAutoEnterTextEditKey(e) {
      var keyCode = e.keyCode;
      return (keyCode === 229 || keyCode >= 65 && keyCode <= 90 || keyCode >= 48 && keyCode <= 57) && !this.mindMap.keyCommand.hasCombinationKey(e);
    }

    //  注册临时快捷键
  }, {
    key: "registerTmpShortcut",
    value: function registerTmpShortcut() {
      var _this2 = this;
      // 注册回车快捷键
      this.mindMap.keyCommand.addShortcut('Enter', function () {
        _this2.hideEditTextBox();
      });
      this.mindMap.keyCommand.addShortcut('Tab', function () {
        _this2.hideEditTextBox();
      });
    }

    // 获取当前文本编辑框是否处于显示状态，也就是是否处在文本编辑状态
  }, {
    key: "isShowTextEdit",
    value: function isShowTextEdit() {
      if (this.mindMap.richText) {
        return this.mindMap.richText.showTextEdit;
      }
      return this.showTextEdit;
    }

    //  显示文本编辑框
    // isInserting：是否是刚创建的节点
    // isFromKeyDown：是否是在按键事件进入的编辑
  }, {
    key: "show",
    value: function () {
      var _show = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
        var node, _ref$isInserting, isInserting, _ref$isFromKeyDown, isFromKeyDown, _ref$isFromScale, isFromScale, _this$mindMap$opt, beforeTextEdit, openRealtimeRenderOnNodeTextEdit, isShow, _checkNodeOuter, offsetLeft, offsetTop, g, rect, params;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              node = _ref.node, _ref$isInserting = _ref.isInserting, isInserting = _ref$isInserting === void 0 ? false : _ref$isInserting, _ref$isFromKeyDown = _ref.isFromKeyDown, isFromKeyDown = _ref$isFromKeyDown === void 0 ? false : _ref$isFromKeyDown, _ref$isFromScale = _ref.isFromScale, isFromScale = _ref$isFromScale === void 0 ? false : _ref$isFromScale;
              if (!node.isUseCustomNodeContent()) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");
            case 3:
              _this$mindMap$opt = this.mindMap.opt, beforeTextEdit = _this$mindMap$opt.beforeTextEdit, openRealtimeRenderOnNodeTextEdit = _this$mindMap$opt.openRealtimeRenderOnNodeTextEdit;
              if (!(typeof beforeTextEdit === 'function')) {
                _context.next = 18;
                break;
              }
              isShow = false;
              _context.prev = 6;
              _context.next = 9;
              return beforeTextEdit(node, isInserting);
            case 9:
              isShow = _context.sent;
              _context.next = 16;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](6);
              isShow = false;
              this.mindMap.opt.errorHandler(ERROR_TYPES.BEFORE_TEXT_EDIT_ERROR, _context.t0);
            case 16:
              if (isShow) {
                _context.next = 18;
                break;
              }
              return _context.abrupt("return");
            case 18:
              this.currentNode = node;
              _checkNodeOuter = checkNodeOuter(this.mindMap, node), offsetLeft = _checkNodeOuter.offsetLeft, offsetTop = _checkNodeOuter.offsetTop;
              this.mindMap.view.translateXY(offsetLeft, offsetTop);
              g = node._textData.node;
              rect = g.node.getBoundingClientRect(); // 如果开启了大小实时更新，那么直接隐藏节点原文本
              if (openRealtimeRenderOnNodeTextEdit) {
                g.hide();
              }
              params = {
                node: node,
                rect: rect,
                isInserting: isInserting,
                isFromKeyDown: isFromKeyDown,
                isFromScale: isFromScale
              };
              if (!this.mindMap.richText) {
                _context.next = 28;
                break;
              }
              this.mindMap.richText.showEditText(params);
              return _context.abrupt("return");
            case 28:
              this.showEditTextBox(params);
            case 29:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[6, 12]]);
      }));
      function show(_x) {
        return _show.apply(this, arguments);
      }
      return show;
    }() // 当openRealtimeRenderOnNodeTextEdit配置更新后需要更新编辑框样式
  }, {
    key: "onOpenRealtimeRenderOnNodeTextEditConfigUpdate",
    value: function onOpenRealtimeRenderOnNodeTextEditConfigUpdate(openRealtimeRenderOnNodeTextEdit) {
      if (!this.textEditNode) return;
      this.textEditNode.style.background = openRealtimeRenderOnNodeTextEdit ? 'transparent' : this.currentNode ? this.getBackground(this.currentNode) : '';
      this.textEditNode.style.boxShadow = openRealtimeRenderOnNodeTextEdit ? 'none' : '0 0 20px rgba(0,0,0,.5)';
    }

    // 处理画布缩放
  }, {
    key: "onScale",
    value: function onScale() {
      var node = this.getCurrentEditNode();
      if (!node) return;
      if (this.mindMap.richText) {
        this.mindMap.richText.cacheEditingText = this.mindMap.richText.getEditText();
        this.mindMap.richText.showTextEdit = false;
      } else {
        this.cacheEditingText = this.getEditText();
        this.showTextEdit = false;
      }
      this.show({
        node: node,
        isFromScale: true
      });
    }

    //  显示文本编辑框
  }, {
    key: "showEditTextBox",
    value: function showEditTextBox(_ref2) {
      var _this3 = this;
      var node = _ref2.node,
        rect = _ref2.rect,
        isInserting = _ref2.isInserting,
        isFromKeyDown = _ref2.isFromKeyDown,
        isFromScale = _ref2.isFromScale;
      if (this.showTextEdit) return;
      var _this$mindMap$opt2 = this.mindMap.opt,
        nodeTextEditZIndex = _this$mindMap$opt2.nodeTextEditZIndex,
        textAutoWrapWidth = _this$mindMap$opt2.textAutoWrapWidth,
        selectTextOnEnterEditText = _this$mindMap$opt2.selectTextOnEnterEditText,
        openRealtimeRenderOnNodeTextEdit = _this$mindMap$opt2.openRealtimeRenderOnNodeTextEdit,
        autoEmptyTextWhenKeydownEnterEdit = _this$mindMap$opt2.autoEmptyTextWhenKeydownEnterEdit;
      if (!isFromScale) {
        this.mindMap.emit('before_show_text_edit');
      }
      this.registerTmpShortcut();
      if (!this.textEditNode) {
        this.textEditNode = document.createElement('div');
        this.textEditNode.classList.add(CONSTANTS.EDIT_NODE_CLASS.SMM_NODE_EDIT_WRAP);
        this.textEditNode.style.cssText = "\n        position: fixed;\n        box-sizing: border-box;\n        ".concat(openRealtimeRenderOnNodeTextEdit ? '' : "box-shadow: 0 0 20px rgba(0,0,0,.5);", "\n        padding: ").concat(this.textNodePaddingY, "px ").concat(this.textNodePaddingX, "px;\n        margin-left: -").concat(this.textNodePaddingX, "px;\n        margin-top: -").concat(this.textNodePaddingY, "px;\n        outline: none; \n        word-break: break-all;\n        line-break: anywhere;\n      ");
        this.textEditNode.setAttribute('contenteditable', true);
        this.textEditNode.addEventListener('keyup', function (e) {
          e.stopPropagation();
        });
        this.textEditNode.addEventListener('click', function (e) {
          e.stopPropagation();
        });
        this.textEditNode.addEventListener('mousedown', function (e) {
          e.stopPropagation();
        });
        this.textEditNode.addEventListener('keydown', function (e) {
          if (_this3.checkIsAutoEnterTextEditKey(e)) {
            e.stopPropagation();
          }
        });
        this.textEditNode.addEventListener('paste', function (e) {
          var text = e.clipboardData.getData('text');
          var _checkSmmFormatData = checkSmmFormatData(text),
            isSmm = _checkSmmFormatData.isSmm,
            data = _checkSmmFormatData.data;
          if (isSmm && data[0] && data[0].data) {
            // 只取第一个节点的纯文本
            handleInputPasteText(e, getTextFromHtml(data[0].data.text));
          } else {
            handleInputPasteText(e);
          }
        });
        this.textEditNode.addEventListener('input', function () {
          _this3.mindMap.emit('node_text_edit_change', {
            node: _this3.currentNode,
            text: _this3.getEditText(),
            richText: false
          });
        });
        var targetNode = this.mindMap.opt.customInnerElsAppendTo || document.body;
        targetNode.appendChild(this.textEditNode);
      }
      var scale = this.mindMap.view.scale;
      var fontSize = node.style.merge('fontSize');
      var textLines = (this.cacheEditingText || node.getData('text')).split(/\n/gim).map(function (item) {
        return htmlEscape(item);
      });
      var isMultiLine = node._textData.node.attr('data-ismultiLine') === 'true';
      node.style.domText(this.textEditNode, scale);
      if (!openRealtimeRenderOnNodeTextEdit) {
        this.textEditNode.style.background = this.getBackground(node);
      }
      this.textEditNode.style.zIndex = nodeTextEditZIndex;
      if (isFromKeyDown && autoEmptyTextWhenKeydownEnterEdit) {
        this.textEditNode.innerHTML = '';
      } else {
        this.textEditNode.innerHTML = textLines.join('<br>');
      }
      this.textEditNode.style.minWidth = rect.width + this.textNodePaddingX * 2 + 'px';
      this.textEditNode.style.minHeight = rect.height + 'px';
      this.textEditNode.style.left = rect.left + 'px';
      this.textEditNode.style.top = rect.top + 'px';
      this.textEditNode.style.display = 'block';
      this.textEditNode.style.maxWidth = textAutoWrapWidth * scale + 'px';
      if (isMultiLine) {
        this.textEditNode.style.lineHeight = noneRichTextNodeLineHeight;
        this.textEditNode.style.transform = "translateY(".concat((noneRichTextNodeLineHeight - 1) * fontSize / 2 * scale, "px)");
      } else {
        this.textEditNode.style.lineHeight = 'normal';
      }
      this.showTextEdit = true;
      // 选中文本
      // if (!this.cacheEditingText) {
      //   selectAllInput(this.textEditNode)
      // }
      if (isInserting || selectTextOnEnterEditText && !isFromKeyDown) {
        selectAllInput(this.textEditNode);
      } else {
        focusInput(this.textEditNode);
      }
      this.cacheEditingText = '';
    }

    // 更新文本编辑框的大小和位置
  }, {
    key: "updateTextEditNode",
    value: function updateTextEditNode() {
      if (this.mindMap.richText) {
        this.mindMap.richText.updateTextEditNode();
        return;
      }
      if (!this.showTextEdit || !this.currentNode) {
        return;
      }
      var rect = this.currentNode._textData.node.node.getBoundingClientRect();
      this.textEditNode.style.minWidth = rect.width + this.textNodePaddingX * 2 + 'px';
      this.textEditNode.style.minHeight = rect.height + this.textNodePaddingY * 2 + 'px';
      this.textEditNode.style.left = rect.left + 'px';
      this.textEditNode.style.top = rect.top + 'px';
    }

    // 获取编辑区域的背景填充
  }, {
    key: "getBackground",
    value: function getBackground(node) {
      var gradientStyle = node.style.merge('gradientStyle');
      // 当前使用的是渐变色背景
      if (gradientStyle) {
        var startColor = node.style.merge('startColor');
        var endColor = node.style.merge('endColor');
        return "linear-gradient(to right, ".concat(startColor, ", ").concat(endColor, ")");
      } else {
        // 单色背景
        var bgColor = node.style.merge('fillColor');
        var color = node.style.merge('color');
        // 默认使用节点的填充色，否则如果节点颜色是白色的话编辑时看不见
        return bgColor === 'transparent' ? isWhite(color) ? getVisibleColorFromTheme(this.mindMap.themeConfig) : '#fff' : bgColor;
      }
    }

    // 删除文本编辑元素
  }, {
    key: "removeTextEditEl",
    value: function removeTextEditEl() {
      if (this.mindMap.richText) {
        this.mindMap.richText.removeTextEditEl();
        return;
      }
      if (!this.textEditNode) return;
      var targetNode = this.mindMap.opt.customInnerElsAppendTo || document.body;
      targetNode.removeChild(this.textEditNode);
    }

    // 获取当前正在编辑的内容
  }, {
    key: "getEditText",
    value: function getEditText() {
      return getStrWithBrFromHtml(this.textEditNode.innerHTML);
    }

    //  隐藏文本编辑框
  }, {
    key: "hideEditTextBox",
    value: function hideEditTextBox() {
      if (this.mindMap.richText) {
        return this.mindMap.richText.hideEditText();
      }
      if (!this.showTextEdit) {
        return;
      }
      var currentNode = this.currentNode;
      var text = this.getEditText();
      this.currentNode = null;
      this.textEditNode.style.display = 'none';
      this.textEditNode.innerHTML = '';
      this.textEditNode.style.fontFamily = 'inherit';
      this.textEditNode.style.fontSize = 'inherit';
      this.textEditNode.style.fontWeight = 'normal';
      this.textEditNode.style.transform = 'translateY(0)';
      this.showTextEdit = false;
      this.mindMap.execCommand('SET_NODE_TEXT', currentNode, text);
      // if (currentNode.isGeneralization) {
      //   // 概要节点
      //   currentNode.generalizationBelongNode.updateGeneralization()
      // }
      this.mindMap.render();
      this.mindMap.emit('hide_text_edit', this.textEditNode, this.renderer.activeNodeList, currentNode);
    }

    // 获取当前正在编辑中的节点实例
  }, {
    key: "getCurrentEditNode",
    value: function getCurrentEditNode() {
      if (this.mindMap.richText) {
        return this.mindMap.richText.node;
      }
      return this.currentNode;
    }
  }]);
}();

// 布局列表
var layouts = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CONSTANTS.LAYOUT.LOGICAL_STRUCTURE, LogicalStructure), CONSTANTS.LAYOUT.LOGICAL_STRUCTURE_LEFT, LogicalStructure), CONSTANTS.LAYOUT.MIND_MAP, MindMap$1), CONSTANTS.LAYOUT.CATALOG_ORGANIZATION, CatalogOrganization), CONSTANTS.LAYOUT.ORGANIZATION_STRUCTURE, OrganizationStructure), CONSTANTS.LAYOUT.TIMELINE, Timeline), CONSTANTS.LAYOUT.TIMELINE2, Timeline), CONSTANTS.LAYOUT.VERTICAL_TIMELINE, VerticalTimeline), CONSTANTS.LAYOUT.FISHBONE, Fishbone);

//  渲染
var Render = /*#__PURE__*/function () {
  //  构造函数
  function Render() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Render);
    this.opt = opt;
    this.mindMap = opt.mindMap;
    this.themeConfig = this.mindMap.themeConfig;
    // 渲染树，操作过程中修改的都是这里的数据
    this.renderTree = this.mindMap.opt.data ? deepmerge_1({}, this.mindMap.opt.data) : null;
    // 是否重新渲染
    this.reRender = false;
    // 是否正在渲染中
    this.isRendering = false;
    // 是否存在等待渲染
    this.hasWaitRendering = false;
    this.waitRenderingParams = [];
    // 用于缓存节点
    this.nodeCache = {};
    this.lastNodeCache = {};
    // 触发render的来源
    this.renderSource = '';
    // 当前激活的节点列表
    this.activeNodeList = [];
    // 根节点
    this.root = null;
    // 文本编辑框，需要再bindEvent之前实例化，否则单击事件只能触发隐藏文本编辑框，而无法保存文本修改
    this.textEdit = new TextEdit(this);
    // 当前复制的数据
    this.beingCopyData = null;
    // 节点高亮框
    this.highlightBoxNode = null;
    this.highlightBoxNodeStyle = null;
    // 上一次节点激活数据
    this.lastActiveNodeList = [];
    // 布局
    this.setLayout();
    // 绑定事件
    this.bindEvent();
    // 注册命令
    this.registerCommands();
    // 注册快捷键
    this.registerShortcutKeys();
  }

  //  设置布局结构
  return _createClass(Render, [{
    key: "setLayout",
    value: function setLayout() {
      var layout = this.mindMap.opt.layout;
      this.layout = new (layouts[layout] ? layouts[layout] : layouts[CONSTANTS.LAYOUT.LOGICAL_STRUCTURE])(this, layout);
    }

    // 重新设置思维导图数据
  }, {
    key: "setData",
    value: function setData(data) {
      this.renderTree = data || null;
    }

    //   绑定事件
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this = this;
      var _this$mindMap$opt = this.mindMap.opt,
        openPerformance = _this$mindMap$opt.openPerformance,
        performanceConfig = _this$mindMap$opt.performanceConfig,
        openRealtimeRenderOnNodeTextEdit = _this$mindMap$opt.openRealtimeRenderOnNodeTextEdit;
      // 画布点击事件清除当前激活节点列表
      this.mindMap.on('draw_click', function (e) {
        _this.clearActiveNodeListOnDrawClick(e, 'click');
      });
      // 画布右键事件事件清除当前激活节点列表
      this.mindMap.on('contextmenu', function (e) {
        _this.clearActiveNodeListOnDrawClick(e, 'contextmenu');
      });
      // 鼠标双击回到根节点
      this.mindMap.svg.on('dblclick', function () {
        if (!_this.mindMap.opt.enableDblclickBackToRootNode) return;
        _this.setRootNodeCenter();
      });
      // 性能模式
      var onViewDataChange = throttle(function () {
        if (_this.root) {
          _this.mindMap.emit('node_tree_render_start');
          _this.root.render(function () {
            _this.mindMap.emit('node_tree_render_end');
          }, false, true);
        }
      }, performanceConfig.time);
      if (openPerformance) {
        this.mindMap.on('view_data_change', onViewDataChange);
      }
      // 文本编辑时实时更新节点大小
      this.onNodeTextEditChange = this.onNodeTextEditChange.bind(this);
      if (openRealtimeRenderOnNodeTextEdit) {
        this.mindMap.on('node_text_edit_change', this.onNodeTextEditChange);
      }
      // 监听配置改变事件
      this.mindMap.on('after_update_config', function (opt, lastOpt) {
        // 更新openPerformance配置
        if (opt.openPerformance !== lastOpt.openPerformance) {
          _this.mindMap[opt.openPerformance ? 'on' : 'off']('view_data_change', onViewDataChange);
          _this.forceLoadNode();
        }
        // 更新openRealtimeRenderOnNodeTextEdit配置
        if (opt.openRealtimeRenderOnNodeTextEdit !== lastOpt.openRealtimeRenderOnNodeTextEdit) {
          _this.mindMap[opt.openRealtimeRenderOnNodeTextEdit ? 'on' : 'off']('node_text_edit_change', _this.onNodeTextEditChange);
        }
      });
      // 处理非https下的复制黏贴问题
      // 暂时不启用，因为给页面的其他输入框（比如节点文本编辑框）粘贴内容也会触发，冲突问题暂时没有想到好的解决方法，不可能要求所有输入框都阻止冒泡
      // if (!checkClipboardReadEnable()) {
      //   this.handlePaste = this.handlePaste.bind(this)
      //   window.addEventListener('paste', this.handlePaste)
      //   this.mindMap.on('beforeDestroy', () => {
      //     window.removeEventListener('paste', this.handlePaste)
      //   })
      // }
    }

    // 监听文本编辑事件，实时更新节点大小
  }, {
    key: "onNodeTextEditChange",
    value: function onNodeTextEditChange(_ref) {
      var _this2 = this;
      var node = _ref.node,
        text = _ref.text;
      node._textData = node.createTextNode(text);
      var _node$getNodeRect = node.getNodeRect(),
        width = _node$getNodeRect.width,
        height = _node$getNodeRect.height;
      node.width = width;
      node.height = height;
      node.layout();
      this.mindMap.render(function () {
        _this2.textEdit.updateTextEditNode();
      });
    }

    // 强制渲染节点，不考虑是否在画布可视区域内
  }, {
    key: "forceLoadNode",
    value: function forceLoadNode(node) {
      var _this3 = this;
      node = node || this.root;
      if (node) {
        this.mindMap.emit('node_tree_render_start');
        node.render(function () {
          _this3.mindMap.emit('node_tree_render_end');
        }, true);
      }
    }

    //  注册命令
  }, {
    key: "registerCommands",
    value: function registerCommands() {
      // 全选
      this.selectAll = this.selectAll.bind(this);
      this.mindMap.command.add('SELECT_ALL', this.selectAll);
      // 回退
      this.back = this.back.bind(this);
      this.mindMap.command.add('BACK', this.back);
      // 前进
      this.forward = this.forward.bind(this);
      this.mindMap.command.add('FORWARD', this.forward);
      // 插入同级节点
      this.insertNode = this.insertNode.bind(this);
      this.mindMap.command.add('INSERT_NODE', this.insertNode);
      // 插入多个同级节点
      this.insertMultiNode = this.insertMultiNode.bind(this);
      this.mindMap.command.add('INSERT_MULTI_NODE', this.insertMultiNode);
      // 插入子节点
      this.insertChildNode = this.insertChildNode.bind(this);
      this.mindMap.command.add('INSERT_CHILD_NODE', this.insertChildNode);
      // 插入多个子节点
      this.insertMultiChildNode = this.insertMultiChildNode.bind(this);
      this.mindMap.command.add('INSERT_MULTI_CHILD_NODE', this.insertMultiChildNode);
      // 插入父节点
      this.insertParentNode = this.insertParentNode.bind(this);
      this.mindMap.command.add('INSERT_PARENT_NODE', this.insertParentNode);
      // 上移节点
      this.upNode = this.upNode.bind(this);
      this.mindMap.command.add('UP_NODE', this.upNode);
      // 下移节点
      this.downNode = this.downNode.bind(this);
      this.mindMap.command.add('DOWN_NODE', this.downNode);
      //  将一个节点上移一个层级
      this.moveUpOneLevel = this.moveUpOneLevel.bind(this);
      this.mindMap.command.add('MOVE_UP_ONE_LEVEL', this.moveUpOneLevel);
      // 移动节点
      this.insertAfter = this.insertAfter.bind(this);
      this.mindMap.command.add('INSERT_AFTER', this.insertAfter);
      this.insertBefore = this.insertBefore.bind(this);
      this.mindMap.command.add('INSERT_BEFORE', this.insertBefore);
      this.moveNodeTo = this.moveNodeTo.bind(this);
      this.mindMap.command.add('MOVE_NODE_TO', this.moveNodeTo);
      // 删除节点
      this.removeNode = this.removeNode.bind(this);
      this.mindMap.command.add('REMOVE_NODE', this.removeNode);
      // 仅删除当前节点
      this.removeCurrentNode = this.removeCurrentNode.bind(this);
      this.mindMap.command.add('REMOVE_CURRENT_NODE', this.removeCurrentNode);
      // 粘贴节点
      this.pasteNode = this.pasteNode.bind(this);
      this.mindMap.command.add('PASTE_NODE', this.pasteNode);
      // 剪切节点
      this.cutNode = this.cutNode.bind(this);
      this.mindMap.command.add('CUT_NODE', this.cutNode);
      // 修改节点单个样式
      this.setNodeStyle = this.setNodeStyle.bind(this);
      this.mindMap.command.add('SET_NODE_STYLE', this.setNodeStyle);
      // 修改节点多个样式
      this.setNodeStyles = this.setNodeStyles.bind(this);
      this.mindMap.command.add('SET_NODE_STYLES', this.setNodeStyles);
      // 切换节点是否激活
      this.setNodeActive = this.setNodeActive.bind(this);
      this.mindMap.command.add('SET_NODE_ACTIVE', this.setNodeActive);
      // 清除所有激活节点
      this.clearActiveNode = this.clearActiveNode.bind(this);
      this.mindMap.command.add('CLEAR_ACTIVE_NODE', this.clearActiveNode);
      // 切换节点是否展开
      this.setNodeExpand = this.setNodeExpand.bind(this);
      this.mindMap.command.add('SET_NODE_EXPAND', this.setNodeExpand);
      // 展开所有节点
      this.expandAllNode = this.expandAllNode.bind(this);
      this.mindMap.command.add('EXPAND_ALL', this.expandAllNode);
      // 收起所有节点
      this.unexpandAllNode = this.unexpandAllNode.bind(this);
      this.mindMap.command.add('UNEXPAND_ALL', this.unexpandAllNode);
      // 展开到指定层级
      this.expandToLevel = this.expandToLevel.bind(this);
      this.mindMap.command.add('UNEXPAND_TO_LEVEL', this.expandToLevel);
      // 设置节点数据
      this.setNodeData = this.setNodeData.bind(this);
      this.mindMap.command.add('SET_NODE_DATA', this.setNodeData);
      // 设置节点文本
      this.setNodeText = this.setNodeText.bind(this);
      this.mindMap.command.add('SET_NODE_TEXT', this.setNodeText);
      // 设置节点图片
      this.setNodeImage = this.setNodeImage.bind(this);
      this.mindMap.command.add('SET_NODE_IMAGE', this.setNodeImage);
      // 设置节点图标
      this.setNodeIcon = this.setNodeIcon.bind(this);
      this.mindMap.command.add('SET_NODE_ICON', this.setNodeIcon);
      // 设置节点超链接
      this.setNodeHyperlink = this.setNodeHyperlink.bind(this);
      this.mindMap.command.add('SET_NODE_HYPERLINK', this.setNodeHyperlink);
      // 设置节点备注
      this.setNodeNote = this.setNodeNote.bind(this);
      this.mindMap.command.add('SET_NODE_NOTE', this.setNodeNote);
      // 设置节点附件
      this.setNodeAttachment = this.setNodeAttachment.bind(this);
      this.mindMap.command.add('SET_NODE_ATTACHMENT', this.setNodeAttachment);
      // 设置节点标签
      this.setNodeTag = this.setNodeTag.bind(this);
      this.mindMap.command.add('SET_NODE_TAG', this.setNodeTag);
      // 设置节点公式
      this.insertFormula = this.insertFormula.bind(this);
      this.mindMap.command.add('INSERT_FORMULA', this.insertFormula);
      // 添加节点概要
      this.addGeneralization = this.addGeneralization.bind(this);
      this.mindMap.command.add('ADD_GENERALIZATION', this.addGeneralization);
      // 删除节点概要
      this.removeGeneralization = this.removeGeneralization.bind(this);
      this.mindMap.command.add('REMOVE_GENERALIZATION', this.removeGeneralization);
      // 设置节点自定义位置
      this.setNodeCustomPosition = this.setNodeCustomPosition.bind(this);
      this.mindMap.command.add('SET_NODE_CUSTOM_POSITION', this.setNodeCustomPosition);
      // 一键整理布局
      this.resetLayout = this.resetLayout.bind(this);
      this.mindMap.command.add('RESET_LAYOUT', this.resetLayout);
      // 设置节点形状
      this.setNodeShape = this.setNodeShape.bind(this);
      this.mindMap.command.add('SET_NODE_SHAPE', this.setNodeShape);
      // 定位节点
      this.goTargetNode = this.goTargetNode.bind(this);
      this.mindMap.command.add('GO_TARGET_NODE', this.goTargetNode);
      // 一键去除节点自定义样式
      this.removeCustomStyles = this.removeCustomStyles.bind(this);
      this.mindMap.command.add('REMOVE_CUSTOM_STYLES', this.removeCustomStyles);
      // 一键去除所有节点自定义样式
      this.removeAllNodeCustomStyles = this.removeAllNodeCustomStyles.bind(this);
      this.mindMap.command.add('REMOVE_ALL_NODE_CUSTOM_STYLES', this.removeAllNodeCustomStyles);
    }

    //  注册快捷键
  }, {
    key: "registerShortcutKeys",
    value: function registerShortcutKeys() {
      var _this4 = this;
      // 插入下级节点
      this.mindMap.keyCommand.addShortcut('Tab', function () {
        _this4.mindMap.execCommand('INSERT_CHILD_NODE');
      });
      // 插入下级节点
      this.mindMap.keyCommand.addShortcut('Insert', function () {
        _this4.mindMap.execCommand('INSERT_CHILD_NODE');
      });
      // 插入同级节点
      this.mindMap.keyCommand.addShortcut('Enter', function () {
        _this4.mindMap.execCommand('INSERT_NODE');
      });
      // 插入父节点
      this.mindMap.keyCommand.addShortcut('Shift+Tab', function () {
        _this4.mindMap.execCommand('INSERT_PARENT_NODE');
      });
      // 插入概要
      this.mindMap.keyCommand.addShortcut('Control+g', function () {
        _this4.mindMap.execCommand('ADD_GENERALIZATION');
      });
      // 展开/收起节点
      this.toggleActiveExpand = this.toggleActiveExpand.bind(this);
      this.mindMap.keyCommand.addShortcut('/', this.toggleActiveExpand);
      // 删除节点
      this.mindMap.keyCommand.addShortcut('Del|Backspace', function () {
        _this4.mindMap.execCommand('REMOVE_NODE');
      });
      // 仅删除当前节点
      this.mindMap.keyCommand.addShortcut('Shift+Backspace', function () {
        _this4.mindMap.execCommand('REMOVE_CURRENT_NODE');
      });
      // 节点编辑时某些快捷键会存在冲突，需要暂时去除
      this.mindMap.on('before_show_text_edit', function () {
        _this4.startTextEdit();
      });
      this.mindMap.on('hide_text_edit', function () {
        _this4.endTextEdit();
      });
      // 全选
      this.mindMap.keyCommand.addShortcut('Control+a', function () {
        _this4.mindMap.execCommand('SELECT_ALL');
      });
      // 一键整理布局
      this.mindMap.keyCommand.addShortcut('Control+l', function () {
        _this4.mindMap.execCommand('RESET_LAYOUT');
      });
      // 上移节点
      this.mindMap.keyCommand.addShortcut('Control+Up', function () {
        _this4.mindMap.execCommand('UP_NODE');
      });
      // 下移节点
      this.mindMap.keyCommand.addShortcut('Control+Down', function () {
        _this4.mindMap.execCommand('DOWN_NODE');
      });
      // 复制节点
      this.mindMap.keyCommand.addShortcut('Control+c', function () {
        _this4.copy();
      });
      // 剪切节点
      this.mindMap.keyCommand.addShortcut('Control+x', function () {
        _this4.cut();
      });
      // 粘贴节点
      this.mindMap.keyCommand.addShortcut('Control+v', function () {
        _this4.paste();
      });
      // 根节点居中显示
      this.mindMap.keyCommand.addShortcut('Control+Enter', function () {
        _this4.setRootNodeCenter();
      });
    }

    // 派发节点激活事件
  }, {
    key: "emitNodeActiveEvent",
    value: function emitNodeActiveEvent() {
      var _this5 = this;
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var activeNodeList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _toConsumableArray(this.activeNodeList);
      var isChange = !checkNodeListIsEqual(this.lastActiveNodeList, activeNodeList);
      if (!isChange) return;
      this.lastActiveNodeList = _toConsumableArray(activeNodeList);
      this.mindMap.batchExecution.push('emitNodeActiveEvent', function () {
        _this5.mindMap.emit('node_active', node, activeNodeList);
      });
    }

    // 鼠标点击画布时清空当前激活节点列表
  }, {
    key: "clearActiveNodeListOnDrawClick",
    value: function clearActiveNodeListOnDrawClick(e, eventType) {
      if (this.activeNodeList.length <= 0) return;
      // 清除激活状态
      var isTrueClick = true;
      // 是否是左键多选节点，右键拖动画布
      var useLeftKeySelectionRightKeyDrag = this.mindMap.opt.useLeftKeySelectionRightKeyDrag;
      // 如果鼠标按下和松开的距离较大，则不认为是点击事件
      if (eventType === 'contextmenu' ? !useLeftKeySelectionRightKeyDrag : useLeftKeySelectionRightKeyDrag) {
        var mousedownPos = this.mindMap.event.mousedownPos;
        isTrueClick = Math.abs(e.clientX - mousedownPos.x) <= 5 && Math.abs(e.clientY - mousedownPos.y) <= 5;
      }
      if (isTrueClick) {
        this.mindMap.execCommand('CLEAR_ACTIVE_NODE');
      }
    }

    //  开启文字编辑，会禁用回车键和删除键相关快捷键防止冲突
  }, {
    key: "startTextEdit",
    value: function startTextEdit() {
      this.mindMap.keyCommand.save();
    }

    //  结束文字编辑，会恢复回车键和删除键相关快捷键
  }, {
    key: "endTextEdit",
    value: function endTextEdit() {
      this.mindMap.keyCommand.restore();
    }

    // 清空节点缓存池
  }, {
    key: "clearCache",
    value: function clearCache() {
      this.layout.lru.clear();
      this.nodeCache = {};
      this.lastNodeCache = {};
    }

    //   渲染
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      var source = arguments.length > 1 ? arguments[1] : undefined;
      // 切换主题时，被收起的节点需要添加样式复位的标注
      if (source === CONSTANTS.CHANGE_THEME) {
        this.resetUnExpandNodeStyle();
      }
      // 如果当前还没有渲染完毕，不再触发渲染
      if (this.isRendering) {
        // 等待当前渲染完毕后再进行一次渲染
        this.hasWaitRendering = true;
        this.waitRenderingParams = [callback, source];
        return;
      }
      this.isRendering = true;
      // 触发当前重新渲染的来源
      this.renderSource = source;
      // 节点缓存
      this.lastNodeCache = this.nodeCache;
      this.nodeCache = {};
      // 重新渲染需要清除激活状态
      if (this.reRender) {
        this.clearActiveNodeList();
      }
      // 如果没有节点数据
      if (!this.renderTree) {
        this.isRendering = false;
        this.mindMap.emit('node_tree_render_end');
        return;
      }
      this.mindMap.emit('node_tree_render_start');
      // 计算布局
      this.root = null;
      this.layout.doLayout(function (root) {
        // 删除本次渲染时不再需要的节点
        Object.keys(_this6.lastNodeCache).forEach(function (uid) {
          if (!_this6.nodeCache[uid]) {
            // 从激活节点列表里删除
            _this6.removeNodeFromActiveList(_this6.lastNodeCache[uid]);
            _this6.emitNodeActiveEvent();
            // 调用节点的销毁方法
            _this6.lastNodeCache[uid].destroy();
          }
        });
        // 更新根节点
        _this6.root = root;
        // 渲染节点
        _this6.root.render(function () {
          _this6.isRendering = false;
          callback && callback();
          if (_this6.hasWaitRendering) {
            var params = _this6.waitRenderingParams;
            _this6.hasWaitRendering = false;
            _this6.waitRenderingParams = [];
            _this6.render.apply(_this6, _toConsumableArray(params));
          } else {
            _this6.renderSource = '';
            if (_this6.reRender) {
              _this6.reRender = false;
            }
            // 触发一次保存，因为修改了渲染树的数据
            if (_this6.hasRichTextPlugin() && [CONSTANTS.CHANGE_THEME, CONSTANTS.SET_DATA].includes(source)) {
              _this6.mindMap.command.addHistory();
            }
          }
          _this6.mindMap.emit('node_tree_render_end');
        });
      });
      this.emitNodeActiveEvent();
    }

    // 给当前被收起来的节点数据添加文本复位标志
  }, {
    key: "resetUnExpandNodeStyle",
    value: function resetUnExpandNodeStyle() {
      if (!this.renderTree || !this.hasRichTextPlugin()) return;
      _walk(this.renderTree, null, function (node) {
        if (!node.data.expand) {
          _walk(node, null, function (node2) {
            node2.data.resetRichText = true;
          });
          return true;
        }
      });
    }

    //  清除当前所有激活节点，并会触发事件
  }, {
    key: "clearActiveNode",
    value: function clearActiveNode() {
      if (this.activeNodeList.length <= 0) {
        return;
      }
      this.clearActiveNodeList();
      this.emitNodeActiveEvent(null, []);
    }

    //  清除当前激活的节点列表
  }, {
    key: "clearActiveNodeList",
    value: function clearActiveNodeList() {
      var _this7 = this;
      this.activeNodeList.forEach(function (item) {
        _this7.mindMap.execCommand('SET_NODE_ACTIVE', item, false);
      });
      this.activeNodeList = [];
    }

    // 添加节点到激活列表里
  }, {
    key: "addNodeToActiveList",
    value: function addNodeToActiveList(node) {
      var notEmitBeforeNodeActiveEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.mindMap.opt.onlyOneEnableActiveNodeOnCooperate && node.userList.length > 0) return;
      var index = this.findActiveNodeIndex(node);
      if (index === -1) {
        if (!notEmitBeforeNodeActiveEvent) {
          this.mindMap.emit('before_node_active', node, this.activeNodeList);
        }
        this.mindMap.execCommand('SET_NODE_ACTIVE', node, true);
        this.activeNodeList.push(node);
      }
    }

    // 在激活列表里移除某个节点
  }, {
    key: "removeNodeFromActiveList",
    value: function removeNodeFromActiveList(node) {
      var index = this.findActiveNodeIndex(node);
      if (index === -1) {
        return;
      }
      this.mindMap.execCommand('SET_NODE_ACTIVE', node, false);
      this.activeNodeList.splice(index, 1);
    }

    // 手动激活多个节点，激活单个节点请直接调用节点实例的active()方法
  }, {
    key: "activeMultiNode",
    value: function activeMultiNode() {
      var _this8 = this;
      var nodeList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      nodeList.forEach(function (node) {
        // 手动派发节点激活前事件
        _this8.mindMap.emit('before_node_active', node, _this8.activeNodeList);
        // 激活节点，并将该节点添加到激活节点列表里
        _this8.addNodeToActiveList(node, true);
        // 手动派发节点激活事件
        _this8.emitNodeActiveEvent(node);
      });
    }

    // 手动取消激活多个节点
  }, {
    key: "cancelActiveMultiNode",
    value: function cancelActiveMultiNode() {
      var _this9 = this;
      var nodeList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      nodeList.forEach(function (node) {
        _this9.removeNodeFromActiveList(node);
        _this9.emitNodeActiveEvent(null);
      });
    }

    //  检索某个节点在激活列表里的索引
  }, {
    key: "findActiveNodeIndex",
    value: function findActiveNodeIndex(node) {
      return getNodeIndexInNodeList(node, this.activeNodeList);
    }

    //  全选
  }, {
    key: "selectAll",
    value: function selectAll() {
      var _this10 = this;
      if (this.mindMap.opt.readonly) return;
      _walk(this.root, null, function (node) {
        if (!node.getData('isActive')) {
          _this10.addNodeToActiveList(node);
        }
        // 概要节点
        if (node._generalizationList && node._generalizationList.length > 0) {
          node._generalizationList.forEach(function (item) {
            var gNode = item.generalizationNode;
            if (!gNode.getData('isActive')) {
              _this10.addNodeToActiveList(gNode);
            }
          });
        }
      }, null, true, 0, 0);
      this.emitNodeActiveEvent();
    }

    //  回退
  }, {
    key: "back",
    value: function back(step) {
      this.backForward('back', step);
    }

    //  前进
  }, {
    key: "forward",
    value: function forward(step) {
      this.backForward('forward', step);
    }

    // 前进回退
  }, {
    key: "backForward",
    value: function backForward(type, step) {
      this.mindMap.execCommand('CLEAR_ACTIVE_NODE');
      var data = this.mindMap.command[type](step);
      if (data) {
        this.renderTree = data;
        this.mindMap.render();
      }
      this.mindMap.emit('data_change', data);
    }

    // 获取创建新节点的行为
  }, {
    key: "getNewNodeBehavior",
    value: function getNewNodeBehavior() {
      var openEdit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var handleMultiNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var createNewNodeBehavior = this.mindMap.opt.createNewNodeBehavior;
      var focusNewNode = false; // 是否激活新节点
      var inserting = false; // 新节点是否进入编辑模式
      switch (createNewNodeBehavior) {
        // 默认会激活新创建的节点，并且进入编辑模式。如果同时创建了多个新节点，那么只会激活而不会进入编辑模式
        case CONSTANTS.CREATE_NEW_NODE_BEHAVIOR.DEFAULT:
          focusNewNode = handleMultiNodes || !openEdit;
          inserting = handleMultiNodes ? false : openEdit; // 如果同时对多个节点插入子节点，那么无需进入编辑模式
          break;
        // 不激活新创建的节点
        case CONSTANTS.CREATE_NEW_NODE_BEHAVIOR.NOT_ACTIVE:
          focusNewNode = false;
          inserting = false;
          break;
        // 只激活新创建的节点，不进入编辑模式
        case CONSTANTS.CREATE_NEW_NODE_BEHAVIOR.ACTIVE_ONLY:
          focusNewNode = true;
          inserting = false;
          break;
      }
      return {
        focusNewNode: focusNewNode,
        inserting: inserting
      };
    }

    //  插入同级节点
  }, {
    key: "insertNode",
    value: function insertNode() {
      var openEdit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var appointNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var appointData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var appointChildren = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      appointNodes = formatDataToArray(appointNodes);
      if (this.activeNodeList.length <= 0 && appointNodes.length <= 0) {
        return;
      }
      this.textEdit.hideEditTextBox();
      var _this$mindMap$opt2 = this.mindMap.opt,
        defaultInsertSecondLevelNodeText = _this$mindMap$opt2.defaultInsertSecondLevelNodeText,
        defaultInsertBelowSecondLevelNodeText = _this$mindMap$opt2.defaultInsertBelowSecondLevelNodeText;
      var list = appointNodes.length > 0 ? appointNodes : this.activeNodeList;
      var handleMultiNodes = list.length > 1;
      var isRichText = this.hasRichTextPlugin();
      var _this$getNewNodeBehav = this.getNewNodeBehavior(openEdit, handleMultiNodes),
        focusNewNode = _this$getNewNodeBehav.focusNewNode,
        inserting = _this$getNewNodeBehav.inserting;
      var params = {
        expand: true,
        richText: isRichText,
        isActive: focusNewNode // 如果同时对多个节点插入子节点，那么需要把新增的节点设为激活状态。如果不进入编辑状态，那么也需要手动设为激活状态
      };
      if (isRichText) params.resetRichText = isRichText;
      // 动态指定的子节点数据也需要添加相关属性
      appointChildren = addDataToAppointNodes(appointChildren, _objectSpread2({}, params));
      list.forEach(function (node) {
        if (node.isGeneralization || node.isRoot) {
          return;
        }
        var parent = node.parent;
        var isOneLayer = node.layerIndex === 1;
        // 新插入节点的默认文本
        var text = isOneLayer ? defaultInsertSecondLevelNodeText : defaultInsertBelowSecondLevelNodeText;
        // 计算插入位置
        var index = getNodeDataIndex(node);
        var newNodeData = {
          inserting: inserting,
          data: _objectSpread2(_objectSpread2({
            text: text
          }, params), {}, {
            uid: createUid()
          }, appointData || {}),
          children: _toConsumableArray(createUidForAppointNodes(appointChildren))
        };
        parent.nodeData.children.splice(index + 1, 0, newNodeData);
      });
      // 如果同时对多个节点插入子节点，需要清除原来激活的节点
      if (focusNewNode) {
        this.clearActiveNodeList();
      }
      this.mindMap.render();
    }

    // 插入多个同级节点
  }, {
    key: "insertMultiNode",
    value: function insertMultiNode(appointNodes, nodeList) {
      if (!nodeList || nodeList.length <= 0) return;
      appointNodes = formatDataToArray(appointNodes);
      if (this.activeNodeList.length <= 0 && appointNodes.length <= 0) {
        return;
      }
      this.textEdit.hideEditTextBox();
      var list = appointNodes.length > 0 ? appointNodes : this.activeNodeList;
      var isRichText = this.hasRichTextPlugin();
      var _this$getNewNodeBehav2 = this.getNewNodeBehavior(false, true),
        focusNewNode = _this$getNewNodeBehav2.focusNewNode;
      var params = {
        expand: true,
        richText: isRichText,
        isActive: focusNewNode
      };
      if (isRichText) params.resetRichText = isRichText;
      nodeList = addDataToAppointNodes(nodeList, params);
      list.forEach(function (node) {
        var _parent$nodeData$chil;
        if (node.isGeneralization || node.isRoot) {
          return;
        }
        var parent = node.parent;
        // 计算插入位置
        var index = getNodeDataIndex(node);
        var newNodeList = createUidForAppointNodes(simpleDeepClone(nodeList));
        (_parent$nodeData$chil = parent.nodeData.children).splice.apply(_parent$nodeData$chil, [index + 1, 0].concat(_toConsumableArray(newNodeList)));
      });
      if (focusNewNode) {
        this.clearActiveNodeList();
      }
      this.mindMap.render();
    }

    //  插入子节点
  }, {
    key: "insertChildNode",
    value: function insertChildNode() {
      var openEdit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var appointNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var appointData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var appointChildren = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      appointNodes = formatDataToArray(appointNodes);
      if (this.activeNodeList.length <= 0 && appointNodes.length <= 0) {
        return;
      }
      this.textEdit.hideEditTextBox();
      var _this$mindMap$opt3 = this.mindMap.opt,
        defaultInsertSecondLevelNodeText = _this$mindMap$opt3.defaultInsertSecondLevelNodeText,
        defaultInsertBelowSecondLevelNodeText = _this$mindMap$opt3.defaultInsertBelowSecondLevelNodeText;
      var list = appointNodes.length > 0 ? appointNodes : this.activeNodeList;
      var handleMultiNodes = list.length > 1;
      var isRichText = this.hasRichTextPlugin();
      var _this$getNewNodeBehav3 = this.getNewNodeBehavior(openEdit, handleMultiNodes),
        focusNewNode = _this$getNewNodeBehav3.focusNewNode,
        inserting = _this$getNewNodeBehav3.inserting;
      var params = {
        expand: true,
        richText: isRichText,
        isActive: focusNewNode
      };
      if (isRichText) params.resetRichText = isRichText;
      // 动态指定的子节点数据也需要添加相关属性
      appointChildren = addDataToAppointNodes(appointChildren, _objectSpread2({}, params));
      list.forEach(function (node) {
        if (node.isGeneralization) {
          return;
        }
        if (!node.nodeData.children) {
          node.nodeData.children = [];
        }
        var text = node.isRoot ? defaultInsertSecondLevelNodeText : defaultInsertBelowSecondLevelNodeText;
        var newNode = {
          inserting: inserting,
          data: _objectSpread2(_objectSpread2({
            text: text,
            uid: createUid()
          }, params), appointData || {}),
          children: _toConsumableArray(createUidForAppointNodes(appointChildren))
        };
        node.nodeData.children.push(newNode);
        // 插入子节点时自动展开子节点
        node.setData({
          expand: true
        });
      });
      // 如果同时对多个节点插入子节点，需要清除原来激活的节点
      if (focusNewNode) {
        this.clearActiveNodeList();
      }
      this.mindMap.render();
    }

    // 插入多个子节点
  }, {
    key: "insertMultiChildNode",
    value: function insertMultiChildNode(appointNodes, childList) {
      if (!childList || childList.length <= 0) return;
      appointNodes = formatDataToArray(appointNodes);
      if (this.activeNodeList.length <= 0 && appointNodes.length <= 0) {
        return;
      }
      this.textEdit.hideEditTextBox();
      var list = appointNodes.length > 0 ? appointNodes : this.activeNodeList;
      var isRichText = this.hasRichTextPlugin();
      var _this$getNewNodeBehav4 = this.getNewNodeBehavior(false, true),
        focusNewNode = _this$getNewNodeBehav4.focusNewNode;
      var params = {
        expand: true,
        richText: isRichText,
        isActive: focusNewNode
      };
      if (isRichText) params.resetRichText = isRichText;
      childList = addDataToAppointNodes(childList, params);
      list.forEach(function (node) {
        var _node$nodeData$childr;
        if (node.isGeneralization) {
          return;
        }
        if (!node.nodeData.children) {
          node.nodeData.children = [];
        }
        childList = createUidForAppointNodes(childList);
        (_node$nodeData$childr = node.nodeData.children).push.apply(_node$nodeData$childr, _toConsumableArray(childList));
        // 插入子节点时自动展开子节点
        node.setData({
          expand: true
        });
      });
      if (focusNewNode) {
        this.clearActiveNodeList();
      }
      this.mindMap.render();
    }

    // 插入父节点
  }, {
    key: "insertParentNode",
    value: function insertParentNode() {
      var openEdit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var appointNodes = arguments.length > 1 ? arguments[1] : undefined;
      var appointData = arguments.length > 2 ? arguments[2] : undefined;
      appointNodes = formatDataToArray(appointNodes);
      if (this.activeNodeList.length <= 0 && appointNodes.length <= 0) {
        return;
      }
      this.textEdit.hideEditTextBox();
      var _this$mindMap$opt4 = this.mindMap.opt,
        defaultInsertSecondLevelNodeText = _this$mindMap$opt4.defaultInsertSecondLevelNodeText,
        defaultInsertBelowSecondLevelNodeText = _this$mindMap$opt4.defaultInsertBelowSecondLevelNodeText;
      var list = appointNodes.length > 0 ? appointNodes : this.activeNodeList;
      var handleMultiNodes = list.length > 1;
      var isRichText = this.hasRichTextPlugin();
      var _this$getNewNodeBehav5 = this.getNewNodeBehavior(openEdit, handleMultiNodes),
        focusNewNode = _this$getNewNodeBehav5.focusNewNode,
        inserting = _this$getNewNodeBehav5.inserting;
      var params = {
        expand: true,
        richText: isRichText,
        isActive: focusNewNode
      };
      if (isRichText) params.resetRichText = isRichText;
      list.forEach(function (node) {
        if (node.isGeneralization || node.isRoot) {
          return;
        }
        var text = node.layerIndex === 1 ? defaultInsertSecondLevelNodeText : defaultInsertBelowSecondLevelNodeText;
        var newNode = {
          inserting: inserting,
          data: _objectSpread2(_objectSpread2({
            text: text,
            uid: createUid()
          }, params), appointData || {}),
          children: [node.nodeData]
        };
        if (isRichText) {
          node.setData({
            resetRichText: true
          });
        }
        var parent = node.parent;
        // 获取当前节点所在位置
        var index = getNodeDataIndex(node);
        parent.nodeData.children.splice(index, 1, newNode);
      });
      // 如果同时对多个节点插入子节点，需要清除原来激活的节点
      if (focusNewNode) {
        this.clearActiveNodeList();
      }
      this.mindMap.render();
    }

    //  上移节点，多个节点只会操作第一个节点
  }, {
    key: "upNode",
    value: function upNode(appointNode) {
      if (this.activeNodeList.length <= 0 && !appointNode) {
        return;
      }
      var list = appointNode ? [appointNode] : this.activeNodeList;
      var node = list[0];
      if (node.isRoot) {
        return;
      }
      var parent = node.parent;
      var childList = parent.children;
      var index = getNodeIndexInNodeList(node, childList);
      if (index === -1 || index === 0) {
        return;
      }
      var insertIndex = index - 1;
      // 节点实例
      childList.splice(index, 1);
      childList.splice(insertIndex, 0, node);
      // 节点数据
      parent.nodeData.children.splice(index, 1);
      parent.nodeData.children.splice(insertIndex, 0, node.nodeData);
      this.mindMap.render();
    }

    //  下移节点，多个节点只会操作第一个节点
  }, {
    key: "downNode",
    value: function downNode(appointNode) {
      if (this.activeNodeList.length <= 0 && !appointNode) {
        return;
      }
      var list = appointNode ? [appointNode] : this.activeNodeList;
      var node = list[0];
      if (node.isRoot) {
        return;
      }
      var parent = node.parent;
      var childList = parent.children;
      var index = getNodeIndexInNodeList(node, childList);
      if (index === -1 || index === childList.length - 1) {
        return;
      }
      var insertIndex = index + 1;
      // 节点实例
      childList.splice(index, 1);
      childList.splice(insertIndex, 0, node);
      // 节点数据
      parent.nodeData.children.splice(index, 1);
      parent.nodeData.children.splice(insertIndex, 0, node.nodeData);
      this.mindMap.render();
    }

    // 将节点上移一个层级，多个节点只会操作第一个节点
  }, {
    key: "moveUpOneLevel",
    value: function moveUpOneLevel(node) {
      node = node || this.activeNodeList[0];
      if (!node || node.isRoot || node.layerIndex <= 1) {
        return;
      }
      var parent = node.parent;
      var grandpa = parent.parent;
      var index = getNodeIndexInNodeList(node, parent.children);
      var parentIndex = getNodeIndexInNodeList(parent, grandpa.children);
      // 节点数据
      this.checkNodeLayerChange(node, parent);
      parent.nodeData.children.splice(index, 1);
      grandpa.nodeData.children.splice(parentIndex + 1, 0, node.nodeData);
      this.mindMap.render();
    }

    // 移除节点数据的自定义样式的内部方法
  }, {
    key: "_handleRemoveCustomStyles",
    value: function _handleRemoveCustomStyles(nodeData) {
      var hasCustomStyles = false;
      Object.keys(nodeData).forEach(function (key) {
        if (checkIsNodeStyleDataKey(key)) {
          hasCustomStyles = true;
          delete nodeData[key];
        }
      });
      // 如果是富文本，那么还要处理富文本内容
      if (hasCustomStyles && this.hasRichTextPlugin()) {
        nodeData.resetRichText = true;
        nodeData.text = removeRichTextStyes(nodeData.text);
      }
      return hasCustomStyles;
    }

    // 一键去除自定义样式
  }, {
    key: "removeCustomStyles",
    value: function removeCustomStyles(node) {
      node = node || this.activeNodeList[0];
      if (!node) {
        return;
      }
      var hasCustomStyles = this._handleRemoveCustomStyles(node.getData());
      if (hasCustomStyles) {
        this.reRenderNodeCheckChange(node);
      }
    }

    // 一键去除所有节点自定义样式
  }, {
    key: "removeAllNodeCustomStyles",
    value: function removeAllNodeCustomStyles(appointNodes) {
      var _this11 = this;
      appointNodes = formatDataToArray(appointNodes);
      var hasCustomStyles = false;
      // 指定了节点列表，那么遍历该节点列表
      if (appointNodes.length > 0) {
        appointNodes.forEach(function (node) {
          var _hasCustomStyles = _this11._handleRemoveCustomStyles(node.getData());
          if (_hasCustomStyles) hasCustomStyles = true;
        });
      } else {
        // 否则遍历整棵树
        if (!this.renderTree) return;
        _walk(this.renderTree, null, function (node) {
          var _hasCustomStyles = _this11._handleRemoveCustomStyles(node.data);
          if (_hasCustomStyles) hasCustomStyles = true;
          // 不要忘记概要节点
          var generalizationList = formatGetNodeGeneralization(node.data);
          if (generalizationList.length > 0) {
            generalizationList.forEach(function (generalizationData) {
              var _hasCustomStyles = _this11._handleRemoveCustomStyles(generalizationData);
              if (_hasCustomStyles) hasCustomStyles = true;
            });
          }
        });
      }
      if (hasCustomStyles) {
        this.mindMap.reRender();
      }
    }

    // 复制节点
  }, {
    key: "copy",
    value: function copy() {
      this.beingCopyData = this.copyNode();
      if (!this.beingCopyData) return;
      if (!this.mindMap.opt.disabledClipboard) {
        setDataToClipboard(createSmmFormatData(this.beingCopyData));
      }
    }

    // 剪切节点
  }, {
    key: "cut",
    value: function cut() {
      var _this12 = this;
      this.mindMap.execCommand('CUT_NODE', function (copyData) {
        _this12.beingCopyData = copyData;
        if (!_this12.mindMap.opt.disabledClipboard) {
          setDataToClipboard(createSmmFormatData(copyData));
        }
      });
    }

    // 非https下复制黏贴，获取内容方法
  }, {
    key: "handlePaste",
    value: function handlePaste(event) {
      var disabledClipboard = this.mindMap.opt.disabledClipboard;
      if (disabledClipboard) return;
      var clipboardData = event.clipboardData || event.originalEvent.clipboardData;
      var items = clipboardData.items;
      Array.from(items).forEach(function (item) {
        if (item.type.indexOf('image') > -1) {
          item.getAsFile();
        }
        if (item.type.indexOf('text') > -1) {
          clipboardData.getData('text');
        }
      });
      this.paste();
    }

    // 粘贴
  }, {
    key: "paste",
    value: function () {
      var _paste = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this13 = this;
        var _this$mindMap$opt5, errorHandler, handleIsSplitByWrapOnPasteCreateNewNode, handleNodePasteImg, disabledClipboard, onlyPasteTextWhenHasImgAndText, res, text, img, smmData, useDefault, _res, checkRes, _checkRes, textArr, imgData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this$mindMap$opt5 = this.mindMap.opt, errorHandler = _this$mindMap$opt5.errorHandler, handleIsSplitByWrapOnPasteCreateNewNode = _this$mindMap$opt5.handleIsSplitByWrapOnPasteCreateNewNode, handleNodePasteImg = _this$mindMap$opt5.handleNodePasteImg, disabledClipboard = _this$mindMap$opt5.disabledClipboard, onlyPasteTextWhenHasImgAndText = _this$mindMap$opt5.onlyPasteTextWhenHasImgAndText; // 如果支持剪贴板操作，那么以剪贴板数据为准
              if (!(!disabledClipboard && checkClipboardReadEnable())) {
                _context.next = 49;
                break;
              }
              _context.prev = 2;
              _context.next = 5;
              return getDataFromClipboard();
            case 5:
              res = _context.sent;
              text = res.text || '';
              img = res.img || null; // 存在文本，则创建子节点
              if (!text) {
                _context.next = 24;
                break;
              }
              // 判断粘贴的是否是simple-mind-map的数据
              smmData = null;
              useDefault = true; // 用户自定义处理
              if (!this.mindMap.opt.customHandleClipboardText) {
                _context.next = 22;
                break;
              }
              _context.prev = 12;
              _context.next = 15;
              return this.mindMap.opt.customHandleClipboardText(text);
            case 15:
              _res = _context.sent;
              if (!isUndef(_res)) {
                useDefault = false;
                checkRes = checkSmmFormatData(_res);
                if (checkRes.isSmm) {
                  smmData = checkRes.data;
                } else {
                  text = checkRes.data;
                }
              }
              _context.next = 22;
              break;
            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](12);
              errorHandler(ERROR_TYPES.CUSTOM_HANDLE_CLIPBOARD_TEXT_ERROR, _context.t0);
            case 22:
              // 默认处理
              if (useDefault) {
                _checkRes = checkSmmFormatData(text);
                if (_checkRes.isSmm) {
                  smmData = _checkRes.data;
                } else {
                  text = _checkRes.data;
                }
              }
              if (smmData) {
                this.mindMap.execCommand('INSERT_MULTI_CHILD_NODE', [], Array.isArray(smmData) ? smmData : [smmData]);
              } else {
                text = htmlEscape(text);
                textArr = text.split(new RegExp('\r?\n|(?<!\n)\r', 'g')).filter(function (item) {
                  return !!item;
                }); // 判断是否需要根据换行自动分割节点
                if (textArr.length > 1 && handleIsSplitByWrapOnPasteCreateNewNode) {
                  handleIsSplitByWrapOnPasteCreateNewNode().then(function () {
                    _this13.mindMap.execCommand('INSERT_MULTI_CHILD_NODE', [], textArr.map(function (item) {
                      return {
                        data: {
                          text: item
                        },
                        children: []
                      };
                    }));
                  }).catch(function () {
                    _this13.mindMap.execCommand('INSERT_CHILD_NODE', false, [], {
                      text: text
                    });
                  });
                } else {
                  this.mindMap.execCommand('INSERT_CHILD_NODE', false, [], {
                    text: text
                  });
                }
              }
            case 24:
              if (!(img && (!text || !onlyPasteTextWhenHasImgAndText))) {
                _context.next = 42;
                break;
              }
              _context.prev = 25;
              imgData = null; // 自定义图片处理函数
              if (!(handleNodePasteImg && typeof handleNodePasteImg === 'function')) {
                _context.next = 33;
                break;
              }
              _context.next = 30;
              return handleNodePasteImg(img);
            case 30:
              imgData = _context.sent;
              _context.next = 36;
              break;
            case 33:
              _context.next = 35;
              return loadImage(img);
            case 35:
              imgData = _context.sent;
            case 36:
              if (this.activeNodeList.length > 0) {
                this.activeNodeList.forEach(function (node) {
                  _this13.mindMap.execCommand('SET_NODE_IMAGE', node, {
                    url: imgData.url,
                    title: '',
                    width: imgData.size.width,
                    height: imgData.size.height
                  });
                });
              }
              _context.next = 42;
              break;
            case 39:
              _context.prev = 39;
              _context.t1 = _context["catch"](25);
              errorHandler(ERROR_TYPES.LOAD_CLIPBOARD_IMAGE_ERROR, _context.t1);
            case 42:
              _context.next = 47;
              break;
            case 44:
              _context.prev = 44;
              _context.t2 = _context["catch"](2);
              errorHandler(ERROR_TYPES.READ_CLIPBOARD_ERROR, _context.t2);
            case 47:
              _context.next = 50;
              break;
            case 49:
              // 禁用剪贴板或不支持剪贴板时
              // 粘贴画布内的节点数据
              if (this.beingCopyData) {
                this.mindMap.execCommand('PASTE_NODE', this.beingCopyData);
              }
            case 50:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[2, 44], [12, 19], [25, 39]]);
      }));
      function paste() {
        return _paste.apply(this, arguments);
      }
      return paste;
    }() //  将节点移动到另一个节点的前面
  }, {
    key: "insertBefore",
    value: function insertBefore(node, exist) {
      this.insertTo(node, exist, 'before');
    }

    //  将节点移动到另一个节点的后面
  }, {
    key: "insertAfter",
    value: function insertAfter(node, exist) {
      this.insertTo(node, exist, 'after');
    }

    // 将节点移动到另一个节点的前面或后面
  }, {
    key: "insertTo",
    value: function insertTo(node, exist) {
      var _this14 = this;
      var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'before';
      var nodeList = formatDataToArray(node);
      nodeList = nodeList.filter(function (item) {
        return !item.isRoot;
      });
      if (dir === 'after') {
        nodeList.reverse();
      }
      nodeList.forEach(function (item) {
        _this14.checkNodeLayerChange(item, exist);
        // 移动节点
        var nodeParent = item.parent;
        var nodeBorthers = nodeParent.children;
        var nodeIndex = getNodeIndexInNodeList(item, nodeBorthers);
        if (nodeIndex === -1) {
          return;
        }
        nodeBorthers.splice(nodeIndex, 1);
        nodeParent.nodeData.children.splice(nodeIndex, 1);

        // 目标节点
        var existParent = exist.parent;
        var existBorthers = existParent.children;
        var existIndex = getNodeIndexInNodeList(exist, existBorthers);
        if (existIndex === -1) {
          return;
        }
        if (dir === 'after') {
          existIndex++;
        }
        existBorthers.splice(existIndex, 0, item);
        existParent.nodeData.children.splice(existIndex, 0, item.nodeData);
      });
      this.mindMap.render();
    }

    // 如果是富文本模式，那么某些层级变化需要更新样式
  }, {
    key: "checkNodeLayerChange",
    value: function checkNodeLayerChange(node, toNode) {
      var toNodeIsParent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (this.hasRichTextPlugin()) {
        // 如果设置了自定义样式那么不需要更新
        if (this.mindMap.richText.checkNodeHasCustomRichTextStyle(node)) {
          return;
        }
        var toIndex = toNodeIsParent ? toNode.layerIndex + 1 : toNode.layerIndex;
        var nodeLayerChanged = node.layerIndex === 1 && toIndex !== 1 || node.layerIndex !== 1 && toIndex === 1;
        if (nodeLayerChanged) {
          node.setData({
            resetRichText: true
          });
        }
      }
    }

    //  移除节点
  }, {
    key: "removeNode",
    value: function removeNode() {
      var appointNodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      appointNodes = formatDataToArray(appointNodes);
      if (this.activeNodeList.length <= 0 && appointNodes.length <= 0) {
        return;
      }
      // 删除节点后需要激活的节点
      var needActiveNode = null;
      var isAppointNodes = appointNodes.length > 0;
      var list = isAppointNodes ? appointNodes : this.activeNodeList;
      var root = list.find(function (node) {
        return node.isRoot;
      });
      if (root) {
        this.clearActiveNodeList();
        root.children = [];
        root.nodeData.children = [];
      } else {
        // 如果只选中了一个节点，删除后激活其兄弟节点或者父节点
        needActiveNode = this.getNextActiveNode(list);
        for (var i = 0; i < list.length; i++) {
          var node = list[i];
          var currentEditNode = this.textEdit.getCurrentEditNode();
          if (currentEditNode && currentEditNode.getData('uid') === node.getData('uid')) {
            // 如果当前节点正在编辑中，那么先完成编辑
            this.textEdit.hideEditTextBox();
          }
          if (isAppointNodes) list.splice(i, 1);
          if (node.isGeneralization) {
            this.deleteNodeGeneralization(node);
            this.removeNodeFromActiveList(node);
            i--;
          } else {
            this.removeNodeFromActiveList(node);
            removeFromParentNodeData(node);
            i--;
          }
        }
      }
      this.activeNodeList = [];
      // 激活被删除节点的兄弟节点或父节点
      if (needActiveNode) {
        this.addNodeToActiveList(needActiveNode);
      }
      this.emitNodeActiveEvent();
      this.mindMap.render();
    }

    // 删除概要节点，即从所属节点里删除该概要
  }, {
    key: "deleteNodeGeneralization",
    value: function deleteNodeGeneralization(node) {
      var targetNode = node.generalizationBelongNode;
      var index = targetNode.getGeneralizationNodeIndex(node);
      var generalization = targetNode.getData('generalization');
      if (Array.isArray(generalization)) {
        generalization.splice(index, 1);
      } else {
        generalization = null;
      }
      // 删除概要节点
      this.mindMap.execCommand('SET_NODE_DATA', targetNode, {
        generalization: generalization
      });
      this.closeHighlightNode();
    }

    // 仅删除当前节点
  }, {
    key: "removeCurrentNode",
    value: function removeCurrentNode() {
      var appointNodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      appointNodes = formatDataToArray(appointNodes);
      if (this.activeNodeList.length <= 0 && appointNodes.length <= 0) {
        return;
      }
      var isAppointNodes = appointNodes.length > 0;
      var list = isAppointNodes ? appointNodes : this.activeNodeList;
      list = list.filter(function (node) {
        return !node.isRoot;
      });
      // 删除节点后需要激活的节点，如果只选中了一个节点，删除后激活其兄弟节点或者父节点
      var needActiveNode = this.getNextActiveNode(list);
      for (var i = 0; i < list.length; i++) {
        var node = list[i];
        if (node.isGeneralization) {
          // 删除概要节点
          this.deleteNodeGeneralization(node);
        } else {
          var _parent$nodeData$chil2;
          var parent = node.parent;
          var index = getNodeDataIndex(node);
          (_parent$nodeData$chil2 = parent.nodeData.children).splice.apply(_parent$nodeData$chil2, [index, 1].concat(_toConsumableArray(node.nodeData.children || [])));
        }
      }
      this.activeNodeList = [];
      // 激活被删除节点的兄弟节点或父节点
      if (needActiveNode) {
        this.addNodeToActiveList(needActiveNode);
      }
      this.emitNodeActiveEvent();
      this.mindMap.render();
    }

    // 计算下一个可激活的节点
  }, {
    key: "getNextActiveNode",
    value: function getNextActiveNode(deleteList) {
      // 删除多个节点不自动激活相邻节点
      if (deleteList.length !== 1) return null;
      // 被删除的节点不在当前激活的节点列表里，不激活相邻节点
      if (this.findActiveNodeIndex(deleteList[0]) === -1) return null;
      var needActiveNode = null;
      if (this.activeNodeList.length === 1 && !this.activeNodeList[0].isGeneralization && this.mindMap.opt.deleteNodeActive) {
        var node = this.activeNodeList[0];
        var broList = node.parent.children;
        var nodeIndex = getNodeIndexInNodeList(node, broList);
        // 如果后面有兄弟节点
        if (nodeIndex < broList.length - 1) {
          needActiveNode = broList[nodeIndex + 1];
        } else {
          // 如果前面有兄弟节点
          if (nodeIndex > 0) {
            needActiveNode = broList[nodeIndex - 1];
          } else {
            // 没有兄弟节点
            needActiveNode = node.parent;
          }
        }
      }
      return needActiveNode;
    }

    //  复制节点
  }, {
    key: "copyNode",
    value: function copyNode() {
      if (this.activeNodeList.length <= 0) {
        return null;
      }
      var nodeList = getTopAncestorsFomNodeList(this.activeNodeList);
      nodeList = sortNodeList(nodeList);
      return nodeList.map(function (node) {
        return _copyNodeTree({}, node, true);
      });
    }

    //  剪切节点
  }, {
    key: "cutNode",
    value: function cutNode(callback) {
      if (this.activeNodeList.length <= 0) {
        return;
      }
      // 找出激活节点中的顶层节点列表，并过滤掉根节点
      var nodeList = getTopAncestorsFomNodeList(this.activeNodeList).filter(function (node) {
        return !node.isRoot;
      });
      nodeList = sortNodeList(nodeList);
      // 复制数据
      var copyData = nodeList.map(function (node) {
        return _copyNodeTree({}, node, true);
      });
      // 从父节点的数据中移除
      nodeList.forEach(function (node) {
        removeFromParentNodeData(node);
      });
      // 清空激活节点列表
      this.clearActiveNodeList();
      this.mindMap.render();
      if (callback && typeof callback === 'function') {
        callback(copyData);
      }
    }

    //  移动节点作为另一个节点的子节点
  }, {
    key: "moveNodeTo",
    value: function moveNodeTo(node, toNode) {
      var _this15 = this;
      var nodeList = formatDataToArray(node);
      nodeList = nodeList.filter(function (item) {
        return !item.isRoot;
      });
      nodeList.forEach(function (item) {
        _this15.checkNodeLayerChange(item, toNode, true);
        _this15.removeNodeFromActiveList(item);
        removeFromParentNodeData(item);
        toNode.setData({
          expand: true
        });
        toNode.nodeData.children.push(item.nodeData);
      });
      this.emitNodeActiveEvent();
      this.mindMap.render();
    }

    //   粘贴节点到节点
  }, {
    key: "pasteNode",
    value: function pasteNode(data) {
      var _this16 = this;
      data = formatDataToArray(data);
      if (this.activeNodeList.length <= 0 || data.length <= 0) {
        return;
      }
      this.activeNodeList.forEach(function (node) {
        var _node$nodeData$childr2;
        // 概要节点不允许添加下级节点
        if (node.isGeneralization) return;
        node.setData({
          expand: true
        });
        (_node$nodeData$childr2 = node.nodeData.children).push.apply(_node$nodeData$childr2, _toConsumableArray(data.map(function (item) {
          var newData = simpleDeepClone(item);
          createUidForAppointNodes([newData], true, function (node) {
            // 可能跨层级复制，那么富文本样式需要更新
            if (_this16.hasRichTextPlugin()) {
              // 如果设置了自定义样式那么不需要更新
              if (_this16.mindMap.richText.checkNodeHasCustomRichTextStyle(node.data)) {
                return;
              }
              node.data.resetRichText = true;
            }
          });
          return newData;
        })));
      });
      this.mindMap.render();
    }

    //  设置节点样式
  }, {
    key: "setNodeStyle",
    value: function setNodeStyle(node, prop, value) {
      var data = _defineProperty({}, prop, value);
      // 如果开启了富文本，则需要应用到富文本上
      if (this.hasRichTextPlugin() && this.mindMap.richText.isHasRichTextStyle(data)) {
        data.resetRichText = true;
      }
      this.setNodeDataRender(node, data);
      // 更新了连线的样式
      if (lineStyleProps.includes(prop)) {
        (node.parent || node).renderLine(true);
      }
    }

    //  设置节点多个样式
  }, {
    key: "setNodeStyles",
    value: function setNodeStyles(node, style) {
      var data = _objectSpread2({}, style);
      // 如果开启了富文本，则需要应用到富文本上
      if (this.hasRichTextPlugin() && this.mindMap.richText.isHasRichTextStyle(data)) {
        data.resetRichText = true;
      }
      this.setNodeDataRender(node, data);
      // 更新了连线的样式
      var props = Object.keys(style);
      var hasLineStyleProps = false;
      props.forEach(function (key) {
        if (lineStyleProps.includes(key)) {
          hasLineStyleProps = true;
        }
      });
      if (hasLineStyleProps) {
        (node.parent || node).renderLine(true);
      }
    }

    //  设置节点是否激活
  }, {
    key: "setNodeActive",
    value: function setNodeActive(node, active) {
      this.mindMap.execCommand('SET_NODE_DATA', node, {
        isActive: active
      });
      node.updateNodeByActive(active);
    }

    //  设置节点是否展开
  }, {
    key: "setNodeExpand",
    value: function setNodeExpand(node, expand) {
      this.mindMap.execCommand('SET_NODE_DATA', node, {
        expand: expand
      });
      this.mindMap.render();
    }

    //  展开所有
  }, {
    key: "expandAllNode",
    value: function expandAllNode() {
      var uid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      if (!this.renderTree) return;
      var _walk2 = function _walk(node, enableExpand) {
        // 如果该节点为目标节点，那么修改允许展开的标志
        if (!enableExpand && node.data.uid === uid) {
          enableExpand = true;
        }
        if (enableExpand && !node.data.expand) {
          node.data.expand = true;
        }
        if (node.children && node.children.length > 0) {
          node.children.forEach(function (child) {
            _walk2(child, enableExpand);
          });
        }
      };
      _walk2(this.renderTree, !uid);
      this.mindMap.render();
    }

    //  收起所有
  }, {
    key: "unexpandAllNode",
    value: function unexpandAllNode() {
      var _this17 = this;
      var isSetRootNodeCenter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var uid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      if (!this.renderTree) return;
      var _walk3 = function _walk(node, isRoot, enableUnExpand) {
        // 如果该节点为目标节点，那么修改允许展开的标志
        if (!enableUnExpand && node.data.uid === uid) {
          enableUnExpand = true;
        }
        if (enableUnExpand && !isRoot && node.children && node.children.length > 0) {
          node.data.expand = false;
        }
        if (node.children && node.children.length > 0) {
          node.children.forEach(function (child) {
            _walk3(child, false, enableUnExpand);
          });
        }
      };
      _walk3(this.renderTree, true, !uid);
      this.mindMap.render(function () {
        if (isSetRootNodeCenter) {
          _this17.setRootNodeCenter();
        }
      });
    }

    //  展开到指定层级
  }, {
    key: "expandToLevel",
    value: function expandToLevel(level) {
      if (!this.renderTree) return;
      _walk(this.renderTree, null, function (node, parent, isRoot, layerIndex) {
        var expand = layerIndex < level;
        if (expand) {
          node.data.expand = true;
        } else if (!isRoot && node.children && node.children.length > 0) {
          node.data.expand = false;
        }
      }, null, true, 0, 0);
      this.mindMap.render();
    }

    //  切换激活节点的展开状态
  }, {
    key: "toggleActiveExpand",
    value: function toggleActiveExpand() {
      var _this18 = this;
      this.activeNodeList.forEach(function (node) {
        if (node.nodeData.children.length <= 0 || node.isRoot) {
          return;
        }
        _this18.toggleNodeExpand(node);
      });
    }

    //  切换节点展开状态
  }, {
    key: "toggleNodeExpand",
    value: function toggleNodeExpand(node) {
      this.mindMap.execCommand('SET_NODE_EXPAND', node, !node.getData('expand'));
    }

    //  设置节点文本
  }, {
    key: "setNodeText",
    value: function setNodeText(node, text, richText, resetRichText) {
      richText = richText === undefined ? node.getData('richText') : richText;
      this.setNodeDataRender(node, {
        text: text,
        richText: richText,
        resetRichText: resetRichText
      });
    }

    //  设置节点图片
  }, {
    key: "setNodeImage",
    value: function setNodeImage(node, data) {
      var _ref2 = data || {
          url: '',
          title: '',
          width: 0,
          height: 0,
          custom: false
        },
        url = _ref2.url,
        title = _ref2.title,
        width = _ref2.width,
        height = _ref2.height,
        _ref2$custom = _ref2.custom,
        custom = _ref2$custom === void 0 ? false : _ref2$custom;
      this.setNodeDataRender(node, {
        image: url,
        imageTitle: title || '',
        imageSize: {
          width: width,
          height: height,
          custom: custom
        }
      });
    }

    //  设置节点图标
  }, {
    key: "setNodeIcon",
    value: function setNodeIcon(node, icons) {
      this.setNodeDataRender(node, {
        icon: icons
      });
    }

    //  设置节点超链接
  }, {
    key: "setNodeHyperlink",
    value: function setNodeHyperlink(node, link) {
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      this.setNodeDataRender(node, {
        hyperlink: link,
        hyperlinkTitle: title
      });
    }

    //  设置节点备注
  }, {
    key: "setNodeNote",
    value: function setNodeNote(node, note) {
      this.setNodeDataRender(node, {
        note: note
      });
    }

    //  设置节点附件
  }, {
    key: "setNodeAttachment",
    value: function setNodeAttachment(node, url) {
      var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      this.setNodeDataRender(node, {
        attachmentUrl: url,
        attachmentName: name
      });
    }

    //  设置节点标签
  }, {
    key: "setNodeTag",
    value: function setNodeTag(node, tag) {
      this.setNodeDataRender(node, {
        tag: tag
      });
    }

    // 设置节点公式
  }, {
    key: "insertFormula",
    value: function insertFormula(formula) {
      var _this19 = this;
      var appointNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      // 只在富文本模式下可用，并且需要注册Formula插件
      if (!this.hasRichTextPlugin() || !this.mindMap.formula) return;
      appointNodes = formatDataToArray(appointNodes);
      var list = appointNodes.length > 0 ? appointNodes : this.activeNodeList;
      list.forEach(function (node) {
        _this19.mindMap.formula.insertFormulaToNode(node, formula);
      });
    }

    //  添加节点概要
  }, {
    key: "addGeneralization",
    value: function addGeneralization(data) {
      var _this20 = this;
      var openEdit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (this.activeNodeList.length <= 0) {
        return;
      }
      var nodeList = this.activeNodeList.filter(function (node) {
        return !node.isRoot && !node.isGeneralization && !node.checkHasSelfGeneralization();
      });
      var list = parseAddGeneralizationNodeList(nodeList);
      if (list.length <= 0) return;
      var isRichText = this.hasRichTextPlugin();
      var _this$getNewNodeBehav6 = this.getNewNodeBehavior(openEdit, list.length > 1),
        focusNewNode = _this$getNewNodeBehav6.focusNewNode,
        inserting = _this$getNewNodeBehav6.inserting;
      var needRender = false;
      list.forEach(function (item) {
        var newData = _objectSpread2(_objectSpread2({
          inserting: inserting
        }, data || {
          text: _this20.mindMap.opt.defaultGeneralizationText
        }), {}, {
          range: item.range || null,
          uid: createUid(),
          richText: isRichText,
          isActive: focusNewNode
        });
        if (isRichText) newData.resetRichText = isRichText;
        var generalization = item.node.getData('generalization');
        generalization = generalization ? Array.isArray(generalization) ? generalization : [generalization] : [];
        // 如果是范围概要，那么检查该范围是否存在
        if (item.range) {
          var isExist = !!generalization.find(function (item2) {
            return item2.range && item2.range[0] === item.range[0] && item2.range[1] === item.range[1];
          });
          if (isExist) {
            return;
          }
          // 不存在则添加
          generalization.push(newData);
        } else {
          // 不是范围概要直接添加，因为前面已经判断过是否存在
          generalization.push(newData);
        }
        needRender = true;
        _this20.mindMap.execCommand('SET_NODE_DATA', item.node, {
          generalization: generalization
        });
        // 插入子节点时自动展开子节点
        item.node.setData({
          expand: true
        });
      });
      if (!needRender) return;
      // 需要清除原来激活的节点
      if (focusNewNode) {
        this.clearActiveNodeList();
      }
      this.mindMap.render(function () {
        // 修复祖先节点存在概要时位置未更新的问题
        // 修复同时给存在上下级关系的节点添加概要时重叠的问题
        _this20.mindMap.render();
      });
    }

    //  删除节点概要
  }, {
    key: "removeGeneralization",
    value: function removeGeneralization() {
      var _this21 = this;
      if (this.activeNodeList.length <= 0) {
        return;
      }
      this.activeNodeList.forEach(function (node) {
        if (!node.checkHasGeneralization()) {
          return;
        }
        _this21.mindMap.execCommand('SET_NODE_DATA', node, {
          generalization: null
        });
      });
      this.mindMap.render();
      this.closeHighlightNode();
    }

    //  设置节点自定义位置
  }, {
    key: "setNodeCustomPosition",
    value: function setNodeCustomPosition(node) {
      var _this22 = this;
      var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var top = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var nodeList = [node] || this.activeNodeList;
      nodeList.forEach(function (item) {
        _this22.mindMap.execCommand('SET_NODE_DATA', item, {
          customLeft: left,
          customTop: top
        });
      });
    }

    //  一键整理布局，即去除自定义位置
  }, {
    key: "resetLayout",
    value: function resetLayout() {
      var _this23 = this;
      _walk(this.root, null, function (node) {
        node.customLeft = undefined;
        node.customTop = undefined;
        _this23.mindMap.execCommand('SET_NODE_DATA', node, {
          customLeft: undefined,
          customTop: undefined
        });
        _this23.mindMap.render();
      }, null, true, 0, 0);
    }

    //  设置节点形状
  }, {
    key: "setNodeShape",
    value: function setNodeShape(node, shape) {
      var _this24 = this;
      if (!shape || !shapeList.includes(shape)) {
        return;
      }
      var nodeList = [node] || this.activeNodeList;
      nodeList.forEach(function (item) {
        _this24.setNodeStyle(item, 'shape', shape);
      });
    }

    // 定位到指定节点
  }, {
    key: "goTargetNode",
    value: function goTargetNode(node) {
      var _this25 = this;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var uid = typeof node === 'string' ? node : node.getData('uid');
      if (!uid) return;
      this.expandToNodeUid(uid, function () {
        var targetNode = _this25.findNodeByUid(uid);
        if (targetNode) {
          targetNode.active();
          _this25.moveNodeToCenter(targetNode);
          callback(targetNode);
        }
      });
    }

    //  更新节点数据
  }, {
    key: "setNodeData",
    value: function setNodeData(node, data) {
      Object.keys(data).forEach(function (key) {
        node.nodeData.data[key] = data[key];
      });
    }

    //  设置节点数据，并判断是否渲染
  }, {
    key: "setNodeDataRender",
    value: function setNodeDataRender(node, data) {
      var notRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.mindMap.execCommand('SET_NODE_DATA', node, data);
      if (isNodeNotNeedRenderData(data)) {
        this.mindMap.emit('node_tree_render_end');
        return;
      }
      this.reRenderNodeCheckChange(node, notRender);
    }

    // 重新节点某个节点，判断节点大小是否发生了改变，是的话触发重绘
  }, {
    key: "reRenderNodeCheckChange",
    value: function reRenderNodeCheckChange(node, notRender) {
      var changed = node.reRender();
      if (changed) {
        if (!notRender) this.mindMap.render();
      } else {
        this.mindMap.emit('node_tree_render_end');
      }
    }

    // 移动节点到画布中心
    // resetScale参数指定是否要将画布缩放值复位为100%，当你没有显式传递时，默认值为undefined，因为实例化选项的resetScaleOnMoveNodeToCenter配置也会决定是否复位缩放，所以当你没有显式传递时使用resetScaleOnMoveNodeToCenter配置，否则使用resetScale配置
  }, {
    key: "moveNodeToCenter",
    value: function moveNodeToCenter(node, resetScale) {
      var resetScaleOnMoveNodeToCenter = this.mindMap.opt.resetScaleOnMoveNodeToCenter;
      if (resetScale !== undefined) {
        resetScaleOnMoveNodeToCenter = resetScale;
      }
      var _this$mindMap$view$ge = this.mindMap.view.getTransformData(),
        transform = _this$mindMap$view$ge.transform,
        state = _this$mindMap$view$ge.state;
      var left = node.left,
        top = node.top,
        width = node.width,
        height = node.height;
      if (!resetScaleOnMoveNodeToCenter) {
        left *= transform.scaleX;
        top *= transform.scaleY;
        width *= transform.scaleX;
        height *= transform.scaleY;
      }
      var halfWidth = this.mindMap.width / 2;
      var halfHeight = this.mindMap.height / 2;
      var nodeCenterX = left + width / 2;
      var nodeCenterY = top + height / 2;
      var targetX = halfWidth - state.x;
      var targetY = halfHeight - state.y;
      var offsetX = targetX - nodeCenterX;
      var offsetY = targetY - nodeCenterY;
      this.mindMap.view.translateX(offsetX);
      this.mindMap.view.translateY(offsetY);
      if (resetScaleOnMoveNodeToCenter) {
        this.mindMap.view.setScale(1);
      }
    }

    // 回到中心主题，即设置根节点到画布中心
  }, {
    key: "setRootNodeCenter",
    value: function setRootNodeCenter() {
      this.moveNodeToCenter(this.root);
    }

    // 展开到指定uid的节点
  }, {
    key: "expandToNodeUid",
    value: function expandToNodeUid(uid) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      if (!this.renderTree) {
        callback();
        return;
      }
      var parentsList = [];
      var isGeneralization = false;
      var cache = {};
      bfsWalk(this.renderTree, function (node, parent) {
        if (node.data.uid === uid) {
          parentsList = parent ? [].concat(_toConsumableArray(cache[parent.data.uid]), [parent]) : [];
          return 'stop';
        }
        var generalizationList = formatGetNodeGeneralization(node.data);
        generalizationList.forEach(function (item) {
          if (item.uid === uid) {
            parentsList = parent ? [].concat(_toConsumableArray(cache[parent.data.uid]), [parent, node]) : [];
            isGeneralization = true;
          }
        });
        if (isGeneralization) {
          return 'stop';
        }
        cache[node.data.uid] = parent ? [].concat(_toConsumableArray(cache[parent.data.uid]), [parent]) : [];
      });
      var needRender = false;
      parentsList.forEach(function (node) {
        if (!node.data.expand) {
          needRender = true;
          node.data.expand = true;
        }
      });
      // 如果是展开到概要节点，那么父节点下的所有节点都需要开
      if (isGeneralization) {
        var lastNode = parentsList[parentsList.length - 1];
        if (lastNode) {
          _walk(lastNode, null, function (node) {
            if (!node.data.expand) {
              needRender = true;
              node.data.expand = true;
            }
          });
        }
      }
      if (needRender) {
        this.mindMap.render(callback);
      } else {
        callback();
      }
    }

    // 根据uid找到对应的节点实例
  }, {
    key: "findNodeByUid",
    value: function findNodeByUid(uid) {
      if (!this.root) return;
      var res = null;
      _walk(this.root, null, function (node) {
        if (node.getData('uid') === uid) {
          res = node;
          return true;
        }
        // 概要节点
        var isGeneralization = false;
        (node._generalizationList || []).forEach(function (item) {
          if (item.generalizationNode.getData('uid') === uid) {
            res = item.generalizationNode;
            isGeneralization = true;
          }
        });
        if (isGeneralization) {
          return true;
        }
      });
      return res;
    }

    // 高亮节点或子节点
  }, {
    key: "highlightNode",
    value: function highlightNode(node, range, style) {
      // 如果当前正在渲染，那么不进行高亮，因为节点位置可能不正确
      if (this.isRendering) return;
      style = _objectSpread2({
        stroke: 'rgb(94, 200, 248)',
        fill: 'transparent'
      }, style || {});
      // 尚未创建
      if (!this.highlightBoxNode) {
        this.highlightBoxNode = new Polygon().stroke({
          color: style.stroke || 'transparent'
        }).fill({
          color: style.fill || 'transparent'
        });
      } else if (this.highlightBoxNodeStyle) {
        // 样式更新了
        if (this.highlightBoxNodeStyle.stroke !== style.stroke || this.highlightBoxNodeStyle.fill !== style.fill) {
          this.highlightBoxNode.stroke({
            color: style.stroke || 'transparent'
          }).fill({
            color: style.fill || 'transparent'
          });
        }
      }
      this.highlightBoxNodeStyle = _objectSpread2({}, style);
      var minx = Infinity,
        miny = Infinity,
        maxx = -Infinity,
        maxy = -Infinity;
      if (range) {
        var children = node.children.slice(range[0], range[1] + 1);
        children.forEach(function (child) {
          if (child.left < minx) {
            minx = child.left;
          }
          if (child.top < miny) {
            miny = child.top;
          }
          var right = child.left + child.width;
          var bottom = child.top + child.height;
          if (right > maxx) {
            maxx = right;
          }
          if (bottom > maxy) {
            maxy = bottom;
          }
        });
      } else {
        minx = node.left;
        miny = node.top;
        maxx = node.left + node.width;
        maxy = node.top + node.height;
      }
      this.highlightBoxNode.plot([[minx, miny], [maxx, miny], [maxx, maxy], [minx, maxy]]);
      this.mindMap.otherDraw.add(this.highlightBoxNode);
    }

    // 关闭高亮
  }, {
    key: "closeHighlightNode",
    value: function closeHighlightNode() {
      if (!this.highlightBoxNode) return;
      this.highlightBoxNode.remove();
    }

    // 是否存在富文本插件
  }, {
    key: "hasRichTextPlugin",
    value: function hasRichTextPlugin() {
      return !!this.mindMap.richText;
    }
  }]);
}();

var theme = {
  default: defaultTheme
};

var map = {
  Backspace: 8,
  Tab: 9,
  Enter: 13,
  Shift: 16,
  Control: 17,
  Alt: 18,
  CapsLock: 20,
  Esc: 27,
  Spacebar: 32,
  PageUp: 33,
  PageDown: 34,
  End: 35,
  Home: 36,
  Insert: 45,
  Left: 37,
  Up: 38,
  Right: 39,
  Down: 40,
  Del: 46,
  NumLock: 144,
  Cmd: 91,
  CmdFF: 224,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  '`': 192,
  '=': 187,
  '-': 189,
  '/': 191,
  '.': 190
};

// 数字
for (var i = 0; i <= 9; i++) {
  map[i] = i + 48;
}

// 字母
'abcdefghijklmnopqrstuvwxyz'.split('').forEach(function (n, index) {
  map[n] = index + 65;
});
var keyMap = map;

//  快捷按键、命令处理类
var KeyCommand = /*#__PURE__*/function () {
  //  构造函数
  function KeyCommand(opt) {
    _classCallCheck(this, KeyCommand);
    this.opt = opt;
    this.mindMap = opt.mindMap;
    this.shortcutMap = {
      //Enter: [fn]
    };
    this.shortcutMapCache = {};
    this.isPause = false;
    this.isInSvg = false;
    this.bindEvent();
  }

  // 扩展按键映射
  return _createClass(KeyCommand, [{
    key: "extendKeyMap",
    value: function extendKeyMap(key, code) {
      keyMap[key] = code;
    }

    // 从按键映射中删除某个键
  }, {
    key: "removeKeyMap",
    value: function removeKeyMap(key) {
      if (typeof keyMap[key] !== 'undefined') {
        delete keyMap[key];
      }
    }

    //  暂停快捷键响应
  }, {
    key: "pause",
    value: function pause() {
      this.isPause = true;
    }

    //  恢复快捷键响应
  }, {
    key: "recovery",
    value: function recovery() {
      this.isPause = false;
    }

    //  保存当前注册的快捷键数据，然后清空快捷键数据
  }, {
    key: "save",
    value: function save() {
      // 当前已经存在缓存数据了，那么直接返回
      if (Object.keys(this.shortcutMapCache).length > 0) {
        return;
      }
      this.shortcutMapCache = this.shortcutMap;
      this.shortcutMap = {};
    }

    //  恢复保存的快捷键数据，然后清空缓存数据
  }, {
    key: "restore",
    value: function restore() {
      // 当前不存在缓存数据，那么直接返回
      if (Object.keys(this.shortcutMapCache).length <= 0) {
        return;
      }
      this.shortcutMap = this.shortcutMapCache;
      this.shortcutMapCache = {};
    }

    //  绑定事件
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this = this;
      this.onKeydown = this.onKeydown.bind(this);
      // 只有当鼠标在画布内才响应快捷键
      this.mindMap.on('svg_mouseenter', function () {
        _this.isInSvg = true;
      });
      this.mindMap.on('svg_mouseleave', function () {
        if (_this.mindMap.renderer.textEdit.isShowTextEdit()) return;
        if (_this.mindMap.associativeLine && _this.mindMap.associativeLine.showTextEdit) {
          return;
        }
        _this.isInSvg = false;
      });
      window.addEventListener('keydown', this.onKeydown);
      this.mindMap.on('beforeDestroy', function () {
        _this.unBindEvent();
      });
    }

    // 解绑事件
  }, {
    key: "unBindEvent",
    value: function unBindEvent() {
      window.removeEventListener('keydown', this.onKeydown);
    }

    // 根据事件目标判断是否响应快捷键事件
  }, {
    key: "defaultEnableCheck",
    value: function defaultEnableCheck(e) {
      var target = e.target;
      return target === document.body || target.classList.contains(CONSTANTS.EDIT_NODE_CLASS.SMM_NODE_EDIT_WRAP) || target.classList.contains(CONSTANTS.EDIT_NODE_CLASS.RICH_TEXT_EDIT_WRAP) || target.classList.contains(CONSTANTS.EDIT_NODE_CLASS.ASSOCIATIVE_LINE_TEXT_EDIT_WRAP);
    }

    // 按键事件
  }, {
    key: "onKeydown",
    value: function onKeydown(e) {
      var _this2 = this;
      var _this$mindMap$opt = this.mindMap.opt,
        enableShortcutOnlyWhenMouseInSvg = _this$mindMap$opt.enableShortcutOnlyWhenMouseInSvg,
        beforeShortcutRun = _this$mindMap$opt.beforeShortcutRun,
        customCheckEnableShortcut = _this$mindMap$opt.customCheckEnableShortcut;
      var checkFn = typeof customCheckEnableShortcut === 'function' ? customCheckEnableShortcut : this.defaultEnableCheck;
      if (!checkFn(e)) return;
      if (this.isPause || enableShortcutOnlyWhenMouseInSvg && !this.isInSvg) {
        return;
      }
      Object.keys(this.shortcutMap).forEach(function (key) {
        if (_this2.checkKey(e, key)) {
          // 粘贴事件不组织，因为要监听paste事件
          if (!_this2.checkKey(e, 'Control+v')) {
            e.stopPropagation();
            e.preventDefault();
          }
          if (typeof beforeShortcutRun === 'function') {
            var isStop = beforeShortcutRun(key, _toConsumableArray(_this2.mindMap.renderer.activeNodeList));
            if (isStop) return;
          }
          _this2.shortcutMap[key].forEach(function (fn) {
            fn();
          });
        }
      });
    }

    //  检查键值是否符合
  }, {
    key: "checkKey",
    value: function checkKey(e, key) {
      var o = this.getOriginEventCodeArr(e);
      var k = this.getKeyCodeArr(key);
      if (o.length !== k.length) {
        return false;
      }
      var _loop = function _loop(i) {
          var index = k.findIndex(function (item) {
            return item === o[i];
          });
          if (index === -1) {
            return {
              v: false
            };
          } else {
            k.splice(index, 1);
          }
        },
        _ret;
      for (var i = 0; i < o.length; i++) {
        _ret = _loop(i);
        if (_ret) return _ret.v;
      }
      return true;
    }

    //  获取事件对象里的键值数组
  }, {
    key: "getOriginEventCodeArr",
    value: function getOriginEventCodeArr(e) {
      var arr = [];
      if (e.ctrlKey || e.metaKey) {
        arr.push(keyMap['Control']);
      }
      if (e.altKey) {
        arr.push(keyMap['Alt']);
      }
      if (e.shiftKey) {
        arr.push(keyMap['Shift']);
      }
      if (!arr.includes(e.keyCode)) {
        arr.push(e.keyCode);
      }
      return arr;
    }

    // 判断是否按下了组合键
  }, {
    key: "hasCombinationKey",
    value: function hasCombinationKey(e) {
      return e.ctrlKey || e.metaKey || e.altKey || e.shiftKey;
    }

    //  获取快捷键对应的键值数组
  }, {
    key: "getKeyCodeArr",
    value: function getKeyCodeArr(key) {
      var keyArr = key.split(/\s*\+\s*/);
      var arr = [];
      keyArr.forEach(function (item) {
        arr.push(keyMap[item]);
      });
      return arr;
    }

    //  添加快捷键命令
    /**
     * Enter
     * Tab | Insert
     * Shift + a
     */
  }, {
    key: "addShortcut",
    value: function addShortcut(key, fn) {
      var _this3 = this;
      key.split(/\s*\|\s*/).forEach(function (item) {
        if (_this3.shortcutMap[item]) {
          _this3.shortcutMap[item].push(fn);
        } else {
          _this3.shortcutMap[item] = [fn];
        }
      });
    }

    //  移除快捷键命令
  }, {
    key: "removeShortcut",
    value: function removeShortcut(key, fn) {
      var _this4 = this;
      key.split(/\s*\|\s*/).forEach(function (item) {
        if (_this4.shortcutMap[item]) {
          if (fn) {
            var index = _this4.shortcutMap[item].findIndex(function (f) {
              return f === fn;
            });
            if (index !== -1) {
              _this4.shortcutMap[item].splice(index, 1);
            }
          } else {
            _this4.shortcutMap[item] = [];
            delete _this4.shortcutMap[item];
          }
        }
      });
    }

    //  获取指定快捷键的处理函数
  }, {
    key: "getShortcutFn",
    value: function getShortcutFn(key) {
      var _this5 = this;
      var res = [];
      key.split(/\s*\|\s*/).forEach(function (item) {
        res = _this5.shortcutMap[item] || [];
      });
      return res;
    }
  }]);
}();

//  命令类
var Command = /*#__PURE__*/function () {
  //  构造函数
  function Command() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Command);
    this.opt = opt;
    this.mindMap = opt.mindMap;
    this.commands = {};
    this.history = [];
    this.activeHistoryIndex = 0;
    // 注册快捷键
    this.registerShortcutKeys();
    this.originAddHistory = this.addHistory.bind(this);
    this.addHistory = throttle(this.addHistory, this.mindMap.opt.addHistoryTime, this);
    // 是否暂停收集历史数据
    this.isPause = false;
  }

  // 暂停收集历史数据
  return _createClass(Command, [{
    key: "pause",
    value: function pause() {
      this.isPause = true;
    }

    // 恢复收集历史数据
  }, {
    key: "recovery",
    value: function recovery() {
      this.isPause = false;
    }

    //  清空历史数据
  }, {
    key: "clearHistory",
    value: function clearHistory() {
      this.history = [];
      this.activeHistoryIndex = 0;
      this.mindMap.emit('back_forward', 0, 0);
    }

    //  注册快捷键
  }, {
    key: "registerShortcutKeys",
    value: function registerShortcutKeys() {
      var _this = this;
      this.mindMap.keyCommand.addShortcut('Control+z', function () {
        _this.mindMap.execCommand('BACK');
      });
      this.mindMap.keyCommand.addShortcut('Control+y', function () {
        _this.mindMap.execCommand('FORWARD');
      });
    }

    //  执行命令
  }, {
    key: "exec",
    value: function exec(name) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (this.commands[name]) {
        var _this$mindMap;
        this.commands[name].forEach(function (fn) {
          fn.apply(void 0, args);
        });
        (_this$mindMap = this.mindMap).emit.apply(_this$mindMap, ['afterExecCommand', name].concat(args));
        if (['BACK', 'FORWARD', 'SET_NODE_ACTIVE', 'CLEAR_ACTIVE_NODE'].includes(name)) {
          return;
        }
        this.addHistory();
      }
    }

    //  添加命令
  }, {
    key: "add",
    value: function add(name, fn) {
      if (this.commands[name]) {
        this.commands[name].push(fn);
      } else {
        this.commands[name] = [fn];
      }
    }

    //  移除命令
  }, {
    key: "remove",
    value: function remove(name, fn) {
      if (!this.commands[name]) {
        return;
      }
      if (!fn) {
        this.commands[name] = [];
        delete this.commands[name];
      } else {
        var index = this.commands[name].find(function (item) {
          return item === fn;
        });
        if (index !== -1) {
          this.commands[name].splice(index, 1);
        }
      }
    }

    //  添加回退数据
  }, {
    key: "addHistory",
    value: function addHistory() {
      if (this.mindMap.opt.readonly || this.isPause) {
        return;
      }
      var lastData = this.history.length > 0 ? this.history[this.activeHistoryIndex] : null;
      var data = this.getCopyData();
      // 此次数据和上次一样则不重复添加
      if (lastData === data) return;
      if (lastData && JSON.stringify(lastData) === JSON.stringify(data)) {
        return;
      }
      this.emitDataUpdatesEvent(lastData, data);
      // 删除当前历史指针后面的数据
      this.history = this.history.slice(0, this.activeHistoryIndex + 1);
      this.history.push(simpleDeepClone(data));
      // 历史记录数超过最大数量
      if (this.history.length > this.mindMap.opt.maxHistoryCount) {
        this.history.shift();
      }
      this.activeHistoryIndex = this.history.length - 1;
      this.mindMap.emit('data_change', data);
      this.mindMap.emit('back_forward', this.activeHistoryIndex, this.history.length);
    }

    //  回退
  }, {
    key: "back",
    value: function back() {
      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      if (this.mindMap.opt.readonly) {
        return;
      }
      if (this.activeHistoryIndex - step >= 0) {
        var lastData = this.history[this.activeHistoryIndex];
        this.activeHistoryIndex -= step;
        this.mindMap.emit('back_forward', this.activeHistoryIndex, this.history.length);
        var data = simpleDeepClone(this.history[this.activeHistoryIndex]);
        this.emitDataUpdatesEvent(lastData, data);
        return data;
      }
    }

    //  前进
  }, {
    key: "forward",
    value: function forward() {
      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      if (this.mindMap.opt.readonly) {
        return;
      }
      var len = this.history.length;
      if (this.activeHistoryIndex + step <= len - 1) {
        var lastData = this.history[this.activeHistoryIndex];
        this.activeHistoryIndex += step;
        this.mindMap.emit('back_forward', this.activeHistoryIndex, this.history.length);
        var data = simpleDeepClone(this.history[this.activeHistoryIndex]);
        this.emitDataUpdatesEvent(lastData, data);
        return data;
      }
    }

    //  获取渲染树数据副本
  }, {
    key: "getCopyData",
    value: function getCopyData() {
      if (!this.mindMap.renderer.renderTree) return null;
      return _copyRenderTree({}, this.mindMap.renderer.renderTree, true);
    }

    // 移除节点数据中的uid
  }, {
    key: "removeDataUid",
    value: function removeDataUid(data) {
      data = simpleDeepClone(data);
      var _walk = function walk(root) {
        delete root.data.uid;
        if (root.children && root.children.length > 0) {
          root.children.forEach(function (item) {
            _walk(item);
          });
        }
      };
      _walk(data);
      return data;
    }

    // 派发思维导图更新明细事件
  }, {
    key: "emitDataUpdatesEvent",
    value: function emitDataUpdatesEvent(lastData, data) {
      try {
        // 如果data_change_detail没有监听者，那么不进行计算，节省性能
        var eventName = 'data_change_detail';
        var count = this.mindMap.event.listenerCount(eventName);
        if (count > 0 && lastData && data) {
          var lastDataObj = simpleDeepClone(transformTreeDataToObject(lastData));
          var dataObj = simpleDeepClone(transformTreeDataToObject(data));
          var res = [];
          var _walkReplace = function walkReplace(root, obj) {
            if (root.children && root.children.length > 0) {
              root.children.forEach(function (childUid, index) {
                root.children[index] = typeof childUid === 'string' ? obj[childUid] : obj[childUid.data.uid];
                _walkReplace(root.children[index], obj);
              });
            }
            return root;
          };
          // 找出新增的或修改的
          Object.keys(dataObj).forEach(function (uid) {
            // 新增的或已经存在的，如果数据发生了改变
            if (!lastDataObj[uid]) {
              res.push({
                action: 'create',
                data: _walkReplace(dataObj[uid], dataObj)
              });
            } else if (!_isSameObject(lastDataObj[uid], dataObj[uid])) {
              res.push({
                action: 'update',
                oldData: _walkReplace(lastDataObj[uid], lastDataObj),
                data: _walkReplace(dataObj[uid], dataObj)
              });
            }
          });
          // 找出删除的
          Object.keys(lastDataObj).forEach(function (uid) {
            if (!dataObj[uid]) {
              res.push({
                action: 'delete',
                data: _walkReplace(lastDataObj[uid], lastDataObj)
              });
            }
          });
          this.mindMap.emit(eventName, res);
        }
      } catch (error) {
        this.mindMap.opt.errorHandler(ERROR_TYPES.DATA_CHANGE_DETAIL_EVENT_ERROR, error);
      }
    }
  }]);
}();

//  批量执行
var BatchExecution = /*#__PURE__*/function () {
  //  构造函数
  function BatchExecution() {
    _classCallCheck(this, BatchExecution);
    this.has = {};
    this.queue = [];
    this.nextTick = nextTick(this.flush, this);
  }

  //  添加任务
  return _createClass(BatchExecution, [{
    key: "push",
    value: function push(name, fn) {
      if (this.has[name]) {
        this.replaceTask(name, fn);
        return;
      }
      this.has[name] = true;
      this.queue.push({
        name: name,
        fn: fn
      });
      this.nextTick();
    }

    // 替换任务
  }, {
    key: "replaceTask",
    value: function replaceTask(name, fn) {
      var index = this.queue.findIndex(function (item) {
        return item.name === name;
      });
      if (index !== -1) {
        this.queue[index] = {
          name: name,
          fn: fn
        };
      }
    }

    //   执行队列
  }, {
    key: "flush",
    value: function flush() {
      var _this = this;
      var fns = this.queue.slice(0);
      this.queue = [];
      fns.forEach(function (_ref) {
        var name = _ref.name,
          fn = _ref.fn;
        _this.has[name] = false;
        fn();
      });
    }
  }]);
}();

// 默认选项配置
var defaultOpt = {
  // 【基本】
  // 容器元素，必传，必须为DOM元素
  el: null,
  // 思维导图回显数据
  data: null,
  // 要恢复的视图数据，一般通过mindMap.view.getTransformData()方法获取
  viewData: null,
  // 是否只读
  readonly: false,
  // 布局
  layout: CONSTANTS.LAYOUT.LOGICAL_STRUCTURE,
  // 如果结构为鱼骨图，那么可以通过该选项控制倾斜角度
  fishboneDeg: 45,
  // 主题
  theme: 'default',
  // 内置主题：default（默认主题）
  // 主题配置，会和所选择的主题进行合并
  themeConfig: {},
  // 放大缩小的增量比例
  scaleRatio: 0.2,
  // 平移的步长比例，只在鼠标滚轮和触控板触发的平移中应用
  translateRatio: 1,
  // 最小缩小值，百分数，最小为0，该选项只会影响view.narrow方法（影响的行为为Ctrl+-快捷键、鼠标滚轮及触控板），不会影响其他方法，比如view.setScale，所以需要你自行限制大小
  minZoomRatio: 20,
  // 最大放大值，百分数，传-1代表不限制，否则传0以上数字，，该选项只会影响view.enlarge方法
  maxZoomRatio: 400,
  // 自定义判断wheel事件是否来自电脑的触控板
  // 默认是通过判断e.deltaY的值是否小于10，显然这种方法是不准确的，当鼠标滚动的很慢，或者触摸移动的很快时判断就失效了，如果你有更好的方法，欢迎提交issue
  // 如果你希望自己来判断，那么传递一个函数，接收一个参数e（事件对象），需要返回true或false，代表是否是来自触控板
  customCheckIsTouchPad: null,
  // 鼠标缩放是否以鼠标当前位置为中心点，否则以画布中心点
  mouseScaleCenterUseMousePosition: true,
  // 最多显示几个标签
  maxTag: 5,
  // 标签显示的位置，相对于节点文本，bottom（下方）、right（右侧）
  tagPosition: CONSTANTS.TAG_POSITION.RIGHT,
  // 展开收缩按钮尺寸
  expandBtnSize: 20,
  // 节点里图片和文字的间距
  imgTextMargin: 5,
  // 节点里各种文字信息的间距，如图标和文字的间距
  textContentMargin: 2,
  // 自定义节点备注内容显示
  customNoteContentShow: null,
  /*
          {
              show(){},
              hide(){}
          }
      */
  // 达到该宽度文本自动换行
  textAutoWrapWidth: 500,
  // 自定义鼠标滚轮事件处理
  // 可以传一个函数，回调参数为事件对象
  customHandleMousewheel: null,
  // 鼠标滚动的行为，如果customHandleMousewheel传了自定义函数，这个属性不生效
  mousewheelAction: CONSTANTS.MOUSE_WHEEL_ACTION.MOVE,
  // zoom（放大缩小）、move（上下移动）
  // 当mousewheelAction设为move时，可以通过该属性控制鼠标滚动一下视图移动的步长，单位px
  mousewheelMoveStep: 100,
  // 当mousewheelAction设为zoom时，或者按住Ctrl键时，默认向前滚动是缩小，向后滚动是放大，如果该属性设为true，那么会反过来
  mousewheelZoomActionReverse: true,
  // 默认插入的二级节点的文字
  defaultInsertSecondLevelNodeText: '二级节点',
  // 默认插入的二级以下节点的文字
  defaultInsertBelowSecondLevelNodeText: '分支主题',
  // 展开收起按钮的颜色
  expandBtnStyle: {
    color: '#808080',
    fill: '#fff',
    fontSize: 13,
    strokeColor: '#333333'
  },
  // 自定义展开收起按钮的图标
  expandBtnIcon: {
    open: '',
    // svg字符串
    close: ''
  },
  // 处理收起节点数量
  expandBtnNumHandler: null,
  // 是否显示带数量的收起按钮
  isShowExpandNum: true,
  // 是否只有当鼠标在画布内才响应快捷键事件
  enableShortcutOnlyWhenMouseInSvg: true,
  // 自定义判断是否响应快捷键事件，优先级比enableShortcutOnlyWhenMouseInSvg选项高
  // 可以传递一个函数，接收事件对象e为参数，需要返回true或false，返回true代表允许响应快捷键事件，反之不允许，库默认当事件目标为body，或为文本编辑框元素（普通文本编辑框、富文本编辑框、关联线文本编辑框）时响应快捷键，其他不响应
  customCheckEnableShortcut: null,
  // 初始根节点的位置
  initRootNodePosition: null,
  // 节点文本编辑框的z-index
  nodeTextEditZIndex: 3000,
  // 节点备注浮层的z-index
  nodeNoteTooltipZIndex: 3000,
  // 是否在点击了画布外的区域时结束节点文本的编辑状态
  isEndNodeTextEditOnClickOuter: true,
  // 最大历史记录数
  maxHistoryCount: 500,
  // 是否一直显示节点的展开收起按钮，默认为鼠标移上去和激活时才显示
  alwaysShowExpandBtn: false,
  // 不显示展开收起按钮，优先级比alwaysShowExpandBtn配置高
  notShowExpandBtn: false,
  // 扩展节点可插入的图标
  iconList: [
    // {
    //   name: '',// 分组名称
    //   type: '',// 分组的值
    //   list: [// 分组下的图标列表
    //     {
    //       name: '',// 图标名称
    //       icon:''// 图标，可以传svg或图片
    //     }
    //   ]
    // }
  ],
  // 节点最大缓存数量
  maxNodeCacheCount: 1000,
  // 思维导图适应画布大小时的内边距
  fitPadding: 50,
  // 是否开启按住ctrl键多选节点功能
  enableCtrlKeyNodeSelection: true,
  // 设置为左键多选节点，右键拖动画布
  useLeftKeySelectionRightKeyDrag: false,
  // 节点即将进入编辑前的回调方法，如果该方法返回true以外的值，那么将取消编辑，函数可以返回一个值，或一个Promise，回调参数为节点实例
  beforeTextEdit: null,
  // 是否开启自定义节点内容
  isUseCustomNodeContent: false,
  // 自定义返回节点内容的方法
  customCreateNodeContent: null,
  // 指定内部一些元素（节点文本编辑元素、节点备注显示元素、关联线文本编辑元素、节点图片调整按钮元素）添加到的位置，默认添加到document.body下
  customInnerElsAppendTo: null,
  // 是否在存在一个激活节点时，当按下中文、英文、数字按键时自动进入文本编辑模式
  // 开启该特性后，需要给你的输入框绑定keydown事件，并禁止冒泡
  enableAutoEnterTextEditWhenKeydown: false,
  // 当enableAutoEnterTextEditWhenKeydown选项开启时生效，当通过按键进入文本编辑时是否自动清空原有文本
  autoEmptyTextWhenKeydownEnterEdit: false,
  // 自定义对剪贴板文本的处理。当按ctrl+v粘贴时会读取用户剪贴板中的文本和图片，默认只会判断文本是否是普通文本和simple-mind-map格式的节点数据，如果你想处理其他思维导图的数据，比如processon、zhixi等，那么可以传递一个函数，接受当前剪贴板中的文本为参数，返回处理后的数据，可以返回两种类型：
  /*
    1.返回一个纯文本，那么会直接以该文本创建一个子节点
     2.返回一个节点对象，格式如下：
      {
        // 代表是simple-mind-map格式的数据
        simpleMindMap: true,
        // 节点数据，同simple-mind-map节点数据格式
        data: {
          data: {
            text: ''
          },
          children: []
        }
      }
  */
  // 如果你的处理逻辑存在异步逻辑，也可以返回一个promise
  customHandleClipboardText: null,
  // 禁止鼠标滚轮缩放，你仍旧可以使用api进行缩放
  disableMouseWheelZoom: false,
  // 错误处理函数
  errorHandler: function errorHandler(code, error) {
    console.error(code, error);
  },
  // 是否在鼠标双击时回到根节点，也就是让根节点居中显示
  enableDblclickBackToRootNode: false,
  // 节点鼠标hover和激活时显示的矩形边框的颜色
  hoverRectColor: 'rgb(94, 200, 248)',
  // 节点鼠标hover和激活时显示的矩形边框距节点内容的距离
  hoverRectPadding: 2,
  // 双击节点进入节点文本编辑时是否默认选中文本，默认只在创建新节点时会选中
  selectTextOnEnterEditText: false,
  // 删除节点后激活相邻节点
  deleteNodeActive: true,
  // 是否首次加载fit view
  fit: false,
  // 自定义标签的颜色
  // {pass: 'green, unpass: 'red'}
  tagsColorMap: {},
  // 节点协作样式配置
  cooperateStyle: {
    avatarSize: 22,
    // 头像大小
    fontSize: 12 // 如果是文字头像，那么文字的大小
  },
  // 协同编辑时，同一个节点不能同时被多人选中
  onlyOneEnableActiveNodeOnCooperate: false,
  // 插入概要的默认文本
  defaultGeneralizationText: '概要',
  // 粘贴文本的方式创建新节点时，控制是否按换行自动分割节点，即如果存在换行，那么会根据换行创建多个节点，否则只会创建一个节点
  // 可以传递一个函数，返回promise，resolve代表根据换行分割，reject代表忽略换行
  handleIsSplitByWrapOnPasteCreateNewNode: null,
  // 多少时间内只允许添加一次历史记录，避免添加没有必要的中间状态，单位：ms
  addHistoryTime: 100,
  // 是否禁止拖动画布
  isDisableDrag: false,
  // 创建新节点时的行为
  /*
    DEFAULT  ：默认会激活新创建的节点，并且进入编辑模式。如果同时创建了多个新节点，那么只会激活而不会进入编辑模式
    NOT_ACTIVE  : 不激活新创建的节点
    ACTIVE_ONLY  : 只激活新创建的节点，不进入编辑模式
  */
  createNewNodeBehavior: CONSTANTS.CREATE_NEW_NODE_BEHAVIOR.DEFAULT,
  // 当节点图片加载失败时显示的默认图片
  defaultNodeImage: '',
  // 是否将思维导图限制在画布内
  // 比如向右拖动时，思维导图图形的最左侧到达画布中心时将无法继续向右拖动，其他同理
  isLimitMindMapInCanvas: false,
  // 在节点上粘贴剪贴板中的图片的处理方法，默认是转换为data:url数据插入到节点中，你可以通过该方法来将图片数据上传到服务器，实现保存图片的url
  // 可以传递一个异步方法，接收Blob类型的图片数据，需要返回如下结构：
  /*
    {
      url,    // 图片url
      size: {
        width,  // 图片的宽度
        height  //图片的高度
      }
    }
  */
  handleNodePasteImg: null,
  // 自定义创建节点形状的方法，可以传一个函数，均接收一个参数
  // 矩形、圆角矩形、椭圆、圆等形状会调用该方法
  // 接收svg path字符串，返回svg节点
  customCreateNodePath: null,
  // 菱形、平行四边形、八角矩形、外三角矩形、内三角矩形等形状会调用该方法
  // 接收points数组点位，返回svg节点
  customCreateNodePolygon: null,
  // 自定义转换节点连线路径的方法
  // 接收svg path字符串，返回转换后的svg path字符串
  customTransformNodeLinePath: null,
  // 快捷键操作即将执行前的生命周期函数，返回true可以阻止操作执行
  // 函数接收两个参数：key（快捷键）、activeNodeList（当前激活的节点列表）
  beforeShortcutRun: null,
  // 移动节点到画布中心、回到根节点等操作时是否将缩放层级复位为100%
  // 该选项实际影响的是render.moveNodeToCenter方法，moveNodeToCenter方法本身也存在第二个参数resetScale来设置是否复位，如果resetScale参数没有传递，那么使用resetScaleOnMoveNodeToCenter配置，否则使用resetScale配置
  resetScaleOnMoveNodeToCenter: false,
  // 添加附加的节点前置内容，前置内容指和文本同一行的区域中的前置内容，不包括节点图片部分。如果存在编号、任务勾选框内容，这里添加的前置内容会在这两者之后
  createNodePrefixContent: null,
  // 添加附加的节点后置内容，后置内容指和文本同一行的区域中的后置内容，不包括节点图片部分
  createNodePostfixContent: null,
  // 禁止粘贴用户剪贴板中的数据，禁止将复制的数据写入用户的剪贴板中
  disabledClipboard: false,
  // 自定义超链接的跳转
  // 如果不传，默认会以新窗口的方式打开超链接，可以传递一个函数，函数接收两个参数：link（超链接的url）、node（所属节点实例），只要传递了函数，就会阻止默认的跳转
  customHyperlinkJump: null,
  // 是否开启性能模式，默认情况下所有节点都会直接渲染，无论是否处于画布可视区域，这样当节点数量比较多时（1000+）会比较卡，如果你的数据量比较大，那么可以通过该配置开启性能模式，即只渲染画布可视区域内的节点，超出的节点不渲染，这样会大幅提高渲染速度，当然同时也会带来一些其他问题，比如：1.当拖动或是缩放画布时会实时计算并渲染未节点的节点，所以会带来一定卡顿；2.导出图片、svg、pdf时需要先渲染全部节点，所以会比较慢；3.其他目前未发现的问题
  openPerformance: false,
  // 性能优化模式配置
  performanceConfig: {
    time: 250,
    // 当视图改变后多久刷新一次节点，单位：ms，
    padding: 100,
    // 超出画布四周指定范围内依旧渲染节点
    removeNodeWhenOutCanvas: true // 节点移除画布可视区域后从画布删除
  },
  // 如果节点文本为空，那么为了避免空白节点高度塌陷，会用该字段指定的文本测量一个高度
  emptyTextMeasureHeightText: 'abc123我和你',
  // 是否在进行节点文本编辑时实时更新节点大小和节点位置，开启后当节点数量比较多时可能会造成卡顿
  openRealtimeRenderOnNodeTextEdit: false,
  // 默认会给容器元素el绑定mousedown事件，可通过该选项设置是否阻止其默认事件
  // 如果设置为true，会带来一定问题，比如你聚焦在思维导图外的其他输入框，点击画布就不会触发其失焦
  mousedownEventPreventDefault: false,
  // 在激活上粘贴用户剪贴板中的数据时，如果同时存在文本和图片，那么只粘贴文本，忽略图片
  onlyPasteTextWhenHasImgAndText: true,
  // 是否允许拖拽调整节点的宽度，实际上压缩的是节点里面文本内容的宽度，当节点文本内容宽度压缩到最小时无法继续压缩。如果节点存在图片，那么最小值以图片宽度和文本内容最小宽度的最大值为准（目前该特性仅在两种情况下可用：1.开启了富文本模式，即注册了RichText插件；2.自定义节点内容）
  enableDragModifyNodeWidth: true,
  // 当允许拖拽调整节点的宽度时，可以通过该选项设置节点文本内容允许压缩的最小宽度
  minNodeTextModifyWidth: 20,
  // 同minNodeTextModifyWidth，最大值，传-1代表不限制
  maxNodeTextModifyWidth: -1,
  // 自定义处理节点的连线方法，可以传递一个函数，函数接收三个参数：node（节点实例）、line（节点的某条连线，@svgjs库的path对象）, { width, color, dasharray }，dasharray（该条连线的虚线样式，为none代表实线），你可以修改line对象来达到修改节点连线样式的效果，比如增加流动效果
  customHandleLine: null,
  // 实例化完后是否立刻进行一次历史数据入栈操作
  // 即调用mindMap.command.addHistory方法
  addHistoryOnInit: true,
  // 【Select插件】
  // 多选节点时鼠标移动到边缘时的画布移动偏移量
  selectTranslateStep: 3,
  // 多选节点时鼠标移动距边缘多少距离时开始偏移
  selectTranslateLimit: 20,
  // 【Drag插件】
  // 是否开启节点自由拖拽
  enableFreeDrag: false,
  // 拖拽节点时鼠标移动到画布边缘是否开启画布自动移动
  autoMoveWhenMouseInEdgeOnDrag: true,
  // 拖拽多个节点时随鼠标移动的示意矩形的样式配置
  dragMultiNodeRectConfig: {
    width: 40,
    height: 20,
    fill: 'rgb(94, 200, 248)' // 填充颜色
  },
  // 节点拖拽时新位置的示意矩形的填充颜色
  dragPlaceholderRectFill: 'rgb(94, 200, 248)',
  // 节点拖拽时新位置的示意连线的样式配置
  dragPlaceholderLineConfig: {
    color: 'rgb(94, 200, 248)',
    width: 2
  },
  // 节点拖拽时的透明度配置
  dragOpacityConfig: {
    cloneNodeOpacity: 0.5,
    // 跟随鼠标移动的克隆节点或矩形的透明度
    beingDragNodeOpacity: 0.3 // 被拖拽节点的透明度
  },
  // 拖拽单个节点时会克隆被拖拽节点，如果想修改该克隆节点，那么可以通过该选项提供一个处理函数，函数接收克隆节点对象
  // 需要注意的是节点对象指的是@svgdotjs/svg.js库的元素对象，所以你需要阅读该库的文档来操作该对象
  handleDragCloneNode: null,
  // 即将拖拽完成前调用该函数，函数接收一个对象作为参数：{overlapNodeUid,prevNodeUid,nextNodeUid}，代表拖拽信息，如果要阻止本次拖拽，那么可以返回true，此时node_dragend事件不会再触发。函数可以是异步函数，返回Promise实例
  beforeDragEnd: null,
  // 即将开始调整节点前调用该函数，函数接收当前即将被拖拽的节点实例列表作为参数，如果要阻止本次拖拽，那么可以返回true
  beforeDragStart: null,
  // 【Watermark插件】
  // 水印配置
  watermarkConfig: {
    onlyExport: false,
    // 是否仅在导出时添加水印
    text: '',
    lineSpacing: 100,
    textSpacing: 100,
    angle: 30,
    textStyle: {
      color: '#999',
      opacity: 0.5,
      fontSize: 14
    },
    belowNode: false
  },
  // 【Export插件】
  // 导出png、svg、pdf时的图形内边距，注意是单侧内边距
  exportPaddingX: 10,
  exportPaddingY: 10,
  // 设置导出图片和svg时，针对富文本节点内容，也就是嵌入到svg中的html节点的默认样式覆盖
  // 如果不覆盖，会发生偏移问题
  resetCss: "\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n  ",
  // 导出图片时canvas的缩放倍数，该配置会和window.devicePixelRatio值取最大值
  minExportImgCanvasScale: 2,
  // 导出png、svg、pdf时在头部和尾部添加自定义内容
  // 可传递一个函数，这个函数可以返回null代表不添加内容，也可以返回如下数据：
  /*
    {
      el,// 要追加的自定义DOM节点，样式可内联
      cssText,// 可选，如果样式不想内联，可以传递该值，一个css字符串
      height: 50// 返回的DOM节点的高度，必须传递
    }
  */
  addContentToHeader: null,
  addContentToFooter: null,
  // 导出png、svg、pdf时会获取画布上的svg数据进行克隆，然后通过该克隆的元素进行导出，如果你想对该克隆元素做一些处理，比如新增、替换、修改其中的一些元素，那么可以通过该参数传递一个处理函数，接收svg元素对象，处理后，需要返回原svg元素对象。
  // 需要注意的是svg对象指的是@svgdotjs/svg.js库的元素对象，所以你需要阅读该库的文档来操作该对象
  handleBeingExportSvg: null,
  // 导出图片或pdf都是通过canvas将svg绘制出来，再导出，所以如果思维导图特别大，宽高可能会超出canvas支持的上限，所以会进行缩放，这个上限可以通过该参数设置，代表canvas宽和高的最大宽度
  maxCanvasSize: 16384,
  // 【AssociativeLine插件】
  // 关联线默认文字
  defaultAssociativeLineText: '关联',
  // 关联线是否始终显示在节点上层
  // false：即创建关联线和激活关联线时处于最顶层，其他情况下处于节点下方
  associativeLineIsAlwaysAboveNode: true,
  // 默认情况下，新创建的关联线两个端点的位置是根据两个节点中心点的相对位置来计算的，如果你想固定位置，可以通过这个属性来配置
  // from和to都不传，则都自动计算，如果只传一个，另一个则会自动计算
  associativeLineInitPointsPosition: {
    // from和to可选值：left、top、bottom、right
    from: '',
    // 关联线起始节点上端点的位置
    to: '' // 关联线目标节点上端点的位置
  },
  // 是否允许调整关联线两个端点的位置
  enableAdjustAssociativeLinePoints: true,
  // 关联线连接即将完成时执行，如果要阻止本次连接可以返回true，函数接收一个参数：node（目标节点实例）
  beforeAssociativeLineConnection: null,
  // 【TouchEvent插件】
  // 禁止双指缩放，你仍旧可以使用api进行缩放
  // 需要注册TouchEvent插件后生效
  disableTouchZoom: false,
  // 允许最大和最小的缩放值，百分数
  // 传-1代表不限制
  minTouchZoomScale: 20,
  maxTouchZoomScale: -1,
  // 【Scrollbar插件】
  // 当注册了滚动条插件（Scrollbar）时，是否将思维导图限制在画布内，isLimitMindMapInCanvas不再起作用
  isLimitMindMapInCanvasWhenHasScrollbar: true,
  // 【Search插件】
  // 是否仅搜索当前渲染的节点，被收起的节点不会被搜索到
  isOnlySearchCurrentRenderNodes: false,
  // 【Cooperate插件】
  // 协同编辑时，节点操作即将更新到其他客户端前的生命周期函数
  // 函数接收一个对象作为参数：
  /*
    {
      type: createOrUpdate（创建节点或更新节点）、delete（删除节点）
      data: 1.当type=createOrUpdate时，代表被创建或被更新的节点数据，即将同步到其他客户端，所以你可以修改该数据；2.当type=delete时，代表被删除的节点数据
    }
  */
  beforeCooperateUpdate: null,
  // 【RainbowLines插件】
  // 彩虹线条配置，需要先注册RainbowLines插件
  rainbowLinesConfig: {
    open: false,
    // 是否开启彩虹线条
    colorsList: [] // 自定义彩虹线条的颜色列表，如果不设置，会使用默认颜色列表
    /*
    [
      'rgb(255, 213, 73)',
      'rgb(255, 136, 126)',
      'rgb(107, 225, 141)',
      'rgb(151, 171, 255)',
      'rgb(129, 220, 242)',
      'rgb(255, 163, 125)',
      'rgb(152, 132, 234)'
    ]
    */
  },
  // 【Demonstrate插件】
  // 演示插件配置
  demonstrateConfig: null,
  // 【Formula插件】
  // 是否开启在富文本编辑框中直接编辑数学公式
  enableEditFormulaInRichTextEdit: true,
  // katex库的字体文件的请求路径。仅当katex的output配置为html时才会请求字体文件。可以通过mindMap.formula.getKatexConfig()方法来获取当前的配置
  // 字体文件可以从node_modules中找到：katex/dist/fonts/。可以上传到你的服务器或cdn
  // 最终的字体请求路径为`${katexFontPath}fonts/KaTeX_AMS-Regular.woff2`，可以自行拼接进行测试是否可以访问
  katexFontPath: 'https://unpkg.com/katex@0.16.11/dist/',
  // 自定义katex库的输出模式。默认当Chrome内核100以下会使用html方式，否则使用mathml方式，如果你有自己的规则，那么可以传递一个函数，函数返回值为：mathml或html
  getKatexOutputType: null,
  // 【RichText插件】
  // 转换富文本内容，当进入富文本编辑时，可以通过该参数传递一个函数，函数接收文本内容，需要返回你处理后的文本内容
  transformRichTextOnEnterEdit: null,
  // 可以传递一个函数，即将结束富文本编辑前会执行该函数，函数接收richText实例，所以你可以在此时机更新quill文档数据
  beforeHideRichTextEdit: null,
  // 设置富文本节点编辑框和节点大小一致，形成伪原地编辑的效果
  // 需要注意的是，只有当节点内只有文本、且形状是矩形才会有比较好的效果
  richTextEditFakeInPlace: false,
  // 【OuterFrame】插件
  outerFramePaddingX: 10,
  outerFramePaddingY: 10,
  // 【Painter】插件
  // 是否只格式刷节点手动设置的样式，不考虑节点通过主题的应用的样式
  onlyPainterNodeCustomStyles: false,
  // 【NodeImgAdjust】插件
  // 拦截节点图片的删除，点击节点图片上的删除按钮删除图片前会调用该函数，如果函数返回true则取消删除
  beforeDeleteNodeImg: null,
  // 删除和调整两个按钮的大小
  imgResizeBtnSize: 25,
  // 最小允许缩放的尺寸，请传入>=0的数字
  minImgResizeWidth: 50,
  minImgResizeHeight: 50,
  // 最大允许缩放的尺寸依据主题的配置，即主题的imgMaxWidth和imgMaxHeight配置，如果设置为false，那么使用maxImgResizeWidth和maxImgResizeHeight选项
  maxImgResizeWidthInheritTheme: false,
  // 最大允许缩放的尺寸，maxImgResizeWidthInheritTheme选项设置为false时生效，不限制最大值可传递Infinity
  maxImgResizeWidth: Infinity,
  maxImgResizeHeight: Infinity
};

//  思维导图
var MindMap = /*#__PURE__*/function () {
  //  构造函数
  /**
   *
   * @param {defaultOpt} opt
   */
  function MindMap() {
    var _this = this;
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, MindMap);
    MindMap.instanceCount++;
    // 合并选项
    this.opt = this.handleOpt(deepmerge_1(defaultOpt, opt));
    // 预处理节点数据
    this.opt.data = this.handleData(this.opt.data);

    // 容器元素
    this.el = this.opt.el;
    if (!this.el) throw new Error('缺少容器元素el');

    // 获取容器尺寸位置信息
    this.getElRectInfo();

    // 画布初始大小
    this.initWidth = this.width;
    this.initHeight = this.height;

    // 必要的css样式
    this.cssEl = null;
    this.cssTextMap = {}; // 该样式在实例化时会动态添加到页面，同时导出为svg时也会添加到svg源码中

    // 节点前置内容列表
    /*
      {
        name: '',// 一个唯一的类型标识
        // 创建节点的显示内容：节点元素、宽高
        createContent: (node) => {
          return {
            node: null,
            width: 0,
            height: 0
          }
        },
        // 创建保存到节点实例的opt对象中的数据
        createNodeData: () => {},
        // 更新节点实例的opt数据，返回数据是否改变了
        updateNodeData: () => {},
      }
    */
    this.nodeInnerPrefixList = [];

    // 画布
    this.initContainer();

    // 初始化主题
    this.initTheme();

    // 初始化缓存数据
    this.initCache();

    // 事件类
    this.event = new Event({
      mindMap: this
    });

    // 按键类
    this.keyCommand = new KeyCommand({
      mindMap: this
    });

    // 命令类
    this.command = new Command({
      mindMap: this
    });

    // 渲染类
    this.renderer = new Render({
      mindMap: this
    });

    // 视图操作类
    this.view = new View({
      mindMap: this
    });

    // 批量执行类
    this.batchExecution = new BatchExecution();

    // 注册插件
    MindMap.pluginList.forEach(function (plugin) {
      _this.initPlugin(plugin);
    });

    // 添加必要的css样式
    this.addCss();

    // 初始渲染
    this.render(this.opt.fit ? function () {
      return _this.view.fit();
    } : function () {});

    // 将初始数据添加到历史记录堆栈中
    if (this.opt.addHistoryOnInit && this.opt.data) {
      this.command.addHistory();
    }
  }

  //  配置参数处理
  return _createClass(MindMap, [{
    key: "handleOpt",
    value: function handleOpt(opt) {
      // 检查布局配置
      if (!layoutValueList.includes(opt.layout)) {
        opt.layout = CONSTANTS.LAYOUT.LOGICAL_STRUCTURE;
      }
      // 检查主题配置
      opt.theme = opt.theme && theme[opt.theme] ? opt.theme : 'default';
      return opt;
    }

    // 预处理节点数据
  }, {
    key: "handleData",
    value: function handleData(data) {
      if (isUndef(data) || Object.keys(data).length <= 0) return null;
      data = simpleDeepClone(data || {});
      // 根节点不能收起
      if (data.data && !data.data.expand) {
        data.data.expand = true;
      }
      return data;
    }

    // 创建容器元素
  }, {
    key: "initContainer",
    value: function initContainer() {
      var _this2 = this;
      var associativeLineIsAlwaysAboveNode = this.opt.associativeLineIsAlwaysAboveNode;
      // 给容器元素添加一个类名
      this.el.classList.add('smm-mind-map-container');
      // 节点关联线容器
      var createAssociativeLineDraw = function createAssociativeLineDraw() {
        _this2.associativeLineDraw = _this2.draw.group();
        _this2.associativeLineDraw.addClass('smm-associative-line-container');
      };
      // 画布
      this.svg = SVG().addTo(this.el).size(this.width, this.height);

      // 容器
      this.draw = this.svg.group();
      this.draw.addClass('smm-container');
      // 节点连线容器
      this.lineDraw = this.draw.group();
      this.lineDraw.addClass('smm-line-container');
      // 默认处于节点下方
      if (!associativeLineIsAlwaysAboveNode) {
        createAssociativeLineDraw();
      }
      // 节点容器
      this.nodeDraw = this.draw.group();
      this.nodeDraw.addClass('smm-node-container');
      // 关联线始终处于节点上方
      if (associativeLineIsAlwaysAboveNode) {
        createAssociativeLineDraw();
      }
      // 其他内容的容器
      this.otherDraw = this.draw.group();
      this.otherDraw.addClass('smm-other-container');
    }

    // 清空各容器
  }, {
    key: "clearDraw",
    value: function clearDraw() {
      this.lineDraw.clear();
      this.associativeLineDraw.clear();
      this.nodeDraw.clear();
      this.otherDraw.clear();
    }

    // 追加必要的css样式
    // 该样式在实例化时会动态添加到页面，同时导出为svg时也会添加到svg源码中
  }, {
    key: "appendCss",
    value: function appendCss(key, str) {
      this.cssTextMap[key] = str;
      this.removeCss();
      this.addCss();
    }

    // 移除追加的css样式
  }, {
    key: "removeAppendCss",
    value: function removeAppendCss(key) {
      if (this.cssTextMap[key]) {
        delete this.cssTextMap[key];
        this.removeCss();
        this.addCss();
      }
    }

    // 拼接必要的css样式
  }, {
    key: "joinCss",
    value: function joinCss() {
      var _this3 = this;
      return cssContent + Object.keys(this.cssTextMap).map(function (key) {
        return _this3.cssTextMap[key];
      }).join('\n');
    }

    // 添加必要的css样式到页面
  }, {
    key: "addCss",
    value: function addCss() {
      this.cssEl = document.createElement('style');
      this.cssEl.type = 'text/css';
      this.cssEl.innerHTML = this.joinCss();
      document.head.appendChild(this.cssEl);
    }

    // 移除css
  }, {
    key: "removeCss",
    value: function removeCss() {
      if (this.cssEl) document.head.removeChild(this.cssEl);
    }

    //  渲染，部分渲染
  }, {
    key: "render",
    value: function render(callback) {
      var _this4 = this;
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.batchExecution.push('render', function () {
        _this4.initTheme();
        _this4.renderer.render(callback, source);
      });
    }

    //  重新渲染
  }, {
    key: "reRender",
    value: function reRender(callback) {
      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      this.renderer.reRender = true; // 标记为重新渲染
      this.renderer.clearCache(); // 清空节点缓存池
      this.clearDraw(); // 清空画布
      this.render(callback, source);
    }

    // 获取或更新容器尺寸位置信息
  }, {
    key: "getElRectInfo",
    value: function getElRectInfo() {
      this.elRect = this.el.getBoundingClientRect();
      this.width = this.elRect.width;
      this.height = this.elRect.height;
      if (this.width <= 0 || this.height <= 0) throw new Error('容器元素el的宽高不能为0');
    }

    //  容器尺寸变化，调整尺寸
  }, {
    key: "resize",
    value: function resize() {
      var oldWidth = this.width;
      var oldHeight = this.height;
      this.getElRectInfo();
      this.svg.size(this.width, this.height);
      if (oldWidth !== this.width || oldHeight !== this.height) {
        // 如果画布宽高改变了需要触发一次渲染
        if (this.demonstrate) {
          // 如果存在演示插件，并且正在演示中，那么不需要触发重新渲染，否则会冲突
          if (!this.demonstrate.isInDemonstrate) {
            this.render();
          }
        } else {
          this.render();
        }
      }
      this.emit('resize');
    }

    //  监听事件
  }, {
    key: "on",
    value: function on(event, fn) {
      this.event.on(event, fn);
    }

    //  触发事件
  }, {
    key: "emit",
    value: function emit(event) {
      var _this$event;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      (_this$event = this.event).emit.apply(_this$event, [event].concat(args));
    }

    //  解绑事件
  }, {
    key: "off",
    value: function off(event, fn) {
      this.event.off(event, fn);
    }

    // 初始化缓存数据
  }, {
    key: "initCache",
    value: function initCache() {
      this.commonCaches = {
        measureCustomNodeContentSizeEl: null,
        measureRichtextNodeTextSizeEl: null
      };
    }

    //  设置主题
  }, {
    key: "initTheme",
    value: function initTheme() {
      // 合并主题配置
      this.themeConfig = mergeTheme(theme[this.opt.theme] || theme.default, this.opt.themeConfig);
      // 设置背景样式
      Style.setBackgroundStyle(this.el, this.themeConfig);
    }

    //  设置主题
  }, {
    key: "setTheme",
    value: function setTheme(theme) {
      var notRender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.execCommand('CLEAR_ACTIVE_NODE');
      this.opt.theme = theme;
      if (!notRender) {
        this.render(null, CONSTANTS.CHANGE_THEME);
      }
      this.emit('view_theme_change', theme);
    }

    //  获取当前主题
  }, {
    key: "getTheme",
    value: function getTheme() {
      return this.opt.theme;
    }

    //  设置主题配置
  }, {
    key: "setThemeConfig",
    value: function setThemeConfig(config) {
      var notRender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // 计算改变了的配置
      var changedConfig = getObjectChangedProps(this.themeConfig, config);
      this.opt.themeConfig = config;
      if (!notRender) {
        // 检查改变的是否是节点大小无关的主题属性
        var res = checkIsNodeSizeIndependenceConfig(changedConfig);
        this.render(null, res ? '' : CONSTANTS.CHANGE_THEME);
      }
    }

    //  获取自定义主题配置
  }, {
    key: "getCustomThemeConfig",
    value: function getCustomThemeConfig() {
      return this.opt.themeConfig;
    }

    //  获取某个主题配置值
  }, {
    key: "getThemeConfig",
    value: function getThemeConfig(prop) {
      return prop === undefined ? this.themeConfig : this.themeConfig[prop];
    }

    // 获取配置
  }, {
    key: "getConfig",
    value: function getConfig(prop) {
      return prop === undefined ? this.opt : this.opt[prop];
    }

    // 更新配置
  }, {
    key: "updateConfig",
    value: function updateConfig() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.emit('before_update_config', this.opt);
      var lastOpt = _objectSpread2({}, this.opt);
      this.opt = this.handleOpt(deepmerge_1.all([defaultOpt, this.opt, opt]));
      this.emit('after_update_config', this.opt, lastOpt);
    }

    //  获取当前布局结构
  }, {
    key: "getLayout",
    value: function getLayout() {
      return this.opt.layout;
    }

    //  设置布局结构
  }, {
    key: "setLayout",
    value: function setLayout(layout) {
      var notRender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // 检查布局配置
      if (!layoutValueList.includes(layout)) {
        layout = CONSTANTS.LAYOUT.LOGICAL_STRUCTURE;
      }
      this.opt.layout = layout;
      this.view.reset();
      this.renderer.setLayout();
      if (!notRender) {
        this.render(null, CONSTANTS.CHANGE_LAYOUT);
      }
      this.emit('layout_change', layout);
    }

    //  执行命令
  }, {
    key: "execCommand",
    value: function execCommand() {
      var _this$command;
      (_this$command = this.command).exec.apply(_this$command, arguments);
    }

    // 更新画布数据，如果新的数据是在当前画布节点数据基础上增删改查后形成的，那么可以使用该方法来更新画布数据
  }, {
    key: "updateData",
    value: function updateData(data) {
      this.emit('before_update_data', data);
      this.renderer.setData(data);
      this.render();
      this.command.addHistory();
      this.emit('update_data', data);
    }

    //  动态设置思维导图数据，纯节点数据
  }, {
    key: "setData",
    value: function setData(data) {
      data = this.handleData(data);
      this.emit('before_set_data', data);
      this.opt.data = data;
      this.execCommand('CLEAR_ACTIVE_NODE');
      this.command.clearHistory();
      this.command.addHistory();
      this.renderer.setData(data);
      this.reRender(function () {}, CONSTANTS.SET_DATA);
      this.emit('set_data', data);
    }

    //  动态设置思维导图数据，包括节点数据、布局、主题、视图
  }, {
    key: "setFullData",
    value: function setFullData(data) {
      if (data.root) {
        this.setData(data.root);
      }
      if (data.layout) {
        this.setLayout(data.layout);
      }
      if (data.theme) {
        if (data.theme.template) {
          this.setTheme(data.theme.template);
        }
        if (data.theme.config) {
          this.setThemeConfig(data.theme.config);
        }
      }
      if (data.view) {
        this.view.setTransformData(data.view);
      }
    }

    //  获取思维导图数据，节点树、主题、布局等
  }, {
    key: "getData",
    value: function getData(withConfig) {
      var nodeData = this.command.getCopyData();
      var data = {};
      if (withConfig) {
        data = {
          layout: this.getLayout(),
          root: nodeData,
          theme: {
            template: this.getTheme(),
            config: this.getCustomThemeConfig()
          },
          view: this.view.getTransformData()
        };
      } else {
        data = nodeData;
      }
      return simpleDeepClone(data);
    }

    //  导出
  }, {
    key: "export",
    value: function () {
      var _export2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this$doExport,
          result,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (this.doExport) {
                _context.next = 3;
                break;
              }
              throw new Error('请注册Export插件！');
            case 3:
              _context.next = 5;
              return (_this$doExport = this.doExport).export.apply(_this$doExport, _args);
            case 5:
              result = _context.sent;
              return _context.abrupt("return", result);
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              this.opt.errorHandler(ERROR_TYPES.EXPORT_ERROR, _context.t0);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 9]]);
      }));
      function _export() {
        return _export2.apply(this, arguments);
      }
      return _export;
    }() //  转换位置
  }, {
    key: "toPos",
    value: function toPos(x, y) {
      return {
        x: x - this.elRect.left,
        y: y - this.elRect.top
      };
    }

    //  设置只读模式、编辑模式
  }, {
    key: "setMode",
    value: function setMode(mode) {
      if (![CONSTANTS.MODE.READONLY, CONSTANTS.MODE.EDIT].includes(mode)) {
        return;
      }
      var isReadonly = mode === CONSTANTS.MODE.READONLY;
      if (isReadonly === this.opt.readonly) return;
      if (isReadonly) {
        // 如果处于编辑态，要隐藏所有的编辑框
        if (this.renderer.textEdit.isShowTextEdit()) {
          this.renderer.textEdit.hideEditTextBox();
          this.command.originAddHistory();
        }
        // 取消当前激活的元素
        this.execCommand('CLEAR_ACTIVE_NODE');
      }
      this.opt.readonly = isReadonly;
      // 切换为编辑模式时，如果历史记录堆栈是空的，那么进行一次入栈操作
      if (!isReadonly && this.command.history.length <= 0) {
        this.command.originAddHistory();
      }
      this.emit('mode_change', mode);
    }

    // 获取svg数据
  }, {
    key: "getSvgData",
    value: function getSvgData() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$paddingX = _ref.paddingX,
        paddingX = _ref$paddingX === void 0 ? 0 : _ref$paddingX,
        _ref$paddingY = _ref.paddingY,
        paddingY = _ref$paddingY === void 0 ? 0 : _ref$paddingY,
        _ref$ignoreWatermark = _ref.ignoreWatermark,
        ignoreWatermark = _ref$ignoreWatermark === void 0 ? false : _ref$ignoreWatermark,
        addContentToHeader = _ref.addContentToHeader,
        addContentToFooter = _ref.addContentToFooter,
        node = _ref.node;
      var _this$opt = this.opt,
        watermarkConfig = _this$opt.watermarkConfig,
        openPerformance = _this$opt.openPerformance;
      // 如果开启了性能模式，那么需要先渲染所有节点
      if (openPerformance) {
        this.renderer.forceLoadNode(node);
      }
      var _handleGetSvgDataExtr = handleGetSvgDataExtraContent({
          addContentToHeader: addContentToHeader,
          addContentToFooter: addContentToFooter
        }),
        cssTextList = _handleGetSvgDataExtr.cssTextList,
        header = _handleGetSvgDataExtr.header,
        headerHeight = _handleGetSvgDataExtr.headerHeight,
        footer = _handleGetSvgDataExtr.footer,
        footerHeight = _handleGetSvgDataExtr.footerHeight;
      var svg = this.svg;
      var draw = this.draw;
      // 保存原始信息
      var origWidth = svg.width();
      var origHeight = svg.height();
      var origTransform = draw.transform();
      var elRect = this.elRect;
      // 去除放大缩小的变换效果
      draw.scale(1 / origTransform.scaleX, 1 / origTransform.scaleY);
      // 获取变换后的位置尺寸信息，其实是getBoundingClientRect方法的包装方法
      var rect = draw.rbox();
      // 需要裁减的区域
      var clipData = null;
      if (node) {
        clipData = getNodeTreeBoundingRect(node, rect.x, rect.y, paddingX, paddingY);
      }
      // 内边距
      var fixHeight = 0;
      rect.width += paddingX * 2;
      rect.height += paddingY * 2 + fixHeight + headerHeight + footerHeight;
      draw.translate(paddingX, paddingY);
      // 将svg设置为实际内容的宽高
      svg.size(rect.width, rect.height);
      // 把实际内容变换
      draw.translate(-rect.x + elRect.left, -rect.y + elRect.top);
      // 克隆一份数据
      var clone = svg.clone();
      // 是否存在水印
      var hasWatermark = this.watermark && this.watermark.hasWatermark();
      if (!ignoreWatermark && hasWatermark) {
        this.watermark.isInExport = true;
        // 是否是仅导出时需要水印
        var onlyExport = watermarkConfig.onlyExport;
        // 是否需要重新绘制水印
        var needReDrawWatermark = rect.width > origWidth || rect.height > origHeight;
        // 如果实际图形宽高超出了屏幕宽高，且存在水印的话需要重新绘制水印，否则会出现超出部分没有水印的问题
        if (needReDrawWatermark) {
          this.width = rect.width;
          this.height = rect.height;
          this.watermark.onResize();
          clone = svg.clone();
          this.width = origWidth;
          this.height = origHeight;
          this.watermark.onResize();
        } else if (onlyExport) {
          // 如果是仅导出时需要水印，那么需要进行绘制
          this.watermark.onResize();
          clone = svg.clone();
        }
        // 如果是仅导出时需要水印，需要清除
        if (onlyExport) {
          this.watermark.clear();
        }
        this.watermark.isInExport = false;
      }
      // 添加必要的样式
      [this.joinCss()].concat(_toConsumableArray(cssTextList)).forEach(function (s) {
        clone.add(SVG("<style>".concat(s, "</style>")));
      });
      // 附加内容
      if (header && headerHeight > 0) {
        clone.findOne('.smm-container').translate(0, headerHeight);
        header.width(rect.width);
        header.y(paddingY);
        clone.add(header, 0);
      }
      if (footer && footerHeight > 0) {
        footer.width(rect.width);
        footer.y(rect.height - paddingY - footerHeight);
        clone.add(footer);
      }
      // 修正defs里定义的元素的id，因为clone时defs里的元素的id会继续递增，导致和内容中引用的id对不上
      var defs = svg.find('defs');
      var defs2 = clone.find('defs');
      defs.forEach(function (def, defIndex) {
        var def2 = defs2[defIndex];
        if (!def2) return;
        var children = def.children();
        var children2 = def2.children();
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          var child2 = children2[i];
          if (child && child2) {
            child2.attr('id', child.attr('id'));
          }
        }
      });
      // 恢复原先的大小和变换信息
      svg.size(origWidth, origHeight);
      draw.transform(origTransform);
      return {
        svg: clone,
        // 思维导图图形的整体svg元素，包括：svg（画布容器）、g（实际的思维导图组）
        svgHTML: clone.svg(),
        // svg字符串
        clipData: clipData,
        rect: _objectSpread2(_objectSpread2({}, rect), {}, {
          // 思维导图图形未缩放时的位置尺寸等信息
          ratio: rect.width / rect.height // 思维导图图形的宽高比
        }),
        origWidth: origWidth,
        // 画布宽度
        origHeight: origHeight,
        // 画布高度
        scaleX: origTransform.scaleX,
        // 思维导图图形的水平缩放值
        scaleY: origTransform.scaleY // 思维导图图形的垂直缩放值
      };
    }

    // 添加插件
  }, {
    key: "addPlugin",
    value: function addPlugin(plugin, opt) {
      var index = MindMap.hasPlugin(plugin);
      if (index === -1) {
        MindMap.usePlugin(plugin, opt);
      }
      this.initPlugin(plugin);
    }

    // 移除插件
  }, {
    key: "removePlugin",
    value: function removePlugin(plugin) {
      var index = MindMap.hasPlugin(plugin);
      if (index !== -1) {
        MindMap.pluginList.splice(index, 1);
        if (this[plugin.instanceName]) {
          if (this[plugin.instanceName].beforePluginRemove) {
            this[plugin.instanceName].beforePluginRemove();
          }
          delete this[plugin.instanceName];
        }
      }
    }

    // 实例化插件
  }, {
    key: "initPlugin",
    value: function initPlugin(plugin) {
      if (this[plugin.instanceName]) return;
      this[plugin.instanceName] = new plugin({
        mindMap: this,
        pluginOpt: plugin.pluginOpt
      });
    }

    // 销毁
  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;
      this.emit('beforeDestroy');
      // 清除节点编辑框
      this.renderer.textEdit.hideEditTextBox();
      this.renderer.textEdit.removeTextEditEl()
      // 移除插件
      ;
      _toConsumableArray(MindMap.pluginList).forEach(function (plugin) {
        if (_this5[plugin.instanceName] && _this5[plugin.instanceName].beforePluginDestroy) {
          _this5[plugin.instanceName].beforePluginDestroy();
        }
        _this5[plugin.instanceName] = null;
      });
      // 解绑事件
      this.event.unbind();
      // 移除画布节点
      this.svg.remove();
      // 去除给容器元素设置的背景样式
      Style.removeBackgroundStyle(this.el);
      // 移除给容器元素添加的类名
      this.el.classList.remove('smm-mind-map-container');
      this.el.innerHTML = '';
      this.el = null;
      this.removeCss();
      MindMap.instanceCount--;
    }
  }]);
}(); // 插件列表
MindMap.pluginList = [];
MindMap.usePlugin = function (plugin) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (MindMap.hasPlugin(plugin) !== -1) return MindMap;
  plugin.pluginOpt = opt;
  MindMap.pluginList.push(plugin);
  return MindMap;
};
MindMap.hasPlugin = function (plugin) {
  return MindMap.pluginList.findIndex(function (item) {
    return item === plugin;
  });
};
MindMap.instanceCount = 0;

// 定义新主题
MindMap.defineTheme = function (name) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (theme[name]) {
    return new Error('该主题名称已存在');
  }
  theme[name] = mergeTheme(defaultTheme, config);
};
// 移除主题
MindMap.removeTheme = function (name) {
  if (theme[name]) {
    theme[name] = null;
  }
};

export { MindMap as default };
