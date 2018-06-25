
// --------------------------------HOME PAGE 
//Best Sell 
    let books = [
            { "pic":"img/call_to_action/books2.jpg",
            "title":"Lalala"
            },

            { "pic":"img/call_to_action/books.jpg",
            "title":"lululu"
            },

            { "pic":"img/call_to_action/book-ejemplo3.jpg",
            "title":"lululu"
            }
   ];        

class bestSell{
    consructor(books){
        this.d1 = document.getElementById("bSell_section");
        this.books = books;
        console.log(books);
       }
    showBooks(){
         for(let product of this.books){
            let div1 = document.createElement ("div");
            div1.classList.add("col-4", "my-1");

            let title = document.createElement("h6");
            title.innerHTML = product.title;
            title.classList.add("card-title");
            div1.appendChild(title);

            let pic = document.createElement("img");
            pic.setAttribute("src", product.pic); 
            pic.classList.add("card-image-best-Sell", "img-fluid",  "shadow-sm" );
            div1.appendChild(pic);
            
        }
    }
  
};
function loadBestSell(books){
    let myItem = new bestSell(books);
     myItem.showBooks();
}

let data = loadBestSell();
 
  
   

