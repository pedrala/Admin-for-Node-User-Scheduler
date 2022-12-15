// layout set
const LAYOUT_LOGIN = 'layouts/layout-login';
const LAYOUT_HOME = 'layouts/layout-home';

const LAYOUT_NODE_LIST = 'layouts/layout-nodeList';
const LAYOUT_NODE_HISTORY = 'layouts/layout-nodeHistory';
const LAYOUT_NODE_TRXIN = 'layouts/layout-nodeTrxIn';
const LAYOUT_NODE_TRXOUT = 'layouts/layout-nodeTrxOut';
const LAYOUT_NODE_TOTAL = 'layouts/layout-nodeTotal';

const LAYOUT_USER_LIST = 'layouts/layout-userList';
const LAYOUT_USER_TRXIN = 'layouts/layout-userTrxIn';
const LAYOUT_USER_TRXOUT = 'layouts/layout-userTrxOut';
const LAYOUT_USER_BUYHISTORY = 'layouts/layout-userBuyHistory';
const LAYOUT_USER_UNLOCKHISTORY = 'layouts/layout-userUnlockHistory';
const LAYOUT_USER_TOTAL = 'layouts/layout-userTotal';
//const LAYOUT_USER_REWARD = 'layouts/layout-userReward';

const LAYOUT_CLUSTER_INFO = 'layouts/layout-clusterInfo';
const LAYOUT_CLUSTER_STATUS = 'layouts/layout-clusterStatus';

const LAYOUT_AUTH = 'layouts/layout-auth';

const LAYOUT_TEST = 'layouts/layout-test';
const LAYOUT_SEARCHERROR = 'layouts/layout-searchError';

/* LOGIN */
export const getLogin = async (req, res, next) => {
  console.log('==================getLogin==================');

  let type = '';
  //아이디/비번이 틀린 경우 파라미터로 받아온 type을 넘겨서 얼럿표시
  if (req.session.valid) {
    type = req.session.valid.type
    console.log('valid:' + JSON.stringify(req.session.valid))
    console.log('type:' + type);
    req.session.valid = {}; //초기화
  }
 
  try {
    res.render('pages/login', {
      pageTitle: "Login",
      layout: LAYOUT_LOGIN,
      type
    });
  } catch (error) {
    errorHandler(req, res, error);
  };
};

/* Home */
export const getHome = async (req, res, next) => {
  console.log('==================getHome==================');
  //https://stackoverflow.com/questions/6096492/node-js-and-express-session-handling-back-button-problem
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

  if (req.session.user) {
    try {
      res.render('pages/home', {
        pageTitle: "Home",
        layout: LAYOUT_HOME
      });
    } catch (error) {
      errorHandler(req, res, error);
    };

  } else {
    console.log("Not Logged In");
    res.redirect("/");
  }
};

/* Node Menu */
export const getNodeList = async (req, res, next) => {
  console.log('==================getNodeList==================');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

  // console.log('req.session:' + JSON.stringify(req.session))
  if (req.session.user) {
    try {
      res.render('pages/node/nodeList', {
        pageTitle: "NodeList",
        layout: LAYOUT_NODE_LIST
      });
    } catch (error) {
      errorHandler(req, res, error);
    };

  } else {
    console.log("Not Logged In");
    res.redirect("/");
  }
};

export const getNodeHistory = async (req, res, next) => {
  console.log('==================getNodeHistory==================');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

  if (req.session.user) {
    try {
      res.render('pages/node/nodeHistory', {
        pageTitle: "NodeHistory",
        layout: LAYOUT_NODE_HISTORY
      });
    } catch (error) {
      errorHandler(req, res, error);
    };

  } else {
    console.log("Not Logged In");
    res.redirect("/");
  }

};

export const getNodeTrxIn = async (req, res, next) => {
  console.log('==================getNodeTrxIn==================');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

  if (req.session.user) {
    try {
      res.render('pages/node/nodeTrxIn', {
        pageTitle: "NodeTrxIn",
        layout: LAYOUT_NODE_TRXIN
      });
    } catch (error) {
      errorHandler(req, res, error);
    };

  } else {
    console.log("Not Logged In");
    res.redirect("/");
  }
};

export const getNodeTrxOut = async (req, res, next) => {
  console.log('==================getNodeTrxOut==================');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

  if (req.session.user) {
    try {
      res.render('pages/node/nodeTrxOut', {
        pageTitle: "NodeTrxOut",
        layout: LAYOUT_NODE_TRXOUT
      });
    } catch (error) {
      errorHandler(req, res, error);
    };

  } else {
    console.log("Not Logged In");
    res.redirect("/");
  }
};


export const getNodeTotal = async (req, res, next) => {
  console.log('==================getNodeTotal==================');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

  if (req.session.user) {
    try {
      res.render('pages/node/nodeTotal', {
        pageTitle: "NodeTotal",
        layout: LAYOUT_NODE_TOTAL
      });
    } catch (error) {
      errorHandler(req, res, error);
    };

  } else {
    console.log("Not Logged In");
    res.redirect("/");
  }
};

/* User Menu */
export const getUserList = async (req, res, next) => {
  console.log('==================getUserList==================');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

  if (req.session.user) {
    try {
      res.render('pages/user/userList', {
        pageTitle: "UserList",
        layout: LAYOUT_USER_LIST
      });
    } catch (error) {
      errorHandler(req, res, error);
    };

  } else {
    console.log("Not Logged In");
    res.redirect("/");
  }

};

export const getUserTrxIn = async (req, res, next) => {
  console.log('==================getUserTrxIn==================');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

  if (req.session.user) {
    try {
      res.render('pages/user/userTrxIn', {
        pageTitle: "UserTrxIn",
        layout: LAYOUT_USER_TRXIN
      });
    } catch (error) {
      errorHandler(req, res, error);
    };

  } else {
    console.log("Not Logged In");
    res.redirect("/");
  }

};

export const getUserTrxOut = async (req, res, next) => {
  console.log('==================getUserTrxOut==================');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

  if (req.session.user) {
    try {
      res.render('pages/user/userTrxOut', {
        pageTitle: "UserTrxOut",
        layout: LAYOUT_USER_TRXOUT
      });
    } catch (error) {
      errorHandler(req, res, error);
    };

  } else {
    console.log("Not Logged In");
    res.redirect("/");
  }
};

export const getUserBuyHistory = async (req, res, next) => {
  console.log('==================getUserBuyHistory==================');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

  if (req.session.user) {
    try {
      res.render('pages/user/userBuyHistory', {
        pageTitle: "UserBuyHistory",
        layout: LAYOUT_USER_BUYHISTORY
      });
    } catch (error) {
      errorHandler(req, res, error);
    };
  } else {
    console.log("Not Logged In");
    res.redirect("/");
  }
};

export const getUserUnlockHistory = async (req, res, next) => {
  console.log('==================getUserUnlockHistory==================');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');

  if (req.session.user) {
    try {
      res.render('pages/user/userUnlockHistory', {
        pageTitle: "UserUnlockHistory",
        layout: LAYOUT_USER_UNLOCKHISTORY
      });
    } catch (error) {
      errorHandler(req, res, error);
    };
  } else {
    console.log("Not Logged In");
    res.redirect("/");
  }
};

export const getUserTotal = async (req, res, next) => {
  console.log('==================getUserTotal==================');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
   
  if (req.session.user) {
    try {
      res.render('pages/user/userTotal', {
        pageTitle: "UserTotal",
        layout: LAYOUT_USER_TOTAL
      });
    } catch (error) {
      errorHandler(req, res, error);
    };
  } else {
    console.log("Not Logged In");
    res.redirect("/");
  }
};

// export const getUserReward = async (req, res, next) => { 
//   try {   
//    res.render('pages/user/userReward', {
//      pageTitle: "UserReward",
//      layout: LAYOUT_USER_REWARD
//    });
//  } catch (error) {
//    errorHandler(req, res, error);
//  };
// };

export const getClusterInfo = async (req, res, next) => {
  console.log('==================getClusterInfo==================');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
   
  if (req.session.user) {
    try {
      res.render('pages/hardware/clusterInfo', {
        pageTitle: "ClusterInfo",
        layout: LAYOUT_CLUSTER_INFO
      });
    } catch (error) {
      errorHandler(req, res, error);
    };
  } else {
    console.log("Not Logged In");
    res.redirect("/");
  }
};

export const getClusterStatus = async (req, res, next) => {
  console.log('==================getClusterStatus==================');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
   
  if (req.session.user) {
    try {
      res.render('pages/hardware/clusterStatus', {
        pageTitle: "ClusterStatus",
        layout: LAYOUT_CLUSTER_STATUS
      });
    } catch (error) {
      errorHandler(req, res, error);
    };
  } else {
    console.log("Not Logged In");
    res.redirect("/");
  }
};


export const getAuth = async (req, res, next) => {
  console.log('==================getAuth==================');
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
   
  if (req.session.user) {
    try {
      res.render('pages/auth', {
        pageTitle: "Auth",
        layout: LAYOUT_AUTH
      });
    } catch (error) {
      errorHandler(req, res, error);
    };
  } else {
    console.log("Not Logged In");
    res.redirect("/");
  }
};

/* Test */
export const getTest = async (req, res, next) => {
  console.log('==================getTest==================');
  res.render('pages/test', {
    pageTitle: "Test",
    layout: LAYOUT_TEST
  });
};

/* Error */
export const getErrorWithMsg = async (req, res, next) => {
  console.log('==================getErrorWithMsg==================');
  const { params: { errMsg } } = req;

  try {
    res.render('pages/searchError', {
      pageTitle: "Error",
      layout: LAYOUT_SEARCHERROR,
      errMsg
    });
  } catch (error) {
    errorHandler(req, res, error);
  };
};
