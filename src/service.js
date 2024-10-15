class Service {
  constructor (name, ratings) {
    this.name = name
    this.ratings = []
  }

  giveRating (rating) {
    this.ratings.push(rating)
  }

  get rating () {
    if (this.ratings.length === 0) {
      return 0
    } else {
      
    }
  }
}

module.exports = Service
