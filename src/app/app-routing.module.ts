import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LogInComponent} from './logging/log-in/log-in.component';
import {SignUpComponent} from './logging/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'log-in',
    component: LogInComponent,
    loadChildren: () => import('./logging/logging.module').then(m => m.LoggingModule)
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    loadChildren: () => import('./logging/logging.module').then(m => m.LoggingModule)
  },
  {path: 'flows', loadChildren: () => import('./flows/flows.module').then(m => m.FlowsModule)},
  {path: 'processors', loadChildren: () => import('./processors/processors.module').then(m => m.ProcessorsModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
