/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/index.sass":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/index.sass ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".ticket_cards__container {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));\\n  grid-gap: 20px;\\n  margin-top: 25px;\\n  margin-bottom: 25px;\\n  grid-auto-rows: 175px;\\n}\\n\\n.ticket_card__container {\\n  background: linear-gradient(208.27deg, #000000 0%, #676767 95.3%);\\n  border-radius: 12px;\\n  padding: 30px 25px;\\n  width: 100%;\\n  box-shadow: 33px 17px 64px -37px rgba(0, 0, 0, 0.75);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n\\n.ticket_card__text {\\n  font-weight: 500;\\n  font-size: 21px;\\n  line-height: 24px;\\n  color: #fff;\\n}\\n\\n.ticket_card__company_id {\\n  text-transform: uppercase;\\n}\\n\\n.mcd {\\n  background: linear-gradient(208.27deg, #E80B0B 0%, #DC4F00 95.3%);\\n}\\n\\n.fb {\\n  background: linear-gradient(208.27deg, #0038FF 0%, #5CE2FF 95.3%);\\n}\\n\\n.nike {\\n  background: linear-gradient(208.27deg, #FF806C 0%, #FF5C00 95.3%);\\n}\\n\\n.total-card__wrapper {\\n  margin-top: 25px;\\n  margin-bottom: 100px;\\n  margin-left: auto;\\n  margin-right: auto;\\n  max-width: 520px;\\n}\\n\\n.total-card__container {\\n  background: linear-gradient(269.39deg, #FE5762 49.47%, #FF6BA1 95.75%);\\n  border-radius: 12px;\\n  position: relative;\\n  padding: 35px;\\n  min-height: 175px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-end;\\n}\\n.total-card__container::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  height: 100%;\\n  width: 100%;\\n  top: 15px;\\n  left: 15px;\\n  z-index: -1;\\n  background: linear-gradient(259.61deg, #FD5356 3.65%, #FF6EAA 100%);\\n  opacity: 0.3;\\n  filter: blur(50px);\\n  border-radius: 20px;\\n}\\n\\nh2.total-card__title {\\n  color: #fff;\\n  margin: 0;\\n  padding: 0;\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 21px;\\n  margin-bottom: 5px;\\n}\\n\\nh2.total-card__value {\\n  color: #fff;\\n  margin: 0;\\n  padding: 0;\\n  font-weight: 600;\\n  font-size: 28px;\\n}\\n\\n.input__label {\\n  font-size: 21px;\\n  letter-spacing: 0.01em;\\n  color: #000000;\\n  display: inline-block;\\n  padding: 0 0 8px 4px;\\n}\\n\\n.input {\\n  background: #F8FAFC;\\n  border-radius: 8px;\\n  border: 0;\\n  padding: 16px 21px;\\n  font-size: 21px;\\n  width: 100%;\\n  line-height: 2;\\n}\\n\\n.input__wrapper {\\n  margin: 15px 0;\\n  width: 100%;\\n  max-width: 550px;\\n}\\n\\n.form__container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding-top: 25px;\\n}\\n\\n.form__hints_block {\\n  padding-top: 20px;\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.form__title {\\n  margin-bottom: 25px;\\n}\\n\\n.form__hint {\\n  font-weight: normal;\\n  font-size: 18px;\\n  line-height: 16px;\\n  color: rgba(0, 0, 0, 0.75);\\n  text-decoration: none;\\n}\\n\\n.form__submit_button {\\n  background: transparent;\\n  box-shadow: 0px 0px 0px transparent;\\n  border: 1px solid rgba(0, 0, 0, 0.25);\\n  text-shadow: 0px 0px 0px transparent;\\n  padding: 10px 20px;\\n  border-radius: 8px;\\n  font-size: 21px;\\n  cursor: pointer;\\n  transition: opacity 0.5s;\\n  margin: 50px 0;\\n}\\n.form__submit_button:hover {\\n  background: transparent;\\n  box-shadow: 0px 0px 0px transparent;\\n  text-shadow: 0px 0px 0px transparent;\\n  opacity: 0.5;\\n}\\n.form__submit_button:active {\\n  outline: none;\\n  border: none;\\n}\\n.form__submit_button:focus {\\n  outline: 0;\\n}\\n\\n.burger-menu {\\n  padding-bottom: 8px;\\n  cursor: pointer;\\n}\\n\\n.burger-menu__line {\\n  background: linear-gradient(208.27deg, #000000 0%, #676767 95.3%);\\n  height: 6px;\\n  border-radius: 4px;\\n  display: inline-block;\\n  width: 40px;\\n  transition: 0.25s;\\n  position: relative;\\n}\\n.burger-menu__line::before {\\n  background: linear-gradient(208.27deg, #000000 0%, #676767 95.3%);\\n  height: 6px;\\n  border-radius: 4px;\\n  display: inline-block;\\n  width: 40px;\\n  transition: 0.25s;\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: -10px;\\n}\\n.burger-menu__line::after {\\n  background: linear-gradient(208.27deg, #000000 0%, #676767 95.3%);\\n  height: 6px;\\n  border-radius: 4px;\\n  display: inline-block;\\n  width: 40px;\\n  transition: 0.25s;\\n  content: \\\"\\\";\\n  position: absolute;\\n  bottom: -10px;\\n}\\n\\n.active .burger-menu__line {\\n  width: 0;\\n}\\n.active .burger-menu__line::before {\\n  transform: rotate(140deg);\\n  top: 0;\\n}\\n.active .burger-menu__line::after {\\n  transform: rotate(-140deg);\\n  bottom: 0;\\n}\\n\\n.header__container {\\n  border-width: 0;\\n  border-bottom-width: 1px;\\n  border-color: #f0f0f0;\\n  border-style: solid;\\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.11);\\n  padding: 24px 14px;\\n}\\n\\n.header_content {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.header__title {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.header_container__container {\\n  max-width: 1024px;\\n  margin: auto;\\n}\\n\\nfooter.footer_container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.navbar__wrapper {\\n  height: 100%;\\n  position: absolute;\\n  min-width: 250px;\\n  z-index: 2;\\n  left: -999px;\\n  transition: 0.5s;\\n}\\n\\n.navbar__container {\\n  height: 100%;\\n  background-color: #fff;\\n  box-shadow: 4px 0px 25px rgba(0, 0, 0, 0.1);\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.navbar_title__container {\\n  border-width: 0;\\n  border-bottom-width: 1px;\\n  border-color: #f0f0f0;\\n  border-style: solid;\\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);\\n  padding: 25px 14px;\\n  width: 100%;\\n}\\n\\n.navbar_title__text {\\n  padding: 0;\\n  margin: 0;\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 28px;\\n  line-height: 24px;\\n  letter-spacing: 0.8px;\\n  text-shadow: 1px 0px 5px rgba(0, 0, 0, 0.1);\\n}\\n\\n.pagination_items__container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  flex: 1;\\n  padding: 20px;\\n  padding-right: 25px;\\n}\\n\\na.pagination_item__text {\\n  font-size: 21px;\\n  color: rgba(73, 69, 69, 0.75);\\n  text-decoration: none;\\n  transition: 0.25s;\\n}\\na.pagination_item__text:hover {\\n  opacity: 0.5;\\n}\\n\\n.pagination_item__container {\\n  padding-bottom: 15px;\\n  cursor: pointer;\\n}\\n\\n.active {\\n  left: 0;\\n}\\n\\n* {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  box-sizing: border-box;\\n}\\n\\nhtml, body {\\n  margin: 0;\\n  min-height: 100vh;\\n}\\n\\n.container {\\n  max-width: 1024px;\\n  margin-left: auto;\\n  margin-right: auto;\\n  height: 100%;\\n  width: 100%;\\n  flex: 1;\\n}\\n\\n.app {\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n\\n.hidden::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  z-index: 1;\\n  backdrop-filter: blur(0.5px) brightness(85%);\\n  -webkit-backdrop-filter: blur(0.5px) brightness(85%);\\n}\\n\\n@media only screen and (max-width: 1024px) {\\n  .container {\\n    padding: 0 15px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/index.sass?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./apple.png":
/*!*******************!*\
  !*** ./apple.png ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"4a856063a9a55656a65d3d1cab48c2b3.png\");\n\n//# sourceURL=webpack:///./apple.png?");

/***/ }),

/***/ "./styles/index.sass":
/*!***************************!*\
  !*** ./styles/index.sass ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.sass */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/index.sass\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_sass__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./styles/index.sass?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./javascript/constants.js":
/*!*********************************!*\
  !*** ./javascript/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APP_SELECTOR\": () => (/* binding */ APP_SELECTOR),\n/* harmony export */   \"BURGER_SELECTOR\": () => (/* binding */ BURGER_SELECTOR),\n/* harmony export */   \"NAVBAR_SELECTOR\": () => (/* binding */ NAVBAR_SELECTOR),\n/* harmony export */   \"BURGER_ACTIVE_CLASS\": () => (/* binding */ BURGER_ACTIVE_CLASS),\n/* harmony export */   \"NAVBAR_ACTIVE_CLASS\": () => (/* binding */ NAVBAR_ACTIVE_CLASS),\n/* harmony export */   \"APP_INACTIVE_CLASS\": () => (/* binding */ APP_INACTIVE_CLASS)\n/* harmony export */ });\nconst APP_SELECTOR = \".app\";\nconst BURGER_SELECTOR = \".burger-menu\";\nconst NAVBAR_SELECTOR = \".navbar__wrapper\";\nconst BURGER_ACTIVE_CLASS = \"active\";\nconst NAVBAR_ACTIVE_CLASS = \"active\";\nconst APP_INACTIVE_CLASS = \"hidden\";\n\n\n//# sourceURL=webpack:///./javascript/constants.js?");

/***/ }),

/***/ "./javascript/index.js":
/*!*****************************!*\
  !*** ./javascript/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.sass */ \"./styles/index.sass\");\n/* harmony import */ var _apple_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apple.png */ \"./apple.png\");\n/* harmony import */ var _navbarToogle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbarToogle */ \"./javascript/navbarToogle.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./javascript/constants.js\");\n\n\n\n\n\n\nconst toggleNavbar = (0,_navbarToogle__WEBPACK_IMPORTED_MODULE_2__.createToggleNavbar)();\n\nconst burgerButton = document.querySelector(_constants__WEBPACK_IMPORTED_MODULE_3__.BURGER_SELECTOR);\nburgerButton.addEventListener(\"click\", () => {\n  toggleNavbar.toogle();\n});\n\nconsole.log(\"img\", _apple_png__WEBPACK_IMPORTED_MODULE_1__.default);\n\n// const includeFunc = (pathToPug, options = {}) => {\n//   return pug.renderFile(pathToPug, options); //render the pug file\n// };\n\n// console.log(\"pug.renderFile\", pug);\n\n\n//# sourceURL=webpack:///./javascript/index.js?");

/***/ }),

/***/ "./javascript/navbarToogle.js":
/*!************************************!*\
  !*** ./javascript/navbarToogle.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createToggleNavbar\": () => (/* binding */ createToggleNavbar)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./javascript/constants.js\");\n\n\nconst createToggleNavbar = () => {\n  let isBirgerActive = false;\n  const _appTarget = document.querySelector(_constants__WEBPACK_IMPORTED_MODULE_0__.APP_SELECTOR);\n  const _burgerTarget = document.querySelector(_constants__WEBPACK_IMPORTED_MODULE_0__.BURGER_SELECTOR);\n  const _navbarTarget = document.querySelector(_constants__WEBPACK_IMPORTED_MODULE_0__.NAVBAR_SELECTOR);\n\n  const hideNavbar = () => {\n    setTimeout(() => {\n      isBirgerActive = false;\n      _appTarget.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_0__.APP_INACTIVE_CLASS);\n      _burgerTarget.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_0__.BURGER_ACTIVE_CLASS);\n      _navbarTarget.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_0__.NAVBAR_ACTIVE_CLASS);\n    }, 0);\n  };\n\n  const navbarListener = function (event) {\n    var isClickInside = _navbarTarget.contains(event.target);\n    if (!isClickInside && isBirgerActive) {\n      _appTarget.removeEventListener(\"click\", navbarListener);\n      hideNavbar();\n    }\n  };\n\n  const showNavbar = () => {\n    _appTarget.addEventListener(\"click\", navbarListener);\n\n    setTimeout(() => {\n      isBirgerActive = true;\n      _navbarTarget.classList.add(_constants__WEBPACK_IMPORTED_MODULE_0__.NAVBAR_ACTIVE_CLASS);\n      _burgerTarget.classList.add(_constants__WEBPACK_IMPORTED_MODULE_0__.BURGER_ACTIVE_CLASS);\n      _appTarget.classList.add(_constants__WEBPACK_IMPORTED_MODULE_0__.APP_INACTIVE_CLASS);\n    }, 0);\n  };\n\n  return {\n    toogle: () => {\n      if (isBirgerActive) {\n        hideNavbar();\n        return;\n      }\n\n      showNavbar();\n      return;\n    },\n  };\n};\n\n\n//# sourceURL=webpack:///./javascript/navbarToogle.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./javascript/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;