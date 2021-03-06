/**
 * @file rulesLibrary.js
 * @module rulesLibrary
 * @description Contains all of the system defined business rules as a map between function names and function calls.
 * @requires module:characterGeneration
 * @requires module:stringGeneration
 * @requires module:stringParsing
 * @requires module:mathOperations
 * @requires module:arrayParsing
 * @requires module:system-constants
 * @requires module:business-constants
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as characterGeneration from './Rules/characterGeneration';
import * as stringGeneration from './Rules/stringGeneration';
import * as stringParsing from './Rules/stringParsing';
import * as mathOperations from './Rules/mathOperations';
import * as arrayParsing from './Rules/arrayParsing';
import * as sys from '../Constants/system.constants';
import * as biz from '../Constants/business.constants';
var D = require('../Structures/data');

/**
 * @function initRulesLibrary
 * @description Initializes the business rules function data structure on D.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2020/06/15
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling trying to debug commands or business rules that do not appear to exist.
 */
export const initRulesLibrary = function() {
  // console.log('BEGIN rulesLibrary.initRulesLibrary');
  D[sys.cBusinessRules] = {};
  D[sys.cBusinessRules] = {
    [biz.cEcho]: (inputData, inputMetaData) => (inputData, inputMetaData),

    // Business Rules
    // ********************************
    // StringParsing rules in order
    // ********************************
    [biz.cstringToBoolean]: (inputData, inputMetaData) => stringParsing.stringToBoolean(inputData, inputMetaData),
    [biz.cstringToDataType]: (inputData, inputMetaData) => stringParsing.stringToDataType(inputData, inputMetaData),
    [biz.cdetermineObjectDataType]: (inputData, inputMetaData) => stringParsing.determineObjectDataType(inputData, inputMetaData),
    [biz.cisBoolean]: (inputData, inputMetaData) => stringParsing.isBoolean(inputData, inputMetaData),
    [biz.cisInteger]: (inputData, inputMetaData) => stringParsing.isInteger(inputData, inputMetaData),
    [biz.cisFloat]: (inputData, inputMetaData) => stringParsing.isFloat(inputData, inputMetaData),
    [biz.cisString]: (inputData, inputMetaData) => stringParsing.isString(inputData, inputMetaData),
    [biz.csingleQuoteSwapAfterEquals]: (inputData, inputMetaData) => stringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData),
    [biz.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => stringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
    [biz.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => stringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
    [biz.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => stringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
    [biz.cswapDoubleBackSlashToSingleBackSlash]: (inputData, inputMetaData) => stringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData),
    [biz.cgetUserNameFromEmail]: (inputData, inputMetaData) => stringParsing.getUserNameFromEmail(inputData, inputMetaData),
    [biz.creplaceSpacesWithPlus]: (inputData, inputMetaData) => stringParsing.replaceSpacesWithPlus(inputData, inputMetaData),
    [biz.creplaceColonWithUnderscore]: (inputData, inputMetaData) => stringParsing.replaceColonWithUnderscore(inputData, inputMetaData),
    [biz.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => stringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
    [biz.cconvertStringToLowerCase]: (inputData, inputMetaData) => stringParsing.convertStringToLowerCase(inputData, inputMetaData),
    [biz.cconvertStringToUpperCase]: (inputData, inputMetaData) => stringParsing.convertStringToUpperCase(inputData, inputMetaData),
    [biz.cgetFileNameFromPath]: (inputData, inputMetaData) => stringParsing.getFileNameFromPath(inputData, inputMetaData),
    [biz.cgetFileExtension]: (inputData, inputMetaData) => stringParsing.getFileExtension(inputData, inputMetaData),
    [biz.cremoveDotFromFileExtension]: (inputData, inputMetaData) => stringParsing.removeDotFromFileExtension(inputData, inputMetaData),
    [biz.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => stringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
    [biz.cgetValueFromAssignmentOperationString]: (inputData, inputMetaData) => stringParsing.getValueFromAssignmentOperationString(inputData, inputMetaData),
    [biz.caggregateNumericalDifferenceBetweenTwoStrings]: (inputData, inputMetaData) => stringParsing.aggregateNumericalDifferenceBetweenTwoStrings(inputData, inputMetaData),
    [biz.ccountCamelCaseWords]: (inputData, inputMetaData) => stringParsing.countCamelCaseWords(inputData, inputMetaData),
    [biz.cdoesStringContainAcronym]: (inputData, inputMetaData) => stringParsing.doesStringContainAcronym(inputData, inputMetaData),
    [biz.ccountDelimiterInString]: (inputData, inputMetaData) => stringParsing.countDelimiterInString(inputData, inputMetaData),
    [biz.cdetermineWordDelimiter]: (inputData, inputMetaData) => stringParsing.determineWordDelimiter(inputData, inputMetaData),
    [biz.cgetWordCountInString]: (inputData, inputMetaData) => stringParsing.getWordCountInString(inputData, inputMetaData),
    [biz.cdoesStringContainUpperCaseCharacter]: (inputData, inputMetaData) => stringParsing.doesStringContainUpperCaseCharacter(inputData, inputMetaData),
    [biz.cdoesStringContainLowerCaseCharacter]: (inputData, inputMetaData) => stringParsing.doesStringContainLowerCaseCharacter(inputData, inputMetaData),
    [biz.cisFirstCharacterLowerCase]: (inputData, inputMetaData) => stringParsing.isFirstCharacterLowerCase(inputData, inputMetaData),
    [biz.cisFirstCharacterUpperCase]: (inputData, inputMetaData) => stringParsing.isFirstCharacterUpperCase(inputData, inputMetaData),
    [biz.cisStringList]: (inputData, inputMetaData) => stringParsing.isStringList(inputData, inputMetaData),
    [biz.cisStringCamelCase]: (inputData, inputMetaData) => stringParsing.isStringCamelCase(inputData, inputMetaData),
    [biz.cmapWordToCamelCaseWord]: (inputData, inputMetaData) => stringParsing.mapWordToCamelCaseWord(inputData, inputMetaData),
    [biz.csimplifyAndConsolidateString]: (inputData, inputMetaData) => stringParsing.simplifyAndConsolidateString(inputData, inputMetaData),
    [biz.ccompareSimplifiedAndConsolidatedStrings]: (inputData, inputMetaData) => stringParsing.compareSimplifiedAndConsolidatedStrings(inputData, inputMetaData),
    [biz.cascertainMatchingFilenames]: (inputData, inputMetaData) => stringParsing.ascertainMatchingFilenames(inputData, inputMetaData),
    [biz.cvalidateConstantsDataValidation]: (inputData, inputMetaData) => stringParsing.validateConstantsDataValidation(inputData, inputMetaData),
    [biz.cdetermineConstantsContextQualifiedPrefix]: (inputData, inputMetaData) => stringParsing.determineConstantsContextQualifiedPrefix(inputData, inputMetaData),
    [biz.cdetermineSuggestedConstantsValidationLineOfCode]: (inputData, inputMetaData) => stringParsing.determineSuggestedConstantsValidationLineOfCode(inputData, inputMetaData),
    [biz.cvalidateConstantsDataValidationLineItemName]: (inputData, inputMetaData) => stringParsing.validateConstantsDataValidationLineItemName(inputData, inputMetaData),
    [biz.cdoesConstantExist]: (inputData, inputMetaData) => stringParsing.doesConstantExist(inputData, inputMetaData),
    [biz.cgetConstantType]: (inputData, inputMetaData) => stringParsing.getConstantType(inputData, inputMetaData),
    [biz.cgetConstantActualValue]: (inputData, inputMetaData) => stringParsing.getConstantActualValue(inputData, inputMetaData),
    [biz.cgetConstantName]: (inputData, inputMetaData) => stringParsing.getConstantName(inputData, inputMetaData),
    [biz.cfindConstantName]: (inputData, inputMetaData) => stringParsing.findConstantName(inputData, inputMetaData),
    [biz.cisConstantTypeValid]: (inputData, inputMetaData) => stringParsing.isConstantTypeValid(inputData, inputMetaData),
    [biz.cconstantsOptimizedFulfillmentSystem]: (inputData, inputMetaData) => stringParsing.constantsOptimizedFulfillmentSystem(inputData, inputMetaData),
    [biz.cconvertConstantTypeToConstantPrefix]: (inputData, inputMetaData) => stringParsing.convertConstantTypeToConstantPrefix(inputData, inputMetaData),
    [biz.cconstantsFulfillmentSystem]: (inputData, inputMetaData) => stringParsing.constantsFulfillmentSystem(inputData, inputMetaData),
    [biz.cvalidateConstantsDataValues]: (inputData, inputMetaData) => stringParsing.validateConstantsDataValues(inputData, inputMetaData),
    [biz.cisValidCommandNameString]: (inputData, inputMetaData) => stringParsing.isValidCommandNameString(inputData, inputMetaData),
    [biz.cisConstantValid]: (inputData, inputMetaData) => stringParsing.isConstantValid(inputData, inputMetaData),
    [biz.ccountDuplicateCommandAliases]: (inputData, inputMetaData) => stringParsing.countDuplicateCommandAliases(inputData, inputMetaData),
    [biz.cgetLehmerCodeValue]: (inputData, inputMetaData) => stringParsing.getLehmerCodeValue(inputData, inputMetaData),
    [biz.cgetDataCatagoryFromDataContextName]: (inputData, inputMetaData) => stringParsing.getDataCatagoryFromDataContextName(inputData, inputMetaData),
    [biz.cgetDataCatagoryDetailNameFromDataContextName]: (inputData, inputMetaData) => stringParsing.getDataCatagoryDetailNameFromDataContextName(inputData, inputMetaData),
    [biz.cgetKeywordNameFromDataContextName]: (inputData, inputMetaData) => stringParsing.getKeywordNameFromDataContextName(inputData, inputMetaData),
    [biz.cparseSystemRootPath]: (inputData, inputMetaData) => stringParsing.parseSystemRootPath(inputData, inputMetaData),
    [biz.creplaceDoublePercentWithMessage]: (inputData, inputMetaData) => stringParsing.replaceDoublePercentWithMessage(inputData, inputMetaData),
    [biz.cremoveXnumberOfFoldersFromEndOfPath]: (inputData, inputMetaData) => stringParsing.removeXnumberOfFoldersFromEndOfPath(inputData, inputMetaData),
    [biz.cgetFirstTopLevelFolderFromPath]: (inputData, inputMetaData) => stringParsing.getFirstTopLevelFolderFromPath(inputData, inputMetaData),
    [biz.cloadDataFile]: (inputData, inputMetaData) => stringParsing.loadDataFile(inputData, inputMetaData),
    [biz.csupportedFileFormatsAre]: (inputData, inputMetaData) => stringParsing.supportedFileFormatsAre(inputData, inputMetaData),
    [biz.cgetAttributeName]: (inputData, inputMetaData) => stringParsing.getAttributeName(inputData, inputMetaData),
    [biz.cgetAttributeValue]: (inputData, inputMetaData) => stringParsing.getAttributeValue(inputData, inputMetaData),
    [biz.cisOdd]: (inputData, inputMetaData) => stringParsing.isOdd(inputData, inputMetaData),
    [biz.cisEven]: (inputData, inputMetaData) => stringParsing.isEven(inputData, inputMetaData),
    [biz.ccleanCommandInput]: (inputData, inputMetaData) => stringParsing.cleanCommandInput(inputData, inputMetaData),

    // *********************************
    // ArrayParsing rules in order
    // *********************************
    [biz.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => arrayParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
    [biz.cconvertCamelCaseStringToArray]: (inputData, inputMetaData) => arrayParsing.convertCamelCaseStringToArray(inputData, inputMetaData),
    [biz.cgetWordsArrayFromString]: (inputData, inputMetaData) => arrayParsing.getWordsArrayFromString(inputData, inputMetaData),
    [biz.crecombineStringArrayWithSpaces]: (inputData, inputMetaData) => arrayParsing.recombineStringArrayWithSpaces(inputData, inputMetaData),
    [biz.cconvertArrayToCamelCaseString]: (inputData, inputMetaData) => arrayParsing.convertArrayToCamelCaseString(inputData, inputMetaData),
    [biz.cdoesArrayContainLowerCaseConsolidatedString]: (inputData, inputMetaData) => arrayParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData),
    [biz.cdoesArrayContainCharacter]: (inputData, inputMetaData) => arrayParsing.doesArrayContainCharacter(inputData, inputMetaData),
    [biz.cremoveCharacterFromArray]: (inputData, inputMetaData) => arrayParsing.removeCharacterFromArray(inputData, inputMetaData),
    [biz.cascertainMatchingElements]: (inputData, inputMetaData) => arrayParsing.acertainMatchingElements(inputData, inputMetaData),
    [biz.cdoesArrayContainFilename]: (inputData, inputMetaData) => arrayParsing.doesArrayContainFilename(inputData, inputMetaData),
    [biz.cgetLengthOfLongestStringInArray]: (inputData, inputMetaData) => arrayParsing.getLengthOfLongestStringInArray(inputData, inputMetaData),
    [biz.csearchForPatternsInStringArray]: (inputData, inputMetaData) => arrayParsing.searchForPatternsInStringArray(inputData, inputMetaData),
    [biz.cvalidatePatternsThatNeedImplementation]: (inputData, inputMetaData) => arrayParsing.validatePatternsThatNeedImplementation(inputData, inputMetaData),
    [biz.csolveLehmerCode]: (inputData, inputMetaData) => arrayParsing.solveLehmerCode(inputData, inputMetaData),
    [biz.crecursiveArrayExpansion]: (inputData, inputMetaData) => arrayParsing.recursiveArrayExpansion(inputData, inputMetaData),
    [biz.carraysAreEqual]: (inputData, inputMetaData) => arrayParsing.arraysAreEqual(inputData, inputMetaData),
    [biz.cstoreData]: (inputData, inputMetaData) => arrayParsing.storeData(inputData, inputMetaData),
    [biz.cgetStoredData]: (inputData, inputMetaData) => arrayParsing.getStoredData(inputData, inputMetaData),
    [biz.cisObjectEmpty]: (inputData, inputMetaData) => arrayParsing.isObjectEmpty(inputData, inputMetaData),
    [biz.cisArrayEmpty]: (inputData, inputMetaData) => arrayParsing.isArrayEmpty(inputData, inputMetaData),
    [biz.cisObject]: (inputData, inputMetaData) => arrayParsing.isObject(inputData, inputMetaData),
    [biz.cisArray]: (inputData, inputMetaData) => arrayParsing.isArray(inputData, inputMetaData),
    [biz.cisArrayOrObject]: (inputData, inputMetaData) => arrayParsing.isArrayOrObject(inputData, inputMetaData),
    [biz.cisNonZeroLengthArray]: (inputData, inputMetaData) => arrayParsing.isNonZeroLengthArray(inputData, inputMetaData),
    [biz.carrayDeepClone]: (inputData, inputMetaData) => arrayParsing.arrayDeepClone(inputData, inputMetaData),
    [biz.creplaceCharacterAtIndex]: (inputData, inputMetaData) => arrayParsing.replaceCharacterAtIndex(inputData, inputMetaData),
    [biz.cgenerateCommandAliases]: (inputData, inputMetaData) => arrayParsing.generateCommandAliases(inputData, inputMetaData),
    [biz.caggregateCommandArguments]: (inputData, inputMetaData) => arrayParsing.aggregateCommandArguments(inputData, inputMetaData),
    [biz.cgetFileAndPathListForPath]: (inputData, inputMetaData) => arrayParsing.getFileAndPathListForPath(inputData, inputMetaData),
    [biz.cparseColorRangeInputs]: (inputData, inputMetaData) => arrayParsing.parseColorRangeInputs(inputData, inputMetaData),

    // *********************************
    // StringGeneration rules in order
    // *********************************
    [biz.cgenerateRandomMixedCaseTextByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseTextByLength1(inputData, inputMetaData),
    [biz.cgenerateRandomMixedCaseTextByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseTextByLength2(inputData, inputMetaData),
    [biz.cgenerateRandomUpperCaseTextByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseTextByLength1(inputData, inputMetaData),
    [biz.cgenerateRandomUpperCaseTextByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseTextByLength2(inputData, inputMetaData),
    [biz.cgenerateRandomLowerCaseTextByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseTextByLength1(inputData, inputMetaData),
    [biz.cgenerateRandomLowerCaseTextByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseTextByLength2(inputData, inputMetaData),
    [biz.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData),
    [biz.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData),
    [biz.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData),
    [biz.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData),
    [biz.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData),
    [biz.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData),
    [biz.cgenerateRandomMixedCaseAlphaNumericCodeByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength1(inputData, inputMetaData),
    [biz.cgenerateRandomMixedCaseAlphaNumericCodeByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength2(inputData, inputMetaData),
    [biz.cgenerateRandomUpperCaseAlphaNumericCodeByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength1(inputData, inputMetaData),
    [biz.cgenerateRandomUpperCaseAlphaNumericCodeByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength2(inputData, inputMetaData),
    [biz.cgenerateRandomLowerCaseAlphaNumericCodeByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength1(inputData, inputMetaData),
    [biz.cgenerateRandomLowerCaseAlphaNumericCodeByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength2(inputData, inputMetaData),
    [biz.cgenerateRandomNumericCodeByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomNumericCodeByLength1(inputData, inputMetaData),
    [biz.cgenerateRandomNumericCodeByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomNumericCodeByLength2(inputData, inputMetaData),
    [biz.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData),
    [biz.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData),
    [biz.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData),
    [biz.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData),
    [biz.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData),
    [biz.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData),
    [biz.cgenerateRandomSpecialCharacterCodeByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomSpecialCharacterCodeByLength1(inputData, inputMetaData),
    [biz.cgenerateRandomSpecialCharacterCodeByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomSpecialCharacterCodeByLength2(inputData, inputMetaData),
    [biz.cgenerateValidEmail1]: (inputData, inputMetaData) => stringGeneration.generateValidEmail1(inputData, inputMetaData),
    [biz.cgenerateValidEmail2]: (inputData, inputMetaData) => stringGeneration.generateValidEmail2(inputData, inputMetaData),
    [biz.cgenerateInvalidEmail1]: (inputData, inputMetaData) => stringGeneration.generateInvalidEmail1(inputData, inputMetaData),
    [biz.cgenerateInvalidEmail2]: (inputData, inputMetaData) => stringGeneration.generateInvalidEmail2(inputData, inputMetaData),
    [biz.cgenerateRandomBrightColor]: (inputData, inputMetaData) => stringGeneration.generateRandomBrightColor(inputData, inputMetaData),
    [biz.cgenerateRandomDarkColor]: (inputData, inputMetaData) => stringGeneration.generateRandomDarkColor(inputData, inputMetaData),
    [biz.cgenerateRandomColor]: (inputData, inputMetaData) => stringGeneration.generateRandomColor(inputData, inputMetaData),

    // *********************************
    // CharacterGeneration rules in order
    // *********************************
    [biz.crandomlyGenerateMixedCaseLetterOrSpecialCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter1(inputData, inputMetaData),
    [biz.crandomlyGenerateMixedCaseLetterOrSpecialCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter2(inputData, inputMetaData),
    [biz.crandomlyGenerateUpperCaseLetterOrSpecialCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter1(inputData, inputMetaData),
    [biz.crandomlyGenerateUpperCaseLetterOrSpecialCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter2(inputData, inputMetaData),
    [biz.crandomlyGenerateLowerCaseLetterOrSpecialCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter1(inputData, inputMetaData),
    [biz.crandomlyGenerateLowerCaseLetterOrSpecialCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter2(inputData, inputMetaData),
    [biz.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData),
    [biz.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData),
    [biz.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData),
    [biz.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData),
    [biz.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData),
    [biz.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData),
    [biz.crandomlyGenerateMixedCaseAlphaNumericCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter1(inputData, inputMetaData),
    [biz.crandomlyGenerateMixedCaseAlphaNumericCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter2(inputData, inputMetaData),
    [biz.crandomlyGenerateUpperCaseAlphaNumericCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter1(inputData, inputMetaData),
    [biz.crandomlyGenerateUpperCaseAlphaNumericCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter2(inputData, inputMetaData),
    [biz.crandomlyGenerateLowerCaseAlphaNumericCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter1(inputData, inputMetaData),
    [biz.crandomlyGenerateLowerCaseAlphaNumericCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter2(inputData, inputMetaData),
    [biz.crandomlyGenerateNumericCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateNumericCharacter1(inputData, inputMetaData),
    [biz.crandomlyGenerateNumericCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateNumericCharacter2(inputData, inputMetaData),
    [biz.crandomlyGenerateSpecialCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateSpecialCharacter1(inputData, inputMetaData),
    [biz.crandomlyGenerateSpecialCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateSpecialCharacter2(inputData, inputMetaData),
    [biz.crandomlyGenerateNumberInRange1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateNumberInRange1(inputData, inputMetaData),
    [biz.crandomlyGenerateNumberInRange2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateNumberInRange2(inputData, inputMetaData),
    [biz.crandomlyGenerateBooleanValue1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateBooleanValue1(inputData, inputMetaData),
    [biz.crandomlyGenerateBooleanValue2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateBooleanValue2(inputData, inputMetaData),
    [biz.crandomlyGenerateMixedCaseAlphabeticCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData),
    [biz.crandomlyGenerateMixedCaseAlphabeticCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter2(inputData, inputMetaData),
    [biz.crandomlyGenerateLowerCaseLetter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseLetter1(inputData, inputMetaData),
    [biz.crandomlyGenerateLowerCaseLetter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseLetter2(inputData, inputMetaData),
    [biz.crandomlyGenerateUpperCaseLetter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseLetter1(inputData, inputMetaData),
    [biz.crandomlyGenerateUpperCaseLetter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseLetter2(inputData, inputMetaData),
    [biz.cconvertNumberToUpperCaseLetter]: (inputData, inputMetaData) => characterGeneration.convertNumberToUpperCaseLetter(inputData, inputMetaData),
    [biz.cconvertNumberToLowerCaseLetter]: (inputData, inputMetaData) => characterGeneration.convertNumberToLowerCaseLetter(inputData, inputMetaData),

    // *********************************
    // Math Operations rules in order
    // *********************************
    [biz.chex2rgbConversion]: (inputData, inputMetaData) => mathOperations.hex2rgbConversion(inputData, inputMetaData)
  }
  // console.log('END rulesLibrary.initRulesLibrary function');
};
