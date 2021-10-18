import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { PreviewCardComponent } from './components/preview-card/preview-card.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { CharacterDetailsComponent } from './views/character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PreviewCardComponent,
    DetailsCardComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
