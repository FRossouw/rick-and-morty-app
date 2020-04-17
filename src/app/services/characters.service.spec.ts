import { TestBed } from '@angular/core/testing';

import { CharactersService } from './characters.service';
import {Characters} from '../models/characters';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {environment} from '../../environments/environment';

describe('CharactersService', () => {
  let httpTestingController: HttpTestingController;
  let charactersService: CharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    charactersService = TestBed.inject(CharactersService);

  });

  describe('CharactersService', () => {
    it('#getCharacters should return characters', (done: DoneFn) => {
      // FROM DEEZER
      const characters = {
        results: [{
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive'
        }]
      } as Characters;

      charactersService.getCharacters('')
        .subscribe(value => {

          expect(value)
            .toBe(characters);

          done();
        });

      const controller = httpTestingController.expectOne(`${environment.apiUri}/api/character`);
      controller.flush(characters);
      httpTestingController.verify();

    });
  });
});
