import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { ReservationsComponent } from "./reservations.component";

const routes:Routes=[
    {
        path:"",
        component:ReservationsComponent
    }
]
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class ReservationsRoutingModule{}