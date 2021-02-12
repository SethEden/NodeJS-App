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
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import chiefConfiguration from '../Controllers/chiefConfiguration';
import chiefCommander from '../Controllers/chiefCommander';
import commandBroker from '../CommandsBlob/commandBroker';
// import chiefData from '../Controllers/chiefData';
import chiefWorkflow from '../Controllers/chiefWorkflow';
import configurator from '../Executrix/configurator';
import timers from '../Executrix/timers';
import ruleBroker from '../BusinessRules/ruleBroker';
import dataBroker from '../Executrix/dataBroker';
import chiefData from './chiefData';
import fileBroker from '../Executrix/fileBroker';
import loggers from '../Executrix/loggers';
import * as b from '../Constants/basic.constants';
import * as g from '../Constants/generic.constants';
import * as w from '../Constants/word.constants';
import * as s from '../Constants/system.constants';
var path = require('path');
var D = require('../Resources/data');
var baseFileName = path.basename(module.filename, path.extname(module.filename));

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
  let functionName = bootStrapApplication.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cpathAndFilenameIs + pathAndFilename);
  chiefConfiguration.setupConfiguration(pathAndFilename);
  // contents of D-data structure is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccontentsOfDataStructreIs + JSON.stringify(D));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('contents of D are: ' + JSON.stringify(D));
  // console.log('END warden.bootStrapApplication function');
};

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
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'systemRootPath is: ' + systemRootPath);
  let rules = {};
  rules[1] = s.cparseSystemRootPath;
  ruleBroker.bootStrapBusinessRules();
  chiefCommander.bootStrapCommands();
  let rootPath = ruleBroker.processRules(systemRootPath, '', rules);
  dataBroker.setupDataStorage();
  rootPath = path.resolve(rootPath);
  // console.log('systemRootPath after business rule processing is: ' + rootPath);
  // console.log('END warden.processRootPath function');
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return rootPath;
};

/**
 * @function saveRootPath
 * @description Saves the root path and also cleans the root path and saves the cleaned root path.
 * Also saves the current application version number and the application name.
 * @param {string} rootPath The root path of the application.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/02
 */
function saveRootPath(rootPath) {
  // console.log('BEGIN warden.saveRootPath function');
  // console.log('rootPath is: ' + rootPath);
  let functionName = saveRootPath.name;
  // console.log('logging the BEGIN warden.saveRootPath function');
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // console.log('logging the current rootPath input.');
  // rootPath is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.crootPathIs + rootPath);
  // console.log('setting the configuration setting for the root path');
  configurator.setConfigurationSetting(s.cApplicationRootPath, rootPath);
  let cleanedRootPath;
  // console.log('calling file broker to clean the root path.');
  cleanedRootPath = fileBroker.cleanRootPath(rootPath);
  cleanedRootPath = path.resolve(cleanedRootPath);
  // console.log('set the cleaned root path as a configuration setting, cleanedRootPath is: ' + cleanedRootPath);
  let applicationMetaDataPathAndFilename = path.resolve(rootPath + b.cForwardSlash + w.cResources + b.cForwardSlash + s.cmetaDataDotJson);
  let applicationData = fileBroker.getJsonData(applicationMetaDataPathAndFilename);
  // console.log('loaded application meta-data is: ' + JSON.stringify(applicationData));
  configurator.setConfigurationSetting(s.cApplicationCleanedRootPath, cleanedRootPath);
  // console.log('set the application name as a configuration setting: ' + applicationData[w.cName]);
  configurator.setConfigurationSetting(s.cApplicationName, applicationData[w.cName]);
  // console.log('set the application version number as a configuration setting: ' + applicationData[w.cVersion]);
  configurator.setConfigurationSetting(s.cApplicationVersionNumber, applicationData[w.cVersion]);
  // console.log('set the application description as a configuration setting: ' + applicationData[w.cDescription]);
  configurator.setConfigurationSetting(s.cApplicationDescription, applicationData[w.cDescription]);
  if (configurator.getConfigurationSetting(s.cEnableConstantsValidation) === true) {
      chiefData.setupConstantsValidationData();
      let resolvedConstantsPathActual = path.resolve(cleanedRootPath + b.cForwardSlash + s.cConstantsPathActual)
      // console.log('resolvedConstantsPathActual is: ' + resolvedConstantsPathActual);
      configurator.setConfigurationSetting(s.cConstantsPath, resolvedConstantsPathActual);
  }
  let enableLogFileOutputSetting = configurator.getConfigurationSetting(s.cLogFileEnabled);
  if (enableLogFileOutputSetting === true) {
    // console.log('Capture the session date-time-stamp so we can determine a log file name.');
    let sessionDateTimeStamp = timers.getNowMoment(configurator.getConfigurationSetting(s.cDateTimeStamp));
    // console.log('sessionDateTimeStamp is: ' + sessionDateTimeStamp);
    let logFileName = sessionDateTimeStamp + b.cUnderscore + applicationData[w.cVersion] + b.cUnderscore + applicationData[w.cName] + g.cDotLog;
    // console.log('logFileName is: ' + logFileName);
    configurator.setConfigurationSetting(s.cLogFilePathAndName, logFileName);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('END warden.saveRootPath function');
};

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
  let functionName = mergeClientBusinessRules.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // clientBusinessRules are:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cclientBusinessRulesAre + JSON.stringify(clientBusinessRules));

  ruleBroker.addClientRules(clientBusinessRules);
  // contents of D-data structure is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccontentsOfDataStructreIs + JSON.stringify(D));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('END warden.mergeClientBusinessRules function');
};

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
  let functionName = mergeClientCommands.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // clientCommands are:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cclientCommandsAre + JSON.stringify(clientCommands));

  commandBroker.addClientCommands(clientCommands);
  // contents of D-data structure is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccontentsOfDataStructreIs + JSON.stringify(D));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('END warden.mergeClientCommands function');
};

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
  let functionName = loadCommandAliases.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // systemCommandsAliasesPath is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.csystemCommandsAliasesPathIs + systemCommandsAliasesPath);
  // clientCommandsAliasesPath is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cclientCommandsAliasesPathIs + clientCommandsAliasesPath);
  let applicationRootPath = configurator.getConfigurationSetting(s.cApplicationCleanedRootPath);
  let resolvedSystemCommandsAliasesPath = path.resolve(applicationRootPath + b.cForwardSlash + systemCommandsAliasesPath);
  let resolvedClientCommandsAliasesPath = path.resolve(applicationRootPath + b.cForwardSlash + clientCommandsAliasesPath);
  // resolvedSystemCommandsAliasesPath is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cresolvedSystemCommandsAliasesPathIs + resolvedSystemCommandsAliasesPath);
  // resolvedClientCommandsAliasesPath is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cresolvedClientCommandsAliasesPathIs + resolvedClientCommandsAliasesPath);
  configurator.setConfigurationSetting(s.cSystemCommandsAliasesPath, resolvedSystemCommandsAliasesPath);
  configurator.setConfigurationSetting(s.cClientCommandsAliasesPath, resolvedClientCommandsAliasesPath);
  chiefCommander.loadCommandAliasesFromPath(s.cSystemCommandsAliasesPath);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'contents of D-data structure is: ' + JSON.stringify(D));
  chiefCommander.loadCommandAliasesFromPath(s.cClientCommandsAliasesPath);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'contents of D-data structure is: ' + JSON.stringify(D));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

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
  let functionName = loadCommandWorkflows.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // systemWorkflowPath is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.csystemWorkflowPathIs + systemWorkflowPath);
  // clientWorkflowPath is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cclientWorkflowPathIs + clientWorkflowPath);
  let applicationRootPath = configurator.getConfigurationSetting(s.cApplicationCleanedRootPath);
  let resolvedSystemWorkflowsPath = path.resolve(applicationRootPath + b.cForwardSlash + systemWorkflowPath);
  let resolvedClientWorkflowsPath = path.resolve(applicationRootPath + b.cForwardSlash + clientWorkflowPath);
  // resolvedSystemWorkflowsPath is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cresolvedSystemWorkflowsPathIs + resolvedSystemWorkflowsPath);
  // resolvedClientWorkflowsPath is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cresolvedClientWorkflowsPathIs + resolvedClientWorkflowsPath);
  configurator.setConfigurationSetting(s.cSystemWorkflowsPath, resolvedSystemWorkflowsPath);
  configurator.setConfigurationSetting(s.cClientWorkflowsPath, resolvedClientWorkflowsPath);
  chiefWorkflow.loadCommandWorkflowsFromPath(s.cSystemWorkflowsPath);
  chiefWorkflow.loadCommandWorkflowsFromPath(s.cClientWorkflowsPath);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

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
    let functionName = executeBusinessRule.name;
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
    // businessRule is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cbusinessRuleIs + JSON.stringify(businessRule));
    // ruleInput is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cruleInputIs + JSON.stringify(ruleInput));
    // ruleMetaData is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cruleMetaDataIs + JSON.stringify(ruleMetaData));
    let rules = {};
    let returnData;
    rules[0] = businessRule;
    returnData = ruleBroker.processRules(ruleInput, ruleMetaData, rules);
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
    // console.log('returnData is: ' + returnData);
    // console.log('END warden.executeBusinessRule function');
    return returnData;
};

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
  let functionName = enqueueCommand.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // command is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccommandIs + command);
  chiefCommander.enqueueCommand(command);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('END warden.enqueueCommand function');
};

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
  let functionName = isCommandQueueEmpty.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  let returnData = false;
  returnData = chiefCommander.isCommandQueueEmpty();
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

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
  let functionName = processCommandQueue.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  let returnData = false;
  returnData = chiefCommander.processCommandQueue();
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function setConfigurationSetting
 * @description This is just a wrapper for the configurator setConfigurationSetting function.
 * @param {string} configurationName The key of the configuration setting.
 * @param {string|boolean|integer|object} configurationValue The value of the configuration setting.
 * @return {void}
 * @author Seth Hollingsead
 * @data 2020/05/26
 */
function setConfigurationSetting(configurationName, configurationValue) {
  // console.log('BEGIN warden.setConfigurationSetting function');
  // console.log('configurationName is: ' + configurationName);
  // console.log('configurationValue is: ' + configurationValue);
  let functionName = setConfigurationSetting.name;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // configurationName is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconfigurationNameIs + configurationName);
  // configurationValue is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconfigurationValueIs + configurationValue);
  // D[s.cConfiguration][configurationName] = configurationValue;
  configurator.setConfigurationSetting(configurationName, configurationValue);
  // console.log('END warden.setConfigurationSetting function');
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
};

/**
 * @function getConfigurationSetting
 * @description This is just a wrapper for the configurator getConfigurationSetting function.
 * @param {string} configurationName The key of the configuration setting.
 * @return {string|integer|boolean|object} The value of whatever was stored in the D[Configuration] sub-tree.
 * @author Seth Hollingsead
 * @date 2020/05/26
 */
function getConfigurationSetting(configurationName) {
// console.log('BEGIN warden.getConfigurationSetting function');
// console.log('configurationName is: ' + configurationName);
let functionName = getConfigurationSetting.name;
loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
// configurationName is:
loggers.consoleLog(baseFileName + b.cDot + functionName, s.cconfigurationNameIs + configurationName);
// var returnConfigurationValue = D[s.cConfiguration][configurationName];
let returnConfigurationValue = configurator.getConfigurationSetting(configurationName);
// console.log('returnConfigurationValue is: ' + JSON.stringify(returnConfigurationValue));
// console.log('END warden.getConfigurationSetting function');
// returnConfigurationValue is:
loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnConfiguraitonValueIs + returnConfigurationValue);
loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
return returnConfigurationValue;
};

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
  loggers.consoleLog(classPath, message);
  // console.log('END warden.consoleLog function');
};

export default {
  bootStrapApplication,
  processRootPath,
  saveRootPath,
  mergeClientBusinessRules,
  mergeClientCommands,
  loadCommandAliases,
  loadCommandWorkflows,
  executeBusinessRule,
  enqueueCommand,
  isCommandQueueEmpty,
  processCommandQueue,
  setConfigurationSetting,
  getConfigurationSetting,
  consoleLog
};
