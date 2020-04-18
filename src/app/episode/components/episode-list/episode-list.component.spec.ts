import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeListComponent } from './episode-list.component';
import {By} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {EpisodeService} from '../../../services/episode.service';
import {Component, Input} from '@angular/core';
import {Episode} from '../../../models/episode';

@Component({
  selector: 'app-episode-card',
  template: '<div></div>'
})
class EpisodeCardComponent {
  @Input()
  episode: Episode;
}

describe('EpisodeListComponent', () => {
  let component: EpisodeListComponent;
  let fixture: ComponentFixture<EpisodeListComponent>;
  let episodeService;
  let EPISODES;

  beforeEach(async(() => {
    episodeService = jasmine.createSpyObj(['getEpisodes']);

    EPISODES = [
      { id: 1, name: 'Episode 1' },
      { id: 2, name: 'Episode 2'}
    ];

    TestBed.configureTestingModule({
      declarations: [ EpisodeListComponent, EpisodeCardComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { queryParams: { numbers: '1,2,3,4,5' } }}
        },
        {
          provide: EpisodeService,
          useValue: episodeService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodeListComponent);
    component = fixture.componentInstance;
  }));


  it('should display loading indicator', () => {
    episodeService.getEpisodes.and.returnValue(of([]));
    fixture.detectChanges();

    component.loading$.next(true);
    fixture.detectChanges();

    const loadingIndicator = fixture.debugElement.queryAll(By.css('img'));

    expect(loadingIndicator.length).toBe(1);
  });

  it('should display episodes', () => {
    episodeService.getEpisodes.and.returnValue(of(EPISODES));
    fixture.detectChanges();

    const episodes = fixture.debugElement.queryAll(By.directive(EpisodeCardComponent));

    for (let i = 0; i <  episodes.length; i++) {
      expect(episodes[i].componentInstance.episode).toEqual(EPISODES[i]);
    }
  });
});
