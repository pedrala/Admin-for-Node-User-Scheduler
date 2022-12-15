import express from 'express';
import { 
  getLog,
  getLogin,
  getHome,

  getNodeList,
  getNodeHistory,
  getNodeTrxIn,
  getNodeTrxOut,
  getNodeTotal,

  getUserList,
  getUserTrxIn,
  getUserTrxOut,
  getUserBuyHistory,
  getUserUnlockHistory,
  getUserTotal,
  //getUserReward,

  getClusterInfo,
  getClusterStatus,

  getAuth,

  getTest,
  getErrorWithMsg
} 
from "../controllers/viewControllers.js";
const router = express.Router();

router.get('/', getLogin);
router.get('/home', getHome);

//NodeList
router.get('/nodeList', getNodeList);
router.get('/nodeHistory', getNodeHistory);
router.get('/nodeTrxIn', getNodeTrxIn);
router.get('/nodeTrxOut', getNodeTrxOut);
router.get('/nodeTotal', getNodeTotal);

//UserList
router.get('/userList', getUserList);
router.get('/userBuyHistory', getUserBuyHistory);
router.get('/userTrxIn', getUserTrxIn);
router.get('/userTrxOut', getUserTrxOut);
router.get('/userUnlockHistory', getUserUnlockHistory);
router.get('/userTotal', getUserTotal);
//router.get('/userReward', getUserReward);

//ClusterInfo
router.get('/clusterInfo', getClusterInfo);
//ClusterStatus
router.get('/clusterStatus', getClusterStatus);

//Auth
router.get('/auth', getAuth);

//Test
router.get('/test', getTest);

//Error
router.get('/error-page/:errMsg', getErrorWithMsg);

export default router;
