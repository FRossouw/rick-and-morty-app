import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters'
  },
  {
    path: 'episodes',
    loadChildren: () => import('./episode/episode.module').then(m => m.EpisodeModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./character/character.module').then(m => m.CharacterModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ]
})
export class AppRoutingModule {
}
