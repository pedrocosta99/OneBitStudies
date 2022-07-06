class Weapon{
  constructor(id){
    this.id = id
    this.shotsLeft = 5
  }

  shoot(){
    if (this.shotsLeft > 0){
      console.log('Bang!');
      this.shotsLeft -= 1
    } else{
      throw new Error("Arma " + this.id + ' sem munição.')
    }
  }

  reload(){
    this.shotsLeft = 5
    console.log('reloading...');
  }
}

let fenix = new Weapon(10)

try{
  fenix.shoot()
  fenix.shoot()
  fenix.shoot()
  fenix.shoot()
  fenix.shoot()
  fenix.shoot() // No shots left at this point
} catch(error){
  console.log(error.message);
  fenix.reload()
} finally{
  console.log('hj teve pipoco!!');
}

console.log(fenix);
