const multer = require('multer')
//const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/upload');
    },
    filename: (req, file, cb) => {        
        cb(null, `${file.fieldname}+${Date.now()}.jpg`)
    }
});

const upload = multer ({
    storage
})

module.exports = upload