import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoresComponent } from './components/scores/scores.component';
import { LeaguesComponent } from './components/leagues/leagues.component';
import { UclComponent } from './components/ucl/ucl.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'scores', component: ScoresComponent },
  { path: 'leagues', component: LeaguesComponent },
  {path: 'ucl', component: UclComponent},
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
