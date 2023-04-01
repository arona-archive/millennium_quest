import {_ as D, o as A, c as C, b as k, d as N, e as I, f as u, g as W, h as S, i as b, n as P, u as T, j as O, k as U, l as $, w as v, v as w, a as j, m as Y, F as G, p as e, q as z, s as V} from "./index.cba6999c.js";
var q = "https://webusstatic.yo-star.com/bluearchive_jp_web/millennium_quest/prod/assets/BA_logo.7046c58d.png"
  , K = "https://webusstatic.yo-star.com/bluearchive_jp_web/millennium_quest/prod/assets/yostar_bottom.d2e8de97.png"
  , X = "https://webusstatic.yo-star.com/bluearchive_jp_web/millennium_quest/prod/assets/twitter_share_normal.1cb07f50.png"
  , Z = "https://webusstatic.yo-star.com/bluearchive_jp_web/millennium_quest/prod/assets/yostarBottom.5cc67b35.png"
  , J = "https://webusstatic.yo-star.com/bluearchive_jp_web/millennium_quest/prod/assets/yostarBottom.89a51789.png";
const Q = {}
  , uu = k('<div class="router-content" data-v-2d1cbe7b><a class="router-link" target="_blank" href="https://bluearchive.jp/terms" data-v-2d1cbe7b> \u5229\u7528\u898F\u7D04 </a><a class="router-link" target="_blank" href="https://bluearchive.jp/privacy" data-v-2d1cbe7b> \u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC </a><a class="router-link" target="_blank" href="https://bluearchive.jp/specific_business" data-v-2d1cbe7b> \u7279\u5B9A\u5546\u53D6\u5F15\u6CD5\u306B\u57FA\u3065\u304F\u8868\u793A </a><a class="router-link" target="_blank" href="https://bluearchive.jp/based" data-v-2d1cbe7b> \u8CC7\u91D1\u6C7A\u6E08\u6CD5\u306B\u57FA\u3065\u304F\u8868\u793A </a><a class="router-link" target="_blank" href="https://bluearchive.jp/fankit/guidelines" data-v-2d1cbe7b> \u4E8C\u6B21\u5275\u4F5C\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3 </a></div><div class="logo-content" data-v-2d1cbe7b><div class="logo-wrap" data-v-2d1cbe7b><img class="logo-yostar" src="' + J + '" alt="logo" data-v-2d1cbe7b></div></div>', 2)
  , tu = [uu];
function eu(a, f) {
    return A(),
    C("footer", null, tu)
}
var su = D(Q, [["render", eu], ["__scopeId", "data-v-2d1cbe7b"]]);
const ou = {
    class: "dialog-wrapper"
}
  , lu = {
    class: "modal-wrapper",
    "data-radio": "837/433"
}
  , nu = {
    class: "modal-container"
}
  , iu = {
    class: "dialog-content"
}
  , au = N({
    __name: "index",
    emits: ["close"],
    setup(a, {emit: f}) {
        const {width: p, height: r} = S()
          , n = ()=>{
            f("close")
        }
          , B = ()=>{
            const l = document.querySelector(".modal-wrapper")
              , c = l == null ? void 0 : l.getAttribute("data-radio")
              , [g,m] = c.split("/")
              , i = Number(m) * p * .5 / Number(g);
            document.body.getAttribute("data-rotate") === "0" ? l == null || l.setAttribute("style", `height: ${i / r * 100}vh`) : l == null || l.setAttribute("style", `height: ${i / r * 100}vw`)
        }
        ;
        return I(()=>{
            B()
        }
        ),
        window.addEventListener("resize", B),
        (l,c)=>(A(),
        C("div", ou, [u("div", lu, [u("div", {
            class: "close-icon",
            onClick: n
        }), u("div", nu, [u("div", iu, [W(l.$slots, "content", {}, void 0, !0)])])])]))
    }
});
var ru = D(au, [["__scopeId", "data-v-a7a27d5a"]]);
function cu() {
    return typeof window.orientation != "undefined" || navigator.userAgent.indexOf("IEMobile") !== -1
}
const t = a=>(z("data-v-d652561a"),
a = a(),
V(),
a)
  , du = t(()=>u("img", {
    src: q,
    alt: "logo",
    class: "absolute left-1/2 top-[3.8rem] w-[23.9%] -translate-x-1/2 object-contain max-md:hidden xl:hidden"
}, null, -1))
  , _u = t(()=>u("img", {
    src: K,
    alt: "logo",
    class: "absolute top-[4%] right-0 w-[15%] md:hidden"
}, null, -1))
  , hu = {
    class: "game-wrapper"
}
  , Eu = t(()=>u("img", {
    src: X,
    class: "h-full w-full",
    alt: "share"
}, null, -1))
  , bu = [Eu]
  , Au = t(()=>u("div", {
    class: "right-content_wrapper"
}, null, -1))
  , pu = {
    key: 0,
    src: Z,
    alt: "logo",
    class: "absolute left-1/2 bottom-[3.1rem] w-[34.23%] -translate-x-1/2 object-contain max-md:hidden xl:hidden"
}
  , Bu = {
    class: "slot whitespace-pre-line font-dot text-[3rem] text-white"
}
  , mu = t(()=>u("p", {
    class: "text-[4.167rem]"
}, " \u3010\u6CE8\u610F\u4E8B\u9805\u3011 ", -1))
  , Fu = t(()=>u("br", null, null, -1))
  , Cu = t(()=>u("br", null, null, -1))
  , fu = t(()=>u("br", null, null, -1))
  , gu = t(()=>u("p", {
    class: "text-[4.167rem]"
}, " \u3010\u975E\u63A8\u5968OS\u3011 ", -1))
  , Tu = t(()=>u("br", null, null, -1))
  , vu = t(()=>u("br", null, null, -1))
  , wu = t(()=>u("p", {
    class: "text-[4.167rem]"
}, " \u3010\u30E9\u30A4\u30BB\u30F3\u30B9\u8868\u8A18\u3011 ", -1))
  , Iu = t(()=>u("br", null, null, -1))
  , Du = t(()=>u("br", null, null, -1))
  , Ru = t(()=>u("br", null, null, -1))
  , Ou = t(()=>u("br", null, null, -1))
  , Nu = t(()=>u("br", null, null, -1))
  , Su = t(()=>u("br", null, null, -1))
  , yu = t(()=>u("br", null, null, -1))
  , xu = t(()=>u("br", null, null, -1))
  , Lu = t(()=>u("br", null, null, -1))
  , Hu = t(()=>u("br", null, null, -1))
  , Mu = t(()=>u("br", null, null, -1))
  , ku = t(()=>u("br", null, null, -1))
  , Wu = t(()=>u("br", null, null, -1))
  , Pu = t(()=>u("br", null, null, -1))
  , Uu = t(()=>u("br", null, null, -1))
  , $u = t(()=>u("br", null, null, -1))
  , ju = t(()=>u("br", null, null, -1))
  , Yu = t(()=>u("br", null, null, -1))
  , Gu = t(()=>u("br", null, null, -1))
  , zu = t(()=>u("br", null, null, -1))
  , Vu = t(()=>u("br", null, null, -1))
  , qu = t(()=>u("br", null, null, -1))
  , Ku = t(()=>u("br", null, null, -1))
  , Xu = t(()=>u("br", null, null, -1))
  , Zu = t(()=>u("br", null, null, -1))
  , Ju = t(()=>u("br", null, null, -1))
  , Qu = t(()=>u("br", null, null, -1))
  , ut = t(()=>u("br", null, null, -1))
  , tt = t(()=>u("br", null, null, -1))
  , et = t(()=>u("br", null, null, -1))
  , st = t(()=>u("br", null, null, -1))
  , ot = t(()=>u("br", null, null, -1))
  , lt = t(()=>u("br", null, null, -1))
  , nt = {
    class: "slot whitespace-pre-line font-dot text-[3rem] text-white"
}
  , it = t(()=>u("p", {
    class: "text-[4.167rem]"
}, " \u3010\u79FB\u52D5\u6642\u306E\u64CD\u4F5C\u8AAC\u660E\u3011 ", -1))
  , at = t(()=>u("br", null, null, -1))
  , rt = t(()=>u("br", null, null, -1))
  , ct = t(()=>u("br", null, null, -1))
  , dt = t(()=>u("br", null, null, -1))
  , _t = t(()=>u("p", {
    class: "text-[4.167rem]"
}, " \u3010\u30B3\u30DE\u30F3\u30C9\u9078\u629E\u6642\u306E\u64CD\u4F5C\u8AAC\u660E\u3011 ", -1))
  , ht = t(()=>u("br", null, null, -1))
  , Et = t(()=>u("br", null, null, -1))
  , bt = t(()=>u("br", null, null, -1))
  , At = t(()=>u("br", null, null, -1))
  , pt = t(()=>u("br", null, null, -1))
  , Bt = t(()=>u("p", {
    class: "text-[4.167rem]"
}, " \u3010\u79FB\u52D5\u4E2D\u30B3\u30DE\u30F3\u30C9\u306E\u5F79\u5272\u3011 ", -1))
  , mt = t(()=>u("br", null, null, -1))
  , Ft = t(()=>u("br", null, null, -1))
  , Ct = t(()=>u("br", null, null, -1))
  , ft = t(()=>u("br", null, null, -1))
  , gt = t(()=>u("br", null, null, -1))
  , Tt = t(()=>u("br", null, null, -1))
  , vt = t(()=>u("br", null, null, -1))
  , wt = t(()=>u("br", null, null, -1))
  , It = t(()=>u("br", null, null, -1))
  , Dt = t(()=>u("br", null, null, -1))
  , Rt = t(()=>u("p", {
    class: "text-[4.167rem]"
}, " \u3010\u30D0\u30C8\u30EB\u4E2D\u30B3\u30DE\u30F3\u30C9\u306E\u5F79\u5272\u3011 ", -1))
  , Ot = t(()=>u("br", null, null, -1))
  , Nt = t(()=>u("br", null, null, -1))
  , St = t(()=>u("br", null, null, -1))
  , yt = t(()=>u("br", null, null, -1))
  , xt = N({
    __name: "index",
    setup(a) {
        const {width: f, height: p} = S()
          , r = cu()
          , n = b(null)
          , B = b(0)
          , l = b(0)
          , c = ()=>{
            var h, d, _, E, R;
            const {width: s, height: o} = ((h = n.value) == null ? void 0 : h.getBoundingClientRect()) || {};
            B.value = s,
            l.value = o,
            s && o && (s / o > 1.7777777777777777 ? ((d = n.value) == null || d.classList.add("w-full"),
            (_ = n.value) == null || _.classList.remove("h-full")) : ((E = n.value) == null || E.classList.add("h-full"),
            (R = n.value) == null || R.classList.remove("w-full")))
        }
          , g = s=>{
            let o = s.getAttribute("data-radio");
            return navigator.userAgent.match(/iPad/i) ? o = s.getAttribute("data-radio2") : navigator.userAgent.match(/iPhone|Android|Mobile/i) ? o = s.getAttribute("data-radio3") : o = s.getAttribute("data-radio"),
            o
        }
          , m = ()=>{
            const s = document.querySelector(".iframe-wrap")
              , o = g(s)
              , [h,d] = o.split("/")
              , _ = s == null ? void 0 : s.clientWidth
              , E = Number(d) * _ / Number(h);
            document.body.getAttribute("data-rotate") === "0" ? s == null || s.setAttribute("style", `height: ${E / p * 100}vh`) : s == null || s.setAttribute("style", `height: ${E / p * 100}vw`)
        }
          , i = b(!1)
          , F = b(!1)
          , y = ()=>{
            i.value = !0
        }
          , x = ()=>{
            F.value = !0
        }
          , L = ()=>{
            i.value = !1,
            F.value = !1
        }
          , H = ()=>{
            var o;
            const s = document.createElement("iframe");
            s.src = "static_prod2/index.html",
            s.id = "game-iframe",
            s.className = "object-cover w-full h-full",
            s.onload = function() {
                document.getElementsByTagName("iframe")[0].contentDocument
            }
            ,
            (o = n.value) == null || o.appendChild(s)
        }
          , M = ()=>{
            const s = window.location.href
              , o = localStorage.getItem("CLEAR_FLAG")
              , d = [`\u30DF\u30EC\u30CB\u30A2\u30E0\u30AF\u30A8\u30B9\u30C8\u3092\u904A\u3093\u3067\u3044\u307E\u3059\uFF01
 \u4E00\u7DD2\u306B\u904A\u3093\u3067\u307F\u307E\u3057\u3087\u3046\uFF01
 
 \u25BC\u30B2\u30FC\u30E0\u306F\u3053\u3061\u3089
 ${s}
 #\u30D6\u30EB\u30A2\u30AB
 #\u30DF\u30EC\u30CB\u30A2\u30E0\u30AF\u30A8\u30B9\u30C8`, `\u30DF\u30EC\u30CB\u30A2\u30E0\u30AF\u30A8\u30B9\u30C8\u3067\u9B54\u738B\u306E\u624B\u304B\u3089\u4E16\u754C\u3092\u6551\u3044\u307E\u3057\u305F\uFF01
 \u79C1\u305F\u3061\u306E\u5192\u967A\u306F\u3053\u308C\u304B\u3089\u3060\uFF01
 
 \u25BC\u30B2\u30FC\u30E0\u306F\u3053\u3061\u3089
  ${s}
 #\u30D6\u30EB\u30A2\u30AB
 #\u30DF\u30EC\u30CB\u30A2\u30E0\u30AF\u30A8\u30B9\u30C8`, `\u30DF\u30EC\u30CB\u30A2\u30E0\u30AF\u30A8\u30B9\u30C8\u3092\u5B8C\u5168\u30AF\u30EA\u30A2\u3057\u307E\u3057\u305F\uFF01
 Congratulations\uFF01
 
 \u25BC\u30B2\u30FC\u30E0\u306F\u3053\u3061\u3089
  ${s}
 #\u30D6\u30EB\u30A2\u30AB
 #\u30DF\u30EC\u30CB\u30A2\u30E0\u30AF\u30A8\u30B9\u30C8`][o]
              , _ = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(d);
            window.open(_, "_blank", "noopener noreferrer")
        }
        ;
        return I(()=>{
            P(()=>{
                H(),
                m()
            }
            )
        }
        ),
        c(),
        I(()=>{
            window.addEventListener("resize", c),
            window.addEventListener("resize", m),
            c()
        }
        ),
        (s,o)=>(A(),
        C(G, null, [u("div", {
            class: U(["content-wrapper h-full", {
                mob: T(r)
            }])
        }, [du, _u, u("div", {
            class: "left-icon_wrapper"
        }, [u("div", {
            class: "tips_icon",
            onClick: y
        }), u("div", {
            class: "mind_icon",
            onClick: x
        })]), u("div", hu, [u("div", {
            ref_key: "iframeWrap",
            ref: n,
            class: "iframe-wrap mx-auto",
            "data-radio": "1110/693",
            "data-radio2": "1821/1137",
            "data-radio3": "1880/1170"
        }, [u("div", {
            class: "share-img",
            onClick: M
        }, bu)], 512)]), Au, T(r) ? (A(),
        C("img", pu)) : O("", !0)], 2), T(r) ? O("", !0) : (A(),
        $(su, {
            key: 0
        })), v(j(ru, {
            class: "fixed top-0 left-0 right-0 bottom-0 z-[9999999999999] bg-[rgba(0,0,0,0.9)]",
            onClose: L
        }, {
            content: Y(()=>[v(u("div", Bu, [mu, e(" \u30FB\u8D77\u52D5\u306B\u6642\u9593\u304C\u304B\u304B\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u753B\u9762\u304C\u6697\u3044\u5834\u5408\u3067\u3082\u3001\u305D\u306E\u307E\u307E\u3067\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002"), Fu, e(" \u30FB\u672CWeb\u30B2\u30FC\u30E0\u306B\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u30D6\u30E9\u30A6\u30B6\u3092\u30EA\u30ED\u30FC\u30C9\u3057\u305F\u5834\u5408\u3084\u3001\u30BF\u30D6\u3092\u9589\u3058\u305F\u5834\u5408\u306B\u3001\u30C7\u30FC\u30BF\u306F\u30BB\u30FC\u30D6\u3055\u308C\u307E\u305B\u3093\u3002"), Cu, fu, gu, e(" \u4E0B\u8A18OS\u306F\u975E\u63A8\u5968\u3068\u306A\u308A\u307E\u3059\u3002 \u30FBiOS 15.x \u4EE5\u4E0B \u30FBiPad OS 15.x \u4EE5\u4E0B"), Tu, vu, wu, e(" UniRx The MIT License (MIT) Copyright (c) 2018 Yoshifumi Kawai"), Iu, e(" Permission is hereby granted, free of charge, to any person obtaining a"), Du, e(" copy of this software and associated documentation files (the"), Ru, e(' ""Software""), to deal in the Software without restriction, including'), Ou, e(" without limitation the rights to use, copy, modify, merge, publish,"), Nu, e(" distribute, sublicense, and/or sell copies of the Software, and to"), Su, e(" permit persons to whom the Software is furnished to do so, subject to"), yu, e(" the following conditions: The above copyright notice and this permission"), xu, e(" notice shall be included in all copies or substantial portions of the"), Lu, e(' Software. THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY'), Hu, e(" KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF"), Mu, e(" MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT."), ku, e(" IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY"), Wu, e(" CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,"), Pu, e(" TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE"), Uu, e(" SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."), $u, e(" -------------------------------------- "), ju, e(" UniTask The MIT License (MIT)"), Yu, e(" Copyright (c) 2019 Yoshifumi Kawai / Cysharp, Inc. Permission is hereby"), Gu, e(" granted, free of charge, to any person obtaining a copy of this software"), zu, e(' and associated documentation files (the ""Software""), to deal in the'), Vu, e(" Software without restriction, including without limitation the rights to"), qu, e(" use, copy, modify, merge, publish, distribute, sublicense, and/or sell"), Ku, e(" copies of the Software, and to permit persons to whom the Software is"), Xu, e(" furnished to do so, subject to the following conditions: The above"), Zu, e(" copyright notice and this permission notice shall be included in all"), Ju, e(" copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED"), Qu, e(' ""AS IS"", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING'), ut, e(" BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A"), tt, e(" PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR"), et, e(" COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,"), st, e(" WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT"), ot, e(" OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN"), lt, e(" THE SOFTWARE. ")], 512), [[w, F.value]]), v(u("div", nt, [it, at, e(" Z (Enter): \u79FB\u52D5\u4E2D\u30B3\u30DE\u30F3\u30C9\u3092\u958B\u304D\u307E\u3059"), rt, e(" \u77E2\u5370\u30AD\u30FC (WASD): \u79FB\u52D5\u3092\u3057\u307E\u3059"), ct, dt, _t, ht, e(" Z (Enter): \u6C7A\u5B9A\u3092\u3057\u307E\u3059"), Et, e(" X (Esc) \u524D\u306E\u753B\u9762\u306B\u623B\u308A\u307E\u3059"), bt, e(" \u77E2\u5370\u30AD\u30FC (WASD): \u79FB\u52D5\u3092\u3057\u307E\u3059"), At, pt, Bt, mt, e(" \u306F\u306A\u3059: \u8FD1\u304F\u306E\u4EBA\u3068\u4F1A\u8A71\u3057\u307E\u3059"), Ft, e(" \u3058\u3085\u3082\u3093: \u3042\u308A\u3059\u304C\u899A\u3048\u3066\u3044\u308B\u3058\u3085\u3082\u3093\u3092\u78BA\u8A8D\u3057\u307E\u3059"), Ct, e(" \u3064\u3088\u3055: \u3042\u308A\u3059\u306E\u3064\u3088\u3055\u3092\u78BA\u8A8D\u3057\u307E\u3059"), ft, e(" \u3069\u3046\u3050: \u3042\u308A\u3059\u304C\u6301\u3063\u3066\u3044\u308B\u3069\u3046\u3050\u3092\u78BA\u8A8D\u3057\u307E\u3059"), gt, e(" \u304B\u3044\u3060\u3093:\u8FD1\u304F\u306E \u304B\u3044\u3060\u3093\u3092\u4F7F\u3044\u307E\u3059 (\u203B\u30B2\u30FC\u30E0\u4E2D\u306B\u968E\u6BB5\u306F\u767B\u5834\u3057\u307E\u305B\u3093)"), Tt, e(" \u3057\u3089\u3079\u308B: \u8EAB\u306E\u56DE\u308A\u3092\u3057\u3089\u3079\u307E\u3059"), vt, e(" \u3068\u3073\u3089: \u8FD1\u304F\u306E\u3068\u3073\u3089\u3092\u958B\u3051\u307E\u3059"), wt, e(" \u3068\u308B: \u8DB3\u5143\u306E\u3082\u306E\u3092\u3068\u308A\u307E\u3059"), It, Dt, Rt, Ot, e(" \u305F\u305F\u304B\u3046: \u6575\u306B\u5BFE\u3057\u3066\u3053\u3046\u3052\u304D\u3057\u307E\u3059"), Nt, e(" \u3058\u3085\u3082\u3093: \u3042\u308A\u3059\u304C\u899A\u3048\u3066\u3044\u308B\u3058\u3085\u3082\u3093\u3092\u78BA\u8A8D\u3057\u307E\u3059"), St, e(" \u306B\u3052\u308B: \u6575\u304B\u3089\u306B\u3052\u3060\u3057\u307E\u3059 (\u306B\u3052\u3089\u308C\u306A\u3044\u3053\u3068\u3082\u3042\u308A\u307E\u3059)"), yt, e(" \u3069\u3046\u3050: \u3042\u308A\u3059\u304C\u6301\u3063\u3066\u3044\u308B\u3069\u3046\u3050\u3092\u78BA\u8A8D\u3057\u307E\u3059 ")], 512), [[w, i.value]])]),
            _: 1
        }, 512), [[w, F.value || i.value]])], 64))
    }
});
var Mt = D(xt, [["__scopeId", "data-v-d652561a"]]);
export {Mt as default};
