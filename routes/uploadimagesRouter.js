var express = require('express');
var router = express.Router();
var multer = require('multer')

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images/apartment')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
});

var upload = multer({storage: storage})
// .array('df', 6)
router.post('/single', upload.single('image'), function(req, res, next) {
    try {
        res.send("image uploaded!")
    }catch(err){
        console.log("image is stuck")
    }
});

router.post('/multiple', upload.array('image', 5), function(req, res, next) {
    try {
        res.send("images were uploaded!")
    }catch(err){
        console.log("images are stuck")
    }
});

module.exports = router;