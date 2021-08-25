const multer = require('multer')

const fileStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./Upload')
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+"--"+ file.originalname)
    }
})

const multerUpload=multer({storage:fileStorage});

module.exports=multerUpload