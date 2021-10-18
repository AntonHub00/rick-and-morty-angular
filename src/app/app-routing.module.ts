import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './views/main/main.component';
import { CharacterDetailsComponent } from './views/character-details/character-details.component';

const routes: Routes = [
  { path: 'characters', component: MainComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'characters' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
