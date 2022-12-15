// Global
const HOME = "/";
const TX_NODE_LIST = "/txNodeList";
const TX_NODE_TRXIN_LIST = '/txNodeTrxInList';
const TX_NODE_TRXOUT_LIST = '/txNodeTrxOutList';
const TX_NODE_HIST_LIST = '/txNodeHistList';

const TX_USER_LIST = '/txUserList';
const TX_USER_TRXIN_LIST = '/txUserTrxInList';
const TX_USER_TRXOUT_LIST = '/txUserTrxOutList';
const TX_USER_BUYHIST_LIST = '/txUserBuyHistList';
const TX_USER_BUYHIST = '/txUserBuyHist';
const TX_USER_UNLOCKHIST_LIST = '/txUserUnlockHistList';
const TX_USER_UNLOCKHIST = '/txUserUnlockHist';
// const TX_USER_REWARD_LIST = '/txUserRewardList';
// const TX_USER_REWARD = '/txUserReward';

const TX_CLUSTER_INFO = '/txClusterInfo';   

/* Search */
const SEARCH = "/search";

 const routes = {   
    home: HOME,

    txNodeList: TX_NODE_LIST,
    txNodeTrxInList: TX_NODE_TRXIN_LIST,
    txNodeTrxOutList: TX_NODE_TRXOUT_LIST,
    txNodeHistList: TX_NODE_HIST_LIST,

    txUserList: TX_USER_LIST,
    txUserTrxInList: TX_USER_TRXIN_LIST,
    txUserTrxOutList: TX_USER_TRXOUT_LIST,
    txUserBuyHistList: TX_USER_BUYHIST_LIST,
    txUserBuyHist: TX_USER_BUYHIST,
    txUserUnlockHistList: TX_USER_UNLOCKHIST_LIST,
    txUserUnlockHist: TX_USER_UNLOCKHIST,
   //  txUserRewardList: TX_USER_REWARD_LIST,
   //  txUserReward: TX_USER_REWARD,

    txClusterInfo: TX_CLUSTER_INFO,

    search: SEARCH,
 };

 export default routes;
