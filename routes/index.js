var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let data = {
    registrasi: '{\n"name":"Brillian Andrie Nugroho Wiguno",\n"email":"brillianandrie@gmail.com",\n"password":"123456",\n}'
  }

  res.render('index', { payload: data });
});

module.exports = router;
