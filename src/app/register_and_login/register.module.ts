import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register-and-login.component';
import { ReactiveFormsModule} from '@angular/forms';
import { RegisterRoutingModule } from './register-and-login-routing.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RegisterRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class RegisterModule {}
