//
const config = require('./config.js');

// Define

const ENABLED = true;
const DISABLED = false;

//console.log("config:"+JSON.stringify(config)); //config.CONTRACT_ACTIONS_JSON.TOKEN

module.exports.ERR_CODE = {
    ERROR : -1,
    SUCCESS : 1
}

module.exports.NODE_ROLE = {
    STR : {
        NN : 'NN',
        DN : 'DN',
        DBN : 'DBN',
        SCA : 'SCA',
        ISAG: 'ISAg',
        RN : 'RN',
        BN : 'BN'
    },
    NUM : {
        NN: 0,
        // DN: 1,
        DBN: 2,
        ISAG: 4
    },
}

module.exports.NODE_PORT = {
    dev:
    {
        IS: 14200,
        NN01: 14201,
        NN02: 14204,      
        ISAG01: 14202,
        ISAG02: 14205,      
        FBN01: 14203,
        FBN02: 14206,       
        KFK01: 14220      
    },
    halla:{
        IS: 14200,
        NN01: 14201,
        NN02: 14206,
        ISAG01: 14202,
        ISAG03: 14207,
        FBN01: 14203,
        FBN03: 14209,
        KFK01: 14220  
    },
    main:{
        IS   : 14200,
        NN01 : 14201,
        NN02 : 14206,
        NN03 : 14211,
        NN04 : 14216,
        NN05 : 14221,
        NN06 : 14226,
        NN07 : 14231,
        ISAG01 : 14202,
        ISAG02 : 14207,
        ISAG03 : 14212,
        ISAG04 : 14217,
        ISAG05 : 14222,
        ISAG06 : 14227,
        ISAG07 : 14232,
        FBN01 : 14203,
        FBN02 : 14204,
        FBN03 : 14205,
        FBN04 : 14208, 
        FBN05 : 14209,
        FBN06 : 14210,
        FBN07 : 14213,
        FBN08 : 14214,
        FBN09 : 14215,
        FBN10 : 14218,
        FBN11 : 14219,
        FBN12 : 14220,
        FBN13 : 14223,
        FBN14 : 14224,
        FBN15 : 14225,
        FBN16 : 14228,
        FBN17 : 14229,
        FBN18 : 14230,
        FBN19 : 14233,
        FBN20 : 14234,
        FBN21 : 14235,
        KFK01 : 14150,
        KFK02 : 14151,
        KFK03 : 14152
    }
}

module.exports.SUPPLY_ROLE = {
    STR : {
        DGOS : 'DGOS', 
        NODE_N : 'NODE_N', 
        NODE_I : 'NODE_I', 
        NODE_F : 'NODE_F',
        NODE_S : 'NODE_S', 
    },
    NUM : {
        DGOS : 0, 
        NODE_N : 1, 
        NODE_I : 2, 
        NODE_F : 3, 
        NODE_S : 4, 
    },
}

module.exports.getSupplyRoleInt = (roleStr) => {
    let roleInt = this.ERR_CODE.ERROR;

    if (roleStr.toUpperCase() === this.SUPPLY_ROLE.STR.DGOS)
    {
        roleInt = this.SUPPLY_ROLE.NUM.DGOS;
    }
    else if (roleStr.toUpperCase() === this.SUPPLY_ROLE.STR.NODE_N)
    {
        roleInt = this.SUPPLY_ROLE.NUM.NODE_N;
    }
    else if (roleStr.toUpperCase() === this.SUPPLY_ROLE.STR.NODE_I)
    {
        roleInt = this.SUPPLY_ROLE.NUM.NODE_I;
    }
    else if (roleStr.toUpperCase() === this.SUPPLY_ROLE.STR.NODE_F)
    {
        roleInt = this.SUPPLY_ROLE.NUM.NODE_F;
    }
    else if (roleStr.toUpperCase() === this.SUPPLY_ROLE.STR.NODE_S)
    {
        roleInt = this.SUPPLY_ROLE.NUM.test_node_insert;
    }

    return roleInt;
}

module.exports.getSupplyRoleStr = (roleInt) => {
    let roleStr = '';

    if (roleInt === this.SUPPLY_ROLE.NUM.DGOS)
    {
        roleStr = this.SUPPLY_ROLE.STR.DGOS;
    }
    else if (roleInt === this.SUPPLY_ROLE.NUM.NODE_N)
    {
        roleStr = this.SUPPLY_ROLE.STR.NODE_N;
    }
    else if (roleInt === this.SUPPLY_ROLE.NUM.NODE_I)
    {
        roleStr = this.SUPPLY_ROLE.STR.NODE_I;
    }
    else if (roleInt === this.SUPPLY_ROLE.NUM.NODE_F)
    {
        roleStr = this.SUPPLY_ROLE.STR.NODE_F;
    }
    else if (roleInt === this.SUPPLY_ROLE.NUM.NODE_S)
    {
        roleStr = this.SUPPLY_ROLE.STR.NODE_S;
    }

    return roleStr;
}

module.exports.CRYPTO_ARG = {
    //
    HASH: 'sha256',
    // digest
    HEX: 'hex',
    BASE64: 'base64',
    //
    EDDSA: 'ed25519'
}

module.exports.SEC_DEFINE = {
    HASH_ALGO : "sha256",
    DIGEST : {
        HEX : 'hex',
        BASE64 : 'base64',
    },
    PUBLIC_KEY_LEN : 66,
    CURVE_NAMES : {
        ECDH_SECP256R1_CURVE_NAME : "prime256v1",
        ECDH_SECP256K1_CURVE_NAME : "secp256k1",
        EDDSA_CURVE_NAME : "ed25519",
        ECDSA_SECP256K1_CURVE_NAME : "secp256k1",
        ECDSA_SECP256R1_CURVE_NAME : "p256"
    },
    KEY_DELIMITER : {
        START_INDEX : 0,
        END_INDEX : 2,
        DELIMITER_LEN : 2,
        SECP256_COMPRESSED_EVEN_DELIMITER : "02",
        SECP256_COMPRESSED_ODD_DELIMITER : "03",
        SECP256_UNCOMPRESSED_DELIMITER : "04",
        ED25519_DELIMITER : "05",
    },
    SIGN : {
        R_START_INDEX : 0,
        R_LEN : 64,
        S_START_INDEX : 64,
        S_END_INDEX : 64
    },
    SIG_KIND : {
        ECDSA : "ECDSA",
        EDDSA : "EDDSA"
    },
    CONVERT_KEY : {
        COMPRESSED : "compressed",
        UNCOMPRESSED : "uncompressed"
    },
    KEY_PURPOSE : {
        NET : "net",
        WALLET : "wallet"
    }
}

module.exports.CONTRACT_DEFINE = {
    ED_PUB_IDX : '05',
    MAX_TX_CNT : 500,
    ACCOUNT_TOKEN_DELI : 1,
    ACCOUNT_USER_DELI_MIN : 2,
    ACCOUNT_USER_DELI_MAX : 7,
    MILLI_DECIMAL_POINT : 3,
    MICRO_DECIMAL_POINT : 6,
    NANO_DECIMAL_POINT : 9,
    MAX_DECIMAL_POINT : 9, // 4
    SEC_TOKEN_ACCOUNT : '1000000000000000',
    FROM_DEFAULT : '0000000000000000',
    TO_DEFAULT : '0000000000000000',
    FEE_DEFAULT : '0',
    FINTECH : {
        NON_FINANCIAL_TX : '0',
        FINANCIAL_TX : '1',
    },
    PRIVACY : {
        PUBLIC : '0',
        PRIVATE : '1'
    },
    CONTRACT_PROPERTY : {
        REVISION : "revision",
        PREV_KEY_ID : "prev_key_id",
        CREATE_TM : "create_tm",
        FINTECH : "fintech",
        PRIVACY : "privacy",
        FEE : "fee",
        FROM_ACCOUNT : "from_account",
        TO_ACCOUNT : "to_account",
        ACTION : "action",
        CONTENTS : "contents",
        MEMO : "memo",
        SIG : "sig",
        SIGNED_PUPKEY : "signed_pubkey"
    },
    CONTENTS_PROPERTY : {
        TX : {
            DST_ACCOUNT : "dst_account", 
            AMOUNT : "amount"
        }, 
        TX_ST : {
            AMOUNT : "amount"
        }, 
        TX_UT : {
            DST_ACCOUNT : "dst_account", 
            AMOUNT : "amount"
        }, 
        TOKEN_TX : {
            ACTION : "action",
            DST_ACCOUNT : "dst_account", 
            AMOUNT : "amount"
        }, 
        LOCK_TOKEN_TX : {
            ACTION : "action",
            LOCK : "lock"
        }, 
        LOCK_TOKEN_TIME : {
            ACTION : "action",
            LOCK_TIME_FROM : "lock_time_from",
            LOCK_TIME_TO : "lock_time_to"
        }, 
        LOCK_TOKEN_WALLET : {
            ACTION : "action",
            PK_LIST : "pk_list"
        }, 
        ADD_USER : {
            OWNER_PK : "owner_pk",
            SUPER_PK : "super_pk",
            ACCOUNT_ID : "account_id"
        }, 
        CHANGE_USER_PK : {
            OWNER_PK : "owner_pk",
            SUPER_PK : "super_pk",
            ACCOUNT_ID : "account_id"
        }, 
        CREATE_TOKEN : {
            OWNER_PK : "owner_pk",
            SUPER_PK : "super_pk",
            ACTION : "action",
            NAME : "name", 
            SYMBOL : "symbol",
            TOTAL_SUPPLY : "total_supply",
            DECIMAL_POINT : "decimal_point",
            LOCK_TIME_FROM : "lock_time_from",
            LOCK_TIME_TO : "lock_time_to",
            LOCK_TRANSFER : "lock_transfer",
            BLACK_LIST : "decimal_point",
            FUNC : "functions"
        }, 
        CHANGE_TOKEN_PK : {
            OWNER_PK : "owner_pk",
            SUPER_PK : "super_pk",
            ACTION : "action"
        }, 
        CREATE_SC : {
            SC_ACTION : "sc_action",
            ACTION_TARGET : "action_target",
            SC : "sc"
        }
    },
    LOCK_TOKEN_TX : {
        UNLOCK : 0,
        LOCK_ALL : 1,
        LOCK_EXC_OWNER : 2
    },
    LOCK_TOKEN_TIME : {
        UNLOCK : "0"
    }
}

module.exports.START_MSG = "=================================================="
    + "\n= FINL Block Chain                               ="
    + "\n= [ viewNftSch Ver : " + config.VERSION_INFO + "]                              ="
    + "\n==================================================";

module.exports.REGEX = {
    NEW_LINE_REGEX: /\n+/, 
    WHITE_SPACE_REGEX: /\s/, 
    IP_ADDR_REGEX: /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/, 
    HASH_REGEX: /^[a-z0-9+]{5,65}$/, 
    HEX_STR_REGEX: /^[a-fA-F0-9]+$/, 
    // ID_REGEX: /^(?=.*[A-Z])(?!.*[a-z])(?!.*[\s()|!@#\$%\^&\*])(?=.{4,})/, 
    ID_REGEX: /^([A-Z0-9_]){4,16}$/,
    PW_STRONG_REGEX : /^([a-zA-Z0-9!@$%^~*+=_-]){10,}$/, 
    PW_STRONG_COND_REGEX : /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[])(?=.*[!@$%^~*+=_-]).{10,}$/, 
    // PW_STRONG_COND_REGEX : /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[~#&()<>?:{}])(?=.*[!@$%^~*+=_-]).{10,}$/, 
    PW_MEDIUM_REGEX : /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/, 
    FINL_ADDR_REGEX: /^(FINL){1}[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1, }$/, 
    PURE_ADDR_REGEX: /^(PURE){1}[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{1, }$/
}

module.exports.COMMON_DEFINE = {
    PADDING_DELIMITER : {
        FRONT : 0,
        BACK : 1
    },
    ENABLED : ENABLED,
    DISABLED : DISABLED
}

//
module.exports.DB_DEFINE = {
    HEX_DB_KEY_LEN : {
        KEY_NUM_LEN : 12,
        KEY_INDEX_LEN : 4,
        DB_KEY_LEN : 16
    },
}

module.exports.P2P_DEFINE = {
    P2P_SUBNET_ID_DGOS : 'FFF0',
    P2P_ROOT_SPLIT_INDEX : {
        START : 10,
        END : 14
    },
    P2P_TOPIC_NAME_SPLIT_INDEX : {
        START : 2,
        END : 14
    }
}


module.exports.FIXED_VAL = { 
    ONE_SEC : 1,
    ONE_SEC_MS : 1000, 
    ONE_MIN_SEC : 60, 
    ONE_MIN_MS : 60000, 
    TEN_MIN_SEC : 600, 
    TEN_MIN_MS : 600000, 
    QUATER_HOUR_SEC : 900, 
    QUATER_HOUR_MS : 900000, 
    ONE_HOUR_SEC : 3600, 
    ONE_HOUR_MS : 3600000, 
    ONE_DAY_SEC : 86400, 
    ONE_DAY_MS  : 86400000, 

    MAX_PERIOD : 365, 
}

module.exports.INTERVAL = {
    MIN : 'MIN', 
    QUATER : 'QUATER', 
    HOUR : 'HOUR', 
    DAY : 'DAY', 
}
