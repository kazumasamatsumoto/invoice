import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AquariusPageRoutingModule } from './aquarius-routing.module';

import { AquariusPage } from './aquarius.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AquariusPageRoutingModule
  ],
  declarations: [AquariusPage]
})
export class AquariusPageModule {}
