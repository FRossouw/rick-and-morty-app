import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { EpisodeCardComponent } from './components/episode-card/episode-card.component';


@NgModule({
  declarations: [EpisodeListComponent, EpisodeCardComponent],
  imports: [
    CommonModule,
    EpisodeRoutingModule
  ]
})
export class EpisodeModule { }
