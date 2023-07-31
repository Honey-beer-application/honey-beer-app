import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { DiscountsComponent } from "./discounts.component";

const routes:Routes=[
    {
        path:'',
        component:DiscountsComponent
    }
]
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class DiscountsRoutingModule {}