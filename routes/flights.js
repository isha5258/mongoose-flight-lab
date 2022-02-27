import { Router } from 'express'

import * as flightsCtrl from  '../controllers/flights.js'
const router = Router()

//Get - localhost:3000/flights
router.get('/', flightsCtrl.index)
//GET - localhost:3000/flight/new
router.get('/new', flightsCtrl.new)

router.post('/', flightsCtrl.create)


export {
  router
}
