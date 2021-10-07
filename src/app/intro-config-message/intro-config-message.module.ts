import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroConfigMessagePageRoutingModule } from './intro-config-message-routing.module';

import { IntroConfigMessagePage } from './intro-config-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroConfigMessagePageRoutingModule
  ],
  declarations: [IntroConfigMessagePage]
})
export class IntroConfigMessagePageModule {}
