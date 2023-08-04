import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      },
      {
        path:"new_offer",
        loadChildren:()=>import("./create-new-offer/create-new-offer.module").then(m=>m.CreateNewOfferModule)
      },
      {
        path:"reservations",
        loadChildren:()=>import("./reservations/reservations.module").then(m=>m.ReservationsModule)
      },
      {
        path:"create-reservation",
        loadChildren:()=>import("./create-reservation/create-reservation.module").then(m=>m.CreateReservationModule)
      },
      {
        path:"product-stores",
        loadChildren:()=>import("./product-stores/product-stores.module").then(m=>m.ProductStoresModule)
      },
      {
        path:"our-stores",
        loadChildren:()=>import("./our-stores/our-stores.module").then(m=>m.OurStoresModule)
      },
      {
        path:"discounts",
        loadChildren:()=>import("./discounts/discounts.module").then(m=>m.DiscountsModule)
      },
      {
        path:"surveys",
        loadChildren:()=>import("./surveys/surveys.module").then(m=>m.SurveysModule)
      },
      {
        path:"promotions",
        loadChildren:()=>import("./promotions/promotions.module").then(m=>m.PromotionsModule)
      },
      {
        path:"meetings",
        loadChildren:()=>import("./meetings/meetings.module").then(m=>m.MeetingsModule)
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
