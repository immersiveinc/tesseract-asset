!(function (t) {
  var e = {}
  function r(n) {
    if (e[n]) return e[n].exports
    var i = (e[n] = { i: n, l: !1, exports: {} })
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports
  }
  ;(r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
    }),
    (r.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var n = Object.create(null)
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function (e) {
              return t[e]
            }.bind(null, i),
          )
      return n
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return r.d(e, 'a', e), e
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (r.p = ''),
    r((r.s = 11))
})([
  function (t, e, r) {
    'use strict'
    function n(t) {
      return (n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t
            })(t)
    }
    var i = r(5),
      o = r(22),
      s = Object.prototype.toString
    function a(t) {
      return '[object Array]' === s.call(t)
    }
    function f(t) {
      return null !== t && 'object' === n(t)
    }
    function u(t) {
      return '[object Function]' === s.call(t)
    }
    function c(t, e) {
      if (null != t)
        if (('object' !== n(t) && (t = [t]), a(t)))
          for (var r = 0, i = t.length; r < i; r++) e.call(null, t[r], r, t)
        else
          for (var o in t)
            Object.prototype.hasOwnProperty.call(t, o) &&
              e.call(null, t[o], o, t)
    }
    t.exports = {
      isArray: a,
      isArrayBuffer: function (t) {
        return '[object ArrayBuffer]' === s.call(t)
      },
      isBuffer: o,
      isFormData: function (t) {
        return 'undefined' != typeof FormData && t instanceof FormData
      },
      isArrayBufferView: function (t) {
        return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(t)
          : t && t.buffer && t.buffer instanceof ArrayBuffer
      },
      isString: function (t) {
        return 'string' == typeof t
      },
      isNumber: function (t) {
        return 'number' == typeof t
      },
      isObject: f,
      isUndefined: function (t) {
        return void 0 === t
      },
      isDate: function (t) {
        return '[object Date]' === s.call(t)
      },
      isFile: function (t) {
        return '[object File]' === s.call(t)
      },
      isBlob: function (t) {
        return '[object Blob]' === s.call(t)
      },
      isFunction: u,
      isStream: function (t) {
        return f(t) && u(t.pipe)
      },
      isURLSearchParams: function (t) {
        return (
          'undefined' != typeof URLSearchParams && t instanceof URLSearchParams
        )
      },
      isStandardBrowserEnv: function () {
        return (
          ('undefined' == typeof navigator ||
            'ReactNative' !== navigator.product) &&
          'undefined' != typeof window &&
          'undefined' != typeof document
        )
      },
      forEach: c,
      merge: function t() {
        var e = {}
        function r(r, i) {
          'object' === n(e[i]) && 'object' === n(r)
            ? (e[i] = t(e[i], r))
            : (e[i] = r)
        }
        for (var i = 0, o = arguments.length; i < o; i++) c(arguments[i], r)
        return e
      },
      extend: function (t, e, r) {
        return (
          c(e, function (e, n) {
            t[n] = r && 'function' == typeof e ? i(e, r) : e
          }),
          t
        )
      },
      trim: function (t) {
        return t.replace(/^\s*/, '').replace(/\s*$/, '')
      },
    }
  },
  function (t, e, r) {
    'use strict'
    ;(function (t) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var n = r(15),
        i = r(16),
        o = r(17)
      function s() {
        return f.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
      }
      function a(t, e) {
        if (s() < e) throw new RangeError('Invalid typed array length')
        return (
          f.TYPED_ARRAY_SUPPORT
            ? ((t = new Uint8Array(e)).__proto__ = f.prototype)
            : (null === t && (t = new f(e)), (t.length = e)),
          t
        )
      }
      function f(t, e, r) {
        if (!(f.TYPED_ARRAY_SUPPORT || this instanceof f)) return new f(t, e, r)
        if ('number' == typeof t) {
          if ('string' == typeof e)
            throw new Error(
              'If encoding is specified then the first argument must be a string',
            )
          return h(this, t)
        }
        return u(this, t, e, r)
      }
      function u(t, e, r, n) {
        if ('number' == typeof e)
          throw new TypeError('"value" argument must not be a number')
        return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer
          ? (function (t, e, r, n) {
              if ((e.byteLength, r < 0 || e.byteLength < r))
                throw new RangeError("'offset' is out of bounds")
              if (e.byteLength < r + (n || 0))
                throw new RangeError("'length' is out of bounds")
              e =
                void 0 === r && void 0 === n
                  ? new Uint8Array(e)
                  : void 0 === n
                  ? new Uint8Array(e, r)
                  : new Uint8Array(e, r, n)
              f.TYPED_ARRAY_SUPPORT
                ? ((t = e).__proto__ = f.prototype)
                : (t = p(t, e))
              return t
            })(t, e, r, n)
          : 'string' == typeof e
          ? (function (t, e, r) {
              ;('string' == typeof r && '' !== r) || (r = 'utf8')
              if (!f.isEncoding(r))
                throw new TypeError(
                  '"encoding" must be a valid string encoding',
                )
              var n = 0 | d(e, r),
                i = (t = a(t, n)).write(e, r)
              i !== n && (t = t.slice(0, i))
              return t
            })(t, e, r)
          : (function (t, e) {
              if (f.isBuffer(e)) {
                var r = 0 | l(e.length)
                return 0 === (t = a(t, r)).length ? t : (e.copy(t, 0, 0, r), t)
              }
              if (e) {
                if (
                  ('undefined' != typeof ArrayBuffer &&
                    e.buffer instanceof ArrayBuffer) ||
                  'length' in e
                )
                  return 'number' != typeof e.length || (n = e.length) != n
                    ? a(t, 0)
                    : p(t, e)
                if ('Buffer' === e.type && o(e.data)) return p(t, e.data)
              }
              var n
              throw new TypeError(
                'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.',
              )
            })(t, e)
      }
      function c(t) {
        if ('number' != typeof t)
          throw new TypeError('"size" argument must be a number')
        if (t < 0) throw new RangeError('"size" argument must not be negative')
      }
      function h(t, e) {
        if ((c(e), (t = a(t, e < 0 ? 0 : 0 | l(e))), !f.TYPED_ARRAY_SUPPORT))
          for (var r = 0; r < e; ++r) t[r] = 0
        return t
      }
      function p(t, e) {
        var r = e.length < 0 ? 0 : 0 | l(e.length)
        t = a(t, r)
        for (var n = 0; n < r; n += 1) t[n] = 255 & e[n]
        return t
      }
      function l(t) {
        if (t >= s())
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x' +
              s().toString(16) +
              ' bytes',
          )
        return 0 | t
      }
      function d(t, e) {
        if (f.isBuffer(t)) return t.length
        if (
          'undefined' != typeof ArrayBuffer &&
          'function' == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
        )
          return t.byteLength
        'string' != typeof t && (t = '' + t)
        var r = t.length
        if (0 === r) return 0
        for (var n = !1; ; )
          switch (e) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r
            case 'utf8':
            case 'utf-8':
            case void 0:
              return F(t).length
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r
            case 'hex':
              return r >>> 1
            case 'base64':
              return Y(t).length
            default:
              if (n) return F(t).length
              ;(e = ('' + e).toLowerCase()), (n = !0)
          }
      }
      function m(t, e, r) {
        var n = !1
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return ''
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return ''
        if ((r >>>= 0) <= (e >>>= 0)) return ''
        for (t || (t = 'utf8'); ; )
          switch (t) {
            case 'hex':
              return O(this, e, r)
            case 'utf8':
            case 'utf-8':
              return U(this, e, r)
            case 'ascii':
              return T(this, e, r)
            case 'latin1':
            case 'binary':
              return I(this, e, r)
            case 'base64':
              return S(this, e, r)
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return P(this, e, r)
            default:
              if (n) throw new TypeError('Unknown encoding: ' + t)
              ;(t = (t + '').toLowerCase()), (n = !0)
          }
      }
      function g(t, e, r) {
        var n = t[e]
        ;(t[e] = t[r]), (t[r] = n)
      }
      function y(t, e, r, n, i) {
        if (0 === t.length) return -1
        if (
          ('string' == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (r = +r),
          isNaN(r) && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1
          r = t.length - 1
        } else if (r < 0) {
          if (!i) return -1
          r = 0
        }
        if (('string' == typeof e && (e = f.from(e, n)), f.isBuffer(e)))
          return 0 === e.length ? -1 : b(t, e, r, n, i)
        if ('number' == typeof e)
          return (
            (e &= 255),
            f.TYPED_ARRAY_SUPPORT &&
            'function' == typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : b(t, [e], r, n, i)
          )
        throw new TypeError('val must be string, number or Buffer')
      }
      function b(t, e, r, n, i) {
        var o,
          s = 1,
          a = t.length,
          f = e.length
        if (
          void 0 !== n &&
          ('ucs2' === (n = String(n).toLowerCase()) ||
            'ucs-2' === n ||
            'utf16le' === n ||
            'utf-16le' === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1
          ;(s = 2), (a /= 2), (f /= 2), (r /= 2)
        }
        function u(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s)
        }
        if (i) {
          var c = -1
          for (o = r; o < a; o++)
            if (u(t, o) === u(e, -1 === c ? 0 : o - c)) {
              if ((-1 === c && (c = o), o - c + 1 === f)) return c * s
            } else -1 !== c && (o -= o - c), (c = -1)
        } else
          for (r + f > a && (r = a - f), o = r; o >= 0; o--) {
            for (var h = !0, p = 0; p < f; p++)
              if (u(t, o + p) !== u(e, p)) {
                h = !1
                break
              }
            if (h) return o
          }
        return -1
      }
      function v(t, e, r, n) {
        r = Number(r) || 0
        var i = t.length - r
        n ? (n = Number(n)) > i && (n = i) : (n = i)
        var o = e.length
        if (o % 2 != 0) throw new TypeError('Invalid hex string')
        n > o / 2 && (n = o / 2)
        for (var s = 0; s < n; ++s) {
          var a = parseInt(e.substr(2 * s, 2), 16)
          if (isNaN(a)) return s
          t[r + s] = a
        }
        return s
      }
      function w(t, e, r, n) {
        return q(F(e, t.length - r), t, r, n)
      }
      function x(t, e, r, n) {
        return q(
          (function (t) {
            for (var e = [], r = 0; r < t.length; ++r)
              e.push(255 & t.charCodeAt(r))
            return e
          })(e),
          t,
          r,
          n,
        )
      }
      function A(t, e, r, n) {
        return x(t, e, r, n)
      }
      function E(t, e, r, n) {
        return q(Y(e), t, r, n)
      }
      function _(t, e, r, n) {
        return q(
          (function (t, e) {
            for (
              var r, n, i, o = [], s = 0;
              s < t.length && !((e -= 2) < 0);
              ++s
            )
              (r = t.charCodeAt(s)),
                (n = r >> 8),
                (i = r % 256),
                o.push(i),
                o.push(n)
            return o
          })(e, t.length - r),
          t,
          r,
          n,
        )
      }
      function S(t, e, r) {
        return 0 === e && r === t.length
          ? n.fromByteArray(t)
          : n.fromByteArray(t.slice(e, r))
      }
      function U(t, e, r) {
        r = Math.min(t.length, r)
        for (var n = [], i = e; i < r; ) {
          var o,
            s,
            a,
            f,
            u = t[i],
            c = null,
            h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1
          if (i + h <= r)
            switch (h) {
              case 1:
                u < 128 && (c = u)
                break
              case 2:
                128 == (192 & (o = t[i + 1])) &&
                  (f = ((31 & u) << 6) | (63 & o)) > 127 &&
                  (c = f)
                break
              case 3:
                ;(o = t[i + 1]),
                  (s = t[i + 2]),
                  128 == (192 & o) &&
                    128 == (192 & s) &&
                    (f = ((15 & u) << 12) | ((63 & o) << 6) | (63 & s)) >
                      2047 &&
                    (f < 55296 || f > 57343) &&
                    (c = f)
                break
              case 4:
                ;(o = t[i + 1]),
                  (s = t[i + 2]),
                  (a = t[i + 3]),
                  128 == (192 & o) &&
                    128 == (192 & s) &&
                    128 == (192 & a) &&
                    (f =
                      ((15 & u) << 18) |
                      ((63 & o) << 12) |
                      ((63 & s) << 6) |
                      (63 & a)) > 65535 &&
                    f < 1114112 &&
                    (c = f)
            }
          null === c
            ? ((c = 65533), (h = 1))
            : c > 65535 &&
              ((c -= 65536),
              n.push(((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
            n.push(c),
            (i += h)
        }
        return (function (t) {
          var e = t.length
          if (e <= k) return String.fromCharCode.apply(String, t)
          var r = '',
            n = 0
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += k)))
          return r
        })(n)
      }
      ;(e.Buffer = f),
        (e.SlowBuffer = function (t) {
          ;+t != t && (t = 0)
          return f.alloc(+t)
        }),
        (e.INSPECT_MAX_BYTES = 50),
        (f.TYPED_ARRAY_SUPPORT =
          void 0 !== t.TYPED_ARRAY_SUPPORT
            ? t.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var t = new Uint8Array(1)
                  return (
                    (t.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42
                      },
                    }),
                    42 === t.foo() &&
                      'function' == typeof t.subarray &&
                      0 === t.subarray(1, 1).byteLength
                  )
                } catch (t) {
                  return !1
                }
              })()),
        (e.kMaxLength = s()),
        (f.poolSize = 8192),
        (f._augment = function (t) {
          return (t.__proto__ = f.prototype), t
        }),
        (f.from = function (t, e, r) {
          return u(null, t, e, r)
        }),
        f.TYPED_ARRAY_SUPPORT &&
          ((f.prototype.__proto__ = Uint8Array.prototype),
          (f.__proto__ = Uint8Array),
          'undefined' != typeof Symbol &&
            Symbol.species &&
            f[Symbol.species] === f &&
            Object.defineProperty(f, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (f.alloc = function (t, e, r) {
          return (function (t, e, r, n) {
            return (
              c(e),
              e <= 0
                ? a(t, e)
                : void 0 !== r
                ? 'string' == typeof n
                  ? a(t, e).fill(r, n)
                  : a(t, e).fill(r)
                : a(t, e)
            )
          })(null, t, e, r)
        }),
        (f.allocUnsafe = function (t) {
          return h(null, t)
        }),
        (f.allocUnsafeSlow = function (t) {
          return h(null, t)
        }),
        (f.isBuffer = function (t) {
          return !(null == t || !t._isBuffer)
        }),
        (f.compare = function (t, e) {
          if (!f.isBuffer(t) || !f.isBuffer(e))
            throw new TypeError('Arguments must be Buffers')
          if (t === e) return 0
          for (
            var r = t.length, n = e.length, i = 0, o = Math.min(r, n);
            i < o;
            ++i
          )
            if (t[i] !== e[i]) {
              ;(r = t[i]), (n = e[i])
              break
            }
          return r < n ? -1 : n < r ? 1 : 0
        }),
        (f.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0
            default:
              return !1
          }
        }),
        (f.concat = function (t, e) {
          if (!o(t))
            throw new TypeError('"list" argument must be an Array of Buffers')
          if (0 === t.length) return f.alloc(0)
          var r
          if (void 0 === e)
            for (e = 0, r = 0; r < t.length; ++r) e += t[r].length
          var n = f.allocUnsafe(e),
            i = 0
          for (r = 0; r < t.length; ++r) {
            var s = t[r]
            if (!f.isBuffer(s))
              throw new TypeError('"list" argument must be an Array of Buffers')
            s.copy(n, i), (i += s.length)
          }
          return n
        }),
        (f.byteLength = d),
        (f.prototype._isBuffer = !0),
        (f.prototype.swap16 = function () {
          var t = this.length
          if (t % 2 != 0)
            throw new RangeError('Buffer size must be a multiple of 16-bits')
          for (var e = 0; e < t; e += 2) g(this, e, e + 1)
          return this
        }),
        (f.prototype.swap32 = function () {
          var t = this.length
          if (t % 4 != 0)
            throw new RangeError('Buffer size must be a multiple of 32-bits')
          for (var e = 0; e < t; e += 4)
            g(this, e, e + 3), g(this, e + 1, e + 2)
          return this
        }),
        (f.prototype.swap64 = function () {
          var t = this.length
          if (t % 8 != 0)
            throw new RangeError('Buffer size must be a multiple of 64-bits')
          for (var e = 0; e < t; e += 8)
            g(this, e, e + 7),
              g(this, e + 1, e + 6),
              g(this, e + 2, e + 5),
              g(this, e + 3, e + 4)
          return this
        }),
        (f.prototype.toString = function () {
          var t = 0 | this.length
          return 0 === t
            ? ''
            : 0 === arguments.length
            ? U(this, 0, t)
            : m.apply(this, arguments)
        }),
        (f.prototype.equals = function (t) {
          if (!f.isBuffer(t)) throw new TypeError('Argument must be a Buffer')
          return this === t || 0 === f.compare(this, t)
        }),
        (f.prototype.inspect = function () {
          var t = '',
            r = e.INSPECT_MAX_BYTES
          return (
            this.length > 0 &&
              ((t = this.toString('hex', 0, r).match(/.{2}/g).join(' ')),
              this.length > r && (t += ' ... ')),
            '<Buffer ' + t + '>'
          )
        }),
        (f.prototype.compare = function (t, e, r, n, i) {
          if (!f.isBuffer(t)) throw new TypeError('Argument must be a Buffer')
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw new RangeError('out of range index')
          if (n >= i && e >= r) return 0
          if (n >= i) return -1
          if (e >= r) return 1
          if (this === t) return 0
          for (
            var o = (i >>>= 0) - (n >>>= 0),
              s = (r >>>= 0) - (e >>>= 0),
              a = Math.min(o, s),
              u = this.slice(n, i),
              c = t.slice(e, r),
              h = 0;
            h < a;
            ++h
          )
            if (u[h] !== c[h]) {
              ;(o = u[h]), (s = c[h])
              break
            }
          return o < s ? -1 : s < o ? 1 : 0
        }),
        (f.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r)
        }),
        (f.prototype.indexOf = function (t, e, r) {
          return y(this, t, e, r, !0)
        }),
        (f.prototype.lastIndexOf = function (t, e, r) {
          return y(this, t, e, r, !1)
        }),
        (f.prototype.write = function (t, e, r, n) {
          if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0)
          else if (void 0 === r && 'string' == typeof e)
            (n = e), (r = this.length), (e = 0)
          else {
            if (!isFinite(e))
              throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported',
              )
            ;(e |= 0),
              isFinite(r)
                ? ((r |= 0), void 0 === n && (n = 'utf8'))
                : ((n = r), (r = void 0))
          }
          var i = this.length - e
          if (
            ((void 0 === r || r > i) && (r = i),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError('Attempt to write outside buffer bounds')
          n || (n = 'utf8')
          for (var o = !1; ; )
            switch (n) {
              case 'hex':
                return v(this, t, e, r)
              case 'utf8':
              case 'utf-8':
                return w(this, t, e, r)
              case 'ascii':
                return x(this, t, e, r)
              case 'latin1':
              case 'binary':
                return A(this, t, e, r)
              case 'base64':
                return E(this, t, e, r)
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return _(this, t, e, r)
              default:
                if (o) throw new TypeError('Unknown encoding: ' + n)
                ;(n = ('' + n).toLowerCase()), (o = !0)
            }
        }),
        (f.prototype.toJSON = function () {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0),
          }
        })
      var k = 4096
      function T(t, e, r) {
        var n = ''
        r = Math.min(t.length, r)
        for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i])
        return n
      }
      function I(t, e, r) {
        var n = ''
        r = Math.min(t.length, r)
        for (var i = e; i < r; ++i) n += String.fromCharCode(t[i])
        return n
      }
      function O(t, e, r) {
        var n = t.length
        ;(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n)
        for (var i = '', o = e; o < r; ++o) i += M(t[o])
        return i
      }
      function P(t, e, r) {
        for (var n = t.slice(e, r), i = '', o = 0; o < n.length; o += 2)
          i += String.fromCharCode(n[o] + 256 * n[o + 1])
        return i
      }
      function B(t, e, r) {
        if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint')
        if (t + e > r)
          throw new RangeError('Trying to access beyond buffer length')
      }
      function j(t, e, r, n, i, o) {
        if (!f.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance')
        if (e > i || e < o)
          throw new RangeError('"value" argument is out of bounds')
        if (r + n > t.length) throw new RangeError('Index out of range')
      }
      function L(t, e, r, n) {
        e < 0 && (e = 65535 + e + 1)
        for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i)
          t[r + i] =
            (e & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i))
      }
      function R(t, e, r, n) {
        e < 0 && (e = 4294967295 + e + 1)
        for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i)
          t[r + i] = (e >>> (8 * (n ? i : 3 - i))) & 255
      }
      function C(t, e, r, n, i, o) {
        if (r + n > t.length) throw new RangeError('Index out of range')
        if (r < 0) throw new RangeError('Index out of range')
      }
      function z(t, e, r, n, o) {
        return o || C(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4
      }
      function D(t, e, r, n, o) {
        return o || C(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8
      }
      ;(f.prototype.slice = function (t, e) {
        var r,
          n = this.length
        if (
          ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
          (e = void 0 === e ? n : ~~e) < 0
            ? (e += n) < 0 && (e = 0)
            : e > n && (e = n),
          e < t && (e = t),
          f.TYPED_ARRAY_SUPPORT)
        )
          (r = this.subarray(t, e)).__proto__ = f.prototype
        else {
          var i = e - t
          r = new f(i, void 0)
          for (var o = 0; o < i; ++o) r[o] = this[o + t]
        }
        return r
      }),
        (f.prototype.readUIntLE = function (t, e, r) {
          ;(t |= 0), (e |= 0), r || B(t, e, this.length)
          for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
            n += this[t + o] * i
          return n
        }),
        (f.prototype.readUIntBE = function (t, e, r) {
          ;(t |= 0), (e |= 0), r || B(t, e, this.length)
          for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
            n += this[t + --e] * i
          return n
        }),
        (f.prototype.readUInt8 = function (t, e) {
          return e || B(t, 1, this.length), this[t]
        }),
        (f.prototype.readUInt16LE = function (t, e) {
          return e || B(t, 2, this.length), this[t] | (this[t + 1] << 8)
        }),
        (f.prototype.readUInt16BE = function (t, e) {
          return e || B(t, 2, this.length), (this[t] << 8) | this[t + 1]
        }),
        (f.prototype.readUInt32LE = function (t, e) {
          return (
            e || B(t, 4, this.length),
            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
              16777216 * this[t + 3]
          )
        }),
        (f.prototype.readUInt32BE = function (t, e) {
          return (
            e || B(t, 4, this.length),
            16777216 * this[t] +
              ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          )
        }),
        (f.prototype.readIntLE = function (t, e, r) {
          ;(t |= 0), (e |= 0), r || B(t, e, this.length)
          for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
            n += this[t + o] * i
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n
        }),
        (f.prototype.readIntBE = function (t, e, r) {
          ;(t |= 0), (e |= 0), r || B(t, e, this.length)
          for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); )
            o += this[t + --n] * i
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
        }),
        (f.prototype.readInt8 = function (t, e) {
          return (
            e || B(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          )
        }),
        (f.prototype.readInt16LE = function (t, e) {
          e || B(t, 2, this.length)
          var r = this[t] | (this[t + 1] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (f.prototype.readInt16BE = function (t, e) {
          e || B(t, 2, this.length)
          var r = this[t + 1] | (this[t] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (f.prototype.readInt32LE = function (t, e) {
          return (
            e || B(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          )
        }),
        (f.prototype.readInt32BE = function (t, e) {
          return (
            e || B(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          )
        }),
        (f.prototype.readFloatLE = function (t, e) {
          return e || B(t, 4, this.length), i.read(this, t, !0, 23, 4)
        }),
        (f.prototype.readFloatBE = function (t, e) {
          return e || B(t, 4, this.length), i.read(this, t, !1, 23, 4)
        }),
        (f.prototype.readDoubleLE = function (t, e) {
          return e || B(t, 8, this.length), i.read(this, t, !0, 52, 8)
        }),
        (f.prototype.readDoubleBE = function (t, e) {
          return e || B(t, 8, this.length), i.read(this, t, !1, 52, 8)
        }),
        (f.prototype.writeUIntLE = function (t, e, r, n) {
          ;((t = +t), (e |= 0), (r |= 0), n) ||
            j(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
          var i = 1,
            o = 0
          for (this[e] = 255 & t; ++o < r && (i *= 256); )
            this[e + o] = (t / i) & 255
          return e + r
        }),
        (f.prototype.writeUIntBE = function (t, e, r, n) {
          ;((t = +t), (e |= 0), (r |= 0), n) ||
            j(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
          var i = r - 1,
            o = 1
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            this[e + i] = (t / o) & 255
          return e + r
        }),
        (f.prototype.writeUInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || j(this, t, e, 1, 255, 0),
            f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            (this[e] = 255 & t),
            e + 1
          )
        }),
        (f.prototype.writeUInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || j(this, t, e, 2, 65535, 0),
            f.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
              : L(this, t, e, !0),
            e + 2
          )
        }),
        (f.prototype.writeUInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || j(this, t, e, 2, 65535, 0),
            f.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
              : L(this, t, e, !1),
            e + 2
          )
        }),
        (f.prototype.writeUInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || j(this, t, e, 4, 4294967295, 0),
            f.TYPED_ARRAY_SUPPORT
              ? ((this[e + 3] = t >>> 24),
                (this[e + 2] = t >>> 16),
                (this[e + 1] = t >>> 8),
                (this[e] = 255 & t))
              : R(this, t, e, !0),
            e + 4
          )
        }),
        (f.prototype.writeUInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || j(this, t, e, 4, 4294967295, 0),
            f.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t))
              : R(this, t, e, !1),
            e + 4
          )
        }),
        (f.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e |= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            j(this, t, e, r, i - 1, -i)
          }
          var o = 0,
            s = 1,
            a = 0
          for (this[e] = 255 & t; ++o < r && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
              (this[e + o] = (((t / s) >> 0) - a) & 255)
          return e + r
        }),
        (f.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e |= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            j(this, t, e, r, i - 1, -i)
          }
          var o = r - 1,
            s = 1,
            a = 0
          for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
            t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
              (this[e + o] = (((t / s) >> 0) - a) & 255)
          return e + r
        }),
        (f.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || j(this, t, e, 1, 127, -128),
            f.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          )
        }),
        (f.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || j(this, t, e, 2, 32767, -32768),
            f.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
              : L(this, t, e, !0),
            e + 2
          )
        }),
        (f.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || j(this, t, e, 2, 32767, -32768),
            f.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
              : L(this, t, e, !1),
            e + 2
          )
        }),
        (f.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || j(this, t, e, 4, 2147483647, -2147483648),
            f.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                (this[e + 2] = t >>> 16),
                (this[e + 3] = t >>> 24))
              : R(this, t, e, !0),
            e + 4
          )
        }),
        (f.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || j(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            f.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t))
              : R(this, t, e, !1),
            e + 4
          )
        }),
        (f.prototype.writeFloatLE = function (t, e, r) {
          return z(this, t, e, !0, r)
        }),
        (f.prototype.writeFloatBE = function (t, e, r) {
          return z(this, t, e, !1, r)
        }),
        (f.prototype.writeDoubleLE = function (t, e, r) {
          return D(this, t, e, !0, r)
        }),
        (f.prototype.writeDoubleBE = function (t, e, r) {
          return D(this, t, e, !1, r)
        }),
        (f.prototype.copy = function (t, e, r, n) {
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0
          if (0 === t.length || 0 === this.length) return 0
          if (e < 0) throw new RangeError('targetStart out of bounds')
          if (r < 0 || r >= this.length)
            throw new RangeError('sourceStart out of bounds')
          if (n < 0) throw new RangeError('sourceEnd out of bounds')
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r)
          var i,
            o = n - r
          if (this === t && r < e && e < n)
            for (i = o - 1; i >= 0; --i) t[i + e] = this[i + r]
          else if (o < 1e3 || !f.TYPED_ARRAY_SUPPORT)
            for (i = 0; i < o; ++i) t[i + e] = this[i + r]
          else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e)
          return o
        }),
        (f.prototype.fill = function (t, e, r, n) {
          if ('string' == typeof t) {
            if (
              ('string' == typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : 'string' == typeof r && ((n = r), (r = this.length)),
              1 === t.length)
            ) {
              var i = t.charCodeAt(0)
              i < 256 && (t = i)
            }
            if (void 0 !== n && 'string' != typeof n)
              throw new TypeError('encoding must be a string')
            if ('string' == typeof n && !f.isEncoding(n))
              throw new TypeError('Unknown encoding: ' + n)
          } else 'number' == typeof t && (t &= 255)
          if (e < 0 || this.length < e || this.length < r)
            throw new RangeError('Out of range index')
          if (r <= e) return this
          var o
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            'number' == typeof t)
          )
            for (o = e; o < r; ++o) this[o] = t
          else {
            var s = f.isBuffer(t) ? t : F(new f(t, n).toString()),
              a = s.length
            for (o = 0; o < r - e; ++o) this[o + e] = s[o % a]
          }
          return this
        })
      var N = /[^+\/0-9A-Za-z-_]/g
      function M(t) {
        return t < 16 ? '0' + t.toString(16) : t.toString(16)
      }
      function F(t, e) {
        var r
        e = e || 1 / 0
        for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
          if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                ;(e -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              if (s + 1 === n) {
                ;(e -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              i = r
              continue
            }
            if (r < 56320) {
              ;(e -= 3) > -1 && o.push(239, 191, 189), (i = r)
              continue
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320))
          } else i && (e -= 3) > -1 && o.push(239, 191, 189)
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break
            o.push(r)
          } else if (r < 2048) {
            if ((e -= 2) < 0) break
            o.push((r >> 6) | 192, (63 & r) | 128)
          } else if (r < 65536) {
            if ((e -= 3) < 0) break
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
          } else {
            if (!(r < 1114112)) throw new Error('Invalid code point')
            if ((e -= 4) < 0) break
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128,
            )
          }
        }
        return o
      }
      function Y(t) {
        return n.toByteArray(
          (function (t) {
            if (
              (t = (function (t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '')
              })(t).replace(N, '')).length < 2
            )
              return ''
            for (; t.length % 4 != 0; ) t += '='
            return t
          })(t),
        )
      }
      function q(t, e, r, n) {
        for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
          e[i + r] = t[i]
        return i
      }
    }.call(this, r(2)))
  },
  function (t, e) {
    function r(t) {
      return (r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t
            })(t)
    }
    var n
    n = (function () {
      return this
    })()
    try {
      n = n || new Function('return this')()
    } catch (t) {
      'object' === ('undefined' == typeof window ? 'undefined' : r(window)) &&
        (n = window)
    }
    t.exports = n
  },
  function (t, e, r) {
    'use strict'
    ;(function (e) {
      var n = r(0),
        i = r(24),
        o = { 'Content-Type': 'application/x-www-form-urlencoded' }
      function s(t, e) {
        !n.isUndefined(t) &&
          n.isUndefined(t['Content-Type']) &&
          (t['Content-Type'] = e)
      }
      var a,
        f = {
          adapter:
            ('undefined' != typeof XMLHttpRequest
              ? (a = r(7))
              : void 0 !== e && (a = r(7)),
            a),
          transformRequest: [
            function (t, e) {
              return (
                i(e, 'Content-Type'),
                n.isFormData(t) ||
                n.isArrayBuffer(t) ||
                n.isBuffer(t) ||
                n.isStream(t) ||
                n.isFile(t) ||
                n.isBlob(t)
                  ? t
                  : n.isArrayBufferView(t)
                  ? t.buffer
                  : n.isURLSearchParams(t)
                  ? (s(e, 'application/x-www-form-urlencoded;charset=utf-8'),
                    t.toString())
                  : n.isObject(t)
                  ? (s(e, 'application/json;charset=utf-8'), JSON.stringify(t))
                  : t
              )
            },
          ],
          transformResponse: [
            function (t) {
              if ('string' == typeof t)
                try {
                  t = JSON.parse(t)
                } catch (t) {}
              return t
            },
          ],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          validateStatus: function (t) {
            return t >= 200 && t < 300
          },
        }
      ;(f.headers = {
        common: { Accept: 'application/json, text/plain, */*' },
      }),
        n.forEach(['delete', 'get', 'head'], function (t) {
          f.headers[t] = {}
        }),
        n.forEach(['post', 'put', 'patch'], function (t) {
          f.headers[t] = n.merge(o)
        }),
        (t.exports = f)
    }.call(this, r(6)))
  },
  function (module, exports, __webpack_require__) {
    'use strict'
    ;(function (Buffer) {
      function _toConsumableArray(t) {
        return (
          _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread()
        )
      }
      function _nonIterableSpread() {
        throw new TypeError('Invalid attempt to spread non-iterable instance')
      }
      function _iterableToArray(t) {
        if (
          Symbol.iterator in Object(t) ||
          '[object Arguments]' === Object.prototype.toString.call(t)
        )
          return Array.from(t)
      }
      function _arrayWithoutHoles(t) {
        if (Array.isArray(t)) {
          for (var e = 0, r = new Array(t.length); e < t.length; e++)
            r[e] = t[e]
          return r
        }
      }
      function ownKeys(t, e) {
        var r = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t)
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function _objectSpread(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? ownKeys(Object(r), !0).forEach(function (e) {
                _defineProperty(t, e, r[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e),
                )
              })
        }
        return t
      }
      function _defineProperty(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        )
      }
      function _typeof(t) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              })(t)
      }
      var _require = __webpack_require__(18),
        multiByteIndexOf = _require.multiByteIndexOf,
        stringToBytes = _require.stringToBytes,
        readUInt64LE = _require.readUInt64LE,
        tarHeaderChecksumMatches = _require.tarHeaderChecksumMatches,
        uint8ArrayUtf8ByteString = _require.uint8ArrayUtf8ByteString,
        supported = __webpack_require__(19),
        xpiZipFilename = stringToBytes('META-INF/mozilla.rsa'),
        oxmlContentTypes = stringToBytes('[Content_Types].xml'),
        oxmlRels = stringToBytes('_rels/.rels'),
        fileType = function (t) {
          if (
            !(
              t instanceof Uint8Array ||
              t instanceof ArrayBuffer ||
              Buffer.isBuffer(t)
            )
          )
            throw new TypeError(
              'Expected the `input` argument to be of type `Uint8Array` or `Buffer` or `ArrayBuffer`, got `'.concat(
                _typeof(t),
                '`',
              ),
            )
          var e = t instanceof Uint8Array ? t : new Uint8Array(t)
          if (e && e.length > 1) {
            var r = function (t, r) {
                r = _objectSpread({ offset: 0 }, r)
                for (var n = 0; n < t.length; n++)
                  if (r.mask) {
                    if (t[n] !== (r.mask[n] & e[n + r.offset])) return !1
                  } else if (t[n] !== e[n + r.offset]) return !1
                return !0
              },
              n = function (t, e) {
                return r(stringToBytes(t), e)
              }
            if (r([255, 216, 255])) return { ext: 'jpg', mime: 'image/jpeg' }
            if (r([137, 80, 78, 71, 13, 10, 26, 10])) {
              var i = e.findIndex(function (t, r) {
                  return (
                    r >= 33 &&
                    73 === e[r] &&
                    68 === e[r + 1] &&
                    65 === e[r + 2] &&
                    84 === e[r + 3]
                  )
                }),
                o = e.subarray(33, i)
              return o.findIndex(function (t, e) {
                return (
                  97 === o[e] &&
                  99 === o[e + 1] &&
                  84 === o[e + 2] &&
                  76 === o[e + 3]
                )
              }) >= 0
                ? { ext: 'apng', mime: 'image/apng' }
                : { ext: 'png', mime: 'image/png' }
            }
            if (r([71, 73, 70])) return { ext: 'gif', mime: 'image/gif' }
            if (r([87, 69, 66, 80], { offset: 8 }))
              return { ext: 'webp', mime: 'image/webp' }
            if (r([70, 76, 73, 70])) return { ext: 'flif', mime: 'image/flif' }
            if (
              (r([73, 73, 42, 0]) || r([77, 77, 0, 42])) &&
              r([67, 82], { offset: 8 })
            )
              return { ext: 'cr2', mime: 'image/x-canon-cr2' }
            if (r([73, 73, 82, 79, 8, 0, 0, 0, 24]))
              return { ext: 'orf', mime: 'image/x-olympus-orf' }
            if (
              r([73, 73, 42, 0]) &&
              (r([16, 251, 134, 1], { offset: 4 }) ||
                r([8, 0, 0, 0], { offset: 4 })) &&
              r([0, 254, 0, 4, 0, 1, 0, 0, 0, 1, 0, 0, 0, 3, 1], { offset: 9 })
            )
              return { ext: 'arw', mime: 'image/x-sony-arw' }
            if (
              r([73, 73, 42, 0, 8, 0, 0, 0]) &&
              (r([45, 0, 254, 0], { offset: 8 }) ||
                r([39, 0, 254, 0], { offset: 8 }))
            )
              return { ext: 'dng', mime: 'image/x-adobe-dng' }
            if (r([73, 73, 42, 0]) && r([28, 0, 254, 0], { offset: 8 }))
              return { ext: 'nef', mime: 'image/x-nikon-nef' }
            if (r([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216]))
              return { ext: 'rw2', mime: 'image/x-panasonic-rw2' }
            if (n('FUJIFILMCCD-RAW'))
              return { ext: 'raf', mime: 'image/x-fujifilm-raf' }
            if (r([73, 73, 42, 0]) || r([77, 77, 0, 42]))
              return { ext: 'tif', mime: 'image/tiff' }
            if (r([66, 77])) return { ext: 'bmp', mime: 'image/bmp' }
            if (r([73, 73, 188]))
              return { ext: 'jxr', mime: 'image/vnd.ms-photo' }
            if (r([56, 66, 80, 83]))
              return { ext: 'psd', mime: 'image/vnd.adobe.photoshop' }
            var s = [80, 75, 3, 4]
            if (r(s)) {
              if (
                r(
                  [
                    109, 105, 109, 101, 116, 121, 112, 101, 97, 112, 112, 108,
                    105, 99, 97, 116, 105, 111, 110, 47, 101, 112, 117, 98, 43,
                    122, 105, 112,
                  ],
                  { offset: 30 },
                )
              )
                return { ext: 'epub', mime: 'application/epub+zip' }
              if (r(xpiZipFilename, { offset: 30 }))
                return { ext: 'xpi', mime: 'application/x-xpinstall' }
              if (
                n('mimetypeapplication/vnd.oasis.opendocument.text', {
                  offset: 30,
                })
              )
                return {
                  ext: 'odt',
                  mime: 'application/vnd.oasis.opendocument.text',
                }
              if (
                n('mimetypeapplication/vnd.oasis.opendocument.spreadsheet', {
                  offset: 30,
                })
              )
                return {
                  ext: 'ods',
                  mime: 'application/vnd.oasis.opendocument.spreadsheet',
                }
              if (
                n('mimetypeapplication/vnd.oasis.opendocument.presentation', {
                  offset: 30,
                })
              )
                return {
                  ext: 'odp',
                  mime: 'application/vnd.oasis.opendocument.presentation',
                }
              var a,
                f = 0,
                u = !1
              do {
                var c = f + 30
                if (
                  (u ||
                    (u =
                      r(oxmlContentTypes, { offset: c }) ||
                      r(oxmlRels, { offset: c })),
                  a ||
                    (n('word/', { offset: c })
                      ? (a = {
                          ext: 'docx',
                          mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        })
                      : n('ppt/', { offset: c })
                      ? (a = {
                          ext: 'pptx',
                          mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                        })
                      : n('xl/', { offset: c }) &&
                        (a = {
                          ext: 'xlsx',
                          mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        })),
                  u && a)
                )
                  return a
                f = multiByteIndexOf(e, s, c)
              } while (f >= 0)
              if (a) return a
            }
            if (
              r([80, 75]) &&
              (3 === e[2] || 5 === e[2] || 7 === e[2]) &&
              (4 === e[3] || 6 === e[3] || 8 === e[3])
            )
              return { ext: 'zip', mime: 'application/zip' }
            if (
              r([48, 48, 48, 48, 48, 48], {
                offset: 148,
                mask: [248, 248, 248, 248, 248, 248],
              }) &&
              tarHeaderChecksumMatches(e)
            )
              return { ext: 'tar', mime: 'application/x-tar' }
            if (r([82, 97, 114, 33, 26, 7]) && (0 === e[6] || 1 === e[6]))
              return { ext: 'rar', mime: 'application/x-rar-compressed' }
            if (r([31, 139, 8])) return { ext: 'gz', mime: 'application/gzip' }
            if (r([66, 90, 104]))
              return { ext: 'bz2', mime: 'application/x-bzip2' }
            if (r([55, 122, 188, 175, 39, 28]))
              return { ext: '7z', mime: 'application/x-7z-compressed' }
            if (r([120, 1]))
              return { ext: 'dmg', mime: 'application/x-apple-diskimage' }
            if (
              r([102, 114, 101, 101], { offset: 4 }) ||
              r([109, 100, 97, 116], { offset: 4 }) ||
              r([109, 111, 111, 118], { offset: 4 }) ||
              r([119, 105, 100, 101], { offset: 4 })
            )
              return { ext: 'mov', mime: 'video/quicktime' }
            if (
              r([102, 116, 121, 112], { offset: 4 }) &&
              0 != (96 & e[8]) &&
              0 != (96 & e[9]) &&
              0 != (96 & e[10]) &&
              0 != (96 & e[11])
            ) {
              var h = uint8ArrayUtf8ByteString(e, 8, 12)
              switch (h) {
                case 'mif1':
                  return { ext: 'heic', mime: 'image/heif' }
                case 'msf1':
                  return { ext: 'heic', mime: 'image/heif-sequence' }
                case 'heic':
                case 'heix':
                  return { ext: 'heic', mime: 'image/heic' }
                case 'hevc':
                case 'hevx':
                  return { ext: 'heic', mime: 'image/heic-sequence' }
                case 'qt  ':
                  return { ext: 'mov', mime: 'video/quicktime' }
                case 'M4V ':
                case 'M4VH':
                case 'M4VP':
                  return { ext: 'm4v', mime: 'video/x-m4v' }
                case 'M4P ':
                  return { ext: 'm4p', mime: 'video/mp4' }
                case 'M4B ':
                  return { ext: 'm4b', mime: 'audio/mp4' }
                case 'M4A ':
                  return { ext: 'm4a', mime: 'audio/x-m4a' }
                case 'F4V ':
                  return { ext: 'f4v', mime: 'video/mp4' }
                case 'F4P ':
                  return { ext: 'f4p', mime: 'video/mp4' }
                case 'F4A ':
                  return { ext: 'f4a', mime: 'audio/mp4' }
                case 'F4B ':
                  return { ext: 'f4b', mime: 'audio/mp4' }
                default:
                  return h.startsWith('3g')
                    ? h.startsWith('3g2')
                      ? { ext: '3g2', mime: 'video/3gpp2' }
                      : { ext: '3gp', mime: 'video/3gpp' }
                    : { ext: 'mp4', mime: 'video/mp4' }
              }
            }
            if (r([77, 84, 104, 100])) return { ext: 'mid', mime: 'audio/midi' }
            if (r([26, 69, 223, 163])) {
              var p = e.subarray(4, 4100),
                l = p.findIndex(function (t, e, r) {
                  return 66 === r[e] && 130 === r[e + 1]
                })
              if (-1 !== l) {
                var d = l + 3,
                  m = function (t) {
                    return _toConsumableArray(t).every(function (t, e) {
                      return p[d + e] === t.charCodeAt(0)
                    })
                  }
                if (m('matroska'))
                  return { ext: 'mkv', mime: 'video/x-matroska' }
                if (m('webm')) return { ext: 'webm', mime: 'video/webm' }
              }
            }
            if (r([82, 73, 70, 70])) {
              if (r([65, 86, 73], { offset: 8 }))
                return { ext: 'avi', mime: 'video/vnd.avi' }
              if (r([87, 65, 86, 69], { offset: 8 }))
                return { ext: 'wav', mime: 'audio/vnd.wave' }
              if (r([81, 76, 67, 77], { offset: 8 }))
                return { ext: 'qcp', mime: 'audio/qcelp' }
            }
            if (r([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
              var g = 30
              do {
                var y = readUInt64LE(e, g + 16)
                if (
                  r(
                    [
                      145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12,
                      32, 83, 101,
                    ],
                    { offset: g },
                  )
                ) {
                  if (
                    r(
                      [
                        64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128,
                        95, 92, 68, 43,
                      ],
                      { offset: g + 24 },
                    )
                  )
                    return { ext: 'wma', mime: 'audio/x-ms-wma' }
                  if (
                    r(
                      [
                        192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128,
                        95, 92, 68, 43,
                      ],
                      { offset: g + 24 },
                    )
                  )
                    return { ext: 'wmv', mime: 'video/x-ms-asf' }
                  break
                }
                g += y
              } while (g + 24 <= e.length)
              return { ext: 'asf', mime: 'application/vnd.ms-asf' }
            }
            if (r([0, 0, 1, 186]) || r([0, 0, 1, 179]))
              return { ext: 'mpg', mime: 'video/mpeg' }
            for (var b = 0; b < 2 && b < e.length - 16; b++) {
              if (
                r([73, 68, 51], { offset: b }) ||
                r([255, 226], { offset: b, mask: [255, 230] })
              )
                return { ext: 'mp3', mime: 'audio/mpeg' }
              if (r([255, 228], { offset: b, mask: [255, 230] }))
                return { ext: 'mp2', mime: 'audio/mpeg' }
              if (r([255, 248], { offset: b, mask: [255, 252] }))
                return { ext: 'mp2', mime: 'audio/mpeg' }
              if (r([255, 240], { offset: b, mask: [255, 252] }))
                return { ext: 'mp4', mime: 'audio/mpeg' }
            }
            if (r([79, 112, 117, 115, 72, 101, 97, 100], { offset: 28 }))
              return { ext: 'opus', mime: 'audio/opus' }
            if (r([79, 103, 103, 83]))
              return r([128, 116, 104, 101, 111, 114, 97], { offset: 28 })
                ? { ext: 'ogv', mime: 'video/ogg' }
                : r([1, 118, 105, 100, 101, 111, 0], { offset: 28 })
                ? { ext: 'ogm', mime: 'video/ogg' }
                : r([127, 70, 76, 65, 67], { offset: 28 })
                ? { ext: 'oga', mime: 'audio/ogg' }
                : r([83, 112, 101, 101, 120, 32, 32], { offset: 28 })
                ? { ext: 'spx', mime: 'audio/ogg' }
                : r([1, 118, 111, 114, 98, 105, 115], { offset: 28 })
                ? { ext: 'ogg', mime: 'audio/ogg' }
                : { ext: 'ogx', mime: 'application/ogg' }
            if (r([102, 76, 97, 67]))
              return { ext: 'flac', mime: 'audio/x-flac' }
            if (r([77, 65, 67, 32])) return { ext: 'ape', mime: 'audio/ape' }
            if (r([119, 118, 112, 107]))
              return { ext: 'wv', mime: 'audio/wavpack' }
            if (r([35, 33, 65, 77, 82, 10]))
              return { ext: 'amr', mime: 'audio/amr' }
            if (r([37, 80, 68, 70]))
              return { ext: 'pdf', mime: 'application/pdf' }
            if (r([77, 90]))
              return { ext: 'exe', mime: 'application/x-msdownload' }
            if ((67 === e[0] || 70 === e[0]) && r([87, 83], { offset: 1 }))
              return { ext: 'swf', mime: 'application/x-shockwave-flash' }
            if (r([123, 92, 114, 116, 102]))
              return { ext: 'rtf', mime: 'application/rtf' }
            if (r([0, 97, 115, 109]))
              return { ext: 'wasm', mime: 'application/wasm' }
            if (
              r([119, 79, 70, 70]) &&
              (r([0, 1, 0, 0], { offset: 4 }) ||
                r([79, 84, 84, 79], { offset: 4 }))
            )
              return { ext: 'woff', mime: 'font/woff' }
            if (
              r([119, 79, 70, 50]) &&
              (r([0, 1, 0, 0], { offset: 4 }) ||
                r([79, 84, 84, 79], { offset: 4 }))
            )
              return { ext: 'woff2', mime: 'font/woff2' }
            if (
              r([76, 80], { offset: 34 }) &&
              (r([0, 0, 1], { offset: 8 }) ||
                r([1, 0, 2], { offset: 8 }) ||
                r([2, 0, 2], { offset: 8 }))
            )
              return { ext: 'eot', mime: 'application/vnd.ms-fontobject' }
            if (r([0, 1, 0, 0, 0])) return { ext: 'ttf', mime: 'font/ttf' }
            if (r([79, 84, 84, 79, 0])) return { ext: 'otf', mime: 'font/otf' }
            if (r([0, 0, 1, 0])) return { ext: 'ico', mime: 'image/x-icon' }
            if (r([0, 0, 2, 0])) return { ext: 'cur', mime: 'image/x-icon' }
            if (r([70, 76, 86, 1])) return { ext: 'flv', mime: 'video/x-flv' }
            if (r([37, 33]))
              return { ext: 'ps', mime: 'application/postscript' }
            if (r([253, 55, 122, 88, 90, 0]))
              return { ext: 'xz', mime: 'application/x-xz' }
            if (r([83, 81, 76, 105]))
              return { ext: 'sqlite', mime: 'application/x-sqlite3' }
            if (r([78, 69, 83, 26]))
              return { ext: 'nes', mime: 'application/x-nintendo-nes-rom' }
            if (r([67, 114, 50, 52]))
              return {
                ext: 'crx',
                mime: 'application/x-google-chrome-extension',
              }
            if (r([77, 83, 67, 70]) || r([73, 83, 99, 40]))
              return { ext: 'cab', mime: 'application/vnd.ms-cab-compressed' }
            if (
              r([
                33, 60, 97, 114, 99, 104, 62, 10, 100, 101, 98, 105, 97, 110,
                45, 98, 105, 110, 97, 114, 121,
              ])
            )
              return { ext: 'deb', mime: 'application/x-deb' }
            if (r([33, 60, 97, 114, 99, 104, 62]))
              return { ext: 'ar', mime: 'application/x-unix-archive' }
            if (r([237, 171, 238, 219]))
              return { ext: 'rpm', mime: 'application/x-rpm' }
            if (r([31, 160]) || r([31, 157]))
              return { ext: 'Z', mime: 'application/x-compress' }
            if (r([76, 90, 73, 80]))
              return { ext: 'lz', mime: 'application/x-lzip' }
            if (
              r([
                208, 207, 17, 224, 161, 177, 26, 225, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 62,
              ])
            )
              return { ext: 'msi', mime: 'application/x-msi' }
            if (r([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2]))
              return { ext: 'mxf', mime: 'application/mxf' }
            if (
              r([71], { offset: 4 }) &&
              (r([71], { offset: 192 }) || r([71], { offset: 196 }))
            )
              return { ext: 'mts', mime: 'video/mp2t' }
            if (r([66, 76, 69, 78, 68, 69, 82]))
              return { ext: 'blend', mime: 'application/x-blender' }
            if (r([66, 80, 71, 251])) return { ext: 'bpg', mime: 'image/bpg' }
            if (r([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
              if (r([106, 112, 50, 32], { offset: 20 }))
                return { ext: 'jp2', mime: 'image/jp2' }
              if (r([106, 112, 120, 32], { offset: 20 }))
                return { ext: 'jpx', mime: 'image/jpx' }
              if (r([106, 112, 109, 32], { offset: 20 }))
                return { ext: 'jpm', mime: 'image/jpm' }
              if (r([109, 106, 112, 50], { offset: 20 }))
                return { ext: 'mj2', mime: 'image/mj2' }
            }
            return r([70, 79, 82, 77])
              ? { ext: 'aif', mime: 'audio/aiff' }
              : n('<?xml ')
              ? { ext: 'xml', mime: 'application/xml' }
              : r([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 })
              ? { ext: 'mobi', mime: 'application/x-mobipocket-ebook' }
              : r([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10])
              ? { ext: 'ktx', mime: 'image/ktx' }
              : r([68, 73, 67, 77], { offset: 128 })
              ? { ext: 'dcm', mime: 'application/dicom' }
              : r([77, 80, 43])
              ? { ext: 'mpc', mime: 'audio/x-musepack' }
              : r([77, 80, 67, 75])
              ? { ext: 'mpc', mime: 'audio/x-musepack' }
              : r([66, 69, 71, 73, 78, 58])
              ? { ext: 'ics', mime: 'text/calendar' }
              : r([103, 108, 84, 70, 2, 0, 0, 0])
              ? { ext: 'glb', mime: 'model/gltf-binary' }
              : r([212, 195, 178, 161]) || r([161, 178, 195, 212])
              ? { ext: 'pcap', mime: 'application/vnd.tcpdump.pcap' }
              : r([68, 83, 68, 32])
              ? { ext: 'dsf', mime: 'audio/x-dsf' }
              : r([
                  76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0,
                  70,
                ])
              ? { ext: 'lnk', mime: 'application/x.ms.shortcut' }
              : r([
                  98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0,
                ])
              ? { ext: 'alias', mime: 'application/x.apple.alias' }
              : n('Creative Voice File')
              ? { ext: 'voc', mime: 'audio/x-voc' }
              : r([11, 119])
              ? { ext: 'ac3', mime: 'audio/vnd.dolby.dd-raw' }
              : (r([126, 16, 4]) || r([126, 24, 4])) &&
                r([48, 77, 73, 69], { offset: 4 })
              ? { ext: 'mie', mime: 'application/x-mie' }
              : r([65, 82, 82, 79, 87, 49, 0, 0])
              ? { ext: 'arrow', mime: 'application/x-apache-arrow' }
              : r([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], { offset: 2 })
              ? { ext: 'shp', mime: 'application/x-esri-shape' }
              : void 0
          }
        }
      ;(module.exports = fileType),
        Object.defineProperty(fileType, 'minimumBytes', { value: 4100 }),
        (fileType.stream = function (readableStream) {
          return new Promise(function (resolve, reject) {
            var stream = eval('require')('stream')
            readableStream.on('error', reject),
              readableStream.once('readable', function () {
                var t = new stream.PassThrough(),
                  e =
                    readableStream.read(module.exports.minimumBytes) ||
                    readableStream.read()
                try {
                  t.fileType = fileType(e)
                } catch (t) {
                  reject(t)
                }
                readableStream.unshift(e),
                  stream.pipeline
                    ? resolve(
                        stream.pipeline(readableStream, t, function () {}),
                      )
                    : resolve(readableStream.pipe(t))
              })
          })
        }),
        Object.defineProperty(fileType, 'extensions', {
          get: function () {
            return new Set(supported.extensions)
          },
        }),
        Object.defineProperty(fileType, 'mimeTypes', {
          get: function () {
            return new Set(supported.mimeTypes)
          },
        })
    }.call(this, __webpack_require__(1).Buffer))
  },
  function (t, e, r) {
    'use strict'
    t.exports = function (t, e) {
      return function () {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
          r[n] = arguments[n]
        return t.apply(e, r)
      }
    }
  },
  function (t, e) {
    var r,
      n,
      i = (t.exports = {})
    function o() {
      throw new Error('setTimeout has not been defined')
    }
    function s() {
      throw new Error('clearTimeout has not been defined')
    }
    function a(t) {
      if (r === setTimeout) return setTimeout(t, 0)
      if ((r === o || !r) && setTimeout)
        return (r = setTimeout), setTimeout(t, 0)
      try {
        return r(t, 0)
      } catch (e) {
        try {
          return r.call(null, t, 0)
        } catch (e) {
          return r.call(this, t, 0)
        }
      }
    }
    !(function () {
      try {
        r = 'function' == typeof setTimeout ? setTimeout : o
      } catch (t) {
        r = o
      }
      try {
        n = 'function' == typeof clearTimeout ? clearTimeout : s
      } catch (t) {
        n = s
      }
    })()
    var f,
      u = [],
      c = !1,
      h = -1
    function p() {
      c &&
        f &&
        ((c = !1), f.length ? (u = f.concat(u)) : (h = -1), u.length && l())
    }
    function l() {
      if (!c) {
        var t = a(p)
        c = !0
        for (var e = u.length; e; ) {
          for (f = u, u = []; ++h < e; ) f && f[h].run()
          ;(h = -1), (e = u.length)
        }
        ;(f = null),
          (c = !1),
          (function (t) {
            if (n === clearTimeout) return clearTimeout(t)
            if ((n === s || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(t)
            try {
              n(t)
            } catch (e) {
              try {
                return n.call(null, t)
              } catch (e) {
                return n.call(this, t)
              }
            }
          })(t)
      }
    }
    function d(t, e) {
      ;(this.fun = t), (this.array = e)
    }
    function m() {}
    ;(i.nextTick = function (t) {
      var e = new Array(arguments.length - 1)
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r]
      u.push(new d(t, e)), 1 !== u.length || c || a(l)
    }),
      (d.prototype.run = function () {
        this.fun.apply(null, this.array)
      }),
      (i.title = 'browser'),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ''),
      (i.versions = {}),
      (i.on = m),
      (i.addListener = m),
      (i.once = m),
      (i.off = m),
      (i.removeListener = m),
      (i.removeAllListeners = m),
      (i.emit = m),
      (i.prependListener = m),
      (i.prependOnceListener = m),
      (i.listeners = function (t) {
        return []
      }),
      (i.binding = function (t) {
        throw new Error('process.binding is not supported')
      }),
      (i.cwd = function () {
        return '/'
      }),
      (i.chdir = function (t) {
        throw new Error('process.chdir is not supported')
      }),
      (i.umask = function () {
        return 0
      })
  },
  function (t, e, r) {
    'use strict'
    var n = r(0),
      i = r(25),
      o = r(27),
      s = r(28),
      a = r(29),
      f = r(8)
    t.exports = function (t) {
      return new Promise(function (e, u) {
        var c = t.data,
          h = t.headers
        n.isFormData(c) && delete h['Content-Type']
        var p = new XMLHttpRequest()
        if (t.auth) {
          var l = t.auth.username || '',
            d = t.auth.password || ''
          h.Authorization = 'Basic ' + btoa(l + ':' + d)
        }
        if (
          (p.open(
            t.method.toUpperCase(),
            o(t.url, t.params, t.paramsSerializer),
            !0,
          ),
          (p.timeout = t.timeout),
          (p.onreadystatechange = function () {
            if (
              p &&
              4 === p.readyState &&
              (0 !== p.status ||
                (p.responseURL && 0 === p.responseURL.indexOf('file:')))
            ) {
              var r =
                  'getAllResponseHeaders' in p
                    ? s(p.getAllResponseHeaders())
                    : null,
                n = {
                  data:
                    t.responseType && 'text' !== t.responseType
                      ? p.response
                      : p.responseText,
                  status: p.status,
                  statusText: p.statusText,
                  headers: r,
                  config: t,
                  request: p,
                }
              i(e, u, n), (p = null)
            }
          }),
          (p.onerror = function () {
            u(f('Network Error', t, null, p)), (p = null)
          }),
          (p.ontimeout = function () {
            u(
              f(
                'timeout of ' + t.timeout + 'ms exceeded',
                t,
                'ECONNABORTED',
                p,
              ),
            ),
              (p = null)
          }),
          n.isStandardBrowserEnv())
        ) {
          var m = r(30),
            g =
              (t.withCredentials || a(t.url)) && t.xsrfCookieName
                ? m.read(t.xsrfCookieName)
                : void 0
          g && (h[t.xsrfHeaderName] = g)
        }
        if (
          ('setRequestHeader' in p &&
            n.forEach(h, function (t, e) {
              void 0 === c && 'content-type' === e.toLowerCase()
                ? delete h[e]
                : p.setRequestHeader(e, t)
            }),
          t.withCredentials && (p.withCredentials = !0),
          t.responseType)
        )
          try {
            p.responseType = t.responseType
          } catch (e) {
            if ('json' !== t.responseType) throw e
          }
        'function' == typeof t.onDownloadProgress &&
          p.addEventListener('progress', t.onDownloadProgress),
          'function' == typeof t.onUploadProgress &&
            p.upload &&
            p.upload.addEventListener('progress', t.onUploadProgress),
          t.cancelToken &&
            t.cancelToken.promise.then(function (t) {
              p && (p.abort(), u(t), (p = null))
            }),
          void 0 === c && (c = null),
          p.send(c)
      })
    }
  },
  function (t, e, r) {
    'use strict'
    var n = r(26)
    t.exports = function (t, e, r, i, o) {
      var s = new Error(t)
      return n(s, e, r, i, o)
    }
  },
  function (t, e, r) {
    'use strict'
    t.exports = function (t) {
      return !(!t || !t.__CANCEL__)
    }
  },
  function (t, e, r) {
    'use strict'
    function n(t) {
      this.message = t
    }
    ;(n.prototype.toString = function () {
      return 'Cancel' + (this.message ? ': ' + this.message : '')
    }),
      (n.prototype.__CANCEL__ = !0),
      (t.exports = n)
  },
  function (t, e, r) {
    ;(function (t) {
      function e(t, e) {
        var r = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t)
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        )
      }
      var i = r(12),
        o = r(48),
        s = r(49),
        a = r(51)
      t.addEventListener('message', function (t) {
        var e = t.data
        i.dispatchHandlers(e, function (t) {
          return postMessage(t)
        })
      }),
        i.setAdapter(
          (function (t) {
            for (var r = 1; r < arguments.length; r++) {
              var i = null != arguments[r] ? arguments[r] : {}
              r % 2
                ? e(Object(i), !0).forEach(function (e) {
                    n(t, e, i[e])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(i),
                  )
                : e(Object(i)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(i, e),
                    )
                  })
            }
            return t
          })({ getCore: o, gunzip: s }, a),
        )
    }.call(this, r(2)))
  },
  function (t, e, r) {
    var n = this
    function i(t, e) {
      var r = Object.keys(t)
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t)
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })),
          r.push.apply(r, n)
      }
      return r
    }
    function o(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {}
        e % 2
          ? i(Object(r), !0).forEach(function (e) {
              s(t, e, r[e])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : i(Object(r)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
      }
      return t
    }
    function s(t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      )
    }
    function a(t, e, r, n, i, o, s) {
      try {
        var a = t[o](s),
          f = a.value
      } catch (t) {
        return void r(t)
      }
      a.done ? e(f) : Promise.resolve(f).then(n, i)
    }
    function f(t) {
      return function () {
        var e = this,
          r = arguments
        return new Promise(function (n, i) {
          var o = t.apply(e, r)
          function s(t) {
            a(o, n, i, s, f, 'next', t)
          }
          function f(t) {
            a(o, n, i, s, f, 'throw', t)
          }
          s(void 0)
        })
      }
    }
    r(13)
    var u,
      c,
      h = r(4),
      p = r(20),
      l = r(38),
      d = r(39),
      m = 'browser' === r(40)('type'),
      g = r(41),
      y = r(45),
      b = r(47),
      v = b.log,
      w = b.setLogging,
      x = null,
      A = {},
      E = y,
      _ = function (t, e) {
        var r = t.workerId,
          n = t.jobId,
          i = t.payload.options,
          o = i.corePath,
          s = i.logging
        if ((w(s), u)) e.resolve({ loaded: !0 })
        else {
          var a = A.getCore(o, e)
          e.progress({
            workerId: r,
            status: 'initializing tesseract',
            progress: 0,
          }),
            a({
              TesseractProgress: function (t) {
                c.progress({
                  workerId: r,
                  jobId: n,
                  status: 'recognizing text',
                  progress: Math.max(0, (t - 30) / 70),
                })
              },
            }).then(function (t) {
              ;(u = t),
                e.progress({
                  workerId: r,
                  status: 'initialized tesseract',
                  progress: 1,
                }),
                e.resolve({ loaded: !0 })
            })
        }
      },
      S = (function () {
        var t = f(
          regeneratorRuntime.mark(function t(e, r) {
            var n, i, o, s, a, c, d, g, y, b, w
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = e.workerId),
                        (i = e.payload),
                        (o = i.langs),
                        (s = i.options),
                        (a = s.langPath),
                        (c = s.dataPath),
                        (d = s.cachePath),
                        (g = s.cacheMethod),
                        (y = s.gzip),
                        (b = void 0 === y || y),
                        (w = (function () {
                          var t = f(
                            regeneratorRuntime.mark(function t(e) {
                              var i, o, s, f, m, y, w, x
                              return regeneratorRuntime.wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (i =
                                            'string' == typeof e ? e : e.code),
                                          (o = ['refresh', 'none'].includes(g)
                                            ? function () {
                                                return Promise.resolve()
                                              }
                                            : A.readCache),
                                          (s = null),
                                          (t.prev = 3),
                                          (t.next = 6),
                                          o(
                                            ''
                                              .concat(d || '.', '/')
                                              .concat(i, '.traineddata'),
                                          )
                                        )
                                      case 6:
                                        if (void 0 === (f = t.sent)) {
                                          t.next = 12
                                          break
                                        }
                                        v(
                                          '['
                                            .concat(n, ']: Load ')
                                            .concat(
                                              i,
                                              '.traineddata from cache',
                                            ),
                                        ),
                                          (s = f),
                                          (t.next = 13)
                                        break
                                      case 12:
                                        throw Error('Not found in cache')
                                      case 13:
                                        t.next = 35
                                        break
                                      case 15:
                                        if (
                                          ((t.prev = 15),
                                          (t.t0 = t.catch(3)),
                                          v(
                                            '['
                                              .concat(n, ']: Load ')
                                              .concat(i, '.traineddata from ')
                                              .concat(a),
                                          ),
                                          'string' != typeof e)
                                        ) {
                                          t.next = 34
                                          break
                                        }
                                        if (
                                          ((m = null),
                                          (l(a) ||
                                            a.startsWith('moz-extension://') ||
                                            a.startsWith(
                                              'chrome-extension://',
                                            ) ||
                                            a.startsWith('file://')) &&
                                            (m = a),
                                          null === m)
                                        ) {
                                          t.next = 29
                                          break
                                        }
                                        return (
                                          (t.next = 24),
                                          p.get(
                                            ''
                                              .concat(m, '/')
                                              .concat(i, '.traineddata')
                                              .concat(b ? '.gz' : ''),
                                            { responseType: 'arraybuffer' },
                                          )
                                        )
                                      case 24:
                                        ;(y = t.sent),
                                          (w = y.data),
                                          (s = w),
                                          (t.next = 32)
                                        break
                                      case 29:
                                        return (
                                          (t.next = 31),
                                          A.readCache(
                                            ''
                                              .concat(a, '/')
                                              .concat(i, '.traineddata')
                                              .concat(b ? '.gz' : ''),
                                          )
                                        )
                                      case 31:
                                        s = t.sent
                                      case 32:
                                        t.next = 35
                                        break
                                      case 34:
                                        s = e.data
                                      case 35:
                                        if (
                                          ((s = new Uint8Array(s)),
                                          void 0 !== (x = h(s)) &&
                                            'application/gzip' === x.mime &&
                                            (s = A.gunzip(s)),
                                          u)
                                        ) {
                                          if (c)
                                            try {
                                              u.FS.mkdir(c)
                                            } catch (t) {
                                              r.reject(t.toString())
                                            }
                                          u.FS.writeFile(
                                            ''
                                              .concat(c || '.', '/')
                                              .concat(i, '.traineddata'),
                                            s,
                                          )
                                        }
                                        if (
                                          ![
                                            'write',
                                            'refresh',
                                            void 0,
                                          ].includes(g)
                                        ) {
                                          t.next = 42
                                          break
                                        }
                                        return (
                                          (t.next = 42),
                                          A.writeCache(
                                            ''
                                              .concat(d || '.', '/')
                                              .concat(i, '.traineddata'),
                                            s,
                                          )
                                        )
                                      case 42:
                                        return t.abrupt(
                                          'return',
                                          Promise.resolve(s),
                                        )
                                      case 43:
                                      case 'end':
                                        return t.stop()
                                    }
                                },
                                t,
                                null,
                                [[3, 15]],
                              )
                            }),
                          )
                          return function (e) {
                            return t.apply(this, arguments)
                          }
                        })()),
                        r.progress({
                          workerId: n,
                          status: 'loading language traineddata',
                          progress: 0,
                        }),
                        (t.prev = 3),
                        (t.next = 6),
                        Promise.all(
                          ('string' == typeof o ? o.split('+') : o).map(w),
                        )
                      )
                    case 6:
                      r.progress({
                        workerId: n,
                        status: 'loaded language traineddata',
                        progress: 1,
                      }),
                        r.resolve(o),
                        (t.next = 13)
                      break
                    case 10:
                      ;(t.prev = 10),
                        (t.t0 = t.catch(3)),
                        (m && t.t0 instanceof DOMException) ||
                          r.reject(t.t0.toString())
                    case 13:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              null,
              [[3, 10]],
            )
          }),
        )
        return function (e, r) {
          return t.apply(this, arguments)
        }
      })(),
      U = function (t, e) {
        var r = t.payload.params
        Object.keys(r)
          .filter(function (t) {
            return !t.startsWith('tessjs_')
          })
          .forEach(function (t) {
            x.SetVariable(t, r[t])
          }),
          (E = o({}, E, {}, r)),
          void 0 !== e && e.resolve(E)
      },
      k = function (t, e) {
        var r = t.workerId,
          n = t.payload,
          i = n.langs,
          o = n.oem,
          s =
            'string' == typeof i
              ? i
              : i
                  .map(function (t) {
                    return 'string' == typeof t ? t : t.data
                  })
                  .join('+')
        try {
          e.progress({ workerId: r, status: 'initializing api', progress: 0 }),
            null !== x && x.End(),
            (x = new u.TessBaseAPI()).Init(null, s, o),
            U({ payload: { params: (E = y) } }),
            e.progress({ workerId: r, status: 'initialized api', progress: 1 }),
            e.resolve()
        } catch (t) {
          e.reject(t.toString())
        }
      },
      T = function (t, e) {
        var r = t.payload,
          n = r.image,
          i = r.options.rectangles,
          o = void 0 === i ? [] : i
        try {
          var s = g(u, x, n)
          o.forEach(function (t) {
            var e = t.left,
              r = t.top,
              n = t.width,
              i = t.height
            x.SetRectangle(e, r, n, i)
          }),
            x.Recognize(null),
            e.resolve(d(u, x, E)),
            u._free(s)
        } catch (t) {
          e.reject(t.toString())
        }
      },
      I = function (t, e) {
        var r = t.payload,
          n = r.title,
          i = r.textonly,
          o = new u.TessPDFRenderer('tesseract-ocr', '/', i)
        o.BeginDocument(n),
          o.AddImage(x),
          o.EndDocument(),
          u._free(o),
          e.resolve(u.FS.readFile('/tesseract-ocr.pdf'))
      },
      O = function (t, e) {
        var r = t.payload.image
        try {
          var n = g(u, x, r),
            i = new u.OSResults()
          if (x.DetectOS(i)) {
            var o = i.best_result,
              s = o.orientation_id,
              a = o.script_id
            u._free(n),
              e.resolve({
                tesseract_script_id: a,
                script: i.unicharset.get_script_from_script_id(a),
                script_confidence: o.sconfidence,
                orientation_degrees: [0, 270, 180, 90][s],
                orientation_confidence: o.oconfidence,
              })
          } else x.End(), u._free(n), e.reject('Failed to detect OS')
        } catch (t) {
          e.reject(t.toString())
        }
      },
      P = function (t, e) {
        try {
          null !== x && x.End(), e.resolve({ terminated: !0 })
        } catch (t) {
          e.reject(t.toString())
        }
      }
    ;(e.dispatchHandlers = function (t, e) {
      var r = function (r, n) {
        e(o({}, t, { status: r, data: n }))
      }
      ;(r.resolve = r.bind(n, 'resolve')),
        (r.reject = r.bind(n, 'reject')),
        (r.progress = r.bind(n, 'progress')),
        (c = r)
      try {
        ;({
          load: _,
          loadLanguage: S,
          initialize: k,
          setParameters: U,
          recognize: T,
          getPDF: I,
          detect: O,
          terminate: P,
        }[t.action](t, r))
      } catch (t) {
        r.reject(t.toString())
      }
    }),
      (e.setAdapter = function (t) {
        A = t
      })
  },
  function (t, e, r) {
    ;(function (t) {
      function e(t) {
        return (e =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              })(t)
      }
      var r = (function (t) {
        'use strict'
        var r,
          n = Object.prototype,
          i = n.hasOwnProperty,
          o = 'function' == typeof Symbol ? Symbol : {},
          s = o.iterator || '@@iterator',
          a = o.asyncIterator || '@@asyncIterator',
          f = o.toStringTag || '@@toStringTag'
        function u(t, e, r, n) {
          var i = e && e.prototype instanceof g ? e : g,
            o = Object.create(i.prototype),
            s = new T(n || [])
          return (
            (o._invoke = (function (t, e, r) {
              var n = h
              return function (i, o) {
                if (n === l) throw new Error('Generator is already running')
                if (n === d) {
                  if ('throw' === i) throw o
                  return O()
                }
                for (r.method = i, r.arg = o; ; ) {
                  var s = r.delegate
                  if (s) {
                    var a = S(s, r)
                    if (a) {
                      if (a === m) continue
                      return a
                    }
                  }
                  if ('next' === r.method) r.sent = r._sent = r.arg
                  else if ('throw' === r.method) {
                    if (n === h) throw ((n = d), r.arg)
                    r.dispatchException(r.arg)
                  } else 'return' === r.method && r.abrupt('return', r.arg)
                  n = l
                  var f = c(t, e, r)
                  if ('normal' === f.type) {
                    if (((n = r.done ? d : p), f.arg === m)) continue
                    return { value: f.arg, done: r.done }
                  }
                  'throw' === f.type &&
                    ((n = d), (r.method = 'throw'), (r.arg = f.arg))
                }
              }
            })(t, r, s)),
            o
          )
        }
        function c(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) }
          } catch (t) {
            return { type: 'throw', arg: t }
          }
        }
        t.wrap = u
        var h = 'suspendedStart',
          p = 'suspendedYield',
          l = 'executing',
          d = 'completed',
          m = {}
        function g() {}
        function y() {}
        function b() {}
        var v = {}
        v[s] = function () {
          return this
        }
        var w = Object.getPrototypeOf,
          x = w && w(w(I([])))
        x && x !== n && i.call(x, s) && (v = x)
        var A = (b.prototype = g.prototype = Object.create(v))
        function E(t) {
          ;['next', 'throw', 'return'].forEach(function (e) {
            t[e] = function (t) {
              return this._invoke(e, t)
            }
          })
        }
        function _(t) {
          var r
          this._invoke = function (n, o) {
            function s() {
              return new Promise(function (r, s) {
                !(function r(n, o, s, a) {
                  var f = c(t[n], t, o)
                  if ('throw' !== f.type) {
                    var u = f.arg,
                      h = u.value
                    return h && 'object' === e(h) && i.call(h, '__await')
                      ? Promise.resolve(h.__await).then(
                          function (t) {
                            r('next', t, s, a)
                          },
                          function (t) {
                            r('throw', t, s, a)
                          },
                        )
                      : Promise.resolve(h).then(
                          function (t) {
                            ;(u.value = t), s(u)
                          },
                          function (t) {
                            return r('throw', t, s, a)
                          },
                        )
                  }
                  a(f.arg)
                })(n, o, r, s)
              })
            }
            return (r = r ? r.then(s, s) : s())
          }
        }
        function S(t, e) {
          var n = t.iterator[e.method]
          if (n === r) {
            if (((e.delegate = null), 'throw' === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = r),
                S(t, e),
                'throw' === e.method)
              )
                return m
              ;(e.method = 'throw'),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method",
                ))
            }
            return m
          }
          var i = c(n, t.iterator, e.arg)
          if ('throw' === i.type)
            return (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), m
          var o = i.arg
          return o
            ? o.done
              ? ((e[t.resultName] = o.value),
                (e.next = t.nextLoc),
                'return' !== e.method && ((e.method = 'next'), (e.arg = r)),
                (e.delegate = null),
                m)
              : o
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              m)
        }
        function U(t) {
          var e = { tryLoc: t[0] }
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e)
        }
        function k(t) {
          var e = t.completion || {}
          ;(e.type = 'normal'), delete e.arg, (t.completion = e)
        }
        function T(t) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(U, this),
            this.reset(!0)
        }
        function I(t) {
          if (t) {
            var e = t[s]
            if (e) return e.call(t)
            if ('function' == typeof t.next) return t
            if (!isNaN(t.length)) {
              var n = -1,
                o = function e() {
                  for (; ++n < t.length; )
                    if (i.call(t, n)) return (e.value = t[n]), (e.done = !1), e
                  return (e.value = r), (e.done = !0), e
                }
              return (o.next = o)
            }
          }
          return { next: O }
        }
        function O() {
          return { value: r, done: !0 }
        }
        return (
          (y.prototype = A.constructor = b),
          (b.constructor = y),
          (b[f] = y.displayName = 'GeneratorFunction'),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor
            return (
              !!e &&
              (e === y || 'GeneratorFunction' === (e.displayName || e.name))
            )
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), f in t || (t[f] = 'GeneratorFunction')),
              (t.prototype = Object.create(A)),
              t
            )
          }),
          (t.awrap = function (t) {
            return { __await: t }
          }),
          E(_.prototype),
          (_.prototype[a] = function () {
            return this
          }),
          (t.AsyncIterator = _),
          (t.async = function (e, r, n, i) {
            var o = new _(u(e, r, n, i))
            return t.isGeneratorFunction(r)
              ? o
              : o.next().then(function (t) {
                  return t.done ? t.value : o.next()
                })
          }),
          E(A),
          (A[f] = 'Generator'),
          (A[s] = function () {
            return this
          }),
          (A.toString = function () {
            return '[object Generator]'
          }),
          (t.keys = function (t) {
            var e = []
            for (var r in t) e.push(r)
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop()
                  if (n in t) return (r.value = n), (r.done = !1), r
                }
                return (r.done = !0), r
              }
            )
          }),
          (t.values = I),
          (T.prototype = {
            constructor: T,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = r),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = r),
                this.tryEntries.forEach(k),
                !t)
              )
                for (var e in this)
                  't' === e.charAt(0) &&
                    i.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = r)
            },
            stop: function () {
              this.done = !0
              var t = this.tryEntries[0].completion
              if ('throw' === t.type) throw t.arg
              return this.rval
            },
            dispatchException: function (t) {
              if (this.done) throw t
              var e = this
              function n(n, i) {
                return (
                  (a.type = 'throw'),
                  (a.arg = t),
                  (e.next = n),
                  i && ((e.method = 'next'), (e.arg = r)),
                  !!i
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var s = this.tryEntries[o],
                  a = s.completion
                if ('root' === s.tryLoc) return n('end')
                if (s.tryLoc <= this.prev) {
                  var f = i.call(s, 'catchLoc'),
                    u = i.call(s, 'finallyLoc')
                  if (f && u) {
                    if (this.prev < s.catchLoc) return n(s.catchLoc, !0)
                    if (this.prev < s.finallyLoc) return n(s.finallyLoc)
                  } else if (f) {
                    if (this.prev < s.catchLoc) return n(s.catchLoc, !0)
                  } else {
                    if (!u)
                      throw new Error('try statement without catch or finally')
                    if (this.prev < s.finallyLoc) return n(s.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var n = this.tryEntries[r]
                if (
                  n.tryLoc <= this.prev &&
                  i.call(n, 'finallyLoc') &&
                  this.prev < n.finallyLoc
                ) {
                  var o = n
                  break
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null)
              var s = o ? o.completion : {}
              return (
                (s.type = t),
                (s.arg = e),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), m)
                  : this.complete(s)
              )
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                m
              )
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e]
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), k(r), m
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e]
                if (r.tryLoc === t) {
                  var n = r.completion
                  if ('throw' === n.type) {
                    var i = n.arg
                    k(r)
                  }
                  return i
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: I(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = r),
                m
              )
            },
          }),
          t
        )
      })('object' === e(t) ? t.exports : {})
      try {
        regeneratorRuntime = r
      } catch (t) {
        Function('r', 'regeneratorRuntime = r')(r)
      }
    }.call(this, r(14)(t)))
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function () {
              return t.l
            },
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function () {
              return t.i
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      )
    }
  },
  function (t, e, r) {
    'use strict'
    ;(e.byteLength = function (t) {
      var e = u(t),
        r = e[0],
        n = e[1]
      return (3 * (r + n)) / 4 - n
    }),
      (e.toByteArray = function (t) {
        var e,
          r,
          n = u(t),
          s = n[0],
          a = n[1],
          f = new o(
            (function (t, e, r) {
              return (3 * (e + r)) / 4 - r
            })(0, s, a),
          ),
          c = 0,
          h = a > 0 ? s - 4 : s
        for (r = 0; r < h; r += 4)
          (e =
            (i[t.charCodeAt(r)] << 18) |
            (i[t.charCodeAt(r + 1)] << 12) |
            (i[t.charCodeAt(r + 2)] << 6) |
            i[t.charCodeAt(r + 3)]),
            (f[c++] = (e >> 16) & 255),
            (f[c++] = (e >> 8) & 255),
            (f[c++] = 255 & e)
        2 === a &&
          ((e = (i[t.charCodeAt(r)] << 2) | (i[t.charCodeAt(r + 1)] >> 4)),
          (f[c++] = 255 & e))
        1 === a &&
          ((e =
            (i[t.charCodeAt(r)] << 10) |
            (i[t.charCodeAt(r + 1)] << 4) |
            (i[t.charCodeAt(r + 2)] >> 2)),
          (f[c++] = (e >> 8) & 255),
          (f[c++] = 255 & e))
        return f
      }),
      (e.fromByteArray = function (t) {
        for (
          var e, r = t.length, i = r % 3, o = [], s = 0, a = r - i;
          s < a;
          s += 16383
        )
          o.push(c(t, s, s + 16383 > a ? a : s + 16383))
        1 === i
          ? ((e = t[r - 1]), o.push(n[e >> 2] + n[(e << 4) & 63] + '=='))
          : 2 === i &&
            ((e = (t[r - 2] << 8) + t[r - 1]),
            o.push(n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + '='))
        return o.join('')
      })
    for (
      var n = [],
        i = [],
        o = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
        s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        a = 0,
        f = s.length;
      a < f;
      ++a
    )
      (n[a] = s[a]), (i[s.charCodeAt(a)] = a)
    function u(t) {
      var e = t.length
      if (e % 4 > 0)
        throw new Error('Invalid string. Length must be a multiple of 4')
      var r = t.indexOf('=')
      return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)]
    }
    function c(t, e, r) {
      for (var i, o, s = [], a = e; a < r; a += 3)
        (i =
          ((t[a] << 16) & 16711680) +
          ((t[a + 1] << 8) & 65280) +
          (255 & t[a + 2])),
          s.push(
            n[((o = i) >> 18) & 63] +
              n[(o >> 12) & 63] +
              n[(o >> 6) & 63] +
              n[63 & o],
          )
      return s.join('')
    }
    ;(i['-'.charCodeAt(0)] = 62), (i['_'.charCodeAt(0)] = 63)
  },
  function (t, e) {
    ;(e.read = function (t, e, r, n, i) {
      var o,
        s,
        a = 8 * i - n - 1,
        f = (1 << a) - 1,
        u = f >> 1,
        c = -7,
        h = r ? i - 1 : 0,
        p = r ? -1 : 1,
        l = t[e + h]
      for (
        h += p, o = l & ((1 << -c) - 1), l >>= -c, c += a;
        c > 0;
        o = 256 * o + t[e + h], h += p, c -= 8
      );
      for (
        s = o & ((1 << -c) - 1), o >>= -c, c += n;
        c > 0;
        s = 256 * s + t[e + h], h += p, c -= 8
      );
      if (0 === o) o = 1 - u
      else {
        if (o === f) return s ? NaN : (1 / 0) * (l ? -1 : 1)
        ;(s += Math.pow(2, n)), (o -= u)
      }
      return (l ? -1 : 1) * s * Math.pow(2, o - n)
    }),
      (e.write = function (t, e, r, n, i, o) {
        var s,
          a,
          f,
          u = 8 * o - i - 1,
          c = (1 << u) - 1,
          h = c >> 1,
          p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          l = n ? 0 : o - 1,
          d = n ? 1 : -1,
          m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0
        for (
          e = Math.abs(e),
            isNaN(e) || e === 1 / 0
              ? ((a = isNaN(e) ? 1 : 0), (s = c))
              : ((s = Math.floor(Math.log(e) / Math.LN2)),
                e * (f = Math.pow(2, -s)) < 1 && (s--, (f *= 2)),
                (e += s + h >= 1 ? p / f : p * Math.pow(2, 1 - h)) * f >= 2 &&
                  (s++, (f /= 2)),
                s + h >= c
                  ? ((a = 0), (s = c))
                  : s + h >= 1
                  ? ((a = (e * f - 1) * Math.pow(2, i)), (s += h))
                  : ((a = e * Math.pow(2, h - 1) * Math.pow(2, i)), (s = 0)));
          i >= 8;
          t[r + l] = 255 & a, l += d, a /= 256, i -= 8
        );
        for (
          s = (s << i) | a, u += i;
          u > 0;
          t[r + l] = 255 & s, l += d, s /= 256, u -= 8
        );
        t[r + l - d] |= 128 * m
      })
  },
  function (t, e) {
    var r = {}.toString
    t.exports =
      Array.isArray ||
      function (t) {
        return '[object Array]' == r.call(t)
      }
  },
  function (t, e, r) {
    'use strict'
    ;(function (t) {
      function r(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) {
              for (var e = 0, r = new Array(t.length); e < t.length; e++)
                r[e] = t[e]
              return r
            }
          })(t) ||
          (function (t) {
            if (
              Symbol.iterator in Object(t) ||
              '[object Arguments]' === Object.prototype.toString.call(t)
            )
              return Array.from(t)
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance',
            )
          })()
        )
      }
      e.stringToBytes = function (t) {
        return r(t).map(function (t) {
          return t.charCodeAt(0)
        })
      }
      var n = function (t, e, n) {
        return String.fromCharCode.apply(String, r(t.slice(e, n)))
      }
      ;(e.readUInt64LE = function (t) {
        for (
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r = t[e],
            n = 1,
            i = 0;
          ++i < 8;

        )
          (n *= 256), (r += t[e + i] * n)
        return r
      }),
        (e.tarHeaderChecksumMatches = function (t) {
          if (t.length < 512) return !1
          for (var e = 256, r = 0, i = 0; i < 148; i++) {
            var o = t[i]
            ;(e += o), (r += 128 & o)
          }
          for (var s = 156; s < 512; s++) {
            var a = t[s]
            ;(e += a), (r += 128 & a)
          }
          var f = parseInt(n(t, 148, 154), 8)
          return f === e || f === e - (r << 1)
        }),
        (e.multiByteIndexOf = function (e, r) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
          if (t && t.isBuffer(e)) return e.indexOf(t.from(r), n)
          for (
            var i = function (t, e, r) {
                for (var n = 1; n < e.length; n++)
                  if (e[n] !== t[r + n]) return !1
                return !0
              },
              o = e.indexOf(r[0], n);
            o >= 0;

          ) {
            if (i(e, r, o)) return o
            o = e.indexOf(r[0], o + 1)
          }
          return -1
        }),
        (e.uint8ArrayUtf8ByteString = n)
    }.call(this, r(1).Buffer))
  },
  function (t, e, r) {
    'use strict'
    t.exports = {
      extensions: [
        'jpg',
        'png',
        'apng',
        'gif',
        'webp',
        'flif',
        'cr2',
        'orf',
        'arw',
        'dng',
        'nef',
        'rw2',
        'raf',
        'tif',
        'bmp',
        'jxr',
        'psd',
        'zip',
        'tar',
        'rar',
        'gz',
        'bz2',
        '7z',
        'dmg',
        'mp4',
        'mid',
        'mkv',
        'webm',
        'mov',
        'avi',
        'mpg',
        'mp2',
        'mp3',
        'm4a',
        'oga',
        'ogg',
        'ogv',
        'opus',
        'flac',
        'wav',
        'spx',
        'amr',
        'pdf',
        'epub',
        'exe',
        'swf',
        'rtf',
        'wasm',
        'woff',
        'woff2',
        'eot',
        'ttf',
        'otf',
        'ico',
        'flv',
        'ps',
        'xz',
        'sqlite',
        'nes',
        'crx',
        'xpi',
        'cab',
        'deb',
        'ar',
        'rpm',
        'Z',
        'lz',
        'msi',
        'mxf',
        'mts',
        'blend',
        'bpg',
        'docx',
        'pptx',
        'xlsx',
        '3gp',
        '3g2',
        'jp2',
        'jpm',
        'jpx',
        'mj2',
        'aif',
        'qcp',
        'odt',
        'ods',
        'odp',
        'xml',
        'mobi',
        'heic',
        'cur',
        'ktx',
        'ape',
        'wv',
        'wmv',
        'wma',
        'dcm',
        'ics',
        'glb',
        'pcap',
        'dsf',
        'lnk',
        'alias',
        'voc',
        'ac3',
        'm4v',
        'm4p',
        'm4b',
        'f4v',
        'f4p',
        'f4b',
        'f4a',
        'mie',
        'asf',
        'ogm',
        'ogx',
        'mpc',
        'arrow',
        'shp',
      ],
      mimeTypes: [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/flif',
        'image/x-canon-cr2',
        'image/tiff',
        'image/bmp',
        'image/vnd.ms-photo',
        'image/vnd.adobe.photoshop',
        'application/epub+zip',
        'application/x-xpinstall',
        'application/vnd.oasis.opendocument.text',
        'application/vnd.oasis.opendocument.spreadsheet',
        'application/vnd.oasis.opendocument.presentation',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/zip',
        'application/x-tar',
        'application/x-rar-compressed',
        'application/gzip',
        'application/x-bzip2',
        'application/x-7z-compressed',
        'application/x-apple-diskimage',
        'application/x-apache-arrow',
        'video/mp4',
        'audio/midi',
        'video/x-matroska',
        'video/webm',
        'video/quicktime',
        'video/vnd.avi',
        'audio/vnd.wave',
        'audio/qcelp',
        'audio/x-ms-wma',
        'video/x-ms-asf',
        'application/vnd.ms-asf',
        'video/mpeg',
        'video/3gpp',
        'audio/mpeg',
        'audio/mp4',
        'audio/opus',
        'video/ogg',
        'audio/ogg',
        'application/ogg',
        'audio/x-flac',
        'audio/ape',
        'audio/wavpack',
        'audio/amr',
        'application/pdf',
        'application/x-msdownload',
        'application/x-shockwave-flash',
        'application/rtf',
        'application/wasm',
        'font/woff',
        'font/woff2',
        'application/vnd.ms-fontobject',
        'font/ttf',
        'font/otf',
        'image/x-icon',
        'video/x-flv',
        'application/postscript',
        'application/x-xz',
        'application/x-sqlite3',
        'application/x-nintendo-nes-rom',
        'application/x-google-chrome-extension',
        'application/vnd.ms-cab-compressed',
        'application/x-deb',
        'application/x-unix-archive',
        'application/x-rpm',
        'application/x-compress',
        'application/x-lzip',
        'application/x-msi',
        'application/x-mie',
        'application/mxf',
        'video/mp2t',
        'application/x-blender',
        'image/bpg',
        'image/jp2',
        'image/jpx',
        'image/jpm',
        'image/mj2',
        'audio/aiff',
        'application/xml',
        'application/x-mobipocket-ebook',
        'image/heif',
        'image/heif-sequence',
        'image/heic',
        'image/heic-sequence',
        'image/ktx',
        'application/dicom',
        'audio/x-musepack',
        'text/calendar',
        'model/gltf-binary',
        'application/vnd.tcpdump.pcap',
        'audio/x-dsf',
        'application/x.ms.shortcut',
        'application/x.apple.alias',
        'audio/x-voc',
        'audio/vnd.dolby.dd-raw',
        'audio/x-m4a',
        'image/apng',
        'image/x-olympus-orf',
        'image/x-sony-arw',
        'image/x-adobe-dng',
        'image/x-nikon-nef',
        'image/x-panasonic-rw2',
        'image/x-fujifilm-raf',
        'video/x-m4v',
        'video/3gpp2',
        'application/x-esri-shape',
      ],
    }
  },
  function (t, e, r) {
    t.exports = r(21)
  },
  function (t, e, r) {
    'use strict'
    var n = r(0),
      i = r(5),
      o = r(23),
      s = r(3)
    function a(t) {
      var e = new o(t),
        r = i(o.prototype.request, e)
      return n.extend(r, o.prototype, e), n.extend(r, e), r
    }
    var f = a(s)
    ;(f.Axios = o),
      (f.create = function (t) {
        return a(n.merge(s, t))
      }),
      (f.Cancel = r(10)),
      (f.CancelToken = r(36)),
      (f.isCancel = r(9)),
      (f.all = function (t) {
        return Promise.all(t)
      }),
      (f.spread = r(37)),
      (t.exports = f),
      (t.exports.default = f)
  },
  function (t, e) {
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    t.exports = function (t) {
      return (
        null != t &&
        null != t.constructor &&
        'function' == typeof t.constructor.isBuffer &&
        t.constructor.isBuffer(t)
      )
    }
  },
  function (t, e, r) {
    'use strict'
    var n = r(3),
      i = r(0),
      o = r(31),
      s = r(32)
    function a(t) {
      ;(this.defaults = t),
        (this.interceptors = { request: new o(), response: new o() })
    }
    ;(a.prototype.request = function (t) {
      'string' == typeof t &&
        (t = i.merge({ url: arguments[0] }, arguments[1])),
        ((t = i.merge(n, { method: 'get' }, this.defaults, t)).method =
          t.method.toLowerCase())
      var e = [s, void 0],
        r = Promise.resolve(t)
      for (
        this.interceptors.request.forEach(function (t) {
          e.unshift(t.fulfilled, t.rejected)
        }),
          this.interceptors.response.forEach(function (t) {
            e.push(t.fulfilled, t.rejected)
          });
        e.length;

      )
        r = r.then(e.shift(), e.shift())
      return r
    }),
      i.forEach(['delete', 'get', 'head', 'options'], function (t) {
        a.prototype[t] = function (e, r) {
          return this.request(i.merge(r || {}, { method: t, url: e }))
        }
      }),
      i.forEach(['post', 'put', 'patch'], function (t) {
        a.prototype[t] = function (e, r, n) {
          return this.request(i.merge(n || {}, { method: t, url: e, data: r }))
        }
      }),
      (t.exports = a)
  },
  function (t, e, r) {
    'use strict'
    var n = r(0)
    t.exports = function (t, e) {
      n.forEach(t, function (r, n) {
        n !== e &&
          n.toUpperCase() === e.toUpperCase() &&
          ((t[e] = r), delete t[n])
      })
    }
  },
  function (t, e, r) {
    'use strict'
    var n = r(8)
    t.exports = function (t, e, r) {
      var i = r.config.validateStatus
      r.status && i && !i(r.status)
        ? e(
            n(
              'Request failed with status code ' + r.status,
              r.config,
              null,
              r.request,
              r,
            ),
          )
        : t(r)
    }
  },
  function (t, e, r) {
    'use strict'
    t.exports = function (t, e, r, n, i) {
      return (
        (t.config = e), r && (t.code = r), (t.request = n), (t.response = i), t
      )
    }
  },
  function (t, e, r) {
    'use strict'
    var n = r(0)
    function i(t) {
      return encodeURIComponent(t)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
    }
    t.exports = function (t, e, r) {
      if (!e) return t
      var o
      if (r) o = r(e)
      else if (n.isURLSearchParams(e)) o = e.toString()
      else {
        var s = []
        n.forEach(e, function (t, e) {
          null != t &&
            (n.isArray(t) ? (e += '[]') : (t = [t]),
            n.forEach(t, function (t) {
              n.isDate(t)
                ? (t = t.toISOString())
                : n.isObject(t) && (t = JSON.stringify(t)),
                s.push(i(e) + '=' + i(t))
            }))
        }),
          (o = s.join('&'))
      }
      return o && (t += (-1 === t.indexOf('?') ? '?' : '&') + o), t
    }
  },
  function (t, e, r) {
    'use strict'
    var n = r(0),
      i = [
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent',
      ]
    t.exports = function (t) {
      var e,
        r,
        o,
        s = {}
      return t
        ? (n.forEach(t.split('\n'), function (t) {
            if (
              ((o = t.indexOf(':')),
              (e = n.trim(t.substr(0, o)).toLowerCase()),
              (r = n.trim(t.substr(o + 1))),
              e)
            ) {
              if (s[e] && i.indexOf(e) >= 0) return
              s[e] =
                'set-cookie' === e
                  ? (s[e] ? s[e] : []).concat([r])
                  : s[e]
                  ? s[e] + ', ' + r
                  : r
            }
          }),
          s)
        : s
    }
  },
  function (t, e, r) {
    'use strict'
    var n = r(0)
    t.exports = n.isStandardBrowserEnv()
      ? (function () {
          var t,
            e = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement('a')
          function i(t) {
            var n = t
            return (
              e && (r.setAttribute('href', n), (n = r.href)),
              r.setAttribute('href', n),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, '') : '',
                hash: r.hash ? r.hash.replace(/^#/, '') : '',
                hostname: r.hostname,
                port: r.port,
                pathname:
                  '/' === r.pathname.charAt(0) ? r.pathname : '/' + r.pathname,
              }
            )
          }
          return (
            (t = i(window.location.href)),
            function (e) {
              var r = n.isString(e) ? i(e) : e
              return r.protocol === t.protocol && r.host === t.host
            }
          )
        })()
      : function () {
          return !0
        }
  },
  function (t, e, r) {
    'use strict'
    var n = r(0)
    t.exports = n.isStandardBrowserEnv()
      ? {
          write: function (t, e, r, i, o, s) {
            var a = []
            a.push(t + '=' + encodeURIComponent(e)),
              n.isNumber(r) && a.push('expires=' + new Date(r).toGMTString()),
              n.isString(i) && a.push('path=' + i),
              n.isString(o) && a.push('domain=' + o),
              !0 === s && a.push('secure'),
              (document.cookie = a.join('; '))
          },
          read: function (t) {
            var e = document.cookie.match(
              new RegExp('(^|;\\s*)(' + t + ')=([^;]*)'),
            )
            return e ? decodeURIComponent(e[3]) : null
          },
          remove: function (t) {
            this.write(t, '', Date.now() - 864e5)
          },
        }
      : {
          write: function () {},
          read: function () {
            return null
          },
          remove: function () {},
        }
  },
  function (t, e, r) {
    'use strict'
    var n = r(0)
    function i() {
      this.handlers = []
    }
    ;(i.prototype.use = function (t, e) {
      return (
        this.handlers.push({ fulfilled: t, rejected: e }),
        this.handlers.length - 1
      )
    }),
      (i.prototype.eject = function (t) {
        this.handlers[t] && (this.handlers[t] = null)
      }),
      (i.prototype.forEach = function (t) {
        n.forEach(this.handlers, function (e) {
          null !== e && t(e)
        })
      }),
      (t.exports = i)
  },
  function (t, e, r) {
    'use strict'
    var n = r(0),
      i = r(33),
      o = r(9),
      s = r(3),
      a = r(34),
      f = r(35)
    function u(t) {
      t.cancelToken && t.cancelToken.throwIfRequested()
    }
    t.exports = function (t) {
      return (
        u(t),
        t.baseURL && !a(t.url) && (t.url = f(t.baseURL, t.url)),
        (t.headers = t.headers || {}),
        (t.data = i(t.data, t.headers, t.transformRequest)),
        (t.headers = n.merge(
          t.headers.common || {},
          t.headers[t.method] || {},
          t.headers || {},
        )),
        n.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          function (e) {
            delete t.headers[e]
          },
        ),
        (t.adapter || s.adapter)(t).then(
          function (e) {
            return u(t), (e.data = i(e.data, e.headers, t.transformResponse)), e
          },
          function (e) {
            return (
              o(e) ||
                (u(t),
                e &&
                  e.response &&
                  (e.response.data = i(
                    e.response.data,
                    e.response.headers,
                    t.transformResponse,
                  ))),
              Promise.reject(e)
            )
          },
        )
      )
    }
  },
  function (t, e, r) {
    'use strict'
    var n = r(0)
    t.exports = function (t, e, r) {
      return (
        n.forEach(r, function (r) {
          t = r(t, e)
        }),
        t
      )
    }
  },
  function (t, e, r) {
    'use strict'
    t.exports = function (t) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
  },
  function (t, e, r) {
    'use strict'
    t.exports = function (t, e) {
      return e ? t.replace(/\/+$/, '') + '/' + e.replace(/^\/+/, '') : t
    }
  },
  function (t, e, r) {
    'use strict'
    var n = r(10)
    function i(t) {
      if ('function' != typeof t)
        throw new TypeError('executor must be a function.')
      var e
      this.promise = new Promise(function (t) {
        e = t
      })
      var r = this
      t(function (t) {
        r.reason || ((r.reason = new n(t)), e(r.reason))
      })
    }
    ;(i.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason
    }),
      (i.source = function () {
        var t
        return {
          token: new i(function (e) {
            t = e
          }),
          cancel: t,
        }
      }),
      (t.exports = i)
  },
  function (t, e, r) {
    'use strict'
    t.exports = function (t) {
      return function (e) {
        return t.apply(null, e)
      }
    }
  },
  function (t, e) {
    t.exports = function (t) {
      return r.test(t)
    }
    var r = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/
  },
  function (t, e) {
    var r = function (t) {
      var e = t.split('\n')
      if ('  ' === e[0].substring(0, 2))
        for (var r = 0; r < e.length; r += 1)
          '  ' === e[r].substring(0, 2) && (e[r] = e[r].slice(2))
      return e.join('\n')
    }
    t.exports = function (t, e, n) {
      var i,
        o,
        s,
        a,
        f,
        u = n.tessjs_create_hocr,
        c = n.tessjs_create_tsv,
        h = n.tessjs_create_box,
        p = n.tessjs_create_unlv,
        l = n.tessjs_create_osd,
        d = e.GetIterator(),
        m = t.RIL_BLOCK,
        g = t.RIL_PARA,
        y = t.RIL_TEXTLINE,
        b = t.RIL_WORD,
        v = t.RIL_SYMBOL,
        w = [],
        x = function (e, r) {
          return Object.keys(t)
            .filter(function (n) {
              return n.startsWith(''.concat(r, '_')) && t[n] === e
            })
            .map(function (t) {
              return t.slice(r.length + 1)
            })[0]
        }
      d.Begin()
      do {
        if (d.IsAtBeginningOf(m)) {
          var A = d.BlockPolygon(),
            E = null
          if (t.getPointer(A) > 0) {
            var _ = A.get_n(),
              S = A.get_x(),
              U = A.get_y()
            E = []
            for (var k = 0; k < _; k += 1)
              E.push([S.getValue(k), U.getValue(k)])
          }
          ;(i = {
            paragraphs: [],
            text: d.GetUTF8Text(m),
            confidence: d.Confidence(m),
            baseline: d.getBaseline(m),
            bbox: d.getBoundingBox(m),
            blocktype: x(d.BlockType(), 'PT'),
            polygon: E,
          }),
            w.push(i)
        }
        if (
          (d.IsAtBeginningOf(g) &&
            ((o = {
              lines: [],
              text: d.GetUTF8Text(g),
              confidence: d.Confidence(g),
              baseline: d.getBaseline(g),
              bbox: d.getBoundingBox(g),
              is_ltr: !!d.ParagraphIsLtr(),
            }),
            i.paragraphs.push(o)),
          d.IsAtBeginningOf(y) &&
            ((s = {
              words: [],
              text: d.GetUTF8Text(y),
              confidence: d.Confidence(y),
              baseline: d.getBaseline(y),
              bbox: d.getBoundingBox(y),
            }),
            o.lines.push(s)),
          d.IsAtBeginningOf(b))
        ) {
          var T = d.getWordFontAttributes(),
            I = d.WordDirection()
          a = {
            symbols: [],
            choices: [],
            text: d.GetUTF8Text(b),
            confidence: d.Confidence(b),
            baseline: d.getBaseline(b),
            bbox: d.getBoundingBox(b),
            is_numeric: !!d.WordIsNumeric(),
            in_dictionary: !!d.WordIsFromDictionary(),
            direction: x(I, 'DIR'),
            language: d.WordRecognitionLanguage(),
            is_bold: T.is_bold,
            is_italic: T.is_italic,
            is_underlined: T.is_underlined,
            is_monospace: T.is_monospace,
            is_serif: T.is_serif,
            is_smallcaps: T.is_smallcaps,
            font_size: T.pointsize,
            font_id: T.font_id,
            font_name: T.font_name,
          }
          var O = new t.WordChoiceIterator(d)
          do {
            a.choices.push({
              text: O.GetUTF8Text(),
              confidence: O.Confidence(),
            })
          } while (O.Next())
          t.destroy(O), s.words.push(a)
        }
        if (d.IsAtBeginningOf(v)) {
          ;(f = {
            choices: [],
            image: null,
            text: d.GetUTF8Text(v),
            confidence: d.Confidence(v),
            baseline: d.getBaseline(v),
            bbox: d.getBoundingBox(v),
            is_superscript: !!d.SymbolIsSuperscript(),
            is_subscript: !!d.SymbolIsSubscript(),
            is_dropcap: !!d.SymbolIsDropcap(),
          }),
            a.symbols.push(f)
          var P = new t.ChoiceIterator(d)
          do {
            f.choices.push({
              text: P.GetUTF8Text(),
              confidence: P.Confidence(),
            })
          } while (P.Next())
        }
      } while (d.Next(v))
      return (
        t.destroy(d),
        {
          text: e.GetUTF8Text(),
          hocr: '1' === u ? r(e.GetHOCRText()) : null,
          tsv: '1' === c ? e.GetTSVText() : null,
          box: '1' === h ? e.GetBoxText() : null,
          unlv: '1' === p ? e.GetUNLVText() : null,
          osd: '1' === l ? e.GetOsdText() : null,
          confidence: e.MeanTextConf(),
          blocks: w,
          psm: x(e.GetPageSegMode(), 'PSM'),
          oem: x(e.oem(), 'OEM'),
          version: e.Version(),
        }
      )
    }
  },
  function (t, e) {
    t.exports = function (t) {
      var e = {
        type:
          'undefined' != typeof window && void 0 !== window.document
            ? 'browser'
            : 'node',
      }
      return void 0 === t ? e : e[t]
    }
  },
  function (t, e, r) {
    ;(function (e) {
      function n(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t
          })(t) ||
          (function (t, e) {
            if (
              !(
                Symbol.iterator in Object(t) ||
                '[object Arguments]' === Object.prototype.toString.call(t)
              )
            )
              return
            var r = [],
              n = !0,
              i = !1,
              o = void 0
            try {
              for (
                var s, a = t[Symbol.iterator]();
                !(n = (s = a.next()).done) &&
                (r.push(s.value), !e || r.length !== e);
                n = !0
              );
            } catch (t) {
              ;(i = !0), (o = t)
            } finally {
              try {
                n || null == a.return || a.return()
              } finally {
                if (i) throw o
              }
            }
            return r
          })(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance',
            )
          })()
        )
      }
      function i(t, e) {
        var r = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t)
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function o(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        )
      }
      var s = r(42),
        a = r(4)
      t.exports = function (t, r, f) {
        var u = e.from(
            Array.from(
              (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {}
                  e % 2
                    ? i(Object(r), !0).forEach(function (e) {
                        o(t, e, r[e])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(r),
                      )
                    : i(Object(r)).forEach(function (e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(r, e),
                        )
                      })
                }
                return t
              })({}, f, { length: Object.keys(f).length }),
            ),
          ),
          c = a(u),
          h = 0,
          p = null,
          l = null,
          d = 0,
          m = 0
        if (c && 'image/bmp' === c.mime) {
          var g = s.decode(u)
          ;(p = t._malloc(g.data.length * Uint8Array.BYTES_PER_ELEMENT)),
            t.HEAPU8.set(g.data, p),
            (d = g.width),
            (m = g.height),
            (h = 4)
        } else {
          var y = t._malloc(u.length * Uint8Array.BYTES_PER_ELEMENT)
          t.HEAPU8.set(u, y),
            (l = t._pixReadMem(y, u.length)),
            0 === t.getValue(l + 28, 'i32') && t.setValue(l + 28, 300, 'i32')
          var b = n(
            Array(2)
              .fill(0)
              .map(function (e, r) {
                return t.getValue(l + 4 * r, 'i32')
              }),
            2,
          )
          ;(d = b[0]), (m = b[1])
        }
        return (
          null === p ? r.SetImage(l) : r.SetImage(p, d, m, h, d * h),
          null === p ? l : p
        )
      }
    }.call(this, r(1).Buffer))
  },
  function (t, e, r) {
    var n = r(43),
      i = r(44)
    t.exports = { encode: n, decode: i }
  },
  function (t, e, r) {
    ;(function (e) {
      function r(t) {
        ;(this.buffer = t.data),
          (this.width = t.width),
          (this.height = t.height),
          (this.extraBytes = this.width % 4),
          (this.rgbSize = this.height * (3 * this.width + this.extraBytes)),
          (this.headerInfoSize = 40),
          (this.data = []),
          (this.flag = 'BM'),
          (this.reserved = 0),
          (this.offset = 54),
          (this.fileSize = this.rgbSize + this.offset),
          (this.planes = 1),
          (this.bitPP = 24),
          (this.compress = 0),
          (this.hr = 0),
          (this.vr = 0),
          (this.colors = 0),
          (this.importantColors = 0)
      }
      ;(r.prototype.encode = function () {
        var t = new e(this.offset + this.rgbSize)
        ;(this.pos = 0),
          t.write(this.flag, this.pos, 2),
          (this.pos += 2),
          t.writeUInt32LE(this.fileSize, this.pos),
          (this.pos += 4),
          t.writeUInt32LE(this.reserved, this.pos),
          (this.pos += 4),
          t.writeUInt32LE(this.offset, this.pos),
          (this.pos += 4),
          t.writeUInt32LE(this.headerInfoSize, this.pos),
          (this.pos += 4),
          t.writeUInt32LE(this.width, this.pos),
          (this.pos += 4),
          t.writeInt32LE(-this.height, this.pos),
          (this.pos += 4),
          t.writeUInt16LE(this.planes, this.pos),
          (this.pos += 2),
          t.writeUInt16LE(this.bitPP, this.pos),
          (this.pos += 2),
          t.writeUInt32LE(this.compress, this.pos),
          (this.pos += 4),
          t.writeUInt32LE(this.rgbSize, this.pos),
          (this.pos += 4),
          t.writeUInt32LE(this.hr, this.pos),
          (this.pos += 4),
          t.writeUInt32LE(this.vr, this.pos),
          (this.pos += 4),
          t.writeUInt32LE(this.colors, this.pos),
          (this.pos += 4),
          t.writeUInt32LE(this.importantColors, this.pos),
          (this.pos += 4)
        for (
          var r = 0, n = 3 * this.width + this.extraBytes, i = 0;
          i < this.height;
          i++
        ) {
          for (var o = 0; o < this.width; o++) {
            var s = this.pos + i * n + 3 * o
            r++,
              (t[s] = this.buffer[r++]),
              (t[s + 1] = this.buffer[r++]),
              (t[s + 2] = this.buffer[r++])
          }
          if (this.extraBytes > 0) {
            var a = this.pos + i * n + 3 * this.width
            t.fill(0, a, a + this.extraBytes)
          }
        }
        return t
      }),
        (t.exports = function (t, e) {
          return (
            void 0 === e && (e = 100),
            { data: new r(t).encode(), width: t.width, height: t.height }
          )
        })
    }.call(this, r(1).Buffer))
  },
  function (t, e, r) {
    ;(function (e) {
      function r(t, e) {
        if (
          ((this.pos = 0),
          (this.buffer = t),
          (this.is_with_alpha = !!e),
          (this.bottom_up = !0),
          (this.flag = this.buffer.toString('utf-8', 0, (this.pos += 2))),
          'BM' != this.flag)
        )
          throw new Error('Invalid BMP File')
        this.parseHeader(), this.parseRGBA()
      }
      ;(r.prototype.parseHeader = function () {
        if (
          ((this.fileSize = this.buffer.readUInt32LE(this.pos)),
          (this.pos += 4),
          (this.reserved = this.buffer.readUInt32LE(this.pos)),
          (this.pos += 4),
          (this.offset = this.buffer.readUInt32LE(this.pos)),
          (this.pos += 4),
          (this.headerSize = this.buffer.readUInt32LE(this.pos)),
          (this.pos += 4),
          (this.width = this.buffer.readUInt32LE(this.pos)),
          (this.pos += 4),
          (this.height = this.buffer.readInt32LE(this.pos)),
          (this.pos += 4),
          (this.planes = this.buffer.readUInt16LE(this.pos)),
          (this.pos += 2),
          (this.bitPP = this.buffer.readUInt16LE(this.pos)),
          (this.pos += 2),
          (this.compress = this.buffer.readUInt32LE(this.pos)),
          (this.pos += 4),
          (this.rawSize = this.buffer.readUInt32LE(this.pos)),
          (this.pos += 4),
          (this.hr = this.buffer.readUInt32LE(this.pos)),
          (this.pos += 4),
          (this.vr = this.buffer.readUInt32LE(this.pos)),
          (this.pos += 4),
          (this.colors = this.buffer.readUInt32LE(this.pos)),
          (this.pos += 4),
          (this.importantColors = this.buffer.readUInt32LE(this.pos)),
          (this.pos += 4),
          16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15),
          this.bitPP < 15)
        ) {
          var t = 0 === this.colors ? 1 << this.bitPP : this.colors
          this.palette = new Array(t)
          for (var e = 0; e < t; e++) {
            var r = this.buffer.readUInt8(this.pos++),
              n = this.buffer.readUInt8(this.pos++),
              i = this.buffer.readUInt8(this.pos++),
              o = this.buffer.readUInt8(this.pos++)
            this.palette[e] = { red: i, green: n, blue: r, quad: o }
          }
        }
        this.height < 0 && ((this.height *= -1), (this.bottom_up = !1))
      }),
        (r.prototype.parseRGBA = function () {
          var t = 'bit' + this.bitPP,
            r = this.width * this.height * 4
          ;(this.data = new e(r)), this[t]()
        }),
        (r.prototype.bit1 = function () {
          var t = Math.ceil(this.width / 8),
            e = t % 4,
            r = this.height >= 0 ? this.height - 1 : -this.height
          for (r = this.height - 1; r >= 0; r--) {
            for (
              var n = this.bottom_up ? r : this.height - 1 - r, i = 0;
              i < t;
              i++
            )
              for (
                var o = this.buffer.readUInt8(this.pos++),
                  s = n * this.width * 4 + 8 * i * 4,
                  a = 0;
                a < 8 && 8 * i + a < this.width;
                a++
              ) {
                var f = this.palette[(o >> (7 - a)) & 1]
                ;(this.data[s + 4 * a] = 0),
                  (this.data[s + 4 * a + 1] = f.blue),
                  (this.data[s + 4 * a + 2] = f.green),
                  (this.data[s + 4 * a + 3] = f.red)
              }
            0 != e && (this.pos += 4 - e)
          }
        }),
        (r.prototype.bit4 = function () {
          if (2 == this.compress) {
            var t = function (t) {
              var r = this.palette[t]
              ;(this.data[e] = 0),
                (this.data[e + 1] = r.blue),
                (this.data[e + 2] = r.green),
                (this.data[e + 3] = r.red),
                (e += 4)
            }
            this.data.fill(255)
            for (
              var e = 0, r = this.bottom_up ? this.height - 1 : 0, n = !1;
              e < this.data.length;

            ) {
              var i = this.buffer.readUInt8(this.pos++),
                o = this.buffer.readUInt8(this.pos++)
              if (0 == i) {
                if (0 == o) {
                  this.bottom_up ? r-- : r++, (e = r * this.width * 4), (n = !1)
                  continue
                }
                if (1 == o) break
                if (2 == o) {
                  var s = this.buffer.readUInt8(this.pos++),
                    a = this.buffer.readUInt8(this.pos++)
                  this.bottom_up ? (r -= a) : (r += a),
                    (e += a * this.width * 4 + 4 * s)
                } else {
                  for (
                    var f = this.buffer.readUInt8(this.pos++), u = 0;
                    u < o;
                    u++
                  )
                    t.call(this, n ? 15 & f : (240 & f) >> 4),
                      1 & u &&
                        u + 1 < o &&
                        (f = this.buffer.readUInt8(this.pos++)),
                      (n = !n)
                  1 == (((o + 1) >> 1) & 1) && this.pos++
                }
              } else
                for (u = 0; u < i; u++)
                  t.call(this, n ? 15 & o : (240 & o) >> 4), (n = !n)
            }
          } else {
            var c = Math.ceil(this.width / 2),
              h = c % 4
            for (a = this.height - 1; a >= 0; a--) {
              var p = this.bottom_up ? a : this.height - 1 - a
              for (s = 0; s < c; s++) {
                ;(o = this.buffer.readUInt8(this.pos++)),
                  (e = p * this.width * 4 + 2 * s * 4)
                var l = o >> 4,
                  d = 15 & o,
                  m = this.palette[l]
                if (
                  ((this.data[e] = 0),
                  (this.data[e + 1] = m.blue),
                  (this.data[e + 2] = m.green),
                  (this.data[e + 3] = m.red),
                  2 * s + 1 >= this.width)
                )
                  break
                ;(m = this.palette[d]),
                  (this.data[e + 4] = 0),
                  (this.data[e + 4 + 1] = m.blue),
                  (this.data[e + 4 + 2] = m.green),
                  (this.data[e + 4 + 3] = m.red)
              }
              0 != h && (this.pos += 4 - h)
            }
          }
        }),
        (r.prototype.bit8 = function () {
          if (1 == this.compress) {
            var t = function (t) {
              var r = this.palette[t]
              ;(this.data[e] = 0),
                (this.data[e + 1] = r.blue),
                (this.data[e + 2] = r.green),
                (this.data[e + 3] = r.red),
                (e += 4)
            }
            this.data.fill(255)
            for (
              var e = 0, r = this.bottom_up ? this.height - 1 : 0;
              e < this.data.length;

            ) {
              var n = this.buffer.readUInt8(this.pos++),
                i = this.buffer.readUInt8(this.pos++)
              if (0 == n) {
                if (0 == i) {
                  this.bottom_up ? r-- : r++, (e = r * this.width * 4)
                  continue
                }
                if (1 == i) break
                if (2 == i) {
                  var o = this.buffer.readUInt8(this.pos++),
                    s = this.buffer.readUInt8(this.pos++)
                  this.bottom_up ? (r -= s) : (r += s),
                    (e += s * this.width * 4 + 4 * o)
                } else {
                  for (var a = 0; a < i; a++) {
                    var f = this.buffer.readUInt8(this.pos++)
                    t.call(this, f)
                  }
                  !0 & i && this.pos++
                }
              } else for (a = 0; a < n; a++) t.call(this, i)
            }
          } else {
            var u = this.width % 4
            for (s = this.height - 1; s >= 0; s--) {
              var c = this.bottom_up ? s : this.height - 1 - s
              for (o = 0; o < this.width; o++) {
                ;(i = this.buffer.readUInt8(this.pos++)),
                  (e = c * this.width * 4 + 4 * o)
                if (i < this.palette.length) {
                  var h = this.palette[i]
                  ;(this.data[e] = 0),
                    (this.data[e + 1] = h.blue),
                    (this.data[e + 2] = h.green),
                    (this.data[e + 3] = h.red)
                } else
                  (this.data[e] = 0),
                    (this.data[e + 1] = 255),
                    (this.data[e + 2] = 255),
                    (this.data[e + 3] = 255)
              }
              0 != u && (this.pos += 4 - u)
            }
          }
        }),
        (r.prototype.bit15 = function () {
          for (
            var t = this.width % 3,
              e = parseInt('11111', 2),
              r = this.height - 1;
            r >= 0;
            r--
          ) {
            for (
              var n = this.bottom_up ? r : this.height - 1 - r, i = 0;
              i < this.width;
              i++
            ) {
              var o = this.buffer.readUInt16LE(this.pos)
              this.pos += 2
              var s = (((o & e) / e) * 255) | 0,
                a = ((((o >> 5) & e) / e) * 255) | 0,
                f = ((((o >> 10) & e) / e) * 255) | 0,
                u = o >> 15 ? 255 : 0,
                c = n * this.width * 4 + 4 * i
              ;(this.data[c] = u),
                (this.data[c + 1] = s),
                (this.data[c + 2] = a),
                (this.data[c + 3] = f)
            }
            this.pos += t
          }
        }),
        (r.prototype.bit16 = function () {
          var t = (this.width % 2) * 2
          ;(this.maskRed = 31744),
            (this.maskGreen = 992),
            (this.maskBlue = 31),
            (this.mask0 = 0),
            3 == this.compress &&
              ((this.maskRed = this.buffer.readUInt32LE(this.pos)),
              (this.pos += 4),
              (this.maskGreen = this.buffer.readUInt32LE(this.pos)),
              (this.pos += 4),
              (this.maskBlue = this.buffer.readUInt32LE(this.pos)),
              (this.pos += 4),
              (this.mask0 = this.buffer.readUInt32LE(this.pos)),
              (this.pos += 4))
          for (var e = [0, 0, 0], r = 0; r < 16; r++)
            (this.maskRed >> r) & 1 && e[0]++,
              (this.maskGreen >> r) & 1 && e[1]++,
              (this.maskBlue >> r) & 1 && e[2]++
          ;(e[1] += e[0]),
            (e[2] += e[1]),
            (e[0] = 8 - e[0]),
            (e[1] -= 8),
            (e[2] -= 8)
          for (var n = this.height - 1; n >= 0; n--) {
            for (
              var i = this.bottom_up ? n : this.height - 1 - n, o = 0;
              o < this.width;
              o++
            ) {
              var s = this.buffer.readUInt16LE(this.pos)
              this.pos += 2
              var a = (s & this.maskBlue) << e[0],
                f = (s & this.maskGreen) >> e[1],
                u = (s & this.maskRed) >> e[2],
                c = i * this.width * 4 + 4 * o
              ;(this.data[c] = 0),
                (this.data[c + 1] = a),
                (this.data[c + 2] = f),
                (this.data[c + 3] = u)
            }
            this.pos += t
          }
        }),
        (r.prototype.bit24 = function () {
          for (var t = this.height - 1; t >= 0; t--) {
            for (
              var e = this.bottom_up ? t : this.height - 1 - t, r = 0;
              r < this.width;
              r++
            ) {
              var n = this.buffer.readUInt8(this.pos++),
                i = this.buffer.readUInt8(this.pos++),
                o = this.buffer.readUInt8(this.pos++),
                s = e * this.width * 4 + 4 * r
              ;(this.data[s] = 0),
                (this.data[s + 1] = n),
                (this.data[s + 2] = i),
                (this.data[s + 3] = o)
            }
            this.pos += this.width % 4
          }
        }),
        (r.prototype.bit32 = function () {
          if (3 == this.compress) {
            ;(this.maskRed = this.buffer.readUInt32LE(this.pos)),
              (this.pos += 4),
              (this.maskGreen = this.buffer.readUInt32LE(this.pos)),
              (this.pos += 4),
              (this.maskBlue = this.buffer.readUInt32LE(this.pos)),
              (this.pos += 4),
              (this.mask0 = this.buffer.readUInt32LE(this.pos)),
              (this.pos += 4)
            for (var t = this.height - 1; t >= 0; t--)
              for (
                var e = this.bottom_up ? t : this.height - 1 - t, r = 0;
                r < this.width;
                r++
              ) {
                var n = this.buffer.readUInt8(this.pos++),
                  i = this.buffer.readUInt8(this.pos++),
                  o = this.buffer.readUInt8(this.pos++),
                  s = this.buffer.readUInt8(this.pos++),
                  a = e * this.width * 4 + 4 * r
                ;(this.data[a] = n),
                  (this.data[a + 1] = i),
                  (this.data[a + 2] = o),
                  (this.data[a + 3] = s)
              }
          } else
            for (t = this.height - 1; t >= 0; t--)
              for (
                e = this.bottom_up ? t : this.height - 1 - t, r = 0;
                r < this.width;
                r++
              ) {
                ;(i = this.buffer.readUInt8(this.pos++)),
                  (o = this.buffer.readUInt8(this.pos++)),
                  (s = this.buffer.readUInt8(this.pos++)),
                  (n = this.buffer.readUInt8(this.pos++)),
                  (a = e * this.width * 4 + 4 * r)
                ;(this.data[a] = n),
                  (this.data[a + 1] = i),
                  (this.data[a + 2] = o),
                  (this.data[a + 3] = s)
              }
        }),
        (r.prototype.getData = function () {
          return this.data
        }),
        (t.exports = function (t) {
          return new r(t)
        })
    }.call(this, r(1).Buffer))
  },
  function (t, e, r) {
    var n = r(46)
    t.exports = {
      tessedit_pageseg_mode: n.SINGLE_BLOCK,
      tessedit_char_whitelist: '',
      tessjs_create_hocr: '1',
      tessjs_create_tsv: '1',
      tessjs_create_box: '0',
      tessjs_create_unlv: '0',
      tessjs_create_osd: '0',
    }
  },
  function (t, e) {
    t.exports = {
      OSD_ONLY: '0',
      AUTO_OSD: '1',
      AUTO_ONLY: '2',
      AUTO: '3',
      SINGLE_COLUMN: '4',
      SINGLE_BLOCK_VERT_TEXT: '5',
      SINGLE_BLOCK: '6',
      SINGLE_LINE: '7',
      SINGLE_WORD: '8',
      CIRCLE_WORD: '9',
      SINGLE_CHAR: '10',
      SPARSE_TEXT: '11',
      SPARSE_TEXT_OSD: '12',
    }
  },
  function (t, e) {
    var r = this,
      n = !1
    ;(e.logging = n),
      (e.setLogging = function (t) {
        n = t
      }),
      (e.log = function () {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
          e[i] = arguments[i]
        return n ? console.log.apply(r, e) : null
      })
  },
  function (t, e, r) {
    ;(function (e) {
      function r(t) {
        return (r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              })(t)
      }
      t.exports = function (t, n) {
        if (void 0 === e.TesseractCore) {
          if (
            (n.progress({ status: 'loading tesseract core', progress: 0 }),
            e.importScripts(t),
            void 0 !== e.TesseractCoreWASM &&
              'object' ===
                ('undefined' == typeof WebAssembly
                  ? 'undefined'
                  : r(WebAssembly)))
          )
            e.TesseractCore = e.TesseractCoreWASM
          else {
            if (void 0 === e.TesseractCoreASM)
              throw Error('Failed to load TesseractCore')
            e.TesseractCore = e.TesseractCoreASM
          }
          n.progress({ status: 'loading tesseract core', progress: 1 })
        }
        return e.TesseractCore
      }
    }.call(this, r(2)))
  },
  function (t, e, r) {
    t.exports = r(50).gunzipSync
  },
  function (t, e, r) {
    ;(function (t, r) {
      /** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */
      ;(function () {
        'use strict'
        function n(t) {
          throw t
        }
        var i = void 0,
          o = !0,
          s =
            'undefined' != typeof Uint8Array &&
            'undefined' != typeof Uint16Array &&
            'undefined' != typeof Uint32Array &&
            'undefined' != typeof DataView
        function a(t, e) {
          ;(this.index = 'number' == typeof e ? e : 0),
            (this.m = 0),
            (this.buffer =
              t instanceof (s ? Uint8Array : Array)
                ? t
                : new (s ? Uint8Array : Array)(32768)),
            2 * this.buffer.length <= this.index && n(Error('invalid index')),
            this.buffer.length <= this.index && this.f()
        }
        ;(a.prototype.f = function () {
          var t,
            e = this.buffer,
            r = e.length,
            n = new (s ? Uint8Array : Array)(r << 1)
          if (s) n.set(e)
          else for (t = 0; t < r; ++t) n[t] = e[t]
          return (this.buffer = n)
        }),
          (a.prototype.d = function (t, e, r) {
            var n,
              i = this.buffer,
              o = this.index,
              s = this.m,
              a = i[o]
            if (
              (r &&
                1 < e &&
                (t =
                  8 < e
                    ? ((l[255 & t] << 24) |
                        (l[(t >>> 8) & 255] << 16) |
                        (l[(t >>> 16) & 255] << 8) |
                        l[(t >>> 24) & 255]) >>
                      (32 - e)
                    : l[t] >> (8 - e)),
              8 > e + s)
            )
              (a = (a << e) | t), (s += e)
            else
              for (n = 0; n < e; ++n)
                (a = (a << 1) | ((t >> (e - n - 1)) & 1)),
                  8 == ++s &&
                    ((s = 0),
                    (i[o++] = l[a]),
                    (a = 0),
                    o === i.length && (i = this.f()))
            ;(i[o] = a), (this.buffer = i), (this.m = s), (this.index = o)
          }),
          (a.prototype.finish = function () {
            var t,
              e = this.buffer,
              r = this.index
            return (
              0 < this.m && ((e[r] <<= 8 - this.m), (e[r] = l[e[r]]), r++),
              s ? (t = e.subarray(0, r)) : ((e.length = r), (t = e)),
              t
            )
          })
        var f,
          u = new (s ? Uint8Array : Array)(256)
        for (f = 0; 256 > f; ++f) {
          for (var c = (p = f), h = 7, p = p >>> 1; p; p >>>= 1)
            (c <<= 1), (c |= 1 & p), --h
          u[f] = ((c << h) & 255) >>> 0
        }
        var l = u
        function d(t, e, r) {
          var n,
            i = 'number' == typeof e ? e : (e = 0),
            o = 'number' == typeof r ? r : t.length
          for (n = -1, i = 7 & o; i--; ++e) n = (n >>> 8) ^ g[255 & (n ^ t[e])]
          for (i = o >> 3; i--; e += 8)
            n =
              ((n =
                ((n =
                  ((n =
                    ((n =
                      ((n =
                        ((n =
                          ((n = (n >>> 8) ^ g[255 & (n ^ t[e])]) >>> 8) ^
                          g[255 & (n ^ t[e + 1])]) >>>
                          8) ^
                        g[255 & (n ^ t[e + 2])]) >>>
                        8) ^
                      g[255 & (n ^ t[e + 3])]) >>>
                      8) ^
                    g[255 & (n ^ t[e + 4])]) >>>
                    8) ^
                  g[255 & (n ^ t[e + 5])]) >>>
                  8) ^
                g[255 & (n ^ t[e + 6])]) >>>
                8) ^
              g[255 & (n ^ t[e + 7])]
          return (4294967295 ^ n) >>> 0
        }
        var m = [
            0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615,
            3915621685, 2657392035, 249268274, 2044508324, 3772115230,
            2547177864, 162941995, 2125561021, 3887607047, 2428444049,
            498536548, 1789927666, 4089016648, 2227061214, 450548861,
            1843258603, 4107580753, 2211677639, 325883990, 1684777152,
            4251122042, 2321926636, 335633487, 1661365465, 4195302755,
            2366115317, 997073096, 1281953886, 3579855332, 2724688242,
            1006888145, 1258607687, 3524101629, 2768942443, 901097722,
            1119000684, 3686517206, 2898065728, 853044451, 1172266101,
            3705015759, 2882616665, 651767980, 1373503546, 3369554304,
            3218104598, 565507253, 1454621731, 3485111705, 3099436303,
            671266974, 1594198024, 3322730930, 2970347812, 795835527,
            1483230225, 3244367275, 3060149565, 1994146192, 31158534,
            2563907772, 4023717930, 1907459465, 112637215, 2680153253,
            3904427059, 2013776290, 251722036, 2517215374, 3775830040,
            2137656763, 141376813, 2439277719, 3865271297, 1802195444,
            476864866, 2238001368, 4066508878, 1812370925, 453092731,
            2181625025, 4111451223, 1706088902, 314042704, 2344532202,
            4240017532, 1658658271, 366619977, 2362670323, 4224994405,
            1303535960, 984961486, 2747007092, 3569037538, 1256170817,
            1037604311, 2765210733, 3554079995, 1131014506, 879679996,
            2909243462, 3663771856, 1141124467, 855842277, 2852801631,
            3708648649, 1342533948, 654459306, 3188396048, 3373015174,
            1466479909, 544179635, 3110523913, 3462522015, 1591671054,
            702138776, 2966460450, 3352799412, 1504918807, 783551873,
            3082640443, 3233442989, 3988292384, 2596254646, 62317068,
            1957810842, 3939845945, 2647816111, 81470997, 1943803523,
            3814918930, 2489596804, 225274430, 2053790376, 3826175755,
            2466906013, 167816743, 2097651377, 4027552580, 2265490386,
            503444072, 1762050814, 4150417245, 2154129355, 426522225,
            1852507879, 4275313526, 2312317920, 282753626, 1742555852,
            4189708143, 2394877945, 397917763, 1622183637, 3604390888,
            2714866558, 953729732, 1340076626, 3518719985, 2797360999,
            1068828381, 1219638859, 3624741850, 2936675148, 906185462,
            1090812512, 3747672003, 2825379669, 829329135, 1181335161,
            3412177804, 3160834842, 628085408, 1382605366, 3423369109,
            3138078467, 570562233, 1426400815, 3317316542, 2998733608,
            733239954, 1555261956, 3268935591, 3050360625, 752459403,
            1541320221, 2607071920, 3965973030, 1969922972, 40735498,
            2617837225, 3943577151, 1913087877, 83908371, 2512341634,
            3803740692, 2075208622, 213261112, 2463272603, 3855990285,
            2094854071, 198958881, 2262029012, 4057260610, 1759359992,
            534414190, 2176718541, 4139329115, 1873836001, 414664567,
            2282248934, 4279200368, 1711684554, 285281116, 2405801727,
            4167216745, 1634467795, 376229701, 2685067896, 3608007406,
            1308918612, 956543938, 2808555105, 3495958263, 1231636301,
            1047427035, 2932959818, 3654703836, 1088359270, 936918e3,
            2847714899, 3736837829, 1202900863, 817233897, 3183342108,
            3401237130, 1404277552, 615818150, 3134207493, 3453421203,
            1423857449, 601450431, 3009837614, 3294710456, 1567103746,
            711928724, 3020668471, 3272380065, 1510334235, 755167117,
          ],
          g = s ? new Uint32Array(m) : m
        function y() {}
        function b(t) {
          ;(this.buffer = new (s ? Uint16Array : Array)(2 * t)),
            (this.length = 0)
        }
        function v(t) {
          var e,
            r,
            n,
            i,
            o,
            a,
            f,
            u,
            c,
            h,
            p = t.length,
            l = 0,
            d = Number.POSITIVE_INFINITY
          for (u = 0; u < p; ++u) t[u] > l && (l = t[u]), t[u] < d && (d = t[u])
          for (
            e = 1 << l,
              r = new (s ? Uint32Array : Array)(e),
              n = 1,
              i = 0,
              o = 2;
            n <= l;

          ) {
            for (u = 0; u < p; ++u)
              if (t[u] === n) {
                for (a = 0, f = i, c = 0; c < n; ++c)
                  (a = (a << 1) | (1 & f)), (f >>= 1)
                for (h = (n << 16) | u, c = a; c < e; c += o) r[c] = h
                ++i
              }
            ++n, (i <<= 1), (o <<= 1)
          }
          return [r, l, d]
        }
        function w(t, e) {
          ;(this.k = A),
            (this.F = 0),
            (this.input = s && t instanceof Array ? new Uint8Array(t) : t),
            (this.b = 0),
            e &&
              (e.lazy && (this.F = e.lazy),
              'number' == typeof e.compressionType &&
                (this.k = e.compressionType),
              e.outputBuffer &&
                (this.a =
                  s && e.outputBuffer instanceof Array
                    ? new Uint8Array(e.outputBuffer)
                    : e.outputBuffer),
              'number' == typeof e.outputIndex && (this.b = e.outputIndex)),
            this.a || (this.a = new (s ? Uint8Array : Array)(32768))
        }
        ;(b.prototype.getParent = function (t) {
          return 2 * (((t - 2) / 4) | 0)
        }),
          (b.prototype.push = function (t, e) {
            var r,
              n,
              i,
              o = this.buffer
            for (
              r = this.length, o[this.length++] = e, o[this.length++] = t;
              0 < r && ((n = this.getParent(r)), o[r] > o[n]);

            )
              (i = o[r]),
                (o[r] = o[n]),
                (o[n] = i),
                (i = o[r + 1]),
                (o[r + 1] = o[n + 1]),
                (o[n + 1] = i),
                (r = n)
            return this.length
          }),
          (b.prototype.pop = function () {
            var t,
              e,
              r,
              n,
              i,
              o = this.buffer
            for (
              e = o[0],
                t = o[1],
                this.length -= 2,
                o[0] = o[this.length],
                o[1] = o[this.length + 1],
                i = 0;
              !((n = 2 * i + 2) >= this.length) &&
              (n + 2 < this.length && o[n + 2] > o[n] && (n += 2), o[n] > o[i]);

            )
              (r = o[i]),
                (o[i] = o[n]),
                (o[n] = r),
                (r = o[i + 1]),
                (o[i + 1] = o[n + 1]),
                (o[n + 1] = r),
                (i = n)
            return { index: t, value: e, length: this.length }
          })
        var x,
          A = 2,
          E = { NONE: 0, L: 1, t: A, X: 3 },
          _ = []
        for (x = 0; 288 > x; x++)
          switch (o) {
            case 143 >= x:
              _.push([x + 48, 8])
              break
            case 255 >= x:
              _.push([x - 144 + 400, 9])
              break
            case 279 >= x:
              _.push([x - 256 + 0, 7])
              break
            case 287 >= x:
              _.push([x - 280 + 192, 8])
              break
            default:
              n('invalid literal: ' + x)
          }
        function S(t, e) {
          ;(this.length = t), (this.N = e)
        }
        w.prototype.h = function () {
          var t,
            e,
            r,
            f,
            u = this.input
          switch (this.k) {
            case 0:
              for (r = 0, f = u.length; r < f; ) {
                var c,
                  h,
                  p,
                  l = (e = s
                    ? u.subarray(r, r + 65535)
                    : u.slice(r, r + 65535)),
                  d = (r += e.length) === f,
                  m = i,
                  g = i,
                  y = this.a,
                  b = this.b
                if (s) {
                  for (
                    y = new Uint8Array(this.a.buffer);
                    y.length <= b + l.length + 5;

                  )
                    y = new Uint8Array(y.length << 1)
                  y.set(this.a)
                }
                if (
                  ((c = d ? 1 : 0),
                  (y[b++] = 0 | c),
                  (p = (65536 + ~(h = l.length)) & 65535),
                  (y[b++] = 255 & h),
                  (y[b++] = (h >>> 8) & 255),
                  (y[b++] = 255 & p),
                  (y[b++] = (p >>> 8) & 255),
                  s)
                )
                  y.set(l, b), (b += l.length), (y = y.subarray(0, b))
                else {
                  for (m = 0, g = l.length; m < g; ++m) y[b++] = l[m]
                  y.length = b
                }
                ;(this.b = b), (this.a = y)
              }
              break
            case 1:
              var v = new a(s ? new Uint8Array(this.a.buffer) : this.a, this.b)
              v.d(1, 1, o), v.d(1, 2, o)
              var w,
                x,
                E,
                S = T(this, u)
              for (w = 0, x = S.length; w < x; w++)
                if (((E = S[w]), a.prototype.d.apply(v, _[E]), 256 < E))
                  v.d(S[++w], S[++w], o), v.d(S[++w], 5), v.d(S[++w], S[++w], o)
                else if (256 === E) break
              ;(this.a = v.finish()), (this.b = this.a.length)
              break
            case A:
              var U,
                k,
                I,
                B,
                j,
                L,
                R,
                C,
                z,
                D,
                N,
                M,
                F,
                Y,
                q,
                G = new a(s ? new Uint8Array(this.a.buffer) : this.a, this.b),
                H = [
                  16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                  15,
                ],
                V = Array(19)
              for (
                U = A,
                  G.d(1, 1, o),
                  G.d(U, 2, o),
                  k = T(this, u),
                  R = P((L = O(this.U, 15))),
                  z = P((C = O(this.T, 7))),
                  I = 286;
                257 < I && 0 === L[I - 1];
                I--
              );
              for (B = 30; 1 < B && 0 === C[B - 1]; B--);
              var W,
                K,
                X,
                J,
                Z,
                $,
                Q = I,
                tt = B,
                et = new (s ? Uint32Array : Array)(Q + tt),
                rt = new (s ? Uint32Array : Array)(316),
                nt = new (s ? Uint8Array : Array)(19)
              for (W = K = 0; W < Q; W++) et[K++] = L[W]
              for (W = 0; W < tt; W++) et[K++] = C[W]
              if (!s) for (W = 0, J = nt.length; W < J; ++W) nt[W] = 0
              for (W = Z = 0, J = et.length; W < J; W += K) {
                for (K = 1; W + K < J && et[W + K] === et[W]; ++K);
                if (((X = K), 0 === et[W]))
                  if (3 > X) for (; 0 < X--; ) (rt[Z++] = 0), nt[0]++
                  else
                    for (; 0 < X; )
                      ($ = 138 > X ? X : 138) > X - 3 && $ < X && ($ = X - 3),
                        10 >= $
                          ? ((rt[Z++] = 17), (rt[Z++] = $ - 3), nt[17]++)
                          : ((rt[Z++] = 18), (rt[Z++] = $ - 11), nt[18]++),
                        (X -= $)
                else if (((rt[Z++] = et[W]), nt[et[W]]++, 3 > --X))
                  for (; 0 < X--; ) (rt[Z++] = et[W]), nt[et[W]]++
                else
                  for (; 0 < X; )
                    ($ = 6 > X ? X : 6) > X - 3 && $ < X && ($ = X - 3),
                      (rt[Z++] = 16),
                      (rt[Z++] = $ - 3),
                      nt[16]++,
                      (X -= $)
              }
              for (
                t = s ? rt.subarray(0, Z) : rt.slice(0, Z), D = O(nt, 7), Y = 0;
                19 > Y;
                Y++
              )
                V[Y] = D[H[Y]]
              for (j = 19; 4 < j && 0 === V[j - 1]; j--);
              for (
                N = P(D),
                  G.d(I - 257, 5, o),
                  G.d(B - 1, 5, o),
                  G.d(j - 4, 4, o),
                  Y = 0;
                Y < j;
                Y++
              )
                G.d(V[Y], 3, o)
              for (Y = 0, q = t.length; Y < q; Y++)
                if (((M = t[Y]), G.d(N[M], D[M], o), 16 <= M)) {
                  switch ((Y++, M)) {
                    case 16:
                      F = 2
                      break
                    case 17:
                      F = 3
                      break
                    case 18:
                      F = 7
                      break
                    default:
                      n('invalid code: ' + M)
                  }
                  G.d(t[Y], F, o)
                }
              var it,
                ot,
                st,
                at,
                ft,
                ut,
                ct,
                ht,
                pt = [R, L],
                lt = [z, C]
              for (
                ft = pt[0],
                  ut = pt[1],
                  ct = lt[0],
                  ht = lt[1],
                  it = 0,
                  ot = k.length;
                it < ot;
                ++it
              )
                if (((st = k[it]), G.d(ft[st], ut[st], o), 256 < st))
                  G.d(k[++it], k[++it], o),
                    (at = k[++it]),
                    G.d(ct[at], ht[at], o),
                    G.d(k[++it], k[++it], o)
                else if (256 === st) break
              ;(this.a = G.finish()), (this.b = this.a.length)
              break
            default:
              n('invalid compression type')
          }
          return this.a
        }
        var U = (function () {
            function t(t) {
              switch (o) {
                case 3 === t:
                  return [257, t - 3, 0]
                case 4 === t:
                  return [258, t - 4, 0]
                case 5 === t:
                  return [259, t - 5, 0]
                case 6 === t:
                  return [260, t - 6, 0]
                case 7 === t:
                  return [261, t - 7, 0]
                case 8 === t:
                  return [262, t - 8, 0]
                case 9 === t:
                  return [263, t - 9, 0]
                case 10 === t:
                  return [264, t - 10, 0]
                case 12 >= t:
                  return [265, t - 11, 1]
                case 14 >= t:
                  return [266, t - 13, 1]
                case 16 >= t:
                  return [267, t - 15, 1]
                case 18 >= t:
                  return [268, t - 17, 1]
                case 22 >= t:
                  return [269, t - 19, 2]
                case 26 >= t:
                  return [270, t - 23, 2]
                case 30 >= t:
                  return [271, t - 27, 2]
                case 34 >= t:
                  return [272, t - 31, 2]
                case 42 >= t:
                  return [273, t - 35, 3]
                case 50 >= t:
                  return [274, t - 43, 3]
                case 58 >= t:
                  return [275, t - 51, 3]
                case 66 >= t:
                  return [276, t - 59, 3]
                case 82 >= t:
                  return [277, t - 67, 4]
                case 98 >= t:
                  return [278, t - 83, 4]
                case 114 >= t:
                  return [279, t - 99, 4]
                case 130 >= t:
                  return [280, t - 115, 4]
                case 162 >= t:
                  return [281, t - 131, 5]
                case 194 >= t:
                  return [282, t - 163, 5]
                case 226 >= t:
                  return [283, t - 195, 5]
                case 257 >= t:
                  return [284, t - 227, 5]
                case 258 === t:
                  return [285, t - 258, 0]
                default:
                  n('invalid length: ' + t)
              }
            }
            var e,
              r,
              i = []
            for (e = 3; 258 >= e; e++)
              (r = t(e)), (i[e] = (r[2] << 24) | (r[1] << 16) | r[0])
            return i
          })(),
          k = s ? new Uint32Array(U) : U
        function T(t, e) {
          function r(t, e) {
            var r,
              i,
              s,
              a,
              f = t.N,
              u = [],
              c = 0
            switch (
              ((r = k[t.length]),
              (u[c++] = 65535 & r),
              (u[c++] = (r >> 16) & 255),
              (u[c++] = r >> 24),
              o)
            ) {
              case 1 === f:
                i = [0, f - 1, 0]
                break
              case 2 === f:
                i = [1, f - 2, 0]
                break
              case 3 === f:
                i = [2, f - 3, 0]
                break
              case 4 === f:
                i = [3, f - 4, 0]
                break
              case 6 >= f:
                i = [4, f - 5, 1]
                break
              case 8 >= f:
                i = [5, f - 7, 1]
                break
              case 12 >= f:
                i = [6, f - 9, 2]
                break
              case 16 >= f:
                i = [7, f - 13, 2]
                break
              case 24 >= f:
                i = [8, f - 17, 3]
                break
              case 32 >= f:
                i = [9, f - 25, 3]
                break
              case 48 >= f:
                i = [10, f - 33, 4]
                break
              case 64 >= f:
                i = [11, f - 49, 4]
                break
              case 96 >= f:
                i = [12, f - 65, 5]
                break
              case 128 >= f:
                i = [13, f - 97, 5]
                break
              case 192 >= f:
                i = [14, f - 129, 6]
                break
              case 256 >= f:
                i = [15, f - 193, 6]
                break
              case 384 >= f:
                i = [16, f - 257, 7]
                break
              case 512 >= f:
                i = [17, f - 385, 7]
                break
              case 768 >= f:
                i = [18, f - 513, 8]
                break
              case 1024 >= f:
                i = [19, f - 769, 8]
                break
              case 1536 >= f:
                i = [20, f - 1025, 9]
                break
              case 2048 >= f:
                i = [21, f - 1537, 9]
                break
              case 3072 >= f:
                i = [22, f - 2049, 10]
                break
              case 4096 >= f:
                i = [23, f - 3073, 10]
                break
              case 6144 >= f:
                i = [24, f - 4097, 11]
                break
              case 8192 >= f:
                i = [25, f - 6145, 11]
                break
              case 12288 >= f:
                i = [26, f - 8193, 12]
                break
              case 16384 >= f:
                i = [27, f - 12289, 12]
                break
              case 24576 >= f:
                i = [28, f - 16385, 13]
                break
              case 32768 >= f:
                i = [29, f - 24577, 13]
                break
              default:
                n('invalid distance')
            }
            for (
              r = i,
                u[c++] = r[0],
                u[c++] = r[1],
                u[c++] = r[2],
                s = 0,
                a = u.length;
              s < a;
              ++s
            )
              y[b++] = u[s]
            w[u[0]]++, x[u[3]]++, (v = t.length + e - 1), (d = null)
          }
          var a,
            f,
            u,
            c,
            h,
            p,
            l,
            d,
            m,
            g = {},
            y = s ? new Uint16Array(2 * e.length) : [],
            b = 0,
            v = 0,
            w = new (s ? Uint32Array : Array)(286),
            x = new (s ? Uint32Array : Array)(30),
            A = t.F
          if (!s) {
            for (u = 0; 285 >= u; ) w[u++] = 0
            for (u = 0; 29 >= u; ) x[u++] = 0
          }
          for (w[256] = 1, a = 0, f = e.length; a < f; ++a) {
            for (u = h = 0, c = 3; u < c && a + u !== f; ++u)
              h = (h << 8) | e[a + u]
            if ((g[h] === i && (g[h] = []), (p = g[h]), !(0 < v--))) {
              for (; 0 < p.length && 32768 < a - p[0]; ) p.shift()
              if (a + 3 >= f) {
                for (d && r(d, -1), u = 0, c = f - a; u < c; ++u)
                  (m = e[a + u]), (y[b++] = m), ++w[m]
                break
              }
              0 < p.length
                ? ((l = I(e, a, p)),
                  d
                    ? d.length < l.length
                      ? ((m = e[a - 1]), (y[b++] = m), ++w[m], r(l, 0))
                      : r(d, -1)
                    : l.length < A
                    ? (d = l)
                    : r(l, 0))
                : d
                ? r(d, -1)
                : ((m = e[a]), (y[b++] = m), ++w[m])
            }
            p.push(a)
          }
          return (
            (y[b++] = 256),
            w[256]++,
            (t.U = w),
            (t.T = x),
            s ? y.subarray(0, b) : y
          )
        }
        function I(t, e, r) {
          var n,
            i,
            o,
            s,
            a,
            f,
            u = 0,
            c = t.length
          ;(s = 0), (f = r.length)
          t: for (; s < f; s++) {
            if (((n = r[f - s - 1]), (o = 3), 3 < u)) {
              for (a = u; 3 < a; a--)
                if (t[n + a - 1] !== t[e + a - 1]) continue t
              o = u
            }
            for (; 258 > o && e + o < c && t[n + o] === t[e + o]; ) ++o
            if ((o > u && ((i = n), (u = o)), 258 === o)) break
          }
          return new S(u, e - i)
        }
        function O(t, e) {
          var r,
            n,
            i,
            o,
            a,
            f = t.length,
            u = new b(572),
            c = new (s ? Uint8Array : Array)(f)
          if (!s) for (o = 0; o < f; o++) c[o] = 0
          for (o = 0; o < f; ++o) 0 < t[o] && u.push(o, t[o])
          if (
            ((r = Array(u.length / 2)),
            (n = new (s ? Uint32Array : Array)(u.length / 2)),
            1 === r.length)
          )
            return (c[u.pop().index] = 1), c
          for (o = 0, a = u.length / 2; o < a; ++o)
            (r[o] = u.pop()), (n[o] = r[o].value)
          for (
            i = (function (t, e, r) {
              function n(t) {
                var r = d[t][m[t]]
                r === e ? (n(t + 1), n(t + 1)) : --p[r], ++m[t]
              }
              var i,
                o,
                a,
                f,
                u,
                c = new (s ? Uint16Array : Array)(r),
                h = new (s ? Uint8Array : Array)(r),
                p = new (s ? Uint8Array : Array)(e),
                l = Array(r),
                d = Array(r),
                m = Array(r),
                g = (1 << r) - e,
                y = 1 << (r - 1)
              for (c[r - 1] = e, o = 0; o < r; ++o)
                g < y ? (h[o] = 0) : ((h[o] = 1), (g -= y)),
                  (g <<= 1),
                  (c[r - 2 - o] = ((c[r - 1 - o] / 2) | 0) + e)
              for (
                c[0] = h[0], l[0] = Array(c[0]), d[0] = Array(c[0]), o = 1;
                o < r;
                ++o
              )
                c[o] > 2 * c[o - 1] + h[o] && (c[o] = 2 * c[o - 1] + h[o]),
                  (l[o] = Array(c[o])),
                  (d[o] = Array(c[o]))
              for (i = 0; i < e; ++i) p[i] = r
              for (a = 0; a < c[r - 1]; ++a)
                (l[r - 1][a] = t[a]), (d[r - 1][a] = a)
              for (i = 0; i < r; ++i) m[i] = 0
              for (
                1 === h[r - 1] && (--p[0], ++m[r - 1]), o = r - 2;
                0 <= o;
                --o
              ) {
                for (f = i = 0, u = m[o + 1], a = 0; a < c[o]; a++)
                  (f = l[o + 1][u] + l[o + 1][u + 1]) > t[i]
                    ? ((l[o][a] = f), (d[o][a] = e), (u += 2))
                    : ((l[o][a] = t[i]), (d[o][a] = i), ++i)
                ;(m[o] = 0), 1 === h[o] && n(o)
              }
              return p
            })(n, n.length, e),
              o = 0,
              a = r.length;
            o < a;
            ++o
          )
            c[r[o].index] = i[o]
          return c
        }
        function P(t) {
          var e,
            r,
            n,
            i,
            o = new (s ? Uint16Array : Array)(t.length),
            a = [],
            f = [],
            u = 0
          for (e = 0, r = t.length; e < r; e++) a[t[e]] = 1 + (0 | a[t[e]])
          for (e = 1, r = 16; e <= r; e++)
            (f[e] = u), (u += 0 | a[e]), (u <<= 1)
          for (e = 0, r = t.length; e < r; e++)
            for (u = f[t[e]], f[t[e]] += 1, n = o[e] = 0, i = t[e]; n < i; n++)
              (o[e] = (o[e] << 1) | (1 & u)), (u >>>= 1)
          return o
        }
        function B(t, e) {
          ;(this.input = t),
            (this.b = this.c = 0),
            (this.g = {}),
            e &&
              (e.flags && (this.g = e.flags),
              'string' == typeof e.filename && (this.filename = e.filename),
              'string' == typeof e.comment && (this.w = e.comment),
              e.deflateOptions && (this.l = e.deflateOptions)),
            this.l || (this.l = {})
        }
        B.prototype.h = function () {
          var t,
            e,
            r,
            n,
            o,
            a,
            f,
            u,
            c = new (s ? Uint8Array : Array)(32768),
            h = 0,
            p = this.input,
            l = this.c,
            m = this.filename,
            g = this.w
          if (
            ((c[h++] = 31),
            (c[h++] = 139),
            (c[h++] = 8),
            (t = 0),
            this.g.fname && (t |= R),
            this.g.fcomment && (t |= C),
            this.g.fhcrc && (t |= L),
            (c[h++] = t),
            (e = ((Date.now ? Date.now() : +new Date()) / 1e3) | 0),
            (c[h++] = 255 & e),
            (c[h++] = (e >>> 8) & 255),
            (c[h++] = (e >>> 16) & 255),
            (c[h++] = (e >>> 24) & 255),
            (c[h++] = 0),
            (c[h++] = j),
            this.g.fname !== i)
          ) {
            for (f = 0, u = m.length; f < u; ++f)
              255 < (a = m.charCodeAt(f)) && (c[h++] = (a >>> 8) & 255),
                (c[h++] = 255 & a)
            c[h++] = 0
          }
          if (this.g.comment) {
            for (f = 0, u = g.length; f < u; ++f)
              255 < (a = g.charCodeAt(f)) && (c[h++] = (a >>> 8) & 255),
                (c[h++] = 255 & a)
            c[h++] = 0
          }
          return (
            this.g.fhcrc &&
              ((r = 65535 & d(c, 0, h)),
              (c[h++] = 255 & r),
              (c[h++] = (r >>> 8) & 255)),
            (this.l.outputBuffer = c),
            (this.l.outputIndex = h),
            (c = (o = new w(p, this.l)).h()),
            (h = o.b),
            s &&
              (h + 8 > c.buffer.byteLength
                ? ((this.a = new Uint8Array(h + 8)),
                  this.a.set(new Uint8Array(c.buffer)),
                  (c = this.a))
                : (c = new Uint8Array(c.buffer))),
            (n = d(p, i, i)),
            (c[h++] = 255 & n),
            (c[h++] = (n >>> 8) & 255),
            (c[h++] = (n >>> 16) & 255),
            (c[h++] = (n >>> 24) & 255),
            (u = p.length),
            (c[h++] = 255 & u),
            (c[h++] = (u >>> 8) & 255),
            (c[h++] = (u >>> 16) & 255),
            (c[h++] = (u >>> 24) & 255),
            (this.c = l),
            s && h < c.length && (this.a = c = c.subarray(0, h)),
            c
          )
        }
        var j = 255,
          L = 2,
          R = 8,
          C = 16
        function z(t, e) {
          switch (
            ((this.o = []),
            (this.p = 32768),
            (this.e = this.j = this.c = this.s = 0),
            (this.input = s ? new Uint8Array(t) : t),
            (this.u = !1),
            (this.q = N),
            (this.K = !1),
            (!e && (e = {})) ||
              (e.index && (this.c = e.index),
              e.bufferSize && (this.p = e.bufferSize),
              e.bufferType && (this.q = e.bufferType),
              e.resize && (this.K = e.resize)),
            this.q)
          ) {
            case D:
              ;(this.b = 32768),
                (this.a = new (s ? Uint8Array : Array)(32768 + this.p + 258))
              break
            case N:
              ;(this.b = 0),
                (this.a = new (s ? Uint8Array : Array)(this.p)),
                (this.f = this.S),
                (this.z = this.O),
                (this.r = this.Q)
              break
            default:
              n(Error('invalid inflate mode'))
          }
        }
        var D = 0,
          N = 1
        z.prototype.i = function () {
          for (; !this.u; ) {
            var t = it(this, 3)
            switch ((1 & t && (this.u = o), (t >>>= 1))) {
              case 0:
                var e = this.input,
                  r = this.c,
                  a = this.a,
                  f = this.b,
                  u = e.length,
                  c = i,
                  h = a.length,
                  p = i
                switch (
                  ((this.e = this.j = 0),
                  r + 1 >= u &&
                    n(Error('invalid uncompressed block header: LEN')),
                  (c = e[r++] | (e[r++] << 8)),
                  r + 1 >= u &&
                    n(Error('invalid uncompressed block header: NLEN')),
                  c === ~(e[r++] | (e[r++] << 8)) &&
                    n(
                      Error('invalid uncompressed block header: length verify'),
                    ),
                  r + c > e.length && n(Error('input buffer is broken')),
                  this.q)
                ) {
                  case D:
                    for (; f + c > a.length; ) {
                      if (((c -= p = h - f), s))
                        a.set(e.subarray(r, r + p), f), (f += p), (r += p)
                      else for (; p--; ) a[f++] = e[r++]
                      ;(this.b = f), (a = this.f()), (f = this.b)
                    }
                    break
                  case N:
                    for (; f + c > a.length; ) a = this.f({ B: 2 })
                    break
                  default:
                    n(Error('invalid inflate mode'))
                }
                if (s) a.set(e.subarray(r, r + c), f), (f += c), (r += c)
                else for (; c--; ) a[f++] = e[r++]
                ;(this.c = r), (this.b = f), (this.a = a)
                break
              case 1:
                this.r(et, nt)
                break
              case 2:
                var l,
                  d,
                  m,
                  g,
                  y = it(this, 5) + 257,
                  b = it(this, 5) + 1,
                  w = it(this, 4) + 4,
                  x = new (s ? Uint8Array : Array)(q.length),
                  A = i,
                  E = i,
                  _ = i,
                  S = i,
                  U = i
                for (U = 0; U < w; ++U) x[q[U]] = it(this, 3)
                if (!s) for (U = w, w = x.length; U < w; ++U) x[q[U]] = 0
                for (
                  l = v(x),
                    A = new (s ? Uint8Array : Array)(y + b),
                    U = 0,
                    g = y + b;
                  U < g;

                )
                  switch ((E = ot(this, l))) {
                    case 16:
                      for (S = 3 + it(this, 2); S--; ) A[U++] = _
                      break
                    case 17:
                      for (S = 3 + it(this, 3); S--; ) A[U++] = 0
                      _ = 0
                      break
                    case 18:
                      for (S = 11 + it(this, 7); S--; ) A[U++] = 0
                      _ = 0
                      break
                    default:
                      _ = A[U++] = E
                  }
                ;(d = v(s ? A.subarray(0, y) : A.slice(0, y))),
                  (m = v(s ? A.subarray(y) : A.slice(y))),
                  this.r(d, m)
                break
              default:
                n(Error('unknown BTYPE: ' + t))
            }
          }
          return this.z()
        }
        var M,
          F,
          Y = [
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
          ],
          q = s ? new Uint16Array(Y) : Y,
          G = [
            3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
            59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258,
          ],
          H = s ? new Uint16Array(G) : G,
          V = [
            0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
            4, 5, 5, 5, 5, 0, 0, 0,
          ],
          W = s ? new Uint8Array(V) : V,
          K = [
            1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
            513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
            24577,
          ],
          X = s ? new Uint16Array(K) : K,
          J = [
            0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
            10, 10, 11, 11, 12, 12, 13, 13,
          ],
          Z = s ? new Uint8Array(J) : J,
          $ = new (s ? Uint8Array : Array)(288)
        for (M = 0, F = $.length; M < F; ++M)
          $[M] = 143 >= M ? 8 : 255 >= M ? 9 : 279 >= M ? 7 : 8
        var Q,
          tt,
          et = v($),
          rt = new (s ? Uint8Array : Array)(30)
        for (Q = 0, tt = rt.length; Q < tt; ++Q) rt[Q] = 5
        var nt = v(rt)
        function it(t, e) {
          for (
            var r, i = t.j, o = t.e, s = t.input, a = t.c, f = s.length;
            o < e;

          )
            a >= f && n(Error('input buffer is broken')),
              (i |= s[a++] << o),
              (o += 8)
          return (
            (r = i & ((1 << e) - 1)),
            (t.j = i >>> e),
            (t.e = o - e),
            (t.c = a),
            r
          )
        }
        function ot(t, e) {
          for (
            var r,
              i,
              o = t.j,
              s = t.e,
              a = t.input,
              f = t.c,
              u = a.length,
              c = e[0],
              h = e[1];
            s < h && !(f >= u);

          )
            (o |= a[f++] << s), (s += 8)
          return (
            (i = (r = c[o & ((1 << h) - 1)]) >>> 16) > s &&
              n(Error('invalid code length: ' + i)),
            (t.j = o >> i),
            (t.e = s - i),
            (t.c = f),
            65535 & r
          )
        }
        function st(t) {
          ;(this.input = t), (this.c = 0), (this.G = []), (this.R = !1)
        }
        function at(t) {
          if ('string' == typeof t) {
            var e,
              r,
              n = t.split('')
            for (e = 0, r = n.length; e < r; e++)
              n[e] = (255 & n[e].charCodeAt(0)) >>> 0
            t = n
          }
          for (var i, o = 1, s = 0, a = t.length, f = 0; 0 < a; ) {
            a -= i = 1024 < a ? 1024 : a
            do {
              s += o += t[f++]
            } while (--i)
            ;(o %= 65521), (s %= 65521)
          }
          return ((s << 16) | o) >>> 0
        }
        function ft(t, e) {
          var r, i
          switch (
            ((this.input = t),
            (this.c = 0),
            (!e && (e = {})) ||
              (e.index && (this.c = e.index), e.verify && (this.V = e.verify)),
            (r = t[this.c++]),
            (i = t[this.c++]),
            15 & r)
          ) {
            case ut:
              this.method = ut
              break
            default:
              n(Error('unsupported compression method'))
          }
          0 != ((r << 8) + i) % 31 &&
            n(Error('invalid fcheck flag:' + (((r << 8) + i) % 31))),
            32 & i && n(Error('fdict flag is not supported')),
            (this.J = new z(t, {
              index: this.c,
              bufferSize: e.bufferSize,
              bufferType: e.bufferType,
              resize: e.resize,
            }))
        }
        ;(z.prototype.r = function (t, e) {
          var r = this.a,
            n = this.b
          this.A = t
          for (var i, o, s, a, f = r.length - 258; 256 !== (i = ot(this, t)); )
            if (256 > i)
              n >= f && ((this.b = n), (r = this.f()), (n = this.b)),
                (r[n++] = i)
            else
              for (
                a = H[(o = i - 257)],
                  0 < W[o] && (a += it(this, W[o])),
                  i = ot(this, e),
                  s = X[i],
                  0 < Z[i] && (s += it(this, Z[i])),
                  n >= f && ((this.b = n), (r = this.f()), (n = this.b));
                a--;

              )
                r[n] = r[n++ - s]
          for (; 8 <= this.e; ) (this.e -= 8), this.c--
          this.b = n
        }),
          (z.prototype.Q = function (t, e) {
            var r = this.a,
              n = this.b
            this.A = t
            for (var i, o, s, a, f = r.length; 256 !== (i = ot(this, t)); )
              if (256 > i) n >= f && (f = (r = this.f()).length), (r[n++] = i)
              else
                for (
                  a = H[(o = i - 257)],
                    0 < W[o] && (a += it(this, W[o])),
                    i = ot(this, e),
                    s = X[i],
                    0 < Z[i] && (s += it(this, Z[i])),
                    n + a > f && (f = (r = this.f()).length);
                  a--;

                )
                  r[n] = r[n++ - s]
            for (; 8 <= this.e; ) (this.e -= 8), this.c--
            this.b = n
          }),
          (z.prototype.f = function () {
            var t,
              e,
              r = new (s ? Uint8Array : Array)(this.b - 32768),
              n = this.b - 32768,
              i = this.a
            if (s) r.set(i.subarray(32768, r.length))
            else for (t = 0, e = r.length; t < e; ++t) r[t] = i[t + 32768]
            if ((this.o.push(r), (this.s += r.length), s))
              i.set(i.subarray(n, n + 32768))
            else for (t = 0; 32768 > t; ++t) i[t] = i[n + t]
            return (this.b = 32768), i
          }),
          (z.prototype.S = function (t) {
            var e,
              r,
              n,
              i = (this.input.length / this.c + 1) | 0,
              o = this.input,
              a = this.a
            return (
              t &&
                ('number' == typeof t.B && (i = t.B),
                'number' == typeof t.M && (i += t.M)),
              2 > i
                ? (r =
                    (n = (((o.length - this.c) / this.A[2] / 2) * 258) | 0) <
                    a.length
                      ? a.length + n
                      : a.length << 1)
                : (r = a.length * i),
              s ? (e = new Uint8Array(r)).set(a) : (e = a),
              (this.a = e)
            )
          }),
          (z.prototype.z = function () {
            var t,
              e,
              r,
              n,
              i,
              o = 0,
              a = this.a,
              f = this.o,
              u = new (s ? Uint8Array : Array)(this.s + (this.b - 32768))
            if (0 === f.length)
              return s
                ? this.a.subarray(32768, this.b)
                : this.a.slice(32768, this.b)
            for (e = 0, r = f.length; e < r; ++e)
              for (n = 0, i = (t = f[e]).length; n < i; ++n) u[o++] = t[n]
            for (e = 32768, r = this.b; e < r; ++e) u[o++] = a[e]
            return (this.o = []), (this.buffer = u)
          }),
          (z.prototype.O = function () {
            var t,
              e = this.b
            return (
              s
                ? this.K
                  ? (t = new Uint8Array(e)).set(this.a.subarray(0, e))
                  : (t = this.a.subarray(0, e))
                : (this.a.length > e && (this.a.length = e), (t = this.a)),
              (this.buffer = t)
            )
          }),
          (st.prototype.i = function () {
            for (var t = this.input.length; this.c < t; ) {
              var e,
                r,
                a = new y(),
                f = i,
                u = i,
                c = i,
                h = i,
                p = i,
                l = i,
                m = i,
                g = this.input,
                b = this.c
              switch (
                ((a.C = g[b++]),
                (a.D = g[b++]),
                (31 !== a.C || 139 !== a.D) &&
                  n(Error('invalid file signature:' + a.C + ',' + a.D)),
                (a.v = g[b++]),
                a.v)
              ) {
                case 8:
                  break
                default:
                  n(Error('unknown compression method: ' + a.v))
              }
              if (
                ((a.n = g[b++]),
                (r = g[b++] | (g[b++] << 8) | (g[b++] << 16) | (g[b++] << 24)),
                (a.$ = new Date(1e3 * r)),
                (a.ba = g[b++]),
                (a.aa = g[b++]),
                0 < (4 & a.n) && ((a.W = g[b++] | (g[b++] << 8)), (b += a.W)),
                0 < (a.n & R))
              ) {
                for (l = [], p = 0; 0 < (h = g[b++]); )
                  l[p++] = String.fromCharCode(h)
                a.name = l.join('')
              }
              if (0 < (a.n & C)) {
                for (l = [], p = 0; 0 < (h = g[b++]); )
                  l[p++] = String.fromCharCode(h)
                a.w = l.join('')
              }
              0 < (a.n & L) &&
                ((a.P = 65535 & d(g, 0, b)),
                a.P !== (g[b++] | (g[b++] << 8)) &&
                  n(Error('invalid header crc16'))),
                (f =
                  g[g.length - 4] |
                  (g[g.length - 3] << 8) |
                  (g[g.length - 2] << 16) |
                  (g[g.length - 1] << 24)),
                g.length - b - 4 - 4 < 512 * f && (c = f),
                (u = new z(g, { index: b, bufferSize: c })),
                (a.data = e = u.i()),
                (b = u.c),
                (a.Y = m =
                  (g[b++] | (g[b++] << 8) | (g[b++] << 16) | (g[b++] << 24)) >>>
                  0),
                d(e, i, i) !== m &&
                  n(
                    Error(
                      'invalid CRC-32 checksum: 0x' +
                        d(e, i, i).toString(16) +
                        ' / 0x' +
                        m.toString(16),
                    ),
                  ),
                (a.Z = f =
                  (g[b++] | (g[b++] << 8) | (g[b++] << 16) | (g[b++] << 24)) >>>
                  0),
                (4294967295 & e.length) !== f &&
                  n(
                    Error(
                      'invalid input size: ' +
                        (4294967295 & e.length) +
                        ' / ' +
                        f,
                    ),
                  ),
                this.G.push(a),
                (this.c = b)
            }
            this.R = o
            var v,
              w,
              x,
              A = this.G,
              E = 0,
              _ = 0
            for (v = 0, w = A.length; v < w; ++v) _ += A[v].data.length
            if (s)
              for (x = new Uint8Array(_), v = 0; v < w; ++v)
                x.set(A[v].data, E), (E += A[v].data.length)
            else {
              for (x = [], v = 0; v < w; ++v) x[v] = A[v].data
              x = Array.prototype.concat.apply([], x)
            }
            return x
          }),
          (ft.prototype.i = function () {
            var t,
              e = this.input
            return (
              (t = this.J.i()),
              (this.c = this.J.c),
              this.V &&
                ((e[this.c++] << 24) |
                  (e[this.c++] << 16) |
                  (e[this.c++] << 8) |
                  e[this.c++]) >>>
                  0 !==
                  at(t) &&
                n(Error('invalid adler-32 checksum')),
              t
            )
          })
        var ut = 8
        function ct(t, e) {
          ;(this.input = t),
            (this.a = new (s ? Uint8Array : Array)(32768)),
            (this.k = ht.t)
          var r,
            n = {}
          for (r in ((!e && (e = {})) ||
            'number' != typeof e.compressionType ||
            (this.k = e.compressionType),
          e))
            n[r] = e[r]
          ;(n.outputBuffer = this.a), (this.I = new w(this.input, n))
        }
        var ht = E
        function pt(t, e) {
          var r
          return (r = new ct(t).h()), e || (e = {}), e.H ? r : gt(r)
        }
        function lt(t, e) {
          var r
          return (
            (t.subarray = t.slice),
            (r = new ft(t).i()),
            e || (e = {}),
            e.noBuffer ? r : gt(r)
          )
        }
        function dt(t, e) {
          var r
          return (
            (t.subarray = t.slice),
            (r = new B(t).h()),
            e || (e = {}),
            e.H ? r : gt(r)
          )
        }
        function mt(t, e) {
          var r
          return (
            (t.subarray = t.slice),
            (r = new st(t).i()),
            e || (e = {}),
            e.H ? r : gt(r)
          )
        }
        function gt(t) {
          var e,
            n,
            i = new r(t.length)
          for (e = 0, n = t.length; e < n; ++e) i[e] = t[e]
          return i
        }
        ;(ct.prototype.h = function () {
          var t,
            e,
            r,
            i,
            o,
            a,
            f,
            u = 0
          switch (((f = this.a), (t = ut))) {
            case ut:
              e = Math.LOG2E * Math.log(32768) - 8
              break
            default:
              n(Error('invalid compression method'))
          }
          switch (((r = (e << 4) | t), (f[u++] = r), t)) {
            case ut:
              switch (this.k) {
                case ht.NONE:
                  o = 0
                  break
                case ht.L:
                  o = 1
                  break
                case ht.t:
                  o = 2
                  break
                default:
                  n(Error('unsupported compression type'))
              }
              break
            default:
              n(Error('invalid compression method'))
          }
          return (
            (i = (o << 6) | 0),
            (f[u++] = i | (31 - ((256 * r + i) % 31))),
            (a = at(this.input)),
            (this.I.b = u),
            (u = (f = this.I.h()).length),
            s &&
              ((f = new Uint8Array(f.buffer)).length <= u + 4 &&
                ((this.a = new Uint8Array(f.length + 4)),
                this.a.set(f),
                (f = this.a)),
              (f = f.subarray(0, u + 4))),
            (f[u++] = (a >> 24) & 255),
            (f[u++] = (a >> 16) & 255),
            (f[u++] = (a >> 8) & 255),
            (f[u++] = 255 & a),
            f
          )
        }),
          (e.deflate = function (e, r, n) {
            t.nextTick(function () {
              var t, i
              try {
                i = pt(e, n)
              } catch (e) {
                t = e
              }
              r(t, i)
            })
          }),
          (e.deflateSync = pt),
          (e.inflate = function (e, r, n) {
            t.nextTick(function () {
              var t, i
              try {
                i = lt(e, n)
              } catch (e) {
                t = e
              }
              r(t, i)
            })
          }),
          (e.inflateSync = lt),
          (e.gzip = function (e, r, n) {
            t.nextTick(function () {
              var t, i
              try {
                i = dt(e, n)
              } catch (e) {
                t = e
              }
              r(t, i)
            })
          }),
          (e.gzipSync = dt),
          (e.gunzip = function (e, r, n) {
            t.nextTick(function () {
              var t, i
              try {
                i = mt(e, n)
              } catch (e) {
                t = e
              }
              r(t, i)
            })
          }),
          (e.gunzipSync = mt)
      }.call(this))
    }.call(this, r(6), r(1).Buffer))
  },
  function (t, e, r) {
    var n = r(52),
      i = n.set,
      o = n.get,
      s = n.del
    t.exports = {
      readCache: o,
      writeCache: i,
      deleteCache: s,
      checkCache: function (t) {
        return o(t).then(function (t) {
          return void 0 !== t
        })
      },
    }
  },
  function (t, e, r) {
    'use strict'
    function n(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r]
        ;(n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n)
      }
    }
    r.r(e),
      r.d(e, 'Store', function () {
        return o
      }),
      r.d(e, 'get', function () {
        return a
      }),
      r.d(e, 'set', function () {
        return f
      }),
      r.d(e, 'del', function () {
        return u
      }),
      r.d(e, 'clear', function () {
        return c
      }),
      r.d(e, 'keys', function () {
        return h
      })
    var i,
      o = (function () {
        function t() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 'keyval-store',
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'keyval'
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function')
          })(this, t),
            (this.storeName = r),
            (this._dbp = new Promise(function (t, n) {
              var i = indexedDB.open(e, 1)
              ;(i.onerror = function () {
                return n(i.error)
              }),
                (i.onsuccess = function () {
                  return t(i.result)
                }),
                (i.onupgradeneeded = function () {
                  i.result.createObjectStore(r)
                })
            }))
        }
        var e, r, i
        return (
          (e = t),
          (r = [
            {
              key: '_withIDBStore',
              value: function (t, e) {
                var r = this
                return this._dbp.then(function (n) {
                  return new Promise(function (i, o) {
                    var s = n.transaction(r.storeName, t)
                    ;(s.oncomplete = function () {
                      return i()
                    }),
                      (s.onabort = s.onerror =
                        function () {
                          return o(s.error)
                        }),
                      e(s.objectStore(r.storeName))
                  })
                })
              },
            },
          ]) && n(e.prototype, r),
          i && n(e, i),
          t
        )
      })()
    function s() {
      return i || (i = new o()), i
    }
    function a(t) {
      var e
      return (
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s()
      )
        ._withIDBStore('readonly', function (r) {
          e = r.get(t)
        })
        .then(function () {
          return e.result
        })
    }
    function f(t, e) {
      return (
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s()
      )._withIDBStore('readwrite', function (r) {
        r.put(e, t)
      })
    }
    function u(t) {
      return (
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s()
      )._withIDBStore('readwrite', function (e) {
        e.delete(t)
      })
    }
    function c() {
      return (
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s()
      )._withIDBStore('readwrite', function (t) {
        t.clear()
      })
    }
    function h() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s(),
        e = []
      return t
        ._withIDBStore('readonly', function (t) {
          ;(t.openKeyCursor || t.openCursor).call(t).onsuccess = function () {
            this.result && (e.push(this.result.key), this.result.continue())
          }
        })
        .then(function () {
          return e
        })
    }
  },
])
//# sourceMappingURL=worker.min.js.map
