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

const schUserSecretKey = "38df3a8e044d47e891a51f539633a391"
const schUserApiKey = "a2320fb0bb92478a93d0608e2507952a";
const schUserVer = "V1.0.0";
const schUserSymbol = "user";

//
// module.exports.schLastDay = "20310331";

////////////////////////////////////////////////////////////////////
//

module.exports.txUserListReq = async (fromD, toD, walletName, net) => {
    //
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

    //
    let curTs = Date.now();

    let schCurTs = txSchUtil.ts2Date(curTs);
    console.log("schCurTsUser: "+ schCurTs);
    
    //
    let sig = await txSchUtil.genSig(schUserApiKey, schCurTs, schUserSecretKey);

    let reqParam = {
        apiKey : schUserApiKey,
        timestamp : schCurTs,
        version : schUserVer,
        signature : sig, 
        symbol : schUserSymbol
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
        reqParam.addr = walletName;
    }  

    let postData = JSON.stringify(reqParam);

    console.log("txUserListReq : " + postData);
    // console.log("================================================");
    // console.log("APICallProc_apiRoutePath1: " + apiRoutePath);
    // console.log("APICallProc_SCH_CONFIG1: " + JSON.stringify(config.SCH_CONFIG));
    // console.log("APICallProc_WEBAPI_DEFINE.METHOD.POST1: " +  webApi.WEBAPI_DEFINE.METHOD.POST);
    
    let apiRes = await webApi.APICallProc(apiRoutePath, selectedConfig, webApi.WEBAPI_DEFINE.METHOD.POST, postData);
   
   // console.log("apiRes : " + JSON.stringify(apiRes));
    return apiRes;
}

////////////////////////////////////////////////////////////////////
//
//
module.exports.txUserTrxInListReq = async (fromD, toD, walletName, net) => {
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
    let sig = await txSchUtil.genSig(schUserApiKey, schCurTs, schUserSecretKey);

    let reqParam = {
        apiKey : schUserApiKey,
        timestamp : schCurTs,
        version : schUserVer,
        signature : sig, 
        symbol : schUserSymbol,

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

    console.log("txUserTrxInListReq : " + postData);

    let apiRes = await webApi.APICallProc(apiRoutePath, selectedConfig, webApi.WEBAPI_DEFINE.METHOD.POST, postData);

    //console.log("apiRes : " + JSON.stringify(apiRes));
    return apiRes;
}

////////////////////////////////////////////////////////////////////
//
//
module.exports.txUserTrxOutListReq = async (fromD, toD, walletName, net) => {
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
    console.log("schCurTs: "+ schCurTs);
    
    //
    let sig = await txSchUtil.genSig(schUserApiKey, schCurTs, schUserSecretKey);

    let reqParam = {
        apiKey : schUserApiKey,
        timestamp : schCurTs,
        version : schUserVer,
        signature : sig, 
        symbol : schUserSymbol, 
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

    console.log("txUserTrxOutListReq : " + postData);

    let apiRes = await webApi.APICallProc(apiRoutePath, selectedConfig, webApi.WEBAPI_DEFINE.METHOD.POST, postData);

    //console.log("apiRes : " + JSON.stringify(apiRes));
    return apiRes;
}

////////////////////////////////////////////////////////////////////
//

module.exports.txUserBuyHistListReq = async (fromD, toD, walletName, net) => {
    //
    let apiRoutePath  = '/view/buyhist/selectlist';
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
    let sig = await txSchUtil.genSig(schUserApiKey, schCurTs, schUserSecretKey);

    let reqParam = {
        apiKey : schUserApiKey,
        timestamp : schCurTs,
        version : schUserVer,
        signature : sig, 
        symbol : schUserSymbol, 
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

    console.log("txUserBuyHistListReq : " + postData);

    let apiRes = await webApi.APICallProc(apiRoutePath, selectedConfig, webApi.WEBAPI_DEFINE.METHOD.POST, postData);

    //console.log("apiRes : " + JSON.stringify(apiRes));
    return apiRes;
}

////////////////////////////////////////////////////////////////////
//
//
module.exports.txUserUnlockHistListReq = async (usrNo, net) => {
    //
    let apiRoutePath  = '/view/unlockhist/selectlist';
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
    let sig = await txSchUtil.genSig(schUserApiKey, schCurTs, schUserSecretKey);

    let reqParam = {
        apiKey : schUserApiKey,
        timestamp : schCurTs,
        version : schUserVer,
        signature : sig, 
        symbol : schUserSymbol, 
    };

    if (usrNo != undefined && usrNo.length > 0)   
    {
        reqParam.USR_NO = usrNo;
    }

    let postData = JSON.stringify(reqParam);

    console.log("txUserUnlockHistListReq : " + postData);

    let apiRes = await webApi.APICallProc(apiRoutePath, selectedConfig, webApi.WEBAPI_DEFINE.METHOD.POST, postData);

    //console.log("apiRes : " + JSON.stringify(apiRes));
    return apiRes;
}
