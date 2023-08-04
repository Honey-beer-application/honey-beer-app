import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { PromotionComponent } from "./promotion.component";

const routes:Routes=[
    {
        path:'',
        component:PromotionComponent
    }
]
@NgModule({
    imports:[CommonModule,RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PromotionRoutingModule {}