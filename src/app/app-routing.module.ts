import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './core/components/login/login.component';
import { AdminOrdersComponent } from './admin/compnents/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/compnents/admin-products/admin-products.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { AuthGuard } from './gaurds/auth.guard';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { AdminAuthGuard } from './gaurds/admin-auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, },

  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
