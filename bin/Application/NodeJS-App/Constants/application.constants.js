"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cBinaryResourcesPath = exports.cSourceResourcesPath = exports.cResourcesCommonPath = exports.cConfigurationDataLookupPrefixPath = exports.cApplicationName = exports.cConfigurationFilename = void 0;

var b = _interopRequireWildcard(require("../../../Framework/Constants/basic.constants"));

var g = _interopRequireWildcard(require("../../../Framework/Constants/generic.constants"));

var s = _interopRequireWildcard(require("../../../Framework/Constants/system.constants"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var cConfigurationFilename = s.cConfiguration;
exports.cConfigurationFilename = cConfigurationFilename;
var cApplicationName = 'NodeJS-App'; // Configuration Path

exports.cApplicationName = cApplicationName;
var cConfigurationDataLookupPrefixPath = b.cForwardSlash + s.cResources + b.cForwardSlash;
exports.cConfigurationDataLookupPrefixPath = cConfigurationDataLookupPrefixPath;
var cResourcesCommonPath = s.cApplication + b.cForwardSlash + cApplicationName + b.cForwardSlash + s.cResources + b.cForwardSlash; // Source Resources Path

exports.cResourcesCommonPath = cResourcesCommonPath;
var cSourceResourcesPath = b.cForwardSlash + s.csrc + b.cForwardSlash + cResourcesCommonPath;
exports.cSourceResourcesPath = cSourceResourcesPath;
'/src/Application/NodeJS-App/Resources/'; // Binary Resources Path

var cBinaryResourcesPath = b.cForwardSlash + s.cbin + b.cForwardSlash + cResourcesCommonPath;
exports.cBinaryResourcesPath = cBinaryResourcesPath;
'/bin/Application/NodeJS-App/Resources/';