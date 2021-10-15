import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeditacionPage } from './meditacion.page';

const routes: Routes = [
  {
    path: '',
    component: MeditacionPage
  },
  {
    path: 'activasonido',
    loadChildren: () => import('./activasonido/activasonido.module').then( m => m.ActivasonidoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeditacionPageRoutingModule {}
