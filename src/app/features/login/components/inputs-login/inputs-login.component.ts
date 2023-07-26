import { Component, Input } from '@angular/core';

@Component({
  selector: 'bank-inputs-login',
  templateUrl: './inputs-login.component.html',
  styleUrls: ['./inputs-login.component.scss']
})
export class InputsLoginComponent {
  @Input() fieldset_name!: string;
  @Input() type!: string;
  @Input() autocapitalize!: string;
  @Input() autocomplete!: string;
  @Input() input_name!: string;
  @Input() placeholder!: string;
  @Input() minlength!: string;
  @Input() maxlength!: string;
}
