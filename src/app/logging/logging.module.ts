import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
// import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [LogInComponent, SignUpComponent],
  imports: [
    CommonModule,
    // FormsModule,
    SharedModule
  ]
})
export class LoggingModule { }

