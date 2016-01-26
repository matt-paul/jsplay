'use strict';

//notes from https://www.youtube.com/watch?v=ImwrezYhw4w

// class Dog {
//   constructor() {
//     this.sound = "woof"
//   }
//   talk() {
//     console.log(this.sound)
//   }
// }
// const sniffles = new Dog()
// sniffles.talk()
//the below doesnt work because 'this' doesnt refer to sniffles, but a dom
//element.  Therefore would need an extra 'bind(sniffles)'

$('button.myButton').click(sniffles.talk);

// alternatively....
//
var dog = function dog() {
  var sound = 'woof';
  return {
    talk: function talk() {
      return console.log(sound);
    }
  };
};

var sniffles = dog();
sniffles.talk();

//eg the below works as expected

$('button.myButton').click(sniffles.talk);