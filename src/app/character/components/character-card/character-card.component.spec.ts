import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardComponent } from './character-card.component';
import {Character} from '../../../models/character';
import * as moment from 'moment';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;
  let CHARACTER;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCardComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    CHARACTER = {
      id: 1,
      name: 'Rick Sanchez',
      image: '',
      episode: ['1', '2', '3', '4', '5'],
      created: moment().subtract(2, 'days').toString()
    } as Character;

  }));

  it('createdDate returns humanized date', () => {
    component.character = CHARACTER;
    fixture.detectChanges();

    expect(component.createdDate).toBe('2 days ago');
  });

  it('should navigate to view episode', () => {
    component.character = CHARACTER;
    fixture.detectChanges();

    const viewEpisodesFun = spyOn(component, 'viewEpisodes');

    const viewEpisodeBtn = fixture.debugElement.query(By.css('button'));

    viewEpisodeBtn.triggerEventHandler('click', null);

    expect(viewEpisodesFun).toHaveBeenCalledWith(CHARACTER);
  });
});
