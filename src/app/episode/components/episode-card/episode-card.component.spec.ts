import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeCardComponent } from './episode-card.component';
import {Episode} from '../../../models/episode';

describe('EpisodeCardComponent', () => {
  let component: EpisodeCardComponent;
  let fixture: ComponentFixture<EpisodeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
