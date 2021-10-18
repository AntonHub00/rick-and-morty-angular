import { Component, Input } from '@angular/core';
import { ICharacter } from 'src/app/models/ICharacter.model';

@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss'],
})
export class PreviewCardComponent {
  @Input() character?: ICharacter;
}
