function add(btn, price){
    var cost = price
    if(document.cookie.length == 0){
        document.cookie = JSON.stringify([{id:btn.id, number: 1, cost: cost}]);
    }
    else{
        var cookieStr = document.cookie;
        var cookieArr = JSON.parse(cookieStr);

        var same = false;
        for(i = 0; i<cookieArr.length; i++){
            if(btn.id == cookieArr[i].id){
                same = true;
                cookieArr[i].number++;
                break;
            }
        }
        if(!same)
            cookieArr.push({id:btn.id, number: 1, cost:price});

        document.cookie = (JSON.stringify(cookieArr));
    }
    
}
function shop(btn){
    window.location.href="shop.html";
}