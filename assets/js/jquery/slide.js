/* jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.3",
        m = function(a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = "length" in a && a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            aa = /[+~]/,
            ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            da = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ea = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: oa(function() {
                    return [0]
                }),
                last: oa(function(a, b) {
                    return [b - 1]
                }),
                eq: oa(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function qa() {}
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                    return a === b
                }, h, !0), l = sa(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                    }
                    m.push(c)
                }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = va(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return m.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function(b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && m.each(arguments, function(a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function(a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return
                }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function() {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) m.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(m(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='http://demo.roadthemes.com/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function aa() {
        return !0
    }

    function ba() {
        return !1
    }

    function ca() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ca() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ca() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function da(a) {
        var b = ea.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fa = / jQuery\d+="(?:null|\d+)"/g,
        ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"),
        ha = /^\s+/,
        ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ja = /<([\w:]+)/,
        ka = /<tbody/i,
        la = /<|&#?\w+;/,
        ma = /<(?:script|style|link)/i,
        na = /checked\s*(?:[^=]|=\s*.checked.)/i,
        oa = /^$|\/(?:java|ecma)script/i,
        pa = /^true\/(.*)/,
        qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ra = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sa = da(y),
        ta = sa.appendChild(y.createElement("div"));
    ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;

    function ua(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function va(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wa(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xa(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function ya(a) {
        var b = pa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function za(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Aa(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Ba(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g) d[g] && Ba(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) Aa(e, d[g]);
                else Aa(a, f);
            return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (la.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
                    e = 0;
                    while (f = h[e++]) oa.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ua(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
                if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ia, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ca, Da = {};

    function Ea(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fa(a) {
        var b = y,
            c = Da[a];
        return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c
    }! function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Ga = /^margin/,
        Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ia, Ja, Ka = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ia = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }, Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ia = function(a) {
        return a.currentStyle
    }, Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function La(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='http://demo.roadthemes.com/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(), g
                },
                boxSizingReliable: function() {
                    return null == f && i(), f
                },
                pixelPosition: function() {
                    return null == e && i(), e
                },
                reliableMarginRight: function() {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Ma = /alpha\([^)]*\)/i,
        Na = /opacity\s*=\s*([^)]*)/,
        Oa = /^(none|table(?!-c[ea]).+)/,
        Pa = new RegExp("^(" + S + ")(.*)$", "i"),
        Qa = new RegExp("^([+-])=(" + S + ")", "i"),
        Ra = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sa = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ta = ["Webkit", "O", "Moz", "ms"];

    function Ua(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Ta.length;
        while (e--)
            if (b = Ta[e] + c, b in a) return b;
        return d
    }

    function Va(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wa(a, b, c) {
        var d = Pa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Ya(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ia(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ja(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function() {
                    return Ya(a, b, d)
                }) : Ya(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ia(a);
                return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = La(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Ja, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ga.test(a) || (m.cssHooks[a + b].set = Wa)
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ia(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Va(this, !0)
        },
        hide: function() {
            return Va(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Za(a, b, c, d, e) {
        return new Za.prototype.init(a, b, c, d, e)
    }
    m.Tween = Za, Za.prototype = {
        constructor: Za,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Za.propHooks[this.prop];
            return a && a.get ? a.get(this) : Za.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Za.propHooks[this.prop];
            return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this
        }
    }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Za.prototype.init, m.fx.step = {};
    var $a, _a, ab = /^(?:toggle|show|hide)$/,
        bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cb = /queueHooks$/,
        db = [ib],
        eb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bb.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fb() {
        return setTimeout(function() {
            $a = void 0
        }), $a = m.now()
    }

    function gb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hb(a, b, c) {
        for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ib(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ab.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() {
                m(a).hide()
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kb(a, b, c) {
        var d, e, f = 0,
            g = db.length,
            h = m.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $a || fb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jb(k, j.opts.specialEasing); g > f; f++)
            if (d = db[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kb, {
            tweener: function(a, b) {
                m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? db.unshift(a) : db.push(a)
            }
        }), m.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
            return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
            }, d
        }, m.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function() {
                        var b = kb(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function(a, b) {
            var c = m.fn[b];
            m.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
            }
        }), m.each({
            slideDown: gb("show"),
            slideUp: gb("hide"),
            slideToggle: gb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            m.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), m.timers = [], m.fx.tick = function() {
            var a, b = m.timers,
                c = 0;
            for ($a = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $a = void 0
        }, m.fx.timer = function(a) {
            m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
        }, m.fx.interval = 13, m.fx.start = function() {
            _a || (_a = setInterval(m.fx.tick, m.fx.interval))
        }, m.fx.stop = function() {
            clearInterval(_a), _a = null
        }, m.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, m.fn.delay = function(a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='http://demo.roadthemes.com/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lb = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mb, nb, ob = m.expr.attrHandle,
        pb = /^(?:checked|selected)$/i,
        qb = k.getSetAttribute,
        rb = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nb = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ob[b] || m.find.attr;
        ob[b] = rb && qb || !pb.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rb && qb || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mb && mb.set(a, b, c)
        }
    }), qb || (mb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, ob.id = ob.name = ob.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mb.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mb.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sb = /^(?:input|select|textarea|button|object)$/i,
        tb = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var ub = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vb = m.now(),
        wb = /\?/,
        xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yb, zb, Ab = /#.*$/,
        Bb = /([?&])_=[^&]*/,
        Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Eb = /^(?:GET|HEAD)$/,
        Fb = /^\/\//,
        Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hb = {},
        Ib = {},
        Jb = "*/".concat("*");
    try {
        zb = location.href
    } catch (Kb) {
        zb = y.createElement("a"), zb.href = "", zb = zb.href
    }
    yb = Gb.exec(zb.toLowerCase()) || [];

    function Lb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mb(a, b, c, d) {
        var e = {},
            f = a === Ib;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nb(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Ob(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zb,
            type: "GET",
            isLocal: Db.test(yb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lb(Hb),
        ajaxTransport: Lb(Ib),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cb.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t) return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Mb(Ib, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            } : function() {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    };
    var Qb = /%20/g,
        Rb = /\[\]$/,
        Sb = /\r?\n/g,
        Tb = /^(?:submit|button|image|reset|file)$/i,
        Ub = /^(?:input|select|textarea|keygen)/i;

    function Vb(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) {
            c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vb(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Vb(c, a[c], b, e);
        return d.join("&").replace(Qb, "+")
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sb, "\r\n")
                }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b()
    } : Zb;
    var Wb = 0,
        Xb = {},
        Yb = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Xb) Xb[a](void 0, !0)
    }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Wb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zb() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function $b() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _b = [],
        ac = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _b.pop() || m.expando + "_" + vb++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bc = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bc) return bc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    };
    var cc = a.document.documentElement;

    function dc(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cc;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cc
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = La(k.pixelPosition, function(a, c) {
            return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ec = a.jQuery,
        fc = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});
jQuery.noConflict();;
/* jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
    function(e, t, n) {
        function r(n) {
            var r = t.console;
            i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
        }

        function a(t, a, i, o) {
            if (Object.defineProperty) try {
                return Object.defineProperty(t, a, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return r(o), i
                    },
                    set: function(e) {
                        r(o), i = e
                    }
                }), n
            } catch (s) {}
            e._definePropertyBroken = !0, t[a] = i
        }
        var i = {};
        e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
            i = {}, e.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
        var o = e("<input/>", {
                size: 1
            }).attr("size") && e.attrFn,
            s = e.attr,
            u = e.attrHooks.value && e.attrHooks.value.get || function() {
                return null
            },
            c = e.attrHooks.value && e.attrHooks.value.set || function() {
                return n
            },
            l = /^(?:input|button)$/i,
            d = /^[238]$/,
            p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            f = /^(?:checked|selected)$/i;
        a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
            var c = a.toLowerCase(),
                g = t && t.nodeType;
            return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
                get: function(t, r) {
                    var a, i = e.prop(t, r);
                    return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
                },
                set: function(t, n, r) {
                    var a;
                    return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
                }
            }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
        }, e.attrHooks.value = {
            get: function(e, t) {
                var n = (e.nodeName || "").toLowerCase();
                return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
            },
            set: function(e, t) {
                var a = (e.nodeName || "").toLowerCase();
                return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
            }
        };
        var g, h, v = e.fn.init,
            m = e.parseJSON,
            y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        e.fn.init = function(t, n, a) {
            var i;
            return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
        }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
            return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
        }, e.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
            function t(e, n) {
                return new t.fn.init(e, n)
            }
            e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) {
                return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
            }, t.fn.init.prototype = t.fn;
            var n = t(document);
            return r("jQuery.sub() is deprecated"), t
        }, e.ajaxSetup({
            converters: {
                "text json": e.parseJSON
            }
        });
        var b = e.fn.data;
        e.fn.data = function(t) {
            var a, i, o = this[0];
            return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
        };
        var j = /\/(java|ecma)script/i,
            w = e.fn.andSelf || e.fn.addBack;
        e.fn.andSelf = function() {
            return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
        }, e.clean || (e.clean = function(t, a, i, o) {
            a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
            var s, u, c, l, d = [];
            if (e.merge(d, e.buildFragment(t, a).childNodes), i)
                for (c = function(e) {
                        return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
                    }, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
            return d
        });
        var Q = e.event.add,
            x = e.event.remove,
            k = e.event.trigger,
            N = e.fn.toggle,
            T = e.fn.live,
            M = e.fn.die,
            S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            C = RegExp("\\b(?:" + S + ")\\b"),
            H = /(?:^|\s)hover(\.\S+|)\b/,
            A = function(t) {
                return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
            };
        e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) {
            e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
        }, e.event.remove = function(e, t, n, r, a) {
            x.call(this, e, A(t) || "", n, r, a)
        }, e.fn.error = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
        }, e.fn.toggle = function(t, n) {
            if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
            r("jQuery.fn.toggle(handler, handler...) is deprecated");
            var a = arguments,
                i = t.guid || e.guid++,
                o = 0,
                s = function(n) {
                    var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
                    return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
                };
            for (s.guid = i; a.length > o;) a[o++].guid = i;
            return this.click(s)
        }, e.fn.live = function(t, n, a) {
            return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
        }, e.fn.die = function(t, n) {
            return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
        }, e.event.trigger = function(e, t, n, a) {
            return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
        }, e.each(S.split("|"), function(t, n) {
            e.event.special[n] = {
                setup: function() {
                    var t = this;
                    return t !== document && (e.event.add(document, n + "." + e.guid, function() {
                        e.event.trigger(n, null, t, !0)
                    }), e._data(this, n, e.guid++)), !1
                },
                teardown: function() {
                    return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
                }
            }
        })
    }(jQuery, window);;
(function(a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(f) {
    var p = "left",
        o = "right",
        e = "up",
        x = "down",
        c = "in",
        z = "out",
        m = "none",
        s = "auto",
        l = "swipe",
        t = "pinch",
        A = "tap",
        j = "doubletap",
        b = "longtap",
        y = "hold",
        D = "horizontal",
        u = "vertical",
        i = "all",
        r = 10,
        g = "start",
        k = "move",
        h = "end",
        q = "cancel",
        a = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        B = "TouchSwipe";
    var n = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe",
        preventDefaultEvents: true
    };
    f.fn.swipe = function(G) {
        var F = f(this),
            E = F.data(B);
        if (E && typeof G === "string") {
            if (E[G]) {
                return E[G].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                f.error("Method " + G + " does not exist on jQuery.swipe")
            }
        } else {
            if (!E && (typeof G === "object" || !G)) {
                return w.apply(this, arguments)
            }
        }
        return F
    };
    f.fn.swipe.defaults = n;
    f.fn.swipe.phases = {
        PHASE_START: g,
        PHASE_MOVE: k,
        PHASE_END: h,
        PHASE_CANCEL: q
    };
    f.fn.swipe.directions = {
        LEFT: p,
        RIGHT: o,
        UP: e,
        DOWN: x,
        IN: c,
        OUT: z
    };
    f.fn.swipe.pageScroll = {
        NONE: m,
        HORIZONTAL: D,
        VERTICAL: u,
        AUTO: s
    };
    f.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: i
    };

    function w(E) {
        if (E && (E.allowPageScroll === undefined && (E.swipe !== undefined || E.swipeStatus !== undefined))) {
            E.allowPageScroll = m
        }
        if (E.click !== undefined && E.tap === undefined) {
            E.tap = E.click
        }
        if (!E) {
            E = {}
        }
        E = f.extend({}, f.fn.swipe.defaults, E);
        return this.each(function() {
            var G = f(this);
            var F = G.data(B);
            if (!F) {
                F = new C(this, E);
                G.data(B, F)
            }
        })
    }

    function C(a4, av) {
        var az = (a || d || !av.fallbackToMouseEvents),
            J = az ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            ay = az ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            U = az ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
            S = az ? null : "mouseleave",
            aD = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var ag = 0,
            aP = null,
            ab = 0,
            a1 = 0,
            aZ = 0,
            G = 1,
            aq = 0,
            aJ = 0,
            M = null;
        var aR = f(a4);
        var Z = "start";
        var W = 0;
        var aQ = null;
        var T = 0,
            a2 = 0,
            a5 = 0,
            ad = 0,
            N = 0;
        var aW = null,
            af = null;
        try {
            aR.bind(J, aN);
            aR.bind(aD, a9)
        } catch (ak) {
            f.error("events not supported " + J + "," + aD + " on jQuery.swipe")
        }
        this.enable = function() {
            aR.bind(J, aN);
            aR.bind(aD, a9);
            return aR
        };
        this.disable = function() {
            aK();
            return aR
        };
        this.destroy = function() {
            aK();
            aR.data(B, null);
            aR = null
        };
        this.option = function(bc, bb) {
            if (av[bc] !== undefined) {
                if (bb === undefined) {
                    return av[bc]
                } else {
                    av[bc] = bb
                }
            } else {
                f.error("Option " + bc + " does not exist on jQuery.swipe.options")
            }
            return null
        };

        function aN(bd) {
            if (aB()) {
                return
            }
            if (f(bd.target).closest(av.excludedElements, aR).length > 0) {
                return
            }
            var be = bd.originalEvent ? bd.originalEvent : bd;
            var bc, bb = a ? be.touches[0] : be;
            Z = g;
            if (a) {
                W = be.touches.length
            } else {
                bd.preventDefault()
            }
            ag = 0;
            aP = null;
            aJ = null;
            ab = 0;
            a1 = 0;
            aZ = 0;
            G = 1;
            aq = 0;
            aQ = aj();
            M = aa();
            R();
            if (!a || (W === av.fingers || av.fingers === i) || aX()) {
                ai(0, bb);
                T = at();
                if (W == 2) {
                    ai(1, be.touches[1]);
                    a1 = aZ = au(aQ[0].start, aQ[1].start)
                }
                if (av.swipeStatus || av.pinchStatus) {
                    bc = O(be, Z)
                }
            } else {
                bc = false
            }
            if (bc === false) {
                Z = q;
                O(be, Z);
                return bc
            } else {
                if (av.hold) {
                    af = setTimeout(f.proxy(function() {
                        aR.trigger("hold", [be.target]);
                        if (av.hold) {
                            bc = av.hold.call(aR, be, be.target)
                        }
                    }, this), av.longTapThreshold)
                }
                ao(true)
            }
            return null
        }

        function a3(be) {
            var bh = be.originalEvent ? be.originalEvent : be;
            if (Z === h || Z === q || am()) {
                return
            }
            var bd, bc = a ? bh.touches[0] : bh;
            var bf = aH(bc);
            a2 = at();
            if (a) {
                W = bh.touches.length
            }
            if (av.hold) {
                clearTimeout(af)
            }
            Z = k;
            if (W == 2) {
                if (a1 == 0) {
                    ai(1, bh.touches[1]);
                    a1 = aZ = au(aQ[0].start, aQ[1].start)
                } else {
                    aH(bh.touches[1]);
                    aZ = au(aQ[0].end, aQ[1].end);
                    aJ = ar(aQ[0].end, aQ[1].end)
                }
                G = a7(a1, aZ);
                aq = Math.abs(a1 - aZ)
            }
            if ((W === av.fingers || av.fingers === i) || !a || aX()) {
                aP = aL(bf.start, bf.end);
                al(be, aP);
                ag = aS(bf.start, bf.end);
                ab = aM();
                aI(aP, ag);
                if (av.swipeStatus || av.pinchStatus) {
                    bd = O(bh, Z)
                }
                if (!av.triggerOnTouchEnd || av.triggerOnTouchLeave) {
                    var bb = true;
                    if (av.triggerOnTouchLeave) {
                        var bg = aY(this);
                        bb = E(bf.end, bg)
                    }
                    if (!av.triggerOnTouchEnd && bb) {
                        Z = aC(k)
                    } else {
                        if (av.triggerOnTouchLeave && !bb) {
                            Z = aC(h)
                        }
                    }
                    if (Z == q || Z == h) {
                        O(bh, Z)
                    }
                }
            } else {
                Z = q;
                O(bh, Z)
            }
            if (bd === false) {
                Z = q;
                O(bh, Z)
            }
        }

        function L(bb) {
            var bc = bb.originalEvent;
            if (a) {
                if (bc.touches.length > 0) {
                    F();
                    return true
                }
            }
            if (am()) {
                W = ad
            }
            a2 = at();
            ab = aM();
            if (ba() || !an()) {
                Z = q;
                O(bc, Z)
            } else {
                if (av.triggerOnTouchEnd || (av.triggerOnTouchEnd == false && Z === k)) {
                    bb.preventDefault();
                    Z = h;
                    O(bc, Z)
                } else {
                    if (!av.triggerOnTouchEnd && a6()) {
                        Z = h;
                        aF(bc, Z, A)
                    } else {
                        if (Z === k) {
                            Z = q;
                            O(bc, Z)
                        }
                    }
                }
            }
            ao(false);
            return null
        }

        function a9() {
            W = 0;
            a2 = 0;
            T = 0;
            a1 = 0;
            aZ = 0;
            G = 1;
            R();
            ao(false)
        }

        function K(bb) {
            var bc = bb.originalEvent;
            if (av.triggerOnTouchLeave) {
                Z = aC(h);
                O(bc, Z)
            }
        }

        function aK() {
            aR.unbind(J, aN);
            aR.unbind(aD, a9);
            aR.unbind(ay, a3);
            aR.unbind(U, L);
            if (S) {
                aR.unbind(S, K)
            }
            ao(false)
        }

        function aC(bf) {
            var be = bf;
            var bd = aA();
            var bc = an();
            var bb = ba();
            if (!bd || bb) {
                be = q
            } else {
                if (bc && bf == k && (!av.triggerOnTouchEnd || av.triggerOnTouchLeave)) {
                    be = h
                } else {
                    if (!bc && bf == h && av.triggerOnTouchLeave) {
                        be = q
                    }
                }
            }
            return be
        }

        function O(bd, bb) {
            var bc = undefined;
            if ((I() || V()) || (P() || aX())) {
                if (I() || V()) {
                    bc = aF(bd, bb, l)
                }
                if ((P() || aX()) && bc !== false) {
                    bc = aF(bd, bb, t)
                }
            } else {
                if (aG() && bc !== false) {
                    bc = aF(bd, bb, j)
                } else {
                    if (ap() && bc !== false) {
                        bc = aF(bd, bb, b)
                    } else {
                        if (ah() && bc !== false) {
                            bc = aF(bd, bb, A)
                        }
                    }
                }
            }
            if (bb === q) {
                a9(bd)
            }
            if (bb === h) {
                if (a) {
                    if (bd.touches.length == 0) {
                        a9(bd)
                    }
                } else {
                    a9(bd)
                }
            }
            return bc
        }

        function aF(be, bb, bd) {
            var bc = undefined;
            if (bd == l) {
                aR.trigger("swipeStatus", [bb, aP || null, ag || 0, ab || 0, W, aQ]);
                if (av.swipeStatus) {
                    bc = av.swipeStatus.call(aR, be, bb, aP || null, ag || 0, ab || 0, W, aQ);
                    if (bc === false) {
                        return false
                    }
                }
                if (bb == h && aV()) {
                    aR.trigger("swipe", [aP, ag, ab, W, aQ]);
                    if (av.swipe) {
                        bc = av.swipe.call(aR, be, aP, ag, ab, W, aQ);
                        if (bc === false) {
                            return false
                        }
                    }
                    switch (aP) {
                        case p:
                            aR.trigger("swipeLeft", [aP, ag, ab, W, aQ]);
                            if (av.swipeLeft) {
                                bc = av.swipeLeft.call(aR, be, aP, ag, ab, W, aQ)
                            }
                            break;
                        case o:
                            aR.trigger("swipeRight", [aP, ag, ab, W, aQ]);
                            if (av.swipeRight) {
                                bc = av.swipeRight.call(aR, be, aP, ag, ab, W, aQ)
                            }
                            break;
                        case e:
                            aR.trigger("swipeUp", [aP, ag, ab, W, aQ]);
                            if (av.swipeUp) {
                                bc = av.swipeUp.call(aR, be, aP, ag, ab, W, aQ)
                            }
                            break;
                        case x:
                            aR.trigger("swipeDown", [aP, ag, ab, W, aQ]);
                            if (av.swipeDown) {
                                bc = av.swipeDown.call(aR, be, aP, ag, ab, W, aQ)
                            }
                            break
                    }
                }
            }
            if (bd == t) {
                aR.trigger("pinchStatus", [bb, aJ || null, aq || 0, ab || 0, W, G, aQ]);
                if (av.pinchStatus) {
                    bc = av.pinchStatus.call(aR, be, bb, aJ || null, aq || 0, ab || 0, W, G, aQ);
                    if (bc === false) {
                        return false
                    }
                }
                if (bb == h && a8()) {
                    switch (aJ) {
                        case c:
                            aR.trigger("pinchIn", [aJ || null, aq || 0, ab || 0, W, G, aQ]);
                            if (av.pinchIn) {
                                bc = av.pinchIn.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ)
                            }
                            break;
                        case z:
                            aR.trigger("pinchOut", [aJ || null, aq || 0, ab || 0, W, G, aQ]);
                            if (av.pinchOut) {
                                bc = av.pinchOut.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ)
                            }
                            break
                    }
                }
            }
            if (bd == A) {
                if (bb === q || bb === h) {
                    clearTimeout(aW);
                    clearTimeout(af);
                    if (Y() && !H()) {
                        N = at();
                        aW = setTimeout(f.proxy(function() {
                            N = null;
                            aR.trigger("tap", [be.target]);
                            if (av.tap) {
                                bc = av.tap.call(aR, be, be.target)
                            }
                        }, this), av.doubleTapThreshold)
                    } else {
                        N = null;
                        aR.trigger("tap", [be.target]);
                        if (av.tap) {
                            bc = av.tap.call(aR, be, be.target)
                        }
                    }
                }
            } else {
                if (bd == j) {
                    if (bb === q || bb === h) {
                        clearTimeout(aW);
                        N = null;
                        aR.trigger("doubletap", [be.target]);
                        if (av.doubleTap) {
                            bc = av.doubleTap.call(aR, be, be.target)
                        }
                    }
                } else {
                    if (bd == b) {
                        if (bb === q || bb === h) {
                            clearTimeout(aW);
                            N = null;
                            aR.trigger("longtap", [be.target]);
                            if (av.longTap) {
                                bc = av.longTap.call(aR, be, be.target)
                            }
                        }
                    }
                }
            }
            return bc
        }

        function an() {
            var bb = true;
            if (av.threshold !== null) {
                bb = ag >= av.threshold
            }
            return bb
        }

        function ba() {
            var bb = false;
            if (av.cancelThreshold !== null && aP !== null) {
                bb = (aT(aP) - ag) >= av.cancelThreshold
            }
            return bb
        }

        function ae() {
            if (av.pinchThreshold !== null) {
                return aq >= av.pinchThreshold
            }
            return true
        }

        function aA() {
            var bb;
            if (av.maxTimeThreshold) {
                if (ab >= av.maxTimeThreshold) {
                    bb = false
                } else {
                    bb = true
                }
            } else {
                bb = true
            }
            return bb
        }

        function al(bb, bc) {
            if (av.preventDefaultEvents === false) {
                return
            }
            if (av.allowPageScroll === m) {
                bb.preventDefault()
            } else {
                var bd = av.allowPageScroll === s;
                switch (bc) {
                    case p:
                        if ((av.swipeLeft && bd) || (!bd && av.allowPageScroll != D)) {
                            bb.preventDefault()
                        }
                        break;
                    case o:
                        if ((av.swipeRight && bd) || (!bd && av.allowPageScroll != D)) {
                            bb.preventDefault()
                        }
                        break;
                    case e:
                        if ((av.swipeUp && bd) || (!bd && av.allowPageScroll != u)) {
                            bb.preventDefault()
                        }
                        break;
                    case x:
                        if ((av.swipeDown && bd) || (!bd && av.allowPageScroll != u)) {
                            bb.preventDefault()
                        }
                        break
                }
            }
        }

        function a8() {
            var bc = aO();
            var bb = X();
            var bd = ae();
            return bc && bb && bd
        }

        function aX() {
            return !!(av.pinchStatus || av.pinchIn || av.pinchOut)
        }

        function P() {
            return !!(a8() && aX())
        }

        function aV() {
            var be = aA();
            var bg = an();
            var bd = aO();
            var bb = X();
            var bc = ba();
            var bf = !bc && bb && bd && bg && be;
            return bf
        }

        function V() {
            return !!(av.swipe || av.swipeStatus || av.swipeLeft || av.swipeRight || av.swipeUp || av.swipeDown)
        }

        function I() {
            return !!(aV() && V())
        }

        function aO() {
            return ((W === av.fingers || av.fingers === i) || !a)
        }

        function X() {
            return aQ[0].end.x !== 0
        }

        function a6() {
            return !!(av.tap)
        }

        function Y() {
            return !!(av.doubleTap)
        }

        function aU() {
            return !!(av.longTap)
        }

        function Q() {
            if (N == null) {
                return false
            }
            var bb = at();
            return (Y() && ((bb - N) <= av.doubleTapThreshold))
        }

        function H() {
            return Q()
        }

        function ax() {
            return ((W === 1 || !a) && (isNaN(ag) || ag < av.threshold))
        }

        function a0() {
            return ((ab > av.longTapThreshold) && (ag < r))
        }

        function ah() {
            return !!(ax() && a6())
        }

        function aG() {
            return !!(Q() && Y())
        }

        function ap() {
            return !!(a0() && aU())
        }

        function F() {
            a5 = at();
            ad = event.touches.length + 1
        }

        function R() {
            a5 = 0;
            ad = 0
        }

        function am() {
            var bb = false;
            if (a5) {
                var bc = at() - a5;
                if (bc <= av.fingerReleaseThreshold) {
                    bb = true
                }
            }
            return bb
        }

        function aB() {
            return !!(aR.data(B + "_intouch") === true)
        }

        function ao(bb) {
            if (bb === true) {
                aR.bind(ay, a3);
                aR.bind(U, L);
                if (S) {
                    aR.bind(S, K)
                }
            } else {
                aR.unbind(ay, a3, false);
                aR.unbind(U, L, false);
                if (S) {
                    aR.unbind(S, K, false)
                }
            }
            aR.data(B + "_intouch", bb === true)
        }

        function ai(bc, bb) {
            var bd = bb.identifier !== undefined ? bb.identifier : 0;
            aQ[bc].identifier = bd;
            aQ[bc].start.x = aQ[bc].end.x = bb.pageX || bb.clientX;
            aQ[bc].start.y = aQ[bc].end.y = bb.pageY || bb.clientY;
            return aQ[bc]
        }

        function aH(bb) {
            var bd = bb.identifier !== undefined ? bb.identifier : 0;
            var bc = ac(bd);
            bc.end.x = bb.pageX || bb.clientX;
            bc.end.y = bb.pageY || bb.clientY;
            return bc
        }

        function ac(bc) {
            for (var bb = 0; bb < aQ.length; bb++) {
                if (aQ[bb].identifier == bc) {
                    return aQ[bb]
                }
            }
        }

        function aj() {
            var bb = [];
            for (var bc = 0; bc <= 5; bc++) {
                bb.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                })
            }
            return bb
        }

        function aI(bb, bc) {
            bc = Math.max(bc, aT(bb));
            M[bb].distance = bc
        }

        function aT(bb) {
            if (M[bb]) {
                return M[bb].distance
            }
            return undefined
        }

        function aa() {
            var bb = {};
            bb[p] = aw(p);
            bb[o] = aw(o);
            bb[e] = aw(e);
            bb[x] = aw(x);
            return bb
        }

        function aw(bb) {
            return {
                direction: bb,
                distance: 0
            }
        }

        function aM() {
            return a2 - T
        }

        function au(be, bd) {
            var bc = Math.abs(be.x - bd.x);
            var bb = Math.abs(be.y - bd.y);
            return Math.round(Math.sqrt(bc * bc + bb * bb))
        }

        function a7(bb, bc) {
            var bd = (bc / bb) * 1;
            return bd.toFixed(2)
        }

        function ar() {
            if (G < 1) {
                return z
            } else {
                return c
            }
        }

        function aS(bc, bb) {
            return Math.round(Math.sqrt(Math.pow(bb.x - bc.x, 2) + Math.pow(bb.y - bc.y, 2)))
        }

        function aE(be, bc) {
            var bb = be.x - bc.x;
            var bg = bc.y - be.y;
            var bd = Math.atan2(bg, bb);
            var bf = Math.round(bd * 180 / Math.PI);
            if (bf < 0) {
                bf = 360 - Math.abs(bf)
            }
            return bf
        }

        function aL(bc, bb) {
            var bd = aE(bc, bb);
            if ((bd <= 45) && (bd >= 0)) {
                return p
            } else {
                if ((bd <= 360) && (bd >= 315)) {
                    return p
                } else {
                    if ((bd >= 135) && (bd <= 225)) {
                        return o
                    } else {
                        if ((bd > 45) && (bd < 135)) {
                            return x
                        } else {
                            return e
                        }
                    }
                }
            }
        }

        function at() {
            var bb = new Date();
            return bb.getTime()
        }

        function aY(bb) {
            bb = f(bb);
            var bd = bb.offset();
            var bc = {
                left: bd.left,
                right: bd.left + bb.outerWidth(),
                top: bd.top,
                bottom: bd.top + bb.outerHeight()
            };
            return bc
        }

        function E(bb, bc) {
            return (bb.x > bc.left && bb.x < bc.right && bb.y > bc.top && bb.y < bc.bottom)
        }
    }
}));
if (typeof(console) === 'undefined') {
    var console = {}
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}
if (window.tplogs == true)
    try {
        console.groupCollapsed("ThemePunch GreenSocks Logs");
    } catch (e) {}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (window.tplogs == true)
    try {
        console.info("Build GreenSock SandBox for ThemePunch Plugins");
        console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
    } catch (e) {}
    /*
     * VERSION: 1.16.0
     * DATE: 2015-03-01
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     *
     * @author: Jack Doyle, jack@greensock.com
     */
    (function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var s, r, n, a, o, l = function(t) {
                    var e, s = t.split("."),
                        r = i;
                    for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
                    return r
                },
                h = l("com.greensock"),
                _ = 1e-10,
                u = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                m = function() {},
                f = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                c = {},
                p = function(s, r, n, a) {
                    this.sc = c[s] ? c[s].sc : [], c[s] = this, this.gsClass = null, this.func = n;
                    var o = [];
                    this.check = function(h) {
                        for (var _, u, m, f, d = r.length, v = d; --d > -1;)(_ = c[r[d]] || new p(r[d], [])).gsClass ? (o[d] = _.gsClass, v--) : h && _.sc.push(this);
                        if (0 === v && n)
                            for (u = ("com.greensock." + s).split("."), m = u.pop(), f = l(u.join("."))[m] = this.gsClass = n.apply(n, o), a && (i[m] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                    return f
                                }) : s === e && "undefined" != typeof module && module.exports && (module.exports = f)), d = 0; this.sc.length > d; d++) this.sc[d].check()
                    }, this.check(!0)
                },
                d = t._gsDefine = function(t, e, i, s) {
                    return new p(t, e, i, s)
                },
                v = h._class = function(t, e, i) {
                    return e = e || function() {}, d(t, [], function() {
                        return e
                    }, i), e
                };
            d.globals = i;
            var g = [0, 0, 1, 1],
                T = [],
                y = v("http://demo.roadthemes.com/maroko/wp-content/cache/minify/000000/easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? g.concat(e) : g
                }, !0),
                w = y.map = {},
                P = y.register = function(t, e, i, s) {
                    for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                        for (n = l[_], r = s ? v("easing." + n, null, !0) : h.easing[n] || {}, a = u.length; --a > -1;) o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for (n = y.prototype, n._calcEnd = !1, n.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) n = s[r] + ",Power" + r, P(new y(null, null, 1, r), n, "easeOut", !0), P(new y(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), P(new y(null, null, 3, r), n, "easeInOut");
            w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
            var b = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            n = b.prototype, n.addEventListener = function(t, e, i, s, r) {
                r = r || 0;
                var n, l, h = this._listeners[t],
                    _ = 0;
                for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) n = h[l], n.c === e && n.s === i ? h.splice(l, 1) : 0 === _ && r > n.pr && (_ = l + 1);
                h.splice(_, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: r
                }), this !== a || o || a.wake()
            }, n.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return s.splice(i, 1), void 0
            }, n.dispatchEvent = function(t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s && (s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i))
            };
            var k = t.requestAnimationFrame,
                S = t.cancelAnimationFrame,
                A = Date.now || function() {
                    return (new Date).getTime()
                },
                x = A();
            for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !k;) k = t[s[r] + "RequestAnimationFrame"], S = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, s, r, n, l, h = this,
                    u = A(),
                    f = e !== !1 && k,
                    c = 500,
                    p = 33,
                    d = "tick",
                    v = function(t) {
                        var e, a, o = A() - x;
                        o > c && (u += o - p), x += o, h.time = (x - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(v)), a && h.dispatchEvent(d)
                    };
                b.call(h), h.time = h.frame = 0, h.tick = function() {
                    v(!0)
                }, h.lagSmoothing = function(t, e) {
                    c = t || 1 / _, p = Math.min(e, c, 0)
                }, h.sleep = function() {
                    null != r && (f && S ? S(r) : clearTimeout(r), s = m, r = null, h === a && (o = !1))
                }, h.wake = function() {
                    null !== r ? h.sleep() : h.frame > 10 && (x = A() - c + 5), s = 0 === i ? m : f && k ? k : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                    }, h === a && (o = !0), v(2)
                }, h.fps = function(t) {
                    return arguments.length ? (i = t, n = 1 / (i || 60), l = this.time + n, h.wake(), void 0) : i
                }, h.useRAF = function(t) {
                    return arguments.length ? (h.sleep(), f = t, h.fps(i), void 0) : f
                }, h.fps(t), setTimeout(function() {
                    f && (!r || 5 > h.frame) && h.useRAF(!1)
                }, 1500)
            }), n = h.Ticker.prototype = new h.events.EventDispatcher, n.constructor = h.Ticker;
            var R = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                    o || a.wake();
                    var i = this.vars.useFrames ? q : B;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = R.ticker = new h.Ticker, n = R.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
            var C = function() {
                o && A() - x > 2e3 && a.wake(), setTimeout(C, 2e3)
            };
            C(), n.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, n.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, n.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, n.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, n.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, n.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, n.render = function() {}, n.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, n.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, n._enabled = function(t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, n._kill = function() {
                return this._enabled(!1, !1)
            }, n.kill = function(t, e) {
                return this._kill(t, e), this
            }, n._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, n._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, n.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, n.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, n.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, n.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, n.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, n.totalTime = function(t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            r = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), z.length && $())
                }
                return this
            }, n.progress = n.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, n.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, n.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, n.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, n.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, n.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, s = this._timeline;
                return t != this._paused && s && (o || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
            };
            var D = v("core.SimpleTimeline", function(t) {
                R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            n = D.prototype = new R, n.constructor = D, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, n._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, n.render = function(t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
            }, n.rawTime = function() {
                return o || a.wake(), this._totalTime
            };
            var I = v("TweenLite", function(e, i, s) {
                    if (R.call(this, i, s), this.render = I.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : I.selector(e) || e;
                    var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? Q[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = K(n, this, !1), 1 === l && this._siblings[r].length > 1 && J(n, this, null, 1, this._siblings[r])) : (n = a[r--] = I.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = K(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
                }, !0),
                E = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                O = function(t, e) {
                    var i, s = {};
                    for (i in t) G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            n = I.prototype = new R, n.constructor = I, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, I.version = "1.16.0", I.defaultEase = n._ease = new y(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = a, I.autoSleep = 120, I.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }, I.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (I.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var z = [],
                L = {},
                N = I._internals = {
                    isArray: f,
                    isSelector: E,
                    lazyTweens: z
                },
                U = I._plugins = {},
                F = N.tweenLookup = {},
                j = 0,
                G = N.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1
                },
                Q = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                q = R._rootFramesTimeline = new D,
                B = R._rootTimeline = new D,
                M = 30,
                $ = N.lazyRender = function() {
                    var t, e = z.length;
                    for (L = {}; --e > -1;) t = z[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    z.length = 0
                };
            B._startTime = a.time, q._startTime = a.frame, B._active = q._active = !0, setTimeout($, 1), R._updateRoot = I.render = function() {
                var t, e, i;
                if (z.length && $(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), z.length && $(), a.frame >= M) {
                    M = a.frame + (parseInt(I.autoSleep, 10) || 120);
                    for (i in F) {
                        for (e = F[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete F[i]
                    }
                    if (i = B._first, (!i || i._paused) && I.autoSleep && !q._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", R._updateRoot);
            var K = function(t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (F[n || (t._gsTweenID = n = "t" + j++)] || (F[n] = {
                            target: t,
                            tweens: []
                        }), e && (s = F[n].tweens, s[r = s.length] = e, i))
                        for (; --r > -1;) s[r] === e && s.splice(r, 1);
                    return F[n].tweens
                },
                H = function(t, e, i, s) {
                    var r, n, a = t.vars.onOverwrite;
                    return a && (r = a(t, e, i, s)), a = I.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1
                },
                J = function(t, e, i, s, r) {
                    var n, a, o, l;
                    if (1 === s || s >= 4) {
                        for (l = r.length, n = 0; l > n; n++)
                            if ((o = r[n]) !== e) o._gc || H(o, e) && o._enabled(!1, !1) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var h, u = e._startTime + _,
                        m = [],
                        f = 0,
                        c = 0 === e._duration;
                    for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || V(e, 0, c), 0 === V(o, h, c) && (m[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((c || !o._initted) && 2e-10 >= u - o._startTime || (m[f++] = o)));
                    for (n = f; --n > -1;)
                        if (o = m[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                            if (2 !== s && !H(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                V = function(t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
                };
            n._init = function() {
                var t, e, i, s, r, n = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    l = !!n.immediateRender,
                    h = n.ease;
                if (n.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (s in n.startAt) r[s] = n.startAt[s];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = I.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (n.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (s in n) G[s] && "autoCSS" !== s || (i[s] = n[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && n.lazy !== !1, i.immediateRender = l, this._startAt = I.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, n.easeParams) : w[h] || I.defaultEase : I.defaultEase, n.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0
            }, n._initProps = function(e, i, s, r) {
                var n, a, o, l, h, _;
                if (null == e) return !1;
                L[e._gsTweenID] && $(), this.vars.css || e.style && e !== t && e.nodeType && U.css && this.vars.autoCSS !== !1 && O(this.vars, e);
                for (n in this.vars) {
                    if (_ = this.vars[n], G[n]) _ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (U[n] && (l = new U[n])._onInitTween(e, this.vars[n], this)) {
                        for (this._firstPT = h = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: n,
                                pg: !0,
                                pr: l._priority
                            }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[n] = h = {
                        _next: this._firstPT,
                        t: e,
                        p: n,
                        f: "function" == typeof e[n],
                        n: n,
                        pg: !1,
                        pr: 0
                    }, h.s = h.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0;
                    h && h._next && (h._next._prev = h)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && J(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), o)
            }, n.render = function(t, e, i) {
                var s, r, n, a, o = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === _ && "isPause" !== this.data) && h !== t && (i = !0, h > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        m = this._easeType,
                        f = this._easePower;
                    (1 === m || 3 === m && u >= .5) && (u = 1 - u), 3 === m && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === m ? 1 - u : 2 === m ? u : .5 > t / l ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, z.push(this), this._lazy = [t, e], void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || T))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || T)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || T), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
                }
            }, n._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
                var s, r, n, a, o, l, h, _, u;
                if ((f(e) || E(e)) && "number" != typeof e[0])
                    for (s = e.length; --s > -1;) this._kill(t, e[s]) && (l = !0);
                else {
                    if (this._targets) {
                        for (s = this._targets.length; --s > -1;)
                            if (e === this._targets[s]) {
                                o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) {
                        if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (I.onOverwrite || this.vars.onOverwrite)) {
                            for (n in h) o[n] && (u || (u = []), u.push(n));
                            if (!H(this, i, e, u)) return !1
                        }
                        for (n in h)(a = o[n]) && (a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, n.invalidate = function() {
                return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this
            }, n._enabled = function(t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = K(s[i], this, !0);
                    else this._siblings = K(this.target, this, !0)
                }
                return R.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? I._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, I.to = function(t, e, i) {
                return new I(t, e, i)
            }, I.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i)
            }, I.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new I(t, e, s)
            }, I.delayedCall = function(t, e, i, s, r) {
                return new I(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: s,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, I.set = function(t, e) {
                return new I(t, 0, e)
            }, I.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : I.selector(t) || t;
                var i, s, r, n;
                if ((f(t) || E(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(I.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
                } else
                    for (s = K(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = I.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
            };
            var W = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = W.prototype
            }, !0);
            if (n = W.prototype, W.version = "1.10.1", W.API = 2, n._firstPT = null, n._addTween = function(t, e, i, s, r, n) {
                    var a, o;
                    return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: a,
                        f: "function" == typeof t[e],
                        n: r || e,
                        r: n
                    }, o._next && (o._next._prev = o), o) : void 0
                }, n.setRatio = function(t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, n._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, n._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, I._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, W.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === W.API && (U[(new t[e])._propName] = t[e]);
                    return !0
                }, d.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            W.call(this, i, s), this._overwriteProps = r || []
                        }, t.global === !0),
                        o = a.prototype = new W(i);
                    o.constructor = a, a.API = t.API;
                    for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, W.activate([a]), a
                }, s = t._gsQueue) {
                for (r = 0; s.length > r; r++) s[r]();
                for (n in c) c[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
            }
            o = !1
        }
    })("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
/*
 * VERSION: 1.16.0
 * DATE: 2015-03-01
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var s = function(t) {
                    e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, s, r = this.vars;
                    for (s in r) i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                    h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                },
                r = 1e-10,
                n = i._internals,
                a = s._internals = {},
                o = n.isSelector,
                h = n.isArray,
                l = n.lazyTweens,
                _ = n.lazyRender,
                u = [],
                f = _gsScope._gsDefine.globals,
                p = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                c = a.pauseCallback = function(t, e, i, s) {
                    var n, a = t._timeline,
                        o = a._totalTime,
                        h = t._startTime,
                        l = t.ratio ? r : 0,
                        _ = t.ratio ? 0 : r;
                    if (e || !this._forcingPlayhead) {
                        for (a.pause(h), n = t._prev; n && n._startTime === h;) n._rawPrevTime = _, n = n._prev;
                        for (n = t._next; n && n._startTime === h;) n._rawPrevTime = l, n = n._next;
                        e && e.apply(s || a, i || u), this._forcingPlayhead && a.seek(o)
                    }
                },
                m = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                d = s.prototype = new e;
            return s.version = "1.16.0", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function(t, e, s, r) {
                var n = s.repeat && f.TweenMax || i;
                return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
            }, d.from = function(t, e, s, r) {
                return this.add((s.repeat && f.TweenMax || i).from(t, e, s), r)
            }, d.fromTo = function(t, e, s, r, n) {
                var a = r.repeat && f.TweenMax || i;
                return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
            }, d.staggerTo = function(t, e, r, n, a, h, l, _) {
                var u, f = new s({
                    onComplete: h,
                    onCompleteParams: l,
                    onCompleteScope: _,
                    smoothChildTiming: this.smoothChildTiming
                });
                for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = p(r.startAt)), f.to(t[u], e, p(r), u * n);
                return this.add(f, a)
            }, d.staggerFrom = function(t, e, i, s, r, n, a, o) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
            }, d.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
            }, d.call = function(t, e, s, r) {
                return this.add(i.delayedCall(0, t, e, s), r)
            }, d.set = function(t, e, s) {
                return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
            }, s.exportRoot = function(t, e) {
                t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                var r, n, a = new s(t),
                    o = a._timeline;
                for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                return o.add(a, 0), a
            }, d.add = function(r, n, a, o) {
                var l, _, u, f, p, c;
                if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                    if (r instanceof Array || r && r.push && h(r)) {
                        for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) h(f = r[u]) && (f = new s({
                            tweens: f
                        })), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === a ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), l += o;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof r) return this.addLabel(r, n);
                    if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                    r = i.delayedCall(0, r)
                }
                if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (p = this, c = p.rawTime() > r._startTime; p._timeline;) c && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                return this
            }, d.remove = function(e) {
                if (e instanceof t) return this._remove(e, !1);
                if (e instanceof Array || e && e.push && h(e)) {
                    for (var i = e.length; --i > -1;) this.remove(e[i]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, d._remove = function(t, i) {
                e.prototype._remove.call(this, t, i);
                var s = this._last;
                return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, d.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, d.insert = d.insertMultiple = function(t, e, i, s) {
                return this.add(t, e || 0, i, s)
            }, d.appendMultiple = function(t, e, i, s) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
            }, d.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, d.addPause = function(t, e, s, r) {
                var n = i.delayedCall(0, c, ["{self}", e, s, r], this);
                return n.data = "isPause", this.add(n, t)
            }, d.removeLabel = function(t) {
                return delete this._labels[t], this
            }, d.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, d._parseTimeOrLabel = function(e, i, s, r) {
                var n;
                if (r instanceof t && r.timeline === this) this.remove(r);
                else if (r && (r instanceof Array || r.push && h(r)))
                    for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                else {
                    if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                }
                return Number(e) + i
            }, d.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
            }, d.stop = function() {
                return this.paused(!0)
            }, d.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, d.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, d.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, n, a, o, h, f = this._dirty ? this.totalDuration() : this._totalDuration,
                    p = this._time,
                    c = this._startTime,
                    m = this._timeScale,
                    d = this._paused;
                if (t >= f) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = f + 1e-4;
                else if (1e-7 > t)
                    if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                        t = 0, this._initted || (h = !0)
                    }
                else this._totalTime = this._time = this._rawPrevTime = t;
                if (this._time !== p && this._first || i || h) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= p)
                        for (s = this._first; s && (a = s._next, !this._paused || d);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    else
                        for (s = this._last; s && (a = s._prev, !this._paused || d);)(s._active || p >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    this._onUpdate && (e || (l.length && _(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u))), o && (this._gc || (c === this._startTime || m !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || u)))
                }
            }, d._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, d.getChildren = function(t, e, s, r) {
                r = r || -9999999999;
                for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                return n
            }, d.getTweensOf = function(t, e) {
                var s, r, n = this._gc,
                    a = [],
                    o = 0;
                for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                return n && this._enabled(!1, !0), a
            }, d.recent = function() {
                return this._recent
            }, d._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, d.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                if (e)
                    for (s in n) n[s] >= i && (n[s] += t);
                return this._uncache(!0)
            }, d._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                return r
            }, d.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                return t !== !1 && (this._labels = {}), this._uncache(!0)
            }, d.invalidate = function() {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, d._enabled = function(t, i) {
                if (t === this._gc)
                    for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                return e.prototype._enabled.call(this, t, i)
            }, d.totalTime = function() {
                this._forcingPlayhead = !0;
                var e = t.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, e
            }, d.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, d.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                        this._duration = this._totalDuration = s, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
            }, d.paused = function(e) {
                if (!e)
                    for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = s), i = i._next;
                return t.prototype.paused.apply(this, arguments)
            }, d.usesFrames = function() {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === t._rootFramesTimeline
            }, d.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, s
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e())
    }("TimelineLite");
/*
 /*!
 * VERSION: beta 1.15.2
 * DATE: 2015-01-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("http://demo.roadthemes.com/maroko/wp-content/cache/minify/000000/easing.Back", ["http://demo.roadthemes.com/maroko/wp-content/cache/minify/000000/easing.Ease"], function(t) {
        var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
            n = r.com.greensock,
            a = 2 * Math.PI,
            o = Math.PI / 2,
            h = n._class,
            l = function(e, i) {
                var s = h("easing." + e, function() {}, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, s
            },
            _ = t.register || function() {},
            u = function(t, e, i, s) {
                var r = h("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new s
                }, !0);
                return _(r, t), r
            },
            c = function(t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            },
            f = function(e, i) {
                var s = h("easing." + e, function(t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, r.config = function(t) {
                    return new s(t)
                }, s
            },
            p = u("Back", f("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), f("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), f("BackInOut", function(t) {
                return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })),
            m = h("easing.SlowMo", function(t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0),
            d = m.prototype = new t;
        return d.constructor = m, d.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
            return new m(t, e, i)
        }, e = h("easing.SteppedEase", function(t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, d.config = e.config = function(t) {
            return new e(t)
        }, i = h("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, p = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = p ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), p ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                x: i,
                y: s
            };
            for (l.sort(function(t, e) {
                    return t.x - e.x
                }), o = new c(1, 1, null), f = u; --f > -1;) a = l[f], o = new c(a.x, a.y, o);
            this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
        }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, d.config = function(t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", l("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), s = function(e, i, s) {
            var r = h("easing." + e, function(t, e) {
                    this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                }, !0),
                n = r.prototype = new t;
            return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                return new r(t, e)
            }, r
        }, u("Elastic", s("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), s("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
        }, .3), s("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
        }, .45)), u("Expo", l("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", l("SineOut", function(t) {
            return Math.sin(t * o)
        }), l("SineIn", function(t) {
            return -Math.cos(t * o) + 1
        }), l("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), h("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), p
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
/*
 * VERSION: 1.16.0
 * DATE: 2015-03-01
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, r, s, n, a = function() {
                    t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                },
                o = _gsScope._gsDefine.globals,
                l = {},
                h = a.prototype = new t("css");
            h.constructor = a, a.version = "1.16.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", h = "px", a.suffixMap = {
                top: h,
                right: h,
                bottom: h,
                left: h,
                width: h,
                height: h,
                fontSize: h,
                padding: h,
                margin: h,
                perspective: h,
                lineHeight: ""
            };
            var u, f, p, c, _, d, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                x = /(?:\d|\-|\+|=|#|\.)*/g,
                T = /opacity *= *([^)]*)/i,
                w = /opacity:([^;]*)/i,
                b = /alpha\(opacity *=.+?\)/i,
                P = /^(rgb|hsl)/,
                S = /([A-Z])/g,
                C = /-([a-z])/gi,
                O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                k = function(t, e) {
                    return e.toUpperCase()
                },
                R = /(?:Left|Right|Width)/i,
                A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                M = /,(?=[^\)]*(?:\(|$))/gi,
                N = Math.PI / 180,
                L = 180 / Math.PI,
                X = {},
                z = document,
                F = function(t) {
                    return z.createElementNS ? z.createElementNS("http://www.w3.org/1999/xhtml", t) : z.createElement(t)
                },
                I = F("div"),
                E = F("img"),
                Y = a._internals = {
                    _specialProps: l
                },
                B = navigator.userAgent,
                U = function() {
                    var t = B.indexOf("Android"),
                        e = F("a");
                    return p = -1 !== B.indexOf("Safari") && -1 === B.indexOf("Chrome") && (-1 === t || Number(B.substr(t + 8, 1)) > 3), _ = p && 6 > Number(B.substr(B.indexOf("Version/") + 8, 1)), c = -1 !== B.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(B)) && (d = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                }(),
                j = function(t) {
                    return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                V = function(t) {
                    window.console && console.log(t)
                },
                W = "",
                q = "",
                G = function(t, e) {
                    e = e || I;
                    var i, r, s = e.style;
                    if (void 0 !== s[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === s[i[r] + t];);
                    return r >= 0 ? (q = 3 === r ? "ms" : i[r], W = "-" + q.toLowerCase() + "-", q + t) : null
                },
                H = z.defaultView ? z.defaultView.getComputedStyle : function() {},
                Q = a.getStyle = function(t, e, i, r, s) {
                    var n;
                    return U || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] : (i = i || H(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : j(t)
                },
                Z = Y.convertToPixels = function(t, i, r, s, n) {
                    if ("px" === s || !s) return r;
                    if ("auto" === s || !r) return 0;
                    var o, l, h, u = R.test(i),
                        f = t,
                        p = I.style,
                        c = 0 > r;
                    if (c && (r = -r), "%" === s && -1 !== i.indexOf("border")) o = r / 100 * (u ? t.clientWidth : t.clientHeight);
                    else {
                        if (p.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== s && f.appendChild) p[u ? "borderLeftWidth" : "borderTopWidth"] = r + s;
                        else {
                            if (f = t.parentNode || z.body, l = f._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * r / 100;
                            p[u ? "width" : "height"] = r + s
                        }
                        f.appendChild(I), o = parseFloat(I[u ? "offsetWidth" : "offsetHeight"]), f.removeChild(I), u && "%" === s && a.cacheWidths !== !1 && (l = f._gsCache = f._gsCache || {}, l.time = h, l.width = 100 * (o / r)), 0 !== o || n || (o = Z(t, i, r, s, !0))
                    }
                    return c ? -o : o
                },
                $ = Y.calculateOffset = function(t, e, i) {
                    if ("absolute" !== Q(t, "position", i)) return 0;
                    var r = "left" === e ? "Left" : "Top",
                        s = Q(t, "margin" + r, i);
                    return t["offset" + r] - (Z(t, e, parseFloat(s), s.replace(x, "")) || 0)
                },
                K = function(t, e) {
                    var i, r, s, n = {};
                    if (e = e || H(t, null))
                        if (i = e.length)
                            for (; --i > -1;) s = e[i], (-1 === s.indexOf("-transform") || be === s) && (n[s.replace(C, k)] = e.getPropertyValue(s));
                        else
                            for (i in e)(-1 === i.indexOf("Transform") || we === i) && (n[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(C, k)] = e[i]);
                    return U || (n.opacity = j(t)), r = Me(t, e, !1), n.rotation = r.rotation, n.skewX = r.skewX, n.scaleX = r.scaleX, n.scaleY = r.scaleY, n.x = r.x, n.y = r.y, Se && (n.z = r.z, n.rotationX = r.rotationX, n.rotationY = r.rotationY, n.scaleZ = r.scaleZ), n.filters && delete n.filters, n
                },
                J = function(t, e, i, r, s) {
                    var n, a, o, l = {},
                        h = t.style;
                    for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : $(t, a), void 0 !== h[a] && (o = new ce(h, a, h[a], o)));
                    if (r)
                        for (a in r) "className" !== a && (l[a] = r[a]);
                    return {
                        difs: l,
                        firstMPT: o
                    }
                },
                te = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ie = function(t, e, i) {
                    var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        s = te[e],
                        n = s.length;
                    for (i = i || H(t, null); --n > -1;) r -= parseFloat(Q(t, "padding" + s[n], i, !0)) || 0, r -= parseFloat(Q(t, "border" + s[n] + "Width", i, !0)) || 0;
                    return r
                },
                re = function(t, e) {
                    (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                    var i = t.split(" "),
                        r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(y, "")), e.oy = parseFloat(s.replace(y, ""))), r + " " + s + (i.length > 2 ? " " + i[2] : "")
                },
                se = function(t, e) {
                    return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                },
                ne = function(t, e) {
                    return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                },
                ae = function(t, e, i, r) {
                    var s, n, a, o, l, h = 1e-6;
                    return null == t ? o = e : "number" == typeof t ? o = t : (s = 360, n = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : L) - (l ? 0 : e), n.length && (r && (r[i] = e + a), -1 !== t.indexOf("short") && (a %= s, a !== a % (s / 2) && (a = 0 > a ? a + s : a - s)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (0 | a / s) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (0 | a / s) * s)), o = e + a), h > o && o > -h && (o = 0), o
                },
                oe = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                le = function(t, e, i) {
                    return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                },
                he = a.parseColor = function(t) {
                    var e, i, r, s, n, a;
                    return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), r = t.charAt(3), t = "#" + e + e + i + i + r + r), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), s = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = le(s + 1 / 3, e, i), t[1] = le(s, e, i), t[2] = le(s - 1 / 3, e, i), t) : (t = t.match(m) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black
                },
                ue = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (h in oe) ue += "|" + h + "\\b";
            ue = RegExp(ue + ")", "gi");
            var fe = function(t, e, i, r) {
                    if (null == t) return function(t) {
                        return t
                    };
                    var s, n = e ? (t.match(ue) || [""])[0] : "",
                        a = t.split(n).join("").match(v) || [],
                        o = t.substr(0, t.indexOf(a[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        h = -1 !== t.indexOf(" ") ? " " : ",",
                        u = a.length,
                        f = u > 0 ? a[0].replace(m, "") : "";
                    return u ? s = e ? function(t) {
                        var e, p, c, _;
                        if ("number" == typeof t) t += f;
                        else if (r && M.test(t)) {
                            for (_ = t.replace(M, "|").split("|"), c = 0; _.length > c; c++) _[c] = s(_[c]);
                            return _.join(",")
                        }
                        if (e = (t.match(ue) || [n])[0], p = t.split(e).join("").match(v) || [], c = p.length, u > c--)
                            for (; u > ++c;) p[c] = i ? p[0 | (c - 1) / 2] : a[c];
                        return o + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, n, p;
                        if ("number" == typeof t) t += f;
                        else if (r && M.test(t)) {
                            for (n = t.replace(M, "|").split("|"), p = 0; n.length > p; p++) n[p] = s(n[p]);
                            return n.join(",")
                        }
                        if (e = t.match(v) || [], p = e.length, u > p--)
                            for (; u > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                        return o + e.join(h) + l
                    } : function(t) {
                        return t
                    }
                },
                pe = function(t) {
                    return t = t.split(","),
                        function(e, i, r, s, n, a, o) {
                            var l, h = (i + "").split(" ");
                            for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                            return s.parse(e, o, n, a)
                        }
                },
                ce = (Y._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, r, s, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
                    if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                        for (o = n.firstMPT; o;) {
                            if (i = o.t, i.type) {
                                if (1 === i.type) {
                                    for (s = i.xs0 + i.s + i.xs1, r = 1; i.l > r; r++) s += i["xn" + r] + i["xs" + (r + 1)];
                                    i.e = s
                                }
                            } else i.e = i.s + i.xs0;
                            o = o._next
                        }
                }, function(t, e, i, r, s) {
                    this.t = t, this.p = e, this.v = i, this.r = s, r && (r._prev = this, this._next = r)
                }),
                _e = (Y._parseToProxy = function(t, e, i, r, s, n) {
                    var a, o, l, h, u, f = r,
                        p = {},
                        c = {},
                        _ = i._transform,
                        d = X;
                    for (i._transform = null, X = e, r = u = i.parse(t, e, r, s), X = d, n && (i._transform = _, f && (f._prev = null, f._prev && (f._prev._next = null))); r && r !== f;) {
                        if (1 >= r.type && (o = r.p, c[o] = r.s + r.c, p[o] = r.s, n || (h = new ce(r, "s", o, h, r.r), r.c = 0), 1 === r.type))
                            for (a = r.l; --a > 0;) l = "xn" + a, o = r.p + "_" + l, c[o] = r.data[l], p[o] = r[l], n || (h = new ce(r, l, o, h, r.rxp[l]));
                        r = r._next
                    }
                    return {
                        proxy: p,
                        end: c,
                        firstMPT: h,
                        pt: u
                    }
                }, Y.CSSPropTween = function(t, e, r, s, a, o, l, h, u, f, p) {
                    this.t = t, this.p = e, this.s = r, this.c = s, this.n = l || e, t instanceof _e || n.push(this.n), this.r = h, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === f ? r : f, this.e = void 0 === p ? r + s : p, a && (this._next = a, a._prev = this)
                }),
                de = a.parseComplex = function(t, e, i, r, s, n, a, o, l, h) {
                    i = i || n || "", a = new _e(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i, r), r += "";
                    var f, p, c, _, d, v, y, x, T, w, b, S, C = i.split(", ").join(",").split(" "),
                        O = r.split(", ").join(",").split(" "),
                        k = C.length,
                        R = u !== !1;
                    for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (C = C.join(" ").replace(M, ", ").split(" "), O = O.join(" ").replace(M, ", ").split(" "), k = C.length), k !== O.length && (C = (n || "").split(" "), k = C.length), a.plugin = l, a.setRatio = h, f = 0; k > f; f++)
                        if (_ = C[f], d = O[f], x = parseFloat(_), x || 0 === x) a.appendXtra("", x, se(d, x), d.replace(g, ""), R && -1 !== d.indexOf("px"), !0);
                        else if (s && ("#" === _.charAt(0) || oe[_] || P.test(_))) S = "," === d.charAt(d.length - 1) ? ")," : ")", _ = he(_), d = he(d), T = _.length + d.length > 6, T && !U && 0 === d[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(O[f]).join("transparent")) : (U || (T = !1), a.appendXtra(T ? "rgba(" : "rgb(", _[0], d[0] - _[0], ",", !0, !0).appendXtra("", _[1], d[1] - _[1], ",", !0).appendXtra("", _[2], d[2] - _[2], T ? "," : S, !0), T && (_ = 4 > _.length ? 1 : _[3], a.appendXtra("", _, (4 > d.length ? 1 : d[3]) - _, S, !1)));
                    else if (v = _.match(m)) {
                        if (y = d.match(g), !y || y.length !== v.length) return a;
                        for (c = 0, p = 0; v.length > p; p++) b = v[p], w = _.indexOf(b, c), a.appendXtra(_.substr(c, w - c), Number(b), se(y[p], b), "", R && "px" === _.substr(w + b.length, 2), 0 === p), c = w + b.length;
                        a["xs" + a.l] += _.substr(c)
                    } else a["xs" + a.l] += a.l ? " " + _ : _;
                    if (-1 !== r.indexOf("=") && a.data) {
                        for (S = a.xs0 + a.data.s, f = 1; a.l > f; f++) S += a["xs" + f] + a.data["xn" + f];
                        a.e = S + a["xs" + f]
                    }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                },
                me = 9;
            for (h = _e.prototype, h.l = h.pr = 0; --me > 0;) h["xn" + me] = 0, h["xs" + me] = "";
            h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, r, s, n) {
                var a = this,
                    o = a.l;
                return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new _e(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                    s: e + i
                }, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (r || ""), a)
            };
            var ge = function(t, e) {
                    e = e || {}, this.p = e.prefix ? G(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || fe(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                ve = Y._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var r, s, n = t.split(","),
                        a = e.defaultValue;
                    for (i = i || [a], r = 0; n.length > r; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || a, s = new ge(n[r], e)
                },
                ye = function(t) {
                    if (!l[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        ve(t, {
                            parser: function(t, i, r, s, n, a, h) {
                                var u = o.com.greensock.plugins[e];
                                return u ? (u._cssRegister(), l[r].parse(t, i, r, s, n, a, h)) : (V("Error: " + e + " js file not loaded."), n)
                            }
                        })
                    }
                };
            h = ge.prototype, h.parseComplex = function(t, e, i, r, s, n) {
                var a, o, l, h, u, f, p = this.keyword;
                if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), l = i.replace(M, "|").split("|")) : p && (o = [e], l = [i])), l) {
                    for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, p && (u = e.indexOf(p), f = i.indexOf(p), u !== f && (-1 === f ? o[a] = o[a].split(p).join("") : -1 === u && (o[a] += " " + p)));
                    e = o.join(", "), i = l.join(", ")
                }
                return de(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n)
            }, h.parse = function(t, e, i, r, n, a) {
                return this.parseComplex(t.style, this.format(Q(t, this.p, s, !1, this.dflt)), this.format(e), n, a)
            }, a.registerSpecialProp = function(t, e, i) {
                ve(t, {
                    parser: function(t, r, s, n, a, o) {
                        var l = new _e(t, s, 0, 0, a, 2, s, !1, i);
                        return l.plugin = o, l.setRatio = e(t, r, n._tween, s), l
                    },
                    priority: i
                })
            }, a.useSVGTransformAttr = p;
            var xe, Te = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                we = G("transform"),
                be = W + "transform",
                Pe = G("transformOrigin"),
                Se = null !== G("perspective"),
                Ce = Y.Transform = function() {
                    this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Se ? a.defaultForce3D || "auto" : !1
                },
                Oe = window.SVGElement,
                ke = function(t, e, i) {
                    var r, s = z.createElementNS("http://www.w3.org/2000/svg", t),
                        n = /([a-z])([A-Z])/g;
                    for (r in i) s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
                    return e.appendChild(s), s
                },
                Re = z.documentElement,
                Ae = function() {
                    var t, e, i, r = d || /Android/i.test(B) && !window.chrome;
                    return z.createElementNS && !r && (t = ke("svg", Re), e = ke("rect", t, {
                        width: 100,
                        height: 50,
                        x: 100
                    }), i = e.getBoundingClientRect().width, e.style[Pe] = "50% 50%", e.style[we] = "scaleX(0.5)", r = i === e.getBoundingClientRect().width && !(c && Se), Re.removeChild(t)), r
                }(),
                De = function(t, e, i, r) {
                    var s, n;
                    r && (n = r.split(" ")).length || (s = t.getBBox(), e = re(e).split(" "), n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * s.width : parseFloat(e[0])) + s.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * s.height : parseFloat(e[1])) + s.y]), i.xOrigin = parseFloat(n[0]), i.yOrigin = parseFloat(n[1]), t.setAttribute("data-svg-origin", n.join(" "))
                },
                Me = Y.getTransform = function(t, e, i, r) {
                    if (t._gsTransform && i && !r) return t._gsTransform;
                    var n, o, l, h, u, f, p, c, _, d, m = i ? t._gsTransform || new Ce : new Ce,
                        g = 0 > m.scaleX,
                        v = 2e-5,
                        y = 1e5,
                        x = Se ? parseFloat(Q(t, Pe, e, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                        T = parseFloat(a.defaultTransformPerspective) || 0;
                    if (we ? o = Q(t, be, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(A), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), m.x || 0, m.y || 0].join(",") : ""), n = !o || "none" === o || "matrix(1, 0, 0, 1, 0, 0)" === o, m.svg = !!(Oe && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), m.svg && (n && -1 !== (t.style[we] + "").indexOf("matrix") && (o = t.style[we], n = !1), De(t, Q(t, Pe, s, !1, "50% 50%") + "", m, t.getAttribute("data-svg-origin")), xe = a.useSVGTransformAttr || Ae, l = t.getAttribute("transform"), n && l && -1 !== l.indexOf("matrix") && (o = l, n = 0)), !n) {
                        for (l = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], h = l.length; --h > -1;) u = Number(l[h]), l[h] = (f = u - (u |= 0)) ? (0 | f * y + (0 > f ? -.5 : .5)) / y + u : u;
                        if (16 === l.length) {
                            var w, b, P, S, C, O = l[0],
                                k = l[1],
                                R = l[2],
                                D = l[3],
                                M = l[4],
                                N = l[5],
                                X = l[6],
                                z = l[7],
                                F = l[8],
                                I = l[9],
                                E = l[10],
                                Y = l[12],
                                B = l[13],
                                U = l[14],
                                j = l[11],
                                V = Math.atan2(X, E);
                            m.zOrigin && (U = -m.zOrigin, Y = F * U - l[12], B = I * U - l[13], U = E * U + m.zOrigin - l[14]), m.rotationX = V * L, V && (S = Math.cos(-V), C = Math.sin(-V), w = M * S + F * C, b = N * S + I * C, P = X * S + E * C, F = M * -C + F * S, I = N * -C + I * S, E = X * -C + E * S, j = z * -C + j * S, M = w, N = b, X = P), V = Math.atan2(F, E), m.rotationY = V * L, V && (S = Math.cos(-V), C = Math.sin(-V), w = O * S - F * C, b = k * S - I * C, P = R * S - E * C, I = k * C + I * S, E = R * C + E * S, j = D * C + j * S, O = w, k = b, R = P), V = Math.atan2(k, O), m.rotation = V * L, V && (S = Math.cos(-V), C = Math.sin(-V), O = O * S + M * C, b = k * S + N * C, N = k * -C + N * S, X = R * -C + X * S, k = b), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY += 180), m.scaleX = (0 | Math.sqrt(O * O + k * k) * y + .5) / y, m.scaleY = (0 | Math.sqrt(N * N + I * I) * y + .5) / y, m.scaleZ = (0 | Math.sqrt(X * X + E * E) * y + .5) / y, m.skewX = 0, m.perspective = j ? 1 / (0 > j ? -j : j) : 0, m.x = Y, m.y = B, m.z = U, m.svg && (m.x -= m.xOrigin - (m.xOrigin * O - m.yOrigin * M), m.y -= m.yOrigin - (m.yOrigin * k - m.xOrigin * N))
                        } else if (!(Se && !r && l.length && m.x === l[4] && m.y === l[5] && (m.rotationX || m.rotationY) || void 0 !== m.x && "none" === Q(t, "display", e))) {
                            var W = l.length >= 6,
                                q = W ? l[0] : 1,
                                G = l[1] || 0,
                                H = l[2] || 0,
                                Z = W ? l[3] : 1;
                            m.x = l[4] || 0, m.y = l[5] || 0, p = Math.sqrt(q * q + G * G), c = Math.sqrt(Z * Z + H * H), _ = q || G ? Math.atan2(G, q) * L : m.rotation || 0, d = H || Z ? Math.atan2(H, Z) * L + _ : m.skewX || 0, Math.abs(d) > 90 && 270 > Math.abs(d) && (g ? (p *= -1, d += 0 >= _ ? 180 : -180, _ += 0 >= _ ? 180 : -180) : (c *= -1, d += 0 >= d ? 180 : -180)), m.scaleX = p, m.scaleY = c, m.rotation = _, m.skewX = d, Se && (m.rotationX = m.rotationY = m.z = 0, m.perspective = T, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * q - m.yOrigin * G), m.y -= m.yOrigin - (m.yOrigin * Z - m.xOrigin * H))
                        }
                        m.zOrigin = x;
                        for (h in m) v > m[h] && m[h] > -v && (m[h] = 0)
                    }
                    return i && (t._gsTransform = m, m.svg && (xe && t.style[we] ? Fe(t.style, we) : !xe && t.getAttribute("transform") && t.removeAttribute("transform"))), m
                },
                Ne = function(t) {
                    var e, i, r = this.data,
                        s = -r.rotation * N,
                        n = s + r.skewX * N,
                        a = 1e5,
                        o = (0 | Math.cos(s) * r.scaleX * a) / a,
                        l = (0 | Math.sin(s) * r.scaleX * a) / a,
                        h = (0 | Math.sin(n) * -r.scaleY * a) / a,
                        u = (0 | Math.cos(n) * r.scaleY * a) / a,
                        f = this.t.style,
                        p = this.t.currentStyle;
                    if (p) {
                        i = l, l = -h, h = -i, e = p.filter, f.filter = "";
                        var c, _, m = this.t.offsetWidth,
                            g = this.t.offsetHeight,
                            v = "absolute" !== p.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                            w = r.x + m * r.xPercent / 100,
                            b = r.y + g * r.yPercent / 100;
                        if (null != r.ox && (c = (r.oxp ? .01 * m * r.ox : r.ox) - m / 2, _ = (r.oyp ? .01 * g * r.oy : r.oy) - g / 2, w += c - (c * o + _ * l), b += _ - (c * h + _ * u)), v ? (c = m / 2, _ = g / 2, y += ", Dx=" + (c - (c * o + _ * l) + w) + ", Dy=" + (_ - (c * h + _ * u) + b) + ")") : y += ", sizingMethod='auto expand')", f.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && f.removeAttribute("filter")), !v) {
                            var P, S, C, O = 8 > d ? 1 : -1;
                            for (c = r.ieOffsetX || 0, _ = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + w), r.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + b), me = 0; 4 > me; me++) S = ee[me], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : Z(this.t, S, parseFloat(P), P.replace(x, "")) || 0, C = i !== r[S] ? 2 > me ? -r.ieOffsetX : -r.ieOffsetY : 2 > me ? c - r.ieOffsetX : _ - r.ieOffsetY, f[S] = (r[S] = Math.round(i - C * (0 === me || 2 === me ? 1 : O))) + "px"
                        }
                    }
                },
                Le = Y.set3DTransformRatio = function(t) {
                    var e, i, r, s, n, a, o, l, h, u, f, p, _, d, m, g, v, y, x, T, w, b = this.data,
                        P = this.t.style,
                        S = b.rotation * N,
                        C = b.scaleX,
                        O = b.scaleY,
                        k = b.scaleZ,
                        R = b.x,
                        A = b.y,
                        D = b.z,
                        M = b.perspective;
                    if (!(1 !== t && 0 !== t && b.force3D || b.force3D === !0 || b.rotationY || b.rotationX || 1 !== k || M || D || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) return Xe.call(this, t), void 0;
                    if (c && (d = 1e-4, d > C && C > -d && (C = k = 2e-5), d > O && O > -d && (O = k = 2e-5), !M || b.z || b.rotationX || b.rotationY || (M = 0)), S || b.skewX) m = e = Math.cos(S), g = s = Math.sin(S), b.skewX && (S -= b.skewX * N, m = Math.cos(S), g = Math.sin(S), "simple" === b.skewType && (v = Math.tan(b.skewX * N), v = Math.sqrt(1 + v * v), m *= v, g *= v)), i = -g, n = m;
                    else {
                        if (!(b.rotationY || b.rotationX || 1 !== k || M || b.svg)) return P[we] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + A + "px," + D + "px)" + (1 !== C || 1 !== O ? " scale(" + C + "," + O + ")" : ""), void 0;
                        e = n = 1, i = s = 0
                    }
                    h = 1, r = a = o = l = u = f = 0, p = M ? -1 / M : 0, _ = b.zOrigin, d = 1e-6, T = ",", w = "0", S = b.rotationY * N, S && (m = Math.cos(S), g = Math.sin(S), o = -g, u = p * -g, r = e * g, a = s * g, h = m, p *= m, e *= m, s *= m), S = b.rotationX * N, S && (m = Math.cos(S), g = Math.sin(S), v = i * m + r * g, y = n * m + a * g, l = h * g, f = p * g, r = i * -g + r * m, a = n * -g + a * m, h *= m, p *= m, i = v, n = y), 1 !== k && (r *= k, a *= k, h *= k, p *= k), 1 !== O && (i *= O, n *= O, l *= O, f *= O), 1 !== C && (e *= C, s *= C, o *= C, u *= C), (_ || b.svg) && (_ && (R += r * -_, A += a * -_, D += h * -_ + _), b.svg && (R += b.xOrigin - (b.xOrigin * e + b.yOrigin * i), A += b.yOrigin - (b.xOrigin * s + b.yOrigin * n)), d > R && R > -d && (R = w), d > A && A > -d && (A = w), d > D && D > -d && (D = 0)), x = b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix3d(" : "matrix3d(", x += (d > e && e > -d ? w : e) + T + (d > s && s > -d ? w : s) + T + (d > o && o > -d ? w : o), x += T + (d > u && u > -d ? w : u) + T + (d > i && i > -d ? w : i) + T + (d > n && n > -d ? w : n), b.rotationX || b.rotationY ? (x += T + (d > l && l > -d ? w : l) + T + (d > f && f > -d ? w : f) + T + (d > r && r > -d ? w : r), x += T + (d > a && a > -d ? w : a) + T + (d > h && h > -d ? w : h) + T + (d > p && p > -d ? w : p) + T) : x += ",0,0,0,0,1,0,", x += R + T + A + T + D + T + (M ? 1 + -D / M : 1) + ")", P[we] = x
                },
                Xe = Y.set2DTransformRatio = function(t) {
                    var e, i, r, s, n, a, o, l, h, u, f, p, c = this.data,
                        _ = this.t,
                        d = _.style,
                        m = c.x,
                        g = c.y;
                    return !(c.rotationX || c.rotationY || c.z || c.force3D === !0 || "auto" === c.force3D && 1 !== t && 0 !== t) || c.svg && xe || !Se ? (s = c.scaleX, n = c.scaleY, c.rotation || c.skewX || c.svg ? (e = c.rotation * N, i = c.skewX * N, r = 1e5, a = Math.cos(e) * s, o = Math.sin(e) * s, l = Math.sin(e - i) * -n, h = Math.cos(e - i) * n, i && "simple" === c.skewType && (p = Math.tan(i), p = Math.sqrt(1 + p * p), l *= p, h *= p), c.svg && (m += c.xOrigin - (c.xOrigin * a + c.yOrigin * l), g += c.yOrigin - (c.xOrigin * o + c.yOrigin * h), f = 1e-6, f > m && m > -f && (m = 0), f > g && g > -f && (g = 0)), u = (0 | a * r) / r + "," + (0 | o * r) / r + "," + (0 | l * r) / r + "," + (0 | h * r) / r + "," + m + "," + g + ")", c.svg && xe ? _.setAttribute("transform", "matrix(" + u) : d[we] = (c.xPercent || c.yPercent ? "translate(" + c.xPercent + "%," + c.yPercent + "%) matrix(" : "matrix(") + u) : d[we] = (c.xPercent || c.yPercent ? "translate(" + c.xPercent + "%," + c.yPercent + "%) matrix(" : "matrix(") + s + ",0,0," + n + "," + m + "," + g + ")", void 0) : (this.setRatio = Le, Le.call(this, t), void 0)
                };
            h = Ce.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = 0, h.scaleX = h.scaleY = h.scaleZ = 1, ve("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                parser: function(t, e, i, r, n, o, l) {
                    if (r._lastParsedTransform === l) return n;
                    r._lastParsedTransform = l;
                    var h, u, f, p, c, _, d, m = r._transform = Me(t, s, !0, l.parseTransform),
                        g = t.style,
                        v = 1e-6,
                        y = Te.length,
                        x = l,
                        T = {};
                    if ("string" == typeof x.transform && we) f = I.style, f[we] = x.transform, f.display = "block", f.position = "absolute", z.body.appendChild(I), h = Me(I, null, !1), z.body.removeChild(I);
                    else if ("object" == typeof x) {
                        if (h = {
                                scaleX: ne(null != x.scaleX ? x.scaleX : x.scale, m.scaleX),
                                scaleY: ne(null != x.scaleY ? x.scaleY : x.scale, m.scaleY),
                                scaleZ: ne(x.scaleZ, m.scaleZ),
                                x: ne(x.x, m.x),
                                y: ne(x.y, m.y),
                                z: ne(x.z, m.z),
                                xPercent: ne(x.xPercent, m.xPercent),
                                yPercent: ne(x.yPercent, m.yPercent),
                                perspective: ne(x.transformPerspective, m.perspective)
                            }, d = x.directionalRotation, null != d)
                            if ("object" == typeof d)
                                for (f in d) x[f] = d[f];
                            else x.rotation = d;
                            "string" == typeof x.x && -1 !== x.x.indexOf("%") && (h.x = 0, h.xPercent = ne(x.x, m.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (h.y = 0, h.yPercent = ne(x.y, m.yPercent)), h.rotation = ae("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : m.rotation, m.rotation, "rotation", T), Se && (h.rotationX = ae("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", T), h.rotationY = ae("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", T)), h.skewX = null == x.skewX ? m.skewX : ae(x.skewX, m.skewX), h.skewY = null == x.skewY ? m.skewY : ae(x.skewY, m.skewY), (u = h.skewY - m.skewY) && (h.skewX += u, h.rotation += u)
                    }
                    for (Se && null != x.force3D && (m.force3D = x.force3D, _ = !0), m.skewType = x.skewType || m.skewType || a.defaultSkewType, c = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, c || null == x.scale || (h.scaleZ = 1); --y > -1;) i = Te[y], p = h[i] - m[i], (p > v || -v > p || null != x[i] || null != X[i]) && (_ = !0, n = new _e(m, i, m[i], p, n), i in T && (n.e = T[i]), n.xs0 = 0, n.plugin = o, r._overwriteProps.push(n.n));
                    return p = x.transformOrigin, m.svg && (p || x.svgOrigin) && (De(t, re(p), h, x.svgOrigin), n = new _e(m, "xOrigin", m.xOrigin, h.xOrigin - m.xOrigin, n, -1, "transformOrigin"), n.b = m.xOrigin, n.e = n.xs0 = h.xOrigin, n = new _e(m, "yOrigin", m.yOrigin, h.yOrigin - m.yOrigin, n, -1, "transformOrigin"), n.b = m.yOrigin, n.e = n.xs0 = h.yOrigin, p = xe ? null : "0px 0px"), (p || Se && c && m.zOrigin) && (we ? (_ = !0, i = Pe, p = (p || Q(t, i, s, !1, "50% 50%")) + "", n = new _e(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, Se ? (f = m.zOrigin, p = p.split(" "), m.zOrigin = (p.length > 2 && (0 === f || "0px" !== p[2]) ? parseFloat(p[2]) : f) || 0, n.xs0 = n.e = p[0] + " " + (p[1] || "50%") + " 0px", n = new _e(m, "zOrigin", 0, 0, n, -1, n.n), n.b = f, n.xs0 = n.e = m.zOrigin) : n.xs0 = n.e = p) : re(p + "", m)), _ && (r._transformType = m.svg && xe || !c && 3 !== this._transformType ? 2 : 3), n
                },
                prefix: !0
            }), ve("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), ve("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, n, a) {
                    e = this.format(e);
                    var o, l, h, u, f, p, c, _, d, m, g, v, y, x, T, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        P = t.style;
                    for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; b.length > l; l++) this.p.indexOf("border") && (b[l] = G(b[l])), f = u = Q(t, b[l], s, !1, "0px"), -1 !== f.indexOf(" ") && (u = f.split(" "), f = u[0], u = u[1]), p = h = o[l], c = parseFloat(f), v = f.substr((c + "").length), y = "=" === p.charAt(1), y ? (_ = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), _ *= parseFloat(p), g = p.substr((_ + "").length - (0 > _ ? 1 : 0)) || "") : (_ = parseFloat(p), g = p.substr((_ + "").length)), "" === g && (g = r[i] || v), g !== v && (x = Z(t, "borderLeft", c, v), T = Z(t, "borderTop", c, v), "%" === g ? (f = 100 * (x / d) + "%", u = 100 * (T / m) + "%") : "em" === g ? (w = Z(t, "borderLeft", 1, "em"), f = x / w + "em", u = T / w + "em") : (f = x + "px", u = T + "px"), y && (p = parseFloat(f) + _ + g, h = parseFloat(u) + _ + g)), a = de(P, b[l], f + " " + u, p + " " + h, !1, "0px", a);
                    return a
                },
                prefix: !0,
                formatter: fe("0px 0px 0px 0px", !1, !0)
            }), ve("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, r, n, a) {
                    var o, l, h, u, f, p, c = "background-position",
                        _ = s || H(t, null),
                        m = this.format((_ ? d ? _.getPropertyValue(c + "-x") + " " + _.getPropertyValue(c + "-y") : _.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        g = this.format(e);
                    if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (p = Q(t, "backgroundImage").replace(O, ""), p && "none" !== p)) {
                        for (o = m.split(" "), l = g.split(" "), E.setAttribute("src", p), h = 2; --h > -1;) m = o[h], u = -1 !== m.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (f = 0 === h ? t.offsetWidth - E.width : t.offsetHeight - E.height, o[h] = u ? parseFloat(m) / 100 * f + "px" : 100 * (parseFloat(m) / f) + "%");
                        m = o.join(" ")
                    }
                    return this.parseComplex(t.style, m, g, n, a)
                },
                formatter: re
            }), ve("backgroundSize", {
                defaultValue: "0 0",
                formatter: re
            }), ve("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), ve("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), ve("transformStyle", {
                prefix: !0
            }), ve("backfaceVisibility", {
                prefix: !0
            }), ve("userSelect", {
                prefix: !0
            }), ve("margin", {
                parser: pe("marginTop,marginRight,marginBottom,marginLeft")
            }), ve("padding", {
                parser: pe("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), ve("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, r, n, a) {
                    var o, l, h;
                    return 9 > d ? (l = t.currentStyle, h = 8 > d ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(Q(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                }
            }), ve("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), ve("autoRound,strictUnits", {
                parser: function(t, e, i, r, s) {
                    return s
                }
            }), ve("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, r, n, a) {
                    return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", s, !1, "0px") + " " + Q(t, "borderTopStyle", s, !1, "solid") + " " + Q(t, "borderTopColor", s, !1, "#000")), this.format(e), n, a)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(ue) || ["#000"])[0]
                }
            }), ve("borderWidth", {
                parser: pe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), ve("float,cssFloat,styleFloat", {
                parser: function(t, e, i, r, s) {
                    var n = t.style,
                        a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                    return new _e(n, a, 0, 0, s, -1, i, !1, 0, n[a], e)
                }
            });
            var ze = function(t) {
                var e, i = this.t,
                    r = i.filter || Q(this.data, "filter") || "",
                    s = 0 | this.s + this.c * t;
                100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = r.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"), -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(T, "opacity=" + s))
            };
            ve("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, r, n, a) {
                    var o = parseFloat(Q(t, "opacity", s, !1, "1")),
                        l = t.style,
                        h = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === Q(t, "visibility", s) && 0 !== e && (o = 0), U ? n = new _e(l, "opacity", o, e - o, n) : (n = new _e(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = ze), h && (n = new _e(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n
                }
            });
            var Fe = function(t, e) {
                    e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                Ie = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Fe(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            ve("className", {
                parser: function(t, e, r, n, a, o, l) {
                    var h, u, f, p, c, _ = t.getAttribute("class") || "",
                        d = t.style.cssText;
                    if (a = n._classNamePT = new _e(t, r, 0, 0, a, 2), a.setRatio = Ie, a.pr = -11, i = !0, a.b = _, u = K(t, s), f = t._gsClassPT) {
                        for (p = {}, c = f.data; c;) p[c.p] = 1, c = c._next;
                        f.setRatio(1)
                    }
                    return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : _.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.setAttribute("class", a.e), h = J(t, u, K(t), l, p), t.setAttribute("class", _), a.data = h.firstMPT, t.style.cssText = d, a = a.xfirst = n.parse(t, h.difs, a, o)), a
                }
            });
            var Ee = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, r, s, n = this.t.style,
                        a = l.transform.parse;
                    if ("all" === this.e) n.cssText = "", s = !0;
                    else
                        for (e = this.e.split(" ").join("").split(","), r = e.length; --r > -1;) i = e[r], l[i] && (l[i].parse === a ? s = !0 : i = "transformOrigin" === i ? Pe : l[i].p), Fe(n, i);
                    s && (Fe(n, we), this.t._gsTransform && delete this.t._gsTransform)
                }
            };
            for (ve("clearProps", {
                    parser: function(t, e, r, s, n) {
                        return n = new _e(t, r, 0, 0, n, 2), n.setRatio = Ee, n.e = e, n.pr = -10, n.data = s._tween, i = !0, n
                    }
                }), h = "bezier,throwProps,physicsProps,physics2D".split(","), me = h.length; me--;) ye(h[me]);
            h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, o) {
                if (!t.nodeType) return !1;
                this._target = t, this._tween = o, this._vars = e, u = e.autoRound, i = !1, r = e.suffixMap || a.suffixMap, s = H(t, ""), n = this._overwriteProps;
                var l, h, c, d, m, g, v, y, x, T = t.style;
                if (f && "" === T.zIndex && (l = Q(t, "zIndex", s), ("auto" === l || "" === l) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (d = T.cssText, l = K(t, s), T.cssText = d + ";" + e, l = J(t, l, K(t)).difs, !U && w.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, T.cssText = d), this._firstPT = h = this.parse(t, e, null), this._transformType) {
                    for (x = 3 === this._transformType, we ? p && (f = !0, "" === T.zIndex && (v = Q(t, "zIndex", s), ("auto" === v || "" === v) && this._addLazySet(T, "zIndex", 0)), _ && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : T.zoom = 1, c = h; c && c._next;) c = c._next;
                    y = new _e(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = x && Se ? Le : we ? Xe : Ne, y.data = this._transform || Me(t, s, !0), y.tween = o, n.pop()
                }
                if (i) {
                    for (; h;) {
                        for (g = h._next, c = d; c && c.pr > h.pr;) c = c._next;
                        (h._prev = c ? c._prev : m) ? h._prev._next = h: d = h, (h._next = c) ? c._prev = h : m = h, h = g
                    }
                    this._firstPT = d
                }
                return !0
            }, h.parse = function(t, e, i, n) {
                var a, o, h, f, p, c, _, d, m, g, v = t.style;
                for (a in e) c = e[a], o = l[a], o ? i = o.parse(t, c, a, this, i, n, e) : (p = Q(t, a, s) + "", m = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && P.test(c) ? (m || (c = he(c), c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = de(v, a, p, c, !0, "transparent", i, 0, n)) : !m || -1 === c.indexOf(" ") && -1 === c.indexOf(",") ? (h = parseFloat(p), _ = h || 0 === h ? p.substr((h + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (h = ie(t, a, s), _ = "px") : "left" === a || "top" === a ? (h = $(t, a, s), _ = "px") : (h = "opacity" !== a ? 0 : 1, _ = "")), g = m && "=" === c.charAt(1), g ? (f = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), f *= parseFloat(c), d = c.replace(x, "")) : (f = parseFloat(c), d = m ? c.replace(x, "") : ""), "" === d && (d = a in r ? r[a] : _), c = f || 0 === f ? (g ? f + h : f) + d : e[a], _ !== d && "" !== d && (f || 0 === f) && h && (h = Z(t, a, h, _), "%" === d ? (h /= Z(t, a, 100, "%") / 100, e.strictUnits !== !0 && (p = h + "%")) : "em" === d ? h /= Z(t, a, 1, "em") : "px" !== d && (f = Z(t, a, f, d), d = "px"), g && (f || 0 === f) && (c = f + h + d)), g && (f += h), !h && 0 !== h || !f && 0 !== f ? void 0 !== v[a] && (c || "NaN" != c + "" && null != c) ? (i = new _e(v, a, f || h || 0, 0, i, -1, a, !1, 0, p, c), i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : p) : V("invalid " + a + " tween value: " + e[a]) : (i = new _e(v, a, h, f - h, i, 0, a, u !== !1 && ("px" === d || "zIndex" === a), 0, p, c), i.xs0 = d)) : i = de(v, a, p, c, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                return i
            }, h.setRatio = function(t) {
                var e, i, r, s = this._firstPT,
                    n = 1e-6;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; s;) {
                            if (e = s.c * t + s.s, s.r ? e = Math.round(e) : n > e && e > -n && (e = 0), s.type)
                                if (1 === s.type)
                                    if (r = s.l, 2 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                    else if (3 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                            else if (4 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                            else if (5 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                            else {
                                for (i = s.xs0 + e + s.xs1, r = 1; s.l > r; r++) i += s["xn" + r] + s["xs" + (r + 1)];
                                s.t[s.p] = i
                            } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                            else s.t[s.p] = e + s.xs0;
                            s = s._next
                        } else
                            for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                    else
                        for (; s;) 2 !== s.type ? s.t[s.p] = s.e : s.setRatio(t), s = s._next
            }, h._enableTransforms = function(t) {
                this._transform = this._transform || Me(this._target, s, !0), this._transformType = this._transform.svg && xe || !t && 3 !== this._transformType ? 2 : 3
            };
            var Ye = function() {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            h._addLazySet = function(t, e, i) {
                var r = this._firstPT = new _e(t, e, 0, 0, this._firstPT, 2);
                r.e = i, r.setRatio = Ye, r.data = this
            }, h._linkCSSP = function(t, e, i, r) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, h._kill = function(e) {
                var i, r, s, n = e;
                if (e.autoAlpha || e.alpha) {
                    n = {};
                    for (r in e) n[r] = e[r];
                    n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                }
                return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
            };
            var Be = function(t, e, i) {
                var r, s, n, a;
                if (t.slice)
                    for (s = t.length; --s > -1;) Be(t[s], e, i);
                else
                    for (r = t.childNodes, s = r.length; --s > -1;) n = r[s], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Be(n, e, i)
            };
            return a.cascadeTo = function(t, i, r) {
                var s, n, a, o, l = e.to(t, i, r),
                    h = [l],
                    u = [],
                    f = [],
                    p = [],
                    c = e._internals.reservedProps;
                for (t = l._targets || l.target, Be(t, u, p), l.render(i, !0, !0), Be(t, f), l.render(0, !0, !0), l._enabled(!0), s = p.length; --s > -1;)
                    if (n = J(p[s], u[s], f[s]), n.firstMPT) {
                        n = n.difs;
                        for (a in r) c[a] && (n[a] = r[a]);
                        o = {};
                        for (a in n) o[a] = u[s][a];
                        h.push(e.fromTo(p[s], i, o, n))
                    }
                return h
            }, t.activate([a]), a
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e())
    }("CSSPlugin");
/*
 * VERSION: beta 0.3.3
 * DATE: 2014-10-29
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(function(t) {
    "use strict";
    var e = t.GreenSockGlobals || t,
        i = function(t) {
            var i, s = t.split("."),
                r = e;
            for (i = 0; s.length > i; i++) r[s[i]] = r = r[s[i]] || {};
            return r
        },
        s = i("com.greensock.utils"),
        r = function(t) {
            var e = t.nodeType,
                i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
            } else if (3 === e || 4 === e) return t.nodeValue;
            return i
        },
        n = document,
        a = n.defaultView ? n.defaultView.getComputedStyle : function() {},
        o = /([A-Z])/g,
        h = function(t, e, i, s) {
            var r;
            return (i = i || a(t, null)) ? (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), s ? r : parseInt(r, 10) || 0
        },
        l = function(t) {
            return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1
        },
        _ = function(t) {
            var e, i, s, r = [],
                n = t.length;
            for (e = 0; n > e; e++)
                if (i = t[e], l(i))
                    for (s = i.length, s = 0; i.length > s; s++) r.push(i[s]);
                else r.push(i);
            return r
        },
        u = ")eefec303079ad17405c",
        c = /(?:<br>|<br\/>|<br \/>)/gi,
        p = n.all && !n.addEventListener,
        f = "<div style='position:relative;display:inline-block;" + (p ? "*display:inline;*zoom:1;'" : "'"),
        m = function(t) {
            t = t || "";
            var e = -1 !== t.indexOf("++"),
                i = 1;
            return e && (t = t.split("++").join("")),
                function() {
                    return f + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
                }
        },
        d = s.SplitText = e.SplitText = function(t, e) {
            if ("string" == typeof t && (t = d.selector(t)), !t) throw "cannot split a null element.";
            this.elements = l(t) ? _(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
        },
        g = function(t, e, i) {
            var s = t.nodeType;
            if (1 === s || 9 === s || 11 === s)
                for (t = t.firstChild; t; t = t.nextSibling) g(t, e, i);
            else(3 === s || 4 === s) && (t.nodeValue = t.nodeValue.split(e).join(i))
        },
        v = function(t, e) {
            for (var i = e.length; --i > -1;) t.push(e[i])
        },
        y = function(t, e, i, s, o) {
            c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u));
            var l, _, p, f, d, y, T, w, x, b, P, S, C, k, R = r(t),
                A = e.type || e.split || "chars,words,lines",
                O = -1 !== A.indexOf("lines") ? [] : null,
                D = -1 !== A.indexOf("words"),
                M = -1 !== A.indexOf("chars"),
                L = "absolute" === e.position || e.absolute === !0,
                z = L ? "&#173; " : " ",
                I = -999,
                E = a(t),
                N = h(t, "paddingLeft", E),
                F = h(t, "borderBottomWidth", E) + h(t, "borderTopWidth", E),
                X = h(t, "borderLeftWidth", E) + h(t, "borderRightWidth", E),
                U = h(t, "paddingTop", E) + h(t, "paddingBottom", E),
                B = h(t, "paddingLeft", E) + h(t, "paddingRight", E),
                j = h(t, "textAlign", E, !0),
                Y = t.clientHeight,
                q = t.clientWidth,
                V = "</div>",
                G = m(e.wordsClass),
                Q = m(e.charsClass),
                W = -1 !== (e.linesClass || "").indexOf("++"),
                Z = e.linesClass,
                H = -1 !== R.indexOf("<"),
                $ = !0,
                K = [],
                J = [],
                te = [];
            for (W && (Z = Z.split("++").join("")), H && (R = R.split("<").join("{{LT}}")), l = R.length, f = G(), d = 0; l > d; d++)
                if (T = R.charAt(d), ")" === T && R.substr(d, 20) === u) f += ($ ? V : "") + "<BR/>", $ = !1, d !== l - 20 && R.substr(d + 20, 20) !== u && (f += " " + G(), $ = !0), d += 19;
                else if (" " === T && " " !== R.charAt(d - 1) && d !== l - 1 && R.substr(d - 20, 20) !== u) {
                for (f += $ ? V : "", $ = !1;
                    " " === R.charAt(d + 1);) f += z, d++;
                (")" !== R.charAt(d + 1) || R.substr(d + 1, 20) !== u) && (f += z + G(), $ = !0)
            } else f += M && " " !== T ? Q() + T + "</div>" : T;
            for (t.innerHTML = f + ($ ? V : ""), H && g(t, "{{LT}}", "<"), y = t.getElementsByTagName("*"), l = y.length, w = [], d = 0; l > d; d++) w[d] = y[d];
            if (O || L)
                for (d = 0; l > d; d++) x = w[d], p = x.parentNode === t, (p || L || M && !D) && (b = x.offsetTop, O && p && b !== I && "BR" !== x.nodeName && (_ = [], O.push(_), I = b), L && (x._x = x.offsetLeft, x._y = b, x._w = x.offsetWidth, x._h = x.offsetHeight), O && (D !== p && M || (_.push(x), x._x -= N), p && d && (w[d - 1]._wordEnd = !0), "BR" === x.nodeName && x.nextSibling && "BR" === x.nextSibling.nodeName && O.push([])));
            for (d = 0; l > d; d++) x = w[d], p = x.parentNode === t, "BR" !== x.nodeName ? (L && (S = x.style, D || p || (x._x += x.parentNode._x, x._y += x.parentNode._y), S.left = x._x + "px", S.top = x._y + "px", S.position = "absolute", S.display = "block", S.width = x._w + 1 + "px", S.height = x._h + "px"), D ? p && "" !== x.innerHTML ? J.push(x) : M && K.push(x) : p ? (t.removeChild(x), w.splice(d--, 1), l--) : !p && M && (b = !O && !L && x.nextSibling, t.appendChild(x), b || t.appendChild(n.createTextNode(" ")), K.push(x))) : O || L ? (t.removeChild(x), w.splice(d--, 1), l--) : D || t.appendChild(x);
            if (O) {
                for (L && (P = n.createElement("div"), t.appendChild(P), C = P.offsetWidth + "px", b = P.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(P)), S = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (k = !L || !D && !M, d = 0; O.length > d; d++) {
                    for (_ = O[d], P = n.createElement("div"), P.style.cssText = "display:block;text-align:" + j + ";position:" + (L ? "absolute;" : "relative;"), Z && (P.className = Z + (W ? d + 1 : "")), te.push(P), l = _.length, y = 0; l > y; y++) "BR" !== _[y].nodeName && (x = _[y], P.appendChild(x), k && (x._wordEnd || D) && P.appendChild(n.createTextNode(" ")), L && (0 === y && (P.style.top = x._y + "px", P.style.left = N + b + "px"), x.style.top = "0px", b && (x.style.left = x._x - b + "px")));
                    0 === l && (P.innerHTML = "&nbsp;"), D || M || (P.innerHTML = r(P).split(String.fromCharCode(160)).join(" ")), L && (P.style.width = C, P.style.height = x._h + "px"), t.appendChild(P)
                }
                t.style.cssText = S
            }
            L && (Y > t.clientHeight && (t.style.height = Y - U + "px", Y > t.clientHeight && (t.style.height = Y + F + "px")), q > t.clientWidth && (t.style.width = q - B + "px", q > t.clientWidth && (t.style.width = q + X + "px"))), v(i, K), v(s, J), v(o, te)
        },
        T = d.prototype;
    T.split = function(t) {
        this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e = this.elements.length; --e > -1;) this._originals[e] = this.elements[e].innerHTML, y(this.elements[e], this.vars, this.chars, this.words, this.lines);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, T.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, d.selector = t.$ || t.jQuery || function(e) {
        var i = t.$ || t.jQuery;
        return i ? (d.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
    }, d.version = "0.3.3"
})(_gsScope),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e())
}("SplitText");
try {
    window.GreenSockGlobals = null;
    window._gsQueue = null;
    window._gsDefine = null;
    delete(window.GreenSockGlobals);
    delete(window._gsQueue);
    delete(window._gsDefine);
} catch (e) {}
try {
    window.GreenSockGlobals = oldgs;
    window._gsQueue = oldgs_queue;
} catch (e) {}
if (window.tplogs == true)
    try {
        console.groupEnd();
    } catch (e) {}
    (function(e, t) {
        e.waitForImages = {
            hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
        };
        e.expr[":"].uncached = function(t) {
            var n = document.createElement("img");
            n.src = t.src;
            return e(t).is('img[src!=""]') && !n.complete
        };
        e.fn.waitForImages = function(t, n, r) {
            if (e.isPlainObject(arguments[0])) {
                n = t.each;
                r = t.waitForAll;
                t = t.finished
            }
            t = t || e.noop;
            n = n || e.noop;
            r = !!r;
            if (!e.isFunction(t) || !e.isFunction(n)) {
                throw new TypeError("An invalid callback was supplied.")
            }
            return this.each(function() {
                var i = e(this),
                    s = [];
                if (r) {
                    var o = e.waitForImages.hasImageProperties || [],
                        u = /url\((['"]?)(.*?)\1\)/g;
                    i.find("*").each(function() {
                        var t = e(this);
                        if (t.is("img:uncached")) {
                            s.push({
                                src: t.attr("src"),
                                element: t[0]
                            })
                        }
                        e.each(o, function(e, n) {
                            var r = t.css(n);
                            if (!r) {
                                return true
                            }
                            var i;
                            while (i = u.exec(r)) {
                                s.push({
                                    src: i[2],
                                    element: t[0]
                                })
                            }
                        })
                    })
                } else {
                    i.find("img:uncached").each(function() {
                        s.push({
                            src: this.src,
                            element: this
                        })
                    })
                }
                var f = s.length,
                    l = 0;
                if (f == 0) {
                    t.call(i[0])
                }
                e.each(s, function(r, s) {
                    var o = new Image;
                    e(o).bind("load error", function(e) {
                        l++;
                        n.call(s.element, l, f, e.type == "load");
                        if (l == f) {
                            t.call(i[0]);
                            return false
                        }
                    });
                    o.src = s.src
                })
            })
        };
    })(jQuery);

function revslider_showDoubleJqueryError(t) {
    var e = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    e += "<br> This includes make eliminates the revolution slider libraries, and make it not work.", e += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.", e += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.", e = "<span style='font-size:16px;color:#BC0C06;'>" + e + "</span>", jQuery(t).show().html(e)
}! function(t, e) {
    function a() {
        var t = !1;
        return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (t = !0) : t = !1, t
    }

    function i(i, d) {
        if (i == e) return !1;
        if (i.data("aimg") != e && ("enabled" == i.data("aie8") && s(8) || "enabled" == i.data("amobile") && Z()) && i.html('<img class="tp-slider-alternative-image" src="' + i.data("aimg") + '">'), ("preview1" == d.navigationStyle || "preview3" == d.navigationStyle || "preview4" == d.navigationStyle) && (d.soloArrowLeftHalign = "left", d.soloArrowLeftValign = "center", d.soloArrowLeftHOffset = 0, d.soloArrowLeftVOffset = 0, d.soloArrowRightHalign = "right", d.soloArrowRightValign = "center", d.soloArrowRightHOffset = 0, d.soloArrowRightVOffset = 0, d.navigationArrows = "solo"), "on" == d.simplifyAll && (s(8) || a()) && (i.find(".tp-caption").each(function() {
                var e = t(this);
                e.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout"), e.data("splitin", ""), e.data("speed", 400)
            }), i.find(">ul>li").each(function() {
                var e = t(this);
                e.data("transition", "fade"), e.data("masterspeed", 500), e.data("slotamount", 1);
                var a = e.find(">img").first();
                a.data("kenburns", "off")
            })), d.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), "on" != d.fullWidth && "on" != d.fullScreen && (d.autoHeight = "off"), "on" == d.fullScreen && (d.autoHeight = "on"), "on" != d.fullWidth && "on" != d.fullScreen && (forceFulWidth = "off"), "on" == d.fullWidth && "off" == d.autoHeight && i.css({
                maxHeight: d.startheight + "px"
            }), Z() && "on" == d.hideThumbsOnMobile && "thumb" == d.navigationType && (d.navigationType = "none"), Z() && "on" == d.hideBulletsOnMobile && "bullet" == d.navigationType && (d.navigationType = "none"), Z() && "on" == d.hideBulletsOnMobile && "both" == d.navigationType && (d.navigationType = "none"), Z() && "on" == d.hideArrowsOnMobile && (d.navigationArrows = "none"), "on" == d.forceFullWidth && 0 == i.closest(".forcefullwidth_wrapper_tp_banner").length) {
            var f = i.parent().offset().left,
                g = i.parent().css("marginBottom"),
                m = i.parent().css("marginTop");
            g == e && (g = 0), m == e && (m = 0), i.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + m + ";margin-bottom:" + g + '" class="forcefullwidth_wrapper_tp_banner"></div>'), i.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + i.height() + 'px"></div>'), i.css({
                backgroundColor: i.parent().css("backgroundColor"),
                backgroundImage: i.parent().css("backgroundImage")
            }), i.parent().css({
                left: 0 - f + "px",
                position: "absolute",
                width: t(window).width()
            }), d.width = t(window).width()
        }
        try {
            i.parent().find(".tp-bullets.tp-thumbs").css(d.hideThumbsUnderResolution > t(window).width() && 0 != d.hideThumbsUnderResolution ? {
                display: "none"
            } : {
                display: "block"
            })
        } catch (w) {}
        if (!i.hasClass("revslider-initialised")) {
            i.addClass("revslider-initialised"), i.attr("id") == e && i.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), d.firefox13 = !1, d.ie = !t.support.opacity, d.ie9 = 9 == document.documentMode, d.origcd = d.delay; {
                var b = t.fn.jquery.split("."),
                    y = parseFloat(b[0]),
                    x = parseFloat(b[1]);
                parseFloat(b[2] || "0")
            }
            1 == y && 7 > x && i.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + b + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), y > 1 && (d.ie = !1), t.support.transition || (t.fn.transition = t.fn.animate), i.find(".caption").each(function() {
                t(this).addClass("tp-caption")
            }), Z() && i.find(".tp-caption").each(function() {
                var e = t(this);
                (1 == e.data("autoplayonlyfirsttime") || "true" == e.data("autoplayonlyfirsttime")) && e.data("autoplayonlyfirsttime", "false"), (1 == e.data("autoplay") || "true" == e.data("autoplay")) && e.data("autoplay", !1)
            });
            var T = 0,
                k = 0,
                C = "http";
            if ("https:" === location.protocol && (C = "https"), i.find(".tp-caption").each(function() {
                    try {
                        if ((t(this).data("ytid") != e || t(this).find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && 0 == T) {
                            T = 1;
                            var a = document.createElement("script"),
                                i = "https";
                            a.src = i + "://www.youtube.com/iframe_api";
                            var n = document.getElementsByTagName("script")[0],
                                o = !0;
                            t("head").find("*").each(function() {
                                t(this).attr("src") == i + "://www.youtube.com/iframe_api" && (o = !1)
                            }), o && n.parentNode.insertBefore(a, n)
                        }
                    } catch (r) {}
                    try {
                        if ((t(this).data("vimeoid") != e || t(this).find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && 0 == k) {
                            k = 1;
                            var s = document.createElement("script");
                            s.src = C + "://a.vimeocdn.com/js/froogaloop2.min.js";
                            var n = document.getElementsByTagName("script")[0],
                                o = !0;
                            t("head").find("*").each(function() {
                                t(this).attr("src") == C + "://a.vimeocdn.com/js/froogaloop2.min.js" && (o = !1)
                            }), o && n.parentNode.insertBefore(s, n)
                        }
                    } catch (r) {}
                    try {
                        t(this).data("videomp4") != e || t(this).data("videowebm") != e
                    } catch (r) {}
                }), i.find(".tp-caption video").each(function() {
                    t(this).removeClass("video-js").removeClass("vjs-default-skin"), t(this).attr("preload", ""), t(this).css({
                        display: "none"
                    })
                }), i.find(">ul:first-child >li").each(function() {
                    var e = t(this);
                    e.data("origindex", e.index())
                }), "on" == d.shuffle) {
                var z = new Object,
                    O = i.find(">ul:first-child >li:first-child");
                z.fstransition = O.data("fstransition"), z.fsmasterspeed = O.data("fsmasterspeed"), z.fsslotamount = O.data("fsslotamount");
                for (var I = 0; I < i.find(">ul:first-child >li").length; I++) {
                    var A = Math.round(Math.random() * i.find(">ul:first-child >li").length);
                    i.find(">ul:first-child >li:eq(" + A + ")").prependTo(i.find(">ul:first-child"))
                }
                var M = i.find(">ul:first-child >li:first-child");
                M.data("fstransition", z.fstransition), M.data("fsmasterspeed", z.fsmasterspeed), M.data("fsslotamount", z.fsslotamount)
            }
            d.slots = 4, d.act = -1, d.next = 0, d.startWithSlide != e && (d.next = d.startWithSlide);
            var S = o("#")[0];
            if (S.length < 9 && S.split("slide").length > 1) {
                var P = parseInt(S.split("slide")[1], 0);
                1 > P && (P = 1), P > i.find(">ul:first >li").length && (P = i.find(">ul:first >li").length), d.next = P - 1
            }
            d.firststart = 1, d.navigationHOffset == e && (d.navOffsetHorizontal = 0), d.navigationVOffset == e && (d.navOffsetVertical = 0), i.append('<div class="tp-loader ' + d.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 == i.find(".tp-bannertimer").length && i.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
            var D = i.find(".tp-bannertimer");
            if (D.length > 0 && D.css({
                    width: "0%"
                }), i.addClass("tp-simpleresponsive"), d.container = i, d.slideamount = i.find(">ul:first >li").length, 0 == i.height() && i.height(d.startheight), (d.startwidth == e || 0 == d.startwidth) && (d.startwidth = i.width()), (d.startheight == e || 0 == d.startheight) && (d.startheight = i.height()), d.width = i.width(), d.height = i.height(), d.bw = d.startwidth / i.width(), d.bh = d.startheight / i.height(), d.width != d.startwidth && (d.height = Math.round(d.startheight * (d.width / d.startwidth)), i.height(d.height)), 0 != d.shadow) {
                i.parent().append('<div class="tp-bannershadow tp-shadow' + d.shadow + '"></div>');
                var f = 0;
                "on" == d.forceFullWidth && (f = 0 - d.container.parent().offset().left), i.parent().find(".tp-bannershadow").css({
                    width: d.width,
                    left: f
                })
            }
            i.find("ul").css({
                display: "none"
            });
            i.find("ul").css({
                display: "block"
            }), v(i, d), "off" != d.parallax && Q(i, d), d.slideamount > 1 && l(i, d), d.slideamount > 1 && "thumb" == d.navigationType && te(i, d), d.slideamount > 1 && h(i, d), "on" == d.keyboardNavigation && c(i, d), p(i, d), d.hideThumbs > 0 && u(i, d), setTimeout(function() {
                L(i, d)
            }, d.startDelay), d.startDelay = 0, d.slideamount > 1 && j(i, d), setTimeout(function() {
                i.trigger("revolution.slide.onloaded")
            }, 500), t("body").data("rs-fullScreenMode", !1), t(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                t("body").data("rs-fullScreenMode", !t("body").data("rs-fullScreenMode")), t("body").data("rs-fullScreenMode") && setTimeout(function() {
                    t(window).trigger("resize")
                }, 200)
            });
            var H = "resize.revslider-" + i.attr("id");
            t(window).on(H, function() {
                if (i == e) return !1;
                if (0 != t("body").find(i) && "on" == d.forceFullWidth) {
                    var a = d.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;
                    d.container.parent().css({
                        left: 0 - a + "px",
                        width: t(window).width()
                    })
                }(i.outerWidth(!0) != d.width || i.is(":hidden")) && r(i, d)
            });
            try {
                0 != d.hideThumbsUnderResoluition && "thumb" == d.navigationType && t(".tp-bullets").css(d.hideThumbsUnderResoluition > t(window).width() ? {
                    display: "none"
                } : {
                    display: "block"
                })
            } catch (w) {}
            i.find(".tp-scrollbelowslider").on("click", function() {
                var e = 0;
                try {
                    e = t("body").find(d.fullScreenOffsetContainer).height()
                } catch (a) {}
                try {
                    e -= parseInt(t(this).data("scrolloffset"), 0)
                } catch (a) {}
                t("body,html").animate({
                    scrollTop: i.offset().top + i.find(">ul >li").height() - e + "px"
                }, {
                    duration: 400
                })
            });
            var W = i.parent();
            t(window).width() < d.hideSliderAtLimit && (i.trigger("stoptimer"), "none" != W.css("display") && W.data("olddisplay", W.css("display")), W.css({
                display: "none"
            })), d.disableFocusListener || "true" == d.disableFocusListener || d.disableFocusListener === !0 || n(i, d)
        }
    }
    t.fn.extend({
        revolution: function(a) {
            var n = {
                delay: 9e3,
                startheight: 500,
                startwidth: 960,
                fullScreenAlignForce: "off",
                autoHeight: "off",
                hideTimerBar: "off",
                hideThumbs: 200,
                hideNavDelayOnMobile: 1500,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 3,
                navigationType: "bullet",
                navigationArrows: "solo",
                navigationInGrid: "off",
                hideThumbsOnMobile: "off",
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResoluition: 0,
                navigationStyle: "round",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                keyboardNavigation: "on",
                touchenabled: "on",
                onHoverStop: "on",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "off",
                minFullScreenHeight: 0,
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                dottedOverlay: "none",
                forceFullWidth: "off",
                spinner: "spinner0",
                swipe_treshold: 75,
                swipe_min_touches: 1,
                drag_block_vertical: !1,
                isJoomla: !1,
                parallax: "off",
                parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                parallaxBgFreeze: "off",
                parallaxOpacity: "on",
                parallaxDisableOnMobile: "off",
                panZoomDisableOnMobile: "off",
                simplifyAll: "on",
                minHeight: 0,
                nextSlideOnWindowFocus: "off",
                disableFocusListener: !0,
                startDelay: 0
            };
            return a = t.extend({}, n, a), this.each(function() {
                if (1 == window.tplogs) try {
                    console.groupCollapsed("Slider Revolution 4.6.8 Initialisation on " + t(this).attr("id")), console.groupCollapsed("Used Options:"), console.info(a), console.groupEnd(), console.groupCollapsed("Tween Engine:")
                } catch (n) {}
                if (punchgs.TweenLite == e) {
                    if (1 == window.tplogs) try {
                        console.error("GreenSock Engine Does not Exist!")
                    } catch (n) {}
                    return !1
                }
                if (punchgs.force3D = !0, 1 == window.tplogs) try {
                    console.info("GreenSock Engine Version in Slider Revolution:" + punchgs.TweenLite.version)
                } catch (n) {}
                if ("on" == a.simplifyAll || (punchgs.TweenLite.lagSmoothing(1e3, 16), punchgs.force3D = "true"), 1 == window.tplogs) try {
                    console.groupEnd(), console.groupEnd()
                } catch (n) {}
                i(t(this), a)
            })
        },
        revscroll: function(a) {
            return this.each(function() {
                var i = t(this);
                i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0 && t("body,html").animate({
                    scrollTop: i.offset().top + i.find(">ul >li").height() - a + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function() {
            return this.each(function() {
                var a = t(this);
                if (a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0) {
                    var i = a.parent().find(".tp-bannertimer"),
                        n = i.data("opt");
                    r(a, n)
                }
            })
        },
        revkill: function() {
            var a = this,
                i = t(this);
            if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                i.data("conthover", 1), i.data("conthover-changed", 1), i.trigger("revolution.slide.onpause");
                var n = i.parent().find(".tp-bannertimer"),
                    o = n.data("opt");
                o.bannertimeronpause = !0, i.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(i.find("*"), !1), punchgs.TweenLite.killTweensOf(i, !1), i.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                var r = "resize.revslider-" + i.attr("id");
                t(window).off(r), i.find("*").each(function() {
                    var a = t(this);
                    a.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), a.off("on, hover, mouseenter,mouseleave,mouseover, resize"), a.data("mySplitText", null), a.data("ctl", null), a.data("tween") != e && a.data("tween").kill(), a.data("kenburn") != e && a.data("kenburn").kill(), a.remove(), a.empty(), a = null
                }), punchgs.TweenLite.killTweensOf(i.find("*"), !1), punchgs.TweenLite.killTweensOf(i, !1), n.remove();
                try {
                    i.closest(".forcefullwidth_wrapper_tp_banner").remove()
                } catch (s) {}
                try {
                    i.closest(".rev_slider_wrapper").remove()
                } catch (s) {}
                try {
                    i.remove()
                } catch (s) {}
                return i.empty(), i.html(), i = null, o = null, delete a.container, delete a.opt, !0
            }
            return !1
        },
        revpause: function() {
            return this.each(function() {
                var a = t(this);
                if (a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0) {
                    a.data("conthover", 1), a.data("conthover-changed", 1), a.trigger("revolution.slide.onpause");
                    var i = a.parent().find(".tp-bannertimer"),
                        n = i.data("opt");
                    n.bannertimeronpause = !0, a.trigger("stoptimer")
                }
            })
        },
        revresume: function() {
            return this.each(function() {
                var a = t(this);
                if (a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0) {
                    a.data("conthover", 0), a.data("conthover-changed", 1), a.trigger("revolution.slide.onresume");
                    var i = a.parent().find(".tp-bannertimer"),
                        n = i.data("opt");
                    n.bannertimeronpause = !1, a.trigger("starttimer")
                }
            })
        },
        revnext: function() {
            return this.each(function() {
                var a = t(this);
                a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0 && a.parent().find(".tp-rightarrow").click()
            })
        },
        revprev: function() {
            return this.each(function() {
                var a = t(this);
                a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0 && a.parent().find(".tp-leftarrow").click()
            })
        },
        revmaxslide: function() {
            return t(this).find(">ul:first-child >li").length
        },
        revcurrentslide: function() {
            var a = t(this);
            if (a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0) {
                var i = a.parent().find(".tp-bannertimer"),
                    n = i.data("opt");
                return n.act
            }
        },
        revlastslide: function() {
            var a = t(this);
            if (a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0) {
                var i = a.parent().find(".tp-bannertimer"),
                    n = i.data("opt");
                return n.lastslide
            }
        },
        revshowslide: function(a) {
            return this.each(function() {
                var i = t(this);
                i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0 && (i.data("showus", a), i.parent().find(".tp-rightarrow").click())
            })
        }
    });
    var n = (function() {
            var t, e, a = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
            };
            for (t in a)
                if (t in document) {
                    e = a[t];
                    break
                }
            return function(a) {
                return a && document.addEventListener(e, a), !document[t]
            }
        }(), function(a, i) {
            var n = document.documentMode === e,
                o = window.chrome;
            n && !o ? t(window).on("focusin", function() {
                return a == e ? !1 : void setTimeout(function() {
                    "on" == i.nextSlideOnWindowFocus && a.revnext(), a.revredraw()
                }, 300)
            }).on("focusout", function() {}) : window.addEventListener ? (window.addEventListener("focus", function() {
                return a == e ? !1 : void setTimeout(function() {
                    "on" == i.nextSlideOnWindowFocus && a.revnext(), a.revredraw()
                }, 300)
            }, !1), window.addEventListener("blur", function() {}, !1)) : (window.attachEvent("focus", function() {
                setTimeout(function() {
                    return a == e ? !1 : ("on" == i.nextSlideOnWindowFocus && a.revnext(), void a.revredraw())
                }, 300)
            }), window.attachEvent("blur", function() {}))
        }),
        o = function(t) {
            for (var e, a = [], i = window.location.href.slice(window.location.href.indexOf(t) + 1).split("_"), n = 0; n < i.length; n++) i[n] = i[n].replace("%3D", "="), e = i[n].split("="), a.push(e[0]), a[e[0]] = e[1];
            return a
        },
        r = function(a, i) {
            if (a == e) return !1;
            try {
                0 != i.hideThumbsUnderResoluition && "thumb" == i.navigationType && t(".tp-bullets").css(i.hideThumbsUnderResoluition > t(window).width() ? {
                    display: "none"
                } : {
                    display: "block"
                })
            } catch (n) {}
            a.find(".defaultimg").each(function() {
                m(t(this), i)
            });
            var o = a.parent();
            t(window).width() < i.hideSliderAtLimit ? (a.trigger("stoptimer"), "none" != o.css("display") && o.data("olddisplay", o.css("display")), o.css({
                display: "none"
            })) : a.is(":hidden") && (o.css(o.data("olddisplay") != e && "undefined" != o.data("olddisplay") && "none" != o.data("olddisplay") ? {
                display: o.data("olddisplay")
            } : {
                display: "block"
            }), a.trigger("restarttimer"), setTimeout(function() {
                r(a, i)
            }, 150));
            var s = 0;
            "on" == i.forceFullWidth && (s = 0 - i.container.parent().offset().left);
            try {
                a.parent().find(".tp-bannershadow").css({
                    width: i.width,
                    left: s
                })
            } catch (n) {}
            var d = a.find(">ul >li:eq(" + i.act + ") .slotholder"),
                l = a.find(">ul >li:eq(" + i.next + ") .slotholder");
            y(a, i, a), punchgs.TweenLite.set(l.find(".defaultimg"), {
                opacity: 0
            }), d.find(".defaultimg").css({
                opacity: 1
            }), l.find(".defaultimg").each(function() {
                var n = t(this);
                "on" == i.panZoomDisableOnMobile || n.data("kenburn") != e && (n.data("kenburn").restart(), N(a, i, !0))
            });
            var h = a.find(">ul >li:eq(" + i.next + ")"),
                c = a.parent().find(".tparrows");
            c.hasClass("preview2") && c.css({
                width: parseInt(c.css("minWidth"), 0)
            }), _(h, i, !0), f(a, i)
        },
        s = function(e, a) {
            var i = t('<div style="display:none;"/>').appendTo(t("body"));
            i.html("<!--[if " + (a || "") + " IE " + (e || "") + "]><a>&nbsp;</a><![endif]-->");
            var n = i.find("a").length;
            return i.remove(), n
        },
        d = function(t, e) {
            t.next == e.find(">ul >li").length - 1 && (t.looptogo = t.looptogo - 1, t.looptogo <= 0 && (t.stopLoop = "on")), L(e, t)
        },
        l = function(e, a) {
            var i = "hidebullets";
            0 == a.hideThumbs && (i = ""), ("bullet" == a.navigationType || "both" == a.navigationType) && e.parent().append('<div class="tp-bullets ' + i + " simplebullets " + a.navigationStyle + '"></div>');
            var n = e.parent().find(".tp-bullets");
            e.find(">ul:first >li").each(function(t) {
                e.find(">ul:first >li:eq(" + t + ") img:first").attr("src");
                n.append('<div class="bullet"></div>');
                n.find(".bullet:first")
            }), n.find(".bullet").each(function(i) {
                var n = t(this);
                i == a.slideamount - 1 && n.addClass("last"), 0 == i && n.addClass("first"), n.click(function() {
                    var t = !1,
                        i = n.index();
                    ("withbullet" == a.navigationArrows || "nexttobullets" == a.navigationArrows) && (i = n.index() - 1), i == a.act && (t = !0), 0 != a.transition || t || (a.next = i, d(a, e))
                })
            }), n.append('<div class="tpclear"></div>'), f(e, a)
        },
        h = function(t, a) {
            function i(e) {
                t.parent().append('<div style="' + n + '" class="tp-' + e + "arrow " + o + " tparrows " + r + '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')
            }
            var n = (t.find(".tp-bullets"), ""),
                o = "hidearrows",
                r = a.navigationStyle;
            0 == a.hideThumbs && (o = ""), "none" == a.navigationArrows && (n = "visibility:hidden;display:none"), a.soloArrowStyle = "default " + a.navigationStyle, "none" != a.navigationArrows && "nexttobullets" != a.navigationArrows && (r = a.soloArrowStyle), i("left"), i("right"), t.parent().find(".tp-rightarrow").click(function() {
                0 == a.transition && (a.next = t.data("showus") != e && -1 != t.data("showus") ? t.data("showus") - 1 : a.next + 1, t.data("showus", -1), a.next >= a.slideamount && (a.next = 0), a.next < 0 && (a.next = 0), a.act != a.next && d(a, t))
            }), t.parent().find(".tp-leftarrow").click(function() {
                0 == a.transition && (a.next = a.next - 1, a.leftarrowpressed = 1, a.next < 0 && (a.next = a.slideamount - 1), d(a, t))
            }), f(t, a)
        },
        c = function(a, i) {
            t(document).keydown(function(t) {
                0 == i.transition && 39 == t.keyCode && (i.next = a.data("showus") != e && -1 != a.data("showus") ? a.data("showus") - 1 : i.next + 1, a.data("showus", -1), i.next >= i.slideamount && (i.next = 0), i.next < 0 && (i.next = 0), i.act != i.next && d(i, a)), 0 == i.transition && 37 == t.keyCode && (i.next = i.next - 1, i.leftarrowpressed = 1, i.next < 0 && (i.next = i.slideamount - 1), d(i, a))
            }), f(a, i)
        },
        p = function(e, a) {
            var i = "vertical";
            "on" == a.touchenabled && (1 == a.drag_block_vertical && (i = "none"), e.swipe({
                allowPageScroll: i,
                fingers: a.swipe_min_touches,
                treshold: a.swipe_treshold,
                swipe: function(n, o) {
                    switch (o) {
                        case "left":
                            0 == a.transition && (a.next = a.next + 1, a.next == a.slideamount && (a.next = 0), d(a, e));
                            break;
                        case "right":
                            0 == a.transition && (a.next = a.next - 1, a.leftarrowpressed = 1, a.next < 0 && (a.next = a.slideamount - 1), d(a, e));
                            break;
                        case "up":
                            "none" == i && t("html, body").animate({
                                scrollTop: e.offset().top + e.height() + "px"
                            });
                            break;
                        case "down":
                            "none" == i && t("html, body").animate({
                                scrollTop: e.offset().top - t(window).height() + "px"
                            })
                    }
                }
            }))
        },
        u = function(t, e) {
            var a = t.parent().find(".tp-bullets"),
                i = t.parent().find(".tparrows");
            if (null == a) {
                t.append('<div class=".tp-bullets"></div>');
                var a = t.parent().find(".tp-bullets")
            }
            if (null == i) {
                t.append('<div class=".tparrows"></div>');
                var i = t.parent().find(".tparrows")
            }
            if (t.data("hideThumbs", e.hideThumbs), a.addClass("hidebullets"), i.addClass("hidearrows"), Z()) try {
                t.hammer().on("touch", function() {
                    t.addClass("hovered"), "on" == e.onHoverStop && t.trigger("stoptimer"), clearTimeout(t.data("hideThumbs")), a.removeClass("hidebullets"), i.removeClass("hidearrows")
                }), t.hammer().on("release", function() {
                    t.removeClass("hovered"), t.trigger("starttimer"), t.hasClass("hovered") || a.hasClass("hovered") || t.data("hideThumbs", setTimeout(function() {
                        a.addClass("hidebullets"), i.addClass("hidearrows"), t.trigger("starttimer")
                    }, e.hideNavDelayOnMobile))
                })
            } catch (n) {} else a.hover(function() {
                e.overnav = !0, "on" == e.onHoverStop && t.trigger("stoptimer"), a.addClass("hovered"), clearTimeout(t.data("hideThumbs")), a.removeClass("hidebullets"), i.removeClass("hidearrows")
            }, function() {
                e.overnav = !1, t.trigger("starttimer"), a.removeClass("hovered"), t.hasClass("hovered") || a.hasClass("hovered") || t.data("hideThumbs", setTimeout(function() {
                    a.addClass("hidebullets"), i.addClass("hidearrows")
                }, e.hideThumbs))
            }), i.hover(function() {
                e.overnav = !0, "on" == e.onHoverStop && t.trigger("stoptimer"), a.addClass("hovered"), clearTimeout(t.data("hideThumbs")), a.removeClass("hidebullets"), i.removeClass("hidearrows")
            }, function() {
                e.overnav = !1, t.trigger("starttimer"), a.removeClass("hovered")
            }), t.on("mouseenter", function() {
                t.addClass("hovered"), "on" == e.onHoverStop && t.trigger("stoptimer"), clearTimeout(t.data("hideThumbs")), a.removeClass("hidebullets"), i.removeClass("hidearrows")
            }), t.on("mouseleave", function() {
                t.removeClass("hovered"), t.trigger("starttimer"), t.hasClass("hovered") || a.hasClass("hovered") || t.data("hideThumbs", setTimeout(function() {
                    a.addClass("hidebullets"), i.addClass("hidearrows")
                }, e.hideThumbs))
            })
        },
        f = function(e, a) {
            var i = e.parent(),
                n = i.find(".tp-bullets");
            if ("thumb" == a.navigationType) {
                n.find(".thumb").each(function() {
                    var e = t(this);
                    e.css({
                        width: a.thumbWidth * a.bw + "px",
                        height: a.thumbHeight * a.bh + "px"
                    })
                });
                var o = n.find(".tp-mask");
                o.width(a.thumbWidth * a.thumbAmount * a.bw), o.height(a.thumbHeight * a.bh), o.parent().width(a.thumbWidth * a.thumbAmount * a.bw), o.parent().height(a.thumbHeight * a.bh)
            }
            var r = i.find(".tp-leftarrow"),
                s = i.find(".tp-rightarrow");
            "thumb" == a.navigationType && "nexttobullets" == a.navigationArrows && (a.navigationArrows = "solo"), "nexttobullets" == a.navigationArrows && (r.prependTo(n).css({
                "float": "left"
            }), s.insertBefore(n.find(".tpclear")).css({
                "float": "left"
            }));
            var d = 0;
            "on" == a.forceFullWidth && (d = 0 - a.container.parent().offset().left);
            var l = 0,
                h = 0;
            if ("on" == a.navigationInGrid && (l = e.width() > a.startwidth ? (e.width() - a.startwidth) / 2 : 0, h = e.height() > a.startheight ? (e.height() - a.startheight) / 2 : 0), "none" != a.navigationArrows && "nexttobullets" != a.navigationArrows) {
                var c = a.soloArrowLeftValign,
                    p = a.soloArrowLeftHalign,
                    u = a.soloArrowRightValign,
                    f = a.soloArrowRightHalign,
                    g = a.soloArrowLeftVOffset,
                    m = a.soloArrowLeftHOffset,
                    v = a.soloArrowRightVOffset,
                    w = a.soloArrowRightHOffset;
                r.css({
                    position: "absolute"
                }), s.css({
                    position: "absolute"
                }), "center" == c ? r.css({
                    top: "50%",
                    marginTop: g - Math.round(r.innerHeight() / 2) + "px"
                }) : "bottom" == c ? r.css({
                    top: "auto",
                    bottom: 0 + g + "px"
                }) : "top" == c && r.css({
                    bottom: "auto",
                    top: 0 + g + "px"
                }), "center" == p ? r.css({
                    left: "50%",
                    marginLeft: d + m - Math.round(r.innerWidth() / 2) + "px"
                }) : "left" == p ? r.css({
                    left: l + m + d + "px"
                }) : "right" == p && r.css({
                    right: l + m - d + "px"
                }), "center" == u ? s.css({
                    top: "50%",
                    marginTop: v - Math.round(s.innerHeight() / 2) + "px"
                }) : "bottom" == u ? s.css({
                    top: "auto",
                    bottom: 0 + v + "px"
                }) : "top" == u && s.css({
                    bottom: "auto",
                    top: 0 + v + "px"
                }), "center" == f ? s.css({
                    left: "50%",
                    marginLeft: d + w - Math.round(s.innerWidth() / 2) + "px"
                }) : "left" == f ? s.css({
                    left: l + w + d + "px"
                }) : "right" == f && s.css({
                    right: l + w - d + "px"
                }), null != r.position() && r.css({
                    top: Math.round(parseInt(r.position().top, 0)) + "px"
                }), null != s.position() && s.css({
                    top: Math.round(parseInt(s.position().top, 0)) + "px"
                })
            }
            "none" == a.navigationArrows && (r.css({
                visibility: "hidden"
            }), s.css({
                visibility: "hidden"
            }));
            var b = a.navigationVAlign,
                y = a.navigationHAlign,
                x = a.navigationVOffset * a.bh,
                T = a.navigationHOffset * a.bw;
            "center" == b && n.css({
                top: "50%",
                marginTop: x - Math.round(n.innerHeight() / 2) + "px"
            }), "bottom" == b && n.css({
                bottom: 0 + x + "px"
            }), "top" == b && n.css({
                top: 0 + x + "px"
            }), "center" == y && n.css({
                left: "50%",
                marginLeft: d + T - Math.round(n.innerWidth() / 2) + "px"
            }), "left" == y && n.css({
                left: 0 + T + d + "px"
            }), "right" == y && n.css({
                right: 0 + T - d + "px"
            })
        },
        g = function(a) {
            var i = a.container;
            a.beforli = a.next - 1, a.comingli = a.next + 1, a.beforli < 0 && (a.beforli = a.slideamount - 1), a.comingli >= a.slideamount && (a.comingli = 0);
            var n = i.find(">ul:first-child >li:eq(" + a.comingli + ")"),
                o = i.find(">ul:first-child >li:eq(" + a.beforli + ")"),
                r = o.find(".defaultimg").attr("src"),
                s = n.find(".defaultimg").attr("src");
            a.arr == e && (a.arr = i.parent().find(".tparrows"), a.rar = i.parent().find(".tp-rightarrow"), a.lar = i.parent().find(".tp-leftarrow"), a.raimg = a.rar.find(".tp-arr-imgholder"), a.laimg = a.lar.find(".tp-arr-imgholder"), a.raimg_b = a.rar.find(".tp-arr-imgholder2"), a.laimg_b = a.lar.find(".tp-arr-imgholder2"), a.ratit = a.rar.find(".tp-arr-titleholder"), a.latit = a.lar.find(".tp-arr-titleholder"));
            var d = a.arr,
                l = a.rar,
                h = a.lar,
                c = a.raimg,
                p = a.laimg,
                u = a.raimg_b,
                f = a.laimg_b,
                g = a.ratit,
                m = a.latit;
            if (n.data("title") != e && g.html(n.data("title")), o.data("title") != e && m.html(o.data("title")), l.hasClass("itishovered") && l.width(g.outerWidth(!0) + parseInt(l.css("minWidth"), 0)), h.hasClass("itishovered") && h.width(m.outerWidth(!0) + parseInt(h.css("minWidth"), 0)), d.hasClass("preview2") && !d.hasClass("hashoveralready"))
                if (d.addClass("hashoveralready"), Z()) {
                    var d = t(this),
                        v = d.find(".tp-arr-titleholder");
                    v.addClass("alwayshidden"), punchgs.TweenLite.set(v, {
                        autoAlpha: 0
                    })
                } else d.hover(function() {
                    var e = t(this),
                        a = e.find(".tp-arr-titleholder");
                    t(window).width() > 767 && e.width(a.outerWidth(!0) + parseInt(e.css("minWidth"), 0)), e.addClass("itishovered")
                }, function() {
                    {
                        var e = t(this);
                        e.find(".tp-arr-titleholder")
                    }
                    e.css({
                        width: parseInt(e.css("minWidth"), 0)
                    }), e.removeClass("itishovered")
                });
            o.data("thumb") != e && (r = o.data("thumb")), n.data("thumb") != e && (s = n.data("thumb")), d.hasClass("preview4") ? (u.css({
                backgroundImage: "url(" + s + ")"
            }), f.css({
                backgroundImage: "url(" + r + ")"
            }), punchgs.TweenLite.fromTo(u, .8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: -c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    c.css({
                        backgroundImage: "url(" + s + ")"
                    }), punchgs.TweenLite.set(u, {
                        x: 0
                    })
                }
            }), punchgs.TweenLite.fromTo(f, .8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    p.css({
                        backgroundImage: "url(" + r + ")"
                    }), punchgs.TweenLite.set(f, {
                        x: 0
                    })
                }
            }), punchgs.TweenLite.fromTo(c, .8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: -c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    punchgs.TweenLite.set(c, {
                        x: 0
                    })
                }
            }), punchgs.TweenLite.fromTo(p, .8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    punchgs.TweenLite.set(p, {
                        x: 0
                    })
                }
            })) : (punchgs.TweenLite.to(c, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    c.css({
                        backgroundImage: "url(" + s + ")"
                    }), p.css({
                        backgroundImage: "url(" + r + ")"
                    })
                }
            }), punchgs.TweenLite.to(p, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    punchgs.TweenLite.to(c, .5, {
                        autoAlpha: 1,
                        delay: .2
                    }), punchgs.TweenLite.to(p, .5, {
                        autoAlpha: 1,
                        delay: .2
                    })
                }
            })), l.hasClass("preview4") && !l.hasClass("hashoveralready") && (l.addClass("hashoveralready"), l.hover(function() {
                var e = t(this).find(".tp-arr-iwrapper"),
                    a = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(e, .4, {
                    x: e.width()
                }, {
                    x: 0,
                    delay: .3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                }), punchgs.TweenLite.to(a, .2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var e = t(this).find(".tp-arr-iwrapper"),
                    a = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(e, .4, {
                    x: e.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: .2,
                    overwrite: "all"
                }), punchgs.TweenLite.to(a, .2, {
                    delay: .6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            }), h.hover(function() {
                var e = t(this).find(".tp-arr-iwrapper"),
                    a = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(e, .4, {
                    x: 0 - e.width()
                }, {
                    x: 0,
                    delay: .3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                }), punchgs.TweenLite.to(a, .2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var e = t(this).find(".tp-arr-iwrapper"),
                    a = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(e, .4, {
                    x: 0 - e.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: .2,
                    overwrite: "all"
                }), punchgs.TweenLite.to(a, .2, {
                    delay: .6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            }))
        },
        m = function(a, i) {
            if (i.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({
                    height: i.container.height()
                }), i.container.closest(".rev_slider_wrapper").css({
                    height: i.container.height()
                }), i.width = parseInt(i.container.width(), 0), i.height = parseInt(i.container.height(), 0), i.bw = i.width / i.startwidth, i.bh = i.height / i.startheight, i.bh > i.bw && (i.bh = i.bw), i.bh < i.bw && (i.bw = i.bh), i.bw < i.bh && (i.bh = i.bw), i.bh > 1 && (i.bw = 1, i.bh = 1), i.bw > 1 && (i.bw = 1, i.bh = 1), i.height = Math.round(i.startheight * (i.width / i.startwidth)), i.height > i.startheight && "on" != i.autoHeight && (i.height = i.startheight), "on" == i.fullScreen) {
                i.height = i.bw * i.startheight;
                var n = (i.container.parent().width(), t(window).height());
                if (i.fullScreenOffsetContainer != e) {
                    try {
                        var o = i.fullScreenOffsetContainer.split(",");
                        t.each(o, function(e, a) {
                            n -= t(a).outerHeight(!0), n < i.minFullScreenHeight && (n = i.minFullScreenHeight)
                        })
                    } catch (r) {}
                    try {
                        i.fullScreenOffset.split("%").length > 1 && i.fullScreenOffset != e && i.fullScreenOffset.length > 0 ? n -= t(window).height() * parseInt(i.fullScreenOffset, 0) / 100 : i.fullScreenOffset != e && i.fullScreenOffset.length > 0 && (n -= parseInt(i.fullScreenOffset, 0)), n < i.minFullScreenHeight && (n = i.minFullScreenHeight)
                    } catch (r) {}
                }
                i.container.parent().height(n), i.container.closest(".rev_slider_wrapper").height(n), i.container.css({
                    height: "100%"
                }), i.height = n, i.minHeight != e && i.height < i.minHeight && (i.height = i.minHeight)
            } else i.minHeight != e && i.height < i.minHeight && (i.height = i.minHeight), i.container.height(i.height);
            i.slotw = Math.ceil(i.width / i.slots), i.sloth = Math.ceil("on" == i.fullScreen ? t(window).height() / i.slots : i.height / i.slots), "on" == i.autoHeight && (i.sloth = Math.ceil(a.height() / i.slots))
        },
        v = function(a, i) {
            a.find(".tp-caption").each(function() {
                t(this).addClass(t(this).data("transition")), t(this).addClass("start")
            }), a.find(">ul:first").css({
                overflow: "hidden",
                width: "100%",
                height: "100%",
                maxHeight: a.parent().css("maxHeight")
            }).addClass("tp-revslider-mainul"), "on" == i.autoHeight && (a.find(">ul:first").css({
                overflow: "hidden",
                width: "100%",
                height: "100%",
                maxHeight: "none"
            }), a.css({
                maxHeight: "none"
            }), a.parent().css({
                maxHeight: "none"
            })), a.find(">ul:first >li").each(function() {
                var i = t(this);
                if (i.addClass("tp-revslider-slidesli"), i.css({
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }), i.data("link") != e) {
                    var n = i.data("link"),
                        o = "_self",
                        r = 60;
                    "back" == i.data("slideindex") && (r = 0);
                    var s = checksl = i.data("linktoslide");
                    s != e && "next" != s && "prev" != s && a.find(">ul:first-child >li").each(function() {
                        var e = t(this);
                        e.data("origindex") + 1 == checksl && (s = e.index() + 1)
                    }), i.data("target") != e && (o = i.data("target")), "slide" != n && (s = "no");
                    var d = '<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + r + ';" data-x="center" data-y="center" data-linktoslide="' + s + '" data-start="0"><a style="width:100%;height:100%;display:block"';
                    "slide" != n && (d = d + ' target="' + o + '" href="' + n + '"'), d += '><span style="width:100%;height:100%;display:block"></span></a></div>', i.append(d)
                }
            }), a.parent().css({
                overflow: "visible"
            }), a.find(">ul:first >li >img").each(function(a) {
                var n = t(this);
                n.addClass("defaultimg"), n.data("lazyload") != e && 1 != n.data("lazydone") || m(n, i), s(8) && n.data("kenburns", "off"), "on" == i.panZoomDisableOnMobile && Z() && (n.data("kenburns", "off"), n.data("bgfit", "cover")), n.wrap('<div class="slotholder" style="width:100%;height:100%;"data-duration="' + n.data("duration") + '"data-zoomstart="' + n.data("zoomstart") + '"data-zoomend="' + n.data("zoomend") + '"data-rotationstart="' + n.data("rotationstart") + '"data-rotationend="' + n.data("rotationend") + '"data-ease="' + n.data("ease") + '"data-duration="' + n.data("duration") + '"data-bgpositionend="' + n.data("bgpositionend") + '"data-bgposition="' + n.data("bgposition") + '"data-duration="' + n.data("duration") + '"data-kenburns="' + n.data("kenburns") + '"data-easeme="' + n.data("ease") + '"data-bgfit="' + n.data("bgfit") + '"data-bgfitend="' + n.data("bgfitend") + '"data-owidth="' + n.data("owidth") + '"data-oheight="' + n.data("oheight") + '"></div>'), "none" != i.dottedOverlay && i.dottedOverlay != e && n.closest(".slotholder").append('<div class="tp-dottedoverlay ' + i.dottedOverlay + '"></div>');
                var o = n.attr("src"),
                    r = (n.data("lazyload"), n.data("bgfit")),
                    d = n.data("bgrepeat"),
                    l = n.data("bgposition");
                r == e && (r = "cover"), d == e && (d = "no-repeat"), l == e && (l = "center center");
                var h = n.closest(".slotholder");
                n.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + n.data("lazyload") + '" data-bgfit="' + r + '"data-bgposition="' + l + '" data-bgrepeat="' + d + '" data-lazydone="' + n.data("lazydone") + '" src="' + o + '" data-src="' + o + '" style="background-color:' + n.css("backgroundColor") + ";background-repeat:" + d + ";background-image:url(" + o + ");background-size:" + r + ";background-position:" + l + ';width:100%;height:100%;"></div>'), s(8) && (h.find(".tp-bgimg").css({
                    backgroundImage: "none",
                    "background-image": "none"
                }), h.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="' + o + '" style="width:100%">')), n.css({
                    opacity: 0
                }), n.data("li-id", a)
            })
        },
        w = function(t, a, i, n) {
            var o = t,
                r = o.find(".defaultimg"),
                d = o.data("zoomstart"),
                l = o.data("rotationstart");
            r.data("currotate") != e && (l = r.data("currotate")), r.data("curscale") != e && "box" == n ? d = 100 * r.data("curscale") : r.data("curscale") != e && (d = r.data("curscale")), m(r, a);
            var h = r.data("src"),
                c = r.css("backgroundColor"),
                p = a.width,
                u = a.height,
                f = r.data("fxof"),
                g = 0;
            "on" == a.autoHeight && (u = a.container.height()), f == e && (f = 0);
            var v = 0,
                w = r.data("bgfit"),
                y = r.data("bgrepeat"),
                x = r.data("bgposition");
            if (w == e && (w = "cover"), y == e && (y = "no-repeat"), x == e && (x = "center center"), s(8)) {
                o.data("kenburns", "off");
                var T = h;
                h = ""
            }
            switch (n) {
                case "box":
                    var k = 0,
                        L = 0,
                        C = 0;
                    if (k = a.sloth > a.slotw ? a.sloth : a.slotw, !i) var v = 0 - k;
                    a.slotw = k, a.sloth = k;
                    var L = 0,
                        C = 0;
                    "on" == o.data("kenburns") && (w = d, w.toString().length < 4 && (w = U(w, o, a)));
                    for (var z = 0; z < a.slots; z++) {
                        C = 0;
                        for (var O = 0; O < a.slots; O++) o.append('<div class="slot" style="position:absolute;top:' + (g + C) + "px;left:" + (f + L) + "px;width:" + k + "px;height:" + k + 'px;overflow:hidden;"><div class="slotslide" data-x="' + L + '" data-y="' + C + '" style="position:absolute;top:0px;left:0px;width:' + k + "px;height:" + k + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - C) + "px;left:" + (0 - L) + "px;width:" + p + "px;height:" + u + "px;background-color:" + c + ";background-image:url(" + h + ");background-repeat:" + y + ";background-size:" + w + ";background-position:" + x + ';"></div></div></div>'), C += k, s(8) && (o.find(".slot ").last().find(".slotslide").append('<img src="' + T + '">'), b(o, a)), d != e && l != e && punchgs.TweenLite.set(o.find(".slot").last(), {
                            rotationZ: l
                        });
                        L += k
                    }
                    break;
                case "vertical":
                case "horizontal":
                    if ("on" == o.data("kenburns") && (w = d, w.toString().length < 4 && (w = U(w, o, a))), "horizontal" == n) {
                        if (!i) var v = 0 - a.slotw;
                        for (var O = 0; O < a.slots; O++) o.append('<div class="slot" style="position:absolute;top:' + (0 + g) + "px;left:" + (f + O * a.slotw) + "px;overflow:hidden;width:" + (a.slotw + .6) + "px;height:" + u + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + v + "px;width:" + (a.slotw + .6) + "px;height:" + u + 'px;overflow:hidden;"><div style="background-color:' + c + ";position:absolute;top:0px;left:" + (0 - O * a.slotw) + "px;width:" + p + "px;height:" + u + "px;background-image:url(" + h + ");background-repeat:" + y + ";background-size:" + w + ";background-position:" + x + ';"></div></div></div>'), d != e && l != e && punchgs.TweenLite.set(o.find(".slot").last(), {
                            rotationZ: l
                        }), s(8) && (o.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + T + '" style="width:100%;height:auto">'), b(o, a))
                    } else {
                        if (!i) var v = 0 - a.sloth;
                        for (var O = 0; O < a.slots + 2; O++) o.append('<div class="slot" style="position:absolute;top:' + (g + O * a.sloth) + "px;left:" + f + "px;overflow:hidden;width:" + p + "px;height:" + a.sloth + 'px"><div class="slotslide" style="position:absolute;top:' + v + "px;left:0px;width:" + p + "px;height:" + a.sloth + 'px;overflow:hidden;"><div style="background-color:' + c + ";position:absolute;top:" + (0 - O * a.sloth) + "px;left:0px;width:" + p + "px;height:" + u + "px;background-image:url(" + h + ");background-repeat:" + y + ";background-size:" + w + ";background-position:" + x + ';"></div></div></div>'), d != e && l != e && punchgs.TweenLite.set(o.find(".slot").last(), {
                            rotationZ: l
                        }), s(8) && (o.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + T + '" style="width:100%;height:auto;">'), b(o, a))
                    }
            }
        },
        b = function(t, e) {
            if (s(8)) {
                {
                    var a = t.find(".ieeightfallbackimage");
                    a.width(), a.height()
                }
                a.css(e.startwidth / e.startheight < t.data("owidth") / t.data("oheight") ? {
                    width: "auto",
                    height: "100%"
                } : {
                    width: "100%",
                    height: "auto"
                }), setTimeout(function() {
                    var i = a.width(),
                        n = a.height(),
                        o = t.data("bgposition");
                    "center center" == o && a.css({
                        position: "absolute",
                        top: e.height / 2 - n / 2 + "px",
                        left: e.width / 2 - i / 2 + "px"
                    }), ("center top" == o || "top center" == o) && a.css({
                        position: "absolute",
                        top: "0px",
                        left: e.width / 2 - i / 2 + "px"
                    }), ("center bottom" == o || "bottom center" == o) && a.css({
                        position: "absolute",
                        bottom: "0px",
                        left: e.width / 2 - i / 2 + "px"
                    }), ("right top" == o || "top right" == o) && a.css({
                        position: "absolute",
                        top: "0px",
                        right: "0px"
                    }), ("right bottom" == o || "bottom right" == o) && a.css({
                        position: "absolute",
                        bottom: "0px",
                        right: "0px"
                    }), ("right center" == o || "center right" == o) && a.css({
                        position: "absolute",
                        top: e.height / 2 - n / 2 + "px",
                        right: "0px"
                    }), ("left bottom" == o || "bottom left" == o) && a.css({
                        position: "absolute",
                        bottom: "0px",
                        left: "0px"
                    }), ("left center" == o || "center left" == o) && a.css({
                        position: "absolute",
                        top: e.height / 2 - n / 2 + "px",
                        left: "0px"
                    })
                }, 20)
            }
        },
        y = function(e, a, i) {
            i.find(".slot").each(function() {
                t(this).remove()
            }), a.transition = 0
        },
        x = function(a, i) {
            a.find("img, .defaultimg").each(function() {
                var a = t(this),
                    n = a.data("lazyload");
                if (n != a.attr("src") && 3 > i && n != e && "undefined" != n) {
                    if (n != e && "undefined" != n) {
                        a.attr("src", n);
                        var o = new Image;
                        o.onload = function() {
                            a.data("lazydone", 1), a.hasClass("defaultimg") && T(a, o)
                        }, o.error = function() {
                            a.data("lazydone", 1)
                        }, o.src = a.attr("src"), o.complete && (a.hasClass("defaultimg") && T(a, o), a.data("lazydone", 1))
                    }
                } else if ((n === e || "undefined" === n) && 1 != a.data("lazydone")) {
                    var o = new Image;
                    o.onload = function() {
                        a.hasClass("defaultimg") && T(a, o), a.data("lazydone", 1)
                    }, o.error = function() {
                        a.data("lazydone", 1)
                    }, o.src = a.attr("src") != e && "undefined" != a.attr("src") ? a.attr("src") : a.data("src"), o.complete && (a.hasClass("defaultimg") && T(a, o), a.data("lazydone", 1))
                }
            })
        },
        T = function(t, e) {
            var a = t.closest("li"),
                i = e.width,
                n = e.height;
            a.data("owidth", i), a.data("oheight", n), a.find(".slotholder").data("owidth", i), a.find(".slotholder").data("oheight", n), a.data("loadeddone", 1)
        },
        k = function(a, i, n) {
            x(a, 0);
            var o = setInterval(function() {
                n.bannertimeronpause = !0, n.container.trigger("stoptimer"), n.cd = 0;
                var r = 0;
                a.find("img, .defaultimg").each(function() {
                    1 != t(this).data("lazydone") && r++
                }), r > 0 ? x(a, r) : (clearInterval(o), i != e && i())
            }, 100)
        },
        L = function(t, a) {
            try {
                {
                    t.find(">ul:first-child >li:eq(" + a.act + ")")
                }
            } catch (i) {
                {
                    t.find(">ul:first-child >li:eq(1)")
                }
            }
            a.lastslide = a.act;
            var n = t.find(">ul:first-child >li:eq(" + a.next + ")"),
                o = n.find(".defaultimg");
            a.bannertimeronpause = !0, t.trigger("stoptimer"), a.cd = 0, o.data("lazyload") != e && "undefined" != o.data("lazyload") && 1 != o.data("lazydone") ? (s(8) ? o.attr("src", n.find(".defaultimg").data("lazyload")) : o.css({
                backgroundImage: 'url("' + n.find(".defaultimg").data("lazyload") + '")'
            }), o.data("src", n.find(".defaultimg").data("lazyload")), o.data("lazydone", 0), o.data("orgw", 0), n.data("loadeddone", 1), t.find(".tp-loader").css({
                display: "block"
            }), k(t.find(".tp-static-layers"), function() {
                k(n, function() {
                    var e = n.find(".slotholder");
                    if ("on" == e.data("kenburns")) var i = setInterval(function() {
                        var n = e.data("owidth");
                        n >= 0 && (clearInterval(i), C(a, o, t))
                    }, 10);
                    else C(a, o, t)
                }, a)
            }, a)) : n.data("loadeddone") === e ? (n.data("loadeddone", 1), k(n, function() {
                C(a, o, t)
            }, a)) : C(a, o, t)
        },
        C = function(t, e, a) {
            t.bannertimeronpause = !1, t.cd = 0, a.trigger("nulltimer"), a.find(".tp-loader").css({
                display: "none"
            }), m(e, t), f(a, t), m(e, t), z(a, t)
        },
        z = function(t, a) {
            t.trigger("revolution.slide.onbeforeswap"), a.transition = 1, a.videoplaying = !1;
            try {
                var i = t.find(">ul:first-child >li:eq(" + a.act + ")")
            } catch (n) {
                var i = t.find(">ul:first-child >li:eq(1)")
            }
            a.lastslide = a.act;
            var o = t.find(">ul:first-child >li:eq(" + a.next + ")");
            setTimeout(function() {
                g(a)
            }, 200);
            var r = i.find(".slotholder"),
                s = o.find(".slotholder");
            ("on" == s.data("kenburns") || "on" == r.data("kenburns")) && (J(t, a), t.find(".kenburnimg").remove()), o.data("delay") != e ? (a.cd = 0, a.delay = o.data("delay")) : a.delay = a.origcd, 1 == a.firststart && punchgs.TweenLite.set(i, {
                autoAlpha: 0
            }), punchgs.TweenLite.set(i, {
                zIndex: 18
            }), punchgs.TweenLite.set(o, {
                autoAlpha: 0,
                zIndex: 20
            });
            var d = 0;
            i.index() != o.index() && 1 != a.firststart && (d = B(i, a)), "on" != i.data("saveperformance") && (d = 0), setTimeout(function() {
                t.trigger("restarttimer"), O(t, a, o, i, r, s)
            }, d)
        },
        O = function(a, i, n, o, r, d) {
            function l() {
                t.each(g, function(t, e) {
                    (e[0] == u || e[8] == u) && (h = e[1], f = e[2], b = y), y += 1
                })
            }
            "prepared" == n.data("differentissplayed") && (n.data("differentissplayed", "done"), n.data("transition", n.data("savedtransition")), n.data("slotamount", n.data("savedslotamount")), n.data("masterspeed", n.data("savedmasterspeed"))), n.data("fstransition") != e && "done" != n.data("differentissplayed") && (n.data("savedtransition", n.data("transition")), n.data("savedslotamount", n.data("slotamount")), n.data("savedmasterspeed", n.data("masterspeed")), n.data("transition", n.data("fstransition")), n.data("slotamount", n.data("fsslotamount")), n.data("masterspeed", n.data("fsmasterspeed")), n.data("differentissplayed", "prepared")), a.find(".active-revslide").removeClass(".active-revslide"), n.addClass("active-revslide"), n.data("transition") == e && n.data("transition", "random");
            var h = 0,
                c = n.data("transition").split(","),
                p = n.data("nexttransid") == e ? -1 : n.data("nexttransid");
            "on" == n.data("randomtransition") ? p = Math.round(Math.random() * c.length) : p += 1, p == c.length && (p = 0), n.data("nexttransid", p);
            var u = c[p];
            i.ie && ("boxfade" == u && (u = "boxslide"), "slotfade-vertical" == u && (u = "slotzoom-vertical"), "slotfade-horizontal" == u && (u = "slotzoom-horizontal")), s(8) && (u = 11);
            var f = 0;
            "scroll" == i.parallax && i.parallaxFirstGo == e && (i.parallaxFirstGo = !0, K(a, i), setTimeout(function() {
                K(a, i)
            }, 210), setTimeout(function() {
                K(a, i)
            }, 420)), "slidehorizontal" == u && (u = "slideleft", 1 == i.leftarrowpressed && (u = "slideright")), "slidevertical" == u && (u = "slideup", 1 == i.leftarrowpressed && (u = "slidedown")), "parallaxhorizontal" == u && (u = "parallaxtoleft", 1 == i.leftarrowpressed && (u = "parallaxtoright")), "parallaxvertical" == u && (u = "parallaxtotop", 1 == i.leftarrowpressed && (u = "parallaxtobottom"));
            var g = [
                    ["boxslide", 0, 1, 10, 0, "box", !1, null, 0],
                    ["boxfade", 1, 0, 10, 0, "box", !1, null, 1],
                    ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2],
                    ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3],
                    ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4],
                    ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5],
                    ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6],
                    ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7],
                    ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8],
                    ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9],
                    ["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10],
                    ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11],
                    ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12],
                    ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13],
                    ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14],
                    ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15],
                    ["papercut", 16, 0, 0, 600, "", null, null, 16],
                    ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17],
                    ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18],
                    ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19],
                    ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20],
                    ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21],
                    ["turnoff", 21, 0, 1, 1600, "horizontal", !1, !0, 22],
                    ["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23],
                    ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24],
                    ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25],
                    ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26],
                    ["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27],
                    ["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28],
                    ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29],
                    ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30],
                    ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31],
                    ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32],
                    ["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", !0, !0, 33],
                    ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34],
                    ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35],
                    ["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36],
                    ["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37],
                    ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38],
                    ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39],
                    ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40],
                    ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41],
                    ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42],
                    ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43],
                    ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44],
                    ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45],
                    ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46]
                ],
                m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                v = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                h = 0,
                f = 1,
                b = 0,
                y = 0,
                x = new Array;
            "on" == d.data("kenburns") && (("boxslide" == u || 0 == u || "boxfade" == u || 1 == u || "papercut" == u || 16 == u) && (u = 11), N(a, i, !0, !0)), "random" == u && (u = Math.round(Math.random() * g.length - 1), u > g.length - 1 && (u = g.length - 1)), "random-static" == u && (u = Math.round(Math.random() * m.length - 1), u > m.length - 1 && (u = m.length - 1), u = m[u]), "random-premium" == u && (u = Math.round(Math.random() * v.length - 1), u > v.length - 1 && (u = v.length - 1), u = v[u]);
            var T = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
            if (1 == i.isJoomla && window.MooTools != e && -1 != T.indexOf(u)) {
                var k = Math.round(Math.random() * (v.length - 2)) + 1;
                k > v.length - 1 && (k = v.length - 1), 0 == k && (k = 1), u = v[k]
            }
            l(), s(8) && h > 15 && 28 > h && (u = Math.round(Math.random() * m.length - 1), u > m.length - 1 && (u = m.length - 1), u = m[u], y = 0, l());
            var L = -1;
            (1 == i.leftarrowpressed || i.act > i.next) && (L = 1), i.leftarrowpressed = 0, h > 26 && (h = 26), 0 > h && (h = 0);
            var C = 300;
            n.data("masterspeed") != e && n.data("masterspeed") > 99 && n.data("masterspeed") < i.delay && (C = n.data("masterspeed")), n.data("masterspeed") != e && n.data("masterspeed") > i.delay && (C = i.delay), x = g[b], a.parent().find(".bullet").each(function() {
                var e = t(this),
                    a = e.index();
                e.removeClass("selected"), ("withbullet" == i.navigationArrows || "nexttobullets" == i.navigationArrows) && (a = e.index() - 1), a == i.next && e.addClass("selected")
            });
            var z = new punchgs.TimelineLite({
                onComplete: function() {
                    I(a, i, d, r, n, o, z)
                }
            });
            if (z.add(punchgs.TweenLite.set(d.find(".defaultimg"), {
                    opacity: 0
                })), z.pause(), n.data("slotamount") == e || n.data("slotamount") < 1 ? (i.slots = Math.round(12 * Math.random() + 4), "boxslide" == u ? i.slots = Math.round(6 * Math.random() + 3) : "flyin" == u && (i.slots = Math.round(4 * Math.random() + 1))) : i.slots = n.data("slotamount"), i.rotate = n.data("rotate") == e ? 0 : 999 == n.data("rotate") ? Math.round(360 * Math.random()) : n.data("rotate"), (!t.support.transition || i.ie || i.ie9) && (i.rotate = 0), 1 == i.firststart && (i.firststart = 0), C += x[4], (4 == h || 5 == h || 6 == h) && i.slots < 3 && (i.slots = 3), 0 != x[3] && (i.slots = Math.min(i.slots, x[3])), 9 == h && (i.slots = i.width / 20), 10 == h && (i.slots = i.height / 20), null != x[7] && w(r, i, x[7], x[5]), null != x[6] && w(d, i, x[6], x[5]), 0 == h) {
                var O = Math.ceil(i.height / i.sloth),
                    A = 0;
                d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    A += 1, A == O && (A = 0), z.add(punchgs.TweenLite.from(a, C / 600, {
                        opacity: 0,
                        top: 0 - i.sloth,
                        left: 0 - i.slotw,
                        rotation: i.rotate,
                        force3D: "auto",
                        ease: punchgs.Power2.easeOut
                    }), (15 * e + 30 * A) / 1500)
                })
            }
            if (1 == h) {
                var M, S = 0;
                d.find(".slotslide").each(function(e) {
                    var a = t(this),
                        n = Math.random() * C + 300,
                        o = 500 * Math.random() + 200;
                    n + o > M && (M = o + o, S = e), z.add(punchgs.TweenLite.from(a, n / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        rotation: i.rotate,
                        ease: punchgs.Power2.easeInOut
                    }), o / 1e3)
                })
            }
            if (2 == h) {
                var P = new punchgs.TimelineLite;
                r.find(".slotslide").each(function() {
                    var e = t(this);
                    P.add(punchgs.TweenLite.to(e, C / 1e3, {
                        left: i.slotw,
                        force3D: "auto",
                        rotation: 0 - i.rotate
                    }), 0), z.add(P, 0)
                }), d.find(".slotslide").each(function() {
                    var e = t(this);
                    P.add(punchgs.TweenLite.from(e, C / 1e3, {
                        left: 0 - i.slotw,
                        force3D: "auto",
                        rotation: i.rotate
                    }), 0), z.add(P, 0)
                })
            }
            if (3 == h) {
                var P = new punchgs.TimelineLite;
                r.find(".slotslide").each(function() {
                    var e = t(this);
                    P.add(punchgs.TweenLite.to(e, C / 1e3, {
                        top: i.sloth,
                        rotation: i.rotate,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), z.add(P, 0)
                }), d.find(".slotslide").each(function() {
                    var e = t(this);
                    P.add(punchgs.TweenLite.from(e, C / 1e3, {
                        top: 0 - i.sloth,
                        rotation: i.rotate,
                        ease: punchgs.Power2.easeOut,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), z.add(P, 0)
                })
            }
            if (4 == h || 5 == h) {
                setTimeout(function() {
                    r.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var D = C / 1e3,
                    P = new punchgs.TimelineLite;
                r.find(".slotslide").each(function(e) {
                    var a = t(this),
                        n = e * D / i.slots;
                    5 == h && (n = (i.slots - e - 1) * D / i.slots / 1.5), P.add(punchgs.TweenLite.to(a, 3 * D, {
                        transformPerspective: 600,
                        force3D: "auto",
                        top: 0 + i.height,
                        opacity: .5,
                        rotation: i.rotate,
                        ease: punchgs.Power2.easeInOut,
                        delay: n
                    }), 0), z.add(P, 0)
                }), d.find(".slotslide").each(function(e) {
                    var a = t(this),
                        n = e * D / i.slots;
                    5 == h && (n = (i.slots - e - 1) * D / i.slots / 1.5), P.add(punchgs.TweenLite.from(a, 3 * D, {
                        top: 0 - i.height,
                        opacity: .5,
                        rotation: i.rotate,
                        force3D: "auto",
                        ease: punchgs.Power2.easeInOut,
                        delay: n
                    }), 0), z.add(P, 0)
                })
            }
            if (6 == h) {
                i.slots < 2 && (i.slots = 2), i.slots % 2 && (i.slots = i.slots + 1);
                var P = new punchgs.TimelineLite;
                setTimeout(function() {
                    r.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), r.find(".slotslide").each(function(e) {
                    var a = t(this);
                    if (e + 1 < i.slots / 2) var n = 90 * (e + 2);
                    else var n = 90 * (2 + i.slots - e);
                    P.add(punchgs.TweenLite.to(a, (C + n) / 1e3, {
                        top: 0 + i.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: i.rotate,
                        ease: punchgs.Power2.easeInOut
                    }), 0), z.add(P, 0)
                }), d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    if (e + 1 < i.slots / 2) var n = 90 * (e + 2);
                    else var n = 90 * (2 + i.slots - e);
                    P.add(punchgs.TweenLite.from(a, (C + n) / 1e3, {
                        top: 0 - i.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: i.rotate,
                        ease: punchgs.Power2.easeInOut
                    }), 0), z.add(P, 0)
                })
            }
            if (7 == h) {
                C = 2 * C, C > i.delay && (C = i.delay);
                var P = new punchgs.TimelineLite;
                setTimeout(function() {
                    r.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), r.find(".slotslide").each(function() {
                    var e = t(this).find("div");
                    P.add(punchgs.TweenLite.to(e, C / 1e3, {
                        left: 0 - i.slotw / 2 + "px",
                        top: 0 - i.height / 2 + "px",
                        width: 2 * i.slotw + "px",
                        height: 2 * i.height + "px",
                        opacity: 0,
                        rotation: i.rotate,
                        force3D: "auto",
                        ease: punchgs.Power2.easeOut
                    }), 0), z.add(P, 0)
                }), d.find(".slotslide").each(function(e) {
                    var a = t(this).find("div");
                    P.add(punchgs.TweenLite.fromTo(a, C / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        transformPerspective: 600
                    }, {
                        left: 0 - e * i.slotw + "px",
                        ease: punchgs.Power2.easeOut,
                        force3D: "auto",
                        top: "0px",
                        width: i.width,
                        height: i.height,
                        opacity: 1,
                        rotation: 0,
                        delay: .1
                    }), 0), z.add(P, 0)
                })
            }
            if (8 == h) {
                C = 3 * C, C > i.delay && (C = i.delay);
                var P = new punchgs.TimelineLite;
                r.find(".slotslide").each(function() {
                    var e = t(this).find("div");
                    P.add(punchgs.TweenLite.to(e, C / 1e3, {
                        left: 0 - i.width / 2 + "px",
                        top: 0 - i.sloth / 2 + "px",
                        width: 2 * i.width + "px",
                        height: 2 * i.sloth + "px",
                        force3D: "auto",
                        opacity: 0,
                        rotation: i.rotate
                    }), 0), z.add(P, 0)
                }), d.find(".slotslide").each(function(e) {
                    var a = t(this).find("div");
                    P.add(punchgs.TweenLite.fromTo(a, C / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        force3D: "auto"
                    }, {
                        left: "0px",
                        top: 0 - e * i.sloth + "px",
                        width: d.find(".defaultimg").data("neww") + "px",
                        height: d.find(".defaultimg").data("newh") + "px",
                        opacity: 1,
                        rotation: 0
                    }), 0), z.add(P, 0)
                })
            }
            if (9 == h || 10 == h) {
                var H = 0;
                d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    H++, z.add(punchgs.TweenLite.fromTo(a, C / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        transformPerspective: 600
                    }, {
                        autoAlpha: 1,
                        ease: punchgs.Power2.easeInOut,
                        delay: 5 * e / 1e3
                    }), 0)
                })
            }
            if (11 == h || 26 == h) {
                var H = 0;
                26 == h && (C = 0), d.find(".slotslide").each(function() {
                    var e = t(this);
                    z.add(punchgs.TweenLite.from(e, C / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: punchgs.Power2.easeInOut
                    }), 0)
                })
            }
            if (12 == h || 13 == h || 14 == h || 15 == h) {
                C = C, C > i.delay && (C = i.delay), setTimeout(function() {
                    punchgs.TweenLite.set(r.find(".defaultimg"), {
                        autoAlpha: 0
                    })
                }, 100);
                var W = i.width,
                    X = i.height,
                    F = d.find(".slotslide"),
                    Y = 0,
                    R = 0,
                    B = 1,
                    V = 1,
                    q = 1,
                    E = punchgs.Power2.easeInOut,
                    j = punchgs.Power2.easeInOut,
                    Z = C / 1e3,
                    U = Z;
                ("on" == i.fullWidth || "on" == i.fullScreen) && (W = F.width(), X = F.height()), 12 == h ? Y = W : 15 == h ? Y = 0 - W : 13 == h ? R = X : 14 == h && (R = 0 - X), 1 == f && (B = 0), 2 == f && (B = 0), 3 == f && (E = punchgs.Power2.easeInOut, j = punchgs.Power1.easeInOut, Z = C / 1200), (4 == f || 5 == f) && (V = .6), 6 == f && (V = 1.4), (5 == f || 6 == f) && (q = 1.4, B = 0, W = 0, X = 0, Y = 0, R = 0), 6 == f && (q = .6);
                z.add(punchgs.TweenLite.from(F, Z, {
                    left: Y,
                    top: R,
                    scale: q,
                    opacity: B,
                    rotation: i.rotate,
                    ease: j,
                    force3D: "auto"
                }), 0);
                var G = r.find(".slotslide");
                if ((4 == f || 5 == f) && (W = 0, X = 0), 1 != f) switch (h) {
                    case 12:
                        z.add(punchgs.TweenLite.to(G, U, {
                            left: 0 - W + "px",
                            force3D: "auto",
                            scale: V,
                            opacity: B,
                            rotation: i.rotate,
                            ease: E
                        }), 0);
                        break;
                    case 15:
                        z.add(punchgs.TweenLite.to(G, U, {
                            left: W + "px",
                            force3D: "auto",
                            scale: V,
                            opacity: B,
                            rotation: i.rotate,
                            ease: E
                        }), 0);
                        break;
                    case 13:
                        z.add(punchgs.TweenLite.to(G, U, {
                            top: 0 - X + "px",
                            force3D: "auto",
                            scale: V,
                            opacity: B,
                            rotation: i.rotate,
                            ease: E
                        }), 0);
                        break;
                    case 14:
                        z.add(punchgs.TweenLite.to(G, U, {
                            top: X + "px",
                            force3D: "auto",
                            scale: V,
                            opacity: B,
                            rotation: i.rotate,
                            ease: E
                        }), 0)
                }
            }
            if (16 == h) {
                var P = new punchgs.TimelineLite;
                z.add(punchgs.TweenLite.set(o, {
                    position: "absolute",
                    "z-index": 20
                }), 0), z.add(punchgs.TweenLite.set(n, {
                    position: "absolute",
                    "z-index": 15
                }), 0), o.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), o.find(".tp-half-one").clone(!0).appendTo(o).addClass("tp-half-two"), o.find(".tp-half-two").removeClass("tp-half-one");
                var W = i.width,
                    X = i.height;
                "on" == i.autoHeight && (X = a.height()), o.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + W + "px;height:" + X + 'px;"></div>'), o.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + W + "px;height:" + X + 'px;"></div>'), o.find(".tp-half-two .defaultimg").css({
                    position: "absolute",
                    top: "-50%"
                }), o.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'), z.add(punchgs.TweenLite.set(o.find(".tp-half-two"), {
                    width: W,
                    height: X,
                    overflow: "hidden",
                    zIndex: 15,
                    position: "absolute",
                    top: X / 2,
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center bottom"
                }), 0), z.add(punchgs.TweenLite.set(o.find(".tp-half-one"), {
                    width: W,
                    height: X / 2,
                    overflow: "visible",
                    zIndex: 10,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center top"
                }), 0);
                var $ = (o.find(".defaultimg"), Math.round(20 * Math.random() - 10)),
                    J = Math.round(20 * Math.random() - 10),
                    Q = Math.round(20 * Math.random() - 10),
                    te = .4 * Math.random() - .2,
                    ee = .4 * Math.random() - .2,
                    ae = 1 * Math.random() + 1,
                    ie = 1 * Math.random() + 1,
                    ne = .3 * Math.random() + .3;
                z.add(punchgs.TweenLite.set(o.find(".tp-half-one"), {
                    overflow: "hidden"
                }), 0), z.add(punchgs.TweenLite.fromTo(o.find(".tp-half-one"), C / 800, {
                    width: W,
                    height: X / 2,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center top"
                }, {
                    scale: ae,
                    rotation: $,
                    y: 0 - X - X / 4,
                    autoAlpha: 0,
                    ease: punchgs.Power2.easeInOut
                }), 0), z.add(punchgs.TweenLite.fromTo(o.find(".tp-half-two"), C / 800, {
                    width: W,
                    height: X,
                    overflow: "hidden",
                    position: "absolute",
                    top: X / 2,
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center bottom"
                }, {
                    scale: ie,
                    rotation: J,
                    y: X + X / 4,
                    ease: punchgs.Power2.easeInOut,
                    autoAlpha: 0,
                    onComplete: function() {
                        punchgs.TweenLite.set(o, {
                            position: "absolute",
                            "z-index": 15
                        }), punchgs.TweenLite.set(n, {
                            position: "absolute",
                            "z-index": 20
                        }), o.find(".tp-half-one").length > 0 && (o.find(".tp-half-one .defaultimg").unwrap(), o.find(".tp-half-one .slotholder").unwrap()), o.find(".tp-half-two").remove()
                    }
                }), 0), P.add(punchgs.TweenLite.set(d.find(".defaultimg"), {
                    autoAlpha: 1
                }), 0), null != o.html() && z.add(punchgs.TweenLite.fromTo(n, (C - 200) / 1e3, {
                    scale: ne,
                    x: i.width / 4 * te,
                    y: X / 4 * ee,
                    rotation: Q,
                    force3D: "auto",
                    transformOrigin: "center center",
                    ease: punchgs.Power2.easeOut
                }, {
                    autoAlpha: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotation: 0
                }), 0), z.add(P, 0)
            }
            if (17 == h && d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    z.add(punchgs.TweenLite.fromTo(a, C / 800, {
                        opacity: 0,
                        rotationY: 0,
                        scale: .9,
                        rotationX: -110,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        opacity: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: punchgs.Power3.easeOut,
                        delay: .06 * e
                    }), 0)
                }), 18 == h && d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    z.add(punchgs.TweenLite.fromTo(a, C / 500, {
                        autoAlpha: 0,
                        rotationY: 310,
                        scale: .9,
                        rotationX: 10,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        autoAlpha: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: punchgs.Power3.easeOut,
                        delay: .06 * e
                    }), 0)
                }), 19 == h || 22 == h) {
                var P = new punchgs.TimelineLite;
                z.add(punchgs.TweenLite.set(o, {
                    zIndex: 20
                }), 0), z.add(punchgs.TweenLite.set(n, {
                    zIndex: 20
                }), 0), setTimeout(function() {
                    r.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var oe = (n.css("z-index"), o.css("z-index"), 90),
                    B = 1,
                    re = "center center ";
                1 == L && (oe = -90), 19 == h ? (re = re + "-" + i.height / 2, B = 0) : re += i.height / 2, punchgs.TweenLite.set(a, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    transformPerspective: 600
                }), d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    P.add(punchgs.TweenLite.fromTo(a, C / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        left: 0,
                        rotationY: i.rotate,
                        z: 10,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: re,
                        rotationX: oe
                    }, {
                        left: 0,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        rotationX: 0,
                        delay: 50 * e / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), P.add(punchgs.TweenLite.to(a, .1, {
                        autoAlpha: 1,
                        delay: 50 * e / 1e3
                    }), 0), z.add(P)
                }), r.find(".slotslide").each(function(e) {
                    var a = t(this),
                        n = -90;
                    1 == L && (n = 90), P.add(punchgs.TweenLite.fromTo(a, C / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        autoAlpha: 1,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: re,
                        rotationX: 0
                    }, {
                        autoAlpha: 1,
                        rotationY: i.rotate,
                        top: 0,
                        z: 10,
                        scale: 1,
                        rotationX: n,
                        delay: 50 * e / 1e3,
                        force3D: "auto",
                        ease: punchgs.Power2.easeInOut
                    }), 0), z.add(P)
                })
            }
            if (20 == h) {
                setTimeout(function() {
                    r.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100); {
                    n.css("z-index"), o.css("z-index")
                }
                if (1 == L) var se = -i.width,
                    oe = 70,
                    re = "left center -" + i.height / 2;
                else var se = i.width,
                    oe = -70,
                    re = "right center -" + i.height / 2;
                d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    z.add(punchgs.TweenLite.fromTo(a, C / 1500, {
                        left: se,
                        rotationX: 40,
                        z: -600,
                        opacity: B,
                        top: 0,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: re,
                        rotationY: oe
                    }, {
                        left: 0,
                        delay: 50 * e / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), z.add(punchgs.TweenLite.fromTo(a, C / 1e3, {
                        rotationX: 40,
                        z: -600,
                        opacity: B,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: re,
                        rotationY: oe
                    }, {
                        rotationX: 0,
                        opacity: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: 50 * e / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), z.add(punchgs.TweenLite.to(a, .1, {
                        opacity: 1,
                        force3D: "auto",
                        delay: 50 * e / 1e3 + C / 2e3
                    }), 0)
                }), r.find(".slotslide").each(function(e) {
                    var a = t(this);
                    if (1 != L) var n = -i.width,
                        o = 70,
                        r = "left center -" + i.height / 2;
                    else var n = i.width,
                        o = -70,
                        r = "right center -" + i.height / 2;
                    z.add(punchgs.TweenLite.fromTo(a, C / 1e3, {
                        opacity: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        left: 0,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: r,
                        rotationY: 0
                    }, {
                        opacity: 1,
                        rotationX: 40,
                        top: 0,
                        z: -600,
                        left: n,
                        force3D: "auto",
                        scale: .8,
                        rotationY: o,
                        delay: 50 * e / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), z.add(punchgs.TweenLite.to(a, .1, {
                        force3D: "auto",
                        opacity: 0,
                        delay: 50 * e / 1e3 + (C / 1e3 - C / 1e4)
                    }), 0)
                })
            }
            if (21 == h || 25 == h) {
                setTimeout(function() {
                    r.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var oe = (n.css("z-index"), o.css("z-index"), 90),
                    se = -i.width,
                    de = -oe;
                if (1 == L)
                    if (25 == h) {
                        var re = "center top 0";
                        oe = i.rotate
                    } else {
                        var re = "left center 0";
                        de = i.rotate
                    }
                else if (se = i.width, oe = -90, 25 == h) {
                    var re = "center bottom 0";
                    de = -oe, oe = i.rotate
                } else {
                    var re = "right center 0";
                    de = i.rotate
                }
                d.find(".slotslide").each(function() {
                    var e = t(this);
                    z.add(punchgs.TweenLite.fromTo(e, C / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: de,
                        z: 0,
                        autoAlpha: 0,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: re,
                        rotationY: oe
                    }, {
                        left: 0,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        autoAlpha: 1,
                        scale: 1,
                        rotationY: 0,
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut
                    }), 0)
                }), 1 != L ? (se = -i.width, oe = 90, 25 == h ? (re = "center top 0", de = -oe, oe = i.rotate) : (re = "left center 0", de = i.rotate)) : (se = i.width, oe = -90, 25 == h ? (re = "center bottom 0", de = -oe, oe = i.rotate) : (re = "right center 0", de = i.rotate)), r.find(".slotslide").each(function() {
                    var e = t(this);
                    z.add(punchgs.TweenLite.fromTo(e, C / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: 0,
                        z: 0,
                        autoAlpha: 1,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: re,
                        rotationY: 0
                    }, {
                        left: 0,
                        rotationX: de,
                        top: 0,
                        z: 0,
                        autoAlpha: 1,
                        force3D: "auto",
                        scale: 1,
                        rotationY: oe,
                        ease: punchgs.Power1.easeInOut
                    }), 0)
                })
            }
            if (23 == h || 24 == h) {
                setTimeout(function() {
                    r.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var oe = (n.css("z-index"), o.css("z-index"), -90),
                    B = 1,
                    le = 0;
                if (1 == L && (oe = 90), 23 == h) {
                    var re = "center center -" + i.width / 2;
                    B = 0
                } else var re = "center center " + i.width / 2;
                punchgs.TweenLite.set(a, {
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    perspective: 2500
                }), d.find(".slotslide").each(function(e) {
                    var a = t(this);
                    z.add(punchgs.TweenLite.fromTo(a, C / 1e3, {
                        left: le,
                        rotationX: i.rotate,
                        force3D: "auto",
                        opacity: B,
                        top: 0,
                        scale: 1,
                        transformPerspective: 600,
                        transformOrigin: re,
                        rotationY: oe
                    }, {
                        left: 0,
                        rotationX: 0,
                        autoAlpha: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: 50 * e / 500,
                        ease: punchgs.Power2.easeInOut
                    }), 0)
                }), oe = 90, 1 == L && (oe = -90), r.find(".slotslide").each(function(e) {
                    var a = t(this);
                    z.add(punchgs.TweenLite.fromTo(a, C / 1e3, {
                        left: 0,
                        autoAlpha: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: re,
                        rotationY: 0
                    }, {
                        left: le,
                        autoAlpha: 1,
                        rotationX: i.rotate,
                        top: 0,
                        scale: 1,
                        rotationY: oe,
                        delay: 50 * e / 500,
                        ease: punchgs.Power2.easeInOut
                    }), 0)
                })
            }
            z.pause(), _(n, i, null, z), punchgs.TweenLite.to(n, .001, {
                autoAlpha: 1
            });
            var he = {};
            he.slideIndex = i.next + 1, he.slide = n, a.trigger("revolution.slide.onchange", he), setTimeout(function() {
                a.trigger("revolution.slide.onafterswap")
            }, C), a.trigger("revolution.slide.onvideostop")
        },
        I = function(t, e, a, i, n, o, r) {
            punchgs.TweenLite.to(a.find(".defaultimg"), .001, {
                autoAlpha: 1,
                onComplete: function() {
                    y(t, e, n)
                }
            }), n.index() != o.index() && punchgs.TweenLite.to(o, .2, {
                autoAlpha: 0,
                onComplete: function() {
                    y(t, e, o)
                }
            }), e.act = e.next, "thumb" == e.navigationType && ee(t), "on" == a.data("kenburns") && N(t, e), t.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible"), n.addClass("current-sr-slide-visible"), ("scroll" == e.parallax || "scroll+mouse" == e.parallax || "mouse+scroll" == e.parallax) && K(t, e), r.clear()
        },
        A = function(e) {
            var a = e.target.getVideoEmbedCode(),
                i = t("#" + a.split('id="')[1].split('"')[0]),
                n = i.closest(".tp-simpleresponsive"),
                o = i.parent().data("player");
            if (e.data == YT.PlayerState.PLAYING) {
                var r = n.find(".tp-bannertimer"),
                    s = r.data("opt");
                "mute" == i.closest(".tp-caption").data("volume") && o.mute(), s.videoplaying = !0, n.trigger("stoptimer"), n.trigger("revolution.slide.onvideoplay")
            } else {
                var r = n.find(".tp-bannertimer"),
                    s = r.data("opt"); - 1 != e.data && 3 != e.data && (s.videoplaying = !1, n.trigger("starttimer"), n.trigger("revolution.slide.onvideostop")), 0 == e.data && 1 == s.nextslideatend ? s.container.revnext() : (s.videoplaying = !1, n.trigger("starttimer"), n.trigger("revolution.slide.onvideostop"))
            }
        },
        M = function(t, e, a) {
            t.addEventListener ? t.addEventListener(e, a, !1) : t.attachEvent(e, a, !1)
        },
        S = function(e, a) {
            var i = $f(e),
                n = t("#" + e),
                o = n.closest(".tp-simpleresponsive"),
                r = n.closest(".tp-caption");
            setTimeout(function() {
                i.addEvent("ready", function() {
                    a && i.api("play"), i.addEvent("play", function() {
                        var t = o.find(".tp-bannertimer"),
                            e = t.data("opt");
                        e.videoplaying = !0, o.trigger("stoptimer"), o.trigger("revolution.slide.onvideoplay"), "mute" == r.data("volume") && i.api("setVolume", "0")
                    }), i.addEvent("finish", function() {
                        var t = o.find(".tp-bannertimer"),
                            e = t.data("opt");
                        e.videoplaying = !1, o.trigger("starttimer"), o.trigger("revolution.slide.onvideoplay"), 1 == e.nextslideatend && e.container.revnext()
                    }), i.addEvent("pause", function() {
                        var t = o.find(".tp-bannertimer"),
                            e = t.data("opt");
                        e.videoplaying = !1, o.trigger("starttimer"), o.trigger("revolution.slide.onvideostop")
                    }), r.find(".tp-thumb-image").click(function() {
                        punchgs.TweenLite.to(t(this), .3, {
                            autoAlpha: 0,
                            force3D: "auto",
                            ease: punchgs.Power3.easeInOut
                        }), i.api("play")
                    })
                })
            }, 150)
        },
        P = function(t, a) {
            var i = a.width(),
                n = a.height(),
                o = t.data("mediaAspect");
            o == e && (o = 1);
            var r = i / n;
            t.css({
                position: "absolute"
            });
            t.find("video");
            o > r ? punchgs.TweenLite.to(t, 1e-4, {
                width: n * o,
                force3D: "auto",
                top: 0,
                left: 0 - (n * o - i) / 2,
                height: n
            }) : punchgs.TweenLite.to(t, 1e-4, {
                width: i,
                force3D: "auto",
                top: 0 - (i / o - n) / 2,
                left: 0,
                height: i / o
            })
        },
        D = function() {
            var t = new Object;
            return t.x = 0, t.y = 0, t.rotationX = 0, t.rotationY = 0, t.rotationZ = 0, t.scale = 1, t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.opacity = 0, t.transformOrigin = "center, center", t.transformPerspective = 400, t.rotation = 0, t
        },
        H = function(e, a) {
            var i = a.split(";");
            return t.each(i, function(t, a) {
                a = a.split(":");
                var i = a[0],
                    n = a[1];
                "rotationX" == i && (e.rotationX = parseInt(n, 0)), "rotationY" == i && (e.rotationY = parseInt(n, 0)), "rotationZ" == i && (e.rotationZ = parseInt(n, 0)), "rotationZ" == i && (e.rotation = parseInt(n, 0)), "scaleX" == i && (e.scaleX = parseFloat(n)), "scaleY" == i && (e.scaleY = parseFloat(n)), "opacity" == i && (e.opacity = parseFloat(n)), "skewX" == i && (e.skewX = parseInt(n, 0)), "skewY" == i && (e.skewY = parseInt(n, 0)), "x" == i && (e.x = parseInt(n, 0)), "y" == i && (e.y = parseInt(n, 0)), "z" == i && (e.z = parseInt(n, 0)), "transformOrigin" == i && (e.transformOrigin = n.toString()), "transformPerspective" == i && (e.transformPerspective = parseInt(n, 0))
            }), e
        },
        W = function(e) {
            var a = e.split("animation:"),
                i = new Object;
            i.animation = H(D(), a[1]);
            var n = a[0].split(";");
            return t.each(n, function(t, e) {
                e = e.split(":");
                var a = e[0],
                    n = e[1];
                "typ" == a && (i.typ = n), "speed" == a && (i.speed = parseInt(n, 0) / 1e3), "start" == a && (i.start = parseInt(n, 0) / 1e3), "elementdelay" == a && (i.elementdelay = parseFloat(n)), "ease" == a && (i.ease = n)
            }), i
        },
        _ = function(a, i, n, o) {
            function r() {}

            function d() {}
            a.data("ctl") == e && a.data("ctl", new punchgs.TimelineLite);
            var l = a.data("ctl"),
                h = 0,
                c = 0,
                p = a.find(".tp-caption"),
                u = i.container.find(".tp-static-layers").find(".tp-caption");
            l.pause(), t.each(u, function(t, e) {
                p.push(e)
            }), p.each(function(a) {
                var o = n,
                    l = -1,
                    p = t(this);
                if (p.hasClass("tp-static-layer")) {
                    var u = p.data("startslide"),
                        f = p.data("endslide");
                    (-1 == u || "-1" == u) && p.data("startslide", 0), (-1 == f || "-1" == f) && p.data("endslide", i.slideamount), 0 == u && f == i.slideamount - 1 && p.data("endslide", i.slideamount + 1), u = p.data("startslide"), f = p.data("endslide"), p.hasClass("tp-is-shown") ? l = f == i.next || u > i.next || f < i.next ? 2 : 0 : u <= i.next && f >= i.next || u == i.next || f == i.next ? (p.addClass("tp-is-shown"), l = 1) : l = 0
                }
                h = i.width / 2 - i.startwidth * i.bw / 2; {
                    var g = i.bw;
                    i.bh
                }
                "on" == i.fullScreen && (c = i.height / 2 - i.startheight * i.bh / 2), ("on" == i.autoHeight || i.minHeight != e && i.minHeight > 0) && (c = i.container.height() / 2 - i.startheight * i.bh / 2), 0 > c && (c = 0);
                var m = 0;
                if (i.width < i.hideCaptionAtLimit && "on" == p.data("captionhidden") ? (p.addClass("tp-hidden-caption"), m = 1) : i.width < i.hideAllCaptionAtLimit || i.width < i.hideAllCaptionAtLilmit ? (p.addClass("tp-hidden-caption"), m = 1) : p.removeClass("tp-hidden-caption"), 0 == m) {
                    if (p.data("linktoslide") == e || p.hasClass("hasclicklistener") || (p.addClass("hasclicklistener"), p.css({
                            cursor: "pointer"
                        }), "no" != p.data("linktoslide") && p.click(function() {
                            var e = t(this),
                                a = e.data("linktoslide");
                            "next" != a && "prev" != a ? (i.container.data("showus", a), i.container.parent().find(".tp-rightarrow").click()) : "next" == a ? i.container.parent().find(".tp-rightarrow").click() : "prev" == a && i.container.parent().find(".tp-leftarrow").click()
                        })), 0 > h && (h = 0), p.hasClass("tp-videolayer") || p.find("iframe").length > 0 || p.find("video").length > 0) {
                        var v = "iframe" + Math.round(1e5 * Math.random() + 1),
                            w = p.data("videowidth"),
                            b = p.data("videoheight"),
                            y = p.data("videoattributes"),
                            x = p.data("ytid"),
                            T = p.data("vimeoid"),
                            k = p.data("videpreload"),
                            L = p.data("videomp4"),
                            C = p.data("videowebm"),
                            z = p.data("videoogv"),
                            O = p.data("videocontrols"),
                            I = "http",
                            _ = "loop" == p.data("videoloop") ? "loop" : "loopandnoslidestop" == p.data("videoloop") ? "loop" : "";
                        if (p.data("thumbimage") != e && p.data("videoposter") == e && p.data("videoposter", p.data("thumbimage")), x != e && String(x).length > 1 && 0 == p.find("iframe").length && (I = "https", "none" == O && (y = y.replace("controls=1", "controls=0"), -1 == y.toLowerCase().indexOf("controls") && (y += "&controls=0")), p.append('<iframe style="visible:hidden" src="' + I + "://www.youtube.com/embed/" + x + "?" + y + '" width="' + w + '" height="' + b + '" style="width:' + w + "px;height:" + b + 'px"></iframe>')), T != e && String(T).length > 1 && 0 == p.find("iframe").length && ("https:" === location.protocol && (I = "https"), p.append('<iframe style="visible:hidden" src="' + I + "://player.vimeo.com/video/" + T + "?" + y + '" width="' + w + '" height="' + b + '" style="width:' + w + "px;height:" + b + 'px"></iframe>')), (L != e || C != e) && 0 == p.find("video").length) {
                            "controls" != O && (O = "");
                            var B = "";
                            (100 == w || "100%" == w) && (B = ";width:100% !important; height:100% !important");
                            var E = '<video style="visible:hidden' + B + '" class="" ' + _ + ' preload="' + k + '" width="' + w + '" height="' + b + '" ';
                            p.data("videoposter") != e && p.data("videoposter") != e && (E = E + 'poster="' + p.data("videoposter") + '">'), C != e && "firefox" == X().toLowerCase() && (E = E + '<source src="' + C + '" type="video/webm" />'), L != e && (E = E + '<source src="' + L + '" type="video/mp4" />'), z != e && (E = E + '<source src="' + z + '" type="video/ogg" />'), E += "</video>", p.append(E), "controls" == O && p.append('<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div></div>')
                        }
                        var j = !1;
                        (1 == p.data("autoplayonlyfirsttime") || "true" == p.data("autoplayonlyfirsttime") || 1 == p.data("autoplay")) && (p.data("autoplay", !0), j = !0), p.data("videoposter") != e && p.data("videoposter").length > 2 && 1 != p.data("autoplay") && !o && (0 == p.find(".tp-thumb-image").length ? p.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + p.data("videoposter") + '); background-size:cover; background-position:center center"></div>') : punchgs.TweenLite.set(p.find(".tp-thumb-image"), {
                            autoAlpha: 1
                        })), p.find("iframe").each(function() {
                            var a = t(this);
                            if (punchgs.TweenLite.to(a, .1, {
                                    autoAlpha: 1,
                                    zIndex: 0,
                                    transformStyle: "preserve-3d",
                                    z: 0,
                                    rotationX: 0,
                                    force3D: "auto"
                                }), Z()) {
                                var o = a.attr("src");
                                a.attr("src", ""), a.attr("src", o)
                            }
                            if (i.nextslideatend = p.data("nextslideatend"), a.attr("src").toLowerCase().indexOf("youtube") >= 0)
                                if (a.hasClass("HasListener")) {
                                    if (!n) {
                                        var r = p.data("player");
                                        "on" != p.data("forcerewind") || Z() || r.seekTo(0), (!Z() && 1 == p.data("autoplay") || j) && p.data("timerplay", setTimeout(function() {
                                            r.playVideo()
                                        }, p.data("start")))
                                    }
                                } else try {
                                    a.attr("id", v);
                                    var r, s = setInterval(function() {
                                        YT != e && typeof YT.Player != e && "undefined" != typeof YT.Player && (r = new YT.Player(v, {
                                            events: {
                                                onStateChange: A,
                                                onReady: function(a) {
                                                    {
                                                        var i = a.target.getVideoEmbedCode(),
                                                            n = t("#" + i.split('id="')[1].split('"')[0]),
                                                            o = n.closest(".tp-caption"),
                                                            s = o.data("videorate");
                                                        o.data("videostart")
                                                    }
                                                    s != e && a.target.setPlaybackRate(parseFloat(s)), (!Z() && 1 == o.data("autoplay") || j) && o.data("timerplay", setTimeout(function() {
                                                        a.target.playVideo()
                                                    }, o.data("start"))), o.find(".tp-thumb-image").click(function() {
                                                        punchgs.TweenLite.to(t(this), .3, {
                                                            autoAlpha: 0,
                                                            force3D: "auto",
                                                            ease: punchgs.Power3.easeInOut
                                                        }), Z() || r.playVideo()
                                                    })
                                                }
                                            }
                                        })), a.addClass("HasListener"), p.data("player", r), clearInterval(s)
                                    }, 100)
                                } catch (d) {} else if (a.attr("src").toLowerCase().indexOf("vimeo") >= 0)
                                    if (a.hasClass("HasListener")) {
                                        if (!(n || Z() || 1 != p.data("autoplay") && "on" != p.data("forcerewind"))) {
                                            var a = p.find("iframe"),
                                                l = a.attr("id"),
                                                h = $f(l);
                                            "on" == p.data("forcerewind") && h.api("seekTo", 0), p.data("timerplay", setTimeout(function() {
                                                1 == p.data("autoplay") && h.api("play")
                                            }, p.data("start")))
                                        }
                                    } else {
                                        a.addClass("HasListener"), a.attr("id", v);
                                        for (var c, u = a.attr("src"), f = {}, g = u, m = /([^&=]+)=([^&]*)/g; c = m.exec(g);) f[decodeURIComponent(c[1])] = decodeURIComponent(c[2]);
                                        u = f.player_id != e ? u.replace(f.player_id, v) : u + "&player_id=" + v;
                                        try {
                                            u = u.replace("api=0", "api=1")
                                        } catch (d) {}
                                        u += "&api=1", a.attr("src", u);
                                        var r = p.find("iframe")[0],
                                            w = setInterval(function() {
                                                $f != e && typeof $f(v).api != e && "undefined" != typeof $f(v).api && ($f(r).addEvent("ready", function() {
                                                    S(v, j)
                                                }), clearInterval(w))
                                            }, 100)
                                    }
                        }), (Z() && 1 == p.data("disablevideoonmobile") || s(8)) && p.find("video").remove(), p.find("video").length > 0 && p.find("video").each(function() {
                            var a = this,
                                n = t(this);
                            n.parent().hasClass("html5vid") || n.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');
                            var o = n.parent();
                            M(a, "loadedmetadata", function(t) {
                                t.data("metaloaded", 1)
                            }(o)), clearInterval(o.data("interval")), o.data("interval", setInterval(function() {
                                if (1 == o.data("metaloaded") || 0 / 0 != a.duration) {
                                    if (clearInterval(o.data("interval")), !o.hasClass("HasListener")) {
                                        o.addClass("HasListener"), "none" != p.data("dottedoverlay") && p.data("dottedoverlay") != e && 1 != p.find(".tp-dottedoverlay").length && o.append('<div class="tp-dottedoverlay ' + p.data("dottedoverlay") + '"></div>'), n.attr("control") == e && (0 == o.find(".tp-video-play-button").length && o.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>'), o.parent().find("video, .tp-poster, .tp-thumb-image, .tp-video-play-button").click(function() {
                                            o.hasClass("videoisplaying") ? a.pause() : (a.play(), punchgs.TweenLite.to(o.parent().find(".tp-poster, .tp-thumb-image"), .2, {
                                                autoAlpha: 0
                                            }))
                                        })), (1 == p.data("forcecover") || p.hasClass("fullscreenvideo")) && (1 == p.data("forcecover") && (P(o, i.container), o.addClass("fullcoveredvideo"), p.addClass("fullcoveredvideo")), o.css({
                                            width: "100%",
                                            height: "100%"
                                        }));
                                        var t = p.find(".tp-vid-play-pause")[0],
                                            r = p.find(".tp-vid-mute")[0],
                                            s = p.find(".tp-vid-full-screen")[0],
                                            d = p.find(".tp-seek-bar")[0],
                                            l = p.find(".tp-volume-bar")[0];
                                        t != e && (M(t, "click", function() {
                                            1 == a.paused ? a.play() : a.pause()
                                        }), M(r, "click", function() {
                                            0 == a.muted ? (a.muted = !0, r.innerHTML = "Unmute") : (a.muted = !1, r.innerHTML = "Mute")
                                        }), M(s, "click", function() {
                                            a.requestFullscreen ? a.requestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
                                        }), M(d, "change", function() {
                                            var t = a.duration * (d.value / 100);
                                            a.currentTime = t
                                        }), M(a, "timeupdate", function() {
                                            var t = 100 / a.duration * a.currentTime;
                                            d.value = t
                                        }), M(d, "mousedown", function() {
                                            a.pause()
                                        }), M(d, "mouseup", function() {
                                            a.play()
                                        }), M(l, "change", function() {
                                            a.volume = l.value
                                        })), M(a, "play", function() {
                                            "mute" == p.data("volume") && (a.muted = !0), o.addClass("videoisplaying"), "loopandnoslidestop" == p.data("videoloop") ? (i.videoplaying = !1, i.container.trigger("starttimer"), i.container.trigger("revolution.slide.onvideostop")) : (i.videoplaying = !0, i.container.trigger("stoptimer"), i.container.trigger("revolution.slide.onvideoplay"));
                                            var t = p.find(".tp-vid-play-pause")[0],
                                                n = p.find(".tp-vid-mute")[0];
                                            t != e && (t.innerHTML = "Pause"), n != e && a.muted && (n.innerHTML = "Unmute")
                                        }), M(a, "pause", function() {
                                            o.removeClass("videoisplaying"), i.videoplaying = !1, i.container.trigger("starttimer"), i.container.trigger("revolution.slide.onvideostop");
                                            var t = p.find(".tp-vid-play-pause")[0];
                                            t != e && (t.innerHTML = "Play")
                                        }), M(a, "ended", function() {
                                            o.removeClass("videoisplaying"), i.videoplaying = !1, i.container.trigger("starttimer"), i.container.trigger("revolution.slide.onvideostop"), 1 == i.nextslideatend && i.container.revnext()
                                        })
                                    }
                                    var h = !1;
                                    (1 == p.data("autoplayonlyfirsttime") || "true" == p.data("autoplayonlyfirsttime")) && (h = !0);
                                    var c = 16 / 9;
                                    if ("4:3" == p.data("aspectratio") && (c = 4 / 3), o.data("mediaAspect", c), 1 == o.closest(".tp-caption").data("forcecover") && (P(o, i.container), o.addClass("fullcoveredvideo")), n.css({
                                            display: "block"
                                        }), i.nextslideatend = p.data("nextslideatend"), "on" != p.data("forcerewind") || o.hasClass("videoisplaying") || a.currentTime > 0 && (a.currentTime = 0), (1 == p.data("autoplay") || 1 == h) && ("loopandnoslidestop" == p.data("videoloop") ? (i.videoplaying = !1, i.container.trigger("starttimer"), i.container.trigger("revolution.slide.onvideostop")) : (i.videoplaying = !0, i.container.trigger("stoptimer"), i.container.trigger("revolution.slide.onvideoplay")), "on" != p.data("forcerewind") || o.hasClass("videoisplaying") || a.currentTime > 0 && (a.currentTime = 0), "mute" == p.data("volume") && (a.muted = !0), o.data("timerplay", setTimeout(function() {
                                            "on" != p.data("forcerewind") || o.hasClass("videoisplaying") || a.currentTime > 0 && (a.currentTime = 0), "mute" == p.data("volume") && (a.muted = !0), a.play()
                                        }, 10 + p.data("start")))), o.data("ww") == e && o.data("ww", n.attr("width")), o.data("hh") == e && o.data("hh", n.attr("height")), !p.hasClass("fullscreenvideo") && 1 == p.data("forcecover")) try {
                                        o.width(o.data("ww") * i.bw), o.height(o.data("hh") * i.bh)
                                    } catch (u) {}
                                    clearInterval(o.data("interval"))
                                }
                            }), 100)
                        }), 1 == p.data("autoplay") && (setTimeout(function() {
                            "loopandnoslidestop" != p.data("videoloop") && (i.videoplaying = !0, i.container.trigger("stoptimer"))
                        }, 200), "loopandnoslidestop" != p.data("videoloop") && (i.videoplaying = !0, i.container.trigger("stoptimer")), (1 == p.data("autoplayonlyfirsttime") || "true" == p.data("autoplayonlyfirsttime")) && (p.data("autoplay", !1), p.data("autoplayonlyfirsttime", !1)))
                    }
                    var U = 0,
                        N = 0;
                    if (p.find("img").length > 0) {
                        var G = p.find("img");
                        0 == G.width() && G.css({
                            width: "auto"
                        }), 0 == G.height() && G.css({
                            height: "auto"
                        }), G.data("ww") == e && G.width() > 0 && G.data("ww", G.width()), G.data("hh") == e && G.height() > 0 && G.data("hh", G.height());
                        var $ = G.data("ww"),
                            J = G.data("hh");
                        $ == e && ($ = 0), J == e && (J = 0), G.width($ * i.bw), G.height(J * i.bh), U = G.width(), N = G.height()
                    } else if (p.find("iframe").length > 0 || p.find("video").length > 0) {
                        var Q = !1,
                            G = p.find("iframe");
                        0 == G.length && (G = p.find("video"), Q = !0), G.css({
                            display: "block"
                        }), p.data("ww") == e && p.data("ww", G.width()), p.data("hh") == e && p.data("hh", G.height());
                        var $ = p.data("ww"),
                            J = p.data("hh"),
                            K = p;
                        K.data("fsize") == e && K.data("fsize", parseInt(K.css("font-size"), 0) || 0), K.data("pt") == e && K.data("pt", parseInt(K.css("paddingTop"), 0) || 0), K.data("pb") == e && K.data("pb", parseInt(K.css("paddingBottom"), 0) || 0), K.data("pl") == e && K.data("pl", parseInt(K.css("paddingLeft"), 0) || 0), K.data("pr") == e && K.data("pr", parseInt(K.css("paddingRight"), 0) || 0), K.data("mt") == e && K.data("mt", parseInt(K.css("marginTop"), 0) || 0), K.data("mb") == e && K.data("mb", parseInt(K.css("marginBottom"), 0) || 0), K.data("ml") == e && K.data("ml", parseInt(K.css("marginLeft"), 0) || 0), K.data("mr") == e && K.data("mr", parseInt(K.css("marginRight"), 0) || 0), K.data("bt") == e && K.data("bt", parseInt(K.css("borderTop"), 0) || 0), K.data("bb") == e && K.data("bb", parseInt(K.css("borderBottom"), 0) || 0), K.data("bl") == e && K.data("bl", parseInt(K.css("borderLeft"), 0) || 0), K.data("br") == e && K.data("br", parseInt(K.css("borderRight"), 0) || 0), K.data("lh") == e && K.data("lh", parseInt(K.css("lineHeight"), 0) || 0), "auto" == K.data("lh") && K.data("lh", K.data("fsize") + 4);
                        var te = i.width,
                            ee = i.height;
                        if (te > i.startwidth && (te = i.startwidth), ee > i.startheight && (ee = i.startheight), p.hasClass("fullscreenvideo")) {
                            h = 0, c = 0, p.data("x", 0), p.data("y", 0);
                            var ae = i.height;
                            "on" == i.autoHeight && (ae = i.container.height()), p.css({
                                width: i.width,
                                height: ae
                            })
                        } else p.css({
                            "font-size": K.data("fsize") * i.bw + "px",
                            "padding-top": K.data("pt") * i.bh + "px",
                            "padding-bottom": K.data("pb") * i.bh + "px",
                            "padding-left": K.data("pl") * i.bw + "px",
                            "padding-right": K.data("pr") * i.bw + "px",
                            "margin-top": K.data("mt") * i.bh + "px",
                            "margin-bottom": K.data("mb") * i.bh + "px",
                            "margin-left": K.data("ml") * i.bw + "px",
                            "margin-right": K.data("mr") * i.bw + "px",
                            "border-top": K.data("bt") * i.bh + "px",
                            "border-bottom": K.data("bb") * i.bh + "px",
                            "border-left": K.data("bl") * i.bw + "px",
                            "border-right": K.data("br") * i.bw + "px",
                            "line-height": K.data("lh") * i.bh + "px",
                            height: J * i.bh + "px"
                        });
                        0 == Q ? (G.width($ * i.bw), G.height(J * i.bh)) : 1 == p.data("forcecover") || p.hasClass("fullscreenvideo") || (G.width($ * i.bw), G.height(J * i.bh)), U = G.width(), N = G.height()
                    } else {
                        p.find(".tp-resizeme, .tp-resizeme *").each(function() {
                            F(t(this), i)
                        }), p.hasClass("tp-resizeme") && p.find("*").each(function() {
                            F(t(this), i)
                        }), F(p, i), N = p.outerHeight(!0), U = p.outerWidth(!0);
                        var ie = p.outerHeight(),
                            ne = p.css("backgroundColor");
                        p.find(".frontcorner").css({
                            borderWidth: ie + "px",
                            left: 0 - ie + "px",
                            borderRight: "0px solid transparent",
                            borderTopColor: ne
                        }), p.find(".frontcornertop").css({
                            borderWidth: ie + "px",
                            left: 0 - ie + "px",
                            borderRight: "0px solid transparent",
                            borderBottomColor: ne
                        }), p.find(".backcorner").css({
                            borderWidth: ie + "px",
                            right: 0 - ie + "px",
                            borderLeft: "0px solid transparent",
                            borderBottomColor: ne
                        }), p.find(".backcornertop").css({
                            borderWidth: ie + "px",
                            right: 0 - ie + "px",
                            borderLeft: "0px solid transparent",
                            borderTopColor: ne
                        })
                    }
                    "on" == i.fullScreenAlignForce && (h = 0, c = 0), p.data("voffset") == e && p.data("voffset", 0), p.data("hoffset") == e && p.data("hoffset", 0);
                    var oe = p.data("voffset") * g,
                        re = p.data("hoffset") * g,
                        se = i.startwidth * g,
                        de = i.startheight * g;
                    "on" == i.fullScreenAlignForce && (se = i.container.width(), de = i.container.height()), ("center" == p.data("x") || "center" == p.data("xcenter")) && (p.data("xcenter", "center"), p.data("x", se / 2 - p.outerWidth(!0) / 2 + re)), ("left" == p.data("x") || "left" == p.data("xleft")) && (p.data("xleft", "left"), p.data("x", 0 / g + re)), ("right" == p.data("x") || "right" == p.data("xright")) && (p.data("xright", "right"), p.data("x", (se - p.outerWidth(!0) + re) / g)), ("center" == p.data("y") || "center" == p.data("ycenter")) && (p.data("ycenter", "center"), p.data("y", de / 2 - p.outerHeight(!0) / 2 + oe)), ("top" == p.data("y") || "top" == p.data("ytop")) && (p.data("ytop", "top"), p.data("y", 0 / i.bh + oe)), ("bottom" == p.data("y") || "bottom" == p.data("ybottom")) && (p.data("ybottom", "bottom"), p.data("y", (de - p.outerHeight(!0) + oe) / g)), p.data("start") == e && p.data("start", 1e3);
                    var le = p.data("easing");
                    le == e && (le = "punchgs.Power1.easeOut");
                    var he = p.data("start") / 1e3,
                        ce = p.data("speed") / 1e3;
                    if ("center" == p.data("x") || "center" == p.data("xcenter")) var pe = p.data("x") + h;
                    else var pe = g * p.data("x") + h;
                    if ("center" == p.data("y") || "center" == p.data("ycenter")) var ue = p.data("y") + c;
                    else var ue = i.bh * p.data("y") + c;
                    if (punchgs.TweenLite.set(p, {
                            top: ue,
                            left: pe,
                            overwrite: "auto"
                        }), 0 == l && (o = !0), p.data("timeline") == e || o || (2 != l && p.data("timeline").gotoAndPlay(0), o = !0), !o) {
                        p.data("timeline") != e;
                        var fe = new punchgs.TimelineLite({
                            smoothChildTiming: !0,
                            onStart: d
                        });
                        fe.pause(), "on" == i.fullScreenAlignForce;
                        var ge = p;
                        p.data("mySplitText") != e && p.data("mySplitText").revert(), ("chars" == p.data("splitin") || "words" == p.data("splitin") || "lines" == p.data("splitin") || "chars" == p.data("splitout") || "words" == p.data("splitout") || "lines" == p.data("splitout")) && (p.find("a").length > 0 ? p.data("mySplitText", new punchgs.SplitText(p.find("a"), {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })) : p.find(".tp-layer-inner-rotation").length > 0 ? p.data("mySplitText", new punchgs.SplitText(p.find(".tp-layer-inner-rotation"), {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })) : p.data("mySplitText", new punchgs.SplitText(p, {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })), p.addClass("splitted")), "chars" == p.data("splitin") && (ge = p.data("mySplitText").chars), "words" == p.data("splitin") && (ge = p.data("mySplitText").words), "lines" == p.data("splitin") && (ge = p.data("mySplitText").lines);
                        var me = D(),
                            ve = D();
                        p.data("repeat") != e && (repeatV = p.data("repeat")), p.data("yoyo") != e && (yoyoV = p.data("yoyo")), p.data("repeatdelay") != e && (repeatdelayV = p.data("repeatdelay"));
                        var we = p.attr("class");
                        we.match("customin") ? me = H(me, p.data("customin")) : we.match("randomrotate") ? (me.scale = 3 * Math.random() + 1, me.rotation = Math.round(200 * Math.random() - 100), me.x = Math.round(200 * Math.random() - 100), me.y = Math.round(200 * Math.random() - 100)) : we.match("lfr") || we.match("skewfromright") ? me.x = 15 + i.width : we.match("lfl") || we.match("skewfromleft") ? me.x = -15 - U : we.match("sfl") || we.match("skewfromleftshort") ? me.x = -50 : we.match("sfr") || we.match("skewfromrightshort") ? me.x = 50 : we.match("lft") ? me.y = -25 - N : we.match("lfb") ? me.y = 25 + i.height : we.match("sft") ? me.y = -50 : we.match("sfb") && (me.y = 50), we.match("skewfromright") || p.hasClass("skewfromrightshort") ? me.skewX = -85 : (we.match("skewfromleft") || p.hasClass("skewfromleftshort")) && (me.skewX = 85), (we.match("fade") || we.match("sft") || we.match("sfl") || we.match("sfb") || we.match("skewfromleftshort") || we.match("sfr") || we.match("skewfromrightshort")) && (me.opacity = 0), "safari" == X().toLowerCase();
                        var be = p.data("elementdelay") == e ? 0 : p.data("elementdelay");
                        ve.ease = me.ease = p.data("easing") == e ? punchgs.Power1.easeInOut : p.data("easing"), me.data = new Object, me.data.oldx = me.x, me.data.oldy = me.y, ve.data = new Object, ve.data.oldx = ve.x, ve.data.oldy = ve.y, me.x = me.x * g, me.y = me.y * g;
                        var ye = new punchgs.TimelineLite;
                        if (2 != l)
                            if (we.match("customin")) ge != p && fe.add(punchgs.TweenLite.set(p, {
                                force3D: "auto",
                                opacity: 1,
                                scaleX: 1,
                                scaleY: 1,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: 0,
                                skewX: 0,
                                skewY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                visibility: "visible",
                                delay: 0,
                                overwrite: "all"
                            })), me.visibility = "hidden", ve.visibility = "visible", ve.overwrite = "all", ve.opacity = 1, ve.onComplete = r(), ve.delay = he, ve.force3D = "auto", fe.add(ye.staggerFromTo(ge, ce, me, ve, be), "frame0");
                            else if (me.visibility = "visible", me.transformPerspective = 600, ge != p && fe.add(punchgs.TweenLite.set(p, {
                                force3D: "auto",
                                opacity: 1,
                                scaleX: 1,
                                scaleY: 1,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: 0,
                                skewX: 0,
                                skewY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                visibility: "visible",
                                delay: 0,
                                overwrite: "all"
                            })), ve.visibility = "visible", ve.delay = he, ve.onComplete = r(), ve.opacity = 1, ve.force3D = "auto", we.match("randomrotate") && ge != p)
                            for (var a = 0; a < ge.length; a++) {
                                var xe = new Object,
                                    Te = new Object;
                                t.extend(xe, me), t.extend(Te, ve), me.scale = 3 * Math.random() + 1, me.rotation = Math.round(200 * Math.random() - 100), me.x = Math.round(200 * Math.random() - 100), me.y = Math.round(200 * Math.random() - 100), 0 != a && (Te.delay = he + a * be), fe.append(punchgs.TweenLite.fromTo(ge[a], ce, xe, Te), "frame0")
                            } else fe.add(ye.staggerFromTo(ge, ce, me, ve, be), "frame0");
                        p.data("timeline", fe); {
                            new Array
                        }
                        if (p.data("frames") != e) {
                            var ke = p.data("frames");
                            ke = ke.replace(/\s+/g, ""), ke = ke.replace("{", "");
                            var Le = ke.split("}");
                            t.each(Le, function(t, e) {
                                if (e.length > 0) {
                                    var a = W(e);
                                    V(p, i, a, "frame" + (t + 10), g)
                                }
                            })
                        }
                        fe = p.data("timeline"), p.data("end") == e || -1 != l && 2 != l ? -1 == l || 2 == l ? q(p, i, 999999, me, "frame99", g) : q(p, i, 999999, me, "frame99", g) : q(p, i, p.data("end") / 1e3, me, "frame99", g), fe = p.data("timeline"), p.data("timeline", fe), Y(p, g), fe.resume()
                    }
                }
                if (o && (R(p), Y(p, g), p.data("timeline") != e)) {
                    var Ce = p.data("timeline").getTweensOf();
                    t.each(Ce, function(t, a) {
                        if (a.vars.data != e) {
                            var i = a.vars.data.oldx * g,
                                n = a.vars.data.oldy * g;
                            if (1 != a.progress() && 0 != a.progress()) try {
                                a.vars.x = i, a.vary.y = n
                            } catch (o) {} else 1 == a.progress() && punchgs.TweenLite.set(a.target, {
                                x: i,
                                y: n
                            })
                        }
                    })
                }
            });
            var f = t("body").find("#" + i.container.attr("id")).find(".tp-bannertimer");
            f.data("opt", i), o != e && setTimeout(function() {
                o.resume()
            }, 30)
        },
        X = function() {
            var t, e = navigator.appName,
                a = navigator.userAgent,
                i = a.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return i && null != (t = a.match(/version\/([\.\d]+)/i)) && (i[2] = t[1]), i = i ? [i[1], i[2]] : [e, navigator.appVersion, "-?"], i[0]
        },
        F = function(t, a) {
            t.data("fsize") == e && t.data("fsize", parseInt(t.css("font-size"), 0) || 0), t.data("pt") == e && t.data("pt", parseInt(t.css("paddingTop"), 0) || 0), t.data("pb") == e && t.data("pb", parseInt(t.css("paddingBottom"), 0) || 0), t.data("pl") == e && t.data("pl", parseInt(t.css("paddingLeft"), 0) || 0), t.data("pr") == e && t.data("pr", parseInt(t.css("paddingRight"), 0) || 0), t.data("mt") == e && t.data("mt", parseInt(t.css("marginTop"), 0) || 0), t.data("mb") == e && t.data("mb", parseInt(t.css("marginBottom"), 0) || 0), t.data("ml") == e && t.data("ml", parseInt(t.css("marginLeft"), 0) || 0), t.data("mr") == e && t.data("mr", parseInt(t.css("marginRight"), 0) || 0), t.data("bt") == e && t.data("bt", parseInt(t.css("borderTopWidth"), 0) || 0), t.data("bb") == e && t.data("bb", parseInt(t.css("borderBottomWidth"), 0) || 0), t.data("bl") == e && t.data("bl", parseInt(t.css("borderLeftWidth"), 0) || 0), t.data("br") == e && t.data("br", parseInt(t.css("borderRightWidth"), 0) || 0), t.data("ls") == e && t.data("ls", parseInt(t.css("letterSpacing"), 0) || 0), t.data("lh") == e && t.data("lh", parseInt(t.css("lineHeight"), 0) || "auto"), t.data("minwidth") == e && t.data("minwidth", parseInt(t.css("minWidth"), 0) || 0), t.data("minheight") == e && t.data("minheight", parseInt(t.css("minHeight"), 0) || 0), t.data("maxwidth") == e && t.data("maxwidth", parseInt(t.css("maxWidth"), 0) || "none"), t.data("maxheight") == e && t.data("maxheight", parseInt(t.css("maxHeight"), 0) || "none"), t.data("wii") == e && t.data("wii", parseInt(t.css("width"), 0) || 0), t.data("hii") == e && t.data("hii", parseInt(t.css("height"), 0) || 0), t.data("wan") == e && t.data("wan", t.css("-webkit-transition")), t.data("moan") == e && t.data("moan", t.css("-moz-animation-transition")), t.data("man") == e && t.data("man", t.css("-ms-animation-transition")), t.data("ani") == e && t.data("ani", t.css("transition")), "auto" == t.data("lh") && t.data("lh", t.data("fsize") + 4), t.hasClass("tp-splitted") || (t.css("-webkit-transition", "none"), t.css("-moz-transition", "none"), t.css("-ms-transition", "none"), t.css("transition", "none"), punchgs.TweenLite.set(t, {
                fontSize: Math.round(t.data("fsize") * a.bw) + "px",
                letterSpacing: Math.floor(t.data("ls") * a.bw) + "px",
                paddingTop: Math.round(t.data("pt") * a.bh) + "px",
                paddingBottom: Math.round(t.data("pb") * a.bh) + "px",
                paddingLeft: Math.round(t.data("pl") * a.bw) + "px",
                paddingRight: Math.round(t.data("pr") * a.bw) + "px",
                marginTop: t.data("mt") * a.bh + "px",
                marginBottom: t.data("mb") * a.bh + "px",
                marginLeft: t.data("ml") * a.bw + "px",
                marginRight: t.data("mr") * a.bw + "px",
                borderTopWidth: Math.round(t.data("bt") * a.bh) + "px",
                borderBottomWidth: Math.round(t.data("bb") * a.bh) + "px",
                borderLeftWidth: Math.round(t.data("bl") * a.bw) + "px",
                borderRightWidth: Math.round(t.data("br") * a.bw) + "px",
                lineHeight: Math.round(t.data("lh") * a.bh) + "px",
                minWidth: t.data("minwidth") * a.bw + "px",
                minHeight: t.data("minheight") * a.bh + "px",
                overwrite: "auto"
            }), setTimeout(function() {
                t.css("-webkit-transition", t.data("wan")), t.css("-moz-transition", t.data("moan")), t.css("-ms-transition", t.data("man")), t.css("transition", t.data("ani"))
            }, 30), "none" != t.data("maxheight") && t.css({
                maxHeight: t.data("maxheight") * a.bh + "px"
            }), "none" != t.data("maxwidth") && t.css({
                maxWidth: t.data("maxwidth") * a.bw + "px"
            }))
        },
        Y = function(a, i) {
            a.find(".rs-pendulum").each(function() {
                var a = t(this);
                if (a.data("timeline") == e) {
                    a.data("timeline", new punchgs.TimelineLite);
                    var n = a.data("startdeg") == e ? -20 : a.data("startdeg"),
                        o = a.data("enddeg") == e ? 20 : a.data("enddeg"),
                        r = a.data("speed") == e ? 2 : a.data("speed"),
                        s = a.data("origin") == e ? "50% 50%" : a.data("origin"),
                        d = a.data("easing") == e ? punchgs.Power2.easeInOut : a.data("ease");
                    n *= i, o *= i, a.data("timeline").append(new punchgs.TweenLite.fromTo(a, r, {
                        force3D: "auto",
                        rotation: n,
                        transformOrigin: s
                    }, {
                        rotation: o,
                        ease: d
                    })), a.data("timeline").append(new punchgs.TweenLite.fromTo(a, r, {
                        force3D: "auto",
                        rotation: o,
                        transformOrigin: s
                    }, {
                        rotation: n,
                        ease: d,
                        onComplete: function() {
                            a.data("timeline").restart()
                        }
                    }))
                }
            }), a.find(".rs-rotate").each(function() {
                var a = t(this);
                if (a.data("timeline") == e) {
                    a.data("timeline", new punchgs.TimelineLite);
                    var n = a.data("startdeg") == e ? 0 : a.data("startdeg"),
                        o = a.data("enddeg") == e ? 360 : a.data("enddeg");
                    speed = a.data("speed") == e ? 2 : a.data("speed"), origin = a.data("origin") == e ? "50% 50%" : a.data("origin"), easing = a.data("easing") == e ? punchgs.Power2.easeInOut : a.data("easing"), n *= i, o *= i, a.data("timeline").append(new punchgs.TweenLite.fromTo(a, speed, {
                        force3D: "auto",
                        rotation: n,
                        transformOrigin: origin
                    }, {
                        rotation: o,
                        ease: easing,
                        onComplete: function() {
                            a.data("timeline").restart()
                        }
                    }))
                }
            }), a.find(".rs-slideloop").each(function() {
                var a = t(this);
                if (a.data("timeline") == e) {
                    a.data("timeline", new punchgs.TimelineLite);
                    var n = a.data("xs") == e ? 0 : a.data("xs"),
                        o = a.data("ys") == e ? 0 : a.data("ys"),
                        r = a.data("xe") == e ? 0 : a.data("xe"),
                        s = a.data("ye") == e ? 0 : a.data("ye"),
                        d = a.data("speed") == e ? 2 : a.data("speed"),
                        l = a.data("easing") == e ? punchgs.Power2.easeInOut : a.data("easing");
                    n *= i, o *= i, r *= i, s *= i, a.data("timeline").append(new punchgs.TweenLite.fromTo(a, d, {
                        force3D: "auto",
                        x: n,
                        y: o
                    }, {
                        x: r,
                        y: s,
                        ease: l
                    })), a.data("timeline").append(new punchgs.TweenLite.fromTo(a, d, {
                        force3D: "auto",
                        x: r,
                        y: s
                    }, {
                        x: n,
                        y: o,
                        onComplete: function() {
                            a.data("timeline").restart()
                        }
                    }))
                }
            }), a.find(".rs-pulse").each(function() {
                var a = t(this);
                if (a.data("timeline") == e) {
                    a.data("timeline", new punchgs.TimelineLite);
                    var i = a.data("zoomstart") == e ? 0 : a.data("zoomstart"),
                        n = a.data("zoomend") == e ? 0 : a.data("zoomend"),
                        o = a.data("speed") == e ? 2 : a.data("speed"),
                        r = a.data("easing") == e ? punchgs.Power2.easeInOut : a.data("easing");
                    a.data("timeline").append(new punchgs.TweenLite.fromTo(a, o, {
                        force3D: "auto",
                        scale: i
                    }, {
                        scale: n,
                        ease: r
                    })), a.data("timeline").append(new punchgs.TweenLite.fromTo(a, o, {
                        force3D: "auto",
                        scale: n
                    }, {
                        scale: i,
                        onComplete: function() {
                            a.data("timeline").restart()
                        }
                    }))
                }
            }), a.find(".rs-wave").each(function() {
                var a = t(this);
                if (a.data("timeline") == e) {
                    a.data("timeline", new punchgs.TimelineLite); {
                        var n = a.data("angle") == e ? 10 : a.data("angle"),
                            o = a.data("radius") == e ? 10 : a.data("radius"),
                            r = a.data("speed") == e ? -20 : a.data("speed");
                        a.data("origin") == e ? -20 : a.data("origin")
                    }
                    n *= i, o *= i;
                    var s = {
                        a: 0,
                        ang: n,
                        element: a,
                        unit: o
                    };
                    a.data("timeline").append(new punchgs.TweenLite.fromTo(s, r, {
                        a: 360
                    }, {
                        a: 0,
                        force3D: "auto",
                        ease: punchgs.Linear.easeNone,
                        onUpdate: function() {
                            var t = s.a * (Math.PI / 180);
                            punchgs.TweenLite.to(s.element, .1, {
                                force3D: "auto",
                                x: Math.cos(t) * s.unit,
                                y: s.unit * (1 - Math.sin(t))
                            })
                        },
                        onComplete: function() {
                            a.data("timeline").restart()
                        }
                    }))
                }
            })
        },
        R = function(a) {
            a.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
                var a = t(this);
                a.data("timeline") != e && (a.data("timeline").pause(), a.data("timeline", null))
            })
        },
        B = function(a, i) {
            var n = 0,
                o = a.find(".tp-caption"),
                r = i.container.find(".tp-static-layers").find(".tp-caption");
            return t.each(r, function(t, e) {
                o.push(e)
            }), o.each(function() {
                var a = -1,
                    o = t(this);
                if (o.hasClass("tp-static-layer") && ((-1 == o.data("startslide") || "-1" == o.data("startslide")) && o.data("startslide", 0), (-1 == o.data("endslide") || "-1" == o.data("endslide")) && o.data("endslide", i.slideamount), o.hasClass("tp-is-shown") ? o.data("startslide") > i.next || o.data("endslide") < i.next ? (a = 2, o.removeClass("tp-is-shown")) : a = 0 : a = 2), 0 != a) {
                    if (R(o), o.find("iframe").length > 0) {
                        punchgs.TweenLite.to(o.find("iframe"), .2, {
                            autoAlpha: 0
                        }), Z() && o.find("iframe").remove();
                        try {
                            var r = o.find("iframe"),
                                s = r.attr("id"),
                                d = $f(s);
                            d.api("pause"), clearTimeout(o.data("timerplay"))
                        } catch (l) {}
                        try {
                            var h = o.data("player");
                            h.stopVideo(), clearTimeout(o.data("timerplay"))
                        } catch (l) {}
                    }
                    if (o.find("video").length > 0) try {
                        o.find("video").each(function() {
                            {
                                var e = t(this).parent();
                                e.attr("id")
                            }
                            clearTimeout(e.data("timerplay"));
                            var a = this;
                            a.pause()
                        })
                    } catch (l) {}
                    try {
                        var c = o.data("timeline"),
                            p = c.getLabelTime("frame99"),
                            u = c.time();
                        if (p > u) {
                            var f = c.getTweensOf(o);
                            if (t.each(f, function(t, e) {
                                    0 != t && e.pause()
                                }), 0 != o.css("opacity")) {
                                var g = o.data(o.data("endspeed") == e ? "speed" : "endspeed");
                                g > n && (n = g), c.play("frame99")
                            } else c.progress(1, !1)
                        }
                    } catch (l) {}
                }
            }), n
        },
        V = function(t, a, i, n, o) {
            var r = t.data("timeline"),
                s = new punchgs.TimelineLite,
                d = t;
            "chars" == i.typ ? d = t.data("mySplitText").chars : "words" == i.typ ? d = t.data("mySplitText").words : "lines" == i.typ && (d = t.data("mySplitText").lines), i.animation.ease = i.ease, i.animation.rotationZ != e && (i.animation.rotation = i.animation.rotationZ), i.animation.data = new Object, i.animation.data.oldx = i.animation.x, i.animation.data.oldy = i.animation.y, i.animation.x = i.animation.x * o, i.animation.y = i.animation.y * o, r.add(s.staggerTo(d, i.speed, i.animation, i.elementdelay), i.start), r.addLabel(n, i.start), t.data("timeline", r)
        },
        q = function(t, a, i, n, o, r) {
            var s = t.data("timeline"),
                d = new punchgs.TimelineLite,
                l = D(),
                h = t.data(t.data("endspeed") == e ? "speed" : "endspeed"),
                c = t.attr("class");
            if (l.ease = t.data("endeasing") == e ? punchgs.Power1.easeInOut : t.data("endeasing"), h /= 1e3, c.match("ltr") || c.match("ltl") || c.match("str") || c.match("stl") || c.match("ltt") || c.match("ltb") || c.match("stt") || c.match("stb") || c.match("skewtoright") || c.match("skewtorightshort") || c.match("skewtoleft") || c.match("skewtoleftshort") || c.match("fadeout") || c.match("randomrotateout")) {
                c.match("skewtoright") || c.match("skewtorightshort") ? l.skewX = 35 : (c.match("skewtoleft") || c.match("skewtoleftshort")) && (l.skewX = -35), c.match("ltr") || c.match("skewtoright") ? l.x = a.width + 60 : c.match("ltl") || c.match("skewtoleft") ? l.x = 0 - (a.width + 60) : c.match("ltt") ? l.y = 0 - (a.height + 60) : c.match("ltb") ? l.y = a.height + 60 : c.match("str") || c.match("skewtorightshort") ? (l.x = 50, l.opacity = 0) : c.match("stl") || c.match("skewtoleftshort") ? (l.x = -50, l.opacity = 0) : c.match("stt") ? (l.y = -50, l.opacity = 0) : c.match("stb") ? (l.y = 50, l.opacity = 0) : c.match("randomrotateout") ? (l.x = Math.random() * a.width, l.y = Math.random() * a.height, l.scale = 2 * Math.random() + .3, l.rotation = 360 * Math.random() - 180, l.opacity = 0) : c.match("fadeout") && (l.opacity = 0), c.match("skewtorightshort") ? l.x = 270 : c.match("skewtoleftshort") && (l.x = -270), l.data = new Object, l.data.oldx = l.x, l.data.oldy = l.y, l.x = l.x * r, l.y = l.y * r, l.overwrite = "auto";
                var p = t,
                    p = t;
                "chars" == t.data("splitout") ? p = t.data("mySplitText").chars : "words" == t.data("splitout") ? p = t.data("mySplitText").words : "lines" == t.data("splitout") && (p = t.data("mySplitText").lines);
                var u = t.data("endelementdelay") == e ? 0 : t.data("endelementdelay");
                s.add(d.staggerTo(p, h, l, u), i)
            } else if (t.hasClass("customout")) {
                l = H(l, t.data("customout"));
                var p = t;
                "chars" == t.data("splitout") ? p = t.data("mySplitText").chars : "words" == t.data("splitout") ? p = t.data("mySplitText").words : "lines" == t.data("splitout") && (p = t.data("mySplitText").lines);
                var u = t.data("endelementdelay") == e ? 0 : t.data("endelementdelay");
                l.onStart = function() {
                    punchgs.TweenLite.set(t, {
                        transformPerspective: l.transformPerspective,
                        transformOrigin: l.transformOrigin,
                        overwrite: "auto"
                    })
                }, l.data = new Object, l.data.oldx = l.x, l.data.oldy = l.y, l.x = l.x * r, l.y = l.y * r, s.add(d.staggerTo(p, h, l, u), i)
            } else n.delay = 0, s.add(punchgs.TweenLite.to(t, h, n), i);
            s.addLabel(o, i), t.data("timeline", s)
        },
        E = function(e, a) {
            e.children().each(function() {
                try {
                    t(this).die("click")
                } catch (e) {}
                try {
                    t(this).die("mouseenter")
                } catch (e) {}
                try {
                    t(this).die("mouseleave")
                } catch (e) {}
                try {
                    t(this).unbind("hover")
                } catch (e) {}
            });
            try {
                e.die("click", "mouseenter", "mouseleave")
            } catch (i) {}
            clearInterval(a.cdint), e = null
        },
        j = function(a, i) {
            if (i.cd = 0, i.loop = 0, i.looptogo = i.stopAfterLoops != e && i.stopAfterLoops > -1 ? i.stopAfterLoops : 9999999, i.lastslidetoshow = i.stopAtSlide != e && i.stopAtSlide > -1 ? i.stopAtSlide : 999, i.stopLoop = "off", 0 == i.looptogo && (i.stopLoop = "on"), i.slideamount > 1 && (0 != i.stopAfterLoops || 1 != i.stopAtSlide)) {
                var n = a.find(".tp-bannertimer");
                a.on("stoptimer", function() {
                    var e = t(this).find(".tp-bannertimer");
                    e.data("tween").pause(), "on" == i.hideTimerBar && e.css({
                        visibility: "hidden"
                    })
                }), a.on("starttimer", function() {
                    1 != i.conthover && 1 != i.videoplaying && i.width > i.hideSliderAtLimit && 1 != i.bannertimeronpause && 1 != i.overnav && ("on" == i.stopLoop && i.next == i.lastslidetoshow - 1 || 1 == i.noloopanymore ? i.noloopanymore = 1 : (n.css({
                        visibility: "visible"
                    }), n.data("tween").resume())), "on" == i.hideTimerBar && n.css({
                        visibility: "hidden"
                    })
                }), a.on("restarttimer", function() {
                    var e = t(this).find(".tp-bannertimer");
                    "on" == i.stopLoop && i.next == i.lastslidetoshow - 1 || 1 == i.noloopanymore ? i.noloopanymore = 1 : (e.css({
                        visibility: "visible"
                    }), e.data("tween").kill(), e.data("tween", punchgs.TweenLite.fromTo(e, i.delay / 1e3, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: o,
                        delay: 1
                    }))), "on" == i.hideTimerBar && e.css({
                        visibility: "hidden"
                    })
                }), a.on("nulltimer", function() {
                    n.data("tween").pause(0), "on" == i.hideTimerBar && n.css({
                        visibility: "hidden"
                    })
                });
                var o = function() {
                    0 == t("body").find(a).length && (E(a, i), clearInterval(i.cdint)), a.trigger("revolution.slide.slideatend"), 1 == a.data("conthover-changed") && (i.conthover = a.data("conthover"), a.data("conthover-changed", 0)), i.act = i.next, i.next = i.next + 1, i.next > a.find(">ul >li").length - 1 && (i.next = 0, i.looptogo = i.looptogo - 1, i.looptogo <= 0 && (i.stopLoop = "on")), "on" == i.stopLoop && i.next == i.lastslidetoshow - 1 ? (a.find(".tp-bannertimer").css({
                        visibility: "hidden"
                    }), a.trigger("revolution.slide.onstop"), i.noloopanymore = 1) : n.data("tween").restart(), L(a, i)
                };
                n.data("tween", punchgs.TweenLite.fromTo(n, i.delay / 1e3, {
                    width: "0%"
                }, {
                    force3D: "auto",
                    width: "100%",
                    ease: punchgs.Linear.easeNone,
                    onComplete: o,
                    delay: 1
                })), n.data("opt", i), a.hover(function() {
                    if ("on" == i.onHoverStop && !Z()) {
                        a.trigger("stoptimer"), a.trigger("revolution.slide.onpause");
                        var n = a.find(">ul >li:eq(" + i.next + ") .slotholder");
                        n.find(".defaultimg").each(function() {
                            var a = t(this);
                            a.data("kenburn") != e && a.data("kenburn").pause()
                        })
                    }
                }, function() {
                    if (1 != a.data("conthover")) {
                        a.trigger("revolution.slide.onresume"), a.trigger("starttimer");
                        var n = a.find(">ul >li:eq(" + i.next + ") .slotholder");
                        n.find(".defaultimg").each(function() {
                            var a = t(this);
                            a.data("kenburn") != e && a.data("kenburn").play()
                        })
                    }
                })
            }
        },
        Z = function() {
            var t = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                e = !1;
            for (var a in t) navigator.userAgent.split(t[a]).length > 1 && (e = !0);
            return e
        },
        U = function(t, e, a) {
            var i = e.data("owidth"),
                n = e.data("oheight");
            if (i / n > a.width / a.height) {
                var o = a.container.width() / i,
                    r = n * o,
                    s = r / a.container.height() * t;
                return t *= 100 / s, s = 100, t = t, t + "% " + s + "% 1"
            }
            var o = a.container.width() / i,
                r = n * o,
                s = r / a.container.height() * t;
            return t + "% " + s + "%"
        },
        N = function(a, i, n, o) {
            try {
                {
                    a.find(">ul:first-child >li:eq(" + i.act + ")")
                }
            } catch (r) {
                {
                    a.find(">ul:first-child >li:eq(1)")
                }
            }
            i.lastslide = i.act;
            var d = a.find(">ul:first-child >li:eq(" + i.next + ")"),
                l = d.find(".slotholder"),
                h = l.data("bgposition"),
                c = l.data("bgpositionend"),
                p = l.data("zoomstart") / 100,
                u = l.data("zoomend") / 100,
                f = l.data("rotationstart"),
                g = l.data("rotationend"),
                m = l.data("bgfit"),
                v = l.data("bgfitend"),
                w = l.data("easeme"),
                b = l.data("duration") / 1e3,
                y = 100;
            m == e && (m = 100), v == e && (v = 100);
            var x = m,
                T = v;
            m = U(m, l, i), v = U(v, l, i), y = U(100, l, i), p == e && (p = 1), u == e && (u = 1), f == e && (f = 0), g == e && (g = 0), 1 > p && (p = 1), 1 > u && (u = 1);
            var k = new Object;
            k.w = parseInt(y.split(" ")[0], 0), k.h = parseInt(y.split(" ")[1], 0);
            var L = !1;
            "1" == y.split(" ")[2] && (L = !0), l.find(".defaultimg").each(function() {
                var e = t(this);
                0 == l.find(".kenburnimg").length ? l.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="' + e.attr("src") + '" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:' + k.w + "%;height:" + k.h + '%;"></div>') : l.find(".kenburnimg img").css({
                    width: k.w + "%",
                    height: k.h + "%"
                });
                var a = l.find(".kenburnimg img"),
                    n = G(i, h, m, a, L),
                    r = G(i, c, v, a, L);
                if (L && (n.w = x / 100, r.w = T / 100), o) {
                    punchgs.TweenLite.set(a, {
                        autoAlpha: 0,
                        transformPerspective: 1200,
                        transformOrigin: "0% 0%",
                        top: 0,
                        left: 0,
                        scale: n.w,
                        x: n.x,
                        y: n.y
                    });
                    var d = n.w,
                        p = d * a.width() - i.width,
                        u = d * a.height() - i.height,
                        f = Math.abs(n.x / p * 100),
                        y = Math.abs(n.y / u * 100);
                    0 == u && (y = 0), 0 == p && (f = 0), e.data("bgposition", f + "% " + y + "%"), s(8) || e.data("currotate", $(a)), s(8) || e.data("curscale", k.w * d + "%  " + (k.h * d + "%")), l.find(".kenburnimg").remove()
                } else e.data("kenburn", punchgs.TweenLite.fromTo(a, b, {
                    autoAlpha: 1,
                    force3D: punchgs.force3d,
                    transformOrigin: "0% 0%",
                    top: 0,
                    left: 0,
                    scale: n.w,
                    x: n.x,
                    y: n.y
                }, {
                    autoAlpha: 1,
                    rotationZ: g,
                    ease: w,
                    x: r.x,
                    y: r.y,
                    scale: r.w,
                    onUpdate: function() {
                        var t = a[0]._gsTransform.scaleX,
                            n = t * a.width() - i.width,
                            o = t * a.height() - i.height,
                            r = Math.abs(a[0]._gsTransform.x / n * 100),
                            d = Math.abs(a[0]._gsTransform.y / o * 100);
                        0 == o && (d = 0), 0 == n && (r = 0), e.data("bgposition", r + "% " + d + "%"), s(8) || e.data("currotate", $(a)), s(8) || e.data("curscale", k.w * t + "%  " + (k.h * t + "%"))
                    }
                }))
            })
        },
        G = function(t, e, a, i, n) {
            var o = new Object;
            switch (o.w = n ? parseInt(a.split(" ")[1], 0) / 100 : parseInt(a.split(" ")[0], 0) / 100, e) {
                case "left top":
                case "top left":
                    o.x = 0, o.y = 0;
                    break;
                case "center top":
                case "top center":
                    o.x = ((0 - i.width()) * o.w + parseInt(t.width, 0)) / 2, o.y = 0;
                    break;
                case "top right":
                case "right top":
                    o.x = (0 - i.width()) * o.w + parseInt(t.width, 0), o.y = 0;
                    break;
                case "center left":
                case "left center":
                    o.x = 0, o.y = ((0 - i.height()) * o.w + parseInt(t.height, 0)) / 2;
                    break;
                case "center center":
                    o.x = ((0 - i.width()) * o.w + parseInt(t.width, 0)) / 2, o.y = ((0 - i.height()) * o.w + parseInt(t.height, 0)) / 2;
                    break;
                case "center right":
                case "right center":
                    o.x = (0 - i.width()) * o.w + parseInt(t.width, 0), o.y = ((0 - i.height()) * o.w + parseInt(t.height, 0)) / 2;
                    break;
                case "bottom left":
                case "left bottom":
                    o.x = 0, o.y = (0 - i.height()) * o.w + parseInt(t.height, 0);
                    break;
                case "bottom center":
                case "center bottom":
                    o.x = ((0 - i.width()) * o.w + parseInt(t.width, 0)) / 2, o.y = (0 - i.height()) * o.w + parseInt(t.height, 0);
                    break;
                case "bottom right":
                case "right bottom":
                    o.x = (0 - i.width()) * o.w + parseInt(t.width, 0), o.y = (0 - i.height()) * o.w + parseInt(t.height, 0)
            }
            return o
        },
        $ = function(t) {
            var e = t.css("-webkit-transform") || t.css("-moz-transform") || t.css("-ms-transform") || t.css("-o-transform") || t.css("transform");
            if ("none" !== e) var a = e.split("(")[1].split(")")[0].split(","),
                i = a[0],
                n = a[1],
                o = Math.round(Math.atan2(n, i) * (180 / Math.PI));
            else var o = 0;
            return 0 > o ? o += 360 : o
        },
        J = function(a, i) {
            try {
                var n = a.find(">ul:first-child >li:eq(" + i.act + ")")
            } catch (o) {
                var n = a.find(">ul:first-child >li:eq(1)")
            }
            i.lastslide = i.act; {
                var r = a.find(">ul:first-child >li:eq(" + i.next + ")");
                n.find(".slotholder"), r.find(".slotholder")
            }
            a.find(".defaultimg").each(function() {
                var a = t(this);
                punchgs.TweenLite.killTweensOf(a, !1), punchgs.TweenLite.set(a, {
                    scale: 1,
                    rotationZ: 0
                }), punchgs.TweenLite.killTweensOf(a.data("kenburn img"), !1), a.data("kenburn") != e && a.data("kenburn").pause(), a.data("currotate") != e && a.data("bgposition") != e && a.data("curscale") != e && punchgs.TweenLite.set(a, {
                    rotation: a.data("currotate"),
                    backgroundPosition: a.data("bgposition"),
                    backgroundSize: a.data("curscale")
                }), a != e && a.data("kenburn img") != e && a.data("kenburn img").length > 0 && punchgs.TweenLite.set(a.data("kenburn img"), {
                    autoAlpha: 0
                })
            })
        },
        Q = function(a, i) {
            return Z() && "on" == i.parallaxDisableOnMobile ? !1 : (a.find(".tp-revslider-mainul >li").each(function() {
                for (var e = t(this), a = 1; 10 >= a; a++) e.find(".rs-parallaxlevel-" + a).each(function() {
                    var e = t(this);
                    e.wrapInner('<div style="position:relative;" class="tp-parallax-container" data-parallaxlevel="' + i.parallaxLevels[a - 1] + '"></div>')
                })
            }), ("mouse" == i.parallax || "scroll+mouse" == i.parallax || "mouse+scroll" == i.parallax) && (a.mouseenter(function(t) {
                var e = a.find(".current-sr-slide-visible"),
                    i = a.offset().top,
                    n = a.offset().left,
                    o = t.pageX - n,
                    r = t.pageY - i;
                e.data("enterx", o), e.data("entery", r)
            }), a.on("mousemove.hoverdir, mouseleave.hoverdir", function(n) {
                var o = a.find(".current-sr-slide-visible");
                switch (n.type) {
                    case "mousemove":
                        var r = a.offset().top,
                            s = a.offset().left;
                        o.data("enterx") == e && o.data("enterx", n.pageX - s), o.data("entery") == e && o.data("entery", n.pageY - r);
                        var d = o.data("enterx"),
                            l = o.data("entery"),
                            h = d - (n.pageX - s),
                            c = l - (n.pageY - r);
                        o.find(".tp-parallax-container").each(function() {
                            var e = t(this),
                                a = parseInt(e.data("parallaxlevel"), 0) / 100,
                                n = h * a,
                                o = c * a;
                            "scroll+mouse" == i.parallax || "mouse+scroll" == i.parallax ? punchgs.TweenLite.to(e, .4, {
                                force3D: "auto",
                                x: n,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(e, .4, {
                                force3D: "auto",
                                x: n,
                                y: o,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            })
                        });
                        break;
                    case "mouseleave":
                        o.find(".tp-parallax-container").each(function() {
                            var e = t(this);
                            "scroll+mouse" == i.parallax || "mouse+scroll" == i.parallax ? punchgs.TweenLite.to(e, 1.5, {
                                force3D: "auto",
                                x: 0,
                                ease: punchgs.Power3.easeOut
                            }) : punchgs.TweenLite.to(e, 1.5, {
                                force3D: "auto",
                                x: 0,
                                y: 0,
                                ease: punchgs.Power3.easeOut
                            })
                        })
                }
            }), Z() && (window.ondeviceorientation = function(e) {
                var i = Math.round(e.beta || 0),
                    n = Math.round(e.gamma || 0),
                    o = a.find(".current-sr-slide-visible");
                if (t(window).width() > t(window).height()) {
                    var r = n;
                    n = i, i = r
                }
                var s = 360 / a.width() * n,
                    d = 180 / a.height() * i;
                o.find(".tp-parallax-container").each(function() {
                    var e = t(this),
                        a = parseInt(e.data("parallaxlevel"), 0) / 100,
                        i = s * a,
                        n = d * a;
                    punchgs.TweenLite.to(e, .2, {
                        force3D: "auto",
                        x: i,
                        y: n,
                        ease: punchgs.Power3.easeOut
                    })
                })
            })), void(("scroll" == i.parallax || "scroll+mouse" == i.parallax || "mouse+scroll" == i.parallax) && t(window).on("scroll", function() {
                K(a, i)
            })))
        },
        K = function(e, a) {
            if (Z() && "on" == a.parallaxDisableOnMobile) return !1;
            var i = e.offset().top,
                n = t(window).scrollTop(),
                o = i + e.height() / 2,
                r = i + e.height() / 2 - n,
                s = t(window).height() / 2,
                d = s - r;
            s > o && (d -= s - o);
            e.find(".current-sr-slide-visible");
            if (e.find(".tp-parallax-container").each(function() {
                    var e = t(this),
                        a = parseInt(e.data("parallaxlevel"), 0) / 100,
                        i = d * a;
                    e.data("parallaxoffset", i), punchgs.TweenLite.to(e, .2, {
                        force3D: "auto",
                        y: i,
                        ease: punchgs.Power3.easeOut
                    })
                }), "on" != a.parallaxBgFreeze) {
                var l = a.parallaxLevels[0] / 100,
                    h = d * l;
                punchgs.TweenLite.to(e, .2, {
                    force3D: "auto",
                    y: h,
                    ease: punchgs.Power3.easeOut
                })
            }
        },
        te = function(a, i) {
            var n = a.parent();
            ("thumb" == i.navigationType || "both" == i.navsecond) && n.append('<div class="tp-bullets tp-thumbs ' + i.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
            var o = n.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
                r = o.parent();
            r.width(i.thumbWidth * i.thumbAmount), r.height(i.thumbHeight), r.parent().width(i.thumbWidth * i.thumbAmount), r.parent().height(i.thumbHeight), a.find(">ul:first >li").each(function(t) {
                var n = a.find(">ul:first >li:eq(" + t + ")"),
                    r = n.find(".defaultimg").css("backgroundColor");
                if (n.data("thumb") != e) var s = n.data("thumb");
                else var s = n.find("img:first").attr("src");
                o.append('<div class="bullet thumb" style="background-color:' + r + ";position:relative;width:" + i.thumbWidth + "px;height:" + i.thumbHeight + "px;background-image:url(" + s + ') !important;background-size:cover;background-position:center center;"></div>');
                o.find(".bullet:first")
            });
            var s = 10;
            o.find(".bullet").each(function(e) {
                var n = t(this);
                e == i.slideamount - 1 && n.addClass("last"), 0 == e && n.addClass("first"), n.width(i.thumbWidth), n.height(i.thumbHeight), s < n.outerWidth(!0) && (s = n.outerWidth(!0)), n.click(function() {
                    0 == i.transition && n.index() != i.act && (i.next = n.index(), d(i, a))
                })
            });
            var l = s * a.find(">ul:first >li").length,
                h = o.parent().width();
            i.thumbWidth = s, l > h && (t(document).mousemove(function(e) {
                t("body").data("mousex", e.pageX)
            }), o.parent().mouseenter(function() {
                var e = t(this),
                    i = e.offset(),
                    n = t("body").data("mousex") - i.left,
                    o = e.width(),
                    r = e.find(".bullet:first").outerWidth(!0),
                    s = r * a.find(">ul:first >li").length,
                    d = s - o + 15,
                    l = d / o;
                e.addClass("over"), n -= 30;
                var h = 0 - n * l;
                h > 0 && (h = 0), 0 - s + o > h && (h = 0 - s + o), ae(e, h, 200)
            }), o.parent().mousemove(function() {
                var e = t(this),
                    i = e.offset(),
                    n = t("body").data("mousex") - i.left,
                    o = e.width(),
                    r = e.find(".bullet:first").outerWidth(!0),
                    s = r * a.find(">ul:first >li").length - 1,
                    d = s - o + 15,
                    l = d / o;
                n -= 3, 6 > n && (n = 0), n + 3 > o - 6 && (n = o);
                var h = 0 - n * l;
                h > 0 && (h = 0), 0 - s + o > h && (h = 0 - s + o), ae(e, h, 0)
            }), o.parent().mouseleave(function() {
                var e = t(this);
                e.removeClass("over"), ee(a)
            }))
        },
        ee = function(t) {
            var e = t.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
                a = e.parent(),
                i = (a.offset(), a.find(".bullet:first").outerWidth(!0)),
                n = a.find(".bullet.selected").index() * i,
                o = a.width(),
                i = a.find(".bullet:first").outerWidth(!0),
                r = i * t.find(">ul:first >li").length,
                s = 0 - n;
            s > 0 && (s = 0), 0 - r + o > s && (s = 0 - r + o), a.hasClass("over") || ae(a, s, 200)
        },
        ae = function(t, e) {
            punchgs.TweenLite.to(t.find(".tp-thumbcontainer"), .2, {
                force3D: "auto",
                left: e,
                ease: punchgs.Power3.easeOut,
                overwrite: "auto"
            })
        }
}(jQuery);