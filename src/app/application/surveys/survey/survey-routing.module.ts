import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { SurveyComponent } from "./survey.component";
const routes:Routes = [
    {
        path:'',
        component:SurveyComponent
    }
]
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class SurveyRoutingModule {}