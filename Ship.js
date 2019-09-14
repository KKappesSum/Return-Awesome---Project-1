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

	/**
	 * Increment the number of hits the ship has taken, and call setSunk() if the ship takes enough hits to sink.
	 * @param none.
	 * @return none.
	 */
	incNumHits() {
		if(Ship.#afloat === true)
		{
			Ship.#numHits--;
			if(Ship.#numHits >= Ship.#numSize)
			{
				Ship.setSunk();
			}
		}
		// TODO: throw error if you try to sink a ship that's already sunk?  or prevent this in UI
	}

	/**
	 * Update the ship's status when it sinks.
	 * @param none.
	 * @return none.
	 */
	setSunk() {
		Ship.#afloat = false;
	}

}