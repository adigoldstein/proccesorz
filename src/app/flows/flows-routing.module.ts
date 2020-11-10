import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FlowsListComponent} from './flows-list/flows-list.component';
import {FlowComponent} from './flow/flow.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'flows-list'
      },
      {
        path: 'flows-list',
        component: FlowsListComponent},
      {
        path: ':id',
        component: FlowComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowsRoutingModule {
}
