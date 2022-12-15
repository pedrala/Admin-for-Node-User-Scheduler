const fs = require('fs');
const os = require('os');
const cryptoSsl = require('./../../../../../../addon/crypto-ssl');
const config = require('./../../configs/config.js');
const define = require('./../../configs/define.js');
const util = require('./../utils/commonUtil.js');
const base58 = require('./../utils/base58.js');
const webApi = require("./../net/webApi.js");
const txSchUtil = require("./../tx/txSchUtil.js");
//const logger = require('./../utils/winlog.js');
const crypto = require('crypto');
//
module.exports.schSecretKey = "38df3a8e044d47e891a51f539633a392"
module.exports.schApiKey = "a2310fb0bb92478a93d0608e2507955f";
module.exports.schVer = "V1.0.0";
module.exports.schSymbol = "node";

module.exports.schLastDay = "20310331";

module.exports.schNodeFromAddr = "0x8D035BA57455a180B9bfcFF9DC512Dfa3ebCE1F3";

module.exports.txNodeRegReq = async (nodeSN, nodePrice, nodeMaxReward, startTs, walletName) => {
    //
    let apiRoutePath  = '/v1/node/insert';
    console.log(apiRoutePath);

    //
    let curTs = Date.now();

    let schCurTs = txSchUtil.ts2Date(curTs);
    // console.log("schCurTs: "+ schCurTs);
    
    //
    let sig = await txSchUtil.genSig(this.schApiKey, schCurTs, this.schSecretKey);

    let reqParam = {
        apiKey : this.schApiKey,
        timestamp : schCurTs,
        version : this.schVer,
        signature : sig, 
        symbol : this.schSymbol,
        serial : nodeSN, 
        price : nodePrice, 
        maxp : nodeMaxReward, 
        reward : "0", 
        startday : txSchUtil.ts2Day(startTs), 
        lastday : this.schLastDay, 
        addr : walletName
    };

    let postData = JSON.stringify(reqParam);

    console.log("txNodeRegReq : " + postData);

    //
    let apiRes = await webApi.APICallProc(apiRoutePath, config.SCH_CONFIG, webApi.WEBAPI_DEFINE.METHOD.POST, postData);

    console.log("apiRes : " + JSON.stringify(apiRes));
}

//
module.exports.txNodeTxReq = async (fromWalletName, toWalletName, sendAmount) => {
    //
    let apiRoutePath  = '/v1/node/transfer';
    console.log(apiRoutePath);

    //
    let curTs = Date.now();

    let schCurTs = txSchUtil.ts2Date(curTs);
    // console.log("schCurTs: "+ schCurTs);
    
    //
    let sig = await txSchUtil.genSig(this.schApiKey, schCurTs, this.schSecretKey);

    let reqParam = {
        apiKey : this.schApiKey,
        timestamp : schCurTs,
        version : this.schVer,
        signature : sig, 
        symbol : this.schSymbol,
        froma : fromWalletName, 
        toa : toWalletName, 
        amount : sendAmount
    };

    let postData = JSON.stringify(reqParam);

    console.log("txNodeTxReq : " + postData);

    //
    let apiRes = await webApi.APICallProc(apiRoutePath, config.SCH_CONFIG, webApi.WEBAPI_DEFINE.METHOD.POST, postData);

    console.log("apiRes : " + JSON.stringify(apiRes));
    console.log("");
}

// //
// module.exports.txNodeTxReqWithTs = async (curTs, fromWalletName, toWalletName, sendAmount) => {
//     //
//     let apiRoutePath  = '/v1/node/transfer';
//     console.log(apiRoutePath);

//     //
//     // let curTs = Date.now();

//     let schCurTs = txSchUtil.ts2Date(curTs);
    
//     //
//     let sig = await txSchUtil.genSig(this.schApiKey, schCurTs, this.schSecretKey);

//     let reqParam = {
//         apiKey : this.schApiKey,
//         timestamp : schCurTs,
//         version : this.schVer,
//         signature : sig, 
//         symbol : this.schSymbol,
//         froma : fromWalletName, 
//         toa : toWalletName, 
//         amount : sendAmount
//     };

//     let postData = JSON.stringify(reqParam);

//     console.log("txNodeTxReqWithTs : " + postData);

//     //
//     let apiRes = await webApi.APICallProc(apiRoutePath, config.SCH_CONFIG, webApi.WEBAPI_DEFINE.METHOD.POST, postData);

//     console.log("apiRes : " + JSON.stringify(apiRes));
//     console.log("");
// }

//
module.exports.txNodeSelectReq = async (walletName) => {
    //
    let apiRoutePath  = '/v1/node/select';
    console.log(apiRoutePath);

    //
    let curTs = Date.now();

    let schCurTs = txSchUtil.ts2Date(curTs);
    // console.log("schCurTs: "+ schCurTs);
    
    //
    let sig = await txSchUtil.genSig(this.schApiKey, schCurTs, this.schSecretKey);

    let reqParam = {
        apiKey : this.schApiKey,
        timestamp : schCurTs,
        version : this.schVer,
        signature : sig, 
        symbol : this.schSymbol,
        addr : walletName
    };

    let postData = JSON.stringify(reqParam);

    console.log("txNodeSelectReq : " + postData);

    //
    let apiRes = await webApi.APICallProc(apiRoutePath, config.SCH_CONFIG, webApi.WEBAPI_DEFINE.METHOD.POST, postData);

    console.log("apiRes : " + JSON.stringify(apiRes));
}
