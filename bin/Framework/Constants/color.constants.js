"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cFuchsia = exports.cfuchsia = exports.cFandango = exports.cfandango = exports.cSienna = exports.csienna = exports.cOlive = exports.colive = exports.cCrimson = exports.ccrimson = exports.cCherry = exports.ccherry = exports.cBeige = exports.cbeige = exports.cAzure = exports.cazure = exports.cAmaranth = exports.camaranth = exports.cAmethyst = exports.camethyst = exports.cAmber = exports.camber = exports.cAqua = exports.caqua = exports.cAero = exports.caero = exports.cVanilla = exports.cvanilla = exports.cUmber = exports.cumber = exports.cTangerine = exports.ctangerine = exports.cTurquoise = exports.cturquoise = exports.cDrab = exports.cdrab = exports.cTaupe = exports.ctaupe = exports.cTeal = exports.cteal = exports.cSapphire = exports.csapphire = exports.cPlatnium = exports.cplatnium = exports.cCadmium = exports.ccadmium = exports.cTitanium = exports.ctitanium = exports.cTan = exports.ctan = exports.cCobalt = exports.ccobalt = exports.cCopper = exports.ccopper = exports.cSilver = exports.csilver = exports.cGold = exports.cgold = exports.cRuby = exports.cruby = exports.cScarlet = exports.cscarlet = exports.cRose = exports.crose = exports.cMaroon = exports.cmaroon = exports.cLilac = exports.clilac = exports.cViolet = exports.cviolet = exports.cPurple = exports.cpurple = exports.cLavender = exports.clavender = exports.cPink = exports.cpink = exports.cGray = exports.cgray = exports.cGrey = exports.cgrey = exports.cBrown = exports.cbrown = exports.cOrange = exports.corange = exports.cWhite = exports.cwhite = exports.cBlack = exports.cblack = exports.cYellow = exports.cyellow = exports.cMagenta = exports.cmagenta = exports.cCyan = exports.ccyan = exports.cBlue = exports.cblue = exports.cGreen = exports.cgreen = exports.cRed = exports.cred = void 0;
exports.cVermilion = exports.cvermilion = exports.cViridian = exports.cviridian = exports.cTuscan = exports.ctuscan = exports.cPlum = exports.cplum = exports.cPeach = exports.cpeach = exports.cMauve = exports.cmauve = exports.cLemon = exports.clemon = exports.cIndigo = exports.cindigo = exports.cLime = exports.clime = void 0;

var b = _interopRequireWildcard(require("./basic.constants"));

var p = _interopRequireWildcard(require("./phonics.constants"));

var g = _interopRequireWildcard(require("./generic.constants"));

var n = _interopRequireWildcard(require("./numeric.constants"));

var w = _interopRequireWildcard(require("./word.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @file color.constants.js
 * @module color-constants
 * @description Contains all named colors.
 * @requires module:basic-constants
 * @requires module:phonics-constants
 * @requires module:generic-constants
 * @requires module:numeric-constants
 * @requires module:word-constants
 * @author Seth Hollingsead
 * @date 2020/07/16
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
// NOTE: I changed e-x-p-o-r-t c-o-n-s-t => smuggle something,
// because the constants validation system is scanning these files looking for that keyword and
// if it finds it then it will use that line for validation pruposes.
// So to reverse this, just do a find replace and change // smuggle something back into the other e-x-p-o-r-t c-o-n-s-t string.
// The current state of the application doesn't need all of these, but future applications will most definately need them.
// So they are left here as a matter of future-proofing.
// Colors
// Primary Colors
var cred = b.cr + b.ced; // red

exports.cred = cred;
var cRed = b.cR + b.ced; // Red

exports.cRed = cRed;
var cgreen = b.cg + p.creen; // green

exports.cgreen = cgreen;
var cGreen = b.cG + p.creen; // Green

exports.cGreen = cGreen;
var cblue = b.cb + p.clue; // blue

exports.cblue = cblue;
var cBlue = b.cB + p.clue; // Blue
// Secondary Colors CMYK

exports.cBlue = cBlue;
var ccyan = b.cc + p.cyan; // cyan

exports.ccyan = ccyan;
var cCyan = b.cC + p.cyan; // Cyan

exports.cCyan = cCyan;
var cmagenta = b.cm + b.cag + p.centa; // magenta

exports.cmagenta = cmagenta;
var cMagenta = b.cM + b.cag + p.centa; // Magenta

exports.cMagenta = cMagenta;
var cyellow = w.cyell + b.cow; // yellow

exports.cyellow = cyellow;
var cYellow = w.cYell + b.cow; // Yellow

exports.cYellow = cYellow;
var cblack = b.cb + w.clack; // black

exports.cblack = cblack;
var cBlack = b.cB + w.clack; // Black

exports.cBlack = cBlack;
var cwhite = b.cwh + p.cite; // white

exports.cwhite = cwhite;
var cWhite = b.cWh + p.cite; // White

exports.cWhite = cWhite;
var corange = b.cor + p.cange; // orange

exports.corange = corange;
var cOrange = b.cOr + p.cange; // Orange
// Common Colors

exports.cOrange = cOrange;
var cbrown = b.cbr + p.cown; // brown

exports.cbrown = cbrown;
var cBrown = b.cBr + p.cown; // Brown

exports.cBrown = cBrown;
var cgrey = b.cg + p.crey; // grey

exports.cgrey = cgrey;
var cGrey = b.cG + p.crey; // Grey

exports.cGrey = cGrey;
var cgray = b.cg + p.cray; // gray

exports.cgray = cgray;
var cGray = b.cG + p.cray; // Gray

exports.cGray = cGray;
var cpink = b.cp + p.cink; // pink

exports.cpink = cpink;
var cPink = b.cP + p.cink; // Pink

exports.cPink = cPink;
var clavender = b.cl + p.cavender; // lavender

exports.clavender = clavender;
var cLavender = b.cL + p.cavender; // Lavender

exports.cLavender = cLavender;
var cpurple = b.cp + p.curple; // purple

exports.cpurple = cpurple;
var cPurple = b.cP + p.curple; // Purple

exports.cPurple = cPurple;
var cviolet = b.cv + p.ciolet; // violet

exports.cviolet = cviolet;
var cViolet = b.cV + p.ciolet; // Violet

exports.cViolet = cViolet;
var clilac = b.cl + p.cilac; // lilac

exports.clilac = clilac;
var cLilac = b.cL + p.cilac; // Lilac

exports.cLilac = cLilac;
var cmaroon = b.cm + p.caroon; // maroon

exports.cmaroon = cmaroon;
var cMaroon = b.cM + p.caroon; // Maroon

exports.cMaroon = cMaroon;
var crose = b.cr + p.cose; // rose

exports.crose = crose;
var cRose = b.cR + p.cose; // Rose

exports.cRose = cRose;
var cscarlet = b.csc + b.car + w.clet; // scarlet

exports.cscarlet = cscarlet;
var cScarlet = b.cSc + b.car + w.clet; // Scarlet

exports.cScarlet = cScarlet;
var cruby = b.cr + p.cuby; // ruby

exports.cruby = cruby;
var cRuby = b.cR + p.cuby; // Ruby

exports.cRuby = cRuby;
var cgold = b.cg + w.cold; // gold

exports.cgold = cgold;
var cGold = b.cG + w.cold; // Gold

exports.cGold = cGold;
var csilver = b.cs + p.cilver; // silver

exports.csilver = csilver;
var cSilver = b.cS + p.cilver; // Silver

exports.cSilver = cSilver;
var ccopper = b.cc + p.copper; // copper

exports.ccopper = ccopper;
var cCopper = b.cC + p.copper; // Copper

exports.cCopper = cCopper;
var ccobalt = b.cc + p.cobalt; // cobalt

exports.ccobalt = ccobalt;
var cCobalt = b.cC + p.cobalt; // Cobalt

exports.cCobalt = cCobalt;
var ctan = b.cta + b.cn; // tan

exports.ctan = ctan;
var cTan = b.cTa + b.cn; // Tan

exports.cTan = cTan;
var ctitanium = b.cti + ctan + p.cium; // titanium

exports.ctitanium = ctitanium;
var cTitanium = b.cTi + ctan + p.cium; // Titanium

exports.cTitanium = cTitanium;
var ccadmium = b.cca + b.cd + p.cmium; // cadmium

exports.ccadmium = ccadmium;
var cCadmium = b.cCa + b.cd + p.cmium; // Cadmium

exports.cCadmium = cCadmium;
var cplatnium = b.cpl + b.cat + p.cnium; // platnium

exports.cplatnium = cplatnium;
var cPlatnium = b.cPl + b.cat + p.cnium; // Platnium

exports.cPlatnium = cPlatnium;
var csapphire = w.csap + p.cphire; // sapphire

exports.csapphire = csapphire;
var cSapphire = w.cSap + p.cphire; // Sapphire

exports.cSapphire = cSapphire;
var cteal = b.ct + p.ceal; // teal

exports.cteal = cteal;
var cTeal = b.cT + p.ceal; // Teal

exports.cTeal = cTeal;
var ctaupe = b.ct + p.caupe; // taupe

exports.ctaupe = ctaupe;
var cTaupe = b.cT + p.caupe; // Taupe

exports.cTaupe = cTaupe;
var cdrab = b.cd + p.crab; // drab

exports.cdrab = cdrab;
var cDrab = b.cD + p.crab; // Drab

exports.cDrab = cDrab;
var cturquoise = b.ctu + p.crquoise; // turquoise

exports.cturquoise = cturquoise;
var cTurquoise = b.cTu + p.crquoise; // Turquoise

exports.cTurquoise = cTurquoise;
var ctangerine = ctan + p.cgerine; // tangerine

exports.ctangerine = ctangerine;
var cTangerine = cTan + p.cgerine; // Tangerine

exports.cTangerine = cTangerine;
var cumber = b.cu + p.cmber; // umber

exports.cumber = cumber;
var cUmber = b.cU + p.cmber; // Umber

exports.cUmber = cUmber;
var cvanilla = w.cvan + p.cilla; // vanilla

exports.cvanilla = cvanilla;
var cVanilla = w.cVan + p.cilla; // Vanilla

exports.cVanilla = cVanilla;
var caero = b.ca + p.cero; // aero

exports.caero = caero;
var cAero = b.cA + p.cero; // Aero

exports.cAero = cAero;
var caqua = b.ca + p.cqua; // aqua

exports.caqua = caqua;
var cAqua = b.cA + p.cqua; // Aqua

exports.cAqua = cAqua;
var camber = b.ca + p.cmber; // amber

exports.camber = camber;
var cAmber = b.cA + p.cmber; // Amber

exports.cAmber = cAmber;
var camethyst = b.cam + p.ceth + p.cyst; // amethyst

exports.camethyst = camethyst;
var cAmethyst = b.cAm + p.ceth + p.cyst; // Amethyst

exports.cAmethyst = cAmethyst;
var camaranth = b.ca + p.cmaranth; // amaranth

exports.camaranth = camaranth;
var cAmaranth = b.cA + p.cmaranth; // Amaranth

exports.cAmaranth = cAmaranth;
var cazure = b.caz + p.cure; // azure

exports.cazure = cazure;
var cAzure = b.cAz + p.cure; // Azure

exports.cAzure = cAzure;
var cbeige = b.cbe + p.cige; // beige

exports.cbeige = cbeige;
var cBeige = b.cBe + p.cige; // Beige

exports.cBeige = cBeige;
var ccherry = b.cch + p.cerry; // cherry

exports.ccherry = ccherry;
var cCherry = b.cCh + p.cerry; // Cherry

exports.cCherry = cCherry;
var ccrimson = b.cc + p.crimson; // crimson

exports.ccrimson = ccrimson;
var cCrimson = b.cC + p.crimson; // Crimson

exports.cCrimson = cCrimson;
var colive = b.co + p.clive; // olive

exports.colive = colive;
var cOlive = b.cO + p.clive; // Olive

exports.cOlive = cOlive;
var csienna = b.cs + p.cienna; // sienna

exports.csienna = csienna;
var cSienna = b.cS + p.cienna; // Sienna

exports.cSienna = cSienna;
var cfandango = b.cf + p.candango; // fandango

exports.cfandango = cfandango;
var cFandango = b.cF + p.candango; // Fandango

exports.cFandango = cFandango;
var cfuchsia = b.cf + p.cuchsia; // fuchsia

exports.cfuchsia = cfuchsia;
var cFuchsia = b.cF + p.cuchsia; // Fuchsia

exports.cFuchsia = cFuchsia;
var clime = b.cl + p.cime; // lime

exports.clime = clime;
var cLime = b.cL + p.cime; // Lime

exports.cLime = cLime;
var cindigo = b.ci + p.cndigo; // indigo

exports.cindigo = cindigo;
var cIndigo = b.cI + p.cndigo; // Indigo

exports.cIndigo = cIndigo;
var clemon = b.cl + p.cemon; // lemon

exports.clemon = clemon;
var cLemon = b.cL + p.cemon; // Lemon

exports.cLemon = cLemon;
var cmauve = b.cm + p.cauve; // mauve

exports.cmauve = cmauve;
var cMauve = b.cM + p.cauve; // Mauve

exports.cMauve = cMauve;
var cpeach = b.cp + p.ceach; // peach

exports.cpeach = cpeach;
var cPeach = b.cP + p.ceach; // Peach

exports.cPeach = cPeach;
var cplum = b.cp + p.clum; // plum

exports.cplum = cplum;
var cPlum = b.cP + p.clum; // Plum

exports.cPlum = cPlum;
var ctuscan = b.ct + p.cuscan; // tuscan

exports.ctuscan = ctuscan;
var cTuscan = b.cT + p.cuscan; // Tuscan

exports.cTuscan = cTuscan;
var cviridian = b.cv + p.ciridian; // viridian

exports.cviridian = cviridian;
var cViridian = b.cV + p.ciridian; // Viridian

exports.cViridian = cViridian;
var cvermilion = b.cv + p.cermilion; // vermilion

exports.cvermilion = cvermilion;
var cVermilion = b.cV + p.cermilion; // Vermilion
// Tertiary Named Colors
// https://en.wikipedia.org/wiki/List_of_colors:_A%E2%80%93F
// https://en.wikipedia.org/wiki/List_of_colors:_G%E2%80%93M
// https://en.wikipedia.org/wiki/List_of_colors:_N%E2%80%93Z
// smuggle something cAbsoluteZero = w.cAbsolute + n.cZero; // AbsoluteZero
// smuggle something cAcidGreen = w.cAcid + cGreen; // AcidGreen
// smuggle something cAeroBlue = cAero + cBlue; // AeroBlue
// smuggle something cAfricanViolet = w.cAfrican + cViolet; // AfricanViolet
// smuggle something cAirSuperiorityBlue = w.cAir + w.cSuperiority + cBlue; // AirSuperiorityBlue
// smuggle something cAliceBlue = w.cAlice + cBlue; // AliceBlue
// smuggle something cAlloyOrange = w.cAlloy + cOrange; // AlloyOrange
// smuggle something cAlmond = b.cAl + p.cmond; // Almond
// smuggle something cAmaranthMP = cAmaranth + b.cMP; // AmaranthMP
// smuggle something cAmaranthPink = cAmaranth + cPink; // AmaranthPink
// smuggle something cAmaranthPurple = cAmaranth + cPurple; // AmaranthPurple
// smuggle something cAmaranthRed = cAmaranth + cRed; // AmaranthRed
// smuggle something cAmazon = b.cAm + b.caz + b.con; // Amazon
// smuggle something cAmberSAEECE = cAmber + b.cSA + b.cEE + b.cCE; // AmberSAEECE
// smuggle something cAndroidGreen = w.cAndroid + cGreen; // AndroidGreen
// smuggle something cAntiqueBrass = w.cAntique + w.cBrass; // AntiqueBrass
// smuggle something cAntiqueBronze = w.cAntique + w.cBronze; // AntiqueBronze
// smuggle something cAntiqueFuchsia = w.cAntique + cFuchsia; // AntiqueFuchsia
// smuggle something cAntiqueRuby = w.cAntique + cRuby; // AntiqueRuby
// smuggle something cAntiqueWhite = w.cAntique + cWhite; // AntiqueWhite
// smuggle something cAoEnglish = b.cAo + w.cEnglish; // AoEnglish
// smuggle something cAppleGreen = w.cApple + cGreen; // AppleGreen
// smuggle something cAquamarine = cAqua + p.cmar + p.cine; // Aquamarine
// smuggle something cArcticLime = w.cArctic + cLime; // ArcticLime
// smuggle something cArmyGreen = w.cArmy + cGreen; // ArmyGreen
// smuggle something cArtichoke = b.cAr + p.ctic + b.cho + b.cke; // Artichoke
// smuggle something cArylideYellow = w.cArylide + cYellow; // ArylideYellow
// smuggle something cAshGray = w.cAsh + cGray; // AshGray
// smuggle something cAsparagus = b.cAs + p.cpara + b.cgu + b.cs; // Asparagus
// smuggle something cAtomicTangerine = w.cAtomic + cTangerine; // AtomicTangerine
// smuggle something cAuburn = b.cAu + b.cbu + b.crn; // Auburn
// smuggle something cAureolin = b.cAu + b.cre + p.colin; // Aureolin
// smuggle something cAvocado = b.cAv + b.coc + p.cado; // Avocado
// smuggle something cAzureWeb = cAzure + w.cWeb; // AzureWeb
// smuggle something cBabyBlue = w.cBaby + cBlue; // BabyBlue
// smuggle something cBabyBlueEyes = w.cBaby + cBlue + w.cEyes; // BabyBlueEyes
// smuggle something cBabyPink = w.cBaby + cPink; // BabyPink
// smuggle something cBabyPowder = w.cBaby + w.cPowder; // BabyPowder
// smuggle something cBakerMillerPink = w.cBaker + w.cMiller + cPink; // BakerMillerPink
// smuggle something cBananaMania = w.cBanana + w.cMania; // BananaMania
// smuggle something cBarbiePink = w.cBarbie + cPink; // BarbiePink
// smuggle something cBarnRed = w.cBarn + cRed; // BarnRed
// smuggle something cBattleshipGrey = w.cBattleship + cGrey; // BattleshipGrey
// smuggle something cBeauBlue = w.cBeau + cBlue; // BeauBlue
// smuggle something cBeaver = b.cBe + p.cave + b.cr; // Beaver
// smuggle something cBDazzledBlue = b.cB + w.cDazzled + cBlue; // BDazzledBlue
// smuggle something cBigDipORuby = w.cBig + b.cDi + b.cpO + cRuby; // BigDipORuby
// smuggle something cBisque = b.cBi + b.csq + b.cue; // Bisque
// smuggle something cBistreBrown = w.cBistre + cBrown; // BistreBrown
// smuggle something cBitterLemon = w.cBitter + cLemon; // BitterLemon
// smuggle something cBitterLime = w.cBitter + cLime; // BitterLime
// smuggle something cBittersweet = w.cBittersweet; // Bittersweet
// smuggle something cBittersweetShimmer = w.cBittersweet + w.cShimmer; // BittersweetShimmer
// smuggle something cBlackBean = cBlack + w.cBean; // BlackBean
// smuggle something cBlackChocolate = cBlack + w.cChocolate; // BlackChocolate
// smuggle something cBlackCoffee = cBlack + w.cCoffee; // BlackCoffee
// smuggle something cBlackCoral = cBlack + w.cCoral; // BlackCoral
// smuggle something cBlackOlive = cBlack + cOlive; // BlackOlive
// smuggle something cBlackShadows = cBlack + w.cShadows; // BlackShadows
// smuggle something cBlanchedAlmond = w.cBlanched + b.cAl + p.cmond; // BlanchedAlmond
// smuggle something cBlastOffBronze = w.cBlast + g.cOff + w.cBronze; // BlastOffBronze
// smuggle something cBleuDeFrance = b.cBl + b.ceu + b.cDe + w.cFrance; // BleuDeFrance
// smuggle something cBlizzardBlue = w.cBlizzard + cBlue; // BlizzardBlue
// smuggle something cBlond = b.cBl + p.cond; // Blond
// smuggle something cBloodRed = w.cBlood + cRed; // BloodRed
// smuggle something cBlueCrayola = cBlue + w.cCrayola; // BlueCrayola
// smuggle something cBlueMunsell = cBlue + w.cMunsell; // BlueMunsell
// smuggle something cBlueNCS = cBlue + p.cNCS; // BlueNCS
// smuggle something cBluePantone = cBlue + w.cPantone; // BluePantone
// smuggle something cBluePigment = cBlue + w.cPigment; // BluePigment
// smuggle something cBlueRYB = cBlue + p.cRYB; // BlueRYB
// smuggle something cBlueBell = cBlue + w.cBell; // BlueBell
// smuggle something cBlueGray = cBlue + cGray; // BlueGray
// smuggle something cBlueGreen = cBlue + cGreen; // BlueGreen
// smuggle something cBlueGreenColorWheel = cBlue + cGreen + w.cColor + w.cWheel; // BlueGreenColorWheel
// smuggle something cBlueJeans = cBlue + w.cJeans; // BlueJeans
// smuggle something cBlueSapphire = cBlue + cSapphire; // BlueSapphire
// smuggle something cBlueViolet = cBlue + cViolet; // BlueViolet
// smuggle something cBlueVioletCrayola = cBlue + cViolet + w.cCrayola; // BlueVioletCrayola
// smuggle something cBlueVioletColorWheel = cBlue + cViolet + w.cColor + w.cWheel; // BlueVioletColorWheel
// smuggle something cBlueYonder = cBlue + w.cYonder; // BlueYonder
// smuggle something cBluetiful = cBlue + b.cti + p.cful; // Bluetiful
// smuggle something cBlush = w.cBlush; // Blush
// smuggle something cBole = b.cBo + b.cle; // Bole
// smuggle something cBone = b.cBo + b.cne; // Bone
// smuggle something cBottleGreen = w.cBottle + cGreen; // BottleGreen
// smuggle something cBrandy = p.cBra + p.cndy; // Brandy
// smuggle something cBrickRed = w.cBrick + cRed; // BrickRed
// smuggle something cBrightGreen = w.cBright + cGreen; // BrightGreen
// smuggle something cBrightLilac = w.cBright + cLilac; // BrightLilac
// smuggle something cBrightMaroon = w.cBright + cMaroon; // BrightMaroon
// smuggle something cBrightNavyBlue = w.cBright + w.cNavy + cBlue; // BrightNavyBlue
// smuggle something cBrightYellowCrayola = w.cBright + cYellow + w.cCrayola; // BrightYellowCrayola
// smuggle something cBrilliantRose = w.cBrilliant + cRose; // BrilliantRose
// smuggle something cBrinkPink = b.cBr + p.cink + cPink; // BrinkPink
// smuggle something cBritishRacingGreen = b.cBr + p.citi + b.csh + w.cRacing + cGreen; // BritishRacingGreen
// smuggle something cBronze = w.cBronze; // Bronze
// smuggle something cBrownSugar = cBrown + w.cSugar; // BrownSugar
// smuggle something cBrunswickGreen = w.cBrunswick + cGreen; // BrunswickGreen
// smuggle something cBudGreen = w.cBud + cGreen; // BudGreen
// smuggle something cBuff = b.cBu + b.cff; // Buff
// smuggle something cBurgundy = b.cBu + p.crgundy; // Burgundy
// smuggle something cBurlywood = w.cBurly + w.cwood; // Burlywood
// smuggle something cBurnishedBrown = w.cBurnished + cBrown; // BurnishedBrown
// smuggle something cBurntOrange = w.cBurnt + cOrange; // BurntOrange
// smuggle something cBurntSienna = w.cBurnt + cSienna; // BurntSienna
// smuggle something cBurntUmber = w.cBurnt + cUmber; // BurntUmber
// smuggle something cByzantine = b.cBy + b.cza + b.cnt + p.cine; // Byzantine
// smuggle something cByzantium = w.cByzantium; // Byzantium
// smuggle something cCadet = w.cCadet; // Cadet
// smuggle something cCadetBlue = w.cCadet + cBlue; // CadetBlue
// smuggle something cCadetBlueCrayola = w.cCadet + cBlue + w.cCrayola; // CadetBlueCrayola
// smuggle something cCadetGrey = w.cCadet + cGrey; // CadetGrey
// smuggle something cCadmiumGreen = cCadmium + cGreen; // CadmiumGreen
// smuggle something cCadmiumOrange = cCadmium + cOrange; // CadmiumOrange
// smuggle something cCadmiumRed = cCadmium + cRed; // CadmiumRed
// smuggle something cCadmiumYellow = cCadmium + cYellow; // CadmiumYellow
// smuggle something cCafeAuLait = w.cCafe + b.cAu + b.cLa + b.cit; // CafeAuLait
// smuggle something cCafeNoir = w.cCafe + b.cNo + b.cir; // CafeNoir
// smuggle something cCambridgeBlue = w.cCambridge + cBlue; // CambridgeBlue
// smuggle something cCameoPink = w.cCameo + cPink; // CameoPink
// smuggle something cCanary = w.cCan + p.cary; // Canary
// smuggle something cCanaryYellow = w.cCan + p.cary + cYellow; // CanaryYellow
// smuggle something cCandyAppleRed = w.cCan + b.cdy + w.cApple + cRed; // CandyAppleRed
// smuggle something cCandyPink = w.cCan + b.cdy + cPink; // CandyPink
// smuggle something cCapri = b.cCa + p.cpri; // Capri
// smuggle something cCaputMortuum = w.cCaput + w.cMortuum; // CaputMortuum
// smuggle something cCardinal = b.cCa + b.crd + p.cinal; // Cardinal
// smuggle something cCaribbeanGreen = w.cCaribbean + cGreen; // CaribbeanGreen
// smuggle something cCarmine = w.cCarmine; // Carmine
// smuggle something cCarmineMP = w.cCarmine + b.cMP; // CarmineMP
// smuggle something cCarnationPink = w.cCarnation + cPink; // CarnationPink
// smuggle something cCarnelian = b.cCa + b.crn + b.cel + p.cian; // Carnelian
// smuggle something cCarolinaBlue = b.cCa + b.cro + p.clin + b.caB + p.clue; // CarolinaBlue
// smuggle something cCarrotOrange = w.cCarrot + cOrange; // CarrotOrange
// smuggle something cCastletonGreen = w.cCastleton + cGreen; // CastletonGreen
// smuggle something cCatawba = b.cCa + b.cta + b.cwb + b.ca; // Catawba
// smuggle something cCedarChest = w.cCedar + w.cChest; // CedarChest
// smuggle something cCeladon = w.cCeladon; // Celadon
// smuggle something cCeladonBlue = w.cCeladon + cBlue; // CeladonBlue
// smuggle something cCeladonGreen = w.cCeladon + cGreen; // CeladonGreen
// smuggle something cCeleste = p.cCel + p.cest + b.ce; // Celeste
// smuggle something cCelticBlue = w.cCeltic + cBlue; // CelticBlue
// smuggle something cCerise = w.cCerise; // Cerise
// smuggle something cCerulean = b.cCe + p.crulean; // Cerulean
// smuggle something cCeruleanBlue = b.cCe + p.crulean + cBlue; // CeruleanBlue
// smuggle something cCeruleanFrost = b.cCe + p.crulean + w.cFrost; // CeruleanFrost
// smuggle something cCeruleanCrayola = b.cCe + p.crulean + w.cCrayola; // CeruleanCrayola
// smuggle something cCGBlue = b.cCG + cBlue; // CGBlue
// smuggle something cCGRed = b.cCG + cRed; // CGRed
// smuggle something cChampagne = b.cCh + p.campagne; // Champagne
// smuggle something cChampagnePink = b.cCh + p.campagne + cPink; // ChampagnePink
// smuggle something cCharcoal = w.cChar + b.cco + b.cal; // Charcoal
// smuggle something cCharlestonGreen = w.cCharleston + cGreen; // CharlestonGreen
// smuggle something cCharmPink = w.cCharm + cPink; // CharmPink
// smuggle something cChartreuseTraditional = w.cChartreuse + w.cTraditional; // ChartreuseTraditional
// smuggle something cChartreuseWeb = w.cChartreuse + w.cWeb; // ChartreuseWeb
// smuggle something cCherryBlossomPink = cCherry + w.cBlossom + cPink; // CherryBlossomPink
// smuggle something cChestnut = w.cChestnut; // Chestnut
// smuggle something cChinaPink = w.cChina + cPink; // ChinaPink
// smuggle something cChinaRose = w.cChina + cRose; // ChinaRose
// smuggle something cChineseRed = w.cChinese + cRed; // ChineseRed
// smuggle something cChineseViolet = w.cChinese + cViolet; // ChineseViolet
// smuggle something cChineseYellow = w.cChinese + cYellow; // ChineseYellow
// smuggle something cChocolateTraditional = w.cChocolate + w.cTraditional; // ChocolateTraditional
// smuggle something cChocolateWeb = w.cChocolate + w.cWeb; // ChocolateWeb
// smuggle something cChromeYellow = w.cChrome + cYellow; // ChromeYellow
// smuggle something cCinereous = b.cCi + b.cne + b.cre + p.cous; // Cinereous
// smuggle something cCinnabar = b.cCi + p.cnna + b.cba + b.cr; // Cinnabar
// smuggle something cCinnamonSatin = w.cCinnamon + w.cSatin; // CinnamonSatin
// smuggle something cCitrine = b.cCi + p.ctri + b.cne; // Citrine
// smuggle something cCitron = b.cCi + b.ctr + b.con; // Citron
// smuggle something cClaret = b.cCl + p.care + b.ct; // Claret
// smuggle something cCobaltBlue = cCobalt + cBlue; // CobaltBlue
// smuggle something cCocoaBrown = w.cCocoa + cBrown; // CocoaBrown
// smuggle something cCoffee = w.cCoffee; // Coffee
// smuggle something cColumbiaBlue = w.cColumbia + cBlue; // ColumbiaBlue
// smuggle something cCongoPink = w.cCongo + cPink; // CongoPink
// smuggle something cCoolGrey = w.cCool + cGrey; // CoolGrey
// smuggle something cCopperCrayola = cCopper + w.cCrayola; // CopperCrayola
// smuggle something cCopperPenny = cCopper + w.cPen + b.cny; // CopperPenny
// smuggle something cCopperRed = cCopper + cRed; // CopperRed
// smuggle something cCopperRose = cCopper + cRose; // CopperRose
// smuggle something cCoquelicot = b.cCo + p.cque + p.clic + b.cot; // Coquelicot
// smuggle something cCoral = w.cCoral; // Coral
// smuggle something cCoralPink = w.cCoral + cPink; // CoralPink
// smuggle something cCordovan = p.cCor + b.cdo + w.cvan; // Cordovan
// smuggle something cCorn = p.cCor + b.cn; // Corn
// smuggle something cCornflowerBlue = p.cCor + b.cnf + w.clower + cBlue; // CornflowerBlue
// smuggle something cCornsilk = p.cCor + b.cns + p.cilk; // Cornsilk
// smuggle something cCosmicCobalt = w.cCosmic + cCobalt; // CosmicCobalt
// smuggle something cCosmicLatte = w.cCosmic + w.cLatte; // CosmicLatte
// smuggle something cCoyoteBrown = w.cCoyote + cBrown; // CoyoteBrown
// smuggle something cCottonCandy = w.cCotton + w.cCan + b.cdy; // CottonCandy
// smuggle something cCream = b.cCr + p.ceam; // Cream
// smuggle something cCrimsonUA = cCrimson + b.cUA; // CrimsonUA
// smuggle something cCultured = b.cCu + b.clt + p.cured; // Cultured
// smuggle something cCyanProcess = cCyan + w.cProcess; // CyanProcess
// smuggle something cCyberGrape = w.cCyber + b.cGr + p.cape; // CyberGrape
// smuggle something cCyberYellow = w.cCyber + cYellow; // CyberYellow
// smuggle something cCyclamen = b.cCy + b.ccl + p.camen; // Cyclamen
// smuggle something cDarkBlueGray = w.cDark + cBlue + cGray; // DarkBlueGray
// smuggle something cDarkBrown = w.cDark + cBrown; // DarkBrown
// smuggle something cDarkByzantium = w.cDark + w.cByzantium; // DarkByzantium
// smuggle something cDarkCornflowerBlue = w.cDark + p.cCor + b.cnf + w.clower + cBlue; // DarkCornflowerBlue
// smuggle something cDarkCyan = w.cDark + cCyan; // DarkCyan
// smuggle something cDarkElectricBlue = w.cDark + w.cElectric + cBlue; // DarkElectricBlue
// smuggle something cDarkGoldenrod = w.cDark + cGold + b.cen + b.cro + b.cd; // DarkGoldenrod
// smuggle something cDarkGreen = w.cDark + cGreen; // DarkGreen
// smuggle something cDarkGreenX11 = w.cDark + cGreen + b.cX + n.c11; // DarkGreenX11
// smuggle something cDarkJungleGreen = w.cDark + b.cJu + b.cng + b.cle + cGreen; // DarkJungleGreen
// smuggle something cDarkKhaki = w.cDark + w.cKhaki; // DarkKhaki
// smuggle something cDarkLava = w.cDark + b.cLa + b.cva; // DarkLava
// smuggle something cDarkLiver = w.cDark + w.cLiver; // DarkLiver
// smuggle something cDarkLiverHorses = w.cDark + w.cLiver + w.cHorses; // DarkLiverHorses
// smuggle something cDarkMagenta = w.cDark + cMagenta; // DarkMagenta
// smuggle something cDarkMossGreen = w.cDark + w.cMoss + cGreen; // DarkMossGreen
// smuggle something cDarkOliveGreen = w.cDark + cOlive + cGreen; // DarkOliveGreen
// smuggle something cDarkOrange = w.cDark + cOrange; // DarkOrange
// smuggle something cDarkOrchid = w.cDark + b.cOr + p.cchid; // DarkOrchid
// smuggle something cDarkPastelGreen = w.cDark + w.cPastel + cGreen; // DarkPastelGreen
// smuggle something cDarkPurple = w.cDark + cPurple; // DarkPurple
// smuggle something cDarkRed = w.cDark + cRed; // DarkRed
// smuggle something cDarkSalmon = w.cDark + b.cSa + p.clmon; // DarkSalmon
// smuggle something cDarkSeaGreen = w.cDark + w.cSea + cGreen; // DarkSeaGreen
// smuggle something cDarkSienna = w.cDark + cSienna; // DarkSienna
// smuggle something cDarkSkyBlue = w.cDark + w.cSky + cBlue; // DarkSkyBlue
// smuggle something cDarkSlateBlue = w.cDark + w.cSlate + cBlue; // DarkSlateBlue
// smuggle something cDarkSlateGray = w.cDark + w.cSlate + cGray; // DarkSlateGray
// smuggle something cDarkSpringGreen = w.cDark + w.cSpring + cGreen; // DarkSpringGreen
// smuggle something cDarkTurquoise = w.cDark + cTurquoise; // DarkTurquoise
// smuggle something cDarkViolet = w.cDark + cViolet; // DarkViolet
// smuggle something cDartmouthGreen = w.cDartmouth + cGreen; // DartmouthGreen
// smuggle something cDavysGrey = w.cDavys + cGrey; // DavysGrey
// smuggle something cDeepCerise = w.cDeep + w.cCerise; // DeepCerise
// smuggle something cDeepChampagne = w.cDeep + b.cCh + p.campagne; // DeepChampagne
// smuggle something cDeepChestnut = w.cDeep + w.cChestnut; // DeepChestnut
// smuggle something cDeepJungleGreen = w.cDeep + b.cJu + b.cng + b.cle + cGreen; // DeepJungleGreen
// smuggle something cDeepPink = w.cDeep + cPink; // DeepPink
// smuggle something cDeepSaffron = w.cDeep + b.cSa + p.cffron; // DeepSaffron
// smuggle something cDeepSkyBlue = w.cDeep + w.cSky + cBlue; // DeepSkyBlue
// smuggle something cDeepSpaceSparkle = w.cDeep + w.cSpace + w.cSparkle; // DeepSpaceSparkle
// smuggle something cDeepTaupe = w.cDeep + cTaupe; // DeepTaupe
// smuggle something cDenim = b.cDe + p.cnim; // Denim
// smuggle something cDenimBlue = b.cDe + p.cnim + cBlue; // DenimBlue
// smuggle something cDesert = b.cDe + p.csert; // Desert
// smuggle something cDesertSand = b.cDe + p.csert + g.cSan + b.cd; // DesertSand
// smuggle something cDimGray = w.cDim + cGray; // DimGray
// smuggle something cDodgerBlue = w.cDodger + cBlue; // DodgerBlue
// smuggle something cDogwoodRose = w.cDogwood + cRose; // DogwoodRose
// smuggle something cDukeBlue = w.cDuke + cBlue; // DukeBlue
// smuggle something cDutchWhite = w.cDutch + cWhite; // DutchWhite
// smuggle something cEarthYellow = w.cEarth + cYellow; // EarthYellow
// smuggle something cEbony = w.cEbony; // Ebony
// smuggle something cEcru = b.cEc + b.cru; // Ecru
// smuggle something cEerieBlack = w.cEerie + cBlack; // EerieBlack
// smuggle something cEggplant = w.cEgg + b.cpl + p.cant; // Eggplant
// smuggle something cEggshell = w.cEgg + w.cshell; // Eggshell
// smuggle something cEgyptianBlue = w.cEgypt + p.cian + cBlue; // EgyptianBlue
// smuggle something cElectricBlue = w.cElectric + cBlue; // ElectricBlue
// smuggle something cElectricGreen = w.cElectric + cGreen; // ElectricGreen
// smuggle something cElectricIndigo = w.cElectric + cIndigo; // ElectricIndigo
// smuggle something cElectricLime = w.cElectric + cLime; // ElectricLime
// smuggle something cElectricPurple = w.cElectric + cPurple; // ElectricPurple
// smuggle something cElectricViolet = w.cElectric + cViolet; // ElectricViolet
// smuggle something cEmerald = b.cEm + p.cerald; // Emerald
// smuggle something cEminence = b.cEm + p.cinen + b.cce; // Eminence
// smuggle something cEnglishGreen = w.cEnglish + cGreen; // EnglishGreen
// smuggle something cEnglishLavender = w.cEnglish + cLavender; // EnglishLavender
// smuggle something cEnglishRed = w.cEnglish + cRed; // EnglishRed
// smuggle something cEnglishVermillion = w.cEnglish + p.cVer + n.cmillion; // EnglishVermillion
// smuggle something cEnglishViolet = w.cEnglish + cViolet; // EnglishViolet
// smuggle something cErin = b.cEr + b.cin; // Erin
// smuggle something cEtonBlue = w.cEton + cBlue; // EtonBlue
// smuggle something cFallow = b.cFa + p.cllow; // Fallow
// smuggle something cFaluRed = w.cFalu + cRed; // FaluRed
// smuggle something cFandangoPink = cFandango + cPink; // FandangoPink
// smuggle something cFashionFuchsia = w.cFashion + cFuchsia; // FashionFuchsia
// smuggle something cFawn = b.cFa + b.cwn; // Fawn
// smuggle something cFeldgrau = b.cFe + b.cld + b.cgr + b.cau; // Feldgrau
// smuggle something cFernGreen = w.cFern + cGreen; // FernGreen
// smuggle something cFieldDrab = w.cField + cDrab; // FieldDrab
// smuggle something cFieryRose = w.cFiery + cRose; // FieryRose
// smuggle something cFirebrick = w.cFire + w.cbrick; // Firebrick
// smuggle something cFireEngineRed = w.cFire + w.cEngine + cRed; // FireEngineRed
// smuggle something cFireOpal = w.cFire + b.cOp + b.cal; // FireOpal
// smuggle something cFlame = b.cFl + p.came; // Flame
// smuggle something cFlax = b.cFl + b.cax; // Flax
// smuggle something cFlirt = b.cFl + b.cir + b.ct; // Flirt
// smuggle something cFloralWhite = w.cFloral + cWhite; // FloralWhite
// smuggle something cFluorescentBlue = w.cFluorescent + cBlue; // FluorescentBlue
// smuggle something cForestGreenCrayola = w.cForest + cGreen + w.cCrayola; // ForestGreenCrayola
// smuggle something cForestGreenTraditional = w.cForest + cGreen + w.cTraditional; // ForestGreenTraditional
// smuggle something cForestGreenWeb = w.cForest + cGreen + w.cWeb; // ForestGreenWeb
// smuggle something cFrenchBeige = w.cFrench + cBeige; // FrenchBeige
// smuggle something cFrenchBistre = w.cFrench + w.cBistre; // FrenchBistre
// smuggle something cFrenchBlue = w.cFrench + cBlue; // FrenchBlue
// smuggle something cFrenchFuchsia = w.cFrench + cFuchsia; // FrenchFuchsia
// smuggle something cFrenchLilac = w.cFrench + cLilac; // FrenchLilac
// smuggle something cFrenchLime = w.cFrench + cLime; // FrenchLime
// smuggle something cFrenchMauve = w.cFrench + cMauve; // FrenchMauve
// smuggle something cFrenchPink = w.cFrench + cPink; // FrenchPink
// smuggle something cFrenchRaspberry = w.cFrench + b.cRa + b.csp + w.cberry; // FrenchRaspberry
// smuggle something cFrenchRose = w.cFrench + cRose; // FrenchRose
// smuggle something cFrenchSkyBlue = w.cFrench + w.cSky + cBlue; // FrenchSkyBlue
// smuggle something cFrenchViolet = w.cFrench + cViolet; // FrenchViolet
// smuggle something cFrostbite = w.cFrost + w.cbite; // Frostbite
// smuggle something cFuchsiaCrayola = cFuchsia + w.cCrayola; // FuchsiaCrayola
// smuggle something cFuchsiaPurple = cFuchsia + cPurple; // FuchsiaPurple
// smuggle something cFuchsiaRose = cFuchsia + cRose; // FuchsiaRose
// smuggle something cFulvous = p.cFul + b.cvo + b.cus; // Fulvous
// smuggle something cFuzzyWuzzy = w.cFuzzy + w.cWuzzy; // FuzzyWuzzy
// smuggle something cGainsboro = w.cGain + b.csb + b.cor + b.co; // Gainsboro
// smuggle something cGamboge = b.cGa + b.cmb + b.cog + b.ce; // Gamboge
// smuggle something cGenericViridian = w.cGeneric + cViridian; // GenericViridian
// smuggle something cGhostWhite = w.cGhost + cWhite; // GhostWhite
// smuggle something cGlaucous = b.cGl + b.cau + b.cco + b.cus; // Glaucous
// smuggle something cGlossyGrape = w.cGlossy + b.cGr + p.cape; // GlossyGrape
// smuggle something cGOGreen = b.cGO + cGreen; // GOGreen
// smuggle something cGoldMetallic = cGold + w.cMetallic; // GoldMetallic
// smuggle something cGoldWebGolden = cGold + w.cWeb + cGold + b.cen; // GoldWebGolden
// smuggle something cGoldCrayola = cGold + w.cCrayola; // GoldCrayola
// smuggle something cGoldFusion = cGold + w.cFusion; // GoldFusion
// smuggle something cGoldenBrown = cGold + b.cen + cBrown; // GoldenBrown
// smuggle something cGoldenPoppy = cGold + b.cen + w.cPoppy; // GoldenPoppy
// smuggle something cGoldenYellow = cGold + b.cen + cYellow; // GoldenYellow
// smuggle something cGoldenrod = cGold + b.cen + b.cro + b.cd; // Goldenrod
// smuggle something cGraniteGray = w.cGranite + cGray; // GraniteGray
// smuggle something cGrannySmithApple = w.cGranny + w.cSmith + w.cApple; // GrannySmithApple
// smuggle something cGrayWeb = cGray + w.cWeb; // GrayWeb
// smuggle something cGrayX11 = cGray + b.cX + n.c11; // GrayX11
// smuggle something cGreenCrayola = cGreen + w.cCrayola; // GreenCrayola
// smuggle something cGreenWeb = cGreen + w.cWeb; // GreenWeb
// smuggle something cGreenMunsell = cGreen + w.cMunsell; // GreenMunsell
// smuggle something cGreenNCS = cGreen + p.cNCS; // GreenNCS
// smuggle something cGreenPantone = cGreen + w.cPantone; // GreenPantone
// smuggle something cGreenPigment = cGreen + w.cPigment; // GreenPigment
// smuggle something cGreenRYB = cGreen + p.cRYB; // GreenRYB
// smuggle something cGreenBlue = cGreen + cBlue; // GreenBlue
// smuggle something cGreenBlueCrayola = cGreen + cBlue + w.cCrayola; // GreenBlueCrayola
// smuggle something cGreenCyan = cGreen + cCyan; // GreenCyan
// smuggle something cGreenLizard = cGreen + w.cLizard; // GreenLizard
// smuggle something cGreenSheen = cGreen + w.cSheen; // GreenSheen
// smuggle something cGreenYellow = cGreen + cYellow; // GreenYellow
// smuggle something cGreenYellowCrayola = cGreen + cYellow + w.cCrayola; // GreenYellowCrayola
// smuggle something cGrullo = b.cGr + p.cull + b.co; // Grullo
// smuggle something cGunmetal = w.cGun + w.cmeta + b.cl; // Gunmetal
// smuggle something cHanBlue = b.cHa + b.cnB + p.clue; // HanBlue
// smuggle something cHanPurple = b.cHa + b.cnP + p.curple; // HanPurple
// smuggle something cHansaYellow = b.cHa + b.cns + b.caY + p.cellow; // HansaYellow
// smuggle something cHarlequin = b.cHa + b.crl + p.cequ + b.cin; // Harlequin
// smuggle something cHarvestGold = w.cHarvest + cGold; // HarvestGold
// smuggle something cHeatWave = w.cHeat + w.cWave; // HeatWave
// smuggle something cHeliotrope = b.cHe + b.cli + b.cot + b.cro + b.cpe; // Heliotrope
// smuggle something cHeliotropeGray = b.cHe + b.cli + b.cot + b.cro + b.cpe + cGray; // HeliotropeGray
// smuggle something cHollywoodCerise = w.cHollywood + w.cCerise; // HollywoodCerise
// smuggle something cHoneydew = w.cHoney + w.cdew; // Honeydew
// smuggle something cHonoluluBlue = w.cHonolulu + cBlue; // HonoluluBlue
// smuggle something cHookersGreen = w.cHookers + cGreen; // HookersGreen
// smuggle something cHotMagenta = w.cHot + cMagenta; // HotMagenta
// smuggle something cHotPink = w.cHot + cPink; // HotPink
// smuggle something cHunterGreen = w.cHunter + cGreen; // HunterGreen
// smuggle something cIceberg = w.cIce + p.cber + b.cg; // Iceberg
// smuggle something cIcterine = b.cIc + p.cter + p.cine; // Icterine
// smuggle something cIlluminatingEmerald = w.cIlluminating + b.cEm + p.cerald; // IlluminatingEmerald
// smuggle something cImperialRed = w.cImperial + cRed; // ImperialRed
// smuggle something cInchworm = b.cIn + b.cch + w.cworm; // Inchworm
// smuggle something cIndependence = w.cIndependence; // Independence
// smuggle something cIndiaGreen = g.cIndia + cGreen; // IndiaGreen
// smuggle something cIndianRed = w.cIndian + cRed; // IndianRed
// smuggle something cIndianYellow = w.cIndian + cYellow; // IndianYellow
// smuggle something cIndigoDye = cIndigo + w.cDye; // IndigoDye
// smuggle something cInternationalOrangeAerospace = w.cInternational + cOrange + w.cAerospace; // InternationalOrangeAerospace
// smuggle something cInternationalOrangeEngineering = w.cInternational + cOrange + w.cEngineering; // InternationalOrangeEngineering
// smuggle something cInternationalOrangeGoldenGateBridge = w.cInternational + cOrange + cGold + b.cen + w.cGate + w.cBridge; // InternationalOrangeGoldenGateBridge
// smuggle something cIris = b.cIr + b.cis; // Iris
// smuggle something cIrresistible = b.cIr + p.cres + p.cist + b.cib + b.cle; // Irresistible
// smuggle something cIsabelline = b.cIs + b.cab + p.cell + p.cine; // Isabelline
// smuggle something cItalianSkyBlue = w.cItalian + w.cSky + cBlue; // ItalianSkyBlue
// smuggle something cIvory = b.cIv + b.cor + b.cy; // Ivory
// smuggle something cJade = b.cJa + b.cde; // Jade
// smuggle something cJapaneseCarmine = w.cJapanese + w.cCarmine; // JapaneseCarmine
// smuggle something cJapaneseViolet = w.cJapanese + cViolet; // JapaneseViolet
// smuggle something cJasmine = b.cJa + b.csm + p.cine; // Jasmine
// smuggle something cJazzberryJam = w.cJazz + w.cberry + w.cJam; // JazzberryJam
// smuggle something cJet = b.cJe + b.ct; // Jet
// smuggle something cJonquil = b.cJo + b.cnq + b.cui + b.cl; // Jonquil
// smuggle something cJuneBud = g.cJune + w.cBud; // JuneBud
// smuggle something cJungleGreen = b.cJu + b.cng + b.cle + cGreen; // JungleGreen
// smuggle something cKellyGreen = w.cKelly + cGreen; // KellyGreen
// smuggle something cKeppel = b.cKe + b.cpp + b.cel; // Keppel
// smuggle something cKeyLime = w.cKey + cLime; // KeyLime
// smuggle something cKhakiWeb = w.cKhaki + w.cWeb; // KhakiWeb
// smuggle something cKhakiX11 = w.cKhaki + b.cX + n.c11; // KhakiX11
// smuggle something cKobe = b.cKo + b.cbe; // Kobe
// smuggle something cKobi = b.cKo + b.cbi; // Kobi
// smuggle something cKobicha = b.cKo + b.cbi + p.ccha; // Kobicha
// smuggle something cKombuGreen = w.cKombu + cGreen; // KombuGreen
// smuggle something cKSUPurple = b.cKS + b.cUP + p.curple; // KSUPurple
// smuggle something cLanguidLavender = w.cLanguid + cLavender; // LanguidLavender
// smuggle something cLapisLazuli = w.cLapis + w.cLazuli; // LapisLazuli
// smuggle something cLaserLemon = w.cLaser + cLemon; // LaserLemon
// smuggle something cLaurelGreen = w.cLaurel + cGreen; // LaurelGreen
// smuggle something cLava = b.cLa + b.cva; // Lava
// smuggle something cLavenderFloral = cLavender + w.cFloral; // LavenderFloral
// smuggle something cLavenderWeb = cLavender + w.cWeb; // LavenderWeb
// smuggle something cLavenderBlue = cLavender + cBlue; // LavenderBlue
// smuggle something cLavenderBlush = cLavender + w.cBlush; // LavenderBlush
// smuggle something cLavenderGray = cLavender + cGray; // LavenderGray
// smuggle something cLawnGreen = w.cLawn + cGreen; // LawnGreen
// smuggle something cLemonChiffon = cLemon + g.cChi + b.cff + b.con; // LemonChiffon
// smuggle something cLemonCurry = cLemon + w.cCurry; // LemonCurry
// smuggle something cLemonGlacier = cLemon + w.cGlacier; // LemonGlacier
// smuggle something cLemonMeringue = cLemon + w.cMeringue; // LemonMeringue
// smuggle something cLemonYellow = cLemon + cYellow; // LemonYellow
// smuggle something cLemonYellowCrayola = cLemon + cYellow + w.cCrayola; // LemonYellowCrayola
// smuggle something cLiberty = b.cLi + p.cber + b.cty; // Liberty
// smuggle something cLightBlue = w.cLight + cBlue; // LightBlue
// smuggle something cLightCoral = w.cLight + w.cCoral; // LightCoral
// smuggle something cLightCornflowerBlue = w.cLight + p.cCor + b.cnf + w.clower + cBlue; // LightCornflowerBlue
// smuggle something cLightCyan = w.cLight + cCyan; // LightCyan
// smuggle something cLightFrenchBeige = w.cLight + w.cFrench + cBeige; // LightFrenchBeige
// smuggle something cLightGoldenrodYellow = w.cLight + cGold + b.cen + b.cro + b.cd + cYellow; // LightGoldenrodYellow
// smuggle something cLightGray = w.cLight + cGray; // LightGray
// smuggle something cLightGreen = w.cLight + cGreen; // LightGreen
// smuggle something cLightOrange = w.cLight + cOrange; // LightOrange
// smuggle something cLightPeriwinkle = w.cLight + p.cPer + b.ciw + p.cinkle; // LightPeriwinkle
// smuggle something cLightPink = w.cLight + cPink; // LightPink
// smuggle something cLightSalmon = w.cLight + b.cSa + p.clmon; // LightSalmon
// smuggle something cLightSeaGreen = w.cLight + w.cSea + cGreen; // LightSeaGreen
// smuggle something cLightSkyBlue = w.cLight + w.cSky + cBlue; // LightSkyBlue
// smuggle something cLightSlateGray = w.cLight + w.cSlate + cGray; // LightSlateGray
// smuggle something cLightSteelBlue = w.cLight + w.cSteel + cBlue; // LightSteelBlue
// smuggle something cLightYellow = w.cLight + cYellow; // LightYellow
// smuggle something cLilacLuster = cLilac + w.cLuster; // LilacLuster
// smuggle something cLimeColorWheel = cLime + w.cColor + w.cWheel; // LimeColorWheel
// smuggle something cLimeWeb = cLime + w.cWeb; // LimeWeb
// smuggle something cLimeGreen = cLime + cGreen; // LimeGreen
// smuggle something cLincolnGreen = w.cLincoln + cGreen; // LincolnGreen
// smuggle something cLinen = w.cLine + b.cn; // Linen
// smuggle something cLion = b.cLi + b.con; // Lion
// smuggle something cLiseranPurple = w.cLiseran + cPurple; // LiseranPurple
// smuggle something cLittleBoyBlue = w.cLittle + w.cBoy + cBlue; // LittleBoyBlue
// smuggle something cLiver = w.cLiver; // Liver
// smuggle something cLiverDogs = w.cLiver + w.cDogs; // LiverDogs
// smuggle something cLiverOrgan = w.cLiver + w.cOrgan; // LiverOrgan
// smuggle something cLiverChestnut = w.cLiver + w.cChestnut; // LiverChestnut
// smuggle something cLivid = b.cLi + p.cvid; // Livid
// smuggle something cMacaroniAndCheese = w.cMacaroni + w.cAnd + w.cCheese; // MacaroniAndCheese
// smuggle something cMadderLake = w.cMadder + w.cLake; // MadderLake
// smuggle something cMagentaCrayola = cMagenta + w.cCrayola; // MagentaCrayola
// smuggle something cMagentaDye = cMagenta + w.cDye; // MagentaDye
// smuggle something cMagentaPantone = cMagenta + w.cPantone; // MagentaPantone
// smuggle something cMagentaProcess = cMagenta + w.cProcess; // MagentaProcess
// smuggle something cMagentaHaze = cMagenta + w.cHaze; // MagentaHaze
// smuggle something cMagicMint = w.cMagic + g.cMin + b.ct; // MagicMint
// smuggle something cMagnolia = b.cMa + b.cgn + b.col + b.cia; // Magnolia
// smuggle something cMahogany = b.cMa + b.cho + p.cgan + b.cy; // Mahogany
// smuggle something cMaize = b.cMa + p.cize; // Maize
// smuggle something cMaizeCrayola = b.cMa + p.cize + w.cCrayola; // MaizeCrayola
// smuggle something cMajorelleBlue = w.cMajorelle + cBlue; // MajorelleBlue
// smuggle something cMalachite = b.cMa + p.clac + p.chite; // Malachite
// smuggle something cManatee = w.cMan + p.cate + b.ce; // Manatee
// smuggle something cMandarin = w.cMan + b.cda + p.crin; // Mandarin
// smuggle something cMango = w.cMan + b.cgo; // Mango
// smuggle something cMangoTango = w.cMan + b.cgo + g.cTango; // MangoTango
// smuggle something cMantis = w.cMan + p.ctis; // Mantis
// smuggle something cMardiGras = b.cMa + b.crd + b.ciG + p.cras; // MardiGras
// smuggle something cMarigold = b.cMa + b.cri + cgold; // Marigold
// smuggle something cMaroonCrayola = cMaroon + w.cCrayola; // MaroonCrayola
// smuggle something cMaroonWeb = cMaroon + w.cWeb; // MaroonWeb
// smuggle something cMaroonX11 = cMaroon + b.cX + n.c11; // MaroonX11
// smuggle something cMauveTaupe = cMauve + cTaupe; // MauveTaupe
// smuggle something cMauvelous = cMauve + b.clo + b.cus; // Mauvelous
// smuggle something cMaximumBlue = w.cMaximum + cBlue; // MaximumBlue
// smuggle something cMaximumBlueGreen = w.cMaximum + cBlue + cGreen; // MaximumBlueGreen
// smuggle something cMaximumBluePurple = w.cMaximum + cBlue + cPurple; // MaximumBluePurple
// smuggle something cMaximumGreen = w.cMaximum + cGreen; // MaximumGreen
// smuggle something cMaximumGreenYellow = w.cMaximum + cGreen + cYellow; // MaximumGreenYellow
// smuggle something cMaximumPurple = w.cMaximum + cPurple; // MaximumPurple
// smuggle something cMaximumRed = w.cMaximum + cRed; // MaximumRed
// smuggle something cMaximumRedPurple = w.cMaximum + cRed + cPurple; // MaximumRedPurple
// smuggle something cMaximumYellow = w.cMaximum + cYellow; // MaximumYellow
// smuggle something cMaximumYellowRed = w.cMaximum + cYellow + cRed; // MaximumYellowRed
// smuggle something cMayGreen = g.cMay + cGreen; // MayGreen
// smuggle something cMayaBlue = w.cMaya + cBlue; // MayaBlue
// smuggle something cMediumAquamarine = w.cMedium + cAqua + p.cmar + p.cine; // MediumAquamarine
// smuggle something cMediumBlue = w.cMedium + cBlue; // MediumBlue
// smuggle something cMediumCandyAppleRed = w.cMedium + w.cCan + b.cdy + w.cApple + cRed; // MediumCandyAppleRed
// smuggle something cMediumCarmine = w.cMedium + w.cCarmine; // MediumCarmine
// smuggle something cMediumChampagne = w.cMedium + b.cCh + p.campagne; // MediumChampagne
// smuggle something cMediumOrchid = w.cMedium + b.cOr + p.cchid; // MediumOrchid
// smuggle something cMediumPurple = w.cMedium + cPurple; // MediumPurple
// smuggle something cMediumSeaGreen = w.cMedium + w.cSea + cGreen; // MediumSeaGreen
// smuggle something cMediumSlateBlue = w.cMedium + w.cSlate + cBlue; // MediumSlateBlue
// smuggle something cMediumSpringGreen = w.cMedium + w.cSpring + cGreen; // MediumSpringGreen
// smuggle something cMediumTurquoise = w.cMedium + cTurquoise; // MediumTurquoise
// smuggle something cMediumVioletRed = w.cMedium + cViolet + cRed; // MediumVioletRed
// smuggle something cMellowApricot = w.cMellow + w.cApricot; // MellowApricot
// smuggle something cMellowYellow = w.cMellow + cYellow; // MellowYellow
// smuggle something cMelon = b.cMe + p.clon; // Melon
// smuggle something cMetallicGold = w.cMetallic + cGold; // MetallicGold
// smuggle something cMetallicSeaweed = w.cMetallic + w.cSeaweed; // MetallicSeaweed
// smuggle something cMetallicSunburst = w.cMetallic + w.cSunburst; // MetallicSunburst
// smuggle something cMexicanPink = w.cMexican + cPink; // MexicanPink
// smuggle something cMiddleBlue = w.cMiddle + cBlue; // MiddleBlue
// smuggle something cMiddleBlueGreen = w.cMiddle + cBlue + cGreen; // MiddleBlueGreen
// smuggle something cMiddleBluePurple = w.cMiddle + cBlue + cPurple; // MiddleBluePurple
// smuggle something cMiddleGrey = w.cMiddle + cGrey; // MiddleGrey
// smuggle something cMiddleGreen = w.cMiddle + cGreen; // MiddleGreen
// smuggle something cMiddleGreenYellow = w.cMiddle + cGreen + cYellow; // MiddleGreenYellow
// smuggle something cMiddlePurple = w.cMiddle + cPurple; // MiddlePurple
// smuggle something cMiddleRed = w.cMiddle + cRed; // MiddleRed
// smuggle something cMiddleRedPurple = w.cMiddle + cRed + cPurple; // MiddleRedPurple
// smuggle something cMiddleYellow = w.cMiddle + cYellow; // MiddleYellow
// smuggle something cMiddleYellowRed = w.cMiddle + cYellow + cRed; // MiddleYellowRed
// smuggle something cMidnight = b.cMi + b.cdn + p.cight; // Midnight
// smuggle something cMidnightBlue = b.cMi + b.cdn + p.cight + cBlue; // MidnightBlue
// smuggle something cMidnightGreen = b.cMi + b.cdn + p.cight + cGreen; // MidnightGreen
// smuggle something cMikadoYellow = w.cMikado + cYellow; // MikadoYellow
// smuggle something cMimiPink = w.cMimi + cPink; // MimiPink
// smuggle something cMindaro = g.cMin + b.cda + b.cro; // Mindaro
// smuggle something cMing = g.cMin + b.cg; // Ming
// smuggle something cMinionYellow = w.cMinion + cYellow; // MinionYellow
// smuggle something cMint = g.cMin + b.ct; // Mint
// smuggle something cMintCream = g.cMin + b.ctC + p.cream; // MintCream
// smuggle something cMintGreen = g.cMin + b.ctG + p.creen; // MintGreen
// smuggle something cMistyMoss = w.cMisty + w.cMoss; // MistyMoss
// smuggle something cMistyRose = w.cMisty + cRose; // MistyRose
// smuggle something cModeBeige = w.cMode + cBeige; // ModeBeige
// smuggle something cMorningBlue = w.cMorning + cBlue; // MorningBlue
// smuggle something cMossGreen = w.cMoss + cGreen; // MossGreen
// smuggle something cMountainMeadow = w.cMountain + w.cMeadow; // MountainMeadow
// smuggle something cMountbattenPink = w.cMount + w.cbatten + cPink; // MountbattenPink
// smuggle something cMSUGreen = b.cMS + b.cUG + p.creen; // MSUGreen
// smuggle something cMulberry = w.cMulberry; // Mulberry
// smuggle something cMulberryCrayola = w.cMulberry + w.cCrayola; // MulberryCrayola
// smuggle something cMustard = w.cMust + p.card; // Mustard
// smuggle something cMyrtleGreen = w.cMyrtle + cGreen; // MyrtleGreen
// smuggle something cMystic = b.cMy + p.cstic; // Mystic
// smuggle something cMysticMaroon = b.cMy + p.cstic + cMaroon; // MysticMaroon
// smuggle something cNadeshikoPink = w.cNadeshiko + cPink; // NadeshikoPink
// smuggle something cNaplesYellow = w.cNaples + cYellow; // NaplesYellow
// smuggle something cNavajoWhite = w.cNavajo + cWhite; // NavajoWhite
// smuggle something cNavyBlue = w.cNavy + cBlue; // NavyBlue
// smuggle something cNavyBlueCrayola = w.cNavy + cBlue + w.cCrayola; // NavyBlueCrayola
// smuggle something cNeonBlue = w.cNeon + cBlue; // NeonBlue
// smuggle something cNeonCarrot = w.cNeon + w.cCarrot; // NeonCarrot
// smuggle something cNeonGreen = w.cNeon + cGreen; // NeonGreen
// smuggle something cNeonFuchsia = w.cNeon + cFuchsia; // NeonFuchsia
// smuggle something cNewYorkPink = w.cNew + w.cYork + cPink; // NewYorkPink
// smuggle something cNickel = b.cNi + b.cc + p.ckel; // Nickel
// smuggle something cNonPhotoBlue = p.cNon + w.cPhoto + cBlue; // NonPhotoBlue
// smuggle something cNyanza = b.cNy + b.can + b.cza; // Nyanza
// smuggle something cOceanBlue = w.cOcean + cBlue; // OceanBlue
// smuggle something cOceanGreen = w.cOcean + cGreen; // OceanGreen
// smuggle something cOchre = b.cOc + b.chr + b.ce; // Ochre
// smuggle something cOldBurgundy = w.cOld + b.cBu + p.crgundy; // OldBurgundy
// smuggle something cOldGold = w.cOld + cGold; // OldGold
// smuggle something cOldLace = w.cOld + w.cLace; // OldLace
// smuggle something cOldLavender = w.cOld + cLavender; // OldLavender
// smuggle something cOldMauve = w.cOld + cMauve; // OldMauve
// smuggle something cOldRose = w.cOld + cRose; // OldRose
// smuggle something cOldSilver = w.cOld + cSilver; // OldSilver
// smuggle something cOliveDrab3 = cOlive + cDrab + n.c3; // OliveDrab3
// smuggle something cOliveDrab7 = cOlive + cDrab + n.c7; // OliveDrab7
// smuggle something cOliveGreen = cOlive + cGreen; // OliveGreen
// smuggle something cOlivine = b.cOl + b.civ + p.cine; // Olivine
// smuggle something cOnyx = b.cOn + b.cyx; // Onyx
// smuggle something cOpal = b.cOp + b.cal; // Opal
// smuggle something cOperaMauve = w.cOpera + cMauve; // OperaMauve
// smuggle something cOrangeCrayola = cOrange + w.cCrayola; // OrangeCrayola
// smuggle something cOrangePantone = cOrange + w.cPantone; // OrangePantone
// smuggle something cOrangeWeb = cOrange + w.cWeb; // OrangeWeb
// smuggle something cOrangePeel = cOrange + w.cPeel; // OrangePeel
// smuggle something cOrangeRed = cOrange + cRed; // OrangeRed
// smuggle something cOrangeRedCrayola = cOrange + cRed + w.cCrayola; // OrangeRedCrayola
// smuggle something cOrangeSoda = cOrange + w.cSoda; // OrangeSoda
// smuggle something cOrangeYellow = cOrange + cYellow; // OrangeYellow
// smuggle something cOrangeYellowCrayola = cOrange + cYellow + w.cCrayola; // OrangeYellowCrayola
// smuggle something cOrchid = b.cOr + p.cchid; // Orchid
// smuggle something cOrchidPink = b.cOr + p.cchid + cPink; // OrchidPink
// smuggle something cOrchidCrayola = b.cOr + p.cchid + w.cCrayola; // OrchidCrayola
// smuggle something cOuterSpaceCrayola = w.cOuter + w.cSpace + w.cCrayola; // OuterSpaceCrayola
// smuggle something cOutrageousOrange = w.cOutrageous + cOrange; // OutrageousOrange
// smuggle something cOxBlood = b.cOx + w.cBlood; // OxBlood
// smuggle something cOxfordBlue = w.cOxford + cBlue; // OxfordBlue
// smuggle something cOUCrimsonRed = b.cOU + cCrimson + cRed; // OUCrimsonRed
// smuggle something cPacificBlue = w.cPacific + cBlue; // PacificBlue
// smuggle something cPakistanGreen = w.cPakistan + cGreen; // PakistanGreen
// smuggle something cPalatinatePurple = w.cPalatinate + cPurple; // PalatinatePurple
// smuggle something cPaleAqua = w.cPale + cAqua; // PaleAqua
// smuggle something cPaleCerulean = w.cPale + b.cCe + p.crulean; // PaleCerulean
// smuggle something cPalePink = w.cPale + cPink; // PalePink
// smuggle something cPalePurplePantone = w.cPale + cPurple + w.cPantone; // PalePurplePantone
// smuggle something cPaleSilver = w.cPale + cSilver; // PaleSilver
// smuggle something cPaleSpringBud = w.cPale + w.cSpring + w.cBud; // PaleSpringBud
// smuggle something cPansyPurple = w.cPansy + cPurple; // PansyPurple
// smuggle something cPaoloVeroneseGreen = w.cPaolo + w.cVeronese + cGreen; // PaoloVeroneseGreen
// smuggle something cPapayaWhip = w.cPapaya + w.cWhip; // PapayaWhip
// smuggle something cParadisePink = w.cParadise + cPink; // ParadisePink
// smuggle something cParisGreen = w.cParis + cGreen; // ParisGreen
// smuggle something cPastelPink = w.cPastel + cPink; // PastelPink
// smuggle something cPatriarch = w.cPat + p.cria + p.crch; // Patriarch
// smuggle something cPaynesGrey = w.cPaynes + cGrey; // PaynesGrey
// smuggle something cPeachCrayola = cPeach + w.cCrayola; // PeachCrayola
// smuggle something cPeachPuff = cPeach + w.cPuff; // PeachPuff
// smuggle something cPear = b.cPe + b.car; // Pear
// smuggle something cPearlyPurple = w.cPearly + cPurple; // PearlyPurple
// smuggle something cPeriwinkle = p.cPer + b.ciw + p.cinkle; // Periwinkle
// smuggle something cPeriwinkleCrayola = p.cPer + b.ciw + p.cinkle + w.cCrayola; // PeriwinkleCrayola
// smuggle something cPermanentGeraniumLake = w.cPermanent + w.cGeranium + w.cLake; // PermanentGeraniumLake
// smuggle something cPersianBlue = w.cPersian + cBlue; // PersianBlue
// smuggle something cPersianGreen = w.cPersian + cGreen; // PersianGreen
// smuggle something cPersianIndigo = w.cPersian + cIndigo; // PersianIndigo
// smuggle something cPersianOrange = w.cPersian + cOrange; // PersianOrange
// smuggle something cPersianPink = w.cPersian + cPink; // PersianPink
// smuggle something cPersianPlum = w.cPersian + cPlum; // PersianPlum
// smuggle something cPersianRed = w.cPersian + cRed; // PersianRed
// smuggle something cPersianRose = w.cPersian + cRose; // PersianRose
// smuggle something cPersimmon = p.cPer + p.csim + p.cmon; // Persimmon
// smuggle something cPewterBlue = w.cPewter + cBlue; // PewterBlue
// smuggle something cPhlox = b.cPh + b.clo + b.cx; // Phlox
// smuggle something cPhthaloBlue = w.cPhthalo + cBlue; // PhthaloBlue
// smuggle something cPhthaloGreen = w.cPhthalo + cGreen; // PhthaloGreen
// smuggle something cPicoteeBlue = w.cPicotee + cBlue; // PicoteeBlue
// smuggle something cPictorialCarmine = w.cPictorial + w.cCarmine; // PictorialCarmine
// smuggle something cPiggyPink = w.cPiggy + cPink; // PiggyPink
// smuggle something cPineGreen = w.cPine + cGreen; // PineGreen
// smuggle something cPineTree = w.cPine + w.cTree; // PineTree
// smuggle something cPinkPantone = cPink + w.cPantone; // PinkPantone
// smuggle something cPinkFlamingo = cPink + w.cFlamingo; // PinkFlamingo
// smuggle something cPinkLace = cPink + w.cLace; // PinkLace
// smuggle something cPinkLavender = cPink + cLavender; // PinkLavender
// smuggle something cPinkSherbet = cPink + w.cSherbet; // PinkSherbet
// smuggle something cPistachio = b.cPi + b.cst + p.cach + b.cio; // Pistachio
// smuggle something cPlumWeb = cPlum + w.cWeb; // PlumWeb
// smuggle something cPlumpPurple = w.cPlump + cPurple; // PlumpPurple
// smuggle something cPolishedPine = w.cPolished + w.cPine; // PolishedPine
// smuggle something cPompAndPower = w.cPomp + w.cAnd + w.cPower; // PompAndPower
// smuggle something cPopstar = w.cPop + p.cstar; // Popstar
// smuggle something cPortlandOrange = w.cPortland + cOrange; // PortlandOrange
// smuggle something cPowderBlue = w.cPowder + cBlue; // PowderBlue
// smuggle something cPrincetonOrange = w.cPrinceton + cOrange; // PrincetonOrange
// smuggle something cPrune = b.cPr + p.cune; // Prune
// smuggle something cPrussianBlue = w.cPrussian + cBlue; // PrussianBlue
// smuggle something cPsychedelicPurple = w.cPsychedelic + cPurple; // PsychedelicPurple
// smuggle something cPuce = b.cPu + b.cce; // Puce
// smuggle something cPullmanBrown = w.cPullman + cBrown; // PullmanBrown
// smuggle something cPumpkin = b.cPu + b.cmp + p.ckin; // Pumpkin
// smuggle something cPurpleWeb = cPurple + w.cWeb; // PurpleWeb
// smuggle something cPurpleMunsell = cPurple + w.cMunsell; // PurpleMunsell
// smuggle something cPurpleX11 = cPurple + b.cX + n.c11; // PurpleX11
// smuggle something cPurpleMountainMajesty = cPurple + w.cMountain + w.cMajesty; // PurpleMountainMajesty
// smuggle something cPurpleNavy = cPurple + w.cNavy; // PurpleNavy
// smuggle something cPurplePizzazz = cPurple + w.cPizzazz; // PurplePizzazz
// smuggle something cPurplePlum = cPurple + cPlum; // PurplePlum
// smuggle something cPurpureus = b.cPu + b.crp + p.cure + b.cus; // Purpureus
// smuggle something cQueenBlue = w.cQueen + cBlue; // QueenBlue
// smuggle something cQueenPink = w.cQueen + cPink; // QueenPink
// smuggle something cQuickSilver = w.cQuick + cSilver; // QuickSilver
// smuggle something cQuinacridoneMagenta = w.cQuinacridone + cMagenta; // QuinacridoneMagenta
// smuggle something cRadicalRed = w.cRadical + cRed; // RadicalRed
// smuggle something cRaisinBlack = w.cRaisin + cBlack; // RaisinBlack
// smuggle something cRajah = b.cRa + b.cja + b.ch; // Rajah
// smuggle something cRaspberry = b.cRa + b.csp + w.cberry; // Raspberry
// smuggle something cRaspberryGlace = b.cRa + b.csp + w.cberry + w.cGlace; // RaspberryGlace
// smuggle something cRaspberryRose = b.cRa + b.csp + w.cberry + cRose; // RaspberryRose
// smuggle something cRawSienna = w.cRaw + cSienna; // RawSienna
// smuggle something cRawUmber = w.cRaw + cUmber; // RawUmber
// smuggle something cRazzleDazzleRose = w.cRazzle + w.cDazzle + cRose; // RazzleDazzleRose
// smuggle something cRazzmatazz = b.cRa + b.czz + w.cmat + p.cazz; // Razzmatazz
// smuggle something cRazzmicBerry = w.cRazzmic + w.cBerry; // RazzmicBerry
// smuggle something cRebeccaPurple = w.cRebecca + cPurple; // RebeccaPurple
// smuggle something cRedCrayola = cRed + w.cCrayola; // RedCrayola
// smuggle something cRedMunsell = cRed + w.cMunsell; // RedMunsell
// smuggle something cRedNCS = cRed + p.cNCS; // RedNCS
// smuggle something cRedPantone = cRed + w.cPantone; // RedPantone
// smuggle something cRedPigment = cRed + w.cPigment; // RedPigment
// smuggle something cRedRYB = cRed + p.cRYB; // RedRYB
// smuggle something cRedOrange = cRed + cOrange; // RedOrange
// smuggle something cRedOrangeCrayola = cRed + cOrange + w.cCrayola; // RedOrangeCrayola
// smuggle something cRedOrangeColorWheel = cRed + cOrange + w.cColor + w.cWheel; // RedOrangeColorWheel
// smuggle something cRedPurple = cRed + cPurple; // RedPurple
// smuggle something cRedSalsa = cRed + w.cSalsa; // RedSalsa
// smuggle something cRedViolet = cRed + cViolet; // RedViolet
// smuggle something cRedVioletCrayola = cRed + cViolet + w.cCrayola; // RedVioletCrayola
// smuggle something cRedVioletColorWheel = cRed + cViolet + w.cColor + w.cWheel; // RedVioletColorWheel
// smuggle something cRedwood = cRed + w.cwood; // Redwood
// smuggle something cResolutionBlue = w.cResolution + cBlue; // ResolutionBlue
// smuggle something cRhythm = b.cRh + b.cyt + b.chm; // Rhythm
// smuggle something cRichBlack = w.cRich + cBlack; // RichBlack
// smuggle something cRichBlackFOGRA29 = w.cRich + cBlack + b.cFO + b.cGR + b.cA + n.c29; // RichBlackFOGRA29
// smuggle something cRichBlackFOGRA39 = w.cRich + cBlack + b.cFO + b.cGR + b.cA + n.c39; // RichBlackFOGRA39
// smuggle something cRifleGreen = w.cRifle + cGreen; // RifleGreen
// smuggle something cRobinEggBlue = w.cRobin + w.cEgg + cBlue; // RobinEggBlue
// smuggle something cRocketMetallic = w.cRocket + w.cMetallic; // RocketMetallic
// smuggle something cRomanSilver = w.cRoman + cSilver; // RomanSilver
// smuggle something cRoseBonbon = cRose + w.cBonbon; // RoseBonbon
// smuggle something cRoseDust = cRose + w.cDust; // RoseDust
// smuggle something cRoseEbony = cRose + w.cEbony; // RoseEbony
// smuggle something cRoseMadder = cRose + w.cMadder; // RoseMadder
// smuggle something cRosePink = cRose + cPink; // RosePink
// smuggle something cRoseQuartz = cRose + w.cQuartz; // RoseQuartz
// smuggle something cRoseRed = cRose + cRed; // RoseRed
// smuggle something cRoseTaupe = cRose + cTaupe; // RoseTaupe
// smuggle something cRoseVale = cRose + w.cVale; // RoseVale
// smuggle something cRosewood = cRose + w.cwood; // Rosewood
// smuggle something cRossoCorsa = w.cRosso + w.cCorsa; // RossoCorsa
// smuggle something cRosyBrown = w.cRosy + cBrown; // RosyBrown
// smuggle something cRoyalBlueDark = w.cRoyal + cBlue + w.cDark; // RoyalBlueDark
// smuggle something cRoyalBlueLight = w.cRoyal + cBlue + w.cLight; // RoyalBlueLight
// smuggle something cRoyalPurple = w.cRoyal + cPurple; // RoyalPurple
// smuggle something cRoyalYellow = w.cRoyal + cYellow; // RoyalYellow
// smuggle something cRuber = w.cRub + b.cer; // Ruber
// smuggle something cRubineRed = w.cRubine + cRed; // RubineRed
// smuggle something cRubyRed = cRuby + cRed; // RubyRed
// smuggle something cRufous = b.cRu + b.cfo + b.cus; // Rufous
// smuggle something cRusset = b.cRu + b.css + b.cet; // Russet
// smuggle something cRussianGreen = w.cRussian + cGreen; // RussianGreen
// smuggle something cRussianViolet = w.cRussian + cViolet; // RussianViolet
// smuggle something cRust = b.cRu + b.cst; // Rust
// smuggle something cRustyRed = b.cRu + p.csty + cRed; // RustyRed
// smuggle something cSacramentoStateGreen = w.cSacramento + w.cState + cGreen; // SacramentoStateGreen
// smuggle something cSaddleBrown = w.cSaddle + cBrown; // SaddleBrown
// smuggle something cSafetyOrange = w.cSafety + cOrange; // SafetyOrange
// smuggle something cBlazeOrange = w.cBlaze + cOrange; // BlazeOrange
// smuggle something cSafetyYellow = w.cSafety + cYellow; // SafetyYellow
// smuggle something cSaffron = b.cSa + p.cffron; // Saffron
// smuggle something cSage = b.cSa + b.cge; // Sage
// smuggle something cStPatricksBlue = b.cSt + w.cPatricks + cBlue; // StPatricksBlue
// smuggle something cSalmon = b.cSa + p.clmon; // Salmon
// smuggle something cSalmonPink = b.cSa + p.clmon + cPink; // SalmonPink
// smuggle something cSand = g.cSan + b.cd; // Sand
// smuggle something cSandDune = g.cSan + b.cdD + p.cune; // SandDune
// smuggle something cSandyBrown = w.cSandy + cBrown; // SandyBrown
// smuggle something cSapGreen = w.cSap + cGreen; // SapGreen
// smuggle something cSapphireBlue = cSapphire + cBlue; // SapphireBlue
// smuggle something cSapphireCrayola = cSapphire + w.cCrayola; // SapphireCrayola
// smuggle something cSatinSheenGold = w.cSatin + w.cSheen + cGold; // SatinSheenGold
// smuggle something cSchaussPink = w.cSchauss + cPink; // SchaussPink
// smuggle something cSchoolBusYellow = w.cSchool + w.cBus + cYellow; // SchoolBusYellow
// smuggle something cScreaminGreen = w.cScreamin + cGreen; // ScreaminGreen
// smuggle something cSeaGreen = w.cSea + cGreen; // SeaGreen
// smuggle something cSeaGreenCrayola = w.cSea + cGreen + w.cCrayola; // SeaGreenCrayola
// smuggle something cSealBrown = w.cSeal + cBrown; // SealBrown
// smuggle something cSeashell = w.cSea + w.cshell; // Seashell
// smuggle something cSelectiveYellow = w.cSelective + cYellow; // SelectiveYellow
// smuggle something cSepia = b.cSe + p.cpia; // Sepia
// smuggle something cShadow = p.cSha + p.cdow; // Shadow
// smuggle something cShadowBlue = p.cSha + p.cdow + cBlue; // ShadowBlue
// smuggle something cShamrockGreen = w.cShamrock + cGreen; // ShamrockGreen
// smuggle something cSheenGreen = w.cSheen + cGreen; // SheenGreen
// smuggle something cShimmeringBlush = w.cShimmering + w.cBlush; // ShimmeringBlush
// smuggle something cShinyShamrock = w.cShiny + w.cShamrock; // ShinyShamrock
// smuggle something cShockingPink = w.cShocking + cPink; // ShockingPink
// smuggle something cShockingPinkCrayola = w.cShocking + cPink + w.cCrayola; // ShockingPinkCrayola
// smuggle something cSilverCrayola = cSilver + w.cCrayola; // SilverCrayola
// smuggle something cSilverMetallic = cSilver + w.cMetallic; // SilverMetallic
// smuggle something cSilverChalice = cSilver + w.cChalice; // SilverChalice
// smuggle something cSilverPink = cSilver + cPink; // SilverPink
// smuggle something cSilverSand = cSilver + g.cSan + b.cd; // SilverSand
// smuggle something cSinopia = b.cSi + b.cno + p.cpia; // Sinopia
// smuggle something cSizzlingRed = w.cSizzling + cRed; // SizzlingRed
// smuggle something cSizzlingSunrise = w.cSizzling + w.cSunrise; // SizzlingSunrise
// smuggle something cSkobeloff = b.cSk + p.cobe + b.clo + b.cff; // Skobeloff
// smuggle something cSkyBlue = w.cSky + cBlue; // SkyBlue
// smuggle something cSkyBlueCrayola = w.cSky + cBlue + w.cCrayola; // SkyBlueCrayola
// smuggle something cSkyMagenta = w.cSky + cMagenta; // SkyMagenta
// smuggle something cSlateBlue = w.cSlate + cBlue; // SlateBlue
// smuggle something cSlateGray = w.cSlate + cGray; // SlateGray
// smuggle something cSlimyGreen = w.cSlimy + cGreen; // SlimyGreen
// smuggle something cSmitten = b.cSm + b.cit + n.cten; // Smitten
// smuggle something cSmokyBlack = w.cSmoky + cBlack; // SmokyBlack
// smuggle something cSnow = b.cSn + b.cow; // Snow
// smuggle something cSolidPink = w.cSolid + cPink; // SolidPink
// smuggle something cSonicSilver = w.cSonic + cSilver; // SonicSilver
// smuggle something cSpaceCadet = w.cSpace + w.cCadet; // SpaceCadet
// smuggle something cSpanishBistre = w.cSpanish + w.cBistre; // SpanishBistre
// smuggle something cSpanishBlue = w.cSpanish + cBlue; // SpanishBlue
// smuggle something cSpanishCarmine = w.cSpanish + w.cCarmine; // SpanishCarmine
// smuggle something cSpanishGray = w.cSpanish + cGray; // SpanishGray
// smuggle something cSpanishGreen = w.cSpanish + cGreen; // SpanishGreen
// smuggle something cSpanishOrange = w.cSpanish + cOrange; // SpanishOrange
// smuggle something cSpanishPink = w.cSpanish + cPink; // SpanishPink
// smuggle something cSpanishRed = w.cSpanish + cRed; // SpanishRed
// smuggle something cSpanishSkyBlue = w.cSpanish + w.cSky + cBlue; // SpanishSkyBlue
// smuggle something cSpanishViolet = w.cSpanish + cViolet; // SpanishViolet
// smuggle something cSpanishViridian = w.cSpanish + cViridian; // SpanishViridian
// smuggle something cSpringBud = w.cSpring + w.cBud; // SpringBud
// smuggle something cSpringFrost = w.cSpring + w.cFrost; // SpringFrost
// smuggle something cSpringGreen = w.cSpring + cGreen; // SpringGreen
// smuggle something cSpringGreenCrayola = w.cSpring + cGreen + w.cCrayola; // SpringGreenCrayola
// smuggle something cStarCommandBlue = w.cStar + w.cCommand + cBlue; // StarCommandBlue
// smuggle something cSteelBlue = w.cSteel + cBlue; // SteelBlue
// smuggle something cSteelPink = w.cSteel + cPink; // SteelPink
// smuggle something cSteelTeal = w.cSteel + cTeal; // SteelTeal
// smuggle something cStilDeGrainYellow = w.cStil + b.cDe + w.cGrain + cYellow; // StilDeGrainYellow
// smuggle something cStraw = b.cSt + p.craw; // Straw
// smuggle something cSugarPlum = w.cSugar + cPlum; // SugarPlum
// smuggle something cSunglow = w.cSun + w.cglow; // Sunglow
// smuggle something cSunray = w.cSun + p.cray; // Sunray
// smuggle something cSunset = w.cSuns + b.cet; // Sunset
// smuggle something cSuperPink = w.cSuper + cPink; // SuperPink
// smuggle something cSweetBrown = w.cSweet + cBrown; // SweetBrown
// smuggle something cTanCrayola = cTan + w.cCrayola; // TanCrayola
// smuggle something cTangoPink = g.cTango + cPink; // TangoPink
// smuggle something cTartOrange = p.cTart + cOrange; // TartOrange
// smuggle something cTaupeGray = cTaupe + cGray; // TaupeGray
// smuggle something cTeaGreen = w.cTea + cGreen; // TeaGreen
// smuggle something cTeaRose = w.cTea + cRose; // TeaRose
// smuggle something cTeaRoseWeb = w.cTea + cRose + w.cWeb; // TeaRoseWeb
// smuggle something cTealBlue = cTeal + cBlue; // TealBlue
// smuggle something cTelemagenta = b.cTe + b.cle + cmagenta; // Telemagenta
// smuggle something cTawny = b.cTa + b.cwn + b.cy; // Tawny
// smuggle something cTerraCotta = w.cTerra + w.cCotta; // TerraCotta
// smuggle something cThistle = w.cThis + p.ctle; // Thistle
// smuggle something cThulianPink = w.cThulian + cPink; // ThulianPink
// smuggle something cTickleMePink = w.cTickle + b.cMe + cPink; // TickleMePink
// smuggle something cTiffanyBlue = w.cTiffany + cBlue; // TiffanyBlue
// smuggle something cTimberwolf = w.cTimber + w.cwolf; // Timberwolf
// smuggle something cTitaniumYellow = cTitanium + cYellow; // TitaniumYellow
// smuggle something cTomato = b.cTo + w.cmat + b.co; // Tomato
// smuggle something cTropicalRainforest = w.cTropical + w.cRain + p.cfore + b.cst; // TropicalRainforest
// smuggle something cTrueBlue = g.cTrue + cBlue; // TrueBlue
// smuggle something cTrypanBlue = w.cTrypan + cBlue; // TrypanBlue
// smuggle something cTuftsBlue = w.cTufts + cBlue; // TuftsBlue
// smuggle something cTumbleweed = w.cTumble + w.cweed; // Tumbleweed
// smuggle something cTurquoiseBlue = cTurquoise + cBlue; // TurquoiseBlue
// smuggle something cTurquoiseGreen = cTurquoise + cGreen; // TurquoiseGreen
// smuggle something cTurtleGreen = b.cTu + b.crt + b.cle + cGreen; // TurtleGreen
// smuggle something cTuscanBrown = cTuscan + cBrown; // TuscanBrown
// smuggle something cTuscanRed = cTuscan + cRed; // TuscanRed
// smuggle something cTuscanTan = cTuscan + cTan; // TuscanTan
// smuggle something cTuscany = cTuscan + b.cy; // Tuscany
// smuggle something cTwilightLavender = w.cTwilight + cLavender; // TwilightLavender
// smuggle something cTyrianPurple = w.cTyrian + cPurple; // TyrianPurple
// smuggle something cUABlue = b.cUA + cBlue; // UABlue
// smuggle something cUARed = b.cUA + cRed; // UARed
// smuggle something cUltramarine = w.cUltra + p.cmar + p.cine; // Ultramarine
// smuggle something cUltramarineBlue = w.cUltra + p.cmar + p.cine + cBlue; // UltramarineBlue
// smuggle something cUltraPink = w.cUltra + cPink; // UltraPink
// smuggle something cUltraRed = w.cUltra + cRed; // UltraRed
// smuggle something cUnbleachedSilk = w.cUnbleached + w.cSilk; // UnbleachedSilk
// smuggle something cUnitedNationsBlue = w.cUnited + w.cNations + cBlue; // UnitedNationsBlue
// smuggle something cUnmellowYellow = b.cUn + p.cmel + w.clow + cYellow; // UnmellowYellow
// smuggle something cUPForestGreen = b.cUP + w.cForest + cGreen; // UPForestGreen
// smuggle something cUPMaroon = b.cUP + cMaroon; // UPMaroon
// smuggle something cUpsdellRed = w.cUpsdell + cRed; // UpsdellRed
// smuggle something cUranianBlue = w.cUranian + cBlue; // UranianBlue
// smuggle something cUSAFABlue = b.cUS + b.cAF + b.cAB + p.clue; // USAFABlue
// smuggle something cVanDykeBrown = w.cVan + w.cDyke + cBrown; // VanDykeBrown
// smuggle something cVanillaIce = cVanilla + w.cIce; // VanillaIce
// smuggle something cVegasGold = w.cVegas + cGold; // VegasGold
// smuggle something cVenetianRed = w.cVenetian + cRed; // VenetianRed
// smuggle something cVerdigris = p.cVer + w.cdig + p.cris; // Verdigris
// smuggle something cVermilionWeb = cVermilion + w.cWeb; // VermilionWeb
// smuggle something cVeronica = p.cVer + b.con + p.cica; // Veronica
// smuggle something cVioletColorWheel = cViolet + w.cColor + w.cWheel; // VioletColorWheel
// smuggle something cVioletCrayola = cViolet + w.cCrayola; // VioletCrayola
// smuggle something cVioletRYB = cViolet + p.cRYB; // VioletRYB
// smuggle something cVioletWeb = cViolet + w.cWeb; // VioletWeb
// smuggle something cVioletBlue = cViolet + cBlue; // VioletBlue
// smuggle something cVioletBlueCrayola = cViolet + cBlue + w.cCrayola; // VioletBlueCrayola
// smuggle something cVioletRed = cViolet + cRed; // VioletRed
// smuggle something cViridianGreen = cViridian + cGreen; // ViridianGreen
// smuggle something cVividBurgundy = w.cVivid + b.cBu + p.crgundy; // VividBurgundy
// smuggle something cVividSkyBlue = w.cVivid + w.cSky + cBlue; // VividSkyBlue
// smuggle something cVividTangerine = w.cVivid + cTangerine; // VividTangerine
// smuggle something cVividViolet = w.cVivid + cViolet; // VividViolet
// smuggle something cVolt = b.cVo + b.clt; // Volt
// smuggle something cWarmBlack = w.cWarm + cBlack; // WarmBlack
// smuggle something cWheat = b.cWh + p.ceat; // Wheat
// smuggle something cWildBlueYonder = w.cWild + cBlue + w.cYonder; // WildBlueYonder
// smuggle something cWildOrchid = w.cWild + b.cOr + p.cchid; // WildOrchid
// smuggle something cWildStrawberry = w.cWild + b.cSt + p.craw + w.cberry; // WildStrawberry
// smuggle something cWildWatermelon = w.cWild + b.cWa + w.cterm + p.celon; // WildWatermelon
// smuggle something cWindsorTan = w.cWindsor + cTan; // WindsorTan
// smuggle something cWine = b.cWi + b.cne; // Wine
// smuggle something cWineDregs = b.cWi + b.cne + w.cDregs; // WineDregs
// smuggle something cWinterSky = w.cWinter + w.cSky; // WinterSky
// smuggle something cWintergreenDream = w.cWinter + cgreen + w.cDream; // WintergreenDream
// smuggle something cWisteria = b.cWi + p.cster + b.cia; // Wisteria
// smuggle something cWoodBrown = b.cWo + b.cod + cBrown; // WoodBrown
// smuggle something cXanthic = b.cXa + w.cnth + b.cic; // Xanthic
// smuggle something cXanadu = b.cXa + b.cna + b.cdu; // Xanadu
// smuggle something cYaleBlue = w.cYale + cBlue; // YaleBlue
// smuggle something cYellowCrayola = cYellow + w.cCrayola; // YellowCrayola
// smuggle something cYellowMunsell = cYellow + w.cMunsell; // YellowMunsell
// smuggle something cYellowNCS = cYellow + p.cNCS; // YellowNCS
// smuggle something cYellowPantone = cYellow + w.cPantone; // YellowPantone
// smuggle something cYellowProcess = cYellow + w.cProcess; // YellowProcess
// smuggle something cYellowRYB = cYellow + p.cRYB; // YellowRYB
// smuggle something cYellowGreen = cYellow + cGreen; // YellowGreen
// smuggle something cYellowGreenCrayola = cYellow + cGreen + w.cCrayola; // YellowGreenCrayola
// smuggle something cYellowGreenColorWheel = cYellow + cGreen + w.cColor + w.cWheel; // YellowGreenColorWheel
// smuggle something cYellowOrange = cYellow + cOrange; // YellowOrange
// smuggle something cYellowOrangeColorWheel = cYellow + cOrange + w.cColor + w.cWheel; // YellowOrangeColorWheel
// smuggle something cYellowSunshine = cYellow + w.cSuns + p.chine; // YellowSunshine
// smuggle something cYInMnBlue = b.cY + b.cIn + b.cMn + cBlue; // YInMnBlue
// smuggle something cZaffre = b.cZa + b.cff + b.cre; // Zaffre
// smuggle something cZomp = b.cZo + b.cmp; // Zomp

exports.cVermilion = cVermilion;