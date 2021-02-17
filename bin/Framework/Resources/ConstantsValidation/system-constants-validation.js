"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.systemConstantsValidation = void 0;

var s = _interopRequireWildcard(require("../../Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file system.constants-validation.js
 * @module system-constants-validation
 * @description Contains validations for system defined acronyms, many of them derived from the basic-constants.
 * Also included are validations for other constants like countries, named spoken languages.
 * Also included are validations for common files types, control key combinations, environment variable strings,
 * system defined words and codes, user interface object types,
 * and names of business rules/system defined named commands, etc...
 * @requires module:system-constants
 * @author Seth Hollingsead
 * @date 2020/07/23
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */

/**
* @function systemConstantsValidation
* @description Initializes the basic constants validation data objects array.
* @return {void}
* @author Seth Hollingsead
* @date 2020/07/23
*/
var systemConstantsValidation = [// Miscelaneious
{
  Name: 'cENV',
  Actual: s.cENV,
  Expected: 'ENV'
}, {
  Name: 'cLOG',
  Actual: s.cLOG,
  Expected: 'LOG'
}, {
  Name: 'cENVIRONMENT',
  Actual: s.cENVIRONMENT,
  Expected: 'ENVIRONMENT'
}, {
  Name: 'cITERATION',
  Actual: s.cITERATION,
  Expected: 'ITERATION'
}, {
  Name: 'cSTYLE',
  Actual: s.cSTYLE,
  Expected: 'STYLE'
}, // Compound System Words
{
  Name: 'cunderline',
  Actual: s.cunderline,
  Expected: 'underline'
}, {
  Name: 'cUnderline',
  Actual: s.cUnderline,
  Expected: 'Underline'
}, {
  Name: 'cwithText',
  Actual: s.cwithText,
  Expected: 'withText'
}, {
  Name: 'cWithText',
  Actual: s.cWithText,
  Expected: 'WithText'
}, {
  Name: 'cDebugTest',
  Actual: s.cDebugTest,
  Expected: 'DebugTest'
}, {
  Name: 'cDebugPage',
  Actual: s.cDebugPage,
  Expected: 'DebugPage'
}, {
  Name: 'cDebugTestExhaustive',
  Actual: s.cDebugTestExhaustive,
  Expected: 'DebugTestExhaustive'
}, {
  Name: 'cDebugTestData',
  Actual: s.cDebugTestData,
  Expected: 'DebugTestData'
}, {
  Name: 'cDebugPageScripts',
  Actual: s.cDebugPageScripts,
  Expected: 'DebugPageScripts'
}, {
  Name: 'cDebugPageData',
  Actual: s.cDebugPageData,
  Expected: 'DebugPageData'
}, {
  Name: 'cDebugKeywords',
  Actual: s.cDebugKeywords,
  Expected: 'DebugKeywords'
}, {
  Name: 'cLogBrowserActions',
  Actual: s.cLogBrowserActions,
  Expected: 'LogBrowserActions'
}, {
  Name: 'cJournalBrowserActions',
  Actual: s.cJournalBrowserActions,
  Expected: 'JournalBrowserActions'
}, {
  Name: 'cDebugBrowserActions',
  Actual: s.cDebugBrowserActions,
  Expected: 'DebugBrowserActions'
}, {
  Name: 'cDebugSelectors',
  Actual: s.cDebugSelectors,
  Expected: 'DebugSelectors'
}, {
  Name: 'cDebugFunctions',
  Actual: s.cDebugFunctions,
  Expected: 'DebugFunctions'
}, {
  Name: 'cDebugFiles',
  Actual: s.cDebugFiles,
  Expected: 'DebugFiles'
}, {
  Name: 'cTestAutomation',
  Actual: s.cTestAutomation,
  Expected: 'TestAutomation'
}, {
  Name: 'cNumberOfRows',
  Actual: s.cNumberOfRows,
  Expected: 'NumberOfRows'
}, {
  Name: 'cMasterRowNumber',
  Actual: s.cMasterRowNumber,
  Expected: 'MasterRowNumber'
}, {
  Name: 'cEnvironmentRow',
  Actual: s.cEnvironmentRow,
  Expected: 'EnvironmentRow'
}, {
  Name: 'cEnvironmentRowNumber',
  Actual: s.cEnvironmentRowNumber,
  Expected: 'EnvironmentRowNumber'
}, {
  Name: 'cPageScript',
  Actual: s.cPageScript,
  Expected: 'PageScript'
}, {
  Name: 'cIntermediatePath',
  Actual: s.cIntermediatePath,
  Expected: 'IntermediatePath'
}, {
  Name: 'cTimeStamp',
  Actual: s.cTimeStamp,
  Expected: 'TimeStamp'
}, {
  Name: 'cPageScriptTimeStamp',
  Actual: s.cPageScriptTimeStamp,
  Expected: 'PageScriptTimeStamp'
}, {
  Name: 'cDateTimeStamp',
  Actual: s.cDateTimeStamp,
  Expected: 'DateTimeStamp'
}, {
  Name: 'cScriptDateStamp',
  Actual: s.cScriptDateStamp,
  Expected: 'ScriptDateStamp'
}, {
  Name: 'cScriptTimeStamp',
  Actual: s.cScriptTimeStamp,
  Expected: 'ScriptTimeStamp'
}, {
  Name: 'cKeywordTimeStamp',
  Actual: s.cKeywordTimeStamp,
  Expected: 'KeywordTimeStamp'
}, {
  Name: 'cTestTimeStamp',
  Actual: s.cTestTimeStamp,
  Expected: 'TestTimeStamp'
}, {
  Name: 'cScriptDateTimeStamp',
  Actual: s.cScriptDateTimeStamp,
  Expected: 'ScriptDateTimeStamp'
}, {
  Name: 'cBeginScriptTimeStamp',
  Actual: s.cBeginScriptTimeStamp,
  Expected: 'BeginScriptTimeStamp'
}, {
  Name: 'cEndScriptTimeStamp',
  Actual: s.cEndScriptTimeStamp,
  Expected: 'EndScriptTimeStamp'
}, {
  Name: 'cBeginTestTimeStamp',
  Actual: s.cBeginTestTimeStamp,
  Expected: 'BeginTestTimeStamp'
}, {
  Name: 'cEndTestTimeStamp',
  Actual: s.cEndTestTimeStamp,
  Expected: 'EndTestTimeStamp'
}, {
  Name: 'cBeginPageScriptTimeStamp',
  Actual: s.cBeginPageScriptTimeStamp,
  Expected: 'BeginPageScriptTimeStamp'
}, {
  Name: 'cEndPageScriptTimeStamp',
  Actual: s.cEndPageScriptTimeStamp,
  Expected: 'EndPageScriptTimeStamp'
}, {
  Name: 'cBeginKeywordTimeStamp',
  Actual: s.cBeginKeywordTimeStamp,
  Expected: 'BeginKeywordTimeStamp'
}, {
  Name: 'cEndKeywordTimeStamp',
  Actual: s.cEndKeywordTimeStamp,
  Expected: 'EndKeywordTimeStamp'
}, {
  Name: 'cRuntime',
  Actual: s.cRuntime,
  Expected: 'Runtime'
}, {
  Name: 'cRunTime',
  Actual: s.cRunTime,
  Expected: 'RunTime'
}, {
  Name: 'cBrowserName',
  Actual: s.cBrowserName,
  Expected: 'BrowserName'
}, {
  Name: 'cHostName',
  Actual: s.cHostName,
  Expected: 'HostName'
}, {
  Name: 'cTestRunID',
  Actual: s.cTestRunID,
  Expected: 'TestRunID'
}, {
  Name: 'cfilesLists',
  Actual: s.cfilesLists,
  Expected: 'filesLists'
}, {
  Name: 'cFileTypes',
  Actual: s.cFileTypes,
  Expected: 'FileTypes'
}, {
  Name: 'cfilename',
  Actual: s.cfilename,
  Expected: 'filename'
}, {
  Name: 'cFilename',
  Actual: s.cFilename,
  Expected: 'Filename'
}, {
  Name: 'cFileName',
  Actual: s.cFileName,
  Expected: 'FileName'
}, {
  Name: 'cfilenames',
  Actual: s.cfilenames,
  Expected: 'filenames'
}, {
  Name: 'cFilenames',
  Actual: s.cFilenames,
  Expected: 'Filenames'
}, {
  Name: 'cFileNames',
  Actual: s.cFileNames,
  Expected: 'FileNames'
}, {
  Name: 'cPreValidateFileName',
  Actual: s.cPreValidateFileName,
  Expected: 'PreValidateFileName'
}, {
  Name: 'cAsynchSingular',
  Actual: s.cAsynchSingular,
  Expected: 'AsynchSingular'
}, {
  Name: 'cSynchSingular',
  Actual: s.cSynchSingular,
  Expected: 'SynchSingular'
}, {
  Name: 'cParallelMultiUnified',
  Actual: s.cParallelMultiUnified,
  Expected: 'ParallelMultiUnified'
}, {
  Name: 'cAllowableCharacters',
  Actual: s.cAllowableCharacters,
  Expected: 'AllowableCharacters'
}, {
  Name: 'cSpecialCharacters',
  Actual: s.cSpecialCharacters,
  Expected: 'SpecialCharacters'
}, {
  Name: 'cTimeoutOverride',
  Actual: s.cTimeoutOverride,
  Expected: 'TimeoutOverride'
}, {
  Name: 'cDwellTime',
  Actual: s.cDwellTime,
  Expected: 'DwellTime'
}, {
  Name: 'cLogFilePathAndName',
  Actual: s.cLogFilePathAndName,
  Expected: 'LogFilePathAndName'
}, {
  Name: 'cDataLogFilePathAndName',
  Actual: s.cDataLogFilePathAndName,
  Expected: 'DataLogFilePathAndName'
}, {
  Name: 'cExecutionJournalFilePathAndName',
  Actual: s.cExecutionJournalFilePathAndName,
  Expected: 'ExecutionJournalFilePathAndName'
}, {
  Name: 'cResultsLogFilePathAndName',
  Actual: s.cResultsLogFilePathAndName,
  Expected: 'ResultsLogFilePathAndName'
}, {
  Name: 'cTestDataPath',
  Actual: s.cTestDataPath,
  Expected: 'TestDataPath'
}, {
  Name: 'cLogFileEnabled',
  Actual: s.cLogFileEnabled,
  Expected: 'LogFileEnabled'
}, {
  Name: 'cIncludeDateTimeStampInLogFiles',
  Actual: s.cIncludeDateTimeStampInLogFiles,
  Expected: 'IncludeDateTimeStampInLogFiles'
}, {
  Name: 'cFileCounter',
  Actual: s.cFileCounter,
  Expected: 'FileCounter'
}, {
  Name: 'cDeltaT',
  Actual: s.cDeltaT,
  Expected: 'DeltaT'
}, {
  Name: 'cvisibilityCheck',
  Actual: s.cvisibilityCheck,
  Expected: 'visibilityCheck'
}, {
  Name: 'cVisibilityCheck',
  Actual: s.cVisibilityCheck,
  Expected: 'VisibilityCheck'
}, {
  Name: 'cOperatingSystem',
  Actual: s.cOperatingSystem,
  Expected: 'OperatingSystem'
}, {
  Name: 'cinnerText',
  Actual: s.cinnerText,
  Expected: 'innerText'
}, {
  Name: 'cInnerText',
  Actual: s.cInnerText,
  Expected: 'InnerText'
}, {
  Name: 'cinnerHTML',
  Actual: s.cinnerHTML,
  Expected: 'innerHTML'
}, {
  Name: 'cInnerHTML',
  Actual: s.cInnerHTML,
  Expected: 'InnerHTML'
}, {
  Name: 'cTestData',
  Actual: s.cTestData,
  Expected: 'TestData'
}, {
  Name: 'cProcessingTimeout',
  Actual: s.cProcessingTimeout,
  Expected: 'ProcessingTimeout'
}, {
  Name: 'cIngestionCompleteDwellTime',
  Actual: s.cIngestionCompleteDwellTime,
  Expected: 'IngestionCompleteDwellTime'
}, {
  Name: 'cRowNumber',
  Actual: s.cRowNumber,
  Expected: 'RowNumber'
}, {
  Name: 'cUsername',
  Actual: s.cUsername,
  Expected: 'Username'
}, {
  Name: 'cPassword',
  Actual: s.cPassword,
  Expected: 'Password'
}, {
  Name: 'cProjectName',
  Actual: s.cProjectName,
  Expected: 'ProjectName'
}, {
  Name: 'cProjectDescription',
  Actual: s.cProjectDescription,
  Expected: 'ProjectDescription'
}, {
  Name: 'cTestDataFileName',
  Actual: s.cTestDataFileName,
  Expected: 'TestDataFileName'
}, {
  Name: 'cShareEmail',
  Actual: s.cShareEmail,
  Expected: 'ShareEmail'
}, {
  Name: 'cAccessLevel',
  Actual: s.cAccessLevel,
  Expected: 'AccessLevel'
}, {
  Name: 'cFileNumber',
  Actual: s.cFileNumber,
  Expected: 'FileNumber'
}, {
  Name: 'cConfigurationName',
  Actual: s.cConfigurationName,
  Expected: 'ConfigurationName'
}, {
  Name: 'cConfigurationElement',
  Actual: s.cConfigurationElement,
  Expected: 'ConfigurationElement'
}, {
  Name: 'cConfigurationElements',
  Actual: s.cConfigurationElements,
  Expected: 'ConfigurationElements'
}, {
  Name: 'cVersionControl',
  Actual: s.cVersionControl,
  Expected: 'VersionControl'
}, {
  Name: 'cScriptRunTime',
  Actual: s.cScriptRunTime,
  Expected: 'ScriptRunTime'
}, {
  Name: 'cTestRunTime',
  Actual: s.cTestRunTime,
  Expected: 'TestRunTime'
}, {
  Name: 'ctypeText',
  Actual: s.ctypeText,
  Expected: 'typeText'
}, {
  Name: 'cTypeText',
  Actual: s.cTypeText,
  Expected: 'TypeText'
}, {
  Name: 'cAbreviatedSelectors',
  Actual: s.cAbreviatedSelectors,
  Expected: 'AbreviatedSelectors'
}, {
  Name: 'cAbreviatedSelectorsInLogs',
  Actual: s.cAbreviatedSelectorsInLogs,
  Expected: 'AbreviatedSelectorsInLogs'
}, {
  Name: 'cselectorTimeout',
  Actual: s.cselectorTimeout,
  Expected: 'selectorTimeout'
}, {
  Name: 'cchildElementCount',
  Actual: s.cchildElementCount,
  Expected: 'childElementCount'
}, {
  Name: 'cUnderscore',
  Actual: s.cUnderscore,
  Expected: 'Underscore'
}, {
  Name: 'cTestBureau',
  Actual: s.cTestBureau,
  Expected: 'TestBureau'
}, {
  Name: 'caddWithText',
  Actual: s.caddWithText,
  Expected: 'addWithText'
}, {
  Name: 'caddTimeout',
  Actual: s.caddTimeout,
  Expected: 'addTimeout'
}, {
  Name: 'caddParent',
  Actual: s.caddParent,
  Expected: 'addParent'
}, {
  Name: 'caddFindValue',
  Actual: s.caddFindValue,
  Expected: 'addFindValue'
}, {
  Name: 'caddNth',
  Actual: s.caddNth,
  Expected: 'addNth'
}, {
  Name: 'caddSibling',
  Actual: s.caddSibling,
  Expected: 'addSibling'
}, {
  Name: 'caddFilter',
  Actual: s.caddFilter,
  Expected: 'addFilter'
}, {
  Name: 'cgenerateRandom',
  Actual: s.cgenerateRandom,
  Expected: 'generateRandom'
}, {
  Name: 'crandomlyGenerate',
  Actual: s.crandomlyGenerate,
  Expected: 'randomlyGenerate'
}, {
  Name: 'cMixedCase',
  Actual: s.cMixedCase,
  Expected: 'MixedCase'
}, {
  Name: 'cUpperCase',
  Actual: s.cUpperCase,
  Expected: 'UpperCase'
}, {
  Name: 'cLowerCase',
  Actual: s.cLowerCase,
  Expected: 'LowerCase'
}, {
  Name: 'cByLength',
  Actual: s.cByLength,
  Expected: 'ByLength'
}, {
  Name: 'cSpecialCharacter',
  Actual: s.cSpecialCharacter,
  Expected: 'SpecialCharacter'
}, {
  Name: 'cWithSpecialCharacters',
  Actual: s.cWithSpecialCharacters,
  Expected: 'WithSpecialCharacters'
}, {
  Name: 'cTextByLength',
  Actual: s.cTextByLength,
  Expected: 'TextByLength'
}, {
  Name: 'cTextWithSpecialCharacters',
  Actual: s.cTextWithSpecialCharacters,
  Expected: 'TextWithSpecialCharacters'
}, {
  Name: 'cTextWithSpecialCharactersByLength',
  Actual: s.cTextWithSpecialCharactersByLength,
  Expected: 'TextWithSpecialCharactersByLength'
}, {
  Name: 'cAlphaNumeric',
  Actual: s.cAlphaNumeric,
  Expected: 'AlphaNumeric'
}, {
  Name: 'cAlphaNumericCode',
  Actual: s.cAlphaNumericCode,
  Expected: 'AlphaNumericCode'
}, {
  Name: 'cAlphaNumericCodeByLength',
  Actual: s.cAlphaNumericCodeByLength,
  Expected: 'AlphaNumericCodeByLength'
}, {
  Name: 'cNumericCode',
  Actual: s.cNumericCode,
  Expected: 'NumericCode'
}, {
  Name: 'cNumericCodeByLength',
  Actual: s.cNumericCodeByLength,
  Expected: 'NumericCodeByLength'
}, {
  Name: 'cAlphaNumericCodeWithSpecialCharacters',
  Actual: s.cAlphaNumericCodeWithSpecialCharacters,
  Expected: 'AlphaNumericCodeWithSpecialCharacters'
}, {
  Name: 'cAlphaNumericCodeWithSpecialCharactersByLength',
  Actual: s.cAlphaNumericCodeWithSpecialCharactersByLength,
  Expected: 'AlphaNumericCodeWithSpecialCharactersByLength'
}, {
  Name: 'cSpecialCharacterCodeByLength',
  Actual: s.cSpecialCharacterCodeByLength,
  Expected: 'SpecialCharacterCodeByLength'
}, {
  Name: 'cvalidEmail',
  Actual: s.cvalidEmail,
  Expected: 'validEmail'
}, {
  Name: 'cValidEmail',
  Actual: s.cValidEmail,
  Expected: 'ValidEmail'
}, {
  Name: 'cInvalidEmail',
  Actual: s.cInvalidEmail,
  Expected: 'InvalidEmail'
}, {
  Name: 'cgenerateValidEmail',
  Actual: s.cgenerateValidEmail,
  Expected: 'generateValidEmail'
}, {
  Name: 'cgenerateInvalidEmail',
  Actual: s.cgenerateInvalidEmail,
  Expected: 'generateInvalidEmail'
}, {
  Name: 'cRandomValidEmail',
  Actual: s.cRandomValidEmail,
  Expected: 'RandomValidEmail'
}, {
  Name: 'cRandomInvalidEmail',
  Actual: s.cRandomInvalidEmail,
  Expected: 'RandomInvalidEmail'
}, {
  Name: 'cLetterOr',
  Actual: s.cLetterOr,
  Expected: 'LetterOr'
}, {
  Name: 'cLetterOrSpecialCharacter',
  Actual: s.cLetterOrSpecialCharacter,
  Expected: 'LetterOrSpecialCharacter'
}, {
  Name: 'cLetterOrNumberOrSpecialCharacter',
  Actual: s.cLetterOrNumberOrSpecialCharacter,
  Expected: 'LetterOrNumberOrSpecialCharacter'
}, {
  Name: 'cAlphaNumericCharacter',
  Actual: s.cAlphaNumericCharacter,
  Expected: 'AlphaNumericCharacter'
}, {
  Name: 'cSuffixAndDomain',
  Actual: s.cSuffixAndDomain,
  Expected: 'SuffixAndDomain'
}, {
  Name: 'cWithSpecificSuffixAndDomainName',
  Actual: s.cWithSpecificSuffixAndDomainName,
  Expected: 'WithSpecificSuffixAndDomainName'
}, {
  Name: 'cNumericCharacter',
  Actual: s.cNumericCharacter,
  Expected: 'NumericCharacter'
}, {
  Name: 'cNumberInRange',
  Actual: s.cNumberInRange,
  Expected: 'NumberInRange'
}, {
  Name: 'cBooleanValue',
  Actual: s.cBooleanValue,
  Expected: 'BooleanValue'
}, {
  Name: 'cAlphabeticCharacter',
  Actual: s.cAlphabeticCharacter,
  Expected: 'AlphabeticCharacter'
}, {
  Name: 'cCarriageReturn',
  Actual: s.cCarriageReturn,
  Expected: 'CarriageReturn'
}, {
  Name: 'cDashboardLogs',
  Actual: s.cDashboardLogs,
  Expected: 'DashboardLogs'
}, {
  Name: 'cVideoLogs',
  Actual: s.cVideoLogs,
  Expected: 'VideoLogs'
}, {
  Name: 'cForwardSlash',
  Actual: s.cForwardSlash,
  Expected: 'ForwardSlash'
}, {
  Name: 'cBackSlash',
  Actual: s.cBackSlash,
  Expected: 'BackSlash'
}, {
  Name: 'cPage_Keywords',
  Actual: s.cPage_Keywords,
  Expected: 'Page_Keywords'
}, {
  Name: 'cnavigateTo',
  Actual: s.cnavigateTo,
  Expected: 'navigateTo'
}, {
  Name: 'cNavigateTo',
  Actual: s.cNavigateTo,
  Expected: 'NavigateTo'
}, {
  Name: 'cBrowserRefresh',
  Actual: s.cBrowserRefresh,
  Expected: 'BrowserRefresh'
}, {
  Name: 'cSpaceIsColonSpace',
  Actual: s.cSpaceIsColonSpace,
  Expected: ' is: '
}, {
  Name: 'cdeployApplication',
  Actual: s.cdeployApplication,
  Expected: 'deployApplication'
}, {
  Name: 'cdeployMetaData',
  Actual: s.cdeployMetaData,
  Expected: 'deployMetaData'
}, {
  Name: 'creleaseApplication',
  Actual: s.creleaseApplication,
  Expected: 'releaseApplication'
}, {
  Name: 'cbackground',
  Actual: s.cbackground,
  Expected: 'background'
}, {
  Name: 'cBackground',
  Actual: s.cBackground,
  Expected: 'Background'
}, {
  Name: 'cConfiguration_Colors',
  Actual: s.cConfiguration_Colors,
  Expected: 'Configuration_Colors'
}, {
  Name: 'cColorData',
  Actual: s.cColorData,
  Expected: 'ColorData'
}, {
  Name: 'cColorName',
  Actual: s.cColorName,
  Expected: 'ColorName'
}, {
  Name: 'cbusinessRule',
  Actual: s.cbusinessRule,
  Expected: 'businessRule'
}, {
  Name: 'cBusinessRule',
  Actual: s.cBusinessRule,
  Expected: 'BusinessRule'
}, {
  Name: 'cbusinessRules',
  Actual: s.cbusinessRules,
  Expected: 'businessRules'
}, {
  Name: 'cBusinessRules',
  Actual: s.cBusinessRules,
  Expected: 'BusinessRules'
}, {
  Name: 'crulesLibrary',
  Actual: s.crulesLibrary,
  Expected: 'rulesLibrary'
}, {
  Name: 'cframework',
  Actual: s.cframework,
  Expected: 'framework'
}, {
  Name: 'cFramework',
  Actual: s.cFramework,
  Expected: 'Framework'
}, {
  Name: 'cCommandsAliases',
  Actual: s.cCommandsAliases,
  Expected: 'CommandsAliases'
}, {
  Name: 'cCommandWorkflows',
  Actual: s.cCommandWorkflows,
  Expected: 'CommandWorkflows'
}, {
  Name: 'cStandardDeviation',
  Actual: s.cStandardDeviation,
  Expected: 'StandardDeviation'
}, {
  Name: 'cHexValue',
  Actual: s.cHexValue,
  Expected: 'HexValue'
}, {
  Name: 'cexportconst',
  Actual: s.cexportconst,
  Expected: 'export const'
}, {
  Name: 'cExportConst',
  Actual: s.cExportConst,
  Expected: 'Export Const'
}, {
  Name: 'cDataStorage',
  Actual: s.cDataStorage,
  Expected: 'DataStorage'
}, {
  Name: 'cSource1',
  Actual: s.cSource1,
  Expected: 'Source1'
}, {
  Name: 'cSource2',
  Actual: s.cSource2,
  Expected: 'Source2'
}, {
  Name: 'cbigInteger',
  Actual: s.cbigInteger,
  Expected: 'bigInteger'
}, {
  Name: 'cnumberOfCharactersToGenerate',
  Actual: s.cnumberOfCharactersToGenerate,
  Expected: 'numberOfCharactersToGenerate'
}, {
  Name: 'cgenerateSpecialCharacters',
  Actual: s.cgenerateSpecialCharacters,
  Expected: 'generateSpecialCharacters'
}, {
  Name: 'callowableSpecialCharacters',
  Actual: s.callowableSpecialCharacters,
  Expected: 'allowableSpecialCharacters'
}, {
  Name: 'cspecifiedSuffixAndDomain',
  Actual: s.cspecifiedSuffixAndDomain,
  Expected: 'specifiedSuffixAndDomain'
}, {
  Name: 'cfailureMode',
  Actual: s.cfailureMode,
  Expected: 'failureMode'
}, {
  Name: 'cWithoutThe',
  Actual: s.cWithoutThe,
  Expected: 'Without the'
}, {
  Name: 'cwasCompleted',
  Actual: s.cwasCompleted,
  Expected: 'was completed'
}, {
  Name: 'cGenerateA',
  Actual: s.cGenerateA,
  Expected: 'Generate a'
}, {
  Name: 'cprogramLoop',
  Actual: s.cprogramLoop,
  Expected: 'program loop'
}, {
  Name: 'candPrefix',
  Actual: s.candPrefix,
  Expected: 'and prefix'
}, {
  Name: 'candSuffix',
  Actual: s.candSuffix,
  Expected: 'and suffix'
}, {
  Name: 'cdomainSpaceName',
  Actual: s.cdomainSpaceName,
  Expected: 'domain name'
}, {
  Name: 'candSpaceDomainSpaceName',
  Actual: s.candSpaceDomainSpaceName,
  Expected: 'and domain name'
}, {
  Name: 'ccurrentMasterStringArrayElement',
  Actual: s.ccurrentMasterStringArrayElement,
  Expected: 'currentMasterStringArrayElement'
}, {
  Name: 'cLehmerCodeArray',
  Actual: s.cLehmerCodeArray,
  Expected: 'LehmerCodeArray'
}, {
  Name: 'creturnData',
  Actual: s.creturnData,
  Expected: 'returnData'
}, // Logging Constants
{
  Name: 'cBEGIN_Function',
  Actual: s.cBEGIN_Function,
  Expected: 'BEGIN %% Function'
}, {
  Name: 'cEND_Function',
  Actual: s.cEND_Function,
  Expected: 'END %% Function'
}, {
  Name: 'cinputData',
  Actual: s.cinputData,
  Expected: 'inputData'
}, {
  Name: 'cInputData',
  Actual: s.cInputData,
  Expected: 'InputData'
}, {
  Name: 'cinputMetaData',
  Actual: s.cinputMetaData,
  Expected: 'inputMetaData'
}, {
  Name: 'cInputMetaData',
  Actual: s.cInputMetaData,
  Expected: 'InputMetaData'
}, {
  Name: 'cinputDataIs',
  Actual: s.cinputDataIs,
  Expected: 'inputData is: '
}, {
  Name: 'cinputMetaDataIs',
  Actual: s.cinputMetaDataIs,
  Expected: 'inputMetaData is: '
}, {
  Name: 'creturnDataIs',
  Actual: s.creturnDataIs,
  Expected: 'returnData is: '
}, {
  Name: 'cLogBasicSystemEvents',
  Actual: s.cLogBasicSystemEvents,
  Expected: 'LogBasicSystemEvents'
}, {
  Name: 'cLogWarnings',
  Actual: s.cLogWarnings,
  Expected: 'LogWarnings'
}, // Logging Styles Constants
{
  Name: 'cModuleFontStyle',
  Actual: s.cModuleFontStyle,
  Expected: 'ModuleFontStyle'
}, {
  Name: 'cFunctionFontStyle',
  Actual: s.cFunctionFontStyle,
  Expected: 'FunctionFontStyle'
}, {
  Name: 'cMessageFontStyle',
  Actual: s.cMessageFontStyle,
  Expected: 'MessageFontStyle'
}, {
  Name: 'cDataFontStyle',
  Actual: s.cDataFontStyle,
  Expected: 'DataFontStyle'
}, {
  Name: 'cModuleFontColor',
  Actual: s.cModuleFontColor,
  Expected: 'ModuleFontColor'
}, {
  Name: 'cFunctionFontColor',
  Actual: s.cFunctionFontColor,
  Expected: 'FunctionFontColor'
}, {
  Name: 'cMessageFontColor',
  Actual: s.cMessageFontColor,
  Expected: 'MessageFontColor'
}, {
  Name: 'cDataFontColor',
  Actual: s.cDataFontColor,
  Expected: 'DataFontColor'
}, {
  Name: 'cModuleFontBackgroundColor',
  Actual: s.cModuleFontBackgroundColor,
  Expected: 'ModuleFontBackgroundColor'
}, {
  Name: 'cFunctionFontBackgroundColor',
  Actual: s.cFunctionFontBackgroundColor,
  Expected: 'FunctionFontBackgroundColor'
}, {
  Name: 'cMessageFontBackgroundColor',
  Actual: s.cMessageFontBackgroundColor,
  Expected: 'MessageFontBackgroundColor'
}, {
  Name: 'cDataFontBackgroundColor',
  Actual: s.cDataFontBackgroundColor,
  Expected: 'DataFontBackgroundColor'
}, // System Messages
{
  Name: 'cApplicationWarningMessage1a',
  Actual: s.cApplicationWarningMessage1a,
  Expected: 'WARNING: No .Env File undefined! '
}, {
  Name: 'cApplicationWarningMessage1b',
  Actual: s.cApplicationWarningMessage1b,
  Expected: 'Going to default to the DEVELOPMENT ENVIRONMENT!'
}, {
  Name: 'cApplicationMessage2',
  Actual: s.cApplicationMessage2,
  Expected: 'BEGIN main program loop'
}, {
  Name: 'cApplicationMessage3',
  Actual: s.cApplicationMessage3,
  Expected: 'BEGIN command parser'
}, {
  Name: 'cApplicationMessage4',
  Actual: s.cApplicationMessage4,
  Expected: 'END command parser'
}, {
  Name: 'cApplicationMessage5',
  Actual: s.cApplicationMessage5,
  Expected: 'END main program loop'
}, {
  Name: 'cApplicationExitMessage1',
  Actual: s.cApplicationExitMessage1,
  Expected: 'Exiting, Good bye, Have a nice '
}, {
  Name: 'cApplicationExitMessage2',
  Actual: s.cApplicationExitMessage2,
  Expected: 'day & stay safe!'
}, {
  Name: 'cBuildMessage1',
  Actual: s.cBuildMessage1,
  Expected: 'Deployment was completed: '
}, {
  Name: 'cBuildMessage2',
  Actual: s.cBuildMessage2,
  Expected: 'Release was completed: '
}, {
  Name: 'cCharacterGenerationMessage1',
  Actual: s.cCharacterGenerationMessage1,
  Expected: 'typeToGenerate is: '
}, {
  Name: 'cCharacterGenerationMessage2',
  Actual: s.cCharacterGenerationMessage2,
  Expected: 'Generate a number.'
}, {
  Name: 'cCharacterGenerationMessage3',
  Actual: s.cCharacterGenerationMessage3,
  Expected: 'Generate a random upper case or lower case letter.'
}, {
  Name: 'cCharacterGenerationMessage4',
  Actual: s.cCharacterGenerationMessage4,
  Expected: 'Generate a special character.'
}, {
  Name: 'cCharacterGenerationMessage5',
  Actual: s.cCharacterGenerationMessage5,
  Expected: 'DEFAULT: Generate a random upper case or lower case letter.'
}, {
  Name: 'cMathOperationsMessage1',
  Actual: s.cMathOperationsMessage1,
  Expected: 'bigInteger is: '
}, {
  Name: 'cnumberOfCharactersToGenerateIs',
  Actual: s.cnumberOfCharactersToGenerateIs,
  Expected: 'numberOfCharactersToGenerate is: '
}, {
  Name: 'cgenerateSpecialCharactersIs',
  Actual: s.cgenerateSpecialCharactersIs,
  Expected: 'generateSpecialCharacters is: '
}, {
  Name: 'callowableSpecialCharactersIs',
  Actual: s.callowableSpecialCharactersIs,
  Expected: 'allowableSpecialCharacters is: '
}, {
  Name: 'cspecifiedSuffixAndDomainIs',
  Actual: s.cspecifiedSuffixAndDomainIs,
  Expected: 'specifiedSuffixAndDomain is: '
}, {
  Name: 'cfailureModeIs',
  Actual: s.cfailureModeIs,
  Expected: 'failureMode is: '
}, {
  Name: 'cprefixIs',
  Actual: s.cprefixIs,
  Expected: 'prefix is: '
}, {
  Name: 'csuffixIs',
  Actual: s.csuffixIs,
  Expected: 'suffix is: '
}, {
  Name: 'cWithoutTheAtSymbol',
  Actual: s.cWithoutTheAtSymbol,
  Expected: 'Without the @ symbol.'
}, {
  Name: 'cWithoutThePrefix',
  Actual: s.cWithoutThePrefix,
  Expected: 'Without the prefix.'
}, {
  Name: 'cWithoutTheSuffix',
  Actual: s.cWithoutTheSuffix,
  Expected: 'Without the suffix.'
}, {
  Name: 'cWithoutTheAtSymbolAndPrefix',
  Actual: s.cWithoutTheAtSymbolAndPrefix,
  Expected: 'Without the @ and prefix.'
}, {
  Name: 'cDEFAULTWithoutTheAtSymbolAndPrefix',
  Actual: s.cDEFAULTWithoutTheAtSymbolAndPrefix,
  Expected: 'DEFAULT: Without the @ and prefix.'
}, {
  Name: 'cdomainNameIs',
  Actual: s.cdomainNameIs,
  Expected: 'domainName is: '
}, {
  Name: 'cnumberOfPrefixCharactersIs',
  Actual: s.cnumberOfPrefixCharactersIs,
  Expected: 'numberOfPrefixCharacters is: '
}, {
  Name: 'cnumberOfSuffixCharactersIs',
  Actual: s.cnumberOfSuffixCharactersIs,
  Expected: 'numberOfSuffixCharacters is: '
}, {
  Name: 'cWithoutTheDotSymbol',
  Actual: s.cWithoutTheDotSymbol,
  Expected: 'Without the . symbol.'
}, {
  Name: 'cWithoutTheAtAndDotSymbols',
  Actual: s.cWithoutTheAtAndDotSymbols,
  Expected: 'Without the @ and . symbols.'
}, {
  Name: 'cWithoutTheDomainName',
  Actual: s.cWithoutTheDomainName,
  Expected: 'Without the domain name.'
}, {
  Name: 'cWithoutTheAtSymbolAndDomainName',
  Actual: s.cWithoutTheAtSymbolAndDomainName,
  Expected: 'Without the @ and domain name.'
}, {
  Name: 'cWithoutTheDotAndDomainName',
  Actual: s.cWithoutTheDotAndDomainName,
  Expected: 'Without the . and domain name.'
}, {
  Name: 'cWithoutTheAtSymbolDotAndDomainName',
  Actual: s.cWithoutTheAtSymbolDotAndDomainName,
  Expected: 'Without the @, . and domain name.'
}, {
  Name: 'cWithoutTheDotAndPrefix',
  Actual: s.cWithoutTheDotAndPrefix,
  Expected: 'Without the . and prefix.'
}, {
  Name: 'cWithoutTheAtSymbolAndSuffix',
  Actual: s.cWithoutTheAtSymbolAndSuffix,
  Expected: 'Without the @ and suffix.'
}, {
  Name: 'cWithoutTheDotAndSuffix',
  Actual: s.cWithoutTheDotAndSuffix,
  Expected: 'Without the . and suffix.'
}, {
  Name: 'cWithoutTheAtSymbolDotAndPrefix',
  Actual: s.cWithoutTheAtSymbolDotAndPrefix,
  Expected: 'Without the @, . and prefix.'
}, {
  Name: 'cWithoutTheAtSymbolDotAndSuffix',
  Actual: s.cWithoutTheAtSymbolDotAndSuffix,
  Expected: 'Without the @, . and suffix.'
}, {
  Name: 'cWithoutTheAtSymbolDotPrefixAndSuffix',
  Actual: s.cWithoutTheAtSymbolDotPrefixAndSuffix,
  Expected: 'Without the @, ., prefix and suffix.'
}, {
  Name: 'cWithoutThePrefixAndDomainName',
  Actual: s.cWithoutThePrefixAndDomainName,
  Expected: 'Without the prefix and domain name.'
}, {
  Name: 'cWithoutTheSuffixAndDomainName',
  Actual: s.cWithoutTheSuffixAndDomainName,
  Expected: 'Without the suffix and domain name.'
}, {
  Name: 'cWithoutThePrefixAndSuffix',
  Actual: s.cWithoutThePrefixAndSuffix,
  Expected: 'Without the prefix and suffix.'
}, {
  Name: 'cWithoutThePrefixSuffixAndDomainName',
  Actual: s.cWithoutThePrefixSuffixAndDomainName,
  Expected: 'Without the prefix, suffix and domain name.'
}, {
  Name: 'cWithoutTheAtSymbolPrefixAndDomainName',
  Actual: s.cWithoutTheAtSymbolPrefixAndDomainName,
  Expected: 'Without the @, prefix and domain name.'
}, {
  Name: 'cWithoutTheDotPrefixAndDomainName',
  Actual: s.cWithoutTheDotPrefixAndDomainName,
  Expected: 'Without the ., prefix and domain name.'
}, {
  Name: 'cWithoutTheAtSymbolSuffixAndDomainName',
  Actual: s.cWithoutTheAtSymbolSuffixAndDomainName,
  Expected: 'Without the @, suffix and domain name.'
}, {
  Name: 'cWithoutTheDotSuffixAndDomainName',
  Actual: s.cWithoutTheDotSuffixAndDomainName,
  Expected: 'Without the ., suffix and domain name.'
}, {
  Name: 'cWithoutTheAtSymbolPrefixSuffixAndDomainName',
  Actual: s.cWithoutTheAtSymbolPrefixSuffixAndDomainName,
  Expected: 'Without the @, prefix, suffix and domain name.'
}, {
  Name: 'cWithoutTheDotPrefixSuffixAndDomainName',
  Actual: s.cWithoutTheDotPrefixSuffixAndDomainName,
  Expected: 'Without the ., prefix, suffix and domain name.'
}, {
  Name: 'cWithoutThePrefixSuffixAndAtSymbol',
  Actual: s.cWithoutThePrefixSuffixAndAtSymbol,
  Expected: 'Without the prefix, suffix name@.'
}, {
  Name: 'cWithoutThePrefixSuffixAndDot',
  Actual: s.cWithoutThePrefixSuffixAndDot,
  Expected: 'Without the prefix, suffix and ..'
}, {
  Name: 'cIndexOfTheSpace',
  Actual: s.cIndexOfTheSpace,
  Expected: 'Index of the '
}, {
  Name: 'cisResolvingAs',
  Actual: s.cisResolvingAs,
  Expected: 'is resolving as: '
}, {
  Name: 'cparsedStringSpaceTerm',
  Actual: s.cparsedStringSpaceTerm,
  Expected: 'parsedString term'
}, {
  Name: 'cstring1Is',
  Actual: s.cstring1Is,
  Expected: 'string1 is: '
}, {
  Name: 'cstring2Is',
  Actual: s.cstring2Is,
  Expected: 'string2 is: '
}, {
  Name: 'cvariation0ValueIs',
  Actual: s.cvariation0ValueIs,
  Expected: 'variation0 value is: '
}, {
  Name: 'cvariation1ValueIs',
  Actual: s.cvariation1ValueIs,
  Expected: 'variation1 value is: '
}, {
  Name: 'ciValueIs',
  Actual: s.ciValueIs,
  Expected: 'i value is: '
}, {
  Name: 'cjValueIs',
  Actual: s.cjValueIs,
  Expected: 'j value is: '
}, {
  Name: 'cdeletionCostIs',
  Actual: s.cdeletionCostIs,
  Expected: 'deletionCost is: '
}, {
  Name: 'cinsertionCostIs',
  Actual: s.cinsertionCostIs,
  Expected: 'insertionCost is: '
}, {
  Name: 'csubstitutionCostIs',
  Actual: s.csubstitutionCostIs,
  Expected: 'substitutionCost is: '
}, {
  Name: 'ccamelCaseWordCountIs',
  Actual: s.ccamelCaseWordCountIs,
  Expected: 'camelCaseWordCount is: '
}, {
  Name: 'ccontainsAcronymIs',
  Actual: s.ccontainsAcronymIs,
  Expected: 'containsAcronym is: '
}, {
  Name: 'cspacesCountIs',
  Actual: s.cspacesCountIs,
  Expected: 'spacesCount is: '
}, {
  Name: 'cperiodCountIs',
  Actual: s.cperiodCountIs,
  Expected: 'periodCount is: '
}, {
  Name: 'cdashCountIs',
  Actual: s.cdashCountIs,
  Expected: 'dashCount is: '
}, {
  Name: 'cunderscoreCountIs',
  Actual: s.cunderscoreCountIs,
  Expected: 'underscoreCount is: '
}, {
  Name: 'cstringDeltaValueIs',
  Actual: s.cstringDeltaValueIs,
  Expected: 'stringDelta value is: '
}, {
  Name: 'cFilenamesMatch',
  Actual: s.cFilenamesMatch,
  Expected: 'Filenames match'
}, {
  Name: 'cFilenamesDoNotMatch',
  Actual: s.cFilenamesDoNotMatch,
  Expected: 'Filenames do not match'
}, {
  Name: 'cArrayElementsMatch',
  Actual: s.cArrayElementsMatch,
  Expected: 'Array elements match'
}, {
  Name: 'cArrayElementsDoNotMatch',
  Actual: s.cArrayElementsDoNotMatch,
  Expected: 'Array elements do not match'
}, {
  Name: 'clineArray2Is',
  Actual: s.clineArray2Is,
  Expected: 'lineArray[2] is: '
}, {
  Name: 'cSuggestedLineOfCodeIs',
  Actual: s.cSuggestedLineOfCodeIs,
  Expected: 'Suggested line of code is: '
}, {
  Name: 'cErrorUnknownConstantFile',
  Actual: s.cErrorUnknownConstantFile,
  Expected: 'ERROR: Unknown constant file.'
}, {
  Name: 'cconstantsTypesKeysIs',
  Actual: s.cconstantsTypesKeysIs,
  Expected: 'constantsTypesKeys is: '
}, {
  Name: 'cconstantTypeKeyIs',
  Actual: s.cconstantTypeKeyIs,
  Expected: 'constantTypeKey is: '
}, {
  Name: 'cconstantTypeValuesIs',
  Actual: s.cconstantTypeValuesIs,
  Expected: 'constantTypeValues is: '
}, {
  Name: 'cconstantsKeysIs',
  Actual: s.cconstantsKeysIs,
  Expected: 'constantsKeys is: '
}, {
  Name: 'cconstantKeyIs',
  Actual: s.cconstantKeyIs,
  Expected: 'constantKey is: '
}, {
  Name: 'cconstantActualValueIs',
  Actual: s.cconstantActualValueIs,
  Expected: 'constantActualValue is: '
}, {
  Name: 'cconstantNameIs',
  Actual: s.cconstantNameIs,
  Expected: 'constantName is: '
}, {
  Name: 'cconstantValueIs',
  Actual: s.cconstantValueIs,
  Expected: 'constantValue is: '
}, {
  Name: 'cdeltaLengthIs',
  Actual: s.cdeltaLengthIs,
  Expected: 'deltaLength is: '
}, {
  Name: 'crecursiveSubStringIs',
  Actual: s.crecursiveSubStringIs,
  Expected: 'recursiveSubString is: '
}, {
  Name: 'cmaxStringLengthIs',
  Actual: s.cmaxStringLengthIs,
  Expected: 'maxStringLength is: '
}, {
  Name: 'cminStringLengthIs',
  Actual: s.cminStringLengthIs,
  Expected: 'minStringLength is: '
}, {
  Name: 'ccurrentMasterStringArrayElementIs',
  Actual: s.ccurrentMasterStringArrayElementIs,
  Expected: 'currentMasterStringArrayElement is: '
}, {
  Name: 'cConstantDoesNotExist',
  Actual: s.cConstantDoesNotExist,
  Expected: 'Constant does NOT exist: '
}, {
  Name: 'cConstantDoesExist',
  Actual: s.cConstantDoesExist,
  Expected: 'Constant does exist: '
}, {
  Name: 'cBEGIN_ithLoop',
  Actual: s.cBEGIN_ithLoop,
  Expected: 'BEGIN i-th loop: '
}, {
  Name: 'cBEGIN_ithIteration',
  Actual: s.cBEGIN_ithIteration,
  Expected: 'BEGIN i-th iteration: '
}, {
  Name: 'cBEGIN_jthLoop',
  Actual: s.cBEGIN_jthLoop,
  Expected: 'BEGIN j-th loop: '
}, {
  Name: 'cBEGIN_kthIteration',
  Actual: s.cBEGIN_kthIteration,
  Expected: 'BEGIN k-th iteration: '
}, {
  Name: 'cEND_ithLoop',
  Actual: s.cEND_ithLoop,
  Expected: 'END i-th loop: '
}, {
  Name: 'cEND_ithIteration',
  Actual: s.cEND_ithIteration,
  Expected: 'END i-th Iteration: '
}, {
  Name: 'cEND_jthLoop',
  Actual: s.cEND_jthLoop,
  Expected: 'END j-th loop: '
}, {
  Name: 'cEND_kthIteration',
  Actual: s.cEND_kthIteration,
  Expected: 'END k-th iteration: '
}, {
  Name: 'ccurrentCommandIs',
  Actual: s.ccurrentCommandIs,
  Expected: 'currentCommand is: '
}, {
  Name: 'caliasListIs',
  Actual: s.caliasListIs,
  Expected: 'aliasList is: '
}, {
  Name: 'ccurrentAliasIs',
  Actual: s.ccurrentAliasIs,
  Expected: 'currentAlias is: '
}, {
  Name: 'cduplicateAliasCountIs',
  Actual: s.cduplicateAliasCountIs,
  Expected: 'duplicateAliasCount is: '
}, {
  Name: 'cduplicateCommandAliasIs',
  Actual: s.cduplicateCommandAliasIs,
  Expected: 'duplicate Command Alias is: '
}, {
  Name: 'ccommandWordAliasesBeforeChangeIs',
  Actual: s.ccommandWordAliasesBeforeChangeIs,
  Expected: 'commandWordAliases BEFORE CHANGE is: '
}, {
  Name: 'ccommandWordAliasesAfterChangeIs',
  Actual: s.ccommandWordAliasesAfterChangeIs,
  Expected: 'commandWordAliasesArray AFTER CHANGE is: '
}, {
  Name: 'cmasterCommandWordAlisesArrayIs',
  Actual: s.cmasterCommandWordAlisesArrayIs,
  Expected: 'masterCommandWordAliasesArray is: '
}, {
  Name: 'cmasterArrayIndexIs',
  Actual: s.cmasterArrayIndexIs,
  Expected: 'masterArrayIndex is: '
}, {
  Name: 'cCommandAliasesAre',
  Actual: s.cCommandAliasesAre,
  Expected: 'Command Aliases are: '
}, {
  Name: 'cexpandedLehmerCodeArrayIs',
  Actual: s.cexpandedLehmerCodeArrayIs,
  Expected: 'expandedLehmerCodeArray is: '
}, {
  Name: 'cindexOfExpansionIs',
  Actual: s.cindexOfExpansionIs,
  Expected: 'indexOfExpansion is: '
}, {
  Name: 'carrayToBeExpandedIs',
  Actual: s.carrayToBeExpandedIs,
  Expected: 'arrayToBeExpanded is: '
}, {
  Name: 'climitOfExpansionIs',
  Actual: s.climitOfExpansionIs,
  Expected: 'limitOfExpansion is: '
}, {
  Name: 'cpushingLehmerCodeArray1ToReturnDataValue',
  Actual: s.cpushingLehmerCodeArray1ToReturnDataValue,
  Expected: 'pushing LehmerCodeArray1 to returnData value: '
}, {
  Name: 'creturnDataAfterPushIs',
  Actual: s.creturnDataAfterPushIs,
  Expected: 'returnData after push is: '
}, {
  Name: 'creturnDataAfterLevel1Is',
  Actual: s.creturnDataAfterLevel1Is,
  Expected: 'returnData after level 1 is: '
}, {
  Name: 'carrayToBeExpandedDotLengthIs',
  Actual: s.carrayToBeExpandedDotLengthIs,
  Expected: 'arrayToBeExpanded.length is: '
}, {
  Name: 'creturnDataDotLengthIs',
  Actual: s.creturnDataDotLengthIs,
  Expected: 'returnData.Length is: '
}, {
  Name: 'creturnDataBeforePopIs',
  Actual: s.creturnDataBeforePopIs,
  Expected: 'returnData BEFORE POP is: '
}, {
  Name: 'creturnDataAfterPopIs',
  Actual: s.creturnDataAfterPopIs,
  Expected: 'returnData AFTER POP is: '
}, {
  Name: 'cmasterTempReturnDataBeforeRecursiveCallIs',
  Actual: s.cmasterTempReturnDataBeforeRecursiveCallIs,
  Expected: 'masterTempReturnData BEFORE recursive call is: '
}, {
  Name: 'ctempReturnData1Is',
  Actual: s.ctempReturnData1Is,
  Expected: 'tempReturnData1 is: '
}, {
  Name: 'ctempReturnData1DotLengthIs',
  Actual: s.ctempReturnData1DotLengthIs,
  Expected: 'tempReturnData1length is: '
}, {
  Name: 'cpushingTempReturnData1Kvalue',
  Actual: s.cpushingTempReturnData1Kvalue,
  Expected: 'pushing tempReturnData1[k] value: '
}, {
  Name: 'cmasterTempReturnDataAfterRecursiveCallIs',
  Actual: s.cmasterTempReturnDataAfterRecursiveCallIs,
  Expected: 'masterTempReturnData AFTER recursive call is: '
}, {
  Name: 'clookupIndexIs',
  Actual: s.clookupIndexIs,
  Expected: 'lookupIndex is: '
}, {
  Name: 'clookupValueIs',
  Actual: s.clookupValueIs,
  Expected: 'lookupValue is: '
}, {
  Name: 'cDataCatagoryShouldBe',
  Actual: s.cDataCatagoryShouldBe,
  Expected: 'Data Catagory should be: '
}, {
  Name: 'cDataCatagoryDetailNameShouldBe',
  Actual: s.cDataCatagoryDetailNameShouldBe,
  Expected: 'Data Catagory Detail Name should be: '
}, {
  Name: 'cKeywordNameShouldBe',
  Actual: s.cKeywordNameShouldBe,
  Expected: 'Keyword Name should be: '
}, {
  Name: 'cpathElementIs',
  Actual: s.cpathElementIs,
  Expected: 'pathElement is: '
}, {
  Name: 'ccaseIEqual0',
  Actual: s.ccaseIEqual0,
  Expected: 'case: i = 0'
}, {
  Name: 'ccasePathElementEqual',
  Actual: s.ccasePathElementEqual,
  Expected: 'case: pathElement = '
}, {
  Name: 'ccaseElse',
  Actual: s.ccaseElse,
  Expected: 'case else'
}, {
  Name: 'creturnDataSoFarIs',
  Actual: s.creturnDataSoFarIs,
  Expected: 'returnData so far is: '
}, {
  Name: 'cpathArrayIs',
  Actual: s.cpathArrayIs,
  Expected: 'pathArray is: '
}, {
  Name: 'ccurrentPathElementIs',
  Actual: s.ccurrentPathElementIs,
  Expected: 'current path element is: '
}, {
  Name: 'cAttemptingToLoadXmlData',
  Actual: s.cAttemptingToLoadXmlData,
  Expected: 'Attempting to load XML data!'
}, {
  Name: 'cAttemptingToLoadCsvData',
  Actual: s.cAttemptingToLoadCsvData,
  Expected: 'Attempting to load CSV data!'
}, {
  Name: 'cAttemptingToLoadJsonData',
  Actual: s.cAttemptingToLoadJsonData,
  Expected: 'Attempting to load JSON data!'
}, {
  Name: 'cLoadedDataIs',
  Actual: s.cLoadedDataIs,
  Expected: 'Loaded data is: '
}, {
  Name: 'cattributeArrayIs',
  Actual: s.cattributeArrayIs,
  Expected: 'attributeArray is: '
}, {
  Name: 'cattributeArray0Is',
  Actual: s.cattributeArray0Is,
  Expected: 'attributeArray[0] is: '
}, {
  Name: 'carrayIs',
  Actual: s.carrayIs,
  Expected: 'array is: '
}, {
  Name: 'cvalueIs',
  Actual: s.cvalueIs,
  Expected: 'value is: '
}, {
  Name: 'cmyFunctionIs',
  Actual: s.cmyFunctionIs,
  Expected: 'myFunction is: '
}, {
  Name: 'carrayInputObjectIsNotAnArray',
  Actual: s.carrayInputObjectIsNotAnArray,
  Expected: 'array input object is not an array.'
}, {
  Name: 'cTheValueWasFoundInTheArray',
  Actual: s.cTheValueWasFoundInTheArray,
  Expected: 'The value was found in the array.'
}, {
  Name: 'cTheValueWasNotFoundInTheArray',
  Actual: s.cTheValueWasNotFoundInTheArray,
  Expected: 'The value was NOT found in the array.'
}, {
  Name: 'coriginalStringIs',
  Actual: s.coriginalStringIs,
  Expected: 'originalString is: '
}, {
  Name: 'cindexIs',
  Actual: s.cindexIs,
  Expected: 'index  is: '
}, {
  Name: 'creplacementIs',
  Actual: s.creplacementIs,
  Expected: 'replacement is: '
}, {
  Name: 'cDEPLOY_APPLICATION',
  Actual: s.cDEPLOY_APPLICATION,
  Expected: 'DEPLOY_APPLICATION'
}, {
  Name: 'cRELEASE_APPLICATION',
  Actual: s.cRELEASE_APPLICATION,
  Expected: 'RELEASE_APPLICATION'
}, {
  Name: 'cDeploymentWasCompleted',
  Actual: s.cDeploymentWasCompleted,
  Expected: 'Deployment was completed: '
}, {
  Name: 'cinputDataIis',
  Actual: s.cinputDataIis,
  Expected: 'inputData[i] is: '
}, {
  Name: 'caggregateCommandStringIs',
  Actual: s.caggregateCommandStringIs,
  Expected: 'aggregateCommandString is: '
}, {
  Name: 'cmetaDataParametersIs',
  Actual: s.cmetaDataParametersIs,
  Expected: 'metaDataParameters is: '
}, {
  Name: 'cmetaDataParametersLengthIs',
  Actual: s.cmetaDataParametersLengthIs,
  Expected: 'metaDataParameters Length is: '
}, {
  Name: 'cmetaDataPathAndFilenameIs',
  Actual: s.cmetaDataPathAndFilenameIs,
  Expected: 'metaDataPathAndFilename is: '
}, {
  Name: 'cpathAndFilenameIs',
  Actual: s.cpathAndFilenameIs,
  Expected: 'pathAndFilename is: '
}, {
  Name: 'ccontentsAre',
  Actual: s.ccontentsAre,
  Expected: 'contents are: '
}, {
  Name: 'ccontentsOfDare',
  Actual: s.ccontentsOfDare,
  Expected: 'contents of D are: '
}, {
  Name: 'cBEGIN_ithIterationOfInputDataArray',
  Actual: s.cBEGIN_ithIterationOfInputDataArray,
  Expected: 'BEGIN i-th iteration: of the inputData array. i is: '
}, {
  Name: 'ccurrentRuleIs',
  Actual: s.ccurrentRuleIs,
  Expected: 'currentRule is: '
}, {
  Name: 'crulesIs',
  Actual: s.crulesIs,
  Expected: 'rules is: '
}, {
  Name: 'cruleInputDataIs',
  Actual: s.cruleInputDataIs,
  Expected: 'ruleInputData is: '
}, {
  Name: 'cruleInputMetaData',
  Actual: s.cruleInputMetaData,
  Expected: 'ruleInputMetaData is: '
}, {
  Name: 'cBusinessRuleStartTimeIs',
  Actual: s.cBusinessRuleStartTimeIs,
  Expected: 'Business Rule Start time is: '
}, {
  Name: 'cBusinessRuleEndTimeIs',
  Actual: s.cBusinessRuleEndTimeIs,
  Expected: 'Business Rule End time is: '
}, {
  Name: 'cBusinessRuleRunTimeIs',
  Actual: s.cBusinessRuleRunTimeIs,
  Expected: 'BusinessRule run-time is: '
}, {
  Name: 'ccommandStringBeforeAttemptedDelimiterSwapIs',
  Actual: s.ccommandStringBeforeAttemptedDelimiterSwapIs,
  Expected: 'commandString before attempted swap is: '
}, {
  Name: 'creplaceCharacterWithCharacterRuleIs',
  Actual: s.creplaceCharacterWithCharacterRuleIs,
  Expected: 'replaceCharacterWithCharacterRule is: '
}, {
  Name: 'cRuleOutputIs',
  Actual: s.cRuleOutputIs,
  Expected: 'Rule output is: '
}, {
  Name: 'ccamelCaseCommandNameArrayIs',
  Actual: s.ccamelCaseCommandNameArrayIs,
  Expected: 'camelCaseCommandNameArray is: '
}, {
  Name: 'ccurrentCommandWordIs',
  Actual: s.ccurrentCommandWordIs,
  Expected: 'currentCommandWord is: '
}, {
  Name: 'cPARSER_ERROR',
  Actual: s.cPARSER_ERROR,
  Expected: 'PARSER_ERROR: '
}, {
  Name: 'ccommandAliasDataStructureIs',
  Actual: s.ccommandAliasDataStructureIs,
  Expected: 'commandAliasDataStructure is: '
}, {
  Name: 'cuserDefinedConstantIs',
  Actual: s.cuserDefinedConstantIs,
  Expected: 'userDefinedConstant is: '
}, {
  Name: 'cwordCountIs',
  Actual: s.cwordCountIs,
  Expected: 'wordCount is: '
}, {
  Name: 'cwordsArrayIs',
  Actual: s.cwordsArrayIs,
  Expected: 'wordsArray is: '
}, {
  Name: 'cOptimizedConstantDefinitionForWord',
  Actual: s.cOptimizedConstantDefinitionForWord,
  Expected: 'Optimized constant definition for word: '
}, {
  Name: 'cuserDefinedConstantListIs',
  Actual: s.cuserDefinedConstantListIs,
  Expected: 'userDefinedConstantsList is: '
}, {
  Name: 'cuserDefinedConstantListContainsComas',
  Actual: s.cuserDefinedConstantListContainsComas,
  Expected: 'userDefinedConstantsList contains comas'
}, {
  Name: 'cuserDefinedConstantsListArrayIs',
  Actual: s.cuserDefinedConstantsListArrayIs,
  Expected: 'userDefinedConstantsListArray is: '
}, {
  Name: 'cuserDefinedConstantsListDoesNotContainComas',
  Actual: s.cuserDefinedConstantsListDoesNotContainComas,
  Expected: 'userDefinedConstantList DOES NOT contain comas'
}, {
  Name: 'ccommonPatternsArrayIs',
  Actual: s.ccommonPatternsArrayIs,
  Expected: 'commonPatternsArray is: '
}, {
  Name: 'cbusinessRuleCounterIs',
  Actual: s.cbusinessRuleCounterIs,
  Expected: 'businessRuleCounter is: '
}, {
  Name: 'cbusinessRulePerformanceSumIs',
  Actual: s.cbusinessRulePerformanceSumIs,
  Expected: 'businessRulePerformanceSum is: '
}, {
  Name: 'cDoneBusinessRulePerformanceSumIs',
  Actual: s.cDoneBusinessRulePerformanceSumIs,
  Expected: 'DONE! businessRulePerformanceSum is: '
}, {
  Name: 'caverageIs',
  Actual: s.caverageIs,
  Expected: 'average is: '
}, {
  Name: 'cbusinessRulePerformanceStdSumIs',
  Actual: s.cbusinessRulePerformanceStdSumIs,
  Expected: 'businessRulePerformanceStdSum is: '
}, {
  Name: 'cDoneBusinessRulePerformanceStdSumIs',
  Actual: s.cDoneBusinessRulePerformanceStdSumIs,
  Expected: 'DONE! businessRulePerformanceStdSum is: '
}, {
  Name: 'cstandardDevIs',
  Actual: s.cstandardDevIs,
  Expected: 'standardDev is: '
}, {
  Name: 'ccommandCounterIs',
  Actual: s.ccommandCounterIs,
  Expected: 'commandCounter is: '
}, {
  Name: 'ccommandPerformanceSumIs',
  Actual: s.ccommandPerformanceSumIs,
  Expected: 'commandPerformanceSum is: '
}, {
  Name: 'cDoneCommandPerformanceSumIs',
  Actual: s.cDoneCommandPerformanceSumIs,
  Expected: 'DONE! commandPerformanceSum is: '
}, {
  Name: 'ccommandPerformanceStdSumIs',
  Actual: s.ccommandPerformanceStdSumIs,
  Expected: 'commandPerformanceStdSum is: '
}, {
  Name: 'cDoneCommandPerformanceStdSumIs',
  Actual: s.cDoneCommandPerformanceStdSumIs,
  Expected: 'DONE! commandPerformanceStdSum is: '
}, {
  Name: 'ccolorKeysIs',
  Actual: s.ccolorKeysIs,
  Expected: 'colorKeys is: '
}, {
  Name: 'ccurrentColorNameIs',
  Actual: s.ccurrentColorNameIs,
  Expected: 'currentColorName is: '
}, {
  Name: 'ccurrentColorObjectIs',
  Actual: s.ccurrentColorObjectIs,
  Expected: 'currentColorObject is: '
}, {
  Name: 'ccurrentColorHexValueIs',
  Actual: s.ccurrentColorHexValueIs,
  Expected: 'currentColorHexValue is: '
}, {
  Name: 'cruleOutputIs',
  Actual: s.cruleOutputIs,
  Expected: 'ruleOutput is: '
}, {
  Name: 'cBeginPhase1ConstantsValidation',
  Actual: s.cBeginPhase1ConstantsValidation,
  Expected: 'BEGIN Phase 1 Constants Validation'
}, {
  Name: 'cEndPhase1ConstantsValidation',
  Actual: s.cEndPhase1ConstantsValidation,
  Expected: 'END Phase 1 Constants Validation'
}, {
  Name: 'cBeginPhase2ConstantsValidation',
  Actual: s.cBeginPhase2ConstantsValidation,
  Expected: 'BEGIN Phase 2 Constants Validation'
}, {
  Name: 'cEndPhase2ConstantsValidation',
  Actual: s.cEndPhase2ConstantsValidation,
  Expected: 'END Phase 2 Constants Validation'
}, {
  Name: 'cconstantsPathIs',
  Actual: s.cconstantsPathIs,
  Expected: 'constantsPath is: '
}, {
  Name: 'cresolvedConstantsPath_BasicIs',
  Actual: s.cresolvedConstantsPath_BasicIs,
  Expected: 'resolvedConstantsPath_Basic is: '
}, {
  Name: 'cresolvedConstantsPath_ColorIs',
  Actual: s.cresolvedConstantsPath_ColorIs,
  Expected: 'resolvedConstantsPath_Color is: '
}, {
  Name: 'cresolvedConstantsPath_ElementIs',
  Actual: s.cresolvedConstantsPath_ElementIs,
  Expected: 'resolvedConstantsPath_Element is: '
}, {
  Name: 'cresolvedConstantsPath_GenericIs',
  Actual: s.cresolvedConstantsPath_GenericIs,
  Expected: 'resolvedConstantsPath_Generic is: '
}, {
  Name: 'cresolvedConstantsPath_IsotopeIs',
  Actual: s.cresolvedConstantsPath_IsotopeIs,
  Expected: 'resolvedConstantsPath_Isotope is: '
}, {
  Name: 'cresolvedConstantsPath_NumericIs',
  Actual: s.cresolvedConstantsPath_NumericIs,
  Expected: 'resolvedConstantsPath_Numeric is: '
}, {
  Name: 'cresolvedConstantsPath_PhonicsIs',
  Actual: s.cresolvedConstantsPath_PhonicsIs,
  Expected: 'resolvedConstantsPath_Phonics is: '
}, {
  Name: 'cresolvedConstantsPath_ShapeIs',
  Actual: s.cresolvedConstantsPath_ShapeIs,
  Expected: 'resolvedConstantsPath_Shape is: '
}, {
  Name: 'cresolvedConstantsPath_SystemIs',
  Actual: s.cresolvedConstantsPath_SystemIs,
  Expected: 'resolvedConstantsPath_System is: '
}, {
  Name: 'cresolvedConstantsPath_UnitsIs',
  Actual: s.cresolvedConstantsPath_UnitsIs,
  Expected: 'resolvedConstantsPath_Units is: '
}, {
  Name: 'cresolvedConstantsPath_WordsIs',
  Actual: s.cresolvedConstantsPath_WordsIs,
  Expected: 'resolvedConstantsPath_Words is: '
}, {
  Name: 'cBasicConstantsPhase1Validation',
  Actual: s.cBasicConstantsPhase1Validation,
  Expected: 'Basic Constants Phase 1 Validation'
}, {
  Name: 'cColorConstantsPhase1Validation',
  Actual: s.cColorConstantsPhase1Validation,
  Expected: 'Color Constants Phase 1 Validation'
}, {
  Name: 'cElementConstantsPhase1Validation',
  Actual: s.cElementConstantsPhase1Validation,
  Expected: 'Element Constants Phase 1 Validation'
}, {
  Name: 'cGenericConstantsPhase1Validation',
  Actual: s.cGenericConstantsPhase1Validation,
  Expected: 'Generic Constants Phase 1 Validation'
}, {
  Name: 'cIsotopeConstantsPhase1Validation',
  Actual: s.cIsotopeConstantsPhase1Validation,
  Expected: 'Isotope Constants Phase 1 Validation'
}, {
  Name: 'cNumericalConstantsPhase1Validation',
  Actual: s.cNumericalConstantsPhase1Validation,
  Expected: 'Numerical Constants Phase 1 Validation'
}, {
  Name: 'cPhonicsConstantsPhase1Validation',
  Actual: s.cPhonicsConstantsPhase1Validation,
  Expected: 'Phonics Constants Phase 1 Validation'
}, {
  Name: 'cShapeConstantsPhase1Validation',
  Actual: s.cShapeConstantsPhase1Validation,
  Expected: 'Shape Constants Phase 1 Validation'
}, {
  Name: 'cSystemConstantsPhase1Validation',
  Actual: s.cSystemConstantsPhase1Validation,
  Expected: 'System Constants Phase 1 Validation'
}, {
  Name: 'cUnitsConstantsPhase1Validation',
  Actual: s.cUnitsConstantsPhase1Validation,
  Expected: 'Units Constants Phase 1 Validation'
}, {
  Name: 'cWordConstantsPhase1Validation',
  Actual: s.cWordConstantsPhase1Validation,
  Expected: 'Word Constants Phase 1 Validation'
}, {
  Name: 'cBasicConstantsPhase2Validation',
  Actual: s.cBasicConstantsPhase2Validation,
  Expected: 'Basic Constants Phase 2 Validation'
}, {
  Name: 'cColorConstantsPhase2Validation',
  Actual: s.cColorConstantsPhase2Validation,
  Expected: 'Color Constants Phase 2 Validation'
}, {
  Name: 'cElementConstantsPhase2Validation',
  Actual: s.cElementConstantsPhase2Validation,
  Expected: 'Element Constants Phase 2 Validation'
}, {
  Name: 'cGenericConstantsPhase2Validation',
  Actual: s.cGenericConstantsPhase2Validation,
  Expected: 'Generic Constants Phase 2 Validation'
}, {
  Name: 'cIsotopeConstantsPhase2Validation',
  Actual: s.cIsotopeConstantsPhase2Validation,
  Expected: 'Isotope Constants Phase 2 Validation'
}, {
  Name: 'cNumericalConstantsPhase2Validation',
  Actual: s.cNumericalConstantsPhase2Validation,
  Expected: 'Numerical Constants Phase 2 Validation'
}, {
  Name: 'cPhonicsConstantsPhase2Validation',
  Actual: s.cPhonicsConstantsPhase2Validation,
  Expected: 'Phonics Constants Phase 2 Validation'
}, {
  Name: 'cShapeConstantsPhase2Validation',
  Actual: s.cShapeConstantsPhase2Validation,
  Expected: 'Shape Constants Phase 2 Validation'
}, {
  Name: 'cSystemConstantsPhase2Validation',
  Actual: s.cSystemConstantsPhase2Validation,
  Expected: 'System Constants Phase 2 Validation'
}, {
  Name: 'cUnitsConstantsPhase2Validation',
  Actual: s.cUnitsConstantsPhase2Validation,
  Expected: 'Units Constants Phase 2 Validation'
}, {
  Name: 'cWordConstantsPhase2Validation',
  Actual: s.cWordConstantsPhase2Validation,
  Expected: 'Word Constants Phase 2 Validation'
}, {
  Name: 'ccommandStringIs',
  Actual: s.ccommandStringIs,
  Expected: 'commandString is: '
}, {
  Name: 'ccommandDelimiterIs',
  Actual: s.ccommandDelimiterIs,
  Expected: 'commandDelimiter is: '
}, {
  Name: 'ccommandToExecuteBeforeTheAliasIs',
  Actual: s.ccommandToExecuteBeforeTheAliasIs,
  Expected: 'commandToExecute before the Alias is: '
}, {
  Name: 'ccommandToExecuteAfterTheAliasIs',
  Actual: s.ccommandToExecuteAfterTheAliasIs,
  Expected: 'commandToExecute after the Alias is: '
}, {
  Name: 'cWarningTheSpecifiedCommand',
  Actual: s.cWarningTheSpecifiedCommand,
  Expected: 'WARNING: The specified command: '
}, {
  Name: 'cdoesNotExistPleaseTryAgain',
  Actual: s.cdoesNotExistPleaseTryAgain,
  Expected: ' does not exist, please try again!'
}, {
  Name: 'ccommandStringContainsEitherSingleQuoteOrBackTickQuote',
  Actual: s.ccommandStringContainsEitherSingleQuoteOrBackTickQuote,
  Expected: 'commandString contains either a singleQuote or a backTickQuote'
}, {
  Name: 'ccommandStringContainsSingleQuote',
  Actual: s.ccommandStringContainsSingleQuote,
  Expected: 'commandString contains a singleQuote!'
}, {
  Name: 'cnumberOfSingleQuotesIsEven',
  Actual: s.cnumberOfSingleQuotesIsEven,
  Expected: 'numberOfSingleQuotes is >= 2 & the numberOfSingleQuotes is EVEN! YAY!'
}, {
  Name: 'cFirstIndexIs',
  Actual: s.cFirstIndexIs,
  Expected: 'First index is: '
}, {
  Name: 'ccommandStringAfterTaggingTheFirstStringDelimiter',
  Actual: s.ccommandStringAfterTaggingTheFirstStringDelimiter,
  Expected: 'commandString after tagging the first string delimiter: '
}, {
  Name: 'cAdditionalIndexIs',
  Actual: s.cAdditionalIndexIs,
  Expected: 'Additional index is: '
}, {
  Name: 'coddIndex',
  Actual: s.coddIndex,
  Expected: 'odd index'
}, {
  Name: 'cevenIndex',
  Actual: s.cevenIndex,
  Expected: 'even index'
}, {
  Name: 'ccommandStringAfterTaggingAnOddStringDelimiter',
  Actual: s.ccommandStringAfterTaggingAnOddStringDelimiter,
  Expected: 'commandString after tagging an odd string delimiter: '
}, {
  Name: 'ccommandStringAfterTaggingAnEvenStringDelimiter',
  Actual: s.ccommandStringAfterTaggingAnEvenStringDelimiter,
  Expected: 'commandString after tagging an even string delimiter: '
}, {
  Name: 'cpreSplitCommandStringIs',
  Actual: s.cpreSplitCommandStringIs,
  Expected: 'preSplitCommandString is: '
}, {
  Name: 'cpostSplitCommandStringIs',
  Actual: s.cpostSplitCommandStringIs,
  Expected: 'postSplitCommandString[k] is: '
}, {
  Name: 'cpreSplitCommandStringElementIs',
  Actual: s.cpreSplitCommandStringElementIs,
  Expected: 'preSplitCommandStringElement is: '
}, {
  Name: 'cDoingStraightSplitCommandString',
  Actual: s.cDoingStraightSplitCommandString,
  Expected: 'Doing a straight split of the commandString: '
}, {
  Name: 'cCommandStartTimeIs',
  Actual: s.cCommandStartTimeIs,
  Expected: 'Command Start time is: '
}, {
  Name: 'cCommandEndTimeIs',
  Actual: s.cCommandEndTimeIs,
  Expected: 'Command End time is: '
}, {
  Name: 'cCommandRunTimeIs',
  Actual: s.cCommandRunTimeIs,
  Expected: 'Command run-time is: '
}, {
  Name: 'ccommandAliasesFilePathConfigurationNameIs',
  Actual: s.ccommandAliasesFilePathConfigurationNameIs,
  Expected: 'commandAliasesFilePathConfigurationName is: '
}, {
  Name: 'ccommandIs',
  Actual: s.ccommandIs,
  Expected: 'command is: '
}, {
  Name: 'ccommandToExecuteIs',
  Actual: s.ccommandToExecuteIs,
  Expected: 'commandToExecute is: '
}, {
  Name: 'ccontextNameIs',
  Actual: s.ccontextNameIs,
  Expected: 'contextName is: '
}, {
  Name: 'callSystemConfigurationsIs',
  Actual: s.callSystemConfigurationsIs,
  Expected: 'allSystemConfigurations is: '
}, {
  Name: 'cdataPathConfigurationNameIs',
  Actual: s.cdataPathConfigurationNameIs,
  Expected: 'dataPathConfigurationName is: '
}, {
  Name: 'cdataPathIs',
  Actual: s.cdataPathIs,
  Expected: 'dataPath is: '
}, {
  Name: 'cfilesToLoadIs',
  Actual: s.cfilesToLoadIs,
  Expected: 'filesToLoad is: '
}, {
  Name: 'cloadedAndMergedDataAllFilesIs',
  Actual: s.cloadedAndMergedDataAllFilesIs,
  Expected: 'loadedAndMergedDataAllFiles is: '
}, {
  Name: 'cloadedAndMergedDataAllFilesContentsAre',
  Actual: s.cloadedAndMergedDataAllFilesContentsAre,
  Expected: 'loadedAndMergedDataAllFiles contents are: '
}, {
  Name: 'ccommandWorkflowFilePathConfigurationNameIs',
  Actual: s.ccommandWorkflowFilePathConfigurationNameIs,
  Expected: 'commandWorkflowFilePathConfigurationName is: '
}, {
  Name: 'ccontentsOfDataStructreIs',
  Actual: s.ccontentsOfDataStructreIs,
  Expected: 'contents of D-data structure is: '
}, {
  Name: 'crootPathIs',
  Actual: s.crootPathIs,
  Expected: 'rootPath is: '
}, {
  Name: 'cclientBusinessRulesAre',
  Actual: s.cclientBusinessRulesAre,
  Expected: 'clientBusinessRules are: '
}, {
  Name: 'cclientCommandsAre',
  Actual: s.cclientCommandsAre,
  Expected: 'clientCommands are: '
}, {
  Name: 'csystemCommandsAliasesPathIs',
  Actual: s.csystemCommandsAliasesPathIs,
  Expected: 'systemCommandsAliasesPath is: '
}, {
  Name: 'cclientCommandsAliasesPathIs',
  Actual: s.cclientCommandsAliasesPathIs,
  Expected: 'clientCommandsAliasesPath is: '
}, {
  Name: 'cresolvedSystemCommandsAliasesPathIs',
  Actual: s.cresolvedSystemCommandsAliasesPathIs,
  Expected: 'resolvedSystemCommandsAliasesPath is: '
}, {
  Name: 'cresolvedClientCommandsAliasesPathIs',
  Actual: s.cresolvedClientCommandsAliasesPathIs,
  Expected: 'resolvedClientCommandsAliasesPath is: '
}, {
  Name: 'csystemWorkflowPathIs',
  Actual: s.csystemWorkflowPathIs,
  Expected: 'systemWorkflowPath is: '
}, {
  Name: 'cclientWorkflowPathIs',
  Actual: s.cclientWorkflowPathIs,
  Expected: 'clientWorkflowPath is: '
}, {
  Name: 'cresolvedSystemWorkflowsPathIs',
  Actual: s.cresolvedSystemWorkflowsPathIs,
  Expected: 'resolvedSystemWorkflowsPath is: '
}, {
  Name: 'cresolvedClientWorkflowsPathIs',
  Actual: s.cresolvedClientWorkflowsPathIs,
  Expected: 'resolvedClientWorkflowsPath is: '
}, {
  Name: 'cbusinessRuleIs',
  Actual: s.cbusinessRuleIs,
  Expected: 'businessRule is: '
}, {
  Name: 'cruleInputIs',
  Actual: s.cruleInputIs,
  Expected: 'ruleInput is: '
}, {
  Name: 'cruleMetaDataIs',
  Actual: s.cruleMetaDataIs,
  Expected: 'ruleMetaData is: '
}, {
  Name: 'cconfigurationNameIs',
  Actual: s.cconfigurationNameIs,
  Expected: 'configurationName is: '
}, {
  Name: 'cconfigurationValueIs',
  Actual: s.cconfigurationValueIs,
  Expected: 'configurationValue is: '
}, {
  Name: 'creturnConfiguraitonValueIs',
  Actual: s.creturnConfiguraitonValueIs,
  Expected: 'returnConfigurationValue is: '
}, {
  Name: 'cattributeJsonStringIs',
  Actual: s.cattributeJsonStringIs,
  Expected: 'attributeJsonString is: '
}, {
  Name: 'cappAttributeNameIs',
  Actual: s.cappAttributeNameIs,
  Expected: 'appAttributeName is: '
}, {
  Name: 'cappAttributeValueIs',
  Actual: s.cappAttributeValueIs,
  Expected: 'appAttributeValue is: '
}, {
  Name: 'cexecuteBusinessRulesColon',
  Actual: s.cexecuteBusinessRulesColon,
  Expected: 'execute business rules: '
}, {
  Name: 'cdataPathAfterBusinessRulesProcessingIs',
  Actual: s.cdataPathAfterBusinessRulesProcessingIs,
  Expected: 'dataPath after business rules processing is: '
}, {
  Name: 'cfilesFoundIs',
  Actual: s.cfilesFoundIs,
  Expected: 'filesFound is: '
}, {
  Name: 'cFileToLoadIs',
  Actual: s.cFileToLoadIs,
  Expected: 'File to load is: '
}, {
  Name: 'cfileExtensionIs',
  Actual: s.cfileExtensionIs,
  Expected: 'fileExtension is: '
}, {
  Name: 'cloadedFileDataIs',
  Actual: s.cloadedFileDataIs,
  Expected: 'loaded file data is: '
}, {
  Name: 'cparsedDataFileIs',
  Actual: s.cparsedDataFileIs,
  Expected: 'parsedDataFile is: '
}, {
  Name: 'cBEGIN_PROCESSING_ADDITIONAL_DATA',
  Actual: s.cBEGIN_PROCESSING_ADDITIONAL_DATA,
  Expected: 'BEGIN PROCESSING ADDITIONAL DATA'
}, {
  Name: 'cDONE_PROCESSING_ADDITIONAL_DATA',
  Actual: s.cDONE_PROCESSING_ADDITIONAL_DATA,
  Expected: 'DONE PROCESSING ADDITIONAL DATA'
}, {
  Name: 'cMERGED_dataIs',
  Actual: s.cMERGED_dataIs,
  Expected: 'MERGED data is: '
}, {
  Name: 'cparsedDataFileContentsAre',
  Actual: s.cparsedDataFileContentsAre,
  Expected: 'parsedDataFile contents are: '
}, {
  Name: 'cdataCatagoryIs',
  Actual: s.cdataCatagoryIs,
  Expected: 'dataCatagory is: '
}, {
  Name: 'cfullyParsedDataIs',
  Actual: s.cfullyParsedDataIs,
  Expected: 'fully parsed data is: '
}, {
  Name: 'cD_finalMergeIs',
  Actual: s.cD_finalMergeIs,
  Expected: 'D final merge is: '
}, {
  Name: 'cdataStorageContextNameIs',
  Actual: s.cdataStorageContextNameIs,
  Expected: 'dataStorageContextName is: '
}, {
  Name: 'cdataToStoreIs',
  Actual: s.cdataToStoreIs,
  Expected: 'dataToStore is: '
}, {
  Name: 'cdataCatagoryDetailsNameIs',
  Actual: s.cdataCatagoryDetailsNameIs,
  Expected: 'dataCatagoryDetailsName is: '
}, {
  Name: 'ctempDataIs',
  Actual: s.ctempDataIs,
  Expected: 'tempData is: '
}, {
  Name: 'ctargetDataIs',
  Actual: s.ctargetDataIs,
  Expected: 'targetData is: '
}, {
  Name: 'cpageNameIs',
  Actual: s.cpageNameIs,
  Expected: 'pageName is: '
}, {
  Name: 'cdataToMergeIs',
  Actual: s.cdataToMergeIs,
  Expected: 'data to Merge is: '
}, {
  Name: 'cdataToMergeElementCountIs',
  Actual: s.cdataToMergeElementCountIs,
  Expected: 'dataToMergeElementCount is: '
}, {
  Name: 'cdataToMergeElementCountIs1',
  Actual: s.cdataToMergeElementCountIs1,
  Expected: 'dataToMergeElementCount is: 1'
}, {
  Name: 'ccheckIfThePageNameIsNotAnEmptyString',
  Actual: s.ccheckIfThePageNameIsNotAnEmptyString,
  Expected: 'check if the pageName is not an empty string'
}, {
  Name: 'cpageNameIsNotAnEmptyString',
  Actual: s.cpageNameIsNotAnEmptyString,
  Expected: 'pageName is not an empty string'
}, {
  Name: 'cCheckIfTheDataCatagoryIsAnEmptyStringOrNot',
  Actual: s.cCheckIfTheDataCatagoryIsAnEmptyStringOrNot,
  Expected: 'Check if the dataCatagory is an empty string or not'
}, {
  Name: 'cdataCatagoryIsNotAnEmptyString',
  Actual: s.cdataCatagoryIsNotAnEmptyString,
  Expected: 'dataCatagory is not an empty string!'
}, {
  Name: 'cdataCatagoryIsAnEmptyString',
  Actual: s.cdataCatagoryIsAnEmptyString,
  Expected: 'dataCatagory IS an empty string!'
}, {
  Name: 'ctargetDataContentIs',
  Actual: s.ctargetDataContentIs,
  Expected: 'targetData content is: '
}, {
  Name: 'cafterAttemptToMergeResultsAre',
  Actual: s.cafterAttemptToMergeResultsAre,
  Expected: 'after attempt to merge, results are: '
}, {
  Name: 'cMergedDataIs',
  Actual: s.cMergedDataIs,
  Expected: 'Merged data is: '
}, {
  Name: 'cpageNameIsAnEmptyString',
  Actual: s.cpageNameIsAnEmptyString,
  Expected: 'pageName is an empty string'
}, {
  Name: 'cCaughtTheSpecialCaseThatWeAreMergingFlatList',
  Actual: s.cCaughtTheSpecialCaseThatWeAreMergingFlatList,
  Expected: 'Caught the special case that we are merging a flat list.'
}, {
  Name: 'cinsideTheForLoop',
  Actual: s.cinsideTheForLoop,
  Expected: 'inside the for-loop'
}, {
  Name: 'ckeyIs',
  Actual: s.ckeyIs,
  Expected: 'key is: '
}, {
  Name: 'ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs',
  Actual: s.ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs,
  Expected: 'targetData is modified in the input pass-by-reference variable content is: '
}, {
  Name: 'cdataObjectValueIs',
  Actual: s.cdataObjectValueIs,
  Expected: 'dataObject value is: '
}, {
  Name: 'celementNameIs',
  Actual: s.celementNameIs,
  Expected: 'elementName is: '
}, {
  Name: 'cdataObjectIs',
  Actual: s.cdataObjectIs,
  Expected: 'dataObject is: '
}, {
  Name: 'celementNamePatternIs',
  Actual: s.celementNamePatternIs,
  Expected: 'elementNamePattern is: '
}, {
  Name: 'celementCountIs',
  Actual: s.celementCountIs,
  Expected: 'elementCount is: '
}, {
  Name: 'cERROR_Colon',
  Actual: s.cERROR_Colon,
  Expected: 'ERROR: '
}, {
  Name: 'cfileAndPathToLoadFromIs',
  Actual: s.cfileAndPathToLoadFromIs,
  Expected: 'file and path to load from is: '
}, {
  Name: 'cDoneLoadingDataFrom',
  Actual: s.cDoneLoadingDataFrom,
  Expected: 'DONE loading data from: '
}, {
  Name: 'cfileAndPathToWriteDataToIs',
  Actual: s.cfileAndPathToWriteDataToIs,
  Expected: 'file and path to write data to is: '
}, {
  Name: 'cdataToWriteIs',
  Actual: s.cdataToWriteIs,
  Expected: 'data to write is: '
}, {
  Name: 'cDataWasWrittenToTheFile',
  Actual: s.cDataWasWrittenToTheFile,
  Expected: 'Data was written to the file: '
}, {
  Name: 'cPathThatShouldBeScannedIs',
  Actual: s.cPathThatShouldBeScannedIs,
  Expected: 'Path that should be scanned is: '
}, {
  Name: 'cfilesFoundAre',
  Actual: s.cfilesFoundAre,
  Expected: 'files found are: '
}, {
  Name: 'cdirectorIs',
  Actual: s.cdirectorIs,
  Expected: 'directory is: '
}, {
  Name: 'cdirectoryPathIs',
  Actual: s.cdirectoryPathIs,
  Expected: 'directoryPath is: '
}, {
  Name: 'csourceFolderIs',
  Actual: s.csourceFolderIs,
  Expected: 'sourceFolder is: '
}, {
  Name: 'cdestinationFolderIs',
  Actual: s.cdestinationFolderIs,
  Expected: 'destinationFolder is: '
}, {
  Name: 'ccopySuccessIs',
  Actual: s.ccopySuccessIs,
  Expected: 'copySuccess is: '
}, {
  Name: 'ccurrentVersionIs',
  Actual: s.ccurrentVersionIs,
  Expected: 'current version is: '
}, {
  Name: 'creleasedArchiveFilesListIs',
  Actual: s.creleasedArchiveFilesListIs,
  Expected: 'released archive files list is: '
}, {
  Name: 'cfileIs',
  Actual: s.cfileIs,
  Expected: 'file is: '
}, {
  Name: 'cfileNameIs',
  Actual: s.cfileNameIs,
  Expected: 'fileName is: '
}, {
  Name: 'creleaseFilesListIs',
  Actual: s.creleaseFilesListIs,
  Expected: 'release files list is: '
}, {
  Name: 'creleaseDateTimeStampIs',
  Actual: s.creleaseDateTimeStampIs,
  Expected: 'release date-time stamp is: '
}, {
  Name: 'creleaseFileNameIs',
  Actual: s.creleaseFileNameIs,
  Expected: 'release fileName is: '
}, {
  Name: 'cDoneWritingTheZipFile',
  Actual: s.cDoneWritingTheZipFile,
  Expected: 'Done writing the zip file: '
}, {
  Name: 'cSetTheReturnPackageSuccessFlagToTrue',
  Actual: s.cSetTheReturnPackageSuccessFlagToTrue,
  Expected: 'Set the return packageSuccess flag to TRUE'
}, {
  Name: 'ccurrentVersionAlreadyReleased',
  Actual: s.ccurrentVersionAlreadyReleased,
  Expected: 'current version already released'
}, {
  Name: 'cpackageSuccessIs',
  Actual: s.cpackageSuccessIs,
  Expected: 'packageSuccess is: '
}, {
  Name: 'cRootPathBeforeProcessingIs',
  Actual: s.cRootPathBeforeProcessingIs,
  Expected: 'RootPath before processing is: '
}, {
  Name: 'cRootPathAfterProcessingIs',
  Actual: s.cRootPathAfterProcessingIs,
  Expected: 'RootPath after processing is: '
}, {
  Name: 'cSourceIs',
  Actual: s.cSourceIs,
  Expected: 'source is: '
}, {
  Name: 'ctargetIs',
  Actual: s.ctargetIs,
  Expected: 'target is: '
}, {
  Name: 'cErrorCouldNotCopyFile',
  Actual: s.cErrorCouldNotCopyFile,
  Expected: 'ERROR: Could not copy file: '
}, {
  Name: 'cErrorCouldNotCreateFolder',
  Actual: s.cErrorCouldNotCreateFolder,
  Expected: 'ERROR: Could not create folder: '
}, {
  Name: 'csuccessfullCopyIs',
  Actual: s.csuccessfullCopyIs,
  Expected: 'successfulCopy is: '
}, {
  Name: 'cErrorCouldNotCopyFolderContents',
  Actual: s.cErrorCouldNotCopyFolderContents,
  Expected: 'ERROR: Could not copy folder contents: '
}, {
  Name: 'cargumentValueIs',
  Actual: s.cargumentValueIs,
  Expected: 'argumentValue is: '
}, {
  Name: 'cconsolidatedArgumentModeIs',
  Actual: s.cconsolidatedArgumentModeIs,
  Expected: 'consolidatedArgumentMode is: '
}, {
  Name: 'cPushingArgumentValueToReturnDataAsArrayElement',
  Actual: s.cPushingArgumentValueToReturnDataAsArrayElement,
  Expected: 'Pushing the argumentValue to the returnData as an array element'
}, {
  Name: 'cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse',
  Actual: s.cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse,
  Expected: 'Calling analyzeArgument for index Equal 2, consolidatedArgumentMode = false'
}, {
  Name: 'cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue',
  Actual: s.cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue,
  Expected: 'Calling analyzeArgument for index = 2, consolidatedArgumentMode = true'
}, {
  Name: 'cargumentValueLengthGreaterThanZero',
  Actual: s.cargumentValueLengthGreaterThanZero,
  Expected: 'argumentValue.Length > 0'
}, {
  Name: 'cReturnArgumentValueSameAsItWasPassedIn',
  Actual: s.cReturnArgumentValueSameAsItWasPassedIn,
  Expected: 'Return the argumentValue the same as it was passed in.'
}, {
  Name: 'cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse',
  Actual: s.cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse,
  Expected: 'Calling analyzeArgument for index = 3, consolidatedArgumentMode = false'
}, {
  Name: 'cCheckIfThereAreBracketsOrNoBrackets',
  Actual: s.cCheckIfThereAreBracketsOrNoBrackets,
  Expected: 'Check if there are brackets or no brackets.'
}, {
  Name: 'cBracketsWereFound',
  Actual: s.cBracketsWereFound,
  Expected: 'Brackets were found'
}, {
  Name: 'cCheckIfThereIsRegularExpressionOrNot',
  Actual: s.cCheckIfThereIsRegularExpressionOrNot,
  Expected: 'Check if there is a Regular Expression or not.'
}, {
  Name: 'cRegularExpressionWasFound',
  Actual: s.cRegularExpressionWasFound,
  Expected: 'A regular expression was found!'
}, {
  Name: 'cNoRegExpFound',
  Actual: s.cNoRegExpFound,
  Expected: 'NO RegExp found!'
}, {
  Name: 'cBracketsAreFound',
  Actual: s.cBracketsAreFound,
  Expected: 'Brackets ARE found!'
}, {
  Name: 'cNoSecondaryCommandArgumentDelimiters',
  Actual: s.cNoSecondaryCommandArgumentDelimiters,
  Expected: 'NO secondary command argument delimiters.'
}, {
  Name: 'cregularExpressionIs',
  Actual: s.cregularExpressionIs,
  Expected: 'regular expression is: '
}, {
  Name: 'cregExValueIs',
  Actual: s.cregExValueIs,
  Expected: 'regExValue is: '
}, {
  Name: 'cregularExpressionFlagsAre',
  Actual: s.cregularExpressionFlagsAre,
  Expected: 'regular expression flags are: '
}, {
  Name: 'cregExFlagsIs',
  Actual: s.cregExFlagsIs,
  Expected: 'regExFlags is: '
}, {
  Name: 'cargumentValueContainsTheDelimiterLetsSplitIt',
  Actual: s.cargumentValueContainsTheDelimiterLetsSplitIt,
  Expected: 'argumentValue contains the delimiter: Lets split it!'
}, {
  Name: 'cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs',
  Actual: s.cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs,
  Expected: 'argumentValue after attempting to remove a open bracket from all array elements is: '
}, {
  Name: 'cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs',
  Actual: s.cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs,
  Expected: 'argumentValue after attempting to remove a close bracket from all array elements is: '
}, {
  Name: 'csecondaryCommandArgsDelimiterIs',
  Actual: s.csecondaryCommandArgsDelimiterIs,
  Expected: 'secondaryCommandArgsDelimiter is: '
}, {
  Name: 'cargumentArrayIs',
  Actual: s.cargumentArrayIs,
  Expected: 'argumentArray is: '
}, {
  Name: 'cformattingIs',
  Actual: s.cformattingIs,
  Expected: 'formatting is: '
}, {
  Name: 'cstartTimeIs',
  Actual: s.cstartTimeIs,
  Expected: 'startTime is: '
}, {
  Name: 'cendTimeIs',
  Actual: s.cendTimeIs,
  Expected: 'endTime is: '
}, {
  Name: 'cdeltaTimeResultIs',
  Actual: s.cdeltaTimeResultIs,
  Expected: 'deltaTimeResult is: '
}, {
  Name: 'cdeltaTimeIs',
  Actual: s.cdeltaTimeIs,
  Expected: 'deltaTime is: '
}, {
  Name: 'cformatIs',
  Actual: s.cformatIs,
  Expected: 'format is: '
}, {
  Name: 'creturnDeltaTimeIs',
  Actual: s.creturnDeltaTimeIs,
  Expected: 'returnDeltaTime is: '
}, {
  Name: 'csleepTimeIs',
  Actual: s.csleepTimeIs,
  Expected: 'sleepTime is: '
}, {
  Name: 'cworkflowNameIs',
  Actual: s.cworkflowNameIs,
  Expected: 'workflowName is: '
}, {
  Name: 'ccurrentWorkflowIs',
  Actual: s.ccurrentWorkflowIs,
  Expected: 'currentWorkflow is: '
}, {
  Name: 'cworkflowValueIs',
  Actual: s.cworkflowValueIs,
  Expected: 'workflowValue is: '
}, {
  Name: 'cdataHivePathArrayIs',
  Actual: s.cdataHivePathArrayIs,
  Expected: 'dataHivePathArray is: '
}, {
  Name: 'ccontentsOfLeafDataHiveElementIs',
  Actual: s.ccontentsOfLeafDataHiveElementIs,
  Expected: 'contents of leafDataHiveElement is: '
}, {
  Name: 'centryIs',
  Actual: s.centryIs,
  Expected: 'entry is: '
}, {
  Name: 'cattributeValueIs',
  Actual: s.cattributeValueIs,
  Expected: 'attributeValue is: '
}, {
  Name: 'ckey2Is',
  Actual: s.ckey2Is,
  Expected: 'key2 is: '
}, {
  Name: 'centityIs',
  Actual: s.centityIs,
  Expected: 'entity is: '
}, {
  Name: 'cDetermineWordDelimiterMessage1',
  Actual: s.cDetermineWordDelimiterMessage1,
  Expected: 'WARNING: Mixed string. '
}, {
  Name: 'cDetermineWordDelimiterMessage2',
  Actual: s.cDetermineWordDelimiterMessage2,
  Expected: 'Cannot determine what delimiter should '
}, {
  Name: 'cDetermineWordDelimiterMessage3',
  Actual: s.cDetermineWordDelimiterMessage3,
  Expected: 'be used to break up the '
}, {
  Name: 'cDetermineWordDelimiterMessage4',
  Actual: s.cDetermineWordDelimiterMessage4,
  Expected: 'string into words.'
}, {
  Name: 'cGetWordCountInStringMessage1',
  Actual: s.cGetWordCountInStringMessage1,
  Expected: 'WARNING: Mixed string. '
}, {
  Name: 'cGetWordCountInStringMessage2',
  Actual: s.cGetWordCountInStringMessage2,
  Expected: 'Cannot determine how words are delimited '
}, {
  Name: 'cGetWordCountInStringMessage3',
  Actual: s.cGetWordCountInStringMessage3,
  Expected: 'in the string. Unable to count words.'
}, {
  Name: 'cGetWordsArrayFromStringMessage1',
  Actual: s.cGetWordsArrayFromStringMessage1,
  Expected: 'WARNING: Mixed String. '
}, {
  Name: 'cGetWordsArrayFromStringMessage2',
  Actual: s.cGetWordsArrayFromStringMessage2,
  Expected: 'Cannot get words from the string. '
}, {
  Name: 'cGetWordsArrayFromStringMessage3',
  Actual: s.cGetWordsArrayFromStringMessage3,
  Expected: 'Unable to determine words.'
}, {
  Name: 'cCommandNamePrompt1',
  Actual: s.cCommandNamePrompt1,
  Expected: 'Please enter a named command where '
}, {
  Name: 'cCommandNamePrompt2',
  Actual: s.cCommandNamePrompt2,
  Expected: 'the first word starts with a '
}, {
  Name: 'cCommandNamePrompt3',
  Actual: s.cCommandNamePrompt3,
  Expected: 'lower case letter and all other '
}, {
  Name: 'cCommandNamePrompt4',
  Actual: s.cCommandNamePrompt4,
  Expected: 'words in the named command start '
}, {
  Name: 'cCommandNamePrompt5',
  Actual: s.cCommandNamePrompt5,
  Expected: 'with an upper case letter:'
}, {
  Name: 'cCommandWordAliasPrompt1',
  Actual: s.cCommandWordAliasPrompt1,
  Expected: 'Please enter a list of command '
}, {
  Name: 'cCommandWordAliasPrompt2',
  Actual: s.cCommandWordAliasPrompt2,
  Expected: 'word abreviations/acronyms/aliases '
}, {
  Name: 'cCommandWordAliasPrompt3',
  Actual: s.cCommandWordAliasPrompt3,
  Expected: 'for the command word:'
}, {
  Name: 'cConstantPrompt1',
  Actual: s.cConstantPrompt1,
  Expected: 'Please enter a string you would '
}, {
  Name: 'cConstantPrompt2',
  Actual: s.cConstantPrompt2,
  Expected: 'like to define as a constant '
}, {
  Name: 'cConstantPrompt3',
  Actual: s.cConstantPrompt3,
  Expected: 'in the constants system:'
}, {
  Name: 'cConstantsListPrompt1',
  Actual: s.cConstantsListPrompt1,
  Expected: 'Please enter a coma separated list of '
}, {
  Name: 'cConstantsListPrompt2',
  Actual: s.cConstantsListPrompt2,
  Expected: 'strings you would like to define in '
}, {
  Name: 'cConstantsListPrompt3',
  Actual: s.cConstantsListPrompt3,
  Expected: 'the constants system:'
}, {
  Name: 'cConstantsListPatternSearchPrompt1',
  Actual: s.cConstantsListPatternSearchPrompt1,
  Expected: 'Please enter a coma separated list of '
}, {
  Name: 'cConstantsListPatternSearchPrompt2',
  Actual: s.cConstantsListPatternSearchPrompt2,
  Expected: 'strings you would like to search for '
}, {
  Name: 'cConstantsListPatternSearchPrompt3',
  Actual: s.cConstantsListPatternSearchPrompt3,
  Expected: 'common patterns:'
}, {
  Name: 'cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1',
  Actual: s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1,
  Expected: 'ERROR: Attempted to generate a suggested '
}, {
  Name: 'cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2',
  Actual: s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2,
  Expected: 'line of code to validate the constant, '
}, {
  Name: 'cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3',
  Actual: s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3,
  Expected: 'but the constant is not formatted correctly, '
}, {
  Name: 'cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4',
  Actual: s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4,
  Expected: 'it should begin with a lower case "c". '
}, {
  Name: 'cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5',
  Actual: s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5,
  Expected: 'Please reformat the constant correctly so a '
}, {
  Name: 'cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6',
  Actual: s.cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6,
  Expected: 'line of code can be generated for you.'
}, {
  Name: 'cSearchForPatternsInStringArrayMessage1',
  Actual: s.cSearchForPatternsInStringArrayMessage1,
  Expected: 'currentMasterStringArrayElement does not contain a space character'
}, {
  Name: 'cSearchForPatternsInStringArrayMessage2',
  Actual: s.cSearchForPatternsInStringArrayMessage2,
  Expected: 'WARNING: The current string being searched contains a space character, '
}, {
  Name: 'cSearchForPatternsInStringArrayMessage3',
  Actual: s.cSearchForPatternsInStringArrayMessage3,
  Expected: 'we are going to skip comparison.'
}, {
  Name: 'cSearchForPatternsInStringArrayMessage4',
  Actual: s.cSearchForPatternsInStringArrayMessage4,
  Expected: 'WARNING: InputData was not an array or had an empty array.'
}, {
  Name: 'cLoadDataFileMessage1',
  Actual: s.cLoadDataFileMessage1,
  Expected: 'WARNING: No data to load, '
}, {
  Name: 'cloadDataFileMessage2',
  Actual: s.cloadDataFileMessage2,
  Expected: 'please specify a valid path & filename!'
}, {
  Name: 'cloadDataFileMessage3',
  Actual: s.cloadDataFileMessage3,
  Expected: 'WARNING: Invalid file format, file formats supported are: '
}, {
  Name: 'cdeployApplicationMessage1a',
  Actual: s.cdeployApplicationMessage1a,
  Expected: 'ERROR: Release failed because of a failure in the constants validation system. '
}, {
  Name: 'cdeployApplicationMessage2a',
  Actual: s.cdeployApplicationMessage2a,
  Expected: 'Please fix ASAP before attempting another release.'
}, {
  Name: 'cdeployApplicationMessage1b',
  Actual: s.cdeployApplicationMessage1b,
  Expected: 'ERROR: Release failed because of a failure in the commands alias validation system. '
}, {
  Name: 'ccommandSequencerMessage1',
  Actual: s.ccommandSequencerMessage1,
  Expected: 'WARNING: nominal.commandSequencer: The specified command was not found, '
}, {
  Name: 'ccommandSequencerMessage2',
  Actual: s.ccommandSequencerMessage2,
  Expected: 'please enter a valid command and try again.'
}, {
  Name: 'cworkflowMessage1',
  Actual: s.cworkflowMessage1,
  Expected: 'WARNING: nominal.workflow: The specified workflow: '
}, {
  Name: 'cworkflowMessage2',
  Actual: s.cworkflowMessage2,
  Expected: ' was not found in either the system defined workflows, or client defined workflows.'
}, {
  Name: 'cworkflowMessage3',
  Actual: s.cworkflowMessage3,
  Expected: ' Please enter a valid workflow name and try again.'
}, {
  Name: 'ccommandGeneratorMessage1',
  Actual: s.ccommandGeneratorMessage1,
  Expected: 'After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is: '
}, {
  Name: 'ccommandGeneratorMessage2',
  Actual: s.ccommandGeneratorMessage2,
  Expected: 'After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandundefinedDelimiter commandString is: '
}, {
  Name: 'ccommandGeneratorMessage3',
  Actual: s.ccommandGeneratorMessage3,
  Expected: 'WARNING: nominal.commandGenerator: Must enter a number greater than 0, number entered: '
}, {
  Name: 'ccommandGeneratorMessage4',
  Actual: s.ccommandGeneratorMessage4,
  Expected: 'WARNING: nominal.commandGenerator: Number entered for the number of commands to generate is not a number: '
}, {
  Name: 'ccommandGeneratorMessage5',
  Actual: s.ccommandGeneratorMessage5,
  Expected: 'Warning: nominal.commandGenerator: The specified command: '
}, {
  Name: 'ccommandGeneratorMessage6',
  Actual: s.ccommandGeneratorMessage6,
  Expected: ' was not found, please enter a valid command and try again.'
}, {
  Name: 'ccommandAliasGeneratorMessage1',
  Actual: s.ccommandAliasGeneratorMessage1,
  Expected: 'Command can be called by passing parameters and bypass the prompt system.'
}, {
  Name: 'ccommandAliasGeneratorMessage2',
  Actual: s.ccommandAliasGeneratorMessage2,
  Expected: 'EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}'
}, {
  Name: 'ccommandAliasGeneratorMessage3',
  Actual: s.ccommandAliasGeneratorMessage3,
  Expected: 'INVALID INPUT: Please enter a valid camel-case command name.'
}, {
  Name: 'ccommandAliasGeneratorMessage4',
  Actual: s.ccommandAliasGeneratorMessage4,
  Expected: 'INVALID INPUT: Please enter a valid command word alias list.'
}, {
  Name: 'ccommandAliasGeneratorMessage5',
  Actual: s.ccommandAliasGeneratorMessage5,
  Expected: 'INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.'
}, {
  Name: 'cconstantsGeneratorMessage1',
  Actual: s.cconstantsGeneratorMessage1,
  Expected: 'INVALID INPUT: Please enter a valid constant value that contains more than 4 characters.'
}, {
  Name: 'cconstantsGeneratorMessage2',
  Actual: s.cconstantsGeneratorMessage2,
  Expected: 'WARNING: The constant has already been defined in the following library(ies): '
}, {
  Name: 'cconstantsGeneratorListMessage1',
  Actual: s.cconstantsGeneratorListMessage1,
  Expected: 'INVALID INPUT: Please enter a valid constant List.'
}, {
  Name: 'cvalidateCommandAliasesMessage1',
  Actual: s.cvalidateCommandAliasesMessage1,
  Expected: 'PASSED: All duplicate command Aliases validation tests!'
}, {
  Name: 'cgetCommandArgsMessage1',
  Actual: s.cgetCommandArgsMessage1,
  Expected: 'About to call the rule broker to process on the number of single quotes '
}, {
  Name: 'cgetCommandArgsMessage2',
  Actual: s.cgetCommandArgsMessage2,
  Expected: 'and determine if it-be even or odd'
}, {
  Name: 'cexecuteCommandMessage1',
  Actual: s.cexecuteCommandMessage1,
  Expected: 'WARNING: Command does not exist, please enter a valid command and try again!'
}, {
  Name: 'cparseBusinessRuleArgumentMessage1',
  Actual: s.cparseBusinessRuleArgumentMessage1,
  Expected: 'WARNING: lexical.parseBusinessRuleArgument: Invalid combination of inputs to the lexical.parseBusinessRuleArgument function! '
}, {
  Name: 'cparseBusinessRuleArgumentMessage2',
  Actual: s.cparseBusinessRuleArgumentMessage2,
  Expected: 'Please adjust inputs and try again.'
}, {
  Name: 'cprintDataHiveAttributesMessage1',
  Actual: s.cprintDataHiveAttributesMessage1,
  Expected: 'Caught the case the user may have only specified a single data hive, '
}, {
  Name: 'cprintDataHiveAttributesMessage2',
  Actual: s.cprintDataHiveAttributesMessage2,
  Expected: 'such as the configuration data hive.'
}, {
  Name: 'cprintDataHiveAttributesMessage3',
  Actual: s.cprintDataHiveAttributesMessage3,
  Expected: 'ERROR: Please enter a valid name.space.attributeName for the system to print out attribute data from.'
}, // File Types
{
  Name: 'cCatia',
  Actual: s.cCatia,
  Expected: 'Catia'
}, {
  Name: 'cDocument',
  Actual: s.cDocument,
  Expected: 'Document'
}, {
  Name: 'cDocuments',
  Actual: s.cDocuments,
  Expected: 'Documents'
}, {
  Name: 'cDraft',
  Actual: s.cDraft,
  Expected: 'Draft'
}, {
  Name: 'cDWG',
  Actual: s.cDWG,
  Expected: 'DWG'
}, {
  Name: 'cHoops',
  Actual: s.cHoops,
  Expected: 'Hoops'
}, {
  Name: 'cHOOPS',
  Actual: s.cHOOPS,
  Expected: 'HOOPS'
}, {
  Name: 'cImage',
  Actual: s.cImage,
  Expected: 'Image'
}, {
  Name: 'cImages',
  Actual: s.cImages,
  Expected: 'Images'
}, {
  Name: 'cInventor',
  Actual: s.cInventor,
  Expected: 'Inventor'
}, {
  Name: 'cNeutral',
  Actual: s.cNeutral,
  Expected: 'Neutral'
}, {
  Name: 'cNX',
  Actual: s.cNX,
  Expected: 'NX'
}, {
  Name: 'cParasolid',
  Actual: s.cParasolid,
  Expected: 'Parasolid'
}, {
  Name: 'cProE',
  Actual: s.cProE,
  Expected: 'ProE'
}, {
  Name: 'cRhino',
  Actual: s.cRhino,
  Expected: 'Rhino'
}, {
  Name: 'cSolidEdge',
  Actual: s.cSolidEdge,
  Expected: 'SolidEdge'
}, {
  Name: 'cSolidWorks',
  Actual: s.cSolidWorks,
  Expected: 'SolidWorks'
}, {
  Name: 'cvrml',
  Actual: s.cvrml,
  Expected: 'vrml'
}, {
  Name: 'cVrml',
  Actual: s.cVrml,
  Expected: 'Vrml'
}, {
  Name: 'cVRML',
  Actual: s.cVRML,
  Expected: 'VRML'
}, // UI Element Types
{
  Name: 'cButton',
  Actual: s.cButton,
  Expected: 'Button'
}, // Environment Variables
{
  Name: 'cQA',
  Actual: s.cQA,
  Expected: 'QA'
}, {
  Name: 'cDEV',
  Actual: s.cDEV,
  Expected: 'DEV'
}, {
  Name: 'cProd',
  Actual: s.cProd,
  Expected: 'Prod'
}, {
  Name: 'cPROD',
  Actual: s.cPROD,
  Expected: 'PROD'
}, {
  Name: 'cPre',
  Actual: s.cPre,
  Expected: 'Pre'
}, {
  Name: 'cPRE',
  Actual: s.cPRE,
  Expected: 'PRE'
}, {
  Name: 'cPreProd',
  Actual: s.cPreProd,
  Expected: 'PreProd'
}, {
  Name: 'cPREPROD',
  Actual: s.cPREPROD,
  Expected: 'PREPROD'
}, // Key Combinations
{
  Name: 'cctrl_a',
  Actual: s.cctrl_a,
  Expected: 'ctrl+a'
}, {
  Name: 'cctrl_b',
  Actual: s.cctrl_b,
  Expected: 'ctrl+b'
}, {
  Name: 'cctrl_c',
  Actual: s.cctrl_c,
  Expected: 'ctrl+c'
}, {
  Name: 'cctrl_d',
  Actual: s.cctrl_d,
  Expected: 'ctrl+d'
}, {
  Name: 'cctrl_e',
  Actual: s.cctrl_e,
  Expected: 'ctrl+e'
}, {
  Name: 'cctrl_f',
  Actual: s.cctrl_f,
  Expected: 'ctrl+f'
}, {
  Name: 'cctrl_g',
  Actual: s.cctrl_g,
  Expected: 'ctrl+g'
}, {
  Name: 'cctrl_h',
  Actual: s.cctrl_h,
  Expected: 'ctrl+h'
}, {
  Name: 'cctrl_i',
  Actual: s.cctrl_i,
  Expected: 'ctrl+i'
}, {
  Name: 'cctrl_j',
  Actual: s.cctrl_j,
  Expected: 'ctrl+j'
}, {
  Name: 'cctrl_k',
  Actual: s.cctrl_k,
  Expected: 'ctrl+k'
}, {
  Name: 'cctrl_l',
  Actual: s.cctrl_l,
  Expected: 'ctrl+l'
}, {
  Name: 'cctrl_m',
  Actual: s.cctrl_m,
  Expected: 'ctrl+m'
}, {
  Name: 'cctrl_n',
  Actual: s.cctrl_n,
  Expected: 'ctrl+n'
}, {
  Name: 'cctrl_o',
  Actual: s.cctrl_o,
  Expected: 'ctrl+o'
}, {
  Name: 'cctrl_p',
  Actual: s.cctrl_p,
  Expected: 'ctrl+p'
}, {
  Name: 'cctrl_q',
  Actual: s.cctrl_q,
  Expected: 'ctrl+q'
}, {
  Name: 'cctrl_r',
  Actual: s.cctrl_r,
  Expected: 'ctrl+r'
}, {
  Name: 'cctrl_s',
  Actual: s.cctrl_s,
  Expected: 'ctrl+s'
}, {
  Name: 'cctrl_t',
  Actual: s.cctrl_t,
  Expected: 'ctrl+t'
}, {
  Name: 'cctrl_u',
  Actual: s.cctrl_u,
  Expected: 'ctrl+u'
}, {
  Name: 'cctrl_v',
  Actual: s.cctrl_v,
  Expected: 'ctrl+v'
}, {
  Name: 'cctrl_w',
  Actual: s.cctrl_w,
  Expected: 'ctrl+w'
}, {
  Name: 'cctrl_x',
  Actual: s.cctrl_x,
  Expected: 'ctrl+x'
}, {
  Name: 'cctrl_y',
  Actual: s.cctrl_y,
  Expected: 'ctrl+y'
}, {
  Name: 'cctrl_z',
  Actual: s.cctrl_z,
  Expected: 'ctrl+z'
}, {
  Name: 'cApplicationName',
  Actual: s.cApplicationName,
  Expected: 'ApplicationName'
}, {
  Name: 'cApplicationRootPath',
  Actual: s.cApplicationRootPath,
  Expected: 'ApplicationRootPath'
}, {
  Name: 'cApplicationCleanedRootPath',
  Actual: s.cApplicationCleanedRootPath,
  Expected: 'ApplicationCleanedRootPath'
}, {
  Name: 'cConfigurationPath',
  Actual: s.cConfigurationPath,
  Expected: 'ConfigurationPath'
}, {
  Name: 'cApplicationVersionNumber',
  Actual: s.cApplicationVersionNumber,
  Expected: 'ApplicationVersionNumber'
}, {
  Name: 'cApplicationDescription',
  Actual: s.cApplicationDescription,
  Expected: 'ApplicationDescription'
}, {
  Name: 'cDataPath',
  Actual: s.cDataPath,
  Expected: 'DataPath'
}, {
  Name: 'cCtempPath',
  Actual: s.cCtempPath,
  Expected: 'c:/temp/'
}, {
  Name: 'cPageDataPath',
  Actual: s.cPageDataPath,
  Expected: 'PageDataPath'
}, {
  Name: 'cWorkflowDataPath',
  Actual: s.cWorkflowDataPath,
  Expected: 'WorkflowDataPath'
}, {
  Name: 'cKeywordsDataPath',
  Actual: s.cKeywordsDataPath,
  Expected: 'KeywordsDataPath'
}, {
  Name: 'cLocatorsDataPath',
  Actual: s.cLocatorsDataPath,
  Expected: 'LocatorsDataPath'
}, {
  Name: 'cConstantsPath',
  Actual: s.cConstantsPath,
  Expected: 'ConstantsPath'
}, {
  Name: 'cConstantsPathActual',
  Actual: s.cConstantsPathActual,
  Expected: 'src/Framework/Constants/'
}, {
  Name: 'cclientRulesLibrary',
  Actual: s.cclientRulesLibrary,
  Expected: 'clientRulesLibrary'
}, {
  Name: 'cCommandQueue',
  Actual: s.cCommandQueue,
  Expected: 'CommandQueue'
}, {
  Name: 'cConstantsValidationData',
  Actual: s.cConstantsValidationData,
  Expected: 'ConstantsValidationData'
}, {
  Name: 'cBasicConstantsValidation',
  Actual: s.cBasicConstantsValidation,
  Expected: 'BasicConstantsValidation'
}, {
  Name: 'cColorConstantsValidation',
  Actual: s.cColorConstantsValidation,
  Expected: 'ColorConstantsValidation'
}, {
  Name: 'cElementConstantsValidation',
  Actual: s.cElementConstantsValidation,
  Expected: 'ElementConstantsValidation'
}, {
  Name: 'cGenericConstantsValidation',
  Actual: s.cGenericConstantsValidation,
  Expected: 'GenericConstantsValidation'
}, {
  Name: 'cIsotopeConstantsValidation',
  Actual: s.cIsotopeConstantsValidation,
  Expected: 'IsotopeConstantsValidation'
}, {
  Name: 'cNumericConstantsValidation',
  Actual: s.cNumericConstantsValidation,
  Expected: 'NumericConstantsValidation'
}, {
  Name: 'cPhonicsConstantsValidation',
  Actual: s.cPhonicsConstantsValidation,
  Expected: 'PhonicsConstantsValidation'
}, {
  Name: 'cShapeConstantsValidation',
  Actual: s.cShapeConstantsValidation,
  Expected: 'ShapeConstantsValidation'
}, {
  Name: 'cSystemConstantsValidation',
  Actual: s.cSystemConstantsValidation,
  Expected: 'SystemConstantsValidation'
}, {
  Name: 'cUnitsConstantsValidation',
  Actual: s.cUnitsConstantsValidation,
  Expected: 'UnitsConstantsValidation'
}, {
  Name: 'cWordConstantsValidation',
  Actual: s.cWordConstantsValidation,
  Expected: 'WordConstantsValidation'
}, {
  Name: 'cSourceResourcesPath',
  Actual: s.cSourceResourcesPath,
  Expected: 'SourceResourcesPath'
}, {
  Name: 'cDestinationResourcesPath',
  Actual: s.cDestinationResourcesPath,
  Expected: 'DestinationResourcesPath'
}, {
  Name: 'cBinaryRootPath',
  Actual: s.cBinaryRootPath,
  Expected: 'BinaryRootPath'
}, {
  Name: 'cBinaryReleasePath',
  Actual: s.cBinaryReleasePath,
  Expected: 'BinaryReleasePath'
}, // Constants Filenames
{
  Name: 'cbasic_constants_js',
  Actual: s.cbasic_constants_js,
  Expected: 'basic.constants.js'
}, {
  Name: 'ccolor_constants_js',
  Actual: s.ccolor_constants_js,
  Expected: 'color.constants.js'
}, {
  Name: 'celement_constants_js',
  Actual: s.celement_constants_js,
  Expected: 'element.constants.js'
}, {
  Name: 'cgeneric_constants_js',
  Actual: s.cgeneric_constants_js,
  Expected: 'generic.constants.js'
}, {
  Name: 'cisotope_constants_js',
  Actual: s.cisotope_constants_js,
  Expected: 'isotope.constants.js'
}, {
  Name: 'cnumeric_constants_js',
  Actual: s.cnumeric_constants_js,
  Expected: 'numeric.constants.js'
}, {
  Name: 'cphonics_constants_js',
  Actual: s.cphonics_constants_js,
  Expected: 'phonics.constants.js'
}, {
  Name: 'cshape_constants_js',
  Actual: s.cshape_constants_js,
  Expected: 'shape.constants.js'
}, {
  Name: 'csystem_constants_js',
  Actual: s.csystem_constants_js,
  Expected: 'system.constants.js'
}, {
  Name: 'cunits_constants_js',
  Actual: s.cunits_constants_js,
  Expected: 'units.constants.js'
}, {
  Name: 'cword_constants_js',
  Actual: s.cword_constants_js,
  Expected: 'word.constants.js'
}, // Configuration Settings
{
  Name: 'cmetaDataDotJson',
  Actual: s.cmetaDataDotJson,
  Expected: 'metaData.json'
}, {
  Name: 'cArgumentDrivenInterface',
  Actual: s.cArgumentDrivenInterface,
  Expected: 'ArgumentDrivenInterface'
}, {
  Name: 'cFigletFont',
  Actual: s.cFigletFont,
  Expected: 'FigletFont'
}, {
  Name: 'cPrimaryCommandDelimiter',
  Actual: s.cPrimaryCommandDelimiter,
  Expected: 'PrimaryCommandDelimiter'
}, {
  Name: 'cSecondaryCommandDelimiter',
  Actual: s.cSecondaryCommandDelimiter,
  Expected: 'SecondaryCommandDelimiter'
}, {
  Name: 'cTertiaryCommandDelimiter',
  Actual: s.cTertiaryCommandDelimiter,
  Expected: 'TertiaryCommandDelimiter'
}, {
  Name: 'cEnableBusinessRuleOutput',
  Actual: s.cEnableBusinessRuleOutput,
  Expected: 'EnableBusinessRuleOutput'
}, {
  Name: 'cEnableBusinessRulePerformanceMetrics',
  Actual: s.cEnableBusinessRulePerformanceMetrics,
  Expected: 'EnableBusinessRulePerformanceMetrics'
}, {
  Name: 'cEnableCommandPerformanceMetrics',
  Actual: s.cEnableCommandPerformanceMetrics,
  Expected: 'EnableCommandPerformanceMetrics'
}, {
  Name: 'cEnableConstantsValidation',
  Actual: s.cEnableConstantsValidation,
  Expected: 'EnableConstantsValidation'
}, {
  Name: 'cEnableConstantsPatternGeneration',
  Actual: s.cEnableConstantsPatternGeneration,
  Expected: 'EnableConstantsPatternGeneration'
}, {
  Name: 'cDisplayIndividualConstantsValidationPassMessages',
  Actual: s.cDisplayIndividualConstantsValidationPassMessages,
  Expected: 'DisplayIndividualConstantsValidationPassMessages'
}, {
  Name: 'cDisplayIndividualConstantsValidationFailMessages',
  Actual: s.cDisplayIndividualConstantsValidationFailMessages,
  Expected: 'DisplayIndividualConstantsValidationFailMessages'
}, {
  Name: 'cDisplaySummaryConstantsValidationPassMessages',
  Actual: s.cDisplaySummaryConstantsValidationPassMessages,
  Expected: 'DisplaySummaryConstantsValidationPassMessages'
}, {
  Name: 'cDisplaySummaryConstantsValidationFailMessages',
  Actual: s.cDisplaySummaryConstantsValidationFailMessages,
  Expected: 'DisplaySummaryConstantsValidationFailMessages'
}, {
  Name: 'cPassAllConstantsValidations',
  Actual: s.cPassAllConstantsValidations,
  Expected: 'PassAllConstantsValidations'
}, {
  Name: 'cPassedAllCommandAliasesDuplicateChecks',
  Actual: s.cPassedAllCommandAliasesDuplicateChecks,
  Expected: 'PassedAllCommandAliasesDuplicateChecks'
}, {
  Name: 'cdeploymentCompleted',
  Actual: s.cdeploymentCompleted,
  Expected: 'deploymentCompleted'
}, {
  Name: 'creleaseCompleted',
  Actual: s.creleaseCompleted,
  Expected: 'releaseCompleted'
}, // Test Time Tracking
{
  Name: 'cBeginDateTimeStamp',
  Actual: s.cBeginDateTimeStamp,
  Expected: 'BeginDateTimeStamp'
}, {
  Name: 'cEndDateTimeStamp',
  Actual: s.cEndDateTimeStamp,
  Expected: 'EndDateTimeStamp'
}, {
  Name: 'cItemsIndividuallySynch',
  Actual: s.cItemsIndividuallySynch,
  Expected: 'ItemsIndividuallySynch'
}, {
  Name: 'cTimeStampVariableName',
  Actual: s.cTimeStampVariableName,
  Expected: 'TimeStampVariableName'
}, {
  Name: 'cBeginTimeStampVariableName',
  Actual: s.cBeginTimeStampVariableName,
  Expected: 'BeginTimeStampVariableName'
}, {
  Name: 'cEndTimeStampVariableName',
  Actual: s.cEndTimeStampVariableName,
  Expected: 'EndTimeStampVariableName'
}, {
  Name: 'cBusinessRulePerformanceTrackingStack',
  Actual: s.cBusinessRulePerformanceTrackingStack,
  Expected: 'BusinessRulePerformanceTrackingStack'
}, {
  Name: 'cBusinessRuleNamesPerformanceTrackingStack',
  Actual: s.cBusinessRuleNamesPerformanceTrackingStack,
  Expected: 'BusinessRuleNamesPerformanceTrackingStack'
}, {
  Name: 'cBusinessRulesPerformanceAnalysisStack',
  Actual: s.cBusinessRulesPerformanceAnalysisStack,
  Expected: 'BusinessRulesPerformanceAnalysisStack'
}, {
  Name: 'cClearBusinessRulesPerformanceDataAfterAnalysis',
  Actual: s.cClearBusinessRulesPerformanceDataAfterAnalysis,
  Expected: 'ClearBusinessRulesPerformanceDataAfterAnalysis'
}, {
  Name: 'cCommandPerformanceTrackingStack',
  Actual: s.cCommandPerformanceTrackingStack,
  Expected: 'CommandPerformanceTrackingStack'
}, {
  Name: 'cCommandNamesPerformanceTrackingStack',
  Actual: s.cCommandNamesPerformanceTrackingStack,
  Expected: 'CommandNamesPerformanceTrackingStack'
}, {
  Name: 'cCommandsPerformanceAnalysisStack',
  Actual: s.cCommandsPerformanceAnalysisStack,
  Expected: 'CommandsPerformanceAnalysisStack'
}, {
  Name: 'cClearCommandPerformanceDataAfterAnalysis',
  Actual: s.cClearCommandPerformanceDataAfterAnalysis,
  Expected: 'ClearCommandPerformanceDataAfterAnalysis'
}, // Business Rules
{
  Name: 'cecho',
  Actual: s.cecho,
  Expected: 'echo'
}, {
  Name: 'cEcho',
  Actual: s.cEcho,
  Expected: 'Echo'
}, // ********************************
// StringParsing rules in order
// ********************************
{
  Name: 'cstringToBoolean',
  Actual: s.cstringToBoolean,
  Expected: 'stringToBoolean'
}, {
  Name: 'cstringToDataType',
  Actual: s.cstringToDataType,
  Expected: 'stringToDataType'
}, {
  Name: 'cdetermineObjectDataType',
  Actual: s.cdetermineObjectDataType,
  Expected: 'determineObjectDataType'
}, {
  Name: 'cisBoolean',
  Actual: s.cisBoolean,
  Expected: 'isBoolean'
}, {
  Name: 'cisInteger',
  Actual: s.cisInteger,
  Expected: 'isInteger'
}, {
  Name: 'cisFloat',
  Actual: s.cisFloat,
  Expected: 'isFloat'
}, {
  Name: 'cisString',
  Actual: s.cisString,
  Expected: 'isString'
}, {
  Name: 'csingleQuoteSwapAfterEquals',
  Actual: s.csingleQuoteSwapAfterEquals,
  Expected: 'singleQuoteSwapAfterEquals'
}, {
  Name: 'cswapForwardSlashToBackSlash',
  Actual: s.cswapForwardSlashToBackSlash,
  Expected: 'swapForwardSlashToBackSlash'
}, {
  Name: 'cswapBackSlashToForwardSlash',
  Actual: s.cswapBackSlashToForwardSlash,
  Expected: 'swapBackSlashToForwardSlash'
}, {
  Name: 'cswapDoubleForwardSlashToSingleForwardSlash',
  Actual: s.cswapDoubleForwardSlashToSingleForwardSlash,
  Expected: 'swapDoubleForwardSlashToSingleForwardSlash'
}, {
  Name: 'cswapDoubleBackSlashToSingleBackSlash',
  Actual: s.cswapDoubleBackSlashToSingleBackSlash,
  Expected: 'swapDoubleBackSlashToSingleBackSlash'
}, {
  Name: 'cgetUserNameFromEmail',
  Actual: s.cgetUserNameFromEmail,
  Expected: 'getUserNameFromEmail'
}, {
  Name: 'creplaceSpacesWithPlus',
  Actual: s.creplaceSpacesWithPlus,
  Expected: 'replaceSpacesWithPlus'
}, {
  Name: 'creplaceColonWithUnderscore',
  Actual: s.creplaceColonWithUnderscore,
  Expected: 'replaceColonWithUnderscore'
}, {
  Name: 'creplaceCharacterWithCharacter',
  Actual: s.creplaceCharacterWithCharacter,
  Expected: 'replaceCharacterWithCharacter'
}, {
  Name: 'ccleanCarriageReturnFromString',
  Actual: s.ccleanCarriageReturnFromString,
  Expected: 'cleanCarriageReturnFromString'
}, {
  Name: 'cconvertStringToLowerCase',
  Actual: s.cconvertStringToLowerCase,
  Expected: 'convertStringToLowerCase'
}, {
  Name: 'cconvertStringToUpperCase',
  Actual: s.cconvertStringToUpperCase,
  Expected: 'convertStringToUpperCase'
}, {
  Name: 'cgetFileNameFromPath',
  Actual: s.cgetFileNameFromPath,
  Expected: 'getFileNameFromPath'
}, {
  Name: 'cgetFileExtension',
  Actual: s.cgetFileExtension,
  Expected: 'getFileExtension'
}, {
  Name: 'cremoveDotFromFileExtension',
  Actual: s.cremoveDotFromFileExtension,
  Expected: 'removeDotFromFileExtension'
}, {
  Name: 'cremoveFileExtensionFromFileName',
  Actual: s.cremoveFileExtensionFromFileName,
  Expected: 'removeFileExtensionFromFileName'
}, {
  Name: 'cgetValueFromAssignmentOperationString',
  Actual: s.cgetValueFromAssignmentOperationString,
  Expected: 'getValueFromAssignmentOperationString'
}, {
  Name: 'caggregateNumericalDifferenceBetweenTwoStrings',
  Actual: s.caggregateNumericalDifferenceBetweenTwoStrings,
  Expected: 'aggregateNumericalDifferenceBetweenTwoStrings'
}, {
  Name: 'cconvertCamelCaseStringToArray',
  Actual: s.cconvertCamelCaseStringToArray,
  Expected: 'convertCamelCaseStringToArray'
}, {
  Name: 'ccountCamelCaseWords',
  Actual: s.ccountCamelCaseWords,
  Expected: 'countCamelCaseWords'
}, {
  Name: 'cdoesStringContainAcronym',
  Actual: s.cdoesStringContainAcronym,
  Expected: 'doesStringContainAcronym'
}, {
  Name: 'ccountDelimiterInString',
  Actual: s.ccountDelimiterInString,
  Expected: 'countDelimiterInString'
}, {
  Name: 'cdetermineWordDelimiter',
  Actual: s.cdetermineWordDelimiter,
  Expected: 'determineWordDelimiter'
}, {
  Name: 'cgetWordCountInString',
  Actual: s.cgetWordCountInString,
  Expected: 'getWordCountInString'
}, {
  Name: 'cgetWordsArrayFromString',
  Actual: s.cgetWordsArrayFromString,
  Expected: 'getWordsArrayFromString'
}, {
  Name: 'crecombineStringArrayWithSpaces',
  Actual: s.crecombineStringArrayWithSpaces,
  Expected: 'recombineStringArrayWithSpaces'
}, {
  Name: 'cdoesStringContainUpperCaseCharacter',
  Actual: s.cdoesStringContainUpperCaseCharacter,
  Expected: 'doesStringContainUpperCaseCharacter'
}, {
  Name: 'cdoesStringContainLowerCaseCharacter',
  Actual: s.cdoesStringContainLowerCaseCharacter,
  Expected: 'doesStringContainLowerCaseCharacter'
}, {
  Name: 'cisFirstCharacterLowerCase',
  Actual: s.cisFirstCharacterLowerCase,
  Expected: 'isFirstCharacterLowerCase'
}, {
  Name: 'cisFirstCharacterUpperCase',
  Actual: s.cisFirstCharacterUpperCase,
  Expected: 'isFirstCharacterUpperCase'
}, {
  Name: 'cisStringList',
  Actual: s.cisStringList,
  Expected: 'isStringList'
}, {
  Name: 'cisStringCamelCase',
  Actual: s.cisStringCamelCase,
  Expected: 'isStringCamelCase'
}, {
  Name: 'cconvertArrayToCamelCaseString',
  Actual: s.cconvertArrayToCamelCaseString,
  Expected: 'convertArrayToCamelCaseString'
}, {
  Name: 'cmapWordToCamelCaseWord',
  Actual: s.cmapWordToCamelCaseWord,
  Expected: 'mapWordToCamelCaseWord'
}, {
  Name: 'csimplifyAndConsolidateString',
  Actual: s.csimplifyAndConsolidateString,
  Expected: 'simplifyAndConsolidateString'
}, {
  Name: 'ccompareSimplifiedAndConsolidatedStrings',
  Actual: s.ccompareSimplifiedAndConsolidatedStrings,
  Expected: 'compareSimplifiedAndConsolidatedStrings'
}, {
  Name: 'cdoesArrayContainLowerCaseConsolidatedString',
  Actual: s.cdoesArrayContainLowerCaseConsolidatedString,
  Expected: 'doesArrayContainLowerCaseConsolidatedString'
}, {
  Name: 'cdoesArrayContainCharacter',
  Actual: s.cdoesArrayContainCharacter,
  Expected: 'doesArrayContainCharacter'
}, {
  Name: 'cremoveCharacterFromArray',
  Actual: s.cremoveCharacterFromArray,
  Expected: 'removeCharacterFromArray'
}, {
  Name: 'cascertainMatchingFilenames',
  Actual: s.cascertainMatchingFilenames,
  Expected: 'ascertainMatchingFilenames'
}, {
  Name: 'cascertainMatchingElements',
  Actual: s.cascertainMatchingElements,
  Expected: 'ascertainMatchingElements'
}, {
  Name: 'cdoesArrayContainFilename',
  Actual: s.cdoesArrayContainFilename,
  Expected: 'doesArrayContainFilename'
}, {
  Name: 'cgetLengthOfLongestStringInArray',
  Actual: s.cgetLengthOfLongestStringInArray,
  Expected: 'getLengthOfLongestStringInArray'
}, {
  Name: 'cvalidateConstantsDataValidation',
  Actual: s.cvalidateConstantsDataValidation,
  Expected: 'validateConstantsDataValidation'
}, {
  Name: 'cdetermineConstantsContextQualifiedPrefix',
  Actual: s.cdetermineConstantsContextQualifiedPrefix,
  Expected: 'determineConstantsContextQualifiedPrefix'
}, {
  Name: 'cdetermineSuggestedConstantsValidationLineOfCode',
  Actual: s.cdetermineSuggestedConstantsValidationLineOfCode,
  Expected: 'determineSuggestedConstantsValidationLineOfCode'
}, {
  Name: 'cvalidateConstantsDataValidationLineItemName',
  Actual: s.cvalidateConstantsDataValidationLineItemName,
  Expected: 'validateConstantsDataValidationLineItemName'
}, {
  Name: 'cdoesConstantExist',
  Actual: s.cdoesConstantExist,
  Expected: 'doesConstantExist'
}, {
  Name: 'cgetConstantType',
  Actual: s.cgetConstantType,
  Expected: 'getConstantType'
}, {
  Name: 'cgetConstantActualValue',
  Actual: s.cgetConstantActualValue,
  Expected: 'getConstantActualValue'
}, {
  Name: 'cgetConstantName',
  Actual: s.cgetConstantName,
  Expected: 'getConstantName'
}, {
  Name: 'cfindConstantName',
  Actual: s.cfindConstantName,
  Expected: 'findConstantName'
}, {
  Name: 'cisConstantTypeValid',
  Actual: s.cisConstantTypeValid,
  Expected: 'isConstantTypeValid'
}, {
  Name: 'cconvertConstantTypeToConstantPrefix',
  Actual: s.cconvertConstantTypeToConstantPrefix,
  Expected: 'convertConstantTypeToConstantPrefix'
}, {
  Name: 'cconstantsOptimizedFulfillmentSystem',
  Actual: s.cconstantsOptimizedFulfillmentSystem,
  Expected: 'constantsOptimizedFulfillmentSystem'
}, {
  Name: 'cconstantsFulfillmentSystem',
  Actual: s.cconstantsFulfillmentSystem,
  Expected: 'constantsFulfillmentSystem'
}, {
  Name: 'csearchForPatternsInStringArray',
  Actual: s.csearchForPatternsInStringArray,
  Expected: 'searchForPatternsInStringArray'
}, {
  Name: 'cvalidatePatternsThatNeedImplementation',
  Actual: s.cvalidatePatternsThatNeedImplementation,
  Expected: 'validatePatternsThatNeedImplementation'
}, {
  Name: 'cvalidateConstantsDataValues',
  Actual: s.cvalidateConstantsDataValues,
  Expected: 'validateConstantsDataValues'
}, {
  Name: 'cisValidCommandNameString',
  Actual: s.cisValidCommandNameString,
  Expected: 'isValidCommandNameString'
}, {
  Name: 'cisConstantValid',
  Actual: s.cisConstantValid,
  Expected: 'isConstantValid'
}, {
  Name: 'ccountDuplicateCommandAliases',
  Actual: s.ccountDuplicateCommandAliases,
  Expected: 'countDuplicateCommandAliases'
}, {
  Name: 'cgenerateCommandAliases',
  Actual: s.cgenerateCommandAliases,
  Expected: 'generateCommandAliases'
}, {
  Name: 'csolveLehmerCode',
  Actual: s.csolveLehmerCode,
  Expected: 'solveLehmerCode'
}, {
  Name: 'crecursiveArrayExpansion',
  Actual: s.crecursiveArrayExpansion,
  Expected: 'recursiveArrayExpansion'
}, {
  Name: 'cgetLehmerCodeValue',
  Actual: s.cgetLehmerCodeValue,
  Expected: 'getLehmerCodeValue'
}, {
  Name: 'carraysAreEqual',
  Actual: s.carraysAreEqual,
  Expected: 'arraysAreEqual'
}, {
  Name: 'cgetDataCatagoryFromDataContextName',
  Actual: s.cgetDataCatagoryFromDataContextName,
  Expected: 'getDataCatagoryFromDataContextName'
}, {
  Name: 'cgetDataCatagoryDetailNameFromDataContextName',
  Actual: s.cgetDataCatagoryDetailNameFromDataContextName,
  Expected: 'getDataCatagoryDetailNameFromDataContextName'
}, {
  Name: 'cgetKeywordNameFromDataContextName',
  Actual: s.cgetKeywordNameFromDataContextName,
  Expected: 'getKeywordNameFromDataContextName'
}, {
  Name: 'cparseSystemRootPath',
  Actual: s.cparseSystemRootPath,
  Expected: 'parseSystemRootPath'
}, {
  Name: 'creplaceDoublePercentWithMessage',
  Actual: s.creplaceDoublePercentWithMessage,
  Expected: 'replaceDoublePercentWithMessage'
}, {
  Name: 'cremoveXnumberOfFoldersFromEndOfPath',
  Actual: s.cremoveXnumberOfFoldersFromEndOfPath,
  Expected: 'removeXnumberOfFoldersFromEndOfPath'
}, {
  Name: 'cgetFirstTopLevelFolderFromPath',
  Actual: s.cgetFirstTopLevelFolderFromPath,
  Expected: 'getFirstTopLevelFolderFromPath'
}, {
  Name: 'cloadDataFile',
  Actual: s.cloadDataFile,
  Expected: 'loadDataFile'
}, {
  Name: 'csupportedFileFormatsAre',
  Actual: s.csupportedFileFormatsAre,
  Expected: 'supportedFileFormatsAre'
}, {
  Name: 'cgetStoredData',
  Actual: s.cgetStoredData,
  Expected: 'getStoredData'
}, {
  Name: 'cstoreData',
  Actual: s.cstoreData,
  Expected: 'storeData'
}, {
  Name: 'cisObjectEmpty',
  Actual: s.cisObjectEmpty,
  Expected: 'isObjectEmpty'
}, {
  Name: 'cisArrayEmpty',
  Actual: s.cisArrayEmpty,
  Expected: 'isArrayEmpty'
}, {
  Name: 'cisArray',
  Actual: s.cisArray,
  Expected: 'isArray'
}, {
  Name: 'cisNonZeroLengthArray',
  Actual: s.cisNonZeroLengthArray,
  Expected: 'isNonZeroLengthArray'
}, {
  Name: 'carrayDeepClone',
  Actual: s.carrayDeepClone,
  Expected: 'arrayDeepClone'
}, {
  Name: 'cisObject',
  Actual: s.cisObject,
  Expected: 'isObject'
}, {
  Name: 'cisArrayOrObject',
  Actual: s.cisArrayOrObject,
  Expected: 'isArrayOrObject'
}, {
  Name: 'ccommandAliasGenerator',
  Actual: s.ccommandAliasGenerator,
  Expected: 'commandAliasGenerator'
}, {
  Name: 'cconstantsGenerator',
  Actual: s.cconstantsGenerator,
  Expected: 'constantsGenerator'
}, {
  Name: 'cconstantsGeneratorList',
  Actual: s.cconstantsGeneratorList,
  Expected: 'constantsGeneratorList'
}, {
  Name: 'cconstantsPatternRecognizer',
  Actual: s.cconstantsPatternRecognizer,
  Expected: 'constantsPatternRecognizer'
}, {
  Name: 'cgetAttributeName',
  Actual: s.cgetAttributeName,
  Expected: 'getAttributeName'
}, {
  Name: 'cgetAttributeValue',
  Actual: s.cgetAttributeValue,
  Expected: 'getAttributeValue'
}, {
  Name: 'cisOdd',
  Actual: s.cisOdd,
  Expected: 'isOdd'
}, {
  Name: 'cisEven',
  Actual: s.cisEven,
  Expected: 'isEven'
}, {
  Name: 'creplaceCharacterAtIndex',
  Actual: s.creplaceCharacterAtIndex,
  Expected: 'replaceCharacterAtIndex'
}, {
  Name: 'ccleanCommandInput',
  Actual: s.ccleanCommandInput,
  Expected: 'cleanCommandInput'
}, {
  Name: 'caggregateCommandArguments',
  Actual: s.caggregateCommandArguments,
  Expected: 'aggregateCommandArguments'
}, {
  Name: 'cdoesArrayContainValue',
  Actual: s.cdoesArrayContainValue,
  Expected: 'doesArrayContainValue'
}, {
  Name: 'creplaceCharacterAtIndexOfString',
  Actual: s.creplaceCharacterAtIndexOfString,
  Expected: 'replaceCharacterAtIndexOfString'
}, // *********************************
// StringGeneration rules in order
// *********************************
{
  Name: 'cgenerateRandomMixedCaseTextByLength1',
  Actual: s.cgenerateRandomMixedCaseTextByLength1,
  Expected: 'generateRandomMixedCaseTextByLength1'
}, {
  Name: 'cgenerateRandomMixedCaseTextByLength2',
  Actual: s.cgenerateRandomMixedCaseTextByLength2,
  Expected: 'generateRandomMixedCaseTextByLength2'
}, {
  Name: 'cgenerateRandomUpperCaseTextByLength1',
  Actual: s.cgenerateRandomUpperCaseTextByLength1,
  Expected: 'generateRandomUpperCaseTextByLength1'
}, {
  Name: 'cgenerateRandomUpperCaseTextByLength2',
  Actual: s.cgenerateRandomUpperCaseTextByLength2,
  Expected: 'generateRandomUpperCaseTextByLength2'
}, {
  Name: 'cgenerateRandomLowerCaseTextByLength1',
  Actual: s.cgenerateRandomLowerCaseTextByLength1,
  Expected: 'generateRandomLowerCaseTextByLength1'
}, {
  Name: 'cgenerateRandomLowerCaseTextByLength2',
  Actual: s.cgenerateRandomLowerCaseTextByLength2,
  Expected: 'generateRandomLowerCaseTextByLength2'
}, {
  Name: 'cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1',
  Actual: s.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1,
  Expected: 'generateRandomMixedCaseTextWithSpecialCharactersByLength1'
}, {
  Name: 'cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2',
  Actual: s.cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2,
  Expected: 'generateRandomMixedCaseTextWithSpecialCharactersByLength2'
}, {
  Name: 'cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1',
  Actual: s.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1,
  Expected: 'generateRandomUpperCaseTextWithSpecialCharactersByLength1'
}, {
  Name: 'cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2',
  Actual: s.cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2,
  Expected: 'generateRandomUpperCaseTextWithSpecialCharactersByLength2'
}, {
  Name: 'cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1',
  Actual: s.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1,
  Expected: 'generateRandomLowerCaseTextWithSpecialCharactersByLength1'
}, {
  Name: 'cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2',
  Actual: s.cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2,
  Expected: 'generateRandomLowerCaseTextWithSpecialCharactersByLength2'
}, {
  Name: 'cgenerateRandomMixedCaseAlphaNumericCodeByLength1',
  Actual: s.cgenerateRandomMixedCaseAlphaNumericCodeByLength1,
  Expected: 'generateRandomMixedCaseAlphaNumericCodeByLength1'
}, {
  Name: 'cgenerateRandomMixedCaseAlphaNumericCodeByLength2',
  Actual: s.cgenerateRandomMixedCaseAlphaNumericCodeByLength2,
  Expected: 'generateRandomMixedCaseAlphaNumericCodeByLength2'
}, {
  Name: 'cgenerateRandomUpperCaseAlphaNumericCodeByLength1',
  Actual: s.cgenerateRandomUpperCaseAlphaNumericCodeByLength1,
  Expected: 'generateRandomUpperCaseAlphaNumericCodeByLength1'
}, {
  Name: 'cgenerateRandomUpperCaseAlphaNumericCodeByLength2',
  Actual: s.cgenerateRandomUpperCaseAlphaNumericCodeByLength2,
  Expected: 'generateRandomUpperCaseAlphaNumericCodeByLength2'
}, {
  Name: 'cgenerateRandomLowerCaseAlphaNumericCodeByLength1',
  Actual: s.cgenerateRandomLowerCaseAlphaNumericCodeByLength1,
  Expected: 'generateRandomLowerCaseAlphaNumericCodeByLength1'
}, {
  Name: 'cgenerateRandomLowerCaseAlphaNumericCodeByLength2',
  Actual: s.cgenerateRandomLowerCaseAlphaNumericCodeByLength2,
  Expected: 'generateRandomLowerCaseAlphaNumericCodeByLength2'
}, {
  Name: 'cgenerateRandomNumericCodeByLength1',
  Actual: s.cgenerateRandomNumericCodeByLength1,
  Expected: 'generateRandomNumericCodeByLength1'
}, {
  Name: 'cgenerateRandomNumericCodeByLength2',
  Actual: s.cgenerateRandomNumericCodeByLength2,
  Expected: 'generateRandomNumericCodeByLength2'
}, {
  Name: 'cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1',
  Actual: s.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1,
  Expected: 'generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1'
}, {
  Name: 'cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2',
  Actual: s.cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2,
  Expected: 'generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2'
}, {
  Name: 'cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1',
  Actual: s.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1,
  Expected: 'generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1'
}, {
  Name: 'cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2',
  Actual: s.cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2,
  Expected: 'generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2'
}, {
  Name: 'cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1',
  Actual: s.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1,
  Expected: 'generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1'
}, {
  Name: 'cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2',
  Actual: s.cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2,
  Expected: 'generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2'
}, {
  Name: 'cgenerateRandomSpecialCharacterCodeByLength1',
  Actual: s.cgenerateRandomSpecialCharacterCodeByLength1,
  Expected: 'generateRandomSpecialCharacterCodeByLength1'
}, {
  Name: 'cgenerateRandomSpecialCharacterCodeByLength2',
  Actual: s.cgenerateRandomSpecialCharacterCodeByLength2,
  Expected: 'generateRandomSpecialCharacterCodeByLength2'
}, {
  Name: 'cgenerateValidEmail1',
  Actual: s.cgenerateValidEmail1,
  Expected: 'generateValidEmail1'
}, {
  Name: 'cgenerateValidEmail2',
  Actual: s.cgenerateValidEmail2,
  Expected: 'generateValidEmail2'
}, {
  Name: 'cgenerateInvalidEmail1',
  Actual: s.cgenerateInvalidEmail1,
  Expected: 'generateInvalidEmail1'
}, {
  Name: 'cgenerateInvalidEmail2',
  Actual: s.cgenerateInvalidEmail2,
  Expected: 'generateInvalidEmail2'
}, {
  Name: 'cgenerateValidEmailWithSpecificSuffixAndDomainName1',
  Actual: s.cgenerateValidEmailWithSpecificSuffixAndDomainName1,
  Expected: 'generateValidEmailWithSpecificSuffixAndDomainName1'
}, {
  Name: 'cgenerateValidEmailWithSpecificSuffixAndDomainName2',
  Actual: s.cgenerateValidEmailWithSpecificSuffixAndDomainName2,
  Expected: 'generateValidEmailWithSpecificSuffixAndDomainName2'
}, {
  Name: 'cgenerateRandomValidEmail1',
  Actual: s.cgenerateRandomValidEmail1,
  Expected: 'generateRandomValidEmail1'
}, {
  Name: 'cgenerateRandomValidEmail2',
  Actual: s.cgenerateRandomValidEmail2,
  Expected: 'generateRandomValidEmail2'
}, {
  Name: 'cgenerateInvalidEmailWithSpecificSuffixAndDomainName1',
  Actual: s.cgenerateInvalidEmailWithSpecificSuffixAndDomainName1,
  Expected: 'generateInvalidEmailWithSpecificSuffixAndDomainName1'
}, {
  Name: 'cgenerateInvalidEmailWithSpecificSuffixAndDomainName2',
  Actual: s.cgenerateInvalidEmailWithSpecificSuffixAndDomainName2,
  Expected: 'generateInvalidEmailWithSpecificSuffixAndDomainName2'
}, {
  Name: 'cgenerateRandomInvalidEmail1',
  Actual: s.cgenerateRandomInvalidEmail1,
  Expected: 'generateRandomInvalidEmail1'
}, {
  Name: 'cgenerateRandomInvalidEmail2',
  Actual: s.cgenerateRandomInvalidEmail2,
  Expected: 'generateRandomInvalidEmail2'
}, // *********************************
// CharacterGeneration rules in order
// *********************************
{
  Name: 'crandomlyGenerateMixedCaseLetterOrSpecialCharacter1',
  Actual: s.crandomlyGenerateMixedCaseLetterOrSpecialCharacter1,
  Expected: 'randomlyGenerateMixedCaseLetterOrSpecialCharacter1'
}, {
  Name: 'crandomlyGenerateMixedCaseLetterOrSpecialCharacter2',
  Actual: s.crandomlyGenerateMixedCaseLetterOrSpecialCharacter2,
  Expected: 'randomlyGenerateMixedCaseLetterOrSpecialCharacter2'
}, {
  Name: 'crandomlyGenerateUpperCaseLetterOrSpecialCharacter1',
  Actual: s.crandomlyGenerateUpperCaseLetterOrSpecialCharacter1,
  Expected: 'randomlyGenerateUpperCaseLetterOrSpecialCharacter1'
}, {
  Name: 'crandomlyGenerateUpperCaseLetterOrSpecialCharacter2',
  Actual: s.crandomlyGenerateUpperCaseLetterOrSpecialCharacter2,
  Expected: 'randomlyGenerateUpperCaseLetterOrSpecialCharacter2'
}, {
  Name: 'crandomlyGenerateLowerCaseLetterOrSpecialCharacter1',
  Actual: s.crandomlyGenerateLowerCaseLetterOrSpecialCharacter1,
  Expected: 'randomlyGenerateLowerCaseLetterOrSpecialCharacter1'
}, {
  Name: 'crandomlyGenerateLowerCaseLetterOrSpecialCharacter2',
  Actual: s.crandomlyGenerateLowerCaseLetterOrSpecialCharacter2,
  Expected: 'randomlyGenerateLowerCaseLetterOrSpecialCharacter2'
}, {
  Name: 'crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1',
  Actual: s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1,
  Expected: 'randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1'
}, {
  Name: 'crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2',
  Actual: s.crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2,
  Expected: 'randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2'
}, {
  Name: 'crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1',
  Actual: s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1,
  Expected: 'randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1'
}, {
  Name: 'crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2',
  Actual: s.crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2,
  Expected: 'randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2'
}, {
  Name: 'crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1',
  Actual: s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1,
  Expected: 'randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1'
}, {
  Name: 'crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2',
  Actual: s.crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2,
  Expected: 'randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2'
}, {
  Name: 'crandomlyGenerateMixedCaseAlphaNumericCharacter1',
  Actual: s.crandomlyGenerateMixedCaseAlphaNumericCharacter1,
  Expected: 'randomlyGenerateMixedCaseAlphaNumericCharacter1'
}, {
  Name: 'crandomlyGenerateMixedCaseAlphaNumericCharacter2',
  Actual: s.crandomlyGenerateMixedCaseAlphaNumericCharacter2,
  Expected: 'randomlyGenerateMixedCaseAlphaNumericCharacter2'
}, {
  Name: 'crandomlyGenerateUpperCaseAlphaNumericCharacter1',
  Actual: s.crandomlyGenerateUpperCaseAlphaNumericCharacter1,
  Expected: 'randomlyGenerateUpperCaseAlphaNumericCharacter1'
}, {
  Name: 'crandomlyGenerateUpperCaseAlphaNumericCharacter2',
  Actual: s.crandomlyGenerateUpperCaseAlphaNumericCharacter2,
  Expected: 'randomlyGenerateUpperCaseAlphaNumericCharacter2'
}, {
  Name: 'crandomlyGenerateLowerCaseAlphaNumericCharacter1',
  Actual: s.crandomlyGenerateLowerCaseAlphaNumericCharacter1,
  Expected: 'randomlyGenerateLowerCaseAlphaNumericCharacter1'
}, {
  Name: 'crandomlyGenerateLowerCaseAlphaNumericCharacter2',
  Actual: s.crandomlyGenerateLowerCaseAlphaNumericCharacter2,
  Expected: 'randomlyGenerateLowerCaseAlphaNumericCharacter2'
}, {
  Name: 'crandomlyGenerateNumericCharacter1',
  Actual: s.crandomlyGenerateNumericCharacter1,
  Expected: 'randomlyGenerateNumericCharacter1'
}, {
  Name: 'crandomlyGenerateNumericCharacter2',
  Actual: s.crandomlyGenerateNumericCharacter2,
  Expected: 'randomlyGenerateNumericCharacter2'
}, {
  Name: 'crandomlyGenerateSpecialCharacter1',
  Actual: s.crandomlyGenerateSpecialCharacter1,
  Expected: 'randomlyGenerateSpecialCharacter1'
}, {
  Name: 'crandomlyGenerateSpecialCharacter2',
  Actual: s.crandomlyGenerateSpecialCharacter2,
  Expected: 'randomlyGenerateSpecialCharacter2'
}, {
  Name: 'crandomlyGenerateNumberInRange1',
  Actual: s.crandomlyGenerateNumberInRange1,
  Expected: 'randomlyGenerateNumberInRange1'
}, {
  Name: 'crandomlyGenerateNumberInRange2',
  Actual: s.crandomlyGenerateNumberInRange2,
  Expected: 'randomlyGenerateNumberInRange2'
}, {
  Name: 'crandomlyGenerateBooleanValue1',
  Actual: s.crandomlyGenerateBooleanValue1,
  Expected: 'randomlyGenerateBooleanValue1'
}, {
  Name: 'crandomlyGenerateBooleanValue2',
  Actual: s.crandomlyGenerateBooleanValue2,
  Expected: 'randomlyGenerateBooleanValue2'
}, {
  Name: 'crandomlyGenerateMixedCaseAlphabeticCharacter1',
  Actual: s.crandomlyGenerateMixedCaseAlphabeticCharacter1,
  Expected: 'randomlyGenerateMixedCaseAlphabeticCharacter1'
}, {
  Name: 'crandomlyGenerateMixedCaseAlphabeticCharacter2',
  Actual: s.crandomlyGenerateMixedCaseAlphabeticCharacter2,
  Expected: 'randomlyGenerateMixedCaseAlphabeticCharacter2'
}, {
  Name: 'crandomlyGenerateLowerCaseLetter1',
  Actual: s.crandomlyGenerateLowerCaseLetter1,
  Expected: 'randomlyGenerateLowerCaseLetter1'
}, {
  Name: 'crandomlyGenerateLowerCaseLetter2',
  Actual: s.crandomlyGenerateLowerCaseLetter2,
  Expected: 'randomlyGenerateLowerCaseLetter2'
}, {
  Name: 'crandomlyGenerateUpperCaseLetter1',
  Actual: s.crandomlyGenerateUpperCaseLetter1,
  Expected: 'randomlyGenerateUpperCaseLetter1'
}, {
  Name: 'crandomlyGenerateUpperCaseLetter2',
  Actual: s.crandomlyGenerateUpperCaseLetter2,
  Expected: 'randomlyGenerateUpperCaseLetter2'
}, {
  Name: 'cconvertNumberToUpperCaseLetter',
  Actual: s.cconvertNumberToUpperCaseLetter,
  Expected: 'convertNumberToUpperCaseLetter'
}, {
  Name: 'cconvertNumberToLowerCaseLetter',
  Actual: s.cconvertNumberToLowerCaseLetter,
  Expected: 'convertNumberToLowerCaseLetter'
}, // *********************************
// mathOperations rules in order
// *********************************
{
  Name: 'chex2rgbConversion',
  Actual: s.chex2rgbConversion,
  Expected: 'hex2rgbConversion'
}, // Commands
{
  Name: 'cSystemCommandsAliasesActualPath',
  Actual: s.cSystemCommandsAliasesActualPath,
  Expected: '/Framework/Resources/Commands/'
}, {
  Name: 'cSystemWorkflowsActualPath',
  Actual: s.cSystemWorkflowsActualPath,
  Expected: '/Framework/Resources/Workflows/'
}, {
  Name: 'cDevSystemCommandsAliasesActualPath',
  Actual: s.cDevSystemCommandsAliasesActualPath,
  Expected: 'src/Framework/Resources/Commands/'
}, {
  Name: 'cDevSystemWorkflowsActualPath',
  Actual: s.cDevSystemWorkflowsActualPath,
  Expected: 'src/Framework/Resources/Workflows/'
}, {
  Name: 'cProdSystemCommandsAliasesActualPath',
  Actual: s.cProdSystemCommandsAliasesActualPath,
  Expected: 'bin/Framework/Resources/Commands/'
}, {
  Name: 'cProdSystemWorkflowsActualPath',
  Actual: s.cProdSystemWorkflowsActualPath,
  Expected: 'bin/Framework/Resources/Workflows/'
}, {
  Name: 'cSystemCommandsAliasesPath',
  Actual: s.cSystemCommandsAliasesPath,
  Expected: 'SystemCommandsAliasesPath'
}, {
  Name: 'cClientCommandsAliasesPath',
  Actual: s.cClientCommandsAliasesPath,
  Expected: 'ClientCommandsAliasesPath'
}, {
  Name: 'cSystemWorkflowsPath',
  Actual: s.cSystemWorkflowsPath,
  Expected: 'SystemWorkflowsPath'
}, {
  Name: 'cClientWorkflowsPath',
  Actual: s.cClientWorkflowsPath,
  Expected: 'ClientWorkflowsPath'
}, // ********************************
// Nominal Commands in order
// ********************************
{
  Name: 'cechoCommand',
  Actual: s.cechoCommand,
  Expected: 'echoCommand'
}, {
  Name: 'cEchoCommand',
  Actual: s.cEchoCommand,
  Expected: 'EchoCommand'
}, {
  Name: 'cclearScreen',
  Actual: s.cclearScreen,
  Expected: 'clearScreen'
}, {
  Name: 'cworkflowHelp',
  Actual: s.cworkflowHelp,
  Expected: 'workflowHelp'
}, {
  Name: 'ccommandSequencer',
  Actual: s.ccommandSequencer,
  Expected: 'commandSequencer'
}, {
  Name: 'cprintDataHive',
  Actual: s.cprintDataHive,
  Expected: 'printDataHive'
}, {
  Name: 'cprintDataHiveAttributes',
  Actual: s.cprintDataHiveAttributes,
  Expected: 'printDataHiveAttributes'
}, {
  Name: 'cclearDataStorage',
  Actual: s.cclearDataStorage,
  Expected: 'clearDataStorage'
}, {
  Name: 'ccommandGenerator',
  Actual: s.ccommandGenerator,
  Expected: 'commandGenerator'
}, {
  Name: 'cbusinessRulesMetrics',
  Actual: s.cbusinessRulesMetrics,
  Expected: 'businessRulesMetrics'
}, {
  Name: 'ccommandMetrics',
  Actual: s.ccommandMetrics,
  Expected: 'commandMetrics'
}, {
  Name: 'cconvertColors',
  Actual: s.cconvertColors,
  Expected: 'convertColors'
}, // ********************************
// Unit Test Constants commands in order
// ********************************
{
  Name: 'cvalidateConstants',
  Actual: s.cvalidateConstants,
  Expected: 'validateConstants'
}, {
  Name: 'cvalidateCommandAliases',
  Actual: s.cvalidateCommandAliases,
  Expected: 'validateCommandAliases'
}, // ********************************
// System defined workflows
// ********************************
{
  Name: 'cStartupWorkflow',
  Actual: s.cStartupWorkflow,
  Expected: 'Workflow startup'
}, {
  Name: 'cBuildWorkflow',
  Actual: s.cBuildWorkflow,
  Expected: 'Workflow build'
}, {
  Name: 'cReleaseWorkflow',
  Actual: s.cReleaseWorkflow,
  Expected: 'Workflow release'
}];
exports.systemConstantsValidation = systemConstantsValidation;