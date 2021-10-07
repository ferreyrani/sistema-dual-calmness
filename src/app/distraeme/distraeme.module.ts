import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistraemePageRoutingModule } from './distraeme-routing.module';

import { DistraemePage } from './distraeme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistraemePageRoutingModule
  ],
  declarations: [DistraemePage]
})
export class DistraemePageModule {}
