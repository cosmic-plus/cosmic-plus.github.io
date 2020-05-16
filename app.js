(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(t,e,n){"use strict";n(145),n(123),n(52),n(124),n(108),n(149);var o=n(92),i=n(98),s=n(96),a=n(95),r=n(94);function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return a(this,n)}}var l=n(102),u=n(152).content,p=function(t){s(n,t);var e=c(n);function n(t){var i;return o(this,n),(i=e.call(this,"%formatItem:items...")).items=u.filter((function(e){return e.type===t}))||[],i}return i(n,[{key:"formatItem",value:function(t){return new n.Section(t)}}]),n}(l);p.Section=function(t){s(n,t);var e=c(n);function n(t){return o(this,n),e.call(this,'\n<section class="ContentSection" %style>\n  %toBackground:background\n  <aside>%short_desc</aside>\n  <h2>%name</h2>\n  <p>%description</p>\n  <nav>%toLink:links...</nav>\n</section>\n    ',t)}return i(n,[{key:"toLink",value:function(t){return t[1].startsWith("#")?new l("<a href=%1 >%0</a>",t):new l('<a href=%1 target="_blank" rel="noopener">%0</a>',t)}},{key:"toBackground",value:function(t){if(t)return new l('<img class="background" src=%background>',{background:t})}}]),n}(l),t.exports=p},152:function(t){t.exports=JSON.parse('{"content":[{"name":"Cosmic.link","short_desc":"Transaction Request","description":"The Cosmic.link website provides a convenient way to share Stellar transaction requests as URL. It is a front-end for the CosmicLink protocol, which implement a way to sign transactions from wallet-independent applications without disclosing your private key.","background":"https://cosmic.link/icons/512x512.png","type":"webapp","links":[["Source Code","https://git.cosmic.plus/webapp-cosmic-link"],["Bug Report","https://git.cosmic.plus/webapp-cosmic-link/issues"],["Open","https://cosmic.link"]]},{"name":"Equilibre.io","short_desc":"Portfolio Balancer","description":"Equilibre.io is a portfolio balancer that runs on the Stellar Decentralized Exchange. It is a convenient trading tool to manage long-term positions. Regularly balancing an investment portfolio is known to boost its performances, providing you choose wisely the assets to bet on.","background":"https://equilibre.io/icons/512x512.png","type":"webapp","links":[["Source code","https://git.cosmic.plus/webapp-equilibre-io"],["Bug Report","https://git.cosmic.plus/webapp-equilibre-io/issues"],["Open","https://equilibre.io"]]},{"name":"Stellar-Authenticator.org","short_desc":"Wallet","description":"Stellar Authenticator is a security-oriented wallet for the Stellar blockchain. It has been designed after the functionalities of an hardware wallet. It means that it packs only what is required to make your funds as safe as possible. Strictly limiting the scope of the software makes it easier to review & to keep secure.","background":"https://stellar-authenticator.org/icons/512x512.png","type":"webapp","links":[["Source code","https://git.cosmic.plus/webapp-stellar-authenticator"],["Bug Report","https://git.cosmic.plus/webapp-stellar-authenticator/issues"],["Open","https://stellar-authenticator.org"]]},{"name":"cosmic-lib","short_desc":"Transaction Request","description":"Implements both ends of the CosmicLink protocol. Applications can use this library to generate Stellar transactions requests that the user can sign using its own wallet. Wallets can use this library to decode, display & sign those transaction requests.","type":"libjs","links":[["Source Code","https://git.cosmic.plus/js-cosmic-lib"],["NPM","https://npmjs.com/cosmic-lib"],["Documentation","#view:js-cosmic-lib/web/doc/"]]},{"name":"ledger-wallet","short_desc":"Hardware Wallet","description":"A wrapper around official Ledger libraries that makes it incredibly simple to implement Ledger Wallet support for Stellar. Works in both web & Node.js environments.","type":"libjs","links":[["Source Code","https://git.cosmic.plus/js-ledger-wallet"],["NPM","https://npmjs.com/@cosmic-plus/ledger-wallet"],["Documentation","#view:js-ledger-wallet/"]]},{"name":"trezor-wallet","short_desc":"Hardware Wallet","description":"This is a convenient wrapper around the official TrezorConnect library. It enables you to connect to Trezor devices and sign Stellar transactions in a few lines of code. This library is browser-only.","type":"libjs","links":[["Source Code","https://git.cosmic.plus/js-trezor-wallet"],["NPM","https://npmjs.com/@cosmic-plus/trezor-wallet"],["Documentation","#view:js-trezor-wallet"]]},{"name":"oc-multisig","short_desc":"Multisignature Coordination","description":"On-Chain Multisig is a signature sharing solution that is built on top of the Stellar ledger. It allows to coordinate multi-signature accounts in a distributed & trustless manner, when strong security is required. It can pass data through Stellar public, test or custom network: it is not required that signatures are transmitted on the same network that the multi-signature account.","type":"libjs","links":[["Source Code","https://git.cosmic.plus/js-oc-multisig"],["NPM","https://npmjs.com/@cosmic-plus/oc-multisig"],["Documentation","#view:js-oc-multisig/"]]},{"name":"loopcall","short_desc":"Data Fetching","description":"Loopcall enables unlimited queries to Horizon. You can for example fetch the complete transaction history of an account in two lines of code.","type":"libjs","links":[["Source Code","https://git.cosmic.plus/js-loopcall"],["NPM","https://npmjs.com/@cosmic-plus/loopcall"],["Documentation","#view:js-loopcall/"]]},{"name":"tx-result","short_desc":"Helper","description":"After posting a transaction to the network, most software needs to display comprehensive feedback to the user. This library produces human-readable descriptions for any possible code Stellar Core returns.","type":"libjs","links":[["Source Code","https://git.cosmic.plus/tx-result"],["NPM","https://npmjs.com/@cosmic-plus/tx-result"],["Documentation","#view:js-tx-result/"]]}]}')},153:function(t,e,n){"use strict";n(125),n(155),n(157),n(100),n(108),n(127),n(111),n(158),n(159);var o=t.exports,i=n(93),s=i.create("iframe",".urlView");i.append(document.body,s);var a=window.location.href.split("/",3).join("/")+"/",r=new RegExp("^".concat(a,"(.*)")),c=new RegExp("^".concat(a,"#view:"));o.open=function(t){s.src=a+t.replace("%23","#"),function(t,e){var n=t.contentWindow,o=n.document,i=setInterval((function(){var t=n.document;if(o!==t){var s=t.readyState;"interactive"!==s&&"complete"!==s||(e(),clearInterval(i))}}),40)}(s,(function(){return function(t){var e=t.contentWindow.document;for(var n in e.links){var o=e.links[n];if(o&&o.href){o.href.match(c)&&(o.href=o.href.replace("#view:",""));var i=o.href.match(r);i?function(){var t=i[1].replace("#","%23");o.href="".concat(a,"#view:").concat(t),o.onclick=function(e){e.preventDefault(),location.hash="#view:".concat(t)}}():"#"!==o.href.substr(0,1)&&(o.target="_blank",o.rel="noopener")}}}(s)})),i.show(s)},o.close=function(){i.hide(s),s.src="about:blank"}},160:function(t,e){t.exports="<section><h2>Mission</h2>\n\n  <ul>\n\n    <li>Release client-side-only applications that demonstrate the unique\n      potential of Stellar.</li>\n\n    <li>Provide a high-level open-source development kit to build Stellar\n      applications.</li>\n\n    <li>Implement and promote a way to secure users funds by decoupling wallets\n      from other services (CosmicLink, SEP-0007).</li>\n\n    <li>Defend the interests of the community by promoting balanced &\n      vendor-neutral solutions at the protocol level (CAP, SEP).</li>\n\n    <li>Promote free software as a way to globally raise the quality of the\n      Stellar ecosystem.</li>\n\n  </ul>\n\n</section>\n\n\n<section><h2>Philosophy</h2>\n\n  <p>Cosmic.plus embraces the cooperative mindset of the free software\n  community. Each Cosmic.plus product gets released in the public domain, under\n  the MIT license.</p>\n\n  <p>In a competitive space such as the Stellar ecosystem, most actors\n  strive to create an edge against competitors. The drawback is that features\n  that could benefit the whole space are generally jailed in private code\n  repositories.</p>\n\n  <p>By releasing software, libraries & innovative protocols in the public\n  domain, Cosmic.plus aims at globally improving Stellar's ecosystem quality.\n  Instead of coding the same functionalities, again and again, developers are\n  offered an opportunity to focus on what makes their software unique.</p>\n\n</section>\n\n<section><h2>Economic Model</h2>\n\n  <p>It is always a bit tricky to profitably develop open-source software over\n  the long-term. So far, Cosmic.plus financed itself thanks to programs such as\n  the Stellar Build Contest or the Stellar Community Fund</p>\n\n  <p>While the research & development budget is not secured yet, a fund\n  exclusively dedicated to long-term maintenance has been put aside. This\n  guarantees that, in any scenario, Cosmic.plus existing products will remain\n  up-to-date for years.</p>\n\n  <p>There are ongoing plans to make Cosmic.plus financially independent without\n  sacrificing its ethic. Realistically, this could take a couple of years to\n  achieve.</p>\n\n</section>\n\n<section><h2>Privacy</h2>\n\n  <p>Privacy is a right. Cosmic.plus applications and libraries don't use\n  ads nor trackers and don't collect or publish data about users activity.\n  However, Cosmic.plus web applications are distributed through GitHub,\n  Cloudflare and to a lesser extent Azure. Those services may keep logs about\n  user activity.</p>\n\n</section>\n"},161:function(t,e,n){"use strict";var o=n(112),i=n(93),s=n(162),a=n(172);i.append(o.footer,new a(n(176),"Follow on Twitter","https://twitter.com/cosmic_plus"),new a(n(177),"Follow on Reddit","https://reddit.com/r/cosmic_plus"),new a(n(178),"Follow on Medium","https://medium.com/cosmic-plus"),new a(n(179),"Chat on Telegram","https://t.me/cosmic_plus"),new a(n(180),"Chat on Keybase","https://keybase.io/team/cosmic_plus"),new a(n(181),"Source-code on GitHub","https://git.cosmic.plus"),new a(n(182),"Contact by Email","mailto:mister.ticot@cosmic.plus"),new a(n(183),"Donate Lumens",s))},162:function(t,e,n){"use strict";n(125),n(163);var o=n(166);t.exports=function(){var t=prompt("Cosmic.plus welcome donations. Each contribution matters. :)\n\nAmount in Lumens:");isNaN(Number(t))?confirm("Not a valid amount: ".concat(t)):t&&function(t){var e="".concat("https://cosmic.link/?payment&network=public","&memo=").concat("Donation%20to%20Cosmic.plus","&amount=").concat(t,"&destination=").concat("GAWO2C52D57XBT7SQL6YB3XPHFLFD2J4Z5RN7HPFZSHXJMXH72HRXNV3");new o(e)}(t)}},172:function(t,e,n){"use strict";n(123),n(52),n(124),n(100),n(108),n(127),n(173);var o=n(92),i=n(96),s=n(95),a=n(94);function r(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=a(t);if(e){var i=a(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return s(this,n)}}var c=n(102),l=function(t){i(n,t);var e=r(n);function n(t,i,s){var a;return o(this,n),(a=e.call(this,'<a -ref=%link class="Icon">%image</a>')).image="string"==typeof t?new c(t):t,a.link.title=i,"function"==typeof s?a.link.onclick=s:"string"==typeof s&&(a.link.href=s,s.match(/^http/)&&(a.link.target="_blank",a.link.rel="noopener")),a}return n}(c);t.exports=l},91:function(t,e,n){"use strict";n(100),n(111),n(129);var o=n(112),i=n(93),s=n(131),a=n(102),r=n(144),c=n(153),l=new a(n(160));n(161);var u=new s({nav:o.header,selector:o.header,view:o.main});function p(){o.main.scrollTop=0,"#view:"===location.hash.substr(0,6)?(u.select(null),c.open(location.hash.substr(6)),i.hide(o.main)):u.selected?(c.close(),i.show(o.main)):u.select("#applications")}u.add("#applications","Applications",new r("webapp")),u.add("#libraries","Libraries",new r("libjs")),u.add("#about","About",l),u.add("#blog","Blog",(function(){return location.replace("https://medium.com/cosmic-plus")})),u.select(null),u.select(location.hash),u.listen("select",(function(t){t&&(location.hash=t)})),window.onhashchange=p,p()}}]);
//# sourceMappingURL=app.js.map