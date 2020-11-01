import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {NgxGraphModule} from '@swimlane/ngx-graph';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    NgxGraphModule
  ],
  exports: [
    NgxGraphModule,
    ButtonModule
  ]
})
export class SharedModule { }
