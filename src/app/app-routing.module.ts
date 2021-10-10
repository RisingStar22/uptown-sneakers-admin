import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProductsComponent} from "./components/products/products.component";
import {AddProductComponent} from "./utils/add-product/add-product.component";
import {PopularProductsComponent} from "./utils/popular-products/popular-products.component";

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'products',
    component:ProductsComponent,
    children:[
      {
        path:'',
        component:PopularProductsComponent
      },
      {
        path:'add',
        component:AddProductComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
