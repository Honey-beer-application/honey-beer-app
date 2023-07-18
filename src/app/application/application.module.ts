import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { NavigationBigComponent } from './navigation/navigation-big/navigation-big.component';
import { NavigationMediumComponent } from './navigation/navigation-medium/navigation-medium.component';
import { NavigationSmallComponent } from './navigation/navigation-small/navigation-small.component';
import {MatIconModule} from '@angular/material/icon';
import { ApplicationRoutingModule } from './application-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ApplicationComponent,
    NavigationBigComponent,
    NavigationMediumComponent,
    NavigationSmallComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ApplicationRoutingModule,
    ReactiveFormsModule
  ]
})
export class ApplicationModule { }
