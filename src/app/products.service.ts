import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  public getProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products")
  }
  public getProduct(productId: number):Observable<Product>{
    return this.http.get<Product>(`http://localhost:3000/products/${productId}`)
  }
}
export interface Product{
  id: number;
  description: string;
  price: number;
  photos: string[];
  quantity: number;
  categoryId: number;
  details: string;
}