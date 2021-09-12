import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  


  cart = this.cartService.getItems();
  
  items = Object.values(this.cart)

  total = 0

  remove = this.cartService.items
  
  checkOutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService: CartService,
    private formBuilder: FormBuilder) { }

  onSubmit(): void{
    this.cart = this.cartService.clearCart()
    this.items = Object.values(this.cart)
    console.warn('Your order has been submited', this.checkOutForm.value)
    this.checkOutForm.reset()

  }

  ngOnInit(): void {
    for(let item of this.items){
      this.total += item.count * item.product.price
    }
  }

}
