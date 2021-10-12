

var mousePosition;
var offset = [0,0];
var isDown = false;
var activeItem;

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

function createNewItem(){

    var newItem = addNewItemToEditor();
    addItemEventListeners(newItem);
    addItemToLists(newItem);

}

function addNewItemToEditor(){

    var itemToAdd = document.createElement("div");

    itemToAdd.id = generateId();
    itemToAdd.style.position = "absolute";
    itemToAdd.style.left = "300px";
    itemToAdd.style.top = "250px";
    itemToAdd.style.width = "100px";
    itemToAdd.style.height = "100px";
    itemToAdd.style.background = generateRandomColor();
    itemToAdd.style.color = "blue";

    document.getElementById("editor-area").appendChild(itemToAdd);

    return itemToAdd;
}

function addItemEventListeners(item){

    item.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            item.offsetLeft - e.clientX,
            item.offsetTop - e.clientY
        ];
        activeItem = item;
        loadDataAtProperties(item.id);
    }, true);

    item.addEventListener('click', function(e) {
        loadDataAtProperties(item.id);
    }, true);

    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {
    
                x : event.clientX,
                y : event.clientY
    
            };
            activeItem.style.left = (mousePosition.x + offset[0]) + 'px';
            activeItem.style.top  = (mousePosition.y + offset[1]) + 'px';
            itemsOnScreen[item.id].positionX = parseInt(item.style.left.replace("px", ""));
            itemsOnScreen[item.id].positionY = parseInt(item.style.top.replace("px", ""));
            loadDataAtProperties(activeItem.id);
            
        }
    }, true);


}

function addItemToLists(item){

    activeItem = item;

    var itemToAdd = {
        id: item.id, 
        color: item.style.background, 
        positionX: 300, 
        positionY: 250, 
        speedX: 0, 
        speedY: 0, 
        sizeX: 100, 
        sizeY: 100, 
        item: item,
        hasGravity: true,
        hasCollide: true,
        bouncingFactor: 0}

        itemsOnScreen[item.id] = itemToAdd;
        itemsWithGravity.push(itemToAdd);
        itemsWithCollide.push(itemToAdd);

}

function removeItem(item){
    delete itemsOnScreen[item.id];
    itemsWithGravity = itemsWithGravity.filter(function(value){ 
        return value.id != item.id;
    });
    itemsWithCollide = itemsWithCollide.filter(function(value){ 
        return value.id != item.id;
    });
    item.item.remove();

}


    

