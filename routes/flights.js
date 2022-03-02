import { Router } from 'express'

import * as flightsCtrl from  '../controllers/flights.js'
const router = Router()

//Get - localhost:3000/flights
router.get('/', flightsCtrl.index)
//GET - localhost:3000/flight/new
router.get('/new', flightsCtrl.new)
// GET - localhost:3000/movies/:id
router.get('/:id', flightsCtrl.show)
// GET - localhost:3000/flights/:id/edit
router.get("/:id/edit", flightsCtrl.edit)

router.post('/', flightsCtrl.create)
// POST - localhost:3000/mflights/:id/tickets
router.post('/:id/tickets', flightsCtrl.createTicket)
// POST - localhost:3000/flights/:id/meals
router.post('/:id/meals', flightsCtrl.addToFlight)
// Delete - localhost:3000/flights/:id
router.delete('/:id', flightsCtrl.delete)
// PUT - localhost:3000/:id
router.put('/:id', flightsCtrl.update)


export {
  router
}
