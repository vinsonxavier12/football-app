import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoresComponent } from './components/scores/scores.component';
import { LeaguesComponent } from './components/leagues/leagues.component';

const routes: Routes = [
  { path: 'scores', component: ScoresComponent },
  { path: 'leagues', component: LeaguesComponent },
  { path: '', redirectTo: 'leagues', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
