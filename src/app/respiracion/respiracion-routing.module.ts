import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiracionPage } from './respiracion.page';

const routes: Routes = [
  {
    path: '',
    component: RespiracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiracionPageRoutingModule {}
