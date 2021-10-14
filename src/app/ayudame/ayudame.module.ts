import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudamePageRoutingModule } from './ayudame-routing.module';

import { AyudamePage } from './ayudame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudamePageRoutingModule
  ],
  declarations: [AyudamePage]
})
export class AyudamePageModule {}
