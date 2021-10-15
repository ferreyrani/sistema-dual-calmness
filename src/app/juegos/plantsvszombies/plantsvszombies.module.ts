import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantsvszombiesPageRoutingModule } from './plantsvszombies-routing.module';

import { PlantsvszombiesPage } from './plantsvszombies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantsvszombiesPageRoutingModule
  ],
  declarations: [PlantsvszombiesPage]
})
export class PlantsvszombiesPageModule {}
