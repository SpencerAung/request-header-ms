const express = require('express');
var router = express.Router();


router.get('/', (req, res) => {

  var language = req.headers['accept-language'];
  var software = req.headers['user-agent'];
  var ipaddress = req.ip;
  res.send({ip: ipaddress, language, software });
});

module.exports = router;
