!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="/",t(t.s="tjUo")}({fnl6:function(e,o,t){},tjUo:function(e,o,t){"use strict";t.r(o);t("fnl6");var n=document.querySelector("html"),r=document.querySelector("body"),c=document.querySelector(".menu-toggle"),l=document.querySelector(".icon-menu"),i=document.querySelector(".site-menu"),u=document.querySelector(".social-menu"),s=document.querySelector(".to-top");c&&c.addEventListener("click",function(){i.classList.toggle("collapsed"),u.classList.toggle("collapsed"),l.classList.toggle("icon-menu"),l.classList.toggle("icon-close")});!function(){var e=document.getElementsByClassName("error-emoji")[0],o=["\\(o_o)/","(o^^)o","(˚Δ˚)b","(^-^*)","(≥o≤)","(^_^)b","(·_·)","(='X'=)","(>_<)","(;-;)","\\(^Д^)/"];if(e){var t=o[Math.floor(Math.random()*o.length)];e.appendChild(document.createTextNode(t))}}(),objectFitImages("img.post-cover");var a=0,d=!1;window.addEventListener("scroll",function(){a=0===r.scrollTop?n.scrollTop:r.scrollTop,d||window.requestAnimationFrame(function(){a>=600?s.classList.remove("is-hide"):s.classList.add("is-hide"),d=!1}),d=!0});var m=new SmoothScroll('a[href*="#"]');s.addEventListener("click",function(){m.animateScroll(0)})}});
//# sourceMappingURL=bundle.449f145169.js.map