import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgxGraphModule} from '@swimlane/ngx-graph';
import {MenubarModule} from 'primeng/menubar';
import {HeaderComponent} from './components/header/header.component';
import { SharedModule as PrimeShared} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MenubarModule,
    NgxGraphModule,
    PrimeShared,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxGraphModule,
    MenubarModule,
    PrimeShared,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent
  ]
})
export class SharedModule {
}
