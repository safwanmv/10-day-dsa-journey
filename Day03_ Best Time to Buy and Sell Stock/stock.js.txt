
var maxProfit = function(prices) {
    let miniPrice=Infinity;
    let maxProfit=0;

    for(let price of prices){
        if(price < miniPrice){
            miniPrice=price;
        }else if(price - miniPrice > maxProfit){
            maxProfit =  price - miniPrice;
        }
    }
    return maxProfit;
}