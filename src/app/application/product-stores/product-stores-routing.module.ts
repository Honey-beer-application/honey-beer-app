import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { ProductStoresComponent } from "./product-stores.component";

const routes:Routes=[
    {
        path:'',
        component:ProductStoresComponent
    }
]
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class ProductStoresRoutingModule {}