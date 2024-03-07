var express = require('express');
var router = express.Router();
router.get('/bai1', function (req, res, next) {
    res.json({ title: 'AQui' });
});

router.get('/bai2', function (req, res, next) {
    const { a, b } = req.query;
    var tong = Number(a) + Number(b);
    res.json({ tong: tong });
});

router.get('/bai3', function (req, res, next) {
    const { a , b } = req.query;
    const name = 'huongtt'
    const pass = '123'
    if (a == name &&  b == pass){
        res.json({ kq: 'đăng nhập thành công'});
    }else{
        res.json({ kq: 'đăng nhập thất bại'});
    }
});





module.exports = router;