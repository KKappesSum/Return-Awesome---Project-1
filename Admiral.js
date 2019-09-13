//the number of ships needs to be asked and passed into Admiral via Exec class
/*
admiral has numShips = number of ships

*/
class Admiral {
  constructor(num) {
    this.numShips = num;
    this.firingMap = 0;
    this.shipMap = 0;
    this.fleet = 0;
    this.name = "";
  }

  getNumShips() {
    return this.numShips;
  }

  getFiringMap() {
    return this.firingMap;
  }

  getShipMap() {
    return this.shipMap;
  }

  getFleet() {
    return this.fleet;
  }

  getName() {
    return this.name;
  }

  setNumShips(x) {
    this.numShips = x;
  }

  setFiringMap(x) {
    this.firingMap = x;
  }

  setFleet(x) {
    this.fleet = x;
  }

  setShipMap(x) {
    this.shipMap = x;
  }

  setName(x) {
    this.name = x;
  }
}
