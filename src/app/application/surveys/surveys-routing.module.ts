import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { SurveysComponent } from "./surveys.component";

const routes:Routes=[
    {
        path:'',
        component:SurveysComponent
    },
    {
        path:':id',
        loadChildren:()=>import("./survey/survey.module").then(m=>m.SurveyModule)
    }
]
@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class SurveysRoutingModule {}