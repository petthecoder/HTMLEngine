var loadedData;

function loadDataAtProperties(id){
    loadedData = itemsOnScreen[id];
    document.getElementById("properties-position-X").value = loadedData.positionX.replace("px", "");
    document.getElementById("properties-position-Y").value = loadedData.positionY.replace("px", "");
    document.getElementById("properties-size-X").value = loadedData.sizeX.replace("px", "");
    document.getElementById("properties-size-Y").value = loadedData.sizeY.replace("px", "");
    document.getElementById("properties-color").value = loadedData.color;
}

function changePropertiesColor(){
    if(loadedData != undefined){
        loadedData.color = document.getElementById("properties-color").value;
        loadedData.item.style.background = document.getElementById("properties-color").value;
    }
}

function changePropertiesPosX(){
    console.log(loadedData)
    if(loadedData != undefined){
        loadedData.positionX = document.getElementById("properties-position-X").value;
        loadedData.item.style.left = document.getElementById("properties-position-X").value + "px";
    }
}

function changePropertiesPosY(){
    if(loadedData != undefined){
        loadedData.positionY = document.getElementById("properties-position-Y").value;
        loadedData.item.style.top = document.getElementById("properties-position-Y").value + "px";
    }
}

function changePropertiesSizeX(){
    console.log(loadedData)
    if(loadedData != undefined){
        loadedData.sizeX = document.getElementById("properties-size-X").value;
        loadedData.item.style.width = document.getElementById("properties-size-X").value + "px";
    }
}

function changePropertiesSizeY(){
    if(loadedData != undefined){
        loadedData.sizeY = document.getElementById("properties-size-Y").value;
        loadedData.item.style.height = document.getElementById("properties-size-Y").value + "px";
    }
}