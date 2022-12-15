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
module.exports.schSecretKey = "38df3a8e044d47e891a51f539633a391"
module.exports.schApiKey = "a2320fb0bb92478a93d0608e2507952a";
module.exports.schVer = "V1.0.0";
module.exports.schSymbol = "user";
//
module.exports.schLastDay = "20310331";
//
module.exports.txUserSelectReq = async (walletName) => {
    //
    let apiRoutePath  = '/v1/user/select';
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

    console.log("txUserSelectReq : " + postData);

    //
    let apiRes = await webApi.APICallProc(apiRoutePath, config.SCH_CONFIG, webApi.WEBAPI_DEFINE.METHOD.POST, postData);

    console.log("apiRes : " + JSON.stringify(apiRes));
}

//
module.exports.txUserInsertReq = async (walletName, accountNum) => {
    //
    let apiRoutePath  = '/v1/user/insert';
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
        addr : walletName, 
        uid : accountNum
    };

    let postData = JSON.stringify(reqParam);

    console.log("txUserInsertReq : " + postData);

    //
    let apiRes = await webApi.APICallProc(apiRoutePath, config.SCH_CONFIG, webApi.WEBAPI_DEFINE.METHOD.POST, postData);

    console.log("apiRes : " + JSON.stringify(apiRes));
}

//
module.exports.txUserBuyAddReq = async (userWalletName, purchaseSiteId, nodeWalletName, nftId, nftHash, purchasePrice, userMaxReward, startTs) => {
    //
    let apiRoutePath  = '/v1/user/buyadd';
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
        tid : purchaseSiteId, 
        wid : userWalletName, 
        nftid : nftId, 
        hash : nftHash, 
        price : purchasePrice, 
        maxp : userMaxReward, 
        reward : "0", 
        startday : txSchUtil.ts2Day(startTs), 
        lastday : this.schLastDay, 
        addr : userWalletName, 
        naddr : nodeWalletName
    };

    let postData = JSON.stringify(reqParam);

    console.log("txUserBuyAddReq : " + postData);

    //
    let apiRes = await webApi.APICallProc(apiRoutePath, config.SCH_CONFIG, webApi.WEBAPI_DEFINE.METHOD.POST, postData);

    console.log("apiRes : " + JSON.stringify(apiRes));
}
