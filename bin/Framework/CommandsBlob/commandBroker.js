"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pythonShell = require("python-shell");

//var D = require('D');
// Almost works
// import { obj } from './data.js';
// let D = obj();
// Works
var D = require('../Resources/data');

function initCommandParser(dataInput) {
  console.log('BEGIN commandParser.initCommandParser');
  console.log('dataInput is: ' + dataInput);
  var returnData;

  if (dataInput.toUpperCase() === 'EXIT') {
    returnData = false;
  } else {
    if (dataInput.includes('.py') === true) {
      // Here we will need to execute a python script.
      console.log('begin PythonShell run');
      var pyshell = new _pythonShell.PythonShell('./src/hello.py');
      console.log('End PythonShell run');
      pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
      }); // end the input stream and allow the process to exit

      pyshell.end(function (err, code, signal) {
        if (err) throw err;
        console.log('The python exit code was: ' + code);
        console.log('The python exit signal was: ' + signal);
        console.log('python finished');
      });
    } else if (dataInput.includes('data') === true) {
      console.log('contents of D are: ' + JSON.stringify(D));
      console.log('adding a test data field to D');
      D['data']['ctx']['testData'] = 'testData';
    } else {
      console.log(dataInput);
    }

    returnData = true;
  }

  console.log('returnData is: ' + returnData);
  console.log('END commandParser.initCommandParser');
  return returnData;
}

;

function start() {
  console.log('BEGIN commandParser.start function');
  console.log('END commandParser.start function');
}

;
var _default = {
  initCommandParser: initCommandParser,
  start: start
};
exports["default"] = _default;