import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { NavigationBigComponent } from '../navigation/navigation-big/navigation-big.component';
import { NavigationMediumComponent } from '../navigation/navigation-medium/navigation-medium.component';
import { NavigationSmallComponent } from '../navigation/navigation-small/navigation-small.component';
import { MainPageModule } from '../main-page/main-page.module';
import { AppRoutingModule } from '../app-routing.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ApplicationComponent,
    NavigationBigComponent,
    NavigationMediumComponent,
    NavigationSmallComponent,
  ],
  imports: [
    CommonModule,
    MainPageModule,
    AppRoutingModule,
    MatIconModule,
  ]
})
export class ApplicationModule { }
