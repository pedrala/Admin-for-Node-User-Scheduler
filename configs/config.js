//
const fs = require('fs');
const os = require('os');
//
const cryptoSsl = require("./../../../../../addon/crypto-ssl");
const NETCONF_JSON = JSON.parse(fs.readFileSync("./../../../../conf/netconf.json"));

const KEY_PATH = {
    PW_SEED: NETCONF_JSON.DEF_PATH.PW_DB_ME + '/' + NETCONF_JSON.DB.PW.NAME.SEED, 
    PW_MARIA : NETCONF_JSON.DEF_PATH.PW_DB_ME + '/' + NETCONF_JSON.DB.PW.NAME.MARIA, 
    PW_SHARD : NETCONF_JSON.DEF_PATH.PW_DB_ME + '/' + NETCONF_JSON.DB.PW.NAME.SHARD, 
    PW_REPL_NN : NETCONF_JSON.DEF_PATH.PW_DB_ME + '/' + NETCONF_JSON.DB.PW.NAME.REPL_NN, 
    PW_REPL_ISAG : NETCONF_JSON.DEF_PATH.PW_DB_ME + '/' + NETCONF_JSON.DB.PW.NAME.REPL_ISAG, 
}

// 
const CFG_PATH = {
    CONTRACT_ACTIONS : NETCONF_JSON.DEF_INFO.CONTRACT_ACTIONS,  // './../../../../conf/contract_actions.json', 
    CONTRACT_ERROR : NETCONF_JSON.DEF_INFO.CONTRACT_ERROR,  //'./../../../../conf/contract_error.json',
    NODE_CFG : NETCONF_JSON.DEF_INFO.NODE_CFG,
    MARIA : {
        DB_HOST : NETCONF_JSON.DB.MARIA.HOST, 
        DB_PORT : NETCONF_JSON.DB.MARIA.PORT, 
        DB_USER : NETCONF_JSON.DB.MARIA.USER, 
        PW_MARIA : cryptoSsl.aesDecPw(KEY_PATH.PW_SEED, KEY_PATH.PW_MARIA),
        REPL_USERS : [
            NETCONF_JSON.DB.REPL.USER_ISAG, 
            NETCONF_JSON.DB.REPL.USER_NN, // Temperary Used
        ],
        REPL_USERS_PW : [
            cryptoSsl.aesDecPw(KEY_PATH.PW_SEED, KEY_PATH.PW_REPL_ISAG), 
            cryptoSsl.aesDecPw(KEY_PATH.PW_SEED, KEY_PATH.PW_REPL_NN), // Temperary Used
        ], 
        SHARD_USERS : [
            NETCONF_JSON.DB.SHARD.USER_IS, 
        ],
        SHARD_USERS_PW : [
            cryptoSsl.aesDecPw(KEY_PATH.PW_SEED, KEY_PATH.PW_SHARD), 
        ]
    },
}

const MARIA_CONFIG = {
    host: CFG_PATH.MARIA.DB_HOST,
    port: CFG_PATH.MARIA.DB_PORT,
    user: CFG_PATH.MARIA.DB_USER,
    password: CFG_PATH.MARIA.PW_MARIA,
    // database: ...
    supportBigNumbers: true,
    bigNumberStrings: true,
    connectionLimit : 10
};

//console.log("CFG_PATH:"+JSON.stringify(CFG_PATH));

// Contract Class
// module.exports.CONTRACT_ACTIONS_JSON = JSON.parse(fs.readFileSync(CFG_PATH.CONTRACT_ACTIONS));
// console.log("CONTRACT_ACTIONS_JSON:"+JSON.stringify(CONTRACT_ACTIONS_JSON));

// // Contract Error Code
// module.exports.CONTRACT_ERROR_JSON = JSON.parse(fs.readFileSync(CFG_PATH.CONTRACT_ERROR));
// console.log("CONTRACT_ERROR_JSON:"+JSON.stringify(CONTRACT_ERROR_JSON));

// Version info
module.exports.paddy = (num, padLen, padChar) => {
    let pad_char = typeof padChar !== 'undefined' ? padChar : '0';
    let pad = new Array(1 + padLen).join(pad_char);

    return (pad + num).slice(-pad.length);
}


module.exports.CMD_ENCODING = {
    encoding: 'utf8'
}

module.exports.DB_TEST_MODE = false;
module.exports.DB_TEST_MODE_DROP = false;

// VM true? 1, false? 0
module.exports.IS_VM = 1;

module.exports.TEST_HW_INO = {
    CPU: "Test CPU",
    MEMSIZE: 8,
    MEMSPEED: 1200
}

// IP Control
module.exports.IP_ASSIGN = {
    CTRL: 0,
    DATA: 0,
    REPL: 0
};

// ISAG URL
let ISAG_URL = "api.finlscan.org"; // '203.238.181.162'; // FINL
if (os.hostname().includes('puri'))
{
    // module.exports.ISAG_URL = '220.86.111.197' // PURI
    // module.exports.ISAG_URL = "http://purichain.com"
    ISAG_URL = "www.purichain.com";
}
else if (os.hostname().includes('finlt'))
{
    ISAG_URL = "apih.finlscan.org"; // '203.238.181.164'; // FINLT
}
else if (os.hostname().includes('finld'))
{
    // ISAG_URL = '10.10.11.220'; // FINLD
    ISAG_URL = 'apid.finlscan.org'; // FINLD
}
else if (os.hostname().includes('purit'))
{
    ISAG_URL = "www.purichain.com"; // PURIT
}

const ISAG_PORT = '3000';

module.exports.ISAG_CONFIG = {
    family: 4,
    host: ISAG_URL,
    port: ISAG_PORT,
    json: true,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
}

// FBN URL
let FBN_URL = "api.finlscan.org"; // '203.238.181.162'; // FINL
if (os.hostname().includes('puri'))
{
    // module.exports.FBN_URL = '220.86.111.197' // PURI
    // module.exports.FBN_URL = "http://purichain.com"
    FBN_URL = "www.purichain.com";
}
else if (os.hostname().includes('finlt'))
{
    FBN_URL = "apih.finlscan.org"; // '203.238.181.164'; // FINLT
}
else if (os.hostname().includes('finld'))
{
    // this.FBN_URL = '10.10.11.220'; // FINLD
    FBN_URL = 'apid.finlscan.org'; // FINLD
}

const FBN_PORT = '4000';

module.exports.FBN_CONFIG = {
    family: 4,
    host: FBN_URL,
    port: FBN_PORT,
    json: true,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
}

// User CLI URL
const USER_CLI_URL = "127.0.0.1";
const USER_CLI_PORT = '3000';

module.exports.USER_CLI_CONFIG = {
    family: 4,
    host: USER_CLI_URL,
    port: USER_CLI_PORT,
    json: true,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
}


// FBN URL
const SCH_REAL_URL = '175.207.29.22';
const SCH_TEST_URL = '220.86.111.196';
const SCH_VIRTUAL_URL = '192.168.100.199'; // 조회 안됨

const SCH_PORT = '14501';
const SCH_VPORT = '14502';


module.exports.SCH_CONFIG_REAL = {
    family: 4,
    host: SCH_REAL_URL,
    port: SCH_PORT,
    json: true,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
}

module.exports.SCH_CONFIG_TEST = {
    family: 4,
    host: SCH_TEST_URL,
    port: SCH_PORT,
    json: true,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
}

module.exports.SCH_CONFIG_VIRTUAL = {
    family: 4,
    host: SCH_VIRTUAL_URL,
    port: SCH_VPORT,
    json: true,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
}