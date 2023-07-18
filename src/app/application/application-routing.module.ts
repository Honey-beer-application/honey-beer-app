import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ScannerComponent } from './scanner/scanner.component';
import { OffersComponent } from './offers/offers.component';
import { PersonalOffersComponent } from './personal-offers/personal-offers.component';
import { UpdateOfferComponent } from './personal-offers/update-offer/update-offer.component';
import { ApplicationComponent } from './application.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"prefix",
    component:ApplicationComponent,
    children:[
      {
        path:"",
        pathMatch:"full",
        loadChildren:()=>import("./main-page/main-page.module").then(m=>m.MainPageModule)
      },
      {
        path:"products",
        loadChildren:()=>import("./products/products.module").then(m=>m.ProductsModule)
      },
      
      {
        path:"scanner",
        loadChildren:()=>import("./scanner/scanner.module").then(m=>m.ScannerModule),
      },
      {
        path:"offers",
        loadChildren:()=>import("./offers/offers.module").then(m=>m.OffersModule),
      },
      {
        path:"personal_offers",
        loadChildren:()=>import("./personal-offers/personal-offers.module").then(m=>m.PersonalOffersModule)
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
