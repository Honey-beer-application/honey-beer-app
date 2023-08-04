import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { PromotionsComponent } from "./promotions.component";
const routes:Routes=[
    {
        path:'',
        children:[
            {
                path:'',
                component:PromotionsComponent
            },
            {
                path:":id",
                loadChildren:()=>import("./promotion/promotion.module").then(m=>m.PromotionModule)
            }
        ]
    }
]
@NgModule({
    imports:[CommonModule,RouterModule.forChild(routes)]
})
export class PromotionsRoutingModule {}