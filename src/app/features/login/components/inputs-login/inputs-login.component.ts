import { Component, Input } from '@angular/core';

@Component({
  selector: 'bank-inputs-login',
  templateUrl: './inputs-login.component.html',
  styleUrls: ['./inputs-login.component.scss']
})
export class InputsLoginComponent {
  @Input() fieldset_name!: String
  @Input() type!: String
  @Input() mozactionhint!: String
  @Input() autocapitalize!: String
  @Input() autocomplete!: String
  @Input() autocorrect!: String
  @Input() input_name!: String
  @Input() placeholder!: String
}
