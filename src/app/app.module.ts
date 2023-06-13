import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './main-page/main-page.module';
import { MainPageComponent } from './main-page/main-page.component';
import { NavigationBigComponent } from './navigation/navigation-big/navigation-big.component';
import { NavigationMediumComponent } from './navigation/navigation-medium/navigation-medium.component';
import { NavigationSmallComponent } from './navigation/navigation-small/navigation-small.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationBigComponent,
    NavigationMediumComponent,
    NavigationSmallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
