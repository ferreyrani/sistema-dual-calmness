import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivasonidoPage } from './activasonido.page';

const routes: Routes = [
  {
    path: '',
    component: ActivasonidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivasonidoPageRoutingModule {}
