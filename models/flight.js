import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema ( {
  airport: {
    type: String,
    enum: ['DEN', 'LAX', 'DFW', 'SAN', 'AUS']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  departs: {
    type: Date,
    min: Date.now() + 365*24*60*60000
  } 
})


const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}