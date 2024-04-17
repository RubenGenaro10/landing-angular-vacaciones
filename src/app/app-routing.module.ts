import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContacComponent } from './contac/contac.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'products',component:ProductComponent},
  { path:'products/:productId',component:ProductDetailComponent},
  { path:'contact',component:ContacComponent},
  { path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
