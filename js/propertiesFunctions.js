var loadedData;

function loadDataAtProperties(id){
    loadedData = itemsOnScreen[id];
    document.getElementById("properties-position-X").value = loadedData.positionX;
    document.getElementById("properties-position-Y").value = loadedData.positionY;
    document.getElementById("properties-size-X").value = loadedData.sizeX;
    document.getElementById("properties-size-Y").value = loadedData.sizeY;
    document.getElementById("properties-color").value = loadedData.color;
    document.getElementById("properties-speedX").value = loadedData.speedX;
    document.getElementById("properties-speedY").value = loadedData.speedY;
    if(loadedData.hasGravity){
        document.getElementById("properties-gravity").checked = true;
    }else{
        document.getElementById("properties-gravity").checked = false;
    }
    if(loadedData.hasCollide){
        document.getElementById("properties-collide").checked = true;
    }else{
        document.getElementById("properties-collide").checked = false;
    }
    document.getElementById("properties-bouncing-factor").value = loadedData.bouncingFactor;
}

function changePropertiesColor(){
    if(loadedData != undefined){
        loadedData.color = document.getElementById("properties-color").value;
        loadedData.item.style.background = document.getElementById("properties-color").value;
    }
}

function changePropertiesPosX(){
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

function changePropertiesGravity(){
    if(loadedData != undefined){
        if(loadedData.hasGravity){
            loadedData.speedY = 0;
            itemsWithGravity = itemsWithGravity.filter(function(value){ 
                return value.id != loadedData.id;
            });
            loadedData.hasGravity = false;
        } else{
            itemsWithGravity.push(loadedData);
            loadedData.hasGravity = true;
        }
    }
}

function changePropertiesCollide(){
    if(loadedData != undefined){
        if(loadedData.hasCollide){
            itemsWithCollide = itemsWithCollide.filter(function(value){ 
                return value.id != loadedData.id;
            });
            loadedData.hasCollide = false;
        } else{
            itemsWithCollide.push(loadedData);
            loadedData.hasCollide = true;
        }
    }
}

function changePropertiesBouncingFactor(){
    if(loadedData != undefined){
        loadedData.bouncingFactor = document.getElementById("properties-bouncing-factor").value;
    }

}