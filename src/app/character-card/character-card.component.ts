import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../models/character';
import * as moment from 'moment';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input()
  character: Character;

  constructor() { }

  ngOnInit(): void {
  }

  get createdDate(): string {
    return moment(this.character.created).fromNow();
  }

}
