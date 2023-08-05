import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { AccountComponent } from "./account.component";

const routes:Routes = [
    {
        path:"",
        component:AccountComponent
    }
]
@NgModule({
    imports:[CommonModule,RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AccountRoutingModule {}