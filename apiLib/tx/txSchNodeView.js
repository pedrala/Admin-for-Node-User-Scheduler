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

const schNodeSecretKey = "38df3a8e044d47e891a51f539633a392"
const schNodeApiKey = "a2310fb0bb92478a93d0608e2507955f";
const schNodeVer = "V1.0.0";
const schNodeSymbol = "node";

////////////////////////////////////////////////////////////////////
//
module.exports.txNodeListReq = async (fromD, toD, walletName, net) => {
    
    let apiRoutePath  = '/view/wallet/selectlist';    
    console.log(apiRoutePath);

    let selectedConfig = '';
    
    if(net == 'real')
        selectedConfig = config.SCH_CONFIG_REAL
    else if(net == 'test')
        selectedConfig = config.SCH_CONFIG_TEST
    else if(net == 'vServer')   
        selectedConfig = config.SCH_CONFIG_VIRTUAL
    //selectedConfig = (net == 'real')? config.SCH_CONFIG_REAL : config.SCH_CONFIG_TEST

    let curTs = Date.now();

    let schCurTs = txSchUtil.ts2Date(curTs);
    console.log("schCurTs: "+ schCurTs);
    
    let sig = await txSchUtil.genSig(schNodeApiKey, schCurTs, schNodeSecretKey);

    let reqParam = {
        apiKey : schNodeApiKey,
        timestamp : schCurTs,
        version : schNodeVer,
        signature : sig, 
        symbol : schNodeSymbol
    };

    if (fromD != undefined && fromD.length > 0)
    {
        reqParam.FROMD = fromD;
    }

    if (toD != undefined && toD.length > 0)
    {
        reqParam.TOD = toD;
    }
   
    if (walletName != undefined && walletName.length > 0)
    {
        reqParam.ADDR = walletName;
    }

    let postData = JSON.stringify(reqParam);

    console.log("txNodeListReq : " + postData);    

    let apiRes = await webApi.APICallProc(apiRoutePath, selectedConfig, webApi.WEBAPI_DEFINE.METHOD.POST, postData);

    //console.log("apiRes : " + JSON.stringify(apiRes));
    return apiRes;
}

////////////////////////////////////////////////////////////////////
//
module.exports.txNodeTrxInListReq = async (fromD, toD, walletName, net) => {
    //
    let apiRoutePath  = '/view/trxin/selectlist';
    console.log(apiRoutePath);

    let selectedConfig = '';
    if(net == 'real')
        selectedConfig = config.SCH_CONFIG_REAL
    else if(net == 'test')
        selectedConfig = config.SCH_CONFIG_TEST
    else if(net == 'vServer')   
        selectedConfig = config.SCH_CONFIG_VIRTUAL
    //selectedConfig = (net == 'real')? config.SCH_CONFIG_REAL : config.SCH_CONFIG_TEST

    //
    let curTs = Date.now();

    let schCurTs = txSchUtil.ts2Date(curTs);
    console.log("schCurTs: "+ schCurTs);
    
    //
    let sig = await txSchUtil.genSig(schNodeApiKey, schCurTs, schNodeSecretKey);

    let reqParam = {
        apiKey : schNodeApiKey,
        timestamp : schCurTs,
        version : schNodeVer,
        signature : sig, 
        symbol : schNodeSymbol,
    };

    if (fromD != undefined && fromD.length > 0)
    {
        reqParam.FROMD = fromD;
    }

    if (toD != undefined && toD.length > 0)
    {
        reqParam.TOD = toD;
    }

    if (walletName != undefined && walletName.length > 0)
    {
        reqParam.TO = walletName;
    }

    let postData = JSON.stringify(reqParam);

    console.log("txNodeTrxInListReq : " + postData);

    let apiRes = await webApi.APICallProc(apiRoutePath, selectedConfig, webApi.WEBAPI_DEFINE.METHOD.POST, postData);

    //console.log("apiRes : " + JSON.stringify(apiRes));
    return apiRes;
}

////////////////////////////////////////////////////////////////////
//
module.exports.txNodeTrxOutListReq = async (fromD, toD, walletName, net) => {
    //
    let apiRoutePath  = '/view/trxout/selectlist';
    console.log(apiRoutePath);

    let selectedConfig = '';
    if(net == 'real')
        selectedConfig = config.SCH_CONFIG_REAL
    else if(net == 'test')
        selectedConfig = config.SCH_CONFIG_TEST
    else if(net == 'vServer')   
        selectedConfig = config.SCH_CONFIG_VIRTUAL
    //selectedConfig = (net == 'real')? config.SCH_CONFIG_REAL : config.SCH_CONFIG_TEST

    //
    let curTs = Date.now();

    let schCurTs = txSchUtil.ts2Date(curTs);
    // console.log("schCurTs: "+ schCurTs);
    
    //
    let sig = await txSchUtil.genSig(schNodeApiKey, schCurTs, schNodeSecretKey);

    let reqParam = {
        apiKey : schNodeApiKey,
        timestamp : schCurTs,
        version : schNodeVer,
        signature : sig, 
        symbol : schNodeSymbol,
    };

    if (fromD != undefined && fromD.length > 0)
    {
        reqParam.FROMD = fromD;
    }

    if (toD != undefined && toD.length > 0)
    {
        reqParam.TOD = toD;
    }

    if (walletName != undefined && walletName.length > 0)
    {
        reqParam.TO = walletName;
    }

    let postData = JSON.stringify(reqParam);

    console.log("txNodeTrxOutListReq : " + postData);

    let apiRes = await webApi.APICallProc(apiRoutePath, selectedConfig, webApi.WEBAPI_DEFINE.METHOD.POST, postData);

    //console.log("apiRes : " + JSON.stringify(apiRes));
    return apiRes;
}

////////////////////////////////////////////////////////////////////
//
module.exports.txNodeHistListReq = async (fromD, toD, usr_no, serial, net) => {
    //
    let apiRoutePath  = '/view/nodehist/selectlist';
    console.log(apiRoutePath);

    let selectedConfig = '';
    if(net == 'real')
        selectedConfig = config.SCH_CONFIG_REAL
    else if(net == 'test')
        selectedConfig = config.SCH_CONFIG_TEST
    else if(net == 'vServer')   
        selectedConfig = config.SCH_CONFIG_VIRTUAL
    //selectedConfig = (net == 'real')? config.SCH_CONFIG_REAL : config.SCH_CONFIG_TEST

    //
    let curTs = Date.now();

    let schCurTs = txSchUtil.ts2Date(curTs);
    console.log("schCurTs: "+ schCurTs);
    
    //
    let sig = await txSchUtil.genSig(schNodeApiKey, schCurTs, schNodeSecretKey);

    let reqParam = {
        apiKey : schNodeApiKey,
        timestamp : schCurTs,
        version : schNodeVer,
        signature : sig, 
        symbol : schNodeSymbol
    };

    if (fromD != undefined && fromD.length > 0)
    {
        reqParam.FROMD = fromD;
    }

    if (toD != undefined && toD.length > 0)
    {
        reqParam.TOD = toD;
    }

    if (usr_no != undefined && usr_no.length > 0)  
    {
        reqParam.IDX = usr_no;
    }

    if (serial != undefined && serial.length > 0)
    {
        reqParam.SERIAL = serial;
    }

    let postData = JSON.stringify(reqParam);

    console.log("txNodeHistListReq : " + postData);
    
    let apiRes = await webApi.APICallProc(apiRoutePath, selectedConfig, webApi.WEBAPI_DEFINE.METHOD.POST, postData);

    //console.log("apiRes : " + JSON.stringify(apiRes));
    return apiRes;
}
