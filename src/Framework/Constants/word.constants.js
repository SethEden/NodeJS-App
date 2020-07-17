/**
 * @file word.constants.js
 * @module word-constants
 * @description Contains many re-usable word constants.
 * @requires module:basic-constants
 * @requires module:phonics-constants
 * @requires module:generic-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as b from './basic.constants';
import * as p from './phonics.constants';
import * as g from './generic.constants';

// Miscelaneious Words
export const c1a1d = 'a' + 'd'; // 'ca' & 'cd' is some how a reserved word.
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
export const cNode = b.cN + p.code;
export const cnode = b.cn + p.code;
export const curl = b.cur + b.cl; // 'url';
export const cURL = b.cUR + b.cL;
export const cNth = b.cN + b.cth;
export const cnth = b.cn + b.cth;
export const cregEx = p.creg + b.cEx;
export const cRegEx = p.cReg + b.cEx;
export const cflag = b.cfl + b.cag;
export const cFlag = b.cFl + b.cag;
export const cflags = cflag + b.cs;
export const cFlags = cFlag + b.cs;

// Data Types
export const cString = b.cS + p.ctring;
export const cstring = b.cs + p.ctring;
export const cstrings = cstring + b.cs;
export const cStrings = cString + b.cs;
export const cinteger = b.ci + p.cnteger;
export const cInteger = b.cI + p.cnteger; // 'Integer';
export const cintegers = cinteger + b.cs;
export const cIntegers = cInteger + b.cs;
export const cfloat = b.cf + p.cloat;
export const cFloat = b.cF + p.cloat; // 'Float';
export const cfloats = cfloat + b.cs;
export const cFloats = cFloat + b.cs;
export const clong = b.cl + p.cong;
export const cLong = b.cL + p.cong; // 'Long';
export const clongs = clong + b.cs;
export const cLongs = cLong + b.cs;
export const cshort = b.cs + p.chort;
export const cShort = b.cS + p.chort; // 'Short';
export const cshorts = cshort + b.cs;
export const cShorts = cShort + b.cs;
export const cdouble = b.cd + p.couble;
export const cDouble = b.cD + p.couble; // 'Double';
export const cdoubles = cdouble + b.cs;
export const cDoubles = cDouble + b.cs;
export const cchar = b.cch + b.car;
export const cChar = b.cCh + b.car; // 'Char';
export const cchars = cchar + b.cs;
export const cChars = cChar + b.cs;
export const cboolean = b.cb + p.coolean;
export const cBoolean = b.cB + p.coolean;
export const cbooleans = cboolean + b.cs;
export const cBooleans = cBoolean + b.cs;
export const cobject = b.co + p.cbject;
export const cObject = b.cO + p.cbject;
export const cobjects = cobject + b.cs;
export const cObjects = cObject + b.cs;

// General Use Words
export const cwind = b.cw + p.cind;
export const cWind = b.cW + p.cind;
export const cwindow = cwind + b.cow;
export const cWindow = cWind + b.cow;
export const cwindows = cwindow + b.cs;
export const cWindows = cWindow + b.cs;
export const clinux = p.clin + b.cux;
export const cLinux = p.cLin + b.cux;
export const cword = b.cw + p.cord; // 'word';
export const cWord = b.cW + p.cord;
export const cOOPS = b.cO + p.cOPS;
export const cOops = b.cO + p.cops; // 'Oops';
export const coops = b.co + p.cops;
export const cConfiguration = b.cCo + b.cnf + b.cig + b.cur + b.ca + p.ction; // 'Configura' + p.ction;
export const cConfigurations = cConfiguration + b.cs;
export const cempty = b.cem + b.cpt + b.cy;
export const cEmpty = b.cEm + b.cpt + b.cy; // 'Empty';
export const cfull = b.cf + p.cull;
export const cFull = b.cF + p.cull;
export const ccreate = b.cc + p.create;
export const cCreate = b.cC + p.create; // 'Create';
export const cSubmit = b.cSu + b.cbm + b.cit; // 'Submit';
export const c_add = c1a1d + b.cd;
export const cAdd = b.cAd + b.cd; // 'Add';
export const cAdded = cAdd + b.ced;
export const cClose = b.cCl + b.cos + b.ce; // 'Close';
export const cOpen = b.cOp + b.cen; // 'Open';
export const cUpdate = b.cUp + p.cdate; // 'Update';
export const cEdit = b.cEd + b.cit; // 'Edit';
export const cDelete = b.cD + p.celete;
export const cdelete = b.cd + p.celete;
export const call = p.call;
export const cAll = p.cAll; // 'All';
export const cat = b.ca + b.ct;
export const cAt = b.cA + b.ct; // 'At'; // Not to be confused with the b.cAt = '@'!!!
export const cselect = b.cse + b.cle + b.cct;
export const cSelect = b.cSe + b.cle + b.cct; // 'Select';
export const ccancel = b.cca + b.cnc + b.cel;
export const cCancel = b.cCa + b.cnc + b.cel; // 'Cancel';
export const cconfirm = b.cco + b.cnf + b.cir + b.cm;
export const cConfirm = b.cCo + b.cnf + b.cir + b.cm; // 'Confirm';
export const cAccount = b.cAc + b.cco + b.cun + b.ct; // 'Account';
export const cHamburger = b.cHa + b.cmb + b.cur + b.cge + b.cr; // 'Hamburger';
export const cMe = b.cM + b.ce;
export const cMenu = cMe + b.cnu; // 'nu';
export const cwith = b.cw + p.cith;
export const cWith = b.cW + p.cith;
export const cwithout = cwith + cout;
export const cWithout = cWith + cout;
export const cdetail = b.cde + b.cta + b.cil;
export const cDetail = b.cDe + b.cta + b.cil; // 'Detail';
export const cdetails = cdetail + b.cs;
export const cDetails = cDetail + b.cs;
export const cfront = b.cfr + b.con + b.ct;
export const cFront = b.cFr + b.con + b.ct; // 'Front';
export const cback = b.cba + b.cck;
export const cBack = b.cBa + b.cck; // 'Back';
export const cleft = b.cle + b.cft;
export const cLeft = b.cLe + b.cft; // 'Left';
export const cright = b.cri + b.cgh + b.ct;
export const cRight = b.cRi + b.cgh + b.ct; // 'Right';
export const cTo = b.cTo // 'To';
export const ctop = b.cto + b.cp;
export const cTop = cTo + b.cp;
export const cbottom = b.cbo + b.ctt + b.com;
export const cBottom = b.cBo + b.ctt + b.com; // 'Bottom';
export const cbegin = b.cbe + b.cgi + b.cn;
export const cBegin = b.cBe + b.cgi + b.cn; // 'Begin';
export const cBEGIN = b.cBE + b.cGI + b.cN;
export const cbeginning = cbegin + b.cn + p.cing;
export const cBeginning = cBegin + b.cn + p.cing;
export const cend = b.cen + b.cd;
export const cEnd = b.cEn + b.cd; // 'End';
export const cEND = b.cEN + b.cD;
export const cending = cend + p.cing;
export const cEnding = cEnd + p.cing;
export const cThe = b.cTh + b.ce; // 'The';
export const citem = b.cit + b.cem;
export const cItem = b.cIt + b.cem; // 'Item';
export const citems = citem + b.cs;
export const cItems = cItem + b.cs;
export const cList = b.cLi + b.cst; // 'List';
export const cLists = cList + b.cs;
export const cshare = b.cs + p.chare;
export const cShare = b.cS + p.chare;
export const cShares = cShare + b.cs;
export const cshares = cshare + b.cs;
export const cShared = cShare + b.cd;
export const cshared = cshare + b.cd;
export const cUnShared = b.cUn + cShared;
export const cUnshared = b.cUn + cshared;
export const cUnshare = b.cUn + cshare;
export const cUnShare = b.cUn + cShare;
export const cview = b.cv + p.ciew;
export const cView = b.cV + p.ciew; // 'View';
export const cNew = b.cNe + b.cw; // 'New';
export const cLoad = b.cLo + 'ad'; // b.cad; // 'Load'; // NOTE: Apparently 'cad' is also a reserved word.
export const cClick = b.cC + p.click;
export const cclick = b.cc + p.click;
export const cPressKey = b.cP + p.cress + cKey;
export const cpressKey = b.cp + p.cress + cKey;
export const cexpect = b.cex + b.cpe + b.cct; // 'expect';
export const cnavigate = b.cn + p.cavigate;
export const cNavigate = b.cN + p.cavigate; // 'Navigate';
export const cSave = b.cSa + b.cve; // 'Save';
export const cDownload = b.cDo + b.cwn + b.clo + b.cad; // 'Download';
export const cNegative = b.cNe + b.cga + p.ctive; // 'Negative';
export const cPositive = b.cPo + b.csi + p.ctive;
export const cEntire = b.cEn + b.cti + b.cre; // 'Entire';
export const cinfo = b.cin + b.cfo;
export const cInfo = b.cIn + b.cfo; // 'Info';
export const cLink = b.cLi + b.cnk; // 'Link';
export const cLabel = b.cLa + b.cbe + b.cl; // 'Label';
export const cField = b.cFi + b.cel + b.cd; // 'Field';
export const cType = b.cT + p.cype;
export const ctype = b.ct + p.cype;
export const cTypes = cType + b.cs;
export const cValid = b.cV + p.calid;
export const cvalid = b.cv + p.calid;
export const cValidation = cValid + b.ca + p.ction;
export const cValidate = b.cVa + b.cli + p.cdate; // 'Validate';
export const cInvalid = b.cIn + cvalid;
export const cbug = b.cbu + b.cg;
export const cdebug = b.cde + cbug;
export const cDebug = b.cDe + cbug; // 'Debug';
export const cpage = b.cp + p.cage;
export const cPage = b.cP + p.cage;
export const cpages = cpage + b.cs;
export const cPages = cPage + b.cs;
export const cmessage = b.cme + b.css + p.cage;
export const cMessage = cMe + b.css + p.cage;
export const cScript = b.cSc + b.cri + b.cpt; // 'Script';
export const cScripts = cScript + b.cs;
export const cKeyword = cKey + cword;
export const ckeyword = ckey + cword;
export const cKeywords = cKeyword + b.cs;
export const ckeywords = ckeyword + b.cs;
export const cData = b.cD + p.cata;
export const cdata = b.cd + p.cata;
export const cResults = b.cRe + b.csu + b.clt + b.cs; // 'Results';
export const cwork = b.cwo + b.crk;
export const cWork = b.cWo + b.crk;
export const cflow = b.cfl + b.cow;
export const cFlow = b.cFl + b.cow;
export const cworkflow = cwork + cflow;
export const cWorkflow = cWork + cflow; // 'Workflow';
export const cworkflows = cworkflow + b.cs;
export const cWorkflows = cWorkflow + b.cs;
export const cTest = b.cT + p.cest;
export const cTEST = b.cTE + b.cST; // 'TEST';
export const ctest = b.ct + p.cest;
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
export const cAction = b.cAc + p.ction; // 'Action';
export const cActions = cAction + b.cs;
export const cAutomation = b.cAu + b.cto + b.cma + p.ction; // 'Automation';
export const cnumber = b.cn + p.cumber;
export const cNumber = b.cN + p.cumber; // 'Number';
export const cHost = b.cHo + b.cst; // 'Host';
export const cOf = b.cOf;
export const cRow = b.cRo + b.cw; // 'Row';
export const cRun = b.cRu + b.cn; // 'Run';
export const cRows = cRow + b.cs;
export const cMaster = b.cMa + b.cst + b.cer; // 'Master';
export const cEnvironment = b.cEn + b.cvi + b.cro + b.cn + p.cment; // 'Environment';
export const cname = b.cn + p.came;
export const cName = b.cN + p.came;
export const cnames = cname + b.cs;
export const cNames = cName + b.cs;
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
export const cdate = p.cdate;
export const cDate = b.cD + p.cate; // 'Date';
export const cTime = b.cT + p.cime; // 'Time';
export const ctime = b.ct + p.cime; // 'time';
export const cStamp = b.cSt + b.cam + b.cp; // 'Stamp';
export const cmediate = p.cmed + b.ci + p.cate;
export const cintermediate = p.cinter + cmediate;
export const cIntermediate = p.cInter + cmediate; // 'Intermediate';
export const cpath = b.cp + p.cath;
export const cPath = b.cP + p.cath; // 'Path';
export const cexit = b.cex + b.cit;
export const cExit = b.cEx + b.cit; // 'Exit';
export const cViewer = b.cVi + b.cew + b.cer; // 'Viewer';
export const cPermission = b.cPe + b.crm + b.cis + b.csi + b.con; // 'Permission';
export const cBug = b.cBu + b.cg; // 'Bug';
export const cset = b.cse + b.ct;
export const cSet = b.cSe + b.ct; // 'Set';
export const csetting = cset + b.ct + p.cing;
export const cSetting = cSet + b.ct + p.cing;
export const cPreview = p.cPre + cview; // 'Preview';
export const climit = b.cli + b.cm + b.ci + b.ct; // b.cli + b.cmi + b.ct; // NOTE: b.cmi resolves as "s"
export const cLimit = b.cli + b.cm + b.ci + b.ct; // b.cLi + b.cmi + b.ct; // NOTE: b.cmi resolves as "s"
export const cGate = b.cGa + b.cte;
export const cway = b.cwa + b.cy;
export const cWay = b.cWa + b.cy;
export const cGateway = cGate + cway; // 'Gateway';
export const cProcess = p.cPro + b.cce + b.css;
export const cProcessing = cProcess + p.cing; // 'Processing';
export const cComplete = b.cCo + b.cmp + b.cl + p.cete; // 'Complete';
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
export const creplace = b.cr + p.ceplace;
export const cReplace = b.cR + p.ceplace; // 'Replace';
export const cSpace = b.cSp + p.cace; // 'Space';
export const cSpaces = cSpace + b.cs; // 'Spaces';
export const cPlus = b.cPl + b.cus; // 'Plus';
export const cColon = b.cCo + b.clo + b.cn; // 'Colon';
export const cunder = b.cun + p.cder;
export const cUnder = b.cUn + p.cder;
export const cscore = b.cs + p.ccore;
export const cScore = b.cS + p.ccore;
export const cCatagory = b.cCa + b.cta + b.cgo + b.cry; // 'Catagory';
export const cclean = b.cc + p.clean;
export const cClean = b.cC + p.clean; // 'Clean';
export const ccleaned = cclean + b.ced;
export const cCleaned = cClean + b.ced;
export const cCarriage = b.cCa + b.crr + b.ci + p.cage; // 'Carriage';
export const cturn = b.ctu + b.crn;
export const creturn = b.cre + cturn;
export const cReturn = b.cRe + cturn; // 'Return';
export const cconvert = b.cc + p.convert;
export const cConvert = b.cC + p.convert; // 'Convert';
export const cLow = b.cLo + b.cw;
export const cLower = cLow + b.cer; // 'Lower';
export const cCase = b.cC + p.c_ase; // 'Case';
export const cmove = b.cmo + b.cve;
export const cremove = b.cre + cmove;
export const cRemove = b.cRe + cmove; // 'Remove';
export const cExtension = p.cExt + b.cen + b.cs + p.cion; // 'Extension';
export const cdig = b.cdi + b.cg;
export const cDig = b.cDi + b.cg;
export const cdigit = cdig + b.cit;
export const cDigit = cDig + b.cit; // 'Digit';
export const clet = b.cle + b.ct;
export const cLet = b.cLe + b.ct;
export const cLetter = cLet + b.ct + b.cer; // 'Letter';
export const cUpper = b.cUp + b.cp + b.cer; // 'Upper';
export const ccount = b.cco + p.cunt;
export const cCount = b.cCo + p.cunt; // 'Count';
export const ccounter = ccount + b.cer;
export const cCounter = cCount + b.cer;
export const crandom = b.cr + p.candom;
export const cRandom = b.cR + p.candom; // 'Random';
export const crandomly = crandom + b.cly;
export const cRandomly = cRandom + b.cly;
export const cgenerate = b.cg + p.cenerate;
export const cGenerate = b.cG + p.cenerate; // 'Generate';
export const cParent = b.cP + p.carent;
export const cparent = b.cp + p.carent;
export const cvalue = b.cva + b.clu + b.ce;
export const cValue = b.cVa + b.clu + b.ce; // 'Value';
export const cfind = b.cfi + b.cnd;
export const cFind = b.cFi + b.cnd; // 'Find';
export const cfindvalue = cfind + cvalue;
export const cfindValue = cfind + cValue;
export const cFindValue = cFind + cValue;
export const crange = b.cra + b.cng + b.ce;
export const cRange = b.cRa + b.cng + b.ce; // 'Range';
export const cNumeric = b.cNu + b.cme + b.cri + b.cc; // 'Numeric';
export const cNumerical = cNumeric + b.cal;
export const clength = b.cle + b.cng + b.cth;
export const cLength = b.cLe + b.cng + b.cth; // 'Length';
export const ccode = b.cco + b.cde;
export const cCode = b.cCo + b.cde; // 'Code';
export const cEither = b.cEi + b.cth + b.cer; // 'Either';
export const cenable = b.cen + p.cable;
export const cEnable = b.cEn + p.cable;
export const cenabled = cenable + b.cd;
export const cEnabled = cEnable + b.cd; // 'Enabled';
export const cdetermine = b.cd + p.cetermine;
export const cDetermine = b.cD + p.cetermine; // 'Determine';
export const cVariable = p.cVar + b.ci + p.cable; // 'Variable';
export const cVisibility = b.cV + p.cisibility;
export const cvisibility = b.cv + p.cisibility;
export const cDialog = b.cDi + b.ca + clog; // 'Dia' + clog;
export const clibrary = b.cli + b.cbr + b.car + b.cy;
export const cLibrary = b.cLi + b.cbr + b.car + b.cy; // 'Library';
export const ctable = b.cta + b.cbl + b.ce;
export const cTable = b.cTa + b.cbl + b.ce; // 'Table';
export const cequal = b.ceq + b.cua + b.cl;
export const cEqual = b.cEq + b.cua + b.cl; // 'Equal';
export const cEquals = cEqual + b.cs;
export const cRaw = b.cRa + b.cw; // 'Raw';
export const cOperation = p.cOperat + b.cion;
export const cOperating = p.cOperat + b.cing;
export const cSystem = b.cSy + b.cst + b.cem; // 'System';
export const cAssignment = b.cAs + b.si + b.cgn + p.cment; // 'Assignment';
export const cAbreviated = b.cAb + b.cre + b.cvi + b.cat + b.ced; // 'Abreviated';
export const cwait = b.cw + p.cait;
export const cWait = b.cW + p.cait;
export const cawait = b.ca + cwait; // 'await';
export const cHTML = b.cHT + b.cML;
export const chtml = b.cht + b.cml;
export const cinner = b.ci + p.cnner;
export const cInner = b.cI + p.cnner;
export const cOver = b.cOv + b.cer; // 'Over';
export const cRide = b.cR + p.cide;
export const cride = b.cr + p.cide;
export const cOverride = cOver + cride;
export const cActionOverride = cAction + cOverride;
export const cLocator = b.cLo + b.cca + b.cto + b.cr; // 'Locator';
export const cLocators = cLocator + b.cs;
export const cLocatorLibrary = cLocator + cLibrary;
export const cSelector = b.cS + p.celector;
export const cselector = b.cs + p.celector;
export const cSelectors = cSelector + b.cs;
export const cIndividual = b.cIn + b.cdi + b.cvi + b.cdu + b.cal; // 'Individual';
export const cIndividually = cIndividual + b.cly;
export const cExist = b.cEx + b.cis + b.ct; // 'Exist';
export const cExists = cExist + b.cs;
export const cAsynch = b.cAs + p.cynch;
export const cSynch = b.cS + b.cynch;
export const cSingular = b.cSi + b.cng + b.cul + b.car; // 'Singular';
export const cParallel = b.cPa + b.cra + b.cll + b.cel; // 'Parallel';
export const cMulti = b.cMu + b.clt + b.ci; // 'Multi';
export const cUnified = b.cUn + b.cif + b.cie + b.cd; // 'Unified';
export const cfault = b.cfa + b.cul + b.ct;
export const cdefault = b.cde + cfault;
export const cDefault = b.cDe + cfault; // 'Default';
export const csingle = b.cs + p.cingle;
export const cSingle = b.cS + p.cingle; // 'Single';
export const cQuote = b.cQu + b.cot + b.ce; // 'Quote';
export const cswap = b.cs + p.cwap;
export const cSwap = b.cS + p.cwap; // 'Swap';
export const cAfter = b.cAf + b.ct + b.cer; // 'After';
export const cOnce = b.cOn + b.cce;
export const cload = b.clo + 'ad'; // b.cad; // 'load'; // NOTE: Apparently 'cad' is also a reserved word.
export const cUpload = b.cUp + cload;
export const cStyle = b.cSt + b.cyl + b.ce; // 'Style';
export const cAssert = b.cAs + b.cse + b.crt; // 'Assert';
export const cLess = b.cL + p.cess;
export const cless = b.cl + p.cess;
export const cGreat = b.cGr + p.ceat;
export const cgreat = b.cgr + p.ceat;
export const cGreater = cGreat + b.cer;
export const cgreater = cgreat + b.cer;
export const cthen = b.ct + p.chen;
export const cThen = b.cT + p.chen;
export const cthan = b.ct + p.chan;
export const cThan = b.cT + p.chan;
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
export const cAlpha = b.cA + p.clpha;
export const calpha = b.ca + p.clpha;
export const cbetic = b.cbe + b.cti + b.cc; // 'betic';
export const cAlphabetic = cAlpha + cbetic;
export const ctext = b.ct + p.cext;
export const cText = b.cT + p.cext;
export const cTEXT = b.cTE + b.cXT; // 'TEXT';
export const cContext = p.cCon + ctext;
export const cinput = b.cin + cput;
export const cInput = b.cIn + cput;
export const cDescription = b.cDe + b.csc + b.cri + b.cp + p.ction; // 'Descrip' + b.ction;
export const cConstant = p.cCon + b.cst + b.can + b.ct; // 'stant';
export const cIteration = b.cIt + b.cer + b.ca + p.ction; // 'Itera' + b.ction;
export const cProject = b.cP + p.croject;
export const cproject = b.cp + p.croject;
export const cProjects = cProject + b.cs;
export const cAdvance = b.cAd + b.cva + b.cnc + b.ce; // 'Advance';
export const cAdvanced = cAdvance + b.cd;
export const cCreation = b.cCr + b.cea + p.ction; // 'Crea' + b.ction;
export const ctestData = ctest + cData;
export const cpageData = cpage + cData;
export const cPageData = cPage + cData;
export const cTestName = cTest + cName;
export const cPageName = cPage + cName;
export const cWebkey = b.cWe + b.cb + ckey; // 'Web' + ckey;
export const cFile = b.cF + p.cile;
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
export const csource = b.cs + p.cource;
export const cSource = b.cS + p.cource;
export const cresource = b.cre + csource;
export const cResource = b.cRe + csource;
export const cresources = cresource + b.cs; // 'resource' + b.cs;
export const cResources = cResource + b.cs;
export const cClass = b.cC + p.c_lass;
export const cclass = b.cc + p.c_lass;
export const cIngestion = b.cIn + b.cge + b.cs + p.ction; // 'Inges' + b.ction;
export const cis = b.cis;
export const cIs = b.cIs;
export const cIS = b.cIS;
export const ccheck = b.cc + p.check;
export const cCheck = b.cC + p.check;
export const cchecked = ccheck + b.ced;
export const cElement = b.cEl + b.ce + p.cment; // 'Element';
export const cElementName = cElement + cName;
export const callow = call + b.cow;
export const cAllow = cAll + b.cow;
export const callowable = callow + p.cable;
export const cAllowable = cAllow + p.cable;
export const chome = b.cho + b.cme;
export const cHome = b.cHo + b.cme; // 'Home';
export const cpublic = b.cpu + b.cbl + b.cic;
export const cPublic = b.cPu + b.cbl + b.cic; // 'Public';
export const cspecial = b.csp + b.cec + b.cia + b.cl;
export const cSpecial = b.cSp + b.cec + b.cia + b.cl; // 'Special';
export const ccharacter = cchar + b.cac + p.cter;
export const cCharacter = cChar + b.cac + p.cter; // 'Character';
export const ccharacters = ccharacter + b.cs;
export const cCharacters = cCharacter + b.cs;
export const cedge = b.ced + b.cge;
export const cEdge = b.cEd + b.cge; // 'Edge';
export const cWorks = cWork + b.cs;
export const csolid = b.cs + p.colid;
export const cSolid = b.cS + p.colid;
export const cBinary = b.cBi + b.cna + b.cry; // 'Binary';
export const cTimeout = cTime + cout;
export const cTimeOut = cTime + cOut;
export const cDwell = b.cDw + b.cel + b.cl; // 'Dwell';
export const cExecute = b.cEx + b.cec + b.cut + b.ce; // 'Execute';
export const csibling = b.cs + p.cibling;
export const cSibling = b.cS + p.cibling;
export const cchild = b.cc + p.child;
export const cChild = b.cC + p.child;
export const cFilter = b.cF + p.cilter;
export const cfilter = b.cf + p.cilter;
export const cAttributes = b.cA + p.cttributes;
export const cattributes = b.ca + p.cttributes;
export const cDisabled = b.cD + p.cisabled;
export const cdisabled = b.cd + p.cisabled;
export const cMan = b.cMa + b.cn;
export const cman = b.cma + b.cn;
export const cWoman = b.cWo + cman;
export const cwoman = b.cwo + cman;
export const ccell = b.cel + b.cl;
export const cCell = b.Cel + b.cl;
export const cHung = b.cH + p.cung;
export const chung = b.ch + p.cung;
export const cport = b.cpo + b.crt;
export const cPort = b.cPo + b.crt;
export const cConstructor = b.cCo + b.cns + b.ctr + b.cu + p.cctor
export const cwarn = b.cw + p.carn;
export const cWarn = b.cW + p.carn;
export const cwarning = cwarn + p.cing; //b.cw + p.carning;
export const cWarning = cWarn + p.cing; //b.cW + p.carning;
export const cwarnings = cwarning + b.cs;
export const cWarnings = cWarning + b.cs;
export const cerror = b.ce + p.crror;
export const cError = b.cE + p.crror;
export const cDash = b.cDa + b.csh;
export const cboard = b.cbo + p.card;
export const cDashboard = cDash + cboard;
export const ccompose = b.co + b.cmp + p.cose;
export const cdecompose = b.cde + ccompose;
export const cDecompose = b.cDe + ccompose;
export const carray = b.car + p.cray;
export const cArray = b.cAr + p.cray;
export const ccamel = b.cca + p.cmel;
export const cCamel = b.cCa + p.cmel;
export const cround = b.cr + p.cound;
export const cRound = b.cR + p.cound;
export const crounded = cround + b.ced;
export const cRounded = cRound + b.ced;
export const cquart = b.cqu + p.cart;
export const cQuart = b.cQu + p.cart;
export const cquarter = cquart + b.cer;
export const cQuarter = cQuart + b.cer;
export const cquaternion = b.cqu + b.cat + b.cer + p.cnion;
export const cQuaternion = b.cQu + b.cat + b.cer + p.cnion;
export const cnormal = b.cn + p.cormal;
export const cNormal = b.cN + p.cormal;
export const cnormalize = cnormal + p.cize;
export const cNormalize = cNormal + p.cize;
export const cdegree = b.cd + p.cegree;
export const cDegree = b.cD + p.cegree;
export const cdegrees = cdegree + b.cs;
export const cDegrees = cDegree + b.cs;
export const cangle = b.can + p.cgle;
export const cAngle = b.cAn + p.cgle;
export const ctrap = b.ct + p.crap;
export const cTrap = b.cT + p.crap;
export const cFraction = p.cFra + p.cction;
export const cvector = b.cve + p.cctor;
export const cVector = b.cVe + p.cctor;
export const cform = b.cfo + b.crm;
export const ctransform = p.ctrans + cform;
export const cTransform = p.cTrans + cform;
export const cpoint = b.cpo + p.cint;
export const cPoint = b.cPo + p.cint;
export const clocation = p.cloc + p.cation;
export const cLocation = p.cLoc + p.cation;
export const cSort = b.cS + p.cort;
export const csort = b.cs + p.cort;
export const csimplify = p.csim + p.cplify;
export const cSimplify = p.cSim + p.cplify;
export const cconsolidate = p.ccon + p.csol + b.ci + cdate;
export const cConsolidate = p.cCon + p.csol + b.ci + cdate;
export const cConsolidated = cConsolidate + b.cd;
export const ccompare = p.ccomp + p.care;
export const cCompare = p.cComp + p.care;
export const ccontain = p.ccon + p.ctain;
export const cContain = p.cCon + p.ctain;
export const ccontains = ccontain + b.cs;
export const cContains = cContain + b.cs;
export const cvideo = b.cv + p.cideo;
export const cVideo = b.cV + p.cideo;
export const cProduct = p.cPro + p.cduct;
export const caggregate = b.ca + p.cggregate;
export const cAggregate = b.cA + p.cggregate;
export const cDifference = p.cDiff + b.cer + p.cence;
export const cbet = b.cbe + b.ct;
export const cBet = b.cBe + b.ct;
export const cbetween = cbet + p.cween;
export const cBetween = cBet + p.cween;
export const ccertain = b.cce + b.crt + p.cain;
export const cascertain = b.cas + ccertain;
export const cAscertain = b.cAs + ccertain;
export const cmatch = b.cma + p.ctch;
export const cMatch = b.cMa + p.ctch;
export const cmatching = cmatch + p.cing;
export const cMatching = cMatch + p.cing;
export const cdoes = b.cdo + b.ces;
export const cDoes = b.cDo + b.ces;
export const capplication = p.capp + p.clica + p.ction;
export const cApplication = p.cApp + p.clica + p.ction;
export const cdeploy = b.cd + b.cep + p.cloy;
export const cDeploy = b.cD + b.cep + p.cloy;
export const clease = b.cle + p.c_ase;
export const crelease = b.cre + clease;
export const cRelease = b.cRe + clease;
export const croot = b.cr + p.coot;
export const cRoot = b.cR + p.coot;
export const cparse = b.cp + p.carse;
export const cParse = b.cP + p.carse;
export const cforward = b.cf + b.cor + p.cward;
export const cForward = b.cF + b.cor + p.cward;
export const cslash = b.cs + p.clash;
export const cSlash = b.cS + p.clash;
export const cmeta = b.cm + p.ceta;
export const cMeta = b.cM + p.ceta;
export const cMetaData = cMeta + cData;
export const cbusiness = b.cb + p.cusiness;
export const cBusiness = b.cB + p.cusiness;
export const crule = b.cr + p.cule;
export const cRule = b.cR + p.cule;
export const cfresh = b.cfr + p.cesh;
export const crefresh = b.cre + cfresh;
export const cRefresh = b.cRe + cfresh;
export const ceval = b.ce + p.cval;
export const cEval = b.cE + p.cval;
export const creload = b.cre + cload;
export const cReload = b.cRe + cload;
export const cdemo = b.cd + p.cemo;
export const cDemo = b.cD + p.cemo;
export const ccommon = b.cc + p.common;
export const cCommon = b.cC + p.common;
export const cfunction = b.cf + b.cun + p.cction;
export const cFunction = b.cF + b.cun + p.cction;
export const cfunctions = cfunction + b.cs;
export const cFunctions = cFunction + b.cs;
export const cmultiple = p.cmulti + p.cple;
export const cMultiple = p.cMulti + p.cple;
export const cJournal = b.cJo + b.cur + p.cnal;
export const cExecution = p.cExe + b.ccu + p.ction;
export const cpercent = p.cper + p.ccent;
export const cPercent = p.cPer + p.ccent;
export const cbasic = b.cb + p.casic;
export const cBasic = b.cB + p.casic;
export const codd = b.cod + b.cd;
export const cOdd = b.cOd + b.cd;
export const ceven = b.ce + p.cven;
export const cEven = b.cE + p.cven;
export const cevent = b.ce + p.cvent;
export const cEvent = b.cE + p.cvent;
export const cevents = cevent + b.cs;
export const cEvents = cEvent + b.cs;
export const cface = b.cfa + b.cce;
export const cFace = b.cFa + b.cce;
export const cargument = p.carg + b.cu + p.cment;
export const cArgument = p.cArg + b.cu + p.cment;
export const cdrive = b.cd + p.crive;
export const cDrive = b.cD + p.crive;
export const cdriven = cdrive + b.cn;
export const cDriven = cDrive + b.cn;
export const cinterface = p.cinter + cface;
export const cInterface = p.cInter + cface;
export const cfig = b.cf + b.cig;
export const cFig = b.cF + b.cig;
export const cfiglet = cfig + clet;
export const cFiglet = cFig + clet;
export const cfont = b.cf + p.cont;
export const cFont = b.cF + p.cont;
export const cmodule = p.cmod + p.cule;
export const cModule = p.cMod + p.cule;
export const ccolor = p.ccol + b.cor;
export const cColor = p.cCol + b.cor;
export const ccolors = ccolor + b.cs;
export const cColors = cColor + b.cs;
export const cold = b.col + b.cd;
export const cOld = b.cOl + b.cd;
export const cbold = b.cb + cold;
export const cBold = b.cB + cold;
export const cmost = b.cm + p.cost;
export const cMost = b.cM + p.cost;
export const cpop = b.cpo + b.cp;
export const cPop = b.cPo + b.cp;
export const cpopular = cpop + p.cular;
export const cPopular = cPop + p.cular;
export const calmost = b.cal + cmost;
export const cAlmost = b.cAl + cmost;
export const cpal = b.cpa + b.cl;
export const cPal = b.cPa + b.cl;
export const cpalindrom = cpal + b.cin + p.cdrom;
export const cPalindrom = cPal + b.cin + p.cdrom;
export const caverage = p.cave + p.crage;
export const cAverage = p.cAve + p.crage;
export const cclient = p.ccli + p.cent;
export const cClient = p.cCli + p.cent;
export const crules = b.cr + p.cules;
export const cRules = b.cR + p.cules;
export const ccustom = p.ccust + b.com;
export const cCustom = p.cCust + b.com;
export const ccommand = p.ccom + p.cmand;
export const cCommand = p.cCom + p.cmand;
export const ccommands = ccommand + b.cs;
export const cCommands = cCommand + b.cs;
export const cqueue = b.cqu + b.ceu + b.ce;
export const cQueue = b.cQu + b.ceu + b.ce;
export const cblob = b.cb + p.clob;
export const cBlob = b.cB + p.clob;
export const cframe = b.cf + p.crame;
export const cFrame = b.cF + p.crame;
export const calias = b.cal + p.cias;
export const cAlias = b.cAl + p.cias;
export const caliases = calias + b.ces;
export const cAliases = cAlias + b.ces;
export const csequencer = p.cseq + b.cue + p.cncer;
export const cSequencer = p.cSeq + b.cue + p.cncer;
export const cprimary = p.cpri + p.cmary;
export const cPrimary = p.cPri + p.cmary;
export const csecondary = g.csecond + p.cary;
export const cSecondary = g.cSecond + p.cary;
export const ctertiary = p.ctert + p.ciary;
export const cTertiary = p.cTert + p.ciary;
export const cdelimiter = b.cde + climit + b.cer;
export const cDelimiter = b.cDe + climit + b.cer;
export const chelp = b.che + b.clp;
export const cHelp = b.cHe + b.clp;
export const cprint = b.cp + p.crint;
export const cPrint = b.cP + p.crint;
export const chive = b.ch + p.cive;
export const cHive = b.cH + p.cive;
export const cgenerator = p.cgen + b.cer + p.cator;
export const cGenerator = p.cGen + b.cer + p.cator;
export const cindex = b.cin + p.cdex;
export const cIndex = b.cIn + p.cdex;
export const cabout = b.ca + p.cbout;
export const cAbout = b.cA + p.cbout;
export const cstart = b.cs + p.ctart;
export const cStart = b.cS + p.ctart;
export const cstartup = cstart + b.cup;
export const coutput = cout + cput;
export const cOutput = cOut + cput;
export const cmetric = p.cmet + p.cric;
export const cMetric = p.cMet + p.cric;
export const cmetrics = cmetric + b.cs;
export const cMetrics = cMetric + b.cs;
export const crack = b.cr + p.cack;
export const cRack = b.cR + p.cack;
export const ctrack = b.ct + crack;
export const cTrack = b.cT + crack;
export const ctracking = ctrack + p.cing;
export const cTracking = cTrack + p.cing;
export const cstack = b.cst + p.cack;
export const cStack = b.cSt + p.cack;
export const cstandard = b.cst + cand + p.card;
export const cStandard = b.cSt + cand + p.card;
export const cdeviation = p.cdev + b.cia + p.ction;
export const cDeviation = p.cDev + b.cia + p.ction;
export const canalysis = p.cana + b.cly + p.csis;
export const cAnalysis = p.cAna + b.cly + p.csis;
export const cclear = b.ccl + p.cear;
export const cClear = b.cCl + p.cear;
export const cversion = p.cver + p.csion;
export const cVersion = p.cVer + p.csion; // b.cVe + b.crs + b.cio + b.cn; // 'Version';
export const cControl = b.cCo + b.cnt + b.cro + b.cl; // 'Control';
export const cPerformance = b.cPe + b.crf + b.cor + b.cma + b.cnc + b.ce; // 'Performance';
export const cconversion = p.ccon + cversion;
export const cConversion = p.cCon + cversion;
export const cpass = b.cp + p.cass;
export const cPass = b.cP = p.cass;
export const cSimplified = b.cSi + b.cmp + b.cli + b.cfi + b.ced; // 'Simplifi' + b.ced;
export const cTraditional = b.cTr + b.cad + b.ci + p.ction + b.cal; // 'Traditional';
export const cground = b.cgr + p.cound;
export const cGround = b.cGr + p.cound;
export const cyell = b.cye + b.cll;
export const cYell = b.cYe + b.cll;
export const clack = b.cla + b.cck;
export const cLack = b.cLa + b.cck;