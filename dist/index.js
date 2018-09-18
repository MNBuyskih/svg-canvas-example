(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.svg_canvas_example = factory());
}(this, (function () { 'use strict';

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
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

    var differentSvg = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" data-id=\"389343532\"\n     class=\"page start-selection page__cover\" width=\"663.4788599999999px\" height=\"674px\"\n     viewBox=\"0 9.094947017729282e-13 10000 10158.575361391318\">\n    <defs>\n        <style type=\"text/css\">\n@font-face {\n  font-family: \"Mathlete\";\n  font-weight: 400;\n  font-style: normal;\n  src: url(https://mixbook.s3.amazonaws.com/html-fonts/current/mathlete-skinny_latin-basic.woff) format(\"woff\");\n}\n\n@font-face {\n  font-family: \"Ahkio Thin\";\n  font-weight: 400;\n  font-style: normal;\n  src: url(https://mixbook.s3.amazonaws.com/html-fonts/current/ahkio_thin_latin-basic.woff) format(\"woff\");\n}\n        </style>\n    </defs>\n    <g class=\"no-clipping\">\n        <rect x=\"0\" y=\"9.094947017729282e-13\" width=\"10000\" height=\"10158.575361391318\" fill=\"white\"\n              pointer-events=\"none\"></rect>\n        <g>\n            <g class=\"page-item\" opacity=\"1\" id=\"page-item-54bbcfd2-bb81-11e8-8a17-d78a2935afec\"\n               transform=\"translate(-356.25, -356.26231930434005) rotate(0)\" width=\"10712.5\" height=\"10871.1\">\n                <g class=\"page-item--positioning-container\" transform=\"translate(0, 0)\">\n                    <g clip-path=\"url(#clip-path__5517ab70-bb81-11e8-8a17-d78a2935afec)\">\n                        <defs>\n                            <clipPath id=\"clip-path__5517ab70-bb81-11e8-8a17-d78a2935afec\">\n                                <path d=\" M 0,0 L 10712.5,0 L 10712.5,10871.1 L 0,10871.1 L 0,0 Z\"></path>\n                            </clipPath>\n                        </defs>\n                        <rect class=\"page-item--fill\" width=\"10712.5\" height=\"10871.1\" fill=\"rgba(102, 127, 127, 1)\"\n                              opacity=\"1\"></rect>\n                        <g>\n                            <g>\n                                <image class=\"page_background_item start-selection\"\n                                       transform=\"matrix(1 0 0 1 -2408.8 0)\" preserveAspectRatio=\"none\"\n                                       width=\"15530.099999999999\" height=\"10871.1\" opacity=\"1\"\n                                       xlink:href=\"https://s3.amazonaws.com/mixbook_dev/backgrounds/1893306_609590_l.jpg\"></image>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g>\n            <g class=\"page-item\" opacity=\"1\" id=\"page-item-page_text_item-545323613\" data-id=\"545323613\"\n               transform=\"translate(1008.6050000000023, 6260.66268069566) rotate(0)\" width=\"7982.79\" height=\"3324.05\">\n                <g class=\"page-item--positioning-container\" transform=\"translate(0, 0)\">\n                    <g class=\"no-clipping\">\n                        <rect class=\"page-item--fill\" width=\"7982.79\" height=\"3324.05\" fill=\"rgba(0, 0, 0, 0)\"\n                              opacity=\"0\"></rect>\n                        <g transform=\"translate(52.08333333333333, 52.08333333333333)\" width=\"7878.623333333333\">\n                            <text>\n                                <tspan>\n                                    <tspan x=\"919.5402298850574\" y=\"2481.299033023171\" textLength=\"3546.7980295566504\"\n                                           style=\"font-family: Mathlete; font-weight: 400; font-style: normal; font-size: 2222.22px; fill: rgb(255, 255, 255);\">\n                                        Pretty\n                                    </tspan>\n                                    <tspan x=\"5137.748586024448\" y=\"2481.299033023171\" textLength=\"1824.4845831052726\"\n                                           style=\"font-family: Mathlete; font-weight: 400; font-style: normal; font-size: 2222.22px; fill: rgb(255, 255, 255);\">\n                                        cat\n                                    </tspan>\n                                </tspan>\n                            </text>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g>\n            <g class=\"page-item\" opacity=\"1\" id=\"page-item-page_text_item-545323664\" data-id=\"545323664\"\n               transform=\"translate(643.0800000000017, 3791.99268069566) rotate(0)\" width=\"8713.84\" height=\"3324.05\">\n                <g class=\"page-item--positioning-container\" transform=\"translate(0, 0)\">\n                    <g class=\"no-clipping\">\n                        <rect class=\"page-item--fill\" width=\"8713.84\" height=\"3324.05\" fill=\"rgba(0, 0, 0, 0)\"\n                              opacity=\"0\"></rect>\n                        <g transform=\"translate(52.08333333333333, 52.08333333333333)\" width=\"8609.673333333334\">\n                            <text>\n                                <tspan>\n                                    <tspan x=\"364.89691662105463\" y=\"2393.723773034118\" textLength=\"4955.756248859698\"\n                                           style=\"font-family: &quot;Ahkio Thin&quot;; font-weight: 400; font-style: normal; font-size: 2222.22px; fill: rgb(102, 191, 0);\">\n                                        Pretty\n                                    </tspan>\n                                    <tspan x=\"5648.604269293924\" y=\"2393.723773034118\" textLength=\"2597.8379857690206\"\n                                           style=\"font-family: &quot;Ahkio Thin&quot;; font-weight: 400; font-style: normal; font-size: 2222.22px; fill: rgb(102, 191, 0);\">\n                                        cat\n                                    </tspan>\n                                </tspan>\n                            </text>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g filter=\"url(#shadow-page_photo_item-1092028258-0)\">\n            <defs>\n                <filter x=\"-0.4\" y=\"-0.382599999755621\" width=\"1.8\" height=\"1.8\"\n                        id=\"shadow-page_photo_item-1092028258-0\">\n                    <feDropShadow stdDeviation=\"156.37500677257776 156.37500677257776\" dx=\"1.065442730222098e-14\"\n                                  dy=\"174.00000244379044\" flood-color=\"rgba(0, 0, 0, 0.92)\"></feDropShadow>\n                </filter>\n            </defs>\n            <g class=\"page-item\" opacity=\"1\" id=\"page-item-page_photo_item-1092028258\" data-id=\"1092028258\"\n               transform=\"translate(6349.535, 423.2726806956598) rotate(16)\" width=\"3577.4699999999993\"\n               height=\"2504.23\">\n                <g class=\"page-item--positioning-container\" transform=\"translate(136.0000018030405, 136.0000018030405)\">\n                    <g clip-path=\"url(#clip-path__55195920-bb81-11e8-8a17-d78a2935afec)\">\n                        <defs>\n                            <clipPath id=\"clip-path__55195920-bb81-11e8-8a17-d78a2935afec\">\n                                <path d=\" M 0,0 L 3305.4699963939183,0 L 3305.4699963939183,2232.229996393919 L 0,2232.229996393919 L 0,0 Z\"></path>\n                            </clipPath>\n                        </defs>\n                        <rect class=\"page-item--fill\" width=\"3577.4699999999993\" height=\"2504.23\"\n                              fill=\"rgba(0, 0, 0, 0)\" opacity=\"0\"></rect>\n                        <g filter=\"url(#image-effect-page_photo_item-1092028258--1161046036-5519a740-bb81-11e8-8a17-d78a2935afec)\">\n                            <filter id=\"image-effect-page_photo_item-1092028258--1161046036-5519a740-bb81-11e8-8a17-d78a2935afec\"\n                                    width=\"130%\" height=\"130%\">\n                                <feColorMatrix in=\"SourceGraphic\" type=\"matrix\"\n                                               values=\"0.34 0.67 0.12 0 0  0.25 0.67 0.13 0 0  0.17 0.33 0.11 0 0  0 0 0 1 0\"></feColorMatrix>\n                            </filter>\n                            <g>\n                                <image class=\"page_photo_item\"\n                                       transform=\"matrix(-1 1.2246467991473532e-16 -1.2246467991473532e-16 -1 3305.47 2273.03)\"\n                                       preserveAspectRatio=\"none\" width=\"3305.47\" height=\"2313.8300000000004\"\n                                       opacity=\"1\"\n                                       xlink:href=\"https://s3.amazonaws.com/mixbook_dev/photos/918271218_486593_m.jpg\"></image>\n                            </g>\n                        </g>\n                        <g></g>\n                    </g>\n                </g>\n                <path class=\"page-item--border\" transform=\"translate(68.00000090152025, 68.00000090152025)\"\n                      stroke-width=\"136.0000018030405\" stroke=\"#66bf00\" stroke-linecap=\"square\" fill=\"transparent\"\n                      d=\" M 0,0 L 3441.469998196959,0 L 3441.469998196959,2368.2299981969595 L 0,2368.2299981969595 L 0,0 Z\"\n                      style=\"pointer-events: visibleStroke;\"></path>\n            </g>\n        </g>\n        <g class=\"page--folds\">\n            <g class=\"page--folds-dark\"></g>\n            <g class=\"page--folds-light\"></g>\n        </g>\n    </g>\n</svg>\n\n";
    //# sourceMappingURL=differentSvg.js.map

    var sameSvg = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" data-id=\"389343532\"\n     class=\"page start-selection page__cover\" width=\"663.4788599999999px\" height=\"674px\"\n     viewBox=\"0 9.094947017729282e-13 10000 10158.575361391318\">\n    <defs>\n        <style type=\"text/css\">\n@font-face {\n  font-family: \"Mathlete\";\n  font-weight: 400;\n  font-style: normal;\n  src: url(assets/mathlete-skinny_latin-basic.woff) format(\"woff\");\n}\n        \n@font-face {\n  font-family: \"Ahkio Thin\";\n  font-weight: 400;\n  font-style: normal;\n  src: url(assets/ahkio_thin_latin-basic.woff) format(\"woff\");\n}\n\n        </style>\n    </defs>\n    <g class=\"no-clipping\">\n        <rect x=\"0\" y=\"9.094947017729282e-13\" width=\"10000\" height=\"10158.575361391318\" fill=\"white\"\n              pointer-events=\"none\"></rect>\n        <g>\n            <g class=\"page-item\" opacity=\"1\" id=\"page-item-54bbcfd2-bb81-11e8-8a17-d78a2935afec\"\n               transform=\"translate(-356.25, -356.26231930434005) rotate(0)\" width=\"10712.5\" height=\"10871.1\">\n                <g class=\"page-item--positioning-container\" transform=\"translate(0, 0)\">\n                    <g clip-path=\"url(#clip-path__5517ab70-bb81-11e8-8a17-d78a2935afec)\">\n                        <defs>\n                            <clipPath id=\"clip-path__5517ab70-bb81-11e8-8a17-d78a2935afec\">\n                                <path d=\" M 0,0 L 10712.5,0 L 10712.5,10871.1 L 0,10871.1 L 0,0 Z\"></path>\n                            </clipPath>\n                        </defs>\n                        <rect class=\"page-item--fill\" width=\"10712.5\" height=\"10871.1\" fill=\"rgba(102, 127, 127, 1)\"\n                              opacity=\"1\"></rect>\n                        <g>\n                            <g>\n                                <image class=\"page_background_item start-selection\"\n                                       transform=\"matrix(1 0 0 1 -2408.8 0)\" preserveAspectRatio=\"none\"\n                                       width=\"15530.099999999999\" height=\"10871.1\" opacity=\"1\"\n                                       xlink:href=\"assets/1893306_609590_l.jpg\"></image>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g>\n            <g class=\"page-item\" opacity=\"1\" id=\"page-item-page_text_item-545323613\" data-id=\"545323613\"\n               transform=\"translate(1008.6050000000023, 6260.66268069566) rotate(0)\" width=\"7982.79\" height=\"3324.05\">\n                <g class=\"page-item--positioning-container\" transform=\"translate(0, 0)\">\n                    <g class=\"no-clipping\">\n                        <rect class=\"page-item--fill\" width=\"7982.79\" height=\"3324.05\" fill=\"rgba(0, 0, 0, 0)\"\n                              opacity=\"0\"></rect>\n                        <g transform=\"translate(52.08333333333333, 52.08333333333333)\" width=\"7878.623333333333\">\n                            <text>\n                                <tspan>\n                                    <tspan x=\"919.5402298850574\" y=\"2481.299033023171\" textLength=\"3546.7980295566504\"\n                                           style=\"font-family: Mathlete; font-weight: 400; font-style: normal; font-size: 2222.22px; fill: rgb(255, 255, 255);\">\n                                        Pretty\n                                    </tspan>\n                                    <tspan x=\"5137.748586024448\" y=\"2481.299033023171\" textLength=\"1824.4845831052726\"\n                                           style=\"font-family: Mathlete; font-weight: 400; font-style: normal; font-size: 2222.22px; fill: rgb(255, 255, 255);\">\n                                        cat\n                                    </tspan>\n                                </tspan>\n                            </text>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g>\n            <g class=\"page-item\" opacity=\"1\" id=\"page-item-page_text_item-545323664\" data-id=\"545323664\"\n               transform=\"translate(643.0800000000017, 3791.99268069566) rotate(0)\" width=\"8713.84\" height=\"3324.05\">\n                <g class=\"page-item--positioning-container\" transform=\"translate(0, 0)\">\n                    <g class=\"no-clipping\">\n                        <rect class=\"page-item--fill\" width=\"8713.84\" height=\"3324.05\" fill=\"rgba(0, 0, 0, 0)\"\n                              opacity=\"0\"></rect>\n                        <g transform=\"translate(52.08333333333333, 52.08333333333333)\" width=\"8609.673333333334\">\n                            <text>\n                                <tspan>\n                                    <tspan x=\"364.89691662105463\" y=\"2393.723773034118\" textLength=\"4955.756248859698\"\n                                           style=\"font-family: &quot;Ahkio Thin&quot;; font-weight: 400; font-style: normal; font-size: 2222.22px; fill: rgb(102, 191, 0);\">\n                                        Pretty\n                                    </tspan>\n                                    <tspan x=\"5648.604269293924\" y=\"2393.723773034118\" textLength=\"2597.8379857690206\"\n                                           style=\"font-family: &quot;Ahkio Thin&quot;; font-weight: 400; font-style: normal; font-size: 2222.22px; fill: rgb(102, 191, 0);\">\n                                        cat\n                                    </tspan>\n                                </tspan>\n                            </text>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n        <g filter=\"url(#shadow-page_photo_item-1092028258-0)\">\n            <defs>\n                <filter x=\"-0.4\" y=\"-0.382599999755621\" width=\"1.8\" height=\"1.8\"\n                        id=\"shadow-page_photo_item-1092028258-0\">\n                    <feDropShadow stdDeviation=\"156.37500677257776 156.37500677257776\" dx=\"1.065442730222098e-14\"\n                                  dy=\"174.00000244379044\" flood-color=\"rgba(0, 0, 0, 0.92)\"></feDropShadow>\n                </filter>\n            </defs>\n            <g class=\"page-item\" opacity=\"1\" id=\"page-item-page_photo_item-1092028258\" data-id=\"1092028258\"\n               transform=\"translate(6349.535, 423.2726806956598) rotate(16)\" width=\"3577.4699999999993\"\n               height=\"2504.23\">\n                <g class=\"page-item--positioning-container\" transform=\"translate(136.0000018030405, 136.0000018030405)\">\n                    <g clip-path=\"url(#clip-path__55195920-bb81-11e8-8a17-d78a2935afec)\">\n                        <defs>\n                            <clipPath id=\"clip-path__55195920-bb81-11e8-8a17-d78a2935afec\">\n                                <path d=\" M 0,0 L 3305.4699963939183,0 L 3305.4699963939183,2232.229996393919 L 0,2232.229996393919 L 0,0 Z\"></path>\n                            </clipPath>\n                        </defs>\n                        <rect class=\"page-item--fill\" width=\"3577.4699999999993\" height=\"2504.23\"\n                              fill=\"rgba(0, 0, 0, 0)\" opacity=\"0\"></rect>\n                        <g filter=\"url(#image-effect-page_photo_item-1092028258--1161046036-5519a740-bb81-11e8-8a17-d78a2935afec)\">\n                            <filter id=\"image-effect-page_photo_item-1092028258--1161046036-5519a740-bb81-11e8-8a17-d78a2935afec\"\n                                    width=\"130%\" height=\"130%\">\n                                <feColorMatrix in=\"SourceGraphic\" type=\"matrix\"\n                                               values=\"0.34 0.67 0.12 0 0  0.25 0.67 0.13 0 0  0.17 0.33 0.11 0 0  0 0 0 1 0\"></feColorMatrix>\n                            </filter>\n                            <g>\n                                <image class=\"page_photo_item\"\n                                       transform=\"matrix(-1 1.2246467991473532e-16 -1.2246467991473532e-16 -1 3305.47 2273.03)\"\n                                       preserveAspectRatio=\"none\" width=\"3305.47\" height=\"2313.8300000000004\"\n                                       opacity=\"1\"\n                                       xlink:href=\"assets/918271218_486593_m.jpg\"></image>\n                            </g>\n                        </g>\n                        <g></g>\n                    </g>\n                </g>\n                <path class=\"page-item--border\" transform=\"translate(68.00000090152025, 68.00000090152025)\"\n                      stroke-width=\"136.0000018030405\" stroke=\"#66bf00\" stroke-linecap=\"square\" fill=\"transparent\"\n                      d=\" M 0,0 L 3441.469998196959,0 L 3441.469998196959,2368.2299981969595 L 0,2368.2299981969595 L 0,0 Z\"\n                      style=\"pointer-events: visibleStroke;\"></path>\n            </g>\n        </g>\n        <g class=\"page--folds\">\n            <g class=\"page--folds-dark\"></g>\n            <g class=\"page--folds-light\"></g>\n        </g>\n    </g>\n</svg>\n\n";
    //# sourceMappingURL=sameSvg.js.map

    function scan(content, regularExpression) {
        if (!regularExpression.global) {
            throw new Error("regex must have 'global' flag set");
        }
        var result = [];
        var match;
        do {
            match = regularExpression.exec(content);
            if (match) {
                result.push.apply(result, match.slice(1));
            }
        } while (match !== null);
        return result;
    }
    //# sourceMappingURL=regexp.js.map

    /**
     * A comparator that sorts strings or numbers in ascending order.
     *
     * @see {@link desc}
     */
    function asc(a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a - b;
        }
        else {
            return a < b ? -1 : a === b ? 0 : 1;
        }
    }
    //# sourceMappingURL=comparator.js.map

    function isHashable(obj) {
        return obj != null && typeof obj.hashCode === "function";
    }
    //# sourceMappingURL=hashable.js.map

    function entries(obj) {
        var arr = [];
        for (var key in obj) {
            /* istanbul ignore else */
            if (obj.hasOwnProperty == null || (obj.hasOwnProperty(key) && obj.propertyIsEnumerable(key))) {
                arr.push([key, obj[key]]);
            }
        }
        return arr;
    }
    //# sourceMappingURL=objects.js.map

    /**
     * Checks that `a` and `b` are deeply equal. This function will check if an object or an
     * element inside a collection (Array, ES6 Map, ES6 Set) implements the `Equatable`
     * interface. If it does, then it invoke the object's `equals` method. Otherwise, this falls
     * back to using a standard `===` check.
     *
     * When comparing objects, this function will not check values defined on the object's
     * prototype.
     */
    function equals(a, b) {
        if (a === b) {
            return true;
        }
        else if (a != null) {
            if (isHashable(a) && isHashable(b) && a.hashCode() !== b.hashCode()) {
                return false;
            }
            else if (isEquatable(a)) {
                return a.equals(b);
            }
            else if (a instanceof Array && b instanceof Array) {
                return areArraysEqual(a, b);
            }
            else if (a instanceof Map && b instanceof Map) {
                return areMapsEqual(a, b);
            }
            else if (a instanceof Set && b instanceof Set) {
                return areSetsEqual(a, b);
            }
            else if (isPlainObject(a) && isPlainObject(b)) {
                return arePlainObjectsEqual(a, b);
            }
            else {
                return _.isEqual(a, b);
            }
        }
        else {
            return _.isEqual(a, b);
        }
    }
    function isEquatable(obj) {
        return obj != null && typeof obj.equals === "function";
    }
    function areArraysEqual(a, b) {
        if (a.length === b.length) {
            return isAllValuesEqualForKeys(a, function (index) { return equals(a[index], b[index]); });
        }
        else {
            return false;
        }
    }
    function areMapsEqual(a, b) {
        if (a.size === b.size) {
            return isAllValuesEqualForKeys(a, function (key) { return equals(a.get(key), b.get(key)); });
        }
        else {
            return false;
        }
    }
    function areSetsEqual(a, b) {
        if (a.size === b.size) {
            // This looks non-optimal, but we need to iterate over all the values in the
            // set to use our version of `equals` instead of `===`.
            return isAllValuesEqualForKeys(a, function (keyA) {
                return isSomeValuesEqualForKeys(b, function (keyB) { return equals(keyA, keyB); });
            });
        }
        else {
            return false;
        }
    }
    /**
     * Iterates over all keys in `keyable` and passes it to the provided equals function.
     * Returns `true` if all keys passed to `equals` is true.
     */
    function isAllValuesEqualForKeys(keyable, equalsFn) {
        var keys = keyable.keys();
        var result = keys.next();
        while (!result.done) {
            if (!equalsFn(result.value)) {
                return false;
            }
            result = keys.next();
        }
        return true;
    }
    /**
     * Iterates each key in `keyable` and passes it to the provided equals function.
     * Returns `true` if once `equals` returns `true`. Otherwise `false.
     */
    function isSomeValuesEqualForKeys(keyable, equalsFn) {
        var keys = keyable.keys();
        var result = keys.next();
        while (!result.done) {
            if (equalsFn(result.value)) {
                return true;
            }
            result = keys.next();
        }
        return false;
    }
    function arePlainObjectsEqual(a, b) {
        var keys1 = entries(a);
        var keys2 = entries(b);
        if (keys1.length === keys2.length) {
            for (var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++) {
                var key1 = keys1_1[_i];
                var key = key1[0];
                if (!equals(a[key], b[key])) {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
    function isPlainObject(obj) {
        return typeof obj === "object" && !(obj instanceof Date);
    }
    //# sourceMappingURL=equalable.js.map

    /**
     * Utility class for parsing and building URLs.
     */
    var Url = /** @class */ (function () {
        function Url(parts) {
            this.parts = parts;
        }
        Url.fromString = function (input) {
            var parsed = {};
            var schemeMatcher = /^(\w+):\/\//;
            var schemeMatch = schemeMatcher.exec(input);
            if (schemeMatch != null) {
                parsed.scheme = schemeMatch[1];
                input = input.substr(schemeMatch[0].length);
            }
            var hostMatcher = /^(?:\/\/)?(?!:\d+|\/)(.+?)(\/|:|\?|$)/;
            var hostMatch = hostMatcher.exec(input);
            if (hostMatch != null) {
                parsed.host = hostMatch[1];
                input = input.replace(/^\/\//, "").substr(parsed.host.length);
            }
            var portMatcher = /^:(\d+)/;
            var portMatch = portMatcher.exec(input);
            if (portMatch != null) {
                parsed.port = portMatch[1];
                input = input.substr(parsed.port.length + 1);
            }
            var paramsMatcher = /\?(.+)$/;
            var paramsMatch = paramsMatcher.exec(input);
            if (paramsMatch != null) {
                parsed.params = parsed.params || {};
                paramsMatch[1].split("&").map(function (param) { return param.split("="); }).forEach(function (_a) {
                    var k = _a[0], v = _a[1];
                    // decodeURIComponent doesn't touch pluses, which encode spaces
                    parsed.params[k] = decodeURIComponent(v).replace(/\+/g, " ");
                });
                input = input.replace(paramsMatcher, "");
            }
            else {
                parsed.params = {};
            }
            parsed.path = normalizePath(input);
            return new Url(parsed);
        };
        Url.prototype.appendPath = function (path) {
            var normalizedPath = path.replace(/^(\/+)/, "");
            var newPath = "/" + this.pathAsArray.concat(normalizedPath).join("/");
            return new Url(__assign({}, this.parts, { path: newPath }));
        };
        Url.prototype.replacePath = function (path) {
            var normalizedPath = normalizePath(path);
            return new Url(__assign({}, this.parts, { path: normalizedPath }));
        };
        Url.prototype.appendParams = function (params) {
            var newParams = __assign({}, this.parts.params || {}, params);
            return new Url(__assign({}, this.parts, { params: newParams }));
        };
        Url.prototype.equals = function (other) {
            return other instanceof Url && equals(this.parts, other.parts);
        };
        Url.prototype.toString = function () {
            var _this = this;
            var result = "";
            if (this.scheme.length > 0) {
                result += this.scheme + "://";
            }
            if (this.host.length > 0) {
                if (this.scheme.length === 0) {
                    result += "//";
                }
                result += this.host;
            }
            if (this.port.length > 0) {
                result += ":" + this.port;
            }
            if (this.path.length > 0) {
                result += this.path;
            }
            if (Object.keys(this.params).length > 0) {
                result +=
                    "?" +
                        Object.keys(this.params)
                            .sort(asc)
                            .reduce(function (memo, key) {
                            if (_this.params[key] != null) {
                                memo.push(key + "=" + encodeURIComponent(_this.params[key]));
                            }
                            else {
                                memo.push("" + key);
                            }
                            return memo;
                        }, [])
                            .join("&");
            }
            return result;
        };
        Object.defineProperty(Url.prototype, "host", {
            get: function () {
                return this.parts.host || "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Url.prototype, "scheme", {
            get: function () {
                return this.parts.scheme || "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Url.prototype, "port", {
            get: function () {
                return this.parts.port || "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Url.prototype, "path", {
            get: function () {
                return this.parts.path || "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Url.prototype, "baseName", {
            get: function () {
                var pathArray = this.pathAsArray;
                return pathArray.length > 0 ? pathArray[pathArray.length - 1] : "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Url.prototype, "extension", {
            get: function () {
                var parts = this.baseName.split(".");
                return parts.length > 1 ? parts[parts.length - 1] : "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Url.prototype, "params", {
            get: function () {
                return __assign({}, this.parts.params || {});
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Url.prototype, "pathAsArray", {
            get: function () {
                return this.path.split("/").filter(function (str) { return str.length > 0; });
            },
            enumerable: true,
            configurable: true
        });
        return Url;
    }());
    function normalizePath(path) {
        var result = path.replace(/(\/+)/, "/");
        if (result.length > 0 && result[0] !== "/") {
            result = "/" + result;
        }
        return result;
    }
    //# sourceMappingURL=url.js.map

    var RasterizerError = /** @class */ (function (_super) {
        __extends(RasterizerError, _super);
        function RasterizerError(message) {
            return _super.call(this, message) || this;
        }
        return RasterizerError;
    }(Error));
    var contentCache = {};
    // Any images in the SVG document need to be converted to data URIs
    // for "security reasons". This will replace any image URLs as data
    // URIs, then draw the SVG doc to a canvas context.
    /* istanbul ignore next: ignore for now, hard to test in tsnode */
    function rasterizeSVG(svg, dimensions, client, canCache, format) {
        if (format === void 0) { format = "image/png"; }
        return __awaiter(this, void 0, void 0, function () {
            var canvas, context, svg2, uris, svg3, img;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        canvas = document.createElement("canvas");
                        canvas.width = dimensions.width;
                        canvas.height = dimensions.height;
                        context = canvas.getContext("2d");
                        return [4 /*yield*/, resolveCssImports(svg, client, canCache)];
                    case 1:
                        svg2 = _a.sent();
                        return [4 /*yield*/, getSvgAssetsAsDataUris(svg2, client, canCache)];
                    case 2:
                        uris = _a.sent();
                        return [4 /*yield*/, replaceUrlsWithDataUris(svg2, uris)];
                    case 3:
                        svg3 = _a.sent();
                        return [4 /*yield*/, loadSvgAsImage(svg3)];
                    case 4:
                        img = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, _) {
                                // Let's skip one more frame, to make sure Chrome won't crash (and it can!)
                                // Try to open that in Chrome to see: http://codepen.io/astashov/pen/ZBzaem
                                setTimeout(function () {
                                    context.drawImage(img, 0, 0);
                                    resolve(canvas.toDataURL(format));
                                }, 0);
                            })];
                }
            });
        });
    }
    /* istanbul ignore next: ignore for now, hard to test in tsnode */
    function resolveCssImports(svg, client, canCache) {
        return __awaiter(this, void 0, void 0, function () {
            var matcher, matches, requests, contents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        matcher = /@import url\(([^)]+)\)/g;
                        matches = scan(svg, matcher);
                        requests = matches.map(function (url) {
                            return contentCache[url] = getContent(url, client, canCache)
                                .then(function (r) { return r.text(); });
                        });
                        return [4 /*yield*/, Promise.all(requests)];
                    case 1:
                        contents = _a.sent();
                        return [2 /*return*/, contents.reduce(function (newSvg, content, i) {
                                var importUrl = Url.fromString(matches[i]);
                                var importPath = importUrl.pathAsArray.slice(0, importUrl.pathAsArray.length - 1).join("/");
                                content = content.replace(/src: url\((.+?)\)/g, function (_, url) {
                                    url = url.replace(/['"]/g, "");
                                    // in case the font urls are relative, make them absolute
                                    if (url.match(/^[^\/]/)) {
                                        url = importUrl.replacePath(importPath).appendPath(url).toString();
                                    }
                                    return "src: url(" + url + ")";
                                });
                                return newSvg.replace("@import url(" + matches[i] + ");", content);
                            }, svg)];
                }
            });
        });
    }
    /* istanbul ignore next: ignore for now, hard to test in tsnode */
    function loadSvgAsImage(svg) {
        return new Promise(function (resolve, reject) {
            var blob = new Blob([svg], { type: "image/svg+xml" });
            var url = URL.createObjectURL(blob);
            var img = new Image();
            img.onload = function () {
                // Pawel: Safari requires this to properly render images
                setTimeout(function () {
                    resolve(img);
                    URL.revokeObjectURL(url);
                }, 300);
            };
            img.onerror = function (event) {
                reject(new RasterizerError("Failed to load image from " + event.target.src));
                URL.revokeObjectURL(url);
            };
            img.src = url;
        });
    }
    /* istanbul ignore next: ignore for now, hard to test in tsnode */
    function replaceUrlsWithDataUris(svg, dataUris) {
        return dataUris.reduce(function (doc, _a) {
            var url = _a[0], dataUri = _a[1];
            return doc.replace(url, dataUri);
        }, svg);
    }
    /* istanbul ignore next: ignore for now, hard to test in tsnode */
    function getSvgAssetsAsDataUris(svg, client, canCache) {
        var imageMatcher = /xlink:href="(.+?)"/g;
        var fontMatcher = /src: url\((.+?)\)/g;
        var matches = [imageMatcher, fontMatcher].reduce(function (memo, matcher) {
            return memo.concat(scan(svg, matcher));
        }, []);
        var requests = matches.map(function (url) { return getDataUri(url, client, canCache); });
        return Promise.all(requests).then(function (urls) {
            return urls.map(function (url, index) { return [matches[index], url]; });
        });
    }
    /* istanbul ignore next: ignore for now, hard to test in tsnode */
    function getDataUri(url, client, canCache) {
        return contentCache[url] = getContent(url, client, canCache).then(function (r) { return r.blob(); })
            .then(function (blob) { return readBlobAsDataUrl(blob, url); });
    }
    /* istanbul ignore next: ignore for now, hard to test in tsnode */
    function getContent(url, client, canCache) {
        if (!canCache) {
            // Pawel: On chrome, with enabled prefetch caching S3 doesn't expose right CORS tags and this causes
            // Chrome to be confused about CORS, we have decided that the best workaround for this for now (until S3 is fixed)
            // is to add nounce to every request we are fetching.
            var nonce = Math.floor(Math.random() * new Date().getTime()).toString();
            var params = {};
            params[nonce] = null;
            url = Url.fromString(url).appendParams(params).toString();
        }
        return client
            .fetch(url)
            .catch(function (error) {
            throw new RasterizerError("Fetch error for url " + url);
        });
    }
    /* istanbul ignore next: ignore for now, hard to test in tsnode */
    function readBlobAsDataUrl(blob, debugUrl) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onloadend = function () {
                resolve(reader.result);
            };
            reader.onerror = function () {
                reject(new RasterizerError("FileReader error for url " + debugUrl));
            };
            reader.readAsDataURL(blob);
        });
    }

    function index (svgType) {
        return __awaiter(this, void 0, void 0, function () {
            var svg, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        svg = svgType === "sameDomain" ? sameSvg : differentSvg;
                        loadSvg(svg);
                        console.time(svgType);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, renderSvg(svg)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        alert(e_1.toString());
                        return [3 /*break*/, 4];
                    case 4:
                        console.timeEnd(svgType);
                        return [2 /*return*/];
                }
            });
        });
    }
    function getTarget(target) {
        var div = document.querySelector(target);
        if (!div) {
            throw new Error("Can't find target " + target);
        }
        return div;
    }
    function loadSvg(svg) {
        var div = getTarget("#target_svg");
        div.innerHTML = svg;
    }
    function renderSvg(svg) {
        return __awaiter(this, void 0, void 0, function () {
            var width, height, src, canvas, context, img;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        width = 663;
                        height = 674;
                        return [4 /*yield*/, rasterizeSVG(svg, { width: width, height: height }, {
                                fetch: function (url) {
                                    return fetch(url);
                                },
                            }, true)];
                    case 1:
                        src = _a.sent();
                        canvas = getTarget("#target_canvas");
                        canvas.width = width;
                        canvas.height = height;
                        context = canvas.getContext("2d");
                        context.clearRect(0, 0, width, height);
                        img = getTarget("#target_image");
                        img.onload = function () {
                            context.drawImage(img, 0, 0);
                        };
                        img.src = src;
                        return [2 /*return*/];
                }
            });
        });
    }
    //# sourceMappingURL=index.js.map

    return index;

})));
//# sourceMappingURL=index.js.map
