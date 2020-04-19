import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CharacterListComponent} from './character-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CharactersService} from '../../../services/characters.service';
import {of} from 'rxjs';
import {By} from '@angular/platform-browser';
import {Component, Input} from '@angular/core';
import {Character} from '../../../models/character';
import {Characters} from '../../../models/characters';

@Component({
  selector: 'app-character-card',
  template: '<div></div>'
})
class FakeCharacterCardComponent {
  @Input()
  character: Character;
}

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let characterService;
  let CHARACTERS;

  beforeEach(async(() => {

    characterService = jasmine.createSpyObj(['getCharacters']);
    CHARACTERS = {
      results: [
        {id: 1, name: 'Rick Sanchez'},
        {id: 2, name: 'Summer Smith'},
        {id: 3, name: 'Ants in my Eyes Johnson'}
      ]
    } as Characters;


    TestBed.configureTestingModule({
      declarations: [ CharacterListComponent, FakeCharacterCardComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [
        {
          provide: CharactersService,
          useValue: characterService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;

  }));

  it('should display loading indicator', () => {
    characterService.getCharacters.and.returnValue(of([]));

    fixture.detectChanges();

    component.loading$.next(true);
    fixture.detectChanges();

    const loadingIndicators = fixture.debugElement.queryAll(By.css('img'));

    expect(loadingIndicators.length).toBe(1);

  });

  it('should display characters', async () => {
    characterService.getCharacters.and.returnValue(of(CHARACTERS));

    fixture.detectChanges();

    const characters = fixture.debugElement.queryAll(By.directive(FakeCharacterCardComponent));

    expect(characters.length).toBe(3);

    for (let i = 0; i < characters.length; i++) {
      expect(CHARACTERS.results[i]).toEqual(characters[i].componentInstance.character);
    }
  });

});
