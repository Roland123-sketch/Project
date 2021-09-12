import { Injectable } from '@angular/core';
import { Product } from './products.service';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Cart = {};


  addToCart (product: Product){
    if(this.items[product.id]){
      this.items[product.id].count++
    }
    else{
      this.items[product.id] = {
        count: 1,
        product
      }
    }
    localStorage.setItem('cart',JSON.stringify(this.items))
  }
  getItems(){
    return this.items;
  }

 clearToCart(product: Product){
    if(this.items[product.id]&&this.items[product.id].count > 0){
      this.items[product.id].count--
    }
   
  };

  clearCart(){
    this.items = {};
    return this.items;
  }
   getShippingPrices(){
     return this.http.get<{type: string, price: number}[]>('http://localhost:3000/shippings');
   }

  constructor(private http: HttpClient) {
    if(localStorage.getItem('cart')){
      this.items = JSON.parse(localStorage.getItem('cart')||'')
    }
   }
}

export interface Cart {
  [key: string]:{
    product: Product,
    count: number,
  }
}