import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgxGraphModule} from '@swimlane/ngx-graph';
import {MenubarModule} from 'primeng/menubar';
import {HeaderComponent} from './components/header/header.component';
import {SharedModule as PrimeShared} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {TableModule} from 'primeng/table';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {SpinningLoaderComponent} from './components/spinning-loader/spinning-loader.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {PageHeaderDirective} from './directives/page-header.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SpinningLoaderComponent,
    PageHeaderDirective
  ],
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
    TableModule,
    BreadcrumbModule,
    ProgressSpinnerModule,
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
    BreadcrumbModule,
    ProgressSpinnerModule,

    // Components:
    HeaderComponent,
    SidebarComponent,
    SpinningLoaderComponent,
    PageHeaderDirective,
  ]
})
export class SharedModule {
}
