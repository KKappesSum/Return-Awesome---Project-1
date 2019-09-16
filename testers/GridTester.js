class GridTester{
    constructor(){
        let testGrid = new Grid(8);
        
        console.log("Grid population test: ");
        if(this.testPopulateGrid() == true){
            console.log("SUCCESS");
        }else{
            console.log("FAILURE");
        }

        console.log("Grid refresh test: ")
        if(this.testRefreshTable == true){
            console.log("SUCCESS");
        }else{
            console.log("FAILURE");
        }

        console.log("Update cell test: ");
        if(this.testUpdateCell() == true){
            console.log("SUCCESS");
        }else{
            console.log("FAILURE");
        }
    }

    testPopulateGrid(){
        let locationArr = ["1:1", "1:2", "1:3", "1:4", "1:5"];
        try{
            Grid.populateGrid(locationArr, "#ship1");
        }catch(error){
            console.log(error);
            return false;
        }
        return true;
    }
    
    testRefreshTable(){
        try{
            console.log("/n/tSubtest Firing Map: ");
            Grid.refreshTable("#ship1", false);
            console.log("SUCCESS");
            console.log("/n/tSubtest Ship Map: ");
            Grid.refreshTable("#ship1", true);
        }catch(error){
            console.log(error);
            return false;
        }
        return true;
    }

    testUpdateCell(){
        try{
            console.log("/n/tSubtest Hit: ");
            Grid.updateCell("1:1", "#ship1");
            console.log("SUCCESS");
            console.log("/n/tSubtest Miss: ");
            Grid.updateCell("4:4", "#ship1");
        }catch(error){
            console.log(error);
            return false;
        }
        return true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#gridtest").style.border = "solid black 1px";
    document.querySelector("#gridtest").style.background = "#eeeeee";
    // The user provides the main function
    let test = new GridTester();
});