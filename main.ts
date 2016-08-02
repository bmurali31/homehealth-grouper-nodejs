/// <reference path="typings/index.d.ts" />
import * as java from 'java';
import * as path from 'path';
import * as fs from 'fs';

java.classpath.push(path.join(__dirname, 'grouper', 'java', 'HH_PPS_V_API.jar'));
java.classpath.push(path.join(__dirname, 'grouper', 'java', 'HomeHealthJava.jar'));
let HH_PPS = java.import('com.mmm.cms.homehealth.pps.HH_PPS');
let hhps = HH_PPS.getInstanceSync();

let File = java.import('java.io.File');
let configFile = new File(path.join(__dirname, 'grouper', 'HomeHealthGrouper.properties'));


hhps.init(configFile, ()=>{
    let testData = fs.readFileSync(path.join(__dirname, 'grouper', 'test-files', 'v5216', 'XMLFile_1.XML'), 'utf8');
    let scoreResult = hhps.scoreRecord(testData, (err, result)=>{
        if (!err){
            let exception = result.getExceptionSync();
            if (exception){
                console.log(exception.getMessageSync());    
            } else {
                console.log(result.getHIPPSCodeSync().getCodeSync());
            }
            
        }

    });    
});

