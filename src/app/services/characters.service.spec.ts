import { TestBed } from '@angular/core/testing';

import { CharactersService } from './characters.service';
import {Characters} from '../models/characters';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {environment} from '../../environments/environment';

describe('CharactersService', () => {
  let httpTestingController: HttpTestingController;
  let charactersService: CharactersService;
  let CHARACTERS: Characters;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    charactersService = TestBed.inject(CharactersService);

    CHARACTERS = {
      results: [{
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive'
      }]
    } as Characters;

  });

  describe('getCharacters', () => {
    it('should return characters', (done: DoneFn) => {
      charactersService.getCharacters('')
        .subscribe(value => {

          expect(value)
            .toBe(CHARACTERS);

          done();
        });

      const req = httpTestingController.expectOne(`${environment.apiUri}/api/character`);
      req.flush(CHARACTERS);
      httpTestingController.verify();

    });

    it('should filter characters', (done: DoneFn) => {
      charactersService.getCharacters('Rick Sanchez')
        .subscribe(value =>  {
          expect(value)
            .toBe(CHARACTERS);

          done();
        });

      const req = httpTestingController.expectOne(`${environment.apiUri}/api/character?name=Rick Sanchez`);
      req.flush(CHARACTERS);
      httpTestingController.verify();

    });

  });
});
