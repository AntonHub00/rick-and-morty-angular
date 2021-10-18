import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IRickAndMortyApiCall } from 'src/app/models/rickAndMortyApiCall.model';
import { ICharacter } from 'src/app/models/ICharacter.model';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyAPIService {
  private baseURL = 'https://rickandmortyapi.com/api/';
  private charactersEndpoint = 'character';

  constructor(private httpClient: HttpClient) {}

  public getAllCharacters(): Observable<ICharacter[]> {
    return this.httpClient
      .get<IRickAndMortyApiCall>(`${this.baseURL}${this.charactersEndpoint}`)
      .pipe(
        map((response) => {
          return response.results;
        })
      );
  }

  public getCharacterById(id: number): Observable<ICharacter> {
    return this.httpClient
      .get<ICharacter>(`${this.baseURL}${this.charactersEndpoint}/${id}`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
