/**
 * @file configurator.js
 * @module configurator
 * @description Contains the functions necessary to set and get configuration settings from the shared data structure.
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 * @NOTE This file is needed to keep these lower level functions separate from the chiefConfiguration.
 * Because having these functions in the chiefConfiguration can cause a circular dependency.
 */
import loggers from './loggers';
import * as bas from '../Constants/basic.constants';
import * as wrd from '../Constants/word.constants';
import * as sys from '../Constants/system.constants';
var path = require('path');
var D = require('../Structures/data');
// var namespacePrefix = wrd.cFramework + bas.cDot + wrd.cExecutrix + bas.cDot + baseFileName + bas.cDot;
// var baseFileName = path.basename(module.filename, path.extname(module.filename));

/**
 * @function setConfigurationSetting
 * @description Sets a configuration setting on the configuration sub-tree data structure stored on D-data structure.
 * @param {array<string>} configurationNamespace The path in the configuration JSON object where the configuration setting should be set.
 * @param {string} configurationName The key of the configuration setting.
 * @param {string} configurationValue The value of the configuration setting.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/02/03
 * @NOTE We cannot do the usual logging here with the loggers.
 * The configuration system hasn't even been setup in some cases that this function gets called.
 * So again, we will have to rely on hard coded console logs.
 */
function setConfigurationSetting(configurationNamespace, configurationName, configurationValue) {
  // console.log('BEGIN configurator.setConfigurationSetting function');
  // console.log('configurationNamespace is: ' + JSON.stringify(configurationNamespace));
  // console.log('configurationName is: ' + configurationName);
  // console.log('configurationValue is: ' + configurationValue);
  // let functionName = setConfigurationSetting.name;
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, msg.cBEGIN_Function);
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'configurationName is: ' + configurationName);
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'configurationValue is: ' + configurationValue);
  // D[wrd.cConfiguration][configurationName] = configurationValue;
  let namespaceConfigObject = getConfigurationNamespaceObject(configurationNamespace.split(bas.cDot));
  if (namespaceConfigObject) {
    namespaceConfigObject[configurationNamespace + bas.cDot + configurationName] = configurationValue;
  }
  // console.log('END configurator.setConfigurationSetting function');
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, msg.cEND_Function);
};

/**
 * @function getConfigurationSetting
 * @description Gets a configuration value based on the configuration name.
 * @param {array<string>} configurationNamespace The path in the configuration JSON object where the configuration setting should be found.
 * @param {string} configurationName The key of the configuration setting.
 * @return {string|integer|boolean} The value of whatever was stored in the D[Configuration] sub-tree.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
function getConfigurationSetting(configurationNamespace, configurationName) {
  let returnConfigurationValue;
  // console.log('BEGIN configurator.getConfigurationSetting function');
  // console.log('configurationNamespace is: ' + configurationNamespace);
  // console.log('configurationName is: ' + configurationName);
  // let functionName = getConfigurationSetting.name;
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, msg.cBEGIN_Function);
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'configurationNamespace is: ' + configurationNamespace);
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'configurationName is: ' + configurationName);
  let namespaceConfigObject = undefined;
  namespaceConfigObject = getConfigurationNamespaceObject(configurationNamespace.split(bas.cDot));
  // console.log('namespaceConfigObject is: ' + JSON.stringify(namespaceConfigObject));
  if (namespaceConfigObject) {
    returnConfigurationValue = namespaceConfigObject[configurationNamespace + bas.cDot + configurationName];
  }
  // if (D[wrd.cConfiguration] !== undefined) {
  //   if (D[wrd.cConfiguration][configurationName] !== undefined) {
  //     returnConfigurationValue = D[wrd.cConfiguration][configurationName];
  //   } else {
  //     returnConfigurationValue = undefined;
  //   }
  // } else {
  //   returnConfigurationValue = undefined;
  // }
  // console.log('returnConfigurationValue is: ' + returnConfigurationValue);
  // console.log('END configurator.getConfigurationSetting function');
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, 'returnConfigurationValue is: ' + returnConfigurationValue);
  // loggers.consoleLog(namespacePrefix + baseFileName + b.cDot + functionName, msg.cEND_Function);
  return returnConfigurationValue;
};

/**
 * @function getConfigurationNamespaceObject
 * @description Navigates the configuration JSON data object tree to find the namespace of configuration settings.
 * @param {array<string>} configurationNamespace The path in the configuration JSON object where the configuration setting should be set.
 * @return {object|boolean} The object found at the specified namespace address in the configuration data object, or False if nothing was found.
 * @author Seth Hollingsead
 * @date 2021/03/31
 */
function getConfigurationNamespaceObject(configurationNamespace) {
  // console.log('BEGIN configurator.getConfigurationNamespaceObject function');
  // console.log('configurationNamespace is: ' + JSON.stringify(configurationNamespace));
  let returnValue = true; // Assume there will be a return value;
  let configurationDataRoot = D[wrd.cConfiguration];
  let configurationPathObject = configurationDataRoot;
  if (!configurationPathObject) { // Need to handle the case that the configuration data object doesn't even exist at all!
    D[wrd.cConfiguration] = {};
    configurationDataRoot = D[wrd.cConfiguration];
    configurationPathObject = configurationDataRoot;
  }
  for (let i = 0; i < configurationNamespace.length; i++) {
    // if (i === configurationNamespace.length - 1) {
      // We are dealing with a leaf-node.
      if (!configurationPathObject[configurationNamespace[i]]) {
        // It doesn't exist yet, so lets make it.
        configurationPathObject[configurationNamespace[i]] = {};
      }
      configurationPathObject = configurationPathObject[configurationNamespace[i]];
    // }
    // else {
    //   // So if it exists then we package it up, if not then return false, because the path doesn't exist.
    //   if (configurationPathObject[configurationNamespace[i]]) {
    //     configurationPathObject = configurationPathObject[configurationNamespace[i]];
    //   } else {
    //     returnValue = false;
    //     break; // End the for-loop, the entire namespace address was not found.
    //   }
    // }
  } // End for-loop (let i = 0; i < configurationNamespace.length; i++)
  if (returnValue === true) {
    returnValue = configurationPathObject
  }
  // console.log('returnValue is: ' + JSON.stringify(returnValue));
  // console.log('END configurator.getConfigurationNamespaceObject function');
  return returnValue;
};

export default {
  setConfigurationSetting,
  getConfigurationSetting
};
