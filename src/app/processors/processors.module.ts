import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProcessorsRoutingModule} from './processors-routing.module';
import {ProccessorsListComponent} from './proccessors-list/proccessors-list.component';


@NgModule({
  declarations: [ProccessorsListComponent],
  imports: [
    CommonModule,
    ProcessorsRoutingModule
  ]
})
export class ProcessorsModule {
}
