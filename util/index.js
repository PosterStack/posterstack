class Abstract {

  constructor() {
    if (new.target === Abstract) {
      throw new TypeError(`Cannot instantiate abstract type`)
    }
  }

}

module.exports = {Abstract}