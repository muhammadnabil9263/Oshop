import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './compnents/admin-products/admin-products.component';
import { AuthGuard } from '../gaurds/auth.guard';
import { AdminAuthGuard } from '../gaurds/admin-auth.guard';
import { AdminOrdersComponent } from './compnents/admin-orders/admin-orders.component';
import { ProductFormComponent } from './compnents/product-form/product-form.component';

const routes: Routes = [
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/products/new',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
