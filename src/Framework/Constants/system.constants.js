/**
 * @file system.constants.js
 * @module system-constants
 * @description Contains many re-usable word constants and compound words,
 * system defined acronyms, many of them derived from the basic-constants.
 * Also included are other constants like countries, named spoken languages, named geometric shapes and colors.
 * Also included are common files types, control key combinations, environment variable strings,
 * system defined words and codes, user interface object types,
 * and names of business rules/system defined named commands, etc...
 * @requires module:basic-constants
 * @requires module:generic-constants
 * @author Seth Hollingsead
 * @date 2020/06/04
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as b from './basic.constants';
import * as g from './generic.constants';

// Miscelaneious
export const c1a1d = 'a' + 'd'; // 'ca' & 'cd' is some how a reserved word.
export const cENV = b.cEN + b.cV;
export const cLOG = b.cLO + b.cG;
export const cENVIRONMENT = g.cENV + b.cIR + b.cON + g.cMENT;
export const cITERATION = b.cIT + b.cER + b.cAT + b.cIO + b.cN;
export const cSTYLE = b.cST + b.cYL + b.cE;
export const c3d = b.c3 + b.cd;
export const c3D = b.c3 + b.cD;
export const cout = b.co + b.cut;
export const cOut = b.cO + b.cut;
export const cLog = b.cL + b.cog;
export const clog = b.cl + b.cog;
export const cLogs = cLog + b.cs;
export const clogs = clog + b.cs;
export const cKey = b.cK + b.cey;
export const ckey = b.ck + b.cey;
export const cNode = b.cN + g.code;
export const cnode = b.cn + g.code;
export const curl = b.cur + b.cl; // 'url';
export const cURL = b.cUR + b.cL;
export const cNth = b.cN + b.cth;
export const cnth = b.cn + b.cth;

// Data Types
export const cString = b.cS + g.ctring;
export const cstring = b.cs + g.ctring;
export const cstrings = cstring + b.cs;
export const cStrings = cString + b.cs;
export const cinteger = b.ci + g.cnteger;
export const cInteger = b.cI + g.cnteger; // 'Integer';
export const cintegers = cinteger + b.cs;
export const cIntegers = cInteger + b.cs;
export const cfloat = b.cf + g.cloat;
export const cFloat = b.cF + g.cloat; // 'Float';
export const cfloats = cfloat + b.cs;
export const cFloats = cFloat + b.cs;
export const clong = b.cl + g.cong;
export const cLong = b.cL + g.cong; // 'Long';
export const clongs = clong + b.cs;
export const cLongs = cLong + b.cs;
export const cshort = b.cs + g.chort;
export const cShort = b.cS + g.chort; // 'Short';
export const cshorts = cshort + b.cs;
export const cShorts = cShort + b.cs;
export const cdouble = b.cd + g.couble;
export const cDouble = b.cD + g.couble; // 'Double';
export const cdoubles = cdouble + b.cs;
export const cDoubles = cDouble + b.cs;
export const cchar = b.cch + b.car;
export const cChar = b.cCh + b.car; // 'Char';
export const cchars = cchar + b.cs;
export const cChars = cChar + b.cs;
export const cboolean = b.cb + g.coolean;
export const cBoolean = b.cB + g.coolean;
export const cbooleans = cboolean + b.cs;
export const cBooleans = cBoolean + b.cs;
export const cobject = b.co + g.cbject;
export const cObject = b.cO + g.cbject;
export const cobjects = cobject + b.cs;
export const cObjects = cObject + b.cs;

// General Use Words
export const cword = b.cw + g.cord; // 'word';
export const cWord = b.cW + g.cord;
export const cOOPS = b.cO + g.cOPS;
export const cOops = b.cO + g.cops; // 'Oops';
export const coops = b.co + g.cops;
export const cConfiguration = b.cCo + b.cnf + b.cig + b.cur + b.ca + g.ction; // 'Configura' + b.ction;
export const cConfigurations = cConfiguration + b.cs;
export const cempty = b.cem + b.cpt + b.cy;
export const cEmpty = b.cEm + b.cpt + b.cy; // 'Empty';
export const cfull = b.cf + g.cull;
export const cFull = b.cF + g.cull;
export const ccreate = b.cc + g.create;
export const cCreate = b.cC + g.create; // 'Create';
export const cSubmit = b.cSu + b.cbm + b.cit; // 'Submit';
export const c_add = c1a1d + b.cd;
export const cAdd = b.cAd + b.cd; // 'Add';
export const cAdded = cAdd + b.ced;
export const cClose = b.cCl + b.cos + b.ce; // 'Close';
export const cOpen = b.cOp + b.cen; // 'Open';
export const cUpdate = b.cUp + g.cdate; // 'Update';
export const cEdit = b.cEd + b.cit; // 'Edit';
export const cDelete = b.cD + g.celete;
export const cdelete = b.cd + g.celete;
export const cAll = b.cAll; // 'All';
export const cAt = b.cAt; // 'At'; // Not to be confused with the b.cAt = '@'!!!
export const cSelect = b.cSe + b.cle + b.cct; // 'Select';
export const cCancel = b.cCa + b.cnc + b.cel; // 'Cancel';
export const cConfirm = b.cCo + b.cnf + b.cir + b.cm; // 'Confirm';
export const cAccount = b.cAc + b.cco + b.cun + b.ct; // 'Account';
export const cHamburger = b.cHa + b.cmb + b.cur + b.cge + b.cr; // 'Hamburger';
export const cMe = b.cM + b.ce;
export const cMenu = cMe + b.cnu; // 'nu';
export const cWith = b.cW + g.cith;
export const cwith = b.cw + g.cith;
export const cWithout = cWith + cout;
export const cDetail = b.cDe + b.cta + b.cil; // 'Detail';
export const cDetails = cDetail + b.cs;
export const cFront = b.cFr + b.con + b.ct; // 'Front';
export const cBack = b.cBa + b.cck; // 'Back';
export const cLeft = b.cLe + b.cft; // 'Left';
export const cRight = b.cRi + b.cgh + b.ct; // 'Right';
export const cTo = b.cTo // 'To';
export const cTop = cTo + b.cp;
export const cBottom = b.cBo + b.ctt + b.com; // 'Bottom';
export const cBegin = b.cBe + b.cgi + b.cn; // 'Begin';
export const cBEGIN = b.cBE + b.cGI + b.cN;
export const cBeginning = cBegin + b.cn + g.cing;
export const cEnd = b.cEn + b.cd; // 'End';
export const cEND = b.cEN + b.cD;
export const cEnding = cEnd + g.cing;
export const cThe = b.cTh + b.ce; // 'The';
export const cItem = b.cIt + b.cem; // 'Item';
export const cItems = cItem + b.cs;
export const cList = b.cLi + b.cst; // 'List';
export const cLists = cList + b.cs;
export const cShare = b.cS + g.chare;
export const cshare = b.cs + g.chare;
export const cShares = cShare + b.cs;
export const cshares = cshare + b.cs;
export const cShared = cShare + b.cd;
export const cshared = cshare + b.cd;
export const cUnShared = b.cUn + cShared;
export const cUnshared = b.cUn + cshared;
export const cUnshare = b.cUn + cshare;
export const cUnShare = b.cUn + cShare;
export const cview = b.cv + g.ciew;
export const cView = b.cV + g.ciew; // 'View';
export const cNew = b.cNe + b.cw; // 'New';
export const cLoad = b.cLo + 'ad'; // b.cad; // 'Load'; // NOTE: Apparently 'cad' is also a reserved word.
export const cClick = b.cC + g.click;
export const cclick = b.cc + g.click;
export const cPressKey = b.cP + g.cress + cKey;
export const cpressKey = b.cp + g.cress + cKey;
export const cexpect = b.cex + b.cpe + b.cct; // 'expect';
export const cnavigate = b.cn + g.cavigate;
export const cNavigate = b.cN + g.cavigate; // 'Navigate';
export const cSave = b.cSa + b.cve; // 'Save';
export const cDownload = b.cDo + b.cwn + b.clo + b.cad; // 'Download';
export const cNegative = b.cNe + b.cga + g.ctive; // 'Negative';
export const cPositive = b.cPo + b.csi + g.ctive;
export const cEntire = b.cEn + b.cti + b.cre; // 'Entire';
export const cinfo = b.cin + b.cfo;
export const cInfo = b.cIn + b.cfo; // 'Info';
export const cLink = b.cLi + b.cnk; // 'Link';
export const cLabel = b.cLa + b.cbe + b.cl; // 'Label';
export const cField = b.cFi + b.cel + b.cd; // 'Field';
export const cType = b.cT + g.cype;
export const ctype = b.ct + g.cype;
export const cTypes = cType + b.cs;
export const cValid = b.cV + g.calid;
export const cvalid = b.cv + g.calid;
export const cValidation = cValid + b.ca + g.ction;
export const cValidate = b.cVa + b.cli + g.cdate; // 'Validate';
export const cInvalid = b.cIn + cvalid;
export const cbug = b.cbu + b.cg;
export const cdebug = b.cde + cbug;
export const cDebug = b.cDe + cbug; // 'Debug';
export const cpage = b.cp + g.cage;
export const cPage = b.cP + g.cage;
export const cpages = cpage + b.cs;
export const cPages = cPage + b.cs;
export const cmessage = b.cme + b.css + g.cage;
export const cMessage = cMe + b.css + g.cage;
export const cScript = b.cSc + b.cri + b.cpt; // 'Script';
export const cScripts = cScript + b.cs;
export const cKeyword = cKey + cword;
export const ckeyword = ckey + cword;
export const cKeywords = cKeyword + b.cs;
export const ckeywords = ckeyword + b.cs;
export const cData = b.cD + g.cata;
export const cdata = b.cd + g.cata;
export const cResults = b.cRe + b.csu + b.clt + b.cs; // 'Results';
export const cwork = b.cwo + b.crk;
export const cWork = b.cWo + b.crk;
export const cflow = b.cfl + b.cow;
export const cFlow = b.cFl + b.cow;
export const cWorkflow = cWork + cflow; // 'Workflow';
export const cworkflow = cwork + cflow;
export const cworkflows = cworkflow + b.cs;
export const cWorkflows = cWorkflow + b.cs;
export const cTest = b.cT + g.cest;
export const cTEST = b.cTE + b.cST; // 'TEST';
export const ctest = b.ct + g.cest;
export const cTests = cTest + b.cs;
export const ctests = ctest + b.cs;
export const cTESTS = cTEST + b.cS;
export const cStatus = b.cSt + b.cat + b.cus;
export const cTestStatus = cTest + cStatus;
export const cTestStatusMessage = cTest + cStatus + cMessage;
export const cTestWorkflow = cTest + cWorkflow;
export const cBureau = b.cBu + b.cre + b.cau;
export const cExhaustive = b.cEx + b.cha + b.cus + b.cti + b.cve; // 'Exhaustive';
export const cBrowser = b.cBr + b.cow + b.cse + b.cr; // 'Browser';
export const cAction = b.cAc + g.ction; // 'Action';
export const cActions = cAction + b.cs;
export const cAutomation = b.cAu + b.cto + b.cma + g.ction; // 'Automation';
export const cnumber = b.cn + g.cumber;
export const cNumber = b.cN + g.cumber; // 'Number';
export const cHost = b.cHo + b.cst; // 'Host';
export const cOf = b.cOf;
export const cRow = b.cRo + b.cw; // 'Row';
export const cRun = b.cRu + b.cn; // 'Run';
export const cRows = cRow + b.cs;
export const cMaster = b.cMa + b.cst + b.cer; // 'Master';
export const cEnvironment = b.cEn + b.cvi + b.cro + b.cn + g.cment; // 'Environment';
export const cName = b.cN + g.came;
export const cname = b.cn + g.came;
export const ckeywordName = ckeyword + cName;
export const cKeywordName = cKeyword + cName;
export const cPageScriptName = cPage + cScript + cName;
export const cID = b.cID;
export const cid = b.cid;
export const cId = b.cId;
export const cmail = b.cma + b.cil; // 'mail';
export const cEmail = b.cE + cmail;
export const cEmails = cEmail + b.cs;
export const cReceive = b.cRe + b.cce + b.civ + b.ce; // 'Receive';
export const cReceived = cReceive + b.cd;
export const cdate = g.cdate;
export const cDate = b.cD + g.cate; // 'Date';
export const cTime = b.cT + g.cime; // 'Time';
export const ctime = b.ct + g.cime; // 'time';
export const cStamp = b.cSt + b.cam + b.cp; // 'Stamp';
export const cmediate = g.cmed + b.ci + g.cate;
export const cintermediate = g.cinter + cmediate;
export const cIntermediate = g.cInter + cmediate; // 'Intermediate';
export const cpath = b.cp + g.cath;
export const cPath = b.cP + g.cath; // 'Path';
export const cExit = b.cEx + b.cit; // 'Exit';
export const cViewer = b.cVi + b.cew + b.cer; // 'Viewer';
export const cPermission = b.cPe + b.crm + b.cis + b.csi + b.con; // 'Permission';
export const cBug = b.cBu + b.cg; // 'Bug';
export const cset = b.cse + b.ct;
export const cSet = b.cSe + b.ct; // 'Set';
export const csetting = cset + b.ct + g.cing;
export const cSetting = cSet + b.ct + g.cing;
export const cPreview = g.cPre + cview; // 'Preview';
export const cLimit = b.cLi + b.cmi + b.ct; // 'Limit';
export const cGate = b.cGa + b.cte;
export const cway = b.cwa + b.cy;
export const cWay = b.cWa + b.cy;
export const cGateway = cGate + cway; // 'Gateway';
export const cProcess = g.cPro + b.cce + b.css;
export const cProcessing = cProcess + g.cing; // 'Processing';
export const cComplete = b.cCo + b.cmp + b.cl + g.cete; // 'Complete';
export const cAnd = b.cAn + b.cd; // 'And';
export const cand = b.can + b.cd; // 'and';
export const cUser = b.cUs + b.cer; // 'User';
export const cAccess = b.cAc + b.cce + b.css; // 'Access';
export const cLevel = b.cLe + b.cve + b.cl; // 'Level';
export const cget = b.cge + b.ct;
export const cGet = b.cGe + b.ct; // 'Get';
export const cPut = b.cP + b.cut;
export const cput = b.cp + b.cut;
export const cFrom = b.cFr + b.com; // 'From';
export const creplace = b.cr + g.ceplace;
export const cReplace = b.cR + g.ceplace; // 'Replace';
export const cSpace = b.cSp + g.cace; // 'Space';
export const cSpaces = cSpace + g.cs; // 'Spaces';
export const cPlus = b.cPl + b.cus; // 'Plus';
export const cColon = b.cCo + b.clo + b.cn; // 'Colon';
export const cUnder = b.cUn + g.cder;
export const cscore = b.cs + g.ccore;
export const cScore = b.cS + g.ccore;
export const cCatagory = b.cCa + b.cta + b.cgo + b.cry; // 'Catagory';
export const cclean = b.cc + g.clean;
export const cClean = b.cC + g.clean; // 'Clean';
export const ccleaned = cclean + b.ced;
export const cCleaned = cClean + b.ced;
export const cCarriage = b.cCa + b.crr + b.ci + g.cage; // 'Carriage';
export const cturn = b.ctu + b.crn;
export const creturn = b.cre + cturn;
export const cReturn = b.cRe + cturn; // 'Return';
export const cconvert = b.cc + g.convert;
export const cConvert = b.cC + g.convert; // 'Convert';
export const cLow = b.cLo + b.cw;
export const cLower = cLow + b.cer; // 'Lower';
export const cCase = b.cC + g.case; // 'Case';
export const cmove = b.cmo + b.cve;
export const cremove = b.cre + cmove;
export const cRemove = b.cRe + cmove; // 'Remove';
export const cExtension = g.cExt + b.cen + b.cs + g.cion; // 'Extension';
export const cdig = b.cdi + b.cg;
export const cDig = b.cDi + b.cg;
export const cdigit = cdig + b.cit;
export const cDigit = cDig + b.cit; // 'Digit';
export const clet = b.cle + b.ct;
export const cLet = b.cLe + b.ct;
export const cLetter = cLet + b.ct + b.cer; // 'Letter';
export const cUpper = b.cUp + b.cp + b.cer; // 'Upper';
export const cCount = b.cCo + g.cunt; // 'Count';
export const cCounter = cCount + b.cer;
export const crandom = b.cr + g.candom;
export const cRandom = b.cR + g.candom; // 'Random';
export const crandomly = crandom + b.cly;
export const cRandomly = cRandom + b.cly;
export const cgenerate = b.cg + g.cenerate;
export const cGenerate = b.cG + g.cenerate; // 'Generate';
export const cParent = b.cP + g.carent;
export const cparent = b.cp + g.carent;
export const cValue = b.cVa + b.clu + b.ce; // 'Value';
export const cFind = b.cFi + b.cnd; // 'Find';
export const cFindValue = cFind + cValue;
export const cRange = b.cRa + b.cng + b.ce; // 'Range';
export const cNumeric = b.cNu + b.cme + b.cri + b.cc; // 'Numeric';
export const cNumerical = cNumeric + b.cal;
export const cLength = b.cLe + b.cng + b.cth; // 'Length';
export const cCode = b.cCo + b.cde; // 'Code';
export const cEither = b.cEi + b.cth + b.cer; // 'Either';
export const cEnabled = b.cEn + b.cab + b.cle + b.cd; // 'Enabled';
export const cdetermine = b.cd + g.cetermine;
export const cDetermine = b.cD + g.cetermine; // 'Determine';
export const cVariable = g.cVar + g.ci + g.cable; // 'Variable';
export const cVisibility = b.cV + g.cisibility;
export const cvisibility = b.cv + g.cisibility;
export const cDialog = b.cDi + b.ca + clog; // 'Dia' + clog;
export const cLibrary = b.cLi + b.cbr + b.car + b.cy; // 'Library';
export const cTable = b.cTa + b.cbl + b.ce; // 'Table';
export const cEqual = b.cEq + b.cua + b.cl; // 'Equal';
export const cEquals = cEqual + b.cs;
export const cRaw = b.cRa + b.cw; // 'Raw';
export const cOperation = g.cOperat + b.cion;
export const cOperating = g.cOperat + b.cing;
export const cSystem = b.cSy + b.cst + b.cem; // 'System';
export const cAssignment = b.cAs + b.si + b.cgn + g.cment; // 'Assignment';
export const cAbreviated = b.cAb + b.cre + b.cvi + b.cat + b.ced; // 'Abreviated';
export const cwait = b.cw + g.cait;
export const cWait = b.cW + g.cait;
export const cawait = b.ca + cwait; // 'await';
export const cHTML = b.cHT + b.cML;
export const chtml = b.cht + b.cml;
export const cinner = b.ci + g.cnner;
export const cInner = b.cI + g.cnner;
export const cOver = b.cOv + b.cer; // 'Over';
export const cRide = b.cR + g.cide;
export const cride = b.cr + g.cide;
export const cOverride = cOver + cride;
export const cActionOverride = cAction + cOverride;
export const cLocator = b.cLo + b.cca + b.cto + b.cr; // 'Locator';
export const cLocators = cLocator + b.cs;
export const cLocatorLibrary = cLocator + cLibrary;
export const cSelector = b.cS + g.celector;
export const cselector = b.cs + g.celector;
export const cSelectors = cSelector + b.cs;
export const cIndividual = b.cIn + b.cdi + b.cvi + b.cdu + b.cal; // 'Individual';
export const cIndividually = cIndividual + b.cly;
export const cExist = b.cEx + b.cis + b.ct; // 'Exist';
export const cExists = cExist + b.cs;
export const cAsynch = b.cAs + g.cynch;
export const cSynch = b.cS + b.cynch;
export const cSingular = b.cSi + b.cng + b.cul + b.car; // 'Singular';
export const cParallel = b.cPa + b.cra + b.cll + b.cel; // 'Parallel';
export const cMulti = b.cMu + b.clt + b.ci; // 'Multi';
export const cUnified = b.cUn + b.cif + b.cie + b.cd; // 'Unified';
export const cDefault = b.cDe + b.cfa + b.cul + b.ct; // 'Default';
export const csingle = b.cs + g.cingle;
export const cSingle = b.cS + g.cingle; // 'Single';
export const cQuote = b.cQu + b.cot + b.ce; // 'Quote';
export const cswap = b.cs + g.cwap;
export const cSwap = b.cS + g.cwap; // 'Swap';
export const cAfter = b.cAf + b.ct + b.cer; // 'After';
export const cOnce = b.cOn + b.cce;
export const cload = b.clo + 'ad'; // b.cad; // 'load'; // NOTE: Apparently 'cad' is also a reserved word.
export const cUpload = b.cUp + cload;
export const cStyle = b.cSt + b.cyl + b.ce; // 'Style';
export const cAssert = b.cAs + b.cse + b.crt; // 'Assert';
export const cLess = b.cL + g.cess;
export const cless = b.cl + g.cess;
export const cGreat = b.cGr + g.ceat;
export const cgreat = b.cgr + g.ceat;
export const cGreater = cGreat + b.cer;
export const cgreater = cgreat + b.cer;
export const cthen = b.ct + g.chen;
export const cThen = b.cT + g.chen;
export const cthan = b.ct + g.chan;
export const cThan = b.cT + g.chan;
export const cAssertExists = cAssert + cExists;
export const cAssertNotExists = cAssert + b.cNot + cExists;
export const cAssertValueEqual = cAssert + cValue + cEqual;
export const cAssertValueNotEqual = cAssert + cValue + b.cNot + cEqual;
export const cAssertValueLessThan = cAssert + cValue + cLess + cThan;
export const cAssertValueGreaterThan = cAssert + cValue + cGreater + cThan;
export const cAssertion = cAssert + b.cion;
export const cAssertionType = cAssertion + cType;
export const cUploadStyle = cUpload + cStyle;
export const cAssertionStyle = cAssertion + cStyle;
export const cby = b.cby;
export const cBy = b.cBy;
export const cBY = b.cBY;
export const cOr = b.cOr;
export const cor = b.cor;
export const cOR = b.cOR;
export const cMix = b.cMi + b.cx; // 'Mix';
export const cMixed = cMix + b.ced;
export const cAlpha = b.cA + g.clpha;
export const calpha = b.ca + g.clpha;
export const cbetic = b.cbe + b.cti + b.cc; // 'betic';
export const cAlphabetic = cAlpha + cbetic;
export const ctext = b.ct + g.cext;
export const cText = b.cT + g.cext;
export const cTEXT = b.cTE + b.cXT; // 'TEXT';
export const cContext = g.cCon + ctext;
export const cinput = b.cin + cput;
export const cInput = b.cIn + cput;
export const cDescription = b.cDe + b.csc + b.cri + b.cp + g.ction; // 'Descrip' + b.ction;
export const cConstant = g.cCon + b.cst + b.can + b.ct; // 'stant';
export const cIteration = b.cIt + b.cer + b.ca + g.ction; // 'Itera' + b.ction;
export const cProject = b.cP + g.croject;
export const cproject = b.cp + g.croject;
export const cProjects = cProject + b.cs;
export const cAdvance = b.cAd + b.cva + b.cnc + b.ce; // 'Advance';
export const cAdvanced = cAdvance + b.cd;
export const cCreation = b.cCr + b.cea + g.ction; // 'Crea' + b.ction;
export const ctestData = ctest + cData;
export const cpageData = cpage + cData;
export const cPageData = cPage + cData;
export const cTestName = cTest + cName;
export const cPageName = cPage + cName;
export const cWebkey = b.cWe + b.cb + ckey; // 'Web' + ckey;
export const cFile = b.cF + g.cile;
export const cFiles = cFile + b.cs;
export const cfile = b.cf + b.cile;
export const cfiles = cfile + b.cs;
export const cfold = b.cfo + b.cld;
export const cFold = b.cFo + b.cld;
export const cfolder = cfold + b.cer;
export const cFolder = cFold + b.cer;
export const cfolders = cfolder + b.cs;
export const cFolders = cFolder + b.cs;
export const ccafe = b.ca + b.cfe; // 'cafe';
export const ccert = b.cce + b.crt; // 'cert';
export const csrc = b.csr + b.cc;
export const cbin = b.cbi + b.cn;
export const csource = b.cs + g.cource;
export const cSource = b.cS + g.cource;
export const cresource = b.cre + csource;
export const cResource = b.cRe + csource;
export const cresources = cresource + b.cs; // 'resource' + b.cs;
export const cResources = cResource + b.cs;
export const cClass = b.cC + g.c_lass;
export const cclass = b.cc + g.c_lass;
export const cIngestion = b.cIn + b.cge + b.cs + g.ction; // 'Inges' + b.ction;
export const cis = b.cis;
export const cIs = b.cIs;
export const cIS = b.cIS;
export const ccheck = b.cc + g.check;
export const cCheck = b.cC + g.check;
export const cchecked = ccheck + b.ced;
export const cElement = b.cEl + b.ce + g.cment; // 'Element';
export const cElementName = cElement + cName;
export const cAllow = cAll + b.cow;
export const cAllowable = cAllow + g.cable;
export const cHome = b.cHo + b.cme; // 'Home';
export const cPublic = b.cPu + b.cbl + b.cic; // 'Public';
export const cSpecial = b.cSp + b.cec + b.cia + b.cal; // 'Special';
export const cCharacter = cChar + b.cac + g.cter; // 'Character';
export const cCharacters = cCharacter + b.cs;
export const cEdge = b.cEd + b.cge; // 'Edge';
export const cWorks = cWork + b.cs;
export const cSolid = b.cS + g.colid;
export const csolid = b.cs + g.colid;
export const cBinary = b.cBi + b.cna + b.cry; // 'Binary';
export const cTimeout = cTime + cout;
export const cTimeOut = cTime + cOut;
export const cDwell = b.cDw + b.cel + b.cl; // 'Dwell';
export const cExecute = b.cEx + b.cec + b.cut + b.ce; // 'Execute';
export const cSibling = b.cS + g.cibling;
export const csibling = b.cs + g.cibling;
export const cchild = b.cc + g.child;
export const cChild = b.cC + g.child;
export const cFilter = b.cF + g.cilter;
export const cfilter = b.cf + g.cilter;
export const cAttributes = b.cA + g.cttributes;
export const cattributes = b.ca + g.cttributes;
export const cDisabled = b.cD + g.cisabled;
export const cdisabled = b.cd + g.cisabled;
export const cMan = b.cMa + b.cn;
export const cman = b.cma + b.cn;
export const cWoman = b.cWo + cman;
export const cwoman = b.cwo + cman;
export const ccell = g.cel + b.cl;
export const cCell = g.Cel + b.cl;
export const cHung = b.cH + g.cung;
export const chung = b.ch + g.cung;
export const cport = b.cpo + b.crt;
export const cPort = b.cPo + b.crt;
export const cConstructor = b.cCo + b.cns + b.ctr + b.cu + g.cctor
export const cwarn = b.cw + g.carn;
export const cWarn = b.cW + g.carn;
export const cwarning = cwarn + g.cing; //b.cw + g.carning;
export const cWarning = cWarn + g.cing; //b.cW + g.carning;
export const cwarnings = cwarning + b.cs;
export const cWarnings = cWarning + b.cs;
export const cerror = b.ce + g.crror;
export const cError = b.cE + g.crror;
export const cDash = b.cDa + b.csh;
export const cboard = b.cbo + g.card;
export const cDashboard = cDash + cboard;
export const ccompose = b.co + b.cmp + g.cose;
export const cdecompose = b.cde + ccompose;
export const cDecompose = b.cDe + ccompose;
export const carray = b.car + g.cray;
export const cArray = b.cAr + g.cray;
export const ccamel = b.ca + g.cmel;
export const cCamel = b.Ca + g.cmel;
export const cround = b.cr + g.cound;
export const cRound = b.cR + g.cound;
export const crounded = cround + b.ced;
export const cRounded = cRound + b.ced;
export const cquart = b.cqu + g.cart;
export const cQuart = b.cQu + g.cart;
export const cquarter = cquart + b.cer;
export const cQuarter = cQuart + b.cer;
export const cquaternion = b.cqu + b.cat + b.cer + g.cnion;
export const cQuaternion = b.cQu + b.cat + b.cer + g.cnion;
export const cnormal = b.cn + g.cormal;
export const cNormal = b.cN + g.cormal;
export const cnormalize = cnormal + g.cize;
export const cNormalize = cNormal + g.cize;
export const cdegree = b.cd + g.cegree;
export const cDegree = b.cD + g.cegree;
export const cdegrees = cdegree + b.cs;
export const cDegrees = cDegree + b.cs;
export const cangle = b.can + g.cgle;
export const cAngle = b.cAn + g.cgle;
export const ctrap = b.ct + g.crap;
export const cTrap = b.cT + g.crap;
export const cFraction = g.cFra + g.cction;
export const cvector = b.cve + g.cctor;
export const cVector = b.cVe + g.cctor;
export const cform = b.cfo + b.crm;
export const ctransform = g.ctrans + cform;
export const cTransform = g.cTrans + cform;
export const cpoint = b.cpo + g.cint;
export const cPoint = b.cPo + g.cint;
export const clocation = g.cloc + g.cation;
export const cLocation = g.cLoc + g.cation;
export const cSort = b.cS + g.cort;
export const csort = b.cs + g.cort;
export const csimplify = g.csim + g.cplify;
export const cSimplify = g.cSim + g.cplify;
export const cconsolidate = g.ccon + g.csol + b.ci + cdate;
export const cConsolidate = g.cCon + g.csol + b.ci + cdate;
export const cConsolidated = cConsolidate + b.cd;
export const ccompare = g.ccomp + g.care;
export const cCompare = g.cComp + g.care;
export const ccontain = g.ccon + g.ctain;
export const cContain = g.cCon + g.ctain;
export const ccontains = ccontain + b.cs;
export const cContains = cContain + b.cs;
export const cvideo = b.cv + g.cideo;
export const cVideo = b.cV + g.cideo;
export const cProduct = g.cPro + g.cduct;
export const caggregate = b.ca + g.cggregate;
export const cAggregate = b.cA + g.cggregate;
export const cDifference = g.cDiff + b.cer + g.cence;
export const cbet = b.cbe + b.ct;
export const cBet = b.cBe + b.ct;
export const cbetween = cbet + g.cween;
export const cBetween = cBet + g.cween;
export const ccertain = b.cce + b.crt + g.cain;
export const cascertain = b.cas + ccertain;
export const cAscertain = b.cAs + ccertain;
export const cmatch = b.cma + g.ctch;
export const cMatch = b.cMa + g.ctch;
export const cmatching = cmatch + g.cing;
export const cMatching = cMatch + g.cing;
export const cdoes = b.cdo + b.ces;
export const cDoes = b.cDo + b.ces;
export const capplication = g.capp + g.clica + g.ction;
export const cApplication = g.cApp + g.clica + g.ction;
export const cdeploy = b.cd + b.cep + g.cloy;
export const cDeploy = b.cD + b.cep + g.cloy;
export const clease = b.cle + g.c_ase;
export const crelease = b.cre + clease;
export const cRelease = b.cRe + clease;
export const croot = b.cr + g.coot;
export const cRoot = b.cR + g.coot;
export const cparse = b.cp + g.carse;
export const cParse = b.cP + g.carse;
export const cforward = b.cf + b.cor + g.cward;
export const cForward = b.cF + b.cor + g.cward;
export const cslash = b.cs + g.clash;
export const cSlash = b.cS + g.clash;
export const cmeta = b.cm + g.ceta;
export const cMeta = b.cM + g.ceta;
export const cMetaData = cMeta + cData;
export const cbusiness = b.cb + g.cusiness;
export const cBusiness = b.cB + g.cusiness;
export const crule = b.cr + g.cule;
export const cRule = b.cR + g.cule;
export const cfresh = b.cfr + g.cesh;
export const crefresh = b.cre + cfresh;
export const cRefresh = b.cRe + cfresh;
export const ceval = b.ce + g.cval;
export const cEval = b.cE + g.cval;
export const creload = b.cre + cload;
export const cReload = b.cRe + cload;
export const cdemo = b.cd + g.cemo;
export const cDemo = b.cD + g.cemo;
export const ccommon = b.cc + g.common;
export const cCommon = b.cC + g.common;
export const cfunction = b.cf + b.cun + g.cction;
export const cFunction = b.cF + b.cun + g.cction;
export const cfunctions = cfunction + b.cs;
export const cFunctions = cFunction + b.cs;
export const cmultiple = g.cmulti + g.cple;
export const cMultiple = g.cMulti + g.cple;
export const cJournal = b.cJo + b.cur + g.cnal;
export const cExecution = g.cExe + b.ccu + g.ction;
export const cpercent = g.cper + g.ccent;
export const cPercent = g.cPer + g.ccent;
export const cbasic = b.cb + g.casic;
export const cBasic = b.cB + g.casic;
export const cevent = b.ce + g.cvent;
export const cEvent = b.cE + g.cvent;
export const cevents = cevent + b.cs;
export const cEvents = cEvent + b.cs;
export const cface = b.cfa + b.cce;
export const cFace = b.cFa + b.cce;
export const cargument = g.carg + b.cu + g.cment;
export const cArgument = g.cArg + b.cu + g.cment;
export const cdrive = b.cd + g.crive;
export const cDrive = b.cD + g.crive;
export const cdriven = cdrive + b.cn;
export const cDriven = cDrive + b.cn;
export const cinterface = g.cinter + cface;
export const cInterface = g.cInter + cface;
export const cfig = b.cf + b.cig;
export const cFig = b.cF + b.cig;
export const cfiglet = cfig + clet;
export const cFiglet = cFig + clet;
export const cfont = b.cf + g.cont;
export const cFont = b.cF + g.cont;
export const cmodule = g.cmod + g.cule;
export const cModule = g.cMod + g.cule;
export const ccolor = g.ccol + b.cor;
export const cColor = g.cCol + b.cor;

// Shapes
export const ccircle = g.ccir + g.ccle;
export const cCircle = g.cCir + g.ccle;
export const coval = b.cov + b.cal;
export const cOval = b.cOv + b.cal;
export const csquare = b.cs + g.cquare;
export const cSquare = b.cS + g.cquare;
export const ctriangle = g.ctri + cangle;
export const cTriangle = g.cTri + cangle;
export const crectangle = g.crect + cangle;
export const cRectangle = g.cRect + cangle;
export const coctagon = g.coct + b.ca + g.cgon;
export const cOctagon = g.cOct + b.ca + g.cgon;
export const chexagon = g.chex + b.ca + g.cgon;
export const cHexagon = g.cHex + b.ca + g.cgon;
export const cheptagon = g.chep + b.ca + g.cgon;
export const cHeptagon = g.cHep + b.ca + g.cgon;
export const cnonagon = g.cnon + b.ca + g.cgon;
export const cNonagon = g.cNon + b.ca + g.cgon;
export const ctrapezoid = ctrap + b.ce + g.czoid;
export const cTrapezoid = cTrap + b.ce + g.czoid;
export const ccube = b.ccu + b.cbe;
export const cCube = b.cCu + b.cbe;
export const cground = b.cgr + g.cound;
export const cGround = b.cGr + g.cound;
export const cyell = b.cye + b.cll;
export const cYell = b.cYe + b.cll;
export const clack = b.cla + b.cck;
export const cLack = b.cLa + b.cck;
// This could go on forever!!
// https://en.wikipedia.org/wiki/List_of_mathematical_shapes

// Colors
// Primary Colors
export const cred = b.cr + b.ced;
export const cRed = b.cR + b.ced;
export const cgreen = b.cg + g.creen;
export const cGreen = b.cG + g.creen;
export const cblue = b.cb + g.clue;
export const cBlue = b.cB + g.clue;
// Secondary Colors CMYK
export const ccyan = b.cc + g.cyan;
export const cCyan = b.cC + g.cyan;
export const cmagenta = b.cm + b.cag + g.centa;
export const cMagenta = b.cM + b.cag + g.centa;
export const cyellow = cyell + b.cow;
export const cYellow = cYell + b.cow;
export const cblack = b.cb + clack;
export const cBlack = b.cB + clack;
// Tertiary Named Colors
// https://en.wikipedia.org/wiki/List_of_colors:_A%E2%80%93F
// AbsoluteZero
// AcidGreen
// Aero
// AeroBlue
// AfricanViolet
// AirSuperiorityBlue
// Alabaster
// AliceBlue
// AlloyOrange
// Almond
// Amaranth
// AmaranthMP
// AmaranthPink
// AmaranthPurple
// AmaranthRed
// Amazon
// Amber
// AmberSAE-ECE
// Amethyst
// AndroidGreen
// AntiqueBrass
// AntiqueBronze
// AntiqueFuchsia
// AntiqueRuby
// AntiqueWhite
// AoEnglish
// AppleGreen
// Apricot
// Aqua
// Aquamarine
// ArcticLime
// ArmyGreen
// Artichoke
// ArylideYellow
// AshGray
// Asparagus
// AtomicTangerine
// Auburn
// Aureolin
// Avocado
// Azure
// AzureWeb
// BabyBlue
// BabyBlueEyes
// BabyPink
// BabyPowder
// Baker-MillerPink
// BananaMania
// BarbiePink
// BarnRed
// BattleshipGrey
// BeauBlue
// Beaver
// Beige
// B-DazzledBlue
// BigDipO-Ruby
// Bisque
// Bistre
// BistreBrown
// BitterLemon
// BitterLime
// Bittersweet
// BittersweetShimmer
// BlackBean
// BlackChocolate
// BlackCoffee
// BlackCoral
// BlackOlive
// BlackShadows
// BlanchedAlmond
// Blast-OffBronze
// BleuDeFrance
// BlizzardBlue
// Blond
// BloodRed
// BlueCrayola
// BlueMunsell
// BlueNCS
// BluePantone
// BluePigment
// BlueRYB
// BlueBell
// Blue-Gray
// Blue-Green
// Blue-GreenColorWheel
// BlueJeans
// BlueSapphire
// Blue-Violet
// Blue-VioletCrayola
// Blue-VioletColorWheel
// BlueYonder
// Bluetiful
// Blush
// Bole
// Bone
// BottleGreen
// Brandy
// BrickRed
// BrightGreen
// BrightLilac
// BrightMaroon
// BrightNavyBlue
// BrightYellowCrayola
// BrilliantRose
// BrinkPink
// BritishRacingGreen
// Bronze
// Brown
// BrownSugar
// BrunswickGreen
// BudGreen
// Buff
// Burgundy
// Burlywood
// BurnishedBrown
// BurntOrange
// BurntSienna
// BurntUmber
// Byzantine
// Byzantium
// Cadet
// CadetBlue
// CadetBlueCrayola
// CadetGrey
// CadmiumGreen
// CadmiumOrange
// CadmiumRed
// CadmiumYellow
// CafeAuLait
// CafeNoir
// CambridgeBlue
// Camel
// CameoPink
// Canary
// CanaryYellow
// CandyAppleRed
// CandyPink
// Capri
// CaputMortuum
// Cardinal
// CaribbeanGreen
// Carmine
// CarmineMP
// CarnationPink
// Carnelian
// CarolinaBlue
// CarrotOrange
// CastletonGreen
// Catawba
// CedarChest
// Celadon
// CeladonBlue
// CeladonGreen
// Celeste
// CelticBlue
// Cerise
// Cerulean
// CeruleanBlue
// CeruleanFrost
// CeruleanCrayola
// CGBlue
// CGRed
// Champagne
// ChampagnePink
// Charcoal
// CharlestonGreen
// CharmPink
// ChartreuseTraditional
// ChartreuseWeb
// CherryBlossomPink
// Chestnut
// ChinaPink
// ChinaRose
// ChineseRed
// ChineseViolet
// ChineseYellow
// ChocolateTraditional
// ChocolateWeb
// ChromeYellow
// Cinereous
// Cinnabar
// CinnamonSatin
// Citrine
// Citron
// Claret
// CobaltBlue
// CocoaBrown
// Coffee
// ColumbiaBlue
// CongoPink
// CoolGrey
// Copper
// CopperCrayola
// CopperPenny
// CopperRed
// CopperRose
// Coquelicot
// Coral
// CoralPink
// Cordovan
// Corn
// CornflowerBlue
// Cornsilk
// CosmicCobalt
// CosmicLatte
// CoyoteBrown
// CottonCandy
// Cream
// Crimson
// CrimsonUA
// Cultured
// CyanProcess
// CyberGrape
// CyberYellow
// Cyclamen
// DarkBlue-Gray
// DarkBrown
// DarkByzantium
// DarkCornflowerBlue
// DarkCyan
// DarkElectricBlue
// DarkGoldenrod
// DarkGreen
// DarkGreenX11
// DarkJungleGreen
// DarkKhaki
// DarkLava
// DarkLiver
// DarkLiverHorses
// DarkMagenta
// DarkMossGreen
// DarkOliveGreen
// DarkOrange
// DarkOrchid
// DarkPastelGreen
// DarkPurple
// DarkRed
// DarkSalmon
// DarkSeaGreen
// DarkSienna
// DarkSkyBlue
// DarkSlateBlue
// DarkSlateGray
// DarkSpringGreen
// DarkTurquoise
// DarkViolet
// DartmouthGreen
// DavysGrey
// DeepCerise
// DeepChampagne
// DeepChestnut
// DeepJungleGreen
// DeepPink
// DeepSaffron
// DeepSkyBlue
// DeepSpaceSparkle
// DeepTaupe
// Denim
// DenimBlue
// Desert
// DesertSand
// DimGray
// DodgerBlue
// DogwoodRose
// Drab
// DukeBlue
// DutchWhite
// EarthYellow
// Ebony
// Ecru
// EerieBlack
// Eggplant
// Eggshell
// EgyptianBlue
// ElectricBlue
// ElectricGreen
// ElectricIndigo
// ElectricLime
// ElectricPurple
// ElectricViolet
// Emerald
// Eminence
// EnglishGreen
// EnglishLavender
// EnglishRed
// EnglishVermillion
// EnglishViolet
// Erin
// EtonBlue
// Fallow
// FaluRed
// Fandango
// FandangoPink
// FashionFuchsia
// Fawn
// Feldgrau
// FernGreen
// FieldDrab
// FieryRose
// Firebrick
// FireEngineRed
// FireOpal
// Flame
// Flax
// Flirt
// FloralWhite
// FluorescentBlue
// ForestGreenCrayola
// ForestGreenTraditional
// ForestGreenWeb
// FrenchBeige
// FrenchBistre
// FrenchBlue
// FrenchFuchsia
// FrenchLilac
// FrenchLime
// FrenchMauve
// FrenchPink
// FrenchRaspberry
// FrenchRose
// FrenchSky Blue
// FrenchViolet
// Frostbite
// Fuchsia
// FuchsiaCrayola
// FuchsiaPurple
// FuchsiaRose
// Fulvous
// FuzzyWuzzy
// https://en.wikipedia.org/wiki/List_of_colors:_G%E2%80%93M
// Gainsboro
// Gamboge
// GenericViridian
// GhostWhite
// Glaucous
// GlossyGrape
// GOGreen
// Gold
// GoldMetallic
// GoldWebGolden
// GoldCrayola
// GoldFusion
// GoldenBrown
// GoldenPoppy
// GoldenYellow
// Goldenrod
// GraniteGray
// GrannySmithApple
// GrayWeb
// GrayX11
// GreenCrayola
// GreenWeb
// GreenMunsell
// GreenNCS
// GreenPantone
// GreenPigment
// GreenRYB
// GreenBlue
// GreenBlueCrayola
// GreenCyan
// GreenLizard
// GreenSheen
// GreenYellow
// GreenYellowCrayola
// Grullo
// Gunmetal
// HanBlue
// HanPurple
// HansaYellow
// Harlequin
// HarvestGold
// HeatWave
// Heliotrope
// HeliotropeGray
// HollywoodCerise
// Honeydew
// HonoluluBlue
// HookersGreen
// HotMagenta
// HotPink
// HunterGreen
// Iceberg
// Icterine
// IlluminatingEmerald
// ImperialRed
// Inchworm
// Independence
// IndiaGreen
// IndianRed
// IndianYellow
// Indigo
// IndigoDye
// InternationalOrangeAerospace
// InternationalOrangeEngineering
// InternationalOrangeGoldenGateBridge
// Iris
// Irresistible
// Isabelline
// ItalianSkyBlue
// Ivory
// Jade
// JapaneseCarmine
// JapaneseViolet
// Jasmine
// JazzberryJam
// Jet
// Jonquil
// JuneBud
// JungleGreen
// KellyGreen
// Keppel
// KeyLime
// KhakiWeb
// KhakiX11
// Kobe
// Kobi
// Kobicha
// KombuGreen
// KSUPurple
// LanguidLavender
// LapisLazuli
// LaserLemon
// LaurelGreen
// Lava
// LavenderFloral
// LavenderWeb
// LavenderBlue
// LavenderBlush
// LavenderGray
// LawnGreen
// Lemon
// LemonChiffon
// LemonCurry
// LemonGlacier
// LemonMeringue
// LemonYellow
// LemonYellowCrayola
// Liberty
// LightBlue
// LightCoral
// LightCornflowerBlue
// LightCyan
// LightFrenchBeige
// LightGoldenrodYellow
// LightGray
// LightGreen
// LightOrange
// LightPeriwinkle
// LightPink
// LightSalmon
// LightSeaGreen
// LightSkyBlue
// LightSlateGray
// LightSteelBlue
// LightYellow
// Lilac
// LilacLuster
// LimeColorWheel
// LimeWeb
// LimeGreen
// LincolnGreen
// Linen
// Lion
// LiseranPurple
// LittleBoyBlue
// Liver
// LiverDogs
// LiverOrgan
// LiverChestnut
// Livid
// MacaroniAndCheese
// MadderLake
// MagentaCrayola
// MagentaDye
// MagentaPantone
// MagentaProcess
// MagentaHaze
// MagicMint
// Magnolia
// Mahogany
// Maize
// MaizeCrayola
// MajorelleBlue
// Malachite
// Manatee
// Mandarin
// Mango
// MangoTango
// Mantis
// MardiGras
// Marigold
// MaroonCrayola
// MaroonWeb
// MaroonX11
// Mauve
// MauveTaupe
// Mauvelous
// MaximumBlue
// MaximumBlueGreen
// MaximumBluePurple
// MaximumGreen
// MaximumGreenYellow
// MaximumPurple
// MaximumRed
// MaximumRedPurple
// MaximumYellow
// MaximumYellowRed
// MayGreen
// MayaBlue
// MediumAquamarine
// MediumBlue
// MediumCandyAppleRed
// MediumCarmine
// MediumChampagne
// MediumOrchid
// MediumPurple
// MediumSeaGreen
// MediumSlateBlue
// MediumSpringGreen
// MediumTurquoise
// MediumVioletRed
// MellowApricot
// MellowYellow
// Melon
// MetallicGold
// MetallicSeaweed
// MetallicSunburst
// MexicanPink
// MiddleBlue
// MiddleBlueGreen
// MiddleBluePurple
// MiddleGrey
// MiddleGreen
// MiddleGreenYellow
// MiddlePurple
// MiddleRed
// MiddleRedPurple
// MiddleYellow
// MiddleYellowRed
// Midnight
// MidnightBlue
// MidnightGreen
// MikadoYellow
// MimiPink
// Mindaro
// Ming
// MinionYellow
// Mint
// MintCream
// MintGreen
// MistyMoss
// MistyRose
// ModeBeige
// MorningBlue
// MossGreen
// MountainMeadow
// MountbattenPink
// MSUGreen
// Mulberry
// MulberryCrayola
// Mustard
// MyrtleGreen
// Mystic
// MysticMaroon
// https://en.wikipedia.org/wiki/List_of_colors:_N%E2%80%93Z
// NadeshikoPink
// NaplesYellow
// NavajoWhite
// NavyBlue
// NavyBlueCrayola
// NeonBlue
// NeonCarrot
// NeonGreen
// NeonFuchsia
// NewYorkPink
// Nickel
// NonPhotoBlue
// Nyanza
// OceanBlue
// OceanGreen
// Ochre
// OldBurgundy
// OldGold
// OldLace
// OldLavender
// OldMauve
// OldRose
// OldSilver
// Olive
// OliveDrab3
// OliveDrab7
// OliveGreen
// Olivine
// Onyx
// Opal
// OperaMauve
// OrangeCrayola
// OrangePantone
// OrangeWeb
// OrangePeel
// OrangeRed
// OrangeRedCrayola
// OrangeSoda
// OrangeYellow
// OrangeYellowCrayola
// Orchid
// Orchid Pink
// OrchidCrayola
// OuterSpaceCrayola
// OutrageousOrange
// OxBlood
// OxfordBlue
// OUCrimsonRed
// PacificBlue
// PakistanGreen
// PalatinatePurple
// PaleAqua
// PaleCerulean
// PalePink
// PalePurplePantone
// PaleSilver
// PaleSpringBud
// PansyPurple
// PaoloVeroneseGreen
// PapayaWhip
// ParadisePink
// ParisGreen
// PastelPink
// Patriarch
// PaynesGrey
// Peach
// PeachCrayola
// PeachPuff
// Pear
// PearlyPurple
// Periwinkle
// PeriwinkleCrayola
// PermanentGeraniumLake
// PersianBlue
// PersianGreen
// PersianIndigo
// PersianOrange
// PersianPink
// PersianPlum
// PersianRed
// PersianRose
// Persimmon
// PewterBlue
// Phlox
// PhthaloBlue
// PhthaloGreen
// PicoteeBlue
// PictorialCarmine
// PiggyPink
// PineGreen
// PineTree
// Pink
// PinkPantone
// PinkFlamingo
// PinkLace
// PinkLavender
// PinkSherbet
// Pistachio
// Platinum
// Plum
// PlumWeb
// PlumpPurple
// PolishedPine
// PompAndPower
// Popstar
// PortlandOrange
// PowderBlue
// PrincetonOrange
// Prune
// PrussianBlue
// PsychedelicPurple
// Puce
// PullmanBrown
// Pumpkin
// Purple
// PurpleWeb
// PurpleMunsell
// PurpleX11
// PurpleMountainMajesty
// PurpleNavy
// PurplePizzazz
// PurplePlum
// Purpureus
// QueenBlue
// QueenPink
// QuickSilver
// QuinacridoneMagenta
// RadicalRed
// RaisinBlack
// Rajah
// Raspberry
// RaspberryGlace
// RaspberryRose
// RawSienna
// RawUmber
// RazzleDazzleRose
// Razzmatazz
// RazzmicBerry
// RebeccaPurple
// RedCrayola
// RedMunsell
// RedNCS
// RedPantone
// RedPigment
// RedRYB
// RedOrange
// RedOrangeCrayola
// RedOrangeColorWheel
// RedPurple
// RedSalsa
// RedViolet
// RedVioletCrayola
// RedVioletColorWheel
// Redwood
// ResolutionBlue
// Rhythm
// RichBlack
// RichBlackFOGRA29
// RichBlackFOGRA39
// RifleGreen
// RobinEggBlue
// RocketMetallic
// RomanSilver
// Rose
// RoseBonbon
// RoseDust
// RoseEbony
// RoseMadder
// RosePink
// RoseQuartz
// RoseRed
// RoseTaupe
// RoseVale
// Rosewood
// RossoCorsa
// RosyBrown
// RoyalBlueDark
// RoyalBlueLight
// RoyalPurple
// RoyalYellow
// Ruber
// RubineRed
// Ruby
// RubyRed
// Rufous
// Russet
// RussianGreen
// RussianViolet
// Rust
// RustyRed
// SacramentoState Green
// SaddleBrown
// SafetyOrange
// BlazeOrange
// SafetyYellow
// Saffron
// Sage
// StPatricksBlue
// Salmon
// SalmonPink
// Sand
// SandDune
// SandyBrown
// SapGreen
// Sapphire
// SapphireBlue
// SapphireCrayola
// SatinSheenGold
// Scarlet
// SchaussPink
// SchoolBusYellow
// ScreaminGreen
// SeaGreen
// SeaGreenCrayola
// SealBrown
// Seashell
// SelectiveYellow
// Sepia
// Shadow
// ShadowBlue
// ShamrockGreen
// SheenGreen
// ShimmeringBlush
// ShinyShamrock
// ShockingPink
// ShockingPinkCrayola
// Sienna
// Silver
// SilverCrayola
// SilverMetallic
// SilverChalice
// SilverPink
// SilverSand
// Sinopia
// SizzlingRed
// SizzlingSunrise
// Skobeloff
// SkyBlue
// SkyBlueCrayola
// SkyMagenta
// SlateBlue
// SlateGray
// SlimyGreen
// Smitten
// SmokyBlack
// Snow
// SolidPink
// SonicSilver
// SpaceCadet
// SpanishBistre
// SpanishBlue
// SpanishCarmine
// SpanishGray
// SpanishGreen
// SpanishOrange
// SpanishPink
// SpanishRed
// SpanishSkyBlue
// SpanishViolet
// SpanishViridian
// SpringBud
// SpringFrost
// SpringGreen
// SpringGreenCrayola
// StarCommandBlue
// SteelBlue
// SteelPink
// SteelTeal
// StilDeGrainYellow
// Straw
// SugarPlum
// Sunglow
// Sunray
// Sunset
// SuperPink
// SweetBrown
// Tan
// TanCrayola
// Tangerine
// TangoPink
// TartOrange
// Taupe
// TaupeGray
// TeaGreen
// TeaRose = #F88379
// TeaRoseWeb = #F4C2C2
// Teal
// TealBlue
// Telemagenta
// Tawny
// TerraCotta
// Thistle
// ThulianPink
// TickleMePink
// TiffanyBlue
// Timberwolf
// TitaniumYellow
// Tomato
// TropicalRainforest
// TrueBlue
// TrypanBlue
// TuftsBlue
// Tumbleweed
// Turquoise
// TurquoiseBlue
// TurquoiseGreen
// TurtleGreen
// Tuscan
// TuscanBrown
// TuscanRed
// TuscanTan
// Tuscany
// TwilightLavender
// TyrianPurple
// UABlue
// UARed
// Ultramarine
// UltramarineBlue
// UltraPink
// UltraRed
// Umber
// UnbleachedSilk
// UnitedNationsBlue
// UnmellowYellow
// UPForestGreen
// UPMaroon
// UpsdellRed
// UranianBlue
// USAFABlue
// VanDykeBrown
// Vanilla
// VanillaIce
// VegasGold
// VenetianRed
// Verdigris
// Vermilion = #E34234
// VermilionWeb = #D9381E
// Veronica
// Violet
// VioletColorWheel
// VioletCrayola
// VioletRYB
// VioletWeb
// VioletBlue
// VioletBlueCrayola
// VioletRed
// Viridian
// ViridianGreen
// VividBurgundy
// VividSkyBlue
// VividTangerine
// VividViolet
// Volt
// WarmBlack
// Wheat
// WildBlueYonder
// WildOrchid
// WildStrawberry
// WildWatermelon
// WindsorTan
// Wine
// WineDregs
// WinterSky
// WintergreenDream
// Wisteria
// WoodBrown
// Xanthic
// Xanadu
// YaleBlue
// YellowCrayola
// YellowMunsell
// YellowNCS
// YellowPantone
// YellowProcess
// YellowRYB
// YellowGreen
// YellowGreenCrayola
// YellowGreenColorWheel
// YellowOrange
// YellowOrangeColorWheel
// YellowSunshine
// YInMnBlue
// Zaffre
// Zomp

// Compound System Words
export const cWithText = cWith + cText;
export const cwithText = cwith + cText;
export const cDebugTest = cDebug + cTest;
export const cDebugPage = cDebug + cPage;
export const cDebugTestExhaustive = cDebugTest + cExhaustive;
export const cDebugTestData = cDebugTest + cData;
export const cDebugPageScripts = cDebugPage + cScripts;
export const cDebugPageData = cDebugPage + cData;
export const cDebugKeywords = cDebug + cKeywords;
export const cLogBrowserActions = cLog + cBrowser + cActions;
export const cJournalBrowserActions = cJournal + cBrowser + cActions;
export const cDebugBrowserActions = cDebug + cBrowser + cActions;
export const cDebugSelectors = cDebug + cSelectors;
export const cDebugFunctions = cDebug + cFunctions;
export const cDebugFiles = cDebug + cFiles;
export const cTestAutomation = cTest + cAutomation;
export const cNumberOfRows = cNumber + cOf + cRows;
export const cMasterRowNumber = cMaster + cRow + cNumber;
export const cEnvironmentRow = cEnvironment + cRow;
export const cEnvironmentRowNumber = cEnvironmentRow + cNumber;
export const cPageScript = cPage + cScript;
export const cIntermediatePath = cIntermediate + cPath;
export const cTimeStamp = cTime + cStamp;
export const cPageScriptTimeStamp = cPageScript + cTimeStamp;
export const cDateTimeStamp = cDate + cTimeStamp;
export const cScriptDateStamp = cScript + cDate + cStamp;
export const cScriptTimeStamp = cScript + cTimeStamp;
export const cKeywordTimeStamp = cKeyword + cTimeStamp;
export const cTestTimeStamp = cTest + cTimeStamp;
export const cScriptDateTimeStamp = cScript + cDateTimeStamp;
export const cBeginScriptTimeStamp = cBegin + cScriptTimeStamp;
export const cEndScriptTimeStamp = cEnd + cScriptTimeStamp;
export const cBeginTestTimeStamp = cBegin + cTestTimeStamp;
export const cEndTestTimeStamp = cEnd + cTestTimeStamp;
export const cBeginPageScriptTimeStamp = cBegin + cPageScriptTimeStamp;
export const cEndPageScriptTimeStamp = cEnd + cPageScriptTimeStamp;
export const cBeginKeywordTimeStamp = cBegin + cKeywordTimeStamp;
export const cEndKeywordTimeStamp = cEnd + cKeywordTimeStamp;
export const cRunTime = cRun + cTime;
export const cRuntime = cRun + ctime;
export const cBrowserName = cBrowser + cName;
export const cHostName = cHost + cName;
export const cTestRunID = cTest + cRun + cID;
export const cfilesLists = cfiles + cLists;
export const cFileTypes = cFile + cTypes;
export const cFileName = cFile + cName;
export const cFilename = cFile + cname;
export const cfilename = cfile + cname;
export const cFileNames = cFileName + b.cs;
export const cFilenames = cFilename + b.cs;
export const cfilenames = cfilename + b.cs;
export const cPreValidateFileName = b.cPre + cValidate + cFile + cName;
export const cAsynchSingular = cAsynch + cSingular;
export const cSynchSingular = cSynch + cSingular;
export const cParallelMultiUnified = cParallel + cMulti + cUnified;
export const cAllowableCharacters = cAllowable + cCharacters;
export const cSpecialCharacters = cSpecial + cCharacters;
export const cTimeoutOverride = cTimeout + cOverride;
export const cDwellTime = cDwell + cTime;
export const cLogFilePathAndName = cLog + cFile + cPath + cAnd + cName;
export const cDataLogFilePathAndName = cData + cLog + cFile + cPath + cAnd + cName;
export const cExecutionJournalFilePathAndName = cExecution + cJournal + cFile + cPath + cAnd + cName;
export const cResultsLogFilePathAndName = cResults + cLog + cFile + cPath + cAnd + cName;
export const cTestDataPath = cTest + cData + cPath;
export const cLogFileEnabled = cLog + cFile + cEnabled;
export const cFileCounter = cFile + cCounter;
export const cDeltaT = g.cDelta + b.cT;
export const cVisibilityCheck = cVisibility + cCheck;
export const cvisibilityCheck = cvisibility + cCheck;
export const cOperatingSystem = cOperating + cSystem;
export const cInnerText = cInner + cText;
export const cinnerText = cinner + cText;
export const cInnerHTML = cInner + cHTML;
export const cinnerHTML = cInner + cHTML;
export const cTestData = cTest + cData;
export const cProcessingTimeout = cProcessing + cTimeout;
export const cIngestionCompleteDwellTime = cIngestion + cComplete + cDwellTime;
export const cRowNumber = cRow + cNumber;
export const cUsername = cUser + cname;
export const cPassword = b.cPa + b.css + b.cwo + b.crd; // 'Password';
export const cProjectName = cProject + cName;
export const cProjectDescription = cProject + cDescription;
export const cTestDataFileName = cTest + cData + cFileName;
export const cShareEmail = cShare + cEmail;
export const cAccessLevel = cAccess + cLevel;
export const cFileNumber = cFile + cNumber;
export const cConfigurationName = cConfiguration + cName;
export const cConfigurationElement = cConfiguration + cElement;
export const cConfigurationElements = cConfigurationElement + b.cs;
export const cVersion = b.cVe + b.crs + b.cio + b.cn; // 'Version';
export const cControl = b.cCo + b.cnt + b.cro + b.cl; // 'Control';
export const cVersionControl = cVersion + cControl;
export const cPerformance = b.cPe + b.crf + b.cor + b.cma + b.cnc + b.ce; // 'Performance';
export const cScriptRunTime = cScript + cRuntime;
export const cTestRunTime = cTest + cRuntime;
export const cTypeText = cType + cText;
export const ctypeText = ctype + cText;
export const cAbreviatedSelectors = cAbreviated + cSelectors;
export const cAbreviatedSelectorsInLogs = cAbreviatedSelectors + b.cIn + cLogs;
export const cselectorTimeout = cselector + cTimeout;
export const cchildElementCount = cchild + cElement + cCount;
export const cUnderscore = cUnder + cscore; // 'Underscore'
export const cTestBureau = cTest + cBureau;
export const caddWithText = c_add + cWith + cText;
export const caddTimeout = c_add + cTimeout;
export const caddParent = c_add + cParent;
export const caddFindValue = c_add + cFind + cValue;
export const caddNth = c_add + cNth;
export const caddSibling = c_add + cSibling;
export const caddFilter = c_add + cFilter;
export const cgenerateRandom = cGenerate + cRandom;
export const crandomlyGenerate = cRandom + cGenerate;
export const cMixedCase = cMixed + cCase;
export const cUpperCase = cUpper + cCase;
export const cLowerCase = cLower + cCase;
export const cByLength = cBy + cLength;
export const cSpecialCharacter = cSpecial + cCharacter;
export const cWithSpecialCharacters = cWith + cSpecialCharacters
export const cTextByLength = cText + cByLength;
export const cTextWithSpecialCharacters = cText + cWithSpecialCharacters;
export const cTextWithSpecialCharactersByLength = cTextWithSpecialCharacters + cByLength;
export const cAlphaNumeric = cAlpha + cNumeric;
export const cAlphaNumericCode = cAlphaNumeric + cCode;
export const cAlphaNumericCodeByLength = cAlphaNumericCode + cByLength;
export const cNumericCode = cNumeric + cCode;
export const cNumericCodeByLength = cNumericCode + cByLength;
export const cAlphaNumericCodeWithSpecialCharacters = cAlphaNumericCode + cWithSpecialCharacters;
export const cAlphaNumericCodeWithSpecialCharactersByLength = cAlphaNumericCodeWithSpecialCharacters + cByLength;
export const cSpecialCharacterCodeByLength = cSpecialCharacter + cCode + cByLength;
export const cValidEmail = cValid + cEmail;
export const cvalidEmail = cvalid + cEmail;
export const cInvalidEmail = b.cIn + cvalidEmail;
export const cLetterOr = cLetter + b.cOr;
export const cLetterOrSpecialCharacter = cLetterOr + cSpecialCharacter;
export const cLetterOrNumberOrSpecialCharacter = cLetterOr + cNumber + cOr + cSpecialCharacter;
export const cAlphaNumericCharacter = cAlphaNumeric + cCharacter;
export const cNumericCharacter = cNumeric + cCharacter;
export const cNumberInRange = cNumber + b.cIn + cRange;
export const cBooleanValue = cBoolean + cValue;
export const cAlphabeticCharacter = cAlphabetic + cCharacter;
export const cCarriageReturn = cCarriage + cReturn;
export const cDashboardLogs = cDashboard + cLogs;
export const cVideoLogs = cVideo + cLogs;
export const cForwardSlash = cForward + cSlash;
export const cBackSlash = cBack + cSlash;
export const cPage_Keywords = cPage + b.cUnderscore + cKeywords;
export const cnavigateTo = cnavigate + b.cTo;
export const cNavigateTo = cNavigate + b.cTo;
export const cBrowserRefresh = cBrowser + cRefresh;
export const cSpaceIsColonSpace = b.cSpace + b.cIs + b.cColon + b.cSpace;
export const cdeployApplication = cdeploy + cApplication;
export const creleaseApplication = crelease + cApplication;
export const cbackground = cback + cground;
export const cBackground = cBack + cground;

// Logging Constants
export const cBEGIN_Function = cBEGIN + b.cSpace + b.cPercent + b.cPercent + b.cSpace + cFunction;
export const cEND_Function = cEND + b.cSpace + b.cPercent + b.cPercent + b.cSpace + cFunction;
export const cinputDataIs = cinput + cData + cSpaceIsColonSpace;
export const cinputMetaDataIs = cinput + cMetaData + cSpaceIsColonSpace;
export const creturnDataIs = creturn + cData + cSpaceIsColonSpace;
export const cLogBasicSystemEvents = cLog + cBasic + cSystem + cEvents;
export const cLogWarnings = cLog + cWarnings;
// Logging Styles Constants
export const cModuleFontStyleSetting = cModule + cFont + cStyle + cSetting;
export const cFunctionFontStyleSetting = cFunction + cFont + cStyle + cSetting;
export const cMessageFontStyleSetting = cMessage + cFont + cStyle + cSetting;
export const cDataFontStyleSetting = cData + cFont + cStyle + cSetting;
export const cModuleFontColorSetting = cModule + cFont + cColor + cSetting;
export const cFunctionFontColorSetting = cFunction + cFont + cColor + cSetting;
export const cMessageFontColorSetting = cMessage + cFont + cColor + cSetting;
export const cDataFontColorSetting = cData + cFont + cColor + cSetting;
export const cModuleFontBackgroundColorSetting = cModule + cFont + cBackground + cColor + cSetting;
export const cFunctionFontBackgroundColorSetting = cFunction + cFont + cBackground + cColor + cSetting;
export const cMessageFontBackgroundColorSetting = cMessage + cFont + cBackground + cColor + cSetting;
export const cDataFontBackgroundColorSetting = cData + cFont + cBackground + cColor + cSetting;

// File Types
export const cCatia = b.cCa + b.cti + b.ca; // 'Catia';
export const cDocument = g.cDoc + b.cu + g.cment; // 'Document';
export const cDocuments = cDocument + b.cs;
export const cDraft = b.cDr + g.caft; // 'Draft';
export const cDWG = b.cDW + b.cG; // 'DWG';
export const cHoops = b.cH + coops; // 'Hoops';
export const cHOOPS = b.cH + cOOPS; // 'HOOPS';
export const cImage = b.cIm + g.cage; // 'Image';
export const cImages = cImage + b.cs;
export const cInventor = g.cInv + b.cen + g.ctor; // 'Inventor';
export const cNeutral = b.cNe + b.cut + g.cral; // 'Neutral';
export const cNX = b.cNX; // 'NX';
export const cParasolid = b.cP + g.cara + csolid; // 'Para' + csolid;
export const cProE = g.cPro + b.cE; // 'ProE';
export const cRhino = b.cRh + g.cino; // 'Rhino';
export const cSolidEdge = cSolid + cEdge;
export const cSolidWorks = cSolid + cWorks;
export const cVRML = b.cVR + b.cML; // 'VRML';
export const cVrml = b.cVr + b.cml;
export const cvrml = b.cvr + b.cml;

// Countires
// TODO: Need to come back and generalize thse with constants re-use.
export const cAfghanistan = 'Afghanistan';
export const cAlbania = 'Albania';
export const cAlgeria = 'Algeria';
export const cAndorra = 'Andorra';
export const cAngola = 'Angola';
export const cAntigua = 'Antigua';
export const cArgentina = 'Argentina';
export const cArmenia = 'Armenia';
export const cAustralia = 'Australia';
export const cAustria = 'Austria';
export const cAzerbaijan = 'Axerbaijan';
export const cBahamas = 'Bahamas';
export const cBahrain = 'Bahrain';
export const cBangladesh = 'Bangladesh';
export const cBarbados = 'Barbados';
export const cBarbuda = 'Barbuda';
export const cBelarus = 'Belarus';
export const cBelgium = 'Belgium';
export const cBelize = 'Belize';
export const cBenin = 'Benin';
export const cBhutan = 'Bhutan';
export const cBolivia = 'Bolivia';
export const cBosnia = 'Bosnia';
export const cBotswana = 'Botswana';
export const cBrazil = 'Brazil';
export const cBrunei = 'Brunei';
export const cBulgaria = 'Bulgaria';
export const cBurkinaFaso = 'BurkinaFaso';
export const cBurundi = 'Burundi';
export const cCotedlvoire = 'Cote dlvoire';
export const cCaboVerde = 'Cabo Verde';
export const cCambodia = 'Cambodia';
export const cCameroon = 'Cameroon';
export const cCanada = 'Canada';
export const cCentralAfricanRepublic = 'Central African Republic';
export const cChad = 'Chad';
export const cChile = 'Chile';
export const cChina = 'China';
export const cColombia = 'Colombia';
export const cComoros = 'Comoros';
export const cCongo = 'Congo';
export const cCostaRica = 'Costa Rica';
export const cCroatia = 'Croatia';
export const cCuba = 'Cuba';
export const cCyprus = 'Cyprus';
export const cCzechia = 'Czechia';
export const cDemocraticRepublicOfTheCongo = 'Democratic Republic of the Congo';
export const cDenmark = 'Denmark';
export const cDjibouti = 'Djibouti';
export const cDominica = 'Dominica';
export const cDominicanRepublic = 'Dominican Republic';
export const cEcuador = 'Ecuador';
export const cEgypt = 'Egypt';
export const cElSalvador = 'El Salvador';
export const cEquatorialGuinea = 'Equatorial Guinea';
export const cEritrea = 'Eritrea';
export const cEstonia = 'Estonia';
export const cEswatini = 'Eswatini'; // Formerly Swaziland
export const cEthiopia = 'Ethiopia';
export const cFiji = 'Fiji';
export const cFinland = 'Finland';
export const cFrance = 'France';
export const cGabon = 'Gabon';
export const cGambia = 'Gambia';
export const cGeorgia = 'Georgia';
export const cGerman = b.cGe + b.cr + cman; // 'German';
export const cGermany = cGerman + b.cy; // 'Germany';
export const cGhana = 'Ghana';
export const cGreece = 'Greece';
export const cGrenada = 'Grenada';
export const cGuatemala = 'Guatemala';
export const cGuinea = 'Guinea';
export const cGuineaBissau = 'Guinea-Bissau';
export const cGuyana = 'Guyana';
export const cHaiti = 'Haiti';
export const cHerzegovina = 'Herzegovina';
export const cHolySee = 'Holy See';
export const cHonduras = 'Honduras';
export const cHungary = cHung + g.cary; // 'Hungary';
export const cIceland = 'Iceland';
export const cIndia = 'India';
export const cIndonesia = 'Indonesia';
export const cIran = 'Iran';
export const cIraq = 'Iraq';
export const cIreland = 'Ireland';
export const cIsrael = 'Israel';
export const cItaly = 'Italy';
export const cJamaica = 'Jamaica';
export const cJapan = 'Japan';
export const cJordan = 'Jordan';
export const cKazakhstan = 'Kazakhstan';
export const cKenya = 'Kenya';
export const cKiribati = 'Kiribati';
export const cKuwait = 'Kuwait';
export const cKyrgyzstan = 'Kyrgyzstan';
export const cLaos = 'Laos';
export const cLatvia = 'Latvia';
export const cLebanon = 'Lebanon';
export const cLesotho = 'Lesotho';
export const cLiberia = 'Liberia';
export const cLibya = 'Libya';
export const cLiechtenstein = 'Liechtenstein';
export const cLithuania = 'Lithuania';
export const cLuxembourg = 'Luxembourg';
export const cMadagascar = 'Madagascar';
export const cMalawi = 'Malawi';
export const cMalaysia = 'Malaysia';
export const cMaldives = 'Maldives';
export const cMali = 'Mali';
export const cMalta = 'Malta';
export const cMarshallIslands = 'Marshall Islands';
export const cMauritania = 'Mauritania';
export const cMauritius = 'Mauritius';
export const cMexico = 'Mexico';
export const cMicronesia = 'Micronesia';
export const cMoldova = 'Moldova';
export const cMonaco = 'Monaco';
export const cMongolia = 'Mongolia';
export const cMontenegro = 'Montenegro';
export const cMorocco = 'Morocco';
export const cMozambique = 'Mozambique';
export const cMyanmar = 'Myanmar';
export const cNamibia = 'Namibia';
export const cNauru = 'Nauru';
export const cNepal = 'Nepal';
export const cNetherlands = 'Netherlands';
export const cNewZealand = 'New Zealand';
export const cNevis = 'Nevis';
export const cNicaragua = 'Nicaragua';
export const cNiger = 'Niger';
export const cNigeria = 'Nigeria';
export const cNorthKorea = 'North Korea';
export const cNorthMacedonia = 'North Macedonia';
export const cNorway = 'Norway';
export const cOman = 'Oman';
export const cPakistan = 'Pakistan';
export const cPalau = 'Palau';
export const cPalestine = 'Palestine';
export const cPanama = 'Panama';
export const cPapuaNewGuinea = 'Papua New Guinea';
export const cParaguay = 'Paraguay';
export const cPeru = 'Peru';
export const cPhilippines = 'Philippines';
export const cPoland = 'Poland';
export const cPortugal = 'Portugal';
export const cPrincipe = 'Principe';
export const cQatar = 'Qatar';
export const cRomania = 'Romania';
export const cRussia = 'Russia';
export const cRwanda = 'Rwanda';
export const cSaintKitts = 'Saint Kitts';
export const cSaintLucia = 'Saint Lucia';
export const cSaintVincent = 'Saint Vincent';
export const cSomoa = 'Somoa';
export const cSanMarino = 'San Marino';
export const cSaoTome = 'Sao Tome';
export const cSaudiArabia = 'Saudi Arabia';
export const cSenegal = 'Senegal';
export const cSerbia = 'Serbia';
export const cSeychelles = 'Seychelles';
export const cSierraLeone = 'Sierra Leone';
export const cSingapore = 'Singapore';
export const cSlovakia = 'Slovakia';
export const cSlovenia = 'Slovenia';
export const cSolomonIslands = 'Solomon Islands';
export const cSomalia = 'Somalia';
export const cSouthAfrica = 'South Africa';
export const cSouthKorea = 'South Korea';
export const cSouthSudan = 'South Sudan';
export const cSpain = 'Spain';
export const cSriLanka = 'Sri Lanka';
export const cSudan = 'Sudan';
export const cSuriname = 'Suriname';
export const cSweden = 'Sweden';
export const cSwitzerland = 'Switzerland';
export const cSyria = 'Syria';
export const cTajikistan = 'Tajikistan';
export const cTanzania = 'Tanzania';
export const cThailand = 'Thailand';
export const cTimorLeste = 'Timor-Leste';
export const cTogo = 'Togo';
export const cTonga = 'Tonga';
export const cTrinidadAndTabago = 'Trinidad and Tabago';
export const cTunisia = 'Tunisia';
export const cTurkey = 'Turkey';
export const cTurkmenistan = 'Turkmenistan';
export const cTuvalu = 'Tuvalu';
export const cUganda = 'Uganda';
export const cUkraine = 'Ukraine';
export const cUnitedArabEmirates = 'United Arab Emirates';
export const cUnitedKingdom = 'United Kingdom';
export const cUnitedStatesOfAmerica = 'United States of America';
export const cUruguay = 'Uruguay';
export const cUzbekistan = 'Uzbekistan';
export const cVanuatu = 'Vanuatu';
export const cVenezuela = 'Venezuela';
export const cVietnam = 'Vietnam';
export const cYemen = 'Yemen';
export const cZambia = 'Zambia';
export const cZimbabwe = 'Zimbabwe';

// Languages
export const cSimplified = b.cSi + b.cmp + b.cli + b.cfi + b.ced; // 'Simplifi' + b.ced;
export const cTraditional = b.cTr + b.cad + b.ci + g.ction + b.cal; // 'Traditional';
export const cChinese = g.cChi + b.cn + g.cese; // 'Chinese';
export const cChineseSimplified = cChinese + cSimplified;
export const cChineseTraditional = cChinese + cTraditional;
export const cCzech = b.cCz + b.ce + b.cch; // 'Czech';
export const cEnglish = b.cEn + b.cgl + g.cish; // 'English';
export const cFrench = b.cFr + b.cen + b.cch; // 'French';
// export const cGerman = b.cGe + b.cr + cman; // 'German'; // Defined above in the countries section
export const cHungarian = cHung + b.car + g.cian; // 'Hungarian';
export const cItalian = b.cIt + b.cal + g.cian; // 'Italian';
export const cJapanese = cJapan + g.cese; // 'Japanese';
export const cKorean = b.cKo + b.cre + b.can; // 'Korean';
export const cMiscellaneous = g.cMis + ccell + b.can + g.ceous; // 'Miscellaneous';
export const cPolish = b.cPo + b.cl + g.cish; // 'Polish';
export const cPortuguese = cPort + b.cug + b.cu + g.cese; // 'Portuguese';
export const cRussian = b.cRu + b.css + g.cian; // 'Russian';
export const cSpanish = b.cSp + b.can + g.cish; // 'Spanish';

// UI Element Types
export const cButton = b.cBu + b.ctt + b.con; // 'Button';

// Environment Variables
export const cQA = b.cQA;
export const cDEV = b.cDE + b.cV;
export const cPROD = g.cPRO + b.cD; // 'PROD';
export const cProd = g.cPro + b.cd; // 'Prod';
export const cPre = g.cPre;
export const cPRE = g.cPRE;
export const cPreProd = cPre + cProd;
export const cPREPROD = cPRE + cPROD;

// Key Combinations
export const cctrl_a = g.cctrl + b.cPlus + b.ca;
export const cctrl_b = g.cctrl + b.cPlus + b.cb;
export const cctrl_c = g.cctrl + b.cPlus + b.cc;
export const cctrl_d = g.cctrl + b.cPlus + b.cd;
export const cctrl_e = g.cctrl + b.cPlus + b.ce;
export const cctrl_f = g.cctrl + b.cPlus + b.cf;
export const cctrl_g = g.cctrl + b.cPlus + b.cg;
export const cctrl_h = g.cctrl + b.cPlus + b.ch;
export const cctrl_i = g.cctrl + b.cPlus + b.ci;
export const cctrl_j = g.cctrl + b.cPlus + b.cj;
export const cctrl_k = g.cctrl + b.cPlus + b.ck;
export const cctrl_l = g.cctrl + b.cPlus + b.cl;
export const cctrl_m = g.cctrl + b.cPlus + b.cm;
export const cctrl_n = g.cctrl + b.cPlus + b.cn;
export const cctrl_o = g.cctrl + b.cPlus + b.co;
export const cctrl_p = g.cctrl + b.cPlus + b.cp;
export const cctrl_q = g.cctrl + b.cPlus + b.cq;
export const cctrl_r = g.cctrl + b.cPlus + b.cr;
export const cctrl_s = g.cctrl + b.cPlus + b.cs;
export const cctrl_t = g.cctrl + b.cPlus + b.ct;
export const cctrl_u = g.cctrl + b.cPlus + b.cu;
export const cctrl_v = g.cctrl + b.cPlus + b.cv;
export const cctrl_w = g.cctrl + b.cPlus + b.cw;
export const cctrl_x = g.cctrl + b.cPlus + b.cx;
export const cctrl_y = g.cctrl + b.cPlus + b.cy;
export const cctrl_z = g.cctrl + b.cPlus + b.cz;

export const cApplicationName = cApplication + cName;
export const cApplicationRootPath = cApplication + cRoot + cPath;
export const cApplicationCleanedRootPath = cApplication + cCleaned + cRoot + cPath;
export const cConfigurationPath = cConfiguration + cPath;
export const cApplicationVersionNumber = cApplication + cVersion + cNumber;
export const cDataPath = cData + cPath;
export const cCtempPath = b.cc + b.cColon + b.cForwardSlash + b.ctemp + b.cForwardSlash;
export const cPageDataPath = cPage + cDataPath;
export const cWorkflowDataPath = cWorkflow + cDataPath;
export const cKeywordsDataPath = cKeywords + cDataPath;
export const cLocatorsDataPath = cLocators + cDataPath;
export const cArgumentDrivenInterface = cArgument + cDriven + cInterface;
export const cFigletFont = cFiglet + cFont;

// Test Time Tracking
export const cBeginDateTimeStamp = cBegin + cDateTimeStamp;
export const cEndDateTimeStamp = cEnd + cDateTimeStamp;
export const cItemsIndividuallySynch = cItems + cIndividually + cSynch;
export const cTimeStampVariableName = cTimeStamp + cVariable + cName;
export const cBeginTimeStampVariableName = cBegin + cTimeStampVariableName;
export const cEndTimeStampVariableName = cEnd + cTimeStampVariableName;

// Business Rules
// ********************************
// StringParsing rules in order
// ********************************
export const cstringToBoolean = cstring + cTo + cBoolean;
export const cstringToDataType = cstring + cTo + cData + cType;
export const cdetermineObjectDataType = cdetermine + cObject + cData + cType;
export const cisBoolean = cis + cBoolean;
export const cisInteger = cis + cInteger;
export const cisFloat = cis + cFloat;
export const cisString = cis + cString;
export const csingleQuoteSwapAfterEquals = csingle + cQuote + cSwap + cAfter + cEquals;
export const cswapForwardSlashToBackSlash = cswap + cForwardSlash + b.cTo + cBackSlash;
export const cswapBackSlashToForwardSlash = cswap + cBackSlash + b.cTo + cForwardSlash;
export const cswapDoubleForwardSlashToSingleForwardSlash = cswap + cDouble + cForwardSlash + b.cTo + cSingle + cForwardSlash;
export const cswapDoubleBackSlashToSingleBackSlash = cswap + cDouble + cBackSlash + b.cTo + cSingle + cBackSlash;
export const cgetUserNameFromEmail = cget + cUser + cName + cFrom + cEmail;
export const creplaceSpacesWithPlus = creplace + cSpaces + cWith + cPlus;
export const creplaceColonWithUnderscore = creplace + cColon + cWith + cUnderscore;
export const creplaceCharacterWithCharacter = creplace + cCharacter + cWith + cCharacter;
export const ccleanCarriageReturnFromString = cclean + cCarriageReturn + cFrom + cString;
export const cconvertStringToLowerCase = cconvert + cString + cTo + cLower + cCase;
export const cconvertStringToUpperCase = cconvert + cString + cTo + cUpper + cCase;
export const cgetFileNameFromPath = cget + cFileName + cFrom + cPath;
export const cremoveFileExtensionFromFileName = cremove + cFile + cExtension + cFrom + cFileName;
export const cgetValueFromAssignmentOperationString = cget + cValue + cFrom + cAssignment + cOperation + cString;
export const caggregateNumericalDifferenceBetweenTwoStrings = caggregate + cNumerical + cDifference + cBetween + g.cTwo + cStrings;
export const cconvertCamelCaseStringToArray = cconvert + cCamel + cCase + cString + b.cTo + cArray;
export const cconvertArrayToCamelCaseString = cconvert + cArray + b.cTo + cCamel + cCase + cString;
export const cmapWordToCamelCase = g.cmap + cWord + b.cTo + cCamel + cCase;
export const csimplifyAndConsolidateString = csimplify + cAnd + cConsolidate + cString;
export const ccompareSimplifiedAndConsolidatedStrings = ccompare + cSimplified + cAnd + cConsolidated + cStrings;
export const cdoesArrayContainLowerCaseConsolidatedString = cdoes + cArray + cContain + cLower + cCase + cConsolidated + cString;
export const cascertainMatchingFilenames = cascertain + cMatching + cFilenames;
export const cdoesArrayContainFilename = cdoes + cArray + cContain + cFilename;
export const cgetDataCatagoryFromDataContextName = cget + cData + cCatagory + cFrom + cData + cContext + cName;
export const cgetDataCatagoryDetailNameFromDataContextName = cget + cData + cCatagory + cDetail + cName + cFrom + cData + cContext + cName;
export const cgetKeywordNameFromDataContextName = cget + cKeyword + cName + cFrom + cData + cContext + cName;
export const cparseSystemRootPath = cparse + cSystem + cRoot + cPath;
export const creplaceDoublePercentWithMessage = creplace + cDouble + cPercent + cWith + cMessage;
export const cremoveXnumberOfFoldersFromEndOfPath = cremove + b.cX + cnumber + b.cOf + cFolders + cFrom + cEnd + b.cOf + cPath;
export const cgetFirstTopLevelFolderFromPath = cget + g.cFirst + cTop + cLevel + cFolder + cFrom + cPath;

// *********************************
// StringGeneration rules in order
// *********************************
export const ccreateNdigitStringFromNumber = ccreate + b.cN + cdigit + cString + cFrom + cNumber;
export const cgenerateRandomMixedCaseTextByLength1 = cgenerateRandom + cMixedCase + cTextByLength + b.c1;
export const cgenerateRandomMixedCaseTextByLength2 = cgenerateRandom + cMixedCase + cTextByLength + b.c2;
export const cgenerateRandomUpperCaseTextByLength1 = cgenerateRandom + cUpperCase + cTextByLength + b.c1;
export const cgenerateRandomUpperCaseTextByLength2 = cgenerateRandom + cUpperCase + cTextByLength + b.c2;
export const cgenerateRandomLowerCaseTextByLength1 = cgenerateRandom + cLowerCase + cTextByLength + b.c1;
export const cgenerateRandomLowerCaseTextByLength2 = cgenerateRandom + cLowerCase + cTextByLength + b.c2;
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cMixedCase + cTextWithSpecialCharactersByLength + b.c1;
export const cgenerateRandomMixedCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cMixedCase + cTextWithSpecialCharactersByLength + b.c2;
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cUpperCase + cTextWithSpecialCharactersByLength + b.c1;
export const cgenerateRandomUpperCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cUpperCase + cTextWithSpecialCharactersByLength + b.c2;
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength1 = cgenerateRandom + cLowerCase + cTextWithSpecialCharactersByLength + b.c1;
export const cgenerateRandomLowerCaseTextWithSpecialCharactersByLength2 = cgenerateRandom + cLowerCase + cTextWithSpecialCharactersByLength + b.c2;
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength1 = cgenerateRandom + cMixedCase + cAlphaNumericCodeByLength + b.c1;
export const cgenerateRandomMixedCaseAlphaNumericCodeByLength2 = cgenerateRandom + cMixedCase + cAlphaNumericCodeByLength + b.c2;
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength1 = cgenerateRandom + cUpperCase + cAlphaNumericCodeByLength + b.c1;
export const cgenerateRandomUpperCaseAlphaNumericCodeByLength2 = cgenerateRandom + cUpperCase + cAlphaNumericCodeByLength + b.c2;
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength1 = cgenerateRandom + cLowerCase + cAlphaNumericCodeByLength + b.c1;
export const cgenerateRandomLowerCaseAlphaNumericCodeByLength2 = cgenerateRandom + cLowerCase + cAlphaNumericCodeByLength + b.c2;
export const cgenerateRandomNumericCodeByLength1 = cgenerateRandom + cNumericCodeByLength + b.c1;
export const cgenerateRandomNumericCodeByLength2 = cgenerateRandom + cNumericCodeByLength + b.c2;
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cMixedCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c1;
export const cgenerateRandomMixedCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cMixedCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c2;
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cUpperCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c1;
export const cgenerateRandomUpperCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cUpperCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c2;
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength1 = cgenerateRandom + cLowerCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c1;
export const cgenerateRandomLowerCaseAlphaNumericCodeWithSpecialCharactersByLength2 = cgenerateRandom + cLowerCase + cAlphaNumericCodeWithSpecialCharactersByLength + b.c2;
export const cgenerateRandomSpecialCharacterCodeByLength1 = cgenerateRandom + cSpecialCharacterCodeByLength + b.c1;
export const cgenerateRandomSpecialCharacterCodeByLength2 = cgenerateRandom + cSpecialCharacterCodeByLength + b.c2;
export const cgenerateValidEmail1 = cgenerate + cValidEmail + b.c1;
export const cgenerateValidEmail2 = cgenerate + cValidEmail + b.c2;
export const cgenerateInvalidEmail1 = cgenerate + cInvalidEmail + b.c1;
export const cgenerateInvalidEmail2 = cgenerate + cInvalidEmail + b.c2;

// *********************************
// CharacterGeneration rules in order
// *********************************
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cMixedCase + cLetterOrSpecialCharacter + b.c1;
export const crandomlyGenerateMixedCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cMixedCase + cLetterOrSpecialCharacter + b.c2;
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cUpperCase + cLetterOrSpecialCharacter + b.c1;
export const crandomlyGenerateUpperCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cUpperCase + cLetterOrSpecialCharacter + b.c2;
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter1 = crandomlyGenerate + cLowerCase + cLetterOrSpecialCharacter + b.c1;
export const crandomlyGenerateLowerCaseLetterOrSpecialCharacter2 = crandomlyGenerate + cLowerCase + cLetterOrSpecialCharacter + b.c2;
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + cEither + cMixedCase + cLetterOrNumberOrSpecialCharacter + b.c1;
export const crandomlyGenerateEitherMixedCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + cEither + cMixedCase + cLetterOrNumberOrSpecialCharacter + b.c2;
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + cEither + cUpperCase + cLetterOrNumberOrSpecialCharacter + b.c1;
export const crandomlyGenerateEitherUpperCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + cEither + cUpperCase + cLetterOrNumberOrSpecialCharacter + b.c2;
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter1 = crandomlyGenerate + cEither + cLowerCase + cLetterOrNumberOrSpecialCharacter + b.c1;
export const crandomlyGenerateEitherLowerCaseLetterOrNumberOrSpecialCharacter2 = crandomlyGenerate + cEither + cLowerCase + cLetterOrNumberOrSpecialCharacter + b.c2;
export const crandomlyGenerateMixedCaseAlphaNumericCharacter1 = crandomlyGenerate + cMixedCase + cAlphaNumericCharacter + b.c1;
export const crandomlyGenerateMixedCaseAlphaNumericCharacter2 = crandomlyGenerate + cMixedCase + cAlphaNumericCharacter + b.c2;
export const crandomlyGenerateUpperCaseAlphaNumericCharacter1 = crandomlyGenerate + cUpperCase + cAlphaNumericCharacter + b.c1;
export const crandomlyGenerateUpperCaseAlphaNumericCharacter2 = crandomlyGenerate + cUpperCase + cAlphaNumericCharacter + b.c2;
export const crandomlyGenerateLowerCaseAlphaNumericCharacter1 = crandomlyGenerate + cLowerCase + cAlphaNumericCharacter + b.c1;
export const crandomlyGenerateLowerCaseAlphaNumericCharacter2 = crandomlyGenerate + cLowerCase + cAlphaNumericCharacter + b.c2;
export const crandomlyGenerateNumericCharacter1 = crandomlyGenerate + cNumericCharacter + b.c1;
export const crandomlyGenerateNumericCharacter2 = crandomlyGenerate + cNumericCharacter + b.c2;
export const crandomlyGenerateSpecialCharacter1 = crandomlyGenerate + cSpecialCharacter + b.c1;
export const crandomlyGenerateSpecialCharacter2 = crandomlyGenerate + cSpecialCharacter + b.c2;
export const crandomlyGenerateNumberInRange1 = crandomlyGenerate + cNumberInRange + b.c1;
export const crandomlyGenerateNumberInRange2 = crandomlyGenerate + cNumberInRange + b.c2;
export const crandomlyGenerateBooleanValue1 = crandomlyGenerate + cBooleanValue + b.c1;
export const crandomlyGenerateBooleanValue2 = crandomlyGenerate + cBooleanValue + b.c2;
export const crandomlyGenerateMixedCaseAlphabeticCharacter1 = crandomlyGenerate + cMixedCase + cAlphabeticCharacter + b.c1;
export const crandomlyGenerateMixedCaseAlphabeticCharacter2 = crandomlyGenerate + cMixedCase + cAlphabeticCharacter + b.c2;
export const crandomlyGenerateLowerCaseLetter1 = crandomlyGenerate + cLowerCase + cLetter + b.c1;
export const crandomlyGenerateLowerCaseLetter2 = crandomlyGenerate + cLowerCase + cLetter + b.c2;
export const crandomlyGenerateUpperCaseLetter1 = crandomlyGenerate + cUpperCase + cLetter + b.c1;
export const crandomlyGenerateUpperCaseLetter2 = crandomlyGenerate + cUpperCase + cLetter + b.c2;
export const cconvertNumberToUpperCaseLetter = cconvert + cNumber + cTo + cUpperCase + cLetter;
export const cconvertNumberToLowerCaseLetter = cconvert + cNumber + cTo + cLowerCase + cLetter;
