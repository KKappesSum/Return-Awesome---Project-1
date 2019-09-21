
function clicked(){
    extra = new Extra();
    num = extra.tempFunc(); 
    document.getElementById("checkbox").value = num;

    let fromStorage = JSON.parse(sessionStorage.admin1);
    console.log(fromStorage);
    console.log(fromStorage.item);
    document.getElementById("classbox").value = fromStorage.item;
}