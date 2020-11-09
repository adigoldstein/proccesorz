import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProccesorsRoutingModule } from './proccesors-routing.module';
import { ProccesorsComponent } from './proccesors.component';


@NgModule({
  declarations: [ProccesorsComponent],
  imports: [
    CommonModule,
    ProccesorsRoutingModule
  ]
})
export class ProccesorsModule { }
