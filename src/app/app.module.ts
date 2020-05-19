import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { productservice } from './product.service';
import { CartService } from './cart.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component:CategoriesComponent },
      { path: 'stationery', component: ProductlistComponent },
      { path: 'products/:productId', component: ProductdetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'invoice', component: CheckoutComponent},
      { path: 'about_us', component:AboutusComponent}
    ])
  ],
  declarations: [
    
    AppComponent,
    TopbarComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    CartComponent,
    CategoriesComponent,
    CheckoutComponent,
    AboutusComponent,
    
  ],
  providers : [
    productservice ,
    CartService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


