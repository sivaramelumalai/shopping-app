import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
//import{products} from "../products"
//import { from } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;
  rem:any; 
  remove(rem){
    this.rem=this.cartservice.removeitem(rem );
  }
  clear(){
    this.items=this.cartservice.clearCart();}
  
  constructor(private cartservice: CartService) { 
   
    this.items = this.cartservice.getItems();
   
  }
  

  ngOnInit() {
  }

}
