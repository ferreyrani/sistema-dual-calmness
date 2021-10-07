import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroConfigPageRoutingModule } from './intro-config-routing.module';

import { IntroConfigPage } from './intro-config.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroConfigPageRoutingModule
  ],
  declarations: [IntroConfigPage]
})
export class IntroConfigPageModule {}
