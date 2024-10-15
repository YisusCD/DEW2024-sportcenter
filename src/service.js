class Service {
  constructor (name, ratings) {
    this.name = name
    this.ratings = []
  }

  giveRating (rating) {
    this.ratings.push(rating)
  }
}

module.exports = Service
