import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"app"
  },
  {
    path:"register",
    pathMatch:"full",
    loadChildren:()=> import("./register/register.module").then(m=>m.RegisterModule)
  },
  {
    path:"login",
    pathMatch:"full",
    loadChildren:()=>import("./login/login.module").then(m=>m.LoginModule)
  },
  {
    path:"app",
    loadChildren:()=>import("./application/application.module").then(m=>m.ApplicationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
