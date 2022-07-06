class Spaceship {
  static get decelerationRate(){
    return 0.17
  }

  constructor(name, crewQuantity) {
      this.name = name
      this.crewQuantity = crewQuantity
      this.speed = 0
  }

  speedUp = (acceleration) => {
    this.speed += acceleration * (1 - Spaceship.decelerationRate)
  }
}

class BattleSpaceship extends Spaceship {
  constructor(guns, name, crewQuantity) {
    super(name, crewQuantity)
    this.guns = guns
  }
}

class TransportSpaceship extends Spaceship {
  constructor(seats, name, crewQuantity) {
    super(name, crewQuantity)
    this.seats = seats
  }
}


function showMenu() {
  let chosenOption
  while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
      chosenOption = prompt(  "O que deseja fazer?\n" +
                              "1- Acelerar a nave\n" +
                              "2- Trocar a nave\n" +
                              "3- Imprimir e sair")
  }
  return chosenOption
}

function createSpaceship() {
  let spaceshipName = prompt("Informe o nome da nave")
  let crewQuantity = prompt("Informe a quantidade de tripulantes")
  let spaceshipType = prompt('Informe o tipo: 1 = battle; 2 = transporte')
  if (spaceshipType == 1){
    let guns = prompt('Informe o número de armas')
    let spaceship = new Spaceship(spaceshipName, crewQuantity, guns)
    return spaceship
  }else{
    let seats = prompt('Informe o número de lugares')
    let spaceship = new Spaceship(spaceshipName, crewQuantity, seats)
    return spaceship
  }
}

function printSpaceship(spaceship) {
  let spaceshipStats = `Name: ${spaceship.name} \n`+
                  `Crew size: ${spaceship.crewQuantity} \n`+
                  `Current speed: ${spaceship.speed} \n`
  alert(spaceshipStats)
}

let chosenOption

while(chosenOption != "4") {
  var spaceship = createSpaceship()
  chosenOption = showMenu()
  switch(chosenOption) {
    case "1":
      let acceleration = prompt('Set acceleration')
      this.spaceship.speedUp(acceleration)
    case "2":
      // let spaceship = createSpaceship()
    case "3":
      this.printSpaceship(this.spaceship)
      chosenOption = '4'
  }
}
