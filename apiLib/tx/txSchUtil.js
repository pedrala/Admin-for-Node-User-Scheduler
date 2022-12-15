const fs = require('fs');
const os = require('os');
const cryptoSsl = require('./../../../../../../addon/crypto-ssl');
const config = require('./../../configs/config.js');
const define = require('./../../configs/define.js');
const util = require('./../utils/commonUtil.js');
const base58 = require('./../utils/base58.js');
const cryptoApi = require('./../sec/cryptoApi.js');
const webApi = require("./../net/webApi.js");
//const logger = require('./../utils/winlog.js');
const crypto = require('crypto');

const schVer = "V1.0.0";
//
module.exports.genSig = async (apiKey,ts, secretKey) => {
    //
    let sigData = "apiKey=" + apiKey + "&timestamp=" + ts + "&version=" + schVer;
    console.log("sigData : " + sigData);

    let sig = cryptoApi.generateSignature(secretKey, sigData);
    console.log('sig : ' + sig);

    return (sig);
}

module.exports.ts2Day = (ts, seprtr) => {
    let myDate = util.timestamp2Date(ts);
    // console.log("myDate : " + myDate);

    //
    let myDateYear = myDate.getFullYear();
    let myDateMonth = ('0' + (myDate.getMonth()+1)).slice(-2);
    let myDateDay = ('0' + myDate.getDate()).slice(-2);
    // let myDateHour = ('0' + myDate.getHours()).slice(-2);
    // let myDateMin = ('0' + myDate.getMinutes()).slice(-2);
    // let myDateSec = ('0' + myDate.getSeconds()).slice(-2);
    // let myDateMs = myDate.getMilliseconds();

    //
    let schDay;

    if (seprtr === undefined)
    {
        schDay = myDateYear + myDateMonth + myDateDay;
    }
    else
    {
        schDay = myDateYear + seprtr + myDateMonth + seprtr + myDateDay;
    }
    
    // console.log("schDay: "+ schDay);

    return (schDay);
}

module.exports.ts2Date = (ts) => {
    let myDate = util.timestamp2Date(ts);
    // console.log("myDate : " + myDate);

    //
    let myDateYear = myDate.getFullYear();
    let myDateMonth = ('0' + (myDate.getMonth()+1)).slice(-2);
    let myDateDay = ('0' + myDate.getDate()).slice(-2);
    let myDateHour = ('0' + myDate.getHours()).slice(-2);
    let myDateMin = ('0' + myDate.getMinutes()).slice(-2);
    let myDateSec = ('0' + myDate.getSeconds()).slice(-2);
    let myDateMs = myDate.getMilliseconds();

    //
    let schDate = myDateYear + "-" + myDateMonth + "-" + myDateDay + " " + myDateHour + ":" + myDateMin + ":" + myDateSec + "."+ myDateMs;
    // console.log("schDate: "+ schDate);

    return (schDate);
}
