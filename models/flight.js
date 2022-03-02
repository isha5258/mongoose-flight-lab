import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String, match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number, min: 0}
  }, {
    timestamps: true
})

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
  },
  tickets: [ticketSchema],

  meal: [{type: Schema.Types.ObjectId, ref: 'Meal'}]
})


const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}