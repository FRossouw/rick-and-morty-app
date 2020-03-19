import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardComponent } from './character-card.component';

describe('CharacterComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: Add Character component unit tests.

});
