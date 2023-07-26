import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/core/shared/services/login.service';

@Component({
  selector: 'bank-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private service: LoginService
  ) { }

  public login(form: NgForm) {
    if(form.valid) {
      // const inputs: HTMLInputElement[] = Array.from(document.querySelectorAll('input'));
      // const [cpf, password] = [...inputs];

      // this.service.loginAuthentication({cpf: cpf.value, password: password.value});
    }
  }
}
