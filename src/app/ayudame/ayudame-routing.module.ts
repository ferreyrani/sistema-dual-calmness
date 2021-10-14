import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyudamePage } from './ayudame.page';

const routes: Routes = [
  {
    path: '',
    component: AyudamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyudamePageRoutingModule {}
