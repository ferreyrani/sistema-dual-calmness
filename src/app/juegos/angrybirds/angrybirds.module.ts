import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngrybirdsPageRoutingModule } from './angrybirds-routing.module';

import { AngrybirdsPage } from './angrybirds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngrybirdsPageRoutingModule
  ],
  declarations: [AngrybirdsPage]
})
export class AngrybirdsPageModule {}
