var http = require('http');
var builder = require('xmlbuilder');

function addSensor(){
    console.log("Sensor Added.");
    var root = builder.create('InsertSensor')
    .attribute("service","sos")
    .attribute("version","2.0.0")

    root.ele('procedureDescriptionFormat', 'http://www.opengis.net/sensorml/2.0');
    var descNode = root.ele('procedureDescription')
    
    var metaData = root.ele('metadata')
    .ele('SosInsertionMetadata');
    metaData.ele('observationType','');
    metaData.ele('featureOfInterestType','')

    var out = root.end({ pretty: true});
   
   console.log(out);
}

addSensor();