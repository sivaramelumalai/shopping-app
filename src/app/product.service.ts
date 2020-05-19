import{ Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from "./products";
 
 @Injectable()
 export class productservice{
 
    //private BASE_URL : String = "http://localhost:3002/products";

    constructor(  private httpclient: HttpClient ){}


    findall(){
        return this.httpclient.get( "http://localhost:3002/products" + "")
        .toPromise()
        .then(res => res as products[])
    }
    
 }