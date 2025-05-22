import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"app"
  },
  {
    path:"register-and-login",
    pathMatch:"full",
    loadChildren:()=> import("./register_and_login/register.module").then(m=>m.RegisterModule)
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
