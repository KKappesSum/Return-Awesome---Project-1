/** Class representing a Ship. */
class Ship {
	#size;
	#afloat;
	#numHits;
	#coords;

	/**
	 * Create a Ship object.
	 * @param {number} size - The size (i.e. length) of the Ship.
	 */
	constructor(size) {
		this.#size = size;
		this.#afloat = true;
		this.#numHits = 0;
		this.#coords = newArray(size);
	}

	/* TODO: setters & getters */

	getSize() {
		return Ship.#size;
	}

}