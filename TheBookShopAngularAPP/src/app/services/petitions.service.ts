import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ()
export class PetitionsService{
    public url: string;
    constructor(
        public _http:HttpClient
    ){
        this.url = "https://ghibliapi.herokuapp.com";
    }

    getBook():Observable<any>{
        return this._http.get(this.url + '/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49');
    }
}

