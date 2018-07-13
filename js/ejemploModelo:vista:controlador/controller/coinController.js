var coin = new Coin ();

flipCoin = function (){
    var text = "";
    coin.flipCoin();
    if(coin.value == 0) text ="Head";
    else text = "Tail";
 
    document.getElementById("coinInfo").innerHTML = text;
}