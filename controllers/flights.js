import * as flightDb from '../config/database.js'

function newFlight (req, res) {
  res.render('flights/new')
}

export {
  newFlight as new
}