"use strict";
/// <reference path="typings/index.d.ts" />
var java = require('java');
var path = require('path');
var fs = require('fs');
java.classpath.push(path.join(__dirname, 'grouper', 'java', 'HH_PPS_V_API.jar'));
java.classpath.push(path.join(__dirname, 'grouper', 'java', 'HomeHealthJava.jar'));
var HH_PPS = java.import('com.mmm.cms.homehealth.pps.HH_PPS');
var hhps = HH_PPS.getInstanceSync();
var File = java.import('java.io.File');
var configFile = new File(path.join(__dirname, 'grouper', 'HomeHealthGrouper.properties'));
hhps.init(configFile, function () {
    var testData = fs.readFileSync(path.join(__dirname, 'grouper', 'test-files', 'v5216', 'XMLFile_1.XML'), 'utf8');
    var scoreResult = hhps.scoreRecord(testData, function (err, result) {
        if (!err) {
            var exception = result.getExceptionSync();
            if (exception) {
                console.log(exception.getMessageSync());
            }
            else {
                console.log(result.getHIPPSCodeSync().getCodeSync());
            }
        }
    });
});
