import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})
export class DetailsCardComponent {
  @Input() character?: Character;
}
