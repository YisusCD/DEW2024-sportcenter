const Activity = require('./activity')
const Facility = require('./facility')
const Instructor = require('./instructor')
const Service = require('./service')

class SportCenter {
  #services = []
  #instructors = []

  constructor (name, fee = 0, membership = 0) {
    this.name = name
    this.fee = fee
    this.membership = membership
  }

  income () {
    return this.fee * this.membership
  }

  getServices () {
    return this.#services
  }

  addService (...services) {
    services.forEach(service => {
      if (service instanceof Service && !this.#services.includes(service)) {
        this.#services.push(service)
      }
    })
  }

  removeService (services) {
    if (services instanceof Service) {
      const index = this.#services.indexOf(services)
      if (index >= 0) {
        this.#services.splice(index, 1)
      }
    }
  }

  getFacilities () {
    return this.#services.filter(s => s instanceof Facility)
  }

  getActivities () {
    return this.#services.filter(s => s instanceof Activity)
  }

  orderServicesBy (criteria) {
    switch (criteria) {
      case 'name': this.#services.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
        break
      case 'rating': this.#services.sort((a, b) => (a.rating > b.rating ? -1 : 1))
        break
      default: break
    }
  }

  getInstructors () {
    return this.#instructors
  }

  addInstructor (instructor) {
    if (instructor instanceof Instructor && !this.#instructors.includes(instructor)) {
      this.#instructors.push(instructor)
    }
  }

  removeInstructor (instructor) {
    if (instructor instanceof Instructor) {
      const index = this.#instructors.indexOf(instructor)
      if (index >= 0) {
        this.#instructors.splice(index, 1)
      }
    }
  }

  listInstructorsActivities () {
    return this.#instructors.map((i) => [i.name, ...i.ledActivities.map((a) => a.name)])
  }

  costServices () {
    return this.#services.reduce((t, s) => t + s.calculateCost(), 0)
  }

  costInstructors () {
    return this.#instructors.reduce((t, i) => t + i.salary, 0)
  }
}

module.exports = SportCenter
