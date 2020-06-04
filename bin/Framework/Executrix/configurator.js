"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _loggers = _interopRequireDefault(require("./loggers"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var D = require('../Resources/data');

var path = require('path'); // NOTE: This file is needed to keep these lower level functions separate from the chiefConfiguration.
// Because having these functions in the chiefConfiguration can cause a circular dependency.

/**
 * @function setConfigurationSetting
 * @description Sets a configuration setting on the configuration sub-tree data structure stored on t.ctx.
 * @param {string} configurationName The key of the configuration setting.
 * @param {string} configurationValue The value of the configuration setting.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/02/03
 * @NOTE We cannot do the usual logging here with the loggers.
 * The configuration system hasn't even been setup in some cases that this function gets called.
 * So again, we will have to rely on hard coded console logs.
 */


function setConfigurationSetting(configurationName, configurationValue) {
  // console.log('BEGIN configurator.setConfigurationSetting function');
  // console.log('configurationName is: ' + configurationName);
  // console.log('configurationValue is: ' + configurationValue);
  // var baseFileName = path.basename(module.filename, path.extname(module.filename));
  // var functionName = setConfigurationSetting.name;
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'configurationName is: ' + configurationName);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'configurationValue is: ' + configurationValue);
  D[s.cConfiguration][configurationName] = configurationValue; // console.log('END configurator.setConfigurationSetting function');
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
/**
 * @function getConfigurationSetting
 * @description Gets a configuration value based on the configuration name.
 * @param {string} configurationName The key of the configuration setting.
 * @return {string|integer|boolean]} The value of whatever was stored in the t.ctx[Configuration] sub-tree.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */

function getConfigurationSetting(configurationName) {
  var returnConfigurationValue; // console.log('BEGIN configurator.getConfigurationSetting function');
  // console.log('configurationName is: ' + configurationName);
  // var baseFileName = path.basename(module.filename, path.extname(module.filename));
  // var functionName = getConfigurationSetting.name;
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'configurationName is: ' + configurationName);

  if (D[s.cConfiguration] !== undefined) {
    if (D[s.cConfiguration][configurationName] !== undefined) {
      returnConfigurationValue = D[s.cConfiguration][configurationName];
    } else {
      returnConfigurationValue = undefined;
    }
  } else {
    returnConfigurationValue = undefined;
  } // console.log('returnConfigurationValue is: ' + returnConfigurationValue);
  // console.log('END configurator.getConfigurationSetting function');
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnConfigurationValue is: ' + returnConfigurationValue);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);


  return returnConfigurationValue;
}

;
var _default = {
  setConfigurationSetting: setConfigurationSetting,
  getConfigurationSetting: getConfigurationSetting
};
exports["default"] = _default;