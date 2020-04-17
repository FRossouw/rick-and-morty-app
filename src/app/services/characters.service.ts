import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Characters } from '../models/characters';
import {Observable, of} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) { }

  public getCharacters(query?: string): Observable<Characters> {
    return this.http.get<Characters>(`${environment.apiUri}/api/character${query ? `?name=${query}` : ''}`);
  }
}
