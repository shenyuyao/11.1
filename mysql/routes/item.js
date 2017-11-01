var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    port     : 3307
});
/* GET home page. */
router.post('/list', function(req, res, next) {
    connection.query('SELECT * FROM baobei.list LIMIT 0,2', function(err, rows, fields) {
        res.header('Access-Control-Allow-Origin','*');
        res.send(rows)//·¢ËÍ
    });
});
module.exports = router;
