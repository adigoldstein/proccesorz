import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgxGraphModule} from '@swimlane/ngx-graph';
import {MenubarModule} from 'primeng/menubar';
import {HeaderComponent} from './components/header/header.component';
import { SharedModule as PrimeShared} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    MenubarModule,
    NgxGraphModule,
    PrimeShared,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    MegaMenuModule,
    TableModule
  ],
  exports: [
    // Modules:
    NgxGraphModule,
    MenubarModule,
    PrimeShared,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    MegaMenuModule,
    TableModule,

    // Components:
    HeaderComponent,
    SidebarComponent,
  ]
})
export class SharedModule {
}
