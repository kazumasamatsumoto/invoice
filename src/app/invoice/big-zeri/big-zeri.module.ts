import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BigZeriPageRoutingModule } from './big-zeri-routing.module';

import { BigZeriPage } from './big-zeri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BigZeriPageRoutingModule
  ],
  declarations: [BigZeriPage]
})
export class BigZeriPageModule {}
