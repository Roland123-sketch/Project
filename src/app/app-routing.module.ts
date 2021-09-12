import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsService } from './products.service';
import { ProductsComponent } from './products/products.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  {
    path: "products",
    component: ProductsComponent
  
  },
  {
    path: "products/:productId",
    component: ProductDetailsComponent
  },
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "categories/:categoryId",
    component: CategoryDetailsComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "shipping",
    component: ShippingComponent
  },
  {
    path: "",
    redirectTo: "/products",
    pathMatch: "full"
  },
  {
    path:"**",
    component: NotFoundComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
