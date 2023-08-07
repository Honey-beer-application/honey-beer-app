import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingFormsRoutingModule } from './voting-forms.routing.module';
import { VotingFormsCardComponent } from './voting-forms-card/voting-forms-card.component';



@NgModule({
  declarations: [VotingFormsCardComponent],
  imports: [
    CommonModule,
    VotingFormsRoutingModule
  ],
  exports:[VotingFormsCardComponent]
})
export class VotingFormsModule { }
