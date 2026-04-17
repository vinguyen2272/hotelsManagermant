import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    checkin: { type: String, require: true },
    checkin: { type: String, require: true },
    checkout: { type: String, require: true },
    guest: { type: String, require: true },
    roomName: { type: String, require: true },
    roomId: { type: String, require: true },
})

export default mongoose.model("Reservation", reservationSchema)