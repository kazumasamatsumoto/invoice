import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AquariusPage } from './aquarius.page';

const routes: Routes = [
  {
    path: '',
    component: AquariusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AquariusPageRoutingModule {}
