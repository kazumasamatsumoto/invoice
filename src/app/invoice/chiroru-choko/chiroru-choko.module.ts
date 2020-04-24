import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChiroruChokoPageRoutingModule } from './chiroru-choko-routing.module';

import { ChiroruChokoPage } from './chiroru-choko.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChiroruChokoPageRoutingModule
  ],
  declarations: [ChiroruChokoPage]
})
export class ChiroruChokoPageModule {}
