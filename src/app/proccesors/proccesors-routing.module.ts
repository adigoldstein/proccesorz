import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProccesorsComponent } from './proccesors.component';

const routes: Routes = [{ path: '', component: ProccesorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProccesorsRoutingModule { }
