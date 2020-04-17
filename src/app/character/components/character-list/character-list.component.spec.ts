import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';
import {newEvent} from '../../../app.component.spec';
import {ReactiveFormsModule} from '@angular/forms';
import {Characters} from '../../../models/characters';
import {of} from 'rxjs';
import {CharactersService} from '../../../services/characters.service';

describe('CharactersComponent', () => {
  let characterListComponent: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async(() => {

    const charactersService = { getCharacters: (query: string) => {
        return of({ results: [{ id: 1, name: 'Rick Sanchez', status: 'Alive' } ] } as Characters);
      }};

    TestBed.configureTestingModule({
      declarations: [ CharacterListComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [
        {
          provide: CharactersService,
          useValue: charactersService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    characterListComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update the query when users searches by character name', (done) => {

    const hostElement = fixture.nativeElement;
    const characterName = 'Rick Sanchez';

    characterListComponent.query.valueChanges.subscribe(x => {
      expect(x).toEqual('Rick Sanchez');
      done();
    });

    const characterNameInput: HTMLInputElement = hostElement.querySelector('input');

    characterNameInput.value = characterName;

    characterNameInput.dispatchEvent(newEvent('input'));

    fixture.detectChanges();
  });
});
