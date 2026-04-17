import express from 'express'
import { createReservation, getAllReservation, deleteReservation } from '../controllers/reservationController.js'

const router = express.Router()

router.post('/create', createReservation)
router.get('/get', getAllReservation)
router.post('/delete/:id', deleteReservation)

export default router