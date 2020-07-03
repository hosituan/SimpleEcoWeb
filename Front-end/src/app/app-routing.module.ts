import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { AuthService as AuthGuard1 } from './services/auth.service';

const routes: Routes = [


  { path: '',    
   component: ProductListComponent},
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard1]
    },
  {
    path: 'product/list',
    component: ProductListComponent
    },
  {
    path: 'product/add',
    component: ProductAddComponent,
    canActivate: [AuthGuard] 
    },
  {
    path: 'product/detail/:id',
    component: ProductDetailComponent
    },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard1]
    },
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

