/**
 * @file nominal.js
 * @module nominal
 * @description Contains all of the nominal system commands.
 * @requires module:configurator
 * @requires module:commandBroker
 * @requires module:ruleBroker
 * @requires module:workflowBroker
 * @requires module:queue
 * @requires module:loggers
 * @requires module:basic-constants
 * @requires module:system-constants
 * @requires {@link https://www.npmjs.com/package/figlet|figlet}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires module:data
 * @author Seth Hollingsead
 * @date 2020/06/19
 * @copyright Copyright © 2020-… by Seth Hollingsead. All rights reserved
 */
import configurator from '../../Executrix/configurator';
import lexical from '../../Executrix/lexical';
import commandBroker from '../commandBroker';
import ruleBroker from '../../BusinessRules/ruleBroker';
import workflowBroker from '../../Executrix/workflowBroker';
import queue from '../../Resources/queue';
import loggers from '../../Executrix/loggers';
import * as b from '../../Constants/basic.constants';
import * as s from '../../Constants/system.constants';
const figlet = require('figlet');
var path = require('path');
var D = require('../../../Framework/Resources/data');

 /**
  * @function echoCommand
  * @description returns the input as the output without any changes.
  * @param {array<boolean|string|integer>} inputData String that should be echoed.
  * inputData[0] === 'echoCommand'
  * @param {string} inputMetaData Not used for this business rule.
  * @return {string} The same as the input string.
  * @author Seth Hollingsead
  * @date 2020/06/19
  */
 export const echoCommand = function(inputData, inputMetaData) {
   var baseFileName = path.basename(module.filename, path.extname(module.filename));
   var functionName = s.cechoCommand;
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
   if (!inputData) {
     return false;
   }
   loggers.consoleLog(inputData);
   var returnData = true;
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
   loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
   return returnData;
 };

/**
 * @function exit
 * @description Returns false so the entire application can exit.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] === 'exit'
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} False to indicate that the application should exit.
 * @author Seth Hollingsead
 * @date 2020/06/19
 */
export const exit = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cexit;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = false;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function version
 * @description Displays the current version number for the current application.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] === 'version'
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/21
 */
export const version = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cversion;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = true;
  console.log(configurator.getConfigurationSetting(s.cApplicationVersionNumber));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function about
 * @description Displays the message about the current application.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] === 'about'
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/21
 */
export const about = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cabout;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = true;
  console.log(configurator.getConfigurationSetting(s.cApplicationDescription));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function name
 * @description Displays the name of the current application in standard font format, nothing special.
 * @param {array<boolean|string|integer>} inputData An array that could really contain anything depending
 * on what the user entered, but the function converts and filters out for a boolean
 * True or False value internally to the function.
 * inputData[0] === 'name'
 * inputData[1] === 'true|false' (optional)
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/21
 */
export const name = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cname;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = true;
  let applicationName = configurator.getConfigurationSetting(s.cApplicationName);
  var figletFont = configurator.getConfigurationSetting(s.cFigletFont);
  let useFancyFont = false;
  let rules = {};
  rules[0] = s.cstringToDataType;
  useFancyFont = ruleBroker.processRules(inputData[1], '', rules);
  if (useFancyFont === true) {
    figletFont = configurator.getConfigurationSetting(s.cFigletFont);
    console.log(figlet.textSync(applicationName, {font: figletFont, horizontalLayout: s.cfull }));
  } else {
    console.log(applicationName);
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function help
 * @description Displays all the information about all of the commands in the system,
 * including both system defined commands & client defined commands.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] = 'help'
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/22
 */
export const help = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.chelp;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = true;
  loggers.consoleTableLog(baseFileName + b.cDot + functionName, D[s.cCommandsAliases][s.cCommand], [s.cName, s.cDescription]);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function workflowHelp
 * @description Displays all the information about all the workflows in the system,
 * including both system defined workflows & client defined commands.
 * @param {array<boolean|string|integer>} inputData Not used for this command.
 * inputData[0] === 'workflowHelp'
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/23
 */
export const workflowHelp = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cworkflowHelp;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = true;
  loggers.consoleTableLog(baseFileName + b.cDot + functionName, D[s.cCommandWorkflows][s.cWorkflow], [s.cName]);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function commandSequencer
 * @description Takes an arguments array where the second array object would contain a list of
 * commands that should enqueued to the command queue.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a list of commands that should be enqueued to the command queue.
 * inputData[0] === 'commandSequencer'
 * inputData[1] === command string 1
 * inputData[2] === command string 2
 * inputData[n] === command string n
 * @param {string} inputMetaData Not used for this command.
 * @return {boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/21
 */
export const commandSequencer = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.ccommandSequencer;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = true;
  for (let i = 1; i < inputData.length; i++) {
    let commandString = inputData[i];
    let primaryCommandDelimiter = configurator.getConfigurationSetting(s.cPrimaryCommandDelimiter);
    if (primaryCommandDelimiter === null || primaryCommandDelimiter !== primaryCommandDelimiter || primaryCommandDelimiter === undefined) {
      primaryCommandDelimiter = b.cSpace;
    }
    let secondaryCommandArgsDelimiter = configurator.getConfigurationSetting(s.cSecondaryCommandDelimiter);
    let tertiaryCommandDelimiter = configurator.getConfigurationSetting(s.cTertiaryCommandDelimiter);
    // Replace 2nd & 3rd level delimiters and down-increment them so we are dealing with command strings that can actually be executed.
    commandString = commandString.replace(secondaryCommandArgsDelimiter, primaryCommandDelimiter);
    commandString = commandString.replace(tertiaryCommandDelimiter, secondaryCommandArgsDelimiter);
    let currentCommand = commandBroker.getValidCommand(commandString, primaryCommandDelimiter);
    let commandArgs = commandBroker.getCommandArgs(commandString, primaryCommandDelimiter);
    // We need to recompose the command arguments for the current command using the s.cPrimaryCommandDelimiter.
    if (currentCommand !== false) {
      for (let j = 1; j < commandArgs.length; j++) {
        currentCommand = currentCommand + primaryCommandDelimiter + commandArgs[j];
      }
      queue.enqueue(s.cCommandQueue, currentCommand);
    } else {
      console.log('WARNING: nominal.commandSequencer: The specified command was not found, please enter a valid command and try again.');
    }
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function workflow
 * @description Takes an arguments array where the second array object would contain a workflow name.
 * We will look up the named workflow in the D-data structure and send that workflow to a call to the command sequencer.
 * Which will in-turn convert the list of commands in that workflow into commands that are enqueued to the command queue.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a workflow name, that we should use to look up the workflow in the D-data structure.
 * inputData[0] === 'workflow'
 * inputData[1] === workflowName
 * @param {string} inputMetaData Not used for this command.
 * @return {Boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/22
 */
export const workflow = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cworkflow;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = true;
  let workflowName = inputData[1];
  let workflowValue = workflowBroker.getWorkflow(workflowName);
  if (workflowValue !== false) {
    queue.enqueue(s.cCommandQueue, workflowValue);
  } else {
    console.log('WARNING: nominal.workflow: The specified workflow: ' + workflowName + b.cComa +
    ' was not found in either the system defined workflows, or client defined workflows.' +
    ' Please enter a valid workflow name and try again.');
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function printDataHive
 * @description Prints out all the data contents of a particular data hive in the D-data structure.
 * If no hive is specified then the entire D-data structure will be printed.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a data hive name at the top level of the D-data structure.
 * Examples: Configuration, Workflows, Colors, Commands, etc...
 * inputData[0] === 'printDataHive'
 * inputData[1] === dataHiveName
 * @param {string} inputMetaData Not used for this command.
 * @return {Boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/22
 */
export const printDataHive = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cprintDataHive;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = true;
  if (D[inputData[1]] !== undefined) {
    console.log(inputData[1] + ' contents are: ' + JSON.stringify(D[inputData[1]]));
  } else {
    console.log('contents of D are: ' + JSON.stringify(D));
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function businessRule
 * @description Executes a user specified business rule with some input.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a business rule name and perhaps some rule inputs.
 * inputData[0] === 'businessRule'
 * inputData[1] === rule 1 (including arguments with secondary delimiter)
 * inputData[2] === rule 2 (including arguments with secondary delimiter)
 * inputData[n] === rule n (including arguments with secondary delimiter)
 * NOTE: There are 2 ways this system can work, the user can either call each rule with it's own inputs,
 * or the user can leverage the rule system itself to pass the outputs from rule 1 as inputs to rule 2, etc...
 * This command will only always take the arguments for the first business rule as inputs and let the business rules system
 * pass the outputs as inputs as discussed above.
 * It is assumed if the user wanted to execute a sequence of business rules each with their own inputs,
 * Then the user should use the command sequencer in combination with this function
 * to call a series of business rules each with their own inputs.
 * @param {string} inputMetaData Not used for this command.
 * @return {Boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/23
 */
export const businessRule = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.cbusinessRule;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = true;
  let secondaryCommandArgsDelimiter = configurator.getConfigurationSetting(s.cSecondaryCommandDelimiter);
  let rules = [];
  let ruleInputData, ruleInputMetaData;

  let argsArrayContainsCharacterRule = [];
  let removeBracketsFromArgsArrayRule = [];
  argsArrayContainsCharacterRule[0] = s.cdoesArrayContainCharacter;
  removeBracketsFromArgsArrayRule[0] = s.cremoveCharacterFromArray;
  let addedARule = false;

  // First go through each rule that should be executed and determine if
  // there are any inputs that need to be passed into the business rule.
  for (let i = 1; i < inputData.length; i++) {
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'Begin the i-th iteration of the inputData array. i is: ' + i);
    let currentRuleArg = inputData[i]; // Check to see if this rule has inputs separate from the rule name.
    loggers.consoleLog(baseFileName + b.cDot + functionName, 'currentRule is: ' + JSON.stringify(currentRuleArg));
    let ruleArgs = [];
    if (i === 1) {
      rules = lexical.parseBusinessRuleArgument(currentRuleArg, i, false);
    } else if (i === 2 && inputData.length <= 4) {
      ruleInputData = lexical.parseBusinessRuleArgument(currentRuleArg, i, false);
    } else if (i === 2 && inputData.length > 4) {
      console.log('inputData.length is: ' + inputData.length);
      ruleInputData = lexical.parseBusinessRuleArgument(inputData, i, true);
    } else if (i === 3 && inputData.length <= 4) {
      ruleInputMetaData = lexical.parseBusinessRuleArgument(currentRuleArg, i, false);
    } else if (i === 3 && inputData.length > 4) {
      // In this case all of the arguments will have been combined into a single array and added to the ruleInputData.
      ruleInputMetaData = '';
    }
  }

  loggers.consoleLog(baseFileName + b.cDot + functionName, 'rules is: ' + JSON.stringify(rules));
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'ruleInputData is: ' + ruleInputData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'ruleInputMetaData is: ' + JSON.stringify(ruleInputMetaData));
  console.log('Rule output is: ' + JSON.stringify(ruleBroker.processRules(ruleInputData, ruleInputMetaData, rules)));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};

/**
 * @function commandGenerator
 * @description Takes a set of input parameters such as a command and the number of times it should be executed.
 * Then this command will enqueue that command that number of times to the command queue.
 * @param {array<boolean|string|integer>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the command that should be executed and the number of times it should be executed.
 * inputData[0] === 'commandGenerator'
 * inputData[1] === command String
 * inputData[2] === number of times to enqueue the above command string
 * @param {string} inputMetaData Not used for this command.
 * @return {Boolean} True to indicate that the application should not exit.
 * @author Seth Hollingsead
 * @date 2020/06/23
 */
export const commandGenerator = function(inputData, inputMetaData) {
  var baseFileName = path.basename(module.filename, path.extname(module.filename));
  var functionName = s.ccommandGenerator;
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cBEGIN_Function);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputDataIs + JSON.stringify(inputData));
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cinputMetaDataIs + inputMetaData);
  var returnData = true;
  var replaceCharacterWithCharacterRule = [];
  replaceCharacterWithCharacterRule[0] = s.creplaceCharacterWithCharacter;
  let primaryCommandDelimiter = configurator.getConfigurationSetting(s.cPrimaryCommandDelimiter);
  if (primaryCommandDelimiter === null || primaryCommandDelimiter !== primaryCommandDelimiter || primaryCommandDelimiter === undefined) {
    primaryCommandDelimiter = b.cSpace;
  }
  let secondaryCommandArgsDelimiter = configurator.getConfigurationSetting(s.cSecondaryCommandDelimiter);
  let tertiaryCommandDelimiter = configurator.getConfigurationSetting(s.cTertiaryCommandDelimiter);
  let commandString = inputData[1];
  // NOTE: The str.replace only replaces the first instance of a string value, not all values.
  // but we might have another issue in the sense that if the string begins and ends with "[" & "]" respectively,
  // we might not want to replace those characters.
  // Because it might be that the command should take responsibility for that in such a special case,
  // i.e. treating the whole block as a single array and doing it's own split operation.
  // commandString = commandString.replace(secondaryCommandArgsDelimiter, primaryCommandDelimiter);
  // commandString = commandString.replace(tertiaryCommandDelimiter, secondaryCommandArgsDelimiter);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'commandString before attempted delimiter swap is: ' + commandString);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'replaceCharacterWithCharacterRule is: ' + JSON.stringify(replaceCharacterWithCharacterRule));
  let secondaryCommandDelimiterRegEx = new RegExp('\\' + secondaryCommandArgsDelimiter, 'g');
  commandString = ruleBroker.processRules(commandString, [secondaryCommandDelimiterRegEx, primaryCommandDelimiter], replaceCharacterWithCharacterRule);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'After attempting to replace the secondaryCommandArgsDelimiter with the primaryCommandDelimiter commandString is: ' + commandString);
  let tertiaryCommandDelimiterRegEx = new RegExp('\\' + tertiaryCommandDelimiter, 'g');
  commandString = ruleBroker.processRules(commandString, [tertiaryCommandDelimiterRegEx, secondaryCommandArgsDelimiter], replaceCharacterWithCharacterRule);
  loggers.consoleLog(baseFileName + b.cDot + functionName, 'After attempting to replace the tertiaryCommandDelimiter with the secondaryCommandArgsDelimiter commandString is: ' + commandString);
  let currentCommand = commandBroker.getValidCommand(commandString, primaryCommandDelimiter);
  let commandArgs = commandBroker.getCommandArgs(commandString, primaryCommandDelimiter);
  if (currentCommand !== false) {
    if (isNaN(inputData[2]) === false) { // Make sure the user passed in a number for the second argument.
      var numberOfCommands = parseInt(inputData[2]);
      if (numberOfCommands > 0) {
        for (let i = 0; i < numberOfCommands; i++) {
          queue.enqueue(s.cCommandQueue, commandString);
        }
      } else {
        console.log('WARNING: nominal.commandGenerator: Must enter a number greater than 0, number entered: ' + numberOfCommands);
      }
    } else {
      console.log('WARNING: nominal.commandGenerator: Number entered for the number of commands to generate is not a number: ' + inputData[2]);
    }
  } else {
    console.log('WARNING: nominal.commandGenerator: The specified command: ' + commandString +
    ' was not found, please enter a valid command and try again.');
  }
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.creturnDataIs + returnData);
  loggers.consoleLog(baseFileName + b.cDot + functionName, s.cEND_Function);
  return returnData;
};
