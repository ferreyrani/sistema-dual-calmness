import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandycrushPage } from './candycrush.page';

const routes: Routes = [
  {
    path: '',
    component: CandycrushPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandycrushPageRoutingModule {}
