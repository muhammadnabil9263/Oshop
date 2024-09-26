import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { OrderSucssesComponent } from './components/order-sucsses/order-sucsses.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [
    ShippingFormComponent,
    ShoppingCartSummaryComponent,
    OrderSucssesComponent,
    ProductsComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    CheckOutComponent,

  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
