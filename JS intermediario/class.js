// Criando classes

class Spaceship {
  constructor(name, type = 'Rápida'){
    this.name = name
    this.type = type
    this.speed = 0
  }

  speedUp(acceleration){
    this.speed += acceleration
  }
}

let darwin = new Spaceship('Darwin')

console.log(darwin);

darwin.speedUp(10)

console.log(darwin);
