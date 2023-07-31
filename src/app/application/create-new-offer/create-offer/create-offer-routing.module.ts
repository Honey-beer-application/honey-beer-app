import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { CreateOfferComponent } from "./create-offer.component";
const routes:Routes = [
    {
        path:'',
        component:CreateOfferComponent
    }
]
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class CreateOfferRoutingModule {}