
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
    isPaused = true;
}


var globalConfig = {
    gravityForce : 0.1,
    maxGravitySpeed : 9,
    bouncingLimitSpeed : 1.04
}