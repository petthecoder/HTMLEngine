

    document.addEventListener('lifeCycle', function() {
        applyGravity();
        applyForces();
        calculateCollisions();
        moveObjects();
        loadDataAtProperties(activeItem.id)
    });


    function applyGravity(){
        for(let item of itemsWithGravity){
            if(item.speedY <= globalConfig.maxGravitySpeed){
                item.speedY += globalConfig.gravityForce;
            }
        }
    }

    function applyForces(){
        //TO DO
    }

    function calculateCollisions(){
        for(let i = 0; i < itemsWithCollide.length; i++){
            for(let j = i+1; j < itemsWithCollide.length; j++){
                notCollidingY(itemsWithCollide[i], itemsWithCollide[j]);
                notCollidingX(itemsWithCollide[i], itemsWithCollide[j]);
            }
        }
    }

    function moveObjects(){
        for(let itemId in itemsOnScreen){
            itemsOnScreen[itemId].item.style.top = parseInt(itemsOnScreen[itemId].item.style.top.replace("px", ""))+itemsOnScreen[itemId].speedY + 'px';
            itemsOnScreen[itemId].positionY = parseInt(itemsOnScreen[itemId].item.style.top.replace("px", ""));
            itemsOnScreen[itemId].item.style.left = parseInt(itemsOnScreen[itemId].item.style.left.replace("px", ""))+itemsOnScreen[itemId].speedX + 'px';
            itemsOnScreen[itemId].positionX = parseInt(itemsOnScreen[itemId].item.style.left.replace("px", ""));
        }
    }


    function applyMovement(item){
        for(let collider of itemsWithCollide){
            if(item.id != collider.id){
                if(item.speedY > 0 && notCollidingDown(item, collider)){
                    item.item.style.top  = parseInt(item.item.style.top.replace("px", ""))+item.speedY + 'px';
                    item.positionY = parseInt(item.item.style.top.replace("px", ""));
                }
            }
        }
    }

    function notCollidingY(item, collider){
        var itemMinPosX = parseInt(item.positionX);
        var itemMaxPosX = parseInt(item.positionX) + parseInt(item.sizeX);
        var colMinPosX = parseInt(collider.positionX);
        var colMaxPosX = parseInt(collider.positionX) + parseInt(collider.sizeX);
        var itemMaxPosY = parseInt(item.positionY) + parseInt(item.sizeY) + parseInt(item.speedY);
        var itemMinPosY = parseInt(item.positionY) + parseInt(item.speedY);
        var colMinPosY = parseInt(collider.positionY) + parseInt(collider.speedY);
        var colMaxPosY = parseInt(collider.positionY) + parseInt(collider.sizeY) + parseInt(collider.speedY);
        if((itemMinPosX < colMaxPosX && itemMinPosX > colMinPosX) ||
            (itemMaxPosX < colMaxPosX && itemMaxPosX > collider.positionX)){
                if(itemMaxPosY >= colMinPosY && itemMaxPosY <= colMaxPosY && itemMinPosY <= colMinPosY){
                    if(item.speedY>0){
                        var combinedbouncing = item.bouncingFactor + collider.bouncingFactor;
                        item.speedY = item.speedY > 0 ? -1 * item.speedY * combinedbouncing: item.speedY * combinedbouncing;
                        item.speedY = Math.abs(item.speedY) > globalConfig.bouncingLimitSpeed ? item.speedY: 0;
                        item.item.style.top  = collider.positionY - item.sizeY + 'px';
                        item.positionY = collider.positionY-item.sizeY;
                    }
                }
        }
        return true;
    }

    function notCollidingX(item, collider){

    }
