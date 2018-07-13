function Coin(){
    this.value=0;

    this.flipCoin = function(){
        this.value = Math.floor(Math.random() * 2 );
    }
}