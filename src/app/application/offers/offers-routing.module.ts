import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersComponent } from './offers.component';

const routes: Routes = [
  { 
    path: '',
    children:[
      {
        path:'',
        component: OffersComponent 
      },
      {
        path:':id/create',
        loadChildren:()=>import("./create-offer/create-offer.module").then(m=>m.CreateOfferModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule{
    
}