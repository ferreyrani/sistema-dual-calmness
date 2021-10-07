import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiracionPageRoutingModule } from './respiracion-routing.module';

import { RespiracionPage } from './respiracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiracionPageRoutingModule
  ],
  declarations: [RespiracionPage]
})
export class RespiracionPageModule {}
