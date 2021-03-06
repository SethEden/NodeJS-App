/**
 * @file element.constants.js
 * @module element-constants
 * @description Contains named elements.
 * @requires module:basic-constants
 * @requires module:phonic-constants
 * @requires module:numeric-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 * {@link https://en.wikipedia.org/wiki/List_of_mathematical_shapes}
 */
import * as bas from './basic.constants';
import * as phn from './phonic.constants';
import * as num from './numeric.constants';
import * as gen from './generic.constants';
import * as wrd from './word.constants';

// NOTE: I changed e-x-p-o-r-t c-o-n-s-t => smuggle something,
// because the constants validation system is scanning these files looking for that keyword and
// if it finds it then it will use that line for validation pruposes.
// So to reverse this, just do a find replace and change // s.muggle omething back into the other e-x-p-o-r-t c-o-n-s-t string.
// The current state of the application doesn't need all of these, but future applications will most definately need them.
// So they are left here as a matter of future-proofing.

// smuggle something cH = bas.cH; // H
// smuggle something cHe = bas.cHe; // He
// smuggle something cLi = bas.cLi; // Li
// smuggle something cBe = bas.cBe; // Be
// smuggle something cB = bas.cB; // B
// smuggle something cC = bas.cC; // C
// smuggle something cN = bas.cN; // N
// smuggle something cO = bas.cO; // O
// smuggle something cF = bas.cF; // F
// smuggle something cNe = bas.cNe; // Ne
// smuggle something cNa = bas.cNa; // Na
// smuggle something cMg = bas.cMg; // Mg
// smuggle something cAl = bas.cAl; // Al
// smuggle something cSi = bas.cSi; // Si
// smuggle something cP = bas.cP; // P
// smuggle something cS = bas.cS; // S
// smuggle something cCl = bas.cCl; // Cl
// smuggle something cAr = bas.cAr; // Ar
// smuggle something cK = bas.cK; // K
// smuggle something cCa = bas.cCa; // Ca
// smuggle something cSc = bas.cSc; // Sc
// smuggle something cTi = bas.cTi; // Ti
// smuggle something cV = bas.cV; // V
// smuggle something cCr = bas.cCr; // Cr
// smuggle something cMn = bas.cMn; // Mn
// smuggle something cFe = bas.cFe; // Fe
// smuggle something cCo = bas.cCo; // Co
// smuggle something cNi = bas.cNi; // Ni
// smuggle something cCu = bas.cCu; // Cu
// smuggle something cZn = bas.cZn; // Zn
// smuggle something cGa = bas.cGa; // Ga
// smuggle something cGe = bas.cGe; // Ge
// smuggle something cAs = bas.cAs; // As
// smuggle something cSe = bas.cSe; // Se
// smuggle something cBr = bas.cBr; // Br
// smuggle something cKr = bas.cKr; // Kr
// smuggle something cRb = bas.cRb; // Rb
// smuggle something cSr = bas.cSr; // Sr
// smuggle something cY = bas.cY; // Y
// smuggle something cZr = bas.cZr; // Zr
// smuggle something cNb = bas.cNb; // Nb
// smuggle something cMo = bas.cMo; // Mo
// smuggle something cTc = bas.cTc; // Tc
// smuggle something cRu = bas.cRu; // Ru
// smuggle something cRh = bas.cRh; // Rh
// smuggle something cPd = bas.cPd; // Pd
// smuggle something cAg = bas.cAg; // Ag
// smuggle something cCd = bas.cCd; // Cd
// smuggle something cIn = bas.cIn; // In
// smuggle something cSn = bas.cSn; // Sn
// smuggle something cSb = bas.cSb; // Sb
// smuggle something cTe = bas.cTe; // Te
// smuggle something cI = bas.cI; // I
// smuggle something cXe = bas.cXe; // Xe
// smuggle something cCs = bas.cCs; // Cs
// smuggle something cBa = bas.cBa; // Ba
// smuggle something cLa = bas.cLa; // La
// smuggle something cCe = bas.cCe; // Ce
// smuggle something cPr = bas.cPr; // Pr
// smuggle something cNd = bas.cNd; // Nd
// smuggle something cPm = bas.cPm; // Pm
// smuggle something cSm = bas.cSm; // Sm
// smuggle something cEu = bas.cEu; // Eu
// smuggle something cGd = bas.cGd; // Gd
// smuggle something cTb = bas.cTb; // Tb
// smuggle something cDy = bas.cDy; // Dy
// smuggle something cHo = bas.cHo; // Ho
// smuggle something cEr = bas.cEr; // Er
// smuggle something cTm = bas.cTm; // Tm
// smuggle something cYb = bas.cYb; // Yb
// smuggle something cLu = bas.cLu; // Lu
// smuggle something cHf = bas.cHf; // Hf
// smuggle something cTa = bas.cTa; // Ta
// smuggle something cW = bas.cW; // W
// smuggle something cRe = bas.cRe; // Re
// smuggle something cOs = bas.cOs; // Os
// smuggle something cIr = bas.cIr; // Ir
// smuggle something cPt = bas.cPt; // Pt
// smuggle something cAu = bas.cAu; // Au
// smuggle something cHg = bas.cHg; // Hg
// smuggle something cTl = bas.cTl; // Tl
// smuggle something cPb = bas.cPb; // Pb
// smuggle something cBi = bas.cBi; // Bi
// smuggle something cPo = bas.cPo; // Po
// smuggle something cAt = bas.cA + bas.ct; // At
// smuggle something cRn = bas.cRn; // Rn
// smuggle something cFr = bas.cFr; // Fr
// smuggle something cRa = bas.cRa; // Ra
// smuggle something cAc = bas.cAc; // Ac
// smuggle something cTh = bas.cTh; // Th
// smuggle something cPa = bas.cPa; // Pa
// smuggle something cU = bas.cU; // U
// smuggle something cNp = bas.cNp; // Np
// smuggle something cPu = bas.cPu; // Pu
// smuggle something cAm = bas.cAm; // Am
// smuggle something cCm = bas.cCm; // Cm
// smuggle something cBk = bas.cBk; // Bk
// smuggle something cCf = bas.cCf; // Cf
// smuggle something cEs = bas.cEs; // Es
// smuggle something cFm = bas.cFm; // Fm
// smuggle something cMd = bas.cMd; // Md
// smuggle something cNo = bas.cNo; // No
// smuggle something cLr = bas.cLr; // Lr
// smuggle something cRf = bas.cRf; // Rf
// smuggle something cDb = bas.cDb; // Db
// smuggle something cSg = bas.cSg; // Sg
// smuggle something cBh = bas.cBh; // Bh
// smuggle something cHs = bas.cHs; // Hs
// smuggle something cMt = bas.cMt; // Mt
// smuggle something cDs = bas.cDs; // Ds
// smuggle something cRg = bas.cRg; // Rg
// smuggle something cCn = bas.cCn; // Cn
// smuggle something cNh = bas.cNh; // Nh
// smuggle something cFl = bas.cFl; // Fl
// smuggle something cMc = bas.cMc; // Mc
// smuggle something cLv = bas.cLv; // Lv
// smuggle something cTs = bas.cTs; // Ts
// smuggle something cOg = bas.cOg; // Og
//
// // *****************************************************
//
// smuggle something cHydrogen = bas.cHy + bas.cdr + phn.cogen; // Hydrogen
// smuggle something cHelium = bas.cHe + phn.clium; // Helium
// smuggle something cLithium = wrd.cLit + phn.chium; // Lithium
// smuggle something cBeryllium = bas.cBe + bas.cry + phn.cllium; // Beryllium
// smuggle something cBoron = bas.cBo + phn.cron; // Boron
// smuggle something cCarbon = bas.cCa + bas.crb + bas.con; // Carbon
// smuggle something cNitrogen = bas.cNi + bas.ctr + phn.cogen; // Nitrogen
// smuggle something cOxygen = bas.cOx + bas.cyg + bas.cen; // Oxygen
// smuggle something cFlorine = bas.cFl + phn.corine; // Florine
// smuggle something cNeon = bas.cNe + bas.con; // Neon
// smuggle something cSodium = bas.cSo + phn.cdium; // Sodium
// smuggle something cMagnesium = bas.cMa + bas.cgn + phn.cesium; // Magnesium
// smuggle something cAluminum = bas.cAl + bas.cum + phn.cinum; // Aluminum
// smuggle something cSilicon = bas.cSi + phn.clic + bas.con; // Silicon
// smuggle something cPhosphorus = bas.cPh + bas.cos + bas.cph + bas.cor + bas.cus; // Phosphorus
// smuggle something cSulfur = bas.cSu + bas.clf + bas.cur; // Sulfur
// smuggle something cClorine = bas.cCl + phn.corine; // Clorine
// smuggle something cArgon = gen.cArg + bas.con; // Argon
// smuggle something cPotassium = bas.cPo + bas.cta + phn.cssium; // Potassium
// smuggle something cCalcium = bas.cCa + bas.clc + phn.cium; // Calcium
// smuggle something cScandium = wrd.cScan + phn.cdium; // Scandium
// smuggle something cTitanium = bas.cTi + phn.ctan + phn.cium; // Titanium
// smuggle something cVanadium = bas.cVa + bas.cna + phn.cdium; // Vanadium
// smuggle something cChromium = bas.cCh + bas.cro + phn.cmium; // Chromium
// smuggle something cManganese = wrd.cMan + bas.cga + phn.cnes + bas.ce; // Manganese
// smuggle something cIron = bas.cIr + bas.con; // Iron
// smuggle something cCobalt = bas.cCo + bas.cba + bas.clt; // Cobalt
// smuggle something cNickel = bas.cNi + bas.cc + phn.ckel; // Nickel
// smuggle something cCopper = bas.cCo + bas.cp + phn.cper; // Copper
// smuggle something cZinc = bas.cZi + bas.cnc; // Zinc
// smuggle something cGallium = bas.cGa + phn.cllium; // Gallium
// smuggle something cGermanium = bas.cGe + phn.crman + phn.cium; // Germanium
// smuggle something cArsenic = bas.cAr + bas.cse + phn.cnic; // Arsenic
// smuggle something cSelenium = bas.cSe + bas.cle + phn.cnium; // Selenium
// smuggle something cBromine = bas.cBr + bas.com + phn.cine; // Bromine
// smuggle something cKrypton = bas.cKr + bas.cyp + phn.cton; // Krypton
// smuggle something cRubidium = bas.cRu + bas.cbi + phn.cdium; // Rubidium
// smuggle something cStrontium = bas.cSt + phn.cron + phn.ctium; // Strontium
// smuggle something cYttrium = bas.cYt + phn.ctri + bas.cum; // Yttrium
// smuggle something cZirconium = bas.cZi + bas.crc + phn.conium; // Zirconium
// smuggle something cNiobium = bas.cNi + bas.cob + phn.cium; // Niobium
// smuggle something cMolybdenum = bas.cMo + bas.cly + bas.cbd + bas.cen + bas.cum; // Molybdenum
// smuggle something cTechnetium = bas.cTe + bas.cch + bas.cne + phn.ctium; // Technetium
// smuggle something cRuthenium = bas.cRu + wrd.cthen + phn.cium; // Ruthenium
// smuggle something cRhodium = gen.cRho + phn.cdium; // Rhodium
// smuggle something cPalladium = wrd.cPal + bas.cla + phn.cdium; // Palladium
// smuggle something cSilver = bas.cSi + bas.cl + phn.cver; // Silver
// smuggle something cCadmium = bas.cCa + bas.cdm + phn.cium; // Cadmium
// smuggle something cIndium = bas.cIn + phn.cdium; // Indium
// smuggle something cTin = bas.cTi + bas.cn; // Tin
// smuggle something cAntimony = bas.cAn + bas.cti + phn.cmon + bas.cy; // Antimony
// smuggle something cTellurium = bas.cTe + bas.cll + phn.curium; // Tellurium
// smuggle something cIodine = bas.cIo + bas.cdi + bas.cne; // Iodine
// smuggle something cXenon = bas.cXe + phn.cnon; // Xenon
// smuggle something cCesium = bas.cCe + phn.csium; // Cesium
// smuggle something cBarium = bas.cBa + phn.crium; // Barium
// smuggle something cLanthanum = bas.cLa + wrd.cnth + bas.can + bas.cum; // Lanthanum
// smuggle something cCerium = bas.cCe + phn.crium; // Cerium
// smuggle something cPraseodymium = bas.cPr + phn.c_ase + phn.codymium; // Praseodymium
// smuggle something cNeodymium = bas.cNe + phn.codymium; // Neodymium
// smuggle something cPromethium = phn.cPro + phn.cmet + phn.chium; // Promethium
// smuggle something cSamarium = bas.cSa + phn.cmar + phn.cium; // Samarium
// smuggle something cEuropium = bas.cEu + bas.cro + bas.cpi + bas.cum; // Europium
// smuggle something cGadolinium = bas.cGa + bas.cdo + phn.clin + phn.cium; // Gadolinium
// smuggle something cTerbium = bas.cTe + phn.crbium; // Terbium
// smuggle something cDysprosium = bas.cDy + bas.csp + bas.cro + phn.csium; // Dysprosium
// smuggle something cHolmium = bas.cHo + bas.clm + phn.cium; // Holmium
// smuggle something cErbium = bas.cEr + phn.cbium; // Erbium
// smuggle something cThulium = bas.cTh + bas.cul + phn.cium; // Thulium
// smuggle something cYtterbium = bas.cYt + phn.cter + phn.cbium; // Ytterbium
// smuggle something cLutetium = bas.cLu + bas.cte + phn.ctium; // Lutetium
// smuggle something cHafnium = bas.cHa + bas.cfn + phn.cium; // Hafnium
// smuggle something cTantalum = bas.cTa + bas.cn + bas.cta + phn.clum; // Tantalum
// smuggle something cTungsten = bas.cTu + bas.cng + phn.cste + bas.cn; // Tungsten
// smuggle something cRhenium = bas.cRh + phn.cenium; // Rhenium
// smuggle something cOsmium = bas.cOs + phn.cmium; // Osmium
// smuggle something cIridium = bas.cIr + phn.cidium; // Iridium
// smuggle something cPlatinum = bas.cPl + bas.cat + phn.cinum; // Platinum
// smuggle something cGold = bas.cG + wrd.cold; // Gold
// smuggle something cMercury = bas.cMe + bas.crc + bas.cur + bas.cy; // Mercury
// smuggle something cThallium = bas.cTh + phn.callium; // Thallium
// smuggle something cLead = bas.cLe + wrd.c1a1d; // Lead
// smuggle something cBismuth = bas.cBi + bas.csm + phn.cuth; // Bismuth
// smuggle something cPolonium = bas.cPo + phn.clon + phn.cium; // Polonium
// smuggle something cAstatine = bas.cAs + bas.cta + bas.cti + bas.cne; // Astatine
// smuggle something cRadon = bas.cRa + bas.cdo + bas.cn; // Radon
// smuggle something cFrancium = phn.cFra + phn.cncium; // Francium
// smuggle something cRadium = bas.cRa + phn.cdium; // Radium
// smuggle something cActinium = wrd.cAct + phn.cinium; // Actinium
// smuggle something cThorium = bas.cTh + phn.corium; // Thorium
// smuggle something cProtactinium = phn.cPro + bas.cta + phn.cctinium; // Protactinium
// smuggle something cUranium = bas.cUr + phn.canium; // Uranium
// smuggle something cNeptunium = bas.cNe + bas.cpt + phn.cuni + bas.cum; // Neptunium
// smuggle something cPlutonium = bas.cPl + phn.cuto + phn.cnium; // Plutonium
// smuggle something cAmericium = bas.cAm + bas.cer + phn.cicium; // Americium
// smuggle something cCurium = phn.cCur + phn.cium; // Curium
// smuggle something cBerkelium = bas.cBe + bas.crk + phn.celium; // Berkelium
// smuggle something cCalifornium = bas.cCa + bas.cli + wrd.cfor + phn.cnium; // Californium
// smuggle something cEinsteinium = bas.cEi + bas.cns + bas.cte + phn.cinium; // Einsteinium
// smuggle something cFermium = bas.cFe + bas.crm + phn.cium; // Fermium
// smuggle something cMendelevium = bas.cMe + bas.cnd + bas.cel + bas.cev + phn.cium; // Mendelevium
// smuggle something cNobelium = bas.cNo + bas.cbe + phn.clium; // Nobelium
// smuggle something cLawrencium = bas.cLa + bas.cwr + phn.cenc + phn.cium; // Lawrencium
// smuggle something cRutherfordium = bas.cRu + phn.cther + wrd.cfor + phn.cdium; // Rutherfordium
// smuggle something cDubnium = bas.cDu + bas.cbn + phn.cium; // Dubnium
// smuggle something cSeaborgium = wrd.cSea + bas.cbo + bas.crg + phn.cium; // Seaborgium
// smuggle something cBohrium = bas.cBo + bas.chr + phn.cium; // Bohrium
// smuggle something cHassium = wrd.cHas + phn.csium; // Hassium
// smuggle something cMeitnerium = bas.cMe + bas.cit + bas.cne + phn.crium; // Meitnerium
// smuggle something cDarmstatium = bas.cDa + bas.crm + bas.cst + phn.cati + bas.cum; // Darmstatium
// smuggle something cRoentgenium = bas.cRo + phn.cent + phn.cgen + phn.cium; // Roentgenium
// smuggle something cCopernicium = wrd.cCop + phn.cern + phn.cicium; // Copernicium
// smuggle something cNihonium = bas.cNi + bas.cho + phn.cnium; // Nihonium
// smuggle something cFlerovium = bas.cFl + bas.cer + phn.covium; // Flerovium
// smuggle something cMoscovium = bas.cMo + bas.csc + phn.covium; // Moscovium
// smuggle something cLivermorium = wrd.cLiver + bas.cmo + phn.crium; // Livermorium
// smuggle something cTennessine = num.cTen + phn.cness + phn.cine; // Tennessine
// smuggle something cOganesson = bas.cOg + phn.cane + bas.css + bas.con; // Oganesson
