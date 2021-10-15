import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivasonidoPageRoutingModule } from './activasonido-routing.module';

import { ActivasonidoPage } from './activasonido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivasonidoPageRoutingModule
  ],
  declarations: [ActivasonidoPage]
})
export class ActivasonidoPageModule {}
