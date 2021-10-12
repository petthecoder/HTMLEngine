
var itemsOnScreen = {};
var itemsWithGravity = [];
var itemsWithCollide = [];
var isPaused = true;
var lifeCycleEvent = new CustomEvent("lifeCycle", {});
var lifeCycle = setInterval(function (){
    if(!isPaused){
        document.dispatchEvent(lifeCycleEvent);
    }
  }, 10);




function startLifeCycle(){
    isPaused = false;
}

function pauseLifeCycle(){
    console.log("itemsOnScreen")
    console.log(itemsOnScreen)
    console.log("itemsWithGravity")
    console.log(itemsWithGravity)
    console.log("itemsWithCollide")
    console.log(itemsWithCollide)
    isPaused = true;
}

function garbageCollection(itemId){
    var item = itemsOnScreen[itemId]
    if(item.positionY > globalConfig.worldSizeY || item.positionY < -1 * globalConfig.worldSizeY ||
        item.positionX > globalConfig.worldSizeX || item.positionX < -1 * globalConfig.worldSizeX){
        removeItem(item);
    }
}


var globalConfig = {
    gravityForce : 0.1,
    maxGravitySpeed : 9,
    bouncingLimitSpeed : 1.04,
    worldSizeX: 10000,
    worldSizeY: 10000
}