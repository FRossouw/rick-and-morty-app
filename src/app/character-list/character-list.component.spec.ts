import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListComponent } from './character-list.component';

describe('CharactersComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: Add characters component unit tests.
});
