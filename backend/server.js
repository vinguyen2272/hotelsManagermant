import express from "express"
import cors from "cors"
import 'dotenv/config'

import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"

import hotelRouter from "./routes/hotelRoute.js"
import reservationRouter from "./routes/reservationRoute.js"
import userRouter from "./routes/userRouter.js"

const app = express()
const port = process.env.PORT || 4000

// middleware
app.use(express.json())

// CORS (chuẩn dev + production)
app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'https://hotels-managermant-2soj.vercel.app',
        'https://hotels-managermant-three.vercel.app'
    ],
    credentials: true
}))

// log request (debug)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

// routes
app.use('/api/hotel', hotelRouter)
app.use('/api/reservation', reservationRouter)
app.use('/api/user', userRouter)

// health check
app.get('/', (req, res) => {
    res.send("API working")
})

// start server
const startServer = async () => {
    try {
        await connectDB()
        connectCloudinary()

        app.listen(port, () => {
            console.log("Server running on port " + port)
        })

    } catch (err) {
        console.error("SERVER ERROR:", err)
    }
}

startServer()