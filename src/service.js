const SportCenter = require('./sport-center');

class Service extends SportCenter {
  ratings = []

  constructor (name) {
    super(name)
  }

  giveRating () {
    this.ratings.push(ratings)
  }
}

module.exports = Service