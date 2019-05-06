import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutUsuariosComponent } from './layout-usuarios/layout-usuarios.component';

const routes: Routes = [
  {
    path: 'usuarios', component: LayoutUsuariosComponent

  },
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/usuarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
