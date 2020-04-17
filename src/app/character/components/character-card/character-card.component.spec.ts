import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardComponent } from './character-card.component';
import {Character} from '../../../models/character';
import * as moment from 'moment';
import {RouterTestingModule} from '@angular/router/testing';

describe('CharacterComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCardComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;

    component.character = {
      id: 1,
      name: 'Rick Sanchez',
      created: moment().subtract(2, 'days').toString()
    } as Character;

    fixture.detectChanges();
  });

  describe('Character card', () => {
    it('#createdDate returns humanized date', () => {
       expect(component.createdDate).toBe('2 days ago');
    });
  });
});
