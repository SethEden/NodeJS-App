// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js.

/**
 * @module stringParsing
 * @description Contains all business rules for parsing strings, values, arrays,
 * values of all kinds, with various operations.
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/lodash|lodash}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/04
 */
import loggers from '../../Executrix/loggers';
import * as b from '../../Constants/basic.constants';
import * as g from '../../Constants/generic.constants';
import * as s from '../../Constants/system.constants';
const _ = require('lodash');
var path = require('path');

/**
 * @function stringToBoolean
 * @description Converts a string to a boolean value
 * @param {string} inputData A string that contains a truthy or a falsy value and should be converted to a boolean.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {boolean} A boolean value of either True or False according to the business rule conversion.
 * @author Seth Hollingsead
 * @date 2020/01/30
 */
export const stringToBoolean = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cstringToBoolean;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData;
  switch (inputData.toLowerCase().trim()) {
    case g.ctrue: case g.cTrue: case g.cTRUE: case b.ct: case b.cT: case b.cy: case b.cY: case g.cyes: case g.cYes: case g.cYES: case b.con: case b.cOn: case b.cON:
      returnData = true;
      break;
    case g.cfalse: case g.cFalse: case g.cFALSE: case b.cf: case b.cF: case b.cn: case b.cN: case b.cno: case b.cNo: case b.cNO: case g.coff: case g.cOff: case g.cOFF:
      returnData = false;
      break;
    default:
      returnData = false;
      break;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const stringToDataType = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cstringToDataType;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData;
  var dataType = determineObjectDataType(inputData);
  switch (dataType) {
    case s.cBoolean:
      returnData = stringToBoolean(inputData);
      break;
    case s.cInteger:
      returnData = parseInt(inputData);
      break;
    case s.cFloat:
      returnData = parseFloat(inputData);
      break;
    case s.cString:
      returnData = inputData;
      break;
    default: // We don't know what kind of object this is, better return it the way it was.
      returnData = inputData;
      break;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const determineObjectDataType = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cdetermineObjectDataType;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData;
  if (isBoolean(inputData) === true) {
    returnData = s.cBoolean;
  } else if (isInteger(inputData) === true) {
    returnData = s.cInteger;
  } else if (isFloat(inputData) === true) {
    returnData = s.cFloat;
  } else if (isString(inputData) === true) {
    returnData = s.cString;
  } else { // Otherwise we cannot figure out what the data type is.
    // No real way to tell the difference between Short, Long and Double.
    // And we don't really need to tell the difference between all those complicated data types.
    // At least not yet!
    returnData = s.cObject;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const isBoolean = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cisBoolean;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData;
  inputData = inputData.toLowerCase().trim();
  if (inputData === g.ctrue || inputData === b.ct || inputData === b.cy || inputData === g.cyes || inputData === b.con ||
  inputData === g.cfalse || inputData === b.cf || inputData === b.cn || inputData === b.cno || inputData === g.coff) {
    returnData = true;
  } else {
    returnData = false;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const isInteger = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cisInteger;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData;
  if (!isNaN(inputData) && inputData.indexOf(b.cDot) === -1) {
    returnData = true;
  } else {
    returnData = false;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const isFloat = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cisFloat;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData;
  if (!isNaN(inputData) && inputData.indexOf(b.cDot) !== -1) {
    returnData = true;
  } else {
    returnData = false;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const isString = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cisString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData;
  if (isBoolean(inputData) === false && isInteger(inputData) === false && isFloat(inputData) === false && (typeof inputData == 'string' || inputData instanceof String)) {
    returnData = true; // If it's not a Boolean, and not an Integer, and not a Float, then it must be a string, especially given the type of the variable is a string!
  } else {
    returnData = false;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const singleQuoteSwapAfterEquals = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.csingleQuoteSwapAfterEquals;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  // console.log('executing business rule: singleQuoteSwapAfterEquals');
  var returnData;
  // console.log('inputData is: ' + inputData);
  if (inputData.includes(b.cSingleQuote) === true) {
    // First replace all the quotes in the string with double quotes.
    returnData = inputData.replace(/'/g, b.cDoubleQuote);
    // Next replace the first and last double quote with single quote.
    if (returnData.indexOf(b.cDoubleQuote) === 0) {
      returnData = inputData.replace(b.cDoubleQuote, b.cSingleQuote);
    }
    if (returnData.charAt(returnData.length - 1) === b.cDoubleQuote) {
      returnData = returnData.slice(0, -1) + b.cSingleQuote;
    }
  } else {
    returnData = inputData;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const swapForwardSlashToBackSlash = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cswapForwardSlashToBackSlash;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData = replaceCharacterWithCharacter(inputData, /\//g, b.cBackSlash);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const swapBackSlashToForwardSlash = function(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.swapBackSlashToForwardSlash function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cswapBackSlashToForwardSlash;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData = replaceCharacterWithCharacter(inputData, /\\/g, b.cForwardSlash);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
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
export const swapDoubleForwardSlashToSingleForwardSlash = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cswapDoubleForwardSlashToSingleForwardSlash;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData = replaceCharacterWithCharacter(inputData, /\/\//g, b.cForwardSlash);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const swapDoubleBackSlashToSingleBackSlash = function(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.swapDoubleBackSlashToSingleBackSlash function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cswapDoubleBackSlashToSingleBackSlash;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData = replaceCharacterWithCharacter(inputData, /\\\\/g, b.cBackSlash);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
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
export const getUserNameFromEmail = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cgetUserNameFromEmail is resolving as: ' + s.cgetUserNameFromEmail);
  var functionName = s.cgetUserNameFromEmail;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'index of the ' + b.cAt + ' is: ' + inputData.indexOf(b.cAt));
  var returnData = inputData.substr(0, inputData.indexOf(b.cAt));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const replaceSpacesWithPlus = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.creplaceSpacesWithPlus is resolving as: ' + s.creplaceSpacesWithPlus);
  var functionName = s.creplaceSpacesWithPlus;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  // var returnData = inputData.replace(/ /g, b.cPlus);
  var returnData = replaceCharacterWithCharacter(inputData, / /g, b.cPlus);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const replaceColonWithUnderscore = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.creplaceColonWithUnderscore is resolving as: ' + s.creplaceColonWithUnderscore);
  var functionName = s.creplaceColonWithUnderscore;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  // var returnData == inputData.replace(/:/g, b.cUnderscore);
  var returnData = replaceCharacterWithCharacter(inputData, /:/g, b.cUnderscore);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function replaceCharacterWithCharacter
 * @description Replaces all of a specified character in the input data with another specified character.
 * @NOTE: This is NOT a public facing business rule, because the function signature cannot be made to match with the accepted business rules standards.
 * It actually could be made to match but we would have to combine the 2nd two parameters into one with a delimiter.
 * In practice this would be a mistake, but would be an acceptable solution if we find there are many additional needs for this kind of business rule.
 * @param {string} inputData A string that may or may not contain the specified characters that should be converted to another specified character.
 * @param {string} character2Find The character to be searched and replaced from the input string.
 * @param {string} character2Replace The character that should be used to replace the character specified for replacement from the input data.
 * @return {string} The same as the input string but with specified characters converted to the other specified character.
 * @author Seth Hollingsead
 * @date 2020/02/03
 */
const replaceCharacterWithCharacter = function(inputData, character2Find, character2Replace) {
  // console.log('BEGIN stringParsing.replaceCharacterWithCharacter function');
  // console.log('inputData is: ' + inputData);
  // console.log('character2Find is: ' + character2Find);
  // console.log('character2Replace is: ' + character2Replace);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = 'replaceCharacterWithCharacter';
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'character2Find is: ' + character2Find);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'character2Replace is: ' + character2Replace);
  if (!inputData && !character2Find && !character2Replace) {
    return false;
  }
  var returnData = inputData.replace(character2Find, character2Replace);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
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
export const cleanCarriageReturnFromString = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.ccleanCarriageReturnFromString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData = inputData.replace(/\s+/g, ' ').trim();
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const convertStringToLowerCase = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cconvertStringToLowerCase is resolving as: ' + s.cconvertStringToLowerCase);
  var functionName = s.cconvertStringToLowerCase;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData = inputData.toLowerCase();
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const convertStringToUpperCase = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cconvertStringToUpperCase is resolving as: ' + s.cconvertStringToUpperCase);
  var functionName = s.cconvertStringToUpperCase;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  // console.log('String before is: ' + inputData);
  var returnData = inputData.toUpperCase();
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const getFileNameFromPath = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgetFileNameFromPath;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  // Clean the path string for any double slashes.
  if (inputData.includes(b.cDoubleForwardSlash)) {
    inputData = swapDoubleForwardSlashToSingleForwardSlash(inputData, '');
  }
  if (inputData.includes(b.cForwardSlash)) {
    inputData = swapForwardSlashToBackSlash(inputData, '');
  }
  var returnData = inputData.split(b.cBackSlash).pop().trim();
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const removeFileExtensionFromFileName = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cremoveFileExtensionFromFileName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData = inputData.replace(/\.[^/.]+$/, '');
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const getValueFromAssignmentOperationString = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cgetValueFromAssignmentOperationString is resolving as: ' + s.cgetValueFromAssignmentOperationString);
  var functionName = s.cgetValueFromAssignmentOperationString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var parsedString = inputData.split(b.cEqual);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'parsedString term 1 is: ' + parsedString[0]);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'parsedString term 2 is: ' + parsedString[1]);
  var returnData = parsedString[1].replace(/['"]+/g, '');
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const aggregateNumericalDifferenceBetweenTwoStrings = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.caggregateNumericalDifferenceBetweenTwoStrings is resolving as: ' + s.caggregateNumericalDifferenceBetweenTwoStrings);
  var functionName = s.caggregateNumericalDifferenceBetweenTwoStrings;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData;
  // Convert the input strings to lower case and clean them up for parsing.
  var string1 = inputData.toLowerCase().replace(/\W/g, '');
  var string2 = inputMetaData.toLowerCase().replace(/\W/g, '');
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'string1 is: ' + string1);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'string2 is: ' + string2);

  // Build some arrays of variations on string 2, we will use these for doing the comparisons.
  let variation0 = Array(string2.length + 1).fill(0).map((v, i) => i);
  let variation1 = Array(string2.length + 1).fill(0);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'variation0 value is: ' + variation0);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'variation1 value is: ' + variation1);

  for (let i = 0; i < string1.length; i++) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'i value is: ' + i);
    variation1[0] = i + 1;
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'variation0 value is: ' + variation0);
    for (let j = 0; j < string2.length; j++) {
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'j value is: ' + j);
      let deletionCost = variation0[j + 1] + 1;
      let insertionCost = variation1[j] + 1;
      let substitutionCost;
      if (string1[i] === string2[j]) {
        substitutionCost = variation0[j];
      } else {
        substitutionCost = variation0[j] + 1;
      }
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'deletionCost is: ' + deletionCost);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'insertionCost is: ' + insertionCost);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'substitutionCost is: ' + substitutionCost);
      variation1[j + 1] = Math.min(deletionCost, insertionCost, substitutionCost);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'variation1 value is: ' + variation1);
    }
    let temp = variation1;
    variation1 = variation0;
    variation0 = temp;
  }
  returnData = variation0[string2.length];
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
 */
export const convertCamelCaseStringToArray = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cconvertCamelCaseStringToArray is resolving as: ' + s.cconvertCamelCaseStringToArray);
  var functionName = s.cconvertCamelCaseStringToArray;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData;
  let caps = [];
  for (let i = 1; i < inputData.length; i++) {
    if (g.cUpperCaseEnglishAlphabet.includes(str.charAt(i))) { caps.push(i); }
  }
  if (caps.length > 0) {
    let last = 0;
    let decomposedString = [];
    for (let j = 0; j < caps.length; j++) {
      decomposedString.push(inputData.sice(last, caps[j]).toLowerCase());
      last = caps[j];
    }
    decomposedString.push(inputData.slice(last).toLowerCase());
    returnData = decomposedString;
  } else {
    returnData = [inputData.toLowerCase()];
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const convertArrayToCamelCaseString = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cconvertArrayToCamelCaseString is resolving as: ' + s.cconvertArrayToCamelCaseString);
  var functionName = s.cconvertArrayToCamelCaseString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData;
  returnData = inputData.map((key, index) => mapWordToCamelCase(key, index));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const mapWordToCamelCaseWord = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cmapWordToCamelCaseWord is resolving as: ' + s.cmapWordToCamelCaseWord);
  var functionName = s.cmapWordToCamelCaseWord;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData;
  if (inputMetaData === 0) {
    returnData = inputData;
  } else {
    returnData = inputData.replace(/^./, character => character.toUpperCase());
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
 */
export const simplifyAndConsolidateString = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.csimplifyAndConsolidateString is resolving as: ' + s.csimplifyAndConsolidateString);
  var functionName = s.csimplifyAndConsolidateString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData;
  returnData = _.replace(inputData.toLowerCase(), /[\W]/g, '');
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const compareSimplifiedAndConsolidatedStrings = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.ccompareSimplifiedAndConsolidatedStrings is resolving as: ' + s.ccompareSimplifiedAndConsolidatedStrings);
  var functionName = s.ccompareSimplifiedAndConsolidatedStrings;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData;
  returnData = simplifyAndConsolidateString(inputData) === simplifyAndConsolidateString(inputMetaData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const doesArrayContainLowerCaseConsolidatedString = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cdoesArrayContainLowerCaseConsolidatedString is resolving as: ' + s.cdoesArrayContainLowerCaseConsolidatedString);
  var functionName = s.cdoesArrayContainLowerCaseConsolidatedString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData;
  var stringDelta = (value1, value2) => aggregateNumericalDifferenceBetweenTwoStrings(value1, value2) < 2;
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'stringDelta value is: ' + stringDelta);

  returnData = doesArrayContainValue(inputData, inputMetaData, stringDelta);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
};

/**
 * @function ascertainMatchingFilenames
 * @description Compares two file names after stripping off the path and determines if they are matching or not.
 * @param {string} inputData The first filename and path that should be used in making the file name comparison.
 * @param {string} inputMetaData The second filename and path that should be used in making the file name comparison.
 * @return {boolean} A Boolean value to indicate if the file names are equavalent.
 * @NOTE Duplicated code in the app.js file,
 * because the app.js code does not support calling and importing ES6 code from CommonJS code.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */
export const ascertainMatchingFilenames = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cascertainMatchingFilenames is resolving as: ' + s.cascertainMatchingFilenames);
  var functionName = s.cascertainMatchingFilenames;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData;
  if (path.basename(inputData) === path.basename(inputMetaData)) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Filenames match');
    returnData = true;
  } else {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Filenames do not match');
    returnData = false;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function doesArrayContainFilename
 * @description Checks if an array contains a filename, after stripping off the path.
 * @param {array<string>} inputData The Array of file names that should be checked for the input file name we are looking for.
 * @param {string} inputMetaData The file name we are looking for in the input Array.
 * @return {boolean} A Boolean value to indicate if the file name was found or not.
 * @NOTE Duplicated code in the app.js file,
 * because the app.js code does not support calling and importing ES6 code from CommonJS code.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */
export const doesArrayContainFilename = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  console.log('s.cdoesArrayContainFilename is resolving as: ' + s.cdoesArrayContainFilename);
  var functionName = s.cdoesArrayContainFilename;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData;
  returnData = doesArrayContainValue(inputData, inputMetaData, ascertainMatchingFilenames);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

// ******************************************************
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
export const getDataCatagoryFromDataContextName = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgetDataCatagoryFromDataContextName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData;
  var dataCatagory = inputData.split(b.cUnderscore);
  returnData = dataCatagory[0];
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'Data Catagory should be: ' + dataCatagory[0]);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
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
export const getDataCatagoryDetailNameFromDataContextName = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgetDataCatagoryDetailNameFromDataContextName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData;
  var dataCatagoryDetailName = inputData.split(b.cUnderscore);
  returnData = dataCatagoryDetailName[0];
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'Data Catagory Detail Name should be: ' + dataCatagoryDetailName[1]);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
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
export const getKeywordNameFromDataContextName = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cgetKeywordNameFromDataContextName;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData;
  var dataCatagoryKeywordName = inputData.split(b.cUnderscore);
  returnData = dataCatagoryKeywordName[1];
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'Keyword Name should be: ' + dataCatagoryKeywordName[2]);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
};

/**
 * @function parseSystemRootPath
 * @description Parses the root path as returned by calling: path.resolve(__dirname);
 * This business rule looks for the CAFfeinated part of the path
 * and will parse that out to determine where on the hard drive this CAFfeinated folder is installed at.
 * @param {string} inputData The root path as defined by calling path.resolve(__dirname);
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string with the path up to the application folder,
 * where ever that is installed on the local system executing the tests.
 * @author Seth Hollingsead
 * @date 2020/02/26
 */
export const parseSystemRootPath = function(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.parseSystemRootPath function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cparseSystemRootPath;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData = '';
  var pathElements = inputData.split(b.cBackSlash);
  loop1:
    for (let i = 0; i < pathElements.length; i++) {
      // console.log('BEGIN iteration i: ' + i);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'BEGIN iteration i: ' + i);
      let pathElement = pathElements[i];
      // console.log('pathElement is ' + pathElement);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'pathElement is: ' + pathElement);
      if (i === 0) {
        // console.log('case: i = 0');
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'case: i = 0');
        returnData = pathElement;
      } else if (pathElement === s.cCAFfeinated) {
        // console.log('case: pathElement = ' + s.cCAFfeinated);
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'case: pathElement = ' + s.cCAFfeinated);
        returnData = returnData + b.cBackSlash + pathElement + b.cBackSlash;
        break loop1;
      } else {
        // console.log('case else');
        loggers.consoleLog(baseFileName + b.cDot + functionName, 'case else');
        returnData = returnData + b.cBackSlash + pathElement;
      }
      // console.log('returnData so far is: ' + returnData);
      // console.log('END iteration i: ' + i);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'returnData so far is: ' + returnData);
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'END iteration i: ' + i);
    }
  returnData = swapDoubleBackSlashToSingleBackSlash(returnData, '');
  returnData = swapBackSlashToForwardSlash(returnData, '');
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
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
export const replaceDoublePercentWithMessage = function(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.replaceDoublePercentWithMessage business rule');
  // NOTE: Cannot use the following code here, because it causes a circular dependency.
  // We just have to hard code everything and it won't be loged to the log file.
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.creplaceDoublePercentWithMessage;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData = '';
  returnData = inputData.replace(b.cPercent + b.cPercent, inputMetaData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.replaceDoublePercentWithMessage business rule');
  return returnData;
};

/**
 * @function removeXnumberOfFoldersFromEndOfPath
 * @description Removes X number of folders from the end of a path and returns the newly modified path.
 * @param {string} inputData The path that should have the number of paths removed.
 * @param {integer} inputMetaData The number of paths that should be removed from the input path.
 * @return {string} The modified string with the folders removed from the input path.
 * @author Seth Hollingsead
 * @date 2020/06/01
 */
export const removeXnumberOfFoldersFromEndOfPath = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cremoveXnumberOfFoldersFromEndOfPath;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData && math.isNumeric(inputMetaData) === false) {
    returnData = false;
  }
  var returnData = '';
  var pathArray;
  var pathAsForwardSlash;
  if (inputData.includes(b.cForwardSlash) === true) {
    pathArray = inputData.split(b.cForwardSlash);
    pathAsForwardSlash = true;
  } else if (inputData.includes(b.cBackSlash) === true) {
    pathArray = inputData.split(b.cBackSlash);
    pathAsForwardSlash = false
  } else {
    pathAsForwardSlash = false;
    returnData = false;
  }
  if (returnData !== false) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'pathArray is: ' + JSON.stringify(pathArray));
    for (let i = 0; i <= pathArray.length - inputMetaData - 1; i++) {
      loggers.consoleLog(baseFileName + b.cDot + functionName, 'current path element is: ' + pathArray[i]);
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
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const getFirstTopLevelFolderFromPath = function(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.getFirstTopLevelFolderFromPath function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.getFirstTopLevelFolderFromPath;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  if (!inputData) {
    return false;
  }
  var returnData = '';
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
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'pathArray is: ' + JSON.stringify(pathArray));
    returnData = pathArray[pathArray.length - 2];
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.getFirstTopLevelFolderFromPath function');
  return returnData;
};

// ******************************************************
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
function doesArrayContainValue(array, value, myFunction) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = 'doesArrayContainValue';
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'inputData value is: ' + JSON.stringify(array));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'inputMetaData value is: ' + value);
  // Not sure how this will output, would be good to also put some type checking on this input variable.
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'myFunction value is: ' + JSON.stringify(myFunction));
  var returnData;
  if (_.isArray(array) === false) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'array input object is not an array.');
    returnData = false;
  }
  if (!!array.find(i => myFunction(i, value))) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'The value was found in the array.');
    returnData = true;
  } else {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'The value was NOT found in the array.');
    returnData = false;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

// /**
//  * @function mostPopularNumber
//  * @description Parses through an array of integers and determine which value is the most popular.
//  * @param {array<integer>} inputArray The array that should be evaluated for most popular value.
//  * @param {integer} length The length of the array that was passed in.
//  * @return {integer} The most popular value in the array.
//  * @author Seth Hollingsead
//  * @date 2020/05/20
//  * @NOTE: NOT TESTED!!!!
//  */
// function mostPopularNumber(inputArray, length) {
//   console.log('BEGIN mostPopularNumber function');
//   console.log('inputArray is: ' + JSON.stringify(inputArray));
//   console.log('length is: ' + length);
//   var returnData;
//   var i, j, instanceCounter = 0;
//   var tempArray1 = [];
//   var tempArray2 = [];
//
//   for (i = 0; i <= length; i++) {
//     for (j = 0; j <= length; j++) {
//       if (inputArray[i] === inputArray[j]) {
//         tempArray1[i] = inputArray[i];
//       }
//     }
//   }
//
//   for (i = 0; i <= tempArray1.length; i++) {
//     for (j = 0; j <= tempArray1.length; j++) {
//       if (tempArray1[i] === inputArray[j]) {
//         tempArray2[i] = ++instanceCounter;
//       }
//     }
//   }
//
//   for (i = 0; i <= tempArray2.length; i++) {
//     if (i = 0) {
//       returnData = tempArray2[i];
//     } else {
//       if (tempArray2[i] > tempArray2[i - 1]) {
//         returnData = tempArray2[i];
//       }
//     }
//   }
//
//   console.log('returnData is: ' + returnData);
//   console.log('END mostPopularNumber function');
//   return returnData;
// };
//
// /**
//  * @function isAlmostPalindrome
//  * @description Determines if the input string is almost a Palindrome string or not.
//  * That is to say if the word is reversable or not reversable and if it is at least within
//  * one character of being a palindrome string.
//  * @param {string} inputData The string that should be evaluated to determine if it is a Palindrome string or not.
//  * @return {boolean} True or False to indicate if the input string is a Palindrome or almost palindrome string or not.
//  * @author Seth Hollingsead
//  * @date 2020/05/20
//  * @NOTE: NOT TESTED!!!!
//  */
// function isAlmostPalindrome(inputData) {
//   console.log('BEGIN isAlmostPalindrome function');
//   console.log('inputData is: ' + inputData);
//   // s.charAt(i);
//   var returnData = false;
//   var i, misCompareCount;
//   misCompareCount = 0;
//   for (i = 0; i < inputData.length; i++) {
//     if (inputData.charAt(i) !== inputData.charAt(inputData.length - i)) {
//       misCompareCount += 1;
//     }
//   }
//   if (misCompareCount <= 1) {
//     returnData = true;
//   }
//   console.log('returnData is: ' + returnData);
//   console.log('END isAlmostPalindrome function');
//   return returnData;
// };
//
//
// // Implement a function to calculate the average distance between three points in a single plane,
// // where the coordinates of these points are (x1, y1), (x2, y2) and (x3, y3).
//
// /**
//  * @function threePointAverage
//  * @description Calculates the average of 3 coordinates in a 2-Dimensional plane.
//  * @param {array<integer|float|double>} point1 The coordinate for the first point.
//  * @param {array<integer|float|double>} point2 The coordinate for the second point.
//  * @param {array<integer|float|double>} point3 The coordinate for the third point.
//  * @return {array<integer|float|double>} Returns the XY coordinate of the average point between all points.
//  * @author Seth Hollingsead
//  * @date 2020/05/20
//  * @NOTE: NOT TESTED!!!!
//  */
// function threePointAverage(point1, point2, point3) {
//   console.log('BEGIN threePointAverage function');
//   console.log('point1 is: ' + point1);
//   console.log('point2 is: ' + point2);
//   console.log('point3 is: ' + point3);
//   var returnData;
//   var xAverage, x1, x2, x3;
//   var yAverage, y1, y2, y3;
//
//   x1 = point1[0];
//   x2 = point2[0];
//   x3 = point3[0];
//   y1 = point1[1];
//   y2 = point2[1];
//   y3 = point3[1];
//
//   // Calculate the X-averages:
//   xAverage = (x1 + x2 + x3) / 3
//   yAverage = (y1 + y2 + y3) / 3
//   returnData = [xAverage, yAverage];
//   console.log('returnData is: ' + returnData);
//   console.log('END threePointAverage function');
//   return returnData;
// };
//
// /**
//  * @function arrayCounter
//  * @description Receives an array and a value, counts the number of occurances of that value in the array.
//  * @param {array<integer|string|object>} inputArray The array which should have it's values counted.
//  * @param {integer|string|object} instance The instance that should be counted in the array.
//  * @return {integer} The count of the objects/values that was found to match out of the array
//  * @author Seth Hollingsead
//  * @date 2020/05/20
//  */
// function arrayCounter(inputArray, instance) {
//   console.log('BEGIN arrayCounter function');
//   console.log('inputArray is: ' + inputArray);
//   console.log('instance is: ' + instance);
//   var i;
//   var returnData = 0;
//   for (i = 0; i <= inputArray.length(); i++) {
//     if (inputArray[i] === instance) {
//       returnData += 1;
//     }
//   }
//   console.log('returnData is: ' + returnData);
//   console.log('END arrayCounter function');
//   return returnData;
// };
