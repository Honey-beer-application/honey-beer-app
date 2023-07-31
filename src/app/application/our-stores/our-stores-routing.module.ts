import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { OurStoresComponent } from "./our-stores.component";

const routes:Routes=[
    {
        path:'',
        component:OurStoresComponent
    }
]
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class OurStoresRoutingModule {}