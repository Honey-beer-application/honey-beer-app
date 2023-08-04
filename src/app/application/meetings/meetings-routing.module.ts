import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { MeetingsComponent } from "./meetings.component";
const routes:Routes=[
    {
        path:'',
        component:MeetingsComponent
    }
]
@NgModule({
    imports:[CommonModule,RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class MeetingsRoutingModule {}