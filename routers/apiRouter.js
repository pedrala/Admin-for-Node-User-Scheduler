import express from "express";
import routes from "../routers";
import {
      getTxNodeList,
      getTxNodeTrxInList,
      getTxNodeTrxOutList,
      getTxNodeHistList,

      getTxUserList,
      getTxUserTrxInList,
      getTxUserTrxOutList,
      getTxUserBuyHistList,
      getTxUserBuyHist,
      getTxUserUnlockHistList,
      getTxUserUnlockHist,

      postTxClusterInfo
      // getTxUserRewardList,
      // getTxUserReward

} from "../controllers/apiController.js";

const apiRouter = express.Router();

// apiRouter.get('/home', (req, res, next) => {    
//   res.send(
//     {
//       result: global.MAIN_PAGE_TEXT_DATA,
//       blk: global.latestBlocks.slice(0,20), //랜딩페이지에는 20건만 표시
//       txns: global.latestTransactions.slice(0,20) 
//     });
// }); 


/*Node*/
apiRouter.get(routes.txNodeList, getTxNodeList);
apiRouter.get(routes.txNodeTrxInList, getTxNodeTrxInList);
apiRouter.get(routes.txNodeTrxOutList, getTxNodeTrxOutList);
apiRouter.get(routes.txNodeHistList, getTxNodeHistList);

/*User*/
apiRouter.get(routes.txUserList, getTxUserList);
apiRouter.get(routes.txUserTrxInList, getTxUserTrxInList);
apiRouter.get(routes.txUserTrxOutList, getTxUserTrxOutList);
apiRouter.get(routes.txUserBuyHistList, getTxUserBuyHistList);
apiRouter.get(routes.txUserBuyHist, getTxUserBuyHist);
apiRouter.get(routes.txUserUnlockHistList, getTxUserUnlockHistList);
apiRouter.get(routes.txUserUnlockHist, getTxUserUnlockHist);
// apiRouter.get(routes.txUserRewardList, getTxUserRewardList);
// apiRouter.get(routes.txUserReward, getTxUserReward);

/*ClusterInfo */
apiRouter.post(routes.txClusterInfo, postTxClusterInfo);

export default apiRouter;
