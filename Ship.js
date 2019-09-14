/** Class representing a Ship. */
class Ship {
	#size;
	#afloat;
	#numHits;
	#coords;

	/**
	 * Create a Ship object.
	 * @param {integer} size - The size (i.e. length) of the Ship.
	 */
	constructor(size) {
		this.#size = size;
		this.#afloat = true;
		this.#numHits = 0;
		this.#coords = newArray(size);
	}

	/* TODO: setters & getters */
	/**
	 * Get the ship's size.
	 * @return {integer} the Ship's size.
	 */
	getSize() {
		return Ship.#size;
	}

	/**
	 * Get the ship's status.
	 * @return {boolean} true if the ship is still afloat, false if the ship has been sunk.
	 */
	getAfloat() {
		return Ship.#afloat;
	}

}