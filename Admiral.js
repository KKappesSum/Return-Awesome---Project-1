//the number of ships needs to be asked and passed into Admiral via Exec class
/*
admiral has numShips = number of ships

Do you guys want the name to be passed in as well??
*/
class Admiral {
  _numShips;
  _firingMap;
  _shipMap;
  _fleet;
  name;
  constructor(num, pName) {
    this._numShips = num;
    this._firingMap = 0;
    this._shipMap = 0;
    this._fleet = 0;
    this.name = pName;
  }

  getNumShips() {
    return this._numShips;
  }

  getFiringMap() {
    return this._firingMap;
  }

  getShipMap() {
    return this._shipMap;
  }

  getFleet() {
    return this._fleet;
  }

  getName() {
    return this.name;
  }

  setNumShips(x) {
    this._numShips = x;
  }

  setFiringMap(x) {
    this._firingMap = x;
  }

  setFleet(x) {
    this._fleet = x;
  }

  setShipMap(x) {
    this._shipMap = x;
  }

  setName(x) {
    this.name = x;
  }
}
