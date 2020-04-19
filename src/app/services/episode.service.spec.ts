import { TestBed } from '@angular/core/testing';
import { EpisodeService } from './episode.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Episode} from '../models/episode';
import {environment} from '../../environments/environment';

describe('EpisodeService', () => {
  let httpTestingController: HttpTestingController;
  let service: EpisodeService;
  let EPISODES;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        EpisodeService
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(EpisodeService);

    EPISODES = [
      { id: 1, name: 'Rick Potion #9' },
      { id: 2, name: 'Raising Gazorpazorp' }
    ] as Episode[];

  });

  describe('getEpisodes', () => {
    it('should return episodes', () => {
      service.getEpisodes().subscribe();

      const req = httpTestingController.expectOne(`${environment.apiUri}/api/episode`);
      req.flush(EPISODES);
      httpTestingController.verify();

      expect().nothing();
    });

    it('should filter episodes', () => {
      service.getEpisodes('1,2,3,4,5').subscribe();

      const req = httpTestingController.expectOne(`${environment.apiUri}/api/episode/1,2,3,4,5`);
      req.flush(EPISODES);
      httpTestingController.verify();

      expect().nothing();
    });

    it('should filter one episode', () => {
      service.getEpisodes('1').subscribe();

      const req = httpTestingController.expectOne(`${environment.apiUri}/api/episode/1`);
      req.flush(EPISODES);
      httpTestingController.verify();

      expect().nothing();

    });

  });
});
