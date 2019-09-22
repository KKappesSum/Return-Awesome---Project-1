/**
 * Grid object for storing and updating information for each battlegrid
 * @param {number} size: The size of the array to be created.
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

    // -- SETTERS & GETTERS --
    getArr() {
        return this.arr;
    }

    getCell(coord) {
        let row = Number(coord.substring(0,1));
        let col = Number(coord.substring(2));
        return this.arr[row - 1][col - 1];
    }

    getRow(row) {
        return this.arr[row];
    }

    getCol(col) {
        let tempArr = [];
        for(let row = 0; row < this.conf.BOARD_SIZE; row++)
        {
            tempArr.push(this.arr[row][col]);
        }
        return tempArr;
    }

    /**
     * Places ships on the grid based on an array of coordinates and updates the onscreen table
     * @param {Array} locationArr: An array of coordinates occupied by a Ship
     * @param {string} tableId: the elementId for the table to be updated
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
     * Updates an onscreen table to display the current values in the grid
     * @param {string} tableId: the elementId for the table to be updated
     * @param {bool} isShipMap: if true, the ship map is updated; if false, the firing map is updated.
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
     * @param {string} location: The coordinate location of the cell to update
     * @param {string} tableId: The identifier for the table to be changed
     * @returns {bool} true if a ship was hit; false if it was a miss
     */
    updateCell(location, tableId){
        this.isHit = false;
        let i = location.substring(0, location.indexOf(":")) - 1;
        let j = location.substring(location.indexOf(":") + 1) - 1;
        if(this.arr[i][j] == this.conf.oceanTypes.SHIP){
            this.arr[i][j] = this.conf.oceanTypes.HIT;
            this.isHit = true;
        }else if(this.arr[i][j] == this.conf.oceanTypes.HIT){
        }else{
            this.arr[i][j] = this.conf.oceanTypes.MISS;
        }
        this.refreshTable(tableId, false);
        return this.isHit;
    }
}
