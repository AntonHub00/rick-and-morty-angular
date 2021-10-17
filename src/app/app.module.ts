import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { PreviewCardComponent } from './components/preview-card/preview-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PreviewCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
