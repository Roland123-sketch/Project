import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Product, ProductsService } from '../products.service'
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  private productId: number = 0;
  public product: Product|undefined;
  constructor(private router:ActivatedRoute,private productService: ProductsService, private cartService:CartService) { }
  addToCart(product: Product){
    this.cartService.addToCart(product)
    
  }
  clearToCart(product: Product){
    this.cartService.clearToCart(product)
  }
  ngOnInit(): void {
    this.productId = this.router.snapshot.params.productId
    console.log(this.productId)
    this.productService.getProduct(this.productId).subscribe((prod: Product)=>{
      this.product = prod
      console.log(this.product)
    })

  }

}

