import { Component } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';
import { productservice } from '../product.service'

@Component({
  selector: 'app-productlist',
  templateUrl: '../dummy.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  prodarray= [];
  products: products[];
  its={};
  share() { 
    window.alert('The product has been shared!');}
  favorite() {
      window.alert('The product added to the wishlist');
    }
    addtoarray(name, price)
    { 
      let a = {
        'name': name,
        'price': price
      };
      this.prodarray.push(a);
      console.log(a);
    }
    cart(){
      console.log("product array", this.prodarray)
      this.cartService.addToCart(this.prodarray);
    }
    constructor(private cartService: CartService,
      private productservice : productservice  ){} 

      ngOnInit(){
        this.productservice.findall().then(
          res =>{
            this.products = res;
            console.log(res)
          },
          error => {
            console.log(error);
          }
           
        );
      }
}