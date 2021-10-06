var loadedData;

function loadDataAtProperties(id){
    loadedData = itemsOnScreen[id];
    document.getElementById("properties-position-X").value = loadedData.positionX.replace("px", "");
    document.getElementById("properties-position-Y").value = loadedData.positionY.replace("px", "");
    document.getElementById("properties-color").value = loadedData.color;
}

function changePropertiesColor(){
    if(loadedData != undefined){
        loadedData.color = document.getElementById("properties-color").value;
        loadedData.item.style.background = document.getElementById("properties-color").value;
    }
}

function changePropertiesX(){
    if(loadedData != undefined){
        loadedData.positionX = document.getElementById("properties-color").value;

    }
}

function changePropertiesX(){
    if(loadedData != undefined){}
}