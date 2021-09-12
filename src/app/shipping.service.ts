import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor() { }
}

export interface Shipping{
  id: string,
  type: string;
  price: number;
}
