import { Component, Input } from '@angular/core';
import { ICharacter } from 'src/app/models/ICharacter.model';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss'],
})
export class DetailsCardComponent {
  @Input() character?: ICharacter;
}
