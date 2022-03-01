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
// Delete - localhost:3000/flights/:id
router.delete('/:id', flightsCtrl.delete)
// PUT - localhost:3000/:id
router.put('/:id', flightsCtrl.update)


export {
  router
}
