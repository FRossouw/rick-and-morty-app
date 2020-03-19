import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';
import {AppComponent} from '../app.component';
import {newEvent} from '../app.component.spec';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('CharactersComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterListComponent ],
      imports: [ ReactiveFormsModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: Add characters component unit tests.

  it('should update the query when users searches by character name', (done) => {
    fixture = TestBed.createComponent(CharacterListComponent);

    const characterListComponent = fixture.componentInstance;
    const hostElement = fixture.nativeElement;
    const characterName = 'Rick Sanchez';

    fixture.detectChanges();
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
