const Hackable = require('hackablejs')

let Module = require('module')
let requirex = Module.prototype.require

Module.prototype.require = function () {

  return requirex.apply(this, arguments)
}

