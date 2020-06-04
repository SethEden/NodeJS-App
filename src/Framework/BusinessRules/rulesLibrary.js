/**
 * @module rulesLibrary
 * @description Contains all of the system defined business rules as a map between function names and function calls.
 * @requires module:characterGeneration
 * @requires module:stringGeneration
 * @requires module:stringParsing
 * @requires module:system-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 */
import * as characterGeneration from './Rules/characterGeneration';
import * as stringGeneration from './Rules/stringGeneration';
import * as stringParsing from './Rules/stringParsing';
import * as s from '../Constants/system.constants';

/**
 * @enum rulesLibrary
 * @description The map of rules and rule names that is available to be executed iteratively.
 * @param {string|integer|boolean|map} inputData Primary data source needed by the rule to perform its function.
 * @param {string|integer|boolean|map} inputMetaData Additional data usually helps as giving context to the primary input or additional settings for a function.
 * @NOTE: For selector construction and selector string construction: We should not change the constant that maps to the function,
 * because we want the attribute in the XML to remain the same, However there is the possibility that the function, if named the same as the XML attribute,
 * would be a reserved word like "Parent" or "Sibling".
 * If the function is a reserved word then calling it would result in an error, and we don't want that!
 * So we should stick to the naming convention of AddXxxxx because that is in line with the purpose of the function,
 * to add Xxxxx function call to the selectorObject.
 * @author Seth Hollingsead
 * @date 2017/12/08
 */
export const rulesLibrary = {
  [s.cEcho]: (inputData, inputMetaData) => (inputData, inputMetaData),

  // Business Rules
  // ********************************
  // StringParsing rules in order
  // ********************************
  [s.cstringToBoolean]: (inputData, inputMetaData) => stringParsing.stringToBoolean(inputData, inputMetaData),
  [s.cstringToDataType]: (inputData, inputMetaData) => stringParsing.stringToDataType(inputData, inputMetaData),
  [s.cdetermineObjectDataType]: (inputData, inputMetaData) => stringParsing.determineObjectDataType(inputData, inputMetaData),
  [s.cisBoolean]: (inputData, inputMetaData) => stringParsing.isBoolean(inputData, inputMetaData),
  [s.cisInteger]: (inputData, inputMetaData) => stringParsing.isInteger(inputData, inputMetaData),
  [s.cisFloat]: (inputData, inputMetaData) => stringParsing.isFloat(inputData, inputMetaData),
  [s.cisString]: (inputData, inputMetaData) => stringParsing.isString(inputData, inputMetaData),
  [s.csingleQuoteSwapAfterEquals]: (inputData, inputMetaData) => stringParsing.singleQuoteSwapAfterEquals(inputData, inputMetaData),
  [s.cswapForwardSlashToBackSlash]: (inputData, inputMetaData) => stringParsing.swapForwardSlashToBackSlash(inputData, inputMetaData),
  [s.cswapBackSlashToForwardSlash]: (inputData, inputMetaData) => stringParsing.swapBackSlashToForwardSlash(inputData, inputMetaData),
  [s.cswapDoubleForwardSlashToSingleForwardSlash]: (inputData, inputMetaData) => stringParsing.swapDoubleForwardSlashToSingleForwardSlash(inputData, inputMetaData),
  [s.cswapDoubleBackSlashToSingleBackSlash]: (inputData, inputMetaData) => stringParsing.swapDoubleBackSlashToSingleBackSlash(inputData, inputMetaData),
  [s.cgetUserNameFromEmail]: (inputData, inputMetaData) => stringParsing.getUserNameFromEmail(inputData, inputMetaData),
  [s.creplaceSpacesWithPlus]: (inputData, inputMetaData) => stringParsing.replaceSpacesWithPlus(inputData, inputMetaData),
  [s.creplaceColonWithUnderscore]: (inputData, inputMetaData) => stringParsing.replaceColonWithUnderscore(inputData, inputMetaData),
  [s.creplaceCharacterWithCharacter]: (inputData, inputMetaData) => stringParsing.replaceCharacterWithCharacter(inputData, inputMetaData),
  [s.ccleanCarriageReturnFromString]: (inputData, inputMetaData) => stringParsing.cleanCarriageReturnFromString(inputData, inputMetaData),
  [s.cconvertStringToLowerCase]: (inputData, inputMetaData) => stringParsing.convertStringToLowerCase(inputData, inputMetaData),
  [s.cconvertStringToUpperCase]: (inputData, inputMetaData) => stringParsing.convertStringToUpperCase(inputData, inputMetaData),
  [s.cgetFileNameFromPath]: (inputData, inputMetaData) => stringParsing.getFileNameFromPath(inputData, inputMetaData),
  [s.cremoveFileExtensionFromFileName]: (inputData, inputMetaData) => stringParsing.removeFileExtensionFromFileName(inputData, inputMetaData),
  [s.cgetValueFromAssignmentOperationString]: (inputData, inputMetaData) => stringParsing.getValueFromAssignmentOperationString(inputData, inputMetaData),
  [s.caggregateNumericalDifferenceBetweenTwoStrings]: (inputData, inputMetaData) => stringParsing.aggregateNumericalDifferenceBetweenTwoStrings(inputData, inputMetaData),
  [s.cconvertCamelCaseStringToArray]: (inputData, inputMetaData) => stringParsing.convertCamelCaseStringToArray(inputData, inputMetaData),
  [s.cconvertArrayToCamelCaseString]: (inputData, inputMetaData) => stringParsing.convertArrayToCamelCaseString(inputData, inputMetaData),
  [s.cmapWordToCamelCase]: (inputData, inputMetaData) => stringParsing.mapWordToCamelCase(inputData, inputMetaData),
  [s.csimplifyAndConsolidateString]: (inputData, inputMetaData) => stringParsing.simplifyAndConsolidateString(inputData, inputMetaData),
  [s.ccompareSimplifiedAndConsolidatedStrings]: (inputData, inputMetaData) => stringParsing.compareSimplifiedAndConsolidatedStrings(inputData, inputMetaData),
  [s.cdoesArrayContainLowerCaseConsolidatedString]: (inputData, inputMetaData) => stringParsing.doesArrayContainLowerCaseConsolidatedString(inputData, inputMetaData),
  [s.cascertainMatchingFilenames]: (inputData, inputMetaData) => stringParsing.ascertainMatchingFilenames(inputData, inputMetaData),
  [s.cdoesArrayContainFilename]: (inputData, inputMetaData) => stringParsing.doesArrayContainFilename(inputData, inputMetaData),
  [s.cgetDataCatagoryFromDataContextName]: (inputData, inputMetaData) => stringParsing.getDataCatagoryFromDataContextName(inputData, inputMetaData),
  [s.cgetDataCatagoryDetailNameFromDataContextName]: (inputData, inputMetaData) => stringParsing.getDataCatagoryDetailNameFromDataContextName(inputData, inputMetaData),
  [s.cgetKeywordNameFromDataContextName]: (inputData, inputMetaData) => stringParsing.getKeywordNameFromDataContextName(inputData, inputMetaData),
  [s.cparseSystemRootPath]: (inputData, inputMetaData) => stringParsing.parseSystemRootPath(inputData, inputMetaData),
  [s.creplaceDoublePercentWithMessage]: (inputData, inputMetaData) => stringParsing.replaceDoublePercentWithMessage(inputData, inputMetaData),
  [s.cremoveXnumberOfFoldersFromEndOfPath]: (inputData, inputMetaData) => stringParsing.removeXnumberOfFoldersFromEndOfPath(inputData, inputMetaData),
  [s.cgetFirstTopLevelFolderFromPath]: (inputData, inputMetaData) => stringParsing.getFirstTopLevelFolderFromPath(inputData, inputMetaData),
  // *********************************
  // StringGeneration rules in order
  // *********************************
  [s.ccreateNdigitStringFromNumber]: (inputData, inputMetaData) => stringGeneration.createNdigitStringFromNumber(inputData, inputMetaData),
  [s.cgenerateRandomMixedCaseTextByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseTextByLength1(inputData, inputMetaData),
  [s.cgenerateRandomMixedCaseTextByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseTextByLength2(inputData, inputMetaData),
  [s.cgenerateRandomUpperCaseTextByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseTextByLength1(inputData, inputMetaData),
  [s.cgenerateRandomUpperCaseTextByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseTextByLength2(inputData, inputMetaData),
  [s.cgenerateRandomLowerCaseTextByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseTextByLength1(inputData, inputMetaData),
  [s.cgenerateRandomLowerCaseTextByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseTextByLength2(inputData, inputMetaData),
  [s.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData),
  [s.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData),
  [s.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData),
  [s.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData),
  [s.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength1(inputData, inputMetaData),
  [s.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseTextWithSpecialCharactersByLength2(inputData, inputMetaData),
  [s.cgenerateRandomMixedCaseAlphaNumericCodeByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength1(inputData, inputMetaData),
  [s.cgenerateRandomMixedCaseAlphaNumericCodeByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseAlphaNumericCodeByLength2(inputData, inputMetaData),
  [s.cgenerateRandomUpperCaseAlphaNumericCodeByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength1(inputData, inputMetaData),
  [s.cgenerateRandomUpperCaseAlphaNumericCodeByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseAlphaNumericCodeByLength2(inputData, inputMetaData),
  [s.cgenerateRandomLowerCaseAlphaNumericCodeByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength1(inputData, inputMetaData),
  [s.cgenerateRandomLowerCaseAlphaNumericCodeByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseAlphaNumericCodeByLength2(inputData, inputMetaData),
  [s.cgenerateRandomNumericCodeByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomNumericCodeByLength1(inputData, inputMetaData),
  [s.cgenerateRandomNumericCodeByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomNumericCodeByLength2(inputData, inputMetaData),
  [s.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData),
  [s.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData),
  [s.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData),
  [s.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData),
  [s.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1(inputData, inputMetaData),
  [s.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2(inputData, inputMetaData),
  [s.cgenerateRandomSpecialCharacterCodeByLength1]: (inputData, inputMetaData) => stringGeneration.generateRandomSpecialCharacterCodeByLength1(inputData, inputMetaData),
  [s.cgenerateRandomSpecialCharacterCodeByLength2]: (inputData, inputMetaData) => stringGeneration.generateRandomSpecialCharacterCodeByLength2(inputData, inputMetaData),
  [s.cgenerateValidEmail1]: (inputData, inputMetaData) => stringGeneration.generateValidEmail1(inputData, inputMetaData),
  [s.cgenerateValidEmail2]: (inputData, inputMetaData) => stringGeneration.generateValidEmail2(inputData, inputMetaData),
  [s.cgenerateInvalidEmail1]: (inputData, inputMetaData) => stringGeneration.generateInvalidEmail1(inputData, inputMetaData),
  [s.cgenerateInvalidEmail2]: (inputData, inputMetaData) => stringGeneration.generateInvalidEmail2(inputData, inputMetaData),

  // *********************************
  // CharacterGeneration rules in order
  // *********************************
  [s.crandomlyGenerateMixedCaseLetterOrSpecialCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter1(inputData, inputMetaData),
  [s.crandomlyGenerateMixedCaseLetterOrSpecialCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseLetterOrSpecialCharacter2(inputData, inputMetaData),
  [s.crandomlyGenerateUpperCaseLetterOrSpecialCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter1(inputData, inputMetaData),
  [s.crandomlyGenerateUpperCaseLetterOrSpecialCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseLetterOrSpecialCharacter2(inputData, inputMetaData),
  [s.crandomlyGenerateLowerCaseLetterOrSpecialCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter1(inputData, inputMetaData),
  [s.crandomlyGenerateLowerCaseLetterOrSpecialCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseLetterOrSpecialCharacter2(inputData, inputMetaData),
  [s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData),
  [s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData),
  [s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData),
  [s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData),
  [s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1(inputData, inputMetaData),
  [s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2(inputData, inputMetaData),
  [s.crandomlyGenerateMixedCaseAlphaNumericCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter1(inputData, inputMetaData),
  [s.crandomlyGenerateMixedCaseAlphaNumericCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseAlphaNumericCharacter2(inputData, inputMetaData),
  [s.crandomlyGenerateUpperCaseAlphaNumericCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter1(inputData, inputMetaData),
  [s.crandomlyGenerateUpperCaseAlphaNumericCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseAlphaNumericCharacter2(inputData, inputMetaData),
  [s.crandomlyGenerateLowerCaseAlphaNumericCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter1(inputData, inputMetaData),
  [s.crandomlyGenerateLowerCaseAlphaNumericCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseAlphaNumericCharacter2(inputData, inputMetaData),
  [s.crandomlyGenerateNumericCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateNumericCharacter1(inputData, inputMetaData),
  [s.crandomlyGenerateNumericCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateNumericCharacter2(inputData, inputMetaData),
  [s.crandomlyGenerateSpecialCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateSpecialCharacter1(inputData, inputMetaData),
  [s.crandomlyGenerateSpecialCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateSpecialCharacter2(inputData, inputMetaData),
  [s.crandomlyGenerateNumberInRange1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateNumberInRange1(inputData, inputMetaData),
  [s.crandomlyGenerateNumberInRange2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateNumberInRange2(inputData, inputMetaData),
  [s.crandomlyGenerateBooleanValue1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateBooleanValue1(inputData, inputMetaData),
  [s.crandomlyGenerateBooleanValue2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateBooleanValue2(inputData, inputMetaData),
  [s.crandomlyGenerateMixedCaseAlphabeticCharacter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter1(inputData, inputMetaData),
  [s.crandomlyGenerateMixedCaseAlphabeticCharacter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateMixedCaseAlphabeticCharacter2(inputData, inputMetaData),
  [s.crandomlyGenerateLowerCaseLetter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseLetter1(inputData, inputMetaData),
  [s.crandomlyGenerateLowerCaseLetter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateLowerCaseLetter2(inputData, inputMetaData),
  [s.crandomlyGenerateUpperCaseLetter1]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseLetter1(inputData, inputMetaData),
  [s.crandomlyGenerateUpperCaseLetter2]: (inputData, inputMetaData) => characterGeneration.randomlyGenerateUpperCaseLetter2(inputData, inputMetaData),
  [s.cconvertNumberToUpperCaseLetter]: (inputData, inputMetaData) => characterGeneration.convertNumberToUpperCaseLetter(inputData, inputMetaData),
  [s.cconvertNumberToLowerCaseLetter]: (inputData, inputMetaData) => characterGeneration.convertNumberToLowerCaseLetter(inputData, inputMetaData),
};
