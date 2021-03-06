import methodOverride from 'method-override'
import * as flightDb from '../config/database.js'
import { Flight } from '../models/flight.js'
import { Meal } from '../models/meal.js'

function newFlight (req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })

}

function create(req, res) {
  
    if(req.body.departs === "") delete req.body.departs
  
  const flight = new Flight(req.body)
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new')
    res.redirect('/flights')
    
  })
}

function index(req, res) {
  Flight.find({}, function(error, flights) {
    res.render('flights/index', {
      flights,
      error,
      title: 'All Flights'
    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('meal')
  .exec(function(err, flight) {
    Meal.find({_id: {$nin: flight.meal}}, function(err, meals) {
      res.render('flights/show', {
        title: 'Flight Detail', 
        flight,
        meals
      })
    })
  })
}


function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function(err, movie) {
    res.redirect('/flights')
  })
}

function edit(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/edit', {
      flight,
      err,
      title: 'Edit Flight'
    })
  })
}

function update(req, res) {
  Flight.findByIdAndUpdate(req.params.id, req.body, function(err, flight) {
    res.redirect(`/flights/${flight._id}`)
  })
}
function createTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function addToFlight(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.meal.push(req.body.mealId)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update,
  createTicket,
  addToFlight
}