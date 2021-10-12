

    document.addEventListener('lifeCycle', function() {
        applyGravity();
        applyForces();
        calculateCollisions();
        moveObjects();
        loadDataAtProperties(activeItem.id)
    });


    function applyGravity(){
        for(let item of itemsWithGravity){
            if(item.hasGravity && item.speedY <= globalConfig.maxGravitySpeed){
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
            itemsOnScreen[itemId].item.style.top = parseFloat(itemsOnScreen[itemId].item.style.top.replace("px", ""))+itemsOnScreen[itemId].speedY + 'px';
            itemsOnScreen[itemId].positionY = parseFloat(itemsOnScreen[itemId].item.style.top.replace("px", ""));
            itemsOnScreen[itemId].item.style.left = parseFloat(itemsOnScreen[itemId].item.style.left.replace("px", ""))+itemsOnScreen[itemId].speedX + 'px';
            itemsOnScreen[itemId].positionX = parseFloat(itemsOnScreen[itemId].item.style.left.replace("px", ""));
            garbageCollection(itemId);
        }
    }


    function applyMovement(item){
        for(let collider of itemsWithCollide){
            if(item.id != collider.id){
                if(item.speedY > 0 && notCollidingDown(item, collider)){
                    item.item.style.top  = parseFloat(item.item.style.top.replace("px", ""))+item.speedY + 'px';
                    item.positionY = parseFloat(item.item.style.top.replace("px", ""));
                }
            }
        }
    }

    function notCollidingY(item, collider){
        var itemMinPosX = parseFloat(item.positionX);
        var itemMaxPosX = parseFloat(item.positionX) + parseFloat(item.sizeX);
        var colMinPosX = parseFloat(collider.positionX);
        var colMaxPosX = parseFloat(collider.positionX) + parseFloat(collider.sizeX);
        var itemMaxPosY = parseFloat(item.positionY) + parseFloat(item.sizeY) + parseFloat(item.speedY);
        var itemMinPosY = parseFloat(item.positionY) + parseFloat(item.speedY);
        var colMinPosY = parseFloat(collider.positionY) + parseFloat(collider.speedY);
        var colMaxPosY = parseFloat(collider.positionY) + parseFloat(collider.sizeY) + parseFloat(collider.speedY);
        var combinedbouncing = parseFloat(item.bouncingFactor) + parseFloat(collider.bouncingFactor);
        if((itemMinPosX < colMaxPosX && itemMinPosX > colMinPosX) ||
            (itemMaxPosX < colMaxPosX && itemMaxPosX > collider.positionX)){
                if(itemMaxPosY > colMinPosY && itemMaxPosY < colMaxPosY && itemMinPosY < colMinPosY){
                    item.speedY = item.speedY > 0? -1 * item.speedY * combinedbouncing: item.speedY * combinedbouncing;
                    item.speedY = Math.abs(item.speedY) > globalConfig.bouncingLimitSpeed ? item.speedY: 0;
                    item.item.style.top  = collider.positionY - item.sizeY + 'px';
                    item.positionY = collider.positionY-item.sizeY;
                    collider.speedY = collider.speedY > 0? -1 * collider.speedY * combinedbouncing: collider.speedY * combinedbouncing;
                    collider.speedY = Math.abs(collider.speedY) > globalConfig.bouncingLimitSpeed ? collider.speedY: 0;
                } else if(itemMaxPosY > colMaxPosY && itemMinPosY < colMaxPosY && itemMinPosY > colMinPosY){
                    collider.speedY = collider.speedY > 0? -1 * collider.speedY * combinedbouncing: collider.speedY * combinedbouncing;
                    collider.speedY = Math.abs(collider.speedY) > globalConfig.bouncingLimitSpeed ? collider.speedY: 0;
                    collider.item.style.top  = item.positionY - collider.sizeY + 'px';
                    collider.positionY = item.positionY-collider.sizeY;
                    item.speedY = item.speedY > 0? -1 * item.speedY * combinedbouncing: item.speedY * combinedbouncing;
                    item.speedY = Math.abs(item.speedY) > globalConfig.bouncingLimitSpeed ? item.speedY: 0;
                }
        }
        return true;
    }

    function notCollidingX(item, collider){

    }
