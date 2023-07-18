
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalOffersContentComponent } from './personal-offers-content/personal-offers-content.component';
const routes:Routes = [
    {
        path:"",
        children:[
            {
                path:"",
                component:PersonalOffersContentComponent
            },
            {
                path:":id/edit",
                loadChildren:()=>import("./update-offer/update-offer.module").then(m=>m.UpdateOfferModule)
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonalOffersRoutingModule{

}