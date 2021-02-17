/**
 * @file element.constants.js
 * @module element-constants
 * @description Contains named elements.
 * @requires module:basic-constants
 * @requires module:phonics-constants
 * @requires module:generic-constants
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 * {@link https://en.wikipedia.org/wiki/List_of_mathematical_shapes}
 */
import * as b from './basic.constants';
import * as p from './phonics.constants';
import * as n from './numeric.constants';
import * as g from './generic.constants';
import * as w from './word.constants';

// NOTE: I changed e-x-p-o-r-t c-o-n-s-t => smuggle something,
// because the constants validation system is scanning these files looking for that keyword and
// if it finds it then it will use that line for validation pruposes.
// So to reverse this, just do a find replace and change // smuggle something back into the other e-x-p-o-r-t c-o-n-s-t string.
// The current state of the application doesn't need all of these, but future applications will most definately need them.
// So they are left here as a matter of future-proofing.

// smuggle something cH = b.cH; // H
// smuggle something cHe = b.cHe; // He
// smuggle something cLi = b.cLi; // Li
// smuggle something cBe = b.cBe; // Be
// smuggle something cB = b.cB; // B
// smuggle something cC = b.cC; // C
// smuggle something cN = b.cN; // N
// smuggle something cO = b.cO; // O
// smuggle something cF = b.cF; // F
// smuggle something cNe = b.cNe; // Ne
// smuggle something cNa = b.cNa; // Na
// smuggle something cMg = b.cMg; // Mg
// smuggle something cAl = b.cAl; // Al
// smuggle something cSi = b.cSi; // Si
// smuggle something cP = b.cP; // P
// smuggle something cS = b.cS; // S
// smuggle something cCl = b.cCl; // Cl
// smuggle something cAr = b.cAr; // Ar
// smuggle something cK = b.cK; // K
// smuggle something cCa = b.cCa; // Ca
// smuggle something cSc = b.cSc; // Sc
// smuggle something cTi = b.cTi; // Ti
// smuggle something cV = b.cV; // V
// smuggle something cCr = b.cCr; // Cr
// smuggle something cMn = b.cMn; // Mn
// smuggle something cFe = b.cFe; // Fe
// smuggle something cCo = b.cCo; // Co
// smuggle something cNi = b.cNi; // Ni
// smuggle something cCu = b.cCu; // Cu
// smuggle something cZn = b.cZn; // Zn
// smuggle something cGa = b.cGa; // Ga
// smuggle something cGe = b.cGe; // Ge
// smuggle something cAs = b.cAs; // As
// smuggle something cSe = b.cSe; // Se
// smuggle something cBr = b.cBr; // Br
// smuggle something cKr = b.cKr; // Kr
// smuggle something cRb = b.cRb; // Rb
// smuggle something cSr = b.cSr; // Sr
// smuggle something cY = b.cY; // Y
// smuggle something cZr = b.cZr; // Zr
// smuggle something cNb = b.cNb; // Nb
// smuggle something cMo = b.cMo; // Mo
// smuggle something cTc = b.cTc; // Tc
// smuggle something cRu = b.cRu; // Ru
// smuggle something cRh = b.cRh; // Rh
// smuggle something cPd = b.cPd; // Pd
// smuggle something cAg = b.cAg; // Ag
// smuggle something cCd = b.cCd; // Cd
// smuggle something cIn = b.cIn; // In
// smuggle something cSn = b.cSn; // Sn
// smuggle something cSb = b.cSb; // Sb
// smuggle something cTe = b.cTe; // Te
// smuggle something cI = b.cI; // I
// smuggle something cXe = b.cXe; // Xe
// smuggle something cCs = b.cCs; // Cs
// smuggle something cBa = b.cBa; // Ba
// smuggle something cLa = b.cLa; // La
// smuggle something cCe = b.cCe; // Ce
// smuggle something cPr = b.cPr; // Pr
// smuggle something cNd = b.cNd; // Nd
// smuggle something cPm = b.cPm; // Pm
// smuggle something cSm = b.cSm; // Sm
// smuggle something cEu = b.cEu; // Eu
// smuggle something cGd = b.cGd; // Gd
// smuggle something cTb = b.cTb; // Tb
// smuggle something cDy = b.cDy; // Dy
// smuggle something cHo = b.cHo; // Ho
// smuggle something cEr = b.cEr; // Er
// smuggle something cTm = b.cTm; // Tm
// smuggle something cYb = b.cYb; // Yb
// smuggle something cLu = b.cLu; // Lu
// smuggle something cHf = b.cHf; // Hf
// smuggle something cTa = b.cTa; // Ta
// smuggle something cW = b.cW; // W
// smuggle something cRe = b.cRe; // Re
// smuggle something cOs = b.cOs; // Os
// smuggle something cIr = b.cIr; // Ir
// smuggle something cPt = b.cPt; // Pt
// smuggle something cAu = b.cAu; // Au
// smuggle something cHg = b.cHg; // Hg
// smuggle something cTl = b.cTl; // Tl
// smuggle something cPb = b.cPb; // Pb
// smuggle something cBi = b.cBi; // Bi
// smuggle something cPo = b.cPo; // Po
// smuggle something cAt = b.cA + b.ct; // At
// smuggle something cRn = b.cRn; // Rn
// smuggle something cFr = b.cFr; // Fr
// smuggle something cRa = b.cRa; // Ra
// smuggle something cAc = b.cAc; // Ac
// smuggle something cTh = b.cTh; // Th
// smuggle something cPa = b.cPa; // Pa
// smuggle something cU = b.cU; // U
// smuggle something cNp = b.cNp; // Np
// smuggle something cPu = b.cPu; // Pu
// smuggle something cAm = b.cAm; // Am
// smuggle something cCm = b.cCm; // Cm
// smuggle something cBk = b.cBk; // Bk
// smuggle something cCf = b.cCf; // Cf
// smuggle something cEs = b.cEs; // Es
// smuggle something cFm = b.cFm; // Fm
// smuggle something cMd = b.cMd; // Md
// smuggle something cNo = b.cNo; // No
// smuggle something cLr = b.cLr; // Lr
// smuggle something cRf = b.cRf; // Rf
// smuggle something cDb = b.cDb; // Db
// smuggle something cSg = b.cSg; // Sg
// smuggle something cBh = b.cBh; // Bh
// smuggle something cHs = b.cHs; // Hs
// smuggle something cMt = b.cMt; // Mt
// smuggle something cDs = b.cDs; // Ds
// smuggle something cRg = b.cRg; // Rg
// smuggle something cCn = b.cCn; // Cn
// smuggle something cNh = b.cNh; // Nh
// smuggle something cFl = b.cFl; // Fl
// smuggle something cMc = b.cMc; // Mc
// smuggle something cLv = b.cLv; // Lv
// smuggle something cTs = b.cTs; // Ts
// smuggle something cOg = b.cOg; // Og
//
// // *****************************************************
//
// smuggle something cHydrogen = b.cHy + b.cdr + p.cogen; // Hydrogen
// smuggle something cHelium = b.cHe + p.clium; // Helium
// smuggle something cLithium = w.cLit + p.chium; // Lithium
// smuggle something cBeryllium = b.cBe + b.cry + p.cllium; // Beryllium
// smuggle something cBoron = b.cBo + p.cron; // Boron
// smuggle something cCarbon = b.cCa + b.crb + b.con; // Carbon
// smuggle something cNitrogen = b.cNi + b.ctr + p.cogen; // Nitrogen
// smuggle something cOxygen = b.cOx + b.cyg + b.cen; // Oxygen
// smuggle something cFlorine = b.cFl + p.corine; // Florine
// smuggle something cNeon = b.cNe + b.con; // Neon
// smuggle something cSodium = b.cSo + p.cdium; // Sodium
// smuggle something cMagnesium = b.cMa + b.cgn + p.cesium; // Magnesium
// smuggle something cAluminum = b.cAl + b.cum + p.cinum; // Aluminum
// smuggle something cSilicon = b.cSi + p.clic + b.con; // Silicon
// smuggle something cPhosphorus = b.cPh + b.cos + b.cph + b.cor + b.cus; // Phosphorus
// smuggle something cSulfur = b.cSu + b.clf + b.cur; // Sulfur
// smuggle something cClorine = b.cCl + p.corine; // Clorine
// smuggle something cArgon = g.cArg + b.con; // Argon
// smuggle something cPotassium = b.cPo + b.cta + p.cssium; // Potassium
// smuggle something cCalcium = b.cCa + b.clc + p.cium; // Calcium
// smuggle something cScandium = w.cScan + p.cdium; // Scandium
// smuggle something cTitanium = b.cTi + p.ctan + p.cium; // Titanium
// smuggle something cVanadium = b.cVa + b.cna + p.cdium; // Vanadium
// smuggle something cChromium = b.cCh + b.cro + p.cmium; // Chromium
// smuggle something cManganese = w.cMan + b.cga + p.cnes + b.ce; // Manganese
// smuggle something cIron = b.cIr + b.con; // Iron
// smuggle something cCobalt = b.cCo + b.cba + b.clt; // Cobalt
// smuggle something cNickel = b.cNi + b.cc + p.ckel; // Nickel
// smuggle something cCopper = b.cCo + b.cp + p.cper; // Copper
// smuggle something cZinc = b.cZi + b.cnc; // Zinc
// smuggle something cGallium = b.cGa + p.cllium; // Gallium
// smuggle something cGermanium = b.cGe + p.crman + p.cium; // Germanium
// smuggle something cArsenic = b.cAr + b.cse + p.cnic; // Arsenic
// smuggle something cSelenium = b.cSe + b.cle + p.cnium; // Selenium
// smuggle something cBromine = b.cBr + b.com + p.cine; // Bromine
// smuggle something cKrypton = b.cKr + b.cyp + p.cton; // Krypton
// smuggle something cRubidium = b.cRu + b.cbi + p.cdium; // Rubidium
// smuggle something cStrontium = b.cSt + p.cron + p.ctium; // Strontium
// smuggle something cYttrium = b.cYt + p.ctri + b.cum; // Yttrium
// smuggle something cZirconium = b.cZi + b.crc + p.conium; // Zirconium
// smuggle something cNiobium = b.cNi + b.cob + p.cium; // Niobium
// smuggle something cMolybdenum = b.cMo + b.cly + b.cbd + b.cen + b.cum; // Molybdenum
// smuggle something cTechnetium = b.cTe + b.cch + b.cne + p.ctium; // Technetium
// smuggle something cRuthenium = b.cRu + w.cthen + p.cium; // Ruthenium
// smuggle something cRhodium = g.cRho + p.cdium; // Rhodium
// smuggle something cPalladium = w.cPal + b.cla + p.cdium; // Palladium
// smuggle something cSilver = b.cSi + b.cl + p.cver; // Silver
// smuggle something cCadmium = b.cCa + b.cdm + p.cium; // Cadmium
// smuggle something cIndium = b.cIn + p.cdium; // Indium
// smuggle something cTin = b.cTi + b.cn; // Tin
// smuggle something cAntimony = b.cAn + b.cti + p.cmon + b.cy; // Antimony
// smuggle something cTellurium = b.cTe + b.cll + p.curium; // Tellurium
// smuggle something cIodine = b.cIo + b.cdi + b.cne; // Iodine
// smuggle something cXenon = b.cXe + p.cnon; // Xenon
// smuggle something cCesium = b.cCe + p.csium; // Cesium
// smuggle something cBarium = b.cBa + p.crium; // Barium
// smuggle something cLanthanum = b.cLa + w.cnth + b.can + b.cum; // Lanthanum
// smuggle something cCerium = b.cCe + p.crium; // Cerium
// smuggle something cPraseodymium = b.cPr + p.c_ase + p.codymium; // Praseodymium
// smuggle something cNeodymium = b.cNe + p.codymium; // Neodymium
// smuggle something cPromethium = p.cPro + p.cmet + p.chium; // Promethium
// smuggle something cSamarium = b.cSa + p.cmar + p.cium; // Samarium
// smuggle something cEuropium = b.cEu + b.cro + b.cpi + b.cum; // Europium
// smuggle something cGadolinium = b.cGa + b.cdo + p.clin + p.cium; // Gadolinium
// smuggle something cTerbium = b.cTe + p.crbium; // Terbium
// smuggle something cDysprosium = b.cDy + b.csp + b.cro + p.csium; // Dysprosium
// smuggle something cHolmium = b.cHo + b.clm + p.cium; // Holmium
// smuggle something cErbium = b.cEr + p.cbium; // Erbium
// smuggle something cThulium = b.cTh + b.cul + p.cium; // Thulium
// smuggle something cYtterbium = b.cYt + p.cter + p.cbium; // Ytterbium
// smuggle something cLutetium = b.cLu + b.cte + p.ctium; // Lutetium
// smuggle something cHafnium = b.cHa + b.cfn + p.cium; // Hafnium
// smuggle something cTantalum = b.cTa + b.cn + b.cta + p.clum; // Tantalum
// smuggle something cTungsten = b.cTu + b.cng + p.cste + b.cn; // Tungsten
// smuggle something cRhenium = b.cRh + p.cenium; // Rhenium
// smuggle something cOsmium = b.cOs + p.cmium; // Osmium
// smuggle something cIridium = b.cIr + p.cidium; // Iridium
// smuggle something cPlatinum = b.cPl + b.cat + p.cinum; // Platinum
// smuggle something cGold = b.cG + w.cold; // Gold
// smuggle something cMercury = b.cMe + b.crc + b.cur + b.cy; // Mercury
// smuggle something cThallium = b.cTh + p.callium; // Thallium
// smuggle something cLead = b.cLe + w.c1a1d; // Lead
// smuggle something cBismuth = b.cBi + b.csm + p.cuth; // Bismuth
// smuggle something cPolonium = b.cPo + p.clon + p.cium; // Polonium
// smuggle something cAstatine = b.cAs + b.cta + b.cti + b.cne; // Astatine
// smuggle something cRadon = b.cRa + b.cdo + b.cn; // Radon
// smuggle something cFrancium = p.cFra + p.cncium; // Francium
// smuggle something cRadium = b.cRa + p.cdium; // Radium
// smuggle something cActinium = w.cAct + p.cinium; // Actinium
// smuggle something cThorium = b.cTh + p.corium; // Thorium
// smuggle something cProtactinium = p.cPro + b.cta + p.cctinium; // Protactinium
// smuggle something cUranium = b.cUr + p.canium; // Uranium
// smuggle something cNeptunium = b.cNe + b.cpt + p.cuni + b.cum; // Neptunium
// smuggle something cPlutonium = b.cPl + p.cuto + p.cnium; // Plutonium
// smuggle something cAmericium = b.cAm + b.cer + p.cicium; // Americium
// smuggle something cCurium = p.cCur + p.cium; // Curium
// smuggle something cBerkelium = b.cBe + b.crk + p.celium; // Berkelium
// smuggle something cCalifornium = b.cCa + b.cli + w.cfor + p.cnium; // Californium
// smuggle something cEinsteinium = b.cEi + b.cns + b.cte + p.cinium; // Einsteinium
// smuggle something cFermium = b.cFe + b.crm + p.cium; // Fermium
// smuggle something cMendelevium = b.cMe + b.cnd + b.cel + b.cev + p.cium; // Mendelevium
// smuggle something cNobelium = b.cNo + b.cbe + p.clium; // Nobelium
// smuggle something cLawrencium = b.cLa + b.cwr + p.cenc + p.cium; // Lawrencium
// smuggle something cRutherfordium = b.cRu + p.cther + w.cfor + p.cdium; // Rutherfordium
// smuggle something cDubnium = b.cDu + b.cbn + p.cium; // Dubnium
// smuggle something cSeaborgium = w.cSea + b.cbo + b.crg + p.cium; // Seaborgium
// smuggle something cBohrium = b.cBo + b.chr + p.cium; // Bohrium
// smuggle something cHassium = w.cHas + p.csium; // Hassium
// smuggle something cMeitnerium = b.cMe + b.cit + b.cne + p.crium; // Meitnerium
// smuggle something cDarmstatium = b.cDa + b.crm + b.cst + p.cati + b.cum; // Darmstatium
// smuggle something cRoentgenium = b.cRo + p.cent + p.cgen + p.cium; // Roentgenium
// smuggle something cCopernicium = w.cCop + p.cern + p.cicium; // Copernicium
// smuggle something cNihonium = b.cNi + b.cho + p.cnium; // Nihonium
// smuggle something cFlerovium = b.cFl + b.cer + p.covium; // Flerovium
// smuggle something cMoscovium = b.cMo + b.csc + p.covium; // Moscovium
// smuggle something cLivermorium = w.cLiver + b.cmo + p.crium; // Livermorium
// smuggle something cTennessine = n.cTen + p.cness + p.cine; // Tennessine
// smuggle something cOganesson = b.cOg + p.cane + b.css + b.con; // Oganesson
