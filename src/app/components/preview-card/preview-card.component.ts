import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss'],
})
export class PreviewCardComponent implements OnInit {
  @Input('character') character: Character = new Character();

  ngOnInit(): void {
    this.character.name = 'Test name';
    this.character.status = 'Test status';
    this.character.image = 'https://via.placeholder.com/300';
  }
}
