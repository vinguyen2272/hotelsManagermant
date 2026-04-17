import multer from "multer";
const stogare = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
})

const upload = multer(stogare)
export default upload