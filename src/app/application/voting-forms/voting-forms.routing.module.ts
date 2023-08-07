import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VotingFormsComponent } from "./voting-forms.component";

const routes:Routes = [
    {
        path:'',
        component:VotingFormsComponent
    }
]
@NgModule({
    imports:[CommonModule,RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class VotingFormsRoutingModule {}