"use strict";
var Gpio = require('pigpio').Gpio;
var InputMonitor = require('inputmonitor');

// Define constants
var gpioNum = 19;
var inputName = 'Input1';
var inputNum = 1;

// Function to get input status changed
function inputStatusChanged(number, name, value) {
    console.log(name + '[' + number + '] (' + (value ? 'ACTIVED' : 'DEACTIVED') + ')');
}

// Initialize InputMonitor with GPIO number, a number, a name
var inputMonitor = new InputMonitor(gpioNum, Gpio.PUD_DOWN, inputNum, inputName);

// Set funcion callback
inputMonitor.onInputChange(inputStatusChanged);

// Start watch
inputMonitor.start();
