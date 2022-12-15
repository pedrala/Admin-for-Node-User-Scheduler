const fs = require('fs');
const os = require('os');
const cryptoSsl = require('./../../../../../../addon/crypto-ssl');
const config = require('./../../configs/config.js');
const define = require('./../../configs/define.js');
const util = require('./../utils/commonUtil.js');
const base58 = require('./../utils/base58.js');
//const logger = require('./../utils/winlog.js');
const webApi = require("./../net/webApi.js");
const txSchUtil = require("./../tx/txSchUtil.js");
const crypto = require('crypto');
//
module.exports.roundDown = (numIn, baseNum) => {
    //
    let numInFloat= parseFloat(numIn) * baseNum;
    // console.log("numInFloat : " + numInFloat);

    numOutFloor = Math.floor(numInFloat);
    // console.log("numOutFloor : " + numOutFloor);

    numOut = util.intToStr(numOutFloor / baseNum);
    // console.log("numOut : " + numOut);

    return (numOut);
}

//
module.exports.schNodeTxReq = async () => {
    // 
    let baseNum = 1000000000;

    // Common Value
    let fromWalletName = txSchNode.schNodeFromAddr;
    //
    let sendAmount = "57.567123287000000000";

    //
    console.log("fromWalletName : " + fromWalletName);
    console.log("sendAmount : " + sendAmount);
    console.log("");


    // Indivisual Value
    let toWalletName;

    // TEST NODE
    toWalletName = "TESTNODE";
    console.log("toWalletName : " + toWalletName);

    await txSchNode.txNodeTxReq(fromWalletName, toWalletName, sendAmount);
}