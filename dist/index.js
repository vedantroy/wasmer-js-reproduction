(function (crypto, buffer$1) {
    'use strict';

    crypto = crypto && Object.prototype.hasOwnProperty.call(crypto, 'default') ? crypto['default'] : crypto;
    buffer$1 = buffer$1 && Object.prototype.hasOwnProperty.call(buffer$1, 'default') ? buffer$1['default'] : buffer$1;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /*
     *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    *****************************************************************************/
    function aa(a,b){aa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b;}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);};return aa(a,b)}function ba(a,b){function c(){this.constructor=a;}aa(a,b);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c);}function ca(a){var b="function"===typeof Symbol&&a[Symbol.iterator],c=0;return b?b.call(a):{next:function(){a&&c>=a.length&&(a=void 0);return {value:a&&a[c++],done:!a}}}}
    function da(a,b){var c="function"===typeof Symbol&&a[Symbol.iterator];if(!c)return a;a=c.call(a);var d,e=[];try{for(;(void 0===b||0<b--)&&!(d=a.next()).done;)e.push(d.value);}catch(g){var f={error:g};}finally{try{d&&!d.done&&(c=a["return"])&&c.call(a);}finally{if(f)throw f.error;}}return e}function ea(){for(var a=[],b=0;b<arguments.length;b++)a=a.concat(da(arguments[b]));return a}
    var fa="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof global?global:{},l="undefined"!==typeof BigInt?BigInt:fa.BigInt||Number,ha=DataView;
    ha.prototype.setBigUint64||(ha.prototype.setBigUint64=function(a,b,c){if(b<Math.pow(2,32))var d=0;else {d=b.toString(2);b="";for(var e=0;e<64-d.length;e++)b+="0";b+=d;d=parseInt(b.substring(0,32),2);b=parseInt(b.substring(32),2);}this.setUint32(a+(c?0:4),b,c);this.setUint32(a+(c?4:0),d,c);},ha.prototype.getBigUint64=function(a,b){var c=this.getUint32(a+(b?0:4),b);a=this.getUint32(a+(b?4:0),b);c=c.toString(2);a=a.toString(2);b="";for(var d=0;d<32-c.length;d++)b+="0";return l("0b"+a+(b+c))});
    var m="undefined"!==typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{},p=[],v=[],ia="undefined"!==typeof Uint8Array?Uint8Array:Array,ja=!1;function ka(){ja=!0;for(var a=0;64>a;++a)p[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a],v["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(a)]=a;v[45]=62;v[95]=63;}
    function la(a,b,c){for(var d=[],e=b;e<c;e+=3)b=(a[e]<<16)+(a[e+1]<<8)+a[e+2],d.push(p[b>>18&63]+p[b>>12&63]+p[b>>6&63]+p[b&63]);return d.join("")}function ma(a){ja||ka();for(var b=a.length,c=b%3,d="",e=[],f=0,g=b-c;f<g;f+=16383)e.push(la(a,f,f+16383>g?g:f+16383));1===c?(a=a[b-1],d+=p[a>>2],d+=p[a<<4&63],d+="=="):2===c&&(a=(a[b-2]<<8)+a[b-1],d+=p[a>>10],d+=p[a>>4&63],d+=p[a<<2&63],d+="=");e.push(d);return e.join("")}
    function oa(a,b,c,d,e){var f=8*e-d-1;var g=(1<<f)-1,h=g>>1,n=-7;e=c?e-1:0;var k=c?-1:1,r=a[b+e];e+=k;c=r&(1<<-n)-1;r>>=-n;for(n+=f;0<n;c=256*c+a[b+e],e+=k,n-=8);f=c&(1<<-n)-1;c>>=-n;for(n+=d;0<n;f=256*f+a[b+e],e+=k,n-=8);if(0===c)c=1-h;else {if(c===g)return f?NaN:Infinity*(r?-1:1);f+=Math.pow(2,d);c-=h;}return (r?-1:1)*f*Math.pow(2,c-d)}
    function pa(a,b,c,d,e,f){var g,h=8*f-e-1,n=(1<<h)-1,k=n>>1,r=23===e?Math.pow(2,-24)-Math.pow(2,-77):0;f=d?0:f-1;var q=d?1:-1,x=0>b||0===b&&0>1/b?1:0;b=Math.abs(b);isNaN(b)||Infinity===b?(b=isNaN(b)?1:0,d=n):(d=Math.floor(Math.log(b)/Math.LN2),1>b*(g=Math.pow(2,-d))&&(d--,g*=2),b=1<=d+k?b+r/g:b+r*Math.pow(2,1-k),2<=b*g&&(d++,g/=2),d+k>=n?(b=0,d=n):1<=d+k?(b=(b*g-1)*Math.pow(2,e),d+=k):(b=b*Math.pow(2,k-1)*Math.pow(2,e),d=0));for(;8<=e;a[c+f]=b&255,f+=q,b/=256,e-=8);d=d<<e|b;for(h+=e;0<h;a[c+f]=d&255,
    f+=q,d/=256,h-=8);a[c+f-q]|=128*x;}var qa={}.toString,ra=Array.isArray||function(a){return "[object Array]"==qa.call(a)};w.TYPED_ARRAY_SUPPORT=void 0!==m.TYPED_ARRAY_SUPPORT?m.TYPED_ARRAY_SUPPORT:!0;function y(a,b){if((w.TYPED_ARRAY_SUPPORT?2147483647:1073741823)<b)throw new RangeError("Invalid typed array length");w.TYPED_ARRAY_SUPPORT?(a=new Uint8Array(b),a.__proto__=w.prototype):(null===a&&(a=new w(b)),a.length=b);return a}
    function w(a,b,c){if(!(w.TYPED_ARRAY_SUPPORT||this instanceof w))return new w(a,b,c);if("number"===typeof a){if("string"===typeof b)throw Error("If encoding is specified then the first argument must be a string");return sa(this,a)}return ta(this,a,b,c)}w.poolSize=8192;w._augment=function(a){a.__proto__=w.prototype;return a};
    function ta(a,b,c,d){if("number"===typeof b)throw new TypeError('"value" argument must not be a number');if("undefined"!==typeof ArrayBuffer&&b instanceof ArrayBuffer){b.byteLength;if(0>c||b.byteLength<c)throw new RangeError("'offset' is out of bounds");if(b.byteLength<c+(d||0))throw new RangeError("'length' is out of bounds");b=void 0===c&&void 0===d?new Uint8Array(b):void 0===d?new Uint8Array(b,c):new Uint8Array(b,c,d);w.TYPED_ARRAY_SUPPORT?(a=b,a.__proto__=w.prototype):a=ua(a,b);return a}if("string"===
    typeof b){d=a;a=c;if("string"!==typeof a||""===a)a="utf8";if(!w.isEncoding(a))throw new TypeError('"encoding" must be a valid string encoding');c=va(b,a)|0;d=y(d,c);b=d.write(b,a);b!==c&&(d=d.slice(0,b));return d}return wa(a,b)}w.from=function(a,b,c){return ta(null,a,b,c)};w.TYPED_ARRAY_SUPPORT&&(w.prototype.__proto__=Uint8Array.prototype,w.__proto__=Uint8Array);
    function xa(a){if("number"!==typeof a)throw new TypeError('"size" argument must be a number');if(0>a)throw new RangeError('"size" argument must not be negative');}w.alloc=function(a,b,c){xa(a);a=0>=a?y(null,a):void 0!==b?"string"===typeof c?y(null,a).fill(b,c):y(null,a).fill(b):y(null,a);return a};function sa(a,b){xa(b);a=y(a,0>b?0:ya(b)|0);if(!w.TYPED_ARRAY_SUPPORT)for(var c=0;c<b;++c)a[c]=0;return a}w.allocUnsafe=function(a){return sa(null,a)};w.allocUnsafeSlow=function(a){return sa(null,a)};
    function ua(a,b){var c=0>b.length?0:ya(b.length)|0;a=y(a,c);for(var d=0;d<c;d+=1)a[d]=b[d]&255;return a}
    function wa(a,b){if(z(b)){var c=ya(b.length)|0;a=y(a,c);if(0===a.length)return a;b.copy(a,0,0,c);return a}if(b){if("undefined"!==typeof ArrayBuffer&&b.buffer instanceof ArrayBuffer||"length"in b)return (c="number"!==typeof b.length)||(c=b.length,c=c!==c),c?y(a,0):ua(a,b);if("Buffer"===b.type&&ra(b.data))return ua(a,b.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");}
    function ya(a){if(a>=(w.TYPED_ARRAY_SUPPORT?2147483647:1073741823))throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+(w.TYPED_ARRAY_SUPPORT?2147483647:1073741823).toString(16)+" bytes");return a|0}w.isBuffer=za;function z(a){return !(null==a||!a._isBuffer)}
    w.compare=function(a,b){if(!z(a)||!z(b))throw new TypeError("Arguments must be Buffers");if(a===b)return 0;for(var c=a.length,d=b.length,e=0,f=Math.min(c,d);e<f;++e)if(a[e]!==b[e]){c=a[e];d=b[e];break}return c<d?-1:d<c?1:0};w.isEncoding=function(a){switch(String(a).toLowerCase()){case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return !0;default:return !1}};
    w.concat=function(a,b){if(!ra(a))throw new TypeError('"list" argument must be an Array of Buffers');if(0===a.length)return w.alloc(0);var c;if(void 0===b)for(c=b=0;c<a.length;++c)b+=a[c].length;b=w.allocUnsafe(b);var d=0;for(c=0;c<a.length;++c){var e=a[c];if(!z(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(b,d);d+=e.length;}return b};
    function va(a,b){if(z(a))return a.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(a)||a instanceof ArrayBuffer))return a.byteLength;"string"!==typeof a&&(a=""+a);var c=a.length;if(0===c)return 0;for(var d=!1;;)switch(b){case "ascii":case "latin1":case "binary":return c;case "utf8":case "utf-8":case void 0:return Aa(a).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return 2*c;case "hex":return c>>>1;case "base64":return Ba(a).length;
    default:if(d)return Aa(a).length;b=(""+b).toLowerCase();d=!0;}}w.byteLength=va;
    function Ca(a,b,c){var d=!1;if(void 0===b||0>b)b=0;if(b>this.length)return "";if(void 0===c||c>this.length)c=this.length;if(0>=c)return "";c>>>=0;b>>>=0;if(c<=b)return "";for(a||(a="utf8");;)switch(a){case "hex":a=b;b=c;c=this.length;if(!a||0>a)a=0;if(!b||0>b||b>c)b=c;d="";for(c=a;c<b;++c)a=d,d=this[c],d=16>d?"0"+d.toString(16):d.toString(16),d=a+d;return d;case "utf8":case "utf-8":return Da(this,b,c);case "ascii":a="";for(c=Math.min(this.length,c);b<c;++b)a+=String.fromCharCode(this[b]&127);return a;
    case "latin1":case "binary":a="";for(c=Math.min(this.length,c);b<c;++b)a+=String.fromCharCode(this[b]);return a;case "base64":return b=0===b&&c===this.length?ma(this):ma(this.slice(b,c)),b;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":b=this.slice(b,c);c="";for(a=0;a<b.length;a+=2)c+=String.fromCharCode(b[a]+256*b[a+1]);return c;default:if(d)throw new TypeError("Unknown encoding: "+a);a=(a+"").toLowerCase();d=!0;}}w.prototype._isBuffer=!0;function A(a,b,c){var d=a[b];a[b]=a[c];a[c]=d;}
    w.prototype.swap16=function(){var a=this.length;if(0!==a%2)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var b=0;b<a;b+=2)A(this,b,b+1);return this};w.prototype.swap32=function(){var a=this.length;if(0!==a%4)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var b=0;b<a;b+=4)A(this,b,b+3),A(this,b+1,b+2);return this};
    w.prototype.swap64=function(){var a=this.length;if(0!==a%8)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var b=0;b<a;b+=8)A(this,b,b+7),A(this,b+1,b+6),A(this,b+2,b+5),A(this,b+3,b+4);return this};w.prototype.toString=function(){var a=this.length|0;return 0===a?"":0===arguments.length?Da(this,0,a):Ca.apply(this,arguments)};w.prototype.equals=function(a){if(!z(a))throw new TypeError("Argument must be a Buffer");return this===a?!0:0===w.compare(this,a)};
    w.prototype.inspect=function(){var a="";0<this.length&&(a=this.toString("hex",0,50).match(/.{2}/g).join(" "),50<this.length&&(a+=" ... "));return "<Buffer "+a+">"};
    w.prototype.compare=function(a,b,c,d,e){if(!z(a))throw new TypeError("Argument must be a Buffer");void 0===b&&(b=0);void 0===c&&(c=a?a.length:0);void 0===d&&(d=0);void 0===e&&(e=this.length);if(0>b||c>a.length||0>d||e>this.length)throw new RangeError("out of range index");if(d>=e&&b>=c)return 0;if(d>=e)return -1;if(b>=c)return 1;b>>>=0;c>>>=0;d>>>=0;e>>>=0;if(this===a)return 0;var f=e-d,g=c-b,h=Math.min(f,g);d=this.slice(d,e);a=a.slice(b,c);for(b=0;b<h;++b)if(d[b]!==a[b]){f=d[b];g=a[b];break}return f<
    g?-1:g<f?1:0};
    function Ea(a,b,c,d,e){if(0===a.length)return -1;"string"===typeof c?(d=c,c=0):2147483647<c?c=2147483647:-2147483648>c&&(c=-2147483648);c=+c;isNaN(c)&&(c=e?0:a.length-1);0>c&&(c=a.length+c);if(c>=a.length){if(e)return -1;c=a.length-1;}else if(0>c)if(e)c=0;else return -1;"string"===typeof b&&(b=w.from(b,d));if(z(b))return 0===b.length?-1:Fa(a,b,c,d,e);if("number"===typeof b)return b&=255,w.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?e?Uint8Array.prototype.indexOf.call(a,b,c):
    Uint8Array.prototype.lastIndexOf.call(a,b,c):Fa(a,[b],c,d,e);throw new TypeError("val must be string, number or Buffer");}
    function Fa(a,b,c,d,e){function f(a,b){return 1===g?a[b]:a.readUInt16BE(b*g)}var g=1,h=a.length,n=b.length;if(void 0!==d&&(d=String(d).toLowerCase(),"ucs2"===d||"ucs-2"===d||"utf16le"===d||"utf-16le"===d)){if(2>a.length||2>b.length)return -1;g=2;h/=2;n/=2;c/=2;}if(e)for(d=-1;c<h;c++)if(f(a,c)===f(b,-1===d?0:c-d)){if(-1===d&&(d=c),c-d+1===n)return d*g}else -1!==d&&(c-=c-d),d=-1;else for(c+n>h&&(c=h-n);0<=c;c--){h=!0;for(d=0;d<n;d++)if(f(a,c+d)!==f(b,d)){h=!1;break}if(h)return c}return -1}
    w.prototype.includes=function(a,b,c){return -1!==this.indexOf(a,b,c)};w.prototype.indexOf=function(a,b,c){return Ea(this,a,b,c,!0)};w.prototype.lastIndexOf=function(a,b,c){return Ea(this,a,b,c,!1)};
    w.prototype.write=function(a,b,c,d){if(void 0===b)d="utf8",c=this.length,b=0;else if(void 0===c&&"string"===typeof b)d=b,c=this.length,b=0;else if(isFinite(b))b|=0,isFinite(c)?(c|=0,void 0===d&&(d="utf8")):(d=c,c=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var e=this.length-b;if(void 0===c||c>e)c=e;if(0<a.length&&(0>c||0>b)||b>this.length)throw new RangeError("Attempt to write outside buffer bounds");d||(d="utf8");for(e=!1;;)switch(d){case "hex":a:{b=
    Number(b)||0;d=this.length-b;c?(c=Number(c),c>d&&(c=d)):c=d;d=a.length;if(0!==d%2)throw new TypeError("Invalid hex string");c>d/2&&(c=d/2);for(d=0;d<c;++d){e=parseInt(a.substr(2*d,2),16);if(isNaN(e)){a=d;break a}this[b+d]=e;}a=d;}return a;case "utf8":case "utf-8":return Ga(Aa(a,this.length-b),this,b,c);case "ascii":return Ga(Ia(a),this,b,c);case "latin1":case "binary":return Ga(Ia(a),this,b,c);case "base64":return Ga(Ba(a),this,b,c);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":d=a;e=this.length-
    b;for(var f=[],g=0;g<d.length&&!(0>(e-=2));++g){var h=d.charCodeAt(g);a=h>>8;h%=256;f.push(h);f.push(a);}return Ga(f,this,b,c);default:if(e)throw new TypeError("Unknown encoding: "+d);d=(""+d).toLowerCase();e=!0;}};w.prototype.toJSON=function(){return {type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};
    function Da(a,b,c){c=Math.min(a.length,c);for(var d=[];b<c;){var e=a[b],f=null,g=239<e?4:223<e?3:191<e?2:1;if(b+g<=c)switch(g){case 1:128>e&&(f=e);break;case 2:var h=a[b+1];128===(h&192)&&(e=(e&31)<<6|h&63,127<e&&(f=e));break;case 3:h=a[b+1];var n=a[b+2];128===(h&192)&&128===(n&192)&&(e=(e&15)<<12|(h&63)<<6|n&63,2047<e&&(55296>e||57343<e)&&(f=e));break;case 4:h=a[b+1];n=a[b+2];var k=a[b+3];128===(h&192)&&128===(n&192)&&128===(k&192)&&(e=(e&15)<<18|(h&63)<<12|(n&63)<<6|k&63,65535<e&&1114112>e&&(f=
    e));}null===f?(f=65533,g=1):65535<f&&(f-=65536,d.push(f>>>10&1023|55296),f=56320|f&1023);d.push(f);b+=g;}a=d.length;if(a<=Ja)d=String.fromCharCode.apply(String,d);else {c="";for(b=0;b<a;)c+=String.fromCharCode.apply(String,d.slice(b,b+=Ja));d=c;}return d}var Ja=4096;
    w.prototype.slice=function(a,b){var c=this.length;a=~~a;b=void 0===b?c:~~b;0>a?(a+=c,0>a&&(a=0)):a>c&&(a=c);0>b?(b+=c,0>b&&(b=0)):b>c&&(b=c);b<a&&(b=a);if(w.TYPED_ARRAY_SUPPORT)b=this.subarray(a,b),b.__proto__=w.prototype;else {c=b-a;b=new w(c,void 0);for(var d=0;d<c;++d)b[d]=this[d+a];}return b};function C(a,b,c){if(0!==a%1||0>a)throw new RangeError("offset is not uint");if(a+b>c)throw new RangeError("Trying to access beyond buffer length");}
    w.prototype.readUIntLE=function(a,b,c){a|=0;b|=0;c||C(a,b,this.length);c=this[a];for(var d=1,e=0;++e<b&&(d*=256);)c+=this[a+e]*d;return c};w.prototype.readUIntBE=function(a,b,c){a|=0;b|=0;c||C(a,b,this.length);c=this[a+--b];for(var d=1;0<b&&(d*=256);)c+=this[a+--b]*d;return c};w.prototype.readUInt8=function(a,b){b||C(a,1,this.length);return this[a]};w.prototype.readUInt16LE=function(a,b){b||C(a,2,this.length);return this[a]|this[a+1]<<8};
    w.prototype.readUInt16BE=function(a,b){b||C(a,2,this.length);return this[a]<<8|this[a+1]};w.prototype.readUInt32LE=function(a,b){b||C(a,4,this.length);return (this[a]|this[a+1]<<8|this[a+2]<<16)+16777216*this[a+3]};w.prototype.readUInt32BE=function(a,b){b||C(a,4,this.length);return 16777216*this[a]+(this[a+1]<<16|this[a+2]<<8|this[a+3])};w.prototype.readIntLE=function(a,b,c){a|=0;b|=0;c||C(a,b,this.length);c=this[a];for(var d=1,e=0;++e<b&&(d*=256);)c+=this[a+e]*d;c>=128*d&&(c-=Math.pow(2,8*b));return c};
    w.prototype.readIntBE=function(a,b,c){a|=0;b|=0;c||C(a,b,this.length);c=b;for(var d=1,e=this[a+--c];0<c&&(d*=256);)e+=this[a+--c]*d;e>=128*d&&(e-=Math.pow(2,8*b));return e};w.prototype.readInt8=function(a,b){b||C(a,1,this.length);return this[a]&128?-1*(255-this[a]+1):this[a]};w.prototype.readInt16LE=function(a,b){b||C(a,2,this.length);a=this[a]|this[a+1]<<8;return a&32768?a|4294901760:a};
    w.prototype.readInt16BE=function(a,b){b||C(a,2,this.length);a=this[a+1]|this[a]<<8;return a&32768?a|4294901760:a};w.prototype.readInt32LE=function(a,b){b||C(a,4,this.length);return this[a]|this[a+1]<<8|this[a+2]<<16|this[a+3]<<24};w.prototype.readInt32BE=function(a,b){b||C(a,4,this.length);return this[a]<<24|this[a+1]<<16|this[a+2]<<8|this[a+3]};w.prototype.readFloatLE=function(a,b){b||C(a,4,this.length);return oa(this,a,!0,23,4)};
    w.prototype.readFloatBE=function(a,b){b||C(a,4,this.length);return oa(this,a,!1,23,4)};w.prototype.readDoubleLE=function(a,b){b||C(a,8,this.length);return oa(this,a,!0,52,8)};w.prototype.readDoubleBE=function(a,b){b||C(a,8,this.length);return oa(this,a,!1,52,8)};function D(a,b,c,d,e,f){if(!z(a))throw new TypeError('"buffer" argument must be a Buffer instance');if(b>e||b<f)throw new RangeError('"value" argument is out of bounds');if(c+d>a.length)throw new RangeError("Index out of range");}
    w.prototype.writeUIntLE=function(a,b,c,d){a=+a;b|=0;c|=0;d||D(this,a,b,c,Math.pow(2,8*c)-1,0);d=1;var e=0;for(this[b]=a&255;++e<c&&(d*=256);)this[b+e]=a/d&255;return b+c};w.prototype.writeUIntBE=function(a,b,c,d){a=+a;b|=0;c|=0;d||D(this,a,b,c,Math.pow(2,8*c)-1,0);d=c-1;var e=1;for(this[b+d]=a&255;0<=--d&&(e*=256);)this[b+d]=a/e&255;return b+c};w.prototype.writeUInt8=function(a,b,c){a=+a;b|=0;c||D(this,a,b,1,255,0);w.TYPED_ARRAY_SUPPORT||(a=Math.floor(a));this[b]=a&255;return b+1};
    function Ka(a,b,c,d){0>b&&(b=65535+b+1);for(var e=0,f=Math.min(a.length-c,2);e<f;++e)a[c+e]=(b&255<<8*(d?e:1-e))>>>8*(d?e:1-e);}w.prototype.writeUInt16LE=function(a,b,c){a=+a;b|=0;c||D(this,a,b,2,65535,0);w.TYPED_ARRAY_SUPPORT?(this[b]=a&255,this[b+1]=a>>>8):Ka(this,a,b,!0);return b+2};w.prototype.writeUInt16BE=function(a,b,c){a=+a;b|=0;c||D(this,a,b,2,65535,0);w.TYPED_ARRAY_SUPPORT?(this[b]=a>>>8,this[b+1]=a&255):Ka(this,a,b,!1);return b+2};
    function La(a,b,c,d){0>b&&(b=4294967295+b+1);for(var e=0,f=Math.min(a.length-c,4);e<f;++e)a[c+e]=b>>>8*(d?e:3-e)&255;}w.prototype.writeUInt32LE=function(a,b,c){a=+a;b|=0;c||D(this,a,b,4,4294967295,0);w.TYPED_ARRAY_SUPPORT?(this[b+3]=a>>>24,this[b+2]=a>>>16,this[b+1]=a>>>8,this[b]=a&255):La(this,a,b,!0);return b+4};
    w.prototype.writeUInt32BE=function(a,b,c){a=+a;b|=0;c||D(this,a,b,4,4294967295,0);w.TYPED_ARRAY_SUPPORT?(this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=a&255):La(this,a,b,!1);return b+4};w.prototype.writeIntLE=function(a,b,c,d){a=+a;b|=0;d||(d=Math.pow(2,8*c-1),D(this,a,b,c,d-1,-d));d=0;var e=1,f=0;for(this[b]=a&255;++d<c&&(e*=256);)0>a&&0===f&&0!==this[b+d-1]&&(f=1),this[b+d]=(a/e>>0)-f&255;return b+c};
    w.prototype.writeIntBE=function(a,b,c,d){a=+a;b|=0;d||(d=Math.pow(2,8*c-1),D(this,a,b,c,d-1,-d));d=c-1;var e=1,f=0;for(this[b+d]=a&255;0<=--d&&(e*=256);)0>a&&0===f&&0!==this[b+d+1]&&(f=1),this[b+d]=(a/e>>0)-f&255;return b+c};w.prototype.writeInt8=function(a,b,c){a=+a;b|=0;c||D(this,a,b,1,127,-128);w.TYPED_ARRAY_SUPPORT||(a=Math.floor(a));0>a&&(a=255+a+1);this[b]=a&255;return b+1};
    w.prototype.writeInt16LE=function(a,b,c){a=+a;b|=0;c||D(this,a,b,2,32767,-32768);w.TYPED_ARRAY_SUPPORT?(this[b]=a&255,this[b+1]=a>>>8):Ka(this,a,b,!0);return b+2};w.prototype.writeInt16BE=function(a,b,c){a=+a;b|=0;c||D(this,a,b,2,32767,-32768);w.TYPED_ARRAY_SUPPORT?(this[b]=a>>>8,this[b+1]=a&255):Ka(this,a,b,!1);return b+2};
    w.prototype.writeInt32LE=function(a,b,c){a=+a;b|=0;c||D(this,a,b,4,2147483647,-2147483648);w.TYPED_ARRAY_SUPPORT?(this[b]=a&255,this[b+1]=a>>>8,this[b+2]=a>>>16,this[b+3]=a>>>24):La(this,a,b,!0);return b+4};w.prototype.writeInt32BE=function(a,b,c){a=+a;b|=0;c||D(this,a,b,4,2147483647,-2147483648);0>a&&(a=4294967295+a+1);w.TYPED_ARRAY_SUPPORT?(this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=a&255):La(this,a,b,!1);return b+4};
    function Ma(a,b,c,d){if(c+d>a.length)throw new RangeError("Index out of range");if(0>c)throw new RangeError("Index out of range");}w.prototype.writeFloatLE=function(a,b,c){c||Ma(this,a,b,4);pa(this,a,b,!0,23,4);return b+4};w.prototype.writeFloatBE=function(a,b,c){c||Ma(this,a,b,4);pa(this,a,b,!1,23,4);return b+4};w.prototype.writeDoubleLE=function(a,b,c){c||Ma(this,a,b,8);pa(this,a,b,!0,52,8);return b+8};w.prototype.writeDoubleBE=function(a,b,c){c||Ma(this,a,b,8);pa(this,a,b,!1,52,8);return b+8};
    w.prototype.copy=function(a,b,c,d){c||(c=0);d||0===d||(d=this.length);b>=a.length&&(b=a.length);b||(b=0);0<d&&d<c&&(d=c);if(d===c||0===a.length||0===this.length)return 0;if(0>b)throw new RangeError("targetStart out of bounds");if(0>c||c>=this.length)throw new RangeError("sourceStart out of bounds");if(0>d)throw new RangeError("sourceEnd out of bounds");d>this.length&&(d=this.length);a.length-b<d-c&&(d=a.length-b+c);var e=d-c;if(this===a&&c<b&&b<d)for(d=e-1;0<=d;--d)a[d+b]=this[d+c];else if(1E3>e||
    !w.TYPED_ARRAY_SUPPORT)for(d=0;d<e;++d)a[d+b]=this[d+c];else Uint8Array.prototype.set.call(a,this.subarray(c,c+e),b);return e};
    w.prototype.fill=function(a,b,c,d){if("string"===typeof a){"string"===typeof b?(d=b,b=0,c=this.length):"string"===typeof c&&(d=c,c=this.length);if(1===a.length){var e=a.charCodeAt(0);256>e&&(a=e);}if(void 0!==d&&"string"!==typeof d)throw new TypeError("encoding must be a string");if("string"===typeof d&&!w.isEncoding(d))throw new TypeError("Unknown encoding: "+d);}else "number"===typeof a&&(a&=255);if(0>b||this.length<b||this.length<c)throw new RangeError("Out of range index");if(c<=b)return this;b>>>=
    0;c=void 0===c?this.length:c>>>0;a||(a=0);if("number"===typeof a)for(d=b;d<c;++d)this[d]=a;else for(a=z(a)?a:Aa((new w(a,d)).toString()),e=a.length,d=0;d<c-b;++d)this[d+b]=a[d%e];return this};var Na=/[^+\/0-9A-Za-z-_]/g;
    function Aa(a,b){b=b||Infinity;for(var c,d=a.length,e=null,f=[],g=0;g<d;++g){c=a.charCodeAt(g);if(55295<c&&57344>c){if(!e){if(56319<c){-1<(b-=3)&&f.push(239,191,189);continue}else if(g+1===d){-1<(b-=3)&&f.push(239,191,189);continue}e=c;continue}if(56320>c){-1<(b-=3)&&f.push(239,191,189);e=c;continue}c=(e-55296<<10|c-56320)+65536;}else e&&-1<(b-=3)&&f.push(239,191,189);e=null;if(128>c){if(0>--b)break;f.push(c);}else if(2048>c){if(0>(b-=2))break;f.push(c>>6|192,c&63|128);}else if(65536>c){if(0>(b-=3))break;
    f.push(c>>12|224,c>>6&63|128,c&63|128);}else if(1114112>c){if(0>(b-=4))break;f.push(c>>18|240,c>>12&63|128,c>>6&63|128,c&63|128);}else throw Error("Invalid code point");}return f}function Ia(a){for(var b=[],c=0;c<a.length;++c)b.push(a.charCodeAt(c)&255);return b}
    function Ba(a){a=(a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")).replace(Na,"");if(2>a.length)a="";else for(;0!==a.length%4;)a+="=";ja||ka();var b=a.length;if(0<b%4)throw Error("Invalid string. Length must be a multiple of 4");var c="="===a[b-2]?2:"="===a[b-1]?1:0;var d=new ia(3*b/4-c);var e=0<c?b-4:b;var f=0;for(b=0;b<e;b+=4){var g=v[a.charCodeAt(b)]<<18|v[a.charCodeAt(b+1)]<<12|v[a.charCodeAt(b+2)]<<6|v[a.charCodeAt(b+3)];d[f++]=g>>16&255;d[f++]=g>>8&255;d[f++]=g&255;}2===c?(g=v[a.charCodeAt(b)]<<2|
    v[a.charCodeAt(b+1)]>>4,d[f++]=g&255):1===c&&(g=v[a.charCodeAt(b)]<<10|v[a.charCodeAt(b+1)]<<4|v[a.charCodeAt(b+2)]>>2,d[f++]=g>>8&255,d[f++]=g&255);return d}function Ga(a,b,c,d){for(var e=0;e<d&&!(e+c>=b.length||e>=a.length);++e)b[e+c]=a[e];return e}function za(a){return null!=a&&(!!a._isBuffer||Oa(a)||"function"===typeof a.readFloatLE&&"function"===typeof a.slice&&Oa(a.slice(0,0)))}function Oa(a){return !!a.constructor&&"function"===typeof a.constructor.isBuffer&&a.constructor.isBuffer(a)}
    var E=w,Pa="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};function Qa(a,b){return b={exports:{}},a(b,b.exports),b.exports}function Ra(){throw Error("setTimeout has not been defined");}function Sa(){throw Error("clearTimeout has not been defined");}var F=Ra,G=Sa;"function"===typeof m.setTimeout&&(F=setTimeout);"function"===typeof m.clearTimeout&&(G=clearTimeout);
    function Ta(a){if(F===setTimeout)return setTimeout(a,0);if((F===Ra||!F)&&setTimeout)return F=setTimeout,setTimeout(a,0);try{return F(a,0)}catch(b){try{return F.call(null,a,0)}catch(c){return F.call(this,a,0)}}}function Ua(a){if(G===clearTimeout)return clearTimeout(a);if((G===Sa||!G)&&clearTimeout)return G=clearTimeout,clearTimeout(a);try{return G(a)}catch(b){try{return G.call(null,a)}catch(c){return G.call(this,a)}}}var H=[],Va=!1,I,Wa=-1;
    function Xa(){Va&&I&&(Va=!1,I.length?H=I.concat(H):Wa=-1,H.length&&Ya());}function Ya(){if(!Va){var a=Ta(Xa);Va=!0;for(var b=H.length;b;){I=H;for(H=[];++Wa<b;)I&&I[Wa].run();Wa=-1;b=H.length;}I=null;Va=!1;Ua(a);}}function Za(a){var b=Array(arguments.length-1);if(1<arguments.length)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];H.push(new $a(a,b));1!==H.length||Va||Ta(Ya);}function $a(a,b){this.fun=a;this.array=b;}$a.prototype.run=function(){this.fun.apply(null,this.array);};function J(){}
    var ab=m.performance||{},bb=ab.now||ab.mozNow||ab.msNow||ab.oNow||ab.webkitNow||function(){return (new Date).getTime()},cb=new Date,db={nextTick:Za,title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:J,addListener:J,once:J,off:J,removeListener:J,removeAllListeners:J,emit:J,binding:function(){throw Error("process.binding is not supported");},cwd:function(){return "/"},chdir:function(){throw Error("process.chdir is not supported");},umask:function(){return 0},hrtime:function(a){var b=
    .001*bb.call(ab),c=Math.floor(b);b=Math.floor(b%1*1E9);a&&(c-=a[0],b-=a[1],0>b&&(c--,b+=1E9));return [c,b]},platform:"browser",release:{},config:{},uptime:function(){return (new Date-cb)/1E3}},K=[],L=[],eb="undefined"!==typeof Uint8Array?Uint8Array:Array,fb=!1;function gb(){fb=!0;for(var a=0;64>a;++a)K[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a],L["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(a)]=a;L[45]=62;L[95]=63;}
    function hb(a,b,c){for(var d=[],e=b;e<c;e+=3)b=(a[e]<<16)+(a[e+1]<<8)+a[e+2],d.push(K[b>>18&63]+K[b>>12&63]+K[b>>6&63]+K[b&63]);return d.join("")}function ib(a){fb||gb();for(var b=a.length,c=b%3,d="",e=[],f=0,g=b-c;f<g;f+=16383)e.push(hb(a,f,f+16383>g?g:f+16383));1===c?(a=a[b-1],d+=K[a>>2],d+=K[a<<4&63],d+="=="):2===c&&(a=(a[b-2]<<8)+a[b-1],d+=K[a>>10],d+=K[a>>4&63],d+=K[a<<2&63],d+="=");e.push(d);return e.join("")}
    function jb(a,b,c,d,e){var f=8*e-d-1;var g=(1<<f)-1,h=g>>1,n=-7;e=c?e-1:0;var k=c?-1:1,r=a[b+e];e+=k;c=r&(1<<-n)-1;r>>=-n;for(n+=f;0<n;c=256*c+a[b+e],e+=k,n-=8);f=c&(1<<-n)-1;c>>=-n;for(n+=d;0<n;f=256*f+a[b+e],e+=k,n-=8);if(0===c)c=1-h;else {if(c===g)return f?NaN:Infinity*(r?-1:1);f+=Math.pow(2,d);c-=h;}return (r?-1:1)*f*Math.pow(2,c-d)}
    function kb(a,b,c,d,e,f){var g,h=8*f-e-1,n=(1<<h)-1,k=n>>1,r=23===e?Math.pow(2,-24)-Math.pow(2,-77):0;f=d?0:f-1;var q=d?1:-1,x=0>b||0===b&&0>1/b?1:0;b=Math.abs(b);isNaN(b)||Infinity===b?(b=isNaN(b)?1:0,d=n):(d=Math.floor(Math.log(b)/Math.LN2),1>b*(g=Math.pow(2,-d))&&(d--,g*=2),b=1<=d+k?b+r/g:b+r*Math.pow(2,1-k),2<=b*g&&(d++,g/=2),d+k>=n?(b=0,d=n):1<=d+k?(b=(b*g-1)*Math.pow(2,e),d+=k):(b=b*Math.pow(2,k-1)*Math.pow(2,e),d=0));for(;8<=e;a[c+f]=b&255,f+=q,b/=256,e-=8);d=d<<e|b;for(h+=e;0<h;a[c+f]=d&255,
    f+=q,d/=256,h-=8);a[c+f-q]|=128*x;}var lb={}.toString,mb=Array.isArray||function(a){return "[object Array]"==lb.call(a)};M.TYPED_ARRAY_SUPPORT=void 0!==m.TYPED_ARRAY_SUPPORT?m.TYPED_ARRAY_SUPPORT:!0;var nb=M.TYPED_ARRAY_SUPPORT?2147483647:1073741823;function N(a,b){if((M.TYPED_ARRAY_SUPPORT?2147483647:1073741823)<b)throw new RangeError("Invalid typed array length");M.TYPED_ARRAY_SUPPORT?(a=new Uint8Array(b),a.__proto__=M.prototype):(null===a&&(a=new M(b)),a.length=b);return a}
    function M(a,b,c){if(!(M.TYPED_ARRAY_SUPPORT||this instanceof M))return new M(a,b,c);if("number"===typeof a){if("string"===typeof b)throw Error("If encoding is specified then the first argument must be a string");return pb(this,a)}return qb(this,a,b,c)}M.poolSize=8192;M._augment=function(a){a.__proto__=M.prototype;return a};
    function qb(a,b,c,d){if("number"===typeof b)throw new TypeError('"value" argument must not be a number');if("undefined"!==typeof ArrayBuffer&&b instanceof ArrayBuffer){b.byteLength;if(0>c||b.byteLength<c)throw new RangeError("'offset' is out of bounds");if(b.byteLength<c+(d||0))throw new RangeError("'length' is out of bounds");b=void 0===c&&void 0===d?new Uint8Array(b):void 0===d?new Uint8Array(b,c):new Uint8Array(b,c,d);M.TYPED_ARRAY_SUPPORT?(a=b,a.__proto__=M.prototype):a=rb(a,b);return a}if("string"===
    typeof b){d=a;a=c;if("string"!==typeof a||""===a)a="utf8";if(!M.isEncoding(a))throw new TypeError('"encoding" must be a valid string encoding');c=sb(b,a)|0;d=N(d,c);b=d.write(b,a);b!==c&&(d=d.slice(0,b));return d}return tb(a,b)}M.from=function(a,b,c){return qb(null,a,b,c)};M.TYPED_ARRAY_SUPPORT&&(M.prototype.__proto__=Uint8Array.prototype,M.__proto__=Uint8Array);
    function ub(a){if("number"!==typeof a)throw new TypeError('"size" argument must be a number');if(0>a)throw new RangeError('"size" argument must not be negative');}M.alloc=function(a,b,c){ub(a);a=0>=a?N(null,a):void 0!==b?"string"===typeof c?N(null,a).fill(b,c):N(null,a).fill(b):N(null,a);return a};function pb(a,b){ub(b);a=N(a,0>b?0:vb(b)|0);if(!M.TYPED_ARRAY_SUPPORT)for(var c=0;c<b;++c)a[c]=0;return a}M.allocUnsafe=function(a){return pb(null,a)};M.allocUnsafeSlow=function(a){return pb(null,a)};
    function rb(a,b){var c=0>b.length?0:vb(b.length)|0;a=N(a,c);for(var d=0;d<c;d+=1)a[d]=b[d]&255;return a}
    function tb(a,b){if(O(b)){var c=vb(b.length)|0;a=N(a,c);if(0===a.length)return a;b.copy(a,0,0,c);return a}if(b){if("undefined"!==typeof ArrayBuffer&&b.buffer instanceof ArrayBuffer||"length"in b)return (c="number"!==typeof b.length)||(c=b.length,c=c!==c),c?N(a,0):rb(a,b);if("Buffer"===b.type&&mb(b.data))return rb(a,b.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");}
    function vb(a){if(a>=(M.TYPED_ARRAY_SUPPORT?2147483647:1073741823))throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+(M.TYPED_ARRAY_SUPPORT?2147483647:1073741823).toString(16)+" bytes");return a|0}M.isBuffer=wb;function O(a){return !(null==a||!a._isBuffer)}
    M.compare=function(a,b){if(!O(a)||!O(b))throw new TypeError("Arguments must be Buffers");if(a===b)return 0;for(var c=a.length,d=b.length,e=0,f=Math.min(c,d);e<f;++e)if(a[e]!==b[e]){c=a[e];d=b[e];break}return c<d?-1:d<c?1:0};M.isEncoding=function(a){switch(String(a).toLowerCase()){case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return !0;default:return !1}};
    M.concat=function(a,b){if(!mb(a))throw new TypeError('"list" argument must be an Array of Buffers');if(0===a.length)return M.alloc(0);var c;if(void 0===b)for(c=b=0;c<a.length;++c)b+=a[c].length;b=M.allocUnsafe(b);var d=0;for(c=0;c<a.length;++c){var e=a[c];if(!O(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(b,d);d+=e.length;}return b};
    function sb(a,b){if(O(a))return a.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(a)||a instanceof ArrayBuffer))return a.byteLength;"string"!==typeof a&&(a=""+a);var c=a.length;if(0===c)return 0;for(var d=!1;;)switch(b){case "ascii":case "latin1":case "binary":return c;case "utf8":case "utf-8":case void 0:return xb(a).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return 2*c;case "hex":return c>>>1;case "base64":return yb(a).length;
    default:if(d)return xb(a).length;b=(""+b).toLowerCase();d=!0;}}M.byteLength=sb;
    function zb(a,b,c){var d=!1;if(void 0===b||0>b)b=0;if(b>this.length)return "";if(void 0===c||c>this.length)c=this.length;if(0>=c)return "";c>>>=0;b>>>=0;if(c<=b)return "";for(a||(a="utf8");;)switch(a){case "hex":a=b;b=c;c=this.length;if(!a||0>a)a=0;if(!b||0>b||b>c)b=c;d="";for(c=a;c<b;++c)a=d,d=this[c],d=16>d?"0"+d.toString(16):d.toString(16),d=a+d;return d;case "utf8":case "utf-8":return Ab(this,b,c);case "ascii":a="";for(c=Math.min(this.length,c);b<c;++b)a+=String.fromCharCode(this[b]&127);return a;
    case "latin1":case "binary":a="";for(c=Math.min(this.length,c);b<c;++b)a+=String.fromCharCode(this[b]);return a;case "base64":return b=0===b&&c===this.length?ib(this):ib(this.slice(b,c)),b;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":b=this.slice(b,c);c="";for(a=0;a<b.length;a+=2)c+=String.fromCharCode(b[a]+256*b[a+1]);return c;default:if(d)throw new TypeError("Unknown encoding: "+a);a=(a+"").toLowerCase();d=!0;}}M.prototype._isBuffer=!0;function P(a,b,c){var d=a[b];a[b]=a[c];a[c]=d;}
    M.prototype.swap16=function(){var a=this.length;if(0!==a%2)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var b=0;b<a;b+=2)P(this,b,b+1);return this};M.prototype.swap32=function(){var a=this.length;if(0!==a%4)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var b=0;b<a;b+=4)P(this,b,b+3),P(this,b+1,b+2);return this};
    M.prototype.swap64=function(){var a=this.length;if(0!==a%8)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var b=0;b<a;b+=8)P(this,b,b+7),P(this,b+1,b+6),P(this,b+2,b+5),P(this,b+3,b+4);return this};M.prototype.toString=function(){var a=this.length|0;return 0===a?"":0===arguments.length?Ab(this,0,a):zb.apply(this,arguments)};M.prototype.equals=function(a){if(!O(a))throw new TypeError("Argument must be a Buffer");return this===a?!0:0===M.compare(this,a)};
    M.prototype.inspect=function(){var a="";0<this.length&&(a=this.toString("hex",0,50).match(/.{2}/g).join(" "),50<this.length&&(a+=" ... "));return "<Buffer "+a+">"};
    M.prototype.compare=function(a,b,c,d,e){if(!O(a))throw new TypeError("Argument must be a Buffer");void 0===b&&(b=0);void 0===c&&(c=a?a.length:0);void 0===d&&(d=0);void 0===e&&(e=this.length);if(0>b||c>a.length||0>d||e>this.length)throw new RangeError("out of range index");if(d>=e&&b>=c)return 0;if(d>=e)return -1;if(b>=c)return 1;b>>>=0;c>>>=0;d>>>=0;e>>>=0;if(this===a)return 0;var f=e-d,g=c-b,h=Math.min(f,g);d=this.slice(d,e);a=a.slice(b,c);for(b=0;b<h;++b)if(d[b]!==a[b]){f=d[b];g=a[b];break}return f<
    g?-1:g<f?1:0};
    function Bb(a,b,c,d,e){if(0===a.length)return -1;"string"===typeof c?(d=c,c=0):2147483647<c?c=2147483647:-2147483648>c&&(c=-2147483648);c=+c;isNaN(c)&&(c=e?0:a.length-1);0>c&&(c=a.length+c);if(c>=a.length){if(e)return -1;c=a.length-1;}else if(0>c)if(e)c=0;else return -1;"string"===typeof b&&(b=M.from(b,d));if(O(b))return 0===b.length?-1:Cb(a,b,c,d,e);if("number"===typeof b)return b&=255,M.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?e?Uint8Array.prototype.indexOf.call(a,b,c):
    Uint8Array.prototype.lastIndexOf.call(a,b,c):Cb(a,[b],c,d,e);throw new TypeError("val must be string, number or Buffer");}
    function Cb(a,b,c,d,e){function f(a,b){return 1===g?a[b]:a.readUInt16BE(b*g)}var g=1,h=a.length,n=b.length;if(void 0!==d&&(d=String(d).toLowerCase(),"ucs2"===d||"ucs-2"===d||"utf16le"===d||"utf-16le"===d)){if(2>a.length||2>b.length)return -1;g=2;h/=2;n/=2;c/=2;}if(e)for(d=-1;c<h;c++)if(f(a,c)===f(b,-1===d?0:c-d)){if(-1===d&&(d=c),c-d+1===n)return d*g}else -1!==d&&(c-=c-d),d=-1;else for(c+n>h&&(c=h-n);0<=c;c--){h=!0;for(d=0;d<n;d++)if(f(a,c+d)!==f(b,d)){h=!1;break}if(h)return c}return -1}
    M.prototype.includes=function(a,b,c){return -1!==this.indexOf(a,b,c)};M.prototype.indexOf=function(a,b,c){return Bb(this,a,b,c,!0)};M.prototype.lastIndexOf=function(a,b,c){return Bb(this,a,b,c,!1)};
    M.prototype.write=function(a,b,c,d){if(void 0===b)d="utf8",c=this.length,b=0;else if(void 0===c&&"string"===typeof b)d=b,c=this.length,b=0;else if(isFinite(b))b|=0,isFinite(c)?(c|=0,void 0===d&&(d="utf8")):(d=c,c=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var e=this.length-b;if(void 0===c||c>e)c=e;if(0<a.length&&(0>c||0>b)||b>this.length)throw new RangeError("Attempt to write outside buffer bounds");d||(d="utf8");for(e=!1;;)switch(d){case "hex":a:{b=
    Number(b)||0;d=this.length-b;c?(c=Number(c),c>d&&(c=d)):c=d;d=a.length;if(0!==d%2)throw new TypeError("Invalid hex string");c>d/2&&(c=d/2);for(d=0;d<c;++d){e=parseInt(a.substr(2*d,2),16);if(isNaN(e)){a=d;break a}this[b+d]=e;}a=d;}return a;case "utf8":case "utf-8":return Db(xb(a,this.length-b),this,b,c);case "ascii":return Db(Eb(a),this,b,c);case "latin1":case "binary":return Db(Eb(a),this,b,c);case "base64":return Db(yb(a),this,b,c);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":d=a;e=this.length-
    b;for(var f=[],g=0;g<d.length&&!(0>(e-=2));++g){var h=d.charCodeAt(g);a=h>>8;h%=256;f.push(h);f.push(a);}return Db(f,this,b,c);default:if(e)throw new TypeError("Unknown encoding: "+d);d=(""+d).toLowerCase();e=!0;}};M.prototype.toJSON=function(){return {type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};
    function Ab(a,b,c){c=Math.min(a.length,c);for(var d=[];b<c;){var e=a[b],f=null,g=239<e?4:223<e?3:191<e?2:1;if(b+g<=c)switch(g){case 1:128>e&&(f=e);break;case 2:var h=a[b+1];128===(h&192)&&(e=(e&31)<<6|h&63,127<e&&(f=e));break;case 3:h=a[b+1];var n=a[b+2];128===(h&192)&&128===(n&192)&&(e=(e&15)<<12|(h&63)<<6|n&63,2047<e&&(55296>e||57343<e)&&(f=e));break;case 4:h=a[b+1];n=a[b+2];var k=a[b+3];128===(h&192)&&128===(n&192)&&128===(k&192)&&(e=(e&15)<<18|(h&63)<<12|(n&63)<<6|k&63,65535<e&&1114112>e&&(f=
    e));}null===f?(f=65533,g=1):65535<f&&(f-=65536,d.push(f>>>10&1023|55296),f=56320|f&1023);d.push(f);b+=g;}a=d.length;if(a<=Fb)d=String.fromCharCode.apply(String,d);else {c="";for(b=0;b<a;)c+=String.fromCharCode.apply(String,d.slice(b,b+=Fb));d=c;}return d}var Fb=4096;
    M.prototype.slice=function(a,b){var c=this.length;a=~~a;b=void 0===b?c:~~b;0>a?(a+=c,0>a&&(a=0)):a>c&&(a=c);0>b?(b+=c,0>b&&(b=0)):b>c&&(b=c);b<a&&(b=a);if(M.TYPED_ARRAY_SUPPORT)b=this.subarray(a,b),b.__proto__=M.prototype;else {c=b-a;b=new M(c,void 0);for(var d=0;d<c;++d)b[d]=this[d+a];}return b};function Q(a,b,c){if(0!==a%1||0>a)throw new RangeError("offset is not uint");if(a+b>c)throw new RangeError("Trying to access beyond buffer length");}
    M.prototype.readUIntLE=function(a,b,c){a|=0;b|=0;c||Q(a,b,this.length);c=this[a];for(var d=1,e=0;++e<b&&(d*=256);)c+=this[a+e]*d;return c};M.prototype.readUIntBE=function(a,b,c){a|=0;b|=0;c||Q(a,b,this.length);c=this[a+--b];for(var d=1;0<b&&(d*=256);)c+=this[a+--b]*d;return c};M.prototype.readUInt8=function(a,b){b||Q(a,1,this.length);return this[a]};M.prototype.readUInt16LE=function(a,b){b||Q(a,2,this.length);return this[a]|this[a+1]<<8};
    M.prototype.readUInt16BE=function(a,b){b||Q(a,2,this.length);return this[a]<<8|this[a+1]};M.prototype.readUInt32LE=function(a,b){b||Q(a,4,this.length);return (this[a]|this[a+1]<<8|this[a+2]<<16)+16777216*this[a+3]};M.prototype.readUInt32BE=function(a,b){b||Q(a,4,this.length);return 16777216*this[a]+(this[a+1]<<16|this[a+2]<<8|this[a+3])};M.prototype.readIntLE=function(a,b,c){a|=0;b|=0;c||Q(a,b,this.length);c=this[a];for(var d=1,e=0;++e<b&&(d*=256);)c+=this[a+e]*d;c>=128*d&&(c-=Math.pow(2,8*b));return c};
    M.prototype.readIntBE=function(a,b,c){a|=0;b|=0;c||Q(a,b,this.length);c=b;for(var d=1,e=this[a+--c];0<c&&(d*=256);)e+=this[a+--c]*d;e>=128*d&&(e-=Math.pow(2,8*b));return e};M.prototype.readInt8=function(a,b){b||Q(a,1,this.length);return this[a]&128?-1*(255-this[a]+1):this[a]};M.prototype.readInt16LE=function(a,b){b||Q(a,2,this.length);a=this[a]|this[a+1]<<8;return a&32768?a|4294901760:a};
    M.prototype.readInt16BE=function(a,b){b||Q(a,2,this.length);a=this[a+1]|this[a]<<8;return a&32768?a|4294901760:a};M.prototype.readInt32LE=function(a,b){b||Q(a,4,this.length);return this[a]|this[a+1]<<8|this[a+2]<<16|this[a+3]<<24};M.prototype.readInt32BE=function(a,b){b||Q(a,4,this.length);return this[a]<<24|this[a+1]<<16|this[a+2]<<8|this[a+3]};M.prototype.readFloatLE=function(a,b){b||Q(a,4,this.length);return jb(this,a,!0,23,4)};
    M.prototype.readFloatBE=function(a,b){b||Q(a,4,this.length);return jb(this,a,!1,23,4)};M.prototype.readDoubleLE=function(a,b){b||Q(a,8,this.length);return jb(this,a,!0,52,8)};M.prototype.readDoubleBE=function(a,b){b||Q(a,8,this.length);return jb(this,a,!1,52,8)};function R(a,b,c,d,e,f){if(!O(a))throw new TypeError('"buffer" argument must be a Buffer instance');if(b>e||b<f)throw new RangeError('"value" argument is out of bounds');if(c+d>a.length)throw new RangeError("Index out of range");}
    M.prototype.writeUIntLE=function(a,b,c,d){a=+a;b|=0;c|=0;d||R(this,a,b,c,Math.pow(2,8*c)-1,0);d=1;var e=0;for(this[b]=a&255;++e<c&&(d*=256);)this[b+e]=a/d&255;return b+c};M.prototype.writeUIntBE=function(a,b,c,d){a=+a;b|=0;c|=0;d||R(this,a,b,c,Math.pow(2,8*c)-1,0);d=c-1;var e=1;for(this[b+d]=a&255;0<=--d&&(e*=256);)this[b+d]=a/e&255;return b+c};M.prototype.writeUInt8=function(a,b,c){a=+a;b|=0;c||R(this,a,b,1,255,0);M.TYPED_ARRAY_SUPPORT||(a=Math.floor(a));this[b]=a&255;return b+1};
    function Gb(a,b,c,d){0>b&&(b=65535+b+1);for(var e=0,f=Math.min(a.length-c,2);e<f;++e)a[c+e]=(b&255<<8*(d?e:1-e))>>>8*(d?e:1-e);}M.prototype.writeUInt16LE=function(a,b,c){a=+a;b|=0;c||R(this,a,b,2,65535,0);M.TYPED_ARRAY_SUPPORT?(this[b]=a&255,this[b+1]=a>>>8):Gb(this,a,b,!0);return b+2};M.prototype.writeUInt16BE=function(a,b,c){a=+a;b|=0;c||R(this,a,b,2,65535,0);M.TYPED_ARRAY_SUPPORT?(this[b]=a>>>8,this[b+1]=a&255):Gb(this,a,b,!1);return b+2};
    function Hb(a,b,c,d){0>b&&(b=4294967295+b+1);for(var e=0,f=Math.min(a.length-c,4);e<f;++e)a[c+e]=b>>>8*(d?e:3-e)&255;}M.prototype.writeUInt32LE=function(a,b,c){a=+a;b|=0;c||R(this,a,b,4,4294967295,0);M.TYPED_ARRAY_SUPPORT?(this[b+3]=a>>>24,this[b+2]=a>>>16,this[b+1]=a>>>8,this[b]=a&255):Hb(this,a,b,!0);return b+4};
    M.prototype.writeUInt32BE=function(a,b,c){a=+a;b|=0;c||R(this,a,b,4,4294967295,0);M.TYPED_ARRAY_SUPPORT?(this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=a&255):Hb(this,a,b,!1);return b+4};M.prototype.writeIntLE=function(a,b,c,d){a=+a;b|=0;d||(d=Math.pow(2,8*c-1),R(this,a,b,c,d-1,-d));d=0;var e=1,f=0;for(this[b]=a&255;++d<c&&(e*=256);)0>a&&0===f&&0!==this[b+d-1]&&(f=1),this[b+d]=(a/e>>0)-f&255;return b+c};
    M.prototype.writeIntBE=function(a,b,c,d){a=+a;b|=0;d||(d=Math.pow(2,8*c-1),R(this,a,b,c,d-1,-d));d=c-1;var e=1,f=0;for(this[b+d]=a&255;0<=--d&&(e*=256);)0>a&&0===f&&0!==this[b+d+1]&&(f=1),this[b+d]=(a/e>>0)-f&255;return b+c};M.prototype.writeInt8=function(a,b,c){a=+a;b|=0;c||R(this,a,b,1,127,-128);M.TYPED_ARRAY_SUPPORT||(a=Math.floor(a));0>a&&(a=255+a+1);this[b]=a&255;return b+1};
    M.prototype.writeInt16LE=function(a,b,c){a=+a;b|=0;c||R(this,a,b,2,32767,-32768);M.TYPED_ARRAY_SUPPORT?(this[b]=a&255,this[b+1]=a>>>8):Gb(this,a,b,!0);return b+2};M.prototype.writeInt16BE=function(a,b,c){a=+a;b|=0;c||R(this,a,b,2,32767,-32768);M.TYPED_ARRAY_SUPPORT?(this[b]=a>>>8,this[b+1]=a&255):Gb(this,a,b,!1);return b+2};
    M.prototype.writeInt32LE=function(a,b,c){a=+a;b|=0;c||R(this,a,b,4,2147483647,-2147483648);M.TYPED_ARRAY_SUPPORT?(this[b]=a&255,this[b+1]=a>>>8,this[b+2]=a>>>16,this[b+3]=a>>>24):Hb(this,a,b,!0);return b+4};M.prototype.writeInt32BE=function(a,b,c){a=+a;b|=0;c||R(this,a,b,4,2147483647,-2147483648);0>a&&(a=4294967295+a+1);M.TYPED_ARRAY_SUPPORT?(this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=a&255):Hb(this,a,b,!1);return b+4};
    function Ib(a,b,c,d){if(c+d>a.length)throw new RangeError("Index out of range");if(0>c)throw new RangeError("Index out of range");}M.prototype.writeFloatLE=function(a,b,c){c||Ib(this,a,b,4);kb(this,a,b,!0,23,4);return b+4};M.prototype.writeFloatBE=function(a,b,c){c||Ib(this,a,b,4);kb(this,a,b,!1,23,4);return b+4};M.prototype.writeDoubleLE=function(a,b,c){c||Ib(this,a,b,8);kb(this,a,b,!0,52,8);return b+8};M.prototype.writeDoubleBE=function(a,b,c){c||Ib(this,a,b,8);kb(this,a,b,!1,52,8);return b+8};
    M.prototype.copy=function(a,b,c,d){c||(c=0);d||0===d||(d=this.length);b>=a.length&&(b=a.length);b||(b=0);0<d&&d<c&&(d=c);if(d===c||0===a.length||0===this.length)return 0;if(0>b)throw new RangeError("targetStart out of bounds");if(0>c||c>=this.length)throw new RangeError("sourceStart out of bounds");if(0>d)throw new RangeError("sourceEnd out of bounds");d>this.length&&(d=this.length);a.length-b<d-c&&(d=a.length-b+c);var e=d-c;if(this===a&&c<b&&b<d)for(d=e-1;0<=d;--d)a[d+b]=this[d+c];else if(1E3>e||
    !M.TYPED_ARRAY_SUPPORT)for(d=0;d<e;++d)a[d+b]=this[d+c];else Uint8Array.prototype.set.call(a,this.subarray(c,c+e),b);return e};
    M.prototype.fill=function(a,b,c,d){if("string"===typeof a){"string"===typeof b?(d=b,b=0,c=this.length):"string"===typeof c&&(d=c,c=this.length);if(1===a.length){var e=a.charCodeAt(0);256>e&&(a=e);}if(void 0!==d&&"string"!==typeof d)throw new TypeError("encoding must be a string");if("string"===typeof d&&!M.isEncoding(d))throw new TypeError("Unknown encoding: "+d);}else "number"===typeof a&&(a&=255);if(0>b||this.length<b||this.length<c)throw new RangeError("Out of range index");if(c<=b)return this;b>>>=
    0;c=void 0===c?this.length:c>>>0;a||(a=0);if("number"===typeof a)for(d=b;d<c;++d)this[d]=a;else for(a=O(a)?a:xb((new M(a,d)).toString()),e=a.length,d=0;d<c-b;++d)this[d+b]=a[d%e];return this};var Jb=/[^+\/0-9A-Za-z-_]/g;
    function xb(a,b){b=b||Infinity;for(var c,d=a.length,e=null,f=[],g=0;g<d;++g){c=a.charCodeAt(g);if(55295<c&&57344>c){if(!e){if(56319<c){-1<(b-=3)&&f.push(239,191,189);continue}else if(g+1===d){-1<(b-=3)&&f.push(239,191,189);continue}e=c;continue}if(56320>c){-1<(b-=3)&&f.push(239,191,189);e=c;continue}c=(e-55296<<10|c-56320)+65536;}else e&&-1<(b-=3)&&f.push(239,191,189);e=null;if(128>c){if(0>--b)break;f.push(c);}else if(2048>c){if(0>(b-=2))break;f.push(c>>6|192,c&63|128);}else if(65536>c){if(0>(b-=3))break;
    f.push(c>>12|224,c>>6&63|128,c&63|128);}else if(1114112>c){if(0>(b-=4))break;f.push(c>>18|240,c>>12&63|128,c>>6&63|128,c&63|128);}else throw Error("Invalid code point");}return f}function Eb(a){for(var b=[],c=0;c<a.length;++c)b.push(a.charCodeAt(c)&255);return b}
    function yb(a){a=(a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")).replace(Jb,"");if(2>a.length)a="";else for(;0!==a.length%4;)a+="=";fb||gb();var b=a.length;if(0<b%4)throw Error("Invalid string. Length must be a multiple of 4");var c="="===a[b-2]?2:"="===a[b-1]?1:0;var d=new eb(3*b/4-c);var e=0<c?b-4:b;var f=0;for(b=0;b<e;b+=4){var g=L[a.charCodeAt(b)]<<18|L[a.charCodeAt(b+1)]<<12|L[a.charCodeAt(b+2)]<<6|L[a.charCodeAt(b+3)];d[f++]=g>>16&255;d[f++]=g>>8&255;d[f++]=g&255;}2===c?(g=L[a.charCodeAt(b)]<<2|
    L[a.charCodeAt(b+1)]>>4,d[f++]=g&255):1===c&&(g=L[a.charCodeAt(b)]<<10|L[a.charCodeAt(b+1)]<<4|L[a.charCodeAt(b+2)]>>2,d[f++]=g>>8&255,d[f++]=g&255);return d}function Db(a,b,c,d){for(var e=0;e<d&&!(e+c>=b.length||e>=a.length);++e)b[e+c]=a[e];return e}function wb(a){return null!=a&&(!!a._isBuffer||Kb(a)||"function"===typeof a.readFloatLE&&"function"===typeof a.slice&&Kb(a.slice(0,0)))}function Kb(a){return !!a.constructor&&"function"===typeof a.constructor.isBuffer&&a.constructor.isBuffer(a)}
    var Lb=Object.freeze({__proto__:null,INSPECT_MAX_BYTES:50,kMaxLength:nb,Buffer:M,SlowBuffer:function(a){+a!=a&&(a=0);return M.alloc(+a)},isBuffer:wb}),Mb=Qa(function(a,b){function c(a,b){for(var c in a)b[c]=a[c];}function d(a,b,c){return e(a,b,c)}var e=Lb.Buffer;e.from&&e.alloc&&e.allocUnsafe&&e.allocUnsafeSlow?a.exports=Lb:(c(Lb,b),b.Buffer=d);d.prototype=Object.create(e.prototype);c(e,d);d.from=function(a,b,c){if("number"===typeof a)throw new TypeError("Argument must not be a number");return e(a,
    b,c)};d.alloc=function(a,b,c){if("number"!==typeof a)throw new TypeError("Argument must be a number");a=e(a);void 0!==b?"string"===typeof c?a.fill(b,c):a.fill(b):a.fill(0);return a};d.allocUnsafe=function(a){if("number"!==typeof a)throw new TypeError("Argument must be a number");return e(a)};d.allocUnsafeSlow=function(a){if("number"!==typeof a)throw new TypeError("Argument must be a number");return Lb.SlowBuffer(a)};}),Nb=Qa(function(a,b){function c(){throw Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11");
    }function d(a,b){if("number"!==typeof a||a!==a)throw new TypeError("offset must be a number");if(a>q||0>a)throw new TypeError("offset must be a uint32");if(a>k||a>b)throw new RangeError("offset out of range");}function e(a,b,c){if("number"!==typeof a||a!==a)throw new TypeError("size must be a number");if(a>q||0>a)throw new TypeError("size must be a uint32");if(a+b>c||a>k)throw new RangeError("buffer too small");}function f(a,b,c,f){if(!(n.isBuffer(a)||a instanceof Pa.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
    if("function"===typeof b)f=b,b=0,c=a.length;else if("function"===typeof c)f=c,c=a.length-b;else if("function"!==typeof f)throw new TypeError('"cb" argument must be a function');d(b,a.length);e(c,b,a.length);return g(a,b,c,f)}function g(a,b,c,d){b=new Uint8Array(a.buffer,b,c);r.getRandomValues(b);if(d)Za(function(){d(null,a);});else return a}function h(a,b,c){"undefined"===typeof b&&(b=0);if(!(n.isBuffer(a)||a instanceof Pa.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
    d(b,a.length);void 0===c&&(c=a.length-b);e(c,b,a.length);return g(a,b,c)}var n=Mb.Buffer,k=Mb.kMaxLength,r=Pa.crypto||Pa.msCrypto,q=Math.pow(2,32)-1;r&&r.getRandomValues?(b.randomFill=f,b.randomFillSync=h):(b.randomFill=c,b.randomFillSync=c);}),Ob=Qa(function(a){a.exports=Nb;}).randomFillSync,Pb=Math.floor(.001*(Date.now()-performance.now()));function S(a){if("string"!==typeof a)throw new TypeError("Path must be a string. Received "+JSON.stringify(a));}
    function Qb(a,b){for(var c="",d=0,e=-1,f=0,g,h=0;h<=a.length;++h){if(h<a.length)g=a.charCodeAt(h);else if(47===g)break;else g=47;if(47===g){if(e!==h-1&&1!==f)if(e!==h-1&&2===f){if(2>c.length||2!==d||46!==c.charCodeAt(c.length-1)||46!==c.charCodeAt(c.length-2))if(2<c.length){if(e=c.lastIndexOf("/"),e!==c.length-1){-1===e?(c="",d=0):(c=c.slice(0,e),d=c.length-1-c.lastIndexOf("/"));e=h;f=0;continue}}else if(2===c.length||1===c.length){c="";d=0;e=h;f=0;continue}b&&(c=0<c.length?c+"/..":"..",d=2);}else c=
    0<c.length?c+("/"+a.slice(e+1,h)):a.slice(e+1,h),d=h-e-1;e=h;f=0;}else 46===g&&-1!==f?++f:f=-1;}return c}
    var Rb={resolve:function(){for(var a="",b=!1,c,d=arguments.length-1;-1<=d&&!b;d--){if(0<=d)var e=arguments[d];else void 0===c&&(c=db.cwd()),e=c;S(e);0!==e.length&&(a=e+"/"+a,b=47===e.charCodeAt(0));}a=Qb(a,!b);return b?0<a.length?"/"+a:"/":0<a.length?a:"."},normalize:function(a){S(a);if(0===a.length)return ".";var b=47===a.charCodeAt(0),c=47===a.charCodeAt(a.length-1);a=Qb(a,!b);0!==a.length||b||(a=".");0<a.length&&c&&(a+="/");return b?"/"+a:a},isAbsolute:function(a){S(a);return 0<a.length&&47===a.charCodeAt(0)},
    join:function(){if(0===arguments.length)return ".";for(var a,b=0;b<arguments.length;++b){var c=arguments[b];S(c);0<c.length&&(a=void 0===a?c:a+("/"+c));}return void 0===a?".":Rb.normalize(a)},relative:function(a,b){S(a);S(b);if(a===b)return "";a=Rb.resolve(a);b=Rb.resolve(b);if(a===b)return "";for(var c=1;c<a.length&&47===a.charCodeAt(c);++c);for(var d=a.length,e=d-c,f=1;f<b.length&&47===b.charCodeAt(f);++f);for(var g=b.length-f,h=e<g?e:g,n=-1,k=0;k<=h;++k){if(k===h){if(g>h){if(47===b.charCodeAt(f+k))return b.slice(f+
    k+1);if(0===k)return b.slice(f+k)}else e>h&&(47===a.charCodeAt(c+k)?n=k:0===k&&(n=0));break}var r=a.charCodeAt(c+k),q=b.charCodeAt(f+k);if(r!==q)break;else 47===r&&(n=k);}e="";for(k=c+n+1;k<=d;++k)if(k===d||47===a.charCodeAt(k))e=0===e.length?e+"..":e+"/..";if(0<e.length)return e+b.slice(f+n);f+=n;47===b.charCodeAt(f)&&++f;return b.slice(f)},_makeLong:function(a){return a},dirname:function(a){S(a);if(0===a.length)return ".";for(var b=a.charCodeAt(0),c=47===b,d=-1,e=!0,f=a.length-1;1<=f;--f)if(b=a.charCodeAt(f),
    47===b){if(!e){d=f;break}}else e=!1;return -1===d?c?"/":".":c&&1===d?"//":a.slice(0,d)},basename:function(a,b){if(void 0!==b&&"string"!==typeof b)throw new TypeError('"ext" argument must be a string');S(a);var c=0,d=-1,e=!0,f;if(void 0!==b&&0<b.length&&b.length<=a.length){if(b.length===a.length&&b===a)return "";var g=b.length-1,h=-1;for(f=a.length-1;0<=f;--f){var n=a.charCodeAt(f);if(47===n){if(!e){c=f+1;break}}else -1===h&&(e=!1,h=f+1),0<=g&&(n===b.charCodeAt(g)?-1===--g&&(d=f):(g=-1,d=h));}c===d?d=
    h:-1===d&&(d=a.length);return a.slice(c,d)}for(f=a.length-1;0<=f;--f)if(47===a.charCodeAt(f)){if(!e){c=f+1;break}}else -1===d&&(e=!1,d=f+1);return -1===d?"":a.slice(c,d)},extname:function(a){S(a);for(var b=-1,c=0,d=-1,e=!0,f=0,g=a.length-1;0<=g;--g){var h=a.charCodeAt(g);if(47===h){if(!e){c=g+1;break}}else -1===d&&(e=!1,d=g+1),46===h?-1===b?b=g:1!==f&&(f=1):-1!==b&&(f=-1);}return -1===b||-1===d||0===f||1===f&&b===d-1&&b===c+1?"":a.slice(b,d)},format:function(a){if(null===a||"object"!==typeof a)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+
    typeof a);var b=a.dir||a.root,c=a.base||(a.name||"")+(a.ext||"");a=b?b===a.root?b+c:b+"/"+c:c;return a},parse:function(a){S(a);var b={root:"",dir:"",base:"",ext:"",name:""};if(0===a.length)return b;var c=a.charCodeAt(0),d=47===c;if(d){b.root="/";var e=1;}else e=0;for(var f=-1,g=0,h=-1,n=!0,k=a.length-1,r=0;k>=e;--k)if(c=a.charCodeAt(k),47===c){if(!n){g=k+1;break}}else -1===h&&(n=!1,h=k+1),46===c?-1===f?f=k:1!==r&&(r=1):-1!==f&&(r=-1);-1===f||-1===h||0===r||1===r&&f===h-1&&f===g+1?-1!==h&&(b.base=0===
    g&&d?b.name=a.slice(1,h):b.name=a.slice(g,h)):(0===g&&d?(b.name=a.slice(1,f),b.base=a.slice(1,h)):(b.name=a.slice(g,f),b.base=a.slice(g,h)),b.ext=a.slice(f,h));0<g?b.dir=a.slice(0,g-1):d&&(b.dir="/");return b},sep:"/",delimiter:":",win32:null,posix:null},Sb=Rb.posix=Rb,Tb=Object.freeze({__proto__:null,"default":Sb,__moduleExports:Sb}),Wb={hrtime:function(a){return function(b){b=a(b);return 1E9*b[0]+b[1]}}(function(a){var b=.001*performance.now(),c=Math.floor(b)+Pb;b=Math.floor(b%1*1E9);a&&(c-=a[0],
    b-=a[1],0>b&&(c--,b+=1E9));return [c,b]}),exit:function(a){throw new Ub(a);},kill:function(a){throw new Vb(a);},randomFillSync:Ob,isTTY:function(){return !0},path:Tb,fs:null},T,Yb=l(1),V=l(2),Zb=l(4),$b=l(8),W=l(16),ac=l(32),X=l(64),bc=l(128),cc=l(256),dc=l(512),ec=l(1024),fc=l(2048),gc=l(4096),hc=l(8192),ic=l(16384),jc=l(32768),nc=l(65536),oc=l(131072),pc=l(262144),qc=l(524288),rc=l(1048576),Y=l(2097152),sc=l(4194304),tc=l(8388608),uc=l(16777216),vc=l(33554432),wc=l(67108864),xc=l(134217728),yc=l(268435456),
    zc=Yb|V|Zb|$b|W|ac|X|bc|cc|dc|ec|fc|gc|hc|ic|jc|nc|oc|pc|qc|rc|Y|tc|sc|uc|wc|vc|xc|yc,Ac=Yb|V|Zb|$b|W|ac|X|bc|cc|Y|sc|tc|xc,Bc=l(0),Cc=$b|W|bc|dc|ec|fc|gc|hc|ic|jc|nc|oc|pc|qc|rc|Y|tc|uc|wc|vc|xc,Dc=Cc|Ac,Ec=V|$b|X|Y|xc|yc,Fc=V|$b|X|Y|xc,Gc=l(0),Hc={E2BIG:1,EACCES:2,EADDRINUSE:3,EADDRNOTAVAIL:4,EAFNOSUPPORT:5,EALREADY:7,EAGAIN:6,EBADF:8,EBADMSG:9,EBUSY:10,ECANCELED:11,ECHILD:12,ECONNABORTED:13,ECONNREFUSED:14,ECONNRESET:15,EDEADLOCK:16,EDESTADDRREQ:17,EDOM:18,EDQUOT:19,EEXIST:20,EFAULT:21,EFBIG:22,
    EHOSTDOWN:23,EHOSTUNREACH:23,EIDRM:24,EILSEQ:25,EINPROGRESS:26,EINTR:27,EINVAL:28,EIO:29,EISCONN:30,EISDIR:31,ELOOP:32,EMFILE:33,EMLINK:34,EMSGSIZE:35,EMULTIHOP:36,ENAMETOOLONG:37,ENETDOWN:38,ENETRESET:39,ENETUNREACH:40,ENFILE:41,ENOBUFS:42,ENODEV:43,ENOENT:44,ENOEXEC:45,ENOLCK:46,ENOLINK:47,ENOMEM:48,ENOMSG:49,ENOPROTOOPT:50,ENOSPC:51,ENOSYS:52,ENOTCONN:53,ENOTDIR:54,ENOTEMPTY:55,ENOTRECOVERABLE:56,ENOTSOCK:57,ENOTTY:59,ENXIO:60,EOVERFLOW:61,EOWNERDEAD:62,EPERM:63,EPIPE:64,EPROTO:65,EPROTONOSUPPORT:66,
    EPROTOTYPE:67,ERANGE:68,EROFS:69,ESPIPE:70,ESRCH:71,ESTALE:72,ETIMEDOUT:73,ETXTBSY:74,EXDEV:75},Ic=(T={},T[6]="SIGHUP",T[8]="SIGINT",T[11]="SIGQUIT",T[7]="SIGILL",T[15]="SIGTRAP",T[0]="SIGABRT",T[2]="SIGBUS",T[5]="SIGFPE",T[9]="SIGKILL",T[20]="SIGUSR1",T[12]="SIGSEGV",T[21]="SIGUSR2",T[10]="SIGPIPE",T[1]="SIGALRM",T[14]="SIGTERM",T[3]="SIGCHLD",T[4]="SIGCONT",T[13]="SIGSTOP",T[16]="SIGTSTP",T[17]="SIGTTIN",T[18]="SIGTTOU",T[19]="SIGURG",T[23]="SIGXCPU",T[24]="SIGXFSZ",T[22]="SIGVTALRM",T),Jc=Yb|V|
    W|bc|Y|xc,Kc=Yb|X|W|bc|Y|xc;function Lc(a){var b=Math.trunc(a);a=l(Math.round(1E6*(a-b)));return l(b)*l(1E6)+a}function Mc(a){"number"===typeof a&&(a=Math.trunc(a));a=l(a);return Number(a/l(1E6))}function Z(a){return function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];try{return a.apply(void 0,ea(b))}catch(d){if(d&&d.code&&"string"===typeof d.code)return Hc[d.code]||28;if(d instanceof Nc)return d.errno;throw d;}}}
    function Oc(a,b){var c=a.FD_MAP.get(b);if(!c)throw new Nc(8);if(void 0===c.filetype){var d=a.bindings.fs.fstatSync(c.real);a=Pc(a,b,d);b=a.rightsBase;d=a.rightsInheriting;c.filetype=a.filetype;c.rights||(c.rights={base:b,inheriting:d});}return c}
    function Pc(a,b,c){switch(!0){case c.isBlockDevice():return {filetype:1,rightsBase:zc,rightsInheriting:zc};case c.isCharacterDevice():return void 0!==b&&a.bindings.isTTY(b)?{filetype:2,rightsBase:Fc,rightsInheriting:Gc}:{filetype:2,rightsBase:zc,rightsInheriting:zc};case c.isDirectory():return {filetype:3,rightsBase:Cc,rightsInheriting:Dc};case c.isFIFO():return {filetype:6,rightsBase:Ec,rightsInheriting:zc};case c.isFile():return {filetype:4,rightsBase:Ac,rightsInheriting:Bc};case c.isSocket():return {filetype:6,
    rightsBase:Ec,rightsInheriting:zc};case c.isSymbolicLink():return {filetype:7,rightsBase:l(0),rightsInheriting:l(0)};default:return {filetype:0,rightsBase:l(0),rightsInheriting:l(0)}}}
    var Nc=function(a){function b(c){var d=a.call(this)||this;d.errno=c;Object.setPrototypeOf(d,b.prototype);return d}ba(b,a);return b}(Error),Ub=function(a){function b(c){var d=a.call(this,"WASI Exit error: "+c)||this;d.code=c;Object.setPrototypeOf(d,b.prototype);return d}ba(b,a);return b}(Error),Vb=function(a){function b(c){var d=a.call(this,"WASI Kill signal: "+c)||this;d.signal=c;Object.setPrototypeOf(d,b.prototype);return d}ba(b,a);return b}(Error),Qc=function(){function a(a){function b(a){switch(a){case 1:return r.hrtime();
    case 0:return Lc(Date.now());case 2:case 3:return r.hrtime()-Rc;default:return null}}function d(a,b){a=Oc(g,a);if(b!==l(0)&&(a.rights.base&b)===l(0))throw new Nc(63);return a}function e(a,b){g.refreshMemory();return Array.from({length:b},function(b,c){c=a+8*c;b=g.view.getUint32(c,!0);c=g.view.getUint32(c+4,!0);return new Uint8Array(g.memory.buffer,b,c)})}var f,g=this,h={};a&&a.preopens?h=a.preopens:a&&a.preopenDirectories&&(h=a.preopenDirectories);var n={};a&&a.env&&(n=a.env);var k=[];a&&a.args&&
    (k=a.args);var r=Wb;a&&a.bindings&&(r=a.bindings);this.view=this.memory=void 0;this.bindings=r;this.FD_MAP=new Map([[0,{real:0,filetype:2,rights:{base:Jc,inheriting:l(0)},path:void 0}],[1,{real:1,filetype:2,rights:{base:Kc,inheriting:l(0)},path:void 0}],[2,{real:2,filetype:2,rights:{base:Kc,inheriting:l(0)},path:void 0}]]);var q=this.bindings.fs,x=this.bindings.path;try{for(var Ha=ca(Object.entries(h)),na=Ha.next();!na.done;na=Ha.next()){var Xb=da(na.value,2),Sc=Xb[0],kc=Xb[1],Tc=q.openSync(kc,q.constants.O_RDONLY),
    Uc=ea(this.FD_MAP.keys()).reverse()[0]+1;this.FD_MAP.set(Uc,{real:Tc,filetype:3,rights:{base:Cc,inheriting:Dc},fakePath:Sc,path:kc});}}catch(u){var lc={error:u};}finally{try{na&&!na.done&&(f=Ha.return)&&f.call(Ha);}finally{if(lc)throw lc.error;}}var Rc=r.hrtime();this.wasiImport={args_get:function(a,b){g.refreshMemory();var c=a,d=b;k.forEach(function(a){g.view.setUint32(c,d,!0);c+=4;d+=E.from(g.memory.buffer).write(a+"\x00",d);});return 0},args_sizes_get:function(a,b){g.refreshMemory();g.view.setUint32(a,
    k.length,!0);a=k.reduce(function(a,b){return a+E.byteLength(b)+1},0);g.view.setUint32(b,a,!0);return 0},environ_get:function(a,b){g.refreshMemory();var c=a,d=b;Object.entries(n).forEach(function(a){var b=da(a,2);a=b[0];b=b[1];g.view.setUint32(c,d,!0);c+=4;d+=E.from(g.memory.buffer).write(a+"="+b+"\x00",d);});return 0},environ_sizes_get:function(a,b){g.refreshMemory();var c=Object.entries(n).map(function(a){a=da(a,2);return a[0]+"="+a[1]+"\x00"}),d=c.reduce(function(a,b){return a+E.byteLength(b)},0);
    g.view.setUint32(a,c.length,!0);g.view.setUint32(b,d,!0);return 0},clock_res_get:function(a,b){switch(a){case 1:case 2:case 3:var c=l(1);break;case 0:c=l(1E3);}g.view.setBigUint64(b,c);return 0},clock_time_get:function(a,c,d){g.refreshMemory();a=b(a);if(null===a)return 28;g.view.setBigUint64(d,l(a),!0);return 0},fd_advise:Z(function(a){d(a,bc);return 52}),fd_allocate:Z(function(a){d(a,cc);return 52}),fd_close:Z(function(a){var b=d(a,l(0));q.closeSync(b.real);g.FD_MAP.delete(a);return 0}),fd_datasync:Z(function(a){a=
    d(a,Yb);q.fdatasyncSync(a.real);return 0}),fd_fdstat_get:Z(function(a,b){a=d(a,l(0));g.refreshMemory();g.view.setUint8(b,a.filetype);g.view.setUint16(b+2,0,!0);g.view.setUint16(b+4,0,!0);g.view.setBigUint64(b+8,l(a.rights.base),!0);g.view.setBigUint64(b+8+8,l(a.rights.inheriting),!0);return 0}),fd_fdstat_set_flags:Z(function(a){d(a,$b);return 52}),fd_fdstat_set_rights:Z(function(a,b,c){a=d(a,l(0));if((a.rights.base|b)>a.rights.base||(a.rights.inheriting|c)>a.rights.inheriting)return 63;a.rights.base=
    b;a.rights.inheriting=c;return 0}),fd_filestat_get:Z(function(a,b){a=d(a,Y);var c=q.fstatSync(a.real);g.refreshMemory();g.view.setBigUint64(b,l(c.dev),!0);b+=8;g.view.setBigUint64(b,l(c.ino),!0);b+=8;g.view.setUint8(b,a.filetype);b+=8;g.view.setBigUint64(b,l(c.nlink),!0);b+=8;g.view.setBigUint64(b,l(c.size),!0);b+=8;g.view.setBigUint64(b,Lc(c.atimeMs),!0);b+=8;g.view.setBigUint64(b,Lc(c.mtimeMs),!0);g.view.setBigUint64(b+8,Lc(c.ctimeMs),!0);return 0}),fd_filestat_set_size:Z(function(a,b){a=d(a,sc);
    q.ftruncateSync(a.real,Number(b));return 0}),fd_filestat_set_times:Z(function(a,c,e,g){a=d(a,tc);var f=q.fstatSync(a.real),u=f.atime;f=f.mtime;var t=Mc(b(0));if(3===(g&3)||12===(g&12))return 28;1===(g&1)?u=Mc(c):2===(g&2)&&(u=t);4===(g&4)?f=Mc(e):8===(g&8)&&(f=t);q.futimesSync(a.real,new Date(u),new Date(f));return 0}),fd_prestat_get:Z(function(a,b){a=d(a,l(0));if(!a.path)return 28;g.refreshMemory();g.view.setUint8(b,0);g.view.setUint32(b+4,E.byteLength(a.fakePath),!0);return 0}),fd_prestat_dir_name:Z(function(a,
    b,c){a=d(a,l(0));if(!a.path)return 28;g.refreshMemory();E.from(g.memory.buffer).write(a.fakePath,b,c,"utf8");return 0}),fd_pwrite:Z(function(a,b,c,f,h){var u=d(a,X|Zb),t=0;e(b,c).forEach(function(a){for(var b=0;b<a.byteLength;)b+=q.writeSync(u.real,a,b,a.byteLength-b,Number(f)+t+b);t+=b;});g.view.setUint32(h,t,!0);return 0}),fd_write:Z(function(a,b,c,f){var u=d(a,X),h=0;e(b,c).forEach(function(a){for(var b=0;b<a.byteLength;){var c=q.writeSync(u.real,a,b,a.byteLength-b,u.offset?Number(u.offset):null);
    u.offset&&(u.offset+=l(c));b+=c;}h+=b;});g.view.setUint32(f,h,!0);return 0}),fd_pread:Z(function(a,b,c,f,h){var u;a=d(a,V|Zb);var t=0;try{var n=ca(e(b,c)),B=n.next();a:for(;!B.done;B=n.next()){var k=B.value;for(b=0;b<k.byteLength;){var Vc=k.byteLength-b,r=q.readSync(a.real,k,b,k.byteLength-b,Number(f)+t+b);b+=r;t+=r;if(0===r||r<Vc)break a}t+=b;}}catch(ob){var U={error:ob};}finally{try{B&&!B.done&&(u=n.return)&&u.call(n);}finally{if(U)throw U.error;}}g.view.setUint32(h,t,!0);return 0}),fd_read:Z(function(a,
    b,c,f){var u;a=d(a,V);var h=0===a.real,t=0;try{var n=ca(e(b,c)),k=n.next();a:for(;!k.done;k=n.next()){var B=k.value;for(b=0;b<B.byteLength;){var r=B.byteLength-b,U=q.readSync(a.real,B,b,r,h||void 0===a.offset?null:Number(a.offset));h||(a.offset=(a.offset?a.offset:l(0))+l(U));b+=U;t+=U;if(0===U||U<r)break a}}}catch(ob){var x={error:ob};}finally{try{k&&!k.done&&(u=n.return)&&u.call(n);}finally{if(x)throw x.error;}}g.view.setUint32(f,t,!0);return 0}),fd_readdir:Z(function(a,b,c,e,f){a=d(a,ic);g.refreshMemory();
    var u=q.readdirSync(a.path,{withFileTypes:!0}),h=b;for(e=Number(e);e<u.length;e+=1){var n=u[e],t=E.byteLength(n.name);if(b-h>c)break;g.view.setBigUint64(b,l(e+1),!0);b+=8;if(b-h>c)break;var k=q.statSync(x.resolve(a.path,n.name));g.view.setBigUint64(b,l(k.ino),!0);b+=8;if(b-h>c)break;g.view.setUint32(b,t,!0);b+=4;if(b-h>c)break;switch(!0){case k.isBlockDevice():k=1;break;case k.isCharacterDevice():k=2;break;case k.isDirectory():k=3;break;case k.isFIFO():k=6;break;case k.isFile():k=4;break;case k.isSocket():k=
    6;break;case k.isSymbolicLink():k=7;break;default:k=0;}g.view.setUint8(b,k);b+=1;b+=3;if(b+t>=h+c)break;E.from(g.memory.buffer).write(n.name,b);b+=t;}g.view.setUint32(f,Math.min(b-h,c),!0);return 0}),fd_renumber:Z(function(a,b){d(a,l(0));d(b,l(0));q.closeSync(g.FD_MAP.get(a).real);g.FD_MAP.set(a,g.FD_MAP.get(b));g.FD_MAP.delete(b);return 0}),fd_seek:Z(function(a,b,c,e){a=d(a,Zb);g.refreshMemory();switch(c){case 1:a.offset=(a.offset?a.offset:l(0))+l(b);break;case 2:c=q.fstatSync(a.real).size;a.offset=
    l(c)+l(b);break;case 0:a.offset=l(b);}g.view.setBigUint64(e,a.offset,!0);return 0}),fd_tell:Z(function(a,b){a=d(a,ac);g.refreshMemory();a.offset||(a.offset=l(0));g.view.setBigUint64(b,a.offset,!0);return 0}),fd_sync:Z(function(a){a=d(a,W);q.fsyncSync(a.real);return 0}),path_create_directory:Z(function(a,b,c){a=d(a,dc);if(!a.path)return 28;g.refreshMemory();b=E.from(g.memory.buffer,b,c).toString();q.mkdirSync(x.resolve(a.path,b));return 0}),path_filestat_get:Z(function(a,b,c,e,f){a=d(a,pc);if(!a.path)return 28;
    g.refreshMemory();c=E.from(g.memory.buffer,c,e).toString();c=q.statSync(x.resolve(a.path,c));g.view.setBigUint64(f,l(c.dev),!0);f+=8;g.view.setBigUint64(f,l(c.ino),!0);f+=8;g.view.setUint8(f,Pc(g,void 0,c).filetype);f+=8;g.view.setBigUint64(f,l(c.nlink),!0);f+=8;g.view.setBigUint64(f,l(c.size),!0);f+=8;g.view.setBigUint64(f,Lc(c.atimeMs),!0);f+=8;g.view.setBigUint64(f,Lc(c.mtimeMs),!0);g.view.setBigUint64(f+8,Lc(c.ctimeMs),!0);return 0}),path_filestat_set_times:Z(function(a,c,e,f,h,n,k){a=d(a,rc);
    if(!a.path)return 28;g.refreshMemory();var u=q.fstatSync(a.real);c=u.atime;u=u.mtime;var t=Mc(b(0));if(3===(k&3)||12===(k&12))return 28;1===(k&1)?c=Mc(h):2===(k&2)&&(c=t);4===(k&4)?u=Mc(n):8===(k&8)&&(u=t);e=E.from(g.memory.buffer,e,f).toString();q.utimesSync(x.resolve(a.path,e),new Date(c),new Date(u));return 0}),path_link:Z(function(a,b,c,e,f,h,k){a=d(a,fc);f=d(f,gc);if(!a.path||!f.path)return 28;g.refreshMemory();c=E.from(g.memory.buffer,c,e).toString();h=E.from(g.memory.buffer,h,k).toString();
    q.linkSync(x.resolve(a.path,c),x.resolve(f.path,h));return 0}),path_open:Z(function(a,b,c,e,f,h,k,n,r){b=d(a,hc);h=l(h);k=l(k);a=(h&(V|ic))!==l(0);var u=(h&(Yb|X|cc|sc))!==l(0);if(u&&a)var t=q.constants.O_RDWR;else a?t=q.constants.O_RDONLY:u&&(t=q.constants.O_WRONLY);a=h|hc;h|=k;0!==(f&1)&&(t|=q.constants.O_CREAT,a|=ec);0!==(f&2)&&(t|=q.constants.O_DIRECTORY);0!==(f&4)&&(t|=q.constants.O_EXCL);0!==(f&8)&&(t|=q.constants.O_TRUNC,a|=qc);0!==(n&1)&&(t|=q.constants.O_APPEND);0!==(n&2)&&(t=q.constants.O_DSYNC?
    t|q.constants.O_DSYNC:t|q.constants.O_SYNC,h|=Yb);0!==(n&4)&&(t|=q.constants.O_NONBLOCK);0!==(n&8)&&(t=q.constants.O_RSYNC?t|q.constants.O_RSYNC:t|q.constants.O_SYNC,h|=W);0!==(n&16)&&(t|=q.constants.O_SYNC,h|=W);u&&0===(t&(q.constants.O_APPEND|q.constants.O_TRUNC))&&(h|=Zb);g.refreshMemory();c=E.from(g.memory.buffer,c,e).toString();c=x.resolve(b.path,c);if(x.relative(b.path,c).startsWith(".."))return 76;try{var B=q.realpathSync(c);if(x.relative(b.path,B).startsWith(".."))return 76}catch(mc){if("ENOENT"===
    mc.code)B=c;else throw mc;}t=q.statSync(B).isDirectory()?q.openSync(B,q.constants.O_RDONLY):q.openSync(B,t);c=ea(g.FD_MAP.keys()).reverse()[0]+1;g.FD_MAP.set(c,{real:t,filetype:void 0,rights:{base:a,inheriting:h},path:B});Oc(g,c);g.view.setUint32(r,c,!0);return 0}),path_readlink:Z(function(a,b,c,e,f,h){a=d(a,jc);if(!a.path)return 28;g.refreshMemory();b=E.from(g.memory.buffer,b,c).toString();b=x.resolve(a.path,b);b=q.readlinkSync(b);e=E.from(g.memory.buffer).write(b,e,f);g.view.setUint32(h,e,!0);return 0}),
    path_remove_directory:Z(function(a,b,c){a=d(a,vc);if(!a.path)return 28;g.refreshMemory();b=E.from(g.memory.buffer,b,c).toString();q.rmdirSync(x.resolve(a.path,b));return 0}),path_rename:Z(function(a,b,c,e,f,h){a=d(a,nc);e=d(e,oc);if(!a.path||!e.path)return 28;g.refreshMemory();b=E.from(g.memory.buffer,b,c).toString();f=E.from(g.memory.buffer,f,h).toString();q.renameSync(x.resolve(a.path,b),x.resolve(e.path,f));return 0}),path_symlink:Z(function(a,b,c,e,f){c=d(c,uc);if(!c.path)return 28;g.refreshMemory();
    a=E.from(g.memory.buffer,a,b).toString();e=E.from(g.memory.buffer,e,f).toString();q.symlinkSync(a,x.resolve(c.path,e));return 0}),path_unlink_file:Z(function(a,b,c){a=d(a,wc);if(!a.path)return 28;g.refreshMemory();b=E.from(g.memory.buffer,b,c).toString();q.unlinkSync(x.resolve(a.path,b));return 0}),poll_oneoff:function(a,c,d,e){var f=0,h=0;g.refreshMemory();for(var k=0;k<d;k+=1){var n=g.view.getBigUint64(a,!0);a+=8;var q=g.view.getUint8(a);a+=1;switch(q){case 0:a+=7;g.view.getBigUint64(a,!0);a+=8;
    var t=g.view.getUint32(a,!0);a+=4;a+=4;q=g.view.getBigUint64(a,!0);a+=8;g.view.getBigUint64(a,!0);a+=8;var u=g.view.getUint16(a,!0);a+=2;a+=6;var x=1===u;u=0;t=l(b(t));null===t?u=28:(q=x?q:t+q,h=q>h?q:h);g.view.setBigUint64(c,n,!0);c+=8;g.view.setUint16(c,u,!0);c+=2;g.view.setUint8(c,0);c+=1;c+=5;f+=1;break;case 1:case 2:a+=3;g.view.getUint32(a,!0);a+=4;g.view.setBigUint64(c,n,!0);c+=8;g.view.setUint16(c,52,!0);c+=2;g.view.setUint8(c,q);c+=1;c+=5;f+=1;break;default:return 28}}for(g.view.setUint32(e,
    f,!0);r.hrtime()<h;);return 0},proc_exit:function(a){r.exit(a);return 0},proc_raise:function(a){if(!(a in Ic))return 28;r.kill(Ic[a]);return 0},random_get:function(a,b){g.refreshMemory();r.randomFillSync(new Uint8Array(g.memory.buffer),a,b);return 0},sched_yield:function(){return 0},sock_recv:function(){return 52},sock_send:function(){return 52},sock_shutdown:function(){return 52}};}a.prototype.refreshMemory=function(){this.view&&0!==this.view.buffer.byteLength||(this.view=new ha(this.memory.buffer));};
    a.prototype.setMemory=function(a){this.memory=a;};a.prototype.start=function(a){a=a.exports;if(null===a||"object"!==typeof a)throw Error("instance.exports must be an Object. Received "+a+".");var b=a.memory;if(!(b instanceof WebAssembly.Memory))throw Error("instance.exports.memory must be a WebAssembly.Memory. Recceived "+b+".");this.setMemory(b);a._start&&a._start();};a.prototype.getImportNamespace=function(a){var b,d=null;try{for(var e=ca(WebAssembly.Module.imports(a)),f=e.next();!f.done;f=e.next()){var g=
    f.value;if("function"===g.kind&&g.module.startsWith("wasi_"))if(!d)d=g.module;else if(d!==g.module)throw Error("Multiple namespaces detected.");}}catch(n){var h={error:n};}finally{try{f&&!f.done&&(b=e.return)&&b.call(e);}finally{if(h)throw h.error;}}return d};a.prototype.getImports=function(a){switch(this.getImportNamespace(a)){case "wasi_unstable":return {wasi_unstable:this.wasiImport};case "wasi_snapshot_preview1":return {wasi_snapshot_preview1:this.wasiImport};default:throw Error("Can't detect a WASI namespace for the WebAssembly Module");
    }};a.defaultBindings=Wb;return a}();var WASI=Qc;

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, basedir, module) {
    	return module = {
    	  path: basedir,
    	  exports: {},
    	  require: function (path, base) {
          return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
        }
    	}, fn(module, module.exports), module.exports;
    }

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    var safeBuffer = createCommonjsModule(function (module, exports) {
    /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
    /* eslint-disable node/no-deprecated-api */

    var Buffer = buffer$1.Buffer;

    // alternative to using Object.keys for old browsers
    function copyProps (src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
      module.exports = buffer$1;
    } else {
      // Copy properties from require('buffer')
      copyProps(buffer$1, exports);
      exports.Buffer = SafeBuffer;
    }

    function SafeBuffer (arg, encodingOrOffset, length) {
      return Buffer(arg, encodingOrOffset, length)
    }

    SafeBuffer.prototype = Object.create(Buffer.prototype);

    // Copy static methods from Buffer
    copyProps(Buffer, SafeBuffer);

    SafeBuffer.from = function (arg, encodingOrOffset, length) {
      if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number')
      }
      return Buffer(arg, encodingOrOffset, length)
    };

    SafeBuffer.alloc = function (size, fill, encoding) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      var buf = Buffer(size);
      if (fill !== undefined) {
        if (typeof encoding === 'string') {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf
    };

    SafeBuffer.allocUnsafe = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      return Buffer(size)
    };

    SafeBuffer.allocUnsafeSlow = function (size) {
      if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number')
      }
      return buffer$1.SlowBuffer(size)
    };
    });

    var randombytes = crypto.randomBytes;

    var browser = createCommonjsModule(function (module, exports) {

    function oldBrowser () {
      throw new Error('secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11')
    }


    var Buffer = safeBuffer.Buffer;
    var kBufferMaxLength = safeBuffer.kMaxLength;
    var crypto = commonjsGlobal.crypto || commonjsGlobal.msCrypto;
    var kMaxUint32 = Math.pow(2, 32) - 1;
    function assertOffset (offset, length) {
      if (typeof offset !== 'number' || offset !== offset) { // eslint-disable-line no-self-compare
        throw new TypeError('offset must be a number')
      }

      if (offset > kMaxUint32 || offset < 0) {
        throw new TypeError('offset must be a uint32')
      }

      if (offset > kBufferMaxLength || offset > length) {
        throw new RangeError('offset out of range')
      }
    }

    function assertSize (size, offset, length) {
      if (typeof size !== 'number' || size !== size) { // eslint-disable-line no-self-compare
        throw new TypeError('size must be a number')
      }

      if (size > kMaxUint32 || size < 0) {
        throw new TypeError('size must be a uint32')
      }

      if (size + offset > length || size > kBufferMaxLength) {
        throw new RangeError('buffer too small')
      }
    }
    if ((crypto && crypto.getRandomValues) || !process.browser) {
      exports.randomFill = randomFill;
      exports.randomFillSync = randomFillSync;
    } else {
      exports.randomFill = oldBrowser;
      exports.randomFillSync = oldBrowser;
    }
    function randomFill (buf, offset, size, cb) {
      if (!Buffer.isBuffer(buf) && !(buf instanceof commonjsGlobal.Uint8Array)) {
        throw new TypeError('"buf" argument must be a Buffer or Uint8Array')
      }

      if (typeof offset === 'function') {
        cb = offset;
        offset = 0;
        size = buf.length;
      } else if (typeof size === 'function') {
        cb = size;
        size = buf.length - offset;
      } else if (typeof cb !== 'function') {
        throw new TypeError('"cb" argument must be a function')
      }
      assertOffset(offset, buf.length);
      assertSize(size, offset, buf.length);
      return actualFill(buf, offset, size, cb)
    }

    function actualFill (buf, offset, size, cb) {
      if (process.browser) {
        var ourBuf = buf.buffer;
        var uint = new Uint8Array(ourBuf, offset, size);
        crypto.getRandomValues(uint);
        if (cb) {
          process.nextTick(function () {
            cb(null, buf);
          });
          return
        }
        return buf
      }
      if (cb) {
        randombytes(size, function (err, bytes) {
          if (err) {
            return cb(err)
          }
          bytes.copy(buf, offset);
          cb(null, buf);
        });
        return
      }
      var bytes = randombytes(size);
      bytes.copy(buf, offset);
      return buf
    }
    function randomFillSync (buf, offset, size) {
      if (typeof offset === 'undefined') {
        offset = 0;
      }
      if (!Buffer.isBuffer(buf) && !(buf instanceof commonjsGlobal.Uint8Array)) {
        throw new TypeError('"buf" argument must be a Buffer or Uint8Array')
      }

      assertOffset(offset, buf.length);

      if (size === undefined) size = buf.length - offset;

      assertSize(size, offset, buf.length);

      return actualFill(buf, offset, size)
    }
    });

    var randomfill = createCommonjsModule(function (module, exports) {
    if (typeof crypto.randomFill === 'function' && typeof crypto.randomFillSync === 'function') {
      exports.randomFill = crypto.randomFill;
      exports.randomFillSync = crypto.randomFillSync;
    } else {
      module.exports = browser;
    }
    });

    var browserHrtime = createCommonjsModule(function (module, exports) {
    // hrtime polyfill for the browser
    Object.defineProperty(exports, "__esModule", { value: true });
    const baseNow = Math.floor((Date.now() - performance.now()) * 1e-3);
    function hrtime(previousTimestamp) {
        // initilaize our variables
        let clocktime = performance.now() * 1e-3;
        let seconds = Math.floor(clocktime) + baseNow;
        let nanoseconds = Math.floor((clocktime % 1) * 1e9);
        // Compare to the prvious timestamp if we have one
        if (previousTimestamp) {
            seconds = seconds - previousTimestamp[0];
            nanoseconds = nanoseconds - previousTimestamp[1];
            if (nanoseconds < 0) {
                seconds--;
                nanoseconds += 1e9;
            }
        }
        // Return our seconds tuple
        return [seconds, nanoseconds];
    }
    exports.default = hrtime;
    });

    // 'path' module extracted from Node.js v8.11.1 (only the posix part)

    function assertPath(path) {
      if (typeof path !== 'string') {
        throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
      }
    }

    // Resolves . and .. elements in a path with directory names
    function normalizeStringPosix(path, allowAboveRoot) {
      var res = '';
      var lastSegmentLength = 0;
      var lastSlash = -1;
      var dots = 0;
      var code;
      for (var i = 0; i <= path.length; ++i) {
        if (i < path.length)
          code = path.charCodeAt(i);
        else if (code === 47 /*/*/)
          break;
        else
          code = 47 /*/*/;
        if (code === 47 /*/*/) {
          if (lastSlash === i - 1 || dots === 1) ; else if (lastSlash !== i - 1 && dots === 2) {
            if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
              if (res.length > 2) {
                var lastSlashIndex = res.lastIndexOf('/');
                if (lastSlashIndex !== res.length - 1) {
                  if (lastSlashIndex === -1) {
                    res = '';
                    lastSegmentLength = 0;
                  } else {
                    res = res.slice(0, lastSlashIndex);
                    lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                  }
                  lastSlash = i;
                  dots = 0;
                  continue;
                }
              } else if (res.length === 2 || res.length === 1) {
                res = '';
                lastSegmentLength = 0;
                lastSlash = i;
                dots = 0;
                continue;
              }
            }
            if (allowAboveRoot) {
              if (res.length > 0)
                res += '/..';
              else
                res = '..';
              lastSegmentLength = 2;
            }
          } else {
            if (res.length > 0)
              res += '/' + path.slice(lastSlash + 1, i);
            else
              res = path.slice(lastSlash + 1, i);
            lastSegmentLength = i - lastSlash - 1;
          }
          lastSlash = i;
          dots = 0;
        } else if (code === 46 /*.*/ && dots !== -1) {
          ++dots;
        } else {
          dots = -1;
        }
      }
      return res;
    }

    function _format(sep, pathObject) {
      var dir = pathObject.dir || pathObject.root;
      var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
      if (!dir) {
        return base;
      }
      if (dir === pathObject.root) {
        return dir + base;
      }
      return dir + sep + base;
    }

    var posix = {
      // path.resolve([from ...], to)
      resolve: function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute = false;
        var cwd;

        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path;
          if (i >= 0)
            path = arguments[i];
          else {
            if (cwd === undefined)
              cwd = process.cwd();
            path = cwd;
          }

          assertPath(path);

          // Skip empty entries
          if (path.length === 0) {
            continue;
          }

          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
        }

        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)

        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

        if (resolvedAbsolute) {
          if (resolvedPath.length > 0)
            return '/' + resolvedPath;
          else
            return '/';
        } else if (resolvedPath.length > 0) {
          return resolvedPath;
        } else {
          return '.';
        }
      },

      normalize: function normalize(path) {
        assertPath(path);

        if (path.length === 0) return '.';

        var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);

        if (path.length === 0 && !isAbsolute) path = '.';
        if (path.length > 0 && trailingSeparator) path += '/';

        if (isAbsolute) return '/' + path;
        return path;
      },

      isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
      },

      join: function join() {
        if (arguments.length === 0)
          return '.';
        var joined;
        for (var i = 0; i < arguments.length; ++i) {
          var arg = arguments[i];
          assertPath(arg);
          if (arg.length > 0) {
            if (joined === undefined)
              joined = arg;
            else
              joined += '/' + arg;
          }
        }
        if (joined === undefined)
          return '.';
        return posix.normalize(joined);
      },

      relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);

        if (from === to) return '';

        from = posix.resolve(from);
        to = posix.resolve(to);

        if (from === to) return '';

        // Trim any leading backslashes
        var fromStart = 1;
        for (; fromStart < from.length; ++fromStart) {
          if (from.charCodeAt(fromStart) !== 47 /*/*/)
            break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;

        // Trim any leading backslashes
        var toStart = 1;
        for (; toStart < to.length; ++toStart) {
          if (to.charCodeAt(toStart) !== 47 /*/*/)
            break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;

        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for (; i <= length; ++i) {
          if (i === length) {
            if (toLen > length) {
              if (to.charCodeAt(toStart + i) === 47 /*/*/) {
                // We get here if `from` is the exact base path for `to`.
                // For example: from='/foo/bar'; to='/foo/bar/baz'
                return to.slice(toStart + i + 1);
              } else if (i === 0) {
                // We get here if `from` is the root
                // For example: from='/'; to='/foo'
                return to.slice(toStart + i);
              }
            } else if (fromLen > length) {
              if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
                // We get here if `to` is the exact base path for `from`.
                // For example: from='/foo/bar/baz'; to='/foo/bar'
                lastCommonSep = i;
              } else if (i === 0) {
                // We get here if `to` is the root.
                // For example: from='/foo'; to='/'
                lastCommonSep = 0;
              }
            }
            break;
          }
          var fromCode = from.charCodeAt(fromStart + i);
          var toCode = to.charCodeAt(toStart + i);
          if (fromCode !== toCode)
            break;
          else if (fromCode === 47 /*/*/)
            lastCommonSep = i;
        }

        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
          if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
            if (out.length === 0)
              out += '..';
            else
              out += '/..';
          }
        }

        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0)
          return out + to.slice(toStart + lastCommonSep);
        else {
          toStart += lastCommonSep;
          if (to.charCodeAt(toStart) === 47 /*/*/)
            ++toStart;
          return to.slice(toStart);
        }
      },

      _makeLong: function _makeLong(path) {
        return path;
      },

      dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/;
        var end = -1;
        var matchedSlash = true;
        for (var i = path.length - 1; i >= 1; --i) {
          code = path.charCodeAt(i);
          if (code === 47 /*/*/) {
              if (!matchedSlash) {
                end = i;
                break;
              }
            } else {
            // We saw the first non-path separator
            matchedSlash = false;
          }
        }

        if (end === -1) return hasRoot ? '/' : '.';
        if (hasRoot && end === 1) return '//';
        return path.slice(0, end);
      },

      basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
        assertPath(path);

        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;

        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
          if (ext.length === path.length && ext === path) return '';
          var extIdx = ext.length - 1;
          var firstNonSlashEnd = -1;
          for (i = path.length - 1; i >= 0; --i) {
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                  start = i + 1;
                  break;
                }
              } else {
              if (firstNonSlashEnd === -1) {
                // We saw the first non-path separator, remember this index in case
                // we need it if the extension ends up not matching
                matchedSlash = false;
                firstNonSlashEnd = i + 1;
              }
              if (extIdx >= 0) {
                // Try to match the explicit extension
                if (code === ext.charCodeAt(extIdx)) {
                  if (--extIdx === -1) {
                    // We matched the extension, so mark this as the end of our path
                    // component
                    end = i;
                  }
                } else {
                  // Extension does not match, so our result is the entire path
                  // component
                  extIdx = -1;
                  end = firstNonSlashEnd;
                }
              }
            }
          }

          if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
          return path.slice(start, end);
        } else {
          for (i = path.length - 1; i >= 0; --i) {
            if (path.charCodeAt(i) === 47 /*/*/) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                  start = i + 1;
                  break;
                }
              } else if (end === -1) {
              // We saw the first non-path separator, mark this as the end of our
              // path component
              matchedSlash = false;
              end = i + 1;
            }
          }

          if (end === -1) return '';
          return path.slice(start, end);
        }
      },

      extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for (var i = path.length - 1; i >= 0; --i) {
          var code = path.charCodeAt(i);
          if (code === 47 /*/*/) {
              // If we reached a path separator that was not part of a set of path
              // separators at the end of the string, stop now
              if (!matchedSlash) {
                startPart = i + 1;
                break;
              }
              continue;
            }
          if (end === -1) {
            // We saw the first non-path separator, mark this as the end of our
            // extension
            matchedSlash = false;
            end = i + 1;
          }
          if (code === 46 /*.*/) {
              // If this is our first dot, mark it as the start of our extension
              if (startDot === -1)
                startDot = i;
              else if (preDotState !== 1)
                preDotState = 1;
          } else if (startDot !== -1) {
            // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
          }
        }

        if (startDot === -1 || end === -1 ||
            // We saw a non-dot character immediately before the dot
            preDotState === 0 ||
            // The (right-most) trimmed path component is exactly '..'
            preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          return '';
        }
        return path.slice(startDot, end);
      },

      format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') {
          throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        }
        return _format('/', pathObject);
      },

      parse: function parse(path) {
        assertPath(path);

        var ret = { root: '', dir: '', base: '', ext: '', name: '' };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/;
        var start;
        if (isAbsolute) {
          ret.root = '/';
          start = 1;
        } else {
          start = 0;
        }
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;

        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;

        // Get non-dir info
        for (; i >= start; --i) {
          code = path.charCodeAt(i);
          if (code === 47 /*/*/) {
              // If we reached a path separator that was not part of a set of path
              // separators at the end of the string, stop now
              if (!matchedSlash) {
                startPart = i + 1;
                break;
              }
              continue;
            }
          if (end === -1) {
            // We saw the first non-path separator, mark this as the end of our
            // extension
            matchedSlash = false;
            end = i + 1;
          }
          if (code === 46 /*.*/) {
              // If this is our first dot, mark it as the start of our extension
              if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) {
            // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
          }
        }

        if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          if (end !== -1) {
            if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
          }
        } else {
          if (startPart === 0 && isAbsolute) {
            ret.name = path.slice(1, startDot);
            ret.base = path.slice(1, end);
          } else {
            ret.name = path.slice(startPart, startDot);
            ret.base = path.slice(startPart, end);
          }
          ret.ext = path.slice(startDot, end);
        }

        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

        return ret;
      },

      sep: '/',
      delimiter: ':',
      win32: null,
      posix: null
    };

    posix.posix = posix;

    var pathBrowserify = posix;

    var bigint = createCommonjsModule(function (module, exports) {
    // A very simple workaround for Big int. Works in conjunction with our custom
    // Dataview workaround at ./dataview.ts
    Object.defineProperty(exports, "__esModule", { value: true });
    const globalObj = typeof globalThis !== "undefined"
        ? globalThis
        : typeof commonjsGlobal !== "undefined"
            ? commonjsGlobal
            : {};
    exports.BigIntPolyfill = typeof BigInt !== "undefined" ? BigInt : globalObj.BigInt || Number;
    });

    var dataview = createCommonjsModule(function (module, exports) {
    // A very simple workaround for Big int. Works in conjunction with our custom
    // BigInt workaround at ./bigint.ts
    Object.defineProperty(exports, "__esModule", { value: true });

    let exportedDataView = DataView;
    if (!exportedDataView.prototype.setBigUint64) {
        // Taken from https://gist.github.com/graup/815c9ac65c2bac8a56391f0ca23636fc
        exportedDataView.prototype.setBigUint64 = function (byteOffset, value, littleEndian) {
            let lowWord;
            let highWord;
            if (value < 2 ** 32) {
                lowWord = value;
                highWord = 0;
            }
            else {
                var bigNumberAsBinaryStr = value.toString(2);
                // Convert the above binary str to 64 bit (actually 52 bit will work) by padding zeros in the left
                var bigNumberAsBinaryStr2 = "";
                for (var i = 0; i < 64 - bigNumberAsBinaryStr.length; i++) {
                    bigNumberAsBinaryStr2 += "0";
                }
                bigNumberAsBinaryStr2 += bigNumberAsBinaryStr;
                highWord = parseInt(bigNumberAsBinaryStr2.substring(0, 32), 2);
                lowWord = parseInt(bigNumberAsBinaryStr2.substring(32), 2);
            }
            this.setUint32(byteOffset + (littleEndian ? 0 : 4), lowWord, littleEndian);
            this.setUint32(byteOffset + (littleEndian ? 4 : 0), highWord, littleEndian);
        };
        exportedDataView.prototype.getBigUint64 = function (byteOffset, littleEndian) {
            let lowWord = this.getUint32(byteOffset + (littleEndian ? 0 : 4), littleEndian);
            let highWord = this.getUint32(byteOffset + (littleEndian ? 4 : 0), littleEndian);
            var lowWordAsBinaryStr = lowWord.toString(2);
            var highWordAsBinaryStr = highWord.toString(2);
            // Convert the above binary str to 64 bit (actually 52 bit will work) by padding zeros in the left
            var lowWordAsBinaryStrPadded = "";
            for (var i = 0; i < 32 - lowWordAsBinaryStr.length; i++) {
                lowWordAsBinaryStrPadded += "0";
            }
            lowWordAsBinaryStrPadded += lowWordAsBinaryStr;
            return bigint.BigIntPolyfill("0b" + highWordAsBinaryStr + lowWordAsBinaryStrPadded);
        };
    }
    exports.DataViewPolyfill = exportedDataView;
    });

    var buffer = createCommonjsModule(function (module, exports) {
    // Return our buffer depending on browser or node
    Object.defineProperty(exports, "__esModule", { value: true });
    /*ROLLUP_REPLACE_BROWSER
    // @ts-ignore
    import { Buffer } from "buffer-es6";
    ROLLUP_REPLACE_BROWSER*/
    const isomorphicBuffer = Buffer;
    exports.default = isomorphicBuffer;
    });

    var constants = createCommonjsModule(function (module, exports) {
    /*

    This project is based from the Node implementation made by Gus Caplan
    https://github.com/devsnek/node-wasi
    However, JavaScript WASI is focused on:
     * Bringing WASI to the Browsers
     * Make easy to plug different filesystems
     * Provide a type-safe api using Typescript


    Copyright 2019 Gus Caplan

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to
    deal in the Software without restriction, including without limitation the
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    sell copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.

     */
    Object.defineProperty(exports, "__esModule", { value: true });

    exports.WASI_ESUCCESS = 0;
    exports.WASI_E2BIG = 1;
    exports.WASI_EACCES = 2;
    exports.WASI_EADDRINUSE = 3;
    exports.WASI_EADDRNOTAVAIL = 4;
    exports.WASI_EAFNOSUPPORT = 5;
    exports.WASI_EAGAIN = 6;
    exports.WASI_EALREADY = 7;
    exports.WASI_EBADF = 8;
    exports.WASI_EBADMSG = 9;
    exports.WASI_EBUSY = 10;
    exports.WASI_ECANCELED = 11;
    exports.WASI_ECHILD = 12;
    exports.WASI_ECONNABORTED = 13;
    exports.WASI_ECONNREFUSED = 14;
    exports.WASI_ECONNRESET = 15;
    exports.WASI_EDEADLK = 16;
    exports.WASI_EDESTADDRREQ = 17;
    exports.WASI_EDOM = 18;
    exports.WASI_EDQUOT = 19;
    exports.WASI_EEXIST = 20;
    exports.WASI_EFAULT = 21;
    exports.WASI_EFBIG = 22;
    exports.WASI_EHOSTUNREACH = 23;
    exports.WASI_EIDRM = 24;
    exports.WASI_EILSEQ = 25;
    exports.WASI_EINPROGRESS = 26;
    exports.WASI_EINTR = 27;
    exports.WASI_EINVAL = 28;
    exports.WASI_EIO = 29;
    exports.WASI_EISCONN = 30;
    exports.WASI_EISDIR = 31;
    exports.WASI_ELOOP = 32;
    exports.WASI_EMFILE = 33;
    exports.WASI_EMLINK = 34;
    exports.WASI_EMSGSIZE = 35;
    exports.WASI_EMULTIHOP = 36;
    exports.WASI_ENAMETOOLONG = 37;
    exports.WASI_ENETDOWN = 38;
    exports.WASI_ENETRESET = 39;
    exports.WASI_ENETUNREACH = 40;
    exports.WASI_ENFILE = 41;
    exports.WASI_ENOBUFS = 42;
    exports.WASI_ENODEV = 43;
    exports.WASI_ENOENT = 44;
    exports.WASI_ENOEXEC = 45;
    exports.WASI_ENOLCK = 46;
    exports.WASI_ENOLINK = 47;
    exports.WASI_ENOMEM = 48;
    exports.WASI_ENOMSG = 49;
    exports.WASI_ENOPROTOOPT = 50;
    exports.WASI_ENOSPC = 51;
    exports.WASI_ENOSYS = 52;
    exports.WASI_ENOTCONN = 53;
    exports.WASI_ENOTDIR = 54;
    exports.WASI_ENOTEMPTY = 55;
    exports.WASI_ENOTRECOVERABLE = 56;
    exports.WASI_ENOTSOCK = 57;
    exports.WASI_ENOTSUP = 58;
    exports.WASI_ENOTTY = 59;
    exports.WASI_ENXIO = 60;
    exports.WASI_EOVERFLOW = 61;
    exports.WASI_EOWNERDEAD = 62;
    exports.WASI_EPERM = 63;
    exports.WASI_EPIPE = 64;
    exports.WASI_EPROTO = 65;
    exports.WASI_EPROTONOSUPPORT = 66;
    exports.WASI_EPROTOTYPE = 67;
    exports.WASI_ERANGE = 68;
    exports.WASI_EROFS = 69;
    exports.WASI_ESPIPE = 70;
    exports.WASI_ESRCH = 71;
    exports.WASI_ESTALE = 72;
    exports.WASI_ETIMEDOUT = 73;
    exports.WASI_ETXTBSY = 74;
    exports.WASI_EXDEV = 75;
    exports.WASI_ENOTCAPABLE = 76;
    exports.WASI_SIGABRT = 0;
    exports.WASI_SIGALRM = 1;
    exports.WASI_SIGBUS = 2;
    exports.WASI_SIGCHLD = 3;
    exports.WASI_SIGCONT = 4;
    exports.WASI_SIGFPE = 5;
    exports.WASI_SIGHUP = 6;
    exports.WASI_SIGILL = 7;
    exports.WASI_SIGINT = 8;
    exports.WASI_SIGKILL = 9;
    exports.WASI_SIGPIPE = 10;
    exports.WASI_SIGQUIT = 11;
    exports.WASI_SIGSEGV = 12;
    exports.WASI_SIGSTOP = 13;
    exports.WASI_SIGTERM = 14;
    exports.WASI_SIGTRAP = 15;
    exports.WASI_SIGTSTP = 16;
    exports.WASI_SIGTTIN = 17;
    exports.WASI_SIGTTOU = 18;
    exports.WASI_SIGURG = 19;
    exports.WASI_SIGUSR1 = 20;
    exports.WASI_SIGUSR2 = 21;
    exports.WASI_SIGVTALRM = 22;
    exports.WASI_SIGXCPU = 23;
    exports.WASI_SIGXFSZ = 24;
    exports.WASI_FILETYPE_UNKNOWN = 0;
    exports.WASI_FILETYPE_BLOCK_DEVICE = 1;
    exports.WASI_FILETYPE_CHARACTER_DEVICE = 2;
    exports.WASI_FILETYPE_DIRECTORY = 3;
    exports.WASI_FILETYPE_REGULAR_FILE = 4;
    exports.WASI_FILETYPE_SOCKET_DGRAM = 5;
    exports.WASI_FILETYPE_SOCKET_STREAM = 6;
    exports.WASI_FILETYPE_SYMBOLIC_LINK = 7;
    exports.WASI_FDFLAG_APPEND = 0x0001;
    exports.WASI_FDFLAG_DSYNC = 0x0002;
    exports.WASI_FDFLAG_NONBLOCK = 0x0004;
    exports.WASI_FDFLAG_RSYNC = 0x0008;
    exports.WASI_FDFLAG_SYNC = 0x0010;
    exports.WASI_RIGHT_FD_DATASYNC = bigint.BigIntPolyfill(0x0000000000000001);
    exports.WASI_RIGHT_FD_READ = bigint.BigIntPolyfill(0x0000000000000002);
    exports.WASI_RIGHT_FD_SEEK = bigint.BigIntPolyfill(0x0000000000000004);
    exports.WASI_RIGHT_FD_FDSTAT_SET_FLAGS = bigint.BigIntPolyfill(0x0000000000000008);
    exports.WASI_RIGHT_FD_SYNC = bigint.BigIntPolyfill(0x0000000000000010);
    exports.WASI_RIGHT_FD_TELL = bigint.BigIntPolyfill(0x0000000000000020);
    exports.WASI_RIGHT_FD_WRITE = bigint.BigIntPolyfill(0x0000000000000040);
    exports.WASI_RIGHT_FD_ADVISE = bigint.BigIntPolyfill(0x0000000000000080);
    exports.WASI_RIGHT_FD_ALLOCATE = bigint.BigIntPolyfill(0x0000000000000100);
    exports.WASI_RIGHT_PATH_CREATE_DIRECTORY = bigint.BigIntPolyfill(0x0000000000000200);
    exports.WASI_RIGHT_PATH_CREATE_FILE = bigint.BigIntPolyfill(0x0000000000000400);
    exports.WASI_RIGHT_PATH_LINK_SOURCE = bigint.BigIntPolyfill(0x0000000000000800);
    exports.WASI_RIGHT_PATH_LINK_TARGET = bigint.BigIntPolyfill(0x0000000000001000);
    exports.WASI_RIGHT_PATH_OPEN = bigint.BigIntPolyfill(0x0000000000002000);
    exports.WASI_RIGHT_FD_READDIR = bigint.BigIntPolyfill(0x0000000000004000);
    exports.WASI_RIGHT_PATH_READLINK = bigint.BigIntPolyfill(0x0000000000008000);
    exports.WASI_RIGHT_PATH_RENAME_SOURCE = bigint.BigIntPolyfill(0x0000000000010000);
    exports.WASI_RIGHT_PATH_RENAME_TARGET = bigint.BigIntPolyfill(0x0000000000020000);
    exports.WASI_RIGHT_PATH_FILESTAT_GET = bigint.BigIntPolyfill(0x0000000000040000);
    exports.WASI_RIGHT_PATH_FILESTAT_SET_SIZE = bigint.BigIntPolyfill(0x0000000000080000);
    exports.WASI_RIGHT_PATH_FILESTAT_SET_TIMES = bigint.BigIntPolyfill(0x0000000000100000);
    exports.WASI_RIGHT_FD_FILESTAT_GET = bigint.BigIntPolyfill(0x0000000000200000);
    exports.WASI_RIGHT_FD_FILESTAT_SET_SIZE = bigint.BigIntPolyfill(0x0000000000400000);
    exports.WASI_RIGHT_FD_FILESTAT_SET_TIMES = bigint.BigIntPolyfill(0x0000000000800000);
    exports.WASI_RIGHT_PATH_SYMLINK = bigint.BigIntPolyfill(0x0000000001000000);
    exports.WASI_RIGHT_PATH_REMOVE_DIRECTORY = bigint.BigIntPolyfill(0x0000000002000000);
    exports.WASI_RIGHT_PATH_UNLINK_FILE = bigint.BigIntPolyfill(0x0000000004000000);
    exports.WASI_RIGHT_POLL_FD_READWRITE = bigint.BigIntPolyfill(0x0000000008000000);
    exports.WASI_RIGHT_SOCK_SHUTDOWN = bigint.BigIntPolyfill(0x0000000010000000);
    exports.RIGHTS_ALL = exports.WASI_RIGHT_FD_DATASYNC |
        exports.WASI_RIGHT_FD_READ |
        exports.WASI_RIGHT_FD_SEEK |
        exports.WASI_RIGHT_FD_FDSTAT_SET_FLAGS |
        exports.WASI_RIGHT_FD_SYNC |
        exports.WASI_RIGHT_FD_TELL |
        exports.WASI_RIGHT_FD_WRITE |
        exports.WASI_RIGHT_FD_ADVISE |
        exports.WASI_RIGHT_FD_ALLOCATE |
        exports.WASI_RIGHT_PATH_CREATE_DIRECTORY |
        exports.WASI_RIGHT_PATH_CREATE_FILE |
        exports.WASI_RIGHT_PATH_LINK_SOURCE |
        exports.WASI_RIGHT_PATH_LINK_TARGET |
        exports.WASI_RIGHT_PATH_OPEN |
        exports.WASI_RIGHT_FD_READDIR |
        exports.WASI_RIGHT_PATH_READLINK |
        exports.WASI_RIGHT_PATH_RENAME_SOURCE |
        exports.WASI_RIGHT_PATH_RENAME_TARGET |
        exports.WASI_RIGHT_PATH_FILESTAT_GET |
        exports.WASI_RIGHT_PATH_FILESTAT_SET_SIZE |
        exports.WASI_RIGHT_PATH_FILESTAT_SET_TIMES |
        exports.WASI_RIGHT_FD_FILESTAT_GET |
        exports.WASI_RIGHT_FD_FILESTAT_SET_TIMES |
        exports.WASI_RIGHT_FD_FILESTAT_SET_SIZE |
        exports.WASI_RIGHT_PATH_SYMLINK |
        exports.WASI_RIGHT_PATH_UNLINK_FILE |
        exports.WASI_RIGHT_PATH_REMOVE_DIRECTORY |
        exports.WASI_RIGHT_POLL_FD_READWRITE |
        exports.WASI_RIGHT_SOCK_SHUTDOWN;
    exports.RIGHTS_BLOCK_DEVICE_BASE = exports.RIGHTS_ALL;
    exports.RIGHTS_BLOCK_DEVICE_INHERITING = exports.RIGHTS_ALL;
    exports.RIGHTS_CHARACTER_DEVICE_BASE = exports.RIGHTS_ALL;
    exports.RIGHTS_CHARACTER_DEVICE_INHERITING = exports.RIGHTS_ALL;
    exports.RIGHTS_REGULAR_FILE_BASE = exports.WASI_RIGHT_FD_DATASYNC |
        exports.WASI_RIGHT_FD_READ |
        exports.WASI_RIGHT_FD_SEEK |
        exports.WASI_RIGHT_FD_FDSTAT_SET_FLAGS |
        exports.WASI_RIGHT_FD_SYNC |
        exports.WASI_RIGHT_FD_TELL |
        exports.WASI_RIGHT_FD_WRITE |
        exports.WASI_RIGHT_FD_ADVISE |
        exports.WASI_RIGHT_FD_ALLOCATE |
        exports.WASI_RIGHT_FD_FILESTAT_GET |
        exports.WASI_RIGHT_FD_FILESTAT_SET_SIZE |
        exports.WASI_RIGHT_FD_FILESTAT_SET_TIMES |
        exports.WASI_RIGHT_POLL_FD_READWRITE;
    exports.RIGHTS_REGULAR_FILE_INHERITING = bigint.BigIntPolyfill(0);
    exports.RIGHTS_DIRECTORY_BASE = exports.WASI_RIGHT_FD_FDSTAT_SET_FLAGS |
        exports.WASI_RIGHT_FD_SYNC |
        exports.WASI_RIGHT_FD_ADVISE |
        exports.WASI_RIGHT_PATH_CREATE_DIRECTORY |
        exports.WASI_RIGHT_PATH_CREATE_FILE |
        exports.WASI_RIGHT_PATH_LINK_SOURCE |
        exports.WASI_RIGHT_PATH_LINK_TARGET |
        exports.WASI_RIGHT_PATH_OPEN |
        exports.WASI_RIGHT_FD_READDIR |
        exports.WASI_RIGHT_PATH_READLINK |
        exports.WASI_RIGHT_PATH_RENAME_SOURCE |
        exports.WASI_RIGHT_PATH_RENAME_TARGET |
        exports.WASI_RIGHT_PATH_FILESTAT_GET |
        exports.WASI_RIGHT_PATH_FILESTAT_SET_SIZE |
        exports.WASI_RIGHT_PATH_FILESTAT_SET_TIMES |
        exports.WASI_RIGHT_FD_FILESTAT_GET |
        exports.WASI_RIGHT_FD_FILESTAT_SET_TIMES |
        exports.WASI_RIGHT_PATH_SYMLINK |
        exports.WASI_RIGHT_PATH_UNLINK_FILE |
        exports.WASI_RIGHT_PATH_REMOVE_DIRECTORY |
        exports.WASI_RIGHT_POLL_FD_READWRITE;
    exports.RIGHTS_DIRECTORY_INHERITING = exports.RIGHTS_DIRECTORY_BASE | exports.RIGHTS_REGULAR_FILE_BASE;
    exports.RIGHTS_SOCKET_BASE = exports.WASI_RIGHT_FD_READ |
        exports.WASI_RIGHT_FD_FDSTAT_SET_FLAGS |
        exports.WASI_RIGHT_FD_WRITE |
        exports.WASI_RIGHT_FD_FILESTAT_GET |
        exports.WASI_RIGHT_POLL_FD_READWRITE |
        exports.WASI_RIGHT_SOCK_SHUTDOWN;
    exports.RIGHTS_SOCKET_INHERITING = exports.RIGHTS_ALL;
    exports.RIGHTS_TTY_BASE = exports.WASI_RIGHT_FD_READ |
        exports.WASI_RIGHT_FD_FDSTAT_SET_FLAGS |
        exports.WASI_RIGHT_FD_WRITE |
        exports.WASI_RIGHT_FD_FILESTAT_GET |
        exports.WASI_RIGHT_POLL_FD_READWRITE;
    exports.RIGHTS_TTY_INHERITING = bigint.BigIntPolyfill(0);
    exports.WASI_CLOCK_REALTIME = 0;
    exports.WASI_CLOCK_MONOTONIC = 1;
    exports.WASI_CLOCK_PROCESS_CPUTIME_ID = 2;
    exports.WASI_CLOCK_THREAD_CPUTIME_ID = 3;
    exports.WASI_EVENTTYPE_CLOCK = 0;
    exports.WASI_EVENTTYPE_FD_READ = 1;
    exports.WASI_EVENTTYPE_FD_WRITE = 2;
    exports.WASI_FILESTAT_SET_ATIM = 1 << 0;
    exports.WASI_FILESTAT_SET_ATIM_NOW = 1 << 1;
    exports.WASI_FILESTAT_SET_MTIM = 1 << 2;
    exports.WASI_FILESTAT_SET_MTIM_NOW = 1 << 3;
    exports.WASI_O_CREAT = 1 << 0;
    exports.WASI_O_DIRECTORY = 1 << 1;
    exports.WASI_O_EXCL = 1 << 2;
    exports.WASI_O_TRUNC = 1 << 3;
    exports.WASI_PREOPENTYPE_DIR = 0;
    exports.WASI_DIRCOOKIE_START = 0;
    exports.WASI_STDIN_FILENO = 0;
    exports.WASI_STDOUT_FILENO = 1;
    exports.WASI_STDERR_FILENO = 2;
    exports.WASI_WHENCE_SET = 0;
    exports.WASI_WHENCE_CUR = 1;
    exports.WASI_WHENCE_END = 2;
    // http://man7.org/linux/man-pages/man3/errno.3.html
    exports.ERROR_MAP = {
        E2BIG: exports.WASI_E2BIG,
        EACCES: exports.WASI_EACCES,
        EADDRINUSE: exports.WASI_EADDRINUSE,
        EADDRNOTAVAIL: exports.WASI_EADDRNOTAVAIL,
        EAFNOSUPPORT: exports.WASI_EAFNOSUPPORT,
        EALREADY: exports.WASI_EALREADY,
        EAGAIN: exports.WASI_EAGAIN,
        // EBADE: WASI_EBADE,
        EBADF: exports.WASI_EBADF,
        // EBADFD: WASI_EBADFD,
        EBADMSG: exports.WASI_EBADMSG,
        // EBADR: WASI_EBADR,
        // EBADRQC: WASI_EBADRQC,
        // EBADSLT: WASI_EBADSLT,
        EBUSY: exports.WASI_EBUSY,
        ECANCELED: exports.WASI_ECANCELED,
        ECHILD: exports.WASI_ECHILD,
        // ECHRNG: WASI_ECHRNG,
        // ECOMM: WASI_ECOMM,
        ECONNABORTED: exports.WASI_ECONNABORTED,
        ECONNREFUSED: exports.WASI_ECONNREFUSED,
        ECONNRESET: exports.WASI_ECONNRESET,
        EDEADLOCK: exports.WASI_EDEADLK,
        EDESTADDRREQ: exports.WASI_EDESTADDRREQ,
        EDOM: exports.WASI_EDOM,
        EDQUOT: exports.WASI_EDQUOT,
        EEXIST: exports.WASI_EEXIST,
        EFAULT: exports.WASI_EFAULT,
        EFBIG: exports.WASI_EFBIG,
        EHOSTDOWN: exports.WASI_EHOSTUNREACH,
        EHOSTUNREACH: exports.WASI_EHOSTUNREACH,
        // EHWPOISON: WASI_EHWPOISON,
        EIDRM: exports.WASI_EIDRM,
        EILSEQ: exports.WASI_EILSEQ,
        EINPROGRESS: exports.WASI_EINPROGRESS,
        EINTR: exports.WASI_EINTR,
        EINVAL: exports.WASI_EINVAL,
        EIO: exports.WASI_EIO,
        EISCONN: exports.WASI_EISCONN,
        EISDIR: exports.WASI_EISDIR,
        ELOOP: exports.WASI_ELOOP,
        EMFILE: exports.WASI_EMFILE,
        EMLINK: exports.WASI_EMLINK,
        EMSGSIZE: exports.WASI_EMSGSIZE,
        EMULTIHOP: exports.WASI_EMULTIHOP,
        ENAMETOOLONG: exports.WASI_ENAMETOOLONG,
        ENETDOWN: exports.WASI_ENETDOWN,
        ENETRESET: exports.WASI_ENETRESET,
        ENETUNREACH: exports.WASI_ENETUNREACH,
        ENFILE: exports.WASI_ENFILE,
        ENOBUFS: exports.WASI_ENOBUFS,
        ENODEV: exports.WASI_ENODEV,
        ENOENT: exports.WASI_ENOENT,
        ENOEXEC: exports.WASI_ENOEXEC,
        ENOLCK: exports.WASI_ENOLCK,
        ENOLINK: exports.WASI_ENOLINK,
        ENOMEM: exports.WASI_ENOMEM,
        ENOMSG: exports.WASI_ENOMSG,
        ENOPROTOOPT: exports.WASI_ENOPROTOOPT,
        ENOSPC: exports.WASI_ENOSPC,
        ENOSYS: exports.WASI_ENOSYS,
        ENOTCONN: exports.WASI_ENOTCONN,
        ENOTDIR: exports.WASI_ENOTDIR,
        ENOTEMPTY: exports.WASI_ENOTEMPTY,
        ENOTRECOVERABLE: exports.WASI_ENOTRECOVERABLE,
        ENOTSOCK: exports.WASI_ENOTSOCK,
        ENOTTY: exports.WASI_ENOTTY,
        ENXIO: exports.WASI_ENXIO,
        EOVERFLOW: exports.WASI_EOVERFLOW,
        EOWNERDEAD: exports.WASI_EOWNERDEAD,
        EPERM: exports.WASI_EPERM,
        EPIPE: exports.WASI_EPIPE,
        EPROTO: exports.WASI_EPROTO,
        EPROTONOSUPPORT: exports.WASI_EPROTONOSUPPORT,
        EPROTOTYPE: exports.WASI_EPROTOTYPE,
        ERANGE: exports.WASI_ERANGE,
        EROFS: exports.WASI_EROFS,
        ESPIPE: exports.WASI_ESPIPE,
        ESRCH: exports.WASI_ESRCH,
        ESTALE: exports.WASI_ESTALE,
        ETIMEDOUT: exports.WASI_ETIMEDOUT,
        ETXTBSY: exports.WASI_ETXTBSY,
        EXDEV: exports.WASI_EXDEV
    };
    exports.SIGNAL_MAP = {
        [exports.WASI_SIGHUP]: "SIGHUP",
        [exports.WASI_SIGINT]: "SIGINT",
        [exports.WASI_SIGQUIT]: "SIGQUIT",
        [exports.WASI_SIGILL]: "SIGILL",
        [exports.WASI_SIGTRAP]: "SIGTRAP",
        [exports.WASI_SIGABRT]: "SIGABRT",
        [exports.WASI_SIGBUS]: "SIGBUS",
        [exports.WASI_SIGFPE]: "SIGFPE",
        [exports.WASI_SIGKILL]: "SIGKILL",
        [exports.WASI_SIGUSR1]: "SIGUSR1",
        [exports.WASI_SIGSEGV]: "SIGSEGV",
        [exports.WASI_SIGUSR2]: "SIGUSR2",
        [exports.WASI_SIGPIPE]: "SIGPIPE",
        [exports.WASI_SIGALRM]: "SIGALRM",
        [exports.WASI_SIGTERM]: "SIGTERM",
        [exports.WASI_SIGCHLD]: "SIGCHLD",
        [exports.WASI_SIGCONT]: "SIGCONT",
        [exports.WASI_SIGSTOP]: "SIGSTOP",
        [exports.WASI_SIGTSTP]: "SIGTSTP",
        [exports.WASI_SIGTTIN]: "SIGTTIN",
        [exports.WASI_SIGTTOU]: "SIGTTOU",
        [exports.WASI_SIGURG]: "SIGURG",
        [exports.WASI_SIGXCPU]: "SIGXCPU",
        [exports.WASI_SIGXFSZ]: "SIGXFSZ",
        [exports.WASI_SIGVTALRM]: "SIGVTALRM"
    };
    });

    var lib = createCommonjsModule(function (module, exports) {
    /* eslint-disable no-unused-vars */
    Object.defineProperty(exports, "__esModule", { value: true });



    // Import our default bindings depending on the environment
    let defaultBindings;
    /*ROLLUP_REPLACE_NODE
    import nodeBindings from "./bindings/node";
    defaultBindings = nodeBindings;
    ROLLUP_REPLACE_NODE*/
    /*ROLLUP_REPLACE_BROWSER
    import browserBindings from "./bindings/browser";
    defaultBindings = browserBindings;
    ROLLUP_REPLACE_BROWSER*/
    /*

    This project is based from the Node implementation made by Gus Caplan
    https://github.com/devsnek/node-wasi
    However, JavaScript WASI is focused on:
     * Bringing WASI to the Browsers
     * Make easy to plug different filesystems
     * Provide a type-safe api using Typescript
     * Providing multiple output targets to support both browsers and node
     * The API is adapted to the Node-WASI API: https://github.com/nodejs/wasi/blob/wasi/lib/wasi.js

    Copyright 2019 Gus Caplan

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to
    deal in the Software without restriction, including without limitation the
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
    sell copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.

     */

    const STDIN_DEFAULT_RIGHTS = constants.WASI_RIGHT_FD_DATASYNC |
        constants.WASI_RIGHT_FD_READ |
        constants.WASI_RIGHT_FD_SYNC |
        constants.WASI_RIGHT_FD_ADVISE |
        constants.WASI_RIGHT_FD_FILESTAT_GET |
        constants.WASI_RIGHT_POLL_FD_READWRITE;
    const STDOUT_DEFAULT_RIGHTS = constants.WASI_RIGHT_FD_DATASYNC |
        constants.WASI_RIGHT_FD_WRITE |
        constants.WASI_RIGHT_FD_SYNC |
        constants.WASI_RIGHT_FD_ADVISE |
        constants.WASI_RIGHT_FD_FILESTAT_GET |
        constants.WASI_RIGHT_POLL_FD_READWRITE;
    const STDERR_DEFAULT_RIGHTS = STDOUT_DEFAULT_RIGHTS;
    const msToNs = (ms) => {
        const msInt = Math.trunc(ms);
        const decimal = bigint.BigIntPolyfill(Math.round((ms - msInt) * 1000000));
        const ns = bigint.BigIntPolyfill(msInt) * bigint.BigIntPolyfill(1000000);
        return ns + decimal;
    };
    const nsToMs = (ns) => {
        if (typeof ns === 'number') {
            ns = Math.trunc(ns);
        }
        const nsInt = bigint.BigIntPolyfill(ns);
        return Number(nsInt / bigint.BigIntPolyfill(1000000));
    };
    const wrap = (f) => (...args) => {
        try {
            return f(...args);
        }
        catch (e) {
            // If it's an error from the fs
            if (e && e.code && typeof e.code === "string") {
                return constants.ERROR_MAP[e.code] || constants.WASI_EINVAL;
            }
            // If it's a WASI error, we return it directly
            if (e instanceof WASIError) {
                return e.errno;
            }
            // Otherwise we let the error bubble up
            throw e;
        }
    };
    const stat = (wasi, fd) => {
        const entry = wasi.FD_MAP.get(fd);
        if (!entry) {
            throw new WASIError(constants.WASI_EBADF);
        }
        if (entry.filetype === undefined) {
            const stats = wasi.bindings.fs.fstatSync(entry.real);
            const { filetype, rightsBase, rightsInheriting } = translateFileAttributes(wasi, fd, stats);
            entry.filetype = filetype;
            if (!entry.rights) {
                entry.rights = {
                    base: rightsBase,
                    inheriting: rightsInheriting
                };
            }
        }
        return entry;
    };
    const translateFileAttributes = (wasi, fd, stats) => {
        switch (true) {
            case stats.isBlockDevice():
                return {
                    filetype: constants.WASI_FILETYPE_BLOCK_DEVICE,
                    rightsBase: constants.RIGHTS_BLOCK_DEVICE_BASE,
                    rightsInheriting: constants.RIGHTS_BLOCK_DEVICE_INHERITING
                };
            case stats.isCharacterDevice(): {
                const filetype = constants.WASI_FILETYPE_CHARACTER_DEVICE;
                if (fd !== undefined && wasi.bindings.isTTY(fd)) {
                    return {
                        filetype,
                        rightsBase: constants.RIGHTS_TTY_BASE,
                        rightsInheriting: constants.RIGHTS_TTY_INHERITING
                    };
                }
                return {
                    filetype,
                    rightsBase: constants.RIGHTS_CHARACTER_DEVICE_BASE,
                    rightsInheriting: constants.RIGHTS_CHARACTER_DEVICE_INHERITING
                };
            }
            case stats.isDirectory():
                return {
                    filetype: constants.WASI_FILETYPE_DIRECTORY,
                    rightsBase: constants.RIGHTS_DIRECTORY_BASE,
                    rightsInheriting: constants.RIGHTS_DIRECTORY_INHERITING
                };
            case stats.isFIFO():
                return {
                    filetype: constants.WASI_FILETYPE_SOCKET_STREAM,
                    rightsBase: constants.RIGHTS_SOCKET_BASE,
                    rightsInheriting: constants.RIGHTS_SOCKET_INHERITING
                };
            case stats.isFile():
                return {
                    filetype: constants.WASI_FILETYPE_REGULAR_FILE,
                    rightsBase: constants.RIGHTS_REGULAR_FILE_BASE,
                    rightsInheriting: constants.RIGHTS_REGULAR_FILE_INHERITING
                };
            case stats.isSocket():
                return {
                    filetype: constants.WASI_FILETYPE_SOCKET_STREAM,
                    rightsBase: constants.RIGHTS_SOCKET_BASE,
                    rightsInheriting: constants.RIGHTS_SOCKET_INHERITING
                };
            case stats.isSymbolicLink():
                return {
                    filetype: constants.WASI_FILETYPE_SYMBOLIC_LINK,
                    rightsBase: bigint.BigIntPolyfill(0),
                    rightsInheriting: bigint.BigIntPolyfill(0)
                };
            default:
                return {
                    filetype: constants.WASI_FILETYPE_UNKNOWN,
                    rightsBase: bigint.BigIntPolyfill(0),
                    rightsInheriting: bigint.BigIntPolyfill(0)
                };
        }
    };
    class WASIError extends Error {
        constructor(errno) {
            super();
            this.errno = errno;
            Object.setPrototypeOf(this, WASIError.prototype);
        }
    }
    exports.WASIError = WASIError;
    class WASIExitError extends Error {
        constructor(code) {
            super(`WASI Exit error: ${code}`);
            this.code = code;
            Object.setPrototypeOf(this, WASIExitError.prototype);
        }
    }
    exports.WASIExitError = WASIExitError;
    class WASIKillError extends Error {
        constructor(signal) {
            super(`WASI Kill signal: ${signal}`);
            this.signal = signal;
            Object.setPrototypeOf(this, WASIKillError.prototype);
        }
    }
    exports.WASIKillError = WASIKillError;
    class WASIDefault {
        constructor(wasiConfig) {
            // Destructure our wasiConfig
            let preopens = {};
            if (wasiConfig && wasiConfig.preopens) {
                preopens = wasiConfig.preopens;
            }
            else if (wasiConfig && wasiConfig.preopenDirectories) {
                preopens = wasiConfig
                    .preopenDirectories;
            }
            let env = {};
            if (wasiConfig && wasiConfig.env) {
                env = wasiConfig.env;
            }
            let args = [];
            if (wasiConfig && wasiConfig.args) {
                args = wasiConfig.args;
            }
            let bindings = defaultBindings;
            if (wasiConfig && wasiConfig.bindings) {
                bindings = wasiConfig.bindings;
            }
            // @ts-ignore
            this.memory = undefined;
            // @ts-ignore
            this.view = undefined;
            this.bindings = bindings;
            this.FD_MAP = new Map([
                [
                    constants.WASI_STDIN_FILENO,
                    {
                        real: 0,
                        filetype: constants.WASI_FILETYPE_CHARACTER_DEVICE,
                        // offset: BigInt(0),
                        rights: {
                            base: STDIN_DEFAULT_RIGHTS,
                            inheriting: bigint.BigIntPolyfill(0)
                        },
                        path: undefined
                    }
                ],
                [
                    constants.WASI_STDOUT_FILENO,
                    {
                        real: 1,
                        filetype: constants.WASI_FILETYPE_CHARACTER_DEVICE,
                        // offset: BigInt(0),
                        rights: {
                            base: STDOUT_DEFAULT_RIGHTS,
                            inheriting: bigint.BigIntPolyfill(0)
                        },
                        path: undefined
                    }
                ],
                [
                    constants.WASI_STDERR_FILENO,
                    {
                        real: 2,
                        filetype: constants.WASI_FILETYPE_CHARACTER_DEVICE,
                        // offset: BigInt(0),
                        rights: {
                            base: STDERR_DEFAULT_RIGHTS,
                            inheriting: bigint.BigIntPolyfill(0)
                        },
                        path: undefined
                    }
                ]
            ]);
            let fs = this.bindings.fs;
            let path = this.bindings.path;
            for (const [k, v] of Object.entries(preopens)) {
                const real = fs.openSync(v, fs.constants.O_RDONLY);
                const newfd = [...this.FD_MAP.keys()].reverse()[0] + 1;
                this.FD_MAP.set(newfd, {
                    real,
                    filetype: constants.WASI_FILETYPE_DIRECTORY,
                    // offset: BigInt(0),
                    rights: {
                        base: constants.RIGHTS_DIRECTORY_BASE,
                        inheriting: constants.RIGHTS_DIRECTORY_INHERITING
                    },
                    fakePath: k,
                    path: v
                });
            }
            const getiovs = (iovs, iovsLen) => {
                // iovs* -> [iov, iov, ...]
                // __wasi_ciovec_t {
                //   void* buf,
                //   size_t buf_len,
                // }
                this.refreshMemory();
                const buffers = Array.from({ length: iovsLen }, (_, i) => {
                    const ptr = iovs + i * 8;
                    const buf = this.view.getUint32(ptr, true);
                    const bufLen = this.view.getUint32(ptr + 4, true);
                    return new Uint8Array(this.memory.buffer, buf, bufLen);
                });
                return buffers;
            };
            const CHECK_FD = (fd, rights) => {
                const stats = stat(this, fd);
                // console.log(`CHECK_FD: stats.real: ${stats.real}, stats.path:`, stats.path);
                if (rights !== bigint.BigIntPolyfill(0) && (stats.rights.base & rights) === bigint.BigIntPolyfill(0)) {
                    throw new WASIError(constants.WASI_EPERM);
                }
                return stats;
            };
            const CPUTIME_START = bindings.hrtime();
            const now = (clockId) => {
                switch (clockId) {
                    case constants.WASI_CLOCK_MONOTONIC:
                        return bindings.hrtime();
                    case constants.WASI_CLOCK_REALTIME:
                        return msToNs(Date.now());
                    case constants.WASI_CLOCK_PROCESS_CPUTIME_ID:
                    case constants.WASI_CLOCK_THREAD_CPUTIME_ID:
                        // return bindings.hrtime(CPUTIME_START)
                        return bindings.hrtime() - CPUTIME_START;
                    default:
                        return null;
                }
            };
            this.wasiImport = {
                args_get: (argv, argvBuf) => {
                    this.refreshMemory();
                    let coffset = argv;
                    let offset = argvBuf;
                    args.forEach(a => {
                        this.view.setUint32(coffset, offset, true);
                        coffset += 4;
                        offset += buffer.default.from(this.memory.buffer).write(`${a}\0`, offset);
                    });
                    return constants.WASI_ESUCCESS;
                },
                args_sizes_get: (argc, argvBufSize) => {
                    this.refreshMemory();
                    this.view.setUint32(argc, args.length, true);
                    const size = args.reduce((acc, a) => acc + buffer.default.byteLength(a) + 1, 0);
                    this.view.setUint32(argvBufSize, size, true);
                    return constants.WASI_ESUCCESS;
                },
                environ_get: (environ, environBuf) => {
                    this.refreshMemory();
                    let coffset = environ;
                    let offset = environBuf;
                    Object.entries(env).forEach(([key, value]) => {
                        this.view.setUint32(coffset, offset, true);
                        coffset += 4;
                        offset += buffer.default.from(this.memory.buffer).write(`${key}=${value}\0`, offset);
                    });
                    return constants.WASI_ESUCCESS;
                },
                environ_sizes_get: (environCount, environBufSize) => {
                    this.refreshMemory();
                    const envProcessed = Object.entries(env).map(([key, value]) => `${key}=${value}\0`);
                    const size = envProcessed.reduce((acc, e) => acc + buffer.default.byteLength(e), 0);
                    this.view.setUint32(environCount, envProcessed.length, true);
                    this.view.setUint32(environBufSize, size, true);
                    return constants.WASI_ESUCCESS;
                },
                clock_res_get: (clockId, resolution) => {
                    let res;
                    switch (clockId) {
                        case constants.WASI_CLOCK_MONOTONIC:
                        case constants.WASI_CLOCK_PROCESS_CPUTIME_ID:
                        case constants.WASI_CLOCK_THREAD_CPUTIME_ID: {
                            res = bigint.BigIntPolyfill(1);
                            break;
                        }
                        case constants.WASI_CLOCK_REALTIME: {
                            res = bigint.BigIntPolyfill(1000);
                            break;
                        }
                    }
                    this.view.setBigUint64(resolution, res);
                    return constants.WASI_ESUCCESS;
                },
                clock_time_get: (clockId, precision, time) => {
                    this.refreshMemory();
                    const n = now(clockId);
                    if (n === null) {
                        return constants.WASI_EINVAL;
                    }
                    this.view.setBigUint64(time, bigint.BigIntPolyfill(n), true);
                    return constants.WASI_ESUCCESS;
                },
                fd_advise: wrap((fd, offset, len, advice) => {
                    CHECK_FD(fd, constants.WASI_RIGHT_FD_ADVISE);
                    return constants.WASI_ENOSYS;
                }),
                fd_allocate: wrap((fd, offset, len) => {
                    CHECK_FD(fd, constants.WASI_RIGHT_FD_ALLOCATE);
                    return constants.WASI_ENOSYS;
                }),
                fd_close: wrap((fd) => {
                    const stats = CHECK_FD(fd, bigint.BigIntPolyfill(0));
                    fs.closeSync(stats.real);
                    this.FD_MAP.delete(fd);
                    return constants.WASI_ESUCCESS;
                }),
                fd_datasync: wrap((fd) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_FD_DATASYNC);
                    fs.fdatasyncSync(stats.real);
                    return constants.WASI_ESUCCESS;
                }),
                fd_fdstat_get: wrap((fd, bufPtr) => {
                    const stats = CHECK_FD(fd, bigint.BigIntPolyfill(0));
                    this.refreshMemory();
                    this.view.setUint8(bufPtr, stats.filetype); // FILETYPE u8
                    this.view.setUint16(bufPtr + 2, 0, true); // FDFLAG u16
                    this.view.setUint16(bufPtr + 4, 0, true); // FDFLAG u16
                    this.view.setBigUint64(bufPtr + 8, bigint.BigIntPolyfill(stats.rights.base), true); // u64
                    this.view.setBigUint64(bufPtr + 8 + 8, bigint.BigIntPolyfill(stats.rights.inheriting), true); // u64
                    return constants.WASI_ESUCCESS;
                }),
                fd_fdstat_set_flags: wrap((fd, flags) => {
                    CHECK_FD(fd, constants.WASI_RIGHT_FD_FDSTAT_SET_FLAGS);
                    return constants.WASI_ENOSYS;
                }),
                fd_fdstat_set_rights: wrap((fd, fsRightsBase, fsRightsInheriting) => {
                    const stats = CHECK_FD(fd, bigint.BigIntPolyfill(0));
                    const nrb = stats.rights.base | fsRightsBase;
                    if (nrb > stats.rights.base) {
                        return constants.WASI_EPERM;
                    }
                    const nri = stats.rights.inheriting | fsRightsInheriting;
                    if (nri > stats.rights.inheriting) {
                        return constants.WASI_EPERM;
                    }
                    stats.rights.base = fsRightsBase;
                    stats.rights.inheriting = fsRightsInheriting;
                    return constants.WASI_ESUCCESS;
                }),
                fd_filestat_get: wrap((fd, bufPtr) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_FD_FILESTAT_GET);
                    const rstats = fs.fstatSync(stats.real);
                    this.refreshMemory();
                    this.view.setBigUint64(bufPtr, bigint.BigIntPolyfill(rstats.dev), true);
                    bufPtr += 8;
                    this.view.setBigUint64(bufPtr, bigint.BigIntPolyfill(rstats.ino), true);
                    bufPtr += 8;
                    this.view.setUint8(bufPtr, stats.filetype);
                    bufPtr += 8;
                    this.view.setBigUint64(bufPtr, bigint.BigIntPolyfill(rstats.nlink), true);
                    bufPtr += 8;
                    this.view.setBigUint64(bufPtr, bigint.BigIntPolyfill(rstats.size), true);
                    bufPtr += 8;
                    this.view.setBigUint64(bufPtr, msToNs(rstats.atimeMs), true);
                    bufPtr += 8;
                    this.view.setBigUint64(bufPtr, msToNs(rstats.mtimeMs), true);
                    bufPtr += 8;
                    this.view.setBigUint64(bufPtr, msToNs(rstats.ctimeMs), true);
                    return constants.WASI_ESUCCESS;
                }),
                fd_filestat_set_size: wrap((fd, stSize) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_FD_FILESTAT_SET_SIZE);
                    fs.ftruncateSync(stats.real, Number(stSize));
                    return constants.WASI_ESUCCESS;
                }),
                fd_filestat_set_times: wrap((fd, stAtim, stMtim, fstflags) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_FD_FILESTAT_SET_TIMES);
                    const rstats = fs.fstatSync(stats.real);
                    let atim = rstats.atime;
                    let mtim = rstats.mtime;
                    const n = nsToMs(now(constants.WASI_CLOCK_REALTIME));
                    const atimflags = constants.WASI_FILESTAT_SET_ATIM | constants.WASI_FILESTAT_SET_ATIM_NOW;
                    if ((fstflags & atimflags) === atimflags) {
                        return constants.WASI_EINVAL;
                    }
                    const mtimflags = constants.WASI_FILESTAT_SET_MTIM | constants.WASI_FILESTAT_SET_MTIM_NOW;
                    if ((fstflags & mtimflags) === mtimflags) {
                        return constants.WASI_EINVAL;
                    }
                    if ((fstflags & constants.WASI_FILESTAT_SET_ATIM) === constants.WASI_FILESTAT_SET_ATIM) {
                        atim = nsToMs(stAtim);
                    }
                    else if ((fstflags & constants.WASI_FILESTAT_SET_ATIM_NOW) === constants.WASI_FILESTAT_SET_ATIM_NOW) {
                        atim = n;
                    }
                    if ((fstflags & constants.WASI_FILESTAT_SET_MTIM) === constants.WASI_FILESTAT_SET_MTIM) {
                        mtim = nsToMs(stMtim);
                    }
                    else if ((fstflags & constants.WASI_FILESTAT_SET_MTIM_NOW) === constants.WASI_FILESTAT_SET_MTIM_NOW) {
                        mtim = n;
                    }
                    fs.futimesSync(stats.real, new Date(atim), new Date(mtim));
                    return constants.WASI_ESUCCESS;
                }),
                fd_prestat_get: wrap((fd, bufPtr) => {
                    const stats = CHECK_FD(fd, bigint.BigIntPolyfill(0));
                    if (!stats.path) {
                        return constants.WASI_EINVAL;
                    }
                    this.refreshMemory();
                    this.view.setUint8(bufPtr, constants.WASI_PREOPENTYPE_DIR);
                    this.view.setUint32(bufPtr + 4, buffer.default.byteLength(stats.fakePath), true);
                    return constants.WASI_ESUCCESS;
                }),
                fd_prestat_dir_name: wrap((fd, pathPtr, pathLen) => {
                    const stats = CHECK_FD(fd, bigint.BigIntPolyfill(0));
                    if (!stats.path) {
                        return constants.WASI_EINVAL;
                    }
                    this.refreshMemory();
                    buffer.default.from(this.memory.buffer).write(stats.fakePath, pathPtr, pathLen, "utf8");
                    return constants.WASI_ESUCCESS;
                }),
                fd_pwrite: wrap((fd, iovs, iovsLen, offset, nwritten) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_FD_WRITE | constants.WASI_RIGHT_FD_SEEK);
                    let written = 0;
                    getiovs(iovs, iovsLen).forEach(iov => {
                        let w = 0;
                        while (w < iov.byteLength) {
                            w += fs.writeSync(stats.real, iov, w, iov.byteLength - w, Number(offset) + written + w);
                        }
                        written += w;
                    });
                    this.view.setUint32(nwritten, written, true);
                    return constants.WASI_ESUCCESS;
                }),
                fd_write: wrap((fd, iovs, iovsLen, nwritten) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_FD_WRITE);
                    let written = 0;
                    getiovs(iovs, iovsLen).forEach(iov => {
                        let w = 0;
                        while (w < iov.byteLength) {
                            const i = fs.writeSync(stats.real, iov, w, iov.byteLength - w, stats.offset ? Number(stats.offset) : null);
                            if (stats.offset)
                                stats.offset += bigint.BigIntPolyfill(i);
                            w += i;
                        }
                        written += w;
                    });
                    this.view.setUint32(nwritten, written, true);
                    return constants.WASI_ESUCCESS;
                }),
                fd_pread: wrap((fd, iovs, iovsLen, offset, nread) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_FD_READ | constants.WASI_RIGHT_FD_SEEK);
                    let read = 0;
                    outer: for (const iov of getiovs(iovs, iovsLen)) {
                        let r = 0;
                        while (r < iov.byteLength) {
                            const length = iov.byteLength - r;
                            const rr = fs.readSync(stats.real, iov, r, iov.byteLength - r, Number(offset) + read + r);
                            r += rr;
                            read += rr;
                            // If we don't read anything, or we receive less than requested
                            if (rr === 0 || rr < length) {
                                break outer;
                            }
                        }
                        read += r;
                    }
                    ;
                    this.view.setUint32(nread, read, true);
                    return constants.WASI_ESUCCESS;
                }),
                fd_read: wrap((fd, iovs, iovsLen, nread) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_FD_READ);
                    const IS_STDIN = stats.real === 0;
                    let read = 0;
                    outer: for (const iov of getiovs(iovs, iovsLen)) {
                        let r = 0;
                        while (r < iov.byteLength) {
                            let length = iov.byteLength - r;
                            let position = IS_STDIN || stats.offset === undefined
                                ? null
                                : Number(stats.offset);
                            let rr = fs.readSync(stats.real, // fd
                            iov, // buffer
                            r, // offset
                            length, // length
                            position // position
                            );
                            if (!IS_STDIN) {
                                stats.offset =
                                    (stats.offset ? stats.offset : bigint.BigIntPolyfill(0)) + bigint.BigIntPolyfill(rr);
                            }
                            r += rr;
                            read += rr;
                            // If we don't read anything, or we receive less than requested
                            if (rr === 0 || rr < length) {
                                break outer;
                            }
                        }
                    }
                    // We should not modify the offset of stdin
                    this.view.setUint32(nread, read, true);
                    return constants.WASI_ESUCCESS;
                }),
                fd_readdir: wrap((fd, bufPtr, bufLen, cookie, bufusedPtr) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_FD_READDIR);
                    this.refreshMemory();
                    const entries = fs.readdirSync(stats.path, { withFileTypes: true });
                    const startPtr = bufPtr;
                    for (let i = Number(cookie); i < entries.length; i += 1) {
                        const entry = entries[i];
                        let nameLength = buffer.default.byteLength(entry.name);
                        if (bufPtr - startPtr > bufLen) {
                            break;
                        }
                        this.view.setBigUint64(bufPtr, bigint.BigIntPolyfill(i + 1), true);
                        bufPtr += 8;
                        if (bufPtr - startPtr > bufLen) {
                            break;
                        }
                        const rstats = fs.statSync(path.resolve(stats.path, entry.name));
                        this.view.setBigUint64(bufPtr, bigint.BigIntPolyfill(rstats.ino), true);
                        bufPtr += 8;
                        if (bufPtr - startPtr > bufLen) {
                            break;
                        }
                        this.view.setUint32(bufPtr, nameLength, true);
                        bufPtr += 4;
                        if (bufPtr - startPtr > bufLen) {
                            break;
                        }
                        let filetype;
                        switch (true) {
                            case rstats.isBlockDevice():
                                filetype = constants.WASI_FILETYPE_BLOCK_DEVICE;
                                break;
                            case rstats.isCharacterDevice():
                                filetype = constants.WASI_FILETYPE_CHARACTER_DEVICE;
                                break;
                            case rstats.isDirectory():
                                filetype = constants.WASI_FILETYPE_DIRECTORY;
                                break;
                            case rstats.isFIFO():
                                filetype = constants.WASI_FILETYPE_SOCKET_STREAM;
                                break;
                            case rstats.isFile():
                                filetype = constants.WASI_FILETYPE_REGULAR_FILE;
                                break;
                            case rstats.isSocket():
                                filetype = constants.WASI_FILETYPE_SOCKET_STREAM;
                                break;
                            case rstats.isSymbolicLink():
                                filetype = constants.WASI_FILETYPE_SYMBOLIC_LINK;
                                break;
                            default:
                                filetype = constants.WASI_FILETYPE_UNKNOWN;
                                break;
                        }
                        this.view.setUint8(bufPtr, filetype);
                        bufPtr += 1;
                        bufPtr += 3; // padding
                        if (bufPtr + nameLength >= startPtr + bufLen) {
                            // It doesn't fit in the buffer
                            break;
                        }
                        let memory_buffer = buffer.default.from(this.memory.buffer);
                        memory_buffer.write(entry.name, bufPtr);
                        bufPtr += nameLength;
                    }
                    const bufused = bufPtr - startPtr;
                    this.view.setUint32(bufusedPtr, Math.min(bufused, bufLen), true);
                    return constants.WASI_ESUCCESS;
                }),
                fd_renumber: wrap((from, to) => {
                    CHECK_FD(from, bigint.BigIntPolyfill(0));
                    CHECK_FD(to, bigint.BigIntPolyfill(0));
                    fs.closeSync(this.FD_MAP.get(from).real);
                    this.FD_MAP.set(from, this.FD_MAP.get(to));
                    this.FD_MAP.delete(to);
                    return constants.WASI_ESUCCESS;
                }),
                fd_seek: wrap((fd, offset, whence, newOffsetPtr) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_FD_SEEK);
                    this.refreshMemory();
                    switch (whence) {
                        case constants.WASI_WHENCE_CUR:
                            stats.offset =
                                (stats.offset ? stats.offset : bigint.BigIntPolyfill(0)) + bigint.BigIntPolyfill(offset);
                            break;
                        case constants.WASI_WHENCE_END:
                            const { size } = fs.fstatSync(stats.real);
                            stats.offset = bigint.BigIntPolyfill(size) + bigint.BigIntPolyfill(offset);
                            break;
                        case constants.WASI_WHENCE_SET:
                            stats.offset = bigint.BigIntPolyfill(offset);
                            break;
                    }
                    this.view.setBigUint64(newOffsetPtr, stats.offset, true);
                    return constants.WASI_ESUCCESS;
                }),
                fd_tell: wrap((fd, offsetPtr) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_FD_TELL);
                    this.refreshMemory();
                    if (!stats.offset) {
                        stats.offset = bigint.BigIntPolyfill(0);
                    }
                    this.view.setBigUint64(offsetPtr, stats.offset, true);
                    return constants.WASI_ESUCCESS;
                }),
                fd_sync: wrap((fd) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_FD_SYNC);
                    fs.fsyncSync(stats.real);
                    return constants.WASI_ESUCCESS;
                }),
                path_create_directory: wrap((fd, pathPtr, pathLen) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_PATH_CREATE_DIRECTORY);
                    if (!stats.path) {
                        return constants.WASI_EINVAL;
                    }
                    this.refreshMemory();
                    const p = buffer.default.from(this.memory.buffer, pathPtr, pathLen).toString();
                    fs.mkdirSync(path.resolve(stats.path, p));
                    return constants.WASI_ESUCCESS;
                }),
                path_filestat_get: wrap((fd, flags, pathPtr, pathLen, bufPtr) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_PATH_FILESTAT_GET);
                    if (!stats.path) {
                        return constants.WASI_EINVAL;
                    }
                    this.refreshMemory();
                    const p = buffer.default.from(this.memory.buffer, pathPtr, pathLen).toString();
                    const rstats = fs.statSync(path.resolve(stats.path, p));
                    this.view.setBigUint64(bufPtr, bigint.BigIntPolyfill(rstats.dev), true);
                    bufPtr += 8;
                    this.view.setBigUint64(bufPtr, bigint.BigIntPolyfill(rstats.ino), true);
                    bufPtr += 8;
                    this.view.setUint8(bufPtr, translateFileAttributes(this, undefined, rstats).filetype);
                    bufPtr += 8;
                    this.view.setBigUint64(bufPtr, bigint.BigIntPolyfill(rstats.nlink), true);
                    bufPtr += 8;
                    this.view.setBigUint64(bufPtr, bigint.BigIntPolyfill(rstats.size), true);
                    bufPtr += 8;
                    this.view.setBigUint64(bufPtr, msToNs(rstats.atimeMs), true);
                    bufPtr += 8;
                    this.view.setBigUint64(bufPtr, msToNs(rstats.mtimeMs), true);
                    bufPtr += 8;
                    this.view.setBigUint64(bufPtr, msToNs(rstats.ctimeMs), true);
                    return constants.WASI_ESUCCESS;
                }),
                path_filestat_set_times: wrap((fd, dirflags, pathPtr, pathLen, stAtim, stMtim, fstflags) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_PATH_FILESTAT_SET_TIMES);
                    if (!stats.path) {
                        return constants.WASI_EINVAL;
                    }
                    this.refreshMemory();
                    const rstats = fs.fstatSync(stats.real);
                    let atim = rstats.atime;
                    let mtim = rstats.mtime;
                    const n = nsToMs(now(constants.WASI_CLOCK_REALTIME));
                    const atimflags = constants.WASI_FILESTAT_SET_ATIM | constants.WASI_FILESTAT_SET_ATIM_NOW;
                    if ((fstflags & atimflags) === atimflags) {
                        return constants.WASI_EINVAL;
                    }
                    const mtimflags = constants.WASI_FILESTAT_SET_MTIM | constants.WASI_FILESTAT_SET_MTIM_NOW;
                    if ((fstflags & mtimflags) === mtimflags) {
                        return constants.WASI_EINVAL;
                    }
                    if ((fstflags & constants.WASI_FILESTAT_SET_ATIM) === constants.WASI_FILESTAT_SET_ATIM) {
                        atim = nsToMs(stAtim);
                    }
                    else if ((fstflags & constants.WASI_FILESTAT_SET_ATIM_NOW) === constants.WASI_FILESTAT_SET_ATIM_NOW) {
                        atim = n;
                    }
                    if ((fstflags & constants.WASI_FILESTAT_SET_MTIM) === constants.WASI_FILESTAT_SET_MTIM) {
                        mtim = nsToMs(stMtim);
                    }
                    else if ((fstflags & constants.WASI_FILESTAT_SET_MTIM_NOW) === constants.WASI_FILESTAT_SET_MTIM_NOW) {
                        mtim = n;
                    }
                    const p = buffer.default.from(this.memory.buffer, pathPtr, pathLen).toString();
                    fs.utimesSync(path.resolve(stats.path, p), new Date(atim), new Date(mtim));
                    return constants.WASI_ESUCCESS;
                }),
                path_link: wrap((oldFd, oldFlags, oldPath, oldPathLen, newFd, newPath, newPathLen) => {
                    const ostats = CHECK_FD(oldFd, constants.WASI_RIGHT_PATH_LINK_SOURCE);
                    const nstats = CHECK_FD(newFd, constants.WASI_RIGHT_PATH_LINK_TARGET);
                    if (!ostats.path || !nstats.path) {
                        return constants.WASI_EINVAL;
                    }
                    this.refreshMemory();
                    const op = buffer.default.from(this.memory.buffer, oldPath, oldPathLen).toString();
                    const np = buffer.default.from(this.memory.buffer, newPath, newPathLen).toString();
                    fs.linkSync(path.resolve(ostats.path, op), path.resolve(nstats.path, np));
                    return constants.WASI_ESUCCESS;
                }),
                path_open: wrap((dirfd, dirflags, pathPtr, pathLen, oflags, fsRightsBase, fsRightsInheriting, fsFlags, fd) => {
                    const stats = CHECK_FD(dirfd, constants.WASI_RIGHT_PATH_OPEN);
                    fsRightsBase = bigint.BigIntPolyfill(fsRightsBase);
                    fsRightsInheriting = bigint.BigIntPolyfill(fsRightsInheriting);
                    const read = (fsRightsBase & (constants.WASI_RIGHT_FD_READ | constants.WASI_RIGHT_FD_READDIR)) !==
                        bigint.BigIntPolyfill(0);
                    const write = (fsRightsBase &
                        (constants.WASI_RIGHT_FD_DATASYNC |
                            constants.WASI_RIGHT_FD_WRITE |
                            constants.WASI_RIGHT_FD_ALLOCATE |
                            constants.WASI_RIGHT_FD_FILESTAT_SET_SIZE)) !==
                        bigint.BigIntPolyfill(0);
                    let noflags;
                    if (write && read) {
                        noflags = fs.constants.O_RDWR;
                    }
                    else if (read) {
                        noflags = fs.constants.O_RDONLY;
                    }
                    else if (write) {
                        noflags = fs.constants.O_WRONLY;
                    }
                    // fsRightsBase is needed here but perhaps we should do it in neededInheriting
                    let neededBase = fsRightsBase | constants.WASI_RIGHT_PATH_OPEN;
                    let neededInheriting = fsRightsBase | fsRightsInheriting;
                    if ((oflags & constants.WASI_O_CREAT) !== 0) {
                        noflags |= fs.constants.O_CREAT;
                        neededBase |= constants.WASI_RIGHT_PATH_CREATE_FILE;
                    }
                    if ((oflags & constants.WASI_O_DIRECTORY) !== 0) {
                        noflags |= fs.constants.O_DIRECTORY;
                    }
                    if ((oflags & constants.WASI_O_EXCL) !== 0) {
                        noflags |= fs.constants.O_EXCL;
                    }
                    if ((oflags & constants.WASI_O_TRUNC) !== 0) {
                        noflags |= fs.constants.O_TRUNC;
                        neededBase |= constants.WASI_RIGHT_PATH_FILESTAT_SET_SIZE;
                    }
                    // Convert file descriptor flags.
                    if ((fsFlags & constants.WASI_FDFLAG_APPEND) !== 0) {
                        noflags |= fs.constants.O_APPEND;
                    }
                    if ((fsFlags & constants.WASI_FDFLAG_DSYNC) !== 0) {
                        if (fs.constants.O_DSYNC) {
                            noflags |= fs.constants.O_DSYNC;
                        }
                        else {
                            noflags |= fs.constants.O_SYNC;
                        }
                        neededInheriting |= constants.WASI_RIGHT_FD_DATASYNC;
                    }
                    if ((fsFlags & constants.WASI_FDFLAG_NONBLOCK) !== 0) {
                        noflags |= fs.constants.O_NONBLOCK;
                    }
                    if ((fsFlags & constants.WASI_FDFLAG_RSYNC) !== 0) {
                        if (fs.constants.O_RSYNC) {
                            noflags |= fs.constants.O_RSYNC;
                        }
                        else {
                            noflags |= fs.constants.O_SYNC;
                        }
                        neededInheriting |= constants.WASI_RIGHT_FD_SYNC;
                    }
                    if ((fsFlags & constants.WASI_FDFLAG_SYNC) !== 0) {
                        noflags |= fs.constants.O_SYNC;
                        neededInheriting |= constants.WASI_RIGHT_FD_SYNC;
                    }
                    if (write &&
                        (noflags & (fs.constants.O_APPEND | fs.constants.O_TRUNC)) === 0) {
                        neededInheriting |= constants.WASI_RIGHT_FD_SEEK;
                    }
                    this.refreshMemory();
                    const p = buffer.default.from(this.memory.buffer, pathPtr, pathLen).toString();
                    const fullUnresolved = path.resolve(stats.path, p);
                    if (path.relative(stats.path, fullUnresolved).startsWith("..")) {
                        return constants.WASI_ENOTCAPABLE;
                    }
                    let full;
                    try {
                        full = fs.realpathSync(fullUnresolved);
                        if (path.relative(stats.path, full).startsWith("..")) {
                            return constants.WASI_ENOTCAPABLE;
                        }
                    }
                    catch (e) {
                        if (e.code === "ENOENT") {
                            full = fullUnresolved;
                        }
                        else {
                            throw e;
                        }
                    }
                    let realfd;
                    if (fs.statSync(full).isDirectory()) {
                        realfd = fs.openSync(full, fs.constants.O_RDONLY);
                    }
                    else {
                        realfd = fs.openSync(full, noflags);
                    }
                    const newfd = [...this.FD_MAP.keys()].reverse()[0] + 1;
                    this.FD_MAP.set(newfd, {
                        real: realfd,
                        filetype: undefined,
                        // offset: BigInt(0),
                        rights: {
                            base: neededBase,
                            inheriting: neededInheriting
                        },
                        path: full
                    });
                    stat(this, newfd);
                    this.view.setUint32(fd, newfd, true);
                    return constants.WASI_ESUCCESS;
                }),
                path_readlink: wrap((fd, pathPtr, pathLen, buf, bufLen, bufused) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_PATH_READLINK);
                    if (!stats.path) {
                        return constants.WASI_EINVAL;
                    }
                    this.refreshMemory();
                    const p = buffer.default.from(this.memory.buffer, pathPtr, pathLen).toString();
                    const full = path.resolve(stats.path, p);
                    const r = fs.readlinkSync(full);
                    const used = buffer.default.from(this.memory.buffer).write(r, buf, bufLen);
                    this.view.setUint32(bufused, used, true);
                    return constants.WASI_ESUCCESS;
                }),
                path_remove_directory: wrap((fd, pathPtr, pathLen) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_PATH_REMOVE_DIRECTORY);
                    if (!stats.path) {
                        return constants.WASI_EINVAL;
                    }
                    this.refreshMemory();
                    const p = buffer.default.from(this.memory.buffer, pathPtr, pathLen).toString();
                    fs.rmdirSync(path.resolve(stats.path, p));
                    return constants.WASI_ESUCCESS;
                }),
                path_rename: wrap((oldFd, oldPath, oldPathLen, newFd, newPath, newPathLen) => {
                    const ostats = CHECK_FD(oldFd, constants.WASI_RIGHT_PATH_RENAME_SOURCE);
                    const nstats = CHECK_FD(newFd, constants.WASI_RIGHT_PATH_RENAME_TARGET);
                    if (!ostats.path || !nstats.path) {
                        return constants.WASI_EINVAL;
                    }
                    this.refreshMemory();
                    const op = buffer.default.from(this.memory.buffer, oldPath, oldPathLen).toString();
                    const np = buffer.default.from(this.memory.buffer, newPath, newPathLen).toString();
                    fs.renameSync(path.resolve(ostats.path, op), path.resolve(nstats.path, np));
                    return constants.WASI_ESUCCESS;
                }),
                path_symlink: wrap((oldPath, oldPathLen, fd, newPath, newPathLen) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_PATH_SYMLINK);
                    if (!stats.path) {
                        return constants.WASI_EINVAL;
                    }
                    this.refreshMemory();
                    const op = buffer.default.from(this.memory.buffer, oldPath, oldPathLen).toString();
                    const np = buffer.default.from(this.memory.buffer, newPath, newPathLen).toString();
                    fs.symlinkSync(op, path.resolve(stats.path, np));
                    return constants.WASI_ESUCCESS;
                }),
                path_unlink_file: wrap((fd, pathPtr, pathLen) => {
                    const stats = CHECK_FD(fd, constants.WASI_RIGHT_PATH_UNLINK_FILE);
                    if (!stats.path) {
                        return constants.WASI_EINVAL;
                    }
                    this.refreshMemory();
                    const p = buffer.default.from(this.memory.buffer, pathPtr, pathLen).toString();
                    fs.unlinkSync(path.resolve(stats.path, p));
                    return constants.WASI_ESUCCESS;
                }),
                poll_oneoff: (sin, sout, nsubscriptions, nevents) => {
                    let eventc = 0;
                    let waitEnd = 0;
                    this.refreshMemory();
                    for (let i = 0; i < nsubscriptions; i += 1) {
                        const userdata = this.view.getBigUint64(sin, true);
                        sin += 8;
                        const type = this.view.getUint8(sin);
                        sin += 1;
                        switch (type) {
                            case constants.WASI_EVENTTYPE_CLOCK: {
                                sin += 7; // padding
                                const identifier = this.view.getBigUint64(sin, true);
                                sin += 8;
                                const clockid = this.view.getUint32(sin, true);
                                sin += 4;
                                sin += 4; // padding
                                const timestamp = this.view.getBigUint64(sin, true);
                                sin += 8;
                                const precision = this.view.getBigUint64(sin, true);
                                sin += 8;
                                const subclockflags = this.view.getUint16(sin, true);
                                sin += 2;
                                sin += 6; // padding
                                const absolute = subclockflags === 1;
                                let e = constants.WASI_ESUCCESS;
                                const n = bigint.BigIntPolyfill(now(clockid));
                                if (n === null) {
                                    e = constants.WASI_EINVAL;
                                }
                                else {
                                    const end = absolute ? timestamp : n + timestamp;
                                    waitEnd =
                                        end > waitEnd ? end : waitEnd;
                                }
                                this.view.setBigUint64(sout, userdata, true);
                                sout += 8;
                                this.view.setUint16(sout, e, true); // error
                                sout += 2; // pad offset 2
                                this.view.setUint8(sout, constants.WASI_EVENTTYPE_CLOCK);
                                sout += 1; // pad offset 3
                                sout += 5; // padding to 8
                                eventc += 1;
                                break;
                            }
                            case constants.WASI_EVENTTYPE_FD_READ:
                            case constants.WASI_EVENTTYPE_FD_WRITE: {
                                sin += 3; // padding
                                const fd = this.view.getUint32(sin, true);
                                sin += 4;
                                this.view.setBigUint64(sout, userdata, true);
                                sout += 8;
                                this.view.setUint16(sout, constants.WASI_ENOSYS, true); // error
                                sout += 2; // pad offset 2
                                this.view.setUint8(sout, type);
                                sout += 1; // pad offset 3
                                sout += 5; // padding to 8
                                eventc += 1;
                                break;
                            }
                            default:
                                return constants.WASI_EINVAL;
                        }
                    }
                    this.view.setUint32(nevents, eventc, true);
                    while (bindings.hrtime() < waitEnd) {
                        // nothing
                    }
                    return constants.WASI_ESUCCESS;
                },
                proc_exit: (rval) => {
                    bindings.exit(rval);
                    return constants.WASI_ESUCCESS;
                },
                proc_raise: (sig) => {
                    if (!(sig in constants.SIGNAL_MAP)) {
                        return constants.WASI_EINVAL;
                    }
                    bindings.kill(constants.SIGNAL_MAP[sig]);
                    return constants.WASI_ESUCCESS;
                },
                random_get: (bufPtr, bufLen) => {
                    this.refreshMemory();
                    bindings.randomFillSync(new Uint8Array(this.memory.buffer), bufPtr, bufLen);
                    return constants.WASI_ESUCCESS;
                },
                sched_yield() {
                    // Single threaded environment
                    // This is a no-op in JS
                    return constants.WASI_ESUCCESS;
                },
                sock_recv() {
                    return constants.WASI_ENOSYS;
                },
                sock_send() {
                    return constants.WASI_ENOSYS;
                },
                sock_shutdown() {
                    return constants.WASI_ENOSYS;
                }
            };
            // Wrap each of the imports to show the calls in the console
            // Object.keys(this.wasiImport).forEach((key: string) => {
            //   const prevImport = this.wasiImport[key];
            //   this.wasiImport[key] = function(...args: any[]) {
            //     console.log(`WASI: wasiImport called: ${key} (${args})`);
            //     try {
            //       let result = prevImport(...args);
            //       console.log(`WASI:  => ${result}`);
            //       return result;
            //     } catch (e) {
            //       console.log(`Catched error: ${e}`);
            //       throw e;
            //     }
            //   };
            // });
        }
        refreshMemory() {
            // @ts-ignore
            if (!this.view || this.view.buffer.byteLength === 0) {
                this.view = new dataview.DataViewPolyfill(this.memory.buffer);
            }
        }
        setMemory(memory) {
            this.memory = memory;
        }
        start(instance) {
            const exports = instance.exports;
            if (exports === null || typeof exports !== "object") {
                throw new Error(`instance.exports must be an Object. Received ${exports}.`);
            }
            const { memory } = exports;
            if (!(memory instanceof WebAssembly.Memory)) {
                throw new Error(`instance.exports.memory must be a WebAssembly.Memory. Recceived ${memory}.`);
            }
            this.setMemory(memory);
            if (exports._start) {
                exports._start();
            }
        }
        getImportNamespace(module) {
            let namespace = null;
            for (let imp of WebAssembly.Module.imports(module)) {
                // We only check for the functions
                if (imp.kind !== "function") {
                    continue;
                }
                // We allow functions in other namespaces other than wasi
                if (!imp.module.startsWith("wasi_")) {
                    continue;
                }
                if (!namespace) {
                    namespace = imp.module;
                }
                else {
                    if (namespace !== imp.module) {
                        throw new Error("Multiple namespaces detected.");
                    }
                }
            }
            return namespace;
        }
        getImports(module) {
            let namespace = this.getImportNamespace(module);
            switch (namespace) {
                case "wasi_unstable":
                    return {
                        wasi_unstable: this.wasiImport
                    };
                case "wasi_snapshot_preview1":
                    return {
                        wasi_snapshot_preview1: this.wasiImport
                    };
                default:
                    throw new Error("Can't detect a WASI namespace for the WebAssembly Module");
            }
        }
    }
    exports.default = WASIDefault;
    WASIDefault.defaultBindings = defaultBindings;
    // Also export it as a field in the export object
    exports.WASI = WASIDefault;
    });

    var hrtime_bigint = createCommonjsModule(function (module, exports) {
    // Simply polyfill for hrtime
    // https://nodejs.org/api/process.html#process_process_hrtime_time
    Object.defineProperty(exports, "__esModule", { value: true });
    const NS_PER_SEC = 1e9;
    const getBigIntHrtime = (nativeHrtime) => {
        return (time) => {
            const diff = nativeHrtime(time);
            // Return the time
            return (diff[0] * NS_PER_SEC + diff[1]);
        };
    };
    exports.default = getBigIntHrtime;
    });

    var browser$1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    // @ts-ignore


    // @ts-ignore



    const bindings = {
        hrtime: hrtime_bigint.default(browserHrtime.default),
        exit: (code) => {
            throw new lib.WASIExitError(code);
        },
        kill: (signal) => {
            throw new lib.WASIKillError(signal);
        },
        // @ts-ignore
        randomFillSync: randomfill.randomFillSync,
        isTTY: () => true,
        path: pathBrowserify,
        // Let the user attach the fs at runtime
        fs: null
    };
    exports.default = bindings;
    });

    var bindings = /*@__PURE__*/unwrapExports(browser$1);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter$1(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator$1(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var wasmTransformerWasmUrl = "data:application/wasm;base64,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ARC5ASACKAIUIQUgAigCEEEBRg1HIAUNRCACQRBqIAEQuQEgAigCFCEFIAIoAhBBAUYNRwJAIAUNAEEAIQhBvwEhBAxHC0HImsAAQRogASgCDCABKAIIakF/ahCcASEFDEcLIAJBEGogARC5ASACKAIUIQUgAigCEEEBRg1GAkAgBQ0AQQAhCEHAASEEDEYLQciawABBGiABKAIMIAEoAghqQX9qEJwBIQUMRgsgAkEQaiABEEYgAigCFCEFIAIoAhBBAUYNRSACQRBqIAEQRiACKAIUIQYgAigCEEEBRg0HQQAhCEHBASEEDEQLIAJBEGogARBGIAIoAhQhBSACKAIQQQFGDURBACEIQcIBIQQMQwsgAkEQaiABEEYgAigCFCEFIAIoAhBBAUYNQyACQRBqIAEQRiACKAIUIQYgAigCEEEBRg0FQQAhCEHDASEEDEILIAJBEGogARBGIAIoAhQhBSACKAIQQQFGDUJBACEIQccBIQQMQQsgAkEQaiABEEYgAigCFCEFIAIoAhBBAUYNQUEAIQhByAEhBAxACyACQRBqIAEQRiACKAIUIQUgAigCEEEBRg1AQQAhCEHEASEEDD8LIAynIQUMPwsgBiEFDD4LIAYhBQw9CyACQRBqIAEQWiACKQMQIgpCIIghCwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAKp0EBRg0AAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgC6dB/wFxIglB2gFLDQBBjwIhBCAJDtsBAQIDmAH7AQQFBvoBBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzAAAAAAAAAAAAADQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG0AAG4AAG9wcXJzdHV2d3h5egAAewAAfAAAAAB9fn8AAIABgQGCAYMBhAGFAYYBhwGIAQAAiQGKAYsBjAGNAY4BjwGQAZEBkgGTAZQBlQGWAQAAAAAAAAAAAAAAAACXAZgBmQGaAZsBnAGdAZ4BnwGgAaEBogGjAaQBpQGmAacBqAGpAaoBqwGsAa0BrgGvAbABsQEBC0H0msAAQRMgASgCDCABKAIIakF/ahCcASEBDMIBCyACQRBqIAEQjgEgAigCEEEBRg3AASACQRhqKAIAIQYgAigCFCEFQYwCIQQM+QELIAJBEGogARCOASACKAIQQQFGDb8BIAJBGGooAgAhBiACKAIUIQVBjQIhBAz4AQsgAkEQaiABQRAQnQFBASEFAkACQCACKAIQQQFGDQAgAkEYaigCAEEQRw38ASACKAIUIgUzAA4hCiAFKAAKIQMgBSgAAyEBIAUtAAIhBiAFLQABIQggBS0AACEHIAIgBS8ABzsBECACIAVBCWotAAA6ABJBACEFDAELIAIoAhQhAUIAIQoLIAIgATYACSACIAY6AAggAiACLwEQOwANIAIgAi0AEjoADyAFDb8BIAIoAgwhBiACKAIIIQVBjgIhBAz3AQsgAkEQaiABQRAQdSACIAIpAxAiCjcDCAJAAkAgCqdB/wFxIgFBAUsNACABDgIBsAEBCyACQQhqQQRyEO4BCyAKQgiIpyEHQZACIQQM9gELIAJBEGogAUEQEHUgAiACKQMQIgo3AwgCQAJAIAqnQf8BcSIBQQFLDQAgAQ4CAbABAQsgAkEIakEEchDuAQsgCkIIiKchB0GRAiEEDPUBCyACQRBqIAFBEBB1IAIgAikDECIKNwMIAkACQCAKp0H/AXEiAUEBSw0AIAEOAgGwAQELIAJBCGpBBHIQ7gELIApCCIinIQdBkgIhBAz0AQsgAkEQaiABQQgQdSACIAIpAxAiCjcDCAJAAkAgCqdB/wFxIgFBAUsNACABDgIBsAEBCyACQQhqQQRyEO4BCyAKQgiIpyEHQZQCIQQM8wELIAJBEGogAUEIEHUgAiACKQMQIgo3AwgCQAJAIAqnQf8BcSIBQQFLDQAgAQ4CAbABAQsgAkEIakEEchDuAQsgCkIIiKchB0GVAiEEDPIBCyACQRBqIAFBCBB1IAIgAikDECIKNwMIAkACQCAKp0H/AXEiAUEBSw0AIAEOAgGwAQELIAJBCGpBBHIQ7gELIApCCIinIQdBlgIhBAzxAQtBlwIhBAzwAQsgAkEQaiABQQQQdSACIAIpAxAiCjcDCAJAAkAgCqdB/wFxIgFBAUsNACABDgIBrwEBCyACQQhqQQRyEO4BCyAKQgiIpyEHQZgCIQQM7wELIAJBEGogAUEEEHUgAiACKQMQIgo3AwgCQAJAIAqnQf8BcSIBQQFLDQAgAQ4CAa8BAQsgAkEIakEEchDuAQsgCkIIiKchB0GZAiEEDO4BC0GaAiEEDO0BCyACQRBqIAFBAhB1IAIgAikDECIKNwMIAkACQCAKp0H/AXEiAUEBSw0AIAEOAgGuAQELIAJBCGpBBHIQ7gELIApCCIinIQdBmwIhBAzsAQsgAkEQaiABQQIQdSACIAIpAxAiCjcDCAJAAkAgCqdB/wFxIgFBAUsNACABDgIBrgEBCyACQQhqQQRyEO4BCyAKQgiIpyEHQZwCIQQM6wELQZ0CIQQM6gELIAJBEGogAUEEEHUgAiACKQMQIgo3AwgCQAJAIAqnQf8BcSIBQQFLDQAgAQ4CAa0BAQsgAkEIakEEchDuAQsgCkIIiKchB0GeAiEEDOkBCyACQRBqIAFBBBB1IAIgAikDECIKNwMIAkACQCAKp0H/AXEiAUEBSw0AIAEOAgGtAQELIAJBCGpBBHIQ7gELIApCCIinIQdBnwIhBAzoAQtBoAIhBAznAQsgAkEQaiABQQIQdSACIAIpAxAiCjcDCAJAAkAgCqdB/wFxIgFBAUsNACABDgIBrAEBCyACQQhqQQRyEO4BCyAKQgiIpyEHQaECIQQM5gELIAJBEGogAUECEHUgAiACKQMQIgo3AwgCQAJAIAqnQf8BcSIBQQFLDQAgAQ4CAawBAQsgAkEIakEEchDuAQsgCkIIiKchB0GiAiEEDOUBC0GjAiEEDOQBC0GkAiEEDOMBC0GlAiEEDOIBC0GmAiEEDOEBC0GnAiEEDOABC0GoAiEEDN8BC0GpAiEEDN4BC0GqAiEEDN0BC0GrAiEEDNwBC0GsAiEEDNsBC0GtAiEEDNoBC0GuAiEEDNkBC0GvAiEEDNgBC0GwAiEEDNcBC0GxAiEEDNYBC0GyAiEEDNUBC0GzAiEEDNQBC0G0AiEEDNMBC0G1AiEEDNIBC0G2AiEEDNEBC0G3AiEEDNABC0G4AiEEDM8BC0G5AiEEDM4BC0G6AiEEDM0BC0G7AiEEDMwBC0G8AiEEDMsBC0G9AiEEDMoBC0G+AiEEDMkBC0G/AiEEDMgBC0HAAiEEDMcBC0HBAiEEDMYBC0HCAiEEDMUBC0HDAiEEDMQBC0HEAiEEDMMBC0HFAiEEDMIBC0HGAiEEDMEBC0HHAiEEDMABC0HIAiEEDL8BC0HJAiEEDL4BC0HKAiEEDL0BC0HLAiEEDLwBC0HMAiEEDLsBC0HNAiEEDLoBC0HOAiEEDLkBC0HQAiEEDLgBC0HRAiEEDLcBC0HSAiEEDLYBC0HTAiEEDLUBC0HUAiEEDLQBC0HVAiEEDLMBC0HWAiEEDLIBC0HXAiEEDLEBC0HYAiEEDLABC0HZAiEEDK8BC0HaAiEEDK4BC0HbAiEEDK0BC0HcAiEEDKwBC0HdAiEEDKsBC0HeAiEEDKoBC0HjAiEEDKkBC0HfAiEEDKgBC0HgAiEEDKcBC0HhAiEEDKYBC0HiAiEEDKUBC0HkAiEEDKQBC0HlAiEEDKMBC0HmAiEEDKIBC0HnAiEEDKEBC0HoAiEEDKABC0HpAiEEDJ8BC0HqAiEEDJ4BC0HrAiEEDJ0BC0HsAiEEDJwBC0HtAiEEDJsBC0HuAiEEDJoBC0HvAiEEDJkBC0HwAiEEDJgBC0HxAiEEDJcBC0HyAiEEDJYBC0HzAiEEDJUBC0H0AiEEDJQBC0H1AiEEDJMBC0H2AiEEDJIBC0H3AiEEDJEBC0H4AiEEDJABC0H5AiEEDI8BC0H6AiEEDI4BC0H7AiEEDI0BC0H8AiEEDIwBC0H9AiEEDIsBC0H+AiEEDIoBC0H/AiEEDIkBC0GAAyEEDIgBC0GBAyEEDIcBC0GCAyEEDIYBC0GDAyEEDIUBC0GEAyEEDIQBC0GFAyEEDIMBC0GGAyEEDIIBC0GHAyEEDIEBC0GIAyEEDIABC0GJAyEEDH8LQYoDIQQMfgtBiwMhBAx9C0GMAyEEDHwLQY0DIQQMewtBjgMhBAx6C0GPAyEEDHkLQZADIQQMeAtBkQMhBAx3C0GSAyEEDHYLQZMDIQQMdQtBlAMhBAx0C0GVAyEEDHMLQZYDIQQMcgtBlwMhBAxxC0GYAyEEDHALQZkDIQQMbwtBmgMhBAxuC0GbAyEEDG0LQZwDIQQMbAtBnQMhBAxrC0GeAyEEDGoLQZ8DIQQMaQtBoAMhBAxoC0GhAyEEDGcLQaIDIQQMZgtBowMhBAxlC0GkAyEEDGQLQaUDIQQMYwsgAkEYakIANwMAIAJCADcDECACQQRyIQhBACEFA0AgAkEIaiABQSAQdSACIAIpAwgiCjcDACAKp0H/AXEiBkEBRg0pIAJBEGogBWogCkIIiDwAAAJAIAZFDQAgCBDuAQsgBUEBaiIFQRBHDQALIAIzAR4hCiACKAEaIQMgAigBFiEGIAIoARIhBSACLQARIQggAi0AECEHQaYDIQQMYgsgAkEQaiABQQAQcSACKAIQQQFGDSggAkEYaigCACEGIAIoAhQhBUGnAyEEDGELIAJBEGogAUEBEHEgAigCEEEBRg0nIAJBGGooAgAhBiACKAIUIQVBqAMhBAxgCyACQRBqIAFBAhBxIAIoAhBBAUYNJiACQRhqKAIAIQYgAigCFCEFQakDIQQMXwsgAkEQaiABQQMQcSACKAIQQQFGDSUgAkEYaigCACEGIAIoAhQhBUGqAyEEDF4LQasDIQQMXQtBrAMhBAxcC0GtAyEEDFsLQa4DIQQMWgtBrwMhBAxZC0GwAyEEDFgLQbEDIQQMVwtBsgMhBAxWC0GzAyEEDFULQbQDIQQMVAtBtQMhBAxTC0G2AyEEDFILIAJBEGogAUEDEHEgAigCEEEBRg0YIAJBGGooAgAhBiACKAIUIQVBtwMhBAxRCyACQRBqIAFBAxBxIAIoAhBBAUYNFyACQRhqKAIAIQYgAigCFCEFQbgDIQQMUAsgAkEQaiABQQMQcSACKAIQQQFGDRYgAkEYaigCACEGIAIoAhQhBUG5AyEEDE8LIAJBEGogAUEDEHEgAigCEEEBRg0VIAJBGGooAgAhBiACKAIUIQVBugMhBAxOCyACQRBqIAFBAxBxIAIoAhBBAUYNFCACQRhqKAIAIQYgAigCFCEFQbsDIQQMTQsgAkEQaiABQQMQcSACKAIQQQFGDRMgAkEYaigCACEGIAIoAhQhBUG8AyEEDEwLQc8CIQQMSwtBvQMhBAxKC0G+AyEEDEkLIAunIQEMEAsgCkIgiKchAQwPCyAKQiCIpyEBDA4LIApCIIinIQEMDQsgCkIgiKchAQwMCyAKQiCIpyEBDAsLIApCIIinIQEMCgsgCkIgiKchAQwJCyAKQiCIpyEBDAgLIApCIIinIQEMBwsgCkIgiKchAQwGCyAKQiCIpyEBDAULIApCIIinIQEMBAsgCkIgiKchAQwDCyAKQiCIpyEBDAILIApCIIinIQEMAQsgAigCFCEBCyAAQQE2AgAgACABNgIEDD0LIAJBEGogARC5ASACKQMQIgpCIIghDAJAAkACQAJAIAqnQQFGDQACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAynQf8BcSIFQc4ASw0AIAUOTwECAwQAAAAAAAAAAAAAAAAFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkMBC0HqmcAAQRMgASgCDCABKAIIakF/ahCcASEBDEYLIAJBEGogAUECEHEgAigCEEEBRg1EIAJBGGooAgAhBiACKAIUIQVByQEhBAyAAQsgAkEQaiABQQIQcSACKAIQQQFGDUMgAkEYaigCACEGIAIoAhQhBUHKASEEDH8LIAJBEGogAUEDEHEgAigCEEEBRg1CIAJBGGooAgAhBiACKAIUIQVBywEhBAx+CyACQRBqIAEQuQEgAikDECIKQiCIIQwgCqdBAUYNQCAMpyEHQcwBIQQMfQsgAkEQaiABQQIQcSACKAIQQQFGDUAgAkEYaigCACEGIAIoAhQhBUHNASEEDHwLIAJBEGogAUEDEHEgAigCEEEBRg0/IAJBGGooAgAhBiACKAIUIQVBzgEhBAx7CyACQRBqIAFBABBxIAIoAhBBAUYNPiACQRhqKAIAIQYgAigCFCEFQc8BIQQMegsgAkEQaiABQQEQcSACKAIQQQFGDT0gAkEYaigCACEGIAIoAhQhBUHQASEEDHkLIAJBEGogAUEAEHEgAigCEEEBRg08IAJBGGooAgAhBiACKAIUIQVB0QEhBAx4CyACQRBqIAFBARBxIAIoAhBBAUYNOyACQRhqKAIAIQYgAigCFCEFQdIBIQQMdwsgAkEQaiABQQIQcSACKAIQQQFGDTogAkEYaigCACEGIAIoAhQhBUHTASEEDHYLIAJBEGogAUECEHEgAigCEEEBRg05IAJBGGooAgAhBiACKAIUIQVB1AEhBAx1CyACQRBqIAFBAxBxIAIoAhBBAUYNOCACQRhqKAIAIQYgAigCFCEFQdUBIQQMdAsgAkEQaiABQQAQcSACKAIQQQFGDTcgAkEYaigCACEGIAIoAhQhBUHWASEEDHMLIAJBEGogAUEBEHEgAigCEEEBRg02IAJBGGooAgAhBiACKAIUIQVB1wEhBAxyCyACQRBqIAFBABBxIAIoAhBBAUYNNSACQRhqKAIAIQYgAigCFCEFQdgBIQQMcQsgAkEQaiABQQEQcSACKAIQQQFGDTQgAkEYaigCACEGIAIoAhQhBUHZASEEDHALIAJBEGogAUECEHEgAigCEEEBRg0zIAJBGGooAgAhBiACKAIUIQVB2gEhBAxvCyACQRBqIAFBAhBxIAIoAhBBAUYNMiACQRhqKAIAIQYgAigCFCEFQdsBIQQMbgsgAkEQaiABQQMQcSACKAIQQQFGDTEgAkEYaigCACEGIAIoAhQhBUHcASEEDG0LIAJBEGogAUEAEHEgAigCEEEBRg0wIAJBGGooAgAhBiACKAIUIQVB3QEhBAxsCyACQRBqIAFBARBxIAIoAhBBAUYNLyACQRhqKAIAIQYgAigCFCEFQd4BIQQMawsgAkEQaiABQQAQcSACKAIQQQFGDS4gAkEYaigCACEGIAIoAhQhBUHfASEEDGoLIAJBEGogAUEBEHEgAigCEEEBRg0tIAJBGGooAgAhBiACKAIUIQVB4AEhBAxpCyACQRBqIAFBAhBxIAIoAhBBAUYNLCACQRhqKAIAIQYgAigCFCEFQeEBIQQMaAsgAkEQaiABQQIQcSACKAIQQQFGDSsgAkEYaigCACEGIAIoAhQhBUHiASEEDGcLIAJBEGogAUEDEHEgAigCEEEBRg0qIAJBGGooAgAhBiACKAIUIQVB4wEhBAxmCyACQRBqIAFBABBxIAIoAhBBAUYNKSACQRhqKAIAIQYgAigCFCEFQeQBIQQMZQsgAkEQaiABQQEQcSACKAIQQQFGDSggAkEYaigCACEGIAIoAhQhBUHlASEEDGQLIAJBEGogAUEAEHEgAigCEEEBRg0nIAJBGGooAgAhBiACKAIUIQVB5gEhBAxjCyACQRBqIAFBARBxIAIoAhBBAUYNJiACQRhqKAIAIQYgAigCFCEFQecBIQQMYgsgAkEQaiABQQIQcSACKAIQQQFGDSUgAkEYaigCACEGIAIoAhQhBUHoASEEDGELIAJBEGogAUECEHEgAigCEEEBRg0kIAJBGGooAgAhBiACKAIUIQVB6QEhBAxgCyACQRBqIAFBAxBxIAIoAhBBAUYNIyACQRhqKAIAIQYgAigCFCEFQeoBIQQMXwsgAkEQaiABQQAQcSACKAIQQQFGDSIgAkEYaigCACEGIAIoAhQhBUHrASEEDF4LIAJBEGogAUEBEHEgAigCEEEBRg0hIAJBGGooAgAhBiACKAIUIQVB7AEhBAxdCyACQRBqIAFBABBxIAIoAhBBAUYNICACQRhqKAIAIQYgAigCFCEFQe0BIQQMXAsgAkEQaiABQQEQcSACKAIQQQFGDR8gAkEYaigCACEGIAIoAhQhBUHuASEEDFsLIAJBEGogAUECEHEgAigCEEEBRg0eIAJBGGooAgAhBiACKAIUIQVB7wEhBAxaCyACQRBqIAFBAhBxIAIoAhBBAUYNHSACQRhqKAIAIQYgAigCFCEFQfABIQQMWQsgAkEQaiABQQMQcSACKAIQQQFGDRwgAkEYaigCACEGIAIoAhQhBUHxASEEDFgLIAJBEGogAUEAEHEgAigCEEEBRg0bIAJBGGooAgAhBiACKAIUIQVB8gEhBAxXCyACQRBqIAFBARBxIAIoAhBBAUYNGiACQRhqKAIAIQYgAigCFCEFQfMBIQQMVgsgAkEQaiABQQAQcSACKAIQQQFGDRkgAkEYaigCACEGIAIoAhQhBUH0ASEEDFULIAJBEGogAUEBEHEgAigCEEEBRg0YIAJBGGooAgAhBiACKAIUIQVB9QEhBAxUCyACQRBqIAFBAhBxIAIoAhBBAUYNFyACQRhqKAIAIQYgAigCFCEFQfYBIQQMUwsgAkEQaiABQQIQcSACKAIQQQFGDRYgAkEYaigCACEGIAIoAhQhBUH3ASEEDFILIAJBEGogAUEDEHEgAigCEEEBRg0VIAJBGGooAgAhBiACKAIUIQVB+AEhBAxRCyACQRBqIAFBABBxIAIoAhBBAUYNFCACQRhqKAIAIQYgAigCFCEFQfkBIQQMUAsgAkEQaiABQQEQcSACKAIQQQFGDRMgAkEYaigCACEGIAIoAhQhBUH6ASEEDE8LIAJBEGogAUEAEHEgAigCEEEBRg0SIAJBGGooAgAhBiACKAIUIQVB+wEhBAxOCyACQRBqIAFBARBxIAIoAhBBAUYNESACQRhqKAIAIQYgAigCFCEFQfwBIQQMTQsgAkEQaiABQQIQcSACKAIQQQFGDRAgAkEYaigCACEGIAIoAhQhBUH9ASEEDEwLIAJBEGogAUECEHEgAigCEEEBRg0PIAJBGGooAgAhBiACKAIUIQVB/gEhBAxLCyACQRBqIAFBAxBxIAIoAhBBAUYNDiACQRhqKAIAIQYgAigCFCEFQf8BIQQMSgsgAkEQaiABQQAQcSACKAIQQQFGDQ0gAkEYaigCACEGIAIoAhQhBUGAAiEEDEkLIAJBEGogAUEBEHEgAigCEEEBRg0MIAJBGGooAgAhBiACKAIUIQVBgQIhBAxICyACQRBqIAFBABBxIAIoAhBBAUYNCyACQRhqKAIAIQYgAigCFCEFQYICIQQMRwsgAkEQaiABQQEQcSACKAIQQQFGDQogAkEYaigCACEGIAIoAhQhBUGDAiEEDEYLIAJBEGogAUECEHEgAigCEEEBRg0JIAJBGGooAgAhBiACKAIUIQVBhAIhBAxFCyACQRBqIAFBAhBxIAIoAhBBAUYNCCACQRhqKAIAIQYgAigCFCEFQYUCIQQMRAsgAkEQaiABQQMQcSACKAIQQQFGDQcgAkEYaigCACEGIAIoAhQhBUGGAiEEDEMLIAJBEGogAUEAEHEgAigCEEEBRg0GIAJBGGooAgAhBiACKAIUIQVBhwIhBAxCCyACQRBqIAFBARBxIAIoAhBBAUYNBSACQRhqKAIAIQYgAigCFCEFQYgCIQQMQQsgAkEQaiABQQAQcSACKAIQQQFGDQQgAkEYaigCACEGIAIoAhQhBUGJAiEEDEALIAJBEGogAUEBEHEgAigCEEEBRg0DIAJBGGooAgAhBiACKAIUIQVBigIhBAw/CyACQRBqIAFBAhBxIAIoAhBBAUYNAiACQRhqKAIAIQYgAigCFCEFQYsCIQQMPgsgDKchAQwCCyAMpyEBDAELIAIoAhQhAQsgAEEBNgIAIAAgATYCBAw8C0EBIQQLCwsMNgsgAEEBNgIAIAAgCz4CBAw3CyAAQQE2AgAgACAFNgIEDDYLIABBATYCACAAIAU2AgQMNQsgAEEBNgIAIAAgBTYCBAw0CyAAQQE2AgAgACAFNgIEDDMLIABBATYCACAAIAU2AgQMMgsgCkKAgICAcIMhCyAFIAdrIQYgASgCACAHaiEFQQkhBAwvCyAAQQE2AgAgACAFNgIEDDALIABBATYCACAAIAU2AgQMLwsgAEEBNgIAIAAgBjYCBAwuCyAAQQE2AgAgACAFNgIEDC0LIABBATYCACAAIApCIIg+AgQMLAsgAEEBNgIAIAAgBTYCBAwrCyAAQQE2AgAgACAFNgIEDCoLIABBATYCACAAIAU2AgQMKQsgAEEBNgIAIAAgBTYCBAwoCyAAQQE2AgAgACAFNgIEDCcLIABBATYCACAAIAU2AgQMJgsgAEEBNgIAIAAgBTYCBAwlCyAAQQE2AgAgACAFNgIEDCQLIABBATYCACAAIAU2AgQMIwsgAEEBNgIAIAAgBTYCBAwiCyAAQQE2AgAgACAFNgIEDCELIABBATYCACAAIAU2AgQMIAsgAEEBNgIAIAAgBTYCBAwfCyAAQQE2AgAgACAFNgIEDB4LIABBATYCACAAIAU2AgQMHQsgAEEBNgIAIAAgBTYCBAwcCyAAQQE2AgAgACAFNgIEDBsLIABBATYCACAAIAU2AgQMGgsgAEEBNgIAIAAgBTYCBAwZCyAAQQE2AgAgACAFNgIEDBgLIABBATYCACAAIAU2AgQMFwsgAEEBNgIAIAAgBTYCBAwWCyAAQQE2AgAgACAFNgIEDBULIABBATYCACAAIAU2AgQMFAsgAEEBNgIAIAAgBTYCBAwTCyAAQQE2AgAgACAFNgIEDBILIABBATYCACAAIAU2AgQMEQsgAEEBNgIAIAAgBTYCBAwQCyAAQQE2AgAgACAFNgIEDA8LIABBATYCACAAIAU2AgQMDgsgAEEBNgIAIAAgBTYCBAwNCyAAQQE2AgAgACAFNgIEDAwLIABBATYCACAAIAU2AgQMCwsgACACKAIUNgIEIABBATYCAAwKCyAAQQE2AgAgACAFNgIEDAkLIAIoAhQhASAAQQE2AgAgACABNgIEDAgLIABBATYCACAAIAU2AgQMBwtBkwIhBAsgA61CIIYhCwwDCyAHIAUQqgEAC0HImsAAQRogASgCDCABKAIIakF/ahCcASEFDAILQZSTwABBNEGslMAAENYBAAsgACAIOgALIABBADYCACAAQRhqIAo3AwAgAEEMaiAFNgIAIABBCmogBzoAACAAQQhqIAQ7AQAgAEEQaiALIAathDcDAAwBCyAAQQE2AgAgACAFNgIECyACQSBqJAALojwCKH8DfiMAQZAGayICJAAgAkGIAmogARCXAiACQZACaiACKAKIAiACKAKMAhCnASACQQA2AoAEIAJCATcD+AMgAkEANgKQBCACQgQ3A4gEIAJBADYCoAQgAkIENwOYBCACQQA2ArAEIAJCBDcDqAQgAkEANgLABCACQgQ3A7gEIAJBADYC0AQgAkIENwPIBCACQQA2AuAEIAJCBDcD2AQgAkEANgLwBCACQgQ3A+gEIAJBiAVqQQhqIQNBBCEEQQQhBUEEIQZBBCEHQQQhCEEEIQlBACEKQQAhC0EAIQxBACENQQAhDkEAIQ9BACEQQQAhEUEBIRJBACETQQAhFEEAIRVBACEWA0AgAkGQAmoQGSEXIAJBkAJqEAMiGC0AACIZQQVGDQACQAJAAkACQAJAAkACQAJAAkAgGUF9aiIaQQhNDQAgGUFqaiIZQQJLDQkCQAJAIBkOAwELAAELIBhBCGovAQBBC0cNCiAYQQxqKAIAIhkgC08NCiAHIBlBA3RqIhkoAgBBAUcNCiATQQFHDQIgF0EBaiEYIBkoAgQhFyAqQiCIpyEaICqnIRsCQCANIAIoAuwERw0AIAJB6ARqIA1BARC9ASACKALoBCEEIAIoAvAEIQ0LIAQgDUEEdGoiGSAbNgIIIBkgFzYCBCAZIBg2AgAgGUEMaiAaNgIAQQEhEyACIA1BAWoiDTYC8AQMCgsgGEEIajUCACErAkACQCASQQFxDQAgE0EBRw0EICpCIIinIRkMAQsgDkEBRw0EIB0gHGohGQsgAkGAAmogARCXAiACKAKEAiIYIBlJDQQgAkHwBWogAigCgAIgGWogGCAZaxBEICtCIIYgGa2EISpBASETQQAhEgwJCyAaDgkEBQgICAgIBgcEC0GAgMAAQStB9IDAABDWAQALQYCAwABBK0H0gMAAENYBAAtBgIDAAEErQfSAwAAQ1gEACyAZIBgQqgEACwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBBBAUcNACARQQFHDQAgDkEBRw0AIA9BAUcNACACQZABaiABEJcCIAIoApQBIhkgHkEBaiIRSQ0CIAJB8AVqIAIoApABIBFqIBkgEWsQRCACKALwBUEBRg0DIAJB+AVqKAIAIRkgAigC9AUhEiACQYgBaiABEJcCIAIoAowBIhggGSARaiIQSQ0EIAJB8AVqIAIoAogBIBBqIBggEGsQRCACKALwBUEBRg0FIAIoAvQFIR8gAkHwBWogARCwASACQYgFakEIaiACQfAFakEIaiIJKAIANgIAIAJCADcClAUgAiACKQPwBTcDiAUgAkEANgKoBSACQgQ3A6AFIAwNARDUAkEEIQtBACEJQQEhFUEEIRlBBCEbQQAhGEEEIRdBACEaDAsLIAAgAikD+AM3AgQgAEEANgIAIABBDGogAkGABGooAgA2AgACQCACKALsBCIZRQ0AIAQgGUEEdEEEEKsCCwJAIAIoAtwEIhlFDQAgCCAZQQN0QQQQqwILAkAgAigCzAQiGUUNACAGIBlBDGxBBBCrAgsgAkG4BGoQ1gIgAkG4BGoQiwICQCACKAKsBCIZRQ0AIAcgGUEDdEEEEKsCCyACQYgEahCgASACKAKMBCIZRQ0LIAIoAogEIBlBBXRBBBCrAgwLCyAMQQxsIRZBBCEbIAJB+ARqQQhqIRVBACEYIAYhGQNAIAIoApAEIhogGSgCACIXTQ0FAkACQCACKAKIBCAXQQV0ai0AFEUNACACKAKoBSAfaiEXAkAgGCACKAKcBEcNACACQZgEaiAYQQEQwAEgAigCmAQhGyACKAKgBCEYCyAbIBhBA3RqIhogFzYCBCAaQQE2AgAgAiAYQQFqIhg2AqAEIAIoApAEIhogGSgCACIXTQ0IIAIoAogEIBdBBXRqIhooAhghFyAaQRxqKAIAIRogAkGAAWogARCXAiAaIBdJDQkgAigChAEiCyAaSQ0KIAIoAoABIQsgAkH4AGogGiAXayIaQQAQtAEgAkEANgL4BSACIAIpA3g3A/AFIAJB8AVqIAsgF2ogGhCnAiAVIAIoAvgFNgIAIAIgAikD8AU3A/gEIAJB8AVqIAJB+ARqEBMCQCACKAKoBSIXIAIoAqQFRw0AIAJBoAVqIBdBARDBASACKAKoBSEXCyACKAKgBSAXQQxsaiIXIAIpA/AFNwIAIBdBCGogCSgCADYCACACIAIoAqgFQQFqNgKoBSACQfgEahDXAiACQfgEahCPAgwBCwJAIBggAigCnARHDQAgAkGYBGogGEEBEMABIAIoApgEIRsgAigCoAQhGAsgGyAYQQN0akEANgIAIAIgGEEBaiIYNgKgBAsgGUEMaiEZIBZBdGoiFkUNCQwACwsgESAZEKoBAAsgAiACKQL0BTcDiAVBhIHAAEErIAJBiAVqQbCBwAAQlAEACyAQIBgQqgEACyACIAIpAvQFNwOIBUGEgcAAQSsgAkGIBWpBsIHAABCUAQALQYiCwAAgFyAaEKgBAAtBiILAACAXIBoQqAEACyAXIBoQqgEACyAaIAsQqQEACyACKAKgBSIZIAIoAqgFIglBDGwiFmohCxDUAgJAIAkNAEEAIQlBASEVIBshF0EAIRoMAQsgCUUhFUEAIRdBACEaA0AgGSAXakEIaigCACAaaiEaIBYgF0EMaiIXRw0ACyAbIRcLIAJBiAVqIBogEmogERArIAJBiAVqIAkgH2ogEBArAkAgFQ0AIAJBgAVqIR8DQCACQfAAaiAZEJcCIAIoAnAhGiACQegAaiACKAJ0IhZBABC0ASACQQA2AvgFIAIgAikDaDcD8AUgAkHwBWogGiAWEKcCIB8gAigC+AU2AgAgAiACKQPwBTcD+AQgAkGIBWogAkH4BGogIBA7IAsgGUEMaiIZRw0ACwsQ1AIgAkHgAGogARCXAgJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCACKAJkIhkgIUEBaiIJSQ0AIAJB8AVqIAIoAmAgCWogGSAJaxBEIAIoAvAFQQFGDQEgG0F4aiERIAYgDEEMbGohCyACKAL0BSESIAJBgAZqIRBBACEaIAYhGUEAIRUCQANAIBEgGkEDdGohFiACKAKIBCEgIAIoApAEIR8CQANAAkAgCyAZRw0AENQCIAJBiAVqIBUgEmogCRArAkAgDEUNACAMQQxsIRpBACEZA0AgAigCkAQiGyAGKAIAIhZNDRACQCACKAKIBCAWQQV0ai0AFEUNACAYIBlNDRIgFygCAEUNEyACQYgFaiAXQQRqKAIAIAZBCGooAgBBf2oQKwsgGUEBaiEZIAZBDGohBiAXQQhqIRcgGkF0aiIaDQALCxDUAiACQdgAaiABEJcCIAIoAlwiGSAiQQFqIgZJDQogAkHwBWogAigCWCAGaiAZIAZrEEQgAigC8AVBAUYNCyACQfgFaigCACEZIAIoAvQFIQsgAkHQAGogARCXAiACKAJUIhggGSAGaiIbSQ0MIAJB8AVqIAIoAlAgG2ogGCAbaxBEIAIoAvAFQQFGDQ0gAigC9AUhIEEAIRggAkEANgL4BSACQgQ3A/AFIAJB8AVqIAUgBSAKQQN0aiIfEG4gAkGwBWpBCGogAigC+AUiFjYCACACIAIpA/AFIio3A7AFIBZFDQIgFkEMbCEXICqnIhpBCGohGQNAIBkoAgAgGGohGCAZQQxqIRkgF0F0aiIXDQALIAJBiAVqIBggC2ogBhArIAJBiAVqIBYgIGogGxArIBZFDQQgFkEMbCEZIAJBgAVqIQYDQCACQcgAaiAaEJcCIAIoAkghGCACQcAAaiACKAJMIhdBABC0ASACQQA2AvgFIAIgAikDQDcD8AUgAkHwBWogGCAXEKcCIAYgAigC+AU2AgAgAiACKQPwBTcD+AQgAkGIBWogAkH4BGogIxA7IBpBDGohGiAZQXRqIhkNAAwFCwsgHyAZKAIAIhtNDQYgGkEBaiEaIBlBDGohGSAWQQhqIRYgICAbQQV0ai0AFEUNAAsgGCAaQX9qTQ0GIBYoAgBFDQcgAkHwBWogAkGIBWogFkEEaigCACAZQXxqKAIAQX9qEBsgAigC+AUhFiACKAKIBiEbIBAQ1wIgEBCPAiAbIBVqIBZrIRUMAQsLIAJBiAVqIAsgBhArIAJBiAVqIBYgIGogGxArCxDUAiACQThqIAEQlwIgAigCPCIZIB1JDQwgAkHwBWogAigCOCAdaiAZIB1rEEQgAigC8AVBAUYNDSACQfgFaigCACEZIAIoAvQFISMgAkEwaiABEJcCIAIoAjQiGCAZIB1qIglJDQ4gAkHwBWogAigCMCAJaiAYIAlrEEQgAigC8AVBAUYNDyACKAL0BSEVQQAhFyACQQA2AoAFIAJCBDcD+AQgAiAfNgL0BSACIAU2AvAFIAIgAkGIBGo2AvgFIAJB+ARqIAJB8AVqEI8BIAJBwAVqQQhqIAIoAoAFIhk2AgAgAiACKQP4BCIqNwPABUEAIRoCQCAZRQ0AIBlBDGwhGCAqp0EIaiEZQQAhGgNAIBkoAgAgGmohGiAZQQxqIRkgGEF0aiIYDQALCyACQQA2AtgFIAJCBDcD0AUgAkEANgLoBSACQgQ3A+AFAkAgDQ0AQQQhIAwWCyANQQR0IQYgAkHwBWpBEGohFkEAIRtBACEXA0ACQCAEQQhqIhgoAgAiGSAbRg0AIAJBKGogARCXAiACKAIsIhsgGUkNEiACQfAFaiACKAIoIBlqIBsgGWsQRCACKALwBUEBRg0TIAIoAvgFISAgAigC9AUhCyAEQQxqKAIAIR8gGCgCACEMAkAgAigC2AUiGSACKALUBUcNACACQdAFaiAZQQEQvQEgAigC2AUhGQsgAigC0AUgGUEEdGoiGyAMNgIIIBsgIDYCBCAbIAs2AgAgG0EMaiAfNgIAIAIgGUEBajYC2AUCQCACKALoBSACKALkBUcNACACQeAFakEBEK0CCyACQeAFahC4AiACKALoBUECdGogCzYCACACIAIoAugFQQFqNgLoBQsgAkHwBWogAkGIBWogBEEEaigCACAEKAIAEBsgAigC+AUhGyACKAKIBiELIAIoAugFIRkgAkEgaiACQeAFahCWAiACKAIkIiAgGUF/aiIZTQ0TIAIoAiAgGUECdCIgaigCACEfIAJBGGogAkHgBWoQmAIgAigCHCIMIBlNDRQgBEEQaiEEIAsgG2siGSAXaiEXIAIoAhggIGogHyAZajYCACAYKAIAIRsgFhDXAiAWEI8CIAZBcGoiBkUNFQwACwsgCSAZEKoBAAsgAiACKQL0BTcD+ARBhIHAAEErIAJB+ARqQbCBwAAQlAEAC0GIgsAAIBsgHxCoAQALQYiCwAAgGkF/aiAYEKgBAAtBgIDAAEErQfSAwAAQ1gEACyAGIBkQqgEACyACIAIpAvQFNwP4BEGEgcAAQSsgAkH4BGpBsIHAABCUAQALIBsgGBCqAQALIAIgAikC9AU3A/gEQYSBwABBKyACQfgEakGwgcAAEJQBAAtBiILAACAWIBsQqAEAC0GIgsAAIBkgGBCoAQALQYCAwABBK0H0gMAAENYBAAsgHSAZEKoBAAsgAiACKQL0BTcD+ARBhIHAAEErIAJB+ARqQbCBwAAQlAEACyAJIBgQqgEACyACIAIpAvQFNwP4BEGEgcAAQSsgAkH4BGpBsIHAABCUAQALIBkgGxCqAQALIAIgAikC9AU3A/gEQYSBwABBKyACQfgEakGwgcAAEJQBAAtBiILAACAZICAQqAEAC0GYgsAAIBkgDBCoAQALIAIoAtAFISAgAigC2AUiGQ0BC0EAIQYMAQsgGUEEdCEWICBBCGohGSACQfAFakEQaiEbQQAhGEEAIQZBACEEAkADQCACQRBqIAJB4AVqEJYCIAIoAhQiASAETQ0BIAJB8AVqIAJBiAVqIAIoAhAgGGooAgAgGSgCABAbIAIoAvgFIQEgAigCiAYhCyAbENcCIBsQjwIgGUEQaiEZIBhBBGohGCAEQQFqIQQgCyAGaiABayEGIBZBcGoiFkUNAgwACwtBiILAACAEIAEQqAEACxDUAiACQYgFaiAaICNqIBdqIAZqIB0QKyACQYgFaiAVIApqIAkQKyACKALoBCEGAkAgAigC8AQiGUUNACAZQQR0IRhBACEXIAYhGQNAAkAgGUEIaiIaKAIAIgQgF0YNACACQYgFaiACQeAFakEAELYBIAQQKwsgAkGIBWogGUEEaigCACAZKAIAECsgGigCACEXIBlBEGohGSAYQXBqIhgNAAsLAkAgAigCyAUiGEUNACACKALABSEZIBhBDGwhGCACQYAFaiEEA0AgAkEIaiAZEJcCIAIoAgghFyACIAIoAgwiGkEAELQBIAJBADYC+AUgAiACKQMANwPwBSACQfAFaiAXIBoQpwIgBCACKAL4BTYCACACIAIpA/AFNwP4BCACQYgFaiACQfgEaiAkEDsgGUEMaiEZIBhBdGoiGA0ACwsgACACKQOIBTcCBCAAQQA2AgAgAEEMaiACQZAFaigCADYCACACQeAFahDWAiACQeAFahCLAgJAIAIoAtQFIhlFDQAgICAZQQR0QQQQqwILIAJBwAVqENQBAkAgAigCxAUiGUUNACACKALABSAZQQxsQQQQqwILIAJBsAVqENQBAkAgAigCtAUiGUUNACACKAKwBSAZQQxsQQQQqwILIAJBoAVqENQBAkAgAigCpAUiGUUNACACKAKgBSAZQQxsQQQQqwILAkAgAigC7AQiGUUNACAGIBlBBHRBBBCrAgsCQCACKALcBCIZRQ0AIAIoAtgEIBlBA3RBBBCrAgsCQCACKALMBCIZRQ0AIAIoAsgEIBlBDGxBBBCrAgsgAkG4BGoQ1gIgAkG4BGoQiwICQCACKAKsBCIZRQ0AIAIoAqgEIBlBA3RBBBCrAgsCQCACKAKcBCIZRQ0AIAIoApgEIBlBA3RBBBCrAgsgAkGIBGoQoAECQCACKAKMBCIZRQ0AIAIoAogEIBlBBXRBBBCrAgsgAkH4A2oQ1wIgAkH4A2oQjwILIAJBkAJqECYgAkGQBmokAA8LIBhBFGooAgAhJQJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgGEEMai0AAEF6akH/AXEiGUEBakEAIBlBDEkbQX9qIhlBCUsNAAJAAkACQAJAIBkOCgABAgQEBAQEBAMACwJAIBFBAUYNACACQaABaiABEJcCIAIoAqQBIhggF0EBaiIZSQ0FIAJB8AVqIAIoAqABIBlqIBggGWsQRCACKALwBUEBRg0GIAIoAvgFIRggAkGYAWogARCXAiACKAKcASIaIBggGWoiGUkNByACQfAFaiACKAKYASAZaiAaIBlrEEQgAigC8AVBAUYNCEEBIREgGCACKAL4BWpBAWohJiAlISAgFyEeDAQLQbCDwABBIEGgg8AAEPQBAAsgAkGwAWogARCXAiACKAK0ASIYIBdBAWoiGUkNByACQfAFaiACKAKwASAZaiAYIBlrEEQgAigC8AVBAUYNCCACKAL4BSEYIAJBqAFqIAEQlwIgAigCrAEiGiAYIBlqIhlJDQkgAkHwBWogAigCqAEgGWogGiAZaxBEIAIoAvAFQQFGDQoCQCAQQQFGDQBBASEQIBggAigC+AVqQQFqIScgFyEhDAMLQeCDwABBIkHQg8AAEPQBAAsgAkHAAWogARCXAiACKALEASIYIBdBAWoiGUkNCiACQfAFaiACKALAASAZaiAYIBlrEEQgAigC8AVBAUYNCyACKAL4BSEYIAJBuAFqIAEQlwIgAigCvAEiGiAYIBlqIhlJDQwgAkHwBWogAigCuAEgGWogGiAZaxBEIAIoAvAFQQFGDQ0gD0EBRg0UAkAgDEUNACAMQQxsIRYgDCACKAL0BWohI0EAIRggByEaIAYhGQNAIAIoApAEIh8gGSgCACIbTQ0QAkAgAigCiAQgG0EFdGotABRFDQAgCyAYTQ0SIBpBATYCACAaQQRqICMgCmo2AgAgGSgCACEbAkAgCiACKALcBEcNACACQdgEaiAKQQEQvwEgAigC4AQhCiACKALYBCIFIQggBSEJCyAJIApBA3RqIh8gGzYCBCAfIBg2AgAgAiAKQQFqIgo2AuAECyAYQQFqIRggGUEMaiEZIBpBCGohGiAWQXRqIhYNAAsLENQCQQEhDyAlISMgFyEiDAELAkACQCAOQQFGDQAgFkEBRw0RIAJB0AFqIAEQlwIgAigC1AEiGSAsQiCIp0EBaiIdSQ0SIAJB8AVqIAIoAtABIB1qIBkgHWsQRCACKALwBUEBRg0TIAIoAvgFIRkgAkHIAWogARCXAiACKALMASIXIBkgHWoiGEkNFCACQfAFaiACKALIASAYaiAXIBhrEEQgAigC8AVBAUcNASACIAIpAvQFNwOIBUGEgcAAQSsgAkGIBWpBsIHAABCUAQALQciEwABBKkG4hMAAEPQBAAsgAigC+AUgGWohHEEBIQ4gJSEkCyAlrUIghiEsQQEhFgwVCyAZIBgQqgEACyACIAIpAvQFNwOIBUGEgcAAQSsgAkGIBWpBsIHAABCUAQALIBkgGhCqAQALIAIgAikC9AU3A4gFQYSBwABBKyACQYgFakGwgcAAEJQBAAsgGSAYEKoBAAsgAiACKQL0BTcDiAVBhIHAAEErIAJBiAVqQbCBwAAQlAEACyAZIBoQqgEACyACIAIpAvQFNwOIBUGEgcAAQSsgAkGIBWpBsIHAABCUAQALIBkgGBCqAQALIAIgAikC9AU3A4gFQYSBwABBKyACQYgFakGwgcAAEJQBAAsgGSAaEKoBAAsgAiACKQL0BTcDiAVBhIHAAEErIAJBiAVqQbCBwAAQlAEAC0GIgsAAIBsgHxCoAQALQZiCwAAgGCALEKgBAAtB8oTAAEEYELcBAAsgHSAZEKoBAAsgAiACKQL0BTcDiAVBhIHAAEErIAJBiAVqQbCBwAAQlAEACyAYIBcQqgEAC0GUhMAAQSRBhITAABD0AQALIBhBFGotAAAhGyACQfgBaiAYQQRqEJUBIAIoAvgBIRogAigC/AEhGSACQfABaiAYQQxqEJUBIAIgGzoAmAUgAiAZNgKMBSACIBo2AogFIAIgAikD8AE3A5AFIBcgHiAmaiAVQQFxGyAXIBFBAUYiGBshFyAYIBVyIRUCQANAAkAgGQ0AQQAhGAwCCyAZQX9qIRkgGi0AACEYIBpBAWohGiAYQQFHDQALENUCQQEhGAsgAkGQAmoQGSEaIAItAJgFIRsgAkHoAWogAkGIBWoQlQEgAigC7AEhHyACKALoASElIAJB4AFqIAMQlQEgAigC5AEhKCACKALgASEpAkAgAigCkAQiGSACKAKMBEcNACACQYgEaiAZQQEQvgEgAigCkAQhGQsgAigCiAQgGUEFdGoiGSAbOgAQIBkgKTYCCCAZIB82AgQgGSAlNgIAIBkgAi8A8AU7ABEgGSAYOgAUIBkgAi8A+AQ7ABUgGSAXNgIYIBlBDGogKDYCACAZQRNqIAJB8AVqQQJqLQAAOgAAIBlBF2ogAkH4BGpBAmotAAA6AAAgGUEcaiAaNgIAIAIgAigCkARBAWo2ApAEIAJB2AFqIAEQlwICQCACKALcASIZIBdNDQACQCACKALYASAXaiIZLQAAQeAARw0AIAJBiAVqENgBDAMLIAJBhAVqQQE2AgAgAkGEBmpBAjYCACACIBk2AtAFIAJCAzcC9AUgAkHkgsAANgLwBSACQQE2AvwEIAJBqILAADYC4AUgAiACQfgEajYCgAYgAiACQeAFajYCgAUgAiACQdAFajYC+AQgAkHwBWpBkIPAABDOAQALQYiCwAAgFyAZEKgBAAsgGEEUai0AAA0AAkAgAigCkAQiGSAYQRhqKAIAIhhLDQBBiILAACAYIBkQqAEACyAXICEgJ2ogFEEBcRsgFyAQQQFGIhobIRcgAkGQAmoQGSEbAkAgDCACKALMBEcNACACQcgEaiAMQQEQwgEgAigCyAQhBiACKALQBCEMCyAGIAxBDGxqIhkgFzYCBCAZIBg2AgAgGUEIaiAbNgIAIAIgDEEBaiIMNgLQBAJAIAsgAigCrARHDQAgAkGoBGogC0EBEMABIAIoAqgEIQcgAigCsAQhCwsgGiAUciEUIAcgC0EDdGpBADYCACACIAtBAWoiCzYCsAQMAAsLzSYCCX8FfiMAQfAAayIBJAACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAALQAAIgIOKgIDBgEEBgUXGRlQTUo4R0EpEhMICAsMDQ07DgARPgkKNQ8PEAdEFRYkFAILIABBBGooAgBBAkcNGSAAEBwgAEEBOgDgASAAQRM6AAAMUwtBmK3AAEETQYitwAAQ9AEAC0G8rcAAQRVBrK3AABD0AQALIAFBIGogACgCKCAAQSxqKAIAEHIgASgCIEEBRg1OIAFBEGpBCGogAUEgakEEciICQQhqKQIAIgo3AwAgAUHQAGpBCGogAUHAAGopAwAiCzcDACABQeAAaiABQcgAaikDACIMNwMAIAEgAikCACINNwMQIAEgAUE4aikDACIONwNQIAFBNGooAgAhAiAAQThqIAo3AwAgACANNwMwIABBwABqIAI2AgAgAEHEAGogDjcCACAAQcwAaiALNwIAIABB1ABqIAw3AgAgABAcIABBBGogAjYCACAAQQI6AAAMUAsgAkEERw0sIABBDGotAABBempB/wFxIgJBAWpBACACQQxJGyICQQxLDSwgAg4NE0pHRDJBPjsuODUvLRMLIABBADYCvAEgAEHkAGpBEjoAACAAEBwgAEEFOgAACyAAECAiAg1MDE0LIAAQHCAAQQA6AOABIABBEzoAAAxMCyAAKALMAUUNEiABQSBqIABBzAFqEAEgASgCIEEBRg1JIAFB0ABqQQhqIgIgAUEgakESaikBADcDACABQd4AaiIDIAFBIGpBGGopAQA3AQAgASABQSBqQQpqKQEANwNQIAEvASgiBEEGRg0TIAAQHCAAQQhqIAQ7AAAgAEEUOgAAIABBCmogASkDUDcAACAAQRJqIAIpAwA3AAAgAEEYaiADKQEANwAADEsLIAAQ2gEMSgsgABAcIABBAjoA4AEgAEETOgAADEkLIAAtAOABIgJBA0YNEQJAIAIOAyQjACQLIAAQ2gEMJAsgAEGsAWooAgBFDREgAUEgaiAAQagBaiIFEIoBIAEoAiBBAUYNRSABQdAAakEQaiABQSBqQQRyIgJBEGooAgAiBDYCACABQdAAakEIaiACQQhqKQIANwMAIAEgAikCADcDUAJAAkACQCAEQdCGA0sNAEEAIQIgAUEIaiAEQQAQmgEgAUEANgIYIAEgASgCDDYCFCABIAEoAggiBjYCEAJAIARFDQBBACEDA0AgAUEgaiABQdAAahBlAkAgASgCIEEBRw0AIAEoAiQhAiABQRBqIQMMJgsgAyABKAIkIgdqIgggA0kNAyAIQdCGA0sNJCABLQAoIQMCQCACIAEoAhRHDQAgAUEQaiACQQEQxgEgASgCGCECIAEoAhAhBgsgBiACQQN0aiIJIAM6AAQgCSAHNgIAIAEgAkEBaiICNgIYIAghAyAEQX9qIgQNAAsLIAFBIGogBRBTIAEoAiBBAUcNAiABKAIkIQIgAUEQaiEDDCMLQZGpwABBHCABKAJcIAEoAlhqQX9qEJwBIQIMSAtBranAAEEdIAEoAlwgASgCWGpBf2oQnAEhAiABQRBqIQMMIQsgACABQSBqQQRyIgIpAgA3AswBIABB1AFqIAJBCGopAgA3AgAgAUEgakEIaiABQRBqQQhqKAIAIgI2AgAgASABKQMQNwMgAkAgAiABKAIkIgNGDQAgAUEgaiACEIkBIAEoAiQhAwsgASgCICECIAAQHCAAQQhqIAM2AgAgAEEEaiACNgIAIABBFzoAAAxHCyAAKALMAUUNEQJAIABB1AFqKAIAIgMgAEHQAWooAgBPDQAgAUEgaiAAQcwBahABIAEoAiBBAUYNRSABQdAAakEQaiABQSBqQRhqKQMAIgo3AwAgAUHQAGpBCGogAUEgakEQaiICKQMAIgs3AwAgASABKQMoIgw3A1AgAUE3aiIDIAo3AAAgAUEvaiALNwAAIAEgDDcAJyAAEBwgAEEYOgAAIAAgASkAIDcAASAAQQlqIAFBIGpBCGopAAA3AAAgAEERaiACKQAANwAAIABBGGogAykAADcAAAxHCyACQRhHDR0gAEEIai8BAEEGRw0dIAAQHCAAQQA2AswBIABBGToAACAAQawBakEANgIADEYLIABBrAFqQQA2AgAMLAsgACgCtAEiA0UNEAJAIABBuAFqKAIAIgJFDQAgACACIAJBoI0GIAJBoI0GSRsiBGs2ArgBIAAgAyAEajYCtAEgABAcIABBCGogBDYCACAAQQRqIAM2AgAgAEEiOgAADEULIAAQHCAAQQA2ArQBIABBIzoAAAxECyAAEBwgAEEgOgAADEMLIAAQHCAAQR06AAAMQgsgAEEANgK8ASAAQeQAakESOgAAIAAQHCAAQQU6AAAMQQsgAEEANgK8ASAAQeQAakESOgAAIAAQHCAAQQU6AAAMQAsgAEEANgK8ASAAQeQAakESOgAAIAAQHCAAQQU6AAAMPwsgAEHkAGotAABBEkYNCyABQQA2AiggASAAQegAaigCADYCLCABIABB7ABqKQIANwMgIAFB0ABqIAFBIGoQRiABKAJUIQIgASgCUEEBRg09IAAgAjYC3AEgACABKQMgNwK8ASAAQcQBaiABQShqKQMANwIACyAAEFQiAg08DD0LIAJBB0cNCiAALQABIgJBBUsNCiACDgYAEAAPDgsACyAAENMBCyAAEGAiAg05DDoLIAAQFiICRQ05DDgLQcinwABBDxC3AQALIABBADYCzAEgABAcIABBFToAAAw3C0GcrMAAQShB+KzAABD0AQALQYSpwABBDRC3AQALQcinwABBDxC3AQALQeSswABBBBC3AQALQa+rwABBBxC3AQALQZyswABBKEHErMAAEPQBAAsgAEHkAGotAABBEkYNASABQSBqIABB3ABqENABIAEoAiBBAUYNLiABQdAAakEIaiABQSBqQQRyIgJBCGopAgAiCjcDACABIAIpAgAiCzcDUCABQTRqKAIAIQIgAEEMNgJ0IAAgAjYC3AEgAEH4AGogCzcCACAAQYABaiAKNwIAIABBiAFqIAI2AgALIAAQZCICDS4MLwtBr6vAAEEHELcBAAsCQCAAQeQAai0AAEESRg0AIAFBIGogAEHcAGoQ0QEgASgCIEEBRg0sIAFB0ABqQRhqIAFBIGpBBHIiAkEYaigCACIDNgIAIAFB0ABqQRBqIAJBEGopAgAiCjcDACABQdAAakEIaiACQQhqKQIAIgs3AwAgASACKQIAIgw3A1AgAUHAAGooAgAhAiAAQQ02AnQgACACNgLcASAAQfgAaiAMNwIAIABBgAFqIAs3AgAgAEGIAWoiBCAKNwIAIABBkAFqIgggAzYCACAAQZQBaiACNgIAIAFBK2ogCCgAADYAACABIAQpAAA3ACMgABAcIABBJjoAACAAQQFqIgIgASkAIDcAACACQQdqIAFBIGpBB2opAAA3AAAMLgtBr6vAAEEHELcBAAsCQCAAQeQAai0AAEESRg0AIAFBIGogAEHcAGoQ0gEgASgCIEEBRg0rIAEpAiQhCiAAEBwgAEEEaiAKNwIAIABBKToAAAwtC0Gvq8AAQQcQtwEACyAAQeQAai0AAEESRg0BIAFBIGogAEHcAGoQvAEgASgCIEEBRg0pIAFB0ABqQQhqIAFBIGpBBHIiAkEIaikCACIKNwMAIAEgAikCACILNwNQIABBCzYCdCAAQfgAaiALNwIAIABBgAFqIAo3AgALIAAQBSICDSkMKgtBr6vAAEEHELcBAAtByqnAAEEfIABB2AFqKAIAIANqEJwBIQIMJwtBranAAEEdIAEoAlwgASgCWGpBf2oQnAEhAiABQRBqIQMLIAMoAgQiBEUNJSADKAIAIARBA3RBBBCrAgwlCyAAEBYiAkUNAQwkCyAAEBwgAEElOgAACyAAQQM6AOABDCMLQZyswABBKEGMrMAAEPQBAAsCQCAAQeQAai0AAEESRg0AIAFBIGogAEHcAGoQ6QEgASgCJCECIAEoAiBBAUYNISAAEBwgAEEEaiACNgIAIABBEjoAAAwiC0Gvq8AAQQcQtwEACwJAIABB5ABqLQAAQRJGDQAgAUEgaiAAQdwAahDoASABKAIkIQIgASgCIEEBRg0gIAAQHCAAQQRqIAI2AgAgAEEROgAADCELQa+rwABBBxC3AQALIABB5ABqLQAAQRJGDQEgAUEgaiAAQdwAahDlASABKAIgQQFGDR0gAUHQAGpBCGogAUEgakEEciICQQhqKQIAIgo3AwAgASACKQIAIgs3A1AgAUE0aigCACECIABBAjYCdCAAIAI2AtwBIABB+ABqIAs3AgAgAEGAAWogCjcCACAAQYgBaiACNgIACyAAEDQiAg0dDB4LQa+rwABBBxC3AQALIABB5ABqLQAAQRJGDQEgAUEgaiAAQdwAahDmASABKAIgQQFGDRogAUHQAGpBCGogAUEgakEEciICQQhqKQIAIgo3AwAgASACKQIAIgs3A1AgAUE0aigCACECIABBCTYCdCAAIAI2AtwBIABB+ABqIAs3AgAgAEGAAWogCjcCACAAQYgBaiACNgIACyAAEEEiAg0aDBsLQa+rwABBBxC3AQALIABB5ABqLQAAQRJGDQEgAUEgaiAAQdwAahDgASABKAIgQQFGDRcgAUHQAGpBCGogAUEgakEEciICQQhqKQIAIgo3AwAgASACKQIAIgs3A1AgAUE0aigCACECIABBATYCdCAAIAI2AtwBIABB+ABqIAs3AgAgAEGAAWogCjcCACAAQYgBaiACNgIACyAAEEoiAg0XDBgLQa+rwABBBxC3AQALIABB5ABqLQAAQRJGDQEgAUEgaiAAQdwAahDnASABKAIgQQFGDRQgAUHQAGpBCGogAUEgakEEciICQQhqKQIAIgo3AwAgASACKQIAIgs3A1AgAUE0aigCACECIABBAzYCdCAAIAI2AtwBIABB+ABqIAs3AgAgAEGAAWogCjcCACAAQYgBaiACNgIACyAAECIiAg0UDBULQa+rwABBBxC3AQALIABB5ABqLQAAQRJGDQEgAUEgaiAAQdwAahDhASABKAIgQQFGDREgAUHQAGpBCGogAUEgakEEciICQQhqKQIAIgo3AwAgASACKQIAIgs3A1AgAUE0aigCACECIABBBDYCdCAAIAI2AtwBIABB+ABqIAs3AgAgAEGAAWogCjcCACAAQYgBaiACNgIACyAAEFUiAg0RDBILQa+rwABBBxC3AQALIABB5ABqLQAAQRJGDQEgAUEgaiAAQdwAahDjASABKAIgQQFGDQ4gAUHQAGpBCGogAUEgakEEciICQQhqKQIAIgo3AwAgASACKQIAIgs3A1AgAUE0aigCACECIABBBjYCdCAAIAI2AtwBIABB+ABqIAs3AgAgAEGAAWogCjcCACAAQYgBaiACNgIACyAAEEkiAg0ODA8LQa+rwABBBxC3AQALIABB5ABqLQAAQRJGDQEgAUEgaiAAQdwAahDkASABKAIgQQFGDQsgAUHQAGpBCGogAUEgakEEciICQQhqKQIAIgo3AwAgASACKQIAIgs3A1AgAUE0aigCACECIABBCDYCdCAAIAI2AtwBIABB+ABqIAs3AgAgAEGAAWogCjcCACAAQYgBaiACNgIACyAAEEAiAg0LDAwLQa+rwABBBxC3AQALIABB5ABqLQAAQRJGDQEgAUEgaiAAQdwAahDfASABKAIgQQFGDQggAUHQAGpBCGogAUEgakEEciICQQhqKQIAIgo3AwAgASACKQIAIgs3A1AgAUE0aigCACECIABBBTYCdCAAIAI2AtwBIABB+ABqIAs3AgAgAEGAAWogCjcCACAAQYgBaiACNgIACyAAEGMiAg0IDAkLQa+rwABBBxC3AQALIABB5ABqLQAAQRJGDQEgAUEgaiAAQdwAahDiASABKAIgQQFGDQUgAUHQAGpBCGogAUEgakEEciICQQhqKQIAIgo3AwAgASACKQIAIgs3A1AgAUE0aigCACECIABBBzYCdCAAIAI2AtwBIABB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CyADELkCIAMoAghqQQs6AAAgAyADKAIIQQFqIgQ2AgggA0EAIAQQswEgAEEIaiADKAIINgIAIAAgAykDADcCACADQRBqJAALmAQCB38BfiMAQdAAayIBJAAgAEGkAWoiAi0AACEDIAJBAjoAAAJAAkACQCADQQJGDQAgAUEgaiAAQZwBaigCACAAQaABaigCACAAKAKYASADQQBHEG0CQCABKAIgQQFHDQAgASgCJCEDDAMLIAFBCGpBEGogAUEgakEEciIDQRBqKQIAIgg3AwAgAUEIakEIaiADQQhqKQIANwMAIAEgAykCADcDCCAIpyICQYCt4gRNDQFBvajAAEEdQQAQnAEhAwwCC0GwqMAAQQ0QtwEAC0EAIQMgASACQQAQmQEgAUEANgJIIAEgASgCBDYCRCABIAEoAgAiBDYCQAJAIAJFDQADQCABQSBqIAFBCGoQNgJAIAEoAiBBAUcNACABKAIkIQMgASgCRCICRQ0DIAEoAkAgAkEDdEEEEKsCDAMLIAEoAighBSABKAIkIQYCQCADIAEoAkRHDQAgAUHAAGogA0EBEMcBIAEoAkghAyABKAJAIQQLIAQgA0EDdGoiByAFNgIEIAcgBjYCACABIANBAWoiAzYCSCACQX9qIgINAAsLIAFBIGpBCGogAUHAAGpBCGooAgAiAzYCACABIAEpA0A3AyACQCADIAEoAiQiAkYNACABQSBqIAMQhwEgASgCJCECCyABKAIgIQMgABAcIABBCGogAjYCACAAQQRqIAM2AgAgAEEcOgAAQQAhAwsgAUHQAGokACADC+sDAgZ/AX4jAEEwayICJAAgAUEgaiIDLQAAIQQgA0ESOgAAIAJBDGpBAmoiAyABQSNqLQAAOgAAIAIgAUEhai8AADsBDAJAAkACQAJAIARBEkcNACACQRBqIAEQUSACKAIQQQFHDQEgACACKAIUNgIEIABBATYCAAwDCyABQRhqKQIAIQggAkEIakECaiADLQAAOgAAIAIgAi8BDDsBCCABQSRqKAAAIQMgAUEoaigAACEFDAELIAJBCmogAkEfai0AADoAACACIAIvAB07AQggAkEcai0AACEEIAJBIGooAgAhAyACQSRqKAIAIQUgAikCFCEICyACQQRqQQJqIAJBCGpBAmotAAA6AAAgAiACLwEIOwEEAkAgASADIAVqIgMQ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AiADEKgBAAtB+LvAACACIAMQqAEAC0GIvMAAIAIgAxCoAQALIAAgAUEDdkH4////AXFqIQALIAApAwBCASABQT9xrYaDQgBSC60CAgZ/AX4jAEEQayICJAAgAkEIaiABEGYgAiACKQMIIgg3AwACQAJAAkACQAJAAkAgCKdB/wFxIgNBAUsNACADDgIBAgELIAJBBHIQ7wELIAJBCGogARBGIAIoAgwhAyACKAIIQQFGDQEgASgCDCEEAkAgASgCBCIFIAEoAggiBiADaiIHTw0AQeSbwABBLyAEIAVqEJwBIQEgAEEBNgIAIAAgATYCBAwECyAHIAZJDQIgASAHNgIIIABBADYCACAAQRBqIAQgBmo2AgAgAEEMaiADNgIAIAAgCEIIiKdB/wFxNgIEIABBCGogASgCACAGajYCAAwDCyAAQQE2AgAgACAIQiCIPgIEDAILIABBATYCACAAIAM2AgQMAQsgBiAHEKoBAAsgAkEQaiQAC68CAgN/AX4jAEHQAGsiAyQAIAMgAjYCPAJAIAAoAgwgAk0NACADQRBqIANBPGpBAhCjAiADKQMQIQYgA0EIaiAAQQxqQQIQowIgA0EsakECNgIAIAMgBjcDQCADQgI3AhwgA0H8hcAANgIYIAMgAykDCDcDSCADIANBwABqNgIoIANBGGpBjIbAABDOAQALIAEoAgghBCADQRhqIAAgACgCECACaiIFIAUQnwEgA0HIAGoiBSABKAIINgIAIAMgASkCADcDQCADQTRqIANBwABqELkCIgE2AgAgA0EwaiADKAJENgIAIANBOGogASAFKAIAajYCACADIAE2AiwgA0EYahBSIANBGGoQmwEgA0EsahDNASAAIAI2AgwgACAEIAAoAhBqNgIQIANB0ABqJAALnAICAn8BfkEAIQYCQCABKAIEIgcgAmsgA08NACACIANqIgMgAkkhAgJAAkACQAJAIAVFDQAgAkUNASAAIAM2AgQgAEEIakEANgIADAMLIAJFDQEgACADNgIEIABBCGpBADYCAAwCCyAHQQF0IgIgAyACIANLGyEDCwJAIAOtQgx+IghCIIinRQ0AIABBCGpBADYCAAwBCwJAIAinIgJBf0oNACAAQQhqQQA2AgAMAQsCQAJAIAcNACACQQQQnQIhBQwBCyABKAIAIAdBDGxBBCACEJUCIQULAkAC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QQxGDQEgAUEUakEBNgIAIAFCAjcCBCABQfSkwAA2AgAgAUEPNgIcIAFB9KvAADYCGCABIAFBGGo2AhAgAUH8q8AAEM4BAAsgABASIQIMAQsgASAAQfgAahBnIAEoAgQhAiABKAIAQQFGDQAgABAcIABBBGogAjYCACAAQSg6AAAgACAAKALcAUF/ajYC3AFBACECCyABQSBqJAAgAguwAQICfwF+IwBBEGsiAiQAIAJBCGogARBGIAIoAgwhAwJAAkACQCACKAIIQQFGDQAgAkEIaiABEDIgAiACKQMIIgQ3AwACQAJAIASnQf8BcSIBQQFLDQAgAQ4CAQMBCyACQQRyEPEBCyAAIAM2AgQgAEEANgIAIABBCGogBEIIiKc6AAAMAgsgAEEBNgIAIAAgAzYCBAwBCyAAQQE2AgAgACAEQiCIPgIECyACQRBqJAALsQEBA38jAEEQayICJAAgAkEIaiABEJIBQQEhAyACKAIMIQQCQAJAIAIoAghBAUYNAAJAAkACQAJAAkAgBEECSw0AIAQOAwECAwELIABBBGpBrZvAAEERIAEoAgwgASgCCGpBf2oQnAE2AgBBASEDDAULQQAhAyAAQQA6AAEMBAsgAEEBOgABDAELIABBAjoAAQtBACEDDAELIABBBGogBDYCAAsgACADOgAAIAJBEGokAAuqAQEDfyMAQRBrIgIkACACQQhqIAEQRkEBIQMgAigCDCEEAkACQAJAIAIoAghBAUYNAAJAIARBAUYNACAAQb6bwABBFCABKAIMIAEoAghqQX9qEJwBNgIEQQEhAwwDCyACQQhqIAEQRkEBIQMgAigCDCEBIAIoAghBAUYNASAAIAE2AgRBACEDDAILIAAgBDYCBAwBCyAAIAE2AgQLIAAgAzYCACACQRBqJAALoAEBAX8jAEHAAGsiAyQAIANBMGogASACIAIQkgIgA0EIaiADQTBqELEBIANBIGogAygCCCADKAIMEKwCIANBMGpBCGoiAiADQSBqQQhqKAIANgIAIAMgAykDIDcDMCADQRBqIANBMGoQrAEgAiADQRBqQQhqKAIANgIAIAMgAykDEDcDMCADIANBMGoQsQEgACADKQMANwIAIANBwABqJAALoQEBBX8jAEEQayIDJAAgA0EIaiABEEZBASEEIAMoAgwhBQJAAkACQCADKAIIQQFGDQBBACEEQQAhBgJAIAJFDQAgA0EIaiABEEZBASEGIAMoAgwhByADKAIIQQFGDQILIAAgBTYCBCAAQQxqIAc2AgAgAEEIaiAGNgIADAILIAAgBTYCBAwBCyAAIAc2AgRBASEECyAAIAQ2AgAgA0EQaiQAC7kBAQF/AkAgAEGAgARJDQACQAJAIABBgIAISQ0AQQAhASAAQeKLdGpB4o0sSQ0BIABBn6h0akGfGEkNASAAQd7idGpBDkkNASAAQf7//wBxQZ7wCkYNASAAQamydWpBKUkNASAAQcuRdWpBC0kNASAAQZD8R2pBj/wLSw8LIABBycHAAEEjQY/CwABBpgFBtcPAAEGYAxAfIQELIAEPCyAAQZi8wABBKUHqvMAAQaUCQY+/wABBugIQHwuSAQEDfyMAQYABayICJAAgAC0AACEDQQAhAANAIAIgAGpB/wBqIANBD3EiBEEwciAEQdcAaiAEQQpJGzoAACAAQX9qIQAgA0EEdkEPcSIDDQALAkAgAEGAAWoiA0GBAUkNACADQYABEKoBAAsgAUEBQai5wABBAiACIABqQYABakEAIABrEA8hACACQYABaiQAIAALkQEBA38jAEGAAWsiAiQAIAAtAAAhA0EAIQADQCACIABqQf8AaiADQQ9xIgRBMHIgBEE3aiAEQQpJGzoAACAAQX9qIQAgA0EEdkEPcSIDDQALAkAgAEGAAWoiA0GBAUkNACADQYABEKoBAAsgAUEBQai5wABBAiACIABqQYABakEAIABrEA8hACACQYABaiQAIAALmQEBAX8jAEEgayIFJAAgBSADNgIUQQAhAyAFQQA2AhAgBSACNgIMIAUgATYCCCAFQRhqIAVBCGoQRiAFKAIcIQECQAJAIAUoAhhBAUYNACAAIAUpAwg3AgQgAEEYaiAEOgAAIABBFGogATYCACAAQQxqIAVBEGopAwA3AgAMAQsgACABNgIEQQEhAwsgACADNgIAIAVBIGokAAuOAQEDfyMAQRBrIgMkACAAIAAoAgggAiABa0EDdhDBASAAKAIIIQQCQCACIAFGDQAgACgCACAEQQxsaiEFA0AgAyABQQRqKAIAEF0gBUEIaiADQQhqKAIANgIAIAUgAykDADcCACAEQQFqIQQgBUEMaiEFIAIgAUEIaiIBRw0ACwsgACAENgIIIANBEGokAAuPAQEDfyMAQYABayICJAAgACgCACEDQQAhAANAIAIgAGpB/wBqIANBD3EiBEEwciAEQdcAaiAEQQpJGzoAACAAQX9qIQAgA0EEdiIDDQALAkAgAEGAAWoiA0GBAUkNACADQYABEKoBAAsgAUEBQai5wABBAiACIABqQYABakEAIABrEA8hACACQYABaiQAIAALjgEBA38jAEGAAWsiAiQAIAAoAgAhA0EAIQADQCACIABqQf8AaiADQQ9xIgRBMHIgBEE3aiAEQQpJGzoAACAAQX9qIQAgA0EEdiIDDQALAkAgAEGAAWoiA0GBAUkNACADQYABEKoBAAsgAUEBQai5wABBAiACIABqQYABakEAIABrEA8hACACQYABaiQAIAALmAEBAn8jAEEQayIDJAAgAyABEI4BIAMoAgQhBAJAAkAgAygCAEEBRg0AAkAgBCACSw0AIANBCGooAgAhASAAIAQ2AgQgAEEANgIAIABBCGogATYCAAwCC0HBmcAAQSkgASgCDCABKAIIakF/ahCcASEBIABBATYCACAAIAE2AgQMAQsgAEEBNgIAIAAgBDYCBAsgA0EQaiQAC5IBAQF/IwBBIGsiAyQAIANCADcDECADIAI2AgwgAyABNgIIIANBGGogA0EIahBQQQEhASADKAIcIQICQAJAIAMoAhhBAUYNACAAIAMpAwg3AgQgAEEkakESOgAAIABBFGogAjYCACAAQQxqIANBEGopAwA3AgBBACEBDAELIAAgAjYCBAsgACABNgIAIANBIGokAAuVAQEBfyMAQSBrIgQkACAEIAM2AhQgBEEANgIQIAQgAjYCDCAEIAE2AgggBEEYaiAEQQhqEEYgBCgCHCEBAkACQCAEKAIYQQFGDQACQCAEKAIQIgIgBCgCDEkNACAAIAE2AgRBACEDDAILQc+PwABBLCACIANqEJwBIQELIAAgATYCBEEBIQMLIAAgAzYCACAEQSBqJAALlQEBAX8jAEEgayIEJAAgBCADNgIUIARBADYCECAEIAI2AgwgBCABNgIIIARBGGogBEEIahBGIAQoAhwhAQJAAkAgBCgCGEEBRg0AAkAgBCgCECICIAQoAgxJDQAgACABNgIEQQAhAwwCC0H3kMAAQScgAiADahCcASEBCyAAIAE2AgRBASEDCyAAIAM2AgAgBEEgaiQAC48BAgN/An4jAEEQayID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IAEQMSEBIAJBIGokACABDwsgAkEgaiQAQQELcwECfwJAAkAgASgCCCICQQRqIgMgASgCBE0NACAAQc6VwABBDiABKAIMIAJqEJwBNgIEQQEhAQwBCwJAIAJBfEkNACACIAMQqgEACyABKAIAIAJqKAAAIQIgASADNgIIIAAgAjYCBEEAIQELIAAgATYCAAtsAQJ/IwBBIGsiASQAIAEgABABAkACQCABKAIAQQFGDQAgAUEIai8BACECA0ACQCACQf//A3FBBkcNAEEAIQIMAwsgASAAEAEgAS8BCCECIAEoAgBBAUcNAAsLIAEoAgQhAgsgAUEgaiQAIAILdQEBfwJAAkACQAJAIAAoAgQiAiABSQ0AAkAgAUUNACACIAFGDQQgACgCACACQQEgARCVAiICDQIgAUEBELQCAAsgABCOAiAAQQE2AgBBACEBDAILQcyMwABBJEGQjcAAENYBAAsgACACNgIACyAAIAE2AgQLC3UAIAAgATYCKCAAQQM6AOABIABBADYCdCAAQQE6AAAgAEEANgLcASAAQQA2AswBIABBADYCvAEgAEEANgK0ASAAQSxqIAI2AgAgAEGsAWpBADYCACAAQaQBakECOgAAIABB5ABqQRI6AAAgAEHQAGpBEzoAAAttAQF/IwBBMGsiAyQAIAMgAjYCBCADIAE2AgAgA0EcakECNgIAIANBLGpBAjYCACADQgI3AgwgA0GsssAANgIIIANBAjYCJCADIANBIGo2AhggAyADNgIoIAMgA0EEajYCICADQQhqIAAQ8gEAC3ABAX8jAEEwayICJAAgAiABNgIEIAIgADYCACACQRxqQQI2AgAgAkEsakECNgIAIAJCAjcCDCACQaC0wAA2AgggAkECNgIkIAIgAkEgajYCGCACIAJBBGo2AiggAiACNgIgIAJBCGpBsLTAABDyAQALcAEBfyMAQTBrIgIkACACIAE2AgQgAiAANgIAIAJBHGpBAjYCACACQSxqQQI2AgAgAkICNwIMIAJB5LTAADYCCCACQQI2AiQgAiACQSBqNgIYIAIgAkEEajYCKCACIAI2AiAgAkEIakH0tMAAEPIBAAtkAQJ/IwBBIGsiAiQAIAFBHGooAgAhAyABKAIYIQEgAkEIakEQaiAAQRBqKQIANwMAIAJBCGpBCGogAEEIaikCADcDACACIAApAgA3AwggASADIAJBCGoQCCEAIAJBIGokACAAC20BAX8jAEEgayICJAAgAkEIaiABEAICQCACKAIIQQFHDQAgAiACKQIMNwMYQZyGwABBKyACQRhqQciGwAAQlAEACyAAIAIpAgw3AgAgAEEIaiACQRRqKAIANgIAIAEQ1wIgARCPAiACQSBqJAALawEDfyAAIAEoAgwgASgCCGsQrgIgABC5AiECIAAoAgghAwJAIAEoAggiBCABKAIMRg0AA0AgASAEQQFqNgIIIAIgA2ogBC0AADoAACADQQFqIQMgASgCCCIEIAEoAgxHDQALCyAAIAM2AggLYwEBfyMAQSBrIgIkACACIAAoAgA2AgQgAkEIakEQaiABQRBqKQIANwMAIAJBCGpBCGogAUEIaikCADcDACACIAEpAgA3AwggAkEEakHQr8AAIAJBCGoQCCEBIAJBIGokACABC3MAAkACQEHE38AAEM8CIAJPDQACQAJAQcTfwAAQzwIgAk8NAEHE38AAIAIgAxAeIQIMAQtBxN/AACADEAQhAgsgAg0BQQAPC0HE38AAIAAgAxAODwsgAiAAIAMgASABIANLGxDXASECQcTfwAAgABANIAILZwECfyMAQSBrIgIkACACQQhqIAEQlwIgAigCCCEBIAIgAigCDCIDQQAQtAEgAkEANgIYIAIgAikDADcDECACQRBqIAEgAxCnAiAAQQhqIAIoAhg2AgAgACACKQMQNwIAIAJBIGokAAtmAQN/IwBBEGsiAiQAAkAgASgCBCIDIAEoAggiBEYNACABIAQQpgEgASgCBCEDCyABKAIAIQEgAiADNgIMIAIgATYCCCACQQhqELkCIQEgACACKAIMNgIEIAAgATYCACACQRBqJAALaAIBfwF+IwBBEGsiAyQAIANBCGogASACEAsCQAJAIAMpAwgiBEKAgICA8B+DQoCAgIAgUQ0AIAAgBDcCBEEBIQEMAQsgACABNgIEIABBCGogAjYCAEEAIQELIAAgATYCACADQRBqJAALYQECfwJAIAAoAggiAyABSQ0AAkAgAyAAKAIERw0AIABBARCuAgsgABC5AiABaiIEQQFqIAQgAyABaxCYARogBCACOgAAIAAgA0EBajYCCA8LQeCKwABBHkG0isAAENYBAAtdAAJAAkAgAUF/TA0AAkACQCABDQBBASECDAELAkAC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AUF0aiIBDQALCwtBAQF/AkACQCAAKAIEIgIgAUkNAEEAIQIgACgCCCABTQ0BQZWkwABBMiABEJwBDwtB8KPAAEElIAIQnAEhAgsgAgs7AQF/IwBBIGsiAyQAIANCBDcDECADQgE3AgQgAyABNgIcIAMgADYCGCADIANBGGo2AgAgAyACEPIBAAs2AQF/AkAgAkUNACAAIQMDQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAALOQEBfwJAIAAoAgQiAUUNACAAKAIAIAFBARCrAgsCQCAAQQxqKAIAIgFFDQAgACgCCCABQQEQqwILCy8AAkAgAEF8Sw0AAkAgAA0AQQQPCyAAIABBfUlBAnQQnQIiAEUNACAADwsQugIACzoBAX8CQCAAKAK0AQ0AQcCqwABBChC3AQALIABBuAFqKAIAIQEgABAcIABBBGogATYCACAAQSE6AAALNAEBfyAAIAAoAgggAiABayICEMkBIAAgACgCCCIDIAJqNgIIIAMgACgCAGogAiABIAIQWwsyACAAKAIAIQACQCABEKkCDQACQCABEKoCDQAgACABELECDwsgACABEGwPCyAAIAEQawsyACAAKAIAIQACQCABEKkCDQACQCABEKoCDQAgACABELACDwsgACABEHAPCyAAIAEQbws2AAJAIAEtAAhBBkYNAEGQncAAQSlBgJ3AABD0AQALIAAgASgCECABQRRqKAIAIAEoAgwQgwELNQACQCABLQAIQQhGDQBBzJ3AAEEtQbydwAAQ9AEACyAAIAEoAhAgAUEUaigCACABKAIMEH8LNgACQCABLQAIQQ9GDQBBzJ3AAEEtQfydwAAQ9AEACyAAIAEoAhAgAUEUaigCACABKAIMEIQBCzUAAkAgAS0ACEEMRg0AQZyewABBK0GMnsAAEPQBAAsgACABKAIQIAFBFGooAgAgASgCDBB4CzYAAkAgAS0ACEEHRg0AQdiewABBK0HInsAAEPQBAAsgACABKAIQIAFBFGooAgAgASgCDBCAAQs1AAJAIAEtAAhBC0YNAEGUn8AAQStBhJ/AABD0AQALIAAgASgCECABQRRqKAIAIAEoAgwQegs2AAJAIAEtAAhBCkYNAEHQn8AAQStBwJ/AABD0AQALIAAgASgCECABQRRqKAIAIAEoAgwQgQELNQACQCABLQAIQRBGDQBBjKDAAEEpQfyfwAAQ9AEACyAAIAEoAhAgAUEUaigCACABKAIMEHkLNgACQCABLQAIQQlGDQBByKDAAEEqQbigwAAQ9AEACyAAIAEoAhAgAUEUaigCACABKAIMEIIBCzUAAkAgAS0ACEEORg0AQYShwABBLEH0oMAAEPQBAAsgACABKAIQIAFBFGooAgAgASgCDBB7CzUAAkAgAS0ACEENRg0AQfSiwABBK0HkosAAEPQBAAsgACABKAIQIAFBFGooAgAgASgCDBB0CzUAAkAgAS0ACEERRg0AQbCjwABBMEGgo8AAEPQBAAsgACABKAIQIAFBFGooAgAgASgCDBBzCzEBAX8gACgCACIAIAIQiwEgACAAKAIIIgMgAmo2AgggAyAAKAIAaiABIAIQ1wEaQQALMgECfwJAIAAoAgAiASgCBCICRQ0AIAEoAgAgAkEBEKsCIAAoAgAhAQsgAUEQQQQQqwILMgECfwJAIAAoAgAiASgCBCICRQ0AIAEoAgAgAkEBEKsCIAAoAgAhAQsgAUEQQQQQqwILMgECfwJAIAAoAgAiASgCBCICRQ0AIAEoAgAgAkEBEKsCIAAoAgAhAQsgAUEQQQQQqwILMgECfwJAIAAoAgAiASgCBCICRQ0AIAEoAgAgAkEBEKsCIAAoAgAhAQsgAUEQQQQQqwILMgECfwJAIAAoAgAiASgCBCICRQ0AIAEoAgAgAkEBEKsCIAAoAgAhAQsgAUEQQQQQqwILMgECfwJAIAAoAgAiASgCBCICRQ0AIAEoAgAgAkEBEKsCIAAoAgAhAQsgAUEQQQQQqwILMgECfwJAIAAoAgAiASgCBCICRQ0AIAEoAgAgAkEBEKsCIAAoAgAhAQsgAUEQQQQQqwILMgEBfyMAQRBrIgIkACACIAE2AgwgAiAANgIIIAJB6LHAADYCBCACQQE2AgAgAhCiAQALLAEBfwJAIAJFDQAgACEDA0AgAyABOgAAIANBAWohAyACQX9qIgINAAsLIAALLAEBfyMAQRBrIgMkACADIAE2AgwgAyAANgIIIANBCGpB0I7AAEEAIAIQSwALJwEBfwJAIAAoAgQiAUUNACAAQQhqKAIAIgBFDQAgASAAQQEQqwILCyUBAX8jAEEQayICJAAgAiABNgIMIAIgADYCCCACQQhqEM4CGgALKAACQCAARQ0AIAAgAiADIAQgBSABKAIMEQwADwtB6N7AAEEwELMCAAsmAAJAIABFDQAgACACIAMgBCABKAIMEQkADwtB6N7AAEEwELMCAAsmAAJAIABFDQAgACACIAMgBCABKAIMEQkADwtB6N7AAEEwELMCAAsmAAJAIABFDQAgACACIAMgBCABKAIMEQkADwtB6N7AAEEwELMCAAsmAAJAIABFDQAgACACIAMgBCABKAIMEQoADwtB6N7AAEEwELMCAAsmAAJAIABFDQAgACACIAMgBCABKAIMEQkADwtB6N7AAEEwELMCAAsmAAJAIABFDQAgACACIAMgBCABKAIMERIADwtB6N7AAEEwELMCAAsmAAJAIABFDQAgACACIAMgBCABKAIMEQkADwtB6N7AAEEwELMCAAsmAAJAIABFDQAgACACIAMgBCABKAIMEQkADwtB6N7AAEEwELMCAAsmAAJAIABFDQAgACACIAMgBCABKAIMEQkADwtB6N7AAEEwELMCAAsmAAJAIABFDQAgACACIAMgBCABKAIMERMADwtB6N7AAEEwELMCAAsmAAJAIABFDQAgACACIAMgBCABKAIMEQkADwtB6N7AAEEwELMCAAsmAAJAIABFDQAgACACIAMgBCABKAIMEQoADwtB6N7AAEEwELMCAAsmAAJAIABFDQAgACACIAMgBCABKAIMEQkADwtB6N7AAEEwELMCAAskAAJAIABFDQAgACACIAMgASgCDBEHAA8LQejewABBMBCzAgALJAACQCAARQ0AIAAgAiADIAEoAgwRBwAPC0Ho3sAAQTAQswIACy4AAkBBACgCmN9ADQBBAEIANwKc30BBAEEENgKY30BBAEIANwKk30ALQZjfwAALJwACQEHE38AAEM8CIAFPDQBBxN/AACABIAAQHg8LQcTfwAAgABAECyYBAX8gACgCACIBKAIAIAEoAgQgACgCBCgCACAAKAIIKAIAEAYACyIAAkAgAEUNACAAIAIgASgCDBEGAA8LQejewABBMBCzAgALIAEBfwJAIAAoAgQiAUUNACAAKAIAIAFBAnRBBBCrAgsLIQACQCABKAIADQAQzQIACyAAQeSOwAA2AgQgACABNgIACx4AIAAgBDYCDCAAIAM2AgggACACNgIEIAAgATYCAAsdAQF/AkAgACgCBCIBRQ0AIAAoAgAgAUEBEKsCCwsdAQF/AkAgACgCBCIBRQ0AIAAoAgAgAUEBEKsCCwsdAQF/AkAgACgCBCIBRQ0AIAAoAgAgAUEBEKsCCwsaAQF/IAAgAUEAKAK030AiAkEQIAIbEQUAAAsXACAAIAI2AgggACADNgIEIAAgATYCAAsbAAJAIAANAEHUsMAAQStBtLDAABDWAQALIAALGwACQCAADQBB1LDAAEErQbSwwAAQ1gEACyAACxQBAX8gACABIAIgAxCvASEEIAQPCxYAIAAgASgCCDYCBCAAIAEoAgA2AgALFgAgACABKAIINgIEIAAgASgCADYCAAsWACAAIAEoAgg2AgQgACABKAIANgIACxYAIAAgASgCCDYCBCAAIAEoAgA2AgALEwACQCABRQ0AIAAgAUEEEKsCCwsQACABQXxqLQAAQQNxQQBHCxQAIAAoAgAgASAAKAIEKAIMEQYACxABAX8gACABEIgCIQIgAg8LEAEBfyAAIAEQzwEhAiACDwsQACAAIAI2AgQgACABNgIACxAAIAAgAjYCBCAAIAE2AgALEAAgACgCACAAKAIEIAEQBwsRACAAKAIAIAAoAgQgARC2AgsQACAAIAI2AgQgACABNgIACxAAIAAgAjYCBCAAIAE2AgALEAAgACACNgIEIAAgATYCAAsQACAAIAI2AgQgACABNgIACw4AIAAgASABIAJqENsBCxAAIAEgACgCACAAKAIEEAwLDQAgAC0AAEEQcUEEdgsNACAALQAAQSBxQQV2CwwAIAAgASACELcCDwsNACAAIAEgAiACEJICCw4AIAAgACgCCCABEMMBCw4AIAAgACgCCCABEMkBCxIAQbuxwABBEUHMscAAENYBAAsNACAANQIAQQEgARAsCw0AIAAxAABBASABECwLDQAgADUCAEEBIAEQLAsJACAAIAEQAAALCgAgACABEJECAAsMACAAIAEpAgA3AgALCgAgAiAAIAEQDAsLAEHE38AAIAAQDQsHACAAKAIACwcAIAAoAgALBgAQzQIACwYAEK8CAAsGABCvAgALBgAQrwIACwYAEK8CAAsGABCvAgALBgAQrwIACwYAEK8CAAsGABCvAgALBgAQrwIACwYAEK8CAAsHACAAKAIICwcAIAAoAgwLBwAgACgCCAsHACAAKAIMCwQAIAALDABC5K7ChZebpYgRCwwAQoP/iNuy5NTdCgsNAELWyK+kn9/x4cUACwMAAAsDAAALBABBCAsMAEKD/4jbsuTU3QoLAgALAgALAgALAgALAgALAgALAgALAgALAgALAgALAgALAgALAgALAgALC6PjgIAAAgBBgIDAAAuYX2NhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWUvcnVzdGMvMTliZDkzNDY3NjE3YTQ0N2MyMmVjMzJjYzFjZjE0ZDQwY2I4NGNjZi9zcmMvbGliY29yZS9tYWNyb3MvbW9kLnJzKwAQAEkAAAAPAAAAKAAAAGNhbGxlZCBgUmVzdWx0Ojp1bndyYXAoKWAgb24gYW4gYEVycmAgdmFsdWUAAwAAAAgAAAAEAAAABAAAAC9ydXN0Yy8xOWJkOTM0Njc2MTdhNDQ3YzIyZWMzMmNjMWNmMTRkNDBjYjg0Y2NmL3NyYy9saWJjb3JlL3NsaWNlL21vZC5yc8AAEABIAAAA9goAAAoAAADAABAASAAAAPwKAAAOAAAAYGFzc2VydGlvbiBmYWlsZWQ6IGAobGVmdCA9PSByaWdodClgCiAgbGVmdDogYGAsCiByaWdodDogYAAAKQEQAC0AAABWARAADAAAACgBEAABAAAAc3JjL3RyYW5zZm9ybWVyLnJzAAB8ARAAEgAAAEIAAAARAAAAfAEQABIAAABHAAAAFQAAAE9ubHkgb25lIHNlY3Rpb24gdHlwZSBpcyBhbGxvd2VkfAEQABIAAABgAAAAFQAAAE9ubHkgb25lIHNlY3Rpb24gaW1wb3J0IGlzIGFsbG93ZWQAAHwBEAASAAAAdQAAABUAAABPbmx5IG9uZSBzZWN0aW9uIGZ1bmN0aW9uIGlzIGFsbG93ZWR8ARAAEgAAAJAAAAAVAAAAT25seSBvbmUgc2VjdGlvbiBjb2RlIGlzIHN1cHBvcnRlZCBmb3Igbm93Q2FuJ3QgZ2V0IGxhdGVzdCBzZWN0aW9uVGhlIG5ldyBwb3NpdGlvbiAgc2hvdWxkIGJlIGFoZWFkIG9mIHByZXZpb3VzIHBvc2l0aW9uIAAAAIoCEAARAAAAmwIQACYAAAB8ARAAEgAAAOkBAAAJAAAAVGhlIHByb3ZpZGVkIHBvc2l0aW9uIAAA5AIQABYAAACbAhAAJgAAAHwBEAASAAAA/AEAAAkAAABjYWxsZWQgYFJlc3VsdDo6dW53cmFwKClgIG9uIGFuIGBFcnJgIHZhbHVlAAUAAAAIAAAABAAAAAQAAAAwLjAuMWNhbGxlZCBgUmVzdWx0Ojp1bndyYXAoKWAgb24gYW4gYEVycmAgdmFsdWUHAAAACAAAAAQAAAAEAAAAL3J1c3RjLzE5YmQ5MzQ2NzYxN2E0NDdjMjJlYzMyY2MxY2YxNGQ0MGNiODRjY2Yvc3JjL2xpYmNvcmUvc2xpY2UvbW9kLnJzmAMQAEgAAAD2CgAACgAAAJgDEABIAAAA/AoAAA4AAABgYXNzZXJ0aW9uIGZhaWxlZDogYChsZWZ0ID09IHJpZ2h0KWAKICBsZWZ0OiBgYCwKIHJpZ2h0OiBgYDogAAAAAQQQAC0AAAAuBBAADAAAADoEEAADAAAAUHJvdmlkZWQgZnVuY3Rpb24gaXMgbm90IGEgZnVuY3Rpb24AWAQQACMAAABzcmMvdXRpbHMucnOEBBAADAAAABYAAAAFAAAARGlkIG5vdCBwYXNzIGVub3VnaCBieXRlc0Vycm9yIGRlY29kaW5nIHRoZSB2YXJ1aW50MzIsIHRoZSBoaWdoIGJpdCB3YXMgaW5jb3JyZWN0bHkgc2V0YXNzZXJ0aW9uIGZhaWxlZDogc3RhcnQgPD0gZW5kPDo6Y29yZTo6bWFjcm9zOjpwYW5pYyBtYWNyb3M+ABUFEAAeAAAAAwAAAAoAAABhc3NlcnRpb24gZmFpbGVkOiBlbmQgPD0gbGVuYXNzZXJ0aW9uIGZhaWxlZDogaW5kZXggPD0gbGVuYXNzZXJ0aW9uIGZhaWxlZDogaW5kZXggPCBsZW5pbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlPDo6Y29yZTo6bWFjcm9zOjpwYW5pYyBtYWNyb3M+AAAAwwUQAB4AAAADAAAACgAAAC9ydXN0Yy8xOWJkOTM0Njc2MTdhNDQ3YzIyZWMzMmNjMWNmMTRkNDBjYjg0Y2NmL3NyYy9saWJjb3JlL3NsaWNlL21vZC5yc/QFEABIAAAA9goAAAoAAABUcmllZCB0byBzaHJpbmsgdG8gYSBsYXJnZXIgY2FwYWNpdHk8Ojpjb3JlOjptYWNyb3M6OnBhbmljIG1hY3Jvcz4AAHAGEAAeAAAAAwAAAAoAAABUcmllZCB0byBzaHJpbmsgdG8gYSBsYXJnZXIgY2FwYWNpdHk8Ojpjb3JlOjptYWNyb3M6OnBhbmljIG1hY3Jvcz4AAMQGEAAeAAAAAwAAAAoAAAAIAAAAaW50ZXJuYWwgZXJyb3I6IGVudGVyZWQgdW5yZWFjaGFibGUgY29kZTw6OmNvcmU6Om1hY3Jvczo6cGFuaWMgbWFjcm9zPgAAIAcQAB4AAAADAAAACgAAAAkAAAAIAAAABAAAAAoAAAALAAAADAAAAAgAAAAEAAAADQAAAFVuZXhwZWN0ZWQgZGF0YSBhdCB0aGUgZW5kIG9mIHRoZSBzZWN0aW9uVW5leHBlY3RlZCBjb250ZW50IGluIHRoZSBzb3VyY2VNYXBwaW5nVVJMIHNlY3Rpb25VbmV4cGVjdGVkIGNvbnRlbnQgaW4gdGhlIGRhdGEgY291bnQgc2VjdGlvbkRhdGEgc2VnbWVudCBleHRlbmRzIHBhc3QgZW5kIG9mIHRoZSBkYXRhIHNlY3Rpb25pbnZhbGlkIGZsYWdzIGJ5dGUgaW4gZGF0YSBzZWdtZW50VW5leHBlY3RlZCBkYXRhIGF0IHRoZSBlbmQgb2YgdGhlIHNlY3Rpb25VbmV4cGVjdGVkIGNvbnRlbnQgaW4gdGhlIHN0YXJ0IHNlY3Rpb25pbnZhbGlkIHBhc3NpdmUgc2VnbWVudGludmFsaWQgZmxhZ3MgYnl0ZSBpbiBlbGVtZW50IHNlZ21lbnRvbmx5IHRoZSBmdW5jdGlvbiBleHRlcm5hbCB0eXBlIGlzIHN1cHBvcnRlZCBpbiBlbGVtIHNlZ21lbnRVbmV4cGVjdGVkIGRhdGEgYXQgdGhlIGVuZCBvZiB0aGUgc2VjdGlvbmFzc2VydGlvbiBmYWlsZWQ6IGAobGVmdCA9PSByaWdodClgCiAgbGVmdDogYGAsCiByaWdodDogYGA6IAA/CRAALQAAAGwJEAAMAAAAeAkQAAMAAABkZXN0aW5hdGlvbiBhbmQgc291cmNlIHNsaWNlcyBoYXZlIGRpZmZlcmVudCBsZW5ndGhzlAkQADQAAAAvcnVzdGMvMTliZDkzNDY3NjE3YTQ0N2MyMmVjMzJjYzFjZjE0ZDQwY2I4NGNjZi9zcmMvbGliY29yZS9tYWNyb3MvbW9kLnJzAAAA0AkQAEkAAAAXAAAADQAAANAJEABJAAAADwAAACgAAABVbmV4cGVjdGVkIGRhdGEgYXQgdGhlIGVuZCBvZiB0aGUgc2VjdGlvbi9Vc2Vycy9zeXJ1c2FrYmFyeS8uY2FyZ28vcmVnaXN0cnkvc3JjL2dpdGh1Yi5jb20tMWVjYzYyOTlkYjllYzgyMy93YXNtcGFyc2VyLTAuNTEuMy9zcmMvYmluYXJ5X3JlYWRlci5yc1VuZXhwZWN0ZWQgRU9GSW52YWxpZCB2YXJfdTFJbnZhbGlkIHZhcl9pN0ludmFsaWQgdmFyX3U3SW52YWxpZCB0eXBlSW52YWxpZCBleHRlcm5hbCBraW5kZnVuY3Rpb24gcGFyYW1zIHNpemUgaXMgb3V0IG9mIGJvdW5kZnVuY3Rpb24gcmV0dXJucyBzaXplIGlzIG91dCBvZiBib3VuZGludmFsaWQgdGFibGUgcmVzaXphYmxlIGxpbWl0cyBmbGFnc0ludmFsaWQgc2VjdGlvbiBjb2RlbmFtZXByb2R1Y2Vyc3NvdXJjZU1hcHBpbmdVUkxyZWxvYy5saW5raW5nYnJfdGFibGUgc2l6ZSBpcyBvdXQgb2YgYm91bmRJbnZhbGlkIHZhcl91OEludmFsaWQgdmFyX3UzMkludmFsaWQgdmFyXzMyc3RyaW5nIHNpemUgaW4gb3V0IG9mIGJvdW5kcwAAZQoQAGkAAAAqAgAACQAAAHNraXBfdG8gYWxsb3dlZCBvbmx5IGludG8gcmVnaW9uIHBhc3QgY3VycmVudCBwb3NpdGlvbkludmFsaWQgdmFyX2kzMkludmFsaWQgdmFyX3MzM0ludmFsaWQgdmFyX2k2NGludmFsaWQgVVRGLTggZW5jb2RpbmdhbGlnbm1lbnQgbXVzdCBub3QgYmUgbGFyZ2VyIHRoYW4gbmF0dXJhbFVua25vd24gMHhGRSBvcGNvZGVpbnZhbGlkIGZ1bmN0aW9uIHR5cGVVbmtub3duIG9wY29kZWJhZCBudW1iZXIgb2YgcmVzdWx0c1Vua25vd24gMHhmYyBvcGNvZGVyZXNlcnZlZCBieXRlIG11c3QgYmUgemVyb2ludmFsaWQgbGFuZSBpbmRleFVua25vd24gMHhmZCBvcGNvZGUAYXNtQmFkIG1hZ2ljIG51bWJlckJhZCB2ZXJzaW9uIG51bWJlckludmFsaWQgbmFtZSB0eXBlSW52YWxpZCBsaW5raW5nIHR5cGVJbnZhbGlkIHJlbG9jIHR5cGVOYW1lIGVudHJ5IGV4dGVuZHMgcGFzdCBlbmQgb2YgdGhlIGNvZGUgc2VjdGlvbi9Vc2Vycy9zeXJ1c2FrYmFyeS8uY2FyZ28vcmVnaXN0cnkvc3JjL2dpdGh1Yi5jb20tMWVjYzYyOTlkYjllYzgyMy93YXNtcGFyc2VyLTAuNTEuMy9zcmMvcmVhZGVycy9tb2R1bGUucnMAAAATDhAAagAAACwAAAASAAAASW52YWxpZCBzdGF0ZSBmb3IgZ2V0X3R5cGVfc2VjdGlvbl9yZWFkZXIAAAATDhAAagAAADgAAAASAAAASW52YWxpZCBzdGF0ZSBmb3IgZ2V0X2Z1bmN0aW9uX3NlY3Rpb25fcmVhZGVyAAAAEw4QAGoAAABEAAAAEgAAABMOEABqAAAAUAAAABIAAABJbnZhbGlkIHN0YXRlIGZvciBnZXRfZXhwb3J0X3NlY3Rpb25fcmVhZGVyABMOEABqAAAAXAAAABIAAABJbnZhbGlkIHN0YXRlIGZvciBnZXRfaW1wb3J0X3NlY3Rpb25fcmVhZGVyABMOEABqAAAAaAAAABIAAABJbnZhbGlkIHN0YXRlIGZvciBnZXRfZ2xvYmFsX3NlY3Rpb25fcmVhZGVyABMOEABqAAAAdAAAABIAAABJbnZhbGlkIHN0YXRlIGZvciBnZXRfbWVtb3J5X3NlY3Rpb25fcmVhZGVyABMOEABqAAAAgAAAABIAAABJbnZhbGlkIHN0YXRlIGZvciBnZXRfZGF0YV9zZWN0aW9uX3JlYWRlcgAAABMOEABqAAAAjAAAABIAAABJbnZhbGlkIHN0YXRlIGZvciBnZXRfdGFibGVfc2VjdGlvbl9yZWFkZXIAABMOEABqAAAAmAAAABIAAABJbnZhbGlkIHN0YXRlIGZvciBnZXRfZWxlbWVudF9zZWN0aW9uX3JlYWRlchMOEABqAAAApQAAABIAAABJbnZhbGlkIHN0YXRlIGZvciBnZXRfbmFtZV9zZWN0aW9uX3JlYWRlcgAAABMOEABqAAAAvwAAABIAAABJbnZhbGlkIHN0YXRlIGZvciBnZXRfbGlua2luZ19zZWN0aW9uX3JlYWRlchMOEABqAAAAzAAAABIAAABJbnZhbGlkIHN0YXRlIGZvciBnZXRfcmVsb2Nfc2VjdGlvbl9yZWFkZXIAABMOEABqAAAA0wAAABIAAABJbnZhbGlkIHN0YXRlIGZvciBnZXRfc3RhcnRfc2VjdGlvbl9jb250ZW50ABMOEABqAAAA2gAAABIAAABJbnZhbGlkIHN0YXRlIGZvciBnZXRfZGF0YV9jb3VudF9zZWN0aW9uX2NvbnRlbnQTDhAAagAAAOcAAAASAAAAU2VjdGlvbiBib2R5IGV4dGVuZHMgcGFzdCBlbmQgb2YgZmlsZVNlY3Rpb24gaGVhZGVyIGlzIHRvbyBiaWcgdG8gZml0IGludG8gc2VjdGlvbiBib2R5bW9kdWxlIHJlYWRlcmJpbmFyeSByZWFkZXJleHBlY3RlZCAgcmVhZGVyAAAAYRIQAAkAAABqEhAABwAAAFR5cGVTZWN0aW9uUmVhZGVyAAAAhBIQABEAAAAvVXNlcnMvc3lydXNha2JhcnkvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9naXRodWIuY29tLTFlY2M2Mjk5ZGI5ZWM4MjMvd2FzbXBhcnNlci0wLjUxLjMvc3JjL3BhcnNlci5ycwAAoBIQAGIAAABgAQAAGgAAAEltcG9ydFNlY3Rpb25SZWFkZXIAFBMQABMAAACgEhAAYgAAAGoBAAAsAAAARnVuY3Rpb25TZWN0aW9uUmVhZGVyAAAAQBMQABUAAACgEhAAYgAAAHQBAAAZAAAATWVtb3J5U2VjdGlvblJlYWRlcgBwExAAEwAAAKASEABiAAAAfgEAABsAAABHbG9iYWxTZWN0aW9uUmVhZGVyAJwTEAATAAAAoBIQAGIAAACIAQAAKAAAAG9wZXJhdG9yIHJlYWRlckV4cG9ydFNlY3Rpb25SZWFkZXIAANcTEAATAAAAoBIQAGIAAACnAQAALQAAAEVsZW1lbnRTZWN0aW9uUmVhZGVyBBQQABQAAACgEhAAYgAAALEBAAArAAAAZWxlbWVudCBpdGVtc251bV9lbGVtZW50cyBpcyBvdXQgb2YgYm91bmRzQ29kZVNlY3Rpb25SZWFkZXIAWhQQABEAAACgEhAAYgAAAN0BAAAdAAAAZnVuY3Rpb24gYm9keWxvY2FsX2NvdW50IGlzIG91dCBvZiBib3VuZHNsb2NhbHNfdG90YWwgaXMgb3V0IG9mIGJvdW5kc0V4cGVjdGVkIGVuZCBvZiBmdW5jdGlvbiBtYXJrZXJUYWJsZVNlY3Rpb25SZWFkZXIA6RQQABIAAACgEhAAYgAAACUCAAAbAAAARGF0YVNlY3Rpb25SZWFkZXIAAAAUFRAAEQAAAKASEABiAAAALwIAACMAAABkYXRhIGVudHJ5bmFtZSBtYXAgc2l6ZSBpcyBvdXQgb2YgYm91bmROYW1lU2VjdGlvblJlYWRlcmcVEAARAAAAoBIQAGIAAABdAgAADAAAAGZ1bmN0aW9uIGNvdW50IGlzIG91dCBvZiBib3VuZHNzZWN0aW9uUmVsb2NTZWN0aW9uUmVhZGVythUQABIAAACgEhAAYgAAAJcCAAANAAAATGlua2luZ1NlY3Rpb25SZWFkZXLgFRAAFAAAAKASEABiAAAApgIAABUAAACgEhAAYgAAABEDAAASAAAAaW50ZXJuYWwgZXJyb3I6IGVudGVyZWQgdW5yZWFjaGFibGUgY29kZaASEABiAAAAOgMAABIAAACgEhAAYgAAAFQDAAASAAAAZGF0YW1vZHVsZV9yZWFkZXIAAACgEhAAYgAAALADAAAdAAAAoBIQAGIAAACIAwAAJQAAAFBhcnNlciBpbiBlbmQgc3RhdGUAoBIQAGIAAACJAwAAJgAAAFBhcnNlciBpbiBlcnJvciBzdGF0ZVRyaWVkIHRvIHNocmluayB0byBhIGxhcmdlciBjYXBhY2l0eTw6OmNvcmU6Om1hY3Jvczo6cGFuaWMgbWFjcm9zPgD1FhAAHgAAAAMAAAAKAAAAaW50ZXJuYWwgZXJyb3I6IGVudGVyZWQgdW5yZWFjaGFibGUgY29kZVVuZXhwZWN0ZWQgZGF0YSBhdCB0aGUgZW5kIG9mIHRoZSBzZWN0aW9uRnVuY3Rpb24gYm9keSBleHRlbmRzIHBhc3QgZW5kIG9mIHRoZSBjb2RlIHNlY3Rpb25VbmV4cGVjdGVkIGRhdGEgYXQgdGhlIGVuZCBvZiB0aGUgc2VjdGlvbhEAAAAEAAAABAAAABIAAAATAAAAFAAAAC9ydXN0Yy8xOWJkOTM0Njc2MTdhNDQ3YzIyZWMzMmNjMWNmMTRkNDBjYjg0Y2NmL3NyYy9saWJjb3JlL21hY3Jvcy9tb2QucnMAAADoFxAA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AAAAAP//////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/////7+2AAAAAAAAAAAA/wcAAAAAAPj//wAAAQAAAAAAAAAAAAAAwJ+fPQAAAAACAAAA////BwAAAAAAAAAAAADA/wEAAAAAAAD4DyBQIxAASgAAAKAlEAAAAgAAoCcQADoAAAAAAQIDBAUGBwgJCAoLDA0ODxAREhMUAhUWFxgZGhscHR4fIAICAgICAgICAgIhAgICAgICAgICAgICAgIiIyQlJgInAigCAgIpKisCLC0uLzACAjECAgIyAgICAgICAgIzAgI0AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI1AjYCNwICAgICAgICOAI5AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI6OzwCAgICPQICPj9AQUJDREVGAgICRwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJIAgICAgICAgICAgJJAgICAgI7AgABAgICAgMCAgICBAIFBgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjbG9zdXJlIGludm9rZWQgcmVjdXJzaXZlbHkgb3IgZGVzdHJveWVkIGFscmVhZHkAQZjfwAAL+AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyLGBgAAEbmFtZQG9sYGAAN8CABBfX3diaW5kZ2VuX3Rocm93AUl3YXNtcGFyc2VyOjpiaW5hcnlfcmVhZGVyOjpCaW5hcnlSZWFkZXI6OnJlYWRfb3BlcmF0b3I6Omg0YWFmNDM5N2Y5ZTk4ZTMzAkN3YXNtX3RyYW5zZm9ybWVyOjp0cmFuc2Zvcm1lcjo6bG93ZXJfaTY0X2ltcG9ydHM6Omg0MmJmNmY2YjgxNzBlMjViA1g8d2FzbXBhcnNlcjo6cGFyc2VyOjpQYXJzZXIgYXMgd2FzbXBhcnNlcjo6cGFyc2VyOjpXYXNtRGVjb2Rlcj46OnJlYWQ6Omg1OWM4YzA1OGRmMzkxNWU1BDdkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jOjptYWxsb2M6OmhlMjNkNjZjNjYyNWQyYmZhBT53YXNtcGFyc2VyOjpwYXJzZXI6OlBhcnNlcjo6cmVhZF9uYW1lX2VudHJ5OjpoMmE3MGIxNWRjNTJlNGQ0NgYuY29yZTo6c3RyOjpzbGljZV9lcnJvcl9mYWlsOjpoZTY5NWViNGY1ZDNmYzFlYQcxPHN0ciBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoMmQ1NzAxY2FlZjBlNDIwMggjY29yZTo6Zm10Ojp3cml0ZTo6aDA0OGYwOGExMDk5NmQzYzQJSndhc21wYXJzZXI6OmJpbmFyeV9yZWFkZXI6OkJpbmFyeVJlYWRlcjo6cmVhZF9mdW5jX3R5cGU6OmgxYmE4NDk5YTY3NDQ1ZTY4ClN3YXNtcGFyc2VyOjpyZWFkZXJzOjplbGVtZW50X3NlY3Rpb246OkVsZW1lbnRTZWN0aW9uUmVhZGVyOjpyZWFkOjpoNjY5MWE0MWM2OTljMTJkNgsxY29yZTo6c3RyOjpydW5fdXRmOF92YWxpZGF0aW9uOjpoNGY1NTliZWFlYzdlZDdmYgwsY29yZTo6Zm10OjpGb3JtYXR0ZXI6OnBhZDo6aDdhNzkzM2E1ZDg4NGUyZWUNNWRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M6OmZyZWU6OmgzZTJlZThlOTIyNWMyOGQ0DjhkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jOjpyZWFsbG9jOjpoYzk0NGNkNjA4OWUwOTU4Zg81Y29yZTo6Zm10OjpGb3JtYXR0ZXI6OnBhZF9pbnRlZ3JhbDo6aDU3ZTAzMDUyODljYzAzMmYQUXdhc21wYXJzZXI6OnJlYWRlcnM6OmltcG9ydF9zZWN0aW9uOjpJbXBvcnRTZWN0aW9uUmVhZGVyOjpyZWFkOjpoNTMxYTIyM2RjYzI4NjNkMRE+ZGxtYWxsb2M6OmRsbWFsbG9jOjpEbG1hbGxvYzo6ZGlzcG9zZV9jaHVuazo6aDI3ZWEwYjk1NTZlODRiMjQSQHdhc21wYXJzZXI6OnBhcnNlcjo6UGFyc2VyOjpjaGVja19zZWN0aW9uX2VuZDo6aGZkYWViYWY2ZDRkYjgyZDMTO3dhc21fdHJhbnNmb3JtZXI6OnV0aWxzOjpsb3dlcl9mdW5jX2JvZHk6Omg2MjBlZTRlNWMwOGMwMzU5FE13YXNtcGFyc2VyOjpiaW5hcnlfcmVhZGVyOjpCaW5hcnlSZWFkZXI6OnJlYWRfc2VjdGlvbl9jb2RlOjpoMzM2OTY2YWQzOGFjYjExZBVId2FzbV90cmFuc2Zvcm1lcjo6dXRpbHM6OmdlbmVyYXRlX3RyYW1wb2xpbmVfZnVuY3Rpb246Omg2NmUwZmMwODc2YTY1NWU3FkZ3YXNtcGFyc2VyOjpwYXJzZXI6OlBhcnNlcjo6cmVhZF9lbGVtZW50X2VudHJ5X2JvZHk6OmhkNTYwMjliNDlkOGM4Mzc0F0J3YXNtcGFyc2VyOjpyZWFkZXJzOjptb2R1bGU6Ok1vZHVsZVJlYWRlcjo6cmVhZDo6aGQzNDQxZDBhYTdiYjJhY2UYMjxjaGFyIGFzIGNvcmU6OmZtdDo6RGVidWc+OjpmbXQ6Omg0M2FiNGU4OTFkN2IwZWU4GT93YXNtcGFyc2VyOjpwYXJzZXI6OlBhcnNlcjo6Y3VycmVudF9wb3NpdGlvbjo6aDRmY2IxMzMwOWI1N2YyMWIaTXdhc21wYXJzZXI6OnJlYWRlcnM6OmRhdGFfc2VjdGlvbjo6RGF0YVNlY3Rpb25SZWFkZXI6OnJlYWQ6OmhjMTlkMzEyNWYxMjRhYmE2G093YXNtX3RyYW5zZm9ybWVyOjp0cmFuc2Zvcm1lcjo6UmVwbGFjZW1lbnRCdWY6OmdldF9zaXplX2RpZmY6Omg1Yjg1YjkyYTdhNTg2NDgyHDBjb3JlOjpwdHI6OnJlYWxfZHJvcF9pbl9wbGFjZTo6aDA5M2U1MzRlYzg1MjQyNDgdOndhc21wYXJzZXI6OnBhcnNlcjo6UGFyc2VyOjpyZWFkX25hbWluZzo6aGQ1NTI3MWQzYWI3YTU4ZTQeOWRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M6Om1lbWFsaWduOjpoMTZiOTI4ZGNlNThmN2RlNh8yY29yZTo6dW5pY29kZTo6cHJpbnRhYmxlOjpjaGVjazo6aDA0NzMzODY0YWVhMjhiMTMgQHdhc21wYXJzZXI6OnBhcnNlcjo6UGFyc2VyOjpyZWFkX25leHRfc2VjdGlvbjo6aDhkYjQ1ZWRlYzM2YTZhMzUhSHdhc21wYXJzZXI6OmJpbmFyeV9yZWFkZXI6OkJpbmFyeVJlYWRlcjo6cmVhZF92YXJfczMzOjpoMGQ2NDYwOTQzNzFjNWY2YSJBd2FzbXBhcnNlcjo6cGFyc2VyOjpQYXJzZXI6OnJlYWRfZWxlbWVudF9lbnRyeTo6aDUzOTk4Njg3NDRhNmEyYzMjQGFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6cmVzZXJ2ZV9pbnRlcm5hbDo6aDJjYWFjYjgzNDZlYWE1YWYkQGFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6cmVzZXJ2ZV9pbnRlcm5hbDo6aGViM2ZiNjIyNmE4MWYzZjUlSHdhc21wYXJzZXI6OmJpbmFyeV9yZWFkZXI6OkJpbmFyeVJlYWRlcjo6cmVhZF92YXJfaTMyOjpoZmU1MWIzOTY4NjE4Nzc2YyYwY29yZTo6cHRyOjpyZWFsX2Ryb3BfaW5fcGxhY2U6OmgyYzYzN2U3ZTk5MjM4NGMyJ0BhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmVfaW50ZXJuYWw6OmgxNjM4YzFmMzM2NTdhNDA3KEBhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmVfaW50ZXJuYWw6Omg0ODBlNjE1MjRkZjE1NTcxKUBhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmVfaW50ZXJuYWw6Omg2N2Y2N2RkMzk2ZDVjNDUxKkBhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmVfaW50ZXJuYWw6Omg5YjMxODQ1YzRiY2YzNGZiK113YXNtX3RyYW5zZm9ybWVyOjp0cmFuc2Zvcm1lcjo6UmVwbGFjZW1lbnRCdWY6OnJlcGxhY2VfdmFydWludF93aXRoX29mZnNldDo6aDFhYjBmYjI5NGY3NWM5ZmIsL2NvcmU6OmZtdDo6bnVtOjppbXA6OmZtdF91NjQ6Omg4MzhlZTFiNjAyYWE3M2NmLUNkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jOjppbnNlcnRfbGFyZ2VfY2h1bms6OmhmOTBiYzU0N2M1MjlkNzQ5Ljs8Jm11dCBXIGFzIGNvcmU6OmZtdDo6V3JpdGU+Ojp3cml0ZV9jaGFyOjpoZjRiMDJmZTdjZTNjYjUyMi9Pd2FzbXBhcnNlcjo6cmVhZGVyczo6cmVsb2Nfc2VjdGlvbjo6UmVsb2NTZWN0aW9uUmVhZGVyOjpyZWFkOjpoYjJmMzA3N2FiZTRmMjZkYTBAd2FzbXBhcnNlcjo6cGFyc2VyOjpQYXJzZXI6OnJlYWRfaW1wb3J0X2VudHJ5OjpoOTc5NzhjZWIzZWE0ZmZmNjFJY29yZTo6Zm10OjpudW06OjxpbXBsIGNvcmU6OmZtdDo6RGVidWcgZm9yIHVzaXplPjo6Zm10OjpoOWU4ZWVkZWVmYjgxOWFlNzJFd2FzbXBhcnNlcjo6YmluYXJ5X3JlYWRlcjo6QmluYXJ5UmVhZGVyOjpyZWFkX3R5cGU6OmhjOTEzNWE0NWJlNTI3MTQ5M0t3YXNtcGFyc2VyOjpiaW5hcnlfcmVhZGVyOjpCaW5hcnlSZWFkZXI6OnJlYWRfdGFibGVfdHlwZTo6aGFhN2NiNTg2MTZhNDM5NWQ0Pndhc21wYXJzZXI6OnBhcnNlcjo6UGFyc2VyOjpyZWFkX2RhdGFfZW50cnk6OmgyNTcxYThjMWI4YTFjZGFiNWg8c3RkOjpwYW5pY2tpbmc6OmJlZ2luX3BhbmljX2hhbmRsZXI6OlBhbmljUGF5bG9hZCBhcyBjb3JlOjpwYW5pYzo6Qm94TWVVcD46OnRha2VfYm94OjpoZDJlODMxMTdhZTA5NzU3ZjZRd2FzbXBhcnNlcjo6cmVhZGVyczo6ZWxlbWVudF9zZWN0aW9uOjpFbGVtZW50SXRlbXNSZWFkZXI6OnJlYWQ6OmhmMTlmYmI5ZTk3NWNmMjNlN0NkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jOjp1bmxpbmtfbGFyZ2VfY2h1bms6Omg1MGQ1ZTg4YmMwMmQ2MTEzOD53YXNtcGFyc2VyOjpwYXJzZXI6OlBhcnNlcjo6cmVhZF90eXBlX2VudHJ5OjpoMTI3YjNjNjdhZGUwNjQzZjk9Y29yZTo6dW5pY29kZTo6Ym9vbF90cmllOjpCb29sVHJpZTo6bG9va3VwOjpoMmNlZjYwYTE0YWIxZmNkZDpNd2FzbXBhcnNlcjo6cmVhZGVyczo6bmFtZV9zZWN0aW9uOjpOYW1lU2VjdGlvblJlYWRlcjo6cmVhZDo6aDEyMWViMWJiNGFmYTQzMzY7VHdhc21fdHJhbnNmb3JtZXI6OnRyYW5zZm9ybWVyOjpSZXBsYWNlbWVudEJ1Zjo6aW5zZXJ0X2luX3Bvc2l0aW9uOjpoZmFkNTIzOTM4YjEwNTY4YjxAYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpyZXNlcnZlX2ludGVybmFsOjpoNzFhM2ViZDhmNzdkMDU2ZD1AYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpyZXNlcnZlX2ludGVybmFsOjpoZTBjMTUzODRjMWEwZGQ0OT5Od2FzbXBhcnNlcjo6cmVhZGVyczo6cmVsb2Nfc2VjdGlvbjo6UmVsb2NTZWN0aW9uUmVhZGVyOjpuZXc6OmgwMWIwYTc0MzI4ZjIwZTUwP0BhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmVfaW50ZXJuYWw6Omg2NmZiNjMxZWFmNjM4YjBiQEB3YXNtcGFyc2VyOjpwYXJzZXI6OlBhcnNlcjo6cmVhZF9tZW1vcnlfZW50cnk6Omg2MmI3M2ViMDYxY2RjYWQ4QT93YXNtcGFyc2VyOjpwYXJzZXI6OlBhcnNlcjo6cmVhZF90YWJsZV9lbnRyeTo6aDEzOGM0NDJkYzRkOThlOTdCQGFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6cmVzZXJ2ZV9pbnRlcm5hbDo6aDFkMTZmN2JkNDllODg4NDFDQGFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6cmVzZXJ2ZV9pbnRlcm5hbDo6aDI2MDQ1YTdhY2U5ZDEzYzREQXdhc21fdHJhbnNmb3JtZXI6OnV0aWxzOjpyZWFkX2J5dGVzX2FzX3ZhcnVuaXQ6OmhiZTUzOTcxODEwY2EyZTQyRU93YXNtcGFyc2VyOjpyZWFkZXJzOjpuYW1lX3NlY3Rpb246OkZ1bmN0aW9uTG9jYWxSZWFkZXI6OnJlYWQ6Omg2MzY3N2RhMDFmMzdlYzY1Rkh3YXNtcGFyc2VyOjpiaW5hcnlfcmVhZGVyOjpCaW5hcnlSZWFkZXI6OnJlYWRfdmFyX3UzMjo6aDFiNWVkMTIyM2UzYzcxODhHSHdhc21wYXJzZXI6OmJpbmFyeV9yZWFkZXI6OkJpbmFyeVJlYWRlcjo6cmVhZF92YXJfaTY0OjpoZDhlN2ZiMDc0ZTdhNGM4YUhRd2FzbXBhcnNlcjo6cmVhZGVyczo6Z2xvYmFsX3NlY3Rpb246Okdsb2JhbFNlY3Rpb25SZWFkZXI6OnJlYWQ6OmhmODkyMjNlMzU5MjU1NWMwSUB3YXNtcGFyc2VyOjpwYXJzZXI6OlBhcnNlcjo6cmVhZF9nbG9iYWxfZW50cnk6Omg5MmM0Zjg0YzkyZjBjNWZmSkF3YXNtcGFyc2VyOjpwYXJzZXI6OlBhcnNlcjo6cmVhZF9mdW5jdGlvbl9ib2R5OjpoMmZhOWEzM2FhNDM1NDdkN0s3c3RkOjpwYW5pY2tpbmc6OnJ1c3RfcGFuaWNfd2l0aF9ob29rOjpoZjNmYmRkM2JkYWVhZmY4NkxRd2FzbXBhcnNlcjo6cmVhZGVyczo6ZXhwb3J0X3NlY3Rpb246OkV4cG9ydFNlY3Rpb25SZWFkZXI6OnJlYWQ6OmhmNTg2ZGM2NjE0NGRlM2ExTUx3YXNtcGFyc2VyOjpiaW5hcnlfcmVhZGVyOjpCaW5hcnlSZWFkZXI6OnJlYWRfbWVtb3J5X3R5cGU6Omg3MTQ3YWQxMThjNGNlZmVjTkBhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmVfaW50ZXJuYWw6OmgyNmJkZDM0NzMwZWNkZTFmT0BhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmVfaW50ZXJuYWw6Omg3Njg5Yzg2YjczN2FiNTUxUEx3YXNtcGFyc2VyOjpiaW5hcnlfcmVhZGVyOjpCaW5hcnlSZWFkZXI6OnJlYWRfZmlsZV9oZWFkZXI6OmgxMzk3ODZiOTQ2MGJjYWFhUU93YXNtcGFyc2VyOjpiaW5hcnlfcmVhZGVyOjpCaW5hcnlSZWFkZXI6OnJlYWRfc2VjdGlvbl9oZWFkZXI6OmgyYTRmNzhjZjNhYzE4ZGEwUkk8YWxsb2M6OnZlYzo6U3BsaWNlPEk+IGFzIGNvcmU6Om9wczo6ZHJvcDo6RHJvcD46OmRyb3A6OmgzNThlYzVjOTgyNzc2OTM2U1h3YXNtcGFyc2VyOjpyZWFkZXJzOjpjb2RlX3NlY3Rpb246OkZ1bmN0aW9uQm9keTo6Z2V0X29wZXJhdG9yc19yZWFkZXI6OmgwMTlhMzEyNDM1ZDFiYWMzVD93YXNtcGFyc2VyOjpwYXJzZXI6OlBhcnNlcjo6cmVhZF9yZWxvY19lbnRyeTo6aGY1ODg3OGI5OTMwMGViZThVQHdhc21wYXJzZXI6OnBhcnNlcjo6UGFyc2VyOjpyZWFkX2V4cG9ydF9lbnRyeTo6aDFjMWQ1MTM4ZDI0YmY5MDJWYzxzdGQ6OnBhbmlja2luZzo6YmVnaW5fcGFuaWNfaGFuZGxlcjo6UGFuaWNQYXlsb2FkIGFzIGNvcmU6OnBhbmljOjpCb3hNZVVwPjo6Z2V0OjpoOTNiNTVhMTgzZTk0MDNkZldHd2FzbXBhcnNlcjo6YmluYXJ5X3JlYWRlcjo6QmluYXJ5UmVhZGVyOjpyZWFkX3N0cmluZzo6aGNmN2EzMWFmYTA3YTkxZTdYS3dhc21wYXJzZXI6OmJpbmFyeV9yZWFkZXI6OkJpbmFyeVJlYWRlcjo6cmVhZF9yZWxvY190eXBlOjpoOTkyYWZhYzllODEyMDc1Y1lKd2FzbXBhcnNlcjo6YmluYXJ5X3JlYWRlcjo6QmluYXJ5UmVhZGVyOjpyZWFkX2Jsb2NrdHlwZTo6aDE2NjgxM2U3MTAwZmExMzNaR3dhc21wYXJzZXI6OmJpbmFyeV9yZWFkZXI6OkJpbmFyeVJlYWRlcjo6cmVhZF92YXJfdTg6Omg1ODNiZmQ4MzBkODg4NWFjWztjb3JlOjpzbGljZTo6PGltcGwgW1RdPjo6Y29weV9mcm9tX3NsaWNlOjpoYjEyMGJmMTEzNTcyZmRjNFxMd2FzbXBhcnNlcjo6YmluYXJ5X3JlYWRlcjo6QmluYXJ5UmVhZGVyOjpyZWFkX2dsb2JhbF90eXBlOjpoNWQ5YTMxMjFjOGIyODJmN11Id2FzbV90cmFuc2Zvcm1lcjo6dXRpbHM6OmdldF91MzJfYXNfYnl0ZXNfZm9yX3ZhcnVuaXQ6OmhkMDNjNmQ5ZWJlMWM2OWEyXmM8Y29yZTo6aXRlcjo6YWRhcHRlcnM6Ok1hcDxJLEY+IGFzIGNvcmU6Oml0ZXI6OnRyYWl0czo6aXRlcmF0b3I6Okl0ZXJhdG9yPjo6Zm9sZDo6aDg2M2I1YzM3ZTJmMGE2NTVfTXdhc21wYXJzZXI6OnJlYWRlcnM6OmNvZGVfc2VjdGlvbjo6Q29kZVNlY3Rpb25SZWFkZXI6OnJlYWQ6OmhhYzRiMTQ5NGQwMTg2Y2YzYEZ3YXNtcGFyc2VyOjpwYXJzZXI6OlBhcnNlcjo6cmVhZF9zZWN0aW9uX2JvZHlfYnl0ZXM6OmhlYmRjNzc4NzhjYzM3ZWE0YWd3YXNtcGFyc2VyOjpyZWFkZXJzOjpzb3VyY2VtYXBwaW5ndXJsX3NlY3Rpb246OnJlYWRfc291cmNlbWFwcGluZ3VybF9zZWN0aW9uX2NvbnRlbnQ6Omg1OGFlM2RmMDEwN2UwMWRkYk53YXNtcGFyc2VyOjpiaW5hcnlfcmVhZGVyOjpCaW5hcnlSZWFkZXI6OnJlYWRfZXh0ZXJuYWxfa2luZDo6aDQ3NjEzOTk5Mjg1NzRkZmVjQndhc21wYXJzZXI6OnBhcnNlcjo6UGFyc2VyOjpyZWFkX2Z1bmN0aW9uX2VudHJ5OjpoYzc2YjBmOGJmMjBhMmMxYWRBd2FzbXBhcnNlcjo6cGFyc2VyOjpQYXJzZXI6OnJlYWRfbGlua2luZ19lbnRyeTo6aDk4YjY4NzVjYmQyNDBkMzNlSHdhc21wYXJzZXI6OnJlYWRlcnM6OmNvZGVfc2VjdGlvbjo6TG9jYWxzUmVhZGVyOjpyZWFkOjpoZmZjMzJiZDc4NGYzM2FiN2ZKd2FzbXBhcnNlcjo6YmluYXJ5X3JlYWRlcjo6QmluYXJ5UmVhZGVyOjpyZWFkX25hbWVfdHlwZTo6aDNhZTY0NzE4ZGY1MzgwMDZnTXdhc21wYXJzZXI6OmJpbmFyeV9yZWFkZXI6OkJpbmFyeVJlYWRlcjo6cmVhZF9saW5raW5nX3R5cGU6Omg0NzZhMDY0YmI1NWVkMzY2aA9sb3dlckk2NEltcG9ydHNpUXdhc21wYXJzZXI6OmJpbmFyeV9yZWFkZXI6OkJpbmFyeVJlYWRlcjo6cmVhZF9yZXNpemFibGVfbGltaXRzOjpoMDVkMmQyMTU2MjUwODkwOGo5Y29yZTo6dW5pY29kZTo6cHJpbnRhYmxlOjppc19wcmludGFibGU6Omg2MmJmNTk0YzI2MzI5NWNla0ljb3JlOjpmbXQ6Om51bTo6PGltcGwgY29yZTo6Zm10OjpMb3dlckhleCBmb3IgaTg+OjpmbXQ6OmgwMjY4OTA5MGE1ZDU0NTc4bEljb3JlOjpmbXQ6Om51bTo6PGltcGwgY29yZTo6Zm10OjpVcHBlckhleCBmb3IgaTg+OjpmbXQ6Omg3ZmZiZWI3OGY0NTFhZDAxbVB3YXNtcGFyc2VyOjpyZWFkZXJzOjplbGVtZW50X3NlY3Rpb246OkVsZW1lbnRJdGVtc1JlYWRlcjo6bmV3OjpoZGZhNWJkMzQ0ZDI1NDIwN25TPGFsbG9jOjp2ZWM6OlZlYzxUPiBhcyBhbGxvYzo6dmVjOjpTcGVjRXh0ZW5kPFQsST4+OjpzcGVjX2V4dGVuZDo6aDBiN2EwNTRiMzA4MmJjNGZvSmNvcmU6OmZtdDo6bnVtOjo8aW1wbCBjb3JlOjpmbXQ6Okxvd2VySGV4IGZvciBpMzI+OjpmbXQ6OmhlNmQyMzUxYWZiYzI5OTE0cEpjb3JlOjpmbXQ6Om51bTo6PGltcGwgY29yZTo6Zm10OjpVcHBlckhleCBmb3IgaTMyPjo6Zm10OjpoYzYyMjBjZjMzNDBlNzliN3FQd2FzbXBhcnNlcjo6YmluYXJ5X3JlYWRlcjo6QmluYXJ5UmVhZGVyOjpyZWFkX21lbWFyZ19vZl9hbGlnbjo6aDVjMWI3YmQ4MDc3OTY1NjZyQXdhc21wYXJzZXI6OnJlYWRlcnM6Om1vZHVsZTo6TW9kdWxlUmVhZGVyOjpuZXc6Omg0YjhmMzQ1OGI3MGIxMzMxc1t3YXNtcGFyc2VyOjpyZWFkZXJzOjpkYXRhX2NvdW50X3NlY3Rpb246OnJlYWRfZGF0YV9jb3VudF9zZWN0aW9uX2NvbnRlbnQ6OmhkYzFmZTJkNTY4NTRmZTA4dFF3YXNtcGFyc2VyOjpyZWFkZXJzOjpzdGFydF9zZWN0aW9uOjpyZWFkX3N0YXJ0X3NlY3Rpb25fY29udGVudDo6aGMxNjgyMjNiNDgzY2M3NTl1S3dhc21wYXJzZXI6OmJpbmFyeV9yZWFkZXI6OkJpbmFyeVJlYWRlcjo6cmVhZF9sYW5lX2luZGV4OjpoZjgyNjJjM2IwNWU1OGE1YnZId2FzbXBhcnNlcjo6cmVhZGVyczo6bmFtZV9zZWN0aW9uOjpOYW1pbmdSZWFkZXI6OnJlYWQ6OmhmYTE0MTg4MWMzYmVjMWExd1p3YXNtcGFyc2VyOjpyZWFkZXJzOjpuYW1lX3NlY3Rpb246OkxvY2FsTmFtZTo6Z2V0X2Z1bmN0aW9uX2xvY2FsX3JlYWRlcjo6aDVmMjBjZGFiMmY1NGY4ODB4UHdhc21wYXJzZXI6OnJlYWRlcnM6OmV4cG9ydF9zZWN0aW9uOjpFeHBvcnRTZWN0aW9uUmVhZGVyOjpuZXc6OmhlMzA1ZmVlNWE3YTNhZWU0eUx3YXNtcGFyc2VyOjpyZWFkZXJzOjpkYXRhX3NlY3Rpb246OkRhdGFTZWN0aW9uUmVhZGVyOjpuZXc6Omg3YTAwMmEyNzM5NTliMjZhelB3YXNtcGFyc2VyOjpyZWFkZXJzOjpnbG9iYWxfc2VjdGlvbjo6R2xvYmFsU2VjdGlvblJlYWRlcjo6bmV3OjpoZmY2YzA3YWJmNzBlNDliZHtSd2FzbXBhcnNlcjo6cmVhZGVyczo6ZWxlbWVudF9zZWN0aW9uOjpFbGVtZW50U2VjdGlvblJlYWRlcjo6bmV3OjpoOWRjMWU2YWRlNDg4NDEyN3xSd2FzbXBhcnNlcjo6cmVhZGVyczo6bGlua2luZ19zZWN0aW9uOjpMaW5raW5nU2VjdGlvblJlYWRlcjo6bmV3OjpoZWE3MmQ2YmEyZTFkYWFmMH1Hd2FzbXBhcnNlcjo6YmluYXJ5X3JlYWRlcjo6QmluYXJ5UmVhZGVyOjpza2lwX3N0cmluZzo6aDU0ZTFlMmExZGIxOTJhMTR+R3dhc21wYXJzZXI6OnJlYWRlcnM6Om5hbWVfc2VjdGlvbjo6TmFtaW5nUmVhZGVyOjpuZXc6Omg0ZjBlY2Q1MDEyM2E1MGJif1R3YXNtcGFyc2VyOjpyZWFkZXJzOjpmdW5jdGlvbl9zZWN0aW9uOjpGdW5jdGlvblNlY3Rpb25SZWFkZXI6Om5ldzo6aGVlODVkZTM1NWExZDkyMWWAAVB3YXNtcGFyc2VyOjpyZWFkZXJzOjppbXBvcnRfc2VjdGlvbjo6SW1wb3J0U2VjdGlvblJlYWRlcjo6bmV3OjpoMjE2NjA3NTMyMjJhMWQ4MoEBUHdhc21wYXJzZXI6OnJlYWRlcnM6Om1lbW9yeV9zZWN0aW9uOjpNZW1vcnlTZWN0aW9uUmVhZGVyOjpuZXc6Omg0MmJmNmQzNzhlNDRkODMzggFOd2FzbXBhcnNlcjo6cmVhZGVyczo6dGFibGVfc2VjdGlvbjo6VGFibGVTZWN0aW9uUmVhZGVyOjpuZXc6OmhkNjQwYzg1YjRjZTY1MmY1gwFMd2FzbXBhcnNlcjo6cmVhZGVyczo6dHlwZV9zZWN0aW9uOjpUeXBlU2VjdGlvblJlYWRlcjo6bmV3OjpoMGUwZWJlNTQ5YjkyNDRiMoQBTHdhc21wYXJzZXI6OnJlYWRlcnM6OmNvZGVfc2VjdGlvbjo6Q29kZVNlY3Rpb25SZWFkZXI6Om5ldzo6aGYwNzI4Y2ZjZDdhYTNhZTGFAT1hbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnNocmlua190b19maXQ6OmhmZTdmMDZlZWNkZDVhMjNkhgE9YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpzaHJpbmtfdG9fZml0OjpoOTQ1YWUzM2YyZjA0ZTE1MYcBPWFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6c2hyaW5rX3RvX2ZpdDo6aDk2NmE5Y2I1YjUyMGY2OWKIAT1hbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnNocmlua190b19maXQ6OmhhNWQwZDE4ZTg0ZjUwMTBliQE9YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpzaHJpbmtfdG9fZml0OjpoYjhiOTBmNzE3MjdmNzgwMYoBVXdhc21wYXJzZXI6OnJlYWRlcnM6OmNvZGVfc2VjdGlvbjo6RnVuY3Rpb25Cb2R5OjpnZXRfbG9jYWxzX3JlYWRlcjo6aDUxMTYwZGFiOWRkMWYxOTaLAS5hbGxvYzo6dmVjOjpWZWM8VD46OnJlc2VydmU6OmhmMjAzZDk5ODY4MDhlMDEwjAE/d2FzbV9iaW5kZ2VuOjpjb252ZXJ0OjpjbG9zdXJlczo6aW52b2tlM19tdXQ6OmhhNTM3NWEwM2I5MjM2Y2Q5jQEtYWxsb2M6OnZlYzo6RHJhaW48VD46OmZpbGw6OmhmMGUxYjc3YjU0N2E5OTgyjgFHd2FzbXBhcnNlcjo6YmluYXJ5X3JlYWRlcjo6QmluYXJ5UmVhZGVyOjpyZWFkX21lbWFyZzo6aDkzNWJlMzcyOGQ4MzlhOTePAVM8YWxsb2M6OnZlYzo6VmVjPFQ+IGFzIGFsbG9jOjp2ZWM6OlNwZWNFeHRlbmQ8VCxJPj46OnNwZWNfZXh0ZW5kOjpoNmEwOWY0N2M2NTUzMWJlMJABB3ZlcnNpb26RAUd3YXNtcGFyc2VyOjpiaW5hcnlfcmVhZGVyOjpCaW5hcnlSZWFkZXI6OnJlYWRfdmFyX3UxOjpoMWY3ZmFlMjBmNDhiNjUzZpIBR3dhc21wYXJzZXI6OmJpbmFyeV9yZWFkZXI6OkJpbmFyeVJlYWRlcjo6cmVhZF92YXJfdTc6Omg2ZmYzYTZmNWI2NTlmNjVlkwE9YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpzaHJpbmtfdG9fZml0OjpoMDVjNmJjNjdiZjFiMDk3ZZQBLmNvcmU6OnJlc3VsdDo6dW53cmFwX2ZhaWxlZDo6aDQyNmExZWE5MjYzYjkyNzKVAUg8YWxsb2M6OmJveGVkOjpCb3g8W1RdPiBhcyBjb3JlOjpjbG9uZTo6Q2xvbmU+OjpjbG9uZTo6aDM5YmQ1OGZkNTg4MzhiY2aWATthbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OmFsbG9jYXRlX2luOjpoOTZkYzc3YmQyZDc2ZGIyZpcBO2FsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6YWxsb2NhdGVfaW46OmhjZjk2MjZmYmNmNzI0Yzk3mAEHbWVtbW92ZZkBO2FsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6YWxsb2NhdGVfaW46OmgyNWU3YjVmNjMzOTI1YzIwmgE7YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjphbGxvY2F0ZV9pbjo6aGE2ZjJmYmZjMmRkOGQyY2SbAUg8YWxsb2M6OnZlYzo6RHJhaW48VD4gYXMgY29yZTo6b3BzOjpkcm9wOjpEcm9wPjo6ZHJvcDo6aDZkMmY0YzJmNTI4OGJhOGacAUF3YXNtcGFyc2VyOjpwcmltaXRpdmVzOjpCaW5hcnlSZWFkZXJFcnJvcjo6bmV3OjpoMWZlMmNjNTQxMWFlNDg1NJ0BRndhc21wYXJzZXI6OmJpbmFyeV9yZWFkZXI6OkJpbmFyeVJlYWRlcjo6cmVhZF9ieXRlczo6aDUyNjFjOTE1NDFlMjYxYzGeAUR3YXNtcGFyc2VyOjpiaW5hcnlfcmVhZGVyOjpCaW5hcnlSZWFkZXI6OnJlYWRfdTY0OjpoODgxY2QyZDg0NjFkYmUyYZ8BLGFsbG9jOjp2ZWM6OlZlYzxUPjo6ZHJhaW46Omg1YWZhYTJiZmJkYjE0OTY1oAFGPGFsbG9jOjp2ZWM6OlZlYzxUPiBhcyBjb3JlOjpvcHM6OmRyb3A6OkRyb3A+Ojpkcm9wOjpoZTE1N2YzNzg4YWI1MjQ2ZaEBR3dhc21wYXJzZXI6OmJpbmFyeV9yZWFkZXI6OkJpbmFyeVJlYWRlcjo6c2tpcF92YXJfMzI6Omg3ZDMxYWJkZWM3Zjg0NDM1ogERcnVzdF9iZWdpbl91bndpbmSjAUo8Y29yZTo6b3BzOjpyYW5nZTo6UmFuZ2U8SWR4PiBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoNWZmYzIzMzUyZGE2ZTg1MaQBRHdhc21wYXJzZXI6OmJpbmFyeV9yZWFkZXI6OkJpbmFyeVJlYWRlcjo6cmVhZF91MzI6OmhiZmNlZTZlNjViMzA0MjY3pQFKd2FzbXBhcnNlcjo6YmluYXJ5X3JlYWRlcjo6QmluYXJ5UmVhZGVyOjpza2lwX2luaXRfZXhwcjo6aGQ2YTgwYWRlM2U0MGFlOTSmAT1hbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnNocmlua190b19maXQ6Omg0YmRhMDRjMDBlODU0YmNkpwEyd2FzbXBhcnNlcjo6cGFyc2VyOjpQYXJzZXI6Om5ldzo6aDg3N2U2ZmQ2ZDk4MGExNjKoATZjb3JlOjpwYW5pY2tpbmc6OnBhbmljX2JvdW5kc19jaGVjazo6aGU4MjczZTYwMGMzYzhmZDCpATRjb3JlOjpzbGljZTo6c2xpY2VfaW5kZXhfbGVuX2ZhaWw6Omg2OGQxNDRjMTQ4YzlkNWY4qgE2Y29yZTo6c2xpY2U6OnNsaWNlX2luZGV4X29yZGVyX2ZhaWw6OmhmYWZhMmQ2ZWNmZDQ4MzQ0qwFEPGNvcmU6OmZtdDo6QXJndW1lbnRzIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aGExZjIyMDg2ZDEwMDRmMzisATZ3YXNtX3RyYW5zZm9ybWVyOjpsb3dlcl9pNjRfaW1wb3J0czo6aGE3Y2JjMjIxYWRlMmFkMzGtAVM8YWxsb2M6OnZlYzo6VmVjPFQ+IGFzIGFsbG9jOjp2ZWM6OlNwZWNFeHRlbmQ8VCxJPj46OnNwZWNfZXh0ZW5kOjpoYzg1MTc3ZDUxOWQxMzYzOK4BOjwmbXV0IFcgYXMgY29yZTo6Zm10OjpXcml0ZT46OndyaXRlX2ZtdDo6aGE2MTVlMGVmMTdhNDM3MjOvAQ1fX3JkbF9yZWFsbG9jsAFEPGFsbG9jOjp2ZWM6OlZlYzxUPiBhcyBjb3JlOjpjbG9uZTo6Q2xvbmU+OjpjbG9uZTo6aDNjNmU2ZGQ3OGEzZjU0NDOxATdhbGxvYzo6dmVjOjpWZWM8VD46OmludG9fYm94ZWRfc2xpY2U6Omg5NjVjMTRmM2EzYjVmZTg2sgEnY29yZTo6c3RyOjpmcm9tX3V0Zjg6OmhlMjljOGU3ZjYzMDQ5MDE5swEtYWxsb2M6OnZlYzo6VmVjPFQ+OjppbnNlcnQ6OmhmMDRlMDMyMjhmMDYxMDE2tAE7YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjphbGxvY2F0ZV9pbjo6aDE1YzI5Y2FlYzFlYmQyZTa1ATthbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OmFsbG9jYXRlX2luOjpoMzdjM2I5ZjNlMGY5Y2RlZrYBLWFsbG9jOjp2ZWM6OlZlYzxUPjo6cmVtb3ZlOjpoYzZiMmMyMDMwODc3MGE4ZLcBLmNvcmU6Om9wdGlvbjo6ZXhwZWN0X2ZhaWxlZDo6aGFjMTVlMDdiMzU5MmUxZjC4AVBhbGxvYzo6c2xpY2U6OjxpbXBsIGFsbG9jOjpib3Jyb3c6OlRvT3duZWQgZm9yIFtUXT46OnRvX293bmVkOjpoODk1NmVmYzkzZDJjYTVmZLkBQ3dhc21wYXJzZXI6OmJpbmFyeV9yZWFkZXI6OkJpbmFyeVJlYWRlcjo6cmVhZF91ODo6aDUxNmU4ZTgyZjdiODAyY2O6AUY8YWxsb2M6OnZlYzo6VmVjPFQ+IGFzIGNvcmU6Om9wczo6ZHJvcDo6RHJvcD46OmRyb3A6OmgyZDU0N2ZjZDZhNTUyOTZluwFjPHN0ZDo6cGFuaWNraW5nOjpiZWdpbl9wYW5pYzo6UGFuaWNQYXlsb2FkPEE+IGFzIGNvcmU6OnBhbmljOjpCb3hNZVVwPjo6dGFrZV9ib3g6OmhmN2ZjMjBmYzlkNWQyNDEyvAFQd2FzbXBhcnNlcjo6cmVhZGVyczo6bW9kdWxlOjpTZWN0aW9uOjpnZXRfbmFtZV9zZWN0aW9uX3JlYWRlcjo6aDU2NWI0NGU2ZDM0NTUxNWS9ATdhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmU6Omg0ZjNhNDNhNTcwN2QzMWY2vgE3YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpyZXNlcnZlOjpoNTNmNDVlODQxZmMzM2QzMb8BN2FsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6cmVzZXJ2ZTo6aDU4NWIwNDZkOWQxOTRmYWbAATdhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmU6Omg3MTgyNjI1M2ZjZTg3YWU2wQE3YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpyZXNlcnZlOjpoZDE2NDJlOGFiZWNjNWFhZMIBN2FsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6cmVzZXJ2ZTo6aGRlOWY3N2UwMjAyM2E5YznDATdhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmU6OmhhZGQ5ZWQ0NjhkZDRkYTUyxAE3YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpyZXNlcnZlOjpoMWY4Y2JhMDExNjBhYzc3MMUBN2FsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6cmVzZXJ2ZTo6aDRhYzkwODMwYzBjNjg3N2bGATdhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmU6Omg0YzI2ZTM0ZDljZDcyN2EwxwE3YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpyZXNlcnZlOjpoNTFiNDQ5MzkzYjBiZjVlYsgBN2FsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6cmVzZXJ2ZTo6aDg4NTg1ZTNkNDM1NzM0YWHJATdhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmU6OmhhNzRjNTRmNmQ0OWY1ZGVjygEyYWxsb2M6OnZlYzo6RHJhaW48VD46Om1vdmVfdGFpbDo6aDIwYjE2OGJiNDE1YTViYWXLAQRiY21wzAFDY29yZTo6Zm10OjpGb3JtYXR0ZXI6OnBhZF9pbnRlZ3JhbDo6d3JpdGVfcHJlZml4OjpoNjRkZGQ4YWNlMGU0Y2ZhNc0BSzxhbGxvYzo6dmVjOjpJbnRvSXRlcjxUPiBhcyBjb3JlOjpvcHM6OmRyb3A6OkRyb3A+Ojpkcm9wOjpoYTdjYzRmMTE2NmQ2OWU0ZM4BMnN0ZDo6cGFuaWNraW5nOjpiZWdpbl9wYW5pY19mbXQ6OmhjZGE4YjgzYzhhYTA4ZWUwzwESX19yZGxfYWxsb2NfemVyb2Vk0AFTd2FzbXBhcnNlcjo6cmVhZGVyczo6bW9kdWxlOjpTZWN0aW9uOjpnZXRfbGlua2luZ19zZWN0aW9uX3JlYWRlcjo6aGViZGI5Y2MxNjA4OTAzNWHRAVF3YXNtcGFyc2VyOjpyZWFkZXJzOjptb2R1bGU6OlNlY3Rpb246OmdldF9yZWxvY19zZWN0aW9uX3JlYWRlcjo6aDFhNjIyM2U2ZTNlMzA3YjDSAV13YXNtcGFyc2VyOjpyZWFkZXJzOjptb2R1bGU6OlNlY3Rpb246OmdldF9zb3VyY2VtYXBwaW5ndXJsX3NlY3Rpb25fY29udGVudDo6aGU0OTZlZTYzNWVmYTA1NGHTAVJ3YXNtcGFyc2VyOjpwYXJzZXI6OlBhcnNlcjo6Y3JlYXRlX2N1c3RvbV9zZWN0aW9uX2JpbmFyeV9yZWFkZXI6OmhkOWY3N2YyNTBiNTRiYTBm1AFGPGFsbG9jOjp2ZWM6OlZlYzxUPiBhcyBjb3JlOjpvcHM6OmRyb3A6OkRyb3A+Ojpkcm9wOjpoMmI3NzRiMjUyYzIyZjNlMtUBUHdhc21wYXJzZXI6OnJlYWRlcnM6Om1vZHVsZTo6TW9kdWxlUmVhZGVyOjp2ZXJpZnlfc2VjdGlvbl9lbmQ6OmhhNDBjMDQ0Y2I5NWViYjI01gEpY29yZTo6cGFuaWNraW5nOjpwYW5pYzo6aDA4ZDAyZWYyN2YwNDE3NGPXAQZtZW1jcHnYATBjb3JlOjpwdHI6OnJlYWxfZHJvcF9pbl9wbGFjZTo6aDkwYjAxMTgyN2U3YTFiMzjZARFfX3diaW5kZ2VuX21hbGxvY9oBQ3dhc21wYXJzZXI6OnBhcnNlcjo6UGFyc2VyOjpyZWFkX2RhdGFfZW50cnlfYm9keTo6aGFmOTg1ZTkwZmJiMjcxMDLbAWc8YWxsb2M6OnZlYzo6VmVjPFQ+IGFzIGFsbG9jOjp2ZWM6OlNwZWNFeHRlbmQ8JlQsY29yZTo6c2xpY2U6Okl0ZXI8VD4+Pjo6c3BlY19leHRlbmQ6OmgyYjhiM2ZmZjVjNjdiMWEx3AEwPCZUIGFzIGNvcmU6OmZtdDo6RGVidWc+OjpmbXQ6Omg0OTEyNTJjMjZmZTM2OWEy3QEwPCZUIGFzIGNvcmU6OmZtdDo6RGVidWc+OjpmbXQ6Omg4YThkN2YyYzA2MmZlZWFj3gFQd2FzbXBhcnNlcjo6cmVhZGVyczo6bW9kdWxlOjpTZWN0aW9uOjpnZXRfdHlwZV9zZWN0aW9uX3JlYWRlcjo6aDBmNjQ1MWE3YjkzMDQxMWPfAVR3YXNtcGFyc2VyOjpyZWFkZXJzOjptb2R1bGU6OlNlY3Rpb246OmdldF9mdW5jdGlvbl9zZWN0aW9uX3JlYWRlcjo6aDNiZjVlNzJkNzc1Njc0NGTgAVB3YXNtcGFyc2VyOjpyZWFkZXJzOjptb2R1bGU6OlNlY3Rpb246OmdldF9jb2RlX3NlY3Rpb25fcmVhZGVyOjpoZGMyNDA3ZTQ2ODIxMTMyZuEBUndhc21wYXJzZXI6OnJlYWRlcnM6Om1vZHVsZTo6U2VjdGlvbjo6Z2V0X2V4cG9ydF9zZWN0aW9uX3JlYWRlcjo6aDdjMmNiZTVmNDAwYzg4MWHiAVJ3YXNtcGFyc2VyOjpyZWFkZXJzOjptb2R1bGU6OlNlY3Rpb246OmdldF9pbXBvcnRfc2VjdGlvbl9yZWFkZXI6OmhkY2RhZWUyOGViMjUxMzQy4wFSd2FzbXBhcnNlcjo6cmVhZGVyczo6bW9kdWxlOjpTZWN0aW9uOjpnZXRfZ2xvYmFsX3NlY3Rpb25fcmVhZGVyOjpoMjg4NzM3NWY0OGJiNTY1M+QBUndhc21wYXJzZXI6OnJlYWRlcnM6Om1vZHVsZTo6U2VjdGlvbjo6Z2V0X21lbW9yeV9zZWN0aW9uX3JlYWRlcjo6aGMyNmRmMWYzYjY2OGQyNjTlAVB3YXNtcGFyc2VyOjpyZWFkZXJzOjptb2R1bGU6OlNlY3Rpb246OmdldF9kYXRhX3NlY3Rpb25fcmVhZGVyOjpoOTJhNDMyOWJhOGU1ZDBlM+YBUXdhc21wYXJzZXI6OnJlYWRlcnM6Om1vZHVsZTo6U2VjdGlvbjo6Z2V0X3RhYmxlX3NlY3Rpb25fcmVhZGVyOjpoMzhlOGU5OTRmYmUyYWU4NecBU3dhc21wYXJzZXI6OnJlYWRlcnM6Om1vZHVsZTo6U2VjdGlvbjo6Z2V0X2VsZW1lbnRfc2VjdGlvbl9yZWFkZXI6OmhjYTM0ZTY3MDQxNGVhNzZm6AFSd2FzbXBhcnNlcjo6cmVhZGVyczo6bW9kdWxlOjpTZWN0aW9uOjpnZXRfc3RhcnRfc2VjdGlvbl9jb250ZW50OjpoYjJmNzE4ZGQ1MDY0YTRiY+kBV3dhc21wYXJzZXI6OnJlYWRlcnM6Om1vZHVsZTo6U2VjdGlvbjo6Z2V0X2RhdGFfY291bnRfc2VjdGlvbl9jb250ZW50OjpoMTQ3ZDY3ZDNmNWQxN2M0YeoBOjwmbXV0IFcgYXMgY29yZTo6Zm10OjpXcml0ZT46OndyaXRlX3N0cjo6aGU2ZGMyMGIxNjUzM2U3MTTrATBjb3JlOjpwdHI6OnJlYWxfZHJvcF9pbl9wbGFjZTo6aDM1ZjE2NmUwNjBjODcwMzjsATBjb3JlOjpwdHI6OnJlYWxfZHJvcF9pbl9wbGFjZTo6aDM1ZjE2NmUwNjBjODcwMzjtATBjb3JlOjpwdHI6OnJlYWxfZHJvcF9pbl9wbGFjZTo6aDM1ZjE2NmUwNjBjODcwMzjuATBjb3JlOjpwdHI6OnJlYWxfZHJvcF9pbl9wbGFjZTo6aDM1ZjE2NmUwNjBjODcwMzjvATBjb3JlOjpwdHI6OnJlYWxfZHJvcF9pbl9wbGFjZTo6aDM1ZjE2NmUwNjBjODcwMzjwATBjb3JlOjpwdHI6OnJlYWxfZHJvcF9pbl9wbGFjZTo6aDM1ZjE2NmUwNjBjODcwMzjxATBjb3JlOjpwdHI6OnJlYWxfZHJvcF9pbl9wbGFjZTo6aDM1ZjE2NmUwNjBjODcwMzjyAS1jb3JlOjpwYW5pY2tpbmc6OnBhbmljX2ZtdDo6aDdiODBmZWQ3MjU2YmY2NmbzAQZtZW1zZXT0AS5zdGQ6OnBhbmlja2luZzo6YmVnaW5fcGFuaWM6OmgwZmZlYTZmNGQzYzc5MTM59QEwY29yZTo6cHRyOjpyZWFsX2Ryb3BfaW5fcGxhY2U6OmhkMzFiNDk3NmE0OTAwMjZk9gEKcnVzdF9wYW5pY/cBP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTRfbXV0OjpoZGY4ZGIyMTBlOWQ3NTQ1MPgBP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoMTZlNTUwZDBhZTNlYTliZfkBP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoMTlmYTU5Nzc2ZjJiYzdiYfoBP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoMWFjMjI5NjhkOTFlYzIzZPsBP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoMjEwNmQ2NDc1ODQwNGE1NfwBP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoNTQwNmZmZWY5M2VhMmQ2Zv0BP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoNzk0OTM3MmRiOGQ4NDNhOf4BP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoODM5ZDYyZTM2YzFhYzQwOP8BP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoYTVlMjdmZDBmNTU5NTRiNIACP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoYTlmMDM5MWU3MGM3YTQyN4ECP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoYWVjYWZjMTZjMmJjYzc5NYICP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoYjBhODQ2MmY5MWVhMjk5MYMCP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoYjcxOGIwODJjN2Q3ZjI2OIQCP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoYzQ2NTVjMzUwMWE5MzY3MIUCP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTJfbXV0OjpoN2I0ZDZmMjZkZDY0ZGU1Y4YCP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTJfbXV0OjpoZTM0MWEwNDRjMjZlYzRhZYcCO3dhc21fYmluZGdlbjo6YW55cmVmOjpIRUFQX1NMQUI6Ol9fZ2V0aXQ6Omg1NzljNTU5NGE5MDRkMTRkiAILX19yZGxfYWxsb2OJAoABY29yZTo6c3RyOjp0cmFpdHM6OjxpbXBsIGNvcmU6OnNsaWNlOjpTbGljZUluZGV4PHN0cj4gZm9yIGNvcmU6Om9wczo6cmFuZ2U6OlJhbmdlPHVzaXplPj46OmluZGV4Ojp7e2Nsb3N1cmV9fTo6aDJiYmM1NGU4ZWI3MzBmZTCKAj93YXNtX2JpbmRnZW46OmNvbnZlcnQ6OmNsb3N1cmVzOjppbnZva2UxX211dDo6aGUzZWNiYTY4NGMxZTcxNTCLAk88YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+IGFzIGNvcmU6Om9wczo6ZHJvcDo6RHJvcD46OmRyb3A6OmgwYjYzNWJiMjRiMjAyOTgzjAJePHN0ZDo6cGFuaWNraW5nOjpiZWdpbl9wYW5pYzo6UGFuaWNQYXlsb2FkPEE+IGFzIGNvcmU6OnBhbmljOjpCb3hNZVVwPjo6Z2V0OjpoNDUyZGEzZDNiYWQyNjVmMI0CPmNvcmU6OnBhbmljOjpMb2NhdGlvbjo6aW50ZXJuYWxfY29uc3RydWN0b3I6OmgzMzhlZmM1Y2NkYzcyMjkwjgI+YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpkZWFsbG9jX2J1ZmZlcjo6aGE3MDBlMjhjNmRlODkwOWSPAk88YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+IGFzIGNvcmU6Om9wczo6ZHJvcDo6RHJvcD46OmRyb3A6OmgwY2UyZjg1YWI0Y2UxMjkykAIwY29yZTo6cHRyOjpyZWFsX2Ryb3BfaW5fcGxhY2U6OmgwNDhhOTJkNmI5NTVhMGQ3kQIIcnVzdF9vb22SAjVhbGxvYzo6dmVjOjpWZWM8VD46OmZyb21fcmF3X3BhcnRzOjpoOTdlZGFiOWZmZGExOWY5NJMCMmNvcmU6Om9wdGlvbjo6T3B0aW9uPFQ+Ojp1bndyYXA6Omg3NzEzMTE2ZDE4NzMyYjc5lAIyY29yZTo6b3B0aW9uOjpPcHRpb248VD46OnVud3JhcDo6aDlkYzIzYmIwMTUyZmZlN2WVAg5fX3J1c3RfcmVhbGxvY5YCSTxhbGxvYzo6dmVjOjpWZWM8VD4gYXMgY29yZTo6b3BzOjpkZXJlZjo6RGVyZWY+OjpkZXJlZjo6aDcyYTQ1MWY0NDcxNjQ2OWWXAkk8YWxsb2M6OnZlYzo6VmVjPFQ+IGFzIGNvcmU6Om9wczo6ZGVyZWY6OkRlcmVmPjo6ZGVyZWY6OmhhMmZiOWEzNTE0ZGMyNjYzmAJQPGFsbG9jOjp2ZWM6OlZlYzxUPiBhcyBjb3JlOjpvcHM6OmRlcmVmOjpEZXJlZk11dD46OmRlcmVmX211dDo6aDIzMmI4MzQ2YjBmN2I5NTaZAlA8YWxsb2M6OnZlYzo6VmVjPFQ+IGFzIGNvcmU6Om9wczo6ZGVyZWY6OkRlcmVmTXV0Pjo6ZGVyZWZfbXV0OjpoOGI3MTVlZTM3NzBmYzE3NpoCD19fd2JpbmRnZW5fZnJlZZsCQmRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M6OmNhbGxvY19tdXN0X2NsZWFyOjpoYmNhYzkzYWY4NWE1NzcwNZwCMDwmVCBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoNzhhYjhkZjFlODE5MGU1M50CDF9fcnVzdF9hbGxvY54CE19fcnVzdF9hbGxvY196ZXJvZWSfAjxhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQ+Ojpmcm9tX3Jhd19wYXJ0czo6aDg5NDlhOWRlYjkxNDI2ZGSgAjY8VCBhcyBjb3JlOjpjb252ZXJ0OjpGcm9tPFQ+Pjo6ZnJvbTo6aDZmZTY2NjUwZjYyNjNiMzihAjA8JlQgYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aDY0ZmVlMjIyNTA5ZWQ1MWOiAjI8JlQgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpoYjllZjg3ZWMzY2IzMWU0OaMCLWNvcmU6OmZtdDo6QXJndW1lbnRWMTo6bmV3OjpoNzUwMzdhYTIwNjg4MDE0ZaQCLWNvcmU6OmZtdDo6QXJndW1lbnRWMTo6bmV3OjpoOTEwNDdjMmJlOTljOGExMqUCTjxJIGFzIGNvcmU6Oml0ZXI6OnRyYWl0czo6Y29sbGVjdDo6SW50b0l0ZXJhdG9yPjo6aW50b19pdGVyOjpoNmY4NjEyODJkOWI1MTMwYqYCTjxJIGFzIGNvcmU6Oml0ZXI6OnRyYWl0czo6Y29sbGVjdDo6SW50b0l0ZXJhdG9yPjo6aW50b19pdGVyOjpoOTQ4ZjYyZjk3YzIzZDc3NqcCOGFsbG9jOjp2ZWM6OlZlYzxUPjo6ZXh0ZW5kX2Zyb21fc2xpY2U6OmhmZWVjNTY3M2YzZjRkNTMzqAIyPCZUIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aGRjMDNiM2YxZjg2N2U0ZjOpAjhjb3JlOjpmbXQ6OkZvcm1hdHRlcjo6ZGVidWdfbG93ZXJfaGV4OjpoMDdmZGNlMTgwMzdmY2UxOaoCOGNvcmU6OmZtdDo6Rm9ybWF0dGVyOjpkZWJ1Z191cHBlcl9oZXg6Omg2OThmZmI2ZTlkYTk4MDI4qwIOX19ydXN0X2RlYWxsb2OsAjY8VCBhcyBjb3JlOjpjb252ZXJ0OjpJbnRvPFU+Pjo6aW50bzo6aDVkNWNkMmEwYjRjMWEyMTetAi5hbGxvYzo6dmVjOjpWZWM8VD46OnJlc2VydmU6Omg5NTAxMDE2NDE5ZDlhOGQzrgIuYWxsb2M6OnZlYzo6VmVjPFQ+OjpyZXNlcnZlOjpoZTAyOTJiZDgyM2QxMmJkOa8CNGFsbG9jOjpyYXdfdmVjOjpjYXBhY2l0eV9vdmVyZmxvdzo6aGI4ZjQzMzRjNjgxZmUzZTSwAk5jb3JlOjpmbXQ6Om51bTo6aW1wOjo8aW1wbCBjb3JlOjpmbXQ6OkRpc3BsYXkgZm9yIHUzMj46OmZtdDo6aDEwN2VlN2E4ODEwZDBjNTGxAk1jb3JlOjpmbXQ6Om51bTo6aW1wOjo8aW1wbCBjb3JlOjpmbXQ6OkRpc3BsYXkgZm9yIHU4Pjo6Zm10OjpoYjg4OTg5ZTI2MjY2NjFkZLICNGNvcmU6OmZtdDo6QXJndW1lbnRWMTo6c2hvd191c2l6ZTo6aDMyMDZjMjhhNDY1ZTY5NTazAip3YXNtX2JpbmRnZW46OnRocm93X3N0cjo6aDRhYTFhMjFkZGIyZjg3Mma0AjNhbGxvYzo6YWxsb2M6OmhhbmRsZV9hbGxvY19lcnJvcjo6aGUyOWM4MTI3YjE3NzZlYWS1Ai5jb3JlOjpwYW5pYzo6TG9jYXRpb246OmZpbGU6Omg3ZDQ3MWU2YTk4YmI4OWY5tgIzPHN0ciBhcyBjb3JlOjpmbXQ6OkRpc3BsYXk+OjpmbXQ6Omg0NWRlMDI1MWU2NDA4ODVltwINX19yZGxfZGVhbGxvY7gCM2FsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6cHRyOjpoZjViMGE0NzgxZDc3YmU2N7kCM2FsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6cHRyOjpoZmVjM2RkZjg5NGU2ZjEyYroCNXdhc21fYmluZGdlbjo6X19ydDo6bWFsbG9jX2ZhaWx1cmU6Omg3M2JhNDBlODA4M2QzMmUxuwJIYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjphbGxvY2F0ZV9pbjo6e3tjbG9zdXJlfX06OmgzYWFjZDE2ZTM3MDk2Y2RmvAJIYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjphbGxvY2F0ZV9pbjo6e3tjbG9zdXJlfX06OmhmMjFhZTY3NWMxOTAyY2Y4vQJIYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjphbGxvY2F0ZV9pbjo6e3tjbG9zdXJlfX06OmhhM2JiNzE1ZTQ5NDJkMTZlvgJIYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjphbGxvY2F0ZV9pbjo6e3tjbG9zdXJlfX06Omg2MjA1MzdiYTA5NTlkNGFlvwJIYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjphbGxvY2F0ZV9pbjo6e3tjbG9zdXJlfX06Omg2ZDUzMTI2OWUzMmI1ODNhwAJIYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjphbGxvY2F0ZV9pbjo6e3tjbG9zdXJlfX06OmhmNDFkOGI0YTZhZmU2ZjkxwQJIYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjphbGxvY2F0ZV9pbjo6e3tjbG9zdXJlfX06Omg0MjcyYmI3ODdmZDA4YzAywgJIYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjphbGxvY2F0ZV9pbjo6e3tjbG9zdXJlfX06Omg1ODdkMzZlOTY0MTIxZDBlwwJIYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjphbGxvY2F0ZV9pbjo6e3tjbG9zdXJlfX06OmhjOWY0MTY3YjgwYzhiYzA1xAJIYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjphbGxvY2F0ZV9pbjo6e3tjbG9zdXJlfX06Omg2Njg0MTBhNDdhMjI4OTExxQIyY29yZTo6cGFuaWM6OlBhbmljSW5mbzo6bWVzc2FnZTo6aDkzZGFkMDE4ZTA2YTc4NTfGAjNjb3JlOjpwYW5pYzo6UGFuaWNJbmZvOjpsb2NhdGlvbjo6aDg0OTQwNzg5MzhkOWJmZWTHAi5jb3JlOjpwYW5pYzo6TG9jYXRpb246OmxpbmU6Omg0MDA2NzdiODg5MzY3MjIyyAIwY29yZTo6cGFuaWM6OkxvY2F0aW9uOjpjb2x1bW46OmgwZmI3NGQ4ODRmYWY2Mzc5yQI9PFQgYXMgY29yZTo6Y29udmVydDo6VHJ5RnJvbTxVPj46OnRyeV9mcm9tOjpoODZjYTlmYTYxZThhMjUzZMoCMTxUIGFzIGNvcmU6OmFueTo6QW55Pjo6dHlwZV9pZDo6aGRjMGUwNjZhZmZhMDY5ZTDLAjE8VCBhcyBjb3JlOjphbnk6OkFueT46OnR5cGVfaWQ6OmhkNWU4MGFjZmUxOGU4ZDllzAIxPFQgYXMgY29yZTo6YW55OjpBbnk+Ojp0eXBlX2lkOjpoZTBiODg4OWNlZmZlMTQwNs0CJnN0ZDo6cHJvY2Vzczo6YWJvcnQ6OmgyY2Q3NTkxNzE3MDA4MzE2zgISX19ydXN0X3N0YXJ0X3BhbmljzwJBZGxtYWxsb2M6OmRsbWFsbG9jOjpEbG1hbGxvYzo6bWFsbG9jX2FsaWdubWVudDo6aDVjZTRlMjE1NGQ1MWE4ZGPQAjE8VCBhcyBjb3JlOjphbnk6OkFueT46OnR5cGVfaWQ6Omg5ZDcxMGJmNWI3MzkzMTc20QIwY29yZTo6cHRyOjpyZWFsX2Ryb3BfaW5fcGxhY2U6OmhlOGY1OTNlN2QxMjAyODQ10gIwY29yZTo6cHRyOjpyZWFsX2Ryb3BfaW5fcGxhY2U6OmhlOGY1OTNlN2QxMjAyODQ10wIwY29yZTo6cHRyOjpyZWFsX2Ryb3BfaW5fcGxhY2U6OmhlOGY1OTNlN2QxMjAyODQ11AI2PFQgYXMgY29yZTo6Y29udmVydDo6RnJvbTxUPj46OmZyb206OmgwMmM4M2M1ZDg2MWRjYjJm1QI2PFQgYXMgY29yZTo6Y29udmVydDo6RnJvbTxUPj46OmZyb206Omg1M2RhMTRmMDE5NWNhNTZm1gJGPGFsbG9jOjp2ZWM6OlZlYzxUPiBhcyBjb3JlOjpvcHM6OmRyb3A6OkRyb3A+Ojpkcm9wOjpoMjg3MTUxNWMxZmZmYWE4MdcCRjxhbGxvYzo6dmVjOjpWZWM8VD4gYXMgY29yZTo6b3BzOjpkcm9wOjpEcm9wPjo6ZHJvcDo6aDhjMDdmY2U0MGE5MDJmNzDYAjY8VCBhcyBjb3JlOjpjb252ZXJ0OjpGcm9tPFQ+Pjo6ZnJvbTo6aGE5MWJkYzkxMWYwZDA3ZWTZAjBjb3JlOjpwdHI6OnJlYWxfZHJvcF9pbl9wbGFjZTo6aDc5NmU4MjFmNTJjMWExZDbaAjBjb3JlOjpwdHI6OnJlYWxfZHJvcF9pbl9wbGFjZTo6aGUwYWRmYmNiODEwMmIzN2LbAjBjb3JlOjpwdHI6OnJlYWxfZHJvcF9pbl9wbGFjZTo6aDA0OWM5ODgwNTE5MmU3OTHcAlY8c3RkOjpzeXNfY29tbW9uOjp0aHJlYWRfbG9jYWw6OktleSBhcyBjb3JlOjpvcHM6OmRyb3A6OkRyb3A+Ojpkcm9wOjpoOWNlMzlhMTAyZDY1M2EyMN0CN3N0ZDo6YWxsb2M6OmRlZmF1bHRfYWxsb2NfZXJyb3JfaG9vazo6aDE4YzNjMmE5NmViYTQxYjHeAjBjb3JlOjpwdHI6OnJlYWxfZHJvcF9pbl9wbGFjZTo6aDhhMjNlY2I3NWZhMTdiZWMAg4GAgAAJcHJvZHVjZXJzAghsYW5ndWFnZQEEUnVzdAAMcHJvY2Vzc2VkLWJ5AwVydXN0YyUxLjQxLjAtbmlnaHRseSAoMTliZDkzNDY3IDIwMTktMTItMTgpBndhbHJ1cwYwLjEyLjAMd2FzbS1iaW5kZ2VuEjAuMi41MSAoNmQxZGM4MTNjKQ==";

    let wasm;

    let cachegetInt32Memory = null;
    function getInt32Memory() {
        if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== wasm.memory.buffer) {
            cachegetInt32Memory = new Int32Array(wasm.memory.buffer);
        }
        return cachegetInt32Memory;
    }

    let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

    let cachegetUint8Memory = null;
    function getUint8Memory() {
        if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
            cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
        }
        return cachegetUint8Memory;
    }

    function getStringFromWasm(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
    }

    let WASM_VECTOR_LEN = 0;

    function passArray8ToWasm(arg) {
        const ptr = wasm.__wbindgen_malloc(arg.length * 1);
        getUint8Memory().set(arg, ptr / 1);
        WASM_VECTOR_LEN = arg.length;
        return ptr;
    }

    function getArrayU8FromWasm(ptr, len) {
        return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);
    }
    /**
    * i64 lowering that can be done by the browser
    * @param {Uint8Array} wasm_binary
    * @returns {Uint8Array}
    */
    function lowerI64Imports(wasm_binary) {
        const retptr = 8;
        const ret = wasm.lowerI64Imports(retptr, passArray8ToWasm(wasm_binary), WASM_VECTOR_LEN);
        const memi32 = getInt32Memory();
        const v0 = getArrayU8FromWasm(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1]).slice();
        wasm.__wbindgen_free(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 1);
        return v0;
    }

    function init(module) {
        let result;
        const imports = {};
        imports.wbg = {};
        imports.wbg.__wbindgen_throw = function(arg0, arg1) {
            throw new Error(getStringFromWasm(arg0, arg1));
        };

        if ((typeof URL === 'function' && module instanceof URL) || typeof module === 'string' || (typeof Request === 'function' && module instanceof Request)) {

            const response = fetch(module);
            if (typeof WebAssembly.instantiateStreaming === 'function') {
                result = WebAssembly.instantiateStreaming(response, imports)
                .catch(e => {
                    return response
                    .then(r => {
                        if (r.headers.get('Content-Type') != 'application/wasm') {
                            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                            return r.arrayBuffer();
                        } else {
                            throw e;
                        }
                    })
                    .then(bytes => WebAssembly.instantiate(bytes, imports));
                });
            } else {
                result = response
                .then(r => r.arrayBuffer())
                .then(bytes => WebAssembly.instantiate(bytes, imports));
            }
        } else {

            result = WebAssembly.instantiate(module, imports)
            .then(result => {
                if (result instanceof WebAssembly.Instance) {
                    return { instance: result, module };
                } else {
                    return result;
                }
            });
        }
        return result.then(({instance, module}) => {
            wasm = instance.exports;
            init.__wbindgen_wasm_module = module;

            return wasm;
        });
    }

    const e=async()=>(async e=>{try{const a=BigInt(0);return (await WebAssembly.instantiate(e)).instance.exports.b(a)===a}catch(e){return !1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,126,1,126,3,2,1,0,7,5,1,1,98,0,0,10,6,1,4,0,32,0,11]));

    // @ts-ignore
    var initPromise = init(wasmTransformerWasmUrl);
    var lowerI64Imports$1 = function (wasmBinary) { return __awaiter$1(void 0, void 0, void 0, function () {
        var isBigIntSupported;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, e()];
                case 1:
                    isBigIntSupported = _a.sent();
                    if (isBigIntSupported) {
                        return [2 /*return*/, wasmBinary];
                    }
                    return [4 /*yield*/, initPromise];
                case 2:
                    _a.sent();
                    return [2 /*return*/, lowerI64Imports(wasmBinary)];
            }
        });
    }); };

    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var wasi, bytes, loweredBytes, _a, _b, module, instance;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    wasi = new WASI({
                        preopens: {},
                        args: [],
                        bindings: bindings
                    });
                    return [4 /*yield*/, fetch('/some-url')];
                case 1:
                    bytes = _c.sent();
                    _a = lowerI64Imports$1;
                    _b = Uint8Array.bind;
                    return [4 /*yield*/, bytes.arrayBuffer()];
                case 2: return [4 /*yield*/, _a.apply(void 0, [new (_b.apply(Uint8Array, [void 0, _c.sent()]))()])];
                case 3:
                    loweredBytes = _c.sent();
                    return [4 /*yield*/, WebAssembly.compile(loweredBytes)];
                case 4:
                    module = _c.sent();
                    return [4 /*yield*/, WebAssembly.instantiate(module, __assign({}, wasi.getImports(module)))];
                case 5:
                    instance = _c.sent();
                    wasi.start(instance);
                    return [2 /*return*/];
            }
        });
    }); })();

}(crypto, buffer$1));
