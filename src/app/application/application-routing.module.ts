import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { ProductComponent } from './products/product/product.component';
import { ScannerComponent } from './scanner/scanner.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path:"",
        loadChildren:()=>import("./../main-page/main-page.module").then(m=>m.MainPageModule),
        component:MainPageComponent
      },
      {
        path:"products",
        loadChildren:()=>import("./products/products.module").then(m=>m.ProductsModule),
        component:ProductsComponent
      },
      {
        path:"products/:id",
        loadChildren:()=>import("./products/product/product.module").then(m=>m.ProductModule),
        component:ProductComponent
      },
      {
        path:"scanner",
        loadChildren:()=>import("./scanner/scanner.module").then(m=>m.ScannerModule),
        component:ScannerComponent
      },
      {
        path:"offers",
        loadChildren:()=>import("./offers/offers.module").then(m=>m.OffersModule),
        component:OffersComponent
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
