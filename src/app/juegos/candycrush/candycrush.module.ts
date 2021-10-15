import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandycrushPageRoutingModule } from './candycrush-routing.module';

import { CandycrushPage } from './candycrush.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandycrushPageRoutingModule
  ],
  declarations: [CandycrushPage]
})
export class CandycrushPageModule {}
