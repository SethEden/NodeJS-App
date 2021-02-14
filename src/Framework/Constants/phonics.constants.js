/**
 * @file phonics.constants.js
 * @module phonics-constants
 * @description Contains many re-usable phonetic constants and partial phrases and/or
 * partial words for re-usability, many of them derived from the basic-constants.
 * @requires module:basic-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import * as b from './basic.constants';

// Reusable Grammer
export const chree = b.chr + b.cee; // hree
export const cour = b.cou + b.cr; // our
export const cive = b.civ + b.ce; // ive
export const ceven = b.cev + b.cen; // even
export const cight = b.cig + b.cht; // ight
export const cine = b.cin + b.ce; // ine
export const cleven = b.cl + b.cev + b.cen; // leven
export const cwelve = b.cwe + b.clv + b.ce; // welve
export const cteen = b.ct + b.cee + b.cn; // teen
export const chir = b.chi + b.cr; // hir
export const cigh = b.cig + b.ch; // igh
export const cwenty = b.cw + b.cen + b.cty; // wenty
export const chirty = b.chi + b.cr + b.cty; // hirty
export const cifty = b.cif + b.cty; // ifty
export const cred = b.cre + b.cd; // red
export const cgreen = b.cgr + b.cee + b.cn; // green
export const cblue = b.cbl + b.cue; // blue
export const cund = b.cun + b.cd; // und
export const cundred = cund + cred; // undred
export const cand = b.can + b.cd; // and
export const csand = b.cs + cand; // sand
export const chousand = b.cho + b.cu + csand; // housand
export const cion = b.cio + b.cn; // ion
export const cION = b.cIO + b.cN; // ION
export const csion = b.cs + cion; // sion
export const cill = b.ci + b.cll; // ill
export const cillion = cill + cion; // illion
export const crue = b.cru + b.ce; // rue
export const calse = b.cal + b.cse; // alse
export const ction = b.ct + cion; // tion
export const cTION = b.cT + cION; // TION
export const cction = b.cc + ction; // ction
export const cmation = b.cma + ction; // mation
export const cition = b.ci + ction; // ition
export const cITION = b.cI + cTION; // ITION
export const cage = b.cag + b.ce; // age
export const cest = b.ces + b.ct; // est
export const chare = b.cha + b.cre; // hare
export const c_lass = b.cla + b.css; // lass
export const ctemp = b.cte + b.cmp; // temp
export const chref = b.chr + b.cef; // href
export const cABC = b.cAB + b.cC; // ABC
export const came = b.cam + b.ce; // ame
export const cile = b.cil + b.ce; // ile
export const cext = b.cex + b.ct; // ext
export const cExt = b.cEx + b.ct; // Ext
export const clpha = b.clp + b.cha; // lpha
export const ccon = b.cco + b.cn; // con
export const cCon = b.cCo + b.cn; // Con
export const cable = b.cab + b.cle; // able
export const calid = b.cal + b.cid; // alid
export const cALID = b.cAL + b.cID; // ALID
export const cing = b.cin + b.cg; // ing
export const cING = b.cIN + b.cG; // ING
export const ctring = b.ctr + cing; // tring
export const cbject = b.cbj + b.cec + b.ct; // bject
export const cata = b.cat + b.ca; // ata
export const cATA = b.cAT + b.cA; // ATA
export const cMac = b.cMa + b.cc; // Mac
export const cpre = b.cpr + b.ce; // pre
export const cPre = b.cPr + b.ce; // Pre
export const cPRE = b.cPR + b.cE; // PRE
export const colid = b.col + b.cid; // olid
export const cynch = b.cyn + b.cch; // ynch
export const celete = b.cel + b.cet + b.ce; // elete
export const cnner = b.cnn + b.cer; // nner
export const click = b.cli + b.cck; // lick
export const cctrl = b.cct + b.crl; // ctrl
export const cype = b.cyp + b.ce; // ype
export const ceql = b.ce + b.cql; // eql
export const cEql = b.cE + b.cql; // Eql
export const cemb = b.cem + b.cb; // emb
export const cOperat = b.cOp + b.cer + b.cat; // Operat
export const cili = b.cil + b.ci; // ili
export const cility = cili + b.cty; // ility
export const cibility = b.cib + cility; // ibility
export const cisibility = b.cis + cibility; // isibility
export const cith = b.ci + b.cth; // ith
export const crent = b.cre + b.cnt; // rent
export const carent = b.ca + crent; // arent
export const ctor = b.cto + b.cr; // tor
export const cctor = b.cc + ctor; // ctor
export const celector = b.cel + b.cec + ctor; // elector
export const coolean = b.coo + b.cle + b.can; // oolean
export const check = b.che + b.cck; // heck
export const child = b.chi + b.cld; // hild
export const cibling = b.cib + b.cl + cing; // ibling
export const cttribute = b.ctt + b.cri + b.cbu + b.cte; //ttribute
export const cttributes = cttribute + b.cs; // ttributes
export const cisabled = b.cis + cable + b.cd; // isabled
export const cilter = b.cil + b.ct + b.cer; // ilter
export const code = b.cod + b.ce; // ode
export const cide = b.cid + b.ce; // ide
export const cuary = b.cua + b.cry; // uary
export const cies = b.cie + b.cs; // ies
export const ctive = b.cti + b.cve; // tive
export const cate = b.cat + b.ce; // ate
export const cdate = b.cd + cate; // date
export const cter = b.cte + b.cr; // ter
export const cTER = b.cTE + b.cR; // TER
export const cment = b.cme + b.cnt; // ment
export const cMENT = b.cME + b.cNT; // MENT
export const cime = b.cim + b.ce; // ime
export const cinter = b.cin + cter; // inter
export const cInter = b.cIn + cter; // Inter
export const cmed = b.cme + b.cd; // med
export const cath = b.cat + b.ch; // ath
export const cvar = b.cva + b.cr; // var
export const cVar = b.cVa + b.cr; // Var
export const ciew = b.cie + b.cw; // iew
export const cete = b.cet + b.ce; // ete
export const cace = b.cac + b.ce; // ace
export const cder = b.cd + b.cer; // der
export const ccor = b.cco + b.cr; // cor
export const cCor = b.cCo + b.cr; // Cor
export const ccore = ccor + b.ce; // core
export const cert = b.cer + b.ct; // ert
export const c_ase = b.cas + b.ce; // ase 'case' is a reserved word
export const c_ASE = b.cAS + b.cE; // ASE
export const cunt = b.cun + b.ct; // unt
export const caft = b.caf + b.ct; // aft
export const cops = b.cop + b.cs; // ops
export const cOPS = b.cOP + b.cS; // OPS
export const cinv = b.cin + b.cv; // inv
export const cInv = b.cIn + b.cv; // Inv
export const cral = b.cra + b.cl; // ral
export const cara = b.car + b.ca; // ara
export const cpro = b.cpr + b.co; // pro
export const cPro = b.cPr + b.co; // Pro
export const cPRO = b.cPR + b.cO; // PRO
export const cino = b.cin + b.co; // ino
export const cese = b.ces + b.ce; // ese
export const cish = b.cis + b.ch; // ish
export const ccel = b.cce + b.cl; // cel
export const cCel = b.cCe + b.cl; // Cel
export const cian = b.cia + b.cn; // ian
export const cous = b.cou + b.cs; // ous
export const ceous = b.ce + cous; // eous
export const cung = b.cun + b.cg; // ung
export const cary = b.car + b.cy; // ary
export const ciary = b.ci + cary; // iary
export const cMis = b.cMi + b.cs; // Mis
export const cmis = b.camai + b.cs; // mis
export const cource = b.cou + b.crc + b.ce; // ource
export const cmine = b.camai + b.cne; // mine
//b.cet + b.cer + b.cmi + b.cne; //cmine;
export const cetermine = b.ce + b.ct + b.ce + b.cr + b.cm + b.ci + b.cn + b.ce; // etermine
export const cingle = b.cin + b.cgl + b.ce; // ingle
export const clace = b.cla + b.cce; // lace
export const ceplace = b.cep + clace; // eplace
export const clean = b.cle + b.can; // lean
export const cver = b.cve + b.cr; // ver
export const cVer = b.cVe + b.cr; // Ver
export const cvert = cver + b.ct; // vert
export const convert = b.con + cvert; // onvert
export const crate = b.cra + b.cte; // crate
export const cenerate = b.cen + b.ce + crate; // enerate
export const cdom = b.cdo + b.cm; // dom
export const candom = b.can + cdom; // andom
export const create = b.cre + cate; // reate
export const carn = b.car + b.cn; // arn
export const carning = carn + cing; // arning
export const crror = b.crr + b.cor; // rror
export const cRROR = b.cRR + b.cOR; // RROR
export const card = b.car + b.cd; // ard
export const cose = b.cos + b.ce; // ose
export const cray = b.cra + b.cy; // ray
export const cmel = b.cme + b.cl; // mel
export const cound = b.cou + b.cnd; // ound
export const cdot = b.cd + b.cot; // dot
export const cDot = b.cD + b.cot; // Dot
export const cart = b.car + b.ct; // art
export const cize = b.ciz + b.ce; // ize
export const cmal = b.cma + b.cl; // mal
export const cormal = b.cor + cmal; // ormal
export const cegree = b.ceg + b.cre + b.ce; // egree
export const ccir = b.cci + b.cr; // cir
export const cCir = b.cCi + b.cr; // Cir
export const ccle = b.ccl + b.ce; // cle
export const care = b.car + b.ce; // are
export const cquare = b.cqu + care; // quare
export const cgle = b.cgl + b.ce; // gle
export const ctri = b.ctr + b.ci; // tri
export const cTri = b.cTr + b.ci; // Tri
export const crec = b.cre + b.cc; // rec
export const cRec = b.cRe + b.cc; // Rec
export const crect = crec + b.ct; // rect
export const cRect = cRec + b.ct; // Rect
export const coct = b.coc + b.ct; // oct
export const cOct = b.cOc + b.ct; // Oct
export const cgon = b.cgo + b.cn; // gon
export const chex = b.che + b.cx; // hex
export const cHex = b.cHe + b.cx; // Hex
export const chep = b.che + b.cp; // hep
export const cHep = b.cHe + b.cp; // Hep
export const cnon = b.cno + b.cn; // non
export const cNon = b.cNo + b.cn; // Non
export const crap = b.cra + b.cp; // rap
export const czoid = b.czo + b.cid; // zoid
export const cfra = b.cfr + b.ca; // fra
export const cFra = b.cFr + b.ca; // Fra
export const ctra = b.ctr + b.ca; // tra
export const cTra = b.cTr + b.ca; // Tra
export const ctrans = ctra + b.cns; // trans
export const cTrans = cTra + b.cns; // Trans
export const cint = b.cin + b.ct; // int
export const cloc = b.clo + b.cc; // loc
export const cLoc = b.cLo + b.cc; // Loc
export const cation = b.ca + ction; // ation
export const cort = b.cor + b.ct; // ort
export const csim = b.csi + b.cm; // sim
export const cSim = b.cSi + b.cm; // Sim
export const cplify = b.cpl + b.cif + b.cy; // plify
export const csol = b.cso + b.cl; // sol
export const ccomp = b.cco + b.cmp; // comp
export const cComp = b.cCo + b.cmp; // Comp
export const cideo = b.cid + b.ceo; // ideo
export const cnteger = b.cnt + b.ceg + b.cer; // nteger
export const cloat = b.clo + b.cat; // loat
export const cong = b.con + b.cg; // ong
export const chort = b.ch + cort; // hort
export const cble = b.cbl + b.ce; // ble
export const couble = b.cou + cble; // ouble
export const cduct = b.cdu + b.cct; // duct
export const cgate = b.cga + b.cte; // gate
export const cggregate = b.cgg + b.cre + cgate; // ggregate
export const cDiff = b.cDi + b.cff; // Diff
export const cenc = b.cen + b.cc; // enc
export const cence = cenc + b.ce; // ence
export const cain = b.cai + b.cn; // ain
export const ctch = b.ctc + b.ch; // tch
export const cween = b.cwe + b.cen; // ween
export const cord = b.cor + b.cd; // ord
export const cmap = b.cma + b.cp; // map
export const cMap = b.cMa + b.cp; // Map
export const cess = b.ce + b.css; // ess
export const cres = b.cre + b.cs; // res
export const cRes = b.cRe + b.cs; // Res
export const cress = b.cr + cess; // ress
export const ceat = b.ce + b.cat; // eat
export const chen = b.ch + b.cen; // hen
export const chan = b.ch + b.can; // han
export const clica = b.cli + b.cca; // lica
export const cLICA = b.cLI + b.cCA; // LICA
export const capp = b.ca + b.cpp; // app
export const cApp = b.cA + b.cpp; // App
export const cAPP = b.cA + b.cPP; // APP
export const coot = b.coo + b.ct; // oot
export const crse = b.crs + b.ce; // rse
export const cRSE = b.cRS + b.cE; // RSE
export const carse = b.ca + crse; // arse
export const cARSE = b.cA + cRSE; // ARSE
export const cwap = b.cwa + b.cp; // wap
export const cward = b.cwa + b.crd; // ward
export const clash = b.cla + b.csh; // lash
export const cENV = b.cE + b.cNV; // ENV
export const cavigate = b.cav + b.cig + cate; // avigate
export const cness = b.cne + b.css; // ness
export const cusiness = b.cus + b.ci + cness; // usiness
export const cule = b.cul + b.ce; // ule
export const cait = b.cai + b.ct; // ait
export const cesh = b.ce + b.csh; // esh
export const cval = b.cv + b.cal; // val
export const cemo = b.ce + b.cmo; // emo
export const cmon = b.cmo + b.cn; // mon
export const common = b.com + cmon; // ommon
export const clti = b.clt + b.ci; // lti
export const cmulti = b.cmu + clti; // multi
export const cMulti = b.cMu + clti; // Multi
export const cple = b.cpl + b.ce; // ple
export const cPLE = b.cPL + b.cE; // PLE
export const cnal = b.cna + b.cl; // nal
export const cexe = b.cex + b.ce; // exe
export const cExe = b.cEx + b.ce; // Exe
export const cper = b.cpe + b.cr; // per
export const cPer = b.cPe + b.cr; // Per
export const casic = b.cas + b.cic; // asic
export const cven = b.cve + b.cn; // ven
export const cVEN = b.cVE + b.cN; // VEN
export const cvent = cven + b.ct; // vent;
export const carg = b.car + b.cg; // arg
export const cArg = b.cAr + b.cg; // Arg
export const crive = b.cri + b.cve; // rive
export const cloy = b.clo + b.cy; // loy
export const cLOY = b.cLO + b.cY; // LOY
export const cumber = b.cum + b.cb + b.cer; // umber
export const ccond = b.cco + b.cnd; // cond
export const cieth = b.cie + b.cth; // ieth
export const ctieth = b.ct + cieth; // tieth
export const cont = b.con + b.ct; // ont
export const cull = b.cul + b.cl; // ull
export const cmod = b.cmo + b.cd; // mod
export const cMod = b.cMo + b.cd; // Mod
export const ccol = b.cco + b.cl; // col
export const cCol = b.cCo + b.cl; // Col
export const creen = b.cre + b.cen; // reen
export const clue = b.clu + b.ce; // lue Referance to Tron here! :-P
export const cyan = b.cy + b.can; // yan
export const cite = b.cit + b.ce; // ite
export const cange = b.can + b.cge; // ange
export const cANGE = b.cAN + b.cGE; // ANGE
export const cost = b.cos + b.ct; // ost
export const cular = b.cul + b.car; // ular
export const cdrom = b.cdr + b.com; // drom
export const cave = b.cav + b.ce; // ave
export const cAve = b.cAv + b.ce; // Ave
export const ccli = b.ccl + b.ci; // cli
export const cCli = b.cCl + b.ci; // Cli
export const cules = b.cul + b.ces; // ules
export const cent = b.cen + b.ct; // ent
export const centa = cent + b.ca; // enta
export const cust = b.cus + b.ct; // ust
export const ccust = b.cc + cust; // cust
export const cCust = b.cC + cust; // Cust
export const cmand = b.cma + b.cnd; // mand
export const cMAND = b.cMA + b.cND; // MAND
export const clob = b.clo + b.cb; // lob
export const cram = b.cra + b.cm; // ram
export const crame = cram + b.ce; // rame
export const cias = b.cia + b.cs; // ias
export const cbout = b.cbo + b.cut; // bout Bout time we added this one! LOL
export const cseq = b.cse + b.cq; // seq
export const cSeq = b.cSe + b.cq; // Seq
export const cncer = b.cnc + b.cer; // ncer
export const cpri = b.cpr + b.ci; // pri
export const cPri = b.cPr + b.ci; // Pri
export const cmary = b.cma + b.cry; // mary
export const cmit = b.camai + b.ct; // mit
export const ctert = b.cte + b.crt; // tert
export const cTert = b.cTe + b.crt; // Tert
export const ctar = b.cta + b.cr; // tar
export const cTar = b.cTa + b.cr; // Tar
export const ctart = ctar + b.ct; // tart
export const cTart = cTar + b.ct; // Tart poptart....LOL
export const crint = b.cri + b.cnt; // rint
export const cgen = b.cge + b.cn; // gen
export const cGen = b.cGe + b.cn; // Gen
export const cator = b.cat + b.cor; // ator
export const cdex = b.cde + b.cx; // dex
export const call = b.cal + b.cl; // all
export const cAll = b.cAl + b.cl; // All
export const creg = b.cre + b.cg; // reg
export const cReg = b.cRe + b.cg; // Reg
export const ctain = b.cta + b.cin; // tain
export const cmet = b.cme + b.ct; // met
export const cMet = b.cMe + b.ct; // Met
export const cric = b.cri + b.cc; // ric
export const cack = b.cac + b.ck; // ack
export const cdev = b.cde + b.cv; // dev
export const cDev = b.cDe + b.cv; // Dev
export const cDEV = b.cDE + b.cV; // DEV
export const cprod = b.cpr + b.cod; // prod
export const cProd = b.cPr + b.cod; // Prod
export const cPROD = b.cPR + b.cOD; // PROD
export const cana = b.can + b.ca; // ana
export const cAna = b.cAn + b.ca; // Ana
export const csis = b.csi + b.cs; // sis
export const crage = b.cra + b.cge; // rage
export const cear = b.cea + b.cr; // ear
export const crgb = b.crg + b.cb; // rgb
export const cass = b.ca + b.css; // ass
export const cASS = b.cA + b.cSS; // ASS
export const cind = b.cin + b.cd; // ind
export const clin = b.cli + b.cn; // lin
export const cLin = b.cLi + b.cn; // Lin
export const ccom = b.cco + b.cm; // com
export const cCom = b.cCo + b.cm; // Com
export const cCOM = b.cCO + b.cM; // COM
export const cubic = b.cub + b.cic; // ubic
export const cane = b.can + b.ce; // ane
export const curve = b.cur + b.cve; // urve
export const cqua = b.cqu + b.ca; // qua
export const cQua = b.cQu + b.ca; // Qua
export const crtic = b.crt + b.cic; // rtic
export const csec = b.cse + b.cc; // sec
export const cSec = b.cSe + b.cc; // Sec
export const cuni = b.cun + b.ci; // uni
export const cUni = b.cUn + b.ci; // Uni
export const chyper = b.chy + cper; // hyper
export const cHyper = b.cHy + cper; // Hyper
export const cbol = b.cbo + b.cl; // bol
export const cbola = cbol + b.ca; // bola
export const cstant = b.cst + b.can + b.ct; //stant
export const ciso = b.cis + b.co; // iso
export const cIso = b.cIs + b.co; // Iso
export const ctope = b.cto + b.cpe; // tope
export const cphon = b.cph + b.con; // phon
export const cPhon = b.cPh + b.con; // Phon
export const cics = b.cic + b.cs; // ics
export const csha = b.csh + b.ca; // sha
export const cSha = b.cSh + b.ca; // Sha
export const cail = b.cai + b.cl; // ail
export const cAIL = b.cAI + b.cL; // AIL
export const clay = b.cla + b.cy; // lay
export const cLay = b.cLa + b.cy; // Lay
export const csug = b.csu + b.cg; // sug
export const cSug = b.cSu + b.cg; // Sug
export const cgest = b.cge + b.cst; // gest
export const cGest = b.cGe + b.cst; // Gest
export const cect = b.cec + b.ct; // ect
export const croject = b.cro + b.cj + cect; // roject
export const cell = b.cel + b.cl; // ell
export const cnion = b.cni + b.con; // nion
export const ceta = b.cet + b.ca; // eta
export const ccent = b.cce + b.cnt; // cent
export const cChi = b.cCh + b.ci; // Chi
export const cild = b.cil + b.cd; // ild
export const ccolr = b.cco + b.clr; // colr
export const cshp = b.csh + b.cp; // shp
export const cual = b.cua + b.cl; // ual
export const cied = b.cie + b.cd; // ied
export const cfied = b.cf + cied; // fied
export const cified = b.cif + cied; // ified
export const cments = cment + b.cs; // ments
export const clop = b.clo + b.cp; // lop
export const cLOP = b.cLO + b.cP; // LOP
export const cdest = b.cde + b.cst; // dest
export const cDest = b.cDe + b.cst; // Dest
export const cstor = b.cst + b.cor; // stor
export const cStor = b.cSt + b.cor; // Stor
export const cequ = b.ceq + b.cu; // equ
export const cEqu = b.cEq + b.cu; // Equ
export const cque = b.cqu + b.ce; // que
export const cQue = b.cQu + b.ce; // Que
export const cdup = b.cdu + b.cp; // dup
export const cDup = b.cDu + b.cp; // Dup
export const ccate = b.cca + b.cte; // cate
export const cere = b.cer + b.ce; // ere
export const ceas = b.cea + b.cs; // eas
export const cease = ceas + b.ce; // ease
export const crev = b.cre + b.cv; // rev
export const cron = b.cro + b.cn; // ron
export const colv = b.col + b.cv; // olv
export const colve = colv + b.ce; // olve
export const ceep = b.cee + b.cp; // eep
export const ccur = b.ccu + b.cr; // cur
export const cCur = b.cCu + b.cr; // Cur
export const csive = b.csi + b.cve; // sive
export const cexp = b.cex + b.cp; // exp
export const cExp = b.cEx + b.cp; // Exp
export const could = b.cou + b.cld; // ould
export const cike = b.cik + b.ce; // ike
export const cful = b.cfu + b.cl; // ful
export const cFul = b.cFu + b.cl; // Ful
export const cuto = b.cut + b.co; // uto
export const copt = b.cop + b.ct; // opt
export const cOpt = b.cOp + b.ct; // Opt
export const cized = b.ciz + b.ced; // ized
export const come = b.com + b.ce; // ome
export const clus = b.clu + b.cs; // lus
export const clon = b.clo + b.cn; // lon
export const cizer = b.ciz + b.cer; // izer
export const cern = b.cer + b.cn; // ern
export const cerm = b.cer + b.cm; // erm
export const comb = b.com + b.cb; // omb
export const ceed = b.cee + b.cd; // eed
export const coop = b.coo + b.cp; // oop
export const cood = b.coo + b.cd; // ood
export const cice = b.cic + b.ce; // ice
export const ctay = b.cta + b.cy; // tay
export const cafe = b.caf + b.ce; // afe
export const cult = b.cul + b.ct; // ult
export const cULT = b.cUL + b.cT; // ULT
export const cault = b.ca + cult; // ault
export const cAULT = b.cA + cULT; // AULT
export const clete = b.cle + b.cte; // lete
export const cger = b.cge + b.cr; // ger
export const cspec = b.csp + b.cec; // spec
export const cSpec = b.cSp + b.cec; // Spec
export const cfic = b.cfi + b.cc; // fic
export const cific = b.ci + cfic; // ific
export const csuf = b.csu + b.cf; // suf
export const cSuf = b.cSu + b.cf; // Suf
export const cance = b.can + b.cce; // ance
export const cional = b.cio + cnal; // ional
export const ctional = b.ct + cional; // tional
export const ctrad = ctra + b.cd; // trad - ad is some how a special reserved word of some kind.
export const cTrad = cTra + b.cd; // Trad - ad is some how a special reserved word of some kind.
export const ctrol = b.ctr + b.col; // trol
export const cure = b.cur + b.ce; // ure
export const csym = b.csy + b.cm; // sym
export const cSym = b.cSy + b.cm; // Sym
export const cdel = b.cde + b.cl; // del
export const cDel = b.cDe + b.cl; // Del
export const csert = b.cs + cert; // sert
export const csub = b.csu + b.cb; // sub
export const cSub = b.cSu + b.cb; // Sub
export const ctit = b.cti + b.ct; // tit
export const cute = b.cut + b.ce; // ute
export const ciod = b.cio + b.cd; // iod
export const ceak = b.cea + b.ck; // eak
export const cnto = b.cnt + b.co; // nto
export const cmpt = b.cmp + b.ct; // mpt
export const cted = b.cte + b.cd; // ted
export const cist = b.cis + b.ct; // ist
export const crch = b.crc + b.ch; // rch
export const cson = b.cso + b.cn; // son
export const cison = b.ci + cson; // ison
export const cera = b.cer + b.ca; // era
export const cfore = b.cfo + b.cre; // fore
export const cFORE = b.cFO + b.cRE; // FORE
export const cush = b.cus + b.ch; // ush
export const cUSH = b.cUS + b.cH; // USH
export const cvel = b.cve + b.cl; // vel
export const ccess = b.cce + b.css; // cess
export const cCESS = b.cCE + b.cSS; // CESS
export const cemp = b.cem + b.cp;// emp
export const cmas = b.cma + b.cs; // mas
export const cMas = b.cMa + b.cs; // Mas
export const cpand = b.cpa + b.cnd; // pand
export const cook = b.coo + b.ck; // ook
export const clse = b.cls + b.ce; // lse
export const cify = b.cif + b.cy; // ify
export const csup = b.csu + b.cp; // sup
export const cSup = b.cSu + b.cp; // Sup
export const cplac = b.cpl + b.cac; // plac
export const cori = b.cor + b.ci; // ori
export const cOri = b.cOr + b.ci; // Ori
export const cinal = b.cin + b.cal; // inal
export const cpara = b.cpa + b.cra; // para
export const cPara = b.cPa + b.cra; // Para
export const cnom = b.cno + b.cm; // nom
export const cNom = b.cNo + b.cm; // Nom
export const cther = b.cth + b.cer; // ther
export const cfin = b.cfi + b.cn; // fin
export const cFin = b.cFi + b.cn; // Fin
export const crgs = b.crg + b.cs; // rgs
export const cample = b.cam + cple; // ample
export const cAMPLE = b.cAM + cPLE; // AMPLE
export const cruc = b.cru + b.cc; // ruc
export const cture = b.ct + cure; // ture
export const crea = b.cre + b.ca; // rea
export const cRea = b.cRe + b.ca; // Rea
export const ceen = b.cee + b.cn; // een
export const core = b.cor + b.ce; // ore
export const cstd = b.cst + b.cd; // std
export const cStd = b.cSt + b.cd; // Std
export const cick = b.cic + b.ck; // ick
export const cote = b.cot + b.ce; // ote
export const coker = b.cok + b.cer; // oker
export const crge = b.crg + b.ce; // rge
export const cRGE = b.cRG + b.cE; // RGE
export const cerge = b.ce + crge; // erge
export const cERGE = b.cE + cRGE; // ERGE
export const cerg = b.cer + b.cg; // erg
export const cured = b.cu + cred; // ured
export const cude = b.cud + b.ce; // ude
export const clude = b.cl + cude; // lude
export const clud = b.clu + b.cd; // lud
export const ccau = b.cca + b.cu; // cau
export const cCau = b.cCa + b.cu; // Cau
export const cght = b.cgh + b.ct; // ght
export const cned = b.cne + b.cd; // ned
export const cten = b.cte + b.cn; // ten // This is also defined in the numeric constants
export const csid = b.csi + b.cd; // sid
export const cSid = b.cSi + b.cd; // Sid
export const cifies = b.cif + cies; // ifies
export const cref = b.cre + b.cf; // ref
export const cRef = b.cRe + b.cf; // Ref
export const clat = b.cla + b.ct; // lat
export const crit = b.cri + b.ct; // rit
export const cleas = b.cl + ceas; // leas
export const cchiv = b.cch + b.civ; // chiv
export const camp = b.cam + b.cp; // amp
export const copy = b.cop + b.cy; // opy
export const cccess = b.ccc + cess; // ccess
export const clyz = b.cly + b.cz; // lyz
export const clyze = clyz + b.ce; // lyze
export const cbra = b.cbr + b.ca; // bra
export const cBra = b.cBr + b.ca; // Bra
export const cket = b.cke + b.ct; // ket
export const clex = b.cle + b.cx; // lex
export const cLex = b.cLe + b.cx; // Lex
export const ccal = b.cca + b.cl; // cal
export const cical = b.ci + ccal; // ical
export const cicon = b.ci + ccon; // icon
export const clta = b.clt + b.ca; // lta
export const ceaf = b.cea + b.cf; // eaf
