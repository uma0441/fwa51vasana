var express = require('express');
var router = express.Router();
//var value=Math.random;

/* GET users listing. */
router.get('/', function (req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    if (req.method === 'GET') {
        value = search_params.get("x");
        if(value === null)
        {
            value=Math.round(Math.random()*900);
        }
        console.log(value);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Math.log2() applied to ' + value + ' is ' + Math.log2(value))
        res.write('<br/>Math.cosh() applied to ' + value + ' is ' + Math.cosh(value))
        res.write('<br/>Math.floor() applied to ' + value + ' is ' + Math.floor(value))
        res.end()
    }
});

module.exports = router;