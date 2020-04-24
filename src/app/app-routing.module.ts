import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'aquarius',
    loadChildren: () => import('./invoice/aquarius/aquarius.module').then( m => m.AquariusPageModule)
  },
  {
    path: 'big-zeri',
    loadChildren: () => import('./invoice/big-zeri/big-zeri.module').then( m => m.BigZeriPageModule)
  },
  {
    path: 'chiroru-choko',
    loadChildren: () => import('./invoice/chiroru-choko/chiroru-choko.module').then( m => m.ChiroruChokoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
