import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RickAndMortyAPIService } from 'src/app/services/rickAndMortyAPI/rick-and-morty-api.service';
import { ICharacter } from 'src/app/models/ICharacter.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  character?: ICharacter;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private rickAndMortyAPIService: RickAndMortyAPIService
  ) {}

  ngOnInit() {
    this.getCharacterById();
  }

  goBack() {
    this.location.back();
  }

  private getRouteCharacterId(): number {
    try {
      return Number(this.route.snapshot.paramMap.get('id'));
    } catch (error) {
      throw new Error('The given character id is not a number');
    }
  }

  public getCharacterById() {
    const id = this.getRouteCharacterId();

    // Not API call needed, but for the purposes of this practice....
    this.rickAndMortyAPIService.getCharacterById(id).subscribe(
      (character) => (this.character = character),
      (error) => {
        console.log("ERROR: Couldn't get the character by id");
        console.log(error);
      }
    );
  }
}
