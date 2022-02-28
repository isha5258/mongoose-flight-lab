import * as flightDb from '../config/database.js'
import { Flight } from '../models/flight.js'

function newFlight (req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })

}

function create(req, res) {
  const flight = new Flight(req.body)
  console.log('sanity')
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    console.log('sanity 2');
    res.redirect('/flights')
    
  })
}

function index(req, res) {
  Flight.find({}, function(error, flights) {
    res.render('flights/index', {
      flights: flights,
      error: error,
      title: 'All Flights'
    })
  })
  
}

export {
  newFlight as new,
  create,
  index
}