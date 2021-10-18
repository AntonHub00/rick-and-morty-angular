import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/ICharacter.model';
import { RickAndMortyAPIService } from 'src/app/services/rickAndMortyAPI/rick-and-morty-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  characters: ICharacter[] = [];

  constructor(private rickAndMortyAPIService: RickAndMortyAPIService) {}

  ngOnInit(): void {
    this.rickAndMortyAPIService.getAllCharacters().subscribe(
      (response) => (this.characters = response),
      (error) => {
        console.log("ERROR: Couldn't get all characters");
        console.log(error);
      }
    );
  }
}
