import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../services/petitions.service';

@Component({
  selector: 'app-to-buy',
  templateUrl: './to-buy.component.html',
  styleUrls: ['./to-buy.component.css'],
  providers: [
    PetitionsService
  ]
  
})
export class ToBuyComponent implements OnInit {

  constructor(
    private _petitionsService:PetitionsService
  ) { }

  ngOnInit() {
    this._petitionsService.getBook().subscribe(
        result => {
          console.log(result.title);
          console.log(result.description  );
        },
        error => {
          console.log(<any>error);
        }
    );
  }
}
