


    document.addEventListener('lifeCycle', function() {
        for(let item of itemsWithGravity){
            item.item.style.top  = parseInt(item.item.style.top.replace("px", ""))+8 + 'px';
            itemsOnScreen[item.id].positionY = item.item.style.top;
            loadDataAtProperties(activeItem.id);
        }
    });