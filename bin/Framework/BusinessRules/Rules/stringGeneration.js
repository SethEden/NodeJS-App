"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateRandomColor = exports.generateRandomDarkColor = exports.generateRandomBrightColor = exports.generateInvalidEmail2 = exports.generateInvalidEmail1 = exports.generateValidEmail2 = exports.generateValidEmail1 = exports.generateRandomSpecialCharacterCodeByLength2 = exports.generateRandomSpecialCharacterCodeByLength1 = exports.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = exports.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = exports.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = exports.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = exports.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = exports.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = exports.generateRandomNumericCodeByLength2 = exports.generateRandomNumericCodeByLength1 = exports.generateRandomLowerCaseAlphaNumericCodeByLength2 = exports.generateRandomLowerCaseAlphaNumericCodeByLength1 = exports.generateRandomUpperCaseAlphaNumericCodeByLength2 = exports.generateRandomUpperCaseAlphaNumericCodeByLength1 = exports.generateRandomMixedCaseAlphaNumericCodeByLength2 = exports.generateRandomMixedCaseAlphaNumericCodeByLength1 = exports.generateRandomLowerCaseTextWithSpecialCharactersByLength2 = exports.generateRandomLowerCaseTextWithSpecialCharactersByLength1 = exports.generateRandomUpperCaseTextWithSpecialCharactersByLength2 = exports.generateRandomUpperCaseTextWithSpecialCharactersByLength1 = exports.generateRandomMixedCaseTextWithSpecialCharactersByLength2 = exports.generateRandomMixedCaseTextWithSpecialCharactersByLength1 = exports.generateRandomLowerCaseTextByLength2 = exports.generateRandomLowerCaseTextByLength1 = exports.generateRandomUpperCaseTextByLength2 = exports.generateRandomUpperCaseTextByLength1 = exports.generateRandomMixedCaseTextByLength2 = exports.generateRandomMixedCaseTextByLength1 = void 0;

var _loggers = _interopRequireDefault(require("../../Executrix/loggers"));

var _stringParsing = require("./stringParsing");

var aryParse = _interopRequireWildcard(require("./arrayParsing"));

var charGen = _interopRequireWildcard(require("./characterGeneration"));

var bas = _interopRequireWildcard(require("../../Constants/basic.constants"));

var gen = _interopRequireWildcard(require("../../Constants/generic.constants"));

var num = _interopRequireWildcard(require("../../Constants/numeric.constants"));

var wrd = _interopRequireWildcard(require("../../Constants/word.constants"));

var sys = _interopRequireWildcard(require("../../Constants/system.constants"));

var biz = _interopRequireWildcard(require("../../Constants/business.constants"));

var msg = _interopRequireWildcard(require("../../Constants/message.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js.

/**
 * @file stringGeneration.js
 * @module stringrGeneration
 * @description Contains all business rules for randomly generating strings of all kinds.
 * There are two versions of each function, an old implementation and a new implementation.
 * @NOTE The original implementation of the following functions was in bad need of a refactoring two major reasons:
 * 1. All of the function signatures needed to be standardized with the new business rule standard of two input parameters.
 * 2. How the functions are implemented needed to be simplified, however, after further analysis of this re-implementation effort it was discovered that:
 * The old implementation might also still be useful, so both implementations will be supported and indicated with a 1 or 2.
 *
 * This will make it clear to the caller which function implmentation is done with with version of the function.
 * It would be interesting to call all of these functions in a loop and do a performance analysis to determine which version of the implementation runs faster.
 * I speculate that version 2 might run faster just because it's less code to execute and could be more efficient.
 *
 * Once we have identified which API is the most efficient this code can be decreased by half and we can get rid of the obsolete API.
 * @NOTE Performance analysis was completed here are the results:
┌─────────┬─────────────────────────────────────────────────────────────────────────┬───────────┬────────────────────┐
│ (index) │                                  Name                                   │  Average  │ StandardDeviation  │
├─────────┼─────────────────────────────────────────────────────────────────────────┼───────────┼────────────────────┤
│    0    │          'randomlyGenerateMixedCaseLetterOrSpecialCharacter1'           │  1.6481   │ 2.233084501311769  │
│    1    │          'randomlyGenerateUpperCaseLetterOrSpecialCharacter1'           │  1.4741   │ 1.5680335423708824 │
│    2    │          'randomlyGenerateLowerCaseLetterOrSpecialCharacter1'           │  1.4857   │ 2.0624731537647225 │
│    3    │   'randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1'    │  1.9071   │ 2.016201773136808  │
│    4    │   'randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1'    │  1.7206   │ 1.8771615913393418 │
│    5    │   'randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1'    │   1.685   │ 1.6677454841792763 │
│    6    │            'randomlyGenerateMixedCaseAlphaNumericCharacter1'            │  1.6557   │ 2.3226186751167095 │
│    7    │            'randomlyGenerateUpperCaseAlphaNumericCharacter1'            │  1.4815   │ 1.9694308187900527 │
│    8    │            'randomlyGenerateLowerCaseAlphaNumericCharacter1'            │  1.4018   │  1.37177139494886  │
│    9    │                   'randomlyGenerateNumericCharacter1'                   │  0.9817   │ 1.5121392495402006 │
│   10    │                   'randomlyGenerateSpecialCharacter1'                   │  1.0919   │ 1.5030816311831114 │
│   11    │                    'randomlyGenerateNumberInRange1'                     │  0.8734   │ 1.030326375475245  │
│   12    │                     'randomlyGenerateBooleanValue1'                     │  0.4532   │ 0.7014340738800808 │
│   13    │             'randomlyGenerateMixedCaseAlphabeticCharacter1'             │  1.4898   │ 1.5096674998158248 │
│   14    │                   'randomlyGenerateLowerCaseLetter1'                    │  1.2216   │ 1.5000311463433034 │
│   15    │                   'randomlyGenerateUpperCaseLetter1'                    │  1.3521   │ 1.9987309949067644 │
│   16    │                 'generateRandomMixedCaseTextByLength1'                  │  99.6258  │ 22.32018311663247  │
│   17    │                 'generateRandomUpperCaseTextByLength1'                  │  73.0099  │ 20.22951808595531  │
│   18    │                 'generateRandomLowerCaseTextByLength1'                  │  71.8953  │ 14.889067731392686 │
│   19    │       'generateRandomMixedCaseTextWithSpecialCharactersByLength1'       │ 107.3136  │ 23.303691875753202 │
│   20    │       'generateRandomUpperCaseTextWithSpecialCharactersByLength1'       │  93.1208  │ 18.53444920573566  │
│   21    │       'generateRandomLowerCaseTextWithSpecialCharactersByLength1'       │  93.3671  │ 20.090180128361254 │
│   22    │           'generateRandomMixedCaseAlphaNumericCodeByLength1'            │ 107.6398  │ 29.277114884495585 │
│   23    │           'generateRandomUpperCaseAlphaNumericCodeByLength1'            │  95.2911  │ 21.084467287318414 │
│   24    │           'generateRandomLowerCaseAlphaNumericCodeByLength1'            │  96.0526  │ 21.597380240205034 │
│   25    │                  'generateRandomNumericCodeByLength1'                   │  55.6532  │ 11.73260967389578  │
│   26    │ 'generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1' │ 133.7189  │ 29.413097130190057 │
│   27    │ 'generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1' │ 116.2205  │ 24.117957619790264 │
│   28    │ 'generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1' │ 113.7952  │ 19.35579130286338  │
│   29    │              'generateRandomSpecialCharacterCodeByLength1'              │  56.7322  │ 14.975549511119663 │
│   30    │                          'generateValidEmail1'                          │ 121.29785 │ 25.637797007104464 │
│   31    │                         'generateInvalidEmail1'                         │ 60.34375  │ 58.054091035322394 │
└─────────┴─────────────────────────────────────────────────────────────────────────┴───────────┴────────────────────┘
┌─────────┬─────────────────────────────────────────────────────────────────────────┬─────────┬────────────────────┐
│ (index) │                                  Name                                   │ Average │ StandardDeviation  │
├─────────┼─────────────────────────────────────────────────────────────────────────┼─────────┼────────────────────┤
│    0    │          'randomlyGenerateMixedCaseLetterOrSpecialCharacter2'           │ 0.9326  │ 1.2736001099245762 │
│    1    │          'randomlyGenerateUpperCaseLetterOrSpecialCharacter2'           │ 1.1998  │ 1.3664113436297474 │
│    2    │          'randomlyGenerateLowerCaseLetterOrSpecialCharacter2'           │ 1.1721  │ 1.8551769699951877 │
│    3    │   'randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2'    │ 1.1196  │ 1.3541402586142757 │
│    4    │   'randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2'    │ 1.1351  │ 1.1274963370229159 │
│    5    │   'randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2'    │ 2.9792  │  2.89578441186493  │
│    6    │            'randomlyGenerateMixedCaseAlphaNumericCharacter2'            │ 3.2928  │  3.70214372492479  │
│    7    │            'randomlyGenerateUpperCaseAlphaNumericCharacter2'            │  2.846  │ 2.620931895338077  │
│    8    │            'randomlyGenerateLowerCaseAlphaNumericCharacter2'            │ 2.8454  │ 2.2431448548856245 │
│    9    │                   'randomlyGenerateNumericCharacter2'                   │ 2.8697  │ 2.6386970098896674 │
│   10    │                   'randomlyGenerateSpecialCharacter2'                   │ 2.6609  │ 2.6647910218251822 │
│   11    │                    'randomlyGenerateNumberInRange2'                     │ 1.9304  │ 2.191153997326579  │
│   12    │                     'randomlyGenerateBooleanValue2'                     │ 0.6266  │ 1.215965640961947  │
│   13    │             'randomlyGenerateMixedCaseAlphabeticCharacter2'             │ 2.9963  │ 3.2733295449741773 │
│   14    │                   'randomlyGenerateLowerCaseLetter2'                    │ 3.3398  │ 3.4043113782378844 │
│   15    │                   'randomlyGenerateUpperCaseLetter2'                    │ 3.0808  │ 2.926340950743783  │
│   16    │                 'generateRandomMixedCaseTextByLength2'                  │ 76.1137 │ 20.486546129350405 │
│   17    │                 'generateRandomUpperCaseTextByLength2'                  │ 69.4909 │ 14.787316091502174 │
│   18    │                 'generateRandomLowerCaseTextByLength2'                  │ 60.8439 │ 25.049577497235223 │
│   19    │       'generateRandomMixedCaseTextWithSpecialCharactersByLength2'       │ 22.4851 │ 2.6385560426111554 │
│   20    │       'generateRandomUpperCaseTextWithSpecialCharactersByLength2'       │ 22.3307 │  3.86180495494013  │
│   21    │       'generateRandomLowerCaseTextWithSpecialCharactersByLength2'       │ 22.2457 │ 3.668723416939424  │
│   22    │           'generateRandomMixedCaseAlphaNumericCodeByLength2'            │ 22.4306 │ 3.988757154803981  │
│   23    │           'generateRandomUpperCaseAlphaNumericCodeByLength2'            │ 22.1302 │ 2.3636090962764222 │
│   24    │           'generateRandomLowerCaseAlphaNumericCodeByLength2'            │ 22.0949 │ 2.121813844332074  │
│   25    │                  'generateRandomNumericCodeByLength2'                   │ 22.3365 │ 4.541659140666275  │
│   26    │ 'generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2' │ 22.0101 │ 2.2408029788451076 │
│   27    │ 'generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2' │ 22.6002 │ 4.254639815542473  │
│   28    │ 'generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2' │ 22.3309 │ 2.902827103015252  │
│   29    │              'generateRandomSpecialCharacterCodeByLength2'              │ 17.3891 │ 1.4044576141700058 │
│   30    │                          'generateValidEmail2'                          │ 21.2585 │ 4.866063886756967  │
│   31    │                         'generateInvalidEmail2'                         │ 11.1406 │ 10.721717756031204 │
└─────────┴─────────────────────────────────────────────────────────────────────────┴─────────┴────────────────────┘
 * @NOTE The results speak for themselves. The numbers do not lie. The above results were generated after running each business rule 10,000 times.
 * Each time a run-time was captured and using the business rule performance metrics system to average them all and compute the standard deviation.
 * Another test run was done with just 1,000 times for each business rule. Both results are also included with the NodeJS-App root folder in TXT files.
 * In summary all of the results clearly indicate that the 2nd version of these functions is significantly more performant, and where from 2-4 times as fast.
 * HOWEVER, I do not have the heart to remove all these functions from the code base. Since this NodeJS-App Framework/Platform is intended to be forked to build custom applications, I will leave the removal of these redundant functions as an exercise for the developer who chooses to inherit this code.
 * Future versions might have this redundant code removed, but I will leave it in for now.
 * At least we now have hard evidence, knowledge, and proof as to which algorthim performs better.
 * Because knowing is half the battle! Knowledge is power!! :-D
 * @NOTE This note is included with the test results in the both the characterGeneration.js file & stringGeneration.js file.
 * @requires module:loggers
 * @requires module:stringParsing
 * @requires module:characterGeneration
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @requires module:numeric-constants
 * @requires module:word-constants
 * @requires module:system-constants
 * @requires module:business-constants
 * @requires module:message-constants
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
var path = require('path');

var baseFileName = path.basename(module.filename, path.extname(module.filename)); // Framework.BusinessRules.Rules.stringGeneration.

var namespacePrefix = sys.cFramework + bas.cDot + wrd.cBusiness + wrd.cRules + bas.cDot + wrd.cRules + bas.cDot + baseFileName + bas.cDot;
/**
 * @function generateRandomMixedCaseTextByLength1
 * @description Parse the input string, and determine how many mixed case alphabetic characters should be generated, generate them and string them together.
 * @param {string} inputData The string that contains a number or how many randomly generated mixed case alphabetic characters should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated mixed case letters where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation
 * @author Seth Hollingsead
 * @date 2020/03/04
 */

var generateRandomMixedCaseTextByLength1 = function generateRandomMixedCaseTextByLength1(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomMixedCaseTextByLength1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomMixedCaseTextByLength2
 * @description Parse the input string, and determine how many mixed case alphabetic characters should be generated, generate them and string them together.
 * @param {string} inputData The string that contains a number or how many randomly generated mixed case alphabetic characters should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated mixed case letters where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomMixedCaseTextByLength1 = generateRandomMixedCaseTextByLength1;

var generateRandomMixedCaseTextByLength2 = function generateRandomMixedCaseTextByLength2(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomMixedCaseTextByLength2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateMixedCaseAlphabeticCharacter2(inputData, inputMetaData));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomUpperCaseTextByLength1
 * @description Parse the input string, and determine how many upper case alphabetic characters should be generated, generate them and string them together.
 * @param {string} inputData The string that contains a number for how many randomly generated upper case alphabetic characters should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated upper case letters where the length of the string is defined by the input parameter
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomMixedCaseTextByLength2 = generateRandomMixedCaseTextByLength2;

var generateRandomUpperCaseTextByLength1 = function generateRandomUpperCaseTextByLength1(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomUpperCaseTextByLength1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateUpperCaseLetter1(inputData, inputMetaData));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomUpperCaseTextByLength2
 * @description Parse the input string, and determine how many upper case alphabetic characters should be generated, generate them and string them together.
 * @param {string} inputData The string that contains a number for how many randomly generated upper case alphabetic characters should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated upper case letters where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomUpperCaseTextByLength1 = generateRandomUpperCaseTextByLength1;

var generateRandomUpperCaseTextByLength2 = function generateRandomUpperCaseTextByLength2(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomUpperCaseTextByLength2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateUpperCaseLetter2(inputData, inputMetaData));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomLowerCaseTextByLength1
 * @description Parse the input string, and determine how many lower case alphabetic characters should be generated, generate them and string them together.
 * @param {string} inputData The string that contains a number for how many randomly generated lower case alphabetic characters that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated lower case letters where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomUpperCaseTextByLength2 = generateRandomUpperCaseTextByLength2;

var generateRandomLowerCaseTextByLength1 = function generateRandomLowerCaseTextByLength1(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomLowerCaseTextByLength1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateLowerCaseLetter1(inputData, inputMetaData));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomLowerCaseTextByLength2
 * @description Parse the input string, and determine how many lower case alphabetic characters should be generated, generate them and string them together.
 * @param {string} inputData The string that contains a number for how many randomly generated lower case alphabetic characters that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated lower case letters where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomLowerCaseTextByLength1 = generateRandomLowerCaseTextByLength1;

var generateRandomLowerCaseTextByLength2 = function generateRandomLowerCaseTextByLength2(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomLowerCaseTextByLength2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateLowerCaseLetter2(inputData, inputMetaData));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomMixedCaseTextWithSpecialCharactersByLength1
 * @description Generate the specified number of random mixed case letters and/or special characters and string them together.
 * @param {string} inputData The number of randomly generated mixed case letters and/or special characters to generate the output string.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated mixed case letters and special characters where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomLowerCaseTextByLength2 = generateRandomLowerCaseTextByLength2;

var generateRandomMixedCaseTextWithSpecialCharactersByLength1 = function generateRandomMixedCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateMixedCaseLetterOrSpecialCharacter1(inputMetaData, ''));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomMixedCaseTextWithSpecialCharactersByLength2
 * @description Generate the specified number of random mixed case letters and/or special characters and string them together.
 * @param {string} inputData The number of randomly generated mixed case letters and/or special characters to generate the output string.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated mixed case letters and special characters where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomMixedCaseTextWithSpecialCharactersByLength1 = generateRandomMixedCaseTextWithSpecialCharactersByLength1;

var generateRandomMixedCaseTextWithSpecialCharactersByLength2 = function generateRandomMixedCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateMixedCaseLetterOrSpecialCharacter2(inputMetaData, ''));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomUpperCaseTextWithSpecialCharactersByLength1
 * @description Generate the specified number of random upper case letters and/or special characters and string them together.
 * @param {string} inputData The number of randomly generated upper case letters and/or special characters to generate.
 * @param {string} inputMetaData The list of special characters that should be used during the generate process.
 * @return {string} A string of randomly generated upper case letters and special characters where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomMixedCaseTextWithSpecialCharactersByLength2 = generateRandomMixedCaseTextWithSpecialCharactersByLength2;

var generateRandomUpperCaseTextWithSpecialCharactersByLength1 = function generateRandomUpperCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateUpperCaseLetterOrSpecialCharacter1(inputMetaData, ''));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomUpperCaseTextWithSpecialCharactersByLength2
 * @description Generate the specified number of random upper case letters and/or special characters and string them together.
 * @param {string} inputData The number of randomly generated upper case letters and/or special characters to generate.
 * @param {string} inputMetaData The list of special characters that should be used during the generate process.
 * @return {string} A string of randomly generated upper case letters and special characters where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomUpperCaseTextWithSpecialCharactersByLength1 = generateRandomUpperCaseTextWithSpecialCharactersByLength1;

var generateRandomUpperCaseTextWithSpecialCharactersByLength2 = function generateRandomUpperCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateUpperCaseLetterOrSpecialCharacter2(inputMetaData, ''));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomLowerCaseTextWithSpecialCharactersByLength1
 * @description Generate the specified number of random lower case letters and/or special characters and string them together.
 * @param {string} inputData The number of randomly generated lower case letters and/or special characters to generate.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated lower case letters and special characters where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomUpperCaseTextWithSpecialCharactersByLength2 = generateRandomUpperCaseTextWithSpecialCharactersByLength2;

var generateRandomLowerCaseTextWithSpecialCharactersByLength1 = function generateRandomLowerCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateLowerCaseLetterOrSpecialCharacter1(inputMetaData, ''));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomLowerCaseTextWithSpecialCharactersByLength2
 * @description Generate the specified number of random lower case letters and/or special characters and string them together.
 * @param {string} inputData The number of randomly generated lower case letters and/or special characters to generate.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated lower case letters and special characters where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomLowerCaseTextWithSpecialCharactersByLength1 = generateRandomLowerCaseTextWithSpecialCharactersByLength1;

var generateRandomLowerCaseTextWithSpecialCharactersByLength2 = function generateRandomLowerCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateLowerCaseLetterOrSpecialCharacter2(inputMetaData, ''));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomMixedCaseAlphaNumericCodeByLength1
 * @description Generate the specified number of random mixed case letters and/or numeric characters and string them together.
 * @param {string} inputData The number of randomly generated mixed case letters and/or numbers that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated mixed case letters and numbers where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomLowerCaseTextWithSpecialCharactersByLength2 = generateRandomLowerCaseTextWithSpecialCharactersByLength2;

var generateRandomMixedCaseAlphaNumericCodeByLength1 = function generateRandomMixedCaseAlphaNumericCodeByLength1(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomMixedCaseAlphaNumericCodeByLength1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateMixedCaseAlphaNumericCharacter1(inputData, inputMetaData));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomMixedCaseAlphaNumericCodeByLength2
 * @description Generate the specified number of random mixed case letters and/or numeric characters and string them together.
 * @param {string} inputData The number of randomly generated mixed case letters and/or numbers that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated mixed case letters and numbers where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomMixedCaseAlphaNumericCodeByLength1 = generateRandomMixedCaseAlphaNumericCodeByLength1;

var generateRandomMixedCaseAlphaNumericCodeByLength2 = function generateRandomMixedCaseAlphaNumericCodeByLength2(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomMixedCaseAlphaNumericCodeByLength2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateMixedCaseAlphaNumericCharacter2(inputData, inputMetaData));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomUpperCaseAlphaNumericCodeByLength1
 * @description Generate the specified number of random upper case letters and/or numeric characters and string them together.
 * @param {string} inputData The string that contains a number for how many randomly generated upper case letters and/or numbers that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated upper case letters and numbers where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomMixedCaseAlphaNumericCodeByLength2 = generateRandomMixedCaseAlphaNumericCodeByLength2;

var generateRandomUpperCaseAlphaNumericCodeByLength1 = function generateRandomUpperCaseAlphaNumericCodeByLength1(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomUpperCaseAlphaNumericCodeByLength1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateUpperCaseAlphaNumericCharacter1(inputData, inputMetaData));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomUpperCaseAlphaNumericCodeByLength2
 * @description Generate the specified number of random upper case letters and/or numeric characters and string them together.
 * @param {string} inputData The string that contains a number for how many randomly generated upper case letters and/or numbers that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated upper case letters and numbers where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomUpperCaseAlphaNumericCodeByLength1 = generateRandomUpperCaseAlphaNumericCodeByLength1;

var generateRandomUpperCaseAlphaNumericCodeByLength2 = function generateRandomUpperCaseAlphaNumericCodeByLength2(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomUpperCaseAlphaNumericCodeByLength2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateUpperCaseAlphaNumericCharacter2(inputData, inputMetaData));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomLowerCaseAlphaNumericCodeByLength1
 * @description Generate the specified number of random lower case letters and/or numeric characters and string them together.
 * @param {string} inputData The number of randomly generated lower case letters and/or numbers that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated lower case letters and numbers where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomUpperCaseAlphaNumericCodeByLength2 = generateRandomUpperCaseAlphaNumericCodeByLength2;

var generateRandomLowerCaseAlphaNumericCodeByLength1 = function generateRandomLowerCaseAlphaNumericCodeByLength1(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomLowerCaseAlphaNumericCodeByLength1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateLowerCaseAlphaNumericCharacter1(inputData, inputMetaData));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomLowerCaseAlphaNumericCodeByLength2
 * @description Generate the specified number of random lower case letters and/or numeric characters and string them together.
 * @param {string} inputData The number of randomly generated lower case letters and/or numbers that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated lower case letters and numbers where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomLowerCaseAlphaNumericCodeByLength1 = generateRandomLowerCaseAlphaNumericCodeByLength1;

var generateRandomLowerCaseAlphaNumericCodeByLength2 = function generateRandomLowerCaseAlphaNumericCodeByLength2(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomLowerCaseAlphaNumericCodeByLength2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateLowerCaseAlphaNumericCharacter2(inputData, inputMetaData));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomNumericCodeByLength1
 * @description Generate the specified number of random numberic characters and string them together.
 * @param {string} inputData The number of randomly generated numeric characters that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated numeric characters where the length of the string is defined by the input parameter.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomLowerCaseAlphaNumericCodeByLength2 = generateRandomLowerCaseAlphaNumericCodeByLength2;

var generateRandomNumericCodeByLength1 = function generateRandomNumericCodeByLength1(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomNumericCodeByLength1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateNumericCharacter1(inputData, inputMetaData));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomNumericCodeByLength2
 * @description Generate the specified number of random numberic characters and string them together.
 * @param {string} inputData The number of randomly generated numeric characters that should be generated.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} A string of randomly generated numeric characters where the length of the string is defined by the input parameter.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomNumericCodeByLength1 = generateRandomNumericCodeByLength1;

var generateRandomNumericCodeByLength2 = function generateRandomNumericCodeByLength2(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomNumericCodeByLength2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateNumericCharacter2(inputData, inputMetaData));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1
 * @description Generate a random selection of mixed case letters, numeric characters and special characters from a list of allowable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param {string} inputData The number of randomly generated letters, numeric characters and special characters that should be generated.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated mixed case alpha numeric characters, and special characters where the length of the string is defined as one of the input parameters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomNumericCodeByLength2 = generateRandomNumericCodeByLength2;

var generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1(inputMetaData, ''));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2
 * @description Generate a random selection of mixed case letters, numeric characters and special characters from a list of allowable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param {string} inputData The number of randomly generated letters, numeric characters and special characters that should be generated.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated mixed case alpha numeric characters, and special characters where the length of the string is defined as one of the input parameters.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1;

var generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = function generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2(inputMetaData, ''));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1
 * @description Generate a random selection of upper case letters, numeric characters and special characters from a list of alloable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param {string} inputData The number of randomly generated upper case letters, numeric characters and special characters that should be generated.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated upper case alpha numeric characters, and special characters where the length of the string is defined as one of the input parameters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2;

var generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1(inputMetaData, ''));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2
 * @description Generate a random selection of upper case letters, numeric characters and special characters from a list of alloable special characters,
 * should be generated; generate them and string them together to the specified length.
 * @param {string} inputData The number of randomly generated upper case letters, numeric characters and special characters that should be generated.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated upper case alpha numeric characters, and special characters where the length of the string is defined as one of the input parameters.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1;

var generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = function generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2(inputMetaData, ''));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1
 * @description Generate a random selection of lower case letters, numeric characters and special characters from a list of allowable special characters,
 * should be generated, generate them ans string them together to the specified length.
 * @param {string} inputData The number of randomly generated lower case letters, numeric characters and special characters that should be generated.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated lower case alpha numeric characters, and special characters where the length of the string is defined as one of the input parameters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2;

var generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1(inputMetaData, ''));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2
 * @description Generate a random selection of lower case letters, numeric characters and special characters from a list of allowable special characters,
 * should be generated, generate them ans string them together to the specified length.
 * @param {string} inputData The number of randomly generated lower case letters, numeric characters and special characters that should be generated.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated lower case alpha numeric characters, and special characters where the length of the string is defined as one of the input parameters.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1;

var generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = function generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2(inputMetaData, ''));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomSpecialCharacterCodeByLength1
 * @description Generate a random selection of characters from the input allowable alphabet of characters, generate them and string them together to the specified length.
 * @param {string} inputData The number of randomly generated special characters that should be generated.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated characters from the list of allowable special characters that are passed in where the length of the string is defined as one of the input parameters.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2;

var generateRandomSpecialCharacterCodeByLength1 = function generateRandomSpecialCharacterCodeByLength1(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomSpecialCharacterCodeByLength1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateSpecialCharacter1(inputMetaData, ''));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomSpecialCharacterCodeByLength2
 * @description Generate a random selection of characters from the input allowable alphabet of characters, generate them and string them together to the specified length.
 * @param {string} inputData The number of randomly generated special characters that should be generated.
 * @param {string} inputMetaData The list of special characters that should be used during the generation process.
 * @return {string} A string of randomly generated characters from the list of allowable special characters that are passed in where the length of the string is defined as one of the input parameters.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateRandomSpecialCharacterCodeByLength1 = generateRandomSpecialCharacterCodeByLength1;

var generateRandomSpecialCharacterCodeByLength2 = function generateRandomSpecialCharacterCodeByLength2(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomSpecialCharacterCodeByLength2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';

  if (inputData) {
    var numberOfCharactersToGenerate = parseInt(inputData);

    for (var counter = 1; counter <= numberOfCharactersToGenerate; counter++) {
      returnData = returnData.concat(charGen.randomlyGenerateSpecialCharacter2(inputMetaData, ''));
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateValidEmail1
 * @description Generate a valid random email address composed of a random selection of mixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param {string} inputData The string that contains the number of characters to generate.
 * @param {array<boolean,string,string>} inputMetaData A map with multiple input parameters:
 *  generateSpecialCharacters - A boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 *  allowableSpecialCharacters - The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} boolean value is set to {@code TRUE}.
 *  specifiedSuffixAndDomain - The specified suffix and domain to use after the "@" symbol in the email being generated, example "Yahoo.com".
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email: "a@b.com".
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateRandomSpecialCharacterCodeByLength2 = generateRandomSpecialCharacterCodeByLength2;

var generateValidEmail1 = function generateValidEmail1(inputData, inputMetaData) {
  var functionName = biz.cgenerateValidEmail1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData = '';
  var allowableSpecialCharacters;
  var generateSpecialCharacters;
  var specifiedSuffixAndDomain;
  var bFalse = false;
  var sEmpty = '';

  if (!!inputMetaData && inputMetaData !== 'undefined' && inputMetaData !== '') {
    if (inputMetaData.length === 3) {
      generateSpecialCharacters = (0, _stringParsing.stringToBoolean)(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1];
      specifiedSuffixAndDomain = inputMetaData[2]; // @NOTE the above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateValidEmailWithSpecificSuffixAndDomainName1(inputData, generateSpecialCharacters, allowableSpecialCharacters, specifiedSuffixAndDomain);
    } else if (inputMetaData.length <= 2) {
      generateSpecialCharacters = (0, _stringParsing.stringToBoolean)(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1]; // @NOTE The above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateRandomValidEmail1(inputData, generateSpecialCharacters, allowableSpecialCharacters);
    } else {
      returnData = generateRandomValidEmail1(inputData, bas.cFalse, wrd.cEmpty);
    }
  } else {
    returnData = generateRandomValidEmail1(inputData, bas.cFalse, wrd.cEmpty);
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateValidEmail2
 * @description Generate a valid random email address composed of a random selection of mixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param {string} inputData The string that contains the number of characters to generate.
 * @param {array<boolean,string,string>} inputMetaData A map with multiple input parameters:
 *  generateSpecialCharacters - A boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 *  allowableSpecialCharacters - The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} boolean value is set to {@code TRUE}.
 *  specifiedSuffixAndDomain - The specified suffix and domain to use after the "@" symbol in the email being generated, example "Yahoo.com".
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email: "a@b.com".
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateValidEmail1 = generateValidEmail1;

var generateValidEmail2 = function generateValidEmail2(inputData, inputMetaData) {
  var functionName = biz.cgenerateValidEmail2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + JSON.stringify(inputMetaData));

  var returnData = '';
  var allowableSpecialCharacters;
  var generateSpecialCharacters;
  var specifiedSuffixAndDomain;
  var bFalse = false;
  var sEmpty = '';

  if (!!inputMetaData && inputMetaData !== 'undefined' && inputMetaData !== '') {
    if (inputMetaData.length === 3) {
      generateSpecialCharacters = (0, _stringParsing.stringToBoolean)(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1];
      specifiedSuffixAndDomain = inputMetaData[2]; // @NOTE the above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateValidEmailWithSpecificSuffixAndDomainName2(inputData, generateSpecialCharacters, allowableSpecialCharacters, specifiedSuffixAndDomain);
    } else if (inputMetaData.length <= 2) {
      generateSpecialCharacters = (0, _stringParsing.stringToBoolean)(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1]; // @NOTE The above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateRandomValidEmail2(inputData, generateSpecialCharacters, allowableSpecialCharacters);
    } else {
      returnData = generateRandomValidEmail2(inputData, bas.cFalse, wrd.cEmpty);
    }
  } else {
    returnData = generateRandomValidEmail2(inputData, bas.cFalse, wrd.cEmpty);
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateInvalidEmail1
 * @description Generate an invalid random email address composed of a random selection of mixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated, generate them and string them together to the specified length.
 * @param {string} inputData The string that contains the number of characters to generate.
 * @param {array<boolean,string,string>} inputMetaData A map with multiple input parameters:
 *  generateSpecialCharacters - A boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 *  allowableSpecialCharacters - The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} boolean value is set to {@code TRUE}.
 *  specifiedSuffixAndDomain - The specified suffix and domain to use after the "@" symbol in the email being generated, example "Yahoo.com".
 * @return {string} A string of randomly generated mixed case alpha numeric characters and
 * optionally special characters where the length of the string is also defined as one of the input parameters, formeatted as an email: "a@b.com".
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateValidEmail2 = generateValidEmail2;

var generateInvalidEmail1 = function generateInvalidEmail1(inputData, inputMetaData) {
  var functionName = biz.cgenerateInvalidEmail1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var allowableSpecialCharacters;
  var generateSpecialCharacters;
  var specifiedSuffixAndDomain;
  var bFalse = false;
  var sEmpty = '';

  if (!!inputMetaData && inputMetaData !== 'undefined' && inputMetaData !== '') {
    if (inputMetaData.length === 3) {
      generateSpecialCharacters = (0, _stringParsing.stringToBoolean)(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1];
      specifiedSuffixAndDomain = inputMetaData[2]; // @NOTE the above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateInvalidEmailWithSpecificSuffixAndDomainName1(inputData, generateSpecialCharacters, allowableSpecialCharacters, specifiedSuffixAndDomain);
    } else if (inputMetaData.length <= 2) {
      generateSpecialCharacters = (0, _stringParsing.stringToBoolean)(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1]; // @NOTE The above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateRandomInvalidEmail1(inputData, generateSpecialCharacters, allowableSpecialCharacters);
    } else {
      returnData = generateRandomInvalidEmail1(inputData, [bFalse, sEmpty]);
    }
  } else {
    returnData = generateRandomInvalidEmail1(inputData, [bFalse, sEmpty]);
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateInvalidEmail2
 * @description Generate an invalid random email address composed of a random selection of mixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated, generate them and string them together to the specified length.
 * @param {string} inputData The string that contains the number of characters to generate.
 * @param {array<boolean,string,string>} inputMetaData A map with multiple input parameters:
 *  generateSpecialCharacters - A boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 *  allowableSpecialCharacters - The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} boolean value is set to {@code TRUE}.
 *  specifiedSuffixAndDomain - The specified suffix and domain to use after the "@" symbol in the email being generated, example "Yahoo.com".
 * @return {string} A string of randomly generated mixed case alpha numeric characters and
 * optionally special characters where the length of the string is also defined as one of the input parameters, formeatted as an email: "a@b.com".
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


exports.generateInvalidEmail1 = generateInvalidEmail1;

var generateInvalidEmail2 = function generateInvalidEmail2(inputData, inputMetaData) {
  var functionName = biz.cgenerateInvalidEmail2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = '';
  var allowableSpecialCharacters;
  var generateSpecialCharacters;
  var specifiedSuffixAndDomain;
  var bFalse = false;
  var sEmpty = '';

  if (!!inputMetaData && inputMetaData !== 'undefined' && inputMetaData !== '') {
    if (inputMetaData.length === 3) {
      generateSpecialCharacters = (0, _stringParsing.stringToBoolean)(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1];
      specifiedSuffixAndDomain = inputMetaData[2]; // @NOTE the above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateInvalidEmailWithSpecificSuffixAndDomainName2(inputData, generateSpecialCharacters, allowableSpecialCharacters, specifiedSuffixAndDomain);
    } else if (inputMetaData.length <= 2) {
      generateSpecialCharacters = (0, _stringParsing.stringToBoolean)(inputMetaData[0], '');
      allowableSpecialCharacters = inputMetaData[1]; // @NOTE The above function StringToBoolean will default to False if the input is an empty or undefined string.
      // We want to flip it back to True but only if some special characters are passed in.

      if (generateSpecialCharacters === false && allowableSpecialCharacters !== '') {
        generateSpecialCharacters = true;
      }

      returnData = generateRandomInvalidEmail2(inputData, generateSpecialCharacters, allowableSpecialCharacters);
    } else {
      returnData = generateRandomInvalidEmail2(inputData, [bFalse, sEmpty]);
    }
  } else {
    returnData = generateRandomInvalidEmail2(inputData, [bFalse, sEmpty]);
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateValidEmailWithSpecificSuffixAndDomainName1
 * @description Generate a valid eamil composed of a random selection of mmixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param {string} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TRUE}.
 * @param {string} specifiedSuffixAndDomain The specified suffix and domain to use after the "@" symbol in the email being generated, example: "Yahoo.com".
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email: "a@b.com".
 * @NOTE The number of characters in the {@code specifiedSuffixAndDomain} input variable must not exceed the {j@code numberofCharactersToGenerate + 2} or the function/rule will return an empty string.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


exports.generateInvalidEmail2 = generateInvalidEmail2;

var generateValidEmailWithSpecificSuffixAndDomainName1 = function generateValidEmailWithSpecificSuffixAndDomainName1(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters, specifiedSuffixAndDomain) {
  var functionName = biz.cgenerateValidEmailWithSpecificSuffixAndDomainName1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cgenerateSpecialCharactersIs + generateSpecialCharacters);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.callowableSpecialCharactersIs + allowableSpecialCharacters);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cspecifiedSuffixAndDomainIs + specifiedSuffixAndDomain);

  var returnData = '';
  var prefix = '';

  if (numberOfCharactersToGenerate >= specifiedSuffixAndDomain.length + 2 && numberOfCharactersToGenerate >= 6 && specifiedSuffixAndDomain.includes(bas.cDot)) {
    // @NOTE We cannot have less then 6 characters, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbol, the rest of the characters must be generated....and the "." should have already been passed in.
    // First need to figure out how many characters of each we must generate to get the desired final length.
    //
    // So lets remove the characters that we know we are already going to be reserved, the "@" symbol.
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - 1;
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - specifiedSuffixAndDomain.length;

    if (generateSpecialCharacters === false) {
      prefix = generateRandomMixedCaseAlphaNumericCodeByLength1(numberOfCharactersToGenerate, '');
    } else {
      prefix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(numberOfCharactersToGenerate, allowableSpecialCharacters);
    }

    returnData = prefix + bas.cAt + specifiedSuffixAndDomain;
  } else {
    returnData = '';
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateValidEmailWithSpecificSuffixAndDomainName2
 * @description Generate a valid eamil composed of a random selection of mmixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param {string} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TRUE}.
 * @param {string} specifiedSuffixAndDomain The specified suffix and domain to use after the "@" symbol in the email being generated, example: "Yahoo.com".
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email: "a@b.com".
 * @NOTE The number of characters in the {@code specifiedSuffixAndDomain} input variable must not exceed the {j@code numberofCharactersToGenerate + 2} or the function/rule will return an empty string.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


var generateValidEmailWithSpecificSuffixAndDomainName2 = function generateValidEmailWithSpecificSuffixAndDomainName2(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters, specifiedSuffixAndDomain) {
  var functionName = biz.cgenerateValidEmailWithSpecificSuffixAndDomainName2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cgenerateSpecialCharactersIs + generateSpecialCharacters);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.callowableSpecialCharactersIs + allowableSpecialCharacters);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cspecifiedSuffixAndDomainIs + specifiedSuffixAndDomain);

  var returnData = '';
  var prefix = '';

  if (numberOfCharactersToGenerate >= specifiedSuffixAndDomain.length + 2 && numberOfCharactersToGenerate >= 6 && specifiedSuffixAndDomain.includes(bas.cDot)) {
    // @NOTE We cannot have less then 6 characters, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbol, the rest of the characters must be generated....and the "." should have already been passed in.
    // First need to figure out how many characters of each we must generate to get the desired final length.
    //
    // So lets remove the characters that we know we are already going to be reserved, the "@" symbol.
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - 1;
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - specifiedSuffixAndDomain.length;

    if (generateSpecialCharacters === false) {
      prefix = generateRandomMixedCaseAlphaNumericCodeByLength2(numberOfCharactersToGenerate, '');
    } else {
      prefix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(numberOfCharactersToGenerate, allowableSpecialCharacters);
    }

    returnData = prefix + bas.cAt + specifiedSuffixAndDomain;
  } else {
    returnData = '';
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomValidEmail1
 * @description Generate a valid email composed of a random selection of mixed case letters, numeric characters and optional special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param {string} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TRUE}.
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


var generateRandomValidEmail1 = function generateRandomValidEmail1(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters) {
  var functionName = biz.cgenerateRandomValidEmail1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cgenerateSpecialCharactersIs + generateSpecialCharacters);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.callowableSpecialCharactersIs + allowableSpecialCharacters);

  var returnData = '';
  var prefix = '';
  var suffix = '';
  var domainName = '';
  var numberOfPrefixCharacters = 0;
  var numberOfSuffixCharacters = 0; // console.log('Started the execution of the business rule generateRandomValidEmail1');
  // console.log('Number of characters to generate is: ' + numberOfCharactersToGenerate);
  // console.log('Generate special characters flag is set to: ' + generateSpecialCharacters);
  // console.log('Allowable special characters are: ' + allowableSpecialCharacters);

  if (numberOfCharactersToGenerate >= 6) {
    // @NOTE We cannot have less then 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbol, the rest of the characters must be generated.
    // First need to figure out how many characters of each we must generate to get the desired final length.
    //
    // So lets remove the characters that we know are already going to be reserved,  the "@" symbol and the "." symbol.
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2; // Consider that the number of characters in the domain must be either 2 or 3. (according to IpV5, IpV6 is a whole other ball of wax!!)
    // So let us first figure that out, then the rest of the available characters that we must provide can be divided up betwee the prefix and suffix.

    if (numberOfCharactersToGenerate === 4) {
      // Stick with a 2-character domain name.
      if (generateSpecialCharacters === false) {
        domainName = generateRandomMixedCaseTextByLength1(num.c2, '');
      } else {
        domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(num.c2, allowableSpecialCharacters);
      }
    } else if (numberOfCharactersToGenerate >= 5) {
      // Randomly determine if we should generate a 2-character or 3-character domain name. We can do either one,
      // but need to decide now so we can get it done and be fair.
      // (That is generate 2-character domains roughtly equal to the times we generate a 3-character domain.)
      if (charGen.randomlyGenerateBooleanValue1('', '') === true) {
        // Stick with a 2-character domain name.
        if (generateSpecialCharacters === false) {
          domainName = generateRandomMixedCaseTextByLength1(num.c2, '');
        } else {
          domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(num.c2, allowableSpecialCharacters);
        }

        numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
      } else {
        // Do a 3-characterdomain name.
        if (generateSpecialCharacters === false) {
          domainName = generateRandomMixedCaseTextByLength1(num.c3, '');
        } else {
          domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(num.c3, allowableSpecialCharacters);
        }

        numberOfCharactersToGenerate = numberOfCharactersToGenerate - 3;
      }
    } else {
      // @NOTE We should never actually get here, because the {@code numberOfCharactersToGenerate} cannot be less than 6 and 6-2 must be >= 4.
      // Just generate the minimum domain and try to proceed as best as possible as a matter of completeness of the code.
      if (generateSpecialCharacters === false) {
        domainName = generateRandomMixedCaseTextByLength1(num.c2, '');
      } else {
        domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(num.c2, allowableSpecialCharacters);
      }

      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
    } // Remaining number of characters that we must provide to the e-mail must be divided by 2, or the prefix and suffix.


    if (numberOfCharactersToGenerate % 2 === 0) {
      // We have a number that is divisible by 2, so just divide it and that will be the number of characters we use for both the prefix and suffix.
      numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixCharacters;
    } else if (numberOfCharactersToGenerate % 2 === 1) {
      numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixCharacters - 1;
    } else {
      // Should also never get here, as all numbers are either divisible by 2 or not with a remainder of 1.
      // Just do something to see if we can survive, again as a matter of completness of code logic.
      numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixCharacters;
    }

    if (generateSpecialCharacters === false) {
      prefix = generateRandomMixedCaseAlphaNumericCodeByLength1(numberOfPrefixCharacters, '');
    } else {
      prefix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(numberOfPrefixCharacters, allowableSpecialCharacters);
    }

    if (generateSpecialCharacters === false) {
      suffix = generateRandomMixedCaseAlphaNumericCodeByLength1(numberOfSuffixCharacters, '');
    } else {
      suffix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(numberOfSuffixCharacters, allowableSpecialCharacters);
    }

    returnData = prefix + bas.cAt + suffix + bas.cDot + domainName;
  } else {
    returnData = '';
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomValidEmail2
 * @description Generate a valid email composed of a random selection of mixed case letters, numeric characters and optional special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param {string} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TRUE}.
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


var generateRandomValidEmail2 = function generateRandomValidEmail2(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters) {
  var functionName = biz.cgenerateRandomValidEmail2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cgenerateSpecialCharactersIs + generateSpecialCharacters);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.callowableSpecialCharactersIs + allowableSpecialCharacters);

  var returnData = '';
  var prefix = '';
  var suffix = '';
  var domainName = '';
  var numberOfPrefixCharacters = 0;
  var numberOfSuffixCharacters = 0;

  if (numberOfCharactersToGenerate >= 6) {
    // @NOTE We cannot have less then 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbol, the rest of the characters must be generated.
    // First need to figure out how many characters of each we must generate to get the desired final length.
    //
    // So lets remove the characters that we know are already going to be reserved,  the "@" symbol and the "." symbol.
    numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2; // Consider that the number of characters in the domain must be either 2 or 3. (according to IpV5, IpV6 is a whole other ball of wax!!)
    // So let us first figure that out, then the rest of the available characters that we must provide can be divided up betwee the prefix and suffix.

    if (numberOfCharactersToGenerate === 4) {
      // Stick with a 2-character domain name.
      if (generateSpecialCharacters === false) {
        domainName = generateRandomMixedCaseTextByLength2(num.c2, '');
      } else {
        domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(num.c2, allowableSpecialCharacters);
      }
    } else if (numberOfCharactersToGenerate >= 5) {
      // Randomly determine if we should generate a 2-character or 3-character domain name. We can do either one,
      // but need to decide now so we can get it done and be fair.
      // (That is generate 2-character domains roughtly equal to the times we generate a 3-character domain.)
      if (charGen.randomlyGenerateBooleanValue2('', '') === true) {
        // Stick with a 2-character domain name.
        if (generateSpecialCharacters === false) {
          domainName = generateRandomMixedCaseTextByLength2(num.c2, '');
        } else {
          domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(num.c2, allowableSpecialCharacters);
        }

        numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
      } else {
        // Do a 3-characterdomain name.
        if (generateSpecialCharacters === false) {
          domainName = generateRandomMixedCaseTextByLength2(num.c3, '');
        } else {
          domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(num.c3, allowableSpecialCharacters);
        }

        numberOfCharactersToGenerate = numberOfCharactersToGenerate - 3;
      }
    } else {
      // @NOTE We should never actually get here, because the {@code numberOfCharactersToGenerate} cannot be less than 6 and 6-2 must be >= 4.
      // Just generate the minimum domain and try to proceed as best as possible as a matter of completeness of the code.
      if (generateSpecialCharacters === false) {
        domainName = generateRandomMixedCaseTextByLength2(num.c2, '');
      } else {
        domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(num.c2, allowableSpecialCharacters);
      }

      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
    } // Remaining number of characters that we must provide to the e-mail must be divided by 2, or the prefix and suffix.


    if (numberOfCharactersToGenerate % 2 === 0) {
      // We have a number that is divisible by 2, so just divide it and that will be the number of characters we use for both the prefix and suffix.
      numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixCharacters;
    } else if (numberOfCharactersToGenerate % 2 === 1) {
      numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixCharacters - 1;
    } else {
      // Should also never get here, as all numbers are either divisible by 2 or not with a remainder of 1.
      // Just do something to see if we can survive, again as a matter of completness of code logic.
      numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
      numberOfSuffixCharacters = numberOfPrefixCharacters;
    }

    if (generateSpecialCharacters === false) {
      prefix = generateRandomMixedCaseAlphaNumericCodeByLength2(numberOfPrefixCharacters, '');
    } else {
      prefix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(numberOfPrefixCharacters, allowableSpecialCharacters);
    }

    if (generateSpecialCharacters === false) {
      suffix = generateRandomMixedCaseAlphaNumericCodeByLength2(numberOfSuffixCharacters, '');
    } else {
      suffix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(numberOfSuffixCharacters, allowableSpecialCharacters);
    }

    returnData = prefix + bas.cAt + suffix + bas.cDot + domainName;
  } else {
    returnData = '';
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateInvalidEmailWithSpecificSuffixAndDomainName1
 * @description Generate an invalid email composed of a random selection of mixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param {string} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TREUE}.
 * @param {string} specifiedSuffixAndDomain The specified suffix and domain to use after the "@" symbol in the email being generated, example: "Yahoo.com".
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @NOTE The number of characters in the {@code specifiedSuffixAndDomain} input variable must not exceed the {@code numberofCharactersToGenerate + 2} or the function/rule will return an empty string.
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


var generateInvalidEmailWithSpecificSuffixAndDomainName1 = function generateInvalidEmailWithSpecificSuffixAndDomainName1(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters, specifiedSuffixAndDomain) {
  var functionName = biz.cgenerateInvalidEmailWithSpecificSuffixAndDomainName1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cgenerateSpecialCharactersIs + generateSpecialCharacters);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.callowableSpecialCharactersIs + allowableSpecialCharacters);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cspecifiedSuffixAndDomainIs + specifiedSuffixAndDomain);

  var returnData = '';
  var prefix = '';
  var numberOfPrefixCharacters = 0;
  var failureMode = -1; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c3 = num.c3;
  var cTrue = gen.cTrue; // console.log('Started the execution of the business rule generateInvalidEmailWithSpecificSuffixAndDomainName1');
  // console.log('Number of characters to generate is: ' + numberOfCharactersToGenerate);
  // console.log('Generate special characters flag is set to: ' + generateSpecialCharacters);
  // console.log('Allowable special characters are: ' + allowableSpecialCharacters);
  // console.log('Specified suffix and domain are: ' + specifiedSuffixAndDomain);

  failureMode = charGen.randomlyGenerateNumberInRange1(num.c1, [c3, cTrue, cTrue]); // failureMode is:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cfailureModeIs + failureMode); // ************************************************************
  // Failure Mode Legend:
  // ************************************************************
  // intFailureMode =
  // 1 - Without the "@" symbol
  // 2 - Without the prefix
  // 3 - Without the "@" & Prefix
  // @NOTE: Take special note of the code below, and make sure you DO NOT add additional else statements to CYA for various special-use cases.
  // Adding else statements to the end of existing if-else-if statements will break other logic causing many more problems that you might miss when testing.
  // The logic below is pretty much full-proof and will likely not need editing. If you need to handle additional special use cases, I suggest you invent your own email generation function/rule.
  // Feel free to use this one as a reference as to how to do it, or Just leverage the faker tool, which also has a way to generate fake emails.


  if (numberOfCharactersToGenerate >= 6) {
    // We cannot have less then 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "x" symbol, the rest of the characters must be generated.
    // first need to figure out how many characters of each we must generate to get the desired final length.
    switch (failureMode) {
      case 1:
      case num.c1:
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - (specifiedSuffixAndDomain.length + 1);
        break;

      case 2:
      case num.c2:
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - specifiedSuffixAndDomain.length;
        break;

      case 3:
      case num.c3:
        numberOfCharactersToGenerate = 0;
        break;

      default:
        numberOfCharactersToGenerate = 0;
        break;
    } // numberOfCharactersToGenerate is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate); // This is a pretty dumb and stupid way of doing it, but we only have 3 failure modes for this rule.
    // There are basically with and without the prefix, and we've ractored in all the other cases already above.


    numberOfPrefixCharacters = numberOfCharactersToGenerate;

    if (numberOfPrefixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        prefix = generateRandomMixedCaseAlphaNumericCodeByLength1(numberOfPrefixCharacters.toString(), '');
      } else {
        prefix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(numberOfPrefixCharacters.toString(), allowableSpecialCharacters);
      }
    } // prefix is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cprefixIs + prefix);

    switch (failureMode) {
      case 1:
      case num.c1:
        // Without the @ symbol.
        _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbol);

        returnData = prefix + specifiedSuffixAndDomain;
        break;

      case 2:
      case num.c2:
        // Without the prefix.
        _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefix);

        returnData = bas.cAt + specifiedSuffixAndDomain;
        break;

      case 3:
      case num.c3:
        // Without the @ and prefix.
        _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolAndPrefix);

        returnData = specifiedSuffixAndDomain;
        break;

      default:
        // DEFAULT: Without the @ and prefix.
        _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cDEFAULTWithoutTheAtSymbolAndPrefix);

        returnData = specifiedSuffixAndDomain;
        break;
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateInvalidEmailWithSpecificSuffixAndDomainName2
 * @description Generate an invalid email composed of a random selection of mixed case letters, numeric characters and optionally special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param {string} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TREUE}.
 * @param {string} specifiedSuffixAndDomain The specified suffix and domain to use after the "@" symbol in the email being generated, example: "Yahoo.com".
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @NOTE The number of characters in the {@code specifiedSuffixAndDomain} input variable must not exceed the {@code numberofCharactersToGenerate + 2} or the function/rule will return an empty string.
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


var generateInvalidEmailWithSpecificSuffixAndDomainName2 = function generateInvalidEmailWithSpecificSuffixAndDomainName2(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters, specifiedSuffixAndDomain) {
  var functionName = biz.cgenerateInvalidEmailWithSpecificSuffixAndDomainName2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cgenerateSpecialCharactersIs + generateSpecialCharacters);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.callowableSpecialCharactersIs + allowableSpecialCharacters);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cspecifiedSuffixAndDomainIs + specifiedSuffixAndDomain);

  var returnData = '';
  var prefix = '';
  var numberOfPrefixCharacters = 0;
  var failureMode = -1; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c3 = num.c3;
  var cTrue = gen.cTrue; // console.log('Started the execution of the business rule generateInvalidEmailWithSpecificSuffixAndDomainName2');
  // console.log('Number of characters to generate is: ' + numberOfCharactersToGenerate);
  // console.log('Generate special characters flag is set to: ' + generateSpecialCharacters);
  // console.log('Allowable special characters are: ' + allowableSpecialCharacters);
  // console.log('Specified suffix and domain are: ' + specifiedSuffixAndDomain);

  failureMode = charGen.randomlyGenerateNumberInRange2(num.c1, [c3, cTrue, cTrue]); // failureMode is:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cfailureModeIs + failureMode); // ************************************************************
  // Failure Mode Legend:
  // ************************************************************
  // intFailureMode =
  // 1 - Without the "@" symbol
  // 2 - Without the prefix
  // 3 - Without the "@" & Prefix
  // @NOTE: Take special note of the code below, and make sure you DO NOT add additional else statements to CYA for various special-use cases.
  // Adding else statements to the end of existing if-else-if statements will break other logic causing many more problems that you might miss when testing.
  // The logic below is pretty much full-proof and will likely not need editing. If you need to handle additional special use cases, I suggest you invent your own email generation function/rule.
  // Feel free to use this one as a reference as to how to do it, or Just leverage the faker tool, which also has a way to generate fake emails.


  if (numberOfCharactersToGenerate >= 6) {
    // We cannot have less then 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "x" symbol, the rest of the characters must be generated.
    // first need to figure out how many characters of each we must generate to get the desired final length.
    switch (failureMode) {
      case 1:
      case num.c1:
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - (specifiedSuffixAndDomain.length + 1);
        break;

      case 2:
      case num.c2:
        numberOfCharactersToGenerate = numberOfCharactersToGenerate - specifiedSuffixAndDomain.length;
        break;

      case 3:
      case num.c3:
        numberOfCharactersToGenerate = 0;
        break;

      default:
        numberOfCharactersToGenerate = 0;
        break;
    } // This is a pretty dumb and stupid way of doing it, but we only have 3 failure modes for this rule.
    // There are basically with and without the prefix, and we've ractored in all the other cases already above.


    numberOfPrefixCharacters = numberOfCharactersToGenerate; // numberOfCharactersToGenerate is:

    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate);

    if (numberOfPrefixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        prefix = generateRandomMixedCaseAlphaNumericCodeByLength2(numberOfPrefixCharacters.toString(), '');
      } else {
        prefix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(numberOfPrefixCharacters.toString(), allowableSpecialCharacters);
      }
    } // prefix is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cprefixIs + prefix);

    switch (failureMode) {
      case 1:
      case num.c1:
        // Without the @ symbol.
        _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbol);

        returnData = prefix + specifiedSuffixAndDomain;
        break;

      case 2:
      case num.c2:
        // Without the prefix.
        _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefix);

        returnData = bas.cAt + specifiedSuffixAndDomain;
        break;

      case 3:
      case num.c3:
        // Without the @ and prefix.
        _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolAndPrefix);

        returnData = specifiedSuffixAndDomain;
        break;

      default:
        // DEFAULT: Without the @ and prefix.
        _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cDEFAULTWithoutTheAtSymbolAndPrefix);

        returnData = specifiedSuffixAndDomain;
        break;
    }
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomInvalidEmail1
 * @description Generate a valid email composed of a random selection of mixed case letters, numeric characters and optional special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param {string} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TRUE}.
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @NOTE: OLD implementation.
 * @author Seth Hollingsead
 * @date 2020/03/04
 */


var generateRandomInvalidEmail1 = function generateRandomInvalidEmail1(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters) {
  var functionName = biz.cgenerateRandomInvalidEmail1;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cgenerateSpecialCharactersIs + generateSpecialCharacters);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.callowableSpecialCharactersIs + allowableSpecialCharacters);

  var returnData = '';
  var prefix = '';
  var suffix = '';
  var domainName = '';
  var numberOfPrefixCharacters = 0;
  var numberOfSuffixCharacters = 0;
  var numberOfDomainNameCharacters = 0;
  var failureMode = -1; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c28 = num.c2 + num.c8;
  var cTrue = gen.cTrue;
  failureMode = charGen.randomlyGenerateNumberInRange1(num.c1, [c28, cTrue, cTrue]);
  failureMode = parseInt(failureMode); // failureMode is:

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cfailureModeIs + failureMode); // ************************************************************
  // Failure Mode Legend:
  // ************************************************************
  // intFailureMode =
  // 1 - Without the "@" symbol
  // 2 - Without the "." symbol
  // 3 - Without both the "@" & "." symbols
  // 4 - Without the domain name
  // 5 - Without the "@" & domain name
  // 6 - Without the "." & domain name
  // 7 - Without the "@", "." & domain name
  // 8 - Without the prefix
  // 9 - Without the suffix
  // 10- Without the "@" & Prefix
  // 11- Without the "." & Prefix
  // 12- Without the "@" & Suffix
  // 13- Without the "." & Suffix
  // 14- Without the "@", "." & Prefix
  // 15- Without the "@", "." & Suffix
  // 16- Without the "@", ".", Prefix, & Suffix
  // 17- Without the Prefix & domain name
  // 18- Without the Suffix & domain name
  // 19- Without the Prefix & Suffix
  // 20- Without the Prefix, Suffix & domain name
  // 21- Without the "@", Prefix & domain name
  // 22- Without the ".", Prefix & domain name
  // 23- Without the "@", Suffix & domain name
  // 24- Without the ".", Suffix & domain name
  // 25- Without the "@", Prefix, Suffix & domain name
  // 26- Without the ".", Prefix, Suffix & domain name
  // 27- Without the Prefix, Suffix & "@"
  // 28- Without the Prefix, Suffix & "."
  // @NOTE: Take special note of the code below, and make sure you DO NOT add additional else statements to CYA for various special-use cases.
  // Adding else statements to the end of existing if-else-if statements will break other logic causing many more problems that you might miss when testing.
  // The logic below is pretty much full-proof and will likely not need editing. If you need to handle additional special use cases, I suggest you invent your own email generation function/rule.
  // Feel free to use this one as a reference as to how to do it, or Just leverage the faker tool, which also has a way to generate fake emails.


  if (numberOfCharactersToGenerate >= 6) {
    // We cannot have less than 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbo, the rest of the characters must be generated.
    // First need to figure out how many characters of each we must generate to get the desired final length.
    // So lets remove the characters that we know are already going to be reserved, the "@" symbol and the "." symbol, according to the failure mode.
    if (failureMode === 1 || failureMode === 2 || failureMode === 5 || failureMode === 6 || failureMode === 10 || failureMode === 11 || failureMode === 12 || failureMode === 13 || failureMode >= 21) {
      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 1;
    } else if (failureMode === 3 || failureMode === 7 || failureMode === 14 || failureMode === 15 || failureMode === 16) {
      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
    } // numberOfCharactersToGenerate is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate); // Only work generating the domain name if we are not going to be building our invalid email on a missing domain name.


    if (failureMode === 1 || failureMode === 2 || failureMode === 3 || failureMode >= 8 && failureMode <= 16 || failureMode === 19 || failureMode > 27) {
      // Consider that the number of characters in the domain must be either 2 or 3 (according to IpV5, I'm not going to even try touching IpV6!!)
      // So lets first figure that out, then the rest of the available characters that we must provide can be divided up between the prefix and suffix.
      if (numberOfCharactersToGenerate === 4) {
        // Stick with a 2-character domain name.
        if (generateSpecialCharacters === false) {
          domainName = generateRandomMixedCaseTextByLength1(num.c2, ''); // domainName = generateRandomMixedCaseAlphaNumericCodeByLength1(bas.c2, '');
        } else {
          if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
            // domainName = generateRandomMixedCaseTextWithSpecialCharactersByLength1(bas.c2, allowableSpecialCharacters);
            domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(num.c2, allowableSpecialCharacters);
          } else {
            domainName = generateRandomMixedCaseTextByLength1(num.c2, '');
          }
        }

        numberOfCharactersToGenerate = numberOfDomainNameCharacters - 2;
      } else if (numberOfCharactersToGenerate >= 5) {
        // Randomly determine if we should generate a 2-character or 3-character domain name. We can do either one,
        // but need to decide now so we can get it done and be fair.
        // (That is generate 2-character domains roughly equal to the times we generate a 3-character domain.)
        if (charGen.randomlyGenerateBooleanValue1('', '') === true) {
          // Stick with a 2-character domain name.
          if (generateSpecialCharacters === false) {
            domainName = generateRandomMixedCaseTextByLength1(num.c2, '');
          } else {
            if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
              domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(num.c2, allowableSpecialCharacters);
            } else {
              domainName = generateRandomMixedCaseTextByLength1(num.c2, '');
            }
          }

          numberOfCharactersToGenerate = numberOfDomainNameCharacters - 2;
        } else {
          // Do a 3-character domain name.
          if (generateSpecialCharacters === false) {
            domainName = generateRandomMixedCaseTextByLength1(num.c3, '');
          } else {
            if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
              domainNme = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(num.c3, allowableSpecialCharacters);
            } else {
              domainName = generateRandomMixedCaseTextByLength1(num.c3, '');
            }
          }

          numberOfCharactersToGenerate = numberOfDomainNameCharacters - 3;
        }
      }
    } // domainName is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdomainNameIs + domainName); // ONLY do suffix and prefix if our failure modes do not exclude both.


    if (failureMode >= 1 && failureMode <= 7) {
      // Remaining number of characters that we must provide to the e-mail must be divided by 2, for the prefix and suffix.
      if (numberOfCharactersToGenerate % 2 === 0) {
        // We have a number that is divisible by 2, so just divide it and that will be the number of characters we use for both the prefix and suffix.
        numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
        numberOfSuffixCharacters = numberOfPrefixCharacters;
      } else if (numberOfCharactersToGenerate % 2 === 1) {
        numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
        numberOfSuffixCharacters = numberOfPrefixCharacters - 1;
      }
    } else if (failureMode === 8 || failureMode === 10 || failureMode === 11 || failureMode == 14 || failureMode === 17 || failureMode === 21 || failureMode === 22) {
      // Excluding the Prefix
      numberOfSuffixCharacters = numberOfCharactersToGenerate; // Suffix get the remainder!

      numberOfPrefixCharacters = 0;
    } else if (failureMode === 9 || failureMode === 12 || failureMode === 13 || failureMode === 15 || failureMode === 18 || failureMode === 23 || failureMode === 24) {
      // Excluding the Suffix
      numberOfPrefixCharacters = numberOfCharactersToGenerate; // Prefix gets the remainder!

      numberOfSuffixCharacters = 0;
    } // numberOfPrefixCharacters is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfPrefixCharactersIs + numberOfPrefixCharacters); // numberOfSuffixCharacters is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfSuffixCharactersIs + numberOfSuffixCharacters);

    if (numberOfPrefixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        prefix = generateRandomMixedCaseAlphaNumericCodeByLength1(numberOfPrefixCharacters.toString(), '');
      } else {
        if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
          prefix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(numberOfPrefixCharacters.toString(), allowableSpecialCharacters);
        } else {
          prefix = generateRandomMixedCaseAlphaNumericCodeByLength1(numberOfPrefixCharacters.toString(), '');
        }
      }
    } // prefix is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cprefixIs + prefix);

    if (numberOfSuffixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        suffix = generateRandomMixedCaseAlphaNumericCodeByLength1(numberOfSuffixCharacters.toString(), '');
      } else {
        if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
          suffix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(numberOfSuffixCharacters.toString(), allowableSpecialCharacters);
        } else {
          suffix = generateRandomMixedCaseAlphaNumericCodeByLength1(numberOfSuffixCharacters.toString(), '');
        }
      }
    } // suffix is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.csuffixIs + prefix);
  }

  switch (failureMode) {
    case 1:
      // Without the @ symbol.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbol);

      returnData = prefix + suffix + bas.cDot + domainName;
      break;

    case 2:
      // Without the . symbol.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotSymbol);

      returnData = prefix + bas.cAt + suffix + domainName;
      break;

    case 3:
      // Without both the @ and . symbols.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtAndDotSymbols);

      returnData = prefix + suffix + domainName;
      break;

    case 4:
      // Without the domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDomainName);

      returnData = prefix + bas.cAt + suffix + bas.cDot;
      break;

    case 5:
      // Without the @ and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolAndDomainName);

      returnData = prefix + suffix + bas.cDot + domainName;
      break;

    case 6:
      // Without the . and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotAndDomainName);

      returnData = prefix + bas.cAt + suffix;
      break;

    case 7:
      // Without the @, . and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolDotAndDomainName);

      returnData = prefix + suffix;
      break;

    case 8:
      // Without the prefix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefix);

      returnData = bas.cAt + suffix + bas.cDot + domainName;
      break;

    case 9:
      // Without the suffix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheSuffix);

      returnData = prefix + bas.cAt + bas.cDot + domainName;
      break;

    case 10:
      // Without the @ and prefix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolAndPrefix);

      returnData = suffix + bas.cDot + domainName;
      break;

    case 11:
      // Without the . and prefix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotAndPrefix);

      returnData = bas.cAt + suffix + domainName;
      break;

    case 12:
      // Without the @ and suffix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolAndSuffix);

      returnData = prefix + bas.cDot + domainName;
      break;

    case 13:
      // Without the . and suffix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotAndSuffix);

      returnData = prefix + bas.cAt + domainName;
      break;

    case 14:
      // Without the @, . and prefix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolDotAndPrefix);

      returnData = suffix + domainName;
      break;

    case 15:
      // Without the @, . and suffix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolDotAndSuffix);

      returnData = prefix + domainName;
      break;

    case 16:
      // Without the @, ., prefix, and suffix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolDotPrefixAndSuffix);

      returnData = domainName;
      break;

    case 17:
      // Without the prefix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefixAndDomainName);

      returnData = bas.cAt + suffix + bas.cDot;
      break;

    case 18:
      // Without the suffix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheSuffixAndDomainName);

      returnData = prefix + bas.cAt + bas.cDot;
      break;

    case 19:
      // Without the prefix and suffix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefixAndSuffix);

      returnData = bas.cAt + bas.cDot + domainName;
      break;

    case 20:
      // Without the prefix, suffix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefixSuffixAndDomainName);

      returnData = bas.cAt + bas.cDot;
      break;

    case 21:
      // Without the @, prefix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolPrefixAndDomainName);

      returnData = suffix + bas.cDot;
      break;

    case 22:
      // Without the ., prefix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotPrefixAndDomainName);

      returnData = bas.cAt + suffix;
      break;

    case 23:
      // Without the @, suffix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolSuffixAndDomainName);

      returnData = prefix + bas.cDot;
      break;

    case 24:
      // Without the ., suffix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotSuffixAndDomainName);

      returnData = prefix + bas.cAt + bas.cDot;
      break;

    case 25:
      // Without the @, prefix, suffix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolPrefixSuffixAndDomainName);

      returnData = bas.cDot;
      break;

    case 26:
      // Without the ., prefix, suffix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotPrefixSuffixAndDomainName);

      returnData = bas.cAt;
      break;

    case 27:
      // Without the prefix, suffix and @.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefixSuffixAndAtSymbol);

      returnData = bas.cDot + domainName;
      break;

    case 28:
      // Without the prefix, suffix and ..
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefixSuffixAndDot);

      returnData = bas.cAt + domainName;
      break;
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomInvalidEmail2
 * @description Generate a valid email composed of a random selection of mixed case letters, numeric characters and optional special characters
 * from an optional list of allowable special characters, should be generated; generate them and string them together to the specified length.
 * @param {integer} numberOfCharactersToGenerate The number of characters to generate as an integer.
 * @param {boolean} generateSpecialCharacters A Boolean value to indicate if special characters should be included when randomly generating characters for the output string.
 * @param {string} allowableSpecialCharacters The list of allowable special characters as a string, only used if the {@code generateSpecialCharacters} Boolean value is set to {@code TRUE}.
 * @return {string} A string of randomly generated mixed case alpha numeric characters and optionally special characters
 * where the length of the string is also defined as one of the input parameters, formatted as an email "a@b.com".
 * @NOTE: NEW implementation
 * @author Seth Hollingsead
 * @date 2020/05/19
 */


var generateRandomInvalidEmail2 = function generateRandomInvalidEmail2(numberOfCharactersToGenerate, generateSpecialCharacters, allowableSpecialCharacters) {
  var functionName = biz.cgenerateRandomInvalidEmail2;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cgenerateSpecialCharactersIs + generateSpecialCharacters);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.callowableSpecialCharactersIs + allowableSpecialCharacters);

  var returnData = '';
  var prefix = '';
  var suffix = '';
  var domainName = '';
  var numberOfPrefixCharacters = 0;
  var numberOfSuffixCharacters = 0;
  var numberOfDomainNameCharacters = 0;
  var failureMode = -1; // NOTE: Cannot have a "." as part of a variable name in a {set}

  var c28 = num.c2 + num.c8;
  var cTrue = gen.cTrue;
  failureMode = charGen.randomlyGenerateNumberInRange2(num.c1, [c28, cTrue, cTrue]);
  failureMode = parseInt(failureMode); // failureModeIs

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cfailureModeIs + failureMode); // ************************************************************
  // Failure Mode Legend:
  // ************************************************************
  // intFailureMode =
  // 1 - Without the "@" symbol
  // 2 - Without the "." symbol
  // 3 - Without both the "@" & "." symbols
  // 4 - Without the domain name
  // 5 - Without the "@" & domain name
  // 6 - Without the "." & domain name
  // 7 - Without the "@", "." & domain name
  // 8 - Without the prefix
  // 9 - Without the suffix
  // 10- Without the "@" & Prefix
  // 11- Without the "." & Prefix
  // 12- Without the "@" & Suffix
  // 13- Without the "." & Suffix
  // 14- Without the "@", "." & Prefix
  // 15- Without the "@", "." & Suffix
  // 16- Without the "@", ".", Prefix, & Suffix
  // 17- Without the Prefix & domain name
  // 18- Without the Suffix & domain name
  // 19- Without the Prefix & Suffix
  // 20- Without the Prefix, Suffix & domain name
  // 21- Without the "@", Prefix & domain name
  // 22- Without the ".", Prefix & domain name
  // 23- Without the "@", Suffix & domain name
  // 24- Without the ".", Suffix & domain name
  // 25- Without the "@", Prefix, Suffix & domain name
  // 26- Without the ".", Prefix, Suffix & domain name
  // 27- Without the Prefix, Suffix & "@"
  // 28- Without the Prefix, Suffix & "."
  // @NOTE: Take special note of the code below, and make sure you DO NOT add additional else statements to CYA for various special-use cases.
  // Adding else statements to the end of existing if-else-if statements will break other logic causing many more problems that you might miss when testing.
  // The logic below is pretty much full-proof and will likely not need editing. If you need to handle additional special use cases, I suggest you invent your own email generation function/rule.
  // Feel free to use this one as a reference as to how to do it, or Just leverage the faker tool, which also has a way to generate fake emails.


  if (numberOfCharactersToGenerate >= 6) {
    // We cannot have less than 6, because an e-mail address cannot be shorter than a@b.cc which is 6 characters long.
    // We know we have to use an "@" symbol, and a "." symbo, the rest of the characters must be generated.
    // First need to figure out how many characters of each we must generate to get the desired final length.
    // So lets remove the characters that we know are already going to be reserved, the "@" symbol and the "." symbol, according to the failure mode.
    if (failureMode === 1 || failureMode === 2 || failureMode === 5 || failureMode === 6 || failureMode === 10 || failureMode === 11 || failureMode === 12 || failureMode === 13 || failureMode >= 21) {
      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 1;
    } else if (failureMode === 3 || failureMode === 7 || failureMode === 14 || failureMode === 15 || failureMode === 16) {
      numberOfCharactersToGenerate = numberOfCharactersToGenerate - 2;
    } // numberOfCharactersToGenerate is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfCharactersToGenerateIs + numberOfCharactersToGenerate); // Only work generating the domain name if we are not going to be building our invalid email on a missing domain name.


    if (failureMode === 1 || failureMode === 2 || failureMode === 3 || failureMode >= 8 && failureMode <= 16 || failureMode === 19 || failureMode > 27) {
      // Consider that the number of characters in the domain must be either 2 or 3 (according to IpV5, I'm not going to even try touching IpV6!!)
      // So lets first figure that out, then the rest of the available characters that we must provide can be divided up between the prefix and suffix.
      if (numberOfCharactersToGenerate === 4) {
        // Stick with a 2-character domain name.
        if (generateSpecialCharacters === false) {
          domainName = generateRandomMixedCaseTextByLength2(num.c2, ''); // domainName = generateRandomMixedCaseAlphaNumericCodeByLength1(bas.c2, '');
        } else {
          if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
            // domainName = generateRandomMixedCaseTextWithSpecialCharactersByLength1(bas.c2, allowableSpecialCharacters);
            domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(num.c2, allowableSpecialCharacters);
          } else {
            domainName = generateRandomMixedCaseTextByLength2(num.c2, ''); // domainName = generateRandomMixedCaseAlphaNumericCodeByLength1(bas.c2, '');
          }
        }

        numberOfCharactersToGenerate = numberOfDomainNameCharacters - 2;
      } else if (numberOfCharactersToGenerate >= 5) {
        // Randomly determine if we should generate a 2-character or 3-character domain name. We can do either one,
        // but need to decide now so we can get it done and be fair.
        // (That is generate 2-character domains roughly equal to the times we generate a 3-character domain.)
        if (charGen.randomlyGenerateBooleanValue2('', '') === true) {
          // Stick with a 2-character domain name.
          if (generateSpecialCharacters === false) {
            domainName = generateRandomMixedCaseTextByLength2(num.c2, '');
          } else {
            if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
              domainName = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(num.c2, allowableSpecialCharacters);
            } else {
              domainName = generateRandomMixedCaseTextByLength2(num.c2, '');
            }
          }

          numberOfCharactersToGenerate = numberOfDomainNameCharacters - 2;
        } else {
          // Do a 3-character domain name.
          if (generateSpecialCharacters === false) {
            domainName = generateRandomMixedCaseTextByLength2(num.c3, '');
          } else {
            if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
              domainNme = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(num.c3, allowableSpecialCharacters);
            } else {
              domainName = generateRandomMixedCaseTextByLength2(num.c3, '');
            }
          }

          numberOfCharactersToGenerate = numberOfDomainNameCharacters - 3;
        }
      }
    } // domainName is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cdomainNameIs + domainName); // ONLY do suffix and prefix if our failure modes do not exclude both.


    if (failureMode >= 1 && failureMode <= 7) {
      // Remaining number of characters that we must provide to the e-mail must be divided by 2, for the prefix and suffix.
      if (numberOfCharactersToGenerate % 2 === 0) {
        // We have a number that is divisible by 2, so just divide it and that will be the number of characters we use for both the prefix and suffix.
        numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
        numberOfSuffixCharacters = numberOfPrefixCharacters;
      } else if (numberOfCharactersToGenerate % 2 === 1) {
        numberOfPrefixCharacters = numberOfCharactersToGenerate / 2;
        numberOfSuffixCharacters = numberOfPrefixCharacters - 1;
      }
    } else if (failureMode === 8 || failureMode === 10 || failureMode === 11 || failureMode == 14 || failureMode === 17 || failureMode === 21 || failureMode === 22) {
      // Excluding the Prefix
      numberOfSuffixCharacters = numberOfCharactersToGenerate; // Suffix get the remainder!

      numberOfPrefixCharacters = 0;
    } else if (failureMode === 9 || failureMode === 12 || failureMode === 13 || failureMode === 15 || failureMode === 18 || failureMode === 23 || failureMode === 24) {
      // Excluding the Suffix
      numberOfPrefixCharacters = numberOfCharactersToGenerate; // Prefix gets the remainder!

      numberOfSuffixCharacters = 0;
    } // numberOfPrefixCharacters is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfPrefixCharactersIs + numberOfPrefixCharacters); // numberOfSuffixCharacters is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cnumberOfSuffixCharactersIs + numberOfSuffixCharacters);

    if (numberOfPrefixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        prefix = generateRandomMixedCaseAlphaNumericCodeByLength2(numberOfPrefixCharacters.toString(), '');
      } else {
        if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
          prefix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(numberOfPrefixCharacters.toString(), allowableSpecialCharacters);
        } else {
          prefix = generateRandomMixedCaseAlphaNumericCodeByLength2(numberOfPrefixCharacters.toString(), '');
        }
      }
    } // prefix is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cprefixIs + prefix);

    if (numberOfSuffixCharacters > 0) {
      if (generateSpecialCharacters === false) {
        suffix = generateRandomMixedCaseAlphaNumericCodeByLength2(numberOfSuffixCharacters.toString(), '');
      } else {
        if (!!allowableSpecialCharacters && allowableSpecialCharacters !== undefined) {
          suffix = generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(numberOfSuffixCharacters.toString(), allowableSpecialCharacters);
        } else {
          suffix = generateRandomMixedCaseAlphaNumericCodeByLength2(numberOfSuffixCharacters.toString(), '');
        }
      }
    } // suffix is:


    _loggers["default"].consoleLog(namespacePrefix + functionName, msg.csuffixIs + prefix);
  }

  switch (failureMode) {
    case 1:
      // Without the @ symbol.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbol);

      returnData = prefix + suffix + bas.cDot + domainName;
      break;

    case 2:
      // Without the . symbol.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotSymbol);

      returnData = prefix + bas.cAt + suffix + domainName;
      break;

    case 3:
      // Without both the @ and . symbols.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtAndDotSymbols);

      returnData = prefix + suffix + domainName;
      break;

    case 4:
      // Without the domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDomainName);

      returnData = prefix + bas.cAt + suffix + bas.cDot;
      break;

    case 5:
      // Without the @ and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolAndDomainName);

      returnData = prefix + suffix + bas.cDot + domainName;
      break;

    case 6:
      // Without the . and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotAndDomainName);

      returnData = prefix + bas.cAt + suffix;
      break;

    case 7:
      // Without the @, . and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolDotAndDomainName);

      returnData = prefix + suffix;
      break;

    case 8:
      // Without the prefix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefix);

      returnData = bas.cAt + suffix + bas.cDot + domainName;
      break;

    case 9:
      // Without the suffix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheSuffix);

      returnData = prefix + bas.cAt + bas.cDot + domainName;
      break;

    case 10:
      // Without the @ and prefix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolAndPrefix);

      returnData = suffix + bas.cDot + domainName;
      break;

    case 11:
      // Without the . and prefix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotAndPrefix);

      returnData = bas.cAt + suffix + domainName;
      break;

    case 12:
      // Without the @ and suffix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolAndSuffix);

      returnData = prefix + bas.cDot + domainName;
      break;

    case 13:
      // Without the . and suffix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotAndSuffix);

      returnData = prefix + bas.cAt + domainName;
      break;

    case 14:
      // Without the @, . and prefix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolDotAndPrefix);

      returnData = suffix + domainName;
      break;

    case 15:
      // Without the @, . and suffix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolDotAndSuffix);

      returnData = prefix + domainName;
      break;

    case 16:
      // Without the @, ., prefix, and suffix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolDotPrefixAndSuffix);

      returnData = domainName;
      break;

    case 17:
      // Without the prefix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefixAndDomainName);

      returnData = bas.cAt + suffix + bas.cDot;
      break;

    case 18:
      // Without the suffix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheSuffixAndDomainName);

      returnData = prefix + bas.cAt + bas.cDot;
      break;

    case 19:
      // Without the prefix and suffix.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefixAndSuffix);

      returnData = bas.cAt + bas.cDot + domainName;
      break;

    case 20:
      // Without the prefix, suffix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefixSuffixAndDomainName);

      returnData = bas.cAt + bas.cDot;
      break;

    case 21:
      // Without the @, prefix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolPrefixAndDomainName);

      returnData = suffix + bas.cDot;
      break;

    case 22:
      // Without the ., prefix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotPrefixAndDomainName);

      returnData = bas.cAt + suffix;
      break;

    case 23:
      // Without the @, suffix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolSuffixAndDomainName);

      returnData = prefix + bas.cDot;
      break;

    case 24:
      // Without the ., suffix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotSuffixAndDomainName);

      returnData = prefix + bas.cAt + bas.cDot;
      break;

    case 25:
      // Without the @, prefix, suffix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheAtSymbolPrefixSuffixAndDomainName);

      returnData = bas.cDot;
      break;

    case 26:
      // Without the ., prefix, suffix and domain name.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutTheDotPrefixSuffixAndDomainName);

      returnData = bas.cAt;
      break;

    case 27:
      // Without the prefix, suffix and @.
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefixSuffixAndAtSymbol);

      returnData = bas.cDot + domainName;
      break;

    case 28:
      // Without the prefix, suffix and ..
      _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cWithoutThePrefixSuffixAndDot);

      returnData = bas.cAt + domainName;
      break;
  }

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + returnData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomBrightColor
 * @description Generates a random set of RGB values in the bright color spectrum range.
 * Originally I thought to generate just a bright color, but dividing the spectrum straight in half resulted in mostly drab colors.
 * So I adjusted this function to use the inputs to provide a narrow range of bright values that can be generated.
 * This makes the function nearly identical to the same function that generates random dark colors.
 * Really the only different is the default values. So this function is refactored to call a generic random color generator business rule.
 * @param {string|integer} inputData Not used for this business rule.
 * @param {string|integer} inputMetaData Not used for this business rule.
 * @return {array<integers>} An array of RGB values in the bright color spectrum range.
 * @author Seth Hollingsead
 * @date 2021/02/23
 */


var generateRandomBrightColor = function generateRandomBrightColor(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomBrightColor;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = [255, 255, 255];
  var minimumColorRange = 127;
  var maximumColorRange = 255;
  var parsedColorRangeArray = [];

  if (inputData && inputMetaData && inputData !== '' && inputMetaData !== '') {
    // Try to parse them as numbers for the range.
    parsedColorRangeArray = aryParse.parseColorRangeInputs(inputData, inputMetaData);
    minimumColorRange = parsedColorRangeArray[0];
    maximumColorRange = parsedColorRangeArray[1];
  }

  returnData = generateRandomColor(minimumColorRange, maximumColorRange);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomDarkColor
 * @description Generates a random set of RGB values in the dark color spectrum range.
 * Originally I thought to generate just a dark color, but dividing the spectrum straight in half resulted in mostly drab colors.
 * So I adjusted this function to use the inputs to provide a narrow range of dark values that can be generated.
 * This makes the function nearly identical to the same function that generates random bright colors.
 * Really the only different is the default values. So this function is refactored to call a generic random color generator business rule.
 * @param {string|integer} inputData The number in either numeric or string format that represents the minimum range that should be used to generate the random color.
 * @param {string|integer} inputMetaData The number in either numeric or string format that represents the maximum range that should be used to generate the random color.
 * @return {array<integers>} An array of RGB values in the dark color spectrum range.
 * @author Seth Hollingsead
 * @date 2021/02/23
 */


exports.generateRandomBrightColor = generateRandomBrightColor;

var generateRandomDarkColor = function generateRandomDarkColor(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomDarkColor;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = [0, 0, 0];
  var minimumColorRange = 0;
  var maximumColorRange = 127;
  var parsedColorRangeArray = [];

  if (inputData && inputMetaData && inputData !== '' && inputMetaData !== '') {
    // Try to parse them as numbers for the range.
    parsedColorRangeArray = aryParse.parseColorRangeInputs(inputData, inputMetaData);
    minimumColorRange = parsedColorRangeArray[0];
    maximumColorRange = parsedColorRangeArray[1];
  }

  returnData = generateRandomColor(minimumColorRange, maximumColorRange);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};
/**
 * @function generateRandomColor
 * @description Generates a random set of RGB values in the given color range.
 * @param {string|integer} inputData The number in either numeric or string format that represents the minimum range that should be used to generate the random color.
 * @param {string|integer} inputMetaData The number in either numeric or string format that represents the maximum range that should be used to generate the random color.
 * @return {array<integers>} An array of RGB values in the dark color spectrum range.
 * @author Seth Hollingsead
 * @date 2021/02/23
 */


exports.generateRandomDarkColor = generateRandomDarkColor;

var generateRandomColor = function generateRandomColor(inputData, inputMetaData) {
  var functionName = biz.cgenerateRandomColor;

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputDataIs + inputData);

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);

  var returnData = [0, 0, 0];
  var minimumColorRange = 0;
  var maximumColorRange = 0;
  var parsedColorRangeArray = [];

  if (inputData && inputMetaData && inputData !== '' && inputMetaData !== '') {
    // Try to parse them as numbers for the range.
    parsedColorRangeArray = aryParse.parseColorRangeInputs(inputData, inputMetaData);
    minimumColorRange = parsedColorRangeArray[0];
    maximumColorRange = parsedColorRangeArray[1];
  } // minimumColorRange is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cminimumColorRangeIs + minimumColorRange); // maximumColorRange is:


  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cmaximumColorRangeIs + maximumColorRange);

  returnData[0] = charGen.randomlyGenerateNumberInRange2(minimumColorRange.toString(), [maximumColorRange.toString(), gen.ctrue, gen.ctrue]); // Red

  returnData[1] = charGen.randomlyGenerateNumberInRange2(minimumColorRange.toString(), [maximumColorRange.toString(), gen.ctrue, gen.ctrue]); // Green

  returnData[2] = charGen.randomlyGenerateNumberInRange2(minimumColorRange.toString(), [maximumColorRange.toString(), gen.ctrue, gen.ctrue]); // Blue

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));

  _loggers["default"].consoleLog(namespacePrefix + functionName, msg.cEND_Function);

  return returnData;
};

exports.generateRandomColor = generateRandomColor;