"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _chiefData = _interopRequireDefault(require("../Controllers/chiefData"));

var _configurator = _interopRequireDefault(require("../Executrix/configurator"));

var _ruleBroker = _interopRequireDefault(require("../BusinessRules/ruleBroker"));

var _loggers = _interopRequireDefault(require("../Executrix/loggers"));

var _timers = _interopRequireDefault(require("../Executrix/timers"));

var b = _interopRequireWildcard(require("../Constants/basic.constants"));

var s = _interopRequireWildcard(require("../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path = require('path');

var D = require('../Resources/data');
/**
 * @name setupConfiguration
 * @description Sets up all of the system configuration data.
 * @param  {[String]} pathAndFilename The path and file name of the XML file that should be loaded and parsed into JavaScript objects.
 * @author Seth Hollingsead
 * @date 2020/05/21
 * @NOTE: The following code that uses the loggers.ConsoleLog will never work,
 * because the configuration system isn't loaded yet.
 * This is true for all functions in this file, so we will have to stick with
 * hard coding the debug statements and debugging them by uncommenting.
 * Believe me I don't like it any more than you do, but it's just the way the system works.
 */


function setupConfiguration(pathAndFilename) {
  // console.log('BEGIN chiefConfiguration.setupConfiguration function');
  // console.log('pathAndFilename is: ' + pathAndFilename);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = 'setupTestConfiguration';

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, 'pathAndFilename is: ' + pathAndFilename);

  var rules = {};
  rules[1] = s.cswapBackSlashToForwardSlash;
  D[s.cConfiguration] = {};
  pathAndFilename = _ruleBroker["default"].processRules(pathAndFilename, '', rules);

  _configurator["default"].setConfigurationSetting(s.cConfigurationPath, pathAndFilename);

  var allConfigurationData = {};
  allConfigurationData = _chiefData["default"].setupAllXmlData(s.cConfigurationPath, s.cConfiguration);
  parseLoadedConfigurationData(allConfigurationData); // Get the operating system envrionment variable here and setup how to setup the log files.

  _loggers["default"].consoleLog(s.cLogFileEnabled, _configurator["default"].getConfigurationSetting(s.cDateTimeSTamp));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log(configurator.getConfigurationSetting(s.cDateTimeSTamp));
  // console.log('END chiefConfiguration.setupTestConfiguration function');

}

;
/**
 * @name parseLoadedConfigurationData
 * @description Parses through all of the configuration data that we just loaded from the XML files and
 * adds that data to the correct data-structures in the d.[Configuration] data hive.
 * @param  {[Object]} allConfigurationData A JSON data structure object that contains all configuration meta-data
 * loaded from the Configuration XML files.
 * @author Seth Hollingsead
 * @date 2020/05/21
 * @NOTE The following code that uses the loggers.ConsoleLog will never work,
 * because the configuration system isn't loaded yet.
 * This is true for all functions in this file, so we will have to stick with
 * hard coding the debug statements and debugging them by uncommenting.
 * Believe me I don't like it any more than you do, but it's just the way the system works.
 * @NOTE: The loggers function calls are still listed below, but they will never do anything because
 * the configuration system still hasn't loaded yet. But enabling them at least will not crash the system any more.
 */

function parseLoadedConfigurationData(allConfigurationData) {
  // console.log('BEGIN chiefConfiguration.parseLoadedConfigurationData function');
  // console.log('allConfigurationData contents are: ' + JSON.stringify(allConfigurationData));
  // var baseFileName = path.basename(module.filename, path.extname(module.filename));
  // var functionName = parseLoadedConfigurationData.name;
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'allConfigurationData is: ' + JSON.stringify(allConfigurationData));
  var highLevelConfigurationContainer = {};
  var allConfigurations = {};
  var allSubConfigurations = {};
  var configurations = {};
  var singleConfigurationFile = {};
  var rules = {};
  var configurationsName; // This is the top level name for all of these configuration elements.

  var configurationsVersion;
  var configurationElement; // NOTE We are probably only going to have one nested level deep of configuration settings.
  // So there-fore I will hard-code the Sub-Element rather than
  // trying to add complexity to make this function recursive. That just makes things WAY to difficult.
  // If there is a business need to have many many levels deep of configurations and settings,
  // Then we can reconsider that and solve the problems to make it recursive at that time.
  // It just doesn't make sense at this time.

  var configurationSubElement;
  var name;
  var type;
  var value;
  var version;
  var advancedDebugSettingPrefix;
  rules[1] = s.cstringToDataType; // First we need to pull out all the high level configuration meta-data
  // about the rest of the cofiguration elements we are about to process.

  highLevelConfigurationContainer = allConfigurationData[s.cApplication][s.cConfigurations][s.cConfiguration];
  configurationsName = highLevelConfigurationContainer[s.cConfigurationName]; // console.log('configurationsName is: ' + configurationsName);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'configurationsName is: ' + configurationsName);

  if (highLevelConfigurationContainer[s.cCommon][s.cConfigurationElement][s.cName] === s.cVersionControl) {
    configurationsVersion = highLevelConfigurationContainer[s.cCommon][s.cConfigurationElement][s.cValue];
    configurationsVersion = _ruleBroker["default"].processRules(configurationsVersion, '', rules);
  } // console.log('configurationsVersion is: ' + configurationsVersion);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'configurationsVersion is: ' + configurationsVersion);


  allConfigurations = highLevelConfigurationContainer[s.cConfigurationElements][s.cConfigurationElement]; // console.log('allConfigurationData.length is: ' + Object.keys(allConfigurations).length);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'allConfigurationData.length is: ' + Object.keys(allConfigurations).length);

  if (configurationsVersion !== undefined && configurationsVersion !== '' && configurationsName !== undefined && configurationsName !== '' && !!allConfigurations && Object.keys(allConfigurations).length > 0) {
    // NOTE: Right now this is only being tested with a single configuration file.
    // but it should work with more than one configuration file.
    // I'm trying my best here to pre-design it for working with more than one configuration file.
    // But I'll probably need to revisit this code when we do
    // acutally start working with more than one configuration file.
    // Although we might actually not have more than one configuration file.
    for (var key in allConfigurations) {
      //console.log('single configurationElement is: ' + JSON.stringify(allConfigurations[key]));
      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'single configurationElement is: ' + JSON.stringify(allConfigurations[key]));
      configurationElement = allConfigurations[key];
      name = '';
      type = '';
      value = '';
      version = '';
      advancedDebugSettingPrefix = '';
      configurationSubElement = undefined;
      allSubConfigurations = {};

      if (!!configurationElement) {
        name = configurationElement[s.cName];
        type = configurationElement[s.cType];
        value = configurationElement[s.cValue];
        version = configurationElement[s.cVersion];
        version = _ruleBroker["default"].processRules(version, '', rules);

        if (name !== '' && type !== '' && value !== '' && version !== '') {
          if (type === configurationsName && version == configurationsVersion) {
            if ((name === s.cDebugFunctions || name === s.cDebugFiles) && value === s.cMultiple) {
              // console.log('configurationElement is: ' + JSON.stringify(configurationElement));
              // loggers.consoleLog(baseFileName + b.cDot + functionName, 'configurationElement is: ' + JSON.stringify(configurationElement));
              allSubConfigurations = configurationElement[s.cConfigurationElement]; // console.log('allSubConfigurations is: ' + JSON.stringify(allSubConfigurations));
              // loggers.consoleLog(baseFileName + b.cDot + functionName, 'allSubConfigurations is: ' + JSON.stringify(allSubConfigurations));

              advancedDebugSettingPrefix = name;

              for (var subKey in allSubConfigurations) {
                name = '';
                type = '';
                value = '';
                version = '';
                configurationSubElement = allSubConfigurations[subKey];

                if (!!configurationSubElement) {
                  name = configurationSubElement[s.cName];
                  type = configurationSubElement[s.cType];
                  value = configurationSubElement[s.cValue];
                  version = configurationSubElement[s.cVersion];
                  version = _ruleBroker["default"].processRules(version, '', rules);

                  if (name !== '' && type !== '' && value !== '' && version !== '') {
                    if (type === configurationsName && version === configurationsVersion) {
                      // console.log('process advanced configuration setting: ');
                      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'process advanced configuration setting: ');
                      // console.log('name is: ' + name);
                      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'name is: ' + name);
                      // console.log('type is: ' + type);
                      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'type is: ' + type);
                      // console.log('value is: ' + value);
                      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'value is: ' + value);
                      // console.log('version is: ' + version);
                      // loggers.consoleLog(baseFileName + b.cDot + functionName, 'version is: ' + version);
                      value = _ruleBroker["default"].processRules(value, '', rules);

                      _configurator["default"].setConfigurationSetting(advancedDebugSettingPrefix + b.cPipe + name, value);
                    }
                  }
                }
              }
            } else {
              // We are not processing any of the advanced debugging configuration settings.
              // These are just the regular configuration settings, and some basic debug settings.
              value = processConfigurationRules(name, value);
              value = _ruleBroker["default"].processRules(value, '', rules); // console.log('setting the configuration name: ' + name);
              // loggers.consoleLog(baseFileName + b.cDot + functionName, 'setting the configuration name: ' + name);
              // console.log('setting the configuration value: ' + value);
              // loggers.consoleLog(baseFileName + b.cDot + functionName, 'setting the configuration value: ' + value);

              _configurator["default"].setConfigurationSetting(name, value);
            }
          }
        }
      }
    }
  } // console.log('full contents of the D are: ' + JSON.stringify(D));
  // console.log('END chiefConfiguration.parseLoadedConfigurationData function');
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'full contents of the D are: ' + JSON.stringify(D));
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

}

;
/**
 * @name processConfigurationRules
 * @description Processes a name and value to execute required code and convert string values to actual data objects needed by the configuration system.
 * @param  {[String]} name The name of the configuration variable.
 * @param  {[String]} value The value of the configuration variable.
 * @return {[String/Boolean/Integer/Fload/Object]} A value that is appropriately processed.
 * @author Seth Hollingsead
 * @date 2020/05/21
 * @NOTE: The following code that uses the loggers.ConsoleLog will never work,
 * because the configuration system isn't loaded yet.
 * This is true for all functions in this file, so we will have to stick with
 * hard coding the debug statements and debugging them by uncommenting.
 * Believe me I don't like it any more than you do, but it's just the way the system works.
 * @NOTE: The loggers function calls are still listed below, but they will never do anything because
 * the configuration system still hasn't loaded yet. But enabling them at least will not crash the system any more.
 */

function processConfigurationRules(name, value) {
  // console.log('BEGIN chiefConfiguration.processConfigurationRules function');
  // console.log('name is: ' + name);
  // console.log('value is: ' + value);
  // var baseFileName = path.basename(module.filename, path.extname(module.filename));
  // var functionName = parseLoadedConfigurationData.name;
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'name is: ' + name);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'value is: ' + value);
  var returnValue;

  switch (name) {
    case s.cDateTimeStamp:
    case s.cDateStamp:
    case s.cTimeStamp:
      // NOTE: All of these three configurations are processed exactly the same way.
      // As long as what is stored in the configuration file is correct, then they should be processed correctly here.
      // return moment().format(value);0
      returnValue = _timers["default"].getNowMoment(value);
      break;

    default:
      // We don't know what the value is.
      // We have to just return the value as it was passed in, no processing.
      // We don't want to corrupt the other data that may be passed into this function.
      returnValue = value;
      break;
  } // loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnValue is: ' + returnValue);
  // loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnValue is: ' + returnValue);
  // console.log('END chiefConfiguration.processConfigurationRules function');


  return returnValue;
}

;
var _default = {
  setupConfiguration: setupConfiguration
};
exports["default"] = _default;