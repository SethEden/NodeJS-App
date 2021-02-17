"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceCharacterAtIndexOfString = exports.aggregateCommandArguments = exports.cleanCommandInput = exports.replaceCharacterAtIndex = exports.isEven = exports.isOdd = exports.getAttributeValue = exports.getAttributeName = exports.isArrayOrObject = exports.isObject = exports.arrayDeepClone = exports.isNonZeroLengthArray = exports.isArray = exports.isArrayEmpty = exports.isObjectEmpty = exports.storeData = exports.getStoredData = exports.supportedFileFormatsAre = exports.loadDataFile = exports.getFirstTopLevelFolderFromPath = exports.removeXnumberOfFoldersFromEndOfPath = exports.replaceDoublePercentWithMessage = exports.parseSystemRootPath = exports.getKeywordNameFromDataContextName = exports.getDataCatagoryDetailNameFromDataContextName = exports.getDataCatagoryFromDataContextName = exports.arraysAreEqual = exports.getLehmerCodeValue = exports.recursiveArrayExpansion = exports.solveLehmerCode = exports.generateCommandAliases = exports.countDuplicateCommandAliases = exports.isConstantValid = exports.isValidCommandNameString = exports.validateConstantsDataValues = exports.validatePatternsThatNeedImplementation = exports.searchForPatternsInStringArray = exports.constantsFulfillmentSystem = exports.constantsOptimizedFulfillmentSystem = exports.convertConstantTypeToConstantPrefix = exports.isConstantTypeValid = exports.findConstantName = exports.getConstantName = exports.getConstantActualValue = exports.getConstantType = exports.doesConstantExist = exports.validateConstantsDataValidationLineItemName = exports.determineSuggestedConstantsValidationLineOfCode = exports.determineConstantsContextQualifiedPrefix = exports.validateConstantsDataValidation = exports.getLengthOfLongestStringInArray = exports.doesArrayContainFilename = exports.ascertainMatchingElements = exports.ascertainMatchingFilenames = exports.removeCharacterFromArray = exports.doesArrayContainCharacter = exports.doesArrayContainLowerCaseConsolidatedString = exports.compareSimplifiedAndConsolidatedStrings = exports.simplifyAndConsolidateString = exports.mapWordToCamelCaseWord = exports.convertArrayToCamelCaseString = exports.isStringCamelCase = exports.isStringList = exports.isFirstCharacterUpperCase = exports.isFirstCharacterLowerCase = exports.doesStringContainLowerCaseCharacter = exports.doesStringContainUpperCaseCharacter = exports.recombineStringArrayWithSpaces = exports.getWordsArrayFromString = exports.getWordCountInString = exports.determineWordDelimiter = exports.countDelimiterInString = exports.doesStringContainAcronym = exports.countCamelCaseWords = exports.convertCamelCaseStringToArray = exports.aggregateNumericalDifferenceBetweenTwoStrings = exports.getValueFromAssignmentOperationString = exports.removeFileExtensionFromFileName = exports.removeDotFromFileExtension = exports.getFileExtension = exports.getFileNameFromPath = exports.convertStringToUpperCase = exports.convertStringToLowerCase = exports.cleanCarriageReturnFromString = exports.replaceCharacterWithCharacter = exports.replaceColonWithUnderscore = exports.replaceSpacesWithPlus = exports.getUserNameFromEmail = exports.swapDoubleBackSlashToSingleBackSlash = exports.swapDoubleForwardSlashToSingleForwardSlash = exports.swapBackSlashToForwardSlash = exports.swapForwardSlashToBackSlash = exports.singleQuoteSwapAfterEquals = exports.isString = exports.isFloat = exports.isInteger = exports.isBoolean = exports.determineObjectDataType = exports.stringToDataType = exports.stringToBoolean = void 0;

var _configurator = _interopRequireDefault(require("../../Executrix/configurator"));

var _stack = _interopRequireDefault(require("../../Resources/stack"));

var _loggers = _interopRequireDefault(require("../../Executrix/loggers"));

var _dataBroker = _interopRequireDefault(require("../../Executrix/dataBroker"));

var _fileBroker = _interopRequireDefault(require("../../Executrix/fileBroker"));

var b = _interopRequireWildcard(require("../../Constants/basic.constants"));

var p = _interopRequireWildcard(require("../../Constants/phonics.constants"));

var g = _interopRequireWildcard(require("../../Constants/generic.constants"));

var n = _interopRequireWildcard(require("../../Constants/numeric.constants"));

var w = _interopRequireWildcard(require("../../Constants/word.constants"));

var s = _interopRequireWildcard(require("../../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var lineByLine = require('n-readlines');

var _ = require('lodash');

var path = require('path');

var math = require('mathjs');

var chalk = require('chalk');

var D = require('../../../Framework/Resources/data');

var baseFileName = path.basename(module.filename, path.extname(module.filename));
/**
 * @function stringToBoolean
 * @description Converts a string to a boolean value
 * @param {string} inputData A string that contains a truthy or a falsy value and should be converted to a boolean.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A boolean value of either True or False according to the business rule conversion.
 * @author Seth Hollingsead
 * @date 2020/01/30
 * @NOTE We cannot pass in a 1 or 0 to this function and expect it to evaluate as a True or False because:
 * We have another function that is passing strings into the function, and also part of that check to look for data-types is a check to see if a string is a number.
 * If we cause this function to evaluate a 0 or 1 to a boolean, then the integer function would never get a chance to evaluate.
 */

var stringToBoolean = function stringToBoolean(inputData, inputMetaData) {
  var functionName = s.cstringToBoolean;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    switch (inputData.toLowerCase().trim()) {
      case g.ctrue:
      case g.cTrue:
      case g.cTRUE:
      case b.ct:
      case b.cT:
      case b.cy:
      case b.cY:
      case g.cyes:
      case g.cYes:
      case g.cYES:
      case b.con:
      case b.cOn:
      case b.cON:
        returnData = true;
        break;

      case g.cfalse:
      case g.cFalse:
      case g.cFALSE:
      case b.cf:
      case b.cF:
      case b.cn:
      case b.cN:
      case b.cno:
      case b.cNo:
      case b.cNO:
      case g.coff:
      case g.cOff:
      case g.cOFF:
        returnData = false;
        break;

      default:
        returnData = false;
        break;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function stringToDataType
 * @description Converts a string to the appropriate data value.
 * So if it's a string value of "3.1415926535897932384626433832" then it will get converted to a float of the same value.
 * If it's a string value of "false" then it will get converted to a boolean of the same value.
 * If it's a string value of "12" then it will get converted to an integer of the same value.
 * If it's a string value of "Happy Birthday" it will get returned the same as the input, no change, since it's just a string.
 * If it's an array of strings, or collection object, it will get returned as the same as the input, no change.
 * @param {string} inputData The string that should be converted to some value.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {object|string|boolean|integer} Returns a value of whatever type the string should be converted to as appropriate.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */


exports.stringToBoolean = stringToBoolean;

var stringToDataType = function stringToDataType(inputData, inputMetaData) {
  var functionName = s.cstringToDataType;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    var dataType = determineObjectDataType(inputData);

    switch (dataType) {
      case w.cBoolean:
        returnData = stringToBoolean(inputData);
        break;

      case w.cInteger:
        returnData = parseInt(inputData);
        break;

      case w.cFloat:
        returnData = parseFloat(inputData);
        break;

      case w.cString:
        returnData = inputData;
        break;

      default:
        // We don't know what kind of object this is, better return it the way it was.
        returnData = inputData;
        break;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function determineObjectDataType
 * @description Determines if the contents of a string are actually a Boolean, Integer, Float or String or something else.
 * @param {string} inputData A string that contains some value that we should figure out what kind of data type that data is, Boolean, Integer, Float, String or something else.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that indicates if the data type should be Boolean, Integer, Float or String or something else.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */


exports.stringToDataType = stringToDataType;

var determineObjectDataType = function determineObjectDataType(inputData, inputMetaData) {
  var functionName = s.cdetermineObjectDataType;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    if (isBoolean(inputData) === true) {
      returnData = w.cBoolean;
    } else if (isInteger(inputData) === true) {
      returnData = w.cInteger;
    } else if (isFloat(inputData) === true) {
      returnData = w.cFloat;
    } else if (isString(inputData) === true) {
      returnData = w.cString;
    } else {
      // Otherwise we cannot figure out what the data type is.
      // No real way to tell the difference between Short, Long and Double.
      // And we don't really need to tell the difference between all those complicated data types.
      // At least not yet!
      returnData = w.cObject;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isBoolean
 * @description Determines if the input string is a boolean type of value, "true", "True", "TRUE", "t", "T", "y", "Y", "yes", "Yes", "YES", "1", "on", "On", "ON" or
 * "false", "False", "FALSE", "f", "F", "n", "N", "no", "No", "NO", "0"
 * @param {string} inputData The string that should be checked if it is a Boolean style value or not, could be some form of "true" or "false".
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of True or False to indicate if the input string is a Boolean or not.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */


exports.determineObjectDataType = determineObjectDataType;

var isBoolean = function isBoolean(inputData, inputMetaData) {
  var functionName = s.cisBoolean;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    inputData = inputData.toLowerCase().trim();

    if (inputData === g.ctrue || inputData === b.ct || inputData === b.cy || inputData === g.cyes || inputData === b.con || inputData === g.cfalse || inputData === b.cf || inputData === b.cn || inputData === b.cno || inputData === g.coff) {
      returnData = true;
    } else {
      returnData = false;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isInteger
 * @description Determines if the input string is an integer type of value -9007299254740992 to 9007199254740992
 * @param {string} inputData The string that should be checked if it is an integer style value or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of true or false to indicate if the input string is an integer or not.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */


exports.isBoolean = isBoolean;

var isInteger = function isInteger(inputData, inputMetaData) {
  var functionName = s.cisInteger;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    // if (!isNaN(inputData) && inputData.indexOf(b.cDot) === -1) {
    // if (!isNaN(inputData) && inputData.includes(b.cDot) === false) { // Might work for strings, but not numbers.
    // // Technically this works, but we want to make sure we don't attempt to evaluate a string here, and also filter out string decimal points.
    // if (!isNaN(inputData) && inputData % 1 === 0) {
    if (!isNaN(inputData)) {
      if (inputData % 1 === 0) {
        // It's a whole number, aka: integer
        returnData = true;
      } else {
        // Might be a number, but not a whole number.
        returnData = false;
      }
    } else {
      returnData = false;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isFloat
 * @description Determines if the input string is a floating point type of value or not.
 * @param {string} inputData The string that should be checked if it is an integer style value or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of true or false to indicate if the input string is a floating point number or not.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */


exports.isInteger = isInteger;

var isFloat = function isFloat(inputData, inputMetaData) {
  var functionName = s.cisFloat;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    if (!isNaN(inputData) && inputData.indexOf(b.cDot) !== -1) {
      returnData = true;
    } else {
      returnData = false;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isString
 * @description Determines if the input string is a string or not, by process of elimination, aka if it's not a Boolean, and not an Integer and not a Float then it must be a string.
 * @param {string} inputData The string that should be checked if it is a string and not a Boolean, Integer or Float.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A Boolean value of true or false to indicate if the input string is a string and not a Boolean, Integer or Float; or not (meaning it would be one of those 3 data types, discuised as a string).
 * @author Seth Hollingsead
 * @date 2020/01/30
 */


exports.isFloat = isFloat;

var isString = function isString(inputData, inputMetaData) {
  var functionName = s.cisString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    if (isBoolean(inputData) === false && isInteger(inputData) === false && isFloat(inputData) === false && (typeof inputData == 'string' || inputData instanceof String)) {
      returnData = true; // If it's not a Boolean, and not an Integer, and not a Float, then it must be a string, especially given the type of the variable is a string!
    } else {
      returnData = false;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function singleQuoteSwapAfterEquals
 * @description Swaps single quote characters in the middle of the string with double quote characters in the middle of the string.
 * input: 'input[name='emailAddress'][class='username']'
 * output: 'input[name="emailAddress"][class="username"]'
 * @param {string} inputData A string that ontains text with single quotes that should be swapped for double quotes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that contains text where single quotes have been exchanged for double quotes.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */


exports.isString = isString;

var singleQuoteSwapAfterEquals = function singleQuoteSwapAfterEquals(inputData, inputMetaData) {
  var functionName = s.csingleQuoteSwapAfterEquals;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    // console.log('inputData is: ' + inputData);
    if (inputData.includes(b.cSingleQuote) === true) {
      // First replace all the quotes in the string with double quotes.
      returnData = inputData.replace(/'/g, b.cDoubleQuote); // Next replace the first and last double quote with single quote.

      if (returnData.indexOf(b.cDoubleQuote) === 0) {
        returnData = inputData.replace(b.cDoubleQuote, b.cSingleQuote);
      }

      if (returnData.charAt(returnData.length - 1) === b.cDoubleQuote) {
        returnData = returnData.slice(0, -1) + b.cSingleQuote;
      }
    } else {
      returnData = inputData;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function swapForwardSlashToBackSlash
 * @description Swaps all forward slash characters in a string for back slash characters.
 * @param {string} inputData String that might contain some forward slashes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string, just all forward slash characters
 * swapped for back slash characters.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */


exports.singleQuoteSwapAfterEquals = singleQuoteSwapAfterEquals;

var swapForwardSlashToBackSlash = function swapForwardSlashToBackSlash(inputData, inputMetaData) {
  var functionName = s.cswapForwardSlashToBackSlash;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    returnData = replaceCharacterWithCharacter(inputData, [/\//g, b.cBackSlash]);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function swapBackSlashToForwardSlash
 * @description Swaps all back slash characters in a string for forward slash characters.
 * @param {string} inputData String that might contain some back slashes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string, just all back slash characters
 * swapped for forward slash characters.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */


exports.swapForwardSlashToBackSlash = swapForwardSlashToBackSlash;

var swapBackSlashToForwardSlash = function swapBackSlashToForwardSlash(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.swapBackSlashToForwardSlash function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var functionName = s.cswapBackSlashToForwardSlash;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    returnData = replaceCharacterWithCharacter(inputData, [/\\/g, b.cForwardSlash]);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.swapBackSlashToForwardSlash function');


  return returnData;
};
/**
 * @function swapDoubleForwardSlashToSingleForwardSlash
 * @description Swaps all double forward slash characters for single forward slash characters.
 * @param {string} inputData String that might contain some double forward slashes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string, just all double forward slash characters
 * swapped for single forward slash characters.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */


exports.swapBackSlashToForwardSlash = swapBackSlashToForwardSlash;

var swapDoubleForwardSlashToSingleForwardSlash = function swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData) {
  var functionName = s.cswapDoubleForwardSlashToSingleForwardSlash;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    returnData = replaceCharacterWithCharacter(inputData, [/\/\//g, b.cForwardSlash]);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function swapDoubleBackSlashToSingleBackSlash
 * @description Swaps all double back slash characters for single back slash characters.
 * @param {string} inputData String that might contain some double back slashes.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string, just all double back slash characters
 * swapped for single back slash characters.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */


exports.swapDoubleForwardSlashToSingleForwardSlash = swapDoubleForwardSlashToSingleForwardSlash;

var swapDoubleBackSlashToSingleBackSlash = function swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.swapDoubleBackSlashToSingleBackSlash function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var functionName = s.cswapDoubleBackSlashToSingleBackSlash;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    returnData = replaceCharacterWithCharacter(inputData, [/\\\\/g, b.cBackSlash]);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.swapDoubleBackSlashToSingleBackSlash function');


  return returnData;
};
/**
 * @function getUserNameFromEmail
 * @description Converts an email input into a username.
 * @param {string} inputData A string that contains an email address value.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string value of the sub-string from before the '@' symbol.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.swapDoubleBackSlashToSingleBackSlash = swapDoubleBackSlashToSingleBackSlash;

var getUserNameFromEmail = function getUserNameFromEmail(inputData, inputMetaData) {
  var functionName = s.cgetUserNameFromEmail;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cIndexOfTheSpace + b.cAt + s.cSpaceIsColonSpace + inputData.indexOf(b.cAt));

    var _returnData = inputData.substr(0, inputData.indexOf(b.cAt));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function replaceSpacesWithPlus
 * @description Replaces all spaces in the input string with plus symbols.
 * @param {string} inputData A string that contains spaces that should be converted to plus symbols.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string but with space characters converted to plus symbols.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.getUserNameFromEmail = getUserNameFromEmail;

var replaceSpacesWithPlus = function replaceSpacesWithPlus(inputData, inputMetaData) {
  var functionName = s.creplaceSpacesWithPlus;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    // returnData = inputData.replace(/ /g, b.cPlus);
    returnData = replaceCharacterWithCharacter(inputData, [/ /g, b.cPlus]);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function replaceColonWithUnderscore
 * @description Replaces all colons in the input string with underscore symbols
 * @param {string} inputData A string that contains colons that should be converted to underscore symbols.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string but with colon characters converted to underscore symbols.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.replaceSpacesWithPlus = replaceSpacesWithPlus;

var replaceColonWithUnderscore = function replaceColonWithUnderscore(inputData, inputMetaData) {
  var functionName = s.creplaceColonWithUnderscore;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    // returnData == inputData.replace(/:/g, b.cUnderscore);
    returnData = replaceCharacterWithCharacter(inputData, [/:/g, b.cUnderscore]);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function replaceCharacterWithCharacter
 * @description Replaces all of a specified character in the input data with another specified character.
 * @NOTE: This is NOT a public facing business rule, because the function signature cannot be made to match with the accepted business rules standards.
 * It actually could be made to match but we would have to combine the 2nd two parameters into one with a delimiter.
 * In practice this would be a mistake, but would be an acceptable solution if we find there are many additional needs for this kind of business rule.
 * @param {string} inputData A string that may or may not contain the specified characters that should be converted to another specified character.
 * @param {array<string,string>} inputMetaData An array of data that contains 2 additional string parameters:
 * inputMetaData[0] === character2Find - The character to be searched and replaced from the input string.
 * inputMetaData[1] === character2Replace - The character that should be used to replace the character specified for replacement from the input data.
 * @return {string} The same as the input string but with specified characters converted to the other specified character.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.replaceColonWithUnderscore = replaceColonWithUnderscore;

var replaceCharacterWithCharacter = function replaceCharacterWithCharacter(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.replaceCharacterWithCharacter function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + JSON.stringify(inputMetaData));
  var functionName = s.creplaceCharacterWithCharacter;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData;
  var character2Find = inputMetaData[0];
  var character2Replace = inputMetaData[1];

  if (!inputData && !character2Find && !character2Replace) {
    returnData = false;
  } else {
    returnData = inputData.replace(character2Find, character2Replace);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.replaceCharacterWithCharacter function');


  return returnData;
};
/**
 * @function cleanCarriageReturnFromString
 * @description Cleans carriage return characters from the input data and trims off any leading or trailing spaces.
 * @param {string} inputData The string that should be scrubbed for carriage returns.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input string, but with all carriage return characters removed.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.replaceCharacterWithCharacter = replaceCharacterWithCharacter;

var cleanCarriageReturnFromString = function cleanCarriageReturnFromString(inputData, inputMetaData) {
  var functionName = s.ccleanCarriageReturnFromString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData.replace(/\s+/g, ' ').trim();
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function convertStringToLowerCase
 * @description Converts the input string to the same string but with no upper case letters.
 * @param {string} inputData The string that should have all upper case letters changed to lower case letters.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The corrected string with all lower case letters.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.cleanCarriageReturnFromString = cleanCarriageReturnFromString;

var convertStringToLowerCase = function convertStringToLowerCase(inputData, inputMetaData) {
  var functionName = s.cconvertStringToLowerCase;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData.toLowerCase();
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function convertStringToUpperCase
 * @description Converts the input string to the same string but with no lower case letters.
 * @param {string} inputData The string that should have all lower case letters changed to upper case letters.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The corrected string with all upper case letters.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.convertStringToLowerCase = convertStringToLowerCase;

var convertStringToUpperCase = function convertStringToUpperCase(inputData, inputMetaData) {
  var functionName = s.cconvertStringToUpperCase;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData.toUpperCase();
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getFileNameFromPath
 * @description Gets the file name from a string that contains the path and the file name.
 * @param {string} inputData The string that should have all the folders and path removed from it.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The file name and file extension string without the full path.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.convertStringToUpperCase = convertStringToUpperCase;

var getFileNameFromPath = function getFileNameFromPath(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.getFileNameFromPath function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var functionName = s.cgetFileNameFromPath;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    // Clean the path string for any double slashes.
    if (inputData.includes(b.cDoubleForwardSlash)) {
      inputData = swapDoubleForwardSlashToSingleForwardSlash(inputData, '');
    }

    if (inputData.includes(b.cForwardSlash)) {
      inputData = swapForwardSlashToBackSlash(inputData, '');
    } // console.log('inputData right before processing is: ' + inputData);


    returnData = inputData.split(b.cBackSlash).pop().trim();
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getFileExtension
 * @description parses the file name and it may or may not also include the path,
 * but regardless it gets the file extension of the file.
 * @param {string} inputData The string that should contain the file name to which we want to get the file extension.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The file extension such as txt, xml, csv, etc...
 * @author Seth Hollingsead
 * @date 2020/06/08
 */


exports.getFileNameFromPath = getFileNameFromPath;

var getFileExtension = function getFileExtension(inputData, inputMetaData) {
  var functionName = s.cgetFileExtension;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    returnData = path.extname(inputData);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function removeDotFromFileExtension
 * @description Removes the Dot from the file extension, such as if the input is ".txt", the return value will just be "txt".
 * @param {string} inputData The string that should contain the file extension that is being modified.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The file extension without the dot prefix.
 * @author Seth Hollingsead
 * @date 2020/06/08
 */


exports.getFileExtension = getFileExtension;

var removeDotFromFileExtension = function removeDotFromFileExtension(inputData, inputMetaData) {
  var functionName = s.cremoveDotFromFileExtension;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData.substring(1);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function removeFileExtensionFromFileName
 * @description Removes the file extension from the file name if it is there.
 * Otherwise it will remove all the characters after the last period in the file name.
 * @param {string} inputData The string that should have all the characters after the last period in the file name removed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same input string bbut without the file extension or all the characters removed after the last dot.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.removeDotFromFileExtension = removeDotFromFileExtension;

var removeFileExtensionFromFileName = function removeFileExtensionFromFileName(inputData, inputMetaData) {
  var functionName = s.cremoveFileExtensionFromFileName;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    returnData = inputData.replace(/\.[^/.]+$/, '');
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getValueFromAssignmentOperationString
 * @description Parses the input string and finds the value on the right side of the '=' sign.
 * @param {string} inputData The string that should be parsed for the value on the right side of the assignment operator.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string value of whatever is on the right side of the assignment operator.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.removeFileExtensionFromFileName = removeFileExtensionFromFileName;

var getValueFromAssignmentOperationString = function getValueFromAssignmentOperationString(inputData, inputMetaData) {
  console.log('s.cgetValueFromAssignmentOperationString' + b.cSpace + s.cisResolvingAs + s.cgetValueFromAssignmentOperationString);
  var functionName = s.cgetValueFromAssignmentOperationString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (!inputData) {
    returnData = false;
  } else {
    var parsedString = inputData.split(b.cEqual);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cparsedStringSpaceTerm + b.cSpace + n.c1 + s.cSpaceIsColonSpace + parsedString[0]);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cparsedStringSpaceTerm + b.cSpace + n.c2 + s.cSpaceIsColonSpace + parsedString[1]);

    returnData = parsedString[1].replace(/['"]+/g, '');
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function aggregateNumericalDifferenceBetweenTwoStrings
 * @description Determines the delta difference between the two input strings and returns it as a number.
 * @param {string} inputData String 1 to compare.
 * @param {string} inputMetaData String 2 to compare.
 * @return {integer} The delta difference between the two strings, expressed as a number.
 * @NOTE Duplicated from the BusinessRules.Rules.stringParsing function,
 * because the app.js code does not support calling and importing ES6 code from CommonJS code.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */


exports.getValueFromAssignmentOperationString = getValueFromAssignmentOperationString;

var aggregateNumericalDifferenceBetweenTwoStrings = function aggregateNumericalDifferenceBetweenTwoStrings(inputData, inputMetaData) {
  var functionName = s.caggregateNumericalDifferenceBetweenTwoStrings;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData; // Convert the input strings to lower case and clean them up for parsing.

  var string1 = inputData.toLowerCase().replace(/\W/g, '');
  var string2 = inputMetaData.toLowerCase().replace(/\W/g, '');

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cstring1Is + string1);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cstring2Is + string2); // Build some arrays of variations on string 2, we will use these for doing the comparisons.


  var variation0 = Array(string2.length + 1).fill(0).map(function (v, i) {
    return i;
  });
  var variation1 = Array(string2.length + 1).fill(0);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cvariation0ValueIs + variation0);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cvariation1ValueIs + variation1);

  for (var i = 0; i < string1.length; i++) {
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ciValueIs + i);

    variation1[0] = i + 1;

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cvariation0ValueIs + variation0);

    for (var j = 0; j < string2.length; j++) {
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cjValueIs + j);

      var deletionCost = variation0[j + 1] + 1;
      var insertionCost = variation1[j] + 1;
      var substitutionCost = void 0;

      if (string1[i] === string2[j]) {
        substitutionCost = variation0[j];
      } else {
        substitutionCost = variation0[j] + 1;
      }

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cdeletionCostIs + deletionCost);

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinsertionCostIs + insertionCost);

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.csubstitutionCostIs + substitutionCost);

      variation1[j + 1] = math.min(deletionCost, insertionCost, substitutionCost);

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cvariation1ValueIs + variation1);
    }

    var temp = variation1;
    variation1 = variation0;
    variation0 = temp;
  }

  returnData = variation0[string2.length];

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function convertCamelCaseStringToArray
 * @description Takes a string in camelCase and returns an array of the words.
 * @param {string} inputData String to decompose into an array.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>} The array of words that were composed in the original string.
 * @author Seth Hollingsead
 * @date 2020/02/10
 * @NOTE Might not work so well with numbers as part of the string, they are not treated as capital letters.
 * We might need to do some refactoring of this function if
 * mixed numbers and camel case strings ever becomes a requirement as input to this function.
 */


exports.aggregateNumericalDifferenceBetweenTwoStrings = aggregateNumericalDifferenceBetweenTwoStrings;

var convertCamelCaseStringToArray = function convertCamelCaseStringToArray(inputData, inputMetaData) {
  var functionName = s.cconvertCamelCaseStringToArray;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;
  var caps = [];

  for (var i = 1; i < inputData.length; i++) {
    if (g.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
      caps.push(i);
    }
  }

  if (caps.length > 0) {
    var last = 0;
    var decomposedString = [];

    for (var j = 0; j < caps.length; j++) {
      decomposedString.push(inputData.slice(last, caps[j]));
      last = caps[j];
    }

    decomposedString.push(inputData.slice(last));
    returnData = decomposedString;
  } else {
    returnData = [inputData];
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function countCamelCaseWords
 * @description Takes a string in camelCase and returns the number of words that it contains based on camel case rules.
 * @param {string} inputData String to count words from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {integer} The number of camel case words found in the string.
 * @author Seth Hollingsead
 * @date 2021/01/28
 * @NOTE Might not work so well with numbers as part of the string, they are not treated as capital letters.
 * We might need to do some refactoring of this function if
 * mixed numbers and camel case strings ever becomes a requirement as input to this function.
 * @NOTE Based on the above implementation for the business rule/function convertCamelCaseStringToArray
 */


exports.convertCamelCaseStringToArray = convertCamelCaseStringToArray;

var countCamelCaseWords = function countCamelCaseWords(inputData, inputMetaData) {
  var functionName = s.ccountCamelCaseWords;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = 0;

  if (inputData) {
    var caps = [];

    for (var i = 1; i < inputData.length; i++) {
      if (g.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        caps.push(i);
      }
    }

    returnData = caps.length;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function doesStringContainAcronym
 * @description Scans a string and determines if there are 2 or more immediately adjacent upper-case characters in the string.
 * Example: nodeJS where JS is an acronym for JavaScript.
 * @param {string} inputData The string that should be scanned to determine if it contains an acronym.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input string contains an acronym.
 * @author Seth Hollingsead
 * @date 2021/01/28
 */


exports.countCamelCaseWords = countCamelCaseWords;

var doesStringContainAcronym = function doesStringContainAcronym(inputData, inputMetaData) {
  var functionName = s.cdoesStringContainAcronym;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;
  var lastCharacterWasUpperCase = false;
  var caps = [];

  if (inputData) {
    for (var i = 1; i < inputData.length; i++) {
      // If the last character was upper case and the current character is upper case then we have found an acronym and we can exit the loop.
      if (lastCharacterWasUpperCase === true && g.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }

      if (g.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        lastCharacterWasUpperCase = true;
      } else {
        lastCharacterWasUpperCase = false;
      }
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function countDelimiterInString
 * @description Takes a string and returns the number of specified delimiters it contains.
 * @param {string} inputData String to count delimiters from.
 * @param {string} inputMetaData The delimiter that should be used when counting from the input string.
 * @return {integer} The number of delimiters found in the string.
 * @author Seth Hollingsead
 * @date 2021/01/28
 * @NOTE: https://stackoverflow.com/questions/35849174/count-spaces-in-a-string
 */


exports.doesStringContainAcronym = doesStringContainAcronym;

var countDelimiterInString = function countDelimiterInString(inputData, inputMetaData) {
  var functionName = s.ccountDelimiterInString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = 0;

  if (inputData && inputMetaData) {
    returnData = inputData.split(inputMetaData).length - 1;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function determineWordDelimiter
 * @description Determines what delimiter should be used to break a string up into words if possible.
 * @param {string} inputData The string that should be examined to determine what delimiter should be used to break it up into words.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The delimiter that should be used, or if camelCase then the function will return the string "CamelCase".
 * @author Seth Hollingsead
 * @date 2021/01/28
 */


exports.countDelimiterInString = countDelimiterInString;

var determineWordDelimiter = function determineWordDelimiter(inputData, inputMetaData) {
  var functionName = s.cdetermineWordDelimiter;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var camelCaseWordCount = countCamelCaseWords(inputData, '');

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccamelCaseWordCountIs + camelCaseWordCount);

    var containsAcronym = doesStringContainAcronym(inputData, '');

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccontainsAcronymIs + containsAcronym);

    var spacesCount = countDelimiterInString(inputData, b.cSpace);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cspacesCountIs + spacesCount);

    var periodCount = countDelimiterInString(inputData, b.cDot);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cperiodCountIs + periodCount);

    var dashCount = countDelimiterInString(inputData, b.cDash);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cdashCountIs + dashCount);

    var underscoreCount = countDelimiterInString(inputData, b.cUnderscore);

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cunderscoreCountIs + underscoreCount);

    if (camelCaseWordCount > 0 && containsAcronym === false && spacesCount === 0 && periodCount === 0 && dashCount === 0 && underscoreCount === 0) {
      returnData = s.cCamelCase; // We haven't hit the case yet where we need to differenciate between all these extra cases, and there are several of them.
      // We could have multiple acronyms in a word, or in multiple words that are camelCase.
      // Each of these could be a really complex special case. If we get to that point we will handle those cases on a case by case basis to improve the algorithm.
      // } else if (camelCaseWordCount > 1 && containsAcronym === false)
    } else if (spacesCount > 0 && periodCount === 0 && dashCount === 0 && underscoreCount === 0) {
      returnData = b.cSpace;
    } else if (spacesCount === 0 && periodCount > 0 && dashCount === 0 && underscoreCount === 0) {
      returnData = b.cDot;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount > 0 && underscoreCount === 0) {
      returnData = b.cDash;
    } else if (spacesCount === 0 && periodCount === 0 && dashCount === 0 && underscoreCount > 0) {
      returnData = b.cUnderscore;
    } else {
      // We don't need to be showing this warning unless we are debugging.
      // WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cDetermineWordDelimiterMessage1 + s.cDetermineWordDelimiterMessage2 + s.cDetermineWordDelimiterMessage3 + s.cDetermineWordDelimiterMessage4);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getWordCountInString
 * @description Gets the number of words in a string, it expects words to be delimited by either camel-case, spaces, period, dash or underscore.
 * @param {string} inputData The string that words should be counted from.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {integer} The number of words that were found in the string.
 * @author Seth Hollingsead
 * @date 2021/01/28
 */


exports.determineWordDelimiter = determineWordDelimiter;

var getWordCountInString = function getWordCountInString(inputData, inputMetaData) {
  var functionName = s.cgetWordCountInString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = 0;

  if (inputData) {
    var wordDelimiter = determineWordDelimiter(inputData, inputMetaData);

    if (wordDelimiter === s.cCamelCase) {
      returnData = countCamelCaseWords(inputData, '');
    } else if (wordDelimiter != '') {
      returnData = inputData.split(wordDelimiter).length;
    } else {
      // We don't need to be showing this warning unless we are debugging.
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cGetWordCountInStringMessage1 + s.cGetWordCountInStringMessage2 + s.cGetWordCountInStringMessage3);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getWordsArrayFromString
 * @description Gets an array of words from a string,
 * automatically determining how the words are delimited based on common word delimiters: camel case, space, period, dash & underscore.
 * @param {string} inputData The string that should be broken down into words and returned as an array.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>} The array of words found in the string.
 * @author Seth Hollingsead
 * @date 2021/01/28
 */


exports.getWordCountInString = getWordCountInString;

var getWordsArrayFromString = function getWordsArrayFromString(inputData, inputMetaData) {
  var functionName = s.cgetWordsArrayFromString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = 0;

  if (inputData) {
    if (getWordCountInString(inputData, '') > 0) {
      var wordDelimiter = determineWordDelimiter(inputData, inputMetaData);
      var stringContainsAcronym = doesStringContainAcronym(inputData, '');

      if (wordDelimiter === s.cCamelCase && stringContainsAcronym === false) {
        returnData = convertCamelCaseStringToArray(inputData, '');
      } else if (wordDelimiter != '' && wordDelimiter != s.cCamelCase) {
        returnData = inputData.split(wordDelimiter);
      } else {
        // We don't need to be showing this warning unless we are debugging.
        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cGetWordsArrayFromStringMessage1 + s.cGetWordsArrayFromStringMessage2 + s.cGetWordsArrayFromStringMessage3);
      }
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function recombineStringArrayWithSpaces
 * @description Takes an array of strings and recombines them sequentially with spaces between each array element.
 * This function is needed, because commands parse inputs by spaces into an array,
 * and some commands need a single continuous string that might be delimited by coma's.
 * So this function lets us recombine and then re-parse the string with another delimiter.
 * @param {array<string>} inputData The array of strings that should be recombined.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string array with spaces between array elements.
 * @author Seth Hollingsead
 * @date 2021/01/29
 */


exports.getWordsArrayFromString = getWordsArrayFromString;

var recombineStringArrayWithSpaces = function recombineStringArrayWithSpaces(inputData, inputMetaData) {
  var functionName = s.crecombineStringArrayWithSpaces;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    returnData = inputData[1];

    for (var i = 2; i < inputData.length; i++) {
      returnData = returnData + b.cSpace + inputData[i];
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function doesStringContainUpperCaseCharacter
 * @description Determines if the input string contains at least one upper case character.
 * @param {string} inputData The string that should be checked for upper case characters.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string contains at least one upper case character or more.
 * @author Seth Hollingsead
 * @date 2021/01/15
 */


exports.recombineStringArrayWithSpaces = recombineStringArrayWithSpaces;

var doesStringContainUpperCaseCharacter = function doesStringContainUpperCaseCharacter(inputData, inputMetaData) {
  var functionName = s.cdoesStringContainUpperCaseCharacter;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    for (var i = 1; i < inputData.length; i++) {
      if (g.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function doesStringContainLowerCaseCharacter
 * @description Determines if the input string contains at least one lower case character.
 * @param {string} inputData The string that should be checked for lower case characters.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string contains at least one lower case character or more.
 * @author Seth Hollingsead
 * @date 2021/01/15
 */


exports.doesStringContainUpperCaseCharacter = doesStringContainUpperCaseCharacter;

var doesStringContainLowerCaseCharacter = function doesStringContainLowerCaseCharacter(inputData, inputMetaData) {
  var functionName = s.cdoesStringContainLowerCaseCharacter;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    for (var i = 1; i < inputData.length; i++) {
      if (g.cLowerCaseEnglishAlphabet.includes(inputData.charAt(i))) {
        returnData = true;
        break;
      }
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isFirstCharacterLowerCase
 * @description Determines if the first character of the string is a lower case character.
 * @param {string} inputData The string that should be checked to determine if the first character is lower case or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the first character of the string is a lower case character or not.
 * @author Seth Hollingsead
 * @date 2021/01/15
 */


exports.doesStringContainLowerCaseCharacter = doesStringContainLowerCaseCharacter;

var isFirstCharacterLowerCase = function isFirstCharacterLowerCase(inputData, inputMetaData) {
  var functionName = s.cisFirstCharacterLowerCase;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    returnData = g.cLowerCaseEnglishAlphabet.includes(inputData.charAt(0));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isFirstCharacterUpperCase
 * @description Determines if the first character of the string is an upper case character.
 * @param {string} inputData The string that should be checked to determine if the first character is upper case or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the first character of the string is an upper case character or not.
 * @author Seth Hollingsead
 * @date 2021/01/15
 */


exports.isFirstCharacterLowerCase = isFirstCharacterLowerCase;

var isFirstCharacterUpperCase = function isFirstCharacterUpperCase(inputData, inputMetaData) {
  var functionName = s.cisFirstCharacterUpperCase;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    returnData = g.cUpperCaseEnglishAlphabet.includes(inputData.charAt(0));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isStringList
 * @description Determines if the input string is a list or not.
 * @param {string} inputData The string that should be checked if it is a list or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input string is a list or not a list.
 * @author Seth Hollingsead
 * @date 2021/01/19
 */


exports.isFirstCharacterUpperCase = isFirstCharacterUpperCase;

var isStringList = function isStringList(inputData, inputMetaData) {
  var functionName = s.cisStringList;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    var primaryCommandDelimiter = _configurator["default"].getConfigurationSetting(s.cPrimaryCommandDelimiter);

    var secondaryCommandDelimiter = _configurator["default"].getConfigurationSetting(s.cSecondaryCommandDelimiter);

    var tertiaryCommandDelimiter = _configurator["default"].getConfigurationSetting(s.cTertiaryCommandDelimiter);

    if (inputData.includes(primaryCommandDelimiter) === true || inputData.includes(secondaryCommandDelimiter) === true || inputData.includes(tertiaryCommandDelimiter) === true) {
      returnData = true;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isStringCamelCase
 * @description Determines if an input string is a camel case string or not.
 * @param {string} inputData The string that should be for camel case qualification.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string is camel case or not.
 * @author Seth Hollingsead
 * @date 2021/01/15
 * @NOTE Even if we have an all upper case acronym at the end of the came case string,
 * The string itself is still considered camel case.
 * Valid examples:
 * myParsedXML
 * fireflyWonder1996
 * wonderWoman1984
 * covidMedicalCase
 * aBc
 */


exports.isStringList = isStringList;

var isStringCamelCase = function isStringCamelCase(inputData, inputMetaData) {
  var functionName = s.cisStringCamelCase;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    var foundFirstCapitalLetter = false; // First make sure the string meets the basic qualifications of a camel case string.
    // 1. Does not contain underscore or dash word seperators.
    // 2. Contains at least 1 lower case letter or more.
    // 3. Contains at least 1 upper case letter or more.
    // 4. Has a lower case or upper case first letter of the first word.

    if (!inputData.match(/[\s_-]/g) && doesStringContainUpperCaseCharacter(inputData, '') && doesStringContainLowerCaseCharacter(inputData, '') && (isFirstCharacterLowerCase(inputData, '') || isFirstCharacterUpperCase(inputData, ''))) {
      for (var i = 1; i < inputData.length; i++) {
        // Now check for the final qualification:
        // 3. Ensure that upper case letters are seperated by lower case letters
        // (numbers also allowed, but there should be at least some lower case letters)
        // NOTE: This for-loop is how we iterate over the characters of the string.
        // First we need to look for the first upper case letter.
        if (foundFirstCapitalLetter === false) {
          if (g.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) {
            // Found an upper case letter, ensure the next letter is lower case.
            foundFirstCapitalLetter = true;
          }
        } else if (foundFirstCapitalLetter === true) {
          if (g.cLowerCaseEnglishAlphabet.includes(inputData.charAt(i))) {
            returnData = true;
            break; // Sufficent evidence to prove this is a camel case string.
          }
        }
      } // End of the for-loop iterating over the characters in the string.

    } // End-if conditions on upperCase & lowerCase.

  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function convertArrayToCamelCaseString
 * @description Takes an array of words and returns a camelCase string of the input words.
 * @param {array<string>} inputData The array of words that should be strung together into a single long string.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A String that contains all of the words from the input array put together in sequential order.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */


exports.isStringCamelCase = isStringCamelCase;

var convertArrayToCamelCaseString = function convertArrayToCamelCaseString(inputData, inputMetaData) {
  var functionName = s.cconvertArrayToCamelCaseString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    returnData = inputData.map(function (key, index) {
      return mapWordToCamelCaseWord(key, index);
    });
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function mapWordToCamelCase
 * @description Takes a String key and an indexed String value and maps the word to an upper case first letter word.
 * @param {string} inputData The string key/value that should be converted to a camel case word.
 * @param {string} inputMetaData The string index for the map to the value that should be used.
 * @return {string} A String where the word has been converted into a camel case word.
 * @author Seth Hollingsead
 * @data 2020/02/15
 */


exports.convertArrayToCamelCaseString = convertArrayToCamelCaseString;

var mapWordToCamelCaseWord = function mapWordToCamelCaseWord(inputData, inputMetaData) {
  var functionName = s.cmapWordToCamelCaseWord;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    returnData = inputData.replace(/^./, function (character) {
      return character.toUpperCase();
    });
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function simplifyAndConsolidateString
 * @description Takes a string, and returns a version of it converted to lowercase, with all digits and symbols and whitespace removed.
 * @param {string} inputData The string that should be simplified and consolidated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string that has been simplified and consolidated by converting to lower case, removing all digits, symbols and white space.
 * @author Seth Hollingsead
 * @date 2020/02/10
 * @NOTE I think this function is not completely working as expected, probably something to do with that regular expression.
 * Input was: 11UpberDriver321CodeClearance0x#0000FF-akaBlue
 * Output was: 11upberdriver321codeclearance0x0000ffakablue
 * As you can see there are still some numbers coming through.
 * Might need to revisit this one when time allows, and if there is ever a business need again.
 */


exports.mapWordToCamelCaseWord = mapWordToCamelCaseWord;

var simplifyAndConsolidateString = function simplifyAndConsolidateString(inputData, inputMetaData) {
  var functionName = s.csimplifyAndConsolidateString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    returnData = _.replace(inputData.toLowerCase(), /[\W]/g, '');
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function compareSimplifiedAndConsolidatedStrings
 * @description Compares two strings by their simplified versions (see simplifyAndConsolidateString()).
 * @param {string} inputData The first string to be compared.
 * @param {string} inputMetaData The second string to be compared.
 * @return {boolean} A Boolean value to indicate if the strings are virtually idential or not.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */


exports.simplifyAndConsolidateString = simplifyAndConsolidateString;

var compareSimplifiedAndConsolidatedStrings = function compareSimplifiedAndConsolidatedStrings(inputData, inputMetaData) {
  var functionName = s.ccompareSimplifiedAndConsolidatedStrings;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData && inputMetaData) {
    returnData = simplifyAndConsolidateString(inputData, '') === simplifyAndConsolidateString(inputMetaData, '');
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function doesArrayContainLowerCaseConsolidatedString
 * @description Checks if an array contains a string, comparison made by lowerCaseAndConsolidateString().
 * @param {array} inputData The array of strings that should be checked if it contains the specified string.
 * @param {string} inputMetaData The string we are looking for in the array.
 * @return {boolean} A Boolean to indicate if the string is found in the array or not.
 * @NOTE Duplicated code in the app.js file,
 * because the app.js code does not support calling and importing ES6 code from CommonJS code.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */


exports.compareSimplifiedAndConsolidatedStrings = compareSimplifiedAndConsolidatedStrings;

var doesArrayContainLowerCaseConsolidatedString = function doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData) {
  var functionName = s.cdoesArrayContainLowerCaseConsolidatedString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData && inputMetaData) {
    // I'm not sure if value1 & value2 below should be referanced to inputData & inputMetaData?
    // I get the arrow function is passing these values to the aggregateNumericalDifferenceBetweenTwoStrings function.
    // But I'm not sure how or what values are being passed for value1 & value2.
    var stringDelta = function stringDelta(value1, value2) {
      return aggregateNumericalDifferenceBetweenTwoStrings(value1, value2) < 2;
    }; // stringDelta value is:


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cstringDeltaValueIs + stringDelta);

    returnData = doesArrayContainValue(inputData, inputMetaData, stringDelta);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function doesArrayContainCharacter
 * @description Parses through all the elements of an array and determines if any one of them contains the input character.
 * @param {string|boolean|integer|object} inputData The character that should be searched for in the array of elements.
 * @param {array<string|boolean|integer|object>} inputMetaData The array that should be searched for the specified character/value/etc...
 * @return {boolean} True or False to indicate if the value was found or not found.
 * @author Seth Hollingsead
 * @date 2020/06/25
 */


exports.doesArrayContainLowerCaseConsolidatedString = doesArrayContainLowerCaseConsolidatedString;

var doesArrayContainCharacter = function doesArrayContainCharacter(inputData, inputMetaData) {
  var functionName = s.cdoesArrayContainCharacter;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData && inputMetaData) {
    for (var i = 0; i < inputMetaData.length; i++) {
      var arrayElement = inputMetaData[i];

      if (arrayElement.includes(inputData) === true) {
        returnData = true;
        break;
      }
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function removeCharacterFromArray
 * @description Removes all instances of a character or value from all array elements.
 * @param {string|integer|boolean|float|object} inputData The character, integer, boolean, float or object
 * that should be removed from all instances of the input array.
 * @param {array<string|boolean|integer|object>} inputMetaData The array from which all instances of the input character, integer, etc... should be removed.
 * @return {array<string|boolean|integer|object>} The array after having the specified character removed from all elements of the input array.
 * @author Seth Hollingsead
 * @date 2020/06/25
 */


exports.doesArrayContainCharacter = doesArrayContainCharacter;

var removeCharacterFromArray = function removeCharacterFromArray(inputData, inputMetaData) {
  var functionName = s.cremoveCharacterFromArray;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData && inputMetaData) {
    for (var i = 0; i < inputMetaData.length; i++) {
      var arrayElement = inputMetaData[i];

      if (arrayElement.includes(inputData) === true) {
        // replaceCharacterWithCharacter Use this to parse the string and remove all characters that match.
        // replaceCharacterWithCharacter(inputData, [/:/g, b.cUnderscore]);
        inputMetaData[i] = replaceCharacterWithCharacter(arrayElement, [RegExp('\\' + inputData, b.cg), '']);
      }
    }

    returnData = inputMetaData;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function ascertainMatchingFilenames
 * @description Compares two file names after stripping off the path and determines if they are matching or not.
 * @param {string} inputData The first filename and path that should be used in making the file name comparison.
 * @param {string} inputMetaData The second filename and path that should be used in making the file name comparison.
 * @return {boolean} A Boolean value to indicate if the file names are equavalent.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */


exports.removeCharacterFromArray = removeCharacterFromArray;

var ascertainMatchingFilenames = function ascertainMatchingFilenames(inputData, inputMetaData) {
  var functionName = s.cascertainMatchingFilenames;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData && inputMetaData) {
    if (path.basename(inputData) === path.basename(inputMetaData)) {
      // Filenames match
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cFilenamesMatch);

      returnData = true;
    } else {
      // Filenames do not match
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cFilenamesDoNotMatch);

      returnData = false;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function acertainMatchingElements
 * @description Determines if two values are identical. Needed for completeness of comparison for nested arrays.
 * @param {array} inputData An array that should be compared for equality.
 * @param {array} inputMetaData Second array that should be compared for equality.
 * @return {boolean} True or False to indicate array equality or not.
 * @author Seth Hollingsead
 * @date 2021/01/21
 */


exports.ascertainMatchingFilenames = ascertainMatchingFilenames;

var ascertainMatchingElements = function ascertainMatchingElements(inputData, inputMetaData) {
  var functionName = s.cascertainMatchingElements;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData && inputMetaData) {
    if (inputData === inputMetaData) {
      // Array elements match
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cArrayElementsMatch);

      returnData = true;
    } else {
      // Array elements do not match
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cArrayElementsDoNotMatch);

      returnData = false;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function doesArrayContainFilename
 * @description Checks if an array contains a filename, after stripping off the path.
 * @param {array<string>} inputData The Array of file names that should be checked for the input file name we are looking for.
 * @param {string} inputMetaData The file name we are looking for in the input Array.
 * @return {boolean} A Boolean value to indicate if the file name was found or not.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */


exports.ascertainMatchingElements = ascertainMatchingElements;

var doesArrayContainFilename = function doesArrayContainFilename(inputData, inputMetaData) {
  var functionName = s.cdoesArrayContainFilename;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false; // NOTE: This call doesn't actually work, it may have worked at one time, but it doesn't work now.
  // And I'm not going to spend the time trying to figure out why,
  // when it will be much simpler to just call that same function in a loop to figure out the result.

  returnData = doesArrayContainValue(inputData, inputMetaData, ascertainMatchingFilenames); // NOTE: The below code also works, I am going to attempt to re-enable the above code and see if it also works.
  // YES! This is a second way of doing the same thing. If the above code ever has a problem, we can fall back to this method.
  // for (let i = 0; i < inputData.length; i++) {
  //   if (ascertainMatchingFilenames(inputData[i], inputMetaData) === true) {
  //     returnData = true;
  //     break;
  //   }
  // }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getLengthOfLongestStringInArray
 * @description Determines what the longest string is in an array of strings.
 * @param {array<string>} inputData The array for which we should find the longest length string in.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {integer} The length of the longest string in the array.
 * @author Seth Hollingsead
 * @date 2021/01/30
 * @NOTE https://stackoverflow.com/questions/6521245/finding-longest-string-in-array
 */


exports.doesArrayContainFilename = doesArrayContainFilename;

var getLengthOfLongestStringInArray = function getLengthOfLongestStringInArray(inputData, inputMetaData) {
  var functionName = s.cgetLengthOfLongestStringInArray;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = 0;

  if (inputData) {
    returnData = Math.max.apply(Math, _toConsumableArray(inputData.map(function (el) {
      return el.length;
    })));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function validateConstantsDataValidation
 * @description Validates that validation data to ensure that all the contents of the
 * constants validation data matches with the actual constants definitions.
 * @param {string} inputData The path of the constants file that should be validated.
 * @param {string} inputMetaData The name of the data hive that contains the appropriate matching constants validation data.
 * @return {boolean} True or False to indicate if all of the contents of the constants are fully validated or not.
 * @author Seth Hollingsead
 * @date 2020/07/28
 */


exports.getLengthOfLongestStringInArray = getLengthOfLongestStringInArray;

var validateConstantsDataValidation = function validateConstantsDataValidation(inputData, inputMetaData) {
  var functionName = s.cvalidateConstantsDataValidation;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false; // Set it to false and we will prove if it should be true.

  var foundAFailure = false;

  if (inputData && inputMetaData) {
    var liner = new lineByLine(inputData);
    var line;

    while (line = liner.next()) {
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, line.toString(g.cascii));

      var lineInCode = line.toString(g.cascii);
      var foundConstant = false;

      if (lineInCode.includes(s.cexportconst) === true) {
        var lineArray = lineInCode.split(b.cSpace); // lineArray[2] is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.clineArray2Is + lineArray[2]);

        foundConstant = validateConstantsDataValidationLineItemName(lineArray[2], inputMetaData);
        var qualifiedConstantsFilename = getFileNameFromPath(inputData, '');

        if (foundConstant === true) {
          if (_configurator["default"].getConfigurationSetting(s.cDisplayIndividualConstantsValidationPassMessages) === true) {
            var passMessage = w.cPASS + b.cColon + b.cSpace + lineArray[2] + b.cSpace + w.cPASS;
            passMessage = chalk.rgb(0, 0, 0)(passMessage);
            passMessage = chalk.bgRgb(0, 255, 0)(passMessage);
            console.log(qualifiedConstantsFilename + b.cColon + b.cSpace + passMessage);
          }
        } else {
          if (_configurator["default"].getConfigurationSetting(s.cDisplayIndividualConstantsValidationFailMessages) === true) {
            var failMessage = w.cFAIL + b.cColon + b.cSpace + lineArray[2] + b.cSpace + w.cFAIL;
            failMessage = chalk.rgb(0, 0, 0)(failMessage);
            failMessage = chalk.bgRgb(255, 0, 0)(failMessage);
            var qualifiedConstantsPrefix = determineConstantsContextQualifiedPrefix(qualifiedConstantsFilename, '');
            console.log(qualifiedConstantsFilename + b.cColon + b.cSpace + failMessage); // loggers.consoleLog(baseFileName + b.cDot + functionName, w.cFAIL + b.cSpace + lineArray[2] + b.cSpace + w.cFAIL);
            // TODO: Make sure we craft a message for what the constant should be added to the constants validation data file.

            var suggestedLineOfCode = determineSuggestedConstantsValidationLineOfCode(lineArray[2], qualifiedConstantsPrefix);

            if (suggestedLineOfCode !== '') {
              suggestedLineOfCode = chalk.rgb(0, 0, 0)(suggestedLineOfCode);
              suggestedLineOfCode = chalk.bgRgb(255, 0, 0)(suggestedLineOfCode); // Suggested line of code is:

              console.log(s.cSuggestedLineOfCodeIs + suggestedLineOfCode);
            }
          }

          foundAFailure = true;
        }
      }
    }
  }

  if (foundAFailure === false) {
    returnData = true;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function determineConstantsContextQualifiedPrefix
 * @description Takes the filename to a constants file and determines
 * the standard prefix that should be used in the code to referance that constants file.
 * @param {string} inputData The filename of the constants file or
 * the full path and file name of the constants file. (Should work just the same with either one)
 * @param {string} inputMetaData Not used for this one.
 * @return {string} A single character string that represents the standard character used in the code to referance a constants file.
 * @author Seth Hollingsead
 * @date 2020/12/18
 */


exports.validateConstantsDataValidation = validateConstantsDataValidation;

var determineConstantsContextQualifiedPrefix = function determineConstantsContextQualifiedPrefix(inputData, inputMetaData) {
  var functionName = s.cdetermineConstantsContextQualifiedPrefix;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    returnData = inputData;

    if (inputData.includes(w.cbasic) === true) {
      returnData = b.cb;
    } else if (inputData.includes(w.ccolor) === true) {
      returnData = p.cclr;
    } else if (inputData.includes(w.celement) === true) {
      returnData = b.ce;
    } else if (inputData.includes(w.cgeneric) === true) {
      returnData = b.cg;
    } else if (inputData.includes(w.cisotope) === true) {
      returnData = b.ci;
    } else if (inputData.includes(w.cnumeric) === true) {
      returnData = b.cn;
    } else if (inputData.includes(w.cphonics) === true) {
      returnData = b.cp;
    } else if (inputData.includes(w.cshape) === true) {
      returnData = p.cshp;
    } else if (inputData.includes(w.csystem) === true) {
      returnData = b.cs;
    } else if (inputData.includes(w.cunits) === true) {
      returnData = b.cu;
    } else if (inputData.includes(w.cword) === true) {
      returnData = b.cw;
    } else {
      // ERROR: Unknown constant file.
      console.log(s.cErrorUnknownConstantFile);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function determineSuggestedConstantsValidationLineOfCode
 * @description Takes the name of the missing constant and determines a suggested line of code to add to the appropriate constants validation file.
 * This will make it really easy for developers to maintain the constants validation system.
 * @param {string} inputData The name of the constant that is missing and should have a line of code generated for it.
 * @param {string} inputMetaData The prefix used to referance the constants file in the code.
 * @return {string} The suggested line of code that should be added to the appropriate constants validation code file.
 * @author Seth Hollingsead
 * @date 2020/07/29
 */


exports.determineConstantsContextQualifiedPrefix = determineConstantsContextQualifiedPrefix;

var determineSuggestedConstantsValidationLineOfCode = function determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData) {
  var functionName = s.cdetermineSuggestedConstantsValidationLineOfCode;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData && inputMetaData) {
    returnData = inputData; // Input: cZZTopIntentionalFailure
    // Output: {Name: 'cZZTopIntentionalFailure', Actual: w.cZZTopIntentionalFailure, Expected: 'ZZTopIntentionalFailure'}

    if (inputData.charAt(0) === b.cc) {
      var literalValue = inputData.substr(1); // `Name: '${inputData}', Actual: ${inputMetaData}.${inputData}, Expected: '${literalValue}'}`;

      returnData = b.cOpenCurlyBrace + w.cName + b.cColon + b.cSpace + b.cSingleQuote + inputData + b.cSingleQuote + b.cComa + b.cSpace + w.cActual + b.cColon + b.cSpace + inputMetaData + b.cDot + inputData + b.cComa + b.cSpace + w.cExpected + b.cColon + b.cSpace + b.cSingleQuote + literalValue + b.cSingleQuote + b.cCloseCurlyBrace;
    } else {
      // ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
      // 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
      // 'Please reformat the constant correctly so a line of code can be generated for you.
      console.log(s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 + s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 + s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 + s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 + s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 + s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6);
      returnData = '';
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function validateConstantsDataValidationLineItemName
 * @description Loops through all of the constants validation data and verifies if a matching constant definition can be found, or not found.
 * @param {string} inputData The constant definition that should be searched for.
 * @param {string} inputMetaData  The name of the data hive that contains the appropriate matching constants validation data.
 * @return {boolean} True or False to indicate if a match was found or not found.
 * @author Seth Hollingsead
 * @date 2020/07/28
 */


exports.determineSuggestedConstantsValidationLineOfCode = determineSuggestedConstantsValidationLineOfCode;

var validateConstantsDataValidationLineItemName = function validateConstantsDataValidationLineItemName(inputData, inputMetaData) {
  var functionName = s.cvalidateConstantsDataValidationLineItemName;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData && inputMetaData) {
    for (var i = 0; i < D[s.cConstantsValidationData][inputMetaData].length; i++) {
      var validationLineItem = D[s.cConstantsValidationData][inputMetaData][i];

      if (validationLineItem) {
        if (inputData === validationLineItem.Name) {
          returnData = true;
          break;
        }
      }
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function doesConstantExist
 * @description Walks through all of the constants validation files and
 * checks to see if any of the expected values match the string that is passed in.
 * @param {string} inputData The value that should be looked for in all the constants files.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if a matching constant definition was found or not.
 * @author Seth Hollingsead
 * @date 2021/01/25
 */


exports.validateConstantsDataValidationLineItemName = validateConstantsDataValidationLineItemName;

var doesConstantExist = function doesConstantExist(inputData, inputMetaData) {
  var functionName = s.cdoesConstantExist;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    var constantsTypesKeys = Object.keys(D[s.cConstantsValidationData]); // constantsTypesKeys is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));

    loop1: for (var i = 0; i < constantsTypesKeys.length; i++) {
      var constantTypeKey = constantsTypesKeys[i]; // constantTypeKey is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));

      var constantTypeValues = D[s.cConstantsValidationData][constantTypeKey]; // constantTypeValues is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));

      var constantsKeys = Object.keys(constantTypeValues); // constantsKeys is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantsKeysIs + JSON.stringify(constantsKeys));

      loop2: for (var j = 0; j < constantsKeys.length; j++) {
        var constantKey = constantsKeys[j]; // constantKey is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantKeyIs + JSON.stringify(constantKey));

        var constantActualValue = constantTypeValues[constantKey]; // constantActualValue is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantActualValueIs + JSON.stringify(constantActualValue));

        if (inputData === constantActualValue.Actual) {
          returnData = true;
          break loop1;
        }
      } // for-loop j-th iterator.

    } // for-loop i-th iterator.

  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getConstantType
 * @description Determines what constant library a particular constant is defined in.
 * (This will aid developers who are trying to understand & develop under this complicated constants system.)
 * NOTE: Just because a constant is found we do not break the loop,
 * but this function will report back all constants libraries where a particular constant would be defined.
 * Passing in a True to the inputMetaData will cause the function to exit upon first discovered match.
 * @param {string} inputData The string value that should be searched in all of the constants libraries.
 * @param {boolean} inputMetaData True or False to indicate if the function should exit on first discovery or continue to discover all possible matches.
 * @return {string} A list of constants libraries where the constant was found to be defined in.
 * @author Seth Hollingsead
 * @date 2021/01/25
 */


exports.doesConstantExist = doesConstantExist;

var getConstantType = function getConstantType(inputData, inputMetaData) {
  var functionName = s.cgetConstantType;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var constantsTypesKeys = Object.keys(D[s.cConstantsValidationData]); // constantsTypesKeys is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));

    loop1: for (var i = 0; i < constantsTypesKeys.length; i++) {
      var constantTypeKey = constantsTypesKeys[i]; // constantTypeKey is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));

      var constantTypeValues = D[s.cConstantsValidationData][constantTypeKey]; // constantTypeValues is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));

      var constantsKeys = Object.keys(constantTypeValues); // constantsKeys is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantsKeysIs + JSON.stringify(constantsKeys));

      loop2: for (var j = 0; j < constantsKeys.length; j++) {
        var constantKey = constantsKeys[j]; // constantKey is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantKeyIs + JSON.stringify(constantKey));

        var constantActualValue = constantTypeValues[constantKey]; // constantActualValue is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantActualValueIs + JSON.stringify(constantActualValue));

        if (inputData === constantActualValue.Actual) {
          if (returnData === '') {
            returnData = constantTypeKey; // NOTE: This is our first discovered match. Check the inputMetaData to see if we should exit or continue searching?

            if (inputMetaData === true) {
              // We are doing it this way so we can re-use this function as part of the optimized constants fulfillment system algorithm.
              break loop1;
            }
          } else {
            returnData = returnData + b.cComa + constantTypeKey;
          }
        }
      } // for-loop j-th iterator.

    } // for-loop i-th iterator.

  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getConstantActualValue
 * @description Determines the actual value of the named constant given the constant type.
 * @param {string} inputData The name of the constant we are looking for to get the actual value of the constant.
 * @param {string} inputMetaData (OPTIONAL) The type or library where the constant should be found.
 * @return {string} The actual value of the string.
 * @author Seth Hollingsead
 * @date 2021/01/26
 */


exports.getConstantType = getConstantType;

var getConstantActualValue = function getConstantActualValue(inputData, inputMetaData) {
  var functionName = s.cgetConstantActualValue;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    if (isConstantTypeValid(inputMetaData, '') === true) {
      var constantTypeValues1 = D[s.cConstantsValidationData][inputMetaData]; // 1 constantTypeValues is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, n.c1 + b.cSpace + s.cconstantTypeValuesIs + JSON.stringify(constantTypeValues1));

      var constantsKeys1 = Object.keys(constantTypeValues1); // 1 constantsKeys is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, n.c1 + b.cSpace + s.cconstantsKeysIs + JSON.stringify(constantsKeys1));

      loop1: for (var i = 0; i < constantsKeys1.length; i++) {
        var constantKey1 = constantsKeys1[i]; // 1 constantKey is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, n.c1 + b.cSpace + s.cconstantKeyIs + JSON.stringify(constantKey1));

        var constantActualValue1 = constantTypeValues1[constantKey1]; // 1 constantActualValue is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, n.c1 + b.cSpace + s.cconstantActualValueIs + JSON.stringify(constantActualValue1));

        if (inputData === constantActualValue1.Name) {
          returnData = constantActualValue1.Actual;
        }
      } // for-loop j-th iterator.

    } else {
      var constantsTypesKeys = Object.keys(D[s.cConstantsValidationData]); // constantsTypesKeys is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));

      loop2: for (var j = 0; j < constantsTypesKeys.length; j++) {
        var constantTypeKey = constantsTypesKeys[j]; // constantTypeKey is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));

        var constantTypeValues2 = D[s.cConstantsValidationData][constantTypeKey]; // 2 constantTypeValues is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, n.c2 + b.cSpace + s.cconstantTypeValuesIs + JSON.stringify(constantTypeValues2));

        var constantsKeys2 = Object.keys(constantTypeValues2); // 2 constantsKeys is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, n.c2 + b.cSpace + s.cconstantsKeysIs + JSON.stringify(constantsKeys2));

        loop3: for (var k = 0; k < constantsKeys2.length; k++) {
          var constantKey2 = constantsKeys2[k]; // 2 constantKey is:

          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, n.c2 + b.cSpace + s.cconstantKeyIs + JSON.stringify(constantKey2));

          var _constantActualValue = constantTypeValues2[constantKey2]; // 1 constantActualValue is:

          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, n.c1 + b.cSpace + s.cconstantActualValueIs + JSON.stringify(_constantActualValue));

          if (inputData === _constantActualValue.Name) {
            returnData = _constantActualValue.Actual;
          }
        } // for-loop j-th iterator.

      } // for-loop i-th iterator.

    } // else clause for the case that inputMetaData did not match a valid constant type in the system.

  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getConstantName
 * @description Gets the constant name given the constant value, or what the constant should resolve as. Can only return the first instance.
 * @param {string} inputData The constant string value that should be used when getting the constant name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the constant: eg: cSystem
 * @author Seth Hollingsead
 * @date 2021/01/26
 */


exports.getConstantActualValue = getConstantActualValue;

var getConstantName = function getConstantName(inputData, inputMetaData) {
  var functionName = s.cgetConstantName;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var constantsTypesKeys = Object.keys(D[s.cConstantsValidationData]); // constantsTypesKeys is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantsTypesKeysIs + JSON.stringify(constantsTypesKeys));

    loop1: for (var i = 0; i < constantsTypesKeys.length; i++) {
      var constantTypeKey = constantsTypesKeys[i]; // constantTypeKey is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantTypeKeyIs + JSON.stringify(constantTypeKey));

      var constantTypeValues = D[s.cConstantsValidationData][constantTypeKey]; // constantTypeValues is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantTypeValuesIs + JSON.stringify(constantTypeValues));

      var constantsKeys = Object.keys(constantTypeValues); // constantsKeys is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantsKeysIs + JSON.stringify(constantsKeys));

      loop2: for (var j = 0; j < constantsKeys.length; j++) {
        var constantKey = constantsKeys[j]; // constantKey is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantKeyIs + JSON.stringify(constantKey));

        var constantActualValue = constantTypeValues[constantKey]; // constantActualValue is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantActualValueIs + JSON.stringify(constantActualValue));

        if (inputData === constantActualValue.Actual) {
          returnData = constantActualValue.Name;
          break loop1;
        }
      } // for-loop j-th iterator.

    } // for-loop i-th iterator.

  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function findConstantName
 * @description Looks through a string and tries to weed out a constant name.
 * @param {string} inputData The string that should be searched for a constant name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the constant that was found.
 * @author Seth Hollingsead
 * @date 2021/01/26
 */


exports.getConstantName = getConstantName;

var findConstantName = function findConstantName(inputData, inputMetaData) {
  var functionName = s.cfindConstantName;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    if (inputData.includes(b.cDot)) {
      returnData = inputData.substr(inputData.lastIndexOf(b.cDot) + 1, inputData.length);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isConstantTypeValid
 * @description Determines if a string is a valid constant type/library or not.
 * @param {string} inputData The string that should be validated if it is a valid constant type or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string is a valid constant type/library that exists within the system.
 * @author Seth Hollingsead
 * @date 2021/01/26
 */


exports.findConstantName = findConstantName;

var isConstantTypeValid = function isConstantTypeValid(inputData, inputMetaData) {
  var functionName = s.cisConstantTypeValid;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    switch (inputData) {
      case s.cBasicConstantsValidation:
      case s.cColorConstantsValidation:
      case s.cElementConstantsValidation:
      case s.cGenericConstantsValidation:
      case s.cIsotopeConstantsValidation:
      case s.cNumericConstantsValidation:
      case s.cPhonicsConstantsValidation:
      case s.cShapeConstantsValidation:
      case s.cSystemConstantsValidation:
      case s.cUnitsConstantsValidation:
      case s.cWordConstantsValidation:
        returnData = true;
        break;

      default:
        returnData = false;
        break;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function convertConstantTypeToConstantPrefix
 * @description Converts the constant type to a constant prefix so it can be used to assist with defining an optimized constant definition.
 * @param {string} inputData The constant type that should be used when converting to a constant prefix.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The appropriate constant prefix.
 * @author Seth Hollingsead
 * @date 2021/01/26
 */


exports.isConstantTypeValid = isConstantTypeValid;

var convertConstantTypeToConstantPrefix = function convertConstantTypeToConstantPrefix(inputData, inputMetaData) {
  var functionName = s.cconvertConstantTypeToConstantPrefix;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    returnData = inputData;

    switch (inputData) {
      case s.cBasicConstantsValidation:
        returnData = b.cb + b.cDot;
        break;

      case s.cColorConstantsValidation:
        returnData = p.cclr + b.cDot;
        break;

      case s.cElementConstantsValidation:
        returnData = b.ce + b.cDot;
        break;

      case s.cGenericConstantsValidation:
        returnData = b.cg + b.cDot;
        break;

      case s.cIsotopeConstantsValidation:
        returnData = b.ci + b.cDot;
        break;

      case s.cNumericConstantsValidation:
        returnData = b.cn + b.cDot;
        break;

      case s.cPhonicsConstantsValidation:
        returnData = b.cp + b.cDot;
        break;

      case s.cShapeConstantsValidation:
        returnData = p.cshp + b.cDot;
        break;

      case s.cSystemConstantsValidation:
        returnData = b.cs + b.cDot;
        break;

      case s.cUnitsConstantsValidation:
        returnData = b.cu + b.cDot;
        break;

      case s.cWordConstantsValidation:
        returnData = b.cw + b.cDot;
        break;

      default:
        returnData = false;
        break;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function constantsOptimizedFulfillmentSystem
 * @description Determines what is the most optimized way to define a string using existing constant strings.
 * @param {string} inputData The string that should be determined or find a constant to fulfill part of the string.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A constant that represents part of the input string.
 * @author Seth Hollingsead
 * @date 2021/01/26
 */


exports.convertConstantTypeToConstantPrefix = convertConstantTypeToConstantPrefix;

var constantsOptimizedFulfillmentSystem = function constantsOptimizedFulfillmentSystem(inputData, inputMetaData) {
  var functionName = s.cconstantsOptimizedFulfillmentSystem;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var constantType = '';
  var constantName = '';

  if (inputData) {
    if (doesConstantExist(inputData, '') === false) {
      returnData = constantsOptimizedFulfillmentSystem(inputData.substring(0, inputData.length - 1), inputMetaData);
    } else {
      constantType = getConstantType(inputData, true);
      constantName = getConstantName(inputData, '');
      var constantPrefix = convertConstantTypeToConstantPrefix(constantType, '');
      returnData = constantPrefix + constantName;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function constantsFulfillmentSystem
 * @description Determines what is the most optimized way to define a new constant using existing constant strings.
 * @param {string} inputData The constant to be defined/fulfilled.
 * @param {string} inputMetaData The original user-defined constant to be fulfilled,
 * so the recursive algorithm can continue processing the rest of the string, after a first match is found.
 * @return {string} The fully optimized definition for the new constant.
 * @author Seth Hollingsead
 * @date 2021/01/25
 */


exports.constantsOptimizedFulfillmentSystem = constantsOptimizedFulfillmentSystem;

var constantsFulfillmentSystem = function constantsFulfillmentSystem(inputData, inputMetaData) {
  var functionName = s.cconstantsFulfillmentSystem;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var constantName = '';
  var constantType = '';

  if (inputData) {
    returnData = constantsOptimizedFulfillmentSystem(inputData, ''); // We found the first part of the string, now lets continue processing the rest of the string!
    // First determine how many characters are being returned so we can determine what portion of the string we need to continue processing with.

    constantName = findConstantName(returnData, ''); // constantName is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantNameIs + constantName);

    var constantValue = getConstantActualValue(constantName, ''); // constantValue is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cconstantValueIs + constantValue);

    var deltaLength = inputData.length - constantValue.length; // deltaLength is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cdeltaLengthIs + deltaLength);

    if (deltaLength != 0) {
      var recursiveSubString = inputMetaData.substring(inputMetaData.length - deltaLength, inputMetaData.length); // recursiveSubString is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.crecursiveSubStringIs + recursiveSubString);

      returnData = returnData + b.cSpace + b.cPlus + b.cSpace + constantsFulfillmentSystem(recursiveSubString, inputData);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function searchForPatternsInStringArray
 * @description Walks through sub-strings of each string in the input array of strings searching for common patterns using a brute-force sequential array search.
 * Maximum string length to search is the maximum string length - 1 (basically the longest string in the array minus 1 character).
 * Minimum string length to search is 3 characters.
 * @param {array<string>} inputData The array of strings that should be searched for matching patterns.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array<string>} A string array of common string values found in more than 1 element of the array and 3 or more characters long.
 * @author Seth Hollingsead
 * @date 2021/01/30
 */


exports.constantsFulfillmentSystem = constantsFulfillmentSystem;

var searchForPatternsInStringArray = function searchForPatternsInStringArray(inputData, inputMetaData) {
  var functionName = s.csearchForPatternsInStringArray;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false; // Set it to false just in case invalid data was passed into this function.

  if (inputData && inputData.length > 0) {
    returnData = []; // Reset it to an empty array, the input data has something in it so we should be able to process it.

    var maxStringLength = getLengthOfLongestStringInArray(inputData, '') - 1; // maxStringLength is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cmaxStringLengthIs + maxStringLength);

    var minStringLength = 3; // minStringLength is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cminStringLengthIs + minStringLength);

    for (var a = 0; a < inputData.length; a++) {
      // Initial high-level loop over each of the array elements. (This is the source string for the comparison)
      var currentMasterStringArrayElement = inputData[a]; // currentMasterStringArrayElement is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccurrentMasterStringArrayElementIs + currentMasterStringArrayElement);

      if (currentMasterStringArrayElement.includes(b.cSpace) === false) {
        // currentMasterStringArrayElement does not contain a space character
        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cSearchForPatternsInStringArrayMessage1); // NOTE: All of the other loggers.consolelog below this are not actually getting called for some reason.
        // That is why I have added the hard-coded console Logs, but really they only need to be enabled if this function needs to be debugged.
        // It's difficult to debug these because they really dump a LOT of data to the output.
        // The only real way to debug larger data sets would be to force the output to a log file.
        // A small data-set might be possible to debug.
        // Loop over the length of the string we need to compare.


        for (var _b = minStringLength; _b <= maxStringLength; _b++) {
          // b will now hold the length of the string we are using to compare.
          // loggers.consoleLog(baseFileName + b.cDot + functionName, 'length of string to compare is: ' + toString(b));
          // console.log('length of string to compare is: ' + b);
          // First make sure that the length of our master string is less than or equal to the length of j, otherwise we will just skip to the next.
          if (currentMasterStringArrayElement.length <= _b) {
            // loggers.consoleLog(baseFileName + b.cDot + functionName, 'currentMasterStringArrayElement.length is less than b');
            // console.log('currentMasterStringArrayElement.length is less than b');
            // Loop again for the length of the current string - 3 (minStringLength)
            // Each loop will determine our currentComparisonString (which will be used when we actually iterate over the array in our search)
            for (var c = 0; c <= currentMasterStringArrayElement.length - minStringLength; c++) {
              // loop through each set of strings in the master comparison string.
              // loggers.consoleLog(baseFileName + b.cDot + functionName, 'c value is: ' + c);
              // console.log('c value is: ' + c);
              // Now here we should be able to finally compute the beginning and ending of the indexes for the string we want to use for comparison.
              var beginningIndex = c; // loggers.consoleLog(baseFileName + b.cDot + functionName, 'beginningIndex is: ' + beginningIndex);
              // console.log('beginningIndex is: ' + beginningIndex);

              var endingIndex = c + _b; // loggers.consoleLog(baseFileName + b.cDot + functionName, 'endingIndex is: ' + endingIndex);
              // console.log('endingIndex is: ' + endingIndex);

              var stringToCompare = currentMasterStringArrayElement.substring(beginningIndex, endingIndex); // loggers.consoleLog(baseFileName + b.cDot + functionName, 'stringToCompare is: ' + stringToCompare);
              // console.log('stringToCompare is: ' + stringToCompare);
              // Now we need another loop to go over all of the array elements, make sure we always ignore the current array element.

              for (var d = 0; d < inputData.length; d++) {
                // loggers.consoleLog(baseFileName + b.cDot + functionName, 'd value is: ' + d);
                // console.log('d value is: ' + d);
                if (d != a) {
                  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'd != a');
                  // console.log('d != a');
                  var otherStringToCompare = inputData[d]; // loggers.consoleLog(baseFileName + b.cDot + functionName, 'otherStringToCompare is: ' + otherStringToCompare);
                  // console.log('otherStringToCompare is: ' + otherStringToCompare);

                  if (otherStringToCompare.includes(stringToCompare)) {
                    // loggers.consoleLog(baseFileName + b.cDot + functionName, 'FOUND A MATCH!!!!');
                    // console.log('FOUND A MATCH!!!! ' + stringToCompare);
                    // Here we have found a match amoung brothers. We need to see if this stringToCompare has already been added to the returnData array.
                    if (doesArrayContainValue(returnData, stringToCompare, ascertainMatchingElements) === false) {
                      returnData.push(stringToCompare);
                    } // End-if if (doesArrayContainValue(returnData, stringToCompare, ascertainMatchingElements) === false)

                  } // End-if (otherStringToCompare.includes(stringToCompare))

                } // End-if (d != a)

              } // End-for (let d = 0; d < inputData.length; d++)

            } // End-for (let c = 0; c <= currentMasterStringArrayElement.length - minStringLength; c++)

          } // End-if (currentMasterStringArrayElement <= b)

        } // End-for (let b = minStringLength; b <= maxStringLength; b++) {

      } else {
        // Else-clause if (currentMasterStringArrayElement.includes(b.cSpace) === false)
        // WARNING: The current string being searched contains a space character, we are going to skip comparison.
        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cSearchForPatternsInStringArrayMessage2 + s.cSearchForPatternsInStringArrayMessage3);
      }
    } // End-for (let a = 0; a < inputData.length; a++)

  } else {
    // Else-clause if (inputData && inputData.length > 0)
    // WARNING: InputData was not an array or had an empty array.
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cSearchForPatternsInStringArrayMessage4);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function validatePatternsThatNeedImplementation
 * @description Scans through an array of strings and determines which ones are not yet implemented in the constants system.
 * @param {array<string>} inputData The array of strings that should be checked if they are already implemented in the constants system or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/01/31
 */


exports.searchForPatternsInStringArray = searchForPatternsInStringArray;

var validatePatternsThatNeedImplementation = function validatePatternsThatNeedImplementation(inputData, inputMetaData) {
  var functionName = s.cvalidatePatternsThatNeedImplementation;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var passMessage = '';
    var j = 0; // We will use this as an iterator to count the number of times we add a string to the returnData coma-seperated list.

    for (var i = 0; i < inputData.length; i++) {
      var currentString = inputData[i];

      if (doesConstantExist(currentString, '') === false) {
        // Constant does NOT exist:
        passMessage = s.cConstantDoesNotExist + currentString;
        passMessage = chalk.rgb(0, 0, 0)(passMessage);
        passMessage = chalk.bgRgb(0, 255, 0)(passMessage);
        console.log(passMessage); // constant does NOT exist:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cConstantDoesNotExist + currentString); // Make sure we add all the strings that do not exist to a coma-seperated list,
        // so we can enqueue it to the constantsGeneratorList command and generate actual new constants lines of code.


        if (j === 0) {
          returnData = currentString;
        } else {
          returnData = returnData + b.cComa + currentString;
        }

        j++;
      } else {
        // Constant does exist:
        passMessage = s.cConstantDoesExist + currentString;
        passMessage = chalk.rgb(0, 0, 0)(passMessage);
        passMessage = chalk.bgRgb(255, 0, 0)(passMessage);
        console.log(passMessage); // constant does exist:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cConstantDoesExist + currentString);
      }
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function validateConstantsDataValues
 * @description Iterates over all the constants values in the constants validation data specified by the input parameter and validates the content.
 * @param {string} inputData The name of the data-hive that should contain all of the validation data that should be used to execute the validation procedures.
 * @param {string} inputMetaData Not used for this function.
 * @return {boolean} True or False to indicate if the validation passed for the entire data hive or if it did not pass.
 * @author Seth Hollingsead
 * @date 2020/07/29
 */


exports.validatePatternsThatNeedImplementation = validatePatternsThatNeedImplementation;

var validateConstantsDataValues = function validateConstantsDataValues(inputData, inputMetaData) {
  var functionName = s.cvalidateConstantsDataValues;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = true;
  var passMessage = '';

  if (inputData) {
    for (var i = 0; i < D[s.cConstantsValidationData][inputData].length; i++) {
      passMessage = '';
      var validationLineItem = D[s.cConstantsValidationData][inputData][i];

      if (validationLineItem) {
        if (validationLineItem.Actual === validationLineItem.Expected) {
          if (_configurator["default"].getConfigurationSetting(s.cDisplayIndividualConstantsValidationPassMessages) === true) {
            // `PASS -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- PASS`;
            passMessage = w.cPASS + b.cSpace + b.cDoubleDash + b.cSpace + inputData + b.cSpace + w.cActual + b.cColon + b.cSpace + validationLineItem.Actual + b.cComa + b.cSpace + w.cExpected + b.cColon + b.cSpace + validationLineItem.Expected + b.cbSpace + b.cDoubleDash + b.cSpace + w.cPASS;
            passMessage = chalk.rgb(0, 0, 0)(passMessage);
            passMessage = chalk.bgRgb(0, 255, 0)(passMessage);
            console.log(passMessage);
          }
        } else {
          returnData = false;

          if (_configurator["default"].getConfigurationSetting(s.cDisplayIndividualConstantsValidationFailMessages) === true) {
            // `FAIL -- ${inputData} Actual: ${validationLineItem.Actual}, Expected: ${validationLineItem.Expected} -- FAIL`;
            passMessage = w.cFAIL + b.cSpace + b.cDoubleDash + b.cSpace + inputData + b.cSpace + w.cActual + b.cColon + b.cSpace + validationLineItem.Actual + b.cComa + b.cSpace + w.cExpected + b.cColon + b.cSpace + validationLineItem.Expected + b.cSpace + b.cDoubleDash + b.cSpace + w.cFAIL;
            passMessage = chalk.rgb(0, 0, 0)(passMessage);
            passMessage = chalk.bgRgb(255, 0, 0)(passMessage);
            console.log(passMessage);
          }
        }
      } else {
        // `FAIL -- ${inputData} -- FAIL`
        passMessage = w.cFAIL + b.cSpace + b.cDoubleDash + b.cSpace + inputData + b.cSpace + b.cDoubleDash + b.cSpace + w.cFAIL;
        passMessage = chalk.rgb(0, 0, 0)(passMessage);
        passMessage = chalk.bgRgb(255, 0, 0)(passMessage);
        console.log(passMessage);
      }
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isValidCommandNameString
 * @description Determines if the command name is a valid command name or not.
 * @NOTE Not in the sense that it is checking if the command name exists in the system or not,
 * but is it formatted properly enough to be considered as a command name.
 * @param {string} inputData The string that should be evaluated if it is sufficently formatted such that it could qualify as a command name.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the string is sufficently formatted to be considered as a command name in the system.
 * @author Seth Hollingsead
 * @date 2021/01/22
 */


exports.validateConstantsDataValues = validateConstantsDataValues;

var isValidCommandNameString = function isValidCommandNameString(inputData, inputMetaData) {
  var functionName = s.cisValidCommandNameString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData = false;

  if (inputData) {
    // NOTE: The below call to convert the string to a camel-case array doesn't garantee that the string is actually camel-case.
    // It could actually be a single word, but of course we want to make sure it's more than 3 characters long.
    // Less than that, shouldn't really be considered a valid word, but could be appropriate as a command alias/abreviation.
    if (inputData.length > 3) {
      var camelCaseArray = convertCamelCaseStringToArray(inputData);

      if (camelCaseArray.length === 1) {
        if (isFirstCharacterLowerCase(inputData) === true) {
          returnData = true;
        }
      } else if (camelCaseArray.length > 1) {
        if (isStringCamelCase(inputData, '') === true) {
          returnData = true;
        }
      }
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isConstantValid
 * @description Determines if the user entered some valid input constant string or not. User must have entered more than 4 characters.
 * @param {string} inputData The value of the constant as a string.
 * @param {string} inputMetaData Not used for this buisness rule.
 * @return {boolean} True or False to indicate if the user entered a valid constant or not.
 * @author Seth Hollingsead
 * @date 2021/01/25
 */


exports.isValidCommandNameString = isValidCommandNameString;

var isConstantValid = function isConstantValid(inputData, inputMetaData) {
  var functionName = s.cisConstantValid;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData = false;

  if (inputData) {
    if (inputData.length >= 4) {
      returnData = true;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function countDuplicateCommandAliases
 * @description Counts the number of command aliases that match the input command alias.
 * @param {string} inputData The command alias that should be have duplicates counted.
 * @param {object} inputMetaData The data that contains all of the commands and command aliases,
 * we should use this to search for duplicate command aliases.
 * @return {integer} The count of command aliases that match the input command alias.
 * @author Seth Hollingsead
 * @date 2021/01/11
 */


exports.isConstantValid = isConstantValid;

var countDuplicateCommandAliases = function countDuplicateCommandAliases(inputData, inputMetaData) {
  var functionName = s.ccountDuplicateCommandAliases;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData = 0;

  if (inputData && inputMetaData) {
    loop1: for (var i = 0; i < inputMetaData.length; i++) {
      // BEGIN i-th loop:
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_ithLoop + i);

      var currentCommand = inputMetaData[i]; // currentCommand is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccurrentCommandIs + JSON.stringify(currentCommand));

      var aliasList = currentCommand[w.cAliases]; // aliasList is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.caliasListIs + aliasList);

      var arrayOfAliases = aliasList.split(b.cComa);

      loop2: for (var j = 0; j < arrayOfAliases.length; j++) {
        // BEGIN j-th loop:
        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_jthLoop + i);

        var currentAlias = arrayOfAliases[j]; // currentAlias is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccurrentAliasIs + currentAlias);

        if (currentAlias === inputData) {
          returnData = returnData + 1;
        } // duplicateAliasCount is:


        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cduplicateAliasCountIs + returnData); // END j-th loop:


        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_jthLoop + i);
      } // END i-th loop:


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_ithLoop + i);
    }
  }

  if (returnData > 1) {
    // duplicateAliasCount is:
    var duplicateAliasCountMessage = s.cduplicateAliasCountIs + returnData;
    duplicateAliasCountMessage = chalk.rgb(0, 0, 0)(duplicateAliasCountMessage);
    duplicateAliasCountMessage = chalk.bgRgb(255, 0, 0)(duplicateAliasCountMessage);
    console.log(duplicateAliasCountMessage); // duplicate command alias is:

    var duplicateAliasCommandMessage = s.cduplicateCommandAliasIs + inputData;
    duplicateAliasCommandMessage = chalk.rgb(0, 0, 0)(duplicateAliasCommandMessage);
    duplicateAliasCommandMessage = chalk.bgRgb(255, 0, 0)(duplicateAliasCommandMessage);
    console.log(duplicateAliasCommandMessage);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function generateCommandAliases
 * @description Generates all possible combinations of command aliases given a set of command words and command word abreviations.
 * @param {object} inputData An object containing all of the meta-data needed for command words and
 * command abreviations needed to generate every possible combination of command alias.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A coma-separated list of every possible combination of command aliases.
 * @author Seth Hollingsead
 * @date 2021/01/19
 */


exports.countDuplicateCommandAliases = countDuplicateCommandAliases;

var generateCommandAliases = function generateCommandAliases(inputData, inputMetaData) {
  var functionName = s.cgenerateCommandAliases;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    // {"wonder":"wondr,wundr,wndr","Woman":"wman,wmn,womn","Amazing":"amzing,amzng"}
    //
    // {
    // "wonder": "wondr,wundr,wndr",
    // "Woman": "wman,wmn,womn",
    // "Amazing": "amzing,amzng"
    // }
    var primaryCommandDelimiter = _configurator["default"].getConfigurationSetting(s.cPrimaryCommandDelimiter);

    var secondaryCommandDelimiter = _configurator["default"].getConfigurationSetting(s.cSecondaryCommandDelimiter);

    var tertiaryCommandDelimiter = _configurator["default"].getConfigurationSetting(s.cTertiaryCommandDelimiter);

    var commandDelimiter = '';
    var commandWordsKeys1 = Object.keys(inputData);
    var commandWordAliasesArray = [];
    var masterCommandWordAliasesArray = [commandWordsKeys1.length - 1];
    var masterArrayIndex = [commandWordsKeys1.length - 1];

    for (var i = 0; i < commandWordsKeys1.length; i++) {
      // commandWordsKeys1.forEach((key1) => {
      var key1 = commandWordsKeys1[i];
      var commandWordAliases = inputData[key1];

      if (commandWordAliases.includes(primaryCommandDelimiter)) {
        commandDelimiter = primaryCommandDelimiter;
      } else if (commandWordAliases.includes(secondaryCommandDelimiter)) {
        commandDelimiter = secondaryCommandDelimiter;
      } else if (commandWordAliases.includes(tertiaryCommandDelimiter)) {
        commandDelimiter = tertiaryCommandDelimiter;
      }

      commandWordAliases = commandWordAliases + commandDelimiter + key1; // commandWordAliases BEFORE CHANGE is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccommandWordAliasesBeforeChangeIs + commandWordAliases);

      commandWordAliasesArray = commandWordAliases.split(commandDelimiter);
      masterArrayIndex[i] = commandWordAliasesArray.length - 1;

      for (var j = 0; j < commandWordAliasesArray.length; j++) {
        var commandAliasWord = commandWordAliasesArray[j];

        if (isFirstCharacterLowerCase(commandAliasWord, '') === true) {
          var firstLetterOfCommandAliasWord = commandAliasWord.charAt(0).toUpperCase();
          commandAliasWord = replaceCharacterAtIndexOfString(commandAliasWord, 0, firstLetterOfCommandAliasWord);
          commandWordAliasesArray[j] = commandAliasWord; // Saved the changes back to array.
        }
      } // commandWordAliasesArray AFTER CHANGE is:


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccommandWordAliasesAfterChangeIs + JSON.stringify(commandWordAliasesArray));

      masterCommandWordAliasesArray[i] = commandWordAliasesArray; // Try to build an array of arrays (2D)
    } // masterCommandWordAliasesArray is:


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cmasterCommandWordAlisesArrayIs + JSON.stringify(masterCommandWordAliasesArray)); // masterArrayIndex is:


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cmasterArrayIndexIs + JSON.stringify(masterArrayIndex)); // NOTES: Console output is:
    // masterCommandWordAliasesArray is: [["Wondr","Wundr","Wndr","Wonder"],["Wman","Wmn","Womn","Woman"],["Amzing","Amzng","Amazing"]]
    // masterArrayIndex is: [4,4,3]
    //
    // We should be able to have 2 nested for-loops, and we will delcare a counter array initialized to [0,0,0] to match the masterArrayIndex above.
    // The counter array tells us which combination of words we should get.
    // We can simply push those combination of words as a string on a stack we will make for this business rule.
    // Then iterate the last array element as long as it's not greater than the number in the master array index and do the same things over again.
    // When the array index for the last element in the array reaches the masterArrayIndex for the same array index then we increment the second from the last array counter.
    // And start over again with the last element in the array counter.
    // This way we should be able to iterate over the entire 2D array and get every combination without having to create x number of nested for-loops.
    // Essentially we will be having 2-nested for-loops looping over the counter array. The top level loop will be looping over masterArrayIndex.length,
    // and the second loop will be iterating over the integers in the counter array.
    // The counter array will tell the algorthim which combination of words to put together and push on the stack.
    //
    // NOTE: The algorthim described above is called: Lehmer code
    // https://en.wikipedia.org/wiki/Lehmer_code


    var _returnData2 = solveLehmerCode(masterArrayIndex, masterCommandWordAliasesArray); // Command Aliases are:


    console.log(s.cCommandAliasesAre + _returnData2);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function solveLehmerCode
 * @description Used the inputData as an addressable Lehmer Code to find all possible combinations of array elements.
 * @param {array<integer>} inputData The Lehmer code addressable index array we will use to permutate over all possible combinations.
 * @param {array<array<string>>} inputMetaData The nested array that contains all instances of strings that should be used when generating permutations.
 * @return {string} The delimited list of possible combinations generated by solving the Lehmer Code.
 * @author Seth Hollingsead
 * @date 2021/01/20
 * @NOTE: https://en.wikipedia.org/wiki/Lehmer_code
 */


exports.generateCommandAliases = generateCommandAliases;

var solveLehmerCode = function solveLehmerCode(inputData, inputMetaData) {
  var functionName = s.csolveLehmerCode;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData;

  if (inputData) {
    returnData = ''; // [["Wondr","Wundr","Wndr","Wonder"],["Wman","Wmn","Womn","Woman"],["Amzing","Amzng","Amazing"]]
    // [3,3,2]
    //
    // {
    // "wonder": "wondr,wundr,wndr",
    // "Woman": "wman,wmn,womn",
    // "Amazing": "amzing,amzng"
    // }

    var lengthOfInputData = inputData.length;
    var expandedLehmerCodeArray = [];
    var tempArray = [];
    var lehmerCodeArray = Array.from(Array(lengthOfInputData), function () {
      return 0;
    });
    expandedLehmerCodeArray = arrayDeepClone(recursiveArrayExpansion([0, lehmerCodeArray], inputData)); // expandedLehmerCodeArray is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cexpandedLehmerCodeArrayIs + JSON.stringify(expandedLehmerCodeArray)); // Now we just iterate over each array in expandedLehmerCodeArray and call: getLehmerCodeValue


    for (var i = 0; i < expandedLehmerCodeArray.length - 1; i++) {
      var lehmerCodeStringValue = getLehmerCodeValue(expandedLehmerCodeArray[i], inputMetaData);

      if (i === 0) {
        returnData = returnData + lehmerCodeStringValue;
      } else {
        returnData = returnData + b.cComa + lehmerCodeStringValue;
      }
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function recursiveArrayExpansion
 * @description Recursively expands all possible combinations of an input array given an index of expansion and returns the list of arrays.
 * @param {array<integer,array<integer>>} inputData The index of expansion and the array to be expanded as an array object.
 * @param {array<integer>} inputMetaData The Lehmer Codex that should be used to set the limit of expansion based on the index of expansion.
 * @return {array<array<integer>>} The final list of arrays after the array expansion has completed successfully.
 * @author Seth Hollingsead
 * @date 2021/01/21
 */


exports.solveLehmerCode = solveLehmerCode;

var recursiveArrayExpansion = function recursiveArrayExpansion(inputData, inputMetaData) {
  var functionName = s.crecursiveArrayExpansion;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData = [];

  if (inputData && inputMetaData && isArray(inputData) === true && isArray(inputMetaData) === true && inputData.length > 0 && inputMetaData.length > 0) {
    // Setup & parse the inputData & inputMetaData into a format we can use to actually do recursive array expansion.
    var indexOfExpansion = inputData[0];
    var arrayToBeExpanded = inputData[1];
    var limitOfExpansion = inputMetaData[indexOfExpansion]; // indexOfExpansion is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cindexOfExpansionIs + indexOfExpansion); // arrayToBeExpanded is:


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.carrayToBeExpandedIs + JSON.stringify(arrayToBeExpanded)); // limitOfExpansion is:


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.climitOfExpansionIs + limitOfExpansion);

    var masterTempReturnData = []; // When we are all done we will set the returnData back to the list of arrays in this array.
    // [["Wondr","Wundr","Wndr","Wonder"],["Wman","Wmn","Womn","Woman"],["Amzing","Amzng","Amazing"]]
    // [3,3,2]
    //
    // {
    // "wonder": "wondr,wundr,wndr",
    // "Woman": "wman,wmn,womn",
    // "Amazing": "amzing,amzng"
    // }
    // First level array expansion.

    for (var i = 0; i <= limitOfExpansion; i++) {
      var lehmerCodeArray1 = arrayDeepClone(arrayToBeExpanded, ''); // returnData is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));

      lehmerCodeArray1[indexOfExpansion] = i;

      if (doesArrayContainValue(returnData, lehmerCodeArray1, ascertainMatchingElements) === false) {
        // pushing lehmerCodeArray1 to returnData value:
        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cpushingLehmerCodeArray1ToReturnDataValue + JSON.stringify(lehmerCodeArray1));

        returnData.push(lehmerCodeArray1); // returnData after push is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataAfterPushIs + JSON.stringify(returnData));
      }
    } // returnData after Level 1 is:


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataAfterLevel1Is + JSON.stringify(returnData)); // Second level array expansion, this is where we call recursively.
    // We need to determine if the index of expansion is equal to the length of the arrayToBeExpanded.
    // If it is then we have reached our recursive expansion limit.
    // If NOT then we need to recursively expand some more on each of the arrays that are now in the returnData array.
    // arrayToBeExpanded.length is:


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.carrayToBeExpandedDotLengthIs + arrayToBeExpanded.length);

    if (indexOfExpansion < arrayToBeExpanded.length - 1) {
      // We need to remove arrays from the returnData and recursively call the recursiveArrayExpansion with each array we remove.
      // The data we get back from each recursive call should be pushed back to masterTempReturnData array
      // returnData.length is:
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataDotLengthIs + returnData.length); // Make sure we clone the array we will be removing array elements from,
      // because otherwise we would be looping over the same array we are removing elements from,
      // which would mean that we would never visit all of the elemtns.
      // https://stackoverflow.com/questions/54081930/why-array-foreach-array-pop-would-not-empty-the-array


      var returnDataTemp = arrayDeepClone(returnData, '');
      returnDataTemp.forEach(function (item) {
        // returnData BEFORE POP is:
        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataBeforePopIs + JSON.stringify(returnData));

        var lehmerCodeArray2 = arrayDeepClone(returnData.pop(), ''); // returnData AFTER POP is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataAfterPopIs + JSON.stringify(returnData)); // masterTempReturnData BEFORE recursive call is:


        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cmasterTempReturnDataBeforeRecursiveCallIs + JSON.stringify(masterTempReturnData));

        var tempReturnData1 = arrayDeepClone(recursiveArrayExpansion([indexOfExpansion + 1, lehmerCodeArray2], inputMetaData), ''); // tempReturnData1 is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ctempReturnData1Is + JSON.stringify(tempReturnData1)); // tempReturnData1.length is:


        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ctempReturnData1DotLengthIs + tempReturnData1.length);

        for (var k = 0; k <= tempReturnData1.length - 1; k++) {
          // BEGIN k-th iteration:
          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_kthIteration + k);

          if (doesArrayContainValue(masterTempReturnData, tempReturnData1[k], ascertainMatchingElements) === false) {
            // pushing tempReturnData1[k] value:
            _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cpushingTempReturnData1Kvalue + JSON.stringify(tempReturnData1[k]));

            masterTempReturnData.push(arrayDeepClone(tempReturnData1[k], ''));
          } // END k-th iteration:


          _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_kthIteration + k);
        }

        tempReturnData1 = null; // masterTempReturnData AFTER recursive call is:

        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cmasterTempReturnDataAfterRecursiveCallIs + JSON.stringify(masterTempReturnData));
      });
      returnData = arrayDeepClone(masterTempReturnData, '');
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getLehmerCodeValue
 * @description Takes a Lehmer code array and an array of arrays and uses the Lehmer Code array to look up the corosponding values in the array of arrays.
 * @param {array<integer>} inputData The Lehmer code array with indices for values we should get & return.
 * @param {array<array<string>>} inputMetaData The nested array of arrays with the values we should get and combine then return as a single string.
 * @return {string} The joined string from each of the array element strings at the Lehmer code indices.
 * @author Seth Hollingsead
 * @date 2021/01/20
 */


exports.recursiveArrayExpansion = recursiveArrayExpansion;

var getLehmerCodeValue = function getLehmerCodeValue(inputData, inputMetaData) {
  var functionName = s.cgetLehmerCodeValue;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData = '';

  if (inputData) {
    var lengthOfInputData = inputData.length;
    returnData = '';

    for (var i = 0; i < lengthOfInputData; i++) {
      // BEGIN i-th iteration:
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_ithIteration + i);

      var lookupIndex = inputData[i]; // lookupIndex is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.clookupIndexIs + lookupIndex);

      var lookupValue = inputMetaData[i][lookupIndex]; // lookupValue is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.clookupValueIs + lookupValue);

      returnData = returnData + lookupValue;

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData); // END i-th iteration:


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_ithIteration + i);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function arraysAreEqual
 * @description Determines if a set of arrays are equal or not.
 * @param {array} inputData The first array that should be checked for equality.
 * @param {array} inputMetaData The second array that should be checked for equality.
 * @return {boolean} True or False to indicate if the arrays are equal or not equal.
 * @author Seth Hollingsead
 * @date 2021/01/20
 * @NOTE: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
 */


exports.getLehmerCodeValue = getLehmerCodeValue;

var arraysAreEqual = function arraysAreEqual(inputData, inputMetaData) {
  var functionName = s.carraysAreEqual;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData = false;

  if (inputData && inputMetaData) {
    if (inputData === inputMetaData) {
      returnData = true;
    }

    if (inputData === null || inputMetaData === null) {
      returnData === false;
    }

    if (inputData.length !== inputMetaData.length) {
      returnData === false;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}; // ******************************************************
// The following functions are more domain specific
// ******************************************************

/**
 * @function getDataCatagoryFromDataContextName
 * @description Gets the data catagory from the context name, E.g. Input: Page_ProjectList, data catagory is 'Page'.
 * @param {string} inputData The data context name, which should also contain the data catagory seperated by underscore.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The data catagory, such as Page or Test.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.arraysAreEqual = arraysAreEqual;

var getDataCatagoryFromDataContextName = function getDataCatagoryFromDataContextName(inputData, inputMetaData) {
  var functionName = s.cgetDataCatagoryFromDataContextName;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var dataCatagory = inputData.split(b.cUnderscore);
    returnData = dataCatagory[0]; // Data Catagory should be:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cDataCatagoryShouldBe + dataCatagory[0]);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getDataCatagoryDetailNameFromDataContextName
 * @description Gets the data catagory detail name from the context name, E.g. Input: Page_ProjectList, data catagory is 'ProjectList'.
 * @param {string} inputData The data context name, which should also contain the data catagory and data catagory detail name seperated by an underscore.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The data catagory detail name, such as ProjectDetails or ProjectList.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.getDataCatagoryFromDataContextName = getDataCatagoryFromDataContextName;

var getDataCatagoryDetailNameFromDataContextName = function getDataCatagoryDetailNameFromDataContextName(inputData, inputMetaData) {
  var functionName = s.cgetDataCatagoryDetailNameFromDataContextName;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var dataCatagoryDetailName = inputData.split(b.cUnderscore);
    returnData = dataCatagoryDetailName[1]; // Data Catagory Detail Name should be:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cDataCatagoryDetailNameShouldBe + dataCatagoryDetailName[1]);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getKeywordNameFromDataContextName
 * @description Gets the keyword name from the context name, E.g. Input: Keywords_ProjectDetails_DeleteEntireProject, keyword is: 'DeleteEntireProject'.
 * @param {string} inputData The data context name, which should also contain the data catagory and data catagory detail name and keyword name seperated by an underscore.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The keyword name, such as DeleteEntireProject or EditProjectInfoClick.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.getDataCatagoryDetailNameFromDataContextName = getDataCatagoryDetailNameFromDataContextName;

var getKeywordNameFromDataContextName = function getKeywordNameFromDataContextName(inputData, inputMetaData) {
  var functionName = s.cgetKeywordNameFromDataContextName;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var dataCatagoryKeywordName = inputData.split(b.cUnderscore);
    returnData = dataCatagoryKeywordName[2]; // Keyword Name should be:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cKeywordNameShouldBe + dataCatagoryKeywordName[2]);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function parseSystemRootPath
 * @description Parses the root path as returned by calling: path.resolve(__dirname);
 * This business rule looks for the "AppName" part of the path
 * and will parse that out to determine where on the hard drive this "AppName" folder is installed at.
 * @NOTE: The "AppName" is derived from the configuration setting called "ApplicationName"
 * which should have been set by the system when it was loaded.
 * @param {string} inputData The root path as defined by calling path.resolve(__dirname);
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string with the path up to the application folder,
 * where ever that is installed on the local system executing the tests.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */


exports.getKeywordNameFromDataContextName = getKeywordNameFromDataContextName;

var parseSystemRootPath = function parseSystemRootPath(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.parseSystemRootPath function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var functionName = s.cparseSystemRootPath;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var applicationName = _configurator["default"].getConfigurationSetting(s.cApplicationName);

    var pathElements = inputData.split(b.cBackSlash);

    loop1: for (var i = 0; i < pathElements.length; i++) {
      // console.log('BEGIN iteration i: ' + i);
      // BEGIN i-th iteration:
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_ithIteration + i);

      var pathElement = pathElements[i]; // console.log('pathElement is ' + pathElement);
      // pathElement is:

      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cpathElementIs + pathElement);

      if (i === 0) {
        // console.log('case: i = 0');
        // case: i = 0
        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccaseIEqual0);

        returnData = pathElement;
      } else if (pathElement === applicationName) {
        // console.log('case: pathElement = ' + s.cCAFfeinated);
        // case: pathElement =
        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccasePathElementEqual + applicationName);

        returnData = returnData + b.cBackSlash + pathElement + b.cBackSlash;
        break loop1;
      } else {
        // console.log('case else');
        // case else
        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccaseElse);

        returnData = returnData + b.cBackSlash + pathElement;
      } // console.log('returnData so far is: ' + returnData);
      // console.log('END iteration i: ' + i);
      // returnData so far is:


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataSoFarIs + returnData); // END i-th iteration:


      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_ithIteration + i);
    }

    returnData = swapDoubleBackSlashToSingleBackSlash(returnData, '');
    returnData = swapBackSlashToForwardSlash(returnData, '');
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.parseSystemRootPath function');


  return returnData;
};
/**
 * @function replaceDoublePercentWithMessage
 * @description Parses the input string and replaces any instance of a double percentage sign
 * with the input Meta Data string.
 * @param {string} inputData The string that might contain the double percentage signs.
 * @param {string} inputMetaData The string that should replace the double percentage signs.
 * @return {string} The modified string with the message inserted.
 * @author Seth Hollingsead
 * @date 2020/03/26
 * @NOTE The code that has been commented out below, is left as a memorial of what NOT TO DO!
 * Because it causes a circular dependency as noted in the note below.
 * If you need to debug this function, you'll need to uncomment the console.logs that are hard-coded below.
 */


exports.parseSystemRootPath = parseSystemRootPath;

var replaceDoublePercentWithMessage = function replaceDoublePercentWithMessage(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.replaceDoublePercentWithMessage business rule');
  // NOTE: Cannot use the following code here, because it causes a circular dependency.
  // We just have to hard code everything and it won't be loged to the log file.
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var functionName = s.creplaceDoublePercentWithMessage;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    returnData = inputData.replace(b.cPercent + b.cPercent, inputMetaData);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.replaceDoublePercentWithMessage business rule');


  return returnData;
};
/**
 * @function removeXnumberOfFoldersFromEndOfPath
 * @description Removes X number of folders from the end of a path and returns the newly modified path.
 * @param {string} inputData The path that should have the number of folders removed.
 * @param {integer} inputMetaData The number of paths that should be removed from the input path.
 * @return {string} The modified string with the folders removed from the input path.
 * @author Seth Hollingsead
 * @date 2020/06/01
 */


exports.replaceDoublePercentWithMessage = replaceDoublePercentWithMessage;

var removeXnumberOfFoldersFromEndOfPath = function removeXnumberOfFoldersFromEndOfPath(inputData, inputMetaData) {
  var functionName = s.cremoveXnumberOfFoldersFromEndOfPath;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData && math.isNumeric(inputMetaData) === true) {
    var pathArray;
    var pathAsForwardSlash;

    if (inputData.includes(b.cForwardSlash) === true) {
      pathArray = inputData.split(b.cForwardSlash);
      pathAsForwardSlash = true;
    } else if (inputData.includes(b.cBackSlash) === true) {
      pathArray = inputData.split(b.cBackSlash);
      pathAsForwardSlash = false;
    } else {
      pathAsForwardSlash = false;
      returnData = false;
    }

    if (returnData !== false) {
      // pathArray is:
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cpathArrayIs + JSON.stringify(pathArray));

      for (var i = 0; i <= pathArray.length - inputMetaData - 1; i++) {
        // current path element is:
        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.ccurrentPathElementIs + pathArray[i]);

        if (i === 0) {
          returnData = pathArray[i];
        } else {
          if (pathAsForwardSlash === true) {
            returnData = returnData + b.cForwardSlash + pathArray[i];
          } else if (pathAsForwardSlash === false) {
            returnData = returnData + b.cBackSlash + pathArray[i];
          } else {
            returnData = false;
            break;
          }
        } // END else case

      } // END for-loop
      // We still need a trailing slash


      if (pathAsForwardSlash === true) {
        returnData = returnData + b.cForwardSlash;
      } else if (pathAsForwardSlash === false) {
        returnData = returnData + b.cBackSlash;
      } else {
        returnData = false;
      }
    } // END returnData !== false

  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getFirstTopLevelFolderFromPath
 * @description Takes a path and returns the folder at the farthest right of that path.
 * @param {string} inputData The path that should be evaluated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The folder at the far-right of the input path.
 * @author Seth Hollingsead
 * @date 2020/06/02
 */


exports.removeXnumberOfFoldersFromEndOfPath = removeXnumberOfFoldersFromEndOfPath;

var getFirstTopLevelFolderFromPath = function getFirstTopLevelFolderFromPath(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.getFirstTopLevelFolderFromPath function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var functionName = s.cgetFirstTopLevelFolderFromPath;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var pathArray;

    if (inputData.includes(b.cForwardSlash) === true) {
      pathArray = inputData.split(b.cForwardSlash);
    } else if (inputData.includes(b.cBackSlash) === true) {
      pathArray = inputData.split(b.cBackSlash);
    } else {
      returnData = false;
    }

    if (returnData !== false) {
      // console.log('pathArray is: ' + JSON.stringify(pathArray));
      // pathArray is:
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cpathArrayIs + JSON.stringify(pathArray));

      returnData = pathArray[pathArray.length - 2];
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.getFirstTopLevelFolderFromPath function');


  return returnData;
};
/**
 * @function loadDataFile
 * @description Loads data from a specified file and stores is in the specified data hive path.
 * @param {string} inputData The full path and file name for the file that should be loaded into memory.
 * @param {string} inputMetaData The data hive path where the data should be stored once it is loaded.
 * @return {boolean} A True or False to indicate if the data file was loaded successfully or not.
 * @author Seth Hollingsead
 * @date 2020/12/28
 */


exports.getFirstTopLevelFolderFromPath = getFirstTopLevelFolderFromPath;

var loadDataFile = function loadDataFile(inputData, inputMetaData) {
  var functionName = s.cloadDataFile;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (!inputData) {
    // WARNING: No data to load, please specify a valid path & filename!
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cLoadDataFileMessage1 + s.cLoadDataFileMessage2);

    returnData = false;
  } else {
    var loadedData = {};

    if (inputData.includes(g.cDotxml) || inputData.includes(g.cDotXml) || inputData.includes(g.cDotXML)) {
      // Attempting to load XML data!
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cAttemptingToLoadXmlData);

      loadedData = _fileBroker["default"].getXmlData(inputData);
    } else if (inputData.includes(g.cDotcsv) || inputData.includes(g.cDotCsv) || inputData.includes(g.cDotCSV)) {
      // Attempting to load CSV data!
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cAttemptingToLoadCsvData);

      loadedData = _fileBroker["default"].getCsvData(inputData);
    } else if (inputData.includes(g.cDotjson) || inputData.includes(g.cDotJson) || inputData.includes(g.cDotJSON)) {
      // Attempting to load JSON data!
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cAttemptingToLoadJsonData);

      loadedData = _fileBroker["default"].getJsonData(inputData);
    } else {
      // WARNING: Invalid file format, file formats supported are:
      _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cloadDataFileMessage3 + supportedFileFormatsAre());
    } // Loaded data is:


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cLoadedDataIs + JSON.stringify(loadedData));

    if (loadedData !== null && loadedData) {
      returnData = true;

      _dataBroker["default"].storeData(inputMetaData, loadedData);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function supportedFileFormatsAre
 * @description Returns a list of supported file formats.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A coma seperated list of supported file formats. IE a list of file extensions.
 * @author Seth Hollingsead
 * @date 2021/02/06
 */


exports.loadDataFile = loadDataFile;

var supportedFileFormatsAre = function supportedFileFormatsAre(inputData, inputMetaData) {
  var functionName = s.csupportedFileFormatsAre;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData); // NOTE: In the future it might be better to store this data in a configuration setting so it's easier to update.
  // This this function could just look up that data and return it as a list.


  var returnData = g.cXML + b.cComa + b.cSpace + g.cCSV + b.cComa + b.cSpace + g.cJSON;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getStoredData
 * @description Gets the named data stored in the D data structure in the DataStorage data hive.
 * @param {string} inputData The name of the sub-data hive that should contain the stored data we are looking for.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {object} The data that was stored in the sub-data hive under the DataStorage data hive of the D data structure.
 * @author Seth Hollingsead
 * @date 2020/12/28
 */


exports.supportedFileFormatsAre = supportedFileFormatsAre;

var getStoredData = function getStoredData(inputData, inputMetaData) {
  var functionName = s.cgetStoredData;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    returnData = _dataBroker["default"].getData(inputData);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function storeData
 * @description Stores some data using the DataStorage data hive on the D data store.
 * @param {string} inputData The context name that the data should be stored with.
 * @param {string/integer/boolean/object/array} inputMetaData The data that should be stored.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2021/01/05
 */


exports.getStoredData = getStoredData;

var storeData = function storeData(inputData, inputMetaData) {
  var functionName = s.cstoreData;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData = false;

  if (inputData) {
    _dataBroker["default"].storeData(inputData, inputMetaData);

    returnData = true;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isObjectEmpty
 * @description Determines if a JSON object is empty or not.
 * @param {object} inputData The object that should be checked for emptyness.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the object is empty or not empty.
 * @author Seth Hollingsead
 * @date 2021/01/15
 */


exports.storeData = storeData;

var isObjectEmpty = function isObjectEmpty(inputData, inputMetaData) {
  var functionName = s.cisObjectEmpty;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData = true;

  if (inputData) {
    for (var key in inputData) {
      if (inputData.hasOwnProperty(key)) {
        returnData = false; // It may have a value, but is that value === null, if it is, reset back to true.

        if (inputData[key] === null) {
          returnData = true;
        }
      }
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isArrayEmpty
 * @description Determines if a JSON array is empty or not.
 * @param {array} inputData The array that should be checked for emptyness.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the array is empty or not empty.
 * @author Seth Hollingsead
 * @date 2021/01/15
 */


exports.isObjectEmpty = isObjectEmpty;

var isArrayEmpty = function isArrayEmpty(inputData, inputMetaData) {
  var functionName = s.cisArrayEmpty;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData = true;

  if (inputData) {
    returnData = !Object.keys(inputData).length;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isArray
 * @description Determines if an object is an array or not.
 * @param {object} inputData The object that should be tested to see if is an array or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input object is an array or not.
 * @author Seth Hollingsead
 * @date 2021/01/14
 */


exports.isArrayEmpty = isArrayEmpty;

var isArray = function isArray(inputData, inputMetaData) {
  var functionName = s.cisArray;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    returnData = Array.isArray(inputData);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isNonZeroLengthArray
 * @description Determines if an object is an array of length greater than or equal to one or not.
 * @param {object} inputData The object that should be tested to see if is an array of length greater than or equal to 1 or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input object is an array of length greater than equal to zero or not.
 * @author Seth Hollingsead
 * @date 2021/01/14
 */


exports.isArray = isArray;

var isNonZeroLengthArray = function isNonZeroLengthArray(inputData, inputMetaData) {
  var functionName = s.cisNonZeroLengthArray;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    if (isArray(inputData) === true && inputData.length >= 1) {
      returnData = true;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function arrayDeepClone
 * @description Clones an array by using JSON.stringify & JSON.parse.
 * Almost all other methods of cloning an array will actually clone by referance which essentially just clones the pointer to the array.
 * @NOTE: https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
 * @param {array} inputData The array that should be deeply cloned.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {array} The new array object after being cloned deeply.
 * @author Seth Hollingsead
 * @date 2021/01/21
 */


exports.isNonZeroLengthArray = isNonZeroLengthArray;

var arrayDeepClone = function arrayDeepClone(inputData, inputMetaData) {
  var functionName = s.carrayDeepClone;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData;

  if (inputData && isArray(inputData, '') === true && isArrayEmpty(inputData, '') === false) {
    returnData = JSON.parse(JSON.stringify(inputData));
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isObject
 * @description Determines if an object is a JSON object or not.
 * @param {object} inputData The object that should be tested to see if it is a JSON object or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input object is an array or not.
 * @author Seth Hollingsead
 * @date 2021/01/14
 */


exports.arrayDeepClone = arrayDeepClone;

var isObject = function isObject(inputData, inputMetaData) {
  var functionName = s.cisObject;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    if (_typeof(inputData) === 'object') {
      returnData = true;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isArrayOrObject
 * @description Determines if an input object is either an array or a JSON object.
 * @param {object} inputData The object that should be tested to see if it is either an array or a JSON object or not.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the input object is either an array or a JSON object.
 * @author Seth Hollingsead
 * @date 2021/01/14
 */


exports.isObject = isObject;

var isArrayOrObject = function isArrayOrObject(inputData, inputMetaData) {
  var functionName = s.cisArrayOrObject;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    if (isObject(inputData, '') === true || isArray(inputData, '') === true) {
      returnData = true;
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getAttributeName
 * @description Takes a string representation of a JSON attribute and gets the name (left hand assignment key).
 * @param {string} inputData The string representation of the JSON attribute that should be parsed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The name of the attribute.
 * @author Seth Hollingsead
 * @date 2021/01/10
 */


exports.isArrayOrObject = isArrayOrObject;

var getAttributeName = function getAttributeName(inputData, inputMetaData) {
  var functionName = s.cgetAttributeName;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData = false;

  if (inputData) {
    var attributeArray = inputData.split(b.cColon); // attributeArray is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cattributeArrayIs + attributeArray); // attributeArray[0] is:


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cattributeArray0Is + attributeArray[0]);

    returnData = replaceCharacterWithCharacter(attributeArray[0], [/"/g, '']);
    returnData = returnData.trim();
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function getAttributeValue
 * @description Takes a string representation of a JSON attribute and gets the value (Right hand assignment value).
 * @param {string} inputData The string representation of the JSON attribute that should be parsed.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The value of the attribute.
 * @author Seth Hollingsead
 * @date 2021/01/10
 */


exports.getAttributeName = getAttributeName;

var getAttributeValue = function getAttributeValue(inputData, inputMetaData) {
  var functionName = s.cgetAttributeValue;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData = false;

  if (inputData) {
    var attributeArray = inputData.split(b.cColon); // attributeArray is:

    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cattributeArrayIs + attributeArray); // attributeArray[0] is:


    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cattributeArray0Is + attributeArray[1]);

    returnData = replaceCharacterWithCharacter(attributeArray[1], [/"/g, '']);
    returnData = returnData.trim();
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function isOdd
 * @description Determines if the input value is an odd number or not an odd number.
 * @param {string} inputData The value that should be evaluated to determine if it is odd or not odd.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the value passed in is an Odd value or not an odd value.
 * @author Seth Hollingsead
 * @date 2020/06/24
 * {@link https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript}
 */


exports.getAttributeValue = getAttributeValue;

var isOdd = function isOdd(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.isOdd function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var functionName = s.cisOdd;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    if (isInteger(inputData, '') === true) {
      var inputValue = parseInt(inputData);
      var result = inputValue % 2;

      if (result === 1) {
        returnData = true;
      }
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.isOdd function');


  return returnData;
};
/**
 * @function isEven
 * @description Determines if the input value is an even number or not an even number.
 * @param {string} inputData The value that should be evaluated to determine if it is even or not even.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} True or False to indicate if the value passed in is an even value or not an even value.
 * @author Seth Hollingsead
 * @date 2020/06/24
 * {@link https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript}
 * @NOTE This function isn't actually needed, as we can just invert our logic for calling isOdd, but I provided it here anyways for completeness.
 */


exports.isOdd = isOdd;

var isEven = function isEven(inputData, inputMetaData) {
  var functionName = s.cisEven;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    if (math.isNumeric(inputData) === true) {
      var inputValue = parseInt(inputData);
      var result = inputValue % 2;

      if (result === 0) {
        returnData = true;
      }
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function replaceCharacterAtIndex
 * @description Replaces a character at the specified index with another character.
 * @param {string} inputData The string which should have the specified character changed, then returned.
 * @param {array<integer,string>} inputMetaData An array with an integer of what index the character should be replaced,
 * and a string with the character or characters that should be inserted at the specified index.
 * @return {string} The modified string.
 * @author Seth Hollingsead
 * @date 2020/06/24
 * {@link https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript}
 */


exports.isEven = isEven;

var replaceCharacterAtIndex = function replaceCharacterAtIndex(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.replaceCharacterAtIndex function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var functionName = s.creplaceCharacterAtIndex;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = false;

  if (inputData) {
    var indexOfReplacement;
    var stringToReplaceWith;

    if (inputMetaData.length === 2) {
      indexOfReplacement = inputMetaData[0];
      stringToReplaceWith = inputMetaData[1];
      var stringArray = inputData.split('');
      stringArray.splice(indexOfReplacement, 1, stringToReplaceWith);
      returnData = stringArray.join('');
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function); // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.replaceCharacterAtIndex function');


  return returnData;
};
/**
 * @function cleanCommandInput
 * @description Removes any "--" from the command to make it a valid command.
 * @param {string} inputData The string that should have the "--" removed from it.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The same as the input, but with the "--" removed.
 * @author Seth Hollingsead
 * @date 2020/12/21
 */


exports.replaceCharacterAtIndex = replaceCharacterAtIndex;

var cleanCommandInput = function cleanCommandInput(inputData, inputMetaData) {
  var functionName = s.ccleanCommandInput;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    returnData = inputData;
    returnData = replaceCharacterWithCharacter(inputData, [/--/g, '']);
    returnData = replaceCharacterWithCharacter(returnData, [/\[/g, '']);
    returnData = replaceCharacterWithCharacter(returnData, [/\]/g, '']);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};
/**
 * @function aggregateCommandArguments
 * @description Combines all of the input arguments into a single command line to be executed by the command parser.
 * @param {array<string>} inputData An array of strings that represents the command and command parameters to execute.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A single string command line of code that should be sent to the command parser.
 * @author Seth Hollingsead
 * @date 2020/12/21
 */


exports.cleanCommandInput = cleanCommandInput;

var aggregateCommandArguments = function aggregateCommandArguments(inputData, inputMetaData) {
  var functionName = s.caggregateCommandArguments;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    if (inputData.length > 3) {
      for (var i = 2; i < inputData.length; i++) {
        // BEGIN i-th iteration:
        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_ithIteration + i);

        if (i === 2) {
          returnData = cleanCommandInput(inputData[i]);
        } else {
          returnData = returnData + b.cSpace + cleanCommandInput(inputData[i]);
        } // returnData is:


        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData); // END i-th iteration:


        _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_ithIteration + i);
      }
    } else {
      returnData = cleanCommandInput(inputData[2]);
    }
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}; // ******************************************************
// Internal functions
// ******************************************************

/**
 * @function doesArrayContainValue
 * @description Checks if an array contains a value, checking equality by function(val, arr[i])
 * @param {array<string|object|map>} inputData The input array that should be searched for the given input value.
 * @param {string|integer|object} inputMetaData The value that should be searched for in the input array.
 * @param {function} myFunction The function that should be used to do the search.
 * @return {boolean} A Boolean value to indicate if the value was found in the array or not found.
 * @NOTE Duplicated code in the app.js file,
 * because the app.js code does not support calling and importing ES6 code from CommonJS code.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */


exports.aggregateCommandArguments = aggregateCommandArguments;

function doesArrayContainValue(array, value, myFunction) {
  var functionName = s.doesArrayContainValue;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function); // array is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.carrayIs + JSON.stringify(array)); // value is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cvalueIs + value); // Not sure how this will output, would be good to also put some type checking on this input variable.
  // myFunction is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cmyFunctionIs + JSON.stringify(myFunction));

  var returnData = false;

  if (_.isArray(array) === false) {
    // array input object is not an array.'
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.carrayInputObjectIsNotAnArray);

    returnData = false;
  }

  if (!!array.find(function (i) {
    return myFunction(i, value);
  })) {
    // The value was found in the array.
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cTheValueWasFoundInTheArray);

    returnData = true;
  } else {
    // The value was NOT found in the array.
    _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cTheValueWasNotFoundInTheArray);

    returnData = false;
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
}

;
/**
 * @function replaceCharacterAtIndexOfString
 * @description Replaces the character at a specified index with another character.
 * @param {string} originalString The string where the replacement should be made.
 * @param {integer} index The index of the character where the replacement should be made.
 * @param {string} replacement The character or string that should be inserted at the specified index.
 * @return {string} The string after the replacement has been made.
 * @author Seth Hollingsead
 * @date 2021/01/19
 * @NOTE: https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
 */

var replaceCharacterAtIndexOfString = function replaceCharacterAtIndexOfString(originalString, index, replacement) {
  var functionName = s.replaceCharacterAtIndexOfString;

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function); // originalString is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.coriginalStringIs + originalString); // index is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cindexIs + index); // replacement is:


  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creplacementIs + replacement);

  var returnData;

  if (originalString != '' && index >= 0 && replacement != '') {
    returnData = originalString.substr(0, index) + replacement + originalString.substr(index + replacement.length);
  }

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);

  _loggers["default"].consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);

  return returnData;
};

exports.replaceCharacterAtIndexOfString = replaceCharacterAtIndexOfString;