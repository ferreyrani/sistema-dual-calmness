import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistraemePage } from './distraeme.page';

const routes: Routes = [
  {
    path: '',
    component: DistraemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistraemePageRoutingModule {}
