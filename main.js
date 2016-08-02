"use strict";
/// <reference path="typings/index.d.ts" />
const java = require('java');
const path = require('path');
//java.classpath.push(path.join(__dirname, 'java', 'HH_PPS_V_API.jar'));
java.classpath.push(path.join(__dirname, 'grouper', 'java', 'HomeHealthJava.jar'));
let HH_PPS = java.import('com.mmm.cms.homehealth.pps.HH_PPS');
let hhps = HH_PPS.getInstanceSync();
let File = java.import('java.io.File');
let configFile = new File(path.join(__dirname, ''));
let javaFile = java.newInstanceSync('java.io.File', path.join(__dirname, ''));
hhps.init();
//let javaFile = java.newInstanceSync('java.io.File', path.join(__dirname, ''))
hhps.init();
//# sourceMappingURL=main.js.map