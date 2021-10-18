import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { rickAndMortyApiCall } from 'src/app/models/rickAndMortyApiCall.model';
import { Character } from 'src/app/models/character.model';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyAPIService {
  private baseURL = 'https://rickandmortyapi.com/api/';
  private charactersEndpoint = 'character';

  constructor(private httpClient: HttpClient) {}

  public getAllCharacters(): Observable<Character[]> {
    return this.httpClient
      .get<rickAndMortyApiCall>(`${this.baseURL}${this.charactersEndpoint}`)
      .pipe(
        map((response) => {
          return response.results ?? [];
        })
      );
  }

  public getCharacterById(id: number): Observable<Character> {
    return this.httpClient
      .get<Character>(`${this.baseURL}${this.charactersEndpoint}/${id}`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
