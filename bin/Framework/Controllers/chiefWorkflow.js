"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chiefData = _interopRequireDefault(require("../Controllers/chiefData"));

var _loggers = _interopRequireDefault(require("../Executrix/loggers"));

var b = _interopRequireWildcard(require("../Constants/basic.constants"));

var w = _interopRequireWildcard(require("../Constants/word.constants"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file chiefWorkflow.js
 * @module chiefWorkflow
 * @description Holds all of the functions that manage the workflows,
 * system defined workflows, client defined workflows,
 * setting the workflow data and getting the workflow data.
 * @requires module:chiefData
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/22
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');

var D = require('../Resources/data');

var baseFileName = path.basename(module.filename, path.extname(module.filename));
/**
 * @function loadCommandWorkflowsFromPath
 * @description Loads the command workflows XML file that is specified by the input.
 * @param {string} commandWorkflowFilePathConfigurationName The path and file name to the XML that contains the command workflows definitions.
 * (Could be system defined command workflows or client command defined command workflows)
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/22
 */

function loadCommandWorkflowsFromPath(commandWorkflowFilePathConfigurationName) {
  var functionName = loadCommandWorkflowsFromPath.name;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function); // commandWorkflowFilePathConfigurationName is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccommandWorkflowFilePathConfigurationNameIs + commandWorkflowFilePathConfigurationName);

  var allCommandWorkflowsData = {};
  allCommandWorkflowsData = _chiefData["default"].setupAllXmlData(commandWorkflowFilePathConfigurationName, s.cCommandWorkflows);

  if (D[s.cCommandWorkflows] === undefined) {
    // Make sure we only do this if it's undefined, otherwise we might wipe out previously loaded data.
    D[s.cCommandWorkflows] = {};
    D[s.cCommandWorkflows] = allCommandWorkflowsData[s.cCommandWorkflows];
  } else {
    for (var i = 0; i < allCommandWorkflowsData[s.cCommandWorkflows][w.cWorkflow].length; i++) {
      D[s.cCommandWorkflows][w.cWorkflow].push(allCommandWorkflowsData[s.cCommandWorkflows][w.cWorkflow][i]);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
}

;
var _default = {
  loadCommandWorkflowsFromPath: loadCommandWorkflowsFromPath
};
exports["default"] = _default;