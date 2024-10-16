class Client {
  #age = 50

  constructor (name, age) {
    this.name = name
    this.age = age
  }

  get category () {
    if (this.age < 22) {
      return 'Promesa'
    } else if (this.age > 40) {
      return 'Veterano'
    } else {
      return 'Senior'
    }
  }

  turnedYearsOld () {
    this.#age++
  }

  get age () {
    return this.#age
  }

  set age (a) {
    if (a >= 0) this.#age = a
  }
}

module.exports = Client
