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

    }
    
    testRefreshTable(){

    }

    testUpdateCell(){

    }
}