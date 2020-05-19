import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product : any ; 
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
    let key = product.name;
    sessionStorage.setItem(key, product.price);
  }
  constructor(private route: ActivatedRoute, 
    private cartService: CartService ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
