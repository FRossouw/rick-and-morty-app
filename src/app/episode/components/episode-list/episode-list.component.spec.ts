import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeListComponent } from './episode-list.component';
import {EpisodeService} from '../../../services/episode.service';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, RouterModule} from '@angular/router';

describe('EpisodeListComponent', () => {
  let component: EpisodeListComponent;
  let fixture: ComponentFixture<EpisodeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeListComponent ],
      imports: [ HttpClientModule, RouterModule ],
      providers: [ EpisodeService, {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            queryParams: ''
          }
        }
      } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
