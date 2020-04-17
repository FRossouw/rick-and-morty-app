import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../../models/character';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input()
  character: Character;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get createdDate(): string {

    return moment(this.character.created).fromNow();
  }

  viewEpisodes(character: Character) {
    const episodeNumbers = character.episode
      .map(e => e.substring(e.lastIndexOf('/') + 1))
      .join(',');

    this.router.navigate([ 'episodes' ], { queryParams: { numbers: episodeNumbers }})
      .catch(e => console.error(e));
  }

}
