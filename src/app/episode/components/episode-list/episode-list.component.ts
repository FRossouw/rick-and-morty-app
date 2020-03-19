import { Component, OnInit } from '@angular/core';
import {EpisodeService} from '../../../services/episode.service';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {Episodes} from '../../../models/episodes';
import {Episode} from '../../../models/episode';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  episodes: Episode[];
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(private episodeService: EpisodeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const episodeNumbers = !!this.route.snapshot.queryParams && !!this.route.snapshot.queryParams.numbers ?
        this.route.snapshot.queryParams.numbers : '';

    this.episodeService.getEpisodes(episodeNumbers)
      .subscribe(e => {
        this.loading$.next(false);
        this.episodes = e;
      });
  }

}
