/**
 * @file system.constants.js
 * @module system-constants
 * @description Contains system defined acronyms, many of them derived from the basic-constants.
 * Also included are other constants like countries, named spoken languages.
 * Also included are common files types, control key combinations, environment variable strings,
 * system defined words and codes, user interface object types,
 * and names of business rules/system defined named commands, etc...
 * @requires module:basic-constants
 * @requires module:phonics-constants
 * @requires module:generic-constants
 * @requires module:numeric-constants
 * @requires module:units-constants
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as b from './basic.constants';
import * as p from './phonics.constants';
import * as g from './generic.constants';
import * as n from './numeric.constants';
import * as u from './units.constants';
import * as w from './word.constants';

// Miscelaneious
export const cENV = b.cEN + b.cV; // ENV
export const cLOG = b.cLO + b.cG; // LOG
export const cENVIRONMENT = p.cENV + b.cIR + b.cON + p.cMENT; // ENVIRONMENT
export const cITERATION = b.cIT + b.cER + b.cAT + b.cIO + b.cN; // ITERATION
export const cSTYLE = b.cST + b.cYL + b.cE; // STYLE

// Compound System Words
export const cunderline = w.cunder + w.cline; // underline
export const cUnderline = w.cUnder + w.cline; // Underline
export const cwithText = w.cwith + w.cText; // withText
export const cWithText = w.cWith + w.cText; // WithText
export const cDebugTest = w.cDebug + w.cTest; // DebugTest
export const cDebugPage = w.cDebug + w.cPage; // DebugPage
export const cDebugTestExhaustive = cDebugTest + w.cExhaustive; // DebugTestExhaustive
export const cDebugTestData = cDebugTest + w.cData; // DebugTestData
export const cDebugPageScripts = cDebugPage + w.cScripts; // DebugPageScripts
export const cDebugPageData = cDebugPage + w.cData; // DebugPageData
export const cDebugKeywords = w.cDebug + w.cKeywords; // DebugKeywords
export const cLogBrowserActions = w.cLog + w.cBrowser + w.cActions; // LogBrowserActions
export const cJournalBrowserActions = w.cJournal + w.cBrowser + w.cActions; // JournalBrowserActions
export const cDebugBrowserActions = w.cDebug + w.cBrowser + w.cActions; // DebugBrowserActions
export const cDebugSelectors = w.cDebug + w.cSelectors; // DebugSelectors
export const cDebugFunctions = w.cDebug + w.cFunctions; // DebugFunctions
export const cDebugFiles = w.cDebug + w.cFiles; // DebugFiles
export const cTestAutomation = w.cTest + w.cAutomation; // TestAutomation
export const cNumberOfRows = w.cNumber + w.cOf + w.cRows; // NumberOfRows
export const cMasterRowNumber = w.cMaster + w.cRow + w.cNumber; // MasterRowNumber
export const cEnvironmentRow = w.cEnvironment + w.cRow; // EnvironmentRow
export const cEnvironmentRowNumber = cEnvironmentRow + w.cNumber; // EnvironmentRowNumber
export const cPageScript = w.cPage + w.cScript; // PageScript
export const cIntermediatePath = w.cIntermediate + w.cPath; // IntermediatePath
export const cTimeStamp = w.cTime + w.cStamp; // TimeStamp
export const cPageScriptTimeStamp = cPageScript + cTimeStamp; // PageScriptTimeStamp
export const cDateTimeStamp = w.cDate + cTimeStamp; // DateTimeStamp
export const cScriptDateStamp = w.cScript + w.cDate + w.cStamp; // ScriptDateStamp
export const cScriptTimeStamp = w.cScript + cTimeStamp; // ScriptTimeStamp
export const cKeywordTimeStamp = w.cKeyword + cTimeStamp; // KeywordTimeStamp
export const cTestTimeStamp = w.cTest + cTimeStamp; // TestTimeStamp
export const cScriptDateTimeStamp = w.cScript + cDateTimeStamp; // ScriptDateTimeStamp
export const cBeginScriptTimeStamp = w.cBegin + cScriptTimeStamp; // BeginScriptTimeStamp
export const cEndScriptTimeStamp = w.cEnd + cScriptTimeStamp; // EndScriptTimeStamp
export const cBeginTestTimeStamp = w.cBegin + cTestTimeStamp; // BeginTestTimeStamp
export const cEndTestTimeStamp = w.cEnd + cTestTimeStamp; // EndTestTimeStamp
export const cBeginPageScriptTimeStamp = w.cBegin + cPageScriptTimeStamp; // BeginPageScriptTimeStamp
export const cEndPageScriptTimeStamp = w.cEnd + cPageScriptTimeStamp; // EndPageScriptTimeStamp
export const cBeginKeywordTimeStamp = w.cBegin + cKeywordTimeStamp; // BeginKeywordTimeStamp
export const cEndKeywordTimeStamp = w.cEnd + cKeywordTimeStamp; // EndKeywordTimeStamp
export const cRuntime = w.cRun + w.ctime; // Runtime
export const cRunTime = w.cRun + w.cTime; // RunTime
export const cBrowserName = w.cBrowser + w.cName; // BrowserName
export const cHostName = w.cHost + w.cName; // HostName
export const cTestRunID = w.cTest + w.cRun + w.cID; // TestRunID
export const cfilesLists = w.cfiles + w.cLists; // filesLists
export const cFileTypes = w.cFile + w.cTypes; // FileTypes
export const cfilename = w.cfile + w.cname; // filename
export const cFilename = w.cFile + w.cname; // Filename
export const cFileName = w.cFile + w.cName; // FileName
export const cfilenames = cfilename + b.cs; // filenames
export const cFilenames = cFilename + b.cs; // Filenames
export const cFileNames = cFileName + b.cs; // FileNames
export const cPreValidateFileName = p.cPre + w.cValidate + cFileName; // PreValidateFileName
export const cAsynchSingular = w.cAsynch + w.cSingular; // AsynchSingular
export const cSynchSingular = w.cSynch + w.cSingular; // SynchSingular
export const cParallelMultiUnified = w.cParallel + w.cMulti + w.cUnified; // ParallelMultiUnified
export const cAllowableCharacters = w.cAllowable + w.cCharacters; // AllowableCharacters
export const cSpecialCharacters = w.cSpecial + w.cCharacters; // SpecialCharacters
export const cTimeoutOverride = w.cTimeout + w.cOverride; // TimeoutOverride
export const cDwellTime = w.cDwell + w.cTime; // DwellTime
export const cLogFilePathAndName = w.cLog + w.cFile + w.cPath + w.cAnd + w.cName; // LogFilePathAndName
export const cDataLogFilePathAndName = w.cData + w.cLog + w.cFile + w.cPath + w.cAnd + w.cName; // DataLogFilePathAndName
export const cExecutionJournalFilePathAndName = w.cExecution + w.cJournal + w.cFile + w.cPath + w.cAnd + w.cName; // ExecutionJournalFilePathAndName
export const cResultsLogFilePathAndName = w.cResults + w.cLog + w.cFile + w.cPath + w.cAnd + w.cName; // ResultsLogFilePathAndName
export const cTestDataPath = w.cTest + w.cData + w.cPath; // TestDataPath
export const cLogFileEnabled = w.cLog + w.cFile + w.cEnabled; // LogFileEnabled
export const cIncludeDateTimeStampInLogFiles = w.cInclude + w.cDate + w.cTime + w.cStamp + b.cIn + g.cLog + w.cFiles; // IncludeDateTimeStampInLogFiles
export const cFileCounter = w.cFile + w.cCounter; // FileCounter
export const cDeltaT = g.cDelta + b.cT; // DeltaT
export const cvisibilityCheck = w.cvisibility + w.cCheck; // visibilityCheck
export const cVisibilityCheck = w.cVisibility + w.cCheck; // VisibilityCheck
export const cOperatingSystem = w.cOperating + w.cSystem; // OperatingSystem
export const cinnerText = w.cinner + w.cText; // innerText
export const cInnerText = w.cInner + w.cText; // InnerText
export const cinnerHTML = w.cinner + w.cHTML; // innerHTML
export const cInnerHTML = w.cInner + w.cHTML; // InnerHTML
export const cTestData = w.cTest + w.cData; // TestData
export const cProcessingTimeout = w.cProcessing + w.cTimeout; // ProcessingTimeout
export const cIngestionCompleteDwellTime = w.cIngestion + w.cComplete + cDwellTime; // IngestionCompleteDwellTime
export const cRowNumber = w.cRow + w.cNumber; // RowNumber
export const cUsername = w.cUser + w.cname; // Username
export const cPassword = w.cPass + w.cword; // Password
export const cProjectName = w.cProject + w.cName; // ProjectName
export const cProjectDescription = w.cProject + w.cDescription; // ProjectDescription
export const cTestDataFileName = w.cTest + w.cData + cFileName; // TestDataFileName
export const cShareEmail = w.cShare + w.cEmail; // ShareEmail
export const cAccessLevel = w.cAccess + w.cLevel; // AccessLevel
export const cFileNumber = w.cFile + w.cNumber; // FileNumber
export const cConfigurationName = w.cConfiguration + w.cName; // ConfigurationName
export const cConfigurationElement = w.cConfiguration + w.cElement; // ConfigurationElement
export const cConfigurationElements = cConfigurationElement + b.cs; // ConfigurationElements
export const cVersionControl = w.cVersion + w.cControl; // VersionControl
export const cScriptRunTime = w.cScript + cRunTime; // ScriptRunTime
export const cTestRunTime = w.cTest + cRunTime; // TestRunTime
export const ctypeText = w.ctype + w.cText; // typeText
export const cTypeText = w.cType + w.cText; // TypeText
export const cAbreviatedSelectors = w.cAbreviated + w.cSelectors; // AbreviatedSelectors
export const cAbreviatedSelectorsInLogs = cAbreviatedSelectors + b.cIn + w.cLogs; // AbreviatedSelectorsInLogs
export const cselectorTimeout = w.cselector + w.cTimeout; // selectorTimeout
export const cchildElementCount = w.cchild + w.cElement + w.cCount; // childElementCount
export const cUnderscore = w.cUnder + w.cscore; // Underscore
export const cTestBureau = w.cTest + w.cBureau; // TestBureau
export const caddWithText = w.c_add + w.cWith + w.cText; // addWithText
export const caddTimeout = w.c_add + w.cTimeout; // addTimeout
export const caddParent = w.c_add + w.cParent; // addParent
export const caddFindValue = w.c_add + w.cFind + w.cValue; // addFindValue
export const caddNth = w.c_add + w.cNth; // addNth
export const caddSibling = w.c_add + w.cSibling; // addSibling
export const caddFilter = w.c_add + w.cFilter; // addFilter
export const cgenerateRandom = w.cgenerate + w.cRandom; // generateRandom
export const crandomlyGenerate = w.crandomly + w.cGenerate; // randomlyGenerate
export const cMixedCase = w.cMixed + w.cCase; // MixedCase
export const cUpperCase = w.cUpper + w.cCase; // UpperCase
export const cLowerCase = w.cLower + w.cCase; // LowerCase
export const cByLength = w.cBy + w.cLength; // ByLength
export const cSpecialCharacter = w.cSpecial + w.cCharacter; // SpecialCharacter
export const cWithSpecialCharacters = w.cWith + cSpecialCharacters; // WithSpecialCharacters
export const cTextByLength = w.cText + cByLength; // TextByLength
export const cTextWithSpecialCharacters = w.cText + cWithSpecialCharacters; // TextWithSpecialCharacters
export const cTextWithSpecialCharactersByLength = cTextWithSpecialCharacters + cByLength; // TextWithSpecialCharactersByLength
export const cAlphaNumeric = w.cAlpha + w.cNumeric; // AlphaNumeric
export const cAlphaNumericCode = cAlphaNumeric + w.cCode; // AlphaNumericCode
export const cAlphaNumericCodeByLength = cAlphaNumericCode + cByLength; // AlphaNumericCodeByLength
export const cNumericCode = w.cNumeric + w.cCode; // NumericCode
export const cNumericCodeByLength = cNumericCode + cByLength; // NumericCodeByLength
export const cAlphaNumericCodeWithSpecialCharacters = cAlphaNumericCode + cWithSpecialCharacters; // AlphaNumericCodeWithSpecialCharacters
export const cAlphaNumericCodeWithSpecialCharactersByLength = cAlphaNumericCodeWithSpecialCharacters + cByLength; // AlphaNumericCodeWithSpecialCharactersByLength
export const cSpecialCharacterCodeByLength = cSpecialCharacter + w.cCode + cByLength; // SpecialCharacterCodeByLength
export const cvalidEmail = w.cvalid + w.cEmail; // validEmail
export const cValidEmail = w.cValid + w.cEmail; // ValidEmail
export const cInvalidEmail = b.cIn + cvalidEmail; // InvalidEmail
export const cgenerateValidEmail = w.cgenerate + cValidEmail; // generateValidEmail
export const cgenerateInvalidEmail = w.cgenerate + cInvalidEmail; // generateInvalidEmail
export const cRandomValidEmail = w.cRandom + cValidEmail; // RandomValidEmail
export const cRandomInvalidEmail = w.cRandom + cInvalidEmail; // RandomInvalidEmail
export const cLetterOr = w.cLetter + b.cOr; // LetterOr
export const cLetterOrSpecialCharacter = cLetterOr + cSpecialCharacter; // LetterOrSpecialCharacter
export const cLetterOrNumberOrSpecialCharacter = cLetterOr + w.cNumber + w.cOr + cSpecialCharacter; // LetterOrNumberOrSpecialCharacter
export const cAlphaNumericCharacter = cAlphaNumeric + w.cCharacter; // AlphaNumericCharacter
export const cSuffixAndDomain = w.cSuffix + w.cAnd + w.cDomain; // SuffixAndDomain
export const cWithSpecificSuffixAndDomainName = w.cWith + w.cSpecific + w.cSuffix + w.cAnd + w.cDomain + w.cName; // WithSpecificSuffixAndDomainName
export const cNumericCharacter = w.cNumeric + w.cCharacter; // NumericCharacter
export const cNumberInRange = w.cNumber + b.cIn + w.cRange; // NumberInRange
export const cBooleanValue = w.cBoolean + w.cValue; // BooleanValue
export const cAlphabeticCharacter = w.cAlphabetic + w.cCharacter; // AlphabeticCharacter
export const cCarriageReturn = w.cCarriage + w.cReturn; // CarriageReturn
export const cDashboardLogs = w.cDashboard + w.cLogs; // DashboardLogs
export const cVideoLogs = w.cVideo + w.cLogs; // VideoLogs
export const cForwardSlash = w.cForward + w.cSlash; // ForwardSlash
export const cBackSlash = w.cBack + w.cSlash; // BackSlash
export const cPage_Keywords = w.cPage + b.cUnderscore + w.cKeywords; // Page_Keywords
export const cnavigateTo = w.cnavigate + b.cTo; // navigateTo
export const cNavigateTo = w.cNavigate + b.cTo; // NavigateTo
export const cBrowserRefresh = w.cBrowser + w.cRefresh; // BrowserRefresh
export const cSpaceIsColonSpace = b.cSpace + b.cis + b.cColon + b.cSpace; // is:
export const cdeployApplication = w.cdeploy + w.cApplication; // deployApplication
export const cdeployMetaData = w.cdeploy + w.cMetaData // deployMetaData
export const creleaseApplication = w.crelease + w.cApplication; // releaseApplication
export const cbackground = w.cback + w.cground; // background
export const cBackground = w.cBack + w.cground; // Background
export const cConfiguration_Colors = w.cConfiguration + b.cUnderscore + w.cColors; // Configuration_Colors
export const cColorData = w.cColor + w.cData; // ColorData
export const cColorName = w.cColor + w.cName; // ColorName
export const cbusinessRule = w.cbusiness + w.cRule; // businessRule
export const cBusinessRule = w.cBusiness + w.cRule; // BusinessRule
export const cbusinessRules = w.cbusiness + w.cRules; // businessRules
export const cBusinessRules = w.cBusiness + w.cRules; // BusinessRules
export const crulesLibrary = w.crules + w.cLibrary; // rulesLibrary
export const cframework = w.cframe + w.cwork; // framework
export const cFramework = w.cFrame + w.cwork; // Framework
export const cCommandsAliases = w.cCommands + w.cAliases; // CommandsAliases
export const cCommandWorkflows = w.cCommand + w.cWorkflows; // CommandWorkflows
export const cStandardDeviation = w.cStandard + w.cDeviation; // StandardDeviation
export const cHexValue = p.cHex + w.cValue; // HexValue
export const cexportconst = w.cexport + b.cSpace + g.cconst; // export-const // With a space not a dash, but the validation code is looking for that exact string.
export const cExportConst = w.cExport + b.cSpace + g.cConst; // smuggle something
export const cDataStorage = w.cData + w.cStorage; // DataStorage
export const cSource1 = w.cSource + n.c1; // Source1
export const cSource2 = w.cSource + n.c2; // Source2
export const cbigInteger = w.cbig + w.cInteger; // bigInteger
export const cnumberOfCharactersToGenerate = w.cnumber + b.cOf + w.cCharacters + b.cTo + w.cGenerate; // numberOfCharactersToGenerate
export const cgenerateSpecialCharacters = w.cgenerate + cSpecialCharacters; // generateSpecialCharacters
export const callowableSpecialCharacters = w.callowable + cSpecialCharacters; // allowableSpecialCharacters
export const cspecifiedSuffixAndDomain = w.cspecified + cSuffixAndDomain; // specifiedSuffixAndDomain
export const cfailureMode = w.cfailure + w.cMode; // failureMode
export const cWithoutThe = w.cWithout + b.cSpace + w.cthe; // Without the
export const cwasCompleted = w.cwas + b.cSpace + w.ccompleted; // was completed
export const cGenerateA = w.cGenerate + b.cSpace + b.ca; // Generate a
export const cprogramLoop = w.cprogram + b.cSpace + w.cloop; // program loop
export const candPrefix = w.cand + b.cSpace + w.cprefix; // and prefix
export const candSuffix = w.cand + b.cSpace + w.csuffix; // and suffix
export const cdomainSpaceName = w.cdomain + b.cSpace + w.cname // domain name
export const candSpaceDomainSpaceName = w.cand + b.cSpace + cdomainSpaceName; // and domain name
export const ccurrentMasterStringArrayElement = w.ccurrent + w.cMaster + w.cString + w.cArray + w.cElement; // currentMasterStringArrayElement
export const cLehmerCodeArray = w.cLehmer + w.cCode + w.cArray; // LehmerCodeArray
export const creturnData = w.creturn + w.cData; // returnData

// Logging Constants
export const cBEGIN_Function = w.cBEGIN + b.cSpace + b.cPercent + b.cPercent + b.cSpace + w.cFunction; // BEGIN %% Function
export const cEND_Function = w.cEND + b.cSpace + b.cPercent + b.cPercent + b.cSpace + w.cFunction; // END %% Function
export const cinputData = w.cinput + w.cData; // inputData
export const cInputData = w.cInput + w.cData; // InputData
export const cinputMetaData = w.cinput + w.cMetaData; // inputMetaData
export const cInputMetaData = w.cInput + w.cMetaData; // InputMetaData
export const cinputDataIs = cinputData + cSpaceIsColonSpace; // input Data is:
export const cinputMetaDataIs = w.cinput + w.cMetaData + cSpaceIsColonSpace; // input MetaData is:
export const creturnDataIs = creturnData + cSpaceIsColonSpace; // return Data is:
export const cLogBasicSystemEvents = w.cLog + w.cBasic + w.cSystem + w.cEvents; // LogBasicSystemEvents
export const cLogWarnings = w.cLog + w.cWarnings; // LogWarnings
// Logging Styles Constants
export const cModuleFontStyle = w.cModule + w.cFont + w.cStyle; // ModuleFontStyle
export const cFunctionFontStyle = w.cFunction + w.cFont + w.cStyle; // FunctionFontStyle
export const cMessageFontStyle = w.cMessage + w.cFont + w.cStyle; // MessageFontStyle
export const cDataFontStyle = w.cData + w.cFont + w.cStyle; // DataFontStyle
export const cModuleFontColor = w.cModule + w.cFont + w.cColor; // ModuleFontColor
export const cFunctionFontColor = w.cFunction + w.cFont + w.cColor; // FunctionFontColor
export const cMessageFontColor = w.cMessage + w.cFont + w.cColor; // MessageFontColor
export const cDataFontColor = w.cData + w.cFont + w.cColor; // DataFontColor
export const cModuleFontBackgroundColor = w.cModule + w.cFont + cBackground + w.cColor; // ModuleFontBackgroundColor
export const cFunctionFontBackgroundColor = w.cFunction + w.cFont + cBackground + w.cColor; // FunctionFontBackgroundColor
export const cMessageFontBackgroundColor = w.cMessage + w.cFont + cBackground + w.cColor; // MessageFontBackgroundColor
export const cDataFontBackgroundColor = w.cData + w.cFont + cBackground + w.cColor; // DataFontBackgroundColor

// System Messages
// WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
export const cApplicationWarningMessage1a = w.cWARNING + b.cColon + b.cSpace + b.cNo + b.cSpace + g.cDotEnv + b.cSpace + w.cFile + b.cSpace + b.cfound + b.cExclamation + b.cSpace; // WARNING: No .End File found!
export const cApplicationWarningMessage1b = w.cGoing + b.cSpace + b.cto + b.cSpace + w.cdefault + b.cSpace + b.cto + b.cSpace + w.cthe + b.cSpace + w.cDEVELOPMENT + b.cSpace + cENVIRONMENT + b.cExclamation; // Going to default to the DEVELOPMENT ENVIRONMENT!
export const cApplicationMessage2 = w.cBEGIN + b.cSpace + w.cmain + b.cSpace + cprogramLoop; // BEGIN main program loop
export const cApplicationMessage3 = w.cBEGIN + b.cSpace + w.ccommand + b.cSpace + w.cparser; // BEGIN command parser
export const cApplicationMessage4 = w.cEND + b.cSpace + w.ccommand + b.cSpace + w.cparser; // END command parser
export const cApplicationMessage5 = w.cEND + b.cSpace + w.cmain + b.cSpace + cprogramLoop; // END main program loop
export const cApplicationExitMessage1 = w.cExiting + b.cComa + b.cSpace + w.cGood + b.cSpace + w.cbye + b.cComa + b.cSpace + w.cHave + b.cSpace + b.ca + b.cSpace + w.cnice + b.cSpace; // Exiting, Good bye, Have a nice
export const cApplicationExitMessage2 = w.cday + b.cSpace + b.cAndPersand + b.cSpace + w.cstay + b.cSpace + w.csafe + b.cExclamation; // day & stay safe!
export const cBuildMessage1 = w.cDeployment + b.cSpace + cwasCompleted + b.cColon + b.cSpace; // Deployment was completed:
export const cBuildMessage2 = w.cRelease + b.cSpace + cwasCompleted + b.cColon + b.cSpace; // Release was completed:
export const cCharacterGenerationMessage1 = w.ctype + b.cTo + w.cGenerate + cSpaceIsColonSpace; // typeToGenerate is:
export const cCharacterGenerationMessage2 = cGenerateA + b.cSpace + w.cnumber + b.cDot; // Generate a number.
export const cCharacterGenerationMessage3 = cGenerateA + b.cSpace + w.crandom + b.cSpace + w.cupper + b.cSpace + w.ccase + b.cSpace + b.cor + b.cSpace + w.clower + b.cSpace + w.ccase + b.cSpace + w.cletter + b.cDot; // Generate a random upper case or lower case letter.
export const cCharacterGenerationMessage4 = cGenerateA + b.cSpace + w.cspecial + b.cSpace + w.ccharacter + b.cDot; // Generate a special character.
export const cCharacterGenerationMessage5 = w.cDEFAULT + b.cColon + b.cSpace + cGenerateA + b.cSpace + w.crandom + b.cSpace + w.cupper + b.cSpace + w.ccase + b.cSpace + b.cor + b.cSpace + w.clower + b.cSpace + w.ccase + b.cSpace + w.cletter + b.cDot; // DEFAULT: Generate a random upper case or lower case letter.
export const cMathOperationsMessage1 = cbigInteger + cSpaceIsColonSpace; // bigInteger is:
export const cnumberOfCharactersToGenerateIs = cnumberOfCharactersToGenerate + cSpaceIsColonSpace; // numberOfCharactersToGenerate is:
export const cgenerateSpecialCharactersIs = cgenerateSpecialCharacters + cSpaceIsColonSpace; // generateSpecialCharacters is:
export const callowableSpecialCharactersIs = callowableSpecialCharacters + cSpaceIsColonSpace; // allowableSpecialCharacters is:
export const cspecifiedSuffixAndDomainIs = cspecifiedSuffixAndDomain + cSpaceIsColonSpace; // specifiedSuffixAndDomain is:
export const cfailureModeIs = cfailureMode + cSpaceIsColonSpace; // failureMode is:
export const cprefixIs = w.cprefix + cSpaceIsColonSpace; // prefix is:
export const csuffixIs = w.csuffix + cSpaceIsColonSpace; // suffix is:
export const cWithoutTheAtSymbol = cWithoutThe + b.cSpace + b.cAt + b.cSpace + w.csymbol + b.cDot; // Without the @ symbol.
export const cWithoutThePrefix = cWithoutThe + b.cSpace + w.cprefix + b.cDot; // Without the prefix.
export const cWithoutTheSuffix = cWithoutThe + b.cSpace + w.csuffix + b.cDot; // Without the suffix.
export const cWithoutTheAtSymbolAndPrefix = cWithoutThe + b.cSpace + b.cAt + b.cSpace + candPrefix + b.cDot; // Without the @ and prefix.
export const cDEFAULTWithoutTheAtSymbolAndPrefix = w.cDEFAULT + b.cColon + b.cSpace + cWithoutTheAtSymbolAndPrefix // DEFAULT: Without the @ and prefix.
export const cdomainNameIs = w.cdomain + w.cName + cSpaceIsColonSpace; // domainName is:
export const cnumberOfPrefixCharactersIs = w.cnumber + b.cOf + w.cPrefix + w.cCharacters + cSpaceIsColonSpace; // numberOfPrefixCharacters is:
export const cnumberOfSuffixCharactersIs = w.cnumber + b.cOf + w.cSuffix + w.cCharacters + cSpaceIsColonSpace; // numberOfSuffixCharacters is:
export const cWithoutTheDotSymbol = cWithoutThe + b.cSpace + b.cDot + b.cSpace + w.csymbol + b.cDot; // Without the . symbol.
export const cWithoutTheAtAndDotSymbols = cWithoutThe + b.cSpace + b.cAt + b.cSpace + w.cand + b.cSpace + b.cDot + b.cSpace + w.csymbols + b.cDot; // Without the @ and . symbols.
export const cWithoutTheDomainName = cWithoutThe + b.cSpace + cdomainSpaceName + b.cDot; // Without the domain name.
export const cWithoutTheAtSymbolAndDomainName = cWithoutThe + b.cSpace + b.cAt + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the @ and domain name.
export const cWithoutTheDotAndDomainName = cWithoutThe + b.cSpace + b.cDot + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the . and domain name.
export const cWithoutTheAtSymbolDotAndDomainName = cWithoutThe + b.cSpace + b.cAt + b.cComa + b.cSpace + b.cDot + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the @, . and domain name.
export const cWithoutTheDotAndPrefix = cWithoutThe + b.cSpace + b.cDot + b.cSpace + candPrefix + b.cDot; // Without the . and prefix.
export const cWithoutTheAtSymbolAndSuffix = cWithoutThe + b.cSpace + b.cAt + b.cSpace + candSuffix + b.cDot; // Without the @ and suffix.
export const cWithoutTheDotAndSuffix = cWithoutThe + b.cSpace + b.cDot + b.cSpace + candSuffix + b.cDot; // Without the . and suffix.
export const cWithoutTheAtSymbolDotAndPrefix = cWithoutThe + b.cSpace + b.cAt + b.cComa + b.cSpace + b.cDot + b.cSpace + candPrefix + b.cDot; // Without the @, . and prefix.
export const cWithoutTheAtSymbolDotAndSuffix = cWithoutThe + b.cSpace + b.cAt + b.cComa + b.cSpace + b.cDot + b.cSpace + candSuffix + b.cDot; // Without the @, . and suffix.
export const cWithoutTheAtSymbolDotPrefixAndSuffix = cWithoutThe + b.cSpace + b.cAt + b.cComa + b.cSpace + b.cDot + b.cComa + b.cSpace + w.cprefix + b.cSpace + candSuffix + b.cDot; // Without the @, ., prefix and suffix.
export const cWithoutThePrefixAndDomainName = cWithoutThe + b.cSpace + w.cprefix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the prefix and domain name.
export const cWithoutTheSuffixAndDomainName = cWithoutThe + b.cSpace + w.csuffix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the suffix and domain name.
export const cWithoutThePrefixAndSuffix = cWithoutThe + b.cSpace + w.cprefix + b.cSpace + candSuffix + b.cDot; // Without the prefix and suffix.
export const cWithoutThePrefixSuffixAndDomainName = cWithoutThe + b.cSpace + w.cprefix + b.cComa + b.cSpace + w.csuffix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the prefix, suffix and domain name.
export const cWithoutTheAtSymbolPrefixAndDomainName = cWithoutThe + b.cSpace + b.cAt + b.cComa + b.cSpace + w.cprefix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the @, prefix and domain name.
export const cWithoutTheDotPrefixAndDomainName = cWithoutThe + b.cSpace + b.cDot + b.cComa + b.cSpace + w.cprefix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the ., prefix and domain name.
export const cWithoutTheAtSymbolSuffixAndDomainName = cWithoutThe + b.cSpace + b.cAt + b.cComa + b.cSpace + w.csuffix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the @, suffix and domain name.
export const cWithoutTheDotSuffixAndDomainName = cWithoutThe + b.cSpace + b.cDot + b.cComa + b.cSpace + w.csuffix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the ., suffix and domain name.
export const cWithoutTheAtSymbolPrefixSuffixAndDomainName = cWithoutThe + b.cSpace + b.cAt + b.cComa + b.cSpace + w.cprefix + b.cComa + b.cSpace + w.csuffix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the @, prefix, suffix and domain name.
export const cWithoutTheDotPrefixSuffixAndDomainName = cWithoutThe + b.cSpace + b.cDot + b.cComa + b.cSpace + w.cprefix + b.cComa + b.cSpace + w.csuffix + b.cSpace + candSpaceDomainSpaceName + b.cDot; // Without the ., prefix, suffix and domain name.
export const cWithoutThePrefixSuffixAndAtSymbol = cWithoutThe + b.cSpace + w.cprefix + b.cComa + b.cSpace + w.csuffix + b.cSpace + w.cname + b.cAt + b.cDot; // Without the prefix, suffix and @.
export const cWithoutThePrefixSuffixAndDot = cWithoutThe + b.cSpace + w.cprefix + b.cComa + b.cSpace + w.csuffix + b.cSpace + w.cand + b.cSpace + b.cDot + b.cDot; // Without the prefix, suffix and ..
export const cIndexOfTheSpace = w.cIndex + b.cSpace + b.cof + b.cSpace + w.cthe + b.cSpace; // Index of the
export const cisResolvingAs = b.cis + b.cSpace + w.cresolving + b.cSpace + b.cas + b.cColon + b.cSpace; // is resolving as:
export const cparsedStringSpaceTerm = w.cparsed + w.cString + b.cSpace + w.cterm; // parsedString term
export const cstring1Is = w.cstring + n.c1 + cSpaceIsColonSpace; // string1 is:
export const cstring2Is = w.cstring + n.c2 + cSpaceIsColonSpace; // string2 is:
export const cvariation0ValueIs = w.cvariation + n.c0 + b.cSpace + w.cvalue + cSpaceIsColonSpace; // variation0 value is:
export const cvariation1ValueIs = w.cvariation + n.c1 + b.cSpace + w.cvalue + cSpaceIsColonSpace; // variation1 value is:
export const ciValueIs = b.ci + b.cSpace + w.cvalue + cSpaceIsColonSpace; // i value is:
export const cjValueIs = b.cj + b.cSpace + w.cvalue + cSpaceIsColonSpace; // j value is:
export const cdeletionCostIs = w.cdeletion + w.cCost + cSpaceIsColonSpace; // deletionCost is:
export const cinsertionCostIs = w.cinsertion + w.cCost + cSpaceIsColonSpace; // insertionCost is:
export const csubstitutionCostIs = w.csubstitution + w.cCost + cSpaceIsColonSpace; // substitutionCost is:
export const ccamelCaseWordCountIs = w.ccamel + w.cCase + w.cWord + w.cCount + cSpaceIsColonSpace; // camelCaseWordCount is:
export const ccontainsAcronymIs = w.ccontains + w.cAcronym + cSpaceIsColonSpace; // containsAcronym is:
export const cspacesCountIs = w.cspaces + w.cCount + cSpaceIsColonSpace; // spacesCount is:
export const cperiodCountIs = w.cperiod + w.cCount + cSpaceIsColonSpace; // periodCount is:
export const cdashCountIs = w.cdash + w.cCount + cSpaceIsColonSpace; // dashCount is:
export const cunderscoreCountIs = w.cunderscore + w.cCount + cSpaceIsColonSpace; // underscoreCount is:
export const cstringDeltaValueIs = w.cstring + g.cDelta + b.cSpace + w.cvalue + cSpaceIsColonSpace; // stringDelta value is:
export const cFilenamesMatch = w.cFilenames + b.cSpace + w.cmatch; // Filenames match
export const cFilenamesDoNotMatch = w.cFilenames + b.cSpace + b.cdo + b.cSpace + g.cnot + b.cSpace + w.cmatch; // Filenames do not match
export const cArrayElementsMatch = w.cArray + b.cSpace + w.celements + b.cSpace + w.cmatch; // Array elements match
export const cArrayElementsDoNotMatch = w.cArray + b.cSpace + w.celements + b.cSpace + b.cdo + b.cSpace + g.cnot + b.cSpace + w.cmatch; // Array elements do not match
export const clineArray2Is = w.cline + w.cArray + b.cOpenBracket + n.c2 + b.cCloseBracket + cSpaceIsColonSpace; // lineArray[2] is:
export const cSuggestedLineOfCodeIs = w.cSuggested + b.cSpace + w.cline + b.cSpace + b.cof + b.cSpace + w.ccode + cSpaceIsColonSpace; // Suggested line of code is:
export const cErrorUnknownConstantFile = w.cERROR + b.cColon + b.cSpace + w.cUnknown + b.cSpace + w.cconstant + b.cSpace + w.cfile + b.cDot; // ERROR: Unknown constant file.
export const cconstantsTypesKeysIs = w.cconstants + w.cTypes + w.cKeys + cSpaceIsColonSpace; // constantsTypesKeys is:
export const cconstantTypeKeyIs = w.cconstant + w.cType + w.cKey + cSpaceIsColonSpace; // constantTypeKey is:
export const cconstantTypeValuesIs = w.cconstant + w.cType + w.cValues + cSpaceIsColonSpace; // constantTypeValues is:
export const cconstantsKeysIs = w.cconstants + w.cKeys + cSpaceIsColonSpace; // constantsKeys is:
export const cconstantKeyIs = w.cconstant + w.cKey + cSpaceIsColonSpace; // constantKey is:
export const cconstantActualValueIs = w.cconstant + w.cActual + w.cValue + cSpaceIsColonSpace; // constantActualValue is:
export const cconstantNameIs = w.cconstant + w.cName + cSpaceIsColonSpace; // constantName is:
export const cconstantValueIs = w.cconstant + w.cValue + cSpaceIsColonSpace; // constantValue is:
export const cdeltaLengthIs = w.cdelta + w.cLength + cSpaceIsColonSpace; // deltaLength is:
export const crecursiveSubStringIs = w.crecursive + w.cSubString + cSpaceIsColonSpace; // recursiveSubString is:
export const cmaxStringLengthIs = g.cmax + w.cString + w.cLength + cSpaceIsColonSpace; // maxStringLength is:
export const cminStringLengthIs = g.cmin + w.cString + w.cLength + cSpaceIsColonSpace; // minStringLength is:
export const ccurrentMasterStringArrayElementIs = ccurrentMasterStringArrayElement + cSpaceIsColonSpace; // currentMasterStringArrayElement is:
export const cConstantDoesNotExist = w.cConstant + b.cSpace + w.cdoes + b.cSpace + g.cNOT + b.cSpace + w.cexist + b.cColon + b.cSpace; // Constant does NOT exist:
export const cConstantDoesExist = w.cConstant + b.cSpace + w.cdoes + b.cSpace + w.cexist + b.cColon + b.cSpace; // Constant does exist:
export const cBEGIN_ithLoop = w.cBEGIN + b.cSpace + b.ci + b.cDash + b.cth + b.cSpace + w.cloop + b.cColon + b.cSpace; // BEGIN i-th loop:
export const cBEGIN_ithIteration = w.cBEGIN + b.cSpace + b.ci + b.cDash + b.cth + b.cSpace + w.citeration + b.cColon + b.cSpace; // BEGIN i-th iteration:
export const cBEGIN_jthLoop = w.cBEGIN + b.cSpace + b.cj + b.cDash + b.cth + b.cSpace + w.cloop + b.cColon + b.cSpace; // BEGIN j-th loop:
export const cBEGIN_kthIteration = w.cBEGIN + b.cSpace + b.ck + b.cDash + b.cth + b.cSpace + w.citeration + b.cColon + b.cSpace; // BEGIN k-th iteration:
export const cEND_ithLoop = w.cEND + b.cSpace + b.ci + b.cDash + b.cth + b.cSpace + w.cloop + b.cColon + b.cSpace; // END i-th loop:
export const cEND_ithIteration = w.cEND + b.cSpace + b.ci + b.cDash + b.cth + b.cSpace + w.cIteration + b.cColon + b.cSpace; // END i-th iteration:
export const cEND_jthLoop = w.cEND + b.cSpace + b.cj + b.cDash + b.cth + b.cSpace + w.cloop + b.cColon + b.cSpace; // END j-th loop:
export const cEND_kthIteration = w.cEND + b.cSpace + b.ck + b.cDash + b.cth + b.cSpace + w.citeration + b.cColon + b.cSpace; // END k-th iteration:
export const ccurrentCommandIs = w.ccurrent + w.cCommand + cSpaceIsColonSpace; // currentCommand is:
export const caliasListIs = w.calias + w.cList + cSpaceIsColonSpace; // aliasList is:
export const ccurrentAliasIs = w.ccurrent + w.cAlias + cSpaceIsColonSpace; // currentAlias is:
export const cduplicateAliasCountIs = w.cduplicate + w.cAlias + w.cCount + cSpaceIsColonSpace; // duplicateAliasCount is:
export const cduplicateCommandAliasIs = w.cduplicate + b.cSpace + w.cCommand + b.cSpace + w.cAlias + cSpaceIsColonSpace; // duplicate command alias is:
export const ccommandWordAliasesBeforeChangeIs = w.ccommand + w.cWord + w.cAliases + b.cSpace + w.cBEFORE + b.cSpace + w.cCHANGE + cSpaceIsColonSpace; // commandWordAliases BEFORE CHANGE is:
export const ccommandWordAliasesAfterChangeIs = w.ccommand + w.cWord + w.cAliases + w.cArray + b.cSpace + w.cAFTER + b.cSpace + w.cCHANGE + cSpaceIsColonSpace; // commandWordAliasesArray AFTER CHANGE is:
export const cmasterCommandWordAlisesArrayIs = w.cmaster + w.cCommand + w.cWord + w.cAliases + w.cArray + cSpaceIsColonSpace; // masterCommandWordAliasesArray is:
export const cmasterArrayIndexIs = w.cmaster + w.cArray + w.cIndex + cSpaceIsColonSpace; // masterArrayIndex is:
export const cCommandAliasesAre = w.cCommand + b.cSpace + w.cAliases + b.cSpace + w.care + b.cColon + b.cSpace; // Command Aliases are:
export const cexpandedLehmerCodeArrayIs = w.cexpanded + cLehmerCodeArray + cSpaceIsColonSpace; // expandedLehmerCodeArray is:
export const cindexOfExpansionIs = w.cindex + b.cOf + w.cExpansion + cSpaceIsColonSpace; // indexOfExpansion is:
export const carrayToBeExpandedIs = w.carray+ b.cTo + b.cBe + w.cExpanded + cSpaceIsColonSpace; // arrayToBeExpanded is:
export const climitOfExpansionIs = w.climit + b.cOf + w.cExpansion + cSpaceIsColonSpace;  // limitOfExpansion is:
export const cpushingLehmerCodeArray1ToReturnDataValue = w.cpushing + b.cSpace + cLehmerCodeArray + n.c1 + b.cSpace + b.cto + b.cSpace + creturnData + b.cSpace + w.cvalue + b.cColon + b.cSpace; // pushing lehmerCodeArray1 to returnData value:
export const creturnDataAfterPushIs = creturnData + b.cSpace + w.cafter + b.cSpace + w.cpush + cSpaceIsColonSpace; // returnData after push is:
export const creturnDataAfterLevel1Is = creturnData + b.cSpace + w.cafter + b.cSpace + w.clevel + b.cSpace + n.c1 + cSpaceIsColonSpace; // returnData after Level 1 is:
export const carrayToBeExpandedDotLengthIs = w.carray + b.cTo + b.cBe + w.cExpanded + b.cDot + w.clength + cSpaceIsColonSpace; // arrayToBeExpanded.length is:
export const creturnDataDotLengthIs = creturnData + b.cDot + w.cLength + cSpaceIsColonSpace; // returnData.length is:
export const creturnDataBeforePopIs = creturnData + b.cSpace + w.cBEFORE + b.cSpace + w.cPOP + cSpaceIsColonSpace; // returnData BEFORE POP is:
export const creturnDataAfterPopIs = creturnData + b.cSpace + w.cAFTER + b.cSpace + w.cPOP + cSpaceIsColonSpace; // returnData AFTER POP is:
export const cmasterTempReturnDataBeforeRecursiveCallIs = w.cmaster + w.cTemp + w.cReturn + w.cData + b.cSpace + w.cBEFORE + b.cSpace + w.crecursive + b.cSpace + w.ccall + cSpaceIsColonSpace; // masterTempReturnData BEFORE recursive call is:
export const ctempReturnData1Is = w.ctemp + w.cReturn + w.cData + n.c1 + cSpaceIsColonSpace; // tempReturnData1 is:
export const ctempReturnData1DotLengthIs = w.ctemp + w.cReturn + w.cData + n.c1 + w.clength + cSpaceIsColonSpace; // tempReturnData1.length is:
export const cpushingTempReturnData1Kvalue = w.cpushing + b.cSpace + w.ctemp + w.cReturn + w.cData + n.c1 + b.cOpenBracket + b.ck + b.cCloseBracket + b.cSpace + w.cvalue + b.cColon + b.cSpace; // pushing tempReturnData1[k] value:
export const cmasterTempReturnDataAfterRecursiveCallIs = w.cmaster + w.cTemp + w.cReturn + w.cData + b.cSpace + w.cAFTER + b.cSpace + w.crecursive + b.cSpace + w.ccall + cSpaceIsColonSpace; // masterTempReturnData AFTER recursive call is:
export const clookupIndexIs = w.clookup + w.cIndex + cSpaceIsColonSpace; // lookupIndex is:
export const clookupValueIs = w.clookup + w.cValue + cSpaceIsColonSpace; // lookupValue is:
export const cDataCatagoryShouldBe = w.cData + b.cSpace + w.cCatagory + b.cSpace + w.cshould + b.cSpace + b.cbe + b.cColon + b.cSpace; // Data Catagory should be:
export const cDataCatagoryDetailNameShouldBe = w.cData + b.cSpace + w.cCatagory + b.cSpace + w.cDetail + b.cSpace + w.cName + b.cSpace + w.cshould + b.cSpace + b.cbe + b.cColon + b.cSpace; // Data Catagory Detail Name should be:
export const cKeywordNameShouldBe = w.cKeyword + b.cSpace + w.cName + b.cSpace + w.cshould + b.cSpace + b.cbe + b.cColon + b.cSpace; // Keyword Name should be:
export const cpathElementIs = w.cpath + w.cElement + cSpaceIsColonSpace; // pathElement is:
export const ccaseIEqual0 = w.ccase + b.cColon + b.cSpace + b.ci + b.cSpace + b.cEqual + b.cSpace + n.c0; // case: i = 0
export const ccasePathElementEqual = w.ccase + b.cColon + b.cSpace + w.cpath + w.cElement + b.cSpace + b.cEqual + b.cSpace; // case: pathElement =
export const ccaseElse = w.ccase + b.cSpace + w.celse; // case else
export const creturnDataSoFarIs = creturnData + b.cSpace + b.cso + b.cSpace + w.cfar + cSpaceIsColonSpace; // returnData so far is:
export const cpathArrayIs = w.cpath + w.cArray + cSpaceIsColonSpace; // pathArray is:
export const ccurrentPathElementIs = w.ccurrent + b.cSpace + w.cpath + b.cSpace + w.celement + cSpaceIsColonSpace; // current path element is:
export const cAttemptingToLoadXmlData = w.cAttempting + b.cSpace + b.cto + b.cSpace + w.cload + b.cSpace + g.cXML + b.cSpace + w.cdata + b.cExclamation; // Attempting to load XML data!
export const cAttemptingToLoadCsvData = w.cAttempting + b.cSpace + b.cto + b.cSpace + w.cload + b.cSpace + g.cCSV + b.cSpace + w.cdata + b.cExclamation; // Attempting to load CSV data!
export const cAttemptingToLoadJsonData = w.cAttempting + b.cSpace + b.cto + b.cSpace + w.cload + b.cSpace + g.cJSON + b.cSpace + w.cdata + b.cExclamation; // Attempting to load JSON data!
export const cLoadedDataIs = w.cLoaded + b.cSpace + w.cdata + cSpaceIsColonSpace; // Loaded data is:
export const cattributeArrayIs = w.cattribute + w.cArray + cSpaceIsColonSpace; // attributeArray is:
export const cattributeArray0Is = w.cattribute + w.cArray + b.cOpenBracket + n.c0 + b.cCloseBracket + cSpaceIsColonSpace; // attributeArray[0] is:
export const carrayIs = w.carray + cSpaceIsColonSpace; // array is:
export const cvalueIs = w.cvalue + cSpaceIsColonSpace; // value is:
export const cmyFunctionIs = b.cmy + w.cFunction + cSpaceIsColonSpace; // myFunction is:
export const carrayInputObjectIsNotAnArray = w.carray + b.cSpace + w.cinput + b.cSpace + w.cobject + b.cSpace + b.cis + b.cSpace + g.cnot + b.cSpace + b.can + b.cSpace + w.carray + b.cDot; // array input object is not an array.
export const cTheValueWasFoundInTheArray = w.cThe + b.cSpace + w.cvalue + b.cSpace + w.cwas + b.cSpace + w.cfound + b.cSpace + b.cin + b.cSpace + w.cthe + b.cSpace + w.carray + b.cDot; // The value was found in the array.
export const cTheValueWasNotFoundInTheArray = w.cThe + b.cSpace + w.cvalue + b.cSpace + w.cwas + b.cSpace + g.cNOT + b.cSpace + w.cfound + b.cSpace + b.cin + b.cSpace + w.cthe + b.cSpace + w.carray + b.cDot; // The value was NOT found in the array.
export const coriginalStringIs = w.coriginal + w.cString + cSpaceIsColonSpace; // originalString is:
export const cindexIs = w.cindex + b.cSpace + cSpaceIsColonSpace; // index is:
export const creplacementIs = w.creplacement + cSpaceIsColonSpace; // replacement is:
export const cDEPLOY_APPLICATION = w.cDEPLOY + b.cUnderscore + w.cAPPLICATION; // DEPLOY APPLICATION
export const cRELEASE_APPLICATION = w.cRELEASE + b.cUnderscore + w.cAPPLICATION; // RELEASE APPLICATION
export const cDeploymentWasCompleted = w.cDeployment + b.cSpace + w.cwas + b.cSpace + w.ccompleted + b.cColon + b.cSpace; // Deployment was completed:
export const cinputDataIis = cinputData + b.cOpenBracket + b.ci + b.cCloseBracket + cSpaceIsColonSpace; // inputData[i] is:
export const caggregateCommandStringIs = w.caggregate + w.cCommand + w.cString + cSpaceIsColonSpace; // aggregateCommandString is:
export const cmetaDataParametersIs = w.cmetaData + w.cParameters + cSpaceIsColonSpace; // metaDataParameters is:
export const cmetaDataParametersLengthIs = w.cmetaData + w.cParameters + b.cSpace + w.cLength + cSpaceIsColonSpace; // metaDataParameters length is:
export const cmetaDataPathAndFilenameIs = w.cmetaData + w.cPath + w.cAnd + w.cFilename + cSpaceIsColonSpace; // metaDataPathAndFilename is:
export const cpathAndFilenameIs = w.cpath + w.cAnd + w.cFilename + cSpaceIsColonSpace; // pathAndFilename is:
export const ccontentsAre = w.ccontents + b.cSpace + w.care + b.cColon + b.cSpace; // contents are:
export const ccontentsOfDare = w.ccontents + b.cSpace + b.cof + b.cSpace + b.cD + b.cSpace + w.care + b.cColon + b.cSpace; // contents of D are:
export const cBEGIN_ithIterationOfInputDataArray = cBEGIN_ithIteration + b.cof + b.cSpace + w.cthe + b.cSpace + cinputData + b.cSpace + w.carray + b.cDot + b.cSpace + b.ci + cSpaceIsColonSpace; // Begin the i-th iteration of the inputData array. i is:
export const ccurrentRuleIs = w.ccurrent + w.cRule + cSpaceIsColonSpace; // currentRule is:
export const crulesIs = w.crules + cSpaceIsColonSpace; // rules is:
export const cruleInputDataIs = w.crule + cInputData + cSpaceIsColonSpace; // ruleInputData is:
export const cruleInputMetaData = w.crule + w.cInput + w.cMetaData + cSpaceIsColonSpace; // ruleInputMetaData is:
export const cBusinessRuleStartTimeIs = w.cBusiness + b.cSpace + w.cRule + b.cSpace + w.cStart + b.cSpace + w.ctime + cSpaceIsColonSpace; // Business Rule Start time is:
export const cBusinessRuleEndTimeIs = w.cBusiness + b.cSpace + w.cRule + b.cSpace + w.cEnd + b.cSpace + w.ctime + cSpaceIsColonSpace; // Business Rule End time is:
export const cBusinessRuleRunTimeIs = w.cBusiness + w.cRule + b.cSpace + w.crun + b.cDash + w.ctime + cSpaceIsColonSpace; // BusinessRule run-time is:
export const ccommandStringBeforeAttemptedDelimiterSwapIs = w.ccommand + w.cString + b.cSpace + w.cbefore + b.cSpace + w.cattempted + b.cSpace + w.cswap + cSpaceIsColonSpace; // commandString before attempted delimiter swap is:
export const creplaceCharacterWithCharacterRuleIs = w.creplace + w.cCharacter + w.cWith + w.cCharacter + w.cRule + cSpaceIsColonSpace; // replaceCharacterWithCharacterRule is:
export const cRuleOutputIs = w.cRule + b.cSpace + w.coutput + cSpaceIsColonSpace; // Rule output is:
export const ccamelCaseCommandNameArrayIs = w.ccamel + w.cCase + w.cCommand + w.cName + w.cArray + cSpaceIsColonSpace; // camelCaseCommandNameArray is:
export const ccurrentCommandWordIs = w.ccurrent + w.cCommand + w.cWord + cSpaceIsColonSpace; // current commandWord is:
export const cPARSER_ERROR = w.cPARSER + b.cUnderscore + w.cERROR + b.cColon + b.cSpace; // PARSER ERROR:
export const ccommandAliasDataStructureIs = w.ccommand + w.cAlias + w.cData + w.cStructure + cSpaceIsColonSpace; // commandAliasDataStructure is:
export const cuserDefinedConstantIs = w.cuser + w.cDefined + w.cConstant + cSpaceIsColonSpace; // userDefinedConstant is:
export const cwordCountIs = w.cword + w.cCount + cSpaceIsColonSpace; // wordCount is:
export const cwordsArrayIs = w.cwords + w.cArray + cSpaceIsColonSpace; // wordsArray is:
export const cOptimizedConstantDefinitionForWord = w.cOptimized + b.cSpace + w.cconstant + b.cSpace + w.cdefinition + b.cSpace + w.cfor + b.cSpace + w.cword + b.cColon + b.cSpace; // Optimized constant definition for word:
export const cuserDefinedConstantListIs = w.cuser + w.cDefined + w.cConstants + w.cList + cSpaceIsColonSpace; // userDefinedConstantList is:
export const cuserDefinedConstantListContainsComas = w.cuser + w.cDefined + w.cConstants + w.cList + b.cSpace + w.ccontains + b.cSpace + w.ccomas; // userDefinedConstantList contains comas
export const cuserDefinedConstantsListArrayIs = w.cuser + w.cDefined + w.cConstants + w.cList + w.cArray + cSpaceIsColonSpace; // userDefinedConstantsListArray is:
export const cuserDefinedConstantsListDoesNotContainComas = w.cuser + w.cDefined + w.cConstant + w.cList + b.cSpace + w.cDOES + b.cSpace + g.cNOT + b.cSpace + w.ccontain + b.cSpace + w.ccomas; // userDefinedConstantList DOES NOT contain comas
export const ccommonPatternsArrayIs = w.ccommon + w.cPatterns + w.cArray + cSpaceIsColonSpace; // commonPatternsArray is:
export const cbusinessRuleCounterIs = w.cbusiness + w.cRule + w.cCounter + cSpaceIsColonSpace; // businessRuleCounter is:
export const cbusinessRulePerformanceSumIs = w.cbusiness + w.cRule + w.cPerformance + w.cSum + cSpaceIsColonSpace; // businessRulePerformanceSum is:
export const cDoneBusinessRulePerformanceSumIs = w.cDONE + b.cExclamation + b.cSpace + cbusinessRulePerformanceSumIs; // DONE! businessRulePerformanceSum is:
export const caverageIs = w.caverage + cSpaceIsColonSpace; // average is:
export const cbusinessRulePerformanceStdSumIs = w.cbusiness + w.cRule + w.cPerformance + p.cStd + w.cSum + cSpaceIsColonSpace; // businessRulePerformanceStdSum is:
export const cDoneBusinessRulePerformanceStdSumIs = w.cDONE + b.cExclamation + b.cSpace + cbusinessRulePerformanceStdSumIs; // DONE! businessRulePerformanceStdSum is:
export const cstandardDevIs = w.cstandard + p.cDev + cSpaceIsColonSpace; // standardDev is:
export const ccommandCounterIs = w.ccommand + w.cCounter + cSpaceIsColonSpace; // commandCounter is:
export const ccommandPerformanceSumIs = w.ccommand + w.cPerformance + w.cSum + cSpaceIsColonSpace; // commandPerformanceSum is:
export const cDoneCommandPerformanceSumIs = w.cDONE + b.cExclamation + b.cSpace + ccommandPerformanceSumIs; // DONE! commandPerformanceSum is:
export const ccommandPerformanceStdSumIs = w.ccommand + w.cPerformance + p.cStd + w.cSum + cSpaceIsColonSpace; // commandPerformanceStdSum is:
export const cDoneCommandPerformanceStdSumIs = w.cDONE + b.cExclamation + b.cSpace + ccommandPerformanceStdSumIs; // DONE! commandPerformanceStdSum is:
export const ccolorKeysIs = w.ccolor + w.cKeys + cSpaceIsColonSpace; // colorKeys is:
export const ccurrentColorNameIs = w.ccurrent + w.cColor + w.cName + cSpaceIsColonSpace; // currentColorName is:
export const ccurrentColorObjectIs = w.ccurrent + w.cColor + w.cObject + cSpaceIsColonSpace; // currentColorObject is:
export const ccurrentColorHexValueIs = w.ccurrent + w.cColor + p.cHex + w.cValue + cSpaceIsColonSpace; // currentColorHexValue is:
export const cruleOutputIs = w.crule + w.cOutput + cSpaceIsColonSpace; // ruleOutput is:
export const cBeginPhase1ConstantsValidation = w.cBEGIN + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cConstants + b.cSpace + w.cValidation; // BEGIN Phase 1 Constants Validation
export const cEndPhase1ConstantsValidation = w.cEND + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cConstants + b.cSpace + w.cValidation; // END Phase 1 Constants Validation
export const cBeginPhase2ConstantsValidation = w.cBEGIN + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cConstants + b.cSpace + w.cValidation; // BEGIN Phase 2 Constants Validation
export const cEndPhase2ConstantsValidation = w.cEND + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cConstants + b.cSpace + w.cValidation; // END Phase 2 Constants Validation
export const cconstantsPathIs = w.cconstants + w.cPath + cSpaceIsColonSpace; // constantsPath is:
export const cresolvedConstantsPath_BasicIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cBasic + cSpaceIsColonSpace; // resolvedConstantsPath_Basic is:
export const cresolvedConstantsPath_ColorIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cColor + cSpaceIsColonSpace; // resolvedConstantsPath_Color is:
export const cresolvedConstantsPath_ElementIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cElement + cSpaceIsColonSpace; // resolvedConstantsPath_Element is:
export const cresolvedConstantsPath_GenericIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cGeneric + cSpaceIsColonSpace; // resolvedConstantsPath_Generic is:
export const cresolvedConstantsPath_IsotopeIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cIsotope + cSpaceIsColonSpace; // resolvedConstantsPath_Isotope is:
export const cresolvedConstantsPath_NumericIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cNumeric + cSpaceIsColonSpace; // resolvedConstantsPath_Numeric is:
export const cresolvedConstantsPath_PhonicsIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cPhonics + cSpaceIsColonSpace; // resolvedConstantsPath_Phonics is:
export const cresolvedConstantsPath_ShapeIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cShape + cSpaceIsColonSpace; // resolvedConstantsPath_Shape is:
export const cresolvedConstantsPath_SystemIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cSystem + cSpaceIsColonSpace; // resolvedConstantsPath_System is:
export const cresolvedConstantsPath_UnitsIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cUnits + cSpaceIsColonSpace; // resolvedConstantsPath_Units is:
export const cresolvedConstantsPath_WordsIs = w.cresolved + w.cConstants + w.cPath + b.cUnderscore + w.cWords + cSpaceIsColonSpace; // resolvedConstantsPath_Words is:
export const cBasicConstantsPhase1Validation = w.cBasic + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Basic Constants Phase 1 Validation
export const cColorConstantsPhase1Validation = w.cColor + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Color Constants Phase 1 Validation
export const cElementConstantsPhase1Validation = w.cElement + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Element Constants Phase 1 Validation
export const cGenericConstantsPhase1Validation = w.cGeneric + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Generic Constants Phase 1 Validation
export const cIsotopeConstantsPhase1Validation = w.cIsotope + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Isotope Constants Phase 1 Validation
export const cNumericalConstantsPhase1Validation = w.cNumerical + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Numerical Constants Phase 1 Validation
export const cPhonicsConstantsPhase1Validation = w.cPhonics + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Phonics Constants Phase 1 Validation
export const cShapeConstantsPhase1Validation = w.cShape + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Shape Constants Phase 1 Validation
export const cSystemConstantsPhase1Validation = w.cSystem + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // System Constants Phase 1 Validation
export const cUnitsConstantsPhase1Validation = w.cUnits + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Units Constants Phase 1 Validation
export const cWordConstantsPhase1Validation = w.cWord + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c1 + b.cSpace + w.cValidation; // Word Constants Phase 1 Validation
export const cBasicConstantsPhase2Validation = w.cBasic + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Basic Constants Phase 2 Validation
export const cColorConstantsPhase2Validation = w.cColor + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Color Constants Phase 2 Validation
export const cElementConstantsPhase2Validation = w.cElement + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Element Constants Phase 2 Validation
export const cGenericConstantsPhase2Validation = w.cGeneric + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Generic Constants Phase 2 Validation
export const cIsotopeConstantsPhase2Validation = w.cIsotope + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Isotope Constants Phase 2 Validation
export const cNumericalConstantsPhase2Validation = w.cNumerical + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Numerical Constants Phase 2 Validation
export const cPhonicsConstantsPhase2Validation = w.cPhonics + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Phonics Constants Phase 2 Validation
export const cShapeConstantsPhase2Validation = w.cShape + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Shape Constants Phase 2 Validation
export const cSystemConstantsPhase2Validation = w.cSystem + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // System Constants Phase 2 Validation
export const cUnitsConstantsPhase2Validation = w.cUnits + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Units Constants Phase 2 Validation
export const cWordConstantsPhase2Validation = w.cWord + b.cSpace + w.cConstants + b.cSpace + w.cPhase + b.cSpace + n.c2 + b.cSpace + w.cValidation; // Word Constants Phase 2 Validation
export const ccommandStringIs = w.ccommand + w.cString + cSpaceIsColonSpace; // commandString is:
export const ccommandDelimiterIs = w.ccommand + w.cDelimiter + cSpaceIsColonSpace; // commandDelimiter is:
export const ccommandToExecuteBeforeTheAliasIs = w.ccommand + b.cTo + w.cExecute + b.cSpace + w.cbefore + b.cSpace + w.cthe + b.cSpace + w.cAlias + cSpaceIsColonSpace; // commandToExecute before the Alias is:
export const ccommandToExecuteAfterTheAliasIs = w.ccommand + b.cTo + w.cExecute + b.cSpace + w.cafter + b.cSpace + w.cthe + b.cSpace + w.cAlias + cSpaceIsColonSpace; // commandToExecute after the Alias is:
export const cWarningTheSpecifiedCommand = w.cWARNING + b.cColon + b.cSpace + w.cThe + b.cSpace + w.cspecified + b.cSpace + w.ccommand + b.cColon + b.cSpace; // WARNING: The specified command:
export const cdoesNotExistPleaseTryAgain = b.cSpace + w.cdoes + b.cSpace + g.cnot + b.cSpace + w.cexist + b.cComa + b.cSpace + w.cplease + b.cSpace + w.ctry + b.cSpace + w.cagain + b.cExclamation; // does not exist, please try again!
export const ccommandStringContainsEitherSingleQuoteOrBackTickQuote = w.ccommand + w.cString + b.cSpace + w.ccontains + b.cSpace + w.ceither + b.cSpace + b.ca + b.cSpace + w.csingle + w.cQuote + b.cSpace + b.cor + b.cSpace + b.ca + b.cSpace + w.cback + w.cTick + w.cQuote; // commandString contains either a singleQuote or a backTickQuote
export const ccommandStringContainsSingleQuote = w.ccommand + w.cString + b.cSpace + w.ccontains + b.cSpace + b.ca + b.cSpace + w.csingle + w.cQuote + b.cExclamation; // commandString contains a singleQuote!
export const cnumberOfSingleQuotesIsEven = w.cnumber + b.cOf + w.cSingle + w.cQuotes + b.cSpace + b.cis + b.cSpace + b.cGreaterThan + b.cEqual + b.cSpace + n.c2 + b.cSpace + b.cAndPersand + b.cSpace + w.cthe + b.cSpace + w.cnumber + b.cOf + w.cSingle + w.cQuotes + b.cSpace + b.cis + b.cSpace + w.cEVEN + b.cExclamation + b.cSpace + w.cYAY + b.cExclamation; // numberOfSingleQuotes is >= 2 & the numberOfSingleQuotes is EVEN! YAY!
export const cFirstIndexIs = n.cFirst + b.cSpace + w.cindex + cSpaceIsColonSpace; // First index is:
export const ccommandStringAfterTaggingTheFirstStringDelimiter = w.ccommand + w.cString + b.cSpace + w.cafter + b.cSpace + w.ctagging + b.cSpace + w.cthe + b.cSpace + n.cfirst + b.cSpace + w.cstring + b.cSpace + w.cdelimiter + b.cColon + b.cSpace; // commandString after tagging the first string delimiter:
export const cAdditionalIndexIs = w.cAdditional + b.cSpace + w.cindex + cSpaceIsColonSpace; // Additional index is:
export const coddIndex = w.codd + b.cSpace + w.cindex; // odd index
export const cevenIndex = w.ceven + b.cSpace + w.cindex; // even index
export const ccommandStringAfterTaggingAnOddStringDelimiter = w.ccommand + w.cString + b.cSpace + w.cafter + b.cSpace + w.ctagging + b.cSpace + b.can + b.cSpace + w.codd + b.cSpace + w.cstring + b.cSpace + w.cdelimiter + b.cColon + b.cSpace; // commandString after tagging an odd string delimiter:
export const ccommandStringAfterTaggingAnEvenStringDelimiter = w.ccommand + w.cString + b.cSpace + w.cafter + b.cSpace + w.ctagging + b.cSpace + b.can + b.cSpace + w.ceven + b.cSpace + w.cstring + b.cSpace + w.cdelimiter + b.cColon + b.cSpace; // commandString after tagging an even string delimiter:
export const cpreSplitCommandStringIs = p.cpre + w.cSplit + w.cCommand + w.cString + cSpaceIsColonSpace; // preSplitCommandString is:
export const cpostSplitCommandStringIs = w.cpost + w.cSplit + w.cCommand + w.cString + b.cOpenBracket + b.ck + b.cCloseBracket + cSpaceIsColonSpace; // postSplitCommandString[k] is:
export const cpreSplitCommandStringElementIs = p.cpre + w.cSplit + w.cCommand + w.cString + w.cElement + cSpaceIsColonSpace; // preSplitCommandStringElement is:
export const cDoingStraightSplitCommandString = w.cDoing + b.cSpace + b.ca + b.cSpace + w.cstraight + b.cSpace + w.csplit + b.cSpace + b.cof + b.cSpace + w.cthe + b.cSpace + w.ccommand + w.cString + b.cColon + b.cSpace; // Doing a straight split of the commandString:
export const cCommandStartTimeIs = w.cCommand + b.cSpace + w.cStart + b.cSpace + w.ctime + cSpaceIsColonSpace; // Command Start time is:
export const cCommandEndTimeIs = w.cCommand + b.cSpace + w.cEnd + b.cSpace + w.ctime + cSpaceIsColonSpace; // Command End time is:
export const cCommandRunTimeIs = w.cCommand + b.cSpace + w.crun + b.cDash + w.ctime + cSpaceIsColonSpace; // Command run-time is:
export const ccommandAliasesFilePathConfigurationNameIs = w.ccommand + w.cAliases + w.cFile + w.cPath + w.cConfiguration + w.cName + cSpaceIsColonSpace; // commandAliasesFilePathConfigurationName is:
export const ccommandIs = w.ccommand + cSpaceIsColonSpace; // command is:
export const ccommandToExecuteIs = w.ccommand + b.cTo + w.cExecute + cSpaceIsColonSpace; // commandToExecute is:
export const ccontextNameIs = w.ccontext + w.cName + cSpaceIsColonSpace; // contextName is:
export const callSystemConfigurationsIs = w.call + w.cSystem + w.cConfigurations + cSpaceIsColonSpace; // allSystemConfigurations is:
export const cdataPathConfigurationNameIs = w.cdata + w.cPath + w.cConfiguration + w.cName + cSpaceIsColonSpace; // dataPathConfigurationName is:
export const cdataPathIs = w.cdata + w.cPath + cSpaceIsColonSpace; // dataPath is:
export const cfilesToLoadIs = w.cfiles + b.cTo + w.cLoad + cSpaceIsColonSpace; // filesToLoad is:
export const cloadedAndMergedDataAllFilesIs = w.cloaded + w.cAnd + w.cMerged + w.cData + w.cAll + w.cFiles + cSpaceIsColonSpace; // loadedAndMergedDataAllFiles is:
export const cloadedAndMergedDataAllFilesContentsAre = w.cloaded + w.cAnd + w.cMerged + w.cData + w.cAll + w.cFiles + b.cSpace + w.ccontents + b.cSpace + w.care + b.cColon + b.cSpace; // loadedAndMergedDataAllFiles contents are:
export const ccommandWorkflowFilePathConfigurationNameIs = w.ccommand + w.cWorkflow + w.cFile + w.cPath + w.cConfiguration + w.cName + cSpaceIsColonSpace; // commandWorkflowFilePathConfigurationName is:
export const ccontentsOfDataStructreIs = w.ccontents + b.cSpace + b.cof + b.cSpace + b.cD + b.cDash + w.cdata + b.cSpace + w.cstructure + cSpaceIsColonSpace; // contents of D-data structure is:
export const crootPathIs = w.croot + w.cPath + cSpaceIsColonSpace; // rootPath is:
export const cclientBusinessRulesAre = w.cclient + w.cBusiness + w.cRules + b.cSpace + w.care + b.cColon + b.cSpace; // clientBusinessRules are:
export const cclientCommandsAre = w.cclient + w.cCommands + b.cSpace + w.care + b.cColon + b.cSpace; // clientCommands are:
export const csystemCommandsAliasesPathIs = w.csystem + w.cCommands + w.cAliases + w.cPath + cSpaceIsColonSpace; // systemCommandsAliasesPath is:
export const cclientCommandsAliasesPathIs = w.cclient + w.cCommands + w.cAliases + w.cPath + cSpaceIsColonSpace; // clientCommandsAliasesPath is:
export const cresolvedSystemCommandsAliasesPathIs = w.cresolved + w.cSystem + w.cCommands + w.cAliases + w.cPath + cSpaceIsColonSpace; // resolvedSystemCommandsAliasesPath is:
export const cresolvedClientCommandsAliasesPathIs = w.cresolved + w.cClient + w.cCommands + w.cAliases + w.cPath + cSpaceIsColonSpace; // resolvedClientCommandsAliasesPath is:
export const csystemWorkflowPathIs = w.csystem + w.cWorkflow + w.cPath + cSpaceIsColonSpace; // systemWorkflowPath is:
export const cclientWorkflowPathIs = w.cclient + w.cWorkflow + w.cPath + cSpaceIsColonSpace; // clientWorkflowPath is:
export const cresolvedSystemWorkflowsPathIs = w.cresolved + w.cSystem + w.cWorkflows + w.cPath + cSpaceIsColonSpace; // resolvedSystemWorkflowsPath is:
export const cresolvedClientWorkflowsPathIs = w.cresolved + w.cClient + w.cWorkflows + w.cPath + cSpaceIsColonSpace; // resolvedClientWorkflowsPath is:
export const cbusinessRuleIs = w.cbusiness + w.cRule + cSpaceIsColonSpace; // businessRule is:
export const cruleInputIs = w.crule + w.cInput + cSpaceIsColonSpace; // ruleInput is:
export const cruleMetaDataIs = w.crule + w.cMetaData + cSpaceIsColonSpace; // ruleMetaData is:
export const cconfigurationNameIs = w.cconfiguration + w.cName + cSpaceIsColonSpace; // configurationName is:
export const cconfigurationValueIs = w.cconfiguration + w.cValue + cSpaceIsColonSpace; // configurationValue is:
export const creturnConfiguraitonValueIs = w.creturn + w.cConfiguration + w.cValue + cSpaceIsColonSpace; // returnConfigurationValue is:
export const cattributeJsonStringIs = w.cattribute + g.cJson + w.cString + cSpaceIsColonSpace; // attributeJsonString is:
export const cappAttributeNameIs = g.capp + w.cAttribute + w.cName + cSpaceIsColonSpace; // appAttributeName is:
export const cappAttributeValueIs = g.capp + w.cAttribute + w.cValue + cSpaceIsColonSpace; // appAttributeValue is:
export const cexecuteBusinessRulesColon = w.cexecute + b.cSpace + w.cbusiness + b.cSpace + w.crules + b.cColon + b.cSpace; // execute business rules:
export const cdataPathAfterBusinessRulesProcessingIs = w.cdata + w.cPath + b.cSpace + w.cafter + b.cSpace + w.cbusiness + b.cSpace + w.crules + b.cSpace + w.cprocessing + cSpaceIsColonSpace; // dataPath after business rules processing is:
export const cfilesFoundIs = w.cfiles + w.cFound + cSpaceIsColonSpace; // filesFound is:
export const cFileToLoadIs = w.cFile + b.cSpace + b.cto + b.cSpace + w.cload + cSpaceIsColonSpace; // File to load is:
export const cfileExtensionIs = w.cfile + w.cExtension + cSpaceIsColonSpace; // fileExtension is:
export const cloadedFileDataIs = w.cloaded + b.cSpace + w.cfile + b.cSpace + w.cdata + cSpaceIsColonSpace; // loaded file data is:
export const cparsedDataFileIs = w.cparsed + w.cData + w.cFile + cSpaceIsColonSpace; // parsedDataFile is:
export const cBEGIN_PROCESSING_ADDITIONAL_DATA = w.cBEGIN + b.cSpace + w.cPROCESSING + b.cSpace + w.cADDITIONAL + b.cSpace + w.cDATA; // BEGIN PROCESSING ADDITIONAL DATA
export const cDONE_PROCESSING_ADDITIONAL_DATA = w.cDONE + b.cSpace + w.cPROCESSING + b.cSpace + w.cADDITIONAL + b.cSpace + w.cDATA; // DONE PROCESSING ADDITIONAL DATA
export const cMERGED_dataIs = w.cMERGED + b.cSpace + w.cdata + cSpaceIsColonSpace; // MERGED data is:
export const cparsedDataFileContentsAre = w.cparsed + w.cData + w.cFile + b.cSpace + w.ccontents + b.cSpace + w.care + b.cColon + b.cSpace; // parsedDataFile contents are:
export const cdataCatagoryIs = w.cdata + w.cCatagory + cSpaceIsColonSpace; // dataCatagory is:
export const cfullyParsedDataIs = w.cfully + b.cSpace + w.cparsed + b.cSpace + w.cdata + cSpaceIsColonSpace; // fully parsed data is:
export const cD_finalMergeIs = b.cD + b.cSpace + w.cfinal + b.cSpace + w.cmerge + cSpaceIsColonSpace; // D final merge is:
export const cdataStorageContextNameIs = w.cdata + w.cStorage + w.cContext + w.cName + cSpaceIsColonSpace; // dataStorageContextName is:
export const cdataToStoreIs = w.cdata + b.cTo + w.cStore + cSpaceIsColonSpace; // dataToStore is:
export const cdataCatagoryDetailsNameIs = w.cdata + w.cCatagory + w.cDetails + w.cName + cSpaceIsColonSpace; // dataCatagoryDetailsName is:
export const ctempDataIs = w.ctemp + w.cData + cSpaceIsColonSpace; // tempData is:
export const ctargetDataIs = w.ctarget + w.cData + cSpaceIsColonSpace; // targetData is:
export const cpageNameIs = w.cpage + w.cName + cSpaceIsColonSpace; // pageName is:
export const cdataToMergeIs = w.cdata + b.cSpace + b.cto + b.cSpace + w.cMerge + cSpaceIsColonSpace; // data to Merge is:
export const cdataToMergeElementCountIs = w.cdata + b.cTo + w.cMerge + w.cElement + w.cCount + cSpaceIsColonSpace; // dataToMergeElementCount is:
export const cdataToMergeElementCountIs1 = w.cdata + b.cTo + w.cMerge + w.cElement + w.cCount + cSpaceIsColonSpace + n.c1; // dataToMergeElementCount is 1
export const ccheckIfThePageNameIsNotAnEmptyString = w.ccheck + b.cSpace + b.cif + b.cSpace + w.cthe + b.cSpace + w.cpage + w.cName + b.cSpace + b.cis + b.cSpace + g.cnot + b.cSpace + b.can + b.cSpace + w.cempty + b.cSpace + w.cstring; // check if the pageName is not an empty string
export const cpageNameIsNotAnEmptyString = w.cpage + w.cName + b.cSpace + b.cis + b.cSpace + g.cnot + b.cSpace + b.can + b.cSpace + w.cempty + b.cSpace + w.cstring; // pageName is not an empty string
export const cCheckIfTheDataCatagoryIsAnEmptyStringOrNot = w.cCheck + b.cSpace + b.cif + b.cSpace + w.cthe + b.cSpace + w.cdata + w.cCatagory + b.cSpace + b.cis + b.cSpace + b.can + b.cSpace + w.cempty + b.cSpace + w.cstring + b.cSpace + b.cor + b.cSpace + g.cnot; // Check if the dataCatagory is an empty string or not
export const cdataCatagoryIsNotAnEmptyString = w.cdata + w.cCatagory + b.cSpace + b.cis + b.cSpace + g.cnot + b.cSpace + b.can + b.cSpace + w.cempty + b.cSpace + w.cstring + b.cExclamation; // dataCatagory is not an empty string!
export const cdataCatagoryIsAnEmptyString = w.cdata + w.cCatagory + b.cSpace + b.cIS + b.cSpace + b.can + b.cSpace + w.cempty + b.cSpace + w.cstring + b.cExclamation; // dataCatagory IS an empty string!
export const ctargetDataContentIs = w.ctarget + w.cData + b.cSpace + w.ccontent + cSpaceIsColonSpace; // targetData content is:
export const cafterAttemptToMergeResultsAre = w.cafter + b.cSpace + w.cattempt + b.cSpace + b.cto + b.cSpace + w.cmerge + b.cComa + b.cSpace + w.cresults + b.cSpace + w.care + b.cColon + b.cSpace; // after attempt to merge, results are:
export const cMergedDataIs = w.cMerged + b.cSpace + w.cdata + cSpaceIsColonSpace; // Merged data is:
export const cpageNameIsAnEmptyString = w.cpage + w.cName + b.cSpace + b.cis + b.cSpace + b.can + b.cSpace + w.cempty + b.cSpace + w.cstring; // pageName is an empty string
export const cCaughtTheSpecialCaseThatWeAreMergingFlatList = w.cCaught + b.cSpace + w.cthe + b.cSpace + w.cspecial + b.cSpace + w.ccase + b.cSpace + w.cthat + b.cSpace + b.cwe + b.cSpace + w.care + b.cSpace + w.cmerging + b.cSpace + b.ca + b.cSpace + w.cflat + b.cSpace + w.clist + b.cDot; // Caught the special case that we are merging a flat list.
export const cinsideTheForLoop = w.cinside + b.cSpace + w.cthe + b.cSpace + w.cfor + b.cDash + w.cloop; // inside the for-loop
export const ckeyIs = w.ckey + cSpaceIsColonSpace; // key is:
export const ctargetDataIsModifiedInTheInputPassByReferenceVariableContentIs = w.ctarget + w.cData + b.cSpace + b.cis + b.cSpace + w.cmodified + b.cSpace + b.cin + b.cSpace + w.cthe + b.cSpace + w.cinput + b.cSpace + w.cpass + b.cDash + b.cby + b.cDash + w.creference + b.cSpace + w.cvariable + b.cSpace + w.ccontent + cSpaceIsColonSpace; // targetData is modified in the input pass-by-reference variable content is:
export const cdataObjectValueIs = w.cdata + w.cObject + b.cSpace + w.cvalue + cSpaceIsColonSpace; // dataObject value is:
export const celementNameIs = w.celement + w.cName + cSpaceIsColonSpace; // elementName is:
export const cdataObjectIs = w.cdata + w.cObject + cSpaceIsColonSpace; // dataObject is:
export const celementNamePatternIs = w.celement + w.cName + w.cPattern + cSpaceIsColonSpace; // elementNamePattern is:
export const celementCountIs = w.celement + w.cCount + cSpaceIsColonSpace; // elementCount is:
export const cERROR_Colon = w.cERROR + b.cColon + b.cSpace; // ERROR:
export const cfileAndPathToLoadFromIs = w.cfile + b.cSpace + w.cand + b.cSpace + w.cpath + b.cSpace + b.cto + b.cSpace + w.cload + b.cSpace + w.cfrom + cSpaceIsColonSpace; // file and path to load from is:
export const cDoneLoadingDataFrom = w.cDONE + b.cSpace + w.cloading + b.cSpace + w.cdata + b.cSpace + w.cfrom + b.cColon + b.cSpace; // DONE loading data from:
export const cfileAndPathToWriteDataToIs = w.cfile + b.cSpace + w.cand + b.cSpace + w.cpath + b.cSpace + b.cto + b.cSpace + w.cwrite + b.cSpace + w.cdata + b.cSpace + b.cto + b.cSpace + b.cis + b.cColon + b.cSpace; // file and path to write data to is:
export const cdataToWriteIs = w.cdata + b.cSpace + b.cto + b.cSpace + w.cwrite + cSpaceIsColonSpace; // data to write is:
export const cDataWasWrittenToTheFile = w.cData + b.cSpace + w.cwas + b.cSpace + w.cwritten + b.cSpace + b.cto + b.cSpace + w.cthe + b.cSpace + w.cfile + b.cColon + b.cSpace; // Data was written to the file:
export const cPathThatShouldBeScannedIs = w.cPath + b.cSpace + w.cthat + b.cSpace + w.cshould + b.cSpace + b.cbe + b.cSpace + w.cscanned + cSpaceIsColonSpace; // Path that should be scanned is:
export const cfilesFoundAre = w.cfiles + b.cSpace + w.cfound + b.cSpace + w.care + b.cColon + b.cSpace; // files found are:
export const cdirectorIs = w.cdirectory + cSpaceIsColonSpace; // directory is:
export const cdirectoryPathIs = w.cdirectory + w.cPath + cSpaceIsColonSpace; // directoryPath is:
export const csourceFolderIs = w.csource + w.cFolder + cSpaceIsColonSpace; // sourceFolder is:
export const cdestinationFolderIs = w.cdestination + w.cFolder + cSpaceIsColonSpace; // destinationFolder is:
export const ccopySuccessIs = w.ccopy + w.cSuccess + cSpaceIsColonSpace; // copySuccess is:
export const ccurrentVersionIs = w.ccurrent + b.cSpace + w.cversion + cSpaceIsColonSpace; // current version is:
export const creleasedArchiveFilesListIs = w.creleased + b.cSpace + w.carchive + b.cSpace + w.cfiles + b.cSpace + w.clist + cSpaceIsColonSpace; // released archive files list is:
export const cfileIs = w.cfile + cSpaceIsColonSpace; // file is:
export const cfileNameIs = w.cfile + w.cName + cSpaceIsColonSpace; // fileName is:
export const creleaseFilesListIs = w.crelease + b.cSpace + w.cfiles + b.cSpace + w.clist + cSpaceIsColonSpace; // release files list is:
export const creleaseDateTimeStampIs = w.crelease + b.cSpace + w.cdate + b.cDash + w.ctime + b.cSpace + w.cstamp + cSpaceIsColonSpace; // release date-time stamp is:
export const creleaseFileNameIs = w.crelease + b.cSpace + w.cfile + w.cName + cSpaceIsColonSpace; // release fileName is:
export const cDoneWritingTheZipFile = w.cDone + b.cSpace + w.cwriting + b.cSpace + w.cthe + b.cSpace + g.czip + b.cSpace + w.cfile + b.cColon + b.cSpace; // Done writing the zip file:
export const cSetTheReturnPackageSuccessFlagToTrue = w.cSet + b.cSpace + w.cthe + b.cSpace + w.creturn + b.cSpace + w.cpackage + w.cSuccess + b.cSpace + w.cflag + b.cSpace + b.cto + b.cSpace + g.cTRUE; // Set the return packageSuccess flag to TRUE
export const ccurrentVersionAlreadyReleased = w.ccurrent + b.cSpace + w.cversion + b.cSpace + w.calready + b.cSpace + w.creleased; // current version already released
export const cpackageSuccessIs = w.cpackage + w.cSuccess + cSpaceIsColonSpace; // packageSuccess is:
export const cRootPathBeforeProcessingIs = w.cRoot + w.cPath + b.cSpace + w.cbefore + b.cSpace + w.cprocessing + cSpaceIsColonSpace; // RootPath before processing is:
export const cRootPathAfterProcessingIs = w.cRoot + w.cPath + b.cSpace + w.cafter + b.cSpace + w.cprocessing + cSpaceIsColonSpace; // RootPath after processing is:
export const cSourceIs = w.csource + cSpaceIsColonSpace; // source is:
export const ctargetIs = w.ctarget + cSpaceIsColonSpace; // target is:
export const cErrorCouldNotCopyFile = w.cERROR + b.cColon + b.cSpace + w.cCould + b.cSpace + g.cnot + b.cSpace + w.ccopy + b.cSpace + w.cfile + b.cColon + b.cSpace; // ERROR: Could not copy file:
export const cErrorCouldNotCreateFolder = w.cERROR + b.cColon + b.cSpace + w.cCould + b.cSpace + g.cnot + b.cSpace + w.ccreate + b.cSpace + w.cfolder + b.cColon + b.cSpace; // ERROR: Could not create folder:
export const csuccessfullCopyIs = w.csuccessful + w.cCopy + cSpaceIsColonSpace; // successfullCopy is:
export const cErrorCouldNotCopyFolderContents = w.cERROR + b.cColon + b.cSpace + w.cCould + b.cSpace + g.cnot + b.cSpace + w.ccopy + b.cSpace + w.cfolder + b.cSpace + w.ccontents + b.cColon + b.cSpace; // ERROR: Could not copy folder contents:
export const cargumentValueIs = w.cargument + w.cValue + cSpaceIsColonSpace; // argumentValue is:
export const cconsolidatedArgumentModeIs = w.cconsolidated + w.cArgument + w.cMode + cSpaceIsColonSpace; // consolidatedArgumentMode is:
export const cPushingArgumentValueToReturnDataAsArrayElement = w.cPushing + b.cSpace + w.cthe + b.cSpace + w.cargument + w.cValue + b.cSpace + b.cto + b.cSpace + w.cthe + b.cSpace + w.creturn + w.cData + b.cSpace + b.cas + b.cSpace + b.can + b.cSpace + w.carray + b.cSpace + w.celement; // Pushing the argumentValue to the returnData as an array element
export const cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeFalse = w.cCalling + b.cSpace + w.canalyze + w.cArgument + b.cSpace + w.cfor + b.cSpace + w.cindex + b.cSpace + w.cEqual + b.cSpace + n.c2 + b.cComa + b.cSpace + w.cconsolidated + w.cArgument + w.cMode + b.cSpace + b.cEqual + b.cSpace + g.cfalse; // Calling analyzeArgument for index = 2, consolidatedArgumentMode = false
export const cCallingAnalyzeArgumentIndex2ConsolidatedArgumentModeTrue = w.cCalling + b.cSpace + w.canalyze + w.cArgument + b.cSpace + w.cfor + b.cSpace + w.cindex + b.cSpace + b.cEqual + b.cSpace + n.c2 + b.cComa + b.cSpace + w.cconsolidated + w.cArgument + w.cMode + b.cSpace + b.cEqual + b.cSpace + g.ctrue; // Calling analyzeArgument for index = 2, consolidatedArgumentMode = true
export const cargumentValueLengthGreaterThanZero = w.cargument + w.cValue + b.cDot + w.cLength + b.cSpace + b.cGreaterThan + b.cSpace + n.c0; // argumentValue.length > 0
export const cReturnArgumentValueSameAsItWasPassedIn = w.cReturn + b.cSpace + w.cthe + b.cSpace + w.cargument + w.cValue + b.cSpace + w.cthe + b.cSpace + w.csame + b.cSpace + b.cas + b.cSpace + b.cit + b.cSpace + w.cwas + b.cSpace + w.cpassed + b.cSpace + b.cin + b.cDot; // Return the argumentValue the same as it was passed in.
export const cCallingAnalyzeArgumentIndex3ConsolidatedArgumentModeFalse = w.cCalling + b.cSpace + w.canalyze + w.cArgument + b.cSpace + w.cfor + b.cSpace + w.cindex + b.cSpace + b.cEqual + b.cSpace + n.c3 + b.cComa + b.cSpace + w.cconsolidated + w.cArgument + w.cMode + b.cSpace + b.cEqual + b.cSpace + g.cfalse; // Calling analyzeArgument for index = 3, consolidatedArgumentMode = false
export const cCheckIfThereAreBracketsOrNoBrackets = w.cCheck + b.cSpace + b.cif + b.cSpace + w.cthere + b.cSpace + w.care + b.cSpace + w.cbrackets + b.cSpace + b.cor + b.cSpace + b.cno + b.cSpace + w.cbrackets + b.cDot; // Check if there are brackets or no brackets.
export const cBracketsWereFound = w.cBrackets + b.cSpace + w.cwere + b.cSpace + w.cfound; // Brackets were found
export const cCheckIfThereIsRegularExpressionOrNot = w.cCheck + b.cSpace + b.cif + b.cSpace + w.cthere + b.cSpace + b.cis + b.cSpace + b.ca + b.cSpace + w.cRegular + b.cSpace + w.cExpression + b.cSpace + b.cor + b.cSpace + g.cnot + b.cDot; // Check if there is a Regular Expression or not.
export const cRegularExpressionWasFound = b.cA + b.cSpace + w.cregular + b.cSpace + w.cexpression + b.cSpace + w.cwas + b.cSpace + w.cfound + b.cExclamation; // A regular expression was found!
export const cNoRegExpFound = b.cNO + b.cSpace + g.cRegExp + b.cSpace + w.cfound + b.cExclamation; // NO RegExp found!
export const cBracketsAreFound = w.cBrackets + b.cSpace + w.cARE + b.cSpace + w.cfound + b.cExclamation; // Brackets ARE found!
export const cNoSecondaryCommandArgumentDelimiters = b.cNO + b.cSpace + w.csecondary + b.cSpace + w.ccommand + b.cSpace + w.cargument + b.cSpace + w.cdelimiters + b.cDot; // NO secondary command argument delimiters.
export const cregularExpressionIs = w.cregular + b.cSpace + w.cexpression + cSpaceIsColonSpace; // regular expression is:
export const cregExValueIs = g.cregEx + w.cValue + cSpaceIsColonSpace; // regExValue is:
export const cregularExpressionFlagsAre = w.cregular + b.cSpace + w.cexpression + b.cSpace + w.cflags + b.cSpace + w.care + b.cColon + b.cSpace; // regular expression flags are:
export const cregExFlagsIs = g.cregEx + w.cFlags + cSpaceIsColonSpace; // regExFlags is:
export const cargumentValueContainsTheDelimiterLetsSplitIt = w.cargument + w.cValue + b.cSpace + w.ccontains + b.cSpace + w.cthe + b.cSpace + w.cdelimiter + b.cColon + b.cSpace + w.cLets + b.cSpace + w.csplit + b.cSpace + b.cit + b.cExclamation; // argumentValue contains the delimiter, lets split it!
export const cargumentValueAfterAttemptingToRemoveOpenBracketFromAllArrayElementsIs = w.cargument + w.cValue + b.cSpace + w.cafter + b.cSpace + w.cattempting + b.cSpace + b.cto + b.cSpace + w.cremove + b.cSpace + b.ca + b.cSpace + w.copen + b.cSpace + w.cbracket + b.cSpace + w.cfrom + b.cSpace + w.call + b.cSpace + w.carray + b.cSpace + w.celements + cSpaceIsColonSpace; // argumentValue after attempting to remove a open bracket from all array elements is:
export const cargumentValueAfterAttemptingToRemoveCloseBracketFromAllArrayElementsIs = w.cargument + w.cValue + b.cSpace + w.cafter + b.cSpace + w.cattempting + b.cSpace + b.cto + b.cSpace + w.cremove + b.cSpace + b.ca + b.cSpace + w.cclose + b.cSpace + w.cbracket + b.cSpace + w.cfrom + b.cSpace + w.call + b.cSpace + w.carray + b.cSpace + w.celements + cSpaceIsColonSpace; // argumentValue after attempting to remove a close bracket from all array elements is:
export const csecondaryCommandArgsDelimiterIs = w.csecondary + w.cCommand + g.cArgs + w.cDelimiter + cSpaceIsColonSpace; // secondaryCommandArgsDelimiter is:
export const cargumentArrayIs = w.cargument + w.cArray + cSpaceIsColonSpace; // argumentArray is:
export const cformattingIs = w.cformatting + cSpaceIsColonSpace; // formatting is:
export const cstartTimeIs = w.cstart + w.cTime + cSpaceIsColonSpace; // startTime is:
export const cendTimeIs = w.cend + w.cTime + cSpaceIsColonSpace; // endTime is:
export const cdeltaTimeResultIs = w.cdelta + w.cTime + w.cResult + cSpaceIsColonSpace; // deltaTimeResult is:
export const cdeltaTimeIs = w.cdelta + w.cTime + cSpaceIsColonSpace; // deltaTime is:
export const cformatIs = w.cformat + cSpaceIsColonSpace; // format is:
export const creturnDeltaTimeIs = w.creturn + w.cDelta + w.cTime + cSpaceIsColonSpace; // returnDeltaTime is:
export const csleepTimeIs = w.csleep + w.cTime + cSpaceIsColonSpace; // sleepTime is:
export const cworkflowNameIs = w.cworkflow + w.cName + cSpaceIsColonSpace; // workflowName is:
export const ccurrentWorkflowIs = w.ccurrent + w.cWorkflow + cSpaceIsColonSpace; // currentWorkflow is:
export const cworkflowValueIs = w.cworkflow + w.cValue + cSpaceIsColonSpace; // workflowValue is:
export const cdataHivePathArrayIs = w.cdata + w.cHive + w.cPath + w.cArray + cSpaceIsColonSpace; // dataHivePathArray is:
export const ccontentsOfLeafDataHiveElementIs = w.ccontents + b.cSpace + b.cof + b.cSpace + w.cleaf + w.cData + w.cHive + w.cElement + cSpaceIsColonSpace; // contents of leafDataHiveElement is:
export const centryIs = w.centry + cSpaceIsColonSpace; // entry is:
export const cattributeValueIs = w.cattribute + w.cValue + cSpaceIsColonSpace; // attributeValue is:
export const ckey2Is = w.ckey + n.c2 + cSpaceIsColonSpace; // key2 is:
export const centityIs = w.centity + cSpaceIsColonSpace; // entity is:

// WARNING: Mixed string. Cannot determine what delimiter should be used to break up the string into words.
export const cDetermineWordDelimiterMessage1 = w.cWARNING + b.cColon + b.cSpace + w.cMixed + b.cSpace + w.cstring + b.cDot + b.cSpace; // WARNING: Mixed string.
export const cDetermineWordDelimiterMessage2 = w.cCannot + b.cSpace + w.cdetermine + b.cSpace + w.cwhat + b.cSpace + w.cdelimiter + b.cSpace + w.cshould + b.cSpace; // Cannot determine what delimiter should
export const cDetermineWordDelimiterMessage3 = b.cbe + b.cSpace + w.cused + b.cSpace + b.cto + b.cSpace + w.cbreak + b.cSpace + b.cup + b.cSpace + w.cthe + b.cSpace; // be used to break up the
export const cDetermineWordDelimiterMessage4 = w.cstring + b.cSpace + w.cinto + b.cSpace + w.cwords + b.cDot; // string into words.
// WARNING: Mixed string. Cannot determine how words are delimited in the string. Unable to count words.
export const cGetWordCountInStringMessage1 = w.cWARNING + b.cColon + b.cSpace + w.cMixed + b.cSpace + w.cstring + b.cDot + b.cSpace; // WARNING: Mixed string.
export const cGetWordCountInStringMessage2 = w.cCannot + b.cSpace + w.cdetermine + b.cSpace + w.chow + b.cSpace + w.cwords + b.cSpace + w.care + b.cSpace + w.cdelimited + b.cSpace; // Cannot determine how words are delimited
export const cGetWordCountInStringMessage3 = b.cin + b.cSpace + w.cthe + b.cSpace + w.cstring + b.cDot + b.cSpace + w.cUnable + b.cSpace + b.cto + b.cSpace + w.ccount + b.cSpace + w.cwords + b.cDot; // in the string. Unable to count words.
// WARNING: Mixed string. Cannot get words from the string. Unable to determine words.
export const cGetWordsArrayFromStringMessage1 = w.cWARNING + b.cColon + b.cSpace + w.cMixed + b.cSpace + w.cString + b.cDot + b.cSpace; // WARNING: Mixed string.
export const cGetWordsArrayFromStringMessage2 = w.cCannot + b.cSpace + w.cget + b.cSpace + w.cwords + b.cSpace + w.cfrom + b.cSpace + w.cthe + b.cSpace + w.cstring + b.cDot + b.cSpace; // Cannot get words from the string.
export const cGetWordsArrayFromStringMessage3 = w.cUnable + b.cSpace + b.cto + b.cSpace + w.cdetermine + b.cSpace + w.cwords + b.cDot // Unable to determine words.
// Please enter a named command where the first word starts with a lower case letter and all other words in the named command start with an upper case letter:
export const cCommandNamePrompt1 = w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cnamed + b.cSpace + w.ccommand + b.cSpace + w.cwhere + b.cSpace; // Please enter a named command where
export const cCommandNamePrompt2 = w.cthe + b.cSpace + n.cfirst + b.cSpace + w.cword + b.cSpace + w.cstarts + b.cSpace + w.cwith + b.cSpace + b.ca + b.cSpace; // the first word starts with a
export const cCommandNamePrompt3 = w.clower + b.cSpace + w.ccase + b.cSpace + w.cletter + b.cSpace + w.cand + b.cSpace + w.call + b.cSpace + w.cother + b.cSpace; // lower case letter and all other
export const cCommandNamePrompt4 = w.cwords + b.cSpace + b.cin + b.cSpace + w.cthe + b.cSpace + w.cnamed + b.cSpace + w.ccommand + b.cSpace + w.cstart + b.cSpace; // words in the named command start
export const cCommandNamePrompt5 = w.cwith + b.cSpace + b.can + b.cSpace + w.cupper + b.cSpace + w.ccase + b.cSpace + w.cletter + b.cColon; // with an upper case letter:
// Please enter a list of command word abreviations/acronyms/aliases for the command word:
export const cCommandWordAliasPrompt1 = w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.clist + b.cSpace + b.cof + b.cSpace + w.ccommand + b.cSpace;
export const cCommandWordAliasPrompt2 = w.cword + b.cSpace + w.cabreviations + b.cForwardSlash + w.cacronyms + b.cForwardSlash + w.caliases + b.cSpace;
export const cCommandWordAliasPrompt3 = w.cfor + b.cSpace + w.cthe + b.cSpace + w.ccommand + b.cSpace + w.cword + b.cColon;
// Please enter a string you would like to define as a constant in the constants system:
export const cConstantPrompt1 = w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cstring + b.cSpace + w.cyou + b.cSpace + w.cwould + b.cSpace; // Please enter a string you would
export const cConstantPrompt2 = w.clike + b.cSpace + b.cto + b.cSpace + w.cdefine + b.cSpace + b.cas + b.cSpace + b.ca + b.cSpace + w.cconstant + b.cSpace; // like to define as a constant
export const cConstantPrompt3 = b.cin + b.cSpace + w.cthe + b.cSpace + w.cconstants + b.cSpace + w.csystem + b.cColon; // in the constants system:
// Please enter a coma separated list of strings you would like to define in the constants system:
export const cConstantsListPrompt1 = w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.ccoma + b.cSpace + w.cseparated + b.cSpace + w.clist + b.cSpace + b.cof + b.cSpace;
export const cConstantsListPrompt2 = w.cstrings + b.cSpace + w.cyou + b.cSpace + w.cwould + b.cSpace + w.clike + b.cSpace + b.cto + b.cSpace + w.cdefine + b.cSpace + b.cin + b.cSpace;
export const cConstantsListPrompt3 = w.cthe + b.cSpace + w.cconstants + b.cSpace + w.csystem + b.cColon;
// Please enter a coma separated list of strings you would like to search for common patterns:
export const cConstantsListPatternSearchPrompt1 = w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.ccoma + b.cSpace + w.cseparated + b.cSpace + w.clist + b.cSpace + b.cof + b.cSpace; // Please enter a coma separated list of
export const cConstantsListPatternSearchPrompt2 = w.cstrings + b.cSpace + w.cyou + b.cSpace + w.cwould + b.cSpace + w.clike + b.cSpace + b.cto + b.cSpace + w.csearch + b.cSpace + w.cfor + b.cSpace; // strings you would like to search for
export const cConstantsListPatternSearchPrompt3 = w.ccommon + b.cSpace + w.cpatterns + b.cColon; // common patterns:
// ERROR: Attempted to generate a suggested line of code to validate the constant, ' +
// 'but the constant is not formatted correctly, it should begin with a lower case "c". ' +
// 'Please reformat the constant correctly so a line of code can be generated for you.
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage1 = w.cERROR + b.cColon + b.cSpace + w.cAttempted + b.cSpace + b.cto + b.cSpace + w.cgenerate + b.cSpace + b.ca + b.cSpace + w.csuggested + b.cSpace; // ERROR: Attempted to generate a suggested
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage2 = w.cline + b.cSpace + b.cof + b.cSpace + w.ccode + b.cSpace + b.cto + b.cSpace + w.cvalidate + b.cSpace + w.cthe + b.cSpace + w.cconstant + b.cComa + b.cSpace; // line of code to validate the constant,
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage3 = w.cbut + b.cSpace + w.cthe + b.cSpace + w.cconstant + b.cSpace + b.cis + b.cSpace + g.cnot + b.cSpace + w.cformatted + b.cSpace + w.ccorrectly + b.cComa + b.cSpace; // but the constant is not formatted correctly,
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage4 = b.cit + b.cSpace + w.cshould + b.cSpace + w.cbegin + b.cSpace + w.cwith + b.cSpace + b.ca + b.cSpace + w.clower + b.cSpace + w.ccase + b.cSpace + b.cDoubleQuote + b.cc + b.cDoubleQuote + b.cDot + b.cSpace; // it should begin with a lower case "c".
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage5 = w.cPlease + b.cSpace + w.creformat + b.cSpace + w.cthe + b.cSpace + w.cconstant + b.cSpace + w.ccorrectly + b.cSpace + b.cso + b.cSpace + b.ca + b.cSpace; // Please reformat the constant correctly so a
export const cDetermineSuggestedConstantsValidationLineOfCodeErrorMessage6 = w.cline + b.cSpace + b.cof + b.cSpace + w.ccode + b.cSpace + w.ccan + b.cSpace + b.cbe + b.cSpace + w.cgenerated + b.cSpace + w.cfor + b.cSpace + w.cyou + b.cDot; // line of code can be generated for you.
export const cSearchForPatternsInStringArrayMessage1 = ccurrentMasterStringArrayElement + b.cSpace + w.cdoes + b.cSpace + g.cnot + b.cSpace + w.ccontain + b.cSpace + b.ca + b.cSpace + w.cspace + b.cSpace + w.ccharacter; // currentMasterStringArrayElement does not contain a space character
// WARNING: The current string being searched contains a space character, we are going to skip comparison.
export const cSearchForPatternsInStringArrayMessage2 = w.cWARNING + b.cColon + b.cSpace + w.cThe + b.cSpace + w.ccurrent + b.cSpace + w.cstring + b.cSpace + w.cbeing + b.cSpace + w.csearched + b.cSpace + w.ccontains + b.cSpace + b.ca + b.cSpace + w.cspace + b.cSpace + w.ccharacter + b.cComa + b.cSpace; // WARNING: The current string being search contains a space character,
export const cSearchForPatternsInStringArrayMessage3 = b.cwe + b.cSpace + w.care + b.cSpace + w.cgoing + b.cSpace + b.cto + b.cSpace + w.cskip + b.cSpace + w.ccomparison + b.cDot; // we are going to skip comparison.
// WARNING: InputData was not an array or had an empty array.
export const cSearchForPatternsInStringArrayMessage4 = w.cWARNING + b.cColon + b.cSpace + cInputData + b.cSpace + w.cwas + b.cSpace + g.cnot + b.cSpace + b.can + b.cSpace + w.carray + b.cSpace + b.cor + b.cSpace + w.chad + b.cSpace + b.can + b.cSpace + w.cempty + b.cSpace + w.carray + b.cDot; // WARNING: InputData was not an array or had an empty array.
// WARNING: No data to load, please specify a valid path & filename!
export const cLoadDataFileMessage1 = w.cWARNING + b.cColon + b.cSpace + b.cNo + b.cSpace + w.cdata + b.cSpace + b.cto + b.cSpace + w.cload + b.cComa + b.cSpace; // WARNING: No data to load,
export const cloadDataFileMessage2 = w.cplease + b.cSpace + w.cspecify + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.cpath + b.cSpace + b.cAndPersand + b.cSpace + w.cfilename + b.cExclamation; // please specify a valid path & filename!
export const cloadDataFileMessage3 = w.cWARNING + b.cColon + b.cSpace + w.cInvalid + b.cSpace + w.cfile + b.cSpace + w.cformat + b.cComa + b.cSpace + w.cfile + b.cSpace + w.cformats + b.cSpace + w.csupported + b.cSpace + w.care + b.cColon + b.cSpace; // WARNING: Invalid file format, file formats supported are:
// ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another release.
export const cdeployApplicationMessage1a = w.cERROR + b.cColon + b.cSpace + w.cRelease + b.cSpace + w.cfailed + b.cSpace + w.cbecause + b.cSpace + b.cof + b.cSpace + b.ca + b.cSpace + w.cfailure + b.cSpace + b.cin + b.cSpace + w.cthe + b.cSpace + w.cconstants + b.cSpace + w.cvalidation + b.cSpace + w.csystem + b.cDot + b.cSpace; // ERROR: Release failed because of a failure in the constants validation system.
export const cdeployApplicationMessage2a = w.cPlease + b.cSpace + w.cfix + b.cSpace + g.cASAP + b.cSpace + w.cbefore + b.cSpace + w.cattempting + b.cSpace + w.canother + b.cSpace + w.crelease + b.cDot; // Please fix ASAP before attempting another release.
// ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another release.
export const cdeployApplicationMessage1b = w.cERROR + b.cColon + b.cSpace + w.cRelease + b.cSpace + w.cfailed + b.cSpace + w.cbecause + b.cSpace + b.cof + b.cSpace + b.ca + b.cSpace + w.cfailure + b.cSpace + b.cin + b.cSpace + w.cthe + b.cSpace + w.ccommands + b.cSpace + w.calias + b.cSpace + w.cvalidation + b.cSpace + w.csystem + b.cDot + b.cSpace; //ERROR: Release failed because of a failure in the commands alias validation system.
export const ccommandSequencerMessage1 = w.cWARNING + b.cColon + b.cSpace + w.cnominal + b.cDot + w.ccommand + w.cSequencer + b.cColon + b.cSpace + w.cThe + b.cSpace + w.cspecified + b.cSpace + w.ccommand + b.cSpace + w.cwas + b.cSpace + g.cnot + b.cSpace + w.cfound + b.cComa + b.cSpace; // WARNING: nominal.commandSequencer: The specified command was not found,
export const ccommandSequencerMessage2 = w.cplease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.ccommand + b.cSpace + w.cand + b.cSpace + w.ctry + b.cSpace + w.cagain + b.cDot; // Please enter a valid command and try again.
export const cworkflowMessage1 = w.cWARNING + b.cColon + b.cSpace + w.cnominal + b.cDot + w.cworkflow + b.cColon + b.cSpace + w.cThe + b.cSpace + w.cspecified + b.cSpace + w.cworkflow + b.cColon + b.cSpace; // WARNING: nominal.workflow: The specified workflow:
export const cworkflowMessage2 = b.cSpace + w.cwas + b.cSpace + g.cnot + b.cSpace + w.cfound + b.cSpace + b.cin + b.cSpace + w.ceither + b.cSpace + w.cthe + b.cSpace + w.csystem + b.cSpace + w.cdefined + b.cSpace + w.cworkflows + b.cComa + b.cSpace + b.cor + b.cSpace + w.cclient + b.cSpace + w.cdefined + b.cSpace + w.cworkflows + b.cDot; // was not found in either the system defined workflows, or client defined workflows.
export const cworkflowMessage3 = b.cSpace + w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.cworkflow + b.cSpace + w.cname + b.cSpace + w.cand + b.cSpace + w.ctry + b.cSpace + w.cagain + b.cDot; // Please enter a valid workflow name and try again.
// After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is:
export const ccommandGeneratorMessage1 = w.cAfter + b.cSpace + w.cattempting + b.cSpace + b.cto + b.cSpace + w.creplace + b.cSpace + w.cthe + b.cSpace + w.csecondary + w.cCommand + g.cArgs + w.cDelimiter + b.cSpace + w.cwith + b.cSpace + w.cthe + b.cSpace + w.cprimary + w.cCommand + w.cDelimiter + b.cSpace + w.ccommand + w.cString + cSpaceIsColonSpace;
// After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is:
export const ccommandGeneratorMessage2 = w.cAfter + b.cSpace + w.cattempting + b.cSpace + b.cto + b.cSpace + w.creplace + b.cSpace + w.cthe + b.cSpace + w.ctertiary + w.cCommand + w.cDelimiter + b.cSpace + w.cwith + b.cSpace + w.cthe + b.cSpace + w.csecondary + w.cCommand + g.cArs + w.cDelimiter + b.cSpace + w.ccommand + w.cString + cSpaceIsColonSpace;
// WARNING: nominal.commandGenerator: Must enter a number greater than 0, number entered:
export const ccommandGeneratorMessage3 = w.cWARNING + b.cColon + b.cSpace + w.cnominal + b.cDot + w.ccommand + w.cGenerator + b.cColon + b.cSpace + w.cMust + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cnumber + b.cSpace + w.cgreater + b.cSpace + w.cthan + b.cSpace + n.c0 + b.cComa + b.cSpace + w.cnumber + b.cSpace + w.centered + b.cColon + b.cSpace;
// WARNING: nominal.commandGenerator: Number entered for the number of commands to generate is not a number:
export const ccommandGeneratorMessage4 = w.cWARNING + b.cColon + b.cSpace + w.cnominal + b.cDot + w.ccommand + w.cGenerator + b.cColon + b.cSpace + w.cNumber + b.cSpace + w.centered + b.cSpace + w.cfor + b.cSpace + w.cthe + b.cSpace + w.cnumber + b.cSpace + b.cof + b.cSpace + w.ccommands + b.cSpace + b.cto + b.cSpace + w.cgenerate + b.cSpace + b.cis + b.cSpace + g.cnot + b.cSpace + b.ca + b.cSpace + w.cnumber + b.cColon + b.cSpace;
// WARNING: nominal.commandGenerator: The specified command:
export const ccommandGeneratorMessage5 = w.cWarning + b.cColon + b.cSpace + w.cnominal + b.cDot + w.ccommand + w.cGenerator + b.cColon + b.cSpace + w.cThe + b.cSpace + w.cspecified + b.cSpace + w.ccommand + b.cColon + b.cSpace;
// was not found, please enter a valid command and try again.
export const ccommandGeneratorMessage6 = b.cSpace + w.cwas + b.cSpace + g.cnot + b.cSpace + w.cfound + b.cComa + b.cSpace + w.cplease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.ccommand + b.cSpace + w.cand + b.cSpace + w.ctry + b.cSpace + w.cagain + b.cDot;
// Command can be called by passing parameters and bypass the prompt system.
export const ccommandAliasGeneratorMessage1 = w.cCommand + b.cSpace + w.ccan + b.cSpace + b.cbe + b.cSpace + w.ccalled + b.cSpace + b.cby + b.cSpace + w.cpassing + b.cSpace + w.cparameters + b.cSpace + w.cand + b.cSpace + w.cbypass + b.cSpace + w.cthe + b.cSpace + w.cprompt + b.cSpace + w.csystem + b.cDot;
// EXAMPLE: {"constants":"c,const","Generator":"g,gen,genrtr","List":"l,lst"}
export const ccommandAliasGeneratorMessage2 = w.cEXAMPLE + b.cColon + b.cSpace + b.cOpenCurlyBrace + b.cDoubleQuote + w.cconstants + b.cDoubleQuote + b.cColon + b.cDoubleQuote + b.cc + b.cComa + g.cconst + b.cDoubleQuote + b.cComa + b.cDoubleQuote + w.cGenerator + b.cDoubleQuote + b.cColon + b.cDoubleQuote + b.cg + b.cComa + p.cgen + b.cComa + p.cgen + b.crt + b.cr + b.cDoubleQuote + b.cComa + b.cDoubleQuote + w.cList +
b.cDoubleQuote + b.cColon + b.cDoubleQuote + b.cl + b.cComa + b.cls + b.ct + b.cDoubleQuote + b.cCloseCurlyBrace;
// INVALID INPUT: Please enter a valid camel-case command name.
export const ccommandAliasGeneratorMessage3 = w.cINVALID + b.cSpace + w.cINPUT + b.cColon + b.cSpace + w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.ccamel + b.cDash + w.ccase + b.cSpace + w.ccommand + b.cSpace + w.cname + b.cDot;
// INVALID INPUT: Please enter a valid command word alias list.
export const ccommandAliasGeneratorMessage4 = w.cINVALID + b.cSpace + w.cINPUT + b.cColon + b.cSpace + w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.ccommand + b.cSpace + w.cword + b.cSpace + w.calias + b.cSpace + w.clist + b.cDot;
// INVALID COMMAND INPUT: Please enter valid command data when trying to call with parameters.
export const ccommandAliasGeneratorMessage5 = w.cINVALID + b.cSpace + w.cCOMMAND + b.cSpace + w.cINPUT + b.cColon + b.cSpace + w.cPlease + b.cSpace + w.center + b.cSpace + w.cvalid + b.cSpace + w.ccommand + b.cSpace + w.cdata + b.cSpace + w.cwhen + b.cSpace + w.ctrying + b.cSpace + b.cto + b.cSpace + w.ccall + b.cSpace + w.cwith + b.cSpace + w.cparameters + b.cDot;
// INVALID INPUT: Please enter a valid constant value that contains more than 4 characters.
export const cconstantsGeneratorMessage1 = w.cINVALID + b.cSpace + w.cINPUT + b.cColon + b.cSpace + w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.cconstant + b.cSpace + w.cvalue + b.cSpace + w.cthat + b.cSpace + w.ccontains + b.cSpace + w.cmore + b.cSpace + w.cthan + b.cSpace + n.c4 + b.cSpace + w.ccharacters + b.cDot;
// WARNING: The constant has already been defined in the following library(ies):
export const cconstantsGeneratorMessage2 = w.cWARNING + b.cColon + b.cSpace + w.cThe + b.cSpace + w.cconstant + b.cSpace + w.chas + b.cSpace + w.calready + b.cSpace + w.cbeen + b.cSpace + w.cdefined + b.cSpace + b.cin + b.cSpace + w.cthe + b.cSpace + w.cfollowing + b.cSpace + w.clibrary + b.cOpenParenthesis + p.cies + b.cCloseParenthesis + b.cColon + b.cSpace;
// INVALID INPUT: Please enter a valid constant list.
export const cconstantsGeneratorListMessage1 = w.cINVALID + b.cSpace + w.cINPUT + b.cColon + b.cSpace + w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.cconstant + b.cSpace + w.cList + b.cDot;
// PASSED: All duplicate command aliases validation tests!
export const cvalidateCommandAliasesMessage1 = w.cPASSED + b.cColon + b.cSpace + w.cAll + b.cSpace + w.cduplicate + b.cSpace + w.ccommand + b.cSpace + w.cAliases + b.cSpace + w.cvalidation + b.cSpace + w.ctests + b.cExclamation;
// About to call the rule broker to process on the number of single quotes
export const cgetCommandArgsMessage1 = w.cAbout + b.cSpace + b.cto + b.cSpace + w.ccall + b.cSpace + w.cthe + b.cSpace + w.crule + b.cSpace + w.cbroker + b.cSpace + b.cto + b.cSpace + w.cprocess + b.cSpace + b.con + b.cSpace + w.cthe + b.cSpace + w.cnumber + b.cSpace + b.cof + b.cSpace + w.csingle + b.cSpace + w.cquotes + b.cSpace; // About to call the rule broker to process on the number of single quotes
// and determine if it-be even or odd
export const cgetCommandArgsMessage2 = w.cand + b.cSpace + w.cdetermine + b.cSpace + b.cif + b.cSpace + b.cit + b.cDash + b.cbe + b.cSpace + w.ceven + b.cSpace + b.cor + b.cSpace + w.codd;
// WARNING: Command does not exist, please enter a valid command and try again!
export const cexecuteCommandMessage1 = w.cWARNING + b.cColon + b.cSpace + w.cCommand + b.cSpace + w.cdoes + b.cSpace + g.cnot + b.cSpace + w.cexist + b.cComa + b.cSpace + w.cplease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.ccommand + b.cSpace + w.cand + b.cSpace + w.ctry + b.cSpace + w.cagain + b.cExclamation;
// WARNING: lexical.parseBusinessRuleArgument: Invalid combination of inputs to the lexical.parseBusinessRuleArgument function!
export const cparseBusinessRuleArgumentMessage1 = w.cWARNING + b.cColon + b.cSpace + w.clexical + b.cDot + w.cparse + w.cBusiness + w.cRule + w.cArgument + b.cColon + b.cSpace + w.cInvalid + b.cSpace + w.ccombination + b.cSpace + b.cof + b.cSpace + w.cinputs + b.cSpace + b.cto + b.cSpace + w.cthe + b.cSpace + w.clexical + b.cDot + w.cparse + w.cBusiness + w.cRule + w.cArgument + b.cSpace + w.cfunction + b.cExclamation + b.cSpace;
export const cparseBusinessRuleArgumentMessage2 = w.cPlease + b.cSpace + w.cadjust + b.cSpace + w.cinputs + b.cSpace + w.cand + b.cSpace + w.ctry + b.cSpace + w.cagain + b.cDot; //Please adjust inputs and try again.
// Caught the case that the user may have only specified a single data hive, such as the configuration data hive.
export const cprintDataHiveAttributesMessage1 = w.cCaught + b.cSpace + w.cthe + b.cSpace + w.ccase + b.cSpace + w.cthe + b.cSpace + w.cuser + b.cSpace + w.cmay + b.cSpace + w.chave + b.cSpace + w.conly + b.cSpace + w.cspecified + b.cSpace + b.ca + b.cSpace + w.csingle + b.cSpace + w.cdata + b.cSpace + w.chive + b.cComa + b.cSpace;
export const cprintDataHiveAttributesMessage2 = w.csuch + b.cSpace + b.cas + b.cSpace + w.cthe + b.cSpace + w.cconfiguration + b.cSpace + w.cdata + b.cSpace + w.chive + b.cDot;
// ERROR: Please enter a valid name.space.attributeName for the system to print out attribute data from.
export const cprintDataHiveAttributesMessage3 = w.cERROR + b.cColon + b.cSpace + w.cPlease + b.cSpace + w.center + b.cSpace + b.ca + b.cSpace + w.cvalid + b.cSpace + w.cname + b.cDot + w.cspace + b.cDot + w.cattribute + w.cName + b.cSpace + w.cfor + b.cSpace + w.cthe + b.cSpace + w.csystem + b.cSpace + b.cto + b.cSpace + w.cprint + b.cSpace + w.cout + b.cSpace + w.cattribute + b.cSpace + w.cdata + b.cSpace + w.cfrom + b.cDot;

// File Types
export const cCatia = b.cCa + b.cti + b.ca; // Catia
export const cDocument = w.cDocument; // Document
export const cDocuments = cDocument + b.cs; // Documents
export const cDraft = b.cDr + p.caft; // Draft
export const cDWG = b.cDW + b.cG; // DWG
export const cHoops = b.cH + w.coops; // Hoops
export const cHOOPS = b.cH + w.cOOPS; // HOOPS
export const cImage = b.cIm + p.cage; // Image
export const cImages = cImage + b.cs; // Images
export const cInventor = p.cInv + b.cen + p.ctor; // Inventor
export const cNeutral = b.cNe + b.cut + p.cral; // Neutral
export const cNX = b.cNX; // NX
export const cParasolid = b.cP + p.cara + w.csolid; // Parasolid
export const cProE = p.cPro + b.cE; // ProE
export const cRhino = b.cRh + p.cino; // Rhino
export const cSolidEdge = w.cSolid + w.cEdge; // SolidEdge
export const cSolidWorks = w.cSolid + w.cWorks; // SolidWorks
export const cvrml = b.cvr + b.cml; // vrml
export const cVrml = b.cVr + b.cml; // Vrml
export const cVRML = b.cVR + b.cML; // VRML

// UI Element Types
export const cButton = b.cBu + b.ctt + b.con; // Button

// Environment Variables
export const cQA = b.cQA; // QA
export const cDEV = b.cDE + b.cV; // DEV
export const cProd = p.cPro + b.cd; // Prod
export const cPROD = p.cPRO + b.cD; // PROD
export const cPre = p.cPre; // Pre
export const cPRE = p.cPRE; // PRE
export const cPreProd = p.cPre + cProd; // PreProd
export const cPREPROD = p.cPRE + cPROD; // PREPROD

// Key Combinations
export const cctrl_a = p.cctrl + b.cPlus + b.ca; // ctrl+a
export const cctrl_b = p.cctrl + b.cPlus + b.cb; // ctrl+b
export const cctrl_c = p.cctrl + b.cPlus + b.cc; // ctrl+c
export const cctrl_d = p.cctrl + b.cPlus + b.cd; // ctrl+d
export const cctrl_e = p.cctrl + b.cPlus + b.ce; // ctrl+e
export const cctrl_f = p.cctrl + b.cPlus + b.cf; // ctrl+f
export const cctrl_g = p.cctrl + b.cPlus + b.cg; // ctrl+g
export const cctrl_h = p.cctrl + b.cPlus + b.ch; // ctrl+h
export const cctrl_i = p.cctrl + b.cPlus + b.ci; // ctrl+i
export const cctrl_j = p.cctrl + b.cPlus + b.cj; // ctrl+j
export const cctrl_k = p.cctrl + b.cPlus + b.ck; // ctrl+k
export const cctrl_l = p.cctrl + b.cPlus + b.cl; // ctrl+l
export const cctrl_m = p.cctrl + b.cPlus + b.cm; // ctrl+m
export const cctrl_n = p.cctrl + b.cPlus + b.cn; // ctrl+n
export const cctrl_o = p.cctrl + b.cPlus + b.co; // ctrl+o
export const cctrl_p = p.cctrl + b.cPlus + b.cp; // ctrl+p
export const cctrl_q = p.cctrl + b.cPlus + b.cq; // ctrl+q
export const cctrl_r = p.cctrl + b.cPlus + b.cr; // ctrl+r
export const cctrl_s = p.cctrl + b.cPlus + b.cs; // ctrl+s
export const cctrl_t = p.cctrl + b.cPlus + b.ct; // ctrl+t
export const cctrl_u = p.cctrl + b.cPlus + b.cu; // ctrl+u
export const cctrl_v = p.cctrl + b.cPlus + b.cv; // ctrl+v
export const cctrl_w = p.cctrl + b.cPlus + b.cw; // ctrl+w
export const cctrl_x = p.cctrl + b.cPlus + b.cx; // ctrl+x
export const cctrl_y = p.cctrl + b.cPlus + b.cy; // ctrl+y
export const cctrl_z = p.cctrl + b.cPlus + b.cz; // ctrl+z

export const cApplicationName = w.cApplication + w.cName; // ApplicationName
export const cApplicationRootPath = w.cApplication + w.cRoot + w.cPath; // ApplicationRootPath
export const cApplicationCleanedRootPath = w.cApplication + w.cCleaned + w.cRoot + w.cPath; // ApplicationCleanedRootPath
export const cConfigurationPath = w.cConfiguration + w.cPath; // ConfigurationPath
export const cApplicationVersionNumber = w.cApplication + w.cVersion + w.cNumber; // ApplicationVersionNumber
export const cApplicationDescription = w.cApplication + w.cDescription; // ApplicationDescription
export const cDataPath = w.cData + w.cPath; // DataPath
export const cCtempPath = b.cc + b.cColon + b.cForwardSlash + p.ctemp + b.cForwardSlash; // CtempPath
export const cPageDataPath = w.cPage + cDataPath; // PageDataPath
export const cWorkflowDataPath = w.cWorkflow + cDataPath; // WorkflowDataPath
export const cKeywordsDataPath = w.cKeywords + cDataPath; // KeywordsDataPath
export const cLocatorsDataPath = w.cLocators + cDataPath; // LocatorsDataPath
export const cConstantsPath = w.cConstants + w.cPath;
export const cConstantsPathActual = w.csrc + b.cForwardSlash + cFramework + b.cForwardSlash + w.cConstants + b.cForwardSlash; // src/Framework/Constants/
export const cclientRulesLibrary = w.cclient + w.cRules + w.cLibrary; // clientRulesLibrary
export const cCommandQueue = w.cCommand + w.cQueue; // CommandQueue
export const cConstantsValidationData = w.cConstants + w.cValidation + w.cData; // ConstantsValidationData
export const cBasicConstantsValidation = w.cBasic + w.cConstants + w.cValidation; // BasicConstantsValidation
export const cColorConstantsValidation = w.cColor + w.cConstants + w.cValidation; // ColorConstantsValidation
export const cElementConstantsValidation = w.cElement + w.cConstants + w.cValidation; // ElementConstantsValidation
export const cGenericConstantsValidation = w.cGeneric + w.cConstants + w.cValidation; // GenericConstantsValidation
export const cIsotopeConstantsValidation = w.cIsotope + w.cConstants + w.cValidation; // IsotopeConstantsValidation
export const cNumericConstantsValidation = w.cNumeric + w.cConstants + w.cValidation; // NumericConstantsValidation
export const cPhonicsConstantsValidation = w.cPhonics + w.cConstants + w.cValidation; // PhonicsConstantsValidation
export const cShapeConstantsValidation = w.cShape + w.cConstants + w.cValidation; // ShapeConstantsValidation
export const cSystemConstantsValidation = w.cSystem + w.cConstants + w.cValidation; // SystemConstantsValidation
export const cUnitsConstantsValidation = w.cUnits + w.cConstants + w.cValidation; // UnitsConstantsValidation
export const cWordConstantsValidation = w.cWord + w.cConstants + w.cValidation; // WordConstantsValidation
export const cSourceResourcesPath = w.cSource + w.cResources + w.cPath; // SourceResourcesPath
export const cDestinationResourcesPath = w.cDestination + w.cResources + w.cPath; // BinaryResourcesPath
export const cBinaryRootPath = w.cBinary + w.cRoot + w.cPath; // BinaryRootPath
export const cBinaryReleasePath = w.cBinary + w.cRelease + w.cPath; // BinaryReleasePath

// Constants Filenames
export const cbasic_constants_js = w.cbasic + b.cDot + w.cconstants + b.cDot + b.cjs; // basic.constants.js
export const ccolor_constants_js = w.ccolor + b.cDot + w.cconstants + b.cDot + b.cjs; // color.constants.js
export const celement_constants_js = w.celement + b.cDot + w.cconstants + b.cDot + b.cjs; // element.constants.js
export const cgeneric_constants_js = w.cgeneric + b.cDot + w.cconstants + b.cDot + b.cjs; // generic.constants.js
export const cisotope_constants_js = w.cisotope + b.cDot + w.cconstants + b.cDot + b.cjs; // isotope.constants.js
export const cnumeric_constants_js = w.cnumeric + b.cDot + w.cconstants + b.cDot + b.cjs; // numeric.constants.js
export const cphonics_constants_js = w.cphonics + b.cDot + w.cconstants + b.cDot + b.cjs; // phonics.constants.js
export const cshape_constants_js = w.cshape + b.cDot + w.cconstants + b.cDot + b.cjs; // shape.constants.js
export const csystem_constants_js = w.csystem + b.cDot + w.cconstants + b.cDot + b.cjs; // system.constants.js
export const cunits_constants_js = w.cunits + b.cDot + w.cconstants + b.cDot + b.cjs; // units.constants.js
export const cword_constants_js = w.cword + b.cDot + w.cconstants + b.cDot + b.cjs; // word.constants.js

// Configuration Settings
export const cmetaDataDotJson = w.cmetaData + b.cDot + g.cjson; // metaData.json
export const cArgumentDrivenInterface = w.cArgument + w.cDriven + w.cInterface; // ArgumentDrivenInterface
export const cFigletFont = w.cFiglet + w.cFont; // FigletFont
export const cPrimaryCommandDelimiter = w.cPrimary + w.cCommand + w.cDelimiter; // PrimaryCommandDelimiter
export const cSecondaryCommandDelimiter = w.cSecondary + w.cCommand + w.cDelimiter; // SecondaryCommandDelimiter
export const cTertiaryCommandDelimiter = w.cTertiary + w.cCommand + w.cDelimiter; // TertiaryCommandDelimiter
export const cEnableBusinessRuleOutput = w.cEnable + w.cBusiness + w.cRule + w.cOutput; // EnableBusinessRuleOutput
export const cEnableBusinessRulePerformanceMetrics = w.cEnable + w.cBusiness + w.cRule + w.cPerformance + w.cMetrics; // EnableBusinessRulePerformanceMetrics
export const cEnableCommandPerformanceMetrics = w.cEnable + w.cCommand + w.cPerformance + w.cMetrics; // EnableCommandPerformanceMetrics
export const cEnableConstantsValidation = w.cEnable + w.cConstants + w.cValidation; // EnableConstantsValidation
export const cEnableConstantsPatternGeneration = w.cEnable + w.cConstants + w.cPattern + w.cGeneration; // EnableConstantsPatternGeneration
export const cDisplayIndividualConstantsValidationPassMessages = w.cDisplay + w.cIndividual + w.cConstants + w.cValidation + w.cPass + w.cMessages; // DisplayIndividualConstantsValidationPassMessages
export const cDisplayIndividualConstantsValidationFailMessages = w.cDisplay + w.cIndividual + w.cConstants + w.cValidation + w.cFail + w.cMessages; // DisplayIndividualConstantsValidationFailMessages
export const cDisplaySummaryConstantsValidationPassMessages = w.cDisplay + w.cSummary + w.cConstants + w.cValidation + w.cPass + w.cMessages; // DisplaySummaryConstantsValidationPassMessages
export const cDisplaySummaryConstantsValidationFailMessages = w.cDisplay + w.cSummary + w.cConstants + w.cValidation + w.cFail + w.cMessages; // DisplaySummaryConstantsValidationFailMessages
export const cPassAllConstantsValidations = w.cPass + w.cAll + w.cConstants + w.cValidations; // PassAllConstantsValidations
export const cPassedAllCommandAliasesDuplicateChecks = w.cPassed + w.cAll + w.cCommand + w.cAliases + w.cDuplicate + w.cChecks
export const cdeploymentCompleted = w.cdeployment + w.cCompleted; // deploymentCompleted
export const creleaseCompleted = w.crelease + w.cCompleted; // releaseCompleted

// Test Time Tracking
export const cBeginDateTimeStamp = w.cBegin + cDateTimeStamp; // BeginDateTimeStamp
export const cEndDateTimeStamp = w.cEnd + cDateTimeStamp; // EndDateTimeStamp
export const cItemsIndividuallySynch = w.cItems + w.cIndividually + w.cSynch; // ItemsIndividuallySynch
export const cTimeStampVariableName = cTimeStamp + w.cVariable + w.cName; // TimeStampVariableName
export const cBeginTimeStampVariableName = w.cBegin + cTimeStampVariableName; // BeginTimeStampVariableName
export const cEndTimeStampVariableName = w.cEnd + cTimeStampVariableName; // EndTimeStampVariableName
export const cBusinessRulePerformanceTrackingStack = w.cBusiness + w.cRule + w.cPerformance + w.cTracking + w.cStack; // BusinessRulePerformanceTrackingStack
export const cBusinessRuleNamesPerformanceTrackingStack = w.cBusiness + w.cRule + w.cNames + w.cPerformance + w.cTracking + w.cStack; // BusinessRuleNamesPerformanceTrackingStack
export const cBusinessRulesPerformanceAnalysisStack = w.cBusiness + w.cRules + w.cPerformance + w.cAnalysis + w.cStack; // BusinessRulesPerformanceAnalysisStack
export const cClearBusinessRulesPerformanceDataAfterAnalysis = w.cClear + w.cBusiness + w.cRules + w.cPerformance + w.cData + w.cAfter + w.cAnalysis; // ClearBusinessRulesPerformanceDataAfterAnalysis
export const cCommandPerformanceTrackingStack = w.cCommand + w.cPerformance + w.cTracking + w.cStack; // CommandPerformanceTrackingStack
export const cCommandNamesPerformanceTrackingStack = w.cCommand + w.cNames + w.cPerformance + w.cTracking + w.cStack; // CommandNamesPerformanceTrackingStack
export const cCommandsPerformanceAnalysisStack = w.cCommands + w.cPerformance + w.cAnalysis + w.cStack; // CommandsPerformanceAnalysisStack
export const cClearCommandPerformanceDataAfterAnalysis = w.cClear + w.cCommand + w.cPerformance + w.cData + w.cAfter + w.cAnalysis; // ClearCommandPerformanceDataAfterAnalysis

// Business Rules
export const cecho = b.cec + b.cho; // echo
export const cEcho = b.cEc + b.cho; // Echo
// ********************************
// StringParsing rules in order
// ********************************
export const cstringToBoolean = w.cstring + w.cTo + w.cBoolean; // stringToBoolean
export const cstringToDataType = w.cstring + w.cTo + w.cData + w.cType; // stringToDataType
export const cdetermineObjectDataType = w.cdetermine + w.cObject + w.cData + w.cType; // determineObjectDataType
export const cisBoolean = w.cis + w.cBoolean; // isBoolean
export const cisInteger = w.cis + w.cInteger; // isInteger
export const cisFloat = w.cis + w.cFloat; // isFloat
export const cisString = w.cis + w.cString; // isString
export const csingleQuoteSwapAfterEquals = w.csingle + w.cQuote + w.cSwap + w.cAfter + w.cEquals; // singleQuoteSwapAfterEquals
export const cswapForwardSlashToBackSlash = w.cswap + cForwardSlash + b.cTo + cBackSlash; // swapForwadSlashToBackSlash
export const cswapBackSlashToForwardSlash = w.cswap + cBackSlash + b.cTo + cForwardSlash; // swapBackSlashToForwardSlash
export const cswapDoubleForwardSlashToSingleForwardSlash = w.cswap + w.cDouble + cForwardSlash + b.cTo + w.cSingle + cForwardSlash; // swapDoubleForwardSlashToSingleForwardSlash
export const cswapDoubleBackSlashToSingleBackSlash = w.cswap + w.cDouble + cBackSlash + b.cTo + w.cSingle + cBackSlash; // swapDoubleBackSlashToSingleBackSlash
export const cgetUserNameFromEmail = w.cget + w.cUser + w.cName + w.cFrom + w.cEmail; // getUserNameFromEmail
export const creplaceSpacesWithPlus = w.creplace + w.cSpaces + w.cWith + w.cPlus; // replaceSpacesWithPlus
export const creplaceColonWithUnderscore = w.creplace + w.cColon + w.cWith + cUnderscore; // replaceColonWithUnderscore
export const ccleanCarriageReturnFromString = w.cclean + cCarriageReturn + w.cFrom + w.cString; // cleanCarriageReturnFromString
export const cconvertStringToLowerCase = w.cconvert + w.cString + w.cTo + cLowerCase; // convertStringToLowerCase
export const cconvertStringToUpperCase = w.cconvert + w.cString + w.cTo + cUpperCase; // convertStringToUpperCase
export const cgetFileNameFromPath = w.cget + cFileName + w.cFrom + w.cPath; // getFileNameFromPath
export const cgetFileExtension = w.cget + w.cFile + w.cExtension; // getFileExtension
export const cremoveDotFromFileExtension = w.cremove + p.cDot + w.cFrom + w.cFile + w.cExtension; // removeDotFromFileExtension
export const cremoveFileExtensionFromFileName = w.cremove + w.cFile + w.cExtension + w.cFrom + cFileName; // removeFileExtensionFromFileName
export const cgetValueFromAssignmentOperationString = w.cget + w.cValue + w.cFrom + w.cAssignment + w.cOperation + w.cString; // getValueFromAssignmentOperationString
export const caggregateNumericalDifferenceBetweenTwoStrings = w.caggregate + w.cNumerical + w.cDifference + w.cBetween + n.cTwo + w.cStrings; // aggregateNumericalDifferenceBetweenTwoStrings
export const ccountCamelCaseWords = w.ccount + w.cCamel + w.cCase + w.cWords; // countCamelCaseWords
export const cdoesStringContainAcronym = w.cdoes + w.cString + w.cContain + w.cAcronym; // doesStringContainAcronym
export const ccountDelimiterInString = w.ccount + w.cDelimiter + b.cIn + w.cString; // countDelimiterInString
export const cdetermineWordDelimiter = w.cdetermine + w.cWord + w.cDelimiter; // determineWordDelimiter
export const cgetWordCountInString = w.cget + w.cWord + w.cCount + b.cIn + w.cString; // getWordCountInString
export const cdoesStringContainUpperCaseCharacter = w.cdoes + w.cString + w.cContain + cUpperCase + w.cCharacter; // doesStringContainUpperCaseCharacter
export const cdoesStringContainLowerCaseCharacter = w.cdoes + w.cString + w.cContain + cLowerCase + w.cCharacter; // doesStringContainLowerCaseCharacter
export const cisFirstCharacterLowerCase = b.cis + n.cFirst + w.cCharacter + cLowerCase; // isFirstCharacterLowerCase
export const cisFirstCharacterUpperCase = b.cis + n.cFirst + w.cCharacter + cUpperCase; // isFirstCharacterUpperCase
export const cisStringList = b.cis + w.cString + w.cList; // isStringList
export const cisStringCamelCase = b.cis + w.cString + w.cCamel + w.cCase; // isStringCamelCase
export const cmapWordToCamelCaseWord = p.cmap + w.cWord + b.cTo + w.cCamel + w.cCase + w.cWord; // mapWordToCamelCaseWord
export const csimplifyAndConsolidateString = w.csimplify + w.cAnd + w.cConsolidate + w.cString; // simplifyAndConsolidateString
export const ccompareSimplifiedAndConsolidatedStrings = w.ccompare + w.cSimplified + w.cAnd + w.cConsolidated + w.cStrings; // compareSimplifiedAndConsolidatedStrings
export const cascertainMatchingFilenames = w.cascertain + w.cMatching + cFilenames; // ascertainMatchingFilenames
export const cvalidateConstantsDataValidation = w.cvalidate + w.cConstants + w.cData + w.cValidation; // validateConstantsDataValidation
export const cdetermineConstantsContextQualifiedPrefix = w.cdetermine + w.cConstants + w.cContext + w.cQualified + w.cPrefix; // determineConstantsContextQualifiedPrefix
export const cdetermineSuggestedConstantsValidationLineOfCode = w.cdetermine + w.cSuggested + w.cConstants + w.cValidation + w.cLine + b.cOf + w.cCode; // determineSuggestedConstantsValidationLineOfCode
export const cvalidateConstantsDataValidationLineItemName = cvalidateConstantsDataValidation + w.cLine + w.cItem + w.cName; // validateConstantsDataValidationLineItemName
export const cdoesConstantExist = w.cdoes + w.cConstant + w.cExist; // doesConstantExist
export const cgetConstantType = w.cget + w.cConstant + w.cType; // getConstantType
export const cgetConstantActualValue = w.cget + w.cConstant + w.cActual + w.cValue; // getConstantActualValue
export const cgetConstantName = w.cget + w.cConstant + w.cName; // getConstantName
export const cfindConstantName = w.cfind + w.cConstant + w.cName; // findConstantName
export const cisConstantTypeValid = b.cis + w.cConstant + w.cType + w.cValid; // isConstantTypeValid
export const cconvertConstantTypeToConstantPrefix = w.cconvert + w.cConstant + w.cType + b.cTo + w.cConstant + w.cPrefix; // convertConstantTypeToConstantPrefix
export const cconstantsOptimizedFulfillmentSystem = w.cconstants + w.cOptimized + w.cFulfillment + w.cSystem; // constantsOptimizedFulfillmentSystem
export const cconstantsFulfillmentSystem = w.cconstants + w.cFulfillment + w.cSystem; // constantsFulfillmentSystem
export const cvalidateConstantsDataValues = w.cvalidate + w.cConstants + w.cData + w.cValues; // validateConstantsDataValues
export const cisValidCommandNameString = b.cis + w.cValid + w.cCommand + w.cName + w.cString; // isValidCommandNameString
export const cisConstantValid = b.cis + w.cConstant + w.cValid; // isConstantValid
export const ccountDuplicateCommandAliases = w.ccount + w.cDuplicate + w.cCommand + w.cAliases; // countDuplicateCommandAliases
export const cgetDataCatagoryFromDataContextName = w.cget + w.cData + w.cCatagory + w.cFrom + w.cData + w.cContext + w.cName; // getDataCatagoryFromDataContextName
export const cgetDataCatagoryDetailNameFromDataContextName = w.cget + w.cData + w.cCatagory + w.cDetail + w.cName + w.cFrom + w.cData + w.cContext + w.cName; // getDataCatagoryDetailNameFromDataContextName
export const cgetKeywordNameFromDataContextName = w.cget + w.cKeyword + w.cName + w.cFrom + w.cData + w.cContext + w.cName; // getKeywordNameFromDataContextName
export const cparseSystemRootPath = w.cparse + w.cSystem + w.cRoot + w.cPath; // parseSystemRootPath
export const creplaceDoublePercentWithMessage = w.creplace + w.cDouble + w.cPercent + w.cWith + w.cMessage; // replaceDoublePercentWithMessage
export const cremoveXnumberOfFoldersFromEndOfPath = w.cremove + b.cX + w.cnumber + b.cOf + w.cFolders + w.cFrom + w.cEnd + b.cOf + w.cPath; // removeXnumberOfFoldersFromEndOfPath
export const cgetFirstTopLevelFolderFromPath = w.cget + n.cFirst + w.cTop + w.cLevel + w.cFolder + w.cFrom + w.cPath; // getFirstTopLevelFolderFromPath
export const cloadDataFile = w.cload + w.cData + w.cFile; // loadDataFile
export const csupportedFileFormatsAre = w.csupported + w.cFile + w.cFormats + w.cAre; // supportedFileFormatsAre
export const cgetAttributeName = w.cget + w.cAttribute + w.cName; // getAttributeName
export const cgetAttributeValue = w.cget + w.cAttribute + w.cValue; // getAttributeValue
export const cisOdd = b.cis + w.cOdd; // isOdd
export const cisEven = b.cis + w.cEven; // isEven
export const ccleanCommandInput = w.cclean + w.cCommand + w.cInput; // cleanCommandInput
export const creplaceCharacterAtIndexOfString = w.creplace + w.cCharacter + b.cA + b.ct + w.cIndex + b.cOf + w.cString; // replaceCharacterAtIndexOfString

// *********************************
// ArrayParsing rules in order
// *********************************
export const creplaceCharacterWithCharacter = w.creplace + w.cCharacter + w.cWith + w.cCharacter; // replaceCharacterWithCharacter
export const cconvertCamelCaseStringToArray = w.cconvert + w.cCamel + w.cCase + w.cString + b.cTo + w.cArray; // convertCamelCaseStringToArray
export const cgetWordsArrayFromString = w.cget + w.cWords + w.cArray + w.cFrom + w.cString; // getWordsArrayFromString
export const cconvertArrayToCamelCaseString = w.cconvert + w.cArray + b.cTo + w.cCamel + w.cCase + w.cString; // convertArrayToCamelCaseString
export const cdoesArrayContainLowerCaseConsolidatedString = w.cdoes + w.cArray + w.cContain + w.cLower + w.cCase + w.cConsolidated + w.cString; // doesArrayContainLowerCaseConsolidatedString
export const cdoesArrayContainCharacter = w.cdoes + w.cArray + w.cContain + w.cCharacter; // doesArrayContainCharacter
export const cremoveCharacterFromArray = w.cremove + w.cCharacter + w.cFrom + w.cArray; // removeCharacterFromArray
export const cascertainMatchingElements = w.cascertain + w.cMatching + w.cElements; // acertainMatchingElements
export const cdoesArrayContainFilename = w.cdoes + w.cArray + w.cContain + cFilename; // doesArrayContainFilename
export const cgetLengthOfLongestStringInArray = w.cget + w.cLength + b.cOf + w.cLongest + w.cString + b.cIn + w.cArray; // getLengthOfLongestStringInArray
export const csearchForPatternsInStringArray = w.csearch + w.cFor + w.cPatterns + b.cIn + w.cString + w.cArray; // searchForPatternsInStringArray
export const cvalidatePatternsThatNeedImplementation = w.cvalidate + w.cPatterns + w.cThat + w.cNeed + w.cImplementation; // validatePatternsThatNeedImplementation
export const csolveLehmerCode = w.csolve + w.cLehmer + w.cCode; // solveLehmerCode
export const crecursiveArrayExpansion = w.crecursive + w.cArray + w.cExpansion; // recursiveArrayExpansion
export const cgetLehmerCodeValue = w.cget + w.cLehmer + w.cCode + w.cValue; // getLehmerCodeValue
export const carraysAreEqual = w.carrays + w.cAre + w.cEqual; // arraysAreEqual
export const cstoreData = w.cstore + w.cData; // storeData
export const cgetStoredData = w.cget + w.cStored + w.cData; // getStoredData
export const cisObjectEmpty = b.cis + w.cObject + w.cEmpty; // isObjectEmpty
export const cisArrayEmpty = b.cis + w.cArray + w.cEmpty; // isArrayEmpty
export const cisObject = b.cis + w.cObject; // isObject
export const cisArray = b.cis + w.cArray; // isArray
export const cisArrayOrObject = b.cis + w.cArray + b.cOr + w.cObject; // isArrayOrObject
export const cisNonZeroLengthArray = b.cis + p.cNon + n.cZero + w.cLength + w.cArray; // isNonZeroLengthArray
export const carrayDeepClone = w.carray + w.cDeep + w.cClone; // arrayDeepClone
export const creplaceCharacterAtIndex = w.creplace  + w.cCharacter + w.cAt + w.cIndex; // replaceCharacterAtIndex
export const cgenerateCommandAliases = w.cgenerate + w.cCommand + w.cAliases; // generateCommandAliases
export const caggregateCommandArguments = w.caggregate + w.cCommand + w.cArguments; // aggregateCommandArguments
export const cdoesArrayContainValue = w.cdoes + w.cArray + w.cContain + w.cValue; // doesArrayContainValue

// *********************************
// StringGeneration rules in order
// *********************************
export const cgenerateRandomMixedCaseTextByLength1 = cgenerateRandom + cMixedCase + cTextByLength + n.c1; // generateRandomMixedCaseTextByLength1
export const cgenerateRandomMixedCaseTextByLength2 = cgenerateRandom + cMixedCase + cTextByLength + n.c2; // generateRandomMixedCaseTextByLength2
export const cgenerateRandomUpperCaseTextByLength1 = cgenerateRandom + cUpperCase + cTextByLength + n.c1; // generateRandomUpperCaseTextByLength1
export const cgenerateRandomUpperCaseTextByLength2 = cgenerateRandom + cUpperCase + cTextByLength + n.c2; // generateRandomUpperCaseTextByLength2
export const cgenerateRandomLowerCaseTextByLength1 = cgenerateRandom + cLowerCase + cTextByLength + n.c1; // generateRandomLowerCaseTextByLength1
export const cgenerateRandomLowerCaseTextByLength2 = cgenerateRandom + cLowerCase + cTextByLength + n.c2; // generateRandomLowerCaseTextByLength2
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cMixedCase + cTextWithSpecialCharactersByLength + n.c1; // generateRandomMixedCaseTextWithSpecialCharactersByLength1
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cMixedCase + cTextWithSpecialCharactersByLength + n.c2; // generateRandomMixedCaseTextWithSpecialCharactersByLength2
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cUpperCase + cTextWithSpecialCharactersByLength + n.c1; // generateRandomUpperCaseTextWithSpecialCharactersByLength1
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cUpperCase + cTextWithSpecialCharactersByLength + n.c2; // generateRandomUpperCaseTextWithSpecialCharactersByLength2
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cLowerCase + cTextWithSpecialCharactersByLength + n.c1; // generateRandomLowerCaseTextWithSpecialCharactersByLength1
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cLowerCase + cTextWithSpecialCharactersByLength + n.c2; // generateRandomLowerCaseTextWithSpecialCharactersByLength2
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength1 = cgenerateRandom + cMixedCase + cAlphaNumericCodeByLength + n.c1; // generateRandomMixedCaseAlphaNumericCodeByLength1
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength2 = cgenerateRandom + cMixedCase + cAlphaNumericCodeByLength + n.c2; // generateRandomMixedCaseAlphaNumericCodeByLength2
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength1 = cgenerateRandom + cUpperCase + cAlphaNumericCodeByLength + n.c1; // generateRandomUpperCaseAlphaNumericCodeByLength1
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength2 = cgenerateRandom + cUpperCase + cAlphaNumericCodeByLength + n.c2; // generateRandomUpperCaseAlphaNumericCodeByLength2
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength1 = cgenerateRandom + cLowerCase + cAlphaNumericCodeByLength + n.c1; // generateRandomLowerCaseAlphaNumericCodeByLength1
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength2 = cgenerateRandom + cLowerCase + cAlphaNumericCodeByLength + n.c2; // generateRandomLowerCaseAlphaNumericCodeByLength2
export const cgenerateRandomNumericCodeByLength1 = cgenerateRandom + cNumericCodeByLength + n.c1; // generateRandomNumericCodeByLength1
export const cgenerateRandomNumericCodeByLength2 = cgenerateRandom + cNumericCodeByLength + n.c2; // generateRandomNumericCodeByLength2
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cMixedCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c1; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cMixedCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c2; // generateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cUpperCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c1; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cUpperCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c2; // generateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cLowerCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c1; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cLowerCase + cAlphaNumericCodeWithSpecialCharactersByLength + n.c2; // generateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2
export const cgenerateRandomSpecialCharacterCodeByLength1 = cgenerateRandom + cSpecialCharacterCodeByLength + n.c1; // generateRandomSpecialCharacterCodeByLength1
export const cgenerateRandomSpecialCharacterCodeByLength2 = cgenerateRandom + cSpecialCharacterCodeByLength + n.c2; // generateRandomSpecialCharacterCodeByLength2
export const cgenerateValidEmail1 = cgenerateValidEmail + n.c1; // generateValidEmail1
export const cgenerateValidEmail2 = cgenerateValidEmail + n.c2; // generateValidEmail2
export const cgenerateInvalidEmail1 = cgenerateInvalidEmail + n.c1; // generateInvalidEmail1
export const cgenerateInvalidEmail2 = cgenerateInvalidEmail + n.c2; // generateInvalidEmail2
export const cgenerateValidEmailWithSpecificSuffixAndDomainName1 = cgenerateValidEmail + cWithSpecificSuffixAndDomainName + n.c1; // generateValidEmailWithSpecificSuffixAndDomainName1
export const cgenerateValidEmailWithSpecificSuffixAndDomainName2 = cgenerateValidEmail + cWithSpecificSuffixAndDomainName + n.c2; // generateValidEmailWithSpecificSuffixAndDomainName2
export const cgenerateRandomValidEmail1 = w.cgenerate + cRandomValidEmail + n.c1; // generateRandomValidEmail1
export const cgenerateRandomValidEmail2 = w.cgenerate + cRandomValidEmail + n.c2; // generateRandomValidEmail2
export const cgenerateInvalidEmailWithSpecificSuffixAndDomainName1 = cgenerateInvalidEmail + cWithSpecificSuffixAndDomainName + n.c1; // generateInvalidEmailWithSpecificSuffixAndDomainName1
export const cgenerateInvalidEmailWithSpecificSuffixAndDomainName2 = cgenerateInvalidEmail + cWithSpecificSuffixAndDomainName + n.c2; // generateInvalidEmailWithSpecificSuffixAndDomainName2
export const cgenerateRandomInvalidEmail1 = w.cgenerate + cRandomInvalidEmail + n.c1; // generateRandomInvalidEmail1
export const cgenerateRandomInvalidEmail2 = w.cgenerate + cRandomInvalidEmail + n.c2; // generateRandomInvalidEmail2

// *********************************
// CharacterGeneration rules in order
// *********************************
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cMixedCase + cLetterOrSpecialCharacter + n.c1; // randomlyGenerateMixedCaseLetterOrSpecialCharacter1
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cMixedCase + cLetterOrSpecialCharacter + n.c2; // randomlyGenerateMixedCaseLetterOrSpecialCharacter2
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cUpperCase + cLetterOrSpecialCharacter + n.c1; // randomlyGenerateUpperCaseLetterOrSpecialCharacter1
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cUpperCase + cLetterOrSpecialCharacter + n.c2; // randomlyGenerateUpperCaseLetterOrSpecialCharacter2
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cLowerCase + cLetterOrSpecialCharacter + n.c1; // randomlyGenerateLowerCaseLetterOrSpecialCharacter1
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cLowerCase + cLetterOrSpecialCharacter + n.c2; // randomlyGenerateLowerCaseLetterOrSpecialCharacter2
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + w.cEither + cMixedCase + cLetterOrNumberOrSpecialCharacter + n.c1; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + w.cEither + cMixedCase + cLetterOrNumberOrSpecialCharacter + n.c2; // randomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + w.cEither + cUpperCase + cLetterOrNumberOrSpecialCharacter + n.c1; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + w.cEither + cUpperCase + cLetterOrNumberOrSpecialCharacter + n.c2; // randomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + w.cEither + cLowerCase + cLetterOrNumberOrSpecialCharacter + n.c1; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + w.cEither + cLowerCase + cLetterOrNumberOrSpecialCharacter + n.c2; // randomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2
export const crandomlyGenerateMixedCaseAlphaNumericCharacter1 = crandomlyGenerate + cMixedCase + cAlphaNumericCharacter + n.c1; // randomlyGenerateMixedCaseAlphaNumericCharacter1
export const crandomlyGenerateMixedCaseAlphaNumericCharacter2 = crandomlyGenerate + cMixedCase + cAlphaNumericCharacter + n.c2; // randomlyGenerateMixedCaseAlphaNumericCharacter2
export const crandomlyGenerateUpperCaseAlphaNumericCharacter1 = crandomlyGenerate + cUpperCase + cAlphaNumericCharacter + n.c1; // randomlyGenerateUpperCaseAlphaNumericCharacter1
export const crandomlyGenerateUpperCaseAlphaNumericCharacter2 = crandomlyGenerate + cUpperCase + cAlphaNumericCharacter + n.c2; // randomlyGenerateUpperCaseAlphaNumericCharacter2
export const crandomlyGenerateLowerCaseAlphaNumericCharacter1 = crandomlyGenerate + cLowerCase + cAlphaNumericCharacter + n.c1; // randomlyGenerateLowerCaseAlphaNumericCharacter1
export const crandomlyGenerateLowerCaseAlphaNumericCharacter2 = crandomlyGenerate + cLowerCase + cAlphaNumericCharacter + n.c2; // randomlyGenerateLowerCaseAlphaNumericCharacter2
export const crandomlyGenerateNumericCharacter1 = crandomlyGenerate + cNumericCharacter + n.c1; // randomlyGenerateNumericCharacter1
export const crandomlyGenerateNumericCharacter2 = crandomlyGenerate + cNumericCharacter + n.c2; // randomlyGenerateNumericCharacter2
export const crandomlyGenerateSpecialCharacter1 = crandomlyGenerate + cSpecialCharacter + n.c1; // randomlyGenerateSpecialCharacter1
export const crandomlyGenerateSpecialCharacter2 = crandomlyGenerate + cSpecialCharacter + n.c2; // randomlyGenerateSpecialCharacter2
export const crandomlyGenerateNumberInRange1 = crandomlyGenerate + cNumberInRange + n.c1; // randomlyGenerateNumberInRange1
export const crandomlyGenerateNumberInRange2 = crandomlyGenerate + cNumberInRange + n.c2; // randomlyGenerateNumberInRange2
export const crandomlyGenerateBooleanValue1 = crandomlyGenerate + cBooleanValue + n.c1; // randomlyGenerateBooleanValue1
export const crandomlyGenerateBooleanValue2 = crandomlyGenerate + cBooleanValue + n.c2; // randomlyGenerateBooleanValue2
export const crandomlyGenerateMixedCaseAlphabeticCharacter1 = crandomlyGenerate + cMixedCase + cAlphabeticCharacter + n.c1; // randomlyGenerateMixedCaseAlphabeticCharacter1
export const crandomlyGenerateMixedCaseAlphabeticCharacter2 = crandomlyGenerate + cMixedCase + cAlphabeticCharacter + n.c2; // randomlyGenerateMixedCaseAlphabeticCharacter2
export const crandomlyGenerateLowerCaseLetter1 = crandomlyGenerate + cLowerCase + w.cLetter + n.c1; // randomlyGenerateLowerCaseLetter1
export const crandomlyGenerateLowerCaseLetter2 = crandomlyGenerate + cLowerCase + w.cLetter + n.c2; // randomlyGenerateLowerCaseLetter2
export const crandomlyGenerateUpperCaseLetter1 = crandomlyGenerate + cUpperCase + w.cLetter + n.c1; // randomlyGenerateUpperCaseLetter1
export const crandomlyGenerateUpperCaseLetter2 = crandomlyGenerate + cUpperCase + w.cLetter + n.c2; // randomlyGenerateUpperCaseLetter2
export const cconvertNumberToUpperCaseLetter = w.cconvert + w.cNumber + w.cTo + cUpperCase + w.cLetter; // convertNumberToUpperCaseLetter
export const cconvertNumberToLowerCaseLetter = w.cconvert + w.cNumber + w.cTo + cLowerCase + w.cLetter; // convertNumberToLowerCaseLetter

// *********************************
// mathOperations rules in order
// *********************************
export const chex2rgbConversion = p.chex + n.c2 + p.crgb + w.cConversion; // hex2rgbConversion

// Commands
export const cSystemCommandsAliasesActualPath = b.cForwardSlash + cFramework + b.cForwardSlash + w.cResources + b.cForwardSlash + w.cCommands + b.cForwardSlash; // SystemCommandsAliasesActualPath
export const cSystemWorkflowsActualPath = b.cForwardSlash + cFramework + b.cForwardSlash + w.cResources + b.cForwardSlash + w.cWorkflows + b.cForwardSlash; // SystemWorkflowsActualPath
export const cDevSystemCommandsAliasesActualPath = w.csrc + cSystemCommandsAliasesActualPath; // DevSystemCommandsAliasesActualPath
export const cDevSystemWorkflowsActualPath = w.csrc + cSystemWorkflowsActualPath; // DevSystemWorkflowsActualPath
export const cProdSystemCommandsAliasesActualPath = w.cbin + cSystemCommandsAliasesActualPath; // ProdSystemCommasAliasesActualPath
export const cProdSystemWorkflowsActualPath = w.cbin + cSystemWorkflowsActualPath; // ProdSystemWorkflowsActualPath
export const cSystemCommandsAliasesPath = w.cSystem + w.cCommands + w.cAliases + w.cPath; // SystemCommandsAliasesPath
export const cClientCommandsAliasesPath = w.cClient + w.cCommands + w.cAliases + w.cPath; // ClientCommandsAliasesPath
export const cSystemWorkflowsPath = w.cSystem + w.cWorkflows + w.cPath; // SystemWorkflowsPath
export const cClientWorkflowsPath = w.cClient + w.cWorkflows + w.cPath; // ClientWorkflowsPath
// ********************************
// Nominal Commands in order
// ********************************
export const cechoCommand = cecho + w.cCommand; // echoCommand
export const cEchoCommand = cEcho + w.cCommand; // EchoCommand
export const cclearScreen = w.cclear + w.cScreen; // clearScreen
export const cworkflowHelp = w.cworkflow + w.cHelp; // workflowHelp
export const ccommandSequencer = w.ccommand + w.cSequencer; // commandSequencer
export const cprintDataHive = w.cprint + w.cData + w.cHive; // printDataHive
export const cprintDataHiveAttributes = w.cprint + w.cData + w.cHive + w.cAttributes; // printDataHiveAttributes
export const cclearDataStorage = w.cclear + w.cData + w.cStorage; // clearDataStorage
export const ccommandGenerator = w.ccommand + w.cGenerator; // commandGenerator
export const ccommandAliasGenerator = w.ccommand + w.cAlias + w.cGenerator; // commandAliasGenerator
export const cconstantsGenerator = w.cconstants + w.cGenerator; // constantsGenerator
export const cconstantsGeneratorList = cconstantsGenerator + w.cList; // constantsGeneratorList
export const cconstantsPatternRecognizer = w.cconstants + w.cPattern + w.cRecognizer; // constantsPatternRecognizer
export const cbusinessRulesMetrics = w.cbusiness + w.cRules + w.cMetrics; // businessRulesMetrics
export const ccommandMetrics = w.ccommand + w.cMetrics; // commandMetrics
export const cconvertColors = w.cconvert + w.cColors; // convertColors
// ********************************
// Unit Test Constants commands in order
// ********************************
export const cvalidateConstants = w.cvalidate + w.cConstants; // validateConstants
export const cvalidateCommandAliases = w.cvalidate + w.cCommand + w.cAliases; // validateCommandAliases

// ********************************
// System defined workflows
// ********************************
export const cStartupWorkflow = w.cWorkflow + b.cSpace + w.cstartup; // Workflow startup
export const cBuildWorkflow = w.cWorkflow + b.cSpace + w.cbuild; // Workflow build
export const cReleaseWorkflow = w.cWorkflow + b.cSpace + w.crelease; // Workflow release
