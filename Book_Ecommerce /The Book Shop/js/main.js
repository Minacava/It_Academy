
// --------------------------------HOME PAGE 
//------------Redirect

//------------Pages

//------------logo


//------------Best Sell 
var books = [
    { "pic":"img/call_to_action/theNeYorker.jpg",
    "title":"The New Yorker"},

    { "pic":"img/call_to_action/DesignasArt.jpg",
    "title":"Design as Art"},

    { "pic":"img/call_to_action/book-ejemplo3.jpg",
    "title":"Found my Tribe"}
];   


class BestSell{
    constructor(books){
        this.d1 = document.getElementById("bSell_section");
        this.books = books;
        console.log(books);
    }
    showBooks(){
         for(let product of this.books){
            let div1 = document.createElement("div");
            div1.classList.add("col-4", "my-1");

            let title = document.createElement("h6");
            title.innerHTML = product.title;
            title.classList.add("card-title");
            div1.appendChild(title);

            let pic = document.createElement("img");
            pic.setAttribute("src", product.pic); 
            pic.classList.add("card-image-best-Sell", "img-fluid",  "shadow-sm" );
            div1.appendChild(pic); 

            this.d1.appendChild(div1);
        }
    }
};
function loadBestSell(books){
    let myItem = new BestSell(books);
    myItem.showBooks();
}
var data = loadBestSell(books);


 
  
   

