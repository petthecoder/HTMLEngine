

var mousePosition;
var offset = [0,0];
var isDown = false;
var activeItem;


document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

function createNewItem(){

    var newItem;

    newItem = document.createElement("div");
    newItem.id = generateId();
    newItem.style.position = "absolute";
    newItem.style.left = "300px";
    newItem.style.top = "250px";
    newItem.style.width = "100px";
    newItem.style.height = "100px";
    newItem.style.background = "green";
    newItem.style.color = "blue";

    document.getElementById("editor-area").appendChild(newItem);


    newItem.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            newItem.offsetLeft - e.clientX,
            newItem.offsetTop - e.clientY
        ];
        activeItem = newItem;
        loadDataAtProperties(newItem.id);
    }, true);



    newItem.addEventListener('click', function(e) {
        loadDataAtProperties(newItem.id);
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
        itemsOnScreen[newItem.id].positionX = newItem.style.left;
        itemsOnScreen[newItem.id].positionY = newItem.style.top;
        loadDataAtProperties(activeItem.id);
        
    }
}, true);

activeItem = newItem;
var itemToAdd = {id: newItem.id, color: newItem.style.background, positionX: newItem.style.left, positionY: newItem.style.top, item: newItem }
itemsOnScreen[newItem.id] = itemToAdd;
itemsWithGravity.push(itemToAdd)
}