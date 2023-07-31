import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { NewReservationComponent } from "./new-reservation.component";

const routes:Routes=[
    {
        path:'',
        component:NewReservationComponent
    }
]
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class NewReservationRoutingModule {}