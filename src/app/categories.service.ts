import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
  public getCategories():Observable<Category[]>{
    return this.http.get<Category[]>("http://localhost:3000/categories")
  }
  public getCategory(categoryId:number):Observable<Category>{
    return this.http.get<Category>(`http://localhost:3000/categories/${categoryId}?_embed=products`)
  }
}
export interface Category{
  id: number;
  name: string;
  products?: Product[]
}