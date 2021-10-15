import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngrybirdsPage } from './angrybirds.page';

const routes: Routes = [
  {
    path: '',
    component: AngrybirdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngrybirdsPageRoutingModule {}
