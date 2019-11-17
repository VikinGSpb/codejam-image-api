/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst canvas = document.querySelector('#canvas');\nconst ctx = canvas.getContext('2d');\nconst buttons = document.querySelectorAll('.options--list-item:not(.inactive):not(.colors)');\nlet currentColor = '#00ff00';\nlet previousColor = '#000000';\nconst inputColor = document.querySelector('#inputColor');\nconst previousColorElement = document.querySelector('#previous');\nconst allColors = document.querySelectorAll('.options--circle:not(#inputColor)');\nconst label = document.querySelector('#label');\nlet handle = true;\nlet firstPoint = [0, 0];\nlet secondPoint = [0, 0];\nconst imageButton = document.querySelector('#imageButton');\nconst inputCity = document.querySelector('#inputCity');\nconst grayScale = document.querySelector('#grayScale');\nlet imageFlag;\nconst canvasSize = 512;\n\nfunction findColor(...args) {\n  let x;\n  let y;\n  if (args[2]) {\n    x = args[2].clientX - canvas.offsetLeft;\n    y = args[2].clientY - canvas.offsetTop;\n  } else {\n    [x, y] = args;\n  }\n  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n  const pixels = imageData.data;\n  const pixelRedIndex = ((y - 1) * (imageData.width * 4)) + ((x - 1) * 4);\n  const pixelColor = `rgba(${pixels[pixelRedIndex]}, ${pixels[pixelRedIndex + 1]}, ${pixels[pixelRedIndex + 2]}, ${pixels[pixelRedIndex + 3] / 255})`;\n  return pixelColor;\n}\n\nfunction saveState() {\n  let count = 0;\n  for (let yCoordinate = 2; yCoordinate < 512; yCoordinate += 128) {\n    for (let xCoordinate = 2; xCoordinate < 512; xCoordinate += 128) {\n      localStorage.setItem(`canvasState${count}`, (findColor(xCoordinate, yCoordinate)));\n      count += 1;\n    }\n  }\n  localStorage.setItem('previousColor', previousColor);\n  localStorage.setItem('currentColor', currentColor);\n  const currentImage = canvas.toDataURL();\n  localStorage.setItem('canvasImage', currentImage);\n}\n\ngrayScale.addEventListener('click', () => {\n  if (!imageFlag) {\n    alert('Load image before grayscale');\n    return;\n  }\n  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n  const { data } = imageData;\n  for (let i = 0; i < data.length; i += 4) {\n    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;\n    data[i] = avg;\n    data[i + 1] = avg;\n    data[i + 2] = avg;\n  }\n  ctx.putImageData(imageData, 0, 0);\n  saveState();\n});\n\nasync function getLinkToImage() {\n  imageFlag = true;\n  let url;\n  const str = '';\n  if (inputCity.value) {\n    url = str.concat('https://api.unsplash.com/photos/random?query=town,', `${inputCity.value}`, '&client_id=a2840b831d7df553cc4c7c1492e8602cbd21b24a89cb2050aaf67407e892be30');\n  } else {\n    url = 'https://api.unsplash.com/photos/random?query=town,Minsk&client_id=a2840b831d7df553cc4c7c1492e8602cbd21b24a89cb2050aaf67407e892be30';\n  }\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    const image = document.createElement('img');\n    image.crossOrigin = 'Anonymous';\n    image.setAttribute('src', data.urls.small);\n    const canvas2 = document.createElement('canvas');\n    const ctx2 = canvas2.getContext('2d');\n    image.onload = () => {\n      ctx2.drawImage(image, 0, 0, image.width / 4, image.height / 4);\n      if (canvas && canvas.getContext) {\n        let drawWidth = canvasSize;\n        let drawHeight = canvasSize;\n        let coordX = 0;\n        let coordY = 0;\n        if (image.width > image.height) {\n          drawHeight = image.height * (canvasSize / image.width);\n          coordY = canvasSize / 2 - drawHeight / 2;\n        } else if (image.width < image.height) {\n          drawWidth = image.width * (canvasSize / image.height);\n          coordX = canvasSize / 2 - drawWidth / 2;\n        }\n        ctx.drawImage(canvas2, 0, 0, image.width / 4, image.height / 4,\n          coordX, coordY, drawWidth, drawHeight);\n        saveState();\n      } else throw new Error('Canvas Error');\n    };\n    image.onerror = () => {\n      throw new Error('Data Error');\n    };\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nimageButton.addEventListener('click', getLinkToImage);\n\nfunction changeColor(color) {\n  const inter = currentColor;\n  currentColor = color;\n  previousColor = inter;\n  previousColorElement.style.backgroundColor = previousColor;\n  inputColor.value = currentColor;\n  label.style.backgroundColor = currentColor;\n  saveState();\n}\n\nfunction drawFromArr(arr, type) {\n  if (canvas && canvas.getContext) {\n    arr.forEach((row, rowIdx) => {\n      row.forEach((column, colIdx) => {\n        if (type === 0) {\n          if (column.length === 6) {\n            ctx.fillStyle = `#${column}`;\n          } else {\n            ctx.fillStyle = `rgba(${column})`;\n          }\n        } else ctx.fillStyle = column;\n        ctx.fillRect(colIdx * (512 / arr.length), rowIdx * (512 / arr.length),\n          (colIdx + 1) * (512 / arr.length), (rowIdx + 1) * (512 / arr.length));\n      });\n    });\n  } else throw new Error('Canvas Error');\n}\n\nfunction prefillCanvas() {\n  const xhr = new XMLHttpRequest();\n  xhr.open('GET', 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json');\n  xhr.responseType = 'json';\n  xhr.send();\n  xhr.onload = () => {\n    let arr = [];\n    arr = xhr.response;\n    drawFromArr(arr, 0);\n  };\n  xhr.onerror = () => {\n    throw new Error('Data Error');\n  };\n}\n\nwindow.onload = () => {\n  if (localStorage.getItem('currentColor')) currentColor = localStorage.getItem('currentColor');\n  if (localStorage.getItem('previousColor')) previousColor = localStorage.getItem('previousColor');\n  if (localStorage.getItem('canvasState1')) {\n    const array = [];\n    const arr = [];\n    for (let i = 0; i < 16; i += 1) {\n      array.push(localStorage.getItem(`canvasState${i}`));\n    }\n    for (let j = 0; j < 15; j += 4) {\n      arr.push(array.slice(j, j + 5));\n    }\n    drawFromArr(arr, 1);\n  } else prefillCanvas();\n  inputColor.value = currentColor;\n  label.style.backgroundColor = currentColor;\n  previousColorElement.style.backgroundColor = previousColor;\n  allColors.forEach((color) => {\n    color.addEventListener('click', () => {\n      if (color.getAttribute('id') === 'red') changeColor('#F74141');\n      if (color.getAttribute('id') === 'blue') changeColor('#41B6F7');\n      if (color.getAttribute('id') === 'previous') changeColor(previousColor);\n    });\n  });\n  inputColor.addEventListener('change', (e) => {\n    changeColor(e.target.value);\n  });\n  inputColor.select();\n  if (localStorage.getItem('canvasImage')) {\n    imageFlag = true;\n    const canvasImg = new Image();\n    const dataUrl = localStorage.getItem('canvasImage');\n    canvasImg.src = dataUrl;\n    canvasImg.onload = () => {\n      ctx.drawImage(canvasImg, 0, 0);\n    };\n  }\n};\n\nfunction draw(x, y) {\n  let startX = 0;\n  let startY = 0;\n  for (; (startX <= 512) && (startY <= 512); startX += 128, startY += 128) {\n    if ((startX - x >= -128) && (startY - y >= -128)) break;\n    if (startX - x >= -128) startX -= 128;\n    if (startY - y >= -128) startY -= 128;\n  }\n  if (canvas && canvas.getContext) {\n    ctx.fillStyle = currentColor;\n    ctx.fillRect(startX, startY, 128, 128);\n  } else throw new Error('Canvas Error');\n  return [startX, startX + 129, startY, startY + 129];\n}\n\nfunction BrezAlg(x1, x2, y1, y2) {\n  let x = x1;\n  let y = y1;\n  const deltaX = Math.abs(x2 - x);\n  const deltaY = Math.abs(y2 - y);\n  const signX = x < x2 ? 1 : -1;\n  const signY = y < y2 ? 1 : -1;\n  let error = deltaX - deltaY;\n  draw(x2, y2);\n  while (x !== x2 || y !== y2) {\n    draw(x, y);\n    const error2 = error * 2;\n    if (error2 > -deltaY) {\n      error -= deltaY;\n      x += signX;\n    }\n    if (error2 < deltaX) {\n      error += deltaX;\n      y += signY;\n    }\n  }\n}\n\nfunction pencilDraw(e) {\n  const x = e.clientX - canvas.offsetLeft;\n  const y = e.clientY - canvas.offsetTop;\n  const arr = draw(x, y);\n  const result = [];\n  arr.map((elem, idx) => {\n    result[idx] = elem;\n    return true;\n  });\n  return result;\n}\n\nfunction drawBucket(color) {\n  if (canvas && canvas.getContext) {\n    ctx.fillStyle = color;\n    ctx.fillRect(0, 0, 512, 512);\n  } else throw new Error('Canvas Error');\n}\n\ncanvas.addEventListener('mousedown', (e) => {\n  let activeButtonId;\n  buttons.forEach((button) => {\n    if (button.classList.contains('active')) activeButtonId = button.getAttribute('id');\n  });\n  if (activeButtonId === 'bucket') {\n    drawBucket(currentColor);\n    saveState();\n  }\n\n  if (activeButtonId === 'pencil') {\n    handle = true;\n    pencilDraw(e);\n    saveState();\n    canvas.addEventListener('mouseup', () => {\n      handle = false;\n      firstPoint = [0, 0];\n      secondPoint = [0, 0];\n      saveState();\n    });\n    canvas.addEventListener('mousemove', (event) => {\n      if (handle === true) {\n        [firstPoint[0], firstPoint[1]] = secondPoint;\n        const inter = pencilDraw(event);\n        [secondPoint[0], , secondPoint[1]] = inter;\n        if ((Math.abs(firstPoint[0] - secondPoint[0]) > 130\n        || Math.abs(firstPoint[1] - secondPoint[1]) > 130) && firstPoint[0] > 0) {\n          BrezAlg(firstPoint[0], secondPoint[0], firstPoint[1], secondPoint[1]);\n        }\n        saveState();\n      }\n    });\n  }\n\n  if (activeButtonId === 'picker') {\n    changeColor(findColor(0, 0, e));\n  }\n});\n\nbuttons.forEach((button) => {\n  button.addEventListener('click', () => {\n    for (let i = 0; i < buttons.length; i += 1) {\n      if (buttons[i].classList.contains('active')) buttons[i].classList.remove('active');\n    }\n    button.classList.add('active');\n  });\n});\n\ndocument.addEventListener('keydown', (e) => {\n  if ((e.code === 'KeyB') || (e.code === 'KeyC') || e.code === 'KeyP') {\n    for (let i = 0; i < buttons.length; i += 1) {\n      if (buttons[i].classList.contains('active')) {\n        buttons[i].classList.remove('active');\n        break;\n      }\n    }\n  }\n  if (e.code === 'KeyB') buttons[0].classList.add('active');\n  if (e.code === 'KeyC') buttons[1].classList.add('active');\n  if (e.code === 'KeyP') buttons[2].classList.add('active');\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });