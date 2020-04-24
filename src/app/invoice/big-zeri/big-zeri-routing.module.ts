import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BigZeriPage } from './big-zeri.page';

const routes: Routes = [
  {
    path: '',
    component: BigZeriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BigZeriPageRoutingModule {}
