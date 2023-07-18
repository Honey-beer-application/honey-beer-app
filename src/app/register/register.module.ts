import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule} from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    ReactiveFormsModule,
    RegisterRoutingModule,
    CommonModule
  ]
})
export class RegisterModule {}
