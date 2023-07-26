import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ErrorMessagesComponent } from './components/error-messages/error-messages.component';

@NgModule({
  declarations: [
    ErrorMessagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ErrorMessagesComponent]
})
export class SharedModule { }
