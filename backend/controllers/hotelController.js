import hotelModel from "../models/hotelModel.js";
import { v2 as cloudinary } from 'cloudinary'


const addHotel = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const image = req.file;

        if (!image) {
            return res.json({ success: false, message: "No image uploaded" });
        }

        const result = await cloudinary.uploader.upload(image.path);

        const hotel = new hotelModel({
            name,
            description,
            price: Number(price),
            image: result.secure_url,
            date: Date.now()
        });

        await hotel.save();

        res.json({ success: true, message: "Hotel added successfully" });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
const listHotel = async (req, res) => {
    try {
        const hotels = await hotelModel.find({})
        res.json({ success: true, hotels })
    } catch (error) {
        res.json({ success: false, message: error.message });
    }

}
const removeHotel = async (req, res) => {
    try {
        await hotelModel.findByIdAndDelete(req.body._id)
        res.json({ success: true, message: "Hotel remove successfully" })
    } catch (error) {
        res.json({ success: false, message: error.message });
    }


}
const singleHotel = async (req, res) => {
    try {
        const hotel = await hotelModel.findById(req.params.id)
        if (!hotel) return res.json({ message: "Room not found" })
        res.json({ hotel })
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export { addHotel, listHotel, removeHotel, singleHotel }