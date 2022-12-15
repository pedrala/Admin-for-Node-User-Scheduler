import { errorHandler } from "../public/js/common";
import contract_actions from "../../../../../conf/contract_actions.json";
import fs from 'fs';
import { captureRejectionSymbol } from "events";
import request from "request";
import moment from "moment";
import Ber from "asn1";
import http from "http";
//
const util = require('./../apiLib/utils/commonUtil.js');
const txSchNode = require('./../apiLib/tx/txSchNode.js');
const txSchUser = require('./../apiLib/tx/txSchUser.js');
const txSchNodeView = require('./../apiLib/tx/txSchNodeView.js');
const txSchUserView = require('./../apiLib/tx/txSchUserView.js');
const txSchUtil = require('./../apiLib/tx/txSchUtil.js');
const define = require('./../configs/define.js');

const schNodeSecretKey = "38df3a8e044d47e891a51f539633a392"
const schNodeApiKey = "a2310fb0bb92478a93d0608e2507955f";
const schNodeVer = "V1.0.0";
const schNodeSymbol = "node";



/**
 * get gettxNodeList in Node List page
 * @event getTxNodeList
 * @param 
 */
export const getTxNodeList = async (req, res) => {   
    const { query: { fromDate , toDate, wName, net} } = req;   

    console.log("fromDate:" + fromDate);  
    console.log("toDate:" + toDate);  
    console.log("wName:" + wName);  
    console.log("net:" + net);  

    let arr = [];
    // let apiRes = getTxSchNodeView(walletName);
    let d = await txSchNodeView.txNodeListReq( fromDate, toDate,  wName, net );

    if (d.status == "true") {
       // console.log("totalCount : " + d.data.totalCount);
        
        for (let i = 0; i < d.data.reqList.length; i++) {
            const data = d.data.reqList[i];
            arr.push(
                {
                    "no": data.no,
                    "amount": Number.parseFloat(data.amount).toFixed(9),
                    "weight": data.weight,
                    "taker_fee": data.taker_fee,
                    "i_amount": Number.parseFloat(data.i_amount).toFixed(9),
                    "t_amount": Number.parseFloat(data.t_amount).toFixed(9),
                    "t_cnt": data.t_cnt,
                    "inout": data.inout,
                    "prev_amount": Number.parseFloat(data.prev_amount).toFixed(9),
                    "txcount": data.txcount,
                    "t_fee": Number.parseFloat(data.t_fee).toFixed(9),
                    "u_tm": data.u_tm,
                    "v_amount": Number.parseFloat(data.v_amount).toFixed(9),
                    "cma": data.cma,
                    "maker_fee": Number.parseFloat(data.maker_fee).toFixed(9),
                    "c_tm": data.c_tm,
                    "addr": data.addr,
                    "usr_no": data.usr_no
                }
            );
           // console.log("arr:" + JSON.stringify(arr) + "\n");            
        };      
    }

    res.send({
        result: arr
    });
}

/**
 * get getTxNodeHistList in Node History List page
 * @event getTxNodeHistList
 * @param 
 */
 export const getTxNodeHistList = async (req, res) => {  
    // for (let output in req){
    //     console.log("req_objVal: "+JSON.stringify(output))   
    // } 
    // console.log("query : "+JSON.stringify(req.query));      

    console.log("===================================================");  
    const { query: { fromDate , toDate, usrNo , serial, net} } = req;   
    console.log("fromDate:" + fromDate);  
    console.log("toDate:" + toDate);  
    console.log("usrNo:" + usrNo);  
    console.log("serial:" + serial);  
    console.log("net:" + net);  

    let arr = [];
    // let apiRes = getTxSchNodeView(walletName);
    let d = await txSchNodeView.txNodeHistListReq( fromDate, toDate, usrNo, serial, net );

    if (d.status == "true") {
      // console.log("totalCount : " + d.data.totalCount);
        
        for (let i = 0; i < d.data.reqList.length; i++) {
            const data = d.data.reqList[i];
            arr.push(
                {
                    "reward": data.reward,
                    "u_tm": data.u_tm,
                    "serial": data.serial,
                    "price": data.price,
                    "startday": data.startday,
                    "lastday": data.lastday,
                    "d_tm": data.d_tm,
                    "c_tm": data.c_tm,
                    "idx": Number.parseInt(data.idx),
                    "maxp": data.maxp                   
                }
            );
          //  console.log("arr:" + JSON.stringify(arr) + "\n");            
        };
    }

    res.send({
        result: arr
    });
}


/**
 * get getTxNodeTrxInList in NodeTrxInList page
 * @event getTxNodeTrxInList
 * @param req
 */
 export const getTxNodeTrxInList = async (req, res) => {   
    const { query: { fromDate , toDate, wName, net} } = req;   

    console.log("fromDate:" + fromDate);  
    console.log("toDate:" + toDate);  
    console.log("wName:" + wName);  
    console.log("net:" + net);  

    let arr = [];

    let d = await txSchNodeView.txNodeTrxInListReq( fromDate, toDate, wName, net );
    //console.log("getTxNodeTrxInList : " + JSON.stringify(d));     

    if (d.status == "true") {     
             
        for (let i = 0; i < d.data.reqList.length; i++) {
            const data = d.data.reqList[i];
            arr.push(
                {
                    "no": data.no,
                    "amount": Number.parseFloat(data.amount).toFixed(9),
                    "txid": data.txid,
                    "from": data.from,
                    "c_tm": data.c_tm,
                    "to": data.to,
                    "confirm_num": data.confirm_num,
                    "usr_no": data.usr_no
                }
            );
           // console.log("arr:" + JSON.stringify(arr) + "\n");            
        };   
    }

    res.send({
        result: arr
    });
}


/**
 * get TxNodeTrxOutList in NodeTrxOutList page
 * @event getTxNodeTrxOutList
 * @param 
 */
 export const getTxNodeTrxOutList = async (req, res) => {  
    const { query: { fromDate , toDate, wName, net} } = req;   

    console.log("fromDate:" + fromDate);  
    console.log("toDate:" + toDate);  
    console.log("wName:" + wName);  
    console.log("net:" + net);  

    let arr = [];
    let d = await txSchNodeView.txNodeTrxOutListReq( fromDate, toDate, wName, net );

    if (d.status == "true") {       
        
        for (let i = 0; i < d.data.reqList.length; i++) {
            const data = d.data.reqList[i];
            arr.push(
                {
                    "no": data.no,
                    "amount": Number.parseFloat(data.amount).toFixed(9),
                    "approval": data.approval,
                    "fee": Number.parseFloat(data.fee).toFixed(9),
                    "txid": data.txid,
                    "confirm_num": Number.parseInt(data.confirm_num),
                    "done": data.done,
                    "external": data.external,
                    "d_tm": data.d_tm,
                    "from": data.from,
                    "c_tm": data.c_tm,
                    "to": data.to,
                    "usr_no": data.usr_no                
                }
            );
            //console.log("arr:" + JSON.stringify(arr) + "\n");            
        };            
    }

    res.send({
        result: arr
    });
}



/**
 * get getTxUserList in User List page
 * @event getTxUserList
 * @param 
 */
export const getTxUserList = async (req, res) => {
    const { query: { fromDate , toDate, wName, net} } = req;   
    console.log("fromDate:" + fromDate);  
    console.log("toDate:" + toDate);  
    console.log("wName:" + wName);  
    console.log("net:" + net);  

    let arr = [];
    let d = await txSchUserView.txUserListReq(  fromDate, toDate, wName, net);
    console.log("==================================================================================");

    if (d.status == "true") {
        // console.log("res:"+ JSON.stringify(d.data.reqList));

        for (let i = 0; i < d.data.reqList.length; i++) {
            const data = d.data.reqList[i];
            arr.push(
                {
                    "no": data.no,
                    "amount": Number.parseFloat(data.amount).toFixed(9),
                    "weight": data.weight,
                    "taker_fee": data.taker_fee,
                    "i_amount": Number.parseFloat(data.i_amount).toFixed(9),
                    "t_amount": Number.parseFloat(data.t_amount).toFixed(9),
                    "t_cnt": data.t_cnt,
                    "inout": data.inout,
                    "prev_amount": Number.parseFloat(data.prev_amount).toFixed(9),
                    "txcount": data.txcount,
                    "t_fee": Number.parseFloat(data.t_fee).toFixed(9),
                    "u_tm": data.u_tm,
                    "v_amount": Number.parseFloat(data.v_amount).toFixed(9),
                    "cma": data.cma,
                    "maker_fee": Number.parseFloat(data.maker_fee).toFixed(9),
                    "c_tm": data.c_tm,
                    "addr": data.addr,
                    "usr_no": data.usr_no
                }
            );
            //console.log("arr:" + JSON.stringify(arr) + "\n");            
        };       
    }
    res.send({
        result: arr
    });
    //await txSchUserView.txUserListReq(walletName);     
}

/**
 * get getTxUserTrxInList in User List page
 * @event getTxUserTrxInList
 * @param 
 */
 export const getTxUserTrxInList = async (req, res) => {
    const { query: { fromDate , toDate, wName, net} } = req;   
    console.log("fromDate:" + fromDate);  
    console.log("toDate:" + toDate);  
    console.log("wName:" + wName);  
    console.log("net:" + net);  

    let arr = [];
    let d = await txSchUserView.txUserTrxInListReq( fromDate, toDate, wName, net  );
    //let d = await txSchUserView.txUserTrxInListReq( fromDate, toDate, name );
    console.log("==================================================================================");

    if (d.status == "true") {
        //console.log("res:"+ JSON.stringify(d.data.reqList));

        for (let i = 0; i < d.data.reqList.length; i++) {
            const data = d.data.reqList[i];
            arr.push(
                {
                    "no": data.no,
                    "amount": Number.parseFloat(data.amount).toFixed(9),
                    "nftids": data.nftids,
                    "txid": data.txid,
                    "from": data.from,
                    "c_tm": data.c_tm,
                    "to": data.to,
                    "confirm_num": data.confirm_num,
                    "usr_no": data.usr_no                  
                }
            );
           // console.log("arr:" + JSON.stringify(arr) + "\n");            
        };       
    }

    res.send({
        result: arr
    });   
    //await txSchUserView.txUserListReq(walletName);     
}


/**
 * get getTxUserTrxOutList in User List page
 * @event getTxUserTrxOutList
 * @param 
 */
 export const getTxUserTrxOutList = async (req, res) => {
    const { query: { fromDate , toDate, wName , net} } = req;   
    console.log("fromDate:" + fromDate);  
    console.log("toDate:" + toDate);  
    console.log("wName:" + wName);
    console.log("net:" + net);  

    let arr = [];
    let d = await txSchUserView.txUserTrxOutListReq( fromDate, toDate, wName, net );
    console.log("==================================================================================");

    if (d.status == "true") {
        // console.log("res:"+ JSON.stringify(d.data.reqList));

        for (let i = 0; i < d.data.reqList.length; i++) {
            const data = d.data.reqList[i];
            arr.push(
                {
                    "no": data.no,
                    "amount": Number.parseFloat(data.amount).toFixed(9),
                    "approval": data.approval,
                    "fee": Number.parseFloat(data.fee),
                    "txid": data.txid,
                    "confirm_num": Number.parseInt(data.confirm_num),
                    "done": data.done,
                    "external": data.external,
                    "d_tm": data.d_tm,
                    "from": data.from,
                    "c_tm": data.c_tm,
                    "to": data.to,
                    "usr_no": data.usr_no,                 
                }
            );
            //console.log("arr:" + JSON.stringify(arr) + "\n");            
        };        
    }

    res.send({
        result: arr
    });
    //await txSchUserView.txUserListReq(walletName);     
}


/**
 * get getTxUserBuyHistList in User List page
 * @event getTxUserBuyHistList
 * @param 
 */
 export const getTxUserBuyHistList = async (req, res) => {
    const { query: { fromDate , toDate, wName , net} } = req;   
    console.log("fromDate:" + fromDate);  
    console.log("toDate:" + toDate);  
    console.log("wName:" + wName);  
    console.log("net:" + net);  

    let arr = [];
    let d = await txSchUserView.txUserBuyHistListReq( fromDate, toDate, wName, net );
    console.log("==================================================================================");

    if (d.status == "true") {
       //  console.log("res:"+ JSON.stringify(d.data.reqList));

        for (let i = 0; i < d.data.reqList.length; i++) {
            const data = d.data.reqList[i];
            arr.push(
                {
                    "reward": Number.parseFloat(data.reward).toFixed(9),
                    "naddr": data.naddr,
                    "startday": data.startday,
                    "nftid": data.nftid,
                    "tid": data.tid,
                    "wid": data.wid,
                    "u_tm": data.u_tm,
                    "price": data.price,
                    "lastday": data.lastday,
                    "d_tm": data.d_tm,
                    "c_tm": data.c_tm,
                    "idx": data.idx,
                    "nidx": data.nidx,
                    "addr": data.addr,
                    "hash": data.hash,
                    "status": data.status,
                    "maxp": data.maxp                 
                }
            );
           // console.log("arr:" + JSON.stringify(arr) + "\n");            
        };
    }
    res.send({
        result: arr
    });
    //await txSchUserView.txUserListReq(walletName);     
}

/**
 * get getTxUserBuyHist in User List page
 * @event getTxUserBuyHist
 * @param 
 */
 export const getTxUserBuyHist = async (req, res) => {
    const { query: { wName, net} } = req;   
    console.log("wName:" + wName);  
    console.log("net:" + net);  

    let arr = [];
    let d = await txSchUserView.txUserBuyHistReq( wName, net );
    console.log("==================================================================================");

    if (d.status == "true") {
        // console.log("res:"+ JSON.stringify(d.data.reqList));

        for (let i = 0; i < d.data.reqList.length; i++) {
            const data = d.data.reqList[i];
            arr.push(
                {
                    "no": data.no,
                    "amount": Number.parseFloat(data.amount).toFixed(9),
                    "weight": data.weight,
                    "taker_fee": data.taker_fee,
                    "i_amount": Number.parseFloat(data.i_amount).toFixed(9),
                    "t_amount": Number.parseFloat(data.t_amount).toFixed(9),
                    "t_cnt": data.t_cnt,
                    "inout": data.inout,
                    "prev_amount": Number.parseFloat(data.prev_amount).toFixed(9),
                    "txcount": data.txcount,
                    "t_fee": Number.parseFloat(data.t_fee).toFixed(9),
                    "u_tm": data.u_tm,
                    "v_amount": Number.parseFloat(data.v_amount).toFixed(9),
                    "cma": data.cma,
                    "maker_fee": Number.parseFloat(data.maker_fee).toFixed(9),
                    "c_tm": data.c_tm,
                    "addr": data.addr,
                    "usr_no": data.usr_no
                }
            );
          //  console.log("arr:" + JSON.stringify(arr) + "\n");            
        };
    }
    
    res.send({
        result: arr
    });
    //await txSchUserView.txUserListReq(walletName);     
}

/**
 * get getTxUserUnlockHistList in User List page
 * @event getTxUserUnlockHistList
 * @param 
 */
 export const getTxUserUnlockHistList = async (req, res) => {
    const { query: { usrNo, net} } = req;   
    console.log("usrNo:" + usrNo);  
    console.log("net:" + net);  

    let arr = [];
    let d = await txSchUserView.txUserUnlockHistListReq(  usrNo, net );
    console.log("==================================================================================");

    if (d.status == "true") {
        // console.log("res:"+ JSON.stringify(d.data.reqList));

        for (let i = 0; i < d.data.reqList.length; i++) {
            const data = d.data.reqList[i];
            arr.push(
                {
                    "no": data.no,
                    "amount": Number.parseFloat(data.amount).toFixed(9),
                    "weight": data.weight,
                    "taker_fee": Number.parseFloat(data.taker_fee).toFixed(9),
                    "i_amount": Number.parseFloat(data.i_amount).toFixed(9),
                    "t_amount": Number.parseFloat(data.t_amount).toFixed(9),
                    "t_cnt": data.t_cnt,
                    "inout": data.inout,
                    "prev_amount": Number.parseFloat(data.prev_amount).toFixed(9),
                    "txcount": data.txcount,
                    "t_fee": Number.parseFloat(data.t_fee).toFixed(9),
                    "u_tm": data.u_tm,
                    "v_amount": Number.parseFloat(data.v_amount).toFixed(9),
                    "cma": data.cma,
                    "maker_fee": Number.parseFloat(data.maker_fee).toFixed(9),
                    "c_tm": data.c_tm,
                    "addr": data.addr,
                    "usr_no": data.usr_no
                }
            );
            //console.log("arr:" + JSON.stringify(arr) + "\n");            
        };      
    }

    res.send({
        result: arr
    });
    //await txSchUserView.txUserListReq(walletName);     
}

/**
 * get getTxUserUnlockHist in User List page
 * @event getTxUserUnlockHist
 * @param 
 */
 export const getTxUserUnlockHist = async (req, res) => {
    const { query: { name, net} } = req;   
    console.log("name:" + name);  
    console.log("net:" + net);  

    let arr = [];
    let d = await txSchUserView.txUserUnlockHistReq(  name, net );
    console.log("==================================================================================");

    if (d.status == "true") {
        // console.log("res:"+ JSON.stringify(d.data.reqList));

        for (let i = 0; i < d.data.reqList.length; i++) {
            const data = d.data.reqList[i];
            arr.push(
                {
                    "no": data.no,
                    "amount": Number.parseFloat(data.amount).toFixed(9),
                    "weight": data.weight,
                    "taker_fee": data.taker_fee,
                    "i_amount": Number.parseFloat(data.i_amount).toFixed(9),
                    "t_amount": Number.parseFloat(data.t_amount).toFixed(9),
                    "t_cnt": data.t_cnt,
                    "inout": data.inout,
                    "prev_amount": Number.parseFloat(data.prev_amount).toFixed(9),
                    "txcount": data.txcount,
                    "t_fee": Number.parseFloat(data.t_fee).toFixed(9),
                    "u_tm": data.u_tm,
                    "v_amount": Number.parseFloat(data.v_amount).toFixed(9),
                    "cma": data.cma,
                    "maker_fee": Number.parseFloat(data.maker_fee).toFixed(9),
                    "c_tm": data.c_tm,
                    "addr": data.addr,
                    "usr_no": data.usr_no
                }
            );
            //console.log("arr:" + JSON.stringify(arr) + "\n");            
        };    
    }

    res.send({
        result: arr
    });
    //await txSchUserView.txUserListReq(walletName);     
}

/**
 * get getTxUserRewardList in User List page
 * @event getTxUserRewardList
 * @param 
 */
//  export const getTxUserRewardList = async (req, res) => {
//     const { query: { name} } = req;   
//     console.log("name:" + name);  

//     let arr = [];
//    // let d = await txSchUserView.txUserUnlockHistReq(  name, net );
//     console.log("==================================================================================");
//     console.log("apiRes.status:" + JSON.stringify(d.status));

//     if (d.status == "true") {
//         // console.log("res:"+ JSON.stringify(d.data.reqList));

//         for (let i = 0; i < d.data.reqList.length; i++) {
//             const data = d.data.reqList[i];
//             arr.push(
//                 {
//                     "no": data.no,
//                     "amount": Number.parseFloat(data.amount).toFixed(9),
//                     "weight": data.weight,
//                     "taker_fee": data.taker_fee,
//                     "i_amount": Number.parseFloat(data.i_amount).toFixed(9),
//                     "t_amount": Number.parseFloat(data.t_amount).toFixed(9),
//                     "t_cnt": data.t_cnt,
//                     "inout": data.inout,
//                     "prev_amount": Number.parseFloat(data.prev_amount).toFixed(9),
//                     "txcount": data.txcount,
//                     "t_fee": Number.parseFloat(data.t_fee).toFixed(9),
//                     "u_tm": data.u_tm,
//                     "v_amount": Number.parseFloat(data.v_amount).toFixed(9),
//                     "cma": data.cma,
//                     "maker_fee": Number.parseFloat(data.maker_fee).toFixed(9),
//                     "c_tm": data.c_tm,
//                     "addr": data.addr,
//                     "usr_no": data.usr_no
//                 }
//             );
//             //console.log("arr:" + JSON.stringify(arr) + "\n");            
//         };

//         res.send({
//             result: arr
//         });
//     }
//     //await txSchUserView.txUserListReq(walletName);     
// }

/**
 * post TxClusterInfo in Cluster Info page
 * @event postTxClusterInfo
 * @param 
 */
 export const postTxClusterInfo = async (req, res) => {
    const { body: { network, node } } = req
    const reqBody = req.body;
    let url, result, port, nodePortList;

    console.log("network : " + reqBody.network);
    console.log("node : " + reqBody.node);

    if(reqBody.network == 'apid')
    {
        nodePortList = define.NODE_PORT.dev;
    }
    else if(reqBody.network == 'apih')
    {
        nodePortList = define.NODE_PORT.halla;
    }
    else
    {
        nodePortList = define.NODE_PORT.main;
    } 

    port = nodePortList[reqBody.node];
    //console.log("~ port", port);

    url = `http://${reqBody.network}.finlscan.org:${port}/node/cluster/chk`;
    // url = `http://apid.finlscan.org:14200//node/cluster/chk`;
    
    getRequest(url).then((d) => {

        //console.log("d:"+JSON.stringify(d));

        if (!d.errorCode) {
            const hwInfo = d.contents.result.myHwInfo;
            let isVirtual = { Hypervisor: hwInfo.Hypervisor, Virtualization: hwInfo.Virtualization };
            let storageInfo = hwInfo.storage;

            let storage = { hdd: '', ssd: '', nvme: '' };
            
            if (storageInfo.hdd.size.length) {
               // console.log("storageInfo.hdd.size.length ", storageInfo.hdd.size.length);
                storage.kind = 'hdd';
                storage.size = storageInfo.hdd.size;
                storage.raid = storageInfo.hdd.raid.type;
                storage.hdd = storageInfo.hdd;
            } else {
              //  console.log("storageInfo.hdd.size.length ", storageInfo.hdd.size.length);
                delete storage.hdd;
            }

            if (storageInfo.ssd.size.length && storageInfo.ssd.size[0] > 0) {
              //  console.log("storageInfo.ssd.size.length ", storageInfo.ssd.size.length);
                storage.kind = 'ssd';
                storage.size = storageInfo.ssd.size;
                storage.raid = storageInfo.ssd.raid.type;
                storage.ssd = storageInfo.ssd;
            } else {
              //  console.log("storageInfo.ssd.size.length ", storageInfo.ssd.size.length);
                delete storage.ssd;
            }

            if (storageInfo.nvme.size.length) {
               // console.log("storageInfo.nvme.size.length ", storageInfo.nvme.size.length);
                storage.kind = 'nvme';
                storage.size = storageInfo.nvme.size;
                storage.raid = storageInfo.nvme.raid.type;
                storage.nvme = storageInfo.nvme;
            } else {
               // console.log("storageInfo.nvme.size.length ", storageInfo.nvme.size.length);
                delete storage.nvme;
            }

            result =
            {
                response: d.contents.res,
                virtual: isVirtual,
                ip: hwInfo.network.ip,             
                memory: hwInfo.mem,
                cpu: hwInfo.cpu,    
                useRate: hwInfo.useRate,    
                disk: hwInfo.df,
                storage: storage
            };                  
            
            //console.log("res:" + JSON.stringify(result))

            res.send({
                result: result
            });
        }      
    
    }).catch((error) => {
     //   console.log(JSON.stringify(error));     
        res.send({
            err: error
        });     
    });
};


/**
 * format daily transaction data when its data is a null or an error
 * @event makeData
 * @param
 */
function makeData() {
    let result = [];
    const TWO_WEEK = 14;

    for (let i = 0; i < TWO_WEEK; i++) {
        result.push({
            date: moment().subtract(i, 'days').format('MMM DD'),
            ctsCnt: 0
        });
    };

    return result.reverse();
};

/**
 * format daily transaction data
 * @event resetData
 * @param
 */
function resetData(historyList) {
    let result = [];

    for (let i = 0; i < historyList.length; i++) {
        result.push({
            date: moment(historyList[i].sttMs).format('LL').split(',')[0],
            ctsCnt: Number(historyList[i].txsCnt)
        });
    };

    return result.reverse();
};


/**
 * APICallProc in Contract page
 * @event APICallProc
 * @param {apiPath, config, method, postData }
 */
const APICallProc = async (apiPath, config, method, postData) => {
    let webApiConfig = copyObj(config);

    webApiConfig.path = apiPath;
    webApiConfig.method = method;
    if (postData) {

        webApiConfig.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    // console.log("🚀 ~ file: apiController.js ~ line 631 ~ APICallProc ~ webApiConfig", webApiConfig)

    const apiRes = await APICall(webApiConfig, postData);

    return apiRes;
};

/**
 * APICall in Contract page
 * @event APICall
 * @param {httpConfig, data}
 */
const APICall = async (httpConfig, data) => {
    let ret = await http_CB(httpConfig, data).then((resData) => {
        return resData;
    }).catch((error) => {
        // logger.error(JSON.stringify({ errorCode: 3002, msg: error.message }));
        return { errorCode: '3002', msg: error };
        // return { errorCode: config.CONTRACT_ERROR_JSON.FB_SVR_ERROR.ERROR_CODE, msg: error.message };
    });
    return ret;
}

/**
 * http_CB
 * @event http_CB
 * @param {httpConfig, postData}
 */
const http_CB = async (httpConfig, postData) => {
    let retryCount = 1;
    const retryRequest = error => {
        // logger.error({ errorCode: 3001, msg: error.message });

        if (retryCount === WEBAPI_DEFINE.RETRY.THRESHOLD) {
            return new Error(error);
        };

        retryCount++;

        setTimeout(() => {
            http_CB(httpConfig, postData);
        }, WEBAPI_DEFINE.RETRY.INTERVAL);
    }

    return new Promise((resolve, reject) => {
        let req = http.request(httpConfig, (res) => {
            if (res.statusCode < WEBAPI_DEFINE.HTTP_STATUS_CODE.OK
                || res.status >= WEBAPI_DEFINE.HTTP_STATUS_CODE.MULTIPLE_CHOICES) {
                return reject(new Error('statusCode=' + res.statusCode));
            };

            let resData = [];
            let concat_resData;

            res.on('data', (data) => {
                resData.push(data);
            });

            res.on('end', () => {
                try {
                    concat_resData = Buffer.concat(resData).toString();

                    if (isJsonString(concat_resData)) {
                        concat_resData = JSON.parse(concat_resData);
                    }
                } catch (e) {
                    reject(e);
                }
                resolve(concat_resData);
            });

            res.on('error', error => {
                res.abort();

                retryRequest(error);
            });
        });

        req.on('timeout', () => {
            resolve({ "errorCode": config.CONTRACT_ERROR_JSON.FB_NO_DATA });
        });

        req.on('error', (err) => {
            reject(err);
        });

        if (postData) {
            // req.write(JSON.stringify(postData));
            req.write(postData);
        }
        req.end();
    })
}


/**
 * Returns shorten action name
 * @method typeFor
 * @return result
 */
function typeFor(action) {
    let result = '';
    if (contract_actions.TOKEN.STT <= action && action <= contract_actions.TOKEN.END) {
        const TEXT = `TX UTIL TOKEN ${action}`;

        if (contract_actions.TOKEN.SECURITY == action) {
            result = `TRANSFER ${action}`;
            //result = `TX SEC TOKEN ${action}`;
        };
        if (contract_actions.TOKEN.UTILITY_PLATINUM.STT < action && action <= contract_actions.TOKEN.UTILITY_PLATINUM.END) {
            result = TEXT;
        };
        if (contract_actions.TOKEN.UTILITY_GOLD.STT < action && action <= contract_actions.TOKEN.UTILITY_GOLD.END) {
            result = TEXT;
        };
        if (contract_actions.TOKEN.UTILITY.STT < action && action <= contract_actions.TOKEN.UTILITY.END) {
            result = TEXT;
        };
    } else if (contract_actions.CONTRACT.STT <= action && action <= contract_actions.CONTRACT.END) {
        const obj = contract_actions.CONTRACT.DEFAULT;

        for (const key in obj) {
            //  console.log("action:", action)
            if (obj[key] == action) {
                //TOKEN_TX -> TRNASFER 사용자에게 노출(contract_actions.json 은 공통이라 수정하면 안됨)
                if (key == 'TOKEN_TX') {
                    result = 'TRANSFER';
                    break;
                }
                else if (key == 'STT' || key == 'TOKEN_CREATION') {
                    result = 'CRT_TKN';
                    break;
                }
                else if (key == 'CHANGE_TOKEN_PUBKEY') {
                    result = 'CNG_TKEY';
                    break;
                }
                else if (key == 'CHANGE_USER_PUBKEY') {
                    result = 'CNG_UKEY';
                    break;
                }
                else if (key == 'CHANGE_TOKEN') {
                    result = 'CNG_TKN';
                    break;
                }
                else if (key == 'LOCK_TOKEN_TX') {
                    result = 'LOC_TKNTX';
                    break;
                }
                else if (key == 'LOCK_TOKEN_TIME') {
                    result = 'LOC_TKNT';
                    break;
                }
                else if (key == 'LOCK_TOKEN_WALLET') {
                    result = 'LOC_TKNW';

                    break;
                }
                else if (key == 'END') {
                    result = 'END';
                    break;
                }
                else {
                    result = key;
                    break;
                }
            }
        };

        if (contract_actions.CONTRACT.SC.STT <= action && action <= contract_actions.CONTRACT.SC.END) {
            result = 'SC';
        };

        if (contract_actions.CONTRACT.NFT.STT <= action && action <= contract_actions.CONTRACT.NFT.END) {
            result = 'NFT';
        };
    };


    return result;
};

/**
 * copyObj
 * @method copyObj
 * @return {clone}
 */
const copyObj = (obj) => {
    let clone = {};
    for (let i in obj) {
        if (typeof (obj[i]) === "object" && obj[i] !== null) {
            clone[i] = copyObj(obj[i]);
        } else {
            clone[i] = obj[i];
        };
    };
    return clone;
};


const isJsonString = (str) => {
    try {
        var isObj = JSON.parse(str);

        if (isObj && typeof isObj === "object") {
            return true;
        }
    } catch (e) {
        return false;
    }

    return false;
};

const WEBAPI_DEFINE = {
    METHOD: {
        POST: 'POST',
        GET: 'GET'
    },
    NOT_FOUND: "Not Found",
    RESULT_CODE: {
        SUCCESS: 0,
        NOT_REGIST: 1001
    },
    HTTP_STATUS_CODE: {
        OK: 200,
        MULTIPLE_CHOICES: 300
    },
    RETRY: {
        THRESHOLD: 3,
        INTERVAL: 1000
    }
};


/**
 * get apiPath
 * @method apiPath
 * @return {userNo} 
 */
// function apiPath(userNo) {
//     const request = `${url_4000}/contract/tx/token?tAccountAction=0&fromAccount=USER_01&toAccount=USER_0${userNo}&amount=${getRandomInt()}.000&ownerPrikey=%C2%91%C3%90W%C3%B3%3F%C2%AE%C3%88(%C3%93Gu%C3%A2E%5E%C3%97%C3%A2%1A2%C3%BFl%C3%84%C3%B4%C2%96%C2%9Bg%C2%94S_Y%C3%80z1%C2%89%C3%B1_'%C3%9EgS~%C3%93%C2%AB.%7B%C3%9BG%C2%A3%C3%ACw%3A%C2%A5%C2%B9Uq%00%C2%AD%22%C3%90%C3%80%C2%A6%C3%B1%1FS%5DS%C3%91%C2%82G%40%C2%9C%C2%AE%C2%93%C2%BB%16%16%C3%B1I%C3%B3%C2%9D0%C3%A6%C2%9B%17Z%C2%B9%C2%85%C2%93%C2%B8%C3%83%C2%86%C3%90%C3%9B4'%C3%87%2B!H%C3%BB%C3%A0%7B%C3%8B%1F%3C%C3%B2%C2%90%C2%B9T%C2%A2%0Fk%C3%8D%05%C3%9F%C2%82s%C2%98iQ%C2%B8%5B%C2%B4%C3%931%C2%9A_%19%0E&ownerPrikeyPw=asdfQWER1234!%40%23%24&ownerPubkey=0556e1ee126ae9c6d8c65d43688be48ec005a4818d0047901f9efc04f0f370f40b`;
//     return request;
// };

function getRandomInt() {
    return Math.floor(Math.random() * 101 + 1);
};

/**
 * postBase58
 * @event postBase58
 * @param {req}
 */
export const postBase58 = async (req, res) => {
    try {
        const { body: { owner_pubkey, ownerPubkeyFile } } = req;

        fsStart(await extensionCheck(ownerPubkeyFile), owner_pubkey).then(function (data) {
            res.send({
                data
            });
        });
    } catch (error) {
        errorHandler(req, res, error);
    };
};

/**
 * fsStart
 * @event fsStart
 * @param {path, pubkey}
 */
async function fsStart(path, pubkey) {
    return new Promise(function (resolve, reject) {
        fs.exists(path, async function (exists) {  //파일이 있는지 체크
            if (exists) {

                console.log("it's there");

                fs.unlink(path, function (err) { //파일 있으면 삭제
                    if (err) throw err;
                    console.log(`successfully deleted ${path}`);
                });
            } else {
                fs.writeFileSync(path, pubkey, 'binary'); // 없으면 생성
                fs.exists(path, async function (exists) {  //파일이 있는지 체크
                    if (exists) {
                        const key = await cryptoUtil.getPubkey(path); // getKey

                        fs.unlink(path, function (err) { //파일 있으면 삭제
                            if (err) throw err;
                            console.log(`successfully deleted ${path}`);
                        });

                        resolve(key);
                    };
                });
            };
        });
    });
};

/**
 * getRequest
 * @event getRequest
 * @param {url}
 */
function getRequest(url) {
    // console.log("getRequest_url:"+JSON.stringify(url))

    const options = {
        //   proxy:'PROXY URL', 
        uri: url,
        method: 'GET'
    };

    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            try {
                if (error) {
                    // console.log("🚀 ~ file: apiController.js ~ getRequest ~ error", error)
                    console.error(`Request Error : ${error}`);
                    return reject(`Request Error : ${error}`);
                }
                resolve(JSON.parse(body));
            } catch (e) {
                return reject({
                    errorMsg: "Request 실패",
                    error: e
                });
            };
        });
    });
};

/**
 * postRequest
 * @event postRequest
 * @param {apiPath}
 */
function postRequest(apiPath) {
    // console.log("apiPath:"+apiPath)
    const options = {
        uri: apiPath,
        method: 'POST'
    };

    return new Promise(function (resolve, reject) {
        try {
            request.post(options, function (error, response, body) {
                try {
                    if (error) {
                        // console.log("🚀 ~ file: apiController.js ~ postRequest ~ error", error)
                    };

                    if (!error && response.statusCode == 200) {
                        resolve(JSON.parse(body));
                    } else {
                        console.error('Request Error');
                        return reject('Request Error');
                    };
                } catch (e) {
                    return reject({
                        errorMsg: "Request 실패",
                        error: e
                    });
                };
            });
        } catch (error) {
            console.log('error', error);
        };
    });
};

/**
 * extensionCheck
 * @method extensionCheck
 * @return {fileName}
 */
async function extensionCheck(fileName) {
    const
        ran = Math.random().toString(36).substr(2, 11),//랜덤문자열
        extension = fileName.split('.')[1] == 'pem' ? 'pem' : 'fin', //확장자
        path = `./download/ed_${ran}.${extension}`; //path 생성
    return path;
};


/**
 * log
 * @event log
 * @param {params}
 */
function log(params) {
    if (!params) {
        console.log('*************************************************');
    } else {
        console.log(`********************${params}********************`);
    };
};
