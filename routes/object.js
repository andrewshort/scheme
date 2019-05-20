var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();

router.get('/objectadmin', secured(), function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
  res.render('objectadmin', {
    //userProfile: JSON.stringify(userProfile, null, 2),
    title: 'Object Administration Page'
  });
});

module.exports = router;
