import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss'],
})
export class PreviewCardComponent implements OnInit {
  @Input('character') character: Character | undefined;

  ngOnInit(): void {}
}
