var express = require('express');
var router = express.Router();

const products = [
    { 
        id: 1, 
        name: 'Trầu bà', 
        dacTinh: 'Ưa bóng', 
        gia: '250.000', 
        kichCo: 'Nhà', 
        xuatXu: 'Châu Phi', 
        tinhTrang: '156', 
        image:'trauba.png',
        loai:[
            {
                loai_cayTrong: 1,
            }
        ]
    },
    { 
        id: 2, 
        name: 'Hướng dương', 
        dacTinh: 'ánh sáng nhiều', 
        gia: '370.000', 
        kichCo: 'Ngoài Trời', 
        xuatXu: 'Hà Làn', 
        tinhTrang: '200',
        loai:[
            {
                loai_cayTrong: 1,
            }
        ]
    },
    { 
        id: 3, 
        name: 'Cây Lan', 
        dacTinh: 'Chịu nhiệt đới', 
        gia: '200.000', 
        kichCo: 'Trung bình', 
        xuatXu: 'Nam Mỹ', 
        tinhTrang: '120',
        loai:[
            {
                loai_cayTrong: 1,
            }
        ]
    },
    { 
        id: 4, 
        name: 'đất khô', 
        dacTinh: 'Chịu nhiệt đới', 
        gia: '200.000', 
        kichCo: 'Trung bình', 
        xuatXu: 'Nam Mỹ', 
        tinhTrang: '120',
        loai:[
            {
                dat: 2,
            }
        ]
    },
    { 
        id: 5, 
        name: 'đất mền', 
        dacTinh: 'Chịu nhiệt đới', 
        gia: '200.000', 
        kichCo: 'Trung bình', 
        xuatXu: 'Nam Mỹ', 
        tinhTrang: '120',
        loai:[
            {
                dat: 2,
            }
        ]
    },
    
];

router.get('/productAll', (req, res) => {
    res.json(products);
});

router.get('/productCategore', (req, res) => {
    try {
        const { a } = req.query;
        const ID = products.find(p => p.name === a);
        return res.json(ID);
    } catch (error) {
        return res.status(500).json({err: error.message})
    } 
});

router.get('/productId', (req, res) => {
    try {
        const { a } = req.query;
        const ID = products.find(p => p.id.toString() === a.toString());
        return res.json(ID);
    } catch (error) {
        return res.status(500).json({err: error.message})
    } 
});

router.get('/productCategoryCayTrong', (req, res) => {
    try {
      const { a } = req.query;
      const loaiCayTrong = products.filter(p => {
        if (p.loai && p.loai.some(loai => loai.dat === parseInt(a))) {
          return true;
        }
        return false;
      });
      return res.json(loaiCayTrong);
    } catch (error) {
      return res.status(500).json({ err: error.message });
    } 
  });
  






module.exports = router;