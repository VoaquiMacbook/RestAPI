const express = require('express');
const router = express.Router();
const users = [
    { id: 1, name: 'Trần thị hường', email: 'huongtt@fpt.edu.vn', phone: '0908732558', pass: '123456' },
    { id: 2, name: 'Võ A Qui', email: 'quit@fpt.edu.vn', phone: '01203654463', pass: '123' },
];

// Middleware để phân tích cú pháp JSON trong phần thân yêu cầu
router.use(express.json());

router.get('/bai1', function (req, res, next) {
    res.json({ title: 'AQui' });
});

router.get('/bai2', function (req, res, next) {
    const { a, b } = req.query;
    var tong = Number(a) + Number(b);
    res.json({ tong: tong });
});

router.get('/bai3', function (req, res, next) {
    const { a, b } = req.query;
    const name = 'huongtt';
    const pass = '123';
    if (a == name && b == pass) {
        res.json({ kq: 'đăng nhập thành công' });
    } else {
        res.json({ kq: 'đăng nhập thất bại' });
    }
});

router.post('/register', function (req, res, next) {
    const { name, email, phone, pass } = req.body;

    // Kiểm tra xem tất cả các trường bắt buộc có được cung cấp không
    if (name && email && phone && pass) {
        const newUser = {
            id: users.length + 1,
            name: name,
            email: email,
            phone: phone,
            pass: pass,
        };

        // Thêm người dùng mới vào mảng hiện tại
        users.push(newUser);

        res.json({ kq: 'Đăng ký thành công' });
    } else {
        res.json({ kq: 'Đăng ký thất bại, vui lòng nhập đầy đủ thông tin' });
    }
});

router.get('/bai4', function (req, res, next) {
    const { a, b } = req.query;
    const user = users.find(user => user.email === a && user.phone === b);
    if (user) {
        res.json({ kq: 'Đăng nhập thành công' });
    } else {
        res.json({ kq: 'Đăng nhập thất bại' });
    }
});

module.exports = router;
