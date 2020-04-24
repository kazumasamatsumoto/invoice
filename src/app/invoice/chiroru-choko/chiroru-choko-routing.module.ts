import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChiroruChokoPage } from './chiroru-choko.page';

const routes: Routes = [
  {
    path: '',
    component: ChiroruChokoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChiroruChokoPageRoutingModule {}
