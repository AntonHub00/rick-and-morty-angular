import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { PreviewCardComponent } from './components/preview-card/preview-card.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { CharacterDetailsComponent } from './views/character-details/character-details.component';
import { AppRoutingModule } from './app-routing.module';
import { NullishValidatorPipe } from './pipes/nullish-validator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PreviewCardComponent,
    DetailsCardComponent,
    CharacterDetailsComponent,
    NullishValidatorPipe,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
