import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"app"
  },
  {
    path:"register",
    pathMatch:"full",
    component:RegisterComponent
  },
  {
    path:"app",
    component:ApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
