(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/.pnpm/aos@2.3.4/node_modules/aos/dist/aos.js
  var require_aos = __commonJS({
    "node_modules/.pnpm/aos@2.3.4/node_modules/aos/dist/aos.js"(exports, module) {
      !function(e, t) {
        typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.AOS = t() : e.AOS = t();
      }(exports, function() {
        return function(e) {
          function t(o) {
            if (n[o])
              return n[o].exports;
            var i = n[o] = { exports: {}, id: o, loaded: false };
            return e[o].call(i.exports, i, i.exports, t), i.loaded = true, i.exports;
          }
          var n = {};
          return t.m = e, t.c = n, t.p = "dist/", t(0);
        }([function(e, t, n) {
          "use strict";
          function o(e2) {
            return e2 && e2.__esModule ? e2 : { default: e2 };
          }
          var i = Object.assign || function(e2) {
            for (var t2 = 1; t2 < arguments.length; t2++) {
              var n2 = arguments[t2];
              for (var o2 in n2)
                Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
            }
            return e2;
          }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = false, x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: false, once: false, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: false }, j = function() {
            var e2 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if (e2 && (k = true), k)
              return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
          }, O = function() {
            w = (0, h.default)(), j();
          }, M = function() {
            w.forEach(function(e2, t2) {
              e2.node.removeAttribute("data-aos"), e2.node.removeAttribute("data-aos-easing"), e2.node.removeAttribute("data-aos-duration"), e2.node.removeAttribute("data-aos-delay");
            });
          }, S = function(e2) {
            return e2 === true || e2 === "mobile" && p.default.mobile() || e2 === "phone" && p.default.phone() || e2 === "tablet" && p.default.tablet() || typeof e2 == "function" && e2() === true;
          }, _ = function(e2) {
            x = i(x, e2), w = (0, h.default)();
            var t2 = document.all && !window.atob;
            return S(x.disable) || t2 ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = true), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), x.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(true) : x.startEvent === "load" ? window.addEventListener(x.startEvent, function() {
              j(true);
            }) : document.addEventListener(x.startEvent, function() {
              j(true);
            }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("scroll", (0, u.default)(function() {
              (0, b.default)(w, x.once);
            }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
          };
          e.exports = { init: _, refresh: j, refreshHard: O };
        }, function(e, t) {
        }, , , , , function(e, t) {
          (function(t2) {
            "use strict";
            function n(e2, t3, n2) {
              function o2(t4) {
                var n3 = b2, o3 = v2;
                return b2 = v2 = void 0, k2 = t4, g2 = e2.apply(o3, n3);
              }
              function r2(e3) {
                return k2 = e3, h2 = setTimeout(f2, t3), M ? o2(e3) : g2;
              }
              function a2(e3) {
                var n3 = e3 - w2, o3 = e3 - k2, i2 = t3 - n3;
                return S ? j(i2, y2 - o3) : i2;
              }
              function c2(e3) {
                var n3 = e3 - w2, o3 = e3 - k2;
                return w2 === void 0 || n3 >= t3 || n3 < 0 || S && o3 >= y2;
              }
              function f2() {
                var e3 = O();
                return c2(e3) ? d2(e3) : void (h2 = setTimeout(f2, a2(e3)));
              }
              function d2(e3) {
                return h2 = void 0, _ && b2 ? o2(e3) : (b2 = v2 = void 0, g2);
              }
              function l2() {
                h2 !== void 0 && clearTimeout(h2), k2 = 0, b2 = w2 = v2 = h2 = void 0;
              }
              function p2() {
                return h2 === void 0 ? g2 : d2(O());
              }
              function m2() {
                var e3 = O(), n3 = c2(e3);
                if (b2 = arguments, v2 = this, w2 = e3, n3) {
                  if (h2 === void 0)
                    return r2(w2);
                  if (S)
                    return h2 = setTimeout(f2, t3), o2(w2);
                }
                return h2 === void 0 && (h2 = setTimeout(f2, t3)), g2;
              }
              var b2, v2, y2, g2, h2, w2, k2 = 0, M = false, S = false, _ = true;
              if (typeof e2 != "function")
                throw new TypeError(s);
              return t3 = u(t3) || 0, i(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? x(u(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
            }
            function o(e2, t3, o2) {
              var r2 = true, a2 = true;
              if (typeof e2 != "function")
                throw new TypeError(s);
              return i(o2) && (r2 = "leading" in o2 ? !!o2.leading : r2, a2 = "trailing" in o2 ? !!o2.trailing : a2), n(e2, t3, { leading: r2, maxWait: t3, trailing: a2 });
            }
            function i(e2) {
              var t3 = typeof e2 == "undefined" ? "undefined" : c(e2);
              return !!e2 && (t3 == "object" || t3 == "function");
            }
            function r(e2) {
              return !!e2 && (typeof e2 == "undefined" ? "undefined" : c(e2)) == "object";
            }
            function a(e2) {
              return (typeof e2 == "undefined" ? "undefined" : c(e2)) == "symbol" || r(e2) && k.call(e2) == d;
            }
            function u(e2) {
              if (typeof e2 == "number")
                return e2;
              if (a(e2))
                return f;
              if (i(e2)) {
                var t3 = typeof e2.valueOf == "function" ? e2.valueOf() : e2;
                e2 = i(t3) ? t3 + "" : t3;
              }
              if (typeof e2 != "string")
                return e2 === 0 ? e2 : +e2;
              e2 = e2.replace(l, "");
              var n2 = m.test(e2);
              return n2 || b.test(e2) ? v(e2.slice(2), n2 ? 2 : 8) : p.test(e2) ? f : +e2;
            }
            var c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
              return typeof e2;
            } : function(e2) {
              return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
            }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = (typeof t2 == "undefined" ? "undefined" : c(t2)) == "object" && t2 && t2.Object === Object && t2, g = (typeof self == "undefined" ? "undefined" : c(self)) == "object" && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
              return h.Date.now();
            };
            e.exports = o;
          }).call(t, function() {
            return this;
          }());
        }, function(e, t) {
          (function(t2) {
            "use strict";
            function n(e2, t3, n2) {
              function i2(t4) {
                var n3 = b2, o2 = v2;
                return b2 = v2 = void 0, O = t4, g2 = e2.apply(o2, n3);
              }
              function r2(e3) {
                return O = e3, h2 = setTimeout(f2, t3), M ? i2(e3) : g2;
              }
              function u2(e3) {
                var n3 = e3 - w2, o2 = e3 - O, i3 = t3 - n3;
                return S ? x(i3, y2 - o2) : i3;
              }
              function s2(e3) {
                var n3 = e3 - w2, o2 = e3 - O;
                return w2 === void 0 || n3 >= t3 || n3 < 0 || S && o2 >= y2;
              }
              function f2() {
                var e3 = j();
                return s2(e3) ? d2(e3) : void (h2 = setTimeout(f2, u2(e3)));
              }
              function d2(e3) {
                return h2 = void 0, _ && b2 ? i2(e3) : (b2 = v2 = void 0, g2);
              }
              function l2() {
                h2 !== void 0 && clearTimeout(h2), O = 0, b2 = w2 = v2 = h2 = void 0;
              }
              function p2() {
                return h2 === void 0 ? g2 : d2(j());
              }
              function m2() {
                var e3 = j(), n3 = s2(e3);
                if (b2 = arguments, v2 = this, w2 = e3, n3) {
                  if (h2 === void 0)
                    return r2(w2);
                  if (S)
                    return h2 = setTimeout(f2, t3), i2(w2);
                }
                return h2 === void 0 && (h2 = setTimeout(f2, t3)), g2;
              }
              var b2, v2, y2, g2, h2, w2, O = 0, M = false, S = false, _ = true;
              if (typeof e2 != "function")
                throw new TypeError(c);
              return t3 = a(t3) || 0, o(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? k(a(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
            }
            function o(e2) {
              var t3 = typeof e2 == "undefined" ? "undefined" : u(e2);
              return !!e2 && (t3 == "object" || t3 == "function");
            }
            function i(e2) {
              return !!e2 && (typeof e2 == "undefined" ? "undefined" : u(e2)) == "object";
            }
            function r(e2) {
              return (typeof e2 == "undefined" ? "undefined" : u(e2)) == "symbol" || i(e2) && w.call(e2) == f;
            }
            function a(e2) {
              if (typeof e2 == "number")
                return e2;
              if (r(e2))
                return s;
              if (o(e2)) {
                var t3 = typeof e2.valueOf == "function" ? e2.valueOf() : e2;
                e2 = o(t3) ? t3 + "" : t3;
              }
              if (typeof e2 != "string")
                return e2 === 0 ? e2 : +e2;
              e2 = e2.replace(d, "");
              var n2 = p.test(e2);
              return n2 || m.test(e2) ? b(e2.slice(2), n2 ? 2 : 8) : l.test(e2) ? s : +e2;
            }
            var u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
              return typeof e2;
            } : function(e2) {
              return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
            }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = (typeof t2 == "undefined" ? "undefined" : u(t2)) == "object" && t2 && t2.Object === Object && t2, y = (typeof self == "undefined" ? "undefined" : u(self)) == "object" && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
              return g.Date.now();
            };
            e.exports = n;
          }).call(t, function() {
            return this;
          }());
        }, function(e, t) {
          "use strict";
          function n(e2) {
            var t2 = void 0, o2 = void 0, i2 = void 0;
            for (t2 = 0; t2 < e2.length; t2 += 1) {
              if (o2 = e2[t2], o2.dataset && o2.dataset.aos)
                return true;
              if (i2 = o2.children && n(o2.children))
                return true;
            }
            return false;
          }
          function o() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
          }
          function i() {
            return !!o();
          }
          function r(e2, t2) {
            var n2 = window.document, i2 = o(), r2 = new i2(a);
            u = t2, r2.observe(n2.documentElement, { childList: true, subtree: true, removedNodes: true });
          }
          function a(e2) {
            e2 && e2.forEach(function(e3) {
              var t2 = Array.prototype.slice.call(e3.addedNodes), o2 = Array.prototype.slice.call(e3.removedNodes), i2 = t2.concat(o2);
              if (n(i2))
                return u();
            });
          }
          Object.defineProperty(t, "__esModule", { value: true });
          var u = function() {
          };
          t.default = { isSupported: i, ready: r };
        }, function(e, t) {
          "use strict";
          function n(e2, t2) {
            if (!(e2 instanceof t2))
              throw new TypeError("Cannot call a class as a function");
          }
          function o() {
            return navigator.userAgent || navigator.vendor || window.opera || "";
          }
          Object.defineProperty(t, "__esModule", { value: true });
          var i = function() {
            function e2(e3, t2) {
              for (var n2 = 0; n2 < t2.length; n2++) {
                var o2 = t2[n2];
                o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
              }
            }
            return function(t2, n2, o2) {
              return n2 && e2(t2.prototype, n2), o2 && e2(t2, o2), t2;
            };
          }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
            function e2() {
              n(this, e2);
            }
            return i(e2, [{ key: "phone", value: function() {
              var e3 = o();
              return !(!r.test(e3) && !a.test(e3.substr(0, 4)));
            } }, { key: "mobile", value: function() {
              var e3 = o();
              return !(!u.test(e3) && !c.test(e3.substr(0, 4)));
            } }, { key: "tablet", value: function() {
              return this.mobile() && !this.phone();
            } }]), e2;
          }();
          t.default = new s();
        }, function(e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = function(e2, t2, n2) {
            var o2 = e2.node.getAttribute("data-aos-once");
            t2 > e2.position ? e2.node.classList.add("aos-animate") : typeof o2 != "undefined" && (o2 === "false" || !n2 && o2 !== "true") && e2.node.classList.remove("aos-animate");
          }, o = function(e2, t2) {
            var o2 = window.pageYOffset, i = window.innerHeight;
            e2.forEach(function(e3, r) {
              n(e3, i + o2, t2);
            });
          };
          t.default = o;
        }, function(e, t, n) {
          "use strict";
          function o(e2) {
            return e2 && e2.__esModule ? e2 : { default: e2 };
          }
          Object.defineProperty(t, "__esModule", { value: true });
          var i = n(12), r = o(i), a = function(e2, t2) {
            return e2.forEach(function(e3, n2) {
              e3.node.classList.add("aos-init"), e3.position = (0, r.default)(e3.node, t2.offset);
            }), e2;
          };
          t.default = a;
        }, function(e, t, n) {
          "use strict";
          function o(e2) {
            return e2 && e2.__esModule ? e2 : { default: e2 };
          }
          Object.defineProperty(t, "__esModule", { value: true });
          var i = n(13), r = o(i), a = function(e2, t2) {
            var n2 = 0, o2 = 0, i2 = window.innerHeight, a2 = { offset: e2.getAttribute("data-aos-offset"), anchor: e2.getAttribute("data-aos-anchor"), anchorPlacement: e2.getAttribute("data-aos-anchor-placement") };
            switch (a2.offset && !isNaN(a2.offset) && (o2 = parseInt(a2.offset)), a2.anchor && document.querySelectorAll(a2.anchor) && (e2 = document.querySelectorAll(a2.anchor)[0]), n2 = (0, r.default)(e2).top, a2.anchorPlacement) {
              case "top-bottom":
                break;
              case "center-bottom":
                n2 += e2.offsetHeight / 2;
                break;
              case "bottom-bottom":
                n2 += e2.offsetHeight;
                break;
              case "top-center":
                n2 += i2 / 2;
                break;
              case "bottom-center":
                n2 += i2 / 2 + e2.offsetHeight;
                break;
              case "center-center":
                n2 += i2 / 2 + e2.offsetHeight / 2;
                break;
              case "top-top":
                n2 += i2;
                break;
              case "bottom-top":
                n2 += e2.offsetHeight + i2;
                break;
              case "center-top":
                n2 += e2.offsetHeight / 2 + i2;
            }
            return a2.anchorPlacement || a2.offset || isNaN(t2) || (o2 = t2), n2 + o2;
          };
          t.default = a;
        }, function(e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = function(e2) {
            for (var t2 = 0, n2 = 0; e2 && !isNaN(e2.offsetLeft) && !isNaN(e2.offsetTop); )
              t2 += e2.offsetLeft - (e2.tagName != "BODY" ? e2.scrollLeft : 0), n2 += e2.offsetTop - (e2.tagName != "BODY" ? e2.scrollTop : 0), e2 = e2.offsetParent;
            return { top: n2, left: t2 };
          };
          t.default = n;
        }, function(e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = function(e2) {
            return e2 = e2 || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e2, function(e3) {
              return { node: e3 };
            });
          };
          t.default = n;
        }]);
      });
    }
  });

  // DistributionPackages/Abte.Site/Resources/Private/Fusion/Alicante.js
  var import_aos = __toESM(require_aos());

  // node_modules/.pnpm/alpinejs@3.10.2/node_modules/alpinejs/dist/module.esm.js
  var flushPending = false;
  var flushing = false;
  var queue = [];
  function scheduler(callback) {
    queueJob(callback);
  }
  function queueJob(job) {
    if (!queue.includes(job))
      queue.push(job);
    queueFlush();
  }
  function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1)
      queue.splice(index, 1);
  }
  function queueFlush() {
    if (!flushing && !flushPending) {
      flushPending = true;
      queueMicrotask(flushJobs);
    }
  }
  function flushJobs() {
    flushPending = false;
    flushing = true;
    for (let i = 0; i < queue.length; i++) {
      queue[i]();
    }
    queue.length = 0;
    flushing = false;
  }
  var reactive;
  var effect;
  var release;
  var raw;
  var shouldSchedule = true;
  function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
  }
  function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback) => engine.effect(callback, { scheduler: (task) => {
      if (shouldSchedule) {
        scheduler(task);
      } else {
        task();
      }
    } });
    raw = engine.raw;
  }
  function overrideEffect(override) {
    effect = override;
  }
  function elementBoundEffect(el2) {
    let cleanup2 = () => {
    };
    let wrappedEffect = (callback) => {
      let effectReference = effect(callback);
      if (!el2._x_effects) {
        el2._x_effects = /* @__PURE__ */ new Set();
        el2._x_runEffects = () => {
          el2._x_effects.forEach((i) => i());
        };
      }
      el2._x_effects.add(effectReference);
      cleanup2 = () => {
        if (effectReference === void 0)
          return;
        el2._x_effects.delete(effectReference);
        release(effectReference);
      };
      return effectReference;
    };
    return [wrappedEffect, () => {
      cleanup2();
    }];
  }
  var onAttributeAddeds = [];
  var onElRemoveds = [];
  var onElAddeds = [];
  function onElAdded(callback) {
    onElAddeds.push(callback);
  }
  function onElRemoved(el2, callback) {
    if (typeof callback === "function") {
      if (!el2._x_cleanups)
        el2._x_cleanups = [];
      el2._x_cleanups.push(callback);
    } else {
      callback = el2;
      onElRemoveds.push(callback);
    }
  }
  function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
  }
  function onAttributeRemoved(el2, name, callback) {
    if (!el2._x_attributeCleanups)
      el2._x_attributeCleanups = {};
    if (!el2._x_attributeCleanups[name])
      el2._x_attributeCleanups[name] = [];
    el2._x_attributeCleanups[name].push(callback);
  }
  function cleanupAttributes(el2, names) {
    if (!el2._x_attributeCleanups)
      return;
    Object.entries(el2._x_attributeCleanups).forEach(([name, value]) => {
      if (names === void 0 || names.includes(name)) {
        value.forEach((i) => i());
        delete el2._x_attributeCleanups[name];
      }
    });
  }
  var observer = new MutationObserver(onMutate);
  var currentlyObserving = false;
  function startObservingMutations() {
    observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
    currentlyObserving = true;
  }
  function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
  }
  var recordQueue = [];
  var willProcessRecordQueue = false;
  function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords());
    if (recordQueue.length && !willProcessRecordQueue) {
      willProcessRecordQueue = true;
      queueMicrotask(() => {
        processRecordQueue();
        willProcessRecordQueue = false;
      });
    }
  }
  function processRecordQueue() {
    onMutate(recordQueue);
    recordQueue.length = 0;
  }
  function mutateDom(callback) {
    if (!currentlyObserving)
      return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
  }
  var isCollecting = false;
  var deferredMutations = [];
  function deferMutations() {
    isCollecting = true;
  }
  function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
  }
  function onMutate(mutations) {
    if (isCollecting) {
      deferredMutations = deferredMutations.concat(mutations);
      return;
    }
    let addedNodes = [];
    let removedNodes = [];
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for (let i = 0; i < mutations.length; i++) {
      if (mutations[i].target._x_ignoreMutationObserver)
        continue;
      if (mutations[i].type === "childList") {
        mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
        mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
      }
      if (mutations[i].type === "attributes") {
        let el2 = mutations[i].target;
        let name = mutations[i].attributeName;
        let oldValue = mutations[i].oldValue;
        let add2 = () => {
          if (!addedAttributes.has(el2))
            addedAttributes.set(el2, []);
          addedAttributes.get(el2).push({ name, value: el2.getAttribute(name) });
        };
        let remove = () => {
          if (!removedAttributes.has(el2))
            removedAttributes.set(el2, []);
          removedAttributes.get(el2).push(name);
        };
        if (el2.hasAttribute(name) && oldValue === null) {
          add2();
        } else if (el2.hasAttribute(name)) {
          remove();
          add2();
        } else {
          remove();
        }
      }
    }
    removedAttributes.forEach((attrs, el2) => {
      cleanupAttributes(el2, attrs);
    });
    addedAttributes.forEach((attrs, el2) => {
      onAttributeAddeds.forEach((i) => i(el2, attrs));
    });
    for (let node of removedNodes) {
      if (addedNodes.includes(node))
        continue;
      onElRemoveds.forEach((i) => i(node));
      if (node._x_cleanups) {
        while (node._x_cleanups.length)
          node._x_cleanups.pop()();
      }
    }
    addedNodes.forEach((node) => {
      node._x_ignoreSelf = true;
      node._x_ignore = true;
    });
    for (let node of addedNodes) {
      if (removedNodes.includes(node))
        continue;
      if (!node.isConnected)
        continue;
      delete node._x_ignoreSelf;
      delete node._x_ignore;
      onElAddeds.forEach((i) => i(node));
      node._x_ignore = true;
      node._x_ignoreSelf = true;
    }
    addedNodes.forEach((node) => {
      delete node._x_ignoreSelf;
      delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
  }
  function scope(node) {
    return mergeProxies(closestDataStack(node));
  }
  function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
    return () => {
      node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
    };
  }
  function refreshScope(element, scope2) {
    let existingScope = element._x_dataStack[0];
    Object.entries(scope2).forEach(([key, value]) => {
      existingScope[key] = value;
    });
  }
  function closestDataStack(node) {
    if (node._x_dataStack)
      return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
      return closestDataStack(node.host);
    }
    if (!node.parentNode) {
      return [];
    }
    return closestDataStack(node.parentNode);
  }
  function mergeProxies(objects) {
    let thisProxy = new Proxy({}, {
      ownKeys: () => {
        return Array.from(new Set(objects.flatMap((i) => Object.keys(i))));
      },
      has: (target, name) => {
        return objects.some((obj) => obj.hasOwnProperty(name));
      },
      get: (target, name) => {
        return (objects.find((obj) => {
          if (obj.hasOwnProperty(name)) {
            let descriptor = Object.getOwnPropertyDescriptor(obj, name);
            if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) {
              return true;
            }
            if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
              let getter = descriptor.get;
              let setter = descriptor.set;
              let property = descriptor;
              getter = getter && getter.bind(thisProxy);
              setter = setter && setter.bind(thisProxy);
              if (getter)
                getter._x_alreadyBound = true;
              if (setter)
                setter._x_alreadyBound = true;
              Object.defineProperty(obj, name, __spreadProps(__spreadValues({}, property), {
                get: getter,
                set: setter
              }));
            }
            return true;
          }
          return false;
        }) || {})[name];
      },
      set: (target, name, value) => {
        let closestObjectWithKey = objects.find((obj) => obj.hasOwnProperty(name));
        if (closestObjectWithKey) {
          closestObjectWithKey[name] = value;
        } else {
          objects[objects.length - 1][name] = value;
        }
        return true;
      }
    });
    return thisProxy;
  }
  function initInterceptors(data2) {
    let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
        if (enumerable === false || value === void 0)
          return;
        let path = basePath === "" ? key : `${basePath}.${key}`;
        if (typeof value === "object" && value !== null && value._x_interceptor) {
          obj[key] = value.initialize(data2, path, key);
        } else {
          if (isObject2(value) && value !== obj && !(value instanceof Element)) {
            recurse(value, path);
          }
        }
      });
    };
    return recurse(data2);
  }
  function interceptor(callback, mutateObj = () => {
  }) {
    let obj = {
      initialValue: void 0,
      _x_interceptor: true,
      initialize(data2, path, key) {
        return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
      }
    };
    mutateObj(obj);
    return (initialValue) => {
      if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
        let initialize2 = obj.initialize.bind(obj);
        obj.initialize = (data2, path, key) => {
          let innerValue = initialValue.initialize(data2, path, key);
          obj.initialValue = innerValue;
          return initialize2(data2, path, key);
        };
      } else {
        obj.initialValue = initialValue;
      }
      return obj;
    };
  }
  function get(obj, path) {
    return path.split(".").reduce((carry, segment) => carry[segment], obj);
  }
  function set(obj, path, value) {
    if (typeof path === "string")
      path = path.split(".");
    if (path.length === 1)
      obj[path[0]] = value;
    else if (path.length === 0)
      throw error;
    else {
      if (obj[path[0]])
        return set(obj[path[0]], path.slice(1), value);
      else {
        obj[path[0]] = {};
        return set(obj[path[0]], path.slice(1), value);
      }
    }
  }
  var magics = {};
  function magic(name, callback) {
    magics[name] = callback;
  }
  function injectMagics(obj, el2) {
    Object.entries(magics).forEach(([name, callback]) => {
      Object.defineProperty(obj, `$${name}`, {
        get() {
          let [utilities, cleanup2] = getElementBoundUtilities(el2);
          utilities = __spreadValues({ interceptor }, utilities);
          onElRemoved(el2, cleanup2);
          return callback(el2, utilities);
        },
        enumerable: false
      });
    });
    return obj;
  }
  function tryCatch(el2, expression, callback, ...args) {
    try {
      return callback(...args);
    } catch (e) {
      handleError(e, el2, expression);
    }
  }
  function handleError(error2, el2, expression = void 0) {
    Object.assign(error2, { el: el2, expression });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el2);
    setTimeout(() => {
      throw error2;
    }, 0);
  }
  var shouldAutoEvaluateFunctions = true;
  function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    callback();
    shouldAutoEvaluateFunctions = cache;
  }
  function evaluate(el2, expression, extras = {}) {
    let result;
    evaluateLater(el2, expression)((value) => result = value, extras);
    return result;
  }
  function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
  }
  var theEvaluatorFunction = normalEvaluator;
  function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
  }
  function normalEvaluator(el2, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el2);
    let dataStack = [overriddenMagics, ...closestDataStack(el2)];
    if (typeof expression === "function") {
      return generateEvaluatorFromFunction(dataStack, expression);
    }
    let evaluator = generateEvaluatorFromString(dataStack, expression, el2);
    return tryCatch.bind(null, el2, expression, evaluator);
  }
  function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
      runIfTypeOfFunction(receiver, result);
    };
  }
  var evaluatorMemo = {};
  function generateFunctionFromString(expression, el2) {
    if (evaluatorMemo[expression]) {
      return evaluatorMemo[expression];
    }
    let AsyncFunction = Object.getPrototypeOf(async function() {
    }).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)\s/.test(expression) ? `(() => { ${expression} })()` : expression;
    const safeAsyncFunction = () => {
      try {
        return new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
      } catch (error2) {
        handleError(error2, el2, expression);
        return Promise.resolve();
      }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
  }
  function generateEvaluatorFromString(dataStack, expression, el2) {
    let func = generateFunctionFromString(expression, el2);
    return (receiver = () => {
    }, { scope: scope2 = {}, params = [] } = {}) => {
      func.result = void 0;
      func.finished = false;
      let completeScope = mergeProxies([scope2, ...dataStack]);
      if (typeof func === "function") {
        let promise = func(func, completeScope).catch((error2) => handleError(error2, el2, expression));
        if (func.finished) {
          runIfTypeOfFunction(receiver, func.result, completeScope, params, el2);
          func.result = void 0;
        } else {
          promise.then((result) => {
            runIfTypeOfFunction(receiver, result, completeScope, params, el2);
          }).catch((error2) => handleError(error2, el2, expression)).finally(() => func.result = void 0);
        }
      }
    };
  }
  function runIfTypeOfFunction(receiver, value, scope2, params, el2) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
      let result = value.apply(scope2, params);
      if (result instanceof Promise) {
        result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el2, value));
      } else {
        receiver(result);
      }
    } else {
      receiver(value);
    }
  }
  var prefixAsString = "x-";
  function prefix(subject = "") {
    return prefixAsString + subject;
  }
  function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
  }
  var directiveHandlers = {};
  function directive(name, callback) {
    directiveHandlers[name] = callback;
  }
  function directives(el2, attributes, originalAttributeOverride) {
    let transformedAttributeMap = {};
    let directives2 = Array.from(attributes).map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2) => {
      return getDirectiveHandler(el2, directive2);
    });
  }
  function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
  }
  var isDeferringHandlers = false;
  var directiveHandlerStacks = /* @__PURE__ */ new Map();
  var currentHandlerStackKey = Symbol();
  function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = () => {
      while (directiveHandlerStacks.get(key).length)
        directiveHandlerStacks.get(key).shift()();
      directiveHandlerStacks.delete(key);
    };
    let stopDeferring = () => {
      isDeferringHandlers = false;
      flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
  }
  function getElementBoundUtilities(el2) {
    let cleanups = [];
    let cleanup2 = (callback) => cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el2);
    cleanups.push(cleanupEffect);
    let utilities = {
      Alpine: alpine_default,
      effect: effect3,
      cleanup: cleanup2,
      evaluateLater: evaluateLater.bind(evaluateLater, el2),
      evaluate: evaluate.bind(evaluate, el2)
    };
    let doCleanup = () => cleanups.forEach((i) => i());
    return [utilities, doCleanup];
  }
  function getDirectiveHandler(el2, directive2) {
    let noop = () => {
    };
    let handler3 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el2);
    onAttributeRemoved(el2, directive2.original, cleanup2);
    let fullHandler = () => {
      if (el2._x_ignore || el2._x_ignoreSelf)
        return;
      handler3.inline && handler3.inline(el2, directive2, utilities);
      handler3 = handler3.bind(handler3, el2, directive2, utilities);
      isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler3) : handler3();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
  }
  var startingWith = (subject, replacement) => ({ name, value }) => {
    if (name.startsWith(subject))
      name = name.replace(subject, replacement);
    return { name, value };
  };
  var into = (i) => i;
  function toTransformedAttributes(callback = () => {
  }) {
    return ({ name, value }) => {
      let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
        return transform(carry);
      }, { name, value });
      if (newName !== name)
        callback(newName, name);
      return { name: newName, value: newValue };
    };
  }
  var attributeTransformers = [];
  function mapAttributes(callback) {
    attributeTransformers.push(callback);
  }
  function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
  }
  var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
  function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value }) => {
      let typeMatch = name.match(alpineAttributeRegex());
      let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
      let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      let original = originalAttributeOverride || transformedAttributeMap[name] || name;
      return {
        type: typeMatch ? typeMatch[1] : null,
        value: valueMatch ? valueMatch[1] : null,
        modifiers: modifiers.map((i) => i.replace(".", "")),
        expression: value,
        original
      };
    };
  }
  var DEFAULT = "DEFAULT";
  var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "bind",
    "init",
    "for",
    "mask",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport",
    "element"
  ];
  function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
  }
  function dispatch(el2, name, detail = {}) {
    el2.dispatchEvent(new CustomEvent(name, {
      detail,
      bubbles: true,
      composed: true,
      cancelable: true
    }));
  }
  var tickStack = [];
  var isHolding = false;
  function nextTick(callback = () => {
  }) {
    queueMicrotask(() => {
      isHolding || setTimeout(() => {
        releaseNextTicks();
      });
    });
    return new Promise((res) => {
      tickStack.push(() => {
        callback();
        res();
      });
    });
  }
  function releaseNextTicks() {
    isHolding = false;
    while (tickStack.length)
      tickStack.shift()();
  }
  function holdNextTicks() {
    isHolding = true;
  }
  function walk(el2, callback) {
    if (typeof ShadowRoot === "function" && el2 instanceof ShadowRoot) {
      Array.from(el2.children).forEach((el22) => walk(el22, callback));
      return;
    }
    let skip = false;
    callback(el2, () => skip = true);
    if (skip)
      return;
    let node = el2.firstElementChild;
    while (node) {
      walk(node, callback, false);
      node = node.nextElementSibling;
    }
  }
  function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
  }
  function start() {
    if (!document.body)
      warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el2) => initTree(el2, walk));
    onElRemoved((el2) => destroyTree(el2));
    onAttributesAdded((el2, attrs) => {
      directives(el2, attrs).forEach((handle) => handle());
    });
    let outNestedComponents = (el2) => !closestRoot(el2.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el2) => {
      initTree(el2);
    });
    dispatch(document, "alpine:initialized");
  }
  var rootSelectorCallbacks = [];
  var initSelectorCallbacks = [];
  function rootSelectors() {
    return rootSelectorCallbacks.map((fn) => fn());
  }
  function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
  }
  function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
  }
  function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
  }
  function closestRoot(el2, includeInitSelectors = false) {
    return findClosest(el2, (element) => {
      const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
      if (selectors.some((selector) => element.matches(selector)))
        return true;
    });
  }
  function findClosest(el2, callback) {
    if (!el2)
      return;
    if (callback(el2))
      return el2;
    if (el2._x_teleportBack)
      el2 = el2._x_teleportBack;
    if (!el2.parentElement)
      return;
    return findClosest(el2.parentElement, callback);
  }
  function isRoot(el2) {
    return rootSelectors().some((selector) => el2.matches(selector));
  }
  function initTree(el2, walker = walk) {
    deferHandlingDirectives(() => {
      walker(el2, (el22, skip) => {
        directives(el22, el22.attributes).forEach((handle) => handle());
        el22._x_ignore && skip();
      });
    });
  }
  function destroyTree(root) {
    walk(root, (el2) => cleanupAttributes(el2));
  }
  function setClasses(el2, value) {
    if (Array.isArray(value)) {
      return setClassesFromString(el2, value.join(" "));
    } else if (typeof value === "object" && value !== null) {
      return setClassesFromObject(el2, value);
    } else if (typeof value === "function") {
      return setClasses(el2, value());
    }
    return setClassesFromString(el2, value);
  }
  function setClassesFromString(el2, classString) {
    let split = (classString2) => classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el2.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes) => {
      el2.classList.add(...classes);
      return () => {
        el2.classList.remove(...classes);
      };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
  }
  function setClassesFromObject(el2, classObject) {
    let split = (classString) => classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i) => {
      if (el2.classList.contains(i)) {
        el2.classList.remove(i);
        removed.push(i);
      }
    });
    forAdd.forEach((i) => {
      if (!el2.classList.contains(i)) {
        el2.classList.add(i);
        added.push(i);
      }
    });
    return () => {
      removed.forEach((i) => el2.classList.add(i));
      added.forEach((i) => el2.classList.remove(i));
    };
  }
  function setStyles(el2, value) {
    if (typeof value === "object" && value !== null) {
      return setStylesFromObject(el2, value);
    }
    return setStylesFromString(el2, value);
  }
  function setStylesFromObject(el2, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2]) => {
      previousStyles[key] = el2.style[key];
      if (!key.startsWith("--")) {
        key = kebabCase(key);
      }
      el2.style.setProperty(key, value2);
    });
    setTimeout(() => {
      if (el2.style.length === 0) {
        el2.removeAttribute("style");
      }
    });
    return () => {
      setStyles(el2, previousStyles);
    };
  }
  function setStylesFromString(el2, value) {
    let cache = el2.getAttribute("style", value);
    el2.setAttribute("style", value);
    return () => {
      el2.setAttribute("style", cache || "");
    };
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function once(callback, fallback = () => {
  }) {
    let called = false;
    return function() {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      } else {
        fallback.apply(this, arguments);
      }
    };
  }
  directive("transition", (el2, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "function")
      expression = evaluate2(expression);
    if (!expression) {
      registerTransitionsFromHelper(el2, modifiers, value);
    } else {
      registerTransitionsFromClassString(el2, expression, value);
    }
  });
  function registerTransitionsFromClassString(el2, classString, stage) {
    registerTransitionObject(el2, setClasses, "");
    let directiveStorageMap = {
      enter: (classes) => {
        el2._x_transition.enter.during = classes;
      },
      "enter-start": (classes) => {
        el2._x_transition.enter.start = classes;
      },
      "enter-end": (classes) => {
        el2._x_transition.enter.end = classes;
      },
      leave: (classes) => {
        el2._x_transition.leave.during = classes;
      },
      "leave-start": (classes) => {
        el2._x_transition.leave.start = classes;
      },
      "leave-end": (classes) => {
        el2._x_transition.leave.end = classes;
      }
    };
    directiveStorageMap[stage](classString);
  }
  function registerTransitionsFromHelper(el2, modifiers, stage) {
    registerTransitionObject(el2, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
    }
    if (modifiers.includes("out") && !doesntSpecify) {
      modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
    }
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0);
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
      el2._x_transition.enter.during = {
        transformOrigin: origin,
        transitionDelay: delay,
        transitionProperty: property,
        transitionDuration: `${durationIn}s`,
        transitionTimingFunction: easing
      };
      el2._x_transition.enter.start = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
      el2._x_transition.enter.end = {
        opacity: 1,
        transform: `scale(1)`
      };
    }
    if (transitioningOut) {
      el2._x_transition.leave.during = {
        transformOrigin: origin,
        transitionDelay: delay,
        transitionProperty: property,
        transitionDuration: `${durationOut}s`,
        transitionTimingFunction: easing
      };
      el2._x_transition.leave.start = {
        opacity: 1,
        transform: `scale(1)`
      };
      el2._x_transition.leave.end = {
        opacity: opacityValue,
        transform: `scale(${scaleValue})`
      };
    }
  }
  function registerTransitionObject(el2, setFunction, defaultValue = {}) {
    if (!el2._x_transition)
      el2._x_transition = {
        enter: { during: defaultValue, start: defaultValue, end: defaultValue },
        leave: { during: defaultValue, start: defaultValue, end: defaultValue },
        in(before = () => {
        }, after = () => {
        }) {
          transition(el2, setFunction, {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end
          }, before, after);
        },
        out(before = () => {
        }, after = () => {
        }) {
          transition(el2, setFunction, {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end
          }, before, after);
        }
      };
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el2, value, show, hide) {
    let clickAwayCompatibleShow = () => {
      document.visibilityState === "visible" ? requestAnimationFrame(show) : setTimeout(show);
    };
    if (value) {
      if (el2._x_transition && (el2._x_transition.enter || el2._x_transition.leave)) {
        el2._x_transition.enter && (Object.entries(el2._x_transition.enter.during).length || Object.entries(el2._x_transition.enter.start).length || Object.entries(el2._x_transition.enter.end).length) ? el2._x_transition.in(show) : clickAwayCompatibleShow();
      } else {
        el2._x_transition ? el2._x_transition.in(show) : clickAwayCompatibleShow();
      }
      return;
    }
    el2._x_hidePromise = el2._x_transition ? new Promise((resolve, reject) => {
      el2._x_transition.out(() => {
      }, () => resolve(hide));
      el2._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
    }) : Promise.resolve(hide);
    queueMicrotask(() => {
      let closest = closestHide(el2);
      if (closest) {
        if (!closest._x_hideChildren)
          closest._x_hideChildren = [];
        closest._x_hideChildren.push(el2);
      } else {
        queueMicrotask(() => {
          let hideAfterChildren = (el22) => {
            let carry = Promise.all([
              el22._x_hidePromise,
              ...(el22._x_hideChildren || []).map(hideAfterChildren)
            ]).then(([i]) => i());
            delete el22._x_hidePromise;
            delete el22._x_hideChildren;
            return carry;
          };
          hideAfterChildren(el2).catch((e) => {
            if (!e.isFromCancelledTransition)
              throw e;
          });
        });
      }
    });
  };
  function closestHide(el2) {
    let parent = el2.parentNode;
    if (!parent)
      return;
    return parent._x_hidePromise ? parent : closestHide(parent);
  }
  function transition(el2, setFunction, { during, start: start2, end } = {}, before = () => {
  }, after = () => {
  }) {
    if (el2._x_transitioning)
      el2._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
      before();
      after();
      return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el2, {
      start() {
        undoStart = setFunction(el2, start2);
      },
      during() {
        undoDuring = setFunction(el2, during);
      },
      before,
      end() {
        undoStart();
        undoEnd = setFunction(el2, end);
      },
      after,
      cleanup() {
        undoDuring();
        undoEnd();
      }
    });
  }
  function performTransition(el2, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(() => {
      mutateDom(() => {
        interrupted = true;
        if (!reachedBefore)
          stages.before();
        if (!reachedEnd) {
          stages.end();
          releaseNextTicks();
        }
        stages.after();
        if (el2.isConnected)
          stages.cleanup();
        delete el2._x_transitioning;
      });
    });
    el2._x_transitioning = {
      beforeCancels: [],
      beforeCancel(callback) {
        this.beforeCancels.push(callback);
      },
      cancel: once(function() {
        while (this.beforeCancels.length) {
          this.beforeCancels.shift()();
        }
        ;
        finish();
      }),
      finish
    };
    mutateDom(() => {
      stages.start();
      stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      let duration = Number(getComputedStyle(el2).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
      let delay = Number(getComputedStyle(el2).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
      if (duration === 0)
        duration = Number(getComputedStyle(el2).animationDuration.replace("s", "")) * 1e3;
      mutateDom(() => {
        stages.before();
      });
      reachedBefore = true;
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        mutateDom(() => {
          stages.end();
        });
        releaseNextTicks();
        setTimeout(el2._x_transitioning.finish, duration + delay);
        reachedEnd = true;
      });
    });
  }
  function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1)
      return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue)
      return fallback;
    if (key === "scale") {
      if (isNaN(rawValue))
        return fallback;
    }
    if (key === "duration") {
      let match = rawValue.match(/([0-9]+)ms/);
      if (match)
        return match[1];
    }
    if (key === "origin") {
      if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
      }
    }
    return rawValue;
  }
  var isCloning = false;
  function skipDuringClone(callback, fallback = () => {
  }) {
    return (...args) => isCloning ? fallback(...args) : callback(...args);
  }
  function clone(oldEl, newEl) {
    if (!newEl._x_dataStack)
      newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    dontRegisterReactiveSideEffects(() => {
      cloneTree(newEl);
    });
    isCloning = false;
  }
  function cloneTree(el2) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el22, callback) => {
      walk(el22, (el3, skip) => {
        if (hasRunThroughFirstEl && isRoot(el3))
          return skip();
        hasRunThroughFirstEl = true;
        callback(el3, skip);
      });
    };
    initTree(el2, shallowWalker);
  }
  function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el2) => {
      let storedEffect = cache(callback2);
      release(storedEffect);
      return () => {
      };
    });
    callback();
    overrideEffect(cache);
  }
  function bind(el2, name, value, modifiers = []) {
    if (!el2._x_bindings)
      el2._x_bindings = reactive({});
    el2._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch (name) {
      case "value":
        bindInputValue(el2, value);
        break;
      case "style":
        bindStyles(el2, value);
        break;
      case "class":
        bindClasses(el2, value);
        break;
      default:
        bindAttribute(el2, name, value);
        break;
    }
  }
  function bindInputValue(el2, value) {
    if (el2.type === "radio") {
      if (el2.attributes.value === void 0) {
        el2.value = value;
      }
      if (window.fromModel) {
        el2.checked = checkedAttrLooseCompare(el2.value, value);
      }
    } else if (el2.type === "checkbox") {
      if (Number.isInteger(value)) {
        el2.value = value;
      } else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
        el2.value = String(value);
      } else {
        if (Array.isArray(value)) {
          el2.checked = value.some((val) => checkedAttrLooseCompare(val, el2.value));
        } else {
          el2.checked = !!value;
        }
      }
    } else if (el2.tagName === "SELECT") {
      updateSelect(el2, value);
    } else {
      if (el2.value === value)
        return;
      el2.value = value;
    }
  }
  function bindClasses(el2, value) {
    if (el2._x_undoAddedClasses)
      el2._x_undoAddedClasses();
    el2._x_undoAddedClasses = setClasses(el2, value);
  }
  function bindStyles(el2, value) {
    if (el2._x_undoAddedStyles)
      el2._x_undoAddedStyles();
    el2._x_undoAddedStyles = setStyles(el2, value);
  }
  function bindAttribute(el2, name, value) {
    if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
      el2.removeAttribute(name);
    } else {
      if (isBooleanAttr(name))
        value = name;
      setIfChanged(el2, name, value);
    }
  }
  function setIfChanged(el2, attrName, value) {
    if (el2.getAttribute(attrName) != value) {
      el2.setAttribute(attrName, value);
    }
  }
  function updateSelect(el2, value) {
    const arrayWrappedValue = [].concat(value).map((value2) => {
      return value2 + "";
    });
    Array.from(el2.options).forEach((option) => {
      option.selected = arrayWrappedValue.includes(option.value);
    });
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function isBooleanAttr(attrName) {
    const booleanAttributes = [
      "disabled",
      "checked",
      "required",
      "readonly",
      "hidden",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule"
    ];
    return booleanAttributes.includes(attrName);
  }
  function attributeShouldntBePreservedIfFalsy(name) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
  }
  function getBinding(el2, name, fallback) {
    if (el2._x_bindings && el2._x_bindings[name] !== void 0)
      return el2._x_bindings[name];
    let attr = el2.getAttribute(name);
    if (attr === null)
      return typeof fallback === "function" ? fallback() : fallback;
    if (isBooleanAttr(name)) {
      return !![name, "true"].includes(attr);
    }
    if (attr === "")
      return true;
    return attr;
  }
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      let context = this, args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  function plugin(callback) {
    callback(alpine_default);
  }
  var stores = {};
  var isReactive = false;
  function store(name, value) {
    if (!isReactive) {
      stores = reactive(stores);
      isReactive = true;
    }
    if (value === void 0) {
      return stores[name];
    }
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
      stores[name].init();
    }
    initInterceptors(stores[name]);
  }
  function getStores() {
    return stores;
  }
  var binds = {};
  function bind2(name, object) {
    binds[name] = typeof object !== "function" ? () => object : object;
  }
  function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback(...args);
          };
        }
      });
    });
    return obj;
  }
  var datas = {};
  function data(name, callback) {
    datas[name] = callback;
  }
  function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback]) => {
      Object.defineProperty(obj, name, {
        get() {
          return (...args) => {
            return callback.bind(context)(...args);
          };
        },
        enumerable: false
      });
    });
    return obj;
  }
  var Alpine = {
    get reactive() {
      return reactive;
    },
    get release() {
      return release;
    },
    get effect() {
      return effect;
    },
    get raw() {
      return raw;
    },
    version: "3.10.0",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    setReactivityEngine,
    closestDataStack,
    skipDuringClone,
    addRootSelector,
    addInitSelector,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    setEvaluator,
    mergeProxies,
    findClosest,
    closestRoot,
    interceptor,
    transition,
    setStyles,
    mutateDom,
    directive,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    bound: getBinding,
    $data: scope,
    data,
    bind: bind2
  };
  var alpine_default = Alpine;
  function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var EMPTY_OBJ = false ? Object.freeze({}) : {};
  var EMPTY_ARR = false ? Object.freeze([]) : [];
  var extend = Object.assign;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var targetMap = /* @__PURE__ */ new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol(false ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(false ? "Map key iterate" : "");
  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }
  function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) {
      effect3();
    }
    return effect3;
  }
  function stop(effect3) {
    if (effect3.active) {
      cleanup(effect3);
      if (effect3.options.onStop) {
        effect3.options.onStop();
      }
      effect3.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
      if (!effect3.active) {
        return fn();
      }
      if (!effectStack.includes(effect3)) {
        cleanup(effect3);
        try {
          enableTracking();
          effectStack.push(effect3);
          activeEffect = effect3;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
  }
  function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect3);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = /* @__PURE__ */ new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (false) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect3) => {
          if (effect3 !== activeEffect || effect3.allowRecurse) {
            effects.add(effect3);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect3) => {
      if (false) {
        effect3.options.onTrigger({
          effect: effect3,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect3.options.scheduler) {
        effect3.options.scheduler(effect3);
      } else {
        effect3();
      }
    };
    effects.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var shallowGet = /* @__PURE__ */ createGetter(false, true);
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
  var arrayInstrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = method.apply(arr, args);
      if (res === -1 || res === false) {
        return method.apply(arr, args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      pauseTracking();
      const res = method.apply(this, args);
      resetTracking();
      return res;
    };
  });
  function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        return isReadonly ? readonly(res) : reactive2(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  var shallowSet = /* @__PURE__ */ createSetter(true);
  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      if (false) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      if (false) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var shallowReactiveHandlers = extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
  });
  var shallowReadonlyHandlers = extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
  });
  var toReactive = (value) => isObject(value) ? reactive2(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "get", key);
    }
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly && track(rawTarget, "has", key);
    }
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (false) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (false) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = false ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
      !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (false) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  var mutableInstrumentations = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly;
      } else if (key === "__v_isReadonly") {
        return isReadonly;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false)
  };
  var shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true)
  };
  var readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false)
  };
  var shallowReadonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, true)
  };
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive2(target) {
    if (target && target["__v_isReadonly"]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (false) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function toRaw(observed) {
    return observed && toRaw(observed["__v_raw"]) || observed;
  }
  function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
  }
  magic("nextTick", () => nextTick);
  magic("dispatch", (el2) => dispatch.bind(dispatch, el2));
  magic("watch", (el2, { evaluateLater: evaluateLater2, effect: effect3 }) => (key, callback) => {
    let evaluate2 = evaluateLater2(key);
    let firstTime = true;
    let oldValue;
    let effectReference = effect3(() => evaluate2((value) => {
      JSON.stringify(value);
      if (!firstTime) {
        queueMicrotask(() => {
          callback(value, oldValue);
          oldValue = value;
        });
      } else {
        oldValue = value;
      }
      firstTime = false;
    }));
    el2._x_effects.delete(effectReference);
  });
  magic("store", getStores);
  magic("data", (el2) => scope(el2));
  magic("root", (el2) => closestRoot(el2));
  magic("refs", (el2) => {
    if (el2._x_refs_proxy)
      return el2._x_refs_proxy;
    el2._x_refs_proxy = mergeProxies(getArrayOfRefObject(el2));
    return el2._x_refs_proxy;
  });
  function getArrayOfRefObject(el2) {
    let refObjects = [];
    let currentEl = el2;
    while (currentEl) {
      if (currentEl._x_refs)
        refObjects.push(currentEl._x_refs);
      currentEl = currentEl.parentNode;
    }
    return refObjects;
  }
  var globalIdMemo = {};
  function findAndIncrementId(name) {
    if (!globalIdMemo[name])
      globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
  }
  function closestIdRoot(el2, name) {
    return findClosest(el2, (element) => {
      if (element._x_ids && element._x_ids[name])
        return true;
    });
  }
  function setIdRoot(el2, name) {
    if (!el2._x_ids)
      el2._x_ids = {};
    if (!el2._x_ids[name])
      el2._x_ids[name] = findAndIncrementId(name);
  }
  magic("id", (el2) => (name, key = null) => {
    let root = closestIdRoot(el2, name);
    let id = root ? root._x_ids[name] : findAndIncrementId(name);
    return key ? `${name}-${id}-${key}` : `${name}-${id}`;
  });
  magic("el", (el2) => el2);
  warnMissingPluginMagic("Focus", "focus", "focus");
  warnMissingPluginMagic("Persist", "persist", "persist");
  function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el2) => warn(`You can't use [$${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el2));
  }
  directive("modelable", (el2, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let func = evaluateLater2(expression);
    let innerGet = () => {
      let result;
      func((i) => result = i);
      return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val) => evaluateInnerSet(() => {
    }, { scope: { __placeholder: val } });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(() => {
      if (!el2._x_model)
        return;
      el2._x_removeModelListeners["default"]();
      let outerGet = el2._x_model.get;
      let outerSet = el2._x_model.set;
      effect3(() => innerSet(outerGet()));
      effect3(() => outerSet(innerGet()));
    });
  });
  directive("teleport", (el2, { expression }, { cleanup: cleanup2 }) => {
    if (el2.tagName.toLowerCase() !== "template")
      warn("x-teleport can only be used on a <template> tag", el2);
    let target = document.querySelector(expression);
    if (!target)
      warn(`Cannot find x-teleport element for selector: "${expression}"`);
    let clone2 = el2.content.cloneNode(true).firstElementChild;
    el2._x_teleport = clone2;
    clone2._x_teleportBack = el2;
    if (el2._x_forwardEvents) {
      el2._x_forwardEvents.forEach((eventName) => {
        clone2.addEventListener(eventName, (e) => {
          e.stopPropagation();
          el2.dispatchEvent(new e.constructor(e.type, e));
        });
      });
    }
    addScopeToNode(clone2, {}, el2);
    mutateDom(() => {
      target.appendChild(clone2);
      initTree(clone2);
      clone2._x_ignore = true;
    });
    cleanup2(() => clone2.remove());
  });
  var handler = () => {
  };
  handler.inline = (el2, { modifiers }, { cleanup: cleanup2 }) => {
    modifiers.includes("self") ? el2._x_ignoreSelf = true : el2._x_ignore = true;
    cleanup2(() => {
      modifiers.includes("self") ? delete el2._x_ignoreSelf : delete el2._x_ignore;
    });
  };
  directive("ignore", handler);
  directive("effect", (el2, { expression }, { effect: effect3 }) => effect3(evaluateLater(el2, expression)));
  function on(el2, event, modifiers, callback) {
    let listenerTarget = el2;
    let handler3 = (e) => callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
    if (modifiers.includes("dot"))
      event = dotSyntax(event);
    if (modifiers.includes("camel"))
      event = camelCase2(event);
    if (modifiers.includes("passive"))
      options.passive = true;
    if (modifiers.includes("capture"))
      options.capture = true;
    if (modifiers.includes("window"))
      listenerTarget = window;
    if (modifiers.includes("document"))
      listenerTarget = document;
    if (modifiers.includes("prevent"))
      handler3 = wrapHandler(handler3, (next, e) => {
        e.preventDefault();
        next(e);
      });
    if (modifiers.includes("stop"))
      handler3 = wrapHandler(handler3, (next, e) => {
        e.stopPropagation();
        next(e);
      });
    if (modifiers.includes("self"))
      handler3 = wrapHandler(handler3, (next, e) => {
        e.target === el2 && next(e);
      });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
      listenerTarget = document;
      handler3 = wrapHandler(handler3, (next, e) => {
        if (el2.contains(e.target))
          return;
        if (e.target.isConnected === false)
          return;
        if (el2.offsetWidth < 1 && el2.offsetHeight < 1)
          return;
        if (el2._x_isShown === false)
          return;
        next(e);
      });
    }
    if (modifiers.includes("once")) {
      handler3 = wrapHandler(handler3, (next, e) => {
        next(e);
        listenerTarget.removeEventListener(event, handler3, options);
      });
    }
    handler3 = wrapHandler(handler3, (next, e) => {
      if (isKeyEvent(event)) {
        if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
          return;
        }
      }
      next(e);
    });
    if (modifiers.includes("debounce")) {
      let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler3 = debounce(handler3, wait);
    }
    if (modifiers.includes("throttle")) {
      let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
      let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
      handler3 = throttle(handler3, wait);
    }
    listenerTarget.addEventListener(event, handler3, options);
    return () => {
      listenerTarget.removeEventListener(event, handler3, options);
    };
  }
  function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
  }
  function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function kebabCase2(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
  }
  function isKeyEvent(event) {
    return ["keydown", "keyup"].includes(event);
  }
  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i) => {
      return !["window", "document", "prevent", "stop", "once"].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
      let debounceIndex = keyModifiers.indexOf("debounce");
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0)
      return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
      return false;
    const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
        if (modifier === "cmd" || modifier === "super")
          modifier = "meta";
        return e[`${modifier}Key`];
      });
      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        if (keyToModifiers(e.key).includes(keyModifiers[0]))
          return false;
      }
    }
    return true;
  }
  function keyToModifiers(key) {
    if (!key)
      return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
      ctrl: "control",
      slash: "/",
      space: "-",
      spacebar: "-",
      cmd: "meta",
      esc: "escape",
      up: "arrow-up",
      down: "arrow-down",
      left: "arrow-left",
      right: "arrow-right",
      period: ".",
      equal: "="
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier) => {
      if (modifierToKeyMap[modifier] === key)
        return modifier;
    }).filter((modifier) => modifier);
  }
  directive("model", (el2, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let evaluate2 = evaluateLater(el2, expression);
    let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    let evaluateAssignment = evaluateLater(el2, assignmentExpression);
    var event = el2.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el2.type) || modifiers.includes("lazy") ? "change" : "input";
    let assigmentFunction = generateAssignmentFunction(el2, modifiers, expression);
    let removeListener = on(el2, event, modifiers, (e) => {
      evaluateAssignment(() => {
      }, { scope: {
        $event: e,
        rightSideOfExpression: assigmentFunction
      } });
    });
    if (!el2._x_removeModelListeners)
      el2._x_removeModelListeners = {};
    el2._x_removeModelListeners["default"] = removeListener;
    cleanup2(() => el2._x_removeModelListeners["default"]());
    let evaluateSetModel = evaluateLater(el2, `${expression} = __placeholder`);
    el2._x_model = {
      get() {
        let result;
        evaluate2((value) => result = value);
        return result;
      },
      set(value) {
        evaluateSetModel(() => {
        }, { scope: { __placeholder: value } });
      }
    };
    el2._x_forceModelUpdate = () => {
      evaluate2((value) => {
        if (value === void 0 && expression.match(/\./))
          value = "";
        window.fromModel = true;
        mutateDom(() => bind(el2, "value", value));
        delete window.fromModel;
      });
    };
    effect3(() => {
      if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el2))
        return;
      el2._x_forceModelUpdate();
    });
  });
  function generateAssignmentFunction(el2, modifiers, expression) {
    if (el2.type === "radio") {
      mutateDom(() => {
        if (!el2.hasAttribute("name"))
          el2.setAttribute("name", expression);
      });
    }
    return (event, currentValue) => {
      return mutateDom(() => {
        if (event instanceof CustomEvent && event.detail !== void 0) {
          return event.detail || event.target.value;
        } else if (el2.type === "checkbox") {
          if (Array.isArray(currentValue)) {
            let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
            return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el22) => !checkedAttrLooseCompare2(el22, newValue));
          } else {
            return event.target.checked;
          }
        } else if (el2.tagName.toLowerCase() === "select" && el2.multiple) {
          return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option) => {
            let rawValue = option.value || option.text;
            return safeParseNumber(rawValue);
          }) : Array.from(event.target.selectedOptions).map((option) => {
            return option.value || option.text;
          });
        } else {
          let rawValue = event.target.value;
          return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
        }
      });
    };
  }
  function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
  }
  function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
  }
  function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  directive("cloak", (el2) => queueMicrotask(() => mutateDom(() => el2.removeAttribute(prefix("cloak")))));
  addInitSelector(() => `[${prefix("init")}]`);
  directive("init", skipDuringClone((el2, { expression }, { evaluate: evaluate2 }) => {
    if (typeof expression === "string") {
      return !!expression.trim() && evaluate2(expression, {}, false);
    }
    return evaluate2(expression, {}, false);
  }));
  directive("text", (el2, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el2.textContent = value;
        });
      });
    });
  });
  directive("html", (el2, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
    let evaluate2 = evaluateLater2(expression);
    effect3(() => {
      evaluate2((value) => {
        mutateDom(() => {
          el2.innerHTML = value;
          el2._x_ignoreSelf = true;
          initTree(el2);
          delete el2._x_ignoreSelf;
        });
      });
    });
  });
  mapAttributes(startingWith(":", into(prefix("bind:"))));
  directive("bind", (el2, { value, modifiers, expression, original }, { effect: effect3 }) => {
    if (!value) {
      return applyBindingsObject(el2, expression, original, effect3);
    }
    if (value === "key")
      return storeKeyForXFor(el2, expression);
    let evaluate2 = evaluateLater(el2, expression);
    effect3(() => evaluate2((result) => {
      if (result === void 0 && expression.match(/\./))
        result = "";
      mutateDom(() => bind(el2, value, result, modifiers));
    }));
  });
  function applyBindingsObject(el2, expression, original, effect3) {
    let bindingProviders = {};
    injectBindingProviders(bindingProviders);
    let getBindings = evaluateLater(el2, expression);
    let cleanupRunners = [];
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    getBindings((bindings) => {
      let attributes = Object.entries(bindings).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(attributes);
      attributes = attributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      directives(el2, attributes, original).map((handle) => {
        cleanupRunners.push(handle.runCleanups);
        handle();
      });
    }, { scope: bindingProviders });
  }
  function storeKeyForXFor(el2, expression) {
    el2._x_keyExpression = expression;
  }
  addRootSelector(() => `[${prefix("data")}]`);
  directive("data", skipDuringClone((el2, { expression }, { cleanup: cleanup2 }) => {
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el2);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el2, expression, { scope: dataProviderContext });
    if (data2 === void 0)
      data2 = {};
    injectMagics(data2, el2);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el2, reactiveData);
    reactiveData["init"] && evaluate(el2, reactiveData["init"]);
    cleanup2(() => {
      reactiveData["destroy"] && evaluate(el2, reactiveData["destroy"]);
      undo();
    });
  }));
  directive("show", (el2, { modifiers, expression }, { effect: effect3 }) => {
    let evaluate2 = evaluateLater(el2, expression);
    if (!el2._x_doHide)
      el2._x_doHide = () => {
        mutateDom(() => el2.style.display = "none");
      };
    if (!el2._x_doShow)
      el2._x_doShow = () => {
        mutateDom(() => {
          if (el2.style.length === 1 && el2.style.display === "none") {
            el2.removeAttribute("style");
          } else {
            el2.style.removeProperty("display");
          }
        });
      };
    let hide = () => {
      el2._x_doHide();
      el2._x_isShown = false;
    };
    let show = () => {
      el2._x_doShow();
      el2._x_isShown = true;
    };
    let clickAwayCompatibleShow = () => setTimeout(show);
    let toggle = once((value) => value ? show() : hide(), (value) => {
      if (typeof el2._x_toggleAndCascadeWithTransitions === "function") {
        el2._x_toggleAndCascadeWithTransitions(el2, value, show, hide);
      } else {
        value ? clickAwayCompatibleShow() : hide();
      }
    });
    let oldValue;
    let firstTime = true;
    effect3(() => evaluate2((value) => {
      if (!firstTime && value === oldValue)
        return;
      if (modifiers.includes("immediate"))
        value ? clickAwayCompatibleShow() : hide();
      toggle(value);
      oldValue = value;
      firstTime = false;
    }));
  });
  directive("for", (el2, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el2, iteratorNames.items);
    let evaluateKey = evaluateLater(el2, el2._x_keyExpression || "index");
    el2._x_prevKeys = [];
    el2._x_lookup = {};
    effect3(() => loop(el2, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(() => {
      Object.values(el2._x_lookup).forEach((el22) => el22.remove());
      delete el2._x_prevKeys;
      delete el2._x_lookup;
    });
  });
  function loop(el2, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i) => typeof i === "object" && !Array.isArray(i);
    let templateEl = el2;
    evaluateItems((items) => {
      if (isNumeric3(items) && items >= 0) {
        items = Array.from(Array(items).keys(), (i) => i + 1);
      }
      if (items === void 0)
        items = [];
      let lookup = el2._x_lookup;
      let prevKeys = el2._x_prevKeys;
      let scopes = [];
      let keys = [];
      if (isObject2(items)) {
        items = Object.entries(items).map(([key, value]) => {
          let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
          evaluateKey((value2) => keys.push(value2), { scope: __spreadValues({ index: key }, scope2) });
          scopes.push(scope2);
        });
      } else {
        for (let i = 0; i < items.length; i++) {
          let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
          evaluateKey((value) => keys.push(value), { scope: __spreadValues({ index: i }, scope2) });
          scopes.push(scope2);
        }
      }
      let adds = [];
      let moves = [];
      let removes = [];
      let sames = [];
      for (let i = 0; i < prevKeys.length; i++) {
        let key = prevKeys[i];
        if (keys.indexOf(key) === -1)
          removes.push(key);
      }
      prevKeys = prevKeys.filter((key) => !removes.includes(key));
      let lastKey = "template";
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let prevIndex = prevKeys.indexOf(key);
        if (prevIndex === -1) {
          prevKeys.splice(i, 0, key);
          adds.push([lastKey, i]);
        } else if (prevIndex !== i) {
          let keyInSpot = prevKeys.splice(i, 1)[0];
          let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
          prevKeys.splice(i, 0, keyForSpot);
          prevKeys.splice(prevIndex, 0, keyInSpot);
          moves.push([keyInSpot, keyForSpot]);
        } else {
          sames.push(key);
        }
        lastKey = key;
      }
      for (let i = 0; i < removes.length; i++) {
        let key = removes[i];
        if (!!lookup[key]._x_effects) {
          lookup[key]._x_effects.forEach(dequeueJob);
        }
        lookup[key].remove();
        lookup[key] = null;
        delete lookup[key];
      }
      for (let i = 0; i < moves.length; i++) {
        let [keyInSpot, keyForSpot] = moves[i];
        let elInSpot = lookup[keyInSpot];
        let elForSpot = lookup[keyForSpot];
        let marker = document.createElement("div");
        mutateDom(() => {
          elForSpot.after(marker);
          elInSpot.after(elForSpot);
          elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
          marker.before(elInSpot);
          elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
          marker.remove();
        });
        refreshScope(elForSpot, scopes[keys.indexOf(keyForSpot)]);
      }
      for (let i = 0; i < adds.length; i++) {
        let [lastKey2, index] = adds[i];
        let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
        if (lastEl._x_currentIfEl)
          lastEl = lastEl._x_currentIfEl;
        let scope2 = scopes[index];
        let key = keys[index];
        let clone2 = document.importNode(templateEl.content, true).firstElementChild;
        addScopeToNode(clone2, reactive(scope2), templateEl);
        mutateDom(() => {
          lastEl.after(clone2);
          initTree(clone2);
        });
        if (typeof key === "object") {
          warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
        }
        lookup[key] = clone2;
      }
      for (let i = 0; i < sames.length; i++) {
        refreshScope(lookup[sames[i]], scopes[keys.indexOf(sames[i])]);
      }
      templateEl._x_prevKeys = keys;
    });
  }
  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch)
      return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, "").trim();
      res.index = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }
    return res;
  }
  function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
      let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
      names.forEach((name, i) => {
        scopeVariables[name] = item[i];
      });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
      let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
      names.forEach((name) => {
        scopeVariables[name] = item[name];
      });
    } else {
      scopeVariables[iteratorNames.item] = item;
    }
    if (iteratorNames.index)
      scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection)
      scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }
  function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  }
  function handler2() {
  }
  handler2.inline = (el2, { expression }, { cleanup: cleanup2 }) => {
    let root = closestRoot(el2);
    if (!root._x_refs)
      root._x_refs = {};
    root._x_refs[expression] = el2;
    cleanup2(() => delete root._x_refs[expression]);
  };
  directive("ref", handler2);
  directive("if", (el2, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
    let evaluate2 = evaluateLater(el2, expression);
    let show = () => {
      if (el2._x_currentIfEl)
        return el2._x_currentIfEl;
      let clone2 = el2.content.cloneNode(true).firstElementChild;
      addScopeToNode(clone2, {}, el2);
      mutateDom(() => {
        el2.after(clone2);
        initTree(clone2);
      });
      el2._x_currentIfEl = clone2;
      el2._x_undoIf = () => {
        walk(clone2, (node) => {
          if (!!node._x_effects) {
            node._x_effects.forEach(dequeueJob);
          }
        });
        clone2.remove();
        delete el2._x_currentIfEl;
      };
      return clone2;
    };
    let hide = () => {
      if (!el2._x_undoIf)
        return;
      el2._x_undoIf();
      delete el2._x_undoIf;
    };
    effect3(() => evaluate2((value) => {
      value ? show() : hide();
    }));
    cleanup2(() => el2._x_undoIf && el2._x_undoIf());
  });
  directive("id", (el2, { expression }, { evaluate: evaluate2 }) => {
    let names = evaluate2(expression);
    names.forEach((name) => setIdRoot(el2, name));
  });
  mapAttributes(startingWith("@", into(prefix("on:"))));
  directive("on", skipDuringClone((el2, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
    let evaluate2 = expression ? evaluateLater(el2, expression) : () => {
    };
    if (el2.tagName.toLowerCase() === "template") {
      if (!el2._x_forwardEvents)
        el2._x_forwardEvents = [];
      if (!el2._x_forwardEvents.includes(value))
        el2._x_forwardEvents.push(value);
    }
    let removeListener = on(el2, value, modifiers, (e) => {
      evaluate2(() => {
      }, { scope: { $event: e }, params: [e] });
    });
    cleanup2(() => removeListener());
  }));
  warnMissingPluginDirective("Collapse", "collapse", "collapse");
  warnMissingPluginDirective("Intersect", "intersect", "intersect");
  warnMissingPluginDirective("Focus", "trap", "focus");
  warnMissingPluginDirective("Mask", "mask", "mask");
  function warnMissingPluginDirective(name, directiveName2, slug) {
    directive(directiveName2, (el2) => warn(`You can't use [x-${directiveName2}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el2));
  }
  alpine_default.setEvaluator(normalEvaluator);
  alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
  var src_default = alpine_default;
  var module_default = src_default;

  // node_modules/.pnpm/jarallax@2.0.3/node_modules/jarallax/dist/jarallax.esm.js
  function ready(callback) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
      callback();
    } else {
      document.addEventListener("DOMContentLoaded", callback, {
        capture: true,
        once: true,
        passive: true
      });
    }
  }
  var win$1;
  if (typeof window !== "undefined") {
    win$1 = window;
  } else if (typeof global !== "undefined") {
    win$1 = global;
  } else if (typeof self !== "undefined") {
    win$1 = self;
  } else {
    win$1 = {};
  }
  var global$2 = win$1;
  var {
    navigator: navigator2
  } = global$2;
  var isMobile = /* @__PURE__ */ /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator2.userAgent);
  var $deviceHelper;
  function getDeviceHeight() {
    if (!$deviceHelper && document.body) {
      $deviceHelper = document.createElement("div");
      $deviceHelper.style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;";
      document.body.appendChild($deviceHelper);
    }
    return ($deviceHelper ? $deviceHelper.clientHeight : 0) || global$2.innerHeight || document.documentElement.clientHeight;
  }
  var wndH;
  function updateWndVars() {
    if (isMobile) {
      wndH = getDeviceHeight();
    } else {
      wndH = global$2.innerHeight || document.documentElement.clientHeight;
    }
  }
  updateWndVars();
  global$2.addEventListener("resize", updateWndVars);
  global$2.addEventListener("orientationchange", updateWndVars);
  global$2.addEventListener("load", updateWndVars);
  ready(() => {
    updateWndVars();
  });
  var jarallaxList = [];
  function getParents(elem) {
    const parents = [];
    while (elem.parentElement !== null) {
      elem = elem.parentElement;
      if (elem.nodeType === 1) {
        parents.push(elem);
      }
    }
    return parents;
  }
  function updateParallax() {
    if (!jarallaxList.length) {
      return;
    }
    jarallaxList.forEach((data2, k) => {
      const {
        instance,
        oldData
      } = data2;
      const clientRect = instance.$item.getBoundingClientRect();
      const newData = {
        width: clientRect.width,
        height: clientRect.height,
        top: clientRect.top,
        bottom: clientRect.bottom,
        wndW: global$2.innerWidth,
        wndH
      };
      const isResized = !oldData || oldData.wndW !== newData.wndW || oldData.wndH !== newData.wndH || oldData.width !== newData.width || oldData.height !== newData.height;
      const isScrolled = isResized || !oldData || oldData.top !== newData.top || oldData.bottom !== newData.bottom;
      jarallaxList[k].oldData = newData;
      if (isResized) {
        instance.onResize();
      }
      if (isScrolled) {
        instance.onScroll();
      }
    });
    global$2.requestAnimationFrame(updateParallax);
  }
  var instanceID = 0;
  var Jarallax = class {
    constructor(item, userOptions) {
      const self2 = this;
      self2.instanceID = instanceID;
      instanceID += 1;
      self2.$item = item;
      self2.defaults = {
        type: "scroll",
        speed: 0.5,
        imgSrc: null,
        imgElement: ".jarallax-img",
        imgSize: "cover",
        imgPosition: "50% 50%",
        imgRepeat: "no-repeat",
        keepImg: false,
        elementInViewport: null,
        zIndex: -100,
        disableParallax: false,
        disableVideo: false,
        videoSrc: null,
        videoStartTime: 0,
        videoEndTime: 0,
        videoVolume: 0,
        videoLoop: true,
        videoPlayOnlyVisible: true,
        videoLazyLoading: true,
        onScroll: null,
        onInit: null,
        onDestroy: null,
        onCoverImage: null
      };
      const dataOptions = self2.$item.dataset || {};
      const pureDataOptions = {};
      Object.keys(dataOptions).forEach((key) => {
        const loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
        if (loweCaseOption && typeof self2.defaults[loweCaseOption] !== "undefined") {
          pureDataOptions[loweCaseOption] = dataOptions[key];
        }
      });
      self2.options = self2.extend({}, self2.defaults, pureDataOptions, userOptions);
      self2.pureOptions = self2.extend({}, self2.options);
      Object.keys(self2.options).forEach((key) => {
        if (self2.options[key] === "true") {
          self2.options[key] = true;
        } else if (self2.options[key] === "false") {
          self2.options[key] = false;
        }
      });
      self2.options.speed = Math.min(2, Math.max(-1, parseFloat(self2.options.speed)));
      if (typeof self2.options.disableParallax === "string") {
        self2.options.disableParallax = new RegExp(self2.options.disableParallax);
      }
      if (self2.options.disableParallax instanceof RegExp) {
        const disableParallaxRegexp = self2.options.disableParallax;
        self2.options.disableParallax = () => disableParallaxRegexp.test(navigator2.userAgent);
      }
      if (typeof self2.options.disableParallax !== "function") {
        self2.options.disableParallax = () => false;
      }
      if (typeof self2.options.disableVideo === "string") {
        self2.options.disableVideo = new RegExp(self2.options.disableVideo);
      }
      if (self2.options.disableVideo instanceof RegExp) {
        const disableVideoRegexp = self2.options.disableVideo;
        self2.options.disableVideo = () => disableVideoRegexp.test(navigator2.userAgent);
      }
      if (typeof self2.options.disableVideo !== "function") {
        self2.options.disableVideo = () => false;
      }
      let elementInVP = self2.options.elementInViewport;
      if (elementInVP && typeof elementInVP === "object" && typeof elementInVP.length !== "undefined") {
        [elementInVP] = elementInVP;
      }
      if (!(elementInVP instanceof Element)) {
        elementInVP = null;
      }
      self2.options.elementInViewport = elementInVP;
      self2.image = {
        src: self2.options.imgSrc || null,
        $container: null,
        useImgTag: false,
        position: "fixed"
      };
      if (self2.initImg() && self2.canInitParallax()) {
        self2.init();
      }
    }
    css(el2, styles) {
      if (typeof styles === "string") {
        return global$2.getComputedStyle(el2).getPropertyValue(styles);
      }
      Object.keys(styles).forEach((key) => {
        el2.style[key] = styles[key];
      });
      return el2;
    }
    extend(out, ...args) {
      out = out || {};
      Object.keys(args).forEach((i) => {
        if (!args[i]) {
          return;
        }
        Object.keys(args[i]).forEach((key) => {
          out[key] = args[i][key];
        });
      });
      return out;
    }
    getWindowData() {
      return {
        width: global$2.innerWidth || document.documentElement.clientWidth,
        height: wndH,
        y: document.documentElement.scrollTop
      };
    }
    initImg() {
      const self2 = this;
      let $imgElement = self2.options.imgElement;
      if ($imgElement && typeof $imgElement === "string") {
        $imgElement = self2.$item.querySelector($imgElement);
      }
      if (!($imgElement instanceof Element)) {
        if (self2.options.imgSrc) {
          $imgElement = new Image();
          $imgElement.src = self2.options.imgSrc;
        } else {
          $imgElement = null;
        }
      }
      if ($imgElement) {
        if (self2.options.keepImg) {
          self2.image.$item = $imgElement.cloneNode(true);
        } else {
          self2.image.$item = $imgElement;
          self2.image.$itemParent = $imgElement.parentNode;
        }
        self2.image.useImgTag = true;
      }
      if (self2.image.$item) {
        return true;
      }
      if (self2.image.src === null) {
        self2.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        self2.image.bgImage = self2.css(self2.$item, "background-image");
      }
      return !(!self2.image.bgImage || self2.image.bgImage === "none");
    }
    canInitParallax() {
      return !this.options.disableParallax();
    }
    init() {
      const self2 = this;
      const containerStyles = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden"
      };
      let imageStyles = {
        pointerEvents: "none",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        willChange: "transform,opacity"
      };
      if (!self2.options.keepImg) {
        const curStyle = self2.$item.getAttribute("style");
        if (curStyle) {
          self2.$item.setAttribute("data-jarallax-original-styles", curStyle);
        }
        if (self2.image.useImgTag) {
          const curImgStyle = self2.image.$item.getAttribute("style");
          if (curImgStyle) {
            self2.image.$item.setAttribute("data-jarallax-original-styles", curImgStyle);
          }
        }
      }
      if (self2.css(self2.$item, "position") === "static") {
        self2.css(self2.$item, {
          position: "relative"
        });
      }
      if (self2.css(self2.$item, "z-index") === "auto") {
        self2.css(self2.$item, {
          zIndex: 0
        });
      }
      self2.image.$container = document.createElement("div");
      self2.css(self2.image.$container, containerStyles);
      self2.css(self2.image.$container, {
        "z-index": self2.options.zIndex
      });
      if (this.image.position === "fixed") {
        self2.css(self2.image.$container, {
          "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        });
      }
      self2.image.$container.setAttribute("id", `jarallax-container-${self2.instanceID}`);
      self2.$item.appendChild(self2.image.$container);
      if (self2.image.useImgTag) {
        imageStyles = self2.extend({
          "object-fit": self2.options.imgSize,
          "object-position": self2.options.imgPosition,
          "max-width": "none"
        }, containerStyles, imageStyles);
      } else {
        self2.image.$item = document.createElement("div");
        if (self2.image.src) {
          imageStyles = self2.extend({
            "background-position": self2.options.imgPosition,
            "background-size": self2.options.imgSize,
            "background-repeat": self2.options.imgRepeat,
            "background-image": self2.image.bgImage || `url("${self2.image.src}")`
          }, containerStyles, imageStyles);
        }
      }
      if (self2.options.type === "opacity" || self2.options.type === "scale" || self2.options.type === "scale-opacity" || self2.options.speed === 1) {
        self2.image.position = "absolute";
      }
      if (self2.image.position === "fixed") {
        const $parents = getParents(self2.$item).filter((el2) => {
          const styles = global$2.getComputedStyle(el2);
          const parentTransform = styles["-webkit-transform"] || styles["-moz-transform"] || styles.transform;
          const overflowRegex = /(auto|scroll)/;
          return parentTransform && parentTransform !== "none" || overflowRegex.test(styles.overflow + styles["overflow-y"] + styles["overflow-x"]);
        });
        self2.image.position = $parents.length ? "absolute" : "fixed";
      }
      imageStyles.position = self2.image.position;
      self2.css(self2.image.$item, imageStyles);
      self2.image.$container.appendChild(self2.image.$item);
      self2.onResize();
      self2.onScroll(true);
      if (self2.options.onInit) {
        self2.options.onInit.call(self2);
      }
      if (self2.css(self2.$item, "background-image") !== "none") {
        self2.css(self2.$item, {
          "background-image": "none"
        });
      }
      self2.addToParallaxList();
    }
    addToParallaxList() {
      jarallaxList.push({
        instance: this
      });
      if (jarallaxList.length === 1) {
        global$2.requestAnimationFrame(updateParallax);
      }
    }
    removeFromParallaxList() {
      const self2 = this;
      jarallaxList.forEach((data2, key) => {
        if (data2.instance.instanceID === self2.instanceID) {
          jarallaxList.splice(key, 1);
        }
      });
    }
    destroy() {
      const self2 = this;
      self2.removeFromParallaxList();
      const originalStylesTag = self2.$item.getAttribute("data-jarallax-original-styles");
      self2.$item.removeAttribute("data-jarallax-original-styles");
      if (!originalStylesTag) {
        self2.$item.removeAttribute("style");
      } else {
        self2.$item.setAttribute("style", originalStylesTag);
      }
      if (self2.image.useImgTag) {
        const originalStylesImgTag = self2.image.$item.getAttribute("data-jarallax-original-styles");
        self2.image.$item.removeAttribute("data-jarallax-original-styles");
        if (!originalStylesImgTag) {
          self2.image.$item.removeAttribute("style");
        } else {
          self2.image.$item.setAttribute("style", originalStylesTag);
        }
        if (self2.image.$itemParent) {
          self2.image.$itemParent.appendChild(self2.image.$item);
        }
      }
      if (self2.image.$container) {
        self2.image.$container.parentNode.removeChild(self2.image.$container);
      }
      if (self2.options.onDestroy) {
        self2.options.onDestroy.call(self2);
      }
      delete self2.$item.jarallax;
    }
    clipContainer() {
    }
    coverImage() {
      const self2 = this;
      const rect = self2.image.$container.getBoundingClientRect();
      const contH = rect.height;
      const {
        speed
      } = self2.options;
      const isScroll = self2.options.type === "scroll" || self2.options.type === "scroll-opacity";
      let scrollDist = 0;
      let resultH = contH;
      let resultMT = 0;
      if (isScroll) {
        if (0 > speed) {
          scrollDist = speed * Math.max(contH, wndH);
          if (wndH < contH) {
            scrollDist -= speed * (contH - wndH);
          }
        } else {
          scrollDist = speed * (contH + wndH);
        }
        if (1 < speed) {
          resultH = Math.abs(scrollDist - wndH);
        } else if (0 > speed) {
          resultH = scrollDist / speed + Math.abs(scrollDist);
        } else {
          resultH += (wndH - contH) * (1 - speed);
        }
        scrollDist /= 2;
      }
      self2.parallaxScrollDistance = scrollDist;
      if (isScroll) {
        resultMT = (wndH - resultH) / 2;
      } else {
        resultMT = (contH - resultH) / 2;
      }
      self2.css(self2.image.$item, {
        height: `${resultH}px`,
        marginTop: `${resultMT}px`,
        left: self2.image.position === "fixed" ? `${rect.left}px` : "0",
        width: `${rect.width}px`
      });
      if (self2.options.onCoverImage) {
        self2.options.onCoverImage.call(self2);
      }
      return {
        image: {
          height: resultH,
          marginTop: resultMT
        },
        container: rect
      };
    }
    isVisible() {
      return this.isElementInViewport || false;
    }
    onScroll(force) {
      const self2 = this;
      const rect = self2.$item.getBoundingClientRect();
      const contT = rect.top;
      const contH = rect.height;
      const styles = {};
      let viewportRect = rect;
      if (self2.options.elementInViewport) {
        viewportRect = self2.options.elementInViewport.getBoundingClientRect();
      }
      self2.isElementInViewport = 0 <= viewportRect.bottom && 0 <= viewportRect.right && viewportRect.top <= wndH && viewportRect.left <= global$2.innerWidth;
      if (force ? false : !self2.isElementInViewport) {
        return;
      }
      const beforeTop = Math.max(0, contT);
      const beforeTopEnd = Math.max(0, contH + contT);
      const afterTop = Math.max(0, -contT);
      const beforeBottom = Math.max(0, contT + contH - wndH);
      const beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
      const afterBottom = Math.max(0, -contT + wndH - contH);
      const fromViewportCenter = 1 - 2 * ((wndH - contT) / (wndH + contH));
      let visiblePercent = 1;
      if (contH < wndH) {
        visiblePercent = 1 - (afterTop || beforeBottom) / contH;
      } else if (beforeTopEnd <= wndH) {
        visiblePercent = beforeTopEnd / wndH;
      } else if (beforeBottomEnd <= wndH) {
        visiblePercent = beforeBottomEnd / wndH;
      }
      if (self2.options.type === "opacity" || self2.options.type === "scale-opacity" || self2.options.type === "scroll-opacity") {
        styles.transform = "translate3d(0,0,0)";
        styles.opacity = visiblePercent;
      }
      if (self2.options.type === "scale" || self2.options.type === "scale-opacity") {
        let scale = 1;
        if (0 > self2.options.speed) {
          scale -= self2.options.speed * visiblePercent;
        } else {
          scale += self2.options.speed * (1 - visiblePercent);
        }
        styles.transform = `scale(${scale}) translate3d(0,0,0)`;
      }
      if (self2.options.type === "scroll" || self2.options.type === "scroll-opacity") {
        let positionY = self2.parallaxScrollDistance * fromViewportCenter;
        if (self2.image.position === "absolute") {
          positionY -= contT;
        }
        styles.transform = `translate3d(0,${positionY}px,0)`;
      }
      self2.css(self2.image.$item, styles);
      if (self2.options.onScroll) {
        self2.options.onScroll.call(self2, {
          section: rect,
          beforeTop,
          beforeTopEnd,
          afterTop,
          beforeBottom,
          beforeBottomEnd,
          afterBottom,
          visiblePercent,
          fromViewportCenter
        });
      }
    }
    onResize() {
      this.coverImage();
    }
  };
  var jarallax$1 = function(items, options, ...args) {
    if (typeof HTMLElement === "object" ? items instanceof HTMLElement : items && typeof items === "object" && items !== null && items.nodeType === 1 && typeof items.nodeName === "string") {
      items = [items];
    }
    const len = items.length;
    let k = 0;
    let ret;
    for (k; k < len; k += 1) {
      if (typeof options === "object" || typeof options === "undefined") {
        if (!items[k].jarallax) {
          items[k].jarallax = new Jarallax(items[k], options);
        }
      } else if (items[k].jarallax) {
        ret = items[k].jarallax[options].apply(items[k].jarallax, args);
      }
      if (typeof ret !== "undefined") {
        return ret;
      }
    }
    return items;
  };
  jarallax$1.constructor = Jarallax;
  var win;
  if (typeof window !== "undefined") {
    win = window;
  } else if (typeof global !== "undefined") {
    win = global;
  } else if (typeof self !== "undefined") {
    win = self;
  } else {
    win = {};
  }
  var global$1 = win;
  function Deferred() {
    this.doneCallbacks = [];
    this.failCallbacks = [];
  }
  Deferred.prototype = {
    execute(list, args) {
      let i = list.length;
      args = Array.prototype.slice.call(args);
      while (i) {
        i -= 1;
        list[i].apply(null, args);
      }
    },
    resolve(...args) {
      this.execute(this.doneCallbacks, args);
    },
    reject(...args) {
      this.execute(this.failCallbacks, args);
    },
    done(callback) {
      this.doneCallbacks.push(callback);
    },
    fail(callback) {
      this.failCallbacks.push(callback);
    }
  };
  var ID = 0;
  var YoutubeAPIadded = 0;
  var VimeoAPIadded = 0;
  var loadingYoutubePlayer = 0;
  var loadingVimeoPlayer = 0;
  var loadingYoutubeDefer = /* @__PURE__ */ new Deferred();
  var loadingVimeoDefer = /* @__PURE__ */ new Deferred();
  var VideoWorker = class {
    constructor(url, options) {
      const self2 = this;
      self2.url = url;
      self2.options_default = {
        autoplay: false,
        loop: false,
        mute: false,
        volume: 100,
        showControls: true,
        accessibilityHidden: false,
        startTime: 0,
        endTime: 0
      };
      self2.options = self2.extend({}, self2.options_default, options);
      if (typeof self2.options.showContols !== "undefined") {
        self2.options.showControls = self2.options.showContols;
        delete self2.options.showContols;
      }
      self2.videoID = self2.parseURL(url);
      if (self2.videoID) {
        self2.ID = ID;
        ID += 1;
        self2.loadAPI();
        self2.init();
      }
    }
    extend(...args) {
      const out = args[0] || {};
      Object.keys(args).forEach((i) => {
        if (!args[i]) {
          return;
        }
        Object.keys(args[i]).forEach((key) => {
          out[key] = args[i][key];
        });
      });
      return out;
    }
    parseURL(url) {
      function getYoutubeID(ytUrl) {
        const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
        const match = ytUrl.match(regExp);
        return match && match[1].length === 11 ? match[1] : false;
      }
      function getVimeoID(vmUrl) {
        const regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
        const match = vmUrl.match(regExp);
        return match && match[3] ? match[3] : false;
      }
      function getLocalVideos(locUrl) {
        const videoFormats = locUrl.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/);
        const result = {};
        let ready2 = 0;
        videoFormats.forEach((val) => {
          const match = val.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
          if (match && match[1] && match[2]) {
            result[match[1] === "ogv" ? "ogg" : match[1]] = match[2];
            ready2 = 1;
          }
        });
        return ready2 ? result : false;
      }
      const Youtube = getYoutubeID(url);
      const Vimeo = getVimeoID(url);
      const Local = getLocalVideos(url);
      if (Youtube) {
        this.type = "youtube";
        return Youtube;
      }
      if (Vimeo) {
        this.type = "vimeo";
        return Vimeo;
      }
      if (Local) {
        this.type = "local";
        return Local;
      }
      return false;
    }
    isValid() {
      return !!this.videoID;
    }
    on(name, callback) {
      this.userEventsList = this.userEventsList || [];
      (this.userEventsList[name] || (this.userEventsList[name] = [])).push(callback);
    }
    off(name, callback) {
      if (!this.userEventsList || !this.userEventsList[name]) {
        return;
      }
      if (!callback) {
        delete this.userEventsList[name];
      } else {
        this.userEventsList[name].forEach((val, key) => {
          if (val === callback) {
            this.userEventsList[name][key] = false;
          }
        });
      }
    }
    fire(name, ...args) {
      if (this.userEventsList && typeof this.userEventsList[name] !== "undefined") {
        this.userEventsList[name].forEach((val) => {
          if (val) {
            val.apply(this, args);
          }
        });
      }
    }
    play(start2) {
      const self2 = this;
      if (!self2.player) {
        return;
      }
      if (self2.type === "youtube" && self2.player.playVideo) {
        if (typeof start2 !== "undefined") {
          self2.player.seekTo(start2 || 0);
        }
        if (global$1.YT.PlayerState.PLAYING !== self2.player.getPlayerState()) {
          self2.player.playVideo();
        }
      }
      if (self2.type === "vimeo") {
        if (typeof start2 !== "undefined") {
          self2.player.setCurrentTime(start2);
        }
        self2.player.getPaused().then((paused) => {
          if (paused) {
            self2.player.play();
          }
        });
      }
      if (self2.type === "local") {
        if (typeof start2 !== "undefined") {
          self2.player.currentTime = start2;
        }
        if (self2.player.paused) {
          self2.player.play();
        }
      }
    }
    pause() {
      const self2 = this;
      if (!self2.player) {
        return;
      }
      if (self2.type === "youtube" && self2.player.pauseVideo) {
        if (global$1.YT.PlayerState.PLAYING === self2.player.getPlayerState()) {
          self2.player.pauseVideo();
        }
      }
      if (self2.type === "vimeo") {
        self2.player.getPaused().then((paused) => {
          if (!paused) {
            self2.player.pause();
          }
        });
      }
      if (self2.type === "local") {
        if (!self2.player.paused) {
          self2.player.pause();
        }
      }
    }
    mute() {
      const self2 = this;
      if (!self2.player) {
        return;
      }
      if (self2.type === "youtube" && self2.player.mute) {
        self2.player.mute();
      }
      if (self2.type === "vimeo" && self2.player.setVolume) {
        self2.player.setVolume(0);
      }
      if (self2.type === "local") {
        self2.$video.muted = true;
      }
    }
    unmute() {
      const self2 = this;
      if (!self2.player) {
        return;
      }
      if (self2.type === "youtube" && self2.player.mute) {
        self2.player.unMute();
      }
      if (self2.type === "vimeo" && self2.player.setVolume) {
        self2.player.setVolume(self2.options.volume);
      }
      if (self2.type === "local") {
        self2.$video.muted = false;
      }
    }
    setVolume(volume = false) {
      const self2 = this;
      if (!self2.player || !volume) {
        return;
      }
      if (self2.type === "youtube" && self2.player.setVolume) {
        self2.player.setVolume(volume);
      }
      if (self2.type === "vimeo" && self2.player.setVolume) {
        self2.player.setVolume(volume);
      }
      if (self2.type === "local") {
        self2.$video.volume = volume / 100;
      }
    }
    getVolume(callback) {
      const self2 = this;
      if (!self2.player) {
        callback(false);
        return;
      }
      if (self2.type === "youtube" && self2.player.getVolume) {
        callback(self2.player.getVolume());
      }
      if (self2.type === "vimeo" && self2.player.getVolume) {
        self2.player.getVolume().then((volume) => {
          callback(volume);
        });
      }
      if (self2.type === "local") {
        callback(self2.$video.volume * 100);
      }
    }
    getMuted(callback) {
      const self2 = this;
      if (!self2.player) {
        callback(null);
        return;
      }
      if (self2.type === "youtube" && self2.player.isMuted) {
        callback(self2.player.isMuted());
      }
      if (self2.type === "vimeo" && self2.player.getVolume) {
        self2.player.getVolume().then((volume) => {
          callback(!!volume);
        });
      }
      if (self2.type === "local") {
        callback(self2.$video.muted);
      }
    }
    getImageURL(callback) {
      const self2 = this;
      if (self2.videoImage) {
        callback(self2.videoImage);
        return;
      }
      if (self2.type === "youtube") {
        const availableSizes = ["maxresdefault", "sddefault", "hqdefault", "0"];
        let step = 0;
        const tempImg = new Image();
        tempImg.onload = function() {
          if ((this.naturalWidth || this.width) !== 120 || step === availableSizes.length - 1) {
            self2.videoImage = `https://img.youtube.com/vi/${self2.videoID}/${availableSizes[step]}.jpg`;
            callback(self2.videoImage);
          } else {
            step += 1;
            this.src = `https://img.youtube.com/vi/${self2.videoID}/${availableSizes[step]}.jpg`;
          }
        };
        tempImg.src = `https://img.youtube.com/vi/${self2.videoID}/${availableSizes[step]}.jpg`;
      }
      if (self2.type === "vimeo") {
        let request = new XMLHttpRequest();
        request.open("GET", `https://vimeo.com/api/oembed.json?url=${self2.url}`, true);
        request.onreadystatechange = function() {
          if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 400) {
              const response = JSON.parse(this.responseText);
              if (response.thumbnail_url) {
                self2.videoImage = response.thumbnail_url;
                callback(self2.videoImage);
              }
            }
          }
        };
        request.send();
        request = null;
      }
    }
    getIframe(callback) {
      this.getVideo(callback);
    }
    getVideo(callback) {
      const self2 = this;
      if (self2.$video) {
        callback(self2.$video);
        return;
      }
      self2.onAPIready(() => {
        let hiddenDiv;
        if (!self2.$video) {
          hiddenDiv = document.createElement("div");
          hiddenDiv.style.display = "none";
        }
        if (self2.type === "youtube") {
          self2.playerOptions = {
            host: "https://www.youtube-nocookie.com",
            videoId: self2.videoID,
            playerVars: {
              autohide: 1,
              rel: 0,
              autoplay: 0,
              playsinline: 1
            }
          };
          if (!self2.options.showControls) {
            self2.playerOptions.playerVars.iv_load_policy = 3;
            self2.playerOptions.playerVars.modestbranding = 1;
            self2.playerOptions.playerVars.controls = 0;
            self2.playerOptions.playerVars.showinfo = 0;
            self2.playerOptions.playerVars.disablekb = 1;
          }
          let ytStarted;
          let ytProgressInterval;
          self2.playerOptions.events = {
            onReady(e) {
              if (self2.options.mute) {
                e.target.mute();
              } else if (self2.options.volume) {
                e.target.setVolume(self2.options.volume);
              }
              if (self2.options.autoplay) {
                self2.play(self2.options.startTime);
              }
              self2.fire("ready", e);
              if (self2.options.loop && !self2.options.endTime) {
                const secondsOffset = 0.1;
                self2.options.endTime = self2.player.getDuration() - secondsOffset;
              }
              setInterval(() => {
                self2.getVolume((volume) => {
                  if (self2.options.volume !== volume) {
                    self2.options.volume = volume;
                    self2.fire("volumechange", e);
                  }
                });
              }, 150);
            },
            onStateChange(e) {
              if (self2.options.loop && e.data === global$1.YT.PlayerState.ENDED) {
                self2.play(self2.options.startTime);
              }
              if (!ytStarted && e.data === global$1.YT.PlayerState.PLAYING) {
                ytStarted = 1;
                self2.fire("started", e);
              }
              if (e.data === global$1.YT.PlayerState.PLAYING) {
                self2.fire("play", e);
              }
              if (e.data === global$1.YT.PlayerState.PAUSED) {
                self2.fire("pause", e);
              }
              if (e.data === global$1.YT.PlayerState.ENDED) {
                self2.fire("ended", e);
              }
              if (e.data === global$1.YT.PlayerState.PLAYING) {
                ytProgressInterval = setInterval(() => {
                  self2.fire("timeupdate", e);
                  if (self2.options.endTime && self2.player.getCurrentTime() >= self2.options.endTime) {
                    if (self2.options.loop) {
                      self2.play(self2.options.startTime);
                    } else {
                      self2.pause();
                    }
                  }
                }, 150);
              } else {
                clearInterval(ytProgressInterval);
              }
            },
            onError(e) {
              self2.fire("error", e);
            }
          };
          const firstInit = !self2.$video;
          if (firstInit) {
            const div = document.createElement("div");
            div.setAttribute("id", self2.playerID);
            hiddenDiv.appendChild(div);
            document.body.appendChild(hiddenDiv);
          }
          self2.player = self2.player || new global$1.YT.Player(self2.playerID, self2.playerOptions);
          if (firstInit) {
            self2.$video = document.getElementById(self2.playerID);
            if (self2.options.accessibilityHidden) {
              self2.$video.setAttribute("tabindex", "-1");
              self2.$video.setAttribute("aria-hidden", "true");
            }
            self2.videoWidth = parseInt(self2.$video.getAttribute("width"), 10) || 1280;
            self2.videoHeight = parseInt(self2.$video.getAttribute("height"), 10) || 720;
          }
        }
        if (self2.type === "vimeo") {
          self2.playerOptions = {
            dnt: 1,
            id: self2.videoID,
            autopause: 0,
            transparent: 0,
            autoplay: self2.options.autoplay ? 1 : 0,
            loop: self2.options.loop ? 1 : 0,
            muted: self2.options.mute ? 1 : 0
          };
          if (self2.options.volume) {
            self2.playerOptions.volume = self2.options.volume;
          }
          if (!self2.options.showControls) {
            self2.playerOptions.badge = 0;
            self2.playerOptions.byline = 0;
            self2.playerOptions.portrait = 0;
            self2.playerOptions.title = 0;
            self2.playerOptions.background = 1;
          }
          if (!self2.$video) {
            let playerOptionsString = "";
            Object.keys(self2.playerOptions).forEach((key) => {
              if (playerOptionsString !== "") {
                playerOptionsString += "&";
              }
              playerOptionsString += `${key}=${encodeURIComponent(self2.playerOptions[key])}`;
            });
            self2.$video = document.createElement("iframe");
            self2.$video.setAttribute("id", self2.playerID);
            self2.$video.setAttribute("src", `https://player.vimeo.com/video/${self2.videoID}?${playerOptionsString}`);
            self2.$video.setAttribute("frameborder", "0");
            self2.$video.setAttribute("mozallowfullscreen", "");
            self2.$video.setAttribute("allowfullscreen", "");
            self2.$video.setAttribute("title", "Vimeo video player");
            if (self2.options.accessibilityHidden) {
              self2.$video.setAttribute("tabindex", "-1");
              self2.$video.setAttribute("aria-hidden", "true");
            }
            hiddenDiv.appendChild(self2.$video);
            document.body.appendChild(hiddenDiv);
          }
          self2.player = self2.player || new global$1.Vimeo.Player(self2.$video, self2.playerOptions);
          if (self2.options.startTime && self2.options.autoplay) {
            self2.player.setCurrentTime(self2.options.startTime);
          }
          self2.player.getVideoWidth().then((width) => {
            self2.videoWidth = width || 1280;
          });
          self2.player.getVideoHeight().then((height) => {
            self2.videoHeight = height || 720;
          });
          let vmStarted;
          self2.player.on("timeupdate", (e) => {
            if (!vmStarted) {
              self2.fire("started", e);
              vmStarted = 1;
            }
            self2.fire("timeupdate", e);
            if (self2.options.endTime) {
              if (self2.options.endTime && e.seconds >= self2.options.endTime) {
                if (self2.options.loop) {
                  self2.play(self2.options.startTime);
                } else {
                  self2.pause();
                }
              }
            }
          });
          self2.player.on("play", (e) => {
            self2.fire("play", e);
            if (self2.options.startTime && e.seconds === 0) {
              self2.play(self2.options.startTime);
            }
          });
          self2.player.on("pause", (e) => {
            self2.fire("pause", e);
          });
          self2.player.on("ended", (e) => {
            self2.fire("ended", e);
          });
          self2.player.on("loaded", (e) => {
            self2.fire("ready", e);
          });
          self2.player.on("volumechange", (e) => {
            self2.fire("volumechange", e);
          });
          self2.player.on("error", (e) => {
            self2.fire("error", e);
          });
        }
        function addSourceToLocal(element, src, type) {
          const source = document.createElement("source");
          source.src = src;
          source.type = type;
          element.appendChild(source);
        }
        if (self2.type === "local") {
          if (!self2.$video) {
            self2.$video = document.createElement("video");
            if (self2.options.showControls) {
              self2.$video.controls = true;
            }
            if (self2.options.mute) {
              self2.$video.muted = true;
            } else if (self2.$video.volume) {
              self2.$video.volume = self2.options.volume / 100;
            }
            if (self2.options.loop) {
              self2.$video.loop = true;
            }
            self2.$video.setAttribute("playsinline", "");
            self2.$video.setAttribute("webkit-playsinline", "");
            if (self2.options.accessibilityHidden) {
              self2.$video.setAttribute("tabindex", "-1");
              self2.$video.setAttribute("aria-hidden", "true");
            }
            self2.$video.setAttribute("id", self2.playerID);
            hiddenDiv.appendChild(self2.$video);
            document.body.appendChild(hiddenDiv);
            Object.keys(self2.videoID).forEach((key) => {
              addSourceToLocal(self2.$video, self2.videoID[key], `video/${key}`);
            });
          }
          self2.player = self2.player || self2.$video;
          let locStarted;
          self2.player.addEventListener("playing", (e) => {
            if (!locStarted) {
              self2.fire("started", e);
            }
            locStarted = 1;
          });
          self2.player.addEventListener("timeupdate", function(e) {
            self2.fire("timeupdate", e);
            if (self2.options.endTime) {
              if (self2.options.endTime && this.currentTime >= self2.options.endTime) {
                if (self2.options.loop) {
                  self2.play(self2.options.startTime);
                } else {
                  self2.pause();
                }
              }
            }
          });
          self2.player.addEventListener("play", (e) => {
            self2.fire("play", e);
          });
          self2.player.addEventListener("pause", (e) => {
            self2.fire("pause", e);
          });
          self2.player.addEventListener("ended", (e) => {
            self2.fire("ended", e);
          });
          self2.player.addEventListener("loadedmetadata", function() {
            self2.videoWidth = this.videoWidth || 1280;
            self2.videoHeight = this.videoHeight || 720;
            self2.fire("ready");
            if (self2.options.autoplay) {
              self2.play(self2.options.startTime);
            }
          });
          self2.player.addEventListener("volumechange", (e) => {
            self2.getVolume((volume) => {
              self2.options.volume = volume;
            });
            self2.fire("volumechange", e);
          });
          self2.player.addEventListener("error", (e) => {
            self2.fire("error", e);
          });
        }
        callback(self2.$video);
      });
    }
    init() {
      const self2 = this;
      self2.playerID = `VideoWorker-${self2.ID}`;
    }
    loadAPI() {
      const self2 = this;
      if (YoutubeAPIadded && VimeoAPIadded) {
        return;
      }
      let src = "";
      if (self2.type === "youtube" && !YoutubeAPIadded) {
        YoutubeAPIadded = 1;
        src = "https://www.youtube.com/iframe_api";
      }
      if (self2.type === "vimeo" && !VimeoAPIadded) {
        VimeoAPIadded = 1;
        if (typeof global$1.Vimeo !== "undefined") {
          return;
        }
        src = "https://player.vimeo.com/api/player.js";
      }
      if (!src) {
        return;
      }
      let tag = document.createElement("script");
      let head = document.getElementsByTagName("head")[0];
      tag.src = src;
      head.appendChild(tag);
      head = null;
      tag = null;
    }
    onAPIready(callback) {
      const self2 = this;
      if (self2.type === "youtube") {
        if ((typeof global$1.YT === "undefined" || global$1.YT.loaded === 0) && !loadingYoutubePlayer) {
          loadingYoutubePlayer = 1;
          global$1.onYouTubeIframeAPIReady = function() {
            global$1.onYouTubeIframeAPIReady = null;
            loadingYoutubeDefer.resolve("done");
            callback();
          };
        } else if (typeof global$1.YT === "object" && global$1.YT.loaded === 1) {
          callback();
        } else {
          loadingYoutubeDefer.done(() => {
            callback();
          });
        }
      }
      if (self2.type === "vimeo") {
        if (typeof global$1.Vimeo === "undefined" && !loadingVimeoPlayer) {
          loadingVimeoPlayer = 1;
          const vimeoInterval = setInterval(() => {
            if (typeof global$1.Vimeo !== "undefined") {
              clearInterval(vimeoInterval);
              loadingVimeoDefer.resolve("done");
              callback();
            }
          }, 20);
        } else if (typeof global$1.Vimeo !== "undefined") {
          callback();
        } else {
          loadingVimeoDefer.done(() => {
            callback();
          });
        }
      }
      if (self2.type === "local") {
        callback();
      }
    }
  };
  function jarallaxVideo$1(jarallax2 = global$2.jarallax) {
    if (typeof jarallax2 === "undefined") {
      return;
    }
    const Jarallax2 = jarallax2.constructor;
    const defOnScroll = Jarallax2.prototype.onScroll;
    Jarallax2.prototype.onScroll = function() {
      const self2 = this;
      defOnScroll.apply(self2);
      const isReady = !self2.isVideoInserted && self2.video && (!self2.options.videoLazyLoading || self2.isElementInViewport) && !self2.options.disableVideo();
      if (isReady) {
        self2.isVideoInserted = true;
        self2.video.getVideo((video) => {
          const $parent = video.parentNode;
          self2.css(video, {
            position: self2.image.position,
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            width: "100%",
            height: "100%",
            maxWidth: "none",
            maxHeight: "none",
            pointerEvents: "none",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            willChange: "transform,opacity",
            margin: 0,
            zIndex: -1
          });
          self2.$video = video;
          if (self2.video.type === "local") {
            if (self2.image.src) {
              self2.$video.setAttribute("poster", self2.image.src);
            } else if (self2.image.$item && self2.image.$item.tagName === "IMG" && self2.image.$item.src) {
              self2.$video.setAttribute("poster", self2.image.$item.src);
            }
          }
          self2.image.$container.appendChild(video);
          $parent.parentNode.removeChild($parent);
          if (self2.options.onVideoInsert) {
            self2.options.onVideoInsert.call(self2);
          }
        });
      }
    };
    const defCoverImage = Jarallax2.prototype.coverImage;
    Jarallax2.prototype.coverImage = function() {
      const self2 = this;
      const imageData = defCoverImage.apply(self2);
      const node = self2.image.$item ? self2.image.$item.nodeName : false;
      if (imageData && self2.video && node && (node === "IFRAME" || node === "VIDEO")) {
        let h = imageData.image.height;
        let w = h * self2.image.width / self2.image.height;
        let ml = (imageData.container.width - w) / 2;
        let mt = imageData.image.marginTop;
        if (imageData.container.width > w) {
          w = imageData.container.width;
          h = w * self2.image.height / self2.image.width;
          ml = 0;
          mt += (imageData.image.height - h) / 2;
        }
        if (node === "IFRAME") {
          h += 400;
          mt -= 200;
        }
        self2.css(self2.$video, {
          width: `${w}px`,
          marginLeft: `${ml}px`,
          height: `${h}px`,
          marginTop: `${mt}px`
        });
      }
      return imageData;
    };
    const defInitImg = Jarallax2.prototype.initImg;
    Jarallax2.prototype.initImg = function() {
      const self2 = this;
      const defaultResult = defInitImg.apply(self2);
      if (!self2.options.videoSrc) {
        self2.options.videoSrc = self2.$item.getAttribute("data-jarallax-video") || null;
      }
      if (self2.options.videoSrc) {
        self2.defaultInitImgResult = defaultResult;
        return true;
      }
      return defaultResult;
    };
    const defCanInitParallax = Jarallax2.prototype.canInitParallax;
    Jarallax2.prototype.canInitParallax = function() {
      const self2 = this;
      let defaultResult = defCanInitParallax.apply(self2);
      if (!self2.options.videoSrc) {
        return defaultResult;
      }
      const video = new VideoWorker(self2.options.videoSrc, {
        autoplay: true,
        loop: self2.options.videoLoop,
        showControls: false,
        accessibilityHidden: true,
        startTime: self2.options.videoStartTime || 0,
        endTime: self2.options.videoEndTime || 0,
        mute: self2.options.videoVolume ? 0 : 1,
        volume: self2.options.videoVolume || 0
      });
      if (self2.options.onVideoWorkerInit) {
        self2.options.onVideoWorkerInit.call(self2, video);
      }
      function resetDefaultImage() {
        if (self2.image.$default_item) {
          self2.image.$item = self2.image.$default_item;
          self2.image.$item.style.display = "block";
          self2.coverImage();
          self2.onScroll();
        }
      }
      if (video.isValid()) {
        if (this.options.disableParallax()) {
          defaultResult = true;
          self2.image.position = "absolute";
          self2.options.type = "scroll";
          self2.options.speed = 1;
        }
        if (!defaultResult) {
          if (!self2.defaultInitImgResult) {
            video.getImageURL((url) => {
              const curStyle = self2.$item.getAttribute("style");
              if (curStyle) {
                self2.$item.setAttribute("data-jarallax-original-styles", curStyle);
              }
              self2.css(self2.$item, {
                "background-image": `url("${url}")`,
                "background-position": "center",
                "background-size": "cover"
              });
            });
          }
        } else {
          video.on("ready", () => {
            if (self2.options.videoPlayOnlyVisible) {
              const oldOnScroll = self2.onScroll;
              self2.onScroll = function() {
                oldOnScroll.apply(self2);
                if (!self2.videoError && (self2.options.videoLoop || !self2.options.videoLoop && !self2.videoEnded)) {
                  if (self2.isVisible()) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }
              };
            } else {
              video.play();
            }
          });
          video.on("started", () => {
            self2.image.$default_item = self2.image.$item;
            self2.image.$item = self2.$video;
            self2.image.width = self2.video.videoWidth || 1280;
            self2.image.height = self2.video.videoHeight || 720;
            self2.coverImage();
            self2.onScroll();
            if (self2.image.$default_item) {
              self2.image.$default_item.style.display = "none";
            }
          });
          video.on("ended", () => {
            self2.videoEnded = true;
            if (!self2.options.videoLoop) {
              resetDefaultImage();
            }
          });
          video.on("error", () => {
            self2.videoError = true;
            resetDefaultImage();
          });
          self2.video = video;
          if (!self2.defaultInitImgResult) {
            self2.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
            if (video.type !== "local") {
              video.getImageURL((url) => {
                self2.image.bgImage = `url("${url}")`;
                self2.init();
              });
              return false;
            }
          }
        }
      }
      return defaultResult;
    };
    const defDestroy = Jarallax2.prototype.destroy;
    Jarallax2.prototype.destroy = function() {
      const self2 = this;
      if (self2.image.$default_item) {
        self2.image.$item = self2.image.$default_item;
        delete self2.image.$default_item;
      }
      defDestroy.apply(self2);
    };
  }
  var jarallax = jarallax$1;
  var jarallaxVideo = function jarallaxVideo2() {
    return jarallaxVideo$1(jarallax);
  };

  // node_modules/.pnpm/bigpicture@2.6.2/node_modules/bigpicture/src/BigPicture.js
  var el;
  var initialized;
  var container;
  var displayElement;
  var displayImage;
  var displayVideo;
  var displayAudio;
  var iframeContainer;
  var iframeSiteVid;
  var imgSrc;
  var closeButton;
  var siteVidID;
  var isLoading;
  var checkMediaTimeout;
  var loadingIcon;
  var caption;
  var captionText;
  var captionContent;
  var captionHideButton;
  var isOpen;
  var galleryOpen;
  var isClosing;
  var imgCache = [];
  var remoteImage;
  var animationStart;
  var animationEnd;
  var onChangeImage;
  var rightArrowBtn;
  var leftArrowBtn;
  var galleryPosition;
  var galleryEls;
  var galleryCounter;
  var preloadedImages = {};
  var supportsTouch;
  var opts;
  var appendEl = "appendChild";
  var createEl = "createElement";
  var removeEl = "removeChild";
  var BigPicture_default = (options) => {
    initialized || initialize(options);
    if (isLoading) {
      clearTimeout(checkMediaTimeout);
      removeContainer();
    }
    opts = options;
    siteVidID = options.ytSrc || options.vimeoSrc;
    animationStart = options.animationStart;
    animationEnd = options.animationEnd;
    onChangeImage = options.onChangeImage;
    el = options.el;
    remoteImage = false;
    captionContent = el.getAttribute("data-caption");
    if (options.gallery) {
      makeGallery(options.gallery, options.position);
    } else if (siteVidID || options.iframeSrc) {
      displayElement = iframeContainer;
      createIframe();
    } else if (options.imgSrc) {
      remoteImage = true;
      imgSrc = options.imgSrc;
      !~imgCache.indexOf(imgSrc) && toggleLoadingIcon(true);
      displayElement = displayImage;
      displayElement.src = imgSrc;
    } else if (options.audio) {
      toggleLoadingIcon(true);
      displayElement = displayAudio;
      displayElement.src = options.audio;
      checkMedia("audio file");
    } else if (options.vidSrc) {
      toggleLoadingIcon(true);
      if (options.dimensions) {
        changeCSS(displayVideo, `width:${options.dimensions[0]}px`);
      }
      makeVidSrc(options.vidSrc);
      checkMedia("video");
    } else {
      displayElement = displayImage;
      displayElement.src = el.tagName === "IMG" ? el.src : window.getComputedStyle(el).backgroundImage.replace(/^url|[(|)|'|"]/g, "");
    }
    container[appendEl](displayElement);
    document.body[appendEl](container);
    return {
      close,
      opts,
      updateDimensions,
      display: displayElement,
      next: () => updateGallery(1),
      prev: () => updateGallery(-1)
    };
  };
  function initialize(options) {
    let startX, isPinch;
    function createCloseButton(className) {
      const el2 = document[createEl]("button");
      el2.className = className;
      el2.innerHTML = '<svg viewBox="0 0 48 48"><path d="M28 24L47 5a3 3 0 1 0-4-4L24 20 5 1a3 3 0 1 0-4 4l19 19L1 43a3 3 0 1 0 4 4l19-19 19 19a3 3 0 0 0 4 0v-4L28 24z"/></svg>';
      return el2;
    }
    function createArrowSymbol(direction, style2) {
      const el2 = document[createEl]("button");
      el2.className = "bp-lr";
      el2.innerHTML = '<svg viewBox="0 0 129 129" height="70" fill="#fff"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54 53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"/></svg>';
      changeCSS(el2, style2);
      el2.onclick = (e) => {
        e.stopPropagation();
        updateGallery(direction);
      };
      return el2;
    }
    const style = document[createEl]("STYLE");
    const containerColor = options && options.overlayColor ? options.overlayColor : "rgba(0,0,0,.7)";
    style.innerHTML = `#bp_caption,#bp_container{bottom:0;left:0;right:0;position:fixed;opacity:0}#bp_container>*,#bp_loader{position:absolute;right:0;z-index:10}#bp_container,#bp_caption,#bp_container svg{pointer-events:none}#bp_container{top:0;z-index:9999;background:${containerColor};opacity:0;transition:opacity .35s}#bp_loader{top:0;left:0;bottom:0;display:flex;align-items:center;cursor:wait;background:0;z-index:9}#bp_loader svg{width:50%;max-width:300px;max-height:50%;margin:auto;animation:bpturn 1s infinite linear}#bp_aud,#bp_container img,#bp_sv,#bp_vid{user-select:none;max-height:96%;max-width:96%;top:0;bottom:0;left:0;margin:auto;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1}#bp_sv{background:#111}#bp_sv svg{width:66px}#bp_caption{font-size:.9em;padding:1.3em;background:rgba(15,15,15,.94);color:#fff;text-align:center;transition:opacity .3s}#bp_aud{width:650px;top:calc(50% - 20px);bottom:auto;box-shadow:none}#bp_count{left:0;right:auto;padding:14px;color:rgba(255,255,255,.7);font-size:22px;cursor:default}#bp_container button{position:absolute;border:0;outline:0;background:0;cursor:pointer;transition:all .1s}#bp_container>.bp-x{padding:0;height:41px;width:41px;border-radius:100%;top:8px;right:14px;opacity:.8;line-height:1}#bp_container>.bp-x:focus,#bp_container>.bp-x:hover{background:rgba(255,255,255,.2)}.bp-x svg,.bp-xc svg{height:21px;width:20px;fill:#fff;vertical-align:top;}.bp-xc svg{width:16px}#bp_container .bp-xc{left:2%;bottom:100%;padding:9px 20px 7px;background:#d04444;border-radius:2px 2px 0 0;opacity:.85}#bp_container .bp-xc:focus,#bp_container .bp-xc:hover{opacity:1}.bp-lr{top:50%;top:calc(50% - 130px);padding:99px 0;width:6%;background:0;border:0;opacity:.4;transition:opacity .1s}.bp-lr:focus,.bp-lr:hover{opacity:.8}@keyframes bpf{50%{transform:translatex(15px)}100%{transform:none}}@keyframes bpl{50%{transform:translatex(-15px)}100%{transform:none}}@keyframes bpfl{0%{opacity:0;transform:translatex(70px)}100%{opacity:1;transform:none}}@keyframes bpfr{0%{opacity:0;transform:translatex(-70px)}100%{opacity:1;transform:none}}@keyframes bpfol{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(-70px)}}@keyframes bpfor{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(70px)}}@keyframes bpturn{0%{transform:none}100%{transform:rotate(360deg)}}@media (max-width:600px){.bp-lr{font-size:15vw}}`;
    document.head[appendEl](style);
    container = document[createEl]("DIV");
    container.id = "bp_container";
    container.onclick = close;
    closeButton = createCloseButton("bp-x");
    container[appendEl](closeButton);
    if ("ontouchend" in window && window.visualViewport) {
      supportsTouch = true;
      container.ontouchstart = ({ touches, changedTouches }) => {
        isPinch = touches.length > 1;
        startX = changedTouches[0].pageX;
      };
      container.ontouchend = ({ changedTouches }) => {
        if (galleryOpen && !isPinch && window.visualViewport.scale <= 1) {
          let distX = changedTouches[0].pageX - startX;
          distX < -30 && updateGallery(1);
          distX > 30 && updateGallery(-1);
        }
      };
    }
    displayImage = document[createEl]("IMG");
    displayVideo = document[createEl]("VIDEO");
    displayVideo.id = "bp_vid";
    displayVideo.setAttribute("playsinline", true);
    displayVideo.controls = true;
    displayVideo.loop = true;
    displayAudio = document[createEl]("audio");
    displayAudio.id = "bp_aud";
    displayAudio.controls = true;
    displayAudio.loop = true;
    galleryCounter = document[createEl]("span");
    galleryCounter.id = "bp_count";
    caption = document[createEl]("DIV");
    caption.id = "bp_caption";
    captionHideButton = createCloseButton("bp-xc");
    captionHideButton.onclick = toggleCaption.bind(null, false);
    caption[appendEl](captionHideButton);
    captionText = document[createEl]("SPAN");
    caption[appendEl](captionText);
    container[appendEl](caption);
    rightArrowBtn = createArrowSymbol(1, "transform:scalex(-1)");
    leftArrowBtn = createArrowSymbol(-1, "left:0;right:auto");
    loadingIcon = document[createEl]("DIV");
    loadingIcon.id = "bp_loader";
    loadingIcon.innerHTML = '<svg viewbox="0 0 32 32" fill="#fff" opacity=".8"><path d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24" fill="#000" opacity=".5"/><path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"/></svg>';
    iframeContainer = document[createEl]("DIV");
    iframeContainer.id = "bp_sv";
    iframeSiteVid = document[createEl]("IFRAME");
    iframeSiteVid.setAttribute("allowfullscreen", true);
    iframeSiteVid.allow = "autoplay; fullscreen";
    iframeSiteVid.onload = () => iframeContainer[removeEl](loadingIcon);
    changeCSS(iframeSiteVid, "border:0;position:absolute;height:100%;width:100%;left:0;top:0");
    iframeContainer[appendEl](iframeSiteVid);
    displayImage.onload = open;
    displayImage.onerror = open.bind(null, "image");
    window.addEventListener("resize", () => {
      galleryOpen || isLoading && toggleLoadingIcon(true);
      displayElement === iframeContainer && updateDimensions();
    });
    document.addEventListener("keyup", ({ keyCode }) => {
      keyCode === 27 && isOpen && close();
      if (galleryOpen) {
        keyCode === 39 && updateGallery(1);
        keyCode === 37 && updateGallery(-1);
        keyCode === 38 && updateGallery(10);
        keyCode === 40 && updateGallery(-10);
      }
    });
    document.addEventListener("keydown", (e) => {
      const usedKeys = [37, 38, 39, 40];
      if (galleryOpen && ~usedKeys.indexOf(e.keyCode)) {
        e.preventDefault();
      }
    });
    document.addEventListener("focus", (e) => {
      if (isOpen && !container.contains(e.target)) {
        e.stopPropagation();
        closeButton.focus();
      }
    }, true);
    initialized = true;
  }
  function getRect() {
    const { top, left, width, height } = el.getBoundingClientRect();
    const leftOffset = left - (container.clientWidth - width) / 2;
    const centerTop = top - (container.clientHeight - height) / 2;
    const scaleWidth = el.clientWidth / displayElement.clientWidth;
    const scaleHeight = el.clientHeight / displayElement.clientHeight;
    return `transform:translate3D(${leftOffset}px, ${centerTop}px, 0) scale3D(${scaleWidth}, ${scaleHeight}, 0)`;
  }
  function makeVidSrc(source) {
    if (Array.isArray(source)) {
      displayElement = displayVideo.cloneNode();
      source.forEach((src) => {
        const source2 = document[createEl]("SOURCE");
        source2.src = src;
        source2.type = `video/${src.match(/.(\w+)$/)[1]}`;
        displayElement[appendEl](source2);
      });
    } else {
      displayElement = displayVideo;
      displayElement.src = source;
    }
  }
  function makeGallery(gallery, position) {
    let galleryAttribute = opts.galleryAttribute || "data-bp";
    if (Array.isArray(gallery)) {
      galleryPosition = position || 0;
      galleryEls = gallery;
      captionContent = gallery[galleryPosition].caption;
    } else {
      galleryEls = [].slice.call(typeof gallery === "string" ? document.querySelectorAll(`${gallery} [${galleryAttribute}]`) : gallery);
      const elIndex = galleryEls.indexOf(el);
      galleryPosition = position === 0 || position ? position : elIndex !== -1 ? elIndex : 0;
      galleryEls = galleryEls.map((el2) => ({
        el: el2,
        src: el2.getAttribute(galleryAttribute),
        caption: el2.getAttribute("data-caption")
      }));
    }
    remoteImage = true;
    imgSrc = galleryEls[galleryPosition].src;
    !~imgCache.indexOf(imgSrc) && toggleLoadingIcon(true);
    if (galleryEls.length > 1) {
      container[appendEl](galleryCounter);
      galleryCounter.innerHTML = `${galleryPosition + 1}/${galleryEls.length}`;
      if (!supportsTouch) {
        container[appendEl](rightArrowBtn);
        container[appendEl](leftArrowBtn);
      }
    } else {
      galleryEls = false;
    }
    displayElement = displayImage;
    displayElement.src = imgSrc;
  }
  function updateGallery(movement) {
    const galleryLength = galleryEls.length - 1;
    if (isLoading) {
      return;
    }
    const isEnd = movement > 0 && galleryPosition === galleryLength || movement < 0 && !galleryPosition;
    if (isEnd) {
      if (!opts.loop) {
        changeCSS(displayImage, "");
        setTimeout(changeCSS, 9, displayImage, `animation:${movement > 0 ? "bpl" : "bpf"} .3s;transition:transform .35s`);
        return;
      }
      galleryPosition = movement > 0 ? -1 : galleryLength + 1;
    }
    galleryPosition = Math.max(0, Math.min(galleryPosition + movement, galleryLength));
    [galleryPosition - 1, galleryPosition, galleryPosition + 1].forEach((position) => {
      position = Math.max(0, Math.min(position, galleryLength));
      if (preloadedImages[position])
        return;
      const src = galleryEls[position].src;
      const img = document[createEl]("IMG");
      img.addEventListener("load", addToImgCache.bind(null, src));
      img.src = src;
      preloadedImages[position] = img;
    });
    if (preloadedImages[galleryPosition].complete) {
      return changeGalleryImage(movement);
    }
    isLoading = true;
    changeCSS(loadingIcon, "opacity:.4;");
    container[appendEl](loadingIcon);
    preloadedImages[galleryPosition].onload = () => {
      galleryOpen && changeGalleryImage(movement);
    };
    preloadedImages[galleryPosition].onerror = () => {
      galleryEls[galleryPosition] = {
        error: "Error loading image"
      };
      galleryOpen && changeGalleryImage(movement);
    };
  }
  function changeGalleryImage(movement) {
    if (isLoading) {
      container[removeEl](loadingIcon);
      isLoading = false;
    }
    const activeEl = galleryEls[galleryPosition];
    if (activeEl.error) {
      alert(activeEl.error);
    } else {
      const oldimg = container.querySelector("img:last-of-type");
      displayImage = displayElement = preloadedImages[galleryPosition];
      changeCSS(displayImage, `animation:${movement > 0 ? "bpfl" : "bpfr"} .35s;transition:transform .35s`);
      changeCSS(oldimg, `animation:${movement > 0 ? "bpfol" : "bpfor"} .35s both`);
      container[appendEl](displayImage);
      if (activeEl.el) {
        el = activeEl.el;
      }
    }
    galleryCounter.innerHTML = `${galleryPosition + 1}/${galleryEls.length}`;
    toggleCaption(galleryEls[galleryPosition].caption);
    onChangeImage && onChangeImage([displayImage, galleryEls[galleryPosition]]);
  }
  function createIframe() {
    let url;
    const prefix2 = "https://";
    const suffix = "autoplay=1";
    if (opts.ytSrc) {
      url = `${prefix2}www.youtube${opts.ytNoCookie ? "-nocookie" : ""}.com/embed/${siteVidID}?html5=1&rel=0&playsinline=1&${suffix}`;
    } else if (opts.vimeoSrc) {
      url = `${prefix2}player.vimeo.com/video/${siteVidID}?${suffix}`;
    } else if (opts.iframeSrc) {
      url = opts.iframeSrc;
    }
    changeCSS(loadingIcon, "");
    iframeContainer[appendEl](loadingIcon);
    iframeSiteVid.src = url;
    updateDimensions();
    setTimeout(open, 9);
  }
  function updateDimensions() {
    let height;
    let width;
    const windowHeight = window.innerHeight * 0.95;
    const windowWidth = window.innerWidth * 0.95;
    const windowAspect = windowHeight / windowWidth;
    const [dimensionWidth, dimensionHeight] = opts.dimensions || [1920, 1080];
    const iframeAspect = dimensionHeight / dimensionWidth;
    if (iframeAspect > windowAspect) {
      height = Math.min(dimensionHeight, windowHeight);
      width = height / iframeAspect;
    } else {
      width = Math.min(dimensionWidth, windowWidth);
      height = width * iframeAspect;
    }
    iframeContainer.style.cssText += `width:${width}px;height:${height}px;`;
  }
  function checkMedia(errMsg) {
    if (~[1, 4].indexOf(displayElement.readyState)) {
      open();
      setTimeout(() => {
        displayElement.play();
      }, 99);
    } else if (displayElement.error) {
      open(errMsg);
    } else {
      checkMediaTimeout = setTimeout(checkMedia, 35, errMsg);
    }
  }
  function toggleLoadingIcon(bool) {
    if (opts.noLoader) {
      return;
    }
    bool && changeCSS(loadingIcon, `top:${el.offsetTop}px;left:${el.offsetLeft}px;height:${el.clientHeight}px;width:${el.clientWidth}px`);
    el.parentElement[bool ? appendEl : removeEl](loadingIcon);
    isLoading = bool;
  }
  function toggleCaption(captionContent2) {
    if (captionContent2) {
      captionText.innerHTML = captionContent2;
    }
    changeCSS(caption, `opacity:${captionContent2 ? `1;pointer-events:auto` : "0"}`);
  }
  function addToImgCache(url) {
    !~imgCache.indexOf(url) && imgCache.push(url);
  }
  function open(err) {
    isLoading && toggleLoadingIcon();
    animationStart && animationStart();
    if (typeof err === "string") {
      removeContainer();
      return opts.onError ? opts.onError() : alert(`Error: The requested ${err} could not be loaded.`);
    }
    remoteImage && addToImgCache(imgSrc);
    displayElement.style.cssText += getRect();
    changeCSS(container, `opacity:1;pointer-events:auto`);
    if (animationEnd) {
      animationEnd = setTimeout(animationEnd, 410);
    }
    isOpen = true;
    galleryOpen = !!galleryEls;
    setTimeout(() => {
      displayElement.style.cssText += "transition:transform .35s;transform:none";
      captionContent && setTimeout(toggleCaption, 250, captionContent);
    }, 60);
  }
  function close(e) {
    const target = e ? e.target : container;
    const clickEls = [
      caption,
      captionHideButton,
      displayVideo,
      displayAudio,
      captionText,
      leftArrowBtn,
      rightArrowBtn,
      loadingIcon
    ];
    target.blur();
    if (isClosing || ~clickEls.indexOf(target)) {
      return;
    }
    displayElement.style.cssText += getRect();
    changeCSS(container, "pointer-events:auto");
    setTimeout(removeContainer, 350);
    clearTimeout(animationEnd);
    isOpen = false;
    isClosing = true;
  }
  function removeContainer() {
    let srcEl = displayElement === iframeContainer ? iframeSiteVid : displayElement;
    srcEl.removeAttribute("src");
    document.body[removeEl](container);
    container[removeEl](displayElement);
    changeCSS(container, "");
    changeCSS(displayElement, "");
    toggleCaption(false);
    if (galleryOpen) {
      const images = container.querySelectorAll("img");
      for (let i = 0; i < images.length; i++) {
        container[removeEl](images[i]);
      }
      isLoading && container[removeEl](loadingIcon);
      container[removeEl](galleryCounter);
      galleryOpen = galleryEls = false;
      preloadedImages = {};
      supportsTouch || container[removeEl](rightArrowBtn);
      supportsTouch || container[removeEl](leftArrowBtn);
      displayImage.onload = open;
      displayImage.onerror = open.bind(null, "image");
    }
    opts.onClose && opts.onClose();
    isClosing = isLoading = false;
  }
  function changeCSS({ style }, newStyle) {
    style.cssText = newStyle;
  }

  // DistributionPackages/Abte.Site/Resources/Private/Fusion/Alicante.js
  import_aos.default.init();
  window.Alpine = module_default;
  module_default.start();
  jarallaxVideo();
  (function() {
    var imageLinks = document.querySelectorAll("[data-bp]");
    for (var i = 0; i < imageLinks.length; i++) {
      imageLinks[i].addEventListener("click", function(e) {
        e.preventDefault();
        BigPicture_default({
          el: e.target,
          gallery: "main",
          animationStart: function() {
            document.documentElement.style.overflowY = "hidden";
            document.body.style.overflowY = "scroll";
          },
          onClose: function() {
            document.documentElement.style.overflowY = "auto";
            document.body.style.overflowY = "auto";
          }
        });
      });
    }
  })();
})();
/*! For license information please see Alicante.js.LEGAL.txt */
//# sourceMappingURL=Alicante.js.map
