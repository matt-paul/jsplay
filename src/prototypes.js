const food = {
  init: function (type) {
    this.type = type
  },
  eat: function() {
    console.log("You ate all the " + this.type)
  }
}

const waffle = Object.create(food)
waffle.init("waffle")

const carrot = Object.create(food)
carrot.init("carrot")

console.log("waffle is food", food.isPrototypeOf(waffle))
