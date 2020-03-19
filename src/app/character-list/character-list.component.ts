import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Characters } from '../models/characters';
import { switchAll, debounceTime, map, tap } from 'rxjs/operators';
import { of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit, OnChanges {

  @Input() query: string;

  characters: Characters;

  loading$ = new BehaviorSubject<boolean>(true);

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.characterService.getCharacters()
      .subscribe((x) => {
        this.characters = x;

        this.loading$.next(false);
      });
  }

  ngOnChanges(change: SimpleChanges): void {
    of(change.query.currentValue)
      .pipe(
        debounceTime(300),
        tap(() => this.loading$.next(true)),
        map(x => x || null),
        map(x => this.characterService.getCharacters(x)),
        switchAll(),
        tap(() => this.loading$.next(false)))
      .subscribe(x => this.characters = x);
  }

}
