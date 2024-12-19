// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "2",

      macros: [
        { function: "__e" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
      ],
      tags: [
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "G-083C66RB80",
          tag_id: 5,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.init" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_direct_google_requests",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __e: { 2: true, 4: true },
      __googtag: { 1: 10 },
    },
    blob: { 1: "2" },
    permissions: {
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
    },

    security_groups: {
      google: ["__e", "__googtag"],
    },
  };

  var h,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    fa = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    ha = fa(this),
    ia = function (a, b) {
      if (b)
        a: {
          for (var c = ha, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            k = c[g],
            m = b(k);
          m != k &&
            m != null &&
            ba(c, g, { configurable: !0, writable: !0, value: m });
        }
    };
  ia("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.j = f;
      ba(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.j;
    };
    var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  var ja =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ka;
  if (typeof Object.setPrototypeOf == "function") ka = Object.setPrototypeOf;
  else {
    var la;
    a: {
      var ma = { a: !0 },
        pa = {};
      try {
        pa.__proto__ = ma;
        la = pa.a;
        break a;
      } catch (a) {}
      la = !1;
    }
    ka = la
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var qa = ka,
    ra = function (a, b) {
      a.prototype = ja(b.prototype);
      a.prototype.constructor = a;
      if (qa) qa(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.wo = b.prototype;
    },
    l = function (a) {
      var b =
        typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: aa(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    sa = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ta = function (a) {
      return a instanceof Array ? a : sa(l(a));
    },
    wa = function (a) {
      return va(a, a);
    },
    va = function (a, b) {
      a.raw = b;
      Object.freeze && (Object.freeze(a), Object.freeze(b));
      return a;
    },
    xa =
      typeof Object.assign == "function"
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ia("Object.assign", function (a) {
    return a || xa;
  });
  var ya = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var za = this || self;
  var Ba = function (a, b) {
    this.type = a;
    this.data = b;
  };
  var Ca = function () {
    this.map = {};
    this.j = {};
  };
  h = Ca.prototype;
  h.get = function (a) {
    return this.map["dust." + a];
  };
  h.set = function (a, b) {
    var c = "dust." + a;
    this.j.hasOwnProperty(c) || (this.map[c] = b);
  };
  h.wi = function (a, b) {
    this.set(a, b);
    this.j["dust." + a] = !0;
  };
  h.has = function (a) {
    return this.map.hasOwnProperty("dust." + a);
  };
  h.remove = function (a) {
    var b = "dust." + a;
    this.j.hasOwnProperty(b) || delete this.map[b];
  };
  var Da = function (a, b) {
    var c = [],
      d;
    for (d in a.map)
      if (a.map.hasOwnProperty(d)) {
        var e = d.substring(5);
        switch (b) {
          case 1:
            c.push(e);
            break;
          case 2:
            c.push(a.map[d]);
            break;
          case 3:
            c.push([e, a.map[d]]);
        }
      }
    return c;
  };
  Ca.prototype.la = function () {
    return Da(this, 1);
  };
  Ca.prototype.Vb = function () {
    return Da(this, 2);
  };
  Ca.prototype.Eb = function () {
    return Da(this, 3);
  };
  var Ea = function () {};
  Ea.prototype.reset = function () {};
  var Fa = function (a, b) {
    this.K = a;
    this.parent = b;
    this.j = this.C = void 0;
    this.vc = !1;
    this.H = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Ca();
  };
  Fa.prototype.add = function (a, b) {
    Ga(this, a, b, !1);
  };
  var Ga = function (a, b, c, d) {
    a.vc || (d ? a.values.wi(b, c) : a.values.set(b, c));
  };
  Fa.prototype.set = function (a, b) {
    this.vc ||
      (!this.values.has(a) && this.parent && this.parent.has(a)
        ? this.parent.set(a, b)
        : this.values.set(a, b));
  };
  Fa.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
      ? this.parent.get(a)
      : void 0;
  };
  Fa.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Ha = function (a) {
    var b = new Fa(a.K, a);
    a.C && (b.C = a.C);
    b.H = a.H;
    b.j = a.j;
    return b;
  };
  Fa.prototype.Kd = function () {
    return this.K;
  };
  Fa.prototype.Ga = function () {
    this.vc = !0;
  };
  function Ia(a, b) {
    for (
      var c, d = l(b), e = d.next();
      !e.done && !((c = Ja(a, e.value)), c instanceof Ba);
      e = d.next()
    );
    return c;
  }
  function Ja(a, b) {
    try {
      var c = l(b),
        d = c.next().value,
        e = sa(c),
        f = a.get(String(d));
      if (!f || typeof f.invoke !== "function")
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return f.invoke.apply(f, [a].concat(ta(e)));
    } catch (k) {
      var g = a.C;
      g && g(k, b.context ? { id: b[0], line: b.context.line } : null);
      throw k;
    }
  }
  var Ka = function () {
    this.C = new Ea();
    this.j = new Fa(this.C);
  };
  h = Ka.prototype;
  h.Kd = function () {
    return this.C;
  };
  h.execute = function (a) {
    return this.ui([a].concat(ta(ya.apply(1, arguments))));
  };
  h.ui = function () {
    for (
      var a, b = l(ya.apply(0, arguments)), c = b.next();
      !c.done;
      c = b.next()
    )
      a = Ja(this.j, c.value);
    return a;
  };
  h.Al = function (a) {
    var b = ya.apply(1, arguments),
      c = Ha(this.j);
    c.j = a;
    for (var d, e = l(b), f = e.next(); !f.done; f = e.next())
      d = Ja(c, f.value);
    return d;
  };
  h.Ga = function () {
    this.j.Ga();
  };
  var La = function () {
    this.ma = !1;
    this.R = new Ca();
  };
  h = La.prototype;
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.ma || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.wi = function (a, b) {
    this.ma || this.R.wi(a, b);
  };
  h.remove = function (a) {
    this.ma || this.R.remove(a);
  };
  h.la = function () {
    return this.R.la();
  };
  h.Vb = function () {
    return this.R.Vb();
  };
  h.Eb = function () {
    return this.R.Eb();
  };
  h.Ga = function () {
    this.ma = !0;
  };
  h.vc = function () {
    return this.ma;
  };
  function Ma() {
    for (var a = Na, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Oa() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Na, Pa;
  function Qa(a) {
    Na = Na || Oa();
    Pa = Pa || Ma();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Na[m], Na[n], Na[p], Na[q]);
    }
    return b.join("");
  }
  function Ta(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Pa[n];
        if (p != null) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Na = Na || Oa();
    Pa = Pa || Ma();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (k === 64 && e === -1) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      g !== 64 &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        k !== 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var Ua = {};
  function Va(a, b) {
    Ua[a] = Ua[a] || [];
    Ua[a][b] = !0;
  }
  function Wa(a) {
    var b = Ua[a];
    if (!b || b.length === 0) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    d > 0 && c.push(String.fromCharCode(d));
    return Qa(c.join("")).replace(/\.+$/, "");
  }
  function Xa() {
    for (var a = [], b = Ua.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return a.length > 0 ? a : void 0;
  }
  function Ya() {}
  function Za(a) {
    return typeof a === "function";
  }
  function z(a) {
    return typeof a === "string";
  }
  function $a(a) {
    return typeof a === "number" && !isNaN(a);
  }
  function ab(a) {
    return Array.isArray(a) ? a : [a];
  }
  function bb(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function cb(a, b) {
    if (!$a(a) || !$a(b) || a > b) (a = 0), (b = 2147483647);
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function db(a, b) {
    for (var c = new eb(), d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
    return !1;
  }
  function fb(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function gb(a) {
    return (
      !!a &&
      (Object.prototype.toString.call(a) === "[object Arguments]" ||
        Object.prototype.hasOwnProperty.call(a, "callee"))
    );
  }
  function hb(a) {
    return Math.round(Number(a)) || 0;
  }
  function ib(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a;
  }
  function jb(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b;
  }
  function lb(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : "";
  }
  function mb() {
    return new Date(Date.now());
  }
  function nb() {
    return mb().getTime();
  }
  var eb = function () {
    this.prefix = "gtm.";
    this.values = {};
  };
  eb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  eb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  eb.prototype.contains = function (a) {
    return this.get(a) !== void 0;
  };
  function ob(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }
  function pb(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {}
      }
    };
  }
  function qb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function rb(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }
  function sb(a, b) {
    return a.length >= b.length && a.substring(0, b.length) === b;
  }
  function tb(a, b) {
    return (
      a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    );
  }
  function ub(a, b) {
    var c = A;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (b.indexOf(d) >= 0) return;
    }
    return d;
  }
  function vb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }
  var wb = /^\w{1,9}$/;
  function xb(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    fb(a, function (d, e) {
      wb.test(d) && e && c.push(d);
    });
    return c.join(b);
  }
  function yb(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0));
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c;
  }
  function zb(a) {
    if (!a) return a;
    var b = a;
    try {
      b = decodeURIComponent(a);
    } catch (d) {}
    var c = b.split(",");
    return c.length === 2 && c[0] === c[1] ? c[0] : a;
  }
  function Ab(a, b, c) {
    function d(n) {
      var p = n.split("=")[0];
      if (a.indexOf(p) < 0) return n;
      if (c !== void 0) return p + "=" + c;
    }
    function e(n) {
      return n
        .split("&")
        .map(d)
        .filter(function (p) {
          return p !== void 0;
        })
        .join("&");
    }
    var f = b.href.split(/[?#]/)[0],
      g = b.search,
      k = b.hash;
    g[0] === "?" && (g = g.substring(1));
    k[0] === "#" && (k = k.substring(1));
    g = e(g);
    k = e(k);
    g !== "" && (g = "?" + g);
    k !== "" && (k = "#" + k);
    var m = "" + f + g + k;
    m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
    return m;
  }
  function Bb(a) {
    for (var b = 0; b < 3; ++b)
      try {
        var c = decodeURIComponent(a).replace(/\+/g, " ");
        if (c === a) break;
        a = c;
      } catch (d) {
        return "";
      }
    return a;
  } /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
  var Cb = globalThis.trustedTypes,
    Db;
  function Eb() {
    var a = null;
    if (!Cb) return a;
    try {
      var b = function (c) {
        return c;
      };
      a = Cb.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b,
      });
    } catch (c) {}
    return a;
  }
  function Fb() {
    Db === void 0 && (Db = Eb());
    return Db;
  }
  var Gb = function (a) {
    this.j = a;
  };
  Gb.prototype.toString = function () {
    return this.j + "";
  };
  function Hb(a) {
    var b = a,
      c = Fb();
    return new Gb(c ? c.createScriptURL(b) : b);
  }
  function Ib(a) {
    if (a instanceof Gb) return a.j;
    throw Error("");
  }
  var Jb = wa([""]),
    Kb = va(["\x00"], ["\\0"]),
    Lb = va(["\n"], ["\\n"]),
    Mb = va(["\x00"], ["\\u0000"]);
  function Nb(a) {
    return a.toString().indexOf("`") === -1;
  }
  Nb(function (a) {
    return a(Jb);
  }) ||
    Nb(function (a) {
      return a(Kb);
    }) ||
    Nb(function (a) {
      return a(Lb);
    }) ||
    Nb(function (a) {
      return a(Mb);
    });
  var Ob = function (a) {
    this.j = a;
  };
  Ob.prototype.toString = function () {
    return this.j;
  };
  var Pb = function (a) {
    this.Om = a;
  };
  function Qb(a) {
    return new Pb(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var Rb = [
    Qb("data"),
    Qb("http"),
    Qb("https"),
    Qb("mailto"),
    Qb("ftp"),
    new Pb(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function Sb(a) {
    var b;
    b = b === void 0 ? Rb : b;
    if (a instanceof Ob) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof Pb && d.Om(a)) return new Ob(a);
    }
  }
  var Tb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function Ub(a) {
    var b;
    if (a instanceof Ob)
      if (a instanceof Ob) b = a.j;
      else throw Error("");
    else b = Tb.test(a) ? a : void 0;
    return b;
  }
  var Wb = function () {
    this.j = Vb[0].toLowerCase();
  };
  Wb.prototype.toString = function () {
    return this.j;
  };
  var Xb = function (a) {
    this.j = a;
  };
  Xb.prototype.toString = function () {
    return this.j + "";
  };
  function Yb(a, b) {
    var c = [new Wb()];
    if (c.length === 0) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof Wb) g = f.j;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return e.indexOf(f) !== 0;
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function Zb(a, b) {
    var c = Ub(b);
    c !== void 0 && (a.action = c);
  }
  var $b = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function ac(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a;
  }
  var A = window,
    bc = window.history,
    E = document,
    cc = navigator;
  function dc() {
    var a;
    try {
      a = cc.serviceWorker;
    } catch (b) {
      return;
    }
    return a;
  }
  var ec = E.currentScript,
    fc = ec && ec.src;
  function gc(a, b) {
    var c = A[a];
    A[a] = c === void 0 ? b : c;
    return A[a];
  }
  function hc(a) {
    return (cc.userAgent || "").indexOf(a) !== -1;
  }
  var ic = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    jc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function kc(a, b, c) {
    b &&
      fb(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  function lc(a, b, c, d, e) {
    var f = E.createElement("script");
    kc(f, d, ic);
    f.type = "text/javascript";
    f.async = d && d.async === !1 ? !1 : !0;
    var g;
    g = Hb(ac(a));
    f.src = Ib(g);
    var k,
      m = (f.ownerDocument && f.ownerDocument.defaultView) || window;
    m = m === void 0 ? document : m;
    var n,
      p,
      q =
        (p = (n = "document" in m ? m.document : m).querySelector) == null
          ? void 0
          : p.call(n, "script[nonce]");
    (k = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") &&
      f.setAttribute("nonce", k);
    b && (f.onload = b);
    c && (f.onerror = c);
    if (e) e.appendChild(f);
    else {
      var r = E.getElementsByTagName("script")[0] || E.body || E.head;
      r.parentNode.insertBefore(f, r);
    }
    return f;
  }
  function nc() {
    if (fc) {
      var a = fc.toLowerCase();
      if (a.indexOf("https://") === 0) return 2;
      if (a.indexOf("http://") === 0) return 3;
    }
    return 1;
  }
  function oc(a, b, c, d, e) {
    var f;
    f = f === void 0 ? !0 : f;
    var g = e,
      k = !1;
    g || ((g = E.createElement("iframe")), (k = !0));
    kc(g, c, jc);
    d &&
      fb(d, function (n, p) {
        g.dataset[n] = p;
      });
    f &&
      ((g.height = "0"),
      (g.width = "0"),
      (g.style.display = "none"),
      (g.style.visibility = "hidden"));
    a !== void 0 && (g.src = a);
    if (k) {
      var m = (E.body && E.body.lastChild) || E.body || E.head;
      m.parentNode.insertBefore(g, m);
    }
    b && (g.onload = b);
    return g;
  }
  function pc(a, b, c, d) {
    qc(a, b, c, d);
  }
  function rc(a, b, c, d) {
    a.addEventListener
      ? a.addEventListener(b, c, !!d)
      : a.attachEvent && a.attachEvent("on" + b, c);
  }
  function sc(a, b, c) {
    a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : a.detachEvent && a.detachEvent("on" + b, c);
  }
  function G(a) {
    A.setTimeout(a, 0);
  }
  function tc(a, b) {
    return a && b && a.attributes && a.attributes[b]
      ? a.attributes[b].value
      : null;
  }
  function uc(a) {
    var b = a.innerText || a.textContent || "";
    b &&
      b !== " " &&
      ((b = b.replace(/^[\s\xa0]+/g, "")), (b = b.replace(/[\s\xa0]+$/g, "")));
    b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
    return b;
  }
  function vc(a) {
    var b = E.createElement("div"),
      c = b,
      d,
      e = ac("A<div>" + a + "</div>"),
      f = Fb();
    d = new Xb(f ? f.createHTML(e) : e);
    if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName))
      throw Error("");
    var g;
    if (d instanceof Xb) g = d.j;
    else throw Error("");
    c.innerHTML = g;
    b = b.lastChild;
    for (var k = []; b && b.firstChild; ) k.push(b.removeChild(b.firstChild));
    return k;
  }
  function wc(a, b, c) {
    c = c || 100;
    for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
    for (var f = a, g = 0; f && g <= c; g++) {
      if (d[String(f.tagName).toLowerCase()]) return f;
      f = f.parentElement;
    }
    return null;
  }
  function xc(a, b, c) {
    var d;
    try {
      d = cc.sendBeacon && cc.sendBeacon(a);
    } catch (e) {
      Va("TAGGING", 15);
    }
    d ? b == null || b() : qc(a, b, c);
  }
  function yc(a, b) {
    try {
      return cc.sendBeacon(a, b);
    } catch (c) {
      Va("TAGGING", 15);
    }
    return !1;
  }
  var zc = {
    cache: "no-store",
    credentials: "include",
    keepalive: !0,
    method: "POST",
    mode: "no-cors",
    redirect: "follow",
  };
  function Ac(a, b, c, d, e) {
    if (Bc()) {
      var f = Object.assign({}, zc);
      b && (f.body = b);
      c &&
        (c.attributionReporting &&
          (f.attributionReporting = c.attributionReporting),
        c.browsingTopics && (f.browsingTopics = c.browsingTopics),
        c.credentials && (f.credentials = c.credentials));
      try {
        var g = A.fetch(a, f);
        if (g)
          return (
            g
              .then(function (m) {
                m && m.ok ? d == null || d() : e == null || e();
              })
              .catch(function () {
                e == null || e();
              }),
            !0
          );
      } catch (m) {}
    }
    if (c && c.Ak) return e == null || e(), !1;
    if (b) {
      var k = yc(a, b);
      k ? d == null || d() : e == null || e();
      return k;
    }
    xc(a, d, e);
    return !0;
  }
  function Bc() {
    return typeof A.fetch === "function";
  }
  function Cc(a, b) {
    var c = a[b];
    c && typeof c.animVal === "string" && (c = c.animVal);
    return c;
  }
  function Dc() {
    var a = A.performance;
    if (a && Za(a.now)) return a.now();
  }
  function Ec() {
    var a,
      b = A.performance;
    if (b && b.getEntriesByType)
      try {
        var c = b.getEntriesByType("navigation");
        c && c.length > 0 && (a = c[0].type);
      } catch (d) {
        return "e";
      }
    if (!a) return "u";
    switch (a) {
      case "navigate":
        return "n";
      case "back_forward":
        return "h";
      case "reload":
        return "r";
      case "prerender":
        return "p";
      default:
        return "x";
    }
  }
  function Fc() {
    return A.performance || void 0;
  }
  function Gc() {
    var a = A.webPixelsManager;
    return a ? a.createShopifyExtend !== void 0 : !1;
  }
  var qc = function (a, b, c, d) {
    var e = new Image(1, 1);
    kc(e, d, {});
    e.onload = function () {
      e.onload = null;
      b && b();
    };
    e.onerror = function () {
      e.onerror = null;
      c && c();
    };
    e.src = a;
    return e;
  };
  function Hc(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function Ic(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  }
  function Jc(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function Kc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    return String(a).indexOf(String(b)) > -1;
  }
  function Lc(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d;
  }
  function Mc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    switch (a) {
      case "pageLocation":
        var c = A.location.href;
        b instanceof La &&
          b.get("stripProtocol") &&
          (c = c.replace(/^https?:\/\//, ""));
        return c;
    }
  } /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Nc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Oc = function (a) {
      if (a == null) return String(a);
      var b = Nc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Pc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Qc = function (a) {
      if (!a || Oc(a) != "object" || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Pc(a, "constructor") &&
          !Pc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return b === void 0 || Pc(a, b);
    },
    Rc = function (a, b) {
      var c = b || (Oc(a) == "array" ? [] : {}),
        d;
      for (d in a)
        if (Pc(a, d)) {
          var e = a[d];
          Oc(e) == "array"
            ? (Oc(c[d]) != "array" && (c[d] = []), (c[d] = Rc(e, c[d])))
            : Qc(e)
            ? (Qc(c[d]) || (c[d] = {}), (c[d] = Rc(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function Sc(a) {
    if (a == void 0 || Array.isArray(a) || Qc(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function Tc(a) {
    return (
      (typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0) ||
      (typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a))
    );
  }
  var Uc = function (a) {
    a = a === void 0 ? [] : a;
    this.R = new Ca();
    this.values = [];
    this.ma = !1;
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Tc(b) ? (this.values[Number(b)] = a[Number(b)]) : this.R.set(b, a[b]));
  };
  h = Uc.prototype;
  h.toString = function (a) {
    if (a && a.indexOf(this) >= 0) return "";
    for (var b = [], c = 0; c < this.values.length; c++) {
      var d = this.values[c];
      d === null || d === void 0
        ? b.push("")
        : d instanceof Uc
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  h.set = function (a, b) {
    if (!this.ma)
      if (a === "length") {
        if (!Tc(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.values.length = Number(b);
      } else Tc(a) ? (this.values[Number(a)] = b) : this.R.set(a, b);
  };
  h.get = function (a) {
    return a === "length"
      ? this.length()
      : Tc(a)
      ? this.values[Number(a)]
      : this.R.get(a);
  };
  h.length = function () {
    return this.values.length;
  };
  h.la = function () {
    for (var a = this.R.la(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(String(b));
    return a;
  };
  h.Vb = function () {
    for (var a = this.R.Vb(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(this.values[b]);
    return a;
  };
  h.Eb = function () {
    for (var a = this.R.Eb(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
    return a;
  };
  h.remove = function (a) {
    Tc(a) ? delete this.values[Number(a)] : this.ma || this.R.remove(a);
  };
  h.pop = function () {
    return this.values.pop();
  };
  h.push = function () {
    return this.values.push.apply(this.values, ta(ya.apply(0, arguments)));
  };
  h.shift = function () {
    return this.values.shift();
  };
  h.splice = function (a, b) {
    var c = ya.apply(2, arguments);
    return b === void 0 && c.length === 0
      ? new Uc(this.values.splice(a))
      : new Uc(
          this.values.splice.apply(this.values, [a, b || 0].concat(ta(c)))
        );
  };
  h.unshift = function () {
    return this.values.unshift.apply(this.values, ta(ya.apply(0, arguments)));
  };
  h.has = function (a) {
    return (Tc(a) && this.values.hasOwnProperty(a)) || this.R.has(a);
  };
  h.Ga = function () {
    this.ma = !0;
    Object.freeze(this.values);
  };
  h.vc = function () {
    return this.ma;
  };
  function Vc(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var Wc = function (a, b) {
    this.functionName = a;
    this.Jd = b;
    this.R = new Ca();
    this.ma = !1;
  };
  h = Wc.prototype;
  h.toString = function () {
    return this.functionName;
  };
  h.getName = function () {
    return this.functionName;
  };
  h.invoke = function (a) {
    return this.Jd.call.apply(
      this.Jd,
      [new Xc(this, a)].concat(ta(ya.apply(1, arguments)))
    );
  };
  h.qb = function (a) {
    var b = ya.apply(1, arguments);
    try {
      return this.invoke.apply(this, [a].concat(ta(b)));
    } catch (c) {}
  };
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.ma || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.remove = function (a) {
    this.ma || this.R.remove(a);
  };
  h.la = function () {
    return this.R.la();
  };
  h.Vb = function () {
    return this.R.Vb();
  };
  h.Eb = function () {
    return this.R.Eb();
  };
  h.Ga = function () {
    this.ma = !0;
  };
  h.vc = function () {
    return this.ma;
  };
  var Xc = function (a, b) {
    this.Jd = a;
    this.D = b;
  };
  Xc.prototype.evaluate = function (a) {
    var b = this.D;
    return Array.isArray(a) ? Ja(b, a) : a;
  };
  Xc.prototype.getName = function () {
    return this.Jd.getName();
  };
  Xc.prototype.Kd = function () {
    return this.D.Kd();
  };
  var Yc = function () {
    this.map = new Map();
  };
  Yc.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  Yc.prototype.get = function (a) {
    return this.map.get(a);
  };
  var Zc = function () {
    this.keys = [];
    this.values = [];
  };
  Zc.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  Zc.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (b > -1) return this.values[b];
  };
  function $c() {
    try {
      return Map ? new Yc() : new Zc();
    } catch (a) {
      return new Zc();
    }
  }
  var ad = function (a) {
    if (a instanceof ad) return a;
    if (Sc(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a;
  };
  ad.prototype.getValue = function () {
    return this.value;
  };
  ad.prototype.toString = function () {
    return String(this.value);
  };
  var cd = function (a) {
    this.promise = a;
    this.ma = !1;
    this.R = new Ca();
    this.R.set("then", bd(this));
    this.R.set("catch", bd(this, !0));
    this.R.set("finally", bd(this, !1, !0));
  };
  h = cd.prototype;
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.ma || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.remove = function (a) {
    this.ma || this.R.remove(a);
  };
  h.la = function () {
    return this.R.la();
  };
  h.Vb = function () {
    return this.R.Vb();
  };
  h.Eb = function () {
    return this.R.Eb();
  };
  var bd = function (a, b, c) {
    b = b === void 0 ? !1 : b;
    c = c === void 0 ? !1 : c;
    return new Wc("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof Wc || (d = void 0);
      e instanceof Wc || (e = void 0);
      var f = Ha(this.D),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        k = a.promise.then(d && g(d), e && g(e));
      return new cd(k);
    });
  };
  cd.prototype.Ga = function () {
    this.ma = !0;
  };
  cd.prototype.vc = function () {
    return this.ma;
  };
  function I(a, b, c) {
    var d = $c(),
      e = function (g, k) {
        for (var m = g.la(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (g instanceof Uc) {
          var m = [];
          d.set(g, m);
          for (var n = g.la(), p = 0; p < n.length; p++)
            m[n[p]] = f(g.get(n[p]));
          return m;
        }
        if (g instanceof cd) return g.promise;
        if (g instanceof La) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q;
        }
        if (g instanceof Wc) {
          var r = function () {
            for (
              var v = ya.apply(0, arguments), t = [], w = 0;
              w < v.length;
              w++
            )
              t[w] = dd(v[w], b, c);
            var x = new Fa(b ? b.Kd() : new Ea());
            b && (x.j = b.j);
            return f(g.invoke.apply(g, [x].concat(ta(t))));
          };
          d.set(g, r);
          e(g, r);
          return r;
        }
        var u = !1;
        switch (c) {
          case 1:
            u = !0;
            break;
          case 2:
            u = !1;
            break;
          case 3:
            u = !1;
            break;
          default:
        }
        if (g instanceof ad && u) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (g === null) return null;
        }
      };
    return f(a);
  }
  function dd(a, b, c) {
    var d = $c(),
      e = function (g, k) {
        for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (Array.isArray(g) || gb(g)) {
          var m = new Uc([]);
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m;
        }
        if (Qc(g)) {
          var p = new La();
          d.set(g, p);
          e(g, p);
          return p;
        }
        if (typeof g === "function") {
          var q = new Wc("", function () {
            for (var x = ya.apply(0, arguments), y = 0; y < x.length; y++)
              x[y] = I(this.evaluate(x[y]), b, c);
            return f((0, this.D.H)(g, g, x));
          });
          d.set(g, q);
          e(g, q);
          return q;
        }
        var t = typeof g;
        if (g === null || t === "string" || t === "number" || t === "boolean")
          return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (g !== void 0 && w) return new ad(g);
      };
    return f(a);
  }
  function ed() {
    var a = !1;
    return a;
  }
  var fd = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof Uc)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new Uc(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new Uc(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = c === void 0 ? 0 : Number(c);
      e < 0 && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
      for (var f = e; f >= 0; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new Uc(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, ta(ya.apply(1, arguments)));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (c !== void 0) e = c;
      else {
        if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = f; k < d; k++)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (c !== void 0) e = c;
      else {
        if (d === 0)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = f; k >= 0; k--)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = Vc(this), b = a.length - 1, c = 0; b >= 0; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      b === void 0 && (b = 0);
      b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
      c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new Uc(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Vc(this);
      b === void 0
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(this, [b, c].concat(ta(ya.apply(3, arguments))));
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, ta(ya.apply(1, arguments)));
    },
  };
  var gd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  ra(gd, Error);
  var hd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    id = new Ba("break"),
    jd = new Ba("continue");
  function kd(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  }
  function ld(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function md(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof Uc))
      throw Error("Error: Non-List argument given to Apply instruction.");
    if (a === null || a === void 0) {
      var d = "TypeError: Can't read property " + b + " of " + a + ".";
      if (ed()) throw new gd(d);
      throw Error(d);
    }
    var e = typeof a === "number";
    if (typeof a === "boolean" || e) {
      if (b === "toString") {
        if (e && c.length()) {
          var f = I(c.get(0));
          try {
            return a.toString(f);
          } catch (y) {}
        }
        return a.toString();
      }
      var g = "TypeError: " + a + "." + b + " is not a function.";
      if (ed()) throw new gd(g);
      throw Error(g);
    }
    if (typeof a === "string") {
      if (hd.hasOwnProperty(b)) {
        var k = 2;
        k = 1;
        var m = I(c, void 0, k);
        return dd(a[b].apply(a, m), this.D);
      }
      var n = "TypeError: " + b + " is not a function";
      if (ed()) throw new gd(n);
      throw Error(n);
    }
    if (a instanceof Uc) {
      if (a.has(b)) {
        var p = a.get(String(b));
        if (p instanceof Wc) {
          var q = Vc(c);
          return p.invoke.apply(p, [this.D].concat(ta(q)));
        }
        var r = "TypeError: " + b + " is not a function";
        if (ed()) throw new gd(r);
        throw Error(r);
      }
      if (fd.supportedMethods.indexOf(b) >= 0) {
        var u = Vc(c);
        return fd[b].call.apply(fd[b], [a, this.D].concat(ta(u)));
      }
    }
    if (a instanceof Wc || a instanceof La || a instanceof cd) {
      if (a.has(b)) {
        var v = a.get(b);
        if (v instanceof Wc) {
          var t = Vc(c);
          return v.invoke.apply(v, [this.D].concat(ta(t)));
        }
        var w = "TypeError: " + b + " is not a function";
        if (ed()) throw new gd(w);
        throw Error(w);
      }
      if (b === "toString") return a instanceof Wc ? a.getName() : a.toString();
      if (b === "hasOwnProperty") return a.has(c.get(0));
    }
    if (a instanceof ad && b === "toString") return a.toString();
    var x = "TypeError: Object has no '" + b + "' property.";
    if (ed()) throw new gd(x);
    throw Error(x);
  }
  function nd(a, b) {
    a = this.evaluate(a);
    if (typeof a !== "string")
      throw Error("Invalid key name given for assignment.");
    var c = this.D;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  }
  function od() {
    var a = ya.apply(0, arguments),
      b = Ha(this.D),
      c = Ia(b, a);
    if (c instanceof Ba) return c;
  }
  function pd() {
    return id;
  }
  function qd(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof Ba) return d;
    }
  }
  function rd() {
    for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if (typeof c === "string") {
        var d = this.evaluate(arguments[b + 1]);
        Ga(a, c, d, !0);
      }
    }
  }
  function sd() {
    return jd;
  }
  function td(a, b) {
    return new Ba(a, this.evaluate(b));
  }
  function ud(a, b) {
    var c = ya.apply(2, arguments),
      d = new Uc();
    b = this.evaluate(b);
    for (var e = 0; e < b.length; e++) d.push(b[e]);
    var f = [51, a, d].concat(ta(c));
    this.D.add(a, this.evaluate(f));
  }
  function vd(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  }
  function wd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    var c = a instanceof ad,
      d = b instanceof ad;
    return c || d ? (c && d ? a.getValue() === b.getValue() : !1) : a == b;
  }
  function xd() {
    for (var a, b = 0; b < arguments.length; b++)
      a = this.evaluate(arguments[b]);
    return a;
  }
  function yd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Ia(f, d);
      if (g instanceof Ba) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
    }
  }
  function zd(a, b, c) {
    if (typeof b === "string")
      return yd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (
      b instanceof La ||
      b instanceof cd ||
      b instanceof Uc ||
      b instanceof Wc
    ) {
      var d = b.la(),
        e = d.length;
      return yd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d[f];
        },
        c
      );
    }
  }
  function Ad(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return zd(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Bd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return zd(
      function (e) {
        var f = Ha(d);
        Ga(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Cd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return zd(
      function (e) {
        var f = Ha(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Dd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Ed(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Fd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Ed(
      function (e) {
        var f = Ha(d);
        Ga(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Gd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Ed(
      function (e) {
        var f = Ha(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Ed(a, b, c) {
    if (typeof b === "string")
      return yd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof Uc)
      return yd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (ed()) throw new gd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  function Hd(a, b, c, d) {
    function e(p, q) {
      for (var r = 0; r < f.length(); r++) {
        var u = f.get(r);
        q.add(u, p.get(u));
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof Uc))
      throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.D;
    d = this.evaluate(d);
    var k = Ha(g);
    for (e(g, k); Ja(k, b); ) {
      var m = Ia(k, d);
      if (m instanceof Ba) {
        if (m.type === "break") break;
        if (m.type === "return") return m;
      }
      var n = Ha(g);
      e(k, n);
      Ja(n, c);
      k = n;
    }
  }
  function Id(a, b) {
    var c = ya.apply(2, arguments),
      d = this.D,
      e = this.evaluate(b);
    if (!(e instanceof Uc))
      throw Error("Error: non-List value given for Fn argument names.");
    return new Wc(
      a,
      (function () {
        return function () {
          var f = ya.apply(0, arguments),
            g = Ha(d);
          g.j === void 0 && (g.j = this.D.j);
          for (var k = 0; k < f.length; k++)
            if (((f[k] = this.evaluate(f[k])), f[k] instanceof Ba)) return f[k];
          for (var m = e.get("length"), n = 0; n < m; n++)
            n < f.length ? g.add(e.get(n), f[n]) : g.add(e.get(n), void 0);
          g.add("arguments", new Uc(f));
          var p = Ia(g, c);
          if (p instanceof Ba) return p.type === "return" ? p.data : p;
        };
      })()
    );
  }
  function Jd(a) {
    a = this.evaluate(a);
    var b = this.D;
    if (Kd && !b.has(a)) throw new ReferenceError(a + " is not defined.");
    return b.get(a);
  }
  function Ld(a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (a === void 0 || a === null) {
      var d =
        "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
      if (ed()) throw new gd(d);
      throw Error(d);
    }
    if (
      a instanceof La ||
      a instanceof cd ||
      a instanceof Uc ||
      a instanceof Wc
    )
      c = a.get(b);
    else if (typeof a === "string")
      b === "length" ? (c = a.length) : Tc(b) && (c = a[b]);
    else if (a instanceof ad) return;
    return c;
  }
  function Md(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  }
  function Nd(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  }
  function Od(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    a instanceof ad && (a = a.getValue());
    b instanceof ad && (b = b.getValue());
    return a === b;
  }
  function Pd(a, b) {
    return !Od.call(this, a, b);
  }
  function Qd(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = Ia(this.D, d);
    if (e instanceof Ba) return e;
  }
  var Kd = !1;
  function Rd(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  }
  function Sd(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  }
  function Td() {
    for (var a = new Uc(), b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c);
    }
    return a;
  }
  function Ud() {
    for (var a = new La(), b = 0; b < arguments.length - 1; b += 2) {
      var c = this.evaluate(arguments[b]) + "",
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d);
    }
    return a;
  }
  function Vd(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  }
  function Wd(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  }
  function Xd(a) {
    return -this.evaluate(a);
  }
  function Yd(a) {
    return !this.evaluate(a);
  }
  function Zd(a, b) {
    return !wd.call(this, a, b);
  }
  function $d() {
    return null;
  }
  function ae(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function be(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  }
  function ce(a) {
    return this.evaluate(a);
  }
  function de() {
    return ya.apply(0, arguments);
  }
  function ee(a) {
    return new Ba("return", this.evaluate(a));
  }
  function fe(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (a === null || a === void 0) {
      var d = "TypeError: Can't set property " + b + " of " + a + ".";
      if (ed()) throw new gd(d);
      throw Error(d);
    }
    (a instanceof Wc || a instanceof Uc || a instanceof La) &&
      a.set(String(b), c);
    return c;
  }
  function he(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  }
  function ie(a, b, c) {
    a = this.evaluate(a);
    var d = this.evaluate(b),
      e = this.evaluate(c);
    if (!Array.isArray(d) || !Array.isArray(e))
      throw Error("Error: Malformed switch instruction.");
    for (var f, g = !1, k = 0; k < d.length; k++)
      if (g || a === this.evaluate(d[k]))
        if (((f = this.evaluate(e[k])), f instanceof Ba)) {
          var m = f.type;
          if (m === "break") return;
          if (m === "return" || m === "continue") return f;
        } else g = !0;
    if (
      e.length === d.length + 1 &&
      ((f = this.evaluate(e[e.length - 1])),
      f instanceof Ba && (f.type === "return" || f.type === "continue"))
    )
      return f;
  }
  function je(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  }
  function ke(a) {
    a = this.evaluate(a);
    return a instanceof Wc ? "function" : typeof a;
  }
  function le() {
    for (var a = this.D, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      typeof c !== "string" || a.add(c, void 0);
    }
  }
  function me(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Ia(this.D, e);
      if (f instanceof Ba) {
        if (f.type === "break") return;
        if (f.type === "return") return f;
      }
    }
    for (; this.evaluate(a); ) {
      var g = Ia(this.D, e);
      if (g instanceof Ba) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
      this.evaluate(b);
    }
  }
  function ne(a) {
    return ~Number(this.evaluate(a));
  }
  function oe(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b));
  }
  function pe(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b));
  }
  function qe(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
  }
  function re(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b));
  }
  function se(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
  }
  function te(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b));
  }
  function ue() {}
  function ve(a, b, c, d, e) {
    var f = !0;
    try {
      var g = this.evaluate(c);
      if (g instanceof Ba) return g;
    } catch (r) {
      if (!(r instanceof gd && a)) throw ((f = r instanceof gd), r);
      var k = Ha(this.D),
        m = new ad(r);
      k.add(b, m);
      var n = this.evaluate(d),
        p = Ia(k, n);
      if (p instanceof Ba) return p;
    } finally {
      if (f && e !== void 0) {
        var q = this.evaluate(e);
        if (q instanceof Ba) return q;
      }
    }
  }
  var xe = function () {
    this.j = new Ka();
    we(this);
  };
  xe.prototype.execute = function (a) {
    return this.j.ui(a);
  };
  var we = function (a) {
    var b = function (c, d) {
      var e = new Wc(String(c), d);
      e.Ga();
      a.j.j.set(String(c), e);
    };
    b("map", Ud);
    b("and", Hc);
    b("contains", Kc);
    b("equals", Ic);
    b("or", Jc);
    b("startsWith", Lc);
    b("variable", Mc);
  };
  var ze = function () {
    this.C = !1;
    this.j = new Ka();
    ye(this);
    this.C = !0;
  };
  ze.prototype.execute = function (a) {
    return Ae(this.j.ui(a));
  };
  var Be = function (a, b, c) {
    return Ae(a.j.Al(b, c));
  };
  ze.prototype.Ga = function () {
    this.j.Ga();
  };
  var ye = function (a) {
    var b = function (c, d) {
      var e = String(c),
        f = new Wc(e, d);
      f.Ga();
      a.j.j.set(e, f);
    };
    b(0, kd);
    b(1, ld);
    b(2, md);
    b(3, nd);
    b(56, re);
    b(57, oe);
    b(58, ne);
    b(59, te);
    b(60, pe);
    b(61, qe);
    b(62, se);
    b(53, od);
    b(4, pd);
    b(5, qd);
    b(52, rd);
    b(6, sd);
    b(49, td);
    b(7, Td);
    b(8, Ud);
    b(9, qd);
    b(50, ud);
    b(10, vd);
    b(12, wd);
    b(13, xd);
    b(51, Id);
    b(47, Ad);
    b(54, Bd);
    b(55, Cd);
    b(63, Hd);
    b(64, Dd);
    b(65, Fd);
    b(66, Gd);
    b(15, Jd);
    b(16, Ld);
    b(17, Ld);
    b(18, Md);
    b(19, Nd);
    b(20, Od);
    b(21, Pd);
    b(22, Qd);
    b(23, Rd);
    b(24, Sd);
    b(25, Vd);
    b(26, Wd);
    b(27, Xd);
    b(28, Yd);
    b(29, Zd);
    b(45, $d);
    b(30, ae);
    b(32, be);
    b(33, be);
    b(34, ce);
    b(35, ce);
    b(46, de);
    b(36, ee);
    b(43, fe);
    b(37, he);
    b(38, ie);
    b(39, je);
    b(67, ve);
    b(40, ke);
    b(44, ue);
    b(41, le);
    b(42, me);
  };
  ze.prototype.Kd = function () {
    return this.j.Kd();
  };
  function Ae(a) {
    if (
      a instanceof Ba ||
      a instanceof Wc ||
      a instanceof Uc ||
      a instanceof La ||
      a instanceof cd ||
      a instanceof ad ||
      a === null ||
      a === void 0 ||
      typeof a === "string" ||
      typeof a === "number" ||
      typeof a === "boolean"
    )
      return a;
  }
  var Ce = function (a) {
    this.message = a;
  };
  function De(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return b === void 0
      ? new Ce(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function Ee(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Fe = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Ge(a, b) {
    for (var c = "", d = !0; a > 7; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = "" + De(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = "" + De(a | b) + c);
  }
  var He = (function () {
    function a(b) {
      return {
        toString: function () {
          return b;
        },
      };
    }
    return {
      Vk: a("consent"),
      Hi: a("convert_case_to"),
      Ii: a("convert_false_to"),
      Ji: a("convert_null_to"),
      Ki: a("convert_true_to"),
      Li: a("convert_undefined_to"),
      In: a("debug_mode_metadata"),
      sa: a("function"),
      xh: a("instance_name"),
      Dl: a("live_only"),
      El: a("malware_disabled"),
      METADATA: a("metadata"),
      Hl: a("original_activity_id"),
      Un: a("original_vendor_template_id"),
      Tn: a("once_on_load"),
      Gl: a("once_per_event"),
      Vj: a("once_per_load"),
      Wn: a("priority_override"),
      Xn: a("respected_consent_types"),
      fk: a("setup_tags"),
      Me: a("tag_id"),
      kk: a("teardown_tags"),
    };
  })();
  var df;
  var ef = [],
    ff = [],
    gf = [],
    hf = [],
    jf = [],
    kf = {},
    lf,
    mf;
  function nf(a) {
    mf = mf || a;
  }
  function of(a) {}
  var pf,
    qf = [],
    rf = [];
  function sf(a, b) {
    var c = {};
    c[He.sa] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c;
  }
  function tf(a, b, c) {
    try {
      return lf(uf(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  }
  function vf(a) {
    var b = a[He.sa];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!kf[b];
  }
  var uf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = wf(a[e], b, c));
      return d;
    },
    wf = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(wf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = ef[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[He.xh]);
            try {
              var m = uf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = xf(m, { event: b, index: f, type: 2, name: k });
              pf && (d = pf.Wl(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[wf(a[n], b, c)] = wf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = wf(a[q], b, c);
              mf && (p = p || mf.Lm(r));
              d.push(r);
            }
            return mf && p ? mf.Zl(d) : d.join("");
          case "escape":
            d = wf(a[1], b, c);
            if (mf && Array.isArray(a[1]) && a[1][0] === "macro" && mf.Mm(a))
              return mf.hn(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Oe[a[u]] && (d = Oe[a[u]](d));
            return d;
          case "tag":
            var v = a[1];
            if (!hf[v])
              throw Error("Unable to resolve tag reference " + v + ".");
            return { sk: a[2], index: v };
          case "zb":
            var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            t[He.sa] = a[1];
            var w = tf(t, b, c),
              x = !!a[4];
            return x || w !== 2 ? x !== (w === 1) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    xf = function (a, b) {
      var c = a[He.sa],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = kf[c],
        f =
          b &&
          b.type === 2 &&
          (d == null ? void 0 : d.reportMacroDiscrepancy) &&
          e &&
          qf.indexOf(c) !== -1,
        g = {},
        k = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          sb(m, "vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (k[m.substring(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (b.name == null) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (q == null) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = ef[q];
                  break;
                case 1:
                  r = hf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var u = r && r[He.xh];
              n = u ? String(u) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var v, t, w;
      if (f && rf.indexOf(c) === -1) {
        rf.push(c);
        var x = nb();
        v = e(g);
        var y = nb() - x,
          B = nb();
        t = df(c, k, b);
        w = y - (nb() - B);
      } else if ((e && (v = e(g)), !e || f)) t = df(c, k, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Sc(v)
          ? (Array.isArray(v)
              ? Array.isArray(t)
              : Qc(v)
              ? Qc(t)
              : typeof v === "function"
              ? typeof t === "function"
              : v === t) || d.reportMacroDiscrepancy(d.id, c)
          : v !== t && d.reportMacroDiscrepancy(d.id, c),
        w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? v : t;
    };
  var yf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError";
  };
  ra(yf, Error);
  yf.prototype.getMessage = function () {
    return this.message;
  };
  function zf(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) zf(a[c], b[c]);
    }
  }
  var Af = function (a, b) {
    var c;
    c = Error.call(
      this,
      "Wrapped error for Dust debugging. Original error message: " + a.message
    );
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Ym = a;
    this.j = [];
    this.C = b;
  };
  ra(Af, Error);
  function Bf() {
    return function (a, b) {
      a instanceof Af || (a = new Af(a, Cf));
      b && a instanceof Af && a.j.push(b);
      throw a;
    };
  }
  function Cf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; b > 0; b--) $a(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  function Df(a) {
    function b(r) {
      for (var u = 0; u < r.length; u++) d[r[u]] = !0;
    }
    for (var c = [], d = [], e = Ef(a), f = 0; f < ff.length; f++) {
      var g = ff[f],
        k = Ff(g, e);
      if (k) {
        for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
        b(g.block || []);
      } else k === null && b(g.block || []);
    }
    for (var p = [], q = 0; q < hf.length; q++) c[q] && !d[q] && (p[q] = !0);
    return p;
  }
  function Ff(a, b) {
    for (var c = a["if"] || [], d = 0; d < c.length; d++) {
      var e = b(c[d]);
      if (e === 0) return !1;
      if (e === 2) return null;
    }
    for (var f = a.unless || [], g = 0; g < f.length; g++) {
      var k = b(f[g]);
      if (k === 2) return null;
      if (k === 1) return !1;
    }
    return !0;
  }
  function Ef(a) {
    var b = [];
    return function (c) {
      b[c] === void 0 && (b[c] = tf(gf[c], a));
      return b[c];
    };
  }
  var Gf = {
    Wl: function (a, b) {
      b[He.Hi] &&
        typeof a === "string" &&
        (a = b[He.Hi] === 1 ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(He.Ji) && a === null && (a = b[He.Ji]);
      b.hasOwnProperty(He.Li) && a === void 0 && (a = b[He.Li]);
      b.hasOwnProperty(He.Ki) && a === !0 && (a = b[He.Ki]);
      b.hasOwnProperty(He.Ii) && a === !1 && (a = b[He.Ii]);
      return a;
    },
  };
  var Hf = function () {
      this.j = {};
    },
    Jf = function (a, b) {
      var c = If.j,
        d;
      (d = c.j)[a] != null || (d[a] = []);
      c.j[a].push(function () {
        return b.apply(null, ta(ya.apply(0, arguments)));
      });
    };
  function Kf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (k) {
          g =
            typeof k === "string"
              ? g + (": " + k)
              : k instanceof Error
              ? g + (": " + k.message)
              : g + ".";
        }
        if (!f) throw new yf(c, d, g);
      }
  }
  function Lf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.j[d],
          f = a.j.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Kf(e, b, d, g);
          Kf(f, b, d, g);
        }
      }
    };
  }
  var Pf = function () {
      var a = data.permissions || {},
        b = Mf.ctid,
        c = this;
      this.C = {};
      this.j = new Hf();
      var d = {},
        e = {},
        f = Lf(this.j, b, function () {
          var g = arguments[0];
          return g && d[g]
            ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      fb(a, function (g, k) {
        function m(p) {
          var q = ya.apply(1, arguments);
          if (!n[p])
            throw Nf(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(ta(q)));
        }
        var n = {};
        fb(k, function (p, q) {
          var r = Of(p, q);
          n[p] = r.assert;
          d[p] || (d[p] = r.M);
          r.mk && !e[p] && (e[p] = r.mk);
        });
        c.C[g] = function (p, q) {
          var r = n[p];
          if (!r)
            throw Nf(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var u = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, u);
          f.apply(void 0, u);
          var v = e[p];
          v && v.apply(null, [m].concat(ta(u.slice(1))));
        };
      });
    },
    Qf = function (a) {
      return If.C[a] || function () {};
    };
  function Of(a, b) {
    var c = sf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Nf;
    try {
      return xf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new yf(e, {}, "Permission " + e + " is unknown.");
        },
        M: function () {
          throw new yf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Nf(a, b, c) {
    return new yf(a, b, c);
  }
  var Rf = !1;
  var Sf = {};
  Sf.Nk = ib("");
  Sf.dm = ib("");
  var Yf = {},
    Zf =
      ((Yf.uaa = !0),
      (Yf.uab = !0),
      (Yf.uafvl = !0),
      (Yf.uamb = !0),
      (Yf.uam = !0),
      (Yf.uap = !0),
      (Yf.uapv = !0),
      (Yf.uaw = !0),
      Yf);
  var gg = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!eg.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = f !== -1 && f === e.length - 2,
          k = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (d.length === 0) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!fg.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || k.length > d.length || (!g && d.length !== e.length)
            ? 0
            : g
            ? sb(d, k) && (d === k || d.charAt(k.length) === ".")
            : d === k
        )
          return !0;
      }
      return !1;
    },
    fg = /^[a-z$_][\w$]*$/i,
    eg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
  var hg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function ig(a, b) {
    var c = String(a),
      d = String(b),
      e = c.length - d.length;
    return e >= 0 && c.indexOf(d, e) === e;
  }
  var jg = new eb();
  function kg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + String(d),
        f = jg.get(e);
      f || ((f = new RegExp(b, d)), jg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function lg(a, b) {
    return String(a).indexOf(String(b)) >= 0;
  }
  function mg(a, b) {
    return String(a) === String(b);
  }
  function ng(a, b) {
    return Number(a) >= Number(b);
  }
  function og(a, b) {
    return Number(a) <= Number(b);
  }
  function pg(a, b) {
    return Number(a) > Number(b);
  }
  function qg(a, b) {
    return Number(a) < Number(b);
  }
  function rg(a, b) {
    return sb(String(a), String(b));
  }
  var yg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    zg = { Fn: "function", PixieMap: "Object", List: "Array" };
  function K(a, b, c) {
    for (var d = 0; d < b.length; d++) {
      var e = yg.exec(b[d]);
      if (!e) throw Error("Internal Error in " + a);
      var f = e[1],
        g = e[2] === "!",
        k = e[3],
        m = c[d];
      if (m == null) {
        if (g)
          throw Error(
            "Error in " + a + ". Required argument " + f + " not supplied."
          );
      } else if (k !== "*") {
        var n = typeof m;
        m instanceof Wc
          ? (n = "Fn")
          : m instanceof Uc
          ? (n = "List")
          : m instanceof La
          ? (n = "PixieMap")
          : m instanceof cd
          ? (n = "PixiePromise")
          : m instanceof ad && (n = "OpaqueValue");
        if (n !== k)
          throw Error(
            "Error in " +
              a +
              ". Argument " +
              f +
              " has type " +
              ((zg[n] || n) + ", which does not match required type ") +
              ((zg[k] || k) + ".")
          );
      }
    }
  }
  function Ag(a) {
    return "" + a;
  }
  function Bg(a, b) {
    var c = [];
    return c;
  }
  function Cg(a, b) {
    var c = new Wc(a, function () {
      for (
        var d = Array.prototype.slice.call(arguments, 0), e = 0;
        e < d.length;
        e++
      )
        d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d);
      } catch (g) {
        if (ed()) throw new gd(g.message);
        throw g;
      }
    });
    c.Ga();
    return c;
  }
  function Dg(a, b) {
    var c = new La(),
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        Za(e)
          ? c.set(d, Cg(a + "_" + d, e))
          : Qc(e)
          ? c.set(d, Dg(a + "_" + d, e))
          : ($a(e) || z(e) || typeof e === "boolean") && c.set(d, e);
      }
    c.Ga();
    return c;
  }
  function Eg(a, b) {
    K(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new La();
    return (d = Dg("AssertApiSubject", c));
  }
  function Fg(a, b) {
    K(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof cd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new La();
    return (d = Dg("AssertThatSubject", c));
  }
  function Gg(a) {
    return function () {
      for (var b = [], c = this.D, d = 0; d < arguments.length; ++d)
        b.push(I(arguments[d], c));
      return dd(a.apply(null, b));
    };
  }
  function Hg() {
    for (var a = Math, b = Ig, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Gg(a[e].bind(a)));
    }
    return c;
  }
  function Jg(a) {
    var b;
    return b;
  }
  function Kg(a) {
    var b;
    return b;
  }
  function Lg(a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  }
  function Mg(a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  }
  function Rg(a) {
    K(this.getName(), ["message:?string"], arguments);
  }
  function Sg(a, b) {
    K(this.getName(), ["min:!number", "max:!number"], arguments);
    return cb(a, b);
  }
  function Tg() {
    return new Date().getTime();
  }
  function Ug(a) {
    if (a === null) return "null";
    if (a instanceof Uc) return "array";
    if (a instanceof Wc) return "function";
    if (a instanceof ad) {
      var b;
      a = (b = a) == null ? void 0 : b.getValue();
      var c;
      if (
        ((c = a) == null ? void 0 : c.constructor) === void 0 ||
        a.constructor.name === void 0
      ) {
        var d = String(a);
        return d.substring(8, d.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  }
  function Vg(a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Rf || Sf.Nk) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return dd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(I(c));
      }),
    };
  }
  function Wg(a) {
    return hb(I(a, this.D));
  }
  function Xg(a) {
    return Number(I(a, this.D));
  }
  function Yg(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
  }
  function Zg(a, b, c) {
    var d = null,
      e = !1;
    K(
      this.getName(),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new La();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof La &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  }
  var Ig = "floor ceil round max min abs pow sqrt".split(" ");
  function $g() {
    var a = {};
    return {
      om: function (b) {
        return a.hasOwnProperty(b) ? a[b] : void 0;
      },
      Kk: function (b, c) {
        a[b] = c;
      },
      reset: function () {
        a = {};
      },
    };
  }
  function ah(a, b) {
    return function () {
      return Wc.prototype.invoke.apply(
        a,
        [b].concat(ta(ya.apply(0, arguments)))
      );
    };
  }
  function bh(a, b) {
    K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
  }
  function ch(a, b) {
    K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
  }
  var dh = {};
  var eh = function (a) {
    var b = new La();
    if (a instanceof Uc)
      for (var c = a.la(), d = 0; d < c.length; d++) {
        var e = c[d];
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof Wc)
      for (var f = a.la(), g = 0; g < f.length; g++) {
        var k = f[g];
        b.set(k, a.get(k));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  dh.keys = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Uc || a instanceof Wc || typeof a === "string") a = eh(a);
    if (a instanceof La || a instanceof cd) return new Uc(a.la());
    return new Uc();
  };
  dh.values = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Uc || a instanceof Wc || typeof a === "string") a = eh(a);
    if (a instanceof La || a instanceof cd) return new Uc(a.Vb());
    return new Uc();
  };
  dh.entries = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Uc || a instanceof Wc || typeof a === "string") a = eh(a);
    if (a instanceof La || a instanceof cd)
      return new Uc(
        a.Eb().map(function (b) {
          return new Uc(b);
        })
      );
    return new Uc();
  };
  dh.freeze = function (a) {
    (a instanceof La ||
      a instanceof cd ||
      a instanceof Uc ||
      a instanceof Wc) &&
      a.Ga();
    return a;
  };
  dh.delete = function (a, b) {
    if (a instanceof La && !a.vc()) return a.remove(b), !0;
    return !1;
  };
  function L(a, b) {
    var c = ya.apply(2, arguments),
      d = a.D.j;
    if (!d) throw Error("Missing program state.");
    if (d.on) {
      try {
        d.nk.apply(null, [b].concat(ta(c)));
      } catch (e) {
        throw (Va("TAGGING", 21), e);
      }
      return;
    }
    d.nk.apply(null, [b].concat(ta(c)));
  }
  var fh = function () {
    this.C = {};
    this.j = {};
    this.H = !0;
  };
  fh.prototype.get = function (a, b) {
    var c = this.contains(a) ? this.C[a] : void 0;
    return c;
  };
  fh.prototype.contains = function (a) {
    return this.C.hasOwnProperty(a);
  };
  fh.prototype.add = function (a, b, c) {
    if (this.contains(a))
      throw Error(
        "Attempting to add a function which already exists: " + a + "."
      );
    if (this.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.C[a] = c ? void 0 : Za(b) ? Cg(a, b) : Dg(a, b);
  };
  function gh(a, b) {
    var c = void 0;
    return c;
  }
  function hh() {
    var a = {};
    return a;
  }
  var N = {
      g: {
        xa: "ad_personalization",
        N: "ad_storage",
        O: "ad_user_data",
        U: "analytics_storage",
        Kb: "region",
        Zb: "consent_updated",
        zf: "wait_for_update",
        Ni: "app_remove",
        Oi: "app_store_refund",
        Pi: "app_store_subscription_cancel",
        Qi: "app_store_subscription_convert",
        Ri: "app_store_subscription_renew",
        Yk: "consent_update",
        Cg: "add_payment_info",
        Dg: "add_shipping_info",
        zc: "add_to_cart",
        Ac: "remove_from_cart",
        Eg: "view_cart",
        ac: "begin_checkout",
        Bc: "select_item",
        sb: "view_item_list",
        Lb: "select_promotion",
        tb: "view_promotion",
        Ka: "purchase",
        Cc: "refund",
        Pa: "view_item",
        Fg: "add_to_wishlist",
        Zk: "exception",
        Si: "first_open",
        Ti: "first_visit",
        ba: "gtag.config",
        Za: "gtag.get",
        Ui: "in_app_purchase",
        bc: "page_view",
        al: "screen_view",
        Vi: "session_start",
        bl: "timing_complete",
        fl: "track_social",
        Xc: "user_engagement",
        il: "user_id_update",
        Yd: "gclid_link_decoration_source",
        Zd: "gclid_storage_source",
        ub: "gclgb",
        ab: "gclid",
        Wi: "gclid_len",
        Yc: "gclgs",
        Zc: "gcllp",
        bd: "gclst",
        ia: "ads_data_redaction",
        Xi: "gad_source",
        Yi: "gad_source_src",
        Zi: "ndclid",
        aj: "ngad_source",
        bj: "ngbraid",
        cj: "ngclid",
        dj: "ngclsrc",
        ae: "gclid_url",
        ej: "gclsrc",
        Gg: "gbraid",
        Cf: "wbraid",
        na: "allow_ad_personalization_signals",
        Df: "allow_custom_scripts",
        be: "allow_direct_google_requests",
        Ef: "allow_display_features",
        ce: "allow_enhanced_conversions",
        hb: "allow_google_signals",
        Da: "allow_interest_groups",
        jl: "app_id",
        kl: "app_installer_id",
        ml: "app_name",
        nl: "app_version",
        vb: "auid",
        fj: "auto_detection_enabled",
        fc: "aw_remarketing",
        Ff: "aw_remarketing_only",
        de: "discount",
        ee: "aw_feed_country",
        fe: "aw_feed_language",
        da: "items",
        he: "aw_merchant_id",
        Hg: "aw_basket_type",
        dd: "campaign_content",
        ed: "campaign_id",
        fd: "campaign_medium",
        gd: "campaign_name",
        hd: "campaign",
        jd: "campaign_source",
        kd: "campaign_term",
        wb: "client_id",
        gj: "rnd",
        Ig: "consent_update_type",
        ij: "content_group",
        jj: "content_type",
        ib: "conversion_cookie_prefix",
        ld: "conversion_id",
        ya: "conversion_linker",
        kj: "conversion_linker_disabled",
        hc: "conversion_api",
        Gf: "cookie_deprecation",
        Qa: "cookie_domain",
        Ra: "cookie_expires",
        cb: "cookie_flags",
        Dc: "cookie_name",
        xb: "cookie_path",
        La: "cookie_prefix",
        ic: "cookie_update",
        Ec: "country",
        Aa: "currency",
        Jg: "customer_buyer_stage",
        ie: "customer_lifetime_value",
        Kg: "customer_loyalty",
        Lg: "customer_ltv_bucket",
        md: "custom_map",
        Mg: "gcldc",
        je: "dclid",
        Ng: "debug_mode",
        fa: "developer_id",
        lj: "disable_merchant_reported_purchases",
        nd: "dc_custom_params",
        mj: "dc_natural_search",
        Og: "dynamic_event_settings",
        Pg: "affiliation",
        ke: "checkout_option",
        Hf: "checkout_step",
        Qg: "coupon",
        od: "item_list_name",
        If: "list_name",
        nj: "promotions",
        pd: "shipping",
        Jf: "tax",
        me: "engagement_time_msec",
        ne: "enhanced_client_id",
        oe: "enhanced_conversions",
        Rg: "enhanced_conversions_automatic_settings",
        pe: "estimated_delivery_date",
        Kf: "euid_logged_in_state",
        rd: "event_callback",
        ol: "event_category",
        kb: "event_developer_id_string",
        pl: "event_label",
        Fc: "event",
        qe: "event_settings",
        se: "event_timeout",
        ql: "description",
        rl: "fatal",
        oj: "experiments",
        Lf: "firebase_id",
        Gc: "first_party_collection",
        te: "_x_20",
        yb: "_x_19",
        pj: "fledge_drop_reason",
        Sg: "fledge",
        Tg: "flight_error_code",
        Ug: "flight_error_message",
        qj: "fl_activity_category",
        rj: "fl_activity_group",
        Vg: "fl_advertiser_id",
        sj: "fl_ar_dedupe",
        Wg: "match_id",
        tj: "fl_random_number",
        uj: "tran",
        vj: "u",
        ue: "gac_gclid",
        Hc: "gac_wbraid",
        Xg: "gac_wbraid_multiple_conversions",
        Yg: "ga_restrict_domain",
        Zg: "ga_temp_client_id",
        sl: "ga_temp_ecid",
        jc: "gdpr_applies",
        ah: "geo_granularity",
        Mb: "value_callback",
        zb: "value_key",
        Ic: "_google_ng",
        Jc: "google_signals",
        bh: "google_tld",
        ve: "groups",
        eh: "gsa_experiment_id",
        wj: "gtm_up",
        Nb: "iframe_state",
        sd: "ignore_referrer",
        Mf: "internal_traffic_results",
        kc: "is_legacy_converted",
        Ob: "is_legacy_loaded",
        we: "is_passthrough",
        ud: "_lps",
        Sa: "language",
        xe: "legacy_developer_id_string",
        za: "linker",
        Kc: "accept_incoming",
        Ab: "decorate_forms",
        X: "domains",
        Pb: "url_position",
        Nf: "merchant_feed_label",
        Of: "merchant_feed_language",
        Pf: "merchant_id",
        fh: "method",
        tl: "name",
        xj: "navigation_type",
        vd: "new_customer",
        gh: "non_interaction",
        yj: "optimize_id",
        hh: "page_hostname",
        wd: "page_path",
        Ea: "page_referrer",
        eb: "page_title",
        ih: "passengers",
        jh: "phone_conversion_callback",
        zj: "phone_conversion_country_code",
        kh: "phone_conversion_css_class",
        Aj: "phone_conversion_ids",
        lh: "phone_conversion_number",
        mh: "phone_conversion_options",
        vl: "_platinum_request_status",
        nh: "_protected_audience_enabled",
        xd: "quantity",
        ye: "redact_device_info",
        Qf: "referral_exclusion_definition",
        Kn: "_request_start_time",
        Qb: "restricted_data_processing",
        Bj: "retoken",
        wl: "sample_rate",
        Rf: "screen_name",
        Rb: "screen_resolution",
        Cj: "_script_source",
        Dj: "search_term",
        Ma: "send_page_view",
        mc: "send_to",
        yd: "server_container_url",
        zd: "session_duration",
        ze: "session_engaged",
        Sf: "session_engaged_time",
        Bb: "session_id",
        Ae: "session_number",
        Tf: "_shared_user_id",
        Bd: "delivery_postal_code",
        Ln: "_tag_firing_delay",
        Mn: "_tag_firing_time",
        xl: "temporary_client_id",
        Uf: "topmost_url",
        Ej: "tracking_id",
        Vf: "traffic_type",
        Ba: "transaction_id",
        Sb: "transport_url",
        oh: "trip_type",
        oc: "update",
        fb: "url_passthrough",
        Fj: "uptgs",
        Wf: "_user_agent_architecture",
        Xf: "_user_agent_bitness",
        Yf: "_user_agent_full_version_list",
        Zf: "_user_agent_mobile",
        cg: "_user_agent_model",
        dg: "_user_agent_platform",
        eg: "_user_agent_platform_version",
        fg: "_user_agent_wow64",
        Fa: "user_data",
        ph: "user_data_auto_latency",
        qh: "user_data_auto_meta",
        rh: "user_data_auto_multi",
        sh: "user_data_auto_selectors",
        th: "user_data_auto_status",
        Cd: "user_data_mode",
        Be: "user_data_settings",
        Ca: "user_id",
        nb: "user_properties",
        Gj: "_user_region",
        Dd: "us_privacy_string",
        oa: "value",
        uh: "wbraid_multiple_conversions",
        Ed: "_fpm_parameters",
        Nj: "_host_name",
        Oj: "_in_page_command",
        Pj: "_ip_override",
        Qj: "_is_passthrough_cid",
        Tb: "non_personalized_ads",
        Ke: "_sst_parameters",
        jb: "conversion_label",
        ra: "page_location",
        lb: "global_developer_id_string",
        nc: "tc_privacy_string",
      },
    },
    ih = {},
    jh = Object.freeze(
      ((ih[N.g.na] = 1),
      (ih[N.g.Ef] = 1),
      (ih[N.g.ce] = 1),
      (ih[N.g.hb] = 1),
      (ih[N.g.da] = 1),
      (ih[N.g.Qa] = 1),
      (ih[N.g.Ra] = 1),
      (ih[N.g.cb] = 1),
      (ih[N.g.Dc] = 1),
      (ih[N.g.xb] = 1),
      (ih[N.g.La] = 1),
      (ih[N.g.ic] = 1),
      (ih[N.g.md] = 1),
      (ih[N.g.fa] = 1),
      (ih[N.g.Og] = 1),
      (ih[N.g.rd] = 1),
      (ih[N.g.qe] = 1),
      (ih[N.g.se] = 1),
      (ih[N.g.Gc] = 1),
      (ih[N.g.Yg] = 1),
      (ih[N.g.Jc] = 1),
      (ih[N.g.bh] = 1),
      (ih[N.g.ve] = 1),
      (ih[N.g.Mf] = 1),
      (ih[N.g.kc] = 1),
      (ih[N.g.Ob] = 1),
      (ih[N.g.za] = 1),
      (ih[N.g.Qf] = 1),
      (ih[N.g.Qb] = 1),
      (ih[N.g.Ma] = 1),
      (ih[N.g.mc] = 1),
      (ih[N.g.yd] = 1),
      (ih[N.g.zd] = 1),
      (ih[N.g.Sf] = 1),
      (ih[N.g.Bd] = 1),
      (ih[N.g.Sb] = 1),
      (ih[N.g.oc] = 1),
      (ih[N.g.Be] = 1),
      (ih[N.g.nb] = 1),
      (ih[N.g.Ke] = 1),
      ih)
    );
  Object.freeze([
    N.g.ra,
    N.g.Ea,
    N.g.eb,
    N.g.Sa,
    N.g.Rf,
    N.g.Ca,
    N.g.Lf,
    N.g.ij,
  ]);
  var kh = {},
    lh = Object.freeze(
      ((kh[N.g.Ni] = 1),
      (kh[N.g.Oi] = 1),
      (kh[N.g.Pi] = 1),
      (kh[N.g.Qi] = 1),
      (kh[N.g.Ri] = 1),
      (kh[N.g.Si] = 1),
      (kh[N.g.Ti] = 1),
      (kh[N.g.Ui] = 1),
      (kh[N.g.Vi] = 1),
      (kh[N.g.Xc] = 1),
      kh)
    ),
    mh = {},
    nh = Object.freeze(
      ((mh[N.g.Cg] = 1),
      (mh[N.g.Dg] = 1),
      (mh[N.g.zc] = 1),
      (mh[N.g.Ac] = 1),
      (mh[N.g.Eg] = 1),
      (mh[N.g.ac] = 1),
      (mh[N.g.Bc] = 1),
      (mh[N.g.sb] = 1),
      (mh[N.g.Lb] = 1),
      (mh[N.g.tb] = 1),
      (mh[N.g.Ka] = 1),
      (mh[N.g.Cc] = 1),
      (mh[N.g.Pa] = 1),
      (mh[N.g.Fg] = 1),
      mh)
    ),
    oh = Object.freeze([
      N.g.na,
      N.g.be,
      N.g.hb,
      N.g.ic,
      N.g.Gc,
      N.g.sd,
      N.g.Ma,
      N.g.oc,
    ]),
    ph = Object.freeze([].concat(ta(oh))),
    qh = Object.freeze([N.g.Ra, N.g.se, N.g.zd, N.g.Sf, N.g.me]),
    rh = Object.freeze([].concat(ta(qh))),
    sh = {},
    th =
      ((sh[N.g.N] = "1"),
      (sh[N.g.U] = "2"),
      (sh[N.g.O] = "3"),
      (sh[N.g.xa] = "4"),
      sh),
    uh = {},
    vh = Object.freeze(
      ((uh[N.g.Yd] = 1),
      (uh[N.g.Zd] = 1),
      (uh[N.g.na] = 1),
      (uh[N.g.be] = 1),
      (uh[N.g.ce] = 1),
      (uh[N.g.Da] = 1),
      (uh[N.g.fc] = 1),
      (uh[N.g.Ff] = 1),
      (uh[N.g.de] = 1),
      (uh[N.g.ee] = 1),
      (uh[N.g.fe] = 1),
      (uh[N.g.da] = 1),
      (uh[N.g.he] = 1),
      (uh[N.g.ib] = 1),
      (uh[N.g.ya] = 1),
      (uh[N.g.Qa] = 1),
      (uh[N.g.Ra] = 1),
      (uh[N.g.cb] = 1),
      (uh[N.g.La] = 1),
      (uh[N.g.Aa] = 1),
      (uh[N.g.Jg] = 1),
      (uh[N.g.ie] = 1),
      (uh[N.g.Kg] = 1),
      (uh[N.g.Lg] = 1),
      (uh[N.g.fa] = 1),
      (uh[N.g.lj] = 1),
      (uh[N.g.oe] = 1),
      (uh[N.g.pe] = 1),
      (uh[N.g.Lf] = 1),
      (uh[N.g.Gc] = 1),
      (uh[N.g.kc] = 1),
      (uh[N.g.Ob] = 1),
      (uh[N.g.Sa] = 1),
      (uh[N.g.Nf] = 1),
      (uh[N.g.Of] = 1),
      (uh[N.g.Pf] = 1),
      (uh[N.g.vd] = 1),
      (uh[N.g.ra] = 1),
      (uh[N.g.Ea] = 1),
      (uh[N.g.jh] = 1),
      (uh[N.g.kh] = 1),
      (uh[N.g.lh] = 1),
      (uh[N.g.mh] = 1),
      (uh[N.g.Qb] = 1),
      (uh[N.g.Ma] = 1),
      (uh[N.g.mc] = 1),
      (uh[N.g.yd] = 1),
      (uh[N.g.Bd] = 1),
      (uh[N.g.Ba] = 1),
      (uh[N.g.Sb] = 1),
      (uh[N.g.oc] = 1),
      (uh[N.g.fb] = 1),
      (uh[N.g.Fa] = 1),
      (uh[N.g.Ca] = 1),
      (uh[N.g.oa] = 1),
      uh)
    ),
    wh = {},
    xh = Object.freeze(
      ((wh.search = "s"),
      (wh.youtube = "y"),
      (wh.playstore = "p"),
      (wh.shopping = "h"),
      (wh.ads = "a"),
      (wh.maps = "m"),
      wh)
    );
  Object.freeze(N.g);
  var O = {},
    yh =
      ((O[N.g.Zb] = "gcu"),
      (O[N.g.ub] = "gclgb"),
      (O[N.g.ab] = "gclaw"),
      (O[N.g.Wi] = "gclid_len"),
      (O[N.g.Yc] = "gclgs"),
      (O[N.g.Zc] = "gcllp"),
      (O[N.g.bd] = "gclst"),
      (O[N.g.Zi] = "ndclid"),
      (O[N.g.aj] = "ngad_source"),
      (O[N.g.bj] = "ngbraid"),
      (O[N.g.cj] = "ngclid"),
      (O[N.g.dj] = "ngclsrc"),
      (O[N.g.vb] = "auid"),
      (O[N.g.de] = "dscnt"),
      (O[N.g.ee] = "fcntr"),
      (O[N.g.fe] = "flng"),
      (O[N.g.he] = "mid"),
      (O[N.g.Hg] = "bttype"),
      (O[N.g.jb] = "label"),
      (O[N.g.hc] = "capi"),
      (O[N.g.Gf] = "pscdl"),
      (O[N.g.Aa] = "currency_code"),
      (O[N.g.Jg] = "clobs"),
      (O[N.g.ie] = "vdltv"),
      (O[N.g.Kg] = "clolo"),
      (O[N.g.Lg] = "clolb"),
      (O[N.g.Ng] = "_dbg"),
      (O[N.g.pe] = "oedeld"),
      (O[N.g.kb] = "edid"),
      (O[N.g.pj] = "fdr"),
      (O[N.g.Sg] = "fledge"),
      (O[N.g.ue] = "gac"),
      (O[N.g.Hc] = "gacgb"),
      (O[N.g.Xg] = "gacmcov"),
      (O[N.g.jc] = "gdpr"),
      (O[N.g.lb] = "gdid"),
      (O[N.g.Ic] = "_ng"),
      (O[N.g.eh] = "gsaexp"),
      (O[N.g.Nb] = "frm"),
      (O[N.g.we] = "gtm_up"),
      (O[N.g.ud] = "lps"),
      (O[N.g.xe] = "did"),
      (O[N.g.Nf] = "fcntr"),
      (O[N.g.Of] = "flng"),
      (O[N.g.Pf] = "mid"),
      (O[N.g.vd] = void 0),
      (O[N.g.eb] = "tiba"),
      (O[N.g.Qb] = "rdp"),
      (O[N.g.Bb] = "ecsid"),
      (O[N.g.Tf] = "ga_uid"),
      (O[N.g.Bd] = "delopc"),
      (O[N.g.nc] = "gdpr_consent"),
      (O[N.g.Ba] = "oid"),
      (O[N.g.Fj] = "uptgs"),
      (O[N.g.Wf] = "uaa"),
      (O[N.g.Xf] = "uab"),
      (O[N.g.Yf] = "uafvl"),
      (O[N.g.Zf] = "uamb"),
      (O[N.g.cg] = "uam"),
      (O[N.g.dg] = "uap"),
      (O[N.g.eg] = "uapv"),
      (O[N.g.fg] = "uaw"),
      (O[N.g.ph] = "ec_lat"),
      (O[N.g.qh] = "ec_meta"),
      (O[N.g.rh] = "ec_m"),
      (O[N.g.sh] = "ec_sel"),
      (O[N.g.th] = "ec_s"),
      (O[N.g.Cd] = "ec_mode"),
      (O[N.g.Ca] = "userId"),
      (O[N.g.Dd] = "us_privacy"),
      (O[N.g.oa] = "value"),
      (O[N.g.uh] = "mcov"),
      (O[N.g.Nj] = "hn"),
      (O[N.g.Oj] = "gtm_ee"),
      (O[N.g.Tb] = "npa"),
      (O[N.g.ld] = null),
      (O[N.g.Rb] = null),
      (O[N.g.Sa] = null),
      (O[N.g.da] = null),
      (O[N.g.ra] = null),
      (O[N.g.Ea] = null),
      (O[N.g.Uf] = null),
      (O[N.g.Ed] = null),
      (O[N.g.Yd] = null),
      (O[N.g.Zd] = null),
      O);
  function zh(a, b) {
    if (a) {
      var c = a.split("x");
      c.length === 2 && (Ah(b, "u_w", c[0]), Ah(b, "u_h", c[1]));
    }
  }
  function Bh(a, b) {
    a &&
      (a.length === 2
        ? Ah(b, "hl", a)
        : a.length === 5 &&
          (Ah(b, "hl", a.substring(0, 2)), Ah(b, "gl", a.substring(3, 5))));
  }
  function Ch(a) {
    var b = Eh;
    b = b === void 0 ? Ih : b;
    var c;
    var d = b;
    if (a && a.length) {
      for (var e = [], f = 0; f < a.length; ++f) {
        var g = a[f];
        g &&
          e.push({
            item_id: d(g),
            quantity: g.quantity,
            value: g.price,
            start_date: g.start_date,
            end_date: g.end_date,
          });
      }
      c = e;
    } else c = [];
    var k;
    var m = c;
    if (m) {
      for (var n = [], p = 0; p < m.length; p++) {
        var q = m[p],
          r = [];
        q &&
          (r.push(Jh(q.value)),
          r.push(Jh(q.quantity)),
          r.push(Jh(q.item_id)),
          r.push(Jh(q.start_date)),
          r.push(Jh(q.end_date)),
          n.push("(" + r.join("*") + ")"));
      }
      k = n.length > 0 ? n.join("") : "";
    } else k = "";
    return k;
  }
  function Ih(a) {
    return Kh(a.item_id, a.id, a.item_name);
  }
  function Kh() {
    for (
      var a = l(ya.apply(0, arguments)), b = a.next();
      !b.done;
      b = a.next()
    ) {
      var c = b.value;
      if (c !== null && c !== void 0) return c;
    }
  }
  function Lh(a) {
    if (a && a.length) {
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d && d.estimated_delivery_date
          ? b.push("" + d.estimated_delivery_date)
          : b.push("");
      }
      return b.join(",");
    }
  }
  function Ah(a, b, c) {
    c === void 0 || c === null || (c === "" && !Zf[b]) || (a[b] = c);
  }
  function Jh(a) {
    return typeof a !== "number" && typeof a !== "string" ? "" : a.toString();
  }
  function Mh(a) {
    return Nh ? E.querySelectorAll(a) : null;
  }
  function Oh(a, b) {
    if (!Nh) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!E.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (d !== null && d.nodeType === 1);
    return null;
  }
  var Ph = !1;
  if (E.querySelectorAll)
    try {
      var Qh = E.querySelectorAll(":root");
      Qh && Qh.length == 1 && Qh[0] == E.documentElement && (Ph = !0);
    } catch (a) {}
  var Nh = Ph;
  function Rh(a) {
    switch (a) {
      case 0:
        break;
      case 9:
        return "e4";
      case 6:
        return "e5";
      case 14:
        return "e6";
      default:
        return "e7";
    }
  }
  var Sh = /^[0-9A-Fa-f]{64}$/;
  function Th(a) {
    try {
      return new TextEncoder().encode(a);
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d < 128
          ? b.push(d)
          : d < 2048
          ? b.push(192 | (d >> 6), 128 | (d & 63))
          : d < 55296 || d >= 57344
          ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
          : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
            b.push(
              240 | (d >> 18),
              128 | ((d >> 12) & 63),
              128 | ((d >> 6) & 63),
              128 | (d & 63)
            ));
      }
      return new Uint8Array(b);
    }
  }
  function Uh(a) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    var b;
    if ((b = A.crypto) == null ? 0 : b.subtle) {
      if (Sh.test(a)) return Promise.resolve(a);
      try {
        var c = Th(a);
        return A.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return A.btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    } else return Promise.resolve("e1");
  }
  function Vh(a, b) {
    if (a === "") return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Wh = [],
    Xh = {};
  function Yh(a) {
    return Wh[a] === void 0 ? !1 : Wh[a];
  }
  var Zh = [];
  function $h(a) {
    switch (a) {
      case 0:
        return 0;
      case 48:
        return 1;
      case 49:
        return 2;
      case 50:
        return 8;
      case 77:
        return 3;
      case 101:
        return 4;
      case 103:
        return 5;
      case 119:
        return 6;
      case 120:
        return 10;
      case 121:
        return 7;
    }
  }
  function ai(a, b) {
    Zh[a] = b;
    var c = $h(a);
    c !== void 0 && (Wh[c] = b);
  }
  function P(a) {
    ai(a, !0);
  }
  P(37);
  P(33);
  P(34);
  P(35);
  P(36);
  P(52);
  P(92);
  P(18);
  P(128);
  P(17);
  P(135);
  P(127);
  P(78);
  P(104);
  P(6);
  P(53);
  P(4);
  P(97);
  P(123);
  P(89);
  P(83);
  P(102);
  P(141);
  P(114);
  P(115);
  P(136);
  P(103);
  P(5);
  ai(22, !1), P(23);
  P(119);
  Xh[1] = Vh("1", 6e4);
  Xh[3] = Vh("10", 1);
  Xh[2] = Vh("", 50);
  P(28);
  P(13);
  P(82);
  P(107);
  P(124);
  var ci = !1;
  P(8);
  P(108);
  P(70);
  P(139);
  P(121);
  P(111);
  P(26);
  P(27);
  P(73);
  P(120);
  P(85);
  P(88);
  P(99);
  P(57);
  P(87);
  P(118);
  P(86);
  P(30);
  P(80);
  P(54);
  P(21);
  P(55);

  P(74);
  function R(a) {
    return !!Zh[a];
  }
  function bi(a, b) {
    for (var c = !1, d = !1, e = 0; c === d; )
      if (
        ((c = (((Math.random() * 4294967296) | 0) & 1) === 0),
        (d = (((Math.random() * 4294967296) | 0) & 1) === 0),
        e++,
        e > 30)
      )
        return;
    c ? P(b) : P(a);
  }
  function T(a) {
    Va("GTM", a);
  }
  var Hi = { En: "101925629~102067555~102067808~102081485~102198178" };
  var Ii = {},
    Ji = (A.google_tag_manager = A.google_tag_manager || {});
  Ii.zh = "4cc1";
  Ii.Je = Number("0") || 0;
  Ii.rb = "dataLayer";
  Ii.Hn =
    "ChAIgKWPuwYQnYqM+bPHqu0sEiUAU80fQQoBvLlbBTMYxaT1gWYfhXUknt4jCSBchuSxaMwhkSy0GgIfSQ\x3d\x3d";
  var Ki = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    Li = { __paused: 1, __tg: 1 },
    Mi;
  for (Mi in Ki) Ki.hasOwnProperty(Mi) && (Li[Mi] = 1);
  var Ni = ib(""),
    Oi = !1,
    Pi,
    Qi = !1;
  Pi = Qi;
  var Ri,
    Si = !1;
  Ri = Si;
  var Ti,
    Ui = !1;
  Ti = Ui;
  Ii.Bf = "www.googletagmanager.com";
  var Vi = "" + Ii.Bf + (Pi ? "/gtag/js" : "/gtm.js"),
    Wi = null,
    Xi = null,
    Yi = {},
    Zi = {};
  function $i() {
    var a = Ji.sequence || 1;
    Ji.sequence = a + 1;
    return a;
  }
  Ii.Wk = "";
  var aj = "";
  Ii.Ah = aj;
  var bj = function () {
      this.j = new Set();
    },
    dj = function () {
      return Array.from(cj.aa.j).join("~");
    },
    cj = new (function () {
      this.aa = new bj();
      this.C = !1;
      this.j = 0;
      this.K = this.P = this.Ta = this.H = "";
    })();
  function ej() {
    var a = cj.H.length;
    return cj.H[a - 1] === "/" ? cj.H.substring(0, a - 1) : cj.H;
  }
  function fj() {
    return cj.C ? (R(80) ? cj.j === 0 : cj.j !== 1) : !1;
  }
  function gj(a) {
    for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var hj = new eb(),
    ij = {},
    jj = {},
    mj = {
      name: Ii.rb,
      set: function (a, b) {
        Rc(vb(a, b), ij);
        kj();
      },
      get: function (a) {
        return lj(a, 2);
      },
      reset: function () {
        hj = new eb();
        ij = {};
        kj();
      },
    };
  function lj(a, b) {
    return b != 2 ? hj.get(a) : nj(a);
  }
  function nj(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = ij, e = 0; e < c.length; e++) {
      if (d === null) return !1;
      if (d === void 0) break;
      d = d[c[e]];
      if (b.indexOf(d) !== -1) return;
    }
    return d;
  }
  function oj(a, b) {
    jj.hasOwnProperty(a) || (hj.set(a, b), Rc(vb(a, b), ij), kj());
  }
  function pj() {
    for (
      var a = [
          "gtm.allowlist",
          "gtm.blocklist",
          "gtm.whitelist",
          "gtm.blacklist",
          "tagTypeBlacklist",
        ],
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b],
        d = lj(c, 1);
      if (Array.isArray(d) || Qc(d)) d = Rc(d, null);
      jj[c] = d;
    }
  }
  function kj(a) {
    fb(jj, function (b, c) {
      hj.set(b, c);
      Rc(vb(b), ij);
      Rc(vb(b, c), ij);
      a && delete jj[b];
    });
  }
  function qj(a, b) {
    var c,
      d = (b === void 0 ? 2 : b) !== 1 ? nj(a) : hj.get(a);
    Oc(d) === "array" || Oc(d) === "object" ? (c = Rc(d, null)) : (c = d);
    return c;
  }
  var vj = /:[0-9]+$/,
    wj = /^\d+\.fls\.doubleclick\.net$/;
  function xj(a, b, c, d) {
    for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
      var k = l(g.value.split("=")),
        m = k.next().value,
        n = sa(k);
      if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
        var p = n.join("=");
        if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
        e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
      }
    }
    return c ? e : void 0;
  }
  function yj(a, b, c, d, e) {
    b && (b = String(b).toLowerCase());
    if (b === "protocol" || b === "port")
      a.protocol = zj(a.protocol) || zj(A.location.protocol);
    b === "port"
      ? (a.port = String(
          Number(a.hostname ? a.port : A.location.port) ||
            (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")
        ))
      : b === "host" &&
        (a.hostname = (a.hostname || A.location.hostname)
          .replace(vj, "")
          .toLowerCase());
    return Aj(a, b, c, d, e);
  }
  function Aj(a, b, c, d, e) {
    var f,
      g = zj(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
      case "url_no_fragment":
        f = Bj(a);
        break;
      case "protocol":
        f = g;
        break;
      case "host":
        f = a.hostname.replace(vj, "").toLowerCase();
        if (c) {
          var k = /^www\d*\./.exec(f);
          k && k[0] && (f = f.substring(k[0].length));
        }
        break;
      case "port":
        f = String(
          Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : "")
        );
        break;
      case "path":
        a.pathname || a.hostname || Va("TAGGING", 1);
        f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
        var m = f.split("/");
        (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
        f = m.join("/");
        break;
      case "query":
        f = a.search.replace("?", "");
        e && (f = xj(f, e, !1));
        break;
      case "extension":
        var n = a.pathname.split(".");
        f = n.length > 1 ? n[n.length - 1] : "";
        f = f.split("/")[0];
        break;
      case "fragment":
        f = a.hash.replace("#", "");
        break;
      default:
        f = a && a.href;
    }
    return f;
  }
  function zj(a) {
    return a ? a.replace(":", "").toLowerCase() : "";
  }
  function Bj(a) {
    var b = "";
    if (a && a.href) {
      var c = a.href.indexOf("#");
      b = c < 0 ? a.href : a.href.substring(0, c);
    }
    return b;
  }
  var Cj = {},
    Dj = 0;
  function Ej(a) {
    var b = Cj[a];
    if (!b) {
      var c = E.createElement("a");
      a && (c.href = a);
      var d = c.pathname;
      d[0] !== "/" && (a || Va("TAGGING", 1), (d = "/" + d));
      var e = c.hostname.replace(vj, "");
      b = {
        href: c.href,
        protocol: c.protocol,
        host: c.host,
        hostname: e,
        pathname: d,
        search: c.search,
        hash: c.hash,
        port: c.port,
      };
      Dj < 5 && ((Cj[a] = b), Dj++);
    }
    return b;
  }
  function Fj(a) {
    var b = Ej(A.location.href),
      c = yj(b, "host", !1);
    if (c && c.match(wj)) {
      var d = yj(b, "path");
      if (d) {
        var e = d.split(a + "=");
        if (e.length > 1) return e[1].split(";")[0].split("?")[0];
      }
    }
  }
  var Gj = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function Hj(a, b) {
    if (a) {
      var c = "" + a;
      c.indexOf("http://") !== 0 &&
        c.indexOf("https://") !== 0 &&
        (c = "https://" + c);
      c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
      return Ej("" + c + b).href;
    }
  }
  function Ij(a, b) {
    if (fj() || Ri) return Hj(a, b);
  }
  function Jj() {
    return !!Ii.Ah && Ii.Ah.split("@@").join("") !== "SGTM_TOKEN";
  }
  function Kj(a) {
    for (var b = l([N.g.yd, N.g.Sb]), c = b.next(); !c.done; c = b.next()) {
      var d = U(a, c.value);
      if (d) return d;
    }
  }
  function Lj(a, b) {
    return fj() ? "" + ej() + (b ? Gj[a] || "" : "") : a;
  }
  function Mj(a) {
    var b = String(a[He.sa] || "").replace(/_/g, "");
    return sb(b, "cvt") ? "cvt" : b;
  }
  var Nj =
    A.location.search.indexOf("?gtm_latency=") >= 0 ||
    A.location.search.indexOf("&gtm_latency=") >= 0;
  var Oj = { sampleRate: "0.005000", Sk: "", Dn: "0.01" },
    Pj = Math.random(),
    Qj;
  if (!(Qj = Nj)) {
    var Rj = Oj.sampleRate;
    Qj = Pj < Number(Rj);
  }
  var Sj = Qj,
    Tj =
      (fc == null ? void 0 : fc.includes("gtm_debug=d")) ||
      Nj ||
      Pj >= 1 - Number(Oj.Dn);
  var Uj = /gtag[.\/]js/,
    Vj = /gtm[.\/]js/,
    Wj = !1;
  function Xj(a) {
    if (Wj) return "1";
    var b,
      c = (b = a.scriptElement) == null ? void 0 : b.src;
    if (c) {
      if (Uj.test(c)) return "3";
      if (Vj.test(c)) return "2";
    }
    return "0";
  }
  function Yj(a, b) {
    var c = Zj();
    c.pending || (c.pending = []);
    bb(c.pending, function (d) {
      return (
        d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      );
    }) || c.pending.push({ target: a, onLoad: b });
  }
  function ak() {
    var a = A.google_tags_first_party;
    Array.isArray(a) || (a = []);
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return Object.freeze(b);
  }
  var bk = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
    this.injectedFirstPartyContainers = {};
    this.injectedFirstPartyContainers = ak();
  };
  function Zj() {
    var a = gc("google_tag_data", {}),
      b = a.tidr;
    (b && typeof b === "object") || ((b = new bk()), (a.tidr = b));
    var c = b;
    c.container || (c.container = {});
    c.destination || (c.destination = {});
    c.canonical || (c.canonical = {});
    c.pending || (c.pending = []);
    c.siloed || (c.siloed = []);
    c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = ak());
    return c;
  }
  var ck = {},
    dk = !1,
    Mf = {
      ctid: "GTM-P8L5VGPN",
      canonicalContainerId: "184092900",
      Bk: "GTM-P8L5VGPN",
      Ck: "GTM-P8L5VGPN",
    };
  ck.Ge = ib("");
  function fk() {
    return (
      ck.Ge &&
      gk().some(function (a) {
        return a === Mf.ctid;
      })
    );
  }
  function hk() {
    var a = ik();
    return dk ? a.map(jk) : a;
  }
  function kk() {
    var a = gk();
    return dk ? a.map(jk) : a;
  }
  function lk() {
    return mk(Mf.ctid);
  }
  function nk() {
    return mk(Mf.canonicalContainerId || "_" + Mf.ctid);
  }
  function ik() {
    return Mf.Bk ? Mf.Bk.split("|") : [Mf.ctid];
  }
  function gk() {
    return Mf.Ck ? Mf.Ck.split("|") : [];
  }
  function ok() {
    var a = pk(qk()),
      b = a && a.parent;
    if (b) return pk(b);
  }
  function pk(a) {
    var b = Zj();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
  }
  function mk(a) {
    return dk ? jk(a) : a;
  }
  function jk(a) {
    return "siloed_" + a;
  }
  function rk(a) {
    return dk ? sk(a) : a;
  }
  function sk(a) {
    a = String(a);
    return sb(a, "siloed_") ? a.substring(7) : a;
  }
  function tk() {
    var a = !1;
    if (a) {
      var b = Zj();
      if (b.siloed) {
        for (
          var c = [], d = ik().map(jk), e = gk().map(jk), f = {}, g = 0;
          g < b.siloed.length;
          f = { jg: void 0 }, g++
        )
          (f.jg = b.siloed[g]),
            !dk &&
            bb(
              f.jg.isDestination ? e : d,
              (function (k) {
                return function (m) {
                  return m === k.jg.ctid;
                };
              })(f)
            )
              ? (dk = !0)
              : c.push(f.jg);
        b.siloed = c;
      }
    }
  }
  function uk() {
    var a = Zj();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = hk(), f = kk(), g = {}, k = 0;
        k < a.pending.length;
        g = { qf: void 0 }, k++
      )
        (g.qf = a.pending[k]),
          bb(
            g.qf.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.qf.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.qf.onLoad), (d = !0))
            : c.push(g.qf);
      a.pending = c;
      if (b)
        try {
          b(nk());
        } catch (m) {}
    }
  }
  function vk() {
    for (
      var a = Mf.ctid,
        b = hk(),
        c = kk(),
        d = function (n, p) {
          var q = {
            canonicalContainerId: Mf.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          };
          ec && (q.scriptElement = ec);
          fc && (q.scriptSource = fc);
          if (ok() === void 0) {
            var r;
            a: {
              if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                var u;
                b: {
                  var v,
                    t = (v = q.scriptElement) == null ? void 0 : v.src;
                  if (t) {
                    for (
                      var w = cj.C,
                        x = Ej(t),
                        y = w ? x.pathname : "" + x.hostname + x.pathname,
                        B = E.scripts,
                        C = "",
                        D = 0;
                      D < B.length;
                      ++D
                    ) {
                      var H = B[D];
                      if (
                        !(
                          H.innerHTML.length === 0 ||
                          (!w &&
                            H.innerHTML.indexOf(
                              q.scriptContainerId || "SHOULD_NOT_BE_SET"
                            ) < 0) ||
                          H.innerHTML.indexOf(y) < 0
                        )
                      ) {
                        if (H.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                          u = String(D);
                          break b;
                        }
                        C = String(D);
                      }
                    }
                    if (C) {
                      u = C;
                      break b;
                    }
                  }
                  u = void 0;
                }
                var J = u;
                if (J) {
                  Wj = !0;
                  r = J;
                  break a;
                }
              }
              var F = [].slice.call(document.scripts);
              r = q.scriptElement ? String(F.indexOf(q.scriptElement)) : "-1";
            }
            q.htmlLoadOrder = r;
            q.loadScriptType = Xj(q);
          }
          var S = p ? e.destination : e.container,
            M = S[n];
          M ? (p && M.state === 0 && T(93), Object.assign(M, q)) : (S[n] = q);
        },
        e = Zj(),
        f = l(b),
        g = f.next();
      !g.done;
      g = f.next()
    )
      d(g.value, !1);
    for (var k = l(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
    e.canonical[nk()] = {};
    uk();
  }
  function wk(a) {
    return !!Zj().container[a];
  }
  function xk(a) {
    var b = Zj().destination[a];
    return !!b && !!b.state;
  }
  function qk() {
    return { ctid: lk(), isDestination: ck.Ge };
  }
  function yk(a) {
    var b = Zj();
    (b.siloed = b.siloed || []).push(a);
  }
  function zk() {
    var a = Zj().container,
      b;
    for (b in a) if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
    return !1;
  }
  function Ak() {
    var a = {};
    fb(Zj().destination, function (b, c) {
      c.state === 0 && (a[sk(b)] = c);
    });
    return a;
  }
  function Bk(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      a.context.source === 1 &&
      a.parent.ctid.indexOf("GTM-") !== 0
    );
  }
  var Ck = "/td?id=" + Mf.ctid,
    Dk = ["v", "t", "pid", "dl", "tdp"],
    Ek = ["mcc"],
    Fk = {},
    Gk = {};
  function Hk(a, b, c) {
    Gk[a] = b;
    (c === void 0 || c) && Ik(a);
  }
  function Ik(a, b) {
    if (Fk[a] === void 0 || (b === void 0 ? 0 : b)) Fk[a] = !0;
  }
  function Jk(a) {
    a = a === void 0 ? !1 : a;
    var b = Object.keys(Fk)
      .filter(function (c) {
        return Fk[c] === !0 && Gk[c] !== void 0 && (a || !Ek.includes(c));
      })
      .map(function (c) {
        var d = Gk[c];
        typeof d === "function" && (d = d());
        return d ? "&" + c + "=" + d : "";
      })
      .join("");
    return "" + Lj("https://www.googletagmanager.com") + Ck + ("" + b + "&z=0");
  }
  function Kk() {
    Object.keys(Fk).forEach(function (a) {
      Dk.indexOf(a) < 0 && (Fk[a] = !1);
    });
  }
  function Lk(a) {
    a = a === void 0 ? !1 : a;
    if (Tj && Mf.ctid) {
      var b = Jk(a);
      a ? Ac(b) : qc(b);
      Kk();
    }
  }
  function Mk() {
    Object.keys(Fk).filter(function (a) {
      return Fk[a] && !Dk.includes(a);
    }).length > 0 && Lk(!0);
  }
  var Nk = cb();
  function Ok() {
    Nk = cb();
  }
  function Pk() {
    Hk("v", "3");
    Hk("t", "t");
    Hk("pid", function () {
      return String(Nk);
    });
    rc(A, "pagehide", Mk);
    A.setInterval(Ok, 864e5);
  }
  function Qk() {
    var a = gc("google_tag_data", {});
    return (a.ics = a.ics || new Rk());
  }
  var Rk = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.j = [];
  };
  Rk.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    Va("TAGGING", 19);
    b == null ? Va("TAGGING", 18) : Sk(this, a, b === "granted", c, d, e, f, g);
  };
  Rk.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      Sk(this, a[d], void 0, void 0, "", "", b, c);
  };
  var Sk = function (a, b, c, d, e, f, g, k) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && z(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && g > 0 && n.update === void 0),
        u = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: c !== void 0 ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if (e !== "" || n.default !== !1) m[b] = u;
      r &&
        A.setTimeout(function () {
          m[b] === u &&
            u.quiet &&
            (Va("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, k),
            a.notifyListeners());
        }, g);
    }
  };
  h = Rk.prototype;
  h.clearTimeout = function (a, b, c) {
    var d = [a],
      e = c.delegatedConsentTypes,
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      k = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = l(d), n = m.next(); !n.done; n = m.next()) Tk(this, n.value);
    } else if (b !== void 0 && k !== b)
      for (var p = l(d), q = p.next(); !q.done; q = p.next()) Tk(this, q.value);
  };
  h.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (b != null) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = b === "granted";
      this.clearTimeout(a, d, c);
    }
  };
  h.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      k = g.declare_region,
      m = c && z(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: b === "granted",
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if (d !== "" || g.declare !== !1) f[a] = n;
    }
  };
  h.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    d.implicit !== !1 && (d.implicit = b === "granted");
  };
  h.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (e !== void 0) return e ? 1 : 2;
    if (b.usedContainerScopedDefaults) {
      var f = b.containerScopedDefaults[a];
      if (f === 3) return 1;
      if (f === 2) return 2;
    } else if (((e = d.default), e !== void 0)) return e ? 1 : 2;
    if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var g = b.delegatedConsentTypes[a],
        k = c[g] || {};
      e = k.update;
      if (e !== void 0) return e ? 1 : 2;
      if (b.usedContainerScopedDefaults) {
        var m = b.containerScopedDefaults[g];
        if (m === 3) return 1;
        if (m === 2) return 2;
      } else if (((e = k.default), e !== void 0)) return e ? 1 : 2;
    }
    e = d.declare;
    if (e !== void 0) return e ? 1 : 2;
    e = d.implicit;
    return e !== void 0 ? (e ? 3 : 4) : 0;
  };
  h.addListener = function (a, b) {
    this.j.push({ consentTypes: a, Jd: b });
  };
  var Tk = function (a, b) {
    for (var c = 0; c < a.j.length; ++c) {
      var d = a.j[c];
      Array.isArray(d.consentTypes) &&
        d.consentTypes.indexOf(b) !== -1 &&
        (d.Dk = !0);
    }
  };
  Rk.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.j.length; ++c) {
      var d = this.j[c];
      if (d.Dk) {
        d.Dk = !1;
        try {
          d.Jd({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var Uk = !1,
    Vk = !1,
    Wk = {},
    Xk = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
      selectedAllCorePlatformServices: !1,
      containerScopedDefaults:
        ((Wk.ad_storage = 1),
        (Wk.analytics_storage = 1),
        (Wk.ad_user_data = 1),
        (Wk.ad_personalization = 1),
        Wk),
      usedContainerScopedDefaults: !1,
    };
  function Yk(a) {
    var b = Qk();
    b.accessedAny = !0;
    return (z(a) ? [a] : a).every(function (c) {
      switch (b.getConsentState(c, Xk)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    });
  }
  function Zk(a) {
    var b = Qk();
    b.accessedAny = !0;
    return b.getConsentState(a, Xk);
  }
  function $k(a) {
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
      var e = d.value;
      b[e] = Xk.corePlatformServices[e] !== !1;
    }
    return b;
  }
  function al(a) {
    var b = Qk();
    b.accessedAny = !0;
    return !(b.entries[a] || {}).quiet;
  }
  function bl() {
    if (!Yh(9)) return !1;
    var a = Qk();
    a.accessedAny = !0;
    if (a.active) return !0;
    if (!Xk.usedContainerScopedDefaults) return !1;
    for (
      var b = l(Object.keys(Xk.containerScopedDefaults)), c = b.next();
      !c.done;
      c = b.next()
    )
      if (Xk.containerScopedDefaults[c.value] !== 1) return !0;
    return !1;
  }
  function cl(a, b) {
    Qk().addListener(a, b);
  }
  function dl(a, b) {
    Qk().notifyListeners(a, b);
  }
  function el(a, b) {
    function c() {
      for (var e = 0; e < b.length; e++) if (!al(b[e])) return !0;
      return !1;
    }
    if (c()) {
      var d = !1;
      cl(b, function (e) {
        d || c() || ((d = !0), a(e));
      });
    } else a({});
  }
  function fl(a, b) {
    function c() {
      for (var k = [], m = 0; m < e.length; m++) {
        var n = e[m];
        Yk(n) && !f[n] && k.push(n);
      }
      return k;
    }
    function d(k) {
      for (var m = 0; m < k.length; m++) f[k[m]] = !0;
    }
    var e = z(b) ? [b] : b,
      f = {},
      g = c();
    g.length !== e.length &&
      (d(g),
      cl(e, function (k) {
        function m(q) {
          q.length !== 0 && (d(q), (k.consentTypes = q), a(k));
        }
        var n = c();
        if (n.length !== 0) {
          var p = Object.keys(f).length;
          n.length + p >= e.length
            ? m(n)
            : A.setTimeout(function () {
                m(c());
              }, 500);
        }
      }));
  }
  var gl = [
      "ad_storage",
      "analytics_storage",
      "ad_user_data",
      "ad_personalization",
    ],
    hl = !1,
    il = !1;
  function jl() {
    !il &&
      hl &&
      (gl.some(function (a) {
        return Xk.containerScopedDefaults[a] !== 1;
      }) ||
        kl("mbc"));
    il = !0;
  }
  function kl(a) {
    Tj && (Hk(a, "1"), Lk());
  }
  function ll(a) {
    Va("HEALTH", a);
  }
  var ml;
  try {
    ml = JSON.parse(
      Ta(
        "eyIwIjoiVVMiLCIxIjoiVVMtVFgiLCIyIjpmYWxzZSwiMyI6IiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
      )
    );
  } catch (a) {
    T(123), ll(2), (ml = {});
  }
  function nl() {
    return ml["0"] || "";
  }
  function ol() {
    return ml["1"] || "";
  }
  function pl() {
    var a = !1;
    return a;
  }
  function ql() {
    return ml["6"] !== !1;
  }
  function rl() {
    var a = "";
    return a;
  }
  function sl() {
    var a = !1;
    return a;
  }
  function tl() {
    var a = "";
    return a;
  }
  var ul = [N.g.N, N.g.U, N.g.O, N.g.xa],
    vl,
    wl;
  function xl(a) {
    for (
      var b = a[N.g.Kb], c = Array.isArray(b) ? b : [b], d = { bf: 0 };
      d.bf < c.length;
      d = { bf: d.bf }, ++d.bf
    )
      fb(
        a,
        (function (e) {
          return function (f, g) {
            if (f !== N.g.Kb) {
              var k = c[e.bf],
                m = nl(),
                n = ol();
              Vk = !0;
              Uk && Va("TAGGING", 20);
              Qk().declare(f, g, k, m, n);
            }
          };
        })(d)
      );
  }
  function yl(a) {
    jl();
    !wl && vl && kl("crc");
    wl = !0;
    var b = a[N.g.Kb];
    b && T(40);
    var c = a[N.g.zf];
    c && T(41);
    for (
      var d = Array.isArray(b) ? b : [b], e = { cf: 0 };
      e.cf < d.length;
      e = { cf: e.cf }, ++e.cf
    )
      fb(
        a,
        (function (f) {
          return function (g, k) {
            if (g !== N.g.Kb && g !== N.g.zf) {
              var m = d[f.cf],
                n = Number(c),
                p = nl(),
                q = ol();
              n = n === void 0 ? 0 : n;
              Uk = !0;
              Vk && Va("TAGGING", 20);
              Qk().default(g, k, m, p, q, n, Xk);
            }
          };
        })(e)
      );
  }
  function zl(a) {
    Xk.usedContainerScopedDefaults = !0;
    var b = a[N.g.Kb];
    if (b) {
      var c = Array.isArray(b) ? b : [b];
      if (!c.includes(ol()) && !c.includes(nl())) return;
    }
    fb(a, function (d, e) {
      switch (d) {
        case "ad_storage":
        case "analytics_storage":
        case "ad_user_data":
        case "ad_personalization":
          break;
        default:
          return;
      }
      Xk.usedContainerScopedDefaults = !0;
      Xk.containerScopedDefaults[d] = e === "granted" ? 3 : 2;
    });
  }
  function Al(a, b) {
    jl();
    vl = !0;
    fb(a, function (c, d) {
      Uk = !0;
      Vk && Va("TAGGING", 20);
      Qk().update(c, d, Xk);
    });
    dl(b.eventId, b.priorityId);
  }
  function Bl(a) {
    a.hasOwnProperty("all") &&
      ((Xk.selectedAllCorePlatformServices = !0),
      fb(xh, function (b) {
        Xk.corePlatformServices[b] = a.all === "granted";
        Xk.usedCorePlatformServices = !0;
      }));
    fb(a, function (b, c) {
      b !== "all" &&
        ((Xk.corePlatformServices[b] = c === "granted"),
        (Xk.usedCorePlatformServices = !0));
    });
  }
  function V(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function (b) {
      return Yk(b);
    });
  }
  function Cl(a, b) {
    cl(a, b);
  }
  function Dl(a, b) {
    fl(a, b);
  }
  function El(a, b) {
    el(a, b);
  }
  function Fl() {
    var a = [N.g.N, N.g.xa, N.g.O];
    Qk().waitForUpdate(a, 500, Xk);
  }
  function Gl(a) {
    for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      Qk().clearTimeout(d, void 0, Xk);
    }
    dl();
  }
  var Hl = !1,
    Il = [];
  var Jl = {
      ek: "service_worker_endpoint",
      Bh: "shared_user_id",
      Ch: "shared_user_id_requested",
      Le: "shared_user_id_source",
      Af: "cookie_deprecation_label",
    },
    Kl;
  function Ll(a) {
    if (!Kl) {
      Kl = {};
      for (var b = l(Object.keys(Jl)), c = b.next(); !c.done; c = b.next())
        Kl[Jl[c.value]] = !0;
    }
    return !!Kl[a];
  }
  function Ml(a, b) {
    b = b === void 0 ? !1 : b;
    if (Ll(a)) {
      var c,
        d,
        e =
          (d = (c = gc("google_tag_data", {})).xcd) != null ? d : (c.xcd = {});
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          k = {},
          m = {
            set: function (n) {
              f = n;
              m.notify();
            },
            get: function () {
              return f;
            },
            subscribe: function (n) {
              k[String(g)] = n;
              return g++;
            },
            unsubscribe: function (n) {
              var p = String(n);
              return k.hasOwnProperty(p) ? (delete k[p], !0) : !1;
            },
            notify: function () {
              for (
                var n = l(Object.keys(k)), p = n.next();
                !p.done;
                p = n.next()
              ) {
                var q = p.value;
                try {
                  k[q](a, f);
                } catch (r) {}
              }
            },
          };
        return (e[a] = m);
      }
    }
  }
  function Nl(a, b) {
    var c = Ml(a, !0);
    c && c.set(b);
  }
  function Ol(a) {
    var b;
    return (b = Ml(a)) == null ? void 0 : b.get();
  }
  function Pl(a, b) {
    if (typeof b === "function") {
      var c;
      return (c = Ml(a, !0)) == null ? void 0 : c.subscribe(b);
    }
  }
  function Ql(a, b) {
    var c = Ml(a);
    return c ? c.unsubscribe(b) : !1;
  }
  function Rl() {
    if (Ji.pscdl !== void 0) Ol(Jl.Af) === void 0 && Nl(Jl.Af, Ji.pscdl);
    else {
      var a = function (c) {
          Ji.pscdl = c;
          Nl(Jl.Af, c);
        },
        b = function () {
          a("error");
        };
      try {
        cc.cookieDeprecationLabel
          ? (a("pending"),
            cc.cookieDeprecationLabel.getValue().then(a).catch(b))
          : a("noapi");
      } catch (c) {
        b(c);
      }
    }
  }
  function Sl(a, b) {
    b &&
      fb(b, function (c, d) {
        typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d));
      });
  }
  var Tl = /[A-Z]+/,
    Ul = /\s/;
  function Vl(a, b) {
    if (z(a)) {
      a = lb(a);
      var c = a.indexOf("-");
      if (!(c < 0)) {
        var d = a.substring(0, c);
        if (Tl.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if (d === "DC" && f.length === 2) {
              var k = g(f[1]);
              k.length === 2 && ((f[1] = k[0]), f.push(k[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (Ul.test(f[m]) && (d !== "AW" || m !== 1))) return;
          }
          return { id: a, prefix: d, destinationId: d + "-" + f[0], ids: f };
        }
      }
    }
  }
  function Wl(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = Vl(a[d], b);
      e && (c[e.id] = e);
    }
    Xl(c);
    var f = [];
    fb(c, function (g, k) {
      f.push(k);
    });
    return f;
  }
  function Xl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        d.prefix === "AW" && d.ids[Yl[2]] && b.push(d.destinationId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Zl = {},
    Yl =
      ((Zl[0] = 0),
      (Zl[1] = 0),
      (Zl[2] = 1),
      (Zl[3] = 0),
      (Zl[4] = 1),
      (Zl[5] = 2),
      (Zl[6] = 0),
      (Zl[7] = 0),
      (Zl[8] = 0),
      Zl);
  var $l = Number("") || 500,
    am = {},
    bm = {},
    cm = { initialized: 11, complete: 12, interactive: 13 },
    dm = {},
    em = Object.freeze(((dm[N.g.Ma] = !0), dm)),
    fm =
      E.location.search.indexOf("?gtm_diagnostics=") >= 0 ||
      E.location.search.indexOf("&gtm_diagnostics=") >= 0,
    gm = void 0;
  function hm(a, b) {
    if (b.length && Tj) {
      var c;
      (c = am)[a] != null || (c[a] = []);
      bm[a] != null || (bm[a] = []);
      var d = b.filter(function (e) {
        return !bm[a].includes(e);
      });
      am[a].push.apply(am[a], ta(d));
      bm[a].push.apply(bm[a], ta(d));
      !gm &&
        d.length > 0 &&
        (Ik("tdc", !0),
        (gm = A.setTimeout(function () {
          Lk();
          am = {};
          gm = void 0;
        }, $l)));
    }
  }
  function im(a, b, c) {
    if (Tj && a === "config") {
      var d,
        e = (d = Vl(b)) == null ? void 0 : d.ids;
      if (!(e && e.length > 1)) {
        var f,
          g = gc("google_tag_data", {});
        g.td || (g.td = {});
        f = g.td;
        var k = Rc(c.K);
        Rc(c.j, k);
        var m = [],
          n;
        for (n in f)
          if (f.hasOwnProperty(n)) {
            var p = jm(f[n], k);
            p.length && (fm && console.log(p), m.push(n));
          }
        m.length && (hm(b, m), Va("TAGGING", cm[E.readyState] || 14));
        f[b] = k;
      }
    }
  }
  function km(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function jm(a, b, c, d) {
    c = c === void 0 ? {} : c;
    d = d === void 0 ? "" : d;
    if (a === b) return [];
    var e = function (r, u) {
        var v;
        Oc(u) === "object" ? (v = u[r]) : Oc(u) === "array" && (v = u[r]);
        return v === void 0 ? em[r] : v;
      },
      f = km(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var k = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = Oc(m) === "object" || Oc(m) === "array",
          q = Oc(n) === "object" || Oc(n) === "array";
        if (p && q) jm(m, n, c, k);
        else if (p || q || m !== n) c[k] = !0;
      }
    return Object.keys(c);
  }
  function lm() {
    Hk(
      "tdc",
      function () {
        gm && (A.clearTimeout(gm), (gm = void 0));
        var a = [],
          b;
        for (b in am) am.hasOwnProperty(b) && a.push(b + "*" + am[b].join("."));
        return a.length ? a.join("!") : void 0;
      },
      !1
    );
  }
  var mm = function (a, b, c, d, e, f, g, k, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.j = c;
      this.P = d;
      this.H = e;
      this.K = f;
      this.C = g;
      this.eventMetadata = k;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    nm = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.j);
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 2:
          c.push(a.j);
          break;
        case 1:
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 4:
          c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K);
      }
      return c;
    },
    U = function (a, b, c, d) {
      for (
        var e = l(nm(a, d === void 0 ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (g[b] !== void 0) return g[b];
      }
      return c;
    },
    om = function (a) {
      for (
        var b = {}, c = nm(a, 4), d = l(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = l(f), k = g.next();
          !k.done;
          k = g.next()
        )
          b[k.value] = 1;
      return Object.keys(b);
    },
    pm = function (a, b, c) {
      function d(n) {
        Qc(n) &&
          fb(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = nm(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    qm = function (a) {
      for (
        var b = [N.g.hd, N.g.dd, N.g.ed, N.g.fd, N.g.gd, N.g.jd, N.g.kd],
          c = nm(a, 3),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, k = !1, m = l(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          f[p] !== void 0 && ((g[p] = f[p]), (k = !0));
        }
        var q = k ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    rm = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.C = {};
      this.P = {};
      this.j = {};
      this.H = {};
      this.aa = {};
      this.K = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    sm = function (a, b) {
      a.C = b;
      return a;
    },
    tm = function (a, b) {
      a.P = b;
      return a;
    },
    um = function (a, b) {
      a.j = b;
      return a;
    },
    vm = function (a, b) {
      a.H = b;
      return a;
    },
    wm = function (a, b) {
      a.aa = b;
      return a;
    },
    xm = function (a, b) {
      a.K = b;
      return a;
    },
    ym = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    zm = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    Am = function (a, b) {
      a.onFailure = b;
      return a;
    },
    Bm = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    Cm = function (a) {
      return new mm(
        a.eventId,
        a.priorityId,
        a.C,
        a.P,
        a.j,
        a.H,
        a.K,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      );
    };
  var Dm = { Rk: Number("5"), xo: Number("") },
    Em = [];
  function Fm(a) {
    Em.push(a);
  }
  var Gm = "?id=" + Mf.ctid,
    Hm = void 0,
    Im = {},
    Jm = void 0,
    Km = new (function () {
      var a = 5;
      Dm.Rk > 0 && (a = Dm.Rk);
      this.C = a;
      this.j = 0;
      this.H = [];
    })(),
    Lm = 1e3;
  function Mm(a, b) {
    var c = Hm;
    if (c === void 0)
      if (b) c = $i();
      else return "";
    for (
      var d = [Lj("https://www.googletagmanager.com"), "/a", Gm],
        e = l(Em),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value, k = g({ eventId: c, Wc: !!a }), m = l(k), n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = l(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function Nm() {
    Jm && (A.clearTimeout(Jm), (Jm = void 0));
    if (Hm !== void 0 && Om) {
      var a;
      (a = Im[Hm]) || (a = Km.j < Km.C ? !1 : nb() - Km.H[Km.j % Km.C] < 1e3);
      if (a || Lm-- <= 0) T(1), (Im[Hm] = !0);
      else {
        var b = Km.j++ % Km.C;
        Km.H[b] = nb();
        var c = Mm(!0);
        qc(c);
        Om = !1;
      }
    }
  }
  var Om = !1;
  function Pm(a) {
    Im[a] ||
      (a !== Hm && (Nm(), (Hm = a)),
      (Om = !0),
      Jm || (Jm = A.setTimeout(Nm, 500)),
      Mm().length >= 2022 && Nm());
  }
  var Qm = cb();
  function Rm() {
    Qm = cb();
  }
  function Sm() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", String(Qm)],
    ];
  }
  var Tm = {};
  function Um(a, b, c) {
    Sj && a !== void 0 && ((Tm[a] = Tm[a] || []), Tm[a].push(c + b), Pm(a));
  }
  function Vm(a) {
    var b = a.eventId,
      c = a.Wc,
      d = [],
      e = Tm[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete Tm[b];
    return d;
  }
  function Wm(a, b) {
    var c = Vl(mk(a), !0);
    c && Xm.register(c, b);
  }
  function Ym(a, b, c, d) {
    var e = Vl(c, d.isGtmEvent);
    e && (Oi && (d.deferrable = !0), Xm.push("event", [b, a], e, d));
  }
  function Zm(a, b, c, d) {
    var e = Vl(c, d.isGtmEvent);
    e && Xm.push("get", [a, b], e, d);
  }
  function $m(a) {
    var b = Vl(mk(a), !0),
      c;
    b ? (c = an(Xm, b).j) : (c = {});
    return c;
  }
  function bn(a, b) {
    var c = Vl(mk(a), !0);
    if (c) {
      var d = Xm,
        e = Rc(b, null);
      Rc(an(d, c).j, e);
      an(d, c).j = e;
    }
  }
  var cn = function () {
      this.P = {};
      this.j = {};
      this.C = {};
      this.aa = null;
      this.K = {};
      this.H = !1;
      this.status = 1;
    },
    dn = function (a, b, c, d) {
      this.C = nb();
      this.j = b;
      this.args = c;
      this.messageContext = d;
      this.type = a;
    },
    en = function () {
      this.destinations = {};
      this.j = {};
      this.commands = [];
    },
    an = function (a, b) {
      var c = b.destinationId;
      return (a.destinations[c] = a.destinations[c] || new cn());
    },
    fn = function (a, b, c, d) {
      if (d.j) {
        var e = an(a, d.j),
          f = e.aa;
        if (f) {
          var g = Rc(c, null),
            k = Rc(e.P[d.j.id], null),
            m = Rc(e.K, null),
            n = Rc(e.j, null),
            p = Rc(a.j, null),
            q = {};
          if (Sj)
            try {
              q = Rc(ij, null);
            } catch (t) {
              T(72);
            }
          var r = d.j.prefix,
            u = function (t) {
              Um(d.messageContext.eventId, r, t);
            },
            v = Cm(
              Bm(
                Am(
                  zm(
                    ym(
                      wm(
                        vm(
                          xm(
                            um(
                              tm(
                                sm(
                                  new rm(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                k
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (u) {
                        var t = u;
                        u = void 0;
                        t("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (u) {
                      var t = u;
                      u = void 0;
                      t("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            Um(d.messageContext.eventId, r, "1"),
              im(d.type, d.j.id, v),
              f(d.j.id, b, d.C, v);
          } catch (t) {
            Um(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  en.prototype.register = function (a, b, c) {
    var d = an(this, a);
    d.status !== 3 &&
      ((d.aa = b), (d.status = 3), c && (Rc(d.j, c), (d.j = c)), this.flush());
  };
  en.prototype.push = function (a, b, c, d) {
    c !== void 0 &&
      (an(this, c).status === 1 &&
        ((an(this, c).status = 2), this.push("require", [{}], c, {})),
      an(this, c).H && (d.deferrable = !1));
    this.commands.push(new dn(a, c, b, d));
    d.deferrable || this.flush();
  };
  en.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.commands.length;
      e = { Mc: void 0, Rh: void 0 }
    ) {
      var f = this.commands[0],
        g = f.j;
      if (f.messageContext.deferrable)
        !g || an(this, g).H
          ? ((f.messageContext.deferrable = !1), this.commands.push(f))
          : c.push(f),
          this.commands.shift();
      else {
        switch (f.type) {
          case "require":
            if (an(this, g).status !== 3 && !a) {
              this.commands.push.apply(this.commands, c);
              return;
            }
            break;
          case "set":
            fb(f.args[0], function (r, u) {
              Rc(vb(r, u), b.j);
            });
            break;
          case "config":
            var k = an(this, g);
            e.Mc = {};
            fb(
              f.args[0],
              (function (r) {
                return function (u, v) {
                  Rc(vb(u, v), r.Mc);
                };
              })(e)
            );
            var m = !!e.Mc[N.g.oc];
            delete e.Mc[N.g.oc];
            var n = g.destinationId === g.id;
            m || (n ? (k.K = {}) : (k.P[g.id] = {}));
            (k.H && m) || fn(this, N.g.ba, e.Mc, f);
            k.H = !0;
            n ? Rc(e.Mc, k.K) : (Rc(e.Mc, k.P[g.id]), T(70));
            d = !0;
            break;
          case "event":
            e.Rh = {};
            fb(
              f.args[0],
              (function (r) {
                return function (u, v) {
                  Rc(vb(u, v), r.Rh);
                };
              })(e)
            );
            fn(this, f.args[1], e.Rh, f);
            break;
          case "get":
            var p = {},
              q = ((p[N.g.zb] = f.args[0]), (p[N.g.Mb] = f.args[1]), p);
            fn(this, N.g.Za, q, f);
        }
        this.commands.shift();
        gn(this, f);
      }
    }
    this.commands.push.apply(this.commands, c);
    d && this.flush();
  };
  var gn = function (a, b) {
      if (b.type !== "require")
        if (b.j)
          for (var c = an(a, b.j).C[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.C)
                for (var g = f.C[b.type] || [], k = 0; k < g.length; k++)
                  g[k]();
            }
    },
    Xm = new en();
  var hn = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    jn = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var kn = function (a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    },
    ln = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    };
  var mn, nn;
  a: {
    for (var on = ["CLOSURE_FLAGS"], pn = za, qn = 0; qn < on.length; qn++)
      if (((pn = pn[on[qn]]), pn == null)) {
        nn = null;
        break a;
      }
    nn = pn;
  }
  var rn = nn && nn[610401301];
  mn = rn != null ? rn : !1;
  function sn() {
    var a = za.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var tn,
    un = za.navigator;
  tn = un ? un.userAgentData || null : null;
  function vn(a) {
    return mn
      ? tn
        ? tn.brands.some(function (b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function wn(a) {
    return sn().indexOf(a) != -1;
  }
  function xn() {
    return mn ? !!tn && tn.brands.length > 0 : !1;
  }
  function yn() {
    return xn() ? !1 : wn("Opera");
  }
  function zn() {
    return wn("Firefox") || wn("FxiOS");
  }
  function An() {
    return xn()
      ? vn("Chromium")
      : ((wn("Chrome") || wn("CriOS")) && !(xn() ? 0 : wn("Edge"))) ||
          wn("Silk");
  }
  var Bn = function (a) {
    Bn[" "](a);
    return a;
  };
  Bn[" "] = function () {};
  var Cn = function (a, b, c, d) {
      for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (g == 38 || g == 63) {
          var k = a.charCodeAt(e + f);
          if (!k || k == 61 || k == 38 || k == 35) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Dn = /#|$/,
    En = function (a, b) {
      var c = a.search(Dn),
        d = Cn(a, 0, b, c);
      if (d < 0) return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " ")
      );
    },
    Fn = /[?&]($|#)/,
    Gn = function (a, b, c) {
      for (
        var d, e = a.search(Dn), f = 0, g, k = [];
        (g = Cn(a, f, b, e)) >= 0;

      )
        k.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      k.push(a.slice(f));
      d = k.join("").replace(Fn, "$1");
      var m,
        n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        r < 0 && (r = d.length);
        var u = d.indexOf("?"),
          v;
        u < 0 || u > r ? ((u = r), (v = "")) : (v = d.substring(u + 1, r));
        q = [d.slice(0, u), v, d.slice(r)];
        var t = q[1];
        q[1] = p ? (t ? t + "&" + p : p) : t;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  function Hn() {
    return mn ? !!tn && !!tn.platform : !1;
  }
  function In() {
    return wn("iPhone") && !wn("iPod") && !wn("iPad");
  }
  function Jn() {
    In() || wn("iPad") || wn("iPod");
  }
  yn();
  xn() || wn("Trident") || wn("MSIE");
  wn("Edge");
  !wn("Gecko") ||
    (sn().toLowerCase().indexOf("webkit") != -1 && !wn("Edge")) ||
    wn("Trident") ||
    wn("MSIE") ||
    wn("Edge");
  sn().toLowerCase().indexOf("webkit") != -1 && !wn("Edge") && wn("Mobile");
  Hn() || wn("Macintosh");
  Hn() || wn("Windows");
  (Hn() ? tn.platform === "Linux" : wn("Linux")) || Hn() || wn("CrOS");
  Hn() || wn("Android");
  In();
  wn("iPad");
  wn("iPod");
  Jn();
  sn().toLowerCase().indexOf("kaios");
  var Kn = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              Bn(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Ln = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    Mn = function (a) {
      if (A.top == A) return 0;
      if (a === void 0 ? 0 : a) {
        var b = A.location.ancestorOrigins;
        if (b) return b[b.length - 1] == A.location.origin ? 1 : 2;
      }
      return Kn(A.top) ? 1 : 2;
    },
    Nn = function (a) {
      a = a === void 0 ? document : a;
      return a.createElement("img");
    },
    On = function () {
      for (var a = A, b = a; a && a != a.parent; )
        (a = a.parent), Kn(a) && (b = a);
      return b;
    };
  function Pn(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Nn(a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = $b(g, e);
          k >= 0 && Array.prototype.splice.call(g, k, 1);
        }
        ln(e, "load", f);
        ln(e, "error", f);
      };
      kn(e, "load", f);
      kn(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Rn = function (a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Ln(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Qn(c, b);
    },
    Qn = function (a, b) {
      var c = window,
        d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Pn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  var Sn = function () {
    this.P = this.P;
    this.C = this.C;
  };
  Sn.prototype.P = !1;
  Sn.prototype.dispose = function () {
    this.P || ((this.P = !0), this.Ta());
  };
  Sn.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  Sn.prototype.addOnDisposeCallback = function (a, b) {
    this.P
      ? b !== void 0
        ? a.call(b)
        : a()
      : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a));
  };
  Sn.prototype.Ta = function () {
    if (this.C) for (; this.C.length; ) this.C.shift()();
  };
  function Tn(a) {
    a.addtlConsent !== void 0 &&
      typeof a.addtlConsent !== "string" &&
      (a.addtlConsent = void 0);
    a.gdprApplies !== void 0 &&
      typeof a.gdprApplies !== "boolean" &&
      (a.gdprApplies = void 0);
    return (a.tcString !== void 0 && typeof a.tcString !== "string") ||
      (a.listenerId !== void 0 && typeof a.listenerId !== "number")
      ? 2
      : a.cmpStatus && a.cmpStatus !== "error"
      ? 0
      : 3;
  }
  var Un = function (a, b) {
    b = b === void 0 ? {} : b;
    Sn.call(this);
    this.j = null;
    this.aa = {};
    this.gg = 0;
    this.K = null;
    this.H = a;
    var c;
    this.Ee = (c = b.yn) != null ? c : 500;
    var d;
    this.Lc = (d = b.fo) != null ? d : !1;
  };
  ra(Un, Sn);
  Un.prototype.Ta = function () {
    this.aa = {};
    this.K && (ln(this.H, "message", this.K), delete this.K);
    delete this.aa;
    delete this.H;
    delete this.j;
    Sn.prototype.Ta.call(this);
  };
  var Wn = function (a) {
    return typeof a.H.__tcfapi === "function" || Vn(a) != null;
  };
  Un.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.Lc },
      d = jn(function () {
        return a(c);
      }),
      e = 0;
    this.Ee !== -1 &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.Ee));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Tn(c)),
          (c.internalBlockOnErrors = b.Lc),
          (k && c.internalErrorState === 0) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Xn(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Un.prototype.removeEventListener = function (a) {
    a && a.listenerId && Xn(this, "removeEventListener", null, a.listenerId);
  };
  var Zn = function (a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (f !== void 0) {
            e = f[d === void 0 ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (g === 0) return !1;
      var k = c;
      c === 2
        ? ((k = 0), g === 2 && (k = 1))
        : c === 3 && ((k = 1), g === 1 && (k = 0));
      var m;
      if (k === 0)
        if (a.purpose && a.vendor) {
          var n = Yn(a.vendor.consents, d === void 0 ? "755" : d);
          m =
            n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH"
              ? !0
              : n && Yn(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          k === 1
            ? a.purpose && a.vendor
              ? Yn(a.purpose.legitimateInterests, b) &&
                Yn(a.vendor.legitimateInterests, d === void 0 ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Yn = function (a, b) {
      return !(!a || !a[b]);
    },
    Xn = function (a, b, c, d) {
      c || (c = function () {});
      var e = a.H;
      if (typeof e.__tcfapi === "function") {
        var f = e.__tcfapi;
        f(b, 2, c, d);
      } else if (Vn(a)) {
        $n(a);
        var g = ++a.gg;
        a.aa[g] = c;
        if (a.j) {
          var k = {};
          a.j.postMessage(
            ((k.__tcfapiCall = {
              command: b,
              version: 2,
              callId: g,
              parameter: d,
            }),
            k),
            "*"
          );
        }
      } else c({}, !1);
    },
    Vn = function (a) {
      if (a.j) return a.j;
      var b;
      a: {
        for (var c = a.H, d = 0; d < 50; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.j = b;
      return a.j;
    },
    $n = function (a) {
      if (!a.K) {
        var b = function (c) {
          try {
            var d;
            d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data)
              .__tcfapiReturn;
            a.aa[d.callId](d.returnValue, d.success);
          } catch (e) {}
        };
        a.K = b;
        kn(a.H, "message", b);
      }
    },
    ao = function (a) {
      if (a.gdprApplies === !1) return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = Tn(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0
        ? a.internalBlockOnErrors
          ? (Rn({ e: String(a.internalErrorState) }), !1)
          : !0
        : a.cmpStatus !== "loaded" ||
          (a.eventStatus !== "tcloaded" &&
            a.eventStatus !== "useractioncomplete")
        ? !1
        : !0;
    };
  var bo = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function co() {
    var a = Ji.tcf || {};
    return (Ji.tcf = a);
  }
  var eo = function () {
    return new Un(A, { yn: -1 });
  };
  function fo() {
    var a = co(),
      b = eo();
    Wn(b) && !go() && !ho() && T(124);
    if (!a.active && Wn(b)) {
      go() &&
        ((a.active = !0),
        (a.wc = {}),
        (a.cmpId = 0),
        (a.tcfPolicyVersion = 0),
        (Qk().active = !0),
        (a.tcString = "tcunavailable"));
      Fl();
      try {
        b.addEventListener(function (c) {
          if (c.internalErrorState !== 0)
            io(a), Gl([N.g.N, N.g.xa, N.g.O]), (Qk().active = !0);
          else if (
            ((a.gdprApplies = c.gdprApplies),
            (a.cmpId = c.cmpId),
            (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
            ho() && (a.active = !0),
            !jo(c) || go() || ho())
          ) {
            a.tcfPolicyVersion = c.tcfPolicyVersion;
            var d;
            if (c.gdprApplies === !1) {
              var e = {},
                f;
              for (f in bo) bo.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (jo(c)) {
              var g = {},
                k;
              for (k in bo)
                if (bo.hasOwnProperty(k))
                  if (k === "1") {
                    var m,
                      n = c,
                      p = { mm: !0 };
                    p = p === void 0 ? {} : p;
                    m = ao(n)
                      ? n.gdprApplies === !1
                        ? !0
                        : n.tcString === "tcunavailable"
                        ? !p.xk
                        : (p.xk || n.gdprApplies !== void 0 || p.mm) &&
                          (p.xk ||
                            (typeof n.tcString === "string" &&
                              n.tcString.length))
                        ? Zn(n, "1", 0)
                        : !0
                      : !1;
                    g["1"] = m;
                  } else g[k] = Zn(c, k, bo[k]);
              d = g;
            }
            if (d) {
              a.tcString = c.tcString || "tcempty";
              a.wc = d;
              var q = {},
                r = ((q[N.g.N] = a.wc["1"] ? "granted" : "denied"), q);
              a.gdprApplies !== !0
                ? (Gl([N.g.N, N.g.xa, N.g.O]), (Qk().active = !0))
                : ((r[N.g.xa] = a.wc["3"] && a.wc["4"] ? "granted" : "denied"),
                  typeof a.tcfPolicyVersion === "number" &&
                  a.tcfPolicyVersion >= 4
                    ? (r[N.g.O] = a.wc["1"] && a.wc["7"] ? "granted" : "denied")
                    : Gl([N.g.O]),
                  Al(
                    r,
                    { eventId: 0 },
                    {
                      gdprApplies: a ? a.gdprApplies : void 0,
                      tcString: ko() || "",
                    }
                  ));
            }
          } else Gl([N.g.N, N.g.xa, N.g.O]);
        });
      } catch (c) {
        io(a), Gl([N.g.N, N.g.xa, N.g.O]), (Qk().active = !0);
      }
    }
  }
  function io(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function jo(a) {
    return (
      a.eventStatus === "tcloaded" ||
      a.eventStatus === "useractioncomplete" ||
      a.eventStatus === "cmpuishown"
    );
  }
  function go() {
    return A.gtag_enable_tcf_support === !0;
  }
  function ho() {
    return co().enableAdvertiserConsentMode === !0;
  }
  function ko() {
    var a = co();
    if (a.active) return a.tcString;
  }
  function lo() {
    var a = co();
    if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0";
  }
  function mo(a) {
    if (!bo.hasOwnProperty(String(a))) return !0;
    var b = co();
    return b.active && b.wc ? !!b.wc[String(a)] : !0;
  }
  var no = [N.g.N, N.g.U, N.g.O, N.g.xa],
    wo = {},
    xo = ((wo[N.g.N] = 1), (wo[N.g.U] = 2), wo);
  function yo(a) {
    if (a === void 0) return 0;
    switch (U(a, N.g.na)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  function zo(a) {
    if (ol() === "US-CO" && cc.globalPrivacyControl === !0) return !1;
    var b = yo(a);
    if (b === 3) return !1;
    switch (Zk(N.g.xa)) {
      case 1:
      case 3:
        return !0;
      case 2:
        return !1;
      case 4:
        return b === 2;
      case 0:
        return !0;
      default:
        return !1;
    }
  }
  function Ao() {
    return bl() || !Yk(N.g.N) || !Yk(N.g.U);
  }
  function Bo() {
    var a = {},
      b;
    for (b in xo) xo.hasOwnProperty(b) && (a[xo[b]] = Zk(b));
    return "G1" + Ee(a[1] || 0) + Ee(a[2] || 0);
  }
  var Co = {},
    Do =
      ((Co[N.g.N] = 0), (Co[N.g.U] = 1), (Co[N.g.O] = 2), (Co[N.g.xa] = 3), Co);
  function Eo(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  function Fo(a) {
    for (var b = "1", c = 0; c < no.length; c++) {
      var d = b,
        e,
        f = no[c],
        g = Xk.delegatedConsentTypes[f];
      e = g === void 0 ? 0 : Do.hasOwnProperty(g) ? 12 | Do[g] : 8;
      var k = Qk();
      k.accessedAny = !0;
      var m = k.entries[f] || {};
      e = (e << 2) | Eo(m.implicit);
      b =
        d +
        ("" +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            e
          ] +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (Eo(m.declare) << 4) | (Eo(m.default) << 2) | Eo(m.update)
          ]);
    }
    var n = b,
      p = (ol() === "US-CO" && cc.globalPrivacyControl === !0 ? 1 : 0) << 3,
      q = (bl() ? 1 : 0) << 2,
      r = yo(a);
    b =
      n +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        p | q | r
      ];
    return (b +=
      "" +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (Xk.containerScopedDefaults.ad_storage << 4) |
          (Xk.containerScopedDefaults.analytics_storage << 2) |
          Xk.containerScopedDefaults.ad_user_data
      ] +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        ((Xk.usedContainerScopedDefaults ? 1 : 0) << 2) |
          Xk.containerScopedDefaults.ad_personalization
      ]);
  }
  function Go() {
    if (!Yk(N.g.O)) return "-";
    for (
      var a = Object.keys(xh), b = $k(a), c = "", d = l(a), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value;
      b[f] && (c += xh[f]);
    }
    (Xk.usedCorePlatformServices ? Xk.selectedAllCorePlatformServices : 1) &&
      (c += "o");
    return c || "-";
  }
  function Ho() {
    return ql() || ((go() || ho()) && lo() === "1") ? "1" : "0";
  }
  function Io() {
    return (ql() ? !0 : !(!go() && !ho()) && lo() === "1") || !Yk(N.g.O);
  }
  function Jo() {
    var a = "0",
      b = "0",
      c;
    var d = co();
    c = d.active ? d.cmpId : void 0;
    typeof c === "number" &&
      c >= 0 &&
      c <= 4095 &&
      ((a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (c >> 6) & 63
      ]),
      (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        c & 63
      ]));
    var e = "0",
      f;
    var g = co();
    f = g.active ? g.tcfPolicyVersion : void 0;
    typeof f === "number" &&
      f >= 0 &&
      f <= 63 &&
      (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        f
      ]);
    var k = 0;
    ql() && (k |= 1);
    lo() === "1" && (k |= 2);
    go() && (k |= 4);
    var m;
    var n = co();
    m =
      n.enableAdvertiserConsentMode !== void 0
        ? n.enableAdvertiserConsentMode
          ? "1"
          : "0"
        : void 0;
    m === "1" && (k |= 8);
    Qk().waitPeriodTimedOut && (k |= 16);
    return (
      "1" +
      a +
      b +
      e +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
    );
  }
  function Ko() {
    return ol() === "US-CO";
  }
  function Lo() {
    var a = !1;
    return a;
  }
  var Mo = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
  function No(a) {
    a = a === void 0 ? {} : a;
    var b = Mf.ctid.split("-")[0].toUpperCase(),
      c = {
        ctid: Mf.ctid,
        nn: Ii.Je,
        pn: Ii.zh,
        Pm: ck.Ge ? 2 : 1,
        un: a.xg,
        Qe: Mf.canonicalContainerId,
      };
    c.Qe !== a.qa && (c.qa = a.qa);
    var d = ok();
    c.Zm = d ? d.canonicalContainerId : void 0;
    Pi ? ((c.ug = Mo[b]), c.ug || (c.ug = 0)) : (c.ug = Ti ? 13 : 10);
    cj.C
      ? ((c.rg = 0), (c.Sl = 2))
      : Ri
      ? (c.rg = 1)
      : Lo()
      ? (c.rg = 2)
      : (c.rg = 3);
    var e = {};
    e[6] = dk;
    cj.j === 2 ? (e[7] = !0) : cj.j === 1 && (e[2] = !0);
    if (fc) {
      var f = yj(Ej(fc), "host");
      f && (e[8] = f.match(/^(www\.)?googletagmanager\.com$/) === null);
    }
    c.Vl = e;
    var g = a.ig,
      k;
    var m = c.ug,
      n = c.rg;
    m === void 0
      ? (k = "")
      : (n || (n = 0), (k = "" + Ge(1, 1) + De((m << 2) | n)));
    var p = c.Sl,
      q = "4" + k + (p ? "" + Ge(2, 1) + De(p) : ""),
      r,
      u = c.pn;
    r = u && Fe.test(u) ? "" + Ge(3, 2) + u : "";
    var v,
      t = c.nn;
    v = t ? "" + Ge(4, 1) + De(t) : "";
    var w;
    var x = c.ctid;
    if (x && g) {
      var y = x.split("-"),
        B = y[0].toUpperCase();
      if (B !== "GTM" && B !== "OPT") w = "";
      else {
        var C = y[1];
        w = "" + Ge(5, 3) + De(1 + C.length) + (c.Pm || 0) + C;
      }
    } else w = "";
    var D = c.un,
      H = c.Qe,
      J = c.qa,
      F = c.uo,
      S =
        q +
        r +
        v +
        w +
        (D ? "" + Ge(6, 1) + De(D) : "") +
        (H ? "" + Ge(7, 3) + De(H.length) + H : "") +
        (J ? "" + Ge(8, 3) + De(J.length) + J : "") +
        (F ? "" + Ge(9, 3) + De(F.length) + F : ""),
      M;
    var Z = c.Vl;
    Z = Z === void 0 ? {} : Z;
    for (
      var ca = [], da = l(Object.keys(Z)), Y = da.next();
      !Y.done;
      Y = da.next()
    ) {
      var Q = Y.value;
      ca[Number(Q)] = Z[Q];
    }
    if (ca.length) {
      var oa = Ge(10, 3),
        na;
      if (ca.length === 0) na = De(0);
      else {
        for (var ea = [], ua = 0, Ra = !1, Aa = 0; Aa < ca.length; Aa++) {
          Ra = !0;
          var Sa = Aa % 6;
          ca[Aa] && (ua |= 1 << Sa);
          Sa === 5 && (ea.push(De(ua)), (ua = 0), (Ra = !1));
        }
        Ra && ea.push(De(ua));
        na = ea.join("");
      }
      var kb = na;
      M = "" + oa + De(kb.length) + kb;
    } else M = "";
    var mc = c.Zm;
    return S + M + (mc ? "" + Ge(11, 3) + De(mc.length) + mc : "");
  }
  function Oo(a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; d >= 0; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = c !== 0 ? b ^ (c >> 21) : b);
    return b;
  }
  function Po(a) {
    return a.origin !== "null";
  }
  function Qo(a, b, c, d) {
    var e;
    if (Ro(d)) {
      for (
        var f = [], g = String(b || So()).split(";"), k = 0;
        k < g.length;
        k++
      ) {
        var m = g[k].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p);
        }
      }
      e = f;
    } else e = [];
    return e;
  }
  function To(a, b, c, d, e) {
    if (Ro(e)) {
      var f = Uo(a, d, e);
      if (f.length === 1) return f[0].id;
      if (f.length !== 0) {
        f = Vo(
          f,
          function (g) {
            return g.bm;
          },
          b
        );
        if (f.length === 1) return f[0].id;
        f = Vo(
          f,
          function (g) {
            return g.dn;
          },
          c
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function Wo(a, b, c, d) {
    var e = So(),
      f = window;
    Po(f) && (f.document.cookie = a);
    var g = So();
    return e !== g || (c !== void 0 && Qo(b, g, !1, d).indexOf(c) >= 0);
  }
  function Xo(a, b, c, d) {
    function e(w, x, y) {
      if (y == null) return delete k[x], w;
      k[x] = y;
      return w + "; " + x + "=" + y;
    }
    function f(w, x) {
      if (x == null) return w;
      k[x] = !0;
      return w + "; " + x;
    }
    if (!Ro(c.Ib)) return 2;
    var g;
    b == null
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = Yo(b)),
        (g = a + "=" + b));
    var k = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : c.expires != null && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.Tm);
    g = e(g, "samesite", c.qn);
    c.secure && (g = f(g, "secure"));
    var n = c.domain;
    if (n && n.toLowerCase() === "auto") {
      for (var p = Zo(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
        var v = p[u] !== "none" ? p[u] : void 0,
          t = e(g, "domain", v);
        t = f(t, c.flags);
        try {
          d && d(a, k);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!$o(v, c.path) && Wo(t, a, b, c.Ib)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, k);
    return $o(n, c.path) ? 1 : Wo(g, a, b, c.Ib) ? 0 : 1;
  }
  function ap(a, b, c) {
    c.path == null && (c.path = "/");
    c.domain || (c.domain = "auto");
    return Xo(a, b, c);
  }
  function Vo(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c
        ? d.push(k)
        : f === void 0 || m < f
        ? ((e = [k]), (f = m))
        : m === f && e.push(k);
    }
    return d.length > 0 ? d : e;
  }
  function Uo(a, b, c) {
    for (var d = [], e = Qo(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || !k || b.indexOf(k) !== -1) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            bm: Number(n[0]) || 1,
            dn: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function Yo(a) {
    a && a.length > 1200 && (a = a.substring(0, 1200));
    return a;
  }
  var bp = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    cp = /(^|\.)doubleclick\.net$/i;
  function $o(a, b) {
    return (
      a !== void 0 &&
      (cp.test(window.document.location.hostname) || (b === "/" && bp.test(a)))
    );
  }
  function dp(a) {
    if (!a) return 1;
    var b = a;
    Yh(8) && a === "none" && (b = window.document.location.hostname);
    b = b.indexOf(".") === 0 ? b.substring(1) : b;
    return b.split(".").length;
  }
  function ep(a) {
    if (!a || a === "/") return 1;
    a[0] !== "/" && (a = "/" + a);
    a[a.length - 1] !== "/" && (a += "/");
    return a.split("/").length - 1;
  }
  function fp(a, b) {
    var c = "" + dp(a),
      d = ep(b);
    d > 1 && (c += "-" + d);
    return c;
  }
  var So = function () {
      return Po(window) ? window.document.cookie : "";
    },
    Ro = function (a) {
      return a && Yh(9)
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return al(b) && Yk(b);
          })
        : !0;
    },
    Zo = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (b.length === 4) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      cp.test(e) || bp.test(e) || a.push("none");
      return a;
    };
  function gp(a) {
    var b = Math.round(Math.random() * 2147483647);
    return a ? String(b ^ (Oo(a) & 2147483647)) : String(b);
  }
  function hp(a) {
    return [gp(a), Math.round(nb() / 1e3)].join(".");
  }
  function ip(a, b, c, d, e) {
    var f = dp(b);
    return To(a, f, ep(c), d, e);
  }
  function jp(a, b, c, d) {
    return [b, fp(c, d), a].join(".");
  }
  function kp(a, b, c, d) {
    var e,
      f = Number(a.Hb != null ? a.Hb : void 0);
    f !== 0 && (e = new Date((b || nb()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Ib: d,
    };
  }
  var lp;
  function mp() {
    function a(g) {
      c(g.target || g.srcElement || {});
    }
    function b(g) {
      d(g.target || g.srcElement || {});
    }
    var c = np,
      d = op,
      e = pp();
    if (!e.init) {
      rc(E, "mousedown", a);
      rc(E, "keyup", a);
      rc(E, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        d(this);
        f.call(this);
      };
      e.init = !0;
    }
  }
  function qp(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: c === 2,
      placement: c,
      forms: d,
      sameHost: e,
    };
    pp().decorators.push(f);
  }
  function rp(a, b, c) {
    for (var d = pp().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        k;
      if ((k = !c || g.forms))
        a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== E.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  k = !0;
                  break a;
                }
              } else if (n.indexOf(m[q]) >= 0 || (p && m[q].indexOf(n) >= 0)) {
                k = !0;
                break a;
              }
          k = !1;
        }
      if (k) {
        var r = g.placement;
        r === void 0 && (r = g.fragment ? 2 : 1);
        r === b && qb(e, g.callback());
      }
    }
    return e;
  }
  function pp() {
    var a = gc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var sp = /(.*?)\*(.*?)\*(.*)/,
    tp = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    up = /^(?:www\.|m\.|amp\.)+/,
    vp = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function wp(a) {
    var b = vp.exec(a);
    if (b) return { ii: b[1], query: b[2], fragment: b[3] };
  }
  function xp(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  function yp(a, b) {
    var c = [
        cc.userAgent,
        new Date().getTimezoneOffset(),
        cc.userLanguage || cc.language,
        Math.floor(nb() / 60 / 1e3) - (b === void 0 ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = lp)) {
      for (var e = Array(256), f = 0; f < 256; f++) {
        for (var g = f, k = 0; k < 8; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    lp = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ lp[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function zp(a) {
    return function (b) {
      var c = Ej(A.location.href),
        d = c.search.replace("?", ""),
        e = xj(d, "_gl", !1, !0) || "";
      b.query = Ap(e) || {};
      var f = yj(c, "fragment"),
        g;
      var k = -1;
      if (sb(f, "_gl=")) k = 4;
      else {
        var m = f.indexOf("&_gl=");
        m > 0 && (k = m + 3 + 2);
      }
      if (k < 0) g = void 0;
      else {
        var n = f.indexOf("&", k);
        g = n < 0 ? f.substring(k) : f.substring(k, n);
      }
      b.fragment = Ap(g || "") || {};
      a && Bp(c, d, f);
    };
  }
  function Cp(a, b) {
    var c = xp(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  function Bp(a, b, c) {
    function d(g, k) {
      var m = Cp("_gl", g);
      m.length && (m = k + m);
      return m;
    }
    if (bc && bc.replaceState) {
      var e = xp("_gl");
      if (e.test(b) || e.test(c)) {
        var f = yj(a, "path");
        b = d(b, "?");
        c = d(c, "#");
        bc.replaceState({}, "", "" + f + b + c);
      }
    }
  }
  function Dp(a, b) {
    var c = zp(!!b),
      d = pp();
    d.data || ((d.data = { query: {}, fragment: {} }), c(d.data));
    var e = {},
      f = d.data;
    f && (qb(e, f.query), a && qb(e, f.fragment));
    return e;
  }
  var Ap = function (a) {
    try {
      var b = Ep(a, 3);
      if (b !== void 0) {
        for (
          var c = {}, d = b ? b.split("*") : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            g = Ta(d[e + 1]);
          c[f] = g;
        }
        Va("TAGGING", 6);
        return c;
      }
    } catch (k) {
      Va("TAGGING", 8);
    }
  };
  function Ep(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; e < 3; ++e) {
          var f = sp.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && g[1] === "1") {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === yp(k, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return k;
        Va("TAGGING", 7);
      }
    }
  }
  function Fp(a, b, c, d, e) {
    function f(p) {
      p = Cp(a, p);
      var q = p.charAt(p.length - 1);
      p && q !== "&" && (p += "&");
      return p + n;
    }
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var g = wp(c);
    if (!g) return "";
    var k = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (m.substring(1).length !== 0 && e) || (m = "#" + f(m.substring(1)))
      : (k = "?" + f(k.substring(1)));
    return "" + g.ii + k + m;
  }
  function Gp(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var u in n)
          if (n.hasOwnProperty(u)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var v,
          t = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            x !== void 0 &&
              x === x &&
              x !== null &&
              x.toString() !== "[object Object]" &&
              (t.push(w), t.push(Qa(String(x))));
          }
        var y = t.join("*");
        v = ["1", yp(y), y].join("*");
        d
          ? (Yh(3) || Yh(1) || !p) && Hp("_gl", v, a, p, q)
          : Ip("_gl", v, a, p, q);
      }
    }
    var d = (a.tagName || "").toUpperCase() === "FORM",
      e = rp(b, 1, d),
      f = rp(b, 2, d),
      g = rp(b, 4, d),
      k = rp(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Yh(1) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && Jp(m, k[m], a);
  }
  function Jp(a, b, c) {
    c.tagName.toLowerCase() === "a"
      ? Ip(a, b, c)
      : c.tagName.toLowerCase() === "form" && Hp(a, b, c);
  }
  function Ip(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !Yh(5) || d)) {
        var k = A.location.href,
          m = wp(c.href),
          n = wp(k);
        g = !(m && n && m.ii === n.ii && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = Fp(a, b, c.href, d, e);
      Tb.test(p) && (c.href = p);
    }
  }
  function Hp(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if (f !== "get" || d) {
        if (f === "get" || f === "post") {
          var g = Fp(a, b, c.action, d, e);
          Tb.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = E.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function np(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && d > 0; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        (f !== "http:" && f !== "https:") || Gp(e, e.hostname);
      }
    } catch (g) {}
  }
  function op(a) {
    try {
      if (a.action) {
        var b = yj(Ej(a.action), "host");
        Gp(a, b);
      }
    } catch (c) {}
  }
  function Kp(a, b, c, d) {
    mp();
    var e = c === "fragment" ? 2 : 1;
    d = !!d;
    qp(a, b, e, d, !1);
    e === 2 && Va("TAGGING", 23);
    d && Va("TAGGING", 24);
  }
  function Lp(a, b) {
    mp();
    qp(a, [Aj(A.location, "host", !0)], b, !0, !0);
  }
  function Mp() {
    var a = E.location.hostname,
      b = tp.exec(E.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (d.indexOf("xn--") === 0) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-");
    }
    var k = a.replace(up, ""),
      m = e.replace(up, "");
    return k === m || tb(k, "." + m);
  }
  function Np(a, b) {
    return a === !1 ? !1 : a || b || Mp();
  }
  var Op = ["1"],
    Pp = {},
    Qp = {};
  function Rp(a, b) {
    b = b === void 0 ? !0 : b;
    var c = Sp(a.prefix);
    if (!Pp[c])
      if (Tp(c, a.path, a.domain)) {
        var d = Qp[Sp(a.prefix)];
        b && Up(a, d ? d.id : void 0, d ? d.bi : void 0);
      } else {
        var e = Fj("auiddc");
        if (e) Va("TAGGING", 17), (Pp[c] = e);
        else if (b) {
          var f = Sp(a.prefix),
            g = hp();
          Vp(f, g, a);
          Tp(c, a.path, a.domain);
        }
      }
  }
  function Up(a, b, c) {
    var d = Sp(a.prefix),
      e = Pp[d];
    if (e) {
      var f = e.split(".");
      if (f.length === 2) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(nb() / 1e3)));
          Vp(d, k, a, g * 1e3);
        }
      }
    }
  }
  function Vp(a, b, c, d) {
    var e = jp(b, "1", c.domain, c.path),
      f = kp(c, d);
    f.Ib = Wp();
    ap(a, e, f);
  }
  function Tp(a, b, c) {
    var d = ip(a, b, c, Op, Wp());
    if (!d) return !1;
    Xp(a, d);
    return !0;
  }
  function Xp(a, b) {
    var c = b.split(".");
    c.length === 5
      ? ((Pp[a] = c.slice(0, 2).join(".")),
        (Qp[a] = { id: c.slice(2, 4).join("."), bi: Number(c[4]) || 0 }))
      : c.length === 3
      ? (Qp[a] = { id: c.slice(0, 2).join("."), bi: Number(c[2]) || 0 })
      : (Pp[a] = b);
  }
  function Sp(a) {
    return (a || "_gcl") + "_au";
  }
  function Yp(a) {
    function b() {
      Yk(c) && a();
    }
    var c = Wp();
    el(function () {
      b();
      Yk(c) || fl(b, c);
    }, c);
  }
  function Zp(a) {
    var b = Dp(!0),
      c = Sp(a.prefix);
    Yp(function () {
      var d = b[c];
      if (d) {
        Xp(c, d);
        var e = Number(Pp[c].split(".")[1]) * 1e3;
        if (e) {
          Va("TAGGING", 16);
          var f = kp(a, e);
          f.Ib = Wp();
          var g = jp(d, "1", a.domain, a.path);
          ap(c, g, f);
        }
      }
    });
  }
  function $p(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = ip(a, e.path, e.domain, Op, Wp());
      k && (g[a] = k);
      return g;
    };
    Yp(function () {
      Kp(f, b, c, d);
    });
  }
  function Wp() {
    return ["ad_storage", "ad_user_data"];
  }
  var aq = {},
    bq =
      ((aq.k = { Ja: /^[\w-]+$/ }),
      (aq.b = { Ja: /^[\w-]+$/, ri: !0 }),
      (aq.i = { Ja: /^[1-9]\d*$/ }),
      (aq.u = { Ja: /^[1-9]\d*$/ }),
      aq);
  var cq = {},
    fq =
      ((cq[5] = { Tk: { 2: dq }, Jh: ["k", "i", "b", "u"] }),
      (cq[4] = { Tk: { 2: dq, GCL: eq }, Jh: ["k", "i", "b"] }),
      cq);
  function gq(a) {
    var b = fq[5];
    if (b) {
      var c = a.split(".")[0];
      if (c) {
        var d = b.Tk[c];
        if (d) return d(a, 5);
      }
    }
  }
  function dq(a, b) {
    var c = a.split(".");
    if (c.length === 3) {
      var d = {},
        e = fq[b];
      if (e) {
        for (
          var f = e.Jh, g = l(c[2].split("$")), k = g.next();
          !k.done;
          k = g.next()
        ) {
          var m = k.value,
            n = m[0];
          if (f.indexOf(n) !== -1)
            try {
              var p = decodeURIComponent(m.substring(1)),
                q = bq[n];
              q && (q.ri ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
            } catch (r) {}
        }
        return d;
      }
    }
  }
  function hq(a, b) {
    var c = fq[5];
    if (c) {
      for (var d = [], e = l(c.Jh), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          k = bq[g];
        if (k) {
          var m = a[g];
          if (m !== void 0)
            if (k.ri && Array.isArray(m))
              for (var n = l(m), p = n.next(); !p.done; p = n.next())
                d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m));
        }
      }
      return ["2", b || "1", d.join("$")].join(".");
    }
  }
  function eq(a) {
    var b = a.split(".");
    b.shift();
    var c = b.shift(),
      d = b.shift(),
      e = {};
    return (e.k = d), (e.i = c), (e.b = b), e;
  }
  var iq = new Map([
    [5, "ad_storage"],
    [4, ["ad_storage", "ad_user_data"]],
  ]);
  function jq(a) {
    if (fq[5]) {
      for (
        var b = [],
          c = Qo(a, void 0, void 0, iq.get(5)),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = gq(e.value);
        f && (kq(f), b.push(f));
      }
      return b;
    }
  }
  function lq(a, b, c, d) {
    c = c || {};
    var e = fp(c.domain, c.path),
      f = hq(b, e);
    if (f) {
      var g = kp(c, d, void 0, iq.get(5));
      ap(a, f, g);
    }
  }
  function mq(a, b) {
    var c = b.Ja;
    return typeof c === "function" ? c(a) : c.test(a);
  }
  function kq(a) {
    for (
      var b = l(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { Se: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.Se = bq[e];
      d.Se
        ? d.Se.ri
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (k) {
                      return mq(k, g.Se);
                    };
                  })(d)
                )
              : void 0)
          : (typeof f === "string" && mq(f, d.Se)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
  }
  function nq(a) {
    for (
      var b = [],
        c = E.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Ai: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  }
  function oq(a, b) {
    var c = nq(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) &&
        Number(f[1])
      ) {
        d[c[e].Ai] || (d[c[e].Ai] = []);
        var g = { version: f[0], timestamp: Number(f[1]) * 1e3, W: f[2] };
        b && f.length > 3 && (g.labels = f.slice(3));
        d[c[e].Ai].push(g);
      }
    }
    return d;
  }
  function pq() {
    var a = String,
      b = A.location.hostname,
      c = A.location.pathname,
      d = (b = Bb(b));
    d.split(".").length > 2 &&
      (d = d.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
    b = d;
    c = Bb(c);
    var e = c.split(";")[0];
    e = e.replace(/\/(ar|slp|web|index)?\/?$/, "");
    return a(Oo(("" + b + e).toLowerCase()));
  }
  var qq = ["ad_storage", "ad_user_data"];
  function rq() {
    var a = sq();
    if (a.error) return a;
    if (!a.value) return { error: 2 };
    var b;
    try {
      b = a.value.gclid;
    } catch (c) {
      return { error: 11 };
    }
    return b ? { value: b } : { value: void 0 };
  }
  function sq(a) {
    a = a === void 0 ? !0 : a;
    if (!Yk(qq)) return { error: 3 };
    try {
      if (!A.localStorage) return { error: 1 };
    } catch (f) {
      return { error: 14 };
    }
    var b = { schema: "gcl", version: 1 },
      c = void 0;
    try {
      c = A.localStorage.getItem("_gcl_ls");
    } catch (f) {
      return { error: 13 };
    }
    try {
      if (c) {
        var d = JSON.parse(c);
        if (d && typeof d === "object") b = d;
        else return { error: 12 };
      }
    } catch (f) {
      return { error: 8 };
    }
    if (b.schema !== "gcl") return { error: 4 };
    if (b.version !== 1) return { error: 5 };
    try {
      var e = tq(b);
      a && e && uq({ value: b, error: 0 });
    } catch (f) {
      return { error: 8 };
    }
    return { value: b, error: 0 };
  }
  function tq(a) {
    if (!a || typeof a !== "object") return !1;
    if ("expires" in a && "value" in a) {
      var b;
      typeof a.expires === "number"
        ? (b = a.expires)
        : (b = typeof a.expires === "string" ? Number(a.expires) : NaN);
      if (isNaN(b) || !(Date.now() <= b))
        return (a.value = null), (a.error = 9), !0;
    } else {
      for (
        var c = !1, d = l(Object.keys(a)), e = d.next();
        !e.done;
        e = d.next()
      )
        c = tq(a[e.value]) || c;
      return c;
    }
    return !1;
  }
  function uq(a) {
    if (!a.error && a.value) {
      var b = a.value,
        c;
      try {
        c = JSON.stringify(b);
      } catch (d) {
        return;
      }
      try {
        A.localStorage.setItem("_gcl_ls", c);
      } catch (d) {}
    }
  }
  var vq = /^\w+$/,
    wq = /^[\w-]+$/,
    xq = {},
    yq =
      ((xq.aw = "_aw"),
      (xq.dc = "_dc"),
      (xq.gf = "_gf"),
      (xq.gp = "_gp"),
      (xq.gs = "_gs"),
      (xq.ha = "_ha"),
      (xq.ag = "_ag"),
      (xq.gb = "_gb"),
      xq);
  function zq() {
    return ["ad_storage", "ad_user_data"];
  }
  function Aq(a) {
    return !Yh(9) || Yk(a);
  }
  function Bq(a, b) {
    function c() {
      var d = Aq(b);
      d && a();
      return d;
    }
    el(function () {
      c() || fl(c, b);
    }, b);
  }
  function Cq(a) {
    return Dq(a).map(function (b) {
      return b.W;
    });
  }
  function Eq(a) {
    return Fq(a)
      .filter(function (b) {
        return b.W;
      })
      .map(function (b) {
        return b.W;
      });
  }
  function Fq(a) {
    var b = Gq(a.prefix),
      c = Hq("gb", b),
      d = Hq("ag", b);
    if (!d || !c) return [];
    var e = function (k) {
        return function (m) {
          m.type = k;
          return m;
        };
      },
      f = Dq(c).map(e("gb")),
      g = Iq(d).map(e("ag"));
    return f.concat(g).sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
  }
  function Jq(a, b, c, d, e, f) {
    var g = bb(a, function (k) {
      return k.W === c;
    });
    g
      ? (g.timestamp < d && ((g.timestamp = d), (g.Od = f)),
        (g.labels = Kq(g.labels || [], e || [])))
      : a.push({ version: b, W: c, timestamp: d, labels: e, Od: f });
  }
  function Iq(a) {
    for (
      var b = jq(a) || [], c = [], d = l(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        g = f,
        k = g.k,
        m = g.b,
        n = Lq(f);
      if (n) {
        var p = void 0;
        Yh(10) && (p = f.u);
        Jq(c, "2", k, n, m || [], p);
      }
    }
    return c.sort(function (q, r) {
      return r.timestamp - q.timestamp;
    });
  }
  function Dq(a) {
    for (
      var b = [], c = Qo(a, E.cookie, void 0, zq()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Mq(e.value);
      if (f != null) {
        var g = f;
        Jq(b, g.version, g.W, g.timestamp, g.labels);
      }
    }
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Nq(b);
  }
  function Oq(a, b) {
    for (var c = [], d = l(a), e = d.next(); !e.done; e = d.next()) {
      var f = e.value;
      c.includes(f) || c.push(f);
    }
    for (var g = l(b), k = g.next(); !k.done; k = g.next()) {
      var m = k.value;
      c.includes(m) || c.push(m);
    }
    return c;
  }
  function Pq(a, b) {
    var c = bb(a, function (d) {
      return d.W === b.W;
    });
    c
      ? (c.timestamp < b.timestamp &&
          ((c.timestamp = b.timestamp), (c.Od = b.Od)),
        (c.Na = c.Na
          ? b.Na
            ? c.timestamp < b.timestamp
              ? b.Na
              : c.Na
            : c.Na || 0
          : b.Na || 0),
        (c.labels = Oq(c.labels || [], b.labels || [])),
        (c.Vc = Oq(c.Vc || [], b.Vc || [])))
      : a.push(b);
  }
  function Qq() {
    var a = rq();
    if (!a || a.error || !a.value || typeof a.value !== "object") return null;
    var b = a.value;
    try {
      if (!("value" in b && b.value) || typeof b.value !== "object")
        return null;
      var c = b.value,
        d = c.value;
      return d && d.match(wq)
        ? {
            version: "",
            W: d,
            timestamp: Number(c.creationTimeMs) || 0,
            labels: [],
            Na: c.linkDecorationSource || 0,
            Vc: [2],
          }
        : null;
    } catch (e) {
      return null;
    }
  }
  function Rq(a) {
    for (
      var b = [], c = Qo(a, E.cookie, void 0, zq()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Mq(e.value);
      f != null && ((f.Od = void 0), (f.Na = 0), (f.Vc = [1]), Pq(b, f));
    }
    var g = Qq();
    g && ((g.Od = void 0), (g.Na = g.Na || 0), (g.Vc = g.Vc || [2]), Pq(b, g));
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Nq(b);
  }
  function Kq(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function Gq(a) {
    return a && typeof a === "string" && a.match(vq) ? a : "_gcl";
  }
  function Sq(a, b, c) {
    var d = Ej(a),
      e = yj(d, "query", !1, void 0, "gclsrc"),
      f = { value: yj(d, "query", !1, void 0, "gclid"), Na: c ? 4 : 2 };
    if (b && (!f.value || !e)) {
      var g = d.hash.replace("#", "");
      f.value || ((f.value = xj(g, "gclid", !1)), (f.Na = 3));
      e || (e = xj(g, "gclsrc", !1));
    }
    return !f.value || (e !== void 0 && e !== "aw" && e !== "aw.ds") ? [] : [f];
  }
  function Tq(a, b) {
    var c = Ej(a),
      d = yj(c, "query", !1, void 0, "gclid"),
      e = yj(c, "query", !1, void 0, "gclsrc"),
      f = yj(c, "query", !1, void 0, "wbraid");
    f = zb(f);
    var g = yj(c, "query", !1, void 0, "gbraid"),
      k = yj(c, "query", !1, void 0, "gad_source"),
      m = yj(c, "query", !1, void 0, "dclid");
    if (b && !(d && e && f && g)) {
      var n = c.hash.replace("#", "");
      d = d || xj(n, "gclid", !1);
      e = e || xj(n, "gclsrc", !1);
      f = f || xj(n, "wbraid", !1);
      g = g || xj(n, "gbraid", !1);
      k = k || xj(n, "gad_source", !1);
    }
    return Uq(d, e, m, f, g, k);
  }
  function Vq() {
    return Tq(A.location.href, !0);
  }
  function Uq(a, b, c, d, e, f) {
    var g = {},
      k = function (m, n) {
        g[n] || (g[n] = []);
        g[n].push(m);
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (a !== void 0 && a.match(wq))
      switch (b) {
        case void 0:
          k(a, "aw");
          break;
        case "aw.ds":
          k(a, "aw");
          k(a, "dc");
          break;
        case "ds":
          k(a, "dc");
          break;
        case "3p.ds":
          k(a, "dc");
          break;
        case "gf":
          k(a, "gf");
          break;
        case "ha":
          k(a, "ha");
      }
    c && k(c, "dc");
    d !== void 0 && wq.test(d) && ((g.wbraid = d), k(d, "gb"));
    e !== void 0 && wq.test(e) && ((g.gbraid = e), k(e, "ag"));
    f !== void 0 && wq.test(f) && ((g.gad_source = f), k(f, "gs"));
    return g;
  }
  function Wq(a) {
    var b = Vq();
    if (Yh(6)) {
      for (
        var c = !0, d = l(Object.keys(b)), e = d.next();
        !e.done;
        e = d.next()
      )
        if (b[e.value] !== void 0) {
          c = !1;
          break;
        }
      c && ((b = Tq(A.document.referrer, !1)), (b.gad_source = void 0));
    }
    Xq(b, !1, a);
  }
  function Yq(a) {
    Wq(a);
    var b = Sq(A.location.href, !0, !1);
    Yh(6) && !b.length && (b = Sq(A.document.referrer, !1, !0));
    if (b.length) {
      var c = b[0];
      a = a || {};
      var d = nb(),
        e = kp(a, d, !0),
        f = zq(),
        g = function () {
          if (Aq(f) && e.expires !== void 0) {
            var k = {
                value: {
                  value: c.value,
                  creationTimeMs: d,
                  linkDecorationSource: c.Na,
                },
                expires: Number(e.expires),
              },
              m = sq(!1);
            !m.error && m.value && ((m.value.gclid = k), uq(m));
          }
        };
      el(function () {
        g();
        Aq(f) || fl(g, f);
      }, f);
    }
  }
  function Xq(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = Gq(c.prefix),
      g = d || nb(),
      k = Math.round(g / 1e3),
      m = zq(),
      n = !1,
      p = !1,
      q = function () {
        if (Aq(m)) {
          var r = kp(c, g, !0);
          r.Ib = m;
          for (
            var u = function (F, S) {
                var M = Hq(F, f);
                M && (ap(M, S, r), F !== "gb" && (n = !0));
              },
              v = function (F) {
                var S = ["GCL", k, F];
                e.length > 0 && S.push(e.join("."));
                return S.join(".");
              },
              t = l(["aw", "dc", "gf", "ha", "gp"]),
              w = t.next();
            !w.done;
            w = t.next()
          ) {
            var x = w.value;
            a[x] && u(x, v(a[x][0]));
          }
          if (!n && a.gb) {
            var y = a.gb[0],
              B = Hq("gb", f);
            (!b &&
              Dq(B).some(function (F) {
                return F.W === y && F.labels && F.labels.length > 0;
              })) ||
              u("gb", v(y));
          }
        }
        if (!p && a.gbraid && Aq("ad_storage") && ((p = !0), !n)) {
          var C = a.gbraid,
            D = Hq("ag", f);
          if (
            b ||
            !Iq(D).some(function (F) {
              return F.W === C && F.labels && F.labels.length > 0;
            })
          ) {
            var H = {},
              J = ((H.k = C), (H.i = "" + k), (H.b = e), H);
            lq(D, J, c, g);
          }
        }
        Zq(a, f, g, c);
      };
    el(function () {
      q();
      Aq(m) || fl(q, m);
    }, m);
  }
  function Zq(a, b, c, d) {
    if (a.gad_source !== void 0 && Aq("ad_storage")) {
      if (Yh(4)) {
        var e = Ec();
        if (e === "r" || e === "h") return;
      }
      var f = a.gad_source,
        g = Hq("gs", b);
      if (g) {
        var k = Math.round((nb() - (Dc() || 0)) / 1e3),
          m;
        if (Yh(10)) {
          var n = pq(),
            p = {};
          m = ((p.k = f), (p.i = "" + k), (p.u = n), p);
        } else {
          var q = {};
          m = ((q.k = f), (q.i = "" + k), q);
        }
        lq(g, m, d, c);
      }
    }
  }
  function $q(a, b) {
    var c = Dp(!0);
    Bq(function () {
      for (var d = Gq(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (yq[f] !== void 0) {
          var g = Hq(f, d),
            k = c[g];
          if (k) {
            var m = Math.min(ar(k), nb()),
              n;
            b: {
              for (
                var p = m, q = Qo(g, E.cookie, void 0, zq()), r = 0;
                r < q.length;
                ++r
              )
                if (ar(q[r]) > p) {
                  n = !0;
                  break b;
                }
              n = !1;
            }
            if (!n) {
              var u = kp(b, m, !0);
              u.Ib = zq();
              ap(g, k, u);
            }
          }
        }
      }
      Xq(Uq(c.gclid, c.gclsrc), !1, b);
    }, zq());
  }
  function br(a) {
    var b = ["ag"],
      c = Dp(!0),
      d = Gq(a.prefix);
    Bq(
      function () {
        for (var e = 0; e < b.length; ++e) {
          var f = Hq(b[e], d);
          if (f) {
            var g = c[f];
            if (g) {
              var k = gq(g);
              if (k) {
                var m = Lq(k);
                m || (m = nb());
                var n;
                a: {
                  for (var p = m, q = jq(f), r = 0; r < q.length; ++r)
                    if (Lq(q[r]) > p) {
                      n = !0;
                      break a;
                    }
                  n = !1;
                }
                if (n) break;
                k.i = "" + Math.round(m / 1e3);
                lq(f, k, a, m);
              }
            }
          }
        }
      },
      ["ad_storage"]
    );
  }
  function Hq(a, b) {
    var c = yq[a];
    if (c !== void 0) return b + c;
  }
  function ar(a) {
    return cr(a.split(".")).length !== 0
      ? (Number(a.split(".")[1]) || 0) * 1e3
      : 0;
  }
  function Lq(a) {
    return a ? (Number(a.i) || 0) * 1e3 : 0;
  }
  function Mq(a) {
    var b = cr(a.split("."));
    return b.length === 0
      ? null
      : {
          version: b[0],
          W: b[2],
          timestamp: (Number(b[1]) || 0) * 1e3,
          labels: b.slice(3),
        };
  }
  function cr(a) {
    return a.length < 3 ||
      (a[0] !== "GCL" && a[0] !== "1") ||
      !/^\d+$/.test(a[1]) ||
      !wq.test(a[2])
      ? []
      : a;
  }
  function dr(a, b, c, d, e) {
    if (Array.isArray(b) && Po(A)) {
      var f = Gq(e),
        g = function () {
          for (var k = {}, m = 0; m < a.length; ++m) {
            var n = Hq(a[m], f);
            if (n) {
              var p = Qo(n, E.cookie, void 0, zq());
              p.length && (k[n] = p.sort()[p.length - 1]);
            }
          }
          return k;
        };
      Bq(function () {
        Kp(g, b, c, d);
      }, zq());
    }
  }
  function er(a, b, c, d) {
    if (Array.isArray(a) && Po(A)) {
      var e = ["ag"],
        f = Gq(d),
        g = function () {
          for (var k = {}, m = 0; m < e.length; ++m) {
            var n = Hq(e[m], f);
            if (!n) return {};
            var p = jq(n);
            if (p.length) {
              var q = p.sort(function (r, u) {
                return Lq(u) - Lq(r);
              })[0];
              k[n] = hq(q);
            }
          }
          return k;
        };
      Bq(
        function () {
          Kp(g, a, b, c);
        },
        ["ad_storage"]
      );
    }
  }
  function Nq(a) {
    return a.filter(function (b) {
      return wq.test(b.W);
    });
  }
  function fr(a, b) {
    if (Po(A)) {
      for (var c = Gq(b.prefix), d = {}, e = 0; e < a.length; e++)
        yq[a[e]] && (d[a[e]] = yq[a[e]]);
      Bq(function () {
        fb(d, function (f, g) {
          var k = Qo(c + g, E.cookie, void 0, zq());
          k.sort(function (u, v) {
            return ar(v) - ar(u);
          });
          if (k.length) {
            var m = k[0],
              n = ar(m),
              p = cr(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = cr(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
            q[f] = [r];
            Xq(q, !0, b, n, p);
          }
        });
      }, zq());
    }
  }
  function gr(a) {
    var b = ["ag"],
      c = ["gbraid"];
    Bq(
      function () {
        for (var d = Gq(a.prefix), e = 0; e < b.length; ++e) {
          var f = Hq(b[e], d);
          if (!f) break;
          var g = jq(f);
          if (g.length) {
            var k = g.sort(function (q, r) {
                return Lq(r) - Lq(q);
              })[0],
              m = Lq(k),
              n = k.b,
              p = {};
            p[c[e]] = k.k;
            Xq(p, !0, a, m, n);
          }
        }
      },
      ["ad_storage"]
    );
  }
  function hr(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  function ir(a) {
    function b(k, m, n) {
      n && (k[m] = n);
    }
    if (bl()) {
      var c = Vq(),
        d;
      a.includes("gad_source") &&
        (d = c.gad_source !== void 0 ? c.gad_source : Dp(!1)._gs);
      if (hr(c, a) || d) {
        var e = {};
        b(e, "gclid", c.gclid);
        b(e, "dclid", c.dclid);
        b(e, "gclsrc", c.gclsrc);
        b(e, "wbraid", c.wbraid);
        b(e, "gbraid", c.gbraid);
        Lp(function () {
          return e;
        }, 3);
        var f = {},
          g = ((f._up = "1"), f);
        b(g, "_gs", d);
        Lp(function () {
          return g;
        }, 1);
      }
    }
  }
  function jr(a) {
    if (!Yh(1)) return null;
    var b = Dp(!0).gad_source;
    if (b != null) return (A.location.hash = ""), b;
    if (Yh(2)) {
      var c = Ej(A.location.href);
      b = yj(c, "query", !1, void 0, "gad_source");
      if (b != null) return b;
      var d = Vq();
      if (hr(d, a)) return "0";
    }
    return null;
  }
  function kr(a) {
    var b = jr(a);
    b != null &&
      Lp(function () {
        var c = {};
        return (c.gad_source = b), c;
      }, 4);
  }
  function lr(a, b, c) {
    var d = [];
    if (b.length === 0) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        k = g.type ? g.type : "gcl";
      (g.labels || []).indexOf(c) === -1
        ? (a.push(0), e[k] || d.push(g))
        : a.push(1);
      e[k] = !0;
    }
    return d;
  }
  function mr(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!Aq(zq())) return e;
    var f = Dq(a),
      g = lr(e, f, b);
    if (g.length && !d)
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.W]
            .concat(n.labels || [], [b])
            .join("."),
          r = kp(c, p, !0);
        r.Ib = zq();
        ap(a, q, r);
      }
    return e;
  }
  function nr(a, b) {
    var c = [];
    b = b || {};
    var d = Fq(b),
      e = lr(c, d, a);
    if (e.length)
      for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
        var k = g.value,
          m = Gq(b.prefix),
          n = Hq(k.type, m);
        if (!n) break;
        var p = k,
          q = p.version,
          r = p.W,
          u = p.labels,
          v = p.timestamp,
          t = Math.round(v / 1e3);
        if (k.type === "ag") {
          var w = {},
            x = ((w.k = r), (w.i = "" + t), (w.b = (u || []).concat([a])), w);
          lq(n, x, b, v);
        } else if (k.type === "gb") {
          var y = [q, t, r].concat(u || [], [a]).join("."),
            B = kp(b, v, !0);
          B.Ib = zq();
          ap(n, y, B);
        }
      }
    return c;
  }
  function or(a, b) {
    var c = Gq(b),
      d = Hq(a, c);
    if (!d) return 0;
    var e;
    e = a === "ag" ? Iq(d) : Dq(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function pr(a) {
    for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp));
    return b;
  }
  function qr(a) {
    var b = Math.max(or("aw", a), pr(Aq(zq()) ? oq() : {})),
      c = Math.max(or("gb", a), pr(Aq(zq()) ? oq("_gac_gb", !0) : {}));
    c = Math.max(c, or("ag", a));
    return c > b;
  }
  function Gr() {
    Ji.dedupe_gclid || (Ji.dedupe_gclid = hp());
    return Ji.dedupe_gclid;
  }
  var Hr = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Ir = /^www.googleadservices.com$/;
  function Jr(a) {
    a || (a = Kr());
    return a.Cn
      ? !1
      : a.Bm || a.Cm || a.Fm || a.Dm || a.Ye || a.lm || a.Em || a.sm
      ? !0
      : !1;
  }
  function Kr() {
    var a = {},
      b = Dp(!0);
    a.Cn = !!b._up;
    var c = Vq();
    a.Bm = c.aw !== void 0;
    a.Cm = c.dc !== void 0;
    a.Fm = c.wbraid !== void 0;
    a.Dm = c.gbraid !== void 0;
    a.Em = c.gclsrc === "aw.ds";
    a.Ye = tr().Ye;
    var d = E.referrer ? yj(Ej(E.referrer), "host") : "";
    a.sm = Hr.test(d);
    a.lm = Ir.test(d);
    return a;
  }
  var Lr = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    Mr = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Nr = /^\d+\.fls\.doubleclick\.net$/,
    Or = /;gac=([^;?]+)/,
    Pr = /;gacgb=([^;?]+)/;
  function Qr(a, b) {
    if (Nr.test(E.location.host)) {
      var c = E.location.href.match(b);
      return c && c.length === 2 && c[1].match(Lr)
        ? decodeURIComponent(c[1])
        : "";
    }
    for (
      var d = [], e = l(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
        k.push(m[n].W);
      d.push(g + ":" + k.join(","));
    }
    return d.length > 0 ? d.join(";") : "";
  }
  function Rr(a, b, c) {
    for (
      var d = Aq(zq()) ? oq("_gac_gb", !0) : {},
        e = [],
        f = !1,
        g = l(Object.keys(d)),
        k = g.next();
      !k.done;
      k = g.next()
    ) {
      var m = k.value,
        n = mr("_gac_gb_" + m, a, b, c);
      f =
        f ||
        (n.length !== 0 &&
          n.some(function (p) {
            return p === 1;
          }));
      e.push(m + ":" + n.join(","));
    }
    return { km: f ? e.join(";") : "", jm: Qr(d, Pr) };
  }
  function Sr(a) {
    var b = E.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && b.length === 2 && b[1].match(Mr) ? b[1] : void 0;
  }
  function Tr(a) {
    var b = Yh(10),
      c = {},
      d,
      e,
      f;
    Nr.test(E.location.host) &&
      ((d = Sr("gclgs")), (e = Sr("gclst")), b && (f = Sr("gcllp")));
    if (d && e && (!b || f)) (c.kg = d), (c.mg = e), (c.lg = f);
    else {
      var g = nb(),
        k = Iq((a || "_gcl") + "_gs"),
        m = k.map(function (q) {
          return q.W;
        }),
        n = k.map(function (q) {
          return g - q.timestamp;
        }),
        p = [];
      b &&
        (p = k.map(function (q) {
          return q.Od;
        }));
      m.length > 0 &&
        n.length > 0 &&
        (!b || p.length > 0) &&
        ((c.kg = m.join(".")),
        (c.mg = n.join(".")),
        b && p.length > 0 && (c.lg = p.join(".")));
    }
    return c;
  }
  function Ur(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (Nr.test(E.location.host)) {
      var e = Sr(c);
      if (e) return [{ W: e }];
    } else {
      if (b === "gclid") {
        var f = (a || "_gcl") + "_aw";
        return d ? Rq(f) : Dq(f);
      }
      if (b === "wbraid") return Dq((a || "_gcl") + "_gb");
      if (b === "braids") return Fq({ prefix: a });
    }
    return [];
  }
  function Vr(a) {
    return Ur(a, "gclid", "gclaw")
      .map(function (b) {
        return b.W;
      })
      .join(".");
  }
  function Wr(a) {
    var b = Ur(a, "gclid", "gclaw", !0),
      c = b
        .map(function (f) {
          return f.W;
        })
        .join("."),
      d = b
        .map(function (f) {
          return f.Na || 0;
        })
        .join("."),
      e = b
        .map(function (f) {
          for (
            var g = 0, k = l(f.Vc || []), m = k.next();
            !m.done;
            m = k.next()
          ) {
            var n = m.value;
            n === 1 && (g |= 1);
            n === 2 && (g |= 2);
          }
          return g.toString();
        })
        .join(".");
    return { W: c, uk: d, vk: e };
  }
  function Xr(a) {
    return Ur(a, "braids", "gclgb")
      .map(function (b) {
        return b.W;
      })
      .join(".");
  }
  function Yr(a) {
    return Nr.test(E.location.host) ? !(Sr("gclaw") || Sr("gac")) : qr(a);
  }
  function Zr(a, b, c) {
    var d;
    d = c ? nr(a, b) : mr(((b && b.prefix) || "_gcl") + "_gb", a, b);
    return d.length === 0 ||
      d.every(function (e) {
        return e === 0;
      })
      ? ""
      : d.join(".");
  }
  function $r() {
    var a = A.__uspapi;
    if (Za(a)) {
      var b = "";
      try {
        a("getUSPData", 1, function (c, d) {
          if (d && c) {
            var e = c.uspString;
            e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e);
          }
        });
      } catch (c) {}
      return b;
    }
  }
  function js(a) {
    var b = U(a.m, N.g.Ob),
      c = U(a.m, N.g.kc);
    b && !c
      ? (a.eventName !== N.g.ba && a.eventName !== N.g.Xc && T(131),
        (a.isAborted = !0))
      : !b && c && (T(132), (a.isAborted = !0));
  }
  function ks(a) {
    var b = V(N.g.N) ? Ji.pscdl : "denied";
    b != null && (a.j[N.g.Gf] = b);
  }
  function ls(a) {
    var b = Mn(!0);
    a.j[N.g.Nb] = b;
  }
  function ms(a) {
    Ko() && (a.j[N.g.Ic] = 1);
  }
  function cs() {
    var a = E.title;
    if (a === void 0 || a === "") return "";
    var b = function (d) {
      try {
        return decodeURIComponent(d), !0;
      } catch (e) {
        return !1;
      }
    };
    a = encodeURIComponent(a);
    for (var c = 256; c > 0 && !b(a.substring(0, c)); ) c--;
    return decodeURIComponent(a.substring(0, c));
  }
  function ns(a) {
    os(a, "ce", U(a.m, N.g.Ra));
  }
  function os(a, b, c) {
    a.j[N.g.Ed] || (a.j[N.g.Ed] = {});
    a.j[N.g.Ed][b] = c;
  }
  function us(a, b, c, d) {
    var e = nc(),
      f;
    if (e === 1)
      a: {
        var g = Vi;
        g = g.toLowerCase();
        for (
          var k = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = E.getElementsByTagName("script"),
            q = 0;
          q < p.length && q < 100;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (r.indexOf(m) === 0) {
              f = 3;
              break a;
            }
            n === 1 && r.indexOf(k) === 0 && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (f === 2 || d || "http:" !== A.location.protocol ? a : b) + c;
  }
  function vs(a) {
    if (a !== void 0 && a !== null)
      return a === void 0 || a === null
        ? ""
        : typeof a === "object"
        ? a.toString()
        : String(a);
  }
  function ws(a) {
    return typeof a === "number" ? a : vs(a);
  }
  function Is(a) {
    return {
      getDestinationId: function () {
        return a.target.destinationId;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.j[b];
      },
      setHitData: function (b, c) {
        a.j[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        a.j[b] === void 0 && (a.j[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return U(a.m, b);
      },
      Ub: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.j);
      },
    };
  }
  function Ps(a) {
    var b,
      c = A,
      d = [];
    try {
      c.navigation && c.navigation.entries && (d = c.navigation.entries());
    } catch (k) {}
    b = d;
    for (var e = b.length - 1; e >= 0; e--) {
      var f = b[e],
        g = f.url && f.url.match("[?&#]" + a + "=([^&#]+)");
      if (g && g.length === 2) return g[1];
    }
  }
  var Qs,
    Rs = !1;
  function Ss() {
    Rs = !0;
    Qs = Qs || {};
  }
  function Ts(a) {
    Rs || Ss();
    return Qs[a];
  }
  function Us() {
    var a = A.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }
  function Vs(a) {
    if (E.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !A.getComputedStyle)
      return !0;
    var c = A.getComputedStyle(a, null);
    if (c.visibility === "hidden") return !0;
    for (var d = a, e = c; d; ) {
      if (e.display === "none") return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        k >= 0 &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
          (f = String(Math.min(Number(g), Number(f)))));
      }
      if (f !== void 0 && Number(f) <= 0) return !0;
      (d = d.parentElement) && (e = A.getComputedStyle(d, null));
    }
    return !1;
  }
  var If;
  var Wt = Number("") || 5,
    Xt = Number("") || 50,
    Yt = cb();
  var cu = {
    Ml: Number("") || 500,
    zl: Number("") || 5e3,
    Sj: Number("20") || 10,
    Xk: Number("") || 5e3,
  };
  function du(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var eu = function (a, b) {
    var c;
    return c;
  };
  var fu;
  function mu() {
    var a = Lf(If.j, "", function () {
      return {};
    });
    try {
      return a("internal_sw_allowed"), !0;
    } catch (b) {
      return !1;
    }
  }
  function nu(a, b, c) {
    c = c === void 0 ? !1 : c;
  }
  var ou = function (a, b, c, d) {};
  function pu(a, b, c, d, e) {}
  function qu(a, b, c, d) {}
  var ru = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128
        ? (b[c++] = e)
        : (e < 2048
            ? (b[c++] = (e >> 6) | 192)
            : ((e & 64512) == 55296 &&
              d + 1 < a.length &&
              (a.charCodeAt(d + 1) & 64512) == 56320
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  zn();
  In() || wn("iPod");
  wn("iPad");
  !wn("Android") || An() || zn() || yn() || wn("Silk");
  An();
  !wn("Safari") ||
    An() ||
    (xn() ? 0 : wn("Coast")) ||
    yn() ||
    (xn() ? 0 : wn("Edge")) ||
    (xn() ? vn("Microsoft Edge") : wn("Edg/")) ||
    (xn() ? vn("Opera") : wn("OPR")) ||
    zn() ||
    wn("Silk") ||
    wn("Android") ||
    Jn();
  var su = {},
    tu = null,
    uu = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e > 255 && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!tu) {
        tu = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          m < 5;
          m++
        ) {
          var n = g.concat(k[m].split(""));
          su[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            tu[q] === void 0 && (tu[q] = p);
          }
        }
      }
      for (
        var r = su[f],
          u = Array(Math.floor(b.length / 3)),
          v = r[64] || "",
          t = 0,
          w = 0;
        t < b.length - 2;
        t += 3
      ) {
        var x = b[t],
          y = b[t + 1],
          B = b[t + 2],
          C = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          H = r[((y & 15) << 2) | (B >> 6)],
          J = r[B & 63];
        u[w++] = "" + C + D + H + J;
      }
      var F = 0,
        S = v;
      switch (b.length - t) {
        case 2:
          (F = b[t + 1]), (S = r[(F & 15) << 2] || v);
        case 1:
          var M = b[t];
          u[w] = "" + r[M >> 2] + r[((M & 3) << 4) | (F >> 4)] + S + v;
      }
      return u.join("");
    };
  var vu =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function wu(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function xu() {
    var a = A.google_tag_data,
      b;
    if (a != null && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function yu() {
    var a, b;
    return (b = (a = A.google_tag_data) == null ? void 0 : a.uach_promise) !=
      null
      ? b
      : null;
  }
  function zu(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
        ? void 0
        : c.getHighEntropyValues) === "function"
    );
  }
  function Au() {
    var a = A;
    if (!zu(a)) return null;
    var b = wu(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(vu)
      .then(function (d) {
        b.uach != null || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  function Hu(a) {
    var b;
    b = b === void 0 ? document : b;
    var c;
    return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a));
  }
  function Iu() {
    return Hu("join-ad-interest-group") && Za(cc.joinAdInterestGroup);
  }
  function Ju(a, b) {
    var c = Xh[3] === void 0 ? 1 : Xh[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (c === 1) {
        var f = E.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(E.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = E.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var k = g,
      m =
        ((k == null ? void 0 : k.length) || 0) >=
        (Xh[2] === void 0 ? 50 : Xh[2]),
      n;
    if ((n = e.length >= 1)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p !== void 0 && nb() - p < (Xh[1] === void 0 ? 6e4 : Xh[1])
        ? (Va("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (c === 1)
        if (e.length >= 1) Ku(e[0]);
        else {
          if (m) {
            Va("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? Ku(e[0]) : m && Ku(k[0]);
      oc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: nb() }
      );
    }
  }
  function Ku(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function Lu() {
    return "https://td.doubleclick.net";
  }
  function Mu(a) {
    var b = a.location.href;
    if (a === a.top) return { url: b, Nm: !0 };
    var c = !1,
      d = a.document;
    d && d.referrer && ((b = d.referrer), a.parent === a.top && (c = !0));
    var e = a.location.ancestorOrigins;
    if (e) {
      var f = e[e.length - 1];
      f && b.indexOf(f) === -1 && ((c = !1), (b = f));
    }
    return { url: b, Nm: c };
  }
  var Hv = {
    J: {
      Ci: "ads_conversion_hit",
      Xd: "container_execute_start",
      Fi: "container_setup_end",
      yg: "container_setup_start",
      Di: "container_blocking_end",
      Ei: "container_execute_end",
      Gi: "container_yield_end",
      zg: "container_yield_start",
      Ij: "event_execute_end",
      Hj: "event_evaluation_end",
      vh: "event_evaluation_start",
      Jj: "event_setup_end",
      Ce: "event_setup_start",
      Lj: "ga4_conversion_hit",
      He: "page_load",
      Vn: "pageview",
      qc: "snippet_load",
      gk: "tag_callback_error",
      hk: "tag_callback_failure",
      ik: "tag_callback_success",
      jk: "tag_execute_end",
      Fd: "tag_execute_start",
    },
  };
  function Iv() {
    function a(c, d) {
      var e = Wa(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var Jv = !1;
  function sw(a, b) {}
  function tw(a, b) {}
  function uw(a, b) {}
  function vw(a, b) {}
  function ww() {
    var a = {};
    return a;
  }
  function kw(a) {
    a = a === void 0 ? !0 : a;
    var b = {};
    return b;
  }
  function xw() {}
  function yw(a, b) {}
  function zw(a, b, c) {}
  function Aw() {}
  function Bw(a, b) {
    var c = A,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  }
  function Cw(a, b, c, d) {
    var e = En(a, "fmt");
    if (b) {
      var f = En(a, "random"),
        g = En(a, "label") || "";
      if (!f) return !1;
      var k = uu(
        decodeURIComponent(g.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(f.replace(/\+/g, " "))
      );
      if (!Bw(k, b)) return !1;
    }
    e && Number(e) !== 4 && (a = Gn(a, "rfmt", e));
    var m = Gn(a, "fmt", 4);
    lc(
      m,
      function () {
        A.google_noFurtherRedirects &&
          b &&
          ((A.google_noFurtherRedirects = null), b());
      },
      c,
      d,
      E.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  }
  function hx(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  function ix(a, b, c) {
    c = c === void 0 ? !1 : c;
    jx().addRestriction(0, a, b, c);
  }
  function kx(a, b, c) {
    c = c === void 0 ? !1 : c;
    jx().addRestriction(1, a, b, c);
  }
  function lx() {
    var a = nk();
    return jx().getRestrictions(1, a);
  }
  var mx = function () {
      this.container = {};
      this.j = {};
    },
    nx = function (a, b) {
      var c = a.container[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.container[b] = c));
      return c;
    };
  mx.prototype.addRestriction = function (a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!d || !this.j[b]) {
      var e = nx(this, b);
      a === 0
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : a === 1 &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  mx.prototype.getRestrictions = function (a, b) {
    var c = nx(this, b);
    if (a === 0) {
      var d, e;
      return [].concat(
        ta(
          (c == null
            ? void 0
            : (d = c._entity) == null
            ? void 0
            : d.internal) || []
        ),
        ta(
          (c == null
            ? void 0
            : (e = c._entity) == null
            ? void 0
            : e.external) || []
        )
      );
    }
    if (a === 1) {
      var f, g;
      return [].concat(
        ta(
          (c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) ||
            []
        ),
        ta(
          (c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  mx.prototype.getExternalRestrictions = function (a, b) {
    var c = nx(this, b),
      d,
      e;
    return a === 0
      ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) ||
          []
      : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) ||
          [];
  };
  mx.prototype.removeExternalRestrictions = function (a) {
    var b = nx(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.j[a] = !0;
  };
  function jx() {
    var a = Ji.r;
    a || ((a = new mx()), (Ji.r = a));
    return a;
  }
  var ox = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    px = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    qx = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    rx =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  function sx() {
    var a = lj("gtm.allowlist") || lj("gtm.whitelist");
    a && T(9);
    Pi && (a = ["google", "gtagfl", "lcl", "zone"]);
    ox.test(A.location && A.location.hostname) &&
      (Pi
        ? T(116)
        : (T(117),
          tx &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log("GTM blocked. See go/13687728."))));
    var b = a && rb(jb(a), px),
      c = lj("gtm.blocklist") || lj("gtm.blacklist");
    c || ((c = lj("tagTypeBlacklist")) && T(3));
    c ? T(8) : (c = []);
    ox.test(A.location && A.location.hostname) &&
      ((c = jb(c)),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    jb(c).indexOf("google") >= 0 && T(2);
    var d = c && rb(jb(c), qx),
      e = {};
    return function (f) {
      var g = f && f[He.sa];
      if (!g || typeof g !== "string") return !0;
      g = g.replace(/^_*/, "");
      if (e[g] !== void 0) return e[g];
      var k = Zi[g] || [],
        m = !0;
      if (a) {
        var n;
        if ((n = m))
          a: {
            if (b.indexOf(g) < 0)
              if (k && k.length > 0)
                for (var p = 0; p < k.length; p++) {
                  if (b.indexOf(k[p]) < 0) {
                    T(11);
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (c) {
        var r = d.indexOf(g) >= 0;
        if (r) q = r;
        else {
          var u = db(d, k || []);
          u && T(10);
          q = u;
        }
      }
      var v = !m || q;
      v ||
        !(k.indexOf("sandboxedScripts") >= 0) ||
        (b && b.indexOf("sandboxedScripts") !== -1) ||
        (v = db(d, rx));
      return (e[g] = v);
    };
  }
  var tx = !1;
  tx = !0;
  function ux() {
    dk &&
      ix(nk(), function (a) {
        var b = sf(a.entityId),
          c;
        if (vf(b)) {
          var d = b[He.sa];
          if (!d)
            throw Error("Error: No function name given for function call.");
          var e = kf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!hx(b[He.sa], 4);
        return c;
      });
  }
  function vx(a, b, c, d, e) {
    if (!wx()) {
      var f = d.siloed ? jk(a) : a;
      if (!wk(f)) {
        d.siloed && yk({ ctid: f, isDestination: !1 });
        var g = qk();
        Zj().container[f] = { state: 1, context: d, parent: g };
        Yj({ ctid: f, isDestination: !1 }, e);
        var k = xx(a);
        if (fj()) lc(ej() + "/" + k);
        else {
          var m = sb(a, "GTM-"),
            n = Jj(),
            p = c ? "/gtag/js" : "/gtm.js",
            q = Ij(b, p + k);
          if (!q) {
            var r = Ii.Bf + p;
            n && fc && m
              ? ((r = fc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
                (q = us("https://", "http://", r + k)))
              : (q = fj() ? ej() + "/" + k : us("https://", "http://", r + k));
          }
          lc(q);
        }
      }
    }
  }
  function yx(a, b, c, d) {
    if (!wx()) {
      var e = c.siloed ? jk(a) : a;
      if (!xk(e))
        if (!c.siloed && zk())
          (Zj().destination[e] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: qk(),
          }),
            Yj({ ctid: e, isDestination: !0 }, d),
            T(91);
        else if (
          (c.siloed && yk({ ctid: e, isDestination: !0 }),
          (Zj().destination[e] = { state: 1, context: c, parent: qk() }),
          Yj({ ctid: e, isDestination: !0 }, d),
          fj())
        )
          lc(ej() + ("/gtd" + xx(a, !0)));
        else {
          var f = "/gtag/destination" + xx(a, !0),
            g = Ij(b, f);
          g ||
            (fj()
              ? ((f = "/gtd" + xx(a, !0)), (g = ej() + f))
              : (g = us("https://", "http://", Ii.Bf + f)));
          lc(g);
        }
    }
  }
  function xx(a, b) {
    b = b === void 0 ? !1 : b;
    var c = "?id=" + encodeURIComponent(a) + "&l=" + Ii.rb;
    if (!sb(a, "GTM-") || b) c += "&cx=c";
    c += "&gtm=" + No();
    Jj() && (c += "&sign=" + Ii.Ah);
    var d = cj.j;
    d === 1 ? (c += "&fps=fc") : d === 2 && (c += "&fps=fe");
    return c;
  }
  function wx() {
    if (Lo()) {
      return !0;
    }
    return !1;
  }
  var zx = !1,
    Ax = 0,
    Bx = [];
  function Cx(a) {
    if (!zx) {
      var b = E.createEventObject,
        c = E.readyState === "complete",
        d = E.readyState === "interactive";
      if (!a || a.type !== "readystatechange" || c || (!b && d)) {
        zx = !0;
        for (var e = 0; e < Bx.length; e++) G(Bx[e]);
      }
      Bx.push = function () {
        for (var f = ya.apply(0, arguments), g = 0; g < f.length; g++) G(f[g]);
        return 0;
      };
    }
  }
  function Dx() {
    if (!zx && Ax < 140) {
      Ax++;
      try {
        var a, b;
        (b = (a = E.documentElement).doScroll) == null || b.call(a, "left");
        Cx();
      } catch (c) {
        A.setTimeout(Dx, 50);
      }
    }
  }
  function Ex(a) {
    zx ? a() : Bx.push(a);
  }
  function Gx(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: lk(),
    };
  }
  var Ix = function (a, b) {
      this.j = !1;
      this.K = [];
      this.eventData = { tags: [] };
      this.P = !1;
      this.C = this.H = 0;
      Hx(this, a, b);
    },
    Jx = function (a, b, c, d) {
      if (Li.hasOwnProperty(b) || b === "__zone") return -1;
      var e = {};
      Qc(d) && (e = Rc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1;
    },
    Kx = function (a, b, c, d) {
      var e = a.eventData.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Lx = function (a) {
      if (!a.j) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.j = !0;
        a.K.length = 0;
      }
    },
    Hx = function (a, b, c) {
      b !== void 0 && a.Ne(b);
      c &&
        A.setTimeout(function () {
          Lx(a);
        }, Number(c));
    };
  Ix.prototype.Ne = function (a) {
    var b = this,
      c = pb(function () {
        G(function () {
          a(lk(), b.eventData);
        });
      });
    this.j ? c() : this.K.push(c);
  };
  var Mx = function (a) {
      a.H++;
      return pb(function () {
        a.C++;
        a.P && a.C >= a.H && Lx(a);
      });
    },
    Nx = function (a) {
      a.P = !0;
      a.C >= a.H && Lx(a);
    };
  var Ox = {};
  function Px() {
    return A[Qx()];
  }
  function Qx() {
    return A.GoogleAnalyticsObject || "ga";
  }
  function Tx() {
    var a = lk();
  }
  function Ux(a, b) {
    return function () {
      var c = Px(),
        d = c && c.getByName && c.getByName(a);
      if (d) {
        var e = d.get("sendHitTask");
        d.set("sendHitTask", function (f) {
          var g = f.get("hitPayload"),
            k = f.get("hitCallback"),
            m = g.indexOf("&tid=" + b) < 0;
          m &&
            (f.set(
              "hitPayload",
              g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
              !0
            ),
            f.set("hitCallback", void 0, !0));
          e(f);
          m &&
            (f.set("hitPayload", g, !0),
            f.set("hitCallback", k, !0),
            f.set("_x_19", void 0, !0),
            e(f));
        });
      }
    };
  }
  var Zx = ["es", "1"],
    $x = {},
    ay = {};
  function by(a, b) {
    if (Sj) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      $x[a] = [
        ["e", c],
        ["eid", a],
      ];
      Pm(a);
    }
  }
  function cy(a) {
    var b = a.eventId,
      c = a.Wc;
    if (!$x[b]) return [];
    var d = [];
    ay[b] || d.push(Zx);
    d.push.apply(d, ta($x[b]));
    c && (ay[b] = !0);
    return d;
  }
  var dy = {},
    ey = {},
    fy = {};
  function gy(a, b, c, d) {
    Sj &&
      R(104) &&
      ((d === void 0 ? 0 : d)
        ? ((fy[b] = fy[b] || 0), ++fy[b])
        : c !== void 0
        ? ((ey[a] = ey[a] || {}), (ey[a][b] = Math.round(c)))
        : ((dy[a] = dy[a] || {}), (dy[a][b] = (dy[a][b] || 0) + 1)));
  }
  function hy(a) {
    var b = a.eventId,
      c = a.Wc,
      d = dy[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete dy[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function iy(a) {
    var b = a.eventId,
      c = a.Wc,
      d = ey[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete ey[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function jy() {
    for (
      var a = [], b = l(Object.keys(fy)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + fy[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var ky = {},
    ly = {};
  function my(a, b, c) {
    if (Sj && b) {
      var d = Mj(b);
      ky[a] = ky[a] || [];
      ky[a].push(c + d);
      var e = (vf(b) ? "1" : "2") + d;
      ly[a] = ly[a] || [];
      ly[a].push(e);
      Pm(a);
    }
  }
  function ny(a) {
    var b = a.eventId,
      c = a.Wc,
      d = [],
      e = ky[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = ly[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete ky[b], delete ly[b]);
    return d;
  }
  function oy(a, b, c, d) {
    var e = hf[a],
      f = py(a, b, c, d);
    if (!f) return null;
    var g = wf(e[He.fk], c, []);
    if (g && g.length) {
      var k = g[0];
      f = oy(
        k.index,
        {
          onSuccess: f,
          onFailure: k.sk === 1 ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function py(a, b, c, d) {
    function e() {
      function w() {
        ll(3);
        var J = nb() - H;
        my(c.id, f, "7");
        Kx(c.rc, C, "exception", J);
        R(91) && zw(c, f, Hv.J.gk);
        D || ((D = !0), k());
      }
      if (f[He.El]) k();
      else {
        var x = uf(f, c, []),
          y = x[He.Vk];
        if (y != null)
          for (var B = 0; B < y.length; B++)
            if (!V(y[B])) {
              k();
              return;
            }
        var C = Jx(c.rc, String(f[He.sa]), Number(f[He.Me]), x[He.METADATA]),
          D = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!D) {
            D = !0;
            var J = nb() - H;
            my(c.id, hf[a], "5");
            Kx(c.rc, C, "success", J);
            R(91) && zw(c, f, Hv.J.ik);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!D) {
            D = !0;
            var J = nb() - H;
            my(c.id, hf[a], "6");
            Kx(c.rc, C, "failure", J);
            R(91) && zw(c, f, Hv.J.hk);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        my(c.id, f, "1");
        R(91) && yw(c, f);
        var H = nb();
        try {
          xf(x, { event: c, index: a, type: 1 });
        } catch (J) {
          w(J);
        }
        R(91) && zw(c, f, Hv.J.jk);
      }
    }
    var f = hf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = wf(f[He.kk], c, []);
    if (n && n.length) {
      var p = n[0],
        q = oy(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      k = p.sk === 2 ? m : q;
    }
    if (f[He.Vj] || f[He.Gl]) {
      var r = f[He.Vj] ? jf : c.vn,
        u = g,
        v = k;
      if (!r[a]) {
        var t = qy(a, r, pb(e));
        g = t.onSuccess;
        k = t.onFailure;
      }
      return function () {
        r[a](u, v);
      };
    }
    return e;
  }
  function qy(a, b, c) {
    var d = [],
      e = [];
    b[a] = ry(d, e, c);
    return {
      onSuccess: function () {
        b[a] = sy;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = ty;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function ry(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function sy(a) {
    a();
  }
  function ty(a, b) {
    b();
  }
  var wy = function (a, b) {
    for (var c = [], d = 0; d < hf.length; d++)
      if (a[d]) {
        var e = hf[d];
        var f = Mx(b.rc);
        try {
          var g = oy(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = e[He.sa];
            if (!k)
              throw Error("Error: No function name given for function call.");
            var m = kf[k];
            c.push({
              Mk: d,
              Ek: (m ? m.priorityOverride || 0 : 0) || hx(e[He.sa], 1) || 0,
              execute: g,
            });
          } else uy(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(vy);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return c.length > 0;
  };
  function vy(a, b) {
    var c,
      d = b.Ek,
      e = a.Ek;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (c !== 0) f = c;
    else {
      var g = a.Mk,
        k = b.Mk;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function uy(a, b) {
    if (Sj) {
      var c = function (d) {
        var e = b.isBlocked(hf[d]) ? "3" : "4",
          f = wf(hf[d][He.fk], b, []);
        f && f.length && c(f[0].index);
        my(b.id, hf[d], e);
        var g = wf(hf[d][He.kk], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var zy = !1,
    xy;
  function By(a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (R(91)) {
    }
    if (d === "gtm.js") {
      if (zy) return !1;
      zy = !0;
    }
    var e = !1,
      f = lx(),
      g = Rc(a, null);
    if (
      !f.every(function (u) {
        return u({ originalEventData: g });
      })
    ) {
      if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
        return !1;
      e = !0;
    }
    by(b, d);
    var k = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Cy(g, e),
        vn: [],
        logMacroError: function () {
          T(6);
          ll(0);
        },
        cachedModelValues: Dy(),
        rc: new Ix(function () {
          if (R(91)) {
          }
          k && k.apply(k, Array.prototype.slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    R(104) && Sj && (n.reportMacroDiscrepancy = gy);
    R(91) && uw(n.id, n.name);
    var p = Df(n);
    R(91) && vw(n.id, n.name);
    e && (p = Ey(p));
    if (R(91)) {
    }
    var q = wy(p, n),
      r = !1;
    Nx(n.rc);
    (d !== "gtm.js" && d !== "gtm.sync") || Tx();
    return Fy(p, q) || r;
  }
  function Dy() {
    var a = {};
    a.event = qj("event", 1);
    a.ecommerce = qj("ecommerce", 1);
    a.gtm = qj("gtm");
    a.eventModel = qj("eventModel");
    return a;
  }
  function Cy(a, b) {
    var c = sx();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[He.sa];
      if (!e || typeof e !== "string") return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = nk();
      f = jx().getRestrictions(0, g);
      var k = a;
      b &&
        ((k = Rc(a, null)), (k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (var m = Zi[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: k }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function Ey(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(hf[c][He.sa]);
        if (Ki[d] || hf[c][He.Hl] !== void 0 || hx(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Fy(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && hf[c] && !Li[String(hf[c][He.sa])]) return !0;
    return !1;
  }
  var Gy = 0;
  function Hy(a, b) {
    return arguments.length === 1 ? Iy("set", a) : Iy("set", a, b);
  }
  function Jy(a, b) {
    return arguments.length === 1 ? Iy("config", a) : Iy("config", a, b);
  }
  function Ky(a, b, c) {
    c = c || {};
    c[N.g.mc] = a;
    return Iy("event", b, c);
  }
  function Iy() {
    return arguments;
  }
  var Ly = function () {
    this.messages = [];
    this.j = [];
  };
  Ly.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.messages.push(f);
    for (var g = 0; g < this.j.length; g++)
      try {
        this.j[g](f);
      } catch (k) {}
  };
  Ly.prototype.listen = function (a) {
    this.j.push(a);
  };
  Ly.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Ly.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.messages = c;
    return b;
  };
  function My(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = Mf.canonicalContainerId;
    Ny().enqueue(a, b, c);
  }
  function Oy() {
    var a = gz;
    Ny().listen(a);
  }
  function Ny() {
    var a = Ji.mb;
    a || ((a = new Ly()), (Ji.mb = a));
    return a;
  }
  var hz = {},
    iz = {};
  function jz(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { ki: void 0, Th: void 0 }, f++
    ) {
      var g = a[f];
      if (g.indexOf("-") >= 0) {
        if (((e.ki = Vl(g, b)), e.ki)) {
          var k = kk();
          bb(
            k,
            (function (r) {
              return function (u) {
                return r.ki.destinationId === u;
              };
            })(e)
          )
            ? c.push(g)
            : d.push(g);
        }
      } else {
        var m = hz[g] || [];
        e.Th = {};
        m.forEach(
          (function (r) {
            return function (u) {
              r.Th[u] = !0;
            };
          })(e)
        );
        for (var n = hk(), p = 0; p < n.length; p++)
          if (e.Th[n[p]]) {
            c = c.concat(kk());
            break;
          }
        var q = iz[g] || [];
        q.length && (c = c.concat(q));
      }
    }
    return { Rm: c, Um: d };
  }
  function kz(a) {
    fb(hz, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  function lz(a) {
    fb(iz, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  var mz = "HA GF G UA AW DC MC".split(" "),
    nz = !1,
    oz = !1,
    pz = !1,
    qz = !1;
  function rz(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: $i() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var sz = void 0,
    tz = void 0;
  function uz(a, b, c) {
    var d = Rc(a, null);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return b[f] !== void 0;
    }) && T(136);
    var e = Rc(b, null);
    Rc(c, e);
    My(Jy(hk()[0], e), a.eventId, d);
  }
  function vz(a) {
    for (var b = l([N.g.yd, N.g.Sb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || Xm.j[d];
      if (e) return e;
    }
  }
  var wz = [
      N.g.yd,
      N.g.Sb,
      N.g.Gc,
      N.g.wb,
      N.g.Bb,
      N.g.Ca,
      N.g.za,
      N.g.La,
      N.g.Qa,
      N.g.xb,
    ],
    xz = {
      config: function (a, b) {
        var c = rz(a, b);
        if (!(a.length < 2) && z(a[1])) {
          var d = {};
          if (a.length > 2) {
            if ((a[2] !== void 0 && !Qc(a[2])) || a.length > 3) return;
            d = a[2];
          }
          var e = Vl(a[1], b.isGtmEvent);
          if (e) {
            var f, g, k;
            a: {
              if (!ck.Ge) {
                var m = pk(qk());
                if (Bk(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  k = { bn: pk(n), Qm: p };
                  break a;
                }
              }
              k = void 0;
            }
            var q = k;
            q && ((f = q.bn), (g = q.Qm));
            by(c.eventId, "gtag.config");
            var r = e.destinationId,
              u = e.id !== r;
            if (u ? kk().indexOf(r) === -1 : hk().indexOf(r) === -1) {
              if (!b.inheritParentConfig && !d[N.g.Ob]) {
                var v = vz(d);
                if (u)
                  yx(r, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                  var t = d;
                  sz ? uz(b, t, sz) : tz || (tz = Rc(t, null));
                } else
                  vx(r, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (T(128), g && T(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                tz
                  ? (uz(b, tz, x), (w = !1))
                  : ((!x[N.g.oc] && Ni && sz) || (sz = Rc(x, null)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var y = d;
              if (!pz && ((pz = !0), oz))
                for (var B = l(wz), C = B.next(); !C.done; C = B.next())
                  if (y.hasOwnProperty(C.value)) {
                    kl("erc");
                    break;
                  }
              Tj && !dk && (Gy === 1 && (Fk.mcc = !1), (Gy = 2));
              hl = !0;
              if (Ni && !u && !d[N.g.oc]) {
                var D = qz;
                qz = !0;
                if (D) return;
              }
              nz || T(43);
              if (!b.noTargetGroup)
                if (u) {
                  lz(e.id);
                  var H = e.id,
                    J = d[N.g.ve] || "default";
                  J = String(J).split(",");
                  for (var F = 0; F < J.length; F++) {
                    var S = iz[J[F]] || [];
                    iz[J[F]] = S;
                    S.indexOf(H) < 0 && S.push(H);
                  }
                } else {
                  kz(e.id);
                  var M = e.id,
                    Z = d[N.g.ve] || "default";
                  Z = Z.toString().split(",");
                  for (var ca = 0; ca < Z.length; ca++) {
                    var da = hz[Z[ca]] || [];
                    hz[Z[ca]] = da;
                    da.indexOf(M) < 0 && da.push(M);
                  }
                }
              delete d[N.g.ve];
              var Y = b.eventMetadata || {};
              Y.hasOwnProperty("is_external_event") ||
                (Y.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = Y;
              delete d[N.g.rd];
              for (var Q = u ? [e.id] : kk(), oa = 0; oa < Q.length; oa++) {
                var na = d,
                  ea = Q[oa],
                  ua = Rc(b, null),
                  Ra = Vl(ea, ua.isGtmEvent);
                Ra && Xm.push("config", [na], Ra, ua);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (a.length === 3) {
          T(39);
          var c = rz(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[N.g.O] && T(139), e[N.g.xa] && T(140));
          d === "default"
            ? yl(e)
            : d === "update"
            ? Al(e, c)
            : d === "declare" && b.fromContainerExecution && xl(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(a.length < 2) && z(c)) {
          var d = void 0;
          if (a.length > 2) {
            if ((!Qc(a[2]) && a[2] !== void 0) || a.length > 3) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = Rc(e, null)),
            e[N.g.rd] && (g.eventCallback = e[N.g.rd]),
            e[N.g.se] && (g.eventTimeout = e[N.g.se]));
          var k = rz(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if (c === "optimize.callback")
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[N.g.mc];
          r === void 0 &&
            ((r = lj(N.g.mc, 2)), r === void 0 && (r = "default"));
          if (z(r) || Array.isArray(r)) {
            var u;
            u = b.isGtmEvent
              ? z(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var v = jz(u, b.isGtmEvent),
              t = v.Rm,
              w = v.Um;
            if (w.length)
              for (var x = vz(q), y = 0; y < w.length; y++) {
                var B = Vl(w[y], b.isGtmEvent);
                B &&
                  yx(B.destinationId, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Wl(t, b.isGtmEvent);
          } else p = void 0;
          var C = p;
          if (C) {
            var D;
            !C.length ||
              ((D = b.eventMetadata) == null ? 0 : D.em_event) ||
              (oz = !0);
            by(m, c);
            for (var H = [], J = 0; J < C.length; J++) {
              var F = C[J],
                S = Rc(b, null);
              if (mz.indexOf(rk(F.prefix)) !== -1) {
                var M = Rc(d, null),
                  Z = S.eventMetadata || {};
                Z.hasOwnProperty("is_external_event") ||
                  (Z.is_external_event = !S.fromContainerExecution);
                S.eventMetadata = Z;
                delete M[N.g.rd];
                Ym(c, M, F.id, S);
                Tj && !dk && Gy === 0 && (Hk("mcc", "1"), (Gy = 1));
                hl = !0;
              }
              H.push(F.id);
            }
            g.eventModel = g.eventModel || {};
            C.length > 0
              ? (g.eventModel[N.g.mc] = H.join())
              : delete g.eventModel[N.g.mc];
            nz || T(43);
            b.noGtmEvent === void 0 &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[N.g.kc] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        T(53);
        if (a.length === 4 && z(a[1]) && z(a[2]) && Za(a[3])) {
          var c = Vl(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            nz || T(43);
            var f = vz();
            if (
              !bb(kk(), function (k) {
                return c.destinationId === k;
              })
            )
              yx(c.destinationId, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (mz.indexOf(rk(c.prefix)) !== -1) {
              hl = !0;
              rz(a, b);
              var g = {};
              Rc(((g[N.g.zb] = d), (g[N.g.Mb] = e), g), null);
              Zm(
                d,
                function (k) {
                  G(function () {
                    e(k);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (a.length === 2 && a[1].getTime) {
          nz = !0;
          var c = rz(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (a.length === 3 && z(a[1]) && Za(a[2])) {
          if ((Jf(a[1], a[2]), T(74), a[1] === "all")) {
            T(75);
            var b = !1;
            try {
              b = a[2](lk(), "unknown", {});
            } catch (c) {}
            b || T(76);
          }
        } else T(73);
      },
      set: function (a, b) {
        var c = void 0;
        a.length === 2 && Qc(a[1])
          ? (c = Rc(a[1], null))
          : a.length === 3 &&
            z(a[1]) &&
            ((c = {}),
            Qc(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = Rc(a[2], null))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = rz(a, b),
            e = d.eventId,
            f = d.priorityId;
          Rc(c, null);
          var g = Rc(c, null);
          Xm.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    yz = { policy: !0 };
  var Az = function (a) {
    if (zz(a)) return a;
    this.value = a;
  };
  Az.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var zz = function (a) {
    return !a || Oc(a) !== "object" || Qc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  Az.prototype.getUntrustedMessageValue = Az.prototype.getUntrustedMessageValue;
  var Bz = !1,
    Cz = [];
  function Dz() {
    if (!Bz) {
      Bz = !0;
      for (var a = 0; a < Cz.length; a++) G(Cz[a]);
    }
  }
  function Ez(a) {
    Bz ? G(a) : Cz.push(a);
  }
  var Fz = 0,
    Gz = {},
    Hz = [],
    Iz = [],
    Jz = !1,
    Kz = !1;
  function Lz(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  function Mz(a, b, c) {
    a.eventCallback = b;
    c && (a.eventTimeout = c);
    return Nz(a);
  }
  function Oz(a, b) {
    if (!$a(b) || b < 0) b = 0;
    var c = Ji[Ii.rb],
      d = 0,
      e = !1,
      f = void 0;
    f = A.setTimeout(function () {
      e || ((e = !0), a());
      f = void 0;
    }, b);
    return function () {
      var g = c ? c.subscribers : 1;
      ++d === g &&
        (f && (A.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
    };
  }
  function Pz(a, b) {
    var c = a._clear || b.overwriteModelFields;
    fb(a, function (e, f) {
      e !== "_clear" && (c && oj(e), oj(e, f));
    });
    Wi || (Wi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    typeof d !== "number" &&
      ((d = $i()), (a["gtm.uniqueEventId"] = d), oj("gtm.uniqueEventId", d));
    return By(a);
  }
  function Qz(a) {
    if (a == null || typeof a !== "object") return !1;
    if (a.event) return !0;
    if (gb(a)) {
      var b = a[0];
      if (b === "config" || b === "event" || b === "js" || b === "get")
        return !0;
    }
    return !1;
  }
  function Rz() {
    var a;
    if (Iz.length) a = Iz.shift();
    else if (Hz.length) a = Hz.shift();
    else return;
    var b;
    var c = a;
    if (Jz || !Qz(c.message)) b = c;
    else {
      Jz = !0;
      var d = c.message["gtm.uniqueEventId"];
      typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = $i());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      Hz.unshift(k, c);
      Tj && Lk();
      b = f;
    }
    return b;
  }
  function Sz() {
    for (var a = !1, b; !Kz && (b = Rz()); ) {
      Kz = !0;
      delete ij.eventModel;
      kj();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (d == null) Kz = !1;
      else {
        e.fromContainerExecution && pj();
        try {
          if (Za(d))
            try {
              d.call(mj);
            } catch (v) {}
          else if (Array.isArray(d)) {
            if (z(d[0])) {
              var f = d[0].split("."),
                g = f.pop(),
                k = d.slice(1),
                m = lj(f.join("."), 2);
              if (m != null)
                try {
                  m[g].apply(m, k);
                } catch (v) {}
            }
          } else {
            var n = void 0;
            if (gb(d))
              a: {
                if (d.length && z(d[0])) {
                  var p = xz[d[0]];
                  if (p && (!e.fromContainerExecution || !yz[d[0]])) {
                    n = p(d, e);
                    break a;
                  }
                }
                n = void 0;
              }
            else n = d;
            n && (a = Pz(n, e) || a);
          }
        } finally {
          e.fromContainerExecution && kj(!0);
          var q = d["gtm.uniqueEventId"];
          if (typeof q === "number") {
            for (var r = Gz[String(q)] || [], u = 0; u < r.length; u++)
              Iz.push(Tz(r[u]));
            r.length && Iz.sort(Lz);
            delete Gz[String(q)];
            q > Fz && (Fz = q);
          }
          Kz = !1;
        }
      }
    }
    return !a;
  }
  function Uz() {
    if (R(91)) {
      var a = Vz();
    }
    var b = Sz();
    if (R(91)) {
    }
    try {
      var c = lk(),
        d = A[Ii.rb].hide;
      if (d && d[c] !== void 0 && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && d[f] === !0) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function gz(a) {
    if (Fz < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Gz[b] = Gz[b] || [];
      Gz[b].push(a);
    } else
      Iz.push(Tz(a)),
        Iz.sort(Lz),
        G(function () {
          Kz || Sz();
        });
  }
  function Tz(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  function Wz() {
    function a(f) {
      var g = {};
      if (zz(f)) {
        var k = f;
        f = zz(k) ? k.getUntrustedMessageValue() : void 0;
        g.fromContainerExecution = !0;
      }
      return { message: f, messageContext: g };
    }
    var b = gc(Ii.rb, []),
      c = (Ji[Ii.rb] = Ji[Ii.rb] || {});
    c.pruned === !0 && T(83);
    Gz = Ny().get();
    Oy();
    Ex(function () {
      if (!c.gtmDom) {
        c.gtmDom = !0;
        var f = {};
        b.push(((f.event = "gtm.dom"), f));
      }
    });
    Ez(function () {
      if (!c.gtmLoad) {
        c.gtmLoad = !0;
        var f = {};
        b.push(((f.event = "gtm.load"), f));
      }
    });
    c.subscribers = (c.subscribers || 0) + 1;
    var d = b.push;
    b.push = function () {
      var f;
      if (Ji.SANDBOXED_JS_SEMAPHORE > 0) {
        f = [];
        for (var g = 0; g < arguments.length; g++) f[g] = new Az(arguments[g]);
      } else f = [].slice.call(arguments, 0);
      var k = f.map(function (q) {
        return a(q);
      });
      Hz.push.apply(Hz, k);
      var m = d.apply(b, f),
        n = Math.max(100, Number("1000") || 300);
      if (this.length > n)
        for (T(4), c.pruned = !0; this.length > n; ) this.shift();
      var p = typeof m !== "boolean" || m;
      return Sz() && p;
    };
    var e = b.slice(0).map(function (f) {
      return a(f);
    });
    Hz.push.apply(Hz, e);
    if (Vz()) {
      if (R(91)) {
      }
      G(Uz);
    }
  }
  var Vz = function () {
      var a = !0;
      return a;
    },
    Nz = function (a) {
      return A[Ii.rb].push(a);
    };
  function Xz(a) {
    if (a == null || a.length === 0) return !1;
    var b = Number(a),
      c = nb();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Yz(a) {
    return a && a.indexOf("pending:") === 0 ? Xz(a.substr(8)) : !1;
  }
  var Zz = /^(https?:)?\/\//;
  function tA() {}
  var uA = function () {};
  uA.prototype.toString = function () {
    return "undefined";
  };
  var vA = new uA();
  function CA(a, b) {
    function c(g) {
      var k = Ej(g),
        m = yj(k, "protocol"),
        n = yj(k, "host", !0),
        p = yj(k, "port"),
        q = yj(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        m === void 0 ||
        (m === "http" && p === "80") ||
        (m === "https" && p === "443")
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function DA(a) {
    return EA(a) ? 1 : 0;
  }
  function EA(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = Rc(a, {});
        Rc({ arg1: c[d], any_of: void 0 }, e);
        if (DA(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return lg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < hg.length; g++) {
                var k = hg[g];
                if (b[k] != null) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return ig(b, c);
      case "_eq":
        return mg(b, c);
      case "_ge":
        return ng(b, c);
      case "_gt":
        return pg(b, c);
      case "_lc":
        return String(b).split(",").indexOf(String(c)) >= 0;
      case "_le":
        return og(b, c);
      case "_lt":
        return qg(b, c);
      case "_re":
        return kg(b, c, a.ignore_case);
      case "_sw":
        return rg(b, c);
      case "_um":
        return CA(b, c);
    }
    return !1;
  }
  function FA() {
    var a;
    a = a === void 0 ? "" : a;
    var b, c;
    return (
      (b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function GA() {
    var a = [
      ["cv", R(124) ? FA() : "2"],
      ["rv", Ii.zh],
      [
        "tc",
        hf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    Ii.Je && a.push(["x", Ii.Je]);
    dj() && a.push(["tag_exp", dj()]);
    return a;
  }
  var HA = {},
    IA = {};
  function JA() {
    var a = 0;
    return function (b) {
      switch (b) {
        case 1:
          a |= 1;
          break;
        case 2:
          a |= 2;
          break;
        case 3:
          a |= 4;
      }
      return a;
    };
  }
  function KA(a, b, c, d) {
    if (Sj) {
      var e = String(c) + b;
      HA[a] = HA[a] || [];
      HA[a].push(e);
      IA[a] = IA[a] || [];
      IA[a].push(d + b);
    }
  }
  function LA(a) {
    var b = a.eventId,
      c = a.Wc,
      d = [],
      e = HA[b] || [];
    e.length && d.push(["hf", e.join(".")]);
    var f = IA[b] || [];
    f.length && d.push(["ht", f.join(".")]);
    c && (delete HA[b], delete IA[b]);
    return d;
  }
  function MA() {
    return !1;
  }
  function NA() {
    var a = {};
    return function (b, c, d) {};
  }
  function OA() {
    var a = PA;
    return function (b, c, d) {
      var e = d && d.event;
      (b === "__html" && R(95)) || QA(c);
      var f = sb(b, "__cvt_") ? void 0 : 1,
        g = new La();
      fb(c, function (r, u) {
        var v = dd(u, void 0, f);
        v === void 0 && u !== void 0 && T(44);
        g.set(r, v);
      });
      a.j.j.C = Bf();
      var k = {
        nk: Qf(b),
        eventId: e == null ? void 0 : e.id,
        priorityId: e !== void 0 ? e.priorityId : void 0,
        Ne:
          e !== void 0
            ? function (r) {
                e.rc.Ne(r);
              }
            : void 0,
        ob: function () {
          return b;
        },
        log: function () {},
        im: {
          index: d == null ? void 0 : d.index,
          type: d == null ? void 0 : d.type,
          name: d == null ? void 0 : d.name,
        },
        on: !!hx(b, 3),
        originalEventData: e == null ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (k.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (MA()) {
        var m = NA(),
          n,
          p;
        k.Ya = {
          zi: [],
          Oe: {},
          Fb: function (r, u, v) {
            u === 1 && (n = r);
            u === 7 && (p = v);
            m(r, u, v);
          },
          sg: $g(),
        };
        k.log = function (r) {
          var u = ya.apply(1, arguments);
          n && m(n, 4, { level: r, source: p, message: u });
        };
      }
      var q = Be(a, k, [b, g]);
      a.j.j.C = void 0;
      q instanceof Ba && q.type === "return" && (q = q.data);
      return I(q, void 0, f);
    };
  }
  function QA(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Za(b) &&
      (a.gtmOnSuccess = function () {
        G(b);
      });
    Za(c) &&
      (a.gtmOnFailure = function () {
        G(c);
      });
  }
  function RA(a) {}
  RA.F = "internal.addAdsClickIds";
  function SA(a, b) {
    var c = this;
  }
  SA.T = "addConsentListener";
  var TA = !1;
  function UA(a) {
    for (var b = 0; b < a.length; ++b)
      if (TA)
        try {
          a[b]();
        } catch (c) {
          T(77);
        }
      else a[b]();
  }
  function VA(a, b, c) {
    var d = this,
      e;
    return e;
  }
  VA.F = "internal.addDataLayerEventListener";
  function WA(a, b, c) {}
  WA.T = "addDocumentEventListener";
  function XA(a, b, c, d) {}
  XA.T = "addElementEventListener";
  function YA(a) {
    return a.D.j;
  }
  function ZA(a) {}
  ZA.T = "addEventCallback";
  function oB(a) {}
  oB.F = "internal.addFormAbandonmentListener";
  function pB(a, b, c, d) {}
  pB.F = "internal.addFormData";
  var qB = {},
    rB = [],
    sB = {},
    tB = 0,
    uB = 0;
  function BB(a, b) {}
  BB.F = "internal.addFormInteractionListener";
  function IB(a, b) {}
  IB.F = "internal.addFormSubmitListener";
  function NB(a) {}
  NB.F = "internal.addGaSendListener";
  function OB(a) {
    if (!a) return {};
    var b = a.im;
    return Gx(b.type, b.index, b.name);
  }
  function PB(a) {
    return a ? { originatingEntity: OB(a) } : {};
  }
  var RB = function (a, b, c) {
      QB().updateZone(a, b, c);
    },
    TB = function (a, b, c, d, e, f) {
      var g = QB();
      c = c && rb(c, SB);
      for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, lk(), k)) {
          var p = n,
            q = a,
            r = d,
            u = e,
            v = f;
          if (sb(p, "GTM-"))
            vx(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var t = Iy("js", mb());
            vx(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: u, inheritParentConfig: v };
            R(130) || My(t, q, w);
            My(Jy(p, r), q, w);
          }
        }
      }
      return k;
    },
    QB = function () {
      var a = Ji.zones;
      a || (a = Ji.zones = new UB());
      return a;
    },
    VB = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    SB = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    UB = function () {
      this.j = {};
      this.C = {};
      this.H = 0;
    };
  h = UB.prototype;
  h.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.ji], b)) return !1;
    for (var e = 0; e < c.yf.length; e++) if (this.C[c.yf[e]].Ld(b)) return !0;
    return !1;
  };
  h.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.yf.length; f++) {
      var g = this.C[c.yf[f]];
      g.Ld(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var k = this.getIsAllowedFn([c.ji], b);
    return function (m, n) {
      n = n || [];
      if (!k(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].H(m, n)) return !0;
      return !1;
    };
  };
  h.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.j[a[b]];
  };
  h.createZone = function (a, b) {
    var c = String(++this.H);
    this.C[c] = new WB(a, b);
    return c;
  };
  h.updateZone = function (a, b, c) {
    var d = this.C[a];
    d && d.K(b, c);
  };
  h.registerChild = function (a, b, c) {
    var d = this.j[a];
    if ((!d && Ji[a]) || (!d && wk(a)) || (d && d.ji !== b)) return !1;
    if (d) return d.yf.push(c), !1;
    this.j[a] = { ji: b, yf: [c] };
    return !0;
  };
  var WB = function (a, b) {
    this.C = null;
    this.j = [{ eventId: a, Ld: !0 }];
    if (b) {
      this.C = {};
      for (var c = 0; c < b.length; c++) this.C[b[c]] = !0;
    }
  };
  WB.prototype.K = function (a, b) {
    var c = this.j[this.j.length - 1];
    a <= c.eventId || (c.Ld !== b && this.j.push({ eventId: a, Ld: b }));
  };
  WB.prototype.Ld = function (a) {
    for (var b = this.j.length - 1; b >= 0; b--)
      if (this.j[b].eventId <= a) return this.j[b].Ld;
    return !1;
  };
  WB.prototype.H = function (a, b) {
    b = b || [];
    if (!this.C || VB[a] || this.C[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.C[b[c]]) return !0;
    return !1;
  };
  function XB(a) {
    var b = Ji.zones;
    return b
      ? b.getIsAllowedFn(hk(), a)
      : function () {
          return !0;
        };
  }
  function YB() {
    kx(nk(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = Ji.zones;
      return c ? c.isActive(hk(), b) : !0;
    });
    ix(nk(), function (a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return XB(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var ZB = function (a, b) {
    this.tagId = a;
    this.Qe = b;
  };
  function $B(a, b) {
    var c = this,
      d;
    var e = function (v) {
      ix(
        v,
        function (t) {
          for (
            var w = jx().getExternalRestrictions(0, nk()),
              x = l(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var B = y.value;
            if (!B(t)) return !1;
          }
          return !0;
        },
        !0
      );
      kx(
        v,
        function (t) {
          for (
            var w = jx().getExternalRestrictions(1, nk()),
              x = l(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var B = y.value;
            if (!B(t)) return !1;
          }
          return !0;
        },
        !0
      );
      k && k(new ZB(a, v));
    };
    K(this.getName(), ["tagId:!string", "options:?PixieMap"], arguments);
    var f = I(b, this.D, 1) || {},
      g = f.firstPartyUrl,
      k = f.onLoad,
      m = f.loadByDestination === !0,
      n = f.isGtmEvent === !0,
      p = f.siloed === !0;
    UA([
      function () {
        return L(c, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (xk(a)) return;
    } else if (wk(a)) return;
    var q = 6,
      r = YA(this);
    n && (q = 7);
    r.ob() === "__zone" && (q = 1);
    var u = { source: q, fromContainerExecution: !0, siloed: p };
    m ? yx(a, g, u, e) : vx(a, g, !sb(a, "GTM-"), u, e);
    k &&
      r.ob() === "__zone" &&
      TB(Number.MIN_SAFE_INTEGER, [a], null, {}, OB(YA(this)));
    d = p ? jk(a) : a;
    return d;
  }
  $B.F = "internal.loadGoogleTag";
  function aC(a) {
    return new Wc("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof Wc)
        return new Wc("", function () {
          var d = ya.apply(0, arguments),
            e = this,
            f = Rc(YA(this), null);
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            k = Ha(this.D);
          k.j = f;
          return c.qb.apply(c, [k].concat(ta(g)));
        });
    });
  }
  function bC(a, b, c) {
    var d = this;
  }
  bC.F = "internal.addGoogleTagRestriction";
  var cC = {},
    dC = [];
  function kC(a, b) {}
  kC.F = "internal.addHistoryChangeListener";
  function lC(a, b, c) {}
  lC.T = "addWindowEventListener";
  function mC(a, b) {
    return !0;
  }
  mC.T = "aliasInWindow";
  function nC(a, b, c) {}
  nC.F = "internal.appendRemoteConfigParameter";
  function oC(a) {
    var b;
    return b;
  }
  oC.T = "callInWindow";
  function pC(a) {}
  pC.T = "callLater";
  function qC(a) {}
  qC.F = "callOnDomReady";
  function rC(a) {}
  rC.F = "callOnWindowLoad";
  function sC(a, b) {
    var c;
    return c;
  }
  sC.F = "internal.computeGtmParameter";
  function tC(a, b) {
    var c = this;
  }
  tC.F = "internal.consentScheduleFirstTry";
  function uC(a, b) {
    var c = this;
  }
  uC.F = "internal.consentScheduleRetry";
  function vC(a) {
    var b;
    return b;
  }
  vC.F = "internal.copyFromCrossContainerData";
  function wC(a, b) {
    var c;
    var d = dd(c, this.D, sb(YA(this).ob(), "__cvt_") ? 2 : 1);
    d === void 0 && c !== void 0 && T(45);
    return d;
  }
  wC.T = "copyFromDataLayer";
  function xC(a) {
    var b = void 0;
    return b;
  }
  xC.F = "internal.copyFromDataLayerCache";
  function yC(a) {
    var b;
    return b;
  }
  yC.T = "copyFromWindow";
  function zC(a) {
    var b = void 0;
    return dd(b, this.D, 1);
  }
  zC.F = "internal.copyKeyFromWindow";
  var AC = function (a, b, c) {
    this.eventName = b;
    this.m = c;
    this.j = {};
    this.isAborted = !1;
    this.target = a;
    this.metadata = Rc(c.eventMetadata || {}, {});
  };
  AC.prototype.copyToHitData = function (a, b, c) {
    var d = U(this.m, a);
    d === void 0 && (d = b);
    if (d !== void 0 && c !== void 0 && z(d) && R(83))
      try {
        d = c(d);
      } catch (e) {}
    d !== void 0 && (this.j[a] = d);
  };
  var Rt = function (a, b, c) {
    var d = Ts(a.target.destinationId);
    return d && d[b] !== void 0 ? d[b] : c;
  };
  function BC(a, b) {
    var c;
    return c;
  }
  BC.F = "internal.copyPreHit";
  function CC(a, b) {
    var c = null;
    K(this.getName(), ["functionPath:!string", "arrayPath:!string"], arguments);
    L(this, "access_globals", "readwrite", a);
    L(this, "access_globals", "readwrite", b);
    var d = [A, E],
      e = a.split("."),
      f = ub(e, d),
      g = e[e.length - 1];
    if (f === void 0) throw Error("Path " + a + " does not exist.");
    var k = f[g];
    if (k && !Za(k)) return null;
    if (k) return dd(k, this.D, 2);
    var m;
    k = function () {
      if (!Za(m.push))
        throw Error("Object at " + b + " in window is not an array.");
      m.push.call(m, arguments);
    };
    f[g] = k;
    var n = b.split("."),
      p = ub(n, d),
      q = n[n.length - 1];
    if (p === void 0) throw Error("Path " + n + " does not exist.");
    m = p[q];
    m === void 0 && ((m = []), (p[q] = m));
    c = function () {
      k.apply(k, Array.prototype.slice.call(arguments, 0));
    };
    return dd(c, this.D, 2);
  }
  CC.T = "createArgumentsQueue";
  function DC(a) {
    return dd(
      function (c) {
        var d = Px();
        if (typeof c === "function")
          d(function () {
            c(function (f, g, k) {
              var m = Px(),
                n = m && m.getByName && m.getByName(f);
              return hn(A.gaplugins.Linker, n).decorate(g, k);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c);
        } else if (c === "isLoaded") return !!d.loaded;
      },
      this.D,
      1
    );
  }
  DC.F = "internal.createGaCommandQueue";
  function EC(a) {
    return dd(
      function () {
        if (!Za(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.D,
      sb(YA(this).ob(), "__cvt_") ? 2 : 1
    );
  }
  EC.T = "createQueue";
  function FC(a, b) {
    var c = null;
    return c;
  }
  FC.F = "internal.createRegex";
  function GC() {
    var a = {};
    return a;
  }
  function HC(a) {}
  HC.F = "internal.declareConsentState";
  function IC(a) {
    var b = "";
    return b;
  }
  IC.F = "internal.decodeUrlHtmlEntities";
  function JC(a, b, c) {
    var d;
    return d;
  }
  JC.F = "internal.decorateUrlWithGaCookies";
  function KC() {}
  KC.F = "internal.deferCustomEvents";
  function LC(a) {
    var b;
    return b;
  }
  LC.F = "internal.detectUserProvidedData";
  function PC(a, b) {
    return b;
  }
  PC.F = "internal.enableAutoEventOnClick";
  function XC(a, b) {
    return b;
  }
  XC.F = "internal.enableAutoEventOnElementVisibility";
  function YC() {}
  YC.F = "internal.enableAutoEventOnError";
  var ZC = {},
    $C = [],
    aD = {},
    bD = 0,
    cD = 0;
  function iD(a, b) {
    var c = this;
    return b;
  }
  iD.F = "internal.enableAutoEventOnFormInteraction";
  function nD(a, b) {
    var c = this;
    return b;
  }
  nD.F = "internal.enableAutoEventOnFormSubmit";
  function sD() {
    var a = this;
  }
  sD.F = "internal.enableAutoEventOnGaSend";
  var tD = {},
    uD = [];
  function BD(a, b) {
    var c = this;
    return b;
  }
  BD.F = "internal.enableAutoEventOnHistoryChange";
  var CD = ["http://", "https://", "javascript:", "file://"];
  function GD(a, b) {
    var c = this;
    return b;
  }
  GD.F = "internal.enableAutoEventOnLinkClick";
  var HD, ID;
  function TD(a, b) {
    var c = this;
    return b;
  }
  TD.F = "internal.enableAutoEventOnScroll";
  function UD(a) {
    return function () {
      if (a.limit && a.fi >= a.limit) a.qg && A.clearInterval(a.qg);
      else {
        a.fi++;
        var b = nb();
        Nz({
          event: a.eventName,
          "gtm.timerId": a.qg,
          "gtm.timerEventNumber": a.fi,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.limit,
          "gtm.timerStartTime": a.Lk,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Lk,
          "gtm.triggers": a.An,
        });
      }
    };
  }
  function VD(a, b) {
    return b;
  }
  VD.F = "internal.enableAutoEventOnTimer";
  var Vb = wa(["data-gtm-yt-inspected-"]),
    XD = ["www.youtube.com", "www.youtube-nocookie.com"],
    YD,
    ZD = !1;
  function iE(a, b) {
    var c = this;
    return b;
  }
  iE.F = "internal.enableAutoEventOnYouTubeActivity";
  function jE(a, b) {
    K(
      this.getName(),
      ["booleanExpression:!string", "context:?PixieMap"],
      arguments
    );
    var c = b ? I(b) : {},
      d = a,
      e = !1;
    return e;
  }
  jE.F = "internal.evaluateBooleanExpression";
  var kE;
  function lE(a) {
    var b = !1;
    return b;
  }
  lE.F = "internal.evaluateMatchingRules";
  function TE() {
    return mo(7) && mo(9) && mo(10);
  }
  function OF(a, b, c, d) {}
  OF.F = "internal.executeEventProcessor";
  function PF(a) {
    var b;
    return dd(b, this.D, 1);
  }
  PF.F = "internal.executeJavascriptString";
  function QF(a) {
    var b;
    return b;
  }
  function RF(a) {
    var b = {};
    return dd(b);
  }
  RF.F = "internal.getAdsCookieWritingOptions";
  function SF(a) {
    var b = !1;
    return b;
  }
  SF.F = "internal.getAllowAdPersonalization";
  function TF(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  TF.F = "internal.getAuid";
  var UF = null;
  function VF() {
    var a = new La();
    return a;
  }
  VF.T = "getContainerVersion";
  function WF(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  WF.T = "getCookieValues";
  function XF() {
    return nl();
  }
  XF.F = "internal.getCountryCode";
  function YF() {
    var a = [];
    return dd(a);
  }
  YF.F = "internal.getDestinationIds";
  function ZF(a) {
    var b = new La();
    return b;
  }
  ZF.F = "internal.getDeveloperIds";
  function $F(a, b) {
    var c = null;
    return c;
  }
  $F.F = "internal.getElementAttribute";
  function aG(a) {
    var b = null;
    return b;
  }
  aG.F = "internal.getElementById";
  function bG(a) {
    var b = "";
    return b;
  }
  bG.F = "internal.getElementInnerText";
  function cG(a, b) {
    var c = null;
    return c;
  }
  cG.F = "internal.getElementProperty";
  function dG(a) {
    var b;
    return b;
  }
  dG.F = "internal.getElementValue";
  function eG(a) {
    var b = 0;
    return b;
  }
  eG.F = "internal.getElementVisibilityRatio";
  function fG(a) {
    var b = null;
    return b;
  }
  fG.F = "internal.getElementsByCssSelector";
  function gG(a) {
    var b;
    K(this.getName(), ["keyPath:!string"], arguments);
    L(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = YA(this).originalEventData;
      if (e) {
        for (
          var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0;
          q < p.length;
          q++
        ) {
          for (var r = p[q].split("\\."), u = 0; u < r.length; u++) {
            for (var v = r[u].split("."), t = 0; t < v.length; t++)
              n.push(v[t]), t !== v.length - 1 && n.push(m);
            u !== r.length - 1 && n.push(k);
          }
          q !== p.length - 1 && n.push(g);
        }
        for (
          var w = [], x = "", y = l(n), B = y.next();
          !B.done;
          B = y.next()
        ) {
          var C = B.value;
          C === m
            ? (w.push(x), (x = ""))
            : (x = C === g ? x + "\\" : C === k ? x + "." : x + C);
        }
        x && w.push(x);
        for (var D = l(w), H = D.next(); !H.done; H = D.next()) {
          if (f == null) {
            c = void 0;
            break a;
          }
          f = f[H.value];
        }
        c = f;
      } else c = void 0;
    }
    b = dd(c, this.D, 1);
    return b;
  }
  gG.F = "internal.getEventData";
  var hG = {};
  hG.enableAWFledge = R(33);
  hG.enableAdsConversionValidation = R(17);
  hG.enableAdsSupernovaParams = R(29);
  hG.enableAutoPhoneAndAddressDetection = R(31);
  hG.enableAutoPiiOnPhoneAndAddress = R(32);
  hG.enableCachedEcommerceData = R(39);
  hG.enableCloudRecommentationsErrorLogging = R(40);
  hG.enableCloudRecommentationsSchemaIngestion = R(41);
  hG.enableCloudRetailInjectPurchaseMetadata = R(43);
  hG.enableCloudRetailLogging = R(42);
  hG.enableCloudRetailPageCategories = R(44);
  hG.enableConsentDisclosureActivity = R(46);
  hG.enableDCFledge = R(52);
  hG.enableDecodeUri = R(83);
  hG.enableDeferAllEnhancedMeasurement = R(53);
  hG.enableFormSkipValidation = R(78);
  hG.enableGa4OutboundClicksFix = R(86);
  hG.enableGaAdsConversions = R(105);
  hG.enableMerchantRenameForBasketData = R(100);
  hG.enableUrlDecodeEventUsage = R(123);
  hG.enableZoneConfigInChildContainers = R(126);
  hG.useEnableAutoEventOnFormApis = R(138);
  hG.autoPiiEligible = sl();
  function iG() {
    return dd(hG);
  }
  iG.F = "internal.getFlags";
  function jG() {
    return new ad(vA);
  }
  jG.F = "internal.getHtmlId";
  function kG(a) {
    var b;
    return b;
  }
  kG.F = "internal.getIframingState";
  function lG(a, b) {
    var c = {};
    return dd(c);
  }
  lG.F = "internal.getLinkerValueFromLocation";
  function mG() {
    var a = new La();
    return a;
  }
  mG.F = "internal.getPrivacyStrings";
  function nG(a, b) {
    var c;
    return c;
  }
  nG.F = "internal.getProductSettingsParameter";
  function oG(a, b) {
    var c;
    return c;
  }
  oG.T = "getQueryParameters";
  function pG(a, b) {
    var c;
    return c;
  }
  pG.T = "getReferrerQueryParameters";
  function qG(a) {
    var b = "";
    return b;
  }
  qG.T = "getReferrerUrl";
  function rG() {
    return ol();
  }
  rG.F = "internal.getRegionCode";
  function sG(a, b) {
    var c;
    return c;
  }
  sG.F = "internal.getRemoteConfigParameter";
  function tG() {
    var a = new La();
    a.set("width", 0);
    a.set("height", 0);
    return a;
  }
  tG.F = "internal.getScreenDimensions";
  function uG() {
    var a = "";
    return a;
  }
  uG.F = "internal.getTopSameDomainUrl";
  function vG() {
    var a = "";
    return a;
  }
  vG.F = "internal.getTopWindowUrl";
  function wG(a) {
    var b = "";
    return b;
  }
  wG.T = "getUrl";
  function xG() {
    L(this, "get_user_agent");
    return cc.userAgent;
  }
  xG.F = "internal.getUserAgent";
  function yG() {
    var a;
    return dd(a ? Bu(a) : null);
  }
  yG.F = "internal.getUserAgentClientHints";
  function GG() {
    return (A.gaGlobal = A.gaGlobal || {});
  }
  function HG() {
    var a = GG();
    a.hid = a.hid || cb();
    return a.hid;
  }
  function IG(a, b) {
    var c = GG();
    if (c.vid === void 0 || (b && !c.from_cookie))
      (c.vid = a), (c.from_cookie = b);
  }
  function dH(a) {
    if (Ut(a) || fj()) a.j[N.g.Gj] = ol() || nl();
    !Ut(a) && fj() && (a.j[N.g.Pj] = "::");
  }
  function eH(a) {
    if (R(79) && fj()) {
      ns(a);
      os(a, "cpf", ws(U(a.m, N.g.La)));
      var b = U(a.m, N.g.ic);
      os(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
      os(a, "cf", ws(U(a.m, N.g.cb)));
      os(a, "cd", fp(vs(U(a.m, N.g.Qa)), vs(U(a.m, N.g.xb))));
    }
  }
  var uH = function (a) {
      this.H = a;
      this.j = "";
    },
    vH = function (a, b) {
      a.C = b;
      return a;
    },
    wH = function (a, b) {
      b = a.j + b;
      for (var c = b.indexOf("\n\n"); c !== -1; ) {
        var d = a,
          e;
        a: {
          var f = l(b.substring(0, c).split("\n")),
            g = f.next().value,
            k = f.next().value;
          if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0)
            try {
              e = JSON.parse(k.substring(k.indexOf(":") + 1));
              break a;
            } catch (F) {}
          e = void 0;
        }
        var m = d,
          n = e;
        if (n) {
          var p = n.send_pixel,
            q = n.options,
            r = m.H;
          if (p) {
            var u = p || [];
            if (Array.isArray(u))
              for (
                var v = Qc(q) ? q : {}, t = l(u), w = t.next();
                !w.done;
                w = t.next()
              )
                r(w.value, v);
          }
          var x = n.create_iframe,
            y = n.options,
            B = m.C;
          if (x && B) {
            var C = x || [];
            if (Array.isArray(C))
              for (
                var D = Qc(y) ? y : {}, H = l(C), J = H.next();
                !J.done;
                J = H.next()
              )
                B(J.value, D);
          }
        }
        b = b.substring(c + 2);
        c = b.indexOf("\n\n");
      }
      a.j = b;
    };
  function xH(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  var kI = window,
    lI = document,
    mI = function (a) {
      var b = kI._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        lI.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && kI["ga-disable-" + a] === !0)
      )
        return !0;
      try {
        var c = kI.external;
        if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
      } catch (p) {}
      for (
        var d = [], e = String(lI.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var g = e[f].split("="),
          k = g[0].replace(/^\s*|\s*$/g, "");
        if (k && k == "AMP_TOKEN") {
          var m = g
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m);
        }
      }
      for (var n = 0; n < d.length; n++) if (d[n] == "$OPT_OUT") return !0;
      return lI.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function xI(a) {
    fb(a, function (c) {
      c.charAt(0) === "_" && delete a[c];
    });
    var b = a[N.g.nb] || {};
    fb(b, function (c) {
      c.charAt(0) === "_" && delete b[c];
    });
  }
  function cJ(a, b) {}
  function dJ(a, b) {
    var c = function () {};
    return c;
  }
  function eJ(a, b, c) {}
  var fJ = dJ;
  var gJ = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
  };
  function hJ(a, b, c) {
    var d = this;
    K(
      this.getName(),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments
    );
    var e = b ? I(b) : {};
    UA([
      function () {
        return L(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? I(c) : {},
      g = YA(this);
    f.originatingEntity = OB(g);
    My(Jy(a, e), g.eventId, f);
  }
  hJ.F = "internal.gtagConfig";
  function iJ() {
    var a = {};
    return a;
  }
  function kJ(a, b) {}
  kJ.T = "gtagSet";
  function lJ() {
    var a = {};
    return a;
  }
  function mJ(a, b) {}
  mJ.T = "injectHiddenIframe";
  var nJ = JA();
  function oJ(a, b, c, d, e) {
    var f = this;
  }
  oJ.F = "internal.injectHtml";
  var sJ = {};
  function uJ(a, b, c, d) {}
  var vJ = { dl: 1, id: 1 },
    wJ = {};
  function xJ(a, b, c, d) {}
  uJ.T = "injectScript";
  xJ.F = "internal.injectScript";
  function yJ(a) {
    var b = !0;
    return b;
  }
  yJ.T = "isConsentGranted";
  function zJ(a) {
    var b = !1;
    return b;
  }
  zJ.F = "internal.isDebugMode";
  function AJ() {
    return ql();
  }
  AJ.F = "internal.isDmaRegion";
  function BJ(a) {
    var b = !1;
    return b;
  }
  BJ.F = "internal.isEntityInfrastructure";
  function CJ() {
    var a = !1;
    return a;
  }
  CJ.F = "internal.isLandingPage";
  function DJ() {
    var a = Vg(function (b) {
      YA(this).log("error", b);
    });
    a.T = "JSON";
    return a;
  }
  function EJ(a) {
    var b = void 0;
    return dd(b);
  }
  EJ.F = "internal.legacyParseUrl";
  function FJ() {
    return !1;
  }
  var GJ = {
    getItem: function (a) {
      var b = null;
      return b;
    },
    setItem: function (a, b) {
      return !1;
    },
    removeItem: function (a) {},
  };
  function HJ() {
    try {
      L(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = I(a[b], this.D);
    console.log.apply(console, a);
  }
  HJ.T = "logToConsole";
  function IJ(a, b) {}
  IJ.F = "internal.mergeRemoteConfig";
  function JJ(a, b, c) {
    c = c === void 0 ? !0 : c;
    var d = [];
    return dd(d);
  }
  JJ.F = "internal.parseCookieValuesFromString";
  function KJ(a) {
    var b = void 0;
    return b;
  }
  KJ.T = "parseUrl";
  function LJ(a) {}
  LJ.F = "internal.processAsNewEvent";
  function MJ(a, b, c) {
    var d;
    return d;
  }
  MJ.F = "internal.pushToDataLayer";
  function NJ(a) {
    var b = !1;
    return b;
  }
  NJ.T = "queryPermission";
  function OJ() {
    var a = "";
    return a;
  }
  OJ.T = "readCharacterSet";
  function PJ() {
    return Ii.rb;
  }
  PJ.F = "internal.readDataLayerName";
  function QJ() {
    var a = "";
    return a;
  }
  QJ.T = "readTitle";
  function RJ(a, b) {
    var c = this;
  }
  RJ.F = "internal.registerCcdCallback";
  function SJ(a) {
    return !0;
  }
  SJ.F = "internal.registerDestination";
  var TJ = ["config", "event", "get", "set"];
  function UJ(a, b, c) {}
  UJ.F = "internal.registerGtagCommandListener";
  function VJ(a, b) {
    var c = !1;
    return c;
  }
  VJ.F = "internal.removeDataLayerEventListener";
  function WJ(a, b) {}
  WJ.F = "internal.removeFormData";
  function XJ() {}
  XJ.T = "resetDataLayer";
  function YJ(a, b, c) {
    var d = void 0;
    return d;
  }
  YJ.F = "internal.scrubUrlParams";
  function ZJ(a) {}
  ZJ.F = "internal.sendAdsHit";
  function $J(a, b, c, d) {}
  $J.F = "internal.sendGtagEvent";
  function aK(a, b, c) {}
  aK.T = "sendPixel";
  function bK(a, b) {}
  bK.F = "internal.setAnchorHref";
  function cK(a) {}
  cK.F = "internal.setContainerConsentDefaults";
  function dK(a, b, c, d) {
    var e = this;
    d = d === void 0 ? !0 : d;
    var f = !1;
    return f;
  }
  dK.T = "setCookie";
  function eK(a) {}
  eK.F = "internal.setCorePlatformServices";
  function fK(a, b) {}
  fK.F = "internal.setDataLayerValue";
  function gK(a) {}
  gK.T = "setDefaultConsentState";
  function hK(a, b) {}
  hK.F = "internal.setDelegatedConsentType";
  function iK(a, b) {}
  iK.F = "internal.setFormAction";
  function jK(a, b, c) {}
  jK.F = "internal.setInCrossContainerData";
  function kK(a, b, c) {
    return !1;
  }
  kK.T = "setInWindow";
  function lK(a, b, c) {}
  lK.F = "internal.setProductSettingsParameter";
  function mK(a, b, c) {}
  mK.F = "internal.setRemoteConfigParameter";
  function nK(a, b, c, d) {
    var e = this;
  }
  nK.T = "sha256";
  function oK(a, b, c) {}
  oK.F = "internal.sortRemoteConfigParameters";
  function pK(a, b) {
    var c = void 0;
    return c;
  }
  pK.F = "internal.subscribeToCrossContainerData";
  var qK = {},
    rK = {};
  qK.getItem = function (a) {
    var b = null;
    return b;
  };
  qK.setItem = function (a, b) {};
  qK.removeItem = function (a) {};
  qK.clear = function () {};
  qK.T = "templateStorage";
  function sK(a, b) {
    var c = !1;
    return c;
  }
  sK.F = "internal.testRegex";
  function tK(a) {
    var b;
    return b;
  }
  function uK(a) {
    var b;
    return b;
  }
  uK.F = "internal.unsiloId";
  function vK(a, b) {
    var c;
    return c;
  }
  vK.F = "internal.unsubscribeFromCrossContainerData";
  function wK(a) {}
  wK.T = "updateConsentState";
  var xK;
  function yK(a, b, c) {
    xK = xK || new fh();
    xK.add(a, b, c);
  }
  function zK(a, b) {
    var c = (xK = xK || new fh());
    if (c.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.contains(a))
      throw Error(
        "Attempting to add a private function with an existing API name: " +
          a +
          "."
      );
    c.j[a] = Za(b) ? Cg(a, b) : Dg(a, b);
  }
  function AK() {
    return function (a) {
      var b;
      var c = xK;
      if (c.contains(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.j.hasOwnProperty(a))) {
          var e = !1,
            f = this.D.j;
          if (f) {
            var g = f.ob();
            if (g) {
              g.indexOf("__cvt_") !== 0 && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  function BK() {
    var a = function (c) {
        return void zK(c.F, c);
      },
      b = function (c) {
        return void yK(c.T, c);
      };
    b(SA);
    b(ZA);
    b(mC);
    b(oC);
    b(pC);
    b(wC);
    b(yC);
    b(CC);
    b(DJ());
    b(EC);
    b(VF);
    b(WF);
    b(oG);
    b(pG);
    b(qG);
    b(wG);
    b(kJ);
    b(mJ);
    b(uJ);
    b(yJ);
    b(HJ);
    b(KJ);
    b(NJ);
    b(OJ);
    b(QJ);
    b(aK);
    b(dK);
    b(gK);
    b(kK);
    b(nK);
    b(qK);
    b(wK);
    yK("Math", Hg());
    yK("Object", dh);
    yK("TestHelper", hh());
    yK("assertApi", Eg);
    yK("assertThat", Fg);
    yK("decodeUri", Jg);
    yK("decodeUriComponent", Kg);
    yK("encodeUri", Lg);
    yK("encodeUriComponent", Mg);
    yK("fail", Rg);
    yK("generateRandom", Sg);
    yK("getTimestamp", Tg);
    yK("getTimestampMillis", Tg);
    yK("getType", Ug);
    yK("makeInteger", Wg);
    yK("makeNumber", Xg);
    yK("makeString", Yg);
    yK("makeTableMap", Zg);
    yK("mock", bh);
    yK("fromBase64", QF, !("atob" in A));
    yK("localStorage", GJ, !FJ());
    yK("toBase64", tK, !("btoa" in A));
    a(RA);
    a(VA);
    a(pB);
    a(BB);
    a(IB);
    a(NB);
    a(bC);
    a(kC);
    a(nC);
    a(qC);
    a(rC);
    a(sC);
    a(tC);
    a(uC);
    a(vC);
    a(xC);
    a(zC);
    a(BC);
    a(DC);
    a(FC);
    a(HC);
    a(IC);
    a(JC);
    a(KC);
    a(LC);
    a(PC);
    a(XC);
    a(YC);
    a(iD);
    a(nD);
    a(sD);
    a(BD);
    a(GD);
    a(TD);
    a(VD);
    a(iE);
    a(jE);
    a(lE);
    a(OF);
    a(PF);
    a(RF);
    a(SF);
    a(TF);
    a(XF);
    a(YF);
    a(ZF);
    a($F);
    a(aG);
    a(bG);
    a(cG);
    a(dG);
    a(eG);
    a(fG);
    a(gG);
    a(iG);
    a(jG);
    a(kG);
    a(lG);
    a(mG);
    a(nG);
    a(rG);
    a(sG);
    a(tG);
    a(uG);
    a(vG);
    a(yG);
    a(hJ);
    a(oJ);
    a(xJ);
    a(zJ);
    a(AJ);
    a(BJ);
    a(CJ);
    a(EJ);
    a($B);
    a(IJ);
    a(JJ);
    a(LJ);
    a(MJ);
    a(PJ);
    a(RJ);
    a(SJ);
    a(UJ);
    a(VJ);
    a(WJ);
    a(YJ);
    a(ZJ);
    a($J);
    a(bK);
    a(cK);
    a(eK);
    a(fK);
    a(hK);
    a(iK);
    a(jK);
    a(lK);
    a(mK);
    a(oK);
    a(pK);
    a(sK);
    a(uK);
    a(vK);
    zK("internal.CrossContainerSchema", GC());
    zK("internal.GtagSchema", iJ());
    zK("internal.IframingStateSchema", lJ());
    yK("mockObject", ch);
    return AK();
  }
  var PA;
  function CK() {
    PA.j.j.H = function (a, b, c) {
      Ji.SANDBOXED_JS_SEMAPHORE = Ji.SANDBOXED_JS_SEMAPHORE || 0;
      Ji.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        Ji.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function DK(a) {
    a &&
      fb(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          Zi[e] = Zi[e] || [];
          Zi[e].push(b);
        }
      });
  }
  function EK(a) {
    My(Hy("developer_id." + a, !0), 0, {});
  }
  var FK = Array.isArray;
  function GK(a, b) {
    return Rc(a, b || null);
  }
  function W(a) {
    return window.encodeURIComponent(a);
  }
  function HK(a, b, c) {
    qc(a, b, c);
  }
  function IK(a, b) {
    if (!a) return !1;
    var c = yj(Ej(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        f > 0 && e.charAt(0) !== "." && (f--, (e = "." + e));
        if (f >= 0 && c.indexOf(e, f) === f) return !0;
      }
    }
    return !1;
  }
  function JK(a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  }
  var SK = A.clearTimeout,
    TK = A.setTimeout;
  function UK(a, b, c) {
    if (Lo()) {
      b && G(b);
    } else return lc(a, b, c);
  }
  function VK() {
    return A.location.href;
  }
  function WK(a, b) {
    return lj(a, b || 2);
  }
  function XK(a, b) {
    A[a] = b;
  }
  function YK(a, b, c) {
    b && (A[a] === void 0 || (c && !A[a])) && (A[a] = b);
    return A[a];
  }
  function ZK(a, b) {
    if (Lo()) {
      b && G(b);
    } else oc(a, b);
  }
  var $K = {};
  var X = { securityGroups: {} };
  (X.securityGroups.f = ["google"]),
    (X.__f = function (a) {
      var b = WK("gtm.referrer", 1) || E.referrer;
      return b
        ? a.vtp_component && a.vtp_component != "URL"
          ? yj(
              Ej(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : Bj(Ej(String(b)))
        : String(b);
    }),
    (X.__f.o = "f"),
    (X.__f.isVendorTemplate = !0),
    (X.__f.priorityOverride = 0),
    (X.__f.isInfrastructure = !0),
    (X.__f.runInSiloedMode = !1);

  (X.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        X.__access_globals = b;
        X.__access_globals.o = "access_globals";
        X.__access_globals.isVendorTemplate = !0;
        X.__access_globals.priorityOverride = 0;
        X.__access_globals.isInfrastructure = !1;
        X.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            k = 0;
          k < c.length;
          k++
        ) {
          var m = c[k],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!z(r)) throw d(p, {}, "Key must be a string.");
            if (q === "read") {
              if (e.indexOf(r) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(r) > -1) return;
            } else if (q === "readwrite") {
              if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return;
            } else if (q === "execute") {
              if (g.indexOf(r) > -1) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          M: a,
        };
      });
    })();
  (X.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        X.__u = b;
        X.__u.o = "u";
        X.__u.isVendorTemplate = !0;
        X.__u.priorityOverride = 0;
        X.__u.isInfrastructure = !0;
        X.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : WK("gtm.url", 1)) || VK();
        var d = b[a("vtp_component")];
        if (!d || d == "URL") return Bj(Ej(String(c)));
        var e = Ej(String(c)),
          f;
        if (d === "QUERY")
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(k)
                ? k
                : String(k).replace(/\s+/g, "").split(",")
              : [String(k)];
            for (var p = 0; p < n.length; p++) {
              var q = yj(e, "QUERY", void 0, void 0, n[p]);
              if (q != void 0 && (!m || q !== "")) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = yj(
            e,
            d,
            d == "HOST" ? b[a("vtp_stripWww")] : void 0,
            d == "PATH" ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();

  (X.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        X.__read_event_data = b;
        X.__read_event_data.o = "read_event_data";
        X.__read_event_data.isVendorTemplate = !0;
        X.__read_event_data.priorityOverride = 0;
        X.__read_event_data.isInfrastructure = !1;
        X.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (g != null && !z(g))
              throw e(f, { key: g }, "Key must be a string.");
            if (c !== "any") {
              try {
                if (c === "specific" && g != null && gg(g, d)) return;
              } catch (k) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          M: a,
        };
      });
    })();

  (X.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        X.__load_google_tags = b;
        X.__load_google_tags.o = "load_google_tags";
        X.__load_google_tags.isVendorTemplate = !0;
        X.__load_google_tags.priorityOverride = 0;
        X.__load_google_tags.isInfrastructure = !1;
        X.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          k = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!z(q)) throw k(m, {}, "Tag ID must be a string.");
              if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1))
                throw k(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (q !== void 0) {
                if (!z(q)) throw k(m, {}, "First party URL must be a string.");
                if (d) {
                  if (e === "any") return;
                  if (e === "specific")
                    try {
                      if (xg(Ej(q), f)) return;
                    } catch (r) {
                      throw k(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw k(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          M: a,
        };
      });
    })();

  (X.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        X.__logging = b;
        X.__logging.o = "logging";
        X.__logging.isVendorTemplate = !0;
        X.__logging.priorityOverride = 0;
        X.__logging.isInfrastructure = !1;
        X.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = c !== "all" && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          M: a,
        };
      });
    })();

  (X.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        X.__configure_google_tags = b;
        X.__configure_google_tags.o = "configure_google_tags";
        X.__configure_google_tags.isVendorTemplate = !0;
        X.__configure_google_tags.priorityOverride = 0;
        X.__configure_google_tags.isInfrastructure = !1;
        X.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "Tag ID must be a string.");
            if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          M: a,
        };
      });
    })();

  var aL = {
    dataLayer: mj,
    callback: function (a) {
      Yi.hasOwnProperty(a) && Za(Yi[a]) && Yi[a]();
      delete Yi[a];
    },
    bootstrap: 0,
    _spx: !1,
  };
  function bL() {
    Ji[lk()] = Ji[lk()] || aL;
    vk();
    zk() ||
      fb(Ak(), function (d, e) {
        yx(d, e.transportUrl, e.context);
        T(92);
      });
    qb(Zi, X.securityGroups);
    var a = pk(qk()),
      b,
      c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
    (c !== 2 && c !== 4 && c !== 3) || T(142);
    pf = Gf;
  }
  var cL = !1;
  (function (a) {
    function b() {
      n = E.documentElement.getAttribute("data-tag-assistant-present");
      Xz(n) && (m = k.Kj);
    }
    function c() {
      m && fc ? g(m) : a();
    }
    if (!A["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (E.referrer) {
        var e = Ej(E.referrer);
        d = Aj(e, "host") === "cct.google";
      }
      if (!d) {
        var f = Qo("googTaggyReferrer");
        d = !(!f.length || !f[0].length);
      }
      d &&
        ((A["__TAGGY_INSTALLED"] = !0),
        lc("https://cct.google/taggy/agent.js"));
    }
    var g = function (v) {
        var t = "GTM",
          w = "GTM";
        Pi && ((t = "OGT"), (w = "GTAG"));
        var x = A["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (A["google.tagmanager.debugui2.queue"] = x),
          lc(
            "https://" +
              Ii.Bf +
              "/debug/bootstrap?id=" +
              Mf.ctid +
              "&src=" +
              w +
              "&cond=" +
              v +
              "&gtm=" +
              No()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: fc,
            containerProduct: t,
            debug: !1,
            id: Mf.ctid,
            targetRef: { ctid: Mf.ctid, isDestination: fk() },
            aliases: ik(),
            destinations: gk(),
          },
        };
        y.data.resume = function () {
          a();
        };
        Ii.Wk && (y.data.initialPublish = !0);
        x.push(y);
      },
      k = { yl: 1, Mj: 2, bk: 3, Mi: 4, Kj: 5 };
    k[k.yl] = "GTM_DEBUG_LEGACY_PARAM";
    k[k.Mj] = "GTM_DEBUG_PARAM";
    k[k.bk] = "REFERRER";
    k[k.Mi] = "COOKIE";
    k[k.Kj] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = yj(A.location, "query", !1, void 0, "gtm_debug");
    Xz(p) && (m = k.Mj);
    if (!m && E.referrer) {
      var q = Ej(E.referrer);
      Aj(q, "host") === "tagassistant.google.com" && (m = k.bk);
    }
    if (!m) {
      var r = Qo("__TAG_ASSISTANT");
      r.length && r[0].length && (m = k.Mi);
    }
    m || b();
    if (!m && Yz(n)) {
      var u = !1;
      rc(
        E,
        "TADebugSignal",
        function () {
          u || ((u = !0), b(), c());
        },
        !1
      );
      A.setTimeout(function () {
        u || ((u = !0), b(), c());
      }, 200);
    } else c();
  })(function () {
    try {
      var a;
      if (!(a = cL)) {
        var b;
        a: {
          for (var c = Zj(), d = l(hk()), e = d.next(); !e.done; e = d.next())
            if (c.injectedFirstPartyContainers[e.value]) {
              b = !0;
              break a;
            }
          b = !1;
        }
        a = !b;
      }
      if (a) {
        tk();
        if (R(91)) {
        }
        Wh[9] = !0;
        fk();
        if (!Hl) {
          Hl = !0;
          for (var f = Il.length - 1; f >= 0; f--) Il[f]();
          Il = [];
        }
        fo();
        Rl();
        var g = nk();
        if (Zj().canonical[g]) {
          var k = Ji.zones;
          k && k.unregisterChild(hk());
          jx().removeExternalRestrictions(nk());
        } else {
          var m = cj.aa,
            n = Hi.En;
          m.j = new Set();
          if (n !== "")
            for (var p = l(n.split("~")), q = p.next(); !q.done; q = p.next()) {
              var r = Number(q.value);
              isNaN(r) || m.j.add(r);
            }
          cj.H = "";
          cj.Ta =
            "ad_storage|analytics_storage|ad_user_data|ad_personalization";
          cj.P = "ad_storage|analytics_storage|ad_user_data";
          cj.K = "4bj0";
          cj.K = "4cc0";
          ux();
          for (
            var u = data.resource || {}, v = u.macros || [], t = 0;
            t < v.length;
            t++
          )
            ef.push(v[t]);
          for (var w = u.tags || [], x = 0; x < w.length; x++) hf.push(w[x]);
          for (var y = u.predicates || [], B = 0; B < y.length; B++)
            gf.push(y[B]);
          for (var C = u.rules || [], D = 0; D < C.length; D++) {
            for (var H = C[D], J = {}, F = 0; F < H.length; F++) {
              var S = H[F][0];
              J[S] = Array.prototype.slice.call(H[F], 1);
              (S !== "if" && S !== "unless") || of(J[S]);
            }
            ff.push(J);
          }
          kf = X;
          lf = DA;
          If = new Pf();
          var M = data.sandboxed_scripts,
            Z = data.security_groups;
          a: {
            var ca = data.runtime || [],
              da = data.runtime_lines;
            PA = new ze();
            CK();
            df = OA();
            var Y = PA,
              Q = BK(),
              oa = new Wc("require", Q);
            oa.Ga();
            Y.j.j.set("require", oa);
            for (var na = [], ea = 0; ea < ca.length; ea++) {
              var ua = ca[ea];
              if (!Array.isArray(ua) || ua.length < 3) {
                if (ua.length === 0) continue;
                break a;
              }
              da && da[ea] && da[ea].length && zf(ua, da[ea]);
              try {
                PA.execute(ua), R(104) && Sj && ua[0] === 50 && na.push(ua[1]);
              } catch (oo) {}
            }
            R(104) && (qf = na);
          }
          if (M && M.length)
            for (var Ra = ["sandboxedScripts"], Aa = 0; Aa < M.length; Aa++) {
              var Sa = M[Aa].replace(/^_*/, "");
              Zi[Sa] = Ra;
            }
          DK(Z);
          bL();
          if (!Ti)
            for (
              var kb = ql() ? gj(cj.P) : gj(cj.Ta), mc = 0;
              mc < ul.length;
              mc++
            ) {
              var ge = ul[mc],
                Dh = ge,
                dL = kb[ge] ? "granted" : "denied";
              Qk().implicit(Dh, dL);
            }
          Wz();
          zx = !1;
          Ax = 0;
          if (
            (E.readyState === "interactive" && !E.createEventObject) ||
            E.readyState === "complete"
          )
            Cx();
          else {
            rc(E, "DOMContentLoaded", Cx);
            rc(E, "readystatechange", Cx);
            if (E.createEventObject && E.documentElement.doScroll) {
              var Py = !0;
              try {
                Py = !A.frameElement;
              } catch (oo) {}
              Py && Dx();
            }
            rc(A, "load", Cx);
          }
          Bz = !1;
          E.readyState === "complete" ? Dz() : rc(A, "load", Dz);
          Sj &&
            (Fm(Sm),
            A.setInterval(Rm, 864e5),
            Fm(GA),
            Fm(cy),
            Fm(Iv),
            Fm(Vm),
            Fm(LA),
            Fm(ny),
            R(104) && (Fm(hy), Fm(iy), Fm(jy)));
          if (Tj) {
            Pk();
            lm();
            var Qy,
              Ry = Ej(A.location.href);
            (Qy = Ry.hostname + Ry.pathname) &&
              Hk("dl", encodeURIComponent(Qy));
            var po;
            var Sy = Mf.ctid;
            if (Sy) {
              var fL = ck.Ge ? 1 : 0,
                Fh,
                Ty = pk(qk());
              Fh = Ty && Ty.context;
              po =
                Sy +
                ";" +
                Mf.canonicalContainerId +
                ";" +
                (Fh && Fh.fromContainerExecution ? 1 : 0) +
                ";" +
                ((Fh && Fh.source) || 0) +
                ";" +
                fL;
            } else po = void 0;
            var Uy = po;
            Uy && Hk("tdp", Uy);
            var Vy = Mn(!0);
            Vy !== void 0 && Hk("frm", String(Vy));
            var qo;
            var Gh = pk(qk());
            if (Gh) {
              for (; Gh.parent; ) {
                var Wy = pk(Gh.parent);
                if (!Wy) break;
                Gh = Wy;
              }
              qo = Gh;
            } else qo = void 0;
            var Re = qo;
            if (!Re) T(144);
            else if (R(55) || Re.canonicalContainerId) {
              var ro;
              a: {
                var Xy,
                  Yy = (Xy = Re.scriptElement) == null ? void 0 : Xy.src;
                if (Yy) {
                  var so;
                  try {
                    var Zy;
                    so =
                      (Zy = Fc()) == null
                        ? void 0
                        : Zy.getEntriesByType("resource");
                  } catch (oo) {}
                  if (so) {
                    for (
                      var $y = -1, az = l(so), to = az.next();
                      !to.done;
                      to = az.next()
                    ) {
                      var bz = to.value;
                      if (bz.initiatorType === "script") {
                        $y += 1;
                        var uo = bz.name,
                          vo = Yy;
                        R(54) &&
                          ((uo = uo.replace(Zz, "")),
                          (vo = vo.replace(Zz, "")));
                        if (uo === vo) {
                          ro = $y;
                          break a;
                        }
                      }
                    }
                    T(146);
                  } else T(145);
                }
                ro = void 0;
              }
              var cz = ro;
              cz !== void 0 &&
                (Re.canonicalContainerId &&
                  Hk("rtg", String(Re.canonicalContainerId)),
                Hk("slo", String(cz)),
                Hk("hlo", Re.htmlLoadOrder || "-1"),
                Hk("lst", String(Re.loadScriptType || "0")));
            }
            var ek;
            var Hh = ok();
            if (Hh)
              if (Hh.canonicalContainerId) ek = Hh.canonicalContainerId;
              else {
                var dz,
                  ez =
                    Hh.scriptContainerId ||
                    ((dz = Hh.destinations) == null ? void 0 : dz[0]);
                ek = ez ? "_" + ez : void 0;
              }
            else ek = void 0;
            var fz = ek;
            fz && Hk("pcid", fz);
            R(38) &&
              (Hk("bt", String(cj.C ? 2 : Ri ? 1 : 0)),
              Hk("ct", String(cj.C ? 0 : Ri ? 1 : Lo() ? 2 : 3)));
          }
          tA();
          ll(1);
          YB();
          Xi = nb();
          aL.bootstrap = Xi;
          if (R(91)) {
          }
          R(118) &&
            (typeof A.name === "string" &&
            sb(A.name, "web-pixel-sandbox-CUSTOM") &&
            Gc()
              ? EK("dMDg0Yz")
              : A.Shopify && Gc() && EK("dNTU0Yz"));
        }
      }
    } catch (oo) {
      if ((ll(4), Sj)) {
        var gL = Mm(!0, !0);
        qc(gL);
      }
    }
  });
})();
