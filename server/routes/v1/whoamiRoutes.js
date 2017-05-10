const express = require('express');
var router = express.Router();


router.get('/', (req, res) => {

  var languages = req.headers['accept-language'];
  var language = languages.split(',')[0];

  var userAgent = req.headers['user-agent'];
  var software = userAgent.substring(userAgent.indexOf('(') + 1, userAgent.indexOf(')'));

  var ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  res.send({ip: ipaddress, language, software });
});

module.exports = router;
