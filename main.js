
var itemsOnScreen = {};
var itemsWithGravity = [];
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