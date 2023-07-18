
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateOfferComponent } from './update-offer.component';
const routes:Routes = [
    {
        path:"",
        component:UpdateOfferComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpdateOfferRoutingModule{

}