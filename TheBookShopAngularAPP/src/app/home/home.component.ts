import { Component, OnInit } from '@angular/core';
import { BestSell} from '../models/bestSellBooks';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit{
  public bestSellers: Array<BestSell>;
  public nombre:string;
  constructor(
    private _route:ActivatedRoute,
    private _router:Router
  ) {
    this.bestSellers = [
        new BestSell ('China Rich Girlfriend', 25, '../assets/img/firstBook.jpg'),
        new BestSell ('Crazy Rich Asians ', 12, '../assets/img/secondBook.jpg'),
        new BestSell ('Rich People Problems', 25, '../assets/img/3book.jpg'),

    ];
    this._route.params.subscribe((params:Params) =>{
     this.nombre = params.nombre;
     
     console.log(this.nombre);

  })
 }

 ngOnInit(){
     console.log(this.bestSellers);
 }

}
