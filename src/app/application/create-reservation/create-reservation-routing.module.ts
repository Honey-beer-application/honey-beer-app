import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { CreateReservationComponent } from "./create-reservation.component";
const routes:Routes=[
    {
        path:'',
        component:CreateReservationComponent
    },
    {
        path:':id/new-reservation',
        loadChildren:()=>import("./new-reservation/new-reservation.module").then(m=>m.NewReservationModule)
    }
]
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class CreateReservationRoutingModule {}