"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _loggers = _interopRequireDefault(require("../Executrix/loggers"));

var bas = _interopRequireWildcard(require("../Constants/basic.constants"));

var wrd = _interopRequireWildcard(require("../Constants/word.constants"));

var sys = _interopRequireWildcard(require("../Constants/system.constants"));

var msg = _interopRequireWildcard(require("../Constants/message.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file workflowBroker.js
 * @module workflowBroker
 * @description Holds all of the low level functions that manage the workflows,
 * system defined workflows, client defined workflows,
 * setting the workflow data and getting the workflow data.
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:message-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/22
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');

var D = require('../Structures/data');

var baseFileName = path.basename(module.filename, path.extname(module.filename)); // Framework.Executrix.workflowBroker.

var namespacePrefix = sys.cFramework + bas.cDot + wrd.cExecutrix + bas.cDot + baseFileName + bas.cDot;
/**
 * @function getWorkflow
 * @description Given the name of the workflow that is being requested,
 * get that workflow from the D-data structure workflows data hive.
 * @param {string} workflowName The name of the workflow we should get workflow data for.
 * @return {string|boolean} The workflow value, which ideally would be a list of commands and command parameters.
 * False if no workflow by the specified name was found.
 * @author Seth Hollingsead
 * @date 2020/06/22
 */

function getWorkflow(workflowName) {
  var functionName = getWorkflow.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // workflowName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cworkflowNameIs + workflowName);

  var workflowValue = false;
  var arrayOfWorkflows = D[sys.cCommandWorkflows][wrd.cWorkflow];

  for (var i = 0; i < arrayOfWorkflows.length; i++) {
    var currentWorkflow = arrayOfWorkflows[i]; // currentWorkflow is:

    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ccurrentWorkflowIs + JSON.stringify(currentWorkflow));

    if (currentWorkflow[wrd.cName] === workflowName) {
      workflowValue = currentWorkflow[wrd.cValue]; // workflowValue is:

      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cworkflowValueIs + JSON.stringify(workflowValue));

      break;
    }
  } // workflowValue is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cworkflowValueIs + workflowValue);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return workflowValue;
}

;
var _default = {
  getWorkflow: getWorkflow
};
exports["default"] = _default;