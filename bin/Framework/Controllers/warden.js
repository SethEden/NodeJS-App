"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chiefConfiguration = _interopRequireDefault(require("../Controllers/chiefConfiguration"));

var _chiefCommander = _interopRequireDefault(require("../Controllers/chiefCommander"));

var _commandBroker = _interopRequireDefault(require("../CommandsBlob/commandBroker"));

var _chiefWorkflow = _interopRequireDefault(require("../Controllers/chiefWorkflow"));

var _configurator = _interopRequireDefault(require("../Executrix/configurator"));

var _timers = _interopRequireDefault(require("../Executrix/timers"));

var _ruleBroker = _interopRequireDefault(require("../BusinessRules/ruleBroker"));

var _dataBroker = _interopRequireDefault(require("../Executrix/dataBroker"));

var _chiefData = _interopRequireDefault(require("./chiefData"));

var _fileBroker = _interopRequireDefault(require("../Executrix/fileBroker"));

var _loggers = _interopRequireDefault(require("../Executrix/loggers"));

var _allSystemConstantsValidation = _interopRequireDefault(require("../Resources/ConstantsValidation/all-system-constants-validation"));

var bas = _interopRequireWildcard(require("../Constants/basic.constants"));

var gen = _interopRequireWildcard(require("../Constants/generic.constants"));

var wrd = _interopRequireWildcard(require("../Constants/word.constants"));

var sys = _interopRequireWildcard(require("../Constants/system.constants"));

var biz = _interopRequireWildcard(require("../Constants/business.constants"));

var cmd = _interopRequireWildcard(require("../Constants/command.constants"));

var cfg = _interopRequireWildcard(require("../Constants/configuration.constants"));

var msg = _interopRequireWildcard(require("../Constants/message.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file warden.js
 * @module warden
 * @description Contains all the functions to manage the entire application framework at the highest level.
 * Also provides an interface to easily manage all of the application features & various functionality from a single entry point.
 * @requires module:chiefConfiguration
 * @requires module:chiefCommander
 * @requires module:commandBroker
 * @requires module:chiefWorkflow
 * @requires module:configurator
 * @requires module:timers
 * @requires module:ruleBroker
 * @requires module:dataBroker
 * @requires module:fileBroker
 * @requires module:loggers
 * @requires module:all-system-constants-validation
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:business-constants
 * @requires module:command-constants
 * @requires module:configuration-constants
 * @requires module:message-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
// import chiefData from '../Controllers/chiefData';
var path = require('path');

var D = require('../Structures/data');

var baseFileName = path.basename(module.filename, path.extname(module.filename)); // Framework.Controllers.warden.

var namespacePrefix = sys.cFramework + bas.cDot + wrd.cControllers + bas.cDot + baseFileName + bas.cDot;
/**
 * @function bootStrapApplication
 * @description Do all of the activities to setup the application system to run whatever actions the application will run.
 * @param {string} pathAndFilename The path and file name of the XML file that should be loaded and parsed into JavaScript objects.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/05/21
 * @NOTE The following code that uses the loggers.consoleLog will never work,
 * because the configuration system isn't loaded yet.
 * This is true for all functions in this file, so we will have to stick with
 * hard coding the debug statements and debugging them by uncommenting.
 * Believe me I don't like it any more than you do, but it's just the way the system works.
 */

function bootStrapApplication(pathAndFilename) {
  // console.log('BEGIN warden.bootStrapApplication function');
  // console.log('pathAndFilename is: ' + pathAndFilename);
  var functionName = bootStrapApplication.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cpathAndFilenameIs + pathAndFilename);

  _chiefConfiguration["default"].setupConfiguration(pathAndFilename); // contents of D-data structure is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ccontentsOfDataStructreIs + JSON.stringify(D));

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function); // console.log('contents of D are: ' + JSON.stringify(D));
  // console.log('END warden.bootStrapApplication function');

}

;
/**
 * @function processRootPath
 * @description Processes the root path of the application using business rules.
 * @NOTE: By calling: path.resolve(__dirname); This does not return the true root path of the application.
 * It returns the path to the currently executing file, or the file that was executed first.
 * which is C:/NodeJS-App/Application/NodeJS-App/
 * But what we really need for the root path is just C:/NodeJS-App/
 * @param {string} systemRootPath The root path as returned by calling: path.resolve(__dirname);
 * @return {string} The true root path of the application.
 * @author Seth Hollingsead
 * @date 2020/05/21
 * @NOTE: The following code that uses the loggers.consoleLog will never work,
 * because the configuration system isn't loaded yet.
 * This is true for all functions in this file, so we will have to stick with
 * hard coding the debug statements and debugging them by uncommenting.
 * Believe me I don't like it any more than you do, but it's just the way the system works.
 * @NOTE: The loggers function calls are still listed below, but they will never do anything because
 * the configuration system still hasn't loaded yet. But enabling them at least will not crash the system any more.
 */

function processRootPath(systemRootPath) {
  // console.log('BEGIN warden.processRootPath function');
  // console.log('systemRootPath is: ' + systemRootPath);
  // var functionName = processRootPath.name;
  // loggers.consoleLog(namespacePrefix + functionName, sys.cBEGIN_Function);
  // loggers.consoleLog(namespacePrefix + functionName, 'systemRootPath is: ' + systemRootPath);
  var rules = {};
  rules[0] = biz.cparseSystemRootPath;

  _ruleBroker["default"].bootStrapBusinessRules();

  _chiefCommander["default"].bootStrapCommands();

  var rootPath = _ruleBroker["default"].processRules(systemRootPath, '', rules);

  _dataBroker["default"].setupDataStorage();

  rootPath = path.resolve(rootPath); // console.log('systemRootPath after business rule processing is: ' + rootPath);
  // console.log('END warden.processRootPath function');
  // loggers.consoleLog(namespacePrefix + functionName, sys.cEND_Function);

  return rootPath;
}

;
/**
 * @function initApplicationSchema
 * @description Saves the root path and also cleans the root path and saves the cleaned root path.
 * Also saves the current application version number and the application name.
 * @param {string} rootPath The root path of the application.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/02
 */

/**
 * @function initApplicationSchema
 * @description Saves the root path and also cleans the root path and saves the cleaned root path.
 * Also saves the current application version number and the application name.
 * @param {string} rootPath The root path of the application.
 * @param {string} clientConstantsPath The path to the client constants files in the application path sub-folder structure.
 * @param {array<array<string,object>>} arrayValidationData And array of arrays that contains all of the constants library validation names and data objects.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/02
 */

function initApplicationSchema(rootPath, clientConstantsPath, clientValidationData) {
  // console.log('BEGIN warden.initApplicationSchema function');
  // console.log('rootPath is: ' + rootPath);
  var functionName = initApplicationSchema.name; // console.log('logging the BEGIN warden.saveRootPath function');

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // console.log('logging the current rootPath input.');
  // rootPath is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.crootPathIs + rootPath); // clientValidationData is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cclientValidationDataIs + JSON.stringify(clientValidationData)); // console.log('setting the configuration setting for the root path');


  _configurator["default"].setConfigurationSetting(wrd.csystem, sys.cApplicationRootPath, rootPath);

  var cleanedRootPath; // console.log('calling file broker to clean the root path.');

  cleanedRootPath = _fileBroker["default"].cleanRootPath(rootPath);
  cleanedRootPath = path.resolve(cleanedRootPath); // console.log('set the cleaned root path as a configuration setting, cleanedRootPath is: ' + cleanedRootPath);

  var applicationMetaDataPathAndFilename = path.resolve(rootPath + bas.cForwardSlash + wrd.cResources + bas.cForwardSlash + cfg.cmetaDataDotJson);

  var applicationData = _fileBroker["default"].getJsonData(applicationMetaDataPathAndFilename); // console.log('loaded application meta-data is: ' + JSON.stringify(applicationData));


  _configurator["default"].setConfigurationSetting(wrd.csystem, sys.cApplicationCleanedRootPath, cleanedRootPath); // console.log('set the application name as a configuration setting: ' + applicationData[wrd.cName]);


  _configurator["default"].setConfigurationSetting(wrd.csystem, sys.cApplicationName, applicationData[wrd.cName]); // console.log('set the application version number as a configuration setting: ' + applicationData[wrd.cVersion]);


  _configurator["default"].setConfigurationSetting(wrd.csystem, sys.cApplicationVersionNumber, applicationData[wrd.cVersion]); // console.log('set the application description as a configuration setting: ' + applicationData[wrd.cDescription]);


  _configurator["default"].setConfigurationSetting(wrd.csystem, sys.cApplicationDescription, applicationData[wrd.cDescription]);

  if (_configurator["default"].getConfigurationSetting(wrd.csystem, cfg.cEnableConstantsValidation) === true) {
    var resolvedSystemConstantsPathActual = path.resolve(cleanedRootPath + bas.cForwardSlash + sys.cSystemConstantsPathActual);
    var resolvedClientConstantsPathActual = path.resolve(cleanedRootPath + bas.cForwardSlash + clientConstantsPath); // console.log('resolvedConstantsPathActual is: ' + resolvedConstantsPathActual);

    _configurator["default"].setConfigurationSetting(wrd.csystem, sys.cSystemConstantsPath, resolvedSystemConstantsPathActual);

    _configurator["default"].setConfigurationSetting(wrd.csystem, sys.cClientConstantsPath, resolvedClientConstantsPathActual);

    _chiefData["default"].initializeConstantsValidationData(); // This just makes sure that the data structure is created on the D-Data structure.


    var systemValidationData = _allSystemConstantsValidation["default"].initializeAllSystemConstantsValidationData(); // console.log('systemValidationData is: ' + JSON.stringify(systemValidationData));


    _chiefData["default"].addConstantsValidationData(systemValidationData);

    _chiefData["default"].addConstantsValidationData(clientValidationData.call()); // Here we will evaluate the function that was passed in, now the configuration setting should be setup.

  }

  var enableLogFileOutputSetting = _configurator["default"].getConfigurationSetting(wrd.csystem, sys.cLogFileEnabled);

  if (enableLogFileOutputSetting === true) {
    // console.log('Capture the session date-time-stamp so we can determine a log file name.');
    var sessionDateTimeStamp = _timers["default"].getNowMoment(_configurator["default"].getConfigurationSetting(wrd.csystem, sys.cDateTimeStamp)); // console.log('sessionDateTimeStamp is: ' + sessionDateTimeStamp);


    var logFileName = sessionDateTimeStamp + bas.cUnderscore + applicationData[wrd.cVersion] + bas.cUnderscore + applicationData[wrd.cName] + gen.cDotLog; // console.log('logFileName is: ' + logFileName);

    _configurator["default"].setConfigurationSetting(wrd.csystem, sys.cLogFilePathAndName, logFileName);
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function); // console.log('END warden.saveRootPath function');

}

;
/**
 * @function mergeClientBusinessRules
 * @description Merges the map of client defined business rule names and client defined business rule function calls
 * with the existing D-data structure that should already have all of the system defined business rules.
 * @param {object} clientBusinessRules A map of client defined business rule names and client defined business rule function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/10
 */

function mergeClientBusinessRules(clientBusinessRules) {
  // console.log('BEGIN warden.mergeClientBusinessRules function');
  // console.log('clientBusinessRules is: ' + JSON.stringify(clientBusinessRules));
  var functionName = mergeClientBusinessRules.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // clientBusinessRules are:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cclientBusinessRulesAre + JSON.stringify(clientBusinessRules));

  _ruleBroker["default"].addClientRules(clientBusinessRules); // contents of D-data structure is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ccontentsOfDataStructreIs + JSON.stringify(D));

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function); // console.log('END warden.mergeClientBusinessRules function');

}

;
/**
 * @function mergeClientCommands
 * @description Merges the map of client defined command names and client defined command function calls
 * with the existing D-data structure that should already have all of the system defined commands.
 * @param {object} clientCommands A map of client defined command names and client defined command function calls.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/19
 */

function mergeClientCommands(clientCommands) {
  // console.log('BEGIN warden.mergeClientCommands function');
  var functionName = mergeClientCommands.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // clientCommands are:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cclientCommandsAre + JSON.stringify(clientCommands));

  _commandBroker["default"].addClientCommands(clientCommands); // contents of D-data structure is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ccontentsOfDataStructreIs + JSON.stringify(D));

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function); // console.log('END warden.mergeClientCommands function');

}

;
/**
 * @function loadCommandAliases
 * @description Loads and merges both the system defined command aliases XML file & the client defined command aliases XML file.
 * @param {string} systemCommandsAliasesPath The path from the application root to the system defined commands aliases XML file.
 * @param {string} clientCommandsAliasesPath The path from the application root to the client defined commands aliases XML file.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/21
 */

function loadCommandAliases(systemCommandsAliasesPath, clientCommandsAliasesPath) {
  var functionName = loadCommandAliases.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // systemCommandsAliasesPath is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.csystemCommandsAliasesPathIs + systemCommandsAliasesPath); // clientCommandsAliasesPath is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cclientCommandsAliasesPathIs + clientCommandsAliasesPath);

  var applicationRootPath = _configurator["default"].getConfigurationSetting(wrd.csystem, sys.cApplicationCleanedRootPath);

  var resolvedSystemCommandsAliasesPath = path.resolve(applicationRootPath + bas.cForwardSlash + systemCommandsAliasesPath);
  var resolvedClientCommandsAliasesPath = path.resolve(applicationRootPath + bas.cForwardSlash + clientCommandsAliasesPath); // resolvedSystemCommandsAliasesPath is:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cresolvedSystemCommandsAliasesPathIs + resolvedSystemCommandsAliasesPath); // resolvedClientCommandsAliasesPath is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cresolvedClientCommandsAliasesPathIs + resolvedClientCommandsAliasesPath);

  _configurator["default"].setConfigurationSetting(wrd.csystem, cmd.cSystemCommandsAliasesPath, resolvedSystemCommandsAliasesPath);

  _configurator["default"].setConfigurationSetting(wrd.csystem, cmd.cClientCommandsAliasesPath, resolvedClientCommandsAliasesPath);

  _chiefCommander["default"].loadCommandAliasesFromPath(cmd.cSystemCommandsAliasesPath); // loggers.consoleLog(namespacePrefix + functionName, 'contents of D-data structure is: ' + JSON.stringify(D));


  _chiefCommander["default"].loadCommandAliasesFromPath(cmd.cClientCommandsAliasesPath); // loggers.consoleLog(namespacePrefix + functionName, 'contents of D-data structure is: ' + JSON.stringify(D));


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

;
/**
 * @function loadCommandWorkflows
 * @description Loads and merges both the system defined command workflows XML file & client defined command workflows XML file.
 * @param {string} systemWorkflowPath The path from the application root to the system defined command workflows XML file.
 * @param {string} clientWorkflowPath The path from the application root to the client defined command workflows XML file.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/22
 */

function loadCommandWorkflows(systemWorkflowPath, clientWorkflowPath) {
  var functionName = loadCommandWorkflows.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // systemWorkflowPath is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.csystemWorkflowPathIs + systemWorkflowPath); // clientWorkflowPath is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cclientWorkflowPathIs + clientWorkflowPath);

  var applicationRootPath = _configurator["default"].getConfigurationSetting(wrd.csystem, sys.cApplicationCleanedRootPath);

  var resolvedSystemWorkflowsPath = path.resolve(applicationRootPath + bas.cForwardSlash + systemWorkflowPath);
  var resolvedClientWorkflowsPath = path.resolve(applicationRootPath + bas.cForwardSlash + clientWorkflowPath); // resolvedSystemWorkflowsPath is:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cresolvedSystemWorkflowsPathIs + resolvedSystemWorkflowsPath); // resolvedClientWorkflowsPath is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cresolvedClientWorkflowsPathIs + resolvedClientWorkflowsPath);

  _configurator["default"].setConfigurationSetting(wrd.csystem, cmd.cSystemWorkflowsPath, resolvedSystemWorkflowsPath);

  _configurator["default"].setConfigurationSetting(wrd.csystem, cmd.cClientWorkflowsPath, resolvedClientWorkflowsPath);

  _chiefWorkflow["default"].loadCommandWorkflowsFromPath(cmd.cSystemWorkflowsPath);

  _chiefWorkflow["default"].loadCommandWorkflowsFromPath(cmd.cClientWorkflowsPath);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

;
/**
 * @function executeBusinessRule
 * @description A wrapper to call a business rule from the application level code.
 * @param {string} businessRule The name of the business rule that should execute.
 * @param {string} ruleInput The input to the rule that is being called.
 * @param {string} ruleMetaData Additional data to input to the rule.
 * @return {string} The value that is returned from the rule is also returned.
 * @author Seth Hollingsead
 * @date 2020/06/15
 */

function executeBusinessRule(businessRule, ruleInput, ruleMetaData) {
  // console.log('BEGIN warden.executeBusinessRule function');
  // console.log('businessRule is: ' + JSON.stringify(businessRule));
  // console.log('ruleInput is: ' + JSON.stringify(ruleInput));
  // console.log('ruleMetaData is: ' + JSON.stringify(ruleMetaData));
  var functionName = executeBusinessRule.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // businessRule is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cbusinessRuleIs + JSON.stringify(businessRule)); // ruleInput is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cruleInputIs + JSON.stringify(ruleInput)); // ruleMetaData is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cruleMetaDataIs + JSON.stringify(ruleMetaData));

  var rules = {};
  var returnData;
  rules[0] = businessRule;
  returnData = _ruleBroker["default"].processRules(ruleInput, ruleMetaData, rules);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END warden.executeBusinessRule function');


  return returnData;
}

;
/**
 * @function enqueueCommand
 * @description Adds a command to the command queue.
 * It is worth noting that a command could actually load a whole workflow of commands.
 * So one command can spawn into many commands that cause
 * the command queue to be very full with a very complicated workflow.
 * This also acts as a wrapper for the chiefCommander.enqueueCommand function.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/18
 */

function enqueueCommand(command) {
  // console.log('BEGIN warden.enqueueCommand function');
  // console.log('command is: ' + command);
  var functionName = enqueueCommand.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // command is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.ccommandIs + command);

  _chiefCommander["default"].enqueueCommand(command);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function); // console.log('END warden.enqueueCommand function');

}

;
/**
 * @function isCommandQueueEmpty
 * @description This is a wrapper for the chiefCommander.isCommandQueueEmpty function.
 * Determines if the command queue is empty or not,
 * which also determines if the application should continue executing commands from the command queue
 * in sequential order or prompt for another command or exit.
 * @return {Boolean} True or False to indicate if command execution should continue or not.
 * @author Seth Hollingsead
 * @date 2020/06/18
 */

function isCommandQueueEmpty() {
  var functionName = isCommandQueueEmpty.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  var returnData = false;
  returnData = _chiefCommander["default"].isCommandQueueEmpty();

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
}

;
/**
 * @function processCommandQueue
 * @description This is just a wrapper for the chiefCommander.processCommandQueue function,
 * which will ultimately call chiefCommander.processCommand to process an individual command.
 * This is because a command could actually invoke a command workflow that might enqueue a bunch of commands
 * to the command queue. All of them must be executed in sequence as part of the main application loop.
 * @return {boolean} A TRUE or FALSE to indicate if the command loop should terminate when it's done.
 * @author Seth Hollingsead
 * @date 2020/05/27
 */

function processCommandQueue() {
  var functionName = processCommandQueue.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  var returnData = false;
  returnData = _chiefCommander["default"].processCommandQueue();

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
}

;
/**
 * @function setConfigurationSetting
 * @description This is just a wrapper for the configurator setConfigurationSetting function.
 * @param {string} configurationName The key of the configuration setting.
 * @param {string|boolean|integer|object} configurationValue The value of the configuration setting.
 * @return {void}
 * @author Seth Hollingsead
 * @data 2020/05/26
 */

function setConfigurationSetting(configurationNamespace, configurationName, configurationValue) {
  // console.log('BEGIN warden.setConfigurationSetting function');
  // console.log('configurationName is: ' + configurationName);
  // console.log('configurationValue is: ' + configurationValue);
  var functionName = setConfigurationSetting.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // configurationNamespace is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cconfigurationNamespaceIs + configurationNamespace); // configurationName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cconfigurationNameIs + configurationName); // configurationValue is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cconfigurationValueIs + configurationValue); // D[sys.cConfiguration][configurationName] = configurationValue;


  _configurator["default"].setConfigurationSetting(configurationNamespace, configurationName, configurationValue); // console.log('END warden.setConfigurationSetting function');


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

;
/**
 * @function getConfigurationSetting
 * @description This is just a wrapper for the configurator getConfigurationSetting function.
 * @param {string} configurationName The key of the configuration setting.
 * @return {string|integer|boolean|object} The value of whatever was stored in the D[Configuration] sub-tree.
 * @author Seth Hollingsead
 * @date 2020/05/26
 */

function getConfigurationSetting(configurationNamespace, configurationName) {
  // console.log('BEGIN warden.getConfigurationSetting function');
  // console.log('configurationName is: ' + configurationName);
  var functionName = getConfigurationSetting.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // configurationNamespace is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cconfigurationNamespaceIs + configurationNamespace); // configurationName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cconfigurationNameIs + configurationName); // var returnConfigurationValue = D[sys.cConfiguration][configurationName];


  var returnConfigurationValue = _configurator["default"].getConfigurationSetting(configurationNamespace, configurationName); // console.log('returnConfigurationValue is: ' + JSON.stringify(returnConfigurationValue));
  // console.log('END warden.getConfigurationSetting function');
  // returnConfigurationValue is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnConfiguraitonValueIs + returnConfigurationValue);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnConfigurationValue;
}

;
/**
 * @function consoleLog
 * @description This is just a wrapper for the loggers.consoleLog function.
 * @param {string} classPath The class path for the caller of this function file.function or class.method.
 * @param {string|boolean|integer|object} message The message or data content that should be dumped to the output.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/05/26
 * @NOTE We cannot insturment this code with calls to loggers.consoleLog as it would introduce yet another ciruclar dependency.
 * We will have to stick with just hard coded console.logs in this case to debug at this level.
 */

function consoleLog(classPath, message) {
  // console.log('BEGIN warden.consoleLog function');
  // console.log('classPath is: ' + classPath);
  // console.log('message is: ' + JSON.stringify(message));
  _loggers["default"].consoleLog(classPath, message); // console.log('END warden.consoleLog function');

}

;
/**
 * @function sleep
 * @description Causes the entire application to sleep for a set time.
 * @param {integer} sleepTime The time that the application should sleep in milliseconds.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/02/22
 */

function sleep(sleepTime) {
  var functionName = sleep.name;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function); // configurationName is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, 'sleepTime is: ' + sleepTime);

  _timers["default"].sleep(sleepTime);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);
}

;
var _default = {
  bootStrapApplication: bootStrapApplication,
  processRootPath: processRootPath,
  initApplicationSchema: initApplicationSchema,
  mergeClientBusinessRules: mergeClientBusinessRules,
  mergeClientCommands: mergeClientCommands,
  loadCommandAliases: loadCommandAliases,
  loadCommandWorkflows: loadCommandWorkflows,
  executeBusinessRule: executeBusinessRule,
  enqueueCommand: enqueueCommand,
  isCommandQueueEmpty: isCommandQueueEmpty,
  processCommandQueue: processCommandQueue,
  setConfigurationSetting: setConfigurationSetting,
  getConfigurationSetting: getConfigurationSetting,
  consoleLog: consoleLog,
  sleep: sleep
};
exports["default"] = _default;