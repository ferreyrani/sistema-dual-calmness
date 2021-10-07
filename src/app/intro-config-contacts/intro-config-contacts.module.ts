import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroConfigContactsPageRoutingModule } from './intro-config-contacts-routing.module';

import { IntroConfigContactsPage } from './intro-config-contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroConfigContactsPageRoutingModule
  ],
  declarations: [IntroConfigContactsPage]
})
export class IntroConfigContactsPageModule {}
