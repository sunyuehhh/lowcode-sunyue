!function e(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.BizComps=n():t.BizComps=n()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function t(){return e.default}:function t(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=345)}({3:function(e,t){e.exports=window.React},30:function(e,t){e.exports=window.Next},345:function(e,t,n){e.exports=n(432)},346:function(e,t,n){},347:function(e,t,n){},348:function(e,t,n){},432:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){})),n.d(t,"ColorfulButton",(function(){return s})),n.d(t,"ColorfulInput",(function(){return m})),n.d(t,"bizCssPrefix",(function(){return x}));var r={};n.r(r),n.d(r,"ColorfulButton",(function(){return s})),n.d(r,"ColorfulInput",(function(){return m})),n.d(r,"bizCssPrefix",(function(){return x}));var o=n(3),u=n(30),i=n(346),l=["type","color","style"];function f(e,t){if(null==e)return{};var n=c(e,t),r,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)r=u[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function c(e,t){if(null==e)return{};var n={},r=Object.keys(e),o,u;for(u=0;u<r.length;u++)o=r[u],t.indexOf(o)>=0||(n[o]=e[o]);return n}var a=function e(t){var n=t.type,r=void 0===n?"primary":n,i=t.color,c=t.style,a=void 0===c?{}:c,p=f(t,l),s=a||{};i&&(s.backgroundColor=i);var d=p||{};return d.style=s,Object(o.createElement)(u.Button,Object.assign({type:r},d),"sunyue")};a.displayName="ColorfulButton";var p,s=a,d=n(347),y=["color","style"];function b(e,t){if(null==e)return{};var n=O(e,t),r,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)r=u[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function O(e,t){if(null==e)return{};var n={},r=Object.keys(e),o,u;for(u=0;u<r.length;u++)o=r[u],t.indexOf(o)>=0||(n[o]=e[o]);return n}var v,j,m=function e(t){var n=t.color,r=t.style,i=void 0===r?{}:r,l=b(t,y),f=i||{};n&&(f.backgroundColor=n);var c=l||{};return c.style=f,Object(o.createElement)("div",null,Object(o.createElement)("span",null,"sunyue"),Object(o.createElement)(u.Input,Object.assign({},c)))},x="bizpack",g=n(348),C={},w="BizComps",P=!0;function S(e,t){return e.default?e.default:e[t]?e[t]:e}}})}));