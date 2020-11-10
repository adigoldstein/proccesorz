import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProccessorsListComponent} from './proccessors-list/proccessors-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'processors-list'
      },
      {
        path: 'processors-list',
        component: ProccessorsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessorsRoutingModule {
}
