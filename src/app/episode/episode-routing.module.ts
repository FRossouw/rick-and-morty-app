import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EpisodeListComponent} from './components/episode-list/episode-list.component';
import {NotFoundComponent} from '../not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: EpisodeListComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule { }
