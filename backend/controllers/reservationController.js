import reservationModel from "../models/reservationModel.js";


const createReservation = async (req, res) => {
    try {
        const { name, email, phone, checkin, checkout, guest, roomName, roomId } = req.body
        if (!name || !email || !phone || !checkin || !checkout || !guest || !roomName || !roomId) {
            return res.json({ message: "All feild are required" })
        }
        const newReservation = new reservationModel({ name, email, phone, checkin, checkout, guest, roomName, roomId })
        await newReservation.save()

        res.json({ message: "Reservation created", reservation: newReservation })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }

}
const getAllReservation = async (req, res) => {
    try {
        const reservations = await reservationModel.find();
        res.json(reservations);
    } catch (error) {
        res.json({ success: false, message: error.message })
    }

}
const deleteReservation = async (req, res) => {
    try {
        const { id } = req.params
        await reservationModel.findByIdAndDelete(id)
        res.json({ message: "Reservation deleted succesfully" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}
export { createReservation, getAllReservation, deleteReservation }