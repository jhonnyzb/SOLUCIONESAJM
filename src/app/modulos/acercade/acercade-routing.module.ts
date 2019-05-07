import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercadeComponent } from './acercade.component';

const routes: Routes = [
  {
    path: 'about', component: AcercadeComponent
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcercadeRoutingModule { }
