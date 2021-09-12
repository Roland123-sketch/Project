import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShippingComponent } from './shipping/shipping.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    CartComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    CategoryDetailsComponent,
    ShippingComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,RouterModule.forRoot([ { path:'',component: ProductsComponent},
    {path:'products/:productsId', component:ProductDetailsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'shipping', component: ShippingComponent}]),
   
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
