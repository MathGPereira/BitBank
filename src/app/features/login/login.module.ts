import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { InputsLoginComponent } from './components/inputs-login/inputs-login.component';


@NgModule({
  declarations: [
    LoginComponent,
    InputsLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
