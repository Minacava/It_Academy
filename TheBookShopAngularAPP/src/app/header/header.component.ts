import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public login: boolean;
  
  constructor(
    private _router:Router) { 
      this.login = false;
    }

  ngOnInit() {
  }
 redirect(){
  this._router.navigate(['ToBuy']);
 }
 setLogin(){
   this.login = true;
 }
 unsetLogin(){
  this.login = false;
 }
}
