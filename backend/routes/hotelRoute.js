import express from 'express'
import { addHotel, listHotel, removeHotel, singleHotel } from '../controllers/hotelController.js'
import multer from "multer";

const upload = multer({ dest: "uploads/" });
const hotelRouter = express.Router()

hotelRouter.post('/add', upload.single("image"), addHotel);
// hotelRouter.post('/add', addHotel)
hotelRouter.get('/list', listHotel)
hotelRouter.post('/remove', removeHotel)
hotelRouter.get('/detail/:id', singleHotel)

export default hotelRouter