import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Episode} from '../models/episode';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  getEpisodes(query?: string): Observable<Episode[]> {
    if (!query) {
      return this.http.get<any>(`${environment.apiUri}/api/episode`)
        .pipe(map(r => r.result));
    }

    return this.http
      .get<Episode[]>(`${environment.apiUri}/api/episode/${query}`)
      .pipe(map(response => {
          if (!Array.isArray(response)) {
            return [ response ];
          }

          return response;
        }));

  }
}
