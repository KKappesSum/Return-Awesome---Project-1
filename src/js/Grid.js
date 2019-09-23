/**
 * Class for storing and updating information for the game map.
 * @param {number} size - The size of the game board, which is defined in {@link Config}.
 * @prop {Config} conf - a {@link Config} object.
 * @prop {Array<Array<string>>} arr - contains the status of each position on the game board.
 * @prop {boolean} isHit - used when checking whether a cell has been hit during gameplay.
 */
class Grid{   
    arr;
    conf;
    isHit;

    constructor(size){
        this.conf = new Config();
        this.arr = new Array(size);
        for(let i = 0; i < size; i++){
            this.arr[i] = new Array(size);
            for(let j = 0; j < size; j++){
                this.arr[i][j] = this.conf.oceanTypes.WATER;
            }
        }
    }

    /**
     * Places ships on the grid based on an array of coordinates and updates the onscreen table.
     * @param {string[]} locationArr - An array of coordinates occupied by a Ship.
     * @param {string} tableId - the elementId for the table to be updated.
     */
    populateGrid(locationArr, tableId){
        for(let i = 0; i < locationArr.length; i++){
            this.arr[(locationArr[i].substring(0, locationArr[i].indexOf(":"))) - 1]
                [(locationArr[i].substring(locationArr[i].indexOf(":") + 1)) - 1] 
                = this.conf.oceanTypes.SHIP;
        }
        this.refreshTable(tableId, true);
    }

    /**
     * Updates an onscreen table to display the current values in the grid.
     * @param {string} tableId - the elementId for the table to be updated.
     * @param {boolean} isShipMap - if true, the ship map is updated; if false, the firing map is updated.
     */
    refreshTable(tableId, isShipMap){
        let table = document.getElementById(tableId);
        let cell = 0;
        for(let i = 0; i < document.getElementById(tableId).rows.length; i++){
            for(let j = 0; j < document.getElementById(tableId).rows[0].cells.length; j++){
                if(isShipMap == true){
                    if(this.arr[i][j] == this.conf.oceanTypes.MISS){
                        table.rows[i].cells[j].style.backgroundColor = this.conf.oceanTypes.MISS;
                    }else if(this.arr[i][j] == this.conf.oceanTypes.SHIP){
                        table.rows[i].cells[j].style.backgroundColor = this.conf.oceanTypes.SHIP;
                    }else if(this.arr[i][j] == this.conf.oceanTypes.HIT){
                        table.rows[i].cells[j].style.backgroundColor = this.conf.oceanTypes.HIT;
                    }else{
                        table.rows[i].cells[j].style.backgroundColor = this.conf.oceanTypes.WATER;
                    }
                }else{
                    if(this.arr[i][j] == this.conf.oceanTypes.MISS){
                        table.rows[i].cells[j].style.backgroundColor = this.conf.oceanTypes.MISS;
                    }else if(this.arr[i][j] == this.conf.oceanTypes.HIT){
                        table.rows[i].cells[j].style.backgroundColor = this.conf.oceanTypes.HIT;
                    }else{
                        table.rows[i].cells[j].style.backgroundColor = this.conf.oceanTypes.WATER;
                    }
                }
            }
        }
    }

    /**
     * Changes a single cell based on whether or not the shot was a hit or a miss.
     * @param {string} location - The coordinate location of the cell to update.
     * @param {string} tableId - The identifier for the table to be changed.
     * @return {boolean} true if a ship was hit; false if it was a miss.
     */
    updateCell(location, tableId){
        this.isHit = false;
        let i = location.substring(0, location.indexOf(":")) - 1;
        let j = location.substring(location.indexOf(":") + 1) - 1;
        if(this.arr[i][j] == this.conf.oceanTypes.SHIP){
            this.arr[i][j] = this.conf.oceanTypes.HIT;
            this.isHit = true;
        }else if(this.arr[i][j] == this.conf.oceanTypes.HIT){
            //Party Parrot dances again! (But seriously nothing goes here for a reason.)
        }else{
            this.arr[i][j] = this.conf.oceanTypes.MISS;
        }
        this.refreshTable(tableId, false);
        return this.isHit;
    }
}
