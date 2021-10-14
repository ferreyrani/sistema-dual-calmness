import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistraemePage } from './distraeme.page';

const routes: Routes = [
  {
    path: '',
    component: DistraemePage
  },
  {
    path: 'juegos',
    loadChildren: () => import('./juegos/juegos.module').then( m => m.JuegosPageModule)
  },
  {
    path: 'playlist',
    loadChildren: () => import('./playlist/playlist.module').then( m => m.PlaylistPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistraemePageRoutingModule {}
