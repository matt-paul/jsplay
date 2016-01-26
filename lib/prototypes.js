"use strict";

var food = {
  init: function init(type) {
    this.type = type;
  },
  eat: function eat() {
    console.log("You ate all the " + this.type);
  }
};

var waffle = Object.create(food);
waffle.init("waffle");

var carrot = Object.create(food);
carrot.init("carrot");

console.log("waffle is food", food.isPrototypeOf(waffle));