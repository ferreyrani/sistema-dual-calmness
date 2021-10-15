import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantsvszombiesPage } from './plantsvszombies.page';

const routes: Routes = [
  {
    path: '',
    component: PlantsvszombiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantsvszombiesPageRoutingModule {}
