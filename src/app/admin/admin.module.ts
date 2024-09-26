import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminProductsComponent } from './compnents/admin-products/admin-products.component';
import { AdminOrdersComponent } from './compnents/admin-orders/admin-orders.component';
import { ProductFormComponent } from './compnents/product-form/product-form.component';


@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
