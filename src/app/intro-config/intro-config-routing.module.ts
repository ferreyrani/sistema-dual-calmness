import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroConfigPage } from './intro-config.page';

const routes: Routes = [
  {
    path: '',
    component: IntroConfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroConfigPageRoutingModule {}
