import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { CreateNewOfferComponent } from "./create-new-offer.component";

const routes:Routes=[
    {
        path:'',
        children:[
            {
                path:'',
                component:CreateNewOfferComponent
            },
            {
                path:":id/create",
                loadChildren:()=>import("./create-offer/create-offer.module").then(m=>m.CreateOfferModule)
            }
        ]
    }
]
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class CreateNewOfferRoutingModule{}