import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroConfigContactsPage } from './intro-config-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: IntroConfigContactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroConfigContactsPageRoutingModule {}
