class Service {
  constructor (name, ratings) {
    this.name = name
    this.ratings = []
  }

  giveRating (rating) {
    this.ratings.push(rating)
  }

  get rating () {
    return this.ratings.indexOf(this.rating)
  }
}

module.exports = Service
