/**
 * Grid object for storing and updating information for each battlegrid
 * @param {number} size: The size of the array to be created.
 */
class Grid{   
    constructor(size){
        let conf = new Config();
        this.arr = new Array(size);
        for(let i = 0; i < size; i++){
            arr[i] = new Array(size);
            for(let j = 0; j < size; j++){
                arr[i][j] = conf.oceanTypes.properties["WATER"].value;
            }
        }
    }

    /**
     * Places ships on the grid based on an array of cooridants and updates the onscreen grid
     * @param {Array} locationArr: An array of all of the cells that contains a ship
     * @param {string} tableId: A string given the elementId for the table to be updated
     */
    populateGrid(locationArr, tableId){
        for(let i = 0; i < locationArr.length; i++){
            arr[locationArr[i].substring(0, locationArr[i].indexOf(":") - 1)]
                [locationArr[i].substring(locationArr[i].indexOf(":"))] 
                = conf.oceanTypes.properties["SHIP"].value;
        }   
        this.refreshTable(tableId, True);
    }

    /**
     * A function for updating an onscreen table to display the current values in the grid
     * @param {string} tableId:  A string given the elementId for the table to be updated
     * @param {bool} isShipMap: True: Updates the shipmap; False: Updates the firingmap
     */
    refreshTable(tableId, isShipMap){
        for(let i = 0; i < document.getElementById(tableId).rows.length; i++){
            for(let j = 0; j < document.getElementById(tableId).rows[0].cells.length; j++){
                let temp = document.getElementById(tableId).rows[i].cells[j].innerHTML.style.backgroundColor;
                if(isShipMap == true){
                    if(arr[i][j] == conf.oceanTypes.properties["SHIP"].value){
                        temp = conf.oceanTypes.properties["SHIP"].value;
                    }else if(arr[i][j] == conf.oceanTypes.properties["HIT"].value){
                        temp = conf.oceanTypes.properties["HIT"].value;
                    }else{
                        temp = conf.oceanTypes.properties["WATER"].value;
                    }
                }else{
                    if(arr[i][j] == conf.oceanTypes.properties["MISS"].value){
                        temp = conf.oceanTypes.properties["MISS"].value;
                    }else if(arr[i][j] == conf.oceanTypes.properties["HIT"].value){
                        temp = conf.oceanTypes.properties["HIT"].value;
                    }else{
                        temp = conf.oceanTypes.properties["WATER"].value;
                    }
                }
            }
        }
    }

    /**
     * Changes a single cell based on whether or not the shot was a hit or a miss.
     * @param {string} location: The location of the cell to update
     * @param {string} tableId: The identifier for the table to be changed
     * @returns {bool} True: a ship was hit; False: it was a miss
     */
    updateCell(location, tableId){
        this.isHit = false;
        i = location.substring(0, location.indexOf(":") - 1);
        j = location.substring(location.indexOf(":"));
        if(arr[i][j] == conf.oceanTypes.properties["SHIP"].value){
            arr[i][j] = conf.oceanTypes.properties["HIT"].value;
            isHit = true;
        }else{
            arr[i][j] = conf.oceanTypes.properties["MISS"].value;
        }
        this.refreshTable(tableId, false)
        return this.isHit;
    }

    
}
