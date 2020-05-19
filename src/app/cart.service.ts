import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    items = [];

    addToCart(product) {
        this.items = product;
      }
    
      getItems() {
        return this.items;
      }


    removeitem(product){
        this.items.splice(product, 1);
        }
    
    
      clearCart() {
        this.items = [];
        return this.items;
      }
  constructor() {}

}