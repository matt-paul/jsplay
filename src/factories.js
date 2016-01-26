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

$('button.myButton')
 .click(sniffles.talk)

// alternatively....
//
const dog = () => {
  const sound = 'woof'
  return {
    talk: () => console.log(sound)
  }
}

const sniffles = dog()
sniffles.talk()

//eg the below works as expected

$('button.myButton')
 .click(sniffles.talk)
