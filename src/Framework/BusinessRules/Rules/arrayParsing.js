// NOTE: DO NOT directly import this library to your script(s).
// please call via the RuleBroker.js.

/**
 * @file arrayParsing.js
 * @module arrayParsing
 * @description Contains all system defined business rules for parsing arrays with various operations.
 * @requires module:configurator
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:system-constants
 * @author Seth Hollingsead
 * @date 2021/02/14
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import configurator from '../../Executrix/configurator';
import loggers from '../../Executrix/loggers';
import * as strParse from './stringParsing';
import * as b from '../../Constants/basic.constants';
import * as s from '../../Constants/system.constants';

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
export const replaceCharacterWithCharacter = function(inputData, inputMetaData) {
  // console.log('BEGIN arrayParsing.replaceCharacterWithCharacter function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + JSON.stringify(inputMetaData));
  let functionName = s.creplaceCharacterWithCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  let character2Find = inputMetaData[0];
  let character2Replace = inputMetaData[1];
  if (!inputData && !character2Find && !character2Replace) {
    returnData = false;
  } else {
    returnData = inputData.replace(character2Find, character2Replace);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END arrayParsing.replaceCharacterWithCharacter function');
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
export const convertCamelCaseStringToArray = function(inputData, inputMetaData) {
  let functionName = s.cconvertCamelCaseStringToArray;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  let caps = [];
  for (let i = 1; i < inputData.length; i++) {
    if (g.cUpperCaseEnglishAlphabet.includes(inputData.charAt(i))) { caps.push(i); }
  }
  if (caps.length > 0) {
    let last = 0;
    let decomposedString = [];
    for (let j = 0; j < caps.length; j++) {
      decomposedString.push(inputData.slice(last, caps[j]));
      last = caps[j];
    }
    decomposedString.push(inputData.slice(last));
    returnData = decomposedString;
  } else {
    returnData = [inputData];
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const getWordsArrayFromString = function(inputData, inputMetaData) {
  let functionName = s.cgetWordsArrayFromString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData) {
    if (strParse.getWordCountInString(inputData, '') > 0) {
      let wordDelimiter = strParse.determineWordDelimiter(inputData, inputMetaData);
      let stringContainsAcronym = strParse.doesStringContainAcronym(inputData, '');
      if (wordDelimiter === s.cCamelCase && stringContainsAcronym === false) {
        returnData = convertCamelCaseStringToArray(inputData, '');
      } else if (wordDelimiter != '' && wordDelimiter != s.cCamelCase) {
        returnData = inputData.split(wordDelimiter);
      } else {
        // We don't need to be showing this warning unless we are debugging.
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cGetWordsArrayFromStringMessage1 + s.cGetWordsArrayFromStringMessage2 + s.cGetWordsArrayFromStringMessage3);
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const recombineStringArrayWithSpaces = function(inputData, inputMetaData) {
  let functionName = s.crecombineStringArrayWithSpaces;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData[1];
    for (let i = 2; i < inputData.length; i++) {
        returnData = returnData + b.cSpace + inputData[i];
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
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
  let functionName = s.cconvertArrayToCamelCaseString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    returnData = inputData.map((key, index) => strParse.mapWordToCamelCaseWord(key, index));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function doesArrayContainLowerCaseConsolidatedString
 * @description Checks if an array contains a string, comparison made by lowerCaseAndConsolidateString().
 * @param {array<string>} inputData The array of strings that should be checked if it contains the specified string.
 * @param {string} inputMetaData The string we are looking for in the array.
 * @return {boolean} A Boolean to indicate if the string is found in the array or not.
 * @NOTE Duplicated code in the app.js file,
 * because the app.js code does not support calling and importing ES6 code from CommonJS code.
 * @author Seth Hollingsead
 * @date 2020/02/10
 */
export const doesArrayContainLowerCaseConsolidatedString = function(inputData, inputMetaData) {
  let functionName = s.cdoesArrayContainLowerCaseConsolidatedString;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    // I'm not sure if value1 & value2 below should be referanced to inputData & inputMetaData?
    // I get the arrow function is passing these values to the strParse.aggregateNumericalDifferenceBetweenTwoStrings function.
    // But I'm not sure how or what values are being passed for value1 & value2.
    let stringDelta = (value1, value2) => strParse.aggregateNumericalDifferenceBetweenTwoStrings(value1, value2) < 2;
    // stringDelta value is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cstringDeltaValueIs + stringDelta);
    returnData = doesArrayContainValue(inputData, inputMetaData, stringDelta);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
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
export const doesArrayContainCharacter = function(inputData, inputMetaData) {
  let functionName = s.cdoesArrayContainCharacter;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    for (let i = 0; i < inputMetaData.length; i++) {
      let arrayElement = inputMetaData[i];
      if (arrayElement.includes(inputData) === true) {
        returnData = true;
        break;
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
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
export const removeCharacterFromArray = function(inputData, inputMetaData) {
  let functionName = s.cremoveCharacterFromArray;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    for (let i = 0; i < inputMetaData.length; i++) {
      let arrayElement = inputMetaData[i];
      if (arrayElement.includes(inputData) === true) {
        // replaceCharacterWithCharacter Use this to parse the string and remove all characters that match.
        // replaceCharacterWithCharacter(inputData, [/:/g, b.cUnderscore]);
        inputMetaData[i] = replaceCharacterWithCharacter(arrayElement, [RegExp('\\' + inputData, b.cg), '']);
      }
    }
    returnData = inputMetaData;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
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
export const ascertainMatchingElements = function(inputData, inputMetaData) {
  let functionName = s.cascertainMatchingElements;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData && inputMetaData) {
    if (inputData === inputMetaData) {
      // Array elements match
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cArrayElementsMatch);
      returnData = true;
    } else {
      // Array elements do not match
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cArrayElementsDoNotMatch);
      returnData = false;
    }
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
 * @author Seth Hollingsead
 * @date 2020/02/10
 */
export const doesArrayContainFilename = function(inputData, inputMetaData) {
  let functionName = s.cdoesArrayContainFilename;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  // NOTE: This call doesn't actually work, it may have worked at one time, but it doesn't work now.
  // And I'm not going to spend the time trying to figure out why,
  // when it will be much simpler to just call that same function in a loop to figure out the result.
  returnData = doesArrayContainValue(inputData, inputMetaData, ascertainMatchingFilenames);

  // NOTE: The below code also works, I am going to attempt to re-enable the above code and see if it also works.
  // YES! This is a second way of doing the same thing. If the above code ever has a problem, we can fall back to this method.
  // for (let i = 0; i < inputData.length; i++) {
  //   if (ascertainMatchingFilenames(inputData[i], inputMetaData) === true) {
  //     returnData = true;
  //     break;
  //   }
  // }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const getLengthOfLongestStringInArray = function(inputData, inputMetaData) {
  let functionName = s.cgetLengthOfLongestStringInArray;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = 0;
  if (inputData) {
    returnData = Math.max(...(inputData.map(el => el.length)));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const searchForPatternsInStringArray = function(inputData, inputMetaData) {
  let functionName = s.csearchForPatternsInStringArray;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false; // Set it to false just in case invalid data was passed into this function.
  if (inputData && inputData.length > 0) {
    returnData = []; // Reset it to an empty array, the input data has something in it so we should be able to process it.
    let maxStringLength = getLengthOfLongestStringInArray(inputData, '') - 1;
    // maxStringLength is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cmaxStringLengthIs + maxStringLength);
    let minStringLength = 3;
    // minStringLength is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cminStringLengthIs + minStringLength);
    for (let a = 0; a < inputData.length; a++) { // Initial high-level loop over each of the array elements. (This is the source string for the comparison)
      let currentMasterStringArrayElement = inputData[a];
      // currentMasterStringArrayElement is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccurrentMasterStringArrayElementIs + currentMasterStringArrayElement);
      if (currentMasterStringArrayElement.includes(b.cSpace) === false) {
        // currentMasterStringArrayElement does not contain a space character
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cSearchForPatternsInStringArrayMessage1);
        // NOTE: All of the other loggers.consolelog below this are not actually getting called for some reason.
        // That is why I have added the hard-coded console Logs, but really they only need to be enabled if this function needs to be debugged.
        // It's difficult to debug these because they really dump a LOT of data to the output.
        // The only real way to debug larger data sets would be to force the output to a log file.
        // A small data-set might be possible to debug.
        // Loop over the length of the string we need to compare.
        for (let b = minStringLength; b <= maxStringLength; b++) { // b will now hold the length of the string we are using to compare.
          // loggers.consoleLog(baseFileName + b.cDot + functionName, 'length of string to compare is: ' + toString(b));
          // console.log('length of string to compare is: ' + b);
          // First make sure that the length of our master string is less than or equal to the length of j, otherwise we will just skip to the next.
          if (currentMasterStringArrayElement.length <= b) {
            // loggers.consoleLog(baseFileName + b.cDot + functionName, 'currentMasterStringArrayElement.length is less than b');
            // console.log('currentMasterStringArrayElement.length is less than b');
            // Loop again for the length of the current string - 3 (minStringLength)
            // Each loop will determine our currentComparisonString (which will be used when we actually iterate over the array in our search)
            for (let c = 0; c <= currentMasterStringArrayElement.length - minStringLength; c++) { // loop through each set of strings in the master comparison string.
              // loggers.consoleLog(baseFileName + b.cDot + functionName, 'c value is: ' + c);
              // console.log('c value is: ' + c);
              // Now here we should be able to finally compute the beginning and ending of the indexes for the string we want to use for comparison.
              let beginningIndex = c;
              // loggers.consoleLog(baseFileName + b.cDot + functionName, 'beginningIndex is: ' + beginningIndex);
              // console.log('beginningIndex is: ' + beginningIndex);
              let endingIndex = c + b;
              // loggers.consoleLog(baseFileName + b.cDot + functionName, 'endingIndex is: ' + endingIndex);
              // console.log('endingIndex is: ' + endingIndex);
              let stringToCompare = currentMasterStringArrayElement.substring(beginningIndex, endingIndex);
              // loggers.consoleLog(baseFileName + b.cDot + functionName, 'stringToCompare is: ' + stringToCompare);
              // console.log('stringToCompare is: ' + stringToCompare);
              // Now we need another loop to go over all of the array elements, make sure we always ignore the current array element.
              for (let d = 0; d < inputData.length; d++) {
                // loggers.consoleLog(baseFileName + b.cDot + functionName, 'd value is: ' + d);
                // console.log('d value is: ' + d);
                if (d != a) {
                  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'd != a');
                  // console.log('d != a');
                  let otherStringToCompare = inputData[d];
                  // loggers.consoleLog(baseFileName + b.cDot + functionName, 'otherStringToCompare is: ' + otherStringToCompare);
                  // console.log('otherStringToCompare is: ' + otherStringToCompare);
                  if (otherStringToCompare.includes(stringToCompare)) {
                    // loggers.consoleLog(baseFileName + b.cDot + functionName, 'FOUND A MATCH!!!!');
                    // console.log('FOUND A MATCH!!!! ' + stringToCompare);
                    // Here we have found a match amoung brothers. We need to see if this stringToCompare has already been added to the returnData array.
                    if (doesArrayContainValue(returnData, stringToCompare, aryParse.ascertainMatchingElements) === false) {
                      returnData.push(stringToCompare);
                    } // End-if if (doesArrayContainValue(returnData, stringToCompare, aryParse.ascertainMatchingElements) === false)
                  } // End-if (otherStringToCompare.includes(stringToCompare))
                } // End-if (d != a)
              } // End-for (let d = 0; d < inputData.length; d++)
            } // End-for (let c = 0; c <= currentMasterStringArrayElement.length - minStringLength; c++)
          } // End-if (currentMasterStringArrayElement <= b)
        } // End-for (let b = minStringLength; b <= maxStringLength; b++) {
      } else { // Else-clause if (currentMasterStringArrayElement.includes(b.cSpace) === false)
        // WARNING: The current string being searched contains a space character, we are going to skip comparison.
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cSearchForPatternsInStringArrayMessage2 + s.cSearchForPatternsInStringArrayMessage3);
      }
    } // End-for (let a = 0; a < inputData.length; a++)
  } else { // Else-clause if (inputData && inputData.length > 0)
    // WARNING: InputData was not an array or had an empty array.
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cSearchForPatternsInStringArrayMessage4);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const validatePatternsThatNeedImplementation = function(inputData, inputMetaData) {
  let functionName = s.cvalidatePatternsThatNeedImplementation;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    let passMessage = '';
    let j = 0; // We will use this as an iterator to count the number of times we add a string to the returnData coma-seperated list.
    for (let i = 0; i < inputData.length; i++) {
      let currentString = inputData[i];
      if (strParse.doesConstantExist(currentString, '') === false) {
        // Constant does NOT exist:
        passMessage = s.cConstantDoesNotExist + currentString;
        passMessage = chalk.rgb(0,0,0)(passMessage);
        passMessage = chalk.bgRgb(0,255,0)(passMessage);
        console.log(passMessage);
        // constant does NOT exist:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cConstantDoesNotExist + currentString);
        // Make sure we add all the strings that do not exist to a coma-seperated list,
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
        passMessage = chalk.rgb(0,0,0)(passMessage);
        passMessage = chalk.bgRgb(255,0,0)(passMessage);
        console.log(passMessage);
        // constant does exist:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cConstantDoesExist + currentString);
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const solveLehmerCode = function(inputData, inputMetaData) {
  let functionName = s.csolveLehmerCode;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData;
  if (inputData) {
    returnData = '';
    // [["Wondr","Wundr","Wndr","Wonder"],["Wman","Wmn","Womn","Woman"],["Amzing","Amzng","Amazing"]]
    // [3,3,2]
    //
    // {
    // "wonder": "wondr,wundr,wndr",
    // "Woman": "wman,wmn,womn",
    // "Amazing": "amzing,amzng"
    // }
    let lengthOfInputData = inputData.length;
    let expandedLehmerCodeArray = [];
    let tempArray = [];
    let lehmerCodeArray = Array.from(Array(lengthOfInputData), () => 0);
    expandedLehmerCodeArray = arrayDeepClone(recursiveArrayExpansion([0, lehmerCodeArray], inputData));
    // expandedLehmerCodeArray is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cexpandedLehmerCodeArrayIs + JSON.stringify(expandedLehmerCodeArray));

    // Now we just iterate over each array in expandedLehmerCodeArray and call: getLehmerCodeValue
    for (let i = 0; i < expandedLehmerCodeArray.length - 1; i++) {
      let lehmerCodeStringValue = getLehmerCodeValue(expandedLehmerCodeArray[i], inputMetaData);
      if (i === 0) {
        returnData = returnData + lehmerCodeStringValue;
      } else {
        returnData = returnData + b.cComa + lehmerCodeStringValue;
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const recursiveArrayExpansion = function(inputData, inputMetaData) {
  let functionName = s.crecursiveArrayExpansion;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = [];
  if (inputData && inputMetaData && isArray(inputData) === true && isArray(inputMetaData) === true && inputData.length > 0 && inputMetaData.length > 0) {
    // Setup & parse the inputData & inputMetaData into a format we can use to actually do recursive array expansion.
    let indexOfExpansion = inputData[0];
    let arrayToBeExpanded = inputData[1];
    let limitOfExpansion = inputMetaData[indexOfExpansion];
    // indexOfExpansion is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cindexOfExpansionIs + indexOfExpansion);
    // arrayToBeExpanded is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.carrayToBeExpandedIs + JSON.stringify(arrayToBeExpanded));
    // limitOfExpansion is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.climitOfExpansionIs + limitOfExpansion);
    let masterTempReturnData = []; // When we are all done we will set the returnData back to the list of arrays in this array.

    // [["Wondr","Wundr","Wndr","Wonder"],["Wman","Wmn","Womn","Woman"],["Amzing","Amzng","Amazing"]]
    // [3,3,2]
    //
    // {
    // "wonder": "wondr,wundr,wndr",
    // "Woman": "wman,wmn,womn",
    // "Amazing": "amzing,amzng"
    // }

    // First level array expansion.
    for (let i = 0; i <= limitOfExpansion; i++) {
      let lehmerCodeArray1 = arrayDeepClone(arrayToBeExpanded, '');
      // returnData is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
      lehmerCodeArray1[indexOfExpansion] = i;
      if (doesArrayContainValue(returnData, lehmerCodeArray1, aryParse.ascertainMatchingElements) === false) {
        // pushing lehmerCodeArray1 to returnData value:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cpushingLehmerCodeArray1ToReturnDataValue + JSON.stringify(lehmerCodeArray1));
        returnData.push(lehmerCodeArray1);
        // returnData after push is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataAfterPushIs + JSON.stringify(returnData));
      }
    }
    // returnData after Level 1 is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataAfterLevel1Is + JSON.stringify(returnData));

    // Second level array expansion, this is where we call recursively.
    // We need to determine if the index of expansion is equal to the length of the arrayToBeExpanded.
    // If it is then we have reached our recursive expansion limit.
    // If NOT then we need to recursively expand some more on each of the arrays that are now in the returnData array.
    // arrayToBeExpanded.length is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.carrayToBeExpandedDotLengthIs + arrayToBeExpanded.length);
    if (indexOfExpansion < arrayToBeExpanded.length - 1) {
      // We need to remove arrays from the returnData and recursively call the recursiveArrayExpansion with each array we remove.
      // The data we get back from each recursive call should be pushed back to masterTempReturnData array
      // returnData.length is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataDotLengthIs + returnData.length);
      // Make sure we clone the array we will be removing array elements from,
      // because otherwise we would be looping over the same array we are removing elements from,
      // which would mean that we would never visit all of the elemtns.
      // https://stackoverflow.com/questions/54081930/why-array-foreach-array-pop-would-not-empty-the-array
      let returnDataTemp = arrayDeepClone(returnData, '');
      returnDataTemp.forEach(function(item) {
        // returnData BEFORE POP is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataBeforePopIs + JSON.stringify(returnData));
        let lehmerCodeArray2 = arrayDeepClone(returnData.pop(), '');
        // returnData AFTER POP is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataAfterPopIs + JSON.stringify(returnData));
        // masterTempReturnData BEFORE recursive call is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cmasterTempReturnDataBeforeRecursiveCallIs + JSON.stringify(masterTempReturnData));
        let tempReturnData1 = arrayDeepClone(recursiveArrayExpansion([indexOfExpansion + 1, lehmerCodeArray2], inputMetaData), '');
        // tempReturnData1 is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.ctempReturnData1Is + JSON.stringify(tempReturnData1));
        // tempReturnData1.length is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.ctempReturnData1DotLengthIs + tempReturnData1.length);
        for (let k = 0; k <= tempReturnData1.length - 1; k++) {
          // BEGIN k-th iteration:
          loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_kthIteration + k);
          if (doesArrayContainValue(masterTempReturnData, tempReturnData1[k], aryParse.ascertainMatchingElements) === false) {
            // pushing tempReturnData1[k] value:
            loggers.consoleLog(baseFileName + b.cDot + functionName, s.cpushingTempReturnData1Kvalue + JSON.stringify(tempReturnData1[k]));
            masterTempReturnData.push(arrayDeepClone(tempReturnData1[k], ''));
          }
          // END k-th iteration:
          loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_kthIteration + k);
        }
        tempReturnData1 = null;
        // masterTempReturnData AFTER recursive call is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cmasterTempReturnDataAfterRecursiveCallIs + JSON.stringify(masterTempReturnData));
      });
      returnData = arrayDeepClone(masterTempReturnData, '');
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const getLehmerCodeValue = function(inputData, inputMetaData) {
  let functionName = s.cgetLehmerCodeValue;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = '';
  if (inputData) {
    let lengthOfInputData = inputData.length;
    returnData = '';
    for (let i = 0; i < lengthOfInputData; i++) {
      // BEGIN i-th iteration:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_ithIteration + i);
      let lookupIndex = inputData[i];
      // lookupIndex is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.clookupIndexIs + lookupIndex);
      let lookupValue = inputMetaData[i][lookupIndex]
      // lookupValue is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.clookupValueIs + lookupValue);
      returnData = returnData + lookupValue;
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
      // END i-th iteration:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_ithIteration + i);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
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
export const arraysAreEqual = function(inputData, inputMetaData) {
  let functionName = s.carraysAreEqual;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData && inputMetaData) {
    if (inputData === inputMetaData) { returnData = true; }
    if (inputData === null || inputMetaData === null) { returnData === false; }
    if (inputData.length !== inputMetaData.length) { returnData === false; }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
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
export const storeData = function(inputData, inputMetaData) {
  let functionName = s.cstoreData;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = false;
  if (inputData) {
    dataBroker.storeData(inputData, inputMetaData);
    returnData = true;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const getStoredData = function(inputData, inputMetaData) {
  let functionName = s.cgetStoredData;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = dataBroker.getData(inputData);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const isObjectEmpty = function(inputData, inputMetaData) {
  let functionName = s.cisObjectEmpty;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = true;
  if (inputData) {
    for (var key in inputData) {
      if (inputData.hasOwnProperty(key)) {
        returnData = false;
        // It may have a value, but is that value === null, if it is, reset back to true.
        if (inputData[key] === null) {
          returnData = true;
        }
      }
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const isArrayEmpty = function(inputData, inputMetaData) {
  let functionName = s.cisArrayEmpty;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + JSON.stringify(inputMetaData));
  let returnData = true;
  if (inputData) {
    returnData = !Object.keys(inputData).length;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + JSON.stringify(returnData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const isObject = function(inputData, inputMetaData) {
  let functionName = s.cisObject;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (typeof inputData === 'object') {
      returnData = true;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const isArray = function(inputData, inputMetaData) {
  let functionName = s.cisArray;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    returnData = Array.isArray(inputData);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const isArrayOrObject = function(inputData, inputMetaData) {
  let functionName = s.cisArrayOrObject;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (isObject(inputData, '') === true || isArray(inputData, '') === true) {
      returnData = true;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const isNonZeroLengthArray = function(inputData, inputMetaData) {
  let functionName = s.cisNonZeroLengthArray;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    if (isArray(inputData) === true && inputData.length >= 1) {
      returnData = true;
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const arrayDeepClone = function(inputData, inputMetaData) {
  let functionName = s.carrayDeepClone;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData;
  if (inputData && isArray(inputData, '') === true && isArrayEmpty(inputData, '') === false) {
    returnData = JSON.parse(JSON.stringify(inputData));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
export const replaceCharacterAtIndex = function(inputData, inputMetaData) {
  // console.log('BEGIN stringParsing.replaceCharacterAtIndex function');
  // console.log('inputData is: ' + inputData);
  // console.log('inputMetaData is: ' + inputMetaData);
  let functionName = s.creplaceCharacterAtIndex;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    let indexOfReplacement;
    let stringToReplaceWith;
    if (inputMetaData.length === 2) {
      indexOfReplacement = inputMetaData[0];
      stringToReplaceWith = inputMetaData[1];
      let stringArray = inputData.split('');
      stringArray.splice(indexOfReplacement, 1, stringToReplaceWith);
      returnData = stringArray.join('');
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  // console.log('returnData is: ' + returnData);
  // console.log('END stringParsing.replaceCharacterAtIndex function');
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
export const generateCommandAliases = function(inputData, inputMetaData) {
  let functionName = s.cgenerateCommandAliases;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  if (inputData) {
    // {"wonder":"wondr,wundr,wndr","Woman":"wman,wmn,womn","Amazing":"amzing,amzng"}
    //
    // {
    // "wonder": "wondr,wundr,wndr",
    // "Woman": "wman,wmn,womn",
    // "Amazing": "amzing,amzng"
    // }
    let primaryCommandDelimiter = configurator.getConfigurationSetting(s.cPrimaryCommandDelimiter);
    let secondaryCommandDelimiter = configurator.getConfigurationSetting(s.cSecondaryCommandDelimiter);
    let tertiaryCommandDelimiter = configurator.getConfigurationSetting(s.cTertiaryCommandDelimiter);
    let commandDelimiter = '';
    let commandWordsKeys1 = Object.keys(inputData);
    let commandWordAliasesArray = [];
    let masterCommandWordAliasesArray = [commandWordsKeys1.length - 1];
    let masterArrayIndex = [commandWordsKeys1.length - 1];
    for (let i = 0; i < commandWordsKeys1.length; i++) {
    // commandWordsKeys1.forEach((key1) => {
      let key1 = commandWordsKeys1[i];
      let commandWordAliases = inputData[key1];
      if (commandWordAliases.includes(primaryCommandDelimiter)) {
        commandDelimiter = primaryCommandDelimiter;
      } else if (commandWordAliases.includes(secondaryCommandDelimiter)) {
        commandDelimiter = secondaryCommandDelimiter;
      } else if (commandWordAliases.includes(tertiaryCommandDelimiter)) {
        commandDelimiter = tertiaryCommandDelimiter;
      }
      commandWordAliases = commandWordAliases + commandDelimiter + key1;
      // commandWordAliases BEFORE CHANGE is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccommandWordAliasesBeforeChangeIs + commandWordAliases);
      commandWordAliasesArray = commandWordAliases.split(commandDelimiter);
      masterArrayIndex[i] = commandWordAliasesArray.length - 1;
      for (let j = 0; j < commandWordAliasesArray.length; j++) {
        let commandAliasWord = commandWordAliasesArray[j];
        if (strParse.isFirstCharacterLowerCase(commandAliasWord, '') === true) {
          let firstLetterOfCommandAliasWord = commandAliasWord.charAt(0).toUpperCase();
          commandAliasWord = strParse.replaceCharacterAtIndexOfString(commandAliasWord, 0, firstLetterOfCommandAliasWord);
          commandWordAliasesArray[j] = commandAliasWord; // Saved the changes back to array.
        }
      }
      // commandWordAliasesArray AFTER CHANGE is:
      loggers.consoleLog(baseFileName + b.cDot + functionName, s.ccommandWordAliasesAfterChangeIs + JSON.stringify(commandWordAliasesArray));
      masterCommandWordAliasesArray[i] = commandWordAliasesArray; // Try to build an array of arrays (2D)
    }
    // masterCommandWordAliasesArray is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cmasterCommandWordAlisesArrayIs + JSON.stringify(masterCommandWordAliasesArray));
    // masterArrayIndex is:
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cmasterArrayIndexIs + JSON.stringify(masterArrayIndex));

    // NOTES: Console output is:
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
    let returnData = solveLehmerCode(masterArrayIndex, masterCommandWordAliasesArray);
    // Command Aliases are:
    console.log(s.cCommandAliasesAre + returnData);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData
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
export const aggregateCommandArguments = function(inputData, inputMetaData) {
  let functionName = s.caggregateCommandArguments;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + inputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  if (inputData) {
    if (inputData.length > 3) {
      for (let i = 2; i < inputData.length; i++) {
        // BEGIN i-th iteration:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_ithIteration + i);
        if (i === 2) {
          returnData = strParse.cleanCommandInput(inputData[i]);
        } else {
          returnData = returnData + b.cSpace + strParse.cleanCommandInput(inputData[i]);
        }
        // returnData is:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
        // END i-th iteration:
        loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_ithIteration + i);
      }
    } else {
      returnData = strParse.cleanCommandInput(inputData[2]);
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
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
  let functionName = s.doesArrayContainValue;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  // array is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.carrayIs + JSON.stringify(array));
  // value is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cvalueIs + value);
  // Not sure how this will output, would be good to also put some type checking on this input variable.
  // myFunction is:
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cmyFunctionIs + JSON.stringify(myFunction));
  let returnData = false;
  if (_.isArray(array) === false) {
    // array input object is not an array.'
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.carrayInputObjectIsNotAnArray);
    returnData = false;
  }
  if (!!array.find(i => myFunction(i, value))) {
    // The value was found in the array.
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cTheValueWasFoundInTheArray);
    returnData = true;
  } else {
    // The value was NOT found in the array.
    loggers.consoleLog(baseFileName + b.cDot + functionName, s.cTheValueWasNotFoundInTheArray);
    returnData = false;
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};