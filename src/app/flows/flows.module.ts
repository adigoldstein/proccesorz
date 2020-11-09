import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FlowsRoutingModule} from './flows-routing.module';
import {FlowsListComponent} from './flows-list/flows-list.component';
import {SharedModule} from '../../shared/shared.module';
import { FlowComponent } from './flow/flow.component';


@NgModule({
  declarations: [FlowsListComponent, FlowComponent],
  exports: [
    FlowsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlowsRoutingModule
  ]
})
export class FlowsModule {
}
