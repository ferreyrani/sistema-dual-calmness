import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroConfigMessagePage } from './intro-config-message.page';

const routes: Routes = [
  {
    path: '',
    component: IntroConfigMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroConfigMessagePageRoutingModule {}
