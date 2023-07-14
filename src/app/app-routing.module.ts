import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"app"
  },
  {
    path:"register",
    pathMatch:"full",
    loadChildren:()=> import("./register/register.module").then(m=>m.RegisterModule),
    component:RegisterComponent
  },
  {
    path:"login",
    pathMatch:"full",
    loadChildren:()=>import("./login/login.module").then(m=>m.LoginModule),
    component:LoginComponent
  },
  {
    path:"app",
    loadChildren:()=>import("./application/application.module").then(m=>m.ApplicationModule),
    component:ApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
