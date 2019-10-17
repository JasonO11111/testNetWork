var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* GET home page. */
router.get('/form', function (request, response, next) {
    var name = request.query.name;
    var gender = request.query.gender;

    console.log(name);
    console.log(gender);
    var sql = 'select * from user where gender=' + gender
    var result;

    response.send(result)
});

module.exports = router;
